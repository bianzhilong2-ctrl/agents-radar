# AI CLI Tools Community Digest 2026-06-19

> Generated: 2026-06-19 03:00 UTC | Tools covered: 9

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

**Cross‑Tool Comparison Report – AI Developer‑CLI Ecosystem (2026‑06‑19)**  

| Tool | Issues (opened today) | PRs (merged today) | Latest Release |
|------|------------------------|--------------------|----------------|
| Claude Code | 10 high‑priority / moderate issues (e.g. `#36151`, `#53915`, `#26302`) | 6 PRs closed/merged (e.g. `#69470`, `#23972`, `#68673`) | **v2.1.183** (GitHub) – safety‑locks for destructive Git ops |
| OpenAI Codex | 10 hot issues (e.g. `#20161`, `#25719`, `#15777`) | 9 PRs resolved/merged (e.g. `#28683`, `#29026`) | **rust‑v0.141.0** (stable Rust); **0.142.0‑alpha.3** (Noise‑relay RHS) |
| Gemini CLI | 10 epic‑level bugs/feature requests (e.g. `#24353`, `#21409`, `#23325`) | 10 PRs merged (e.g. `#27664`, `#27848`, `#28000`) | **0.48.0‑preview.0** (no new tag) |
| GitHub Copilot CLI | 3 key issues (symbolic‑link, perf, Windows) | 1 PR in progress (`#3847`) | no new release |
| Kimi Code | 1 critical proxy bug + 9 feature requests | 1 PR merged (`#2461`) | no new release |
| OpenCode | 10 traffic‑heavy issues (e.g. `#27167`, `#16610`, `#27589`) | 10 PRs merged (e.g. `#32930`, `#32743`, `#32624`) | no new release |
| Pi | 10 top issues (async autocomplete, multi‑session, compaction) | 10 PRs merged (e.g. `#5874`, `#5846`, `#5884`) | **v0.79.7** |
| Qwen Code | 10+ mixed‑status issues (security, MCP, OOM) | 10 PRs merged (e.g. `#5384`, `#5378`, `#5372`) | no new release |

---

### 1. Ecosystem Overview
The AI‑developer‑CLI market is in a rapid‑growth phase dominated by a handful of open‑source projects that blend language‑model orchestration, IDE integration, and custom tooling. All major projects (Claude Code, Codex, Gemini CLI, OpenCode, Pi, Qwen Code) have seeding teams and active contributor bases, but none yet reach a fully production‑grade maturity; most are still maturing core reliability and extending feature parity across platforms.

---

### 2. Shared Feature Directions  
| Need | Tools | Comments |
|------|-------|----------|
| **IDE/Editor Plugins** | Claude Code, Gemini CLI, Kimi Code, OpenCode | JetBrains, VS Code, and VS Code extension integration all illustrate strong demand for native plugin ecosystems. |
| **Multi‑Account / Profile Switching** | Claude Code, OpenCode, Gemini CLI | Mobile app account juggling, desktop profile multiplexing, and MCP multi‑profile auth are trending. |
| **Session Persistence & Goals** | OpenCode, Gemini CLI, Claude Code | Persistent `<goal>` contexts and auto‑resumed chat/history are requested across the board. |
| **Rate‑Limiting & Throttling** | Claude Code, Codex, Qwen Code | Users repeatedly flag aggressive backend caps, impacting workflow continuity. |
| **Cache / Token Analytics** | Qwen Code, Codex, Pi | Daily token usage, cache‑miss prevalence, and plan‑aware cost controls feature prominently. |
| **Multi‑Model Selection** | OpenCode, Codex, Gemini CLI | Automatic model picking based on task type or cost arises in several communities. |
| **ACL / Sandbox Hardening** | Codex, Qwen Code, Kimi Code | ACL corruption, sandbox escape bugs, and path‑validation gaps alarm core contributors. |
| **Cross‑Platform UI Stability** | OpenCode, Pi, Gemini CLI | Windows, macOS, and WSL/WSL2 quirks (UI lag, WSL clipboard, Wayland hangs) are common pain points. |
| **Auth / MCP Connector Reliability** | Claude Code, Gemini CLI, Kimi Code, Qwen Code | OAuth “needs auth” loops, missing token stores, and stale MCP state are recurring. |

---

### 3. Differentiation Analysis  

| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|--------------------|
| **Claude Code** | Safety‑first Git operations, high‑unit‑test coverage for CLI agents | Corporate devs & ops who need destructive‑git safeguards | Explicit policy enforcement in auto mode, blocking destructive commands, tighter Git hook integration |
| **Codex** | Remote, encrypted executors, Noise‑relay security | DevOps & security teams wanting isolated agent runtimes | Rust‑based agent runtime, authenticated Noise relays, extensive telemetry |
| **Gemini CLI** | Agent autonomy, sub‑agent recovery, AST‑aware tooling | Power‑users and research scientists building custom agent workflows | Plugin‑style slash‑commands, built‑in sub‑agent orchestration, TypeScript/Node ecosystem |
| **OpenCode** | Native session goals, multi‑profile auth, TUI polish | Small teams and hobbyists preferring a lightweight terminal agent | Go‑based, OCI‑compatible, TUI via `tview`/`curses`, built‑in inotify watchers |
| **Pi** | Multi‑session TUI, auto‑theme, OpenRouter integration | Full‑stack devs needing interactive sessions on the terminal | Node.js & `tsx` stack, TUI via `ink`, dynamic theme rendering, plugin hooks |
| **Qwen Code** | MCP tooling, robust search, token analytics | Enterprises building on Qwen models with strict security policies | Rust+Python hybrid, detailed MCP protocol handling, configurable adapters |
| **Kimi Code** | Proxy‑aware network, VS Code extension support | Corporate networks with strict proxy settings | Go + aiohttp, transparent proxy detection, VS Code extension plumbing |
| **GitHub Copilot CLI** | Lightweight review menu, symbolic link handling | GitHub‑centric teams needing CLI‑only collaboration | Rust‑based, integrating GitHub GraphQL & Octokit APIs |

---

### 4. Community Momentum & Maturity  
| Tool | Community Activity Score (issues + PRs) | Maturity Indicator |
|------|----------------------------------------|--------------------|
| **Claude Code** | 16 | High – owns most governing infra (Git safety, MCP). |
| **Codex** | 19 | Very high – extensive Rust releases, active multitenancy bugfixes. |
| **Gemini CLI** | 20 | Growing – many EPIC pulls, sub‑agent stability work. |
| **OpenCode** | 20 | Very solid – in‑depth TUI/UI changes, large PR count. |
| **Pi** | 20 | Medium‑high – steady PR flow, frequent release updates. |
| **Qwen Code** | 12 | Moderate – focused on security patches, fewer feature PRs. |
| **Kimi Code** | 6 | Early stage – small issue set, single major PR. |
| **GitHub Copilot CLI** | 4 | Low – limited issues, under active maintenance. |

**Rapid iterators**: Codex, Gemini CLI, OpenCode, Pi.  
**Stable leaders**: Claude Code (policy focus), Kimi Code (stable network support).  
**Emerging**: Qwen Code (security), GitHub Copilot CLI (maintenance‑only).

---

### 5. Trend Signals & Developer Takeaways  
1. **Safety & Governance** – All projects are adding explicit safeguards (Git safety, ACL hardening, sandbox boundaries). Developers should evaluate built‑in policies before integrating.  
2. **IDE Flux** – JetBrains, VS Code, and VS Code extensions are high‑priority for each community. If your workflow relies on a specific IDE, prioritize tooling with native plugin support.  
3. **Multi‑Model & Cost Visibility** – Automatic model selection and token‑budget dashboards are rising demands, especially in production environments.  
4. **Cross‑Platform Resilience** – Windows, macOS, and WSL consistently surface UI/FS bugs, signaling that cross‑platform tests are essential before adoption.  
5. **MCP & OAuth Consistency** – Persistent “needs auth” loops and stale token states dominate issue lists; ensure your environment configures MCP connectors once clients have stable PoP.  
6. **Session Omniscience** – Persistent goals, per‑session histories, and background “multi‑session” capability are the next frontier for agent‑heavy workflows.  

**Bottom line for decision‑makers**:  
- **Choose Claude Code** if you need rigorous destructive‑Git guards and an established policy framework.  
- **Opt for Codex or Gemini CLI** when remote, encrypted execution or sub‑agent orchestration is critical.  
- **Leverage OpenCode or Pi** if you prefer a terminal‑first, lightweight experience with emergent multi‑session support.  
- **Consider Qwen Code** if you plan to run Qwen models in a tightly‑controlled MCP environment, especially under security‑heavy workloads.  
- **Kimi Code** is suitable for environments that must honor corporate proxy settings; otherwise, its small issue set suggests early‑stage readiness.  

Maintaining an eye on the shared feature pool—IDE plugins, multi‑profile auth, session goals—will allow teams to adopt the most feature‑complete tool for their specific context while staying ahead of emerging stability and governance needs.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*As of June 19, 2026*

## 1. **Top Skills Ranking**

**1. [document-typography](https://github.com/anthropics/skills/pull/514)**
- **Functionality**: Typographic quality control for AI-generated documents, preventing orphan word wrap, widow paragraphs, and numbering misalignment
- **Discussion Focus**: Addresses universal document quality issues across AI generations; highly relevant given AI's growing document generation capabilities
- **Status**: Open (March 13, 2026)

**2. [odt](https://github.com/anthropics/skills/pull/486)**
- **Functionality**: OpenDocument Format creation, template filling, and HTML conversion via LibreOffice ecosystem tools
- **Discussion Focus**: Supports open-source document standards; bridges between modern AI and enterprise document workflows
- **Status**: Open (April 14, 2026)

**3. [testing-patterns](https://github.com/anthropics/skills/pull/723)**
- **Functionality**: Comprehensive testing skills covering unit testing philosophy, React component testing, and broader QA methodologies
- **Discussion Focus**: Addresses the critical need for AI-assisted testing frameworks in software development
- **Status**: Open (April 21, 2026)

**4. [servicenow](https://github.com/anthropics/skills/pull/568)**
- **Functionality**: Full ServiceNow platform skill covering ITSM, ITOM, SecOps, and enterprise workflows
- **Discussion Focus**: Enterprise platform integration; bridges AI with enterprise IT infrastructure
- **Status**: Open (April 23, 2026)

**5. [skill-creator automation fixes](https://github.com/anthropics/skills/pull/1298)**
- **Functionality**: Critical fixes for the skill-creator evaluation system that's currently non-functional
- **Discussion Focus**: Core infrastructure problem affecting ALL skill optimization loops
- **Status**: Open (June 11, 2026)

## 2. **Community Demand Trends**

**Enterprise Workflow Automation**: Multiple PRs focus on enterprise platforms (ServiceNow, SAP-RPT-1-OSS), indicating strong demand for AI skills in business workflows.

**Quality Assurance & Documentation**: Skills like testing-patterns, document-typography, and system documentation suggest community prioritizes production-ready, well-tested AI capabilities.

**Infrastructure & Platform Fixes**: A significant number of issues and PRs (skill-creator, Windows compatibility, YAML parsing) indicate the community is frustrated with the current toolchain's reliability.

**Code Quality & Security**: The skill-quality-analyzer and security-analyzer skills, along with multiple fixes for YAML parsing and validation, show demand for better skill standards.

## 3. **High-Potential Pending Skills**

**Critical Infrastructure Ready**: The **skill-creator fixes** (PR #1298, #1099, #1050, #361) are likely to merge soon given their systemic importance - the evaluation system currently reports 0% recall across all skills, making optimization impossible.

**Enterprise-Ready Skills**: Both **ServiceNow** and **SAP-RPT-1-OSS** skills appear mature and ready for integration, addressing major enterprise automation gaps.

**Documentation & System Skills**: The **CONTRIBUTING.md** (#509) and comprehensive documentation efforts suggest the community is professionalizing, enabling more reliable skill development.

## 4. **Skills Ecosystem Insight**

The community is converging on **enterprise-grade, production-ready AI skills** rather than hobbyist tools—evidenced by the focus on platform integrations, quality assurance patterns, systematic documentation, and infrastructure fixes that enable reliable skill creation and evaluation.

**Key Takeaway**: Skills development has matured from basic capabilities to enterprise workflow automation, but is currently bottlenecked by a broken evaluation system that prevents any skill from improving its effectiveness through testing and optimization loops.

---
*Community Health Note*: While raw PR activity suggests high engagement, underlying infrastructure issues (especially the skill-creator evaluation failures) are preventing meaningful progress across the entire ecosystem. The most impactful contributions currently target fixing these foundational problems.

---


**Claude Code Community Digest – 2026-06-19**

---

### **Today's Highlights**  
The latest release, v2.1.183, introduces critical safeguards for destructive Git commands in auto mode, addressing potential data integrity risks during automated workflows. Meanwhile, the community continues to report performance regressions, rate limiting issues, and MCP-related authentication errors, signaling ongoing infrastructure and usability challenges. Feature requests for JetBrains IDE support and multi-account mobile usage remain popular, highlighting demand for broader tool and platform integration.

---

### **Releases**  
**v2.1.183** ([GitHub](https://github.com/anthropics/claude-code/releases/tag/v2.1.183))  
- **Key change**: Destructive Git commands (`git reset --hard`, `git clean -fd`, etc.) are now blocked in auto mode unless local work discard is explicitly requested; `git commit --amend` is restricted to commits made by the agent in the current session. This mitigates unintended workspace modifications during unattended operation.

---

### **Hot Issues**  

1. **#36151 – Multi-account switching in Claude Mobile [FEATURE]**  
   *(351 👍 | 96 comments)*  
   - Request for seamless switching between Anthropic accounts in the Claude Mobile app without requiring a shared email. Indicates strong demand for flexible account management across devices.  
   [Link](https://github.com/anthropics/claude-code/issues/36151)

2. **#53915 – API Rate Limiting During Normal Usage [BUG]**  
   *(19 👍 | 57 comments)*  
   - Users report frequent rate limiting errors (`Server is temporarily limiting requests`) even under normal usage conditions. Suggests backend capacity constraints or aggressive throttling policies affecting usability.  
   [Link](https://github.com/anthropics/claude-code/issues/53915)

3. **#26302 – UI Lag & Mouse Stutter in Claude Desktop on Windows [BUG]**  
   *(37 👍 | 43 comments)*  
   - Performance regression in v1.1.3189 causes severe UI lag and input latency on Windows. High priority for desktop usability.  
   [Link](https://github.com/anthropics/claude-code/issues/26302)

4. **#47166 – JetBrains IDE Plugin for Claude AI [FEATURE]**  
   *(1 👍 | 25 comments)*  
   - Call for native integration with JetBrains IDEs (e.g., IntelliJ, PyCharm). Reflects growing adoption of these platforms among developers.  
   [Link](https://github.com/anthropics/claude-code/issues/47166)

5. **#59248 – Silent Transcript Deletion Without Recovery [BUG, DATA-LOSS]**  
   *(6 👍 | 16 comments)*  
   - Session transcripts older than the current workspace are silently deleted, with no warning or recovery option. Raises concerns over data persistence and session continuity.  
   [Link](https://github.com/anthropics/claude-code/issues/59248)

6. **#68721 – Regression: TeamCreate/TeamDelete Tools Missing in v2.1.178 [BUG]**  
   *(5 👍 | 15 comments)*  
   - Native team-management CLI tools disappeared after upgrade, breaking workflows that depend on programmatic team operations. Likely regression needing urgent attention.  
   [Link](https://github.com/anthropics/claude-code/issues/68721)

7. **#47098 – Cache Misses on New Sessions Despite Short Messages [BUG]**  
   *(1 👍 | 12 comments)*  
   - Users experience repeated cache misses (6,505+ tokens lost) even on fresh sessions with minimal prompts, suggesting inefficiency in caching logic.  
   [Link](https://github.com/anthropics/claude-code/issues/47098)

8. **#69324 – Built-in MCP claude_design Injects 401 Error on Auth Failure [BUG]**  
   *(0 👍 | 2 comments)*  
   - The `claude_design` MCP server is auto-injected and throws HTTP 401 errors even when the frontend-design plugin is disabled. Indicates lack of fallback handling or conditional injection logic.  
   [Link](https://github.com/anthropics/claude-code/issues/69324)

9. **#68820 – Severe Slowness in Opus 4.8 Model Across All Effort Levels [BUG]**  
   *(1 👍 | 3 comments)*  
   - Opus 4.8 model exhibits significant latency across all settings, impacting responsiveness and efficiency. Users seek clarification or rollback guidance.  
   [Link](https://github.com/anthropics/claude-code/issues/68820)

10. **#69475 – Gmail MCP Connector Stuck on ‘Needs Auth’ After OAuth Success [BUG]**  
   *(0 👍 | 1 comment)*  
   - In VS Code, the Gmail MCP connector fails to recognize successful OAuth completion, blocking access. Highlights inconsistency in MCP auth state synchronization.  
   [Link](https://github.com/anthropics/claude-code/issues/69475)

---

### **Key PR Progress**  

- **PR #69470 – Fix Lock-Stale Issues Workflow** *(Closed)*  
  Addresses daily failures in GitHub Actions due to deprecated offset-based pagination. Now uses the search API for better reliability.  
  [Link](https://github.com/anthropics/claude-code/pull/69470)

- **PR #23972 – Python 3.8 Compatibility in Hookify Plugin**  
  Adds support for Python 3.8+ in plugin hooks, improving compatibility with older environments like Ubuntu 20.04.  
  [Link](https://github.com/anthropics/claude-code/pull/23972)

- **PR #68673 – Pagination Break Fix in Scripts**  
  Ensures correct handling of partial result sets in API scripts, preventing missed data during iteration.  
  [Link](https://github.com/anthropics/claude-code/pull/68673)

- **PR #45553 – Resolve Duplicate IPs**  
  Fixes network configuration issues arising from duplicate IP assignments in internal services.  
  [Link](https://github.com/anthropics/claude-code/pull/45553)

- **PR #41447 – Open Source Claude Code** *(Draft)*  
  Early-stage effort to fully open-source Claude Code components, pending legal and licensing review. Potential for community contributions and transparency.  
  [Link](https://github.com/anthropics/claude-code/pull/41447)

---

### **Feature Request Trends**  
From analyzed issues, trending feature demands include:  
- **IDE Integration**: Native plugins for JetBrains and enhanced VS Code support.  
- **Account Flexibility**: Multi-account switching on mobile apps and improved auth flows for MCP connectors.  
- **Accessibility & UX**: Text-to-speech capabilities, TUI improvements, and project sorting by activity.  
- **Session Persistence**: Better transcript retention and recovery mechanisms.  
- **Tooling Efficiency**: Cache optimization, agent monitoring tools, and reduced API cost impact.

---

### **Developer Pain Points**  
Recurring frustrations identified:  
- **Performance Regressions**: Especially on Windows and with newer models like Opus 4.8.  
- **Rate Limiting & Infrastructure Constraints**: Frequent throttling affects productivity.  
- **MCP Authentication Bugs**: Inconsistent OAuth state and forced injection of unused tools.  
- **Silent Data Loss/Errors**: Transcript cleanup without warning and failed `git commit --amend`.  
- **Tool Compatibility Gaps**: Bash syntax mismatches under zsh and missing CLI team tools.

--- 

Let me know if you’d like a diff summary or deeper analysis of any PR/issue.


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest**  
**2026-06-19**  

---

### **Today's Highlights**  
Codex 0.141.0 stable Rust release enhances security and cross-platform compatibility, while alpha 3 of 0.142.0 introduces Remote Executors via authenticated Noise relay channels. Development focuses on mitigating remote execution edge cases and improving issuer tooling.  

---

### **Releases**  
- **rust-v0.141.0**: Stabilizes `rust-url` remote execution, adds cross-platform working directory preservation.  
- **rust-v0.142.0-alpha.3**: Enables secure, encrypted Remote Executors with authenticated Noise relays.  

---

### **Hot Issues**  
1. **[#20161]** SSO login failures on new devices (201 ⬆, 125 👍): Brokenness during cross-device SSO prompts phone verification despite no phone number set.  
2. **[#25719]** macOS Desktop CPU/memory crash (33 ⬆, 40 👍): Codex Desktop hangs at 100% CPU/memory on macOS 15.5 arm64.  
3. **[#15777]** Windows ACL corruption (26 ⬆, 2 👍): Sandbox install breaks AppData permissions permanently.  
4. **[#13730]** Text/image copy-paste (11 ⬆, 4 👍): Word text pastes as images in Pro macOS builds.  
5. **[#16815]** WSL agent path errors (9 ⬆, 7 👍): Windows Agent fails with `deserialized without base path` on WSL.  
6. **[#28811]** Rate-limit reset confusion (4 ⬆, 3 👍): Public reset applied immediately, conflicting with announced banked resets.  
7. **[#28978]** Invalid input schema error (3 ⬆, 5 👍): Web UI fails new chat requests post-update.  
8. **[#28988]** Full Access permission prompt (8 ⬆, 5 👍): macOS Catalina+ continuously demands Full Access after updates.  
9. **[#28241]** Git ref breaks (7 ⬆, 1 👍): Post-upgrade Codex breaks git diff tools.  
10. **[#28997]** SQLite bloat (6 ⬆, 0 👍): Codex CLI `logs_2.sqlite-wal` grows to 100GB in session history.  

---

### **Key PR Progress**  
1. **[#28683]** Tracks environment snapshots during session start (MITM proxy mutual TLS upgrades).  
2. **[#29026]** Optimizes skill cache hits (avoids unnecessary filesystem scans).  
3. **[#29024]** Adds thread-scoped originator override for analytics (https://github.com/openai/codex/pull/29024).  
4. **[#29012]** Assigns IDs to compacted replacement history items (fixes metadata inconsistencies).  
5. **[#28936]** Isolate environment context per request vs. turn (critical for dynamic env deploys).  
6. **[#28787]** CodeMode transport-neutral sessions (enables multi-process plugin isolation).  
7. **[#29011]** New `clock.current_time` tool for UTC-bound reminders (enables time-sensitive ops).  
8. **[#28489]** Indexed web search mode (gated vs. live doc matching).  
9. **[#29028]** Redesigns realtime acknowledgments (promotes brevity in chat interactions).  

---

### **Feature Request Trends**  
1. **Cross-Platform CLI Consistency**: Demands unified terminal behavior across WSL/macos/Linux (#16815, #27267).  
2. **Remote Project Organization**: Requests thread/conversation reassignment between projects (#24519).  
3. **Sandbox Security**: Frequent requests to harden sandboxed command permissions (#15777, #28971).  
4. **Custom API Routing**: AWS Bedrock users seek `base_url` configuration (#28902).  
5. **Codex Pet Stability**: Multiple pet-icon focus/IME regressions reported (#27583, #28929).  

---

### **Developer Pain Points**  
- **Remote Execution Edge Cases**: Persistent issues with SSH/SOCKS tunneling, session timeouts, and path serialization.  
- **ACL/FSM Bugs**: Unexpected permission corruption post-updates (Windows/macOS DevImages).  
- **Token Rate-Limit Volatility**: Sudden API cost spikes erode user budgets unpredictably (#28879).  
- **Cross-App State Sync**: Missing thread/project persistence across device rotations (#28689).  

**All Issues/PRs linked to GitHub discussions for further context.**


</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Today's Highlights**  - The Gemini CLI community is focused on stabilising core behaviours (agent hangs, sub‑agent recovery, memory handling) while expanding capabilities such as AST‑aware code navigation and custom slash‑command support.  
- Recent releases include a new `gemini models` command and atomic token handling, and several high‑priority bug fixes address critical reliability problems.

**Releases**  
- No new versioned release in the last 24 h; the latest stable version remains 0.48.0‑preview.0 (see PR #27999).

**Hot Issues**  
1. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** – *Robust component‑level evaluations*: an EPIC adding 76 behavioural test cases; community expects tighter eval integration.  
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** – *Generalist agent hangs*: users report indefinite hangs when the agent defers to sub‑agents; a workaround is to disable sub‑agent use.  
3. **[#27325](https://github.com/google-gemini/gemini-cli/issues/27325)** – *Custom slash‑command support*: request to allow Antigravity CLI to load existing `commands/` folder without conversion to skills.  
4. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** – *Sub‑agent recovery masks MAX_TURNS interruption*: reports that a sub‑agent incorrectly reports “GOAL” success after hitting the turn limit.  
5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** – *Insufficient use of skills/sub‑agents*: users note the CLI rarely auto‑invokes custom skills unless explicitly instructed.  
6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** – *Deterministic redaction & reduced Auto Memory logging*: security‑focused request to avoid leaking secrets via memory transcripts.  
7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** – *Stop Auto Memory from retrying low‑signal sessions*: prevents endless retries of unread, low‑value transcripts.  
8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** – *Shell command “Waiting input” after completion*: commands finish but the CLI remains stuck awaiting user input.  
9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** – *Browser sub‑agent fails on Wayland*: Wayland display issues cause the browser agent to crash.  
10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** – *400 error with >128 tools*: CLI hits a hard limit on tool count, prompting a request for smarter tool scoping.

**Key PR Progress**  
1. **[#27664](https://github.com/google-gemini/gemini-cli/pull/27664)** – Atomic write of MCP OAuth tokens to avoid corruption on failure.  
2. **[#27678](https://github.com/google-gemini/gemini-cli/pull/27678)** – Hide `.gitignore`/`.geminiignore` entries from the initial session‑context tree.  
3. **[#27848](https://github.com/google-gemini/gemini-cli/pull/27848)** – New `gemini models` command that lists available Gemini models, context windows, and tiers (text & JSON).  
4. **[#27850](https://github.com/google-gemini/gemini-cli/pull/27850)** – Sniff MCP image MIME types to correct mismatched payload types (e.g., WebP → image/webp).  
5. **[#27845](https://github.com/google-gemini/gemini-cli/pull/27845)** – Prompt for folder trust before authentication, persisting the choice for the session.  
6. **[#28000](https://github.com/google-gemini/gemini-cli/pull/28000)** – Fix write_file corruption of Jupyter Notebook (`.ipynb`) and JSON files, preventing unparsable outputs.  
7. **[#27954](https://github.com/google-gemini/gemini-cli/pull/27954)** – Bulk bump of multiple OpenTelemetry dependencies to improve telemetry stability.  
8. **[#28024](https://github.com/google-gemini/gemini-cli/pull/28024)** – Update `@opentelemetry/core` to v2.8.0, bringing newer features and security fixes.  
9. **[#28023](https://github.com/google-gemini/gemini-cli/pull/28023)** – Upgrade `@modelcontextprotocol/sdk` to v1.26.0, enhancing MCP integration.  
10. **[#27970](https://github.com/google-gemini/gemini-cli/pull/27970)** – Bump `hono` from 4.12.18 to 4.12.26, updating router‑related utilities.

**Feature Request Trends**  
- **AST‑aware tooling**: Multiple issues (#22745, #22746, #22747) request deeper code‑base introspection (AST‑based file reads, searches, and grep) to improve agent precision and reduce token noise.  
- **Custom command ecosystem**: #27325 asks for native support of existing `commands/` files in Antigravity CLI, indicating strong demand for a plug‑in style command system.  
- **Agent autonomy & self‑awareness**: #21432 and #22093 highlight needs for better self‑knowledge (flags, hotkeys) and more permissive sub‑agent usage, suggesting a desire for richer, out‑of‑the‑box agent capabilities.  
- **Reliability & UX**: Issues such as #21409 (agent hangs) and #25166 (shell prompt hang) show that stability and responsive UI are top priorities.

**Developer Pain Points**  
- **Agent stability**: Repeated reports of the generalist agent hanging (#21409, #25166) and sub‑agent recovery mis‑reporting success (#22323) cause workflow interruptions.  
- **Memory & logging handling**: Auto Memory’s indiscriminate logging and retry logic (#26525, #26522) lead to unnecessary data exposure and performance overhead.  
- **Tool‑limit handling**: The 128‑tool cap (#24246) forces developers to manually prune tool sets, reducing flexibility.  
- **Cross‑platform & environment quirks**: Browser Wayland failures (#21983) and shell command hangs reveal platform‑specific bugs that impede reliable CLI use.  

*All links are to the official Gemini‑CLI repository on GitHub.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Today's Highlights: Recent challenges include handling symbolic link conflicts and performance bottlenecks, alongside persistent compatibility issues affecting multi-platform deployment.  

Releases: No new updates announced in the past week; ongoing maintenance remains the focus.  

Hot Issues:  
- Symbolic links not expanding (435): Blocked context navigation.  
- Performance inconsistencies (3299): API latency under load.  
- Windows compatibility glitches (3858): Mplsh usage complications.  

Key PR Progress: PR #3847 aims to implement revised review menu fallbacks, addressing documented compatibility gaps. Other efforts focus on scalability enhancements.  

Feature Request Trends: Requests for improved document link management precede, alongside demands for streamlined plugin interfaces. Users emphasize contextual awareness in scripts.  

Developer Pain Points: Frequent reports of scripted workflow breakdowns and troubleshooting ambiguities in complex tasks highlight the need for better tooling support.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑06‑19**

---

### 1. Today's Highlights- A critical proxy‑handling bug was identified that prevents `FetchURL` (and thus VS Code extensions) from reaching the internet when system proxies are active.  
- The latest PR (#2461) introduces automatic honoring of `HTTP_PROXY`/`HTTPS_PROXY` in `aiohttp` sessions, directly addressing the above issue.  
- Community feedback highlighted usability friction around MCP server and plugin onboarding.

---

### 2. Releases
- **No new releases in the past 24 h.**

---

### 3. Hot Issues (10‑spotlighted, only 3 opened in the last day)

| Issue | Link | Why It Matters | Community Reaction |
|-------|------|----------------|---------------------|
| #2455 – [Bug] FetchURL fails behind corporate proxies | https://github.com/MoonshotAI/kimi-cli/issues/2455 | `FetchURL` (and consequently VS Code extensions) cannot reach external services when `HTTP_PROXY`/`HTTPS_PROXY` are set, breaking workflows in restricted networks. | Reported by KuangYin‑Z; low up‑votes but high impact for users in blocked environments. |
| #2462 – [Bug] Windows + Git Bash: VS Code extension cannot extract bundled CLI | https://github.com/MoonshotAI/kimi-cli/issues/2462 | Extraction reliance on `tar` fails on Windows MSYS2 environments, causing installation stalls for developers using Git Bash. | Reported by yplgame; no reactions yet, but affects Windows developers relying on the bundled CLI. |
| #2460 – [Closed] Onboarding MCP servers/plugins/sub‑skills can be cumbersome | https://github.com/MoonshotAI/kimi-cli/issues/2460 | Users find the initial configuration workflow more complex than necessary, indicating a need for clearer guides or tooling. | Closed by PowerBeef; positive thanks for the product but signals a UX improvement opportunity. |

---

### 4. Key PR Progress (1 PR)

| PR | Link | Feature / Fix | Notes |
|----|------|---------------|-------|
| #2461 – fix(net): honour system proxy env vars in aiohttp sessions | https://github.com/MoonshotAI/kimi-cli/pull/2461 | Automatically injects `HTTP_PROXY`/`HTTPS_PROXY` into `aiohttp` requests, resolving the proxy‑bypass issue described in #2455. | Merges directly into `main`; no comments yet. |

---

### 5. Feature Request Trends
- **Proxy & network resilience** – Multiple users request native handling of system proxies and fallback mechanisms for environments where direct internet access is blocked.  
- **Simplified setup workflows** – Several comments ask for streamlined UI/API for registering MCP servers, plugins, and sub‑skills without manual JSON editing.  
- **Better Windows support** – Requests for Windows‑specific installer quirks (e.g., tar‑based extraction) to be abstracted away.

---

### 6. Developer Pain Points
- **Proxy‑induced connectivity failures** – When corporate proxies are present, `FetchURL` silently fails, leading to opaque errors in VS Code extensions.  
- **Extraction bottlenecks on Windows** – The bundled CLI’s reliance on `tar` within Git Bash creates a non‑deterministic installation step that breaks on certain MSYS2 configurations.  
- **Configuration friction** – New users encounter a steep learning curve when wiring multiple MCP servers and plugins, suggesting a need for tooling or documentation improvements.

--- 

*All links point to the original GitHub items for further context.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 19 June 2026**  
*Your daily roundup of the most active discussions, pull‑requests and emerging trends in the OpenCode AI‑developer ecosystem.*

---  

### 1. Today’s Highlights  
- A massive community push for **native session goals** landed in a high‑visibility feature request (⭐ 88 👍) and a parallel PR is already in draft form.  
- The **inotify‑watch crash** that blocks OpenCode start‑up when a `.git` repository is present has generated a coordinated response: a bug‑fix PR is under review, and several work‑arounds have been shared.  
- Performance regressions on macOS (severe TUI input lag) and Alpine Linux (missing `getcontext` symbol) are stirring heated discussion, highlighting cross‑platform stability as a top concern.

---  

### 2. Releases  
*No new official releases were published in the last 24 hours.*

---  

### 3. Hot Issues (top 10 by comment / reaction volume)

| # | Title & Link | Why It Matters | Community Pulse |
|---|--------------|----------------|-----------------|
| **27167** | **Add native session goals with `/goal`** – <https://github.com/anomalyco/opencode/issues/27167> | Introduces persistent, per‑session objectives, a long‑requested capability for autonomous agents. | 51 comments, 88 👍 – strongest demand of the week. |
| **27589** | **TUI fails on Alpine (musl) – missing `getcontext`** – <https://github.com/anomalyco/opencode/issues/27589> | Breaks a major CI/CD target; regression appeared in v1.14.50. | 35 comments, 12 👍 – many developers on lightweight containers affected. |
| **16610** | **Hang on startup when inotify instances are exhausted** – <https://github.com/anomalyco/opencode/issues/16610> | Stops OpenCode in large repos or low‑resource VMs; workflow blocker. | 12 comments, 7 👍 – quick triage, PR already in flight. |
| **5391** | **Multiple auth profiles per provider** – <https://github.com/anomalyco/opencode/issues/5391> | Needed for teams switching between keys/roles without re‑login. | 11 comments, 31 👍 – strong support for multi‑tenant usage. |
| **8456** | **Automatic model selection based on task type** – <https://github.com/anomalyco/opencode/issues/8456> | Would let agents pick the most cost‑effective or capable model per operation. | 9 comments, 37 👍 – aligns with cost‑optimization trends. |
| **25630** | **`provider.models()` no longer populates custom providers** – <https://github.com/anomalyco/opencode/issues/25630> | Regression after PR #25167; blocks custom‑provider extensions. | 12 comments, 3 👍 – developers request fast rollback. |
| **30877** | **TUI “Modified Files” sidebar hidden after v1.16.0** – <https://github.com/anomalyco/opencode/issues/30877> | UI regression hides critical git status, hurting day‑to‑day workflow. | 5 comments, 8 👍 – moderate but actionable. |
| **32704** | **Bash tool description mentions unavailable Edit/Write tools** – <https://github.com/anomalyco/opencode/issues/32704> | Misleading tool docs can cause agents to produce invalid commands. | 4 comments, 0 👍 – low‑priority but noted for correctness. |
| **28472** | **MCP tool object parameters serialized as strings** – <https://github.com/anomalyco/opencode/issues/28472> | Breaks complex tool calls; developers report frequent validation errors. | 4 comments, 1 👍 – a bug that needs quick fix. |
| **32911** | **Deepseek API over‑billing (token‑count bug)** – <https://github.com/anomalyco/opencode/issues/32911> | Financial impact for heavy users; measurable cost bleed. | 2 comments, 0 👍 – early investigation, community alert. |

---  

### 4. Key PR Progress (top 10)

| # | PR & Link | Core Contribution | Status |
|---|-----------|-------------------|--------|
| **32924** | *Add native `/goal` foundation* – <https://github.com/anomalyco/opencode/pull/32924> | Implements the session‑goal state machine discussed in Issue #27167. | Open (draft). |
| **32930** | *Prevent hang when inotify watches are exhausted* – <https://github.com/anomalyco/opencode/pull/32930> | Gracefully degrades when `fs.inotify.max_user_instances` is low; directly resolves Issue #16610. | Open, review pending. |
| **32743** | *Native per‑session goals (`/goal`) – early implementation* – <https://github.com/anomalyco/opencode/pull/32743> | First functional version of persistent goals; ties UI and backend. | Open, awaiting CI. |
| **32624** | *Shell: apply `external_directory` check to redirect targets* – <https://github.com/anomalyco/opencode/pull/32624> | Tightens security for `shell` tool, preventing out‑of‑project execution. | Open. |
| **32398** | *Add session file list & desktop backgrounds* – <https://github.com/anomalyco/opencode/pull/32398> | New “Files” tab in side‑panel improves navigation inside a session. | Open. |
| **30102** | *i18n: Add Vietnamese locale* – <https://github.com/anomalyco/opencode/pull/30102> | Expands language support, part of broader i18n push. | Open. |
| **32927** | *TUI: surface compaction progress & context usage* – <https://github.com/anomalyco/opencode/pull/32927> | Visual indicators for memory compaction, helping users understand latency spikes. | Draft. |
| **32919** | *Type safety & hygiene improvements* – <https://github.com/anomalyco/opencode/pull/32919> | Refactors chat‑chunk types, preventing runtime cast errors. | Open. |
| **32916** | *Add Noumena provider (contributor PR)* – <https://github.com/anomalyco/opencode/pull/32916> | Extends provider ecosystem with a new LLM vendor; includes OAuth flow. | Closed (merged). |
| **32854** | *Tolerate file‑watcher startup failures* – <https://github.com/anomalyco/opencode/pull/32854> | Makes the watcher non‑fatal; reduces crashes on limited environments. | Closed (merged). |

---  

### 5. Feature Request Trends  

| Trend | Representative Issues/PRs |
|-------|---------------------------|
| **Session‑level goal management** – persistent objectives, status tracking, autonomous pursuit. | Issues #27167, PRs #32924, #32743. |
| **Multi‑profile authentication** – separate credentials per provider/team. | Issue #5391, related discussion on provider config. |
| **Dynamic model selection** – auto‑pick model based on task, cost, or capability. | Issue #8456, ongoing design threads. |
| **Improved UI resilience** – fixing hidden panes, stale paths, and watcher crashes across TUI/Desktop. | Issues #30877, #16610, #31888; PR #32930, #32854. |
| **Tool‑chain correctness** – accurate tool descriptions, proper object serialization, and safe shell redirects. | Issues #32704, #28472, #32624; PR #32624. |
| **Internationalisation** – adding new locale packs (Vietnamese, Italian, etc.). | PR #30102, #28232. |

---  

### 6. Developer Pain Points  

1. **Stability on Low‑Resource / Non‑glibc Platforms** – Alpine (`getcontext`) and macOS input latency expose gaps in binary compatibility and TUI rendering.  
2. **File‑Watcher Limits** – Exhausted inotify watches cause hangs; developers repeatedly hit this when working inside large `.git` trees.  
3. **Inconsistent UI State** – “Modified Files” pane disappearing, stale project paths, and missing `@` file mentions after creating new files cause workflow friction.  
4. **Authentication Overhead** – Single‑profile auth per provider forces token juggling; demand for profile multiplexing is high.  
5. **Cost Transparency** – Deepseek token‑billing bug and desire for automatic model selection indicate that developers need clearer cost controls.  

*Overall, the community is rallying around richer session orchestration, robust cross‑platform reliability, and finer‑grained control over authentication and model usage.*  

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>


# Pi Community Digest - 2026-06-19

## Today's Highlights

Pi v0.79.7 shipped with automatic theme mode, allowing separate light/dark theme configuration that follows terminal color-scheme changes. The release also includes self-only updates, while the PR queue shows significant progress on multi-session support, streaming code fence rendering, and OpenRouter integration.

## Releases

**v0.79.7** - New Features:
- **Automatic theme mode**: `/settings` can now choose separate light and dark themes that follow terminal color-scheme changes. [Documentation](https://github.com/earendil-works/pi/blob/v0.79.7/packages/coding-agent/docs/themes.md#selecting-a-theme)
- **Self-only updates by default**: Streamlined update behavior for individual session management

## Hot Issues

1. **[#1278] TUI: Make @ file autocomplete async/streaming** - Critical performance issue where `@` file autocomplete blocks on large repos. With 16 reactions and 14 comments, the community strongly wants streaming `fd` results to maintain typing responsiveness. [Issue #1278](https://github.com/earendil-works/pi/issues/1278)

2. **[#5700] Support multiple live agent sessions with TUI switching** - Highly requested feature allowing users to juggle multiple concurrent agent sessions. Current `switchSession` tears down sessions, preventing background agents. [Issue #5700](https://github.com/earendil-works/pi/issues/5700)

3. **[#5463] Auto-compaction after final turn throws error** - Open bug causing unhandled errors during normal assistant turns. Receives 5 reactions for this annoying crash. [Issue #5463](https://github.com/earendil-works/pi/issues/5463)

4. **[#2327] Parallel edit tool calls on same file overwrite each other** - Serious data loss bug where concurrent edits silently overwrite. Closed but highlights tool execution concerns. [Issue #2327](https://github.com/earendil-works/pi/issues/2327)

5. **[#2469] Clipboard image paste to WSL silently fails** - Common WSL users affected by inability to paste screenshots. 4 reactions indicate widespread impact. [Issue #2469](https://github.com/earendil-works/pi/issues/2469)

6. **[#2567] Compaction not working with gpt-5-mini on GitHub Copilot** - Model-specific compatibility issue blocking GPT-5-mini usage. [Issue #2567](https://github.com/earendil-works/pi/issues/2567)

7. **[#2447] Optimize truncateToWidth for large strings** - Performance bottleneck in session switcher affecting users with large messages. [Issue #2447](https://github.com/earendil-works/pi/issues/2447)

8. **[#2557] tool_call edit runs for conflicting edits** - Extensions can't detect edit conflicts, causing misleading UI feedback. [Issue #2557](https://github.com/earendil-works/pi/issues/2557)

9. **[#5468] MiniMax-M3 tool replay sends unseen tool IDs** - Long sessions fail with 400 errors on tool ID validation. [Issue #5468](https://github.com/earendil-works/pi/issues/5468)

10. **[#2482] Keep stdout JSON-only in --mode json** - Subprocess users need clean JSON output without package manager noise. [Issue #2482](https://github.com/earendil-works/pi/issues/2482)

## Key PR Progress

1. **[#5874] feat(coding-agent): add automatic theme mode** - Implements the v0.79.7 theme feature, enabling separate light/dark theme configuration. [PR #5874](https://github.com/earendil-works/pi/pull/5874)

2. **[#5846] fix(tui): stabilize streaming code fence rendering** - Addresses rendering instability in streaming code blocks. [PR #5846](https://github.com/earendil-works/pi/pull/5846)

3. **[#5884] fix(ai): handle orphaned tool result messages** - Prevents Moonshot AI 400 errors by guarding against tool results without preceding tool calls. [PR #5884](https://github.com/earendil-works/pi/pull/5884)

4. **[#5866] feat(ai): add OpenRouter Fusion alias** - Adds `openrouter/fusion` router alias matching existing `openrouter/auto` pattern. [PR #5866](https://github.com/earendil-works/pi/pull/5866)

5. **[#5348] Add selective pi-ai base entrypoints** - Enables side-effect-free imports for `@earendil-works/pi-ai/base` and `@earendil-works/pi-agent-core/base`. [PR #5348](https://github.com/earendil-works/pi/pull/5348)

6. **[#5841] fix(tui): detect Warp terminal and enable Kitty image protocol** - Proper Warp terminal detection without workarounds. [PR #5841](https://github.com/earendil-works/pi/pull/5841)

7. **[#5756] feat(coding-agent): Expose edit-diff for extensions** - Makes edit diffs available to extensions for better integration. [PR #5756](https://github.com/earendil-works/pi/pull/5756)

8. **[#1724] feat(coding-agent): add fold/unfold to tree branch navigation** - Arrow key navigation improvements for session tree. [PR #1724](https://github.com/earendil-works/pi/pull/1724)

9. **[#1821] fix(coding-agent): use ESM resolution for extension alias fallback** - Fixes extension loading issues in global npm installs. [PR #1821](https://github.com/earendil-works/pi/pull/1821)

10. **[#4830] fix(coding-agent): list themes by content name** - Improves theme selection UX by showing content names. [PR #4830](https://github.com/earendil-works/pi/pull/4830)

## Feature Request Trends

The community is converging on several key directions:

- **Multi-session management**: Multiple concurrent agent sessions with TUI switching (#5700) is the standout feature request, addressing workflow limitations
- **Enhanced provider support**: Requests for prompt caching (Mistral #5854), thinking control fixes (Qwen3.5 #2022, Google #2490), and model-specific compatibility
- **Performance optimization**: Async streaming for file operations (#1278), optimized string handling (#2447), and selective bundling (#5348)
- **UX polish**: Better theme customization, improved slash-command autocomplete (#2577), and edit conflict detection

## Developer Pain Points

- **Tool execution reliability**: Parallel edit conflicts (#2327), orphaned tool results (#5884), and inconsistent hook firing (#2543) create data integrity concerns
- **Terminal compatibility**: Termux keyboard redraw issues (#2467), BashExecutionComponent crashes in split terminals (#2569), and WSL clipboard failures (#2469)
- **Session management bugs**: Fork session ID misalignment (#4799), compaction failures with specific models (#2567), and JSON mode shutdown issues (#2576)
- **Dependency and module issues**: Missing ajv dependency (#2252), ESM resolution problems (#1821), and transitive dependency reliance


</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>


# Qwen Code Community Digest - 2026-06-19

## Today's Highlights
The community focused heavily on stability fixes today, with multiple critical security and MCP-related bugs addressed through new PRs. Developer experience improvements around token analytics and platform integrations also gained significant attention, indicating growing production usage.

## Releases
*No releases in the last 24 hours.*

## Hot Issues

### #4479 [CLOSED] | [Feature Request: Daily Token Consumption Statistics](https://github.com/QwenLM/qwen-code/issues/4479)
High-priority feature request asking for daily token usage tracking. User reported 30M tokens usage in a single session, highlighting the need for better cost monitoring and analytics capabilities.

### #4987 [CLOSED] | [PR Silently Reverted Merged Feature](https://github.com/QwenLM/qwen-code/issues/4987)
Concerned report about PR #4779 reverting changes from PR #4652 without explanation, raising questions about code review processes and merge conflict resolution practices.

### #5385 [OPEN] | [ACP Session Cancel Tests Reference Old Flag](https://github.com/QwenLM/qwen-code/issues/5385)
Breaking CI issue where test assertions still reference deprecated `stopAfterUserQuestionCancel` flag instead of new `stopAfterPermissionCancel`, preventing typecheck builds.

### #5365 [CLOSED] | [FileTokenStorage Cannot Create Token File on First Save](https://github.com/QwenLM/qwen-code/issues/5365)
Critical authentication bug where `setCredentials()` fails to create token files initially because it calls `loadTokens()` before the file exists, blocking OAuth flows.

### #5147 [CLOSED] | [OOM After /quit Command](https://github.com/QwenLM/qwen-code/issues/5147)
Memory exhaustion issue occurring even with zero tool calls when exiting with large text histories, indicating problems in managed auto-memory background task cleanup.

### #5201 [CLOSED] | [QQ Bot Channel Adapter Implementation](https://github.com/QwenLM/qwen-code/issues/5201)
Large feature addition request for QQ Bot (Tencent messaging platform) integration, following existing patterns for Telegram/WeChat/DingTalk adapters.

### #5376 [OPEN] | [Search Tool Permission Checks Don't Expand Tilde Paths](https://github.com/QwenLM/qwen-code/issues/5376)
Security vulnerability where `~/` paths in search tool parameters bypass permission validation while actual execution expands them to user home directory.

### #5381 [OPEN] | [MCP Retry Path Reconnects on Non-Connection Errors](https://github.com/QwenLM/qwen-code/issues/5381)
Incorrect retry behavior where MCP reconnects trigger for ordinary tool errors (invalid parameters) rather than just connection failures, potentially masking real issues.

### #5379 [OPEN] | [MCP Callable Fallback Misses Top-Level isError Results](https://github.com/QwenLM/qwen-code/issues/5379)
Error handling gap where top-level MCP `isError` flags aren't properly detected in callable fallback paths, causing tool errors to be treated as successful responses.

### #5244 [CLOSED] | [Windows Desktop Creates Spurious (session) Entries](https://github.com/QwenLM/qwen-code/issues/5244)
Platform-specific bug creating empty session entries after tool/skill execution on Windows desktop clients, cluttering session lists with useless entries.

## Key PR Progress

### #5384 | [Fix ACP Cancel Test Flag](https://github.com/QwenLM/qwen-code/pull/5384)
Directly addresses issue #5385 by updating remaining test assertions to use the correct `stopAfterPermissionCancel` flag, restoring CI build stability.

### #5382 | [Avoid Reconnecting on MCP Tool Errors](https://github.com/QwenLM/qwen-code/pull/5382)
Fixes #5381 by restricting MCP retries to only connection/transport failures rather than all errors, preventing incorrect reconnection behavior.

### #5380 | [Detect Top-Level MCP Callable Errors](https://github.com/QwenLM/qwen-code/pull/5380)
Resolves #5379 by properly handling `response.isError` values in MCP callable fallback paths alongside existing nested error handling.

### #5378 | [Resolve Tilde Paths Before Search Permission Checks](https://github.com/QwenLM/qwen-code/pull/5378)
Addresses #5376 security issue by applying existing tilde-aware path resolution to glob/grep/ripgrep permission validation logic.

### #5377 | [Preserve Equals in MCP Env Values](https://github.com/QwenLM/qwen-code/pull/5377)
Fixes #5374 by splitting environment variables on first `=` only, preserving complex values like signed tokens that contain multiple equals signs.

### #5375 | [Respect Sandbox Path Boundaries](https://github.com/QwenLM/qwen-code/pull/5375)
Resolves #5373 by replacing string-prefix checks with proper path-segment boundary validation for sandbox PATH/PYTHONPATH/VIRTUAL_ENV handling.

### #5364 | [Avoid Glob Prefix Cache Reuse](https://github.com/QwenLM/qwen-code/pull/5364)
Performance improvement preventing glob-shaped search queries from incorrectly reusing prefix cache entries that don't match glob patterns.

### #5372 | [Parse Grep Results with Colon Paths](https://github.com/QwenLM/qwen-code/pull/5372)
Fixes #5370 by improving grep output parsing to handle file paths containing colons, supporting both NUL-delimited and legacy colon-delimited formats.

### #5194 | [Read WebP VP8X Canvas Height from Correct Byte Offset](https://github.com/QwenLM/qwen-code/pull/5194)
Corrects image dimension parsing bug where WebP VP8X canvas height was read from wrong byte position, causing incorrect image metadata.

### #5145 | [Show Follow-Up Suggestion in Input Placeholder](https://github.com/QwenLM/qwen-code/pull/5145)
UX enhancement displaying follow-up suggestions in input placeholder area immediately after model responses rather than requiring users to check chips below.

## Feature Request Trends
1. **Cost & Usage Analytics** - Strong demand for token consumption tracking (#4479) reflecting production deployment concerns
2. **Platform Integrations** - Continued expansion of messaging platform adapters with QQ Bot support (#5201) 
3. **UI Customization** - Requests for configurable UI elements like response time estimation (#5366)
4. **Enhanced Configuration** - Better handling of complex environment variables and settings (#5374, #5313)

## Developer Pain Points
Developers are encountering recurring issues with MCP integration reliability, particularly around error handling consistency and retry logic. Security boundaries remain a concern with path validation gaps in search tools and sandbox environments. Authentication workflows face friction from token storage initialization issues and OAuth edge cases. Memory management and image processing bugs suggest scaling challenges as users run longer sessions with diverse media types.


</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*