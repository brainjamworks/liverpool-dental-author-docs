---
title: Bulk emails
description: Send announcements to all enrolled learners.
sidebar:
  order: 2
---

When you need to tell every enrolled learner something — new content added, a clinical-guidelines update, an upcoming live Q&A — the **Bulk Email** tool is the right channel. Don't use it for routine course content; that's what [course updates](../course-updates/) are for.

:::caution[Off by default]
Bulk email isn't visible on the Instructor dashboard until you enable it in Studio: *Settings → Advanced Settings → Email* (set `enable_email` to `True`). Once enabled, an **Email** tab appears in the Instructor dashboard.
:::

## When to use bulk email

- Course launch announcements.
- Material changes to course content (e.g. errata, updated guidance).
- Reminders for graded deadlines (rare in self-paced CPD).
- Notifying learners of scheduled downtime.

## When *not* to use it

- Marketing — the Learning Hub bulk email is transactional, not a marketing tool.
- Routine module-by-module updates — use the in-course updates panel.
- Anything personal — it goes to everyone.

## Sending an email

1. Open the course in the LMS as an instructor.
2. *Instructor → Email*.
3. Pick a recipient set:
   - **Myself** — test send.
   - **Staff and instructors** — internal heads-up.
   - **All learners** — the real thing.
4. Write subject + body. Plain text is safest; HTML is supported but render-checks vary by client.
5. Click **Send Email**.

## Audit trail

Every bulk email is logged under *Instructor → Email → Sent Email History*. Keep this in mind for clinical-content corrections — there is a record.

## Limits

the Learning Hub queues bulk emails through Celery; large courses can take several minutes to dispatch. There's no per-day cap, but treat it as a once-a-week-max channel — over-emailing learners is the fastest way to train them to ignore you.
