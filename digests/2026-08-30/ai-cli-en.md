# AI CLI Tools Community Digest 2026-08-30

> Generated: 2026-08-30 02:30 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

**1. Ecosystem Overview**  
The AI‑CLI landscape in 2026 is characterized by rapid, community‑driven iteration on cross‑platform reliability, plugin extensibility, and session continuity. Most projects are Rust‑based command‑line tools that expose Model Context Protocol (MCP) or similar extension frameworks, and they are increasingly adding web‑based GUIs or rich TUI experiences. The community is coalescing around shared pain points—state management, sandbox security, and provider‑agnostic tool discovery—while also pushing for richer developer ergonomics such as live model reloading and fine‑grained resource accounting.

**2. Activity Comparison**  

| Tool (Repo) | Issues (Count) | PRs (Count) | Release Status (today) |
|-------------|----------------|-------------|------------------------|
| Claude Code (anthropics/claude‑code) | 10 | 10 | Stable (latest v0.151.0) |
| OpenAI Codex (openai/codex) | 10 | 10 | Stable (latest v0.151.0) |
| Gemini CLI (google‑gemini/gemini‑cli) | 10 | 10 | Nightly (v0.59.0‑nightly) |
| GitHub Copilot CLI (github/copilot‑cli) | 9 | 1 | Stable (v1.0.82‑2) |
| Kimi Code CLI (google‑gemini/gemini‑cli) *(note: same repo, but only one issue reported)* | 1 | 0 | No recent release |
| OpenCode (anomalyco/opencode) | 10 | 2 | No new release (latest unknown) |
| Pi (mo‑badlogic/pi‑mono) | 10 | 11 | Stable (no new release) |
| Qwen Code (QwenLM/qwen‑code) | 10 | 10 | No new release (stable) |
| DeepSeek TUI (Hmbown/CodeWhale) | 10 | 9 | Pending v0.9.12 (no release yet) |

**3. Shared Feature Directions**  

| Direction | Tools exhibiting the need |
|-----------|---------------------------|
| **Robust session continuity / history preservation** | OpenAI Codex, Gemini CLI, Pi, Qwen Code, DeepSeek TUI |
| **MCP / plugin architecture modernization** | OpenAI Codex, Pi, DeepSeek TUI, Qwen Code |
| **TUI stability & performance (rendering, memory leaks, CPU pressure)** | Pi, DeepSeek TUI, OpenCode, Qwen Code |
| **Authentication & sandbox security (OAuth, NoNewPrivs, machine tokens)** | OpenAI Codex, Gemini CLI, GitHub Copilot CLI, DeepSeek TUI |
| **Cross‑platform consistency (Windows, macOS, Linux, WSL)** | OpenAI Codex, Pi, Qwen Code, DeepSeek TUI |
| **Resource & quota metering accuracy** | Kimi Code CLI, Pi, OpenAI Codex |
| **Agent autonomy & sub‑agent visibility** | Gemini CLI, DeepSeek TUI, Qwen Code |

**4. Differentiation Analysis**  

- **Feature focus**:  
  - *Claude Code* and *OpenAI Codex* prioritize low‑level Rust stability, Windows sandboxing, and extensive plugin ecosystems.  
  - *Gemini CLI* emphasizes agent autonomy, zero‑dependency sandboxing, and AST‑aware tooling for code‑centric workflows.  
  - *GitHub Copilot CLI* centers on Copilot‑specific workflows (worktree switching, plan approvals) and auth‑related regressions.  
  - *Pi* pushes a rich UI layer (browser‑based TUI) and provider‑agnostic extensions, while also tackling high‑CPU macOS behavior.  
  - *Qwen Code* concentrates on API streaming reliability, build/test flakiness, and IDE‑specific UI polish.  
  - *DeepSeek TUI* (CodeWhale) targets enterprise readiness, sandbox security hardening, and a modular TUI crate decomposition.  

- **Target users**:  
  - *Developers* building generic code‑assistant agents (Codex, Pi, Qwen) vs. *Copilot* power users integrating with GitHub workflows.  
  - *Enterprise* teams seeking sandbox isolation and production‑grade reliability (DeepSeek TUI, OpenAI Codex).  
  - *Power users* desiring fine‑grained control over sub‑agents and model selection (Gemini CLI).  

- **Technical approach**:  
  - Predominantly Rust‑based CLIs with MCP/extension frameworks (Codex, Pi, DeepSeek).  
  - *Gemini* leans on Google’s internal model‑serving stack and zero‑dependency OS sandboxing.  
  - *Copilot* integrates tightly with GitHub Actions and Azure DevOps OAuth flows.  
  - *Kimi* shows minimal activity, indicating a more constrained or internal development cycle.  

**5. Community Momentum & Maturity**  

- **High‑activity, rapidly iterating**: *Pi*, *OpenAI Codex*, *Gemini CLI*, *Qwen Code* (all ~10 issues and ≥9 PRs in the last 24 h). Their issue‑to‑PR ratios and frequent nightly/stable releases signal strong, engaged communities.  
- **Moderate activity**: *Claude Code* (steady but fewer recent releases), *DeepSeek TUI* (active PRs but pending major release).  
- **Low activity**: *Kimi Code CLI* (single open issue, no PRs) and *GitHub Copilot CLI* (few open issues, limited PR updates).  

**6. Trend Signals**  

- **Session & state continuity** is a top priority; tools are adding fine‑grained resume mechanisms, history preservation, and deterministic rollout handling.  
- **Plugin ecosystems are converging** on standardized MCP support, configurable discovery, and result‑inspection hooks, reflecting a shift toward modular, provider‑agnostic extensions.  
- **UI/UX modernization**—including browser‑based GUIs, TUI crate refactoring, and command‑system standardization—indicates a push for richer, cross‑modal interaction.  
- **Security & sandbox hardening** (e.g., NoNewPrivs, OAuth handling, machine tokens) is a recurring theme, especially for Windows and enterprise deployments.  
- **Resource accountability** (quota metering, memory leak mitigation) is gaining traction as usage scales, with several projects reporting abnormal consumption or CPU pressure.  

These trends collectively point to a maturing ecosystem where reliability, extensibility, and developer ergonomics are the primary drivers of future releases.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-30 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Skills (PRs) have generated the most community attention through discussion volume and engagement metrics:

### 1.1 `run_eval.py` Bug Fixes (PR #1298, #1099, #1050)
**Author:** MartinCajiao, joshuawowk, gstreet-ops | **Status:** OPEN

Multiple PRs address a critical bug in the skill-creator evaluation pipeline. The core issue: `run_eval.py` reports 0% recall across all queries, rendering the description-optimization loop useless. Additional PRs fix Windows-specific crashes (subprocess pipe reading failures, encoding issues, `claude.cmd` path resolution). This is the highest-priority technical debt currently blocking skill development.

🔗 https://github.com/anthropics/skills/pull/1298  
🔗 https://github.com/anthropics/skills/pull/1099  
🔗 https://github.com/anthropics/skills/pull/1050

---

### 1.2 `document-typography` Skill (PR #514)
**Author:** PGTBoos | **Status:** OPEN | **Created:** 2026-03-04

Addresses typographic quality control for AI-generated documents, targeting orphan words (1-6 words spilling onto the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment. Impacts every document Claude generates and represents a refinement of the document-handling skill family.

🔗 https://github.com/anthropics/skills/pull/514

---

### 1.3 `scnet-hpc` Skill (PR #1615)
**Author:** lql341 | **Status:** OPEN | **Created:** 2026-08-20

Introduces profile-based SSH and Slurm workflow support for SCNet HPC clusters, including connection setup, job generation, cluster discovery, and compute node management. Demonstrates community demand for HPC/infrastructure integration.

🔗 https://github.com/anthropics/skills/pull/1615

---

### 1.4 `ODT` Skill (PR #486)
**Author:** GitHubNewbie0 | **Status:** OPEN | **Created:** 2026-03-01

Expands document format coverage to OpenDocument Format (.odt, .ods), including creation, template filling, and conversion to HTML. Complements existing docx and pdf skills to provide comprehensive document lifecycle support.

🔗 https://github.com/anthropics/skills/pull/486

---

### 1.5 `frontend-design` Skill Improvement (PR #210)
**Author:** justinwetch | **Status:** OPEN | **Created:** 2026-01-05

Revises the frontend-design skill for improved clarity and actionability, ensuring every instruction is executable within a single conversation and guidance is specific enough to reliably steer model behavior.

🔗 https://github.com/anthropics/skills/pull/210

---

### 1.6 `skill-quality-analyzer` & `skill-security-analyzer` (PR #83)
**Author:** eovidiu | **Status:** OPEN | **Created:** 2025-11-06

Adds two meta-skills to the marketplace: a quality analysis tool evaluating skills across five dimensions (Structure & Documentation, Trigger Precision, Action Completeness, Error Handling, Security) and a security analyzer for vulnerability detection. Represents mature tooling for the skills ecosystem.

🔗 https://github.com/anthropics/skills/pull/83

---

### 1.7 `Hivemind` Multi-Agent Orchestration (PR #1628)
**Author:** Hanishchow | **Status:** OPEN | **Created:** 2026-08-21

Enables Claude Code to delegate mechanical work to headless opencode workers running on free models, with Claude Code as sole planner/reviewer/merger. Targets cost optimization in multi-agent workflows by treating the expensive model's context as the scarce resource.

🔗 https://github.com/anthropics/skills/pull/1628

---

### 1.8 `self-audit` Skill (PR #1367)
**Author:** YuhaoLin2005 | **Status:** OPEN | **Created:** 2026-06-28

Provides a universal quality gate skill that combines mechanical file verification (Step 0) with four-dimension reasoning audit in damage-severity priority order. Designed to work with any project, tech stack, or model before output delivery.

🔗 https://github.com/anthropics/skills/pull/1367

---

## 2. Community Demand Trends

Analysis of Issues reveals these dominant themes:

| Trend | Issue Reference | Signal Strength |
|-------|-----------------|-----------------|
| **Security & Trust** | #492 (43 comments) | Critical — community skills distributed under `anthropic/` namespace create impersonation risk |
| **Evaluation & Testing Infrastructure** | #556, #1390, #1298 | High — broken eval pipeline blocks skill quality improvement |
| **Enterprise Collaboration** | #228 (16 comments) | High — org-wide skill sharing is a top workflow request |
| **Context Management** | #1487, #1329 | Medium — token injection bloat and compact memory notation |
| **Cross-Platform Parity** | #29 | Medium — demand for Bedrock/AWS integration |
| **Plugin Ecosystem Health** | #189 (6 comments) | Medium — duplicate skills between `document-skills` and `example-skills` packages |

**Key Insight:** The community's primary concern is **ecosystem reliability and trust**, followed by tooling infrastructure (evaluation, testing) and enterprise features (sharing, collaboration).

---

## 3. High-Potential Pending Skills

These Skills are active, have received community attention, and appear close to merge readiness:

| Skill | PR | Key Value | Author |
|-------|-----|-----------|--------|
| **`testing-patterns`** | #723 | Full testing stack: Unit, React/Testing Library, E2E, Contract, Performance | 4444J99 |
| **`servicenow`** | #568 | ITSM, ITOM, ITAM, FSM, SPM, Security, IntegrationHub | Vanka07 |
| **`pyxel`** | #525 | Retro game development via Pyxel MCP | kitao |
| **`compact-memory`** | #1329 | Symbolic notation for compact agent state | WGlynn |
| **UIZZE Partner Skill** | #1595 | Anti-UI-slop design guidance with authenticated MCP | samuelbushi |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust skill development infrastructure (evaluation pipelines, testing frameworks, quality analyzers) and enterprise-grade features (org sharing, security boundaries), rather than domain-specific skills alone.**

---

*Report generated from community activity in anthropics/skills. All PRs/Issues linked above.*

---

User Safety: safe

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest - August 30, 2026

## Today's Highlights
The OpenAI Codex community continues to refine cross-platform reliability and enhance AI-human collaboration. Rust v0.151.0 introduces configurable MCP server discovery and result inspection capabilities, while the latest bug fixes address critical Windows sandbox issues and session continuity problems. The community is actively resolving plugin compatibility challenges and improving TUI responsiveness.

## Releases
**rust-v0.151.0 (0.151.0)** - Released with significant enhancements to MCP (Model Context Protocol) integration:
- Added configurable grace period for discovering tools from optional MCP servers (#41199)
- Extensions can now inspect or replace MCP tool results before they reach the model (#41202)
- Plugin catalogs now combine per-repository configuration and report invalid project marketplace configurations

**rust-v0.152.0-alpha.1 (0.152.0-alpha.1)** and **rust-v0.151.0-alpha.7.2 (0.151.0-alpha.7.2)** are also available in alpha channels.

## Hot Issues
1. **#35746 - Paginated history drops valid flattened rollout records** (34 comments): Critical session history corruption affecting rollout continuity. Users report decoding inconsistencies in `RolloutLine` data that compromise task provenance and audit trails.

2. **#32706 - Windows/Edge: Chrome plugin update leaves locked host** (17 comments): Plugin compatibility disaster on Windows 10, causing partial cache corruption and uninstallation failures. Community concerns about browser extension reliability.

3. **#33192 - Windows DWM Composition handles accumulate** (16 comments, 10👍): Persistent memory leak in Windows terminal composition after tool calls. One user documented 22 handle accumulation over 5 tool calls, impacting system performance.

4. **#38792 - Resume opens a long thread at its first turn** (15 comments, 4👍): Session desynchronization where resumed threads display only initial user messages instead of maintaining full conversation history. Critical for long-running agent workflows.

5. **#29811 - Goal compaction resurrects completed manual steer** (10 comments, 7👍): Major bug in goal state management where completed manual steering instructions reappear unexpectedly during goal continuation, breaking workflow logic.

6. **#36087 - Windows sandbox fails with helper_unknown_error** (9 comments): Sandbox initialization failures on Windows 11 Pro, blocking secure development environments for professional users.

7. **#41290 - Windows/WSL project creation and removal fails** (9 comments, 3👍): Project lifecycle management breaks when switching Agent Environment to WSL, affecting Windows developers using Linux toolchains.

8. **#32447 - CLI repeatedly reports bundled node_repl MCP startup failure on macOS** (8 comments, 11👍): Persistent macOS startup issues with bundled node_repl MCP client causing session initialization problems.

9. **#40872 - Composer stays disabled after first completed turn** (6 comments): Composer interface becomes permanently disabled after first assistant response in Windows environments, blocking interactive coding.

10. **#40131 - 0.149.0 rejects symlinked custom-agent role files** (2 comments, 2👍): Breaking change affecting custom agent configuration when using symbolic links, forcing workaround implementations.

## Key PR Progress
1. **#41586 - Add Vim search motions to the composer**: Enhanced navigation with `/` and `?` forward/backward search, `n`/`N` wrapped repeat navigation, and support for search motions after operators.

2. **#41570 - Fix proactive multi-agent instruction grammar**: Corrected multi-agent instruction parsing for better agent coordination and collaborative workflows.

3. **#41569 - Harden diagnostic report uploads**: Improved upload reliability with core report events before attachments, individual gzip-compressed envelopes, and payload size bounds.

4. **#41567 - Restore thread cwd from owned settings snapshots**: Fixed thread resumption to preserve working directory from retained settings when no explicit `cwd` is provided.

5. **#41562 - Preserve turn lineage across goal continuations**: Maintained attribution of automatic goal continuations to their originating turns for better debugging and accountability.

6. **#41467 - Refresh the TUI model picker from the app server**: Fixed model selection to fetch current model lists asynchronously, preventing selection from stale cached catalogs.

7. **#41464 - Preserve permissions when updating session metadata**: Maintained existing permission snapshots during metadata updates to prevent unnecessary filesystem rebindings.

8. **#41461 - Source async user message descriptions from the model catalog**: Enhanced message descriptions by using active step model metadata instead of built-in defaults.

9. **#41456 - Support app targets in executor plugin hooks**: Extended plugin compatibility for Browser plugin's Stop and SubagentStop hooks with proper app policy validation.

10. **#41454 - Block goals after repeated execution host failures**: Added resilience by marking goals as blocked after three consecutive execution failures while allowing recovery on success.

## Feature Request Trends
**Cross-Platform Stability**: Windows users are demanding better sandbox reliability, WSL integration, and browser extension compatibility. The recurring theme is preventing resource leaks and ensuring consistent behavior across Windows, macOS, and Linux.

**Session Continuity**: Multiple issues highlight the need for reliable thread resumption and history preservation. Users want complete conversation continuity without data loss or corruption during state management operations.

**Plugin Architecture Improvements**: Enhanced MCP (Model Context Protocol) integration, better plugin lifecycle management, and more robust external tool discovery are trending priorities. The community seeks more flexible and configurable plugin systems.

**Performance Monitoring**: Developers increasingly request detailed diagnostics for resource usage (like DWM handle tracking) and performance metrics to optimize Codex for production workloads.

## Developer Pain Points
1. **Windows-Specific Instability**: Persistent issues with sandbox initialization, browser plugin updates, and DWM handle accumulation plague Windows developers. The operating system's security model (UAC, sandboxing) appears to be a consistent friction point.

2. **Session State Management**: Historical data corruption, incorrect rollouts, and broken thread resumption indicate fundamental state management challenges affecting long-running projects and multi-agent workflows.

3. **Plugin Configuration Complexity**: Symlink support rejection, MCP client startup failures, and browser extension compatibility issues create configuration headaches for development environments.

4. **Resource Management**: Temporary repository copies accumulating in `/tmp` (202GB over 3 days) reveal severe lifecycle management failures. Worktree cleanup and disk usage tracking are critical needs.

5. **Toolchain Integration**: WSL environment switching failures and code mode host handshake issues prevent seamless integration with existing development workflows.

The community is actively addressing these pain points through targeted bug fixes and architectural improvements, but cross-platform reliability remains a significant challenge requiring continued engineering focus.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑08‑30**

---

### 1. Today’s Highlights
- The nightly build **v0.59.0‑nightly.20260830.g0bd1d4397** was published, continuing the rapid iteration cycle.  
- Community discussion remains focused on agent reliability (sub‑agent success mis‑reporting, generalist‑agent hangs) and core usability pain points such as stalled shell commands and browser‑agent quirks.

### 2. Releases
- **v0.59.0‑nightly.20260830.g0bd1d4397** – nightly release (compare with previous nightly: https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260829.g0bd1d4397...v0.59.0-nightly.20260830.g0bd1d4397).  
  No detailed changelog beyond the automated version bump; represents ongoing integration of recent fixes and feature work.

### 3. Hot Issues (10)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` reports GOAL success, hiding interruption | Mis‑leads users into thinking a sub‑agent completed its task when it actually hit the turn limit, breaking trust in agent status reporting. | 13 comments, 2 👍 – active debate on correct termination handling. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely on simple actions (folder creation, etc.) | Blocks basic workflows; users must disable sub‑agent delegation to regain responsiveness. | 8 comments, 8 👍 – high frustration, many up‑votes. |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via Zero‑Dependency OS Sandboxing & Post‑Execution Intent Routing | Aims to unlock the model’s native shell fluency while keeping sandbox safety – a key performance/UX direction. | 8 comments, 1 👍 – strong interest from power‑users. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST‑aware file reads, search, and mapping | Proposes deeper code‑structure awareness to reduce token noise and improve navigation accuracy. | 7 comments, 1 👍 – early exploration of AST tooling. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub‑agents enough | Highlights a gap between available agent capabilities and actual model behavior, limiting extensibility. | 6 comments – users request more autonomous skill invocation. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low‑signal sessions indefinitely | Prevents wasted resources and log noise when the extraction agent deems a session uninformative. | 5 comments – acknowledged as a quality‑of‑life improvement. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with “Waiting input” after completion | Causes the UI to appear hung even though the command finished, eroding confidence in the CLI. | 4 comments, 3 👍 – recurring pain point. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Enhance browser_agent resilience: automatic session takeover & lock recovery | Addresses a common failure mode when persistent browser profiles are locked, improving reliability of web‑based agents. | 4 comments – users want smoother browser automation. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in Wayland | Specific platform regression that blocks GUI‑driven tasks on modern Linux desktops. | 4 comments, 1 👍 – niche but impactful for Wayland adopters. |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/filename.md` not recognized as agent if symlink | Limits flexibility in organizing agents via symlinks/junctions, a common workflow for dotfile management. | 4 comments – request for better symlink support. |

### 4. Key PR Progress (10)

| # | PR | Summary & Impact |
|---|----|------------------|
| [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | **fix(core): route read_file content through FileSystemService** – Makes `read_file` respect the injected filesystem abstraction, aligning it with `write_file`/`replace` and enabling ACP‑based remote filesystems. |
| [#28827](https://github.com/google-gemini/gemini-cli/pull/28827) | **fix(core): avoid false authentication errors for 401 substrings** – Tightens error detection so unrelated strings containing “401” aren’t mistaken for auth failures. |
| [#28828](https://github.com/google-gemini/gemini-cli/pull/28828) | **fix(core): warn when a preview model is silently substituted** – Emits a warning when a requested preview model falls back to `auto‑gemini‑2.5`, preventing silent degradation. |
| [#28823](https://github.com/google-gemini/gemini-cli/pull/28823) | **Feat/evals tracker relationships error recovery** – Adds behavioral evals for task‑graph dependency handling, visualization, and file‑path/shell error recovery paths. |
| [#28824](https://github.com/google-gemini/gemini-cli/pull/28824) | **feat(evals): add multi‑tool chain, context safety, and security bounds** – Introduces evals covering chained tool usage, large‑file context safety, and enforcement of security perimeters. |
| [#28822](https://github.com/google-gemini/gemini-cli/pull/28822) | **Feat/evals todos tasks tracker** – Adds evals for todo‑write, task‑completion signaling, and task‑tracker query operations. |
| [#28968](https://github.com/google-gemini/gemini-cli/pull/28968) | **fix(core): dedupe symlinked/junctioned skills directories during discovery** – Prevents double‑scoping of skills when `.gemini` is linked to `.agents`, fixing duplicate skill loading. |
| [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) | **fix(cli): prevent clearing terminal scrollback on static refresh** – Stops the UI from wiping the terminal buffer on refresh, preserving scrollback history. |
| [#28966](https://github.com/google-gemini/gemini-cli/pull/28966) | **docs(extensions): correct excludeTools examples that never match** – Updates documentation to show proper tool‑name patterns for `excludeTools` and points users to the policy engine for command‑level blocking. |
| [#29120](https://github.com/google-gemini/gemini-cli/pull/29120) | **fix(core): improve destination validation and connection routing in web fetch utilities** – Uses async DNS look‑ups and Undici transport to validate and route outbound HTTP requests more reliably. |

### 5. Feature Request Trends
- **Sub‑agent autonomy & visibility** – Requests for the model to automatically invoke skills/sub‑agents (#21968) and to expose sub‑agent trajectories via `/chat share` (#22598).  
- **AST‑aware tooling** – Strong interest in using abstract‑syntax‑tree aware reads/search/mapping to reduce token waste and improve navigation precision (#22745, #22746).  
- **Zero‑dependency OS sandboxing** – Proposals to harness the model’s native bash fluency while preserving safety via lightweight sandboxes (#19873).  
- **Tactful extraction / surgical reads** – Desire for smarter, token‑conservative file‑inspection primitives (#19561).  
- **Memory system refinements** – Calls for better handling of low‑signal sessions, deterministic redaction, and quarantining invalid memory patches (#26522, #26525, #26523).

### 6. Developer Pain Points
- **Agent status reliability** – Frequent mis‑reporting of sub‑agent outcomes (success vs. turn‑limit interruption) erodes trust.  
- **Generalist agent hangs** – Simple tasks stall indefinitely when the CLI falls back to the generalist agent.  
- **Shell command UI glitches** – Commands finish but the CLI stays stuck on “Waiting input,” requiring manual interruption.  
- **Browser agent fragility** – Issues with persistent profiles, Wayland compatibility, and lock‑recovery hinder automated web interactions.  
- **Memory/auto‑logging noise** – Low‑signal sessions retried indefinitely, excessive logging, and insufficient secret redaction create operational overhead.  
- **Tool‑scope limits** – Errors when too many tools are exposed (>400) indicate a need for smarter tool‑filtering or dynamic scoping.  
- **Symlink/junction handling** – Agent/skill discovery fails when directories are symlinked, complicating dotfile management workflows.  

---  

*All links point to the respective GitHub items in the google‑gemini/gemini-cli repository.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-30

Welcome to the daily technical digest for the **GitHub Copilot CLI** repository. Below is a structured analysis of the latest releases, community issues, pull requests, and key trends from the past 24 hours.

---

### 1. Today's Highlights
The primary focus over the last 24 hours has been the release of **v1.0.82** and **v1.0.82-2**, which address critical UI/UX bugs such as worktree switching interruptions and plan approval navigation. On the community side, developer attention has centered on tool execution regressions, notably a highly-voted issue regarding the missing `str_replace` tool during Java file modifications (#4027), alongside authentication regressions introduced in the v1.0.81 update.

---

### 2. Latest Releases
*   **v1.0.82 & v1.0.82-2** (Released 2026-08-29)
    *   **Worktree Switch Stability:** Messaging while `/worktree` or `/move` is preparing the workspace no longer breaks the overall switching sequence.
    *   **Plan Approval Navigation:** Users can now press `Ctrl+E` to expand the plan approval card to review the full execution plan again.
    *   **Specific Auth Failures:** The CLI now surfaces precise authentication failures (e.g., `401 Bad credentials`) instead of just silently defaulting back to the `/login` prompt.

---

### 3. Hot Issues (Top 9 Active Issues)
Given the limited dataset of exactly 9 actively updated issues, we highlight all of them due to their collective significance to the developer ecosystem:

#### 🔴 Critical Tool & Execution Bugs
*   **[Issue #4027] Tool 'str_replace' does not exist (13 👍, 1 comment)**
    *   **Why it matters:** Copilot CLI frequently fails during Java code editing, throwing a `Tool 'str_replace' does not exist` error mid-task before attempting fallback edits. This indicates a severe tool mapping issue when processing Java-specific syntax.
    *   **Link:** [github.com/github/copilot-cli/issues/4027](https://github.com/github/copilot-cli/issues/4027)
*   **[Issue #4553] Infinite loop and JSON-wrapping error on `apply_patch` (0 👍, 0 comments)**
    *   **Why it matters:** During routine file modifications, the CLI enters an infinite retry loop, failing to apply patches due to JSON-wrapping errors. This wastes developer tokens and severely degrades automation reliability.
    *   **Link:** [github.com/github/copilot-cli/issues/4553](https://github.com/github/copilot-cli/issues/4553)
*   **[Issue #2955] `/allow-all` does not suppress bash tool execution prompts (1 👍, 1 comment)**
    *   **Why it matters:** Despite running the `/allow-all` command, users still face interactive confirmation prompts ("Do you want to run this command?") for every bash/shell tool call, breaking non-interactive and automated scripting workflows.
    *   **Link:** [github.com/github/copilot-cli/issues/2955](https://github.com/github/copilot-cli/issues/2955)

#### 🔴 Authentication & MCP Regressions (v1.0.81)
*   **[Issue #4647] v1.0.81 broke compatibility with `chroma-mcp` (0 👍, 2 comments)**
    *   **Why it matters:** The transition from v1.0.80 to v1.0.81 introduced a breaking regression for developers utilizing the popular Chroma vector database MCP server.
    *   **Link:** [github.com/github/copilot-cli/issues/4647](https://github.com/github/copilot-cli/issues/4647)
*   **[Issue #4660] Remote ADO MCP server with OAuth fails in v1.0.81 WAM implementation (0 👍, 1 comment)**
    *   **Why it matters:** Azure DevOps remote MCP servers are failing to load with a generic "requires authentication" error, pinpointing a failure in the Windows Authentication Library (WAM) integration pipeline.
    *   **Link:** [github.com/github/copilot-cli/issues/4660](https://github.com/github/copilot-cli/issues/4660)
*   **[Issue #4662] AgentHost MCP client fails OAuth metadata discovery for issuer URLs with a path component (0 👍, 0 comments)**
    *   **Why it matters:** The AgentHost surface in VS Code cannot authenticate to standard OAuth-protected MCP servers if the issuer URL contains a path segment (e.g., `mcp.example.com/oauth`), failing before the consent screen is even triggered.
    *   **Link:** [github.com/github/copilot-cli/issues/4662](https://github.com/github/copilot-cli/issues/4662)

#### 🟡 Platform & Plugin Ecosystem Blockers
*   **[Issue #4165] `copilot --resume` hangs on cold start in Windows (1 👍, 4 comments)**
    *   **Why it matters:** Windows users launching `copilot --resume` directly from PowerShell face a permanent hang screen at "Resuming session...", preventing them from picking up their previous work environments.
    *   **Link:** [github.com/github/copilot-cli/issues/4165](https://github.com/github/copilot-cli/issues/4165)
*   **[Issue #4655] Agent Plugins 1.0: custom agents under `com.github.copilot/agents` are not discovered (0 👍, 1 comment)**
    *   **Why it matters:** Developers building custom plugins using the Agent Plugins 1.0 spec are finding that their custom agents are ignored by the CLI, blocking the growth of the custom plugin ecosystem.
    *   **Link:** [github.com/github/copilot-cli/issues/4655](https://github.com/github/copilot-cli/issues/4655)
*   **[Issue #4204] Add `.agents` discovery for instructions, agents, and hooks in any opened folder (0 👍, 2 comments)**
    *   **Why it matters:** Users want to standardize Copilot customizations across local folders, extending the `.agents/skills` convention to general instructions, hooks, and agents outside the restriction of Git repositories.
    *   **Link:** [github.com/github/copilot-cli/issues/4204](https://github.com/github/copilot-cli/issues/4204)

---

### 4. Key PR Progress
*Note: Only 2 pull requests were updated in the last 24 hours, both addressing environmental setup configurations:*

*   **[PR #2381] install: add fish shell support for PATH configuration (CLOSED)**
    *   **Description:** Resolves silent PATH configuration failures for Fish shell users. Previously, the installer wrote POSIX `export` syntax to `~/.profile`, which Fish does not source. The PR correctly handles Fish's array-based PATH configuration.
    *   **Link:** [github.com/github/copilot-cli/pull/2381](https://github.com/github/copilot

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑08‑30**  
*Source: github.com/MoonshotAI/kimi-cli*  

---

### 1. Today's Highlights  
- A single issue was updated in the last 24 h: **#2626** reports abnormal quota consumption where `cache_read` is billed on every turn despite `cache_creation` remaining at zero, causing a >10× amplification of usage.  
- No new releases or pull requests were merged or updated during this period.  

---

### 2. Releases  
*None* – No new versions were published in the last 24 h.  

---

### 3. Hot Issues  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#2626](https://github.com/MoonshotAI/kimi-cli/issues/2626) | **Abnormal quota consumption: cache_read billed every turn with cache_creation always 0 (>10x amplification)** | Users are seeing unexpected quota drain, which directly impacts billing and trust in the service, especially for paying subscribers. The issue highlights a potential metering bug in the caching layer. | 1 comment, 0 reactions so far; the reporter (ahmadyaseen35-coder) provided detailed logs and a timestamp, prompting a call for investigation from the maintainers. |

*Only one issue was updated in the window; therefore the list reflects the sole noteworthy item.*  

---

### 4. Key PR Progress  
*None* – No pull requests were updated or merged in the last 24 h.  

---

### 5. Feature Request Trends  
The recent activity does not contain explicit feature requests. The sole issue is a bug report concerning quota metering, indicating that current community focus is on stability and correct billing rather than new functionality.  

---

### 6. Developer Pain Points  
- **Metering / Quota Accuracy:** Repeated concerns (as illustrated by #2626) about incorrect counting of cache‑related operations leading to rapid quota depletion.  
- **Lack of Transparent Usage Details:** Users desire finer‑grained, real‑time usage breakdowns to diagnose unexpected consumption quickly.  
- **Response Latency on Bug Reports:** With limited recent engagement (only 1 comment on the open issue), developers note a need for faster triage and communication from the maintainers.  

---

*Note: This digest reflects the data available for the specified 24‑hour window. Should additional activity arise, future digests will expand the coverage accordingly.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-30

### 1. Today's Highlights
The community is currently grappling with widespread provider authentication and routing failures, notably 401/403 errors across OpenAI, GLM, and OpenCode Go endpoints. Concurrently, developer activity is focused on critical UI/UX stability fixes, including TUI event listener memory leaks and iOS safe-area insets, while high-demand feature requests for agent-scoped reasoning controls and GitHub Copilot API access are gaining significant traction. No new releases were published in the last 24 hours.

### 2. Releases
No new versions were released in the last 24 hours.

### 3. Hot Issues
*   **[#16281](https://github.com/anomalyco/opencode/issues/16281)** — *[CLOSED]* OpenAI ChatGPT browser login fails with `Token exchange failed: 403` on macOS. 10 comments. A critical auth blocker for Pro/Plus users on macOS where the OAuth callback succeeds but token exchange fails.
*   **[#20235](https://github.com/anomalyco/opencode/issues/20235)** — *[CLOSED]* Request GitHub Copilot auto model routing API access + `chat.model` plugin hook. 29 👍. The highest-liked issue this week; users desperately want opencode to access the `/models/session` endpoint for dynamic model routing.
*   **[#34598](https://github.com/anomalyco/opencode/issues/34598)** — *[CLOSED]* opencode-go GLM-5.2 routes to Alibaba Cloud, scans/filters user content with no ToS disclosure. 5 comments. A major privacy and routing concern as GLM-5.2 traffic is silently redirected to Alibaba Cloud Model Studio.
*   **[#25668](https://github.com/anomalyco/opencode/issues/25668)** — *[CLOSED]* Plugin loading intermittently hangs when `.git` directory exists (Windows). 5 comments. A severe Windows-specific blocker causing indefinite TUI freezes and requiring force-kills.
*   **[#39215](https://github.com/anomalyco/opencode/issues/39215)** — *[OPEN]* OpenCode Go — "Request blocked by upstream provider" (HTTP 401) on all models despite active subscription. 3 comments. A widespread outage affecting all OpenCode Go models (DeepSeek, GLM, Qwen) for paying subscribers.
*   **[#46035](https://github.com/anomalyco/opencode/issues/46035)** — *[OPEN]* `serve` (1.18.25): MCP child processes accumulate on web-client reconnects until the server OOMs. 3 comments. A critical memory leak in headless server deployments where MCP servers are never cleaned up on reconnect.
*   **[#24795](https://github.com/anomalyco/opencode/issues/24795)** — *[CLOSED]* Allow editing the "always" permission pattern before confirming. 6 👍. Users want the ability to manually refine auto-generated permission patterns before permanently granting access.
*   **[#27661](https://github.com/anomalyco/opencode/issues/27661)** — *[CLOSED]* Home/End keys in input box scroll message list instead of moving cursor. 6 comments, 8 👍. A frustrating TUI usability bug that makes editing long prompts nearly impossible.
*   **[#33473](https://github.com/anomalyco/opencode/issues/33473)** — *[CLOSED]* Opencode Go/Deepseek V4 flash cache hit issues. 4 comments. Users report 0% cache hits immediately after subscription renewal, raising billing and model routing concerns.
*   **[#27463](https://github.com/anomalyco/opencode/issues/27463)** — *[CLOSED]* Add close confirmation or minimize-to-tray support for Desktop app. 4 comments, 4 👍. A popular UX request to prevent accidental app termination and improve desktop workflow.

### 4. Key PR Progress
*   **[#46205](https://github.com/anomalyco/opencode/pull/46205)** — *[OPEN]* `[contributor] fix(session-ui): share timeline tool headers`. Extracts `ToolHeader` from `BasicTool` to standardize title, details, and argument rendering across Read/Grep/Glob/Edit/Webfetch.
*   **[#46204](https://github.com/anomalyco/opencode/pull/46204)** — *[CLOSED]* `feat(build): add --

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-30

## Today's Highlights
The Pi coding agent shipped its most significant UI expansion yet: a **browser-based Web GUI (`pi web`)** with full TUI feature parity, served via a token-gated local HTTP/WebSocket server (PR #8840). Meanwhile, the community is actively debugging a high-impact TUI streaming corruption bug (#8584, 25 comments) where assistant text renders one word per line after long tool output, and a persistent Mac CPU spike issue (#7730, 13 comments) tied to long sessions.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#8584](https://github.com/earendil-works/pi/issues/8584)** TUI row corruption during streaming | Assistant text fragments into one-word-per-line after wide tool output (e.g., `sed` on large files). Blocks readable streaming UX. | 25 comments, 9👍 — **Highest engagement** in period |
| **[#7730](https://github.com/earendil-works/pi/issues/7730)** High CPU on macOS (50–110%) with long sessions | Sustained 100%+ CPU, 600–800 MB RAM; correlates with context/session length. Mac developers severely affected. | 13 comments, 9👍 — Persistent since Aug 6 |
| **[#8061](https://github.com/earendil-works/pi/issues/8061)** Context budget ignores `maxTokens` output reservation | Requests rejected at ~78% input capacity; auto-compact retry fails same way. Breaks large-context models (1M+ tokens). | 3 comments, 2👍 — In progress |
| **[#8643](https://github.com/earendil-works/pi/issues/8643)** Bedrock: OpenAI models reject images in `toolResult.content` | Images nested in tool results cause 400s; needs hoisting to sibling user blocks (fix ready on fork). | 3 comments — Provider compatibility blocker |
| **[#8753](https://github.com/earendil-works/pi/issues/8753)** 0.84.3 regression: `reasoning_details` echo degenerates Venice GLM reasoning | Deterministic reasoning collapse in multi-turn tool loops after `preservedReasoningDetails` activation. | 3 comments — Regression in current release |
| **[#8829](https://github.com/earendil-works/pi/issues/8829)** `wrapUIPromptContext` loses prototype methods on class-based UIs | Spread-copy drops prototype methods; breaks custom UI implementations using classes. | 3 comments — SDK extensibility bug |
| **[#3966](https://github.com/earendil-works/pi/issues/3966)** Add `--profile` for isolated Pi state | No clean way to separate work/personal/local-LLM state without manual `PI_CODING_AGENT_DIR` juggling. | 5 comments — Long-standing feature request |
| **[#8834](https://github.com/earendil-works/pi/issues/8834)** Opt-in `pi.namespace` for skills/prompt templates | Unified namespacing (`<ns>:<name>`) for package resources; avoids collisions in multi-package setups. | 3 comments — Extension architecture improvement |
| **[#8843](https://github.com/earendil-works/pi/issues/8843)** Lazy session resume: large sessions take ~10s before first prompt | Full JSONL parse on startup; cold start scales linearly with session age. | 1 comment, **filed today** — Performance regression |
| **[#3159](https://github.com/earendil-works/pi/issues/3159)** Edit tool timeout (`terminated`) on Qwen 27B | Consistent failures on edit operations; suspected too-low timeout for large edits. | 8 comments — Core tool reliability |

---

## Key PR Progress (11 PRs Updated)

| PR | Type | Summary |
|----|------|---------|
| **[#8840](https://github.com/earendil-works/pi/pull/8840)** | **Major Feature** | **`pi web`**: Browser GUI with full TUI parity. Local token-gated HTTP + WebSocket server reusing `AgentSessionRuntime`. **Closed/merged today.** |
| **[#8262](https://github.com/earendil-works/pi/pull/8262)** | Feature/Fix | Dispatch `input`/`before_agent_start` hooks on *every* turn-start path (incl. `sendCustomMessage(triggerTurn: true)`). Cancellable preflight. |
| **[#8828](https://github.com/earendil-works/pi/pull/8828)** | Fix | Detect Zed terminal capabilities (Alacritty-based: hyperlinks, true color, no images). Documents Pi keymap for Zed. |
| **[#8112](https://github.com/earendil-works/pi/pull/8112)** | Fix | Realpath extension entries before `jiti` import — fixes pnpm symlink resolution for upward imports. Closes #8092. |
| **[#8725](https://github.com/earendil-works/pi/pull/8725)** | Fix | Settle active tool turn *before* in-memory fork; prevents `toolResult` landing in replacement session and double-dispose. |
| **[#8297](https://github.com/earendil-works/pi/pull/8297)** | Fix | Exclude superseded retry attempts from provider context, compaction, token budgets, branch summaries, cold restores. Retains in JSONL/transcript. |
| **[#8818](https://github.com/earendil-works/pi/pull/8818)** | Fix | Omit `tool_choice` in OpenAI Responses API when no tools sent; send `tools: []` for xAI/Grok to avoid 400 on compaction. |
| **[#8812](https://github.com/earendil-works/pi/pull/8812)** | Fix | Flush extension provider registrations *before* initial model resolution — fixes race where extensions’ providers missed at session start. |
| **[#8811](https://github.com/earendil-works/pi/pull/8811)** | Feature | **StartupComposer**: Accepts input during startup (project trust, selection, dialogs) and carries state into interactive mode. Editor state capture/restore extended. |
| **[#8819](https://github.com/earendil-works/pi/pull/8819)** | Chore | Project name normalization: `pi` → `Pi` across codebase. |
| **[#8232](https://github.com/earendil-works/pi/pull/8232)** | Dev | `DONT MERGE: dev branch` — CI/commenting sandbox. |

---

## Feature Request Trends
1. **Isolated Profiles/Namespaces** — Strong demand for `--profile` (#3966) and package-level `pi.namespace` (#8834) to keep auth, sessions, settings, and skills separate across work/personal/local-LLM contexts.
2. **Extension/Skill Visibility Control** — Narrow deny-only APIs to hide skills from session consumers (#8533) and slash-autocomplete ranking fixes (#8813).
3. **First-Class Provider Catalog Expansion** — Requests to ship Command Code (#8836), DeepSeek (#8838), Minimax (#8839) as built-ins; xAI tool_choice fix (#8818) already landed.
4. **Startup & Resume UX** — StartupComposer (#8811), lazy JSONL parsing for instant resume (#8843), and editor state persistence.
5. **Web GUI Parity** — `pi web` (#8840) delivers browser TUI equivalent; signals investment in multi-surface accessibility.

---

## Developer Pain Points (Recurring Themes)
- **TUI Rendering Fragility** — Streaming corruption (#8584), soft-break handling (#8751), thinking-trail line breaks (#8780), hardcoded SGR resets ignoring `NO_COLOR` (#8825), Windows path backslashes in image fallback (#8809).
- **macOS Resource Pressure** — Sustained high CPU/RAM on long sessions (#7730); no clear mitigation yet.
- **Session Lifecycle Performance** — Cold-start parse of massive JSONL (#8843), context budget miscalculation causing retry loops (#8061), extension reload skipping lifecycle hooks (#8832).
- **Provider Compatibility Gaps** — Bedrock image handling (#8643), xAI tool_choice (#8818), DeepSeek `reasoning_content` echo (#8838), Minimax schema errors (#8839), OpenAI Codex proxy/OAuth (#2282).
- **Windows Path Normalization** — Backslashes persisting in system prompts, docs, skill paths (#8841, follow-up to #2080).
- **Extension Loading Reliability** — Symlink resolution (#8112), provider registration timing (#8812), prototype method loss (#8829).

---

*Data source: `github.com/earendil-works/pi` — Issues & PRs updated 2026-08-29 to 2026-08-30.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest - 2026-08-30**  

1. **Today's Highlights**  
- Critical API streaming errors (#5975) persist in v0.19.3, causing frequent timeouts and workflow disruptions.  
- A failed release workflow (#10535) for v0.22.3-nightly disrupted nightly builds.  
- Active PR #10269 introduces live model provider hot-reload support, addressing long-standing development requests.  

2. **Releases**  
No new releases in the last 24 hours.  

3. **Hot Issues**  
1. **#5975** [API Error: Stream timeouts](https://github.com/QwenLM/qwen-code/issues/5975)  
   - 14+ comments highlight recurring 120s+ streaming freezes in v0.19.3, breaking long workflows. Users urgently request throttling or reconnect mechanisms.  
2. **#8625** [Windows Chinese IME input issue](https://github.com/QwenLM/qwen-code/issues/8625)  
   - 8 comments detail unreadable pinyin input in ANSI mode, affecting Chinese users on Windows.  
3. **#10520** [llama.cpp grammar parsing failure](https://github.com/QwenLM/qwen-code/issues/10520)  
   - Threshold settings in MCP tools break local servers, with users reporting 400 errors during AI inference.  
4. **#8721** [npm test fails with EUNKNOWN FLAG](https://github.com/QwenLM/qwen-code/issues/8721)  
   - Blocking regression in local development workflows; 5 comments demand immediate fixes.  
5. **#10405** [Session-switch overlay lock](https://github.com/QwenLM/qwen-code/issues/10405)  
   - Web Shell UI stuck in locked state if daemon disconnects, requiring manual reloads.  
6. **#10385** [Message edit rewind bug](https://github.com/QwenLM/qwen-code/issues/10385)  
   - Editing UI messages corrupts session snapshots, causing unexpected behavior.  
7. **#10266** [Daemon session initialization deadlock](https://github.com/QwenLM/qwen-code/issues/10266)  
   - Session setup continues post-timeout, leaving resources in limbo without cancellation.  
8. **#8617** [VSCode dropdown coverage](https://github.com/QwenLM/qwen-code/issues/8617)  
   - 4 comments report UI elements obscuring output in the editor plugin.  
9. **#9025** [Vertex AI auth type omission](https://github.com/QwenLM/qwen-code/issues/9025)  
   - Keyless Vertex AI deployments fail due to missing environment detection logic.  
10. **#10530** [Qwen 3.8B 400 sampler error](https://github.com/QwenLM/qwen-code/issues/10530)  
    - Regression in v0.22.3 affecting Qwen 3.8B models running on llama.cpp.  

4. **Key PR Progress**  
1. **[#10269](https://github.com/QwenLM/qwen-code/pull/10269): Runtime model provider hot-reload**  
   - Enables dynamic updates to model providers without daemon restarts.  
2. **[#10429](https://github.com/QwenLM/qwen-code/pull/10429): Resolve request recovery**  
   - Fixes lost CI requests from HEAD moves, force pushes, and 503s.  
3. **[#10455](https://github.com/QwenLM/qwen-code/pull/10455): Startup output-language file crash fix**  
   - Prevents CLI crashes when config directories are unwritable.  
4. **[#10420](https://github.com/QwenLM/qwen-code/pull/10420): Named task output attributes**  
   - Enhances channel message categorization in ACP workflows.  
5. **[#9940](https://github.com/QwenLM/qwen-code/pull/9940): Review thread reply consistency**  
   - Ensures findings are threaded and previous fixes are acknowledged.  
6. **[#10428](https://github.com/QwenLM/qwen-code/pull/10428): Resolver sandboxing removal**  
   - Runs `/resolve` outside containers for reliability, fixing agent misclassifications.  
7. **[#8729](https://github.com/QwenLM/qwen-code/pull/8729): Subagent progress updates**  
   - Makes nested tool calls visible to parent agents for transparency.  
8. **[#10188](https://github.com/QwenLM/qwen-code/pull/10188): Autofix regression cost tracking**  
   - Strengthens brake mechanisms to attribute regressions to weak tests.  
9. **[#10171](https://github.com/QwenLM/qwen-code/pull/10171): Goal proposal dialog**  
   - Allows models to request user approval for session goals.  
10. **[#10347](https://github.com/QwenLM/qwen-code/pull/10347): EOF retry handler**  
    - Auto-retries transient network EOFs for robustness.  

5. **Feature Request Trends**  
- **Multi-agent workflows**: Requests for robust Agent Team handling (#10208, #8271) and goal management (#10171).  
- **Session lifecycles**: Bounds for session rotation (#8927) and proper timeout handling (#10266).  
- **IDE/UI polish**: Fixing VSCode overlay bugs (#8617) and rendering performance (#8608).  
- **CI/CD improvements**: Reduce build costs (#10444) and resolve infrastructure flakiness (#10429).  
- **Provider flexibility**: Endpoint-specific reasoning controls (#9590) and MCP tool reliability (#10520).  

6. **Developer Pain Points**  
- **API/streaming instability**: Frequent timeouts (#5975) and llama.cpp grammar errors (#10530) disrupting local deployments.  
- **Build/test flakiness**: npm failures (#8721), CI ENOSPC errors (#10035), and resolver sandbox issues (#10428).  
- **Setup/CLI friction**: Unwritable config paths (#10455) and corepack fallback race conditions (#10524).  
- **Platform inconsistencies**: Windows IME rendering (#8625) and VSCode UI obstructions (#8617).  
- **Session management**: Improper state handling in web-shell transitions (#10405, #10266).  

*Data sourced from GitHub QwenLM/qwen-code (2026-08-30).*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-30

---

## 1. Today's Highlights

The v0.9.12 release cycle is nearing completion with the integration branch (`codex/v0912-integration-20260823`) now code-complete for release blockers. A high-severity sandbox regression (#5723) emerged where the agent shell's `NoNewPrivs` flag blocks `sudo`, breaking production deployment workflows. Meanwhile, the TUI crate decomposition epic (#5316) continues its architectural refactor, and multiple provider-side enhancements — including Concentrate gateway support and OpenAI-compatible wire protocol extensions — are landing in parallel.

---

## 2. Releases

**No new releases in the last 24 hours.**  
The v0.9.12 release is gated on final version bump, changelog, and RC validation (tracked in #5573).

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| [#5573](https://github.com/Hmbown/CodeWhale/issues/5573) | **v0.9.12: milestone tracker** | OPEN | Central release coordination issue; 22 comments tracking P0 blockers, verification gates, and ship checklist. |
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition** | OPEN | Umbrella epic for splitting the monolithic TUI crate; 19 comments tracking sub-epics and FEAT progress. |
| [#5723](https://github.com/Hmbown/CodeWhale/issues/5723) | **Agent shell sets `NoNewPrivs`, blocking `sudo`** | OPEN | **High severity** — breaks existing deployment workflows; sandbox regression introduced in agent execution environment. |
| [#5715](https://github.com/Hmbown/CodeWhale/issues/5715) | **Session recovery invisible to the model** | OPEN | After force-quit, the agent cannot see prior work despite data being on disk; impacts trust in long-running tasks. |
| [#5713](https://github.com/Hmbown/CodeWhale/issues/5713) | **Support `wire = "responses" \| "anthropic"` for openai-compatible** | OPEN | Unblocks custom providers needing Responses API or Anthropic Messages wire format; currently ignored. |
| [#5718](https://github.com/Hmbown/CodeWhale/issues/5718) | **One worker system: retire Keychain + single-worker spawn** | OPEN | Completes work from PR #5632; removes legacy OS-keyring path and consolidates worker lifecycle. |
| [#5350](https://github.com/Hmbown/CodeWhale/issues/5350) | **Simplify third-party model config with pre-built templates** | CLOSED | Adds provider templates (OpenCode Zen, Go, Agnes, Sensenova), test-connection button, and cache fixes. |
| [#5668](https://github.com/Hmbown/CodeWhale/issues/5668) | **Add `/copy` for last completed model output** | CLOSED | New TUI command to copy the most recent assistant response — avoids manual terminal selection. |
| [#5579](https://github.com/Hmbown/CodeWhale/issues/5579) | **Plugin UX parity with Claude Code** | CLOSED | Adds proactive plugin recommendations, reload discoverability, and hot-reload support. |
| [#1261](https://github.com/Hmbown/CodeWhale/issues/1261) | **Pane zooming support** | CLOSED | Addresses content truncation in tables/Plan/Todos panes; enables full-content viewing. |

---

## 4. Key PR Progress (10 Important PRs)

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#5717](https://github.com/Hmbown/CodeWhale/pull/5717) | **refactor(tui): adopt command shapes in project group (FEAT-021)** | OPEN | Converts `/init`, `/lsp`, `/share`, `/goal` to external command shapes (FEAT-014/015 pattern). |
| [#5725](https://github.com/Hmbown/CodeWhale/pull/5725) | **feat(providers): Concentrate as first-class opt-in BYOK Responses gateway** | OPEN | Adds Concentrate (`api.concentrate.ai/v1`) as a native provider using existing auth/router infrastructure. |
| [#5724](https://github.com/Hmbown/CodeWhale/pull/5724) | **fix(sandbox): match read deny-list against resolved path** | OPEN | Fixes 6 macOS + Windows CI failures in `sandbox::read_guard::tests`; restores green shared base. |
| [#5721](https://github.com/Hmbown/CodeWhale/pull/5721) | **feat(cli): Codewhale-account machine tokens (`CODEWHALE_API_KEY`)** | OPEN | Enables headless CLI auth via `CODEWHALE_API_KEY` — no local session file or browser required. |
| [#5719](https://github.com/Hmbown/CodeWhale/pull/5719) | **fix(custom): wire = responses\|anthropic for openai-compatible** | OPEN | Rescues #5716; implements wire dialect support for OpenAI-compatible providers (credit to @whp233). |
| [#5722](https://github.com/Hmbown/CodeWhale/pull/5722) | **feat(tui): wire header group's pod + notifications segments** | OPEN | Renders live pod capacity (`pod n/m`) and notification indicators in topbar with design-system typography. |
| [#5703](https://github.com/Hmbown/CodeWhale/pull/5703) | **feat(tui): match Operate to landed CWC OperateRecord** | OPEN | Aligns `cw · operate` with upstream CWC `OperateRecord` (camelCase fields, new API endpoints). |
| [#5720](https://github.com/Hmbown/CodeWhale/pull/5720) | **feat(web): Moonshot and Kimi native search** | OPEN | Rescues #5686; adds native search support for Moonshot/Kimi providers in web runtime. |
| [#5712](https://github.com/Hmbown/CodeWhale/pull/5712) | **feat(cli): cloud-dispatch remote runner — sandbox to forge PR** | OPEN | Completes `/dispatch`: confirmed runs spawn cloud agent in sandbox, open forge PR, with teardown-on-cancel. |
| [#5628](https://github.com/Hmbown/CodeWhale/pull/5628) | **Enterprise launch readiness: operator packet, Codewhale launch** | CLOSED | Delivers `docs/ENTERPRISE.md` (zh-Hans), local runtime security review packet, and launch-readiness handoff. |

---

## 5. Feature Request Trends

1. **Provider Ecosystem Expansion** — First-class support for aggregator gateways (Concentrate, Eden AI), wire-protocol flexibility (Responses, Anthropic Messages), and pre-built templates for third-party compat services (OpenCode, Agnes, Sensenova).

2. **TUI Command System Modernization** — Systematic migration to external command shapes (FEAT-014/015/018/021), new commands (`/copy`, `/dispatch`), and header/widget wiring for real-time status (pod capacity, notifications).

3. **Session & State Continuity** — Session recovery visibility for the model (#5715), welcome motion timing (#5656), and pane zooming (#1261) all point to demand for seamless context preservation across restarts and layout changes.

4. **Enterprise / Production Hardening** — Machine tokens (`CODEWHALE_API_KEY`), enterprise launch docs, sandbox CI stability, and Keychain retirement reflect a push toward operator-grade deployments.

5. **Plugin & Extension Parity** — Proactive recommendations, hot-reload, and marketplace discoverability targeting Claude Code–level UX.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Sandbox regressions breaking workflows** | #5723: `NoNewPrivs` blocks `sudo` in production deployments; #5724: CI failures on macOS/Windows read-guard tests. |
| **Model unaware of prior session state** | #5715: Force-quit loses model context despite data on disk; users expect seamless recovery. |
| **Third-party provider configuration friction** | #5350: Manual Base URL/model/key entry, no templates, cache failures, no test-connection — now addressed but historically high friction. |
| **Cross-shell command compatibility** | #1754: AI generates bash-style commands that fail in PowerShell/cmd on Windows. |
| **Localization gaps** | #790: Commands, modals, widgets, approval dialogs still hardcoded in English after `zh-Hant` addition. |
| **Keychain / credential store instability** | #5718: Legacy `KeyringStore`/`DefaultKeyring` still present; account sessions previously popped Keychain prompts (#5662 partial fix). |

---

*Data source: [github.com/Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) — Issues/PRs updated 2026-08-29 to 2026-08-30.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*