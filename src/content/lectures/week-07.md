---
title: Seventh lecture
description:
  What to do when two pieces of evidence contradict each other — and why
  that is a different problem from two hypotheses that both fit the same,
  trustworthy evidence.
week: 7
date: 2027-04-12
teachers:
  - marisol-quaye
related:
  - sessions/07-when-the-evidence-disagrees
  - assessments/broken-service-investigation
---

Last week, the evidence was reliable and the uncertainty lived entirely in
the hypothesis space: two explanations, one trustworthy set of facts, and a
test to tell them apart. This week the evidence itself disagrees with
itself. That is a different kind of problem, and reaching for last week's
technique — design a test that discriminates between explanations — does
not help, because there is nothing wrong with either explanation yet. There
is something to establish about the evidence first.

## A fact needs a source before it needs a verdict

```text
Log entry: payment accepted.
```

```text
Accepted by which component?
At what time?
For which request?
In which environment?
```

A single line of evidence looks like a fact until you ask where it came
from. "Payment accepted" is not one claim; it's a claim made by something,
about something, at some point in time, from somewhere. Two log lines that
look like they're describing the same event can turn out to be describing
two different ones — different requests, different environments, different
moments — once you ask those four questions instead of taking the line at
face value.

This is Week 1's observation-versus-explanation distinction, applied one
level up. Week 1 asked you to separate what you observed from what you
inferred about a single system's behaviour. Here, the thing you have to
stop yourself from silently inferring is that a log line's *content*
tells you its *scope* — that "accepted" and "this order, right now, in
production" go together just because they appear on the same line.

## What a contradiction can mean

When two sources disagree, there are at least three distinct explanations,
and choosing between them is itself an investigation:

* one source is stale — it describes a state that used to be true and no
  longer is;
* one source is scoped differently than it looks — a different request, a
  different environment, a different instance — and the two sources were
  never describing the same event in the first place;
* both sources are accurate, and the disagreement is real, because two
  separate faults are producing effects that look like one contradiction.

Guessing which of these applies is not good enough. Each one implies a
different next step, and only independent evidence — a fourth source,
checked deliberately — can tell you which explanation the contradiction
actually supports.

## Don't discard the inconvenient one

The natural move under a deadline is to trust whichever source agrees with
the diagnosis you already suspect, and quietly set the other one aside.
That is confirmation bias with better production values. An evidence source
that disagrees with your current best guess is not noise to be filtered
out; it's either telling you your guess is wrong, or telling you something
about the evidence itself that you haven't understood yet. Both are worth
knowing.

## Week 6 versus Week 7

Week 6's uncertainty lived in the hypothesis space — the facts were solid,
and you had to choose between explanations that both fit them. This week's
uncertainty lives in the evidence itself — before you can compare
explanations at all, you have to establish what the evidence is actually
telling you, and whether it's telling you anything reliable in the first
place. A discriminating test only means something once you trust what it
reports back.
