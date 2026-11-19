# AI CLI Tools Community Digest 2026-11-19

> Generated: 2026-11-19 05:05 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-11-19)

---

## 1. Ecosystem Overview

The AI CLI landscape shows **four actively maintained tools** with transparent community governance (Gemini CLI, GitHub Copilot CLI, Pi, CodeWhale), while five major entrants (Claude Code, OpenAI Codex, Kimi, OpenCode, Qwen) provided no digest data today. The active tools are converging on **three architectural pillars**: (a) **agent orchestration** with sub-agent/task delegation, (b) **MCP/tool protocol standardization** for extensibility, and (c) **TUI performance & reliability** (async rendering, token/turn management). Enterprise readiness—policy compliance, multi-tenant auth, credential hygiene—is now a differentiator, not a nice-to-have. Release cadences are weekly/bi-weekly for preview channels, with stable releases lagging behind nightly builds.

---

## 2. Activity Comparison (2026-11-19)

| Tool | Open Issues (Hot) | PRs Updated (24h) | Release Status | Latest Version |
|------|-------------------|-------------------|----------------|----------------|
| **Gemini CLI** | 10 (p1–p3) | 10 (5 merged, 5 open) | **Preview** (v0.70.0‑preview.0) + nightly | v0.70.0‑preview.0 (2026-11-19) |
| **GitHub Copilot CLI** | 10 (Enterprise/auth heavy) | 0 | **Stable** (v1.0.114) | v1.0.114 (2026-11-18) |
| **Pi** | 10 (perf, XDG, SDK) | 6 (3 merged, 3 open) | **No release** (last 24h) | Pre-release / main branch |
| **CodeWhale** | 11 (release-blocker auth, TUI freezes) | 10 (7 merged, 3 open) | **Blocked** (v0.10.3 gated by #7203) | v0.10.2 (latest shipped) |
| **Claude Code / Codex / Kimi / OpenCode / Qwen** | — | — | **No data** | — |

**Key signals**: Gemini CLI and CodeWhale show highest PR velocity (10 each); Copilot CLI ships stable increments but has zero PR updates today; Pi focuses on runtime performance and embedding SDK; all four have double-digit hot issue counts.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Requesting | Specific Needs |
|-------------|------------------|----------------|
| **Sub-agent / task delegation visibility & control** | Gemini CLI, Pi, CodeWhale | Trajectory inspection (`/chat share`), session takeover, lock recovery (Gemini #22323, #22232); cancellation handlers with async await for checkpoints (Pi #12090); undo/history efficiency (CodeWhale #7355, #7362) |
| **MCP / tool protocol lifecycle & auth** | Copilot CLI, Gemini CLI, Pi, CodeWhale | Startup-complete notifications (Copilot #5458); per-tool-call timeouts & abort signals (Gemini PR #30212); OAuth redirect flexibility & tenant selection (Copilot #5410, #5157); provider descriptor expansion (Pi PR #11370, CodeWhale PRs #7285, #7340, #7350) |
| **Token/turn budget management** | Gemini CLI, Pi, CodeWhale | Heatmap stats (`/stats heatmap`, Gemini PR #30135); compaction threshold fixes for virtual models (Pi #12035); usage ledger bounds & snapshot rollback (CodeWhale #7356, #7366) |
| **TUI rendering performance & async I/O** | Gemini CLI, Pi, CodeWhale | Async PowerShell parsing (Gemini PR #30334, #30247); transcript re-render optimization (Pi #9549); focus-gain flash elimination (CodeWhale PR #7363) |
| **Credential hygiene & platform auth** | Copilot CLI, CodeWhale | Keychain chunk accumulation (Copilot #5473, #5434); ChatGPT/OAuth token verification (CodeWhale #7203) |
| **Linux/Unix standards compliance** | Pi, (Gemini CLI implied) | XDG Base Directory support (Pi #2870, 75 👍); SSH config preservation (Gemini PR #30335) |

---

## 4. Differentiation Analysis

| Dimension | Gemini CLI | GitHub Copilot CLI | Pi | CodeWhale |
|-----------|------------|-------------------|-----|-----------|
| **Primary Focus** | Google ecosystem integration, agent orchestration, multi-model routing | Enterprise Copilot policy compliance, GitHub-native workflows, MCP auth | Embedding SDK, multi-provider inference, TUI performance | DeepSeek/Kimi model tuning, TUI reliability, provider gateway aggregation |
| **Target User** | Google Cloud / Vertex AI developers, polyglot agent builders | Enterprise GitHub Copilot seats, security-conscious orgs | Library authors, long-running agent servers, power users | DeepSeek/Kimi model enthusiasts, Chinese LLM ecosystem users |
| **Technical Approach** | TypeScript/Node, ACP protocol, heavy sub-agent graph | TypeScript/Node, GitHub API + MCP, strict policy enforcement | Rust (core) + TypeScript (extensions), durable execution, XDG-native | Python (TUI) + Rust (engine), OpenAI-compatible gateway descriptors |
| **Release Strategy** | Nightly → preview → stable (weekly previews) | Monthly stable patches (v1.0.x) | Main-branch continuous, no tagged releases recently | Version gated by release-blocker issues |
| **Unique Strength** | `/stats heatmap`, per-tool timeout, AST-aware tooling requests | Enterprise policy integration, GitHub Codespaces native | Embeddable `AgentSession`, 6 new providers in one PR | 15 locale packs, snapshot rollback safety, provider gateway abstraction |

---

## 5. Community Momentum & Maturity

| Maturity Tier | Tools | Evidence |
|---------------|-------|----------|
| **High Momentum / Rapid Iteration** | **Gemini CLI**, **CodeWhale** | 10+ PRs/24h each; weekly preview bumps; active issue triage (p0/p1 labels); community feature requests with high 👍 (XDG 75 👍 on Pi, but Gemini has 13 comments on #22323) |
| **Steady Enterprise Cadence** | **GitHub Copilot CLI** | Stable v1.0.114 shipped; zero PRs today suggests feature freeze / stabilization phase; issues dominated by Enterprise policy & auth (high 👍 on #1595: 11 👍, 30 comments) |
| **Performance-Critical / Embedding Focus** | **Pi** | No release but 6 PRs; critical perf bugs (#9549 core saturation, #10642 SDK memory leak); XDG compliance closed pending impl (strong signal maintainers listen) |
| **Blocked / Pre-1.0** | **CodeWhale** | v0.10.3 blocked by auth regression (#7203); 7 PRs merged today fixing TUI freezes, undo I/O, localization—high fix velocity but release gate indicates fragility |

**Community size proxy** (GitHub ⭐/issues not in digest, but engagement): Copilot CLI #1595 (30 comments) > Gemini #22323 (13) > Pi #2870 (29 comments, 75 👍) > CodeWhale #7203 (6 comments).

---

## 6. Trend Signals for Technical Decision-Makers

1. **Agent orchestration is the new platform battle** — Every tool invests in sub-agent graphs, but **observability** (trajectory sharing, turn IDs, cancellation checkpoints) is the missing layer. *Invest in tooling that exports structured agent traces.*

2. **MCP is becoming the de facto plugin ABI** — Copilot, Gemini, Pi, and CodeWhale all extend provider registries via MCP-compatible descriptors. *Standardize on MCP for internal tooling; expect OAuth 2.1 / OIDC flows to stabilize.*

3. **Token/turn economics drive UX** — Heatmaps (Gemini), compaction budgets (Pi), usage ledgers (CodeWhale) signal **cost-aware agent loops** are product requirements. *Build token budgets into your automation pipelines.*

4. **Windows TUI parity is a hard requirement** — Async PowerShell parsing (Gemini), Cortex XDR compat (Copilot), focus-flash fixes (CodeWhale), Zellij mouse routing (Pi). *Validate CLI tools on Windows Terminal + WSL2 + common AV/EDR before adoption.*

5. **Credential hygiene is a security surface** — Keychain chunk exhaustion (Copilot), SSH config clobbering (Gemini), ChatGPT token verification (CodeWhale). *Demand automated credential rotation & audit logs from vendors.*

6. **Embedding SDKs > standalone CLIs for automation** — Pi’s `AgentSession` memory leak (#10642) and CodeWhale’s durable checkpoints (#12090) show **long-running server-side agents** are a real workload. *Evaluate SDK maturity if you run agents in CI/CD or services.*

7. **Multi-provider gateway abstraction wins** — Pi added 6 providers in one PR; CodeWhale merges 3 gateway descriptors. *Avoid single-vendor lock-in; prefer tools with declarative provider registries.*

---

**Bottom line**: For **enterprise GitHub shops**, Copilot CLI v1.0.x is the safest stable bet. For **polyglot agent builders** needing latest orchestration primitives, Gemini CLI preview/nightly leads. For **embedding agents in your own product**, Pi’s SDK is most mature but watch the memory leak. For **DeepSeek/Kimi model users**, CodeWhale fixes TUI reliability fast but wait for v0.10.3 unblock.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data source:** github.com/anthropics/skills (as of 2026-11-19)  
**Scope:** Top 20 Pull Requests and top 15 Issues by community attention

---

## 1. Top Skills Ranking

The following Skills generated the most discussion in recent PRs. All are currently **OPEN** and awaiting review/merge.

| Rank | Skill / PR | Functionality | Discussion Highlights | Link |
|------|------------|---------------|----------------------|------|
| 1 | **proofcore-contract-auditor** (#1771) | Automated static analysis of Solidity and Rust smart contracts; anchors cryptographic audit proofs to the public TON blockchain via ProofCore's zero-storage Merkle protocol. | Web3/niche but high-impact new capability; introduces blockchain-anchored notarization to the skill catalog. | [PR #1771](https://github.com/anthropics/skills/pull/1771) |
| 2 | **notion-spec-to-implementation & quantitative-resume-auditor** (#1245) | `notion-spec-to-implementation` converts product/tech specs into concrete Notion tasks with acceptance criteria; `quantitative-resume-auditor` scores resumes against job descriptions. | Dual submission covering enterprise product workflows and career/job-matching automation. | [PR #1245](https://github.com/anthropics/skills/pull/1245) |
| 3 | **md2video-audio** (#1703) | Zero-cost Markdown-to-MP4 pipeline using Marp for slides plus realistic human-like voiceovers. | Content creation/media automation; appeals to documentation and marketing teams. | [PR #1703](https://github.com/anthropics/skills/pull/1703) |
| 4 | **pyxel** (#525) | Retro game development in Python; guides implementation, headless input-driven runs, frame inspection, and state verification. | Long-open (since March 2026); sustained interest in game-dev tooling for Claude Code. | [PR #525](https://github.com/anthropics/skills/pull/525) |
| 5 | **scnet-hpc** (#1615) | SCNet HPC cluster operations via profile-based SSH and Slurm workflows; includes job generation, cluster discovery, and compute-node guidance. | Enterprise/HPC infrastructure; indicates demand for specialized compute-environment skills. | [PR #1615](https://github.com/anthropics/skills/pull/1615) |
| 6 | **mcp-builder** (#1742) | Fixes `mcp>=2.0.0` compatibility: `streamable_http_client` import rename and custom HTTP header configuration via `create_mcp_http_client`. | Critical infrastructure compatibility for MCP-based skills; affects downstream skill builders. | [PR #1742](https://github.com/anthropics/skills/pull/1742) |
| 7 | **skill-creator** (#1298, #1681, #1997) | Core skill-authoring tooling: trigger evaluation isolation, Windows/runtime failure handling, direct `package_skill.py` execution, and YAML frontmatter scalar parsing. | Broad consensus that creator tooling must be stabilized before more community skills can be reliably contributed. | [PR #1298](https://github.com/anthropics/skills/pull/1298) · [PR #1681](https://github.com/anthropics/skills/pull/1681) · [PR #1997](https://github.com/anthropics/skills/pull/1997) |

---

## 2. Community Demand Trends

Distilled from the most-commented Issues:

| Trend | Signal | Representative Issues |
|-------|--------|----------------------|
| **Agent memory & state management** | Requests for compact symbolic notation to reduce context bloat in long-running agents. | [#1329 compact-memory](https://github.com/anthropics/skills/issues/1329) |
| **Code review & smart contract auditing** | Demand for automated safety/audit patterns for AI agents and blockchain contracts. | [#412 agent-governance](https://github.com/anthropics/skills/issues/412), [#1771 proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771) |
| **Skill creator tooling & trigger reliability** | Persistent bugs in `run_eval.py` (0% trigger rates, parallel worker UUID collisions) and calls to align `skill-creator` with best practices. | [#556](https://github.com/anthropics/skills/issues/556), [#1352](https://github.com/anthropics/skills/issues/1352), [#202](https://github.com/anthropics/skills/issues/202) |
| **Enterprise workflow automation** | Notion spec-to-implementation, HPC cluster ops, and org-wide skill sharing within Claude.ai. | [#1245](https://github.com/anthropics/skills/pull/1245), [#1615](https://github.com/anthropics/skills/pull/1615), [#228](https://github.com/anthropics/skills/issues/228) |
| **Security & trust boundaries** | Community skills impersonating the `anthropic/` namespace; duplicate plugin content; shell injection in `webapp-testing`. | [#492](https://github.com/anthropics/skills/issues/492), [#189](https://github.com/anthropics/skills/issues/189), [#1980](https://github.com/anthropics/skills/pull/1980) |
| **Context-window efficiency** | Overeager token injection (e.g., `claude-api` ~156k tokens) exhausting context in a single call. | [#1487](https://github.com/anthropics/skills/issues/1487) |

---

## 3. High-Potential Pending Skills

Active, comment-rich PRs that have not yet merged and are likely candidates for near-term inclusion:

1. **notion-spec-to-implementation / quantitative-resume-auditor** (#1245) — Enterprise and career automation; well-scoped dual submission.
2. **proofcore-contract-auditor** (#1771) — Web3 security tooling with blockchain-anchored proofs; novel trust model.
3. **md2video

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑11‑19**

---

### 1. Today’s Highlights  
The **v0.70.0‑preview.0** prerelease was published, bringing the latest bug‑fixes and a new nightly build.  Key community focus this week is on eliminating UI freezes caused by synchronous PowerShell parsing and on adding per‑tool‑call timeouts to give models more control over long‑running operations.

---

### 2. Releases  

| Version | Date | Summary of Changes |
|---------|------|--------------------|
| **v0.70.0‑preview.0** | 2026‑11‑19 | *Chore*: bump to `0.70.0‑nightly.20261110.g1603e9b`.  Includes the changelog for v0.69.0‑preview and v0.68.0. |
| **v0.69.0** | 2026‑11‑18 | *Fix*: preserve literal `$` characters during template placeholder replacement (PR #30136).  *Feature*: new `/stats heatmap` subcommand for daily token usage (PR #30135). |

*No stable release beyond the preview; the nightly build prepares the next 0.71 nightly.*

---

### 3. Hot Issues  (10 noteworthy)

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#22323** | Sub‑agent recovery after `MAX_TURNS` reported as GOAL success | Reports that a sub‑agent claims success while actually hitting the turn limit, hiding the real failure. | 13 comments, 2 👍 (p1 priority) – [Issue](https://github.com/google-gemini/gemini-cli/issues/22323) |
| **#21409** | Generalist agent hangs indefinitely | Users experience permanent hangs when the generalist agent is invoked; work‑around is to disable sub‑agents. | 8 comments, 8 👍 – [Issue](https://github.com/google-gemini/gemini-cli/issues/21409) |
| **#22745** | AST‑aware file reads, search & mapping impact | Seeks evidence that AST‑aware tools can cut token usage and improve precision when reading code. | 7 comments, 1 👍 – [Issue](https://github.com/google-gemini/gemini-cli/issues/22745) |
| **#21968** | Gemini does not use custom skills/sub‑agents enough | Anecdotal but highlights a gap: the model rarely auto‑selects relevant skills without explicit prompting. | 7 comments, 0 👍 – [Issue](https://github.com/google-gemini/gemini-cli/issues/21968) |
| **#22267** | Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`) | Configuration changes are silently discarded, breaking expected limits. | 5 comments, 0 👍 – [Issue](https://github.com/google-gemini/gemini-cli/issues/22267) |
| **#22232** | Browser‑agent resilience: automatic session takeover & lock recovery | Proposes a less‑fail‑fast approach for locked browser profiles, improving robustness. | 4 comments, 0 👍 – [Issue](https://github.com/google-gemini/gemini-cli/issues/22232) |
| **#21983** | Browser sub‑agent fails on Wayland | Wayland‑specific rendering causes the sub‑agent to terminate with a “GOAL” status. | 4 comments, 1 👍 – [Issue](https://github.com/google-gemini/gemini-cli/issues/21983) |
| **#21000** | Native file tools for task‑tracker | Requests using real file‑system tools (e.g., `touch`, `mkdir`) instead of in‑context tracking. | 4 comments, 0 👍 – [Issue](https://github.com/google-gemini/gemini-cli/issues/21000) |
| **#24246** | 400 error when >128 tools are registered | The agent hits a hard limit and returns a 400, suggesting a need for smarter tool scoping. | 3 comments, 0 👍 – [Issue](https://github.com/google-gemini/gemini-cli/issues/24246) |
| **#23571** | Model creates temporary scripts in random locations | Generates many ad‑hoc scripts, increasing cleanup overhead after a run. | 3 comments, 0 👍 – [Issue](https://github.com/google-gemini/gemini-cli/issues/23571) |

---

### 4. Key PR Progress  (10 important PRs)

| # | Title | Description |
|---|-------|-------------|
| **#30334** | **fix(core,cli): parse PowerShell commands asynchronously** | Moves PowerShell AST parsing off the UI thread, preventing the Thinking spinner and elapsed‑time counter from freezing on Windows. |
| **#30212** | **feat(core): add configurable per‑tool‑call timeout (`tools.callTimeout`)** | Introduces a `tools.callTimeout` setting (seconds, default 0 = disabled) that aborts a tool call via an `AbortSignal` on deadline, allowing the model to retry or change strategy. |
| **#30366** | **chore(release): bump version to 0.71.0‑nightly.20261118.g615d6bc8c** | Automated version bump for the upcoming nightly release. |
| **#30363** | **fix(core): avoid duplicating the pending prompt in managed history** | Stops re‑appending raw prompts when they have already been coalesced into `apiHistory`, ensuring each prompt is sent exactly once. |
| **#30362** | **fix(acp): report stopped agent reasons** | Handles `AgentExecutionStopped` events, surfaces the stop reason to the client as an assistant message, and trims/fallbacks reason fields. |
| **#30335** | **fix(core): stop overriding `core.sshCommand` with an empty string** | Prevents `getSafeGitEnv()` from clearing `core.sshCommand`, eliminating “cannot run : No such file or directory” SSH failures. |
| **#30246** | **fix(core): quote IDE CLI path for cmd.exe in `/ide install` on Windows** | Escapes spaces in editor‑CLI paths, fixing the “Failed to install VS Code companion extension” error on Windows. |
| **#30247** | **fix(core): avoid blocking PowerShell parsing during shell checks** | Makes PowerShell parsing asynchronous during policy checks and confirmation, eliminating UI freezes on Windows. |
| **#30241** | **fix(core): keep injected binary data intact when truncating tool responses** | Ensures base64 data inside `__binary_injection__` is preserved when large tool outputs are truncated, fixing 400 errors on audio/video > 48 KB. |
| **#30234** | **fix(acp): truncate large tool outputs for the model like the CLI does** | Bounds large ACP tool responses for the model, preventing excessive token usage that previously caused 369 k‑token input spikes. |

---

### 5. Feature Request Trends  

- **Sub‑agent visibility & sharing** – Multiple issues request easier inspection and export of sub‑agent trajectories (e.g., `/chat share`), session takeover, and lock‑recovery mechanisms.  
- **AST‑aware file operations** – Repeated calls for AST‑aware reads, searches, and mapping to improve precision and reduce token waste.  
- **Enhanced agent configuration** – Desire to reference skills/sub‑agents via `settings.json`, auto‑discover agents per workspace, and better handling of tier‑model configuration.  
- **Robust tool management** – Requests for smarter tool scoping (avoid 400 errors with >128 tools), per‑tool timeout, and parallelizable tool execution to reduce latency.  
- **Native file‑system tools** – Preference for real file‑system commands (create, delete, move) over in‑context task tracking to simplify workflows.  

These trends point to a community push for **more transparent, configurable, and efficient agent behavior**, especially around **sub‑agent orchestration**, **tool usage**, and **performance stability**.

---

### 6. Developer Pain Points  

- **UI freezes on Windows** when PowerShell commands are parsed synchronously (PR #30334, #30247).  
- **SSH/CLI misconfiguration** – empty `core.sshCommand` causing immediate “cannot run” errors (PR #30335).  
- **Tool‑limit errors** – 400 responses when more than 128 tools are registered, indicating a need for dynamic tool scoping.  
- **Large tool output truncation** – Binary injection loss and 400 decoding failures for audio/video > 48 KB (PR #30241, #30234).  
- **Sub‑agent reliability** – Hanging generalist agents, premature GOAL termination, and ignored `settings.json` overrides (issues #21409, #22267, #22232).  
- **Workspace hygiene** – Model‑generated temporary scripts scattered across the filesystem, creating cleanup overhead (issue #23571).  
- **Security & destructive commands** – Occasional use of risky git operations (`reset --force`) and lack of safeguards against destructive behavior.  

Addressing these recurring frustrations—through async parsing, configurable timeouts, better tool limits, and more resilient sub‑agent handling—will markedly improve the developer experience with Gemini CLI.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑11‑19**

---

### 1. Today’s Highlights  
The latest Copilot CLI release **v1.0.114** (Nov 18) lands with a suite of stability fixes and policy‑related tweaks. Meanwhile, the issue tracker remains active, with several high‑traffic bugs around Enterprise policy enforcement, Windows security integration, and MCP authentication flows that are sparking community discussion.

---

### 2. Releases  
**v1.0.114** – 2026‑11‑18  
*Summary*: This incremental update resolves a number of regression fixes (including policy‑blocking errors when listing models, credential‑manager accumulation on Windows, and stale MCP server termination). No new feature flags are introduced; the focus is on reliability and compliance with Enterprise Copilot policies.

*Link*: https://github.com/github/copilot-cli/releases/tag/v1.0.114  

---

### 3. Hot Issues (10 noteworthy items)

| # | Title (Area) | Why It Matters | Community Reaction |
|---|--------------|----------------|--------------------|
| **#1595** | Sporadic policy blocking when retrieving models (Enterprise, models) | Users with valid Enterprise Copilot subscriptions cannot list models despite having premium request quota, causing “access denied” errors. | 👍 11, 30 comments – high priority for Enterprise admins. |
| **#5478** | Cortex XDR kills the launching shell when Copilot CLI spawns `git` (Windows, tools) | Crash‑inducing parent‑process‑spoofing events disrupt developer workflows on Windows machines protected by Cortex XDR. | 👍 1, 7 comments – urgent for security‑sensitive environments. |
| **#4017** | MCP OAuth (Desktop) – non‑first‑party HTTP servers never launch browser flow (authentication, mcp) | Remote MCP servers (e.g., Atlassian, incident.io) fail to authenticate, leaving users without feedback or a way to recover. | 👍 3, 7 comments – impacts many third‑party integrations. |
| **#5250** | macOS Entra‑broker MCP servers reject concurrent sign‑ins and cached tokens (authentication, mcp) | macOS users see “sign‑in already in progress” errors and cannot recover from stale tokens, breaking session start‑up. | 👍 0, 4 comments – platform‑specific but reproducible. |
| **#5350** | Authorization‑code → token exchange never runs for remote HTTP MCP servers (authentication, mcp) | Interactive CLI completes browser round‑trip but stalls; observed especially in WSL2, blocking any tool usage. | 👍 0, 3 comments – critical for WSL users. |
| **#2949** *(closed)* | Background Agent MCP connections destroyed after text‑only turns (agents, mcp) | Background agents relying on MCP tools become unreliable after LLM‑only responses, causing intermittent failures. | 👍 0, 2 comments – important for agent‑centric workflows. |
| **#3889** *(closed)* | Support stdio transport server on `session/new` request in ACP mode (non‑interactive, mcp) | ACP mode currently rejects stdio MCP servers, violating the Agent Client Protocol and limiting automation. | 👍 0, 2 comments – affects scripted/automation scenarios. |
| **#5157** | Guest accounts cannot authenticate to specific tenant for MCP servers (mcp) | Guest users are forced to use their home tenant, preventing access to tenant‑scoped MCP servers (e.g., Fabric). | 👍 0, 2 comments – hampers multi‑tenant collaboration. |
| **#5380** | Extensions don’t start for sessions created with `create_session` until user switches (sessions, plugins) | New sessions lack any extension tools or skills, requiring manual user interaction to become functional. | 👍 0, 2 comments – degrades productivity for automated sessions. |
| **#5090** | Boot experience + input line experience (plugins, input‑keyboard) | Loading of MCP, plugins, and input UI blocks the user before they can work, especially problematic in large repos. | 👍 0, 2 comments – user‑experience pain point. |

*All links follow the pattern*: `https://github.com/github/copilot-cli/issues/<issue‑number>`.

---

### 4. Key PR Progress  
**No pull requests** were updated in the last 24 hours. Consequently, there are no PR summaries to report.

---

### 5. Feature Request Trends  

- **MCP Server Lifecycle Notifications** – Multiple requests (e.g., #5458, #5452) ask for a clear “startup complete” event (all servers connected or failed) so extensions and custom tooling can react programmatically.  
- **Runtime Turn Identity Exposure** – Issues #5487 and #5452 request that built‑in plugins receive a stable turn ID, enabling reliable correlation between client‑side UI actions and server‑side MCP calls.  
- **Tenant‑Specific Authentication** – #5157 and #5402 highlight the need to let users select a specific Entra ID tenant during `/mcp auth`, especially for single‑tenant apps and guest scenarios.  
- **OAuth Redirect Flexibility** – #5410 calls for plugins to be able to set `oauthClientId` and `auth.redirectPort`, supporting managed MCP servers that require exact redirect URIs (e.g., Looker).  
- **Credential Management Improvements** – #5473 (Windows) and #5434 (macOS) surface duplicate or accumulated keychain entries, suggesting a need for automated cleanup and better UI feedback when “Always Allow” is chosen.  

These trends indicate a strong community desire for **more deterministic MCP lifecycle handling, richer debugging data (turn IDs), and finer‑grained authentication control**.

---

### 6. Developer Pain Points  

- **Credential Store Exhaustion** – Windows users experience accumulation of `copilot-keychain-chunk.*` entries, eventually preventing any application from storing credentials.  
- **Enterprise Policy Enforcement Gaps** – Issues #1595, #5481, and #5402 reveal inconsistent handling of policy‑blocked model access and forced re‑authentication, breaking seamless Enterprise usage.  
- **Unreliable MCP Server Lifecycle** – Crashes (Cortex XDR), premature termination (`/clear` vs `/mcp reload`), and stalled token exchanges (Issues #5464, #5437) cause flaky CLI behavior, especially in CI/CD or background agent contexts.  
- **Session & Extension Initialization Delays** – New sessions created via `create_session` (Issue #5380) and heavy boot loads (Issue #5090) force users to wait or manually switch contexts before tools become usable.  
- **Platform‑Specific Auth Blocking** – macOS keychain prompts (#5434) and Windows OneAuth broker windows that block paste (#5452) interrupt workflow and lead to duplicated credentials or failed logins.  

Addressing these recurring frictions—through better credential hygiene, clearer policy feedback, robust MCP server management, and smoother session bootstrapping—will markedly improve the day‑to‑day experience for Copilot CLI users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-11-19

---

## 1. Today's Highlights

The biggest community momentum centers on **XDG Base Directory compliance** (#2870), which drew 75 👍 and 29 comments—making it the most-requested feature in recent memory. On the performance front, **large transcript re-rendering** (#9549) remains an open concern, with the reporter documenting 1-core saturation on Windows Terminal. Notably, six new hosted inference providers were proposed in a stacked PR (#11370), expanding Pi's reach to DeepInfra, Nebius, Ollama Cloud, Scaleway, SiliconFlow, and StepFun.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### #2870 — Follow XDG Base Directory [CLOSED, bug]
- **Author:** mks-h | **Comments:** 29 | **👍:** 75
- Pi clutters `$HOME` on Linux with config/state directories. The request is to follow XDG standards (`$XDG_CONFIG_HOME` → `~/.config`), aligning with established Linux conventions. The sheer vote count signals strong community demand; maintainers appear receptive but the issue is closed pending implementation.
- [Link](https://github.com/earendil-works/pi/issues/2870)

### #9549 — Large transcripts re-render every frame; every resize re-emits the whole transcript [OPEN, inprogress]
- **Author:** EdgewalkerBlue | **Comments:** 19 | **👍:** 1
- On Windows 11 with 2 logical cores, Pi saturates a full core re-rendering the entire transcript on every frame and resize. The reporter verified the repro with `pi -ne` (no extensions), isolating it to core TUI rendering. This is a critical performance regression for users with long sessions.
- [Link](https://github.com/earendil-works/pi/issues/9549)

### #11021 — ChatGPT sign-in reports 272K context for GPT-6.1 Sol despite 500K catalog [OPEN]
- **Author:** huxeon | **Comments:** 16 | **👍:** 8
- When authenticating via "Sign in with ChatGPT," Pi reports a 272K context window for `gpt-6.1-sol`, while the same account's live model catalog advertises 500K. This shrinks the user's compaction budget and may trigger premature compaction. The discrepancy appears to stem from Pi reading a stale or default value instead of the live catalog.
- [Link](https://github.com/earendil-works/pi/issues/11021)

### #9656 — Mouse wheel scrolls prompt history instead of transcript in fullscreen on Windows + Zellij [OPEN, bug]
- **Author:** lll9p | **Comments:** 15 | **👍:** 6
- Mouse wheel in fullscreen mode incorrectly scrolls the editor's prompt history rather than the conversation transcript when Pi runs inside Zellij on native Windows. Direct terminal and Linux+tmux work correctly, pointing to a multiplexer-specific event routing issue.
- [Link](https://github.com/earendil-works/pi/issues/9656)

### #10642 — Embedded SDK: long-lived session's memory never drops [CLOSED]
- **Author:** xxchan | **Comments:** 7 | **👍:** 0
- For embedders running Pi's coding-agent SDK in long-running server processes (e.g., OAR), `AgentSession` memory grows monotonically. `SessionManager` retains every entry in `fileEntries` even after compaction, and resume loads the entire file. This is a critical issue for production embedding scenarios where sessions persist for days.
- [Link](https://github.com/earendil-works/pi/issues/10642)

### #11529 — Tool order depends on registration order, busting prompt cache [OPEN]
- **Author:** DiegoGBrisa | **Comments:** 5 | **👍:** 0
- `getCurrentTools()` returns tools in Map insertion order. When a tool is removed and re-added (e.g., MCP reconnect, `tool_search` loading, extension reactivation), it moves to the end of the Map—changing the serialized tool order and invalidating the prompt cache. This causes unnecessary cache misses and higher token costs.
- [Link](https://github.com/earendil-works/pi/issues/11529)

### #12090 — Durable: allow cancellation handlers to wait on signals and deadlines [OPEN, durable]
- **Author:** Leeminjing | **Comments:** 5 | **👍:** 0
- Current cancellation handlers fire synchronously and cannot await async operations. The request is to let them `await` signals or deadlines so a parked tool can save a cancellation checkpoint, wait for confirmation, and survive host restarts. This targets the `pi-durable` extension's checkpointing workflow.
- [Link](https://github.com/earendil-works/pi/issues/12090)

### #12060 — SSE requests get 400 Bad Request when zstd-compressed [OPEN, inprogress, prio:p0]
- **Author:** xulongwu4 | **Comments:** 4 | **👍:** 0
- Since November 9, long sessions on `openai-codex` with `"transport": "sse"` intermittently fail with 400 errors. The same body passes uncompressed. This is flagged **p0** and was investigated by an AI agent running inside Pi, following the project's AI-disclosure convention.
- [Link](https://github.com/earendil-works/pi/issues/12060)

### #12273 — GPT-6.2 Sol reports far lower prompt-cache reuse than 6.1 [CLOSED, untriaged]
- **Author:** chpock | **Comments:** 4 | **👍:** 0
- On Pi's built-in `openai-codex` provider, GPT-6.2 Sol cached only 3,968 of 12,931 tokens on turn 4, while GPT-6.1 Sol cached 12,800. This adds ~8.8K uncached input tokens per warm turn—significantly increasing latency and cost for users on the newer model.
- [Link](https://github.com/earendil-works/pi/issues/12273)

### #12035 — Threshold compaction fires far below the window when the selected model is virtual [OPEN]
- **Author:** koenzhao | **Comments:** 3 | **👍:** 0
- `AgentSession._checkCompaction` calls `_modelForMessage()`, which returns `undefined` for virtual models (via `getPhysicalModel()`). With an unknown context window, the threshold check fires prematurely, compacting far below the actual limit. The fix is to skip the threshold check when the context window is unknown.
- [Link](https://github.com/earendil-works/pi/issues/12035)

---

## 4. Key PR Progress

### #11370 — Add DeepInfra, Nebius, Ollama Cloud, Scaleway, SiliconFlow, and StepFun providers [OPEN]
- **Author:** mitsuhiko | **Updated:** 2026-11-18
- Stacked on #11369, this PR adds six hosted inference providers sourced from `models.dev`. Each includes endpoint, environment variable, and model count (e.g., DeepInfra: 74 models, `DEEPINFRA_API_KEY`). Provider selection was driven by contributor activity and issue tracker requests.
- [Link](https://github.com/earendil-works/pi/pull/11370)

### #12278 — Refresh scoped models on interactive reload [OPEN]
- **Author:** haoqixu | **Updated:** 2026-11-18
- `/reload` now refreshes scoped models so changes to `enabledModels` take effect without restarting Pi. Startup `--models` flag still takes precedence. Fixes #12277.
- [Link](https://github.com/earendil-works/pi/pull/12278)

### #12283 — Handle external SIGTSTP like Ctrl+Z [OPEN]
- **Author:** haoqixu | **Updated:** 2026-11-18
- `kill -TSTP <pi-pid>` previously suspended Pi without restoring terminal state. It now follows the same path as Ctrl+Z (proper terminal restoration). Fixes #12272.
- [Link](https://github.com/earendil-works/pi/pull/12283)

### #12280 — Tree navigation no longer re-adds prompts to history [OPEN]
- **Author:** acmerfight | **Updated:** 2026-11-18
- Both tree navigation paths (`/tree` selector and extension `navigateTree`) were calling `renderInitialMessages()` with `populateHistory: true`, causing every navigation to inject branch prompts into Up-arrow history. The fix ensures navigation renders without polluting history. Closes #12279.
- [Link](https://github.com/earendil-works/pi/pull/12280)

### #10680 — Support npm 12 pack JSON output [CLOSED]
- **Author:** christianklotz | **Updated:** 2026-11-18
- npm 12 changed `npm pack --json` from a one-element array to an object keyed by package name. Pi's artifact creation only accepted the array shape, breaking package install checks, publish dry runs, and local releases. The fix reads both npm 10/11 (array) and npm 12 (object) shapes.
- [Link](https://github.com/earendil-works/pi/pull/10680)

### #12276 — Annotate Pi agent source code for learning [CLOSED]
- **Author:** mingo-liu | **Updated:** 2026-11-18
- Closed accidentally; intended for the author's personal learning fork. No merge impact.
- [Link](https://github.com/earendil-works/pi/pull/12276)

---

## 5. Feature Request Trends

| Direction | Representative Issues | Signal |
|---|---|---|
| **XDG / Linux standards compliance** | #2

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

I'll flag one thing up front: the source is labeled `Hmbown/DeepSeek-TUI`, but every issue and PR in the data points to `codewhale-hq/Codewhale` and refers to the product as "CodeWhale." I've generated the digest from the actual data and used the real `codewhale-hq/Codewhale` links rather than the label in the prompt.

# CodeWhale (DeepSeek TUI) Community Digest — 2026-11-19

## Today's Highlights
No new release landed in the last 24 hours, and the v0.10.3 ship is currently gated by an open release-blocker around ChatGPT/OAuth token verification (#7203). On the positive side, several high-visibility TUI reliability fixes merged: bounding the turn-completion snapshot wait (#7360), eliminating the focus-gain screen flash (#7363), and reducing undo's double history read (#7362). The provider ecosystem is also expanding, with three new OpenAI-compatible gateway descriptors awaiting merge.

## Releases
No releases in the last 24 hours. v0.10.3 remains blocked pending resolution of the ChatGPT auth verification issue (#7203).

## Hot Issues (10 of 11)

1. [#7203 — ChatGPT token signature/identity verification fails after successful browser sign-in (0.10.2, Windows)](https://github.com/codewhale-hq/Codewhale/issues/7203) — The top concern: tagged `release-blocker` for v0.10.3. Auth completes in the browser but token verification fails, leaving `openai-codex` as `missing`. Highest engagement in the set (6 comments).

2. [#7357 — TUI freezes for the entire next turn when a save-snapshot starts as a new turn begins](https://github.com/codewhale-hq/Codewhale/issues/7357) — Severe usability bug: keystrokes ignored and no rendering, with a reported 209-second freeze requiring a terminal close. Directly addressed by merged PR #7360.

3. [#7348 — Turn fails before dispatch at 256 retained usage records](https://github.com/codewhale-hq/Codewhale/issues/7348) — Local bookkeeping admission failure ("usage publication has no reserved native journal slot") kills the turn before the model is ever called, contradicting the 0.10.3 changelog.

4. [#7356 — Session with a 1 MiB late-usage ledger can no longer be saved](https://github.com/codewhale-hq/Codewhale/issues/7356) — Once the ledger hits its bound, every save (checkpoint, snapshot, commit) fails and the conversation stops persisting. A data-loss-adjacent reliability issue.

5. [#7343 — Full-screen erase + repaint on window focus flashes on terminals without DEC 2026](https://github.com/codewhale-hq/Codewhale/issues/7343) — `CSI 2J` fires before repaint on gnome-terminal/VTE, exposing a blank frame. Addressed by merged PR #7363.

6. [#7328 — Provider failures lose their cause; error card drops typed code](https://github.com/codewhale-hq/Codewhale/issues/7328) — Error causes survive only as English prose in session records/receipts and never reach the diagnostic log; no structured/machine-readable field exists. An observability gap.

7. [#7355 — Named-turn undo reads the whole turn store twice before forking](https://github.com/codewhale-hq/Codewhale/issues/7355) — A 200-turn fork opens 400 files instead of 200, doubling history I/O under the admission guard. Addressed by merged PR #7362.

8. [#7365 — opencode-zen free model rows are dead ends (429 FreeUsageLimitError)](https://github.com/codewhale-hq/Codewhale/issues/7365) — The gateway validates an exact payload and TLS cipher list, so advertised free models fail at request time. Freshly filed (created 2026-11-18).

9. [#7347 — Secret redaction reruns on every model request and is slow on ordinary text](https://github.com/codewhale-hq/Codewhale/issues/7347) — `prepare_model_bound_request` re-redacts every tool result on each call, so cost grows with session length. A performance concern (enhancement).

10. [#7344 — GNOME Terminal background/foreground stay on custom Nord colors after exit](https://github.com/codewhale-hq/Codewhale/issues/7344) — Terminal profile colors aren't restored on exit, leaving a mismatched background/foreground/palette. Linux/TUI theme lifecycle bug.

Engagement note: nearly all items show 0 upvotes and low comment counts, so "hot" here reflects severity and activity rather than broad community voting. #7203 (6 comments) and #7357 (4 comments) are the most discussed.

## Key PR Progress (10 of 15)

1. [#7360 — fix(tui): bound terminal snapshot wait](https://github.com/codewhale-hq/Codewhale/pull/7360) (merged) — Caps the turn-completion snapshot at the existing two-second Engine wait so the TUI returns to its event loop instead of freezing. Fixes #7357.

2. [#7363 — fix(tui): recapture focus without erasing the viewport](https://github.com/codewhale-hq/Codewhale/pull/7363) (merged) — Separates focus recovery from explicit clears; restores modes/margins and repaints without the intermediate blank screen. Fixes #7343.

3. [#7362 — fix(engine): avoid rereading history for named-turn undo](https://github.com/codewhale-hq/Codewhale/pull/7362) (merged) — Reuses already-loaded records instead of a second full-history read. Fixes #7355.

4. [#7366 — fix(snapshot): roll back partial file-scoped restores](https://github.com/codewhale-hq/Codewhale/pull/7366) (merged) — Uses the safety snapshot to roll back attempted checkouts/removals when a restore fails mid-way, keeping undo within the affected paths.

5. [#7367 — fix(tui): translate tool labels, /help, /diff, composer, /status text](https://github.com/codewhale-hq/Codewhale/pull/7367) (merged) — Moves the last six hard-coded English strings into locale packs across all 15 packs; English output unchanged byte-for-byte. Closes the localization gap from #7304.

6. [#7364 — fix(models): keep MCP tools with null-default optionals on the Moonshot route](https://github.com/codewhale-hq/Codewhale/pull/7364) (merged) — Prevents FastMCP/Pydantic v2 tools with `T | None = None` params from being dropped so Kimi models see them.

7. [#7285 — feat(providers): add UberLLM as a bundled descriptor row](https://github.com/codewhale-hq/Codewhale/pull/7285) (open) — Adds an OpenAI-compatible gateway with one key across OpenAI/Anthropic/Google/DeepSeek/Qwen/GLM/Kimi models.

8. [#7340 — feat(providers): add Synap descriptor](https://github.com/codewhale-hq/Codewhale/pull/7340) (open) — Adds `https://synap402.com/v1` with live `/v1/models` discovery, `SYNAP_API_KEY`, and `qwen3-coder-30b` as bootstrap.

9. [#7350 — feat(providers): add TrustedRouter as a bundled descriptor row](https://github.com/codewhale-hq/Codewhale/pull/7350) (open) — Adds a multi-lab OpenAI-compatible gateway via `TRUSTEDROUTER_API_KEY`.

10. [Dependency & CI maintenance batch](https://github.com/codewhale-hq/Codewhale/pulls) (merged) — Dependabot rolled through `jsonschema` 0.57.0→0.61.2 (#7337), `lru` 0.18.5→0.19.0 (#7336), `actions/setup-java` 6.1.0→6.2.0 (#7335), `docker/login-action` 4.7.0→4.8.0 (#7333), `softprops/action-gh-release` 3.0.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*