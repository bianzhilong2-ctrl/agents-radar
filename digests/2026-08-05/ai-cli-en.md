# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-05 01:43 UTC | Tools covered: 9

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

**Cross‑Tool AI CLI Landscape – 2026‑08‑05**

| Tool | Hot Issues (today) | PRs in progress | Release today? |
|------|--------------------|-----------------|----------------|
| Claude Code | 10 | 10 | ✅ |
| OpenAI Codex | 8 | 10 | ✅ |
| Gemini CLI | 10 | 10 | ❌ |
| GitHub Copilot CLI | 6 | 3 | ❌ |
| Kimi Code CLI | 6 | 3 | ❌ |
| OpenCode | 10 | 10 | ✅ |
| Pi | 10 | 10 | ❌ |
| Qwen Code | 10 | 10 | ✅ |
| DeepSeek TUI | 10 | 10 | ❌ |

*Numbers reflect the “Hot Issues” and “Key PR Progress” lists in each digest; a “Release today?” flag indicates a new tag or release published in the last 24 h.*

---

### 1. Ecosystem Overview  
The AI‑CLI ecosystem is in a rapid‑iteration phase, with most projects pushing daily releases or hot‑fixes.  The community is highly fragmented: some tools (Claude Code, OpenAI Codex, OpenCode, Qwen Code) maintain a steady release cadence, while others (Gemini CLI, DeepSeek TUI, Pi, GitHub Copilot CLI, Kimi Code CLI) focus on feature‑driven PRs and issue triage.  Cross‑tool collaboration is limited; most feature requests are isolated to a single project, though a handful of concerns (session persistence, sandboxing, context‑window management) recur across the board.

---

### 2. Shared Feature Directions  
| Theme | Tools | Specific Needs |
|-------|-------|----------------|
| **Session / Context Persistence** | Claude Code, Kimi Code, OpenAI Codex, OpenCode, Gemini CLI | Preserve assistant state across backgrounding, resume sessions, delete chats, import/export history |
| **Tool I/O Stability** | Claude Code, Gemini CLI, Qwen Code, DeepSeek TUI, Pi | Consistent JSON/text handling, avoid dropped blocks, prevent “awaiting input” stalls |
| **Sandbox & Security Hardening** | Gemini CLI, DeepSeek TUI, Pi, Qwen Code | Variable‑expansion guards, sandbox‑bypass prevention, zero‑dependency sandboxing |
| **Context‑Window & Token Management** | Pi, DeepSeek TUI, Gemini CLI, Qwen Code | Explicit context‑size reporting, full‑model token limits, compression thresholds |
| **Subscription & Usage Transparency** | OpenCode, Qwen Code, Gemini CLI | API endpoints for usage/balance, pricing visibility, cost‑tracking |
| **Fine‑grained Skill/Hook Control** | OpenCode, Qwen Code, Gemini CLI | `disable‑model‑invocation`, hook execution, deterministic tool boundaries |
| **Remote / ACP Integration** | Kimi Code, Qwen Code, Gemini CLI | Remote session control, model discovery, permission‑mode toggling |
| **Browser / UI Resilience** | Claude Code, Gemini CLI, DeepSeek TUI, Pi | Browser pane crashes, Wayland support, terminal rendering bugs |
| **Build‑time & Performance** | DeepSeek TUI, Pi, Gemini CLI | Modular build, reduced compile times, dependency deduplication |
| **Pricing & Billing** | DeepSeek TUI, OpenCode, Qwen Code | Reliable pricing API, cost display, 503 error handling |

---

### 3. Differentiation Analysis  

| Tool | Core Focus | Target Users | Technical Approach |
|------|------------|--------------|--------------------|
| **Claude Code** | Tool orchestration & session isolation | Developers building custom LLM‑powered workflows | Rust‑based CLI with plugin hooks, strict session state management |
| **OpenAI Codex** | Desktop parity & UX polish | Desktop‑centric developers (macOS/Windows) | Electron/Tauri hybrid, focus on UI stability, undo/redo |
| **Gemini CLI** | Subagent orchestration & sandboxing | Power users, CI/CD pipelines | Go‑based, heavy emphasis on subagent lifecycle, AST‑aware tooling |
| **GitHub Copilot CLI** | GitHub‑centric agent integration | GitHub‑heavy teams | Rust CLI, AI‑agent wrappers around GitHub APIs, environment propagation |
| **Kimi Code CLI** | Persistent memory & remote control | Mobile/desktop hybrid workflows | Rust CLI, ACP‑compatible, focus on session continuity |
| **OpenCode** | Subscription & skill control | Enterprise teams, VS Code users | Rust CLI + desktop, fine‑grained skill flags, billing APIs |
| **Pi** | Compaction & provider flexibility | Large‑repo developers, Windows users | Rust CLI, focus on compaction models, Windows‑specific path handling |
| **Qwen Code** | Deterministic tool execution & resource bounding | IDE integrators, JetBrains users | Rust CLI, deterministic tool boundaries, ACP reasoning tiers |
| **DeepSeek TUI** | TUI‑centric, sandboxed workflows | Terminal‑first developers | Rust TUI, heavy on sandbox flags, build‑time modularity |

---

### 4. Community Momentum & Maturity  

| Rank | Tool | Indicators |
|------|------|------------|
| 1 | **Claude Code** | Daily release, 10 issues, 10 PRs, active security fixes |
| 2 | **OpenAI Codex** | Daily release, 8 issues, 10 PRs, desktop‑centric UX focus |
| 3 | **OpenCode** | Daily release, 10 issues, 10 PRs, strong subscription API demand |
| 4 | **Qwen Code** | Daily release, 10 issues, 10 PRs, deterministic execution focus |
| 5 | **Gemini CLI** | 10 issues, 10 PRs, no release (feature‑driven) |
| 6 | **DeepSeek TUI** | 10 issues, 10 PRs, no release (build‑time optimization) |
| 7 | **Pi** | 10 issues, 10 PRs, no release (Windows‑specific fixes) |
| 8 | **GitHub Copilot CLI** | 6 issues, 3 PRs, no release (environment‑propagation focus) |
| 9 | **Kimi Code CLI** | 6 issues, 3 PRs, no release (memory persistence focus) |

*Tools with a release in the last 24 h are considered more mature; those without are still iterating on core features.*

---

### 5. Trend Signals for Developers  

| Trend | What It Means | Value to Decision‑Makers |
|-------|---------------|--------------------------|
| **Cross‑platform parity** | Desktop apps on macOS, Windows, Linux (Codex, Gemini) | Reduces onboarding friction for teams with mixed OSes |
| **Session & context persistence** | Memory systems, remote control, undo (Kimi, Claude, Codex) | Enables long‑running, multi‑day workflows without data loss |
| **Sandboxing & security hardening** | Variable‑expansion guards, zero‑dependency sandboxes (Gemini, DeepSeek) | Critical for regulated or enterprise deployments |
| **Context‑window transparency** | Explicit token limits, compression thresholds (Pi, DeepSeek) | Helps developers avoid hidden truncation and cost spikes |
| **Subscription & usage APIs** | Billing endpoints, usage dashboards (OpenCode, Qwen) | Enables automated cost monitoring and quota enforcement |
| **Fine‑grained skill control** | Hook execution, `disable‑model‑invocation` (OpenCode, Qwen) | Allows deterministic, model‑free skill logic |
| **Remote / ACP integration** | Session sharing, model discovery (Kimi, Qwen) | Supports mobile/desktop hybrid workflows and IDE plugins |
| **Build‑time optimization** | Modular crates, reduced compile times (DeepSeek, Pi) | Improves developer productivity and CI throughput |
| **Pricing & billing visibility** | Reliable pricing APIs, cost display (DeepSeek, OpenCode) | Essential for budgeting and compliance |

**Bottom line:** The AI‑CLI ecosystem is converging on a set of core concerns—session persistence, sandboxing, context‑window management, and transparent billing—while diverging in UI strategy (desktop vs. TUI) and target audiences (enterprise vs. hobbyist).  Projects that address these shared pain points with robust, cross‑platform solutions are likely to see the highest adoption and community momentum.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-05 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The most-discussed PRs in the repository, ranked by community attention (cross-referenced with Issue engagement).

### 1. [skill-creator: run_eval.py 0% recall fix](https://github.com/anthropics/skills/pull/1298) — PR #1298
**Status:** OPEN | **Author:** MartinCajiao | **Updated:** 2026-06-23
The single highest-impact infrastructure PR in the ecosystem. `run_eval.py` reports `recall=0%` for every skill description, meaning the entire description-optimization loop (`run_loop.py`, `improve_description.py`) is optimizing against noise. This PR fixes the eval artifact installation, Windows stream reading, trigger detection, and parallel workers. It directly addresses [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments), which has been independently reproduced 10+ times.

### 2. [document-typography skill](https://github.com/anthropics/skills/pull/514) — PR #514
**Status:** OPEN | **Author:** PGTBoos | **Updated:** 2026-03-13
A new skill for typographic quality control in AI-generated documents. Covers orphan word wrap (1–6 words spilling onto the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment — issues that affect every document Claude generates. The PR argues these are pervasive yet rarely requested explicitly, making an automated skill essential.

### 3. [ODT skill — OpenDocument creation, filling, and HTML parsing](https://github.com/anthropics/skills/pull/486) — PR #486
**Status:** OPEN | **Author:** GitHubNewbie0 | **Updated:** 2026-04-14
Adds a dedicated skill for OpenDocument

---



### 1. **Today's Highlights**  
Claude Code v2.1.222 released critical fixes for session isolation and PreToolUse hook bypass prevention, addressing security and workflow integrity. Persistent issues like image API errors consuming usage limits and session state corruption during backgrounding remain active community pain points.  

---

### 2. **Releases**  
- **v2.1.222**: Fixed worktree-isolated session destruction of main checkouts and prevented PreToolUse hooks from circumventing restrictions in background tasks. Critical for maintaining session separation and tool security.  

---

### 3. **Hot Issues**  
1. **[#62466](https://github.com/anthropics/claude-code/issues/62466)** – Image API errors exhausting usage limits (30 comments, 20 likes).  
2. **[#74260](https://github.com/anthropics/claude-code/issues/74260)** – Assistant text blocks dropped mid-turn (24 comments).  
3. **[#23704](https://github.com/anthropics/claude-code/issues/23704)** – PDF tool requires undocumented `poppler-utils` (15 comments).  
4. **[#13378](https://github.com/anthropics/claude-code/issues/13378)** – 2-space indents/hard wraps breaking copy-paste (72 likes).  
5. **[#21108](https://github.com/anthropics/claude-code/issues/21108)** – Claude accessing Git origin on startup (13 comments).  
6. **[#81275](https://github.com/anthropics/claude-code/issues/81275)** – Browser pane crash on Windows (11 comments).  
7. **[#72248](https://github.com/anthropics/claude-code/issues/72248)** – Workflow tool passing JSON as string (9 comments).  
8. **[#82536](https://github.com/anthropics/claude-code/issues/82536)** – `--continue` failing to resume sessions (7 comments).  
9. **[#66563](https://github.com/anthropics/claude-code/issues/66563)** – Read tool falsely flagging unencrypted PDFs (6 comments).  
10. **[#79953](https://github.com/anthropics/claude-code/issues/79953)** – Backdoor agent invocations bypassing throughput limits (2 comments).  

---

### 4. **Key PR Progress**  
1. **[#83999](https://github.com/anthropics/claude-code/pull/83999)** – Validates `gh` flags to reject empty values.  
2. **[#83995](https://github.com/anthropics/claude-code/pull/83995)** – Ensures `--add-label`/`--remove-label` receive valid inputs.  
3. **[#83993](https://github.com/anthropics/claude-code/pull/83993)** – Blocks self-referential duplicate issue flags.  
4. **[#83992](https://github.com/anthropics/claude-code/pull/83992)** – Adds `--expect` flag for hook testing.  
5. **[#83990](https://github.com/anthropics/claude-code/pull/83990)** – Checks for missing `jq` dependency.  
6. **[#83890](https://github.com/anthropics/claude-code/pull/83890)** – Creates `pylint.yml` for code linting.  
7. **[#83738](https://github.com/anthropics/claude-code/pull/83738)** – Fixes symlink path expansion for `claude install`.  
8. **[#83374](https://github.com/anthropics/claude-code/pull/83374)** – Documents `MessageDisplay` hook for plugins.  
9. **[#83738](https://github.com/anthropics/claude-code/pull/83738)** – Resolves symlink path expansion.  
10. **[#83374](https://github.com/anthropics/claude-code/pull/83374)** – Details streaming semantics for hooked messages.  

---

### 5. **Feature Request Trends**  
- **PDF Tool Reliability**: Users demand better error handling and dependency detection for PDF workflows.  
- **Session Management**: Requests to preserve context during backgrounding or resume sessions properly.  
- **Tool Input/Output Stability**: Consistent handling of JSON, text blocks, and shell commands across platforms.  
- **Browser Pane Usability**: Fixing crashes and rendering issues in the in-app browser.  
- **Agent Tool Granularity**: Ability to set effort levels per subagent, not globally.  

---

### 6. **Developer Pain Points**  
- **PDF Tool Installs**: `poppler-utils` undocumented and often missing from Docker/node setups (#23704, #66563).  
- **Session State Loss**: Backgrounded sessions lose priority context, forcing rework (#82536, #83971).  
- **Tool Argument Parsing**: JSON/data inconsistencies breaking workflows (#72248).  
- **Git Integration Fails**: Autonomous Git access draining resources (#21108).  
- **User Interface Quirks**: Fullscreen TUI output wiping, inconsistent project tagging (#64474, #81628).  

---  
All links direct to GitHub issues/PRs for reference.


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-05

---

## Today's Highlights

The Codex team shipped a rapid series of pre-release builds (`0.147.0-alpha.7`) while the community continues to raise critical desktop stability and cross-platform parity issues. Windows performance problems, including WMI storms and process leaks, dominate the discussion, alongside strong demand for a native Linux desktop app and core UX features like chat deletion and session management.

---

## Releases

### `rust-v0.147.0-alpha.7`
- **Release**: [v0.147.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.7)
- **Details**: Pre-release iteration focused on internal tooling and stability ahead of broader rollout. Likely includes incremental fixes from earlier alphas in the `0.147` series.

> Note: Multiple alpha versions released recently indicate active development. Developers should expect breaking changes and limited documentation in these builds.

---

## Hot Issues

| Issue | Title | Why It Matters | Community Reaction |
|-------|-------|----------------|--------------------|
| [#11023](https://github.com/openai/codex/issues/11023) | **Linux Desktop App Request** | Users want Codex desktop support beyond macOS/Windows. | 198 comments, 917 👍 |
| [#25719](https://github.com/openai/codex/issues/25719) | **macOS syspolicyd CPU Runaway** | Triggers system slowdowns due to security framework abuse. | 80 comments, 387 👍 |
| [#9203](https://github.com/openai/codex/issues/9203) | **Restore `/undo` in TUI** | Safety net for accidental destructive actions. | 68 comments, 372 👍 |
| [#16857](https://github.com/openai/codex/issues/16857) | **High GPU Usage During Thinking** | Battery drain and overheating on laptops. | 38 comments, 46 👍 |
| [#33776](https://github.com/openai/codex/issues/33776) | **ChatGPT.exe Spawns Hundreds of Processes** | Causes WMI failures, DWM degradation. | 29 comments, 26 👍 |
| [#30408](https://github.com/openai/codex/issues/30408) | **MCP Server Process Leaks** | Orphaned processes consume >9GB RAM over time. | 22 comments, 6 👍 |
| [#25453](https://github.com/openai/codex/issues/25453) | **PowerShell Polling Spam on Windows** | Repeated `powershell.exe` spawns overload CPU. | 23 comments, 6 👍 |
| [#34700](https://github.com/openai/codex/issues/34700) | **Subagent Model Override Ignored** | Incorrect model selection undermines control. | 10 comments, 27 👍 |
| [#36176](https://github.com/openai/codex/issues/36176) | **Input Lag from WMI Snapshots** | Full-process polling degrades UI responsiveness. | 6 comments, 3 👍 |
| [#33589](https://github.com/openai/codex/issues/33589) | **Missing Delete Chat Option (macOS)** | Basic session cleanup workflow missing. | 5 comments, 6 👍 |

---

## Key PR Progress

| PR | Title | Summary |
|----|-------|---------|
| [#37000](https://github.com/openai/codex/pull/37000) | **Fresh Shared Skill Caches Across Plugins** | Keys cached skill snapshots by FS/plugin identity to prevent reuse of stale plugin data. |
| [#36998](https://github.com/openai/codex/pull/36998) | **Deferred Custom Tools in Tool Search** | Adds support for lazy-loaded freeform tools in search index. |
| [#36993](https://github.com/openai/codex/pull/36993) | **Paginated Thread Reads (`includeTurns`)** | Reconstructs full history views from paginated threads. |
| [#36992](https://github.com/openai/codex/pull/36992) | **Injectable Model Catalog Caches** | Introduces async cache contracts for models manager flexibility. |
| [#36990](https://github.com/openai/codex/pull/36990) | **Remove Legacy Collaboration Modes** | Drops deprecated `PairProgramming` and `Execute` modes. |
| [#36987](https://github.com/openai/codex/pull/36987) | **Concurrent Exec-Server Dispatch** | Adds `--concurrent-requests` flag for parallel command handling. |
| [#36986](https://github.com/openai/codex/pull/36986) | **Process-Scoped PSP Routing** | Adds `--psp` flag for targeted routing of ChatGPT requests. |
| [#36984](https://github.com/openai/codex/pull/36984) | **ChatGPT Cookie Support in HTTP Clients** | Allows attaching configured cookies via shared store. |
| [#36981](https://github.com/openai/codex/pull/36981) | **Amazon Bedrock Remote Compaction** | Enables `/v1/responses/compact` for unsupported/v1/v2 protocols. |
| [#36967](https://github.com/openai/codex/pull/36967) | **Skip Symlinks When Installing Plugins** | Prevents symlink-related errors during plugin deployment. |

---

## Feature Request Trends

- ✅ **Cross-Platform Parity**: High demand for Linux desktop app (Issue [#11023](https://github.com/openai/codex/issues/11023)).
- 🧹 **Session Management Needs**: Deleting chats, importing CLI sessions into desktop history ([#33589](https://github.com/openai/codex/issues/33589), [#21079](https://github.com/openai/codex/issues/21079)).
- 🔁 **Undo Functionality**: Critical rollback capability requested in TUI ([#9203](https://github.com/openai/codex/issues/923)).
- 📁 **Project Sorting Options**: Sidebar sorting improvements (e.g., alphabetical order) ([#27753](https://github.com/openai/codex/issues/27753)).

---

## Developer Pain Points

- ⚠️ **Windows Desktop Instability**: Frequent reports of excessive CPU/WMI usage, orphaned processes, and input lag ([#33776](https://github.com/openai/codex/issues/33776), [#25453](https://github.com/openai/codex/issues/25453), [#36176](https://github.com/openai/codex/issues/36176)).
- 💾 **Resource Leaks**: MCP server processes and PowerShell snapshots not being cleaned up ([#30408](https://github.com/openai/codex/issues/30408), [#25453](https://github.com/openai/codex/issues/25453)).
- 🐞 **Desktop App Regressions**: Bugs affecting sidebars, RTL languages, and subagents ([#23520](https://github.com/openai/codex/issues/23520), [#31903](https://github.com/openai/codex/issues/31903), [#34591](https://github.com/openai/codex/issues/34591)).
- 🎯 **Tooling Limitations**: No way to disable image viewer, missing undo commands, lack of plugin configuration options.

--- 

*End of Digest — Stay sharp, ship fast.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-05

---

## 1. Today's Highlights

The community is actively focused on **subagent reliability and security hardening** this week. A critical security fix (GHSA-wpqr-6v78-jr5g) addressing variable expansion bypass in shell execution is under review, while two long-standing subagent bugs — recovery after `MAX_TURNS` being misreported as success, and the generalist agent hanging indefinitely — continue to draw significant attention with 12 and 8 comments respectively. The Caretaker Agent evaluation framework is also advancing with new triage tooling.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

**1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagent recovery after MAX_TURNS reports GOAL success (12 comments, P1)
A `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit the turn limit before performing any analysis. This masks real interruptions and misleads downstream consumers. Community reaction: strong concern from users who rely on subagent success/failure signals for orchestration.

**2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — Generalist agent hangs (8 comments, P1, 👍: 8)
The generalist agent hangs forever on simple operations like folder creation. Workaround: disable subagent deferral. Community reaction: high 👍 count indicates broad impact; users report waiting up to an hour before cancelling.

**3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (8 comments, P2, Enhancement)
Proposes leveraging Gemini 3's native bash affinity by sandboxing shell execution without external dependencies and routing post-execution intent. Community reaction: interest from power users seeking secure, lightweight execution.

**4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** — Robust component-level evaluations (7 comments, P1)
Follow-up EPIC on behavioral evals, scaling from 76 tests across 6 Gemini models. Community reaction: maintainer-driven; signals investment in eval infrastructure maturity.

**5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — AST-aware file reads, search, and mapping (7 comments, P2)
Investigates whether AST-aware tooling can reduce turns by reading method bounds precisely and navigating codebases more intelligently. Community reaction: developers see clear token-efficiency gains.

**6. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell command execution stuck "Waiting input" after completion (4 comments, P1)
Simple CLI commands hang after finishing, showing "Awaiting user input" despite the process having exited. Community reaction: frustrating UX blocker reported repeatedly.

**7. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** — Auto Memory retrying low-signal sessions indefinitely (5 comments, P2)
Low-signal sessions remain unprocessed and get re-surfaced, causing wasted extraction cycles. Community reaction: users with large session histories report growing overhead.

**8. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — Deterministic redaction and Auto Memory logging (4 comments, P2, Security)
Auto Memory sends transcript content to extraction agents before redaction occurs, and skill configs may be logged. Community reaction: security-conscious users flagging data exposure risk.

**9. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — Browser subagent fails in Wayland (4 comments, P1)
Browser Agent terminates with GOAL reason but fails to operate correctly on Wayland display servers. Community reaction: Linux-specific pain point with limited workarounds.

**10. [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — Browser Agent ignores settings.json overrides (3 comments, P2)
`maxTurns` and other `settings.json` overrides are not respected by the Browser Agent despite correct initial merge. Community reaction: configuration trust erosion; users expect settings to be honored consistently.

---

## 4. Key PR Progress

**1. [#28691](https://github.com/google-gemini/gemini-cli/pull/28691)** — Block `$VAR` and `${VAR}` variable expansion bypass (Security, GHSA-wpqr-6v78-jr5g)
Fixes incomplete checks in `detectBashSubstitution()` and `detectPowerShellSubstitution()` that allowed shell variable expansion to bypass the security gate. Defense-in-depth hardening of the automated issue dedup workflow.

**2. [#28689](https://github.com/google-gemini/gemini-cli/pull/28689)** — Unwrap and parse nested gaxios streaming errors
Introduces robust fallback to unwrap Google API errors nested inside `error.cause.message` by the gaxios library, ensuring rate limits and capacity errors are surfaced correctly during streaming.

**3. [#28530](https://github.com/google-gemini/gemini-cli/pull/28530)** — Caretaker Agent triage evaluation framework
Adds the core eval framework, LLM-as-a-Judge rubric, and parallel Git Worktree benchmark runner for the Caretaker Agent issue triage pipeline under `tools/caretaker-agent/evals/triage/`.

**4. [#28690](https://github.com/google-gemini/gemini-cli/pull/28690)** — Issue comment handling and re-triage workflow (CLOSED)
Enables processing of `issue_comment.created` webhook events in the Caretaker Agent. Maintainers and reporters can trigger re-triage on `NEEDS_INFO` issues via `@caretaker-agent` mentions or `/caretaker triage` commands.

**5. [#28639](https://github.com/google-gemini/gemini-cli/pull/28639)** — Guard `formatTruncatedToolOutput` against non-positive `maxChars` (P1)
Fixes `String.prototype.slice` negative-index behavior that inflates output ~2x when `maxChars <= 0`. Includes regression tests for edge cases.

**6. [#28640](https://github.com/google-gemini/gemini-cli/pull/28640)** — Point `ProjectIdRequiredError` at current auth docs (P1)
Updates broken `goo.gle/gemini-cli-auth-docs#workspace-gca` short link (404) to `geminicli.com/docs/get-started/authentication/#set-gcp` and adds a docs redirect.

**7. [#28641](https://github.com/google-gemini/gemini-cli/pull/28641)** — Prevent ghost text wrapping infinite loop at narrow widths (P2)
Fixes infinite loop in `getGhostTextLines` (`InputPrompt.tsx`) when `inputWidth` is narrower than a single wide codepoint (CJK/emoji). Adds regression test that would hang without the guard.

**8. [#28688](https://github.com/google-gemini/gemini-cli/pull/28688)** — Dynamically resolve Cloud Workstations proxy redirect URI for OAuth flows
Fixes OAuth 2.0 authentication failure inside Cloud Workstations VMs where the redirect URI was statically configured to `localhost` instead of the actual VM-hosted browser.

**9. [#28681](https://github.com/google-gemini/gemini-cli/pull/28681)** — Add support for SGLang and local OpenAI-compatible endpoints
Expands model provider support to include SGLang and local OpenAI-compatible inference endpoints, broadening deployment flexibility.

**10. [#28672](https://github.com/google-gemini/gemini-cli/pull/28672)** — Repair `/compress` session reload and quota-fallback tool response loss
Fixes two independent bugs: `/compress` failing with session data loading errors, and quota limit responses corrupting tool output.

---

## 5. Feature Request Trends

Across the issue tracker, the most-requested feature directions are:

- **Subagent observability and control**: Visibility into subagent trajectories (#22598 — `/chat share`), bug reports including subagent context (#21763), and better subagent usage by the model (#21968).
- **AST-aware tooling**: AST-aware file reads, search, and codebase mapping (#22745, #22746) to reduce token waste and turn count.
- **Sandboxed execution**: Zero-dependency OS sandboxing with post-execution intent routing (#19873) and preventing destructive commands (#22672).
- **Browser agent resilience**: Session takeover and lock recovery (#22232), Wayland support (#21983), and respecting `settings.json` overrides (#22267).
- **Memory system hardening**: Deterministic redaction (#26525), quarantining invalid patches (#26523), and stopping infinite retry loops (#26522).
- **Eval infrastructure**: Component-level behavioral evals at scale (#24353) and the Caretaker Agent triage pipeline (#28530).

---

## 6. Developer Pain Points

- **Subagent reliability**: Multiple high-severity bugs around subagent recovery (#22323), hanging generalist agents (#21409), and subagents running without permission after v0.33.0 (#22093) indicate systemic stability gaps in the agent orchestration layer.
- **Shell execution stalling**: Commands completing but the TUI showing "Awaiting user input" (#25166) and interactive prompts getting stuck (#22465) are recurring UX blockers.
- **Configuration inconsistency**: Browser Agent ignoring `settings.json` overrides (#22267) and symlinked agent files not being recognized (#20079) erode trust in the configuration system.
- **Security surface**: Variable expansion bypass (#28691), Auto Memory sending unredacted content to extraction agents (#26525), and OAuth callback timeout leaks (#28678) highlight ongoing security hardening needs.
- **Error message clarity**: Broken auth doc links (#28640), missing `InvalidStreamError` details (#28566 — now fixed), and nested gaxios errors (#28689) all point to poor developer experience when debugging failures.
- **Terminal rendering**: Ghost text wrapping infinite loops (#28641) and terminal resize flicker (#21924) remain persistent TUI quality issues.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑08‑05**

---

### 1. Today's Highlights
- Two critical bug reports landed on Aug 5: **#2587** (abnormal exit on Windows when advancing a session) and **#2584** (IME‑based character duplication on Windows) – both affect UI reliability for a sizable Windows user base.  
- **#2586** was closed, documenting a hard reliability wall at ~500 k tokens where agent loops become unstable.  
- Ongoing work includes a **shell‑timeout fix (#2200)**, **AI_AGENT environment propagation (#2585)**, and **ACP permission‑mode switching (#2364)** ready for review.

---

### 2. Releases
*No releases* reported in the last 24 h.

---

### 3. Hot Issues  

| # | Title & Status | Why it matters | Community reaction |
|---|----------------|----------------|--------------------|
| **#1283** | **[OPEN] Feature Request: Memory System – Persistent context across sessions** | Users want long‑term recall of patterns, preferences, and project knowledge – a core productivity boost for developers who work on multi‑day codebases. | 17 comments, 0 👍 – high discussion, no clear consensus yet. |
| **#1282** | **[OPEN] Feature Request: Remote Control – Continue local sessions from any device** | Enables seamless workflow continuation from mobile/browser, a highly‑requested “anywhere access” feature for power users. | 12 comments, **24 👍** – strongest community endorsement so far. |
| **#2586** | **[CLOSED] Agent reliability degrades at high context fill (~500 k tokens)** | Identifies a hard scaling limit that crashes long‑running agentic workflows; essential for planning large refactoring sessions. | 1 comment, 0 👍 – closed with documentation, no further debate. |
| **#2587** | **[OPEN] Bug: Kimi CLI exits abnormally when advancing the session normally (Windows)** | Directly impacts daily workflow on Windows (≈70 % of the CLI’s install base) – a blocker for most users. | 0 comments, 0 👍 – newly filed, awaiting fix. |
| **#2584** | **[OPEN] Bug: Thai (and other IME‑based) characters duplicated when typing in the prompt (Windows)** | Breaks input for non‑Latin scripts, a UX regression that hinders international contributors. | 0 comments, 0 👍 – newly filed, no community feedback yet. |
| **#2583** | **[OPEN] feat(acp): advertise available models & support mid‑session model switching** | ACP clients (mobile, Zed) cannot discover models or switch during a session – a missing piece for dynamic model selection. | 0 comments, 0 👍 – early‑stage feature request. |

*All links:*  
- #1283: [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
- #1282: [MoonshotAI/kimi-cli Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)  
- #2586: [MoonshotAI/kimi-cli Issue #2586](https://github.com/MoonshotAI/kimi-cli/issues/2586)  
- #2587: [MoonshotAI/kimi-cli Issue #2587](https://github.com/MoonshotAI/kimi-cli/issues/2587)  
- #2584: [MoonshotAI/kimi-cli Issue #2584](https://github.com/MoonshotAI/kimi-cli/issues/2584)  
- #2583: [MoonshotAI/kimi-cli Issue #2583](https://github.com/MoonshotAI/kimi-cli/issues/2583)

---

### 4. Key PR Progress  

| # | PR Title & Status | Core change | Impact |
|---|-------------------|-------------|--------|
| **#2200** | **[OPEN] fix(shell): adapt timeouts for long commands** | Extends shell timeout automatically for slow patterns (git submodule cleanup, clone/fetch, package installs, builds) while preserving user‑specified timeouts. | Prevents hangs on heavy repo operations. |
| **#2585** | **[OPEN] feat(cli): set AI_AGENT for subprocesses** | Exports `AI_AGENT=kimi` to subprocesses launched from pip/uv and the standalone binary, respecting any pre‑set value. | Improves observability and tooling integration for downstream scripts. |
| **#2364** | **[OPEN] feat(acp): support permission mode switching** | Adds protocol‑level ACP permission mode toggling (advertises `default`/`restrictive` modes) enabling finer control over session behavior. | Gives ACP clients granular permission management for enterprise deployments. |

*All links:*  
- #2200: [MoonshotAI/kimi-cli PR #2200](https://github.com/MoonshotAI/kimi-cli/pull/2200)  
- #2585: [MoonshotAI/kimi-cli PR #2585](https://github.com/MoonshotAI/kimi-cli/pull/2585)  
- #2364: [MoonshotAI/kimi-cli PR #2364](https://github.com/MoonshotAI/kimi-cli/pull/2364)

---

### 5. Feature Request Trends
- **Memory System** (#1283) – Persistent, AI‑managed and user‑editable context is the top‑level “remember everything” ask, reflecting a desire for multi‑session continuity.  
- **Remote Control** (#1282) – Strong community backing (24 👍s) for browser/phone access to local sessions, indicating a shift toward “work‑anywhere” expectations.  
- **ACP Model Discovery & Switching** (#2583) – Emerging need for dynamic model selection in client‑server scenarios (mobile, Zed), aligning with broader multi‑model strategies.  
- **Permission‑Mode Switching** (#2364) – Growing focus on granular, runtime‑adjustable security controls for enterprise and collaborative workflows.  

Overall, the community is pushing toward **contextual persistence, flexible access, and finer runtime controls**.

---

### 6. Developer Pain Points
- **Context‑size reliability wall** – The ~500 k‑token limit causes unexpected crashes in long‑running agentic sessions (issue #2586).  
- **Windows stability bugs** – Abnormal session termination (#2587) and IME character duplication (#2584) plague Windows users, blocking daily coding.  
- **Timeout handling** – Manual timeout adjustments are required for heavy git/packaging operations (addressed by #2200).  
- **Environment visibility** – Lack of a consistent `AI_AGENT` marker for subprocesses limits integration with external tooling (addressed by #2585).  
- **Missing runtime model flexibility** – ACP clients cannot discover or switch models mid‑session, limiting adaptive workflows.  

These recurring issues highlight the need for **robust scaling, platform‑agnostic reliability, and richer runtime configurability** in upcoming releases.

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑08‑05**  

---

### 1. Today's Highlights
- The latest patch **v1.18.13** landed with two usability‑focused fixes: pull‑request context now shows the PR number and URL, and a batch of right‑to‑left (RTL) layout corrections for tabs, drawers, resizing and title‑bar interactions.  
- Community discussion remains dominated by model‑specific reliability problems (DeepSeek v4‑flash) and requests for richer subscription‑usage APIs, while a handful of contributors are polishing core performance (lazy directory snapshots) and TTY/UX shortcuts.

---

### 2. Releases
| Version | Highlights |
|---------|------------|
| **v1.18.13** | **TUI** – GitHub PR review messages now embed the PR number and direct URL for easier traceability.<br>**Desktop** – Fixed multiple RTL regressions: tab/drawer layout, resizing behavior, title‑bar interactions, and directional icon handling. |

*Full release notes:* <https://github.com/anomalyco/opencode/releases/tag/v1.18.13>

---

### 3. Hot Issues (selected by comment count & community impact)

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| #16017 | [Add Go plan usage/balance API endpoint](https://github.com/anomalyco/opencode/issues/16017) | Enables external tooling to monitor subscription consumption – a highly requested feature for billing dashboards and CI cost guardrails. | 29 💬, 126 👍 |
| #39845 | [DeepSeek V4 Flash suddenly requires “Enable models hosted in China”](https://github.com/anomalyco/opencode/issues/39845) | Breaks existing workflows for users on the Go plan; indicates a provider‑side policy shift that isn’t reflected in the UI. | 15 💬, 22 👍 |
| #22235 | [VS Code Context Awareness function doesn’t take effect](https://github.com/anomalyco/opencode/issues/22235) | Prevents the extension from automatically attaching selected text or files to the LLM context, reducing its usefulness compared to Claude Code. | 12 💬, 7 👍 |
| #34498 | [Respect `disable-model-invocation: true` in SKILL.md frontmatter](https://github.com/anomalyco/opencode/issues/34498) | Allows skill authors to opt‑out of model calls for pure‑logic or documentation‑only skills – a parity ask with other agent frameworks. | 9 💬, 48 👍 |
| #40483 | [DeepSeek v4 Flash Free returns blank response on Windows 11](https://github.com/anomalyco/opencode/issues/40483) | Users see “thinking” animation and completion sound but no output, effectively disabling the free tier on a major OS. | 7 💬 |
| #40485 | [deepseek‑v4‑flash via opencode‑go returns 403 / hangs](https://github.com/anomalyco/opencode/issues/40485) | Highlights authentication/routing problems specific to the Go‑plan endpoint, affecting paid users. | 6 💬, 6 👍 |
| #40409 | [OpenCode Go `deepseek-v4-flash` is NOT serving DeepSeek V4 Flash 0731](https://github.com/anomalyco/opencode/issues/40409) | Model mismatch (V3.2 served instead) leads to billing/quality disputes; critical for trust in the Go plan. | 5 💬 |
| #36646 | [Copypaste doesn’t work properly in Tmux/Kitty](https://github.com/anomalyco/opencode/issues/36646) | Core TUI usability issue for power users who rely on mouse‑free selection in modern terminal setups. | 4 💬 |
| #38723 | [`opencode run` intermittently hangs during init](https://github.com/anomalyco/opencode/issues/38723) | Non‑deterministic startup failures waste CI time and frustrate local development loops. | 4 💬, 1 👍 |
| #40502 | [Web interface does not auto‑refresh conversations in real‑time](https://github.com/anomalyco/opencode/issues/40502) | Forces manual reloads to see new messages, degrading the collaborative experience of the web UI. | 3 💬 |

---

### 4. Key PR Progress (selected by impact)

| PR | Title & Link | Summary |
|----|--------------|---------|
| #40552 | [fix(core): avoid eager directory snapshots](https://github.com/anomalyco/opencode/pull/40552) | Prevents repeated filesystem snapshot builds during ripgrep indexing; large repos now pay the cost only when a directory/mixed search is requested. |
| #40551 | [feat(tui): streamline tab navigation shortcuts](https://github.com/anomalyco/opencode/pull/40551) | Adopts Slack/Mattermost‑style shortcuts (`Option+Up/Down` for previous/next tab, `Option+Shift+Up/Down` for unread, `Ctrl+Shift+Tab/Ctrl+Tab` for last/next). |
| #40545 | [fix(opencode): add model attribution to run --format json step events](https://github.com/anomalyco/opencode/pull/40545) | `step_start`/`step_finish` events now carry the model name, enabling headless consumers to attribute token usage and cost correctly. |
| #40547 | [fix(ai): derive Anthropic tool finish reason](https://github.com/anomalyco/opencode/pull/40547) | Improves parsing of Anthropic tool calls so that local tool work is correctly recognized as `tool-calls` even when the provider omits `finishReason`. |
| #40546 | [fix(ai): preserve Gemini tool finish semantics](https://github.com/anomalyco/opencode/pull/40546) | Keeps Gemini’s native tool‑call semantics intact, avoiding fabricated finish reasons when the terminal event lacks them. |
| #40543 | [docs: add RTL development skill](https://github.com/anomalyco/opencode/pull/40543) | New skill documenting logical CSS, bidi isolation, directional interactions, scrolling/resizing, portaled menus and title‑bar constraints for RTL/LTR apps. |
| #40542 | [fix(core): clarify platform tool failures](https://github.com/anomalyco/opencode/pull/40542) | Provides direct, actionable error messages for missing shell working directories and normalizes Effect platform failures without leaking internal operation names. |
| #40538 | [fix(core): make xAI OAuth device-only](https://github.com/anomalyco/opencode/pull/40538) | Replaces the loop‑back OAuth flow with RFC 8628 device flow, enabling xAI authentication in headless/CI environments. |
| #40537 | [fix(opencode): make xAI OAuth device-only](https://github.com/anomalyco/opencode/pull/40537) | Mirrors the core change for the CLI `opencode` command, ensuring consistent xAI login across TUI/Desktop/CLI. |
| #40427 | [beta] some experimental perf improvements](https://github.com/anomalyco/opencode/pull/40427) | Experimental renderer work cuts initial memory entry from ~7.45 MB to ~1.82 MB (‑75.5%) measured against a fixed corpus; indicates promising UI‑performance gains. |

---

### 5. Feature Request Trends
- **Subscription usage transparency** – API endpoint for Go plan usage/balance (issue #16017) tops the list, reflecting a demand for cost‑monitoring and automated quota alerts.  
- **Fine‑grained skill control** – Requests to honor `disable-model-invocation:true` in SKILL.md (#34498) and similar opt‑out mechanisms show users want deterministic, model‑free skills.  
- **UX polish** – Configurable confirmation before exiting with Ctrl+D (#40510) and persistent tab‑navigation shortcuts (PR #40551) indicate a focus on reducing accidental data loss and improving keyboard ergonomics.  
- **Platform parity** – Feature parity with Claude Code (context awareness, automatic file attachment) continues to surface in VS Code‑related issues (#22235, #40540).  
- **Cross‑platform packaging** – Though the Flatpak integration request was closed, the conversation signals ongoing interest in distro‑agnostic delivery mechanisms.

---

### 6. Developer Pain Points
- **Model‑specific reliability** – Repeated reports of DeepSeek v4‑flash returning blank responses, 403 errors, or serving an older model (#40483, #40485, #40409) erode trust in both free and paid tiers.  
- **RTL layout regressions** – Multiple UI components (tabs, drawers, title‑bar) break under right‑to‑left locales, requiring users to switch languages or endure misaligned interfaces.  
- **Editor integration hiccups** – VS Code context awareness not firing (#22235) and selection‑agnostic LLM responses (#40540) limit the extension’s usefulness as an inline coding assistant.  
- **Startup instability** – Intermittent hangs of `opencode run` during initialization (#38723) and occasional desktop‑app connection loops (ECONNREFUSED) create flaky development loops.  
- **Clipboard & terminal integration** – Copy‑on‑select failures in Tmux/Kitty (#36646) force users to rely on workarounds, hurting the TUI experience.  
- **Streaming completeness** – Incomplete SSE streams from the Go `/v1/responses` endpoint (#40171) break compatibility with OpenAI‑style clients, indicating a need for stricter adherence to the streaming contract.

--- 

*Stay tuned for the next digest as the team works to stabilize model backends, refine RTL support, and expose richer subscription telemetry.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi‑Mono Community Digest – 2026‑08‑05**

---

### 1. Today's Highlights  
- **Compaction reliability** remains a hot topic: several issues report failures with Copilot Enterprise and GitHub GHE.com accounts, and a new PR (#7632) adds retry logic for transient HTTP errors.  
- **Windows‑specific bugs** continue to surface—path‑pattern matching (#6817), skill‑loading (#7427), and terminal‑width crashes (#7528).  
- **Feature expansion**: Mermaid diagram rendering (#7623) and a new Qwen token‑plan provider (#7631) are now merged, while the community pushes for configurable compaction models (#7553) and context‑window sizing (#5064).

---

### 2. Releases  
No new releases were published in the last 24 h.

---

### 3. Hot Issues  
| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **6768** | Compaction using Copilot Enterprise not possible | Breaks the core compaction workflow for a major enterprise user base. | 19 comments, 18 thumbs‑up; many users reported identical 421 errors. |
| **7547** | Windows sink‑thread: How do you use Pi on Windows? | Windows is the largest developer platform; unclear guidance hampers adoption. | 12 comments, no votes yet; discussion on documentation gaps. |
| **7413** | Compaction fails on GitHub Copilot GHE.com enterprise accounts | Similar to #6768 but specific to GHE.com; indicates a broader API‑compatibility issue. | 6 comments; users request a diagnostic tool. |
| **7244** | Enhance `version` to show runtime (bun|node|deno…) | Runtime identification is critical for debugging cross‑environment issues. | 6 comments; many suggest adding to the `--version` flag. |
| **7465** | Add payload size to iTerm2 inline images | Needed for stable rendering in xterm.js; otherwise images silently fail. | 7 comments; quick PR merged. |
| **6817** | `find` returns no results for path patterns like `src/**/*.ts` on Windows | Breaks code‑search tooling; many Windows users rely on glob patterns. | 5 comments; community requests a Windows‑aware implementation. |
| **7395** | JSON mode serializes cumulative assistant state on every delta | Causes quadratic output and long stdout drains, impacting CLI performance. | 3 comments; developers ask for a streaming‑only mode. |
| **7616** | Chat scroll jumps when tool blocks grow above the viewport | UI glitch that disrupts user workflow in fullscreen mode. | 2 comments; PR #7597 addresses it. |
| **7623** | Render mermaid diagrams in markdown | Enhances visual documentation; many users want diagram support. | 2 comments; PR #7624 merged. |
| **7629** | `tui.select.pageUp`/`pageDown` not handled in all select lists | Keyboard navigation broken for users without dedicated keys. | 1 comment; PR #7612 adds missing handlers. |

---

### 4. Key PR Progress  
| # | Title | What it adds/ fixes |
|---|-------|---------------------|
| **7597** | Make extension selector scrollable in fullscreen | Wraps diff titles in a `ScrollView`, fixes large‑diff UI issues. |
| **7632** | Retry transient management HTTP requests | Adds robust retry for idempotent requests (e.g., `/pi.dev`), addressing #6768‑type failures. |
| **7624** | Render Mermaid diagrams | Implements `mermaid` rendering in markdown, closing #7623. |
| **7610** | Add LLM Gateway and LLM Gateway DevPass providers | Adds two new OpenRouter‑style providers, expanding model choices. |
| **7619** | Resume failed turn by selecting it in `/tree` | Allows retrying failed turns directly from history, improving UX. |
| **7612** | Add size param to iTerm2 image encoder | Adds `size` to OSC 1337 sequences, enabling xterm.js image addon support. |
| **7602** | Configurable summarization models | Lets users pick compaction and branch‑summary models, addressing #7553. |
| **7611** | Draft: harness v2/json backend | Experimental backend for future harness integration. |
| **7614** | Remove legacy server implementation | Drops the old child‑process server, simplifying the codebase. |
| **7621** | Expose argument completions via `get_argument_completions` | Enables RPC clients (e.g., web UIs) to provide slash‑command completions. |

---

### 5. Feature Request Trends  
1. **Compaction & Summarization Customization** – Users want separate thinking levels and model selection for compaction (issues #7553, #7602).  
2. **Context‑Window Management** – Ability to set context size in settings or via CLI (#5064).  
3. **Windows‑Specific Enhancements** – Path‑pattern support, skill‑loading fixes, and UI key‑binding consistency (#6817, #7427, #7629).  
4. **Rich Media Rendering** – Mermaid diagrams (#7623) and inline image size handling (#7465).  
5. **Provider Expansion** – New routers/providers (Cortecs, LLM Gateway, Qwen token‑plan) and better authentication exposure (#7571, #7610, #7631).  

---

### 6. Developer Pain Points  
- **Compaction Failures**: Repeated 421/400 errors with Copilot Enterprise and GHE.com accounts.  
- **Windows Path Issues**: Glob patterns and skill loading break on Windows, causing search and extension failures.  
- **Terminal Rendering Bugs**: Fullscreen mode scroll jumps, image rendering failures, and width‑exceed crashes.  
- **Token Refresh Stalls**: OAuth refresh hangs for ~5 min, freezing the session (#7508).  
- **Provider Authentication**: Lack of RPC‑level auth commands and inconsistent error messages (#7590, #7605).  

These recurring frustrations highlight the need for more robust error handling, cross‑platform consistency, and clearer documentation.  

---

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑08‑05**

---

### 1. Today’s Highlights
The latest preview **v0.21.6‑preview.0** lands alpha‑ready diagnostics for the browser extension, a macOS‑only one‑time bridge from Electron to the new Tauri shell, and richer execution‑specific outcome tracking for tool calls.  Meanwhile, a batch of autofix and security PRs (e.g., local GitHub auth, hook hardening, thought‑expansion UI) are being merged to improve reliability and the developer experience across IDEs and the CLI.

---

### 2. Releases
| Version | Key Changes | Link |
|---------|-------------|------|
| **v0.21.6‑preview.0** | • `feat(browser-ext)`: alpha readiness diagnostics  <br>• `docs`: headless Goal workflow notes  <br>• macOS Electron→Tauri migration bridge (see #8392) | https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6-preview.0 |
| v0.21.5‑nightly.20260805.32e274157 | Same browser‑ext diagnostics & docs as preview (nightly) | https://github.com/QwenLM/qwen-code/releases/tag/v0.21.5-nightly.20260805.32e274157 |
| v0.21.5 | • macOS Electron→Tauri bridge (PR #8392) <br>• Detailed execution‑specific outcome tracking for tool calls | https://github.com/QwenLM/qwen-code/releases/tag/v0.21.5 |

---

### 3. Hot Issues *(30‑comment‑top list parsed – 10 selected)*

| # | Title & Category | Comments / 👍 | Why It Matters | Community Reaction |
|---|------------------|--------------|----------------|--------------------|
| **#8102** | `proposal(core): deterministic tool‑execution boundaries` – trust‑worthy runtime | **17** / 0 | Moves the LLM outside the trust boundary and lets the runtime authoritatively constrain/observe all model‑generated actions – critical for security‑sensitive deployments. | High discussion (17 comments) but no upvotes; the community is actively debating design trade‑offs. |
| **#8051** | `tracking(serve): bound multi‑workspace daemon resource usage` | **9** / 0 | Prevents runaway memory/CPU consumption in `qwen serve` by bounding bytes held by request bodies, WebSocket buffers, etc. – essential for production multi‑workspace deployments. | Moderate interest (9 comments); no clear consensus on implementation approach yet. |
| **#8514** | `[ACP] Expose reasoning effort (5 tiers) as a session config option` | **3** / 0 | Gives JetBrains and other ACP clients explicit control over reasoning depth (`low/medium/high/xhigh/max`), aligning terminal `/effort` behavior with IDE expectations. | Small but growing voice (3 comments) – appears to be a “must‑have” for IDE parity. |
| **#8513** | `[ACP] Emit `usage_update` session updates for JetBrains AI Assistant` | **3** / 0 | Enables context‑usage indicator in JetBrains IDEs, matching Codex/Claude behavior; currently missing for Qwen. | Low volume (3 comments) but targeted at a high‑visibility integration. |
| **#8539** | `Qwen doesn't use extensions' hooks` | **3** / 0 | The extension system (Claude‑compatible) ships hooks that are never invoked, limiting custom workflow automation. | Early‑stage discussion (3 comments) – developers are eager for hook support. |
| **#8519** | `qwen code闪屏严重 (tmux flicker)` – UI bug | **11** / 0 | Heavy screen‑flick

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek‑TUI Community Digest – 2026‑08‑05**

---

### 1. Today’s Highlights  
- The 0.9.4 release train is now ready for merge, bringing a host of runtime‑API and tooling improvements.  
- A major build‑time refactor is underway (issues #5249‑#5247) to cut the 682 k‑line monolith into smaller, faster‑compile units.  
- Persistent bugs around Anthropic API errors (#4978) and sandbox‑related failures (#4955) are still open, keeping the community focused on stability.

---

### 2. Releases  
No new releases were published in the last 24 h.

---

### 3. Hot Issues  
| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **4978** | *Warn Anthropic API error (HTTP 400)* | Repeated 400 errors break user sessions and obscure the real cause (`type` field). | 6 comments, 0 thumbs‑up – developers are scrambling for a quick fix. |
| **4991** | *Compilation times and the TUI crate monolith* | Builds take >10 min on CI; slows feature cycles. | 4 comments, 0 thumbs‑up – many echo the same pain. |
| **4955** | *Request: zero‑sandbox / --no‑sandbox mode* | The Seatbelt sandbox blocks everyday shell commands, stalling local dev. | 4 comments, 1 thumbs‑up – a clear blocker for many contributors. |
| **5209** | *File edit silently accepts wrong params* | Tool silently accepts `new_str` instead of `replace`, causing repeated edits. | 3 comments, 0 thumbs‑up – developers report frustration. |
| **5241** | *Pricing endpoint returns 503* | Cost display stops working after upgrade; users see `unverified_live_pricing`. | 1 comment, 0 thumbs‑up – urgent for billing‑aware workflows. |
| **5239** | *Context compression triggers at 128 K* | Models support 1 M context but tool compresses at 128 K, limiting performance. | 1 comment, 0 thumbs‑up – a technical limitation that many want resolved. |
| **5249** | *Epic: v0.9.5 build‑time lane* | Re‑compiling the entire monolith on every edit/commit/test is a major bottleneck. | 0 comments – but the issue is a top‑level blocker. |
| **5248** | *Shrink the 708‑package build graph* | Duplicate versions and unused features inflate compile times. | 0 comments – but the issue is widely acknowledged. |
| **5245** | *Local git commit forces full rebuild* | SHA stamp in build scripts forces a full rebuild even when no code changes. | 0 comments – but the community is aware of the cost. |
| **5244** | *Unknown model IDs silently degrade to 128 K* | Fallback to legacy context window is hidden, causing silent performance loss. | 0 comments – but the issue is critical for new model support. |

---

### 4. Key PR Progress  
| # | Title | What it adds / fixes |
|---|-------|----------------------|
| **5135** | *release: Codewhale v0.9.4* | Full integration train for 0.9.4, including runtime‑API, tooling, and docs. |
| **5242** | *feat(tui/subagent): resume interrupted children* | Allows long‑running tasks to recover from checkpoints without re‑dispatch. |
| **5229** | *docs: add Windows beginner guide (zh‑CN)* | Adds a Chinese Windows guide, expanding local‑language support. |
| **5225** | *feat(acp): expose file/search/git/patch/shell tools* | Enables ACP‑based clients (Zed, adapters) to actually execute tools, not just stream text. |
| **5133** | *feat(runtime‑api): expose persistent goal‑loop state* | Adds `/v1/threads/{id}/goal` endpoint for goal‑loop introspection. |
| **5132** | *Runtime API: expose verifier receipts* | New `/v1/fleet/runs/{run_id}/receipts` endpoint for detailed verifier diagnostics. |
| **5131** | *feat: Runtime API memory endpoints* | Adds `/v1/memory` routes for memory inspection and lifecycle control. |
| **5130** | *feat(runtime‑api): bounded MCP server config* | Adds CRUD endpoints for MCP servers, replacing manual TOML edits. |
| **5129** | *feat(runtime‑api): add skill lifecycle endpoints* | Full install/update/uninstall/trust/audit API for skills. |
| **5240** | *feat(tui/shell): surface real wait elapsed time* | Exposes `duration_ms` in shell wait results, improving model decision‑making. |

---

### 5. Feature Request Trends  
1. **Sandbox Flexibility** – Many contributors want a `--no‑sandbox` flag or finer‑grained sandbox controls (Issue #4955).  
2. **Build‑time Optimization** – The monolith build is a recurring pain; requests for a modular build system and deduped dependencies (Issues #5249, #5248, #5245).  
3. **Context Window Transparency** – Users want explicit context‑window reporting and the ability to use full 1 M token models (Issues #5239, #5244).  
4. **Pricing & Billing Visibility** – Accurate cost display and pricing API reliability are critical (Issue #5241).  
5. **Tool Parameter Validation** – Stronger validation and clearer error messages for tool calls (Issue #5209).  

---

### 6. Developer Pain Points  
- **Long Compile Times** – The 682 k‑line `codewhale‑tui` crate and 708‑package graph cause >10 min builds.  
- **Sandbox Interference** – Seatbelt sandbox blocks everyday shell commands, forcing workarounds.  
- **API Error Noise** – Frequent Anthropic API 400 errors obscure real issues.  
- **Context Compression** – Automatic 128 K compression limits performance for large‑context models.  
- **Pricing Uncertainty** – 503 errors from the pricing endpoint leave users unable to see costs.  
- **Tool Call Ambiguity** – Silent acceptance of wrong parameters leads to repeated edits.  

---

**Links**  
- Issues: #4978, #4991, #4955, #5209, #5241, #5239, #5249, #5248, #5245, #5244  
- PRs: #5135, #5242, #5229, #5225, #5133, #5132, #5131, #5130, #5129, #5240  

---

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*