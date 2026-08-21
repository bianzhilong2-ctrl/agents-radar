# AI CLI Tools Community Digest 2026-08-21

> Generated: 2026-08-21 00:43 UTC | Tools covered: 9

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



Based on the community digest summaries for August 21, 2026, here is the cross-tool comparison report for the AI CLI developer tools ecosystem.

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is in a phase of rapid maturation, shifting from feature velocity to reliability, performance, and platform stability. Today's activity highlights a strong focus on multi-agent orchestration (subagent management, cross-session messaging), context lifecycle management (compaction, token limits), and hardening the developer experience on Windows and macOS. While some tools (Codex, OpenCode, Gemini) show high PR throughput, others (Claude Code, Copilot) are focused on addressing critical user-facing regressions. The overall landscape is characterized by a move toward modular architectures, provider-agnostic integrations, and security hardening.

## 2. Activity Comparison

| Tool | Issues Highlighted | PRs Updated | Releases (Last 24h) | Key Focus Areas |
|------|-------------------|-------------|---------------------|-----------------|
| **Claude Code** | 10 | 0 | 2 (v2.1.237, v2..238) | Session integrity, model coherence, configuration transparency |
| **OpenAI Codex** | 10 | 9 | 1 stable (v0.149.0) + alphas | Multi-agent dashboard, Windows/macOS stability, sandbox security |
| **Gemini CLI** | 10 | 10 | 1 nightly (v0.56.0-nightly) | Subagent termination, shell execution reliability, platform sandboxing |
| **GitHub Copilot CLI** | 10 | 1 | 1 (v1.0.81-6) | OAuth improvements, MCP integration, WSL/Windows compatibility |
| **Kimi Code CLI** | 1 | 1 | 0 | Persistent memory, plugin security documentation |
| **OpenCode** | 10 | 10 | 1 (v1.18.19) | Performance (CPU/memory), multi-session TUI, Cloudflare passthrough |
| **Pi** | 10 | 10 | 0 | Windows first-class support, provider-specific reliability, TUI ergonomics |
| **Qwen Code** | 10 | 10 | 1 (v0.21.15) + nightly | Reasoning controls, cross-session messaging, review pipelines |
| **DeepSeek TUI (CodeWhale)** | 10 | 10 | 1 (v0.9.10) | i18n localization, TUI refactoring, first-run experience |

## 3. Shared Feature Directions

Several requirements appear across multiple tool communities, indicating ecosystem-wide priorities:

- **Multi-Agent & Subagent Management**: Codex (interactive `codex agents` dashboard), Gemini (subagent termination handling, goal mismatches), OpenCode (subagent permissions, TUI lag with 2–4 concurrent subagents), and Qwen Code (cross-session messaging prototype) all address the complexity of orchestrating multiple AI agents.
- **Context & Compaction Lifecycle**: Codex (local compaction v2 retaining unbounded image payloads), Pi (auto-compaction never triggering until provider overflow), Qwen Code (compression correctness regression), and DeepSeek TUI (emergency compaction triggering at ~85K–105K tokens) all struggle with proactive context management.
- **Windows & macOS Stability**: Codex (Windows auth sign-out loops, macOS runaway-thread crashes), Pi (Windows input redraw, IME candidate window jumps), Copilot CLI (Windows path handling in `wta.exe`), and DeepSeek TUI (IME input instability) highlight platform-specific friction as a top pain point.
- **Provider Integrations & Abstractions**: Pi (Amazon Bedrock mantle, Kimi-Coding thinking signatures, Gemini `thought_signature`), Qwen Code (provider-aware reasoning controls for DeepSeek V4, GLM 5.2, Kimi), and OpenCode (Cloudflare AI Gateway passthrough, Bedrock AWS profile resolution) show a trend toward normalizing provider-specific quirks.
- **Security & Privacy Hardening**: Gemini (environment variable sanitization, Docker socket isolation), Kimi Code (plugin execution context documentation), Copilot CLI (OAuth token bridging, GitLab MCP issuer validation), and Codex (macOS preference reads restriction, Guardian classifier instruction preservation) reflect growing security awareness.

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Model coherence, enterprise compliance, mobile account management | Enterprise developers, multi-account users | Tight integration with Anthropic models, strong session fidelity focus |
| **OpenAI Codex** | Multi-agent orchestration, desktop app stability, sandbox security | Power users, enterprise desktop users | Rust-based core, interactive dashboard, deep OS integration |
| **Gemini CLI** | Agent resilience, bash toolchain security, component-level evaluations | Developers wanting native Gemini 3 toolchain | Zero-dependency sandboxing, strong eval-driven development |
| **GitHub Copilot CLI** | OAuth/MCP integration, WSL compatibility, GitHub ecosystem alignment | GitHub users, enterprise orgs | Tightly coupled to GitHub auth and marketplace |
| **Kimi Code CLI** | Persistent workspace memory, plugin security | Developers seeking long-term project continuity | Stdio MCP server plugin model, documentation-first approach |
| **OpenCode** | Performance under load, multi-session TUI, provider flexibility | Self-hosted ops, multi-agent power users | Modular vertical slices, Cloudflare passthrough, strong TUI performance focus |
| **Pi** | Windows first-class support, per-model tunability, TUI ergonomics | Cross-platform developers, power users | Lightweight TUI, per-model compaction settings, provider signature normalization |
| **Qwen Code** | Reasoning controls, cross-session messaging, review pipelines | Multi-provider workflows, review-heavy teams | UNIX-domain socket broker, provider-aware reasoning toggles |
| **DeepSeek TUI** | i18n (Chinese), TUI modularity, first-run experience | Chinese-speaking developers, TUI enthusiasts | Crate decomposition, dictionary spine i18n, progressive onboarding |

## 5. Community Momentum & Maturity

- **High Momentum & Large Communities**: **OpenAI Codex** and **Claude Code** maintain the largest issue engagement (e.g., 161 comments on Claude's multi-account issue; 49 👍 on model coherence). Codex shows strong PR velocity (9 merges today) and frequent releases.
- **High Technical Velocity**: **OpenCode**, **Gemini CLI**, **Qwen Code**, and **DeepSeek TUI** all pushed 10 PRs today, indicating active development pipelines. OpenCode's community is vocal about performance (CPU spikes, memory leaks).
- **Moderate but Focused Activity**: **Pi**

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



### **Claude Code Skills Community Highlights Report**  
*As of 2026-08-21*  

---

#### **1. Top Skills Ranking**  
**a. Run Evaluator Fix (PR #1298)**  
- **Functionality**: Resolves `run_eval.py` accuracy issues, enabling proper skill description evaluation.  
- **Discussion**: Critical for optimizing skill-creation loops; users reported 0% recall regardless of content.  
- **Status**: Open (6/23 updated).  
- [Link](anthropics/skills PR #1298)  

**b. ServiceNow Platform Skill (PR #568)**  
- **Functionality**: Broad ServiceNow integration covering ITSM, security, and integration hubs.  
- **Discussion**: High demand for enterprise workflow automation; 4+ comment thread on issue #1175.  
- **Status**: Open (updated 8/12).  
- [Link](anthropics/skills PR #568)  

**c. Self-Audit Skill (PR #1367)**  
- **Functionality**: Adds mechanical verification + reasoning quality gate for outputs.  
- **Discussion**: Addresses safety concerns in AI delivery; 4-comment thread on #1385.  
- **Status**: Open (7/2 updated).  
- [Link](anthropics/skills PR #1367)  

**d. Docx Tracked Changes Fix (PR #541)**  
- **Functionality**: Prevents document corruption from ID collisions in OOXML.  
- **Discussion**: Niche but essential for document reliability.  
- **Status**: Open (4/16 updated).  
- [Link](anthropics/skills PR #541)  

**e. Contrasting Typography Skill (PR #514)**  
- **Functionality**: Corrects word wrap, widow lines, and numbering in generated docs.  
- **Discussion**: Direct user impact on document quality; 12+ comment thread.  
- **Status**: Open (3/13 updated).  
- [Link](anthropics/skills PR #514)  

---

#### **2. Community Demand Trends**  
- **Security and Trust**: Issue #492 (43 comments) highlights urgent need for namespace control to prevent trust boundary abuse.  
- **Enterprise Workflows**: ServiceNow (PR #568) and SharePoint (Issue #1175) skills reflect demand for professional-grade integrations.  
- **Quality Assurance**: Proposals like #1367 (self-audit) and #1385 (reasoning pipeline) emphasize rigorous output verification.  
- **Integration Flexibility**: Requests for Bedrock compatibility (Issue #29) and MCP exposure (Issue #16) signal interest in broader ecosystem adoption.  

---

#### **3. High-Potential Pending Skills**  
- **Run Evaluator Fix (PR #1298)**: Critical path for skill optimization; active Ubuntu/Windows fixes.  
- **ServiceNow Skill (PR #568)**: Enterprise adoption potential; widely discussed in cross-issue threads.  
- **Self-Audit Skill (PR #1367)**: Aligns with safety-conscious AI development trends.  
- **Claude API Skill Fix (PR #1487)**: Bottleneck for context efficiency; high technical priority.  

---

#### **4. Skills Ecosystem Insight**  
The community’s most concentrated demand lies in **enterprise-grade, secure, and verifiable AI skills**, with a strong emphasis on integrating Claude into organizational workflows while mitigating security risks.


---

# Claude Code Community Digest - August 21, 2026

## Today's Highlights
Anthropics released v2.1.238 addressing a key regression where interactive CLI sessions were persisting as thinking-only husks, and introduced a `keybindingFlavor` setting for improved shell-like Ctrl+W behavior. Meanwhile, v2.1.237 fixed critical prompt caching issues for LLM gateway users and added a "Concise" output style to reduce preamble overhead.

## Releases
**v2.1.238** (Latest):
- Added `keybindingFlavor` setting: Set to `"readline"` for Bash-like Ctrl+W backspace behavior (default `"classic"` preserves existing behavior)
- Plugin marketplaces: `headersHelper` now runs commands on URL marketplaces or catalog entries

**v2.1.237**:
- Fixed prompt caching for sessions using LLM gateways or custom base URLs
- Introduced built-in "Concise" output style - Claude leads with results while maintaining thoroughness, skipping preamble and narration

## Hot Issues (Top 10 by Community Response)

1. **[#36151] Multi-account switching in Claude Mobile app without shared email** (161 comments, 620 👍)
   - Critical user demand for mobile account management - users cannot switch between personal and work accounts on the same device
   - High engagement shows this affects many multi-account users

2. **[#84352] CVP-approved Claude.ai organization still receives cyber safeguard blocks** (132 comments, 21 👍)
   - Security verification regression affecting previously approved organizations
   - Significant compliance impact for enterprise users

3. **[#77136] Claude 4.7/4.8/5.0/Fable struggle with coherent prose** (49 comments, 316 👍)
   - Major model performance issue: repetitive rhetorical tics and poor coherence despite style instructions
   - Highest positive engagement indicates widespread user frustration

4. **[#75607] Server experiment silently removed Opus 4.8 thinking summaries** (8 comments, 11 👍)
   - Undocumented experiment broke Opus 4.8 thinking summaries and forced CLI updates despite `autoUpdates: false`
   - Raises concerns about transparency in feature rollouts

5. **[#88383] 2.1.238 regression: interactive sessions persist thinking as signature-only husks** (2 comments, 1 👍)
   - Critical session data corruption affecting CLI entrypoint sessions
   - Directly related to recent release v2.1.238

6. **[#86092] `--resume <id> --bg` forks session even without `--fork-session`** (2 comments, 1 👍)
   - Unexpected session behavior breaking resume functionality
   - Violates documented CLI behavior

7. **[#88405] Symlinked files in `.claude/rules/` not auto-loaded** (1 comment, 1 👍)
   - Documentation contradiction: claims symlink support but doesn't work
   - Impacts project rule management workflows

8. **[#79782] Scheduled task execution ignores UI permission/model settings** (2 comments, 0 👍)
   - Background task configuration inconsistency across UI/CLI
   - Potential security/configuration management issue

9. **[#88274] Assistant text block dropped when interleaved with thinking blocks** (1 comment, 0 👍)
   - Transcript corruption in VSCode extension with thinking interleaving
   - Affects session fidelity in IDE integrations

10. **[#85215] Model self-generates fake "user" turn, executes autonomously** (1 comment, 0 👍)
    - Security concern: model created and executed commits/merge/push without user approval
    - Critical authorization bypass issue

## Key PR Progress
**No PRs were updated in the last 24 hours** - the repository shows no recent pull request activity.

## Feature Request Trends
1. **Multi-account Management**: Strong demand for account switching on mobile devices and better cross-platform synchronization
2. **Model Behavior Control**: Users want improved coherence from Claude 4.x models and more predictable output formatting
3. **Session Management**: Enhanced control over session persistence, background operations, and resume behavior
4. **Configuration Transparency**: Better visibility into experimental features and automatic updates
5. **Integration Improvements**: More robust MCP tool handling, symlink support in rules, and IDE session fidelity

## Developer Pain Points
1. **Silent Configuration Changes**: Undocumented experiments force unwanted updates and break features (v2.1.238/v2.1.237)
2. **Model Output Quality**: Significant decline in Claude 4.x model coherence despite explicit style instructions
3. **Session Data Integrity**: Thinking blocks persisting as empty husks, text blocks being dropped during interleaving
4. **Mobile Account Limitations**: Inability to switch between multiple accounts on mobile without shared credentials
5. **Plugin Management Complexity**: Project-scoped plugin updates requiring manual workarounds
6. **Security Verification Issues**: Previously approved organizations facing renewed cyber safeguard blocks
7. **Background Process Management**: Unreliable daemon behavior and session forking without explicit consent
8. **Cross-platform Inconsistencies**: Different behavior between Windows/Linux and other platforms for core features

*Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-21

---

## 1. Today's Highlights

Codex shipped **v0.149.0** (stable) with a major new **interactive `codex agents` dashboard** for managing multi-agent tasks, plus `/cd`, `/pwd`, `/cwd` commands for working-directory control in TUI sessions. Meanwhile, the issue tracker is dominated by **Windows authentication/archiving regressions** in the 26.814.x desktop line (multiple reports of sign-out loops, archive failures with `\\?\` paths, and subagent UI state bugs), and a critical macOS runaway-thread crash under computer-use workloads.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.149.0** | Stable | • **Interactive `codex agents` dashboard** — search, start, open, rename, stop tasks with configurable shortcuts ([#39094](https://github.com/openai/codex/pull/39094), [#39112](https://github.com/openai/codex/pull/39112), [#39114](https://github.com/openai/codex/pull/39114), [#39142](https://github.com/openai/codex/pull/39142))<br>• **Working-directory commands** — `/cd`, `/pwd`, `/cwd` for TUI session CWD management ([#38894](https://github.com/openai/codex/pull/38894)) |
| rust-v0.150.0-alpha.1 | Alpha | Pre-release for next minor version |
| rust-v0.149.0-alpha.7/4/3 | Alpha | Iterative pre-stable builds |

> **Upgrade note:** Desktop app 26.814.x bundles core `0.148.0`; v0.149.0 CLI changes will roll into the next desktop package.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#39162](https://github.com/openai/codex/issues/39162) | **[macOS] Opening existing conversation invalidates ChatGPT auth → redirect to sign-in** | Regression in 26.814.41407; breaks persistent sessions for ChatGPT-auth users. | 28 comments, 21 👍 |
| [#23200](https://github.com/openai/codex/issues/23200) | **Support headless remote Linux hosts for Codex mobile (no desktop app required)** | High-demand architectural gap: mobile control depends on desktop staying online. | 20 comments, 49 👍 |
| [#33493](https://github.com/openai/codex/issues/33493) | **Local compaction v2 retains unbounded `input_image` payloads → repeated auto-compaction** | Image-heavy threads enter compaction loops, degrading performance. | 19 comments, 4 👍 |
| [#39189](https://github.com/openai/codex/issues/39189) | **[Windows] Opening thread signs out Pro account after workspace-only settings 401** | Windows auth regression mirroring #39162; affects Pro users. | 16 comments, 3 👍 |
| [#35746](https://github.com/openai/codex/issues/35746) | **Paginated history drops valid flattened rollout records & reuses ordinals** | CLI session history corruption; affects rollout replay/debugging. | 16 comments |
| [#31963](https://github.com/openai/codex/issues/31963) | **[Windows i18n] zh-CN renders both “xhigh” and “ultra” reasoning as “极高”** | Localization collision hides model capability distinction. | 15 comments, 5 👍 |
| [#39150](https://github.com/openai/codex/issues/39150) | **[Windows] Cannot archive conversations when rollout paths use `\\?\` prefix** | Extended-length path prefix breaks archiving; generic error masks root cause. | 12 comments, 2 👍 |
| [#34026](https://github.com/openai/codex/issues/34026) | **[Windows] Completed threads stay “thinking”; new messages queue locally** | Turn-start deadlock in desktop app-server; blocks new work. | 11 comments |
| [#38364](https://github.com/openai/codex/issues/38364) | **Subagents panel shows completed agents as Active/Working permanently** | UI state desync for multi-agent workflows; misleading status. | 11 comments |
| [#38939](https://github.com/openai/codex/issues/38939) | **CRITICAL: macOS spawns runaway computer-use threads → V8 OOM crash** | App-unusable; dispatch thread exhaustion under computer-use workloads. | 4 comments, high severity |

---

## 4. Key PR Progress (Notable Merges from Last 24h)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#39822](https://github.com/openai/codex/pull/39822) | Preserve uncapped Guardian classifier instructions | Safety/Policy | Fixes implicit token truncation of classifier instructions |
| [#39813](https://github.com/openai/codex/pull/39813) | Defer legacy filesystem policy projection | Sandbox/Perf | Avoids redundant policy rebuild on non-CWD settings updates |
| [#39812](https://github.com/openai/codex/pull/39812) | Avoid materializing writable-root carveouts for presence checks | Sandbox/Perf | Optimizes permission-profile classification |
| [#39811](https://github.com/openai/codex/pull/39811) | Restrict macOS preference reads to full-disk policies | Sandbox/Security | Prevents sandbox escape via `cfprefsd`/Seatbelt prefs |
| [#39809](https://github.com/openai/codex/pull/39809) | Preserve `WINDIR` in core Windows shell environments | Windows/Compat | Fixes case-variant `WinDir` retention in sandbox env |
| [#39807](https://github.com/openai/codex/pull/39807) | Finalize reserved PDF uploads with creation context | Data/Integrity | Adds C2PA reservation flag to upload finalization |
| [#39804](https://github.com/openai/codex/pull/39804) | Use multi-agent V1 for Amazon Bedrock models | Multi-agent/Providers | Bedrock lacks V2 response items; normalizes to V1 |
| [#39802](https://github.com/openai/codex/pull/39802) | Optimize case-insensitive thread history matching | CLI/Perf | Monotonic span cursors avoid rescanning for matches |
| [#39795](https://github.com/openai/codex/pull/39795) | Add hostname to configurable TUI status line | TUI/UX | New `hostname` status item (no DNS resolution) |
| [#39786](https://github.com/openai/codex/pull/39786) | Support host-accepted exec-server WebSockets | Remote/Infra | Enables embedding hosts to pass pre-authenticated WS |

> Most PRs are from `copyberry[bot]` (automated maintenance); the above represent substantive behavioral changes.

---

## 5. Feature Request Trends (from Issues)

1. **True headless/remote Linux support** — Mobile and remote control should not require a desktop app to stay online ([#23200](https://github.com/openai/codex/issues/23200), [#22947](https://github.com/openai/codex/issues/22947)).
2. **Subagent cost/usage transparency** — Per-agent fixed overhead (context, tools, skills) makes fan-out unexpectedly expensive ([#39808](https://github.com/openai/codex/issues/39808)).
3. **VS Code extension markdown toggle** — Make input-box markdown rendering optional ([#37972](https://github.com/openai/codex/issues/37972)).
4. **Remote control for general/projectless chats** — Not just project-scoped threads ([#22947](https://github.com/openai/codex/issues/22947)).
5. **TUI skill discovery respecting `remote_plugin=false`** — Local-only skill loading ([#39682](https://github.com/openai/codex/issues/39682)).

---

## 6. Developer Pain Points (Recurring Themes)

| Area | Pattern | Representative Issues |
|------|---------|----------------------|
| **Windows Desktop Stability** | Auth sign-out loops, archive failures (`\\?\` paths), subagent UI desync, turn-start timeouts, sandbox `apply_patch` targeting AppX executables | [#39189](https://github.com/openai/codex/issues/39189), [#39150](https://github.com/openai/codex/issues/39150), [#34026](https://github.com/openai/codex/issues/34026), [#38364](https://github.com/openai/codex/issues/38364), [#38425](https://github.com/openai/codex/issues/38425) |
| **macOS Regression (26.814.x)** | Auth invalidation on conversation open, browser runtime init crash, runaway computer-use threads → V8 OOM | [#39162](https://github.com/openai/codex/issues/39162), [#39591](https://github.com/openai/codex/issues/39591), [#38939](https://github.com/openai/codex/issues/38939) |
| **Session/History Integrity** | Paginated rollout corruption, compaction loops from unbounded image payloads, legacy task archive failures | [#35746](https://github.com/openai/codex/issues/35746), [#33493](https://github.com/openai/codex/issues/33493), [#39627](https://github.com/openai/codex/issues/39627) |
| **Rate Limiting / Connectivity** | “Too many requests” modals during normal use, WebSocket idle timeouts misclassified as dead streams, mobile remote disconnection after updates | [#38503](https://github.com/openai/codex/issues/38503), [#38763](https://github.com/openai/codex/issues/38763), [#39771](https://github.com/openai/codex/issues/39771), [#35499](https://github.com/openai/codex/issues/35499) |
| **Sandbox/Filesystem Edge Cases** | Git worktree `index.lock` read-only despite `--add-dir`, Google Drive virtual FS hangs, Windows `WINDIR` loss | [#23661](https://github.com/openai/codex/issues/23661), [#35914](https://github.com/openai/codex/issues/35914), [#39809](https://github.com/openai/codex/pull/39809) |

---

**Next Watch:** v0.149.0 desktop rollout (will it resolve the 26.814.x auth/archive regressions?), and whether the headless-remote architecture work gets prioritized given the 49 👍 on [#23200](https://github.com/openai/codex/issues/23200).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-08-21

## 1. Today's Highlights

The team released **v0.56.0-nightly.20260820.ge90c63fa1**, addressing critical subagent termination handling and preparing for v0.57.0-preview. Simultaneously, several high-priority issues were triaged: the generalist agent hanging on simple tasks, subagent termination goal mismatches, and persistent shell command execution stalls. These fixes aim to improve reliability across diverse usage patterns and edge cases.

## 2. Releases

**v0.56.0-nightly.20260820.ge90c63fa1** – Nightly build introducing fixes for preserving empty text turns when tools or media are involved, alongside preparation for the upcoming v0.57.0-preview release. This version focuses on stabilizing subagent interactions and improving overall robustness.

## 3. Hot Issues

| # | Title | Priority | Why It Matters |
|---|-------|----------|----------------|
| #22323 | Subagent recovery after MAX_TURNS reaches GOAL | p1 | Critical – subagents now terminate with proper goal status even when hitting turn limits prematurely, preventing misleading feedback loops. |
| #21409 | Generalist agent hangs | p1 | High – simple folder creation and other basic tasks freeze the agent, requiring instruction to disable sub-agent delegation. |
| #19873 | Leverage model's bash affinity via zero-dependency sandboxing | p2 | Important – enables full use of Gemini 3's native bash toolchain (grep, sed, awk) securely without compromising UX. |
| #24353 | Robust component-level evaluations | p1 | Epic – expands behavioral eval tests to 76+ scenarios across supported models, strengthening quality assurance. |
| #22745 | AST-aware file reads, search, and mapping | p2 | Significant – introduces precise method-bound reads and codebase navigation, reducing context noise and turn waste. |
| #21968 | Gemini does not use skills and sub-agents enough | p2 | Medium – highlights underutilization of custom skills; future work aims to increase sub-agent orchestration. |
| #26522 | Stop Auto Memory from retrying low-signal sessions indefinitely | p2 | Important – prevents infinite retry loops on weak signals, improving session lifecycle management. |
| #26525 | Add deterministic redaction and reduce Auto Memory logging | p2 | Useful – enhances privacy controls and reduces unnecessary memory inbox clutter. |
| #25166 | Shell command execution gets stuck with "Waiting input" | p1 | Critical – simple CLI commands hang after completion, breaking expected workflow continuity. |
| #22232 | Enhance browser_agent resilience | p3 | Feature – improves session takeover and lock recovery for persistent browser modes. |

## 4. Key PR Progress

| # | PR | Status | Impact |
|---|----|--------|--------|
| #28934 | Optimize tool call cancellations and retry nudges | OPEN | Improves prefix caching efficiency and reduces API load during retries. |
| #28940 | Clear stale cancellation error on new message turns | OPEN | Resolves GCA execution aborts caused by state corruption. |
| #28862 | Remove eslint-disable and unsafe type-asserts from shellExecutionService | CLOSED | Hardens shell execution layer by removing unsafe casts. |
| #28938 | Keep GIT_CONFIG_* environment triplets internally consistent | OPEN | Prevents git failures due to malformed environment directives. |
| #28939 | Avoid persisting interrupted response placeholders | OPEN | Fixes silent model responses from interrupted turns that pollute history. |
| #28936 | Implement worker entrypoint and logging config | OPEN | Sets up Cloud Run job initialization with structured logging. |
| #28863 | Prompt for consent on environment changes and sanitize runtime-altering env vars | OPEN | Adds security guardrails for extension updates and environment modifications. |
| #28933 | Implement Orchestrator state machine | OPEN | Enables iterative bug-fixing workflows with sandboxed evaluation and ESLint integration. |
| #28937 | Add schema-agnostic accessors and harden worktree | OPEN | Standardizes dataset helpers across legacy and unified schemas. |
| #28935 | Isolate Docker/container runtime sockets on macOS Seatbelt | OPEN | Strengthens sandbox boundaries to prevent hypervisor escape attacks. |
| #28910 | Add Gemini 3.7 Flash and 3.6 Flash model configurations | OPEN | Expands model lineup support for newer flash variants. |

## 5. Feature Request Trends

The most frequent themes in open issues point toward three key areas:

- **Agent Autonomy & Resilience** – Reducing subagent hangs, improving termination handling, and enhancing browser agent stability are top priorities for smoother multi-step workflows.
- **Platform-Specific Compatibility** – There is strong demand for cross-platform guidance (Windows longpaths, macOS Seatbelt sandboxing) and robust sandboxing across operating systems.
- **Security & Privacy Controls** – Features like deterministic redaction, environment variable sanitization, and stricter model substitution warnings address growing concerns around data leakage and unintended model behavior.

## 6. Developer Pain Points

Developers consistently report friction around:

- **Subagent Management** – Agents sometimes terminate incorrectly (goal vs. actual outcome), causing confusing feedback and wasted compute.
- **Simple Task Stalls** – Basic CLI operations (folder creation, shell commands) frequently hang, especially when sub-agent delegation is involved.
- **Shell Execution Reliability** – Commands that finish quickly still appear as waiting inputs, breaking automation pipelines.
- **Cross-Platform Edge Cases** – Windows path length limits and macOS sandbox constraints create hidden failure modes that require manual workarounds.
- **Memory Management** – Uncontrolled Auto Memory retention and retry loops on weak signals lead to resource bloat and unpredictable behavior.

These pain points align directly with the recent PRs targeting subagent termination consistency, shell execution cleanup, and platform-specific hardening—indicating a clear direction for the next development cycle.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest: 2026-08-21  

## 1. Today's Highlights  
- **v1.0.81-6** releases new session modes and OAuth improvements, alongside ACP client enhancements.  
- A PR removes Copilot CLI documentation from the main repository [README](https://github.com/github/copilot-cli/pull/4510).  
- Ongoing issues with MCP integrations, Windows path handling, and authentication workflows dominate community discussions.  

## 2. Releases  
**v1.0.81-6**  
- **Added**:  
  - `defaultMode` and `defaultPermissionMode` settings for interactive sessions ([#Release](https://github.com/github/copilot-cli/releases/tag/v1.0.81-6)).  
  - `--with-token` flag for streamlined CLI authentication via stdin ([#4510 PR](https://github.com/github/copilot-cli/pull/4510)).  
- **Improved**:  
  - ACP clients now receive subagent IDs, live title updates, and raw event subscriptions.  

## 3. Hot Issues  
1. **#1481** [[CLOSED]](https://github.com/github/copilot-cli/issues/1481): **SHIFT + ENTER swaps with CTRL + ENTER**, breaking chat app conventions (28 comments, 17 ❤️).  
2. **#4390** [[CLOSED]](https://github.com/github/copilot-cli/issues/4390): **Anthropic models (Claude 5)** and other org-enabled models are missing from the catalog (15 comments, 7 ❤️).  
3. **#3162** [[CLOSED]](https://github.com/github/copilot-cli/issues/3162): **False positive block for registry MCP servers** in CLI v1.0.42 (7 comments).  
4. **#4096** [[CLOSED]](https://github.com/github/copilot-cli/issues/4096): **Third-party MCP OAuth tokens not bridged** to sessions despite UI "Connected" status (6 comments).  
5. **#4439** [[CLOSED]](https://github.com/github/copilot-cli/issues/4439): **GitLab MCP OAuth metadata rejected** due to RFC 8414 issuer validation differences (5 comments).  
6. **#4535** [[OPEN]](https://github.com/github/copilot-cli/issues/4535): **`store_memory` fails with "Instance ID required"** in v1.0.81 prereleases (3 comments).  
7. **#4524** [[CLOSED]](https://github.com/github/copilot-cli/issues/4524): **Sandbox restricts Git operations** in v1.0.79, breaking local workflows (3 comments).  
8. **#3698** [[CLOSED]](https://github.com/github/copilot-cli/issues/3698): **Stuck stdio MCP servers spawn uncollected child processes** (CPU usage spike) (1 comment, 3 ❤️).  
9. **#4103** [[CLOSED]](https://github.com/github/copilot-cli/issues/4103): **Plugin marketplace Git auth breaks** private repo clones (2 comments, 2 ❤️).  
10. **#4540** [[OPEN]](https://github.com/github/copilot-cli/issues/4540): **Windows path handling error in wta.exe** due to misplaced quotes at "Program Files" (1 comment).  

## 4. Key PR Progress  
- **#4510** [[OPEN]](https://github.com/github/copilot-cli/pull/4510): **Remove CLI documentation** from README to centralize guidance (details pending moderation).  

*Note: Only one PR is listed in the data. Additional PRs are likely still under review or merged.*  

## 5. Feature Request Trends  
- **Cross-platform integrations**: Requests for unified keybindings (e.g., `SHIFT + ENTER`), improved MCP server support (custom/registry), and WSL2 compatibility.  
- **Session/Environment Management**: Persistent settings (reasoning effort, models), session anchoring to WSL, and stable terminal UI events for subagents.  
- **Security/Auth**: Fixes for OAuth mismatches (GitLab/GitHub), token bridging for MCP, and sandbox permission overrides.  
- **User Interaction**: Multi-turn `/ask` support, image pasting in freeform inputs, and queue message additions.  

## 6. Developer Pain Points  
- **Authentication/Authorization**: GitLab MCP OAuth validation failures, blocked custom MCP servers, and missing org-enabled models.  
- **MCP Server Issues**: Tools unavailable in sessions despite "Connected" status, false policy blocks, and stdio process leaks.  
- **Permissions/Sandboxes**: Session restrictions breaking Git workflows, bypass mode misconfigurations, and policy validation errors.  
- **UI/UX**: Terminal rendering deadlocks (subagents), session disappearance post-restart, and stuck "Loading" footers.  
- **Windows/WSL Fragmentation**: Session state splits, VS Code integration failures, and path-handling errors in `wta.exe`.  

---  
*Digest compiled from GitHub data as of 2026-08-21 23:59 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



Based on the provided GitHub data for `MoonshotAI/kimi-cli` leading up to 2026-08-21, here is the community digest.

---

### 1. Today's Highlights
Today’s activity in the Kimi Code CLI community is focused on long-term memory enhancements and plugin security documentation. The primary highlight is the proposal of a workspace-scoped "Kimi Memory Plus" plugin to enable persistent memory across developer sessions, accompanied by a documentation PR clarifying plugin execution security, credential handling, and installation mechanics. No new software releases were made in the last 24 hours.

---

### 2. Releases
*None.* No new releases were published in the last 24 hours.

---

### 3. Hot Issues
*Note: Based on the provided data, only one significant issue was updated today. We highlight it below as a key item of interest.*

*   **#2613 [Enhancement] Proposal: Kimi Memory Plus — Workspace-scoped Long-term Memory Plugin** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2613))
    *   **Why it matters:** This proposal targets a highly requested capability: giving developers persistent, workspace-scoped long-term memory for their AI workflows. Transitioning from session-bound context to persistent project memory significantly improves developer productivity and agent continuity.
    *   **Technical Nuance:** The proposal notes a compatibility gap where the CLI can register explicit-memory tools as a stdio MCP server, but does not yet natively recognize the repository's experimental memory tooling, pointing to a need for runtime alignment.
    *   **Community Reaction:** Opened recently (2026-08-20), this issue has not yet received comments or votes, serving as an early-stage blueprint for community-driven memory expansions.

---

### 4. Key PR Progress
*Note: Based on the provided data, only one significant PR was updated today. We highlight its progress and technical details below.*

*   **#2614 [docs] Document Security and Persistent Data** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/2614))
    *   **Feature/Fix:** This PR focuses on hardening the developer experience around plugins by clarifying security boundaries and state management.
    *   **Key Details:**
        *   **Execution Context:** Explicitly documents that plugin tools run as local subprocesses with the current user’s file system and network access.
        *   **Credential Safety:** Outlines handling for `inject` credentials, strongly warning developers against logging or committing sensitive injected values to version control.
        *   **State Isolation:** Clarifies that reinstalling a plugin replaces its directory entirely, helping developers troubleshoot stale installations.

---

### 5. Feature Request Trends
The primary feature request trend centers on **persistent, workspace-scoped memory architectures**. Developers are actively seeking plugin frameworks—such as the proposed "Kimi Memory Plus"—that enable the CLI to retain project-specific knowledge, historical decisions, and structural patterns across multiple execution cycles and sessions.

---

### 6. Developer Pain Points
A prominent developer pain point is the **integration gap between experimental plugins and core CLI runtime support**. As highlighted in the compatibility notes of issue #2613, developers utilizing custom memory tools or stdio MCP servers face friction because the host CLI does not automatically recognize or map these tools. This indicates a need for more robust, standard plugin discovery interfaces and clearer guidelines on how experimental tools interface with the host agent environment.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-08-21  

---

### 1. Today's Highlights  
OpenCode released **v1.18.19** with critical fixes and Cloudflare AI Gateway passthrough support. Two **CRITICAL issues** emerged: a race condition causing memory/data loss (#43726) and a high CPU usage spike in newer versions (#30086). Community feedback highlights growing concerns over stability in multi-session workflows and TUI performance.

---

### 2. Releases  
**v1.18.19** introduces:  
- Native **OpenAI and Anthropic passthroughs** for Cloudflare AI Gateway models.  
- **Matched Codex rate limits** to ChatGPT subscription tiers.  

Bugfixes include:  
- Removed unsupported Qwen sampling defaults.  
- Improved install script to respect `$OPENCODE_INSTALL_DIR` (partially addressed in #7675).  

[Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.19)

---

### 3. Hot Issues  

#### #30086 [OPEN] High CPU usage in newer versions  
- **Problem**: CPU spikes make multi-session usage unworkable for some users.  
- **Impact**: 47 comments, 24 👍. A vocal user reports needing ≥4X fewer sessions post-update.  
- [Issue Link](https://github.com/anomalyco/opencode/issues/30086)  

#### #43726 [CLOSED] CRITICAL: `filesystem_move_file` race condition causes data loss  
- **Severity**: Critical (3/10 test failures).  
- **Impact**: Silent file corruption; a top-priority fix.  
- [Issue Link](https://github.com/anomalyco/opencode/issues/43726)  

#### #30158 [OPEN] Terminal button missing in web UI  
- **Regression**: Affects v1.15.12+, confirmed by downgrading to v1.15.11 to resolve.  
- **User base**: Affects all web UI users; 12 comments, 14 👍.  
- [Issue Link](https://github.com/anomalyco/opencode/issues/30158)  

#### #34574 [OPEN] Memory leak in AI SDK Effect runtime  
- **Symptom**: Web server RSS jumps to ~5GB in 20 minutes.  
- **Impact**: Limits scalability for self-hosted ops.  
- [Issue Link](https://github.com/anomalyco/opencode/issues/34574)  

#### #42657 [OPEN] TUI lag with multi-subagent sessions  
- **Problem**: Unusable delays (1-3 sec lag) in TUI with 2–4 concurrent subagents.  
- **Affected platforms**: Warp, Windows Terminal, WezTerm.  
- [Issue Link](https://github.com/anomalyco/opencode/issues/42657)  

#### #40086 [OPEN] Cannot persist sidebar state in UI  
- **Feature request**: Add `ui.sidebar.enabled` config for persistent state.  
- **User base**: Frequent annoyance across desktops.  
- [Issue Link](https://github.com/anomalyco/opencode/issues/40086)  

#### #7675 [CLOSED] Install script ignores `$OPENCODE_INSTALL_DIR`  
- **Bug**: Environment variable ignored per documentation.  
- **Community fix**: PR #43734 partially addresses.  
- [Issue Link](https://github.com/anomalyco/opencode/issues/7675)  

#### #30086 [OPEN] Subagent permissions broken with Enter key  
- **Problem**: Enter key fails to confirm prompts; only Ctrl+Enter works.  
- **Impact**: Deadlocks user workflows.  
- [Issue Link](https://github.com/anomalyco/opencode/issues/27875)  

#### #43054 [OPEN] All models fail with `Forbidden: {"model":"big-pickle"}` except hy3/deepseek  
- **Symptom**: Broad model incompatibility across users.  
- **Community reaction**: 4 comments, 2 👍.  
- [Issue Link](https://github.com/anomalyco/opencode/issues/43054)  

#### #31074 [OPEN] macOS Desktop opens old project paths  
- **Bug**: Path caching bug re-opens stale directories post-move.  
- [Issue Link](https://github.com/anomalyco/opencode/issues/31074)  

---

### 4. Key PR Progress  

#### #43738 [OPEN] `fix(app): speed up cold home navigation`  
- Reduces first-click latency by 62% (from 495 ms to ~86 ms).  
- [PR Link](https://github.com/anomalyco/opencode/pull/43738)  

#### #43637 [CLOSED] `refactor(app): establish session vertical slice`  
- Split 2,000-line session file into modular components for maintainability.  
- [PR Link](https://github.com/anomalyco/opencode/pull/43637)  

#### #43733 [CLOSED] `fix(core): avoid deep cloning session parts`  
- Resolves memory bloat from streaming `structuredClone()` in #35107.  
- [PR Link](https://github.com/anomalyco/opencode/pull/43733)  

#### #43650 [CLOSED] `fix(core): prevent shell eviction loop`  
- Stabilizes shell lifecycle management during session cleanup.  
- [PR Link](https://github.com/anomalyco/opencode/pull/43650)  

#### #37994 [CLOSED] `feat: replace Intelephense with PHPantom`  
- Faster PHP LSP for improved editing experience.  
- [PR Link](https://github.com/anomalyco/opencode/pull/37994)  

#### #43677 [CLOSED] `fix(opencode): send console anthropic api key header`  
- Fixes API key forwarding for Anthropic requests from Console.  
- [PR Link](https://github.com/anomalyco/opencode/pull/43677)  

#### #43681 [OPEN] `fix(core): resolve Bedrock AWS profile credentials`  
- Prioritized for enterprise AWS integrations (Amazon One Medical team).  
- [PR Link](https://github.com/anomalyco/opencode/pull/43681)  

#### #43735 [CLOSED] `fix(client): authenticate PTY websocket connections`  
- Adds secure, ticket-based PTY auth for desktop terminal.  
- [PR Link](https://github.com/anomalyco/opencode/pull/43735)  

#### #43718 [CLOSED] `feat(plugin): expose session selection methods`  
- Plugins can now dynamically switch agents/models.  
- [PR Link](https://github.com/anomalyco/opencode/pull/43718)  

#### #40125 [OPEN] `feat(opencode): Allow per-MCP-server trust configuration`  
- Enables fine-grained MCP connector trust settings (e.g., customCAs).  
- [PR Link](https://github.com/anomalyco/opencode/pull/40125)  

---

### 5. Feature Request Trends  
1. **Context Management Flexibility**: Requests for persistent sidebar state (#40086), bounded attention over unbounded history (#43649), and granular session control.  
2. **Provider/Plugin Enhancements**: Dynamic credential refresh (#43281), per-MCP trust (#40125), and model access controls (#37991).  
3. **TUI/Web Consistency**: Fixing modal/dialog rendering (#43728), alignment issues, and input visibility (#43659).  
4. **Deployment Configurability**: Customizable installation paths (#7675), config reloads (#37979), and file storage options (#43700).  

---

### 6. Developer Pain Points  
- **Performance**: High CPU usage during multi-agent sessions, memory leaks in web servers, and TUI lag.  
- **Stability**: Race conditions causing silent data loss, TUI crashes, and model access errors.  
- **Permissions**: Subagent permissions auto-handling broken in non-interactive runs.  
- **Configurability**: Hardcoded paths, ignored env vars, and non-persistent UI states.  
- **Integration**: Broken API key/header forwarding (Anthropic), AWS profile resolution gaps, and model-specific quirks (e.g., `big-pickle` forbidden errors).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑08‑21**  
*Source: github.com/earendil-works/pi*  

---

### 1. Today's Highlights  
The community is actively discussing Windows usability (‑issue #7547, 36 comments) while engineers push forward TUI refinements (‑PR #8398 adds color/theme styling, ‑PR #8395 fixes large‑diff crashes) and provider‑specific reliability (‑PR #8405 normalizes Kimi‑Coding thinking signatures, ‑issue #6996 tracks Gemini tool‑use failures). No new releases were published in the last 24 h.

### 2. Releases  
*None reported.*

### 3. Hot Issues  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **[Windows] How do you use Pi on windows? What issues are you seeing?** | Central hub for Windows‑specific friction: installation, terminal quirks, and missing out‑of‑box experience. | 36 comments, 1 👍 – developers share work‑arounds and ask for clearer docs. |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto‑compaction never triggers after context grows past 100% until provider overflow** | Compaction only fires when the API rejects a request, potentially wasting tokens and causing costly errors. | 18 comments, 17 👍 – strong consensus that compaction should be proactive per‑turn. |
| [#5023](https://github.com/earendil-works/pi/issues/5023) | **Terminal scrolls to beginning without reason** | Random jumps disrupt reading sessions and make long transcripts hard to follow. | 17 comments, 2 👍 – reproduced across platforms; flagged as a regression. |
| [#6300](https://github.com/earendil-works/pi/issues/6300) | **Windows: Input line is redrawn on every keystroke (each character appears on a new line)** | Makes the TUI unusable on Windows Command Prompt/Terminal; blocks adoption. | 8 comments – users request a fix or workaround. |
| [#8157](https://github.com/earendil-works/pi/issues/8157) | **Migrate grok‑mermaid → lovely‑mermaid** | Improves Mermaid diagram rendering quality and maintainability. | 7 comments, 1 👍 – maintainers acknowledge technical debt and plan migration. |
| [#6996](https://github.com/earendil-works/pi/issues/6996) | **Gemini 3.x models fail during tool use due to missing thought_signature** | Breaks agentic workflows that rely on tool calls with Gemini flash models. | 5 comments – users ask for a back‑port of the signature field. |
| [#8133](https://github.com/earendil-works/pi/issues/8133) | **Per‑model compaction settings** | Allows teams to tune reserve tokens for large‑context vs. cheap models without global side‑effects. | 3 comments, 3 👍 – seen as a natural evolution of issue #6879. |
| [#8344](https://github.com/earendil-works/pi/issues/8344) | **Proposal: per‑tool output expansion in the fullscreen TUI** | Enables granular collapse/expand of tool outputs, improving readability in long sessions. | 4 comments – interest from power‑users; no opposition. |
| [#8409](https://github.com/earendil-works/pi/issues/8409) | **Regression: aborted turns end with stopReason: "error" instead of "aborted"** | Misleading stop reason breaks downstream tooling that expects “aborted” semantics. | 3 comments – flagged as a post‑0.84.2 regression needing a quick fix. |
| [#8370](https://github.com/earendil-works/pi/issues/8370) | **Add fullscreenWheelScrollLines setting for fullscreen TUI scroll rate** | Lets users control mouse‑wheel scrolling speed for ergonomic preferences. | 2 comments – straightforward QoL improvement. |

### 4. Key PR Progress  

| # | PR | Summary |
|---|----|---------|
| [#8398](https://github.com/earendil-works/pi/pull/8398) | **feat: add color values and theme styling** – Refactors TUI to expose raw color values, enabling programmatic theming and future non‑terminal UIs while preserving backward compatibility. |
| [#8302](https://github.com/earendil-works/pi/pull/8302) | **feat(ai): amazon bedrock mantle** – Adds support for Amazon Bedrock’s new Mantle API surface (GPT‑5.x models) to close feature gap #5363. |
| [#8118](https://github.com/earendil-works/pi/pull/8118) | **feat(ai): add requiresNonNullAssistantContent compat flag** – Forces empty string (`""`) for assistant messages when gateways reject `null` content, avoiding replay errors. |
| [#8405](https://github.com/earendil-works/pi/pull/8405) | **FD‑2120: Normalize kimi‑coding thinking signatures to base64url** – Fixes 400 errors on second+ turns by ensuring signatures are base64url‑encoded. |
| [#8407](https://github.com/earendil-works/pi/pull/8407) | **fix(tui): preserve logical lines when copying soft‑wrapped text** – Stops conversion of visual line wraps into hard newlines, keeping paragraphs/URLs intact. |
| [#8395](https://github.com/earendil-works/pi/pull/8395) | **fix(coding-agent): prevent TUI crash on large diffs by avoiding spread in push** – Replaces `push(...contentLines)` with a loop to avoid V8 call‑stack overflow on >14 MB diffs. |
| [#8363](https://github.com/earendil-works/pi/pull/8363) | **fix(tui): prevent wrapped table link color leaks** – Resets link colors before table padding/borders, stops color bleed into surrounding text. |
| [#8416](https://github.com/earendil-works/pi/pull/8416) | **fix: hold triggerTurn‑false custom messages until the tool batch ends** – Defers custom messages with `triggerTurn:false` until after the tool batch, preventing provider‑side validation errors. |
| [#8399](https://github.com/earendil-works/pi/pull/8399) | **feat(settings‑selector): show & make default searchable for model and thinking** – Adds a visible “Default” label and makes it searchable via `/model` and `/thinking`. |
| [#5268](https://github.com/earendil-works/pi/pull/5268) | **fix(tui): render the hardware cursor by default so the prompt cursor hollows on blur** – Restores proper cursor behavior on window focus loss (originally fixed #3896). |

### 5. Feature Request Trends  
- **Windows first‑class support** – clear docs, installation guides, and fixes for terminal/input redraw issues.  
- **Alias ergonomics** – `/exit`, `/bye`, `/config` as shortcuts for `/quit`/`/settings` to match other CLIs.  
- **Per‑model/provider tunability** – compaction reserves, thinking levels, and transport options (WebSocket) configurable per model.  
- **TUI usability enhancements** – configurable scroll speed, selective output expansion, reliable copy/paste, and stable cursor/hardware rendering.  
- **Provider‑specific reliability** – correct handling of Gemini `thought_signature`, Kimi‑Coding base64url signatures, and Anthropic scoped‑key headers.  
- **Session & caching improvements** – proactive compaction, fork‑session prompt‑cache reuse, and accurate stop‑reason reporting.  

### 6. Developer Pain Points  
- **Windows fragmentation** – multiple ways to run Pi (WSL, native, CMD, Windows Terminal) lead to inconsistent bugs and unclear documentation.  
- **Unexpected UI behavior** – terminal auto‑scroll, TUI crashes on large diffs, and color/rendering glitches erode trust in long sessions.  
- **Configuration friction** – lack of per‑model settings forces users to choose between overly conservative or risky global compaction/threshold values.  
- **Provider quirks** – missing or mis‑encoded fields (signatures, thought signatures) cause silent failures that only surface after costly API calls.  
- **Command‑line muscle memory** – frequent accidental submission of `/exit` or `/bye` as chat messages wastes tokens and clutters transcripts.  
- **Caching inefficiency** – forked sessions lose intra‑session prompt cache, leading to redundant token usage and slower responses.  

*All links point to the exact GitHub items referenced above.*  

---  
*Generated for the Pi developer community – stay tuned for next week’s digest.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑08‑21**

---

### 1. Today's Highlights
- **v0.21.15** shipped with Web Shell gains: file‑attachment insertion via composer/@ selection, smoother streaming, and instant sidebar sync.  
- Provider‑aware reasoning controls (DeepSeek V4, GLM 5.2, Kimi) landed, letting toggles match each model’s capabilities.  
- Cross‑session messaging prototype (UNIX‑domain socket) and a review “persistently‑critical” convergence advisory are now in‑flight, addressing long‑standing session‑isolation and review‑loop concerns.

---

### 2. Releases
| Version | Key Changes (as highlighted) |
|---------|------------------------------|
| **v0.21.15** | • Web Shell: attach files through composer or @‑selection; improved streaming performance; immediate sidebar synchronization.<br>• Approval & Ask‑User dialogs rendered as in‑flow sheets.<br>• Fixed background‑agent false‑failure case. |
| **v0.21.11‑nightly.20260820.b414f135fa** | Nightly build of the same baseline; includes the above Web Shell tweaks and early reasoning‑control work. |

*Links:* [v0.21.15](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.15) • [nightly v0.21.11‑20260820](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260820.b414f135fa)

---

### 3. Hot Issues (10 picked)

| # | Title & Link | Why it matters |
|---|--------------|----------------|
| **[#9278](https://github.com/QwenLM/qwen-code/issues/9278)** | Design: `/review` publish‑time convergence advisory – telemetry, diagnosis, operator‑owned posting surfaces | High‑comment design thread (8 comments) shaping how the review loop detects and mitigates runaway feedback cycles. |
| **[#8382](https://github.com/QwenLM/qwen-code/issues/8382)** | Duplicate provider tool call id | Persistent bug (7 comments) causing tool‑call failures; impacts reliability of agent‑driven edits. |
| **[#8724](https://github.com/QwenLM/qwen-code/issues/8724)** | Cross‑session messaging: let Qwen Code sessions on the same machine message each other | Feature request (7 comments) enabling cooperative agents; foundational for multi‑agent workflows. |
| **[#9309](https://github.com/QwenLM/qwen-code/issues/9309)** | Somewhere in compression seems incorrect | Token‑management regression (6 comments) where `/compress‑fast` + `/compress` over‑compresses context, threatening correctness. |
| **[#9485](https://github.com/QwenLM/qwen-code/issues/9485)** | Web Shell copy buttons fail with “Clipboard API is not available” over HTTP | UI blocker (5 comments) for remote‑daemon usage; blocks a basic workflow when served via plain HTTP. |
| **[#2128](https://github.com/QwenLM/qwen-code/issues/2128)** | Memory grows unboundedly during long sessions — UI History accumulates without limit | Long‑standing performance issue (5 comments) causing OOM in extended sessions; top‑priority for stability. |
| **[#9556](https://github.com/QwenLM/qwen-code/issues/9556)** | review: decide whether the pipeline should keep granting code execution as the invoking user | Security‑focused discussion (5 comments) on least‑privilege execution in review pipelines. |
| **[#9586](https://github.com/QwenLM/qwen-code/issues/9586)** | bug(acp): duplicate tool‑call breaker leaves persisted call without terminal result | Bug (4 comments) where repeated tool‑call IDs lose results, breaking reproducibility of resumed sessions. |
| **[#9597](https://github.com/QwenLM/qwen-code/issues/9597)** | Hierarchical memory loads the same QWEN.md twice through a symlink alias | Resource‑waste bug (3 comments) that can bloat memory and cause confusing state when workspaces use symlinks. |
| **[#9571](https://github.com/QwenLM/qwen-code/issues/9571)** | Avoid confirmation boxes being selected by default | UX polish (3 comments) preventing accidental confirmation when typing in the composer. |

---

### 4. Key PR Progress (10 picked)

| # | Title & Link | Summary |
|---|--------------|---------|
| **[#9590](https://github.com/QwenLM/qwen-code/pull/9590)** | feat: support provider‑aware reasoning controls | Adds toggles for DeepSeek V4, GLM 5.2, Kimi; matches each provider’s documented reasoning modes. |
| **[#9576](https://github.com/QwenLM/qwen-code/pull/9576)** | feat(core): accept cross‑session messages behind an inbound gate | Implements UNIX‑domain socket broker for inter‑session communication (ties to #8724). |
| **[#9609](https://github.com/QwenLM/qwen-code/pull/9609)** | fix(web‑shell): don’t steal approval focus while the user is typing | Prevents tool‑approval dialog from hijacking focus during composer input (addresses #9571). |
| **[#9526](https://github.com/QwenLM/qwen-code/pull/9526)** | feat(review): add the persistently‑critical convergence advisory (land‑with‑residual‑risk) | Emits advisory when review loop stalls on Criticals, providing tele‑data for operators. |
| **[#9332](https://github.com/QwenLM/qwen-code/pull/9332)** | feat(review): fold the one‑hop import widening into `fetch-pr --since` | Simplifies review scope calculation by deriving incremental diff from PR itself. |
| **[#8368](https://github.com/QwenLM/qwen-code/pull/8368)** | feat(auth): add Kimi and Xiaomi MiMo providers | Expands `/auth` with Kimi (China/Intl API keys) and Xiaomi MiMo presets. |
| **[#9144](https://github.com/QwenLM/qwen-code/pull/9144)** | refactor(cli): keep acp‑integration off serve internals | Moves ACP‑specific code out of `serve/` and adds ESLint guard to enforce layering. |
| **[#9577](https://github.com/QwenLM/qwen-code/pull/9577)** | chore(ci): Disable install scripts in release CI and guard security‑checks workflow | Hardens release pipeline by disabling npm lifecycle scripts and protecting PAT usage. |
| **[#9273](https://github.com/QwenLM/qwen-code/pull/9273)** | feat(review): capture‑tui — rendering claims get pixels, not prose | Allows reviewers to generate ANSI/PNG evidence from a private tmux session, improving auditability. |
| **[#9466](https://github.com/QwenLM/qwen-code/pull/9466)** | refactor: anchor rewind mapping to stable prompt identity | Makes prompt identity the single source of truth for user turns, model history, ACP re

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here's a thinking process:

1.  **Understand User Request:**
   - Role: Technical analyst focused on AI developer tools
   - Task: Generate a "DeepSeek TUI community digest for 2026-08-21" based on provided GitHub data
   - Data source: github.com/Hmbown/DeepSeek-TUI (labeled as CodeWhale in the data)
   - Output structure: 6 specific sections with specific content requirements
   - Style: concise, professional, suited for technical developers
   - Must include GitHub links for each item

2.  **Analyze the Data:**
   - I need to parse the provided GitHub data snapshot
   - It includes: Latest Releases (last 24h), Latest Issues (updated in last 24h, Total: 22 items), Latest Pull Requests (updated in last 24h, Total: 10 items)
   - Note: The repo is actually "CodeWhale" but the user says "DeepSeek TUI". The data mentions `deepseek-tui` is deprecated, and the current product is `codewhale`. I need to handle this branding carefully but follow the user's request for "DeepSeek TUI community digest". I'll reference the data as CodeWhale/DeepSeek-TUI but focus on the content.

   Let's extract key points:

   **Releases (last 24h):** 
   - v0.9.10: description mentions Codewhale, deprecation of `deepseek-tui`, users from v0.8.x legacy `deepseek`/...
   - This is the main release info.

   **Issues (22 total, updated in last 24h):**
   I'll go through them and pick 10 noteworthy ones. Need to check dates, status, popularity (👍), and relevance.
   - #998 [CLOSED] enhancement, v0.9.4] 文案展示不全 - Chinese i18n, tooltip on hover, 11 comments, 1 👍
   - #5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) - Created 2026-08-10, updated 2026-08-20, 10 comments, 0 👍
   - #5337 [CLOSED] Web: finish the #4934 dictionary spine - retire every isZh branch and inline { en, zh } module - Created 2026-08-12, updated 2026-08-20, 6 comments, 0 👍
   - #4683 [CLOSED] [bug, enhancement, needs-info] Wrong deepseek completions url - Created 2026-07-22, updated 2026-08-20, 4 comments, 0 👍
   - #5508 [CLOSED] [enhancement] feat: continuous loop - Created 2026-08-18, updated 2026-08-20, 3 comments, 0 👍
   - #5355 [CLOSED] [bug] v0.9.8 Known issues: parallel-load and config-fixture flakes - Created 2026-08-13, updated 2026-08-20, 3 comments, 0 👍
   - #5518 [CLOSED] [bug] Emergency compaction triggers around ~85K--105K tokens on DeepSeek V4 despite a 327,680-token route context - Created 2026-08-19, updated 2026-08-20, 3 comments, 0 👍
   - #4070 [OPEN] [enhancement, tools, v0.9.3] feat: standalone read_lints tool for on-demand diagnostics - Created 2026-07-07, updated 2026-08-20, 2 comments, 0 👍
   - #5345 [CLOSED] [enhancement] [FR] 增加多行模式或者是允许自定义"发送"快捷键 - Created 2026-08-13, updated 2026-08-20, 2 comments, 0 👍
   - #5512 [CLOSED] [bug] Emergency compaction triggers... wait, #5512 is [CLOSED] [bug] header status indicator (cw/whale/dots) never renders since 0.9.7 - Created 2026-08-18, updated 2026-08-20, 2 comments, 0 👍
   - #5023 [CLOSED] [bug, tui, ux, reliability] IME Candidate Window Jumps / Unstable Position During Input - Created 2026-08-01, updated 2026-08-20, 2 comments, 0 👍
   - #4170 [CLOSED] [enhancement, tools, reliability] v0.9.3 architecture D-6: add MCP capability metadata - Created 2026-07-07, updated 2026-08-20, 2 comments, 0 👍
   - #3955 [CLOSED] [enhancement, cleanup, tui, security, ux, reliability, v0.9.3] v0.9.3 Refactor: separate approval risk policy from approval/elevation views - Created 2026-07-02, updated 2026-08-20, 2 comments, 0 👍
   - #1854 [CLOSED] [enhancement, v0.9.3] Windows: default launch should use Windows Terminal (.bat), not raw .exe - Created 2026-05-21, updated 2026-08-20, 2 comments, 0 👍
   - #1682 [CLOSED] [enhancement, v0.9.3] 执行结果输出和思考预览改善 - Created 2026-05-15, updated 2026-08-20, 2 comments, 0 👍
   - #5526 [OPEN] Deprecated shell completion - Created 2026-08-20, updated 2026-08-20, 1 comment, 0 👍
   - #5482 [OPEN] [documentation] EPIC(docs): review, partially restructure, and fully localize documentation to Chinese - Created 2026-08-17, updated 2026-08-20, 1 comment, 0 👍
   - #5516 [CLOSED] [bug] HTTP 400 max_tokens=384000 exceeds model limit after upgrading to v0.9.9 (no manual config) - Created 2026-08-19, updated 2026-08-20, 1 comment, 0 👍
   - #5497 [CLOSED] fix(tasks): terminalize stuck durable executions and bound event growth - Created 2026-08-18, updated 2026-08-20, 1 comment, 0 👍
   - #5442 [CLOSED] Product: discoverability debt — advanced commands hidden at the palette root, config-only capabilities, welcome surface teaches governance not capability - Created 2026-08-16, updated 2026-08-20, 1 comment, 0 👍
   - #5522 [OPEN] [bug, tui, ux] v0.9.10: make first run progressive instead of front-loading configuration - Created 2026-08-20, updated 2026-08-20, 0 comments, 0 👍
   - #5496 [CLOSED] ci: bound release-candidate and artifact workflow jobs - Created 2026-08-18, updated 2026-08-20, 0 comments, 0 👍
   - #5513 [CLOSED] release: Codewhale v0.9.10 — retention, identity, and durable approvals - Created 2026-08-19, updated 2026-20, 0 comments, 0 👍
   - #5509 [CLOSED] fix(tui): restore /title as an independent terminal window title - Created 2026-08-18, updated 2026-08-20, 0 comments, 0 👍
   - #5514 [CLOSED] refactor(tui): extract stream processing from turn loop - Created 2026-08-19, updated 2026-08-20, 0 comments, 0 👍
   - #5517 [CLOSED] feat(web): move docs/constitution and docs/runtime-api onto the dictionary spine - Created 2026-08-19, updated 2026-08-20, 0 comments, 0 👍

   I need to pick 10 noteworthy issues. I'll select based on recency, popularity, relevance to AI developer tools, and mix of open/closed. Let's pick:
   1. #5526 - Deprecated shell completion (open, recent, ux friction)
   2. #5522 - First run progressive config (open, user experience, psychological cost)
   3. #5518 - Emergency compaction on DeepSeek V4 (bug, context window, tokens)
   4. #5516 - HTTP 400 max_tokens exceeds model limit (bug, upgrade issue)
   5. #5482 - Documentation localization to Chinese (docs, growing Chinese user base)
   6. #5316 - EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) (epic, structure)
   7. #5337 - Web dictionary spine, retire isZh branches (i18n, cleanup)
   8. #5023 - IME Candidate Window Jumps (tui, ux, input stability)
   9. #4683 - Wrong DeepSeek completions URL (bug, network error)
   10. #5512 - Header status indicator never renders since 0.9.7 (bug, regression)

   Check if any have high 👍 or comments. The data shows 👍 counts mostly 0-11. I'll note the engagement.

   **Pull Requests (10 total, updated in last 24h):**
   All seem to be from 2026-08-18 to 2026-08-20. I'll pick 10 important ones, but there are exactly 10 listed. I'll go through each:
   - #5524 [OPEN] feat(tui): add multi-file read_lints operation
   - #5525 [OPEN] refactor(tui): adopt command shapes in utility group (FEAT-018)
   - #5523 [OPEN] refactor(tui): extract tool call stages from turn loop
   - #5520 [CLOSED] feat(web): move docs/sandbox and docs/web onto the dictionary spine (#5337)
   - #5521 [CLOSED] chore(tui): drop a single-argument concat!
   - #5515 [CLOSED] fix(tui): forward MCP image results as typed content
   - #5513 [CLOSED] release: Codewhale v0.9.10 — retention, identity, and durable approvals
   - #5509 [CLOSED] fix(tui): restore /title as an independent terminal window title
   - #5514 [CLOSED] refactor(tui): extract stream processing from turn loop
   - #5517 [CLOSED] feat(web): move docs/constitution and docs/runtime-api onto the dictionary spine (#5337)

   I'll pick 10, but there are exactly 10 listed. I'll describe them concisely.

   **Feature Request Trends:** I need to distill most-requested feature directions from all Issues. Looking at the issues, trends include: i18n/localization (Chinese docs, dictionary spine), TUI UX improvements (multi-line input, send shortcuts, IME stability), crate decomposition/refactoring, shell completions, first-run experience, token management, bug fixes for compaction/context windows, MCP integration, discoverability.

   **Developer Pain Points:** Recurring frustrations: first-run configuration overload, IME input instability, deprecated shell completions, token limit errors after upgrades, discoverability of advanced commands, localization barriers, regression in status indicators, parallel-load flakes, compaction triggers.

3.  **Structure the Output:**
   I need to follow the exact sections requested:
   1. Today's Highlights - 2-3 sentences summarizing most important updates
   2. Releases - summarize changes if new versions exist, omit if none (but v0.9.10 was released, so include)
   3. Hot Issues - pick 10, explain why they matter and community reaction, include GitHub links
   4. Key PR Progress - pick 10, describe features/fixes, include links
   5. Feature Request Trends - distill most-requested feature directions from all Issues
   6. Developer Pain Points - summarize recurring developer frustrations or high-frequency requests

   Style: concise, professional, technical developers. Include GitHub links for each item.

   I need to make sure links are correct format. The data gives URLs like `Hmbown/CodeWhale Issue #998`. I'll format as `https://github.com/Hmbown/CodeWhale/issues/998` or similar. The user said `github.com/Hmbown/DeepSeek-TUI` but data is CodeWhale. I'll use the repo path consistent with data: `https://github.com/Hmbown/CodeWhale` or keep as `Hmbown/CodeWhale`. I'll use standard GitHub issue/PR links.

   Let's draft each section carefully.

   **Today's Highlights:** 
   CodeWhale (DeepSeek TUI) released v0.9.10 with retention, identity, and durable approvals hardening, while addressing a wave of open issues around IME stability, shell completions, and first-run UX. The team also pushed 10 PRs focused on TUI refactoring, multi-file diagnostics, and dictionary spine i18n completion, signaling a push toward modularity and polish.

   **Releases:** 
   - v0.9.10: Release hardening focused on retention, identity, and durable approvals. Deprecates the legacy `deepseek-tui` npm package. Users on v0.8.x legacy `deepseek`/`deepseek-tui` paths are directed to migrate. Full release notes carry 76 commits from the `0398b4f545a8e0f45c86d3f54be5cb6c82b962c9` lane. [Link](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.10) or note from PR #5513.

   **Hot Issues:** I'll list 10 with brief why it matters and community reaction (comments/👍). I'll format each as `- **#XXX** ... [Link]`. I need to pick 10 from the 22. I'll select the most significant based on recency, impact, and engagement.

   Let's pick:
   1. #5526 - Deprecated shell completion (open, ux friction for pwsh users)
   2. #5522 - First run progressive config (open, psychological cost, onboarding)
   3. #5518 - Emergency compaction on DeepSeek V4 (bug, token context mismatch)
   4. #5516 - HTTP 400 max_tokens exceeds model limit (bug, upgrade breakage)
   5. #5482 - Documentation localization to Chinese (open, growing Chinese user base barrier)
   6. #5316 - EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) (open, structural roadmap)
   7. #5337 - Web dictionary spine retire isZh branches (closed, i18n cleanup completed)
   8. #5023 - IME Candidate Window Jumps (closed, TUI input stability)
   9. #4683 - Wrong DeepSeek completions URL (closed, network error reliability)
   10. #5512 - Header status indicator never renders since 0.9.7 (closed, regression)

   Wait, #5337 and #5023 are closed, but others mix. I'll include a mix. I'll check comments/👍. #998 has 11 comments, 1 👍 but is about Chinese display. I might include it instead of one. But I'll stick to the most relevant to AI developer tools.

   Actually, let's review the user request: "Pick 10 noteworthy Issues, explain why they matter and community reaction". I'll pick 10 that show

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*