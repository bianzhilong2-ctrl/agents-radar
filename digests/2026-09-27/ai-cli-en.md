# AI CLI Tools Community Digest 2026-09-27

> Generated: 2026-09-27 02:35 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Ecosystem — 2026-09-27

---

## 1. Ecosystem Overview

The AI CLI tool landscape on 2026-09-27 reflects a mature, multi-vendor ecosystem with nine active projects spanning startups (Anthropic, OpenAI, Google), platform giants (GitHub), and open-source communities (OpenCode, Pi, DeepSeek TUI, Qwen Code). Development velocity is high across the board: five tools had PR activity today, three shipped alpha or nightly builds, and all reported active issue triage. The dominant themes converging across communities—MCP integration hardening, session resilience, Windows platform support, and TUI/UX refinement—signal that the industry is transitioning from feature delivery to stability and production readiness. Meanwhile, Kimi Code CLI's complete inactivity underscores the consolidation pressure facing smaller entrants in a rapidly maturing market.

---

## 2. Activity Comparison

| Tool | Hot Issues | PRs Updated | Releases Today | Top Issue Engagement |
|------|-----------|-------------|----------------|---------------------|
| **Claude Code** | 9 | 2 | None | #65961 (247 👍, 38 comments) |
| **OpenAI Codex** | 10 | 10 | 7 alpha versions (0.159.x, 0.158.x) | #48074 (29 comments, 50 👍) |
| **Gemini CLI** | 4 | ~6 (p1 batch) | None | #22323 (13 comments, p1) |
| **GitHub Copilot CLI** | 10 | 0 | None | #2995 (14 comments, 9 👍) |
| **Kimi Code CLI** | 0 | 0 | None | — |
| **OpenCode** | 10 | 10 | None | #9541 (13 comments) |
| **Pi** | 10 | 10 | None | #4945 (80 comments, 34 👍) |
| **Qwen Code** | 10 | 10 | 1 nightly build (v0.24.6) | #12380 (32 comments) |
| **DeepSeek TUI** | 10 | 10 | None | #6184 (engine freeze) |

**Key observations:**
- **OpenAI Codex** leads in raw release output (7 alpha versions in 24 hours), indicating aggressive stabilization ahead of a stable launch.
- **Claude Code** has the single highest community engagement spike (247 👍), but the lowest PR throughput—suggesting a maintainer-heavy, issue-driven development cycle.
- **Gemini CLI** and **Kimi Code CLI** are the least active; Gemini CLI is early-stage (p1 bugs dominating), while Kimi CLI appears dormant.
- **OpenAI Codex, OpenCode, Pi, Qwen Code, and DeepSeek TUI** all show 10 PRs and 10 issues—a sign of well-structured, active maintainer engagement.

---

## 3. Shared Feature Directions

### 3.1 MCP Integration Hardening (6/9 tools)
MCP (Model Context Protocol) is the most universally contested integration layer. Claude Code faces strict schema validation rejecting valid responses (#97319) and connector tool exposure failures (#61682). Copilot CLI battles MCP init failures (#4370), connection timeouts on resume (#4753), and configurable tool sets (#4076). OpenCode reports `env` dropping from resolved MCP configs (#36434) and orphaned npx processes (#50363). Pi, Qwen Code, and DeepSeek TUI all reference MCP configuration, lifecycle, or compatibility issues. **Convergence:** The ecosystem needs standardized MCP schema validation, graceful method-handling, and lifecycle management.

### 3.2 Session Durability & State Recovery (5/9 tools)
Session resilience is a top concern: Copilot CLI faces heap OOM on resume (#4664) and corrupted session files (#1864). OpenCode is fixing unsettled tool results on aborted turns (#51558) and streaming session death (#51573). DeepSeek TUI is tackling orphaned sessions (#6640) and unbound thread session IDs (#6659). Pi has compaction crash fixes (#10092) and empty tool call ID corruption (#10041). Qwen Code addresses ACP bridge session loss (#11908). **Convergence:** Checkpointing, state recovery, and graceful abort are becoming baseline expectations.

### 3.3 Windows Platform Support (5/9 tools)
Windows remains the most fragmented platform: Codex reports terminal flashing (#48074), blank screens (#48313), and long-path cache failures (#46255). Pi has a canonical Windows discussion thread (#7547) with 68 comments. OpenCode flags severe Windows sluggishness (#39251). Qwen Code has update mechanism bugs (#12727) and lock-file failures (#11889). DeepSeek TUI has multiline paste regression (#6427). **Convergence:** Windows PTY/console handling, path-length limits, and file-locking behavior are systemic pain points requiring platform-specific engineering investment.

### 3.4 TUI/UX Polish (4/9 tools)
Codex is unifying borderless headers (#48562), fixing math rendering (#48551), and preserving Markdown tables (#48549). Pi is implementing system-aware theming (#10067) and clipboard fixes (#10066). DeepSeek TUI targets scrolling lag (#6652) and refresh responsiveness (#6651). Claude Code shipped diff-pane improvements (#95587, #94847). **Convergence:** The TUI layer is transitioning from functional to polished; copy-paste fidelity, scrolling performance, and visual consistency are the new battleground.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | GitHub Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI | Gemini CLI |
|-----------|------------|-------------|-------------------|----------|----|-----------|-------------|------------|
| **Primary Model** | Anthropic (Opus/Sonnet) | OpenAI (GPT-5.x) | OpenAI + providers | Multi-provider | Multi-provider (OpenAI, Mistral, Anthropic, xAI) | Qwen + providers | DeepSeek + providers | Google Gemini |
| **Core Focus** | Agent instruction-following, safety, diff UX | Sandbox provisioning, executor reliability | Enterprise integration, MCP, session durability | Desktop/IDE parity, streaming | Provider abstraction, telemetry | Managed Agent architecture, ACP bridge | TUI engine, turn observability | Foundational agent framework |
| **Target User** | Professional developers needing reliable agent behavior | Enterprise teams needing sandboxed execution | GitHub ecosystem developers | Cross-platform developers wanting IDE-like workflows | Power users wanting multi-provider flexibility | Teams adopting managed agent patterns | TUI-native developers | Early adopters, research-oriented |
| **Technical Approach** | Tight model integration, safety guardrails | Sandboxed executors, private-IP proxying | V8-based, session file management | Go-based, plugin architecture, Rust TUI | Rust-based, provider-agnostic, telemetry spans | Rust + Go, dual-path architecture, ACP bridge | Rust TUI engine, item-store optimization | TypeScript/Python, memory-safe, cancel propagation |
| **Maturity Signal** | Stable, slow-release, issue-driven | Rapid alpha iteration toward stable | Enterprise-grade, moderate velocity | Active feature + bug-fix cycle | Active multi-provider expansion | Architectural evolution (staged delivery) | Engine-level optimization phase | Early-stage, foundational |

**Key differentiators:**
- **Claude Code** is the only tool with a dedicated "safety guard" subsystem (PowerShell, cyber, screen capture false positives), reflecting Anthropic's emphasis on responsible AI deployment.
- **OpenAI Codex** uniquely invests in sandbox infrastructure (Seatbelt profiles, private-IP proxying, executor timeouts)—positioning itself as the enterprise-grade, containerized agent runtime.
- **GitHub Copilot CLI** differentiates through deep GitHub ecosystem integration and enterprise auth (bearer tokens, policy-aware MCP enablement), but struggles with V8 heap stability.
- **Pi** is the most provider-agnostic, supporting OpenAI, Mistral, Anthropic, and xAI with explicit telemetry spans and system-aware theming—targeting the "model-agnostic CLI" niche.
- **Qwen Code** is uniquely pursuing a **dual-path architecture** (Legacy + Managed agents), a structural decision that no other tool is making, positioning for long-term daemonized session management.
- **DeepSeek TUI** is the most TUI-native, focusing on scroll performance, artifact tracking, and turn observability—building the best terminal experience for text-first workflows.

---

## 5. Community Momentum & Maturity

### Tier 1: High Activity, Rapid Iteration
- **OpenAI Codex**: 7 alpha releases, 10 PRs, 10 issues in a single day. The velocity signals a team pushing toward a stable release. However, the volume of Windows/desktop regressions suggests the codebase is under significant feature pressure. **Maturity:** Pre-stable, high-risk/high-reward.
- **OpenCode**: 10 PRs and 10 issues with balanced feature/bug-fix distribution. The worktree browser, context-window-aware output limits, and streaming session fixes show mature engineering judgment. **Maturity:** Growing stable; desktop parity is the next frontier.
- **Pi**: 10 PRs including telemetry, theming, and clipboard fixes. The breadth of improvements (from low-level Rust to UX polish) indicates a well-resourced team. Multi-provider support is the strongest differentiator. **Maturity:** Rapidly maturing; provider abstraction is a genuine moat.

### Tier 2: Steady, Maintainer-Led
- **Qwen Code**: 10 PRs, 1 nightly build, and a foundational RFC (#12380) with 32 comments. The staged delivery architecture suggests long-term strategic planning. The ACP bridge work is technically ambitious. **Maturity:** Architecturally ambitious, but dependency on staged delivery timelines introduces risk.
- **DeepSeek TUI**: 10 PRs, balanced across performance, docs, and bug fixes. The engine-level optimizations (item-store traversal, undo path restoration) show deep technical investment. **Maturity:** Mid-stage; TUI excellence is the core value proposition.
- **Claude Code**: 2 PRs but 247 👍 on a single issue. The low PR throughput with high issue engagement suggests Anthropic maintains tight control over merges. The diff-pane improvements that landed show deliberate, quality-focused iteration. **Maturity:** Stable; the challenge is scaling issue resolution velocity.

### Tier 3: Emerging or Dormant
- **GitHub Copilot CLI**: 0 PRs today, but 10 active issues. The enterprise focus and deep GitHub integration provide a captive user base, but the V8 heap OOM problem (#4725) is a critical stability concern that needs immediate attention. **Maturity:** Feature-complete but stability-challenged.
- **Gemini CLI**: 4 hot issues with p1 severity (subagent recovery masking, generalist hangs). The zero-dependency sandboxing EPIC is ambitious but early. **Maturity:** Early-stage; foundational bugs must be resolved before feature expansion.
- **Kimi Code CLI**: Zero activity across all dimensions. **Maturity:** Effectively dormant; likely deprioritized or sunsetted.

---

## 6. Trend Signals

### 6.1 MCP Is

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-09-27 | Source: [anthropics/skills](https://github.com/anthropics/skills)*  

---

## 1. Top Skills Ranking  

The most-commented and actively discussed Skills reflect a mix of infrastructure improvements, enterprise tooling, and developer experience enhancements:

| Rank | Skill (PR) | Functionality | Status |
|------|------------|---------------|--------|
| 1 | [fix(skill-creator): isolate trigger evals and handle Windows failures (#1298)](https://github.com/anthropics/skills/pull/1298) | Improves reliability of trigger evaluation in skill-creator by addressing cross-platform compatibility and runtime error handling. | Open |
| 2 | [fix(mcp-builder): support mcp>=2 streamable_http_client import (#1742)](https://github.com/anthropics/skills/pull/1742) | Fixes compatibility with MCP v2+ libraries, ensuring proper HTTP client integration for MCP-based tools. | Open |
| 3 | [feat(skills): add proofcore-contract-auditor (#1771)](https://github.com/anthropics/skills/pull/1771) | Introduces a Solidity/Rust smart contract auditor that anchors audit proofs on the TON blockchain via ProofCore’s zero-knowledge protocol. | Open |
| 4 | [Detect orphaned docx comments (#1734)](https://github.com/anthropics/skills/pull/1734) | Adds logic to detect and report orphaned comments in DOCX files during document processing workflows. | Open |
| 5 | [Add md2video-audio skill (#1703)](https://github.com/anthropics/skills/pull/1703) | Converts Markdown into MP4 videos with AI-generated voiceovers using Marp + TTS engines — aimed at content creators. | Open |
| 6 | [fix(docx): report LibreOffice timeout as an error and verify output (#1792)](https://github.com/anthropics/skills/pull/1792) | Ensures DOCX conversions fail gracefully when conversion tools time out or produce incomplete results. | Open |
| 7 | [Add pyxel skill for retro game dev (#525)](https://github.com/anthropics/skills/pull/525) | Enables rapid prototyping of pixel-art games using Pyxel, including testing and frame inspection capabilities. | Open |

---

## 2. Community Demand Trends  

Based on top Issues, several emerging trends highlight evolving community needs:

- **Security & Governance**: Interest grows around governance patterns for agent systems (Issue [#412](https://github.com/anthropics/skills/issues/412)), trust scoring, and safe permission models (`anthropic/` namespace impersonation concerns raised in Issue [#492](https://github.com/anthropics/skills/issues/492)).
- **Workflow Automation**: Users seek pre-configured skills for SharePoint/SPO integrations (Issue [#1175](https://github.com/anthropics/skills/issues/1175)) and Notion-to-task pipelines (PR [#1245](https://github.com/anthropics/skills/pull/1245)).
- **Testing & Validation Tools**: Strong interest in structured testing practices — from E2E automation (AWT – Issue [#822](https://github.com/anthropics/skills/pull/822)) to unit/integration strategies (testing-patterns skill – PR [#723](https://github.com/anthropics/skills/pull/723)).
- **Developer Productivity**: Requests include cloud HPC interfaces like SCNet (PR [#1615](https://github.com/anthropics/skills/pull/1615)), memory compaction (Issue [#1329](https://github.com/anthropics/skills/issues/1329)), and compact state representations.
- **Document Processing Enhancements**: Focus remains high on DOCX/ODT/PDF manipulation, especially around robustness (Issue [#541](https://github.com/anthropics/skills/pull/541)), validation (Issue [#538](https://github.com/anthropics/skills/pull/538)), and rendering fidelity.

---

## 3. High-Potential Pending Skills  

These are active, well-defined PRs currently awaiting merge or further review but show strong potential impact:

- **[blast-radius](#1776)** – A pre-execution checklist designed to reduce risk in destructive batch operations such as data deletion or access revocation. Practical use case aligns closely with production safety workflows.  
  🔗 [GitHub Link](https://github.com/anthropics/skills/pull/1776)

- **[notion-spec-to-implementation](#1245)** – Automates conversion of Notion specs into actionable implementation tasks and acceptance criteria directly inside Claude Code. Useful for agile teams leveraging Notion for planning.  
  🔗 [GitHub Link](https://github.com/anthropics/skills/pull/1245)

- **[testing-patterns](#723)** – Comprehensive guide covering best practices across unit tests, React component testing, and end-to-end scenarios. Could become foundational reference material for developers adopting Claude Code.  
  🔗 [GitHub Link](https://github.com/anthropics/skills/pull/723)

- **[compact-memory](#1329)** – Proposes symbolic notation for compact agent state tracking, reducing token overhead in long-running agent sessions. Addresses known scalability issue in extended agent lifecycles.  
  🔗 [GitHub Link](https://github.com/anthropics/skills/issues/1329)

---

## 4. Skills Ecosystem Insight  

The community’s most concentrated demand lies in **developer-centric, low-friction workflow automation tools**—particularly those bridging documentation, code generation, and infrastructure interaction—indicating maturation beyond basic file format support toward deeper integration with real-world software delivery pipelines.

---



# Claude Code Community Digest — 2026-09-27

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours, but the issue queue is active with several high-impact bugs. The most heated discussion centers on Claude's tendency to add verbose code comments by default despite user instructions to stop (#65961, 38 comments / 247 👍), while a fresh regression in v2.1.282 has TUI users unable to type mid-session (#96931). On the PR side, two diff-pane improvements landed, closing the gap between the inline diff experience and the built-in panel.

---

## 2. Releases

**None in the last 24 hours.**

---

## 3. Hot Issues

### 🔴 #65961 — Claude verbose code comments by default — ignores instructions to stop
- **Why it matters:** Users report Claude inserting explanatory comments in code even when explicitly told not to. This strikes at the heart of the "agent follows instructions" promise and has generated the highest engagement of any open issue (247 👍).
- **Community reaction:** Frustration is high; many commenters report the same behavior across models and sessions. Some workarounds involve system-prompt engineering, but consensus is this needs a model-level or setting-level fix.
- [Link](https://github.com/anthropics/claude-code/issues/65961)

### 🔴 #61682 — GitHub connector shows "Connected" but exposes no tools in Cowork (Windows 11)
- **Why it matters:** The connector UI reports success but no MCP tools are actually available, silently breaking GitHub-integrated workflows on Windows. This is a trust-breaking bug — the UI lies about connectivity.
- **Community reaction:** 33 comments; users are troubleshooting whether this is a Cowork-specific, Windows-specific, or connector-version issue. Likely a backend validation gap.
- [Link](https://github.com/anthropics/claude-code/issues/61682)

### 🟠 #96931 — Input box stops accepting keystrokes in 2.1.282 after 0–90 seconds into session
- **Why it matters:** A regression introduced in v2.1.282 (v2.1.281 was fine). Sessions freeze mid-typing, Ctrl-C does nothing, and the process stays alive — a hard blocker for interactive use.
- **Community reaction:** 11 comments, all confirming the same freeze pattern. Users are pinning to 2.1.281 as a workaround. Needs urgent triage.
- [Link](https://github.com/anthropics/claude-code/issues/96931)

### 🟠 #25664 — SSH remote passes local plugin paths and MCP configs to remote server, causing hang
- **Why it matters:** When connecting via SSH, Claude Code forwards local macOS paths and MCP configs to the remote `ccd-cli`. Those paths don't exist remotely, so the remote process hangs indefinitely until timeout. This breaks SSH remote workflows entirely.
- **Community reaction:** 9 comments. Long-standing issue (opened Feb 2026) still open. Users recommend avoiding SSH mode or using `--no-plugins` as a stopgap.
- [Link](https://github.com/anthropics/claude-code/issues/25664)

### 🟠 #97319 — MCP client rejects valid tools/list response due to strict validation of ttlMs/cacheScope fields
- **Why it matters:** The Roblox Studio MCP server returns a valid `tools/list` response, but Claude Code's strict schema validation rejects it because of optional `ttlMs`/`cacheScope` fields. This blocks third-party MCP server integrations over a validation strictness issue.
- **Community reaction:** 7 comments, 4 👍. Developers with custom MCP servers are hitting this wall — the fix should relax validation to accept responses that omit or include these optional fields.
- [Link](https://github.com/anthropics/claude-code/issues/97319)

### 🟡 #93046 — Usage-limit warning names the parent model, not the subagent's model
- **Why it matters:** When a subagent (e.g., `model: fable`) consumes its budget, the warning banner blames the parent model (Opus). This causes confusion — users can't tell which model's limit is actually being hit.
- **Community reaction:** 6 comments. A UI correctness issue that has real operational impact when managing multi-model budgets.
- [Link](https://github.com/anthropics/claude-code/issues/93046)

### 🟡 #97117 — Opus 5.5: Severe scope creep and task focus regression compared to Opus 4.6
- **Why it matters:** A user with 18 prior Opus 4.6 sessions reports that Opus 5.5 exhibits significant scope creep and loss of focus, requiring a rollback to 4.6. This is one of the first detailed public comparisons of the two model versions in long-running projects.
- **Community reaction:** 5 comments. Other users are watching closely — model regressions between versions are high-stakes for production workflows.
- [Link](https://github.com/anthropics/claude-code/issues/97117)

### 🟡 #96718 — Artifact "Version history" removed from viewer menu across Claude Code, Cowork, and claude.ai
- **Why it matters:** The version history feature was silently removed from the artifact viewer menu. Users who relied on browsing prior artifact versions now have no UI path to them. Related to #95442.
- **Community reaction:** 4 comments, 3 👍. A feature removal without notice is frustrating; users want the ability restored or a documented migration path.
- [Link](https://github.com/anthropics/claude-code/issues/96718)

### 🟡 #94041 — Native /goal Stop hook re-fires indefinitely with no way to acknowledge a hold
- **Why it matters:** A session-scoped `/goal` Stop hook can loop forever with stale text, even after the assistant provides evidence the condition is met. Only the built-in repeated-block safety valve ends it. This makes `/goal` unreliable for long-running autonomous tasks.
- **Community reaction:** 3 comments, 1 👍. Users want a way to acknowledge a deliberate hold or signal completion without the hook re-firing.
- [Link](https://github.com/anthropics/claude-code/issues/94041)

### 🟡 #73882 — PowerShell safety guard false positive: here-string body text with paths blocked as 'Remove-Item on system path'
- **Why it matters:** The PowerShell safety analyzer misinterprets multiline here-string content containing paths (e.g., `@'...requirements.txt...@'`) as a `Remove-Item` on a system path, blocking legitimate `gh pr create --body` commands.
- **Community reaction:** 3 comments. False positives in the safety guard erode trust — users are forced to bypass or restructure valid commands.
- [Link](https://github.com/anthropics/claude-code/issues/73882)

---

## 4. Key PR Progress

Only two PRs were updated in the last 24 hours, both targeting the **diff pane** experience:

### #95587 [CLOSED] — diff: a resumed session with edits opens the pane, /clear leaves it up, and the session line follows the engine's start
- **What it does:** Unifies three inconsistencies between the diff mod and the built-in panel. A resumed session with existing edits now opens the diff pane as soon as the width is known (matching the built-in panel's behavior on history restore). `/clear` now leaves the pane up instead of closing it, and the session line follows the engine's start.
- **Status:** Closed (likely merged).
- [Link](https://github.com/anthropics/claude-code/pull/95587)

### #94847 [OPEN] — diff: the first edit opens the pane only when it has a file to list
- **What it does:** Fixes a bug where the diff pane auto-opened on the first Edit/Write/NotebookEdit to *any* path — including writes outside the repo, to ignored files, or into a different worktree — which produced an empty pane ("No tracked changes"). Now the pane only opens when there's an actual file to list.
- **Status:** Open, awaiting review.
- [Link](https://github.com/anthropics/claude-code/pull/94847)

---

## 5. Feature Request Trends

Distilling from the issue queue, the most-requested feature directions are:

| Direction | Representative Issues |
|---|---|
| ** finer-grained cost/usage controls** | #95938 (Precise Session Reset Timer — hours & minutes), #93046 (subagent model in usage warnings) |
| **Localization** | #97553 (Danish `da-DK` UI localization for desktop / claude.ai) |
| **MCP server flexibility** | #97319 (relax `ttlMs`/`cacheScope` validation), #61682 (GitHub connector tool exposure) |
| **Diff pane UX** | #94847, #95587 (context-aware auto-open, resume behavior) |
| **SSH / remote development ergonomics** | #25664 (local paths leaking to remote), #84563 (WSL2 sandbox bind path) |

---

## 6. Developer Pain Points

Recurring themes from the issue queue:

1. **Model instruction-following drift:** #65961 (verbose comments despite "stop" instructions) and #97117 (Opus 5.5 scope creep vs. 4.6) suggest model behavior is inconsistent across versions and hard to constrain via prompts alone.

2. **MCP integration fragility:** Both #61682 (connector reports success but no tools) and #97319 (strict schema validation rejects valid responses) indicate the MCP layer has sharp edges — developers building custom integrations are hitting silent failures or validation walls.

3. **Platform-specific regressions:** A cluster of issues targets specific platforms: #96931 (Linux TUI freeze in 2.1.282), #97063 (FreeBSD lockup above 2.1.278), #97530 (Windows desktop crash under concurrent sessions), #97255 (macOS `computer://` links broken), #97551 (Intel-only `node-pty` breaks macOS 28), #88114 (VS Code CRLF diff preview failure). Cross-platform QA coverage appears thin.

4. **Safety guard false positives:** #73882 (PowerShell here-string path blocking), #94086 (cyber safeguard flags legitimate background shell recovery), #97554 (desktop screen capture false positive during cross-device widget dev). Each false positive forces users to bypass safety mechanisms, eroding trust.

5. **SSH / remote workflow breakage:** #25664 (local paths hang remote SSH), #84563 (WSL2 sandbox fails on hardcoded `/mnt/c/` bind). Remote development modes remain fragile.

6. **Silent feature removals:** #96718 (Version history removed from artifact viewer) without notice or migration path leaves users scrambling.

7. **Cost and budget visibility:** #89865 (workflow verify stage fans out 355 Opus agents with no cost preview), #93046 (wrong model named in usage warnings). Developers managing multi-agent workflows need better cost telemetry and accurate attribution.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑09‑27**

---

### 1. Today's Highlights
- A flurry of **rust‑codex alpha releases** (0.159.0‑alpha.4 → 0.159.0‑alpha.7 and several 0.158.0‑alpha builds) landed in the last 24 h, indicating active stabilization of the upcoming CLI toolchain.  
- The most‑discussed issues continue to revolve around **Windows terminal flashing/spawning**, **Linux/macOS UI hangs after recent desktop updates**, and **sandbox/provisioning hiccups** (especially long‑path cache errors).  
- On the PR front, the bot‑maintained series of changes focused on **TUI polish (borderless headers, math rendering, markdown table preservation)**, **executor reliability (more time for provisioned executors, private‑IP proxying)**, and **platform‑specific security tweaks (macOS TLS trust in Seatbelt profiles)**.

---

### 2. Releases
| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.159.0-alpha.7` | Alpha | Latest in the 0.159.0 series – includes incremental bug‑fixes and CI updates. |
| `rust-v0.159.0-alpha.6` | Alpha | Precedes .7; improves Windows sandbox registration error context. |
| `rust-v0.159.0-alpha.5` | Alpha | Adds provisional support for newer executor timeouts. |
| `rust-v0.159.0-alpha.4` | Alpha | Early 0.159.0 work – refactors PTY handling on Windows. |
| `rust-v0.158.0-alpha.15.2` / `.15.1` / `.2.1` / `.1` | Alpha | Stabilisation patches for the 0.158.0 line (executor health checks, private‑IP proxying, TLS trust). |

*All releases are pre‑release alphas; no stable version was published today.*

---

### 3. Hot Issues (Top 10 by community engagement)

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| [#48074](https://github.com/openai/codex/issues/48074) | **Windows: terminal windows repeatedly flash during requests after installing the Codex daemon** | Persistent flashing disrupts workflow on Windows 11; indicates a regression in daemon‑spawned PTY handling. | 29 comments, 👍 50 |
| [#48208](https://github.com/openai/codex/issues/48208) | **[Linux Desktop][Regression] Codex UI hangs after update; thread_hydration times out** | UI becomes unusable after the latest desktop update; blocks all local tasks on Ubuntu/Linux Mint. | 22 comments, 👍 15 |
| [#48333](https://github.com/openai/codex/issues/48333) | **[Windows] Codex Desktop 26.924.1866.0 stuck on startup spinner until app‑server codex.exe is terminated** | Prevents the app from launching; forces users to kill the background process manually. | 17 comments, 👍 5 |
| [#48189](https://github.com/openai/codex/issues/48189) | **[Linux] Codex Desktop 26.924.20706 hangs indefinitely on "Starting your task"; rollback fixes** | Regression introduced in a recent desktop build; forces users to downgrade to recover productivity. | 15 comments, 👍 29 |
| [#48277](https://github.com/openai/codex/issues/48277) | **CLI: about 20 persistent terminal windows keep opening after an update** | Spawns dozens of stray terminals, cluttering the desktop and consuming resources. | 10 comments, 👍 3 |
| [#48313](https://github.com/openai/codex/issues/48313) | **[Windows][26.924.1866.0] App launches to a permanent blank white screen after update** | Users see only a blank window; the app is effectively unusable until a fix or rollback. | 10 comments, 👍 1 |
| [#48120](https://github.com/openai/codex/issues/48120) | **Codex CLI 0.157.0 spawns blank Windows Terminal windows during sandbox setup refresh** | Similar to #48074 but scoped to sandbox refresh; adds noise during routine CLI use. | 9 comments, 👍 6 |
| [#43573](https://github.com/openai/codex/issues/43573) | **Computer Use helper SIGTRAPs in UIElementTreeTransformation.transform: stale index passed to Array.remove(at:)** | Crashes the macOS Computer Use helper, breaking UI‑automation workflows. | 9 comments, 👍 2 |
| [#48422](https://github.com/openai/codex/issues/48422) | **Windows: visible console windows flash for shell process children on every session/turn** | Each agent turn causes a console flash, degrading the visual experience on Windows. | 7 comments, 👍 4 |
| [#46255](https://github.com/openai/codex/issues/46255) | **Windows sandbox provisioning fails on stale CUA dependency‑cache paths over 260 characters** | Long cache paths hit Windows MAX_PATH limit, causing sandbox setup to abort with “setup refresh had errors”. | 6 comments, 👍 5 |

---

### 4. Key PR Progress (Selected 10)

| PR | Link | Summary |
|----|------|---------|
| [#48575](https://github.com/openai/codex/pull/48575) | Allow provisioned executors more time to come online | Increases retry timeout for `environment_offline` to avoid premature failures when executors are still booting. |
| [#48568](https://github.com/openai/codex/pull/48568) | Allow exec‑server to proxy permitted private IPs upstream | Adds `--proxy-private-ips-via-upstream` so private‑network traffic can traverse an upstream VPN proxy. |
| [#48565](https://github.com/openai/codex/pull/48565) | Allow macOS TLS trust evaluation in network‑enabled Seatbelt profiles | Grants `mach-lookup` for `com.apple.TrustEvaluationAgent`, enabling proper TLS verification inside sandboxed profiles. |
| [#48562](https://github.com/openai/codex/pull/48562) | Use a consistent borderless session header in the TUI | Removes the boxed model row, unifies header layout across all session flows (resume, fork, clear‑screen). |
| [#48560](https://github.com/openai/codex/pull/48560) | Keep working tips stable during transcript interaction | Prevents tips from disappearing when users select or scroll the transcript, reducing UI jitter. |
| [#48551](https://github.com/openai/codex/pull/48551) | Fix TUI math rendering for zero and big wedge expressions | Makes `$0$` render correctly and translates `\bigwedge`, `\bigl`, `\bigr` to proper Unicode symbols. |
| [#48549](https://github.com/openai/codex/pull/48549) | Preserve Markdown tables and whitespace when copying TUI responses | Ensures copied tables retain Markdown formatting and that trailing whitespace (hard line‑breaks) is kept. |
| [#48548](https://github.com/openai/codex/pull/48548) | Preserve table cell source metadata through TUI rendering | Carries column alignments, cell coordinates, source ranges, and inline formatting into copy‑metadata for richer paste results. |
| [#48547](https://github.com/openai/codex/pull/48547) | Fade blossom replays back to the idle state | Animates the welcome blossom back to idle opacity over 400 ms after a replay, avoiding a sudden jump. |
| [#48544](https://github.com/openai/codex/pull/48544) | Make onboarding login links easier to copy | Adds a `c` shortcut to copy the browser sign‑in URL/device code, works in fullscreen and terminal modes. |

---

### 5. Feature Request Trends
- **Intent‑preserving task continuity** – explicit stop/pause semantics for long‑running agents (see [#48596](https://github.com/openai/codex/issues/48596)).  
- **Native terminal interaction** – stop hijacking the terminal, preserve native scrolling and copy/paste behavior ([#48542](https://github.com/openai/codex/issues/48542), [#48315](https://github.com/openai/codex/issues/48315)).  
- **Transparent sandbox/path handling** – better diagnostics and automatic mitigation for Windows path‑length limits and stale cache directories ([#46255](https://github.com/openai/codex/issues/46255), [#48120](https://github.com/openai/codex/issues/48120)).  
- **Reliable cross‑platform desktop launch** – eliminate blank screens, UI hangs, and spinner‑freezes after updates ([#48313](https://github.com/openai/codex/issues/48313), [#48208](https://github.com/openai/codex/issues/48208), [#48189](https://github.com/openai/codex/issues/48189)).  

Overall, the community is asking for **more predictable, non‑intrusive terminal/TUI behavior** and **robust, self‑healing sandbox/provisioning pipelines** that work across Windows, macOS, and Linux without manual work‑arounds.

---

### 6. Developer Pain Points
| Recurring Frustration | Evidence from Issues/PRs |
|-----------------------|--------------------------|
| **Windows terminal flashing / extra console windows** | #48074, #48120, #48277, #48422, #48540, #48498 |
| **Desktop UI hangs or blank screens after updates** | #48208, #48333, #48189, #48313, #48463 |
| **Sandbox provisioning failures (long paths, stale caches)** | #46255, #44425, #48120 |
| **TUI/UX regressions (copy‑paste, scroll, math rendering)** | #48139, #48542, #48315, #48551, #48549, #48548 |
| **Authentication / keychain locking on macOS** | #40226 |
| **Inconsistent model/feature availability across platforms** | Mixed reports of Windows‑specific console issues vs. Linux/macOS UI hangs. |
| **Need for better long‑running agent control** | Feature request #48596 highlights desire for explicit stop/intents. |

Addressing these pain points—particularly stabilising the Windows PTY/console handling, ensuring desktop updates are non‑breaking, and providing transparent sandbox diagnostics—will likely yield the highest immediate satisfaction for Codex developers.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest — 2026-09-27**

**Today's Highlights**  
Stability and performance dominate: a wave of p1 PRs tackles memory safety, scroll position, and cancellation propagation. Community focus remains on agent reliability, with critical bugs around subagent result masking and generalist hangs driving discussion. Architectural direction points toward AST-aware tooling and zero-dependency sandboxing.

**Releases**  
None in the last 24h.

**Hot Issues**  
1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery hides interruption (p1, 13 comments): Reports `GOAL` success when hitting `MAX_TURNS`, masking actual failures.  
2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs (p1, 8👍): Simple operations freeze indefinitely; major UX blocker.  
3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Zero-Dependency OS Sandboxing (p2, 9 comments): Architectural EPIC to safely leverage bash affinity; large effort item.  
4. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — browser subagent fails in wayland (p1): Platform-specific crash

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-27

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows **active stabilization work** around memory management, session resilience, and MCP integration—with two critical `OPEN` regressions: frequent JavaScript heap OOM crashes (#4725) and cloud-agent image viewing terminating sessions (#4930). Community engagement remains high on provider flexibility (DeepSeek, bearer tokens) and UX polish (text selection, plan-mode false positives).

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (Top 10 Noteworthy)

| # | Issue | Status | Why It Matters | Community Signal |
|---|-------|--------|----------------|------------------|
| [#4725](https://github.com/github/copilot-cli/issues/4725) | Frequent JavaScript heap out of memory | **OPEN** | Recurring V8 heap exhaustion (~4 GB) every few minutes during normal use; blocks long-running workflows. | 7 comments, 1 👍 — active discussion on GC logs |
| [#2995](https://github.com/github/copilot-cli/issues/2995) | Can't use DeepSeek API | **CLOSED** | High-demand BYO-model request; users want non-OpenAI providers via `COPILOT_PROVIDER_*` env vars. | 14 comments, 9 👍 — top community interest |
| [#4664](https://github.com/github/copilot-cli/issues/4664) | Heap OOM when resuming long-standing session | **CLOSED** | Session resume loads entire history into memory; fatal for developers with multi-hour sessions. | 9 comments, 2 👍 |
| [#1864](https://github.com/github/copilot-cli/issues/1864) | Session file corrupted after power loss | **CLOSED** | Unrecoverable session loss; JSON corruption at line 7103 with no recovery path. | 2 comments, **8 👍** — high impact despite low comment count |
| [#4753](https://github.com/github/copilot-cli/issues/4753) | v1.0.83: session resume cancels in-flight MCP stdio connections | **CLOSED** | Regression: MCP server init timeout dropped from ~16s to ~1s, silently disabling tools. | 5 comments, 2 👍 |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | MCP init fails on `server/discover` `-32602` from FastMCP | **CLOSED** | CLI treats unimplemented `server/discover` as fatal; breaks FastMCP and compatible servers. | 4 comments, 3 👍 |
| [#4160](https://github.com/github/copilot-cli/issues/4160) | Plan mode over-blocks read-only shell commands | **CLOSED** | Keyword-based heuristic blocks `git status`, `ls`, `cat` etc.; cripples plan-mode utility. | 4 comments, 2 👍 |
| [#2644](https://github.com/github/copilot-cli/issues/2644) | Support Shift+Arrow / Ctrl+A text selection in prompt | **OPEN** | Basic line-editing shortcuts missing; forces users to delete/retype instead of selecting. | 4 comments, 2 👍 |
| [#2368](https://github.com/github/copilot-cli/issues/2368) | LSP server not found via project-level `.github/lsp.json` | **CLOSED** | Project-scoped LSP config ignored; only global `~/.copilot/lsp-config.json` works. | 1 comment, **5 👍** |
| [#4930](https://github.com/github/copilot-cli/issues/4930) | Cloud agent: viewing any image ends session with `CAPIError: 400` | **OPEN** | `view` tool on images crashes subsequent model calls on GHEC data-residency tenants. | 1 comment — new, high-severity regression |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **MCP Server Flexibility** — Configurable tool sets for built-in agents (#4076), graceful handling of unimplemented MCP methods (#4370), persistent connections across session resume (#4753, #4608).
2. **Session Durability & Recovery** — Checkpoint persistence post-compaction (#3054), corruption resilience (#1864), hook/plugin re-execution on resume (#4608), workdir change tracking (#3362).
3. **Memory/Performance at Scale** — Heap pressure during long sessions and compaction (#4725, #4664, #2172); demand for streaming/incremental history loading.
4. **Input/UX Polish** — Standard readline-style editing (#2644, #2844), configurable escape behavior (#2508), terminal title stability (#4384).
5. **Enterprise/Auth Parity** — Bearer token / broker auth for compliance (#4300), policy-aware MCP enablement (#4650), model-name alignment with VS Code (#1752).
6. **Plan-Mode Precision** — Semantic command classification over keyword matching (#4160), enforcement consistency across `/fleet` (#2270).

---

## Developer Pain Points
| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Memory exhaustion (V8 heap OOM)** | High | #4725 (OPEN), #4664, #3054 |
| **Session loss / corruption** | High | #1864 (8 👍), #1360, #3754 |
| **MCP integration fragility** | High | #4753, #4370, #4608, #4076 |
| **Plan-mode false positives** | Medium | #4160, #2270 |
| **Poor CLI text-editing UX** | Medium | #2644, #2844, #2508 |
| **Windows-specific gaps** | Medium | #3306 (ARM64 native addon), #3712 (ReFS/Dev Drive), #4384 (terminal title) |
| **Auth/provider lock-in** | Medium | #2995 (9 👍), #4300, #4650, #1752 |
| **Configuration drift (CLI vs VS Code vs Desktop)** | Medium | #4260, #2368, #1752 |

---

*Digest generated from github.com/github/copilot-cli issue activity (2026-09-26 → 2026-09-27).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-27

## 1. Today's Highlights
No new releases shipped today. The community is actively triaging a cluster of streaming reliability issues (Nemotron, Ollama behind proxy, Web UI silent failures), MCP configuration gaps (env forwarding, orphaned processes, parameter type coercion), and Desktop app regressions on Windows/WSL. A notable fix landed for worktree directory visibility in the new-session view.

## 2. Releases
*None in the last 24 hours.*

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#9541](https://github.com/anomalyco/opencode/issues/9541) **Desktop: edit files directly + QOL** (13 💬) | Core Desktop UX gap — users can't edit files in-app, forcing context-switching. | High engagement; closed but signals strong demand for IDE-like workflows. |
| [#34184](https://github.com/anomalyco/opencode/issues/34184) **Go subscription renewed but quota not reset** (9 💬) | Billing/subscription sync failure — paid users blocked despite successful payment. | Direct revenue impact; 9 comments indicate widespread confusion. |
| [#37056](https://github.com/anomalyco/opencode/issues/37056) **opencode-go provider 400/401/500 errors** (8 💬) | Provider reliability crisis for subscribed models; large requests (~300KB) almost always fail. | Multiple error types (400, 401, 500) suggest systemic proxy/auth issues. |
| [#17873](https://github.com/anomalyco/opencode/issues/17873) **Preserve model selection per chat** (6 💬, 2 👍) | UX papercut: model choice resets when switching chats, breaking workflow continuity. | 2 👍 + 6 comments = clear quality-of-life demand. |
| [#36434](https://github.com/anomalyco/opencode/issues/36434) **MCP `env` dropped from resolved config** (5 💬) | MCP servers miss critical env vars at spawn time — breaks tooling that needs secrets/config. | Silent config loss; `debug config` shows field missing entirely. |
| [#25553](https://github.com/anomalyco/opencode/issues/25553) **Subagent @mention + image not forwarded** (5 💬, 1 👍) | Multimodal subagents receive no image data when @mentioned with attachment — parent consumes it. | Blocks vision-agent workflows; 1 👍 confirms pain. |
| [#50650](https://github.com/anomalyco/opencode/issues/50650) **Desktop custom provider save throws "unavailable"** (4 💬, 2 👍) | Custom OpenAI-compatible provider form is non-functional on *all* servers (including bundled local). | 2 👍; regression blocking BYO-provider use cases. |
| [#39251](https://github.com/anomalyco/opencode/issues/39251) **Severe Windows sluggishness (even with Go)** (4 💬, 2 👍) | Desktop + CLI both unusably slow on Windows; not a rendering issue — core perf regression. | 2 👍; affects paying Go subscribers. |
| [#50363](https://github.com/anomalyco/opencode/issues/50363) **Orphaned MCP `npx` processes accumulate** (3 💬) | Local MCP servers (npx-based) leak as PID 1 orphans on session end — consumes RAM/ports over days. | Resource leak; silent accumulation = hard to detect. |
| [#39394](https://github.com/anomalyco/opencode/issues/39394) **Status page for services** (2 💬, 4 👍) | No visibility into OpenCode Go/Zen outages; users left guessing during model timeouts. | 4 👍 — highest approval in this batch; operational transparency gap. |

## 4. Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| [#50669](https://github.com/anomalyco/opencode/pull/50669) **feat(app): show worktree directories** | Feature | Adds worktree selector to new-session view; exposes existing git worktrees for project switching. |
| [#51271](https://github.com/anomalyco/opencode/pull/51271) **feat(core): fit output limits to context window** | Feature | Dynamically sizes request output limits per model context window; adds reserve so compaction never squeezes summary. |
| [#51573](https://github.com/anomalyco/opencode/pull/51573) **fix(core): keep streaming sessions active** | Bug Fix | Prevents 60-min inactivity timeout from killing streaming sessions (only durable activity counted before). |
| [#50844](https://github.com/anomalyco/opencode/pull/50844) **fix: GitLab Duo on self-managed instances** | Bug Fix | Uses configured instance URL instead of hardcoded gitlab.com for Duo workflows. |
| [#51558](https://github.com/anomalyco/opencode/pull/51558) **fix: unsettled tool results on aborted turns** | Bug Fix | Recovers `pending`/`running` tool calls when a turn dies mid-execution (ESC/abort). |
| [#47542](https://github.com/anomalyco/opencode/pull/47542) **fix(opencode): sanitize MCP tool schemas for Anthropic** | Bug Fix | Rewrites root-level `anyOf`/`oneOf`/`allOf` into nested `properties` — Anthropic rejects root combinators. |
| [#48431](https://github.com/anomalyco/opencode/pull/48431) **fix(tui): coalesce message.part.delta store writes** | Perf | Batches Tree-sitter highlight requests during streaming; eliminates O(n²) client-side freeze (paired with markdown-live-relex). |
| [#51565](https://github.com/anomalyco/opencode/pull/51565) **fix(app): render markdown frontmatter as YAML block** | Bug Fix | Prevents raw YAML frontmatter from rendering as thematic break + plain text in file preview. |
| [#51559](https://github.com/anomalyco/opencode/pull/51559) **fix(ai): prompt caching for DigitalOcean inference** | Bug Fix | Routes DigitalOcean models to correct provider (was falling back to openai-compatible, losing caching). |
| [#47468](https://github.com/anomalyco/opencode/pull/47468) **fix(core): keep OPENCODE_CONFIG_DIR additive for AGENTS.md** | Bug Fix | Ensures `OPENCODE_CONFIG_DIR` adds a second config location instead of replacing global `~/.config/opencode`. |

## 5. Feature Request Trends
1. **Desktop app parity with CLI/IDE** — file editing, worktree browser, custom provider support, WSL server detection, archived session UI.
2. **MCP hardening** — env var forwarding, stderr logging, orphan cleanup, schema type fidelity (numbers vs strings), multi-profile Bedrock.
3. **Subagent/multimodal maturity** — per-chat model memory, image forwarding to @mentioned vision agents, tool permission inheritance.
4. **Streaming & session resilience** — status page, silent stream death recovery (Web UI), ACP multi-session coexistence

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest - 2026-09-27

## Today's Highlights

The Pi community is addressing critical reliability issues with OpenAI's Codex models and expanding platform support, particularly for Windows and Mistral's zai-glm models. Multiple PRs have been merged to improve telemetry, fix session compaction crashes, and enhance image handling across different terminals.

## Releases

No releases were published in the last 24 hours.

## Hot Issues

1. **[#4945](https://earendil-works/pi/issues/4945) OpenAI-Codex Connection Reliability Issues** - High-impact bug causing interactive TUI to freeze with `gpt-5.5`. 80 comments and 34 👍 reactions indicate widespread disruption for developers relying on Codex models.

2. **[#7547](https://earendil-works/pi/issues/7547) Windows Usage and Issues Discussion** - Canonical issue tracking Pi deployment on Windows with 68 comments. Critical for expanding platform adoption given Windows' developer prevalence.

3. **[#9980](https://earendil-works/pi/issues/9980) OpenRouter Cost Calculation Off by 2-3x** - Pricing discrepancies affect cost tracking accuracy. Low engagement (5 comments) but impacts billing transparency for users.

4. **[#9678](https://earendil-works/pi/issues/9678) Missing zai-glm Models in Mistral Catalog** - Request to add newer GLM variants with 4 comments. Blocks users wanting latest Mistral-served models.

5. **[#9953](https://earendil-works/pi/issues/9953) Anthropic Strict Tools Schema Validation Failure** - API rejects requests with minimum/maximum constraints. 3 comments with 1 👍 — limits JSON schema enforcement capabilities.

6. **[#10002](https://earendil-works/pi/issues/10002) Extension Console Output Interferes with TUI** - Diagnostic logging breaks interactive display. 3 comments — affects debugging workflow during live sessions.

7. **[#9999](https://earendil-works/pi/issues/9999) macOS Clipboard Image Paste Pasts File Icon Instead of Image** - Finder copies file metadata instead of actual image content. 2 comments and 1 👍 — degrades core clipboard functionality.

8. **[#10090](https://earendil-works/pi/issues/10090) User Bash Output Deferred Past Steering During Agent Runs** - `!` command results delayed until after model response, causing missed context. 2 comments — breaks expected agent interaction timing.

9. **[#10041](https://earendil-works/pi/issues/10041) Empty Tool Call ID Poisoned Session Persists as Crash** - Malformed tool calls create unrecoverable sessions. 2 comments — creates session corruption that prevents recovery.

10. **[#10063](https://earendil-works/pi/issues/10063) xAI Inlined GIF Tool Result 400s the Turn** - GIF MIME type causes image processing failure. 1 comment — limits supported image formats for vision inputs.

## Key PR Progress

1. **[#10091](https://earendil-works/pi/pull/10091)** - Message decoration hook exposed for custom styling of user/assistant messages. Enables extensions to modify text appearance without affecting thinking/tool output.

2. **[#10085](https://earendil-works/pi/pull/10085)** - Agent loop now emits `pi.ai.request` telemetry spans, enabling observability for assistant requests previously silent in production.

3. **[#10087](https://earendil-works/pi/pull/10087)** - Fixed tool truncation on zai-glm models via Mistral API. Omit strict field and use reasoning_effort parameters for proper function calling behavior.

4. **[#10081](https://earendil-works/pi/pull/10081)** - Merged fragmented thinking blocks into single leading ThinkChunk for Mistral API compatibility, preventing session corruption from multiple mental chunks.

5. **[#10040](https://earendil-works/pi/pull/10040)** - Added Codemode and MCP support for advanced agent capabilities, providing sandboxed execution environments for specialized models like Jev.

6. **[#10067](https://earendil-works/pi/pull/10067)** - Implemented system-aware theming using OKHSL color space. Automatically adapts to terminal lighting conditions for improved readability.

7. **[#10066](https://earendil-works/pi/pull/10066)** - macOS clipboard now prioritizes file URLs over Finder icons when pasting images, fixing #9999.

8. **[#8635](https://earendil-works/pi/pull/8635)** - Preserved aborted stop reasons during lazy setup, improving cancellation handling during early-stage tool execution.

9. **[#8354](https://earendil-works/pi/pull/8354)** - Added configurable reasoning replay fields for OpenAI completions, supporting vLLM's renamed `reasoning_content` field.

10. **[#9977](https://earendil-works/pi/pull/9977)** - Exported scoped storage conformance suite through `@earendil-works/pi-durable/testing` for Vitest/Jest compatibility testing.

## Feature Request Trends

- **Platform Expansion**: Intensive focus on Windows support (#7547) with multiple edge-case bug reports surfacing
- **Model Provider Updates**: Requests for updated zai-glm models in Mistral (#9678) and cost calculation fixes on OpenRouter (#9980)
- **Tooling Infrastructure**: Interest in configurable sampling parameters (#9776), per-model token limits (#10070), and telemetry expansion (#10084)
- **User Experience Improvements**: System theme adaptation (#10067), model filtering by API key availability (#19), and better feedback mechanisms for tool rendering errors (#10073)
- **Session Management**: Compaction fixes (#10092), resume context level correction (#10082), and session state persistence improvements

## Developer Pain Points

1. **Cross-Platform Instability**: Windows users face fragmented deployment options with inconsistent behavior across `pi`, `pi-agent`, and extension paths
2. **Tool Integration Fragility**: Multiple issues with tool result persistence, compaction, and schema validation causing cascading failures
3. **Interactive Session Reliability**: Freezing TUI states, deferred user input, and recovery path limitations during agent execution
4. **Provider Compatibility Gaps**: Inconsistent API behaviors between OpenAI, Mistral, Anthropic, and xAI requiring workaround implementations
5. **Debugging Limitations**: Hidden extension errors, console output interference, and insufficient diagnostic information for troubleshooting
6. **Resource Management**: Terminal state corruption (Kitty flags), context size miscalculations, and memory leak scenarios in long-running sessions

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-27

## 1. Today's Highlights
A new nightly build (`v0.24.6-nightly.20260926.d6f414190a`) was released with CLI test improvements and an MCP fix. The community remains highly active around the core architectural initiative: the **Managed Agent dual-path architecture** ([#12380](https://github.com/QwenLM/qwen-code/issues/12380)), which drives multiple feature requests and PRs focused on staged delivery, host integration, and session management. Meanwhile, several critical bugs involving worktree cleanup, update mechanisms, and export UUID handling are being rapidly addressed.

---

## 2. Releases
### 📦 v0.24.6-nightly.20260926.d6f414190a  
This is a **nightly** build containing:

* **Test**: Closed fixture gaps from managed context tests ([PR #12712](https://github.com/QwenLM/qwen-code/pull/12712))
* **MCP Fix**: Preserved registration state during certain operations ([Commit reference]())

No major breaking changes introduced; suitable for early adopters or testing environments.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|----|-------|----------------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | Proposal: Define Managed Agent dual-path architecture & staged delivery | Foundational RFC guiding core evolution toward multi-agent, daemonized sessions with durable ownership. Has 32 comments — likely central to roadmap discussions. |
| [#3579](https://github.com/QwenLM/qwen-code/issues/3579) | DeepSeek API 400 error – reasoning_content mishandling | Affects integrations with third-party LLM providers like DeepSeek; closed but reflects real-world usage friction. |
| [#12737](https://github.com/QwenLM/qwen-code/issues/12737) | feat(acp-bridge): Stage B – Host integration for paired Legacy and Managed engines | Directly tied to #12380’s roadmap; enables `qwen serve` to support both legacy and modern agent backends. |
| [#11908](https://github.com/QwenLM/qwen-code/issues/11908) | Oversized `available_commands_update` breaks ACP bridge | Critical daemon stability issue causing session loss post-notification overflow. |
| [#12727](https://github.com/QwenLM/qwen-code/issues/12727) | `/update` behaves unexpectedly on Windows | User-facing CLI experience bug affecting installation/update reliability. |
| [#12793](https://github.com/QwenLM/qwen-code/issues/12793) | feat(managed-agent): Stage D – Public API contract, DTOs, Session query & replay | Next phase in Managed Agent pipeline; defines public interface and structured data exchange format. |
| [#12792](https://github.com/QwenLM/qwen-code/issues/12792) | EditTool reflows entire file due to mixed line endings | Subtle yet impactful source control hygiene problem — leads to noisy diffs and merge conflicts. |
| [#12760](https://github.com/QwenLM/qwen-code/issues/12760) | Model selection inconsistent across configured API keys | Affects usability when switching models under different provider endpoints. |
| [#12796](https://github.com/QwenLM/qwen-code/issues/12796) | Runtime Broker fails reading BigDecimal scales persisted in JSON | Data integrity risk in backend persistence layer — could affect long-running sessions. |
| [#12809](https://github.com/QwenLM/qwen-code/issues/12809) | Subagent misconfiguration under CodeModeOnly causes invalid tool routing | Misalignment between configuration flags and runtime behavior risks unintended access patterns. |

---

## 4. Key PR Progress

| # | Title | Summary |
|----|-------|---------|
| [#12494](https://github.com/QwenLM/qwen-code/pull/12494) | test(serve): Tolerate capabilities baseline skew | Stabilizes test suite by adjusting E2E assertions about feature availability. |
| [#11816](https://github.com/QwenLM/qwen-code/pull/11816) | feat(web-shell): Optional worktrees for branch sessions | Enables isolated per-branch session isolation — key for developer workflow. |
| [#11889](https://github.com/QwenLM/qwen-code/pull/11889) | fix(core): Swap extension artifacts via copy on Windows lock | Addresses frequent failure point for extension management on Windows systems. |
| [#12815](https://github.com/QwenLM/qwen-code/pull/12815) | test(cli): Split W0c-3 release test by platform | Improves CI clarity and skips unnecessary steps on incompatible OSes. |
| [#11650](https://github.com/QwenLM/qwen-code/pull/11650) | feat(web-shell): Edit/resend latest message inline | UX enhancement allowing quick iteration without full reset. |
| [#12799](https://github.com/QwenLM/qwen-code/pull/12799) | fix(edit): Preserve untouched line endings | Fixes common version-control noise caused by unintended whitespace reflow. |
| [#10954](https://github.com/QwenLM/qwen-code/pull/10954) | feat(serve): Expose background agents via `/background-agents` | Adds introspection endpoint for monitoring active agent processes. |
| [#12773](https://github.com/QwenLM/qwen-code/pull/12773) | fix(cli): Pin fast model to selected provider endpoint | Ensures model selection consistency when multiple providers offer same model ID. |
| [#11959](https://github.com/QwenLM/qwen-code/pull/11959) | feat(core): Models.dev catalog lookup for context/modality info | Automates inference of token limits and modalities from upstream registry. |
| [#12810](https://github.com/QwenLM/qwen-code/pull/12810) | fix(cli): Allow aged `.deferred` markers to escape stale lock state | Resolves persistent CLI hang after interrupted updates on Windows. |

---

## 5. Feature Request Trends

Based on recent open issues, developers are pushing for:

- **Multi-agent orchestration support** (e.g., named subagents, staged delivery)
    - Related: [feat(managed-agent): Public API](https://github.com/QwenLM/qwen-code/issues/12793), [feat(cli): `--agent <name>` headless mode](https://github.com/QwenLM/qwen-code/issues/12803)
- **Improved session lifecycle controls and introspection**
    - E.g., event replay, session querying, background agent status endpoints
- **Better configurability and defaults**
    - Disable all skills by default, customizable skill sets
- **Enhanced desktop/mobile deployment options**
    - Linux ARM64 desktop builds requested
- **Developer ergonomics**
    - Inline editing of messages, workflow slash commands (`/$commit`)

These align closely with evolving needs around extensibility, observability, and cross-platform parity.

---

## 6. Developer Pain Points

Common recurring issues include:

- **Windows-specific CLI quirks**: Frequent failures related to file locks, outdated `.deferred` markers, and erratic update flows.
- **Tooling inconsistencies**:
    - Mixed line ending handling corrupting diff history.
    - Unexpected behavior in `EditTool`, `MCP` client classifications.
- **Session management complexity**:
    - Loss of state upon restart or crash recovery.
    - Difficulty tracking background tasks or managing concurrent agent instances.
- **Unstable CI pipelines**:
    - Shared runner flakiness leading to inconsistent test outcomes.
- **Limited visibility into internal behaviors**:
    - Lack of clear hooks/events for external tooling integration.
    - Inconsistent error reporting across components.

Addressing these points would significantly improve developer productivity and trust in the system.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest – 2026-09-27

## 1. Today's Highlights

The week saw critical stability work around the TUI engine’s responsiveness and reliability, alongside ongoing efforts to improve turn artifact tracking and session management. The most urgent issues involve the TUI refreshing lag during extended sessions and a regression in multiline paste handling on Windows Terminal. Concurrently, the team closed several foundational PRs related to build-time changelogs, undo performance, and robust session lifecycle management.

## 2. Releases

No new major releases were published in the last 24 hours. Recent activity focuses on pull requests that will ship upcoming improvements and fixes.

## 3. Hot Issues

| # | Title | Impact | Link |
|---|-------|--------|------|
| #6184 | Engine silently freezes mid-run | Critical – Users experience unresponsive TUI with persisted inputs | [Hmbown/Codewhale #6184](https://github.com/Hmbown/Codewhale/issues/6184) |
| #6427 | Multiline paste regression on Windows Terminal | Medium – Self-submits one message per line instead of aggregating | [Hmbown/Codewhale #6427](https://github.com/Hmbown/Codewhale/issues/6427) |
| #6651 | TUI interface cannot refresh in real time | Medium – Laggy scrolling after prolonged usage | [Hmbown/Codewhale #6651](https://github.com/Hmbown/Codewhale/issues/6651) |
| #6659 | Unbound threads get new engine session ID | High – Core architecture gap causing spurious session IDs | [Hmbown/Codewhale #6659](https://github.com/Hmbown/Codewhale/issues/6659) |
| #6653 | Runtime turns carry no artifact references | Medium – Prevents Preview from showing turn outputs | [Hmbown/Codewhale #6653](https://github.com/Hmbown/Codewhale/issues/6653) |
| #6652 | TUI scrolling becomes laggy (jelly-like) | Medium – Degrades UX after long-running sessions | [Hmbown/Codewhale #6652](https://github.com/Hmbown/Codewhale/issues/6652) |
| #6650 | Abnormal Ctrl+T shortcut behavior | Low – Usability regression | [Hmbown/Codewhale #6650](https://github.com/Hmbown/Codewhale/issues/6650) |
| #6647 | Runtime API git writes race condition | High – Potential data corruption risk | [Hmbown/Codewhale #6647](https://github.com/Hmbown/Codewhale/issues/6647) |
| #6644 | TUI/undo path-scoped restore incomplete | Medium – Incomplete recovery mechanism | [Hmbown/Codewhale #6644](https://github.com/Hmbown/Codewhale/issues/6644) |
| #6239 | Goldens record no colour | Low – Visual quality issue | [Hmbown/Codewhale #6239](https://github.com/Hmbown/Codewhale/issues/6239) |

## 4. Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| #6658 | Fix web: derive changelog at build time | ✅ Closed | Automates changelog generation to prevent merge conflicts |
| #6666 | Restore full Linux workspace gate | ⏳ Open | Ensures reliable testing on Linux after main updates |
| #6663 | Complete Tier-3 developer documentation (EPIC #5482) | ⏳ Open | Adds comprehensive internal/external docs for developer onboarding |
| #6664 | Perf: stop walking whole item store for threads | ⏳ Open | Reduces latency when opening threads in large item stores |
| #6660 | Turn artifact references (typed outputs) | ✅ Closed | Enables Preview to display turn files and large outputs automatically |
| #6656 | Pass tool exit code to Runtime API hooks | ⏳ Open | Improves error propagation from tool calls to the runtime |
| #6630 | Bump rquickjs dependency | ✅ Closed | Updates JavaScript runtime library for compatibility |
| #6640 | Fix orphaning sessions (#6144) | ✅ Closed | Resolves session orphanage and repairs existing orphans |
| #6627 | Bump reqwest dependency | ✅ Closed | Updates HTTP client library for security and features |
| #6646 | Perf: optimize item store traversal | ⏳ Open | Speeds up thread listing and thread opening operations |

## 5. Feature Request Trends

The community is increasingly focused on **turn observability**, **TUI responsiveness**, and **robust session lifecycle management**:

- **Artifact Tracking** – Multiple issues (#6653, #6660) highlight the need for turns to carry typed artifact references so the Preview can surface files and large outputs without manual searching.
- **Performance Optimizations** – Ongoing work targets TUI scrolling lag (#6652) and reducing item-store traversal overhead (#6646) to maintain smooth interactions in large workspaces.
- **Session Management** – Several PRs address orphaned sessions, background shell cleanup, and proper session binding (#6654, #6659, #6640, #6639), indicating a push toward more predictable resource lifecycles.
- **Documentation & Localization** – Efforts to complete Tier-3 developer docs and EPIC #5482 (Chinese localization) suggest a broader initiative to improve developer onboarding and internationalization.
- **CI/Build Stability** – Dependency bumps (rquickjs, toml_edit, reqwest) and CI flake fixes (#6655, #6615) reflect a concerted effort to stabilize the build pipeline.

## 6. Developer Pain Points

- **TUI Responsiveness** – Laggy scrolling and delayed refresh after long sessions degrade productivity.
- **Stability Gaps** – Silent engine freezes and race conditions in the Runtime API threaten reliability.
- **Session Lifecycle Complexity** – Orphaned sessions and improper background shell cleanup complicate debugging and resource management.
- **Missing Output Visibility** – Without artifact references, turn outputs remain hidden from the Preview, forcing users to hunt for generated files.
- **Configuration Friction** – Legacy `base_url`/`api_key` handling requires special workarounds for secrets, impacting workflow continuity.

These areas represent the highest priority for the next sprint, balancing immediate stability fixes with longer-term feature enhancements to improve the overall developer experience.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*