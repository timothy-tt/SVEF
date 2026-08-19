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
| Ticket booking, free events | Free pass confirmation | Free pass confirmation | Built |
| Ticket booking, paid events | Tiers with CHF and VND, early bird with cut-off, sold-out tier, quantity | Same | Built |
| Payment | Card, TWINT, Vietnam domestic gateway, invoice and bank transfer, with billing details and a VAT line | Same, phone shaped, with gateway redirect and return screens | Built, simulated |
| Registration confirmation and tickets | Booking reference, per-attendee ticket codes, add to calendar (.ics), confirmation-email note | Booking reference, one pass per attendee | Built |
| View registration | Member portal, My registrations | Registered tab and booking sheet | Built |
| Modify registration | Change tier, edit attendee details | Same | Built |
| Cancel registration | Confirm step, seats released | Confirm step, mock refund status | Built |
| Discount and early-bird codes | Promo field validated against a mock code table, live totals | Tier-level early bird | Built |
| Waitlist when full | Join the waitlist, position shown | Same | Built |
| Registration window | Not yet open, open, closed states | Same | Built |
| Approval workflow | Registering yields Pending approval | Same | Built |

## 8.2 Back office, organiser facing

All of the following live in the Registrants area of an SVEF event, under
Event Management, App content. Partner-proposed events never reach the app and
therefore carry no registration panel.

| BRD requirement | Status | Where |
|---|---|---|
| Create and configure events, free or paid | Built | Settings sub-tab |
| Registration types, personal and group, max group size | Built | Settings |
| Pricing tiers | Built | Tickets & codes |
| Registration capacity limits | Built | Settings, enforced on confirm and promote |
| Early-bird and discount codes | Built | Tickets & codes |
| Approval workflows | Built | Settings toggle, approve and reject row actions |
| Attendee registration dashboard | Built | Overview sub-tab |
| Export data and reports | Built | CSV export, extended columns, no passwords or sensitive fields |
| Send confirmation emails | Simulated | Resend action and bulk email, toast only |
| Manage waitlists | Built | Waitlisted status, promote respects capacity |
| Track payment status | Built | Paid, unpaid, refunded, free |
| Process refunds | Built, simulated | Full or partial with a reason, credit note number, reflected everywhere |
| Payment reconciliation | Built, simulated | Payments sub-tab: ledger, expected against collected against outstanding against refunded, difference explained, mark bank transfer received |
| QR check-in | Built | Check-in sub-tab, mock scan plus ticket-code entry, per-attendee, undo |

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

## Still outstanding elsewhere in the BRD

- **BR-W-19**, importing or declaring data exported from the legacy system for the
  migration phase, has no prototype.
- Map and navigate, and exhibitors and sponsors booths, are listed in BRD 8.4 as having
  no existing UI. The app has a venue map screen but no booth or exhibitor directory.
