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
| Where the pair will meet | Built, and queried | Free text the two attendees agree between themselves, empty until they settle it. The system allocates nothing, per 25/08 item 2.2. June asked on 28/08 whether it should be shown at all; awaiting SVEF. |

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

Two things this deliberately did not touch. The **website's own document library**
(`Resources & Documents`: reports and market briefs open to all, templates for
members) is a different thing from per-event content and keeps its public tier; it
also still has no admin surface, which is the next gap of this shape. And the app
gates the library section-wide at `registered`, so a library item set to *Anyone
signed in* is currently shown to registered attendees only. The stricter of the two
wins, which is safe but not yet exact.

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
5. **May an attendee claim their organisation themselves?** (28/08) An account can
   already hold a personal and a company profile side by side in the back office
   (BR-W-04), and a registrant is matched to an organisation automatically by
   company name, normalised, both in the app and in the Wix import. What does not
   exist is a self-service "this is my company" action in the app: an attendee
   cannot attach themselves to an organisation profile, and an unmatched company
   stays as the free text they typed. Whether that stays a secretariat job or
   becomes a request the attendee raises is undecided, and it sits next to question
   2 above.
6. **Should the meeting place line be shown at all?** (28/08) See 1.2.
7. **Whether the business directory joins the app.** Linh's directory
   (`svefzurich2026-delegatory.netlify.app`) overlaps with the organisation profiles
   built here. Raised on 25/08 and not resolved; the two should not both exist.

## 3. Deferred, with the reason

| Item | Reason |
|---|---|
| Partner self-service space: partners creating and maintaining their own events | Toàn asked for this to be proposed separately, together with partner registration. Not in the October scope. |
| Event listing search, sort and filter | Kept basic to make October. Revisit when partner events make the list long enough to need it. |
| Meeting topics | June's note: not needed at this stage. |
| Payment and ticketing | Removed 19/08, "cut payment out, all events are free at this moment". June confirmed on 19/08 that payment is not needed for this phase. The reference implementation is in git history at commit `4e703cb`. |
| Membership applications in the product | Removed 19/08. Arranged with the secretariat off the platform. Partner packages work by direct communication with SVEF, not self-checkout. |

## 4. Still outstanding in the BRD

- **BR-W-19**, importing data from the legacy system, is now **built** for event
  registrations. Other record types still have no importer.
- Map and navigation, and the exhibitor and sponsor booth directory, remain listed
  in BRD 8.4 as having no existing UI. The app has a venue map screen but no booth
  directory.
- **BR-W-13 / BR-W-14** (partners proposing events, and admin approving them) are
  partially back: partner events exist again, but SVEF keys them in. Nothing in the
  product collects a request from the partner.

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
