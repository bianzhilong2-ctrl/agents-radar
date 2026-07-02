# AI CLI Tools Community Digest 2026-07-02

> Generated: 2026-07-02 02:26 UTC | Tools covered: 9

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

User Safety: safe

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-02 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking (Most Discussed PRs by Community Attention)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **skill-creator evaluation pipeline fixes** ([#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1323](https://github.com/anthropics/skills/pull/1323)) | Core tooling that generates/optimizes skill descriptions via automated eval loops (`run_eval.py`, `run_loop.py`) | **Highest aggregate attention**: 6+ PRs + 3 issues (#556, #1169, #1061) all targeting the same **0% recall** failure where `claude -p` never triggers skills during evaluation. Windows subprocess/encoding bugs block contributors on non-Unix platforms. | 🟢 Open (active) |
| 2 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents typographic defects in AI-generated docs: orphan/widow control, numbering alignment | 9-day discussion window; addresses universal pain point—users rarely request good typography but suffer from its absence. No merged alternative exists. | 🟢 Open |
| 3 | **self-audit (v1.3.0)** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Mechanical file verification → 4-dimension reasoning audit (correctness, completeness, safety, clarity) before output delivery | Newest high-profile PR (Jun 28); positions itself as universal quality gate for any project/stack. Four-dimension severity-priority ordering is novel. | 🟢 Open |
| 4 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Comprehensive testing skill: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Month-long review; covers full stack. Community has long requested structured testing guidance beyond ad-hoc examples. | 🟢 Open |
| 5 | **skill-quality-analyzer & skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | Meta-skills evaluating other skills across 5 dimensions (structure, examples, resources, triggers, security) | 2-month discussion; addresses marketplace quality control. Security analyzer detects permission overreach, injection vectors. | 🟢 Open |
| 6 | **ODT (OpenDocument) skill** ([#486](https://github.com/anthropics/skills/pull/486)) | Create/fill/read/convert .odt/.ods files; template filling; ODT→HTML parsing | 6-week review; only native ODF skill proposed. Triggers on "ODT", "ODS", "OpenDocument", "LibreOffice". | 🟢 Open |
| 7 | **color-expert** ([#1302](https://github.com/anthropics/skills/pull/1302)) | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color spaces (OKLCH, OKLAB, CAM16), accessibility contrast, palette generation | 2-day burst; highly specialized but fills gap for design/visualization tasks. Self-contained, no external deps. | 🟢 Open |
| 8 | **sensory (macOS automation via AppleScript)** ([#806](https://github.com/anthropics/skills/pull/806)) | Native macOS automation via `osascript`; two-tier permissions (Tier 1: direct app scripting, Tier 2: Accessibility/UI) | 4-day discussion; replaces screenshot-based computer use with deterministic OS-level automation. | 🟢 Open |

> **Note**: PR comment counts were not provided in source data. Ranking synthesizes: (a) number of related PRs/Issues per theme, (b) issue comment volume on root causes, (c) recency and update frequency.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issue + Comments/👍) | Implied Need |
|-------|--------------------------------|--------------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) (34 💬, 2 👍) — Community skills published under `anthropic/` namespace impersonate official skills | **Namespace isolation**: Separate community vs. official skill namespaces; verification badges; install-time trust signals |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (14 💬, 7 👍) — Manual .skill file sharing via Slack/Teams | **Org-wide skill registry**: Shared library, one-click install, version sync across team members |
| **Skill Creator Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169), [#202](https://github.com/anthropics/skills/issues/202) (8 💬) — 0% recall, Windows crashes, non-operational tone | **Production-grade skill-authoring toolchain**: Cross-platform, accurate trigger detection, Claude-native instruction style |
| **Duplicate/Conflict Management** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) — `document-skills` & `example-skills` install identical content | **Plugin conflict resolution**: Deduplication, namespace scoping, dependency graphs |
| **Platform Expansion** | [#29](https://github.com/anthropics/skills/issues/29) (4 💬) — Bedrock support; [#16](https://github.com/anthropics/skills/issues/16) (4 💬) — MCP exposure | **Multi-platform deployment**: AWS Bedrock, Azure, GCP; MCP/JSON-RPC interfaces for skill invocation |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (6 💬) — Policy enforcement, threat detection, audit trails (closed) | **Runtime governance skills**: Guardrails for multi-agent systems, not just single-skill execution |
| **Persistent Agent Memory** | [#1329](https://github.com/anthropics/skills/issues/1329) (7 💬) — Symbolic notation for compact agent state | **Memory-efficient long-running agents**: Compressed state representation, reduced context burn |

---

## 3. High-Potential Pending Skills (Active Discussion, Not Yet Merged)

| Skill | PR | Why It’s Poised to Land |
|-------|-----|-------------------------|
| **skill-creator eval pipeline fixes** | [#1298](https://github.com/anthropics/skills/pull/1298) (umbrella) + [#1323](https://github.com/anthropics/skills/pull/1323) + [#1099](https://github.com/anthropics/skills/pull/1099) | **Blocker for all skill authors**: 0% recall makes description optimization useless. Multiple convergent fixes; maintainers acknowledging in linked issues. |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Universal utility, no competing PR, clear spec, author responsive. Typographic quality affects every generated document. |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive, well-structured, fills documented gap. Month of review suggests maintainer engagement. |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | Novel meta-skill approach; mechanical→reasoning pipeline is differentiable. Recent (Jun 28) but high conceptual completeness. |
| **skill-quality-analyzer / skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Directly supports marketplace health. Two-month gestation indicates thorough review. |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | Only ODF implementation; ISO standard format demand in enterprise/GovTech. |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | Niche but complete; zero external deps; design/accessibility workflows underserved. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for a reliable, cross-platform skill-author

---

# Claude Code Community Digest - 2026-07-02

## Today's Highlights
Claude Code hit version 2.1.198 with significant new features: Claude in Chrome is now generally available, background agent notifications provide real-time session updates, and the new `/dataviz` skill offers chart and dashboard design guidance. Meanwhile, the community is actively addressing platform-specific issues across Windows, macOS, Linux, and mobile, with particularly high engagement on coworker VM and MCP plugin integration problems.

## Releases
**v2.1.198** - Major releases include:
- **Claude in Chrome GA**: Web integration now stable for general use
- **Background agent notifications**: Sessions needing input or completed now trigger `Notification` hooks (`agent_needs_input`/`agent_completed`)
- **/dataviz skill**: New capability for chart and dashboard design recommendations

https://github.com/anthropics/claude-code/releases/tag/v2.1.198

## Hot Issues
1. **#38993** (34 comments, 25👍) - *Cowork virtiofs FUSE mount truncation issue*: Windows VM file changes not reflected, critical for development workflows where file synchronization is essential.

2. **#64654** (12 comments, 34👍) - *GitHub MCP malformed JSON-RPC payload*: Highest rated issue showing community frustration with plugin reliability affecting developer productivity.

3. **#73072** (1 comment) - *Per-subagent advisor field*: Enhancement request addressing multi-agent orchestration limitations in complex workflows.

4. **#50674** (34 comments) - *ARM64 Cowork compatibility*: Snapdragon X platform support issue blocking enterprise mobile device adoption.

5. **#63469** (19 comments, 8👍) - *API 400 role validation error*: System prompt configuration problem affecting automated tooling integration.

6. **#45942** (13 comments, 16👍) - *Android remote control permission*: Cross-platform mobile development challenge with security approval mechanisms.

7. **#68992** (1 comment, 1👍) - *Background task hanging*: CLI session management issue causing persistent task states and degraded UX.

8. **#72997** - *Harness context re-injection*: Performance optimization need for preventing redundant context processing in AI development cycles.

## Key PR Progress
The repository shows focused development on documentation and foundational features, with PR #72866 addressing README accuracy and #72543 indicating new capability development. Community priorities suggest加强 focus on critical bug fixes and feature completeness for production readiness.

## Feature Request Trends
The community is prioritizing:
- **Enhanced agent management**: Per-subagent advisor customization for complex workflows
- **Better cross-platform support**: ARM64, WSL, and mobile integration improvements
- **Performance optimization**: Context change detection and session management
- **Security enhancements**: Better safety filter accuracy to reduce false positives
- **Workflow integration**: Improved notifications and interaction models for better developer experience

## Developer Pain Points
Recurring frustrations include:
- **False positive safety filters** blocking legitimate development work (multiple AUP/cyber issues)
- **Cross-session context loss** causing repetitive work and reduced productivity
- **Platform-specific bugs** particularly with Windows, macOS, and mobile integrations
- **Plugin/integration failures** affecting MCP tools and remote connectivity
- **Performance issues** with redundant context processing and slow session management
- **Configuration complexity** around defaults and permissions across different operating systems

The community shows strong engagement with platform compatibility issues, particularly around Windows VM support, GitHub integration, and mobile workflows, indicating these as critical pain points for enterprise and professional users.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest for 2026-07-02**  

---

### **1. Today's Highlights**  
Codex saw significant focus on Git integration, UI/UX refinements, and enterprise-grade stability improvements. Key discussions include per-request telemetry logging, Windows sandbox fixups, and enhancing backward navigation with `/undo`. A critical PR (30882) addresses regress to handle mixed-case URLs in Windows safely.  

---

### **2. Releases**  
- **rust-v0.143.0-alpha.33/32**: Released as alpha versions, advancing Rust bindings progress.  
  [GitHub Link](https://github.com/openai/codex/releases)  

---

### **3. Hot Issues**  
1. **Desktop App Linux Compatibility (#11023)**  
   High community demand for a stable Linux desktop app after macOS usability issues in #10432. 674👍 (138 comments).  
2. **Model Context Window Oscillation (#30875)**  
   Critical instability in GPT-5.5 session token limits (258400 ⇄ 353400) causing crashes. 4👍.  
3. **`codex exec` Tool Call Cancellations (#29857)**  
   Silent auto-cancellation of MCP tool calls despite `default_tools_approval_mode="approve"`.  
4. **`/undo` Feature Request (#9203)**  
   Missed functionality for recovering accidental file changes (312👍).  
5. **Codex App Crashes on Windows (#29320)**  
   Post-update crashes showing "Something went wrong…" (2 URLs).  
6. **Empty `~/Documents/Codex` Creation (#20880)**  
   Persistent folder generation on launch disrupting workflows (10👍).  
7. **Windows Network Policy Violations (#24814)**  
   Prohibited enterprise network access to in-app browser (0👍).  
8. **Outdated AWS Bedrock Endpoint (#23650)**  
   CLI using deprecated `/openai/v1/responses` for Bedrock integrations.  
9. **Process Leaks on macOS (#26869)**  
   High disk pressure from unmanaged crashed tool children (3👍).  
10. **Rate Limit Confusion (#30726)**  
    Account missing expected resets despite upgraded subscription (3👍).  

---

### **4. Key PR Progress**  
1. **Reverse History Search (#30887)**  
   Optimized history navigation by async bulk fetching, avoiding per-entry locks.  
2. **Git Path Sanitization Suite (#30837/30854/30844)**  
   Prevented unsafe patch interactions by validating executable filters/merge drivers.  
3. **Telemetry Improvements (#30883)**  
   Added TTFT logging for model response timing analysis.  
4. **Reasoning Delivery Config (#30752)**  
   Introduced control over summary delivery modes (sequential/concurrent).  
5. **MCP Trigger Security (#30850/30848)**  
   Blocked unsafe Git helpers before patch application.  
6. **Vite+ Installation Detection (#30880)**  
   Unified update logic for Node/Vite-based installs.  
7. **Multi-Agent Logging (#30867/30516)**  
   Centralized communication tracking with audit trails.  

---

### **5. Feature Request Trends**  
- **Undo Functionality**: 312👍 for `/undo` to reverse unintended edits.  
- **Git Feature Parity**: Frequent requests to match VS Code-like diff/merge workflows.  
- **Enterprise Compliance**: Features like file encryption (#2847) and sandboxing dominate.  
- **Telemetry**: Metadata around model latency and session stability.  

---

### **6. Developer Pain Points**  
- **Environment Instability**: Windows crashes (#29320, #30884) and macOS process leaks (#26869).  
- **Git Ambiguity**: Race conditions between PATCH application and cleanup filters.  
- **Rate Limit Mismanagement**: Subscription quotas not aligning with usage expectations.  
- **Legacy Context Handling**: GPT-5.5 session token oscillations (PR #30875).  
- **MCP Integration Glitches**: Authentication failures and auto-cancelled calls.  

--- 

**Pull Requests & Issues referenced above are tracked here**:  
[GitHub Repository Link](https://github.com/openai/codex)


</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>


# Gemini CLI Community Digest - 2026-07-02

## Today's Highlights

A new nightly release (v0.51.0-nightly.20260702) addresses a critical symbolic link directory escape vulnerability in the memory import processor. The community continues grappling with agent stability issues, particularly around subagent behavior and generalist agent hangs, while security enhancements and performance optimizations dominate recent PR activity.

## Releases

**v0.51.0-nightly.20260702.gff00dacd9** includes a security fix for symbolic link directory escape in memory import processor, preventing potential workspace escape vulnerabilities through crafted repository symlinks. [Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260701.g7f00c5fe5...v0.51.0-nightl)

## Hot Issues

1. **[#22323 - Subagent MAX_TURNS reporting](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 9 comments) - Critical bug where subagents falsely report "GOAL success" after hitting turn limits, masking actual interruptions. High-priority concern affecting agent reliability.

2. **[#21409 - Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 7 comments, 8👍) - Severe stability issue causing indefinite hangs during basic operations, forcing users to disable subagents entirely. Strong community frustration.

3. **[#25166 - Shell command "Waiting input" stuck](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 3👍) - Core tooling regression where completed shell commands appear to hang, blocking workflow progression.

4. **[#24353 - Component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, 7 comments) - Epic tracking 76 behavioral evaluation tests across Gemini models for quality assurance improvement.

5. **[#22745 - AST-aware file operations](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, 7 comments, 1👍) - Architectural investigation into precise code navigation and reduced token usage through AST-aware tooling.

6. **[#26525 - Auto Memory security/redaction](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, 5 comments) - Security concern about sensitive data exposure in memory system logging and redaction processes.

7. **[#21983 - Browser agent Wayland failure](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 4 comments) - Platform compatibility issue affecting Linux desktop environment support.

8. **[#22267 - Browser agent ignores settings](https://github.com/google-gemini/gemini-cli/issues/22267)** (P2, 3 comments) - Configuration inconsistency where browser agents bypass user-defined settings for maxTurns and other parameters.

9. **[#21968 - Underutilized skills/subagents](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, 6 comments) - UX gap where agents don't independently leverage available custom skills despite explicit instruction capability.

10. **[#22672 - Destructive command prevention](https://github.com/google-gemini/gemini-cli/issues/22672)** (P2, 3 comments, 1👍) - Safety enhancement request to discourage git force operations and prevent risky database modifications.

## Key PR Progress

1. **[#28233 - Symbolic link security fix](https://github.com/google-gemini/gemini-cli/pull/28233)** - Resolves high-severity directory escape vulnerability in memory import processor. Merged.

2. **[#28103 - OAuth CVE-2026-48931 fix](https://github.com/google-gemini/gemini-cli/pull/28103)** - Prevents OAuth token exchange failures on patched Node.js versions. Addresses supply chain security concerns.

3. **[#27971 - Thought leakage prevention](https://github.com/google-gemini/gemini-cli/pull/27971)** - Eliminates internal monologue leakage into history turns that confuses models. Security/correctness improvement.

4. **[#28223 - JSON/IPYNB file handling](https://github.com/google-gemini/gemini-cli/pull/28223)** - Fixes critical corruption when writing Jupyter notebooks and JSON files. Surgical fix targeting specific format failures.

5. **[#27996 - Web fetch charset support](https://github.com/google-gemini/gemini-cli/pull/27996)** - Properly handles non-UTF8 encoding in web content retrieval. Improves internationalization support.

6. **[#28126 - Multi-line edit ellipsis](https://github.com/google-gemini/gemini-cli/pull/28126)** - Visual improvement showing truncation indicators on multi-line code edits. Better user feedback.

7. **[#28232 - Supply chain RCE mitigation](https://github.com/google-gemini/gemini-cli/pull/28232)** - Splits eval workflows to prevent fork code execution with secrets. Critical security hardening.

8. **[#27994 - Skill prompt substitution](https://github.com/google-gemini/gemini-cli/pull/27994)** - Fixes system prompt injection for custom skills and subagents. Corrects rendering issues.

9. **[#27990 - macOS symlink test resolution](https://github.com/google-gemini/gemini-cli/pull/27990)** - Fixes path resolution mismatches in macOS testing infrastructure. Improves CI reliability.

10. **[#27979 - MCP resource security](https://github.com/google-gemini/gemini-cli/pull/27979)** - Wraps MCP resource output with trust boundaries consistent with other tools. Security alignment fix.

## Feature Request Trends

- **Enhanced agent introspection**: Requests for `/chat share` visibility into subagent trajectories and improved debugging context
- **AST-aware tooling**: Strong community interest in precise code navigation and reduced token consumption through abstract syntax tree processing
- **Configuration consistency**: Multiple requests for reliable settings propagation across all agent types
- **Safety controls**: Demand for destructive action prevention and permission-aware operations
- **Platform compatibility**: Continued focus on supporting legacy hardware and alternative desktop environments

## Developer Pain Points

- **Agent reliability instability**: Repeated reports of hanging generalist agents and false-positive subagent completions creating workflow disruptions
- **Shell integration regressions**: Completed commands incorrectly appearing to wait for input, breaking automation expectations
- **Security transparency gaps**: Concerns about memory logging practices and secret redaction timing in auto-memory systems
- **Tool misuse patterns**: Agents creating temporary scripts across directories and performing destructive operations without safeguards
- **Cross-platform inconsistencies**: Issues with Wayland support, Windows background process tracking, and legacy CPU compatibility


</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GiHub Copilot CLI Community Digest - 2026-07-02  

### 1. Today's Highlights  
v1.0.69-0, the latest release, introduces **file/folder completion in sandbox paths**, improved session branch label synchronization, and optimized MCP reload handling. Fixes include preventing redundant MCP reloads and stabilizing `tgrep` indexing, enhancing reliability for sandbox workflows (1).

### 2. Releases  
- **v1.0.69-0** (2026-07-01): Adds sandbox completion (`/sandbox` paths), fixes session UI rendering, and improves background session stability.  
- **v1.0.68** (2026-07-01): Supports `kimi-k2.7-code` LLM and enhances IDE tool accessibility during transient disconnections.  

### 3. Hot Issues  
1. **[#1665]** Scope plugins to **projects/repositories instead of per-user** – Critical for team workflows. (18 👍)  
2. **[#3596]** Authentication errors when listing models in resumed sessions – Breaks usability. (11 👍)  
3. **[#3282]** Request for **multiple BYOK model support** – Current limitations force session termination. (12 👍)  
4. **[#3982]** MCP server misconfigurations fail due to incorrect flow handling – Impacts enterprise integrations.  
5. **[#4001]** `.claude/settings.json` hooks incompatible on Windows – Broke Claude Code workflows. (0 👍)  
6. **[#1504]** Demand for **custom theme creation/sharing** – 20 👍 for user customization.  
7. **[#3984]** Persistent "thinking" flicker on Windows –  Regression affecting UX.  
8. **[#2958]** Need for **per-mode default models** – Plan/autopilot configuration parity. (15 👍)  
9. **[#4002]** Spurious skill errors persist despite disabling all skills.  
10. **[#3998]** Model billing discrepancies when using auto-mode selection.  

### 4. Key PR Progress  
- **none** (No PRs in last 24h).  

### 5. Feature Request Trends  
- **Plugin customization**: Scoped plugins (#1665), auto-update (#3331).  
- **Model flexibility**: Multi-BYOK support (#3282), per-mode defaults (#2958).  
- **Theming**: Custom themes (#1504) and accessibility improvements (#2507).  
- **MCP enhancements**: Corporate integration fixes (#3982).  

### 6. Developer Pain Points  
- Persistent bugs in **MCP workflows** (auth failures, credential handling).  
- **Cross-platform inconsistencies** (Linux sandbox, Windows cursor issues).  
- **Session management**: Data loss on `/new` (token metrics), corrupted state from CLI terminations (#3980).  
- **Configuration rigidity**: No persistent deny-rules (`permissions-config.json`).  

Links to critical issues: [1], [2], [3282], [3982], [4001], [1504], [3984], [2958], [4002], [3998].


</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – July 2, 2026

## Today’s Highlights
The Kimi CLI team continues to focus on stability and usability enhancements. Despite no new releases in the last 24 hours, the community is actively addressing critical usability and feature-first fixes. Recent discussions highlight fatigue with file-loop bugs, plans for expansion to Kimi Code, traffic on Feature Request #1938 and #2483, and ongoing discussions around feature prioritization.

## Releases
No new releases have been posted in the last 24 hours.

## Latest Issues
- **#640**: A user identified a looping bug in the Kimi CLI that causes repeated file reading. This open issue ([link](MoonshotAI/kimi-cli Issue #640)) is currently active, with a fix in progress and a suggestion for potential notification integration.
- **#1938**: A closing discussion asks if a push notification system can be added to Kimi CLI-Web for real-time updates, especially useful for mobile usage and task tracking.

## Key PR Progress
- **#2369**: Enhancement to support batch processing, including automatic creation of `goal.md` files when goal lengths exceed 4000 bytes, improving stability for complex workflows.
- **API Key Pool PR #2368**: Matches the URL from #640, offering improved parallel sub-agent execution using a round-robin API key pool.

## Feature Request Trends
Response stats indicate a clear demand for:
- Notifications to reduce missed work.
- Support for editing and pausing long goal commands within the CLI.
- Introduction of super long goal auto-lock to separate in-hands-on sessions.

## Developer Pain Points
- Repeated file reading loops causing frustration.
- Need for better notification handling for task completion.
- Strategic splits and inconsistent branding (Kimi CLI → Kimi Code) across documentation.
- Request clarity around API key management and authentication improvements.

---
**Links:**
- [kimi-cli #640](https://github.com/MoonshotAI/kimi-cli/issues/640)
- [kimi-cli #1938](https://github.com/MoonshotAI/kimi-cli/issues/1938)
- [kimi-cli #1939](https://github.com/MoonshotAI/kimi-cli/issues/1939)
- [kimi-cli #2368](https://github.com/MoonshotAI/kimi-cli/issues/2368)
- [kimi-cli PR #2369](https://github.com/MoonshotAI/kimi-cli/pr/2369)
- [kimi-cli PR #2483](https://github.com/MoonshotAI/kimi-cli/issues/2483)
- [kimi-cli PR #2482](https://github.com/MoonshotAI/kimi-cli/issues/2482)

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Digest – July 2, 2026

## Today's Highlights
OpenCode continues to advance its capabilities in agile AI development with improved handling of MCP protocol upgrades, refined model support, and ongoing updates to the Developer Agent framework. Key bug fixes, feature requests, and community-driven enhancements are shaping the roadmap for V2 compatibility.

## Recent Releases (Last 24h)
- **v1.17.13** ensures stable bug resolution and tightest compatibility with new AI models.
- Core feature: **Force reasoning mode** for OpenAI-style outputs across custom deployments.
- Major UI and session enhancements go live in **v1.17.12**, focusing on case management and context retention.

## Latest Issues (Last 24h – Top 50)
- **#14292**: Updates on forcing reasoning mode in OpenAI-compatible settings.
- **#8058** & **#9070**: Address stale GitHub Copilot response IDs and disallow unnecessary follow-ups.
- **#34820**: TUI performance fix related to session path mismatch on Windows.
- **#34813**: Windows path separator issue causing missing sessions in the sidebar.

## Community Notes (Hotissues)
- **#34765** and **#34819** capture critical security and security inspection bugs (role-based access and session forking).
- **#33492** and **#34766** speak to build integration and anticipating V2, emphasizing multi-modal prompt handling and structured model scanning.

## Feature Requests
- **Sessions**: Adding file-watching and hot reload APIs to V2 for smoother context persistence.
- **ChatGPT**: New request to expand prompt vulnerabilities for quicker skip options.
- **Model Free Mode**: Request to enable a toggle for automatic allocation of zero-cost OpenCode models.

## Developer Pain Points
- **Sessions disappearing** on Windows with inconsistent path handling.
- **Inspecting model context** across TUI and plugins becomes more complex.
- **Model variant selection** in V2 TUI does not align with session prompt expectations.

## Key PR Progress
- **#34368–#34806** (release of v2-enhanced pull requests) significantly improve tool access and plugin extensibility, removing blocking workflow dependencies.
- **#34819** directly addresses session scroll tab persistence after provider connection.

## Development Trend
Community feedback is driving continuous integration of security, library modularity, and better perception of V2 improvements. The team strives to deliver robust, up-to-date guidance through transparent PR histories.

---

**GitHub Links**  
- [gitlab.com/anomalyco/opencode](https://gitlab.com/anomalyco/opencode)  
- [opencode/anomalyco/issue/29428](https://opensource.github.io/opencode/issues/29428)  

---

*Prepared by: Technical Analyst & OpenCode Developer Community Update*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest - July 2, 2026

## Today's Highlights
The community continues rapid development with AOT (Ahead-of-Time) compilation for extensions significantly improving startup times, Anthropic Vertex AI provider integration, and ongoing work on local model authentication issues. Project-level skills configuration (#5570) remains a top priority with partial implementation this week.

## Releases
No new releases published in the last 24 hours.

## Hot Issues

1. **#5653 Move off Shrinkwrap** (18 comments) - *Critical technical debt* - Installing multiple related packages creates duplicate `pi-ai` modules due to hoisting, causing module-level registry conflicts. This breaks the API provider system when same packages appear in different dependency trees. [View Issue](https://github.com/earendil-works/pi/issues/5653)

2. **#2870 Follow XDG Base Directory** (17 comments, 34 👍) - *Standardization fix* - Application clutters home directory instead of using `$XDG_CONFIG_HOME`. Linux users get better configuration management with 34 community upvotes indicating widespread impact. [View Issue](https://github.com/earendil-works/pi/issues/2870)

3. **#5570 Support --no-skills / --skill behavior in project settings** (4 comments) - *Feature request* - Users want project-level configuration mirroring command-line flags (`--no-skills`, `--skill`). Currently only CLI-level control exists, limiting automation and team consistency. [View Issue](https://github.com/earendil-works/pi/issues/5570)

4. **#6231 Auth Blocking Local Models** (2 comments) - *Local AI blocker* - Local DeepSeek models incorrectly prompt for OAuth/API keys despite being offline-only. This prevents legitimate self-hosted deployments from working. [View Issue](https://github.com/earendil-works/pi/issues/6231)

5. **#6187 Pi login hangs in WSL after browser-based GitHub Copilot auth** (6 comments) - *WSL-specific bug* - Browser authentication completes but WSL terminal fails to detect authorization, causing hangs during login. Critical for Windows Subsystem for Linux users. [View Issue](https://github.com/earendil-works/pi/issues/6187)

6. **#5536 Split-turn compaction sends parallel summarization requests** (5 comments) - *Local backend compatibility* - Single-slot local backends (like llama.cpp) get 429 errors when Pi's auto-compaction launches concurrent summarization requests. Affects local deployment stability. [View Issue](https://github.com/earendil-works/pi/issues/5536)

7. **#6210 /scoped-models cannot select model ids containing brackets** (2 comments) - *Model naming limitation* - Custom model selectors break with bracket characters in IDs (e.g., `custom/model[1m]`). This affects nuanced model naming schemes and team configurations. [View Issue](https://github.com/earendil-works/pi/issues/6210)

8. **#6222 Failed to load extension** (4 comments) - *Extension ecosystem blocker* - Users can't remove problematic extensions or diagnose loading failures due to broken extension listing functionality. Impacts reliability of Pi's plugin system. [View Issue](https://github.com/earendil-works/pi/issues/6222)

9. **#6197 pi outputs say "$\rightarrow$" instead of print an actual right arrow** (2 comments) - *Display bug* - Right arrow characters render incorrectly in outputs due to escaping issues. Affects readability of command outputs and documentation generation. [View Issue](https://github.com/earendil-works/pi/issues/6197)

10. **#6204 Claude Sonnet 5**: *Missing from GitHub Copilot provider* (3 comments) - *Model catalog gap* - Despite GitHub Copilot making Claude Sonnet 5 generally available, Pi's catalog hasn't been updated. Users must manually specify Anthropic provider instead of using GitHub Copilot routing. [View Issue](https://github.com/earendil-works/pi/issues/6204)

## Key PR Progress

1. **#6236 Allow for project level skills setting** - Partially implements #5570, adding `--skill` and `--no-skills` support at project level via `.pi/settings.json`. [View PR](https://github.com/earendil-works/pi/pull/6236)

2. **#6227 feat: sqlite session storage** - Introduces SQLite database backend alongside JSONL for session transcripts. Improves query performance and provides an alternative storage option when `PI_SQLITE_SESSION_STORAGE=1`. [View PR](https://github.com/earendil-works/pi/pull/6227)

3. **#5262 feat(ai): add Anthropic Vertex provider** - New built-in `anthropic-vertex` provider adapter for Claude on Google Cloud Vertex AI, leveraging existing Anthropic infrastructure with minimal overhead. [View PR](https://github.com/earendil-works/pi/pull/5262)

4. **#6216 feat: Add Amazon Bedrock Mantle OpenAI Responses provider** - Integrates Amazon Bedrock Mantle's OpenAI Responses API with GPT 5.4/5.5 model support, modeled after Azure's OpenAI Responses adapter. [View PR](https://github.com/earendil-works/pi/pull/6216)

5. **#6213 feat(coding-agent): implement AOT compilation for TypeScript extensions** - Dramatically reduces extension startup time from seconds to milliseconds by pre-compiling TypeScript extensions during `pi install`/`pi update`. [View PR](https://github.com/earendil-works/pi/pull/6213)

6. **#6230 fix(coding-agent): preserve first path segment when find relativizes from a bare root** - Fixes path resolution edge case where `find` commands break on bare root paths (`/`), preserving correct path segments for relative file searches. [View PR](https://github.com/earendil-works/pi/pull/6230)

7. **#6225 fix(ai): infer toolUse when provider omits finish_reason for tool calls** - Resolves NVIDIA NIM compatibility issues where tool_call chunks arrive without explicit `finish_reason="tool_calls"`, preventing stream breaking errors. [View PR](https://github.com/earendil-works/pi/pull/6225)

8. **#5678 Add excludeFromContext for custom messages** - Implements boolean flag for custom messages to exclude from LLM context while preserving rendering, with cross-system compatibility for compaction and branching. [View PR](https://github.com/earendil-works/pi/pull/5678)

9. **#2780 feat(coding-agent,tui): support argument-hint frontmatter in prompt templates** - Parses `<angle brackets>` and `[square brackets]` frontmatter to display parameter hints in autocomplete, improving developer experience with command arguments. [View PR](https://github.com/earendil-works/pi/pull/2780)

10. **#6205 fix(context-canvas): stop composer overlay blocking side panel clicks** - Resolves GitHub issue #72 by removing absolute/fixed positioning that intercepted pointer events on side panel buttons and chips. [View PR](https://github.com/earendil-works/pi/pull/6205)

## Feature Request Trends

**Storage & Performance**: SQLite session storage (#6227), AOT compilation (#6213), and improved path resolution (#6230) indicate focus on performance optimization and better data management.

**Provider Ecosystem**: Anthropic Vertex (#5262), Bedrock Mantle (#6216), and Claude Sonnet 5 updates suggest aggressive provider expansion to cover major cloud platforms.

**Configuration & Control**: Project-level skills settings (#5570), `excludeFromContext` (#5678), and XDG base directory compliance (#2870) reflect demand for granular user control and standardization.

**Developer Experience**: Argument hints in templates (#2780), exposed model resolution helpers (#6201), and improved extension loading suggest ongoing UX improvements for developers building on Pi.

## Developer Pain Points

**Extension Reliability**: Broken extension listing (#6222), AOT compilation complexity (#6213), and context hook settling issues (#6234) indicate immature extension ecosystem support requiring better diagnostics and error handling.

**Authentication Complexities**: Local model auth blocking (#6231) and WSL login hangs (#6187) reveal authentication logic that doesn't account for offline deployments or cross-platform nuances.

**Configuration Synchronization**: Package sync failures (`pi update` doesn't install missing packages) (#6214) create version drift between machines, complicating team deployments and multi-machine setups.

**Context Management**: Duplicate module issues (#5653) and missing context exclusions (#5654) suggest underlying architectural challenges with dependency management and LLM context handling.

**Local Backend Compatibility**: Split-turn compaction 429 errors (#5536) and NVIDIA NIM finish_reason issues (#6225) highlight integration challenges with self-hosted AI infrastructure.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-07-02

## Today's Highlights
The project is currently in a heavy refactoring and onboarding phase, focusing on the transition to **v0.8.67**, which introduces a "constitution-first" setup wizard to streamline user personalization. Significant architectural work is also underway to enable dynamic MCP server spawning and clean up legacy "DeepSeek" branding remnants in favor of "CodeWhale."

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
1. **#3275: CodeWhale Over-extension Loop** – A regression where the agent enters self-questioning loops and deviates from user intent. High priority for reliability. [Link](https://github.com/Hmbown/CodeWhale/issues/3275)
2. **#3406: Runtime Posture Cards** – Implementing explicit security posture selectors (ask-first vs. high-trust) to prevent silent changes to constitution boundaries. [Link](https://github.com/Hmbown/CodeWhale/issues/3406)
3. **#3736: Mode vs. Approval Policy Separation** – Addressing a structural UI bug where overlapping "knobs" in `EffectiveModePolicy` cause the UI to display contradictory mode statuses. [Link](https://github.com/Hmbown/CodeWhale/issues/3736)
4. **#3793: Guided Constitution Creator** – Shifting from a blank prompt editor to a guided, localized UX for creating agent constitutions. [Link](https://github.com/Hmbown/CodeWhale/issues/3793)
5. **#3806: `/constitution` as Primary Surface** – Redefining the product direction to make `/constitution` the main management hub rather than relying on internal diagnostic views. [Link](https://github.com/Hmbown/CodeWhale/issues/3806)
6. **#3829: ModalShell v1** – A targeted fix to implement a standardized modal layout to stop "unusable popups" from blocking releases. [Link](https://github.com/Hmbown/CodeWhale/issues/3829)
7. **#3864: Branding Remnant Leak** – Sub-agent state is still persisting to `.deepseek/` instead of `.codewhale/`, indicating incomplete rebranding. [Link](https://github.com/Hmbown/CodeWhale/issues/3864)
8. **#3863: Fleet/WhaleFlow Learning Curve** – Users are requesting a cohesive tutorial, noting that the current JSON-based task configuration is not yet "natural language" ready. [Link](https://github.com/Hmbown/CodeWhale/issues/3863)
9. **#3880: Windows Task Interrupt Bug** – Report that DSML interrupt task fixes are missing from the v0.8.66 Windows package. [Link](https://github.com/Hmbown/CodeWhale/issues/3880)
10. **#3867: Project-Scope Instruction Denial** – Users report that project-level instructions are overly restrictive, lacking glob support and auto-discovery. [Link](https://github.com/Hmbown/CodeWhale/issues/3867)

## Key PR Progress
1. **#3866: Dynamic MCP Server Startup** – Allows the LLM to start MCP servers (stdio/HTTP) directly from chat context. [Link](https://github.com/Hmbown/CodeWhale/pull/3866)
2. **#3861: v0.8.67 Foundation** – Implements the state model and persistence layer for the constitution-first setup flow. [Link](https://github.com/Hmbown/CodeWhale/pull/3861)
3. **#3643: Setup Summary Wizard** – Adds a summary view for MCP, skills, and plugins as part of the new onboarding flow. [Link](https://github.com/Hmbown/CodeWhale/pull/3643)
4. **#3869: MCP Pool Dynamic Support** – The infrastructure layer required for the LLM to manage runtime-started MCP servers. [Link](https://github.com/Hmbown/CodeWhale/pull/3869)
5. **#3578: Windows SDK Env Preservation** – Fixes shell execution by recovering safe SDK/toolchain path variables from the Windows registry. [Link](https://github.com/Hmbown/CodeWhale/pull/3578)
6. **#3748: Sakana AI Fugu Provider** – Integration of the Sakana AI provider using the OpenAI Chat Completions protocol. [Link](https://github.com/Hmbown/CodeWhale/pull/3748)
7. **#3784: GUI Config Persistence** – Enables the GUI config panel to correctly save nested-table keys and fixes `allow_shell` type bugs. [Link](https://github.com/Hmbown/CodeWhale/pull/3784)
8. **#3764: /config Diagnostics** – Improved reporting for `permissions.toml` states (missing, empty, or malformed). [Link](https://github.com/Hmbown/CodeWhale/pull/3764)
9. **#3870: McpTool Arc Refactor** – Refactored tool storage to `Arc<McpTool>` to support dynamic connection management. [Link](https://github.com/Hmbown/CodeWhale/pull/3870)
10. **#3879: Fleet Runtime Cleanup** – Pruning legacy compatibility helpers in `worker_runtime.rs`. [Link](https://github.com/Hmbown/CodeWhale/pull/3879)

## Feature Request Trends
*   **UX Modernization:** A strong push toward "Wizards" over "Config Editing." The community and maintainers are moving away from manual `.toml` editing toward guided TUI flows.
*   **Autonomous Flexibility:** Requests for the agent to be more dynamic, specifically regarding starting its own tools (MCP servers) and managing its own boundaries via a "Constitution."
*   **Windows Stability:** Recurring requests for parity in Windows performance, specifically regarding environment variables and task interruptions.

## Developer Pain Points
*   **Configuration Friction:** The "high-friction" first-run path (API keys, model routing) is a major pain point, leading to the development of the v0.8.67 onboarding wizard.
*   **State Inconsistency:** Users are frustrated by "stale" UI elements (e.g., the Agents sidebar not updating in real-time) and contradictory mode indicators.
*   **Complex Tooling:** The current `fleet` and `whaleflow` workflows are seen as too manual (requiring `tasks.json`), with a desire for a more "one-sentence" natural language trigger.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*