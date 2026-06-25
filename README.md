# /loop: The Self-Improving Meta-Skill for AI Agents

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/alimzhankhalelov/awesome-evolving-skills/releases)
[![Standard](https://img.shields.io/badge/standard-SKILL.md-green.svg)](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)
[![Marketplace](https://img.shields.io/badge/Marketplace-LoopOps-orange.svg)](https://github.com/alimzhankhalelov/awesome-evolving-skills)

> **Stop rewriting prompts. Let your agent rewrite them for you.**

`/loop` is a lightweight, zero-framework meta-skill for AI agents in modern IDEs. It transforms your static prompts into self-improving, autonomous workflows using just Markdown. No Python scripts, no heavy frameworks—just a single `.md` file that teaches your agent how to learn from its own mistakes.

---

## Quick Start

### Installation

The `/loop` skill is a pure markdown file, making it universally adaptable.

<details>
<summary><strong>1. Hermes Agent</strong></summary>

```bash
mkdir -p ~/.hermes/skills
curl -o ~/.hermes/skills/loop.md https://raw.githubusercontent.com/alimzhankhalelov/awesome-evolving-skills/master/loop/SKILL.md
```
</details>

<details>
<summary><strong>2. Cursor & Kilo Code</strong></summary>

```bash
mkdir -p .cursor/rules
curl -o .cursor/rules/loop.mdc https://raw.githubusercontent.com/alimzhankhalelov/awesome-evolving-skills/master/loop/SKILL.md
# For Kilo Code:
# mkdir -p .kilo/rules && curl -o .kilo/rules/loop.md ...
```
</details>

<details>
<summary><strong>3. Cline & Roo Code</strong></summary>

```bash
mkdir -p .cline
curl -o .cline/loop_skill.md https://raw.githubusercontent.com/alimzhankhalelov/awesome-evolving-skills/master/loop/SKILL.md
```
</details>

<details>
<summary><strong>4. Claude Code (CLI Agent)</strong></summary>

> [!WARNING]
> Claude Code has a built-in `/loop` command. To avoid conflicts, install as **`/aloop`**.

```bash
mkdir -p .claude/prompts
curl -o .claude/prompts/aloop.md https://raw.githubusercontent.com/alimzhankhalelov/awesome-evolving-skills/master/loop/SKILL.md
```
*Usage:* Instead of `/loop`, instruct the CLI: *"Use the aloop skill to execute my task..."*
</details>

<details>
<summary><strong>5. pi & Oh-My-Pi (CLI Agents)</strong></summary>

```bash
mkdir -p .pi/prompts
curl -o .pi/prompts/aloop.md https://raw.githubusercontent.com/alimzhankhalelov/awesome-evolving-skills/master/loop/SKILL.md
```
</details>

<details>
<summary><strong>6. Antigravity IDE & Codex</strong></summary>

```bash
mkdir -p .agents/skills/loop
curl -o .agents/skills/loop/SKILL.md https://raw.githubusercontent.com/alimzhankhalelov/awesome-evolving-skills/master/loop/SKILL.md
```
</details>

### Usage

Open your IDE's agent chat and type:

```text
/loop Build a Postgres migration for a user table
```

---

## How It Works

`/loop` acts as a Sovereign Executor for your local agent, running a full **Reason -> Act -> Verify** cycle. If it fails, it analyzes the logs and rewrites your local skill files based on empirical evidence.

1. **Phase 0: Memory Sync & Drift Control:** Uses `agents.md` to track architectural decisions, maintaining persistent context and preventing context drift. Auto-updates are strictly opt-in to prevent supply-chain attacks.
2. **Phase 1: Spec & Plan:** Establishes a "Definition of Done" (DoD) authoritatively without asking unnecessary questions, breaks tasks into vertical slices, and explicitly maps **which skills** will be used.
3. **Phase 1.5: Spec UAT:** Pauses for upfront plan validation to prevent costly rework. Once approved, the executor does not stop until DoD is met.
4. **Phase 2: Design Enforcement:** Creates/maintains a strict `DESIGN.md` based on premium references before UI coding begins.
5. **Phase 3: TDD / Build Loop:** Executes iterative loops of Test-First -> Build -> Verify for each slice. Uses an isolated **Fresh-Context Gatekeeper** to prevent confirmation bias.
6. **Phase 4: Human Retrospective (UAT):** Pauses to generate a Markdown UAT checklist for the user to verify (UX/UI, scenarios, DoD). Loops back to Phase 3 if rejected.
7. **Phase 5: Skill Telemetry Contract:** Abandons malware-like "infection" patterns in favor of a clean **Pull Model**. Logs standardized failure metrics that specialized skills can opt-in to parse.
8. **Phase 6: Kaizen (Micro-Improvement):** Employs a strict **Promotion Gate (≥3 Failures)** to avoid cargo-cult rule accumulation. Appends new rules to `<lessons_learned>` XML blocks safely.

### System Flow
```mermaid
graph TD
    User(["👤 User types: /loop [task]"]) --> P0
    
    subgraph Engine [The /loop Sovereign Executor]
        P0["🧠 Phase 0: Memory Sync (agents.md)"] --> P1
        P1["🕵️ Phase 1: Spec, Plan & Skill Map"] --> P1_5
        P1_5{"⚖️ Phase 1.5: Spec UAT"}
        P1_5 -- "❌ Reject" --> P1
        P1_5 -- "✅ Accept" --> P2
        
        P2["🎨 Phase 2: Design Sync (DESIGN.md)"] --> P3["🔁 Phase 3: TDD & Build Loop"]
        
        subgraph ExecLoop [Action & Verification]
            P3 --> Act["⚙️ Code & Test (@[/build], @[/test])"]
            Act --> Gatekeeper{"🛡️ Fresh-Context Gatekeeper"}
            Gatekeeper -- "❌ [VERIFY: FAIL]" --> Trace["📝 Trace & Fix"]
            Trace --> P3
        end
        
        Gatekeeper -- "✅ [VERIFY: PASS]" --> P4["🧑‍💻 Phase 4: Human Retrospective (UAT)"]
        P4 -- "❌ Reject" --> Trace
        P4 -- "✅ Accept" --> P5["📡 Phase 5: Telemetry Contract (Pull)"]
        P5 --> P6["🧬 Phase 6: Kaizen & Promotion Gate"]
        P6 -- "≥3 Failures: Mutates" --> Skills[("📂 Local Skills")]
        P6 -. "Promotes evolved skills" .-> Global[("🌐 Global Registry")]
    end
    
    P6 --> Done(["🎉 Task Completed"])
```

> [!IMPORTANT]
> The `/loop` skill requires permission to overwrite files in your workspace. Ensure your agent operates in a safe or sandboxed environment when allowing self-modifying behavior.

---

## Architecture Highlights

- **Sovereign Execution:** Makes executive architectural decisions to maximize long-term ROI. Relentless execution post-spec.
- **End-to-End Accountability:** Closes the loop via observability. Tasks are only "done" when validated in the target environment (e.g., Vercel logs, browser consoles), not just locally.
- **Supply-Chain Security:** Auto-updates are strictly opt-in. Uses version-pinned, auditable practices.
- **Safe Mutation Design (Kaizen Gate):** Triggers evolution only after ≥3 repeating failure causes to prevent cargo-cult rule accumulation.
- **Fresh-Context Gatekeeping:** Subagent reviewers operate in isolation to eliminate confirmation bias.
- **Opt-In Telemetry:** Skills pull lessons from `traces.md` based on their own manifests, replacing invasive malware-like hooks.

---

## LoopOps Marketplace

The LoopOps Registry allows sharing, subscribing, and monetizing self-improving skills.

- **Browser Sandbox:** Test enterprise-grade skills securely.
- **Continuous Updates:** Subscribe to skills to receive mutations automatically as they improve.
- **Verified Evals:** Skills pass CI/CD gates to ensure high success rates on benchmarks.
