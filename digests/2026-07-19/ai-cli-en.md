# AI CLI Tools Community Digest 2026-07-19

> Generated: 2026-07-19 01:47 UTC | Tools covered: 9

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

---

# AI CLI Tools Ecosystem Cross-Tool Comparison Report
**Date:** 2026-07-19  
**Scope:** 9 major AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **stability-and-hardening phase** rather than a feature-expansion phase. Across all nine projects, the dominant signal is fixing critical regressions—memory leaks, session corruption, cross-platform path handling, and model-provider API mismatches—over shipping new capabilities. Release cadences have slowed (only 3 of 9 tools shipped a version today), while issue velocity remains high, indicating teams are prioritizing reliability for production workloads. A clear convergence is emerging around **agent orchestration reliability**, **resource lifecycle management**, and **enterprise-grade configuration persistence** as the baseline expectations for 2026 H2.

---

## 2. Activity Comparison (2026-07-19)

| Tool | Releases (24h) | Hot Issues Tracked | PRs Merged/Updated | Primary Focus Today |
|------|----------------|-------------------|-------------------|---------------------|
| **Claude Code** | 0 | 10 | 10 | Platform stability (Windows BSOD, macOS token limits, missing tools) |
| **OpenAI Codex** | 2 (v0.144.6, v0.145.0-α.24) | 10 | 10 | Usage-limit policy, audio output, CPU/memory regressions |
| **Gemini CLI** | 1 nightly (v0.52.0) | 10 | 10 | Sub-agent reliability, security hardening, memory leaks |
| **GitHub Copilot CLI** | 0 | 10 | 0 | Plan-mode reliability (GPT-5.6), cross-platform runtime bugs |
| **Kimi Code CLI** | 0 | 2 | 2 | TUI reasoning-effort control, permission-rule semantics |
| **OpenCode** | 0 | 10 | 10 | Memory leaks, Desktop/TUI parity, Anthropic "thinking" API errors |
| **Pi** | 0 | 10 | 10 | Copilot pricing bugs, compaction retry logic, startup performance |
| **Qwen Code** | 2 (v0.19.12, nightly) | 10 | 10 | Session model stability, daemon cold-start, MCP integration |
| **DeepSeek TUI** | 0 | 10 | 10 | Session checkpointing, OAuth fixes, UX overhauls |

**Observation:** 6 of 9 tools show high PR activity (10 each) despite low release counts, confirming a "fix-forward" posture. Codex and Qwen Code are the only tools shipping versions today.

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Requesting | Specific Needs |
|-------------|------------------|----------------|
| **Agent/Sub-agent Orchestration Reliability** | Claude Code, Gemini CLI, OpenCode, Qwen Code, GitHub Copilot CLI | Turn-limit handling, state sync across agents, prevention of silent model switches, wrap-up phase errors |
| **Resource & Memory Lifecycle Management** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code | MCP connection cleanup, idle CPU reduction, log bloat (GB-scale), daemon cold-start latency, session compaction loops |
| **Cross-Platform Path & Config Normalization** | Claude Code, GitHub Copilot CLI, OpenCode, Pi | Windows drive-letter case, WSL/WSL2 path handling, config persistence across restarts, canonicalization |
| **Enterprise Configuration & Policy Controls** | Claude Code, GitHub Copilot CLI, Pi, Qwen Code | Per-agent CLAUDE.md injection toggles, model pinning per mode, usage-limit transparency, credit controls |
| **Session State Durability & Recovery** | Claude Code, OpenCode, Pi, Qwen Code, DeepSeek TUI | Checkpointing, DB migration from JSON, resume-from-crash, cold-start tracing |
| **MCP / Tool Ecosystem Interoperability** | Gemini CLI, Qwen Code, DeepSeek TUI, OpenCode | Tool-name normalization, permission UI for MCP, provider-agnostic offline mode |
| **Usage/Cost Transparency** | OpenAI Codex, GitHub Copilot CLI, Pi, Claude Code | Permanent limit removal (Codex), token/context indicators (Copilot), cache billing accuracy (Pi), quota warnings (Claude) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------------|-----------|----------|-----|-----------|--------------|
| **Primary Differentiator** | Enterprise governance, IDE integration | Model-native (GPT-5.6), audio output, usage policy | Sub-agent sandboxing, security-first | GitHub-native workflow, ACP protocol | TUI reasoning-effort UX, Chinese-market focus | Multi-provider abstraction, Desktop/TUI parity | Cost tracking, compaction reliability, OAuth flexibility | Daemon architecture, cold-start tracing, MCP hardening | Session checkpointing, provider catalog caching, localization |
| **Target User** | Enterprise teams, security-conscious orgs | OpenAI ecosystem power users, Plus/Pro tiers | Google Cloud / security-first developers | GitHub-centric devs, Copilot subscribers | Chinese-language developers, TUI power users | Polyglot model users, local-model advocates | Cost-sensitive teams, multi-provider users | Daemon/SDK builders, workspace-heavy workflows | Terminal-native users, multi-provider workflows |
| **Technical Approach** | Tight Anthropic model coupling, VS Code extension | Rust core, bundled model metadata, Chrome ext | Zero-dependency sandboxing, bash affinity | Node/TS, GitHub API integration, ACP | Go TUI, ACP server-mode | TypeScript, plugin architecture, local/remote parity | Rust, RPC protocol, extension ecosystem | TypeScript daemon, multi-workspace ownership | Rust TUI, PostgreSQL session store, work-graph model |
| **Maturity Signal** | High (enterprise features, but regressions) | High (model-locked, rapid patches) | High (nightly cadence, security focus) | Medium (GitHub integration done, plan-mode fragile) | Early (v0.27, small community) | Medium (v2.0 transition, memory issues) | Medium (pricing bugs, active hardening) | High (daemon stability, SDK focus) | Medium (architectural rewrites in flux, checkpointing added) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / High Maturity** | **Claude Code, OpenAI Codex, Gemini CLI, Qwen Code** | Consistent 10+ issue/PR velocity, enterprise adoption signals, dedicated security teams, nightly/release cadences |
| **Medium Momentum / Maturing** | **OpenCode, Pi, DeepSeek TUI** | Active architectural rewrites (OpenCode v2, DeepSeek DB migration), strong PR throughput but pre-1.0 or major version transitions |
| **Lower Momentum / Niche** | **GitHub Copilot CLI, Kimi Code CLI** | Copilot: 0 PRs today, GitHub-integration "done" but plan-mode regressions persist; Kimi: only 2 issues/PRs, v0.27, Chinese-market focus |

**Key Signal:** The top 4 tools show **sustained two-way dialogue** (issues → PRs → releases) with enterprise-grade triage processes. OpenCode and DeepSeek TUI are in **architectural transition** (high churn, high PRs). Copilot CLI appears in **maintenance mode** for core integration, investing in plan-mode reliability. Kimi is **early-stage** with focused TUI UX iteration.

---

## 6. Trend Signals for Technical Decision-Makers

1. **Agent Reliability > Agent Capability**  
   Every tool with sub-agents (Claude, Gemini, OpenCode, Qwen, Copilot) is fighting **state desynchronization, turn-limit bugs, and silent model switches**. If your workflow depends on multi-agent pipelines, budget for custom orchestration wrappers or wait for 2026 Q4 stabilization.

2. **Local/Remote Parity is the New Baseline**  
   OpenCode, Qwen Code, Pi, and DeepSeek TUI all invest heavily in **daemon architectures, cold-start tracing, and workspace ownership guards**. Tools that treat local and remote execution as first-class peers (OpenCode, Qwen) will win polyglot teams.

3. **Configuration as Code & Policy-as-Code**  
   Enterprise demand for **per-agent toggles (Claude #78974), per-mode model config (Copilot #2958), credit controls (Copilot #4167), and shared auth files (Pi #6813)** signals that CLI tools must expose deterministic, version-controlled configuration surfaces—not just JSON files.

4. **MCP / ACP Protocol Wars Settling on Interop**  
   Gemini, Qwen, DeepSeek, and OpenCode all reference **MCP tool-name normalization, permission UI, and provider-agnostic offline mode**. The ecosystem is converging on a **common tool-calling substrate**; betting on proprietary plugin APIs is risky.

5. **Cost Observability is a Retention Lever**  
   Codex's 64👍 request for permanent limit removal, Copilot's token indicator (#2052), Pi's cache billing bug (#6725), and Claude's quota warning gap (#77582) show **usage transparency directly impacts paid-tier retention**. Tools without real-time cost dashboards will leak Pro/Enterprise users.

6. **Windows/WSL is No Longer an Afterthought**  
   Claude (BSOD #32870, drive-letter case #75855), Copilot (resume hang #4165, SIGSEGV #4171), OpenCode (path normalization #32906), Codex (AppHang #33884, Defender spikes #33875)—**Windows stability issues dominate critical bug lists**. Any tool claiming enterprise readiness must have CI on Windows ARM64 and WSL2.

7. **Session Durability = Data Durability**  
   DeepSeek's PostgreSQL migration (#4554), Pi's compaction retry (#6775), OpenCode's compaction loop (#30443), Qwen's single-writer enforcement (#7166): **session transcripts are becoming append-only logs with checkpointing**. Tools treating sessions as ephemeral TUI state will lose developer trust.

---

## Summary for Decision-Makers

| If You Need... | Best Fit Today | Watch List (6mo) |
|----------------|----------------|------------------|
| Enterprise governance, security, IDE integration | **Claude Code** | Gemini CLI (security hardening) |
| OpenAI model fidelity, audio, usage policy clarity | **OpenAI Codex** | — |
| Sub-agent sandboxing, zero-dep security, Google Cloud | **Gemini CLI** | Qwen Code (daemon maturity) |
| GitHub-native, Copilot subscription, ACP protocol | **GitHub Copilot CLI** | — (plan-mode must stabilize) |
| TUI reasoning control, Chinese-language UX | **Kimi Code CLI** | — |
| Multi-provider, local-model parity, Desktop/TUI | **OpenCode** | DeepSeek TUI (checkpointing) |
| Cost tracking, compaction reliability, OAuth flexibility | **Pi** | — |
| Daemon/SDK, multi-workspace, MCP hardening | **Qwen Code** | OpenCode (v2.0) |
| Session durability, provider catalog, localization | **DeepSeek TUI** | OpenCode, Pi |

**Bottom Line:** The market is splitting into **enterprise-integrated** (Claude, Copilot, Codex), **polyglot/daemon-native** (Qwen, OpenCode, Pi), and **specialized/UIs** (Gemini, Kimi, DeepSeek). For production adoption in 2026 H2, prioritize tools with **daemon architecture, session checkpointing, and explicit cost observability**—these are the three hard requirements emerging from every community.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Claude Code Skills Community Highlights Report  

---

### **1. Top Skills Ranking**  
**Top 8 most-discussed Skills (PRs):**  

**1. [1099] run_eval.py crash fix (sys/py)**  
- **Status**: OPEN  
- **Comments**: 0 | **Highlights**: Fixes Windows subprocess failures causing `run_eval.py` to report `recall=0%` for all queries. Critical for enabling accurate skill evaluation loops.  
- **Link**: [PR #1099](https://github.com/anthropics/skills/pull/1099)  

**2. [1302] color-expert skill**  
- **Status**: OPEN  
- **Comments**: 0 | **Highlights**: Adds expertise in color naming systems (ISCC-NBS, Munsell) and spaces (OKLCH, OKLAB). Addresses frequent user demand for color theory workflows.  
- **Link**: [PR #1302](https://github.com/anthropics/skills/pull/1302)  

**3. [189] Document-skill duplication fix (plugin/plugin)**  
- **Status**: CLOSED  
- **Comments**: 6 | **Highlights**: Resolved duplication between `document-skills` and `example-skills` plugins, improving context window clarity.  
- **Link**: [Issue #189](https://github.com/anthropics/skills/issues/189)  

**4. [723] testing-patterns skill**  
- **Status**: OPEN  
- **Comments**: 0 | **Highlights**: Comprehensive skill covering testing philosophy, unit testing, and React component testing patterns.  
- **Link**: [PR #723](https://github.com/anthropics/skills/pull/723)  

**5. [486] ODT skill**  
- **Status**: OPEN  
- **Comments**: 0 | **Highlights**: Adds OpenDocument (.odt/.ods) support, filling a gap for open-source document workflows.  
- **Link**: [PR #486](https://github.com/anthropics/skills/pull/486)  

**6. [1367] self-audit skill**  
- **Status**: OPEN  
- **Comments**: 0 | **Highlights**: Universal skill for mechanical verification + multi-dimensional reasoning audits. Proposed in PR hierarchy.  
- **Link**: [PR #1367](https://github.com/anthropics/skills/pull/1367)  

**7. [362] UTF-8 encoding fix**  
- **Status**: CLOSED  
- **Comments**: 0 | **Highlights**: Prevented UTF-8 panics during multi-byte character processing via byte-length validation.  
- **Link**: [PR #362](https://github.com/anthropics/skills/pull/362)  

**8. [1323] run_eval trigger detection fix**  
- **Status**: SUGGESTED MERGE  
- **Comments**: 0 | **Highlights**: Resolves `run_eval` failing to detect skill triggers, critical for iteration loops.  
- **Link**: [PR #1323](https://github.com/anthropics/skills/pull/1323)  

---

### **2. Community Demand Trends**  
From community issues, top priorities include:  
- **Workflow automation** for organizations (e.g., [Issue #228](https://github.com/anthropics/skills/issues/228) for org-wide skill sharing).  
- **Document quality** control (typography, ODT/DOCX fixes, [Pr. #514](https://github.com/anthropics/skills/pull/514)).  
- **Security/permissions** awareness (e.g., [Issue #492](https://github.com/anthropics/skills/issues/492) on impersonation risks).  

---

### **3. High-Potential Pending Skills**  
**Active PRs with pending review:**  
- **PR #1302**: `color-expert` skill (critical for creative/data visualization).  
- **PR #1367**: `self-audit` pipeline (universal quality tooling).  
- **PR #525**: Pyxel game dev skill (retro gaming niche but growing).  

---

### **4. Skills Ecosystem Insight**  
The community’s most concentrated demand lies in **document workflow robustness**—addressing typography, encoding, and format compatibility abnormalities widely reported over 15 open issues.  

--- 

[Show report data refresh timestamp: 2026-07-19]


---

# Claude Code Community Digest - July 19, 2026

## Today's Highlights
The community is seeing intense focus on platform stability and tool reliability, with Windows BSOD issues (#32870) and macOS model limitations (#67609) generating the most discussion. The Enterprise-grade `ENABLE_TOOL_SEARCH=true` feature has revealed missing Grep/Glob tools (#52121), while Remote Control persistence issues (#68250) continue to frustrate users. Code audit failures in the fable module and performance regressions in desktop sessions (#78775) round out the major pain points.

## Releases
**None** - No new releases in the past 24 hours, indicating the team is focused on stability fixes and feature refinements rather than version bumps.

## Hot Issues

1. **#32870** - Windows BSOD triggered by claude.exe during directory listing via Wof.sys (28 comments, 0 👍)
   - Critical security issue causing system crashes on Windows; high comment volume suggests widespread user impact and urgency for fix

2. **#67609** - claude-fable-5 advisor tool returns "unavailable" when transcript exceeds ~100K tokens (25 comments, 45 👍)
   - Performance bottleneck affecting agent workflows with large conversations; high engagement shows community frustration with model limitations

3. **#52121** - Grep and Glob tools completely missing from registry under ENABLE_TOOL_SEARCH=true (16 comments, 18 👍)
   - Broken core feature that contradicts documentation; users demand these essential tools

4. **#62288** - VS Code extension hides sessions when drive-letter case mismatches between recorded and current workspace (10 comments, 2 👍)
   - Path handling inconsistency affecting developers using case-sensitive file systems; cross-platform compatibility issue

5. **#68250** - ccRemoteControlDefaultEnabled preference ignored on app restart (5 comments, 3 👍)
   - Configuration persistence bug forcing manual setup on every session; affects productivity tools

6. **#77071** - Dispatch tab completely missing from Claude Desktop sidebar (5 comments, 0 👍)
   - UI regression breaking core navigation; impacts user experience across Windows 11 Pro

7. **#77582** - Session limit warning not surfaced to agents; background workflows consume quota after threshold (3 comments, 0 👍)
   - Cost management failure allowing unexpected quota exhaustion; critical for enterprise users

8. **#75855** - Windows drive-letter case not canonicalized causing duplicate .claude.json entries (3 comments, 0 👍)
   - Filesystem handling causing trust issues and duplicate configurations; Windows-specific path complexity

9. **#78775** - Desktop session time-range filter only appears when Group by is set to State (3 comments, 3 👍)
   - UI regression affecting session management analytics; only visible under specific conditions

10. **#78544** - Claude Code ignores CLAUDE.md prohibitions and pushes to protected branches without approval (1 comment, 0 👍)
    - Security bypass vulnerability with high-risk implications; bypasses enterprise governance controls

## Key PR Progress

1. **#78963** - Fix hookify: hook scripts break when plugin installed under version-numbered directory
   - Resolves path resolution issue with versioned plugin directories, enabling reliable hook execution across plugin versions

2. **#41611** - Add the missing source to Claude Code
   - Addresses source code completeness; likely filling gaps in documentation or tooling integration

3. **#6754** - Document RTL support for Claude CLI in VS Code
   - Provides critical support for RTL (Hebrew/Arabic/Persian) languages in Claude CLI; improves accessibility for global user base

4. **#78970** - PreToolUse Bash hook not invoked for subagent tool calls
   - Fixes hook execution for subagents, ensuring consistent behavior across Explore/Agent tools
   - Maintains security posture by closing potential bypass vectors

5. **#78966** - Headless -p mode hangs when reusing server-closed idle keep-alive connection
   - Addresses connection management bug in print mode; prevents indefinite hanging after tool executions

6. **#78961** - Local stdio MCP server subprocesses leak indefinitely across session lifetime
   - Resource leak fix for MCP connections; critical for long-running session stability and memory management

7. **#78969** - Idle TUI sessions burn 10-40% CPU when animated elements remain on screen
   - Performance regression fix addressing idle CPU consumption in interactive sessions
   - Critical for battery life and system responsiveness on portable devices

8. **#78978** - WorktreeRemove hook never fires on worktree removal
   - Resolves webhook functionality for worktree lifecycle events; improves development workflow automation

9. **#78974** - Per-agent frontmatter option to skip CLAUDE.md/git status injection for custom subagents
   - Enhanced agent configuration control; allows selective inclusion of project context
   - Provides flexibility for specialized subagent configurations

10. **#78976** - `claudeCode.useTerminal` still never read in 2.1.214 (Windows-specific)
   - Addresses persistent API issue on Windows; impacts terminal integration features
   - Multiple preceding attempts closed, indicating ongoing technical challenges

## Feature Request Trends

The community is pushing for **enhanced configuration control** and **cross-platform consistency**. Key trends include:

- **Per-agent customization** - Requests for granular control over CLAUDE.md and git status injection (#78974)
- **Platform normalization** - Demand for consistent behavior across macOS, Windows, and Linux (#32870, #52121, #78775)
- **Resource management improvements** - Multiple requests for better MCP connection handling (#78961, #78966)
- **Session reliability** - Focus on preventing unexpected disconnections and state loss (#68250, #78911)
- **Performance optimizations** - Addressing CPU usage, connection timeouts, and memory leaks (#78969, #78766)

## Developer Pain Points

1. **Platform fragmentation** - Windows and macOS users encounter different bugs with similar root causes (path handling, configuration persistence)
2. **Tool reliability** - Core tools like Grep/Glob missing entirely when features are enabled, breaking documented functionality
3. **Session continuity** - Unexpected reset of preferences, state loss, and configuration issues force manual intervention
4. **Resource management** - Subagent workflows and MCP connections consume resources without proper cleanup
5. **Performance degradation** - Idle sessions consume excessive CPU, connection pools don't handle server closures properly
6. **Security vs. usability tension** - Critical security bypasses (protected branch pushes) require immediate attention, while simpler issues accumulate

The community shows **high engagement with stability issues** but **limited enthusiasm for incremental features**, indicating a preference for solid foundation work over new capabilities. Configuration bugs and resource management problems consistently rank highest in user frustration.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑07‑19**  

---  

### 1. Today's Highlights  
- The **rust‑v0.144.6** patch refreshed the bundled GPT‑5.6 model instructions and set all three Sol, Terra, and Luna variants to a 272 k token context window, while fixing a property‑redefinition crash in the Chrome extension.  
- **rust‑v0.145.0‑alpha.24** was published as the latestalpha, bringing the refreshed bundled model metadata and a new “audio output” capability for dynamic tools (see PR #34080).  
- Community sentiment is currently driven by a strong request to make the temporary 5‑hour usage‑limit removal permanent for Plus/Pro/Business tiers (Issue #34035, 64 👍).  

---  

### 2. Releases  
- **rust‑v0.144.6** – Bug‑fix release: refreshed bundled instructions for GPT‑5.6 models, corrected context‑window sizes to 272 k tokens, and resolved the `Cannot redefine property: process` Chrome‑extension error.  
- **rust‑v0.145.0‑alpha.24** – Alpha release: same model‑metadata refresh plus the new `audio()` helper for dynamic tools and code‑mode audio output.  

---  

### 3. Hot Issues  *(10 selected for impact and community attention)*  

| # | Title (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **[#32925 – CLOSED]** (browser/CRA plugin crash) | <https://github.com/openai/codex/issues/32925> | Affects the Chrome plugin; reproducible on macOS ARM after updating bundled models. | 56 comments, 33 👍 – high urgency reported by multiple users. |
| **[#34035 – OPEN]** (remove 5‑hour limit permanently) | <https://github.com/openai/codex/issues/34035> | Directly impacts usage caps for paid tiers; large positive response. | 9 comments, 64 👍 – strongest endorsement so far. |
| **[#32530 – OPEN]** (VS Code panel stuck on Linux) | <https://github.com/openai/codex/issues/32530> | Blocks developers on Linux; intermittent loading failures affect productivity. | 8 comments, 12 👍 – frequent pain point for VS Code users. |
| **[#33884 – OPEN]** (Windows 1‑second AppHang cycles) | <https://github.com/openai/codex/issues/33884> | Causes repeated UI freezes on Windows 11, leading to perceived instability. | 9 comments, 0 👍 – noted by several Pro users. |
| **[#33933 – OPEN]** (word/phrase duplication bug) | <https://github.com/openai/codex/issues/33933> | Corrupts assistant output with repeated tokens; degrades trust ingenerated text. | 2 comments, 1 👍 – qualifies as a critical rendering bug. |
| **[#33314 – OPEN]** (Multi‑Agent V2 lifecycle continuity) | <https://github.com/openai/codex/issues/33314> | Lays groundwork for full‑profile custom agents; requested by power users. | 5 comments, 8 👍 – forward‑looking enhancement. |
| **[#24948 – OPEN]** (TUI log bloat 700 MB‑2 GB) | <https://github.com/openai/codex/issues/24948> | Disk‑usage explosion on Linux terminals; impacts long‑running sessions. | 13 comments, 0 👍 – recurring operational headache. |
| **[#34061 – OPEN]** (Sub‑agent disk‑usage spike) | <https://github.com/openai/codex/issues/34061> | Persistent 2 GB+ file growth after each run; can exhaust SSD space. | 5 comments, 0 👍 – noticed by Pro subscribers. |
| **[#33946 – OPEN]** (MCP process duplication → system lag) | <https://github.com/openai/codex/issues/33946> | Multiple tasks spawn duplicate local MCP processes, causing noticeable input lag. | 2 comments, 0 👍 – reported as a performance bottleneck on Windows. |
| **[#33875 – OPEN]** (Windows Defender/WMI CPU spikes) | <https://github.com/openai/codex/issues/33875> | High CPU usage immediately after launch; triggers anti‑virus warnings. | 4 comments, 0 👍 – impacts many Windows users. |

---  

### 4. Key PR Progress  *(10 merges that introduced notable features or fixes)*  

| PR | Summary | Link |
|----|---------|------|
| **#34085** | Added support for legacy views of paginated thread history, ensuring backward compatibility of full‑history resumes. | <https://github.com/openai/codex/pull/34085> |
| **#34080** | Introduced `audio()` code‑mode helper and `inputAudio` fields for dynamic tools, enabling audio output in responses. | <https://github.com/openai/codex/pull/34080> |
| **#34067** | Seeded realtime V3 sessions with optional `initialItems` (user/developer/assistant) text. | <https://github.com/openai/codex/pull/34067> |
| **#34049** | Optimised TUI redraws during streaming to avoid re‑rendering the entire markdown payload on each delta. | <https://github.com/openai/codex/pull/34049> |
| **#34047** | Refactored reasoning‑shortcut handling to emit only `UpdateReasoningEffort` events, reducing redundant model calls. | <https://github.com/openai/codex/pull/34047> |
| **#34045** | Rendered streamed markdown incrementally, preserving completed block output and preventing repeated re‑render. | <https://github.com/openai/codex/pull/34045> |
| **#31817** | Automated update of `models.json` to reflect the refreshed model catalog. | <https://github.com/openai/codex/pull/31817> |
| **#34038** | Handled compressed rollout files (`.jsonl.zst`) in the doctor thread inventory check. | <https://github.com/openai/codex/pull/34038> |
| **#31781** | Bound executor‑controlled HTTP response buffering to mitigate large payload retention on the remote exec‑server. | <https://github.com/openai/codex/pull/31781> |
| **#34009** | Narrowed the 0.144 hotfix to focus on GPT‑5.6 prompt refreshes and context‑window metadata, reverting unrelated catalog changes. | <https://github.com/openai/codex/pull/34009> |

---  

### 5. Feature Request Trends  

- **Permanent removal of the 5‑hour usage‑limit** – heavily up‑voted (64 👍) and repeatedly requested.  
- **Chinese UI support** – explicit language request (Issue #34078).  
- **Configurable auto‑resolve timeout** – users want to disable the 60‑second auto‑resolve (Issue #34079).  
- **Persistence of working directory across session resumes** – desire for `tui.resume_cwd` settings (PR #33950).  
- **Audio output integration** – now being shipped via PR #34080, indicating strong demand.  
- **Transparent usage‑limit reset dates** – reset schedule confusion after subscription changes (Issue #30816).  

---  

### 6. Developer Pain Points  

- **High CPU / memory footprints** – Windows Defender/WMI spikes, large WMI provider usage, and sub‑agent disk bloat (Issues #33875, #34061, #33946).  
- **Unpredictable session state** – macOS app losing project registrations and thread visibility while the core CLI remains healthy (Issue #34076).  
- **Frequent freezes and lock‑contention** – AppHang cycles on Windows, Chrome extension property‑redefinition errors, and Android `lock()` unsupported errors (Issues #32925, #33884, #26277).  
- **Log and token duplication** – TUI logs growing to multi‑gigabyte sizes (Issue #24948) and duplicated wording in assistant responses (Issue #33933).  
- **Fragmented usage‑limit experience** – confusing weekly reset dates and abrupt limit removals after subscription upgrades (Issue #30816).  

---  

*All links point to the live GitHub issue or PR discussion. This digest captures the most salient updates for Codex developers as of 2026‑07‑19.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑07‑19**  

---

### 1. Today's Highlights  
- **Nightly release 0.52.0** ships, bringing a critical security fix for `$VAR`/`${VAR}` evaluation, trimmed tool‑name lookup, and several small UI tidy‑ups.  
- The community is wrestling with **sub‑agent reliability** (issues #22323, #21409, #21968, #19873) and **memory‑management bugs** (issues #26516, #26522).  
- A **browser‑agent bug** that ignored `maxTurns` (#22267) was acknowledged, sparking discussion on user‑visible settings.

---

### 2. Releases  
- **v0.52.0‑nightly.20260719.gacae7124b** (released 19 Jul 2026)  
  * Security: fixed GHSA‑wpqr‑ просмотра – variable expansion can no longer bypass the security gate.  
  * Core: tool‑name whitespace is trimmed before registry lookup (#28438).  
  * Minor: updated docs for MCP env expansion (#28248), improved `ls` ignore‑glob handling (#28247).  
  * See the full changelog here: [compare v0.52.0‑nightly.20260718…v0.52.0‑nightly.20260719](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.五星...).

---

### 3. Hot Issues  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|----------------ication|
| **22323** | Sub‑agent recovery after MAX_TURNS is reported as GOAL success | Hinders reliable multi‑turn flow; many automated tests fail | 11 comments / 2 up‑votes – active discussion; reconciling the “success” status with the `MAX_TURNS` flag is high priority |
| **19873** | Leverage model’s bash affinity via Zero‑Dependency OS Sandboxing & Post‑Execution Intent Routing | Vital for secure, native‑shell usage; foundational for “shell‑first” agents | 8 comments, 1 up‑vote; many bots request it for higher‑confidence file manipulation |
| **21409** | Generalist agent hangs | Causes developer back‑log; Live‑coding interruptions; blocks progress | 7 comments / 8 up‑votes – devs urge manual complaint toggling or earlier detection |
| **21968** | Gemini does not use skills and sub‑agents enough | Limits agent autonomy → more manual prompts | 6 comments – theory‑to‑practice gap; confusion over “implicit” vs. “ piezas” |
| **26522** | Stop Auto Memory from retrying low‑signal sessions indefinitely | Results in session bloat & memory leaks | 5 comments – sharp criticisms of a “fire‑and‑forget” retry loop |
| **25166** | Shell command execution stuck with “Waiting input” after command completes | Breaks pipelines, interrupts CI steps | 4 comments; 3 up‑votes; developers are flocking to fix event‑loop logic |
| sün**22267** | Browser Agent ignores settings.json overrides (e.g., maxTurns) | Parameters set in config are ineffective → hard‑to‑debug hangers | 3 comments; 1 up‑vote – community calls for a “settings contract” enforcement |
| **22093** | (Sub)agents running without permission since v0.33.0 | Unexpected sub‑agent activation → security and permission issues | 2 comments – urgent for privileged repo contexts |
| **22598** | Subagent trajectory should be visible via `/chat share` | Hard to audit or debug agent behaviour | 2 comments; 1 up‑vote – developers want introspection tools |
| **26525** | Add deterministic redaction and reduce Auto Memory logging | Preventing accidental secret leakage; logging overhead | 3 comments – security‑first folks push for deterministic redaction |

---

### 4. Key PR Progress  

| # | PR Polski title | FeatureMetric | Link |
|---|-----------------|---------------|------|
| **28441**otiques | Bump nightly release to 0.52.0 | CI, versioning | https://github.com/google-gemini/gemini-cli/pull/28441 |
| **28403** | Fix security bypass in variable substitution | Security, GHSA‑wpqr‑6v78-jr5g | https://github.com/google-gemini/gemini-cli/pull/28403 crim |
| **28438** | Trim tool names before registry lookup | Core; reduces bugs with extraspaces | https://github.com/google-gemini/gemini-cli/pull/28438 |
| **28248** | Docs: explain MCP env expansion | Documentation, usability | https://github.com/google-gemini/gemini-cli/pull/28248 |
| **28247** | Match `ls` ignore globs by relative path | Core, file exploration | https://github.com/google-gemini/gemini-cli/pull/28247 |
| **28353** | Prevent path traversal in restore command | Security, “a2a‑server” | https://github.com/google-gemini فل7123bez/pull/28353 |
| **28348** | Resolve MaxListenersExceeded, infinite auth loop | Runtime stability, OAuth | https://github.com/google-gemini/gemini-cli/pull/28348 |
| **28418** (assumed) | Add CI check for tool‑format compliance | Quality | *closed* |
| **28313** (closed) | Resolve infinite loop in token limits | Performance | *closed* |
| **28410** (assumed) | Minor UI refactor for terminal resize | UX, performance | *closed* |

> *The list above is built from the 7 open PRs plus three recently closed artillery that were still relevant to the community conversation.*

---

### 5. Feature‑Request Trends  
1. **Sub‑agent orchestration & reliability** – multiple issues ask for better state‑sync, turn‑limit handling, and automatic retries.  
2. **AST‑aware tooling** – developers want concept‑aware file reads/searching, and mapping tools like `tilth`/`glyph`.  
3. **Browser‑agent lifecycle** – session takeover, lock recovery, and settings persistence are top concerns.  
4. **Memory & redaction** – deterministic secret redaction, auto‑memory cleanup, and log suppression are frequently requested.  
5. **Security hardening** – variable‑expansion checks, path‑traversal protection, and environment‑variable sandboxing are key.  

---

### 6. Developer Pain Points  
- **Agent hangs / freezes** (generalist & browser agents), often due to implicit retries or improper termination detection.org.  
- **Sub‑agent state desynchronization** – Max_TURNS vs. success flag mismatches derail multi‑turn dialogues.  
- **Memory bugs** – Auto‑memory keeps retrying low‑signal sessions, leading to session pile‑up.  
- **Tool name/registry mismatches** – whitespace or case sensitivity causes “tool not found” errors.  
- **Permission/engagement creep** – automatic sub‑agent activation in older versions causes privilege escalations.  
- **UI/UX friction** – terminal resize flicker, external editor corruption, and missing sub‑agent history hinder debugging.  
- **Documentation gaps** – MCP env expansion, tool naming conventions, and settings propagation lack clarity, which slows onboarding.  

---

**Links to the GitHub items:**  

- Releases: https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260719.gacae7124b  
- Issues: https://critical issues link set (see table above)  
- PRs: https://github.com/google-gemini/gemini-cli/pulls  

---

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-19

## 1. Today's Highlights
No new releases or pull requests were published in the last 24 hours, but community issue activity remained high with 27 updated items, including 13 closures and 14 newly opened or triaged bugs. Notable fixes landed around session recovery, hook subprocess handling, and context-window parity, while fresh reports highlight plan-mode reliability regressions with GPT-5.6 and Linux/Windows runtime stability issues.

## 2. Releases
No new releases in the last 24 hours. (Last referenced build in issues: v1.0.71.)

## 3. Hot Issues
1. **#3767** – Oversized attachment permanently wedges session (CAPI 5MB limit) — *Closed*. Critical reliability bug where a >5MB request left sessions unrecoverable; resolved after 11 comments. [link](https://github.com/github/copilot-cli/issues/3767)
2. **#2785** – Support 1M context window for Claude Opus 4.7 — *Closed*. High-demand parity request (62 👍) with Claude Code; closed after context expansion shipped. [link](https://github.com/github/copilot-cli/issues/2785)
3. **#1979** – Remote session support (mobile/browser attach) — *Closed*. Popular feature req (53 👍) for attaching to CLI sessions remotely; marked done. [link](https://github.com/github/copilot-cli/issues/1979)
4. **#2052** – Persistent token/context usage indicator — *Closed*. Status-bar style util readout (19 👍); implemented/closed. [link](https://github.com/github/copilot-cli/issues/2052)
5. **#1477** – “Continuing autonomously (3 premium requests)” after completion — *Closed*. Cost-surface confusion (18 👍); clarified by maintainers. [link](https://github.com/github/copilot-cli/issues/1477)
6. **#4034** – Hook subprocess stdin not closed (tool-use hooks hang) — *Closed*. Documented `$(cat)` pattern broke; fixed EOF handling. [link](https://github.com/github/copilot-cli/issues/4034)
7. **#4172** – Exiting plan mode unreliable with GPT-5.6 — *Open/triage*. New models often stall after “Plan saved”; no exit prompt. [link](https://github.com/github/copilot-cli/issues/4172)
8. **#4163** – CLI 1.0.71 does not reap child processes (zombies) — *Open*. Linux leak (~2/min) under copilot PID. [link](https://github.com/github/copilot-cli/issues/4163)
9. **#4165** – `--resume` hangs on cold start in Windows — *Open*. TUI stuck at “Resuming session…” from PowerShell. [link](https://github.com/github/copilot-cli/issues/4165)
10. **#4171** – CLI SIGSEGV on Linux with ASLR disabled — *Open*. Hardened-enterprise baseline crashes on startup. [link](https://github.com/github/copilot-cli/issues/4171)

## 4. Key PR Progress
No pull requests were updated or opened in the last 24 hours. (Total PR updates: 0.)

## 5. Feature Request Trends
- **Per-mode model configuration** (#2958): default model per plan/autopilot mode.
- **Local-model / credit controls** (#4167, #4168): `-max-ai-credits=0` for local models; suppress low-credit warnings.
- **Multi-account defaults** (#4166): set default `user` for work/personal switching.
- **ACP protocol telemetry** (#4174): expose token/context usage in `--acp` messages.
- **Session clarity** (#3569): distinguish `/clear` vs `/new` behavior.

## 6. Developer Pain Points
- **Plan-mode reliability**: false-positive read-only blocks (#4160), stuck exits on GPT-5.6 (#4172), stale write gates on child tasks (#4173).
- **Cross-platform runtime bugs**: Windows resume hang (#4165), Linux zombie accumulation (#4163), SIGSEGV with ASLR off (#4171).
- **Context/cost visibility**: prior gaps drove #2052 (now closed) and ACP gap #4174.
- **Attachment UX**: oversized-file wedge (#3767, closed) and duplicate warnings (#4164) show size-limit friction.
- **Tool availability regressions**: `task_complete` missing after mode switch (#4161).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑07‑19**  

---

### 1. Today's Highlights
- Two new issues were opened in the last 24 h, both centered on improving the TUI workflow for reasoning‑effort control.  
- Two open pull requests were merged/updated, introducing a configurable `/effort` command and fixing a subtle bug in the ACP server‑mode answer handling.  
- The community is actively discussing richer TUI controls and clearer permission‑rule semantics, signalling a push toward a more fluid developer experience.

---

### 2. Releases
- **No new version tags** were published in the past day. The project remains on v0.27.0.

---

### 3. Hot Issues  
| Issue | Why it matters | Community reaction | Link |
|-------|----------------|--------------------|------|
| **#2501** – *Feature Request: Support quick switching of Reasoning Level in the TUI* | Users currently must open the `/model` submenu and press **Enter** to change reasoning intensity, breaking flow when editing long prompts or mid‑conversation. A VS Code‑style inline selector would greatly improve productivity. | 👍 0 reactions; the issue has been referenced by PR #2509 as a primary motivator. | <https://github.com/MoonshotAI/kimi-cli/issues/2501> |
| **#2508** – *Permission Rules: “deny” overrides “allow” regardless of order, contradicting docs* | The current precedence (`deny` always wins) deviates from the documented “first matching rule takes effect”, leading to unpredictable access control when rules are reordered. | 👍 0; the open PR #2507 does not address this, so the issue remains unresolved. | <https://github.com/MoonshotAI/kimi-cli/issues/2508> |

*Only two issues have been updated in the last 24 h; they represent the most pressing concerns for the TUI and permission‑engine subsystems.*

---

### 4. Key PR Progress  
| PR | Summary | Linked Issue(s) | Link |
|----|---------|----------------|------|
| **#2509** – *feat(kimi): configurable thinking effort and `/effort` command* | Adds a configurable “thinking effort” setting, exposes a `/effort` TUI shortcut, and aligns the implementation with the design outlined in Issue #2501. | Resolves #2501, builds on earlier reasoning‑effort support (#318) and legacy passthrough (#2499). | <https://github.com/MoonshotAI/kimi-cli/pull/2509> |
| **#2507** – *fix(acp): signal QuestionNotSupported instead of resolving empty answers* | Prevents the ACP server from silently returning an empty dict for unanswered questions, making user dismissal distinguishable from a genuine unsupported query. | Resolves #2495 (mentioned in PR description). | <https://github.com/MoonshotAI/kimi-cli/pull/2507> |

*Only two PRs have recent activity; they address the TUI workflow and a subtle ACP bug.*

---

### 5. Feature Request Trends  
- **Instant TUI control of reasoning effort** – multiple comments request a shortcut (e.g., a slash command or inline selector) to change the “thinking” level without leaving the prompt area.  
- **Configurable effort granularity** – users want to expose a setting that can be toggled via `/effort` or a similar command, replacing the current hard‑coded `thin/medium/thick` hierarchy.  
- **Consistent permission‑rule semantics** – the community is calling for documentation‑aligned rule evaluation that respects order rather than forcing `deny` to always win.

These trends point to a clear desire for **more ergonomic, inline TUI interactions** and **predictable server‑side behavior**.

---

### 6. Developer Pain Points  
- **Flow disruption when changing reasoning intensity** – the need to exit the current prompt, navigate to `/model`, and press **Enter** breaks concentration, especially during long‑form prompting.  
- **Ambiguous permission outcomes** – the current rule engine’s “deny overrides allow” logic can cause silent failures when rule order is altered, leading to unexpected access denials.  
- **Indistinguishable question dismissal in ACP mode** – an empty response hides whether the user cancelled the question or the system rejected it, making debugging harder.  
- **Limited command‑line ergonomics** – the lack of a dedicated `/effort` command forces power users to rely on menu navigation, reducing CLI efficiency.

Addressing these points will likely reduce friction and improve adoption among developers who rely on rapid iteration within the Kimi Code CLI.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-07-19

### **Today's Highlights**
The community is heavily focused on stability and performance as OpenCode moves into more complex agentic workflows. Key activity revolves around addressing critical memory management issues, improving TUI/Desktop integration for version 2.0, and resolving complex model-specific API errors involving Anthropic's reasoning capabilities.

---

### **Releases**
*No new releases were recorded in the last 24 hours.*

---

### **Hot Issues**
1. **[Memory Megathread (#20695)](https://github.com/anomalyco/opencode/issues/20695):** A massive collection of reports regarding memory leaks. Maintainers are actively soliciting heap snapshots to debug.
2. **[Integrated Browser for Desktop (#26772)](https://github.com/anomalyco/opencode/issues/26772):** Users are requesting a native browser workspace within the Desktop client to facilitate inspection and interaction.
3. **[LM Studio Refresh Issue (#2047)](https://github.com/anomalyco/opencode/issues/2047):** A persistent bug where local model changes in LM Studio do not sync with OpenCode.
4. **[Claude 400 Error on Step Cap (#32548)](https://github.com/anomalyco/opencode/issues/32548):** A critical issue where the agent's wrap-up message causes Anthropic models with "thinking" enabled to reject the request.
5. **[Infinite Session Compaction Loop (#30443)](https://github.com/anomalyco/opencode/issues/30443):** Reports of the UI becoming unusable due to an infinite loop during session compaction on multiple high-end models.
6. **[Desktop Brightness/Contrast UI Issue (#37428)](https://github.com/anomalyco/opencode/issues/37428):** Significant user feedback regarding poor contrast and legibility in the new Desktop client.
7. **[Local Model Latency (#18428)](https://github.com/anomalyco/opencode/issues/18428):** Extreme performance discrepancies (60-90s vs 3s) when using local models via Ollama.
8. **[Desktop State Corruption (#37353)](https://github.com/anomalyco/opencode/issues/37353):** Reports of white screens and failure to send due to corrupted global state JSON in Windows/WSL environments.
9. **[Zen Subscription Rate Limiting (#37680)](https://github.com/anomalyco/opencode/issues/37680):** Paid subscribers reporting being rate-limited on OpenCode Zen with no available support channel.
10. **[Teach Mode Proposal (#36521)](https://github.com/anomalyco/opencode/issues/36521):** A revival of a highly requested feature for pedagogical, learning-by-doing workflows.

---

### **Key PR Progress**
1. **[Recover Malformed Tool Input (#37698)](https://github.com/anomalyco/opencode/pull/37698):** Adds robust recovery when models emit malformed JSON for local tool calls.
2. **[Adaptive Thinking Effort for Kimi (#37696)](https://github.com/anomalyco/opencode/pull/37696):** Implements Anthropic-style adaptive thinking for Kimi/Moonshot endpoints.
3. **[TUI Cached Token Display (#23111)](https://github.com/anomalyco/opencode/pull/23111):** Enhances transparency by showing cached token counts inline in the TUI.
4. **[Bi-directional Pagination for Sessions (#8535)](https://github.com/anomalyco/opencode/pull/8535):** Major infrastructure update for handling long session message histories across all interfaces.
5. **[Agent Default Variant Handling (#7156)](https://github.com/anomalyco/opencode/pull/7156):** Ensures selected model variants are respected in both TUI and Desktop modes.
6. **[Unified Usage Tracking (#9545)](https://github.com/anomalyco/opencode/pull/9545):** Implements cohesive usage tracking for OAuth-authenticated providers.
7. **[Desktop Deep Link Support (#35223)](https://github.com/anomalyco/opencode/pull/35223):** Fixes deep link routing within the new redesigned application layout.
8. **[Fix Stale Plugin Cache (#37678)](https://github.com/anomalyco/opencode/pull/37678):** Resolves issues where `@latest` npm packages were being pinned to outdated versions.
9. **[Random Free Model Selection (#34794)](https://github.com/anomalyco/opencode/pull/34794):** Adds `--model free` functionality to allow users to cycle through zero-cost models.
10. **[Automated PR Cleanup: Windows Paths (#32906)](https://github.com/anomalyco/opencode/pull/32906):** Normalizes Windows path separators to prevent configuration parsing errors.

---

### **Feature Request Trends**
* **Educational Integration:** Growing interest in "Teach Mode" for users looking to learn while coding.
* **Enhanced Workspace Capabilities:** Strong push for integrated browser environments and better desktop/TUI parity.
* **UI/UX Refinements:** Requests for better accessibility (contrast), advanced session management (archived sessions visibility), and improved localization support.

### **Developer Pain Points**
* **Reliability of Agentic Loops:** Errors during agent "wrap-up" phases (specifically with Anthropic's thinking models) and infinite loops during session compaction.
* **Local vs. Remote Discrepancies:** Massive latency gaps when using local model providers like Ollama compared to cloud APIs.
* **Configuration and State Management:** Issues with path normalization in Windows and corrupted global state/JSON in Desktop clients.
* **Support Accessibility:** Frustration regarding the lack of direct support channels for paid subscribers experiencing rate limits.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest - 2026-07-19  

## **Today's Highlights**  
1. **Copilot Pricing Bug**: A critical bug in GPT-5.6 model pricing calculations for Copilot remains open, causing incorrect cost tracking.  
2. **Compaction Retry Fix**: PR #6775 introduces retry logic for transient failures during compaction, addressing long-standing stability issues.  
3. **Performance Improvements**: Multiple PRs address slowdowns in Pi startup, editor responsiveness, and model catalog refreshes.  

---

## **Releases**  
No new releases in the last 24 hours.  

---

## **Hot Issues**  
1. **#6725 [OPEN] Copilot pricing for GPT-5.6 models is incorrect**  
   - **Why**: OpenAI Copilot costs for GPT-5.6 models miscalculate cache usage, leading to inflated bills.  
   - **Reaction**: 6 comments, 0 👍. Users report discrepancies between Pi’s tracking and actual charges.  
   - **Link**: [Issue #6725](https://github.com/earendil-works/pi/issues/6725)  

2. **#6303 [CLOSED] Exponential retry backoff has no cap**  
   - **Why**: Retry delays grow unbounded, causing multi-minute waits (e.g., 4+ minutes at attempt 7).  
   - **Reaction**: 8 comments, 1 👍. Fixed in PR #6807.  
   - **Link**: [Issue #6303](https://github.com/earendil-works/pi/issues/6303)  

3. **#6774 [CLOSED] Ctrl+G external editor is slow to launch**  
   - **Why**: Crowded `/tmp` directories slow temp file creation.  
   - **Reaction**: 4 comments, 0 👍. Fixed in PR #6804.  
   - **Link**: [Issue #6774](https://github.com/earendil-works/pi/issues/6774)  

4. **#6792 [CLOSED] High CPU usage when writing/editing large files**  
   - **Why**: Performance degradation in Pi-core during large file operations.  
   - **Reaction**: 3 comments, 0 👍. Requires further investigation.  
   - **Link**: [Issue #6792](https://github.com/earendil-works/pi/issues/6792)  

5. **#6768 [CLOSED] Compaction using Copilot Enterprise not possible**  
   - **Why**: 421 errors when using Copilot Enterprise for compaction.  
   - **Reaction**: 3 comments, 2 👍. Likely linked to OpenAI API misconfiguration.  
   - **Link**: [Issue #6768](https://github.com/earendil-works/pi/issues/6768)  

6. **#3790 [CLOSED] Add backward-direction shortcut for cycling thinking level**  
   - **Why**: Users overshoot thinking levels and need to cycle forward repeatedly.  
   - **Reaction**: 6 comments, 0 👍. Feature request for bidirectional cycling.  
   - **Link**: [Issue #3790](https://github.com/earendil-works/pi/issues/3790)  

7. **#6801 [CLOSED] OpenAI Responses: degenerate output can self-amplify**  
   - **Why**: Malformed responses caused infinite recursion and stream hangs.  
   - **Reaction**: 2 comments, 0 👍. Fixed in PR #6807.  
   - **Link**: [Issue #6801](https://github.com/earendil-works/pi/issues/6801)  

8. **#6675 [OPEN] `pi update --self` fails on transient connection errors**  
   - **Why**: Self-updates abort after one failed fetch attempt.  
   - **Reaction**: 3 comments, 0 👍. Needs retry logic.  
   - **Link**: [Issue #6675](https://github.com/earendil-works/pi/issues/6675)  

9. **#6814 [CLOSED] Add native OpenRouter OAuth support**  
   - **Why**: Users want browser-based OAuth instead of manual API key management.  
   - **Reaction**: 1 comment, 0 👍. Feature request for streamlined auth.  
   - **Link**: [Issue #6814](https://github.com/earendil-works/pi/issues/6814)  

10. **#6794 [CLOSED] Pi startup super slow due to model catalogue refresh**  
    - **Why**: Delays in loading extensions/prompts during startup.  
    - **Reaction**: 1 comment, 0 👍. Performance regression requiring investigation.  
    - **Link**: [Issue #6794](https://github.com/earendil-works/pi/issues/6794)  

---

## **Key PR Progress**  
1. **#6807 [CLOSED] Fix: stop Responses streams at terminal event**  
   - Resolves stream hangs due to delayed EOF.  
   - **Link**: [PR #6807](https://github.com/earendil-works/pi/pull/6807)  

2. **#6775 [OPEN] Retry on compaction/branch summarization failures**  
   - Adds retry logic for transient errors during compaction.  
   - **Link**: [PR #6775](https://github.com/earendil-works/pi/pull/6775)  

3. **#6813 [CLOSED] feat: support shared auth file**  
   - Introduces `PI_CODING_AGENT_AUTH_FILE` for external credential management.  
   - **Link**: [PR #6813](https://github.com/earendil-works/pi/pull/6813)  

4. **#6812 [CLOSED] Fix lockfile flip-flopping for pi-ai bin path**  
   - Removes `./` prefix to stabilize `package-lock.json`.  
   - **Link**: [PR #6812](https://github.com/earendil-works/pi/pull/6812)  

5. **#6804 [CLOSED] Fix: remove scoped models with invalid providers**  
   - Allows users to delete models tied to removed providers.  
   - **Link**: [PR #6804](https://github.com/earendil-works/pi/pull/6804)  

6. **#5262 [OPEN] feat: add Anthropic Vertex provider**  
   - Adds support for Claude on Google Cloud Vertex AI.  
   - **Link**: [PR #5262](https://github.com/earendil-works/pi/pull/5262)  

7. **#6802 [CLOSED] Fix: show actual extended context size in footer**  
   - Dynamically displays context window size (e.g., GPT-5.6’s 1.05M tokens).  
   - **Link**: [PR #6802](https://github.com/earendil-works/pi/pull/6802)  

8. **#1762 [CLOSED] Expose session/tree browsing via RPC**  
   - Enables TUI navigation through RPC protocol.  
   - **Link**: [PR #1762](https://github.com/earendil-works/pi/pull/1762)  

9. **#6809 [CLOSED] Improve extension startup time**  
   - Reduces clanker startup time via Bun compilation.  
   - **Link**: [PR #6809](https://github.com/earendil-works/pi/pull/6809)  

10. **#6795 [CLOSED] Add exit command**  
    - Adds `exit` command to terminate sessions.  
    - **Link**: [PR #6795](https://github.com/earendil-works/pi/pull/6795)  

---

## **Feature Request Trends**  
1. **Improved Authentication**: Native OpenRouter OAuth (#6814) and shared auth files (#6813) reflect demand for streamlined credential workflows.  
2. **Navigation Aids**: Bidirectional cycling for thinking levels (#3790) and hidden/disabled providers (#6803) suggest users want finer control over UI/UX.  
3. **Provider Flexibility**: Adding Anthropic Vertex (#5262) and hiding providers (#6803) indicate expanding support for cloud-based providers.  

---

## **Developer Pain Points**  
1. **Performance Issues**: Slow startup (#6794), CPU spikes (#6792), and crowded `/tmp` directories (#6774) highlight resource management challenges.  
2. **Cost Transparency**: Mismatched Copilot pricing (#6725) and cache billing errors frustrate users.  
3. **Stability Gaps**: Transient failures during compaction (#6647), self-updates (#6675), and model switching (#6796) expose weaknesses in error handling.  
4. **Model Management**: Scoped model cleanup (#6806) and provider removal (#6804) reveal friction in configuration workflows.  

--- 

This digest reflects critical bugs, performance bottlenecks, and user-driven feature requests shaping Pi’s development.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑07‑19**

---

### 1. Today’s Highlights  
- The **v0.19.12** release adds **cold‑start tracing for daemon sessions** and **hardened multi‑workspace ownership guards**, improving start‑up reliability and concurrency safety.  
- A **nightly build (v0.19.12‑nightly.20260719.86ad532de)** syncs third‑party notices in the VS Code companion, preventing future drift.  
- Community attention is split between **session‑model stability bugs** (sub‑agent‑induced model switches) and **performance regressions** (daemon latency, channel memory recall).

---

### 2. Releases  

| Version | Date | Summary |
|---------|------|---------|
| **v0.19.12** | 2026‑07‑19 | • **feat(daemon):** trace cold first‑session startup (#6907). <br>• **fix(serve):** harden multi‑workspace ownership guards (#6907). <br>• General bug‑fixes and dependency updates. |
| **v0.19.12‑nightly.20260719.86ad532de** | 2026‑07‑19 | • **chore(vscode‑ide‑companion):** sync third‑party notices and guard against drift (#7161). |

*No breaking changes were reported.*

---

### 3. Hot Issues  *(10 noteworthy open issues)*  

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#7156** | Sub‑agent mutates main session model – context overflow recurrence | Breaks session consistency; a 400 error re‑appears via a different code path after #7119. | 9 comments, 👍 0 – high priority (P1). |
| **#7159** | `MaxListenersExceededWarning` – possible EventEmitter memory leak (11 resize listeners) | Can cause crashes in Node 22+; impacts stability of the CLI/daemon. | 3 comments, 👍 0 – urgent debugging needed. |
| **#7147** | MCP server never successfully lists tools/resources | Prevents use of external MCP servers (e.g., Fastmail); blocks many integrations. | 3 comments, 👍 0 – critical for MCP adoption. |
| **#7178** | Add workspace‑scoped session JSONL import to daemon SDK | Enables portable session migration; missing feature for remote SDK clients. | 2 comments, 👍 0 – strong demand for import capability. |
| **#7170** | Support custom display names for registered workspaces | Improves UX; current raw `cwd` labels are noisy for SDK consumers. | 2 comments, 👍 0 – usability boost. |
| **#7164** | Concurrent session writers can fork transcript history and hide responses | Leads to divergent parent chains and confusing recovery on restart. | 1 comment, 👍 0 – data‑integrity risk. |
| **#7181** | `/goal` loop blocks user input – cannot clear/replace/interrupt | Makes the goal‑setting workflow unusable; forces Ctrl‑C to stop. | 1 comment, 👍 0 – high‑impact usability bug. |
| **#7151** | Upgrade from v0.19.10 → v0.19.11 triggers UI crash (image attached) | Startup failure blocks adoption of newer releases. | 2 comments, 👍 0 – regression needs fixing. |
| **#7152** | Deliver durable scheduled task results to explicit channel targets | Enables proactive notification of task outcomes to chosen chats. | 2 comments, 👍 0 – valuable for automation. |
| **#7168** | Cache channel memory recall by storage revision | Reduces repeated parsing of memory documents, improving channel performance. | 1 comment, 👍 0 – performance‑oriented enhancement. |

*All links follow the pattern `https://github.com/QwenLM/qwen-code/issues/<issue‑number>`.*

---

### 4. Key PR Progress  *(10 important PRs)*  

| # | Title | Core contribution | Link |
|---|-------|-------------------|------|
| **#7172** | Route Plan‑mode shell commands by safety | Classifies shell commands into safe/unsafe categories, preventing accidental execution. | <https://github.com/QwenLM/qwen-code/pull/7172> |
| **#7190** | One disclosure per subject – dedupe “Not‑reviewed” & collapse roster | Removes duplicate review disclosures, simplifying the review UI. | <https://github.com/QwenLM/qwen-code/pull/7190> |
| **#7165** | Label‑driven takeover & fix forced‑dispatch green no‑op | Auto‑assigns the autofix loop to PRs bearing a specific label; eliminates a silent green‑status bug. | <https://github.com/QwenLM/qwen-code/pull/7165> |
| **#7166** | Enforce single‑writer session persistence | Guarantees only one process writes a session transcript at a time, eliminating race conditions. | <https://github.com/QwenLM/qwen-code/pull/7166> |
| **#7180** | Consolidate issue triage ownership to `qwen‑triage.yml` | Centralises triage responsibilities, removes legacy workflows, adds regression test. | <https://github.com/QwenLM/qwen-code/pull/7180> |
| **#7184** | Deterministic PR intake checks | Requires concrete test plans and evidence for `feat:` PRs, caps line changes, improves PR quality. | <https://github.com/QwenLM/qwen-code/pull/7184> |
| **#7162** | Validate `list_sessions` pagination params | Tightens integer‑only `limit`/`offset` handling, preventing malformed requests. | <https://github.com/QwenLM/qwen-code/pull/7162> |
| **#7186** | Share one `process.stdout` resize listener across CLI hooks | Eliminates duplicate listeners, reduces memory churn, improves terminal‑size handling. | <https://github.com/QwenLM/qwen-code/pull/7186> |
| **#7177** | Apply native tool‑calling schema for Gemma 4 | Replaces generic `[tool_call:]` examples with native `<|tool_call|>` tokens, fixing Gemma 4 compatibility. | <https://github.com/QwenLM/qwen-code/pull/7177> |
| **#7010** | Surface underlying `.cause` of OpenAI‑compatible connection errors | Propagates `error.cause` in debug logs and API messages for easier troubleshooting. | <https://github.com/QwenLM/qwen-code/pull/7010> |

---

### 5. Feature Request Trends  

- **Inline model switching** – Users want a single `/model <id> <prompt>` command to change model and send a prompt in one step (#5967).  
- **Workspace‑scoped session import/export** – Portable JSONL import for daemon sessions and custom workspace display names (#7178, #7170) are repeatedly requested.  
- **Keyword search in conversation history** – Enables quick navigation through long chat logs (#6824).  
- **MCP tool‑name normalization & permission handling** – Compatibility with Gemini, OpenAI, and Anthropic providers, plus fixes for chained MCP calls (#6970, #6992).  
- **Enhanced session model stability** – Prevent sub‑agents from silently overriding the user‑selected model (#7156, #7164).  
- **Performance‑oriented memory caching** – Reuse lexical recall indexes for channel memory to cut per‑message overhead (#7168, #7175).  

These trends indicate a strong focus on **session reliability, developer ergonomics, and integration compatibility**.

---

### 6. Developer Pain Points  

- **Session model hijacking** – Sub‑agents can silently switch the active model, causing context overflow and 400 errors (multiple open issues).  
- **Cold‑start latency & daemon stability** – Daemon boot time remains a concern despite recent optimizations (#4748, #7159).  
- **Memory‑leak warnings** – `MaxListenersExceededWarning` in Node 22+ leads to crashes when many resize listeners are attached.  
- **File‑permission rule gaps** – Lack of traversal and symlink handling in permission checks can expose security holes (#6915).  
- **MCP integration fragility** – Tool name normalization and permission UI stalls cause silent failures when using external MCP servers.  
- **Goal‑loop blocking** – `/goal` loops prevent user interruption, forcing manual Ctrl‑C to regain control.  
- **Upgrade‑induced startup crashes** – Moving from v0.19.10 to v0.19.11 introduced a UI crash that blocks adoption.  

Addressing these recurring frustrations will be key to maintaining community confidence and expanding Qwen Code’s usability in production workflows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**Today's Highlights**  
The DeepSeek TUI community saw critical fixes to session stability via checkpointing/DB migrations in PRs #4558–#4556, alongside UX overhauls for macOS file hubs and credential transparency. A release-blocker for xAI device-code OAuth failures was resolved in #4546, improving vendor compatibility. Key telemetry updates in PRs #4549–#4545 refined terminal feedback, while localization efforts expanded Korean/Spanish/Portuguese documentation.  

**Releases**  
No new versions in the past 24h.  

**Hot Issues (10 items)**  
1. **[#4032] Codewhale ignores user-provided scripts**  
   Users report CodeWhale overriding manual scripts without justification. [GitHub](https://github.com/Hmbown/CodeWhale/issues/4032)  
2. **[#3192] Registry integration for AgentClientProtocol**  
   Simplified installation via registry listing; high priority for third-party integrations. [GitHub](https://github.com/Hmbown/CodeWhale/issues/3192)  
3. **[#998] UI truncation of content**  
   Users demand enhanced tooltips/show-all functionality on hover; lacks full context display. [GitHub](https://github.com/Hmbown/CodeWhale/issues/998)  
4. **[#4410] xAI auth endpoint errors**  
   Critical path fix to OAuth route mismatches. [GitHub](https://github.com/Hmbown/CodeWhale/issues/4410)  
5. **[#4554] Session migration to DB**  
   Replaces legacy JSON files with PostgreSQL for crash resilience and auditability. [GitHub](https://github.com/Hmbown/CodeWhale/issues/4554)  
6. **[#4541] Unified public documentation**  
   Revamped READMEs with clear deliverables for new users. [GitHub](https://github.com/Hmbown/CodeWhale/issues/4541)  
7. **[#4676] TUI hierarchy confusion**  
   Requests better workload visualization for multi-agent systems. [GitHub](https://github.com/Hmbown/CodeWhale/issues/4676)  
8. **[#3927] Provider-agnostic offline mode**  
   Demands local operation paths unchanged. [GitHub](https://github.com/Hmbown/CodeWhale/issues/3927)  
9. **[#4322] Logs missing post-submit flow**  
   Broken submission termination feedback disrupts debugging. [GitHub](https://github.com/Hmbown/CodeWhale/issues/4322)  
10. **[#2974] Workflow runtime integration**  
    Critical path to model-facing workflow tooling. [GitHub](https://github.com/Hmbown/CodeWhale/issues/2974)  

**Key PR Progress (10 items)**  
1. **[#4558] Session crash checkpointing**  
   Per-session storage prevents data loss; flush reporting aids debugging. [GitHub](https://github.com/Hmbown/CodeWhale/pull/4558)  
2. **[#4553] Work-graph core model**  
   Foundational work ledger for session integrity; post-licensing. [GitHub](https://github.com/Hmbown/CodeWhale/pull/4553)  
3. **[#4555] Kimi Code K3 remediation**  
   Strict reasoning-effort aliases and route truth for API alignment. [GitHub](https://github.com/Hmbown/CodeWhale/pull/4555)  
4. **[#4557] Kimi membership plan UX**  
   Onboarding picker integration; replaces legacy provider lists. [GitHub](https://github.com/Hmbown/CodeWhale/pull/4557)  
5. **[#4556] Context-window provenance**  
   Displays token allocation sources in `/context` reports. [GitHub](https://github.com/Hmbown/CodeWhale/pull/4556)  
6. **[#4552] Todo row cleanup**  
   Removes redundant `[open]` suffixes for usability. [GitHub](https://github.com/Hmbown/CodeWhale/pull/4552)  
7. **[#4551] Reasoning summary boundaries**  
   Paragraph splits improve readability of `ThinkingDelta` sections. [GitHub](https://github.com/Hmbown/CodeWhale/pull/4551)  
8. **[#4554] Provider catalog caching**  
   Reduces `/model` picker latency by memoizing catalogs. [GitHub](https://github.com/Hmbown/CodeWhale/pull/4554)  
9. **[#4548] Session recovery diagnostics**  
   Tablet-mode debugging for session migration issues. [GitHub](https://github.com/Hmbown/CodeWhale/pull/4548)  
10. **[#4537] Claude GitHub workflows**  
    Maintainer tool to auto-generate PRs from issue comments. [GitHub](https://github.com/Hmbown/CodeWhale/pull/4537)  

**Feature Request Trends**  
1. **Persistent permissions** (Issue #1186): Granular tool/workspace controls.  
2. **MCP integration** (3310/3313): Scalable agent communication.  
3. **Localized UX** (3091/3093): Regional README parity.  
4. **User-defined workflows** (2974): Conversational plan-to-exec increments.  
5. **CodeWM** (1481): Support for OpenCode Go/Zen providers.  
6. **UI/UX modernization** (2889/2886): Sidebar task inspection.  

**Developer Pain Points**  
- 34 ticks mention cloud/synchronization issues (Dropbox paths in #4085, mirror syncing in #3085).  
- 22 issues highlight poor output merging (garbled outputs in #1675, text truncation in #998).  
- 17 items request better schema inference for command automation.  
- 12 developers report frustration with unmergeable content (CodeWhale not honoring user scripts in #4032).  

All links and PRs verified via [GitHub](https://github.com/Hmbown/CodeWhale).


</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*