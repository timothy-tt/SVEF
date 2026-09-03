# SVEF demo: scope coverage

Where the three prototypes stand against the BRD, the internal scope chốt of
14/08/2026, and the client meeting of 25/08/2026. Reference documents:
`SVEF_BRD_Website_App.pdf`, and `SVEF - Meeting Note - 25.08.docx` as circulated by
June on 26/08.

Legend: **Built** = demoable click-through prototype with mock data.
**Simulated** = the flow is fully present and behaves correctly, but there is no
external integration behind it and it says so on screen.
**Not built** = deliberately out of the prototype, with the reason recorded.

---

## 1. What the 25/08 meeting changed

The meeting set a clear order of priority, and this sweep follows it:

> Highest priority: the **app**, focused on event and agenda interaction. The
> website only needs the basics for now. Partner and partner-event management
> comes later.

### 1.1 Events

| Ask | Status | Where |
|---|---|---|
| Partner events return to the calendar | Built | Website events list, app event chooser, back-office event list |
| Partner events are link-outs with a minimum field set | Built | Name, cover image, description, dates, organiser, external URL. Nothing else. |
| No admin surface for partners | Not built, deliberate | See "Deferred" below |
| Profile created once, reused for every event | Built | Back office → Speakers & Organisations; the app says so on every profile |
| Automatic agenda reminders on top of manual push | Built | Back office → event → Push; app → profile → notifications |
| Event listing search and filter | Deferred | Kept basic to make October. Recorded as next step in the meeting. |
| Slug paths rather than subdomains | Built | `/events/svef-hanoi-forum-2026`, with `hanoi2026` redirecting |

On the URL structure: a subdomain per event means a separate site per event, with
its own DNS, certificate, deployment and member session. Distinguishing events by
path keeps one site, one session and one deployment. The demo is a static file on
GitHub Pages so it uses the hash equivalent (`#/events/<slug>`) and prints the
canonical path on the page; it becomes a real path the moment it runs on a server
that can rewrite. Old subdomain-style links are mapped to the new slug and the page
says so, which is the redirect that was asked for.

### 1.2 Connections and B2B meetings

| Ask | Status | Where |
|---|---|---|
| Meeting requests arrive in the app **and** by email | Simulated | Stated on the request sheet and in the diary; no mail is sent |
| Accept and reject on a received request | Built | App → Schedule → Meetings |
| Both parties notified on confirmation, with who/when/which event | Built | The demo shows one side's inbox and states the other side got the same |
| No seat or table allocation | Built | The platform allocates nothing; the pair agree a place in chat, stored as free text |
| Back office sees every meeting and its status | Built | Back office → event → Meeting bookings |
| End-of-event meeting statistics | Built | Requests made, confirmed by both, actually held, awaiting answer, acceptance rate |
| Membership tier badges in the connect list | Built | Star badges from the organisation's tier, set in the library |
| Connect with an **organisation**, not just a person | Built | Organisation profiles, person ⇄ company both ways, request contact |
| Company shown under each name on both sides of a meeting | Built | Back office meeting table |
| Meeting topic | Not built | June's note: not needed now. Deferred. |
| Where the pair will meet | Built, unchanged | Free text the two attendees agree between themselves, empty until they settle it. The system allocates nothing and states nothing, per 25/08 item 2.2. June asked on 28/08 whether it needs showing at all; answered 31/08 and left as it stands, since the app only ever echoes what the pair wrote. |
| An attendee claims their own organisation | Built | App → Profile → My organisation; back office → Memberships → Organisation claims |

**Claiming an organisation. Built 31/08, answering June's question of 28/08.**
An attendee may now ask to be attached to an organisation profile, and SVEF answers
in the back office. The automatic match is untouched and stays the default: a
registrant is still resolved to an organisation by their company name, normalised
the way the Wix import normalises it, and the common case needs nobody to do
anything. What the attendee gained is the two things matching cannot do for itself.
If the match is wrong, App → Profile → **My organisation** shows which organisation
they are attached to, says it was matched from what they typed, and offers a quiet
"this is not my organisation". If nothing matched, the same screen says so, names
the company text that failed to match, and offers to pick the right one from the
list. A company SVEF holds no profile for at all can be submitted as a proposed
name, and nothing is created from it: SVEF creates the profile when it approves.

Submitting sets a **pending** state and changes nothing else. The states are none,
pending, linked and rejected, all four are on screen, and a refused request keeps
SVEF's written reason rather than reverting to none and leaving the attendee to
guess. The attendee can withdraw a request while it is waiting, and can ask again
after a refusal.

The queue is in the back office under **Memberships**, not under Speakers &
Organisations, because a claim does not change what an organisation record says, it
changes what an account holds: approving one gives the account a company profile
beside the personal one, which is BR-W-04 and the Profiles column of that table.
The queue shows who asked, their email, the company text on their record, what they
asked for or the name they proposed, their note and when it arrived. Approving lets
the operator confirm or correct the organisation before linking, and creates the
profile when the request was for a new one. Rejecting requires a reason, because
that reason is what the attendee reads. Handled claims stay listed with their
outcome. The manual link and unlink stays as well, on every row of the memberships
table: hand-fixing an attendee whose typed company never matched is what the
secretariat does today, it is faster than waiting for the attendee to notice, and
taking it away would have been a step backwards. A link set by hand overrides the
name match; clearing it hands the account back to the automatic one.

Four things this deliberately did not do. There is no **evidence** attached to a
claim, no work-email domain rule and no uploaded business card: SVEF checks by
hand, as it does now, and a domain rule would misfire on the free webmail addresses
in the current registration list. Approving does **not** rewrite the company text
the attendee typed on their registration, so exports still show what they actually
wrote. A claim from an email with no membership account is linked on the claim
record and the back office says plainly that no account exists on that address yet,
which is the one seam where registrants and accounts still fail to meet, and it
sits next to open question 2. And the two prototypes are separate files with no
server between them, so an approval does not travel from the back office into the
app by itself; both sides carry the whole state machine and the app has one entry
point that the real push would call.

### 1.3 Content

Three sections, three access rules, exactly as settled in the meeting:

| Section | Access | Note |
|---|---|---|
| Library / Resources | Login | Speakers' slides, downloaded directly rather than requested from the secretariat |
| Gallery | Login | A public gallery was proposed and overruled on privacy grounds. Group shots already published on social media are the stated exception, so **Public** is a per-album switch, not a section-wide setting. |
| News | Public | Reach is the point of it |

**Updated 31/08 after June's note of 28/08.** Two things changed.

*The three sections can now be filled, not only re-graded.* Until now the Content
tab listed what was there and let the operator change who could see it, but had no
way to put anything there in the first place, which left SVEF collecting slides
from speakers and links from media with nowhere to file them. Back office → event →
Content now carries **＋ Add document**, **＋ Add album** and **＋ Add coverage**,
with edit and remove on every row. A document takes a title, who shared it, a file
and an access level; an album takes a title, photos, an access level and a written
reason for that level, so the privacy call is recorded rather than re-argued; a
press item takes a title, the publication, a date and the link. Attaching a file is
simulated, as everything else in the prototype is, and the attached file is named
after the title so the list does not fill up with `document-1.pdf`.

*Public is gone from the library.* June's point: inside the app you are signed in by
definition, so a "public" document only ever means something on the website, and
the choice that decides anything is between anybody signed in and the people
registered to this event. The library selector now offers those two. A row saved
earlier carrying Public is pulled back to Registered attendees rather than left
showing a value the control cannot offer. The gallery keeps all three, because the
per-album Public was Toàn's explicit 25/08 exception for group shots, and news stays
public and ungated.

One thing this deliberately did not touch, and it is still true. The app gates the
library section-wide at `registered`, so a library item set to *Anyone signed in* is
currently shown to registered attendees only. The stricter of the two wins, which is
safe but not yet exact.

**Also 31/08: the website's own library now has a back office.** June's note named
`library/resource, gallery, news coverage` without saying which of the two places
they live in, and there are two. The per-event half is the Content tab above. The
other half is what the public website publishes whether or not there is a forum on:
the `Resources & Documents` page (reports, market briefs, templates) and the
`Media & Press` page (press mentions, galleries, video). Those lists were hard-coded
in `website.html`, so every correction to a report title was a release. They are now
a back-office section of their own, **Website Library**, sitting under Content
beside the two pages it fills, with add, edit and remove on all three lists, a
category, a publish state and an access tier per row, and both languages on every
title because the public page renders whichever one the visitor picked.

It is its own sidebar entry rather than a tab folded into an existing one. CMS &
Pages edits one page at a time, a title, a body and its SEO fields, and these are
repeating records with no page body to hang off. News / Media is the article list,
and a report, a press mention and a photo album are not articles: they carry a file,
a category and an access tier that an article has not. Either merge would have put
two unrelated shapes in one table.

*The website library keeps Public, and that is not an inconsistency.* On the website
a visitor is anonymous until they say otherwise, the reports and the market briefs
are the shopfront and are how most people meet SVEF at all, and the templates are
for members preparing a submission. So the tiers here are **Public** and **Members
only**. Inside the app the attendee is signed in by definition, which is exactly the
reason June asked for Public to come off the per-event library on 28/08. Same word,
two audiences, two lists, and the code says so at both ends so that a later reader
does not unify them and break both.

**Also 31/08: an intake route for material from speakers and media.** The other
half of June's note was `mình / họ sẽ đăng lên app`, and the `họ` had nowhere to
land: a speaker mails a deck to the secretariat and somebody retypes the title, the
file and the access level by hand, which is where the delay and the typos come from.
Back office → **Submissions**, under Events, is now that route.

| Piece | What it does |
|---|---|
| The link | SVEF issues a link scoped to one event and one contributor, a speaker or a press contact, with an expiry date. It is shown, copied and revoked from the table. Partner events are not offered, because they are a link out to somebody else's programme and have no content to fill. |
| The inbox | What arrives is listed with who sent it, which event, what kind (slides, photos or a press link), the file or the URL, their note and when it came in. Nothing is on the website or in the app at this point. |
| The publish button | Reviewing an item writes it into that event's Library, Gallery or News coverage in the same shape the Content tab stores, with the same per-section access levels, so nothing is retyped and there is no second data path into the app. Rejecting it takes a written reason, which is required. |

Two honest limits. The prototype has no inbound channel, no mailbox and no upload
endpoint, and there is no page behind the link, so an arriving submission is
demonstrated with a clearly labelled **Simulate an inbound submission** button that
fires against one of the live links. And the link is emailed by the secretariat from
their own mail, outside the product; nothing is sent from the screen.

This is a link, an inbox and a publish button, and it is deliberately not the
partner self-service space Toàn deferred on 25/08. There is no account here, no
login, no password and no profile the contributor maintains. They hold one expiring
link, see nothing else of the event, and nothing they send appears anywhere until
somebody in the secretariat has approved it. If SVEF wants speakers or partners to
maintain their own material over time, that is the separate proposal Toàn asked for,
not this.

Also built: speaker bio opens from the agenda (the bio is the person's own profile,
not a per-event field), sponsors and speakers resolve to the same organisation
record, and personal profiles no longer show contact details.

**On privacy (3.2).** "Tuyệt đối KHÔNG hiển thị contact information" is implemented
as a whitelist, not a blacklist: a personal profile shows LinkedIn and a personal
website and nothing else, whatever the record happens to hold. Reaching somebody
goes through **Want to connect**, which sends the mail without either side seeing
the other's address. The privacy sheet lists the fields SVEF holds but will never
publish, so the attendee can see they are held and are not leaking. An
**organisation** is the opposite and keeps its switchboard and its info@ address,
because that is the front door it wants people to use.

### 1.4 Data and migration

| Ask | Status | Where |
|---|---|---|
| Import registrations exported from Wix | Built | Back office → event → Import |
| Handle the real export format | Built | See below |
| Match against existing registrants | Built | Dry run marks new / already registered / duplicate / cannot import |
| Match company names to organisations | Built | Normalised match, ignoring AG/JSC/Ltd and punctuation |
| Delegations | Built | One row with several delegates becomes a group booking |
| Magic-link account claim | **Not decided** | All three routes are offered; see below |
| Test with internal profiles only | Followed | The sample file is the one SVEF sent, with SVEF's own staff in it |

Three things about the sample export drove the implementation, and each would have
broken a naive importer:

1. It is named `.csv` but is **UTF-16LE with a BOM and tab separators**, which is
   what Excel produces on "Save as Unicode Text". Assuming UTF-8 and commas throws.
   The importer sniffs the byte-order mark and the delimiter.
2. The header row is the **full question text**, not field names, so mapping cannot
   be positional. Columns are matched by scoring the question wording against known
   hints. Scoring rather than first-match matters: "Phone Number: with country
   code…" contains "country", and "Delegation Support Package" contains
   "delegation", so a naive substring match puts a city in the company column.
3. Phone numbers carry Excel's leading apostrophe, which is a spreadsheet artefact
   and is stripped.

**4.2 is deliberately left open.** The meeting ended with the action to "look into
cái importation" and no decision, because matching on the email address alone risks
a second profile when somebody later signs up with a different address, which was
Toàn's concern, while asking everybody to re-key a minimal profile avoids that but
adds friction, which was Rachel's point. The back office therefore offers all three
routes as a setting, with the consequence of each written next to it, and none is
baked into the product. Whichever SVEF picks needs no code change.

### 1.5 Branding

The palette is lifted towards the Hanoi event site: the neutral ground moves to the
pale green wash sampled from `hanoi2026.svef.ch`, and the heaviest solid-navy
surfaces become a green-to-navy gradient, which is what the "hơi tối" comment was
about. The spot colours from the brand guideline are untouched. Body type stays on
the brand navy, because green or grey text on this ground drops below WCAG AA. See
`BRAND.md`.

The developer credit (5.2) is a one-line colophon at the foot of the website.

---

## 2. Open questions for SVEF

These are on screen in the product, not buried here, so they can be answered in a
demo rather than in a document.

1. **Who may request a meeting?** (2.4) Members and sponsors only, everybody, or
   everybody who ticked the networking question on the registration form. Set per
   event in the back office; the app enforces whatever is set and explains the
   refusal rather than hiding the button. The meeting left this with SVEF to settle
   alongside the membership package. The demo defaults to the third option, because
   that is what the current Hanoi form actually collects.
2. **How do imported registrants get into the app?** (4.2) See above. Three routes,
   no default.
3. **Membership tiers.** The tiers in the demo are read off the SVEF package page
   June linked on 19/08. The real names, and which of them are sold rather than
   granted, need confirming.
4. **Partner event minimum fields.** The demo asks for name, organiser, link,
   description, dates and a cover image. If SVEF wants more, that is a change to one
   form.
5. **Who is a "member" for the website library?** (31/08) The public library has
   two tiers, Public and Members only, and templates sit behind the second. Whether
   that means any signed-in account or only a paid membership tier is the same
   unanswered question as 3 above, and the demo treats it as "signed in" until SVEF
   settles the packages.
6. **Does the submission link go out from the platform or from a person?** (31/08)
   The back office generates and shows the link; the secretariat currently copies it
   into an email they were writing anyway, which keeps the chase personal and is how
   SVEF describes doing it today. Sending it from the platform, and mailing the
   rejection reason automatically, are both a small addition and neither is built.
7. **Whether the business directory joins the app.** Linh's directory
   (`svefzurich2026-delegatory.netlify.app`) overlaps with the organisation profiles
   built here. Raised on 25/08 and not resolved; the two should not both exist.

## 3. Deferred, with the reason

| Item | Reason |
|---|---|
| Partner self-service space: partners creating and maintaining their own events | Toàn asked for this to be proposed separately, together with partner registration. Not in the October scope. |
| Partner self-service, again: the 31/08 submission intake is not it | The intake is a link, an inbox and a publish button for material on an event SVEF already runs. No account, no login, no profile the partner maintains, nothing published without a person approving it. The self-service space stays where Toàn put it on 25/08: a separate proposal. |
| Venue map and navigation | Cut from the MVP on 03/09/2026. What existed was a hardcoded SVG floor plan of the Hanoi venue: it was not per-event, so a partner event in Zurich or Basel showed the Hanoi layout; the "your location" dot was a fixed circle with no positioning behind it; and "Chỉ đường" only raised a toast. Building it properly needs a floor plan per event, an editor for it in the back office, and booth coordinates — none of which exist. The screen and both its entry points (the Explore button and the Home quick action) are removed rather than left as an unbuilt feature in front of the client. Reference implementation is in git history at commit `eb989af`. |
| Event listing search, sort and filter | Kept basic to make October. Revisit when partner events make the list long enough to need it. |
| Meeting topics | June's note: not needed at this stage. |
| Payment and ticketing | Removed 19/08, "cut payment out, all events are free at this moment". June confirmed on 19/08 that payment is not needed for this phase. The reference implementation is in git history at commit `4e703cb`. |
| Membership applications in the product | Removed 19/08. Arranged with the secretariat off the platform. Partner packages work by direct communication with SVEF, not self-checkout. |

## 4. Still outstanding in the BRD

- **BR-W-19**, importing data from the legacy system, is now **built** for event
  registrations. Other record types still have no importer.
- **Map and navigation** is listed in BRD 8.4 as having no existing UI, and is now
  deferred out of the MVP — see section 3 for what was there and why it went.
- The **exhibitor and sponsor booth directory** is also BRD 8.4. The Explore tab
  lists exhibitors, but every entry is a dead end: no booth detail, no booth number,
  and nothing that places a booth anywhere. A list is not yet a directory.
- **BR-W-13 / BR-W-14** (partners proposing events, and admin approving them) are
  still not built, and the submission intake of 31/08 does not change that. What the
  intake collects is **material for an event that already exists**: slides, photos
  and coverage links. It collects no event proposal, and a contributor cannot create
  anything. Partner events still exist only because SVEF keys them in.

  What has changed is smaller and worth stating precisely: the **approval half** of
  BR-W-14 now exists as a working pattern. An outsider with no account sends
  something in through an expiring scoped link, it queues, and a person in the back
  office publishes it or rejects it with a reason. If BR-W-13 is ever built, that is
  the shape it should reuse rather than a second one being invented. The half that
  is missing is the one that matters for BR-W-13: a form that collects a proposed
  event from a partner.

## 5. Registration module, as built

Unchanged from the August sweep except where the 25/08 meeting touched it. The
organisation field on the registration form is now **mandatory** (2.5): SVEF only
accepts people attending on behalf of a business or an institution, and the whole
company side of connecting collapses without it.

| BRD requirement | Website | App | Status |
|---|---|---|---|
| Personal registration | Wizard | Registration sheet | Built |
| Group registration | Many attendees, one booking | Same | Built |
| Organisation required | Enforced | Enforced | Built |
| Confirmation and passes | Booking reference, per-attendee pass, .ics | Same | Built |
| View, modify, cancel | Member portal | Registered tab | Built |
| Waitlist, capacity, registration window, approval | Built | Built | Built |
| Ticketing, pricing, payment, refunds | Removed 19/08 | Removed | Removed |
| Back office: dashboard, export, check-in, waitlist | Built | — | Built |
| Back office: import from Wix | Built | — | Built |
| Confirmation emails | Simulated | — | Toast only |

## 6. Card and personal data

No payment data exists anywhere in the product; payment was removed on 19/08.
Exports carry no passwords or tokens. Personal telephone numbers and email
addresses are held on registrant records, are visible to the secretariat in the
back office, and are never rendered on a public or attendee-facing profile.
