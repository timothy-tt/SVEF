# SVEF brand implementation

How the SVEF Brand Guideline is applied to the three demos (`website.html`,
`app.html`, `admin/index.html`) and the demo hub (`index.html`).

Source: the `DES ELEMENTS` brand kit sent by June on 18/08/2026
(`palitra svef.pdf`, `Color_guide.pdf`, `svef logo.ai`, `sun_viet.ai`,
`logo-transparent-pdf.pdf`, `dayssansblack.ttf`, mountain plates).
The raw kit is **not** committed: it is 269 MB and contains `.ai`/`.psd`/`.mp4`
working files plus a commercial font. This repo is published through GitHub
Pages, so only the derived web assets below are in git.

## Colour

Spot colours are taken verbatim from `palitra svef.pdf`. Neutrals (ink, rules,
tints, page background) are taken from the blue ramps in `Color_guide.pdf`, so
the whole UI stays inside the brand's own colour space instead of importing a
foreign grey.

| Token | Hex | Pantone | Use |
|---|---|---|---|
| `--red` | `#E42026` | 2347 | primary, CTAs, rules, accents |
| `--green` | `#3E7742` | 349 | secondary, confirmations |
| `--maroon` | `#800000` | 1815 | seal, deep accent |
| `--gold` | `#C3933A` | 7551 | tiers, highlights |
| `--cream` | `#FFF9B8` | 7499 | gradient top, sun rim |
| `--sky` | `#E2F4FD` | 7457 | hero wash, pale ground |
| `--steel` | `#A8CED7` | 2204 | mountains, hairlines |
| `--grad-gold` | `#FFF9B8 → #C3933A` | — | gold gradient |

Neutrals from the `Color_guide.pdf` blue ramps:
`--ink #0E273D`, `--ink-2 #224861`, `--muted #3C6980`, `--line #DAEDF0`,
`--soft #E9F4F5`, `--bg #F5F9FA`, `--card #FFFFFF`.

### Hanoi 2026 event palette (25/08/2026)

The 25/08 client meeting asked for the prototype to be brighter and to follow the
colour pattern of the Hanoi event site. Colours sampled from `hanoi2026.svef.ch`:
`#3E7742` and `#04723D` green, `#F6FBF2` as the page ground, `#DD1A2A` red,
`#B6D4DD` pale blue. That is a green-forward look on a very pale green ground, which
reads considerably lighter than the blue-grey ramp the demo was using.

What changed:

| Token | Was | Now | Why |
|---|---|---|---|
| `--bg` | `#F5F9FA` | `--wash` `#F6FBF2` | the event site's page ground |
| `--soft` | `#E9F4F5` | `--wash-2` `#EDF6EA` | matching tint |
| `--hanoi` | — | `#04723D` | event accent, used on date blocks |
| `--deep` | — | `#123A2A` | top stop of the masthead gradient |

The heaviest solid `--ink` surfaces (the event masthead, the app's profile and
content headers, card thumbnails) became a `--deep` → `--ink` gradient rather than a
flat navy slab. That is what the "hơi tối" comment was about, and a gradient keeps
white type at full contrast where a lighter flat fill would not.

**What did not change.** Every spot colour is still the Pantone value in
`palitra svef.pdf`: red, green, maroon, gold, cream, sky, steel. Body type stays on
`--ink` `#0E273D`. Setting body text in the Hanoi green or a warm grey on this
ground drops below WCAG AA at small sizes, so the ground got brighter and the type
did not move.

### `-ink` variants
`--red-ink #B31018` and `--gold-ink #754715` exist because the spot red and
spot gold do not reach WCAG AA against white at small text sizes. Use the spot
colour for fills, borders and large type; use the `-ink` variant wherever the
colour has to carry body-size text (chips, active nav, small labels).

## Typography

The brand display face is **TT Days Sans Black** (Typetype, commercial).

It is deliberately **not** shipped as a webfont. Two reasons:

1. **Licence.** The kit contains a desktop `.ttf` marked "all rights reserved"
   with no embedded licence grant. A desktop licence does not cover web
   embedding, and this repo is public, so a `woff2` in `assets/` would be
   redistribution. Buy the Typetype webfont licence before serving it.
2. **Language.** The face has 221 glyphs — basic Latin only, **zero Vietnamese
   diacritics**. The site swaps every heading to Vietnamese at runtime via
   `data-i18n`, so setting it on headings would break each accented character
   into a fallback glyph mid-word.

Instead, every brand string is delivered as **outlined SVG** (`assets/brand/*.svg`).
Those files contain paths, not font data: no licence exposure, no missing
glyphs, pixel-identical everywhere.

UI and content type stay on **Inter Tight** (full Vietnamese support) with
**IBM Plex Mono** for micro-labels, as before.

The `--brand` token is kept for developers who have the font installed locally.
Do not set it on any element that carries translated copy.

## Assets (`assets/brand/`)

| File | What it is | Where to use |
|---|---|---|
| `svef-wordmark.svg` | horizontal lockup, green "ECONOMIC FORUM" | light grounds (site header) |
| `svef-wordmark-dark.svg` | horizontal lockup, white "ECONOMIC FORUM" | dark grounds (footer, admin rail, hub) |
| `svef-lockup.svg` | stacked lockup, matches the 2025 key visual | light grounds (admin sign-in) |
| `svef-lockup-dark.svg` | stacked lockup, reversed | dark grounds (app sign-in) |
| `svef-sun.svg` | sun + mountains + arc mark, vector from `sun_viet.ai` | hero illustration |
| `svef-seal.svg` | circular "SWISS-VIET ECONOMIC FORUM / SVEF" seal, vector from `svef logo.ai` | formal/official contexts, print |
| `mountains.webp` | pale mountain range motif | hero background texture |
| `favicon.svg` | sun mark, cropped to read at 16 px | browser tab |

The wordmark and lockups were generated from `dayssansblack.ttf` with the text
converted to outlines, so they reproduce the guideline lockup exactly.

`mountains.webp` is derived from `66-transper.png`, cropped to content with its
alpha boosted ~2.6x: the original plate is a near-invisible slide watermark and
disappeared entirely at hero scale.

### Reproducing the generated assets
The lockups, favicon and mountain plate are generated, not hand-drawn. The
scripts that built them are not committed (they need the raw kit). To rebuild,
re-outline the lockup text from `dayssansblack.ttf` at cap-height 0.70 em with
0.02 em tracking, red block `#E42026` at 0.16/0.17 em padding.

## Rules of thumb

- Red is the accent, not the field. The key visual is near-white with a pale
  blue arc; the hero follows that, not a dark slab.
- The wordmark already reads "SWISS-VIET ECONOMIC FORUM" — do not set the name
  again as live text next to it.
- Do not use the sun mark below ~64 px; it turns to mush. Use `favicon.svg`
  (a tight crop) for small sizes, or the wordmark alone.
- Keep the mountain motif under ~50% opacity behind text.
