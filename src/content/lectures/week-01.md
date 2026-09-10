---
title: Opening lecture
description:
  What this course is, why it is shaped as an investigation rather than a
  syllabus, and what a student needs to have ready before Week 1's session.
week: 1
date: 2027-02-22
teachers:
  - marisol-quaye
slides: /decks/week-01/
related:
  - sessions/01-naming-what-you-see
---

The course's central claim: diagnosing a system you did not build is a
distinct, teachable discipline, not a byproduct of general programming
ability. This lecture sets out the fixed investigative cycle the semester is
built around, and draws the one distinction Week 1's session will hold you to:
the difference between what you observed and what you assumed.

## The system is someone else's

Every incident this semester belongs to a system you did not design and were
not present for. That is not a framing device — it changes what counts as a
reasonable first move. If you had written `order-total` yourself, you would
already have a theory about where it could be wrong, and you would reach for
it immediately. You didn't write it. Reaching for a theory anyway, before
looking at anything, is where most bad investigations start: not because the
theory is unreasonable, but because it was formed before there was any
evidence to form it from.

## Symptom is not cause

"The utility printed the wrong total" describes a symptom. It says nothing
about whether the fault is in the tax calculation, the discount arithmetic,
the rounding, or something upstream of all three. Treating a symptom
description as though it were a diagnosis is the single most common way an
investigation goes wrong early, because it feels like progress has been made
when none has.

## Observation versus explanation

An observation is a claim about what happened that someone else could check
by repeating what you did. An explanation is a claim about why it happened.
The two are easy to blend in speech and easy to separate on paper — the
discipline this week teaches is doing the separating before you've had time
to get attached to an explanation.

```text
Observation:
The request returned HTTP 500 at 14:03.

Not an observation:
The database connection failed.
```

The second line might turn out to be true. It is still not something you
observed at 14:03 — it is an inference from the observation, and inferences
need their own evidence before they get to be treated as facts.

## What a good observation looks like

A good observation names the exact input, the exact output, and the exact
conditions, in enough detail that another person could reproduce it without
asking you anything further.

```text
Good:
Running `order-total --order 4471` prints 84.70.
The printed receipt for order 4471 shows 85.00.
Running the same command on order 4460 (no discount code) matches its receipt.

Bad:
The discount logic seems to be off by a bit.
```

The bad version already contains a diagnosis ("the discount logic"), a
severity judgement ("a bit"), and no way for anyone else to check it. It
reads like progress. It isn't evidence yet.

## The cycle this session begins

**Observe → Hypothesise → Gather Evidence → Reduce Uncertainty → Intervene →
Verify.** This session works entirely inside the first stage. You are not
being asked to under-think the problem — you are being asked to do the first
stage completely before the later ones borrow from it. Every later week in
the semester assumes this habit is already in place; it is not revisited from
scratch, because it does not need to be taught twice.

## What to have ready

Nothing beyond a working environment. The system is small enough to read in
full inside the session — the discipline being taught does not depend on the
system being hard to read.
