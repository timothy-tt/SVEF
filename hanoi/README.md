# SVEF Ha Noi 2026: single-event delegate app and back office

A second, deliberately narrower build. The demos in the repo root (`app.html`,
`admin/index.html`) are the multi-event product: they carry an event list, an event
switcher, and every screen has to ask "which event". This build answers that question
once, at compile time, and never asks again.

```
hanoi/
  index.html    delegate app (mobile)
  admin.html    event back office (desktop)
  data.js       the event, scraped from the live site
  tools/
    scrape.py   pulls hanoi2026.svef.ch into a normalised bundle
    mkdata.py   turns that bundle into data.js
```

Open `hanoi/index.html` and `hanoi/admin.html` from the repo root over HTTP
(`python3 -m http.server` at the root, then `/hanoi/`). They read `../assets/brand/`
for the wordmark, so serving `hanoi/` on its own leaves the logo missing.

Live: `https://timothy-tt.github.io/SVEF/hanoi/` and `/hanoi/admin.html`.

## What is real and what is not

Everything on every screen is scraped from `hanoi2026.svef.ch`, with two exceptions,
both labelled in the UI:

| Screen | Source |
|---|---|
| Programme, 3 days, 19 sessions, 6 parallel tracks | Wix CMS, `Import1.agendaDay1..3` |
| Speakers, 3 keynotes with photos and bios | Wix CMS, `Import2` via `SpeakerList` |
| RSVP form, 19 fields with real option lists | Wix Events app, `form.controls` |
| Confirmation message | Wix Events app, `registration.rsvp` |
| Dates, status, registration window, hero image | Wix Events app |
| **Registration roster (8 rows)** | **demo data**, see below |
| **Venue, accommodation, visa, transport** | **empty at source**, placeholders shown |

Wix does not hand an anonymous site token the guest list for an event, so the back
office ships eight sample registrations to give the table and the CSV export something
to work on. Every other screen is the live record.

## How the data was obtained

`hanoi2026.svef.ch` is a Wix site. The page HTML is a 1.9 MB Thunderbolt bundle with no
content in it, so scraping the markup is pointless. Two APIs carry the actual data, and
both accept the per-app instance token that the site hands any anonymous visitor at
`/_api/v1/access-tokens`:

* **Wix Events v3** (`www.wixapis.com/events/v3/events/query`) for the event record,
  the registration settings and the RSVP form. Ask for the `DASHBOARD` or
  `ONLINE_CONFERENCING` field sets and it returns 403; the nine field sets in
  `scrape.py` are the ones a visitor may read.
* **Wix Data** for the CMS. The site has exactly three collections: `Import1` (Events),
  `Import2` (Speakers) and `SpeakerList` (the panels that join the two). The public
  `wix-data/v2` endpoint reads items but will not resolve multi-references for a
  visitor, so references go through the site's own legacy `/_api/cloud-data/v1`
  endpoint, which will.

One gotcha worth keeping: the legacy endpoint stalls indefinitely on a large reference
payload. Querying all three events with `includeReferencedItems` hung for 40 minutes
before being killed. Filtering to one event code, and pulling only the panels that event
points at, returns in under a second. `scrape.py` does it that way on purpose.

To refresh:

```bash
cd hanoi/tools
python3 scrape.py --code HANOI2026 --out /tmp/svef        # writes event.json + raw/
python3 mkdata.py ../data.js --src /tmp/svef/event.json   # regenerates data.js
```

`scrape.py --code ZURICH2026` and `--code DANANG2025` also work; this build is wired to
Ha Noi.

## Where the live site contradicts itself

The back office has a **Data health** screen because the source record does not agree
with itself. Eight issues at the time of writing, and they are not cosmetic:

1. **Three different date ranges.** The Wix Events record says 19 to 20 October. Its own
   tagline says "18 -20 Oct, 2026". The CMS Events row still says 1 to 3 October. The
   published programme has three days, which only fits 18 to 20. This build displays
   **19 to 20 October 2026**, per the decision of 06/09/2026, and says so wherever a
   delegate would otherwise notice the gap.
2. **The venue coordinates point at Zurich.** The location is named "Ha Noi" but carries
   Rämistrasse 71, 8006 Zürich and geocode 47.375, 8.549, left behind by the Zurich
   edition. Any map pin drawn from that record lands in Switzerland.
3. **No venue at all.** All three days read "Venue: to be updated".
4. **The RSVP form and the agenda name the parallel sessions differently.** The form
   offers "Session C: Innovation - AI & Digital Economy" and "Session D: Pharma Market
   Access & Life Sciences"; the agenda publishes "Session C: Innovation, AI & Digital
   Economy" and "Session D: Shaping Future Healthcare". Delegates are picking sessions
   by name, so the headcount per session will not reconcile until these match.
5. **Three speakers.** The Speakers collection holds 104 records and Zurich 2026 links
   42 of them; Ha Noi 2026 links 3.
6. **Accommodation, visa and transport are empty.** The dynamic pages resolve but the
   CMS fields hold nothing.

The console reports these; it does not silently paper over them.

## Design notes

Palette, type and the square-cornered surfaces follow `../BRAND.md` without deviation:
the Hanoi green ground, the SVEF red as accent, Inter Tight as the only face, and the
wordmark delivered as outlined SVG rather than as live text next to the brand name.

The delegate app is EN/VI; only the app's own chrome is translated. Programme copy stays
in the language SVEF published it in, because machine-translating a scraped session
title puts words in the organiser's mouth. The back office is English only, per the
scope agreed on 14/08/2026.

Both files are single-file demos with no build step and no framework. State is kept in
`localStorage`: saved sessions and the demo registration in the app, an editable working
copy in the console, with "Revert to scraped source" to throw it away.
