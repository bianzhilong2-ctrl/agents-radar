# AI CLI Tools Community Digest 2026-11-03

> Generated: 2026-11-03 04:38 UTC | Tools covered: 9

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

**Cross‑Tool Comparison – AI CLI Ecosystem (2026‑11‑03)**  

---

### 1. Ecosystem Overview  
The AI CLI space is maturing into a multi‑polar landscape.  Large‑model vendors (Claude, OpenAI, Google, DeepSeek) now ship purpose‑built terminal companions that blend native code‑completion, agentic reasoning, and embedded UI control panels.  Open‑source and enterprise‑focused runtimes (OpenCode, Pi) compete by offering extensible plugin architectures, deep observability, and fine‑grained cost‑governance.  Overall, the community is converging on three pragmatic imperatives: **transparent cost accounting**, **trustworthy safety filters**, and **first‑class session portability** across local, remote, and collaborative workflows.  

---

### 2. Activity Comparison  

| Tool (Repo)                     | Open Issues today* | PRs merged today* | Release Activity (last 24 h) |
|--------------------------------|-------------------|-------------------|------------------------------|
| **Claude Code** (anthropics/claude-code) | 10  | 1  | **v2.1.317** – privacy guardrails & `onFailure:"block"` hook |
| **OpenAI Codex** (openai/codex) | 10  | 10 | **rust‑v0.167.0‑alpha.4** – incremental stability work |
| **Gemini CLI** (google-gemini/gemini-cli) | – (summary failed) | – | No data reported |
| **GitHub Copilot CLI** (github/copilot-cli) | ~7‑8  | – (no PR list) | Patch releases **v1.0.106‑3 → v1.0.106‑5** (ACP mode fixes, session‑picker UX) |
| **Kimi Code CLI** (moonshotai/kimi-cli) | 0 (no activity) | 0 | No releases |
| **OpenCode** (anomalyco/opencode) | 10  | 10 | No releases (feature‑drift focus) |
| **Pi** (earendil-works/pi) | 10  | 10 | **v1.5.0** – extension changelogs & performance fixes |
| **Qwen Code** (qwenlm/qwen-code) | – (summary failed) | – | No data reported |
| **DeepSeek TUI** (Hmbown/DeepSeek-TUI) | 2  | 10 | No releases (UI‑bug fixes, provider budgeting) |

\*Counts reflect the number of **open** issues and **closed** PRs highlighted in the 2026‑11‑03 digests; “–” indicates missing data.  

---

### 3. Shared Feature Directions  

| Common Requirement | Tools Involved | Specific Needs / Comments |
|--------------------|----------------|---------------------------|
| **Cost transparency & control** | Claude Code, OpenCode, Pi | Live budget exposure to model, per‑task accounting, `max_subagents` guards, `keep.tokens` enforcement. |
| **Safety‑filter calibration** | Claude Code, Pi | Reduce false‑positive `cyber` blocks, per‑domain allow‑lists, severity knobs, appeal workflow with < 1 h SLA. |
| **Session continuity & collaboration** | Claude Code, OpenCode, Copilot CLI, Pi | Real‑time multi‑user sharing, session pinning/handoff, revert/fork from AI messages, durable task wake. |
| **File / attachment robustness** | OpenAI Codex, OpenCode, Pi | Reliable Excel/Office uploads, clearer hang‑error messages, proper MIME handling, remote‑file streaming. |
| **Cache performance & invalidation** | OpenCode, Pi, DeepSeek TUI | Sub‑agent cache eviction, Go‑cache hit‑rate drops, BMP mis‑identification, cache‑warming silent failures. |
| **Cross‑platform parity (desktop vs. TUI)** | Claude Code, Copilot CLI, Pi, DeepSeek TUI | Desktop regressions (Mermaid, prompt‑suggestions, IME), Windows/macOS‑specific bugs, terminal rendering (OSC 7501, resize clipping). |
| **Observability & telemetry** | Claude Code, OpenAI Codex, OpenCode, Pi | OTel event sink, per‑tool token counts, failure‑reason tagging, daemon start‑up diagnostics. |
| **Provider‑agnostic schema fidelity** | Pi, DeepSeek TUI, OpenAI Codex | Preserve `anyOf`/`oneOf` in Anthropic adapter, OpenRouter token‑overcount headroom, vLLM proxy budgeting. |
| **UI/UX consistency (dark mode, native input, confirmation dialogs)** | Copilot CLI, Pi, DeepSeek TUI, OpenCode | Native‑input parser, auto‑expand queued inputs, visible MCP confirmations, accessible alt‑text for markdown images. |

These themes cut across **both commercial** (Claude, OpenAI, Copilot) **and open‑source** runtimes, indicating a industry‑wide shift toward **predictable spend**, **trustable safety**, and **seamless collaborative workflows**.

---

### 4. Differentiation Analysis  

| Dimension | Claude Code | OpenAI Codex | GitHub Copilot CLI | OpenCode | Pi | DeepSeek TUI |
|-----------|-------------|--------------|-------------------|----------|----|--------------|
| **Primary focus** | Enterprise‑grade agent SDK, desktop IDE, governance primitives | Low‑level Rust backend, CI/daemon tooling, cross‑platform reliability | GitHub‑centric workflow, ACP mode, MCP auth & terminal integration | Self‑hosted AI IDE, free‑tier economics, extensible skills system | Personal AI assistant with extension marketplace, performance‑first runtime | DeepSeek‑model terminal UI, rendering & provider budgeting |
| **Target users** | DevOps/Enterprise teams, power coders needing sandboxed agents | Infrastructure engineers, CI/CD pipeline authors, developers building tools on top of Codex | GitHub developers, CI‑integrators, users embedded in GitHub workflows | Open‑source enthusiasts, hobbyists, teams using self‑hosted inference | Power users seeking a “personal AI sidekick” with modular extensions | Users who prefer a lightweight, full‑screen DeepSeek interaction (e.g., reasoning, math) |
| **Technical approach** | Monolithic desktop app + Agent SDK hooks, privacy guardrails built into the binary | Rust‑based compiler back‑end, emphasis on telemetry classification & sandbox diagnostics | Electron‑based CLI, hybrid local/remote execution, strict OAuth/MCP integration | Pure‑Go backend, skill‑based plugin system, heavy reliance on external LLM APIs | WASM‑oriented runtime, npm‑style package manager, focus on streaming & incremental UI | Pure‑go TUI built on terminal control sequences, lightweight UI layer, HTML/markdown post‑processing |
| **Unique differentiators** | `onFailure:"block"` SDK control, “real‑time collaboration” sessions, strong desktop‑first UI | Bazel CI local execution, fine‑grained telemetry tags, strong cross‑platform testing | ACP mode, `@mentions` for local sessions, native input parser, integrated GitHub authentication | Free‑tier usage tracking, sub‑agent cache, “doom‑loop” detection, extensive open‑skill marketplace | Extension changelogs, namespace isolation, high‑performance rendering (WebGPU), provider‑agnostic schema normalization | HTML‑entity decoding, LaTeX safety, dynamic table sizing, support for vLLM‑style custom providers |

---

### 5. Community Momentum & Maturity  

| Tool | Issue/PR Volume (today) | Release Cadence | Community Signal |
|------|------------------------|-----------------|------------------|
| **OpenAI Codex** | 10 issues, 10 PRs | Alpha‑weekly releases (rust‑v0.167.0‑alpha.4) | Strong engineering focus on diagnostics & cross‑platform fixes |
| **Claude Code** | 10 issues, 1 PR | Monthly minor releases (v2.1.317) | Growing demand for governance & cost‑control features |
| **OpenCode** | 10 issues, 10 PRs | Feature‑drift – no releases this cycle | Active open‑source contribution; free‑tier bugs dominate discourse |
| **Pi** | 10 issues, 10 PRs | Minor release (v1.5.0) with extension changelogs | Mature ecosystem tooling; performance & schema fidelity are core concerns |
| **DeepSeek TUI** | 2 issues, 10 PRs | No releases – bug‑fix sprint focus | Smaller user base but high PR throughput; UI polish & provider budgeting are hot |
| **GitHub Copilot CLI** | ~7‑8 issues (patch‑level releases) | Frequent patch releases (v1.0.106‑3→‑5) | Rapid UX/UX bug fixing; emerging demand for session control & MCP auth stability |
| **Gemini CLI / Kimi Code / Qwen Code** | No data | No data | Inactive or data‑gap; likely early‑stage or internal focus |

**Rapid iterators:** OpenAI Codex (alpha cadence), GitHub Copilot CLI (patch sprint), Pi (v1.5.0). **Maturity indicators:** OpenCode & Pi have balanced issue/PR pipelines suggesting stable, feature‑rich projects; DeepSeek TUI shows a high PR‑to‑issue ratio, hinting at a small but active core team.

---

### 6. Trend Signals – What the Community Is Telling Us  

| Trend | Evidence (

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights
*Data as of 2026-11-03 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

> **Data note:** PR-level comment counts were unavailable in the dataset (returned `undefined`). Rankings below use issue discussion volume, PR update recency, and cross-referenced issue activity as proxies for community attention.

---

## 1. Top Skills Ranking

### 🔴 skill-creator
The most intensely discussed Skill in the ecosystem, with **3 open PRs** and **3 major issues** driving conversation.

| PR/Issue | Title | Status |
|----------|-------|--------|
| [PR #1298](https://github.com/anthropics/skills/pull/1298) | Isolate trigger evals, handle Windows + runtime failures | OPEN |
| [PR #1681](https://github.com/anthropics/skills/pull/1681) | Support direct execution of `package_skill.py` | OPEN |
| [PR #1997](https://github.com/anthropics/skills/pull/1997) | Parse YAML frontmatter scalars correctly | OPEN |
| [Issue #556](https://github.com/anthropics/skills/issues/556) | `run_eval.py`: 0% trigger rate across all queries (13 comments) | OPEN |
| [Issue #202](https://github.com/anthropics/skills/issues/202) | skill-creator should be updated to best practice (8 comments) | CLOSED |
| [Issue #1394](https://github.com/anthropics/skills/issues/1394) | eval-viewer escapeHtml XSS vulnerability (4 comments) | OPEN |

**Functionality:** The meta-Skill for creating, evaluating, and packaging other Skills. Community sentiment is split: some argue it's "developer documentation, not an operational skill" (#202), while others report critical evaluation failures (#556) and security gaps (#1394). Three concurrent PRs signal strong maintainer/community investment in stabilizing this foundational Skill.

---

### 🔴 mcp-builder
Active development with a fix PR and a systemic evaluation bug report.

| PR/Issue | Title | Status |
|----------|-------|--------|
| [PR #1742](https://github.com/anthropics/skills/pull/1742) | Support `mcp>=2` `streamable_http_client` import + custom headers | OPEN |
| [Issue #1390](https://github.com/anthromics/skills/issues/1390) | `evaluation.py` scores 0/N against any real MCP server (4 comments) | OPEN |

**Functionality:** Guides building MCP (Model Context Protocol) servers. The rename of `streamablehttp_client` → `streamable_http_client` in MCP ≥2.0 broke imports, and custom header configuration moved to a different API. The evaluation harness has a separate, unresolved bug where it "silently fabricates a tool-execution error for every tool call" (#1390).

---

### 🔴 docx
Three PRs and one issue touching multiple facets of the Word document Skill.

| PR/Issue | Title | Status |
|----------|-------|--------|
| [PR #1792](https://github.com/anthropics/skills/pull/1792) | Report LibreOffice timeout as error; verify output has no revision marks | OPEN |
| [PR #1734](https://github.com/anthropics/skills/pull/1734) | Detect orphaned docx comments | OPEN |
| [Issue #2018](https://github.com/anthropics/skills/issues/2018) | `merge_runs.py` drops namespace declarations → invalid XML (4 comments) | OPEN |

**Functionality:** DOCX creation, editing, and conversion via LibreOffice. Multiple correctness fixes in flight: timeout handling, orphaned comment detection, and an XML namespace bug that produces silently broken output files.

---

### 🔴 claude-api
Documentation hygiene PR plus a major UX complaint issue.

| PR/Issue | Title | Status |
|----------|-------|--------|
| [PR #1730](https://github.com/anthropics/skills/pull/1730) | Replace 3 dead 404 URLs in academy-guide + tool-use-concepts | OPEN |
| [Issue #1487](https://github.com/anthropics/skills/issues/1487) | Skill eagerly injects ~156k tokens, exhausting context (5 comments) | OPEN |

**Functionality:** Guidance for building with the Claude API. The token-injection issue (#1487) is significant — the Skill's reference material is so large it can exhaust the context window in a single tool call, making the Skill counterproductive.

---

### 🟡 webapp-testing
Two security/hardening PRs submitted by the same contributor.

| PR/Issue | Title | Status |
|----------|-------|--------|
| [PR #1980](https://github.com/anthropics/skills/pull/1980) | Avoid `shell=True` in `with_server.py` (CWE-78 command injection) | OPEN |
| [PR #1976](https://github.com/anthropics/skills/pull/1976) | Report textarea/select correctly in `element_discovery.py` | OPEN |

**Functionality:** Automated web app testing with headless server management. The `shell=True` fix addresses a real command-injection risk when passing unsanitized command strings into `subprocess.Popen`.

---

### 🟡 New Skill Additions (Notable)

| PR | Skill | Description |
|----|-------|-------------|
| [PR #1245](https://github.com/anthropics/skills/pull/1245) | `notion-spec-to-implementation` + `quantitative-resume-auditor` | Transforms product specs into Notion task breakdowns; audits resumes quantitatively |
| [PR #1771](https://github.com/anthropics/skills/pull/1771) | `proofcore-contract-auditor` | Web3 smart contract static analysis with on-chain audit proofs (Solidity/Rust → TON Blockchain) |
| [PR #1703](https://github.com/anthropics/skills/pull/1703) | `md2video-audio` | Markdown → Marp slides → MP4 video with AI voiceovers |
| [PR #525](https://github.com/anthropics/skills/pull/525) | `pyxel` | Retro game development in Python with frame inspection and state validation |
| [PR #514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Typographic quality control (orphan words, widows, numbering alignment) |
| [PR #486](https://github.com/anthropics/skills/pull/486) | `odt` | OpenDocument text creation, template filling, ODT→HTML conversion |
| [PR #1615](https://github.com/anthropics/skills/pull/1615) | `scnet-hpc` | SCNet HPC cluster operation via profile-based SSH + Slurm workflows |

---

## 2. Community Demand Trends (from Issues)

### 🏗️ Infrastructure & Distribution (Highest Engagement)
- **[Issue #492](https://github.com/anthropics/skills/issues/492)** (46 comments, 3 👍): Community skills impersonating official `anthropic/` namespace — a trust-boundary vulnerability. The single most-discussed item in the repo.
- **[Issue #228](https://github.com/anthropics/skills/issues/228)** (17 comments, 8 👍): Org-wide skill sharing — users want a shared skill library rather than manual `.skill` file exchange via Slack/Teams.
- **[Issue #189](https://github.com/anthropics/skills/issues/189)** (6 comments, 9 👍): `document-skills` and `example-skills` plugins ship identical content, causing duplicate skills in context.

**Trend:** The community is demanding better **skill distribution, verification, and sharing infrastructure** — the current manual download/upload model is seen as fragile and insecure.

### 🧪 Evaluation & Reliability
- **[Issue #556](https://github.com/anthropics/skills/issues/556)** (13 comments, 7 👍): `run_eval.py` reports 0% skill trigger rate — the evaluation harness itself is broken, undermining trust in skill quality testing.
- **[Issue #1390](https://github.com/anthropics/skills/issues/1390)** (4 comments): MCP builder evaluation fabricates tool errors for every call.

**Trend:** The community needs **working evaluation tooling** before it can meaningfully assess skill quality. The `skill-creator` eval framework is central but currently unreliable.

### 🧠 New Skill Categories Proposed
| Issue | Proposal | Comments |
|-------|----------|----------|
| [#1329](https://github.com/anthropics/skills/issues/1329) | `compact-memory` — symbolic notation for compact agent state | 10 |
| [#412](https://github.com/anthropics/skills/issues/412) | `agent-governance` — safety patterns for AI agent systems | 6 |
| [#1385](https://github.com/anthropics/skills/issues/1385) | Reasoning

---

# Claude Code Community Digest — 2026-11-03

---

## 1. Today's Highlights

- **v2.1.317 released** with privacy-focused guardrails: warnings for unexpected connectors in scheduled tasks, email-exfiltration checks before web/shell calls, and a new `onFailure: "block"` hook option for Agent SDK integrations.
- **Token-cost anxiety dominates discussion** — three separate high-engagement issues (#102667, #105621, #92544) report weekly quotas draining 2–5× faster since mid-October with unchanged workflows.
- **Desktop-app regressions persist**: prompt suggestions silently broken since 2.1.229 (#88391) and Mermaid diagrams still not rendering in the Code tab (#52517, 62 👍).

---

## 2. Releases

### v2.1.317
| Change | Impact |
|--------|--------|
| Warning when `/schedule` adds unrequested connectors | Prevents silent credential scope creep |
| Pre-flight check before sending account email via web/shell tools | Mitigates accidental PII leakage |
| `onFailure: "block"` for Agent SDK hooks | Gives integrators hard-stop control on hook failures |

> **Note**: No changelog link provided; changes inferred from release notes.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#95326** | **[BUG] Chrome extension blocks all tools on reddit.com** (since 2026-09-18) | Breaks a common research workflow; safety filter over-reach on a mainstream site. | 29 comments · 35 👍 — *Active workaround hunting* |
| **#52517** | **[Enhancement] Mermaid not rendered in Desktop Code tab** | Desktop is the flagship GUI; diagram support is table-stakes for architecture/docs work. | 21 comments · 62 👍 — *Highest upvote count in set* |
| **#88391** | **[REGRESSION] Prompt suggestions gone in Desktop (2.1.229+)** | Removes discoverability of slash-commands & templates; hurts onboarding. | 18 comments · 18 👍 — *Bisect points to 2.1.229* |
| **#60082** | **[Feature] Real-time multi-user collaboration on one session** | “Google Docs for Claude Code” — unlocks pair programming, mob review, teaching. | 17 comments · 33 👍 — *Strong +1 from team leads* |
| **#102667** | **[BUG] Weekly limit depletes ~5× faster (possible accounting regression)** | Directly impacts billable hours & CI budgets; no usage-pattern change reported. | 12 comments · 4 👍 — *Multiple corroborating reports* |
| **#94710** | **No user-level off-switch for “How is Claude doing?” survey** | Persistent UI noise; existing feedback toggles don’t cover this surface. | 9 comments · 16 👍 — *Simple config flag requested* |
| **#81691** | **[Feature] Expose live subscription budget & per-task tokens to model** | Enables agent to self-limit, plan multi-step work, avoid surprise cutoffs. | 9 comments · 4 👍 — *Architectural ask, not UI* |
| **#105621** | **[BUG] Usage drains drastically faster since mid-Oct (Windows/Max)** | Mirrors #102667 on Windows; suggests cross-platform accounting shift. | 6 comments · 4 👍 |
| **#89865** | **Workflow verify stage fans out 20× past size guideline (355 Opus agents)** | Runaway sub-agent spawn = cost surprise; needs guardrails or confirmation. | 3 comments · 1 👍 — *High severity despite low comment count* |
| **#97907** | **[Feature] Roles: committed bundles of agent+settings+instructions+write-scope** | Team governance primitive; lets orgs codify “dev / QA / DevOps” personas. | 5 comments · 0 👍 — *Re-filed after inactivity close; spec in #81615* |

> **Closed cluster**: Seven `cyber` false-positive issues (#90832–#90855) all flagged by Opus 4.8, session-halting authorized work (reverse-engineering, config inspection, docs generation). Root cause appears to be over-sensitive safety filter; triage recommends model-level tuning.

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **#106583** | **Closed** | Migrates three internal triage/dedupe workflows (`claude-issue-triage.yml`, `claude-dedupe-issues.yml`, `claude.yml`) from Opus 4.6 / Sonnet 4.6 → **Sonnet 5.5**. Reduces operational cost & latency for issue automation. |

*No other PRs updated in the last 24 h.*

---

## 5. Feature Request Trends (Distilled from All Issues)

1. **Team & Governance Primitives**  
   - Roles/bundles (#97907), real-time collaboration (#60082), session journaling (#97908), conversation anchors (#97906) — all point toward **multi-player, auditable, policy-driven workflows**.

2. **Cost Transparency & Control**  
   - Live budget exposure to model (#81691), per-task accounting, runaway-workflow guards (#89865), low-priority quota fairness (#92544) — developers want **predictable, programmable spend limits**.

3. **Desktop Parity with TUI**  
   - Mermaid rendering (#52517), prompt suggestions (#88391), survey toggle (#94710), IME support (#105839) — the GUI tab is treated as a **first-class IDE surface** now.

4. **Observability & Debuggability**  
   - OTel event sink (#97908), unprompted progress/ETA reporting (#106840), hook failure modes (`onFailure: "block"` in v2.1.317) — **operational visibility** is a recurring theme.

5. **Safety Filter Calibration**  
   - Cluster of `cyber` false positives + reddit block (#95326) — community asks for **per-domain allowlists** or **severity knobs** rather than blanket blocks.

---

## 6. Developer Pain Points (High-Frequency Frustrations)

| Pain Point | Evidence | Suggested Remedy |
|------------|----------|------------------|
| **Token accounting opacity / regression** | #102667, #105621, #92544, #105725, #106866 (new today) | Publish accounting changelog; expose per-call token breakdown; add `ccost` CLI subcommand. |
| **Desktop regressions ship without rollback** | Prompt suggestions broken since 2.1.229 (Aug), Mermaid missing since April | Automated UI regression suite; feature-flag rollout for Desktop tabs. |
| **Safety filters block legitimate engineering work** | 7 `cyber` false positives + reddit block; all `session-halted` severity | Domain allowlist API; “trusted workspace” mode; appeal workflow with < 1 h SLA. |
| **No team collaboration primitives** | #60082 (33 👍), #97907 (re-filed), #97906/8 — all open months | Ship “Shared Session” MVP (read/write + cursors); Roles RBAC behind feature flag. |
| **Sub-agent cost runaway** | #89865 (355 agents), no confirmation/cost preview | `max_subagents` setting; dry-run cost estimate before fan-out; `onFailure: "block"` hook adoption. |

---

*Generated from github.com/anthropics/claude-code data as of 2026-11-03 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑11‑03**

---

### 1. Today’s Highlights  
The rust‑v0.167.0‑alpha.4 pre‑release landed, continuing the alpha series with incremental stability work. A flurry of high‑impact bug reports (Windows browser toggle, sub‑agent payload visibility, Daybreak false‑positive blocks) show ongoing focus on cross‑platform reliability, while a batch of closed PRs from the core team (telemetry classification, MCP doctor refinements, CI local execution) signal progress on diagnostics and developer ergonomics.

---

### 2. Releases  
- **rust‑v0.167.0‑alpha.4** – the latest alpha build of the Rust compiler backend; no detailed changelog was attached, but it follows the established alpha cadence and includes the usual bug‑fixes and performance tweaks.

*No other versioned releases were noted.*

---

### 3. Hot Issues  *(10 noteworthy open issues)*  

| # | Title (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#54989** <br> [Windows: browser reports disabled despite toggle] <br> https://github.com/openai/codex/issues/54989 | Users cannot use the built‑in browser while the “Browser” setting is on; a full restart is required to regain access. This blocks workflow for any task that relies on web‑search or inline browsing. | 23 comments, 0 👍 – actively discussed, indicating a high‑visibility regression. |
| **#57608** <br> [Closed] Automatic compaction loses active task | After automatic compaction the assistant stops and asks the user to resend the task, even though a local checkpoint exists. This harms long‑running sessions and erodes confidence in the system’s statefulness. | 16 comments, 3 👍 – marked *CLOSED* but still under review; the community is urging a fix. |
| **#36586** <br> [Open] Sub‑agent task payload invisible to custom providers (DeepSeek) | Custom non‑OpenAI providers never receive the encrypted task payload (`multi_agent_version v2`), causing sub‑agents to report “no new task input”. This breaks multi‑provider agent compositions. | 15 comments, 7 👍 – high interest, multiple work‑arounds requested. |
| **#53144** <br> [Open] Daybreak Blue false‑positive cybersecurity blocks | Daybreak mode is enabled but the system still blocks content, suggesting either a server‑side mis‑configuration or a failure to invoke Daybreak. Impacts safety‑critical use cases. | 13 comments, 0 👍 – users report repeated false positives. |
| **#51218** <br> [Open] Code Review unavailable – copy‑fail & wrong errno check | The bundled‑plugin copy step fails and the encryption fallback checks the wrong `errno`, preventing Code Review from loading on Windows. | 10 comments, 0 👍 – reproducible on Plus subscription. |
| **#58482** <br> [Open] Windows Computer Use reports wrong focused element | The Computer Use overlay reports an incorrect focused UI element, and calculator index operations vary across window lifecycles, leading to inaccurate telemetry. | 8 comments, 0 👍 – affects desktop‑automation scripts. |
| **#53264** <br> [Open] Remote: new projectless chat fails – “Unable to resolve projectless chat folder” | Creating a fresh projectless chat from a Windows desktop host fails before any prompt is sent, while existing remote chats work. | 8 comments, 4 👍 – a blocker for new remote sessions. |
| **#58660** <br> [Open] Excel/file attachment stuck after clicking **Send** | The composer stays in a loading state after sending a message with an attached Excel file; the file and prompt are responsive, only the send step hangs. | 7 comments, 0 👍 – frequent file‑attachment use case. |
| **#58637** <br> [Open] macOS desktop: MCP confirmation UI not visible, then expires | The `supabase.execute_sql` call never shows an actionable confirmation; after 2 min it reports “expired”. Users cannot diagnose or retry the call. | 4 comments, 0 👍 – UI/UX pain point on Apple Silicon. |
| **#58724** <br> [Open] Codex web chat fails to resume | After a day, a newly created thread cannot be resumed because the cloud build for that thread was deleted, forcing the user to view saved history or start over. | 2 comments, 2 👍 – impacts continuity for web‑only users. |

---

### 4. Key PR Progress  *(10 important closed PRs)*  

| # | PR title (link) | Core change / benefit |
|---|-----------------|-----------------------|
| **#59058** <br> [Closed] Classify daemon auto‑start failures in TUI telemetry | Adds a `failure_reason` tag (`install`, `spawn`, `early_child_exit`, `readiness_timeout`, `other`) to telemetry events, enabling finer‑grained debugging of daemon start‑up problems. |
| **#59057** <br> [Closed] Tailor MCP doctor remediation to detected problems | Separates configuration errors from missing environment variables, so the doctor suggests the correct fix (e.g., URL correction) instead of prompting for env vars. |
| **#59055** <br> [Closed] Run Bazel CI locally without BuildBuddy credentials | Strips automatic BuildBuddy configuration and credential forwarding from local Bazel CI, allowing developers to execute CI steps locally without cloud credentials. |
| **#59047** <br> [Closed] Decode live transcript updates in the cloud client | Introduces a typed `Event::Transcript` payload, giving callers direct access to live text, command output, file changes, and turn state. |
| **#59043** <br> [Closed] Tie executor attachments to environment selection lifetimes | Guarantees that an executor’s selection is detached when the environment is refreshed, preventing leaked references that could cause stale state. |
| **#59041** <br> [Closed] Expose assistant content token counts in completion notifications | Adds optional `contentTokenCount` metadata to `item/completed` notifications, letting front‑ends report precise token usage per assistant message. |
| **#59036** <br> [Closed] Resolve model‑selected search providers with policy‑aware fallback | Search discovery now respects the active model’s supported tools and host search restrictions, with a fallback that preserves existing browsing references. |
| **#59034** <br> [Closed] Add model Search discovery to MCP bindings | Provides `McpBinding` APIs that discover a model’s Search tool profile through an authorized host‑owned Apps connection, enabling scoped, up‑to‑date tool bindings. |
| **#59033** <br> [Closed] Add web search provider metadata and configuration | Introduces optional `ModelInfo.web_search_provider` metadata (`standalone` / `search_mcp`) and exposes the provider value in app‑server config responses. |
| **#59028** <br> [Closed] Use prepared MCP owner permissions in Guardian reviews | Stores each MCP server’s permission source (including directory context) with prepared calls, ensuring Guardian reviews reflect the exact permissions used at runtime. |

---

### 5. Feature Request Trends  

- **Robust file & attachment handling** – multiple issues (e.g., #58660, #59044) request reliable Excel/Excel‑file upload support and clearer error messages when attachments hang.  
- **Improved MCP & permission UI/UX** – #58637, #58867, #58852, and #58878 highlight confusing or inconsistent confirmation dialogs, permission settings, and clipboard/mouse capture behavior.  
- **Telemetry & diagnostics** – PRs #59058 and #59009 call for richer telemetry (failure reasons, centralized filesystem permission resolution) to help operators troubleshoot daemon and sandbox issues.  
- **Session continuity** – #58724 (web chat resume) and #57608 (compaction losing tasks) show demand for more reliable state preservation across restarts and automatic recovery mechanisms.  
- **Queue & capacity management** – #50238 and #58858 request a persistent, cancellable capacity queue and better handling of “model at capacity” errors, indicating a need for smoother fallback when usage limits are hit.  
- **UI/UX polish for dark mode & TUI** – #58744 and #45846 ask for auto‑expansion of queued follow‑up inputs and better dark‑on‑dark rendering, reflecting a broader appetite for a smoother composer experience.  

Overall, the community is converging on **greater reliability (especially for file I/O and session state), clearer diagnostic information, and more consistent permission/U​I behavior** across platforms.

---

### 6. Developer Pain Points  

- **Windows‑specific regressions** – browser toggle, Computer Use focus reporting, file‑attachment handling, and startup MSIX copyfile errors recur, causing frequent work‑arounds and restarts.  
- **macOS MCP workflow friction** – missing confirmation UI and permission dialog inconsistencies hinder rapid tool usage on Apple Silicon.  
- **Sub‑agent & multi‑provider visibility** – custom non‑OpenAI providers often do not receive task payloads, breaking agent compositions.  
- **Automatic compaction & state loss** – long‑running sessions can lose active tasks after compaction, forcing manual resend.  
- **False‑positive safety blocks** – Daybreak mode not effectively suppressing cybersecurity blocks, leading to unnecessary user friction.  
- **CLI clipboard & mouse capture** – mouse‑driven text selection and right‑click paste fail in the terminal‑based CLI, reducing productivity.  
- **Model capacity errors** – “model at capacity” responses persist even when sufficient credits exist, and lack of automatic retry or queuing frustrates users.  

These recurring issues point to a need for **more stable cross‑platform foundations, clearer permission/telemetry signals, and smoother session recovery mechanisms** as the top priorities for the next development cycle.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-11-03

## Today's Highlights
- Three patch releases (v1.0.106-3 through v1.0.106-5) shipped in the last 24 hours, resolving ACP-mode `includeCoAuthoredBy` handling, `/settings` display behavior, session-picker flashing, and `@file` mention parsing inside delimiters.
- Community discussion is concentrated on session control (cancelling enqueued messages), terminal rendering (OSC 7501 status reports, resize clipping), and MCP authentication reliability.
- PR #5339 proposes a new read-only agent-monitor TUI, reflecting growing demand for local-session observability tooling.

## Releases
**v1.0.106-5**  
- `includeCoAuthoredBy: false` is now honored in ACP mode (`copilot --acp`); ACP clients no longer instruct agents to add a `Co-authored-by` trailer.  
- Targeted `/settings` commands immediately display the selected setting.  
- Telemetry-disabled warning addressed during session resume.

**v1.0.106-4**  
- Empty sessions no longer flash into the session picker before disappearing.  
- `@file` mentions written inside parentheses, brackets, braces, angle brackets, quotes, or backticks now attach correctly and expand in `!` shell commands.

**v1.0.106-3**  
- Added opt-in session management tools and `@mentions` for opted-in local sessions.  
- Managed-account policy refresh warnings now include Policy Helper findings and clear once policy resolves.  
- Reuse of valid saved MCP OAuth credentials for anonymous connections.

[Release details](https://github.com/github/copilot-cli/releases)

## Hot Issues
| # | Title | Why it matters | Community reaction |
|---|-------|----------------|-------------------|
| [#1857](https://github.com/github/copilot-cli/issues/1857) | Allow users to cancel or remove enqueued messages before execution | No way to abort `Ctrl+Q`/`Ctrl+Enter` queued input while the agent is busy or during `/compact`; messages process automatically on agent finish. | 15 comments · 👍 33 — highest-engagement open issue this cycle. |
| [#3497](https://github.com/github/copilot-cli/issues/3497) | Terminal output clipped after resize/reflow; hidden text unreachable via scrollbar | Long responses can be partially invisible after terminal reflow, blocking review of command output. | Closed · 👍 11 — recurring rendering pain point. |
| [#5112](https://github.com/github/copilot-cli/issues/5112) | Support OSC 7501 program status in the interactive CLI | Request to emit program-status reports (working/blocked) to terminals that support the OSC 7501 protocol. | 5 comments · 👍 11 — terminal-integration feature request. |
| [#5133](https://github.com/github/copilot-cli/issues/5133) | `includeCoAuthoredBy: false` ignored in ACP mode | Config was respected in `copilot -p` but not `copilot --acp`, causing unwanted commit trailers. | Closed · 👍 1 — fixed in v1.0.106-5. |
| [#5171](https://github.com/github/copilot-cli/issues/5171) | NumLock-off numpad navigation and Delete ignored on Windows | Regression on Windows 11; numpad arrows/Delete fail in Copilot prompt when NumLock is off. | 2 comments · 👍 1 — platform-specific input bug. |
| [#3015](https://github.com/github/copilot-cli/issues/3015) | Authorization header dropped on JSON-RPC `tools/call` after MCP initialize | Streamable HTTP + OAuth 2.1/DCR flows break because the bearer header is sent on `initialize` but omitted on subsequent tool calls. | 2 comments · 👍 2 — critical MCP auth reliability issue. |
| [#5145](https://github.com/github/copilot-cli/issues/5145) | HTTP 400 `reasoning_text` in thinking mode after runtime-synthesized assistant turn | Custom OpenAI-compatible providers (e.g., DeepSeek with `wireApi: "responses"`) reject calls following model-less assistant turns. | 2 comments · 👍 2 — custom-model provider compatibility. |
| [#4646](https://github.com/github/copilot-cli/issues

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-11-03

## Today's Highlights
The free tier free usage crisis dominated discussions, with Issue #59387 amassing 216 comments detailing `Free usage exceeded`, `Free usage limit reached`, and reset never happening scenarios. Concurrently, a concerning safety bug (#61331) emerged where sessions automatically execute without permission after reboot, and cache invalidation (#61276) continues to plague Go users, invalidating cache after almost every turn. [#59387](https://github.com/anomalyco/opencode/issues/59387) [#61331](https://github.com/anomalyco/opencode/issues/61331) [#61276](https://github.com/anomalyco/opencode/issues/61276)

## Releases
No new versions released in the last 24 hours.

## Hot Issues (10 Notable)
1. **#59387** [OPEN] Free tier issues main thread (216⚡) - The primary gateway for all free tier problems: `Free usage exceeded`, reset never occurring, and `You've used today's free messages` errors. [Link](https://github.com/anomalyco/opencode/issues/59387)
2. **#61331** [OPEN] A bug where a session is automatically executed without permission - Post-reboot, `opencode --yolo` in a different directory automatically resumes unfinished sessions from other projects, raising safety concerns. [Link](https://github.com/anomalyco/opencode/issues/61331)
3. **#61276** [CLOSED] Cache invalidation occurs after almost every turn through Go - Cache hit rate is terrible, invalidated after 1-2 consecutive turns, especially noticeable with concurrent subagents. [Link](https://github.com/anomalyco/opencode/issues/61276)
4. **#61152** [CLOSED] Free tier returns 429 on every request since Oct 24 (DeepSeek V4.1 Flash Free) - Even a single "hello" in a fresh session gets rejected with "You've used today's free messages. They reset at 03:00." [Link](https://github.com/anomalyco/opencode/issues/61152)
5. **#61303** [OPEN] projects: new project in folder without git repo resolves to C:\ root - On Windows, creating a new project from `C:\OpenCode General` selects project rooted at `C:\` named "Root" instead of the opened folder. [Link](https://github.com/anomalyco/opencode/issues/61303)
6. **#52958** [CLOSED] OpenCode Go subscription: all payment methods declined from Italy (EU) - Stripe declines for physical card, Apple Pay, Stripe Link, virtual Mastercard across desktop and mobile. [Link](https://github.com/anomalyco/opencode/issues/52958)
7. **#51191** [OPEN] web: session in nested project folder opens at git repo root - Starting a session in a subdirectory creates session at repository root, preventing `.opencode/skills` discovery. [Link](https://github.com/anomalyco/opencode/issues/51191)
8. **#61072** [OPEN] Claude Agent: 5-hour plan limit drains ~1.8x faster - SDK labels requests `sdk-ts`, consuming 1.8x more of the 5-hour limit compared to Claude Code's TUI. [Link](https://github.com/anomalyco/opencode/issues/61072)
9. **#43250** [OPEN] keep.tokens is not honoured - Agent-driven sessions routinely exceed 5-15× the 15K default, with `select()` accumulating from the tail unboundedly. [Link](https://github.com/anomalyco/opencode/issues/43250)
10. **#8689** [OPEN] [FEATURE]: ability to revert/fork from the ai message - Request to enable reverting/forking from AI messages, not only from user messages, for improved workflow. [Link](https://github.com/anomalyco/opencode/issues/8689)

## Key PR Progress (10 Important)
1. **#61328** [OPEN] Restore doom loop detection as internal plugin for v2 - Closes #59339, adding back `doom_loop` action previously removed from v2. [Link](https://github.com/anomalyco/opencode/pull/61328)
2. **#61330** [OPEN] Fix(app): improve contrast and elevation for selection quote toolbars - Dark mode fix where `timeline-quote` and `terminal-quote` blend into transcript/code. [Link](https://github.com/anomalyco/opencode/pull/61330)
3. **#60698** [OPEN] Add experimental job list endpoint - Exposes active/unconsumed background `shell`, `subagent`, and `image` jobs over HTTP for CLI/SDK observation. [Link](https://github.com/anomalyco/opencode/pull/60698)
4. **#60699** [OPEN] Wait for background jobs in opencode run - Fixes `opencode run` exiting prematurely after first foreground step, even when background jobs remain. [Link](https://github.com/anomalyco/opencode/pull/60699)
5. **#54713** [OPEN] Fix(core): project error finish as terminal assistant failure - Subagents with explicit `error` finish reasons (e.g., Gemini `MALFORMED_FUNCTION_CALL`) now correctly reported as failures. [Link](https://github.com/anomalyco/opencode/pull/54713)
6. **#61324** [OPEN] Add Totem MCP integration to ecosystem projects - Adds Totem as MCP integration for durable agent messaging, shared tasks, and Missions across separately operated agents. [Link](https://github.com/anomalyco/opencode/pull/61324)
7. **#61204** [OPEN] Fix(core): estimate Hangul and CJK text by script - `Token.estimate` now counts Hangul at 0.65 and other CJK at 0.6 tokens each; non-CJK retains `length / 4`. [Link](https://github.com/anomalyco/opencode/pull/61204)
8. **#61315** [OPEN] Fix(acp): forward session title updates to clients via session_info_update - `opencode acp` now notifies clients about generated session titles via `session_info_update`. [Link](https://github.com/anomalyco/opencode/pull/61315)
9. **#61317** [OPEN] Fix(core): give independent git clones distinct project identities - Projects no longer identified solely by remote URL; independent clones get distinct identities. [Link](https://github.com/anomalyco/opencode/pull/61317)
10. **#61228** [OPEN] Fix(tui): allow opting into native input parsing - Adds "Native input parser" option to `/experiments` using existing `experimental["native-input"]` config. [Link](https://github.com/anomalyco/opencode/pull/61228)

## Feature Request Trends
- **Session management**: Pinning (#55764), handoff (#49286), and reverting/forking from AI messages (#8689) are the most requested UX improvements for long-running sessions.
- **Free tier stability**: Reset mechanism failures (#59387), 429 errors on DeepSeek V4.1 Flash (#61152), and per-token accounting (#43250) dominate free tier complaints.
- **Cross-platform fixes**: Windows project creation resolving to C:\ root (#61303), CJK/Hangul token estimation (#61204), and native input parsing (#61228) address platform-specific friction.
- **MCP ecosystem**: Totem (#61324) and TrendsAGI (#61312) integrations reflect growing demand for durable agent messaging across separate agent instances.
- **Provider efficiency**: Claude Agent `sdk-ts` label draining 5-hour limits 1.8x faster (#61072) and DeepSeek free tier 429s (#61152) highlight provider-internal labeling issues.

## Developer Pain Points
1. **Free tier free usage limits** - Recurring reset failures, 429 errors on first request, and unbounded token accumulation beyond `keep.tokens` setting affect all free users.
2. **Cache invalidation plague** - Go users report cache invalidated after 1-2 turns, crippling performance in multi-turn and subagent workflows.
3. **Windows project creation bugs** - New projects in folders without git repos resolve to `C:\` root, breaking expected behavior and folder scoping.
4. **Cross-model cache eviction** - Spawning subagents through main agents evicts the main agent's cache, causing cache misses in parallel agent sessions.
5. **Automatic session execution without permission** - Post-re

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-11-03

## Today's Highlights
Pi **v1.5.0** shipped with extension update changelogs, letting package authors surface change notices on next fresh launch. The community is actively tackling performance regressions: a Mac CPU spike (#7730, 23 comments), Windows transcript re-render saturation (#9549), and grep-induced OOM (#9276). Meanwhile, Anthropic adapter schema fidelity (#9134, #9557) and OAuth token races (#11655, #11692) remain hot operational pain points.

---

## Releases
### v1.5.0 — Extension Update Changelogs
- **New**: Installed extensions now show changelogs on next fresh launch after an update. Package authors control the changelog path; `collapseChangelog` condenses notices.  
- **Docs**: [Show a changelog](https://github.com/earendil-works/pi/blob/main/docs/extensions/changelog.md)  
- **Scope**: Minor release; no breaking API changes reported.

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **High CPU on macOS during long sessions** (100%+ CPU, 600–800 MB RAM) | Blocks macOS power users; suspected context/session-length correlation. | 23 comments, 11 👍 — highest engagement in batch. |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | **Fullscreen: large transcripts re-render every frame; resize re-emits whole transcript** (1 core saturated) | Makes long sessions unusable on low-core Windows machines. | 17 comments, 1 👍; labeled `inprogress`. |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm search not indexing new pi-packages** (gallery stale since Aug 4) | Breaks package discovery; new extensions invisible on pi.dev/packages. | 19 comments, 1 👍; closed but root cause likely persists. |
| [#10497](https://github.com/earendil-works/pi/issues/10497) | **OpenRouter 400: requested tokens exceed 1,048,576 limit** | Context clamping mismatch; affects users routing via OpenRouter. | 15 comments; closed after clamping fix (see PR #11712). |
| [#10956](https://github.com/earendil-works/pi/issues/10956) | **cacheWarming "idle" never fires** when extensions handle `turn_end` with custom/compaction messages | Silent cache warm failure degrades latency for long-running sessions. | 11 comments, 2 👍; open, root cause identified in `cacheContinue`. |
| [#9134](https://github.com/earendil-works/pi/issues/9134) | **Anthropic adapter drops root `anyOf` from custom tool schemas** | Schema contract violation; validator keeps constraint but model sees stripped schema. | 7 comments; open, impacts tool-calling correctness. |
| [#9557](https://github.com/earendil-works/pi/issues/9557) | **Anthropic adapter drops root-level JSON Schema keywords (`anyOf`, `oneOf`, etc.) in non-strict mode** | Same class as #9134; non-strict path loses expressive constraints. | 7 comments, 1 👍; closed as duplicate/related. |
| [#11527](https://github.com/earendil-works/pi/issues/11527) | **Bedrock: new `BedrockRuntimeClient` per request** (SSO credential round-trip each call) | Severe latency & throttling risk for AWS SSO users. | 5 comments; open, clear optimization target. |
| [#9276](https://github.com/earendil-works/pi/issues/9276) | **grep with context lines causes OOM** (reads entire matched files into heap) | Heap exhaustion on large log corpora; blocks headless SDK usage. | 4 comments; labeled `inprogress`, PR #11705 addresses. |
| [#11021](https://github.com/earendil-works/pi/issues/11021) | **ChatGPT sign-in reports 272K context for GPT-6.1 Sol vs. 500K actual** | Undersized context budget → premature compaction. | 6 comments, 7 👍; open, affects OpenAI/Copilot users. |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#11712](https://github.com/earendil-works/pi/pull/11712) | **fix(ai): leave room for OpenRouter's input overcount when clamping max tokens** | Closed | Adds 12% headroom for OpenRouter's tokenizer discrepancy; unblocks DeepSeek flash & similar models. |
| [#11705](https://github.com/earendil-works/pi/pull/11705) | **fix(coding-agent): take grep context lines from ripgrep instead of reading matched files** | Open | Eliminates OOM by streaming context from rg `--context`; memory now scales with output, not file size. |
| [#11707](https://github.com/earendil-works/pi/pull/11707) | **feat(coding-agent): list updated packages with version changes in `pi update`** | Closed | Users now see per-package version deltas; resolves blind-batch-update UX. |
| [#11709](https://github.com/earendil-works/pi/pull/11709) | **fix(coding-agent): report installed version after npm/pnpm/yarn/bun self-updates** | Closed | Verifies actual installed version vs. advertised; prevents stale-registry false "up to date". |
| [#11711](https://github.com/earendil-works/pi/pull/11711) | **fix(coding-agent): only report packages as up to date when pi update checked them** | Closed | Fixes false "up to date" when npm reinstalls old version or registry stale. |
| [#11545](https://github.com/earendil-works/pi/pull/11545) | **Anthropic message threads (beta)** | Open | Server-side conversation reuse: sends only new messages when session ID + caching enabled. |
| [#11679](https://github.com/earendil-works/pi/pull/11679) | **feat(ai): add Microsoft-Decision-1 classifier to GitHub Copilot** | Closed | Registers `microsoft-decision-1` (32K ctx, $0.042/M input) as `typesafe-system-one`. |
| [#11629](https://github.com/earendil-works/pi/pull/11629) | **feat(coding-agent): add `PI_SELF_UPDATE_COMMAND` / `selfUpdateCommand` for `pi update`** | Closed | Allows wrapper-managed Pi (mise, nub, Nix) to declare custom self-update command. |
| [#11680](https://github.com/earendil-works/pi/pull/11680) | **fix(coding-agent): apply context edits to branch summary input** | Closed | `/tree` summarize now respects `context_edit` entries (hides failed retries from summarizer). |
| [#11690](https://github.com/earendil-works/pi/pull/11690) | **fix(coding-agent): serve catalogs without version redirect** | Closed | Aligns CLI with pi.dev catalog protocol change; removes `?pi-version=` redirect. |

---

## Feature Request Trends (from Issues)
1. **Schema fidelity across providers** — Anthropic (`anyOf`/`oneOf` drop), OpenAI (context window mismatch), OpenRouter (token overcount) all point to a need for a **provider-agnostic schema normalization layer** with per-adapter test suites.
2. **Session durability & portability** — `#11715` (remote TUI attach), `#11716` (31-day session confabulation), `#11683` (durable task wake) signal demand for **session migration, replication, and long-horizon integrity**.
3. **Extension ecosystem tooling** — Changelog display (v1.5.0), namespace isolation (`pi.namespace` #8834), self-update for wrapped installs (#11629), and package discovery (#7885) show a maturing **extension lifecycle focus**.
4. **Performance at scale** — Transcript rendering (#9549), grep memory (#9276), Bedrock client reuse (#11527), cache warming (#10956) converge on **streaming/incremental architectures** over full-materialization.

---

## Developer Pain Points (Recurring Frustrations)
- **Silent failures**: Cache warming stops without logs (#10956), OAuth refresh races lose tokens (#11655, #11692), extension test files kill host process (#11691).
- **Context/compaction surprises**: Model context window misreported (#11021), compaction hides failed turns but branch summarizer replays them (#11602), long sessions hallucinate missing messages (#11716).
- **Platform-specific regressions**: macOS CPU spikes (#7730), Windows fullscreen render saturation (#9549), Alacritty IME autocomplete broken (#11177), WSL clipboard history missing (#6003).
- **Schema-contract drift**: Provider adapters strip valid JSON Schema keywords (#9134, #9557), extension models lack cost metadata causing crashes (#10209), relative `$id` double-resolution breaks validation (#11697).
- **Upgrade friction**: `pi update` reported wrong versions (#11707, #11709, #11711), Nix build broken by new runtime dep (#11685), release tags not built on pkg.earendil.com (#11686).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑11‑03**

---

### 1. Today’s Highlights  
- L Stasky 0 landed three UI‑focused fixes in the past day: HTML character‑reference decoding, automatic tab expansion, and prevention of LaTeX‑related crashes caused by non‑ASCII characters.  
- The community continued to address a budget‑clamping bug for custom `openai‑compatible` providers, which still limits output to 32 K tokens despite the server supporting 262 K.

---

### 2. Releases  
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues  *(2 noteworthy issues found)*  

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#7179** | **[OPEN] Custom openai‑compatible provider: output budget clamped to the hosted‑catalog ceiling (32 K for qwen3.8‑27b) even though the server accepts 262 K** – <https://github.com/Hmbown/DeepSeek-TUI/issues/7179> | Users with operator‑owned vLLM proxies cannot exploit the full token budget, causing reasoning models to return empty terminals. | 2 comments, no up‑votes yet; the issue is actively discussed and awaiting triage. |
| **#7194** | **[OPEN] Upstream candidates from the app‑side reuse audit (reasoning tiers, provider facts, artifact producers, MCP keys)** – <https://github.com/Hmbown/DeepSeek-TUI/issues/7194> | The audit aims to align desktop embedder (`Pinvou`) with engine capabilities; clarifying upstream candidates could streamline future reuse and reduce duplication. | No comments or reactions; pending triage. |

*Only two issues have been updated in the last 24 h, so the “10‑issue” target is not met; the digest therefore highlights these as the most relevant open items.*

---

### 4. Key PR Progress  *(10 important PRs)*  

| # | Title & Link | Fix / Feature | Impact |
|---|--------------|---------------|--------|
| **#7192** | **[CLOSED] fix(tui): decode HTML character references in replies** – <https://github.com/Hmbown/DeepSeek-TUI/pull/7192> | Converts `&lt;`, `&amp;`, `&#124;`, `&nbsp;` back to their literal characters, preventing broken UI text and malformed links. | Improves readability of API responses and eliminates hidden `amp;` parameters. |
| **#7199** | **[OPEN] fix(engine): read text files that start with BM as text** – <https://github.com/Hmbown/DeepSeek-TUI/pull/7199> | Extends the `read` tool to treat files beginning with “BM” as plain text rather than BMP images. | Users can now view notes like “BM25 is a ranking function” without loss of content. |
| **#7197** | **[OPEN] fix(tui): size table columns from their content** | Dynamically allocates column width based on cell content, preventing cramped rows and unnecessary wrapping. | Enhances table rendering clarity, especially for numeric‑heavy logs. |
| **#7198** | **[OPEN] fix(tui): stop math with non‑ASCII text from crashing the TUI** | Adds validation to ignore or escape non‑ASCII characters inside LaTeX environments, stopping runtime crashes. | Makes the UI robust when handling internationalised mathematical notation. |
| **#7186** | **[CLOSED] fix(tui): break the line at `<br>`** | Renders `<br>` tags as line‑breaks instead of literal text, allowing multi‑line table cells to display correctly. | Resolves layout issues in markdown tables that use HTML line breaks. |
| **#7196** | **[OPEN] fix(tui): stop treating dollar amounts as inline math** | Adjusts the inline‑math parser to respect whitespace and digit boundaries, preserving `$` prefixes in monetary values. | Prevents loss of currency symbols and unintended formula merging. |
| **#7182** | **[CLOSED] fix(tui): render markdown images as their alt text** | Parses `![alt](url)` markdown to display the alt attribute when an image cannot be rendered. | Improves accessibility and ensures informative text is shown. |
| **#7139** | **[CLOSED] fix(workflow-js): generate Windows GNU LLVM bindings** | Adds the missing bundled `rquickjs-sys` binding for the `x86_64-pc-windows-gnullvm` target. | Enables successful builds of the workflow‑js toolchain on Windows GNU LLVM. |
| **#7187** | **[CLOSED] chore(deps): bump react‑dom and @types/react‑dom in /web** | Updates React dependencies to their latest patch releases. | Keeps the web UI on a supported, secure dependency set. |
| **#7161** | **[CLOSED] chore(deps): bump uuid from 1.28.0 to 1.29.0** | Upgrades the `uuid` crate, bringing in bug‑fixes and new API extensions. | Improves reliability of UUID handling throughout the codebase. |

---

### 5. Feature Request Trends  

- **Flexible provider budgeting** – Issue #7179 reveals a demand for custom `openai‑compatible` providers to expose the full token ceiling (262 K) rather than being capped by the hosted catalog.  
- **Better reuse audit integration** – Issue #7194 points to a need for clearer upstream candidates (reasoning tiers, provider facts, artifact producers, MCP keys) to align the desktop embedder with engine capabilities.  
- **Enhanced tab handling** – PR #7193 requests proper tab expansion in replies and sent messages, indicating a pain point where indentation is lost.  

These trends suggest the community is focusing on **provider expressiveness, audit transparency, and UI fidelity**.

---

### 6. Developer Pain Points  

- **HTML character references** in replies cause broken links and unreadable text (PR #7192).  
- **Table column sizing** leads to cramped rows and wasted space (PR #7197).  
- **Non‑ASCII LaTeX** characters crash the TUI (PR #7198).  
- **Dollar‑amount parsing** incorrectly treats `$` as math delimiters, corrupting financial text (PR #7196).  
- **BMP‑file mis‑identification** (`read` tool treats “BM” files as images) hampers note viewing (PR #7199).  
- **Tab indentation loss** makes code snippets appear flattened (PR #7193).  

Addressing these recurring issues would markedly improve the developer experience and reduce friction when using DeepSeek TUI in production environments.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*