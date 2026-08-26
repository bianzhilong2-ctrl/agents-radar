# AI CLI Tools Community Digest 2026-08-26

> Generated: 2026-08-26 00:42 UTC | Tools covered: 9

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

1.  **Analyze User Request:**
   - Role: Senior technical analyst of AI developer tools ecosystem
   - Task: Generate a cross-tool comparison report based on the provided community digest summaries for 8 major AI CLI tools (as of 2026-08-26)
   - Output format: Specific 6 sections in English, concise, professional, data-backed
   - Sections required:
     1. Ecosystem Overview (3-5 sentences)
     2. Activity Comparison (table: Issues count, PR count, Release status per tool today)
     3. Shared Feature Directions (requirements across multiple tools, note which tools, specific needs)
     4. Differentiation Analysis (differences in feature focus, target users, technical approach)
     5. Community Momentum & Maturity (which tools have more active communities, which are rapidly iterating)
     6. Trend Signals (industry trends from community feedback, reference value for developers)

   - Data sources: The user provided detailed digests for 8 tools:
     * Claude Code (anthropics/claude-code)
     * OpenAI Codex (openai/codex)
     * Gemini CLI (google-gemini/gemini-cli)
     * GitHub Copilot CLI (github/copilot-cli)
     * Kimi Code CLI (MoonshotAI/kimi-cli)
     * OpenCode (anomalyco/opencode)
     * Pi (badlogic/pi-mono)
     * Qwen Code (QwenLM/qwen-code)

   - I need to extract quantitative/qualitative data from each digest to populate the comparison.

2.  **Extract Data from Each Digest:**

   **Claude Code (Anthropic/claude-code):**
   - Today's Highlights: 2 patch releases v2.1.246, v2.1.245; major issue #84352 (CVP re-blocking, 155 comments), #50246 (message queue, 199 👍); Windows GPU crashes; WSL scroll bug; MCP schema issues; auth delays; MSIX packaging; `/compact` silent fail
   - Releases: v2.1.246, v2.1.245 (last 24h)
   - Hot Issues: Top 10 listed with comment counts/upvotes; total backlog dominated by #84352 (155 comments), #50246 (199 👍)
   - Key PR Progress: Only 1 PR #89404 open; validates agent.sh
   - Feature Request Trends: 4 directions: non-interruptive workflow control, declarative topic-aware rule system, MCP protocol parity, desktop-grade reliability on Windows
   - Developer Pain Points: Silent failures, Windows instability, auth/session friction, TUI regressions, resource leaks, hook/skill lifecycle mismatches

   **OpenAI Codex (openai/codex):**
   - Today's Highlights: 3 Rust alpha releases v0.150.0-alpha.9/10/11; Windows installer demand #13993 (186 👍, 81 comments); Windows issues dominate (MCP transport, session state, sandbox recovery)
   - Releases: 3 alpha releases; no standalone Windows installer
   - Hot Issues: Top 10 listed; #13993 (81 comments, 186 👍) standalone Windows installer; #28919 (42 comments, 42 👍) missing "control other devices" tab; #38350 (40 comments, 0 👍) scheduled tasks disable themselves; #13018 closed (105 👍) delete threads; #25179 (3 comments) stale subagents; #40715 (7 MCP transport failures); #34026 (14 threads freeze "thinking"); #17598 (13 custom provider subagent orchestration broken); #39841 (9 terminal fails); #23411 (9 PreToolUse hooks skipped)
   - Key PR Progress: 10 PRs listed; #40742 Guardian reviewer sessions; #40739 enterprise IdP identity resolution; #40737 preserve MCP tool output; #40728 honor attachment-owned permissions; #40722 enterprise ID-JAG exchange; #40718 Bazel repositories; #40713 sanitize credentials; #40710 remote executor connection refresh; #39819 closed Tool Call Visibility
   - Feature Request Trends: 7 themes: Windows platform parity, MCP ecosystem, context window expansion, subagent reliability, hook & trust system, thread/session management, CLI robustness
   - Developer Pain Points: 6 points: Windows reliability, MCP integration fragility, CLI startup & session state, hook system gaps, subagent lifecycle management, update cadence concerns

   **Gemini CLI (google-gemini/gemini-cli):**
   - Today's Highlights: v0.58.0-preview.0 released; symlink handling fixes, A2A server security improvements; community engagement high around agent stability (subagent recovery, generalization hangs)
   - Releases: v0.58.0-preview.0, v0.57.0, v0.56.0-nightly (in last period; but today's digest says "Today's Highlights" mentions v0.58.0-preview.0 introducing critical symlink handling fixes and multiple security improvements in A2A server; also v0.57.0 stable with Cloud Workstations proxy fix, v0.56.0-nightly with cancellation errors fix)
   - Actually the digest date is 2026-08-26; releases section lists v0.58.0-preview.0, v0.57.0, v0.56.0-nightly. I'll note the latest preview/stable.
   - Hot Issues: Top 10 listed; #22323 (13 comments, 2👍) subagent recovery after MAX_TURNS; #21409 (8 comments, 8👍) generalist agent hangs; #25166 (4 comments, 3👍) shell command execution stuck; #21983 (4 comments, 1👍) browser agent Wayland failures; #19873 (8 comments, 1👍) zero-dependency OS sandboxing; #22267 (3 comments) browser agent ignores settings overrides; #26523 (3 comments) auto memory inbox security issues; #24246 (3 comments) 400 error with >128 tools; #23313 (1 comment) evaluation test flakiness; #22598 (2 comments, 1👍) subagent trajectory sharing
   - Key PR Progress: 10 PRs listed; #28955 dependency updates & MCP configuration; #29089 AbortSignal forward fix; #28863 extension security & consent; #29088 IDE companion streaming fix; #29087 concurrent extension install prevention; #29067 A2A server security cleanup; #29081 MCP OAuth SSRF protection; #28832 cross-platform test improvements; #28930 unsafe git diff override removal; #28926 Windows longpath documentation
   - Feature Request Trends: 4 categories: Enhanced agent intelligence, Security & reliability improvements, Cross-platform stability, Performance & user experience
   - Developer Pain Points: 5 categories: Agent instability & unpredictability, Configuration & customization limitations, Security & reliability gaps, Tool management complexity, Development environment friction

   **GitHub Copilot CLI (github/copilot-cli):**
   - Today's Highlights: v1.0.81-10 released; plugins dashboard available to everyone; `x` is now delete key everywhere; PR #4607 preparing v1.0.81-11
   - Releases: v1.0.81-10 (new); one PR #4607 [CLOSED] prepare public prerelease v1.0.81-11
   - Hot Issues: Top 30 by comment count shown; I need to pick 10 noteworthy. From data: #13 (8 comments, 74 👍) vi/vim input mode; #3709 (6 comments, 28 👍) allow /model to switch between multiple models including BYOK/local; #4035 (4 comments, 0 👍) voice installer fails; #4542 (2 comments, 1 👍) workspace .mcp.json detected but not connected; #3380 (2 comments, 0 👍) add --disable-repo-mcps flag; #3323 (1 comment, 2 👍) ask_user enum/oneOf fields should offer 'Other'; #1153 (1 comment, 2 👍) session-to-repository context export; #3537 (1 comment, 1 👍) share sessions across machines; #4268 (1 comment) regression: exit summary not shown; #4272 (1 comment, 3 👍) new models greyed out
   - Key PR Progress: Only 1 PR updated in last 24h: #4607 [CLOSED] Prepare public prerelease v1.0.81-11
   - Feature Request Trends: 6 themes: Windows platform parity, MCP ecosystem, context window expansion, subagent reliability, hook & trust system, thread/session management, CLI robustness (similar to Codex but narrower)
   - Developer Pain Points: 6 points: Windows reliability, MCP integration fragility, CLI startup & session state, hook system gaps, subagent lifecycle management, update cadence concerns (very similar to Codex)

   **Kimi Code CLI (MoonshotAI/kimi-cli):**
   - Today's Highlights: No new releases or PRs in last 24h; two critical issues surfaced: silent data-loss bug Edit/Write tools report success but never persist changes (macOS v0.38.0); context-compaction regression causing completed tasks incorrectly reopened (Windows)
   - Releases: None in last 24h; last stable v0.84.3
   - Hot Issues: Only 2 issues updated in last 24h; both high-impact functional regressions
     * #2617 (2 comments, 0 👍) Edit/Write tools report success but never write to disk (v0.38.0, macOS)
     * #2523 (1 comment, 0 👍) Context compaction bug - Kimi Code reopens already completed and deleted task (v0.6.3, Windows)
   - Key PR Progress: No pull requests updated in last 24h
   - Feature Request Trends: Insufficient new issue volume; historical patterns show demand for: stable file-system operations, reliable context/session management, improved diagnostics
   - Developer Pain Points: 4 points: Silent tool failures, context-compaction instability, cross-platform gaps, observability deficit

   **OpenCode (anomalyco/opencode):**
   - Today's Highlights: Latest v1.18.23 release fixes Cloudflare AI Gateway routing for third-party models, corrects Anthropic model IDs; community attention on API-gateway failures (Zen/Ox Alpha Free) causing "Endpoint is unavailable" errors when tools array present; regression making multi-question tool calls in TUI fail silently
   - Releases: v1.18.23 (released 24h ago) – core bug-fixes for Cloudflare AI Gateway routing and Anthropic model ID normalization
   - Hot Issues: 10 noteworthy items listed with links; #44300 (13 comments) Zen/API gateway "Endpoint unavailable" with tools; #33618 (10 comments) Qwen 3.7 Plus/Max via OpenRouter empty tool-call names; #44850 (7 comments) Ox Alpha Free "Endpoint unavailable" with tool; #35434 (7 comments) multi-question tool calls TUI fail silently; #44910 (2 comments) Zen Go /v1/responses 500 for non-DeepSeek models; #43277 (5 comments) sessions permanently stuck; #45087 (4 comments) auto-updater reinstalls, inflating npm cache to 266GB; #43355 (2 comments) desktop UI freezes after assistant turn; #45105 (2 comments) changing API settings produces "Invalid API key" even free tier; #44958 (3 comments) refusal responses hidden, history disappears in Go client
   - Key PR Progress: 10 important PRs listed; #45108 add Groq and DeepInfra providers; #45107 markerless directories as independent projects; #45106 stream shell tool output in desktop UI; #45100 fix TUI transcript reporting when final user message clipped; #45103 open existing Desktop sessions via deep-link URLs; #44845 make Core test suite hermetic; #45098 add Cerebras and Together AI providers; #45094 preserve provider-defined response item IDs; #45002 internal plugin repairs malformed tool arguments; #45086 Azure CLI authentication for Azure provider
   - Feature Request Trends: 5 categories: Search & navigation (message search, cost indicator), Language localization (Hebrew locale), Session management (deep-link opening, stuck sessions), Provider expansion (Groq, DeepInfra, Cerebras, Together AI, Azure CLI), Tooling & UX (reliable tool call handling, transparent UI feedback)
   - Developer Pain Points: 7 categories: Unreliable API-gateway endpoints, Silent or hidden failures, Resource-heavy auto-update loops, UI freezes & rendering loops, Configuration & permission mishaps, Session persistence, Workspace directory locking

   **Pi (badlogic/pi-mono):**
   - Today's Highlights: Intense activity around provider integrations and terminal rendering fixes; new Opper provider in PR #8639; streaming corruption bug fixed (Issue #8584); multiple PRs addressing context window handling for small models and vision-capable endpoints; Windows-specific tooling issues (PowerShell, bundled CLI extension loading)
   - Releases: No new releases in last 24h; last stable v0.84.3
   - Hot Issues: 10 listed; #7547 (49 comments) meta-issue Windows usage patterns; #8584 (9 comments, 5👍) TUI row corruption during streaming: assistant text rendered one word per line; #5886 (open) AgentSession settlement/continuation and assistant-tail lifecycle bugs; #7855 (7 comments, 4👍) Pi stops with "Response was truncated before completion."; #8582 (6 comments) Built-in PowerShell tool uses Windows PowerShell 5.1 in interactive mode, but pwsh in -p mode; #8468 (6 comments) GitHub Copilot fails with timeout; #7049 (5 comments) Upgrade Undici to 8.8.0 for correct plain-HTTP proxy forwarding; #6596 (5 comments, "inprogress") fix: spawn(taskkill) ENOENT on Node.js 24; #8456 (4 comments, 2👍) Gemini 3.7 Flash rejects /tree branch summarization with MINIMAL thinking; #6600 (4 comments, "inprogress") pi update --extensions blocks npm scripts with npm 11.16.0
   - Key PR Progress: 10 listed; #8639 feat(ai): add Opper provider; #8642 fix(ai): hoist Bedrock tool result images; #8650 fix(ai): omit Responses tool_choice when no tools sent; #8623 fix(coding-agent): stop counting trailing newline as a line; #8629 feat: Add eager tool execution; #8627 fix(coding-agent): use ctx.cwd for cwd-sensitive tools; #8614 fix(ai): derive OpenRouter reasoning controls; #8570 fix(ai): preserve Codex thread affinity headers; #8635 fix(ai): preserve aborted stop reason during lazy setup; #8547 feat(tui): move editor cursor on click
   - Feature Request Trends: 6 categories: Provider Expansion & Compatibility, Windows Development Experience, Streaming & Rendering Robustness, Vision & Media Handling, Agent Lifecycle & Session Management, Context Window & Compaction Intelligence
   - Developer Pain Points: 8 categories: Streaming Corruption, Extension Loading Failures, Response Truncation, npm 11.16.0 Compatibility, Git Integration Hang, Tool Result Image Accumulation, PowerShell Version Inconsistency, Copilot Timeout

   **Qwen Code (QwenLM/qwen-code):**
   - Today's Highlights: v0.22.0-nightly.20260825.22bb5e8b9f released with 2 fixes (web-shell session workspace cwd, truncated); issue surge highlights multi-agent coordination failures, Windows file-operation quirks, persistent OOM conditions
   - Releases: v0.22.0-nightly.20260825.22bb5e8b9f (released 2026-08-25); 2 fixes
   - Hot Issues: Top 30 by comment count, 50 total; I'll pick 10 noteworthy. From data: #9459 (10 comments, P1 bug /effort max bricks session on OpenAI-compatible providers); #8097 (8 comments, P2 bug multi-agent coordination gap); #6762 (6 comments, P2 feature request Skill Context Lifecycle Management); #9198 (6 comments, P2 bug qwen OOM issue); #9309 (6 comments, P3 bug compression incorrect); #5823

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

User Safety: safe

---

# Claude Code Community Digest — 2026-08-26

---

## 1. Today's Highlights

Two patch releases shipped in the last 24 hours: **v2.1.246** adds a startup warning for overly broad Bash allow rules and an Auto mode tab in `/permissions`, while **v2.1.245** fixes a Linux startup crash on glibc 2.44 (Arch, CachyOS, Fedora Rawhide). The issue backlog remains dominated by a high-profile cyber-safeguard regression affecting CVP-approved organizations (#84352, 155 comments) and a long-requested message-queue enhancement (#50246, 199 👍). Windows desktop stability continues to surface critical crashes around GPU processes, MSIX packaging, and AppX servicing.

---

## 2. Releases

### v2.1.246
- **Startup warning** for Bash allow rules with a leading wildcard before the subcommand (e.g., `Bash(git * main)`), since they also match options inserted before the subcommand.
- **Auto mode tab** added to `/permissions` for viewing/editing auto-mode classifier rules.
- *Changelog truncated in source.*

### v2.1.245
- **Fixed crash on startup** on Linux distributions shipping glibc 2.44 (Arch Linux, CachyOS, Fedora Rawhide).

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | **CVP-approved orgs still hit cyber-safeguard blocks** | Regression: previously verified orgs blocked again; portal shows "Under review" despite prior approval email. Blocks production workflows. | 155 comments, 24 👍 — highest engagement in backlog |
| [#50246](https://github.com/anthropics/claude-code/issues/50246) | **Message queue mode** (enhancement) | Users cannot queue follow-ups mid-task without interrupting; forces context loss or mental overhead. | 68 comments, 199 👍 — strongest feature demand signal |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows Desktop: fatal GPU-process crash via Browser tab** | Crash leaves MSIX package unlaunchable (appxState=2) until Repair; reproduces on two NVIDIA driver versions. | 56 comments, 9 👍 — critical desktop stability blocker |
| [#65833](https://github.com/anthropics/claude-code/issues/65833) | **WSL/TUI: scroll wheel sends arrow keys, not scroll** | Regression since v2.1.150; breaks conversation navigation in terminal. | 41 comments, 99 👍 — high-impact UX regression |
| [#86142](https://github.com/anthropics/claude-code/issues/86142) | **MCP servers with draft-07 outputSchema rejected client-side** | "Unsupported dialect" error before dispatch; blocks MCP ecosystem adoption of newer schema. | 29 comments, 12 👍 — protocol-level blocker |
| [#82049](https://github.com/anthropics/claude-code/issues/82049) | **Magic-link emails delayed 2–5 minutes since mid-July** | Delays login to claude.ai → delays Claude Code session start; affects all auth flows. | 14 comments, 25 👍 — auth reliability regression |
| [#87804](https://github.com/anthropics/claude-code/issues/87804) | **Prompt-topic triggers for `.claude/rules/`** | `paths:` covers files but no mechanism for subject-based rule loading; limits contextual rule application. | 13 comments — emerging architecture request |
| [#85901](https://github.com/anthropics/claude-code/issues/85901) | **MSIX missing AppxMetadata\CodeIntegrity.cat → vk_swiftshader.dll blocked** | Code Integrity kills AppX container (0x3CFC); packaging fix needed + data-loss protection. | 11 comments — Windows packaging defect |
| [#73694](https://github.com/anthropics/claude-code/issues/73694) | **AppX update fails: CoworkVMService holds package file lock** | Background service prevents updates; error 0x80073d02 ("another program using this file"). | 6 comments — servicing pipeline breakage |
| [#89040](https://github.com/anthropics/claude-code/issues/89040) | **`/compact` silently fails on very large conversations** | Summary generated but no `compact_boundary` written; context unchanged, no error surfaced. | 2 comments — silent data-loss risk |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#89404](https://github.com/anthropics/claude-code/pull/89404) | `validate-agent.sh`: don't abort at first warning; stop false-flagging valid agents | **OPEN** | Fixes #83803. Three `set -euo pipefail` interaction bugs: (1) `((warning_count++))` aborts on zero result, (2) false positives on valid agent files, (3) missing error aggregation. Author: bcherny. |

*Note: Only 1 PR updated in the last 24h.*

---

## 5. Feature Request Trends

From the issue landscape, developers are converging on **four high-leverage directions**:

1. **Non-interruptive workflow control** — Message queue (#50246), skill-scoped hooks (#89669), and auto-compact at context edge (#77509) all point to a desire for *backgroundable, composable task orchestration* rather than modal interruption.
2. **Declarative, topic-aware rule system** — Prompt-topic triggers for `.claude/rules/` (#87804), skill-scoped hooks (#82801, #89669), and standing prohibition enforcement (#89464) show demand for *semantic, context-sensitive policy* beyond path-based matching.
3. **MCP protocol parity & extensibility** — Draft-07 outputSchema support (#86142), Slack connector visibility (#89665), and routine authorization gaps indicate the ecosystem is pushing against current MCP surface area.
4. **Desktop-grade reliability on Windows** — GPU crashes (#80444), MSIX packaging defects (#85901, #73694, #82277), and ECONNRESET on bundled Node (#89663) form a coherent "Windows desktop readiness" theme.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Silent failures / no error surfacing** | `/compact` fails silently (#89040), hooks don't fire in subagents (#88441), rules don't bind incrementally (#89244, #89464) | 5+ issues |
| **Windows desktop instability** | GPU crash (#80444), MSIX/AppX breakage (#85901, #73694, #82277), ECONNRESET (#89663), off-screen dialog (#89668) | 6+ issues |
| **Auth/session friction** | Magic-link delays (#82049), CVP re-blocking (#84352), session expiry → login loop | 3+ issues |
| **TUI/terminal regressions** | Scroll wheel broken (#65833), SGR mouse mode leak (#79015), no text selection in input (#80734), OSC 8 hyperlinks missing (#79839), prefersReducedMotion freezes timer (#85972) | 6+ issues |
| **Resource leaks / runaway processes** | ugrep 20+ GB RAM (#78027), autocompact never fires proactively (#77509), worktree GC deletes dirty worktrees (#74719) | 3+ issues |
| **Hook/skill lifecycle mismatches** | Skill hooks persist after completion (#82801), user hooks don't fire in subagents (#88441), no skill-scoped hook lifetime (#89669) | 4+ issues |

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-08-26. Links point to live GitHub items.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

## 2026-08-26

---

### Today's Highlights

The Codex project shipped three Rust alpha releases (v0.150.0-alpha.9/10/11) in the past 24 hours, while the community continues to push for a standalone Windows installer—issue #13993 now has 186 👍 and 81 comments, making it the most demanded feature. Windows-related issues dominate the top issues, with users reporting critical failures around MCP transport, session state, and sandbox recovery.

---

### Releases

| Version | Notes |
|---------|-------|
| **rust-v0.150.0-alpha.9** | Alpha release for Codex Rust SDK |
| **rust-v0.150.0-alpha.10** | Follow-up alpha build |
| **rust-v0.150.0-alpha.11** | Latest alpha iteration |

All three releases are part of the rapid v0.150 alpha cycle. No changelogs were provided; track updates at [openai/codex/releases](https://github.com/openai/codex/releases).

---

### Hot Issues

**1. [Support standalone Windows installer (`codex-setup.exe`) — #13993](https://github.com/openai/codex/issues/13993)**
🔺 81 comments · 186 👍 · Windows · Feature Request

The most-upvoted open issue. Users in corporate, offline, or restricted environments cannot install via Microsoft Store. The community is frustrated that no traditional `.exe` installer exists. This blocks adoption in enterprise Windows environments.

**2. [Windows Codex app missing "control other devices" tab — #28919](https://github.com/openai/codex/issues/28919)**
44 comments · 42 👍 · Windows

Users report the Connections settings panel is incomplete on Windows, preventing device management. Many affected users are on Pro plans expecting full functionality.

**3. [Recurring scheduled tasks disable themselves after successful runs — #38350](https://github.com/openai/codex/issues/38350)**
40 comments · 0 👍 · Automation · Bug

A critical automation bug: scheduled tasks unexpectedly pause without user action. This breaks production workflows relying on recurring Codex tasks.

**4. [Allow to delete threads in the Codex app — #13018](https://github.com/openai/codex/issues/13018)** ✅ CLOSED
29 comments · 105 👍 · macOS · Enhancement

This feature request was resolved! Users can now permanently delete threads rather than just archiving them—a highly requested quality-of-life improvement.

**5. [Codex app accumulates stale subagents in cache/UI — #25179](https://github.com/openai/codex/issues/25179)**
21 comments · 3 👍 · macOS · Subagent Bug

Long-running sessions accumulate zombie subagents that cannot be reliably closed. Impacts power users managing complex multi-agent workflows.

**6. [[Windows] ChatGPT 26.820 fails with "invalid transport in mcp_servers.codex_app" — #40715](https://github.com/openai/codex/issues/40715)**
17 comments · 7 👍 · Windows · MCP

Regression in latest stable build (26.820). MCP server connections fail, breaking integrations. Beta 26.727 still works, indicating a recent regression.

**7. [Windows Desktop: completed threads remain "thinking"; new messages queue — #34026](https://github.com/openai/codex/issues/34026)**
14 comments · 0 👍 · Windows · Session

Threads freeze in "thinking" state after completion, and new messages queue locally without starting a turn. Users lose interactivity.

**8. [Native subagent orchestration broken with non-OpenAI custom providers — #17598](https://github.com/openai/codex/issues/17598)**
14 comments · 3 👍 · Custom Model · Subagent

Custom provider users cannot use native subagent orchestration. Limits flexibility for teams using third-party model endpoints.

**9. [Workspace terminal fails to start with "setup refresh had errors" — #39841](https://github.com/openai/codex/issues/39841)**
13 comments · 1 👍 · Windows · Terminal

The integrated terminal is completely broken for affected Windows users, blocking CLI-heavy workflows.

**10. [Code Mode `exec` doesn't fire `PreToolUse` hooks — #23411](https://github.com/openai/codex/issues/23411)**
9 comments · 3 👍 · Hooks · Tool Calls

A hook system bug where Code Mode's `exec` tool silently skips `PreToolUse` events, breaking security/audit workflows that depend on them.

---

### Key PR Progress

| PR | Summary |
|----|---------|
| **#40742** — [Prepare isolated Guardian reviewer sessions](https://github.com/openai/codex/pull/40742) | Adds policy prompts and output contracts for synchronous Guardian reviews with fallback model support. |
| **#40739** — [Add enterprise IdP identity resolution for MCP OAuth](https://github.com/openai/codex/pull/40739) | Enables enterprise identity provider sessions for MCP OAuth flows. |
| **#40737** — [Preserve MCP tool output as content items](https://github.com/openai/codex/pull/40737) | Converts MCP results to typed function-call output items instead of plain text serialization. |
| **#40728** — [Honor attachment-owned permissions for MCP servers](https://github.com/openai/codex/pull/40728) | MCP servers retain owner permission profiles instead of inheriting thread-wide sandbox authority. |
| **#40722** — [Add enterprise ID-JAG exchange for MCP OAuth](https://github.com/openai/codex/pull/40722) | Non-interactive exchange for enterprise ID-JAG tokens to obtain MCP bearer tokens. |
| **#40720** — [Preserve composer hyperlinks across wrapped lines](https://github.com/openai/codex/pull/40720) | Fixes OSC 8 hyperlink rendering in wrapped composer lines. |
| **#40718** — [Add Bazel repositories for pinned Codex releases](https://github.com/openai/codex/pull/40718) | Enables Bazel builds to consume checksum-pinned Codex release packages directly. |
| **#40713** — [Sanitize credentials from Git remote metadata](https://github.com/openai/codex/pull/40713) | Prevents credential leakage by sanitizing usernames/passwords from Git remote URLs in metadata. |
| **#40710** — [Add explicit remote executor connection refresh](https://github.com/openai/codex/pull/40710) | Allows forced reconnection for remote executors without waiting for transient-disconnect recovery. |
| **#39819** — [Add Tool Call Visibility as an Option](https://github.com/openai/codex/pull/39819) ✅ CLOSED | Restores `config.toml` option to control tool call visibility in TUI. |

---

### Feature Request Trends

Analysis of all open issues reveals these dominant themes:

| Theme | Description |
|-------|-------------|
| **Windows Platform Parity** | Users consistently report missing features, regressions, and failures on Windows vs. macOS—standalone installer, MCP reliability, terminal functionality. |
| **MCP Ecosystem** | Multiple issues around MCP server configuration, OAuth flows, permission models, and process management (especially on Windows). |
| **Context Window Expansion** | Request for 1M token context support for GPT-5.6 (#31868) reflects demand for larger context workflows. |
| **Subagent Reliability** | Issues with stale subagent cleanup, ghost rehydration, and orchestration with custom providers. |
| **Hook & Trust System** | Developers want finer control over hook execution, trust management for local IDE wrappers, and PreToolUse fidelity. |
| **Thread/Session Management** | Delete threads, handle server-deleted conversations, recover from corrupted session state. |
| **CLI Robustness** | Startup failures under file lock contention, session resume errors, and exec hook persistence issues. |

---

### Developer Pain Points

1. **Windows Reliability** — The Windows codebase is significantly less stable. Users encounter crashes (`chrome.dll`, `C0000005`), sandbox failures, relocation errors, and MCP transport issues. This is the highest-volume pain point.

2. **MCP Integration Fragility** — Model Context Protocol servers are breaking across platforms (Windows process leaks, invalid transport errors, missing tools on Remote SSH). Enterprise OAuth integration is still maturing.

3. **CLI Startup & Session State** — File lock contention on `logs_2.sqlite`, "already has an active writer" errors on resume, and mid-session exits are blocking automated workflows.

4. **Hook System Gaps** — `PreToolUse` hooks silently skipped in Code Mode, trusted project hooks bypassed by `codex exec`, and no clear trust mechanism for local IDE installers.

5. **Subagent Lifecycle Management** — Accumulated stale subagents, ghost rehydration of deleted agents, and inability to close orphaned agents plague long-running sessions.

6. **Update Cadence Concerns** — Some users report the app updates "too frequently," causing disruption in enterprise/stable environments.

---

*Generated 2026-08-26 · Data from github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-08-26

---

## Today's Highlights
The Gemini CLI ecosystem continues rapid maturation with v0.58.0-preview.0 introducing critical symlink handling fixes and multiple security improvements in the A2A server. Community engagement remains high around agent stability issues, particularly around subagent recovery and generalization hangs that have attracted significant discussion.

## Releases
**v0.58.0-preview.0** - Latest preview release featuring:
- Fixed inconsistent symlink evaluation in ignore path handling (`fix(core)`, @luisfelipe-alt)
- Updated changelog for v0.57.0-preview.0 (`@gemini-cli-robot`)
  
**v0.57.0** - Stable release with critical fixes:
- Fixed Cloud Workstations proxy redirect URI resolution for OAuth flows (`fix(core)`, @amelidev)
- Resolved directory mismatch issues in IDE connections (`fix(core)`, @amelidev)

**v0.56.0-nightly** - Nightly build improvements:
- Cleared stale cancellation errors in A2A server message processing (`fix(a2a-server)`, @amelidev)
- Declared top-level safety checkers in write policy configuration (`fix(core)`, @luisfelipe-alt)

---

## Hot Issues

### 1. **Subagent Recovery After MAX_TURNS** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
*13 comments, 2👍 | Priority: P1 | Status: Need Retesting*
**Why it matters:** Codebase investigator subagent incorrectly reports "GOAL" success after hitting maximum turn limits instead of actual analysis completion. This breaks task completion expectations for users analyzing repositories.

### 2. **Generalist Agent Hangs** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
*8 comments, 8👍 | Priority: P1 | Status: Bot Triaged*
**Why it matters:** Fundamental agent stability issue where Gemini CLI hangs indefinitely when delegating to generalist agents, even for simple operations like folder creation. Affects core functionality.

### 3. **Shell Command Execution Stuck** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
*4 comments, 3👍 | Priority: P1 | Status: Bot Triaged*
**Why it matters:** Shell commands complete but CLI interface remains stuck in "Waiting input" state, creating broken user experience and forcing command re-execution.

### 4. **Browser Agent Wayland Failures** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
*4 comments, 1👍 | Priority: P1 | Status: Need Retesting*
**Why it matters:** Browser subagent fails specifically on Wayland displays, preventing users on modern Linux desktops from using browser automation features.

### 5. **Zero-Dependency OS Sandboxing** [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
*8 comments, 1👍 | Priority: P2 | Status: Bot Triaged*
**Why it matters:** Epic effort to leverage Gemini 3 models' native bash proficiency via sandboxing while maintaining security and user experience.

### 6. **Browser Agent Ignores Settings Overrides** [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
*3 comments | Priority: P2 | Status: Bot Triaged*
**Why it matters:** Browser agent configuration from settings.json (e.g., maxTurns) is completely ignored, breaking user customization and expected behavior.

### 7. **Auto Memory Inbox Security Issues** [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)
*3 comments | Priority: P2 | Status: Bot Triaged*
**Why it matters:** Invalid memory patches silently skipped while extraction agent still processes them, creating security and reliability risks.

### 8. **400 Error with >128 Tools** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
*3 comments | Priority: P2 | Status: Bot Triaged*
**Why it matters:** Agent becomes unusable with tool-rich environments (>128 tools), suggesting poor tool management in complex setups.

### 9. **Gemini CLI Evaluation Test Flakiness** [#23313](https://github.com/google-gemini/gemini-cli/issues/23313)
*1 comment | Priority: P2 | Status: Bot Triaged*
**Why it matters:** Critical test had to be commented out, indicating fundamental reliability issues in steering evaluation system.

### 10. **Subagent Trajectory Sharing** [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)
*2 comments, 1👍 | Priority: P3 | Status: Bot Triaged*
**Why it matters:** Subagent execution trajectories aren't easily accessible via `/chat share`, limiting debugging and evaluation capabilities.

---

## Key PR Progress

### 1. **Dependency Updates & MCP Configuration** [#28955](https://github.com/google-gemini/gemini-cli/pull/28955)
*Priority: P1 | Size: XL*
Major dependency updates alongside MCP configuration improvements and ECC bundle integration, strengthening security and modernization.

### 2. **AbortSignal Forward Fix** [#29089](https://github.com/google-gemini/gemini-cli/pull/29089)
*Priority: P2 | Size: S*
Critical fix forwarding abortSignal to retryWithBackoff in BaseLlmClient, improving cancellation handling across session services.

### 3. **Extension Security & Consent** [#28863](https://github.com/google-gemini/gemini-cli/pull/28863)
*Size: M*
Prevents unauthorized environment variable injection during extension updates by enhancing consent strings and sanitization.

### 4. **IDE Companion Streaming Fix** [#29088](https://github.com/google-gemini/gemini-cli/pull/29088)
*Size: M*
Resolves `stop()` hangs in vscode-ide-companion when MCP streaming connections remain open, fixing critical extension deactivation issues.

### 5. **Concurrent Extension Install Prevention** [#29087](https://github.com/google-gemini/gemini-cli/pull/29087)
*Size: L*
Implements proper-lockfile coordination to prevent race conditions during extension installation/updates across processes.

### 6. **A2A Server Security Cleanup** [#29067](https://github.com/google-gemini/gemini-cli/pull/29067)
*Priority: P3 | Size: S*
Removes misleading security schemes and hardcoded credentials from A2A server, improving security posture.

### 7. **MCP OAuth SSRF Protection** [#29081](https://github.com/google-gemini/gemini-cli/pull/29081)
*Size: L*
Prevents Server-Side Request Forgery attacks in OAuth metadata discovery with RFC 9728 and 8414 compliance.

### 8. **Cross-Platform Test Improvements** [#28832](https://github.com/google-gemini/gemini-cli/pull/28832)
*Priority: P2 | Size: L*
Skippable environment-dependent tests on Windows with proper reasoning, improving CI reliability across platforms.

### 9. **Unsafe Git Diff Override Removal** [#28930](https://github.com/google-gemini/gemini-cli/pull/28930)
*Priority: P1 | Size: M*
Removes unsafe `diff.external` override causing workspace state mismatches, fixing environment consistency.

### 10. **Windows Longpath Documentation** [#28926](https://github.com/google-gemini/gemini-cli/pull/28926)
*Priority: P2 | Size: XS*
Adds Windows core.longpaths=true configuration to CONTRIBUTING.md, addressing 260-character path limit issues.

---

## Feature Request Trends

### 1. **Enhanced Agent Intelligence**
Multiple requests focus on making agents more context-aware and capable:
- AST-aware file reads and codebase mapping (#22745, #22746)
- Improved tool usage and skill utilization (#21968)
- Better subagent trajectory visibility and debugging (#22598)

### 2. **Security & Reliability Improvements**
High emphasis on robust security and error handling:
- Deterministic redaction and memory system security (#26525)
- Auto memory inbox validation and quarantine (#26523)
- SSRF protection in OAuth flows (#29081)
- Removal of hardcoded credentials and misleading security schemes (#29067)

### 3. **Cross-Platform Stability**
Focus on extending functionality across platforms:
- Wayland browser agent support (#21983)
- Windows line ending detection improvements (#28983)
- Windows path length configuration guidance (#28926)

### 4. **Performance & User Experience**
Optimizing core interactions:
- Zero-dependency OS sandboxing for better bash tool utilization (#19873)
- Mixed line ending detection refinement (#28983)
- Terminal resize performance improvements (#21924)

## Developer Pain Points

### 1. **Agent Instability & Unpredictability**
Most frequent frustration: agents hanging, incorrect status reporting, and inconsistent behavior across different scenarios. Issues like generalist agent hangs (#21409) and subagent recovery problems (#22323) dominate community concerns.

### 2. **Configuration & Customization Limitations**
Agents frequently ignore user configuration settings, particularly in browser agent overrides (#22267) and symlink handling for agent files (#20079). This creates broken expectations for customization.

### 3. **Security & Reliability Gaps**
Concerns around memory system security, potential for SSRF attacks, and silent failures in patch processing. The Auto Memory system shows multiple quality issues affecting trust.

### 4. **Tool Management Complexity**
Agents struggle with tool-heavy environments, hitting 400 errors with >128 tools (#24246). This suggests poor tool scoping and management in complex setups.

### 5. **Development Environment Friction**
Cross-platform issues, particularly Windows-specific challenges with path limits (#28926), test failures requiring special handling (#28832), and environment configuration complexities.

The community is actively working to address these pain points through targeted fixes in recent PRs, but agent stability and configuration reliability remain top priorities for users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

We are given data for the GitHub Copilot CLI repository (github.com/github/copilot-cli) for the date 2026-08-26.

We need to generate a structured English digest with the following sections:

1. **Today's Highlights** - 2-3 sentences summarizing the most important updates
2. **Releases** - If new versions exist, summarize changes; omit if none
3. **Hot Issues** - Pick 10 noteworthy Issues, explain why they matter and community reaction
4. **Key PR Progress** - Pick 10 important PRs, describe features or fixes
5. **Feature Request Trends** - Distill the most-requested feature directions from all Issues
6. **Developer Pain Points** - Summarize recurring developer frustrations or high-frequency requests

Let's break down the data:

## Latest Releases (last 24h)
- v1.0.81-10: 1.0.81-10
  **New**
  - The plugins dashboard is available to everyone: run `/plugin`, `/mcp`, or `/skills`. Set `PLUGINS_DASHBOARD=false` to opt out of it and the `copilot plugins` command.
  **Improved**
  - `x` is now the delete key everywhere: /sandbox config, /settings, /mcp, the sessions dialog and the diff co (note: the text is cut off, but we get the idea)

## Latest Issues (updated in last 24h)(Total: 44 items; showing top 30 by comment count)
We are shown a list of issues (with some truncated at the end). We note the top ones by comment count.

## Latest Pull Requests (updated in last 24h)(Total: 1 items)
- #4607 [CLOSED] Prepare public prerelease v1.0.81-11

Now, let's generate each section.

### 1. Today's Highlights
We have a new release (v1.0.81-10) that introduces the plugins dashboard and improves the delete key behavior. Also, note that there is a PR preparing for the next prerelease (v1.0.81-11). The most active issue by comment count is #13 (CLI input should have a vi/vim input mode) with 8 comments and 74 upvotes.

### 2. Releases
We have one new release: v1.0.81-10.
- New: Plugins dashboard available to everyone (via `/plugin`, `/mcp`, `/skills`), with an opt-out via `PLUGINS_DASHBOARD=false`.
- Improved: The `x` key now acts as delete in multiple places (sandbox config, settings, mcp, sessions dialog, diff).

### 3. Hot Issues
We are to pick 10 noteworthy issues from the list (which shows top 30 by comment count). We'll look for issues with high comment counts, high upvotes, or that are particularly relevant to recent updates.

From the list (showing top 30 by comment count, but note that the list is truncated in the provided data, so we have to use what we see):

We see:
- #13: 8 comments, 74 👍 (vi/vim input mode) - very high engagement
- #3709: 6 comments, 28 👍 (allow /model to switch between multiple models, including BYOK/local)
- #4035: 4 comments, 0 👍 (voice installer fails)
- #4492: 2 comments, 0 👍 (desktop app issue, but closed and moved to another repo)
- #4542: 2 comments, 1 👍 (workspace .mcp.json detected but not connected)
- #3380: 2 comments, 0 👍 (add --disable-repo-mcps flag)
- #645: 2 comments, 0 👍 (closed, but we don't have details)
- #4379: 1 comment, 1 👍 (browser canvas storage)
- ... and many others with 1 or 0 comments.

We'll pick the top 10 by comment count (or by a combination of comments and upvotes) from the provided list (even though the list is truncated, we have the top 30 by comment count, so we can take the first 10 that are open and relevant).

But note: the list shows 44 items total, and we are shown the top 30 by comment count. We can take the first 10 from the shown list (which are the top 30, so the first 10 are the highest by comment count).

However, note that some issues are closed (like #4492, #645, etc.) and we might want to focus on open issues for hot topics.

Let's list the open issues from the top of the list (by comment count) that we see:

1. #13: OPEN, 8 comments, 74 👍
2. #3709: OPEN, 6 comments, 28 👍
3. #4035: OPEN, 4 comments, 0 👍
4. #4492: CLOSED -> skip
5. #4542: OPEN, 2 comments, 1 👍
6. #3380: OPEN, 2 comments, 0 👍
7. #645: CLOSED -> skip
8. #4379: CLOSED -> skip
9. #3323: OPEN, 1 comment, 2 👍
10. #1153: OPEN, 1 comment, 2 👍
11. #3537: OPEN, 1 comment, 1 👍
12. #4268: OPEN, 1 comment, 0 👍
13. #4272: OPEN, 1 comment, 3 👍
14. #4560: OPEN, 1 comment, 0 👍
15. #4238: CLOSED -> skip
16. #831: CLOSED -> skip
... and so on.

We need 10. Let's take the top 10 open issues by comment count (from the list we have, skipping closed ones until we get 10 open ones).

From the top:

- #13: open, 8 comments
- #3709: open, 6 comments
- #4035: open, 4 comments
- #4542: open, 2 comments
- #3380: open, 2 comments
- #3323: open, 1 comment
- #1153: open, 1 comment
- #3537: open, 1 comment
- #4268: open, 1 comment
- #4272: open, 1 comment

But note: #4560 also has 1 comment and 0 👍, but we have enough.

However, we should also consider upvotes. For example, #13 has 74 upvotes, which is very high.

Let's pick 10 that are either high in comments or high in upvotes, and are open.

We'll go with:

1. #13: vi/vim input mode (8 comments, 74 upvotes) - highly requested feature for power users.
2. #3709: Allow /model to switch between multiple models, including BYOK/local (6 comments, 28 upvotes) - important for flexibility in model usage.
3. #4035: Voice installer fails (4 comments) - a blocker for voice mode installation.
4. #4542: Workspace .mcp.json detected but not connected (2 comments, 1 upvote) - MCP integration issue.
5. #3380: Add --disable-repo-mcps flag (2 comments) - MCP configuration control.
6. #3323: ask_user enum/oneOf fields should offer 'Other' (1 comment, 2 upvotes) - usability improvement for tool parameters.
7. #1153: Session-to-Repository Context Export (1 comment, 2 upvotes) - feature request for session portability.
8. #3537: Share sessions across machines and developers (1 comment, 1 upvote) - collaboration feature.
9. #4268: Regression: exit summary not shown (1 comment) - a regression that broke a useful feature.
10. #4272: New models greyed out (1 comment, 3 upvotes) - enterprise policy issue blocking new models.

But note: #4272 has 3 upvotes, which is higher than some others with 1 comment.

Alternatively, we could replace one of the 1-comment issues with #4560 (which has 1 comment and 0 upvotes) but #4272 has 3 upvotes so it's better.

However, note that the list we are given is truncated and we don't have the full top 30. But we are to pick from the provided data.

Let's stick to the ones we see in the provided list (the top 30 by comment count) and pick the top 10 open issues by comment count (and if tied, by upvotes).

From the provided list (in order):

1. #13: open, 8 comments, 74 upvotes
2. #3709: open, 6 comments, 28 upvotes
3. #4035: open, 4 comments, 0 upvotes
4. #4492: closed -> skip
5. #4542: open, 2 comments, 1 upvote
6. #3380: open, 2 comments, 0 upvotes
7. #645: closed -> skip
8. #4379: closed -> skip
9. #3323: open, 1 comment, 2 upvotes
10. #1153: open, 1 comment, 2 upvotes
11. #3537: open, 1 comment, 1 upvote
12. #4268: open, 1 comment, 0 upvotes
13. #4272: open, 1 comment, 3 upvotes
14. #4560: open, 1 comment, 0 upvotes
15. #4238: closed -> skip
... and then the rest are closed or have 0/1 comments.

So the top 10 open issues by comment count (taking the first 10 open ones we encounter) are:

1. #13
2. #3709
3. #4035
4. #4542
5. #3380
6. #3323
7. #1153
8. #3537
9. #4268
10. #4272

But note: #4272 has 3 upvotes and is the 13th in the list (by the order we see) but we are taking by comment count (all have 1 comment from #3323 onward). However, since we are limited to the provided data and we see #4272 in the list (it's the 13th item in the provided list of issues), we can include it as the 10th.

Alternatively, we can sort the open issues by comment count (descending) and then by upvotes (descending) and take top 10.

From the provided list, the open issues and their comment counts:

- #13: 8
- #3709: 6
- #4035: 4
- #4542: 2
- #3380: 2
- #3323: 1
- #1153: 1
- #3537: 1
- #4268: 1
- #4272: 1
- #4560: 1
- ... and others with 1 or 0.

So the top 5 by comment count are clear. Then for the next 5, we have many with 1 comment. We break ties by upvotes:

- #3323: 2 upvotes
- #1153: 2 upvotes
- #4272: 3 upvotes -> highest among the 1-comment ones
- #3537: 1 upvote
- #4268: 0 upvotes
- #4560: 0 upvotes

So the top 10 open issues (by comment count, then upvotes) would be:

1. #13 (8, 74)
2. #3709 (6, 28)
3. #4035 (4, 0)
4. #4542 (2, 1)
5. #3380 (2, 0)
6. #4272 (1, 3)   [because 3 upvotes is higher than 2]
7. #3323 (1, 2)
8. #1153 (1, 2)
9. #3537 (1, 1)
10. #4268 (1, 0)   [or #4560, but #4268 is a regression and might be more urgent]

But note: #4268 is a regression (exit summary not shown) which is a breakage, so it might be more important than #4560.

We'll go with:

1. #13
2. #3709
3. #4035
4. #4542
5. #3380
6. #4272   (because it has 3 upvotes, higher than the others with 1 comment)
7. #3323
8. #1153
9. #3537
10. #4268

Now, for each, we explain why they matter and community reaction (using the comment count and upvotes as a proxy for reaction).

### 4. Key PR Progress
We have only one PR updated in the last 24h: #4607 [CLOSED] Prepare public prerelease v1.0.81-11.

But note: the section says "Pick 10 important PRs", but we only have one. So we will list that one and note that there is only one.

However, the instruction says: "Pick 10 important PRs, describe features or fixes". If there are fewer than 10, we list what we have.

But note: the data shows "Total: 1 items" for PRs updated in last 24h.

So we have only one PR to report.

### 5. Feature Request Trends
We need to distill the most-requested feature directions from all Issues (not just the top 30, but we only have the top 30 by comment count). However, we can look for patterns in the issues we see.

From the issues:

- #13: vi/vim input mode -> keyboard navigation, modal editing
- #3709: model switching (BYOK/local) -> model flexibility
- #3380: disable repo MCPs -> MCP configuration control
- #3323: ask_user escape hatch -> tool parameter usability
- #1153: session context export -> session portability
- #3537: share sessions -> collaboration
- #4272: enable new models -> enterprise policy/UI
- #4560: model "auto" reasoning effort -> model configuration
- #4542: workspace mcp not connected -> MCP integration
- #4035: voice installer -> voice mode setup

Also, note there are issues about sessions (like #4268 regression, #4590, #4593) and MCP (many).

Trends:
- MCP (Model Context Protocol) integration and configuration is a hot topic (multiple issues: #3380, #4542, #4238 closed, etc.)
- Session management and portability (#1153, #3537, #4268, #4590, #4593)
- Model flexibility and configuration (#3709, #4272, #4560)
- Voice mode (#4035)
- Keyboard improvements (#13)
- Tool usability (#3323)

### 6. Developer Pain Points
Recurring frustrations or high-frequency requests:

- MCP setup and reliability (issues with loading, connecting, disabling)
- Session persistence and sharing (across machines, teams)
- Model selection and configuration (especially for BYOK/local and enterprise policies)
- Voice mode installation problems
- Need for better keyboard navigation (vim/vi mode)
- Regressions in existing features (like exit summary)
- Tool parameter flexibility (escape hatches for enum fields)

Now, let's write the digest.

Note: We must include GitHub links for each item in the issues and PRs sections.

Format for links: 
- For an issue: `github/copilot-cli Issue #<number>`
- For a PR: `github/copilot-cli PR #<number>`

But note: the data already gives the URL as `github/copilot-cli Issue #<number>` (without the full URL, but we can use that as the link text).

In the digest, we can write: [#13](github/copilot-cli Issue #13) but note the instruction says "Include GitHub links for each item", so we should use the format as in the data.

Actually, the data shows: `URL: github/copilot-cli Issue #13`

So in the digest, we can write: `github/copilot-cli Issue #13` as the link (meaning we are to use that string as the link, but in plain text we just write it

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-26

## 1. Today's Highlights
No new releases or pull requests in the last 24 hours. Two critical issues surfaced: a **silent data-loss bug** where `Edit`/`Write` tools report success but never persist changes to disk (macOS, v0.38.0), and a **context-compaction regression** causing completed tasks to be incorrectly reopened on Windows. Both are reproducible and block core workflows.

## 2. Releases
*None in the last 24 hours.*

## 3. Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2617](https://github.com/MoonshotAI/kimi-cli/issues/2617) | **Edit/Write tools report success but never write to disk (v0.38.0, macOS)** | Core file-mutation primitives are broken; users lose work silently. 100% reproducible since ~2026-08-25 17:00 UTC. | 2 comments, 0 👍 — early but high-severity; likely to attract more reports as users hit it. |
| [#2523](https://github.com/MoonshotAI/kimi-cli/issues/2523) | **Context compaction bug — Kimi Code reopens an already completed and deleted task (v0.6.3, Windows)** | Task-state corruption undermines trust in long-running sessions; compaction logic appears to resurrect deleted tasks. | 1 comment, 0 👍 — older issue (Jul 20) but updated today, suggesting renewed impact or regression. |

*Only two issues updated in the last 24h; both are high-impact functional regressions.*

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*

## 5. Feature Request Trends
*Insufficient new issue volume in the last 24h to extract trends. Historical patterns (from broader repo context) typically show demand for:*
- **Stable file-system operations** (atomic writes, better error surfacing)
- **Reliable context/session management** (compaction, checkpointing, cross-platform parity)
- **Improved diagnostics** (verbose logging for tool execution, structured error codes)

## 6. Developer Pain Points
1. **Silent tool failures** — `Edit`/`Write` returning success while doing nothing erodes confidence and causes data loss.
2. **Context-compaction instability** — Tasks reopening after deletion breaks mental models and wastes token budget.
3. **Cross-platform gaps** — macOS file-write regression and Windows compaction bug indicate insufficient platform matrix testing.
4. **Observability deficit** — No built-in way to audit tool I/O or compaction decisions, forcing users to guess root causes.

---

*Digest generated from GitHub data for `MoonshotAI/kimi-cli` covering 2026-08-25 00:00 – 2026-08-26 00:00 UTC. Links point to live issues; no PR or release activity recorded.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑08‑26**

---

### 1. Today’s Highlights  
- The latest **v1.18.23** release fixes Cloudflare AI Gateway routing for third‑party models and corrects Anthropic model IDs (dotted → dashed slugs).  
- Community attention is focused on a cluster of API‑gateway failures (Zen / Ox Alpha Free) that cause “Endpoint is unavailable” errors whenever a `tools` array is present, and on a regression that makes multi‑question tool calls in the TUI fail silently.  

---

### 2. Releases  
- **v1.18.23** (released 24 h ago) – core bug‑fixes for Cloudflare AI Gateway routing and Anthropic model ID normalization; no major feature additions.

---

### 3. Hot Issues  *(10 noteworthy items)*  

| # | Issue (link) | Why it matters | Community sentiment |
|---|--------------|----------------|---------------------|
| 1 | **[#44300](https://github.com/anomalyco/opencode/issues/44300)** – Zen API `x-preview-f-free` / `ox-alpha-free` returns “Endpoint is unavailable” for any request containing `tools`. | Breaks tool‑augmented chat for the free models on both the web console and Go client. | High‑impact, many comments (13) → urgent fix needed. |
| 2 | **[#33618](https://github.com/anomalyco/opencode/issues/33618)** – Qwen 3.7 Plus/Max via OpenRouter produce empty tool‑call names (`✗ ""`) and abort sessions. | Causes repeated retries and lost context for a popular model family. | Active discussion (10 comments) → regression likely in provider handling. |
| 3 | **[#44850](https://github.com/anomalyco/opencode/issues/44850)** – Ox Alpha Free fails with “Endpoint is unavailable” when OpenCode invokes a tool. | Same class of problem as #44300 but model‑specific; blocks workflows that rely on tool use. | 7 comments, clear reproducible steps. |
| 4 | **[#35434](https://github.com/anomalyco/opencode/issues/35434)** – Multi‑question tool calls in the TUI fail silently after v1.17.13 (regression from #34116). | Users cannot submit more than one question without restarting the app. | 7 comments, zero up‑votes → frustration evident. |
| 5 | **[#44910](https://github.com/anomalyco/opencode/issues/44910)** – Zen Go `/v1/responses` returns 500 for all non‑DeepSeek models while `/v1/chat/completions` works. | Indicates a broken response‑generation path in the Go gateway, affecting all non‑DeepSeek providers. | 2 comments, but the symptom is widespread. |
| 6 | **[#43277](https://github.com/anomalyco/opencode/issues/43277)** – Sessions become permanently stuck (refusing new messages) and survive system reboots. | Leads to data loss and requires manual reset; impacts reliability. | 5 comments, no up‑votes, but severity is high. |
| 7 | **[#45087](https://github.com/anomalyco/opencode/issues/45087)** – Auto‑updater repeatedly reinstalls OpenCode, inflating `~/.npm/_cacache` to 266 GB. | Consumes massive disk space and keeps an outdated binary in memory. | 4 comments, critical for long‑running services. |
| 8 | **[#43355](https://github.com/anomalyco/opencode/issues/43355)** – Desktop UI freezes after an assistant turn finishes; renderer stuck in a `ResizeObserver` loop. | Makes the app unusable until forced quit, affecting daily productivity. | 2 comments, reproducible on Electron v1.18.18. |
| 9 | **[#45105](https://github.com/anomalyco/opencode/issues/45105)** – Changing API settings produces an “Invalid API key” error even when using the free tier. | Users lose access to free models after accidental configuration changes. | 2 comments, high‑impact for newcomers. |
|10| **[#44958](https://github.com/anomalyco/opencode/issues/44958)** – Refusal responses are hidden and conversation history disappears in the Go client. | Users see no feedback when a request is refused, leading to confusion and retries. | 3 comments, UI‑visibility issue. |

---

### 4. Key PR Progress  *(10 important PRs)*  

| # | PR (link) | Main contribution |
|---|-----------|-------------------|
| 1 | **[#45108](https://github.com/anomalyco/opencode/pull/45108)** – Add native **Groq** and **DeepInfra** providers (first‑class support). |
| 2 | **[#45107](https://github.com/anomalyco/opencode/pull/45107)** – Treat markerless directories as independent OpenCode projects with deterministic IDs. |
| 3 | **[#45106](https://github.com/anomalyco/opencode/pull/45106)** – Stream running shell tool output in the desktop UI without altering core/server logic. |
| 4 | **[#45100](https://github.com/anomalyco/opencode/pull/45100)** – Fix TUI transcript reporting when the final user message is clipped by one terminal row. |
| 5 | **[#45103](https://github.com/anomalyco/opencode/pull/45103)** – Enable opening existing Desktop sessions via deep‑link URLs (`opencode://open-session?...`). |
| 6 | **[#44845](https://github.com/anomalyco/opencode/pull/44845)** – Make Core test suite hermetic by isolating host configuration, credentials, and temporary files. |
| 7 | **[#45098](https://github.com/anomalyco/opencode/pull/45098)** – Add native **Cerebras** and **Together AI** providers (first‑class support). |
| 8 | **[#45094](https://github.com/anomalyco/opencode/pull/45094)** – Preserve provider‑defined response item IDs (function‑call, hosted‑tool, etc.) across validation steps. |
| 9 | **[#45002](https://github.com/anomalyco/opencode/pull/45002)** – Introduce an internal plugin that repairs malformed tool arguments before validation. |
|10| **[#45086](https://github.com/anomalyco/opencode/pull/45086)** – Support **Azure CLI** authentication for the Azure provider (Entra ID via existing Azure CLI session). |

---

### 5. Feature Request Trends  

- **Search & Navigation** – Repeated requests for **message search (Cmd+F / Ctrl+F)** in the Desktop app (#19143) and for a **cost indicator in the model picker** (#14524).  
- **Language Localization** – Calls for **Hebrew (he) locale** support (#42447) and broader i18n improvements.  
- **Session Management** – Users want **deep‑link opening of existing sessions** (#45103) and better handling of **stuck sessions** that survive reboots (#43277).  
- **Provider Expansion** – A clear momentum toward **additional first‑class AI providers** (Groq, DeepInfra, Cerebras, Together AI, Azure CLI) as seen in several PRs and open issues.  
- **Tooling & UX** – Issues focus on **reliable tool call handling** (multi‑question failures, silent tool‑call errors) and **transparent UI feedback** (cost display, refusal responses, log visibility).  

---

### 6. Developer Pain Points  

- **Unreliable API‑Gateway endpoints** – Multiple reports (#44300, #44850, #44910) of “Endpoint is unavailable” or 500 errors when `tools` are used, breaking tool‑augmented workflows.  
- **Silent or hidden failures** – Multi‑question tool calls (#35434), refusal responses (#44958), and hidden log rotation problems (#17846) impede debugging.  
- **Resource‑heavy auto‑update loops** – The auto‑updater (#45087) consumes dozens of gigabytes of cache and keeps stale binaries in memory.  
- **UI freezes & rendering loops** – Renderer `ResizeObserver` loops (#43355) and IME composition bugs (#39632) cause complete app unresponsiveness.  
- **Configuration & permission mishaps** – Changing API settings can invalidate the free‑tier key (#45105) and permission‑related test failures (#45095) break CI pipelines.  
- **Session persistence** – Sessions getting “permanently stuck” (#43277, #43355) and workspace directories locking to the wrong folder (#33995) hinder reproducibility.  

---

*All links point to the official GitHub repository anomalyco/opencode. Stay tuned for the next community update!*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-26

## Today's Highlights

The Pi project saw intense activity around provider integrations and terminal rendering fixes. Key developments include a new **Opper provider** landing in PR #8639, resolution of a streaming corruption bug that caused assistant text to render one word per line (Issue #8584), and multiple PRs addressing context window handling for small models and vision-capable endpoints. The community continues to grapple with Windows-specific tooling issues, particularly around PowerShell and bundled CLI extension loading.

---

## Releases

**No new releases in the last 24 hours.** The last stable release remains v0.84.3.

---

## Hot Issues

1. **[#7547](https://github.com/earendil-works/pi/issues/7547)** — **[OPEN] [Windows] How do you use Pi on Windows? What issues are you seeing?**
   - **Why it matters:** This meta-issue aims to consolidate Windows usage patterns and pain points, as the community recognizes that Windows developers represent a large, underserved segment. With 49 comments, it's the most-discussed issue in the past period.
   - **Community reaction:** Developers are sharing diverse setups (WSL, native, Docker) and specific blockers, helping maintainers prioritize Windows-specific improvements.

2. **[#8584](https://github.com/earendil-works/pi/issues/8584)** — **TUI row corruption during streaming: assistant text rendered one word per line**
   - **Why it matters:** This bug severely degraded TUI usability when tool output contained long lines, causing garbled streaming output. Closed with a fix, it highlights rendering edge cases under stress.
   - **Community reaction:** Users reported consistent reproduction; the issue generated 9 comments and 5 thumbs-ups, indicating widespread impact.

3. **[#5886](https://github.com/earendil-works/pi/issues/5886)** — **AgentSession settlement/continuation and assistant-tail lifecycle bugs**
   - **Why it matters:** This meta-issue tracks a recurring class of bugs where post-run logic attempts to continue an agent from a stale transcript, leading to inconsistent behavior. It remains open, signaling ongoing architectural challenges.
   - **Community reaction:** Developer mitsuhiko filed this after encountering multiple related failures, drawing attention to systemic lifecycle management issues.

4. **[#7855](https://github.com/earendil-works/pi/issues/7855)** — **Pi stops with "Response was truncated before completion."**
   - **Why it matters:** Truncation errors force users to manually prompt the agent to continue, breaking automation workflows. The issue was observed with OpenAI-compatible APIs (tested on local VLLM), suggesting a broad compatibility concern.
   - **Community reaction:** 7 comments and 4 thumbs-up; users reported random occurrence, making it difficult to debug.

5. **[#8582](https://github.com/earendil-works/pi/issues/8582)** — **Built-in PowerShell tool uses Windows PowerShell 5.1 in interactive mode, but pwsh in -p mode**
   - **Why it matters:** On Windows with PowerShell 7 installed, the tool incorrectly falls back to the older PowerShell 5.1 in interactive mode, causing compatibility issues with modern scripts.
   - **Community reaction:** 6 comments; a clear bug with a reproducible scenario on Windows 11.

6. **[#8468](https://github.com/earendil-works/pi/issues/8468)** — **GitHub Copilot fails with timeout**
   - **Why it matters:** GitHub Copilot integration failures prevent users from leveraging this popular service within Pi, impacting productivity for developers with existing Copilot subscriptions.
   - **Community reaction:** 6 comments; users noted this was blocking until a recent PR (#8254) was included in a release.

7. **[#7049](https://github.com/earendil-works/pi/issues/7049)** — **Upgrade Undici to 8.8.0 for correct plain-HTTP proxy forwarding**
   - **Why it matters:** The pinned Undici version caused incorrect proxy tunneling behavior, breaking plain HTTP requests through HTTP proxies. The fix ensures proper CONNECT tunneling.
   - **Community reaction:** 5 comments; a low-level networking fix affecting enterprise environments with proxy requirements.

8. **[#6596](https://github.com/earendil-works/pi/issues/6596)** — **[inprogress] fix: spawn(taskkill) ENOENT on Node.js 24 — use absolute System32 path + error event handler**
   - **Why it matters:** Node.js 24 compatibility issues are emerging as the runtime advances; the `taskkill` spawn fails with ENOENT, breaking process termination on the latest Node versions.
   - **Community reaction:** 5 comments; marked "inprogress," indicating active development.

9. **[#8456](https://github.com/earendil-works/pi/issues/8456)** — **Gemini 3.7 Flash rejects /tree branch summarization with MINIMAL thinking**
   - **Why it matters:** The built-in branch-summary request doesn't include reasoning parameters, causing Gemini 3.7 Flash to reject the request due to unsupported MINIMAL thinking level.
   - **Community reaction:** 4 comments and 2 thumbs-up; a provider-specific adapter bug.

10. **[#6600](https://github.com/earendil-works/pi/issues/6600)** — **[bug, inprogress] pi update --extensions blocks npm scripts with new npm 11.16.0**
    - **Why it matters:** npm 11.16.0 changed defaults to block install scripts, breaking Pi's extension update workflow. Users face a non-obvious workaround.
    - **Community reaction:** 4 comments; marked "inprogress," showing active attention to npm compatibility.

---

## Key PR Progress

1. **[#8639](https://github.com/earendil-works/pi/pull/8639)** — **feat(ai): add Opper provider** (CLOSED)
   - Adds Opper (`api.opper.ai`) as a new built-in OpenAI-compatible provider, including provider module, model catalog, registration, environment key, default model, and docs.

2. **[#8642](https://github.com/earendil-works/pi/pull/8642)** — **fix(ai): hoist Bedrock tool result images out of toolResult for OpenAI models** (CLOSED)
   - Resolves a breaking issue where OpenAI models on Bedrock reject images nested in `toolResult.content`. Images are now hoisted to sibling content blocks.

3. **[#8650](https://github.com/earendil-works/pi/pull/8650)** — **fix(ai): omit Responses tool_choice when no tools are sent** (CLOSED)
   - Fixes compaction failures on xAI's Grok model by omitting `tool_choice` when no tools are provided, aligning with Chat Completions behavior.

4. **[#8623](https://github.com/earendil-works/pi/pull/8623)** — **fix(coding-agent): stop counting trailing newline as a line in read tool** (CLOSED)
   - Fixes an off-by-one bug where file line counts were inflated for files ending with a newline. Visible in truncation notices and continuation hints.

5. **[#8629](https://github.com/earendil-works/pi/pull/8629)** — **feat: Add eager tool execution** (CLOSED)
   - Introduces opt-in eager execution for finalized, discard-safe tool calls. V1 targets local `read` calls at `toolcall_end` for improved responsiveness.

6. **[#8627](https://github.com/earendil-works/pi/pull/8627)** — **fix(coding-agent): use ctx.cwd for cwd-sensitive tools when available** (CLOSED)
   - Ensures path-sensitive tools (read, write, edit, grep, etc.) resolve paths against the session's current working directory when available, improving extension compatibility.

7. **[#8614](https://github.com/earendil-works/pi/pull/8614)** — **fix(ai): derive OpenRouter reasoning controls** (CLOSED)
   - Fixes reasoning control derivation for OpenRouter models, ensuring proper thinking budget and effort settings.

8. **[#8570](https://github.com/earendil-works/pi/pull/8570)** — **fix(ai): preserve Codex thread affinity headers** (CLOSED)
   - Adds the missing `thread-id` affinity header to OpenAI Codex Responses requests, ensuring stable session handling.

9. **[#8635](https://github.com/earendil-works/pi/pull/8635)** — **fix(ai): preserve aborted stop reason during lazy setup** (OPEN)
   - Passes the request abort signal through lazy stream setup wrappers, reporting setup failures as aborted when the signal is already aborted.

10. **[#8547](https://github.com/earendil-works/pi/pull/8547)** — **feat(tui): move editor cursor on click** (OPEN)
    - Enables clicking inside the prompt buffer to move the editor cursor, improving mouse-based navigation in the TUI.

---

## Feature Request Trends

Analysis of all open and recently closed issues reveals the following dominant feature directions:

1. **Provider Expansion & Compatibility** — Requests for new providers (e.g., SiliconFlow in #4742, Opper now shipped) and fixes for existing providers (Bedrock images, Codex affinity, OpenRouter reasoning controls) indicate strong demand for broader model ecosystem support.

2. **Windows Development Experience** — Multiple issues (#7547, #8582) highlight Windows as a pain point. The community seeks first-class Windows support, consistent PowerShell integration, and better bundled CLI behavior.

3. **Streaming & Rendering Robustness** — Several issues address TUI streaming corruption (#8584, #8619), image rendering in full-screen mode (#8306), and Mermaid/LaTeX rendering in HTML exports (#8041). Streaming reliability remains a key concern.

4. **Vision & Media Handling** — Issues like #8636 (image budget exceeded), #8617 (Codex file references), and #8483 (DeepSeek vision model) indicate growing focus on multimodal workflows and media budget management.

5. **Agent Lifecycle & Session Management** — Meta-issues like #5886 and RPC improvements (#8432) suggest the community wants more control over agent session continuation, abort handling, and queue management.

6. **Context Window & Compaction Intelligence** — Multiple PRs (#8651, #8652, #8653) address smarter compaction, context window scaling, and token budget handling—critical for long-running agent sessions.

---

## Developer Pain Points

1. **Streaming Corruption** — The TUI word-per-line bug (#8584, #8619) frustrated users, especially when tool output contained long lines. This is a high-visibility UX regression.

2. **Extension Loading Failures** — Issue #8620 reports that bundled CLI v0.84.3 breaks all global extensions importing from `@earendil-works/pi-coding-agent`, `@earendil-works/pi-tui`, or `@earendil-works/pi-agent-core`. This is a release-blocking regression for extension authors.

3. **Response Truncation** — The "Response was truncated before completion" error (#7855) forces manual intervention, breaking automated workflows and causing confusion.

4. **npm 11.16.0 Compatibility** — The `pi update --extensions` command (#6600) breaks with npm's new script-blocking default, creating a confusing failure mode for extension updates.

5. **Git Integration Hang** — Issue #6432 reports Pi hanging during git rebase interactive after merge conflict resolution, indicating deeper git tool integration issues.

6. **Tool Result Image Accumulation** — Issue #8636 reveals that accumulated `toolResult` images eventually trigger `media_budget_exceeded` errors on vision-capable models, bricking long sessions.

7. **PowerShell Version Inconsistency** — The PowerShell tool behaves differently in interactive vs. print modes (#8582), confusing Windows developers expecting consistent behavior.

8. **Copilot Timeout** — GitHub Copilot integration failures (#8468) prevent users from leveraging existing Copilot subscriptions within Pi, a high-value integration gap.

---

*Digest generated from GitHub data for [badlogic/pi-mono](https://github.com/earendil-works/pi). For the full issue and PR list, visit the [repository](https://github.com/earendil-works/pi).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here's a thinking process:

1.  **Analyze User Request:**
   - Role: Technical analyst focused on AI developer tools
   - Task: Generate Qwen Code community digest for 2026-08-26
   - Data source: GitHub data for github.com/QwenLM/qwen-code
   - Output format: Structured English digest with specific sections
   - Style: Concise, professional, suited for technical developers
   - Include GitHub links for each item

2.  **Examine the Data:**
   - Latest Releases (last 24h): v0.22.0-nightly.20260825.22bb5e8b9f with 2 fixes (web-shell session workspace cwd, and a truncated fix description)
   - What's Changed: 2 fixes listed, one about web-shell passing session workspace cwd, another cut off
   - Latest Issues (updated in last 24h): Total 50 items, showing top 30 by comment count. I need to pick 10 noteworthy ones.
   - Latest Pull Requests (updated in last 24h): Total 50 items, showing top 20 by comment count. Need to pick 10 important ones.
   - Also there's metadata about dates, but I need to focus on the 2026-08-26 digest context.

   Let me carefully extract and categorize:

   **Releases**: 
   - v0.22.0-nightly.20260825.22bb5e8b9f released. Changes: fix(web-shell): pass session workspace cwd when opening from overview panel; fix(web-shell): (truncated). I'll note the release and the visible fix.

   **Issues (top 30 by comment count, updated last 24h)**:
   I need to pick 10 noteworthy ones. Let's list the ones with comments and relevance:
   - #9459 [CLOSED] P1 bug /effort max bricks session on OpenAI-compatible providers - 10 comments. Important reliability/bug.
   - #8097 [OPEN] P2 bug multi-agent coordination gap - 8 comments. Multi-agent coordination.
   - #6762 [OPEN] P2 feature request Skill Context Lifecycle Management - 6 comments. Feature for skill management.
   - #9198 [OPEN] P2 bug qwen OOM issue - 6 comments. OOM, memory usage.
   - #9309 [CLOSED] P3 bug compression incorrect - 6 comments. Context compression.
   - #6094 [CLOSED] P2 bug cron/blockStreaming - 6 comments. Integration bug.
   - #5823 [OPEN] P2 bug/feature /loop cron tasks fire silently - 5 comments. Cron visibility.
   - #8227 [OPEN] P2 bug Windows validated @-file reads lose O_NOFOLLOW - 5 comments. Windows security/file ops.
   - #10000 [OPEN] duplicate find-simplifications candidate ledger - 5 comments. Skill feature.
   - #9375 [CLOSED] P3 [find-simplifications] candidate ledger - 5 comments. Related.
   - #4055 [OPEN] P2 bug qc loop thinking without reply - 4 comments. UX/loop bug.
   - #10051 [OPEN] P3 feature Native DAP Integration - 4 comments. Debug adapter protocol.
   - #10027 [CLOSED] P2 bug DeepSeek vision drops image_url - 4 comments. Vision model bug.
   - #9827 [CLOSED] P2 bug permissions.allow doesn't restrict tool schemas - 4 comments. Security/permissions.
   - #9733 [OPEN] P2 bug loop detection false-positives - 4 comments. Loop detection kills unattended turns.
   - #9230 [CLOSED] P2 bug follow-up suggestion defeats prefix caching - 4 comments. Caching issue.
   - #7167 [OPEN] P0 Fleet Shepherd Dashboard - 3 comments. Bot fleet metadata.
   - #10052 [CLOSED] - 3 comments. CI bot.
   - #9784 [OPEN] P0 /review run whole pipeline in fork subagent - 3 comments. Review pipeline.
   - #9821 [CLOSED] P2 bug native slash commands missing - 3 comments. Commands.
   - #9757 [CLOSED] P2 bug Auto Mode classifier unavailable with OpenRouter - 3 comments. Auto mode.
   - #9989 [CLOSED] type/bug CI accidental artifact - 3 comments. CI.
   - #10057 [OPEN] P2 review cleanup prefix sweep deletes concurrent artifacts - 2 comments. Review cleanup.
   - #10056 [OPEN] P2 bug MCP tool call hangs indefinite on Windows - 2 comments. MCP/SSE.
   - #10035 [OPEN] P2 ci prevent ENOSPC on self-hosted runners - 2 comments. CI infrastructure.
   - #10019 [OPEN] P3 ci extract shared ossutil install composite action - 2 comments. CI actions.
   - #9902 [CLOSED] P2 /review incremental-review anchor lost - 2 comments. Review incremental.
   - #10015 [OPEN] P3 telemetry context usage breakdown - 2 comments. Telemetry.
   - #10014 [OPEN] P2 fix web-shell sidebar drawer container - 2 comments. WebShell UI.
   - #9481 [CLOSED] P2 ci Windows lane red - 2 comments. Windows CI.

   I'll pick 10 that are most noteworthy for a community digest, focusing on open/active, high impact, or trending. I'll note comment count and why they matter.

   **Pull Requests (top 20 by comment count, updated last 24h)**:
   - #9988 feat(web-shell): add session token usage panel - undefined comments. Token usage panel.
   - #9659 [autofix/takeover] feat(review): content-anchored incremental rounds - undefined. Review incremental rounds.
   - #9717 [autofix/takeover] feat(review): add prose-execution audit and counter-frame audit - undefined. Review audits.
   - #10055 fix(ci): run autofix scan lane on persistent pool - undefined. CI persistent pool.
   - #9969 fix(core): accept contained symlinks in older-Git archive fallback - undefined. Git archive symlinks.
   - #8583 [autofix/takeover] feat(web-shell): add experimental session workflow cockpit - undefined. Session workflow.
   - #10050 fix(ci): yield event loop between script tests - undefined. Vitest RPC timeouts.
   - #9768 [autofix/takeover] feat(review): make coverage a sealed classified ledger - undefined. Review coverage ledger.
   - #10049 [review/self-reported] feat(skills): namespace extension skill registry keys - undefined. Skill namespace.
   - #9974 [autofix/takeover] fix(core): three run-lifecycle defects - undefined. Run lifecycle defects.
   - #10032 fix(core): scan archived sessions in findSessionTitlesByPrefix - undefined. Session title scanning.
   - #9769 [autofix/takeover] feat(web-shell): unblock git update on dirty working tree - undefined. Git dirty tree.
   - #9260 fix(web-shell): keep manual session name across /clear - undefined. Session name persistence.
   - #9980 [autofix/takeover] feat(providers): load model recommendations before editing - undefined. Model recommendations.
   - #8927 [review/self-reported, autofix/needs-human] feat(channels): bound session lifetime with sessionRotation - undefined. Session rotation.
   - #9305 [autofix/needs-human] fix(ui): bottom-align short VP content - undefined. UI alignment.
   - #9761 [autofix/takeover, autofix/needs-human] feat(review): keep deferred suggestions recoverable - undefined. Deferred suggestions.
   - #10016 feat(telemetry): Emit context usage span attribute - undefined. Telemetry span.
   - #9940 [autofix/takeover, review/self-reported] fix(reply carried findings into their thread - undefined. Review findings thread.

   Again, I'll pick 10 that seem most significant or trending for the digest.

   **Feature Request Trends**: I need to distill most-requested feature directions from all Issues. Looking at the issues, I see trends: multi-agent coordination, skill/context lifecycle, Windows compatibility, CI/runtime stability, web-shell UI/usability, debugging/DAP, permissions/tooling restrictions, compression/caching, session management, telemetry/context tracking.

   **Developer Pain Points**: Recurring frustrations: loop detection killing turns, OOM on long runs, cron/scheduled tasks firing silently, Windows file operation quirks, permissions allowlist not restricting actual API requests, context compression issues, prefix cache misses, session name loss, loop detection false positives, etc.

   Now, I need to structure the digest as requested:
   1. Today's Highlights (2-3 sentences)
   2. Releases (summarize changes or omit if none - but there is a nightly, so include)
   3. Hot Issues (10 noteworthy issues, explain why they matter + community reaction, include GitHub links)
   4. Key PR Progress (10 important PRs, describe features/fixes, include links)
   5. Feature Request Trends (distill most-requested directions from all issues)
   6. Developer Pain Points (summarize recurring frustrations/high-frequency requests)

   I need to make sure each issue/PR has a GitHub link. The data already has URLs in format `QwenLM/qwen-code Issue #9459` etc. I'll use those.

   Let me map out the 10 issues I'll pick:
   1. #9459 - /effort max bricks session on OpenAI-compatible providers (P1 bug, 10 comments) - critical reliability
   2. #8097 - Background agent coordination gap: duplicate work, premature completion (P2, 8 comments) - multi-agent health
   3. #6762 - Skill Context Lifecycle Management feature request (P2, 6 comments) - skill management long-term
   4. #9198 - qwen OOM issue on 1T server (P2, 6 comments) - stability/memory
   5. #9309 - Compression incorrect after fast then full compress (P3, 6 comments) - context management
   6. #5823 - /loop cron tasks fire silently with no visibility (P2, 5 comments) - cron visibility
   7. #8227 - Windows validated @-file reads lose O_NOFOLLOW (P2, 5 comments) - Windows compatibility
   8. #10051 - Native DAP Integration for agentic runtime debugging (P3, 4 comments) - debugging tooling
   9. #9733 - Loop detection false-positives on verification cycles kills unattended turns (P2, 4 comments) - automation reliability
   10. #9827 - permissions.allow does not restrict tool schemas sent to model (P2, 4 comments) - security/permissions

   For PRs, I'll pick 10:
   1. #9988 - feat(web-shell): add session token usage panel
   2. #9659 - feat(review): content-anchored incremental rounds for local review-fix loop
   3. #9717 - feat(review): add prose-execution audit and counter-frame audit
   4. #10055 - fix(ci): run autofix scan lane on persistent pool
   5. #9969 - fix(core): accept contained symlinks in older-Git archive fallback
   6. #8583 - feat(web-shell): add experimental session workflow cockpit
   7. #10050 - fix(ci): yield event loop between script tests to avoid vitest RPC timeouts
   8. #9768 - feat(review): make coverage a sealed classified ledger
   9. #10049 - feat(skills): namespace extension skill registry keys by extension name
   10. #9974 - fix(core): three run-lifecycle defects that silently cost a run

   Feature Request Trends: I'll analyze the issue summaries to extract directions: multi-agent coordination & session management, skill/context lifecycle & compression, Windows cross-platform parity, debugging & DAP integration, CI/runtime stability & caching, web-shell UI/UX enhancements, permission/tool restriction transparency, loop detection & automation safety, review pipeline incrementalism, telemetry & context tracking.

   Developer Pain Points: loop detection false positives killing turns, OOM on long-running sessions, cron tasks firing silently without visibility, Windows file op quirks losing O_NOFOLLOW, permissions allowlist not filtering actual API tool schemas, context compression losing fidelity, prefix caching not being utilized effectively for main session, session name/persistence losing across /clear, review anchors lost after failed rounds, DPA/unavailable classifiers with third-party providers, etc.

   I need to format it cleanly, concisely, professionally, with GitHub links. I'll use the exact issue/PR numbers and URLs as given. I'll make sure dates/context align with "2026-08-26" digest.

   Let's draft each section mentally:

   **Today's Highlights**: 
   The v0.22.0-nightly.20260825.22bb5e8b9f release lands two web-shell cwd fixes, while the issue surge highlights acute multi-agent coordination failures, Windows file-operation quirks, and persistent OOM conditions on large contexts. Community attention is split between reliability hotspots (loop detection, cron visibility) and incremental tooling (token panels, skill namespace).

   **Releases**: 
   - v0.22.0-nightly.20260825.22bb5e8b9f (released 2026-08-25)
     - fix(web-shell): pass session workspace cwd when opening from overview panel
     - fix(web-shell): [truncated second fix]
   Link: https://github.com/QwenLM/qwen-code/releases/tag/v0.22.0-nightly.20260825.22bb5e8b9f (or just the commit/rel note link; the data shows "Release v0.22.0-nightly.20260825.22bb5e8b9f" under Latest Releases, I'll reference it properly)

   **Hot Issues**: I'll list 10 with brief why matter + community reaction (comment count, sentiment implied). I'll format as bullet points with link.

   **Key PR Progress**: 10 bullet points with descriptions and links.

   **Feature Request Trends**: Paragraph or bullet list distilling directions.

   **Developer Pain Points**: Paragraph summarizing recurring frustrations.

   I need to ensure I don't hallucinate comment counts beyond what's in the data. The data shows comments for each issue. I'll use those.

   Let's verify the issue URLs format: `URL: QwenLM/qwen-code Issue #9459` - I'll construct proper GitHub URLs as `https://github.com/QwenLM/qwen-code/issues/9459`.

   Same for PRs: `https://github.com/QwenLM/qwen-code/pull/9988`.

   Now, I'll write the digest. I'll be careful to keep it concise, technical, and well-structured.

   One thing: The "Latest Issues (updated in last 24h)(Total: 50 items; showing top 30 by comment count)" - I need to pick 10 from the top 30 by comment count, but the list shows top 30, and I need to pick 10 noteworthy. I'll pick based on a mix of comment count, priority, and relevance.

   Let's double-check comment counts from the data:
   - #9459: Comments: 10
   - #8097: Comments: 8
   - #6762: Comments: 6
   - #9198: Comments: 6
   - #9309: Comments: 6
   - #6094: Comments: 6
   - #5823: Comments: 5
   - #8227: Comments: 5
   - #10000: Comments: 5
   - #9375: Comments: 5
   - #4055: Comments: 4
   - #10051: Comments: 4
   - #10027: Comments: 4
   - #9827: Comments: 4
   - #9733: Comments: 4
   - #9230: Comments: 4
   - #7167: Comments: 3
   - #10052: Comments: 3
   - #9784: Comments: 3
   - #9821: Comments: 3
   - #9757: Comments: 3
   - #9989: Comments: 3
   - #10057: Comments: 2
   - #10056: Comments: 2
   - #10035: Comments: 2
   - #10019: Comments: 2
   - #9902: Comments: 2
   - #10015: Comments: 2
   - #

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

User Safety: safe

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*