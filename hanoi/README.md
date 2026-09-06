# SVEF Ha Noi 2026: single-event delegate app and back office

A second, deliberately narrower build. The demos in the repo root (`app.html`,
`admin/index.html`) are the multi-event product: they carry an event list, an event
switcher, and every screen has to ask "which event". This build answers that question
once, at compile time, and never asks again. It carries the same feature set as the
multi-event app, scoped to one event.

```
hanoi/
  index.html    delegate app (mobile)
  admin.html    event back office (desktop)
  data.js       the event, scraped from the live site
  tools/
    scrape.py   pulls the Wix Events and Wix Data APIs
    pages.py    reads the editor-built pages the APIs do not cover
    demo.py     the networking layer the live site cannot supply
    mkdata.py   turns all of that into data.js
```

Open them from the repo root over HTTP (`python3 -m http.server` at the root, then
`/hanoi/`). They read `../assets/brand/` for the wordmark, so serving `hanoi/` on its
own leaves the logo missing.

Live: `https://timothy-tt.github.io/SVEF/hanoi/` and `/hanoi/admin.html`.

## Features

**Delegate app.** Home with countdown and programme summary; three-day agenda with the
six real parallel tracks and a per-delegate pick; Connect (delegate directory with
search and filters, speakers, organisations, my network, person and company profiles,
connection requests, meeting booking against the real breaks in the Day 2 programme,
chat, vCard export); Media (gallery, press, documents); notifications with an unread
badge; and Me (prefilled profile, business profile with a claim request, my agenda,
visibility controls, badge and QR). EN/VI throughout the chrome.

**Back office.** Dashboard; programme editor with parallel tracks; speakers; delegates
with the directory opt-in; organisations with a claim approval queue; registrations
with a per-session headcount; the live RSVP form and where each answer lands; gallery
and press publishing; the document library; delegate information pages; a notification
composer; networking rules; data health; and event settings. English only, per the
14/08/2026 scope decision.

### Prefilled profile

The one feature worth calling out. A delegate answers 19 questions to register. Asking
those again inside the app would be the most irritating thing this build could do, so
the profile is derived from the RSVP answers instead, and three of them do real work:

* **"Would you like to be featured in the SVEF 2026 Delegates Directory?"** is the
  actual gate on the delegate directory. A delegate who answered no is listed in the
  back office but is not contactable in the app, and the app says why rather than
  hiding the button unexplained.
* **The two "Parallel Session Round" questions** resolve back to the real agenda tracks
  and land in My agenda, already starred, instead of sitting in a form record the
  delegate never sees again.
* **"SVEF Membership Status"** sets the tier badge.

Field ids are matched by **label**, not hardcoded: Wix regenerates the `custom-*` ids
whenever a question is edited, and a stale id would silently produce an empty profile
rather than an error. `mkdata.py` prints any label it cannot match.

## What is real and what is not

| Screen | Source |
|---|---|
| Programme, 3 days, 19 sessions, 6 parallel tracks | Wix CMS, `Import1.agendaDay1..3` |
| Speakers, 3 keynotes with photos and bios | Wix CMS, `Import2` via `SpeakerList` |
| RSVP form, 19 fields with real option lists | Wix Events app, `form.controls` |
| Confirmation message, dates, status, hero image | Wix Events app |
| Press, 20 outlets with headlines and thumbnails | `/press` page markup |
| Gallery, 15 photos | `/gallery` page markup |
| Overview: vision, 4 expect blocks, 8 pillars, 3 objectives, venue copy, organiser logos, offices, social | home page markup |
| **Delegates, organisations, connections, meetings, chat, documents, registrations** | **demo data**, labelled on screen |

The delegate directory, connections, meetings, chat and the document library are
pre-event features with no public source: SVEF has not published a guest list, and Wix
will not hand an anonymous token the RSVP roster. Inventing that layer is the honest
option; pretending the site has it is not. It lives in `tools/demo.py`, every record
carries `demo: true`, and both surfaces label it. The fabrications are anchored to the
real event, so organisations sit in the forum's own eight thematic pillars and
delegates' session picks come from the six real parallel tracks.

## How the data was obtained

`hanoi2026.svef.ch` is a Wix site. The page HTML is a 1.9 MB Thunderbolt bundle with no
content in it, so scraping markup alone gets you nothing. Three routes are needed:

* **Wix Events v3** (`www.wixapis.com/events/v3/events/query`) for the event record,
  the registration settings and the RSVP form. Ask for the `DASHBOARD` or
  `ONLINE_CONFERENCING` field sets and it returns 403; the nine field sets in
  `scrape.py` are the ones a visitor may read.
* **Wix Data** for the CMS. The site has exactly three collections: `Import1` (Events),
  `Import2` (Speakers) and `SpeakerList` (the panels that join them). The public
  `wix-data/v2` endpoint reads items but will not resolve multi-references for a
  visitor, so references go through the site's own legacy `/_api/cloud-data/v1`
  endpoint, which will.
* **The DOM**, for `/press`, `/gallery` and the home page. Those are laid out in the
  Wix editor rather than held in the CMS, so their content exists only as
  server-rendered markup. `pages.py` collects text at the nearest **block** ancestor
  and treats spans as inline: Wix splits one visual line across several `<span>`s for
  styling, and collecting per-span fragments a heading like "Innovation, AI & Digital
  Economy" into three rows.

All three accept the per-app instance token the site hands any anonymous visitor at
`/_api/v1/access-tokens`.

One gotcha worth keeping: the legacy cloud-data endpoint stalls indefinitely on a large
reference payload. Querying all three events with `includeReferencedItems` hung for 40
minutes before being killed. Filtering to one event code, and pulling only the panels
that event points at, returns in under a second. `scrape.py` does it that way on
purpose.

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
with itself. Ten issues at the time of writing, and they are not cosmetic:

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
   Economy" and "Session D: Shaping Future Healthcare". Delegates pick a session by
   name at registration, so the per-session headcount cannot reconcile until they match.
5. **A misspelled option on the live form.** "SVEF Insititutional Member". The app shows
   the answer back on the delegate's own profile, so the typo lands on every affected
   delegate's screen.
6. **Three speakers.** The Speakers collection holds 104 records and Zurich 2026 links
   42 of them; Ha Noi 2026 links 3.
7. **Accommodation, visa and transport are empty.** The dynamic pages resolve but the
   CMS fields hold nothing.
8. **19 of 20 press items have no link.** The press page shows an outlet, a headline and
   a thumbnail; only one entry links to the article.

The console reports these; it does not silently paper over them.

## Design notes

Palette, type and the square-cornered surfaces follow `../BRAND.md` without deviation:
the Hanoi green ground, the SVEF red as accent, Inter Tight as the only face, and the
wordmark delivered as outlined SVG rather than as live text next to the brand name.

The delegate app is EN/VI; only the app's own chrome is translated. Programme copy,
speaker bios and press headlines stay in the language SVEF published them in, because
machine-translating scraped copy in the client would put words in the organiser's
mouth. Demo records carry both languages because we wrote them. The back office is
English only, per the scope agreed on 14/08/2026.

Both files are single-file demos with no build step and no framework. State is kept in
`localStorage`: the registration, profile, connections, saved sessions and chat in the
app, an editable working copy in the console, with "Revert to scraped source" to throw
it away.
