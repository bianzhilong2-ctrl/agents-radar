# AI CLI Tools Community Digest 2026-08-04

> Generated: 2026-08-04 01:29 UTC | Tools covered: 9

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



# Cross-Tool Comparison Report: AI CLI Tools as of 2026-08-04  

---

## 1. **Ecosystem Overview**  
The AI CLI tool landscape in 2026 is dominated by rapid iteration around agentic workflows, model flexibility (especially BYOK and open-source support), and cross-platform stability (particularly Windows/WSL reconciliation). Tools like OpenAI Codex and ClashCode prioritize code-centric agents with tight integration to VS Code/terminals, while others (e.g., Gemini, Pi, DeepSeek TUI) focus on generalist agents or low-code tooling. Security, reliability, and observability are universal pain points, with recurring themes around session management, cancellation handling, and sandbox constraints. Trends indicate a shift toward "agent first" design and standardized APIs (e.g., ACP, MCP) for interoperability.  

---

## 2. **Activity Comparison**  

| Tool               | Hot Issues | PRs Active | Latest Release/Status | Key Focus Areas |  
|--------------------|------------|------------|------------------------|-----------------|  
| **Claude Code**    | ⚠️ Failed | 0          | No new releases        | Code-generation tooling, GitHub integration |  
| **OpenAI Codex**   | 10         | 10         | `rust-v0.147.0-alpha`  | Runtime API, rate limits, WSL stability |  
| **Gemini CLI**     | 10         | 10         | `v0.55.0-nightly`      | Subagent balance, AST tooling |  
| **GitHub Copilot CLI** | 10     | 0          | `v1.0.78`              | Plugin management, BYOK support |  
| **Kimi Code CLI**  | 3          | 8          | No releases            | Memory system, Web UI stability |  
| **OpenCode**       | 10         | 7          | `v1.18.12`             | Session goals, file handling |  
| **Pi**             | 10         | 9          | No releases            | WSL/ Windows path handling, compaction |  
| **Qwen Code**      | 10         | 10         | `v0.21.4`              | Trustworthiness, fork agents |  
| **DeepSeek TUI**   | 10         | 10         | v0.9.4 release train   | ACP protocol, TUI/CLI parity |  

---

## 3. **Shared Feature Directions**  
- **Session Management**: Native session goals, persistent memory (CodeWhale, Qwen), and cross-session consistency (OpenCode, Pi) are universal requests.  
- **Model/BYOK Flexibility**: Multi-BYOK support, cheaper routes (OpenCode Go/Zen, Gemini CLI), and read-before-edit guardrails (DeepSeek TUI) signal demand for granular model control.  
- **CLI/TUI Parity**: DeepSeek TUI and Kimi aim for unified UX across TUI/CLI, while CodeWhale focuses on ACP adapter parity.  
- **Runtime API Maturity**: DeepSeek, Gemini, and Pi emphasize HTTP/Runtime APIs for agent lifecycle control (goal loops, verifier receipts, MCP servers).  
- **Cross-Platform Reliability**: All tools report WSL/Windows issues, sandbox pain points, and termination edge-case handling.  
- **Security/Observability**: Trust boundaries (Pi’s external tool guards), debt provenance (Qwen), and tool-input budgeting (OpenCode) are shared concerns.  

---

## 4. **Differentiation Analysis**  
- **Code-First vs. Generalist Agents**:  
  - *Code-First*: CodeWhale, Codex, Qwen prioritize code editing/API integration.  
  - *Generalist*: Gemini, Pi, Kimi focus on automation, memory, or agent swarms.  
- **User Demographics**:  
  - *Developers*: Codex, Qwen (open-source models).  
  - *Enterprise*: Pi (reliability), OpenCode (session goals).  
  - *Researchers*: Gemini, Kimi (AGI-like agent experimentation).  
- **Technical Approach**:  
  - *TUI-Driven*: DeepSeek TUI and Kimi emphasize terminal-first design.  
  - *CLI-First*: Gemini, Pi, Qwen lean on CLI utility.  
  - *Server-Backed*: Pi and DeepSeek TUI explore backend session storage.  

---

## 5. **Community Momentum & Maturity**  
- **High Momentum**: OpenAI Codex, Gemini CLI, Pi, DeepSeek TUI show daily PR/issue activity, indicating rapid iteration.  
- **Mid-Tier**: OpenCode and Qwen maintain steady progress but with fewer hot issues.  
- **Clade Code**: Stagnant due to failed summary generation, highlighting risks of tooling dependency on community activity.  

---

## 6. **Trend Signals**  
- **Enterprise Reliability**: Demand for deterministic tool execution (Pi’s canceller refactor), sandbox consistency, and observability (Qwen’s token plan audits).  
- **Cross-Platform Parity**: WSL/Windows integration is critical but fraught with path-handling issues across tools.  
- **Model Flexibility**: BYOK and open-source routes (OpenCode, Qwen) are displacing vendor-locked APIs.  
- **TUI/CLI Convergence**: DeepSeek TUI and Kimi’s focus on unified user interfaces suggests mainstream adoption of terminal-first workflows.  
- **Agent Governance**: Security controls (external guards, cancel semantics) and state management (memory, goals) are becoming table stakes.  

--- 

This report underscores a fragmented yet rapidly evolving ecosystem, with functional differentiation driven by target use cases and technical philosophy, while convergence on reliability and observability remains a shared challenge.


---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-04 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

### 1. [fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)
- **Functionality:** Critical infrastructure fix — `run_eval.py` (and downstream `run_loop.py`, `improve_description.py`) was reporting `recall=0%` for every skill description, rendering the description-optimization loop useless. The PR addresses install-as-real-skill artifact handling, Windows stream reading, trigger detection, and parallel worker bugs.
- **Discussion Highlights:** Addresses 10+ independent reproductions (#556). Multiple related PRs (#1099, #1050, #1323, #1261) indicate this is the most systemic bug in the skill-creator pipeline.
- **Status:** 🟢 OPEN | Author: MartinCajiao | Updated: 2026-06-23

### 2. [Add document-typography skill](https://github.com/anthropics/skills/pull/514)
- **Functionality:** Typographic quality control for AI-generated documents — prevents orphan words, widow paragraphs, and numbering misalignment. Targets a universal pain point in Claude's document output.
- **Discussion Highlights:** Identified as affecting every document Claude generates; users rarely ask for good typography explicitly, making this a proactive quality skill.
- **Status:** 🟢 OPEN | Author: PGTBoos | Updated: 2026-03-13

### 3. [Add ODT skill — OpenDocument creation, filling, and HTML parse](https://github.com/anthropics/skills/pull/486)
- **Functionality:** Full ODT/ODS workflow skill — create, fill templates, read, and convert OpenDocument Format files. Covers LibreOffice and ISO-standard document workflows.
- **Discussion Highlights:** Broad trigger vocabulary (ODT, ODS, ODF, OpenDocument, LibreOffice) maximizes real-world applicability.
- **Status:** 🟢 OPEN | Author: GitHubNewbie0 | Updated: 2026-04-14

### 4. [Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)
- **Functionality:** Revision of the existing frontend-design skill to ensure every instruction is actionable within a single conversation, with specific behavioral steering rather than vague guidance.
- **Discussion Highlights:** Focus on single-conversation executability — a quality bar that distinguishes well-crafted skills from documentation dumps.
- **Status:** 🟢 OPEN | Author: justinwetch | Updated: 2026-03-07

### 5. [Add skill-quality-analyzer and skill-security-analyzer to marketplace](https://github.com/anthropics/skills/pull/83)
- **Functionality:** Two meta-skills for evaluating skills across five dimensions (structure, documentation, examples, resources, trigger design) and security posture. Self-referential tooling for the skills ecosystem.
- **Discussion Highlights:** First meta-skills in the marketplace; represents community desire for quality governance of skills themselves.
- **Status:** 🟢 OPEN | Author: eovidiu | Updated: 2026-01-07

### 6. [fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538)
- **Functionality:** Fixes 8 case-sensitivity mismatches (4× `REFERENCE.md`→`reference.md`, 4× `FORMS.md`→`forms.md`) in the PDF skill. Breaks on Linux/macOS case-sensitive filesystems.
- **Discussion Highlights:** Illustrates the cross-platform fragility that pervades the skills collection.
- **Status:** 🟢 OPEN | Author: Lubrsy706 | Updated: 2026-04-29

### 7. [feat(skills): add self-audit — mechanical verification + reasoning quality gate](https://github.com/anthropics/skills/pull/1367)
- **Functionality:** Universal output audit skill — mechanical file verification first, then four-dimension reasoning audit in damage-severity priority order. Works with any project, any tech stack, any model.
- **Discussion Highlights:** Paired with Issue #1385 (Reasoning Quality Gate Pipeline proposal), signaling strong community interest in pre-delivery quality assurance.
- **Status:** 🟢 OPEN | Author: YuhaoLin2005 | Updated: 2026-07-02

### 8. [Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)
- **Functionality:** Comprehensive testing stack skill — Testing Trophy philosophy, unit testing (AAA pattern), React component testing (Testing Library), and broader test strategy guidance.
- **Discussion Highlights:** Covers the full testing spectrum from philosophy to tooling; one of the most complete new skills proposed.
- **Status:** 🟢 OPEN | Author: 4444J99 | Updated: 2026-04-21

---

## 2. Community Demand Trends (from Issues)

| Trend | Signal | Engagement |
|-------|--------|------------|
| **Security & Trust Boundaries** | Issue #492 — community skills impersonating `anthropic/` namespace enable trust boundary abuse | 43 comments, highest engagement |
| **Org-Wide Skill Sharing** | Issue #228 — manual .skill file sharing via Slack/Teams is unsustainable | 16 comments, 8 👍 |
| **Skill Quality Governance** | Issues #202 (skill-creator best practices), #189 (duplicate skills from overlapping plugins) | 8+ comments each |
| **Developer Tooling Reliability** | Issues #556, #1169, #1061 — run_eval.py trigger detection broken across platforms | 12+ comments, systemic |
| **New Domain Skills** | Proposals for agent-governance (#412), compact-memory (#1329), SAP analytics (#181), color-expert (#1302) | Steady pipeline |
| **Cross-Platform Compatibility** | Issues #1061, #29 (Bedrock), #1175 (SharePoint security) — Unix-first assumptions break Windows/cloud workflows | Recurring theme |
| **MCP Exposure** | Issue #16 — skills should be exposed as MCP tools for programmatic API access | Foundational request |

**Key Insight:** The community is demanding both **more skills** (new domains) and **better skills** (quality gates, security, reliability). The trust/security concern (#492) is the most urgent non-feature request.

---

## 3. High-Potential Pending Skills

These active OPEN PRs are likely to merge soon given their scope, authoritativeness, or alignment with open issues:

| PR | Skill | Why It's High-Potential |
|----|-------|------------------------|
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Addresses tracked issue #1417; lifecycle management for planning artifacts — a clear gap |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Paired with Issue #1385; universal quality gate — high reuse value |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Comprehensive color knowledge system (ISCC-NBS, Munsell, OKLCH, etc.) — broad applicability |
| [#1323](https://github.com/anthropics/skills/pull/1323) | **run_eval trigger detection fix** | Unblocks the entire description-optimization loop; prerequisite for all skill quality work |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **run_eval.py 0% recall fix** | Critical infrastructure — merges before or alongside #1323 |
| [#1261](https://github.com/anthropics/skills/pull/1261) | **trigger-eval isolation** | Fixes #1260 — prevents concurrent eval sessions from corrupting user projects |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal document quality improvement; low complexity, high user value |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | Fills a major document format gap (LibreOffice/OpenDocument) |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel (retro game dev)** | Unique niche — retro game development with Python; broad appeal for creative coding |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing coverage; fills a gap not covered by existing skills |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a reliable, trustworthy skill-creator pipeline** — the run_eval.py/trigger-detection infrastructure is fundamentally broken (consistently reporting 0% recall), and until it is fixed, every new skill proposal and description-optimization effort is built on a broken foundation; the flood of new skill PRs (typography, ODT, color-expert, testing-patterns, self-audit, plan-file-hygiene) will only reach their full potential once the evaluation and trust layer is repaired.

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-04

---

## 1. Today's Highlights

Two new Rust-based releases landed in the last 24 hours — **rust-v0.147.0-alpha.6** and **rust-v0.147.0-alpha.1.2** — signaling continued momentum on the Codex CLI rewrite. On the issue front, the community is rallying around Windows stability (freezing/stuttering, WSL sandbox regressions) and rate-limit regressions where the removal of the 5-hour usage cap has caused the weekly limit to drain at an unexpectedly aggressive pace. Several PRs focused on MCP tool controls, session resumption, and model metadata consolidation were merged, reflecting active engineering on extensibility and reliability.

---

## 2. Releases

- **rust-v0.147.0-alpha.6** — Latest alpha in the Rust CLI rewrite pipeline. No detailed changelog provided in the release metadata; this is a pre-release build.
  - [View Release](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6)
- **rust-v0.147.0-alpha.1.2** — Secondary alpha variant, likely a hotfix or platform-specific build.
  - [View Release](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.1.2)

---

## 3. Hot Issues

1. **[#20214](https://github.com/openai/codex/issues/20214)** — Codex App frequently freezes/stutters on Windows 11 Pro (88 comments, 78 👍). The highest-engagement issue in the tracker; users on AMD Ryzen 5 5600 / 32 GB RAM report persistent UI jank despite sufficient resources. Community suspects a rendering or event-loop bottleneck in the desktop shell.

2. **[#33685](https://github.com/openai/codex/issues/33685)** — Weekly limit draining like the old 5-hour limit (25 comments, 10 👍). After the 5-hour cap was removed, Plus users report the weekly quota now depletes at a comparable rate, effectively replacing one restriction with another. Users on GPT-5.5 High are affected.

3. **[#35097](https://github.com/openai/codex/issues/35097)** — gpt-5.6-luna marked as MultiAgent V1, so V2 `spawn_agent` rejects it (14 comments, 37 👍). A model metadata tagging inconsistency blocks subagent spawning for a newly available model. High 👍 count signals strong community frustration with model availability gaps.

4. **[#19504](https://github.com/openai/codex/issues/19504)** — Add full RTL support for Arabic & Hebrew users (24 comments, 19 👍). A Papercuts 2026 enhancement request for native right-to-left text rendering in both Codex and Chat panels. Addresses a significant accessibility gap for Arabic and Hebrew-speaking developers.

5. **[#35119](https://github.com/openai/codex/issues/35119)** — 26.721.3404 marks valid WSL repositories as non-Git (14 comments, 13 👍). A regression in the Windows app server (0.146.0-alpha.3) causes WSL-based Git repos to be misidentified, breaking Git-dependent workflows for WSL2/Ubuntu users.

6. **[#12029](https://github.com/openai/codex/issues/12029)** — Ability to use more than one account (12 comments, 62 👍). Long-standing feature request for multi-account auth in the VS Code extension. The 62 👍 count makes it one of the most-wished-for features across the entire tracker.

7. **[#29639](https://github.com/openai/codex/issues/29639)** — Browser Use Node REPL fails in Windows Desktop app with WSL workspace (14 comments). Sandbox path mismatch: the auto-generated `node_repl.exe` receives a Linux/WSL `sandboxCwd` it cannot resolve, breaking Browser Use in WSL-configured Windows sessions.

8. **[#32791](https://github.com/openai/codex/issues/32791)** — Five-hour Codex usage limit disappeared from Plus account (9 comments, 3 👍). Confirms the 5-hour cap removal and documents the UX change where only the weekly limit is now displayed. Closely related to #33685.

9. **[#34700](https://github.com/openai/codex/issues/34700)** — spawn_agent rejects gpt-5.6-luna with multi_agent_v2 enabled (9 comments, 24 👍). A duplicate/companion report to #35097 from a Windows user, reinforcing that the model tagging bug affects both CLI and App surfaces.

10. **[#34453](https://github.com/openai/codex/issues/34453)** — Full Access session reverts to per-action approval after restart (5 comments). Breaks long autonomous agent runs on macOS, a critical reliability issue for Pro users relying on unattended execution.

---

## 4. Key PR Progress

1. **[#36815](https://github.com/openai/codex/pull/36815)** — Identify agents by name in token budget context. Replaces thread IDs with canonical agent paths (e.g., `/root`) in `<context_window>` metadata, improving observability for subagent token usage.

2. **[#36812](https://github.com/openai/codex/pull/36812)** — Add a dual-WebSocket transport for code mode. Introduces `dual-websocket-v1` capability to prevent large nested-tool callbacks from blocking unrelated session operations on the same connection.

3. **[#36811](https://github.com/openai/codex/pull/36811)** — Honor per-environment login shell policy. Stores `allow_login_shell` on each turn environment and exposes the `login` argument for shell tools when permitted, tightening security controls.

4. **[#36810](https://github.com/openai/codex/pull/36810)** — Add MCP client conformance regression gates. Adds a harness running Codex against a pinned MCP client conformance suite across HTTP/stdio transports and OAuth scenarios.

5. **[#36809](https://github.com/openai/codex/pull/36809)** — Prefer the state database for `exec resume --last`. Queries SQLite first instead of auditing every rollout file, improving resume performance.

6. **[#36808](https://github.com/openai/codex/pull/36808)** — Prefer SQLite names for local session archive commands. Resolves `archive`, `delete`, and `unarchive` targets from SQLite before falling back to rollout scanning.

7. **[#36807](https://github.com/openai/codex/pull/36807)** — Extract audio preparation into a utility crate. Adds `codex-utils-audio` for canonicalizing audio inputs and estimating token usage, improving modularity.

8. **[#36800](https://github.com/openai/codex/pull/36800)** — Avoid reinjecting permissions after command approvals. Tracks approved command prefixes separately from stable permissions, reducing permission blob bloat after exec-policy amendments.

9. **[#36793](https://github.com/openai/codex/pull/36793)** — Terminate timed-out Git process trees. Runs Git metadata commands in dedicated process groups (Unix) or Job Objects (Windows) so timeout cleanup properly terminates child processes.

10. **[#36781](https://github.com/openai/codex/pull/36781)** — Add per-surface MCP tool exposure controls. Introduces `omit_tools_from` to MCP server config, allowing servers to opt out of tool search, direct exposure, or Code Mode invocation independently.

---

## 5. Feature Request Trends

- **Multi-account support** — The most-wished-for feature (#12029, 62 👍). Users need to switch between personal and corporate Codex accounts on the same machine, particularly in the VS Code extension.
- **Accessibility & internationalization** — RTL text support for Arabic and Hebrew (#19504) and Gmail connector multi-account support (#30418) signal growing demand for inclusive, global-first design.
- **Background/autonomous agent capabilities** — A `monitor` tool that reacts to logs, files, builds, and CI events without polling (#29922) reflects demand for event-driven automation beyond turn-based interaction.
- **CLI UX refinements** — Disabling inline ghost suggestions (#10562, 12 👍) and improving session archive ergonomics show attention to developer comfort in the terminal experience.
- **Model parity & exposure** — Multiple issues (#35097, #34700, #34964) requesting proper exposure of gpt-5.6-luna across surfaces, indicating a gap between model availability and tool-level model selectors.

---

## 6. Developer Pain Points

- **Windows/WSL instability** — A dominant theme across the tracker. Issues include app freezing (#20214), WSL Git misidentification (#35119), Browser Use sandbox path mismatches (#29639), clipboard screenshots unavailable in WSL (#30529), and shell timeout orphaning (#35393). The Windows desktop app and WSL integration remain the most fragile surface.
- **Rate-limit regressions** — The removal of the 5-hour cap (#32791) has not been replaced by a better mechanism; the weekly limit now drains at a comparable pace (#33685), and auto code review silently fails when quotas are exhausted (#15477). Users feel the policy change without a corresponding UX improvement.
- **Model availability gaps** — gpt-5.6-luna is inconsistently exposed across CLI, App, and subagent spawning (#35097, #34700, #34964), and gpt-5.6-sol is unsupported for ChatGPT accounts (#34027). Model metadata and surfacing need alignment.
- **Sandbox and permission reliability** — File-edit approval buttons becoming unresponsive in Remote SSH sessions (#34652), Full Access sessions reverting to per-action approval after restart (#34453), and MCP OAuth refresh breaking after token expiry (#33403) all point to fragile state management around sandbox boundaries and auth lifecycle.
- **Session continuity** — Concurrent sessions leaking workspace roots (#24224), `exec resume` not updating Desktop session indexes reliably (#28259), and usage draining when the app is idle (#24818) erode trust in session management and resource accounting.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Today's Highlights**  
The Gemini‑CLI v0.55.0‑nightly (2026‑08‑03) was released with a suite of bug‑fixes and new model configurations, while the issue tracker shows heightened activity around agent recovery, sub‑agent hangs, and memory‑inbox handling. Community attention is also focused on improving AST‑aware tooling and expanding model‑choice flexibility.

---

### Releases
- **v0.55.0‑nightly.20260803.gf47d6c6f7** – nightly build that adds Gemini 3.6 Flash and 3.5 Flash‑Lite model definitions, refines history‑hardening, and resolves context‑corruption edge cases. <https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7>

---

### Hot Issues  (10 noteworthy)

| # | Issue (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| 1 | **#22323** – *Subagent recovery after MAX_TURNS reported as GOAL success* <https://github.com/google-gemini/gemini-cli/issues/22323> | Reports that a sub‑agent incorrectly declares success even though it hit the maximum turn limit, hiding the real failure. | High‑priority (p1); many comments (12) and 👍 votes (2) indicate urgency. |
| 2 | **#21409** – *Generalist agent hangs* <https://github.com/google-gemini/gemini-cli/issues/21409> | The generalist agent can freeze indefinitely when deferring to sub‑agents, blocking any progress. | 8 👍 votes; users note it persists for hours, prompting work‑arounds. |
| 3 | **#24353** – *Robust component level evaluations* <https://github.com/google-gemini/gemini-cli/issues/24353> | Introduces a full EPIC of 76 behavioral eval tests, critical for measuring agent reliability. | 7 comments, no 👍 but flagged as priority p1. |
| 4 | **#22745** – *AST‑aware file reads, search, and mapping* <https://github.com/google-gemini/gemini-cli/issues/22745> | Explores value of using Abstract Syntax Tree‑aware tools to reduce turn count and token noise. | 7 comments, 1 👍; seen as a promising feature direction. |
| 5 | **#21968** – *Gemini does not use skills and sub‑agents enough* <https://github.com/google-gemini/gemini-cli/issues/21968> | Users observe that the model rarely auto‑invokes custom skills unless explicitly instructed. | 6 comments, 0 👍 – indicates a gap in autonomous agent behavior. |
| 6 | **#26522** – *Stop Auto Memory from retrying low‑signal sessions indefinitely* <https://github.com/google-gemini/gemini-cli/issues/26522> | Auto‑Memory stalls on low‑signal sessions, leaving them unprocessed and bloating the inbox. | 5 comments, 0 👍 – a recurring reliability bug. |
| 7 | **#26525** – *Add deterministic redaction and reduce Auto Memory logging* <https://github.com/google-gemini/gemini-cli/issues/26525> | Current redaction occurs after secrets are already in model context; logging leaks sensitive data. | 4 comments, 0 👍 – security‑focused request. |
| 8 | **#25166** – *Shell command execution gets stuck with “Waiting input” after command completes* <https://github.com/google-gemini/gemini-cli/issues/25166> | Simple CLI commands hang after finishing, showing “awaiting user input” erroneously. | 4 comments, 3 👍 – high‑impact usability bug. |
| 9 | **#22232** – *Enhance browser_agent resilience: Automatic session takeover and lock recovery* <https://github.com/google-gemini/gemini-cli/issues/22232> | Browser profiles can become locked, causing the agent to fail fast; a more graceful takeover is needed. | 4 comments, 0 👍 – enhancement request. |
|10| **#21983** – *browser subagent fails in wayland* <https://github.com/google-gemini/gemini-cli/issues/21983> | Wayland‑specific browser sub‑agent crashes, preventing usage on modern Linux desktops. | 4 comments, 1 👍 – platform‑specific bug. |

---

### Key PR Progress  (10 important PRs)

| # | PR (link) | Summary |
|---|-----------|---------|
| 1 | **#28673** – *Add Gemini 3.6 Flash & 3.5 Flash‑Lite model configs* <https://github.com/google-gemini/gemini-cli/pull/28673> | Introduces new model definitions, capabilities (`thinking`, `multimodalToolUse`), and aliases for Flash‑Lite, expanding developer choice. |
| 2 | **#28670** – *Ensure correct fallback on model capacity errors for GCA agent mode* <https://github.com/google-gemini/gemini-cli/pull/28670> | Fixes infinite retry loops when backend capacity is exhausted, allowing graceful fallback to alternative models (e.g., Flash). |
| 3 | **#28666** – *Validate every workspace directory GlobTool.execute()* <https://github.com/google-gemini/gemini-cli/pull/28666> | Aligns `GlobTool.validateToolParamValues()` with `execute()` to correctly determine searchable directories, preventing scope mismatches. |
| 4 | **#28665** – *Remove stray comma operator in activate() that leaked Disposables* <https://github.com/google-gemini/gemini-cli/pull/28665> | Eliminates a JavaScript comma‑expression bug that caused double‑subscription of disposables in VS Code companion. |
| 5 | **#28672** – *Repair /compress session reload and quota‑fallback tool response loss* <https://github.com/google-gemini/gemini-cli/pull/28672> | Addresses two independent corruption bugs: (1) `/compress` failing to load resumed data, and (2) loss of tool responses after quota‑fallback. |
| 6 | **#28664** – *Reflect full server config in consent and harden stdio env* <https://github.com/google-gemini/gemini-cli/pull/28664> | Extends consent prompts to show all MCP server fields (`env`, `cwd`, `headers`) and secures the stdio environment. |
| 7 | **#28586** – *Preserve thoughtSignature in functionCall parts to fix 400 error* <https://github.com/google-gemini/gemini-cli/pull/28586> | Restores `thoughtSignature` in function‑call payloads, eliminating a regression that caused 400 Bad Request errors during parallel tool calls. |
| 8 | **#28658** – *Don’t start voice recording before providers are ready* <https://github.com/google-gemini/gemini-cli/pull/28658> | Defers `TranscriptionProvider.connect()` until the selected backend is truly ready, preventing dead‑recording scenarios. |
| 9 | **#28660** – *Keep sendStream alive on malformed tool arguments* <https://github.com/google-gemini/gemini-cli/pull/28660> | Validates SDK‑provided arguments, rejecting non‑JSON structures and turning parse failures into structured `functionResponse` errors. |
|10| **#28674** – *chore(deps): bump ip‑address from 10.2.0 to 10.4.0* <https://github.com/google-gemini/gemini-cli/pull/28674> | Updates the `ip-address` dependency to resolve security patches and improve network reliability. |

---

### Feature Request Trends  

- **Sub‑agent visibility & control** – Multiple issues (#22323, #22598, #20195) request better introspection, sharing, and graceful recovery of sub‑agents, indicating strong demand for transparent agent workflows.  
- **More autonomous use of skills & sub‑agents** – Concerns that Gemini rarely auto‑invokes custom skills (#21968) or respects sub‑agent limits (#21409, #22267) point to a need for smarter, self‑directed agent behavior.  
- **Robustness & resilience** – Browser‑agent lock handling (#22232, #21983), Auto‑Memory retry logic (#26522, #26525), and shell‑command hang bugs (#25166) highlight a trend toward more resilient, non‑fragile execution pipelines.  
- **AST‑aware tooling** – Several feature‑focused issues (#22745, #22746) explore AST‑based file reads/search, suggesting a growing appetite for precise code‑understanding tools.  
- **Model flexibility & capacity handling** – PRs adding Flash‑Lite models and fixes for capacity‑exhaustion loops (#28673, #28670) reflect a push for broader model options and reliable fallback behavior.  

---

### Developer Pain Points  

- **Agent hang & recovery** – Persistent hangs in the generalist agent (#21409) and sub‑agent recovery failures (#22323) cause workflow stalls and require manual cancellation.  
- **Memory‑inbox mishandling** – Auto‑Memory incorrectly retries low‑signal sessions (#26522) and silently discards invalid patches (#26523), leading to noisy logs and wasted compute.  
- **Shell & command execution glitches** – Simple CLI commands sometimes appear “awaiting input” after completion (#25166), breaking the expected interactive flow.  
- **Tool‑limit errors** – Hitting the 400‑error threshold when >128 tools are enabled (#24246) forces developers to manually prune toolsets, reducing productivity.  
- **Platform‑specific failures** – Wayland‑related browser sub‑agent crashes (#21983) and symlink detection issues (#20079) impede cross‑environment reliability.  

These trends and pain points guide the roadmap for the next releases, emphasizing stability, smarter autonomous agents, and richer observability.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**Today's Highlights**  
GitHub Copilot CLI v1.0.78 introduces the experimental `/new-worktree` command for creating isolated worktrees and sessions. Key improvements include an inline hint for the interactive shell shortcut and a fix for browser-based login defaults. Several high-priority issues around BYOK model support, plugin scoping, and terminal rendering were also updated in the past 24 hours.  

---

**Releases**  
**v1.0.78 (2026-08-03)**  
- **Added**: Experimental `/new-worktree` command to create a new worktree and start a fresh conversation.  
- **Improved**: Interactive shell shortcut now launches on Enter with an inline `$` hint. First-party plugins auto-update on session start.  
- **Fixed**: Copilot login defaults to browser flow for local desktop environments.  

---

**Hot Issues**  
1. **#1665** ([Support Project-Scoped Plugins](https://github.com/github/copilot-cli/issues/1665))  
   - **Why it matters**: Users request project/repository-specific plugins instead of global installation.  
   - **Community reaction**: 18 👍, 14 comments. High demand for granular control.  

2. **#3282** ([Multiple BYOK Models](https://github.com/github/copilot-cli/issues/3282))  
   - **Why it matters**: Current BYOK setup only supports a single model via env vars, limiting flexibility.  
   - **Community reaction**: 20 👍, 7 comments. Core request for multi-model workflows.  

3. **#1464** ([Unreachable Skills](https://github.com/github/copilot-cli/issues/1464))  
   - **Why it matters**: 63+ installed skills truncate to 32, making advanced skills inaccessible.  
   - **Community reaction**: 7 👍, 6 comments. Breaks usability for power users.  

4. **#3709** ([BYOK Model Switching](https://github.com/github/copilot-cli/issues/3709))  
   - **Why it matters**: `/model` ignores BYOK/local models in session selection.  
   - **Community reaction**: 20 👍, 3 comments. Blocks workflow flexibility.  

5. **#4078** ([Scheduled Prompts Kill Queue](https://github.com/github/copilot-cli/issues/4078))  
   - **Why it matters**: Scheduled tasks disrupt prompt queue processing.  
   - **Community reaction**: 5 comments, 0 👍. Impacts scheduled automation.  

6. **#2714** ([Toggle Plugins](https://github.com/github/copilot-cli/issues/2714))  
   - **Why it matters**: No quick way to disable plugins without uninstalling.  
   - **Community reaction**: 11 👍, 2 comments. Aligns with competitor tools (e.g., Claude Code).  

7. **#4337** ([-luna Model API Issue](https://github.com/github/copilot-cli/issues/4337))  
   - **Why it matters**: `gpt-5.6-luna` works only via `/responses`, not `/chat/completions`.  
   - **Community reaction**: 2 comments, 0 👍. Breaks aggregator tooling.  

8. **#2830** ([Custom Color Themes](https://github.com/github/copilot-cli/issues/2830))  
   - **Why it matters**: Users want to override default color modes (dark/light/auto).  
   - **Community reaction**: 6 👍, 2 comments. Accessibility and flexibility request.  

9. **#4350** ([Terminal Rendering Glitches](https://github.com/github/copilot-cli/issues/4350))  
   - **Why it matters**: Agency sessions show empty screens and erratic backspace.  
   - **Community reaction**: 0 comments. Likely a regression in v1.0.78.  

10. **#4349** ([MCP Policy Fetch Failure](https://github.com/github/copilot-cli/issues/4349))  
    - **Why it matters**: `permissions.disableBypassPermissionsMode` rejects `"enable"`.  
    - **Community reaction**: 0 comments. Blocks local/custom MCP servers.  

---

**Key PR Progress**  
No PRs updated in the last 24 hours.  

---

**Feature Request Trends**  
1. **Plugin Management**: Project-scoped plugins, enable/disable toggles, and Windows symlink fixes.  
2. **Model Flexibility**: Multiple BYOK models, local model support in `/model`, and session-level switching.  
3. **Configuration Control**: Custom themes, OSC progress bar opt-out, and sandbox tool whitelisting.  
4. **Terminal UX**: Scrollable history, table formatting fixes, and cursor behavior in WSL2.  

---

**Developer Pain Points**  
1. **BYOK Limitations**: Inflexibility in switching models (closed issues, unresolved).  
2. **Skill Accessibility**: Token-limited system prompts block advanced skills.  
3. **Session Stability**: Queue drops on scheduled prompts, stashed prompts lost on switch.  
4. **Rendering Bugs**: Broken tables, URL hyperlinking, and terminal escape artifacts.  
5. **Permission/Policy Failures**: Schema mismatches in managed settings and GITHUB_TOKEN MCP access.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑08‑04**  
*Source: github.com/MoonshotAI/kimi-cli (last 24 h)*  

---  

### 1. Today's Highlights  
- No new releases were published in the past day, but the repository saw steady maintenance activity: 3 issue updates and 8 pull‑request updates.  
- The most visible work continues around stabilising the Web UI (infinite spinner on session switches) and fixing subtle CLI/runtime bugs (stream hangs, banner printing on legacy consoles, hook‑task leakage).  

### 2. Releases  
*None* – no version tags were created or updated in the last 24 h.  

### 3. Hot Issues  
Only three issues were touched in the window; all are noteworthy because they affect core usability or represent long‑term feature direction.  

| # | Issue | Why it matters | Community reaction (👍/comments) | Link |
|---|-------|----------------|----------------------------------|------|
| #1283 | **[enhancement] Memory System – Persistent context across sessions** | Requests a durable memory layer (auto‑notes + user‑defined instructions) that would let the CLI retain project patterns and preferences between invocations – a high‑impact usability boost for power users. | 0 👍 · 15 comments (active discussion) | https://github.com/MoonshotAI/kimi-cli/issues/1283 |
| #2573 | **Bug: Web UI “Connecting to session…” infinite spinner when switching sessions** | Blocks the Web UI preview flow; users cannot seamlessly move between sessions, forcing a page reload or CLI restart. | 0 👍 · 1 comment | https://github.com/MoonshotAI/kimi-cli/issues/2573 |
| #2582 | **[bug] CLI stream hangs indefinitely during generation, session becomes unusable** | Affects the core CLI experience on Windows (reported with kimi‑k2.7‑code); a hung stream makes the entire session unresponsive, requiring manual kill. | 0 👍 · 0 comments | https://github.com/MoonshotAI/kimi-cli/issues/2582 |

### 4. Key PR Progress  
Eight pull‑requests were updated; they collectively address correctness, reliability, and minor polish across the Web UI, hook system, tooling, shell handling, ACP, and dependencies.  

| # | PR | Description & Impact | Link |
|---|----|----------------------|------|
| #2577 | **fix(web,vis): do not crash printing the startup banner on legacy console codecs** | Prevents a crash when the banner contains U+279C (➜) on consoles that cannot encode it (e.g., GBK). Improves startup reliability on older Windows terminals. | https://github.com/MoonshotAI/kimi-cli/pull/2577 |
| #2575 | **fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger** | Replaces bare `asyncio.create_task()` with a proper fire‑and‑forget helper, ensuring hook tasks are tracked and not lost due to weak‑set cleanup. | https://github.com/MoonshotAI/kimi-cli/pull/2575 |
| #2554 | **fix(tools): count StrReplaceFile replacements against running content** | Makes the success message for `StrReplaceFile` reflect the actual number of replacements after prior edits, fixing a counting bug. | https://github.com/MoonshotAI/kimi-cli/pull/2554 |
| #2530 | **fix(shell): stop blocking until timeout when a detached child holds the pipes** | Changes `_run_shell_command` to check exit status before waiting on stdout/stderr, preventing indefinite hangs when a background daemon keeps pipes open. | https://github.com/MoonshotAI/kimi-cli/pull/2530 |
| #2507 | **fix(acp): signal QuestionNotSupported instead of resolving empty answers** | Distinguishes a genuine user dismissal from an unsupported question by sending a dedicated signal, avoiding false “User dismissed” feedback to the model. | https://github.com/MoonshotAI/kimi-cli/pull/2507 |
| #2581 | **chore(release): bump kosong to 0.56.0** | Updates the internal `kosong` dependency, adds release notes, and pins the version – keeps the toolchain current. | https://github.com/MoonshotAI/kimi-cli/pull/2581 |
| #2580 | **fix(kosong): omit empty anthropic-beta header when no beta features declared** | Stops sending a useless `anthropic-beta: ` header, cleaning up HTTP requests to Anthropic when no beta opts are active. | https://github.com/MoonshotAI/kimi-cli/pull/2580 |
| #2535 | **fix(llm): scope prompt cache keys to Moonshot APIs** | Ensures third‑party Kimi‑compatible endpoints do not receive Moonshot‑specific `prompt_cache_key`, preventing cache‑key pollution while preserving official API caching. | https://github.com/MoonshotAI/kimi-cli/pull/2535 |

### 5. Feature Request Trends  
- **Persistent memory / cross‑session context** – The sole open enhancement (#1283) highlights a strong desire for a memory system that can store AI‑generated notes and user‑defined preferences across CLI invocations. This suggests users view the CLI as a long‑running assistant rather than a stateless tool.  

### 6. Developer Pain Points  
Recurring frustrations visible in the recent activity:  

1. **Web UI stability** – Infinite spinner on session switches (#2573) and banner‑printing crashes on legacy consoles (#2577) indicate the preview UI still has edge‑case handling gaps.  
2. **CLI runtime robustness** – Stream hangs that lock the session (#2582) and shell‑pipe blocking issues (#2530) point to missing timeout or cleanup logic in asynchronous I/O paths.  
3. **Hook & task management** – Improper fire‑and‑forget usage for PostToolUse hooks (#2575) reveals a pattern where background tasks are dropped, risking lost side‑effects.  
4. **Header hygiene** – Unnecessary empty `anthropic-beta` header (#2580) shows a need for stricter conditional header construction in provider code.  

Addressing these areas will improve day‑to‑day reliability and reduce the manual interventions users currently need when the CLI or Web UI encounters edge conditions.  

---  

*Generated for developers seeking a quick, actionable overview of the Kimi Code CLI project’s recent pulse.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - August 4, 2026

## Today's Highlights
OpenCode released v1.18.12 addressing Azure GPT-5.5+ completion issues with reasoning enabled and reducing composer lag when pasting large attachments. The community is actively discussing session management enhancements, with the most-voted feature request being native session goals with a `/goal` command. Critical desktop performance issues continue to surface, including app hangs during large text pasting and random scrolling disruptions.

## Releases
**v1.18.12 (latest release)**
- **Core**: Fixed Azure GPT-5.5+ completion requests failing when reasoning is enabled
- **Desktop**: Reduced composer lag when drafts include large pasted images or attachments, improved project search matching

## Hot Issues (Top 10 by Engagement)

1. **#27167** - [Add native session goals with /goal](anomalyco/opencode/issues/27167) (67 comments, 123 👍)
   - *Why it matters*: Addresses fundamental session lifecycle management. Users want persistent goals that persist across interactions within a session, similar to custom slash commands but with built-in persistence.
   - *Community reaction*: Highest-voted feature request, indicating strong user demand for better session organization.

2. **#16077** - [Persistent Session Memory](anomalyco/opencode/issues/16077) (12 comments, 3 👍)
   - *Why it matters*: Enables conversation continuity between sessions, crucial for CLI-based AI companions and users who want AI to remember previous interactions.
   - *Community reaction*: Moderate support, but less enthusiastic than session goals, suggesting users prefer goals-first approach.

3. **#36942** - [Vertical tabs](anomalyco/opencode/issues/36942) (10 comments, 16 👍)
   - *Why it matters*: Current horizontal tabs make it difficult to see more than 5 session titles, impacting productivity. Vertical tabs would significantly improve UI real estate utilization.
   - *Community reaction*: Strong support (16 👍) indicating this is a priority UX improvement.

4. **#38932** - [Pasting a long text in prompt box make Desktop app hang](anomalyco/opencode/issues/38932) (4 comments)
   - *Why it matters*: Critical performance bug affecting user experience with large text inputs (~5000+ characters). App becomes unresponsive and doesn't recover.
   - *Community reaction*: No upvotes yet, but bug severity is high given the impact on productivity.

5. **#39207** - [GitHub OAuth login fails with "Failed query: update `user`" — email param comes back empty](anomalyco/opencode/issues/39207) (4 comments, 1 👍)
   - *Why it matters*: Breaks GitHub authentication flow for many users, preventing account creation via GitHub.
   - *Community reaction*: Low engagement but critical bug blocking authentication for GitHub users.

6. **#37096** - [Web UI Session List Empty — Project Auto-Registration Fails on Windows/WSL](anomalyco/opencode/issues/37096) (3 comments, 5 👍)
   - *Why it matters*: Cross-platform project synchronization issue affecting Windows/WSL users, preventing session persistence.
   - *Community reaction*: Higher positive engagement (5 👍) suggests this affects a specific but important user segment.

7. **#40349** - [TUI fails to start due to infinite recursion when scanning skills directories with cyclic symlinks](anomalyco/opencode/issues/40349) (1 comment)
   - *Why it matters*: Makes OpenCode unusable on Windows for users with symlinked skill directories, showing poor error handling.
   - *Community reaction*: Critical bug blocking core functionality for some users.

8. **#40348** - [Global ~/.config/opencode/AGENTS.md rules are repeatedly forgotten](anomalyco/opencode/issues/40348) (1 comment)
   - *Why it matters*: Global configuration rules not persisting across sessions, forcing users to repeatedly re-apply constraints.
   - *Why it matters*: This persistence issue disrupts workflow consistency, requiring users to manually re-enter rules they previously defined.

9. **#35122** - [Desktop update does not update CLI, causing version mismatch](anomalyco/opencode/issues/35122) (2 comments)
   - *Why it matters*: Creates version gaps between desktop app and CLI/Web UI, causing session sync issues and confusion.
   - *Community reaction*: Consistent pain point reported by multiple users.

10. **#40341** - [Allow arbitrary files to be attached as tool-accessible context](anomalyco/opencode/issues/40341) (2 comments)
    - *Why it matters*: Limits file handling for tools like PDFs and Office documents, requiring workarounds for common file types.
    - *Community reaction*: Growing demand for better file attachment capabilities.

## Key PR Progress

1. **PR #40268** - [fix(session): retry top-level stream request timeouts](anomalyco/opencode/pulls/40268)
   - *What's happening*: Critical fix for handling incomplete SSE error events from OpenAI Responses-compatible providers that return HTTP 200 followed by error streams.
   - *Impact*: Resolves streaming reliability issues affecting users with certain provider configurations.

2. **PR #40198** - [fix(opencode): match canonically equivalent Unicode in patches](anomalyco/opencode/pulls/40198)
   - *What's happening*: Adds final Unicode-equivalence matching pass to `seekSequence()`, fixing patch verification failures due to character normalization issues.
   - *Impact*: Improves reliability of text processing and patching operations across different Unicode representations.

3. **PR #40188** - [feat(plugin): add request-scoped chat.model hook](anomalyco/opencode/pulls/40188)
   - *What's happening*: New plugin hook that fires before provider/model/auth resolution, allowing plugins to replace models for single requests.
   - *Impact*: Enables advanced plugin customization and dynamic model selection at request level.

4. **PR #35237** - [feat(console): enforce 10mb request body limit on zen api](anomalyco/opencode/pulls/35237)
   - *What's happening*: Caps zen API request bodies at 10MB to prevent resource exhaustion from arbitrarily large context payloads.
   - *Impact*: Improves API stability and prevents denial-of-service scenarios.

5. **PR #35212** - [feat(llm): provider packages own model request construction](anomalyco/opencode/pulls/35212)
   - *What's happening*: Makes `SessionRunnerModel` provider-agnostic by implementing uniform contract in provider packages.
   - *Impact*: Simplifies LLM integration and reduces provider-specific code complexity.

6. **PR #35233** - [feat(core): run subagent commands in background](anomalyco/opencode/pulls/35233)
   - *What's happening*: Adds subagent to V2 command config and runs them as child sessions with immediate backgrounding.
   - *Impact*: Improves agent coordination and enables more complex multi-agent workflows.

7. **PR #35223** - [fix(app): handle desktop deep links in new layout](anomalyco/opencode/pulls/35223)
   - *What's happening*: Fixes desktop `opencode://` links reaching Electron in the redesigned app layout.
   - *Impact*: Restores functionality for deep linking from desktop applications.

## Feature Request Trends

**Top Requested Features:**
1. **Session Management**: Native session goals (`/goal`), persistent memory, and better task management
2. **UI/UX**: Vertical tabs, millisecond-precision timestamps, improved RTL/bidi support
3. **Integration**: MCP server setup/testing, credential helpers, enhanced file attachments
4. **Developer Tools**: Skill/MCP GUI for desktop, browser preview for sessions, autonomous agents

**Community Focus Areas:**
- Users want more control over session organization and persistence
- Cross-platform consistency (especially Windows/WSL) is a recurring theme
- File handling and credential management need significant improvement
- Desktop app performance and stability remain major concerns

## Developer Pain Points

**High-Frequency Issues:**
1. **Desktop App Performance**: Hangs on large text pasting, random scrolling during chat, TUI crashes
2. **Version Management**: Desktop/CLI version mismatches causing sync issues
3. **Error Handling**: Poor error surface for connection failures, infinite retries without feedback
4. **Configuration Persistence**: Global rules not persisting across sessions

**Critical Blocking Issues:**
- GitHub OAuth authentication failures affecting user onboarding
- Project sync issues preventing session continuity on Windows/WSL
- Streaming reliability problems with certain providers
- File type limitations for tool attachments

**Community Sentiment:** Users are frustrated with desktop app stability and cross-platform consistency, while also eager for new session management features that would significantly improve productivity. The most engaged users are requesting features that would enhance workflow persistence and organization.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-04

## Today's Highlights
The Pi ecosystem continues rapid iteration on core reliability: WSL path handling, compaction stability, and multi-provider authentication dominate active discussions. A major internal refactor (Harness v2) is underway to modernize session storage and enable server-backed workflows, while several high-impact bugs affecting Windows/WSL users and enterprise Copilot workflows received fixes in the last 24 hours.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#6187] Pi login hangs in WSL after GitHub Copilot device authorization** | Blocks WSL users from completing Copilot auth flow; terminal never detects browser completion. | 20 comments — active debugging, multiple workarounds proposed |
| **[#6768] Compaction using Copilot Enterprise not possible** | Enterprise users hit `421 Misdirected Request` (OpenAI) and Anthropic errors during context compaction. | 17 comments, **18 👍** — high visibility for enterprise adoption |
| **[#7064] WSL absolute Windows paths mishandled** | Agent tools (`read`/`write`/`edit`) fail on cross-OS paths, falling back to slow CLI replacements. | 11 comments — core Windows/WSL usability blocker |
| **[#7161] anthropic-messages never sends `x-client-request-id`** | Breaks session affinity in proxies/gateways that rely on this header for multi-account routing. | 9 comments — affects proxy/users with custom routing |
| **[#7020] Pi doesn't continue after compaction** | Long-running coordinator sessions stall post-compaction; requires manual intervention. | 9 comments, 2 👍 — impacts power users with extended sessions |
| **[#7547] How do you use Pi on Windows?** | Meta-issue gathering Windows usage patterns to prioritize docs, bug fixes, and out-of-box experience. | 6 comments, **created today** — signals strategic Windows focus |
| **[#7299] Expose `shouldStopAfterTurn` via `AgentOptions`** | Low-level hook exists but isn't exposed to SDK consumers; needed for custom control flows. | 6 comments — API completeness request |
| **[#7130] Backspace deletes 2 chars in Kitty** | Kitty protocol release events not filtered, causing double-delete in terminal input. | 5 comments — niche but sharp UX papercut |
| **[#7399] `truncateToWidth()` leaves dangling OSC 8 hyperlinks** | Truncation inside hyperlink sequences corrupts terminal output; no extensions needed to reproduce. | 5 comments — renders broken links in any truncated output |
| **[#7047] Gemini 3.x tool-call IDs stripped from function calls/responses** | Breaks multi-turn tool conversations with Gemini 3.x; IDs required for history replay. | 5 comments, 1 👍 — provider-specific regression |

---

## Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **[#7503] feat(agent): implement harness v2 for in-memory storage** | 🟡 *inprogress* | Foundation for backend-neutral session storage (`SessionStorage`, `SessionRepo`, `InMemorySessionStorage`); enables server-backed sessions. |
| **[#7451] fix(coding-agent): bound model catalog refreshes** | ✅ *closed* | Fixes **#7027, #7113, #7153, #7418, #7443** — resolves cascading catalog refresh issues with proper cancellation/queuing. |
| **[#7339] DRAFT: add openai background mode responses** | 🟡 *open* | Implements OpenAI Responses API `background: true` mode; design feedback requested. |
| **[#7571] feat(ai): add built-in Cortecs provider support** | ✅ *closed* | Adds European AI router Cortecs (models.dev-backed) as a first-class provider. |
| **[#7569] fix(coding-agent): normalize find root results** | ✅ *closed* | Replaces manual path slicing with `path.relative()`; fixes Windows root-path corruption (`C:\` → `I/...`). |
| **[#7568] Add support for generic sampling parameters in `models.json`** | ✅ *closed* | Allows arbitrary inference params (`dry_multiplier`, `xtc_probability`, etc.) for llama.cpp/vLLM without per-engine code. |
| **[#7570] fix(coding-agent): reinstall dependencies if `git clean` fails** | ✅ *closed* | Handles Windows file-locking during extension updates; prevents broken state on failed clean. |
| **[#7548] fix(coding-agent): sandbox issue analysis tools** | 🟡 *open* | Preserves `/is <issue-url>` flow with immutable local snapshots; avoids model-facing fetches during analysis. |
| **[#7558] refactor: update sqlite for lanes** | 🟡 *open* | Schema work supporting Harness v2 lanes (branching session histories). |
| **[#7396] feat(coding-agent): add server session backend** | 🟡 *open* | Durable `@earendil-works/pi-coding-agent/server` with JSONL persistence, cross-process locking, crash recovery. |

---

## Feature Request Trends
1. **Windows/WSL First-Class Support** — Path normalization, auth flow, terminal quirks, and install UX dominate new issues (#7547, #7064, #6187, #6104, #6817).
2. **Compaction Reliability & Configurability** — Enterprise Copilot compaction failures (#6768), auto/manual race conditions (#7253, #7020), and per-compaction thinking budgets (#7553).
3. **Provider Extensibility** — Generic sampling params (#7568), opaque API keys for custom Codex gateways (#7546), server-side Anthropic fallbacks (#7562), new provider integrations (Cortecs #7571).
4. **Session/Storage Architecture** — Harness v2 in-memory + server backends (#7503, #7396), symlink-aware discovery (#7497, #7552), lane-based branching (#7558).
5. **Streaming/Output Protocol Hygiene** — Delta-only JSON streaming (#7394, #7561), OSC 8 hyperlink safety (#7399), TUI resize/crash hardening (#911, #7528).

---

## Developer Pain Points
- **WSL ↔ Windows Path Impedance** — Absolute Windows paths (`C:\`, `/mnt/c/...`) break `find`, `read`, `write`, `edit`; fallback to slow `cmd.exe`/`powershell` degrades agent speed.
- **Auth Flow Fragility** — Device-code flow hangs in WSL (#6187); provider prefix dropped for OpenAI-compatible gateways (#7030, #7546); Copilot Enterprise compaction blocked (#6768).
- **Compaction Instability** — Double-compaction races (#7253), post-compaction stalls (#7020), no per-compaction model/thinking config (#7553).
- **Terminal Rendering Edge Cases** — OSC 8 hyperlink truncation (#7399), Kitty backspace double-delete (#7130), TUI width crashes (#911, #7528), batched color-scheme reports (#7538).
- **SDK/Extension Dependency Hell** — `@earendil-works/pi-ai` exact-pins 11 runtime deps causing duplicate copies in consumer projects (#7564); `git clean` failures on Windows leave extensions broken (#7570).

---

*Data sourced from `github.com/badlogic/pi-mono` — Issues/PRs updated 2026-08-03 → 2026-08-04.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - August 4, 2026

## Today's Highlights
The latest release v0.21.4 brings Web Shell as a production-ready desktop application with native lifecycle management, single-instance behavior, and automatic updates. The system has improved history pagination to handle oversized turns gracefully, enhancing user experience during complex interactions.

## Releases
**v0.21.4** is now available with Web Shell desktop improvements and enhanced history handling for large conversations.

## Hot Issues

1. **#8102 - Trustworthy Agent Runtime** (13 comments)
   - Proposes making language models run outside trust boundaries with deterministic runtime constraints for verification, observation, and evaluation of model actions
   - High priority feature request aimed at building enterprise-grade agent reliability

2. **#8316 - Prompt Restoration on Cancel** (7 comments)
   - Common user frustration where prompts disappear when cancelled with Ctrl+C
   - Prevents users from easily correcting prompts without retyping entire content

3. **#8382 - Duplicate Provider Tool Call ID** (6 comments)
   - Critical core bug causing tool call failures with duplicate IDs and "not recorded" errors
   - Affects tool execution reliability and session consistency

4. **#8470 - Model Name Display Issues** (5 comments)
   - Model prefixes in Token Plan become too long for mobile display
   - UI clutter prevents users from accurately identifying selected models

5. **#7306 - Tool-Output Budgeting Hardening** (5 comments)
   - Focus on improving observability and artifact lifecycle management
   - Addresses correctness and contract hardening for output handling

6. **#8123 - Desktop Client File Search Bug** (CLOSED, 5 comments)
   - Issue where desktop client couldn't find files referenced with @ symbol
   - Pattern matching problem in project file search functionality

7. **#8326 - Fork Agent Context Pollution** (4 comments, 1 reaction)
   - Multiple fork agents inherit sibling tool calls via parent conversation history
   - Security concern exposing unintended context sharing between parallel agents

8. **#8432 - Bailian Token Plan Sync Issues** (4 comments)
   - Model list discrepancy between display and actual available models
   - Breaks user trust when displayed options don't match reality

9. **#8317 - Copy Shortcut Broken** (4 comments)
   - Ctrl+Shift+C no longer copies text in terminal
   - Standard terminal behavior regression affecting user productivity

10. **#8456 - Review Workflow Performance** (3 comments)
    - Long-running test suite (13-16 minutes) dominates review pipeline
    - Performance bottleneck in production deployment cycles

## Key PR Progress

1. **#8499 - Review Skill Narrative Migration**
   - Moves incident narratives from SKILL.md to DESIGN.md to prevent runtime re-billing
   - Improves maintainability of review documentation architecture

2. **#8488 - Qwen 3.8 Reasoning Effort Hardening**
   - Fixes competing thinking knobs in DashScope wire shape
   - Addresses review findings after initial reasoning effort implementation

3. **#8260 - Reasoning Signature Preservation**
   - Fixes turn-consolidation step losing distinct reasoning episode signatures
   - Preserves parallel tool call reasoning context during history consolidation

4. **#8125 - External Tool Guard Provider**
   - Adds opt-in pre-execution policy provider for `qwen serve` deployments
   - Enhances security with authenticated, versioned handshake with external tools

5. **#8496 - Web Shell Read-Only Commands**
   - Makes `/stats`, `/about`, and `/context` run immediately during turns
   - Eliminates silent swallowing and improves interactive responsiveness

6. **#8274 - Fork from Any Conversation**
   - Enables branching from earlier assistant responses, not just latest state
   - Improves session targeting reliability by avoiding unsafe visible message branching

7. **#7925 - Stale Worktree Cleanup**
   - Sweeps stale project snapshots on startup
   - Fixes resource leaks from unregistered worktree project states

8. **#7567 - `/advisor` Command**
   - Adds manual review capability for independent second opinions
   - Provides read-only forked side query sharing main conversation context

9. **#8399 - OpenAI Abort Error Recognition**
   - Fixes `isAbortError` to recognize OpenAI SDK's `APIUserAbortError`
   - Ensures proper cancellation handling in OpenAI-compatible providers

10. **#8401 - Repository Context Manifest**
    - Adds declarative repository-context manifest for review pipeline
    - Makes review system repository-aware without teaching it about specific repos

## Feature Request Trends

**Security & Trustworthiness:** Multiple requests for deterministic tool execution boundaries, external tool validation, and improved abort handling - indicating demand for enterprise-grade reliability features.

**Mobile & UX Improvements:** Focus on UI/UX issues including model display optimization, copy/paste functionality, and thinking presentation stability.

**Session Management:** Enhancement requests for branching from specific conversation points, session recovery after failures, and better context isolation between parallel agents.

**Integration & Automation:** Persistent requests for email channel support, external tool guard providers, and improved MCP server integration for better workflow automation.

**Performance & Observability:** Continuous focus on tool-output budgeting, artifact lifecycle management, and review pipeline optimization to reduce bottlenecks.

## Developer Pain Points

1. **Error Handling & Cancellation:** Multiple reports of cancellation issues (prompts disappearing, copy shortcuts broken, abort error recognition failures) - indicating inconsistent cancellation behavior across different components.

2. **Model Provider Sync:** Discrepancies between displayed and available models (Bailian Token Plan) erode user trust and require manual verification.

3. **Session Reliability:** Context pollution between fork agents, session transcript corruption after user aborts, and workspace directory mismatches cause silent data loss.

4. **Performance Bottlenecks:** Review pipeline dominated by full test suite execution (13-16 minutes) impacts developer productivity and iteration speed.

5. **Tool Integration Issues:** Duplicate MCP tool call IDs, stale session registrations after configuration changes, and deferred tool discovery problems affect tool reliability.

6. **UI/UX Consistency:** Mobile display overflow, moving thinking panels, and broken terminal shortcuts create inconsistent user experiences across platforms.

The community shows strong interest in enterprise-grade reliability, improved error handling, and performance optimization while maintaining focus on core agent functionality and developer experience.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-04

**Repository:** `github.com/Hmbown/DeepSeek-TUI` (mirrors to `Hmbown/CodeWhale`)

---

## 1. Today's Highlights

The **v0.9.4 release train** (PR [#5135](https://github.com/Hmbown/DeepSeek-TUI/pull/5135)) is the dominant activity, sitting 77 commits ahead of `main` with 18 train commits plus a full integration stack. A major **rail unification refactor** (PR [#5228](https://github.com/Hmbown/DeepSeek-TUI/pull/5228)) rebased a 12-commit stack onto the train, consolidating TUI panel architecture. The **ACP protocol** gained real tool-execution capability (PR [#5225](https://github.com/Hmbown/DeepSeek-TUI/pull/5225)), and a **critical ratatui pin** (PR [#5192](https://github.com/Hmbown/DeepSeek-TUI/pull/5192)) fixed a cursor-position race condition blocking TUI startup.

---

## 2. Releases

**No new releases in the last 24h.** The v0.9.4 release train (PR [#5135](https://github.com/Hmbown/DeepSeek-TUI/pull/5135)) is the active integration branch, superseding the prior #5044 head. Key areas being bundled include Fleet loadout auto, runtime API expansion, MCP lifecycle management, and the rail unification refactor. No `FINISH-0.9.4.md` gate has been crossed yet.

---

## 3. Hot Issues

| # | Title | Comments | Why It Matters |
|---|-------|----------|----------------|
| [#3192](https://github.com/Hmbown/DeepSeek-TUI/issues/3192) | Put it up for agentclientprotocol/registry | 13 | Being listed in the ACP registry is the single biggest discoverability lever for Zed and third-party editors driving CodeWhale over ACP. |
| [#3205](https://github.com/Hmbown/DeepSeek-TUI/issues/3205) | v0.9.3: Fleet model classes, loadout auto, and semantic route roles | 11 | Core architecture issue defining how Fleet resolves compute loadouts end-to-end — the shared model/loadout selector underpins TUI, CLI, exec, subagents, and Fleet workers. |
| [#1481](https://github.com/Hmbown/DeepSeek-TUI/issues/1481) | Support OpenCode Go/Zen (DeepSeek-V4 provider) | 10 | Expands the provider surface with a cheap DeepSeek-V4 route via OpenCode Go/Zen; community wants broader model choice without vendor lock-in. |
| [#4959](https://github.com/Hmbown/DeepSeek-TUI/issues/4959) | Proposed 'stop' command | 7 | Runtime control gap: when a model is in YOLO or deep autonomous workflow, `stop` text commands are silently ignored. A first-class `/stop` intercept is long overdue. |
| [#4949](https://github.com/Hmbown/DeepSeek-TUI/issues/4949) | Chinese translation of "Constitution" — 宪法 vs 协作准则 | 7 | Localization debate with cultural sensitivity; the community is actively seeking consensus among Chinese-native contributors on the correct term. |
| [#4022](https://github.com/Hmbown/DeepSeek-TUI/issues/4022) | Define CLI/TUI parity for subagent and runtime control surfaces | 7 | The TUI sidebar became the primary subagent control surface, but the same controls must not be trapped inside the TUI if a cloud or remote workbench emerges. |
| [#2492](https://github.com/Hmbown/DeepSeek-TUI/issues/2492) | 不具备跨会话记忆 (No cross-session memory) | 5 | Long-standing bug: sessions reset on restart with no memory persistence or auto-read. High impact on user trust and continuity. |
| [#1917](https://github.com/Hmbown/DeepSeek-TUI/issues/1917) | Universal PreToolUse/PostToolUse hook layer for Cancel/Pause/Resume | 5 | Architectural proposal to unify cancellation, pause, and resume across all action types via a hook-based lifecycle layer — foundational for reliable autonomy. |
| [#2984](https://github.com/Hmbown/DeepSeek-TUI/issues/2984) | v0.9.3: OpenAI Codex/ChatGPT OAuth route verification | 5 | Determines whether the OpenAI OAuth route graduates from preview to supported status — a key provider reliability signal. |
| [#4785](https://github.com/Hmbown/DeepSeek-TUI/issues/4785) | Dead-code sweep: 464 #[allow(dead_code)] hiding drift | 4 | 464 dead-code suppressions across 143 files structurally blind the compiler to real drift. A cleanup epic that improves code health and maintainability. |

---

## 4. Key PR Progress

| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#5135](https://github.com/Hmbown/DeepSeek-TUI/pull/5135) | release: Codewhale v0.9.4 release train | OPEN | The v0.9.4 integration train — 77 commits ahead of main, 18 train commits on top of the prior source candidate. Supersedes #5044. |
| [#5228](https://github.com/Hmbown/DeepSeek-TUI/pull/5228) | refactor(tui): rail unification stack | OPEN | Rebased 12-commit rail-unification stack onto the train; consolidates TUI panel architecture and reduces UI/backend coupling. |
| [#5225](https://github.com/Hmbown/DeepSeek-TUI/pull/5225) | feat(acp): expose file/search/git/patch/shell tools over session/prompt | OPEN | ACP `session/prompt` now executes tool calls instead of just streaming model text — critical for Zed and third-party ACP integrations to get real code-editing capability. |
| [#5133](https://github.com/Hmbown/DeepSeek-TUI/pull/5133) | feat(runtime-api): expose persistent goal-loop state and completion controls | OPEN | New `GET /v1/threads/{id}/goal` endpoint lets managed clients read active-goal state and drive lifecycle transitions through the runtime boundary. |
| [#5132](https://github.com/Hmbown/DeepSeek-TUI/pull/5132) | Runtime API: expose verifier receipts and evidence beyond the aggregate counter | OPEN | Three new read-only fleet endpoints (`GET receipts`, `GET evidence`, `GET task-status`) so managed clients can identify which task failed and why. |
| [#5130](https://github.com/Hmbown/DeepSeek-TUI/pull/5130) | feat(runtime-api): bounded MCP server configuration and lifecycle management | OPEN | Full MCP server CRUD over HTTP — `POST /v1/apps/mcp/servers`, plus update/uninstall/trust/audit routes behind `require_runtime_token`. |
| [#5131](https://github.com/Hmbown/DeepSeek-TUI/pull/5131) | feat: Runtime API memory endpoints — bounded inspection and lifecycle controls | OPEN | New `/v1/memory` routes for inspecting active memory scope/provenance and applying lifecycle controls without a second memory store. |
| [#5129](https://github.com/Hmbown/DeepSeek-TUI/pull/5129) | feat(runtime-api): add skill lifecycle endpoints — install, update, uninstall, trust, audit | OPEN | Extends skill management beyond discovery/enable-disable to full HTTP-driven lifecycle, matching what the TUI already offers. |
| [#5192](https://github.com/Hmbown/DeepSeek-TUI/pull/5192) | fix(tui): pin ratatui to 0.30.0 | OPEN | Pins `ratatui = 0.30.0` and `ratatui-core = 0.1.0` to fix a blocking CPR query race condition in crossterm's event-reader lock that crashes TUI startup. |
| [#5233](https://github.com/Hmbown/DeepSeek-TUI/pull/5233) | fix(modelstudio): surface reasoning on official chat routes | OPEN | Classifies `reasoning_content` as a dedicated Thinking stream on verified Alibaba Model Studio OpenAI-compatible routes; surfaces `enable_thinking`, `preserve_thinking`, and DeepSeek-V4/GLM `reasoning_effort` controls. |

---

## 5. Feature Request Trends

Based on the full issue set, the most-requested feature directions are:

- **ACP / Protocol Integration** — ACP registry listing (#3192), ACP tool execution (#5225), and ACP adapter community support. The community wants CodeWhale to be a first-class ACP participant in editors like Zed.
- **Provider & Model Expansion** — OpenCode Go/Zen (#1481), Minimax China/Token Plan routes (#4686), Model Studio reasoning surfacing (#5233), and OAuth2.1 for MCP (#1409). Users want broader, cheaper model access.
- **Runtime API Maturity** — Goal-loop state (#5133), verifier receipts (#5132), MCP lifecycle (#5130), memory endpoints (#5131), and skill lifecycle (#5129). The pattern is clear: every TUI feature needs a corresponding HTTP API endpoint for managed clients.
- **TUI/CLI Parity & Control Surfaces** — CLI/TUI parity for subagents (#4022), rail unification (#5228), hotbar command surface (#3389), and documented config keys editable from TUI (#3303). The boundary between TUI and CLI must not leak.
- **Cross-Platform & Localization** — Windows Terminal default launch (#1854), winget package (#1561), OpenHarmony linker fix (#5095), Chinese input method support (#2323), zh-Hant locale parity (#5227), and Windows beginner guide in zh-CN (#5229). Internationalization is a top community priority.
- **Autonomy & Workflow Control** — Stop command (#4959), permission profiles (#3211), hook-based lifecycle layer (#1917), and read-before-edit guardrails (#3364). Users want safer, more controllable autonomous agents.

---

## 6. Developer Pain Points

- **Dead-code accumulation** — 464 `#[allow(dead_code)]` attributes across 143 files (#4785) make the compiler structurally unable to report drift. This is a systemic maintainability burden.
- **Chinese input method breakage** — IME input causes garbled characters in agent output (#1675),拼音 leaks into model input or slash command areas (#2323), and the prompt hint doesn't hide during IME composition (#2323).
- **Windows UX degradation** — Double-clicking the `.exe` opens raw `cmd.exe` instead of Windows Terminal, causing worse fonts, colors, and rendering (#1854). No `winget` package exists (#1561).
- **Cross-session memory loss** — Sessions reset on restart with no persistence or auto-read (#2492), undermining trust in long-running agent workflows.
- **Config discoverability gap** — Documented config knobs are loadable from `config.toml` but cannot be reliably discovered, edited, validated, or persisted from the TUI (#3303).
- **Sandbox incompatibilities** — `swift test` fails inside CodeWhale's sandbox with `sandbox-exec: Operation not permitted` when SPM needs to compile the manifest (#2617).
- **Edit reliability for small models** — Edit mistakes are the fastest path to an unreliable coding agent; narrow edits need read-before-edit enforcement and loud, specific failure messages (#3364).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*