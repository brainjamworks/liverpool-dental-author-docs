---
title: Designing your course for a mobile experience
description: Layout, media, and interaction patterns that work on phones.
sidebar:
  order: 2
---

A large minority of learners on the Liverpool Dental Learning Hub access courses on a tablet or phone — between cases, on the train, before bed. Designing for that explicitly costs little and avoids the most common usability complaints.

## What works on mobile

- Short text blocks (2–4 paragraphs) interspersed with media.
- Video over slide-decks.
- Single-select MCQs over multi-select grids.
- Native video players with built-in captions.

## What doesn't

- Large tables — they horizontal-scroll and learners give up.
- Hover-only interactions — there is no hover on touch.
- PDFs embedded inline — they're fiddly on small screens.
- Side-by-side layouts assuming a wide viewport.

## XBlocks and touch

Most of the [11 custom Liverpool Dental XBlocks](../../components/problem-component/) are touch-friendly:

- `image-hotspot-xblock` — works with taps.
- `drag-drop-matching-xblock` — works with touch-drag.
- `sort-into-bins-xblock` — works with touch-drag.

The XBlocks that benefit most from a larger screen: `image-annotation-xblock` (free-form drawing), `timeline-presentation-xblock` (wide aspect).

## A quick mobile-readiness check

- [ ] Open every unit on a phone before publishing.
- [ ] Pinch-zoom: does any text need it?
- [ ] Try every interactive component with thumbs only.
- [ ] Pause a video — do captions render?

---

*Adapted from [Open edX — Designing for a Mobile Experience](https://docs.openedx.org/en/latest/educators/concepts/accessibility/mobile_design.html).*
