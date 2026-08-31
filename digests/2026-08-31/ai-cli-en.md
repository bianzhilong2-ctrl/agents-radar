# AI CLI Tools Community Digest 2026-08-31

> Generated: 2026-08-31 02:24 UTC | Tools covered: 9

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

Here's a thinking process:

1.  **Understand User Request**: The user wants a cross-tool comparison report in English based on 2026-08-31 community digest summaries for 10+ AI CLI tools. The report needs specific sections: Ecosystem Overview, Activity Comparison (table), Shared Feature Directions, Differentiation Analysis, Community Momentum & Maturity, Trend Signals. Style: concise, professional, data-backed, for technical decision-makers and developers.

2.  **Identify the Tools & Data Sources**: I have digests for:
   - Claude Code (Anthropic)
   - OpenAI Codex
   - Gemini CLI (Google)
   - GitHub Copilot CLI
   - Kimi Code CLI (MoonshotAI)
   - OpenCode (anomalyco)
   - Pi (badlogic/pi-mono)
   - Qwen Code (QwenLM)
   - DeepSeek TUI (failed summary, but I can note it or skip; actually the digest says "Summary generation failed" - I should probably either exclude or mention it's unavailable)
   - Wait, let me count: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code. That's 8 tools. DeepSeek TUI had failed summary. I'll work with the 8 that have full data, maybe mention DeepSeek TUI briefly or exclude it. The prompt says "2026-08-31 community digest summaries for each major AI CLI tool" and lists them. I'll use all that have data. DeepSeek TUI summary failed, so I'll note it's unavailable or skip. I'll focus on the 8 with complete data.

   Let me extract key metrics from each digest:

   **Claude Code**:
   - Issues: Many hot issues listed (10 top ones), plus many open/closed. Count: The "Hot Issues" section lists 10 issues with comments and upvotes. Also many other issues referenced. But for "Issues count", I need a number. The digest says "Activity was dominated by long-standing bugs and feature requests". It lists 10 hot issues. I could count total issues mentioned or just use the "Hot Issues" count of 10. But maybe better to look at "Comments" totals or just use the number of issues highlighted. I'll use the "Hot Issues" count as 10, and note total comments/engagement.
   - PRs: Only 1 PR closed in last 24h: #35350. So PR count = 1.
   - Release: "No new releases were published in the past 24 hours."

   **OpenAI Codex**:
   - Issues: Top 10 by community signal listed. So 10 hot issues. Also mentions "10 PRs merged today".
   - PRs: 10 merged today.
   - Release: "No stable CLI release in the last 24h." Three alpha releases.

   **Gemini CLI**:
   - Issues: 8 hot issues listed (numbered 1-8). Also mentions "community is actively working on fixes". I'll count 8.
   - PRs: 9 listed (some open, some closed). The "Key PR Progress" section lists 9 items (1 open, 8 closed? Let's count: #28971 open, #28848 open, #26525 open, #29138 open, #28982 open, #28983 open, #28973 open, #28972 open, #28832 open. Actually all 9 are listed with status. I'll count 9 PRs.)
   - Release: "Latest nightly build v0.59.0-nightly.20260831.g0bd1d4397 released Aug 31, 2026."

   **GitHub Copilot CLI**:
   - Issues: 10 hot issues listed (numbered 1-10).
   - PRs: Only 1 PR highlighted: #2381 (fish shell support). "Only one PR was updated within the past 24h relevant enough to highlight." So PR count = 1.
   - Release: "No new releases in the last 24 hours."

   **Kimi Code CLI**:
   - Issues: Only 2 issues updated in last 24h. Table shows 2 issues.
   - PRs: "No pull requests were merged or updated." So PR count = 0.
   - Release: "No new releases in the past 24 hours." Current stable 0.39.1.

   **OpenCode**:
   - Issues: 10 hot issues listed (numbered 1-10, some closed some open). The "Hot Issues" section lists 10 items.
   - PRs: "No new releases were published in the last 24 hours." But PR progress? It says "Key milestones include major fixes...". The "Hot Issues" list has 10 items. For PRs, I need to count. The digest doesn't explicitly say "PRs merged today". It mentions "development cycle has been heavily focused on stabilizing...". I'll check: Under "2. Releases: No new releases were published in the last 24 hours." No PR count given explicitly. I might need to infer or note "not specified". But looking at the structure, maybe I can count the issues as 10, and PRs as "several ongoing" but not a clear number. I'll note PR count as "not explicitly quantified in digest" or similar. Actually, the prompt says "Activity Comparison - Table comparing Issues count, PR count, Release status for each tool today". I need a number for PR count. Let me re-read OpenCode digest: It has "3. Hot Issues" with 10 items. "4. Key PR Progress" - wait, the digest structure I see: 
   "### 1. Today's Highlights"
   "### 2. Releases"
   "### 3. Hot Issues"
   "### 4. Key PR Progress" - but in the text I have: after "### 3. Hot Issues" it goes to "Here are 10 of the most impactful..." and then "---  ## 4. Key PR Progress  *No new releases were published in the last 24 hours.*" Wait, the formatting is messy. Let me read carefully from the prompt:

   "### 3. Hot Issues
   Here are 10 of the most impactful and discussion-driving issues from the past day:
   
   *   **[#5474 [CLOSED] `/undo` command only rolls back AI conversation message, not the associated file changes**..."
   Then: "---  ## 4. Key PR Progress
   *No new releases were published in the last 24 hours.*"
   Actually, the prompt shows: after the 10 issues, it says "---  ## 4. Key PR Progress  *No new releases were published in the last 24 hours.*" But there's no PR list. It just says "No new releases were published in the last 24 hours." This is confusing. Maybe the "Key PR Progress" section is empty or not applicable. I'll note PR count as 0 or not specified. To be safe, I'll put "0 (no PRs highlighted)" or similar.

   Wait, let me look at the very end of OpenCode digest: "---  ## Pi (github.com/badlogic/pi-mono)" - so OpenCode ends before Pi. The structure for OpenCode is: 1. Highlights, 2. Releases (none), 3. Hot Issues (10), 4. Key PR Progress (*No new releases were published in the last 24 hours.*). That seems like the PR progress section just says no releases, but doesn't list PRs. I'll assume PR count = 0 for OpenCode, or maybe I can count the issues as implying PR activity, but I'll stick to what's explicit: no releases, and no PRs mentioned. I'll set PR count as 0.

   Actually, re-reading: "### 4. Key PR Progress  *No new releases were published in the last 24 hours.*" This might be a formatting remnant. I'll treat PR count as not applicable/0.

   **Pi (badlogic/pi-mono)**:
   - Issues: 10 hot issues listed in table.
   - PRs: "Key PR Progress (10 important PRs)" listed. So 10 PRs.
   - Release: "No new version releases in the last 24 h."

   **Qwen Code**:
   - Issues: 10 hot issues listed in table (numbered #8124, #8724, etc., up to #10409, but only 10 shown? Actually the table has 10 rows: #8124, #8724, #8784, #4441, #7167, #4000, #10547, #10538, #10409, #9434. Yes, 10.)
   - PRs: "Key PR Progress (selected by relevance & activity)" lists 10 PRs (from #10146 to #10571). So 10 PRs.
   - Release: "None reported in the last 24 h."

   **DeepSeek TUI**: Summary failed, I'll exclude or note "data unavailable".

   Now I have counts:
   - Claude Code: Issues highlighted: 10 (hot issues). PRs: 1. Release: none.
   - OpenAI Codex: Issues: 10 hot issues. PRs: 10 merged. Release: 3 alphas, no stable.
   - Gemini CLI: Issues: 8 hot issues. PRs: 9 (listed). Release: 1 nightly.
   - GitHub Copilot CLI: Issues: 10 hot issues. PRs: 1 highlighted. Release: none.
   - Kimi Code CLI: Issues: 2 hot issues. PRs: 0. Release: none.
   - OpenCode: Issues: 10 hot issues. PRs: 0 (or not specified). Release: none.
   - Pi: Issues: 10 hot issues. PRs: 10. Release: none.
   - Qwen Code: Issues: 10 hot issues. PRs: 10. Release: none.

   Wait, for OpenCode, the digest doesn't clearly state PR count. I'll check again: The prompt shows for OpenCode: "### 4. Key PR Progress *No new releases were published in the last 24 hours.*" It might mean no PRs were merged/updated, or just that the section header says that. Given the ambiguity, I'll set PR count as 0 for OpenCode, or maybe "not specified". I'll put 0 and note "no PRs highlighted".

   Actually, looking at the structure, maybe OpenCode had PRs but the digest truncated. I'll rely on the text: it only mentions "No new releases were published in the last 24 hours." under Key PR Progress. I'll assume 0 PRs for consistency if not stated.

   Let me re-verify each PR count:
   - Claude Code: "Only one PR updated recently: #35350 (Closed)" -> 1
   - OpenAI Codex: "10 PRs merged today" -> 10
   - Gemini CLI: "Key PR Progress" lists 9 items (numbered 1-9). Actually the list has 9 entries: #28971, #28848, #26525, #29138, #28982, #28983, #28973, #28972, #28832. Yes, 9 PRs.
   - GitHub Copilot CLI: "Only one PR was updated within the past 24h relevant enough to highlight: #2381" -> 1
   - Kimi Code CLI: "No pull requests were merged or updated." -> 0
   - OpenCode: The section says "*No new releases were published in the last 24 hours.*" but no PR count. I'll put 0, as no PRs are listed or mentioned as merged.
   - Pi: "Key PR Progress (10 important PRs)" explicitly 10.
   - Qwen Code: "Key PR Progress (selected by relevance & activity)" lists 10 PRs (numbered #10146 to #10571). Yes, 10.

   Issues counts: I'll use the "Hot Issues" count from each digest, as that's the "Issues count" likely meant.
   - Claude Code: 10 hot issues listed.
   - OpenAI Codex: "Top 10 by Community Signal" -> 10
   - Gemini CLI: 8 hot issues listed (numbered 1-8).
   - GitHub Copilot CLI: 10 hot issues listed (numbered 1-10).
   - Kimi Code CLI: 2 issues updated in last 24h. The table shows 2. I'll use 2.
   - OpenCode: 10 hot issues listed.
   - Pi: 10 hot issues in table.
   - Qwen Code: 10 hot issues in table.

   Release status: I'll summarize briefly per tool.

   Now, I need to generate the report sections:

   1. **Ecosystem Overview**: 3-5 sentences on overall AI CLI tools dev landscape.
   2. **Activity Comparison**: Table with columns: Tool, Issues (count), PRs (count), Release status. I'll fill in the data.
   3. **Shared Feature Directions**: Requirements appearing across multiple tools, note which tools, specific needs.
   4. **Differentiation Analysis**: Differences in feature focus, target users, technical approach.
   5. **Community Momentum & Maturity**: Which tools have more active communities, rapidly iterating.
   6. **Trend Signals**: Industry trends from community feedback, reference value for developers.

   I need to be concise, professional, data-backed. I'll use the extracted metrics.

   Let me structure the table:
   | Tool | Issues Highlighted (24h) | PRs Merged/Updated (24h) | Release Status |
   |------|--------------------------|--------------------------|----------------|
   | Claude Code | 10 | 1 | No new releases |
   | OpenAI Codex | 10 | 10 | 3 alpha releases; no stable |
   | Gemini CLI | 8 | 9 | Nightly v0.59.0 released |
   | GitHub Copilot CLI | 10 | 1 | No new releases |
   | Kimi Code CLI | 2 | 0 | Stable v0.39.1; no updates |
   | OpenCode | 10 | 0 | No new releases |
   | Pi (badlogic/pi-mono) | 10 | 10 | No new releases |
   | Qwen Code | 10 | 10 | No new releases |

   Wait, for OpenCode I said 0 PRs, but let me double-check if there's any PR mention. The digest: after "### 3. Hot Issues" it goes to "---  ## 4. Key PR Progress *No new releases were published in the last 24 hours.*" This is likely a section header that says no releases, but maybe it's misformatted. I'll check the exact text from prompt: 
   "### 3. Hot Issues
   Here are 10 of the most impactful and discussion-driving issues from the past day:
   
   *   **[#5474 [CLOSED] `/undo` command only rolls back AI conversation message, not the associated file changes** ...
   ... (10 items)
   
   ---  ## 4. Key PR Progress
   *No new releases were published in the last 24 hours.*"
   So it seems the "Key PR Progress" section just has that line, maybe indicating no PRs were significant enough, or it's a placeholder. I'll set PRs as 0 for OpenCode.

   For Kimi Code CLI, issues: "Only 2 issues were updated in the last 24 hours." The table shows 2. I'll use 2.

   Now, Shared Feature Directions: I need to find cross-tool themes.
   Looking at the digests:
   - TUI/UX improvements: Claude Code (configurable Enter, TUI reliability), OpenAI Codex (Windows TUI rate-limit banners, Vim mode), Gemini CLI (subagent visibility), GitHub Copilot CLI (terminal UX, scrolling), Qwen Code (TUI migration, inline tool args), Pi (keybinding exposure), OpenCode (workspace sync, LSP timeouts).
   - Agent reliability/stability: Claude Code (subagent completion), OpenAI Codex (Windows stability, remote control), Gemini CLI (agent hangs, subagent recovery), GitHub Copilot CLI (session management, compaction), Pi (session OOM, death spiral), Qwen Code (CI stability, error opacity).
   - Cross-platform/compatibility: Claude Code (portable shebangs, OS-neutral), OpenAI Codex (Windows/WSL), Gemini CLI (Wayland, symlinked workspaces), GitHub Copilot CLI (TLS-proxy OAuth), Kimi Code (iPadOS Safari/WeChat), OpenCode (Windows/WSL path issues), Pi (Windows usage ambiguity), Qwen Code (Windows driver panics).
   - Security/safety: Gemini CLI (destructive behavior control), Pi (negative token costs, JSONL corruption), Qwen Code (security surface concerns), OpenCode (LSP init timeouts, config injection).
   - Observability/tracing: Claude Code (OpenTelemetry), OpenAI Codex (history ingestion metadata), Gemini CLI (OTel support), OpenCode (cost estimation), Pi (token accounting).
   - Subagent/agent orchestration: Claude Code (nested subagents), OpenAI Codex (remote control parity), Gemini CLI (subagent recovery), GitHub Copilot CLI (session duplication), Pi (branch summarisation), Qwen Code (cross-session messaging).

   I'll synthesize shared directions appearing in >=3 tools.

   Differentiation Analysis: 
   - Focus: Anthropic Claude Code seems enterprise/observability-focused (OTel, session

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** anthropics/skills | **As of:** 2026-08-31

---

## 1. Top Skills Ranking
Based on the severity of linked issues, update recency, and functional impact, the following Skills dominate community attention:

1. **skill-creator** 
   * **Functionality:** The core tooling used to scaffold, evaluate, and optimize new Skills (includes `run_eval.py`, `run_loop.py`). 
   * **Discussion Highlights:** Heavily scrutinized due to critical bugs. PRs #1298, #1099, and #1050 address a catastrophic `run_eval.py` flaw where recall artificially reports 0% regardless of content, alongside Windows subprocess compatibility failures. 
   * **Status:** Open (Bug Fixes)
   * **Links:** [PR #1298](https://github.com/anthropics/skills/pull/1298) | [Issue #556](https://github.com/anthropics/skills/issues/556)

2. **claude-api**
   * **Functionality:** Provides reference and context for the Claude API, including model lists and capabilities.
   * **Discussion Highlights:** Issue #1487 revealed the skill eagerly injects ~156k tokens, exhausting context windows in a single call. PR #1607 addresses this by officially retiring four legacy/deprecated model IDs.
   * **Status:** Open (Update)
   * **Links:** [PR #1607](https://github.com/anthropics/skills/pull/1607) | [Issue #1487](https://github.com/anthropics/skills/issues/1487)

3. **mcp-builder**
   * **Functionality:** Guides Claude in building, testing, and deploying Model Context Protocol (MCP) servers.
   * **Discussion Highlights:** Issue #1390 flagged that the evaluation harness (`evaluation.py`) silently fabricates errors for real MCP servers, scoring 0/N. PR #1602 resolves serialization and encoding bugs to fix this.
   * **Status:** Open (Bug Fixes)
   * **Links:** [PR #1602](https://github.com/anthropics/skills/pull/1602) | [Issue #1390](https://github.com/anthropics/skills/issues/1390)

4. **docx**
   * **Functionality:** Handles Microsoft Word document creation, editing, and tracked changes.
   * **Discussion Highlights:** PR #541 fixes a document corruption bug where hardcoded low `w:id` values collide with existing bookmarks in OOXML. Issue #12 also highlights whitespace reformatting breaking docx files in Word/LibreOffice.
   * **Status:** Open (Bug Fixes)
   * **Links:** [PR #541](https://github.com/anthropics/skills/pull/541) | [Issue #12](https://github.com/anthropics/skills/issues/12)

5. **Hivemind**
   * **Functionality:** A novel orchestration skill that delegates mechanical work to headless opencode workers running on free models, while Claude Code acts solely as the planner, reviewer, and merger.
   * **Discussion Highlights:** Represents a strong push toward cost-zero multi-agent workflows. Recent update indicates active maintenance.
   * **Status:** Open (New Skill)
   * **Links:** [PR #1628](https://github.com/anthropics/skills/pull/1628)

6. **ServiceNow**
   * **Functionality:** A broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, SecOps, and IntegrationHub.
   * **Discussion Highlights:** Distinguished from narrow scripting helpers by its comprehensive coverage of the ServiceNow enterprise ecosystem. Frequently updated with ongoing platform expansion.
   * **Status:** Open (New Skill)
   * **Links:** [PR #568](https://github.com/anthropics/skills/pull/568)

7. **self-audit**
   * **Functionality:** Audits AI output prior to delivery via mechanical file verification followed by a four-dimension reasoning quality gate.
   * **Discussion Highlights:** Directly addresses community demand for output reliability. Tied to Issue #1385, which proposes a broader Reasoning Quality Gate Pipeline.
   * **Status:** Open (New Feature)
   * **Links:** [PR #1367](https://github.com/anthropics/skills/pull/1367) | [Issue #1385](https://github.com/anthropics/skills/issues/1385)

8. **pdf**
   * **Functionality:** Manages PDF manipulation and reference resolution.
   * **Discussion Highlights:** PR #538 resolved 8 case-sensitivity mismatches in `SKILL.md` (e.g., `REFERENCE.md` vs `reference.md`) that broke functionality on case-sensitive file systems.
   * **Status:** Open (Bug Fixes)
   * **Links:** [PR #538](https://github.com/anthropics/skills/pull/538)

---

## 2. Community Demand Trends
Analysis of open and closed Issues reveals four primary vectors for future Skill development:

* **Agent Memory & State Optimization:** Issue #1329 proposes `compact-memory`, highlighting a strong demand for skills that compress agent state and manage long-running context efficiently.
* **Enterprise Security & Governance:** Issue #492 (43 comments) raises severe concerns over trust boundaries when community skills occupy the `anthropic/` namespace. Concurrently, Issue #412 proposes `agent-governance` for policy enforcement and audit trails, indicating a demand for security-centric skills.
* **Team Collaboration & Distribution:** Issue #228 (16 comments) highlights the need for org-wide skill sharing, as the current manual `.skill` file transfer process is unsustainable for enterprises.
*

---

# Claude Code Community Digest — 2026-08-31

---

## 1. Today's Highlights

No new releases were published in the past 24 hours. Activity was dominated by long-standing bugs and feature requests, particularly around session management, TUI behavior, and safety filters. Community engagement remains strong, with several issues garnering significant attention.

---

## 2. Releases

No new releases in the past 24 hours.

---

## 3. Hot Issues

1. **[#38335]**  
   - **Title:** Claude Max plan session limits exhausted abnormally fast  
   - **Status:** Open | **Comments:** 838 | **👍:** 476  
   - **Summary:** Users report rapid depletion of session limits despite light CLI usage; likely tied to background processes or inaccurate telemetry.  
   - **Link:** [GitHub Issue](https://github.com/anthropics/claude-code/issues/38335)

2. **[#2054]**  
   - **Title:** Allow Enter key to insert newline instead of sending message  
   - **Status:** Closed | **Comments:** 33 | **👍:** 148  
   - **Summary:** Resolved enhancement enabling configurable Enter behavior for CJK users to avoid accidental message sends.  
   - **Link:** [GitHub Issue](https://github.com/anthropics/claude-code/issues/2054)

3. **[#85603]**  
   - **Title:** Typed input queued mid-turn is silently dropped at turn end (TUI)  
   - **Status:** Open | **Comments:** 24 | **👍:** 1  
   - **Summary:** Interactive TUI sessions lose user input if typed during active turns; affects workflow integrity.  
   - **Link:** [GitHub Issue](https://github.com/anthropics/claude-code/issues/85603)

4. **[#75043]**  
   - **Title:** Nested subagents spawn asynchronously and fail completion tracking  
   - **Status:** Open | **Comments:** 19 | **👍:** 5  
   - **Summary:** Orchestrator subagents cannot track child completions properly, leading to `TaskStop` failures post-resume.  
   - **Link:** [GitHub Issue](https://github.com/anthropics/claude-code/issues/75043)

5. **[#32364]**  
   - **Title:** Add OpenTelemetry support for Claude Code Web  
   - **Status:** Open | **Comments:** 9 | **👍:** 35  
   - **Summary:** Request for built-in OTel tracing/exporters to enable better observability for enterprise users.  
   - **Link:** [GitHub Issue](https://github.com/anthropics/claude-code/issues/32364)

6. **[#90172]**  
   - **Title:** Stealth restart breaks running sessions on Windows desktop app  
   - **Status:** Open | **Comments:** 5 | **👍:** 2  
   - **Summary:** Silent updates terminate live sessions without warning, causing remote control disruptions.  
   - **Link:** [GitHub Issue](https://github.com/anthropics/claude-code/issues/90172)

7. **[#78224]**  
   - **Title:** Pause-and-resume background agents on recoverable errors  
   - **Status:** Open | **Comments:** 4 | **👍:** 2  
   - **Summary:** Propose pausing subagents on transient issues like rate limits rather than failing outright.  
   - **Link:** [GitHub Issue](https://github.com/anthropics/claude-code/issues/78224)

8. **[#90318]**  
   - **Title:** Stop hook in ralph-wiggum plugin has unreachable error handlers  
   - **Status:** Closed | **Comments:** 2 | **👍:** 0  
   - **Summary:** Bug fixed where all stop-hook error branches were unreachable due to early return logic.  
   - **Link:** [GitHub Issue](https://github.com/anthropics/claude-code/issues/90318)

9. **[#89359]**  
   - **Title:** Chrome extension fails to load Claude panel due to CSP violation  
   - **Status:** Open | **Comments:** 2 | **👍:** 0  
   - **Summary:** Browser security policy blocks embedding due to missing extension origin in `frame-ancestors`.  
   - **Link:** [GitHub Issue](https://github.com/anthropics/claude-code/issues/89359)

10. **[#90800]**  
    - **Title:** CLI hangs on all subcommands except `--version` (headless Linux)  
    - **Status:** Open | **Comments:** 1 | **👍:** 0  
    - **Summary:** Critical issue affecting headless environments; CLI becomes unusable after startup.  
    - **Link:** [GitHub Issue](https://github.com/anthropics/claude-code/issues/90800)

---

## 4. Key PR Progress

Only one PR updated recently:

1. **[#35350]** *(Closed)*  
   - **Title:** Use portable shebangs in shell scripts  
   - **Summary:** Aligns remaining plugin scripts to use `#!/usr/bin/env bash` for compatibility with non-standard paths (e.g., NixOS).  
   - **Link:** [GitHub PR](https://github.com/anthropics/claude-code/pull/35350)

*No other notable PRs were active in the last 24 hours.*

---

## 5. Feature Request Trends

- **Improved TUI UX**: Configurable keybindings (Enter/Newline toggle) and reliable mid-turn input handling are frequently requested.
- **Observability Integration**: Enterprise users want first-class OpenTelemetry support for tracing and monitoring workflows.
- **Cross-platform Compatibility**: Portable script execution and OS-neutral defaults remain critical for broader adoption.
- **Subagent Reliability**: Users seek improved lifecycle controls (pause/resume) and completion guarantees in nested agent setups.

---

## 6. Developer Pain Points

- **Resource Exhaustion**: Unexplained session limit burnouts disrupt productivity, especially among Max-tier subscribers.
- **Safety Filter False Positives**: Repeated flagging of benign content involving frustration expressions leads to halted sessions — often reported via duplicate bug filings.
- **Desktop Instability**: Unexpected restarts and network misconfigurations plague cross-platform reliability.
- **Agent Orchestration Bugs**: Complex multi-agent scenarios suffer from race conditions and broken state transitions post-resume/resume failures.

--- 

Let me know if you'd like this exported as Markdown or JSON format.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-31

## 1. Today's Highlights
- **Three consecutive alpha releases** (v0.152.0-alpha.4 through .6) shipped in 24 hours, indicating rapid iteration on the Rust CLI/runtime.
- **Windows stability dominates community attention**: the top 5 issues by engagement are all Windows-specific, covering missing Settings tabs, `code-mode host` handshake failures, WSL terminal breakage, Computer Use `EnumWindows` errors, and DWM handle leaks.
- **10 PRs merged** today, focused on TUI rate-limit banners, MCP server name flexibility, Guardian auth preservation during compaction, and making `update_plan` opt-in.

---

## 2. Releases
| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.152.0-alpha.6` | Alpha | Latest in the 0.152 series; incremental fixes on alpha.5 |
| `rust-v0.152.0-alpha.5` | Alpha | Mid-series alpha |
| `rust-v0.152.0-alpha.4` | Alpha | First 0.152 alpha |

> **Note**: All three are pre-release alphas; no stable CLI release in the last 24h.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#28919](https://github.com/openai/codex/issues/28919) | **Windows: Missing “Control Other Devices” tab in Settings → Connections** | Blocks Remote Control pairing on Windows; Pro users cannot enroll workstations. | 50 comments, 47 👍 — highest engagement in dataset |
| [#41049](https://github.com/openai/codex/issues/41049) | **Windows: `code-mode host exited during handshake` — 5.6 models broken** | Core tool-execution path failing on Windows; affects all GPT-5.6 variants. | 39 comments, 1 👍 — recent regression (Aug 27) |
| [#37104](https://github.com/openai/codex/issues/37104) | **Windows/WSL: Integrated terminal silently fails; panels won't open** | WSL development workflow completely blocked on Store build 26.730.8199.0. | 23 comments, 9 👍 — closed but workaround-heavy |
| [#37043](https://github.com/openai/codex/issues/37043) | **Windows Computer Use: `EnumWindows` fails with 0x80070003** | Computer Use helper unusable; survives OS & app restart. | 19 comments, 4 👍 |
| [#33192](https://github.com/openai/codex/issues/33192) | **Windows 10: DWM Composition handles leak after tool calls** | Resource leak grows unbounded during agent sessions; requires app restart. | 17 comments, 10 👍 |
| [#41290](https://github.com/openai/codex/issues/41290) | **Windows/WSL: Project create/delete broken after switching Agent Environment to WSL** | Environment switch corrupts project management. | 16 comments, 6 👍 |
| [#37967](https://github.com/openai/codex/issues/37967) | **Remote Control: Cannot attach to in-progress CLI session (only completed)** | Breaks primary mobile-monitoring workflow; 18 👍 shows strong demand. | 12 comments, 18 👍 |
| [#40219](https://github.com/openai/codex/issues/40219) | **macOS: Server-deleted conversations reappear in Recents, cannot remove** | Data sync inconsistency; zombie conversations persist locally. | 11 comments, 10 👍 |
| [#41465](https://github.com/openai/codex/issues/41465) | **Windows: Floating pet click-through, not draggable** | UI polish regression on new “pet” feature. | 11 comments, 6 👍 |
| [#33282](https://github.com/openai/codex/issues/33282) | **Desktop `create_thread` doesn't inherit auto-approval for worktree tasks** | Permission model inconsistency between CLI and Desktop. | 11 comments, 5 👍 |

---

## 4. Key PR Progress (All Merged Today)

| PR | Title | Impact |
|----|-------|--------|
| [#41744](https://github.com/openai/codex/pull/41744) | **Make `update_plan` tool opt-in** | Defaults `tools.update_plan.enabled=false`; removes bundled prompt guidance. Reduces token overhead for users who don’t need planning. |
| [#41743](https://github.com/openai/codex/pull/41743) | **Mark history ingestion in turn metadata** | Adds `history_ingest_requested` flag; prevents caller override. Improves observability of context compaction. |
| [#41742](https://github.com/openai/codex/pull/41742) | **Show actionable rate-limit banners in TUI** | Surfaces backend-owned banners (filtered by account) above composer. Direct UX win for rate-limited users. |
| [#41700](https://github.com/openai/codex/pull/41700) | **Support package-style MCP server names** | Allows `npm:@modelcontextprotocol/server-sequential.thinking` style names across `mcp add/get/list/remove`. Unblocks namespaced MCP registries. |
| [#41683](https://github.com/openai/codex/pull/41683) | **Set working directories for environment MCP tests** | Fixes test flakiness for stdio MCP servers lacking host cwd fallback. CI stability. |
| [#41673](https://github.com/openai/codex/pull/41673) | **Repair cursor-style rendering on older JediTerm** | Fixes glyph corruption on legacy terminals. Terminal compatibility. |
| [#41666](https://github.com/openai/codex/pull/41666) | **Approve first Node REPL execution without Guardian wait** | Eliminates latency on first REPL command; async Guardian continues in background. Perf improvement. |
| [#41660](https://github.com/openai/codex/pull/41660) | **Preserve Guardian auth across history compaction** | Prevents re-auth prompts when compaction rewrites conversation. UX + security. |
| [#41630](https://github.com/openai/codex/pull/41630) | **Update tests for default-enabled `update_plan`** | Test coverage for the three-state toggle (default/enabled/disabled). Quality. |
| [#41613](https://github.com/openai/codex/pull/41613) | **Move Vim history tests into history search module** | Code organization; shares typing helper. Maintainability. |

---

## 5. Feature Request Trends (from Issues)

1. **Remote Control parity** — Attach to live CLI sessions ([#37967](https://github.com/openai/codex/issues/37967), 18 👍), WebSocket auth stability ([#41121](https://github.com/openai/codex/issues/41121)), mobile→desktop permission sync ([#30485](https://github.com/openai/codex/issues/30485)).
2. **Windows-first polish** — Settings gaps, WSL terminal reliability, Computer Use, DWM leaks, `code-mode` handshake, project management after env switch.
3. **Model configuration depth** — `reasoning.mode=pro` for GPT-5.6 ([#32823](https://github.com/openai/codex/issues/32823)), custom presets in model picker ([#32665](https://github.com/openai/codex/issues/32665)).
4. **TUI power-user controls** — Preserve Vim mode after submit ([#21804](https://github.com/openai/codex/issues/21804), 16 👍), LaTeX rendering ([#32828](https://github.com/openai/codex/issues/32828)).
5. **Hook extensibility** — `PreSkillUse`/`PostSkillUse` for explicit & implicit skills ([#17132](https://github.com/openai/codex/issues/17132), 11 👍).
6. **Session/history integrity** — Conversation persistence across restarts ([#25397](https://github.com/openai/codex/issues/25397), [#27251](https://github.com/openai/codex/issues/27251)), zombie conversation cleanup ([#40219](https://github.com/openai/codex/issues/40219)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Signal | Representative Issues |
|------|--------|----------------------|
| **Windows Desktop reliability** | 7 of top 10 issues; handshake failures, WSL terminal death, Computer Use broken, handle leaks, project ops broken after env switch | [#41049](https://github.com/openai/codex/issues/41049), [#37104](https://github.com/openai/codex/issues/37104), [#37043](https://github.com/openai/codex/issues/37043), [#33192](https://github.com/openai/codex/issues/33192), [#41290](https://github.com/openai/codex/issues/41290) |
| **Remote Control workflow gaps** | Cannot monitor live sessions; auth flakiness; permission downgrade on mobile continuation | [#37967](https://github.com/openai/codex/issues/37967), [#41121](https://github.com/openai/codex/issues/41121), [#30485](https://github.com/openai/codex/issues/30485) |
| **Session/history sync bugs** | Conversations vanish, reappear, or become undeletable across macOS/Windows | [#40219](https://github.com/openai/codex/issues/40219), [#25397](https://github.com/openai/codex/issues/25397), [#27251](https://github.com/openai/codex/issues/27251), [#20303](https://github.com/openai/codex/issues/20303) |
| **Auth instability (macOS Desktop)** | Repeated sign-outs while CLI/web stay logged in | [#40815](https://github.com/openai/codex/issues/40815) |
| **Sandbox permission mismatches** | Auto-approval not inherited; `danger-full-access` blocks cache cleanup; EPERM on profile dir reads | [#33282](https://github.com/openai/codex/issues/33282), [#34331](https://github.com/openai/codex/issues/34331), [#41237](https://github.com/openai/codex/issues/41237) |
| **First-launch latency (Windows)** | 15-min wait while `cua_node` extracts | [#41170](https://github.com/openai/codex/issues/41170) |

---

*Digest generated from GitHub data as of 2026-08-31. All links point to `github.com/openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-08-31

## Today's Highlights
Google Gemini CLI released its latest nightly build v0.59.0-nightly.20260831.g0bd1d4397, while addressing critical agent stability issues. Major concerns persist around subagent behavior, with reported bugs including incorrect termination status reporting, hanging generalist agents, and shell command execution getting stuck. The community is actively working on fixes for authentication failures, tool schema normalization, and destructive behavior prevention.

## Releases
**Version**: v0.59.0-nightly.20260831.g0bd1d4397 (Released: Aug 31, 2026)
- Latest nightly build in the development pipeline
- Full changelog available: https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260830.g0bd1d4397...v0.59.0-nightly.20260831.g0bd1d4397

## Hot Issues

### 1. **Subagent Recovery After MAX_TURNS (13 comments)**
**Issue**: #22323 - Subagent reports success even when hitting maximum turn limit, hiding interruption  
**Why it matters**: This critical bug misrepresents subagent completion status, potentially causing users to believe tasks were completed successfully when they were actually terminated due to turn limits. With 13 comments, this suggests widespread impact across user workflows.

### 2. **Generalist Agent Hangs** (8 comments)  
**Issue**: #21409 - Gemini CLI defers to generalist agent and hangs indefinitely on simple tasks  
**Why it matters**: This priority/p1 bug completely blocks the agent from performing basic operations like folder creation. With 8 comments and high engagement, this appears to be a fundamental issue with agent delegation and timeout handling.

### 3. **Shell Command Gets Stuck After Completion** (4 comments)
**Issue**: #25166 - Shell commands show "Waiting input" after completion, even for simple commands  
**Why it matters**: This breaks the entire CLI interaction model when executing any shell command. Priority/p1 status indicates it's blocking core functionality, with 3 upvotes showing strong user impact.

### 4. **Browser Agent Wayland Compatibility** (4 comments)
**Issue**: #21983 - Browser subagent fails on Wayland display server  
**Why it matters**: With growing adoption of Wayland, this bug prevents browser automation on modern Linux systems. The 4-comment thread suggests ongoing troubleshooting.

### 5. **MCP Tool Schema Validation** (2 comments)
**Issue**: #28839 - Fix MCP tool schemas with missing or malformed type annotations  
**Why it matters**: Prevents Vertex AI strict mode validation errors when MCP servers advertise incorrect tool schemas. Critical for enterprise integrations requiring strict schema compliance.

### 6. **Symlinked Workspace Glob Issues** (2 comments)
**Issue**: #28975 - Glob returns "No files found" for patterns matching files when workspace root is symlinked  
**Why it matters**: Affects macOS users (where `/tmp` is symlinked to `/private/tmp`) and any project using symlinked directories, breaking file discovery functionality.

### 7. **Destructive Behavior Control** (3 comments)
**Issue**: #22672 - Model occasionally uses dangerous commands like `git reset --force` without safety checks  
**Why it matters**: Critical security concern that could lead to data loss. With 1 upvote, this suggests users have experienced or are concerned about destructive agent behavior.

### 8. **Auto Memory System Bugs** (5+ comments total)
**Issues**: #26522, #26523, #26525 - Multiple Auto Memory bugs including infinite retries, invalid patch handling, and redaction issues  
**Why it matters**: These three related issues compromise the memory system's reliability and security, affecting transcript processing and session management.

## Key PR Progress

### 1. **MCP Tool Name Truncation Fix** (Open)
**Issue**: #28971 - Ensure truncated MCP tool names remain unique  
**Why it matters**: Prevents tool name collisions when qualified names exceed Gemini API's 30-character limit on both ends.

### 2. **Non-Interactive Auth Error Handling** (Open) 
**Issue**: #28848 - Graceful handling of refreshAuth failures in non-interactive mode  
**Why it matters**: Prevents CLI crashes with raw stack traces, providing actionable error messages and proper exit codes.

### 3. **Redaction and Logging Improvements** (Open)
**Issue**: #26525 - Add deterministic redaction and reduce Auto Memory logging  
**Why it matters**: Critical security fix preventing sensitive information exposure in model context and logs.

### 4. **Dynamic Model Configuration** (Open)
**Issue**: #29138 - Clean up README.md by removing unnecessary sections  
**Why it matters**: Improves documentation clarity and user onboarding experience.

### 5. **Build Remote Agent Phone Pairing** (Open)
**Issue**: #28982 - Add example extension for Build Remote Agent phone pairing  
**Why it matters**: New feature enabling phone-based session spectating via gbr/1 protocol, expanding cross-device capabilities.

### 6. **Line Ending Detection Fix** (Open)
**Issue**: #28983 - Detect mixed line endings instead of flagging CRLF on single match  
**Why it matters**: Fixes false positive line ending detection that could affect file processing and compilation tools.

### 7. **Sandbox Image Update** (Open)
**Issue**: #28973 - Bump sandbox image from EOL node:20-slim to node:22-slim  
**Why it matters**: Addresses security concerns by moving to a supported Node.js version after EOL.

### 8. **Tool Output Truncation Guard** (Open)
**Issue**: #28972 - Guard against non-positive maxChars in formatTruncatedToolOutput  
**Why it matters**: Prevents corrupt output when negative or zero truncation values are passed.

### 9. **Windows Test Environment Fixes** (Open)
**Issue**: #28832 - Skip environment-dependent tests with proper reasons instead of failing  
**Why it matters**: Improves CI/CD reliability across different operating systems, preventing false failure reports.

## Feature Request Trends

### 1. **Enhanced Code Analysis & Mapping**
Multiple requests (#22745, #22746) for AST-aware tools to improve code reading, search, and codebase mapping. Users want more precise file analysis with surgical reads to reduce token consumption and improve accuracy.

### 2. **Improved Agent Self-Awareness** 
Requests (#21432) for the CLI to understand its own mechanics, hotkeys, and CLI flags to act as an expert guide. This would enable more helpful self-documentation and user assistance.

### 3. **Better Subagent Visibility & Control**
Multiple requests (#22598, #21763, #19561) for:
- Subagent trajectory visibility via `/chat share`
- Context inclusion in bug reports
- "Tactful Extraction" logic for token-frugal surgical reads
- More granular control over subagent behavior

### 4. **Security & Safety Enhancements**
Increasing focus on:
- Preventing destructive behavior (#22672)
- Deterministic redaction (#26525)  
- Better sandboxing and execution controls
- Safety in auto memory processing

## Developer Pain Points

### 1. **Reliability & Stability Issues**
Most frequent complaints center on:
- **Agent hanging** (#21409) and **getting stuck** (#25166)
- **Incorrect termination status** reporting (#22323)
- **Browser agent failures** (#21983, #22267)
- **Symlinked workspace** problems (#20079, #28975)

### 2. **Tool & Integration Problems**
- **MCP server compatibility** issues with schema validation (#28839)
- **Tool name truncation** causing collisions (#28971)
- **>128 tool limit** causing 400 errors (#24246)
- **Inconsistent file handling** across different environments

### 3. **Performance & Resource Management**
- **Memory system bugs** affecting Auto Memory processing (#26522-26525)
- **High token consumption** from unfrugal reads
- **Performance testing failures** on Windows (#28832)
- **Spurious warnings** from workspace scanning (#28834, #28835)

### 4. **Development Experience Frustrations**
- **Documentation gaps** and **missing hook values** (#28978)
- **EOL dependencies** requiring updates (#28973)
- **Test environment** inconsistencies (#28832)
- **Runtime crashes** from output hooks (#22186)

The community shows strong engagement with bugs (high comment counts) and is actively working on comprehensive fixes spanning reliability, security, and feature enhancements. Priority/p1 issues dominate the critical bug list, indicating ongoing foundational stability work is the immediate focus.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-31

---

## **Today's Highlights**

The Copilot CLI community remains highly active, with several critical stability and rendering bugs being addressed. A notable regression in OAuth login behind TLS-inspecting proxies has emerged in v1.0.81, affecting enterprise users. Additionally, progress continues on fish shell integration and terminal UX improvements.

---

## **Releases**

No new releases in the last 24 hours.

---

## **Hot Issues**

### 1. [#4612](https://github.com/github/copilot-cli/issues/4612): Runaway FileWatch Loop Freezes TUI & Spams Logs (OPEN)  
A long-running session enters a tight loop emitting debug logs, freezing the UI and growing logs up to 13GB. This impacts performance and usability significantly. Community reaction includes one 👍 and ongoing triage efforts.

### 2. [#4671](https://github.com/github/copilot-cli/issues/4671): OAuth Login Fails Behind TLS-Proxy in v1.0.81 (OPEN)  
OAuth authentication fails behind corporate HTTP CONNECT proxies with TLS inspection—device-code and web flows both break. Regression from v1.0.80; affects many enterprise environments.

### 3. [#4664](https://github.com/github/copilot-cli/issues/4664): JS Heap Out-of-Memory Crash on Session Resume (OPEN)  
Resuming large sessions crashes Node.js/V8 due to memory exhaustion. High severity for heavy users managing complex projects or long conversations.

### 4. [#4646](https://github.com/github/copilot-cli/issues/4646): Compact Fails with “Tool Choice Must Be Auto” on Custom Models (OPEN)  
Manual `/compact` and auto-compaction fail with CAPIError 400 when using custom models like `~z-ai/glm-latest`. Blocks effective context management.

### 5. [#4669](https://github.com/github/copilot-cli/issues/4669): Telemetry Headers Prevent OTLP Export (OPEN)  
Adding headers via `managed-settings.json` disables telemetry export entirely. Silent failure undermines observability in controlled deployments.

### 6. [#4594](https://github.com/github/copilot-cli/issues/4594): Web/Search Tool Aliases Bind Zero Tools (OPEN)  
Declared `web` or `search` tool aliases result in zero tools bound—no errors, no warnings. Disables key functionality silently.

### 7. [#2369](https://github.com/github/copilot-cli/issues/2369): No Scroll Support in Long Results Output (CLOSED)  
Long outputs can’t be scrolled using mouse, touch, or keyboard. Affects readability in chat-style interactions. Fixed post-report but worth monitoring.

### 8. [#3978](https://github.com/github/copilot-cli/issues/3978): Model Switch Not Honored After Switching to BYOK (OPEN)  
After switching to Bring Your Own Key (BYOK), the CLI reverts to the original model upon re-resume. Confusing behavior especially during billing transitions.

### 9. [#4668](https://github.com/github/copilot-cli/issues/4668): Duplicated Session Creation After Interrupted Call (OPEN)  
An interrupted `create_session` still executes ~100 mins later, duplicating agent work without notice. Risk of side-effects and wasted compute/resources.

### 10. [#4663](https://github.com/github/copilot-cli/issues/4663): Failed Compaction Retried Unboundedly Every Turn (OPEN)  
Failed compactions retry unchanged every turn, incurring billed calls and increasing context size over time. No backoff or fallback mechanism exists yet.

---

## **Key PR Progress**

### 1. [#2381](https://github.com/github/copilot-cli/pull/2381): Add Fish Shell Support for PATH Configuration (CLOSED)  
Improves shell detection logic so that fish users get proper PATH setup instead of defaulting to `.profile`. Addresses silent misconfiguration issues.

*(Note: Only one PR was updated within the past 24h relevant enough to highlight.)*

---

## **Feature Request Trends**

- **Improved Session Management**: Users want better handling of session state, resumption, compaction, and duplication safeguards.
- **Better Terminal UX**: Demand for scrolling, layout consistency across shells, and voice input enhancements.
- **Enterprise Proxy Compatibility**: Strong demand for OAuth/web auth support behind TLS-intercepting proxies.
- **Custom Model Integration**: Need more robust tool binding and error reporting for non-standard model providers.
- **Telemetry Observability**: Enhanced OTLP export controls and header configurability are requested frequently.

---

## **Developer Pain Points**

- **Silent Failures in Tool Binding/Session Handling**: Lack of feedback leads to confusion around broken workflows.
- **Memory Leaks and Performance Degradation**: Especially in long-running sessions where debug logging or retries spiral out of control.
- **Auth Regressions Behind Corporate Proxies**: Enterprise developers face consistent friction authenticating through standard CI/CD pipelines.
- **Context Bloat Due to Retries**: Without bounded compaction strategies, users hit hard limits quickly and lose valuable insight.
- **Inconsistent Shell Behavior**: Especially on Windows and less common shells like fish, leading to subtle misconfigurations.

--- 

Let me know if you'd like this exported as Markdown or formatted for Slack/email.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest

**Date:** 2026-08-31  
**Repository:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights

Two new issues were reported in the last 24 hours affecting the 0.39.1 release. A critical tool-calling inconsistency bug was identified where the model generates Read operations instead of the expected Write/Edit actions, potentially causing unexpected file modifications. Additionally, Remote Control login failures on iPadOS 16.6 have been documented, suggesting compatibility issues with older Safari and WeChat WebView versions.

**No new releases** were published in the past 24 hours. **No pull requests** were merged or updated.

---

## 2. Releases

**No new releases** in the last 24 hours. The current stable version remains **0.39.1**.

For version history, see: [Releases](https://github.com/MoonshotAI/kimi-cli/releases)

---

## 3. Hot Issues

*Note: Only 2 issues were updated in the last 24 hours. All reported issues are listed.*

| # | Title | Author | Status | Why It Matters | Reactions |
|---|-------|--------|--------|----------------|-----------|
| **#2628** | Model emits Read tool calls instead of Write/Edit — text says 'calling Write', wire shows Read | [776138506](https://github.com/776138506) | OPEN | **Critical bug** affecting `k3-256k` model where tool naming is inconsistent between UI and actual API calls. Users may unknowingly trigger read operations instead of intended writes, potentially causing data handling issues. Affects managed `kimi-code` provider with OAuth. | 👍 0 |
| **#2627** | Remote Control login fails to start on iPadOS 16.6 (Safari/WeChat) — "无法开始登录" | [VBS-you](https://github.com/VBS-you) | OPEN | Blocks Remote Control feature on iPadOS 16.6, impacting mobile development workflows. Error occurs at `code-rc.kimi.com` endpoint. Reproduced on both Safari and WeChat browsers on Alibaba Cloud Debian 12 infrastructure. | 👍 0 |

View all open issues: [Issues](https://github.com/MoonshotAI/kimi-cli/issues)

---

## 4. Key PR Progress

**No pull requests** were updated or merged in the last 24 hours.

Track open PRs: [Pull Requests](https://github.com/MoonshotAI/kimi-cli/pulls)

---

## 5. Feature Request Trends

Based on recent issue activity, the following themes emerge:

| Theme | Frequency | Description |
|-------|-----------|-------------|
| **Remote Control Reliability** | High | Users expect stable cross-platform Remote Control functionality, including mobile browsers (Safari iOS, WeChat). |
| **Tool Calling Accuracy** | High | Consistency between model reasoning output and actual API tool calls is critical for trust and reliability. |
| **Model Version Stability** | Medium | Issues tied to specific model variants (`k3-256k`) suggest need for better regression testing across model generations. |
| **Platform Compatibility** | Medium | iPadOS/WebView compatibility gaps require broader testing matrices. |

---

## 6. Developer Pain Points

| Pain Point | Impact | Recent Evidence |
|------------|--------|-----------------|
| **Tool Action Mismatch** | High | Model behavior doesn't match user intent; UI shows "Write" but backend executes "Read" |
| **Mobile Remote Access** | Medium | iPadOS users cannot initiate Remote Control sessions |
| **Authentication Edge Cases** | Medium | OAuth + managed provider scenarios introduce unexpected failures |
| **Model-Specific Bugs** | Medium | Newer models (k3-256k) exhibit behaviors not seen in stable variants |

---

**End of Digest**

*Generated: 2026-08-31*  
*Data source: github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-31

### 1. Today's Highlights
The development cycle has been heavily focused on stabilizing the core streaming, TUI workspace synchronization, and shell process lifecycles. Key milestones include major fixes for trailing stream chunk buffering and bash post-exit process hanging, alongside functional upgrades like typed plugin RPCs and OpenAI OAuth cost estimation. Community activity remains centered on resolving state mismatches in core features like `/undo` and workspace path handling in hybrid Windows/WSL environments.

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues
Here are 10 of the most impactful and discussion-driving issues from the past day:

*   **[#5474 [CLOSED] `/undo` command only rolls back AI conversation message, not the associated file changes**  
    *   **Why it matters:** This represents a critical logical gap in the core `/undo` workflow; reverting a chat state leaves modified workspace files intact, leading to silent state desync.  
    *   **Community reaction:** High engagement with 31 comments and 19 👍, highlighting how central this feature is to safe AI pair-programming workflows.  
    *   [Link](https://github.com/anomalyco/opencode/issues/5474)
*   **[#19473 [CLOSED] Desktop App sends UNC paths to WSL-hosted server, breaking all bash tool calls**  
    *   **Why it matters:** Breaks the core bash execution toolchain for Windows users running the Desktop app against WSL2 backends due to corrupted path concatenation.  
    *   **Community reaction:** 9 comments, with users identifying a workaround path to bypass the UNC path issue.  
    *   [Link](https://github.com/anomalyco/opencode/issues/19473)
*   **[#37354 [OPEN] OpenRouter unauthorized requests to Gemini models**  
    *   **Why it matters:** Poses potential security, authorization, and billing overhead risks by firing unauthorized model requests to Gemini via OpenRouter during routing cycles.  
    *   **Community reaction:** 7 comments focusing on how to suppress unauthorized pre-flight model checks.  
    *   [Link](https://github.com/anomalyco/opencode/issues/3734)
*   **#31152 [CLOSED] Infinite compaction loop on every response even with empty session**  
    *   **Why it matters:** Renders the tool completely unresponsive and unusable, triggered even by trivial inputs like "hi" in a zero-config environment.  
    *   **Community reaction:** 7 comments detailing infinite loop stack traces and build breakdowns.  
    *   [Link](https://github.com/anomalyco/opencode/issues/31152)
*   **[#23982 [CLOSED] LSP initialize timeout too short for Java/Gradle projects (~15s vs ~114s needed)**  
    *   **Why it matters:** Completely disables code intelligence and diagnostics for Java/Gradle projects due to Eclipse JDTLS initialization timeouts.  
    *   **Community reaction:** 5 comments discussing the need for configurable LSP initialization timeouts.  
    *   [Link](https://github.com/anomalyco/opencode/issues/23982)
*   **[#34638 [CLOSED] `opencode acp` mode ignores `OPENCODE_CONFIG_CONTENT` and `OPENCODE_CONFIG_DIR`**  
    *   **Why it matters:** Breaks headless integrations and custom tooling that spawn `opencode` as an ACP subprocess by ignoring standard environment configuration directives.  
    *   **Community reaction:** 5 comments from tooling integrators seeking a way to inject proxy or custom provider configs.  
    *   [Link](https://github.com/anomalyco/opencode/issues/34638)
*   **[#32669 [CLOSED] Glob tool does not match files under dot directories**  
    *   **Why it matters:** Prevents AI agents from discovering and reading files in hidden workspace directories (e.g., `.ai/`), breaking structured agent workflows.  
    *   **Community reaction:** 5 comments and 5 👍, with users confirming the issue persists in version 1.17.7.  
    *   [Link](https://github.com/anomalyco/opencode/issues/32669)
*   **[#10813 [CLOSED] `todowrite` tool call parameter error**  
    *   **Why it matters:** Causes immediate tool-calling failures due to schema validation crashes when the model passes string-serialized arrays instead of JSON arrays.  
    *   **Community reaction:** 6 comments and 4 👍, indicating frequent disruptions in task-tracking flows.  
    *   [Link](https://github.com/anomalyco/opencode/issues/10813)
*   **[#33938 [CLOSED] Desktop app shows ConfigInvalidError and no sessions in sidebar after upgrade**  
    *   **Why it matters:** Prevents users from accessing existing SQLite sessions after upgrading on Windows non-git directories.  
    *   **Community reaction

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑08‑31**

---

### 1. Today’s Highlights  
- The **DeepSeek V4** models have been migrated from the OpenAI Completions API to the OpenAI **Responses API** (PR #8873).  
- A fix for deterministic branch‑summarisation failures (PR #8862) now derives the output budget from `reserveTokens`, eliminating the hard‑coded 2 048‑token cap that caused frequent OOMs.  
- Key PRs addressing **host keybinding exposure** (PR #8872) and **WebSocket idle‑cache cleanup** (PR #8866) landed, improving extension interoperability and reducing stray process lifetimes.

---

### 2. Releases  
*No new version releases in the last 24 h.*

---

### 3. Hot Issues (10 noteworthy)

| # | Issue (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#7547** | [Windows] How do you use Pi on Windows? (51 comments) | A large developer base is on Windows; unclear which execution paths are supported, hindering bug‑fix prioritisation. | High interest; many users asking for clarification. |
| **#3200** | Support video/audio content in `prompt` command (10 comments) | Extends Pi’s multimodal capabilities to match modern LLMs (Gemma 4, GPT‑4o). | Strong demand; several up‑votes. |
| **#4748** | `getKeybindings()` singleton breaks extensions (6 comments) | Extensions load a private copy of `pi‑tui`; keybinding manager is not shared, causing empty hints. | Reported as a blocking bug for extension authors. |
| **#8845** | Branch summarisation deterministically fails (2 comments) | `generateBranchSummary` hard‑codes `maxTokens: 2048`, causing incomplete summaries on large branches. | Critical for workflow reliability; fix landed in PR #8862. |
| **#8858** | Markdown‑fenced tool‑call `arguments` silently degrade to `{}` (1 comment) | Models/gateways sometimes wrap JSON in a code fence; parser fails, losing arguments. | Bug that can silently break tool usage. |
| **#8868** | Typings omit compat exports, causing `pi -p` hangs (1 comment) | Subpath imports are the only typed entry point, leading to 5‑minute hangs during test runs. | Direct impact on developer productivity. |
| **#8875** | OpenRouter auto catalog records token counts as large negative dollar costs (1 comment) | Negative token costs break cost calculations and UI displays. | Highlights a pricing‑display bug in the provider catalog. |
| **#8864** | Long sessions die unrecoverably (2 comments) | `clampMaxTokensToContext()` forces `max_tokens: 1`, entering an unrecoverable death spiral. | Reliability issue affecting large‑context use cases. |
| **#8852** | JSONL session opened twice writes duplicate `seq` and corrupts file (3 comments) | Two `JsonlSessionStorage` instances share the same `nextSequence`, producing duplicate sequence numbers. | Corrupts session logs; needs atomic handling. |
| **#8859** | Dangling `tool_use` after branching & token‑gated compaction misses byte limits (1 comment) | Request‑assembly path mishandles aborted tool usage and size limits, causing 400/413 errors. | Undiscovered edge case in request building. |

---

### 4. Key PR Progress (10 important PRs)

| # | PR (link) | Summary |
|---|-----------|---------|
| **#8873** | [CLOSED] fix(ai): serve DeepSeek V4 through the OpenAI Responses API | Moves DeepSeek‑V4‑flash, -pro and vision‑exp from `/chat/completions` to the newer `/responses` endpoint, aligning with DeepSeek’s recommended API. |
| **#8872** | [CLOSED] fix(coding‑agent): expose host keybinding access on the extension API | Resolves the singleton keybinding issue (#4748) by allowing extensions to receive the host‑merged keybindings. |
| **#8866** | [CLOSED] fix(ai): unref codex WebSocket idle‑cache timer; document extension‑side session resource cleanup | Eliminates a lingering WebSocket that kept `pi -p` processes alive for minutes after the answer, improving resource hygiene. |
| **#8862** | [CLOSED] fix(agent,coding‑agent): derive branch summary output budget from reserveTokens (#8845) | Dynamically computes the token budget for `/tree` summarisation, removing the hard‑coded 2 048 limit and preventing OOMs. |
| **#8853** | [CLOSED] fix(agent): prevent duplicate JSONL writers | Serialises writable opens/mutations by canonical session path, stopping multiple in‑process writers from corrupting the JSONL file. |
| **#8635** | [OPEN] fix(ai): preserve aborted stop reason during lazy setup | Passes abort signals through lazy stream setup wrappers and reports setup failures as aborted when the signal is already aborted. |
| **#8844** | [CLOSED] feat(ai): add Tencent Token Plan Individual provider | Introduces a provider that queries Tencent’s token‑plan API, supporting DeepSeek‑V4‑flash/pro, GLM‑5.2, Minimax‑M2.7, etc. |
| **#8860** | [CLOSED] [untriaged] Running `pi -e npm:<ext>`, dist‑tag does not refresh temporary extensions | Extensions installed with `pi -e npm:<ext>` are cached; the `@latest` flag does not force a refresh, causing stale versions. |
| **#8856** | [CLOSED] [untriaged] Extension API: distinguish native tool errors from tool_result handler failures? | Clarifies whether `tool_result` should expose separate handler‑failure errors, a composition concern for Fabric‑style tool execution. |
| **#8232** | [OPEN] DONT MERGE: dev branch | A placeholder PR used for CI testing and internal commentary; currently blocked from merging. |

---

### 5. Feature Request Trends  

- **Multimodal Input** – Multiple requests (#3200, #7559) ask for native video/audio support in the `prompt` RPC and DeepSeek‑V4 Responses API, indicating a strong demand for richer modality handling.  
- **Provider Expansion** – New providers are frequently requested: Ollama Cloud (#4706), DeepSeek / Responses (#7559), zai‑api (#6723), StepFun (#8867), Tencent Token Plan (#8844), and OpenRouter cost handling (#8875).  
- **UI/UX & ergonomics** – Users want easier navigation (#2941 – `/effort` shortcut), clearer keybinding management (#4748), optional description arguments for bash tools (#8863), and the ability to show npm package versions in `pi list` (#8865).  
- **Reliability & Resource Management** – Repeated issues around session OOM (#8746), death‑spiral token clamping (#8864), duplicate JSONL writers (#8852), and dangling `tool_use` after branching (#8859) highlight a focus on stability and correct resource handling.  
- **Cost & Token Accounting** – Concerns about negative token costs in OpenRouter catalog (#8875) and preserving cache‑field presence (#8871) show that accurate cost reporting is a priority.  

---

### 6. Developer Pain Points  

- **Windows Usage Ambiguity** – The lack of clear guidance on running Pi on Windows (Issue #7547) hampers cross‑platform debugging and documentation.  
- **Session OOM & Death Spiral** – Large sessions frequently hit the OOM killer (Issue #8746) or enter an unrecoverable state when context‑window clamping forces `max_tokens: 1` (Issue #8864).  
- **Duplicate JSONL Writes** – Opening the same session file twice in a process leads to duplicate sequence numbers and file corruption (Issue #8852).  
- **Typings & Import Hangs** – Omitted compat exports cause `pi -p` to hang for minutes (Issue #8868), breaking test workflows.  
- **Tool‑Call Parsing Bugs** – Markdown‑fenced arguments (#8858) and two tool calls sharing an `index` that silently drop the second call (#8861) cause silent failures in automation pipelines.  
- **Missing Timeout Controls** – The agent loop lacks a timeout for tool‑call execution, leaving runs stuck indefinitely (Issue #8857).  
- **Inconsistent API Contracts** – Unclear distinction between native tool errors and `tool_result` handler failures (Issue #8856) makes debugging extension‑level failures difficult.  
- **Limited Bash Tool Flexibility** – Absence of an optional description argument (#8863) and full‑output directory configuration (#8869) reduces the ability to customise tool presentation and file placement.  
- **Provider Catalog Issues** – Negative token costs in OpenRouter auto catalog (#8875) and endpoint changes breaking resumed conversations (#8874) affect cost estimation and conversation continuity.  

--- 

*All links point to the respective GitHub issues or pull requests on the `badlogic/pi-mono` repository.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑08‑31**  

---

### 1. Today’s Highlights  
- No new releases were published in the last 24 h, but activity remains high around cross‑session communication, UI reliability, and CI stability.  
- The most‑discussed open issue is the intermittent missing‑banner bug on Windows startup (#8124, 15 comments), while the feature request for cross‑session messaging (#8724, 12 comments) continues to gather traction.  
- Several CI‑focused PRs landed or are under review, aiming to reduce flaky sandbox/E2E failures and tighten resource limits on shared runners.

---

### 2. Releases  
*None reported in the last 24 h.*

---

### 3. Hot Issues (selected by comment count & impact)

| # | Issue | Link | Why it matters | Community reaction |
|---|-------|------|----------------|--------------------|
| #8124 | Startup banner sometimes missing top lines on first paint (Windows) | <https://github.com/QwenLM/qwen-code/issues/8124> | Affects first‑run experience; intermittent but blocks visual feedback for new users. | 15 comments – active debugging, reproduces on multiple Windows setups. |
| #8724 | Cross‑session messaging: let Qwen Code sessions on the same machine message each other | <https://github.com/QwenLM/qwen-code/issues/8724> | Enables agent‑to‑agent collaboration on a single workstation, a key step toward multi‑agent workflows. | 12 comments – strong interest, suggestions for security gating and discovery mechanisms. |
| #8784 | Streamable HTTP: optional GET/SSE stream rejected with 404 kills the whole MCP connection | <https://github.com/QwenLM/qwen-code/issues/8784> | Highlights fragility in MCP client handling of optional streams; could cause silent disconnections. | 5 comments – maintainers investigating fallback logic. |
| #4441 | 无法给微信bot发图片，会报错。 (Image path outside allowed directories) | <https://github.com/QwenLM/qwen-code/issues/4441> | Blocks a common integration use‑case (WeChat bot) due to overly strict path validation. | 3 comments – users requesting relaxed whitelist or configurable allowed dirs. |
| #7167 | Fleet Shepherd Dashboard (auto‑maintained bot issue) | <https://github.com/QwenLM/qwen-code/issues/7167> | Tracks CI fleet health; signals when automated maintenance stalls. | 3 comments – mostly informational; useful for ops visibility. |
| #4000 | feat(cli): redesign /commit slash command to leverage AI for commit message drafting | <https://github.com/QwenLM/qwen-code/issues/4000> | Aims to improve developer productivity by generating commit messages via the model. | 3 comments – discussion on prompt design and optional user edit. |
| #10547 | Deferred review findings from PR #10532 | <https://github.com/QwenLM/qwen-code/issues/10547> | Captures post‑review cleanup items that didn’t fit in the original PR; ensures nothing falls through cracks. | 3 comments – maintainers triaging deferrals. |
| #10538 | Computer Use: driver portable 0.20.0 panics on every embedded runtime creation (Windows x64) | <https://github.com/QwenLM/qwen-code/issues/10538> | Shows SDK instability on Windows, affecting any tool that relies on the CUA driver. | 3 comments – users asking for rollback or fix. |
| #10409 | Deferred review findings from PR #10116 | <https://github.com/QwenLM/qwen-code/issues/10409> | Similar to #10547 – tracks deferred actions from a CI‑related PR. | 3 comments – ongoing triage. |
| #9434 | `ask` returns from an Edit/WriteFile PreToolUse hook do not display diffs | <https://github.com/QwenLM/qwen-code/issues/9434> | Breaks the expected UI flow when a tool request is escalated to human review; reduces transparency. | 3 comments – users seeking consistent diff rendering. |

---

### 4. Key PR Progress (selected by relevance & activity)

| # | PR | Link | Summary |
|---|----|------|---------|
| #10146 | feat(cli): OpenTUI migration foundation batch — theme, a11y, clipboard, keys, dialogs scaffolding | <https://github.com/QwenLM/qwen-code/pull/10146> | Lays the groundwork for migrating the TUI to the new OpenTUI renderer, adding accessibility, clipboard, and keyboard infrastructure. |
| #9503 | feat(cli): fold completed read/search tool batches into the thought line | <https://github.com/QwenLM/qwen-code/pull/9503> | Improves TUI readability by merging tool‑batch summaries into the existing “Thought” line, reducing visual clutter. |
| #10411 | feat(serve): expose Workflow tasks and controls | <https://github.com/QwenLM/qwen-code/pull/10411> | Adds daemon‑level endpoints for inspecting and controlling long‑running Workflows (phase, token usage, approvals, logs). |
| #10076 | feat: chat transcript mr2a html export | <https://github.com/QwenLM/qwen-code/pull/10076> | Enables exporting a session’s chat transcript to a self‑contained HTML file (MR2A format) for archival or sharing. |
| #10565 | feat(ui): add ui.showToolCallArgs to render tool‑call arguments inline | <https://github.com/QwenLM/qwen-code/pull/10565> | Introduces an opt‑in setting that prints full tool arguments beneath each call, aiding debugging and transparency. |
| #10592 | ci: apply shared‑runner integration limits to release | <https://github.com/QwenLM/qwen-code/pull/10592> | Aligns release integration tests with the same self‑hosted ECS resource limits used by the main test lane, preventing oversubscription. |
| #10576 | docs(serve): Document tool PATH for managed daemons | <https://github.com/QwenLM/qwen-code/pull/10576> | Clarifies how to configure a trusted `PATH` for `qwen serve` when run under systemd/launchd, reducing “command not found” errors. |
| #10498 | fix(ci): stop self‑hosted unit lanes exiting all‑green runs red (#10488) | <https://github.com/QwenLM/qwen-code/pull/10498> | Extends the RPC‑timeout exemption to all Linux unit‑test suites, eliminating false‑red CI spikes. |
| #10571 | fix(sdk): Surface daemon JSON‑RPC error details | <https://github.com/QwenLM/qwen-code/pull/10571> | Makes the SDK propagate useful error details from daemon 5xx responses (found in `data.details`/`data.message`) instead of swallowing them as “Internal error”. |
| #10534 | fix(vscode): restore native diff approval after WebShell cutover | <https://github.com/QwenLM/qwen-code/pull/10534> | Re‑installs the VS Code native diff UI for permission decisions after the WebShell permission flow was introduced, preserving familiar workflow. |

---

### 5. Feature Request Trends  
From the open issues and PRs, the community is gravitating toward:

1. **Inter‑session / multi‑agent communication** – cross‑session messaging (#8724) and workflow exposure (#10411) show demand for agents that can discover and talk to each other on the same host.  
2. **Config & runtime flexibility** – hot‑reload of model settings (#10568), adjustable Goal token budget (#10543), and `.worktreeinclude` support (#10584) indicate a desire for less‑restart‑heavy workflows.  
3. **Sandbox lightweight alternatives** – Bubblewrap backend for Linux (#10583) reflects a need for fast, low‑overhead isolation without Docker/Podman.  
4. **UI transparency & usability** – inline tool‑call args (#10565), better diff rendering for `ask` hooks (#9434), and commit‑message AI assistance (#4000) aim to make the assistant’s actions more visible and controllable.  
5. **Observability & logging** – exposing Workflow task metadata, improving daemon error propagation (#10571), and HTML chat export (#10076) point to stronger audit and sharing capabilities.

---

### 6. Developer Pain Points  
Recurring frustrations highlighted by multiple issues:

- **Windows‑specific instability** – driver panics (#10538), banner rendering glitches (#8124), image‑path restrictions for integrations (#4441), and probe‑tree creation order (#10560) repeatedly break Windows workflows.  
- **CI flakiness & resource contention** – sandbox/E2E shard failures, transient unit‑test lane red runs, and the need for retry mechanisms (#10572, #10498, #10592) show CI remains a source of noise.  
- **Error opacity** – Web Shell showing generic “Internal error” (#10564) and SDK dropping JSON‑RPC details (#10570) hinder debugging when model providers fail.  
- **Security surface concerns** – open git config keys enabling attacker‑supplied hooks (#10561) and overly strict tool‑PATH defaults for managed daemons (#10576) are flagged as potential vectors.  
- **Permission/approval UX** – losing approval state when closing diff tabs (#10557) and missing diffs for `ask`‑based pre‑tool hooks (#9434) create friction in human‑in‑the‑loop scenarios.

Addressing these areas—particularly Windows reliability, clearer error reporting, and smoother CI—will likely yield the biggest immediate satisfaction for the Qwen Code developer base.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*