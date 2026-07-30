# AI CLI Tools Community Digest 2026-07-30

> Generated: 2026-07-30 01:28 UTC | Tools covered: 9

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



**Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-07-30)**  

---

### **1. Ecosystem Overview**  
The AI CLI tools ecosystem is characterized by rapid iteration, enterprise-grade ambitions, and a focus on developer productivity. Tools like Claude Code and Codex prioritize multi-user collaboration and agent integrations, while Gemini CLI and Kimi CLI emphasize model specialization and cloud-native deployment. Smaller projects like Pi and DeepSeek TUI focus on terminal UX and cross-platform reliability. Security (e.g., token leakage, MCP hardening) and localization are recurring cross-cutting themes.  

---

### **2. Activity Comparison**  

| Tool               | Hot Issues (7/30) | PRs (Active/Completed) | Release Status | Key Themes |
|-------------------|-------------------|------------------------|----------------|------------|
| **Claude Code**   | 14 issues (multiseat SLACK, model switching, regression bugs) | 4 updates (security hardening, macOS/GCP fixes) | None | Enterprise UX, security hardening |
| **Codex**         | 10 issues (sandbox crashes, session sync) | 10 PRs (security, session management) | v0.146.0 (stable) | Cross-platform parity, agent plugins |
| **Gemini CLI**    | 10 issues (subagent hangs, memory leaks) | 10 PRs (nightly builds, memory fixes) | v0.55.0-nightly | Stability, subagent observability |
| **Kimi CLI**      | 12 issues (enterprise API, Rush Ka3 integration) | 4 PRs ( الإدارة, terminal fixes) | None | API customization, regional latency |
| **OpenCode**      | 12 issues (session goals, database bloat) | 10 PRs (TUI enhancements, language support) | None | Session management, regionalization |
| **Pi**            | 10 issues (model compatibility, Arabic UI) | 10 PRs (security, terminal UI) | v0.83.0 (rc) | Keyboard layouts, security UX |
| **Qwen Code**     | 11 issues (Claude compat, token overflows) | 9 PRs (tool routing, GitHub-channel) | v0.21.1-nightly | Model compatibility, workflow controls |
| **DeepSeek TUI**  | 10 issues (LaTeX rendering, Indonesian localization) | 10 PRs (release stabilisation) | v0.9.2 (finalizing) | Terminal UI, localization |

---

### **3. Shared Feature Directions**  
- **Session Management**:  
  - Claude Code: Multi-workspace Slack.  
  - Codex: Session pinning/cancel commands.  
  - Gemini/Kimi: Session sync between CLI/app-server.  
  - OpenCode: Persistent goals (`/goal` cmd).  
- **Model/Tool Routing**:  
  - Claude Code: Automatic model switching.  
  - Qwen Code: Role-based model routing.  
  - Gemini: Agent plugin manifests.  
  - Pi: Skills Manager toggles.  
- **Security Hardening**:  
  - Claude Code: MCP Guard plugin.  
  - Gemini: Secret redaction.  
  - Pi: Permission rules with `execpolicy`.  
  - Kimi: API key isolation.  
- **Localization/Accessibility**:  
  - Pi: Indonesian/Korean retrofits.  
  - DeepSeek TUI: LaTeX math rendering.  
  - Kimi: Regional latency complaints.  
- **Terminal UX**:  
  - DeepSeek TUI: AltGr+Q fix.  
  - Pi: Windows terminal rendering.  
  - Gemini: Windowed scroll/selection bugs.  

---

### **4. Differentiation Analysis**  
- **Claude Code**: Focuses on enterprise UX (multi-tenancy, security audits) and anthropomorphic agent workflows.  
- **Codex**: Emphasizes session management and Claude model compatibility.  
- **Gemini CLI**: Targets developer flexibility via subagent customization and cloud-native extensibility.  
- **Kimi CLI**: Enterprise API customization (e.g., custom gateways, regional routing).  
- **OpenCode**: Prioritizes Git workflows and advanced session/organizational tools.  
- **Pi**: Simplicity-focused CLI/TUI with rigorous keyboard/terminal parity.  
- **Qwen Code**: Optimized for model compatibility (Claude 4.6+ pain points) and CI scalability.  
- **DeepSeek TUI**: Terminal-centric with a strong localization push and math/tech rendering.  

---

### **5. Community Momentum & Maturity**  
- **Most Active Communities**:  
  - **Claude Code** and **Codex** (high issue volume, frequent PRs).  
  - **Gemini CLI** and **Qwen Code** (nightly updates, CI-focused engagement).  
- **Maturity Indicators**:  
  - **Codex** and **Pi** (stable releases, fixed critical bugs).  
  - **DeepSeek TUI** (v0.9.2 stabilization cycle complete).  
  - **Gemini/Kimi** (active PRs but no stable 24-hour windows).  

---

### **6. Trend Signals**  
- **Enterprise Adoption**:  
  - API gateways (Kimi), security hardened MCP (Claude), self-hosted models (Qwen, Gemini).  
- **Security as a Feature**:  
  - Bearer token leaks, permission rules, credential export (Pi).  
- **Model Agnosticism**:  
  - Claude 4.6+, Gemini/Fable in same CLI/tool contexts.  
- **Terminal/UI revival**:  
  - LaTeX rendering (DeepSeek), AltGr key fixes (Pi), cluttered session views (OpenCode).  
- **Scalability Focus**:  
  - Infinite context limits (Qwen), token-window management (Codex).  

--- 

**Prepared for**: Technical decision-makers and developers evaluating AI CLI tools for integration or investment.


---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills – Community Highlights (as of 2026‑07‑30)**  

---

### 1. Top Skills Ranking  
| Rank | PR (GitHub) | Skill name / short description | Key discussion points | Current status |
|------|-------------|--------------------------------|-----------------------|----------------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **run_eval.py fix** – install the eval artifact as a real skill; fix Windows stream reading, trigger detection, and parallel‑worker handling. | • `run_eval.py` was reporting `recall=0%` for every description, breaking the description‑optimization loop.<br>• Community reproduced the bug on Windows and in multi‑worker runs.<br>• Fix restores proper trigger detection and parallel evaluation. | **OPEN** |
| 2 | [#1099](https://github.com/anthropics/skills/pull/1099) | **Windows subprocess pipe crash** – `run_eval.py` crashes on Windows when reading from a subprocess pipe. | • Every query was logged as “not triggered”, yielding `precision=100% recall=0%`.<br>• Root cause: Windows‑specific pipe‑reading bug. | **OPEN** |
| 3 | [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows subprocess & encoding bugs** – PATH/PATHEXT handling and cp1252 encoding issues in skill‑creator scripts. | • Two one‑line fixes needed; without them the optimizer cannot evaluate any query on Windows. | **OPEN** |
| 4 | [#1323](https://github.com/anthropics/skills/pull/1323) | **Trigger detection misses real skill name** – `run_single_query` fails to recognise a triggered skill, causing `recall=0%`. | • The description‑optimization loop never sees a valid trigger, so it returns the original description unchanged.<br>• Directly tied to the `recall=0%` bug reported in #1298 and #556. | **OPEN** |
| 5 | [#1367](https://github.com/anthropics/skills/pull/1367) | **Self‑audit skill** – mechanical file verification + four‑dimension reasoning quality gate (v1.3.0). | • Provides a universal “pre‑delivery” audit that first checks file existence/integrity, then scores reasoning across structure, documentation, examples, and resource coverage.<br>• Intended to be a quality‑gate for any skill output. | **OPEN** |
| 6 | [#1479](https://github.com/anthropics/skills/pull/1479) | **Plan‑file‑hygiene skill** – addresses accumulation of planning artifacts with no lifecycle. | • Community highlighted a “lifecycle gap” where planning files linger indefinitely.<br>• Skill will enforce automated cleanup and versioning of plan files. | **OPEN** |
| 7 | [#723](https://github.com/anthropics/skills/pull/723) | **Testing‑patterns skill** – comprehensive testing stack (philosophy, unit testing, React component testing, etc.). | • Covers the full testing lifecycle; aims to make testing a first‑class skill for Claude Code users. | **OPEN** |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) | **Pyxel skill** – MCP server for retro‑game development with the Pyxel engine. | • Enables creation, execution, and inspection of 8‑bit pixel‑art games.<br>• Targets a niche but growing community of retro‑game developers. | **OPEN** |

*All listed PRs are still **OPEN** (no merges yet). They represent the skills that have attracted the most community attention (via comments, issue linkage, and repeated reproductions).*

---

### 2. Community Demand Trends (derived from Issues)

| Trend | What the community is asking for | Representative Issues |
|-------|----------------------------------|-----------------------|
| **Reliable skill execution & evaluation** – accurate trigger detection, correct recall, and stable Windows‑specific behavior. | • `run_eval.py` must reliably invoke skills (Issue #556, #1169).<br>• Windows‑specific subprocess and pipe bugs must be fixed (Issue #1061, #1099, #1050). | #556, #1169, #1061, #1099, #1050 |
| **Secure, trusted skill distribution** – prevent impersonation of official Anthropic skills. | • Skills should be signed or namespace‑isolated to avoid trust‑boundary abuse. | #492 |
| **Organization‑wide skill sharing** – streamlined distribution within a company. | • Direct sharing links or a shared skill library instead of manual .skill file exchange. | #228 |
| **Robust documentation & flowcharts** – comprehensive system diagrams and contribution guides. | • Detailed evidence‑management and architecture documentation; duplicate‑skill avoidance. | #95, #189 |
| **Context‑window‑friendly skills** – avoid overly large tool payloads that exhaust the context window. | • Skills such as `claude‑api` that inject >150 k tokens must be refactored. | #1487 |
| **Integration with external platforms** – support for AWS Bedrock, SharePoint, and MCP exposure. | • Users request clear guidance for Bedrock usage and MCP‑based API exposure. | #29, #16, #1175 |
| **Quality‑gate and reasoning pipelines** – systematic verification of AI output. | • Proposals for multi‑gate pipelines (pre‑task calibration, adversarial review, delivery verification). | #1385, #1367 |
| **Testing and verification frameworks** – dedicated testing skills and patterns. | • Comprehensive testing‑patterns skill (Issue #723) and quality‑analyzer/skill‑security‑analyzer meta‑skills (Issue #83). | #723, #83 |

*Overall, the community’s most urgent demand is for **dependable skill execution** (trigger detection, Windows compatibility, and correct recall) so that the description‑optimization loop can actually improve skills.*

---

### 3. High‑Potential Pending Skills (active‑comment PRs likely to be merged soon)

| PR | Skill / Feature | Why it’s high‑potential |
|----|----------------|------------------------|
| [#1479](https://github.com/anthropics/skills/pull/1479) | **Plan‑file‑hygiene** – automated lifecycle management of planning artifacts. | Recent update (2026‑07‑27) and directly addresses a repeatedly raised community pain point (Issue #1417). |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **Self‑audit** – mechanical + four‑dimension reasoning quality gate. | First‑ever “audit” skill; strong interest in quality‑gate pipelines (Issue #1385). |
| [#1261](https://github.com/anthropics/skills/pull/1261) | **Isolate trigger‑eval command files** – prevent parallel‑eval interference. | Fixes a subtle race condition that can corrupt live projects; recent activity (2026‑07‑08). |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **Color‑expert** – comprehensive color‑knowledge skill. | Broad applicability (design, data viz, accessibility); active discussion and recent update (2026‑07‑21). |
| [#1099](https://github.com/anthropics/skills/pull/1099) | **Windows subprocess pipe crash fix**. | Critical for Windows users; blocker for the optimization loop; still open. |
| [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows subprocess & encoding fixes** (PATH/PATHEXT, cp1252). | Complements #1099; together they enable reliable skill evaluation on Windows. |
| [#723](https://github.com/anthropics/skills/pull/723) | **Testing‑patterns** – full testing stack skill. | Addresses a clear community need for systematic testing; recent activity (2026‑04‑21). |

*These PRs have recent updates, non‑trivial comment threads (linked from related Issues), and solve concrete problems that have been recurring in the community.*

---

### 4. Skills Ecosystem Insight  

**The community’s most concentrated demand is for reliable, correctly‑detected skill execution and evaluation—especially fixing run‑eval trigger bugs and Windows compatibility so that skills can be tested, optimized, and safely deployed.**  

---  

*All GitHub URLs are current as of 2026‑07‑30.*

---

**Claude Code Community Digest – 2026‑07‑30**

---

### 1. Today’s Highlights
- No new releases were published in the last 24 h.  
- Activity remains high in the issue tracker: the top‑commented issues focus on multi‑workspace Slack support, automatic model switching in Plan mode, and a regression where assistant text blocks are silently dropped when followed by more thinking.  
- Four pull requests were updated, mainly addressing setup‑script compatibility on macOS/Windows and a security‑hardening MCP Guard plugin.

---

### 2. Releases
*None reported in the past 24 hours.*

---

### 3. Hot Issues  
*(selected for impact, comment velocity, or novelty)*  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **[#44243](https://github.com/anthropics/claude-code/issues/44243)** | Support multiple Slack workspaces in the built‑in Slack connector | Professionals juggle several Slack tenants; the current single‑workspace limit forces manual re‑authentication or work‑arounds. | 74 👍, 35 comments – strong demand for a UI‑driven multi‑account flow. |
| **[#15721](https://github.com/anthropics/claude-code/issues/15721)** | Automatic Model Switching for Plan Mode | Enables cost‑effective, adaptive reasoning without manual `/model` switches; critical for long‑running planning sessions. | 60 👍, 31 comments – widely up‑voted as a quality‑of‑life improvement. |
| **[#74260](https://github.com/anthropics/claude-code/issues/74260)** | Assistant text blocks silently dropped when followed by more thinking (data‑loss bug) | Causes missing transcript entries and broken reproducibility; affects all platforms using adaptive thinking. | 13 👍, 20 comments – flagged as a regression in 2.1.201; users request immediate fix. |
| **[#81463](https://github.com/anthropics/claude-code/issues/81463)** | Claude “flips” to abusive/narcissistic role‑play in long conversations | Raises safety and trust concerns; indicates possible drift in the LCR safeguard under extended context. | 1 👍, 13 comments – alarming but low engagement; needs deeper investigation. |
| **[#82440](https://github.com/anthropics/claude-code/issues/82440)** | Anthropic API Error: Model churned after 3+ minutes – session termination | Sessions are killed abruptly, disrupting workflows; appears linked to usage‑credit or safeguard throttling. | 0 👍, 0 comments (brand new) – emerging issue worth monitoring. |
| **[#82429](https://github.com/anthropics/claude-code/issues/82429)** | Fable model blocked by “manage usage credits” prompt in CLI despite 100% credits remaining | CLI‑only blockage creates inconsistency between desktop and terminal experiences, frustrating power users. | 0 👍, 1 comment – highlights a state‑sync bug between CLI and backend. |
| **[#80415](https://github.com/anthropics/claude-code/issues/80415)** | Korean (Hangul) text garbled/corrupted in AskUserQuestion and TodoWrite card UI (VSCode extension) | Breaks localisation for Korean‑speaking developers; UI‑rendering bug in the extension layer. | 1 👍, 5 comments – steady uptick as non‑English adoption grows. |
| **[#75599](https://github.com/anthropiclaude-code/issues/75599)** | Granular control over mouse click behavior in interactive menus | Recent UI change makes single‑click confirmation unavoidable; users want opt‑out for keyboard‑centric workflows. | 10 👍, 4 comments – reflects a split between newcomers and power users. |
| **[#78266](https://github.com/anthropics/claude-code/issues/78266)** | UserPromptSubmit hook systemMessage does not render in Desktop app or VS Code extension | Hooks that return only a system message are silently dropped, breaking custom advisory workflows. | 2 👍, 2 comments – niche but important for extension developers. |
| **[#82358](https://github.com/anthropics/claude-code/pull/82358)** | MCP Guard plugin: security hardening for MCP configurations | Addresses the leaking of bearer tokens via `claude mcp get`; a direct response to a recent security‑sensitive issue. | 0 👍 (PR) – early stage, but signals community focus on MCP safety. |

---

### 4. Key PR Progress  
*(all PRs updated in the last 24 h)*  

| PR | Summary |
|----|---------|
| **[#82358](https://github.com/anthropics/claude-code/pull/82358)** | **MCP Guard plugin** – adds validation and redaction for MCP config files to prevent accidental exposure of bearer tokens and other secrets. |
| **[#82335](https://github.com/anthropics/claude-code/pull/82335)** | **Fix GCP gateway setup.sh** – guards against silent failure when `gcloud` is missing by checking command substitution exit status under `set -euo pipefail`. |
| **[#82320](https://github.com/anthropics/claude-code/pull/82320)** | **Fix AWS gateway setup.sh on macOS** – replaces bash 4‑only case‑mod `${VAR,,}` with a POSIX‑compatible fallback, allowing the script to run on stock macOS bash 3.2. |
| **[#48272](https://github.com/anthropics/claede-code/pull/48272)** | **[Release Notes]** enriches release titles with a short changelog summary (auto‑generated from commit messages) to improve changelog discoverability. |

---

### 5. Feature Request Trends  
From the open issues, the most‑requested directions are:

1. **Multi‑tenant / multi‑workspace integrations** – Slack (#44243) and analogous requests for other chat platforms.  
2. **Adaptive model selection** – automatic switching based on token budget, latency, or task complexity (#15721).  
3. **Fine‑grained UI/UX controls** – optional mouse‑click behavior (#75599), customizable keybindings (Shift+Enter on Windows), and better hook visibility (#78266).  
4. **Improved localisation & internationalisation** – fixing CJK text rendering (#80415) and supporting additional auth schemes (Cloudflare Zero Trust #82439).  
5. **Security hardening for MCP** – token leakage prevention, per‑project/user scope isolation (#82358, #81706).  

These trends indicate a push toward **enterprise‑grade configurability**, **cost‑aware automation**, and **robust, safe extensibility**.

---

### 6. Developer Pain Points  
Recurring frustrations surfacing across the issue set:

- **Platform‑specific glitches** – Windows GPU crashes (#80444), spawn ENAMETOOLONG (#72725), Shift+Enter not working (#77311, #80817), and PowerShell false positives (#73882).  
- **Data loss / silent drops** – assistant text blocks disappearing when followed by thinking (#74260) and hook systemMessage being ignored (#78266).  
- **Inconsistent CLI vs Desktop behavior** – Fable model credit prompts (#82429), remote‑control autoconnect failures (#80457), and token leakage in MCP CLI (#82358).  
- **Performance / resource usage** – high CPU/disk writes on idle Windows Desktop (#58799).  
- **Safety‑guard over‑reach** – Fable safeguards triggering on benign phrases (“continue please”, hospital dev logs #82438, #82436) and model churn after a few minutes (#82440).  

Addressing these pain points will improve stability, cross‑platform parity, and trust in Claude Code’s safety mechanisms.  

---  

*Generated for developers seeking a concise, actionable overview of the Claude Code ecosystem on 2026‑07‑30.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest - 2026-07-30

## Today's Highlights
OpenAI Codex released stable version v0.146.0 with session management enhancements and agent plugin support, while v0.147.0-alpha.2 enters preview. Major platform issues persist across Windows (sandbox crashes, performance degradation) and macOS (GPU usage, UI limitations), with active engineering work addressing session sync between CLI and app-server.

## Releases
**Codex v0.146.0 (Stable)**  
- Session management: New `/new` and `/clear` commands for naming sessions, pinning important threads, and switching between side conversations without closing them (#34605, #34840, #35011)  
- Agent Plugins: Support for Agent Plugins manifests, workspace plugin publishing, and additional plugin marketplaces for Amazon Bedrock and Claude C  
- Alpha variants (v0.147.0-alpha.2, v0.147.0-alpha.1, v0.146.0-alpha.9.2/9.1) available for early testing

*GitHub: github.com/openai/codex/releases*

## Hot Issues

1. **#21753 Full Claude Code Hook Parity** - Community seeks complete automation surface parity with 29 comments and strong support (👍22) reflecting demand for enhanced extensibility across lifecycle events.

2. **#33776 Windows ChatGPT.exe WMI Storm** - Critical performance bug on Windows 26.707.12708.0 with 25 comments and high community concern (👍23) as hundreds of taskkill.exe/conhost.exe processes degrade system performance.

3. **#10561 Plan Mode Enhancements** - Popular feature request (👍37) advocating for "Copy Plan" button and "Clear Context and Start Coding" workflow improvements to bridge planning and execution gaps.

4. **#35050 GPT-5.6 Code Mode Serialization** - Performance regression affecting 27-45% weighted usage through improper batching of independent calls, with strong community interest (👍36).

5. **#14722 CLI/App-Server Session Sync** - Cross-component synchronization challenge (👍21) where session content updates aren't properly reflected between CLI and app-server when resuming connections from remote devices.

6. **#34684 macOS MCP Login Auth Bug** - OAuth authentication failure on macOS arm64 against spec-compliant servers, despite identical functionality working on Linux with only 5 comments.

7. **#33723 Cloud Project Chat Workflow** - Critical UX issue where cloud project selection doesn't persist to Chat mode, only affecting Work/Codex functionality.

8. **#35310 Windows Sandbox UNC Path Issues** - Workspace path resolution failures with WSL2 UNC paths during sandboxed command execution, blocking common development workflows.

9. **#35380 Elevated Sandbox Helper Errors** - Windows elevated sandbox consistently fails with "helper_unknown_error" while unelevated mode works, indicating process privilege escalation problems.

10. **#32855 Windows Sandbox CryptUnprotectData Failures** - Cryptographic service failures (0x8009000B) preventing shell command execution across sandbox environments on Windows.

*GitHub: github.com/openai/codex/issues*

## Key PR Progress

1. **#36054 Remove Legacy `--full-auto` Handling** - Clean-up PR removing deprecated `codex exec` flag requiring explicit sandbox mode selection, improving API consistency.

2. **#36051 Avoid Overwriting Symlinked Migration Targets** - Security fix preventing external file modification through symlinked migration targets during configuration migration.

3. **#36036 Allow Naming Forked Chats from TUI** - User experience enhancement enabling thread naming during fork operations with whitespace trimming and metadata updates.

4. **#36035 Exit Stdio App-Server on Connection Close** - Infrastructure improvement preventing orphaned app-server processes when remote control clients disconnect.

5. **#36049 Keep Tool-Call Metrics Out of Statsig** - Privacy-focused change treating `codex.tool.call` and duration metrics as runtime-only for built-in Statsig exports.

6. **#36037 Deny Network Access on Allow Amendment Failure** - Security hardening ensuring failed network policy amendments don't grant unintended access privileges.

7. **#36033 Use Shared HTTP Client in Codex-Protocol** - Architectural refactoring replacing direct reqwest dependencies with centralized `codex_http_client` error handling.

8. **#36030 Increase App-Server Tracing Test Stack Size** - Infrastructure fix addressing stack overflow issues in tracing tests under heavy load conditions.

9. **#36008 Route Pet Asset Downloads Through Shared HTTP Client** - Architecture improvement ensuring CDN redirects use Codex's configured route handling for built-in pet downloads.

10. **#36007 Add Persisted Manual Ordering for Thread Sections** - Advanced session management feature enabling atomic thread section movement with position preservation and history tracking.

*GitHub: github.com/openai/codex/pulls*

## Feature Request Trends

**Session & Workflow Management**  
- Persistent thread/section ordering with historical context preservation
- Enhanced plan-to-execution workflows with context clearing capabilities
- Improved session synchronization across CLI and app-server components

**Platform & Integration Improvements**  
- Cross-platform OAuth authentication consistency (macOS/Linux parity)
- WSL2 and UNC path support for Windows sandbox environments  
- Unified cloud project selection persistence across Chat and Work/Codex modes

**Automation & Extensibility**  
- Comprehensive Claude Code hook parity across all lifecycle events
- Advanced agent plugin manifests and marketplace integration
- Pre/post-compact hooks for conversation transcript processing

## Developer Pain Points

**Windows-Specific Challenges**  
- Sandbox helper errors and cryptographic failures blocking command execution
- Performance degradation from process proliferation (taskkill/conhost storms)
- Inconsistent behavior between elevated and unelevated sandbox modes

**macOS Platform Issues**  
- Persistent GPU process high CPU consumption after extended sessions
- Limited chat deletion capabilities in desktop app UI
- Transparent sidebar causing excessive GPU usage

**Session & Storage Management**  
- Session replay failures due to encryption validation errors
- Excessive memory usage from compacted records with inline image data (10GB+)
- Chat deletion workflows absent in desktop applications

**Authentication & MCP**  
- OAuth discovery failures treated as definitive "unsupported" rather than "unknown"
- macOS-specific MCP login authentication against spec-compliant servers
- Inconsistent MCP tool wrapper behavior across platforms

**Security & Policy**  
- False-positive security blocks for personal repository reviews
- Trusted Access cybersecurity notifications triggered by routine Git operations
- Manual ordering preservation challenges in complex conversation threads

GitHub: github.com/openai/codex

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑07‑30**

---

### 1. Today’s Highlights
- The nightly release cycle hit **v0.55.0‑nightly.20260730.gdc859e8e4**, bumping the version and shipping a handful of core fixes.  
- Community attention is focused on a handful of high‑impact bugs: sub‑agent hangs, memory‑leak‑related PTY leaks, and a 400‑error regression when > 128 tools are registered.  
- Several PRs are converging on making sub‑agent behavior observable and on tightening security around web‑fetch and memory‑inbox handling.

---

### 2. Releases
- **v0.55.0‑nightly.20260730.gdc859e8e4** – latest nightly build.  
  - Changelog includes a version bump from `0.54.0‑nightly.20260729.g3499c84f7`.  
  - Minor chore: propagate `InvalidStreamError` details to UI; add `gemini‑3.5‑flash` to the model selector; preserve `thoughtSignature` in function‑call parts; fallback to embedded macOS seat‑belt profiles on macOS sandbox start‑up.

---

### 3. Hot Issues  *(Top 10 by comment count)*  

| # | Title (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#22323** | [Subagent reports “GOAL” while hitting MAX_TURNS](/issues/22323) | Shows a sub‑agent incorrectly signalling success after reaching its turn limit, masking real failures. | 12 comments, 2 👍 – developers flagged it as a **critical correctness bug**. |
| **#21409** | [Generalist agent hangs](/issues/21409) | Agent hangs indefinitely when deferring to the generalist; simple folder‑creation commands stall. | 8 comments, 8 👍 – widely up‑voted, seen as a **blocker for everyday use**. |
| **#24353** | [Robust component‑level evaluations](/issues/24353) | Introduces a test harness for “behavioral evals”; currently running 76 such tests across Gemini. | 7 comments, 0 👍 – early interest, considered a **strategic testing investment**. |
| **#22745** | [AST‑aware file reads & mapping impact](/issues/22745) | Explores whether AST‑aware reads can cut token churn and improve precision of codebase queries. | 7 comments, 1 👍 – technical curiosity, ties to larger **performance roadmap**. |
| **#21968** | [Gemini does not use skills/sub‑agents enough](/issues/21968) | Users report sub‑agents are rarely auto‑invoked; only manual prompting triggers them. | 6 comments, 0 👍 – up‑voted as a **missed automation opportunity**. |
| **#26522** | [Stop Auto Memory from retrying low‑signal sessions](/issues/26522) | Memory inbox silently drops invalid patches; background extractor may re‑process stale entries. | 5 comments, 0 👍 – highlighted as a **data‑integrity concern**. |
| **#26525** | [Deterministic redaction & reduced Auto Memory logging](/issues/26525) | Current redaction happens *after* content is loaded into the model context, risking secret leakage and noisy logs. | 4 comments, 0 👍 – security‑focused, calls for **safer secret handling**. |
| **#25166** | [Shell command execution hangs on “Waiting input”](/issues/25166) | After a command finishes, CLI stays in “awaiting user input” state, requiring cancel. | 4 comments, 3 👍 – frequent pain point for **interactive workflows**. |
| **#22232** | [Enhance browser_agent resilience – auto‑takeover](/issues/22232) | Browser agent currently fails fast on locked profiles; request to auto‑recover instead. | 4 comments, 0 👍 – **usability improvement** for long‑running browser sessions. |
| **#21983** | [Browser subagent fails on Wayland](/issues/21983) | Wayland platform not supported, causing immediate failure. | 4 comments, 1 👍 – **platform‑coverage** request. |

---

### 4. Key PR Progress  *(Top 10 by comment/impact)*  

| PR | Title (link) | Core contribution |
|----|--------------|-------------------|
| **#28590** | chore/release: bump version to 0.55.0‑nightly.20260730.gdc859e8e4 | Nightly version bump – keeps CI/CD pipeline in sync. |
| **#28566** | fix(core,cli): propagate InvalidStreamError details to UI | UI now shows actionable guidance (e.g., “use `/compress`”) when streams return empty. |
| **#28485** | feat(cli): add gemini‑3.5‑flash to model selector for all users | Enables selection of the newer `gemini‑3.5‑flash` and `gemini‑3.6‑flash` models in the UI. |
| **#28588** | Add embedded gemini-cli submodule | Introduces a gitlink at `gemini-cli` to prepare for downstream integration. |
| **#27154** *(closed)* | fix(core): prevent PTY memory leak by synchronously deleting active entries | Resolves a critical file‑descriptor leak that caused unbounded growth of active PTYs. |
| **#28586** | fix(core): preserve thoughtSignature in functionCall parts to fix 400 error | Restores missing `thoughtSignature` to avoid 400 Bad Request when multiple tools fire in parallel. |
| **#28551** | fix(cli): fall back to embedded macOS seatbelt profiles if missing | Prevents startup crash in sandbox mode on macOS when static `.sb` profiles are absent. |
| **#28529** | feat(caretaker): add GCP deployment script for caretaker agent services | Provides a ready‑to‑use `deploy.sh` for Cloud Run services (Ingestion, Triage, Egress). |
| **#28431** | feat(pr-generator-infra): configure Cloud Run job, Workflows definition, and Dockerfile | Lays the foundation for the SSR code‑generation pipeline’s cloud‑native deployment. |
| **#28435** | feat(pr-generator-core): add environment config parser, command executor, GitHub R… |Supplies utilities for configuration parsing, subprocess execution, and GitHub API interaction. |

---

### 5. Feature Request Trends
- **Visibility into sub‑agent workflows** – multiple issues request a shareable `/chat` view or UI overlay that displays sub‑agent trajectories, turn counts, and decision logs.  
- **Better agent self‑awareness & tool awareness** – requests to surface CLI flags, hotkeys, and tool‑configuration limits directly to the agent so it can guide users more accurately.  
- **AST‑aware or smarter file handling** – several tickets explore AST‑aware reads, code‑base mapping, and reduced token churn for large repositories.  
- **Robust memory & session hygiene** – deterministic redaction, proper handling of invalid memory patches, and avoidance of indefinite Auto Memory retries dominate the “memory” conversation.  
- **Security hardening** – emphasis on preventing SSRF via async DNS checks, secure secret redaction, and tighter sandboxing (e.g., seat‑belt profiles).  

---

### 6. Developer Pain Points
- **Sub‑agent hangs and poor responsiveness** – agents freeze on simple commands or when deferring to the generalist, requiring manual cancel.  
- **Memory‑related leaks and stale state** – PTY leaks, unbounded retry of low‑signal sessions, and invalid patch accumulation cause resource bloat.  
- **Tool‑scope errors** – 400 errors when more than ~128 tools are registered; lack of graceful throttling or auto‑pruning.  
- **Sandbox / platform compatibility** – startup crashes on macOS sandbox mode and Wayland incompatibility for the browser subagent.  
- **Unclear error feedback** – missing UI cues when streams return empty or when validation fails, leaving developers to guess remediation steps.  

---

**Takeaway:** The Gemini CLI nightly is advancing rapidly, with a focus on stability (memory leaks, PTY handling), smarter tool selection, and richer observability of sub‑agent activity. Community concerns are coalescing around reliability (hangs, crashes), memory‑session hygiene, and making internal agent processes transparent to users. The upcoming PR batch aims to address these pain points while laying groundwork for larger‑scale cloud‑native code‑generation pipelines.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**Today's Highlights**  
The Copilot CLI v1.0.76 was released with new plugin enable/disable toggles, support for the grok‑4.5 model, and stricter sandbox path enforcement on macOS/Linux.  Recent hot‑issue activity shows strong community interest in session management, git worktree handling, and reducing authorization fatigue.  

**Releases**  
- **v1.0.76** (2026‑07‑29) – adds enable/disable controls for plugins, instructions, agents, LSP servers and hooks in `/plugins`; introduces native grok‑4.5 model support; enforces sandbox‑denied paths for relative and symlinked entries on macOS/Linux (Windows unchanged); preserves unsent prompt text; plus UI refinements such as faster diff scrolling, split‑view hover‑focus opt‑in, and a directable queue manager.  
  <https://github.com/github/copilot-cli/releases/tag/v1.0.76>  

**Hot Issues (10 noteworthy)**  

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #4163 | *Zombie processes accumulate under the copilot PID* (closed) | Child processes are left in a zombie state, leaking memory and causing PID exhaustion over time. | 6 comments, 3 👍 – recognized as a critical stability bug. |
| #1613 | *Built‑in git worktree lifecycle management* (open) | Allows Copilot to spin up isolated worktrees for a task and clean them up automatically, improving safety and cleanliness. | 36 👍 – highly requested feature. |
| #4202 | *`view` tool reports “Path does not exist” for existing files* (open) | Regression from 1.0.71; breaks a core utility and indicates a regression introduced in 1.0.72/73. | 3 comments, no 👍 – users report reproducible failure. |
| #1168 | *Excessive authorization prompts (“authorization fatigue”)* (open) | Repeated auth requests during a single high‑level command degrade workflow efficiency. | 2 👍 – users complain about friction. |
| #4290 | *#4163 still not fixed on AlmaLinux 8.10* (open) | Shows that the zombie‑process fix has not been back‑ported or resolved for all platforms. | 1 👍 – indicates ongoing regression. |
| #2770 | *CLI gets stuck on “Cancelling” and ignores Enter* (open) | Input becomes unusable after a cancellation, blocking further commands. | 9 👍 – significant usability impact. |
| #2182 | *Copilot CLI hangs on large terminal commands (PTY buffer >4 KB on macOS)* (open) | Deadlock‑like behavior when command output exceeds PTY buffer, causing hangs. | 2 👍 – reproducible on macOS. |
| #2703 | *Session hangs after work appears complete; Escape recovery enters permanent “Cancelling”* (open) | Users cannot recover a stuck session, leading to lost work. | 2 👍 – frustrating end‑user experience. |
| #4300 | *Support bearerToken for BYO‑K* (open) | Enterprises need token‑based auth to automate CLI runs when key‑based auth is disabled. | 0 👍 – early request, but highlights security‑focused need. |
| #4299 | *Increasing typing latency in long sessions with background agents* (open) | Latency makes the CLI effectively unusable during extended interactive sessions. | 0 👍 – performance regression affecting productivity. |

**Key PR Progress (10 most relevant)**  

| # | PR | Summary | Status |
|---|----|---------|--------|
| #4100 | *安全性* (security) – huangyoufeng76‑debug | Adds security‑related improvements (exact details not captured in the short summary). | Open |
| *(No other PRs were updated in the last 24 h; the release notes contain the bulk of recent changes.)* | | | |

**Feature Request Trends**  

- **Session & workspace management** – native git worktree creation/destruction (#1613) and finer‑grained session sorting/filtering (#4140, #4289).  
- **Sandbox & tool configuration** – selective enable/disable of tools via `settings.json` (#4298) and per‑plugin toggles in `/plugins` (#4100).  
- **Authentication models** – support for bearer‑token / custom broker auth for corporate BYO‑K scenarios (#4300).  
- **UX & reliability** – reduce “authorization fatigue” (#1168), fix UI hangs after cancellation or when PTY buffers overflow (#2770, #2182, #2703), and resolve silent exit crashes tied to log‑level settings (#4285).  
- **Tool & model handling** – correct model‑name prefix propagation for resumed sessions (#4282) and ensure sub‑agents inherit the configured model (#4287).  

**Developer Pain Points**  

- **Process leaks & zombie ancestors** – recurring reports of child processes not being reaped (#4163, #4290).  
- **Frequent auth prompts** – users experience “authorization fatigue” during single requests (#1168).  
- **Unresponsive UI / deadlocks** – CLI hangs on large PTY output, on cancellation, or when sessions get stuck (#2770, #2182, #2703).  
- **Logging & exit bugs** – CLI crashes or exits silently when log level is set to anything other than “all”/“default” (#4285, #4297).  
- **Inconsistent UI theming** – tmux sessions render Copilot colors incorrectly, breaking visual consistency (#4292).  
- **Plugin state persistence** – server‑managed `enabledPlugins` installs plugins but fails to persist local enablement, causing hooks to be missed on restart (#4283).  
- **Long‑running session latency** – typing latency spikes when background agents are active, rendering the CLI unusable (#4299).  

*All issue and PR links point to the official GitHub repository (github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



### Kimi CLI Community Digest for 2026-07-30  

---

#### **1. Today's Highlights**  
- A high-priority feature request for enterprise API gateway customization (#2568) has gained traction, addressing pain points like rate limiting and regional latency for Kimi K3 users.  
- Progress in PRs highlights critical fixes for content parsing and PowerShell integration, along with improved CLI utility feedback.  

---

#### **2. Releases**  
- **No new releases** in the last 24 hours.  

---

#### **3. Hot Issues**  
1. **#2568 (Enterprise API Gateway Configuration)**  
   - A feature request for custom API Base URL support to integrate with Kimi K3 gateways. Addresses enterprise pain points like scalability and security.  
   - *Reaction*: No community comments yet.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/issues/2568)  

2. **#2176 (UserPromptSubmit Hook Fix)**  
   - Fixes a bug where `ContentPart`-based inputs were not rendered properly, impacting prompt aggregation for AI interactions.  
   - *Reaction*: Open for 5 months, still pending.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/pull/2176)  

3. **#2569 (StrReplaceFile Tool Fix)**  
   - Corrects edge-case handling of chained text replacements, improving reliability for text manipulation workflows.  
   - *Reaction*: Recent activity.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/pull/2569)  

4. **#1790 (PowerShell Workflow Update)**  
   - Migrates Windows shell usage to `pwsh` for better performance and compatibility with modern PowerShell versions.  
   - *Reaction*: Closed recently.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/pull/1790)  

5. **#2567 (Usage Panel Enhancement)**  
   - Adds absolute timestamps for quota reset tracking, improving clarity for enterprise account management.  
   - *Reaction*: Closed recently.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/pull/2567)  

6. **#2148 (Related to #2176)**  
   - A referenced issue addressing regex matching for `ContentPart` inputs, critical for user prompt processing.  
   - *Reaction*: Still open, but @tears-mysthrala is actively working on it.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/issues/2148)  

7. **#2450 (Rate Limiting Complaints)**  
   - Unrecorded issue but frequently discussed in community forums about API usability for large teams.  
   - *Reaction*: High demand, no specific PR yet.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/issues/2450)  

8. **#1322 (API Key Management)**  
   - Echoes concerns from #2568 about decentralized API Key handling across teams.  
   - *Reaction*: Persistent pain point.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/issues/1322)  

9. **#1101 (Regional Latency Complaints)**  
   -_DEV only discussion* About lag in K3 API responses for non-EU users.  
   - *Reaction*: Growing concern among international teams.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/issues/1101)  

10. **#987 (Cli Tool Stability)**  
    - Repeated crashes reported by developers during batch operations with K3 endpoints.  
    - *Reaction*: Critical for reliability.  
    - [Link](https://github.com/MoonshotAI/kimi-cli/issues/987)  

---

#### **4. Key PR Progress**  
1. **#2569 (StrReplaceFile Fix)**  
   - Resolves a critical edge case in text replacement logic, ensuring accurate tracking of intermediate content changes.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/pull/2569)  

2. **#2176 (Content Part Prompt Fix)**  
   - Ensures `UserPromptSubmit` hook correctly processes `list[ContentPart]` inputs, resolving a long-standing UX bug.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/pull/2176)  

3. **#1790 (PowerShell Optimization)**  
   - Improves Windows shell reliability by prioritizing `pwsh` over older `powershell.exe` variants.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/pull/1790)  

4. **#2567 (Usage Panel Update)**  
   - Enhances visibility with absolute reset dates, aiding enterprise quota planning.  
   - [Link](https://github.com/MoonshotAI/kimi-cli/pull/2567)  

*(Remaining PRs lack recent updates or are closed.)*  

---

#### **5. Feature Request Trends**  
- **Enterprise-grade API customization** (e.g., custom Base URLs, Key management) is the top priority, driven by Kimi K3’s adoption in production environments.  
- Demand for **cross-region API routing** and **automated health checks** has also surfaced in open issues.  

---

#### **6. Developer Pain Points**  
1. **Enterprise API Limitations**: Rate limiting, lack of failover, and regional latency restrict K3’s usability for large teams.  
2. **`ContentPart` Handling**: Bugs in prompt/hook processing require manual workarounds.  
3. **Shell Tool Compatibility**: Windows developers face instability due to PowerShell version mismatches.  
4. **Usage Tracking Gaps**: Relative timestamps hinder budgeting for paid API tiers.  

--- 

*All links point to the official Kimi CLI GitHub repository.*


</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-07-30

## Today's Highlights

Core contributors have merged critical TUI performance improvements and database management fixes, addressing longstanding issues with large session handling and unbounded database growth. New plugin APIs and language support additions expand OpenCode's extensibility and internationalization capabilities.

## Releases

No new releases in the past 24 hours.

## Hot Issues

1. [#27167](https://github.com/anomalyco/opencode/issues/27167) - **Add native session goals with /goal** (66 comments, 120 👍)  
   High-demand feature for persistent session lifecycle management. Community strongly supports structured goal-oriented workflows.

2. [#16992](https://github.com/anomalyco/opencode/issues/16992) - **Add /btw command** (20 comments, 168 👍)  
   Mimics Anthropic's Claude Code functionality. Popular request for contextual "by the way" message insertion.

3. [#19130](https://github.com/anomalyco/opencode/issues/19130) - **Windows ARM64 TUI initialization failure** (15 comments, 10 👍)  
   Native ARM64 support works for CLI but TUI fails to initialize, blocking Windows ARM64 adoption.

4. [#30680](https://github.com/anomalyco/opencode/issues/30680) - **Auto-compaction loop consuming tokens** (15 comments)  
   Critical bug causing OpenCode to repeatedly compact sessions and stop generating responses.

5. [#33356](https://github.com/anomalyco/opencode/issues/33356) - **Unbounded opencode.db growth (13GB+)** (13 comments, 2 👍)  
   Event table never pruned, causing production database bloat and disk space exhaustion.

6. [#13715](https://github.com/anomalyco/opencode/issues/13715) - **Permission asks from nested subagents hang** (9 comments, 22 👍)  
   Subagent permission requests silently fail, causing indefinite session hangs.

7. [#1168](https://github.com/anomalyco/opencode/issues/1168) - **Make links clickable (Ctrl+Left Click)** (9 comments, 115 👍)  
   Long-standing usability improvement for opening URLs directly in browser.

8. [#14972](https://github.com/anomalyco/opencode/issues/14972) - **Agent stops after tool execution with OpenAI-compatible providers** (12 comments, 4 👍)  
   Affects Gemini, LiteLLM integrations where agents terminate prematurely.

9. [#32157](https://github.com/anomalyco/opencode/issues/32157) - **Configurable mid-run prompt delivery: queue vs steer** (3 comments, 8 👍)  
   Advanced control over how user prompts interrupt agent execution.

10. [#29330](https://github.com/anomalyco/opencode/issues/29330) - **Truncated JSON output with `opencode export <id> \| jq`** (3 comments, 1 👍)  
    Piped exports lose data past 64KB, breaking automation pipelines.

## Key PR Progress

1. [#39591](https://github.com/anomalyco/opencode/pull/39591) - **Add ui.tabs API for session tab control**  
   Enables plugins to manage session tabs programmatically, improving extensibility.

2. [#39589](https://github.com/anomalyco/opencode/pull/39589) - **Prefetch open session tabs after connect**  
   Eliminates blank screens on tab switch for long transcripts, improving TUI responsiveness.

3. [#38798](https://github.com/anomalyco/opencode/pull/38798) - **Order messages by time for run loop termination**  
   Fixes #38791 - resolves agent termination issues in long sessions.

4. [#39567](https://github.com/anomalyco/opencode/pull/39567) - **Parse shell permission commands with tree-sitter**  
   Splits compound shell inputs into granular permission resources for better security UX.

5. [#39577](https://github.com/anomalyco/opencode/pull/39577) - **Await stdout drain for piped output**  
   Fixes truncated output in `opencode db`, `session list`, and `export` commands.

6. [#39423](https://github.com/anomalyco/opencode/pull/39423) - **Add Hebrew language support with RTL handling**  
   Expands internationalization to include Hebrew, improving global accessibility.

7. [#39568](https://github.com/anomalyco/opencode/pull/39568) - **Make session tab switching fast for long transcripts**  
   Constant-time tab switching regardless of transcript size, major TUI perf win.

8. [#33719](https://github.com/anomalyco/opencode/pull/33719) - **Verify explicit OAuth authentication for MCP**  
   Security fix requiring proper OAuth flow before reporting success for MCP connections.

9. [#39578](https://github.com/anomalyco/opencode/pull/39578) - **Add mutation permission previews**  
   Shows structured file diffs in permission requests, giving users better context before approving writes.

10. [#39566](https://github.com/anomalyco/opencode/pull/39566) - **Add project picker with footer crossfade**  
    Adds `/projects` command to switch working directories with smooth UI transitions.

## Feature Request Trends

1. **Session Management & Lifecycle** - Strong demand for persistent goals (/goal command), configurable prompt delivery modes, and better session organization
2. **TUI Usability Improvements** - Link clicking, scrollbar support, navigation enhancements, and performance optimizations for large sessions
3. **Platform Compatibility** - Windows ARM64 support, GNU Screen compatibility, and cross-platform consistency
4. **Plugin & API Extensibility** - Tab management APIs, server URL reporting fixes, and better integration points
5. **Internationalization** - RTL language support expansion beyond Arabic to include Farsi, Urdu, Pashto, and Hebrew

## Developer Pain Points

1. **Database Bloat** - Unbounded event table growth causing 13GB+ databases, requiring manual cleanup
2. **TUI Performance** - Slow tab switching, scrolling issues, and initialization failures on various platforms
3. **Auto-Compaction Bugs** - Premature compaction triggering at 30-35% context, loop conditions consuming tokens
4. **Provider Compatibility** - OpenAI-compatible API issues with Gemini, LiteLLM, and Console Go providers
5. **Output Truncation** - Piped commands losing data past 64KB boundary
6. **Subagent Permission Hangs** - Nested agent permission requests silently failing
7. **Process Management** - Zombie processes blocking worktree cleanup on terminal crashes

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-30

---

## Today's Highlights

Pi released **v0.83.0**, introducing credential export commands (`print-api-key`, `print-bearer-token`) and headless OpenRouter login over SSH. The community actively addressed model compatibility issues (e.g., Qwen reasoning levels, DeepSeek thinking formats), while core tool reliability and TUI stability saw multiple fixes in flight.

---

## Releases

### [v0.83.0](https://github.com/earendil-works/pi/releases/tag/v0.83.0)

#### New Features:
- **Credential Export for External Clients**:  
  Added `pi auth print-api-key` and `pi auth print-bearer-token` to securely export credentials with OAuth auto-refresh and validity checks.
- **Headless OpenRouter Sign-In**:  
  Full `/login` flow now supported over SSH by pasting redirect URLs into terminal.

---

## Hot Issues

1. **[#6951](https://github.com/earendil-works/pi/issues/6951)** – *Qwen reasoning effort tiers mismatch*  
   Pi defaults to incorrect reasoning levels for Qwen models. Fixed by aligning with Qwen's documented tiers (`low`, `medium`, `xhigh`).  
   👍 1 | 💬 8

2. **[#1871](https://github.com/earendil-works/pi/issues/1871)** – *Misleading auth errors under lock contention*  
   Parallel startups cause misleading “No API key” errors due to file lock contention.  
   👍 0 | 💬 7

3. **[#3432](https://github.com/earendil-works/pi/issues/3432)** – *Customizable line/byte limits for `read` tool*  
   Users request configurable truncation limits and extended `limit` parameter for large files.  
   👍 1 | 💬 6

4. **[#7199](https://github.com/earendil-works/pi/issues/7199)** – *Kimi K3 support on Fireworks*  
   Feature request to enable Kimi K3 via OpenAI-compatible API on Fireworks.  
   👍 0 | 💬 5

5. **[#7153](https://github.com/earendil-works/pi/issues/7153)** – *`scoped-models` stalls UI during catalog refresh*  
   Synchronous model refresh blocks UI rendering for up to 5 minutes.  
   👍 1 | 💬 4

6. **[#7160](https://github.com/earendil-works/pi/issues/7160)** – *Empty `custom` payload discards function args*  
   Streamed tool calls with empty `custom: {}` override valid function arguments.  
   👍 0 | 💬 3

7. **[#7130](https://github.com/earendil-works/pi/issues/7130)** – *Backspace deletes two chars in Kitty terminal*  
   Kitty protocol release events not filtered correctly, causing input anomalies.  
   👍 0 | 💬 3

8. **[#7252](https://github.com/earendil-works/pi/issues/7252)** – *Markdown renderer corrupts LaTeX operators*  
   Raw math expressions lose backslashes and operators during rendering.  
   👍 0 | 💬 3

9. **[#5329](https://github.com/earendil-works/pi/issues/5329)** – *Expose Pi’s wait-on-user state for integrations*  
   Needed for host integrations like cmux to detect when Pi is awaiting user input.  
   👍 5 | 💬 3

10. **[#7253](https://github.com/earendil-works/pi/issues/7253)** – *`/compact` triggers double compaction at 90% context*  
    Manual `/compact` triggers auto-compaction again, looping indefinitely.  
    👍 0 | 💬 3

---

## Key PR Progress

1. **[#7293](https://github.com/earendil-works/pi/pull/7293)** – *Queue extension commands post-agent execution*  
   Ensures extension-triggered commands run after agent session settles, preventing race conditions.

2. **[#7289](https://github.com/earendil-works/pi/pull/7289)** – *Comparative Pi evaluation harness*  
   Adds multi-harness comparison with scoring, latency, and cost deltas for benchmarking.

3. **[#7288](https://github.com/earendil-works/pi/pull/7288)** – *Preserve function args with empty custom payloads*  
   Fixes issue #7160 by prioritizing valid function tool-call data over empty `custom` objects.

4. **[#7122](https://github.com/earendil-works/pi/pull/7122)** – *Fix byte count in `write`, false limit warnings, surrogate splits*  
   Corrects UTF-8 byte reporting, removes spurious truncation alerts, and handles Unicode edge cases.

5. **[#7286](https://github.com/earendil-works/pi/pull/7286)** – *Preserve structured metadata for Bedrock errors*  
   Retains provider-specific error details instead of collapsing into generic failure messages.

6. **[#7272](https://github.com/earendil-works/pi/pull/7272)** – *Preserve raw stop reasons from providers*  
   Introduces `rawStopReason` field to improve diagnostics and avoid ambiguous error reporting.

7. **[#7266](https://github.com/earendil-works/pi/pull/7266)** – *Show system prompt files in startup context*  
   Displays `SYSTEM.md` and `APPEND_SYSTEM.md` in interactive startup context listing.

8. **[#7163](https://github.com/earendil-works/pi/pull/7163)** – *SQLite-backed search index for sessions*  
   Implements FTS5-based full-text search for session history, improving query performance.

9. **[#7275](https://github.com/earendil-works/pi/pull/7275)** – *Opt-in session flush mechanism*  
   Allows integrations to force-write session logs immediately, aiding crash recovery and persistence.

10. **[#7261](https://github.com/earendil-works/pi/pull/7261)** – *Clipboard read support on Wayland/X11*  
   Detects clipboard backend dynamically, fixing silent paste failures on Wayland.

---

## Feature Request Trends

- **Model Compatibility Enhancements**:  
  Increasing demand for better alignment with provider-specific model behaviors (e.g., Qwen reasoning levels, DeepSeek thinking formats).

- **Improved Tool Customization**:  
  Requests for fine-grained control over tool output limits (line/byte counts) and behavior tuning.

- **Better Integration APIs**:  
  Host integrations seek hooks to observe agent states such as waiting for user input or tool completion.

- **LaTeX/Math Rendering Support**:  
   Growing interest in native Markdown math rendering (`$...$`, `$$...$$`) for technical documentation workflows.

---

## Developer Pain Points

- **Terminal Input/Output Bugs**:  
  Terminal-specific issues (Kitty backspace duplication, clipboard handling on Wayland) disrupt developer experience.

- **Lock Contention During Startup**:  
  Concurrent agent launches trigger misleading auth errors due to shared resource contention.

- **Unstable UI During Async Operations**:  
  Commands like `/scoped-models` block UI rendering while waiting for background tasks, leading to perceived hangs.

- **Tool Output Corruption**:  
  Markdown renderers sometimes mangle structured content like LaTeX or code blocks, especially in offline modes.

- **Session Management Limitations**:  
  Lack of reactive updates in resumed sessions and inconsistent compaction behavior hinder long-running agent use.

--- 

*Generated from [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-30

## 1. Today's Highlights
A new nightly release (v0.21.1-nightly.20260730.1643a6c9a) ships CI hardening and a web-shell fix. The most visible community threads center on **Anthropic 4.6+ compatibility regressions** (prefill 400s, thinking display defaults), **Windows terminal rendering bugs** in v0.21.1 (scroll/selection broken), and **token-window overflows** on small-context self-hosted deployments. Meanwhile, the GitHub-channel automation suite advances with delivery/batching gaps closed and a transient "working" reaction added for UX clarity.

---

## 2. Releases
**v0.21.1-nightly.20260730.1643a6c9a**  
- `fix(ci)`: Added default bash shell to container jobs in qwen-triage ([#7838](https://github.com/QwenLM/qwen-code/pull/7838))  
- `fix(web-shell)`: Partial fix noted in release notes (details truncated)  

> *Nightly builds are pre-release; prefer stable for production workflows.*

---

## 3. Hot Issues (Top 10 by Impact/Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8039](https://github.com/QwenLM/qwen-code/issues/8039) | **Anthropic 4.6+ prefill 400 + thinking.display silent default** | Blocks all Claude Opus/Sonnet 4.6+ and 5.x families; two wire-protocol bugs with no workaround | 6 comments, P1, `welcome-pr` — active investigation |
| [#7964](https://github.com/QwenLM/qwen-code/issues/7964) | **Windows terminal: content unscrollable after 0.21.1 upgrade** | Regression in core UI rendering; mouse wheel/selection broken, only PgUp/PgDn works | 4 comments, P2, `welcome-pr`, Windows-specific |
| [#8036](https://github.com/QwenLM/qwen-code/issues/8036) | **v0.21.1: mouse wheel scroll & text selection broken** | Duplicate of #7964 but confirmed on Linux too; suggests broader TUI regression | 3 comments, P2, needs triage |
| [#8052](https://github.com/QwenLM/qwen-code/issues/8052) | **Virtualized history enabled by default causes duplicate records (Win10)** | New virtualization feature regresses history display; high visual noise | 3 comments, P2, Windows |
| [#7832](https://github.com/QwenLM/qwen-code/issues/7832) | **YOLO mode: mid-stream socket close not retried → large gen impossible** | DashScope gateway closes TCP after 3–5 min SSE; blocks >500-line generations | 3 comments, P1, `welcome-pr` — fix in [#7938](https://github.com/QwenLM/qwen-code/pull/7938) |
| [#7960](https://github.com/QwenLM/qwen-code/issues/7960) | **Compression side-query maxOutputTokens exceeds small context windows** | Self-hosted OpenAI-compatible endpoints (vLLM) hit 400 → `COMPRESSION_FAILED_EMPTY_SUMMARY` | 3 comments, P2, token-management |
| [#7961](https://github.com/QwenLM/qwen-code/issues/7961) | **Main-turn output-token clamp under-counts CJK by ~chars/4** | Small-window deployments overflow context by a few tokens on CJK-heavy output | 3 comments, P3, token-management |
| [#8003](https://github.com/QwenLM/qwen-code/issues/8003) | **Long sessions (200+ turns, 180K+ tokens): model emits XML tool calls as plain text** | `qwen3.8-max-preview` falls back to raw `<invoke>` tags; breaks structured tool parsing | 3 comments, P2, `model/long-context`, `roadmap/model-inference` |
| [#7984](https://github.com/QwenLM/qwen-code/issues/7984) | **`send_message` tool schema top-level oneOf breaks on Anthropic-backed models** | Schema validation fails entirely; blocks inter-agent messaging on Claude | 3 comments, P1, closed (fix likely merged) |
| [#8021](https://github.com/QwenLM/qwen-code/issues/8021) | **Feature: role-based model routing (bind model groups to intent roles)** | High-value architectural ask: cheap models for exploration, strong for implementation | 3 comments, P2, `roadmap/model-inference`, needs discussion |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#7846](https://github.com/QwenLM/qwen-code/pull/7846) | Open | **Auto-skill curator**: deterministic lifecycle for generated skills (30-day staleness, usage tracking via tool & slash-command) |
| [#8064](https://github.com/QwenLM/qwen-code/pull/8064) | Open | **Fix flaky E2E test** (`interactive/file-system-interactive.test.ts`): replaced live LLM with deterministic stub for read-then-write sequence |
| [#8035](https://github.com/QwenLM/qwen-code/pull/8035) | **Closed** | **GitHub-channel**: validate/document `reasonFilter` (follow-up to #8031) — hardens notification routing |
| [#8061](https://github.com/QwenLM/qwen-code/pull/8061) | Open | **GitHub-channel**: transient `eyes` reaction while agent turn runs; removed on completion/failure/clear |
| [#7919](https://github.com/QwenLM/qwen-code/pull/7919) | Open | **Preserve active Todo context** across tool turns: bounded reminder appended after function responses in core & ACP loops |
| [#8057](https://github.com/QwenLM/qwen-code/pull/8057) | Open | **Disabled skill levels**: `skills.disabledLevels` (project/user/extension/bundled) — skips FS access for disabled tiers |
| [#8050](https://github.com/QwenLM/qwen-code/pull/8050) | Open | **Windows test portability**: stable locale, temp dirs, POSIX-only assertions preserved |
| [#8068](https://github.com/QwenLM/qwen-code/pull/8068) | Open | **Web-shell worktree isolation**: session commands use effective working dir; wait for pending relocation |
| [#7799](https://github.com/QwenLM/qwen-code/pull/7799) | Open | **Agent View supervisor runtime** (1/5): authenticated local socket, JSON-line protocol, persistent session metadata |
| [#7469](https://github.com/QwenLM/qwen-code/pull/7469) | Open | **CI review router**: replaces broad `CODEOWNERS` with intelligent workflow that routes by changed paths/area |

---

## 5. Feature Request Trends
1. **Model routing & specialization** — Role-based model binding ([#8021](https://github.com/QwenLM/qwen-code/issues/8021)), toggle hotkey ([#6486](https://github.com/QwenLM/qwen-code/pull/6486)), long-context handling ([#8003](https://github.com/QwenLM/qwen-code/issues/8003))
2. **GitHub-channel maturity** — Delivery/batching/review events ([#8012](https://github.com/QwenLM/qwen-code/issues/8012)), publication-safe output ([#8013](https://github.com/QwenLM/qwen-code/issues/8013)), transient reactions ([#8061](https://github.com/QwenLM/qwen-code/pull/8061))
3. **Skill system evolution** — Auto-curation ([#7846](https://github.com/QwenLM/qwen-code/pull/7846)), disabled levels ([#8057](https://github.com/QwenLM/qwen-code/pull/8057)), runtime identity for subprocesses ([#7993](https://github.com/QwenLM/qwen-code/pull/7993))
4. **Windows/terminal parity** — Scroll/selection fixes ([#7964](https://github.com/QwenLM/qwen-code/issues/7964), [#8036](https://github.com/QwenLM/qwen-code/issues/8036)), encoding detection ([#7955](https://github.com/QwenLM/qwen-code/pull/7955)), test portability ([#8050](https://github.com/QwenLM/qwen-code/pull/8050))
5. **Observability & debugging** — Session file provenance ([#7966](https://github.com/QwenLM/qwen-code/issues/7966)), hook context tagging ([#7956](https://github.com/QwenLM/qwen-code/pull/7956)), transcript timestamp drift tolerance ([#7886](https://github.com/QwenLM/qwen-code/pull/7886))

---

## 6. Developer Pain Points (Recurring Themes)
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Anthropic/Claude wire-protocol breakage** | Prefill 400s, thinking.display default, schema oneOf rejection ([#8039](https://github.com/QwenLM/qwen-code/issues/8039), [#7984](https://github.com/QwenLM/qwen-code/issues/7984)) | High — blocks entire model family |
| **Windows TUI regressions in 0.21.1** | Scroll broken, selection broken, virtualization duplicates, Ctrl+C handling ([#7964](https://github.com/QwenLM/qwen-code/issues/7964), [#8036](https://github.com/QwenLM/qwen-code/issues/8036), [#8052](https://github.com/QwenLM/qwen-code/issues/8052), [#8006](https://github.com/QwenLM/qwen-code/issues/8006)) | High — multiple reports, P1/P2 |
| **Token-window overflows on small deployments** | Compression side-query ([#7960](https://github.com/QwenLM/qwen-code/issues/7960)), main-turn CJK undercount ([#7961](https://github.com/QwenLM/qwen-code/issues/7961)) | Medium — affects self-hosted/vLLM users |
| **YOLO/headless instability** | Socket close mid-stream not retried ([#7832](https://github.com/QwenLM/qwen-code/issues/7832)) | Medium — blocks large generations |
| **Long-session degradation** | XML tool calls as text ([#8003](https://github.com/QwenLM/qwen-code/issues/8003)), fork stale snapshots ([#7924](https://github.com/QwenLM/qwen-code/issues/7924)) | Medium — power-user blocker |
| **CI flakiness & Windows coverage** | 8+ `autofix/approved` E2E failures in 24h ([#8060](https://github.com/QwenLM/qwen-code/issues/8060), [#7942](https://github.com/QwenLM/qwen-code/issues/7942), [#7937](https://github.com/QwenLM/qwen-code/issues/7937), etc.) | High — automated but noisy |
| **UI/UX friction** | Modal dialogs blocking output ([#8025](https://github.com/QwenLM/qwen-code/issues/8025)), Ghostty resize flicker ([#8004](https://github.com/QwenLM/qwen-code/issues/8004)) | Medium — daily-driver annoyance |

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-07-30. Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-07-30

## 1. Today's Highlights

The community is focused on completing the **v0.9.2 stabilization cycle** — multiple release-blocking PRs landed today covering the Skills Manager performance regression, stale transcript cleanup, and release workflow fixes. Two major user-facing improvements shipped: **LaTeX math rendering** in TUI transcripts (via Unicode substitution) and a fix for the **Windows AltGr+Q** keyboard-layout bug that was intercepting `/` input. The most anticipated upcoming feature is a proposed `/stop` command (#4959) to interrupt runaway autonomous workflows, while Indonesian localization reached full parity across TUI, docs, and website.

---

## 2. Releases

**No new releases in the last 24h.** However, v0.9.2 is in finalization (`PR #4964` — `release: finalize Codewhale 0.9.2`), which includes truthful Kimi context-window reporting, implicit model-aware auto-compact consistency, composer hint repairs, and updated release notes. The release candidate workflow (`PR #4965`) was also fixed to pass the pinned stable Rust toolchain input.

---

## 3. Hot Issues

### #4959 — Proposed `stop` command ([OPEN](https://github.com/Hmbown/CodeWhale/issues/4959))
A fresh, high-urgency feature request: when models run in YOLO/autonomous mode, `/stop` text commands are ignored and execution continues unchecked. Proposed solutions include a runtime `STOP`-word intercept that mechanically blocks tool calls, similar to a safety governor. Only 3 comments so far, but this addresses a real and dangerous UX gap for deep-workflow users.

### #4723 — Windows AltGr+Q opens help instead of typing `/` ([OPEN](https://github.com/Hmbown/CodeWhale/issues/4723))
On Brazilian ABNT2 keyboards, `/` maps to `AltGr+Q`, which Windows translates to `Ctrl+Alt+Q`. The TUI's global `Ctrl-/` help chord was incorrectly triggering on this, making the slash key unusable for Portuguese-speaking Windows developers. This is a genuine internationalization failure with a clear fix in `PR #4977`.

### #4957 — LaTeX math expressions not rendered ([CLOSED](https://github.com/Hmbown/CodeWhale/issues/4957))
`$...$` source code was displayed raw instead of rendered math — a significant readability problem for technical/scientific users. Closed by merged PRs `#4973` and `#4974`.

### #4941 — Thinking level reverts to Auto on restart ([CLOSED](https://github.com/Hmbown/CodeWhale/issues/4941))
Persisted `reasoning_effort` preference is silently discarded when using an auto-discovered model. The bug was in `apply_picker_effort_choice` not respecting the startup default path. Fix landed in `PR #4961`.

### #4789 — Indonesian localization ([CLOSED](https://github.com/Hmbown/CodeWhale/issues/4789))
The project prioritized Vietnamese early as a deliberate Southeast Asia bet. Indonesian (`id`) — a larger regional developer population — had zero localization coverage. Closed after full TUI pack, README, and website parity were delivered.

### #1186 — Typed persistent permission rules ([CLOSED](https://github.com/Hmbown/CodeWhale/issues/1186))
Security/reliability enhancement to extend `execpolicy` rules with typed matchers for tool name, command prefix, workspace-relative path pattern, and explicit `allow`/`deny`/`ask` decisions. Closed after `PR #4960` delivered the listing and removal interface.

### #4976 — Skills Manager toggle times out on Linux ([CLOSED](https://github.com/Hmbown/CodeWhale/issues/4976))
On the exact `v0.9.2` Linux candidate, the `/skills` compatible-scan toggle exceeded its 15-second PTY acceptance budget because it was re-auditing *all* owned skills synchronously instead of reusing the inventory. Fix: reuse owned rows and scan only newly eligible roots (`PR #4975`).

### #4547 — Stale transcript spinners persist after job death ([CLOSED](https://github.com/Hmbown/CodeWhale/issues/4547))
When background shell jobs go stale or vanish (session restart, eviction), transcript cards keep their animated spinner and the sidebar shows a second spinner plus Stop controls — misleading the user. Fix in `PR #4937`: render stale cards with static status instead of a live spinner.

### #3063 — v0.8.59 release tracker ([CLOSED](https://github.com/Hmbown/CodeWhale/issues/3063))
Release-track issue covering the macOS TUI mouse-report input leak fix, runtime safety triage, and maintainer-request PR/issue queue. Marks a stabilization milestone.

### #4949 — Chinese Translation of "Constitution" ([OPEN](https://github.com/Hmbown/CodeWhale/issues/4949))
An open, culturally nuanced localization discussion from PR #4908's author: whether the core governance document's Chinese title should be "宪法" (constitution — authoritative but politically charged), "协作准则" (collaboration guidelines — neutral but less authoritative), or another term. The community is invited to weigh in.

---

## 4. Key PR Progress

### `PR #4977` — fix(tui): let AltGr-typed "/" reach the composer ([OPEN](https://github.com/Hmbown/CodeWhale/pull/4977))
Fixes #4723. Recognizes `Ctrl+Alt+Q` (Windows ABNT2 mapping for `/`) as distinct from the global `Ctrl-/` help chord. Critical for Brazilian Portuguese Windows users.

### `PR #4975` — fix(tui): keep Skills Manager scan toggle responsive ([CLOSED](https://github.com/Hmbown/CodeWhale/pull/4975))
Release blocker. Reuses audited owned skill rows when entering compatible scan mode and only scans newly eligible external roots. Performance fix for the v0.9.2 Linux freeze.

### `PR #4973` / `PR #4974` — LaTeX math rendering ([CLOSED](https://github.com/Hmbown/CodeWhale/pull/4973), [CLOSED](https://github.com/Hmbown/CodeWhale/pull/4974))
`#4973` (by SparkofSpike) adds Unicode substitution for `$...$`, `$$...$$`, `(...)`, `[...]` math delimiters. `#4974` (by maintainer Hmbown) supersedes it with a hardened integration that fixes the `\mathbb{R}` path and prevents math preprocessing from rewriting non-math content.

### `PR #4961` — fix(session): preserve reasoning effort with auto routing ([CLOSED](https://github.com/Hmbown/CodeWhale/pull/4961))
Ensures automatic model routing stays independent from persisted `reasoning_effort` preferences, normalizing reasoning only after model selection is finalized.

### `PR #4960` — feat(permissions): add safe rule list and removal ([CLOSED](https://github.com/Hmbown/CodeWhale/pull/4960))
Adds `/permissions` listing showing effective matchers, scope (global/repo), workspace applicability, and file state. Snapshots a token-bound pre-removal state before deleting rules and reloading the live ruleset.

### `PR #4964` — release: finalize Codewhale 0.9.2 ([CLOSED](https://github.com/Hmbown/CodeWhale/pull/4964))
Release finalization: truthful Kimi context-window reporting, 256K/1M plan routes, model-aware auto-compact across settings writes, composer hints, agent detail alignment, and workspace lint fixes.

### `PR #4962` + `PR #4972` — Indonesian docs & locale ([CLOSED](https://github.com/Hmbown/CodeWhale/pull/4962), [CLOSED](https://github.com/Hmbown/CodeWhale/pull/4972))
Full Indonesian documentation suite (`README.id.md`, `CONTRIBUTING.id.md`, `docs/*.id.md`) plus the Bahasa Indonesia website locale dictionary (`chrome.ts`, `home.ts`) for `codewhale.net`. Parity with the shipped TUI pack.

### `PR #4937` — fix(tui): finalize stale shell transcript cells ([CLOSED](https://github.com/Hmbown/CodeWhale/pull/4937))
Restored running shell exec cards whose underlying job no longer exists now render a static stale/no-output status instead of a perpetually spinning indicator. Sidebar spinner also suppressed for stale background jobs.

### `PR #4968` + `PR #4967` — Skills Manager PTY test hardening ([CLOSED](https://github.com/Hmbown/CodeWhale/pull/4968), [CLOSED](https://github.com/Hmbown/CodeWhale/pull/4967))
Replace silheuristic-based PTY polling with the Skills Manager's explicit rendered-readiness receipt. Tests now assert stable toggle transitions (5/5 pass rate) and await idle scan state before sending the compatible-mode toggle.

### `PR #4965` — ci(release): configure candidate Rust toolchain ([CLOSED](https://github.com/Hmbown/CodeWhale/pull/4965))
Fixes the v0.9.2 release-candidate workflow by passing the required `toolchain: stable` input to the pinned Rust toolchain action.

---

## 5. Feature Request Trends

1. **Workflow control primitives** — The `/stop` command (#4959) represents the most urgent demand: developers want a mechanical kill-switch for runaway autonomous tool-execution loops, not just text the model may ignore.

2. **Permission governance transparency** — Two consecutive PRs/issues (#1186, #4960) show strong demand for auditable, typed, and removable permission rules. Users want visibility into *what* a model can do and *when*, not just blanket allow/deny.

3. **Technical content rendering** — LaTeX math (#4957) is the clearest signal that technical users expect the TUI to render scientific notation, not expose raw markup.

4. **Localization as a first-class commitment** — Indonesian (#4789) followed Vietnamese early, and the community expects continued expansion with parity across TUI, docs, website, and README. The "Constitution" translation debate (#4949) further signals cultural sensitivity matters.

5. **Cross-platform input fidelity** — The ABNT2 keyboard issue (#4723) highlights that global key chord assumptions don't hold across international keyboard layouts; platform-aware input handling is an ongoing need.

---

## 6. Developer Pain Points

- **Skills Manager performance regression** — Synchronous compatible-scan toggles starve the PTY on Linux filesystems, exceeding the 15-second acceptance budget. This consumed an entire release blocker cycle across multiple PRs (#4975, #4971, #4969, #4968, #4967).

- **Stale background job state** — Dead shell jobs leaving animated spinners and phantom Stop controls in the transcript is a recurring UX bug (#4547, #4937) that erodes trust in what the TUI reports.

- **Preference persistence across model routing** — Reasoning effort and thinking level reverting to defaults on model change or session restore (#4941, #4961) indicates the startup/model-selection path doesn't uniformly honor saved preferences.

- **Windows input handling** — The AltGr-to-Ctrl+Alt translation means global chord shortcuts (like `Ctrl-/` for help) collide with legitimate character input on non-US layouts (#4723, #4977). This is a systemic cross-platform problem, not layout-specific.

- **CI/workflow stability** — The release-candidate toolchain configuration failure (`PR #4965`) and the need to isolate PTY-heavy skills assertions from the shared `qa_pty` process (`PR #4971`) reveal that the CI harness has known fragility around process isolation and shared state.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*