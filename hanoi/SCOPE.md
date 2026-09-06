# SVEF Ha Noi 2026: scope of the single-event build

What this build is for, what is in it, and what is deliberately not. Scoped to one
event, HANOI2026, on 19 to 20 October 2026.

The multi-event product's scope lives in `../SCOPE_COVERAGE.md` and is the reference
for anything not decided here. Where the two differ, it is because this build answers
"which event" once at compile time and the other one asks on every screen.

Legend: **Built** = works end to end against the data in `data.js`.
**Simulated** = the flow is complete and behaves correctly, with no integration
behind it, and the screen says so. **Out** = deliberately absent, with the reason.

---

## 1. What this build is

An attendee app and a back office for one forum. Two audiences, two surfaces, no
event switcher on either.

The attendee app is for someone who has **already registered on the website and
signed in**. It never asks anyone to register: everything it knows about them comes
from the 19 answers they gave on the live RSVP form, and its job is to get them
through three days without typing any of it again.

The back office is for the secretariat during the weeks before the forum and on the
days themselves. English only, per the scope decision of 14/08/2026.

## 2. The data, and what is invented

The build is scraped from `hanoi2026.svef.ch`, and the line between real and demo is
kept sharp because the client will ask.

| Real, scraped on every run | Demo, and labelled in the back office |
|---|---|
| Programme: 3 days, 19 sessions, 6 parallel tracks | Attendees and their registrations |
| Speakers: 3 keynotes with photos and bios | Organisations, other than the two organisers |
| RSVP form: 19 fields, options, confirmation copy | Connections, meetings, messages |
| Press: 20 outlets with headlines and thumbnails | Documents |
| Gallery: 15 photos | Arrivals at the check-in desk |
| Overview: vision, diagram, 8 pillars, 3 objectives, venue copy, organiser logos, offices, socials | The signed-in attendee, Anh Trần |
| Dates, status, registration window, hero image | Speaker-to-session links (see 4.2) |

Nothing invented is presented as SVEF's. The attendee app does not label its own
records, because provenance is an organiser's concern and a delegate reading an
agenda does not need a footnote; the back office marks every fabricated row.

## 3. In scope, and built

### 3.1 Attendee app

| Area | Status | Notes |
|---|---|---|
| Home: badge, countdown, programme summary | Built | Opens on the signed-in attendee, not a call to register |
| The event's own page content on Home | Built | Vision and its programme diagram, what to expect, 8 pillars, 3 objectives, gallery strip, latest press |
| Agenda: 3 days, sessions, detail | Built | |
| Parallel tracks with a personal pick | Built | The 6 real tracks; the pick is also asked at registration and arrives prefilled |
| Speakers billed on a session | Built | Our linkage, not the CMS's. See 4.2 |
| Day 3 destination options | Built, dormant | Two-option support is in and tested; the CMS publishes only Option A today |
| My agenda | Built | Starred sessions plus whatever registration already chose |
| Attendee directory with search and filters | Built | Industry and market filters, the 8 real pillars as the taxonomy |
| Speakers and organisations directories | Built | |
| Person and company profiles | Built | |
| Connect by message | Built | The request carries a message; the recipient accepts or declines; that message opens the thread |
| Messaging | Built | Header entry point, unread per thread, start a conversation with any accepted connection |
| Meetings, inside the conversation | Built | Request a slot, accept, decline, cancel, all in the thread. Slots are the real gaps in the Day 2 programme |
| Notifications | Built | Generated from the event's own data so they survive a re-scrape |
| Media: gallery, press, documents | Built | |
| Prefilled profile | Built | See 4.1 |
| Business profile and claiming it | Built | The claim is a request; the secretariat approves |
| Visibility controls | Built | Directory listing is the attendee's own registration answer |
| Badge and QR | Simulated | A deterministic block pattern, not a scannable code, and it says so |
| vCard export | Built | |
| EN / VI | Built | Chrome only. Scraped copy stays in the language SVEF published it in |

### 3.2 Back office

| Area | Status | Notes |
|---|---|---|
| Dashboard | Built | |
| Programme editor: days, sessions, tracks, speakers | Built | |
| Speakers, with where each one is billed | Built | |
| Attendees: roster and registration in one record | Built | Status, directory listing, session picks, per-track headcount, CSV |
| Organisations, with claim approvals | Built | Nothing self-approves |
| Connections: the whole graph, with the message | Built | Plus every meeting request, and the rules that govern both |
| Check-in desk | Built | Search, mark arrived per day, counts, walk-in, CSV |
| Gallery and press publishing | Built | |
| Documents | Built | |
| Notification composer | Built | Adds the row the app reads; no push is sent |
| Data health | Built | 11 checks against the live record. See 5 |
| Event settings | Built | Including "revert to scraped source" |

## 4. Two decisions worth recording

### 4.1 The profile is derived, never asked for again

An attendee answers 19 questions to register. Asking again in the app would be the
most irritating thing this build could do, so the profile is built from those
answers, and three of them do real work rather than sitting in a record nobody reads:

* **"Would you like to be featured in the SVEF 2026 Delegates Directory?"** is the
  actual gate on the directory. Answer no and you are in the back office but not
  contactable in the app, and the app says why instead of hiding the button.
* **The two parallel-session answers** resolve to real agenda tracks and land in My
  agenda, already starred.
* **"SVEF Membership Status"** sets the tier badge.

Field ids are matched by **label**, not hardcoded, because Wix regenerates the
`custom-*` ids whenever a question is edited and a stale id fails silently.

### 4.2 Speaker-to-session links are ours

The site holds the agenda as rich text and the speakers as a separate collection,
with nothing joining them. So the pairing is set in the back office by hand, the
Programme editor says so on the form, and Data health carries a standing item asking
SVEF to record it at source. A re-scrape will not restore it if it is cleared.

## 5. Where the live site contradicts itself

Data health reports 11 items. The ones that will cost somebody something:

1. **Three date ranges.** The Events record says 19 to 20 October, its own tagline
   says 18 to 20, the CMS row still says 1 to 3 October. The programme has three
   days, which only fits 18 to 20. This build shows 19 to 20 per the decision of
   06/09/2026 and says so where an attendee would notice.
2. **The venue geocode points at Zurich**, left behind by the Zurich edition.
3. **No venue at all**, on any of the three days.
4. **The RSVP form and the agenda name the parallel sessions differently**, so the
   per-track headcount cannot reconcile until they match.
5. **A misspelled option on the live form** that the app shows back on the
   attendee's own profile.
6. **Three speakers** where Zurich 2026 has 42.
7. **19 of 20 press items have no link.**

## 6. Out of scope, with the reason

| Item | Why |
|---|---|
| Registration inside the app | The app is gated at login and everyone in it registered on the website. The form is Wix's and is edited there |
| An RSVP form editor in the back office | Same. The field definitions still drive the data-health checks and the prefilled profile, which is what actually needed them |
| Accommodation, visa and transport editors | The CMS fields are empty and the app shows a placeholder; there is nothing to edit until SVEF writes the copy |
| Check-in in the attendee app | Admin-side only, decided 07/09/2026. The desk works by search; a scannable badge needs a real encoder |
| Payment and ticketing | Removed from the product on 19/08/2026, all events free |
| Venue map and navigation | Cut from the MVP on 03/09/2026, needs a floor plan per event and booth coordinates |
| Partner self-service | A separate proposal, per Toàn on 25/08/2026 |
| Group registration management | The form collects a delegation list; nothing acts on it yet |
| Capacity and waitlist enforcement | Waitlist is a status a human sets, not a rule the system applies |
| Email delivery of anything | Every send is a toast. No mail leaves the demo |
| Meeting topics | Not needed at this stage, per June |

## 7. Where the demo would need real work to ship

Ordered by how much it matters if SVEF runs this in October:

1. **A backend.** Every surface reads `data.js` and writes to `localStorage`. Two
   attendees cannot actually see each other.
2. **A real QR encoder**, so the check-in desk can scan rather than search.
3. **Email**, for connection requests, meeting confirmations and the notifications
   the composer writes.
4. **The Day 3 detail** and a venue, both of which are blocked on SVEF rather than
   on us.
5. **The remaining 100 speakers**, if Ha Noi is to look like Zurich did.
