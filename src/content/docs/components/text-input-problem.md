---
title: Text input problem
description: Short free-text answers matched against accepted values.
sidebar:
  order: 6
---

:::note[Prefer coursekit for new content]
Native the Learning Hub problem editing is documented here for reference and for working with legacy items. **For new content, use [coursekit](../../content/authoring-with-coursekit/)** — added via *Add Component → Advanced → coursekit* in Studio.
:::

Text input asks for a short typed answer (a word, a number, a clinical term) and matches it against a list of accepted answers. Useful when you want recall without giving away the answer in a list of distractors.

## When to use

- Terminology recall ("Name the most common cause of post-treatment apical periodontitis.").
- Numerical answers where unit matters ("State the maximum recommended dose of articaine for a 70 kg adult in mg.").
- One-word clinical classifications.

## Markdown syntax

```
What is the most common bacterial species cultured from infected root canals?

= Enterococcus faecalis
or= E. faecalis
or= E faecalis
```

Each `or=` adds an alternate accepted answer. Spelling tolerance is up to you — list common variants.

## Case sensitivity and partial match

By default matching is case-insensitive. For stricter matching, use the XML view to set `<stringresponse type="cs"`.

There's no partial-credit fuzzy matching — close-but-wrong answers score zero. If learners regularly miss for spelling, switch to a [dropdown](../dropdown-problem/) or [single-select](../single-select-problem/) instead.

## Hints

Add a hint that gives the format rather than the answer — e.g. *"Two-word Latin binomial."*
