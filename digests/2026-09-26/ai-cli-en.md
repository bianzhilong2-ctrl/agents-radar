# AI CLI Tools Community Digest 2026-09-26

> Generated: 2026-09-26 02:36 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-09-26)

---

## 1. Ecosystem Overview

The AI CLI coding assistant landscape in September 2026 is characterized by rapid maturation across multiple fronts: major vendors (Anthropic, OpenAI, Google, GitHub) and open-source collectives (Moonshot, Anomaly, Badlogic, Qwen, DeepSeek) are all shipping terminal-based agents with increasingly sophisticated capabilities. The community discourse has shifted decisively from feature addition toward **stability, security, and extensibility** — with atomic file operations, trust gates, session persistence, and extension system modernization dominating the agenda. The convergence of TUI robustness, MCP integration, and managed multi-agent architectures signals that these tools are transitioning from experimental prototypes to production-grade developer infrastructure.

---

## 2. Activity Comparison

| Tool | Issues Discussed | PR Progress | Release Status | Activity Level |
|------|:---:|:---:|------|:---:|
| **Gemini CLI** | 10 | 10 | Nightly v0.63.0 | 🟢 High |
| **GitHub Copilot CLI** | 10 | 0 (24h) | v1.0.89-4 | 🟡 Medium |
| **OpenCode** | 10 | 10 | None (stable) | 🟢 High |
| **Pi** | 10 | 10 | None (stable) | 🟢 High |
| **Qwen Code** | 10 | 10 | v0.24.6 | 🟢 High |
| **DeepSeek TUI (Codewhale)** | 10 | 5+ (partial) | Pre-v0.10.0 sprint | 🟢 High |
| **Kimi Code CLI** | 0 | 0 | None | ⚪ Inactive |
| **Claude Code** | — | — | — | ⚪ Limited data | |
| **OpenAI Codex** | — | — | — | ⚪ Limited data |

**Note:** Claude Code and OpenAI Codex digests contained only "safe" labels with no detailed issue/PR data, limiting quantitative comparison. Kimi Code CLI reported zero activity in the observation window.

---

## 3. Shared Feature Directions

Several requirements appear across **3+ tool communities**, indicating industry-wide priorities:

### 🔒 Session Persistence & State Management
- **Gemini CLI**: Atomic state writes with temp+fsync+rename (#29402), session context poisoning fix (#29397)
- **OpenCode**: Retain session history on project path change (#29703), session picker at startup (#36134)
- **Qwen Code**: Session deletion workflows (#12619), managed agent dual-path architecture (#12380)
- **Pi**: Session persistence during streaming teardown failures (#10048)

**→ Need:** Durable, relocatable session state that survives directory moves, interruptions, and reconnections.

### 🧩 Extension & MCP Integration
- **Pi**: TypeScript + Cordis extension host (#10040), MCP OAuth error mapping (#10051)
- **OpenCode**: Serialize MCP OAuth refreshes across processes (#50994)
- **DeepSeek TUI**: TypeScript + Cordis extension host phase 1 (#6600), MCP calls through approval gates (#6583)
- **Gemini CLI**: Extension loading resilience (#29387), Google search tool in autonomous agent (#29500)

**→ Need:** Modular, language-agnostic extension systems with proper authorization and OAuth handling.

### 🛡️ Security, Trust & Provenance
- **DeepSeek TUI**: Credential masking at rest (#6601), provenance on instructions/memory (#6585), decision gates (#6603)
- **Pi**: Trust gates, fail-closed grants, honest approval timeouts
- **Gemini CLI**: Auto Memory inbox validation (#26523), deterministic secret redaction concerns
- **Qwen Code**: Hook permission races (#12683), sandbox integrity

**→ Need:** Cryptographic provenance for agent-generated content, credential protection, and auditable decision trails.

### ⚡ Agent Reliability & Stability
- **Gemini CLI**: Generalist agent hangs (#21409), subagent recovery after MAX_TURNS (#22323)
- **Pi**: TUI crash on stdout disconnect (#10056), provider hang after completion (#9840)
- **OpenCode**: Repeated tool calls without resolution (#28596), agent manager pipeline (#51426)
- **DeepSeek TUI**: CPU spin-loop from subagent store contention (#6573)

**→ Need:** Graceful degradation, timeout enforcement, and recovery mechanisms for hung or misbehaving agents.

---

## 4. Differentiation Analysis

| Dimension | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-----------|-------------------|----------|-----|-----------|--------------|
| **Primary Focus** | Agent behavior control & reliability | Enterprise workflow & plugin ecosystem | Desktop UX & workspace persistence | TUI robustness & extensibility | Multi-workspace & managed agents | Trust-first architecture |
| **Target User** | Developer-focused, research-oriented | Enterprise teams, GitHub ecosystem | Desktop-first developers, cross-platform | Terminal purists, multi-provider users | Enterprise/managed environments, Java SDK | Security-conscious developers |
| **Technical Approach** | Atomic file ops, scheduler-layer enforcement | Auto routing tiers, direct plugin control | Rust core with TUI plugins, Rust/TypeScript hybrid | Rust core, TypeScript extension pivot | Daemon architecture, multi-root workspace | Rust authoritative core + TypeScript extensibility |
| **Distinctive Feature** | User directive enforcement at scheduler layer | Mission Control dashboard, auto routing | Usage tracking, `/usage` integration | Thinking display modes, virtual models | Java Hosted Harness, remote SSH | "Whose word wins" provenance, decision gates |
| **Maturity Signal** | Active nightly builds, rapid iteration | Stable v1.x, enterprise-grade | Desktop polish phase, plugin ecosystem | Established, refining TUI | Rapid feature expansion | Pre-v0.10.0 sprint, architectural pivot |

### Key Differentiators:
- **Gemini CLI** uniquely enforces user directives at the **scheduler layer** (#29394), blocking mutating tools when users issue "wait" commands — a novel approach to agent alignment.
- **GitHub Copilot CLI** is the only tool with a **visual dashboard** (Mission Control) and enterprise-managed custom model support, reflecting its GitHub-native positioning.
- **DeepSeek TUI** is the only project pursuing a **trust-first architectural pivot**, moving extensibility to TypeScript while keeping the Rust core authoritative for approval and trust gates.
- **Pi** offers the broadest **provider flexibility**, supporting custom themes with truecolor, virtual models, and provider-agnostic architecture.
- **Qwen Code** uniquely supports **multi-root workspace daemon operations** and Java SDK integration, targeting larger codebase management.

---

## 5. Community Momentum & Maturity

### High-Momentum Projects (Rapid Iteration)
- **DeepSeek TUI**: In a pre-v0.10.0 sprint with heavy structural refactoring (2,650+ lines dead code deleted, runtime/TUI crate split planned). The TypeScript extension host pivot is the most architecturally significant move in the ecosystem this cycle.
- **Gemini CLI**: Nightly release cadence, 10 issues and 10 PRs in a single day. The focus on atomic operations and agent behavior enforcement suggests production-readiness engineering.
- **Qwen Code**: Shipping multiple variants (CLI, desktop, SDK) simultaneously with active PR pipeline. Multi-root workspace and managed agent features indicate enterprise ambitions.

### Established & Stable
- **GitHub Copilot CLI**: v1.0.89-4 represents mature incremental development. Zero PR updates in 24h suggests stabilization phase, though critical auth bugs (#4929) remain open.
- **Pi**: Consistent PR flow with merged fixes for TUI reliability. Established extension ecosystem with MCP integration maturing.

### Emerging / Quiet
- **OpenCode**: No new releases but active PR pipeline (10 open PRs). Desktop-focused development suggests a transition phase from TUI to desktop.
- **Kimi Code CLI**: Complete inactivity in observation window — potential strategic pause or reduced community engagement.
- **Claude Code / OpenAI Codex**: Limited public digest data prevents assessment, though both are "safe" and presumably stable.

---

## 6. Trend Signals

### Industry-Wide Signals with High Reference Value

| Signal | Evidence | Implication |
|--------|----------|-------------|
| **Extension systems migrating to TypeScript** | DeepSeek TUI adopts Cordis (#6600), Pi uses TypeScript plugins | Rust/Go cores remain for safety-critical paths; TypeScript becomes the lingua franca for extensibility |
| **Agent reliability > Feature velocity** | 7+ tools addressing hangs, crashes, race conditions simultaneously | Market is maturing past "cool features" to "won't lose my work" |
| **Trust & provenance as first-class concern** | DeepSeek TUI "Whose word wins" (#6585), credential masking (#6601), decision gates (#6603) | Prompt injection and instruction overwrite are now recognized systemic risks |
| **Token efficiency becoming competitive differentiator** | Copilot CLI system prompt reduction (#2627), Gemini CLI AST-aware reads (#22745) | Context window costs are driving architectural decisions |
| **Managed/enterprise agent architectures emerging** | Qwen Code dual-path architecture (#12380), Copilot enterprise custom models (#4960) | Multi-agent orchestration and workspace binding are next frontier |
| **Cross-platform parity still incomplete** | Windows/macOS/SSH issues across all tools (Qwen EPIPE, Copilot scrollbar, Pi truecolor) | Platform-specific edge cases remain costly to solve |

### Strategic Takeaways for Developers & Decision-Makers

1. **If you need production-grade stability**: Gemini CLI's atomic file operations and scheduler-layer enforcement represent the most mature reliability engineering in the ecosystem.
2. **If you need enterprise integration**: GitHub Copilot CLI's dashboard and custom model support are unmatched, though auth stability remains a risk.
3. **If you need extensibility**: DeepSeek TUI's TypeScript + Cordis approach and Pi's provider-agnostic architecture offer the most flexible plugin ecosystems.
4. **If security is paramount**: DeepSeek TUI's trust-first architecture (provenance, decision gates, credential masking) sets a new benchmark.
5. **If you manage multiple workspaces**: Qwen Code's multi-root daemon and workspace-bound sessions are purpose-built for this use case.

---

**Report prepared from 2026-09-26 community digests. Claude Code and OpenAI Codex lacked detailed digest content; Kimi Code CLI reported zero activity. All data points are sourced from GitHub issue and PR metadata.**

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills – Community Highlights (as of 2026‑09‑26)**  

---

### 1. Top Skills Ranking  
| Rank | PR (link) | Skill name / short description | Key discussion points | Current status |
|------|-----------|--------------------------------|-----------------------|----------------|
| **1** | [#1298](https://github.com/anthropics/skills/pull/1298) | **fix(skill‑creator)** – isolate trigger evaluations, improve Windows pipe `select()` handling and robust runtime‑failure detection. | • Addresses false‑miss triggers and runtime crashes that undermine skill reliability.<br>• Tied to security‑focused Issue #492 (43 comments) → high community attention. | **OPEN** |
| **2** | [#1742](https://github.com/anthropics/skills/pull/1742) | **fix(mcp‑builder)** – support `mcp>=2` `streamable_http_client` rename and custom HTTP headers. | • Fixes breaking change in MCP 2.0+ and enables proper header configuration.<br>• Related to Issue #1390 (4 comments) indicating ongoing MCP‑related friction. | **OPEN** |
| **3** | [#822](https://github.com/anthropics/skills/pull/822) | **feat: AWT (AI Watch Tester)** – AI‑powered end‑to‑end testing skill (zero‑code test generation, browser control). | • Strong demand for automated testing; AWT brings vision & browser control to Claude.<br>• Issue #228 (16 comments) shows appetite for native sharing & testing tools. | **OPEN** |
| **4** | [#1245](https://github.com/anthropics/skills/pull/1245) | **Add notion‑spec‑to‑implementation & quantitative‑resume‑auditor** – converts product specs into actionable Notion tasks and audits resumes with metrics. | • Addresses need for rapid translation of specs into implementation plans.<br>• Issue #1329 (9 comments) reflects interest in compact, reusable skill concepts. | **OPEN** |
| **5** | [#1792](https://github.com/anthropics/skills/pull/1792) | **fix(docx)** – treat LibreOffice time‑outs as errors and verify final DOCX contains no revision marks. | • Improves reliability of the DOCX skill; reduces silent failures.<br>• Community concerns about docx corruption (Issue #541) underline importance. | **OPEN** |
| **6** | [#1703](https://github.com/anthropics/skills/pull/1703) | **Add md2video‑audio** – zero‑cost conversion of Markdown → MP4 video with realistic voice‑over. | • Novel media‑generation capability; aligns with growing demand for rich content output.<br>• No major discussion yet, but high novelty. | **OPEN** |

*All listed PRs are still **OPEN** (no merge yet).*

---

### 2. Community Demand Trends (derived from Issues)

- **Trust & Security Boundaries** – Skills published under the `anthropic/` namespace are being abused for impersonation (Issue #492).  
- **Organisation‑wide Skill Sharing** – Users request a native library or shareable links to avoid manual uploads (Issue #228).  
- **Reliable Skill Triggering** – `run_eval.py` shows a 0 % trigger rate when `-p never` is used, indicating broken command‑file handling (Issue #556).  
- **Robust Error Handling & Resource Management** – Numerous fixes target time‑outs, missing relational files, and token‑window exhaustion (Issues #1487, #1792, #1390).  
- **AI‑Powered Testing & Validation** – Growing appetite for automated E2E testing (AWT) and quality‑analyzer skills (Issue #83).  
- **Documentation & Quality Control** – Skills for typography, ODT/ODF handling, and doc‑quality checks are actively requested (Issues #514, #486, #189).  
- **MCP Integration & Evaluation** – MCP‑builder evaluation scripts produce fabricated errors, hindering real‑world testing (Issue #1390).  
- **Cross‑Platform & Context‑Window Efficiency** – Windows‑specific pipe failures, large tool‑call payloads, and duplicate skill installations threaten context‑window limits (Issues #189, #1487).  

*Overall, the community is most concentrated on **secure, reliable skill execution with better trigger handling, error reporting, and cross‑platform compatibility**, while also demanding easier sharing, testing, and documentation‑centric capabilities.*

---

### 3. High‑Potential Pending Skills (active‑comment PRs not yet merged)

| PR | Skill (short) | Why it’s high‑potential |
|----|----------------|------------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **fix(skill‑creator)** – isolate trigger evals, improve Windows pipe handling, handle runtime failures. | Directly tackles security & reliability concerns that sparked Issue #492; recent activity (updated 2026‑09‑16). |
| [#1742](https://github.com/anthropics/skills/pull/1742) | **fix(mcp‑builder)** – support MCP ≥ 2 `streamable_http_client` rename & custom headers. | Aligns the Skills ecosystem with the latest MCP API changes; ongoing discussion in Issue #1390. |
| [#1792](https://github.com/anthropics/skills/pull/1792) | **fix(docx)** – report LibreOffice time‑outs as errors & verify output integrity. | Improves DOCX skill robustness; addresses frequent user‑reported corruption issues. |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **Add notion‑spec‑to‑implementation & quantitative‑resume‑auditor** | Provides high‑value automation for product specs and recruitment workflows; recent update 2026‑09‑24. |
| [#723](https://github.com/anthropics/skills/pull/723) | **feat: testing‑patterns** – comprehensive testing skill covering philosophy, unit, and component testing. | Growing demand for systematic testing; skill is fully defined and awaiting review. |
| [#525](https://github.com/anthropics/skills/pull/525) | **Add pyxel skill** – retro‑game creation, debugging and verification in Python. | Niche but enthusiastic community interest in game‑dev tools; PR is open and recently updated. |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **Add md2video‑audio** – zero‑cost Markdown → MP4 video with voice‑over. | Innovative media‑generation capability; no major blockers identified yet. |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **feat(skills): proofcore‑contract‑auditor** – automated Solidity/Rust smart‑contract analysis & on‑chain proof anchoring. | Addresses emerging Web3 developer needs; fresh proposal with clear utility. |

*All listed PRs remain **OPEN** as of the snapshot date.*

---

### 4. Skills Ecosystem Insight  

> **The community’s most concentrated demand is for skills that execute reliably and securely across platforms, with robust trigger evaluation, error handling, and efficient resource usage.**  

---  

*All links point to the official GitHub repository (https://github.com/anthropics/skills).*

---

User Safety: safe

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-09-26

## Today's Highlights
The Gemini CLI team continues to focus on core stability improvements, with a new nightly release v0.63.0 addressing critical file handling race conditions and authentication loop fixes. Recent PRs have significantly enhanced session reliability and agent behavior control, particularly around user directive enforcement and interrupted turn handling.

## Releases

**v0.63.0-nightly.20260926.g2fe7c2d3f** - This release includes core fixes removing invalid diff.external overrides and prepares the codebase for future enhancements. The nightly build pipeline continues to deliver stability improvements, with ongoing work on atomic file operations and concurrent access patterns.

## Hot Issues

1. **#22323** - *Subagent recovery after MAX_TURNS reported as GOAL success* (13 comments, 2 👍) - Critical bug where `codebase_investigator` subagent incorrectly reports success despite hitting turn limits, masking failures in code analysis workflows.

2. **#21409** - *Generalist agent hangs indefinitely* (8 comments, 8 👍) - High-impact issue affecting core functionality where the generalist agent becomes unresponsive, with users reporting hour-long waits before manual intervention.

3. **#24246** - *Gemini CLI encounters 400 error with > 128 tools* (3 comments) - Tool scaling limitation where exceeding ~128 enabled tools triggers API errors, highlighting the need for smarter tool scope management.

4. **#29448** - *Prevent infinite auth loop from file contention* - Fixes critical authentication loop affecting Windows, WSL, and headless environments by implementing encrypted fallback storage and improved file locking.

5. **#22745** - *Assess AST-aware file reads, search, and mapping* (7 comments) - Epic investigation into leveraging Abstract Syntax Trees for more precise code analysis, potentially reducing token consumption and improving tool accuracy.

6. **#26523** - *Surface or quarantine invalid Auto Memory inbox patches* (3 comments) - Addresses silent failures in memory patch processing where malformed patches are skipped without proper visibility or error reporting.

7. **#29499** - *Serialize file tool operations and make writes atomic* - Resolves race conditions across parallel sub-agents when modifying the same files, preventing data corruption and lost updates.

8. **#22267** - *Browser Agent ignores settings.json overrides* (4 comments) - Configuration bug where browser agent completely disregards global/project-level `settings.json` settings like `maxTurns`, breaking expected configuration inheritance.

9. **#22598** - *Subagent trajectory should be visible via `/chat share`* (2 comments, 1 👍) - Feature request to make subagent interaction traces easily shareable for debugging and evaluation purposes.

10. **#18836** - *Replace WriteToDo with Persistent File-Based Task Tracking* (2 comments) - Proposes migrating from in-context todo lists to persistent file-based storage to solve context rot, token bloat, and session memory loss.

## Key PR Progress

1. **#29402** - *Make persistent state writes failure-safe* - Implements atomic state saving with temp file write + fsync + rename to prevent corruption during interrupted saves.

2. **#29397** - *Prevent session context poisoning and infinite loops on interrupted turns* - Critical fix for agentic loops where interrupted responses were corrupting session history with synthetic placeholder messages.

3. **#29394** - *Enforce user hold directives by blocking mutating tools* - Resolves aggressive action-bias where agents ignored user "wait/explain/do not fix yet" directives, now blocking destructive tools at the scheduler layer.

4. **#29399** - *Preserve unrelated comments during edits* - Strengthens replace tool contract to preserve surrounding code/comments while steering models toward minimal, targeted edits.

5. **#29448** - *Fix infinite auth loop from file contention* - Multi-environment solution providing encrypted fallback storage when system keyring fails and preventing race conditions with companion tools.

6. **#29500** - *Implement Google search tool in RobustAutonomousAgent* - Adds web search capability to the autonomous agent for enhanced information gathering beyond local codebase.

7. **#29387** - *Don't let one malformed extension directory fail all extension loading* - Improves extension loading resilience with proper validation before error handling, allowing functional extensions to load even when others fail.

8. **#29476** - *Resolve hang on Enter keypress in interactive mode* - Fixes unresponsiveness when pressing Enter on tool confirmation prompts in IDE-integrated terminals, improving UX across development environments.

9. **#29398** - *Bound initial tool discovery to a short timeout* - Prevents hanging when MCP servers declare tools capability but fail to respond properly, reducing wait times from 10 minutes to reasonable limits.

10. **#29400** - *Fix duplicate tool responses* - Prevents duplicate function responses when resuming sessions with `-r` flag by eliminating redundant persisted tool results in both toolCalls and user message history.

## Feature Request Trends

**Developer Experience Focus**: The community is pushing for better persistence and state management, with requests to replace WriteToDo with file-based tracking, improve subagent trajectory visibility, and enhance AST-aware code analysis. There's clear demand for more surgical, token-efficient operations.

**Tool Management Evolution**: Multiple issues highlight the need for smarter tool handling - limiting tool scope to prevent 400 errors, improving tool discovery timeouts, and implementing better tool response deduplication. The trend favors more intelligent tool selection rather than raw quantity.

**Agent Reliability**: A significant portion of feature requests and bugs center on agent behavior consistency - fixing hangs, respecting user directives, and improving agent "self-awareness" about its own capabilities and limitations.

**Security & Privacy**: Concerns about memory system logging, deterministic secret redaction, and Auto Memory handling indicate growing focus on secure AI interactions with local data.

## Developer Pain Points

**Performance & Reliability**: Developers are frustrated with agent hangs, inconsistent behavior, and race conditions when multiple sub-agents work on the same files simultaneously. File operation race conditions and authentication loops in various environments are particularly painful.

**Configuration & Tool Management**: Tool configuration complexity stands out - dealing with too many tools causing API errors, browser agent ignoring settings, and extension loading failures create significant friction.

**Debugging & Visibility**: Lack of visibility into subagent trajectories, silent failures in memory systems, and poor error reporting for malformed inputs make debugging difficult. The inability to easily share or review subagent interactions limits development and evaluation.

**Developer Workflow**: Issues with WriteToDo context rot, manual cleanup of tmp scripts, and temporary directory management point to broader concerns about persistent state management and workspace hygiene.

The community appears focused on transforming Gemini CLI from an experimental prototype into a production-grade developer tool with robust error handling, intelligent tool management, and reliable persistence across sessions.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-09-26

## 1. Today's Highlights

The latest release **v1.0.89-4** introduces two major improvements: automatic routing tier switching for better workflow management, and granular control over direct plugin installations. Simultaneously, several critical issues remain open that impact core functionality—particularly around authentication stability, skill discovery, and session reliability. The release also addresses performance concerns such as excessive system prompt token consumption and memory leaks in background threads.

## 2. Releases

**v1.0.89-4** (Last 24h)  
- **Auto Routing Tier Switching**: The CLI now automatically detects and allows switching between routing tiers with a shortcut or click, streamlining multi-tier workflows.  
- **Direct Plugin Install Control**: Users can now enable/disable direct plugin installs globally. Previously, one disabled plugin would prevent subsequent loads—a regression that has been corrected.  

[View Release](https://github.com/github/copilot-cli/releases/tag/v1.0.89-4)

## 3. Hot Issues

| # | Title | Impact | Why It Matters |
|---|-------|--------|----------------|
| #4929 | Process-local auth token stops refreshing | Long-running sessions lose authentication, causing authorization errors across all prompts. Restarting or resuming restores operation. | Breaks continuous development workflows; users must restart sessions frequently. |
| #4775 | Mission Control dashboard links return 404 | Dashboard points to non-existent `/copilot/tasks/<uuid>` URLs while actual sessions reside at `/agents/tasks/<uuid>`. | Prevents users from accessing their own sessions via the UI; creates confusion about session state. |
| #4680 | CLI sends wrong model ID to custom endpoint | Sends `gpt-5.4-nano` instead of configured model name (e.g., `mimo-v2.5`) to custom OpenAI-compatible endpoints, killing sessions. | Leads to immediate session termination; a severe usability and security risk. |
| #2627 | Configurable system prompt to reduce token overhead | Proposes allowing users to trim fixed system prompt tokens (~20.5K) to lower initial load cost on large context windows. | Reduces memory pressure and improves startup latency for users with limited resources. |
| #4103 | Plugin marketplace breaks Git credential helpers | Private Azure DevOps HTTPS repositories fail to authenticate when adding plugins via marketplace. | Blocks enterprise adoption of private repositories; regression introduced in v1.0.70. |
| #4887 | Auto returns error in Model mode with /btw /ask | In Model mode, using `/btw` or `/ask` triggers an error regardless of selected model. | Prevents users from leveraging conversational commands within model-based sessions. |
| #4960 | Enterprise-managed custom model cannot be selected | Managed custom models appear in the interactive picker but cannot be chosen. | Hinders organizations deploying custom models at scale. |
| #4710 | Runaway copilot-file-search thread | Idle sessions spawn a CPU-bound thread that writes unbounded logs to `~/.copilot/lo...`. | Degrades system performance and consumes disk space over time. |
| #4951 | `/ask` window is too small | Fixed-width `/ask`/`/btw` windows are cramped compared to competitors like Claude Code. | Reduces readability and usability for complex responses. |
| #4838 | Skill tool fails intermittently in headless mode | Headless (`copilot -p`) mode fails to resolve skills that are listed in the `<available_skills>` system prompt block. | Breaks automated workflows that rely on skill selection in CI/CD pipelines. |

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. The team continues to focus on stabilizing recent releases and addressing critical bugs reported above. Future PRs will likely target:
- Fixing authentication stability (#4929)
- Resolving dashboard path mismatches (#4775)
- Improving system prompt efficiency (#2627)
- Enhancing cross-platform compatibility (Windows scrollbar alignment #3501)

## 5. Feature Request Trends

The most frequent feature requests center on **performance optimization** and **workflow flexibility**:
- **Token Overhead Reduction**: Multiple issues (#2627, #3053) highlight excessive system prompt and model token consumption, driving interest in configurable system prompts and smarter initialization.
- **Workflow Control**: Users want more granular control over routing tiers (#4438) and finer-grained model switching (#4887).
- **Session Reliability**: Persistent issues with authentication refresh (#4929), background thread leaks (#4710), and dashboard navigation (#4775) indicate a push toward more robust session management.
- **Cross-Platform Consistency**: Windows-specific rendering issues (#3501) and missing integration with external tools (Atlassian MCP #4089) suggest demand for broader ecosystem compatibility.

## 6. Developer Pain Points

Several recurring frustrations emerge from the issue landscape:
- **Authentication Instability**: Long-running sessions frequently lose credentials, forcing manual restarts and disrupting development flows.
- **Skill Discovery Gaps**: Skills marked with `disable-model-invocation: true` become invisible despite appearing in listings, leading to confusing "Skill not found" errors.
- **Resource Waste**: Large system prompt footprints consume significant memory on high-context windows, affecting performance for power users.
- **UI/UX Mismatches**: Small `/ask`/`/btw` windows and incorrect dashboard paths reduce productivity compared to alternatives.
- **Enterprise Barriers**: Plugin marketplace failures with private repositories (#4103) and inability to select managed custom models (#4960) hinder organization-wide adoption.

For deeper engagement, see the full issue tracker: [GitHub Copilot CLI Issues](https://github.com/github/copilot-cli/issues).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-26

## Today's Highlights  
No new releases were published in the last 24 hours. The community focused heavily on resolving desktop usability issues, session management improvements, and core stability fixes. A number of high-engagement feature requests around usage tracking, workspace persistence, and TUI enhancements dominated discussions.

---

## Releases  
**No new releases in the past 24 hours.**

---

## Hot Issues  

1. **[#9281 – Unified Usage Tracking via `/usage`](https://github.com/anomalyco/opencode/issues/9281)** *(Closed)*  
   - Highly upvoted (34👍) enhancement requesting built-in visibility into OAuth provider usage and rate limits. Resolved through recent changes or related PRs.

2. **[#13877 – TUI `/sessions` Picker Shows Only Recent Sessions](https://github.com/anomalyco/opencode/issues/13877)** *(Closed)*  
   - Limited session history visibility in the TUI negatively impacts workflow continuity. Now resolved.

3. **[#29703 – Retain Session History on Project Path Change](https://github.com/anomalyco/opencode/issues/29703)** *(Closed)*  
   - Users lose valuable context when moving/reorganizing projects. Fixed to preserve session data across directory moves.

4. **[#35839 – Third OpenCode Instance Removes Global CLI on Windows](https://github.com/anomalyco/opencode/issues/35839)** *(Closed)*  
   - Reproducible bug affecting multi-instance usage. Addressed with platform-specific safeguards.

5. **[#28596 – Repeated Tool Calls Without Resolution](https://github.com/anomalyco/opencode/issues/28596)** *(Closed)*  
   - Infinite tool-call loops degrade trust in agent behavior. Mitigation likely included timeout/recovery logic.

6. **[#37381 – Add Prompt Queue & Interrupts to Composer](https://github.com/anomalyco/opencode/issues/37381)** *(Closed)*  
   - Feature request targeting better composability of prompts during streaming responses.

7. **[#27928 – Duplicate Messages in Attached Sessions](https://github.com/anomalyco/opencode/issues/27928)** *(Closed)*  
   - Cross-machine sync anomalies causing UX degradation; now corrected.

8. **[#36134 – Add Session Picker Entry Point at Startup](https://github.com/anomalyco/opencode/issues/36134)** *(Closed)*  
   - Enhances discoverability of existing sessions at launch time.

9. **[#51430 – Confirmed Loopback Desktop Connection Links](https://github.com/anomalyco/opencode/issues/51430)** *(Open)*  
   - Requesting public loopback links for local launcher integrations — tied directly to ongoing desktop architecture improvements.

10. **[#51424 – Go Models Return “Insufficient Funds” Despite Active Subscription](https://github.com/anomalyco/opencode/issues/51424)** *(Open)*  
   - Critical billing sync issue under active investigation; impacts paying users.

---

## Key PR Progress  

1. **[#51435 – Raw Placeholders Opt-In for Verbatim Prompts (TUI)](https://github.com/anomalyco/opencode/pull/51435)** *(Open)*  
   - Allows plugins to inject unmodified prompt suggestions into the input field.

2. **[#51433 – Add About Menu on Windows](https://github.com/anomalyco/opencode/pull/51433)** *(Open)*  
   - Implements Help > About menu item aligning Windows desktop experience with macOS.

3. **[#51431 – Preserve Selected Directories & Propose Local Connection Links](https://github.com/anomalyco/opencode/pull/51431)** *(Open)*  
   - Addresses stale workspace paths and introduces user-friendly local server connection proposals.

4. **[#38283 – Document `opencode-quota` Plugin in Ecosystem Page](https://github.com/anomalyco/opencode/pull/38283)** *(Open)*  
   - Adds third-party quota monitoring tool to official plugin list.

5. **[#51429 – Usage Display Currency Selection](https://github.com/anomalyco/opencode/pull/51429)** *(Open)*  
   - Enables configurable currency display instead of hardcoded USD.

6. **[#51407 – Bound Recursion Depth & Argument Counts in Codemode](https://github.com/anomalyco/opencode/pull/51407)** *(Open)*  
   - Safety hardening against stack overflows and DoS-like behaviors.

7. **[#51426 – Agent Manager & Task Graph Pipeline (Core)](https://github.com/anomalyco/opencode/pull/51426)** *(Open)*  
   - Introduces scalable agent lifecycle control with budget gating.

8. **[#51422 – Restore Legacy Instruction Resolver Logic](https://github.com/anomalyco/opencode/pull/51422)** *(Open)*  
   - Fixes missing instruction resolution in newer runtime versions.

9. **[#49691 – Unescape Backslash Characters in Shell Paths](https://github.com/anomalyco/opencode/pull/49691)** *(Open)*  
   - Corrects path handling where escaped spaces broke file system access.

10. **[#50994 – Serialize MCP OAuth Refreshes Across Processes](https://github.com/anomalyco/opencode/pull/50994)** *(Open)*  
    - Prevents credential loss due to concurrent token refreshes in distributed environments.

---

## Feature Request Trends  
- **Usage Transparency**: Demand grows for integrated cost/plan tracking per OAuth provider.
- **Workspace Resilience**: Users want persistent sessions unaffected by folder relocation or system restarts.
- **Desktop Polish**: Requests include improved menus, persistent directory selections, and loopback connectivity.
- **Prompt Control**: Desire for finer-grained interaction models like queuing and interrupting streams.
- **Customization Flexibility**: Preference for configurable UI elements like cursor styles and currency formatting.

---

## Developer Pain Points  
- **Session Loss**: Frequent complaints about losing chat history or tools malfunctioning upon project movement.
- **UI Bugs in Desktop App**: Recurring crashes, freezes, and inconsistent project switching plague Windows clients.
- **Unstable Streaming Behavior**: Tool-call loops and fragmented output reduce reliability in real-time workflows.
- **OAuth/Authentication Friction**: Billing errors, sync failures, and lack of feedback when limits are reached frustrate adopters.
- **Limited Configurability**: Hardcoded defaults make personalization difficult without plugin overrides.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest - September 26, 2026

## Today's Highlights
The Pi community is actively addressing critical stability and usability issues, with recent focus on TUI robustness and MCP integration. Key fixes include preventing process crashes when terminal sessions disconnect and containing extension console output to prevent UI corruption. These improvements aim to create a more reliable interactive experience, especially for users working with AI models in terminal environments.

## Releases
No new releases reported in the last 24 hours.

## Hot Issues

1. **#10056 [OPEN]** - *TUI calls process.exit(1) when stdout goes away* - **Impact**: Terminal disconnection appears as a crash, losing session state - **Community**: 2 comments, indicates user frustration with reliability - **Link**: [earendil-works/pi Issue #10056](https://github.com/earendil-works/pi/issues/10056)

2. **#10002 [OPEN]** - *Extension console output writes over the interactive TUI* - **Impact**: Extension debug output corrupts the UI display during sessions - **Community**: 2 comments, shows real-world debugging impact - **Link**: [earendil-works/pi Issue #10002](https://github.com/earendil-works/pi/issues/10002)

3. **#9905 [OPEN]** - *Anthropic: thinking.display is always sent as "summarized"* - **Impact**: Users cannot control thinking display mode, limiting output customization - **Community**: 4 comments, reflects broader provider limitations - **Link**: [earendil-works/pi Issue #9905](https://github.com/earendil-works/pi/issues/9905)

4. **#9962 [OPEN]** - *registerNativeProvider races the startup refresh* - **Impact**: New providers may show "No models available" error despite working - **Community**: 2 comments, indicates integration reliability issues - **Link**: [earendil-works/pi Issue #9962](https://github.com/earendil-works/pi/issues/9962)

5. **#10024 [OPEN]** - *Mid-run change to tool set re-bills conversation* - **Impact**: Dynamic tool switching causes unexpected billing, financial concern for users - **Community**: 4 comments, highlights pricing model complexity - **Link**: [earendil-works/pi Issue #10024](https://github.com/earendil-works/pi/issues/10024)

6. **#9840 [CLOSED]** - *Kimi provider hangs indefinitely after completion* - **Impact**: Sessions appear successful but never terminate, wasting resources - **Community**: 4 comments, critical for workflow reliability - **Link**: [earendil-works/pi Issue #9840](https://github.com/earendil-works/pi/issues/9840)

7. **#10033 [OPEN]** - *Compaction prompt exceeds context window* - **Impact**: Auto-compaction fails on long reasoning sessions, breaking memory management - **Community**: 5 comments, affects reasoning model usability - **Link**: [earendil-works/pi Issue #10033](https://github.com/earendil-works/pi/issues/10033)

8. **#9887 [OPEN]** - *read tool call rendering breaks with string line numbers* - **Impact**: TUI display errors when models return numeric values as strings - **Community**: 4 comments, shows interoperability challenges - **Link**: [earendil-works/pi Issue #9887](https://github.com/earendil-works/pi/issues/9887)

9. **#10048 [CLOSED]** - *Turn end boundary error during stream teardown* - **Impact**: Assistant messages lost during streaming, data integrity issue - **Community**: 2 comments, critical for conversation persistence - **Link**: [earendil-works/pi Issue #10048](https://github.com/earendil-works/pi/issues/10048)

10. **#9758 [OPEN]** - *Mouse-wheel scroll step is hardcoded to 1 line* - **Impact**: No customization for different scrolling preferences or accessibility needs - **Community**: 2 comments, reflects user experience limitations - **Link**: [earendil-works/pi Issue #9758](https://github.com/earendil-works/pi/issues/9758)

## Key PR Progress

1. **#10057 [CLOSED]** - *fix(tui): do not exit the process when stdout goes away* - **Status**: Merged - **Impact**: Critical fix preventing crash-like behavior on terminal disconnection - **Link**: [earendil-works/pi PR #10057](https://github.com/earendil-works/pi/pull/10057)

2. **#10050 [OPEN]** - *fix(coding-agent): keep extension console output off the interactive TUI* - **Status**: Open - **Impact**: Prevents UI corruption from extension debugging output - **Link**: [earendil-works/pi PR #10050](https://github.com/earendil-works/pi/pull/10050)

3. **#10051 [CLOSED]** - *feat(client): add actionable error mapping for MCP OAuth* - **Status**: Merged - **Impact**: Better error messages for MCP OAuth configuration issues - **Link**: [earendil-works/pi PR #10051](https://github.com/earendil-works/pi/pull/10051)

4. **#10040 [OPEN]** - *feat(coding-agent): Codemode and MCP* - **Status**: Open - **Impact**: Major feature adding codemode functionality and MCP support - **Link**: [earendil-works/pi PR #10040](https://github.com/earendil-works/pi/pull/10040)

5. **#10044 [CLOSED]** - *fix(ai): upgrade openai SDK to 7.19.0* - **Status**: Merged - **Impact**: Adds support for GPT-6 Fast mode pricing - **Link**: [earendil-works/pi PR #10044](https://github.com/earendil-works/pi/pull/10044)

6. **#10039 [CLOSED]** - *fix(coding-agent): honor truecolor in custom themes* - **Status**: Merged - **Impact**: Improves terminal color accuracy in custom themes - **Link**: [earendil-works/pi PR #10039](https://github.com/earendil-works/pi/pull/10039)

7. **#10037 [CLOSED]** - *Perf/collapse historical tool output* - **Status**: Merged - **Impact**: Performance optimization for long-running sessions - **Link**: [earendil-works/pi PR #10037](https://github.com/earendil-works/pi/pull/10037)

8. **#10027 [CLOSED]** - *fix(ai,coding-agent): streaming robustness, reasoning clamp, compaction validity* - **Status**: Merged - **Impact**: Multiple robustness improvements for AI interactions - **Link**: [earendil-works/pi PR #10027](https://github.com/earendil-works/pi/pull/10027)

9. **#10035 [OPEN]** - *Virtual models* - **Status**: Open - **Impact**: Experimental feature for flexible model configuration - **Link**: [earendil-works/pi PR #10035](https://github.com/earendil-works/pi/pull/10035)

10. **#6933 [CLOSED]** - *fix(coding-agent): disable undici idle timeout by default for local LLMs* - **Status**: Merged - **Impact**: Fixes hanging sessions with local LLM backends - **Link**: [earendil-works/pi PR #6933](https://github.com/earendil-works/pi/pull/6933)

## Feature Request Trends

1. **Enhanced Configuration Controls**: Multiple requests for more granular control over provider behavior, including:
   - Mouse wheel scroll customization (#9758)
   - Thinking display modes for Anthropic (#9905)
   - Tool set management without side effects (#10024)

2. **Bidirectional Navigation**: Recurring request for backward-direction thinking level cycling (#3790, #6281) to improve workflow efficiency when overshooting desired reasoning levels.

3. **Improved Error Handling**: Focus on actionable error messages and better failure recovery, particularly for:
   - MCP OAuth authentication (#9962)
   - Provider integration issues
   - Session persistence during streaming failures

4. **UI/UX Enhancements**: Requests to isolate extension output from TUI rendering and prevent UI corruption during debugging sessions.

## Developer Pain Points

1. **Terminal Reliability Issues**: The most frequent pain point involves terminal disconnection causing apparent crashes (process.exit calls), making it difficult to distinguish between actual bugs and normal user actions like resizing or network interruptions.

2. **Provider Integration Complexity**: Developers report difficulties with:
   - Custom provider registration and initialization delays
   - Inconsistent pricing calculations across providers
   - Hanging provider sessions that don't terminate cleanly

3. **Debugging and Monitoring Challenges**: Extension console output interfering with the TUI display creates significant obstacles for debugging, especially during active AI sessions.

4. **Session Management Inconsistencies**: Issues with session persistence, compaction failures, and unexpected state changes during streaming sessions create reliability concerns for long-running workflows.

5. **Configuration Limitations**: Lack of configurability for fundamental UI behaviors (mouse scrolling) and provider settings (thinking display modes) forces workarounds and reduces user control.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

---

**Qwen Code Community Digest – 2026-09-26**  

---

### 1. **Today’s Highlights**  
Qwen Code v0.24.6 has been released, featuring fixes for macOS PTY issues, session management stability, and ripgrep compatibility. Key additions include the Java SDK’s Hosted Harness private client and multi-workspace root support in the daemon shell guard. The desktop variant (v0.24.6) addresses critical bugs like session deletion restrictions and UI alignment in VP mode.  

---

### 2. **Releases**  
- **v0.24.6**: A minor patch addressing PTY unavailability on macOS, session deletion restrictions, and VP mode content overflow. Bundles CLI v0.24.6.  
- **desktop-v0.24.6**: Focuses on session lifecycle and UI fixes, including improved workspace deletion workflows and error messaging.  
- **sdk-typescript-v0.1.16**: Bundles CLI v0.24.5. Includes fixes for batched API proxy handling and improved hook decision consistency.  
- **nightly build v0.24.5-nightly.20260925**: Adds Java SDK Hosted Harness private client and runtime-broker guard test pinning.  

---

### 3. **Hot Issues**  
1. **#12380 [P2, Feature]** *Managed Agent dual-path architecture*: A foundational design proposal for durable agent sessions and multi-agent orchestration. [GitHub](https://github.com/QwenLM/qwen-code/issues/12380)  
2. **#472 [Bug]** *is_background validation error*: Persistent bug affecting shell tools since #445 merges. Users report blocking issues with memory and `exec` integration. [GitHub](https://github.com/QwenLM/qwen-code/issues/472)  
3. **#11872 [P1, Bug]** *macOS PTY not bundled*: Critical for web shell functionality on macOS; blocks `getPty()` imports due to code signing. [GitHub](https://github.com/QwenLM/qwen-code/issues/11872)  
4. **#12416 [P1, Bug]** *Remote-SSH EPIPE errors*: Session creation fails in Companion 0.24.2 via SSH. Standalone CLI works, suggesting environment-specific bugs. [GitHub](https://github.com/QwenLM/qwen-code/issues/12416)  
5. **#12668 [P1, Bug]** *Self-update drops ripgrep exec bit*: `EACCES` errors after updates. Affects CLI functionality for grep-based tool usage. [GitHub](https://github.com/QwenLM/qwen-code/issues/12668)  
6. **#12727 [P2, Bug]** *Windows `/update` command fails*: User reports failed version upgrades with CLI relaunch errors. [GitHub](https://github.com/QwenLM/qwen-code/issues/12727)  
7. **#8586 [P2, Feature]** *Background agent recovery*: Requests tracking and recovery for long-running background agents. Aids daemon stability in multi-session environments. [GitHub](https://github.com/QwenLM/qwen-code/issues/8586)  
8. **#12619 [P2, Bug]** *Web/desktop session deletion blocked*: Current session cannot be deleted in Live Agent panels. Workflow disruption for users. [GitHub](https://github.com/QwenLM/qwen-code/issues/12619)  
9. **#10152 [P2, Bug]** *Skill toggle feedback incomplete*: Users report UI inconsistencies in skill settings persistence. [GitHub](https://github.com/QwenLM/qwen-code/issues/10152)  
10. **#12720 [P3, Bug]** *web_fetch https→http fallback*: Multi-address hosts may fail unpredictably due to improper error code handling. [GitHub](https://github.com/QwenLM/qwen-code/issues/12720)  

---

### 4. **Key PR Progress**  
1. **#12713 [Open]** *Hosted Harness no-tool text turns*: Enables Java clients to manage sessions in a private managed environment. [GitHub](https://github.com/QwenLM/qwen-code/pull/12713)  
2. **#12719 [Open]** *Multi-root workspace daemon shell guard*: Allows Git and shell operations across multiple workspace directories. [GitHub](https://github.com/QwenLM/qwen-code/pull/12719)  
3. **#12665 [Open]** *Dropped @-reference reporting*: Enhances error visibility for ignored/resolved file references. [GitHub](https://github.com/QwenLM/qwen-code/pull/12665)  
4. **#12641 [Open]** *Skill toggle feedback fix*: Addresses UI control persistence and error messages for skill settings. [GitHub](https://github.com/QwenLM/qwen-code/pull/12641)  
5. **#12718 [Open]** *Windows/macOS directory-sync tolerance*: Resolves CI failures from filesystem edge cases in managed sessions. [GitHub](https://github.com/QwenLM/qwen-code/pull/12718)  
6. **#12709 [Open]** *Workspace-bound session creation*: Adds W0b admission slice for user-selected workspace directories. [GitHub](https://github.com/QwenLM/qwen-code/pull/12709)  
7. **#12726 [Open]** *Scoped metadata extraction*: Improves memory browsing with tree-layer navigation and keyword filtering. [GitHub](https://github.com/QwenLM/qwen-code/pull/12726)  
8. **#12559 [Open]** *OpenTUI popup geometry alignment*: Ensures Consistent rendering in CLI and Ink-compatible TUI. [GitHub](https://github.com/QwenLM/qwen-code/pull/12559)  
9. **#11799 [Open]** *Remote computer use via node_repl relay*: Enables local CUA integration for remote sessions. [GitHub](https://github.com/QwenLM/qwen-code/pull/11799)  
10. **#12705 [Open]** *EHOSTUNREACH in web_fetch*: Improves network error classification for HTTP-to-HTTPS fallback logic. [GitHub](https://github.com/QwenLM/qwen-code/pull/12705)  

---

### 5. **Feature Request Trends**  
- **Managed Agent Architecture**: Demand for durable sessions, workspace bindings, and tool recovery (core focus in #12380).  
- **Multi-Agent Collaboration**: Proposals for agent teams, background TaskView, and cross-IDE coordination.  
- **Session Management**: Requests for deletion workflows, lifecycle persistence, and resource allocation.  
- **Cross-Platform Compatibility**: macOS PTY bundling, Windows exec bit preservation, and Remote-SSH stability.  
- **UI/UX Refinements**: VP mode alignment, Live Voice session handling, and Chat history navigation.  

---

### 6. **Developer Pain Points**  
- **Installation/Update Failures**: EACCES errors post-self-update, Windows CLI relaunch issues, and ripgrep exec bit loss.  
- **Remote Session Instability**: EPIPE/BridgeChannelClosedError in Remote-SSH setups, requiring robust fallback paths.  
- **Hook Permission Races**: Concurrent PreToolUse hooks lead to silent override of deny/allow decisions (#12683).  
- **Tool Integration Bugs**: Shell tool `is_background` validation failures and batch API proxy bypass issues.  
- **Web/Shell UI Glitches**: VP content cutoff, context estimation errors, and Live Voice session confusion.  

--- 

This digest summarizes active development directions and urgent fixes in Qwen Code. For deeper exploration, refer to the linked GitHub issues and PRs.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI (Codewhale) Community Digest — 2026-09-26

---

## 1. Today's Highlights

The project is in a pre-v0.10.0 sprint focused heavily on trust, safety, and first-run experience hardening. A major strategic PR (#6600) introduces a TypeScript + Cordis extension host, signaling a deliberate shift where the Rust core remains authoritative for turn loops, approval, and trust gates while extensibility moves to TypeScript. Multiple critical bugs were closed today — including silent config typos, lost/doubled first messages, and exec bypassing the Engine entirely — alongside a large dead-code deletion (~2,650 lines) and the start of a runtime/TUI crate split.

---

## 2. Releases

No new releases in the last 24 hours. The project is actively preparing for v0.10.0.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|----------------|
| **[#6603]**(https://github.com/Hmbown/Codewhale/issues/6603) | Add an optional Decision Gate to speed up routine agent decisions | `[OPEN]` `[needs-triage]` | Every user message wakes the LLM for routine tool decisions, costing latency and real money. A lightweight gate could skip inference for simple cases. |
| **[#6573]**(https://github.com/Hmbown/Codewhale/issues/6573) | Multiple TUI Sessions Contend on Subagents Store → CPU Spin-loop | `[OPEN]` `[bug, needs-triage]` | Critical stability bug: concurrent TUI sessions pin CPU on FreeBSD. High priority for any multi-session user. |
| **[#6585]**(https://github.com/Hmbown/Codewhale/issues/6585) | Make "Whose word wins" checkable: provenance on instructions and memory | `[OPEN]` | Adds provenance tracking so agent-written text is treated as claims, not authority. Directly addresses prompt-injection and instruction-overwrite risks. |
| **[#6582]**(https://github.com/Hmbown/Codewhale/issues/6582) | hooks: structured execution receipt on stdin for shell tool_call_after | `[OPEN]` `[enhancement, needs-triage]` | MemWhale plugin author requests structured shell command receipts (command, cwd, exit code, output) for downstream memory tools. |
| **[#6566]**(https://github.com/Hmbown/Codewhale/issues/6566) | First run: new users never see onboarding; first message lost or doubled | `[CLOSED]` | Comprehensive first-run audit found no onboarding flow, lost/doubled messages, and developer-facing UI elements shown to end users. Fixed in PR #6592. |
| **[#6563]**(https://github.com/Hmbown/Codewhale/issues/6563) | `codewhale config set` accepts typos and unknown keys silently | `[CLOSED]` | `calm_mode flase` and `totally_bogus_key 42` both exited 0 and wrote to config. No validation, no did-you-mean. Fixed. |
| **[#6510]**(https://github.com/Hmbown/Codewhale/issues/6510) | `codewhale exec` without `--auto` bypasses the Engine entirely | `[CLOSED]` | Without `--auto`, exec skipped BASE_PROMPT, AGENTS.md, skills, hooks, tools, and session records. Fixed in PR #6588. |
| **[#6528]**(https://github.com/Hmbown/Codewhale/issues/6528) | Credential setup: strip invisible characters from pasted keys | `[CLOSED]` | Pasted API keys with BOM or zero-width spaces caused 401s because only `.trim()` was applied. Fixed. |
| **[#6500]**(https://github.com/Hmbown/Codewhale/issues/6500) | Model selection: pinning a model and adding it to Fleet do not work | `[CLOSED]` | Submenu actions for pinning and Fleet addition were silently broken. Fixed. |
| **[#6562]**(https://github.com/Hmbown/Codewhale/issues/6562) | Code mode for MCP and plugins: discovery without re-pinning | `[CLOSED]` | Design research into MCP/plugin tool discovery in code mode, referencing Cloudflare Code Mode and Cursor's schema folder optimizations. Implemented in PR #6583. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|-----|--------|---------|
| **[#6583]**(https://github.com/Hmbown/Codewhale/pull/6583) | feat(codemode): MCP and plugin calls through one approval gate | `[CLOSED]` | Code mode can now compose MCP and plugin tools. Every nested call goes through the same `plan_tool_calls` → `request_tool_approval` gate. Closes #6562. |
| **[#6592]**(https://github.com/Hmbown/Codewhale/pull/6592) | fix(tui): first run connects a model, messages never lost or doubled | `[CLOSED]` | Launch with no usable key now opens the provider picker for new users. Fixes message doubling/loss, workbar, and approval save fail-closed. Closes #6566. |
| **[#6588]**(https://github.com/Hmbown/Codewhale/pull/6588) | fix(runtime): one turn-loop guard sees sub-agent and RLM loops | `[CLOSED]` | `single_turn_loop.rs` now matches the full `create_message*` family, REPL/kernel rounds, sub-agent loops, and RLM loops. Closes #6510. |
| **[#6600]**(https://github.com/Hmbown/Codewhale/pull/6600) | feat(extensions): TypeScript + Cordis extension host, phase 1 | `[OPEN]` | Strategic pivot: plugins, MCP, and extensibility move to TypeScript + Cordis (the DSH model). Rust core stays authoritative for turn loop, store, approval, trust gate, sandbox, credentials, and data loss prevention. |
| **[#6601]**(https://github.com/Hmbown/Codewhale/pull/6601) | fix(trust): credentials masked at rest, honest approval timeouts, fail-closed grants | `[OPEN]` | Credential redaction at transcript entry, honest approval timeout reporting, fail-closed workspace trust grants. |
| **[#658

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*