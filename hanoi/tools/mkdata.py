#!/usr/bin/env python3
"""Turn the scraped event.json into hanoi/data.js for the single-event demos.

Usage: mkdata.py [out.js] [--src path/to/event.json]
"""
import argparse, json, os, re, sys, time, unicodedata

import demo

ap = argparse.ArgumentParser()
ap.add_argument("out", nargs="?", default="data.js")
ap.add_argument("--src", default=os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                              "event.json"))
args = ap.parse_args()
if not os.path.exists(args.src):
    sys.exit("no event.json at %s; run scrape.py first, or pass --src" % args.src)

src = json.load(open(args.src))
e = src["event"]
out = args.out


def clean(t):
    return re.sub(r"\s+", " ", (t or "").replace("​", "")).strip()


def md_lines(t):
    return [l.strip("- ").strip() for l in (t or "").split("\n") if l.strip()]


DAY_DATES = {1: "2026-10-18", 2: "2026-10-19", 3: "2026-10-20"}

data = {
    "meta": {
        "source": src["source"],
        "scrapedAt": src["scrapedAt"],
        "generator": "imt/svef/hanoi2026/scrape.py + mkdata.py",
        "speakerPool": src["allSpeakersInCms"],
        "linkedSpeakers": len(src["speakers"]),
    },
    # Single source of truth for anything date- or venue-shaped. The live site
    # disagrees with itself (see README), so every disputed value sits here.
    "event": {
        "code": e["code"],
        "name": "Swiss–Viet Economic Forum 2026",
        "edition": "Ha Noi Edition",
        "title": e["title"],
        "tagline": clean(e["shortDescription"]),
        "city": "Ha Noi",
        "country": "Viet Nam",
        "venue": None,                       # not published yet
        "timeZone": e["timeZoneId"],
        "start": e["appStart"],
        "end": e["appEnd"],
        "displayDates": "19–20 Oct 2026",    # authoritative per 06/09 decision
        "displayDatesVi": "19–20/10/2026",
        "status": e["status"],
        "heroImage": e["mainImage"],
        "siteUrl": src["source"],
        "eventUrl": f"{src['source']}/events/{e['slug']}",
        "registerUrl": f"{src['source']}/events/{e['slug']}/form",
        "contactEmail": "contact@svef.ch",
        "expectedDelegates": "200–250",
        "dayDates": DAY_DATES,
    },
    "registration": {
        "type": e["registration"]["type"],
        "status": e["registration"]["status"],
        "opens": (e["registration"].get("rsvp") or {}).get("startDate"),
        "closes": (e["registration"].get("rsvp") or {}).get("endDate"),
        "responseType": (e["registration"].get("rsvp") or {}).get("responseType"),
        "waitlist": (e["registration"].get("rsvp") or {}).get("waitlistEnabled"),
        "confirmation": (((e["registration"].get("rsvp") or {}).get("confirmationMessages") or {})
                         .get("positiveConfirmation") or {}),
        "fields": e["registrationForm"],
    },
    "days": [],
    "speakers": [],
    "info": {k: v for k, v in src["info"].items() if v},
    "overview": src.get("overview") or {},
    "press": src.get("press") or [],
    "photos": src.get("photos") or [],
    "social": src.get("social") or [],
    "links": src["links"],
}

for d in src["agenda"]:
    def norm_sessions(lst, prefix):
        return [{
            "id": "%s%d" % (prefix, i + 1),
            "start": s["start"], "end": s.get("end"),
            "title": clean(s["title"]),
            "kind": s.get("kind") or "session",
            "detail": md_lines(s.get("detail")),
            "tracks": [{"track": t["track"], "title": clean(t["title"]),
                        "summary": clean(t["summary"])} for t in s.get("tracks") or []],
        } for i, s in enumerate(lst)]

    data["days"].append({
        "day": d["day"],
        "date": DAY_DATES.get(d["day"]),
        "title": clean(d["title"]),
        "meta": d["meta"],
        "intro": clean(d["intro"]),
        # A day of destination choices has options instead of one timeline.
        "options": [{
            "letter": o["letter"], "title": clean(o["title"]), "meta": clean(o["meta"]),
            "sessions": norm_sessions(o["sessions"], "d%do%s" % (d["day"], o["letter"])),
        } for o in (d.get("options") or [])],
        "sessions": norm_sessions(d["sessions"], "d%ds" % d["day"]),
    })

for s in src["speakers"]:
    bio = clean(re.sub(r"!\[[^\]]*\]\([^)]*\)", "", s["bio"]))
    data["speakers"].append({
        "id": s["id"], "name": clean(s["name"]),
        "role": clean(s["title"].split("\n")[0]),
        "org": clean("\n".join(s["title"].split("\n")[1:])),
        "titleFull": clean(s["title"].replace("\n", " · ")),
        "photo": s["photo"], "bio": bio, "slug": s["slug"], "url": s["sourceUrl"],
        "keynote": True,
    })


# ---------------------------------------------------------------------------
# Prefilled profile.
#
# The delegate answers 19 questions at registration. Asking them again inside the
# app would be the single most irritating thing this build could do, so the profile
# is derived from the RSVP answers instead. Field ids are matched by LABEL, not
# hardcoded: Wix regenerates the custom-* ids whenever a question is edited, and a
# stale id would silently produce an empty profile rather than an error.
# ---------------------------------------------------------------------------
PROFILE_MAP = [
    ("firstName", r"^first name$"),
    ("lastName", r"^last name$"),
    ("email", r"^email"),
    ("phone", r"phone number"),
    ("country", r"country/?location"),
    ("jobTitle", r"^job title$"),
    ("org", r"organi[sz]ation ?/ ?company"),
    ("sectors", r"^industry sector$"),
    ("sectorOther", r"^other ?- ?industry"),
    ("delegation", r"delegation.*delegate.s name"),
    ("round1", r"parallel session round 1"),
    ("round2", r"parallel session round 2"),
    ("day3", r"day 3.*field visits"),
    ("membership", r"svef membership status"),
    ("support", r"delegation support package"),
    ("directory", r"delegates directory"),
    ("sponsor", r"becoming a sponsor"),
    ("dietary", r"dietary requirements"),
    ("questions", r"other requirements or questions"),
]


def profile_map(fields):
    out, unmatched = {}, []
    for key, pat in PROFILE_MAP:
        hit = next((f for f in fields if re.search(pat, f["label"], re.I)), None)
        if hit:
            out[key] = hit["id"]
        else:
            unmatched.append(key)
    return out, unmatched


pmap, missing = profile_map(e["registrationForm"])
if missing:
    print("  ! profile fields not matched in the live form: " + ", ".join(missing))
data["profileMap"] = pmap

# Track letters (A-F) as published in the agenda, so a session pick made at
# registration can be resolved back to the real parallel session.
tracks = {}
for d in data["days"]:
    for s in d["sessions"]:
        for tr in s["tracks"]:
            tracks[tr["track"]] = {"track": tr["track"], "title": tr["title"],
                                   "summary": tr["summary"], "sessionId": s["id"],
                                   "day": d["day"], "start": s["start"], "end": s["end"]}
data["tracks"] = tracks

# Attach speakers to programme items. See demo.SESSION_SPEAKERS: the live site has
# no such link, so this is ours and the back office labels it that way.
_by_name = {}
for i, sp in enumerate(data["speakers"]):
    _by_name[sp["name"]] = 1 + i
linked = 0
for d in data["days"]:
    for sess in d["sessions"]:
        want = demo.SESSION_SPEAKERS.get((d["day"], sess["start"] or ""))
        if not want:
            sess["speakers"] = []
            continue
        ids = []
        for frag in want:
            hit = next((pid for nm, pid in _by_name.items() if frag in nm), None)
            if hit:
                ids.append(hit)
            else:
                print("  ! no speaker matching %r for day %d %s"
                      % (frag, d["day"], sess["start"]))
        sess["speakers"] = ids
        linked += 1 if ids else 0
data["speakerLinks"] = linked

# ---------------------------------------------------------------------------
# The networking layer. Everything below is demo data and says so; see demo.py.
# ---------------------------------------------------------------------------
data["taxonomy"] = {"industries": demo.INDUSTRIES, "markets": demo.MARKETS,
                    "tiers": demo.TIERS}

orgs = []
for o in demo.ORGS:
    rec = dict(o)
    rec["demo"] = not o.get("real", False)
    orgs.append(rec)
# attach the real organiser logos scraped off the home page
for i, logo in enumerate(src.get("overview", {}).get("organisers") or []):
    if i < len(orgs):
        orgs[i]["logo"] = logo["logo"]
data["orgs"] = orgs

people = []
# The three keynote speakers are real people with real bios and photos, so they go
# into the directory as themselves rather than being replaced by invented delegates.
for i, s in enumerate(data["speakers"]):
    people.append({
        "id": 1 + i, "n": s["name"], "i": "".join(w[0] for w in re.findall(
            r"[A-Za-zÀ-ỹ]+", s["name"]))[-2:].upper() or "SV",
        "c": ["#04723D", "#E42026", "#7A5C00"][i % 3],
        "photo": s["photo"], "oid": "svef", "ind": "pub", "mkts": ["ch", "vn"],
        "dir": True, "tier": "headline", "speaker": True, "picks": [], "day3": False,
        "t": {"en": s["role"], "vi": s["role"]},
        "bio": {"en": s["bio"], "vi": s["bio"]},
        "h": {"web": s["url"]}, "demo": False,
    })
for p in demo.PEOPLE + [demo.COLLEAGUE]:
    rec = dict(p)
    rec["demo"] = True
    rec["speaker"] = False
    people.append(rec)
# The signed-in delegate. The app is gated at login, so it never asks anyone to
# register: it opens on this person's own record.
self_rec = dict(demo.SELF)
self_rec["demo"] = True
self_rec["speaker"] = False
people.append(self_rec)
data["people"] = people

# Their RSVP answers, re-keyed onto the live form's own field ids so the app's
# prefill path is exactly the one a real delegate's answers travel down.
data["self"] = {
    "personId": demo.SELF["id"],
    "orgId": demo.SELF["oid"],
    "reg": {pmap[k]: v for k, v in demo.SELF_REG.items() if k in pmap},
}
missing_self = [k for k in demo.SELF_REG if k not in pmap]
if missing_self:
    print("  ! seeded answers with no matching form field: " + ", ".join(missing_self))

def _slug(name):
    """Fold any accent to ASCII, not just the Vietnamese ones: Rösler has an o with
    an umlaut and a naive strip turns the address into r.sler@."""
    folded = unicodedata.normalize("NFKD", name.replace("đ", "d").replace("Đ", "D"))
    ascii_only = "".join(c for c in folded if not unicodedata.combining(c))
    return re.sub(r"[^a-z]+", ".", ascii_only.lower()).strip(".")


def _email(name, oid):
    """Derive a plausible address from the organisation's own domain."""
    org = next((o for o in orgs if o["id"] == oid), None)
    dom = re.sub(r"^https?://(www\.)?", "", (org or {}).get("web") or "example.com").strip("/")
    return "%s@%s" % (_slug(name), dom)

for a in people:
    st = demo.REGISTRATION.get(a["id"])
    if st:
        a["status"], a["country"], a["received"] = st
    else:
        a["status"], a["country"], a["received"] = "confirmed", "Viet Nam", "2026-08-17"
    a["email"] = _email(a["n"], a.get("oid"))
    a["arrived"] = list(demo.CHECKED_IN.get(a["id"], []))
data["attendees"] = people

data["meetings"] = [dict(m, demo=True) for m in demo.MEETINGS]
data["connections"] = [dict(c, demo=True) for c in demo.CONNECTIONS]
data["chats"] = {str(k): v for k, v in demo.CHATS.items()}
data["docs"] = [dict(d, id="doc%d" % (i + 1), demo=True) for i, d in enumerate(demo.DOCS)]
data["slots"] = ["09:00 – 09:15", "11:00 – 11:15", "12:45 – 13:00", "16:00 – 16:15",
                 "18:30 – 18:45"]

# Notifications are generated from what is actually in the dataset, so they stay
# true after a re-scrape instead of referring to sessions that no longer exist.
notifs = []
d2 = next((d for d in data["days"] if d["day"] == 2), None)
if d2 and d2["sessions"]:
    first = d2["sessions"][0]
    notifs.append({"id": "n1", "kind": "session", "unread": True, "when": "2 h",
                   "t": {"en": "Doors open at " + (first["start"] or ""),
                         "vi": "Mở cửa lúc " + (first["start"] or "")},
                   "b": {"en": first["title"] + " on Day 2.",
                         "vi": first["title"] + " trong Ngày 2."},
                   "go": "agenda"})
    par = next((s for s in d2["sessions"] if s["tracks"]), None)
    if par:
        notifs.append({"id": "n2", "kind": "session", "unread": True, "when": "5 h",
                       "t": {"en": "Confirm your parallel session",
                             "vi": "Xác nhận phiên song song của bạn"},
                       "b": {"en": par["title"] + ": " + str(len(par["tracks"])) + " tracks to choose from.",
                             "vi": par["title"] + ": có " + str(len(par["tracks"])) + " phiên để chọn."},
                       "go": "agenda"})
notifs.append({"id": "n3", "kind": "meeting", "unread": True, "when": "1 d",
               "t": {"en": "New meeting request", "vi": "Lời mời gặp mới"},
               "b": {"en": "A delegate asked to meet during the Hai Phong field visit.",
                     "vi": "Một đại biểu muốn gặp trong chuyến thực địa Hải Phòng."},
               "go": "meetings", "demo": True})
if data["press"]:
    pr = data["press"][0]
    notifs.append({"id": "n4", "kind": "press", "unread": False, "when": "2 d",
                   "t": {"en": "New press coverage", "vi": "Có bài báo mới"},
                   "b": {"en": pr["outlet"] + ": " + (pr["headline"] or ""),
                         "vi": pr["outlet"] + ": " + (pr["headline"] or "")},
                   "go": "press"})
notifs.append({"id": "n5", "kind": "reg", "unread": False, "when": "3 d",
               "t": {"en": "Registration received", "vi": "Đã nhận đăng ký"},
               "b": {"en": (e["registration"]["rsvp"] or {}).get("confirmationMessages", {})
                     .get("positiveConfirmation", {}).get("title", "Thank you for registering."),
                     "vi": "Đăng ký của bạn đã được ghi nhận và đang chờ xác nhận."},
               "go": "me"})
data["notifications"] = notifs

data["demoNotice"] = {
    "en": "Delegates, connections, meetings, chat and documents are demo data: SVEF has "
          "not published a guest list and Wix does not expose the RSVP roster. The "
          "programme, speakers, press, gallery and registration form are live.",
    "vi": "Danh sách đại biểu, kết nối, lịch gặp, tin nhắn và tài liệu là dữ liệu mẫu: "
          "SVEF chưa công bố danh sách khách mời và Wix không mở API danh sách đăng ký. "
          "Chương trình, diễn giả, báo chí, thư viện ảnh và biểu mẫu đăng ký là dữ liệu thật.",
}

body = json.dumps(data, ensure_ascii=False, indent=1)
with open(out, "w") as f:
    f.write("/* SVEF Ha Noi 2026 — single-event dataset.\n"
            f"   Scraped from {src['source']} on {src['scrapedAt']} by scrape.py.\n"
            "   Regenerate: python3 scrape.py && python3 mkdata.py <path>/data.js\n"
            "   Do not hand-edit: every value below comes from the live site. */\n"
            "window.HANOI2026 = " + body + ";\n")
print(f"wrote {out}: {len(data['days'])} days, "
      f"{sum(len(d['sessions']) for d in data['days'])} sessions, "
      f"{len(data['speakers'])} speakers, {len(data['registration']['fields'])} form fields")
print(f"  real : {len(data['press'])} press, {len(data['photos'])} photos, "
      f"{len(data['overview'].get('pillars') or [])} pillars, {len(data['social'])} social")
print(f"  demo : {len(data['attendees'])} attendees, {len(data['orgs'])} orgs, "
      f"{len(data['meetings'])} meetings, {len(data['connections'])} connections, "
      f"{len(data['docs'])} docs, {len(data['notifications'])} notifications")
print(f"  map  : {len(data['profileMap'])}/19 profile fields, {len(data['tracks'])} tracks, "
      f"{data['speakerLinks']} sessions with a speaker")
print(f"  self : {demo.SELF['n']} @ {demo.SELF['oid']}, {len(data['self']['reg'])} seeded answers")
