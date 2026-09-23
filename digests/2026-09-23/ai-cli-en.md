# AI CLI Tools Community Digest 2026-09-23

> Generated: 2026-09-23 02:28 UTC | Tools covered: 9

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



# Cross-Tool AI CLI Community Report — 2026-09-23

## 1. Ecosystem Overview

The AI CLI tool landscape is maturing rapidly into a multi-front ecosystem where model-agnostic orchestration, agent reliability, and enterprise readiness define the competitive frontier. Today's activity shows a split between high-release-velocity projects (Claude Code, Codex, Gemini CLI, DeepSeek TUI) shipping model updates and stability fixes, and platform-layer tools (OpenCode, Kimi Code) focusing on integration, migration, and session integrity. Community sentiment is dominated by three tensions: the desire for finer-grained session/agent control versus out-of-the-box simplicity, persistent cross-platform (especially Windows) friction, and growing scrutiny of safety guardrails that produce false positives.

---

## 2. Activity Comparison

| Tool | Hot Issues (today) | PRs Updated (24h) | Release Status |
|---|---|---|---|
| **Claude Code** | 10 listed | 1 (low) | v2.1.280 — active (Opus 5.5 default, mouse support) |
| **OpenAI Codex** | 10 listed | 10 (mostly closed hotfixes) | rust-v0.156.0 + 0.157.0-alpha.9–10 — active |
| **Gemini CLI** | 10 listed | 10 (mix open/closed) | v0.62.0-nightly — active (Flash tiers) |
| **GitHub Copilot CLI** | ~6–10 (partial) | Not enumerated | v1.0.89-0 — active (Opus 5.5 support) |
| **Kimi Code CLI** | ~2 detailed (others referenced) | 8 (migration + fixes) | v1.52.0 — active (Python→TS migration) |
| **OpenCode** | 10 listed | 10 (mostly fixes) | None in 24h — inactive today |
| **Pi** | Not detailed (digest truncated) | Not detailed | v0.87.1 — active (multi-model, Yolo-Auto) |
| **Qwen Code** | 1 detailed (others referenced) | Not detailed | v0.24.4 + v0.24.5-preview.0 — active |
| **DeepSeek TUI / Codewhale** | 10 listed | 10 (refactor + fixes) | v0.10.0 — active (rebrand to Codewhale) |

**Key takeaway:** Codex, Gemini CLI, and DeepSeek TUI show the highest daily PR velocity (10 each). Claude Code had unusually low PR activity (1) despite high issue volume, suggesting either a release cooldown or community energy concentrated on the #27302 Connector debate (387 👍, 253 comments).

---

## 3. Shared Feature Directions

These requirements surface across **three or more** tool communities:

| Direction | Tools Involved | Specific Needs |
|---|---|---|
| **Session lifecycle & stability** | Claude Code, Copilot CLI, Kimi, OpenCode, Gemini | Prevent OOM crashes (#4780), avoid session corruption (#2336), fix resume duplication (#80773), preserve auth state mid-session (#4929), handle worktree exit edge cases (#84209) |
| **Subagent / multi-agent orchestration** | Claude Code, Gemini, DeepSeek TUI, Qwen Code, OpenCode | Durable subagent execution, qu

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

User Safety: safe

---



# Claude Code Community Digest — 2026-09-23

---

## 1. Today's Highlights

Claude Code v2.1.280 ships with **Claude Opus 5.5** as the new default Opus model — 1M context at $4/$20 per Mtok with $0.20/Mtok cache reads — alongside expanded mouse support in fullscreen mode. The community is heavily focused on **Connector account multi-tenancy** (#27302, 253 comments / 387 👍), while a cluster of fresh bug reports around **worktree isolation**, **session lifecycle**, and **desktop update reliability** surfaced today.

---

## 2. Releases

### v2.1.280

- **Claude Opus 5.5 (`claude-opus-5-5`)** is now the default Opus model — 1M context window, priced at $4/$20 per Mtok with $0.20/Mtok cache reads.
- **Mouse support** extended to more fullscreen lists: the mouse wheel now scrolls the `/skills` list, and skill state options in `/plugin` are clickable.

---

## 3. Hot Issues

### #27302 — Support multiple Connector accounts (same connector, different accounts)
**Why it matters:** The single most-requested feature in the repo right now. Enterprises using SSO connectors (Okta, Azure AD, etc.) can't isolate per-user Claude Code sessions under one connector registration. **Reaction:** 387 👍, 253 comments — the highest-engagement issue by a wide margin. ([link](https://github.com/anthropics/claude-code/issues/27302))

### #12953 — Mousewheel scrolls through input history instead of chat history
**Why it matters:** A fundamental UX regression on Windows — the mousewheel in the TUI rewrites its semantics from chat scrolling to input-history navigation, breaking muscle memory. **Reaction:** 25 comments, 21 👍; active discussion with repro steps. ([link](https://github.com/anthropics/claude-code/issues/12953))

### #80773 — `claude://resume` duplicates a session already open as a native Desktop tab
**Why it matters:** Deep-link resume from CLI mints a new Desktop session keyed `local_<cliSessionId>` instead of focusing the existing native tab, so users get duplicate sessions. **Reaction:** 11 comments; affects Desktop ↔ CLI handoff workflows. ([link](https://github.com/anthropics/claude-code/issues/80773))

### #40346 — Programmatic session/thread renaming via hooks or tools
**Why it matters:** Manual `/rename` is clunky for automation. Users working across GitHub issues/PRs want session names to update automatically to reflect context. **Reaction:** 14 👍, 8 comments — steady interest over months. ([link](https://github.com/anthropics/claude-code/issues/40346))

### #80261 — Show usage limits on main screen / persistent usage indicator in desktop app
**Why it matters:** Desktop users have no visibility into plan limits or current usage without digging into settings — a daily-driver blind spot. **Reaction:** 22 👍, 6 comments. ([link](https://github.com/anthropics/claude-code/issues/80261))

### #92601 — `security-guidance` plugin hook fails with ENOENT in local-agent-mode-sessions staging
**Why it matters:** The official `security-guidance` plugin's hook intermittently fails from its per-session staging path, then retries indefinitely — flooding sessions with repeated "Idle." / "(no change)" notifications. **Reaction:** 4 comments; a reliability hazard for plugin users. ([link](https://github.com/anthropics/claude-code/issues/92601))

### #91618 — Windows: isolation-worktree safety check rejects valid worktree due to case-sensitive drive-letter comparison
**Why it matters:** On Windows 11 with Git for Windows, the worktree isolation safety check compares drive letters case-sensitively and refuses valid worktrees — a false-positive block on a common setup. **Reaction:** 4 comments; platform-specific but high-friction. ([link](https://github.com/anthropics/claude-code/issues/91618))

### #85222 — CVP-approved personal account still hit by cyber-safeguard false positives
**Why it matters:** Even accounts that have completed Cybersecurity Verification Program (CVP) approval are getting blocked by cyber-safeguard false positives in Claude Code (Sonnet 5). **Reaction:** 4 comments; undermines trust in the safety guardrail. ([link](https://github.com/anthropics/claude-code/issues/85222))

### #95960 — `reasoning_extraction` misreads a user-defined analysis section as an attempt to extract internal reasoning
**Why it matters:** On Opus 5, the reasoning-extraction filter is over-eager — it flags legitimate user-authored "analysis" sections in responses as attempted reasoning extraction, potentially truncating or altering valid output. **Reaction:** 3 comments; impacts output fidelity for analytical workflows. ([link](https://github.com/anthropics/claude-code/issues/95960))

### #94707 — Desktop app: file links outside the working directory render clickable but dead-end
**Why it matters:** When the assistant emits a markdown file link pointing outside the session's working directory, the Desktop app renders it as clickable but clicking it opens a dead-end "Couldn't find this file" dialog. **Reaction:** 3 comments; affects macOS Desktop Code tabs. ([link](https://github.com/anthropics/claude-code/issues/94707))

---

## 4. Key PR Progress

> **Note:** Only 1 PR was updated in the last 24h — overall PR activity appears low today relative to issue volume.

### #95409 — `mods/agents-md`: the AGENTS.md project-instructions mod (CLOSED)
Adds the `agents-md` mod under `mods/agents-md`, mirroring the layout of `sec-default`, `diff`, and `telemetry` — manifest, `hooks/` module, `tests/` for `claude plugin test`, and a README. The mod reads `AGENTS.md` the same way the engine reads `CLAUDE.md`, gated behind an `instructionFiles` option. This is the implementation backbone for the global `AGENTS.md` configuration feature requested in #95795. ([link](https://github.com/anthropics/claude-code/pull/95409))

---

## 5. Feature Request Trends

Distilling from the open issues, the most-requested feature directions are:

| Direction | Representative Issues |
|---|---|
| **Multi-tenant Connector / account support** | #27302 |
| **Programmatic session lifecycle control** (rename, keepalive, idle tasks) | #40346, #95728, #96211 |
| **Usage & cost visibility** (limits, cache, spend caps) | #80261, #95728, #96214 |
| **Global / user-level AGENTS.md** alongside project-level | #95795, #95409 |
| **Subagent orchestration primitives** (concurrency, cancellation, quiescent stop) | #87874 |
| **Prompt caching for `$.model.complete`** (content blocks + cache_control) | #96214 |
| **Worktree isolation refinement** (case-sensitivity, builtin matching, subagent timing) | #91618, #88312, #96209 |

---

## 6. Developer Pain Points

Recurring frustrations across the issues highlight several systemic friction points:

- **Worktree isolation is over-eager and under-specified.** Three separate issues (#91618, #88312, #96209) report false-positive refusals — Windows drive-letter case sensitivity, string-executing builtins (`eval`, `enable`) matched in argument position, and subagents spawned before `EnterWorktree` having all Bash calls refused afterward. The semantics also "change silently between releases" (#87874).
- **Session lifecycle has rough edges.** `claude://resume` duplicates Desktop sessions (#80773), session history gets orphaned when a session ends inside an `EnterWorktree` worktree without `ExitWorktree` (#84209), and `CronCreate`/`ScheduleWakeup` ticks accelerate to every few seconds after turns (#96215).
- **Desktop update & multi-instance reliability.** With several macOS app instances running side by side, staged updates never install and every instance shows "Update didn't complete" (#96207).
- **Plugin hook reliability.** The `security-guidance` official plugin's hook fails with `ENOENT` and retries indefinitely rather than surfacing once (#92601).
- **Safety guardrail false positives.** CVP-approved accounts still hit cyber-safeguard blocks (#85222), and `reasoning_extraction` misreads legitimate analysis sections (#95960).
- **TUI input semantics conflict.** Mousewheel behavior diverges between chat history and input history on Windows (#12953), and the IDE context indicator `[⧉ In <file>]` flickers on/off repeatedly in VS Code integrated terminal (#96213).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-09-23

## 1. Today's Highlights

Recent releases introduced significant Rust-based enhancements, including **rust-v0.156.0** with an optional fullscreen UI (`/tui`), improved voice conversation controls (F8 toggle, `/voice settings`), and expanded alpha branches (0.157.0‑alpha.9 through 0.157.0‑alpha.10). Concurrently, multiple critical issues surfaced on Windows—particularly around sandbox initialization, file access permissions, and applet setup—that require immediate attention. The ecosystem is actively addressing these pain points while simultaneously expanding model support (GPT‑6 Sol, GPT‑6 Luna) and refining cross‑platform consistency between desktop and mobile experiences.

---

## 2. Releases

| Version | Changes |
|---------|---------|
| **rust‑v0.156.0** | Introduces optional fullscreen UI (`/tui`) with transcript search, mouse selection, and right‑click copying. Voice conversations are now enabled by default with an F8 toggle and a dedicated `/voice settings` picker. <br><https://github.com/openai/codex/releases/tag/rust-v0.156.0> |
| **rust‑v0.157.0‑alpha.9** – **rust‑v0.157.0‑alpha.10** | Incremental alpha releases continuing the Rust rewrite, adding incremental feature polish and stability improvements. <br><https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.9> |

---

## 3. Hot Issues (Top 10)

| # | Issue | Summary | Impact |
|---|-------|---------|--------|
| #25271 | **Windows Chrome URL detection** | Computer Use cannot determine Chrome URL on Windows, even on `chrome://newtab/`. | Blocks browser‑based workflows on Windows. |
| #29343 | **Chrome plugin/site interaction** | Chrome plugin and browser‑related features refuse to interact with certain sites. | Breaks web browsing integration. |
| #40575 | **Self‑evolving agents (RFC)** | Proposal for interactive instruction distillation (`/learn`) and rule metabolism for AGENTS.md. | Long‑term architectural improvement for autonomous agents. |
| #44696 | **Windows sandbox helper failure** | `helper_unknown_error` prevents sandbox initialization on Windows. | Stops sandboxed execution entirely. |
| #47383 | **Core setup blocks approval modes** | Windows 10 desktop app’s Core setup fails, blocking approval flows. | Prevents installation/configuration on Windows. |
| #47412 | **Model misrouting** | `gpt-6-astra` incorrectly served as `gpt-5.6-luna` on Plus accounts. | Wrong model inference leads to degraded quality. |
| #31878 | **Missing ChatGPT projects in desktop** | Projects visible on chatgpt.com disappear from the desktop sidebar (macOS). | Reduces discoverability and usability. |
| #40550 | **Windows app setup access denied** | Setup fails with `helper_failed` / Access Denied despite package status showing OK. | Stalls initial installation on Windows. |
| #29156 | **Desktop custom providers broken** | Custom model providers unusable with existing chats and model picker. | Limits advanced usage scenarios. |
| #44841 | **GPT‑6 Astra removal** | GPT‑6 Astra disappears from Codex after a Plus account update. | Loss of specialized model capability. |

---

## 4. Key PR Progress (Top 10)

| # | PR | Description | Status |
|---|----|-------------|--------|
| #47405 | **Add GPT‑6 Sol & Luna to model catalog** | Backports model entries for `gpt-6-sol` and `gpt-6-luna` to release `0.156`. | Closed (hotfix) |
| #47385 | **Add GPT‑6 Sol & Luna to model catalog** | Same as above – adds catalog entries and migration paths. | Closed (hotfix) |
| #47401 | **Add GPT‑6 Sol & Luna to model catalog** | Backport of #47332 to `0.155.0‑alpha.16`. | Closed (hotfix) |
| #47428 | **Apply inherited environment settings at turn boundaries** | Ensures thread permission updates persist across turn transitions. | Closed |
| #47414 | **Support Shift‑click to extend transcript selections** | Allows extending existing transcript selections with Shift‑click while preserving anchors. | Closed |
| #47413 | **Cache decrypted gateway OAuth secrets** | Single‑entry cache reduces repeated decryption of identical secrets. | Closed |
| #47399 | **Respect tmux mouse settings in fullscreen/overlays** | Probes tmux’s mouse and extended‑keyboard settings to improve fullscreen behavior. | Closed |
| #47397 | **Refresh bundled model metadata & instructions** | Updates model catalogs, expands plan availability, marks `gpt-6-astra` as supporting reasoning‑effort updates. | Closed |
| #47393 | **Retry transient OpenAI file blob uploads** | Improves resilience against 503/timeout failures during file transfers. | Closed |
| #47411 | **Apply shared network policy across embedded startup** | Propagates network restrictions to embedded app‑server processes. | Closed |

---

## 5. Feature Request Trends

- **Model Expansion**: The most frequent request is the integration of newer GPT‑6 variants (`gpt-6-sol`, `gpt-6-luna`) into the codex model catalog, reflecting ongoing effort to bring cutting‑edge models to the platform.
- **Enhanced Computer Use**: Users want richer desktop experiences—fullscreen UI (`/tui`), robust voice controls, and smoother file‑access workflows (especially on Windows).
- **Cross‑Platform Consistency**: Recurring gaps between desktop and mobile behavior (e.g., missing SSH project visibility, archived‑chat deletion artifacts) highlight a priority for parity.
- **Sandbox & Security**: Multiple issues point to fragile sandbox initialization, file‑permission handling, and network‑policy enforcement—critical for secure, reliable execution across platforms.
- **Transcript Integrity**: Several bugs involve accidental destruction of conversation history (context compaction, archival deletions), indicating a demand for more resilient state management.

---

## 6. Developer Pain Points

1. **Windows Sandbox & Permission Failures** – Helper crashes, access‑denied setup, and sandbox‑apply conflicts make deployment on Windows unstable.
2. **Browser Compatibility** – Chrome URL detection and site‑interaction bugs break standard web workflows.
3. **Model Availability** – Missing or misrouted models (e.g., `gpt-6-sol`, `gpt-5.6-sol`) cause silent degradation or incorrect outputs.
4. **Archiving & Deletion Artifacts** – Bulk‑delete operations leave orphaned forks, complicating cleanup and reproducibility.
5. **Transcript Integrity** – Conversation history can be accidentally truncated or corrupted during compaction or archival processes.
6. **Cross‑Platform Parity** – Desktop and mobile UIs diverge on key features (custom providers, sidebar organization, project visibility).

These pain points collectively shape the roadmap priorities for the upcoming stable releases and indicate strong community interest in stabilizing Windows support, improving model reliability, and closing cross‑platform gaps.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-09-23

## Today's Highlights
Version 0.62.0-nightly.20260923.g62364cb20 released with support for new Gemini 3.8 Flash and 3.5 Flash Lite models. Critical fixes include atomic file writes ([#29244](https://github.com/google-gemini/gemini-cli/pull/29244)) and improved MCP configuration handling ([#29446](https://github.com/google-gemini/gemini-cli/pull/29446)). Multiple high-priority agent hangs and subagent issues remain under active investigation.

## Releases
**v0.62.0-nightly.20260923.g62364cb20** introduces two new models:
- **Gemini 3.8 Flash** (`gemini-1.5-flash`) - latest GA model in Flash tier
- **Gemini 3.5 Flash Lite** (`gemini-3.5-flash-lite`) - new Flash Lite tier model

[Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260922.gd5b3e3acc...v0.62.0-nightly.20260923.g62364cb20)

## Hot Issues
1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** - *Subagent recovery after MAX_TURNS reported as GOAL success* (P1, 13 comments): Codebase investigator subagent falsely reports successful completion when hitting turn limits, potentially hiding actual interruptions.

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** - *Leverage model's bash affinity via Zero-Dependency OS Sandboxing* (P2, 9 comments): Proposal to optimize for Gemini's native bash capabilities while maintaining security through sandboxing.

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** - *Generalist agent hangs* (P1, 8 comments): Agent defers indefinitely on simple operations like folder creation. Workaround exists by disabling subagent deferral.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** - *Assess AST-aware file reads, search, and mapping* (P2, 7 comments): Investigation into AST-based tools for more precise code navigation and reduced token consumption.

5. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** - *Add deterministic redaction and reduce Auto Memory logging* (P2, 5 comments): Security concern where sensitive data may be exposed before redaction during memory extraction.

6. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** - *Stop Auto Memory from retrying low-signal sessions indefinitely* (P2, 4 comments): Resource waste from repeated processing attempts on non-valuable sessions.

7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** - *Gemini does not use skills and sub-agents enough* (P2, 6 comments): Anecdotal evidence showing underutilization of custom skills/subagents unless explicitly prompted.

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** - *Gemini CLI encounters 400 error with >128 tools* (P2, 3 comments): Scalability issue limiting tool availability in complex codebases.

9. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** - *Agent should stop/discourage destructive behavior* (P2, 3 comments): Safety concern around git operations and database modifications.

10. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** - *browser subagent fails in wayland* (P1, 4 comments): Browser agent compatibility issue with Wayland display servers.

## Key PR Progress
1. **[#29443](https://github.com/google-gemini/gemini-cli/pull/29443)** - *Feat/gemini 3.8 flash 3.5 flash lite* (Closed): Adds support for new Flash model tiers as highlighted in the release.

2. **[#29244](https://github.com/google-gemini/gemini-cli/pull/29244)** - *fix(core): make tool file writes atomic and serialize same-path writes* (Closed): Resolves race conditions where parallel file operations could silently lose edits.

3. **[#29249](https://github.com/google-gemini/gemini-cli/pull/29249)** - *fix(core): close sibling-prefix bypass in get_internal_docs path guard* (Closed): Security fix preventing path traversal through sibling directories.

4. **[#29448](https://github.com/google-gemini/gemini-cli/pull/29448)** - *fix(auth): prevent infinite auth loop from file contention, headless keyring, and supervisor state drops* (Open): Addresses authentication issues on Windows, WSL, and headless environments.

5. **[#29451](https://github.com/google-gemini/gemini-cli/pull/29451)** - *fix(core): bound tool output size and optimize memory lifecycle in long-running agent loops* (Open): Prevents memory exhaustion in extended agent workflows.

6. **[#29446](https://github.com/google-gemini/gemini-cli/pull/29446)** - *fix(cli): distinguish missing MCP enablement config from malformed JSON* (Open): Ensures MCP server configurations aren't incorrectly enabled due to parsing errors.

7. **[#29452](https://github.com/google-gemini/gemini-cli/pull/29452)** - *fix(cli): decouple tool confirmation from IDE diff RPCs to prevent UI freeze* (Open): Resolves unresponsive prompts in IDE integrated terminals.

8. **[#29447](https://github.com/google-gemini/gemini-cli/pull/29447)** - *fix(sdk): plumb env, timeoutSeconds, and external signal into SdkAgentShell* (Open): Enables proper process control in SDK-based agents.

9. **[#29248](https://github.com/google-gemini/gemini-cli/pull/29248)** - *fix(cli): avoid duplicate history and telemetry after confirmation* (Closed): Eliminates duplicate slash-command entries during confirmations.

10. **[#29247](https://github.com/google-gemini/gemini-cli/pull/29247)** - *fix(core): make isWithinRoot case-insensitive on Windows* (Closed): Fixes path validation failures on Windows due to case sensitivity.

## Feature Request Trends
1. **Enhanced Agent Self-Awareness**: Multiple requests for agents to understand their own CLI operations, hotkeys, and execution context ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

2. **Persistent Task Tracking**: Replace in-memory todo systems with file-based persistence to eliminate context rot ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836)).

3. **AST-Aware Code Navigation**: Interest in leveraging abstract syntax trees for more precise code operations and reduced token usage ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).

4. **Subagent Visibility**: Requests to make subagent trajectories shareable via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).

5. **OS-Native Bash Optimization**: Leveraging Gemini's natural affinity for POSIX tools through sandboxing approaches ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).

## Developer Pain Points
1. **Agent Reliability Issues**: Recurring hangs and false success reports in both generalist and subagents ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)).

2. **Authentication Problems**: Infinite loops and file contention on Windows/WSL systems ([#29448](https://github.com/google-gemini/gemini-cli/pull/29448)).

3. **Security Configuration Bugs**: MCP servers incorrectly enabled due to malformed config files ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#29445](https://github.com/google-gemini/gemini-cli/pull/29445)).

4. **Symlink Support**: Agent files not recognized when stored as symlinks ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).

5. **Tool Limitations**: Hard caps on available tools (>128) causing API errors ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-09-23

Welcome to the daily technical digest for the GitHub Copilot CLI repository. Below is a detailed breakdown of the latest releases, community issues, pull requests, and key trends as of September 23, 2026.

---

### 1. Today's Highlights
The Copilot CLI team shipped `v1.0.89-0`, bringing support for the powerful `claude-opus-5.5` model alongside smoother connector authorization flows. On the community side, session stability—specifically context compaction out-of-memory (OOM) crashes and session wedging in long-running tasks—remains the top developer concern, with multiple high-vote issues highlighting heap exhaustion limits and unbounded retry loops.

---

### 2. Latest Releases

#### **v1.0.89-0** (Pre-release / Latest)
*   **Added:** Support for the `claude-opus-5.5` model.
*   **Improved:** Managed Connector consent progress now displays a copyable authorization URL during connect and reconnect flows.
*   Link: [`v1.0.89-0`](https://github.com/github/copilot-cli/releases/tag/v1.0.89-0)

#### **v1.0.88 / v1.0.88-2**
*   **Added:** Optional OSC 777 terminal notifications for direct Ghostty and WezTerm sessions.
*   **Fixed:** Text selection now works correctly in bottom-anchored dialogs (including login device codes).
*   **Fixed:** Preservation of `/allow-all` flags during managed-settings refresh failures, alongside improved session approval retention for missing paths.
*   Link: [`v1.0.88`](https://github.com/github/copilot-cli/releases/tag/v1.0.88) | [`v1.0.88-2`](https://github.com/github/copilot-cli/releases/tag/v1.0.88-2)

---

### 3. Hot Issues (Top 10)

Here are the ten most critical issues driving community discussion and developer workflow blockages:

#### 1. **[#4438] Skills with `disable-model-invocation: true` are completely unreachable**
*   **Why it matters:** Developers configure skills to be strictly manual-only, but the CLI fails to find or execute them explicitly via the model's `skill()` tool.
*   **Community Reaction:** Highly frustrating for workflow automation; currently holds **9 👍** and 7 comments.
*   [Link to Issue #4438](https://github.com/github/copilot-cli/issues/4438)

#### 2. **[#4780] Session compaction OOMs and crashes permanently (~4.3 GB heap limit)**
*   **Why it matters:** Long-running sessions hit the context-compaction threshold and enter an unrecoverable crash loop (`Allocation failed - JavaScript heap out of memory`), rendering sessions unresumable.
*   **Community Reaction:** Critical blocker for long sessions; holds **3 👍** and active discussion on memory tuning.
*   [Link to Issue #4780](https://github.com/github/copilot-cli/issues/4780)

#### 3. **[#4003] Feature Request: Support custom model endpoints (like VS Code)**
*   **Why it matters:** Developers testing local models or configuring private enterprise endpoints lack the capability to route requests through custom endpoints directly in the CLI.
*   **Community Reaction:** Highly requested feature aligning CLI capabilities with VS Code extensions; holds 3 comments.
*   [Link to Issue #4003](https://github.com/github/copilot-cli/issues/4003)

#### 4. **[#4556] Server-managed `extraKnownMarketplaces` silently fails to register**
*   **Why it matters:** Enterprise configurations fetch marketplace data successfully, but the CLI fails to merge it into the plugin runtime, leaving users with only default marketplaces.
*   **Community Reaction:** Major blocker for enterprise plugin adoption; holds **2 👍**.
*   [Link to Issue #4556](https://github.com/github/copilot-cli/issues/4556)

#### 5. **[#4929] Process-local auth token stops refreshing mid-session**
*   **Why it matters:** Long-running CLI processes lose authentication state permanently. Every prompt fails with auth errors until the process is fully restarted.
*   **Community Reaction:** Severely impacts long session continuity; holds 2 comments.
*   [Link to Issue #4929](https://github.com/github/copilot-cli/issues/4929)

#### 6. **[#4663] Unbounded billed retries on failed compaction calls**
*   **Why it matters:** When a compaction model call fails, the CLI retries the exact same request on every single turn without

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest - September 23, 2026

## Today's Highlights
Kimi Code CLI reached a significant milestone with version 1.52.0, which redirects users to the new TypeScript-based CLI successor while archiving the Python version. The community also addressed critical session corruption bugs and OpenCode Go host compatibility issues.

## Releases
**Version 1.52.0** - *Released*
The latest release introduces a crucial migration path: when users run `uv tool install kimi-cli`, they now automatically get directed to the new TypeScript-based Kimi Code CLI instead of the Python version. This follows the repository archiving (#2659) and tombstoning of the `kimi-code` PyPI package. The release maintains backward compatibility while guiding users toward the new architecture.

## Hot Issues
1. **#2336 - Session corruption under memory pressure** - This bug report reveals a critical stability issue where conversations are lost during memory pressure, causing 400 tool_call response errors on resume. The problem affects Linux users using the `kimi-for-coding` model and could lead to significant productivity loss. The issue has 2 comments but no 👍 reactions, suggesting it's an ongoing concern.

2. **#2653 - OpenCode Go HTTP 400 error** - While not explicitly listed as an issue in this digest, it's referenced in PR #2656, indicating a widespread problem with OpenCode Go hosts rejecting requests without proper `x-opencode-session` headers.

## Key PR Progress
1. **#2667 - IME composition Enter guard** *[CLOSED]* - WebKit emits Enter keydowns with `keyCode === 229` during CJK IME composition, potentially causing incomplete text submission. This fix adds compatibility for international users.

2. **#2666 - CLI migration short-circuit** *[CLOSED]* - Implements the migration strategy by making `kimi-cli` entry points direct users to the new Kimi Code CLI installer.

3. **#2656 - OpenCode session header fix** *[OPEN]* - Detects official OpenCode hosts (`opencode.ai` / `*.opencode.ai`) and sets the required `x-opencode-session` header to prevent HTTP 400 errors.

4. **#2664 - agent-client-protocol upgrade** *[OPEN]* - Updates from v0.8.0 to v0.12.1, likely bringing significant protocol improvements and feature enhancements.

5. **#2665 - ruff linter upgrade** *[OPEN]* - Updates from v0.14.14 to v0.16.8, including new lint rules and performance improvements for code quality assurance.

6. **#2663 - rich library upgrade** *[OPEN]* - Bumps from v14.2.0 to v15.0.0, bringing updated styling capabilities and potentially improved terminal output.

7. **#2662 - FastAPI upgrade** *[OPEN]* - Updates from v0.128.0 to v0.141.1, including enhanced web framework capabilities and performance improvements.

8. **#2653 - OpenCode session fix** - While not listed as an open PR in the latest view, it appears to be related to #2656, suggesting a comprehensive fix for OpenCode Go host compatibility.

## Feature Request Trends
The community is increasingly focused on **cross-platform compatibility** and **stability improvements**. The session corruption bug (#2336) indicates a need for better memory management and persistence mechanisms. Additionally, there's a clear trend toward **standardizing session headers** across different coding platforms, as evidenced by the OpenCode Go host fixes.

## Developer Pain Points
Developers are reporting two primary issues: (1) **Session instability** under memory pressure, which can lead to lost conversations and frustrated workflow, and (2) **Cross-platform inconsistencies**, particularly with IME composition handling on web interfaces.

The dependency updates (#2662, #2663, #2664, #2665) reflect the project's commitment to maintaining modern, secure, and performant tooling, but also indicate a need for careful testing during major version upgrades to avoid breaking existing functionality.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-23

## Today's Highlights
No new releases in the past 24 hours, but significant community activity centered around critical stability and usability improvements. Key focus areas include fixing session management bugs, resolving billing/subscription issues, and addressing crash-related problems affecting Windows and general CLI usage. A number of PRs were merged targeting error handling, model selection consistency, and TUI enhancements.

## Releases
No new releases reported in the last 24 hours.

## Hot Issues

### 🔥 [Issue #10119](https://github.com/anomalyco/opencode/issues/10119) – VSCode Extension Shows "No Data Provider" Error *(CLOSED)*  
**Why it matters:** This issue affects the core functionality of the OpenCode VSCode extension. With 23 comments and 17 upvotes, users experienced complete failure to load the side panel view. The closure suggests resolution or workaround provided.

### 💬 [Issue #25130](https://github.com/anomalyco/opencode/issues/25130) – Unexpected Language Switching During Response *(CLOSED)*  
**Why it matters:** Users reported unpredictable language shifts during interactions with "Big Pickle," indicating potential localization misconfiguration or model behavior inconsistency.

### 📁 [Issue #6479](https://github.com/anomalyco/opencode/issues/6479) – Parent Directory `agents.md` Auto-Inclusion *(CLOSED)*  
**Why it matters:** OpenCode was inadvertently reading parent directory agent definitions without explicit opt-in. Important for scoping project-specific agent instructions correctly.

### ⚙️ [Issue #29757](https://github.com/anomalyco/opencode/issues/29757) – Qwen Outputs JSON Instead of Writing Files *(CLOSED)*  
**Why it matters:** Impacts developer productivity by forcing manual extraction of file contents instead of direct disk output—a regression in tool-call behavior.

### 💰 [Issue #49768](https://github.com/anomalyco/opencode/issues/49768) – Paid Subscription Marked Inactive *(OPEN)*  
**Why it matters:** Critical billing bug preventing access to Go-tier features despite payment confirmation. High business impact; unresolved as of this report.

### 🔁 [Issue #50201](https://github.com/anomalyco/opencode/issues/50201) – Account Lost After Dashboard Migration *(OPEN)*  
**Why it matters:** Users lost access to their workspaces post-migration. Impacts trust and continuity; flagged as open with moderate urgency.

### 🧠 [Issue #50314](https://github.com/anomalyco/opencode/issues/50314) – Stream Aborts on Non-Object SSE Payloads *(CLOSED)*  
**Why it matters:** Compatibility issue with OpenAI-compatible APIs that emit malformed chunks (`data: null`). Was causing full session aborts. Now fixed via PR #50793.

### ❌ [Issue #50766](https://github.com/anomalyco/opencode/issues/50766) – Upstream “Insufficient Funds” Errors *(CLOSED)*  
**Why it matters:** Indicates backend integration issues possibly tied to billing limits or proxy misconfiguration. Resolution likely involved upstream coordination.

### 🖼️ [Issue #38780](https://github.com/anomalyco/opencode/issues/38780) – GUI Fails to Display Sessions Under OneDrive Paths *(CLOSED)*  
**Why it matters:** Affects Windows users using cloud-synced folders. Likely resolved through path normalization fixes.

## Key PR Progress

### ✅ [PR #50801](https://github.com/anomalyco/opencode/pull/50801) – Support Comma-Separated Font Families  
Allow flexible font configuration inputs rather than enforcing single-family constraints. Addresses rendering customization needs.

### 🛠️ [PR #50788](https://github.com/anomalyco/opencode/pull/50788) – Throw Declared API Errors as Proper Error Instances  
Improves debugging experience by ensuring generated client errors conform to standard JS `Error` interface.

### 🧩 [PR #50791](https://github.com/anomalyco/opencode/pull/50791) – Add Tagged Templates & `String.raw` Support in Code Mode  
Enables correct syntax interpretation of advanced JavaScript constructs used in frameworks like SQL query builders.

### 🌊 [PR #50793](https://github.com/anomalyco/opencode/pull/50793) – Ignore Bare Null SSE Frames  
Fixes stream decoding logic so benign empty messages don’t interrupt LLM responses. Directly resolves #50314.

### 🎛️ [PR #50798](https://github.com/anomalyco/opencode/pull/50798) – Show Subagent Model Selection in V2 Tab  
Enhances transparency in multi-agent setups where multiple models are active concurrently.

### 🧭 [PR #50797](https://github.com/anomalyco/opencode/pull/50797) – Preserve Token Usage From AI SDK V2 Providers  
Prevents silent loss of telemetry data when using third-party providers conforming to AI SDK standards.

### 🧹 [PR #50790](https://github.com/anomalyco/opencode/pull/50790) – Order Projects By Recent Activity  
Improves UX in project switcher by surfacing recently used contexts first.

### 🧪 [PR #50685](https://github.com/anomalyco/opencode/pull/50685) – Normalize AI SDK Fragment Boundaries  
Aligns fragmented streaming outputs to avoid premature session termination due to mismatched chunk boundaries.

### 🧾 [PR #50620](https://github.com/anomalyco/opencode/pull/50620) – Restore Shared Model Preferences in Mini Mode  
Ensures consistent model selection persistence between full app and lightweight (`mini`) modes.

### 🔁 [PR #50042](https://github.com/anomalyco/opencode/pull/50042) – Wait for Service Shutdown Before Restart  
Fixes race condition causing intermittent failures during service lifecycle restarts.

## Feature Request Trends

- **Project Organization Improvements**: Requests for better session grouping, naming, and hierarchical organization (e.g., #38525).
- **Provider Integration Requests**: New provider support such as Crof AI (#24636), indicating demand for expanded ecosystem compatibility.
- **Customization Enhancements**: Font flexibility (#50801), spinner personalization (#38599), and UI layout control gaining traction.

## Developer Pain Points

- Frequent unexpected crashes or hangs upon task submission (#38756, #38779).
- Inconsistencies in session state and metadata tracking (#38478, #38770).
- Billing and subscription synchronization failures across dashboards (#49768, #50201).
- Poor terminal state recovery on error/crash (#21277).
- Tool-calling instability and incorrect function invocation (#29757).
- Fragmented documentation and unclear deprecation paths (#38699).

---  
Stay tuned for the next digest covering updates from **2026-09-24+. Join the [OpenCode Discord](https://discord.gg/opencode) or follow us on Twitter [@OpenCodeAI](https://twitter.com/OpenCodeAI) for real-time updates.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest - 2026-09-23

## 1. Today's Highlights

The Pi ecosystem saw significant progress today with the release of **v0.87.1**, introducing the latest frontier models including **Claude Opus 5.5**, **GPT-6 Sol**, and **GPT-6 Luna** through supported providers. Additionally, **Grok 4.7** is now enabled by default. Concurrently, critical stability work addressed a widespread issue where the `defaultProvider`/`defaultModel` configuration was being incorrectly overridden by extension-registered providers during startup—affecting 4 out of 20 initializations. The team also launched the **Yolo-Auto** provider (PR #9934), adding automatic model discovery for YOLO variants over `/v1/chat/completions`.

## 2. Releases

**v0.87.1** (2026-09-23)  
Introduces the newest frontier models: Claude Opus 5.5, GPT-6 Sol, and GPT-6 Luna, along with Grok 4.7 as the default model. These additions expand Pi's

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-09-23

Welcome to the Qwen Code community digest. Below is a structured summary of the latest releases, key issues, pull requests, and community trends as of September 23, 2026.

---

### 1. Today's Highlights
Today marks a significant step forward for Qwen Code with the release of `v0.24.4` and the preview of `v0.24.5`, highlighting the introduction of a monitor tool in system prompt guidance and major strides in the Managed Agent architecture. Key developments also include the merge of hybrid code mode features and ongoing work to refine clipboard usability and session management on Linux and desktop environments.

---

### 2. Releases

*   **v0.24.5-preview.0**: Focuses on core and documentation corrections, specifically addressing what the deferred-tool bridge made stale or untested.
*   **v0.24.4**: Introduces a monitor tool to system prompt guidance and includes critical fixes for the deferred-tool bridge.
*   **desktop-v0.24.4**: Brings fixes to the review process, ensuring unplanned chunks are kept out of coverage and the denominator is read correctly from the plan.
*   **Nightly Builds (`v0.24.4-nightly.20260922`, `v0.24.3-nightly.20260922`)**: Incremental updates containing core fixes and daemon enhancements, including batched workspace updates.

---

### 3. Hot Issues
We have selected 10 noteworthy issues that are shaping the platform's development:

*   **[#12380] [OPEN] Proposal: Define Managed Agent dual-path architecture and staged delivery** (10 comments)
    *   *Why it matters:* This proposal outlines a staged Managed Agent architecture that decouples model inference from tool-environment provisioning, giving sessions durable ownership and recoverable tool executions

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑09‑23**

---

### 1. Today’s Highlights  
- The project shipped **v0.10.0**, rebranding the TUI as the public *Codewhale* product and deprecating the legacy `deepseek-tui` npm package.  
- Activity remains focused on refactoring the growing codebase (mega‑file splits, duplicated MCP stacks, config centralisation) while users push for richer observability (token accounting, pluggable memory) and smoother local development (zero‑sandbox mode, Chinese‑input fixes).  

### 2. Releases  
- **v0.10.0** – Announces *Codewhale* as the official product from Shannon Labs. The `codewhale` command, npm package, and release assets keep the lowercase identifier; the legacy `deepseek-tui` npm package is now deprecated and will receive no further updates.  

### 3. Hot Issues  
| Issue | Why it matters | Community reaction |
|-------|----------------|--------------------|
| [#6011](https://github.com/Hmbown/Codewhale/issues/6011) – **usage & tool diagnostics** (token accounting per‑component/model, cache hit rate, per‑tool sinks, compaction cost, tool‑call error patterns) | Provides the observability foundation needed for cost‑aware agent workflows and performance tuning. | 9 comments, 0 👍 |
| [#5586](https://github.com/Hmbown/Codewhale/issues/5586) – **Decompose mega files** (`lib.rs`, `config.rs`, `client.rs`, `runtime_threads.rs`) | Addresses maintainability pain points by breaking down >18 k‑line modules into focused components. | 8 comments, 0 👍 |
| [#6050](https://github.com/Hmbown/Codewhale/issues/6050) – **Pluggable agent memory** (generic backend seam with causal‑memory / mem0 reference) | Enables users to plug external memory stores, a highly requested extensibility point. | 6 comments, 0 👍 |
| [#6142](https://github.com/Hmbown/Codewhale/issues/6142) – **Reconcile two MCP client stacks** (`tui/src/mcp` vs `crates/mcp`) | Removes duplication and simplifies maintenance of the Model Context Protocol integration. | 5 comments, 0 👍 |
| [#2342](https://github.com/Hmbown/Codewhale/issues/2342) – **Click‑to‑preview files in output** | Improves usability by letting developers open referenced files directly from the TUI output pane. | 5 comments, 0 👍 |
| [#6036](https://github.com/Hmbown/Codewhale/issues/6036) – **“Fleet” and “agent” duplication** | Clarifies the data model to eliminate confusing double‑storage of agents/fleets and mixed role/model metadata. | 5 comments, 0 👍 |
| [#4955](https://github.com/Hmbown/Codewhale/issues/4955) – **Zero‑sandbox / `--no-sandbox` mode** | Addresses a blocker for local development where the Seatbelt sandbox interferes with shell commands. | 5 comments, 1 👍 |
| [#6086](https://github.com/Hmbown/Codewhale/issues/6086) – **Session scratchpad + unified addressing** (workshop outputs, scratchpad files, Agent Mail) | Aims to unify three loosely coupled stores into a coherent scratchpad experience. | 4 comments, 0 👍 |
| [#5915](https://github.com/Hmbown/Codewhale/issues/5915) – **Fleet models hierarchy** (provider → model → shortlist → role) | Introduces a configurable shortlist that drives sub‑agent model selection and role assignment. | 4 comments, 0 👍 |
| [#5479](https://github.com/Hmbown/Codewhale/issues/5479) – **First‑class sub‑agent & workflow management** (live list, per‑agent status/tokens, focus, stop, history) | Lays the groundwork for observable, controllable multi‑agent workflows directly in the TUI. | 3 comments, 0 👍 |

### 4. Key PR Progress  
| PR | Summary |
|----|---------|
| [#6408](https://github.com/Hmbown/Codewhale/pull/6408) – **feat(providers): add Yolo‑Auto compatible host** | Registers Yolo‑Auto as a data‑driven OpenAI‑compatible endpoint; no new `ProviderKind` needed. |
| [#6407](https://github.com/Hmbown/Codewhale/pull/6407) – **Integration: website wave 1 + 0.10.1 CI/automation slices** | Prepares the new `codewhale.net` site (CSS split, GPUI role tokens) and CI automation for the upcoming 0.10.1 release. |
| [#6406](https://github.com/Hmbown/Codewhale/pull/6406) – **fix(tui): stop resume and fork from duplicating threads/sessions** | Resolves two identity bugs that caused duplicate threads when resuming or forking conversations. |
| [#6405](https://github.com/Hmbown/Codewhale/pull/6405) – **feat(web): move docs/work onto the dictionary spine** | Consolidates `docs/work` translations under `getDocsWork`, eliminating duplicate copies for EN/ZH. |
| [#6404](https://github.com/Hmbown/Codewhale/pull/6404) – **fix(api): expose user‑defined `[providers.<name>]` routes to native clients** | Makes custom provider entries visible in `/v1/providers` so native pickers can list them. |
| [#6403](https://github.com/Hmbown/Codewhale/pull/6403) – **test(web): lower the isZh ceiling from 28 to 18** | Adjusts the i18n test gate after nine files stopped branching on `isZh`, reducing flaky test risk. |
| [#6402](https://github.com/Hmbown/Codewhale/pull/6402) – **refactor(tui): remove unused feature stages and blanket allow** | Strips dead‑code allowance and removes `Stage::Deprecated`/`Stage::Removed` from `features.rs`. |
| [#6400](https://github.com/Hmbown/Codewhale/pull/6400) – **fix(config): ingest namespaced model‑only catalog entries** | Ensures models defined only under `catalog.models` are included in the offering list alongside provider‑owned rows. |
| [#6401](https://github.com/Hmbown/Codewhale/pull/6401) – **docs(zh‑CN): translate the local browser client guide** | Adds the Simplified Chinese version of `WEB.md` with reciprocal navigation and sync metadata. |
| [#6399](https://github.com/Hmbown/Codewhale/pull/6399) – **ci(contract): re‑pin the runtime‑contract budget for eager `load_skill`** | Fixes the CI lint failure by updating the contract budget after the `load_skill` surface was eagerly loaded. |

### 5. Feature Request Trends  
- **Observability & cost control**: token‑level accounting, per‑model/cache metrics, tool‑call error patterns (issue #6011).  
- **Memory extensibility**: pluggable agent memory backends (causal‑memory, mem0) and unified session scratchpad (issues #6050, #6086).  
- **Agent/fleet workflow**: clearer fleet‑agent hierarchy, short‑list model selection, live sub‑agent panels with status/token tracking (issues #5915, #5479, #6036).  
- **Local development ergonomics**: zero‑sandbox mode, Chinese‑input method support, click‑to‑preview file outputs (issues #4955, #2323, #2342).  
- **Protocol & integration updates**: MCP 2026‑07‑28 spec conformity, provider‑neutral vendor selection, exposing custom provider routes (issues #6280, #6029, #6404).  
- **Performance & reliability**: runtime performance gates, structured concurrency for fan‑out, wake‑driven event loop (issues #6193, #6148, #6146).  

### 6. Developer Pain Points  
- **Codebase bloat**: mega‑files (`lib.rs`, `config.rs`, `client.rs`) exceeding 10 k lines, duplicated MCP stacks, and split configuration sources make navigation and refactoring cumbersome.  
- **Insufficient runtime diagnostics**: lack of built‑in performance benchmarks or speed gates forces reliance on external profiling; developers request runtime contracts and budget checks.  
- **Sandbox friction**: the Seatbelt sandbox repeatedly blocks everyday shell commands on local machines, prompting a demand for a `--no-sandbox` escape hatch.  
- **Input‑locale issues**: Chinese IME interactions break the command line (visible pinyin in wrong fields, missing hint hiding), affecting a sizable user base.  
- **Config fragmentation**: settings live both in `tui/src/config*` and `crates/config`, leading to confusion about the single source of truth and unnecessary duplication.  
- **Event‑loop polling**: the UI event loop still uses `try_recv` with adaptive timeouts, causing unnecessary CPU wake‑ups and input latency concerns.  

---  

*All links point to the corresponding GitHub items in the Hmbown/Codewhale repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*