# noKasteyev — Design System

**noKasteyev** is a digital gallery of Kazakh painters: a single-page archive where the visitor moves through *years*, not pages. Each year is a cultural era with its own atmosphere — the streets, architecture and textures of Almaty in that decade. Era backgrounds are always **black and white** (archival photography); the **paintings are always full colour**. That one rule is the brand.

The experience is meant to read as an interactive historical archive rather than a website: slow, cinematic, typographic, museum-quiet.

## Sources given

- Six reference screenshots supplied by the user (`uploads/`):
  - Kunsthistorisches Museum Wien — *Once in a Lifetime / Bruegel* (centred wordmark, didone display, warm paper ground, full-bleed painting).
  - "Country Books" author-page concept (portrait + biography + works grid layout).
  - "Kombu" gallery site (horizontal painting rail, year range set in didone, `SCROLL TO EXPLORE`).
  - "Dieu Neo — Fairs" (didone hero, staggered plate rail, italic date captions).
  - Archival photograph of Abylkhan Kasteyev at the easel → `assets/archive/kasteyev-at-easel.png`.
  - Colour postcard of a 1960s–80s Almaty prospekt → `assets/archive/almaty-prospekt-1960s.png` (rendered grayscale in product).
- No codebase, Figma file, font binaries, logo, or painting reproductions were supplied.

**Nothing in this system is copied from those reference sites.** They were read as a mood board for the archive genre; the type, colour, spacing and component decisions here are original to noKasteyev.

## Index

| File / folder | What it is |
|---|---|
| `styles.css` | Global entry — `@import`s every token file. Consumers link only this. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `surfaces.css`, `grain.css`, `base.css` |
| `components/core/` | `Button`, `IconButton`, `Icon`, `Tag`, `Wordmark` |
| `components/navigation/` | `SiteHeader`, `IndexOverlay`, `TimelineScrubber` |
| `components/gallery/` | `EraBackdrop`, `ArtworkPlate`, `ArtworkCard`, `ArtistCard`, `Lightbox` |
| `components/content/` | `SectionHeading`, `Prose`, `PullQuote`, `FactList`, `LifeTimeline` |
| `ui_kits/gallery/` | Full click-through archive site — Home, Era, Artist, Gallery + index overlay and lightbox |
| `guidelines/` | 19 foundation specimen cards (colour, type, spacing, brand) |
| `assets/archive/` | The two supplied archival photographs |
| `assets/placeholder/` | Flat pigment fields standing in for paintings and portraits |
| `SKILL.md` | Agent-skill wrapper for use outside this project |

**Intentional additions:** `Icon` (a wrapper over the substituted Lucide set — no glyphs were supplied) and `Wordmark` (no logo file was supplied, so the mark had to be defined in type).

## Content fundamentals

The archive speaks like a **wall label written by a curator who likes the work**, not like a product.

- **Voice:** third person about the art, plain first person only in quotations from artists. Never "we", never "our platform". The site never refers to itself.
- **Address:** the visitor is not addressed as "you" except in the two navigational imperatives — `SCROLL TO EXPLORE`, `ENTER 1962`.
- **Casing:** sentence case in prose and titles ("The Thaw in Almaty"). UPPERCASE only for metadata, eyebrows, buttons and nav — with wide tracking. Never title-case marketing headlines.
- **Length:** an era blurb is 1–2 sentences. A lead paragraph is one sentence. A biography is 3–5 sentences. Nothing scrolls without a reason.
- **Numbers:** years are bare and prominent (`1962`, `1962 — 1971`). Dimensions in cm, medium before size: `Oil on canvas, 96 × 140 cm`.
- **Catalogue line:** *Title*, year — Artist · Medium. Titles of works are always italic; the comma and year are not.
- **Emoji:** never. Exclamation marks: never. Em-dashes and commas carry the rhythm.
- **Facts we don't have** are stated as absent ("Attributed", "Undated", "Photograph not in the archive") rather than invented or hidden.
- **Examples:**
  - *"Almaty in 1962 was a city of poplars, wet asphalt and new concrete. Painters walked it every morning and brought the light of it back to the easel."*
  - *"I painted the mountain the way it looked from the tram." — Sabyr Mambeyev, studio notes, 1968*
  - `1,000+ WORKS · 4 ARTISTS`

> Copy currently in `ui_kits/gallery/data.js` is indicative placeholder prose written in this voice. It is **not** verified art history and must be replaced with sourced text.

## Visual foundations

**Ground.** Warm archival paper (`--paper-1` #F3EFE7) everywhere; a near-black silver (`--silver-0` #1A1A1A) only behind era photography and the lightbox. Maximum two background colours per view.

**Colour.** Ink is never pure black (#14120F). Pigment accents — ochre, terracotta, steppe, indigo, madder — come from mid-century Kazakh painting and appear only as a hairline, a timeline dot, a link hover or a selection colour. They are never used as fills for UI surfaces, and never as gradients.

**Type.** Three families:
- **Bodoni Moda** (didone) — display, years, artist names, index entries. Leading 0.92, tracking −0.02em. Huge or not at all.
- **EB Garamond italic** — titles of works, pull quotes, captions. This is the archive's "handwriting".
- **Archivo** — body copy, metadata, controls. Uppercase + 0.16–0.22em tracking for all labels.

**Imagery.** Era photography: grayscale, contrast 1.06, brightness 0.86, plus a fixed noise grain (`--filter-archive`, `.nk-grain`). Paintings: untouched, full colour, on a paper mount with 12px of margin — never cropped to a circle, never rounded, never filtered. Portraits: grayscale, lightening slightly on hover.

**Layout.** Full-bleed photography breaks past the gutter; text never does. Gutter `clamp(20px, 4vw, 64px)`; prose capped at 64ch, quotes and captions at 44ch. Header is a fixed three-column rail (nav / centred wordmark / utilities), 64px tall, separated by a hairline. Plate rails stagger vertically (0 / 16 / 48 / 72px offsets) so the row never reads as a grid.

**Corners & borders.** Radius is effectively zero — the archive is square. `--radius-control: 2px` exists for buttons only; images and cards get none. Borders are single hairlines at 14% ink, 34% for emphasis; on photography, 22% paper.

**Shadow.** One system: a painting sits on paper, so shadows are warm, low and doubled (`0 1px 2px` + `0 12px 32px`). On hover the plate lifts 6px and the shadow deepens to `0 24px 56px`. No shadows on text, chrome or buttons ever.

**Transparency & blur.** No frosted glass anywhere. Legibility over photography comes from *protection gradients* (`--scrim-bottom`, `--scrim-full`), not capsules or blur.

**Motion.** Museum pace, `cubic-bezier(.22,.61,.36,1)`: 180ms for control feedback, 420ms for element transitions, 900ms for image reveals, 1400ms for an era change (backdrop cross-fades while the year re-sizes). Fades and slow drifts only — no bounce, no spring, no parallax gimmicks, and everything respects `prefers-reduced-motion` in production.

**States.** Hover = opacity to 100% (nav rests at 52%) and, on index entries, a switch to *italic* — the system's signature hover. Press = 60% opacity, no scale. Focus = 1px ochre outline at 3px offset. Disabled = 38% opacity, no colour change.

## Iconography

No icon assets were supplied. The system standardises on **Lucide** (line, 1.5px stroke, square-cut), loaded per-glyph from `unpkg.com/lucide-static` through the `Icon` component. **This is a substitution — flag it to the client and replace with a supplied set if one exists.**

- Icons are used only in chrome: `menu`, `x`, `arrow-left`, `arrow-right`, `volume-2`, `search`, `play`.
- Icons are ink or paper — never a pigment colour, never filled, never boxed in a circle.
- Never larger than 20px; 14px inside captions and small buttons.
- No emoji, ever. No unicode characters used as icons; the only decorative glyph is the em-dash between years.
- There is **no logo file**. The mark is the wordmark set in Bodoni Moda — italic dimmed "no" + roman "Kasteyev" (`Wordmark` component). It must never be redrawn, coloured, or reconstructed as artwork.

## Placeholder imagery

`assets/placeholder/plate-*.png` and `portrait-*.png` are flat pigment/grey fields marked "AWAITING PLATE / PORTRAIT". They exist so layouts read correctly and **must** be replaced with licensed reproductions before publication.
