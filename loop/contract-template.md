# Loop Contract

This document serves as the immutable agreement between the user and the autonomous agent for a specific execution loop. It tracks the Definition of Done (DoD), the history of iterations, and the remaining backlog.

## 🎯 Objective
**Goal:** [High-level description of what needs to be achieved]

## ✅ Definition of Done (DoD)
*The strict, verifiable criteria that must be met before the task is considered complete.*
- [ ] Criterion 1 (e.g., "All Jest tests pass")
- [ ] Criterion 2 (e.g., "UI renders without console errors")
- [ ] Criterion 3 (e.g., "Edge case X is handled gracefully")

## 📝 Backlog & Execution Plan
*Breaking down the objective into actionable steps.*
1. [ ] Step 1
2. [ ] Step 2
3. [ ] Step 3

## 🔄 Iteration History (Traces)
*The verifier (`/verify`) and the executor use this section to log attempts, failures, and evolution events.*

### Iteration 1
- **Action Taken:** [What was done]
- **Verification Result:** `[VERIFY: FAIL]` or `[VERIFY: PASS]`
- **Blockers/Bugs Found:** [Description of why it failed]
- **Evolution Hook Triggered:** [Yes/No] (If Yes, what skill was mutated?)

---

> **Note to Agents:** Do not mark a DoD criterion as checked `[x]` unless the `/verify` Gatekeeper has explicitly output `[VERIFY: PASS]` for that specific criterion.
