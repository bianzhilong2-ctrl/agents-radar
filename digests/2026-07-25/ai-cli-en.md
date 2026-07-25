# AI CLI Tools Community Digest 2026-07-25

> Generated: 2026-07-25 01:50 UTC | Tools covered: 9

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
The AI‑CLI landscape in mid‑2026 is characterized by rapid, incremental releases that tighten integration with existing developer toolchains (IDE extensions, CI/CD, cloud services) while simultaneously addressing stability, security, and usability frictions.  Most projects are moving toward fine‑grained session management, deterministic model behavior, and richer extensibility (hooks, plug‑in ecosystems, cross‑device continuity).  The community conversation is increasingly focused on reliability of long‑running, headless, or multi‑modal workflows rather than on raw model capability.  

**2. Activity Comparison**  

| Tool | Issues (count) | PRs (count) | Release status (today) |
|------|----------------|------------|------------------------|
| **Claude Code** | 10 | 1 | Yes – v2.1.220 (latest) |
| **OpenAI Codex** | 10 | 10 | Ongoing alpha (0.146.x) – no stable release today |
| **Gemini CLI** | 10 | 10 | No recent release (latest prior) |
| **GitHub Copilot CLI** | 10 | 0 | Yes – v1.0.75 (released 2026‑07‑24) |
| **Kimi Code CLI** | 5 | 2 | No recent release |
| **OpenCode** | 10 | 10 | Yes – v1.18.5 (latest) |
| **Pi** | 10 | 10 | Yes – v0.82.0 (latest) |
| **Qwen Code** | 10 | 10 | Yes – v0.21.0 (latest) |
| **DeepSeek TUI** | 10 | 10 | Yes – v0.9.1 (latest) |

*Counts are taken from the latest community digests (issues and PRs updated 2026‑07‑24 → 2026‑07‑25).*

**3. Shared Feature Directions**  

| Shared Need | Tools Reporting It |
|-------------|--------------------|
| **Robust session & authentication handling** (token refresh, OAuth flakiness, remote‑session recovery) | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code |
| **Deterministic model / language behavior** (prevent silent downgrades, lock language, avoid context‑window mismatches) | OpenAI Codex, Qwen Code, DeepSeek TUI, Pi, Claude Code (Fable false positives) |
| **Context‑management & compaction reliability** (auto‑compact loss, truncation, quota visibility) | Claude Code, OpenAI Codex, GitHub Copilot CLI (5 MB limit), Pi (summary truncation), Qwen Code (background shell empty output) |
| **Proxy / network resilience** (corporate SSL, WSL detection, firewall‑friendly transports) | Kimi Code CLI, Pi, OpenAI Codex, OpenCode (multi‑provider endpoints) |
| **Sub‑agent / multi‑agent orchestration stability** (recovery, fork safety, background job control) | Gemini CLI, Qwen Code, DeepSeek TUI, Claude Code (Agent fork), Pi (compaction stalls) |
| **UI/UX & rendering consistency** (light‑theme accessibility, terminal scrolling, viewport handling) | GitHub Copilot CLI, Qwen Code, DeepSeek TUI, Pi, Claude Code (Windows MSIX) |
| **Tool‑level constraints & safety** (JSON‑schema, regex, Lark grammars, security‑filter tuning) | Pi (constrained sampling), OpenAI Codex (safety false positives), Claude Code (Fable 5), DeepSeek TUI (command‑boundary refactor) |
| **Workspace / multi‑repo management** (session picker, channel APIs, worktree integration) | OpenCode, Qwen Code, GitHub Copilot CLI, DeepSeek TUI (fleet/workflow), Claude Code (remote/headless sessions) |

**4. Differentiation Analysis**  

| Tool | Primary Focus | Typical Target Users | Technical Approach |
|------|---------------|----------------------|--------------------|
| **Claude Code** | High‑context, enterprise‑grade coding with large model windows; strong sandbox & security emphasis. | Professional developers, security/audit teams, power users of Anthropic models. | Python‑centric CLI, heavy reliance on remote/headless session orchestration, strict allow‑list sandboxing. |
| **OpenAI Codex** | Low‑level Rust‑based code execution engine with tight OS integration; rapid alpha iteration. | Developers building custom code‑execution pipelines, CI/CD bots, VS Code/Cursor power users. | Rust binaries, aggressive process‑leak mitigation, extensive Windows‑specific debugging. |
| **Gemini CLI** | Sub‑agent workflows and core tooling for complex, multi‑step automation. | Engineers constructing agentic pipelines, research prototypes. | General‑purpose scripting runtime with emphasis on sub‑process management, AST‑aware code mapping, security‑focused token handling. |
| **GitHub Copilot CLI** | Tight GitHub‑centric workflow integration, plan‑mode, UI/UX polish. | Developers who use Copilot for day‑to‑day GitHub tasks, IDE‑extension users. | Node.js/TypeScript stack, focus on session worktree handling, event hooks, accessibility‑first UI. |
| **Kimi Code CLI** | Cross‑platform (desktop‑mobile‑browser) continuity with strong corporate‑network support. | Users needing reliable remote access, especially behind proxies or on ARM devices. | Likely Go/Python, explicit `SSL_CERT_FILE` support, login‑session persistence improvements. |
| **OpenCode** | Multi‑provider LLM orchestration with workspace‑level session management. | Developers working with many local/hosted models (LM Studio, Ollama, etc.). | Go‑based service layer, plug‑in architecture, auto‑discovery of OpenAI‑compatible endpoints. |
| **Pi** | Fine‑grained tool‑sampling constraints and performance‑oriented reliability. | Power users who need deterministic tool execution and low‑latency responses. | Rust implementation, explicit schema validation, prompt‑cache key overrides, aggressive caching. |
| **Qwen Code** | IDE‑integrated, multi‑repo code assistance with background shell handling. | Teams building large codebases, multi‑language projects, Unity/VS Code power users. | Go‑centric, service‑agent engine, background side‑car status files, GitHub polling adapter. |
| **DeepSeek TUI** | Product‑level orchestration (Fleet/Workflow/Lane/Runtime) with multimodal privacy and localization. | Developers building sophisticated agentic workflows, multi‑modal applications. | Rust codebase, modular “product model” architecture, extensive refactoring for maintainability. |

**5. Community Momentum & Maturity**  

- **High‑velocity, highly active**: **OpenAI Codex**, **Pi**, **Qwen Code**, **DeepSeek TUI** – each shows a full set of 10+ issues and 10+ PRs, recent major releases, and ongoing PR merges, indicating strong community engagement and rapid iteration.  
- **Steady but slower**: **Claude Code**, **GitHub Copilot CLI**, **Kimi Code CLI** – fewer PRs, fewer recent releases, and more focus on bug‑fixes than on new feature development.  
- **Alpha‑stage activity**: **OpenAI Codex** continues to push frequent alpha builds, reflecting an exploratory phase rather than a stable production line.  

**6. Trend Signals for Developers**  

1. **Session & Authentication Reliability** – across nearly all tools, the community is converging on the need for robust token refresh, OAuth continuity, and automatic session recovery (e.g., headless `tmux` support, remote‑control auth stability).  
2. **Context Management & Compaction** – the “auto‑compact” or similar mechanisms are repeatedly cited as sources of context loss and quota waste; tools are adding hooks, better accounting, and stricter limits.  
3. **Model Switching & Language Consistency** – false‑positive safety filters and silent model downgrades erode trust; demand for deterministic model selection, language locking, and clear UI indicators is rising.  
4. **Cross‑Platform & Proxy Support** – corporate SSL, WSL/remote detection, and seamless desktop‑mobile continuity are top‑of‑mind, especially for tools targeting enterprise or remote‑first workflows.  
5. **Fine‑Grained Tool Control** – constrained sampling (JSON, regex, Lark) and safety‑filter tuning show a move toward giving developers programmatic control over which tools the model may invoke, reducing runtime errors and security incidents.  
6. **Workspace & Multi‑Repo Ergonomics** – session picker, channel APIs, and worktree integration are recurring requests, reflecting the growing prevalence of monorepo and multi‑project development.  

These signals suggest that the next wave of AI‑CLI evolution will be defined less by raw model size and more by **stability, deterministic behavior, secure multi‑modal orchestration, and ergonomic integration** with existing developer toolchains. Developers should prioritize tools that demonstrate proactive fixes to session/auth issues, transparent context accounting, and a clear roadmap for cross‑device, multi‑provider workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026‑07‑25 (anthropics/skills)*  

---

### 1. Top Skills Ranking  
*The PR list does not expose comment counts, so ranking is based on recent activity, update frequency, and visible community engagement (e.g., number of thumbs‑up, recent updates, and linked issue discussion). All items are currently **open**.*

| Rank | PR | Skill / Change | Core Functionality | Discussion Highlights |
|------|----|----------------|--------------------|-----------------------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **fix(skill-creator): run_eval.py always reports 0% recall** | Installs the eval artifact as a real skill; fixes Windows stream reading, trigger detection, and parallel workers. | Tied to the recurring *run_eval.py* trigger‑rate problem (see Issue #556 & #1169). Multiple contributors have reproduced the 0 % recall bug; the PR consolidates several Windows‑specific fixes. |
| 2 | [#1367](https://github.com/anthropics/skills/pull/1367) | **feat(skills): add self‑audit – mechanical verification + four‑dimension reasoning quality gate (v1.3.0)** | Audits AI output before delivery: first checks that every claimed output file exists, then runs a four‑dimension reasoning audit (damage‑severity priority). | Positioned as a universal quality‑gate skill; early commenters note it could replace ad‑hoc validation loops in many workflows. |
|

|  | #1302](https://github.com/anthropics/skills/pull/1302) | Add color expert skill | self‑contained expertise on color naming systems, color spaces, and conversion rules (ISCC‑NBS, Munsell, OKLCH, etc.). |  | The skill is intended for any design, data‑visualisation, or UI task that needs reliable color handling. Commenters have highlighted gaps in Claude’s native color knowledge and requested concrete examples (e.g., converting between HSL and OKLAB). |  | 4 |  [| #1099](https://github.com/anthropics/skills/pull/1099) | skill-creator: fix run_eval.py crash on Windows when reading from subprocess pipe | Makes the evaluation loop usable on native Windows by correcting the subprocess pipe handling that previously caused every query to be recorded as “not triggered”. | Directly addresses the Windows‑specific failure mode reported in Issue #1061 and the broader 0 % recall problem. Users report that after the fix, `run_loop.py` begins to show non‑zero recall on simple test skills. |  | 5 |  [| #525](https://github.com/anthropics/skills/pull/525) | Add pyxel skill for retro game development | Provides a end‑to‑end workflow for creating, running, capturing, and inspecting retro/pixel‑art games with the Pyxel engine via the pyxel‑MCP server. | Strong interest from the hobbyist/game‑dev community; multiple commenters have asked for extensions (e.g., sound integration, asset‑pipeline helpers). |  | 6 |  [| #486](https://github.com/anthropics/skills/pull/486) | Add ODT skill — OpenDocument text creation, template filling, and ODT→HTML conversion | Enables Claude to read/write .odt/.ods files, populate templates, and convert to HTML for preview or publishing. | Users note the lack of open‑document support in other AI‑assistant toolchains; the PR includes examples for mail‑merge and report generation. |  | 7 |  [| #723](https://github.com/anthropics/skills/pull/723) | feat: add testing-patterns skill | Captures best‑practice patterns across the testing stack (Trophy model, AAA, React Testing Library, etc.). | Seen as a foundational meta‑skill for teams adopting test‑driven development with Claude; discussion centers on extending it to end‑to‑end and performance testing. |  | 8 |  [| #210](https://github.com/anthropics/skills/pull/210) | Improve frontend-design skill clarity and actionability | Refactors the existing frontend‑design skill to give Claude concrete, single‑turn instructions for layout, styling, and component composition. | Contributors argue the original skill was too vague; the revised version includes explicit “do this, then that” steps that have been validated in a few UI‑prototyping threads. |  |

*All PRs above remain open as of the cutoff date; none have been merged yet.*

---

### 2. Community Demand Trends (from Issues)  
The most‑commented Issues reveal where the community wants the Skills ecosystem to evolve:

| Issue | Comments | Core Theme | What the Community Is Asking For |
|-------|----------|------------|----------------------------------|
| [#492](https://github.com/anthropics/skills/issues/492) | 43 | **Security / Trust Boundary** | Prevent community‑published skills from being distributed under the `anthropic/` namespace (impersonation risk). Requests for namespace isolation, verification badges, or explicit opt‑in for third‑party skills. |
| [#228](https://github.com/anthropics/skills/issues/228) | 14 | **Org‑wide Skill Sharing** | A built‑in mechanism to share skills within an organization (e.g., a shared library or direct upload link) instead of manual file exchange via Slack/Teams. |
| [#556](https://github.com/anthropics/skills/issues/556) | 12 | **Evaluation / Trigger Detection** | `run_eval.py` (and dependent scripts) must reliably detect when a skill is triggered; currently reports 0 % recall across all queries. |
| [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | **Memory Efficiency** | A “compact‑memory” skill that stores agent state in symbolic notation to reduce context‑window usage for long‑running agents. |
| [#202](https://github.com/anthropics/skills/issues/202) | 8 | **Skill‑Creator Best Practices** | Rewrite the skill‑creator skill to be an operational guide (concise, action‑oriented) rather than developer documentation; rename to follow naming guidelines. |
| [#189](https://github.com/anthropics/skills/issues/189) | 6 | **Duplicate‑Skill Prevention** | Installing both `document-skills` and `example-skills` plugins creates duplicate skills; request for namespacing or deduplication logic. |
| [#1061](https://github.com/anthropics/skills/issues/1061) | 3 (plus related #1050, #1099) | **Windows Compatibility** | Fix subprocess handling, PATHEXT resolution, and encoding issues so skill‑creator scripts run on native Windows Python. |

**Aggregated demand:**  
- **Reliability & Portability** – fixing Windows‑specific bugs and the eval‑trigger detection loop (Issues #556, #1061, #1099, #1050).  
- **Trust & Governance** – securing the skill namespace and enabling controlled org‑wide sharing (Issues #492, #228).  
- **Memory & Efficiency** – skills that compress agent state or provide pre‑flight quality gating (Issues #1329, #1367).  
- **Usability** – clearer, more actionable skill authoring guidance (Issue #202).  

---

### 3. High‑Potential Pending Skills  
These open PRs have noticeable recent activity, are tied to high‑impact issues, and represent functionality the community is actively discussing:

| PR | Skill | Why It’s High‑Potential |
|----|-------|-------------------------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self‑audit** | Provides a universal, self‑contained quality gate; directly addresses the community’s desire for reliable output validation (see Issue #556 & #1169). |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color‑expert** | Fills a repeated gap in Claude’s native color knowledge; many design‑oriented users have asked for a dedicated skill. |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill‑creator fix (run_eval)** | Resolves the core 0 % recall bug that stalls the description‑optimization loop; unblocks skill improvement for Windows users. |
| [#1099](https://github.com/anthropics/skills/pull/1099) & [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows subprocess & encoding fixes** | Collectively make the skill‑creator workflow usable on native Windows—a frequently raised blocker (Issue #1061). |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | Enables retro‑game development, a niche but enthusiastic sub‑community; potential for expansion into audio, asset pipelines, and publishing. |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | Brings open‑document support to Claude; aligns with demand for interoperability with LibreOffice/OpenOffice ecosystems. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing‑patterns** | Offers a reusable meta‑skill for establishing test‑driven practices; could become a foundation for other language‑ or framework‑specific testing skills. |

*All are still pending review/merge but have clear paths to adoption.*

---

### 4. Skills Ecosystem Insight  
**The community’s most concentrated demand is for a reliable, cross‑platform skill‑creation and evaluation pipeline—fixing Windows compatibility and the eval‑trigger detection loop—so that skills can be authored, tested, and shared securely at scale.**  

---  

*All links point to the respective GitHub items in the anthropics/skills repository.*

---

# Claude Code Community Digest: 2026-07-25

### 1. Today's Highlights
The ecosystem is seeing a massive shift with the rollout of **Claude Opus 5**, introducing a massive 1M context window and high-speed modes. However, this power is currently being met with significant friction as developers report rising false positives from the **Fable 5** safety classifiers and instability in remote/headless session management.

### 2. Releases
**v2.1.220 & v2.1.219**
* **Model Upgrades:** Introduced **Claude Opus 5** (`claude-opus-5`) as the new default Opus model, featuring a 1M context window and specialized "fast mode" ($10/$50 per Mtok).
* **Security & Sandboxing:** Added `sandbox.network.strictAllowlist` to prevent unauthorized non-allowlisted host access during sandboxed commands.
* **Reliability:** Various bug fixes and the addition of the `DirectoryAdded` hook for improved filesystem event handling.

### 3. Hot Issues
* **[#36431] Telegram Plugin Inbound Failure:** Inbound MCP channel notifications are failing to deliver to active conversations. Highly discussed (21 comments) as it breaks asynchronous communication via plugins. [Link](https://github.com/anthropics/claude-code/issues/36431)
* **[#81026/81027/81028] Fable 5 False Positives:** A wave of reports regarding the Fable 5 safety classifier blocking legitimate, benign code (including cybersecurity audits and regulatory compliance). This is a major friction point for professional workflows. [Link](https://github.com/anthropics/claude-code/issues/81026)
* **[#81035] Unsupervised Agent Forking:** A critical report where a nested `Agent(subagent_type: "fork")` spawned a background process that performed real-world external actions (merging PRs) without oversight. [Link](https://github.com/anthropics/claude-code/issues/81035)
* **[#62644] Billing/Credit Errors:** Free tier users reporting a permanent "Buy credits" disablement and 429 HTTP errors, preventing access to paid features. [Link](https://github.com/anthropics/claude-code/issues/62644)
* **[#76357] Windows MSIX Update Failure:** Update process fails with "file in use" errors on Windows, requiring a reboot every single time. [Link](https://github.com/anthropics/claude-code/issues/76357)
* **[#78469] Remote Control Auth Flakiness:** Intermittent 401 errors during OAuth token validation for `--remote-control`, making remote sessions unreliable. [Link](https://github.com/anthropics/claude-code/issues/78469)
* **[#76248] Git Proxy/Push Blocking:** Recent changes to Cowork/Cloud sessions appear to be blocking Git pushes even when valid PATs are provided. [Link](https://github.com/anthropics/claude-code/issues/76248)
* **[#71616] iOS Mobile Inaccessibility:** Newly created sessions on iOS are auto-archiving immediately, making them inaccessible on mobile. [Link](https://github.com/anthropics/claude-code/issues/71616)
* **[#81032] macOS Sandbox Restrictions:** Python `ProcessPoolExecutor` failing in the macOS sandbox due to missing `kern.sysv.semmni` permissions. [Link](https://github.com/anthropics/claude-code/issues/81032)
* **[#80996] Headless Session Recovery:** Stdio MCP servers are failing to reconnect/recover when using `--resume` in headless environments like `tmux`. [Link](https://github.com/anthropics/claude-code/issues/80996)

### 4. Key PR Progress
* **[#80883] Context-Safety-Net Plugin:** A significant proposal to mitigate context loss caused by the auto-compaction mechanism in long sessions. [Link](https://github.com/anthropics/claude-code/pull/80883)

*(Note: Only one PR was provided in the recent data source.)*

### 5. Feature Request Trends
* **Enhanced UI/UX:** Users are requesting the ability to make images pasted into prompts clickable for better inspection. [#81034]
* **Improved Integration:** Requests for the VS Code extension to include `git-worktree` sessions in the session list. [#81024]
* **Connectivity & Mesh:** Interest in building cross-machine Claude-to-Claude meshes using research previews. [#81031]
* **Connector Management:** Demand for better handling of duplicate connectors (e.g., multiple Notion workspaces) and better OAuth re-authentication flows. [#81033, #81020]

### 6. Developer Pain Points
* **Safety Over-Correction:** The most pervasive frustration is the **Fable 5 safety classifier**, which is frequently flagging benign administrative and security-focused coding tasks as policy violations.
* **Session Stability:** Developers working in "headless" or "unattended" environments are struggling with session persistence, specifically regarding authentication timeouts and MCP server disconnections during restarts.
* **Context Management:** As sessions grow, the "auto-compact" feature is causing unexpected context loss, leading to "blind" agents that lose track of critical project files.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-25

## 1. Today's Highlights
Four rapid-fire Rust alpha releases (0.146.0-alpha.6–9) shipped in the last 24 hours, signaling an active pre-release cycle. The issue tracker is dominated by Windows-specific regressions: Git process leaks, context compaction inefficiencies, and WSL repository detection failures. Meanwhile, 15+ PRs merged today harden MCP integration, thread forking, plugin publishing, and enterprise plan support.

## 2. Releases
| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.146.0-alpha.9` | Alpha | Latest in the 0.146 series; incremental fixes atop alpha.8 |
| `rust-v0.146.0-alpha.8` | Alpha | |
| `rust-v0.146.0-alpha.7` | Alpha | |
| `rust-v0.146.0-alpha.6` | Alpha | |

No changelogs attached; watch the [releases page](https://github.com/openai/codex/releases) for consolidated notes when 0.146 stabilizes.

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#17229](https://github.com/openai/codex/issues/17229) | **Windows: Git process leak (`git.exe status --porcelain=v1 -z`)** | Orphaned `git.exe`/`conhost.exe` processes accumulate, degrading system performance. | 33 comments, 6 👍 — open since Apr 9 |
| [#19585](https://github.com/openai/codex/issues/19585) | **Pro weekly limit drains fast on 5.5; context compaction unstable** | Direct cost impact for Pro ($200) subscribers; compaction loops waste quota. | 33 comments, 29 👍 |
| [#20880](https://github.com/openai/codex/issues/20880) | **App silently creates empty `~/Documents/Codex` on every launch** | Pollutes user Documents folder; no opt-out. | 20 comments, 39 👍 |
| [#35057](https://github.com/openai/codex/issues/35057) | **Windows Desktop unstartable after adding second folder to project** | Blocks multi-folder workflows on Windows 11. | 19 comments, 5 👍 — filed Jul 24 |
| [#28078](https://github.com/openai/codex/issues/28078) | **Xcode 27 beta: ChatGPT Pro sign-in fails (OTP), Go account works** | Blocks Pro users on latest Xcode beta; auth path regression. | 18 comments, 11 👍 |
| [#25928](https://github.com/openai/codex/issues/25928) | **VS Code/Cursor: Prompts randomly disappear before queueing** | Core UX break in IDE extension; loss of work. | 16 comments, 8 👍 |
| [#35032](https://github.com/openai/codex/issues/35032) | **Auto-compaction reports success but leaves context at ~80% full** | Compaction ineffective → repeated cycles → quota burn. | 14 comments |
| [#22085](https://github.com/openai/codex/issues/22085) | **[CLOSED] Windows: Sustained high CPU from Git processes after update** | Fixed in recent build; confirms Git-spawn regression class. | 14 comments, 24 👍 |
| [#34133](https://github.com/openai/codex/issues/34133) | **Windows: `Page.captureScreenshot` crashes GPU (Code Integrity rejects `vk_swiftshader.dll`)** | Browser tool crashes app; security policy blocks bundled shader. | 9 comments |
| [#34677](https://github.com/openai/codex/issues/34677) | **GPT-5.6 Pro behaves like Instant / GPT-5.5 Mini (silent reroute?)** | Model selection mismatch; reasoning mode not activating. | 2 comments, 5 👍 — high severity if confirmed |

## 4. Key PR Progress (10 Notable Merges)

| PR | Area | Summary |
|----|------|---------|
| [#35275](https://github.com/openai/codex/pull/35275) | Tracing/Remote | Preserve tracing spans across lazy remote exec-server startup; add spans for Noise, rendezvous WS, env registry. |
| [#35271](https://github.com/openai/codex/pull/35271) | Responses API | Add `code_mode_tool_names` to Responses Lite metadata; reserve key against client overrides. |
| [#35267](https://github.com/openai/codex/pull/35267) | Network Approval | Scope approvals to turn/execution; cancel denied/abandoned requests; fix concurrency races. |
| [#35266](https://github.com/openai/codex/pull/35266) | Code Mode | Allow `features.code_mode_host.disable_in_process_fallback` to error out instead of falling back to embedded V8. |
| [#35264](https://github.com/openai/codex/pull/35264) | macOS Packaging | Sign & notarize bundled helpers (`rg`, `zsh`) *before* archive assembly; closes notarization gap. |
| [#35262](https://github.com/openai/codex/pull/35262) | Analytics/Plugins | Propagate `remote_plugin_id` into skill invocation facts & analytics events. |
| [#35261](https://github.com/openai/codex/pull/35261) | Plugin Metadata | Carry local + remote plugin IDs through `SkillMetadata`; resolve from install snapshot. |
| [#35254](https://github.com/openai/codex/pull/35254) | Plugin Publishing | Expose `canPublishToWorkspace` in plugin share contexts & `plugin/share/save` responses. |
| [#35251](https://github.com/openai/codex/pull/35251) | Thread Forking | Allow ephemeral forks from paginated threads with `excludeTurns: true`; no rollout created. |
| [#35238](https://github.com/openai/codex/pull/35238) | Enterprise Auth | Recognize `ent26` plan across auth, rate-limit payloads, cloud-config eligibility. |

*All above PRs merged/closed today. See [#29752](https://github.com/openai/codex/pull/29752) (credential broker integration) and [#31307](https://github.com/openai/codex/pull/31307) (configurable MCP endpoint) for ongoing work.*

## 5. Feature Request Trends (from Issue Themes)
1. **Windows-first parity** — Git process management, WSL detection, crash fixes, filesystem quirks (`~/Documents/Codex`).
2. **Context/quota efficiency** — Compaction that actually reduces tokens, transparent usage accounting, batch tool calls ([#35050](https://github.com/openai/codex/issues/35050)).
3. **Model routing transparency** — Detect/prevent silent fallbacks (Pro → Mini), expose active model in UI.
4. **MCP & plugin extensibility** — Configurable endpoints, per-thread config refresh, workspace publishing, remote plugin IDs.
5. **Thread/session reliability** — Fork paginated threads, ephemeral forks, hook transcript persistence, database locking fixes.
6. **Safety filter precision** — Reduce false positives on cybersecurity/legitimate code tasks ([#34306](https://github.com/openai/codex/issues/34306), [#33810](https://github.com/openai/codex/issues/33810)).

## 6. Developer Pain Points (Recurring Frustrations)
- **“Git spam on Windows”** — Multiple issues (#17229, #22085, #20933, #33450) report runaway `git.exe` spawns causing CPU/disk pressure; users disable Git integration or kill processes manually.
- **“Quota burns without visibility”** — Compaction claims success but leaves 80% context; weekly limits deplete in days; no per-turn usage breakdown.
- **“Silent model downgrades”** — Pro users see Instant-speed responses, model self-reports as 5.5 Mini; erodes trust in model selector.
- **“WSL/remote workflows broken”** — Valid WSL repos marked “non-Git” or “Git unavailable” after update ([#35119](https://github.com/openai/codex/issues/35119)).
- **“Safety false positives block legitimate work”** — Cybersecurity filter triggers on normal refactoring/security-audit tasks; poisons long-running threads permanently ([#35160](https://github.com/openai/codex/issues/35160)).
- **“App litters filesystem”** — Empty `~/Documents/Codex` created on every launch; no setting to redirect or disable.

---

*Data sourced from `github.com/openai/codex` — releases, issues, and PRs updated 2026-07-24 → 2026-07-25.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Today's Highlights  
The community is actively addressing critical subagent bugs (e.g., race conditions in `codebase_investigator` handling 22323) and stability regressions (e.g., generalist agent hangs 21409). Key PRs focus on security fixes (MCP token refresh 28481) and core tooling improvements (AST-aware codebase mapping 28435).  

---

### Releases  
No new releases in the last 24 hours.  

---

### Hot Issues (10)  
1. **#22323** (P1) - Subagent recovery misreports success despite hitting turn limits. Community concern due to high comment count (12) and upvotes (2).  
2. **#21409** (P1) - Generalist agent hangs indefinitely (8 comments, 8 upvotes). Critical for usability.  
3. **#25166** (P1) - Shell commands stuck in "Waiting input" state post-execution. Frequent user pain point.  
4. **#21968** (P2) - Subagents underutilized despite explicit training. Recurring feedback (6 comments).  
5. **#26522** (P2) - Auto Memory retrying low-signal sessions indefinitely. Memory management vulnerability.  
6. **#24353** (P2) - Component-level evaluation system instability (7 comments).  
7. **#22745** (P2) - AST-aware tools for codebase navigation sparking interest (7 comments).  
8. **#21983** (P1) - Browser agent failures in Wayland environments (4 comments, 1 upvote).  
9. **#22267** (P2) - Browser agent ignores `settings.json` overrides. Configuration frustration (3 comments).  
10. **#20079** (P2) - Symlink agents not recognized. Workflow limitation (4 comments).  

---

### Key PR Progress (10)  
1. **#28467**: Update Firestore schema for error tracking (pr-essential for Caretaker Agent reliability).  
2. **#28532**: Add local evaluation dataset syncing for triage workflows (enhances benchmarking).  
3. **#28531**: Fix CR LF line ending issues in diff views (addresses Widespread GitHub contribution crashes).  
4. **#28442**: Main PR for SSR Pipeline refactor (foundational for IDE integration).  
5. **#28530**: Triage evaluation framework with judge runner (critical for CI adoption).  
6. **#28435**: Add PR generator utilities (streamlines bug-fixing workflows).  
7. **#28529**: Script for GCP deployment of Caretaker services (automates infrastructure).  
8. **#28481**: Secure MCP token refresh (fixes token leakage vulnerabilities).  
9. **#28526**: Fix VSCode companion disposable leaks (prevents memory bloat).  
10. **#28434**: Implement Antigravity agent runner (core for SSR Code Pipeline).  

---

### Feature Request Trends  
1. **Subagent enhancements**: Users demand better visibility/reliability (e.g., trajectory sharing 22598).  
2. **AST-aware tooling**: Repeated requests for refined code navigation (22745, 22746).  
3. **Security hardening**: Prioritizing MCP auth fixes (28481, 28446) and token validation.  
4. **Memory system improvements**: Fixing caching/retry logic (26522, 26523).  
5. **IDE Tooling**: VSCode companion stability improvements (28526).  

---

### Developer Pain Points  
1. **Tool execution instability**: Shell-command hangs (21409, 25166) and `get-shit-done` crashes (22186) disrupt workflows.  
2. **Subagent fragmentation**: Developers report subagents not consistently engaged despite configuration.  
3. **Browser agent fragility**: Wayland mode issues (21983) and config override failures (22267).  
4. **Memory system bugs**: Auto Memory inbox skipping patches (26523) and log verbosity (26525).  
5. **CLI command reliability**: Spurious hangs during Vite app creation (22465) and `core` process fragmentation (22093).  

All issue/PRs links are available on [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli).


</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 202­er‑07‑25**

---

### 1. Today's Highlights  
The latest 1.0.75 release brightened the tool‑suite with full support for Claude Opus 5, expanding the range of models operable from the terminal. The community is busy wrestling with several regressions in plan‑mode and material‑handling, while still hunting for a robust “ready‑for‑input” hook to improve developer workflow.

---

### 2. Releases  
- **v1.0.75 – 2026‑07‑24**  
  * Adds support for AI model *Claude Opus 5* (officially enabled in “plan‑mode” and “--model” selection). No breaking changes Anschluss.

---

### 3. Hot Issues  
| # creative # | Issue | Why it matters | Status |
|--------------|-------|----------------|--------|
| **[1128](https://github.com/github/copilot-cli/issues/1128)** | *Feature: `awaitingUserInput` hook* | The CLI lacks a “ready‑for‑input” trigger, making it hard to hook into promise‑oriented flows or custom UI overlays. 28 👍, 5 comments. | Open |
| **[4188](https://github.com/github/copilot-cli/issues/4188)** | *Regression: plan‑mode blocks `gh` shell tools* | Plan‑mode is essential for non‑intrusive changes; blocking `gh api` and `jq` causes backwards‑compatibility headaches. 3 thumbs. | Open |
| **[4183](https://github.com/github/copilot-cli/issues/4183)** | *Auto‑compaction fails: 5 MB request body limit* | Long, tool‑heavy sessions keep the context inside the 5 MB body limit, stalling the model. 10 thumbs. | Open |
| **[3773](https://github.com/github/copilot-cli/issues/3773)** | *Broken light theme & low contrast for prompts* | Accessibility is a key concern; developers report poor readability on light backgrounds. 3 thumbs. | Open |
| **[4214](https://github.com/github/copilot-cli/issues/4214)** | *Eternal loading spinner on session start* | New sessions hang indefinitely, blocking workflows and auto‑capture of usage stats. 2 thumbs. | Open |
| **[4220](https://github.com/github/copilot-cli/issues/4220)** | *Plan‑mode false‑positive on `gh api` GETs* | Incorrect “may modify” gating blocks read‑only GitHub CLI queries needed for synergy with LLM‑_CARD. 1 thumbs. | Open |
| **[4222](https://github.com/github/copilot-cli/issues/4222)** | *Infinite render loop in VS Code integrated terminal on Windows* | Leads to UI freezes and blank “Working…” screens, hindering productivity. 0 thumbs. | Open |
| **[3675](https://github.com/github/copilot-cli/issues/3675)** | *Session worktree naming & cleanup* | Worktrees currently live in ad‑hoc paths, causing clutter and confusion. 1 thumbs. | Open |
| **[4233](https://github.com/github/copilot-cli/issues/4233)** | *Missing `usage_update` in `--acp` mode* | ACP clients (Zed, Velocity Shards) can’t show AI‑credits usage, impacting declarative CI integration. 2 thumbs. | Open |
| **[4251](https://github.com/github/copilot-cli/issues/4251)** | *Large‑sessionفيرResume OOMs* | Upgrading to 1.0.74 now crashes long sessions, raising memory‑usage reports & CPU thrashing (70 min). 0Arthur. | Open |

*Developer notes*: The community is heavily invested in smooth “plan‑mode” operations, sensible UI, and session management. Most comments are quick “yes, that hurts” or “any ETA?” – a clear signal of friction points that, if resolved, would lift adoption significantly.

---

### 4. Key PR Progress  
> **No pull requests were opened or updated in the last 24 hours.**  
> The community is predominantly focused on issue triage and release‑level bug fixes, with the next major PR cycle expected in late July.

---

### 5. Feature‑Request Trends  
1. **Event hooks** – Developers want granular hooks (`awaitingUserInput`, `preToolUse`, `postTurn`) to weave the CLI into automation or custom UIs.  
2. **Context‑Aware Configuration** – Requests for scoping injection instructions, config‑driven worktree folders, and better handling of `applyTo` patterns.  
3. **Parity between interactive & ACP aet** – `usage_update`, `context_window` stats, and progress bars are increasingly critical for IDE‑extension use cases.  
4. **Permissions & Safety** – Clearer permission dialogs That respect “read‑only” vs “write” states, especially for GitHub CLI tool calls.  
5. **Visual Accessibility** – Theme‑compatibility, contrast, and color‑blind‑safe palettes are on the radar as the CLI moves into more mature desktop/UI usage.

---

### 6. Developer Pain Points  
| Pain Point | What’s happening | Community sentiment |
|------------|------------------|----------------------|
| **Zombies & Resource Drain** | `copilot` (1.0.71) leaves forked processes as zombies, consuming 8 Z per session. | Moderately documented; ongoing fix in 1.0.75. |
| **CLI‑Tool Execution Lock‑in** | Plan‑mode blocks `gh`, `jq`, and other command‑line tools, disrupting workflows. | Prolonged discussions; no quick fix. |
| **Session Bloat & OOMs** | Resuming huge sessions triggers >70 min CPU usage and memory spikes. | Feature‑flagged in 1.0.74; community debate. |
| **UI Freezes** | Infinite render loop on Windows VS Code terminals → “Working…” remains static. | 0 thumbs so far, but visible in issue comments. |
| **Password Masking Mishandling** | Masking logic in agents consumes extra tokens, inflates usage stats. | Unsettled; awaits design review. |
| **Theme & Accessibility** | Low‑contrast light themes hinder readability; markup in CLI becomes unreadable. | 3 thumbs; immediate developer pain, especially for accessibility‑focused teams. |

**Bottom line:** The Copilot CLI is on the cusp of a major stabilization push (v1.0.75), but a handful of core regressions and usability gaps are still inflating developer friction. Addressing these, especially in plan‑mode, event‑hooks, and resource cleanup, will be critical for an enterprise‑grade experience.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑07‑25**

---

### 1. Today's Highlights
- **Corporate SSL support arrives** – PR #762 adds `SSL_CERT_FILE` support, fixing common network authentication failures for users behind corporate proxies.  
- **Login hiccups** – Several users reported `kimi login` failures (#2556) and VS Code freezes (#2326), signalling a wider stability issue that the team is monitoring closely.

---

### 2. Releases
*None released in the last 24 hours.*

---

### 3. Hot Issues  
| # | Title | Why It Matters | Community Reaction |
| miał | | | |
| **1070** barri | “Login failed: Cannot connect to host auth.kimi.com” | Authentication is the entry point for every session; persistent login failures can block entire workflows. | 7 comments, 0 thumbs‑up – users are actively troubleshooting SSL and networking headaches. |
| **1282** | Feature Request: Remote Control – Continue local sessions from any device | Extending the desktop CLI to mobile / browser would greatly increase developer flexibility and reduce context loss. | 7 comments, 16 thumbs‑up – a strong vote for cross‑device continuity. |
| **2326** | VS Code Kimi Freezes | The VS Code extension is pivotal for many developers; freezes cause lost time and potential data loss. | 3 comments, 0 thumbs‑up – urgent bug with potential root‑cause hunts underway. |
| **2521** | Windows Arrow‑Key navigation fails in herdr | Usability on Windows is a key part of Kimi’s multi‑platform promise; navigation failure reduces productivity. | 1 comment, 0 thumbs‑up – isolated but annoying issue. |
| **2556** | `kimi login` fails on Linux ARM64 | As ARM devices grow in popularity, login reliability on those platforms is critical. | 0 comments, 0 thumbs‑up – new bug flagged by a fresh user. |

> **Note:** Only five issues were updated in the last 24 hours – we’ll list all of them for completeness.

---

### 4. Key PR Progress	protected by 7 days  
| # | Title | Core Fix / Feature |
|---|-------|--------------------|
| **762** | *fix: respect SSL_CERT_FILE env var for corporate proxy support* | Enables Kimi CLI to plug corporate SSL certs, eliminating proxy‑related “certificate verify failed” errors. |
| **1637** | *fix: route MCP server log notifications to loguru instead of TUI* | Prevents MCP logs from intermixing with the terminal UI, improving readability during interactive sessions. |

> **Note:** Only two PRs were updated in the last 24 hours; these are the most critical technical improvements.

---

### 5. Feature Request Trends  
1. **Cross‑platform session continuity (Remote Control)** – Issue #1282 shows a significant appetite for seamless workflow between desktop, mobile, and browser.  
2. **Enhanced proxy/SSL support** – PR #762 underlines the need for robust corporate network compatibility (Zscaler, BlueCoat, Fortinet).  
3. **Improved VS Code integration** – Issues #2326 and 1151 (not listed) collectively highlight friction in the VS Code extension.  

---

### 6. Developer Pain Points  
- **Authentication and Network Reliability** – Repeated login failures (#1070, #2556) and network errors point to fragile connectivity handling.  
- **UI/UX Consistency Across Platforms** – Issues such as arrow‑key navigation on Windows (#2521) and VS Code freezing underscore inconsistent cross‑OS support.  
- **Operation Under Corporate Proxies** – Many developers work behind strict proxies; current SSL handling is insufficient, leading to repeated failures.  
- **Debug Visibility** – TUI flooding with server logs (#1637) makes it hard to spot user‑initiated errors.  

---

**Sources**  
Issues: [#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070), [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282), [#2326](https://github.com/MoonshotAI/kimi-cli/issues/2326), [#2521](https://github.com/M ఇతర\*... (complete list truncated for brevity).  
Pull Requests: [#762](https://github.com/MoonshotAI/kimi-cli/pull/762), [#1637](https://githubใน 开元棋牌).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑07‑25**  
*Compiled from the [anomalyco/opencode](https://github.com/anomalyco/opencode) repository.*

---

### 1. Today’s Highlights
- **v1.18.5** is now live, delivering a set of core stability fixes: Claude adaptive‑thinking handling, OpenAI‑Responses phase safety, symlink preservation in search results, and Mistral reasoning‑history stability.  
- Community attention is coalescing around **auto‑discovery of OpenAI‑compatible endpoints** (#6231) and a **cross‑project session picker** (#31932), both of which aim to simplify local‑provider workflows.  
- A growing pain point: **long‑running shell commands** that hang after completion (#25038) and **model‑switching glitches** that cause responses to flip language mid‑session (#25130).

---

### 2. Releases
- **v1.18.5** – *Core bug‑fix release* (no new features).  
  - Improves Claude adaptive‑thinking handling.  
  - Prevents OpenAI Responses phase breakage.  
  - Preserves `grep` symlink paths and Mistral reasoning history.  
  - Stabilises Mistral inference across turns.  

  *No other version bumps were merged in the last 24 h.*

---

### 3. Hot Issues  *(10 stand‑out discussions, sorted by comment volume & impact)*  

| # | Title | Why it matters | Community buzz |
|---|-------|----------------|----------------|
| **[#6231](https://github.com/anomalyco/opencode/issues/6231)** | Auto‑discover models from OpenAI‑compatible provider endpoints | Eliminates manual `opencode.json` model listing; essential for ever‑changing local providers (LM Studio, Ollama, llama.cpp). | 188 👍, 32 comments – strong demand for zero‑config discovery. |
| **[#24316](https://github.com/anomalyco/opencode/issues/24316)** | Progress halts with Qwen 3.6 35B‑a3b on naked tool call | Intermittent “freeze” when using a heavy Qwen model; impacts high‑end local inference. | 2 👍, 19 comments – users report reproducibility with recent llama.cpp builds. |
| **[#31932](https://github.com/anomalyco/opencode/issues/31932)** | Cross‑project session list / picker for TUI | Enables seamless work across multiple repositories; a long‑requested ergonomics boost. | 5 👍, 13 comments – multiple teams cite “multi‑repo fatigue”. |
| **[#25038](https://github.com/anomalyco/opencode/issues/25038)** | Long‑running shell commands hang after “BUILD SUCCESSFUL” | Breaks CI‑like workflows (e.g., Android Gradle builds) where completion should be signaled. | 9 👍, 11 comments – repeated “hang” reports across platforms. |
| **[#25130](https://github.com/anomalyco/opencode/issues/25130)** | opencode jumps into a different language | Responses occasionally switch language mid‑conversation, breaking workflows that expect a single language. | 0 👍, 10 comments – users ask for forced language lock. |
| **[#6479](https://github.com/anomalyco/opencode/issues/6479)** | opencode reads `agents.md` from parent directories | Unexpected file discovery can leak configuration; security & caching concerns. | 0 👍, 10 comments – flagged as a potential security surface. |
| **[#38378](https://github.com/anomalyco/opencode/issues/38378)** | kimi‑k3 fails on `/v1/messages` with “Upstream request failed” while `/v1/chat/completions` works | Highlights inconsistency between Anthropic‑compatible endpoints; affects model availability on Go plans. | 0 👍, 4 comments – users request parity between endpoints. |
| **[#37650](https://github.com/anomalyco/opencode/issues/37650)** | Tools: optional search metadata breaks pending permission listing | Permission schema encoding fails when optional tool inputs are omitted. | 0 👍, 4 comments – core bug for permission workflows. |
| **[#34006](https://github.com/anomalyco/opencode/issues/34006)** | GUI vs Terminal paste behavior for local file paths | Inconsistent paste handling and inability to paste as plain text hinder productivity. | 1 👍, 4 comments – UI friction reported across platforms. |
| **[#38731](https://github.com/anomalyco/opencode/issues/38731)** | “Is OpenCode unstable?” – frequent abrupt stops requiring manual “continue” | Users experience repeated stalls, forcing manual restarts; signals reliability concerns. | 0 👍, 4 comments – recurring complaint in recent days. |

---

### 4. Key PR Progress  *(10 PRs that are shaping the next iteration)*  

| PR | Title | Core contribution |
|----|-------|-------------------|
| **[#38783](https://github.com/anomalyco/opencode/pull/38783)** | *fix(core): keep execute tool cache stable* | Guarantees the native `execute` tool stays available when the catalog is empty; preserves explicit denial state. |
| **[#38777](https://github.com/anomalyco/opencode/pull/38777)** | *fix(ai): preserve response message phases* | Aligns Open Responses assistant phases (`commentary`, `final_answer`, `null`) with the official OpenAI contract and retains phase metadata on replay. |
| **[#38759](https://github.com/anomalyco/opencode/pull/38759)** | *fix(core): branch‑keyed repository cache with gated reference readiness* | Keys repository checkouts by branch, eliminates shared mutable checkouts, and guarantees cache validity before use. |
| **[#38776](https://github.com/anomalyco/opencode/pull/38776)** | *feat(core): enable fff in node runtimes* | Adds `@ff-labs/fff-node` runtime, swaps stub for Bun‑compatible search adapter, and protects conditional runtime selection. |
| **[#38764](https://github.com/anomalyco/opencode/pull/38764)** | *fix(tui): handle Windows path separators in status dialog plugin names* | Normalises path parsing on Windows, preventing UI mis‑display of plugin names. |
| **[#38772](https://github.com/anomalyco/opencode/pull/38772)** | *feat(tui): show model variant in subagent footer* | Displays model, provider, and variant details in subagent footers, mirroring main‑agent metadata. |
| **[#35195](https://github.com/anomalyco/opencode/pull/35195)** | *fix(session): preserve agent and model on async prompt without explicit fields* | Ensures async prompts retain agent/model context even when fields are omitted, reducing session‑state loss. |
| **[#36781](https://github.com/anomalyco/opencode/pull/36781)** | *feat(auth): add support for multiple profiles per provider* | Introduces named profiles (e.g., separate OpenRouter keys) enabling multi‑key management per provider. |
| **[#38785](https://github.com/anomalyco/opencode/pull/38785)** | *fix(core): clarify code mode tool boundary* | Moves the tool‑availability invariant into the execute description and instructs agents to ignore out‑of‑catalog tools. |
| **[#38743](https://github.com/anomalyco/opencode/pull/38743)** | *[contributor] refactor(core): settle steps lock‑free by joining tool fibers first* | Removes all step‑event locking, restructuring `callModel` settlement to be contention‑free and deterministic. |

---

### 5. Feature Request Trends
- **Automation & Discovery** – auto‑discover models from OpenAI‑compatible endpoints; auto‑populate provider lists.  
- **Multi‑repo ergonomics** – cross‑project session picker, duplicate‑issue guard, and session management UI overhaul.  
- **Model‑level control** – preserve language/voice across responses; expose modelvariant metadata in UI; support multiple provider profiles.  
- **Performance visibility** – per‑tool elapsed time, turn duration, and background subagent model selection feedback.  
- **Robustness for heavy models** – stability fixes for large Qwen/Mistral models and preventing hangs on long‑running shell commands.

---

### 6. Developer Pain Points
- **Frequent hangs & crashes** – sessions stall after ~30 s or crash almost immediately after task submission (Issues #25038, #38766, #38756).  
- **Inconsistent UI behavior** – pasting file paths behaves differently in Desktop vs Terminal; no plain‑text paste option; GUI sessions invisible for OneDrive reparse‑point directories.  
- **Permission & schema encoding bugs** – optional search metadata causing `session.permission.list` failures (Issue #37650).  
- **Model‑endpoint parity** – kimi‑k3 works on `/v1/chat/completions` but fails on `/v1/messages` (Issue #38378).  
- **Background subagent model reversion** – manual model selection resets to default when background subagents are enabled (Issue #38770).  
- **Missing debug information** – bind failures in `opencode serve` only surface “Unexpected error / ServeError” without the underlying `errno`.  

---

*All links point to the live repository; up‑votes (👍) and comment counts reflect community engagement as of 2026‑07‑25.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-25

## 1. Today's Highlights
Pi v0.82.0 ships **constrained tool sampling** — tools can now enforce strict JSON Schema, OpenAI Lark, or regex grammars with model capability metadata to prevent unsupported requests. Meanwhile, the community is wrestling with a cluster of authentication and session-stability regressions: Copilot Enterprise compaction failures, GitHub auto-logout recurrences, and model-switch context-window mismatches that silently break long-running sessions.

## 2. Releases
**v0.82.0** — *Constrained Sampling for Tools*  
Tools can declare a `sampling` constraint (`jsonSchema`, `lark`, `regex`) and the runtime will validate model support before sending requests. Includes model capability metadata to gate unsupported grammars.  
🔗 [Release notes](https://github.com/earendil-works/pi/releases/tag/v0.82.0) | [PR #6654](https://github.com/earendil-works/pi/pull/6654) (prompt cache key override)

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6768](https://github.com/earendil-works/pi/issues/6768) | **Compaction fails with Copilot Enterprise** (OpenAPI 421, Anthropic auth errors) | Blocks enterprise users on long sessions; compaction is critical for context management. | 12 comments, 11 👍 — high urgency |
| [#6686](https://github.com/earendil-works/pi/issues/6686) | **Pi auto-logs out of GitHub** (regression from #2725) | Recurring auth instability disrupts workflow; affects Copilot and GitHub providers. | 12 comments — persistent pain point |
| [#6922](https://github.com/earendil-works/pi/issues/6922) | **Default llama.cpp model shows “No models available” on startup** | Race condition between async model refresh and session init; blocks local-first users. | 6 comments, 10 👍 — high visibility |
| [#6948](https://github.com/earendil-works/pi/issues/6948) | **llama.cpp defaultProvider/defaultModel not applied at startup** | Same root cause as #6922; model picker works post-start but session starts wrong. | 4 comments — in progress |
| [#7020](https://github.com/earendil-works/pi/issues/7020) | **Pi sometimes doesn’t continue after compaction** | Silent stall in coordinator-style long sessions; undermines trust in automation. | 3 comments, 1 👍 — in progress |
| [#7047](https://github.com/earendil-works/pi/issues/7047) | **Gemini 3.x tool-call IDs stripped in multi-turn** | Breaks function calling loops; IDs required by Gemini 3 for call/response matching. | 4 comments, 1 👍 — new regression |
| [#6970](https://github.com/earendil-works/pi/issues/6970) | **GitHub Copilot Plugin auth invalidates tokens across devices** | Pi uses plugin auth instead of OAuth, conflicting with `copilot-lsp`/Neovim. | 3 comments, 1 👍 — in progress |
| [#7048](https://github.com/earendil-works/pi/issues/7048) | **Compaction summary truncated mid-word on token cap** | `stopReason === "length"` not checked; persists incomplete summaries. | 3 comments — data integrity risk |
| [#5871](https://github.com/earendil-works/pi/issues/5871) | **Anthropic OAuth detection hardcoded to `sk-ant-oat`** | Scoped keys (`sk-ant-api03-`) misclassified; blocks valid credentials. | 7 comments — PR #6148 attempting fix |
| [#6951](https://github.com/earendil-works/pi/issues/6951) | **Qwen3 8-max-preview reasoning effort map incorrect** | Docs specify `low/medium/xhigh`; Pi sends `minimal/low/medium/high` → 400 errors. | 7 comments, 1 👍 — config gap |

## 4. Key PR Progress (Top 10 by Scope & Readiness)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#7082](https://github.com/earendil-works/pi/pull/7082) | **perf(tui): O(viewport) transcript rendering** | Viewport windowing + container memoization; fixes input lag on 5k+ line transcripts with base64 images. | Open |
| [#7072](https://github.com/earendil-works/pi/pull/7072) | **fix(coding-agent): cache llama.cpp model catalog** | Fixes #6948/#6922 by caching catalog to avoid startup race. | Open |
| [#7085](https://github.com/earendil-works/pi/pull/7085) | **feat(coding-agent): add vitest eval harness** | Private `packages/evals` workspace with Pi SDK; isolated smoke eval + usage metadata. | Open |
| [#7081](https://github.com/earendil-works/pi/pull/7081) | **feat(ai): support Claude Opus 5 on Bedrock** | Configures adaptive thinking (required); sanitizes Bedrock error messages. | Open |
| [#7050](https://github.com/earendil-works/pi/pull/7050) | **Normalize OpenAI tool schema required arrays** | Emits `required: []` instead of `null`; fixes DeepSeek/strict provider rejections. | Closed |
| [#7009](https://github.com/earendil-works/pi/pull/7009) | **fix: await wl-copy exit code & fallback to xclip** | Fixes #6872; sandboxed Wayland environments now fall through correctly. | Closed |
| [#7046](https://github.com/earendil-works/pi/pull/7046) | **feat: provider-neutral prompt cache contracts** | Exhaustive `KnownApi` lowering, fail-closed custom-provider stripping, cache usage aggregation. | Closed |
| [#7061](https://github.com/earendil-works/pi/pull/7061) | **fix(openai-completions): handle array content & missing finish_reason** | Databricks/Qwen3/gpt-oss return typed-array `delta.content`; guards against `[object Object]`. | Closed |
| [#7036](https://github.com/earendil-works/pi/pull/7036) | **fix(coding-agent): reload model config in picker** | `ModelRuntime.refresh()` reloads `models.json` before catalog; `/model` picks up local changes instantly. | Closed |
| [#6654](https://github.com/earendil-works/pi/pull/6654) | **feat(ai): add promptCacheKey stream option** | Opt-in `promptCacheKey` overrides `sessionId` for `clampOpenAIPromptCacheKey()` in 4 providers. | Open |

## 5. Feature Request Trends
1. **Prompt caching control** — Explicit cache keys (#6654), provider-neutral contracts (#7046), and Bedrock/Opus 5 adaptive thinking (#7081).
2. **Model switching robustness** — Context-window validation, thinking-block conversion, and reasoning-effort maps for Qwen/Gemini/DeepSeek (#7065, #6951, #6998).
3. **llama.cpp first-class integration** — Startup race fixes (#7072), thinking-level passthrough (#5917), and catalog caching.
4. **Extension API maturity** — `setRenderedSession` for external session rendering (#7059), safe reload deferral (#5735), output padding exposure (#7045).
5. **Transport & connectivity** — WebSocket for OpenAI Responses (#3442), Undici proxy tunneling fix (#7049), corporate proxy support (#7008).

## 6. Developer Pain Points
- **Auth fragmentation**: Copilot Enterprise compaction broken (#6768), GitHub auto-logout (#6686), Anthropic OAuth misdetection (#5871), Bedrock profile ignored when env vars exist (#6957), Copilot Plugin vs OAuth conflict (#6970).
- **Session continuity**: Compaction stalls (#7020), truncated summaries (#7048), model-switch context overflow (#7065), Gemini tool-call ID loss (#7047).
- **Local model UX**: llama.cpp startup race (#6922, #6948), thinking-level no-op (#5917), model regen typecheck failures (#7079).
- **Environment friction**: Corporate proxy breaks HTTP(S) (#7008, #7049), sandboxed clipboard (`wl-copy` exit code ignored) (#6872), large grep crashes (#7035).
- **Test & CI reliability**: Network-dependent model registry tests flake (#7031), delisted Codex models break typecheck (#7079).

---

*Generated from `earendil-works/pi` GitHub data (releases, issues, PRs updated 2026-07-24 → 2026-07-25).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-07-25

## Today's Highlights
The platform released v0.21.0 with enhanced workspace management and IDE integration capabilities, while addressing critical CLI rendering issues. Major developments include improved background shell handling, new integration adapters for GitHub notifications, and significant advances in SWE-bench benchmarking with 500/500 cases tested. The community is actively addressing performance bottlenecks and UI/UX issues across multiple components.

## Releases

### v0.21.0
A major release featuring:
- System prompt reorganization into stable/context/volatile layers for better memory management
- Background shell status sidecar implementation to prevent model confusion
- Service Agent Engine for background auto-control agents
- GitHub polling adapter with notification-as-wakeup architecture
- Workspace-level Channel management API
- Enhanced web-shell features including git chip preloading and pull requests panel

## Hot Issues

1. **#5800 [OPEN]** CLI rendering bug: Last line of assistant replies taller than terminal height gets overwritten in static mode
   - Critical UI bug affecting message display clarity; 8 comments show active community discussion
   - https://github.com/QwenLM/qwen-code/issues/5800

2. **#7684 [OPEN]** Command mode input position misalignment when statusline shows multiple lines
   - Input method candidate box displays away from cursor position, impacting user experience
   - 5 comments indicate ongoing investigation by Chinese developers
   - https://github.com/QwenLM/qwen-code/issues/7684

3. **#7264 [OPEN]** Cold-start performance bottlenecks from eager static import closure
   - 17.24 MiB/2420 modules loaded before first response; major optimization target
   - 5 comments suggest complex fix requiring architectural changes
   - https://github.com/QwenLM/qwen-code/issues/7264

4. **#7631 [OPEN]** ACP Bridge xterm.js parsing errors in WeChat channel
   - JSON parsing failures with Int32Array params causing integration issues
   - 5 comments; technical debugging required for WeChat-specific scenarios
   - https://github.com/QwenLM/qwen-code/issues/7631

5. **#7699 [OPEN]** Unity MCP connection issues in VS Code extension
   - Qwen Code fails to connect while Claude Code succeeds; extension-specific problem
   - 3 comments; configuration mismatch suspected
   - https://github.com/QwenLM/qwen-code/issues/7699

6. **#7679 [OPEN]** Multi-agent rule violation: QWEN.md defaults overridden
   - Model spawns subagents despite explicit rules against it; policy enforcement broken
   - 3 comments; system prompt bias identified as root cause
   - https://github.com/QwenLM/qwen-code/issues/7679

7. **#7671 [OPEN]** Plan mode manual switch issues: model not notified
   - Manual mode transitions leave models unprepared; error messages unhelpful
   - 3 comments; user experience degradation in interactive sessions
   - https://github.com/QwenLM/qwen-code/issues/7671

8. **#7658 [OPEN]** Stream rate-limit retry delays hardcoded to 60s/120s/240s
   - API retry configuration not user-configurable, causing potential delays
   - 2 comments; feature request for parameterization
   - https://github.com/QwenLM/qwen-code/issues/7658

9. **#7575 [CLOSED]** Skill loading issues in channel/ACP mode
   - User-level skills from ~/.qwen/skills/ not loaded; project-level precedence broken
   - 2 comments; precedent validation completed
   - https://github.com/QwenLM/qwen-code/issues/7575

10. **#7626 [CLOSED]** Background shell relaunches on empty output files
    - Long-running background jobs with buffered stdout trigger model reactivation
    - 3 comments; fix implemented to prevent unnecessary shell restarts
    - https://github.com/QwenLM/qwen-code/issues/7626

## Key PR Progress

1. **PR #7699** - feat(dingtalk): Support outbound image delivery
   - Enables agents to send local images created during tasks
   - Validates and uploads files, replacing markers with DingTalk markdown
   - https://github.com/QwenLM/qwen-code/pull/7699

2. **PR #7669** - fix(core): Write status sidecar for background shells
   - Background shells leave machine-readable status files alongside output
   - Prevents models from misreading quiet background shell states
   - https://github.com/QwenLM/qwen-code/pull/7669

3. **PR #7632** - feat(channels): GitHub polling adapter with notification-as-wakeup architecture
   - Polls GitHub notifications for @mentions; fundamentally redesigned architecture
   - Provides new approach to GitHub integration beyond shared abstractions
   - https://github.com/QwenLM/qwen-code/pull/7632

4. **PR #7625** - Feature: Fork profiles for tool-restriction presets
   - Named presets defining which tools forks can execute
   - Includes optional prompt hints and per-project storage
   - https://github.com/QwenLM/qwen-code/pull/7625

5. **PR #7696** - Feature: Service Agent Engine
   - Agent-agnostic runtime for background auto-control agents
   - Simplifies creation, configuration, and monitoring of service agents
   - https://github.com/QwenLM/qwen-code/pull/7696

6. **PR #7642** - feat(web-shell): Read-only GitHub pull requests panel
   - Adds PR tab alongside existing Changes and History tabs
   - Displays PR titles, branches, authors, review decisions with CI icons
   - https://github.com/QwenLM/qwen-code/pull/7642

7. **PR #7637** - feat(serve): Expose workspace Channel management API
   - Workspace-scoped type discovery and sanitized instance snapshots
   - Implements optimistic-concurrency CRUD with lifecycle actions
   - https://github.com/QwenLM/qwen-code/pull/7637

8. **PR #7556** - feat(channels): External context provider integration
   - Phase 1 of Direct External Context Provider for trusted collaborators
   - Supports credential-restricted access to specific corpora
   - https://github.com/QwenLM/qwen-code/pull/7556

9. **PR #7527** - fix(cli): Collapse bottom-stuck virtualized list viewport
   - Addresses viewport display issues in virtualized lists
   - Improves scrolling behavior and visual presentation
   - https://github.com/QwenLM/qwen-code/pull/7527

10. **PR #7524** - Track disk cleanup for managed npm update artifacts
    - Implements safe disk cleanup for managed npm updates
    - Handles staging directories and temporary files from process terminations
    - https://github.com/QwenLM/qwen-code/pull/7524

## Feature Request Trends

1. **Generation Performance Metrics**: High demand for TPS (Tokens Per Second) and TTFT (Time-To-First-Token) measurements in `/stats`
2. **Configurable API Retry Delays**: Multiple requests to make stream rate-limit retry delays configurable
3. **Image Generation Model Support**: User-configured image generation models alongside existing vision and voice capabilities
4. **Enhanced Agent Control**: Subagent model grade selection, fork profile management, and service agent runtime control
5. **Integration Enhancements**: More granular control over external integrations (DingTalk outbound delivery, Unity MCP connections)
6. **Workspace Management**: Improved workspace trust changes with hot-reloading capabilities

## Developer Pain Points

1. **CLI Rendering Inconsistencies**: Multiple issues with message display, viewport management, and static mode behavior causing visual glitches
2. **Performance Cold-Start Bottlenecks**: 17.24 MiB eager loading creates significant delays; optimization a priority concern
3. **Configuration Complexity**: API retry settings, model selection, and integration configurations lack flexibility
4. **Background Shell Management**: Shells relaunching on empty output files and status tracking challenges
5. **Multi-Agent Coordination**: Difficulty implementing rules, controlling subagent spawns, and managing agent behaviors
6. **Integration Debugging**: WeChat channel parsing errors and Unity MCP connection issues requiring specialized troubleshooting
7. **Skill Precedence Problems**: User-level skill loading issues creating inconsistent behavior across different modes
8. **Monitoring Visibility**: Limited real-time performance metrics and generation timing information
9. **Version Control Integration**: Background shell status tracking and Git operations requiring clearer workflows
10. **Error Message Clarity**: Unhelpful error messages in mode transitions and API interactions making debugging difficult

The community is actively addressing these challenges with a balance of bug fixes, performance optimizations, and new feature implementations aimed at improving developer experience and system reliability.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest - 2026-07-25

## Today's Highlights
**CodeWhale v0.9.1** released with legacy `deepseek-tui` package deprecated, marking the transition to the new public product identity. Meanwhile, the codebase continues aggressive refactoring with major architectural changes including the **Fleet/Workflow/Lane/Runtime product model** implementation and **command-boundary refactor** to improve maintainability. Critical bug reports persist around basic functionality like `deepseek run` failing despite `deepseek doctor` passing.

## Releases
**v0.9.1 Released** - The official public release of CodeWhale with `codewhale` branding. Legacy package `deepseek-tui` is deprecated and no longer receiving updates. This marks a significant product naming shift from DeepSeek TUI to CodeWhale across all technical identifiers including command names, npm packages, and release assets.

## Hot Issues
1. **#2870 - Command-boundary refactor EPIC (17 comments)** - Tracks staged mergeable layers for architectural refactoring, proof PR #2851 provides momentum. Critical infrastructure overhaul affecting future development velocity.

2. **#4178 - Stopship workflow implementation (12 comments)** - End-to-end dogfooding of Fleet/Workflow/Lane/Runtime model against active stopship issues. Reference lane implementation for fleet-backed workflows.

3. **#4175 - Product model architecture tracker (11 comments)** - Canonical tracker for approved CodeWhale orchestration vocabulary separating Fleet, Workflow, Lane, and Runtime concepts to prevent architectural collapse.

4. **#689 - Deepseek doctor/run disconnect (8 comments)** - Critical user-facing bug where diagnostics pass but core functionality fails, representing a major user experience gap.

5. **#1004 - /dryrun preview feature (4 comments)** - High-value feature request for seeing AI requests without token consumption, especially important for V4 Pro users with large prompts.

6. **#4796 - Multimodal privacy and billing** - Addresses security/privacy gaps in audio/image transmission without user awareness or proper consent mechanisms.

7. **#3480 - TUI information architecture overhaul** - Comprehensive UX improvement for better state visualization during multi-agent work, addressing cognitive overload.

8. **#4790 - Hindi localization with Devanagari shaping** - First Devanagari locale effort, crucial for India's developer market penetration.

9. **#3313 - RuntimeThreadManager refactoring (3 comments)** - Structural cleanup splitting a 7,000+ line monolithic module into focused concerns for better maintainability.

10. **#3903 - Streaming thinking cell performance (1 comment)** - O(N²) algorithmic complexity issue re-parsing full reasoning buffer on every revision.

## Key PR Progress
1. **#4802 - CI recovery path fix (undefined comments)** - Replaces unusable recovery input with standalone workflow, addressing GitHub Actions API limitations discovered in #4801.

2. **#4799 - Release data synchronization (undefined comments)** - Fixes install page showing outdated version information by advancing published-release fact to v0.9.1.

3. **#4793 - Legacy workflow cleanup (undefined comments)** - Deletes seven v0.8.68 lane scripts, removing first-generation workflow automation pinned to closed issues.

4. **#4798 - Issue closure automation (undefined comments)** - Enforces PR accountability by requiring issue closure or justification, addressing 342 open issues with 329 touched this month.

5. **#4611 - Durable goals across turns (undefined comments)** - Fixes goal continuity across live-session turns, preserving objectives, budget, and continuation state.

6. **#4746 - README tone simplification (undefined comments)** - Refreshes documentation and translations, removing marketing jargon for clearer developer experience.

7. **#4611 - Permission posture alignment (undefined comments)** - Compact approval system preserving Full Access across handoffs while strengthening safety for non-bypassable holds.

8. **#4775 - Ignore library dependency bump (undefined comments)** - Routine dependency update from 0.4.30 to 0.4.31 for ripgrep's ignore crate.

9. **#4774 - QuickJS library update (undefined comments)** - Bumps JavaScript runtime from 0.12.0 to 0.12.1 with performance and feature improvements.

10. **#4769 - Rust toolchain update (undefined comments)** - Updates dtolnay/rust-toolchain requirement for latest stable compiler support.

## Feature Request Trends
- **Visibility & Debugging**: `dryrun` command for request preview, better TUI state visualization during multi-agent workflows
- **Localization**: Indian English (Hindi) as first Devanagari locale, Ukrainian alongside Russian, comprehensive localization matrix
- **Privacy & Consent**: Multimodal data transmission transparency, user-configurable constitution with validator
- **Architecture Improvements**: Command-boundary refactoring, Fleet/Workflow/Lane/Runtime separation, modularized runtime components
- **Workflow Gates**: Explicit handoffs between Fleet roles with block/approve semantics for multi-step workflows
- **Performance Optimizations**: Algorithmic fixes for O(N²) complexity in streaming thinking cells and file mention completion

## Developer Pain Points
- **Functionality Gap**: `deepseek run` failing despite `deepseek doctor` passing (Issue #689) - Fundamental trust issue with basic tool operation
- **Documentation Drift**: Install page showing outdated version information (Issue #4799) - External website inconsistent with codebase reality
- **API Complexity**: GitHub Actions workflow dispatch limitations causing failed recovery mechanisms (Issues #4801-#4802)
- **Performance Issues**: Repeated filesystem walks during @mention completion and reasoning buffer re-parsing
- **Cognitive Overload**: TUI showing excessive raw state without meaningful user guidance during complex multi-agent sessions
- **Label Pollution**: Auto-labelling incorrectly assigning "bug/question" tags to well-specified localization issues
- **Resource Management**: MCP SSE task handle fields that are written but never meaningfully read or joined

The community is actively addressing foundational architectural debt while pushing feature development, with particular focus on improving user experience, localization reach, and operational reliability. The tension between rapid feature delivery and system maintainability remains a central theme in ongoing discussions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*