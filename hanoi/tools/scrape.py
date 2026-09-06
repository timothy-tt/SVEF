#!/usr/bin/env python3
"""Scrape hanoi2026.svef.ch (Wix) into a normalized single-event dataset.

Sources:
  * Wix Events app  -> event record, registration/RSVP form, ticketing, urls
  * Wix Data (CMS)  -> Import1 (Events), Import2 (Speakers), SpeakerList (panels)

Auth: the site hands anonymous visitors a per-app instance token at
/_api/v1/access-tokens; that token is enough for public read on this site.

Usage:  python3 scrape.py [--code HANOI2026] [--out .]
"""
import argparse, json, os, re, socket, sys, time, urllib.request, urllib.error

socket.setdefaulttimeout(45)


def log(*a):
    print(*a, flush=True)

SITE = "https://hanoi2026.svef.ch"
EVENTS_APP = "140603ad-af8d-84a5-2c80-a0f60cb47351"
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/128.0 Safari/537.36"}


def http(url, body=None, headers=None, tries=4):
    hdr = dict(UA)
    hdr.update(headers or {})
    data = None
    if body is not None:
        data = json.dumps(body).encode()
        hdr["Content-Type"] = "application/json"
    last = None
    for a in range(tries):
        try:
            req = urllib.request.Request(url, data=data, headers=hdr)
            return urllib.request.urlopen(req, timeout=45).read().decode("utf-8", "replace")
        except urllib.error.HTTPError as e:
            raise RuntimeError(f"{url} -> {e.code} {e.read()[:300].decode('utf-8','replace')}")
        except Exception as e:
            last = e
            log(f"  ! retry {a + 1}/{tries} {url.split('/')[-1]}: {e}")
            time.sleep(1.5 * (a + 1))
    raise RuntimeError(f"{url} -> {last}")


def get_instance():
    tok = json.loads(http(f"{SITE}/_api/v1/access-tokens"))
    return tok["apps"][EVENTS_APP]["instance"], tok


# ---------- Wix Data ----------
def wixdata_query(inst, collection, include=None, filt=None, limit=50):
    """Query a CMS collection with offset paging, optionally resolving multi-references.

    The legacy /_api/cloud-data endpoint is the only one that resolves references for
    anonymous visitors, but it stalls on large reference payloads, so keep pages small
    and only ask for references on the collections that need them.
    """
    out = []
    for page in range(60):
        q = {"paging": {"limit": limit, "offset": page * limit}}
        if filt:
            q["filter"] = filt
        body = {"collectionName": collection, "query": q}
        if include:
            body["includeReferencedItems"] = include
        r = json.loads(http(f"{SITE}/_api/cloud-data/v1/wix-data/collections/query", body,
                            {"Authorization": inst}))
        items = r.get("items", [])
        out += items
        total = r.get("totalCount")
        log(f"  {collection} page {page}: +{len(items)} (have {len(out)}"
            + (f"/{total})" if total is not None else ")"))
        if not items or (total is not None and len(out) >= total) or len(items) < limit:
            break
    return out


# ---------- Wix Events ----------
EVENT_FIELDS = ["DETAILS", "TEXTS", "REGISTRATION", "URLS", "FORM", "AGENDA", "CATEGORIES",
                "SEO_SETTINGS", "FEED"]


def events_query(inst):
    r = json.loads(http("https://www.wixapis.com/events/v3/events/query",
                        {"query": {"paging": {"limit": 100}}, "fields": EVENT_FIELDS},
                        {"Authorization": inst}))
    return r.get("events", [])


# ---------- Ricos rich content ----------
def wix_media_url(src, w=None, h=None):
    """Turn a wix:image:// uri or a media id into a public static.wixstatic.com URL."""
    if not src:
        return None
    if isinstance(src, dict):
        src = src.get("id") or src.get("url") or src.get("src") or ""
    if src.startswith("http"):
        return src
    m = re.match(r"wix:image://v1/([^/]+)", src)
    mid = m.group(1) if m else src
    base = f"https://static.wixstatic.com/media/{mid}"
    if w and h:
        return f"{base}/v1/fill/w_{int(w)},h_{int(h)},al_c,q_85/{mid.split('/')[-1]}"
    return base


BLOCK_TYPES = {"PARAGRAPH", "HEADING", "BLOCKQUOTE", "LIST_ITEM", "CODE_BLOCK"}


def ricos_text(node, sep="\n"):
    """Flatten a Ricos node subtree to plain text, keeping block boundaries.

    Table cells hold several PARAGRAPH children; concatenating them blind glues the
    last word of one line to the first of the next ("PortSite visit"), so blocks are
    joined with `sep` instead.
    """
    if node is None:
        return ""
    if isinstance(node, list):
        return sep.join(x for x in (ricos_text(n, sep) for n in node) if x)
    t = node.get("type")
    if t == "TEXT":
        return (node.get("textData") or {}).get("text", "")
    kids = node.get("nodes") or []
    if t in BLOCK_TYPES:
        return "".join(ricos_text(n, sep) for n in kids)
    parts = [ricos_text(n, sep) for n in kids]
    if any((n.get("type") in BLOCK_TYPES or n.get("type", "").endswith("LIST")) for n in kids):
        return sep.join(x for x in parts if x)
    return "".join(parts)


def ricos_to_markdown(rc):
    """Render Wix Ricos rich-content JSON to markdown. Keeps links, images, lists, tables."""
    if not rc or not isinstance(rc, dict):
        return ""
    lines = []

    def inline(nodes):
        parts = []
        for n in nodes or []:
            if n.get("type") == "TEXT":
                td = n.get("textData") or {}
                txt = td.get("text", "")
                link = None
                bold = italic = False
                for d in td.get("decorations") or []:
                    if d.get("type") == "LINK":
                        link = ((d.get("linkData") or {}).get("link") or {}).get("url")
                    elif d.get("type") == "BOLD":
                        bold = True
                    elif d.get("type") == "ITALIC":
                        italic = True
                if bold and txt.strip():
                    txt = f"**{txt}**"
                if italic and txt.strip():
                    txt = f"*{txt}*"
                if link:
                    txt = f"[{txt}]({link})"
                parts.append(txt)
            else:
                parts.append(inline(n.get("nodes")))
        return "".join(parts)

    def walk(nodes, indent=""):
        for n in nodes or []:
            t = n.get("type")
            if t == "PARAGRAPH":
                s = inline(n.get("nodes")).strip()
                lines.append(indent + s if s else "")
            elif t == "HEADING":
                lvl = int((n.get("headingData") or {}).get("level") or 2)
                s = inline(n.get("nodes")).strip()
                if s:
                    lines.append(f"{'#' * max(1, min(6, lvl))} {s}")
            elif t in ("BULLETED_LIST", "ORDERED_LIST"):
                for i, li in enumerate(n.get("nodes") or [], 1):
                    mark = "-" if t == "BULLETED_LIST" else f"{i}."
                    inner = []
                    for sub in li.get("nodes") or []:
                        inner.append(inline(sub.get("nodes")).strip())
                    lines.append(f"{indent}{mark} " + " ".join(x for x in inner if x))
            elif t == "IMAGE":
                d = n.get("imageData") or {}
                url = wix_media_url((d.get("image") or {}).get("src"))
                alt = d.get("altText") or ""
                if url:
                    lines.append(f"![{alt}]({url})")
            elif t == "TABLE":
                rows = []
                for row in n.get("nodes") or []:
                    cells = [re.sub(r"\s*\n\s*", " · ", ricos_text(c).strip())
                             for c in row.get("nodes") or []]
                    rows.append(cells)
                if rows:
                    w = max(len(r) for r in rows)
                    rows = [r + [""] * (w - len(r)) for r in rows]
                    lines.append("| " + " | ".join(rows[0]) + " |")
                    lines.append("| " + " | ".join(["---"] * w) + " |")
                    for r in rows[1:]:
                        lines.append("| " + " | ".join(r) + " |")
            elif t == "DIVIDER":
                lines.append("---")
            elif t == "VIDEO":
                d = (n.get("videoData") or {}).get("video") or {}
                if d.get("src"):
                    lines.append(f"[video]({d['src']})")
            elif t == "BLOCKQUOTE":
                lines.append("> " + inline((n.get("nodes") or [{}])[0].get("nodes")).strip())
            else:
                walk(n.get("nodes"), indent)

    walk(rc.get("nodes"))
    md = "\n".join(lines)
    return re.sub(r"\n{3,}", "\n\n", md).strip()


# ---------- agenda parsing ----------
TIME_RE = re.compile(r"^(\d{1,2}[:.]\d{2})\s*(?:[\u2013\u2014-]\s*(\d{1,2}[:.]\d{2}))?\s*(?:\||\u2013|\u2014|-|\s)\s*(.*)$")
META_RE = re.compile(r"^(venue|format|expected participation|location|dress code|language)\s*:\s*(.*)$", re.I)
TRACK_RE = re.compile(r"^session\s+([A-Z])\s*:\s*(.*)$", re.I)
ROW_RE = re.compile(r"^\|(.*)\|$")
ZW = "\u200b"


def _plain(line):
    """Strip markdown emphasis/links/heading marks, and Wix zero-width padding."""
    t = line.strip().lstrip("#").strip()
    t = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", t)
    t = t.replace("**", "").replace("__", "")
    t = re.sub(r"(?<!\w)\*(?!\s)([^*]+)\*(?!\w)", r"\1", t)
    return t.replace(ZW, "").strip()


def parse_agenda(md):
    """Split one day's agenda markdown into a heading block plus timed sessions.

    The source is hand-formatted rich text, not structured data, so this reads the
    three shapes SVEF actually uses: a leading title/meta block, "HH:MM - HH:MM |
    Title" lines with free-text detail underneath, and (on the field-visit day) a
    markdown table of Time / Type / Programme.
    """
    title, meta, intro, sessions = None, {}, [], []
    cur = None
    rows = []

    def flush():
        nonlocal cur
        if cur:
            body = [b for b in cur["body"] if b]
            tracks, detail = [], []
            for b in body:
                m = TRACK_RE.match(b)
                if m:
                    tracks.append({"track": m.group(1).upper(), "title": m.group(2).strip(),
                                   "summary": ""})
                elif tracks and not tracks[-1]["summary"]:
                    tracks[-1]["summary"] = b
                else:
                    detail.append(b)
            cur["tracks"] = tracks
            cur["detail"] = "\n".join(detail).strip()
            cur.pop("body", None)
            sessions.append(cur)
            cur = None

    for raw in md.split("\n"):
        line = _plain(raw)
        if not line or set(line) <= {"-", "|", " "}:
            continue
        rm = ROW_RE.match(line)
        if rm:
            cells = [c.strip() for c in rm.group(1).split("|")]
            if cells and not all(set(c) <= {"-", ":"} for c in cells if c):
                rows.append(cells)
            continue
        m = TIME_RE.match(line)
        if m:
            flush()
            cur = {"start": m.group(1).replace(".", ":"),
                   "end": (m.group(2) or "").replace(".", ":") or None,
                   "title": m.group(3).strip().lstrip("|").strip(),
                   "kind": "session", "body": []}
            continue
        mm = META_RE.match(line)
        if mm and cur is None:
            meta[mm.group(1).strip().lower().replace(" ", "_")] = mm.group(2).strip()
            continue
        if re.match(r"^programme? highlights$", line, re.I):
            continue          # a section label in the source, not agenda content
        if cur is not None:
            cur["body"].append(line)
        elif title is None:
            title = line
        else:
            intro.append(line)
    flush()

    # markdown table (field-visit day): Time | Type | Programme
    if rows:
        head = [h.lower() for h in rows[0]]
        body_rows = rows[1:] if "time" in head else rows
        ti = head.index("time") if "time" in head else 0
        pi = head.index("programme") if "programme" in head else (len(head) - 1)
        ki = head.index("type") if "type" in head else None
        for r in body_rows:
            if len(r) <= max(ti, pi):
                continue
            prog = [x.strip() for x in r[pi].split("\u00b7") if x.strip()]
            sessions.append({
                "start": r[ti].strip().replace(".", ":") or None,
                "end": None,
                "title": prog[0] if prog else r[pi].strip(),
                "detail": "\n".join(prog[1:]),
                "kind": (r[ki].strip().lower() if ki is not None and len(r) > ki else "session"),
                "tracks": [],
            })

    sessions.sort(key=lambda x: (x["start"] is None, x["start"] or ""))
    return {"title": title or "", "meta": meta, "intro": "\n".join(intro).strip(),
            "sessions": sessions}


def norm_form(form):
    """Flatten the Wix Events RSVP form into a plain field list the UI can render."""
    out = []
    for c in (form or {}).get("controls") or []:
        if c.get("deleted"):
            continue
        for i in c.get("inputs") or []:
            out.append({
                "id": i.get("name"),
                "control": c.get("type"),
                "label": i.get("label") or c.get("label"),
                "type": i.get("type"),
                "required": bool(i.get("mandatory")),
                "maxLength": i.get("maxLength"),
                "options": i.get("options") or [],
                "system": bool(c.get("system")),
                "order": c.get("orderIndex"),
            })
    return sorted(out, key=lambda x: (x["order"] if x["order"] is not None else 99))


def norm_speaker(s):
    return {
        "id": s.get("_id"),
        "name": (s.get("fullName") or "").strip(),
        "title": (s.get("title") or "").strip(),
        "photo": wix_media_url(s.get("avatar")),
        "photoRaw": s.get("avatar"),
        "bio": ricos_to_markdown(s.get("biography")),
        "slug": (s.get("link-speakers-1-fullName") or "").rsplit("/", 1)[-1],
        "sourceUrl": SITE + (s.get("link-speakers-1-fullName") or ""),
        "status": s.get("status"),
        "email": s.get("emailAddress"),
        "website": s.get("website"),
        "updated": (s.get("_updatedDate") or {}).get("$date") if isinstance(s.get("_updatedDate"), dict) else s.get("_updatedDate"),
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--code", default="HANOI2026", help="CMS event code")
    ap.add_argument("--out", default=os.path.dirname(os.path.abspath(__file__)))
    args = ap.parse_args()
    out = os.path.abspath(args.out)
    raw = os.path.join(out, "raw")
    os.makedirs(raw, exist_ok=True)

    inst, tok = get_instance()
    log("site:", tok["metaSiteId"])

    # --- Wix Events app ---
    app_events = events_query(inst)
    json.dump(app_events, open(f"{raw}/wix_events.json", "w"), indent=1, ensure_ascii=False)
    want = args.code.lower().replace("20", "")  # HANOI2026 -> hanoi26; match loosely
    app_ev = None
    for e in app_events:
        s = (e.get("slug") or "") + " " + (e.get("title") or "")
        if "ha noi" in s.lower() or "hanoi" in s.lower():
            if e.get("status") in ("UPCOMING", "STARTED"):
                app_ev = e
                break
    log("wix-events match:", (app_ev or {}).get("title"))

    # --- CMS ---
    log("fetching CMS ...")
    cms_events = wixdata_query(inst, "Import1", filt={"code": args.code.upper()},
                               include=["speakersPanelList", "SpeakerList_multireference"])
    speakers_all = wixdata_query(inst, "Import2")
    # resolving referenceSpeakers across every panel is a multi-MB response that the
    # legacy endpoint stalls on, so pull only the panels this event points at.
    want_codes = {r.get("code") for k in ("speakersPanelList", "SpeakerList_multireference")
                  for e in cms_events for r in (e.get(k) or [])}
    panels = []
    for c in sorted(x for x in want_codes if x):
        panels += wixdata_query(inst, "SpeakerList", filt={"code": c},
                                include=["referenceSpeakers"], limit=5)
    for name, obj in [("Import1", cms_events), ("Import2", speakers_all), ("SpeakerList", panels)]:
        json.dump(obj, open(f"{raw}/{name}.json", "w"), indent=1, ensure_ascii=False)

    cms = next((e for e in cms_events if (e.get("code") or "").upper() == args.code.upper()), None)
    if not cms:
        sys.exit(f"no CMS event with code {args.code}")

    panel_by_code = {p.get("code"): p for p in panels}
    groups = []
    for key in ("SpeakerList_multireference", "speakersPanelList"):
        for ref in cms.get(key) or []:
            p = panel_by_code.get(ref.get("code")) or ref
            groups.append({
                "code": p.get("code"),
                "title": (p.get("title") or "").strip(),
                "kind": "keynote" if key == "SpeakerList_multireference" else "panel",
                "description": ricos_to_markdown(p.get("description_fld")) if isinstance(p.get("description_fld"), dict) else (p.get("description_fld") or ""),
                "speakers": [norm_speaker(s) for s in (p.get("referenceSpeakers") or [])],
            })

    seen, speakers = set(), []
    for g in groups:
        for s in g["speakers"]:
            if s["id"] not in seen:
                seen.add(s["id"])
                speakers.append(s)

    days = []
    for i in (1, 2, 3):
        md = ricos_to_markdown(cms.get(f"agendaDay{i}"))
        if md:
            p = parse_agenda(md)
            days.append({"day": i, "title": p["title"], "meta": p["meta"],
                         "intro": p["intro"], "sessions": p["sessions"], "markdown": md})

    ds = (app_ev or {}).get("dateAndTimeSettings") or {}
    loc = (app_ev or {}).get("location") or {}
    reg = (app_ev or {}).get("registration") or {}
    bundle = {
        "source": SITE,
        "scrapedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "event": {
            "code": cms.get("code"),
            "cmsId": cms.get("_id"),
            "appId": (app_ev or {}).get("id"),
            "name": re.sub(r"\s+", " ", (cms.get("eventName") or "").replace("​", "")).strip(),
            "title": (app_ev or {}).get("title"),
            "shortDescription": (app_ev or {}).get("shortDescription"),
            "description": ricos_to_markdown((app_ev or {}).get("detailedDescription")),
            "cmsDateStart": cms.get("dateStart"),
            "cmsDateEnd": cms.get("dateEnd"),
            "appStart": ds.get("startDate"),
            "appEnd": ds.get("endDate"),
            "timeZoneId": ds.get("timeZoneId"),
            "status": (app_ev or {}).get("status"),
            "slug": (app_ev or {}).get("slug"),
            "eventPageUrl": ((app_ev or {}).get("eventPageUrl") or {}).get("url") if isinstance((app_ev or {}).get("eventPageUrl"), dict) else (app_ev or {}).get("eventPageUrl"),
            "mainImage": wix_media_url(((app_ev or {}).get("mainImage") or {})),
            "location": {
                "name": loc.get("name"),
                "type": loc.get("type"),
                "formattedAddress": (loc.get("address") or {}).get("formattedAddress"),
                "geocode": ((loc.get("address") or {}).get("geocode")),
                "raw": loc,
            },
            "registration": {
                "type": reg.get("type"),
                "status": reg.get("status"),
                "initialType": reg.get("initialType"),
                "rsvp": reg.get("rsvp"),
                "tickets": reg.get("tickets"),
                "external": reg.get("external"),
                "registrationDisabled": reg.get("registrationDisabled"),
            },
            "form": (app_ev or {}).get("form"),
            "registrationForm": norm_form((app_ev or {}).get("form")),
        },
        "agenda": days,
        "speakerGroups": groups,
        "speakers": speakers,
        "info": {
            "accommodation": ricos_to_markdown(cms.get("accomodation")),
            "visa": ricos_to_markdown(cms.get("visa")),
            "transportation": ricos_to_markdown(cms.get("transportation")),
            "partners": ricos_to_markdown(cms.get("partnersLogo")),
        },
        "gallery": [
            {"fileName": g.get("fileName"), "title": g.get("title"), "description": g.get("description"),
             "url": wix_media_url(g.get("slug") or g.get("src")), "type": g.get("type")}
            for g in (cms.get("mediagallery") or [])
        ],
        "links": {k: SITE + v for k, v in cms.items()
                  if k.startswith("link-") and isinstance(v, str)},
        "allSpeakersInCms": len(speakers_all),
    }

    json.dump(bundle, open(f"{out}/event.json", "w"), indent=1, ensure_ascii=False)
    json.dump(speakers, open(f"{out}/speakers.json", "w"), indent=1, ensure_ascii=False)
    for key, fn in [("accommodation", "accommodation.md"), ("visa", "visa.md"),
                    ("transportation", "transportation.md"), ("partners", "partners.md")]:
        txt = bundle["info"][key]
        if txt:
            open(f"{out}/{fn}", "w").write(f"# {key.title()} — {bundle['event']['code']}\n\n{txt}\n")
    if days:
        with open(f"{out}/agenda.md", "w") as f:
            f.write(f"# Agenda — {bundle['event']['code']}\n\n")
            for d in days:
                f.write(f"\n## Day {d['day']}\n\n{d['markdown']}\n")

    log(f"event      : {bundle['event']['name']}")
    log(f"cms dates  : {bundle['event']['cmsDateStart']} -> {bundle['event']['cmsDateEnd']}")
    log(f"app dates  : {bundle['event']['appStart']} -> {bundle['event']['appEnd']}")
    log(f"agenda days: {[d['day'] for d in days]}  sessions: {[len(d['sessions']) for d in days]}")
    log(f"speakers   : {len(speakers)} linked / {len(speakers_all)} in CMS")
    log(f"groups     : {[(g['code'], len(g['speakers'])) for g in groups]}")
    log(f"gallery    : {len(bundle['gallery'])} media")
    log(f"reg form   : {len(bundle['event']['registrationForm'])} fields "
        f"({sum(1 for f in bundle['event']['registrationForm'] if f['required'])} required)")
    log(f"rsvp       : {(bundle['event']['registration'] or {}).get('status')} "
        f"until {((bundle['event']['registration'] or {}).get('rsvp') or {}).get('endDate')}")
    log(f"wrote      : {out}/event.json")


if __name__ == "__main__":
    main()
