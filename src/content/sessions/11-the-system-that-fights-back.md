---
title: The System That Fights Back
description:
  How do you keep the investigation disciplined when the system itself
  resists being understood — through unreliable documentation, inconsistent
  reproduction, or an environment where a careless intervention makes things
  worse?
week: 11
date: 2027-05-10
teachers:
  - marisol-quaye
spec:
  - the unreliable documentation or evidence source identified, with independent evidence supporting that judgement
  - diagnosis and intervention completed without relying on the unreliable source
related:
  - sessions/10-no-one-left-to-ask
---

## Before the session

Similar in scale to last week's system, with one addition: at least one
element you're given — a runbook, a comment, a report of reproducibility —
is actively misleading rather than merely absent.

## The incident

You return to the storefront platform from Week 10 with two more artefacts
in hand. The operations dashboard shows the cart service as continuously
healthy throughout the incident window — green, no alerts. A runbook,
last edited over a year ago, states that cart contents are synced to the
session store "within 200ms" of any change. Neither claim is presented as
false. Both are presented the way any dashboard or runbook is: as if they
simply describe the system.

## What the system is telling you, and what to check before believing it

A health check that pings a lightweight endpoint is not the same
observation as "the cart service handled real requests correctly during
this window" — it tells you the process was alive, not what it did. A
runbook's timing claim was accurate when someone wrote it down, and nothing
about a document guarantees it stayed accurate through every change made
since. Neither artefact is being presented here as a lie to catch; both are
ordinary evidence with a scope, an age, and a sampling method that has to be
established before you decide how much weight either one deserves.

## In the session

You treat any documentation you're handed as a hypothesis to verify, not a
fact to trust. You identify which source is unreliable, justify that
conclusion independently, and complete your diagnosis and intervention
without depending on it — in an environment where an ill-considered
intervention carries real risk.

## Afterwards

This is the last primarily investigative session before Week 12's synthesis
and defence. Nothing new is introduced there either — it draws on everything
from here back to Week 1.
