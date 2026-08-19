# SVEF demo: registration scope coverage

Status of the BRD "Event Registration" requirements against the prototypes, after the
August 2026 registration sweep. Reference documents: `SVEF_BRD_Website_App.pdf`
sections 7.4, 8.1 and 8.2, and the internal scope chốt of 14/08/2026.

Legend: **Built** = demoable click-through prototype with mock data.
**Simulated** = the flow is fully present and behaves correctly, but there is no
external integration behind it and it says so on screen. No money moves.
**Not built** = deliberately out of the prototype.

## Why this document exists

Before the sweep, the only registration feature in the demo was a read-only registrant
list with a CSV export in the back office. The BRD asks for a full Event Registration
Management module on the organiser side and personal plus group registration with
ticketing on the attendee side. The 14/08 chốt recorded only "danh sách đăng ký có xuất
CSV", which is narrower than the BRD, and the difference was never written down as a
decision. This table now records where things actually stand.

## 8.1 Front office, attendee facing

| BRD requirement | Website | App | Status |
|---|---|---|---|
| Personal registration | Wizard, step 1 | Registration sheet | Built |
| Group registration | Add and remove attendee rows, one booking, many passes | Same | Built |
| Registration, all events | Confirmation with booking reference and pass | Same | Built |
| Ticket booking, paid events | Removed from scope, all events are free | Removed | Removed |
| Payment | Removed from scope | Removed | Removed |
| Registration confirmation and passes | Booking reference, per-attendee pass codes, add to calendar (.ics), confirmation-email note | Booking reference, one pass per attendee | Built |
| View registration | Member portal, My registrations | Registered tab and booking sheet | Built |
| Modify registration | Change tier, edit attendee details | Same | Built |
| Cancel registration | Confirm step, seats released | Confirm step, mock refund status | Built |
| Discount and early-bird codes | Removed from scope | Removed | Removed |
| Waitlist when full | Join the waitlist, position shown | Same | Built |
| Registration window | Not yet open, open, closed states | Same | Built |
| Approval workflow | Registering yields Pending approval | Same | Built |

## 8.2 Back office, organiser facing

All of the following live in the Registrants area of an SVEF event, under
Event Management, App content. Every event is organised by SVEF, so every event
carries app content and a registration panel.

| BRD requirement | Status | Where |
|---|---|---|
| Create and configure events, free or paid | Built | Settings sub-tab |
| Registration types, personal and group, max group size | Built | Settings |
| Pricing tiers | Removed from scope | |
| Registration capacity limits | Built | Settings, enforced on confirm and promote |
| Early-bird and discount codes | Removed from scope | |
| Approval workflows | Built | Settings toggle, approve and reject row actions |
| Attendee registration dashboard | Built | Overview sub-tab |
| Export data and reports | Built | CSV export, extended columns, no passwords or sensitive fields |
| Send confirmation emails | Simulated | Resend action and bulk email, toast only |
| Manage waitlists | Built | Waitlisted status, promote respects capacity |
| Track payment status | Removed from scope | |
| Process refunds | Removed from scope | |
| Payment reconciliation | Removed from scope | |
| QR check-in | Built | Check-in sub-tab, mock scan plus pass-code entry, per-attendee, undo |

## Open decisions for SVEF

1. **Payment provider.** In-app payment is now built and demoable end to end, but
   nothing is integrated. Going live needs a chosen provider for cards and TWINT, and
   a domestic Vietnam gateway for VND. BRD 8.4 records that the Vietnam gateway has no
   existing UI, so the screens in the app and on the website are a design proposal for
   SVEF to approve. The commercial terms, the provider fee that drives the net column,
   and settlement timing all remain open.
2. **VAT position.** Every total carries VAT as its own line, driven by a per-event
   rate set in the back office and labelled on screen as a placeholder. The rates in
   the demo are illustrative only and are not a statement of Swiss or Vietnamese tax
   law. SVEF's accountants need to confirm the real treatment, including whether VAT
   differs between the Swiss and Vietnamese events.
3. **Invoicing.** Invoice numbering, the prefix and sequence, and credit note handling
   are prototyped in the back office. Whether these invoices need to satisfy Swiss or
   Vietnamese statutory invoice requirements is an open question, and the prototype
   invoice carries a footer saying it is not a valid invoice.
4. **Bank transfer holds the seat** for a stated period rather than releasing it, and
   **refund policy and window** are placeholder wording. Both need SVEF's rules.
5. **Confirmation email content** is a placeholder, including the wording and sender.
6. **Currency.** Paid tiers carry CHF with a VND equivalent. Whether VND is a display
   conversion or a real second price is a pricing and tax decision.
7. **Capacity numbers, tier prices, codes and all ledger figures** are mock values
   pending real numbers from SVEF.

## Card data

No full card number exists anywhere in the three files. Only the brand and the last
four digits are ever stored or displayed, the capture field is wiped on submit, and
the exports carry no card, password or token fields.

## Scope removed on 19/08/2026: third-party events

Partners and other third parties can no longer propose or host events. Every event
in the product is organised by SVEF. Removed from all three prototypes: the partner
"Propose your event" form and the member portal's event-requests view, the admin
approval queue for partner-proposed events, the SVEF against partner distinction on
the events list and event pages, and the external registration and ticketing route
that sent visitors to an organiser's own website.

This deliberately drops two BRD requirements, both marked High priority:

| BRD | Requirement | Status |
|---|---|---|
| BR-W-13 | A request form allowing partners to self-register or propose their events to be published on the forum | Removed from scope |
| BR-W-14 | Admin approves or rejects partner-proposed events before they are publicly displayed | Removed from scope |

BR-W-15 (display both forum and partner events on the homepage) is also narrowed,
since there are no partner events left to display.

The consequence worth flagging to SVEF: the site no longer has any route for a member
or partner organisation to get an event onto the SVEF calendar. If SVEF still wants
partner events listed, that becomes a manual back-office task for the secretariat,
who would create the event themselves. Nothing in the product collects the request.

## Scope removed on 19/08/2026: membership applications

Applying for SVEF membership is no longer done in the product. It is arranged
directly with the secretariat, off the platform.

What stays: **accounts**, which remain self-serve through Continue with Google,
Continue with Microsoft, or email and password; and **members**, meaning existing
members, partners, tiers, the directory, gated profiles and the member portal, all
provisioned by SVEF in the back office. What goes is only the self-serve route from
"interested" to "member", and the back-office queue that reviewed it.

Removed: the join and add-profile wizard on the website, the "+ Add profile" control
in the member portal (the profile switcher stays, listing profiles the secretariat has
set up), and the Membership applications queue in the back office. The Become a
Partner page keeps its packages and now points at the secretariat instead of a form.

This deliberately drops or narrows two more BRD requirements, both marked High:

| BRD | Requirement | Status |
|---|---|---|
| BR-W-07 | Define the onboarding and approval workflow when a user registers a new account or profile | Narrowed to account creation only, no membership approval in software |
| BR-W-08 | Improve the partner-registration form: attractive, easy to use, clearly structured step by step | Removed from scope, there is no partner-registration form |

The consequence worth flagging to SVEF: nothing in the product now captures an
enquiry from someone who wants to join. The Become a Partner page ends at the
secretariat's contact details, and whatever arrives by email or phone is keyed into
the back office by hand. There is also no record in the system of applications that
were declined, since they never enter it.

## Scope removed on 19/08/2026: payment and ticketing

"Cut payment out, all events are free at this moment", and on ticketing, "no ticketing
anymore, just full conference registration."

Money has left the product entirely. Removed from all three prototypes: every price
and currency, ticket tiers including early bird, discount and promo codes, all four
payment methods with their screens, billing details, VAT, invoices and credit notes,
refunds, the payments ledger and reconciliation, payment status, and revenue wherever
it was reported. There are no tiers, no named pass types and no access levels: one
registration admits you to the whole event.

What stays is the whole of registration: personal and group, capacity, seats
remaining, sold out, the waitlist and its position, the registration window, organiser
approval, modify and cancel, the pass and its QR, back-office check-in, and the
registrant table with its filters and exports. The admission artefact is called a
**pass** throughout, not a ticket, since nothing is bought.

This drops the commercial half of the BRD's event module:

| BRD | Requirement | Status |
|---|---|---|
| 8.1 | Ticket booking and payment, paid and free events | Removed, registration only |
| 8.2 | Pricing tiers and payment options | Removed |
| 8.2 | Early-bird and discount codes | Removed |
| 8.2 | Track payment status and reconciliation | Removed |
| 8.2 | Process refunds | Removed |
| 8.4 | Domestic Vietnam payment gateway | Removed, was already ranked low priority |

Note the wording "at this moment". Payment is expected to be revisited. It was removed
cleanly rather than disabled, with no dormant flags or commented-out code, so the
reference implementation lives in git history at commit 4e703cb and the two commits
around it, which is where to look if it returns.

## Still outstanding elsewhere in the BRD

- **BR-W-19**, importing or declaring data exported from the legacy system for the
  migration phase, has no prototype.
- Map and navigate, and exhibitors and sponsors booths, are listed in BRD 8.4 as having
  no existing UI. The app has a venue map screen but no booth or exhibitor directory.
