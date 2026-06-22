---
title: Dropdown problem
description: Single-answer select from a dropdown list.
sidebar:
  order: 2
---

:::note[Prefer coursekit for new content]
Native the Learning Hub problem editing is documented here for reference and for working with legacy items. **For new content, use [coursekit](../../content/authoring-with-coursekit/)** — added via *Add Component → Advanced → coursekit* in Studio.
:::

A dropdown problem shows a `<select>` element with one correct answer. Use it when the list of options is long enough that radio buttons would clutter the page, or when the options should be read sequentially.

## When to use vs single-select

| Use dropdown when... | Use [single-select](../single-select-problem/) when... |
|---|---|
| Options are >5 | Options are 2–5 |
| Options are short labels (e.g. ASA grade) | Options are clinically nuanced statements |
| Reading order matters | Visual scanning is fine |

## Markdown syntax

```
What is the ASA classification of a patient with mild systemic disease?
[[
ASA I
(ASA II)
ASA III
ASA IV
ASA V
]]
```

Parentheses mark the correct answer.

## Settings to set

- **Show answer** → *After last attempt* (recommended for CPD).
- **Maximum attempts** → blank (unlimited) for formative; `1`–`3` for graded summative.
- **Hints / explanation** → write a one-line rationale that displays after answer reveal. This is the single biggest formative-value lever.
