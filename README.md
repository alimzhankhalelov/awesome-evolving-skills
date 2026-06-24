# /loop: The Self-Improving Meta-Skill for AI Agents

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/alimzhankhalelov/awesome-evolving-skills/releases)
[![Standard](https://img.shields.io/badge/standard-SKILL.md-green.svg)](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)
[![Marketplace](https://img.shields.io/badge/Marketplace-LoopOps-orange.svg)](https://github.com/alimzhankhalelov/awesome-evolving-skills)
> **Stop rewriting prompts. Let your agent rewrite them for you.**

`/loop` is a lightweight, zero-framework meta-skill for AI agents in modern IDEs (Cursor, Cline, Roo Code, Antigravity). It transforms your static prompts into **self-improving, autonomous workflows** using just Markdown. 

No Python scripts. No heavy frameworks. Just a single `.md` file that teaches your agent how to learn from its own mistakes.

---

## The Problem

In 2026, AI agents are smart, but they have amnesia:
- **Babysitting Fatigue:** You fix an agent's hallucination today, and it repeats it tomorrow.
- **Prompt Degradation:** You write a perfect `SKILL.md`, but as projects evolve or models update, it breaks.
- **Infinite Loops:** Agents burn through your token budget because they lack a strict "Definition of Done".

## The Solution

`/loop` acts as an orchestrator for your local agent. When you run `/loop [task]`, it doesn't just execute code. It runs a full **Reason -> Act -> Verify** cycle. If it fails, it analyzes the logs and **permanently rewrites** your local skill files so it never makes that mistake again.

### Core Magic (How it works)

1. **Implicit Grilling:** `/loop` refuses to write code until it extracts a testable **Definition of Done (DoD)** from you.
2. **Benevolent Injection:** It scans your other local skills (e.g., `react_skill.md`) and silently injects an "Evolution Hook" into them. Your entire prompt library becomes self-aware.
3. **Iterative Execution:** It tries to meet the DoD. If tests fail, it loops back and tries again (up to a hard cap, saving your tokens).
4. **Micro-Kaizen (Self-Mutation):** Upon completion, it analyzes the session traces. If it found a new edge case, it edits its own `.md` files to update the instructions. 

---

## Quick Start

### Installation

Drop the `/loop` skill into your local agent's directory:

```bash
mkdir -p .agents/skills/loop
curl -o .agents/skills/loop/SKILL.md https://raw.githubusercontent.com/alimzhankhalelov/awesome-evolving-skills/main/loop/SKILL.md
```

> [!NOTE]
> This works natively with any IDE supporting the `.agents/skills/` standard.

### Usage

Open your IDE's agent chat and type:

```text
/loop Build a Postgres migration for a user table
```

Watch the magic happen:

1. **Agent:** "To set a strict DoD: should I run the migration to verify it, or just generate the SQL?"
2. **You:** "Run it on the local dev DB."
3. **Agent:** *(Injects Evolution Hook into your db_migration skill)*.
4. **Agent:** *(Tries to run. Fails due to missing env variables. Retries and succeeds)*.
5. **Agent:** "Task complete. I have silently updated your `db_migration` skill to always check for `.env.local` before running migrations."

## Architecture (No-Code State Machine)

`/loop` utilizes Lean and TOC (Theory of Constraints) principles without requiring a backend. It uses your file system as memory:

- `traces/current_session.md` — Temporary scratchpad for the current loop.
- `SKILL.md` — The execution contract.
- **The Evolution Hook** — A tiny prompt injected into your files that triggers the post-mortem analysis.

### System Flow
```mermaid
graph TD
    User(["👤 User types: /loop [task]"]) --> P0
    
    subgraph Engine [The /loop Meta-Skill Engine]
        P0["🔄 Phase 0: Auto-Update"] -- "Fetches latest from GitHub" --> P1
        P1["🕵️ Phase 1: Implicit Grilling"] -- "Interviews user to extract" --> DoD{"🎯 Definition of Done (DoD)"}
        DoD --> P2["💉 Phase 2: Benevolent Injection"]
        P2 -- "Injects Evolution Hook into" --> Skills[("📂 Local Skills")]
        P2 --> P3["🔁 Phase 3: Iteration Loop"]
        
        subgraph ExecLoop [Action & Verification]
            P3 --> Act["⚙️ Act: Write Code / Use Tools"]
            Act --> Gatekeeper{"🛡️ Internal Gatekeeper"}
            Gatekeeper -- "❌ [VERIFY: FAIL]" --> Trace["📝 Log errors to traces.md"]
            Trace --> P3
        end
        
        Gatekeeper -- "✅ [VERIFY: PASS]" --> P4["🧠 Phase 4: Kaizen (Micro-Improvement)"]
        P4 -- "Rewrites local rules to avoid future bugs" --> Skills
    end
    
    P4 --> Done(["🎉 Task Completed"])
    
    %% Styling (Dark Mode / Hacker aesthetic)
    classDef primary fill:#2d3436,stroke:#0984e3,stroke-width:2px,color:#dfe6e9;
    classDef gate fill:#d63031,stroke:#ff7675,stroke-width:2px,color:#fff;
    classDef pass fill:#00b894,stroke:#55efc4,stroke-width:2px,color:#fff;
    classDef db fill:#636e72,stroke:#b2bec3,stroke-width:2px,color:#fff;
    
    class P0,P1,P2,P3,P4,Act,Trace primary;
    class Gatekeeper gate;
    class Done,DoD pass;
    class Skills db;
```

> [!IMPORTANT]
> The `/loop` skill requires permission to overwrite files in your workspace. Ensure your agent operates in a safe or sandboxed environment when allowing self-modifying behavior.

## Available Skills

- [`loop/`](./loop) - The Self-Improving Orchestrator. Iteratively executes tasks, extracts DoD, and updates local skills based on trace analysis. Includes `contract-template.md` for Contract-Driven Development tracking.


## The LoopOps Marketplace (SaaS Vision)

Why train your agent from scratch when you can download 10,000 hours of AI experience?

When a skill mutates and improves on your machine, it's valuable IP. We built the LoopOps Registry to let you share, subscribe, and monetize self-improving skills.

- **Try before you buy:** Test enterprise-grade skills in our secure browser sandbox. The prompt is protected (blackboxed) to prevent IP theft.
- **Continuous Updates:** Subscribe to `@johndoe/senior-react-skill`. As John's local agent encounters new bugs and mutates its `SKILL.md`, your local IDE gets the updates pushed automatically.
- **Verified Evals:** Every skill on the marketplace goes through our CI/CD Gate to prove it hits >95% success rates on standard benchmarks.
