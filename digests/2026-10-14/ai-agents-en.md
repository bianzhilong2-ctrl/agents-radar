# OpenClaw Ecosystem Digest 2026-10-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-14 02:45 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest - October 14, 2026

## 1. Today's Overview
OpenClaw is experiencing extreme activity with 500 issues and 500 PRs updated in the last 24 hours, indicating a period of significant debugging and feature development. The project shows two new releases (v2026.10.5-beta.3 and v2026.10.3), but critical database growth and process leak issues suggest ongoing stability challenges. Gateway startup performance has become a major concern, with documented delays scaling from 410s to 1030s across versions, while authentication provider failures and session state inconsistencies continue to plague users. The repository appears to be in a reactive mode, addressing multiple regressions and performance bottlenecks.

## 2. Releases

**v2026.10.5-beta.3** (Recent Beta)
- **Gateway Stability**: pnpm 12 installations maintain Gateway service and launcher on durable install paths
- **Windows Updates**: Accept qualified Scheduled Task accounts and verified drivers
- **macOS Protection**: Enhanced protection for protected Bun services
- **Focus**: Installation robustness and cross-platform compatibility improvements

**v2026.10.3** (Previous Release)
- **Scale**: 90 commits across 79 pull requests from 99 contributors
- **Status**: Featured release notes available at https://docs.openclaw.ai/releases/2026.10.3
- **Impact**: Major feature additions and stability improvements preceding current issues

## 3. Project Progress

**Merged/Closed PRs Today:**
- **#171583**: Fixed CI security review pending status when GitHub fails large job pages
- **#171582**: Performance improvement for shell and runtime launches with bounded owner attribution
- **#171580**: Fixed read-only session forks reporting running tool calls as aborted
- **#171573**: Resolved Gateway CPU spikes from Markdown parsing after quoted tool XML
- **#171206**: Fixed required-worker turns failing when follow-up runs error
- **#153431**: Stack-safe deep config loading after include resolution
- **#138344**: Windows Defender false positives on scheduled-task health checks
- **#171576**: UI refactoring using Solid for agent and theme artwork rendering
- **#165664**: Fixed Discord message edits for Components V2 cards
- **#171507**: Stabilized recovery cleanup validation for managed services

**Key Advances:**
- Native Control UI migration replacing Web Awesome components
- Improved OAuth refresh fence timeout handling across clock skew
- Android phone and Wear OS CI validation framework
- Plugin tab pinning capabilities in Control UI sidebar
- Enhanced credential change handling during config reloads

## 4. Community Hot Topics

**Most Active Discussions:**

1. **#143524** - *Agent SQLite WAL grows to 1.4-2.8 GB* (123 comments)
   - **Impact**: Critical database checkpoint failure on Windows, blocking gateway startup
   - **Status**: [Open](https://github.com/openclaw/openclaw/issues/143524)
   - **Need**: Immediate WAL auto-checkpoint solution for agent databases

2. **#148707** - *Reply lost with tool authority snapshot error* (19 comments)
   - **Impact**: Interactive session turn failures causing reply loss in 2026.9.4+
   - **Status**: [Open](https://github.com/openclaw/openclaw/issues/148707)
   - **Need**: Fix for turn displacement handling in session management

3. **#97616** - *Unreaped hook/tool child processes* (19 comments)
   - **Impact**: Zombie process accumulation leading to runtime degradation
   - **Status**: [Closed](https://github.com/openclaw/openclaw/issues/97616)
   - **Need**: Process cleanup improvements for tool execution

4. **#38327** - *Cannot convert undefined or null to object error* (18 comments)
   - **Impact**: Embedded agent failures with google-vertex/gemini-3.1-pro-preview
   - **Status**: [Open](https://github.com/openclaw/openclaw/issues/38327)
   - **Need**: Auth provider null handling fixes

5. **#114612** - *SQLite unbounded growth in memory tables* (17 comments)
   - **Impact**: memory_index_chunks and memory_embedding_cache tables filling disk
   - **Status**: [Open](https://github.com/openclaw/openclaw/issues/114612)
   - **Need**: Retention policies for memory cache tables

## 5. Bugs & Stability

**Critical Issues (P0-P1):**

1. **#143524** - Database checkpoint failure (P0)
   - WAL files growing to 2.8GB despite auto-checkpoint=1000
   - Blocks gateway startup on Windows systems

2. **#166894** - Gateway restart hangs 30min-2hours (P0)
   - Windows multi-agent installs experiencing extreme delays
   - Likely related to process cleanup or dependency resolution

3. **#155859** - Plugin startup wall-time scaling (P0)
   - Gateway startup time scales with enabled plugin count
   - Discord, codex, and openclaw-weixin plugins dominating delays

4. **#168955** - Startup regression 1030s vs 410s (P1)
   - Sidecars.control-ui-assets blocking 477s on Windows
   - Major performance regression from 2026.9.9 to 2026.10.1

5. **#161436** - Cloud-worker policy bypass (P1)
   - Box-local tool calls bypassing before_tool_call hooks
   - Policy plugins cannot guard cloud worker operations

**Medium Severity (P2):**

- **#164294** - Gateway state DB WAL checkpoint blocked by reader
- **#158390** - Plugin-captures tmp directories not GC'd (disk fill)
- **#161379** - CPU core pinned by model catalog refresh loop
- **#170724** - macOS 2026.10.2 update incomplete after retry

## 6. Feature Requests & Roadmap Signals

**Emerging Requirements:**

1. **Voice Integration** - Webchat TTS/STT provider support (#45508)
   - Browser Speech API bypasses self-hosted voice configurations
   - Need: Route webchat voice through gateway

2. **Plugin Management** - Control UI sidebar pinning (#111143)
   - Plugin tabs always placed in "More" section
   - Request: Allow pinning like built-in routes and sessions

3. **Sandboxed Agents** - Skills workshop tool access (#91676)
   - Opt-in needed for sandboxed agents to use skill_workshop
   - Current: Hard-disabled for sandboxed environments

4. **Provider Expansion** - Databricks Unity Gateway (#155633)
   - Organizations need Unity Gateway model routing
   - Implementation in progress (#155634)

5. **Mobile Enhancements** - Android/Wear OS CI validation (#171476)
   - Lack of unattended qualification gates compared to iOS
   - New framework in development

## 7. User Feedback Summary

**Recurring Pain Points:**

- **Performance Degradation**: Startup times increasing from 410s to 1030s
- **Resource Management**: Database growth, process leaks, and disk filling
- **Session Reliability**: Message loss, tool call failures, and state inconsistencies
- **Cross-Platform Issues**: Windows Defender alerts, macOS update failures, auth problems
- **Configuration Migration**: Plugin updates blocking each other during state migrations
- **Integration Problems**: Plugin loading, dependency resolution, and child process management

**User Sentiment:**
- High engagement with bug reporting indicates active user base
- Frequent regression reports suggest testing gaps in releases
- Performance complaints highlight scaling challenges
- Platform-specific issues indicate incomplete cross-platform testing

## 8. Backlog Watch

**Critical Unanswered Issues:**

1. **#164294** - Gateway state DB WAL checkpoint blocked
   - **Risk**: Database integrity and recovery issues
   - **Age**: Since October 3, 2026

2. **#161379** - CPU core pinned by model catalog refresh loop
   - **Risk**: Resource exhaustion in multi-agent setups
   - **Age**: Since September 29, 2026

3. **#158390** - Plugin-captures tmp directories never cleaned
   - **Risk**: Indefinite disk consumption
   - **Age**: Since September 25, 2026

4. **#149564** - Cron lane tool policy resolves to denyAll
   - **Risk**: Scheduled jobs failing silently
   - **Age**: Since September 16, 2026

5. **#161921** - Doctor and plugins update requiring each other
   - **Risk**: Update stuck during state migrations
   - **Age**: Since September 30, 2026

6. **#170331** - Beta.2 update candidate config read exits 1
   - **Risk**: Incomplete update scenarios
   - **Age**: Since October 12, 2026

**Emerging Concerns:**
- Telegram streaming issues (#169930)
- Configuration hot-reload abort problems (#144291)
- Memory growth in embedded agents (#99659)
- Provider fallback mechanisms (#47910)

**Maintainer Focus Areas:**
1. Database checkpoint and growth management
2. Process cleanup and resource monitoring
3. Cross-platform update reliability
4. Plugin loading performance optimization
5. Scheduled job policy resolution

The project shows intense debugging activity with many critical issues requiring immediate attention, particularly around database integrity, performance degradation, and cross-platform stability. Several recurring patterns suggest deeper architectural challenges in resource management and state handling.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison: AI Agent & Personal Assistant Open-Source Ecosystem  
**Data source:** GitHub community digests for 2026-10-14  
**Scope:** 13 active projects; 8 with substantial recent activity  

---

## 1. Ecosystem Overview
The personal AI agent open-source landscape in October 2026 is characterized by a dichotomy between **high-velocity, feature-rich monorepos** (OpenClaw, ZeroClaw, CoPaw) undergoing rapid stabilization, and **focused, low-velocity ecosystems** (IronClaw, Moltis, PicoClaw) prioritizing architectural refinements and niche integrations. Security, database integrity, and cross-platform update reliability emerge as universal pain points, while plugin ecosystems and cost observability differentiate project maturity. The community is bifurcating: projects addressing multi-agent orchestration and gateway performance (OpenClaw, CoPaw) attract the most contributor engagement, whereas niche agents targeting specific transports (LobsterAI desktop, PicoClea mobile/comms) exhibit slower but deliberate iteration.

---

## 2. Activity Comparison  
| Project | Issues (24h) | PRs (24h) | Releases Today | Health Score* |
|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 2 (v2026.10.5-beta.3, v2026.10.3) | High activity – unstable |
| **ZeroClaw** | 25 | 50 | 0 | High activity – hardening |
| **CoPaw** | 18 | 39 | 0 (v2.2.2-beta.3 pending) | Active – stability-focused |
| **LobsterAI** | ~15 (implied) | 17 | 0 | High velocity – 1 critical security vuln |
| **NanoClaw** | 1 | 3 | 0 | Stable – low-velocity maintenance |
| **IronClaw** | 1 | 1 | 0 | Very stable – minimal dev day |
| **PicoClaw** | 7 | 2 | 0 | Low momentum – minor bug fixes |
| **Moltis** | 0 |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-10-14

### 1. **Today's Overview**
PicoClaw experienced moderate activity across issues and pull requests. Seven issues were updated in the past 24 hours, with six closed (likely by stale bot or resolution), and one remaining open. Two PRs were also updated: one open and one recently merged. No new releases were published. The project shows consistent maintenance effort but lacks major forward momentum on features.

---

### 2. **Releases**
No new releases were announced today.

---

### 3. **Project Progress**
- **PR #3370** ([link](https://github.com/sipeed/picoclaw/pull/3370)) – Adds `Keenable` as a web search provider. This PR was merged and enhances tooling extensibility without requiring an API key out-of-the-box.
- **PR #3416** ([link](https://github.com/sipeed/picoclaw/pull/3416)) – Introduces native Sendblue iMessage/SMS transport support, still in draft/open stage. If finalized, it would expand channel options significantly for mobile users.

---

### 4. **Community Hot Topics**
- **Issue #440** ([link](https://github.com/sipeed/picoclaw/issues/440)) – Proposes replacing hard iteration limits with smarter context-bounding logic. It has 9 comments and is labeled stale but closed, suggesting some interest or discussion around core agent loop behavior.
- **Issue #3407 & #3406** ([links](https://github.com/sipeed/picoclaw/issues/3407), [3406](https://github.com/sipeed/picoclaw/issues/3406)) – Both address Web UI reliability and UX concerns such as ghost sessions and unclear thinking indicators. Closed as stale but indicate real usability friction for daily users.
- **Issue #3405** ([link](https://github.com/sipeed/picoclaw/issues/3405)) – Request to enable private vulnerability reporting received one 👍. Highlights lack of formal security disclosure process — a notable gap.

---

### 5. **Bugs & Stability**
- **Web UI Ghost Sessions (Issue #3407)** – Active session disappears from list during model processing; high-severity UX crash risk.
- **Agent Loop Limitation (Issue #440)** – Hard max iterations cause premature exits from long-running tasks; medium severity affecting workflow completion.
- **Core Component Bugs (Issue #3404)** – Multiple reproducible bugs found in agent loop, channels manager, config, and updater; ranked medium-to-high depending on component.

No associated fix PRs currently referenced in these issues.

---

### 6. **Feature Requests & Roadmap Signals**
- **Tsubasa Model Support (Issue #3397)** – User requests Tsubasa integration into the OpenAI-compatible provider catalog; low-effort add likely suitable for next release.
- **Persistent Agent Example via Plazmi MCP (Issue #3427)** – Conceptual proposal using external world/time-based system for persistent interactions; early signal of evolving use cases beyond chat.
- **Sendblue Channel Integration (PR #3416)** – Draft feature expanding SMS/iMessage access; may be targeted for future versions if completed and tested.

Most actionable short-term signals are catalog/model additions and channel integrations.

---

### 7. **User Feedback Summary**
Users express frustration with:
- Inflexible agent execution limits causing incomplete workflows (#440)
- Unclear feedback when the model is thinking in the Web UI (#3406)
- Loss of active chats due to session disappearance (#3407)

Satisfaction drivers include:
- Extensibility through new tools/search providers (e.g., Keenable)
- Interest in more communication channels (SMS/iMessage)

Overall tone reflects usage maturity where functional gaps strongly impact end-user experience.

---

### 8. **Backlog Watch**
Several important items remain unanswered or only marked stale:
- **Security Disclosure Process (Issue #3405)** – Lacks `SECURITY.md`, no private reporting option; critical for long-term trust.
- **Web UI Session Management (Issues #3406/#3407)** – High-priority UX improvements with no clear assignee or roadmap link.
- **Reliability Fixes (Issue #3404)** – Contains multiple detailed reproductions; valuable input being underutilized unless addressed promptly.

These represent key risks and opportunities needing proactive maintainer engagement.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-10-14

**Data snapshot as of 2026-10-13 (last 24h window); digest published 2026-10-14.**

---

## 1. Today's Overview
NanoClaw exhibited minimal activity in the 24h period ending 2026-10-13, with 1 issue closed and 3 PRs updated (2 open, 1 merged/closed). The closed issue #30 addressed a critical agent-loop safety limit, while open PRs #3503 (Apple container skill) and #4084 (update channel selection) continue advancing platform-specific and operational features. No new releases were published. Project health remains stable, with focused bug fixes and ecosystem-oriented development, though merge velocity remains low (1 merge in 24h). The snapshot reflects a mature codebase prioritizing reliability and targeted feature expansion over rapid iteration.

**GitHub:** [nanocoai/nanoclaw](https://github.com/qwibitai/nanoclaw) | Status: Stable, low-velocity maintenance

---

## 2. Releases
No new versions were published during this period. The project remains on its latest preceding release with no breaking changes, migration notes, or deprecations applicable this window. Release activity is currently at 0.

---

## 3. Project Progress

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-10-14**

---

### 1. **Today's Overview**

IronClaw shows minimal but steady maintenance activity as of 2026-10-14, with one open pull request updated and one open issue proposed, reflecting a low-priority development day. There have been no new releases, merged PRs, or closed issues in the last 24 hours. The project remains in a stable state with no reported bugs or critical tasks requiring immediate attention. Activity is centered around dependency updates and architectural extensibility proposals.

---

### 2. **Releases**

No new releases were published on 2026-10-14.

---

### 3. **Project Progress**

No pull requests were merged or closed today. The sole updated PR (#8137) is a routine dependency bump authored by `dependabot[bot]`, indicating ongoing tooling maintenance rather than feature progress.

- [PR #8137](https://github.com/nearai/ironclaw/pull/8137): Update `brace-expansion` from v1.1.18 to v1.1.21 in `/docs/internal/architecture-video`.

---

### 4. **Community Hot Topics**

The most notable community-driven topic is a feature proposal focused on extending IronClaw’s architecture with external service integrations:

- **[Issue #8136](https://github.com/nearai/ironclaw/issues/8136)** – *Proposal: optional hosted-MCP Plazmi extension using declarative auth and egress*  
  Proposed by `cairn-agent`, this request outlines an optional integration with [Plazmi](https://plazmi.gg), leveraging existing hosted-MCP extension patterns for authentication and network egress. It aims to enhance extensibility without embedding vendor-specific logic into the core host. As of this digest, the issue has not yet received comments or reactions, but signals interest in modular, declarative third-party integrations.

---

### 5. **Bugs & Stability**

There are no reported bugs, crashes, or regressions in today’s snapshot. No open or recent issues are tagged as critical or high severity related to stability.

---

### 6. **Feature Requests & Roadmap Signals**

The key feature suggestion under discussion is the Plazmi extension outlined in:

- **[Issue #8136](https://github.com/nearai/ironclaw/issues/8136)**  
  This could represent a future direction toward supporting optional, pluggable services (e.g., hosted-MCP companions) via standardized interfaces. If accepted, it may lead to improved modularity and third-party extensibility in upcoming versions.

---

### 7. **User Feedback Summary**

No user feedback or sentiment has been recorded in comments or reactions on open/closed items today. All tracked discussions remain neutral in tone and lack formal endorsement or objection from the community.

---

### 8. **Backlog Watch**

While no specific long-dormant issues are listed among today’s updates, maintainers should monitor:

- **[Issue #8136](https://github.com/nearai/ironclaw/issues/8136)** – Though newly opened, its potential impact on architectural flexibility warrants early evaluation for alignment with long-term extensibility goals.

--- 

*Generated: 2026-10-14 | Source: GitHub Activity Snapshot (24h window)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Based on the GitHub activity for the **LobsterAI** repository (`netease-youdao/LobsterAI`) as of **2026-10-14**, here is the structured project digest:

---

### 1. Today's Overview
LobsterAI exhibits high development velocity, characterized by active feature releases and stability updates. Today saw 17 pull requests updated, with 8 successfully merged or closed, demonstrating steady progress on desktop integration, cowork session management, and prompt optimization. However, the project's overall health is tempered by the reporting of a critical security vulnerability regarding the encryption of exported provider API keys, which currently lacks an immediate fix in the dataset.

### 2. Releases
* **No new releases** were published today.

### 3. Project Progress
Today saw the successful closure of 8 pull requests, advancing several core features:
* **Desktop Companion & UX:** Merged PRs `#2847` (desktop companion composer) and `#2848` ("open with" feature) push forward the desktop application's usability. Additionally, PR `#2846` introduced automatic, asynchronous title generation for new desktop cowork sessions, improving session organization.
* **Expert Discovery:** PR `#2849` was merged, introducing a configurable Expert Plaza. This allows users to discover task-specific agents and summon them into new conversations with pre-filled starter questions, moving Kits into a shared directory structure.
* **Prompt & Context Optimization:** PR `#2812` fixed a redundant prompt injection bug, ensuring that system instructions from `AGENTS.md` are no longer duplicated in the first message of desktop sessions.
* **Stability & Bug Fixes:** PR `#2850` successfully resolved issue `#926` by safely handling the destruction of background accumulators in `IMCoworkHandler`, preventing potential application crashes.
* **Dependency Maintenance:** Automated updates were merged for core libraries, including `mermaid` (PR `#2672`) and `@nodesecure/js-x-ray` (PR `#2459`).

### 4. Community Hot Topics
* **Critical Security Alert (`#2851`):** The repository's most prominent and highly sensitive issue today is the exposure of a hardcoded public password used in the AES-GCM encryption for provider API key exports. This issue has drawn immediate attention as it trivializes the decryption of exported configuration files.
* **Desktop Companion Integration (`#2860`):** The newly opened PR for the desktop companion feature is generating significant developer focus, signaling a major push toward desktop-centric workflows.

### 5. Bugs & Stability
* **Critical Security Vulnerability (`#2851`):** *Status: Open, No fix visible.* The "Export Providers" feature encrypts API keys using AES-GCM, but relies on a public, hardcoded password. Anyone with access to the export file can trivially decrypt the keys. This ranks as the highest severity risk today.
* **Background Accumulator Crash (`#2850`):** *Status: Fixed (Closed).* Addressed a stability issue where `IMCoworkHandler.destroy()` threw errors when cleaning up background delivery accumulators (fixes `#926`). 
* **System Prompt Redundancy (`#2812`):** *Status: Fixed (Closed).* Resolved a UI/LLM context bug where default system prompts were injected twice into the initial desktop session message.

### 6. Feature Requests & Roadmap Signals
* **Expert Plaza & Agent Discovery (`#2849`):** The transition to a shared Kits/Skills/Connectors directory and the introduction of the Expert Plaza indicate a roadmap focused heavily on agent composability and ecosystem discovery.
* **Model Catalog Refresh (`#2859`):** The opening of PR `#2859` suggests upcoming releases will expand out-of-the-box support for major models (DeepSeek, Moonshot, Qwen, Zhipu, MiniMax, Xiaomi) with local config migration logic.

### 7. User Feedback Summary
* **Credential Security Pain Point:** The open issue `#2851` highlights a severe user trust gap regarding the safety of exporting provider configurations. Users relying on the export feature are currently exposed to credential leakage risks.
* **Onboarding & UI Friction Reduction:** The merge of session auto-titling (`#2846`) and the Expert Plaza (`#2849`) reflects community feedback requesting smoother onboarding and less manual setup when spinning up task-specific agents.

### 8. Backlog Watch
* **Security Issue `#2851` (Critical):** Needs immediate maintainer triage. The encryption mechanism must be updated to support user-defined passwords or secure key derivation before the feature is left unpatched.
* **Duplicate Dependency Bumps:** There are overlapping dependency PRs for the same packages (e.g., `#2672` vs `#2858` for `mermaid`, and `#2459` vs `#2857` for `@nodesecure/js-x-ray`). Maintainers should consolidate these automated bumps to avoid merge conflicts.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑10‑14**  

---

### 1. Today's Overview  
The repository saw **no issue activity** in the last 24 hours (0 open/active issues, 0 closed). Two pull‑requests were updated today, both still open and authored by ManuRakh. No releases were published. Overall, the project is in a quiet state with ongoing development work on two feature PRs awaiting review.

### 2. Releases  
*No new releases* were tagged or published today.  

### 3. Project Progress  
| PR | Status | Summary |
|----|--------|---------|
| **[#1302](https://github.com/moltis-org/moltis/pull/1302)** | Open (updated 2026‑10‑13) | Adds an optional `agents.presets.<id>.spawn.allow` allow‑list that restricts `spawn_agent` calls to predefined presets (e.g., org‑chart or coordinator graphs). Enforcement occurs in `resolve_preset` before provider work, and the tool schema reflects only allowed targets. |
| **[#1301](https://github.com/moltis-org/moltis/pull/1301)** | Open (updated 2026‑10‑13) | Aligns chat and sub‑agent behavior by propagating preset fields (`persona`, `system_prompt_suffix`, `delegate_only`, `preset model`) to direct chat interactions, ensuring parity between “talk to the agent as itself” and coordinator/worker setups. |

No PRs were merged or closed today, so no feature advancements or bug fixes have been landed yet.

### 4. Community Hot Topics  
Both open PRs are the most recent activity, but they currently have **0 comments and 0 reactions**, indicating limited community discussion so far.  
- **PR #1302** – Preset spawn.allow allow‑list (link above)  
- **PR #1301** – Chat ↔ sub‑agent parity (link above)  

The lack of discussion suggests the changes are either straightforward or awaiting reviewer attention.

### 5. Bugs & Stability  
No issues were reported, updated, or closed in the last 24 hours, and no bug‑fix PRs were merged. Consequently, there are **no known bugs, crashes, or regressions** to report for today.

### 6. Feature Requests & Roadmap Signals  
The two open PRs themselves represent the latest feature requests under consideration:  

1. **Spawn‑agent allow‑list** (PR #1302) – likely to be included in the next minor release if approved, as it adds a security/guardrail capability for preset‑based spawning.  
2. **Chat/sub‑agent parity** (PR #1301) – addresses a usability gap; acceptance would smooth the developer experience when building coordinator/worker patterns.  

Both signal a roadmap focus on **fine‑grained preset controls** and **consistent agent behavior** across interaction modes.

### 7. User Feedback Summary  
With no issue comments or PR discussions today, there is **no direct user‑reported pain point or praise** to summarize. The silent state implies either stable usage or low recent engagement.

### 8. Backlog Watch  
- **Long‑unanswered important items**: None identified; the issue tracker is empty (0 total items).  
- **PRs needing maintainer attention**: Both #1301 and #1302 are awaiting review. Given their recent updates (within the last day), they should be prioritized for review to avoid stagnation.

---  

*All links point to the corresponding GitHub pages in the moltis‑org/moltis repository.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest – 2026-10-14

## 1. Today's Overview

CoPaw remains actively developed with strong momentum across performance optimization, stability improvements, and new feature rollout. There are **18 issues** and **39 pull requests** updated in the last 24 hours, indicating robust community engagement and ongoing maintenance. However, no new major releases have been published yet—focus remains on refining existing functionality and addressing critical stability concerns. The project shows balanced progress between fixing urgent bugs (particularly around chat history timeouts and platform-specific edge cases) and advancing several high-priority features.

## 2. Releases

**No new releases** have been published since the last version (v2.2.2-beta.3). The team is preparing release notes for v2.2.2 (PR #7928) and focusing on stabilization efforts ahead of the upcoming release cycle.

## 3. Project Progress

### Merged/Closed PRs (Last 24h)
- **#7931** – *Add durable paginated transcript history* (per-session SQLite storage with cursor management)  
  [PR #7931](https://github.com/agentscope-ai/CoPaw/pull/7931)
- **#8234** – *Fix GBK/CP936 decoding in read/edit/grep* (prevents silent data loss on Chinese Windows systems)  
  [PR #8234](https://github.com/agentscope-ai/CoPaw/pull/8234)
- **#8209** – *Resolve deep links across agents* (fixes direct `/chat/<id>` redirection issues)  
  [PR #8209](https://github.com/agentscope-ai/CoPaw/pull/8209)
- **#8231** – *Persist market install provenance* (fixes #8176 – lost plugin installation URLs)  
  [PR #8231](https://github.com/agentscope-ai/CoPaw/pull/8231)
- **#8230** – *Optional host navigation allowlist* (shared navigation policy for focused frontends)  
  [PR #8230](https://github.com/agentscope-ai/CoPaw/pull/8230)
- **#8229** – *Truncate oversized tool outputs* (prevents 30s console timeout from massive file/screenshot payloads)  
  [PR #8229](https://github.com/agentscope-ai/CoPaw/pull/8229)
- **#8227** – *Fix "Open in browser" button* (HTML file opening fails silently outside workspace)  
  [PR #8227](https://github.com/agentscope-ai/CoPaw/pull/8227)
- **#8226** – *Keep active_model and heartbeat on agent.json rebuild* (preserves runtime state during fallback agent creation)  
  [PR #8226](https://github.com/agentscope-ai/CoPaw/pull/8226)
- **#6459** – *Harden SQLite persistence* (concurrent write protection, transaction rollback)  
  [PR #6459](https://github.com/agentscope-ai/CoPaw/pull/6459)
- **#8224** – *Experimental Python Code Mode* (new tool for orchestrating Python scripts within the agent)  
  [PR #8224](https://github.com/agentscope-ai/CoPaw/pull/8224)
- **#8221** – *Bound background polling & unblock model picker* (prevents request accumulation when runtimes are slow)  
  [PR #8221](https://github.com/agentscope-ai/CoPaw/pull/8221)
- **#8203** – *Echo user's own message as first frame* (improves run stream continuity)  
  [PR #8203](https://github.com/agentscope-ai/CoPaw/pull/8203)
- **#8190** – *Resolve model capabilities before filtering history media* (prevents text-only models receiving images)  
  [PR #8190](https://github.com/agentscope-ai/CoPaw/pull/8190)
- **#7565** – *Clean plugin unload & rollback-safe hot reload* (two-layer teardown ledger for safe updates)  
  [PR #7565](https://github.com/agentscope-ai/CoPaw/pull/7565)
- **#8217** – *UI/UX foundation* (lazy loading refinements, push polling changes)  
  [PR #8217](https://github.com/agentscope-ai/CoPaw/pull/8217)
- **#8128** – *Move hub to plugins* (make hub installable/removable via plugin system)  
  [PR #8128](https://github.com/agentscope-ai/CoPaw/pull/8128)

### Key Advances
- **Transcript Management**: Durable, paginated history storage reduces memory pressure and improves chat refresh reliability.
- **Encoding Support**: Proper handling of GBK/CP936 on Chinese Windows prevents silent corruption of legacy notes.
- **Link Resolution**: Deep links now correctly route to agent sessions, eliminating redirect loops.
- **Output Handling**: Truncation and streaming prevent timeouts from large file/screenshot payloads.
- **Platform Compatibility**: Fixed critical issues on Windows (project deletion, plugin loading).

## 4. Community Hot Topics

| Issue | Status | Impact | Link |
|-------|--------|--------|------|
| **#8228** – Chat history bloat | OPEN | High | [#8228](https://github.com/agentscope-ai/CoPaw/issues/8228) |
| **#8206** – Windows project deletion fails | OPEN | High | [#8206](https://github.com/agentscope-ai/CoPaw/issues/8206) |
| **#8233** – Missing provider presets (CommandCode, HF) | OPEN | Medium | [#8233](https://github.com/agentscope-ai/CoPaw/issues/8233) |
| **#8229** – Oversized tool outputs | OPEN | High | [#8229](https://github.com/agentscope-ai/CoPaw/issues/8229) |
| **#8222** – AC P plugin loading gap | OPEN | Medium | [#8222](https://github.com/agentscope-ai/CoPaw/issues/8222) |
| **#8218** – Default agent model modification | OPEN | Low | [#8218](https://github.com/agentscope-ai/CoPaw/issues/8218) |

These issues represent the most pressing areas for immediate attention. The chat history timeout (#8228) and Windows-specific failures (#8206) are particularly critical as they affect core user experience and platform coverage.

## 5. Bugs & Stability

### Critical (Severity: High)
1. **Chat History Timeout (#8228)** – Tool outputs exceeding 10 MB due to base64-encoded file/screenshot storage cause consistent 30s console timeout failures on slower connections. **Fix PR #8229** addresses this by truncating oversized outputs.
2. **Audio File Wedge (#8171)** – Local audio delivery results in persistent DataBlock artifacts that block subsequent interactions. Partially addressed by PR #7654, but remaining in open state.
3. **Cron Task Cancellation During Config Save (#8225)** – Saving heartbeats or other config triggers cancellation of running cron tasks, leaving them marked as `cancelled` without warnings. No dedicated fix PR yet.

### Medium Severity
- **Window Project Deletion Failure (#8206)** – On Windows, deleting a project after its log file is written raises WinError 5, preventing clean removal. Requires investigation into file handle cleanup.
- **AC P Plugin Loading Gap (#8222)** – The `qwenpaw acp` server never instantiates `PluginLoader`, so installed plugins are invisible in ACP sessions. Related to broader plugin integration gaps.
- **Host Navigation Policy (#8223)** – Proposed enhancement for shared navigation policies across sidebar and settings; still in early review stage.

### Lower Priority
- **Model Capability Filtering (#8190)** – Text-only models incorrectly accepting images; being addressed indirectly via improved metadata resolution.
- **Image Routing Hang (#8088)** – Legacy image-to-chat workflow enters infinite tiling loop; older issue, likely resolved by general robustness improvements.

## 6. Feature Requests & Roadmap Signals

| Feature | Status | Notes |
|---------|--------|-------|
| **Durable Transcript History** | ✅ Implemented (PR #7931) | Per-session SQLite storage with pagination; enables reliable chat refresh and history browsing. |
| **Python Code Mode** | ✅ In Development (PR #8224) | Experimental tool for orchestrating Python script execution within the agent. May become a first-class feature in v2.3+. |
| **Host Navigation Policies** | ✅ In Review (PR #8230) | Shared navigation policy for focused deployments; could reduce UI clutter in specialized environments. |
| **Marketplace Presets** | ✅ Partial (PR #8233) | Added CommandCode and Hugging Face presets; full catalog expansion planned for v2.3. |
| **Background Task Callbacks** | ✅ In Progress (Issue #7056) | Request for automatic notification when background tasks complete; related to #8228 timeout prevention. |
| **Active Model/Heartbeat Preservation** | ✅ Fixed (PR #8226) | Ensures runtime state survives agent.json reconstruction. |
| **Deep Link Resolution** | ✅ Fixed (PR #8209) | Direct `/chat/<id>` links now correctly resolve to agent sessions. |

The roadmap appears to prioritize **stability** (timeout fixes, encoding support, plugin integration) followed by **productivity enhancements** (Python code mode, durable transcripts) and **platform expansion** (cross-language support, mobile/web compatibility).

## 7. User Feedback Summary

- **Performance Concerns**: Users report frequent 30-second timeout errors when chat history grows beyond 10 MB due to base64-encoded file/screenshot payloads. This is a recurring pain point affecting productivity.
- **Cross-Platform Issues**: Windows users specifically struggle with project deletion (WinError 5) and plugin loading in ACP contexts. These are blocking smooth deployment for enterprise teams.
- **Feature Demand**: Developers express interest in more granular control over theme customization (plugin-facing theme extensions) and clearer notification mechanisms for background task completions.
- **Usability Gaps**: The "Open in browser" button frequently fails silently on external HTML files, reducing developer convenience. Clearer error messaging would improve troubleshooting.
- **Positive Feedback**: The introduction of durable transcript history and Python Code Mode has been well-received, with users noting improved chat flow and ability to run scripts directly within the agent.

Overall sentiment is positive regarding recent stability improvements, but frustration exists around performance bottlenecks and platform-specific edge cases.

## 8. Backlog Watch

| Issue | Status | Priority | Action Needed |
|-------|--------|----------|---------------|
| **#8015** – Custom Skill/Plugin Marketplace Source Support | OPEN | High | Ensure first-class marketplace integration; consider adding official mirrors. |
| **#8206** – Windows Project Deletion Fails | OPEN | High | Investigate file handle cleanup; test on multiple Windows configurations. |
| **#8222** – AC P Plugin Loading Gap | OPEN | Medium | Complete implementation of `PluginLoader`

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-10-14

---

## 1. Today's Overview

ZeroClaw remains a highly active open-source project, with 25 issues and 50 pull requests updated in the last 24 hours. No new releases were cut today, but the repository shows sustained momentum across runtime, gateway, channels, and the ZeroCode TUI. The dominant themes this cycle are cost-observability fixes, prompt-cache efficiency, session-store correctness, and plugin-install robustness — all signs of a project maturing beyond rapid feature velocity into hardening and operational reliability.

---

## 2. Releases

*No new releases today.*

---

## 3. Project Progress

Six PRs were merged or closed today (the full set is larger; the table below shows the most visible ones):

| PR | Title | What Advanced |
|---|---|---|
| [#9453](https://github.com/zeroclaw-labs/zeroclaw/pull/9453) (CLOSED) | Estimate context usage when provider omits token counts | Fixes the ZeroCode context meter for local OpenAI-compatible providers (llama.cpp) that omit `usage` blocks. |
| [#11419](https://github.com/zeroclaw-labs/zeroclaw/pull/11419) (CLOSED) | Make secret key/value maps editable in ZeroCode and dashboard | Allows MCP server `env` to be added from the UI; backend already encrypted and passed it to stdio children. |

Additional closed/merged PRs not in the top-20 by comment count likely include dependency bumps and smaller fixes — the merged/closed count of 6 indicates a steady drip of integrations landing on `master`.

---

## 4. Community Hot Topics

### 🔥 Most Commented Issues

1. **[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)** — *SQLite session backend rewrites `created_at` of every message on each turn* (8 comments, P1, S2)
   - **Underlying need:** Users rely on per-message timestamps for debugging and cost attribution. The current rewrite behaviour destroys that data silently. The 8 comments suggest this is a contentious correctness bug with a non-obvious fix path.

2. **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** — *Runtime and gateway delivery tracker for v0.8.6 / v0.9.0* (6 comments, P2)
   - **Underlying need:** This is the canonical roadmap tracker for Phase 2 (runtime) and Phase 3 (gateway separation) work. Community members are using it to coordinate and track remaining gaps against [RFC #5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574).

3. **[#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204)** — *OpenRouter spend shows $0.00 and all tokens classified "free tok"* (5 comments, P1, S2)
   - **Underlying need:** Cost observability is broken for OpenRouter users. After ~90 requests / ~2.1M tokens, the dashboard reports zero cost. This is a critical blocker for any user billing or budgeting against OpenRouter.

4. **[#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573)** — *Bind gateway pairing tokens to roster users for scoped remote principals* (5 comments, P2)
   - **Underlying need:** Security-hardening feature. Users want pairing tokens scoped to specific roster users rather than universally valid, reducing the blast radius of a leaked token.

5. **[#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613)** — *Cost ledger drops provider's `total_tokens`, under-counting reasoning tokens* (4 comments, P2, S2)
   - **Underlying need:** For users on OpenAI-compatible providers that report reasoning tokens only inside `total_tokens` (e.g., Gemini via proxy), the cost ledger silently under-counts every turn.

---

## 5. Bugs & Stability

Bugs reported or actively updated today, ranked by severity:

| Severity | Issue | Title | Fix PR? |
|---|---|---|---|
| **S1** | [#11179](https://github.com/zeroclaw-labs/zeroclaw/issues/11179) | Flaky test: `pending_park_retry_respects_pending_pool_cap` crosses second boundary | Yes — [#11673](https://github.com/zeroclaw-labs/zeroclaw/pull/11673) makes the filesystem dispatch-loop test load-bearing |
| **S1** | [#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777) | thinking/effort config flips between turns, rewrites cached history segment (Anthropic) | No open fix PR yet |
| **S2** | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite rewrites `created_at` on every turn | No open fix PR yet |
| **S2** | [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter cost shows $0.00, all tokens "free tok" | No open fix PR yet |
| **S2** | [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | `model_routing_config upsert_agent` rewrites entire config, fabricates profiles | No open fix PR yet; related PR [#11720](https://github.com/zeroclaw-labs/zeroclaw/pull/11720) exposes scenario routing requirements |
| **S2** | [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) | `cost.warn_at_percent` warnings ignored by runtime | No open fix PR yet |
| **S2** | [#11696](https://github.com/zeroclaw-labs/zeroclaw/issues/11696) | System prompt rebuilt from disk every turn, busts prompt cache | No open fix PR yet |
| **S2** | [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | Trimming a long conversation permanently deletes older turns | No open fix PR yet |
| **S2** | [#11706](https://github.com/zeroclaw-labs/zeroclaw/issues/11706) | `max_image_turns` never releases the vision route | No open fix PR yet |
| **S2** | [#11709](https://github.com/zeroclaw-labs/zeroclaw/issues/11709) | Upgraded sockets outlive gateway reload, serve retired instance | No open fix PR yet |
| **S2** | [#11713](https://github.com/zeroclaw-labs/zeroclaw/issues/11713) | Telegram ignores `edited_message` updates | No open fix PR yet |
| **S2** | [#11708](https://github.com/zeroclaw-labs/zeroclaw/issues/11708) | `model_routing_config` omits required arguments from tool schema | No open fix PR yet |
| **S3** | [#11654](https://github.com/zeroclaw-labs/zeroclaw/issues/11654) | JPEG admission copies input and parses header before decode-memory cap check | No open fix PR yet |
| **S3** | [#11675](https://github.com/zeroclaw-labs/zeroclaw/issues/11675) | ACP session store re-stamps `created_at` on trimmed transcript replacement | No open fix PR yet |
| **S3** | [#11694](https://github.com/zeroclaw-labs/zeroclaw/issues/11694) | ZeroCode Cost tab mixes UTC and local-day totals without labels | No open fix PR yet |
| **S3** | [#11703](https://github.com/zeroclaw-labs/zeroclaw/issues/11703) | Deferred tool activation via `tool_search` changes system prompt, busts cache | No open fix PR yet |
| **S3** | [#11710](https://github.com/zeroclaw-labs/zeroclaw/issues/11710) | Truncated workspace file tells agent to read it while prompt forbids it | No open fix PR yet |
| **S3** | [#11704](https://github.com/zeroclaw-labs/zeroclaw/issues/11704) | Channel/agent system prompts still carry date, bust cache at midnight | No open fix PR yet |

**Key observation:** Several S2 bugs cluster around **cost observability** (#11204, #11613, #10950, #11694) and **session-store correctness** (#11420, #11675, #11711). These are likely related and may share root causes in the `CostTracker` and `AcpSessionStore`/SQLite rewrite paths. The flaky test (#11179) already has a fix PR (#11673) that strengthens the test rather than the engine — a pragmatic approach but one that may not silence the underlying timing issue.

---

## 6. Feature Requests & Roadmap Signals

| Type | Item | Signal |
|---|---|---|
| **Roadmap** | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — v0.8.6 / v0.9.0 delivery tracker | Canonical source of truth for upcoming releases; references [RFC #5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) |
| **Feature** | [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) — Bind gateway pairing tokens to roster users | Security-hardening; foundation dependencies (#10248, #10259) already merged |
| **Feature** | [#11724](https://github.com/zeroclaw-labs/zeroclaw/issues/11724) — Make per-pane session cap configurable in ZeroCode | Currently hardcoded to 8; users want it tunable |
| **Proposal** | [#11705](https://github.com/zeroclaw-labs/zeroclaw/issues/11705) — Plazmi example for per-agent MCP grants | Community-contributed example exercising `mcp_bundles` + tool controls |
| **Docs** | [#11207](https://github.com/zeroclaw-labs/zeroclaw/issues/11207) — Document bounded Tsubasa custom-provider setup | Scope discussion; would fill a gap in the custom-provider guide |
| **PR** | [#11573](https://github.com/zeroclaw-labs/zeroclaw/pull/11573) — Drag session rows and switch by number in ZeroCode | Large UI/UX enhancement for the Sessions panel |
| **PR** | [#11633](https://github.com/zeroclaw-labs/zeroclaw/pull/11633) — Open local file paths from ZeroCode transcript | Extends link recognition beyond `http(s)://` |
| **PR** | [#11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261) / [#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) / [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) — Plugin install/update/replace + WASM host in release artifacts | Major plugin-system hardening; stacked PRs targeting v0.8.6 |
| **PR** | [#11656](https://github.com/zeroclaw-labs/zeroclaw/pull/11656) — Apply configured `firejail_args` to Firejail wrapper | Security fix; previously the config was silently ignored |
| **PR** | [#11650](https://github.com/zeroclaw-labs/zeroclaw/pull/11650) — Wait out Telegram `retry_after` instead of retrying into 429 | Channel reliability fix |

**Predicted next-version candidates:** The plugin install/update flow (#11261/#11262/#11347) and the ZeroCode session-dragging UI (#11573) are the largest feature PRs currently open and are likely to land in v0.8.6 or v0.9.0.

---

## 7. User Feedback Summary

**Dominant pain points extracted from open issues:**

1. **Cost observability is broken for several providers.** OpenRouter users see $0.00 spend after thousands of tokens (#11204). Gemini-via-OpenAI-compatible users are under-counted because `total_tokens` is discarded (#11613). The ZeroCode Cost tab mixes UTC and local-day totals without labels (#11694). Together these make it very difficult for users to budget or audit their spend.

2. **Session-store correctness is silently degrading.** The SQLite backend rewrites `created_at` on every turn (#11420), the ACP store does the same on trim (#11675), and trimming a conversation permanently deletes older turns (#11711). Users who rely on session history for debugging or continuity are losing data without warning.

3. **Prompt-cache busting is costing real money.** Three separate issues (#11696, #11703, #11704) describe how the system prompt is rebuilt from disk or changed on every turn, defeating Anthropic/OpenAI prompt caching. For users with long-running sessions, this is a direct cost increase.

4. **Configuration mutations are lossy.** The `model_routing_config upsert_agent` action round-trips the entire `config.toml` through a defaulted struct, fabricating risk/runtime profiles and dropping fields (#11606). Users who run it to change a single provider end up with a corrupted config.

5. **Channel gaps.** Telegram ignores edited messages entirely (#11713), and the Telegram sender retries into 429 rate limits instead of backing off (#11650 — fix PR open).

6. **ZeroCode UX friction.** The per-pane session cap is hardcoded to 8 (#11724), file paths in transcripts aren't clickable (#11633), and the context meter is blank for local providers (#9453 — now

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*