---
title: No One Left to Ask
description:
  How do you investigate a system when the people who built it, and much of
  its context, are simply gone? Scaffolding drops substantially from this
  session onward.
week: 10
date: 2027-05-03
teachers:
  - idris-fenn
spec:
  - a working model of the relevant subsystem
  - an evidence-backed diagnosis
  - an explicit list of what remains unverified given the available operational artefacts
related:
  - sessions/09-verifying-you-didnt-just-move-the-problem
---

## Before the session

The system this session is large, loosely documented, and assembled from
multiple components. What you receive is operational only — partial
runbooks, incident tickets, stale comments — with no author to ask.

## The incident

Northfield's storefront platform now spans a catalog service, a cart
service, and the checkout flow that hands off to `fulfil`, each maintained
at different times by different, now-departed people. Customers
occasionally report that items they added to their cart are simply gone by
the time they reach checkout — never all of them, never predictably, and
only reported during high-traffic periods. Nothing in any single component's
partial runbook mentions this. No ticket in the incident history names a
subsystem as responsible. You are not told whether the fault sits in the
cart service, in how checkout reads from it, in something shared between
them, or somewhere else.

## Choosing where to start

There is no assigned first file, first log, or first component this week.
The instinct to open the largest or most obviously broken-looking service
first is not automatically the productive one — a system this size makes
"start reading" an expensive, low-yield move unless it's aimed at something.
The more useful question is which single observation, gathered first, would
most reduce your uncertainty about *where* the failure actually crosses a
boundary — cart to checkout, checkout to `fulfil`, or somewhere inside one
service alone — before you commit to reading any of them closely.

## In the session

No single evidence class is curated to be sufficient on its own, and the
system is larger than one person can fully read. You choose which evidence
classes to reach for yourself, and produce a model, a diagnosis, and an
explicit account of what remains unknown given what was actually available.

## Afterwards

Nothing here is a new investigative skill — it's Weeks 3–9's evidence
toolkit, used without being told which piece to reach for.
