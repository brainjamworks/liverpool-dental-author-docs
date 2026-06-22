---
title: Manage video transcripts
description: Upload, edit, and translate transcripts.
sidebar:
  order: 4
---

A transcript isn't optional — it's a WCAG requirement, and on the Liverpool Dental Learning Hub it's also a learner-experience baseline. Plan for transcript work in your production schedule, not as an afterthought.

## What format

The video component accepts:

- **`.srt`** (SubRip) — most common, what YouTube exports.
- **`.vtt`** (WebVTT) — preferred modern format.

Both render the same way in the LMS player.

## How to add a transcript

1. Open the Video component in Studio.
2. Scroll to the *Transcript* section.
3. Either:
   - **Upload** an `.srt` or `.vtt` file you've prepared (and reviewed).
   - **Generate** from the video (for YouTube videos with existing captions).
4. Save and publish.

## Getting good transcripts cheaply

- **YouTube auto-captions** — free but routinely mistakes clinical terms. Download, correct in any text editor, re-upload.
- **OpenAI Whisper (local)** — runs locally, much better accuracy than YouTube on technical vocabulary. Free.
- **Paid services** (Rev, 3PlayMedia) — fast, accurate, ~£1/min. Worth it for cornerstone content.

## Reviewing — the minimum-viable pass

For every transcript, verify:

- Every clinical term is spelled correctly.
- Every speaker change is marked.
- The transcript ends at the same time as the video.

## Translations

Multiple language transcripts can attach to a single video. Set the language code in the Studio upload form. The LMS player shows a language picker if more than one is loaded.
