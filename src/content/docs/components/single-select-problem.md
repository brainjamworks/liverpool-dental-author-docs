---
title: Single-select problem
description: Classic radio-button multiple choice.
sidebar:
  order: 5
---

:::note[Prefer coursekit for new content]
Native the Learning Hub problem editing is documented here for reference and for working with legacy items. **For new content, use [coursekit](../../content/authoring-with-coursekit/)** — added via *Add Component → Advanced → coursekit* in Studio.
:::

The default question type — one prompt, several options, one correct answer. Most CPD MCQ items end up here.

## Markdown syntax

```
A 35-year-old patient presents with spontaneous pain that wakes them at night.
The most likely diagnosis is:

( ) Reversible pulpitis
(x) Irreversible pulpitis
( ) Periapical abscess
( ) Cracked tooth syndrome
```

`(x)` marks the correct answer.

## Writing strong distractors

- Plausible-but-wrong beats absurd.
- Distractors should reflect common misconceptions you've actually seen learners hold.
- Avoid "all of the above" / "none of the above" — they reward exam technique rather than knowledge.

## Per-option feedback

Add inline explanations after each option:

```
( ) Reversible pulpitis {{ Reversible pulpitis pain is typically stimulus-triggered, not spontaneous. }}
(x) Irreversible pulpitis {{ Spontaneous nocturnal pain is a classic indicator. }}
```

This is the highest-yield formative feature in the Learning Hub — use it on every MCQ if you have time.

## Settings

- *Show answer*: **After last attempt** for formative items; **Past due** for graded.
- *Randomize options*: useful to discourage answer-sharing.
