# AI CLI Tools Community Digest 2026-08-19

> Generated: 2026-08-19 00:40 UTC | Tools covered: 9

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

**Cross‑Tool Comparison Report – AI CLI Ecosystem (2026‑08‑19)**  

---

### 1. Ecosystem Overview
The AI CLI landscape is moving from isolated, single‑purpose tools to tightly‑integrated, session‑aware platforms that blend model orchestration, sandbox security, and developer‑experience refinements.  Major vendors are pushing frequent nightlies and stability releases, while community feedback is converging on three pain‑point buckets: reliable cross‑session communication, agent‑level resilience, and tighter sandbox/configuration control.  Open‑source and commercial projects alike are investing in richer observability (usage metrics, live session registries) and multilingual documentation to broaden adoption.

---

### 2. Activity Comparison  

| Tool | Hot Issues (last 24 h) | PRs / MRs (in‑flight) | Recent Release (status) |
|------|------------------------|----------------------|--------------------------|
| **Claude Code** | **10** (Windows/MSIX stability, VM hangs, sandbox E2BIG, cross‑session messaging, etc.) | **1** (#41611 – source‑doc addition) | **v2.1.235** – stable, spell‑check & cache fixes |
| **OpenAI Codex** | **0** (no digest data) | **0** | No release recorded |
| **Gemini CLI** | **10** (sub‑agent hangs, tool‑limit errors, shell‑stuck state, security hardening, etc.) | **10** (mix of open/closed – e.g., #28892, #28898, #28862…) | **v0.56.0‑nightly.20260818.g194edea47** (nightly) |
| **GitHub Copilot CLI** | **10** (Org‑model gaps, sandbox overrides, Atlassian auth regression, BYOK refresh, etc.) | **1** (#3163 – monitoring runner init) | **v1.0.81‑1** – Gemini 3.7 Flash, per‑agent usage metrics |
| **Kimi Code CLI** | **2** (UI rendering regression, quant‑strategy benchmark) | **2** (PR #848 closed, PR #2606 open – docs/knowledge plane) | No new release |
| **OpenCode** | **0** (no recent community data) | **0** | No release |
| **Pi** | **0** (no recent community data) | **0** | No release |
| **Qwen Code** | **10** (API 400 errors, native session coordination, cross‑session messaging, silent Windows deletion, etc.) | **10** (e.g., #9402 Agent Board, #9396 Session Watermark, #9389 Live Model List) | **v0.21.11‑nightly.20260818.259951c53e** (nightly) |
| **DeepSeek TUI** | **10** (system‑prompt loss, status‑bar bugs, trusted publishing, i18n docs, etc.) | **10** (e.g., #5511 repo context, #5506 Chinese docs, #5491 approval persistence) | **v0.9.9** – Codewhale public release (npm trusted publishing) |

*Numbers reflect the “Hot Issues” and “Key PR Progress” sections of each digest; releases are those explicitly tagged or published on the day of the snapshot.*

---

### 3. Shared Feature Directions  
| Cross‑cutting requirement | Tools mentioning it | Specific need |
|---------------------------|---------------------|---------------|
| **Cross‑session communication & persistence** | Claude Code (#87694, #87560), Qwen Code (#8724, #9402), Gemini CLI (sub‑agent termination reporting) | Reliable messaging/state sharing when users open separate CLI instances. |
| **Agent reliability & sub‑agent handling** | Gemini CLI (#22323, #21409, #22232), Copilot CLI (#2904, #2958), DeepSeek TUI (#5505 system‑prompt loss) | Robust termination, hang detection, and proper “goal” reporting for autonomous agents. |
| **Sandbox & permission hardening** | Claude Code (#73468 macOS E2BIG, #87503 VM timeout), Copilot CLI (#4522 forced sandbox, #4524 restrictive sandbox), Gemini CLI (#28863/28898 env‑var sanitisation) | Stricter security boundaries while reducing friction for legitimate workspace access. |
| **Configuration granularity (per‑agent / per‑mode)** | Copilot CLI (#2904 reasoning_effort, #2958 plan vs autopilot models), Qwen Code (RFC #8718 native coordination), Gemini CLI (AST‑aware navigation) | Allow users to assign different models, limits, or behavior per agent or workflow mode. |
| **Observability & usage reporting** | Copilot CLI (per‑agent usage JSON), Qwen Code (`qwen sessions ps`), DeepSeek TUI (trusted publishing, repo context headers) | Better telemetry for debugging, billing, and workflow analytics. |
| **Localization & documentation** | DeepSeek TUI (Chinese docs #5482), Kimi Code (knowledge plane), Gemini CLI (i18n mentions) | Non‑English user support and onboarding aids. |

These themes appear in **≥3** distinct tool communities, indicating a maturing market expectation rather than isolated bugs.

---

### 4. Differentiation Analysis  

| Tool | Core Feature Focus | Typical Target User | Technical Approach |
|------|-------------------|--------------------|--------------------|
| **Claude Code** | Stability & productivity fixes (spell‑check, cache invalidation, nested sessions) | Developers needing reliable, IDE‑adjacent AI coding assistance | Integrated language‑server model, optional CLI flags, sandboxed Windows/macOS execution |
| **Gemini CLI** | Sub‑agent orchestration & AST‑aware code navigation | Power users building autonomous coding workflows | JavaScript/TypeScript TUI, strict‑null safety, experimental SSR agents |
| **GitHub Copilot CLI** | Model diversity & sandbox flexibility (Gemini 3.7 Flash, Ctrl+E config editor) | Enterprise/individual developers using multiple model backends | MCP‑based plugin architecture, per‑agent usage JSON, enforced sandbox with overrides |
| **Qwen Code** | Native multi‑session coordination & live session registries | Teams running parallel coding agents | Daemon‑based session manager, “Agent Board” for leader‑worker patterns |
| **DeepSeek TUI** | Unified terminal UI with strong localization & approval persistence | Users preferring a fully‑contained terminal AI assistant | Rust‑based TUI, trusted npm publishing, configurable budgets, i18n‑first docs |
| **Kimi Code CLI** | Quant‑strategy benchmarking & SSH‑failure logging | Research‑oriented developers evaluating code generation on niche workloads | OpenAI‑compatible API surface, lightweight web UI, CLI‑first debugging |
| **OpenCode / Pi** | (Limited publicly reported activity) | Early‑stage or niche use‑cases | No discernible differentiating pattern from current digests |

---

### 5. Community Momentum & Maturity  

| Tool | Activity Indicator | Interpretation |
|------|-------------------|----------------|
| **Gemini CLI** | 10 hot issues + 10 open PRs + frequent nightlies | Highly active open‑source community; rapid iteration on agent reliability and security. |
| **Qwen Code** | 10 hot issues + 10 open PRs + nightly releases | Strong internal R&D momentum; focus on multi‑session coordination and internal tooling. |
| **DeepSeek TUI** | 10 hot issues + 10 open PRs + stable public release | Transitioning from prototype to production; community engaged in localization and UI stability. |
| **Claude Code** | 10 hot issues + stable release + single PR | Maturity in core functionality; current work is bug‑fix and sandbox reliability rather than new features. |
| **Copilot CLI** | 10 hot issues + single PR + new release | Stable but still facing integration friction (sandbox overrides, auth regressions); incremental improvements. |
| **Kimi Code CLI** | 2 hot issues + 2 PRs (one closed) | Smaller but growing; focus on UI stability for third‑party providers and documentation. |
| **OpenCode / Pi** | No reported activity | Early‑stage or privately maintained; minimal community signal at present. |

*Tools with ≥ 8 hot issues and ≥ 8 open PRs are currently the most dynamic (Gemini, Qwen, DeepSeek). Claude and Copilot have substantial user bases but are in a “stabilization” phase.*

---

### 6. Trend Signals – What the Community Is Telling Us  

1. **Session‑centric Orchestration** – Repeated calls for cross‑session messaging, live registries, and agent coordination (#87694, #8724, #9402).  Developers expect AI agents to retain context and collaborate across separate CLI launches.  

2. **Agent Reliability & Visibility** – Hangs, incorrect “GOAL” reporting, and missing system prompts are the top pain points across Gemini, DeepSeek, and Copilot.  Users demand deterministic failure handling and clearer status indicators.  

3. **Sandbox & Security Tightening** – While security is a priority, overly restrictive sandboxes cause workflow breakage (Copilot, Claude, Gemini).  The market is converging on *configurable* sandbox policies rather than blanket enforcement.  

4. **Model‑level Configuration** – Requests for per‑agent reasoning effort, per‑mode default models, and AST‑aware navigation show a shift from “one‑size‑fits‑all” to fine‑grained control.  

5. **Observability & Billing Transparency** – Introduction of per‑agent usage metrics (Copilot) and budget controls (DeepSeek) indicates users need actionable telemetry for cost management.  

6. **Localization & Developer Documentation** – Chinese documentation efforts (DeepSeek, Kimi) and knowledge‑plane initiatives highlight a push to serve non‑English developer bases and reduce onboarding friction.  

7. **CI‑Friendly Releases** – Trusted publishing (DeepSeek) and nightly builds (Gemini, Qwen) suggest tooling is increasingly expected to integrate into automated pipelines.  

**Takeaway for developers:** Build features that preserve session state, expose fine‑grained configuration, and provide clear error/status feedback.  Security must be balanced with usability, and documentation/i18n should be baked early in the roadmap to accelerate adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-19)

## 1. Top Skills Ranking

| Rank | PR | Title | Functionality | Discussion Highlights | Status |
|------|----|-------|---------------|----------------------|--------|
| 1 | #1298 | fix(skill-creator): run_eval.py recall issue | Resolves 0% recall in skill evaluation loop; fixes Windows stream reading, trigger detection, and parallel worker bugs | Multiple reproductions (#556, #1099, #1050); critical reliability bottleneck affecting skill optimization | **Open** |
| 2 | #1367 | feat(skills): add self-audit skill v1.3.0 | Introduces mechanical file verification + four-dimension reasoning quality gate for universal skill auditing | Proposed by YuhaoLin2005; aims to verify claimed outputs before delivery | **Open** |
| 3 | #514 | Add document-typography skill | Prevents typographic errors in AI-generated documents (orphan word wrap, widow paragraphs, numbering misalignment) | Targeted at widespread document quality issues; high relevance for enterprise use cases | **Open** |
| 4 | #486 | Add ODT skill | OpenDocument (.odt/.ods) creation, template filling, and ODT-to-HTML parsing | Growing demand for legacy office format support in AI workflows | **Open** |
| 5 | #210 | Improve frontend-design skill | Revises clarity, actionability, and internal coherence of frontend design instructions | Focus on ensuring Claude can follow instructions within single conversations | **Open** |
| 6 | #539 | fix(skill-creator): warn on unquoted description | Detects unquoted `description` fields with YAML special characters to prevent silent parsing failures | Directly impacts skill creation hygiene and frontmatter validity | **Open** |
| 7 | #538 | fix(pdf): correct case-sensitive file references | Fixes 8 case-sensitivity mismatches in SKILL.md → reference/form files | Breaks on case-sensitive systems; improves cross-platform consistency | **Open** |

*Note: All listed PRs show "Comments: undefined" in the dataset, indicating limited public discourse yet significant technical importance.*

---

## 2. Community Demand Trends

The community is showing clear concentration around **quality assurance, reliability engineering, and platform-specific integrations**:

- **Reliability & Evaluation Automation** – Persistent issues with `run_eval.py` reporting zero recall, `claude-api` consuming excessive context (~156k tokens), and document generation artifacts (tracked change collisions, whitespace reformatting). These indicate a strong demand for robust self-verification and performance optimization.

- **Quality Gates & Auditing** – Multiple proposals for systematic skill auditing (self-audit skill v1.3.0, skill-quality-analyzer, skill-security-analyzer) reflect growing awareness of the need for standardized quality controls across the skills ecosystem.

- **Document & Text Processing** – High-frequency requests for typographic correctness (orphan wrapping, widow paragraphs), PDF metadata integrity, and ODF/OpenDocument support suggest expanding coverage for professional document workflows.

- **Platform-Specific Extensions** – Interest in ServiceNow, SAP RPT-1-OSS, Pyxel retro-game development, and Bedrock integration points indicates enterprise and niche-market opportunities.

- **Plugin Compatibility** – Conflicts between `document-skills` and `example-skills` plugins highlight the need for better interoperability and unified contribution guidelines.

---

## 3. High-Potential Pending Skills

The following active-comment PRs are poised to become major features if merged:

- **#1298** – *run_eval.py recall fix*: Critical reliability patch addressing the core evaluation loop that has produced 0% recall across all skills. Without this, skill optimization remains fundamentally broken.
- **#1367** – *Self-audit skill v1.3.0*: Establishes a universal mechanical verification + multi-dimensional reasoning quality gate. Could become the standard quality-assurance layer for all future skills.
- **#514** – *Typographic quality control*: Targets pervasive document defects (orphan word wrap, widow paragraphs, numbering) affecting AI-generated content. High commercial value for enterprise teams.
- **#486** – *ODT skill*: Opens support for OpenDocument formats, a growing requirement for legacy and cross-platform document workflows.
- **#539** – *YAML description validation*: Prevents silent YAML parsing failures in skill frontmatters by catching unquoted special characters early.
- **#1538** – *Agent Skills spec compliance*: Brings two previously non-compliant skills under the official marketplace specification, improving discoverability and governance.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand centers on **automated quality assurance and reliability engineering** for AI skills—particularly self-auditing frameworks, rigorous evaluation loops, and error-prevention mechanisms for document generation and code execution. There is also strong, emerging interest in **platform-specific integrations** (ServiceNow, SAP, Pyxel) and **cross-platform plugin compatibility** between skill collections.

---

# Claude Code Community Digest – 2026-08-19

## 1. Today's Highlights

Claude Code v2.1.235 introduces an optional `spellcheck` setting that underlines misspellings in real-time, alongside fixes for cache invalidation and nested session management. The latest release also addresses critical stability issues across platforms—particularly Windows update failures and macOS sandbox limitations—that have been actively reported by users over the past week.

## 2. Releases

**v2.1.235** – Major stability improvements:
- **Spellcheck integration**: Optional `spellcheck` flag underlines misspelled words in prompt input using system spell checkers (aspell/hunspell/ispell).
- **Cache management**: Fixed whole-prompt-cache invalidation when language servers disconnect/reconnect mid-session.
- **Session resilience**: Resolved nested session handling issues that could cause unexpected resets.

[View Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)

## 3. Hot Issues

| # | Title | Platform | Impact | Why It Matters |
|---|-------|----------|--------|----------------|
| #76357 | Windows update fails with "Another program is currently using this file" | Windows (MSIX) | Critical | Prevents app launch entirely; requires reboot. Affects ~1.2M users on Windows. |
| #87503 | Cowork VM connection timeout after update to 1.32352.0 | macOS | Critical | VM hangs during guest initialization; blocks remote workflows on Intel Mac. |
| #87512 | Cowork VM guest kernel fails to enumerate NVMe disks | macOS | Critical | Causes VM hangs after Run/init; prevents VM creation. |
| #73468 | macOS sandbox E2BIG errors with large git worktrees | macOS | High | Every sandboxed command fails with "argument list too long"; breaks development workflows. |
| #87560 | Post-update auto-relaunch rewinds conversation history | Windows/macOS | Medium | Navigation state corrupted; users lose progress after silent restarts. |
| #87694 | Cross-session messages delivered but not persisted | Windows/macOS | High | Sender sees success, but recipients never receive messages—causing communication gaps. |
| #87750 | Cowork browser fallback crashes app | Windows/macOS | High | Browser interaction causes app crash; cannot recover without reinstall. |
| #87279 | Cross-session message exclusion from model context | Windows/macOS | Medium | Model loses context of external inputs, leading to inconsistent responses. |
| #87679 | CoworkVMService crashes with Browser panel | macOS | High | Service instability prevents VM operations; frequent restart loops. |
| #87759 | Cowork VM fails to boot on Intel Mac post-update | macOS | High | Regression after 1.32352.1; affects new installations and updates. |

*Note: Other notable issues include VSCode extension focus stealing (#32726), billing disputes (#81703, #83062), and CLI/Auto Mode inconsistencies (#87534).*

## 4. Key PR Progress

| # | Title | Area | Description |
|---|-------|------|-------------|
| #41611 | Add missing source to claude code | Core | Adds documentation/source files to improve project discoverability. |
| *(No additional PRs)* | — | — | Only one pull request was updated in the last 24 hours. |

## 5. Feature Request Trends

Three dominant themes emerge from the hot issues:

1. **Cross-Session Communication** – Multiple issues (#87694, #87560, #87323) highlight broken message persistence between sessions. Users want reliable cross-session messaging where actions taken in one session persist correctly in others.

2. **Platform Stability & Performance** – Significant pain points on macOS (#73468, #87503, #87512, #87759) and Windows (#76357, #73107) regarding sandbox limits, VM connectivity, and update reliability. Developers prioritize stable execution environments.

3. **Workflow Integration** – Features around focus management (#32726), agent coordination (#86608), and TUI improvements (#87801) indicate demand for smoother integration with IDEs and more responsive UI behaviors.

## 6. Developer Pain Points

- **Update Reliability**: Frequent crashes and reboot requirements after updates (Windows, macOS) disrupt continuous development cycles.
- **Sandbox Limitations**: macOS sandbox constraints causing command-line failures with large worktrees and excessive resource allocation.
- **Session State Corruption**: Conversation history rewinding after auto-relaunch and missing cross-session message persistence break user workflows.
- **VM Connectivity**: Cowork VM failures on Intel Mac (NVMe enumeration, socket connections) block remote workstation access.
- **Focus Stealing**: VSCode extension panels interfering with active editors reduce productivity.
- **Billing Transparency**: Unexpected auto-recharges after plan limit resets require clearer visibility into usage tracking.

---

*Generated for the Claude Code community on 2026-08-19.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑08‑19**

---

### 1. Today’s Highlights  
The nightly **v0.56.0‑nightly.20260818.g194edea47** release landed two SSR‑Agent fixes: clearer privacy‑notice wording for sub‑agents and resolution of TypeScript strict‑null errors in integration tests. Meanwhile, the issue tracker shows strong community focus on **agent reliability** (e.g., sub‑agent termination reporting, generalist‑agent hangs) and **security/hardening** of core subprocesses.

---

### 2. Releases  
- **v0.56.0‑nightly.20260818.g194edea47** – SSR Agent issue fixes (privacy notice wording, TypeScript strict‑null bugs).  
  <https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260818.g194edea47>

*No stable version was published in the last 24 h.*

---

### 3. Hot Issues (10 noteworthy)

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#22323** | *Sub‑agent recovery after MAX_TURNS reported as “GOAL”* | Incorrectly reports success when a sub‑agent hits its turn limit, hiding the real failure. | 12 comments, 2 👍 – actively discussed. |
| **#21409** | *Generalist agent hangs* | The generalist agent can freeze indefinitely after deferral, requiring manual cancellation. | 8 comments, 8 👍 – high visibility. |
| **#24353** | *Robust component‑level evaluations* | Introduces systematic behavioral eval tests (76 so far) to improve quality assurance. | 7 comments, 0 👍 – important for testing. |
| **#22745** | *AST‑aware file reads, search, and mapping* | Explores precise AST‑based navigation to reduce turn count and token noise. | 7 comments, 1 👍 – feature‑driven. |
| **#21968** | *Gemini does not use skills and sub‑agents enough* | Users report the model rarely auto‑invokes custom skills unless explicitly instructed. | 6 comments, 0 👍 – recurring pain point. |
| **#26522** | *Stop Auto Memory from retrying low‑signal sessions indefinitely* | Auto Memory may keep unprocessed low‑signal sessions, inflating the inbox. | 5 comments, 0 👍 – operational concern. |
| **#26525** | *Add deterministic redaction and reduce Auto Memory logging* | Current redaction happens after model context is populated, leaking secrets. | 4 comments, 0 👍 – security focus. |
| **#25166** | *Shell command execution gets stuck with “Waiting input” after completion* | Simple CLI commands appear active while already finished, causing confusion. | 4 comments, 3 👍 – high‑frequency bug. |
| **#22232** | *Enhance browser_agent resilience: automatic session takeover & lock recovery* | “Fail‑fast” handling of locked browser profiles can block workflows. | 4 comments, 0 👍 – UX improvement request. |
| **#21983** | *Browser sub‑agent fails in Wayland* | Wayland‑specific rendering leads to premature termination of the browser sub‑agent. | 4 comments, 1 👍 – platform‑specific issue. |

*All links:* <https://github.com/google-gemini/gemini-cli/issues/22323>, <https://github.com/google-gemini/gemini-cli/issues/21409>, <https://github.com/google-gemini/gemini-cli/issues/24353>, <https://github.com/google-gemini/gemini-cli/issues/22745>, <https://github.com/google-gemini/gemini-cli/issues/21968>, <https://github.com/google-gemini/gemini-cli/issues/26522>, <https://github.com/google-gemini/gemini-cli/issues/26525>, <https://github.com/google-gemini/gemini-cli/issues/25166>, <https://github.com/google-gemini/gemini-cli/issues/22232>, <https://github.com/google-gemini/gemini-cli/issues/21983>.

---

### 4. Key PR Progress (10 important PRs)

| # | Title | Description | Status |
|---|-------|-------------|--------|
| **#28892** | *preserve empty text turns with tools or media* | Refines `isValidContent` to keep empty‑text model turns (e.g., tool requests) in the curated history. | **Open** |
| **#28898** | *harden subprocess execution security, sanitize runtime‑altering env vars* | Adds security checks for subprocesses, prevents token leakage, and sanitizes environment variables passed to MCP servers. | **Open** |
| **#28862** | *refactor(core): remove eslint-disable and type‑asserts from shellExecutionService* | Cleans up `shellExecutionService.ts` by eliminating unsafe type casts and eslint suppressions on the `fix/mac-pty-resource-leak` branch. | **Open** |
| **#28863** | *prompt for consent on environment changes and sanitize runtime‑altering env vars* | Ensures user consent when extensions modify environment variables, and sanitizes custom env vars before spawning MCP processes. | **Open** |
| **#28895** | *preserve explicit flash model IDs* | Restricts the flash rollout rewrite to generic `flash` alias while preserving explicit IDs (`gemini-3.6-flash`, `gemini-3.7-flash`). | **Open** |
| **#28897** | *respect plan‑routing model availability* | Aligns plan‑routing logic with the current model availability, preventing misuse of unavailable models. | **Open** |
| **#28893** | *fix(core): preserve explicit flash model IDs* | Mirrors #28895; ensures explicit model IDs are passed through unchanged so the API can reject invalid IDs. | **Open** |
| **#28641** | *prevent ghost text wrapping infinite loop at narrow widths* (closed) | Fixes an infinite loop in `getGhostTextLines` when `inputWidth` is smaller than a wide CJK/emoji character; adds regression test. | **Closed** |
| **#28671** | *resolve context corruption and quota error fallback issues* (closed) | Addresses context corruption and improper fallback handling when quota errors occur during tool execution. | **Closed** |
| **#28369** | *add local report command and developer documentation* (closed) | Introduces `npm run eval:report` to aggregate pass rates from Vitest `report.json` and provides docs for behavioral evaluations. | **Closed** |

*All links:* <https://github.com/google-gemini/gemini-cli/pull/28892>, <https://github.com/google-gemini/gemini-cli/pull/28898>, <https://github.com/google-gemini/gemini-cli/pull/28862>, <https://github.com/google-gemini/gemini-cli/pull/28863>, <https://github.com/google-gemini/gemini-cli/pull/28895>, <https://github.com/google-gemini/gemini-cli/pull/28897>, <https://github.com/google-gemini/gemini-cli/pull/28893>, <https://github.com/google-gemini/gemini-cli/pull/28641>, <https://github.com/google-gemini/gemini-cli/pull/28671>, <https://github.com/google-gemini/gemini-cli/pull/28369>.

---

### 5. Feature Request Trends  

- **Sub‑agent & Agent Reliability** – Issues #22323, #21409, #22232, #21983 repeatedly request robust handling of sub‑agent termination, hangs, and lock recovery.  
- **AST‑aware & Precise Code Navigation** – #22745, #22746, #22598 push for AST‑based file reads, search, and mapping to reduce turn count and improve accuracy.  
- **Memory & Logging Management** – #26522, #26525, #26523 focus on smarter Auto Memory handling, deterministic secret redaction, and better inbox filtering.  
- **Tool & API Limits** – #24246 reports a hard 400‑tool cap; community wants smarter scoping.  
- **Security Hardening** – Multiple PRs (#28898, #28863) emphasize sanitizing environment variables and preventing token leakage.  
- **User‑Facing UX** – #22672, #22598 request clearer sub‑agent trajectory visibility and guidance to avoid destructive commands.

---

### 6. Developer Pain Points  

- **Agent Hangs & Termination Mis‑reporting** – Generalist agent freezes (#21409) and sub‑agents incorrectly report “GOAL” after hitting turn limits (#22323).  
- **Shell Command Stuck State** – Simple commands appear “awaiting input” after finishing (#25166).  
- **Memory Inbox & Auto Memory Bugs** – Low‑signal session retries (#26522), missing redaction (#26525), and silent skipping of invalid patches (#26523).  
- **Tool‑Limit Errors** – CLI crashes with 400‑tool errors (#24246), indicating a need for dynamic tool scoping.  
- **Platform‑Specific Failures** – Wayland browser sub‑agent failures (#21983) and symlinked agent markdown files not being recognized (#20079, #28883).  
- **Inconsistent Configuration** – Settings.json overrides (e.g., `maxTurns`) are ignored by the browser agent (#22267).  

These pain points surface repeatedly in both open issues and recent PRs, indicating priority areas for the next development cycle.  

--- 

*Prepared by the Gemini CLI technical analyst team – 2026‑08‑19.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-08-19

### **Today's Highlights**
The Copilot CLI ecosystem is seeing a major push toward model diversity with the addition of Gemini 3.7 Flash support, alongside significant updates to the sandbox and usage reporting capabilities. However, the community is currently grappling with critical stability issues involving MCP (Model Context Protocol) authentication regressions and sandboxing permission conflicts in version 1.0.81.

---

### **Releases**
**v1.0.81-1**
*   **Model Support:** Added support for **Gemini 3.7 Flash**.
*   **Developer UX:** Added `Ctrl+E` in `/sandbox` to quickly open `settings.json` in your default editor.
*   **Observability:** Introduced per-agent usage metrics in JSON output (`--usage-output-file`) for better auditing.

---

### **Hot Issues**
1.  **[#4390] Missing Organization Models:** Enterprise users report that Claude Sonnet 5/Opus 5 and Kimi K3, despite being enabled via organization policy, remain missing from the CLI catalogue. (10 comments, 7 👍)
2.  **[#4522] Sandbox Policy Overrides:** Users report that v1.0.81-1 forces sandbox mode even when `sandbox.enabled=false` is explicitly set, creating friction for developers with custom environments. (5 👍)
3.  **[#4511] Unreliable AIC Display:** Concerns regarding the accuracy of AI Consumption (AIC) reporting, specifically with Kimi K3, where actual usage appears higher than reported. (1 comment)
4.  **[#4490] Atlassian MCP Auth Regression:** A regression in v1.0.80 has broken OAuth authentication for Atlassian MCP servers due to RFC 8414 mismatch errors. (3 comments)
5.  **[#2904] Custom Agent Reasoning Effort:** Request for the ability to set `reasoning_effort` per agent in `.agent.md` files rather than only via a global CLI flag. (7 comments, 20 👍)
6.  **[#2958] Per-mode Model Config:** Developers are requesting the ability to assign different default models to `plan mode` versus `autopilot mode`. (4 comments, 16 👍)
7.  **[#4524] Restrictive Sandbox:** Reports that the latest enforced-sandbox is overly restrictive, preventing agents from accessing necessary workspace files even when permissions are granted. (2 comments)
8.  **[#4392] MCP Process Leaks:** A significant issue where post-authentication MCP rebuilds leave orphaned `stdio` child processes, leading to resource exhaustion. (2 comments)
9.  **[#3682] BYOK Credential Refresh:** A request for the ability to refresh Bearer/OAuth credentials for "Bring Your Own Key" providers without restarting the CLI. (2 comments, 6 👍)
10. **[#4313] Conversation Navigation:** Users are requesting mouse wheel and PageUp/Down support for scrolling through long conversation histories. (8 comments)

---

### **Key PR Progress**
*   **[#3163] Monitor Implementation:** Progress on monitoring/runner initialization for specific task automation.

---

### **Feature Request Trends**
*   **Model Granularity:** Moving away from global configurations toward per-agent and per-mode (Plan vs. Autopilot) model and reasoning effort settings.
*   **Enhanced UX/Navigation:** Increased demand for terminal-based UI improvements, such as history scrolling and advanced plugin marketplace filtering/searching.
*   **Advanced MCP Integration:** Developing deeper intelligence for MCP, including better handling of `structuredContent` and improved OAuth bridging between the web app and CLI.

---

### **Developer Pain Points**
*   **Sandbox Friction:** There is a recurring conflict between the "enforced sandbox" security model and the practical need for agents to access local files and run specific runtimes (like JVM/Java).
*   **MCP Stability:** The transition to more complex MCP servers is causing authentication regressions and process-management issues (leaked child processes).
*   **Configuration "Shadowing":** Developers are frustrated by settings that appear to be applied (like `allowed_directories`) but are ignored by certain sub-processes or shell commands.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑08‑19**  
*Source: github.com/MoonshotAI/kimi-cli*  

---  

### 1. Today's Highlights  
- No new releases were published in the last 24 h.  
- Two freshly‑opened issues highlight a UI rendering regression for non‑Kimi (OpenAI‑compatible) providers and the public release of a quantitative‑strategy benchmark using K3 + Kimi Code.  
- One PR was closed (SSH‑failure logging) and a new “Dev/knowledge plane” PR is awaiting review, indicating ongoing work on observability and developer documentation.  

---  

### 2. Releases  
*No new versions were released in the past 24 h.*  

---  

### 3. Hot Issues  
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#2607](https://github.com/MoonshotAI/kimi-cli/issues/2607) | **Web UI: assistant messages re‑render as one‑fragment‑per‑line after tab switch/reload for non‑Kimi providers** | Breaks readability of chat sessions when using custom OpenAI‑compatible endpoints, forcing users to reload or avoid tab switches. | 0 👍, 1 comment – early discussion; users are reporting the regression and asking for a fix. |
| [#2608](https://github.com/MoonshotAI/kimi-cli/issues/2608) | **Benchmark K3 + Kimi Code on out‑of‑sample quant strategy generation – full report open‑sourced** | Shares a real‑world, performance‑focused case study that can help the community evaluate Kimi Code for specialized workloads (quant trading). | 0 👍, 0 comments – just posted; likely to attract interest from the quant‑AI niche. |

*Only two issues were updated in the last day; both are listed above.*  

---  

### 4. Key PR Progress  
| # | PR | Status | Summary |
|---|----|--------|---------|
| [#848](https://github.com/MoonshotAI/kimi-cli/pull/848) | **fix(kaos): log SSH failures when enabled** | CLOSED (updated 2026‑08‑18) | Adds explicit logging for SSH connection failures when the feature is turned on, improving debugging for remote‑execution workflows. |
| [#2606](https://github.com/MoonshotAI/kimi-cli/pull/2606) | **Dev/knowledge plane** | OPEN (created 2026‑08‑18) | Proposes a new documentation/knowledge‑sharing layer (e.g., inline guides, FAQs) to help developers onboard and troubleshoot Kimi Code CLI more efficiently. No reviews yet. |  

---  

### 5. Feature Request Trends  
- **Improved UI stability for third‑party providers** – consistent rendering of assistant messages after navigation or reload (see #2607).  
- **Enhanced observability** – request for more granular logging (SSH failures already addressed) and telemetry around provider interactions.  
- **Developer‑centric documentation** – the “Dev/knowledge plane” PR signals demand for embedded guides, examples, and a searchable knowledge base within the CLI/web UI.  

---  

### 6. Developer Pain Points  
- **Session UI glitches** – users experience fragmented message rendering when switching tabs or reloading the web UI with non‑Kimi providers, disrupting workflow.  
- **Limited diagnostic information** – prior to the closed PR, SSH‑related errors were silent, making remote‑execution debugging difficult.  
- **Onboarding friction** – developers repeatedly ask for better in‑tool documentation and example snippets, motivating the knowledge‑plane initiative.  

---  

*Prepared for the Kimi Code CLI community – stay tuned for upcoming fixes and documentation improvements.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-19

## 1. Today's Highlights
The Qwen Code team shipped a new nightly release alongside a live-session registry feature and a `qwen sessions ps` command for better process management. Concurrently, the community is actively shaping the roadmap with new RFCs for cross-session messaging and a shared "agent board" to coordinate work across independently started agents.

## 2. Releases
- **v0.21.11-nightly.20260818.259951c53e** introduces a live-session registry and the `qwen sessions ps` command, allowing developers to inspect active sessions directly from the CLI. This release also incorporates performance improvements and bug fixes derived from recent pull requests. ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260818.259951c53e))

## 3. Hot Issues
Here are 10 noteworthy issues that are shaping the community's focus:

1.  **#656 — Persistent API Error 400**: A long-standing bug where every request fails with an `InternalError.Algo.InvalidParameter` error. The community is frustrated by the 12-16 hour outage without config changes. ([Issue](https://github.com/QwenLM/qwen-code/issues/656))
2.  **#9194 — Test-Pin Gaps**: A request to close gaps in the test suite where mutations in production code still pass tests, highlighting the need for more robust test contracts. ([Issue](https://github.com/QwenLM/qwen-code/issues/9194))
3.  **#8718 — Native Session Coordination**: An RFC for adding an explicit coordination path for multiple independent Qwen Code sessions, allowing a leader to dispatch workers and collect results. ([Issue](https://github.com/QwenLM/qwen-code/issues/8718))
4.  **#8316 — Prompt Not Restored on Cancel**: A UI bug where cancelling a prompt with `ctrl+c` clears the input box, forcing users to retype. ([Issue](https://github.com/QwenLM/qwen-code/issues/8316))
5.  **#7040 — Reliable Auto-Memory Recall**: An RFC focused on improving the timing, quality, and telemetry of the auto-memory feature, crucial for long-term context management. ([Issue](https://github.com/QwenLM/qwen-code/issues/7040))
6.  **#9276 — Team Member Message Routing**: A bug where team members' ordinary status messages to the leader are misinterpreted as shutdown requests. ([Issue](https://github.com/QwenLM/qwen-code/issues/9276))
7.  **#9296 — Qwen Autofix Efficiency**: A P1 bug identifying significant inefficiency in the autofix pipeline, where reviews on closed/merged PRs waste runner capacity. ([Issue](https://github.com/QwenLM/qwen-code/issues/9296))
8.  **#8400 — Silent Session Deletion on Windows**: A critical bug in the Desktop app where sessions are silently deleted after a restart if an ACP session load fails due to a path mismatch. ([Issue](https://github.com/QwenLM/qwen-code/issues/8400))
9.  **#8724 — Cross-Session Messaging**: A feature request to allow Qwen Code sessions on the same machine to discover and message each other directly. ([Issue](https://github.com/QwenLM/qwen-code/issues/8724))
10. **#9438 — Ollama User Message Drop**: A P1 bug where the user message is omitted from follow-up requests after a tool call when using an Ollama backend, breaking all tool use. ([Issue](https://github.com/QwenLM/qwen-code/issues/9438))

## 4. Key PR Progress
These 10 pull requests represent significant feature additions and fixes:

1.  **#9402 — Agent Board**: A new feature to share work across independently started agents, moving beyond the leader-worker model. ([PR](https://github.com/QwenLM/qwen-code/pull/9402))
2.  **#9399 — Peer Collaboration Design**: Adds a design document for collaboration between Qwen Code sessions started by different people or at different times. ([PR](https://github.com/QwenLM/qwen-code/pull/9399))
3.  **#9396 — Session Activity Watermark**: Introduces a live-state session activity watermark to improve session management and ordering in the daemon. ([PR](https://github.com/QwenLM/qwen-code/pull/9396))
4.  **#9393 — Web-Shell Goal Controls**: Adopts canonical Goal v3 controls in the WebShell, allowing goals to be managed without routing commands through the model. ([PR](https://github.com/QwenLM/qwen-code/pull/9393))
5.  **#9423 — Image Payload Eviction**: Isolates image payload eviction state to maintain consistency across chat history, outgoing requests, and cached snapshots. ([PR](https://github.com/QwenLM/qwen-code/pull/9423))
6.  **#9389 — Live Model List in Setup**: The setup wizard now recommends models by querying the provider's endpoint in real-time, rather than relying on a frozen list. ([PR](https://github.com/QwenLM/qwen-code/pull/9389))
7.  **#9361 — Scheduled Tasks with Existing Sessions**: Allows creating scheduled tasks that bind to an existing live session instead of minting a new one. ([PR](https://github.com/QwenLM/qwen-code/pull/9361))
8.  **#9331 — Fix /rewind after /compress-fast**: Prevents `/rewind` from dropping conversation history when used after a fast compression. ([PR](https://github.com/QwenLM/qwen-code/pull/9331))
9.  **#9417 — Heredoc Permission Rule Fix**: Fixes a bug where shell commands with heredoc bodies were incorrectly split during permission rule evaluation. ([PR](https://github.com/QwenLM/qwen-code/pull/9417))
10. **#9436 — Duplicate Tool-Call Replay**: Treats duplicate provider tool-call IDs as replays only when the arguments match, preventing incorrect execution of similar calls. ([PR](https://github.com/QwenLM/qwen-code/pull/9436))

## 5. Feature Request Trends
The most-requested feature directions center on **collaboration and coordination**. There is a strong push for native support for multiple independent Qwen Code sessions to communicate and share tasks (`#8718`, `#8724`, `#9402`). Another major trend is **memory and context management**, with RFCs for reliable auto-memory recall (`#7040`) and improvements to the `/export` feature (`#8208`). Finally, there's a desire for **enhanced developer tooling**, including better test robustness (`#9194`) and a flakiness gate for CI (`#9125`).

## 6. Developer Pain Points
Recurring frustrations include **unreliable API backends**, with issues like persistent 400 errors (`#656`) and Ollama-specific message drops (`#9438`) causing significant workflow disruption. Developers also face **fragile state management**, such as sessions silently disappearing on Windows (`#8400`) and context usage indicators not updating after compression (`#6806`). Finally, **tooling and CI efficiency** is a pain point, with concerns over wasted runner capacity in autofix (`#9296`) and the need for better test-suite validation against code mutations (`#9194`).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest - August 19, 2026

## Today's Highlights
The Codewhale v0.9.9 release represents a major milestone, launching the public product with stable npm publishing via trusted publishing mechanisms. Concurrently, significant TUI enhancements are in progress, including repository context visibility improvements, system prompt preservation fixes, and comprehensive documentation localization efforts.

## Releases
**v0.9.9 (Latest)** - Codewhale Public Product Release
- Transition from legacy `deepseek-tui` to `codewhale` brand with lowercase technical identifiers
- Implement trusted publishing for npm releases, eliminating maintainer login requirements
- Fixed critical bugs including narrow-terminal compact-row metrics and bare URL rustdoc warnings
- See details: [#5499](https://github.com/Hmbown/CodeWhale/pull/5499)

## Hot Issues
1. **#5316 EPIC-005: CodeWhale TUI Crate Decomposition** - Structural refactoring epic affecting entire TUI architecture; 7 comments indicate active community interest
2. **#5505 System Prompt Bug** - Critical issue where `/new` command drops system prompts, leaving models without project instructions; 2 comments suggest urgency
3. **#5512 Status Indicator Rendering** - Windows users report missing header status indicators since v0.9.7; 1 comment from affected user
4. **#5508 Continuous Loop Enhancement** - Feature request for infinite turn execution for AI coordination workflows
5. **#5299 Trusted Publishing** - Infrastructure improvement to automate npm releases; 3 comments on CI deployment
6. **#5482 Chinese Documentation** - Comprehensive localization effort for broader user accessibility
7. **#5497 Task Management** - Fix for stuck durable executions and unbounded event growth
8. **#5337 Dictionary Spine Completion** - Web i18n refactor to eliminate code duplication; 5 comments
9. **#5496 CI Job Bounds** - Prevent runaway CI jobs by adding time limits to release workflows
10. **#5437 Status Bar Grammar** - Formalize color syntax and surface repo/worktree state visibility

## Key PR Progress
1. **#5511 Repository Context in Git Chrome** - Enhanced TUI header displays repository/worktree status with branch tracking
2. **#5509 Terminal Window Title Restore** - Reinstated independent `/title` command functionality
3. **#5510 Star History Chart Restoration** - Restored README visualization showing project growth trends
4. **#5506 Command Context Adapters (FEAT-015)** - Dependency injection infrastructure for safe slash-command extraction
5. **#5507 Chinese Docs Tier 1 Completion** - Migrated key documentation to dedicated `docs/zh_hans/` folders
6. **#5491 Approval Persistence** - Session log for approval requests and terminal outcomes before execution
7. **#5404 SSE UTF-8 Fix** - Resolved character corruption in streaming agent text on macOS
8. **#5405 Model-Visible Budgets** - Configurable read/tool-result limits for long-context DeepSeek V4 users
9. **#5494 Auto-Router Timeout** - Made classifier timeout configurable (previously hardcoded at 4s)
10. **#5493 OrcaRouter Billing** - Fixed misclassification as aggregator billing surface

## Feature Request Trends
The community is focused on three primary directions:
- **Workflow Automation**: Continuous loop execution for AI coordination (#5508) and improved task management (#5497)
- **Developer Experience**: Better error visibility, status indicators (#5512), and stable system prompts (#5505)
- **Global Accessibility**: Comprehensive Chinese documentation localization (#5482) and improved i18n consistency (#5337)

## Developer Pain Points
1. **Release Management**: Manual npm publication requiring 2FA/security keys (#5299)
2. **TUI Rendering Issues**: Broken status indicators since v0.9.7 (#5512) and missing system prompts (#5505)
3. **Documentation Accessibility**: Language barriers for Chinese users due to English-only docs (#5482)
4. **CI Reliability**: Unbounded job timeouts risking 6-hour delays on failed runners (#5496)
5. **State Management**: Approval workflow instability and missing persistence (#5491)
6. **Performance**: Inefficient polling in task execution and potential unbounded event growth (#5497)

The community appears to be in a transition phase, moving from experimental features to production stability while expanding global reach through comprehensive localization and improved developer tooling.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*