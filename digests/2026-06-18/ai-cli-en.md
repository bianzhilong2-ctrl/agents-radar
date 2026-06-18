# AI CLI Tools Community Digest 2026-06-18

> Generated: 2026-06-18 02:43 UTC | Tools covered: 9

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

**Cross‑Tool Comparison Report – 2026‑06‑18**

| Tool | Issues (★) | PRs (★) | Releases (last 24 h) |
|------|-----------|--------|----------------------|
| Claude Code | 12 high‑pressure issues (Remote Control reconnection, Message Queue, VS Code drag‑drop, etc.) | 10–12 PRs (hot fixes for team‑tools, queueing, config syntax) | New v2.1.181 (config syntax, Apple Events opt‑in) |
| OpenAI Codex | 8 critical authentication & performance issues (MFA, syspolicyd CPU, crash dumps) | 10+ PRs (time‑stamping, connection lifecycle, filesystem semantics) | Three rapid‑fire α releases (v0.141.0‑α.5‑7) |
| Gemini CLI | 7 P1/P2 issues (agent hangs, shell freeze, browser agent on Wayland) | 10+ PRs (corruption fixes, tool‑scoping, clipboard + drag‑drop) | v0.48.0‑preview + v0.47.0 (CI cooldowns, JSON/.ipynb fixes) |
| Kimi Code | 2 open enhancement requests (runtime switch, SSL bypass) | 0 active PRs in last 24 h | No releases |
| Pi‑Mono | 10 top‑comment issues (stream scrolling, duplicate deps, error visibility) | 10+ PRs (Azure Foundry, raw HTTP bodies, terminal detection) | No new releases |
| DeepSeek TUI | 10 high‑comment bugs (mode flips, snapshots, concurrent agents) | 10+ PRs (mode toggle fixes, schema enforcement, symlink handling) | No new releases |

> ★ Counts reflect comment/activity level; higher numbers ≠ quality, but indicate visibility.

---

### 1. Ecosystem Overview
The AI‑CLI landscape is highly fragmented yet rapidly evolving. Mature projects (Claude Code, OpenAI Codex, Gemini CLI) push feature parity across platforms while also grappling with stability regressions. Emerging entrants (Kimi Code, Pi‑Mono, DeepSeek TUI) focus on niche capabilities—e.g., dynamic runtime switching or multi‑provider support—often via open‑source hooks. Across all tools, cross‑platform consistency, authentication robustness, and agent‑workflow control emerge as universal pain points.

---

### 2. Shared Feature Directions
| Need | Tools | Fragment |
|------|-------|----------|
| **Command queue / flow control** | Claude Code (message queue), Gemini CLI (command queue approval), Pi‑Mono (tool‑count caps), DeepSeek TUI (agent spawn guard) | 4 tools, most popular in “workflow friction” comments |
| **Agent‑to‑agent / multi‑team isolation** | Claude Code (per‑teammate cwd), Pi‑Mono (live session switching), DeepSeek TUI (Plan/Agent mode state), Gemini CLI (sub‑agent spawning) | 4 tools, foundational for enterprise automation |
| **Cross‑platform consistency** | Claude Code (drag‑drop/Apple Events), Gemini CLI (Wayland, Windows ARM), Pi‑Mono (terminal detection), Codex (macOS CPU spikes) | 4 tools, high‑impact UI/UX complaints |
| **External resource file resolution** | Claude Code (Claude Design links), Gemini CLI (web‑fetch encoding), Pi‑Mono (provider error bodies), Codex (API token errors) | 4 tools, crucial for professional workflows |
| **Authentication & MFA defects** | Codex (SMS OTP, legacy phone), Gemini CLI (OAuth errors), Claude Code (Remote Control reconnection over mobile) | 3 tools, potential customer lock‑out risk |
| **SSL/TLS bypass / enterprise networking** | Kimi Code (ignore cert), Pi‑Mono (provider error visibility under proxies), Codex (auth errors in protected containers) | 3 tools, appeals to managed‑network adopters |

---

### 3. Differentiation Analysis
| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|--------------------|
| **Claude Code** | Interactive prompt‑based config, macOS sandboxing, team‑tool UI | Power‑user developers, teams needing native CLI+VS Code integration | Hybrid Rust‑Python stack, Apple Events opt‑in |
| **OpenAI Codex** | Session persistence, rate‑limit transparency, enterprise‑grade auth | Client companies with strict security/ compliance | Rust‑core, aggressive CI with nightly α‑chain |
| **Gemini CLI** | Agent‑centric workflow, multimodal I/O, CI dependency management | DevOps, data‑science pipelines | Go‑based CLI, heavy focus on tool orchestration |
| **Kimi Code** | Cluster‑aware execution, SSL flexibility | Enterprise clusters, hybrid environments | Minimalistic Rust API, emphasis on runtime agility |
| **Pi‑Mono** | Provider‑agnostic, terminal TUI experience, Azure Foundry | DevTools engineers, users building AGI stacks | Node/TS core, emphasis on TUI rendering |
| **DeepSeek TUI** | Agent / Plan mode abstraction, snapshot control | Researchers, open‑source contributors | Rust + TUI‑crates, community‑driven mode toggles |

---

### 4. Community Momentum & Maturity
* **High‑Momentum & Rapid Iteration**: Claude Code (v2.1.181 + 12 PRs), OpenAI Codex (3 α releases + 10 PRs), Gemini CLI (10 PRs + preview releases) – frequent commits, high comment activity.  
* **Stabilizing & Bug‑Focused**: Pi‑Mono & DeepSeek TUI – fewer PRs per day but intense issue activity driving hot PRs.  
* **Early‑Stage/Low Activity**: Kimi Code – only a handful of open issues, no recent PRs or releases, suggesting a nascent community.

---

### 5. Trend Signals
1. **Hybrid Tooling** – Agents that can spawn sub‑agents or switch between modes are becoming standard.  
2. **Command Flow Control** – Queueing, interrupt, or multiplexing of prompts is a core workflow requirement.  
3. **Cross‑Platform Parity** – macOS, Windows, Linux, and containerized environments demand consistent behaviour, especially around permissions and UI (drag‑drop, image pasting).  
4. **Authentication Robustness** – MFA, legacy phone number recovery, and OAuth token handling are critical blocker tickets across tools.  
5. **Enterprise‑Ready Configuration** – SSL bypass, raw HTTP error body exposure, and provider‑agnostic error handling are prioritised by large‑team developers.  
6. **Performance & Resource Management** – CPU runaway, garbage‑collection of crash dumps, and bounded logging/snapshots are recurring pain‑points. 

---

**Takeaway for Decision‑Makers**  
If rapid feature roll‑out with robust team tooling is required, Claude Code or Gemini CLI are the current leaders, albeit with active bug‑fix cycles. For client‑facing deployments where authentication and resource control dominate, OpenAI Codex demonstrates the most serious concerns but also the fastest response. Emerging tools like Pi‑Mono and DeepSeek TUI address niche gaps (provider transparency, snapshot management) and are likely to mature if community support accelerates. Kimi Code remains a low‑weight option pending future PR activity.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills summary generation failed.

---

# Claude Code Community Digest - June 18, 2026

## Today's Highlights
Anthropics released v2.1.181 introducing `/config key=value` syntax for prompt-based settings configuration and an Apple Events support option for macOS sandboxed commands. Meanwhile, the community is actively addressing critical Remote Control reconnection issues on multiple platforms, with user engagement reaching 90+ likes on top-priority bug reports.

## Releases

**v2.1.181** (released June 18, 2026) introduces two key improvements:
- Added `/config key=value` syntax allowing users to set any configuration option directly from prompts (e.g., `/config thinking=false`), supporting interactive mode, `-p` flag, and Remote Control
- Added `sandbox.allowAppleEvents` opt-in setting enabling sandboxed commands to send Apple Events on macOS systems

*GitHub release: anthropics/claude-code*

## Hot Issues

**Remote Control Reconnection Bug (#34255)** - 50 comments, 90 likes  
*Crucial issue for macOS/iOS users: automatic reconnection in Remote Control mode fails silently* - This appears to be the most urgent bug affecting productivity, with high user engagement indicating widespread impact.

**Message Queue Mode Feature (#50246)** - 32 comments, 99 likes  
*Game-changing workflow request: queue follow-up messages instead of interrupting active tasks* - Community enthusiasm suggests this addresses a core workflow limitation many users face daily.

**WSL Permission Prompts (#29214)** - 30 comments, 76 likes  
*Critical bug: `--dangerously-skip-permissions` flag ignored on Remote Control for mobile apps* - Blocks WSL users from using Claude Code's intended permission control workflow.

**TeamCreate/TeamDelete Regression (#68721)** - 6 comments, 5 likes  
*Recent regression: native team-management tools disappeared from interface* - Breaks agent team management capabilities for new users.

**Claude Design Links Resolution (#69239)** - 3 comments, 0 likes  
*Integration failure: Claude Design project links no longer resolve natively* - Impacts users attempting to reference design files directly in prompts.

**Native Command Execution Bug (#63870)** - 16 comments, 20 likes  
*Repeated bug: Bash tool calls emitted as raw text instead of executing* - Indicates significant tool execution reliability issues.

**VS Code Extension Drag/Drop (#25128)** - 20 comments, 40 likes  
*Critical UI regression: drag-and-drop works in CLI but not VS Code extension* - Affects user productivity in one of the most common interaction patterns.

**Agent Teams Working Directory Feature (#23669)** - 24 comments, 28 likes  
*Requested: per-teammate working directory, CLAUDE.md, and MCP config support* - Addresses multi-repository project automation limitations.

**Sub-Agent Spawning Bug (#61993)** - 18 comments, 0 likes  
*Platform-specific: sub-agents cannot spawn other sub-agents in nested contexts* - Limits multi-agent workflow complexity.

**Windows Alt+V Image Paste (#69234)** - 2 comments, 0 likes  
*Session-specific bug: image paste fails for entire session after first failure* - Affects Windows users using Claude Code's visual capabilities.

## Key PR Progress

**[PR #19867]** (Open) - Fix code-review plugin to allow re-reviews when new commits are pushed  
*GitHub PR: anthropics/claude-code PR #19867*  
Addresses plugin skipping reviews after commit updates and adds `--force` flag for bypass scenarios.

**[PR #33443]** (Open) - Update Dockerfile to use native installer  
*GitHub PR: anthropics/claude-code PR #33443*  
Migration from deprecated npm install to native installer for better environment consistency.

**[PR #68721]** (Open) - Revert native team-management tools regression  
*GitHub PR: anthropics/claude-code PR #68721*  
Restores TeamCreate and TeamDelete tool visibility in CLI interface.

**[PR #62387]** (Open) - Animate project name chip during user input wait  
*GitHub PR: anthropics/claude-code PR #62387*  
UI enhancement: provides visual feedback during input processing to indicate active state.

**[PR #67485]** (Open) - Background agent activity visibility improvements  
*GitHub PR: anthropics/claude-code PR #67485*  
Adds session indicator showing when background subagents are actively working.

**[PR #29214]** (Open) - Remote Control permission inheritance fix  
*GitHub PR: anthropics/claude-code PR #29214*  
Ensures mobile app respects `--dangerously-skip-permissions` flag consistently.

**[PR #60327]** (Open) - Design system query interface for Claude Code  
*GitHub PR: anthropics/claude-code PR #60327*  
Enables Claude Code to query external design systems like Claude Design directly.

**[PR #68998)** (Open) - Queue command implementation for batch prompt processing  
*GitHub PR: anthropics/claude-code PR #68998*  
Implements v0-style command queuing to handle multiple prompts without interruption.

**[PR #69239)** (Open) - Claude Design link resolution restoration  
*GitHub PR: anthropics/claude-code PR #69239*  
Restores native resolution of Claude Design project links for seamless file access.

**[PR #54685)]** (Open) - Task distribution worker promotion fixes  
*GitHub PR: anthropics/claude-code PR #54685*  
Addresses dispatch task intermittency with worker promotion logic fixes.

## Feature Request Trends

**Command Flow Control**: Users consistently request queue mode functionality to separate follow-up messaging from active task execution - this appears to be the most frequently requested workflow improvement.

**Multi-Agent Architecture**: Team-based collaboration tools, per-teammate workspace isolation, and agent-to-agent communication are emerging as critical requirements for enterprise-scale automation.

**Integrated File Access**: Direct resolution of external resources (Claude Design links, design systems) continues to be a high-priority integration gap affecting professional workflows.

**Cross-Platform Consistency**: Permission handling, image processing, and input devices (drag/drop) need significant alignment across macOS, Windows, and Linux versions.

**Performance & UI Responsiveness**: Users report issues with idle session performance (CPU spikes) and lack of visibility during background agent operations, suggesting opportunities for system transparency improvements.

## Developer Pain Points

**Remote Control Reliability**: Multiple interconnected bugs around reconnection failure, permission prompts overriding skip flags, and platform-specific inconsistencies are causing major workflow disruption for mobile/remote users.

**Agent Tool Environment**: Tools consistently misfiring (bash execution), sub-agent spawning limitations, and performance issues with large teams indicate underlying agent runtime stability concerns.

**Cross-Platform Tool Support**: Significant gaps in drag-and-drop functionality (VS Code vs CLI), image paste reliability (Windows), and design link resolution suggest incomplete cross-platform testing coverage.

**Regression Velocity**: Recent release v2.1.178+ introduced several regressions including native team-management tool disappearance and team management backend issues - indicating quality control challenges in recent development cycles.

**Workflow Interruptions**: The inability to queue prompts and the need to interrupt active tasks for follow-ups represents a fundamental workflow friction that appears central to productivity limitations reported across multiple user segments.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>


# OpenAI Codex Community Digest - 2026-06-18

## Today's Highlights

Multiple critical infrastructure issues dominate today's landscape, with authentication failures and performance degradation affecting core functionality across platforms. Three consecutive alpha releases (v0.141.0-alpha.5/6/7) indicate active development response to urgent stability concerns. Users report significant pain around rate limiting transparency and session persistence, suggesting immediate attention needed for developer experience.

## Releases

**Immediate Alpha Updates** (rust-v0.141.0-alpha.5/6/7)
- No detailed changelog provided; appears to be rapid iteration addressing recent stability regressions
- [v0.141.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.7)
- [v0.141.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.6)  
- [v0.141.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.5)

## Hot Issues

**Critical Authentication Breakage**
[#25749](https://github.com/openai/codex/issues/25749) - Users locked out due to inaccessible legacy phone numbers with no recovery path (49 comments, 30 👍). This represents a fundamental account security flaw affecting paying customers.

[#25670](https://github.com/openai/codex/issues/25670) - Complete CLI authentication failure despite passkey/MFA setup (33 comments, 19 👍). Core functionality completely blocked.

[#25737](https://github.com/openai/codex/issues/25737) - CLI login forcing SMS OTP on hardware security key accounts (11 comments, 6 👍). Creates friction in enterprise security workflows.

**Performance and Stability Crisis**
[#25719](https://github.com/openai/codex/issues/25719) - macOS `syspolicyd`/`trustd` CPU/memory runaway (31 comments, 39 👍). System-level performance degradation requiring process kills.

[#25921](https://github.com/openai/codex/issues/25921) - Unbounded Crashpad dump generation consuming 5GB+ daily (9 comments, 2 👍). Critical storage-wear issue for developers.

[#21211](https://github.com/openai/codex/issues/21211) - Thread navigation slows from unbounded metadata (12 comments). Database architecture issues impacting UX at scale.

**Platform Compatibility Failures**
[#25178](https://github.com/openai/codex/issues/25178) - Windows Computer Use screenshots failing with API errors (11 comments, 4 👍). Core feature broken on enterprise-standard platform.

[#28672](https://github.com/openai/codex/issues/28672) - Business accounts failing in Ubuntu dev containers (4 comments). Enterprise deployment scenarios affected.

**Resource Management Concerns**
[#28823](https://github.com/openai/codex/issues/28823) - Rate limit consumption discrepancy (4 comments). Developers seeing faster quota usage than expected.

[#28811](https://github.com/openai/codex/issues/28811) - Rate resets applied immediately instead of banked (4 comments, 3 👍). Breaks planned workflow expectations.

## Key PR Progress

**Infrastructure and Reliability**
[#28835](https://github.com/openai/codex/pull/28835) - App-server current-time provider for better session timing coordination and real-time features.

[#28814](https://github.com/openai/codex/pull/28814) - Response item ID assignment during history recording for persistent state management.

[#28824](https://github.com/openai/codex/pull/28824) - Current time reminders implementation for scheduled task systems.

**User Experience Refinements**
[#28813](https://github.com/openai/codex/pull/28813) - Goal pause behavior on Escape interrupt, fixing workflow disruption.

[#27132](https://github.com/openai/codex/pull/27132) - Trusted MCP App Identity propagation across reconnections and resumes.

**Platform Integration**
[#28829](https://github.com/openai/codex/pull/28829) - Complete filesystem host semantics for remote execution environments.

[#28674](https://github.com/openai/codex/pull/28674) - Remote environment connection lifecycle management (Part 1/2).

[#27500](https://github.com/openai/codex/pull/27500) - OpenAI/form extended form elicitations support for richer tool interactions.

**Tooling and Configuration**
[#28822](https://github.com/openai/codex/pull/28822) - Time reminders configuration system for customizable scheduling.

[#28825](https://github.com/openai/codex/pull/28825) - Direct exposure of selected MCP namespaces as model tools for better control.

## Feature Request Trends

**Authentication and Security**
- Account recovery mechanisms for legacy phone number issues
- Consistent MFA/hardware key support across CLI and desktop
- Granular permission controls for business accounts

**Performance and Scalability**
- Bounded database storage for thread metadata
- Configurable crash dump retention and cleanup
- Efficient history loading and navigation

**Cross-Platform Parity**
- Full Computer Use feature parity on Windows ARM/x64
- Intel macOS support for bundled plugins and services
- Container environment compatibility improvements

**Rate Limiting Transparency**
- Predictable quota consumption tracking
- Banked reset functionality preservation
- Clear usage forecasting and alerts

## Developer Pain Points

**Immediate Blocking Issues**
- Complete authentication system failures preventing access
- Performance degradation requiring manual process intervention
- Persistent data loss across application restarts

**Workflow Interruptions**
- Forced SMS verification breaking hardware security practices
- Rate limit resets consuming planned budget unexpectedly
- Session history disappearing between updates

**Platform Fragmentation**
- macOS performance regressions affecting system stability
- Windows feature gaps in Computer Use capabilities
- Intel/Apple Silicon distribution inconsistencies

**Resource Management**
- Uncontrolled disk space consumption from crash dumps
- Database bloat impacting long-term usability
- Memory/CPU usage patterns degrading development environments


</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - June 18, 2026

## Today's Highlights
Two new releases dropped in the past 24 hours: v0.48.0-preview.0 brings CI improvements including npm package cooldown periods, while v0.47.0 provides stability updates with resolved corruption bugs in notebook and JSON file handling. The community continues addressing critical agent performance issues including hangs, shell command stuck responses, and browser agent failures.

## Releases

**v0.48.0-preview.0** (https://github.com/google-gemini/gemini-cli/releases/tag/v0.48.0-preview.0)
- Latest preview release with nightly build `0.48.0-nightly.20260609.g3a13b8eeb`
- Includes CI/dependabot cooldown period implementation for npm packages
- Addresses core fixes for Jupyter Notebook and JSON corruption in write_file tool

**v0.47.0** (https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0)
- Focuses on resolving file corruption issues with `.ipynb` and JSON files
- Implements defensive path resolution and core tool improvements
- Fixes authentication encoding issues with web-fetch tool

## Hot Issues

1. **#25166** - **Shell command execution gets stuck** (4 comments)
   - Priority: P1 | Core Area
   - Critical bug where Gemini CLI hangs at "Waiting input" after completed commands
   - Community urgency: Users report this happens with simple commands, disrupting workflow
   - https://github.com/google-gemini/gemini-cli/issues/25166

2. **#21409** - **Generalist agent hangs indefinitely** (7 comments)
   - Priority: P1 | Agent Area  
   - Agents hang forever when deferring to generalist sub-agent for simple tasks
   - Users work around by instructing models not to use sub-agents
   - High impact: renders agent unusable for many tasks
   - https://github.com/google-gemini/gemini-cli/issues/21409

3. **#21983** - **Browser agent fails on Wayland** (4 comments)
   - Priority: P1 | Agent Area | Wayland specific
   - Browser Agent reports GOAL termination despite not completing analysis
   - Breaks browser automation capabilities for Wayland users
   - https://github.com/google-gemini/gemini-cli/issues/21983

4. **#24246** - **400 error with > 128 tools** (3 comments)
   - Priority: P2 | Agent Area
   - System encounters 400 errors when tool count exceeds 128
   - Community expects smarter tool scoping and scope limitation
   - https://github.com/google-gemini/gemini-cli/issues/24246

5. **#27632** - **Failed login with Sign in with Google** (5 comments) - *CLOSED*
   - Priority: P2 | Security Area
   - OAuth token exchange fails with error from googleapis.com/token
   - Authentication system broken for paid tier users
   - https://github.com/google-gemini/gemini-cli/issues/27632

6. **#27644** - **Antigravity CLI transition** (7 comments) - *CLOSED*
   - Area: Core Migration
   - Gemini CLI transitioning to new Antigravity CLI for Gemini Code Assist users
   - Impacts free tier and unpaid users primarily
   - https://github.com/google-gemini/gemini-cli/issues/27376

7. **#22745** - **AST-aware file operations** (7 comments)
   - Priority: P2 | Agent Area
   - Evaluation of AST-aware CLI tools for codebase analysis
   - Potential to improve precision and reduce token noise
   - https://github.com/google-gemini/gemini-cli/issues/22745

## Key PR Progress

1. **#28000** - `fix(core-tools): resolve Jupyter Notebook and JSON corruption`
   - Critical fix for write_file tool corrupting `.ipynb` and JSON files
   - Root cause: missing defensive encoding handling
   - https://github.com/google-gemini/gemini-cli/pull/28000

2. **#27996** - `fix(core): decode response body using proper charset`
   - Fixes web-fetch tool incorrectly assuming UTF-8 encoding
   - Resolves garbled text for Chinese, Japanese, and legacy sites
   - https://github.com/google-gemini/gemini-cli/pull/27996

3. **#27994** - `fix(core): proper system prompt substitutions`
   - Corrects skill/agent content injection in system prompts
   - Prevents injection vulnerabilities and content corruption
   - https://github.com/google-gemini/gemini-cli/pull/27994

4. **#27987** - `fix(cli): throw FatalConfigError instead of process.exit`
   - Refactored argument parsing for better error handling
   - Prevents test hangs while maintaining E2E test coverage
   - https://github.com/google-gemini/gemini-cli/pull/27987

5. **#27995** - `fix(core): skip user agents dir conflicts`
   - Prevents duplicate agent name warnings when running from home directory
   - Resolves false positives in agent directory resolution
   - https://github.com/google-gemini/gemini-cli/pull/27995

6. **#27997** - `docs: remove deprecated tier references`
   - Removes mentions of discontinued consumer and free tiers
   - Updates documentation to reflect current pricing structure
   - https://github.com/google-gemini/gemini-cli/pull/27997

7. **#27992** - `Revert: defensive path resolution for at-reference files`
   - Reverts previous path handling changes due to breaking side effects
   - Addresses macOS symlink path mismatches in tests
   - https://github.com/google-gemini/gemini-cli/pull/27992

8. **#27854** - `Fix pending tools and trust overrides`
   - Improves agent stability with pending tool approvals
   - Eliminates race conditions during file modifications
   - https://github.com/google-gemini/gemini-cli/pull/27854

9. **#27987** - `Initial commit` (new repository)
   - Fresh start with clean codebase
   - https://github.com/google-gemini/gemini-cli/pull/27972

10. **#27859** - `feat(cli): drag-and-drop and clipboard image pasting`
    - Adds native drag-and-drop and Cmd+V clipboard support
    - Brings visual multimodal parity to terminal environment
    - https://github.com/google-gemini/gemini-cli/pull/27859

## Feature Request Trends

**Agent Intelligence & Control:**
- Community demands more autonomous skill usage without explicit instructions
- Request for enhanced agent self-awareness and capability reporting
- Calls for better agent configuration validation and override mechanisms
- Interest in AST-aware codebase mapping and search capabilities

**Performance & Stability:**
- Critical need for fixing agent hangs and browser compatibility issues
- Persistent requests for shell command completion state management
- Focus on reducing memory usage and improving Auto Memory efficiency
- Stronger error handling for authentication and tool timeouts

**Developer Experience:**
- Enhanced multimodal support (image pasting, drag-and-drop)
- Improved dependency management with version pinning and cooldowns
- Better configuration validation and error reporting
- More reliable Git operations and file handling

## Developer Pain Points

**Core Performance Issues:**
- **Agents hang indefinitely** - Most upvoted issue (7 comments, 8 likes), rendering system unusable
- **Shell commands get stuck** - Dead Simple commands leave system waiting for input
- **Browser automation fails** - Wayland users unable to use browser subagent
- **Authentication broken** - Multiple users unable to login via Sign in with Google

**Data Management:**
- **Memory system bugs** - Auto Memory silently skipping sessions, retrying indefinitely
- **Invalid patch handling** - Invalid memory patches hidden from users
- **High memory usage** - Performance degradation during extended sessions

**Configuration & Dependencies:**
- **Settings override ignored** - Browser Agent ignores settings.json configurations
- **Dependency volatility** - Frequent vulnerability updates causing update fatigue
- **Path resolution issues** - macOS symlink conflicts causing test failures

**User Experience:**
- **Tool switching limitations** - 400 errors when tool count exceeds 128
- **Temporary file creation** - Models create cleanup-heavy temporary scripts
- **Corruption risks** - JSON and notebook files silently corrupted by write operations

The community is experiencing significant pain with agent reliability, authentication, and data integrity - suggesting these should be prioritized for stabilization before feature expansion.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>


**Kimi Code CLI Community Digest – 2026-06-18**  

---

### **Today’s Highlights**  
No new releases were published in the last 24 hours. Two open issues emerged, focusing on runtime flexibility (execution mode switching) and SSL certificate handling—both reflecting practical needs in enterprise environments.  

---

### **Releases**  
No releases detected in the last 24 hours.  

---

### **Hot Issues**  
- **#2459 [Feature Request]**: Support switching execution mode (Agent ↔ Cluster) during active sessions. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2459)  
  - *Why it matters*: Enables dynamic adaptation of workload distribution strategies without restarting sessions, improving resource efficiency.  
  - *Community reaction*: No comments yet; likely early-stage feedback.  

- **#2458 [Enhancement]**: Add option to ignore SSL certificate validation. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2458)  
  - *Why it matters*: Addresses compatibility issues in restrictive network environments (e.g., enterprise antivirus/MiTM SSL interception), critical for adoption in controlled infrastructures.  
  - *Community reaction*: No comments yet.  

---

### **Key PR Progress**  
No pull requests were updated in the last 24 hours.  

---

### **Feature Request Trends**  
- **Runtime execution flexibility**: Demand for dynamically switching between Agent and Cluster modes during workflows, indicating a need for more adaptive deployment configurations.  
- **SSL/TLS customization**: Requests for bypassing certificate validation highlight gaps in handling non-standard network setups, particularly in enterprise contexts.  

---

### **Developer Pain Points**  
- **SSL certificate interception in managed environments**: Antivirus tools enforcing MiTM SSL inspection cause authentication failures, pointing to a lack of SSL bypass options.  
- **Manual session reconfiguration**: Developers seek reduced friction in adjusting execution modes mid-session, underscoring the need for seamless runtime adjustments.  

---  
*Digest generated for technical stakeholders and contributors.*


</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Mono – Community Digest | 2026‑06‑18**  
*Compiled from activity on the [earendil‑works/pi](https://github.com/earendil-works/pi) repository.*

---

### 1. Today’s Highlights
- A flurry of bug‑reports around **streaming, terminal rendering, and provider error handling** shows the community is stress‑testing Pi’s TUI and multi‑provider stack in real‑world workflows.  
- Significant PR activity is focused on **improving provider error visibility**, **adding “max” thinking level** for Anthropic models, and **bringing Azure AI Foundry support** to the platform.

---

### 2. Releases  
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues (top 10 by comment activity)

| # | Title / Key Symptom | Why It Matters | Community Pulse |
|---|----------------------|----------------|-----------------|
| **5825** | *Streaming markdown forces scroll to bottom* (open, 12 comments) | Breaks usability when agents emit long markdown streams; a blocker for heavy‑code generation sessions. | Users request a “pause‑on‑scroll” toggle; developer xl0 is already investigating. |
| **5653** | *Duplicate `pi‑ai` copies when installing both `@earendil‑works/pi‑ai` and `@earendil‑works/pi‑coding‑agent`* (open, 11 comments) | Leads to inconsistent provider state because the global `Map` is duplicated. | High interest—this could affect many npm‑based workflows. |
| **3715** | *Local‑LLM streams abort after 5 min due to Undici body timeout* (closed, 11 comments, 4 👍) | Shows a hidden ceiling in long‑running tool calls; impacts local model deployments (e.g., vLLM/Qwen). | Fix merged; community thanks the clarification. |
| **5696** | *Model name UI glitch in TUI (Ctrl+P)* (closed, 10 comments) | Hinders quick model switching; UI bug in the lower‑right status bar. | Appreciated fix; subtle but frequent annoyance. |
| **534** | *Config folder location violates XDG spec on Linux* (closed, 9 comments, 20 👍) | Improves cross‑platform ergonomics and respects Linux conventions. | Strong community endorsement; PR merged. |
| **5763** | *Providers swallow HTTP error bodies, making debugging impossible* (open, 5 comments) | Critical for debugging behind proxies/gateways; opaque errors impede reliability. | Directly sparked PR #5832 to surface raw bodies. |
| **5700** | *Support multiple live agent sessions with TUI switching* (open, 5 comments) | Enables “background agent” workflows; a long‑standing feature request. | Active discussion; no ETA yet. |
| **5827** | *Warp terminal not detected for Kitty image protocol* (open, 3 comments) | Limits Pi’s rich‑media rendering on a growing terminal platform. | PR #5841 opened to add detection. |
| **5862** | *Codex subscription error (“You exceeded your current quota”) despite working CLI* (closed, 2 comments) | Shows a mismatch between Pi’s auth flow and Codex’s quota enforcement. | Quick fix; user satisfied. |
| **5830** | *Tree navigator truncates long entries* (closed, 4 comments) | Reduces usability for deeply‑nested project trees; UX regression. | Resolved with improved truncation logic. |

---

### 4. Key PR Progress (top 10)

| PR | Summary | Impact |
|----|---------|--------|
| **#5849** *(closed)* | Adds **Azure AI Foundry** provider for Anthropic Claude models. | Opens Pi to Azure‑hosted Claude, expanding enterprise adoption. |
| **#5829** *(closed)* | Introduces **“max” thinking level** for adaptive Anthropic models. | Gives power users finer control over reasoning effort. |
| **#5832** *(open)* | **Surface raw HTTP error bodies** from providers. | Direct response to issue #5763; debugging becomes far more transparent. |
| **#5846** *(open)* | Stabilises **streaming code‑fence rendering** in the TUI (closes #5825). | Improves readability of long markdown/code blocks. |
| **#5841** *(open)* | Detects **Warp terminal** and enables Kitty image protocol. | Restores inline‑image support for a popular terminal. |
| **#5859** *(open)* | Sends **Responses‑API prompts as `instructions`** rather than `input`. | Aligns Pi with OpenAI’s spec, preventing malformed calls. |
| **#5701** *(closed)* | Adjusts **Minimax‑M3 context size** to the correct 524 k token limit. | Prevents runtime errors for a high‑traffic model. |
| **#5738** *(closed)* | Fixes **Anthropic cache‑write pricing** (1 h writes counted at 2×). | Improves cost‑estimation accuracy for heavy users. |
| **#5801** *(closed)* | **Nix‑ifies Pi** – provides a flake for reproducible builds. | Attracts Nix users; simplifies CI/CD pipelines. |
| **#5833** *(closed)* | Several **compaction‑related fixes** for local LLaMA deployments. | Boosts performance and memory usage for self‑hosted models. |

---

### 5. Feature Request Trends
1. **Multimodal Input Expansion** – Requests to add video/audio handling to the `prompt` RPC (issue #3200).  
2. **Session & Agent Management** – Desire for multiple concurrent sessions and RPC exposure of session trees/entries (issues #5700, #5810).  
3. **Fine‑Grained Context Controls** – Support for 1 M token windows on various models (issues #5692, #5768) and ability to exclude custom messages from LLM context (issue #5654).  
4. **Terminal Compatibility** – Better detection of modern terminals (Warp, Kitty) and handling of long UI elements (issues #5825, #5830).  
5. **Provider Transparency** – Consistent error reporting and inclusion of raw HTTP bodies (issue #5763) – now being addressed in PR #5832.

---

### 6. Developer Pain Points
- **Scrolling & Rendering Bugs** in the TUI during long streaming outputs, causing loss of context.  
- **Duplicate Dependency Copies** when mixing Pi SDK packages, leading to state fragmentation.  
- **Opaque Provider Errors** behind proxies; lack of raw error bodies makes debugging near‑impossible.  
- **Inconsistent Config Locations** across OSes, especially on Linux where XDG compliance is expected.  
- **Limited Session Concurrency** – inability to keep a background agent running while switching tasks.  

*Addressing these recurring issues will smooth the developer experience and accelerate adoption of Pi as a core AI‑coding assistant.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**Today's Highlights**  
The DeepSeek TUI community focuses on resolving critical bugs and enhancing developer experience. Key PRs address code quality, configuration stability, and runtime reliability, while active issues highlight user confusion in Plan/Agent mode behavior and disk-space concerns with snapshots.  

**Releases**  
No new releases in the past 24 hours.  

**Hot Issues**  
1. **[#3275] CodeWhale over-engagement and self-looping [bug]**  
   Users report CodeWhale autonomously proposing/answering without confirmation, a regression from prior behavior.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/3275) | 👍: 0  

2. **[#3279] Plan/Agent mode inconsistency and tool permission chaos [bug]**  
   Post-Plan→Agent switch, `write_file`/`exec_shell` are denied despite UI indicating Agent mode, requiring manual fix.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/3279) | 👎: 3  

3. **[#3292] Ignored `snapshots.enabled=false` config leads to GBs of hidden snapshots [bug]**  
   Snapshots persist despite explicit opt-out, causing disk usage. Conf reinspection required.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/3292) | 👎: 1  

4. **[#1481] Request for OpenCode Go/Zen support [enhancement]**  
   Proposal to integrate OpenCode Go/Zen for cost-effective DeepSeek-V4 access.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/1481) | 👍: 1  

5. **[#3289] UI freeze after auto-spawning multiple agents [bug]**  
   Concurrent agent spawning via `sevval` causes UI unresponsiveness.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/3289) | 👎: 0  

6. **[#3281] Incomplete Kimi/Moonshot schema fix [bug]**  
   Missing `type:object` injection for `$ref`/`allOf` schemas causes parameter rejection.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/3281) | 👎: 0  

7. **[#3239] Atlas Cloud OpenAI proxy doc [documentation]**  
   Adds 59 model integrations via Atlas Cloud provider.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/3239) | 👍: 0  

8. **[#3283] Plan/Agent toggle fixes [bug]**  
   Ensures mode state restoration and execution guard post-switch. Critical for workflow stability.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/3283) | 👍: 0  

9. **[#3286] Kimi parameter schema enforcement [bug]**  
   Guarantees `type:object` for root schemas to prevent 400 errors.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/3286) | 👍: 0  

10. **[#3242] Symlink-aware tool operations [feature]**  
    Adds `workspace_follow_symlinks` for compatibility with SMB/Unix symlink workflows.  
    [GitHub](https://github.com/Hmbown/CodeWhale/pull/3242) | 👍: 0  

**Feature Request Trends**  
- **Plan/Agent mode stability**: Multiple issues (#3279, #3283, #3285) show demand for reliable state management.  
- **Snapshots control**: Urgent need to honor `enabled=false` to prevent disk bloat (#3292).  
- **Multi-native model support**: Growing interest in integrating OpenCode/toolchains beyond DeepSeek (e.g., #1481).  
- **Session continuity**: Non-interactive workflows blocked by lack of history support (#1530).  

**Developer Pain Points**  
- **State management**: Frequent crashes during mode transitions (#3279) and ephemeral history loss (#3285).  
- **Configuration opacity**: Auto-erasure of comments and hidden snapshots frustrate customization (#3282, #3292).  
- **Auto-routing pitfalls**: Heuristic-mode failures disrupt CLI workflows (#3280).  
- **Resource management**: Large snapshot directories degrade performance without opt-in clarity.


</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*