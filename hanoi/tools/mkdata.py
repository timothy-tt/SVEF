#!/usr/bin/env python3
"""Turn the scraped event.json into hanoi/data.js for the single-event demos.

Usage: mkdata.py [out.js] [--src path/to/event.json]
"""
import argparse, json, os, re, sys, time

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
    "links": src["links"],
}

for d in src["agenda"]:
    data["days"].append({
        "day": d["day"],
        "date": DAY_DATES.get(d["day"]),
        "title": clean(d["title"]),
        "meta": d["meta"],
        "intro": clean(d["intro"]),
        "sessions": [{
            "id": f"d{d['day']}s{i + 1}",
            "start": s["start"],
            "end": s.get("end"),
            "title": clean(s["title"]),
            "kind": s.get("kind") or "session",
            "detail": md_lines(s.get("detail")),
            "tracks": [{"track": t["track"], "title": clean(t["title"]),
                        "summary": clean(t["summary"])} for t in s.get("tracks") or []],
        } for i, s in enumerate(d["sessions"])],
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
