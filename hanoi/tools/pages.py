"""Read the hand-laid-out Wix pages that no API covers.

The CMS-backed routes (agenda, speakers, the event record) come back through the Wix
Data and Wix Events APIs. `/press`, `/gallery` and the home page are not CMS-backed:
somebody built them in the Wix editor, so their content exists only as server-rendered
markup and has to be read out of the DOM.

Wix splits one visual line across several `<span>`s for styling, so text is collected
at the nearest BLOCK ancestor and spans are treated as inline. Collecting per-span is
what fragments a heading like "Innovation, AI & Digital Economy" into three rows.
"""
import re
from html.parser import HTMLParser

SKIP = {"script", "style", "noscript", "svg", "head", "title", "template"}
BLOCK = {"p", "h1", "h2", "h3", "h4", "h5", "h6", "li", "td", "th",
         "blockquote", "figcaption", "dd", "dt"}
ZW = "​"


class _Walk(HTMLParser):
    """One row per block element, one row per image, in document order."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.rows = []
        self.skip = 0
        self.open = []
        self.href = None

    def _push(self, s):
        if self.open:
            self.open[-1][1].append(s)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in SKIP:
            self.skip += 1
            return
        if self.skip:
            return
        if tag == "img":
            src = a.get("src") or ""
            if "wixstatic.com/media/" in src:
                self.rows.append({"t": "img", "src": src, "alt": a.get("alt") or ""})
            return
        if tag == "br":
            self._push("\n")
            return
        if tag == "a":
            self.href = a.get("href")
            if self.open and self.href and self.href.startswith("http"):
                self.open[-1][2].append(self.href)
        if tag in BLOCK:
            self.open.append((tag, [], []))

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        if tag in SKIP:
            self.skip = max(0, self.skip - 1)
            return
        if self.skip:
            return
        if tag == "a":
            self.href = None
        if tag not in BLOCK:
            return
        for i in range(len(self.open) - 1, -1, -1):
            if self.open[i][0] != tag:
                continue
            t, buf, links = self.open.pop(i)
            txt = re.sub(r"[ \t]+", " ", "".join(buf)).strip()
            txt = re.sub(r"\s*\n\s*", "\n", txt)
            if txt:
                self.rows.append({"t": "text", "tag": t, "text": txt,
                                  "links": list(dict.fromkeys(links))})
                if self.open:
                    self.open[-1][1].append(" " + txt)
            break

    def handle_data(self, d):
        if self.skip:
            return
        d = d.replace(ZW, "")
        if d.strip():
            self._push(d)


SOCIAL_RE = re.compile(
    r'href="(https://(?:www\.)?(linkedin|facebook|youtube|instagram|x|twitter)\.com/[^"]+)"')


def socials_of(html_text):
    """Social links live on bare <a> wrappers outside any block, so read them raw."""
    out, seen = [], set()
    for url, net in SOCIAL_RE.findall(html_text):
        url = url.replace("&amp;", "&")
        if net in seen:      # one canonical link per network, the first one wins
            continue
        seen.add(net)
        out.append({"net": net, "url": url})
    return out


def rows_of(html_text):
    m = re.search(r"<body[^>]*>(.*)</body>", html_text, re.S)
    w = _Walk()
    w.feed(m.group(1) if m else html_text)
    out, seen = [], set()
    for r in w.rows:
        key = r.get("src") or (r.get("tag", "") + "|" + r.get("text", ""))
        if key in seen:
            continue
        seen.add(key)
        out.append(r)
    return out


def full_media(url):
    """Strip the Wix render transform, leaving the original upload."""
    m = re.match(r"(https://static\.wixstatic\.com/media/[^/]+)", url or "")
    return m.group(1) if m else url


def thumb(url, w=560, h=380):
    base = full_media(url)
    if not base:
        return url
    mid = base.rsplit("/", 1)[-1]
    return "%s/v1/fill/w_%d,h_%d,al_c,q_85,enc_auto/%s" % (base, w, h, mid)


def _clean(s):
    return re.sub(r"\s+", " ", (s or "").replace(ZW, "")).strip()


def _window(rows, start_pat, end_pat):
    """Rows between the first block matching start_pat and the first matching end_pat."""
    a, b = 0, len(rows)
    for i, r in enumerate(rows):
        if r["t"] == "text" and re.search(start_pat, r["text"], re.I):
            a = i + 1
            break
    for j in range(a, len(rows)):
        r = rows[j]
        if r["t"] == "text" and re.search(end_pat, r["text"], re.I):
            b = j
            break
    return rows[a:b]


def parse_press(rows):
    """Outlet / headline / thumbnail triplets from /press.

    The page repeats: outlet, optional headline, image. A row of text after an item
    already has both fields starts the next item, which is how the entries that carry
    no headline (a bare outlet plus a picture) stay correctly separated.
    """
    win = _window(rows, r"media impressions", r"JOIN OUR MAILING LIST")
    items, cur = [], None

    def close():
        nonlocal cur
        if cur and cur.get("outlet"):
            items.append(cur)
        cur = None

    for r in win:
        if r["t"] == "img":
            if cur is None:
                continue
            cur["image"] = thumb(r["src"])
            cur["imageFull"] = full_media(r["src"])
            close()
            continue
        txt = _clean(r["text"])
        if not txt or len(txt) > 240:
            continue
        links = [u for u in (r.get("links") or []) if "svef.ch" not in u]
        if cur is None:
            cur = {"outlet": txt, "headline": "", "image": None, "url": links[0] if links else None}
        elif not cur["headline"]:
            cur["headline"] = txt
            if links and not cur["url"]:
                cur["url"] = links[0]
        else:
            close()
            cur = {"outlet": txt, "headline": "", "image": None, "url": links[0] if links else None}
    close()
    # de-duplicate on outlet + headline, keep first
    seen, out = set(), []
    for it in items:
        k = (it["outlet"], it["headline"])
        if k in seen:
            continue
        seen.add(k)
        out.append(it)
    return out


def parse_gallery(rows):
    """Photos from the /gallery Wix gallery widget.

    The widget renders at q_90; the chrome (logo, favicon, nav) renders at q_80/q_85,
    which is a reliable enough separator to avoid hand-listing the furniture.
    """
    out, seen = [], set()
    for r in rows:
        if r["t"] != "img":
            continue
        src = r["src"]
        if "q_90" not in src:
            continue
        m = re.search(r"/w_(\d+),h_(\d+)", src)
        if m and (int(m.group(1)) < 120 or int(m.group(2)) < 120):
            continue
        base = full_media(src)
        if base in seen:
            continue
        seen.add(base)
        out.append({"image": thumb(src, 640, 460), "full": base, "alt": _clean(r.get("alt"))})
    return out


def _pairs_after(rows, heading, stop, tags=("p", "h2", "h4", "h6")):
    win = _window(rows, heading, stop)
    return [r for r in win if r["t"] == "text" and r["tag"] in tags]


def parse_home(rows):
    """Overview blocks, organiser logos, venue copy and contacts from the home page."""
    out = {"vision": "", "diagram": None, "expect": [], "objectives": [], "pillars": [],
           "venue": "", "organisers": [], "contact": {}, "social": []}

    # strategic vision: the long paragraph under FORUM OVERVIEW
    for r in _window(rows, r"^STRATEGIC VISION$", r"^WHAT TO EXPECT$"):
        if r["t"] == "text" and len(r["text"]) > 180:
            out["vision"] = _clean(r["text"])
            break

    # the programme-flow diagram sits between the vision copy and WHAT TO EXPECT
    for r in _window(rows, r"^FORUM OVERVIEW$", r"^WHAT TO EXPECT$"):
        if r["t"] == "img":
            m = re.search(r"/w_(\d+),h_(\d+)", r["src"])
            if m and int(m.group(1)) >= 400:
                out["diagram"] = {"image": thumb(r["src"], 900, 340),
                                  "full": full_media(r["src"])}
                break

    # what to expect: title paragraph then a description, repeating
    win = [r for r in _window(rows, r"^WHAT TO EXPECT$", r"^OBJECTIVES$")
           if r["t"] == "text" and r["tag"] == "p"]
    i = 0
    while i < len(win) - 1:
        title, desc = _clean(win[i]["text"]), _clean(win[i + 1]["text"])
        if len(title) < 70 and len(desc) > len(title):
            out["expect"].append({"title": title, "text": desc})
            i += 2
        else:
            i += 1

    # objectives: kicker (p), headline (h2), bullet block (p)
    win = _pairs_after(rows, r"^OBJECTIVES$", r"^THEMATIC PILLARS$")
    i = 0
    while i < len(win) - 2:
        a, b, c = win[i], win[i + 1], win[i + 2]
        if b["tag"] == "h2":
            out["objectives"].append({
                "kicker": _clean(a["text"]), "title": _clean(b["text"]),
                "points": [_clean(x).lstrip("•").strip()
                           for x in c["text"].split("\n") if _clean(x).strip("• ")]})
            i += 3
        else:
            i += 1

    # thematic pillars: h2 title then p description
    win = _pairs_after(rows, r"^THEMATIC PILLARS$", r"^(AGENDA|SPEAKERS ?/ ?PANELISTS)$")
    i = 0
    while i < len(win) - 1:
        a, b = win[i], win[i + 1]
        if a["tag"] == "h2" and b["tag"] == "p":
            out["pillars"].append({"title": _clean(a["text"].replace("\n", " ")),
                                   "text": _clean(b["text"])})
            i += 2
        else:
            i += 1

    for r in _window(rows, r"^ABOUT THE VENUE$", r"^CONTACT US$"):
        if r["t"] == "text" and len(r["text"]) > 80:
            out["venue"] += (" " if out["venue"] else "") + _clean(r["text"])

    # organisers: the logos between ORGANIZERS and PAST FORUMS
    for r in _window(rows, r"^ORGANIZERS$", r"^PAST FORUMS"):
        if r["t"] == "img":
            alt = _clean(r.get("alt"))
            if re.search(r"\.(png|jpe?g|webp|gif|svg)$", alt, re.I) or not alt:
                alt = ""          # the upload filename is not a name; admin fills it in
            out["organisers"].append({"logo": full_media(r["src"]), "name": alt})

    for r in _window(rows, r"^CONTACT US$", r"JOIN OUR MAILING LIST"):
        if r["t"] != "text":
            continue
        t = _clean(r["text"])
        m = re.match(r"^(.*?Office)\s*:\s*(.+)$", t, re.I)
        if m:
            out["contact"].setdefault("offices", []).append(
                {"name": m.group(1).strip(), "address": m.group(2).strip()})
        elif re.match(r"^\+?[\d ()+-]{8,}$", t):
            out["contact"]["phone"] = t
        elif "@" in t and " " not in t:
            out["contact"]["email"] = t

    for r in rows:
        for u in (r.get("links") or []):
            if re.search(r"(linkedin|facebook|youtube|instagram|x\.com|twitter)\.com", u):
                net = re.search(r"(linkedin|facebook|youtube|instagram|x|twitter)", u).group(1)
                if not any(s["url"] == u for s in out["social"]):
                    out["social"].append({"net": net, "url": u})
    return out
