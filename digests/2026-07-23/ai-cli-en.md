# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-23 01:54 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Comparison Report — 2026-07-23

---

## 1. Ecosystem Overview

The AI CLI landscape is **fragmented but converging on core patterns**: all major tools now ship background/sub-agent architectures, structured task APIs, and plugin/skill ecosystems. Releases are rapid (nightly/preview cadences dominate), yet **reliability gaps persist**—permission systems, MCP/process management, and cross-platform stability remain top pain points across vendors. Enterprise readiness (SSO, billing transparency, audit trails) is emerging as a key differentiator. Community energy is high, but **documentation debt and schema rigidity** (especially for third-party providers) are slowing adoption beyond first-party ecosystems.

---

## 2. Activity Comparison (Last 24h)

| Tool | Releases | Hot Issues (Top 10) | Key PRs | Top Issue Engagement |
|------|----------|---------------------|---------|----------------------|
| **Claude Code** | 1 (v2.1.218) | 10 | 10 | #80002: 56 💬 / 25 👍 |
| **OpenAI Codex** | 4 α (rust-v0.146.0-α.1–4) | 10 | 10 | #28969: 53 💬 / 151 👍 |
| **Gemini CLI** | 3 (nightly + preview + stable) | 10 | 10 | #22323: 12 💬 / 2 👍 |
| **GitHub Copilot CLI** | 3 (v1.0.74-1/2/3) | 10 | 1 | #4016: 5 💬 / 4 👍 |
| **Kimi Code** | 0 | 4 | 3 | #2534: Critical blocker |
| **OpenCode** | 0 (verification videos only) | 10 (open) | 10 | #6231: 28 💬 / 185 👍 |
| **Pi** | 0 | 10 | 10 | #6476: 12 💬 |
| **DeepSeek TUI** | 0 (v0.9.1 converging) | 10 | 10 (closed) | #2870: 17 💬 |
| **Qwen Code** | — | — | — | No digest data |

**Observations:**  
- **Gemini & Copilot CLI** ship the most frequent user-facing releases (3 each).  
- **OpenCode** leads in community engagement per issue (185 👍 on #6231).  
- **Codex** has the highest single-issue comment volume (53 on auto-resolve timeout).  
- **Kimi, Pi, DeepSeek** show focused but lower-volume activity.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Requesting | Specific Needs |
|-------------|------------------|----------------|
| **Reliable Permission/Bypass Controls** | Claude Code, Codex, Copilot CLI, Pi | Working `bypassPermissions` (Claude #39523, 9mo), domain approval UI (Claude #50842), BYOK provider support (Copilot #4016), abortable retries (Pi #6911/6980) |
| **Sub-Agent/Background Task Management** | All 8 tools | Lifecycle APIs (create/dismiss/list), mid-task injection/steering (Claude #71726), visibility/sharing (Gemini #22598), skill pack orchestration (DeepSeek #4691/4695) |
| **MCP / Tool-Protocol Stability** | Claude, Codex, Copilot, Pi, Kimi | Process leaks (Codex #12491/26984), stdio fd leaks, schema validation (Kimi #2531), compaction failures (Pi #6768), remote control crashes (Claude #78933) |
| **Cross-Platform Parity (Win/macOS/Linux)** | Codex, Copilot, Kimi, Pi, DeepSeek | WSL path issues (Codex #16815), Windows cold-start hangs (Copilot #4165, Codex #34025), macOS Dropbox/FileProvider (DeepSeek #4085), Windows PATH overwrite (DeepSeek #4685), Unicode/GBK (Kimi #2532) |
| **Model/Provider Abstraction & Cost Visibility** | OpenCode, Copilot, Pi, Codex | Auto-discovery from OpenAI-compatible endpoints (OpenCode #6231), configurable model pools (Copilot #4218), per-sub-agent billing (Copilot #4224), provider cost reporting (Pi #6881) |
| **Plugin/Skill Ecosystem & Spec-First Dev** | Claude, Gemini, DeepSeek, Copilot | Account profiles (Claude #80326), Twilight spec-first (Claude #80008), unified `/skills` manager (DeepSeek #4679), custom agent invocation (Copilot #4208) |
| **Observability & Debugging** | Pi, Gemini, Codex, Copilot | Abortable retries (Pi #6980), crash-log paths respecting env vars (Pi #6958), eval coverage (Gemini #28169), telemetry billing attrs (Copilot #4224) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------------|-----------|----------|-----|--------------|
| **Primary Focus** | Enterprise-grade reliability, permissions, accessibility | Rust-based performance, MCP ecosystem, VS Code integration | Google Cloud integration, eval-driven quality, AST-aware tooling | GitHub-native workflow, enterprise billing, sandbox safety | Moonshot/Kimi provider optimization, schema compliance | OpenAI-compatible provider agnosticism, self-hosted flexibility | Multi-provider orchestration, TUI/UX polish, hacker ergonomics | Skill-pack productization, sub-agent UI, Chinese provider support |
| **Target User** | Professional/enterprise devs, accessibility-conscious | Rust/CLI power users, VS Code extension users | Google Cloud shops, eval-heavy teams | GitHub/GitHub Enterprise orgs | Moonshot ecosystem users, China-region devs | Self-hosters, multi-provider users, OSS contributors | Polyglot LLM users, terminal-first hackers | Chinese-market devs, skill-pack consumers |
| **Technical Approach** | TypeScript/Node, background sub-agents, screen-reader support | Rust CLI + TypeScript app-server, MCP-centric | TypeScript/Node, heavy eval infra, AST parsing | TypeScript/Node/Ink, sandboxed sessions, ACP protocol | TypeScript/Node, strict schema validation | Go + TypeScript, provider-agnostic core | TypeScript/Node, provider abstraction layer, TUI | Rust + TypeScript, skill-pack bundling, Gherkin E2E |
| **Maturity Signals** | v2.1.x, long-standing bugs (9mo), accessibility investment | α releases, critical macOS leak, WSL regressions | v0.53 preview, nightly cadence, security fix (GHSA) | v1.0.74, few PRs/day, enterprise billing gaps | No recent release, critical 3rd-party breakage | Pre-1.0, high community engagement, no releases | v0.80.x, regression in timeout, active PR flow | v0.9.1 RC, 10+ PRs/day, installer bugs |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **Gemini CLI, DeepSeek TUI, Pi** | 3 releases/24h (Gemini), 10 PRs/day (DeepSeek), 10 PRs/24h (Pi), active feature PRs |
| **High Engagement / Vocal Community** | **OpenCode, Codex, Claude Code** | 185 👍 on single issue (OpenCode), 151 👍 (Codex), 56 comments (Claude), long-tail bugs driving discussion |
| **Enterprise-Driven /stable-track** | **GitHub Copilot CLI, Claude Code** | v1.0.x versioning, enterprise billing asks, accessibility compliance, but low PR velocity (Copilot: 1 PR/24h) |
| **Early / Niche / Provider-Coupled** | **Kimi Code, Qwen Code** | No releases, critical third-party breakage, limited community visibility (Qwen: no digest data) |

**Maturity Ranking (subjective):**  
Claude Code ≈ Copilot CLI > Gemini CLI > Codex > Pi > OpenCode > DeepSeek TUI > Kimi Code > Qwen Code

---

## 6. Trend Signals for Decision-Makers

1. **Sub-Agent Orchestration is the New Baseline** — Every tool now builds background agents, task APIs, and skill packs. **Differentiation shifts to lifecycle UX** (dismiss, inject, share, audit).

2. **MCP/Tool Protocol Fragmentation is a Tax** — Process leaks, schema mismatches, and silent failures appear in **6/8 tools**. Standardization or robust adapter layers will win enterprise trust.

3. **Provider-Agnosticism vs. First-Party Lock-in** — OpenCode and Pi bet on OpenAI-compatible abstraction; Claude, Gemini, Kimi, DeepSeek optimize for their own models. **Hybrid strategies** (Copilot CLI supporting ACP + GitHub models) are emerging.

4. **Windows/macOS Stability is a Blockers** — WSL path bugs, cold-start hangs, FileProvider sandbox issues, Unicode/GBK errors: **cross-platform CI is non-negotiable** for team adoption.

5. **Observability & Cost Governance Rising** — Per-sub-agent billing (Copilot), provider cost reporting (Pi), eval coverage (Gemini), telemetry standards: **FinOps and compliance** are entering CLI requirements.

6. **Documentation Debt is Systemic** — All digests flag missing/outdated docs for new features (permissions, skills, flags, workflows). **Doc-as-code investment** correlates with community retention.

7. **Security Hardening Accelerates** — Gemini shipped a GHSA fix for var-expansion bypass; Pi added abortable retries; Kimi scopes cache keys. **Supply-chain and injection risks** are being treated as P0.

---

**Bottom Line:** The market is **consolidating around a common architecture** (sub-agents + skills + MCP + sandbox), but **execution quality varies sharply**. For teams choosing today:  
- **Enterprise/Compliance** → Claude Code or Copilot CLI (despite bugs, they invest in audit/accessibility)  
- **Multi-Provider/Self-Hosted** → OpenCode or Pi (best abstraction, active communities)  
- **Google/_eval-Heavy** → Gemini CLI (fastest release cadence, eval infra)  
- **China-Region / Skill-Pack Consumers** → DeepSeek TUI or Kimi Code (local provider optimization)  

Watch **MCP stabilization**, **Windows/macOS parity**, and **billing transparency** as the next competitive frontier.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

User Safety: safe

---

**Claude Code Community Digest – 2026‑07‑23**  

---

### 1. Today’s Highlights  
- The latest runtime (v2.1.218) moves `/code-review` into a background sub‑agent and adds screen‑reader announcements for deletions, aiming to keep the conversation clean.  
- Community attention is coalescing around three core pain areas: **broken permission‑bypass mode**, **inconsistent Remote‑Control connectivity**, and **missing or outdated documentation** for newly shipped features.  

---

### 2. Releases  
- **v2.1.218** (released 2026‑07‑22) –  
  * Changed `/code-review` to run as a background sub‑agent, preventing review output from flooding the chat.  
  * Added screen‑reader announcements for deleted text (`Option+Delete`, `Ctrl+W`, `Cmd+Backspace`).  
  * No other version bumps in the last 24 h.  
  [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)

---

### 3. Hot Issues (10 standout reports)  

| # | Title (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#80002** | [**macOS: Claude Desktop never dispatches tools/call to the first‑party Filesystem extension**] | Prevents any file‑system tool calls from reaching the extension, breaking workflows that rely on `tools/list`/`tools/call`. | 56 comments, 25 👍 – high priority for macOS users. |
| **#39523** | [**Bypass permissions mode is fundamentally broken — 9‑month trail, 12+ duplicates, no resolution**] | The `bypassPermissions` flag never actually bypasses permissions; reports date back to July 2025. | 33 comments, 18 👍 – a long‑standing meta‑bug that blocks many security‑related use‑cases. |
| **#50842** | [**mcp__Claude_in_Chrome__navigate silently denies non‑pre‑approved domains**] | Chrome‑MCP navigation stops without user‑visible approval, leaving silent failures. | 13 comments, 6 👍 – impacts web‑based automation. |
| **#71726** | [**Desktop app: inject queued messages mid‑task between tool calls (CLI steering parity)**] | Mirrors the smooth “steering” experience of the CLI; desktop users currently cannot interrupt a running task. | 9 comments, 16 👍 – strong demand for parity. |
| **#78933** | [**Remote Control never connects: “Cannot read properties of undefined (reading 'session_url')**] | Remote‑Control command crashes on connect/disconnect after sleep/resume cycles. | 8 comments, 0 👍 – blocks remote‑execution workflows. |
| **#66202** | [**[enhancement] Let me mark an agent session as completed / dismiss it from the agents view**] | Users need a way to cleanly close stuck “Ready for review” or “Needs input” agents. | 2 comments, 9 👍 – high 👍 ratio despite few comments. |
| **#80213** | [**Structured Task tools (TaskCreate/TaskList/TaskGet/TaskUpdate) unavailable in a top‑level CLI session**] | Structured task APIs regressed for pure CLI sessions despite `CLAUDE_CODE_ENABLE_TASKS=true`. | 2 comments, 1 👍 – affects automation pipelines. |
| **#50894** *(closed)* | [**Focus mode hides all assistant text emitted between tool calls**] | Even substantive assistant replies are hidden, defeating the purpose of “focus”. | 5 comments, 4 👍 – shows ongoing UX confusion. |
| **#80404** | [**Event‑loop starvation causing ~200 % CPU spin and input lag after hibernate/resume**] | After sleep/resume the libuv loop gets stuck, spiking CPU until self‑termination. | 0 comments, 0 👍 – performance regression that can crash sessions. |
| **#80399** | [**Model hangs during browser automation with silent token consumption and garbage output on interrupt**] | Chrome automation can lock the model, consume tokens silently, and output malformed “court” spam after interrupt. | 0 comments, 0 👍 – a serious reliability issue for web‑MCP workflows. |

---

### 4. Key PR Progress (10 notable pull requests)  

| # | Title (link) | Summary of change |
|---|--------------|-------------------|
| **#80326** | [**Add account profiles plugin**] | Experimental `account-profiles` plugin to manage isolated `CLAUDE_CONFIG_DIR` launch environments (personal, work, client accounts). |
| **#80008** | [**Add twilight plugin: spec‑first design/implement skills with a durable focus stack**] | Proof‑of‑concept plugin framework that demonstrates a design‑implement‑focus workflow for skill creation. |
| **#80353** | [**docs(gcp): stop on checksum mismatch**] | GCP gateway now aborts deployment when a binary’s checksum fails, preserving cleanup semantics. |
| **#80241** | [**fix: [BUG] Console scrolling top of history when claude add text to the console**] | Prevents the console from jumping to the top after each line added, improving readability. |
| **#80196** | [**fix: [Bug] Auto‑compact never triggers despite statusline reporting "100% context used"**] | Aligns auto‑compact logic with the reported context‑usage metric. |
| **#80195** | [**fix: [Bug] Instantly hitting usage limits with Max subscription**] | Adjusts quota enforcement to prevent immediate exhaustion after subscription upgrade. |
| **#80112** | [**Make devcontainer firewall init resilient to DNS resolution failures**] | Hardens firewall bootstrap script so a single DNS timeout no longer aborts the whole init. |
| **#80229** | [**docs: fix 1 broken link(s) via archive.org**] | Repairs an outbound link using a Wayback snapshot. |
| **#80294** | [**docs: fix 1 broken link(s) via archive.org**] | Same as above – link remediation via archived snapshot. |
| **#18217** *(closed)* | [**feat(plugins): add /planwith command for inline plan mode prompts**] | Adds `/planwith` to accept inline planning arguments, reducing the two‑step `/plan` workflow. |

---

### 5. Feature Request Trends  

- **Permission & Bypass Controls** – A persistent request for a reliable `bypassPermissions` implementation and clearer UI for domain approvals in Chrome‑MCP.  
- **Agent Lifecycle Management** – Ability to **explicitly dismiss or complete background agents** and to **inject messages mid‑task** (CLI steering parity).  
- **Structured Task Exposure** – Wider availability of `Task*` and `Todo*` APIs across CLI and desktop sessions, especially when the `todoFeatureEnabled` flag is true.  
- **Documentation Completeness** – Multiple PRs and issues flag missing references for:
  - Accepted string values for boolean front‑matter.  
  - Background execution of `context: fork`.  
  - Colon‑restricted local agent naming.  
  - The need to **explicitly invoke `/deep-research`**.  
  - Fast‑mode state changes when model switching occurs.  
- **Performance & Stability** – Requests for **event‑loop safety after sleep/resume**, **preventing unwanted console scrolling**, and **robust handling of JSON‑schema validation**.  
- **Plugin Ecosystem** – Growing interest in **account‑profile isolation** and **twilight‑style spec‑first skill development**.

---

### 6. Developer Pain Points  

- **Broken Permission Bypass** – `bypassPermissions` has been reported broken for nine months across multiple versions, leaving security‑sensitive workflows unavailable.  
- **Inconsistent Remote‑Control Behavior** – Commands fail after sleep/resume and sometimes never connect, causing silent crashes (`session_url` undefined).  
- **UI/UX Friction** – Focus mode unintentionally hides substantive assistant output; Cmd + N on macOS opens a new Terminal instead of a new session; console scroll jumps to the top on each text insertion.  
- **Tool‑Chain Gaps** – Structured task APIs intermittently disappear in top‑level CLI sessions; filesystem extension dispatches fail on macOS, breaking file‑based automation.  
- **Performance Degradation** – Event‑loop starvation after hibernate/resume leads to 200 % CPU spin and eventual session termination.  
- **Documentation Gaps** – Numerous missing or outdated doc pages around permissions, skill front‑matter, sub‑agent naming, and workflow invocation, forcing developers to infer behavior from code or issue discussions.  

---

*All issues and PRs are tracked on GitHub; links above point directly to the respective discussion threads.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026-07-23**  
*Generated from GitHub data for developers and technical analysts.*

---

### 1. **Today’s Highlights**  
- **rust-v0.146.0-alpha.4** and earlier alpha releases for the Rust CLI were published in the last 24 hours, though no detailed changelog is provided.  
- **PR #34850** disables image generation for Free-tier accounts, while **PR #34849** introduces caching of remote plugin catalogs to improve performance.  
- **Issue #12491** (1300+ zombie processes, 37GB memory leak in Codex.app) remains a critical concern for macOS users, with no recent updates despite its severity.  

---

### 2. **Releases**  
- **rust-v0.146.0-alpha.1** to **rust-v0.146.0-alpha.4**: Pre-release versions of the Rust-based Codex CLI. No detailed release notes are available in the provided data, but these updates likely include incremental improvements and bug fixes for the CLI.  

---

### 3. **Hot Issues**  
1. **[#28969](https://github.com/openai/codex/issues/28969)** – *Auto-resolve timeout setting*: A high-comment issue (53 comments, 151 likes) requesting a toggle to disable the 60-second auto-resolve behavior for user prompts. Critical for workflows requiring extended deliberation.  
2. **[#12491](https://github.com/openai/codex/issues/12491)** – *MCP zombie processes/memory leak*: 27 comments and 5 likes, but no resolution. Affects macOS users running Codex.app GUI with MCP tools (e.g., `xcodebuildmcp`, `chrome-devtools-mcp`).  
3. **[#21639](https://github.com/openai/codex/issues/21639)** – *Hooks stopped working post-update*: 23 comments and 6 likes. Regression in Codex Desktop 26.506.21252 impacting macOS users.  
4. **[#16815](https://github.com/openai/codex/issues/16815)** – *WSL agent mode fails on Windows*: 22 comments and 13 likes. `AbsolutePathBuf` deserialization error in WSL environments.  
5. **[#10599](https://github.com/openai/codex/issues/10599)** – *Worktree location configuration*: 16 comments and 66 likes. Users want control over Git worktree directories in Codex macOS app.  
6. **[#27597](https://github.com/openai/codex/issues/27597)** – *VS Code Remote-SSH extension fails*: 16 comments. CLI works, but the IDE extension does not load in remote environments.  
7. **[#26984](https://github.com/openai/codex/issues/26984)** – *MCP stdio servers leak file descriptors*: 14 comments. Cumulative `EMFILE` errors due to orphaned processes.  
8. **[#23200](https://github.com/openai/codex/issues/23200)** – *Headless Linux support for Codex mobile*: 13 comments and 42 likes. Users want remote Linux hosts to work without desktop app dependency.  
9. **[#27458](https://github.com/openai/codex/issues/27458)** – *CLI timeout during user input*: 12 comments and 43 likes. Affects Windows WSL users.  
10. **[#34025](https://github.com/openai/codex/issues/34025)** – *Windows cold launch freezes PC*: 7 comments. 300+ `taskkill.exe`/`conhost.exe` processes spawn on startup.  

---

### 4. **Key PR Progress**  
1. **[#34852](https://github.com/openai/codex/pull/34852)** – *Wake sleeping threads for queued agent mail*: Ensures durable sleeps resume when agent work arrives.  
2. **[#34851](https://github.com/openai/codex/pull/34851)** – *Batch metadata for plugin app summaries*: Uses batch API for plugin metadata, improving performance.  
3. **[#34850](https://github.com/openai/codex/pull/34850)** – *Disable image generation for Free accounts*: Restricts image tools to paid tiers.  
4. **[#34849](https://github.com/openai/codex/pull/34849)** – *Cache remote plugin catalogs*: 3-hour TTL caching for global/user/workspace scopes.  
5. **[#34847](https://github.com/openai/codex/pull/34847)** – *Guardian review model limits*: Clears context window/compaction overrides to match selected models.  
6. **[#34846](https://github.com/openai/codex/pull/34846)** – *Opt-in web search for custom providers*: Adds `supports_standalone_web_search` flag for providers.  
7. **[#34845](https://github.com/openai/codex/pull/34845)** – *Track multi-agent mode in world state*: Persists multi-agent instructions across history changes.  
8. **[#34844](https://github.com/openai/codex/pull/34844)** – *Remove first-party app metadata*: Simplifies app-server v2 protocol.  
9. **[#34840](https://github.com/openai/codex/pull/34840)** – *Thread pinning in app server*: Threads can now be pinned/unpinned via `thread/metadata/update`.  
10. **[#34839](https://github.com/openai/codex/pull/34839)** – *Preserve user input during MCP interruption*: Prevents loss of input when MCP startup is interrupted.  

---

### 5. **Feature Request Trends**  
- **Remote/Linux support**: Multiple issues (#23200, #27597) seek headless Linux compatibility and remote IDE extension support.  
- **Worktree customization**: #10599 highlights demand for configurable Git worktree paths.  
- **Session persistence**: #26227 and #34632 show interest in preserving side chats and iOS remote turns.  
- **Rate-limit transparency**: #32791 requests clearer display of token/time limits for Plus accounts.  

---

### 6. **Developer Pain Points**  
- **Windows instability**: Repeated issues (#16815, #22428, #34025, #34841) involve WSL errors, sandbox crashes, and resource exhaustion.  
- **MCP process leaks**: #12491, #26984, and #17574 underscore critical resource leaks in MCP and subagent workflows.  
- **IDE extension limitations**: #27597 and #29122 highlight broken Remote-SSH support and prerelease CLI conflicts.  
- **App-server regressions**: Frequent issues with session indexing (#30385, #33321), history loading, and background updates.  
- **Authentication failures**: #26764 reports token exchange errors on Windows.  

--- 

*End of Digest*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Today's Highlights**  
The Gemini‑CLI project shipped three nightly/preview releases in the last 24 h, delivering security hardening, LLM‑triage orchestration, and a new eval‑coverage command. Community activity remains high, with dozens of open bugs and feature requests centered on sub‑agent reliability, agent‑tool integration, and code‑base investigation capabilities.  

**Releases**  
| Version | Highlights |
|---------|------------|
| **v0.52.0‑nightly.20260723.g9681621c6** | • Fixes sequential verification of cached credentials and restores the `GOOGLE_APPLICATION_CREDENTIALS` fallback. <br>• Adds an `eval:coverage` command to report built‑in eval coverage. |
| **v0.53.0‑preview.0** | • Groups cancelled tool responses and coalesces consecutive role messages to avoid 400 Bad Request errors. <br>• Introduces an LLM triage orchestrator and container‑build support for caretaker‑triage. |
| **v0.52.0** | • Refactors CI configuration exclusion from workspace context. <br>• Adds foundational modules for the caretaker‑triage worker. |

**Hot Issues** *(10 noteworthy items)*  

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| 1 | **[#22323]** Subagent reports “GOAL” success while hitting MAX_TURNS | Leads to misleading success status; sub‑agent stops early, hiding interruptions. | 12 comments, 2 👍 – high priority (p1) and ongoing discussion. <https://github.com/google-gemini/gemini-cli/issues/22323> |
| 2 | **[#21409]** Generalist agent hangs indefinitely | Prevents any progress when the agent defers to the generalist; users must cancel after hours. | 8 comments, 8 👍 – top‑voted bug (p1). <https://github.com/google-gemini/gemini-cli/issues/21409> |
| 3 | **[#24353]** Robust component‑level evaluations | Introduces systematic behavioral evals; essential for measuring CLI reliability. | 7 comments, 0 👍 – p1 epic, driving evaluation roadmap. <https://github.com/google-gemini/gemini-cli/issues/24353> |
| 4 | **[#22745]** AST‑aware file reads, search & mapping | Could cut token waste and turn count by parsing abstract syntax trees. | 7 comments, 1 👍 – p2 feature request. <https://github.com/google-gemini/gemini-cli/issues/22745> |
| 5 | **[#21968]** Gemini rarely uses custom skills/sub‑agents | Limits reuse of domain‑specific capabilities (e.g., git, gradle). | 6 comments, 0 👍 – p2 bug, frequent user complaint. <https://github.com/google-gemini/gemini-cli/issues/21968> |
| 6 | **[#26522]** Stop Auto Memory from retrying low‑signal sessions indefinitely | Prevents wasted resources and stale data in the memory index. | 5 comments, 0 👍 – p2, high‑impact reliability issue. <https://github.com/google-gemini/gemini-cli/issues/26522> |
| 7 | **[#25166]** Shell command execution stalls with “Waiting input” after completion | Breaks workflow; commands appear active though they finished. | 4 comments, 3 👍 – p1, reproducible. <https://github.com/google-gemini/gemini-cli/issues/25166> |
| 8 | **[#22267]** Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`) | Configuration is silently discarded, causing unexpected turn limits. | 3 comments, 0 👍 – p2 bug, affects browser usage. <https://github.com/google-gemini/gemini-cli/issues/22267> |
| 9 | **[#24246]** 400 error when >128 tools are available | API limit causes abrupt failures; users expect smarter tool scoping. | 3 comments, 0 👍 – p2, performance‑critical. <https://github.com/google-gemini/gemini-cli/issues/24246> |
|10| **[#22598]** Make subagent trajectory visible via `/chat share` | Improves debugging and evaluation of sub‑agent behavior. | 2 comments, 1 👍 – p2 enhancement request. <https://github.com/google-gemini/gemini-cli/issues/22598> |

**Key PR Progress** *(10 important PRs)*  

| # | Title | What it delivers | Link |
|---|-------|------------------|------|
| 1 | **[#28403]** fix(core): block `$VAR` and `${VAR}` expansion bypass | Hardens security by tightening variable‑expansion checks (GHSA‑wpqr‑6v78‑jr5g). | <https://github.com/google-gemini/gemini-cli/pull/28403> |
| 2 | **[#28447]** docs(get‑started): Windows PowerShell troubleshooting | Provides concrete steps for PowerShell installation issues, improving onboarding. | <https://github.com/google-gemini/gemini-cli/pull/28447> |
| 3 | **[#28509]** fix(core): filter out thought parts from `getHistoryTurns` | Prevents thought‑leakage when context management is disabled, cleaning API responses. | <https://github.com/google-gemini/gemini-cli/pull/28509> |
| 4 | **[#28469]** fix(core): rotate session ID on model fallback | Eliminates stateful API errors when falling back to `gemini-2.5-flash`. | <https://github.com/google-gemini/gemini-cli/pull/28469> |
| 5 | **[#28485]** fix(cli): add `gemini-3.5-flash` to model selector | Makes the `gemini-3.5-flash` model discoverable for all users. | <https://github.com/google-gemini/gemini-cli/pull/28485> |
| 6 | **[#28024]** chore(deps): bump `@opentelemetry/core` to 2.8.0 | Updates a core telemetry dependency to get bug‑fixes and new features. | <https://github.com/google-gemini/gemini-cli/pull/28024> |
| 7 | **[#28169]** feat(evals): add `eval:coverage` command | Implements a new CLI command to report coverage of built‑in evals. | <https://github.com/google-gemini/gemini-cli/pull/28169> |
| 8 | **[#28431]** feat(pr‑generator‑infra): Cloud Run job, Workflows, Dockerfile | Sets up the containerized pipeline infrastructure for SSR code generation. | <https://github.com/google-gemini/gemini-cli/pull/28431> |
| 9 | **[#28446]** fix(auth): use native `fetch` for OAuth token exchange | Resolves “Premature close” errors on headless VPSes. | <https://github.com/google-gemini/gemini-cli/pull/28446> |
|10| **[#28511]** chore(release): bump version to nightly | Automates version bump for the nightly release (v0.52.0‑nightly). | <https://github.com/google-gemini/gemini-cli/pull/28511> |

**Feature Request Trends**  
- **Sub‑agent orchestration & visibility** – multiple issues (#22323, #21409, #22598, #20195) ask for better handling of MAX_TURNS, reliable sub‑agent usage, and easy sharing of sub‑agent trajectories.  
- **AST‑aware code‑base tools** – #22745 and #22746 request precise file reads, search, and mapping via abstract syntax trees to reduce token waste and improve efficiency.  
- **Agent reliability & configuration** – #22267, #21983, and #22093 highlight bugs where the Browser Agent ignores settings or fails on Wayland, and where sub‑agents run without permission.  
- **Memory & Auto‑Memory management** – #26522, #26525, #26523, and #24935 focus on retry logic, deterministic redaction, handling of invalid patches, and memory corruption after external editors.  
- **Tool‑limit & API stability** – #24246 and #25166 surface 400 errors and stuck shell commands, indicating a need for smarter tool scoping and robust command execution.  

**Developer Pain Points**  
- **Generalist agent hangs** – frequent reports of indefinite waits when the agent defers to the generalist (Issue #21409).  
- **Sub‑agent usage** – users note that custom skills and sub‑agents are under‑utilized unless explicitly instructed (Issue #21968, #20195).  
- **Browser agent quirks** – Wayland failures and ignored `settings.json` overrides (Issues #21983, #22267) impede reliable UI automation.  
- **Auto Memory reliability** – low‑signal session handling, indefinite retries, and missing deterministic redaction (Issues #26522‑#26525) cause wasted compute and potential data leakage.  
- **Shell command lifecycle** – commands appear “awaiting input” after completion (Issue #25166), breaking workflow continuity.  
- **Tool‑limit enforcement** – the 400‑error threshold (>128 tools) leads to abrupt API failures (Issue #24246), suggesting a need for dynamic tool scoping.  

*All links point to the official Gemini‑CLI repository on GitHub.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑07‑23**

---

### 1. Today’s Highlights
- The CLI has just shipped **v1.0.74‑3** (and its predecessor v1.0.74‑2) with a first‑run splash screen, Gemini‑3.6‑flash support, and a host of session‑hand‑off and multiplexing fixes.  
- Community activity is centered on stability regressions (zombie processes, infinite render loops) and a flurry of **agent‑related** feature requests, especially around credit accounting, custom‑agent invocation, and MCP integration.  

---

### 2. Releases  
- **v1.0.74‑3 / v1.0.74‑2 / v1.0.74‑1** (last 24 h) – *Added*: first‑run splash that lets users opt‑in to the default sandbox and native Gemini‑3.6‑flash model support.  
- *Improved*: session‑switching no longer leaks picker dialogs; `$` shortcut now opens an interactive shell; multiplexed session “open dialog” behaviour tightened.  
- No other version bumps were published in the last day.

**PR #3163** – A Windows‑focused monitor/notification tweak for issues #2591, #3561, and #3559 (still under review).  

[#3163 PR](https://github.com/github/copilot-cli/pull/3163)

---

### 3. Hot Issues (top 10 by comment count & impact)

| # | Title (link) | Why it matters | Community pulse |
|---|--------------|----------------|-----------------|
| 1 | **[#4016 – BYOK provider rejected in `--acp` mode](https://github.com/github/copilot-cli/issues/4016)** | Breaks login‑free custom providers when `--acp` is used; a regression from earlier fixes. | 5 comments, 4 👍 – strong frustration from power‑user maintainers. |
| 2 | **[#4163 – Zombie subprocess accumulation on Linux](https://github.com/github/copilot-cli/issues/4163)** | Subprocesses linger as zombies, leaking PID resources (≈2/min). | 3 comments, 2 👍 – reproducibility issue for long‑running sessions. |
| 3 | **[#4161 – `task_complete` tool lost after autopilot switch](https://github.com/github/copilot-cli/issues/4161)** | Regression of earlier‑fixed loss of `task_complete` in autopilot, affecting workflow completion. | 2 comments, 1 👍 – developers relying on autopilot for end‑to‑end tasks. |
| 4 | **[#4165 – `--resume` hangs on Windows cold start](https://github.com/github/copilot-cli/issues/4165)** | Windows users cannot resume sessions without manually killing the process; blocks adoption on corporate desktops. | 2 comments, 1 👍 – affect a large Windows user base. |
| 5 | **[#4212 – Invisible prompt & menu items in tmux](https://github.com/github/copilot-cli/issues/4212)** | UI rendering bug that makes input unusable inside tmux sessions; impacts remote dev setups. | 1 comment, 0 👍 – but a frequent pain point for tmux users. |
| 6 | **[#4206 – Environment footer stuck on “Loading:” (org MCP stalls)](https://github.com/github/copilot-cli/issues/4206)** | UI never stabilises under org‑wide MCP policies, leading to a permanently busy indicator. | 2 comments, 2 👍 – signals reliability concerns for enterprise adopters. |
| 7 | **[#4227 – Xcode ACP custom agent “failed to produce a response”](https://github.com/github/copilot-cli/issues/4227)** | Custom agents configured via `--acp` consistently fail despite correct auth; blocks Xcode integration. | 0 comments, 0 👍 – early‑stage but critical for Apple ecosystem. |
| 8 | **[#4218 – Allow configuring the model pool for Auto mode](https://github.com/github/copilot-cli/issues/4218)** | Users want predictable cost/behaviour; Auto currently picks any model, which can be unpredictable. | 6 👍 – high demand for configurability. |
| 9 | **[#4224 – OTel spans omit billing attributes for subagents](https://github.com/github/copilot-cli/issues/4224)** | Cost accounting under‑reports credits used by subagents, affecting compliance and budgeting. | 0 comments, 0 👍 – important for enterprise billing. |
|10| **[#4223 – Shell command completion never detected inside tmux](https://github.com/github/copilot-cli/issues/4223)** | Commands appear to finish but CLI thinks they are still running, causing hangs. | 0 comments, 0 👍 – a subtle workflow blocker. |

---

### 4. Key PR Progress (top 10 PRs)

| PR | Title | Summary | Link |
|----|-------|---------|------|
| #3163 | **monitor for #2591, #3561, #3559** | Adds a Windows monitor/notification surface for those issues; still under review. | [#3163 PR](https://github.com/github/copilot-cli/pull/3163) |
|  | **(no other open PRs listed in the last 24 h)** | – | – |

*Only one open PR was merged into the last‑day snapshot; broader changes will appear in upcoming releases.*

---

### 5. Feature Request Trends  

- **Custom‑Agent Flexibility**: Requests to invoke specific agents inline (`#4208`), expose more aliases beyond `execute/read/edit/agent` (`#4209`), and expose a configurable model pool for Auto mode (`#4218`).  
- **Transparency & Billing**: Need for detailed AI‑credit breakdown per sub‑agent and inclusion of billing attributes in telemetry (`#4207`, `#4224`).  
- **PDF & Structured Data Handling**: Native PDF reading capability (`#443`) and support for BigInt serialization in MCP responses (`#4211`).  
- **Configuration & Control**: Configurable auto‑compaction thresholds (`#1688`), retry counts for Autopilot errors (`#4210`), and environment‑footer control when MCP handshakes stall (`#4206`).  

The community is gravitating toward **more deterministic agent behavior, finer‑grained configuration, and clearer cost accounting**.

---

### 6. Developer Pain Points  

- **Process Leaks & Zombies**: Subprocesses left as zombies on Linux (`#4163`) and Windows cold‑start hangs on `--resume` (`#4165`).  
- **UI Instability**: Infinite React/Ink render loops causing main pane freezes (`#2802` regression `#4222`) and invisible prompt/menu rendering in tmux (`#4212`).  
- **Authentication Inconsistencies**: `--acp` mode conflicting with BYOK providers (`#4016`) and Xcode ACP custom‑agent failures (`#4227`).  
- **MCP Integration Glitches**: Environment footer stuck on “Loading:” under org‑wide policies (`#4206`) and loss of `task_complete` tool after switching back to autopilot (`#4161`).  
- **Cost Visibility**: Lack of per‑sub‑agent credit breakdown (`#4207`) and missing billing attributes in telemetry (`#4224`), leading to under‑reported usage.  

Addressing these issues will be crucial for maintaining trust among power users, enterprise adopters, and developers working in remote or containerised environments.  

---  

*All links are current as of 2026‑07‑23.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-23

### 1. Today's Highlights
The developer community is currently navigating significant compatibility friction regarding third-party API integrations and complex schema validations. While progress is being made on parameter scoping for prompt caching, new feature requests for multi-agent workflows suggest a shift toward more granular, cost-optimized orchestration.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*   **[Issue #2534] Model API error 400: Unsupported `prompt_cache_key`** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2534))
    *   **Status:** Critical. Users on 3rd party APIs are seeing crashes due to unexpected parameters. This is currently the most active technical blocker for non-official providers.
*   **[Issue #2531] MCP tool names & schemas rejected by Moonshot API** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2531))
    *   **Status:** High Priority. A bug in how JSON schemas (specifically `anyOf` structures) are handled is causing HTTP 400 errors on macOS/arm64 environments.
*   **[Issue #2318] Critical Bug: Incorrect TPD Calculation** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2318))
    *   **Status:** Persistent. A long-standing issue regarding organization rate limit calculations that remains a point of frustration for high-volume users.
*   **[Issue #2532] Windows `kimi web` crash on stdout redirection** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2532))
    *   **Status:** Platform Specific. A `UnicodeEncodeError` (GBK) occurs when the startup banner is piped, affecting Windows users in Chinese locales.

### 4. Key PR Progress
*   **[PR #2535] Fix: Scope prompt cache keys to Moonshot APIs** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/2535))
    *   **Summary:** A critical fix to prevent `prompt_cache_key` from being sent to 3rd party endpoints, resolving the regression identified in #2534.
*   **[PR #2524] Fix: Correct replacement count in `StrReplaceFile`** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/2524))
    *   **Summary:** Addresses a logic error where sequential edits were being validated against original file content rather than the current state.
*   **[PR #2530] Fix: Prevent shell blocking on detached child processes** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/2530))
    *   **Summary:** Improves shell reliability by ensuring the CLI doesn't hang indefinitely when a detached process holds open pipes.

### 5. Feature Request Trends
The community is moving toward **Multi-Agent Orchestration**. Specifically, there is a strong demand for **per-agent model selection** (#2533), allowing developers to assign lightweight models to sub-agents for cost-efficient, complex workflows.

### 6. Developer Pain Points
*   **Interoperability & Schema Rigidity:** Developers using non-official/3rd party providers are facing frequent "Validation Errors" due to strict schema requirements and parameter mismatches (e.g., `prompt_cache_key`).
*   **Environment Stability:** Localization issues on Windows (Unicode encoding) and hanging processes in shell commands remain significant hurdles for CLI stability.
*   **Complex Tool Integration:** The friction between MCP (Model Context Protocol) schemas and the Moonshot API's JSON schema requirements is creating a barrier for advanced tool usage.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

We are generating the OpenCode community digest for 2026-07-23 based on the provided GitHub data.

Steps:
1. We have the data for the repository anomalyco/opencode.
2. We are to create a digest with the following sections:
   - Today's Highlights
   - Releases
   - Hot Issues (10 noteworthy Issues)
   - Key PR Progress (10 important PRs)
   - Feature Request Trends
   - Developer Pain Points

Note: The data provided includes:
   - Latest Releases (last 24h): only one item (pr-38252-videos) which is not a version release but verification videos for a PR. So no actual version releases in the last 24h.
   - Latest Issues (updated in last 24h): 50 items, showing top 30 by comment count.
   - Latest Pull Requests (updated in last 24h): 50 items, showing top 20 by comment count.

We must focus on the last 24 hours (from the data's perspective: updated in last 24h).

Let's break down:

**Today's Highlights**: 
   We'll look for the most significant updates in the last 24h. Since there are no version releases, we look at issues and PRs that are gaining traction or are critical.

   From the issues:
   - #6231: Auto-discover models from OpenAI-compatible provider endpoints (28 comments, 185 👍) - very popular and old (created 2025-12-27, updated 2026-07-22). It's a feature request that has been ongoing.
   - #38218: bug(opencode-go): All subscription models return "Request blocked by upstream provider" (22 comments, 5 👍) - created and updated recently (2026-07-22 to 2026-07-23). This is a blocking bug for Go subscribers.
   - #19466: opencode is using CPU for doing nothing! (15 comments, 11 👍) - a performance issue that has been around since March.

   From the PRs:
   - We don't have comment counts for PRs (they show as undefined) but we can look at the ones that are recent and seem important.

   However, note that the PRs list does not show comment counts (all are undefined). So we have to rely on the description and recency.

   Given the data, we can highlight:
   - The persistent issue #6231 (model auto-discovery) is still open and has high engagement.
   - The recent bug #38218 affecting Go subscribers is critical and just appeared.

**Releases**: 
   The only release-like item is "pr-38252-videos: PR #38252 verification videos", which is not a version release. So we omit the Releases section or state that there were no version releases in the last 24h.

**Hot Issues**: 
   We need to pick 10 noteworthy Issues from the list of issues updated in the last 24h (which are the top 30 by comment count provided). We'll choose based on comment count, recency, and impact.

   Let's list the issues with comment count (from the provided top 30):

   #6231: 28 comments, 185 👍
   #38218: 22 comments, 5 👍
   #19466: 15 comments, 11 👍
   #38293: 15 comments, 0 👍 (in Russian, about Go subscription not working)
   #27018: 12 comments, 2 👍 (localserver disconnecting in v1.14.48)
   #37970: 10 comments, 1 👍 (Plan/Build mode missing)
   #18011: 6 comments, 4 👍 (LM Studio shows only 3/9 models)
   #26220: 6 comments, 3 👍 (infinite loop after tool calls)
   ... and then lower comment counts.

   We'll pick the top 10 by comment count (since we have 30, we take the first 10) but note that some are closed? Actually, the list shows status: all are OPEN except a few that are CLOSED? But the section says "Latest Issues (updated in last 24h)" and shows top 30 by comment count. We see some CLOSED in the list (e.g., #13817, #22144, etc.) but they are included because they were updated in the last 24h.

   However, for the digest, we want to focus on open issues that are active. But the instructions say "noteworthy Issues", so we can include both open and closed if they were updated recently and are significant.

   But note: the section is titled "Hot Issues", which typically means active and important. We'll prioritize open issues with high engagement.

   Let's select 10 from the open issues in the list (ignoring closed ones for hot issues? but the problem says "Hot Issues" and the data includes closed ones that were updated). However, the digest is for the community, so we care about what's currently being discussed.

   We'll take the top 10 by comment count from the provided list (which are the top 30 by comment count) and filter to only open issues? Actually, the list shows both open and closed. But the problem says "Latest Issues (updated in last 24h)" and then shows top 30 by comment count. We are to pick 10 noteworthy.

   I'll pick the 10 with the highest comment count from the list, regardless of open/closed, but note that closed issues might not be "hot" anymore. However, if they were updated recently and closed, they might be of interest (e.g., a recent fix). But the digest is for the community digest, so we want to highlight what's currently active.

   Given the instructions, I think we should focus on open issues. Let's check the status in the data:

   The list provided for issues:
     #6231 [OPEN]
     #38218 [OPEN]
     #19466 [OPEN]
     #38293 [OPEN]
     #27018 [OPEN]
     #37970 [OPEN]
     #18011 [OPEN]
     #26220 [OPEN]
     #13817 [CLOSED]
     #34407 [OPEN]
     #22144 [CLOSED]
     ... etc.

   So we can take the first 10 open issues from the list (by comment count) until we have 10.

   The top 10 by comment count (from the list) that are open:

   1. #6231: 28 comments (OPEN)
   2. #38218: 22 comments (OPEN)
   3. #19466: 15 comments (OPEN)
   4. #38293: 15 comments (OPEN) [but in Russian, and 0 👍]
   5. #27018: 12 comments (OPEN)
   6. #37970: 10 comments (OPEN)
   7. #18011: 6 comments (OPEN)
   8. #26220: 6 comments (OPEN)
   9. #34407: 4 comments (OPEN) [but we have #22144 closed at 4 comments, so skip closed]
   10. #32165: 3 comments (OPEN) [but we have #17270 closed at 3 comments, so skip]

   However, note that #38293 is in Russian and has 0 👍, but it's open and has 15 comments. We'll include it because it's about a critical issue (Go subscription not working) and matches the language of some users.

   Alternatively, we can look for issues that are not only high in comment count but also recency and impact.

   Let's list the top 10 open issues by comment count from the provided list (we have to go down the list until we get 10 open ones):

   #6231: 28 -> open
   #38218: 22 -> open
   #19466: 15 -> open
   #38293: 15 -> open
   #27018: 12 -> open
   #37970: 10 -> open
   #18011: 6 -> open
   #26220: 6 -> open
   #34407: 4 -> open (next open after skipping closed ones: #34407 is open, then #22144 is closed so skip, then #17270 closed, then #16028 closed, then #32165 open: 3 comments)
   #32165: 3 -> open

   So the top 10 open issues by comment count are:
     #6231, #38218, #19466, #38293, #27018, #37970, #18011, #26220, #34407, #32165

   But note: #34407 has only 4 comments and #32165 has 3. We might have missed some with higher comment count that are open? Actually, we went in order of the list (which is sorted by comment count descending). The list provided is the top 30 by comment count, so we have the highest comment counts first.

   However, we see that after #26220 (6 comments) the next in the list is #13817 (closed, 5 comments) then #34407 (open, 4 comments) then #22144 (closed, 4 comments) then #17270 (closed, 3 comments) then #16028 (closed, 3 comments) then #32165 (open, 3 comments).

   So the open issues we have in the top 30 by comment count (with their rank in the list) are:
     1: #6231 (28)
     2: #38218 (22)
     3: #19466 (15)
     4: #38293 (15)
     5: #27018 (12)
     6: #37970 (10)
     7: #18011 (6)
     8: #26220 (6)
     9: #34407 (4)  [at position 9 in the open issues we are counting, but in the list it's after some closed]
     10: #32165 (3) [at position 10]

   We'll go with these 10.

   However, note that #38293 is in Russian and might be less accessible to the global community, but it's a real issue affecting users. We'll include it.

   For each, we'll explain why it matters and community reaction (using the comment count and 👍 as indicators).

**Key PR Progress**:
   We have 20 PRs listed (top 20 by comment count, but comment counts are undefined). So we have to rely on the description and recency.

   We'll pick 10 PRs that seem most important based on:
     - Being recent (updated in last 24h)
     - Addressing critical bugs or highly requested features
     - Being from contributors or the core team

   We note that the PRs list does not show comment counts, so we cannot use that. We'll look at the PRs that are marked as closing issues or have clear descriptions.

   Let's scan the PRs:

   #38423: feat(ai): preserve raw finish reasons - seems like a good improvement for AI response handling.
   #38067: fix(session): edge-trigger build-switch reminder - fixes a reminder issue.
   #37732: fix(opencode): surface empty model responses - fixes a bug where empty responses were not handled.
   #38374: fix(ai): handle incomplete responses without reasons - handles incomplete AI responses.
   #38420: feat(opencode): add --no-project-instructions switch - adds a feature for automation.
   #38418: fix:(web) 修复web模式下本地客户端时间早于服务端时间导致的大模型不回复bug - fixes a web mode bug related to time.
   #38397: [contributor] refactor(tui): generate syntax from V2 theme - refactoring TUI theming.
   #38414: [contributor] fix(core): migrate named agent colors - fixes agent color migration.
   #38417: [contributor] fix(ai): preserve OpenAI message phases - preserves message phases for OpenAI.
   #38413: [needs:compliance] docs: add oos to Community Tools section - documentation update.
   #38401: [contributor] fix(core): load dynamic models for generation - fixes dynamic model loading for /api/generate.
   #38395: docs: mention Exa and Parallel as web search backends - documentation update.
   #38408: fix: pr-standards falsely flags v2-based PRs as missing a linked issue - fixes a CI check.
   #38403: [contributor, beta] fix(ui): standardize tooltip delay - UI fix for tooltips.
   #38022: docs(ecosystem): add opencode-hypa plugin - documentation.
   #38406: [needs:issue] fix(core): retry failed location boot instead of caching the failure for the idle TTL - fixes a core issue.
   #38033: docs(readme): add Indonesian language version - documentation.
   #37226: feat(core): per-agent subagent_depth override - feature for agent configuration.
   #33403: [automated-pr-cleanup] feat(run): forward child session events to NDJSON stream - feature for run command.
   #38396: [contributor] docs(tui): add generated V2 theme reference - documentation.

   We need to pick 10. We'll focus on:
     - Bug fixes that address recent high-impact issues (like the time bug in web mode, or the empty model responses)
     - Features that are highly requested (like per-agent subagent_depth)
     - Important refactors or infrastructure

   Let's choose:

   1. #38418: fix web mode time bug (critical for web users)
   2. #37732: fix empty model responses (addresses a bug that might be causing issues)
   3. #38401: fix(core): load dynamic models for generation (important for API usage)
   4. #38420: feat(opencode): add --no-project-instructions switch (useful for automation)
   5. #37226: feat(core): per-agent subagent_depth override (a feature request that allows more control)
   6. #38067: fix(session): edge-trigger build-switch reminder (fixes a reminder issue)
   7. #38395: docs: mention Exa and Parallel as web search backends (documentation, but important for users)
   8. #38408: fix pr-standards for v2-based PRs (improves CI)
   9. #38406: fix(core): retry failed location boot (improves reliability)
   10. #38423: feat(ai): preserve raw finish reasons (improves AI response handling)

   We have to be careful: some PRs are closed (like #38374, #38397) but we are only looking at updated in last 24h and they are open or closed? The list shows:
        #38423: OPEN
        #38067: OPEN
        #37732: OPEN
        #38374: CLOSED
        #38420: OPEN
        #38418: OPEN
        #38397: CLOSED
        #38414: OPEN
        #38417: OPEN
        #38413: OPEN
        #38401: OPEN
        #38395: OPEN
        #38408: OPEN
        #38403: OPEN
        #38022: OPEN
        #38406: OPEN
        #38033: OPEN
        #37226: OPEN
        #33403: CLOSED
        #38396: CLOSED

   We can include closed PRs if they were updated in the last 24h and are important, but for "Key PR Progress", we might want to focus on open ones that are in progress? However, the digest is about what happened in the last 24h, so closed PRs that were merged or closed recently are also progress.

   But note: the section is "Key PR Progress", which implies ongoing work. However, the instructions say: "Pick 10 important PRs, describe features or fixes". So we can include both open and closed if they were updated in the last 24h

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑07‑23**  
*Technical analyst focused on AI developer tools*  

---  

### 1. Today's Highlights  
- A critical regression in **httpIdleTimeoutMs** (v0.80.6) is causing self‑hosted OpenAI‑compatible requests to time‑out after only a few minutes despite user‑configured larger values (#6476).  
- Several usability fixes landed: external‑editor launch speed improved (#6903), crash‑log path now respects `PI_CODING_AGENT_DIR` (#6958), and provider‑side retries are now abortable (#6980).  
- Community interest is growing around **model‑selection ergonomics** (MRU cycling, bracket‑escaped model ids) and **provider‑specific features** (StepFun adapters, Bedrock adaptive‑thinking flag, OpenRouter native OAuth).  

---  

### 2. Releases  
*No new versions were published in the last 24 h.*  

---  

### 3. Hot Issues (Top 10 by community engagement)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#6476](https://github.com/earendil-works/pi/issues/6476) | **httpIdleTimeoutMs regression** – self‑hosted OpenAI‑compatible provider ignores the timeout setting after v0.80.6 upgrade. | Blocks long‑running local LLM workflows (e.g., vLLM) and forces users to downgrade or adjust code. | 12 comments, 0 👍 – active discussion, users confirming impact. |
| [#6686](https://github.com/earendil-works/pi/issues/6686) | **Pi automatically logs out of GitHub** – recurring OAuth token loss across sessions. | Interrupts CI/CD and daily development when Pi loses access to private repos/GitHub Copilot. | 10 comments, 0 👍 – linked to older issue #2725, shows persistence. |
| [#6768](https://github.com/earendil-works/pi/issues/6768) | **Compaction fails with Copilot Enterprise** – OpenAI API returns 421 Misdirected Request when using enterprise‑licensed Copilot. | Prevents context‑compaction for a growing segment of enterprise users, degrading token efficiency. | 8 comments, 8 👍 – notable up‑vote signal of importance. |
| [#6210](https://github.com/earendil-works/pi/issues/6210) | **/scoped-models cannot select model ids containing brackets** – pattern matching fails for ids like `custom/bracketed-model[1m]`. | Limits ability to version‑tag or namespace custom models via the scoped‑models UI. | 8 comments, 0 👍 – recurring request for better escaping/quoting. |
| [#6459](https://github.com/earendil-works/pi/issues/6459) | **Custom keybindings not applied on initial session start** – require `/reload` to activate. | Breaks out‑of‑the‑box ergonomics for power users who rely on personalized key maps. | 7 comments, 0 👍 – indicates friction in onboarding. |
| [#6774](https://github.com/earendil-works/pi/issues/6774) | **Ctrl+G external editor slow when `os.tmpdir()` is crowded** – writes temp file to global tmp dir. | Causes noticeable latency on shared CI runners or dev containers with heavy temp usage. | 7 comments, 0 👍 – users asking for isolated temp sub‑dir. |
| [#6621](https://github.com/earendil-works/pi/issues/6621) | **Prevent accidental cache invalidation due to dynamic system prompt** – system‑prompt changes flush caches too aggressively. | Hurts performance on unified‑memory devices where prefill is already slow. | 6 comments, 1 👍 – highlights need for smarter cache‑key strategy. |
| [#6619](https://github.com/earendil-works/pi/issues/6619) | **Windows dependent extensions show absolute path in banner** – mislabeled when installed via npm. | Confuses users and obscures extension origin, especially in monorepo setups. | 5 comments, 0 👍 – Windows‑specific pain point. |
| [#6911](https://github.com/earendil-works/pi/issues/6911) | **OpenAI SDK retries sleep full Retry‑After (days) and Escape cannot abort** – no delay cap, ignores AbortSignal. | Can lock up Pi for extended periods on rate‑limit storms; no user‑cancel path. | 5 comments, 0 👍 – directly addressed by PR #6980. |
| [#6652](https://github.com/earendil-works/pi/issues/6652) | **pi‑tui crash log hardcodes `~/.pi/agent/pi-crash.log`, ignoring `PI_CODING_AGENT_DIR`** – logs written to wrong location when agent dir is relocated. | Breaks custom layouts and complicates troubleshooting in containerized or multi‑user environments. | 4 comments, 0 👍 – fixed by PR #6958. |

---  

### 4. Key PR Progress (Top 10 by impact)  

| # | PR | Summary |
|---|----|---------|
| [#6980](https://github.com/earendil-works/pi/pull/6980) | **fix(ai): make provider retries abortable** – replaces OpenAI/Anthropic SDK inner retries with a common helper that respects `maxRetryDelayMS` and honors `AbortSignal`. Directly fixes #6911. |
| [#6967](https://github.com/earendil-works/pi/pull/6967) | **feat(coding-agent): expose session metadata to bash tools** – adds session ID, file, provider, model, and reasoning level to the environment of bash‑tool executions. |
| [#6927](https://github.com/earendil-works/pi/pull/6927) | **Add native OpenRouter OAuth support** – implements PKCE‑S256 flow, localhost callback, and returns a user‑controlled API key usable for text & image providers. |
| [#6958](https://github.com/earendil-works/pi/pull/6958) | **write tui debug/crash logs into the configured pi agent dir** – respects `PI_CODING_AGENT_DIR` for crash logs, fixing #6652. |
| [#6903](https://github.com/earendil-works/pi/pull/6903) | **fix(coding-agent): speed up external editor launch** – moves temp file creation into a per‑invocation sub‑folder under `os.tmpdir()`, eliminating global‑tmp contention (#6774). |
| [#6964](https://github.com/earendil-works/pi/pull/6964) | **fix(coding-agent): display path of sibling dependent extensions** – shows relative path in Extensions banner, resolving Windows absolute‑path issue (#6619). |
| [#6955](https://github.com/earendil-works/pi/pull/6955) | **handle openai websocket previous_response_not_found error** – clears cached previous_response and reconnects, preventing silent WS failures. |
| [#6984](https://github.com/earendil-works/pi/pull/6984) | **feat(ai): honor compat.forceAdaptiveThinking in bedrock-converse-stream** – forces adaptive thinking wire shape when compatibility flag is set, fixing ValidationException for Claude models. |
| [#6960](https://github.com/earendil-works/pi/pull/6960) | **feat(ai): add StepFun providers** – registers four StepFun endpoints (China, Global, prepaid routing, etc.) sourced from models.dev. |
| [#6916](https://github.com/earendil-works/pi/pull/6916) | **feat(agent): add AgentHarness execution tools** – introduces `AgentHarnessTool` that passes arbitrary app‑specific context (e.g., `ExecutionEnvironment`, session ID) to tool executions. |

---  

### 5. Feature Request Trends  

- **Model‑selection ergonomics** – MRU‑based cycling (#6982), better handling of special characters in model IDs (#6210), and per‑provider UI hints.  
- **Provider‑specific capability flags** – exposing `compat.forceAdaptiveThinking` (#6984), provider‑reported cost usage (#6881), and structured approval primitives for extensions (#5954).  
- **Compaction & context management** – reliable compaction with enterprise Copilot (#6768), smarter cache invalidation for dynamic system prompts (#6621), and cache‑breakpoint improvements for tool‑only turns (#6940).  
- **Observability & debugging** – abortable retries (#6980), isolated temp directories for external editors (#6774, #6903), and configurable crash/log paths (#6652, #6958).  
- **Extension authoring** – access to session metadata from bash tools (#6967), ability to set per‑block hidden‑thinking labels (#6988), and structured approval APIs (#5954).  

---  

### 6. Developer Pain Points  

1. **Timeout & retry handling** – idle‑timeout regressions and non‑abortable SDK retries cause hangs and forced process restarts.  
2. **Authentication friction** – automatic GitHub logouts and OAuth token loss disrupt workflows; users desire more reliable token persistence.  
3. **Customization ergonomics** – keybindings not applied on start, external‑editor latency, and inability to scope models with brackets force frequent reloads or workarounds.  
4. **Windows‑specific quirks** – extension banners showing absolute paths and temp‑file collisions create noise and confusion on Windows dev boxes.  
5. **Cache performance** – aggressive cache invalidation from dynamic system prompts and mis‑aligned cache breakpoints hurt throughput, especially on low‑prefill hardware.  
6. **Logging & diagnostics** – hard‑coded log locations ignore user‑configured agent directories, complicating multi‑instance or container setups.  

---  

*All links point to the `earendil-works/pi` repository.*  
*Digest compiled from issues, pull requests, and community activity updated within the last 24 hours.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek‑TUI Community Digest – 2026‑07‑23**

---

### **Today’s Highlights**
The DeepSeek‑TUI project (aka CodeWhale) is rapidly converging on **v0.9.1**. Recent merges ship a unified `/skills` manager with audit‑ready install/update/trust cycles, a default skill pack (v5) that mirrors enterprise‑grade workflow bundles, and a polished “uwu” theme for playful UI flair. Core integration work also fixed critical provider mismatches (Kimi’s cross‑paired K3 model IDs) and tightened sandbox enforcement, while a new security gate begins auditing the 17 Dependabot alerts (7 high, 10 moderate) surfacing in the npm stack. Development ergonomics are being refined—Work‑surface chrome now surfaces only active To‑dos/sub‑agents, transient failures auto‑expire, and the UI’s visual rhythm emphasizes user‑model turn flow. Meanwhile, platform‑specific snags persist: macOS users still cannot read/write Dropbox‑provided files, and the Windows installer overwrites rather than appends to PATH.

---

### **Releases**
**None** – no release tags were created in the last 24 h.

---

### **Hot Issues** (most community activity)

| # | Title & Link | Comments | Why it matters | Community reaction |
|---|--------------|----------|----------------|-------------------|
| **2870** | `[documentation, cleanup, tui, v0.9.2] EPIC: staged command‑boundary refactor for #2791` <br> https://github.com/Hmbown/CodeWhale/issues/2870 | **17** | First‑order architectural work splitting the large command‑strategy refactor into merge‑able layers; impacts routing, command ownership, and future extensibility. | High engagement – active discussion on split strategy and proof‑of‑concept PR #2851. |
| **4227** | `[documentation, enhancement, question, workflow-runtime, subagents] feat: 🐋 help JayBeest map the CodeWhale tsunami 🌊` <br> https://github.com/Hmbown/CodeWhale/issues/4227 | **12** | Enables contributors to bootstrap a dev environment aligned with the latest `main`, critical for the project’s 10⁺ PR/day velocity. | Strong support – users looking for repeatable setup scripts. |
| **2889** | `[documentation, enhancement, release‑blocker, agent‑ready, tui, subagents, ux, reliability, v0.9.1] Work Agent rows: real sub‑agent details and structured current activity (restored from #2694)` <br> https://github.com/Hmbown/CodeWhale/issues/2889 | **8** | Restores a community‑owned slice of sub‑agent UI that had been removed; directly impacts the sidebar’s Work/To‑do and Activity panels. | Positive sentiment – users eager for richer agent visualization. |
| **2886** | `[documentation, enhancement, release‑blocker, tui, tools, reliability, v0.9.1] Enhancement: add Gherkin acceptance E2E coverage for tool lifecycle` <br> https://github.com/Hmbown/CodeWhale/issues/2886 | **7** | Introduces behavior‑driven testing for tool creation/lifecycle, a prerequisite for production‑grade reliability. | Consensus that coverage is overdue but implementation details still being ironed out. |
| **4691** | `[bug, documentation, enhancement, release‑blocker, workflow‑runtime, agent‑ready, tui, subagents, ux, tools, reliability, v0.9.1] v0.9.1: Ship the model‑invoked default CodeWhale skill pack` <br> https://github.com/Hmbown/CodeWhale/issues/4691 | **4** | Delivers the first‑party skill pack that mirrors competitor offerings (Kimi Code, Devin CLI, Claude Code) – a flagship v0.9.1 feature. | Excited uptake – users asking for clearer documentation on invoking the pack. |
| **4687** | `[bug, documentation, enhancement, question, release‑blocker, workflow‑runtime, agent‑ready, tui, subagents, ux, tools, reliability, v0.9.1] fix(kimi): fail closed on Kimi Code/direct Moonshot K3 model‑ID cross‑pairings` <br> https://github.com/Hmbown/CodeWhale/issues/4687 | **4** | Critical provider hardening – prevents silent model‑ID mismatches that could route calls to the wrong endpoint. | Critical fix praised; community wants broader provider validation. |
| **4085** | `[bug, reliability, v0.9.3] Cannot read/write files under ~/Library/CloudStorage/Dropbox/ (macOS File Provider)` <br> https://github.com/Hmbown/CodeWhale/issues/4085 | **4** | macOS 12+ sandbox regression – breaks file system integration for Dropbox users, a top‑tier usability blocker. | High‑priority bug‑report; Apple’s File Provider framework nuances are being discussed. |
| **4684** | `[bug] danger‑full‑access does not disable tools‑layer workspace boundary check, breaking global skill access` <br> https://github.com/Hmbown/CodeWhale/issues/4684 | **2** | Sandbox mode inconsistency – OS‑level sandbox is disabled but the tools layer still enforces workspace checks, confusing power users. | Community split: some expect tighter controls, others demand full “danger” semantics. |
| **4685** | `[bug] CodeWhaleSetup.exe installer overwrites user PATH environment variable on Windows 10` <br> https://github.com/Hmbown/CodeWhale/issues/4685 | **1** | Installer regression – removes existing PATH entries, breaking other tools and causing post‑install support tickets. | Immediate fix requested; users sharing work‑arounds (manual PATH edit). |
| **4683** | `[bug, enhancement] Wrong deepseek completions url` <br> https://github.com/Hmbown/CodeWhale/issues/4683 | **1** | Intermittent connectivity failure on the default DeepSeek completions endpoint – impacts nightly reproducibility. | Flaky bug – community notes “appears regularly after long time asks”. |

---

### **Key PR Progress** (selected closed PRs)

| # | PR & Link | Core Delivery | Community Impact |
|---|-----------|---------------|------------------|
| **4679** | `feat(skills): unified /skills manager with audit and owned mutations` <br> https://github.com/Hmbown/CodeWhale/pull/4679 | One‑stop `/skills` surface for inventory, audit, install/import, update, remove, and trust across project/global/roots. | Directly satisfies the v0.9.1 Skills lane (#4650); users celebrating the cleaner workflow. |
| **4695** | `feat(skills): default CodeWhale skill pack (bundled v5)` <br> https://github.com/Hmbown/CodeWhale/pull/4695 | Ships the v0.9.1 end‑user skill pack (interview, plan, implement, debug, test, review, security‑review, simplify, verify, research, …). | Provides out‑of‑the‑box productivity; the most‑talked‑about v0.9.1 feature. |
| **4696** | `feat(tui): ship staged /uwu theme` <br> https://github.com/Hmbown/CodeWhale/pull/4696 | New playful UI theme with aliases (`owo`, `kawaii`), soft‑classic whale marker, and shimmer colors. | Users requesting a “fun” skin got immediate love‑rebirth; many PRs adding emote shortcuts. |
| **4694** | `fix(kimi): fail closed on K3 model‑ID cross‑pairings` <br> https://github.com/Hmbown/CodeWhale/pull/4694 | Prevents silent routing errors between `https://api.kimi.com/coding/v1` ↔ `https://api.moonshot.ai/v1` endpoints. | Security‑hardening win; AI provider community applauding safer defaults. |
| **4693** | `fix(tui): Work summary lifecycle, actionable title, and top‑area hierarchy` <br> https://github.com/Hmbown/CodeWhale/pull/4693 | Coordinated fix for three v0.9.1 Work/top‑chrome blockers: recent‑only summaries, actionable titles, and hierarchy ordering. | Directly improves the live Work strip UX; developers mentioning “clarity finally fixed”. |
| **4692** | `fix: v0.9.1: Ship the model‑invoked default CodeWhale skill pack` <br> https://github.com/Hmbown/CodeWhale/pull/4692 | Auto‑generated fix ensuring the default skill pack lands in v0.9.1. | Resolves dependency chain – the skill pack is now verified to exist. |
| **4680** | `fix(tui): register debt compatibility aliases` <br> https://github.com/Hmbown/CodeWhale/pull/4680 | Adds `/slop` and `/canzha` as `/debt` aliases, unifying dispatch and discovery. | Fixes #3914; users rejoice at restored command discovery. |
| **4675** | `Integrate CodeWhale v0.9.1 runtime and release surface` <br> https://github.com/Hmbown/CodeWhale/pull/4675 | Merges v0.9.1 runtime, empty‑Work fix, and final TUI color grammar (cool mode edge + warm permission lanes). | The cornerstone of the v0.9.1 release; UI consistency praised across themes. |
| **4087** | `refactor(hooks): split config and executor modules` <br> https://github.com/Hmbown/CodeWhale/pull/4087 | Moves hook definitions, events, conditions, and `HooksConfig` to `hooks/config.rs`; isolates `HookExecutor`. | Improves maintainability; contributors note cleaner review cycles. |
| **4370** | `feat: add TelecomJS provider support with configuration and catalog i…` <br> https://github.com/Hmbown/CodeWhale/pull/4370 | Adds TelecomJS (Telecom JiangSu) provider support with proper catalog refresh. | Opens a new market (Chinese carrier) for CodeWhale users; integration tests added. |

---

### **Feature Request Trends**
1. **Unified Skills Management** – Repeated calls (`#4650`, `#4651`, `#4679`) to consolidate all skill operations under `/skills`. Result: one manager handling inventory, audit, trust, and cross‑root mutations.
2. **Context Diet & Token Efficiency** – A family of parent issue `#4704` spawns `#4705–4710` focusing on stripping UI metadata, deduplicating project/environment/context, and hard‑budgeting the stable prompt (currently ~29 KB). Goal: simpler, more portable prompts across models.
3. **Provider Robustness & Validation** – Issues `#4687`, `#4682`, and `#4686` highlight provider‑routing bugs, custom‑provider launch failures, and missing China‑region endpoints (Minimax‑CN). Community wants stricter model‑ID mapping and better error surfacing.
4. **Improved TUI Chrome & UX** – Release‑blockers like `#4700`, `#4701`, `#4699`, `#4676` target visual rhythm, Work‑surface relevance, and theme‑native styling. Emphasis on removing noise (empty coordination work) and making UI responsive.
5. **Cross‑Platform Installer & Sandbox Consistency** – Windows PATH handling (`#4685`) and macOS Dropbox file access (`#4085`) remain top pain points. Requests to respect existing PATH and honor the File Provider framework.  
6. **Test & Documentation Coverage** – E2E Gherkin for

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*