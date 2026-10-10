# AI CLI Tools Community Digest 2026-10-10

> Generated: 2026-10-10 03:25 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report – AI CLI Ecosystem (2026‑10‑10)

## 1. Ecosystem Overview

The AI CLI landscape in late 2026 is characterized by rapid iteration across specialized domains—from open‑source model ecosystems (Claude Code, Qwen Code) to commercial‑grade deployments (Gemini CLI, OpenAI Codex) and lightweight terminal utilities (DeepSeek TUI, Pi). Each project targets distinct user personas: power users seeking extensibility (Claude Code, Qwen Code), enterprise teams needing secure, auditable workflows (Gemini CLI, Pi), and developers prioritizing terminal ergonomics and low‑latency interactions (DeepSeek TUI, Pi). Overall activity remains high, with most projects releasing nightly or weekly patches to address stability regressions, security hardening, and feature parity across platforms.

## 2. Activity Comparison

| Tool | Issues (Last 24 h) | PRs (Last 24 h) | Release Status |
|------|--------------------|-----------------|----------------|
| **Claude Code** | 10 (e.g., #29214, #56281, #100114, #100960, #100955, #99252, #100545, #74004) | 10 (e.g., #41447, #100293, #85716, #84747, #84711, #84647, #84365, #84364) | Latest stable v2.1.296; active maintenance branch |
| **OpenAI Codex** | 10 (e.g., #49988, #48500, #50526, #29922, #50127, #50870, #50168, #46744, #49789, #51731) | 10 (e.g., #52756, #52748, #52742, #52748, #84747, #84711, #84647, #84365, #84364) | v0.162.1 (stable); v0.163.0‑alpha.5/4 in flight |
| **Gemini CLI** | 10 (e.g., #22323, #19873, #21409, #22745, #21968, #22267, #21983, #21000, #24246, #23571) | 10 (e.g., #29611, #29608, #29606, #29607, #29644, #29617, #29606, #29672, #29696, #29683) | v0.65.0‑nightly.20261010; v0.64.0‑preview.1 |
| **Pi** | 10 (e.g., #7547, #10480, #8643, #9773, #6300, #10497, #10645, #10606, #10082, #10754) | 10 (e.g., #10751, #10747, #10672, #10745, #9126, #10739, #10730, #10726, #10718, #10715) | No new releases; RC v0.10.2 in progress |
| **Qwen Code** | 10 (e.g., #12380, #13395, #12867, #6710, #10797, #13632, #11408, #12952, #10700, #13533) | 10 (e.g., #13769, #12559, #13811, #13788, #13188, #13530, #12561, #13778, #13748, #13810) | v0.25.1‑preview.1; v0.25.0‑nightly.20261009 |
| **DeepSeek TUI** | 10 (e.g., #6804, #6721, #6944, #6652, #6923, #6931, #6842, #6728, #6155, #6945) | 10 (e.g., #6907, #6948, #6946, #6947, #6949, #6924, #6930, #6928, #6920, #6950) | RC v0.10.2 (no formal release yet) |

*All counts reflect issues and pull requests updated within the last 24 hours.*

## 3. Shared Feature Directions

Several capabilities appear repeatedly across the community, signaling convergent evolution in the AI CLI space:

| Shared Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **Managed Agent Durability & Lifecycle** | Claude Code, Qwen Code, Pi | Stable session ownership, checkpointing, and cross‑device continuity (e.g., #12380, #12867, #12952, #13533). |
| **Input/Output Reliability** | All (especially Qwen Code, DeepSeek TUI) | Preventing text truncation, loss, and display bugs; robust handling of long prompts and tool outputs (e.g., #100955, #6923, #6652). |
| **Security Hardening & Access Control** | Gemini CLI, Pi, Qwen Code | Secure credential management, sandbox isolation, and permission tightening (e.g., #85716, #84747, #21000, #84711). |
| **Shell/Tool Execution Resilience** | Qwen Code, DeepSeek TUI | Graceful handling of long‑running tasks, interruptible execution, and proper cleanup (e.g., #6910, #6924, #6949). |
| **Cross‑Platform Compatibility** | Pi, DeepSeek TUI | Windows, Wayland, and Linux stability; handling of symlinks/junctions and terminal quirks (e.g., #7547, #6721, #6931). |
| **Extensibility & Configuration** | Claude Code, Qwen Code, Pi | Open‑source contribution pathways, custom configurations, and plugin ecosystems (e.g., #41447, #12769, #6920). |

## 4. Differentiation Analysis

| Aspect | Claude Code | OpenAI Codex | Gemini CLI | Pi | Qwen Code | DeepSeek TUI |
|--------|-------------|-------------|------------|-----|-----------|-------------|
| **Primary Focus** | Open‑source democratization, subagent control, managed policies | TUI stability, background server health, event‑driven automation | Production‑ready enterprise CLI, sandbox safety, MCP integration | Lightweight terminal utility, local execution, Windows‑first support | Rapid release cadence, managed‑agent architecture, MCP tooling | Terminal ergonomics, shell task management, localization |
| **Target Users** | Researchers, open‑source contributors, power users wanting granular control | Developers building integrated coding workflows, enterprises adopting Codex | Teams needing secure, scalable AI coding assistants | Individual devs, hobbyists, Windows‑centric users | Developers seeking cutting‑edge model integration (Qwen, DeepSeek) | Power users of terminal‑centric AI workflows |
| **Technical Approach** | Modular gateway controls, `code` key for policies, subagent frontmatter | TUI refactor, background server stabilization, event‑driven monitors | Nightly releases, strict binary compatibility, security hardening | Incremental RC, focus on terminal UX and local sandboxing | Aggressive release cadence, checkpoint‑based recovery, contract‑first design | RC‑only, emphasis on terminal docking, shell task visibility, localization |
| **Maturity Indicator** | Moderately mature; solid core but active bug triage | Very active; frequent hotfixes for extensions and server regressions | Highly mature; stable releases with ongoing security patches | Early stage; no formal release, but strong community traction | Very active; rapid iteration, upcoming Stage D completion | Early‑stage RC; promising direction but limited production feedback |

## 5. Community Momentum & Maturity

- **Most Active & Fast‑Iterating**: **Qwen Code** and **Gemini CLI** lead in commit velocity and issue volume, reflecting aggressive release cycles aimed at catching up to emerging model capabilities and platform requirements. Their hot‑issue lists show continuous attention to stability (e.g., session save reliability, background task visibility) and security (e.g., rate‑limiting, credential leakage).
- **Steady Growth**: **Claude Code** maintains a healthy rhythm with regular v2.x releases and a vibrant open‑source community driving the open‑source initiative (#41447). Its issue queue indicates persistent pain points around remote‑control permissions and

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

User Safety: safe

---

# Claude Code Developer Tools Community Digest - 2026-10-10

## Today's Highlights

The latest v2.1.296 release introduces enhanced Claude apps gateway controls with a new `code` key for managed policies and `autoCompactWindow` feature for subagents. Meanwhile, the open-source Claude Code initiative (#41447) continues gaining momentum as the project celebrates recent milestone closures. Active community discussions reveal growing concerns around session management stability across platforms.

## Releases

**v2.1.296** - Most recent stable release with key improvements:
- Added `code` key to Claude apps gateway's `managed.policies[]` for enhanced desktop control
- Integrated same settings into Claude Desktop's Code tab alongside `desktop` mode
- Introduced `autoCompactWindow` to subagent frontmatter and `--agents` definitions
- GitHub: anthropics/claude-code Release v2.1.296

## Hot Issues

1. **#29214** - Remote Control Permission Bug (32 comments, 81 👍)  
   Mobile app still shows permission prompts despite `--dangerously-skip-permissions` flag. Critical for users relying on automated workflows with remote access. Community action strong with detailed bug reports.

2. **#56281** - Payment Upgrade Failure (29 comments, 9 👍)  
   Users unable to upgrade from Max 5x to Max 20x plans with payment system failures. Support team appears unresponsive, affecting premium feature adoption.

3. **#100114** - Windows Remote Control Restoration (4 comments, 1 👍)  
   Windows desktop app fails to restore Remote Control sessions after silent updates/restarts, causing mobile sessions to archive. Platform-specific bug affecting enterprise deployment.

4. **#100960** - Model Behavioral Drift (0 comments)  
   Claude Code refusing basic tasks with noticeable behavioral changes over past week. Critical issue for reliability and user trust in automation workflows.

5. **#100955** - Composer Text Loss Bug (0 comments)  
   Silent loss of 800+ characters from long prompts before submission with no recovery option. Devs lose hours of work due to unreliable text editor.

6. **#99252** - Pasted Input Folding Issue (1 comment)  
   Long user inputs folded as "(N lines hidden)" with no expand functionality. Major workflow disruption for documentation and code review tasks.

7. **#100545** - Linux Process Creation EAGAIN (1 comment)  
   Claude Code crashes with SIGABRT when thread/process creation fails, losing mid-task progress. Critical stability issue for automated deployment scripts.

8. **#74004** - CLI Input Truncation Bug (3 comments)  
   Long typed messages truncated without warning (~121 lines). Disheartening for developers working with large documentation or codebases.

9. **#95876** - Inline Model Effort Control (0 comments, 12 👍)  
   Feature request for inline model effort level specification in prompts. High community interest for advanced prompt engineering.

10. **#85848** - Discussion Mode Feature (3 comments, 4 👍)  
    Request for read-only conversational sessions with exportable artifacts. Potential for enhanced collaborative documentation workflows.

## Key PR Progress

1. **#41447** - Open Source Claude Code Initiative  
   Major milestone PR closing multiple historic issues including #59, #456, and #2846. Represents fundamental shift to open-source development model.

2. **#100293** - HIPAA Compliance Examples  
   Added comprehensive HIPAA configuration examples (`settings-hipaa.json`, `managed-mcp-hipaa.json`) for organizations requiring healthcare data protection.

3. **#85716** - Hookify Security Fix  
   Critical security enhancement preventing silent bypass of rules from ancestor `.claude` directories. Cross-platform protection against privilege escalation.

4. **#84747** - Rule Evaluation Security  
   Fixed hookify plugin's improper rule evaluation scope and secured file read operations. Prevents unauthorized tool execution through event filter bypass.

5. **#84711** - YAML Injection Prevention  
   Added defensive checks to prevent YAML injection and symlink credential overwrites in plugin scripts. Addresses critical security vulnerability (#76580).

6. **#84365** - Auto-Close Prevention  
   User empowerment feature allowing any user's thumbs down to prevent session closure. Addresses platform inequality in moderation tools.

7. **#84364** - Exception Safety in Hook Processing  
   Security hardening ensuring exceptions during rule evaluation result in permission denial rather than tool execution. Prevents privilege escalation through runtime errors.

## Feature Request Trends

**Session & Workflow Persistence**: Multiple requests for session continuation across app restarts and exit points, indicating user frustration with lost work.

**Input/Output Reliability**: Recurring themes around text truncation, loss, and display issues affecting productivity. Users demand more robust text handling.

**Enhanced Permission Controls**: Strong interest in finer-grained permission models, particularly for remote control and desktop automation scenarios.

**Collaboration Features**: Discussion mode and exportable artifacts suggest growing need for team-based workflows and documentation sharing.

**Enterprise-Grade Features**: HIPAA compliance, security hardening, and advanced configuration options reflect maturation toward enterprise adoption.

## Developer Pain Points

**Performance & Reliability Issues**: Platform-specific crashes (Linux SIGABRT, Windows Docker issues) and silent data loss (text truncation) dominate community frustration. These critical stability concerns prevent widespread adoption in production environments.

**Payment & Account Management**: Payment upgrade failures and OAuth token authentication problems creating friction for scaling user workflows. Support responsiveness appears inadequate.

**Remote Control Complexity**: Persistent permission prompt issues across mobile and desktop platforms undermine the value proposition of remote management features.

**Session Management Instability**: Remote Control sessions archiving, lost keyboard focus, and workflow interruption highlight immature session persistence mechanisms.

**Input Buffer Limitations**: Consistent truncation and folding issues across multiple platforms suggest fundamental architectural constraints in the TUI component requiring redesign for professional workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-10-10

Today’s digest highlights the release of Codex `0.162.1` focusing on TUI and background server stability, alongside a surge in community discussion around platform-specific bugs (particularly on Windows) and highly requested capabilities like an event-driven background monitoring tool.

---

### 1. Today's Highlights
*   **Stability releases address core startup and TUI bugs:** Version `0.162.1` resolves critical crashes in the TUI when rendering multi-line asynchronous questions and fixes startup failures caused by mismatched feature settings between running background servers and the CLI.
*   **Community focuses on extension and app-server regressions:** High-engagement issues detail message-dropping bugs in the VS Code extension (#49988) and hook environment misattribution in managed app-server daemons (#48500).
*   **Feature demand shifts toward event-driven automation:** A prominent feature request (#29922) calls for an agent-callable `monitor` tool to trigger Codex on background events (logs, builds, CI) without polling.

---

### 2. Releases
*   **Codex `v0.162.1`**: Fixes a TUI crash when asynchronous questions contain multiple lines, preserving line breaks and complete hyperlink destinations. It also resolves startup failures caused by differences between a running background server's feature settings and CLI defaults, implementing robust compatibility checks.
*   **Codex `v0.163.0-alpha.5` & `v0.163.0-alpha.4`**: Pre-release alpha versions focusing on core architecture preparation and incremental stability updates.

---

### 3. Hot Issues (Top 10 Selected)

*   **[#49988] VS Code extension intermittently drops submitted messages after update (53 comments, 49 👍)**
    *   *Why it matters:* A severe workflow blocker introduced after the October 1st extension update. Users report that pressing Enter frequently clears the composer without sending the message, requiring multiple attempts to successfully submit.
    *   *Community reaction:* Highly critical; represents a major regression for extension-based workflows.
*   **[#48500] Managed app-server runs hooks with the first client's TMUX_PANE (13 comments, 18 👍)**
    *   *Why it matters:* Since version `0.157`, the shared `codex app-server --managed-daemon` inherits the environment of whichever TUI first spawned it. This causes lifecycle hooks (`UserPromptSubmit`, `Stop`, `PostToolUse`) to misattribute hook events to the wrong terminal pane for subsequent clients.
    *   *Community reaction:* High developer impact, particularly for teams running multiple parallel terminal sessions.
*   **[#50526] Desktop: Guardian experiment reintroduces deprecated `thread_context` warning (21 comments)**
    *   *Why it matters:* The desktop app continues to display a deprecation warning for `thread_context` in `config.toml`, even when the user's configuration is completely clean and free of the setting.
    *   *Community reaction:* Frustrating config noise for users experimenting with the Guardian features.
*   **[#29922] Feature Request: Agent-callable `monitor` tool (18 comments, 7 👍)**
    *   *Why it matters:* Codex is turn-driven and sits idle between turns. This feature request asks for a native tool that allows Codex to wake up and react to background events (logs, files, builds, CI) without polling.
    *   *Community reaction:* Highly desired feature; received strong support from developers looking for asynchronous agent capabilities.
*   **[#50127] DOT: UNKNOWN task creation, stale disconnect notifications, and Luna schema failures (18 comments)**
    *   *Why it matters:* Breaks the DOT workflow on Mac when using Codex tasks, presenting ambiguous task creation states, stale disconnect notifications, and schema failures.
    *   *Community reaction:* Significant confusion for cross-model task orchestration.
*   **[#50870] [Dots][Voice] Calls ring without connecting across devices (15 comments)**
    *   *Why it matters:* Voice calls to "Dots" ring on iPhone, Mac, and Windows web but fail to establish a usable voice conversation, separating the call connection failure from general process startup issues.
    *   *Community reaction:* High priority for users relying on cross-device voice interactions.
*   **[#50168] Dot cloud_threads: create returns UNKNOWN and send_message returns CloudThreadNotFoundError (13 comments)**
    *   *Why it matters:* A cloud-to-cloud interoperability failure. While Dot can list and read Codex Cloud tasks, the write path (`cloud_threads`) fails for both task creation and subsequent messaging.
    *   *Community reaction:* Major blocker for Codex Cloud automated task piping.
*   **[#46744] Windows App fails to load openai-bundled plugins (12 comments, 3 👍)**
    *   *Why it matters:* On Windows 11, the Codex App fails to load core plugins, rendering Browser, Computer Use, and Image Gen completely unavailable.
    *   *Community reaction:* Severe limitation for Windows users trying to use advanced tool-calls.
*   **[#49789] Windows app WSL sandbox fails with "No such file or directory (os error 2)" (11 comments, 8 👍)**
    *   *Why it matters:* After updating to version `26.928.21956`, the WSL sandbox environment fails to initialize on Windows, throwing directory errors.
    *   *Community reaction:* Highly upvoted; blocks sandboxed execution on Windows machines.
*   **[#51731] Dot cannot connect to codex conversations: unsupported placement format version 3 (9 comments)**
    *   *Why it matters:* On Windows, the Dot assistant fails to connect to local Codex conversations due to an unsupported thread placement format version mismatch.
    *   *Community reaction:* Blocks cross-platform thread handoffs between local desktops and mobile dots.

---

### 4. Key PR Progress (Top 10 Selected)

*   **[#52756] Classify voice session failures and record terminal outcomes:** Tags voice failure metrics with cause and lifecycle phase, ensuring session durations are recorded only after the final outcome is known, and prevents control send failures from overwriting specific WebRTC errors.
*   **[#52748] Make code-mode `exit()` stop the entire cell:** Prevents JavaScript from continuing execution (including in `catch`, `finally`, and queued promise callbacks) after a code-mode `exit()` call, terminating the V8 engine cleanly.
*   **[#52742] Add opt-in output token replay for OpenAI requests:** Introduces a disabled-by-default `output_token_replay` feature flag that requests `output.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here's a thinking process:

1.  **Analyze User Request:**
   - Role: Technical analyst focused on AI developer tools
   - Source: GitHub data for `google-gemini/gemini-cli` dated 2026-10-10
   - Output: Gemini CLI community digest with specific sections
   - Sections needed:
     1. Today's Highlights (2-3 sentences)
     2. Releases (summarize new versions, omit if none)
     3. Hot Issues (10 noteworthy issues, explain why they matter + community reaction, include GitHub links)
     4. Key PR Progress (10 important PRs, describe features/fixes, include links)
     5. Feature Request Trends (distill most-requested feature directions from all issues)
     6. Developer Pain Points (summarize recurring developer frustrations/high-frequency requests)
   - Style: concise, professional, suited for technical developers
   - Must include GitHub links for each item

2.  **Analyze the Provided Data:**
   Let's break down the data sections:

   **Latest Releases (last 24h):**
   - v0.65.0-nightly.20261010.g9b6e0265d: 
     * fix(cli): handle JSON parse and response stream errors in fetchJson by @jesussamuel-byte in PR #29658
     * fix(core): preserve line terminators in truncateString by @diegogodinezr in PR #29673
   - v0.64.0-preview.1: 
     * fix(patch): cherry-pick 2ce1a69 to release/v0.64.0-preview.0-pr-29672 to patch version v0.64.0-preview.0 and create version 0.64.0-preview.1 by @gemini-cli-robot in PR #29696

   **Latest Issues (updated in last 24h, Total: 50 items; showing top 30 by comment count):**
   I need to pick 10 noteworthy ones. Let's review the top 30 by comment count:
   #22323: 13 comments, bug about subagent recovery after MAX_TURNS
   #19873: 9 comments, enhancement about leveraging model's bash affinity via Zero-Dependency OS Sandboxing
   #21409: 8 comments, bug about generalist agent hangs
   #22745: 7 comments, EPIC about AST-aware file reads/search/mapping
   #21968: 7 comments, bug about Gemini not using skills/sub-agents enough
   #22267: 4 comments, bug about Browser Agent ignores settings.json overrides
   #22232: 4 comments, feature about browser_agent resilience
   #21983: 4 comments, bug about browser subagent fails in Wayland
   #21000: 4 comments, bug about ~/.gemini/agents/filename.md not recognized as agent if symlink
   #24246: 3 comments, bug about 400 error with >128 tools
   #23571: 3 comments, bug about model creating tmp scripts in random spots
   #22672: 3 comments, feature about agent should stop/discourage destructive behavior
   #22186: 3 comments, bug about get-shit-done output hook causes crash
   #20195: 3 comments, enhancement about local subagent sprint 1
   #22746: 2 comments, enhancement about investigate using AST aware CLI tools
   #22598: 2 comments, feature about subagent trajectory visible via /chat share
   #22466: 2 comments, bug about incorrect \n escape behavior
   #22465: 2 comments, bug about Gemini CLI gets stuck at interactive prompt creating vite app
   #21924: 2 comments, bug about high performance terminal resize
   #21763: 2 comments, bug about bugreport doesn't provide subagent context
   #21432: 2 comments, customer-issue about improve Agent "Self-Awareness"
   #19561: 2 comments, enhancement about 'Tactful Extraction' logic
   #18836: 2 comments, about Replace WriteToDo with Persistent File-Based Task Tracking
   #18397: 2 comments, enhancement about auto adding to per workspace policy
   #18287: 2 comments, about Explore Shared Memory or parallel subagent collaboration
   #18285: 2 comments, about subagent discovery via settings.json
   #23313: 1 comment, bug about change steering eval test to always pass
   #23166: 1 comment, enhancement about stabilize and enhance internal project evaluations
   #22747: 1 comment, about investigate using AST aware tools to search and perform file reads
   #22598: 2 comments (already listed)
   #22466: 2 comments (already listed)
   #22465: 2 comments (already listed)
   #21924: 2 comments (already listed)
   #21763: 2 comments (already listed)
   #21432: 2 comments (already listed)
   #19561: 2 comments (already listed)
   #18836: 2 comments (already listed)
   #18397: 2 comments (already listed)
   #18287: 2 comments (already listed)
   #18285: 2 comments (already listed)
   #23313: 1 comment
   #23166: 1 comment
   #22747: 1 comment
   (Also #22598, #22466, #22465, #21924, #21763, #21432, #19561, #18836, #18397, #18287, #18285 have 2 comments each, and some have 1)

   I need to pick 10 that are "noteworthy" based on comment count, relevance, and community impact. I'll select a mix of high-comment, high-impact, and trending topics.

   **Latest Pull Requests (updated in last 24h, Total: 25 items; showing top 20 by comment count):**
   Most have "undefined" comments, but I can still reference them by PR number and summary.
   Let's list the relevant ones:
   #29611: fix(core): support multimodal function response for dotted Gemini 3 models and aliases
   #29701: chore/release: bump version to 0.65.0-nightly.20261010.g9b6e0265d
   #29505: fix: support rootless Podman with keep-id
   #29615: fix(ci): gate chained E2E on trigger success and tighten SHA fallback
   #29608: fix(core): time out hanging web searches after 30 seconds
   #29606: fix(core): split custom headers only before a valid RFC 9110 token
   #29607: fix(scripts): fail the nightly eval summary when no reports exist
   #28766: chore/release: bump version to 0.56.0-nightly.20260811.geef19f25c
   #29644: fix(cli): restore debounced static UI refresh on terminal width changes
   #29617: fix(cli): skip eager recursive file reading for @<directory> references
   #29700: build(deps): synchronize workspace package.json versions with lockfile and enforce in CI
   #29699: fix(cli): correct reverse search highlight index for expanding unicode characters
   #29697: Changelog for v0.64.0-preview.1
   #29643: fix(cli): clear cached credentials when re-selecting Google login
   #29672: fix(core): eliminate false positives on untrusted command flags and compound loops
   #29696: fix(patch): cherry-pick to create v0.64.0-preview.1
   #29683: fix(a2a-server): isolate tool rejection to active call in sequential batches
   #29582: perf(core): optimize ignore filtering and enable subtree pruning
   #29476: fix(cli): resolve hang on Enter keypress in interactive mode
   #29439: fix(cli): emit tool_call update prior to request_permission in ACP mode

   I need to pick 10 important PRs. I'll select those with clear fixes, performance, or core functionality.

   **Feature Request Trends:** I need to distill from all issues. Looking at the issues, common themes:
   - Sub-agent/agent behavior & autonomy (e.g., not using skills enough, recovery after MAX_TURNS, browser agent issues, parallel subagents, discovery via settings.json)
   - AST-aware tools for better code mapping/search
   - Task tracking persistence (Replace WriteToDo, per-workspace policies)
   - Terminal/UI responsiveness (resize, interactive prompts, Enter keyhang)
   - Security/credential management (rootless Podman, cached credentials)
   - Model capabilities (multimodal, bash affinity, destructive behavior)
   - Evaluation/eval stability
   - Documentation/changelog

   **Developer Pain Points:** Recurring frustrations:
   - Agent hangs/deferral issues
   - Sub-agent not leveraging skills/tools adequately
   - Terminal/UI bugs (resize, interactive prompts, Enter key)
   - Tool overload/400 errors with many tools
   - Credential/auth management
   - Browser/Wayland compatibility
   - Context management (token bloat, temporary scripts)

3.  **Structure the Output:**
   I'll create the digest with the required sections, ensuring concise professional tone, including GitHub links (using the format: [#Issue/PR](URL) or just the link). I'll make sure each item in Hot Issues and Key PR Progress has a link. For Feature Request Trends and Developer Pain Points, I'll describe trends without necessarily linking each, but I can include relevant links if space permits. The prompt says "Include GitHub links for each item." I'll interpret this as for the items in the lists (Hot Issues and Key PR Progress), and maybe mention links in other sections too. I'll add links where appropriate.

   Let's draft each section:

   **1. Today's Highlights** (2-3 sentences):
   - v0.65.0-nightly.20261010.g9b6e0265d lands with fixes for JSON parse/response stream errors in `fetchJson` and line terminator preservation in `truncateString`, improving CLI stability during tool output handling.
   - The v0.64.0-preview.1 patch release consolidates security hardening and cherry-picked fixes from the v0.64.0 preview cycle, marking a stable stepping stone toward the next nightly.

   **2. Releases**: 
   New nightly and preview releases are available. See Highlights above. (Or I can just say "See Highlights" or omit if the section is supposed to summarize changes separately. The prompt says "If new versions exist, summarize changes; omit if none". Since releases are covered in Highlights, I might just put a brief note or omit this section if it's redundant. But the prompt lists it as a separate section, so I'll include a concise releases subsection, possibly referencing the highlights. I'll make it short: "Two releases landed in the last 24h: v0.65.0-nightly... and v0.64.0-preview.1...")

   **3. Hot Issues** (10 noteworthy issues):
   I'll pick 10 from the list, with summary, why it matters, community reaction (comment count/upvotes), and link.

   Let's select:
   1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (13 comments, 2 👍) - critical for agent reliability.
   2. #19873 - Leverage model's bash affinity via Zero-Dependency OS Sandboxing (9 comments, 1 👍) - shaping future agent tooling.
   3. #21409 - Generalist agent hangs (8 comments, 8 👍) - high engagement, severe UX blocker.
   4. #22745 - AST-aware file reads/search/mapping EPIC (7 comments, 1 👍) - long-term quality improvement.
   5. #21968 - Gemini does not use skills and sub-agents enough (7 comments, 0 👍) - fundamental agent behavior question.
   6. #22267 - Browser Agent ignores settings.json overrides (4 comments, 0 👍) - config persistence issue.
   7. #21983 - Browser subagent fails in Wayland (4 comments, 1 👍) - platform compatibility.
   8. #21000 - ~/.gemini/agents/filename.md not recognized as agent if symlink (4 comments, 0 👍) - agent discovery friction.
   9. #24246 - 400 error with >128 tools (3 comments, 0 👍) - scalability limitation.
   10. #23571 - Model frequently creates tmp scripts in random spots (3 comments, 0 👍) - workspace cleanup pain.

   I'll format each with a brief description, impact, and link.

   **4. Key PR Progress** (10 important PRs):
   I'll pick 10 from the PR list that represent meaningful progress:
   1. #29611 - Support multimodal function response for dotted Gemini 3 models and aliases.
   2. #29608 - Time out hanging web searches after 30 seconds (fixes permanent thinking state).
   3. #29606 - Split custom headers only before valid RFC 9110 token (fixes header parsing edge cases).
   4. #29607 - Fail nightly eval summary when no reports exist (prevents silent CI failures).
   5. #29644 - Restore debounced static UI refresh on terminal width changes (UX stability).
   6. #29617 - Skip eager recursive file reading for @<directory> references (performance/optimization).
   7. #29700 - Synchronize workspace package.json versions with lockfile and enforce in CI (build hygiene).
   8. #29699 - Correct reverse search highlight index for expanding Unicode characters (UX fix).
   9. #29672 - Eliminate false positives on untrusted command flags and compound loops (security hardening).
   10. #29582 - Optimize ignore filtering and enable subtree pruning (performance for large repos).

   I'll add brief descriptions and links.

   **5. Feature Request Trends**:
   Distill from all issues. I'll summarize top trends:
   - Agent autonomy & sub-agent orchestration: pervasive demand for smarter skill usage, parallel subagents, and discovery via settings.json.
   - AST-aware code integration: multiple EPICs and features pushing for AST-based file reads, searches, and mapping to reduce token bloat and improve precision.
   - Persistent task tracking: deprecating in-context WriteToDo in favor of file-based, per-workspace CRUD operations.
   - Terminal & UI resilience: fixes for resize, interactive prompts, Enter key hangs, and Unicode highlight indexing.
   - Credential & sandbox management: rootless Podman, cached credential clearing, and security gate hardening.
   - Model capability alignment: bash affinity, multimodal function responses, and discouraging destructive commands.

   **6. Developer Pain Points**:
   - Agent hangs and unresponsive deferral to generalist agent (especially #21409, #22323).
   - Sub-agents not autonomously using configured skills/tools; requires explicit prompting.
   - Terminal/UI bugs breaking workflow: resize flicker, Enter key unresponsiveness, interactive prompt hangs (vite app creation).
   - Tool count limitations causing 400 errors on large codebases.
   - Browser/Wayland compatibility failures.
   - Context bloat from tmp script generation and firehose file reads.
   - Symlink agent discovery friction and credential caching issues.

   I'll make sure all GitHub links are included using the format provided in the data, e.g., `google-gemini/gemini-cli Issue #22323` or just the URL. The prompt says "Include GitHub links for each item." I'll ensure each numbered item in Hot Issues and Key PR Progress has a link. For other sections, I'll incorporate links naturally.

   Let's verify the data again to ensure accuracy of links and details. The URLs are like `google-gemini/gemini-cli Issue #22323` and `google-gemini/gemini-cli PR #29611`. I'll use those exact formats.

   Now, I'll craft the digest. I need to be concise but cover all sections. I'll aim for ~400-600 words, technical tone.

   Check if any section can be merged or simplified. The prompt explicitly lists 6 sections, so I'll keep them distinct.

   Let's start writing. I'll be careful with the exact issue/PR numbers and summaries from the data.

   One thing: For "Releases" section, the prompt says "If new versions exist, summarize changes; omit if none". Since there are new versions, I'll summarize them, but I'll also cover them in Highlights. I'll make Releases a brief bullet list or paragraph

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑10‑10**

---

### 1. Today’s Highlights  
- The latest release cascade (v1.0.96‑2, v1.0.96‑1, v1.0.96‑0) lands critical fixes: model IDs are now case‑insensitive and canonical IDs are persisted, interactive sandbox settings suggest environment secrets, and the permission timeline clearly shows who made each decision.  
- v1.0.95 (2026‑10‑09) added native Microsoft Entra broker authentication on macOS, sandbox credential injection via `injectHosts`, and extended `--context` support to both new and resumed ACP sessions.  
- Community activity is dominated by sandbox‑related bugs, session‑stability issues, and UX gaps (scrolling, timestamps, tab‑completion).

---

### 2. Releases  

| Version | Date | Key Changes |
|---|---|---|
| **v1.0.96‑2** | 2026‑10‑09 | Fixed model IDs in `/model` and `/config` to be case‑insensitive and store canonical IDs. |
| **v1.0.96‑1** | 2026‑10‑09 | Added interactive sandbox settings that suggest possible environment secrets and allow masking‑host addition before saving; kept `/allow-all` available during enterprise‑policy resolution. |
| **v1.0.96‑0** | 2026‑10‑09 | Improved interactive sessions in git repos (faster prompt arrival) and added timeline visibility for permission decisions (Copilot, Assisted Permissions, policy, fallback). |
| **v1.0.95** | 2026‑10‑09 | Native Microsoft Entra broker auth on macOS with browser fallback; `copilot config` now supports `injectHosts` keys for sandbox credentials with Bash/Zsh/Fish completion; `--context` applies to new **and** resumed ACP sessions. |
| **v1.0.95‑3** | 2026‑10‑09 | General fixes & minor improvements (details pending). |

*All releases are available on the [GitHub/copilot-cli releases page](https://github.com/github/copilot-cli/releases).*

---

### 3. Hot Issues (Top 10 by Community Engagement)

| # | Title & Link | Comments / 👍 | Why it matters | Community Reaction |
|---|---|---|---|---|
| **#4313** | [Allow scrolling through the current conversation history](https://github.com/github/copilot-cli/issues/4313) | 9 / 0 | Improves navigation of long sessions; essential for productivity. | Active discussion, no consensus on implementation yet. |
| **#3355** | [Allow configurable context window for Claude Opus 4.6 (200K cap vs 1M capability)](https://github.com/github/copilot-cli/issues/3355) | 5 / 4 | Removes an artificial 80 % reduction in context, preventing frequent auto‑compaction. | Strong support (4👍); users report frequent summarization pain. |
| **#4686** | [Node.js OOM crash after ~37 min — 31,965 leaked async libuv handles](https://github.com/github/copilot-cli/issues/4686) | 4 / 0 | Critical stability bug; sessions become unusable after ~37 min on Linux. | High urgency; no resolution yet. |
| **#5076** | [`/add-dir` does not add the directory to the sandbox allow list](https://github.com/github/copilot-cli/issues/5076) | 4 / 0 | Breaks expected sandbox expansion; users cannot safely add directories. | Reproducible bug; no fix released. |
| **#3035** | [Tool‑callable `cwd` (equivalent of TUI `/cwd`)](https://github.com/github/copilot-cli/issues/3035) | 3 / 0 | Exposes a key workspace path as a tool, enabling skills to operate in dynamic directories. | Feature request; no implementation. |
| **#2536** | [Atlassian MCP needs authorization on every invocation](https://github.com/github/copilot-cli/issues/2536) | 3 / 3 | Forces repeated login for Atlassian integrations, hurting workflow. | Community highly voted (3👍); users demand persistent auth. |
| **#3081** | [NixOS keychain support is broken](https://github.com/github/copilot-cli/issues/3081) | 2 / 3 | Prevents Copilot from reading stored tokens on NixOS despite libsecret/GNOME Keyring presence. | Strong sentiment (3👍); platform‑specific blocker. |
| **#939** | [Slash command tab completion](https://github.com/github/copilot-cli/issues/939) | 2 / 0 | Improves command discovery and reduces typing for slash‑command parameters. | Low‑priority UX request; no traction. |
| **#4565** | [App Configuration Problems Found in repo `copilot‑runtime‑bazel‑cache`](https://github.com/github/copilot-cli/issues/4565) | 2 / 0 | Scans reveal mis‑configurations that could cause unexpected behavior; impacts CI pipelines. | One‑off diagnostic; no community push. |
| **#5102** | [Regression: sandboxed git has no way to use a credential that differs from the Copilot/gh sign‑in identity](https://github.com/github/copilot-cli/issues/5102) | 0 / 0 | Blocks fine‑grained PAT usage for sandboxed git operations; users need alternative auth. | Emerging bug; no discussion yet but critical for enterprise GitHub usage. |

---

### 4. Key PR Progress (Recent Updates)

| PR # | Title & Link | Summary |
|---|---|---|
| **#5106** | [

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Let me analyze the GitHub data to generate the OpenCode community digest for 2026-10-10.

First, let me identify the key sections I need to fill:

1. **Today's Highlights** - 2-3 sentences summarizing the most important updates
2. **Releases** - If new versions exist, summarize changes; omit if none
3. **Hot Issues** - Pick 10 noteworthy Issues, explain why they matter and community reaction
4. **Key PR Progress** - Pick 10 important PRs, describe features or fixes
5. **Feature Request Trends** - Distill the most-requested feature directions from all Issues
6. **Developer Pain Points** - Summarize recurring developer frustrations or high-frequency requests

Let me go through the data:

**Releases**: The "Latest Releases (last 24h)" section says "None". So I'll omit the Releases section or note there are no new releases.

**Issues**: There are 50 items total, showing top 30 by comment count. Let me identify the most noteworthy ones.

Looking at the issues, I should pick ones that are:
- Recently updated (especially on 2026-10-10)
- Have good comment counts
- Represent important bugs or features
- Show community engagement

Let me list the issues with their details:

1. #30221 [CLOSED] "terminated" error - 10 comments, 4 👍 - Created 2026-06-01, Updated 2026-10-10
2. #19702 [CLOSED] SDK cannot handle `question` tool interaction - 7 comments, 2 👍 - Created 2026-03-29, Updated 2026-10-10
3. #39434 [CLOSED] "Open project" dialog always shows "No folders found" - 5 comments, 0 👍 - Created 2026-07-29, Updated 2026-10-10
4. #51241 [OPEN] Free models fail when `shell` or `read` permissions are denied - 5 comments, 1 👍 - Created 2026-09-25, Updated 2026-10-10
5. #53709 [OPEN] [needs:compliance] tui: V1→V2 migration stores stripped absolute dir in session.path - 4 comments, 0 👍 - Created 2026-10-07, Updated 2026-10-10
6. #37611 [CLOSED] Web project picker is empty until a search is entered - 4 comments, 2 👍 - Created 2026-07-18, Updated 2026-10-10
7. #41453 [CLOSED] [FEATURE]: Persistent session daemon + zero-tool-call memory recall - 4 comments, 0 👍 - Created 2026-08-09, Updated 2026-10-10
8. #39582 [CLOSED] DeepSeek V4 Flash Free: output truncated mid-sentence - 4 comments, 1 👍 - Created 2026-07-29, Updated 2026-10-10
9. #53662 [CLOSED] [FEATURE]: show the session id in the sidebar in release builds - 3 comments, 0 👍 - Created 2026-10-07, Updated 2026-10-10
10. #37961 [CLOSED] fff file picker refuses to index home dir - 3 comments, 0 👍 - Created 2026-07-20, Updated 2026-10-10
11. #37005 [CLOSED] [BUG] opencode web can not open projects - 3 comments, 3 👍 - Created 2026-07-15, Updated 2026-10-10
12. #38458 [CLOSED] SSE stream closes mid-turn - 3 comments, 0 👍 - Created 2026-07-23, Updated 2026-10-10
13. #41459 [CLOSED] acp: session/new and session/prompt hang indefinitely - 3 comments, 0 👍 - Created 2026-08-10, Updated 2026-10-10
14. #41280 [CLOSED] Web frontend bundled with opencode-ai@1.18.15 is 1.18.14 - 3 comments, 0 👍 - Created 2026-08-08, Updated 2026-10-10
15. #32960 [CLOSED] Desktop app not picking up folder path correctly - 3 comments, 1 👍 - Created 2026-06-19, Updated 2026-10-10
16. #35640 [OPEN] [bug, tui, 2.0] V2 TUI: retry notice renders raw HTML from provider 503 - 2 comments, 0 👍 - Created 2026-07-07, Updated 2026-10-10
17. #54168 [OPEN] [FEATURE]: Support xAI native x_search/web_search built-in tools for Grok models - 2 comments, 0 👍 - Created 2026-10-09, Updated 2026-10-10
18. #54231 [CLOSED] [FEATURE]: Add Agent Relay to ecosystem plugins - 2 comments, 0 👍 - Created 2026-10-10, Updated 2026-10-10
19. #41636 [CLOSED] [Desktop App] Model fails to output in new session for Git projects - 2 comments, 0 👍 - Created 2026-08-11, Updated 2026-10-10
20. #36702 [CLOSED] [FEATURE]: Native support for Langdock - 2 comments, 2 👍 - Created 2026-07-13, Updated 2026-10-10
21. #35384 [CLOSED] [Bug] Bun v1.3.14 segfault on Linux ARM64 - 2 comments, 0 👍 - Created 2026-07-05, Updated 2026-10-10
22. #41465 [CLOSED] [FEATURE] Prompt Queue & Steering for Auto-Multiturn Agent Execution - 2 comments, 1 👍 - Created 2026-08-10, Updated 2026-10-10
23. #41461 [CLOSED] [FEATURE]: Allow for accepting/rejecting an edit with feedback/comments - 2 comments, 0 👍 - Created 2026-08-10, Updated 2026-10-10
24. #41457 [CLOSED] `@` autocomplete never fetches files on first open - 2 comments, 0 👍 - Created 2026-08-09, Updated 2026-10-10
25. #41456 [CLOSED] `@` file search returns nothing when cwd is the home directory - 2 comments, 0 👍 - Created 2026-08-09, Updated 2026-10-10
26. #41444 [CLOSED] [FEATURE]: scroll on laptop - 2 comments, 0 👍 - Created 2026-08-09, Updated 2026-10-10
27. #41438 [CLOSED] [FEATURE]: can we have the /notify command! - 2 comments, 0 👍 - Created 2026-08-09, Updated 2026-10-10
28. #41407 [CLOSED] Shift+Insert does not paste in OpenCode CLI inside VS Code terminal - 2 comments, 0 👍 - Created 2026-08-09, Updated 2026-10-10
29. #54239 [OPEN] tui: Windows TUI lags on mouse-wheel scroll and window resize - 1 comment, 0 👍 - Created 2026-10-10, Updated 2026-10-10
30. #54168 [OPEN] [FEATURE]: Support xAI native x_search/web_search built-in tools for Grok models - 2 comments, 0 👍 - Created 2026-10-09, Updated 2026-10-10

Now let me pick the 10 most noteworthy issues:

1. #30221 - "terminated" error - High impact bug affecting all active sessions, recently updated
2. #51241 - Free models fail when permissions denied - Important for free model users, recently updated
3. #53709 - V1→V2 migration stores stripped absolute dir in session.path - Migration issue affecting TUI sessions
4. #39434 - "Open project" dialog shows "No folders found" - Usability bug
5. #53662 - Show session ID in sidebar - Feature request, recently created
6. #37611 - Web project picker empty until search - Usability issue
7. #37961 - fff file picker refuses to index home dir - Breaks web UI project picker
8. #54231 - Add Agent Relay to ecosystem plugins - Feature addition
9. #54239 - Windows TUI lags on mouse-wheel scroll - Regression issue
10. #54168 - Support xAI native x_search/web_search tools - New model support

Actually, let me reconsider. I should pick issues that have the most relevance, comment activity, or are recently updated. Let me look at comment counts and update dates more carefully.

Issues updated on 2026-10-10 (today):
- #53709 - V1→V2 migration stores stripped absolute dir in session.path - 4 comments
- #54231 - Add Agent Relay to ecosystem plugins - 2 comments  
- #54239 - Windows TUI lags on mouse-wheel scroll - 1 comment
- #54168 - Support xAI native x_search/web_search tools - 2 comments
- #54234 - restore models --refresh flag on v2 - undefined comments (but created/updated 2026-10-10)
- #54241 - include symlinks in file listings - undefined comments
- #54240 - bound html provider error messages - undefined comments
- #54227 - require confirmation before plan runs shell commands - undefined comments
- #54226 - mark a server needs_auth when a tool call is rejected with 401 - undefined comments
- #54225 - same as above - undefined comments
- #54198 - upgrade Effect to 4.0.1 - undefined comments
- #53924 - normalize session directory lookup separators - undefined comments
- #54232 - add Agent Relay to ecosystem plugins - undefined comments
- #54011 - keep configured local models available without discovery - undefined comments
- #54187 - open a session via opencode:// deep link - undefined comments
- #54174 - migrate legacy MCP timeout into the startup budget - undefined comments
- #54224 - docs(ecosystem): add nsq to ecosystem projects - undefined comments
- #54223 - same - undefined comments
- #54219 - feat(sdk): seed host plugins before recovery - undefined comments

Let me also check which issues have the most comments overall (top by comment count from the listing):

The top 30 by comment count are shown. Looking at the comment counts:
- #30221: 10 comments
- #19702: 7 comments
- #39434: 5 comments
- #51241: 5 comments
- #53709: 4 comments
- #37611: 4 comments
- #41453: 4 comments
- #39582: 4 comments
- #53662: 3 comments
- #37961: 3 comments
- #37005: 3 comments
- #38458: 3 comments
- #41459: 3 comments
- #41280: 3 comments
- #32960: 3 comments
- #35640: 2 comments
- #54168: 2 comments
- #54231: 2 comments
- #41636: 2 comments
- #36702: 2 comments
- #35384: 2 comments
- #41465: 2 comments
- #41461: 2 comments
- #41457: 2 comments
- #41456: 2 comments
- #41444: 2 comments
- #41438: 2 comments
- #41407: 2 comments
- #54239: 1 comment

OK, so the highest comment counts are:
1. #30221: 10 comments - "terminated" error
2. #19702: 7 comments - SDK cannot handle `question` tool interaction
3. #39434: 5 comments - "Open project" dialog always shows "No folders found"
4. #51241: 5 comments - Free models fail when `shell` or `read` permissions are denied
5. #53709: 4 comments - V1→V2 migration stores stripped absolute dir in session.path
6. #37611: 4 comments - Web project picker is empty until a search is entered
7. #41453: 4 comments - Persistent session daemon + zero-tool-call memory recall
8. #39582: 4 comments - DeepSeek V4 Flash Free: output truncated mid-sentence
9. #53662: 3 comments - show the session id in the sidebar in release builds
10. #37961: 3 comments - fff file picker refuses to index home dir

But I should also consider relevance and recency. Let me pick 10 that are most noteworthy:

1. #30221 - "terminated" error - 10 comments, closed but recently updated, high impact
2. #19702 - SDK cannot handle `question` tool interaction - 7 comments, SDK usability issue
3. #51241 - Free models fail when `shell` or `read` permissions are denied - 5 comments, permission issue
4. #39434 - "Open project" dialog always shows "No folders found" - 5 comments, usability
5. #53709 - V1→V2 migration stores stripped absolute dir in session.path - 4 comments, migration bug
6. #37611 - Web project picker is empty until a search is entered - 4 comments, usability
7. #41453 - Persistent session daemon + zero-tool-call memory recall - 4 comments, feature
8. #39582 - DeepSeek V4 Flash Free: output truncated mid-sentence - 4 comments, model issue
9. #53662 - show the session id in the sidebar in release builds - 3 comments, UX feature
10. #53924 - normalize session directory lookup separators - actually this is a PR, not an issue

Wait, #53924 is a PR. Let me re-check. Actually looking at the data, #53924 is listed under "Latest Pull Requests". So it's a PR.

Let me reconsider my 10 hot issues. I want a mix of bugs, features, and recently active items:

1. #30221 [CLOSED] "terminated" error - 10 comments - High impact bug
2. #19702 [CLOSED] SDK cannot handle `question` tool interaction - 7 comments - SDK usability
3. #51241 [OPEN] Free models fail when `shell` or `read` permissions are denied - 5 comments - Permission issue
4. #39434 [CLOSED] "Open project" dialog always shows "No folders found" - 5 comments - Usability
5. #53709 [OPEN] V1→V2 migration stores stripped absolute dir in session.path - 4 comments - Migration bug
6. #37611 [CLOSED]

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Pi Community Digest — 2026-10-10

### Today's Highlights

No new releases in the last 24 hours, but significant community discussion around Windows support (#7547), tool execution reliability, and provider compatibility issues. Active development focuses on fixing RPC streaming behavior, session management edge cases, and TUI usability improvements.

---

### Releases

**None in the last 24 hours**

---

### Hot Issues

1. **[#7547][OPEN]** [Windows] How do you use Pi on windows?  
   *[earendil-works/pi#7547](https://github.com/earendil-works/pi/issues/7547)*  
   A major call to action for Windows-first developer support, seeking clarity on recommended setups. High engagement (79 comments).

2. **[#10480][OPEN]** [bug] Direct openai connection not recognising manual usage limit reset  
   *[earendil-works/pi#10480](https://github.com/earendil-works/pi/issues/10480)*  
   Usage limits not updating after manual resets via ChatGPT web UI; workaround requires re-authentication.

3. **[#8643][OPEN]** Bedrock: OpenAI models reject images nested in toolResult.content  
   *[earendil-works/pi#8643](https://github.com/earendil-works/pi/issues/8643)*  
   Fix proposed to hoist embedded images into sibling user blocks for better OpenAI-on-Bedrock handling.

4. **[#9773][OPEN]** before_provider_request does not fire for summarization/compaction requests  
   *[earendil-works/pi#9773](https://github.com/earendil-works/pi/issues/9773)*  
   Missing hook coverage breaks middleware expectations during compaction flows.

5. **#6300 [OPEN]** [bug] Windows: Input line is redrawn on every keystroke  
   *[earendil-works/pi#6300](https://github.com/earendil-works/pi/issues/6300)*  
   TUI redraw bug causes character duplication per keypress under cmd.exe/Windows Terminal.

6. **[#10497][CLOSED]** [bug] OpenRouter Error: 400  
   *[earendil-works/pi#10497](https://github.com/earendil-works/pi/issues/10497)*  
   Context overflow errors reported by extension authors; linked to large injected content paths.

7. **[#10645][OPEN]** resizeImage resolves null in compiled (Bun) executables  
   *[earendil-works/pi#10645](https://github.com/earendil-works/pi/issues/10645)*  
   Image attachment loss regression tracked since v0.87.x; likely tied to Bun bundling pipeline.

8. **[#10606][OPEN]** RPC: prompt sent during previous prompt's preflight silently dropped  
   *[earendil-works/pi#10606](https://github.com/earendil-works/pi/issues/10606)*  
   Streaming mode inconsistencies causing missed prompts during early agent lifecycle stages.

9. **[#10082][OPEN]** Resuming a session will not render correct context level  
   *[earendil-works/pi#10082](https://github.com/earendil-works/pi/issues/10082)*  
   Incorrect context percentage display post-resume leads to premature compaction triggers.

10. **[#10754][CLOSED]** agent: tool ignoring abort signal pins run indefinitely  
    *[earendil-works/pi#10754](https://github.com/earendil-works/pi/issues/10754)*  
    Non-cooperative tools prevent graceful shutdown; affects real-time control loops in agent mode.

---

### Key PR Progress

1. **#10751 [OPEN]** feat(coding-agent): use pi.dev configuration schemas  
   *[earendil-works/pi#10751](https://github.com/earendil-works/pi/pull/10751)*  
   Centralizes schema definitions from pi.dev for consistent config validation across modules.

2. **#10747 [OPEN]** feat: allow custom Cloudflare AI Gateway domains and credentials  
   *[earendil-works/pi#10747](https://github.com/earendil-works/pi/pull/10747)*  
   Adds flexible proxying options for self-hosted gateways.

3. **#10672 [OPEN]** feat(ai,coding-agent): list only OpenRouter models a key may use  
   *[earendil-works/pi#10672](https://github.com/earendil-works/pi/pull/10672)*  
   Filters model catalog based on user-specific access keys post-refresh.

4. **#10745 [CLOSED]** Option to disable cursor repositioning with mouse  
   *[earendil-works/pi#10745](https://github.com/earendil-works/pi/pull/10745)*  
   Introduces `editorClickMovesCursor` setting for improved text selection UX.

5. **#9126 [OPEN]** fix(coding-agent): settle tool results before disposal  
   *[earendil-works/pi#9126](https://github.com/earendil-works/pi/pull/9126)*  
   Ensures interrupted tool responses are stored correctly before runtime exits.

6. **#10739 [OPEN]** fix(coding-agent): emit before_agent_start for runs started by custom messages  
   *[earendil-works/pi#10739](https://github.com/earendil-works/pi/pull/10739)*  
   Restores expected system prompt consistency during triggered turns.

7. **#10730 [OPEN]** fix(tui): render CJK emphasis next to fullwidth punctuation  
   *[earendil-works/pi#10730](https://github.com/earendil-works/pi/pull/10730)*  
   Resolves markdown rendering glitches affecting Chinese/Japanese/Korean locales.

8. **#10726 [OPEN]** fix: ignore Node watch notifications in codemode  
   *[earendil-works/pi#10726](https://github.com/earendil-works/pi/pull/10726)*  
   Prevents interference from `node --watch` mode in sandboxed execution bridges.

9. **#10718 [OPEN]** fix(coding-agent): include system prompt in --export HTML  
   *[earendil-works/pi#10718](https://github.com/earendil-works/pi/pull/10718)*  
   Aligns exported HTML sessions with interactive output formatting including system context.

10. **#10715 [CLOSED]** fix(ai): enable explicit context cache for Qwen token plan models  
    *[earendil-works/pi#10715](https://github.com/earendil-works/pi/pull/10715)*  
    Addresses zero cache-hit reports from Alibaba Cloud Qwen integrations.

---

### Feature Request Trends

- **Enhanced Windows Support**: Strong demand for unified Windows setup guides, installer improvements, and stable TUI experiences.
- **Improved Extension Lifecycle Management**: Requests for clearer load-order controls, reload triggers, and module resolution fixes.
- **Better Multiplexer Compatibility**: Terminal emulator and multiplexer integration issues (Zellij, tmux, ConPTY) frequently reported.
- **Customizable Session Behavior**: Demand for session persistence tuning, context tracking accuracy, and export/import enhancements.

---

### Developer Pain Points

- **Extension Failures Under Bun/Node Mismatches** (#10719): Compiled binaries fail to resolve JIT-compiled dependencies like `jiti`.
- **Inconsistent Hook Execution Across Flows** (#9773): Middleware hooks inconsistently applied, especially in summarization pipelines.
- **Clipboard and Selection Bugs** (#10393, #10741, #10743): Multiple reports of copy/paste malfunctions depending on terminal type/environment.
- **Provider-Specific Quirks** (#8643, #10497, #10652): Provider-specific edge cases require frequent patching or workarounds.
- **Race Conditions During Shutdown** (#9126, #10695): Tool finalization and worker teardown races leading to data loss or hangs.

--- 

*End of Digest – Stay tuned for tomorrow’s roundup!*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑10‑10**  

---

### 1. Today’s Highlights  
- Two new releases landed in the last 24 h: **v0.25.1‑preview.1** and the nightly **v0.25.0‑20261009.085a44f336**. Both contain the same core fix – *replace selected remote Hosts without losing bindings* – and a test‑core change that closes the post‑merge review for issue #12693.  
- The most‑discussed open issue is **#12380** (51 comments), which proposes a dual‑path Managed Agent architecture to decouple model inference from tool‑environment provisioning and give Sessions durable ownership.  
- Activity is heavily concentrated around **managed‑agent durability**, **session‑history/web‑shell reliability**, and **MCP/tool‑registry stability**, with several PRs and issues targeting foreground‑child recovery, context‑ceiling handling, and memory deduplication.

---

### 2. Releases  

| Version | Key Changes (last 24 h) |
|---------|--------------------------|
| **v0.25.1‑preview.1** | • `fix(agents)`: replace selected remote Hosts without losing bindings ([#13430](https://github.com/QwenLM/qwen-code/pull/13430))<br>• `test(core)`: close post‑merge review for #12693 (truncated in notes) |
| **v0.25.0‑nightly.20261009.085a44f336** | Same as above – remote‑Host fix and test‑core closure of #126 (truncated) |

Both releases are incremental stabilisation steps; no breaking changes were announced.

---

### 3. Hot Issues (10 picks)  

| Issue | Comments | Why it matters | Community reaction |
|-------|----------|----------------|--------------------|
| **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** – *Define Managed Agent dual‑path architecture and staged delivery* | 51 | Core roadmap item; proposes splitting model inference from tool provisioning, giving Sessions durable ownership and stable WebSocket handling. | High engagement; labelled *status/in‑progress*, *priority/P2*, *need‑discussion*. |
| **[#13395](https://github.com/QwenLM/qwen-code/issues/13395)** – *Kubernetes tool runtime 进度与跨平台交付门禁* | 19 | Tracks progress of the K8s‑based tool runtime and cross‑platform delivery gating – critical for enterprise adoption. | Active discussion; *status/in‑progress*, *priority/P2*. |
| **[#12867](https://github.com/QwenLM/qwen-code/issues/12867)** – *Stage D follow‑ups for durable lifecycle, Turns, Actions, durable admission and AgentDefinition* (closed) | 19 | Completes Stage D of the Managed Agent plan; adds durable lifecycle primitives and the `java_durable` admission profile. | Closed after implementation; shows steady progress. |
| **[#6710](https://github.com/QwenLM/qwen-code/issues/6710)** – *distinguish user‑cancelled turns from unexpected interruption after restore* | 15 | Affects reliability of session recovery; mis‑classifying cancellations can cause lost work or infinite loops. | Marked *status/in‑progress*, *priority/P1*. |
| **[#10797](https://github.com/QwenLM/qwen-code/issues/10797)** – *Non‑thinking scaffolding tags echoed into user‑visible output* | 10 | UI‑quality bug: internal tags (`<tool‑result>`, `<system‑reminder>`) leak into chat, degrading readability. | *status/in‑review*, *priority/P2*, welcome‑PR label. |
| **[#13632](https://github.com/QwenLM/qwen-code/issues/13632)** – *refresh a server's tools on notifications/tools/list_changed* | 8 | MCP‑specific: ensures the tool registry stays in sync when a remote server advertises changes. | New feature request; *priority/P2*. |
| **[#11408](https://github.com/QwenLM/qwen-code/issues/11408)** – *Deferred review findings from PR #9466: anchor rewind mapping to stable prompt identity* | 8 | Technical debt: prompt‑numbering after rewinds does not respect retained file‑snapshot identities, causing mis‑aligned context. | Deferred but still open; *priority/P2*. |
| **[#12952](https://github.com/QwenLM/qwen-code/issues/12952)** – *Stage G authoritative Session history, writer fencing and takeover* | 7 | Continues the Managed Agent roadmap; aims to externalise history/checkpoints and prove safe takeover semantics. | *status/need‑discussion*, *priority/P2*. |
| **[#10700](https://github.com/QwenLM/qwen-code/issues/10700)** – *Orphaned tool‑call closing tags leak as plain text* | 6 | Similar to #10797 but focuses on stray `</tool‑call>` tags; impacts output cleanliness. | *status/in‑review*, *priority/P2*. |
| **[#13533](https://github.com/QwenLM/qwen-code/issues/13533)** – *background‑process exit observation and capture backpressure for H3 enablement* | 6 | Unblocks Stage H3 (background Shell) by requiring a Broker that can observe external processes and bound capture. | *priority/P2*, *need‑discussion*. |

---

### 4. Key PR Progress (10 picks)  

| PR | Summary |
|----|---------|
| **[#13769](https://github.com/QwenLM/qwen-code/pull/13769)** – *restart‑recoverable foreground child wait (fixes #13708)* | Makes the foreground child‑agent wait of a Hosted Workspace Turn durable, writing a checkpoint so a crash before completion can be resumed. |
| **[#12559](https://github.com/QwenLM/qwen-code/pull/12559)** – *match ink’s OpenTUI popup geometry and completion truncation* | Aligns popup sizing with the Ink UI engine, preventing dialogs from pushing the composer off‑screen and fixing completion‑dropdown clipping. |
| **[#13811](https://github.com/QwenLM/qwen-code/pull/13811)** – *H4e‑a team record contract* | Provides the record‑contract half of slice H4e (team domains, detach to independent durable owner, close cascade) for managed child‑agents. |
| **[#13788](https://github.com/QwenLM/qwen-code/pull/13788)** – *size reactive compaction against the server‑reported context ceiling* | Uses the `contextOverflow.limitTokens` value from provider errors to drive reactive compaction, preventing over‑sized retries. |
| **[#13188](https://github.com/QwenLM/qwen-code/pull/13188)** – *close post‑merge takeover findings from #13083 review* | Addresses critical Hosted Turn takeover / G1 failover issues identified in the #13083 review, adding unit witnesses and fixing lock‑order problems. |
| **[#13530](https://github.com/QwenLM/qwen-code/pull/13530)** – *execute pinned AgentDefinition revisions* | Stores AgentDefinition ID/revision/digest and uses it to drive Session execution across D8b/D8c, ensuring reproducible agent behavior. |
| **[#12561](https://github.com/QwenLM/qwen-code/pull/12561)** – *notify integrators when managed memories change* | Emits a `MemoryChanged` hook after any managed memory create/update/delete or auto‑memory toggle, enabling external integrations to react. |
| **[#13778](https://github.com/QwenLM/qwen-code/pull/13778)** – *bind ephemeral loopback port in container‑mode tests* | Replaces hard‑coded port 43190 with a dynamic port in container tests, making CI more reliable on shared runners. |
| **[#13748](https://github.com/QwenLM/qwen-code/pull/13748)** – *display declared Channel submissions* | For ACP‑bridge sessions, uses a non‑blank original‑text declaration as the display projection when no channel‑worker classification exists. |
| **[#13810](https://github.com/QwenLM/qwen-code/pull/13810)** – *pin the history response byte limit* | Adds regression tests guaranteeing that an 8 MiB history payload is accepted and 8 MiB+1 MiB is rejected with HTTP 413, guarding the API contract. |

---

### 5. Feature Request Trends  

- **Managed Agent durability & lifecycle** – repeated calls for durable Sessions, turn‑level checkpoints, writer fencing, and externalised history (issues #12380, #12867, #12952, #13533, #13530).  
- **Multi‑agent attribution & API contract** – desire to expose an agent‑identity dimension on the public contract (issue #13785) and to make multi‑agent execution traceable.  
- **MCP tool‑registry synchronization** – automatic refresh on `tools/list_changed` notifications (issue #13632) and fixing unregistered HTTP‑MCP tools (issue #13796).  
- **Session‑recovery & Web‑Shell reliability** – distinguishing user cancellations (issue #

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-10-10

---

## 1. Today's Highlights

Development activity focused on finalizing the **v0.10.2 release candidate**, with major contributions addressing runtime stability, shell task management, and improved session handling. Key PRs include fixes for background task visibility, terminal dock enhancements, and CPU usage regressions. The community is also rallying around expanding localization efforts, particularly for Chinese documentation, via a dedicated call to form a translation group.

---

## 2. Releases

No new official releases were published in the last 24 hours. The team appears to be stabilizing around the **v0.10.2 RC**, tracked under [PR #6907](https://github.com/codewhale-hq/Codewhale/pull/6907).

---

## 3. Hot Issues

| Issue | Summary | Link |
|-------|---------|------|
| **[#6804] Localization Initiative** | A proposal to create a volunteer-driven Chinese localization group to improve accessibility of open-source docs. Strong emphasis on maintaining quality beyond machine-translated text. | [Link](https://github.com/codewhale-hq/Codewhale/issues/6804) |
| **[#6721] Session Save Reliability** | Discusses potential data loss risks when long-running tasks like saving sessions are interrupted due to emergency compaction. | [Link](https://github.com/codewhale-hq/Codewhale/issues/6721) |
| **[#6944] Background Task Visibility** | Highlights poor UX where long-running background tasks become invisible and block critical API access. | [Link](https://github.com/codewhale-hq/Codewhale/issues/6944) |
| **[#6652] TUI Scroll Lag** | Reports performance degradation in TUI scrolling after extended usage, causing noticeable lag/jelly effect. | [Link](https://github.com/codewhale-hq/Codewhale/issues/6652) |
| **[#6923] Gemini Auto-Retry on 429 Errors** | Requests automatic retry logic for rate-limited LLM calls, improving resilience during peak load times. | [Link](https://github.com/codewhale-hq/Codewhale/issues/6923) |
| **[#6931] Shell Task Inspectability** | Calls for better inspection and control over bash/shell operations initiated within Codewhale workflows. | [Link](https://github.com/codewhale-hq/Codewhale/issues/6931) |
| **[#6842] Unbounded Session Journal Growth** | Points out a memory leak caused by unbounded growth of session journals even after compaction. | [Link](https://github.com/codewhale-hq/Codewhale/issues/6842) |
| **[#6728] CPU Usage Regression** | Tracks progressive increase in CPU consumption across versions (v0.9.12 → v0.10.0), raising concerns about idle resource usage. | [Link](https://github.com/codewhale-hq/Codewhale/issues/6728) |
| **[#6155] Pet Mode Terminal Integration** | Seeks refinement of interactive pet mode inside real terminals, including resizing behavior and image fallbacks. | [Link](https://github.com/codewhale-hq/Codewhale/issues/6155) |
| **[#6945] Workflow Gate Deadlock** | Identifies a deadlock scenario where misconfigured workflow gates prevent execution instead of failing early. | [Link](https://github.com/codewhale-hq/Codewhale/issues/6945) |

---

## 4. Key PR Progress

| PR | Description | Link |
|----|-------------|------|
| **[#6907] v0.10.2 Release Candidate** | Comprehensive update adding terminal docking, shell wait controls, recovery improvements, and contributor-facing fixes. | [Link](https://github.com/codewhale-hq/Codewhale/pull/6907) |
| **[#6948] Named Blocking Operations** | Improves clarity of blocked session switches by naming the active job preventing transition. | [Link](https://github.com/codewhale-hq/Codewhale/pull/6948) |
| **[#6946] Dead Code Cleanup** | Removes obsolete `allow(dead_code)` lints, reducing codebase cruft. | [Link](https://github.com/codewhale-hq/Codewhale/pull/6946) |
| **[#6947] Junction Path Resolution Fix** | Fixes artifact path resolution issues when Codewhale home is relocated via symlinks/junctions (Windows-specific). | [Link](https://github.com/codewhale-hq/Codewhale/pull/6947) |
| **[#6949] Subagent State Root Handling** | Corrects sub-agent state validation path checks when state directory is moved or redirected. | [Link](https://github.com/codewhale-hq/Codewhale/pull/6949) |
| **[#6924] Per-Workspace Runtime Store Isolation** | Enables isolated runtime stores per workspace/client, avoiding conflicts between concurrent users/machines. | [Link](https://github.com/codewhale-hq/Codewhale/pull/6924) |
| **[#6930] Milestone Goal Handoff** | Allows agents to pause at defined milestones instead of running full goals, enabling mid-course corrections. | [Link](https://github.com/codewhale-hq/Codewhale/pull/6930) |
| **[#6928] Network Policy Reload Without Restart** | Ensures `/network allow` takes effect immediately without requiring an engine restart. | [Link](https://github.com/codewhale-hq/Codewhale/pull/6928) |
| **[#6920] Pet Mode as Main View** | Promotes pet animation interface to primary TUI view while preserving standard interaction patterns. | [Link](https://github.com/codewhale-hq/Codewhale/pull/6920) |
| **[#6950] Plugin Installation UX** | Introduces CLI-based plugin install flow and unified OAuth sign-in experience for hosted providers. | [Link](https://github.com/codewhale-hq/Codewhale/pull/6950) |

---

## 5. Feature Request Trends

- **Improved Localization Support**: Growing demand for multilingual interfaces and localized docs (especially Simplified Chinese) to broaden adoption.
- **Resilience Against API Limits**: Users want graceful handling of throttling/rate-limiting from cloud providers (e.g., Gemini 429 errors).
- **Better Shell Task Management**: Enhanced inspection, cancellation, and tracking of long-running shell commands within Codewhale sessions.
- **Performance Optimization in TUI**: Addressing gradual slowdowns and CPU spikes over time, especially under heavy terminal use.
- **Workflow Gate Flexibility**: Need for more robust and debuggable workflow gate logic to avoid runtime deadlocks.

---

## 6. Developer Pain Points

- **Memory Leaks & Retention**: Several reports indicate increasing memory pressure due to uncollected session state/journal entries post-compaction.
- **Inconsistent State Across Platforms**: Problems with symlinked/junctioned paths on Windows affecting both core functionality and tests.
- **Brittle Workflow Execution**: Misconfigured workflow gates leading to silent failures or unexpected halts rather than actionable feedback.
- **Stale Lint Suppressions**: Accumulation of unnecessary `#![allow(...)]` attributes cluttering the codebase and masking actual dead code.
- **Lack of Real-Time Feedback**: Long-running background tasks lack sufficient observability, making it hard for users to track progress or intervene.

--- 

*End of Digest*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*