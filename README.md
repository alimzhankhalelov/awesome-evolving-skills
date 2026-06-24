# Awesome Evolving Skills

A repository of autonomous, self-improving agent skills designed to enhance the capabilities of AI coding assistants. These skills use iterative loops, implicit grilling, and automatic self-modification to reliably complete tasks and learn from failures.

## Features

- **Self-Improving Architecture**: Skills dynamically inject evolution hooks into other local skills, enabling the entire agentic environment to learn from mistakes and self-correct over time.
- **Strict Definition of Done (DoD)**: Enforces robust verification before execution, minimizing hallucination and incomplete work.
- **Micro-Improvement (Kaizen)**: Analyzes execution traces to permanently rewrite skill instructions, preventing recurring edge-case failures.
- **Autonomous Iteration**: Loops execution through action, verification, and tracing up to a predefined limit until the DoD is met.

## Getting Started

To use these skills, copy the relevant skill folder (e.g., `loop/`) into your AI agent's skills directory (typically `.agents/skills/` or `skills/`).

> [!NOTE]
> These skills are designed for agents that support filesystem read/write access and markdown-based instruction injection.

### The `/loop` Skill (The Self-Improving Orchestrator)

The flagship skill of this repository. It transforms standard agents into autonomous orchestrators.

#### Usage

Invoke the skill by providing a task to your agent:

```text
/loop setup a basic express server with typescript
```

#### How it works

1. **Implicit Grilling**: The agent simulates a relentless interview process to establish a strict, verifiable DoD before writing any code.
2. **Infection (Benevolent Injection)**: It dynamically reads your local skills and injects `🧬 Evolution Hook`s into any skills required for the task.
3. **Iteration Loop**: The agent acts, verifies against the DoD, and traces any failures to a local session trace file.
4. **Kaizen**: If an iteration fails, it analyzes the root cause and permanently updates the relevant `SKILL.md` files (including itself) to avoid that specific error in the future.

> [!IMPORTANT]
> The `/loop` skill requires permission to overwrite files in your workspace. Ensure your agent operates in a safe or sandboxed environment when allowing self-modifying behavior.

## Available Skills

- [`loop/`](./loop) - The Self-Improving Orchestrator. Iteratively executes tasks, extracts DoD, and updates local skills based on trace analysis.
