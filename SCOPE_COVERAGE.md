# SVEF demo: registration scope coverage

Status of the BRD "Event Registration" requirements against the prototypes, after the
August 2026 registration sweep. Reference documents: `SVEF_BRD_Website_App.pdf`
sections 7.4, 8.1 and 8.2, and the internal scope chốt of 14/08/2026.

Legend: **Built** = demoable click-through prototype with mock data.
**Mocked** = the flow is present and honest about being a demo, no real integration.
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
| Payment | Demo card step, labelled as a prototype, no gateway | Same | Mocked |
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
| Send confirmation emails | Mocked | Resend action and bulk email, toast only |
| Manage waitlists | Built | Waitlisted status, promote respects capacity |
| Track payment status | Built | Paid, unpaid, refunded, free |
| Process refunds | Mocked | Refund action sets status, no gateway call |
| Payment reconciliation | Not built | Needs a real PSP first |
| QR check-in | Built | Check-in sub-tab, mock scan plus ticket-code entry, per-attendee, undo |

## Open decisions for SVEF

1. **In-app and on-site payment is not signed off.** SVEF has only ever pointed ticket
   purchase at the organiser's own website. Both models are demoable: the Hanoi forum
   sells in the product, and a second event keeps the external link. Choosing in-app
   payment pulls in a payment provider, refunds, VAT invoicing and reconciliation,
   none of which is in the current estimate. BRD 8.4 itself ranks the Vietnam payment
   gateway as low priority with no existing UI.
2. **Confirmation email content and the refund policy** are placeholders. The wording,
   the sender and the refund window all need SVEF's input.
3. **Currency.** Paid tiers carry CHF with a VND equivalent. Whether VND is a display
   conversion or a real second price is a pricing and tax decision.
4. **Capacity numbers, tier prices and codes** are mock values pending real figures.

## Still outstanding elsewhere in the BRD

- **BR-W-19**, importing or declaring data exported from the legacy system for the
  migration phase, has no prototype.
- Map and navigate, and exhibitors and sponsors booths, are listed in BRD 8.4 as having
  no existing UI. The app has a venue map screen but no booth or exhibitor directory.
