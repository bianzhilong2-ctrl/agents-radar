# AI CLI Tools Community Digest 2026-07-20

> Generated: 2026-07-20 03:19 UTC | Tools covered: 9

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



### Cross-Tool Comparison Report for AI CLI Ecosystem (2026-07-20)  

---

#### **1. Ecosystem Overview**  
The AI CLI tools ecosystem reflects a dynamic shift toward modular, LLM-powered development environments. Tools prioritize integration with AI models (e.g., Claude, Gemini, Qwen), enhanced developer workflows (streaming, multi-agent systems), and security-conscious automation. Key themes include *context management*, *agent orchestration*, and *cross-platform standardization*, driven by community demand for reliability and extensibility.  

---

#### **2. Activity Comparison**  
| **Tool**            | **Open Issues** | **Closed Issues** | **Hot Issues Progress** | **Key PRs** | **Releases** |  
|----------------------|-----------------|-------------------|--------------------------|-------------|--------------|  
| **Claude Code**      | 10              | 0                 | Mixed (security/APR focus)| 10          | None         |  
| **Gemini CLI**       | 10              | 0                 | Critical auth/stability  | 10          | 1 nightly release (partial) |  
| **GitHub Copilot CLI** | 10            | 0                | Voice/TUI malfunctions   | 0           | None         |  
| **Kimi Code CLI**    | 5               | 0                | Streaming/remote control| 10          | None         |  
| **OpenCode**         | 10              | 0                | Headless mode/web UI     | 10          | None         |  
| **Pi**               | 10              | 5                 | Performance/TUI glitches | 10          | None         |  
| **Qwen Code**        | 10              | 1 (closed)        | Subagent/model bugs      | 10          | 1 preview released, 1 failed nightly |  
| **DeepSeek TUI**     | 10              | 5                 | UI/UX polish/sandboxing  | 10          | None         |  

*Note: Activity reflects 24h data from each tool’s digest.*  

---

#### **3. Shared Feature Directions**  
- **Security Automation**:  
  - Token/retrieval leakage fixes (Claude, Gemini, Qwen).  
  - MCP sandboxing (Claude, DeepSeek TUI).  
- **Multi-Agent Systems**:  
  - Subagent isolation bugs (Claude, Qwen) and workflow management (Kimi, DeepSeek TUI).  
- **API Reliability**:  
  - Rate-limiting, auth errors (Gemini), 400/429 errors (Qwen).  
- **Context/Model Management**:  
  - Context overflow (Kimi, OpenCode), cold-start optimization (Qwen).  
- **Web Integration**:  
  - Built-in search (Qwen), web UI adoption (OpenCode).  
- **Performance Optimization**:  
  - Token/batching (Qwen), cold-start bloat (Qwen), TUI latency (DeepSeek TUI).  

---

#### **4. Differentiation Analysis**  
- **Claude Code**: Focuses on *security* (prompt injection) and *MCP integration* for enterprise users.  
- **Gemini CLI**: Prioritizes *OAuth stability* and *context compression* for hybrid-cloud workflows.  
- **GitHub Copilot CLI**: Targets *voice/input UX* and *autocomplete-like plan-mode* for rapid prototyping.  
- **Kimi Code CLI**: Emphasizes *streaming observability* and *remote session continuity*.  
- **OpenCode**: Built for *headless API automation* with enterprise-grade LLMs (e.g., DeepSeek).  
- **Pi**: Unix-centric tools with *remote SSH execution* and *lightweight CLIs*.  
- **Qwen Code**: Develops a *modular daemon system* with web-search capabilities.  
- **DeepSeek TUI**: UX-heavy with *deep sub-agent controls* and keyboard-driven workflows.  

---

#### **5. Community Momentum & Maturity**  
- **High Momentum**: Gemini CLI (active nightly releases) and Qwen Code (web-search rollout).  
- **Mature but Stable**: DeepSeek TUI (50% closed issues) and Pi (security-focused patches).  
- **Fragmented Progress**: GitHub Copilot CLI (UI bugs, stalled PRs) and Claude Code (security fixes without releases).  
- **Emerging**: Kimi and OpenCode show rapid iteration in niche areas (remote control, headless automation).  

---

#### **6. Trend Signals**  
- **Web Search & Searchability**: Qwen’s `web_search` PR and OpenCode’s web UI demand indicate maturing AI-powered research tools.  
- **Security-by-Design**: Prominent across Claude, Gemini, and Qwen, reflecting stricter API/AI model governance.  
- **Multimodal & Multi-Agent**: Cross-tool focus on streaming (Kimi, Qwen), subagent delegation (Claude, DeepSeek TUI), and parallel task handling.  
- **Cold-Start & Context Efficiency**: Pain points in Qwen, OpenCode, and Gemini highlight demand for lighter, faster initialization.  
- **Platform-Specific Fixes**: Windows glitches (Claude, Gemini, Pi) and macOS inconsistencies (Claude) signal ongoing cross-OS parity challenges.  

--- 

This report underscores the ecosystem’s maturity in addressing foundational AI tooling pain points while highlighting divergent priorities shaping tool-specific roadmaps.


---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills – Community Highlights (as of 2026‑07‑20)**  

---

### 1. Top Skills Ranking  
| # | PR (title) | Core Functionality | Discussion Highlights | Status | GitHub Link |
|---|------------|-------------------|-----------------------|--------|-------------|
| 1 | **#1298** – *fix(skill‑creator): run_eval.py always reports 0 % recall …* | Fixes evaluation‑artifact installation, Windows stream reading, and parallel‑worker handling so that `run_eval.py` can reliably detect skill triggers. | Community reproduced the “recall = 0 %” bug in >10 runs; multiple work‑arounds proposed and merged into a single PR. | **Open** (last updated 2026‑06‑23) | <https://github.com/anthropics/skills/pull/1298> |
| 2 | **#514** – *Add document‑typography skill* | Enforces typographic quality (orphan/widow control, numbering alignment) in all AI‑generated docs. | Frequently cited as “must‑have” for professional‑grade output; praised for tackling a pain point that affects every document. | **Open** (last updated 2026‑03‑13) | <https://github.com/anthropics/skills/pull/514> |
| 3 | **#486** – *Add ODT skill* | Full ODT (OpenDocument) read/write/convert pipeline; triggers on any reference to “ODT”, “ODS”, “OpenDocument”, etc. | Highlighted as a missing industry‑standard format; early adopters requested integration with LibreOffice pipelines. | **Open** (last updated 2026‑04‑14) | <https://github.com/anthropics/skills/pull/486> |
| 4 | **#1367** – *feat(skills): add self‑audit … (v1.3.0)* | Self‑audit skill that mechanically verifies output files, then runs a four‑dimension reasoning quality gate (damage‑severity priority). | Generates strong interest as a “universal safety net” for any skill; discussion focuses on how it can be composed with existing abilities. | **Open** (last updated 2026‑07‑02) | <https://github.com/anthropics/skills/pull/1367> |
| 5 | **#723** – *feat: add testing‑patterns skill* | Comprehensive testing guide covering philosophy, unit tests (AAA), React component testing, CI/CD hooks, and test‑data management. | Market‑facing; community sees it as the missing “testing literacy” layer for skill authors. | **Open** (last updated 2026‑04‑21) | <https://github.com/anthropics/skills/pull/723> |
| 6 | **#525** – *Add pyxel skill for retro game development* | Skill for the Pyxel retro‑game engine (write → run_and_capture → inspect → iterate). | Niche but highly requested by indie game devs; praised for extending Claude’s creative‑tooling surface. | **Open** (last updated 2026‑07‑15) | <https://github.com/anthropics/skills/pull/525> |
| 7 | **#1302** – *Add color‑expert skill* | Stand‑alone color‑expertise skill covering naming systems, spaces, and “what‑to‑use‑when” tables. | Frequently mentioned in brainstorming threads about visual‑design capabilities. | **Open** (last updated 2026‑06‑12) | <https://github.com/anthropics/skills/pull/1302> |
| 8 | **#1099** – *skill‑creator: fix run_eval.py crash on Windows …* | Resolves Windows subprocess‑pipe reading errors that prevented any trigger detection; restores usable `run_eval.py` on Windows. | Community confirmed the bug blocked the entire description‑optimization loop; fix is a one‑line change. | **Open** (last updated 2026‑05‑24) | <https://github.com/anthropics/skills/pull/1099> |

*The list is ordered by the volume of community commentary (issue comments, PR activity, and “👍” reactions) observed up to July 2026.*

---

### 2. Community Demand Trends  
- **Trust & Security Boundaries** – Issue #492 (39 comments) flags the misuse of the `anthropic/` namespace by community‑made skills, prompting calls for signed‑identity verification and org‑level trust policies.  
- **Org‑wide Skill Distribution** – Issue #228 (14 comments) requests a native sharing mechanism inside Claude.ai so teams can publish and adopt skills without manual file exchange.  
- **Testing & Validation Tooling** – Issue #1169 (3 comments) and the *testing‑patterns* PR (#723) surface a strong appetite for systematic test‑pattern libraries and quality gates.  
- **Documentation & Knowledge‑Base Completeness** – Issue #189 (9 comments) points out duplicated content between `document‑skills` and `example‑skills`, urging clearer module separation and consolidated docs.  
- **Cross‑Platform Compatibility** – Multiple Windows‑focused issues (#1061, #1099, #1323) highlight a persistent demand for first‑class Windows support in the skill‑creation pipeline.  

*Collectively, the community is gravitating toward safer, shareable, and rigorously tested skill ecosystems that work uniformly across operating systems.*

---

### 3. High‑Potential Pending Skills  
| PR # | Title | Why It’s High‑Potential | Current Status |
|------|-------|------------------------|----------------|
| **#1367** | *feat(skills): add self‑audit …* | Provides a universal quality‑gate; likely to become a de‑facto standard for all downstream skills. | **Open** – active discussion, last update 2026‑07‑02 |
| **#1323** | *fix(skill‑creator): run_eval trigger detection misses real skill name …* | Addresses the root cause of the 0 % recall bug that stalls the optimization loop; once merged, all evaluation pipelines improve. | **Open** – last update 2026‑06‑25 |
| **#1302** | *Add color‑expert skill* | Extends Claude’s visual‑design capability set; fills a noted gap in color‑science tools. | **Open** – last update 2026‑06‑12 |
| **#1099** | *skill‑creator: fix run_eval.py crash on Windows …* | Enables the evaluation loop to run on Windows; a prerequisite for broader adoption. | **Open** – last update 2026‑05‑24 |
| **#1050** | *skill‑creator: fix Windows subprocess + encoding bugs* | Complements #1099; together they remove the last Windows blockers for skill authoring. | **Open** – last update 2026‑05‑24 |
| **#723** | *feat: add testing‑patterns skill* | Supplies the missing testing scaffolding that many downstream skills request. | **Open** – last update 2026‑04‑21 |
| **#525** | *Add pyxel skill for retro game development* | Targets a growing indie‑dev niche; high engagement on related forums. | **Open** – last update 2026‑07‑15 |

*These PRs are still open, have recent activity, and are frequently referenced in community discussions, indicating a high likelihood of merging within the next few weeks.*

---

### 4. Skills Ecosystem Insight  
**The community’s most concentrated demand is for robust, reusable quality‑audit and verification pipelines—especially self‑audit and testing‑pattern skills that can be safely shared across organizations.**  

---  

*All links point to the official `anthropics/skills` repository on GitHub.*

---

### 1. **Today's Highlights**  
Claude Code users and developers focused heavily on MCP server documentation gaps, API reliability, and agent behavior issues. Key themes included improving plugin integrations, stabilizing model interactions, and enhancing CLI usability across platforms. Community reaction emphasized frustration with unexpected model downgrades and security-related prompt injection risks.  

---

### 2. **Releases**  
No new releases were published in the last 24 hours.  

---

### 3. **Hot Issues**  
1. **[#56154](https://github.com/anthropics/claude-code/issues/56154)** - MCP docs fail to note `workspace` is a reserved server name. Critical for proper server configuration.  
2. **[#51670](https://github.com/anthropics/claude-code/issues/51670)** - Account suspensions post-CLI use remain unresolved, impacting user trust.  
3. **[#63815](https://github.com/anthropics/claude-code/issues/63815)** - ElevenLabs MCP TTS tools return 404 errors despite valid endpoints.  
4. **[#78115](https://github.com/anthropics/claude-code/issues/78115)** - Removal of "Group by PR status" in the MacOS app disrupts workflow for developers.  
5. **[#79292](https://github.com/anthropics/claude-code/issues/79292)** - Subagent SSE streams stall silently at scale, impacting dynamic workflows.  
6. **[#79269](https://github.com/anthropics/claude-code/issues/79269)** - Prompt injection detected in subagent contexts, raising security concerns.  
7. **[#67846](https://github.com/anthropics/claude-code/issues/67846)** - Slack connector drops `sh_room_ended` events, breaking huddle tracking.  
8. **[#68605](https://github.com/anthropics/claude-code/issues/68605)** - Request for per-project MCP exclusion to avoid global server conflicts.  
9. **[#79295](https://github.com/anthropics/claude-code/issues/79295)** - Opus 4.6 violates its own rules during spec reviews, causing regressions.  
10. **[#79282](https://github.com/anthropics/claude-code/issues/79282)** - Manual `/verify` and `/code-review` commands required after 2.1.215 update.  

Community feedback highlighted urgency for API fixes and security patches.  

---

### 4. **Key PR Progress**  
1. **[#79237](https://github.com/anthropics/claude-code/pull/79237)** - Fix to prevent spawn tasks from mutating parent repos via invalid worktrees.  
2. **[#79224](https://github.com/anthropics/claude-code/pull/79224)** - Prioritized triage of mobile app issues (iOS/Android) affecting remote control.  
3. **[#79211](https://github.com/anthropics/claude-code/pull/79211)** - Removed syntax errors in `rule_engine.py` to stabilize rule execution.  
4. **[#79210](https://github.com/anthropics/claude-code/pull/79210)** - Stripped ANSI escapes from model IDs in settings to prevent corruption.  
5. **[#79152](https://github.com/anthropics/claude-code/pull/79152)** - Improved Statsig logging to avoid false duplicate metrics.  
6. **[#79151](https://github.com/anthropics/claude-code/pull/79151)** - Updated dedupe bot to honor public thumbs-down reactions.  
7. **[#79148](https://github.com/anthropics/claude-code/pull/79148)** - Enforced `hookify.` prefix for plugins to ensure discovery.  
8. **[#79140](https://github.com/anthropics/claude-code/pull/79140)** - hid `/ralph-wiggum` commands to prevent model misuses.  
9. **[#79131](https://github.com/anthropics/claude-code/pull/79131)** - Fixed `validate-settings.sh` to accept non-lowercase keys.  
10. **[#79129](https://github.com/anthropics/claude-code/pull/79129)** --resolved crash in `gh.sh` for older bash versions.  

Most PRs address CLI stability and plugin integrity.  

---

### 5. **Feature Request Trends**  
- **Per-project MCP exclusions** to decouple global/server conflicts.  
- **Visual agent differentiation** via color coding in the agents view.  
- **Autonomous code review/validation** without manual triggers.  
- **Model selector in routines UI** for easier model switching.  
- **Security-focused workflows** with reduced false positives in threat detection tasks.  

Requests emphasize flexibility in agent management and security-conscious automation.  

---

### 6. **Developer Pain Points**  
- **Model inconsistencies**: Frequent Fable-to-Opus downgrades disrupt workflow.  
- **Plugin integration failures**: Missing inbound messages (e.g., Telegram), silent permissions issues.  
- **CLI setup frustrations**: Broken URLs on Windows, cryptic error messages.  
- **API reliability**: Slowness and authentication errors despite valid keys.  
- **Documentation gaps**: Missing critical server naming rules, Hiback deprecated syntax.  

Developers cite setup complexity and model behavior unpredictability as top barriers.


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

## Gemini CLI Community Digest - 2026-07-20

### **Today's Highlights**
Today's digest reveals ongoing challenges with MCP integration and authentication issues across the platform. Several critical bugs are affecting enterprise users and developers using the latest Gemini models, particularly around context compression failures and OAuth authentication problems. The team is actively addressing these through nightly releases and security fixes.

### **Releases**
**v0.52.0-nightly.20260720.gacae7124b** - Latest nightly release with automated version bump (github.com/google-gemini/gemini-cli/pull/28465). This marks the current development snapshot addressing various stability and performance improvements.

### **Hot Issues**

1. **#22493 (12 comments)** - Account limit bug hitting users unexpectedly for 48+ hours - Community concerns about policy changes vs technical bug affecting account usage (github.com/google-gemini/gemini-cli/issues/22493)

2. **#22323 (11 comments)** - Subagent recovery reporting as goal success despite hitting MAX_TURNS limit - Critical agent behavior bug hiding interruption failures (github.com/google-gemini/gemini-cli/issues/22323)

3. **#21851 (4 comments)** - Privacy command fails to persist data collection settings - Regression breaking user privacy preferences across sessions (github.com/google-gemini/gemini-cli/issues/21851)

4. **#22241 (7 comments)** - Gemini CLI hangs indefinitely with Google One AI Ultra (OAuth) - Enterprise users experiencing complete functionality loss (github.com/google-gemini/gemini-cli/issues/22241)

5. **#20920 (6 comments)** - Gemini 3.0 and 3.1 not responding - Version-specific compatibility issue affecting latest model support (github.com/google-gemini/gemini-cli/issues/20857)

6. **#19997 (10 comments)** - Missing API key redaction in proxy URLs - Security vulnerability potentially exposing credentials in telemetry (github.com/google-gemini/gemini-cli/issues/19997)

7. **#21052 (3 comments)** - Sub-agents hang on interactive terminal prompts in v0.32.0 - Regression breaking agent interaction with user input commands (github.com/google-gemini/gemini-cli/issues/21052)

8. **#19590 (4 comments)** - Chat context compression failure causing app shutdown - Critical crash when conversation history exceeds compression threshold (github.com/google-gemini/gemini-cli/issues/19590)

9. **#20929 (6 comments)** - Windows Shift+Tab not cycling approval mode in PowerShell - Cross-platform UI consistency issue affecting Windows users (github.com/google-gemini/gemini-cli/issues/20929)

10. **#2015 (6 comments)** - MCP connection refusal when instructions omitted - Developers facing MCP integration barriers with optional spec compliance (github.com/google-gemini/gemini-cli/issues/2015)

### **Key PR Progress**

1. **#28459** - Major version bump to `@google/genai@2.11.0` - Upgrading core AI client library (github.com/google-gemini/gemini-cli/pull/28459)

2. **#28446** - Fix OAuth token exchange using native fetch - Security fix for "Premature close" errors on headless VPSes (github.com/google-gemini/gemini-cli/pull/28446)

3. **#28386** - VS Code activation disposables tracking fix - Critical extension registration fix for VS Code companion (github.com/google-gemini/gemini-cli/pull/28386)

4. **#28447** - Windows PowerShell troubleshooting documentation - Addressing installation issues after global npm installs (github.com/google-gemini/gemini-cli/pull/28447)

5. **#25166** - Shell command execution stuck after completion - Community-reported issue affecting simple command execution (github.com/google-gemini/gemini-cli/pull/25166)

6. **#22179** - MCP integration fails with API validation error unless YOLO enabled - Enterprise MCP server compatibility issue requiring workaround (github.com/google-gemini/gemini-cli/pull/22179)

7. **#19436** - Model doesn't support `function_response.parts` for Gemini 2.5 - API model compatibility issue affecting function calling (github.com/google-gemini/gemini-cli/issues/19436)

8. **#26522** - Auto Memory stopping retry of low-signal sessions - Memory processing optimization to prevent infinite retries (github.com/google-gemini/gemini-cli/issues/26522)

9. **#24246** - 400 error with >128 tools available - Agent tool scope management issue for complex tool combinations (github.com/google-gemini/gemini-cli/issues/24246)

10. **#23571** - Model creates temporary scripts in random locations - Workspace cleanup and organization challenge (github.com/google-gemini/gemini-cli/issues/23571)

### **Feature Request Trends**

- **Enhanced MCP Integration**: Community seeking better MCP server support for optional instructions and enterprise compatibility
- **AST-Aware Tools**: Growing interest in AST (Abstract Syntax Tree) aware file operations for more precise code analysis
- **Memory Management**: Increasing requests for smarter memory processing with improved signal detection
- **Context Compression**: Need for more robust context handling to prevent application crashes
- **Cross-Platform Consistency**: Stronger focus on Windows and PowerShell support improvements
- **Enterprise Features**: Greater demand for better OAuth integration and enterprise subscription support
- **Authentication Security**: Enhanced redaction and credential protection across all authentication flows

### **Developer Pain Points**

1. **Authentication Instability**: OAuth failures and subscription-related authentication blocks causing complete functional loss
2. **Agent Interaction Issues**: Sub-agents hanging on interactive prompts and unclear termination states
3. **Platform-Specific Bugs**: Significant Windows inconsistencies, particularly with PowerShell and approval modes
4. **Security Concerns**: Credential exposure in telemetry logs and authentication flows
5. **Performance Problems**: Context compression crashes and tool-related 400 errors affecting workflow
6. **Integration Complexity**: MCP connection difficulties and version-specific model compatibility
7. **UX Gaps**: Misleading error messages, silent failures, and poor error recovery mechanisms
8. **Testing Problems**: Skipped tests that should be enabled, inconsistent test coverage

The community is actively working through these challenges, with frequent updates addressing critical enterprise functionality and security issues. The focus appears to be on stabilizing agent interactions, improving cross-platform support, and enhancing authentication reliability.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑07‑20**

---

### 1. Today’s Highlights
- **Voice‑mode transcription completely fails** for all bundled ASR models – a routing bug in `MultiModalProcessor` is silencing every `/voice` call.  
- **Plan‑mode regression** blocks shell commands and stalls execution, breaking the workflow that developers rely on for plan‑driven development.  
- The **desktop app mis‑routes public `github.com` issue links** to an enterprise host, rendering inline issue tabs unusable.  
- **Interactive TUI ignores keyboard input** in programmatic PTY sessions, crippling automation tools that pipe commands into the CLI.  

---

### 2. Releases  
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues (10 most noteworthy)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| **#4024** | **[Voice mode: all bundled ASR models fail silently](github.com/github/copilot-cli/issues/4024)** | `/voice` recordings are captured but every transcription returns empty – a critical defect for developers relying on speech input. | 13 comments, 0 👍 – rapid community discussion of the MultiModalProcessor routing bug. |
| **#1857** | **[Allow users to cancel or remove enqueued messages](github.com/github/copilot-cli/issues/1857)** | Removes a long‑standing usability gap: once a message is queued (Ctrl+Q/Ctrl+Enter) there’s no way to abort it before processing. | 8 comments, **24 👍** – the most upvoted issue, indicating strong demand. |
| **#4188** | **[Regression on plan‑mode](github.com/github/copilot-cli/issues/4188)** | Plan‑mode now blocks shell commands (e.g., `gh`) that were previously used to enrich plans, breaking the whole plan workflow. | 0 comments, 0 👍 – freshly reported, already recognized as a regression. |
| **#4177** | **[Desktop app routes public GitHub issue links incorrectly](github.com/github/copilot-cli/issues/4177)** | Opening a `github.com` issue in the desktop inline tab fails with “We couldn’t load this issue,” routing to the enterprise API instead. | 1 comment, 0 👍 – immediate bug‑triage flag. |
| **#4185** | **[`--add-dir` causes Claude sub‑agent dispatch to fail (cache‑block limit)](github.com/github/copilot-cli/issues/4185)** | Adding >4 directories with `--add-dir` pushes cache‑controlled blocks beyond Anthropic’s 5‑block limit, causing every Claude sub‑agent to crash. | 0 comments, 0 👍 – subtle but critical for multi‑repo workflows. |
| **#4179** | **[TUI: Ability to click on enqueued entry to edit it](github.com/github/copilot-cli/issues/4179)** | The CLI’s TUI lacks mouse‑click support for editing already queued messages, making interactive editing cumbersome. | 1 comment, 0 👍 – UI/UX improvement request. |
| **#4183** | **[Auto‑compaction does not prevent CAPI 5 MB failure](github.com/github/copilot-cli/issues/4183)** | Even with compaction, long‑running, tool‑heavy sessions can exceed the independent 5 MB request‑body limit, locking out further model calls. | 0 comments, 0 👍 – capacity‑planning concern. |
| **#4180** | **[Interactive TUI ignores all keyboard input in PTY (agent orchestration broken)](github.com/github/copilot-cli/issues/4180)** | Automation scripts (tmux, expect, etc.) cannot interact with the TUI – printable characters, arrows, Ctrl + L, Enter all disappear. | 0 comments, 0 👍 – blocks integration pipelines. |
| **#4184** | **[Copying path of current project copies whitespace](github.com/github/copilot-cli/issues/4184)** | Right‑click or Ctrl + C on the project‑path badge copies spaces instead of the actual path, hurting developer productivity. | 0 comments, 0 👍 – UI cosmetic bug. |
| **#4178** | **[Show effective model in background‑agent list/detail views](github.com/github/copilot-cli/issues/4178)** | The desktop UI hides which model actually performed delegated work, making debugging and cost tracking difficult. | 0 comments, 0 👍 – visibility/feature request. |

---

### 4. Key PR Progress
- **#1** – *Create ownership.yaml* (closed, 2023‑01‑06) – initial repository ownership metadata; no impact on current development.

*Only one historic PR was updated in the last 24 h, so there is limited new pull‑request activity to report.*

---

### 5. Feature Request Trends
1. **Better TUI interactivity** – mouse clicks for editing queued messages, clipboard‑friendly path copying, and responsive keyboard input for orchestration tools.  
2. **Granular command control** – ability to cancel/remove queued messages before they execute, easing workflow management.  
3. **Enhanced transparency** – showing the effective model in background‑agent views and exposing token/context usage from the ACP server.  
4. **Improved session handling** – easy creation of new sessions from `/btw` and reliable plan‑mode exits that don’t block subsequent commands.  
5. **Media support** – native paste‑image capability in `/btw` discussions and robust voice‑mode transcription (currently broken).  

These trends point to a community eager for tighter CLI‑UI integration, more control over queued/future work, and richer observability in delegated workflows.

---

### 6. Developer Pain Points
- **Silent failures** – voice recordings and plan‑mode exits produce no useful output, making debugging opaque.  
- **Workflow blocking** – plan‑mode now stalls shell commands, and interactive TUI refuses any keyboard input, breaking automation scripts.  
- **Routing bugs** – public GitHub issue links are mis‑routed in the desktop app, and `--add-dir` exceeds Anthropic’s cache block limit.  
- **UI inconsistencies** – copying project paths copies whitespace, and mouse clicks cannot edit enqueued entries.  
- **Performance & limits** – long, tool‑heavy sessions still hit a 5 MB CAPI request cap despite auto‑compaction, and Windows desktop startup can lag 1–2 minutes.  
- **Observability gaps** – ACP server does not expose token/context usage, and background‑agent views lack model metadata.  

Collectively, these issues signal a need for **more reliable error reporting**, **robust input handling**, **faster startup**, and **greater visibility** into delegated execution to restore developer confidence in the CLI.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑07‑20**  

---  

### 1. Today's Highlights  
- A Windows‑specific usability bug was reported: the **herdr** TUI does not respond to arrow‑key navigation in version 0.27.0 (Issue #2521).  
- Developers landed a performance‑focused PR that eliminates quadratic string‑concat and unnecessary deep‑copies in the `kosong` streaming merge path (PR #2515).  
- A fix aligning **fork/undo** context truncation to wire turns was opened, directly addressing the context‑jsonl truncation bug reported in Issue #2517 (PR #2520).  
- The most‑up‑voted feature request remains the **Remote Control** enhancement that would let users resume a local session from any device (Issue #1282, 13 👍).  

### 2. Releases  
*No new releases were published in the last 24 hours.*  

### 3. Hot Issues  
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #1282 | [Feature Request] Remote Control – continue local sessions from any device | Enables workflow continuity across phones, tablets, or browsers; highly requested for mobile‑first developers. | 13 👍, 5 comments – strong interest. |
| #2521 | [Bug] Windows version of **herdr** – arrow keys unusable | Blocks basic navigation in the interactive TUI on Windows, affecting all Windows users. | Newly opened (today), 0 👍 – needs immediate attention. |
| #2517 | [Bug] `/undo` and `/fork` truncate `context.jsonl` at the wrong turn in compacted/steered sessions | Corrupts session history, leading to lost context after undo/fork operations. | 0 👍, 0 comments – but linked to a PR that aims to fix it. |
| #2511 | [Feature] Mid‑turn streaming hook (`MessageDisplay`) for live reply consumers | Allows external tools (TTS, live logging, progress UI) to react while the model streams output. | 0 👍, 0 comments – reflects growing demand for streaming extensibility. |

### 4. Key PR Progress  
| # | PR | Summary & Impact |
|---|----|------------------|
| #2520 | `fix(session): align fork/undo context truncation to wire turns` | Resolves Issue #2517 (and related #1974/#2049) by ensuring undo/fork cut points match the wire‑turn count, preventing history truncation errors. |
| #2515 | `perf(kosong): buffer stream merges and avoid deep-copying every delta` | Optimises the streaming merge path: replaces quadratic `str +=` with buffered accumulation and removes needless `model_copy(deep=True)`, reducing CPU overhead on long LLM responses. |
| #2518 | `fix(web): persist uploads .sent marker so restarts do not re‑send files` | Stops `kimi web` from re‑uploading previously sent files on each server restart, cleaning up session pollution (addresses #2413). |
| #2519 | `fix(app): refresh stale frozen system prompt on session resume` | Ensures resumed sessions pick up newly added skills or `AGENTS.md` changes instead of using the stale frozen system prompt (fixes #2420). |
| #2513 | `fix(kosong): recursively decode double‑encoded tool‑call arguments` | Handles Moonshot API’s double‑encoded JSON strings in `function.arguments`, preventing Pydantic validation failures. |
| #2514 | `fix(skill): ignore stray markdown in plugins container during skill discovery` | Makes skill discovery robust to stray `.md` files, aligning behaviour with documented plugin layout. |
| #2512 | `feat(hooks): add MessageDisplay hook for mid‑turn streaming` | Implements the hook requested in #2511; fires repeatedly as the assistant reply streams, enabling live consumers (TTS, logging, UI). |
| #2516 | `Create kimi-cli` | Initial scaffolding PR (closed) – not functional but shows early repo bootstrap activity. |

### 5. Feature Request Trends  
- **Remote session continuity** (Issue #1282) is the top‑voted feature, indicating a strong desire for cross‑device session handoff.  
- **Streaming observability** (Issues #2511/#2512) shows growing interest in hook‑based real‑time consumption of model output.  
- No other open feature requests appear in the last 24 h; most recent activity centres on bug‑fixes and performance.  

### 6. Developer Pain Points  
- **Platform‑specific UI glitches** – Windows TUI navigation (herdr) is broken, forcing reliance on mouse or work‑arounds.  
- **Session integrity** – Incorrect context truncation during undo/fork leads to lost conversation history, a recurring source of frustration.  
- **Upload persistence** – Web mode re‑sending files on each restart clutters sessions and wastes bandwidth.  
- **Streaming overhead** – Inefficient string concatenation and deep copying in the kosong layer hurt responsiveness on long outputs.  
- **Tool‑argument encoding** – Double‑encoded JSON from the API causes validation errors unless handled explicitly.  

*All items link directly to the corresponding GitHub issue or PR (e.g., Issue #1282: https://github.com/MoonshotAI/kimi-cli/issues/1282).*  

---  

*Prepared for developers tracking Kimi Code CLI’s evolution. Stay tuned for the next digest.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest 2026-07-20

## Today's Highlights
OpenCode saw critical maintenance fixes for headless mode failures, context overflow handling, and infinite loops with Claude models today. Key PRs introduced diagnostic telemetry, NVIDIA NIM DeepSeek compatibility, and PGSQL auto-recovery. The community continues to push for web UI integration and expert LLM distribution improvements, with PR #37842 addressing AI API streaming delta parsing becoming pivotal for cross-provider workflows.

## Releases
No official releases documented in the last 24 hours

## Hot Issues
1. [Issue #37841] Fixes missing tool call IDs from API deltas (#37842 PR pending) - Breaks $LYRIMWnn户molecule generation pipelines. [GitHub Link]
2. [Issue #24882] Persistent DB initial phase freezes - Affects first-run experiences. [GitHub Link]
3. [Issue #28543] Auto-compaction loop with Claude-Opus - High priority for enterprise deployments. [GitHub Link]
4. [Issue #13537] WebUI provider implementation - Critical for enterprise adoption. [GitHub Link]
5. [Issue #28467] Plan agent file write bypassing - Security concern. [GitHub Link]
6. [Issue #28499] Task list masking UI glitch - Impacts workflow visualization. [GitHub Link]
7. [Issue #4845] Token overflow unrecoverable - Persistent prompt handling limitation. [GitHub Link]
8. [Issue #28424] 'Failed to fetch' endpoint errors - Affects local API server users. [GitHub Link]
9. [Issue #28353] ToolBuild hook proposal - Significant architecture suggestion. [GitHub Link]
10. [Issue #27989] Excessive memory consumption (30GB+) - Critical stability problem. [GitHub Link]

## Key PR Progress
1. [PR #37842] Resolves #37841 on OpenAI-compatible API streaming parsing (#37841) - Enables seamless integration with empty-string delta providers. [GitHub Link]
2. [PR #37822] Auto-recovers corrupted SQLite databases - Prevents initialization failures. [GitHub Link]
3. [PR #37839] Authorizes relative external path mutations - Fixes permission workflow limitations. [GitHub Link]
4. [PR #37833] Adds NIM DeepSeek V4 model compatibility - Expands LLMarestalkyChina生产nodel options. [GitHub Link]
5. [PR #37696] Implements Kimi family adaptive thinking - New reasoning pattern support. [GitHub Link]
6. [PR #37837] Initiates Director integration - Enables audit-trail coordination. [GitHub Link]
7. [PR #35654] Git diff Windows CR-LF fix - Addresses cross-platform compatibility. [GitHub Link]
8. [PR #37843] Rejects empty provider output - Corrects success boundary conditions. [GitHub Link]
9. [PR #37775] Aligns JS parity gaps - Improves plugin development experience. [GitHub Link]
10. [PR #37828] Extracts Util package - Major architecture refactor. [GitHub Link]

## Feature Request Trends
1. WebUI provider implementation (15 comments) - Top requested integration
2. Task list/UI enhancements (8 issues) - Most frequent usability requests
3. Memory/performance optimizations (6 reports) - System stability concerns
4. Security permission modeling (4 issues) - Control granularity requests
5. Cross-provider API standardization (3 proposals) - Inter-ecosystem demands
6. Audit/trail capabilities (2 submissions) - Emerging enterprise needs
7. Language support requests (GDScript, GDscript) - Nische development needs
8. Context window management (multiple issues) - LLM infrastructure needs
9. Session recovery mechanisms (2 reports) - Workflow reliability needs
10. SSH/VSCode integration (1 proposal) - CI/CD workflow needs

## Developer Pain Points
1. Database corruptions causing initialization failures (multiple threads)
2. Token management inconsistencies across LLMs causing unrecoverable states
3. Context length reporting discrepancies leading to infinite loops
4. Runtime permission bypass vulnerabilities in analysis agents
5. Memory consumption edge cases causing OOM conditions
6. Inconsistent error handling in provider APIs leading to failed pipelines
7. Session state persistence limitations across workspace environments
8. CLI interaction glitches with piped input streams
9. Compatibility gaps in meta-programming constructs
10. Installation path restrictions across OS environments


</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

---

# Pi Community Digest - 2026-07-20

## Today's Highlights  
Recent updates address critical performance issues, including high CPU usage during large file edits and unbounded memory growth in long-running sessions. New provider integrations for Upstage Solar LLMs and OpenCode Go expand model compatibility. Several bug fixes target edge cases like terminal scroll glitches and scoped model ID parsing.

---

## Releases  
No new releases in the past 24 hours.

---

## Hot Issues  
1. **#5023** ([Closed]) Terminal scrolls to beginning/end unexpectedly  
   - **Why it matters**: Random terminal jumps disrupt workflow during model operations.  
   - **Community reaction**: 9 comments, no upvotes yet.  

2. **#6210** ([Open]) Scoped model IDs with brackets fail to resolve  
   - **Why it matters**: Breaks compatibility with model identifiers containing `[` or `]` (e.g., quantized models).  
   - **Community reaction**: 8 comments, under review.  

3. **#6792** ([Closed]) High CPU usage during 500+ line file edits  
   - **Why it matters**: Performance bottleneck for large-scale editing tasks.  
   - **Community reaction**: 7 comments, linked CPU profile data.  

4. **#1871** ([Closed]) Misleading API key error during parallel startup  
   - **Why it matters**: Lock contention in parallel processes triggers false auth errors.  
   - **Community reaction**: 6 comments, affects `pi-subagents` users.  

5. **#6774** ([Closed]) Slow external editor launch in crowded `/tmp`  
   - **Why it matters**: Temp directory clutter degrades editor responsiveness.  
   - **Community reaction**: 5 comments, proposes `mkdtemp` isolation.  

6. **#6675** ([Open]) `pi update --self` fails after transient network errors  
   - **Why it matters**: Single network hiccup blocks critical updates.  
   - **Community reaction**: 5 comments, requires retry logic.  

7. **#5341** ([Closed]) Port coding-agent for remote SSH containers  
   - **Why it matters**: Enables remote execution of Pi sessions over SSH.  
   - **Community reaction**: 5 comments, long-standing feature request.  

8. **#3605** ([Closed]) Hook into raw AI response streams for extensions  
   - **Why it matters**: Enables custom progress indicators for local models.  
   - **Community reaction**: 4 comments, extension developer demand.  

9. **#6768** ([Closed]) Copilot Enterprise compaction errors  
   - **Why it matters**: Enterprise users face 421/400 errors during context management.  
   - **Community reaction**: 4 comments, 2 upvotes.  

10. **#6305** ([Closed]) Auto-discover local model servers  
    - **Why it matters**: Simplifies onboarding for local LLM setups (e.g., llama.cpp).  
    - **Community reaction**: 4 comments, targets new users.  

---

## Key PR Progress  
1. **#6828** ([Closed]) Support OpenCode Go Responses API  
   - Adds provider registration for OpenCode Zen Go models.  
   - URL: [PR #6828](https://github.com/earendil-works/pi/pull/6828)  

2. **#6840** ([Closed]) Shared `contentText` utility  
   - Refactors text rendering logic for reuse across packages.  
   - URL: [PR #6840](https://github.com/earendil-works/pi/pull/6840)  

3. **#6834** ([Closed]) UUIDv7 alignment for Codex provider  
   - Standardizes session ID generation using UUIDv7.  
   - URL: [PR #6834](https://github.com/earendil-works/pi/pull/6834)  

4. **#6837** ([Closed]) GPT-5.6 Codex context window fix  
   - Aligns context size (272K) with OpenAI’s official client.  
   - URL: [PR #6837](https://github.com/earendil-works/pi/pull/6837)  

5. **#6824/6823** ([Closed]) Upstage Solar LLM provider  
   - Adds `solar-mini` and `solar-pro2` models with cost/token specs.  
   - URL: [PR #6824](https://github.com/earendil-works/pi/pull/6824)  

6. **#836** ([Closed]) ACP mode for editor integrations  
   - Enables Pi to work with Zed and JetBrains IDEs via `--mode acp`.  
   - URL: [PR #836](https://github.com/earendil-works/pi/pull/836)  

7. **#6775** ([Open]) Retry logic for compaction failures  
   - Adds resilience to transient network issues during context compression.  
   - URL: [PR #6775](https://github.com/earendil-works/pi/pull/6775)  

8. **#6818** ([Closed]) Guard against undefined `usage` in context calculations  
   - Prevents crashes when providers omit usage data (e.g., DeepSeek V4).  
   - URL: [PR #6818](https://github.com/earendil-works/pi/pull/6818)  

9. **#6823** ([Closed]) Duplicate Upstage provider addition (merge conflict resolution)  
   - Resolves overlapping PRs for Solar LLM provider.  
   - URL: [PR #6823](https://github.com/earendil-works/pi/pull/6823)  

10. **#6828** ([Closed]) OpenCode Go provider type declarations  
    - Ensures type compatibility for OpenAI SDK mappings.  
    - URL: [PR #6828](https://github.com/earendil-works/pi/pull/6828)  

---

## Feature Request Trends  
1. **Remote execution**: SSH container support for distributed workflows.  
2. **Local model integration**: Auto-discovery of LAN-based model servers.  
3. **Error resilience**: Retry mechanisms for transient failures (network/API).  
4. **Extensibility**: Hooks for extensions to access raw AI responses and batch tool results.  
5. **Performance**: Memory optimization for long sessions and large file handling.  

---

## Developer Pain Points  
1. **Terminal instability**: Random scrolling and unresponsive UI during model operations.  
2. **Model configuration**: Scoped model ID parsing fails for bracketed identifiers.  
3. **Resource exhaustion**: High CPU usage and memory leaks degrade performance.  
4. **Startup errors**: Misleading auth/API key messages during parallel process launches.  
5. **Tool reliability**: Orphaned tool results and compaction failures brick sessions.  
6. **Editor latency**: Slow external editor launches in crowded temp directories.  

--- 

*Generated from data via [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-20

## 1. Today's Highlights
Qwen Code shipped preview build **v0.20.1-preview.7215** with an autofix label-driven takeover improvement, while the stable **v0.20.0** added bounded daemon log rotation and other CLI features. The community is actively triaging subagent/model-switching bugs (P1) and pushing Web Search, Channels management, and daemon stability PRs. Release automation hit a snag with a failed nightly publish (issue #7263), underscoring CI maturity work still in progress.

## 2. Releases
- **v0.20.1-preview.7215** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1-preview.7215)): `feat(autofix)`: label-driven takeover and release; fixed forced-dispatch green no-op (PR #7165 by @wenshao).
- **v0.20.0** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0)): Highlights include `feat(cli)`: bounded daemon log rotation (#6969 by @doudouOUC); no known breaking changes.
- ⚠️ **Nightly publish failed**: `v0.20.0-nightly.20260720.0c271659d` release workflow failed on `publish` job ([#7263](https://github.com/QwenLM/qwen-code/issues/7263)).

## 3. Hot Issues (10 Noteworthy)
1. **#7156** [P1, OPEN] Subagent mutates main session model — context overflow recurrence after #7119. Critical correctness bug in session/model isolation. [link](https://github.com/QwenLM/qwen-code/issues/7156)
2. **#7139** [P1, OPEN] Windows `qwen serve` Docker sandbox passes invalid workspace cwd to ACP shell tools (`chdir failed`). Blocks Windows self-hosted users. [link](https://github.com/QwenLM/qwen-code/issues/7139)
3. **#7205** [P0, OPEN] `/goal` evaluator accepts terminal verdicts with missing transcript evidence; goal clears prematurely. Reliability of goal automation. [link](https://github.com/QwenLM/qwen-code/issues/7205)
4. **#7242** [OPEN] `updateSubagent` can modify extension-provided (supposedly read-only) agents. Security/integrity of extensions. [link](https://github.com/QwenLM/qwen-code/issues/7242)
5. **#7238** [OPEN] `RestSseTransport` leaks SSE subscribers → daemon unusable (HTTP 429). Daemon resource leak at scale. [link](https://github.com/QwenLM/qwen-code/issues/7238)
6. **#7222** [OPEN] Background agent completion leaks into final reply in Channel sessions. Output correctness for async automation. [link](https://github.com/QwenLM/qwen-code/issues/7222)
7. **#7147** [OPEN] MCP server never gets tool/resource listing (Fastmail MCP times out). Interop with external MCP servers. [link](https://github.com/QwenLM/qwen-code/issues/7147)
8. **#7254** [OPEN] Main agent keeps thinking while waiting on sub-agent, starving it (concurrency=1). Efficiency of local multi-agent. [link](https://github.com/QwenLM/qwen-code/issues/7254)
9. **#7264** [OPEN] Cold-start follow-ups: 17.24 MiB eager import closure in ACP child. Performance follow-up to #4748. [link](https://github.com/QwenLM/qwen-code/issues/7264)
10. **#7198** [CLOSED] Add `qwen3.8-max-preview` to built-in model list (Bailian Token Plan). Rapid model onboarding. [link](https://github.com/QwenLM/qwen-code/issues/7198)

## 4. Key PR Progress (10 Important)
1. **#7215** `feat(core)`: opt-in built-in `web_search` via DashScope Responses API (resolves #3841/#4801). [link](https://github.com/QwenLM/qwen-code/pull/7215)
2. **#7262** `feat(daemon)`: restore worktree isolation on session load/resume after restart. [link](https://github.com/QwenLM/qwen-code/pull/7262)
3. **#7268** `feat(serve)`: hot-reload workspace trust changes without daemon restart. [link](https://github.com/QwenLM/qwen-code/pull/7268)
4. **#7237** `fix(core)`: fence concurrent ACP session writers (P0a incident fix). [link](https://github.com/QwenLM/qwen-code/pull/7237)
5. **#7248** `fix(core)`: enforce Plan mode entry boundary in multi-tool batches. [link](https://github.com/QwenLM/qwen-code/pull/7248)
6. **#7239** `fix(core)`: estimate `reasoning_tokens` when provider omits details (llama.cpp stats fix). [link](https://github.com/QwenLM/qwen-code/pull/7239)
7. **#7257** `fix(sdk)`: abort SSE request on iterator exit to release daemon subscriber (fixes #7238). [link](https://github.com/QwenLM/qwen-code/pull/7257)
8. **#7256** `fix(core)`: strip Qwen-internal daemon secrets from agent-spawned child env (fixes #6601). [link](https://github.com/QwenLM/qwen-code/pull/7256)
9. **#7266** `feat(channels)`: GitHub/GitLab/Gitea polling adapters + cursor fix. [link](https://github.com/QwenLM/qwen-code/pull/7266)
10. **#7267** `feat(web-shell)`: support custom slash command actions for embedders. [link](https://github.com/QwenLM/qwen-code/pull/7267)

## 5. Feature Request Trends
- **Native Web Search**: multiple issues/PRs (#3841, #4801, #7215) converge on a built-in `web_search` tool backed by DashScope.
- **Subagent Observability & Control**: real-time visibility, intervention, and efficient scheduling (#6569, #7254, #7242).
- **Channels / Background Automation**: management UI, polling adapters, memory recall eval (#7209, #7266, #7216).
- **Daemon & ACP Hardening**: configurable timeouts, hot-reload trust, worktree isolation, SSE leak fixes (#7244, #7268, #7262).
- **Model & Auth UX**: built-in newer models (#7198), regional token-plan selection (#7252).

## 6. Developer Pain Points
- **Subagent / Session Isolation Bugs**: model mutation (#7156), extension agent modification (#7242), main-agent starvation (#7254) show multi-agent logic is fragile.
- **Daemon Stability**: SSE subscriber leaks (#7238), secret leakage (#7256), cold-start bloat (#7264) hinder reliable long-running use.
- **Platform Gaps**: Windows sandbox cwd errors (#7139), MCP listing timeouts (#7147), missing thinking-token stats on local servers (#7236).
- **CI / Release Reliability**: nightly publish failure (#7263) and recurring main-CI E2E flakes (#7260) slow delivery confidence.
- **Plan/Goal Mode Edge Cases**: plan leakage (#6237), `/goal` loop blocking input (#7181), premature goal clear (#7205) reveal UX automation rough edges.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-20

*Source: github.com/Hmbown/DeepSeek-TUI (tracked as CodeWhale)*

## 1. Today's Highlights
No new releases were published in the last 24h, but the project saw heavy maintenance activity with 8 issues updated and 40 PRs touched. Key fixes landed for Windows PowerShell safety, Full Access git-push prompts, and K3 route contracts, while new issues surfaced around TUI scroll limits and sub-agent delegation behavior. The team also advanced the "Blue Stage" UI grammar and token-cost reduction queue (v0.9.1).

## 2. Releases
None in the last 24 hours.

## 3. Hot Issues
1. **#4042** [CLOSED] Environment-level tool sandboxing for sub-agents — confirms `--disallowed-tools` works; runtime enforcement across sessions/Fleet/MCP. [link](https://github.com/Hmbown/CodeWhale/issues/4042)  
   *Why:* Security/reliability baseline for sub-agents; closed after 16 comments.
2. **#1425** [OPEN] Session hang on large-text sub-agent processing — 3M-char novel split into 10 agents, `agent_wait` timeout freezes session. [link](https://github.com/Hmbown/CodeWhale/issues/1425)  
   *Why:* Exposes scalability limits in multi-agent orchestration.
3. **#4594** [OPEN] v0.9.1 top bar/sidebar can't scroll to bottom (10-item To-do). [link](https://github.com/Hmbown/CodeWhale/issues/4594)  
   *Why:* Core TUI UX regression; trivial repro.
4. **#4568** [OPEN] Slash commands (`/xxx`) sluggish vs prior version on Windows. [link](https://github.com/Hmbown/CodeWhale/issues/4568)  
   *Why:* Performance regression reported by user; needs bisect.
5. **#4564** [OPEN] Windows `exec --auto`: `--model`/`--toolsets` consumed as one arg. [link](https://github.com/Hmbown/CodeWhale/issues/4564)  
   *Why:* CLI parsing bug on Windows npm global install.
6. **#4595** [CLOSED] Full Access prompts on feature-branch git push. [link](https://github.com/Hmbown/CodeWhale/issues/4595)  
   *Why:* Fixed same day (#4596); publish-gate misclassification.
7. **#4599** [OPEN] Per-model facts scattered (context window, max output) — need single source of truth. [link](https://github.com/Hmbown/CodeWhale/issues/4599)  
   *Why:* Maintenance/documentation debt across crate/modules.
8. **#4598** [OPEN] Operate mode under-delegates; policy says delegation "not mandatory". [link](https://github.com/Hmbown/CodeWhale/issues/4598)  
   *Why:* Mode-design gap vs user expectation of aggressive sub-agent use.

## 4. Key PR Progress
1. **#4602** [OPEN] `CODEWHALE_*` env precedence + identity cleanup. [link](https://github.com/Hmbown/CodeWhale/pull/4602)  
2. **#4601** [OPEN] Composer real-editor contract (selection/undo). [link](https://github.com/Hmbown/CodeWhale/pull/4601)  
3. **#4600** [OPEN] Auto-fork read-only children onto parent prefix (token save). [link](https://github.com/Hmbown/CodeWhale/pull/4600)  
4. **#4597** [CLOSED] Compress Agent mode prompt −18% words. [link](https://github.com/Hmbown/CodeWhale/pull/4597)  
5. **#4593** [CLOSED] Harden PowerShell invocation for Windows. [link](https://github.com/Hmbown/CodeWhale/pull/4593)  
6. **#4596** [CLOSED] Full Access truly full for publish-like shell. [link](https://github.com/Hmbown/CodeWhale/pull/4596)  
7. **#4592** [CLOSED] Align K3 routes with verified per-route contract. [link](https://github.com/Hmbown/CodeWhale/pull/4592)  
8. **#4591** [CLOSED] Advertise Alt+V for details, not bare `v`. [link](https://github.com/Hmbown/CodeWhale/pull/4591)  
9. **#4590** [CLOSED] Localize session/route picker surfaces. [link](https://github.com/Hmbown/CodeWhale/pull/4590)  
10. **#4588** [CLOSED] MCP live tool pool hot-reload. [link](https://github.com/Hmbown/CodeWhale/pull/4588)

## 5. Feature Request Trends
- Unified environment/tool sandboxing for sub-agents and Fleet (security).
- Token-cost efficiency: prefix forking, prompt compression, read-call coalescing.
- UI/UX polish: Blue Stage grammar, scroll fixes, localized surfaces, first-run discovery.
- MCP ergonomics: hot-reload, visibility under trust modes, deferred-load bypass.
- Model/route fact centralization and provider-native search/citation.

## 6. Developer Pain Points
- **Windows CLI/Shell quirks**: arg parsing (#4564), PowerShell safety, slash lag (#4568).
- **TUI regressions**: list scroll (#4594), command latency.
- **Sub-agent scaling**: timeouts/hangs on large jobs (#1425), weak Operate delegation (#4598).
- **Config drift**: per-model constants duplicated (#4599); approval gates over-trigger (#4595).
- **Docs/UX clarity**: wrong key hints (bare `v`), scattered facts increase contrib friction.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*