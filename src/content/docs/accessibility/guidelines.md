---
title: the Learning Hub accessibility guidelines
description: What WCAG 2.1 AA looks like in practice on this platform.
sidebar:
  order: 1
---

the Learning Hub is built to a WCAG 2.1 AA target. As an author, the platform handles most of the heavy lifting (focus management, ARIA roles, keyboard nav) — but the content you put in is your responsibility.

## The five things you must get right

1. **Alt text on every image.** Decorative? Use `alt=""`. Meaningful? Describe what the image is communicating, not what's literally pictured.
2. **Real headings.** Use H2–H4 in the rich-text editor, not bold-as-heading.
3. **Transcripts on every video.** Auto-captioned is a starting point, not a finishing point — review them.
4. **Sufficient colour contrast.** The Liverpool theme meets contrast targets out of the box — don't override colours inline.
5. **Descriptive link text.** "Endodontic guidelines (BES, 2024)", not "click here".

## Things to avoid

- Embedded PDFs with no accessible HTML alternative.
- Video-only explanations of a complex diagram (provide a text equivalent).
- Tables for layout (use them only for tabular data).
- Time limits without an extension option.

## Tools

- Built-in accessibility checker in TinyMCE (rich-text editor).
- WAVE browser extension for a quick page-level audit.
- Keyboard-only navigation test — tab through your unit; can you get everywhere?

## Why this matters beyond compliance

A meaningful share of dental professionals have correctable visual impairments. Accessibility isn't just a regulatory checkbox — it directly affects whether your CPD content is usable.
