# AI CLI Tools Community Digest 2026-10-03

> Generated: 2026-10-03 02:57 UTC | Tools covered: 9

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



# AI CLI Ecosystem Cross-Tool Comparison Report
**Date:** 2026-10-03 | **Scope:** 9 Major AI CLI Tools | **Source:** Community Digest Summaries

## 1. Ecosystem Overview
The AI CLI landscape in early October 2026 has transitioned from experimental wrappers to production-grade agent platforms, with development velocity now outpacing stability across most open-source communities. Feature competition has shifted decisively toward **extensibility** (mods, hooks, MCP) and **distributed agent architecture**, while recurring friction points now center on authentication reliability

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills summary generation failed.

---

# Claude Code Community Digest - October 3, 2026

## Today's Highlights

The v2.1.288 release brings significant improvements to the mods system with the addition of `$.ui.selection()` for capturing transcript selections, while built-in `gh api` support now works in cloud sessions without GitHub CLI. Issue #91870 is driving a major extensibility push with 237 comments discussing making Claude 10x more extensible through hooks and plugins. Meanwhile, issue #8327 highlights a critical authentication bug affecting Windows users with Max/Pro subscriptions.

## Releases

**v2.1.288** - Latest release focused on extensibility and cloud session improvements:
- Added `$.ui.selection()` for mods: returns text you last selected in fullscreen mode and, when selection lies within one transcript row, that row
- Added built-in `gh api` to cloud sessions whose image has no GitHub CLI
- Fixed built-in sending control character issue
[Release Details](https://github.com/anthropics/claude-code/releases/tag/v2.1.288)

## Hot Issues

1. **#91870** [OPEN] Mods - make Claude 10x more extensible (237 comments, 130 👍)
   - **Why it matters**: High-engagement discussion on core extensibility system, indicating community investment in making Claude Code more hackable
   - **Community reaction**: Strong positive reception with 130 upvotes, showing users want deeper customization capabilities

2. **#8327** [OPEN] "Organization has been disabled" error on Windows (121 comments, 19 👍)
   - **Why it matters**: Critical auth bug affecting paid subscription users who override with ANTHROPIC_API_KEY
   - **Impact**: Users with valid Claude Pro/Max subscriptions get disabled errors, breaking core functionality

3. **#33932** [OPEN] VS Code Extension: Diff review UI (39 comments, 201 👍)
   - **Why it matters**: Feature request for GitHub Copilot-like review experience, showing demand for enterprise-grade code review capabilities
   - **Community response**: Highest upvotes among UI requests, indicating strong user demand

4. **#15148** [OPEN] LSP plugin lspServers config not being processed (23 comments, 73 👍)
   - **Why it matters**: Core functionality bug preventing LSP plugins like typescript-lsp and pyright-lsp from working despite installation
   - **Impact**: Renders popular language support tools completely non-functional

5. **#87971** [OPEN] Claude abuses bash tools in Auto Mode (16 comments, 90 👍)
   - **Why it matters**: User experience issue where legitimate read/write operations are forced through bash, causing inefficiency and security concerns
   - **Community sentiment**: High upvotes showing widespread frustration with tool selection logic

6. **#90450** [OPEN] Auto Mode's Bash-first instruction disables nested rules (18 comments, 48 👍)
   - **Why it matters**: Configuration bug where higher-priority rules are silently overridden, breaking project-specific development workflows
   - **Technical impact**: Affects nested CLAUDE.md files and path-scoped rules users rely on for complex project setups

7. **#48511** [CLOSED] Desktop app: session history lost when switching accounts (8 comments, 12 👍)
   - **Why it matters**: Major user experience regression where switching accounts (e.g., quota exhaustion) discards all conversation history
   - **Scope**: Affects both Cowork and Code modes, indicating systemic session management issue

8. **#92533** [OPEN] Any function-hook tool.call on Bash breaks Agent isolation (3 comments, 2 👍)
   - **Why it matters**: Critical security/technical bug where registering any hook on Bash causes all Bash calls to be rejected for worktree-isolated agents
   - **Impact**: Completely breaks isolation for agents trying to use command-line tools

9. **#98262** [OPEN] Cannot enable bypass permissions mode for threads in "beta" projects (1 comment, 1 👍)
   - **Why it matters**: Feature access issue preventing users from managing multiple approval-heavy threads efficiently
   - **User pain**: "Extremely infuriating to try and manage 10+ threads at once that all want me to type approvals"

10. **#99122** [OPEN] Claude Code refuses to do anything without specific phrase (0 comments)
    - **Why it matters**: Potentially critical emerging bug where Claude Code is now demanding specific verbal commands for all operations
    - **Impact**: Could completely break existing workflows if this is a systemic change

## Key PR Progress

1. **#99118** [OPEN] diff: toasts show while the pane is open
   - **Impact**: Fixes issue where other plugins' toasts were being held while /diff pane was open, improving notification UX
   - **Status**: Addressing toast management across different UI components

2. **#97293** [OPEN] mods: declarations carry process.run's truncation flags and list entries' mtimeMs
   - **Impact**: Critical type declaration updates to match CLI behavior, ensuring TypeScript definitions reflect actual runtime behavior
   - **Technical significance**: Prevents type errors when using `$.process.run` and `$.fs.list` operations

3. **#77977** [CLOSED] docs(plugin-dev): document skipLfs marketplace sources
   - **Impact**: Documentation improvement for plugin developers on using `skipLfs` option with GitHub and Git marketplace sources
   - **Relevance**: Helps plugin developers optimize downloads and avoid unnecessary LFS processing

## Feature Request Trends

**Mod System Dominance**: Multiple high-engagement requests (#91870, #98986) focus on extending mods capabilities, suggesting the mods system is becoming a primary customization vector.

**Cross-Platform Consistency**: Numerous platform-specific bugs (Windows auth, macOS LSP, Linux networking, Android mobile) indicate ongoing challenges in maintaining consistent experiences across environments.

**Enterprise-Grade Features**: Requests for GitHub Copilot-like diff reviews (#33932) and better permissions management (#98262) show demand for professional developer tools.

**AI Safety & Controls**: Issues around content filtering (#99126, #99123) and prohibited-actions rules (#78985) reflect ongoing tension between AI capabilities and safety controls.

**Isolation & Security**: Multiple issues around agent isolation (#92533), workspace boundaries (#88550), and tool usage patterns suggest the community is actively experimenting with security boundaries.

## Developer Pain Points

**Authentication Chaos**: Windows subscription override bugs (#8327, #98134) and Apple Max subscription recognition issues show complex and inconsistent subscription management.

**Tool Selection Inconsistencies**: Auto Mode forcing bash usage (#87971) and isolation guard issues with tilde expansion (#88550) create unpredictable behavior.

**Configuration Complexity**: LSP plugin configuration not working (#15148) and nested rule overrides (#90450) indicate brittle configuration systems.

**Session Management Failures**: Complete session history loss when switching accounts (#48511) and remote control tool inconsistencies (#88731) break user trust.

**Platform-Specific Nightmares**: Copy-paste failures in Ghostty (#88756), terminal shell integration issues (#98979), and network change hangs (#98184) show testing is not keeping pace with platform diversity.

**GitHub Integration Frustration**: Multiple reports of GitHub integration issues (#99124, #99127) suggest API integration problems are persistent.

**Emerging Behavioral Changes**: The strange phrase requirement (#99122) points to potentially confusing policy changes that need clarification.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**1. Today’s Highlights**  
The rust‑v0.162.0‑alpha.9 pre‑release landed, bringing the latest incremental improvements to the core runtime.  Community attention is focused on a wave of VS Code and Chrome integration bugs – especially message‑queue failures and Chrome‑plugin site‑load refusals – while a handful of PRs were merged that streamline copy/paste handling, improve diagnostics, and add ultrafast Bedrock tiers.

**2. Releases**  
- **rust‑v0.162.0‑alpha.9** (released 2026‑10‑03) – the newest alpha of the 0.162 series; no detailed changelog is attached, but it follows the regular alpha cadence.  
*No other package releases were published in the last 24 h.*

**3. Hot Issues** *(selected for impact, comment volume, and community sentiment)*  

| # | Issue (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| 29343 | [Chrome plugin refuses to load certain sites](https://github.com/openai/codex/issues/29343) | Chrome‑extension integration is broken for a subset of sites, preventing users from accessing content via Codex. | 40 comments, 16 👍 – many users reporting the same failure. |
| 49834 | [VS Code undefined fetch → JSON parse error](https://github.com/openai/codex/issues/49834) | A malformed internal fetch response crashes the VS Code extension, losing queued messages. | 18 comments, 2 👍 – high‑visibility bug for developers. |
| 49975 | [Messages stuck in send queue – “undefined” not valid JSON](https://github.com/openai/codex/issues/49975) | Queued messages never send because the lock‑release step produces invalid JSON, causing silent failures. | 16 comments, 0 👍 – frustration over silent data loss. |
| 49991 | [VS Code messages disappear or spin forever](https://github.com/openai/codex/issues/49991) | Users see messages vanish or remain in a pending state after the 26.928 extension update. | 11 comments, 11 👍 – strong community interest, many up‑votes. |
| 50403 | [Queued messages silently fail – “Failed to release queued message send lock”](https://github.com/openai/codex/issues/50403) | Same class of VS Code send‑queue problem; affects pro users on Windows. | 7 comments, 0 👍 – indicates a regression. |
| 48835 | [CLI MCP fails at startup – HTTP request failed](https://github.com/openai/codex/issues/48835) | The `codex_apps` MCP cannot initialize, breaking workflows that rely on CLI tools. | 7 comments, 0 👍 – impacts automation pipelines. |
| 50265 | [codex cloud does not discover current Cloud environments](https://github.com/openai/codex/issues/50265) | Cloud‑environment detection is broken, preventing users from switching between environments. | 3 comments, 0 👍 – a blocker for cloud‑first usage. |
| 50490 | [Windows sandbox fails – deny‑read ACLs](https://github.com/openai/codex/issues/50490) | Security‑policy enforcement breaks browser‑based workflows on Windows. | 3 comments, 0 👍 – security‑focused report. |
| 49557 | [Windows desktop startup hangs – missing backend version](https://github.com/openai/codex/issues/49557) | Users experience minutes‑long start‑up stalls, hurting productivity. | 3 comments, 0 👍 – stability concern. |
| 50137 | [Text selection highlight invisible in dark mode](https://github.com/openai/codex/issues/50137) | UI contrast issue makes selected text hard to read in dark themes. | 1 comment, 0 👍 – usability tweak. |

**4. Key PR Progress** *(closed PRs that deliver user‑visible changes)*  

| # | PR (link) | Summary of change |
|---|-----------|-------------------|
| 50503 | [Use Enter to accept transcript find results and Escape to cancel](https://github.com/openai/codex/pull/50503) | Improves find‑in‑transcript UX: `Enter` accepts a result, `Escape` cancels, preventing accidental composer submissions. |
| 50499 | [Include installer stderr in daemon update failures](https://github.com/openai/codex/pull/50499) | Captures the last 2 KiB of installer stderr and appends it to daemon error logs for better diagnostics. |
| 50480 | [Skip managed config loading for registered Windows sandbox refreshes](https://github.com/openai/codex/pull/50480) | Avoids unnecessary config reloads when only a sandbox refresh is requested, reducing latency. |
| 50477 | [Use the app‑server default output cap for TUI workspace commands](https://github.com/openai/codex/pull/50477) | Removes a hard‑coded 64 KiB cap, letting commands use the server‑defined limit while preserving an opt‑out flag. |
| 50472 | [Enable Ultrafast service tiers for Amazon Bedrock Astra models](https://github.com/openai/codex/pull/50472) | Re‑exposes the `ultrafast` tier after catalog metadata loss, allowing users to select it again. |
| 50470 | [Account for JSON overhead when truncating MCP tool results](https://github.com/openai/codex/pull/50470) | Measures the full serialized payload (including JSON escaping) before truncation to stay within byte budgets. |
| 50467 | [Copy transcript selections as literal text while preserving rich HTML](https://github.com/openai/codex/pull/50467) | Separates literal selection text from rendered Markdown, so copied content is clean plain text. |
| 50465 | [Retry registry authentication outages and jitter executor reconnects](https://github.com/openai/codex/pull/50465) | Adds robust retry logic for authentication failures and exponential back‑off for executor reconnections. |
| 50464 | [Add the `incremental_tools` feature flag](https://github.com/openai/codex/pull/50464) | Introduces a new under‑development flag (`incremental_tools`) exposed in the config schema. |
| 50462 | [Populate thread previews from delegated task inputs](https://github.com/openai/codex/pull/50462) | Extracts preview data from delegated task payloads so threads are discoverable even before a user message. |

**5. Feature Request Trends**  
- **Copy & Paste Enhancements** – multiple requests ask for literal‑text copying (no Markdown), disabling Markdown serialization, and preserving rich HTML when copying selections.  
- **UI/UX Controls** – opt‑in mouse capture for the TUI, better handling of find‑result acceptance, and clearer copy‑behavior toggles.  
- **Diagnostics & Error Reporting** – requests to surface installer stderr, improve JSON‑parse error messages, and make sandbox ACL failures more explicit.  
- **Performance & Resource Management** – skip unnecessary config loads, use server‑default output caps, and bound MCP result sizes to avoid memory bloat.  
- **Sandbox & Security** – fix Windows sandbox ACL handling, improve Chrome‑plugin site‑load permissions, and resolve WebAuthn dead‑ends for owner‑only sites.  
- **New Service Tiers** – enable ultrafast Bedrock tiers after catalog metadata loss, expanding high‑performance options for users.

**6. Developer Pain Points**  
- **VS Code Extension Instability** – frequent “messages stuck in queue,” undefined fetch responses, disappearing prompts, and silent send‑lock failures (issues #49834, #49975, #50403, #49991, #50265).  
- **Chrome/Plugin Integration Bugs** – Chrome extension refuses to load certain sites (#29343) and WebAuthn dead‑ends for owner‑only sites (#37999).  
- **CLI & MCP Startup Failures** – `codex_apps` MCP cannot initialize due to HTTP errors (#48835) and daemon lock errors (#48911).  
- **UI Contrast & Accessibility** – invisible text selection highlight in dark mode (#50137) and poor accessibility of copy/paste actions.  
- **Performance Bottlenecks** – long timeouts scanning workspace roots (#46974), excessive plugin catalog downloads on cold starts (#47483), and high CPU usage during startup (#48729).  
- **Diagnostic Gaps** – lack of installer error details in daemon update failures (#50499) and vague “undefined” JSON errors that hinder troubleshooting.  

*All issue and PR links are live on GitHub; see the respective URLs for the latest comments and status.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-10-03

## Today's Highlights
Gemini CLI v0.64.0-nightly.20261003.gfb972b2f8 was released with a critical fix for selection list navigation reliability. Meanwhile, ongoing issues reveal persistent challenges with agent reliability, including subagent recovery problems, hanging behavior in generalist agents, and configuration inconsistencies across browser and core functionality.

## Releases
**v0.64.0-nightly.20261003.gfb972b2f8**
- Fixed CLI selection list options to ensure Enter and Spacebar reliably confirm user selections
- Built on commit gfb972b2f8 with comprehensive changelog available for detailed changes

## Hot Issues

1. **#22323** - *Subagent recovery after MAX_TURNS reported as GOAL success* (13 comments)
   - **Why it matters**: Codebase investigator subagents incorrectly report "GOAL" success when hitting turn limits, hiding interruption failures. Critical for accurate agent performance tracking.
   - **Community**: 2 upvotes, priority/p1 bug in agent area

2. **#21409** - *Generalist agent hangs indefinitely* (8 comments)
   - **Why it matters**: Simple operations like folder creation cause infinite hangs when agents defer to generalist agent, impacting productivity. Major blocker for reliable agent interactions.
   - **Community**: 8 upvotes, high-priority/p1 issue in agent area

3. **#24246** - *400 error with > 128 tools* (3 comments)
   - **Why it matters**: CLI encounters errors with large tool sets, affecting workflows requiring extensive tool capabilities. Impacts scalability of complex agent operations.
   - **Community**: 0 upvotes, priority/p2 concern

4. **#22672** - *Agent should stop/discourage destructive behavior* (3 comments)
   - **Why it matters**: Models occasionally use destructive commands like `git reset` or `--force` when safer alternatives exist. Critical for user data protection.
   - **Community**: 1 upvote, safety/priority issue

5. **#22267** - *Browser Agent ignores settings.json overrides* (4 comments)
   - **Why it matters**: Browser Agent completely ignores configuration overrides from settings.json files, breaking expected configuration management.
   - **Community**: 0 upvotes, priority/p2 agent configuration issue

6. **#22746** - *AST-aware file reads, search, and mapping assessment* (7 comments)
   - **Why it matters**: Investigating AST-aware tools for more precise code analysis, potentially reducing token consumption and improving code navigation accuracy.
   - **Community**: 1 upvote, enhancement investigation

7. **#23571** - *Model creates tmp scripts in random spots* (3 comments)
   - **Why it matters**: Models generate multiple edit scripts across directories when restricted from shell execution, creating cleanup overhead and poor workspace management.
   - **Community**: 0 upvotes, priority/p2 UX issue

8. **#22232** - *Enhance browser_agent resilience* (4 comments)
   - **Why it matters**: Browser Manager employs restrictive "fail-fast" strategy for locked profiles, lacking robust session recovery mechanisms.
   - **Community**: 0 upvotes, priority/p3 enhancement

9. **#21983** - *Browser subagent fails in Wayland* (4 comments)
   - **Why it matters**: Browser agent fails under Wayland display system, limiting cross-platform compatibility for users on Linux Wayland environments.
   - **Community**: 1 upvote, priority/p1 platform-specific bug

10. **#20079** - *Symlink agents not recognized* (4 comments)
    - **Why it matters**: Agents in `~/.gemini/agents/` are not loaded when stored as symlinks, limiting flexible agent management and deployment options.
    - **Community**: 0 upvotes, priority/p2 configuration issue

## Key PR Progress

1. **#29402** - *Make persistent state writes failure-safe*
   - **Status**: Closed - Implemented atomic write pattern with temp file, fsync, and rename to prevent corrupted state.json on interrupted saves
   - **Impact**: Critical reliability fix for persistent CLI state management

2. **#29400** - *Fix duplicate tool responses*
   - **Status**: Closed - Prevented duplicate function responses when resuming sessions with `-r` flag
   - **Impact**: Fixed session restoration issues causing redundant tool execution

3. **#29397** - *Prevent session context poisoning*
   - **Status**: Closed - Fixed context pollution when agentic loops are interrupted with synthetic turns
   - **Impact**: Critical bug fix preventing memory bloat and session corruption

4. **#29394** - *Enforce user hold directives*
   - **Status**: Closed - Added scheduler layer blocking mutating tools when users request "wait", "explain first", etc.
   - **Impact**: Fixes aggressive action bias overriding explicit user instructions

5. **#29398** - *Bound MCP tool discovery timeout*
   - **Status**: Closed - Set short timeout for initial MCP tool discovery to prevent hanging on misconfigured servers
   - **Impact**: Resolves #28355 where MCP servers could cause 10-minute waits

6. **#29399** - *Preserve unrelated comments during edits*
   - **Status**: Closed - Strengthened replace tool contract to preserve surrounding comments and code
   - **Impact**: Improves code preservation during model editing operations

7. **#29596** - *Support rootless Podman with keep-id*
   - **Status**: Open - Fixes sandbox startup for rootless Podman by preserving host user UID/GID
   - **Impact**: Enables rootless container environments for sandboxed CLI operations

8. **#29597** - *Companion IPC socket fallback for gVisor*
   - **Status**: Open - Enables stdio IPC fallback for gVisor/runsc sandboxes isolating loopback interface
   - **Impact**: Fixes container host/token configuration in gVisor environments

9. **#29619** - *Version bump to 0.64.0-nightly.20261003*
   - **Status**: Open - Automated version bump for latest nightly release
   - **Impact**: Prepares for next release cycle

10. **#29618** - *Avoid duplicate tool response turns*
    - **Status**: Open - Prevents duplicate turn deserialization when resuming recorded sessions
    - **Impact**: Fixes session restoration duplication issues

## Feature Request Trends

1. **Agent Intelligence & Self-Awareness**: Multiple issues (#21432, #21968, #22598) focus on making agents more knowledgeable about their own capabilities, settings, and behaviors. Developers want agents that understand CLI flags, hotkeys, and can explain their own operations.

2. **AST-Aware Code Navigation**: Several investigations (#22746, #22747, #22745) explore using Abstract Syntax Tree tools for more precise file reading, searching, and codebase mapping. The goal is surgical code discovery that reduces token consumption and improves accuracy.

3. **Enhanced Browser Integration**: Issues (#22232, #21983, #22267) highlight needs for more robust browser agent capabilities, including session recovery, Wayland support, and proper configuration handling.

4. **Safety & Control Improvements**: Requests for better destructive behavior prevention (#22672), user hold directive enforcement, and more granular tool management (#24246) reflect growing concerns about agent safety and user control.

5. **Task Management Evolution**: Issues (#18836, #21000) push for moving from in-context WriteToDo tracking to persistent file-based task tracking with CRUD capabilities, addressing context rot and session memory loss.

6. **Skill & Agent Management**: Symlink support (#20079), skill activation in non-interactive mode (#29546), and better agent trajectory visibility (#22598) indicate demand for more flexible and observable agent ecosystems.

## Developer Pain Points

1. **Unreliable Agent Behavior**: Hanging agents (#21409), incorrect status reporting (#22323), and inconsistent tool handling (#24246) create major productivity blockers. Developers struggle with unpredictable agent performance.

2. **Configuration Management Frustration**: Browser Agent ignoring settings.json (#22267) and symlink agents not loading (#20079) reveal inconsistent configuration handling across components.

3. **Session Management Issues**: Duplicate tool responses during session restoration, context pollution from interruptions, and poor trajectory sharing (#22598) make debugging and analysis difficult.

4. **Platform Compatibility Problems**: Wayland browser failures (#21983), rootless Podman issues (#29505), and gVisor sandbox limitations (#29597) create environment-specific obstacles.

5. **Safety Concerns**: Lack of destructive behavior prevention (#22672), inadequate user hold enforcement, and unclear agent self-awareness (#21432) raise security and control questions.

6. **Performance & Scaling**: 400 errors with many tools, token bloat from naive file reading, and multi-second ignore filtering delays (#29582) impact productivity at scale.

7. **Workflow Disruptions**: Temporary script clutter (#23571), poor temporary file management, and inconsistent state handling across operations create friction in development workflows.

The community is actively addressing these pain points through targeted fixes, with several high-priority issues receiving focused attention in recent PRs and development cycles.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest — 2026-10-03**

**1. Today's Highlights**
Three patch releases (v1.0.92-1 through -3) addressed input ordering, sandbox network bypass prompts, and MCP server reconnection stability. Community activity centers on MCP configuration loading failures, BYOK provider compatibility regressions, and permission handling gaps. One new PR was opened for initial commit.

**2. Releases**
- **v1.0.92-3** — Added pre-conversation `Ctrl+E` environment picker; fixed keyboard/paste/mouse input ordering during rapid interaction; added network bypass prompt for sandboxed shell commands when proxy blocks destinations.
- **v1.0.92-2** — Fixed Windows sandboxed commands writing temp files outside granted directory; ensured single `sessionEnd` hook fires after Stop-hook continuations.
- **v1.0.92-1** — Fixed MCP server reconnection after idle Streamable HTTP expiry; background agent steering now works at next processing opportunity; context rollovers preserve latest requests; removed automatic sandbox CA setup prompt.

**3. Hot Issues**
1. [#4438](https://github.com/github/copilot-cli/issues/4438) — `disable-model-invocation: true` makes skills unreachable (11 comments, 12 👍) — *OPEN*
2. [#4832](https://github.com/github/copilot-cli/issues/4832) — Workspace `.mcp.json` never loaded in CLI 1.0.83 (4 comments) — *CLOSED*
3. [#3172](https://github.com/github/copilot-cli/issues/3172) — "Somebody else owns the clipboard" breaks layout (4 comments, 13 👍) — *CLOSED*
4. [#4840](https://github.com/github/copilot-cli/issues/4840) — BYOK not working with Deepseek (3 comments) — *OPEN*
5. [#4012](https://github.com/github/copilot-cli/issues/4012) — BYOK reasoning effort not supported for `glm-5.2:cloud` (3 comments, 23 👍) — *CLOSED*
6. [#1825](https://github.com/github/copilot-cli/issues/1825) — Empty Input Schema breaks Copilot CLI (3 comments, 10 👍) — *CLOSED*


</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## 1. Today's Highlights

No new OpenCode releases were published in the last 24 hours. The most important activity focused on stabilizing streaming/SSE behavior, fixing provider routing and configuration gaps, and improving desktop/web data integrity. Community attention is concentrated on Go subscription usage limits, Windows service stability, custom provider support, and provider-side endpoint handling.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

- [anomalyco/opencode#23153](https://github.com/anomalyco/opencode/issues/23153) — Open feature request to support crypto payments for OpenCode Go. It has strong community reaction with 24 comments and 55 👍, indicating sustained demand for alternative payment methods.
- [anomalyco/opencode#52371](https://github.com/anomaly

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-10-03

---

## 1. Today's Highlights

The Pi ecosystem is seeing a surge of activity around TUI performance, provider integrations, and critical bug fixes. A long-awaited TUI rendering optimization landed, diffing raw lines to preserve pointer equality and avoid full-buffer re-renders on every frame. Meanwhile, Bedrock received two targeted fixes — one for thinking-block replay validation errors and another for long-context pricing on OpenAI models. Cloudflare's Clef decision models and native llama.cpp classifier support round out the major feature additions.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

**#7547 — [Windows] How do you use Pi on Windows?** (72 comments, 👍 2)
The top-engagement issue asks the community how Pi is currently used on Windows and what pain points exist. The goal is to triage where core effort should go (bug fixes, docs, out-of-box experience) vs. what can be delegated to extensions. This is a strategic direction-setting thread, not a bug report. [Link](https://github.com/earendil-works/pi/issues/7547)

**#5653 — Move off Shrinkwrap** (26 comments, 👍 0)
Installing both `pi-ai` and `pi-coding-agent` as direct deps results in two copies of `pi-ai` on disk — one hoisted, one nested. Since the API provider registry is a module-level `Map`, the two copies are separate module instances, causing provider conflicts. This is a fundamental packaging issue affecting dependency resolution. [Link](https://github.com/earendil-works/pi/issues/5653)

**#7730 — High CPU usage on Mac OS with long session** (18 comments, 👍 10)
Users report CPU swinging between 50–110% with memory at 600–800MB on macOS. The issue appears linked to context size or session length. With 10 👍, this is the most community-validated bug in the digest. [Link](https://github.com/earendil-works/pi/issues/7730)

**#10300 — ChatGPT OAuth ID token is not persisted** (13 comments, 👍 0)
In Pi 0.99.2, the ChatGPT OAuth login flow drops the `id_token` field when constructing saved credentials via `credentialFromTokenResponse`. This prevents extensions from accessing account identity, breaking downstream integrations that rely on the ID token. [Link](https://github.com/earendil-works/pi/issues/10300)

**#9255 — TuiMainScreen: full-screen redraw storm** (10 comments, 👍 1)
On long transcripts where content height far exceeds viewport height, `doRender()` triggers `fullRender(true)` for nearly every frame because the changed-row index falls above the viewport top. This causes violent jumping and doubled text during streaming. The TUI rendering model struggles with long sessions. [Link](https://github.com/earendil-works/pi/issues/9255)

**#10011 — Proposal: hide tool rows in interactive transcript** (8 comments, 👍 0, CLOSED)
A request for an interactive TUI mode that hides completed tool-call and tool-result rows while keeping the working indicator visible. The mode must be render-only — tool execution, session JSONL, and model context must remain unchanged. [Link](https://github.com/earendil-works/pi/issues/10011)

**#10258 — ChatGPT OAuth Error 400 when signing in** (7 comments, 👍 1)
Users get `invalid_grant` errors when adding the OpenAI provider via ChatGPT OAuth, though `open-codex (legacy)` works fine. This suggests the new OAuth flow has a token exchange issue specific to certain accounts. [Link](https://github.com/earendil-works/pi/issues/10258)

**#10162 — Too many input images stop the agent task** (6 comments, 👍 0)
With long-running agent tasks (e.g., babysitting a PR), excessive input images can halt the agent. Users rely on Pi's auto-compaction tool to keep going indefinitely, but image-heavy contexts bypass this mechanism. [Link](https://github.com/earendil-works/pi/issues/10162)

**#10256 — Terminal color query replies leak into the prompt** (6 comments, 👍 1)
On startup, Pi opens an external editor, but the prompt contains leaked terminal color query responses (`;0;rgb:...`). Affects mintty on Windows with native node.exe and `TERM=xterm`. Versions 0.99.x are affected; 0.87.1 is fine. [Link](https://github.com/earendil-works/pi/issues/10256)

**#10257 — Switching to Codex fails with custom-tool ID error** (5 comments, 👍 0)
Switching mid-chat from Muse to GPT-6.1 Sol fails with `Invalid 'input[1].id': 'fc_d74wbrca4514'. Expected an ID that begins with 'ctc'`. Earlier `codemode` calls are replayed as `custom_tool_call` with `fc_` IDs, creating an ID prefix mismatch. [Link](https://github.com/earendil-works/pi/issues/10257)

## 4. Key PR Progress

**#10383 — perf(tui): diff raw lines so unchanged lines keep pointer equality** (CLOSED)
Fixes a fundamental TUI rendering inefficiency: `doRender()` normalized every line before the differential pass, so `previousLines` never held the same string objects as the freshly rendered buffer. This degraded `oldLine !== newLine` into a full-buffer string comparison on every frame. The fix preserves pointer identity for unchanged lines, making the diff pass O(1) per unchanged line. [Link](https://github.com/earendil-works/pi/pull/10383)

**#10382 — feat(coding-agent): use llama.cpp classifier models natively** (OPEN)
Loaded llama.cpp models are now probed once per session via `/v1/systemone`. Decision models (Julia-1, Laya, Kev, lev, OpenJev) are listed as `typesafe-system-one` classifiers instead of chat models; other models retain the llama-cpp-classify fallback. Only 501 and 404 responses mark a model as chat. [Link](https://github.com/earendil-works/pi/pull/10382)

**#9714 — feat(ai): support Azure Foundry Chat Completions deployments** (OPEN)
The Azure provider previously only implemented the Responses API, blocking Foundry deployments using Chat Completions (e.g., DeepSeek V4 Pro). This PR expands Azure to support Chat Completions, with `deepseek-v4-pro` added to the built-in catalog. [Link](https://github.com/earendil-works/pi/pull/9714)

**#10328 — fix(ai): drop mismatched thinking blocks on Bedrock** (CLOSED)
Closes #10324. Bedrock adaptive thinking requests now send `block_binding: { prefix_mismatch_behavior: "drop_block" }` with the `thinking-binding-controls-2026-08-01` beta. A thinking block replayed after a system prompt or tool change is now dropped instead of returning a 400 validation error. [Link](https://github.com/earendil-works/pi/pull/10328)

**#10372 — feat(cpp): add Bazel build foundation** (CLOSED)
A Bazel 8 workspace for the C++ backbone: module macros, style checker with tests, clang-tidy config, and `interfaces/` + `src/` layout. IClock and SystemClock serve as the reference module pair. This establishes the build infrastructure for the C++ port. [Link](https://github.com/earendil-works/pi/pull/10372)

**#10329 — fix(ai): long-context pricing tier for OpenAI on Bedrock** (CLOSED)
Bedrock entries for OpenAI GPT models had no `cost.tiers`, so requests over 272k input tokens were costed at the short-context rate. Bedrock bills them like OpenAI: past 272k, the whole request is 2x input and cache, 1.5x output. Applied in the model generator. [Link](https://github.com/earendil-works/pi/pull/10329)

**#10368 — fix(coding-agent): keep hidden tool guidance out of rules and skills hint** (CLOSED)
`prepareLoadout`'s `hiddenDeclarations` dropped a tool's declaration from `<tools>` while the tool stayed executable — but `<rules>` and the skills hint were still built from the executable set. A model could see guidance for tools it couldn't see (e.g., hidden `bash` kept emitting rules). [Link](https://github.com/earendil-works/pi/pull/10368)

**#10365 — fix(ai): fold disjoint streaming `reasoning_tokens` into output for OpenAI-compatible gateways** (CLOSED)
Some OpenAI-compatible gateways report token usage inconsistently: `completion_tokens` includes `reasoning_tokens` in non-streaming but excludes it in streaming. This fix folds disjoint `reasoning_tokens` into output for consistent accounting. [Link](https://github.com/earendil-works/pi/pull/10365)

**#10316 — feat(ai): add Cloudflare Clef classifiers to Workers AI** (CLOSED)
Adds Cloudflare's Clef decision models (`@cf/cloudflare/clef` 27B at $0.24/M input, `@cf/cloudflare/clef-flash` 9B at $0.09/M input) to the Workers AI classifier catalog. Clef is Jev-API compatible, slotting into the same seam as `typesafe/jev`. [Link](https://github.com/earendil-works/pi/pull/10316)

**#10361 — fix(coding-agent): preserve multiline syntax highlighting** (CLOSED)
Fixes #10143. The renderer formatted each multiline highlight.js span only once, but after the TUI split output into independently rendered lines, continuation lines had no opening ANSI style. Now applies the active formatter to each nonempty line in the shared renderer. [Link](https://github.com/earendil-works/pi/pull/10361)

## 5. Feature Request Trends

- **TUI rendering control**: Users want finer control over what's displayed in the interactive transcript — specifically hiding completed tool rows while keeping execution alive (#10011, #9255).
- **Windows support clarity**: The community is asking for guidance on how Pi works on Windows and what the support model should be (#7547).
- **Extension lifecycle parity**: Multiple reports (#10366, #10388) indicate that extension hooks (`transform_context`, `before_request`, etc.) and `prompt()` calls from `agent_settled` handlers don't dispatch correctly in pi-web hosted sessions.
- **Image handling robustness**: Concerns about image-heavy contexts breaking agent continuity (#10162) and inline images collapsing on scroll in fullscreen TUI (#10319).
- **Provider flexibility**: Requests for Chat Completions support on Azure (#9714), Cloudflare Clef classifiers (#10316), and llama.cpp native classifier models (#10382) point to demand for broader model/provider coverage.

## 6. Developer Pain Points

- **TUI performance with long sessions**: Full re-renders cause scroll/typing lag at 800+ messages (#9807), redraw storms on long transcripts (#9255), and high CPU on macOS (#7730). The recent pointer-equality fix (#10383) is a step, but the underlying rendering model still needs incremental diffing at the cell level.
- **OAuth and authentication fragility**: ChatGPT OAuth has multiple failure modes — ID token not persisted (#10300), `invalid_grant` errors (#10258), and repeated `refresh_token_invalidated` failures (#10377). The OAuth flow across providers is a recurring source of frustration.
- **Context estimation drift**: `getContextUsage()` massively overestimates after retryable network errors (#10287) and after system-prompt/tool-set changes (#10307), leading to incorrect billing and context management.
- **Packaging/dependency resolution**: The shrinkwrap issue (#5653) causes duplicate module instances with separate provider registries — a subtle but critical problem for anyone installing multiple Pi packages.
- **Extension API gaps**: Extensions report that lifecycle hooks don't fire in pi-web (#10366), `prompt()` calls from handlers silently defer with no signal (#10388), and contributed system prompts are dropped on runs without a user prompt (#10267). These are sharp edges in the extension model.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-10-03

---

## **Today's Highlights**

The Qwen Code project continues rapid iteration on its **Managed Agent architecture**, with new PRs advancing staged session management, runtime-backed tools, and durable state guarantees. A fresh **nightly release (v0.24.7-nightly.20261002)** addresses core fixes around Code Mode alignment and permission handling. Active community engagement focuses on multi-agent orchestration, token efficiency, and web shell enhancements.

---

## **Releases**

### `v0.24.7-nightly.20261002.a011f66944`
A nightly build incorporating key fixes:
- **Core Fix**: Aligned Code Mode text rendering with lazy tool discovery logic ([#12990](https://github.com/QwenLM/qwen-code/pull/12990))
- **Permissions Fix**: Honors approved credentials during session flows ([#12991](https://github.com/QwenLM/qwen-code/pull/12991))

> ⚠️ No major feature additions; primarily bug resolution and groundwork for upcoming stable release candidates.

---

## **Hot Issues**

| Issue | Summary | Why It Matters |
|-------|--------|----------------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) – Managed Agent Dual-Path Architecture | Proposes a staged design decoupling TS agent loop from inference/tool provisioning. | Core roadmap item shaping future scalability and durability in distributed agents. High discussion activity (42 comments). |
| [#12028](https://github.com/QwenLM/qwen-code/issues/12028) – Token Governance | Tracks governance of non-conversation tokens (sys prompts, tool schemas) to reduce overhead. | Directly impacts cost control and performance at scale. |
| [#12091](https://github.com/QwenLM/qwen-code/issues/12091) – Session Deletion Bug | Deleting an active session corrupts its transcript file due to lingering writer reappending logs. | Critical reliability flaw affecting session lifecycle integrity. |
| [#13122](https://github.com/QwenLM/qwen-code/issues/13122) – Stale Host Credential Leak | Re-enrollment after auth failure retains old host rows with still-valid secrets. | Security-sensitive issue requiring cleanup mechanisms. |
| [#13130](https://github.com/QwenLM/qwen-code/issues/13130) – Desktop Trust Regression | Workspaces randomly turned untrusted causing read-only mode. | Breaks desktop usability significantly; urgent fix needed. |
| [#13208](https://github.com/QwenLM/qwen-code/issues/13208) – Output Budgeting Flaw | Side queries bypass context window awareness when setting max tokens. | Can cause unexpected truncation or OOM errors in long-context models. |
| [#13234](https://github.com/QwenLM/qwen-code/issues/13234) – TLS Stack Resets | TLS handshake failures occur selectively on carrier networks between BoringSSL vs OpenSSL stacks. | Affects cross-platform compatibility and cloud deployment stability. |
| [#13191](https://github.com/QwenLM/qwen-code/issues/13191) – AgentDefinition Review Deferrals | Follow-ups from prior PR reviews regarding schema and documentation discrepancies. | Impacts SDK consistency and developer onboarding. |
| [#13251](https://github.com/QwenLM/qwen-code/issues/13251) – Memory Extraction Deferrals | Deferred suggestions around memory selector accuracy and eviction behavior. | Refinement work for smarter memory management. |
| [#13249](https://github.com/QwenLM/qwen-code/issues/13249) – Silent CodeQL Failures | Nightly CodeQL scans fail silently without alerting maintainers. | DevOps risk mitigation required. |

---

## **Key PR Progress**

| PR | Summary | Status |
|----|---------|--------|
| [#13174](https://github.com/QwenLM/qwen-code/pull/13174) – Adopt G3 Hosted Harness Generation | Enables seamless transition between harness generations post-restart. | ✅ Merged |
| [#13090](https://github.com/QwenLM/qwen-code/pull/13090) – Tool Output Collection Deployment Gates | Adds test coverage for MySQL/OSS/cloud storage retention paths. | ✅ Merged |
| [#12939](https://github.com/QwenLM/qwen-code/pull/12939) – Email Channel via IMAP/SMTP | Introduces provider-neutral email channel for mailbox-based agent interaction. | ✅ Merged |
| [#13192](https://github.com/QwenLM/qwen-code/pull/13192) – Preserve Writer/Pub Deadline Epochs | Fixes timezone discrepancies in lease expiration timestamps. | ✅ Merged |
| [#13167](https://github.com/QwenLM/qwen-code/pull/13167) – M5a: Runtime-backed Tool Execution | First integration of runtime workers into managed session tooling pipeline. | 🚀 In Review |
| [#13163](https://github.com/QwenLM/qwen-code/pull/13163) – Stop Bound Turn Under Refused Auth | Ensures correct cancellation behavior under denied authorization. | 🚀 In Review |
| [#13173](https://github.com/QwenLM/qwen-code/pull/13173) – Passive Takeover Adoption | Handles recovery of dead owner sessions securely. | 🚀 In Review |
| [#12640](https://github.com/QwenLM/qwen-code/pull/12640) – Extension Metadata Lazy Load | Improves startup latency by deferring extension detail loading until selected. | 🚀 In Review |
| [#13146](https://github.com/QwenLM/qwen-code/pull/13146) – Trust Workspace Without Terminal | Allows web shell to establish folder trust via backend route. | 🚀 In Review |
| [#13080](https://github.com/QwenLM/qwen-code/pull/13080) – Scroll Support for `/stats` | Adds scrollable output support for stats panel in short terminals. | ✅ Merged |

---

## **Feature Request Trends**

1. **Multi-Agent Orchestration & Session Management**
   - Staged rollout plans (Stages D–G) indicate strong interest in **scalable, resilient agent topologies**.
   - Demand for **workspace-bounded execution**, **session takeover/fencing**, and **history checkpointing** grows.

2. **Token Efficiency & Cost Control**
   - Strong developer focus on minimizing **non-conversation context bloat** and improving **output budgeting awareness** relative to context window size.

3. **Web Shell Enhancements**
   - Requests for **keyboard shortcuts**, improved **session persistence**, and better **unread marker handling** suggest growing adoption of web UI workflows.

4. **Email Integration**
   - Community interest in integrating **IMAP/SMTP channels** to enable asynchronous agent communication.

5. **Trusted Folder Controls**
   - Need for clearer **trust policies** and recovery flows from accidental untrusted states.

---

## **Developer Pain Points**

| Area | Frustration |
|------|-------------|
| **Session Lifecycle Corruption** | Deleting live sessions breaks transcripts irreversibly; requires manual intervention. |
| **Inconsistent Auth Cleanup** | Hosts retain stale credentials even after re-authentication — potential security gap. |
| **Desktop Stability Issues** | Trusted workspace settings flip unexpectedly, rendering desktop apps unusable. |
| **Lack of Visibility into Scanning Failures** | CI pipelines like CodeQL report success despite silent timeouts — no alerts triggered. |
| **Tool Output Persistence Gaps** | Complex deployment setups require more robust testing and observability around data retention. |
| **CLI Ergonomics** | Users request features like hiding status bars and scrolling `/stats` panels to improve UX on constrained terminals. |

--- 

Let me know if you’d like this exported as Markdown or formatted for internal dashboards.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

## DeepSeek‑TUI Community Digest – **2026‑10‑03**

---

### 1. Today's Highlights  
- No new releases this cycle, but the repo is bustling with activity: **three critical bugs** (MCP tool discovery, Windows npm‑install crash, CPU‑usage regression) and a batch of **dependency updates** that keep the stack current.  
- PR **#6815** lands **Codewhale 0.10.1**, adding official ChatGPT sign‑in, richer extension capabilities and native terminal adoption – a major feature release for the TUI ecosystem.  
- The **runtime‑API PR #6817** introduces the first‑ever snapshots‑around‑a‑call that let clients see *what* a shell command changed, filling a long‑standing gap for auditability.

---

### 2. Releases  
**None** – the latest release cadence paused in the last 24 h.  

---

### 3. Hot Issues  

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#5316** | [EPIC‑005: CodeWhale TUI Crate Decomposition (Umbrella)](Hmbown/Codewhale Issue #5316) | Cornerstone architectural refactor to split the monolithic TUI crate into modular components – critical for long‑term maintainability. | 31 comments, 0 👍 (highly discussed) |
| **#6728** | [CPU Usage Regression: v0.9.12 → v0.9.13 → v0.10.0](Hmbown/Codewhale Issue #6728) | Performance drop from “idle” to “heavy” usage across three successive releases; impacts all platform users. | 1 comment, 0 👍 (still needs triage) |
| **#6828** | [0.10.0: enabled MCP servers expose no tools in‑session (tool_search empty); mcp connect cannot attach to a live session](Hmbown/Codewhale Issue #6828) | Core MCP integration broken – models cannot discover or invoke configured tools, rendering the “lazy trigger” feature useless. | 0 comments, 0 👍 (urgency high) |
| **#6827** | [Windows (npm install): killing node.exe instantly terminates Codewhale with no cleanup; the agent's own “stop node” commands can kill the session](Hmbown/Codewhale Issue #6827) | Windows‑specific crash prevents graceful shutdown and leaves sessions orphaned – a stability blocker for Windows users. | 0 comments, 0 👍 |
| **#6818** | [Add the complete Ratatui component explorer to the Codewhale website](Hmbown/Codewhale Issue #6818) | Documentation gap – a live component catalog would accelerate onboarding and lower support friction. | 0 comments, 0 👍 |
| **#6814** *(closed)* | [Complete codewhale‑ratatui component catalogue and rendered README gallery](Hmbown/Codewhale Issue #6814) | Completed UI reference gallery; foundational work for #6818. | 0 comments, 0 👍 |
| **#6816** | [Migrate local ChatGPT plan access to the official open‑source Sign‑in with ChatGPT contract](Hmbown/Codewhale Issue #6816) | Aligns with OpenAI’s public integration spec, future‑proofing authentication. | 0 comments, 0 👍 |
| **#6328** | [Schedule list UI for watches and heartbeat](Hmbown/Codewhale Issue #6328) | Adds a UI layer for recurring tasks, watches, and heartbeat entries – a requested scheduling surface. | 0 comments, 0 👍 |

---

### 4. Key PR Progress (10 selected PRs)

| # | PR | Core contribution / fix |
|---|-----|--------------------------|
| **#6815** | [0.10.1: ChatGPT sign‑in, extension capabilities, and native terminal adoption](Hmbown/Codewhale PR #6815) | Ships official ChatGPT‑plan sign‑in, richer TypeScript tool harness, and native terminal mode; retains Rust‑side authority over execution, permissions, credentials, and events. |
| **#6817** | [feat(runtime‑api): read what one tool call changed, from the snapshots around it](Hmbown/Codewhale PR #6817) | Provides clients with per‑call change attribution for shell commands, solving the missing “what changed” data for auditability. |
| **#6715** | [fix(auth): choose, show and switch ChatGPT and xAI accounts](Hmbown/Codewhale PR #6715) | Adds account selection UI, visibility of active account, and ability to switch between ChatGPT and xAI credentials – addressing the founder’s dual‑account scenario. |
| **#6820** | [RFC: Evaluate consolidating Python and JavaScript tools into Shell](Hmbown/Codewhale PR #6820) | Initiates a contribution‑gate discussion to remove duplicate `code_execution` (Python) and `js_execution` (Node) entrypoints in favor of a unified Shell entrypoint. |
| **#6819** | [fix(cli): 修复配置诊断对 HTTP(S) 协议大小写的误判](Hmbown/Codewhale PR #6819) | Fixes `config doctor` false‑positives for mixed‑case protocol prefixes (`HTTPS://`, `HTTPs://`) by normalizing to lower‑case before validation. |
| **#6821** | [build(deps): bump rmcp from 3.4.0 to 3.5.0](Hmbown/Codewhale PR #6821) | Upgrades the Model Context Protocol SDK; includes bug‑fixes that improve tool discovery and stability. |
| **#6822** | [build(deps): bump rio‑vt from 0.5.26 to 0.5.28](Hmbown/Codewhale PR #6822) | Pulls in the latest terminal‑VT handling improvements, enhancing rendering reliability. |
| **#6823** | [build(deps): bump thiserror from 2.0.20 to 2.0.21](Hmbown/Codewhale PR #6823) | Minor Rust error‑reporting fix for generic unit variant parsing. |
| **#6824** | [build(deps): bump encoding_rs from 0.8.41 to 0.8.42](Hmbown/Codewhale PR #6824) | Updates the character‑encoding library with security and correctness patches. |
| **#6825** | [build(deps): bump dtolnay/rust‑toolchain from 02cb101e… to 7e38f4b4…](Hmbown/Codewhale PR #6825) | Refreshes the Rust toolchain pin, ensuring CI runs on the latest stable release. |

---

### 5. Feature Request Trends  

1. **Integrated UI & Scheduling** – Multiple issues (#6818, #6814, #6328) push for richer visual tooling: a live Ratatui component explorer, a completed component catalogue, and a schedule‑list UI for watches and heartbeats.  
2. **MCP Tool Visibility & Connectivity** – #6828 surfaces a critical gap: enabled MCP servers are invisible to `tool_search`, breaking the lazy‑trigger flow and preventing session attachment.  
3. **Authentication & Account Management** – #6816 (official ChatGPT sign‑in) and #6715 (switchable accounts) reflect a push to standardize and simplify credential handling across AI providers.  
4. **Cross‑Platform Stability** – Windows‑specific crash (#6827) and CPU‑usage regression (#6728) dominate platform‑reliability concerns, prompting fixes for graceful shutdown and performance tuning.  
5. **Developer Experience** – #6819 (case‑insensitive protocol detection) and #6820 (tool consolidation) highlight a desire for more forgiving CLI tooling and reduced redundancy.  
6. **Runtime Auditing** – #6817 signals growing demand for fine‑grained change attribution, especially for shell commands, to support compliance and debugging.  

---

### 6. Developer Pain Points  

- **Windows npm kill‑switch** – Any external kill of `node.exe` (e.g., `npm stop`) abruptly terminates the whole Codewhale process, leaving no cleanup or state persistence.  
- **MCP tool invisibility** – New MCP servers are enabled but never appear in `tool_search`, making it impossible for models to invoke them and breaking the advertised “lazy trigger” feature.  
- **CPU performance regression** – Recent releases (v0.9.13, v0.10.0) dramatically increase CPU usage on FreeBSD, affecting all platforms.  
- **Config‑doctor false positives** – `config doctor` incorrectly rejects HTTP/HTTPS URLs that use mixed‑case protocol prefixes (`HTTPS://`).  
- **Account selection opacity** – No UI to choose between multiple ChatGPT/xAI accounts, leading to confusion when usage limits are hit.  
- **Fragmented tool entrypoints** – Separate `code_execution` (Python) and `js_execution` (Node) entrypoints duplicate functionality; maintainers are considering consolidation.  

---

**Stay tuned** – With #6815 set to ship, the next wave of improvements will focus on stabilizing the MCP pipeline, tightening Windows resilience, and polishing the new scheduling UI. Contributors are encouraged to weigh in on the RFC (#6820) and to test the emerging runtime‑API snapshots feature. 🚀

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*