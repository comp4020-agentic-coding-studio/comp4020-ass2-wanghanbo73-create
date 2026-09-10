---
title: Reading a System You Weren't Given a Map To
description:
  How do you build a working model of a system's intended behaviour when no
  one is going to explain it to you? Documentation stops being a reliable
  evidence source from this session onward.
week: 3
date: 2027-03-08
teachers:
  - marisol-quaye
spec:
  - a short written model of what the system is supposed to do
  - the model derived from structure, naming and control flow, not narrative docs
  - the fault located using that model, not by scanning at random
related:
  - sessions/02-a-hypothesis-that-could-be-wrong
---

## Before the session

The system is a mid-sized, multi-module codebase with no onboarding document.
It will not fit in one sitting the way Weeks 1–2's systems did.

## The incident

`fulfil`, Northfield Mercantile's order-fulfilment pipeline, has grown past
one file: separate modules handle intake, pricing, inventory allocation, and
handoff to the shipping queue, wired together in ways that aren't written
down anywhere. The person who built it no longer works there, and the
repository's README describes what the system was three restructurings ago.
The observed failure: a small fraction of orders are accepted and priced
successfully but never appear in the shipping queue — no error, no log entry
at the point of loss, nothing in any single module that looks obviously
wrong.

## Why no single file will answer this

The fraction of affected orders is known, and so is where they last appear
(priced) and where they never arrive (the shipping queue). Which module, or
which handoff between modules, drops them is not known — and it may not be a
single module's fault at all, but a property of how several interact.
Reading any one file in isolation cannot answer a question about behaviour
that spans files; only a model of the whole control-flow path can.

## In the session

You reconstruct, from code organisation, naming, and control flow alone, a
model of what `fulfil` is meant to do end to end — then use that model to
locate the fault, treating each unknown you can't yet resolve as something to
name explicitly rather than paper over. The model, not a lucky guess about
which module to open first, is what makes the search tractable.

## Afterwards

This week's structural model is the thing next week's runtime instrumentation
gets justified against — instrumenting without it is instrumenting blind. You
leave this session able to build a defensible account of what an undocumented
multi-module system is supposed to do, and to say precisely which parts of
that account remain unverified.
