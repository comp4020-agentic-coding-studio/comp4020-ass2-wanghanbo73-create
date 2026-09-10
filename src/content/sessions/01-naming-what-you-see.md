---
title: Naming What You See
description:
  What is the difference between an observation and an assumption? The
  semester's first session works on a system small enough to read in one
  sitting, so the discipline — not the difficulty — is the point.
week: 1
date: 2027-02-22
teachers:
  - marisol-quaye
spec:
  - a numbered observation log, facts only, no diagnosis
  - each observation stated precisely enough that someone else could check it
  - no proposed cause appears before the log is complete
---

## Before the session

Nothing to prepare beyond a working environment. The system used in this
session is small enough to read in full during the session itself.

## The incident

You have been handed `order-total`, a single-file command-line utility, under
150 lines, that Northfield Mercantile's back office uses to print the final
amount due on an order from its line items, tax rate, and an optional
discount code. It ships with a short README that accurately describes its
inputs and output format. For one saved order — a discount-code order, not a
tax-only one — the utility prints a total that does not match the figure on
the order's own printed receipt. The discrepancy is small: a matter of cents,
not dollars. Nothing else about the order looks unusual.

## What is known and what isn't

Known: the mismatch is reproducible on this one order, and does not appear
when the same utility is run on tax-only orders. Unknown: everything about
why. Several explanations are already imaginable — a rounding step in the
wrong place, tax computed before or after the discount, a stale exchange
rate, a copy-paste error in the discount arithmetic — and that range is the
point. Guessing among them before recording what is actually in front of you
is exactly the failure mode this session exists to prevent.

## In the session

Before you are permitted to open `order-total`'s source or propose a cause,
you write a numbered log of what you can observe directly: the exact command
run, the exact output, the figure on the receipt, and anything else checkable
without inference. "The total is wrong" is not an entry; "the utility printed
84.70; the receipt shows 85.00" is.

The exercise is deliberately strict about ordering. An observation written
after a cause has already been guessed at tends to smuggle the guess back in
as fact — the session is designed to make that failure mode visible when it
happens.

## Afterwards

The observation log from this session is the direct input to next week's
hypothesis work — bring it, don't rewrite it from memory. You leave this
session able to state what is observed to be true about a small, fully
readable system, separably from what you suspect is happening.
