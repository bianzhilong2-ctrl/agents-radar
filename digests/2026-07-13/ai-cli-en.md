# AI CLI Tools Community Digest 2026-07-13

> Generated: 2026-07-13 01:52 UTC | Tools covered: 9

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

**Cross‑Tool Comparison Report – AI CLI Ecosystem (2026‑07‑13)**  

---

### 1. Ecosystem Overview
The AI CLI space is converging on richer IDE integrations and workspace‑aware daemon models, but each vendor is still wrestling with cross‑platform stability and the trade‑off between powerful sub‑agent automation and predictable security controls.  Observability, configuration isolation, and cost‑aware execution are becoming “must‑have” features as the tools mature beyond simple REPL usage.  Community activity is highly fragmented, with some projects (Gemini, Qwen, OpenCode) delivering frequent releases and dozens of PRs, while others (Kimi, DeepSeek) focus on niche reliability fixes and platform‑specific hardening.

---

### 2. Activity Comparison  

| Tool | Issues (Hot list) | PRs (Listed) | Release status (last 24 h) |
|------|-------------------|--------------|----------------------------|
| **Claude Code** | 10 | 3 | None |
| **DeepSeek TUI** | 3 | 6 | None |
| **Gemini CLI** | 10 | 10 | 1 (v0.52.0‑nightly.20260713) |
| **GitHub Copilot CLI** | 10 | 1 | None |
| **Kimi Code CLI** | 1 | 2 | None |
| **OpenAI Codex** | 10 | 4 | None |
| **OpenCode** | 10 | 10 | None (artifact‑only) |
| **Pi** | 10 | 9 | None |
| **Qwen Code** | 10 | 10 | None |

*All counts reflect only the issues and PRs highlighted in today’s digests; broader back‑log activity is not captured here.*

---

### 3. Shared Feature Directions  

| Emerging requirement | Representative tools |
|---------------------|----------------------|
| **Robust TUI rendering & terminal handling** (word‑wrap, color depth, soft‑wrap, Ctrl‑C hygiene) | Claude Code, GitHub Copilot CLI, Pi, OpenCode, Qwen Code |
| **Cross‑platform sandbox / installer stability** (Windows SDK crashes, permission bugs, WSL2 support) | Claude Code, OpenAI Codex, Kimi Code CLI, Pi |
| **Enhanced authentication & MCP integration** (OAuth bridge, PAT auth, schema sanitisation) | Claude Code, OpenAI Codex, GitHub Copilot CLI, DeepSeek TUI |
| **Configuration isolation & discovery** (Git‑aware config, environment variable propagation, per‑workspace settings) | OpenCode, Qwen Code, Claude Code, Gemini CLI |
| **Sub‑agent & model reliability** (bias detection, advisor tool limits, model selection granularity) | Claude Code, OpenAI Codex, Gemini CLI |
| **Session hygiene & memory management** (history bloat, compaction, deterministic redaction) | GitHub Copilot CLI, Gemini CLI, OpenCode, Pi |
| **Pricing & cost‑visibility** (cache‑write token accounting, provider‑aware scoring) | Gemini CLI, DeepSeek TUI |
| **Accessibility & localisation** (RTL text, Korean locale, dictation languages) | Claude Code, Kimi Code CLI, OpenCode, Pi |
| **Enterprise‑grade deployment** (non‑MS‑Store installers, multi‑workspace daemons) | OpenAI Codex, Qwen Code, Claude Code |
| **Observability & diagnostics** (TUI health‑checks, event‑table pruning) | GitHub Copilot CLI, Pi, OpenCode |

---

### 4. Differentiation Analysis  

| Dimension | Leading tools | Core differentiators | Typical user‑base |
|-----------|----------------|----------------------|-------------------|
| **IDE‑centric workflow** | **Claude Code**, **OpenCode** | Heavy VS Code/IDE integration, project‑file watch, built‑in “codemode” tools, layout/per‑window state preservation | Professional developers using modern IDEs for code‑completion and agentic editing |
| **Enterprise & scale** | **OpenAI Codex**, **Qwen Code** | Multi‑workspace daemon, extensive logging, enterprise‑friendly installers, strict PAT/MCP auth, high‑throughput I/O handling | DevOps, CI‑automation, large‑team codebases |
| **Evaluation & reliability** | **Gemini CLI**, **Pi** | Component‑level evals, robust sub‑agent sandbox, configurable retry/redaction policies, thorough CVE patching | Data‑science teams, quality‑assurance engineers |
| **Platform‑specific hardening** | **Kimi Code CLI**, **DeepSeek TUI**, **Pi** | Windows binary versioning, encoding‑tolerant workers, NetBSD/FreeBSD build support | Users on non‑canonical OSes or constrained environments |
| **Creative‑fiction & multimodal UI** | **Claude Code**, **Pi** | Advanced language model safety filters, image‑block rendering, thinking‑tag UI, RTL support | Content creators, designers, multilingual developers |
| **Open‑source extensibility** | **Pi**, **Qwen Code** | Rich plugin ecosystem, safe session‑replacement API, extension activation policies | Community plugin authors, research prototypes |
| **Cost‑tracking & financial ops** | **Gemini CLI**, **DeepSeek TUI** | Provider‑aware offline scoring, cache‑write token pricing, per‑model token budgeting | FinOps, platform engineers monitoring cloud spend |
| **CLI‑first, lightweight** | **GitHub Copilot CLI**, **Kimi Code CLI** | Minimal installation, focus on native terminal interaction, portable configuration | Power‑users, CI scripts, developers preferring a pure‑CLI experience |

---

### 5. Community Momentum & Maturity  

| Tier | Tools | Why they rank there |
|------|-------|-------------------|
| **High‑velocity** | **Gemini CLI**, **OpenCode**, **Qwen Code** | Consistently 10+ PRs, multiple releases (Gemini), many open issues, rapid iteration on core features (daemon channels, config discovery) |
| **Stable‑active** | **Claude Code**, **OpenAI Codex**, **Pi** | 1–4 PRs per day, clear focus on bug‑fixes (sandbox crashes, permission bugs), strong community reporting on stability |
| **Niche / emerging** | **Kimi Code CLI**, **DeepSeek TUI** | Smaller PR cadence but targeted improvements (encoding, Windows binaries) and a tiny issue backlog that suggests a tight‑knit user base |
| **Maturity indicator** | **Gemini CLI** (first nightly release) | Demonstrates a continuous‑delivery model; the others are still largely “artifact‑only” releases, hinting at earlier stages of build pipelines. |

---

### 6. Trend Signals  

* **Multi‑workspace & daemon orchestration** – Qwen’s RFC for a single `qwen serve` process handling multiple workspaces and OpenAI’s enterprise installer request illustrate a shift toward workspace‑aware coordination.  
* **TUI/UX convergence** – Word‑wrap, color depth, soft‑wrap, and clipboard‑safety fixes appear across Claude, Copilot, Pi and Open

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

## 1. Top Skills Ranking

**1. skill-creator ecosystem fixes (Dominant theme)**
- **PR #1298** - Critical bug: `run_eval.py` reports 0% recall for all skills, breaking description optimization
- **PR #1099** - Windows crash in `run_eval.py` subprocess pipe reading
- **PR #1050** - Windows compatibility issues with `claude.cmd` pathing
- **PR #1323** - Trigger detection failure causing 0% recall on all queries
- **PR #1261** - Parallel evaluation contamination across user projects
- *Discussion*: Multiple independent reproductions (#556), 10+ communities affected, critical infrastructure issue
- *Status*: All OPEN (urgent bug fixes)

**2. Self-audit & Quality Assurance**
- **PR #1367** - "Self-audit" skill with mechanical verification + four-dimension reasoning quality gate
- *Functionality*: Step 0 mechanical file verification → priority-ordered reasoning audit across any tech stack
- *Discussion*: New quality control approach addressing gaps in current skill evaluation
- *Status*: OPEN

**3. Specialized Knowledge Skills**
- **PR #1302** - `color-expert` skill covering color systems, spaces, and usage guidelines
- **PR #723** - `testing-patterns` skill covering unit testing, React component testing, and testing philosophy
- *Discussion*: Expanding Claude's domain expertise into technical specialties
- *Status*: OPEN

**4. Documentation & Process Skills**
- **PR #514** - `document-typography` skill preventing orphan words, widow paragraphs, and numbering issues
- **PR #83** - Dual skill: `skill-quality-analyzer` and `skill-security-analyzer` for marketplace meta-analysis
- *Discussion*: Professional document quality and skill governance
- *Status*: OPEN

## 2. Community Demand Trends

**Emerging Priority Areas:**

1. **Quality & Reliability Enhancement**
   - Multiple quality gate proposals (#1385, #1367)
   - Security analysis tools (#83)
   - Cross-cutting infrastructure fixes (skill-creator ecosystem)

2. **Technical Documentation & Output Quality**
   - Typographic control (#514)
   - Documentation (CONTRIBUTING.md) (#509)
   - PDF/DOCX skill bug fixes (#538, #541)

3. **Platform Integration & Compatibility**
   - Windows compatibility fixes (#1050, #1099, #1061, #362)
   - YAML parsing improvements (#361, #539)
   - Command isolation fixes (#1261)

4. **Specialized Domain Expertise**
   - Data analytics (SAP-RPT-1-OSS) (#181)
   - Testing frameworks (#723)
   - Color expertise (#1302)
   - Agent memory management (#1329)

## 3. High-Potential Pending Skills

**Likely to Land Soon:**

1. **Quality Assurance Pipeline**
   - **#1385** - Reasoning Quality Gate Pipeline (Pre-task Calibration → Adversarial Review → Delivery Verification)
   - *Potential*: Addresses fundamental reliability concerns across all skills

2. **Agent Memory Management**
   - **#1329** - `compact-memory` skill for symbolic agent state notation
   - *Potential*: Solves context management for long-running agents

3. **Professional Document Enhancement**
   - **#514** - `document-typography` skill
   - *Potential*: Addresses pervasive AI-generated document quality issues

4. **Marketplace Quality Control**
   - **#83** - Skill quality/security analyzers
   - *Potential*: Addresses trust boundary concerns (#492)

5. **Color & Design Expertise**
   - **#1302** - `color-expert` skill
   - *Potential*: Expanding Claude's creative/analytical capabilities

## 4. Skills Ecosystem Insight

The community is intensely focused on **fixing the skill evaluation infrastructure** while expanding into specialized domains—concurrently addressing critical bugs that break the entire optimization ecosystem and building new capabilities in quality assurance, technical documentation, and specialized knowledge domains.

---

# Claude Code Community Digest: 2026-07-13

### 1. Today's Highlights
The community is currently navigating a series of critical regressions following recent updates, specifically concerning the **Cowork sandbox** and **model stability**. High-engagement issues suggest significant friction in Windows environments and challenges with the `claude-fable-5` model's handling of large context windows.

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Hot Issues
*   **[#67609] Advisor tool unavailable on `claude-fable-5` (>100K tokens)](https://github.com/anthropics/claude-code/issues/67609)**: A high-impact bug where the advisor tool fails once conversation length exceeds 100K tokens. (38 👍)
*   **[#43113] TUI: Support for terminal-managed word wrapping](https://github.com/anthropics/claude-code/issues/43113)**: A highly requested enhancement to stop hard-coding newlines in the TUI to improve readability. (51 👍)
*   **[#64654] MCP: `github` plugin fails with malformed JSON-RPC payload](https://github.com/anthropics/claude-code/issues/64654)**: A critical interoperability bug in the Model Context Protocol layer. (41 👍)
*   **[#15921] VSCode: `.claude/settings.local.json` permissions ignored on Windows](https://github.com/anthropics/claude-code/issues/15921)**: A core configuration bug affecting Windows users' ability to control tool permissions. (28 👍)
*   **[#76254] Cowork: Regression in trusted-folder validation depth](https://github.com/anthropics/claude-code/issues/76254)**: An update-related regression where deep directory structures are being incorrectly rejected.
*   **[#76094] Cowork: Windows SDK install crash (Regression)](https://github.com/anthropics/claude-code/issues/76094)**: A regression in version 2.1.202 causing VM guest crashes during SDK installation.
*   **[#77027] Model: Content Policy Violation on creative fiction](https://github.com/anthropics/claude-code/issues/77027)**: Users reporting false positives in safety filters when generating narrative content.
*   **[#52477] Model: Unintended gender bias in user memory](https://github.com/anthropics/claude-code/issues/52477)**: A significant model behavior issue regarding pronoun overrides in long-term memory.
*   **[#77032] TUI: VS Code terminals capped to 256-color](https://github.com/anthropics/claude-code/issues/77032)**: A feature-gated issue causing broken custom themes in integrated terminals.
*   **[#75196] IDE: RTL text rendering failure in VS Code](https://github.com/anthropics/claude-code/issues/75196)**: Accessibility/UI issue where Persian/Arabic/Hebrew text renders incorrectly in the chat panel.

### 4. Key PR Progress
*   **[#76986] Fix: Preserve labels when auto-closing duplicate issues](https://github.com/anthropics/claude-code/pull/76986)**: Prevents the automation from wiping existing labels when closing duplicates.
*   **[#76985] Fix: Multi-line description support in agent validation](https://github.com/anthropics/claude-code/pull/76985)**: Fixes a script that was only capturing the first line of agent descriptions.
*   **[#15165] Docs: Update README.md links](https://github.com/anthropics/claude-code/pull/15165)**: Maintenance update for documentation integrity.

### 5. Feature Request Trends
*   **UI/UX Parity & Polish:** Significant demand for feature parity between the Claude Desktop and VS Code extensions, specifically regarding status indicators (effort, usage, model info).
*   **Agent & Session Management:** Requests for improved visibility in `claude agents` (FleetView), including per-session repository labeling and improved directory grouping.
*   **Accessibility & Localization:** Growing interest in RTL (Right-to-Left) language support and expanded dictation/microphone languages (e.g., Portuguese).
*   **TUI Customization:** Developers are requesting more control over terminal behavior, specifically regarding "soft" word wrapping and true color support.

### 6. Developer Pain Points
*   **Platform Disparity:** Windows users are disproportionately affected by permission bugs, sandbox crashes, and terminal color limitations.
*   **Model Unreliability:** Users are reporting "silent" downgrades in model quality/version and erratic API error triggers (e.g., blocking simple arithmetic or creative fiction).
*   **Security vs. Usability:** A recurring tension exists between the "Auto-mode" permission classifier (which sometimes blocks safe commands) and the security risks of "catch-all" code recommendations that expose sensitive files like `.env`.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑07‑13**

---

### 1. **Today's Highlights**
- The Codex CLI team squashed a massive SSD‑wear issue (Issue #28224) that logged ~640 TB of feedback data annually.  
- Several high‑impact bugs affecting Windows stability and sub‑agent configuration went into review this week, and a new “enterprise‑friendly” installer is on the roadmap (Issue #21538).  
- A dismissive PR (#32668) rolled back a recent auto‑review prompt change, signaling a cautious stability cycle for new UI features.

---

### 2. **Releases**
No new releases were published in the last 24 h.

---

### 3. **Hot Issues**

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **28224** | *Codex SQLite feedback logs can write ~640 TB/year and rapidly consume SSD endurance* | Massive disk write volume had the potential to shorten SSD life and inflate infrastructure costs. | 151 comments, 434 👍 – Issue closed after three PRs replaced the logging strategy. |
| **31814** | *GPT‑5.6 Sol cannot specify sub‑agent models* | Forced all sub‑agents to inherit Sol’sretted model, breaking custom agent design patterns. | 56 comments, 122 👍 – Urgently impacting teams using mixed‑model workflows. |
| **18960** | *Frequent reconnect loop in Codex App* | Persistent websocket loss broke real‑time streaming for Pro subscribers. | 51 comments, 39 👍 – High‑visibility feature disruption. |
| **20214** | *Codex App frequently freezes/stutters on Windows 11 Pro* | Sluggish UI degraded developer productivity; appeared on the most used Windows desktop. | 34 comments, 48 👍 – Repeatedly reported다f 24 h. |
| **21538** | *Windows Codex app should provide a non‑Microsoft Store installer* | Enterprise environments block Store app deployments; a direct installer is critical for broad adoption. | 10 comments, 20 👍 – Strong demand from 10 +Trade‑level users. |
| **30178** | *Codex Desktop in‑app Browser crashes the main app during webview navigation* | Browser internal crash -> full desktop termination. | 10 comments, 0 👍 – New crash, no resolved PR path yet. |
| **32640** | *Built‑in `wait` tool capped at ~50 s causes massive token burn* | Interrupted long‑waits trigger repeated token‑expensive re‑invocations of the model. | 4 comments, 0 👍 – New performance‑critical bug. |
| **32412** | *Codex IDE doesn’t work with GPT 5.6 models* | IDE integration stopped showing new GPT‑5.6 कोर्ट afforded to premium users. | 2 comments,☆ – Low volume but high impact. |
| **32653** | *Codex Desktop crashes entire application due to missing tool call result* | Missing response from a tool call takes down the whole app, collapsing the user session. | 3 comments, 0 👍 – Immediate crash‑report. |
| **32331** | *Windows ChatGPT Codex triggers Norton 360 Behavioral Protection* | Antivirus mistakenly kills Codex on thread open; blocks usage on Windows workstations. | 2 comments, 2 👍 – Security barrier ingore; user outcry. |

**Links** – All direct to GitHub issue pages:  
&nbsp;*#28224* [https://github.com/openai/codex/issues/28224],  
&nbsp;*#31814* [https://github.com/openai/codex/issues/31814], etc.

---

### 4. **Key PR Progress**

| # | Title | Described feature / fix | Status |
|.breakpoints|
| **32668** | Revert “Update autoIVEN pending” | Undid a recent auto‑review prompt change that caused UI instability. | Closed |
| **29898** | Preserve PAT auth against host token injection | Secured PAT usage by rejecting host‑supplied tokens during login. | Closed |
| **30504** | feat(tui): edit previous prompts using session forks | Allows thread‑branching edit of older prompts without destructive rollback. | Open |
| **32628** | Improve composer completion target resolution | Refines `@`/`$` target suggestions in the composer for a smoother workflow. | Closed |

PR links:  
*#32668* [https://github.com/openai/codex/pull/32668]  
*#29898* [https://github.com/openai/codex/pull/29898]  
*#30504* [https://github.com/openai/codex/pull/30504]  
*#32628* [https IMDb등l=en#32628]

---

### 5. **Feature Request Trends**

| Trend | Representative Issue | Rationale |
|-------|------------------------|-----------|
| **Enterprise Windows Installers** | #21538 | Store blockers create a hard deployment wall. |
| **Granular admission of Sub‑Agent Models** | #31814 / #31097 | Developers need fine‑tuned model composition for multi‑agent pipelines. |
| **Custom Agent Overlays / AGENTS.local** | #28739 | Request for local‑overrides and file‑attribution similar to Claude/Claude Code. |
| **Enhanced In‑App Browser Isolation** | #20678 / #30178 | Browser backend crashes & connectivity complications. |
| **Remote Control  > stability & enrollment** | #31387 / #32164 / #31973 | Persistent “reconnecting…” or enrollment failures hinder hybrid‑developer workflows. |
| **Tool‑Call Result Propagation** | #32664 / #32653 | Inconsistent backend propagation causes crashes or missing outputs. |
| **IDE Support for GPT‑5.6 Models** | #32412 / #32615 | Synchronised SDK and extension updates lag behind new model releases. |
| **Token‑Efficient Waiting & Re‑Sampling** | #32640 | UI‑level tool `wait` imposes repeated re‑calls; users want throttling. |
| **Antivirus False‑Positives** | #32331 | Solutions to have Codex safe‑run on corporate Windows environments. |

---

### 6. **Developer Pain Points**

1. **Platform‑Specific Instabilities** – Windows 11 desktop freezes, MS Store installer issues, antivirus conflicts.  
2. **Network & WebSocket Reliability** – Frequent reconnect loops and missing backend connections (Issues #18960, #20678, #30178).  
3. **Sub‑Agent & Model Configuration** – Duplicate model rosters, hidden controls, and forced auto‑selection (Issues #31814, #31097, #32664).  
4. **Tool‑Call & Prompt Management** – Missing result crashes, excessive token usage, editing prior prompts disrupt the chain.  
5. **IDE & Extension Lag** –Atlestone with GPT‑5.6, open‑vsx not up to date (Issues #32412, #32499).  
6. **Security & Permissions** – Interference from enterprise antivirus, store‑based deployment barriers.

---

**Take‑away:** Codex_LOGIN developers are actively tackling foundational stability and configuration consistency, while enterprise‑level distribution remains a growing demand. The community continues to push for fine‑ ###
(Links to all listed issues & PRs have been embedded in their respective tables.)

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-13

---

## 1. Today's Highlights
The nightly release **v0.52.0-nightly.20260713** ships a privacy fix that now surfaces a clear message when an account lacks a Code Assist tier. Meanwhile, the issue backlog reveals two dominant themes: **subagent reliability** (hangs, spurious success reporting, permission leaks) and **evaluation infrastructure hardening** (component-level evals, AST-aware tooling). Security hygiene continues with multiple critical CVE patches merged via Dependabot.

---

## 2. Releases
| Version | Date | Key Changes |
|---------|------|-------------|
| **v0.52.0-nightly.20260713.gf354eebaf** | 2026-07-13 | `fix(privacy)`: Show explicit message when account has no Code Assist tier ([#28304](https://github.com/google-gemini/gemini-cli/pull/28304)) |

[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260710.ga4c91ce19...v0.52.0-nightly.20260713.gf354eebaf)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Masks true failure mode; breaks trust in subagent delegation | 10 comments, 2 👍, `priority/p1`, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs forever on simple tasks | Core usability blocker; forces users to disable subagents | 7 comments, 8 👍, `priority/p1` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations | Scaling evals from 76 behavioral tests across 6 models; critical for regression prevention | 7 comments, `priority/p1`, `aiq/eval_infra` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST-aware file reads, search, mapping | Potential token/turn reduction via precise code navigation | 7 comments, 1 👍, `priority/p2` |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini under-uses skills/sub-agents autonomously | Limits agentic capability; requires explicit prompting | 6 comments, `priority/p2` |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Resource waste & noise in memory pipeline | 5 comments, `priority/p2` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell execution stuck at "Waiting input" after completion | Frequent hang on trivial commands; core UX regression | 4 comments, 3 👍, `priority/p1`, `effort/medium` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Platform parity gap for Linux/Wayland users | 4 comments, 1 👍, `priority/p1`, `agent/browser` |
| [#28370](https://github.com/google-gemini/gemini-cli/issues/28370) | Windows hot-reload/resize triggers full-history stdout dump | New critical Windows bug (C-Dump); floods terminal | 1 comment, `priority/p1`, `effort/large`, filed 2026-07-12 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction & reduce Auto Memory logging | Security: secrets enter model context before redaction | 3 comments, `priority/p2`, `area/security` |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | Title | Type | Status | Notes |
|---|-------|------|--------|-------|
| [#28367](https://github.com/google-gemini/gemini-cli/pull/28367) | Upgrade `shell-quote` to 1.8.4 (CVE-2026-9277) | Security | Open | Critical CVE fix; trivy-flagged |
| [#28368](https://github.com/google-gemini/gemini-cli/pull/28368) | Upgrade `vitest` to 4.1.0/3.2.6 (CVE-2026-47429) | Security | Open | Critical CVE in test runner |
| [#28365](https://github.com/google-gemini/gemini-cli/pull/28365) | Scope `tools.core` wildcard deny to built-in tools | Bug Fix | Open | Prevents MCP tools from being silently disabled; `priority/p1` |
| [#28364](https://github.com/google-gemini/gemini-cli/pull/28364) | Deep-merge user model config over defaults | Bug Fix | Open | Fixes shallow-merge loss of nested config; `priority/p2` |
| [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) | Add local eval report command & developer docs | Feature | Open | `npm run eval:report` aggregates pass rates by model |
| [#28366](https://github.com/google-gemini/gemini-cli/pull/28366) | Tidy implementation detail (#28340) | Refactor | Open | Small scoped patch, `priority/p1` |
| [#28384](https://github.com/google-gemini/gemini-cli/pull/28384) | Bump version to 0.52.0-nightly.20260713.gf354eebaf | Release | Open | Automated nightly version bump |
| [#28383](https://github.com/google-gemini/gemini-cli/pull/28383) | Bump `@types/node` 20.11.24 → 26.1.0 | Dependency | Closed | Major version jump |
| [#28382](https://github.com/google-gemini/gemini-cli/pull/28382) | Bump `puppeteer-core` 24.0.0 → 25.3.0 | Dependency | Closed | Browser automation updates |
| [#28380](https://github.com/google-gemini/gemini-cli/pull/28380) | Bump `undici` 7.10.0 → 8.7.0 | Dependency | Closed | HTTP client upgrade |

> **Note:** 9 Dependabot PRs (mostly `size/xl`) were auto-closed today — routine dependency maintenance.

---

## 5. Feature Request Trends
1. **Subagent Observability & Control** — Trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), config overrides respected ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), session recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)).
2. **AST-Aware Tooling** — Precise code navigation to cut turns/tokens ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
3. **Evaluation Infrastructure** — Local reporting, policy mapping, scaling component evals ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#28369](https://github.com/google-gemini/gemini-cli/pull/28369)).
4. **Memory System Hardening** — Deterministic redaction, inbox quarantine, retry limits ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
5. **Platform Parity** — Wayland browser support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), Windows terminal stability ([#28370](https://github.com/google-gemini/gemini-cli/issues/28370)), symlink agent recognition ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).

---

## 6. Developer Pain Points (Recurring Frustrations)
| Pain Point | Evidence |
|------------|----------|
| **Subagent hangs & silent failures** | Generalist agent hangs (#21409, 8 👍), browser agent Wayland failure (#21983), subagents running without permission (#22093) |
| **False success reporting** | MAX_TURNS reported as GOAL success (#22323), auto-memory retry loops (#26522) |
| **Shell/terminal glitches** | "Waiting input" hang after command completes (#25166, 3 👍), Windows full-history dump (#28370), resize flicker (#21924), editor exit corruption (#24935) |
| **Config not respected** | Browser agent ignores `settings.json` (#22267), symlink agents unrecognized (#20079), tool policy wildcard overreach (#28365) |
| **Security/privacy opacity** | Auto-memory sends unredacted secrets to model (#26525), no clear Code Assist tier messaging (fixed in today's release) |

---

*Generated from `google-gemini/gemini-cli` GitHub data (last 24h). Links point directly to issues/PRs for deeper context.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-13

## Today's Highlights
The community is currently reporting significant stability issues regarding terminal rendering and native V8 crashes on Linux. There is also a growing trend of bugs related to session management, specifically regarding malformed JSONL records and oversized session histories exceeding API limits.

## Releases
No new releases in the last 24 hours.

## Hot Issues
*   **#4069: TUI Terminal Freeze (WSL2/Windows Terminal)** – Critical stability bug where the TUI wedges mid-turn with `EIO` and `EPIPE` errors. High community visibility (8👍) due to the complete loss of terminal input. [Issue #4069](github/copilot-cli/issues/4069)
*   **#4102: Native V8 Array-Length Crash** – Serious performance bug causing Linux x64 binaries to abort during tool-heavy turns or session resumes. [Issue #4102](github/copilot-cli/issues/4102)
*   **#4024: Voice Mode Silent Failure** – All bundled ASR models (including Nemotron) fail to transcribe audio, rendering `/voice` non-functional despite successful audio capture. [Issue #4024](github/copilot-cli/issues/4024)
*   **#4097: Session History Bloat via `apply_patch`** – Binary deletions are stored as textual diffs, causing session histories to exceed the 5MB CAPI limit and break subsequent requests. [Issue #4097](github/copilot-cli/issues/4097)
*   **#4098: Malformed Session Resumption** – Truncated and concatenated events in `events.jsonl` are preventing the successful resumption of user sessions. [Issue #4098](github/copilot-cli/issues/4098)
*   **#4096: MCP OAuth Bridge Failure** – Third-party MCP servers show as "Connected" in the UI, but OAuth tokens aren't bridging to CLI sessions, making tools unavailable. [Issue #4096](github/copilot-cli/issues/4096)
*   **#4103: Plugin Marketplace Auth Regression** – A recent change in v1.0.70 appears to have broken Git credential helpers for private HTTPS repositories. [Issue #4103](github/copilot-cli/issues/4103)
*   **#4095: Windows File Lock (OS Error 5)** – Plugin updates fail when VS Code is open because the extension holds watcher handles on the installed plugins folder. [Issue #4095](github/copilot-cli/issues/4095)
*   **#4101: `write_agent` Blocking Behavior** – Tool calls to background agents may block the assistant's turn until the target agent wakes up, causing input queuing. [Issue #4101](github/copilot-cli/issues/4101)
*   **#4070: TUI Copy-Paste Artifacts** – Highlighting text for copying introduces "garbage text" into the input line, disrupting the user experience. [Issue #4070](github/copilot-cli/issues/4070)

## Key PR Progress
*   **#4100: Security Update** – A PR submitted to address security concerns (marked as "安全性"). [PR #4100](github/copilot-cli/pulls/4100)

## Feature Request Trends
*   **Robust Session Persistence:** There is a strong demand for a more resilient session storage mechanism that handles binary data efficiently and prevents JSONL corruption.
*   **Cross-Platform TUI Stability:** Users are requesting better terminal compatibility, specifically for WSL2 and Windows Terminal, to eliminate screen-clearing and input-freeze bugs.
*   **Improved Plugin Lifecycle:** Requests for a non-blocking plugin update mechanism that doesn't conflict with open IDE file handles.

## Developer Pain Points
*   **Resource Management:** Developers are frustrated by the 5MB CAPI limit being hit due to inefficient handling of deleted binary files in session history.
*   **Authentication Friction:** The disconnect between the App UI (Connected status) and the CLI (Missing tools) for MCP servers is causing confusion.
*   **UI/UX Friction:** Minor but persistent issues with theme contrast (#3773) and keyboard shortcuts (Esc key double-handling in #3430) are hindering the workflow.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Today's Highlights**  
- No new releases of Kimi Code CLI were published in the last 24 h.  
- A critical bug report (#2318) surfaced, flagging an unexpected TPD (Tokens‑Per‑Day) rate‑limit hit on Windows, which could disrupt users’ automation workflows.  
- Two recent PRs (#2181, #2350) from maintainer **he‑yufeng** were merged, improving Windows binary metadata and adding graceful handling of non‑UTF‑8 output from the underlying worker.

---

### Releases
*No new versions published in the last 24 hours.*

---

### Hot Issues
- **Issue #2318 – “[OPEN] [bug] request reached organization TPD rate limit, current: 1505241”**  
  *Why it matters:* The organization’s daily request quota was exhausted, causing the CLI to fail unexpectedly for a Windows user. This indicates that rate‑limit handling needs clearer error messaging and possibly a throttling fallback.  
  *Community reaction:* Only one 👍 and zero comments so far; the issue was updated on 2026‑07‑12, suggesting the maintainers are still investigating.  
  *Link:* [MoonshotAI/kimi-cli Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)

*Note: Only one issue was updated in the last 24 h, so the list is limited to this entry.*

---

### Key PR Progress
- **PR #2181 – “fix: add Windows binary version info”**  
  *What it does:* Generates a PyInstaller `VersionInfo` resource from `pyproject.toml`, injects it into both one‑file and one‑dir builds on Windows, and adds a CI assertion to keep the artifact’s `FileVersionInfo` non‑empty. This resolves the missing version metadata that previously plagued Windows releases.  
  *Impact:* Improves user-facing binary identification and aligns Windows builds with macOS/Linux versioning.  
  *Link:* [MoonshotAI/kimi-cli PR #2181](https://github.com/MoonshotAI/kimi-cli/pull/2181)

- **PR #2350 – “fix: tolerate non‑utf8 worker output”**  
  *What it does:* Switches the web‑session runner’s decoding of worker stdout/stderr from strict UTF‑8 to a tolerant error handler, allowing locale‑encoded bytes (e.g., CP1252 smart punctuation) on Windows without masking the underlying failure. This directly addresses #2313.  
  *Impact:* Prevents cryptic `UnicodeDecodeError` crashes and surfaces real worker errors, a crucial reliability improvement for cross‑platform users.  
  *Link:* [MoonshotAI/kimi-cli PR #2350](https://github.com/MoonshotAI/kimi-cli/pull/2350)

---

### Feature Request Trends
- **Rate‑limit resilience:** The reported TPD rate‑limit incident highlights a need for more graceful degradation (e.g., retry‑with‑backoff, explicit quota dashboards) when the organization quota is near its ceiling.  
- **Cross‑platform robustness:** Recent fixes around Windows binary metadata and encoding handling indicate a community focus on making the CLI reliable on Windows, especially for users dealing with locale‑specific text.

---

### Developer Pain Points
- **Quota management:** Users are encountering hard stops when the organization’s request budget is exhausted, with limited guidance on how to recover or adjust usage.  
- **Windows binary versioning:** Historically, Windows builds lacked proper version metadata, making it difficult to verify installations or enforce update policies.  
- **Encoding surprises:** The strict UTF‑8 decoding of worker output caused unexpected crashes on Windows where child processes emit non‑standard characters, masking actual errors.  

These pain points are being addressed incrementally via the two PRs above, but the TPD rate‑limit issue remains an open front‑end concern for the community.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-13

## Today's Highlights
The community is heavily focused on stabilizing **OpenCode v2 (opencode2)**, with critical fixes for config discovery across Git boundaries and TUI stability. Significant efforts are also underway to integrate the **GPT-5.6 family** of models and refine the "CodeMode" tool registration system to improve agentic workflows.

## Releases
*   **PR Verification Artifacts**: Automated verification evidence was released for PR #36567 and PR #36516 to validate Drive and visual assets.

## Hot Issues
*   **#4283: Copy To Clipboard Failure** (113 comments, 105 👍) — A high-visibility bug where response text fails to copy, causing significant friction for users.
*   **#36140: GPT-5.6 Luna 404 Error** (24 comments, 84 👍) — Users are reporting "Model not found" errors when using ChatGPT OAuth for the Luna model.
*   **#5076: Security Default Concerns** (13 comments, 61 👍) — A critical discussion on OpenCode behaving as a "high-privilege remote control agent," calling for safer default permissions.
*   **#3743: Model Looping** (26 comments, 12 👍) — Certain models (Kimi K2, GLM 4.6) are entering infinite tool-calling loops, requiring manual stops or `/compact` operations.
*   **#33318: Zen Paid Balance Ignored** (8 comments) — Urgent reports of users hitting free usage limits despite having paid credits.
*   **#30068: Japanese Text Mojibake** (15 comments) — A character encoding issue where Japanese text is corrupted upon copying from chat output.
*   **#22132: Ollama Provider Hangs** (15 comments) — OpenCode 1.4.3 hangs with local Ollama providers despite the API endpoint working independently.
*   **#32002: macOS Kernel Panic** (5 comments) — A severe memory leak in `opencode.exe` causing zone map exhaustion on macOS 26.3.
*   **#31972: Layout UI Breakage** (7 comments) — Enabling "New Layout and Designs" disables the ability to switch between Plan and Build modes.
*   **#35013: V2 Auto-compaction Bypass** (4 comments) — Large Fable sessions are bypassing auto-compaction, leading to 400 errors before hitting token limits.

## Key PR Progress
*   **#36577: Cross-Git Config Discovery** — Fixes v2 core config discovery to search ancestors across project/Git boundaries (Fixes #36539).
*   **#36589: Bound Compaction Request Size** — Prevents sessions from wedging when serialized requests exceed the 10 MiB body limit.
*   **#36560: Refactor `deferred` to `codemode`** — Renames tool registration to `codemode` to better define when tools should trigger CodeMode.
*   **#36561: Flat Tool Drafts** — Introduces flat tool objects and "pinned" status for improved tool registration ergonomics.
*   **#36574: GitHub Copilot Header Fix** — Sets `Copilot-Integration-Id` to `vscode-chat` to resolve 403 Forbidden errors for GPT-5.6 models.
*   **#36571: Agent Picker Preview** — Enhances the TUI by splitting the agent picker into list and preview panes for better visibility.
*   **#29217: Inline `$skill` Invocations** — Adds "skill pills" and autocomplete for `$skill` within the prompt composer.
*   **#36583: Background Service Preservation** — Prevents transient health-check failures from triggering destructive restarts of the background service.
*   **#36588: Unconditional Form Dismissal** — Allows the `Escape` key to exit TUI forms even after a server restart.
*   **#36563: Small Model for Session Titles** — Optimizes session title generation by preferring the catalog's small model to reduce latency/cost.

## Feature Request Trends
*   **Educational Workflows**: Renewed interest in a **"Teach Mode"** (#36521) and **"Guide Mode"** (#12675) to help new developers transition to "vibe coding" with structured onboarding.
*   **TUI Enhancements**: Requests for better MCP server visibility, inline skill invocations, and more descriptive agent pickers.
*   **Advanced Model Control**: Users are pushing for parity with Codex Ultra, specifically requesting the `reasoning_effort: "max"` setting for GPT-5.6 models (#36391).

## Developer Pain Points
*   **Configuration Fragility**: Significant frustration regarding global config files not loading in subfolders and environment variables being dropped for MCP servers (#36485, #36434).
*   **Resource Leaks**: Reports of the event table growing unbounded (up to 16 GB) and macOS kernel panics suggest stability issues with long-running sessions.
*   **TUI/UX Friction**: Frequent reports of UI "stuck" states, clipboard failures, and modality issues where the TUI crashes or ignores keyboard shortcuts (Spacebar for MCP toggling).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026-07-13**  

---  

### 1. Today's Highlights  
- No new releases were published in the last 24 h, but the project saw steady activity on issues and pull‑requests focused on agent reliability, TUI rendering, and provider compatibility.  
- The most discussed bug ([#6206](https://github.com/earendil-works/pi/issues/6206)) highlighted a regression where `max_tokens` is clamped to the reported context window, affecting users who rely on explicit token limits.  
- Several UI‑centric fixes landed (e.g., image‑block rendering, terminal auto‑wrap disabling, numeric‑range coercion) that directly improve the interactive experience for power users.  

---  

### 2. Releases  
*None reported in the last 24 h.*  

---  

### 3. Hot Issues  
| Issue | Why it matters | Community reaction |
|-------|----------------|--------------------|
| **[#6206](https://github.com/earendil-works/pi/issues/6206)** – Clamping `max_tokens` to context window | Breaks workflows that set explicit token limits distinct from model context size; a regression from the fix for #5595. | 10 comments, 0 👍 – active debate on correct behavior. |
| **[#5886](https://github.com/earendil-works/pi/issues/5886)** – AgentSession settlement/continuation bugs | Core agent lifecycle issues causing hangs or incorrect transcript reuse; blocks reliable autonomous coding flows. | 6 comments, 2 👍 – maintainers acknowledged as a meta‑issue for several subclasses. |
| **[#6477](https://github.com/earendil-works/pi/issues/6477)** – Compaction summary missing session ID for Codex | Causes “Model not found” errors on newer OpenAI‑Codex models (gpt‑5.6‑luna/terra/sol) when compaction runs. | 5 comments, 8 👍 – high impact for users on the latest Codex models. |
| **[#5463](https://github.com/earendil-works/pi/issues/5463)** – Auto‑compaction after final turn throws error | Unhandled “Cannot continue from message role: assistant” error aborts sessions after a normal assistant turn. | 5 comments, 5 👍 – frequent pain point for long‑running sessions. |
| **[#5952](https://github.com/earendil-works/pi/issues/5952)** – Safe session‑replacement API for extensions | Requests a public, trusted‑extension API (`pi.newSession()`‑style) to mirror built‑in `/new` behavior without low‑level hacks. | 5 comments, 1 👍 – strong interest from extension authors. |
| **[#6563](https://github.com/earendil-works/pi/issues/6563)** – TUI drops image blocks from user messages | Images sent via `session.prompt()` or clipboard paste are seen by the model but not rendered in the chat transcript, breaking multimodal workflows. | 4 comments, 0 👍 – UI regression noted after recent TUI changes. |
| **[#6524](https://github.com/earendil-works/pi/issues/6524)** – Hide GPT‑5.6 reasoning‑summary empty placeholders | Visible thinking blocks show empty comment placeholders (`<!-- -->`) that clutter the UI for Codex reasoning models. | 4 comments, 0 👍 – cosmetic but distracting for power users. |
| **[#6165](https://github.com/earendil-works/pi/issues/6165)** – Add Scaleway Generative APIs LLM provider | Community demand for EU‑hosted, zero‑retention weight models via Scaleway’s generative‑API endpoint. | 3 comments, 2 👍 – reflects interest in expanding provider options beyond US‑centric services. |
| **[#6324](https://github.com/earendil-works/pi/issues/6324)** – `/tree` branch summarization fails for ambient‑credential providers (Bedrock, Vertex) | Throws “No API key found” when using providers that rely on IAM roles or default credentials rather than explicit API keys. | 3 comments, 2 👍 – blocks adoption of cloud‑native auth flows. |
| **[#6542](https://github.com/earendil-works/pi/issues/6542)** – Make provider errors visible to the LLM via user‑role advisories | Currently silences context‑overflow, retry exhaustion, and compaction failures, leaving the model unaware of its own mistakes. | 3 comments, 0 👍 – addresses a core reliability gap in the agent‑LLM feedback loop.  

---  

### 4. Key PR Progress  
| PR | Summary |
|----|---------|
| **[#6580](https://github.com/earendil-works/pi/pull/6580)** – feat(tui): v2 in‑Pi full‑history pager over Ledger snapshot | Adds a scrollable, configurable pager for TUI v2 letting users browse retained session history beyond terminal scrollback. |
| **[#6582](https://github.com/earendil-works/pi/pull/6582)** – fix(ai): respect forceAdaptiveThinking for Bedrock models | Ensures Bedrock‑registered models honor `compat.forceAdaptiveThinking:true` instead of falling back to a hard‑coded whitelist. |
| **[#6577](https://github.com/earendil-works/pi/pull/6577)** – fix(coding-agent): coerce numeric read ranges | Converts string‑typed `offset`/`limit` arguments to numbers before calculating displayed line ranges, fixing odd range displays (e.g., “380‑38049”). |
| **[#6570](https://github.com/earendil-works/pi/pull/6570)** – [Do Not Merge] feat: add lightweight scout extension example | (Marked *Do Not Merge*) – an example extension that was unintentionally opened; can be ignored. |
| **[#5859](https://github.com/earendil-works/pi/pull/5859)** – fix(ai): send responses prompts as instructions | Aligns OpenAI Responses API usage by moving `systemPrompt` to the top‑level `instructions` field, keeping `input` for conversation/tool replay. |
| **[#6572](https://github.com/earendil-works/pi/pull/6572)** – Render image blocks in interactive user messages | Makes user‑sent images visible in the TUI, attaches clipboard images to the next user message, and shows pending attachments in the footer. |
| **[#6565](https://github.com/earendil-works/pi/pull/6565)** – feat(pi-zai): Z.AI extension with quota, resilience, and cache benchmark | Introduces the Z.AI provider package with usage monitoring, retry logic, request‑header affinity, and slash‑command integration. |
| **[#6561](https://github.com/earendil-works/pi/pull/6561)** – fix(tui): disable terminal auto‑wrap to prevent double rendering | Turns off DECAWM during TUI sessions to avoid cursor/rendering desynchronisation on lines that exactly match terminal width. |
| **[#6559](https://github.com/earendil-works/pi/pull/6559)** – Fix/tree navigation pending tools | Prevents `/tree` from switching branches while an agent or tool is active, eliminating orphaned tool results and provider‑history mismatches. |  

---  

### 5. Feature Request Trends  
- **Provider extensibility** – Requests for new LLM backends (Scaleway, Z.AI, Bedrock/Vertex ambient credentials) and better error visibility to the model.  
- **Session & agent lifecycle control** – APIs for safe session replacement (`pi.newSession()`), persistent working‑directory changes (`setCwd`), and reliable agent settlement/continuation after compaction or tree navigation.  
- **TUI & multimodal UX** – Rendering of image blocks, preservation of rich content (thinking blocks, reasoning summaries), and stable keybinding/application of custom editor components without requiring `/reload`.  
- **Compaction & tooling robustness** – Atomic compaction/dispatch coordination, correct session‑ID propagation for summarization, and handling of tool results after branch changes.  

---  

### 6. Developer Pain Points  
- **Agent session instability** – Frequent reports of hangs, incorrect continuation after `/tree`, and errors when auto‑compaction runs after an assistant turn.  
- **Provider authentication friction** – Ambient‑credential providers (Bedrock, Vertex) still hit “No API key found” errors in features like `/tree` branch summarization.  
- **TUI rendering regressions** – Image blocks disappearing, double‑width line wrapping, and missing reasoning‑summary placeholders degrade the visual feedback loop.  
- **Keybinding persistence** – Custom keybindings defined in `keybindings.json` only take effect after a manual `/reload`, disrupting workflow for users who rely on personalized shortcuts.  
- **Error opacity** – Provider‑side failures (context overflow, retries, compaction) are silently swallowed, leaving the LLM unaware of its own mistakes and complicating debugging.  

---  

*All links point to the `earendil-works/pi` repository on GitHub.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-13

## Today's Highlights
The community is currently focused on scaling the `qwen serve` daemon's capabilities, specifically moving toward multi-workspace support and runtime channel management. Significant effort is being directed toward context optimization, including new "Skill Context Lifecycle Management" and improved prompt cache stability.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
1. **[#6378] Multi-workspace Daemon Support**: An RFC to allow one `qwen serve` process to handle multiple workspaces, a critical step for scaling enterprise usage. [Link](https://github.com/QwenLM/qwen-code/issues/6378)
2. **[#6762] Skill Context Lifecycle Management**: Addressing the "forever" growth of `SKILL.md` in conversation history; requests a way to unload or compress skill bodies. [Link](https://github.com/QwenLM/qwen-code/issues/6762)
3. **[#6721] Prompt Cache Invalidation**: A performance bug where deferred tool discovery invalidates prompt cache prefixes, impacting token efficiency. [Link](https://github.com/QwenLM/qwen-code/issues/6721)
4. **[#6312] Daemon Session Overhead**: Tracking the reduction of synchronous I/O and object creation during `session/new` calls to improve daemon responsiveness. [Link](https://github.com/QwenLM/qwen-code/issues/6312)
5. **[#6755] Background Agents for Persistence**: Proposal for "Devlog" and "Living Spec" agents to maintain long-term project memory across sessions. [Link](https://github.com/QwenLM/qwen-code/issues/6755)
6. **[#6666] Reasoning Content Tag Bug**: Qwen 3.7 Max returning `<think>` tags in the `content` field instead of the dedicated `reasoning_content` field. [Link](https://github.com/QwenLM/qwen-code/issues/6666)
7. **[#6779] Feishu Worker Credential Validation**: A high-priority bug where workers report "ready" despite having invalid credentials. [Link](https://github.com/QwenLM/qwen-code/issues/6779)
8. **[#5472] Real-time Thinking Streaming**: A regression request to restore uncollapsed, real-time streaming of the chain-of-thought. [Link](https://github.com/QwenLM/qwen-code/issues/5472)
9. **[#6776] Terminal Garbling on Ctrl-C**: A UX bug where exiting the CLI leaves the terminal in a state that produces garbled output (`9;5u`). [Link](https://github.com/QwenLM/qwen-code/issues/6776)
10. **[#6774] Grok Model Support**: A request to integrate xAI's Grok 3/4 models via their OpenAI-compatible API. [Link](https://github.com/QwenLM/qwen-code/issues/6774)

## Key PR Progress
1. **[#6741] Runtime Daemon Channel Control**: Adds the ability to enable, reload, and stop channel workers via HTTP/SDK without restarting the daemon. [Link](https://github.com/QwenLM/qwen-code/pull/6741)
2. **[#6768] Web Shell Settings & Model Mgmt**: Extends the Web Shell to allow editing of `~/.qwen/settings.json` and in-panel model switching. [Link](https://github.com/QwenLM/qwen-code/pull/6768)
3. **[#6788] Skill Result Microcompaction**: Fixes a core issue by making Skill tool results eligible for the microcompaction policy to save context. [Link](https://github.com/QwenLM/qwen-code/pull/6788)
4. **[#6784] Git Snapshot Optimization**: Reduces overhead by combining branch and short-status reads into a single `git status` process. [Link](https://github.com/QwenLM/qwen-code/pull/6784)
5. **[#6638] Extension Management V2**: Introduces a more flexible activation policy for extensions across hosted workspaces. [Link](https://github.com/QwenLM/qwen-code/pull/6638)
6. **[#6777] Thinking Tag Tracking**: Improved tracking of `<think>` tags across streamed deltas to handle malformed responses. [Link](https://github.com/QwenLM/qwen-code/pull/6777)
7. **[#6723] Stabilize Deferred Tool Calls**: Prevents tool discovery from mutating the provider-facing function set to maintain cache stability. [Link](https://github.com/QwenLM/qwen-code/pull/6723)
8. **[#6780] Feishu Credential Validation**: Implements a tenant-token request check before WebSocket startup to prevent false "ready" signals. [Link](https://github.com/QwenLM/qwen-code/pull/6780)
9. **[#6789] Triage Bot Enhancements**: Adds confidence scores and sequence diagrams to PR comments to increase signal density. [Link](https://github.com/QwenLM/qwen-code/pull/6789)
10. **[#6785] Dotfile Language Detection**: Fixes `getLanguageFromFilePath` to correctly identify files like `.gitignore`. [Link](https://github.com/QwenLM/qwen-code/pull/6785)

## Feature Request Trends
*   **Daemon Orchestration**: Strong trend toward treating `qwen serve` as a robust orchestrator (multi-workspace support, runtime channel control, extension V2).
*   **Context Window Hygiene**: Shift toward "lifecycle management" for context—specifically compaction, unloading, and optimizing tool/skill bodies.
*   **Web Shell Sophistication**: Move toward a full-featured IDE-like experience (transcript viewers, git branch displays, custom group coloring).

## Developer Pain Points
*   **CI/CD Stability**: Frequent "Main CI failed" issues (#6781, #6778, #6773) and nightly release failures (#6786, #6749) indicate instability in E2E tests.
*   **Context Leakage**: Developers are frustrated by "permanent" tool results and thinking tags that bloat the context window or leak into the final output.
*   **State Persistence**: Loss of registered workspaces after daemon restarts (#6726) is a recurring friction point for multi-workspace users.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑07‑13**

---

### 1. Today's Highlights  
* The container team closed a critical tool‑schema sanitisation bug that was breaking Anthropic requests, and the lookup for foreign‑language localisation added Korean support.  
* A new MiniMax‑Messages‑compatible route is now baked lake‑deep into the registry, giving users a faster path for the newest MiniMax models.  
* The UI now tracks cache‑write token rates for Anthropic and Qwen, improving cost‑accountability when working with paid models.

---

### 2. Releases  
No new releases were published in the last 24 h.

---

### 3. Hot Issues  
| # | Title | Why it matters | Current state |
|---|-------|---------------|---------------|
| [#4329](https://github.com/Hmbown/DeepSeek-TUI/issues/4329) | *Anthropic API error* | The UI was silently dumping `tool_use` blocks without matching `tool_result` responses, causing hard‑to‑debug HTTP １２３ request failures. This broke user‑defined tool pipelines. | **Open** – 6 comments, no up‑votes yet |
| [#3915](https://github.com/Hmbown/DeepSeek-TUI yakni/issues/3915) | *`$skill <task>` silently discards task text* | Users expect the skill invocation to consume the entire message. The current behaviour forces a second message, impairing conversational ergonomics. | **Open** – 1 comment |
| [#4335](https među.github.com/Hmbown/DeepSeek-TUI/issues/4335) | *Make offline scorecard pricing provider‑aware* | Offline scoring currently only recognises the model ID, ignoring provider differences (e.g. Anthropic vs. local). Analysts rely on accurate wall‑clock‑costs when reviewing simulations. | **Open** – 1 comment |

These three issues illustrate the community’s focus on reliable tool‑integration, ergonomic user experience, and precise cost accounting.

---

### 4. Key PR Progress  
| # | Title | Summary | Link |
|---|-------|---------|------|
| [#4352](https://github.com/Hmbown/DeepSeek-TUI/pull/4352) | *feat: add MiniMax Messages‑compatible route* | ExtGAR ensures the MiniMax‑M3/M2.7 models now register in the provider registry, CLI, TUI, and request client, eliminating manual config. | ✅ |
| [#4346](https://github.com/Hmbown/DeepSeek-TUI/pull/4346) | *fix: sanitize tool input_schema for Anthropic adapter* | Solves HTTP 400 caused by `oneOf/anyOf/allOf` in Anthropic tool schemas. Restores safe tool lagt joint | ✅ |
| [#4348](https://github.com/Hmbown/DeepSeek-TUI/pull/4348) | *fix(tui): bill Anthropic cache‑write tokens at published rates* | Adds `cache_write_per_million` to pricing, reflects real Anthropic/Qwen write costs, and updates TUI token counter. | ✅ |
| [#4351](https://github.com/Hmbown/DeepSeek-TUI/pull/4351) | *fix(scorecard): bind costs to provider routes* | Makes offline scorecards provider‑aware, clinging to exact cost look‑ups for `Codex OAuth`, local, or hidden gateways. | ✅ |
| [#4353](https://github.com/Hmbown/DeepSeek-TUI/pull/4353) | *docs: add Cursor Cloud dev‑environment setup notes* | Adds a new “Cursor Cloud specific instructions” section to `AGENTS.md`, clarifying VM quirks. | ✅ |
| [#4347](https://github.com/Hmbown/DeepSeek-TUI/pull/4347) | *i18n: add Korean (ko) locale support* | Provides complete Korean localisation:last‑added 752 leaf keys, improving inclusivity. | ✅ |
| [#4349](https://github.com/Hmbown/DeepSeek-TUI/pull/4349) | *Update Cargo.toml to allow build under NetBSD* | Generates missing `rquickjs` bindings for NetBSD, FreeBSD, OpenBSD, DragonFly. | ✅ |

The open PRs that remain under review focus on new feature hooks (`#4352`) and UX improvements (`#4352`, `#4351`).

---

### 5. Feature Request Trends  
* **Cross‑Provider Routing** – A recurring request is to expose a unified “messages‑compatible” route that shields users from provider quirks (MiniMax, Anthropic, Qwen).  
* **Enhanced Cost Tracking** – Users desire offline scorecards that respect provider‑specific price tables, especially for caching and write‑tokens.  
* **Localisation** – The addition of Korean content reflects a broader push for multi‑language support.  
* **Tool‑Pipeline Robustness** – Fixes for Anthropic tool schema errors illustrate the community’s need for predictable tool‑integration.  

---

### 6. Developer Pain Points  
1. **Tool‑Schema Compatibility** – Anthropic’s strict schema rules keep breaking unmodified tools.  
2. **Conversation Ergonomics** – Skill invocation syntax silently discards user intent, requiring awkward follow‑up messages.  
3. **Pricing Ambiguity** – Offline scoring incorrectly attributes cost to model ID alone, misrepresenting provider‑specific rates.  
4. **Build Environment Inconsistencies** – NetBSD‑based developers previously faced missing bindings.  

Addressing these will reduce friction for both everyday developers and advanced integration specialists.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*