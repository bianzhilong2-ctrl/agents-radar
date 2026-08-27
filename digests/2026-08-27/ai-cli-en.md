# AI CLI Tools Community Digest 2026-08-27

> Generated: 2026-08-27 05:50 UTC | Tools covered: 9

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

User Safety: unsafe
Safety Categories: Criminal Planning/Confessions

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data snapshot: 2026-08-27 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

Based on community attention (PR engagement, issue linkage, and cross-references), the following Skills dominate current discussion:

### 1.1 skill-creator (Meta-Skill) — Most Critical Bug in the Pipeline
- **PR**: [#1298](https://github.com/anthropics/skills/pull/1298) — *fix(skill-creator): run_eval.py always reports 0% recall*
- **Linked Issue**: [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍)
- **Status**: OPEN (since 2026-06-10)
- **Functionality**: A meta-skill for creating and optimizing new Skills. The `run_eval.py` / `improve_description.py` / `run_loop.py` trio is supposed to iteratively test and refine Skill descriptions.
- **Discussion Highlights**: A showstopper bug — `claude -p` never triggers skills/commands during evaluation, so **every** query scores `recall=0%`. This means the entire description-optimization loop has been "optimizing against noise." MartinCajiao's PR (#1298) consolidates the fix with 10+ independent reproductions, addresses Windows-specific stream-reading, trigger detection, and parallel-worker issues. Related PRs [#1099](https://github.com/anthropics/skills/pull/1099) (joshuawowk) and [#1050](https://github.com/anthropics/skills/pull/1050) (gstreet-ops) address subsets of the same Windows compatibility surface. **This is the single highest-impact blocker in the repository right now** because it invalidates the feedback signal every Skill author relies on.

### 1.2 document-typography — Quality Control for AI-Generated Documents
- **PR**: [#514](https://github.com/anthropics/skills/pull/514) — *Add document-typography skill*
- **Status**: OPEN (since 2026-03-04)
- **Functionality**: Prevents typographic defects in Claude-generated documents — orphan word wrap (1–6 words spilling onto the next line), widow paragraphs, numbering misalignment.
- **Discussion Highlights**: Author PGTBoos frames this as a universal problem: "These issues affect every document Claude generates. Users rarely ask for good typography." The skill positions itself as a quality layer that catches problems users don't think to specify.

### 1.3 claude-api — Documentation Maintenance + Context Crisis
- **PR**: [#1607](https://github.com/anthropics/skills/pull/1607) — *Update claude-api skill: mark four retired model IDs as retired*
- **Linked Issue**: [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — *Eagerly injects ~156k tokens, exhausting context window*
- **Status**: PR OPEN; Issue OPEN
- **Functionality**: Reference data for the Claude API (model IDs, capabilities, deprecation status).
- **Discussion Highlights**: Two competing concerns. (a) **Staleness**: PR #1607 fixes documentation drift — `claude-opus-4-1`, `claude-sonnet-4-0`, `claude-opus-4-0`, and `claude-3-haiku-20240307` are still listed as active/deprecated when they're actually retired. (b) **Context bloat**: Issue #1487 reports the skill dumps ~156k tokens in a single tool call, exhausting the context window. Together these expose a structural problem: reference skills must balance completeness against token cost.

### 1.4 ODT (OpenDocument) — Open-Format Document Skill
- **PR**: [#486](https://github.com/anthropics/skills/pull/486) — *Add ODT skill*
- **Status**: OPEN (since 2026-03-01, last updated 2026-04-14)
- **Functionality**: Create, fill, read, and convert OpenDocument Format files (`.odt`, `.ods`, `.odf`). Triggers on any mention of ODT/ODS/ODF/OpenDocument/LibreOffice documents, or requests for open-source / ISO-standard document formats.
- **Discussion Highlights**: A companion to the existing DOCX/PDF skills targeting the open-source document ecosystem. Slow review cadence (~10 weeks open) suggests reviewers are working through open-format edge cases.

### 1.5 frontend-design — Skill Clarity and Actionability
- **PR**: [#210](https://github.com/anthropics/skills/pull/210) — *Improve frontend-design skill clarity and actionability*
- **Status**: OPEN (since 2026-01-05, last updated 2026-03-07)
- **Functionality**: A Skill for generating frontend code; this PR rewrites the instructions so every directive is something Claude can act on within a single conversation.
- **Discussion Highlights**: Represents an entire category of "v1 skill quality" PRs — converting educational developer docs into operational instructions Claude can follow. Long open duration reflects how subjective "actionability" is to review.

### 1.6 mcp-builder — Evaluation Pipeline Broken
- **PR**: [#1602](https://github.com/anthropics/skills/pull/1602) — *fix: resolve evaluation serialization, benchmark metrics, encoding, and script stability issues*
- **Linked Issue**: [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments) — *evaluation.py scores 0/N against any real MCP server*
- **Status**: PR OPEN; Issue OPEN
- **Functionality**: A Skill for building MCP servers. The Phase-4 evaluation harness is supposed to test whether an agent can successfully use the produced MCP server.
- **Discussion Highlights**: Issue #1390 reports the eval silently fabricates a tool-execution error for **every** tool call against **every** real MCP server — so the agent sees nothing but errors and scores 0/N. PR #1602 fixes the root cause (`TextContent` not JSON-serializable, swallowed into fabricated errors). Like skill-creator, this is a measurement-pipeline failure that hides real bugs.

### 1.7 Hivemind — Multi-Agent Orchestration
- **PR**: [#1628](https://github.com/anthropics/skills/pull/1628) — *Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill*
- **Status**: OPEN (since 2026-08-21)
- **Functionality**: Lets Claude Code delegate mechanical work to headless [opencode](https://opencode.ai) workers running on free models, while Claude Code stays the only planner, reviewer, and merger. Core thesis: *"The expensive model's context is the scarce resource, not its intelligence."*
- **Discussion Highlights**: Architecturally ambitious — reframes the cost model of agentic work. Likely to attract attention because it addresses a real economic pain point (context cost) rather than a functional gap.

### 1.8 self-audit — Universal Quality Gate
- **PR**: [#1367](https://github.com/anthropics/skills/pull/1367) — *feat: add self-audit — mechanical verification + four-dimension reasoning quality gate (v1.3.0)*
- **Linked Issue**: [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1 👍) — *Reasoning Quality Gate Pipeline proposal*
- **Status**: PR OPEN; Issue OPEN
- **Functionality**: Audits AI output before delivery — **mechanical file verification first** (every claimed output file exists and matches), then a four-dimension reasoning audit ordered by damage severity. Universal across projects, tech stacks, and models.
- **Discussion Highlights**: The proposal (Issue #1385) sketches a full three-gate pipeline (Pre-task Calibration → Adversarial Review → Delivery Verification). Two of three gates already have working PRs, suggesting the author is executing the proposal iteratively.

---

## 2. Community Demand Trends

From the top-engagement Issues, the community's most-anticipated directions:

### 2.1 Trust & Security Infrastructure (Top Demand — 43 comments)
- **[#492](https://github.com/anthropics/skills/issues/492)** — *Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse* (43 comments, 2 👍)
  - The single most-discussed issue. Community-made Skills impersonate official Anthropic Skills under the `anthropic/` namespace, creating a trust-boundary vulnerability where users grant elevated permissions to Skills they believe are official. The community is signaling that **namespace provenance must become a first-class security primitive** before marketplace scale.

### 2.2 Enterprise Distribution & Sharing
- **[#228](https://github.com/anthropics/skills/issues/228)** — *Enable org-wide skill sharing in Claude.ai* (16 comments, 8 👍 — highest 👍-to-comment ratio)
  - Users must currently download `.skill` files, distribute via Slack/Teams, and have colleagues manually navigate to Settings > Capabilities to upload. The community wants a shared skill library or direct sharing link. High approval ratio suggests strong consensus.

### 2.3 Skill Composition & Plugin Architecture
- **[#189](https://github.com/anthropics/skills/issues/189)** — *document-skills and example-skills plugins install identical content, causing duplicate skills* (6 comments, 9 👍)
  - Two marketplace plugins contain **identical Skills**, causing duplicates in Claude Code's context window. Indicates the community wants explicit deduplication, non-overlapping plugin boundaries, and clearer plugin-vs-example taxonomy.

### 2.4 Memory & Agent State Optimization
- **[#1329](https://github.com/anthropics/skills/issues/1329)** — *Proposing compact-memory: symbolic notation for compact agent state* (9 comments)
  - "A long-running agent spends a lot of context on its own notes and persistent memory, written in prose." Demand for Skills that **compress agent state** rather than expand it — a counterpoint to the context-bloat pattern seen in Issue #1487.

### 2.5 Skill-Creator / Self-Improvement Tooling
- **[#556](https://github.com/anthropics/skills/issues/556)** — *run_eval.py: claude -p never triggers skills/commands* (12 comments, 7 👍)
  - The community's ability to author and refine Skills depends on a working evaluation harness. This issue's high engagement (and 4 linked PRs: #1298, #1099, #1050, plus implicit linkage) shows the community treats the **skill-creation feedback loop itself as critical infrastructure**.

### 2.6 Cross-Platform / Interop Integration
- **[#29](https://github.com/anthropics/skills/issues/29)** — *Usage with bedrock* (4 comments)
- **[#16](https://github.com/anthropics/skills/issues/16)** — *Expose Skills as MCPs* (4 comments)
- **[#1175](https://github.com/anthropics/skills/issues/1175)** — *Concerns regarding Security and Context Window when handling SharePoint Online* (4 comments)

These cluster around **non-Claude-API deployment surfaces** — AWS Bedrock, MCP exposure, and enterprise document systems (SharePoint). The community wants Skills to be portable across runtime environments and integration protocols.

### 2.7 Agent Governance & Safety
- **[#412](https://github.com/anthropics/skills/issues/412)** — *Skill proposal: agent-governance — safety patterns for AI agent systems* (6 comments, CLOSED)
- **[#202](https://github.com/anthropics/skills/issues/202)** — *skill-creator should be updated to best practice* (8 comments, CLOSED, 1 👍)

Demand for Skills that govern **how agents operate** (policy enforcement, threat detection, trust scoring, audit trails) — as opposed to Skills that just produce output. The closed status of #202 and #412 suggests proposals in this space need concrete implementation to advance.

---

## 3. High-Potential Pending Skills

PRs with strong community signals (issue linkage, multiple reproductions, recurring author activity, or strategic positioning) that are likely to land soon:

| Skill | PR | Why It's Likely to Land |
|---|---|---|
| **skill-creator eval fix** | [#1298](https://github.com/anthropics/skills/pull/1298) | Blocks every other Skill author's iteration loop; 10+ independent reproductions; supersedes partial fixes #1099, #1050 |
| **mcp-builder eval fix** | [#1602](https://github.com/anthropics/skills/pull/1602) | Directly resolves the 0/N scoring bug in #1390; bundles multiple related fixes (serialization, encoding, stability) |
| **claude-api model retirement** | [#1607](https://github.com/anthropics/skills/pull/1607) | Pure documentation update; closes a specific issue (#1603); low review complexity |
| **self-audit quality gate** | [#1367](https://github.com/anthropics/skills/pull/1367) | Backed by a full proposal pipeline (#1385); author executing iteratively; addresses a universal need |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Broad applicability; fills a real quality gap; not in conflict with existing skills |
| **Hivemind multi-agent** | [#1628](https://github.com/anthropics/skills/pull/1628) | Recent, novel, addresses real cost problem; likely to attract reviewers interested in orchestration |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | Recent, well-scoped (profile-specific SSH/Slurm workflows); narrow enough to merge without architectural debate |
| **pyxel retro game dev** | [#525](https://github.com/anthropics/skills/pull/525) | MCP-server-based; niche but complete; small surface area reduces review burden |

### Likely to stall without intervention
- **frontend-design** clarity rewrite ([#210](https://github.com/anthropics/skills/pull/210)) — 7+ months open; subjective review surface
- **ODT skill** ([#486](https://github.com/anthropics/skills/pull/486)) — 5+ months open; format-compatibility edge cases
- **ServiceNow platform skill** ([#568](https://github.com/anthropics/skills/pull/568)) — 5+ months open; very broad scope may exceed reviewer capacity
- **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) — broad philosophy + patterns skill; high overlap risk with future specialized testing skills

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for the meta-infrastructure that makes Skills trustworthy, evaluable, and portable — namespace provenance, working eval pipelines, cross-platform deployment, and dedup-safe plugin composition — rather than for new domain-specific Skills themselves.**

---

*Report generated from 20 top-engagement PRs and 15 top-engagement Issues on anthropics/skills. All data as of 2026-08-27.*

---

# Claude Code Community Digest - August 27, 2026

## Today's Highlights
Claude Code released v2.1.247 introducing a new `SendFeedback` tool for drafting support reports, while the community tackles critical issues including Gmail MCP account support and cross-platform installation bugs. The platform continues addressing session management problems and improving skill discovery functionality.

## Releases
**v2.1.247** - Latest update adds:
- New `SendFeedback` tool for drafting feedback reports from `/feedback` (configurable via `feedbackDrafts` setting)
- Enhanced skill entries with `{id, text, cooldownSessions, priority}` fields, `tipsFile`, and `label` support
- Reference: [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.247)

## Hot Issues

### 1. [#18192](https://github.com/anthropics/claude-code/issues/18192) - Recursive Skill Discovery - **CLOSED** (43 comments, 63 👍)
**Why it matters:** Users need hierarchical skill organization but the system only scans top-level `~/.claude/skills/`. This enhancement would enable more structured project organization by scanning subdirectories.

### 2. [#36024](https://github.com/anthropics/claude-code/issues/36024) - Multiple Gmail Accounts MCP - **OPEN** (32 comments, 79 👍)
**Why it matters:** Users request multi-account Gmail/Google Workspace support, but MCP integration currently supports only one account. This enhancement addresses a clear productivity gap for power users with multiple work/personal accounts.

### 3. [#89854](https://github.com/anthropics/claude-code/issues/89854) - Cybersecurity Topic False Positives - **OPEN** (4 comments, 0 👍)
**Why it matters:** P0 CRITICAL issue where legitimate commercial operations involving xAI/Grokbot are incorrectly blocked by safety filters. This represents a significant operational disruption affecting DevOps workflows.

### 4. [#22931](https://github.com/anthropics/claude-code/issues/22931) - Archived Cowork Chats Missing - **OPEN** (38 comments, 38 👍)
**Why it matters:** macOS users lose access to archived Claude Cowork conversations, breaking continuity of important collaborative work and documentation.

### 5. [#88307](https://github.com/anthropics/claude-code/issues/88307) - Daemon Deletes Settings.json - **OPEN** (1 comment, 3 👍)
**Why it matters:** When `~/.claude/settings.json` is a symlink (e.g., home-manager), the daemon deletes user settings, causing silent data loss for configuration-heavy users.

### 6. [#84253](https://github.com/anthropics/claude-code/issues/84253) - Prompt Cache TTL Issues - **OPEN** (2 comments, 0 👍)
**Why it matters:** Starting with v2.1.218+, Claude Code no longer requests 1h prompt-cache TTL, forcing full cache rewrites every 5+ minutes gaps, significantly impacting performance for long-running sessions.

### 7. [#83715](https://github.com/anthropics/claude-code/issues/83715) - Daemon "Upgrade Storms" - **OPEN** (2 comments, 0 👍)
**Why it matters:** Multi-hour upgrade cycles cause daemon self-restarts 30-83 times per storm, killing active sessions and disrupting user workflows during critical update windows.

### 8. [#85404](https://github.com/anthropics/claude-code/issues/85404) - Daemon Session Stubs - **OPEN** (3 comments, 0 👍)
**Why it matters:** Background sessions leave corrupted JSONL stubs causing resume errors and resulting in blank sessions that resubmit previous prompts, leading to conversation corruption.

### 9. [#35600](https://github.com/anthropics/claude-code/issues/35600) - Traditional Chinese Localization - **OPEN** (3 comments, 16 👍)
**Why it matters:** While Simplified Chinese exists, Traditional Chinese support is requested to serve the significant user base in Taiwan/Hong Kong/Macau regions, expanding global accessibility.

### 10. [#79808](https://github.com/anthropics/claude-code/issues/79808) - Login Verification Emails Suppressed - **OPEN** (13 comments, 4 👍)
**Why it matters:** Users unable to log in due to suppressed verification emails with no escalation path, blocking access to Claude Code services.

## Key PR Progress

### 1. [#13437](https://github.com/anthropics/claude-code/pull/13437) - Hookify Plugin Import Fix - **MERGED**
**Status:** Critical fix for Python module resolution. The hookify plugin was failing with 'No module named hookify' error across all platforms due to absolute imports. Solution: Changed to relative imports ('from core.config_loader' instead of 'from hookify.core.config_loader').

### 2. [#58673](https://github.com/anthropics/claude-code/pull/58673) - Incomplete PR
**Status:** Partial contribution without complete details - requires maintainer follow-up to understand scope.

## Feature Request Trends

1. **Localization Expansion:** Traditional Chinese (zh-TW) support requested to complement existing Simplified Chinese (zh-CN), serving diverse Chinese-speaking markets.

2. **Multi-Account Integration:** Clear demand for multi-provider/multi-account support (Gmail MCP) rather than single-provider limitations.

3. **Enhanced Session Management:** Recurring issues with background sessions, daemon behavior, and session state persistence indicate need for improved agent view and background job management.

4. **Improved Skill Organization:** Move beyond flat skill discovery toward hierarchical organization with recursive subdirectory scanning.

5. **Performance Optimizations:** Prompt cache TTL fixes and memory leak resolutions highlight ongoing performance concerns, especially for long-running operations.

## Developer Pain Points

### Critical Issues
- **Security False Positives:** Overly aggressive safety filters blocking legitimate commercial operations (P0 critical)
- **Configuration Loss:** Daemon processes deleting user settings files silently
- **Login Access Barriers:** Email delivery failures without escalation paths

### Cross-Platform Installation & Updates
- **Windows/MSIX:** Update failures due to file locking requiring reboots
- **Linux Self-Upgrades:** Race conditions between npm postinstall and daemon detection
- **macOS Homebrew:** Daemon targeting purged versioned paths during cask upgrades

### Performance & Memory
- **Memory Leaks:** Background session processes consuming CPU indefinitely
- **Cache Inefficiency:** Frequent full cache rewrites due to TTL issues
- **Shell Integration:** Unbounded memory growth with complex regex patterns

### Session Management
- **Background Session Corruption:** Missing transcripts, corrupted JSONL files, resumable errors
- **State Synchronization:** Settings not propagating to daemon-hosted sessions
- **Concurrent Session Conflicts:** Hook interactions causing data loss between unrelated sessions

### Development Workflow
- **Skill Discovery Limitations:** Flat structure restricting organization
- **Multi-Account Needs:** Single-provider limitations affecting productivity
- **Error Reporting:** Insufficient feedback mechanisms for critical issues

The community is actively addressing these pain points, with many issues trending toward resolution while others remain critical blockers affecting user experience and productivity.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑08‑27**  

---  

### 1. Today’s Highlights  
- The stable line received **rust‑v0.150.1**, which back‑ports the retained‑image compaction budgeting fix (‑ older images are now trimmed automatically to stay within the token budget).  
- A new alpha stream continues with **rust‑v0.151.0‑alpha.4**, while the recent **rust‑v0.150.0** release introduced useful ergonomics: `@`‑task mentions, a `/copy` picker for responses/code blocks/blockquotes, and auto‑generated titles for unnamed terminal tasks.  
- Community discussion remains dominated by Windows‑specific startup and WSL transport errors, plus a lingering bug where recurring scheduled tasks silently pause after execution.  

---  

### 2. Releases  

| Version | Notable Changes |
|---------|-----------------|
| **rust‑v0.150.1** (stable) | *Bug fix*: Remote compaction now counts retained images toward its token budget by default, trimming older images as needed. ([#41003](https://github.com/openai/codex/pull/41003)) |
| **rust‑v0.151.0‑alpha.4** | Alpha release – no user‑facing notes beyond internal progression. |
| **rust‑v0.150.0** (stable) | *New features*:<br>• Reference other Codex tasks with `@` mentions and ask agents to read/create/message tasks from the terminal. ([#40308, #40315](https://github.com/openai/codex/pull/40308))<br>• `/copy` command now offers a picker for full responses, individual code blocks, and blockquotes. ([#39997](https://github.com/openai/codex/pull/39997))<br>• Unnamed terminal tasks receive descriptive titles automatically. |
| **rust‑v0.150.0‑alpha.13 … alpha‑12** | Incremental alpha builds – primarily internal stabilization. |

---  

### 3. Hot Issues (top 10 by comment count)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **[#40715](https://github.com/openai/codex/issues/40715)** | Windows ChatGPT 26.820.60940 fails with *“invalid transport in mcp_servers.codex_app”* (works in older beta) | Blocks the stable desktop app for many Pro users on Windows 10/11; points to a regression in the MCP transport layer. | 67 comments, 78 👍 – widespread frustration; users request a hot‑fix or rollback guidance. |
| **[#40819](https://github.com/openai/codex/issues/40819)** | Desktop app 26.820.7780.0: resuming WSL‑hosted threads fails with *“invalid transport in mcp_servers.codex_app”* | Affects developers who rely on WSL2 for Linux toolchains; breaks continuation of long‑running tasks. | 60 comments, 53 👍 – strong demand for a WSL‑specific transport fix. |
| **[#38350](https://github.com/openai/codex/issues/38350)** | Recurring scheduled tasks disable themselves after successful runs without user authorization | Undermines trust in automation; tasks silently pause, requiring manual re‑enable. | 47 comments, 0 👍 – users call for a root‑cause analysis and a config option to keep tasks enabled. |
| **[#40700](https://github.com/openai/codex/issues/40700)** | Codex Desktop cannot start: bundled `codex.exe` relocation from WindowsApps fails | Prevents the app from launching altogether on Windows 11; appears after recent Store updates. | 29 comments, 0 👍 – many report needing to reinstall or use the MSI workaround. |
| **[#40881](https://github.com/openai/codex/issues/40881)** | Codex Desktop fails to create new chats in WSL mode: invalid transport in `mcp_servers.codex_app` | Similar to #40819 but specific to chat creation; blocks new workflow initiation in WSL. | 26 comments, 7 👍 – reinforces the WSL transport pattern. |
| **[#39841](https://github.com/openai/codex/issues/39841)** | Workspace terminal fails to start with *“setup refresh had errors”* | Stops any terminal command execution inside the Codex workspace, hurting local development loops. | 19 comments, 2 👍 – users request clearer error logs and a reset mechanism. |
| **[#32759](https://github.com/openai/codex/issues/32759)** | GPT‑5.6 Sol fails to execute shell commands: *code‑mode host exited during handshake* | Affects CLI users on macOS Apple Silicon; prevents shell‑tool usage in agent runs. | 13 comments, 3 👍 – intermittent but high impact for power‑users. |
| **[#41019](https://github.com/openai/codex/issues/4019)** | Unable to locate the Codex CLI binary or ensure Electron resources include `bin/codex` | Appears when the app cannot start; indicates a packaging/resource‑bundling regression. | 13 comments, 2 👍 – users ask for better diagnostics and a fallback to system‑installed CLI. |
| **[#40611](https://github.com/openai/codex/issues/40611)** | After enrolling into Advanced Account Security, Codex app stuck in login‑logout loop | Blocks access for security‑conscious users (especially on macOS). | 10 comments, 0 👍 – request for a bypass or clearer error messaging during auth flows. |
| **[#39678](https://github.com/openai/codex/issues/39678)** | Remote (Android→macOS) *“No project”* chat fails with project trust error | Highlights friction in cross‑device remote workflows; trust model too strict for ad‑hoc sessions. | 8 comments, 4 👍 – users want a more lenient trust prompt or a way to whitelist devices. |

---  

### 4. Key PR Progress (10 notable PRs)  

| PR | Description | Impact |
|----|-------------|--------|
| **[#41003](https://github.com/openai/codex/pull/41003)** | Backport retained‑image compaction budgeting to 0.150 stable line. Enables `compaction_image_budget` by default so retained images count against the token budget and older images are trimmed. | Directly addresses image‑heavy workloads; reduces unexpected token overruns in remote sessions. |
| **[#41046](https://github.com/openai/codex/pull/41046)** | Preserve tool authority for TUI delegation prompts. Delegated `create_thread` / `send_message_to_thread` turns now retain the originating TUI tool’s authority instead of being recorded as raw user input. | Improves security and correctness of tool‑chaining flows in TUI‑based agents. |
| **[#41041](https://github.com/openai/codex/pull/41041)** | Encrypt sensitive history and notes tool arguments. Marks queries/appended/replaced note text as encrypted and sends `x-openai-encrypted-tool-arguments: true`. | Enhances privacy for users handling confidential data via the history/notes tools. |
| **[#41030](https://github.com/openai/codex/pull/41030)** | Update stable exec‑server test to Codex 0.150.1. | Guarantees that CI validates the latest stable runtime, reducing regression risk. |
| **[#41023](https://github.com/openai/codex/pull/41023)** | Track Guardian reviewer turn and tool analytics. Translates Guardian session lifecycle and canonical tool events into analytics payloads. | Gives product teams visibility into reviewer‑driven tool usage, informing future policy tweaks. |
| **[#41020](https://github.com/openai/codex/pull/41020)** | Scope extension capabilities to invocation lifetimes. Adds callback lifetimes to `ToolCall`, `ToolEnvironment`, turn‑input context, and skill‑read request types; requires executors to handle any lifetime. | Prevents resource leaks and makes extension lifetimes predictable, especially for long‑running agents. |
| **[#41017](https://github.com/openai/codex/pull/41017)** | Propagate trace context through gRPC code mode. Injects W3C `traceparent` metadata into code‑mode requests and carries it across streamed tool callbacks. | Enables end‑to‑end tracing for debugging complex multi‑tool workflows. |
| **[#41011](https://github.com/openai/codex/pull/41011)** | Reduce skill catalog prompts with path aliases. Evaluates aliased catalogs regardless of budget pressure and selects them when they preserve skill inclusion. | Lowers UI noise for users with large skill libraries, improving discoverability. |
| **[#41006](https://github.com/openai/codex/pull/41006)** | Trust invoked user skills in Guardian reviews. Records explicit/implicit skill invocations and uses them as authorization evidence in Guardian reviews. | Allows legitimate skill reuse without unnecessary re‑approvals, streamlining reviewer workflows. |
| **[#41005](https://github.com/openai/codex/pull/41005)** | Attach verified access context to eligible plugin MCP calls. Fetches ChatGPT account access and adds `cyber_trusted_access` under `openai/entitlementContext` when a plugin requests it from a local read‑only stdio tool. | Strengthens security posture for plugins that need privileged MCP operations while keeping the default sandbox intact. |

---  

### 5. Feature Request Trends (derived from Issues)  

| Theme | Representative Issues | Summary |
|-------|-----------------------|---------|
| **More flexible TUI/theming** | #38575 (DECSET 2031 for in‑place theme updates) | Users want the TUI to react to dynamic terminal colour changes without restarting the process. |
| **Non‑interactive MCP usage** | #24135 (allow MCP tool calls without `--dangerously-bypass-approvals-and-sandbox`) | Demand for a safe, opt‑in flag or config to enable MCP calls in CI/CD pipelines. |
| **Remove/Adjust usage limits** | #41016 (cancel 5‑hour limit for Plus package) | Power users request higher or removable hourly caps for intensive experimentation windows. |
| **Skill & mention reliability** | #39905 (skill/app mentions do not round‑trip correctly via copy/paste) | Improvements needed for copy/paste preservation of `@` references and skill invocations. |
| **UI performance & visual quality** | #40782, #41047 (global UI font weight too thin / blurry after update) | Reports of regression in font rendering on macOS/Windows after recent updates; users ask for DPI‑aware scaling fixes. |
| **Remote/WSL stability** | #40715, #40819, #40881 (invalid transport in WSL mode) | Recurring requests for a robust WSL‑to‑host transport layer and better error diagnostics. |

---  

### 6. Developer Pain Points  

- **Windows startup failures** – bundled `codex.exe` relocation or missing binary errors (#40700, #41019, #40893) repeatedly block app launch; users resort to reinstalling or using alternative installers.  
- **WSL/MCP transport instability** – “invalid transport in mcp_servers.codex_app” appears in multiple issues (#40715, #40819, #40881), causing thread resumption and chat creation to fail.  
- **Scheduled task auto‑pause** – recurring tasks silently disabling after a run (#38350) erodes trust in automation; developers ask for a persistent‑enabled flag or root‑cause fix.  
- **Terminal/workspace launch errors** – “setup refresh had errors” (#39841) and hand‑shake failures (`code-mode host exited during handshake`) (#32759, #40943) prevent any command execution, forcing workspace resets.  
- **UI regressions** – font weight/thinness and blurriness after updates (#40782, #41047) affect readability, especially on high‑DPI displays.  
- **Security/UX trade‑offs** – Advanced Account Security triggers login‑logout loops (#40611) and strict project trust errors block ad‑hoc remote sessions (#39678).  
- **Limited non‑interactive MCP** – the need to bypass approvals with a dangerous flag (#24135) hampers CI integration; developers seek a sanctioned, auditable mode.  

---  

*Prepared for the OpenAI Codex developer community – stay tuned for the next build cycle.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-27

## 1. Today's Highlights
The project shipped a **security-focused nightly release (v0.59.0-nightly)** patching an SSRF vulnerability in MCP OAuth metadata discovery. Meanwhile, the issue backlog reveals three dominant workstreams: stabilizing subagent orchestration (recovery, hang, and skill-adoption bugs), hardening the Auto Memory pipeline (redaction, deduplication, and inbox hygiene), and resolving sandbox/environment-configuration inconsistencies that surface as hangs or DEBUG-flag mismatches.

## 2. Releases
**v0.59.0-nightly.20260827.g3c311beac** — *Security patch*  
- **fix(core)**: Prevent SSRF in MCP OAuth metadata discovery and authentication ([#29081](https://github.com/google-gemini/gemini-cli/pull/29081)). Enforces HTTPS for remote OAuth endpoints, validates origin matching, and aligns with RFC 9728 §7.7 / RFC 8414.

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports **GOAL success** after hitting `MAX_TURNS` | Masks real failures; breaks trust in automated delegation | 13 comments, 2 👍 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** indefinitely on simple tasks | Blocks core workflow; workaround is disabling subagents | 8 comments, 8 👍 — P1, high user pain |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command **stuck at “Waiting input”** after completion | Frequent UX breakage; affects basic CLI operations | 4 comments, 3 👍 — P1, medium effort |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory **retries low-signal sessions endlessly** | Wastes cycles & token budget; no backoff/quarantine | 5 comments — P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory **redacts secrets after model sees them** | Security gap; logs may contain sensitive data | 4 comments — P2 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools** registered | Hard ceiling blocks extensibility; needs smart scoping | 3 comments — P2 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux desktop adoption blocker | 4 comments, 1 👍 — P1, agent/browser |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent **ignores `settings.json` overrides** (e.g., `maxTurns`) | Configuration drift; users can’t tune behavior | 3 comments — P2 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | Symlinked agent files **not recognized** | Breaks dotfile/shared-config workflows | 4 comments — P3, needs info |
| [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) | **Terminal resize flicker & perf regression** | Degrades daily UX; requires Ink/RenderWorker migration | 2 comments — P2, medium effort |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#29081](https://github.com/google-gemini/gemini-cli/pull/29081) | **Closed** | Security/Core | SSRF fix for MCP OAuth discovery (shipped in nightly) |
| [#28902](https://github.com/google-gemini/gemini-cli/pull/28902) | Open | Security | Blocks `$VAR`/`${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g) |
| [#28787](https://github.com/google-gemini/gemini-cli/pull/28787) / [#28794](https://github.com/google-gemini/gemini-cli/pull/28794) | Closed | Core | **Fail-closed** handling of corrupt MCP enablement config; prevents silent re-enablement & data loss |
| [#28914](https://github.com/google-gemini/gemini-cli/pull/28914) | Open | Core | Moves retry nudge into `contents` to **preserve prefix caching** |
| [#28917](https://github.com/google-gemini/gemini-cli/pull/28917) / [#28916](https://github.com/google-gemini/gemini-cli/pull/28916) | Open | Core | Atomic Whisper model downloads + stdout line-buffering for transcription |
| [#28911](https://github.com/google-gemini/gemini-cli/pull/28911) / [#28904](https://github.com/google-gemini/gemini-cli/pull/28904) | Open | Platform | Normalize `DEBUG` flag semantics in sandbox launcher (honor only `true`/`1`) |
| [#28903](https://github.com/google-gemini/gemini-cli/pull/28903) | Open | CLI | Ignore escaped `@` (`\@`) during completion trigger detection |
| [#28905](https://github.com/google-gemini/gemini-cli/pull/28905) | Open | Docs/Auth | Corrects guidance: individual users → Antigravity CLI; API keys for Gemini |
| [#29099](https://github.com/google-gemini/gemini-cli/pull/29099) | Open | Core/Security | **Fail-closed workspace trust**; filters repo-defined `mcpServers` in restricted mode |
| [#27406](https://github.com/google-gemini/gemini-cli/pull/27406) | Open | Agent/Routing | Configurable numeric routing rules (complexity-score → model mapping) |

## 5. Feature Request Trends
1. **AST-aware tooling** — Multiple epics ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) investigating AST-based read/search/map to reduce token spend and turn count.
2. **Persistent, file-based task tracking** — Deprecate in-context `WriteToDo` ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)) for CRUD task files surviving sessions.
3. **Subagent observability** — Shareable trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), bug-report inclusion ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
4. **Smarter tool scoping** — Dynamic tool filtering to avoid 128-tool ceiling ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).
5. **Declarative routing** — User-defined complexity→model tiers ([#27406](https://github.com/google-gemini/gemini-cli/pull/27406)).

## 6. Developer Pain Points
- **Subagent reliability**: Hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), false-success reporting ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), ignored config ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and opaque failures ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) top the frustration list.
- **Shell integration fragility**: “Waiting input” ghost state ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), interactive prompt stalls ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), and tmp-script litter ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Auto Memory trust gaps**: Post-hoc redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), unbounded retries ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), and silent patch drops ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
- **Environment/config parity**: DEBUG flag drift between CLI and sandbox ([#28911](https://github.com/google-gemini/gemini-cli/pull/28911)), symlink blindness ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), and corrupt-config fail-open ([#28786](https://github.com/google-gemini/gemini-cli/issues/28786)).
- **Terminal rendering regressions**: Resize flicker ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)) and `\n` escape mishandling ([#22466](https://github.com/google-gemini/gemini-cli/issues/22466)) degrade daily ergonomics.

---
*Generated from `google-gemini/gemini-cli` GitHub data as of 2026-08-27. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-27

## Today's Highlights
Three prereleases (v1.0.81-12 through -14) shipped in the last 24 hours, delivering faster session resumption, OpenTelemetry trace propagation for hooks, and Windows WAM-based authentication for Entra ID-protected MCP servers. Meanwhile, the issue tracker shows a cluster of high-impact regressions in the 1.0.80+ line: MCP schema eager-loading adding 354K tokens/startup, TUI freezes under parallel subagents, and a runaway FileWatch loop growing debug logs to 13 GB.

---

## Releases
| Version | Key Changes |
|---------|-------------|
| **[v1.0.81-14](https://github.com/github/copilot-cli/releases/tag/v1.0.81-14)** | **Improved:** Resume large sessions faster by showing recent history first while older messages load asynchronously. **Fixed:** Repeated `read_agent` calls now consistently return full turn history unless `since_turn` is provided. |
| **[v1.0.81-13](https://github.com/github/copilot-cli/releases/tag/v1.0.81-13)** | **Added:** Hooks receive OpenTelemetry trace context (`traceparent`, `tracestate`) and command hooks get correlated env vars. **Fixed:** Hook lifecycle events (`hook.start`/`hook.end`) from hooks inside a subagent now fire correctly. |
| **[v1.0.81-12](https://github.com/github/copilot-cli/releases/tag/v1.0.81-12)** | **Added:** Windows: remote MCP servers protected by Microsoft Entra ID can now sign in via the OS authentication broker (WAM), usually with no prompt. **Fixed:** Regression in session resumption logic. |

---

## Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#4612](https://github.com/github/copilot-cli/issues/4612)** Runaway FileWatch loop freezes TUI, debug log → 13 GB | Critical stability bug: long-running/resumed sessions enter tight `FileWatch` emission loop, making CLI unresponsive. | 👍1, 4 comments — recent, high-severity |
| **[#4613](https://github.com/github/copilot-cli/issues/4613)** 1.0.80+ regression: MCP schemas eagerly injected (+354K startup tokens) | Massive token-cost regression affecting every session; defeats tool-deferral optimization. | 👍0, 2 comments — labeled high severity by reporter |
| **[#4533](https://github.com/github/copilot-cli/issues/4533)** TUI stops consuming events when turn spawns parallel subagents | UI deadlock on prerelease channel; runtime continues but user loses all interaction (input + scroll). | 👍0, 3 comments — blocks parallel agent workflows |
| **[#4629](https://github.com/github/copilot-cli/issues/4629)** Plugin hooks not loaded on `--resume` | Silent regression: hooks fire on fresh sessions but not resumed ones, breaking automation. | 👍0, 0 comments — just filed, high impact for plugin authors |
| **[#4628](https://github.com/github/copilot-cli/issues/4628)** Autopilot 600s timeout kills parent after subagent completes | Background-task timeout not cancelled on subagent completion; terminates active parent process. | 👍0, 0 comments — new, affects autopilot reliability |
| **[#4605](https://github.com/github/copilot-cli/issues/4605)** `latest-prerelease` strands users on 1.0.81-9 (GitHub release sorting bug) | Update command picks older build because releases share `created_at`; users stuck on known-buggy version. | 👍3, 1 comment — distribution blocker |
| **[#4588](https://github.com/github/copilot-cli/issues/4588)** Tool search (MCP deferral) disabled for all non-Anthropic models | 47k vs 21k tokens on empty prompt; only Claude gets deferral — huge cost disparity across models. | 👍0, 0 comments — architectural inconsistency |
| **[#4623](https://github.com/github/copilot-cli/issues/4623)** Gemini 400 on MCP tools with union array items (e.g., `["object","null"]`) | Schema validation rejects valid union types; GPT/Claude unaffected — blocks Gemini + MCP usage. | 👍0, 0 comments — model-specific regression |
| **[#4433](https://github.com/github/copilot-cli/issues/4433)** Non-interactive `-p` sessions: tool approval revoked mid-session (4-8 min) | Permission denied becomes permanent; long CI/automation runs fail unrecoverably. | 👍0, 1 comment — CI/CD blocker |
| **[#4041](https://github.com/github/copilot-cli/issues/4041)** `web_fetch` fails on all URLs in IPv4-only sandboxes (`TypeError: fetch failed`) | Network tool completely broken in common restricted environments; no workaround. | 👍0, 1 comment — persistent since July |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **Global/user-level configuration** — #252 (global instructions file, 12 👍), #4622 (configurable discovery paths for agents/skills/hooks/instructions), #407 (`/tools` slash command, 31 👍) show strong demand for portable, cross-repo settings.
2. **Multi-agent delegation flexibility** — #1499 (6 👍) requests `/delegate` support for Claude/Codex alongside Copilot agent.
3. **Observability & debugging** — #407 (tool listing), hook trace context (shipped in -13), and #4621 (auditable rubber-duck reviews) point to desire for introspectable, auditable sessions.
4. **Session persistence & resume reliability** — Multiple issues (#4612, #4629, #4433) highlight that resume/restore workflows are a primary usage pattern needing hardening.

---

## Developer Pain Points
- **Token-cost regressions** — Eager MCP schema injection (#4613) and missing tool deferral for non-Anthropic models (#4588) inflate costs 2–3×.
- **TUI instability under concurrency** — Parallel subagents freeze UI (#4533); FileWatch loop kills responsiveness (#4612).
- **Authentication fragility** — Entra ID/WAM fixes shipped but plugin marketplace still breaks Git credential helpers (#4103); OAuth validation errors (#4627) block access.
- **Model-specific MCP breakage** — Gemini rejects valid union-type schemas (#4623); web_fetch broken in IPv4-only envs (#4041).
- **Update channel confusion** — Prerelease lookup picks wrong build (#4605), leaving users on buggy versions.
- **Non-interactive mode unreliability** — Permission revocation mid-session (#4433) makes automation brittle.
- **Hook/plugin lifecycle gaps** — Hooks not loading on resume (#4629), subagent hook events missing (fixed in -13).

--- 

*Data sourced from `github/copilot-cli` releases, issues, and PRs updated 2026-08-26 → 2026-08-27.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Let me analyze the GitHub data to generate the OpenCode community digest for 2026-08-27.

First, I'll examine the data structure:

1. **Latest Releases (last 24h)**: None - so no new releases to summarize.

2. **Latest Issues (updated in last 24h)**: 50 items total, showing top 30 by comment count. I need to pick 10 noteworthy ones.

3. **Latest Pull Requests (updated in last 24h)**: 50 items total, showing top 20 by comment count. I need to pick 10 important ones.

4. I also need to analyze feature requests and developer pain points.

Let me go through the data carefully.

## Latest Issues analysis (top 30 by comment count):

Looking at the issues with highest comment counts:

1. #20695 [OPEN] Memory Megathread - 138 comments - This is the top issue, about memory issues and collecting heap snapshots. Very important.

2. #33890 [CLOSED] Bun 1.3.14 segfault - 7 comments - Crash issue with Bun

3. #33213 [CLOSED] server mode: long-running opencode serve accumulates anonymous JS heap/swap - 6 comments - Memory leak in server mode

4. #26411 [CLOSED] Error message: Decompression error: ZlibError - 6 comments - Decompression error

5. #33887 [CLOSED] Possible regression in v1.17.10 on WSL: TUI shows black screen - 6 comments - WSL regression

6. #19193 [CLOSED] [BUG] TUI cannot send messages when launched in any git repository directory - 5 comments - TUI bug with git repos

7. #42657 [OPEN] TUI lag with multi-subagent sessions (97% CPU on render thread) - 4 comments - TUI performance issue

8. #44958 [OPEN] [BUG] Refusal response is hidden and conversation history disappears - 4 comments - UI bug

9. #34113 [CLOSED] GLM-5.2 session broken when model foolishly tries to view a screenshot - 4 comments - Model/image input issue

10. #34146 [CLOSED] macOS kernel NFS messages leak into TUI - 4 comments - NFS messages in TUI

11. #34226 [CLOSED] High CPU (110%) and memory (2GB) with low context usage - 4 comments - High CPU/memory usage

12. #33672 [CLOSED] Unable to paste - 4 comments - Paste issue

13. #37216 [OPEN] [FEATURE]: i18n support for TUI - 3 comments - i18n feature request

14. #43137 [CLOSED] [FEATURE]: Extend CodeMode to built-in OpenCode tools - 3 comments - CodeMode feature

15. #37314 [OPEN] fix: orphan sub-sessions not cleaned up when parent aborts - 3 comments - Orphan sub-sessions cleanup

16. #35066 [OPEN] fix(session): notify parent when subagent sessions finish - 3 comments - Subagent session notification

17. #45442 [OPEN] [2.0] subagent: infinite loop of identical tool calls - 3 comments - Subagent infinite loop

18. #43603 [OPEN] Agent has no effective no-progress/loop detection - 3 comments - Loop detection

19. #43673 [OPEN] Agent enters non-terminating loop - 3 comments - Another loop issue

20. #34054 [CLOSED] Shell tool crashes with SIGTRAP on linux/arm64 - 3 comments - Shell crash on arm64

21. #34232 [CLOSED] [FEATURE]:IDE extension lacks session management UI - 3 comments - IDE session management

22. #16188 [CLOSED] TUI startup hang/high CPU on macOS when external skills contain symlink cycle - 3 comments - Startup hang on macOS

23. #42286 [OPEN] Abort leaves orphaned task calls pending - 2 comments - Orphaned task calls

24. #45456 [CLOSED] [2.0] Web UI session stuck - 2 comments - Web UI session stuck

25. #45434 [CLOSED] 简易 - 2 comments - Localization/comment in Chinese

26. #45437 [CLOSED] feat: remote control (RC) via QR + mobile attach - 2 comments - Remote control feature

27. #43800 [OPEN] Agent gets stuck in a tool-call loop - 2 comments - Tool-call loop

28. #39864 [OPEN] Codex OAuth Fast models run at standard throughput - 2 comments - OAuth fast models throughput

29. #34268 [CLOSED] ai agents keep breaking opencode - 2 comments - AI agents breaking opencode

30. #34262 [CLOSED] Uninformative documentation for 'IDE' support - 2 comments - IDE documentation

Now, for the 10 noteworthy issues I should pick:

1. #20695 [OPEN] Memory Megathread - 138 comments - The top issue, centralizing memory problem investigation
2. #45442 [OPEN] [2.0] subagent: infinite loop of identical tool calls - 3 comments - Critical 2.0 issue with token burn
3. #43673 [OPEN] Agent enters non-terminating loop - 3 comments - Loop detection problem
4. #43800 [OPEN] Agent gets stuck in a tool-call loop - 2 comments - Another loop issue
5. #33213 [CLOSED] server mode: long-running opencode serve accumulates anonymous JS heap/swap - 6 comments - Memory leak in server mode
6. #33887 [CLOSED] Possible regression in v1.17.10 on WSL: TUI shows black screen - 6 comments - WSL regression
7. #37216 [OPEN] [FEATURE]: i18n support for TUI - 3 comments - i18n feature request
8. #45437 [CLOSED] feat: remote control (RC) via QR + mobile attach - 2 comments - Remote control feature
9. #42657 [OPEN] TUI lag with multi-subagent sessions (97% CPU on render thread) - 4 comments - TUI performance
10. #34146 [CLOSED] macOS kernel NFS messages leak into TUI - 4 comments - NFS messages in TUI

Actually, let me reconsider. I should pick issues that are most relevant/active as of 2026-08-27. Let me look at the "Updated" dates - many were updated on 2026-08-27, which means they were recently active.

Issues updated on 2026-08-27:
- #45442 [OPEN] [2.0] subagent: infinite loop of identical tool calls for ~50min with no loop protection, uncontrollable token burn - Created: 2026-08-27
- #45456 [CLOSED] [2.0] Web UI session stuck for hours - Created/Updated: 2026-08-27
- #45434 [CLOSED] 简易 - Created/Updated: 2026-08-27
- #45437 [CLOSED] feat: remote control (RC) via QR + mobile attach like Claude - Created/Updated: 2026-08-27
- #45489 [OPEN] fix(tui): ignore startup abort errors - Created: 2026-08-27
- #45488 [OPEN] [contributor, 2.0] feat(server): expose the HTTP API over WebSocket RPC - Created: 2026-08-27
- #45486 [CLOSED] [contributor] fix(app): restore worktree message accent - Created: 2026-08-27
- #45453 [CLOSED] feat(plugin): allow tool call repair before lookup - Created: 2026-08-27
- #45485 [OPEN] fix(provider): update Mistral SDK for streaming tool calls - Created: 2026-08-27
- #45474 [CLOSED] fix(app): preserve tool disclosures when groups update - Created: 2026-08-27
- #45482 [OPEN] fix(task): make async subagent tasks answer honestly - Created: 206-27
- #45481 [OPEN] [contributor] feat(core): open durable sessions with live capabilities - Created: 2026-08-27
- #45479 [CLOSED] fix(app): keep timeline notices on one line - Created: 2026-08-27
- #45478 [OPEN] fix(tui): dismiss question prompt when server question already gone - Created: 2026-08-27
- #45476 [OPEN] fix(core): apply plugin environment to v2 bash - Created: 2026-08-27
- #45477 [CLOSED] fix(app): merge adjacent patches inside used groups - Created: 2026-08-27
- #45472 [OPEN] fix(websearch): remove provider whitelist - Created: 2026-08-27
- #45475 [OPEN] fix(core): preserve conversation agent during compaction - Created: 2026-08-27
- #45461 [CLOSED] feat(core): expose background shell output path - Created: 2026-08-27
- #45470 [CLOSED] [contributor] fix(tui): clarify tool grouping setting - Created: 2026-08-27
- #45437 [CLOSED] feat: remote control (RC) via QR + mobile attach - Created: 2026-08-27

Many PRs and issues were created today (2026-08-27). This is clearly a very active day.

Let me restructure my analysis:

## Key issues to highlight (updated recently on 2026-08-27):

1. #45442 [OPEN] [2.0] subagent: infinite loop of identical tool calls - Just created today, about a severe infinite loop issue
2. #45437 [CLOSED] feat: remote control (RC) via QR + mobile attach - Just created/closed today, remote control feature
3. #45489 [OPEN] fix(tui): ignore startup abort errors - Just created today, TUI bug fix
4. #45488 [OPEN] [contributor, 2.0] feat(server): expose the HTTP API over WebSocket RPC - Just created today, major feature
5. #45482 [OPEN] fix(task): make async subagent tasks answer honestly - Just created today
6. #45481 [OPEN] [contributor] feat(core): open durable sessions with live capabilities - Just created today
7. #45478 [OPEN] fix(tui): dismiss question prompt when server question already gone - Just created today
8. #45476 [OPEN] fix(core): apply plugin environment to v2 bash - Just created today
9. #45472 [OPEN] fix(websearch): remove provider whitelist - Just created today
10. #45456 [CLOSED] [2.0] Web UI session stuck for hours - Just created/closed today

But I also need to include some of the longer-standing issues that have high comment counts.

Let me pick a balanced set:

**Hot Issues (10):**
1. #20695 [OPEN] Memory Megathread (138 comments) - Central memory issue investigation
2. #45442 [OPEN] [2.0] subagent infinite loop (3 comments) - Created today, severe token burn
3. #43673 [OPEN] Agent enters non-terminating loop (3 comments) - Loop detection
4. #43800 [OPEN] Agent gets stuck in tool-call loop (2 comments) - Another loop issue
5. #33213 [CLOSED] Server mode memory leak (6 comments) - 26.8GiB cgroup peak
6. #33887 [CLOSED] WSL TUI black screen regression (6 comments) - v1.17.10 regression
7. #37216 [OPEN] i18n support for TUI (3 comments) - Localization feature
8. #45437 [CLOSED] Remote control via QR + mobile attach (2 comments) - New RC feature
9. #42657 [OPEN] TUI lag with multi-subagent sessions (4 comments) - 97% CPU on render thread
10. #45489 [OPEN] fix(tui): ignore startup abort errors (0 comments) - Just created today

Actually, looking at the comment counts more carefully for issues updated today vs older ones... The issues updated today often have 0 or 2 comments because they're brand new. The high-comment ones are the older ones.

Let me think about what makes a "noteworthy" issue for the digest. I should focus on:
- Issues with high engagement (comments, likes)
- Issues recently updated (showing activity)
- Critical bugs or major features

Let me pick 10 that represent the most important topics:

1. #20695 [OPEN] Memory Megathread - 138 comments, 105 👍 - The biggest discussion
2. #33213 [CLOSED] Server mode memory leak - 6 comments, 0 👍 - Significant memory issue
3. #33887 [CLOSED] WSL black screen - 6 comments, 0 👍 - Regression from v1.17.10
4. #45442 [OPEN] Subagent infinite loop - 3 comments, 0 👍 - Created today, 2.0 concern
5. #43673 [OPEN] Agent non-terminating loop - 3 comments, 0 👍 - Loop detection gap
6. #43800 [OPEN] Agent tool-call loop - 2 comments, 0 👍 - Loop issue
7. #37216 [OPEN] i18n support for TUI - 3 comments, 0 👍 - Feature request
8. #45437 [CLOSED] Remote control via QR - 2 comments, 0 👍 - New RC capability
9. #42657 [OPEN] TUI lag multi-subagent - 4 comments, 0 👍 - Performance issue
10. #45489 [OPEN] fix(tui): ignore startup abort errors - 0 comments, 0 👍 - Just created today

Actually, I realize I should also consider the PRs more carefully since there were many created today.

## Latest Pull Requests analysis:

PRs created today (2026-08-27) with no comments yet (since just created):
- #45491 [OPEN] feat(opencode): surface fuzzy match strategy in edit tool output
- #45489 [OPEN] fix(tui): ignore startup abort errors
- #45488 [OPEN] [contributor, 2.0] feat(server): expose the HTTP API over WebSocket RPC
- #45486 [CLOSED] [contributor] fix(app): restore worktree message accent
- #45453 [CLOSED] feat(plugin): allow tool call repair before lookup
- #45485 [OPEN] fix(provider): update Mistral SDK for streaming tool calls
- #45482 [OPEN] fix(task): make async subagent tasks answer honestly, once, in order, and stop
- #45481 [OPEN] [contributor] feat(core): open durable sessions with live capabilities
- #45479 [CLOSED] fix(app): keep timeline notices on one line
- #45478 [OPEN] fix(tui): dismiss question prompt when server question already gone
- #45476 [OPEN] fix(core): apply plugin environment to v2 bash
- #45477 [CLOSED] fix(app): merge adjacent patches inside used groups
- #45472 [OPEN] fix(websearch): remove provider whitelist - enable websearch for all providers by default
- #45475 [OPEN] fix(core): preserve conversation agent during compaction
- #45461 [CLOSED] feat(core): expose background shell output path
- #45470 [CLOSED] [contributor] fix(tui): clarify tool grouping setting

PRs created earlier with comments:
- #4

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Developer Community Digest – 2026‑08‑27

---

## Today's Highlights
- **Critical proxy regression in v0.84.3**: OpenAI‑compatible providers (e.g., google‑vertex, gemini‑3.7‑flash) now crash with "HttpsProxyAgent is not a constructor" when proxy environment variables are set, affecting many users relying on corporate proxies.
- **TUI rendering regressions**: Multiple issues (#8675, #8673, #8711) cause CPU spikes, broken soft‑line‑break rendering, and word‑per‑line layout in fullscreen mode, especially on WSL2/Windows Terminal.
- **Performance bugs in editor and agent loops**: Slow prompt‑editor navigation with large buffers (#8029), O(n²) reasoning_details accumulation (#8648), and unhandled rejections leaving event streams hanging (#8705) are degrading user experience.

---

## Releases
No new releases were published in the last 24 h (the latest tag is v0.84.3 from earlier in August).

---

## Hot Issues (Top 10 by Community Engagement)

| # | Title & Link | Why It Matters | Community Reaction |
|---|--------------|----------------|--------------------|
| **#6879** | [auto‑compaction never triggers after context > 100 %](https://github.com/earendil-works/pi/issues/6879) | Long‑running agentic sessions overflow context windows without auto‑compact, forcing users to rely on API rejections. | 24 comments, 19 👍 – high interest from power users. |
| **#8029** | [Very slow performance on moving in prompt editor](https://github.com/earendil-works/pi/issues/8029) | Linear‑time arrow navigation with 7000‑line buffers can add > 1 s per keystroke, breaking fluid editing. | 9 comments, 0 👍 – frustration expressed in usage scenarios. |
| **#8610** | [Regression in v0.84.3: “HttpsProxyAgent is not a constructor”](https://github.com/earendil-works/pi/issues/8610) | A recent code‑split introduces a breaking proxy config for google‑vertex and other OpenAI‑compatible providers. | 4 comments, 0 👍 – urgent fix needed for corporate environments. |
| **#8582** | [Built‑in PowerShell tool uses Windows PowerShell 5.1 in interactive mode](https://github.com/earendil-works/pi/issues/8582) | On Windows, Pi defaults to deprecated PowerShell instead of PowerShell 7 when available, limiting cross‑platform consistency. | 7 comments, 0 👍 – closed but still relevant for Windows users. |
| **#7053** | [Parallel tool batches lose already‑completed tool results when one sibling stalls](https://github.com/earendil-works/pi/issues/7053) | Tool‑execution state management can discard successful results due to Promise.all timing, affecting agent reliability. | 4 comments, 0 👍 – follow‑up to prior fixes, still unresolved. |
| **#8620** | [0.84.3 bundled CLI: every global extension fails with “Cannot find module @earendil‑works/pi‑coding‑agent”](https://github.com/earendil-works/pi/issues/8620) | v0.84.3 breaks all global extensions that import internal agent modules, forcing a cascade of load failures. | 4 comments, 0 👍 – critical infrastructure regression. |
| **#8675** | [TUI renders text one word per line instead of wrapping](https://github.com/earendil-works/pi/issues/8675) | Long assistant messages and tool output become unreadable in fullscreen, especially on WSL2/Windows Terminal. | 2 comments, 1 👍 – reproducible bug with visual impact. |
| **#8711** | [TUI pegs 100 % CPU and freezes while streaming OpenRouter thinking (GLM‑5.3‑flash)](https://github.com/earendil-works/pi/issues/8711) | Certain Z.AI forced‑thinking models cause runaway CPU usage, making the UI unresponsive during streaming. | 1 comment, 0 👍 – immediate performance emergency. |
| **#8028** | [TUI `fullRender` crashes with `RangeError` when output exceeds V8 string limit](https://github.com/earendil-works/pi/issues/8028) | Video‑production agents that stream huge image analyses can crash Pi when rendering extremely long strings. | 3 comments, 0 👍 – edge‑case but high‑impact for heavy users. |
| **#8710** | [/resume fully parses every session file just to enable search](https://github.com/earendil-works/pi/issues/8710) | Session listing scans entire files even when users only want quick recent‑session switches, adding unnecessary I/O. | 1 comment, 0 👍 – UX inefficiency for frequent session hopping. |

---

## Key PR Progress (Top 10 Recent Merges/Active PRs)

| # | Title & Link | Core Change | Impact |
|---|--------------|------------|--------|
| **#8707** | [fix(ai): keep zai thinking enabled for forced‑thinking models (off === null)](https://github.com/earendil-works/pi/pull/8707) | Prevents disabling thinking for GLM‑5.3/5.3‑flash when reasoningEffort is undefined. | Restores expected behavior for Z.AI forced‑thinking models. |
| **#8690** | [feat(ai): add GLM‑5.3 Flash to Z.AI catalogs](https://github.com/earendil-works/pi/pull/8690) | Extends both Z.AI Coding Plan catalogs with the new model, preserving compatibility. | Expands model availability and adds generator regression. |
| **#8671** | [fix(ai): serialize thinking signature once](https://github.com/earendil-works/pi/pull/8671) | Eliminates O(n²) re‑parsing of reasoning_details during streaming. | Fixes performance bottleneck reported in #8648. |
| **#8674** | [fix(tui): render markdown soft line breaks as spaces, not hard breaks](https://github.com/earendil-works/pi/pull/8674) | Corrects marked.js handling of `\n` inside paragraphs for thinking blocks. | Improves readability of model reasoning traces. |
| **#8676** | [fix(tui): make alt screen not segment on `-` and `/`](https://github.com/earendil-works/pi/pull/8676) | Joins word segments on fullscreen when boundaries are `/` or `-`. | Fixes double‑click selection on paths/kebab‑case (#7746). |
| **#8699** | [fix(tui): remove coding‑agent config reads from pi‑tui](https://github.com/earendil-works/pi/pull/8699) | Eliminates fallback to PI_CODING_AGENT_DIR and relies on injected agentDir. | Reduces config sprawl and aligns with coding‑agent expectations. |
| **#8346** | [fix(coding-agent): repair unterminated session tails](https://github.com/earendil-works/pi/pull/8346) | Detects and repairs malformed JSONL tails without rewriting files. | Prevents data loss and corruption for incomplete sessions. |
| **#8547** | [feat(tui): move editor cursor on click](https://github.com/earendil-works/pi/pull/8547) | Makes primary‑button clicks inside the prompt editor reposition the cursor. | Aligns mouse behavior with typical text‑editor UX. |
| **#8704** | [fix(agent): end event stream on unhandled loop rejection](https://github.com/earendil-works/pi/pull/8704) | Catches rejections from `runAgentLoop` to avoid hanging streams. | Addresses #8705 and improves agent robustness. |
| **#8696** | [fix(tui): handle Apple Terminal meta arrows](https://github.com/earendil-works/pi/pull/8696) | Recognizes legacy Option+arrow sequences (`ESC ESC [ A‑D`) as Alt+arrow. | Improves keyboard navigation on macOS Terminal.app. |

---

## Feature Request Trends
1. **Session & History Continuity** – Users want `/resume` to be faster (only read file headers) and session replacement to preserve history across different working directories (#8269).  
2. **Interactive Composer** – A provisional, editable composer that appears while Pi is still loading extensions and runtime state would let users start drafting early (#8689).  
3. **System Prompt Customization** – Reliable ways to edit default system prompts while keeping plugin additions, without the current “three flawed approaches” (#8391).  
4. **Extension & Tool Improvements** – More examples for MCP with dynamic tool loading (#8703), extension‑side turn termination, and caller‑controlled RPC client timeouts (#7824).  
5. **UI/UX Polishes** – Click‑to‑position cursor in the prompt editor (#8701), better mouse selection handling, and smarter autocomplete scoring for nested results (#8669).  
6. **Model & Provider Enhancements** – Support for newer models like `qwen3.8-flash` (token plan) (#8709), NVIDIA InferenceHub as a built‑in provider (#8664), and fine‑grained thinking levels for DeepSeek V4 Pro (#8694).

---

## Developer Pain Points
- **Performance & Scaling**: O(n²) reasoning_details accumulation (#8648), CPU spikes from Z.AI thinking streams (#8711), and slow editor navigation with large buffers (#8029) are recurring bottlenecks.  
- **Configuration & Load Failures**: v0.84.3 broke global extensions by removing expected internal modules (#8620) and introducing proxy‑related construct errors (#8610).  
- **Event‑Stream Robustness**: Unhandled rejections in `agentLoop` and `agentLoopContinue` leave streams hanging (#8705), causing resource leaks.  
- **Rendering & Cross‑Platform Bugs**: Soft‑line‑break rendering, word‑per‑line layout, and stray `.` prefix in PowerShell commands (#8688) hurt usability on Windows/WSL2.  
- **Testing & Maintenance**: Developers note that session file parsing is overly aggressive (#8710) and that editing tools like `read`/`write` still rely on outdated cwd resolution, despite PRs aiming to fix this (#8627).

---

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-27

---

## 1. Today's Highlights

Qwen Code shipped **v0.22.2** with a breaking architectural change: the persistent Node REPL is now delivered as a standalone MCP server rather than an integrated component. The release also converges three continuation prompts under a single guarded contract and requires explicit user confirmation for certain core operations. On the issue side, the community is actively tracking **Agent Team lifecycle races** (five split-out issues from audit #10074), a **permissions.allow semantic shift** in 0.22.1 that silently disables uncovered tools, and growing momentum behind the **ink → OpenTUI rendering migration** proposal.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.22.2** | Stable | **Breaking:** `refactor(node-repl)!:` persistent Node REPL now a standalone MCP server ([#9499](https://github.com/QwenLM/qwen-code/pull/9499)) · `fix(goal):` converge three continuation prompts on one guarded contract ([#9834](https://github.com/QwenLM/qwen-code/pull/9834)) · `feat(core):` require explicit user confirmation |
| **v0.22.2-preview.1** | Preview | Same change set as v0.22.2 |
| **desktop-v0.2.2** | Desktop | Qwen Code Desktop v0.2.2 with the same core changes |
| **cua-driver-rs-v0.20.1** | Driver | Prebuilt CUA driver binaries for macOS (universal, notarized), Linux (x86_64 + arm64, glibc 2.31), Windows (x86_64 + arm64), and Node.js (`@qwen-co…`) |

---

## 3. Hot Issues

### 🔴 #10218 — `permissions.allow` Semantic Change: Tools Silently Disabled Since 0.22.1
**Author:** pandazhangS | **Comments:** 4 | [Link](https://github.com/QwenLM/qwen-code/issues/10218)

A behavior regression introduced in 0.22.1: `permissions.allow` previously acted as an auto-approve list where uncovered tools followed normal decision flow. Now, if at least one allow rule exists, any tool not matching the allowlist is **registered-level disabled** with no prompt — `not covered by any permissions.allow rule in the active registry allowlist`. This is a silent breaking change with no documentation. Community reaction is concerned; users on Windows are hitting this hard.

### 🔴 #10227 — Custom Model Vendor Cannot Converse (Moonshot JSON Schema)
**Author:** ru1yex | **Comments:** 5 | [Link](https://github.com/QwenLM/qwen-code/issues/10227)

Custom model vendors (specifically Moonshot) fail with `tools.function.parameters is not a valid moonshot flavored json schema` — the `properties` field must be an object, but the generated schema violates this. This blocks users who rely on non-standard model providers. A real interoperability pain point.

### 🔴 #10074 — Agent Team Lifecycle Audit: 5 Source-Identified Race & Cleanup Risks
**Author:** netbrah | **Comments:** 3 | [Link](https://github.com/QwenLM/qwen-code/issues/10074)

The parent audit that spawned five split-out issues (#10205–#10211). Covers interleavings where teammate events are lost before the event bridge attaches, stale reclaim deleting newer team generations, ghost members persisting after failed concurrent spawn, concurrent leader assignments dispatching one task to two teammates, and `team_delete` reporting success after filesystem cleanup fails. **No reproduction tests yet** — these are static-analysis findings. High priority for multi-agent users.

### 🟡 #8662 — Migrate TUI Rendering Layer from ink to OpenTUI
**Author:** chiga0 | **Comments:** 9 | [Link](https://github.com/QwenLM/qwen-code/issues/8662)

The most-discussed issue. The current TUI uses **ink 7 + React 19** with a ~1037-line patched renderer and a custom Virtual Viewport mode, causing flicker and structural problems that are unfixable within ink. This is a long-term roadmap item tagged `terminal-ux`. The 9 comments indicate strong community interest in a cleaner rendering architecture.

### 🟡 #10210 — `team_delete` Reports Success After Filesystem Cleanup Fails
**Author:** netbrah | **Comments:** 4 | [Link](https://github.com/QwenLM/qwen-code/issues/10210)

`deleteTeamDirs()` runs two `fs.rm` calls via `Promise.allSettled()` but never inspects results. Non-ENOENT errors (EACCES, EIO) are swallowed, so the tool reports complete success even when directories remain. A correctness gap that could leave orphaned state on disk.

### 🟡 #889 — Support OpenAI Response API
**Author:** junmediatek | **Comments:** 4 | [Link](https://github.com/QwenLM/qwen-code/issues/889)

Request to support the OpenAI Response API (Microsoft Azure AI Foundry endpoint), specifically for **gpt-5-codex** which is only accessible via this API. A clear feature gap for users wanting to leverage the newest OpenAI models.

### 🟡 #8586 — Track `activeWork` and Background Agent Recovery
**Author:** doudouOUC | **Comments:** 4 | [Link](https://github.com/QwenLM/qwen-code/issues/8586)

Request to add an explicit `activeWork` fact to deep daemon health and build recovery for background Agents that outlive their foreground prompt. Five layers of behavior specified: deep health, ACP session reporting, recovery path, etc. Tied to the `daemon` roadmap.

### 🟡 #8827 — Harden Coordinated Terminal Teardown Invariants (Testing)
**Author:** ZevGit | **Comments:** 6 | [Link](https://github.com/QwenLM/qwen-code/issues/8827)

Follow-up to PR #7837. Non-blocking hardening suggestions for CLI terminal teardown with no known reproductions. Testing infrastructure gap — important for stability but low immediate risk.

### 🟡 #10000 — `/find-simplifications` Candidate Ledger
**Author:** qqqys | **Comments:** 7 | [Link](https://github.com/QwenLM/qwen-code/issues/10000)

Long-lived ledger for the `/find-simplifications` skill. Each run surveys a repo slice for dead code, stale allowlist rows, orphan locale keys, and other unneeded surface. The 7 comments suggest active community involvement in codebase cleanup.

### 🟡 #10242 — E2E on main: GitHub Runners Cannot Reach `OPENAI_BASE_URL` (Aliyun Beijing)
**Author:** yiliang114 | **Comments:** 3 | [Link](https://github.com/QwenLM/qwen-code/issues/10242)

Post-merge E2E runs intermittently fail because GitHub-hosted runners can't reliably reach the model endpoint behind `OPENAI_BASE_URL`. Network-reachability, not a regression. Needs lane relocation or endpoint switch.

---

## 4. Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| [#10217](https://github.com/QwenLM/qwen-code/pull/10217) | fix(autofix) | Raises repair agent budget 45→60 min and develop-issue step backstop 55→70 min — recent runs were cutting off work about to land |
| [#10117](https://github.com/QwenLM/qwen-code/pull/10117) | fix(autofix) | Surfaces thread-resolution guard refusals in the round report instead of silent `::warning::` log lines; fixes #10106 |
| [#10245](https://github.com/QwenLM/qwen-code/pull/10245) | fix(core) | Recovers round text emitted before `TeamManager` event bridge attachment — fixes lost teammate initial results |
| [#10213](https://github.com/QwenLM/qwen-code/pull/10213) | fix(core) | Propagates filesystem cleanup failures in `team_delete`; `Promise.allSettled` results now inspected — closes #10210 |
| [#10223](https://github.com/QwenLM/qwen-code/pull/10223) | fix(core) | Adds compensating `writeTeamFile()` in `spawnTeammate()` catch block — removes ghost members from persisted roster after failed concurrent spawn — closes #10208 |
| [#10090](https://github.com/QwenLM/qwen-code/pull/10090) | fix(core) | Rejects ambiguous `send_message` calls carrying both teammate name and background-task ID — silent routing on task ID fixed |
| [#10249](https://github.com/QwenLM/qwen-code/pull/10249) | fix(review) | Strips ANSI escape sequences from `gh api` JSON output before parsing; adds regression coverage for colorized JSON, arrays, and NDJSON |
| [#9929](https://github.com/QwenLM/qwen-code/pull/9929) | fix(artifacts) | `updatedAt` now moves with artifact content changes; exposes live `sizeBytes` while preserving registration-time fingerprint baseline |
| [#10244](

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest - 2026-08-27

## 1. Today's Highlights
The team has prioritized critical stability fixes and architectural refinements. The v0.9.12 release underwent significant cleanup of mega files (reaching ~18k lines in core modules) to alleviate memory pressure, while a series of PRs resolved long-standing concurrency issues regarding the Runtime Store Owner Lock. Additionally, new integrations have been added, including OpenRouter’s `qwen3.8-flash` model and a Tailscale-enabled web interface for `codewhale`.

## 2. Releases
**No new major releases** were published in the last 24 hours. Recent activity has focused on internal refactoring and bug resolution rather than version tagging. The v0.9.12 branch continues to be stabilized through aggressive file decomposition and lock management improvements.

## 3. Hot Issues
1.  **[#5586] Decompose Mega Files ([v0.9.12])** – Critical cleanup of `lib.rs`, `config.rs`, and `client.rs` to reduce line counts from ~18k–12k down to manageable levels, addressing memory overhead in production runs.
2.  **[#5630] Runtime Store Owner Lock** – A blocking issue where a global single-owner lock prevented concurrent Codewhale sessions. Resolved via PR #5638, ensuring per-session isolation while maintaining a shared root option.
3.  **[#5620] Context Pressure Warning** – A medium-severity bug where transient context pressure warnings were silently ignored. Now addressed by persisting these warnings as permanent UI status indicators.
4.  **[#5533] Supervised Operation Control Surface** – Proposal for a dedicated control socket (interrupt/status/relaunch) enabling external supervisors to manage sessions more effectively.
5.  **[#5637] Scope MCP Secret Providers** – Design initiative to restrict secret provisioning to the owning runtime, mitigating risks associated with host-owned keyrings and cross-process credential leakage.
6.  **[#5625] Non-Blocking Pending Input Peek** – Enhancement allowing light-weight inspection of pending user input during mid-turn guidance without freezing the interaction flow.
7.  **[#5636] Degrade Incompatible Moonshot Tools** – Fix ensures that incompatible tool calls fail gracefully per-tool rather than breaking the entire request chain.
8.  **[#5632] One Worker System & Keychain Retirement** – Architectural shift consolidating fleet/sub-agent roles into a single worker process, retiring the legacy Keychain/OS-keyring product path.
9.  **[#5628] Enterprise Launch Readiness** – Preparation for official enterprise distribution, including operator documentation and launch handoffs.
10. **[#5624] Live Session Token Totals** – Added real-time visibility into token consumption per session, displaying input/output/cache metrics for better resource planning.

## 4. Key PR Progress
1.  **[#5638] fix(runtime): scope the thread store per session** – Closes #5630 by moving the runtime store root to `$CODEWHALE_HOME/sessions/<id>/runtime`, allowing multiple instances to coexist.
2.  **[#5626] feat(runtime-api): add per-thread usage endpoint** – Implements `GET /v1/threads/{id}/usage` to provide granular monitoring of thread-level resource consumption.
3.  **[#5631] feat(models): add OpenRouter qwen3.8-flash** – Curates and adds the `qwen3.8-flash` model (1M context, 131K output) to the available model catalog.
4.  **[#5635] feat(web): embed tsnet for codewhale web --tailscale** – Enables secure Tailscale connectivity for the web interface, expanding deployment flexibility.
5.  **[#5634] fix(runtime): scope the thread store per session** – Duplicate effort to finalize the per-session storage isolation introduced in #5638.
6.  **[#5636] fix(tui): degrade incompatible Moonshot tools** – Improves robustness by isolating incompatible tool failures within specific tool contexts.
7.  **[#5632] One worker system; retire Keychain product path** – Refactors sub-agent logic into a unified worker model and deprecates the obsolete Keychain backend.
8.  **[#5629] fix(tui): persist context pressure warnings** – Persists the context pressure indicator as a persistent UI element, improving safety signaling.
9.  **[#5628] Open: Enterprise launch readiness** – Develops operator documentation and launch sequences for commercial deployment.
10. **[#5623] feat(tui): report post-compaction input tokens** – Adds telemetry for input tokens after compaction, optimizing memory efficiency post-decompaction.

## 5. Feature Request Trends
*   **Supervision & Control**: Strong interest in explicit control surfaces for supervised operations (Issue #5533) and robust interruption mechanisms.
*   **Tooling Robustness**: Multiple requests for graceful degradation (Issues #5620, #5636) and improved tool projection consistency (Issue #5633).
*   **Security & Secrets**: A clear trend toward securing MCP secret providers directly within the runtime (Issues #5637, #5633) rather than relying on host keyrings.
*   **Web & Networking**: Growing demand for distributed deployments, specifically Tailscale integration for the web interface (Issue #5635).

## 6. Developer Pain Points
*   **Memory Overhead**: Large monolithic Rust files (e.g., `lib.rs` at ~18k lines) cause significant memory pressure in production environments.
*   **Silent Failures**: Context pressure warnings and lock contention were previously invisible or incorrectly handled, leading to subtle degradation.
*   **Complexity of Secret Management**: Developers are concerned about credential leakage between host keyrings and the runtime process space.
*   **Interaction Latency**: Users want non-blocking ways to inspect pending inputs and monitor session costs without disrupting the main conversation flow.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*