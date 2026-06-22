---
title: Multi-select problem
description: Multiple correct answers with checkboxes.
sidebar:
  order: 3
---

:::note[Prefer coursekit for new content]
Native Open edX problem editing is documented here for reference and for working with legacy items. **For new content, use [coursekit](../../content/authoring-with-coursekit/)** — added via *Add Component → Advanced → coursekit* in Studio.
:::

Multi-select shows checkboxes — learners pick *all that apply*. By default learners must select every correct answer (and no incorrect ones) to score.

## When to use

- "Which of the following are indications for endodontic retreatment?" — three of six options correct.
- Clinical decision-making where partial knowledge should still get partial credit (see *Partial credit*, below).

## Markdown syntax

```
Which of the following are indications for non-surgical endodontic retreatment? (Select all that apply.)
[
(x) Persistent apical periodontitis
(x) Inadequate previous root filling
( ) Vertical root fracture
(x) Coronal leakage
( ) Tooth loss adjacent to the root-treated tooth
]
```

`(x)` marks correct answers; `( )` marks distractors.

## Partial credit

By default scoring is all-or-nothing. To allow partial credit, edit the problem in XML view and add `partial_credit="ec"` (every correct earns credit) or `partial_credit="halves"` (penalty for incorrect picks).

Partial credit is the right default for clinical reasoning items — perfect-or-zero pressures learners into guessing rather than expressing partial knowledge.

## Settings

Same defaults as the [base problem](../problem-component/). For graded multi-select, consider `Show answer = Past due` so the answer can't be passed between learners while the assessment window is open.

---

*Adapted from [Open edX — Multi-Select Problem](https://docs.openedx.org/en/latest/educators/concepts/exercise_tools/multi_select_problem.html).*
