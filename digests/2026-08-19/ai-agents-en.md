# OpenClaw Ecosystem Digest 2026-08-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-19 00:40 UTC

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

User Safety: safe

---

## Cross-Ecosystem Comparison



Here is the cross-project comparison report based on the community digest data for 2026-08-19.

---

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-19
**Scope:** 13 Open-Source Personal AI Assistant / Agent Projects

---

### 1. Ecosystem Overview
The personal AI assistant open-source landscape is experiencing a period of rapid diversification and architectural consolidation. We are observing a clear shift from monolithic chatbot frameworks to modular, agent-centric runtimes that emphasize tooling standardization (primarily around the Model Context Protocol - MCP), sandboxed execution, and persistent state management. Projects are differentiating along axes of user interface (WebUI vs. Terminal vs. Desktop), deployment target (cloud-native vs. edge/local), and domain specialization (developer tools vs. personal productivity). The community is actively stabilizing core execution loops while racing to establish dominant patterns for background task handling, memory consolidation, and multi-channel integration.

---

### 2. Activity Comparison
The table below summarizes development activity, release cadence, and project health based on the last 24 hours of GitHub data.

| Project | Issues (Active/Open) | PRs (24h Activity) | Latest Release | Health / Trajectory |
| :--- | :--- | :--- | :--- | :--- |
| **ZeroClaw** | 50 updates | 50 updates | None (Architectural) | **Very High** – Focused on architectural refinement (Goal mode RFC) and memory management. |
| **CoPaw** | 46 updates | 50 updates | None (v2.1.0 beta) | **High / Stabilizing** – Intense activity focused on bug fixes, MCP/OAuth hardening, and channel resilience. |
| **Hermes Agent** | 50 updates | 50 updates | **v0.20.4** (Patch) | **Steady State** – Balanced maintenance; patch release consolidates ~74 PRs; high community chatter on CPU/stability. |
| **IronClaw** | 22 (16 open) | 39 (15 merged) | **1.3.0-rc.2** | **High Velocity** – Strong momentum; release fixes extension crashes; heavy focus on observability and design systems. |
| **NanoClaw** | 3 open | 38 updates | None | **High / Engineering** – Robust backend refactoring (database layer, async drivers); low community chatter. |
| **NanoBot** | 9 updates | 26 updates | None (v0.x) | **Healthy Momentum** – High feature velocity (WebUI, search); critical resource-limit bugs remain open. |
| **LobsterAI** | 9 open | 19 updates | **2026.8.18** | **Active Dev** – Major DSH engine integration; development active but community support backlog is heavily loaded. |
| **Moltis** | Hot topics | 5 merged | **20260818.08** | **Rapid Progress** – High contributor concentration; shipping file management, sandbox escapes, and IoT connectors. |
| **PicoClaw** | 6 open | 4 updates | v0.3.1 | **Incremental** – Steady pace; focus on WebUI support and IRC protocol handling. |
| **NullClaw** | – | – | – | **No Activity** |
| **TinyClaw** | – | – | – | **No Activity** |
| **ZeptoClaw** | – | – | – | **No Activity** |

---

### 3. OpenClaw's Position
OpenClaw serves as the core reference implementation and safety baseline for the ecosystem. 

*   **Advantages vs. Peers:** Its primary advantage lies in its role as a stable, safety-evaluated anchor. While projects like **ZeroClaw** and **CoPaw** push rapid feature cycles, OpenClaw provides the conservative baseline that enterprise and safety-critical deployments require. It avoids the "beta fatigue" evident in projects still stabilizing major releases (e.g., CoPaw's v2.1.0 beta cycle).
*   **Technical Approach Differences:** OpenClaw likely prioritizes deterministic execution paths and strict sandboxing over the "plug-and-play" provider aggregation seen in **NanoBot** or the heavy desktop runtime dependencies of **Hermes Agent**. 
*   **Community Size Comparison:** As the reference project, it commands the implicit trust of downstream integrators (like **LobsterAI**), but faces community engagement pressure from more vocal, feature-driven forks like **IronClaw** and **Moltis**, which are driving user-facing mindshare through rapid UI/UX iterations.

---

### 4. Shared Technical Focus Areas
Several critical technical requirements are emerging simultaneously across multiple active projects, indicating ecosystem-wide bottlenecks or standardization needs:

*   **Model Context Protocol (MCP) Maturity:** **NanoBot**, **Hermes Agent**, **CoPaw**, and **IronClaw** are all actively merging PRs related to MCP. The shared focus is on schema budgeting (**NanoBot**), health probe session reuse (**Hermes**, **CoPaw**), and catalog manifest validation (**IronClaw**). The ecosystem is moving from "can we connect?" to "can we connect reliably and securely?"
*   **WebUI & Desktop Convergence:** **PicoClaw** (#806), **NanoBot** (#5420), and **IronClaw** are heavily prioritizing browser-based or desktop-hybrid UIs. The demand for turn observability, follow-up suggestions, and persistent project agents indicates a shift toward richer, stateful web applications rather than simple terminal wrappers.
*   **Security, Sandbox, and Resource Governance:** **NanoBot** (default workspace restrictions, resource limits), **CoPaw** (shell evasion checks, token rotation), and **Moltis** (Podman escape hatches) highlight a shared, urgent need for hardened execution environments. Runaway subprocesses and credential pool staleness are common failure points.
*   **Memory & State Durability:** **ZeroClaw** (memory key conversations), **Hermes Agent** (skills index freshness, idle compaction), and **NanoBot** (lossless consolidation chunks) are all grappling with how to persist, compact, and reliably recall state without performance degradation.

---

### 5. Differentiation Analysis
Projects are carving out distinct niches based on target user and architectural philosophy:

*   **The Desktop-Cloud Hybrid (Hermes Agent, CoPaw):** Focus on persistent background agents, NixOS/desktop deployment, and complex multi-provider routing. Targeting power users and developers who need reliable, always-on context.
*   **The Developer Toolchain / Web Native (NanoBot, NanoClaw):** Emphasis on MCP schemas, metasearch aggregation, and WebUI observability. Targeting developers looking for a highly composable, API-first agent runtime.
*   **The Personal Digital Hub (Moltis, LobsterAI):** Moltis is aggressively pursuing local file system management and IoT integrations (Tesla Fleet API). LobsterAI is focusing on system-level notifications and enterprise-grade cowork session exports. These target users looking for an assistant that integrates with their physical and local digital life.
*   **The High-Reliability Observer (IronClaw, ZeroClaw):** Heavy focus on deterministic run outcomes, evidence-based bug reporting (timings in artifacts), and profile-agnostic state migration. Targeting operators who need to audit agent behavior and ensure automation reliability.

---

### 6. Community Momentum & Maturity
The ecosystem can be divided into three distinct activity tiers:

*   **Tier 1: Rapid Iteration (High Risk/Reward)**
    *   *ZeroClaw, CoPaw, IronClaw, LobsterAI*
    *   *Characteristics:* High PR/Issue volume (39-50 updates), recent major releases or beta cycles, active maintainer intervention. These projects are moving fast but may suffer from integration bugs (e.g., CoPaw's session cancellation bugs, IronClaw's manifest bugs).
*   **Tier 2: Steady Progress (Balanced)**
    *   *NanoBot, Hermes Agent, Moltis*
    *   *Characteristics:* Consistent merge velocity, patch releases, clear roadmaps. They balance feature expansion with stability fixes. Hermes Agent is notable for its balanced, steady-state maintenance cycle.
*   **Tier 3: Stabilizing / Niche**
    *   *PicoClaw*
    *   *Characteristics:* Lower activity, focused on foundational features (WebUI, IRC). Likely preparing for a minor release (v0.4.x).
*   **Tier 4: Inactive**
    *   *NullClaw, TinyClaw, ZeptoClaw*
    *   *Characteristics:* No activity in the last 24 hours; likely dormant or superseded.

---

### 7. Trend Signals
For AI agent developers and technical decision-makers, the following trends are critical:

1.  **The "MCP First" Mandate:** MCP is no longer an optional extra; it is the primary interface for tool discovery and execution. Projects that fail to implement robust MCP health checks and schema validation (e.g., Hermes #89576, IronClaw #7727) are seeing critical integration failures.
2.  **From Chat to "Turns" (Stateful UI):** The push for "turn observability" and "follow-up suggestions" (NanoBot, IronClaw) indicates that users expect the agent UI to behave more like a collaborative workspace than a linear chat log. Developers should plan for stateful, multi-step interaction patterns.
3.  **Durability as a Feature:** Users are demanding that agent state (memory, profiles, skills) survives restarts, upgrades, and profile switches. Projects focusing on "persistent project agents" (Hermes) and "profile-agnostic state" (IronClaw) are addressing a fundamental expectation for production-grade assistants.
4.  **Local-First & IoT Integration:** The rapid adoption of Podman sandboxing (Moltis) and vehicle/IoT APIs suggests that the next frontier for personal agents is interacting with the user's local environment and physical devices, not just cloud APIs.
5.  **Security Hardening is Table Stakes:** The ecosystem is standardizing on strict workspace defaults, resource limits, and shell evasion checks. Any agent framework that allows unbounded subprocess execution or weak credential handling will face immediate community pushback and trust erosion.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑08‑19**

---

### 1. Today’s Overview  
NanoBot remains highly active with **26 pull‑request updates** and **9 issue updates** in the last 24 h. No new releases were published, but several high‑priority bug fixes and feature enhancements were merged or opened. The community is focused on improving stability (e.g., resource limits, proxy handling) and expanding WebUI capabilities (turn observability, follow‑up suggestions). Overall, the project shows healthy momentum, though some critical issues (e.g., resource‑limit abuse) still require attention.

---

### 2. Releases  
No new releases were published on 2026‑08‑19, so there are no version changes, breaking changes, or migration notes to report.

---

### 3. Project Progress  
| PR # | Title | Status | Highlights |
|------|-------|--------|------------|
| **#5435** | Support legacy socks// proxy URLs for custom OpenAI‑compatible providers | **Merged** | Fixed proxy parsing bug (#5425). Added tests and updated docs. |
| **#5420** | feat(webui): add turn observability and safe recovery | **Open** | Introduces per‑turn UI surface, usage metrics, and graceful gateway restart handling. |
| **#5408** | feat(webui): add follow‑up suggestions | **Open** | Adds context‑aware follow‑up prompts in the WebUI. |
| **#5257** | fix(agent): bound sustained‑goal continuation when the turn goes idle | **Open** | Addresses goal‑state leakage when a turn becomes idle. |
| **#5234** | feat(agent): integrate mst‑python as a metasearch provider | **Open** | Adds multi‑engine search aggregation via RRF. |
| **#5212** | feat: add MiniMax music guidance | **Open** | Enhances music generation tooling. |
| **#4880** | fix(security): default restrict_to_workspace to True (#4796) | **Merged** | Tightens default workspace restrictions. |
| **#5434** | fix(mattermost): ignore system posts | **Merged** | Prevents system messages from being treated as user input. |
| **#5388** | feat(agent): budget model‑visible MCP schemas | **Open** | Adds optional byte‑budgeting for MCP schemas. |
| **#5379** | fix(memory): preserve full consolidation input | **Open** | Replaces lossy truncation with lossless bounded chunks. |
| **#5431** | fix(agent): report background task failures | **Open** | Adds lifecycle‑aware error logging for background tasks. |
| **#5430** | fix(agent): release completed task groups | **Open** | Cleans up empty task groups after dispatch completion. |
| **#5415** | fix(gateway): adopt Windows venv child process | **Open** | Improves Windows gateway PID handling. |

**Key take‑away:** The team prioritized bug fixes that improve security, stability, and resource management, while simultaneously advancing WebUI and agent‑skill features.

---

### 4. Community Hot Topics  
| Issue/PR | Link | Activity | Core Need |
|----------|------|----------|-----------|
| **#5149** – no audio on WhatsApp | <https> | 6 comments, 0 reactions | Users need reliable media handling in WhatsApp integration. |
| **#4797** – no resource limits on shell subprocesses | <https> | 1 comment | Prevent runaway subprocesses that can exhaust system resources. |
| **#5429** – AgentLoop does not retrieve exceptions from background tasks | <https> | 0 comments | Robust error reporting for background operations. |
| **#5428** – AgentLoop retains empty active‑task groups | <https> | 0 comments | Clean task‑group lifecycle management. |
| **#5425** – legacy socks// proxy URLs for custom providers | <https> | 0 comments | Proxy support for custom OpenAI‑compatible providers. |
| **#5421** – idle compaction provider state | <https> | 0 comments | Clarify state preservation during idle compaction. |
| **#5435** – PR fixing #5425 | <https> | 0 comments | Immediate resolution of proxy bug. |
| **#5420** – WebUI turn observability | <https> | 0 comments | Better UI feedback and safe recovery. |
| **#5408** – WebUI follow‑up suggestions | <https> | 0 comments | Enhancing conversational UX. |

**Analysis:** The community is split between urgent stability/security fixes (e.g., #4797, #5149) and feature‑driven UI improvements (#5420, #5408). The rapid merge of #5435 shows responsiveness to critical proxy issues.

---

### 5. Bugs & Stability  
| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **Critical** | #4797 – No resource limits on shell subprocesses | #4880 (security fix) | **Open** – still needs a dedicated PR to enforce limits. |
| **High** | #5149 – no audio on WhatsApp | None yet | **Open** – awaiting a fix. |
| **Medium** | #5429 – AgentLoop background‑task exceptions not reported | #5431 (background‑task error reporting) | **Open** – implementation pending. |
| **Medium** | #5428 – AgentLoop retains empty active‑task groups | #5430 (release completed task groups) | **Open** – implementation pending. |
| **Low** | #5425 – legacy socks// proxy URLs | #5435 (merged) | **Closed** – resolved. |

**Stability Outlook:** While several high‑severity bugs remain open, the team has addressed the proxy issue and is working on background‑task error handling. The resource‑limit bug (#4797) is still critical and should be prioritized.

---

### 6. Feature Requests & Roadmap Signals  
- **WebUI Enhancements**: Turn observability (#5420) and follow‑up suggestions (#5408) suggest a focus on richer UI interactions in the next release.  
- **Search & Knowledge**: Integration of mst‑python (#5234) and budget‑visible MCP schemas (#5388) indicate a push toward more powerful, cost‑aware search capabilities.  
- **Memory & Persistence**: The memory consolidation fix (#5379) and the question about idle compaction (#5421) point to a roadmap that includes persistent, token‑efficient memory.  
- **Security & Compliance**: The default workspace restriction change (#4880) and the resource‑limit issue (#4797) reflect a growing emphasis on secure, sandboxed operation.

**Prediction:** Version 0.7 (or the next major release) will likely ship WebUI turn observability, follow‑up suggestions, and the mst‑python search provider, while also tightening resource limits and workspace defaults.

---

### 7. User Feedback Summary  
- **Media Handling**: Users on WhatsApp report missing audio messages (#5149).  
- **Resource Management**: Concerns about runaway subprocesses (#4797).  
- **Error Visibility**: Background task failures are not surfaced (#5429).  
- **UI Experience**: Desire for clearer turn boundaries and follow‑up prompts (#5420, #5408).  
- **Security**: Need for stricter workspace defaults (#4880).  

Overall satisfaction is high for core agent functionality, but users are actively seeking improvements in media support, UI clarity, and system safety.

---

### 8. Backlog Watch  
| Issue/PR | Link | Age | Why it matters |
|----------|------|-----|----------------|
| **#5149** – no audio on WhatsApp | <https> | 22 days | Critical for WhatsApp integration users. |
| **#4797** – no resource limits on shell subprocesses | <https> | 43 days | Security risk; potential for denial‑of‑service. |
| **#5429** – AgentLoop background‑task exceptions not reported | <https> | 1 day | Improves debugging and reliability. |
| **#5428** – AgentLoop retains empty active‑task groups | <https> | 1 day | Memory leak risk in prolonged sessions. |
| **#5421** – idle compaction provider state | <https> | 1 day | Clarifies state preservation; important for persistence. |

Maintainers should prioritize closing #5149 and #4797, and expedite the implementation of #5429/#5428 fixes to maintain system stability.

---

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑08‑19)**  

---

### 1. Today’s Overview  
The Hermes Agent repository is in a steady‑state release cycle. In the last 24 h the issue tracker saw **50 updates** (40 open, 10 closed) and the pull‑request queue recorded **50 updates** (40 open, 10 merged/closed). A **patch release v0.20.4 (v2026.8.18)** was published on 18 Aug 2026, consolidating roughly 74 merged PRs into a stable tag for Docker images, hosted deployments and fresh installs. Activity is high but balanced: the majority of open items are bugs or performance regressions that have active maintainer interest, indicating a healthy, responsive community.

---

### 2. Releases  
**v0.20.4 (v2026.8.18) – 18 Aug 2026**  
*Type:* Patch (no breaking changes)  
*Highlights*  
- Rolls up ~74 PRs merged since v0.20.3, providing a clean, tested snapshot for downstream consumers (Docker, hosted services, fresh installs).  
- No explicit migration notes; the change is purely additive and backward‑compatible.  

---

### 3. Project Progress  
- **Merged / Closed PRs (10)** – the most notable fixes merged in the last day:  
  * #89571 – **cron due‑scan** now respects a 120 s grace window for one‑shot jobs, preventing premature dispatch.  
  * #89581 – **MCP health probe** re‑uses the existing live HTTP session, eliminating session‑eviction bugs on Slack‑style MCP hosts.  
  * #89584 – **WebSocket transport hardening** (pending close, fast redial, keep‑alive tuning) reduces gateway wedging after a ping timeout.  
  * #89592 – **Desktop skin persistence**: backend‑provided theme files now survive app restarts.  
  * #89567 – **Persistent Desktop project agents**: a durable conversation per explicit Desktop Project, preserving context across restarts.  

- **Open PRs (40)** – many focus on UI/UX refinements (connection picker, terminal decoding), stability (Windows path handling, cron due‑scan), and new capabilities (multi‑question `clarify` tool, Pin Seeker MCP integration).  

Overall, the project is advancing both **stability** (bug‑fixes, Windows overhaul) and **feature enrichment** (multi‑question clarification, richer MCP catalog).

---

### 4. Community Hot Topics  

| Issue / PR | Comments | 👍 | Link | Core Need |
|------------|----------|----|------|-----------|
| **#66616** – *Skills index is stale or degraded* (54 cmt) | 54 | 0 | <https://github.com/nousresearch/hermes-agent/issues/66616> | Automated freshness probe failing; index age exceeds 26 h limit, breaking Skills Hub look‑ups. |
| **#88275** – *Renderer process burns 40‑70 % CPU at idle (macOS Intel)* (9 cmt) | 9 | 0 | <https://github.com/nousresearch/hermes-agent/issues/88275> | Thermal throttling on macOS desktop builds; high idle CPU consumption. |
| **#18885** – *Allow memory‑provider tools in cron jobs via `allow_memory` flag* (5 cmt) | 5 | 0 | <https://github.com/nousresearch/hermes-agent/issues/18885> | Need for periodic autonomous maintenance (dedup, trust‑score recalibration) on long‑running memory stores. |
| **#89576** – *Desktop MCP health probe opens a second HTTP session, evicting the live one* (1 cmt) | 1 | 0 | <https://github.com/nousresearch/hermes-agent/issues/89576> | Health‑check logic incorrectly replaces an existing live MCP session, breaking Slack‑style integrations. |
| **#89579** – *Startup notification to home channel not sent after server reboot* (1 cmt) | 1 | 0 | <https://github.com/nousresearch/hermes-agent/issues/89579> | Reliability of notification delivery after unclean restarts (e.g., power‑cycle). |

**Analysis** – The most discussed issue (#66616) points to a **data‑freshness pipeline problem** that affects downstream skill consumption; the community is eager for a fix. Performance‑related complaints (#88275) suggest a **renderer‑CPU hotspot** on macOS Intel that may require profiling and optimisation. Memory‑provider automation (#18885) reflects a desire for **self‑healing state management** in long‑running agents.

---

### 5. Bugs & Stability  

| Severity | Issue | Symptoms / Impact | Fix PR (if any) | Link |
|----------|-------|-------------------|----------------|------|
| **P2** | #89576 – Desktop MCP health probe opens a new session, evicting the live one | Slack‑style MCP hosts lose their live session after health‑check, causing downstream tool failures. | #89581 (re‑use live session) | <https://github.com/nousresearch/hermes-agent/issues/89576> |
| **P2** | #89579 – Startup notification not sent after reboot (Telegram) | Bot never announces its presence after a clean power‑cycle, breaking user expectations. | None yet (open) | <https://github.com/nousresearch/hermes-agent/issues/89579> |
| **P2** | #89346 – Shared primary profile routes reload session history after #88734 | Split sessions appear when a routed profile reads from the root DB, causing inconsistent conversation state. | None yet (open) | <https://github.com/nousresearch/hermes-agent/issues/89346> |
| **P2** | #89111 – Approval prompts time out on remote Windows desktop clients | Users cannot approve protected file changes (e.g., `SOUL.md`) when using Windows desktop client via gateway. | None yet (open) | <https://github.com/nousresearch/hermes-agent/issues/89111> |
| **P3** | #89546 – Desktop hover close button shown on persistent `SESSIONS | BOTS` tabs | Accidental clicks may close navigation tabs, harming UI usability. | None yet (open) | <https://github.com/nousresearch/hermes-agent/issues/89546> |
| **P3** | #82816 – Session auto‑title fails 100 % on OpenAI‑compatible providers rejecting `response_format: json_schema` | Automatic session titling silently fails, preventing proper session naming. | #84948 (translate `response_format` for Anthropic) – partially addresses similar issue. | <https://github.com/nousresearch/hermes-agent/issues/82816> |
| **P3** | #89415 – Credential pool caches provider cooldown; stale `last_error_reset_at` prevents re‑probing after 429 | Provider may stay in a “exhausted” cooldown longer than needed, leading to unnecessary rate‑limit back‑off. | None yet (open) | <https://github.com/nousresearch/hermes-agent/issues/89415> |
| **P3** | #89516 – minimax‑oauth provider missing `api_key_env_vars`; wrong env var name in error messages | Users receive misleading instructions when credential resolution fails. | None yet (open) | <https://github.com/nousresearch/hermes-agent/issues/89516> |
| **P3** | #88895 – `gateway.error.log` grows without rotation; Slack Socket‑Mode reconnect spam (141 MB) | Log file bloat leads to disk usage issues and noisy logs. | None yet (open) | <https://github.com/nousresearch/hermes-agent/issues/88895> |
| **P2** | #66616 – Skills index stale (29.8 h old) | Skills Hub shows outdated data, breaking automated freshness probes. | No fix PR yet (still open) | <https://github.com/nousresearch/hermes-agent/issues/66616> |
| **P2** | #88275 – Renderer CPU 40‑73 % at idle (macOS Intel) | Thermal throttling, reduced battery life, possible instability. | No fix PR yet (open) | <https://github.com/nousresearch/hermes-agent/issues/88275> |

*Ranking* – Issues with **P2** severity and direct impact on core functionality (MCP health, notifications, approval prompts, index staleness) are the highest priority. Several have accompanying **fix PRs** that address the symptom (e.g., #89581, #89571) but the underlying root cause still needs verification.

---

### 6. Feature Requests & Roadmap Signals  

| PR | Type | Desired Capability | Likelihood for next release |
|----|------|--------------------|-----------------------------|
| **#89467** – *ask multiple independent questions in one `clarify` call* | Feature | Reduce round‑trips when agents need several clarifications. | High – aligns with “clarify” tool design; likely merged soon. |
| **#89592** – *persist backend skins across launches* | Bug/Fix | Ensure theme files survive app restarts. | High – directly impacts user experience; already in review. |
| **#89393** – *warn when DB journal mode is flipped to WAL* | Bug/UX | Prevent silent data‑integrity issues after manual DB changes. | Medium – useful for operators but low traffic. |
| **#84178** – *home‑manager Nix module* | Feature | Share common Nix code between Hermes and NixOS modules. | Medium – reflects ongoing Nix integration effort. |
| **#89567** – *persistent agents for Desktop projects* | Feature | Keep a resident agent per explicit Desktop Project, resuming stable sessions. | High – matches user demand for long‑running project contexts. |
| **#89583** – *add Pin Seeker to MCP catalog* | Feature | Provide a ready‑made MCP for GolfNow tee‑time lookup. | Medium – niche but useful for hobbyist agents. |
| **#89590** – *expose `max_retries` in agent‑facing `kanban create`* | Feature | Allow per‑task retry limits, overriding board defaults. | Medium – useful for fine‑grained task control. |
| **#89549** – *allow 1080p video generation in Grok Imagine* | Feature | Remove 720p clamp, enable 1080p i2v/t2v as documented. | Low – depends on upstream xAI API support. |
| **#89561** – *`hermes config set` cannot store composite values* | Bug | Enable shell/agent scripting of lists/mappings. | Low – technical limitation of current config parser. |

**Roadmap hint:** The presence of multiple **P2‑level bug fixes** (MCP health, WS transport, cron due‑scan) and a **feature‑rich PR** (#89467) suggests the upcoming **v0.21** release will likely consolidate stability improvements while exposing new multi‑question clarification and persistent project‑agent capabilities.

---

### 7. User Feedback Summary  

- **Stale Skills Index** – Users report that the automated freshness probe fails because the index ages beyond the 26 h limit, breaking skill look‑ups and automated workflows.  
- **High CPU on macOS Desktop** – macOS Intel users see the renderer process consuming 40‑70 % CPU at idle, causing thermal throttling and reduced performance.  
- **Memory‑Provider Automation** – Community wants built‑in support for periodic deduplication and trust‑score recalibration of memory stores via a per‑job `allow_memory` flag.  
- **Profile Identity Late‑Binding** – Multiplexed environments lack a single canonical point for profile identity, leading to inconsistent routing and storage.  
- **Bot Mode Cloud Alias Loss** – Bot mode drops per‑profile Cloud aliases after the connection‑registry becomes active, forcing users to re‑configure.  
- **MCP Health Probe Session Eviction** – The health‑check routine creates a new HTTP session each run, which expels the live session on hosts that permit only one session per token (e.g., Slack).  
- **Startup Notification After Reboot** – After a power‑cycle, the home‑channel notification is not sent, reducing situational awareness for operators.  
- **Approval Prompt Timeout on Windows** – Approvals for protected file changes do not propagate back to the remote gateway when using Windows desktop clients, causing workflow stalls.  
- **Gateway Log Bloat** – Unrotated `gateway.error.log` accumulates massive size due to repeated Slack Socket‑Mode reconnect tracebacks, impacting disk usage on production hosts.  
- **Credential Cooldown Staleness** – After a 429 response, the credential cooldown timestamp (`last_error_reset_at`) is not refreshed, preventing automatic re‑probing of usage limits.  

Overall sentiment is **mixed**: while the project is actively maintained and a stable patch release is available, several **recurring stability bugs** (CPU usage, index freshness, session handling) are causing noticeable friction for power users.

---

### 8. Backlog Watch  

| Issue / PR | Age (days) | Why it matters | Maintainer attention needed |
|------------|------------|----------------|----------------------------|
| **#66616** – Skills index stale | 33 | Core data pipeline; impacts any skill‑centric workflow. | Review cron job schedule, verify index freshness logic, consider tighter time‑window enforcement. |
| **#88275** – Renderer CPU burn | 2 | Directly affects user experience on macOS; may indicate a deeper rendering bottleneck. | Profile renderer loop, investigate Electron/Chromium version, possible GPU‑disable side effects. |
| **#89576** – MCP health probe session eviction | 0 | Breaks Slack‑style MCP integrations; high‑impact for bot operators. | Verify that the health‑check correctly re‑uses the existing session; ensure thread‑safety. |
| **#89579** – Startup notification after reboot | 0 | Reduces operator awareness after unclean restarts. | Check event‑emit logic on gateway start‑up; ensure notifications are sent on *any* launch. |
| **#89346** – Shared primary profile reloads session history | 1 | Leads to split sessions and inconsistent conversation state. | Confirm DB migration fix (#88734) correctly isolates profile‑specific state. |
| **#89549** – 1080p video generation clamp | 1 | Limits creative capabilities advertised in docs; user‑requested feature. | Validate upstream xAI API support for 1080p; consider dynamic resolution based on hardware. |
| **#89561** – `hermes config set` cannot store composite values | 1 | Hinders scriptable configuration; limits automation. | Review config parser implementation; may need a structured‑data format (JSON/YAML). |
| **#89516** – minimax‑oauth missing `api_key_env_vars` | 1 | Misleads users about required environment variables; hampers provider usage. | Add missing env‑var mapping; update error messages. |

**Takeaway:** The most critical open items are **#66616** (skills index) and **#88275** (renderer CPU), both showing sustained community interest and potentially high‑impact regressions. Maintainers should prioritize these while continuing to merge the steady stream of stability‑focused PRs (e.g., #89571, #89581, #89584).  

---  

*Prepared by the Hermes Agent analysis team – 2026‑08‑19.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑08‑19**

---

## 1. Today’s Overview  
The PicoClaw core team logged **6 open issues** and **4 recent PR updates** in the last 24 h. Activity is steady: only one issue was closed, while five remain open and actively discussed (average ≈ 8 comments per issue). No new stable releases were cut, but developers are iterating on UI enhancements, IRC handling, and configuration parsing. Overall project health appears **stable with incremental feature work**; the pace of contributions suggests a healthy community pipeline.

---

## 2. Releases  
- **No new versioned releases** were published in the last 24 h.  
- The latest published tag remains **v0.3.1** (commit `2cf030d2`).  

*No migration notes or breaking‑change announcements are required today.*

---

## 3. Project Progress  
**Closed PRs (today)**  
- **#1158** – *feat: add anthropic‑messages protocol for native Anthropic API format* (merged). This adds support for the `/v1/messages` endpoint, enabling native Anthropic‑compatible services to work out‑of‑the‑box.  
- **#3317** – *log prompt cache tokens in LLM response debug output* (merged). Improves visibility of token usage from caching providers such as Cloudflare AI Gateway.  

**Open PRs awaiting review**  
- **#3329** – *fix(line): warn on inert webhook_host / webhook_port instead of seeding them* (addresses Issue #3328).  
- **#3314** – *Fix: agent not able to execute shell command added to customAllowPatterns* (fixates a bug where deny patterns overrode allowlists).  

Merged work indicates ongoing efforts to (a) expand protocol support, (b) improve observability, and (c) tighten security/command‑allow handling.

---

## 4. Community Hot Topics  
| Issue | Status | Comments | Reactions | Link | Core Need |
|------|--------|----------|-----------|------|-----------|
| **#806** – Add WebUI support | OPEN | 9 | 👍 8 | <https://github.com/sipeed/picoclaw/issues/806> | Lower entry barrier for non‑technical users via a browser‑based UI. |
| **#3287** – Better support long messages in IRC | OPEN | 6 | 👍 0 | <https://github.com/sipeed/picoclaw/issues/3287> | Proper handling of multi‑line, >512‑byte IRC messages as single logical messages. |
| **#3301** – /clear & session auto‑compression fail on routed chats | OPEN (stale) | 4 | 👍 0 | <https://github.com/sipeed/picoclaw/issues/3301> | Ensure chat routing rules respect built‑in commands and compression. |
| **#3328** – `webhook_host`/`webhook_port` never read | OPEN (stale) | 1 | 👍 0 | <https://github.com/sipeed/picoclaw/issues/3328> | Config values should be consumed and validated; currently “dead” settings. |
| **#3339** – Antigravity generation returns 429 despite valid scopes | OPEN | 1 | 👍 0 | <https://github.com/sipeed/picoclaw/issues/3339> | Investigate quota‑related errors; possibly tie to model‑discovery bugs. |

**Analysis:**  
- UI‑centric issues dominate the conversation (#806, #3287), reflecting a push toward broader usability beyond terminal users.  
- Configuration and routing bugs (#3328, #3301) indicate gaps in the *dispatch* subsystem that need clearer documentation or runtime validation.  
- Provider‑specific errors (#3339) show that OAuth flow works but backend quota handling is opaque to users.

---

## 5. Bugs & Stability  
| Issue | Symptom | Severity* | Fix PR (if any) | Link |
|------|---------|-----------|-----------------|------|
| **#3292** – High CPU when input box gains focus | CPU spikes in web chat UI | **High** (performance regression) | **#3314** – added proper allow‑pattern handling (indirectly fixes command‑related hangs, not CPU) – no direct CPU fix yet | <https://github.com/sipeed/picoclaw/issues/3292> |
| **#3339** – Repeated 429 “Resource has been exhausted” | Generation failures despite valid credentials | **Critical** (service‑level error) | None yet reported; under investigation | <https://github.com/sipeed/picoclaw/issues/3339> |
| **#3301** – /clear & auto‑compression not honored on routed chats | Lost chat state, messages disappear | **Medium** | Planned in #3329 (warning about inert webhook settings) – not directly fixing /clear | <https://github.com/sipeed/picoclaw/issues/3301> |
| **#3292** CPU spike | Potential event‑loop thrash when rendering focus state | **Medium** | No dedicated PR; may require front‑end debounce or virtual‑scroll optimisation. | — |

\*Severity ranking follows: **Critical** (service‑wide outage), **High** (performance impact), **Medium** (functional degradation), **Low** (cosmetic).

---

## 6. Feature Requests & Roadmap Signals  
- **WebUI (Issue #806)** is explicitly marked as a *high‑priority roadmap* item. Given the number of comments and 👍 reactions, it is likely to be part of the next minor release (v0.4.x).  
- **IRC long‑message handling (Issue #3287)** appears as a *roadmap* enhancement; the maintainer notes that the TUI is “great for terminal users,” but “browser‑based UI is the most intuitive path for non‑tech users.” This aligns with the WebUI push, suggesting both may ship together.  
- **Config validation for webhook host/port (Issue #3328)** – The PR #3329 proposes a warning instead of silently seeding defaults, indicating an upcoming stabilisation of the channel‑config layer.  
- **Shell‑command allow‑list fix (Issue #3292’s related PR #3314)** – Already merged, showing that maintainers are actively tightening command‑execution security.

**Predicted next version focus:** UI overhaul (WebUI), improved IRC message coalescing, and more robust configuration parsing/validation.

---

## 7. User Feedback Summary  
- **Usability pain:** Non‑technical users struggle with the current TUI; they request a web UI to simplify instance management.  
- **IRC frustration:** Users encounter fragmented messages when long texts wrap; they want seamless message handling.  
- **Configuration opacity:** Advanced users who edit `channel_list.line.settings.webhook_*` find that changes have no effect, leading to confusion and perceived “dead” settings.  
- **Error clarity:** Generation failures with generic 429 messages are seen as unhelpful; users want clearer quota or rate‑limit diagnostics.  
- **Security assurance:** The recent allow‑pattern bug raised concerns that command restrictions may be ineffective, prompting demands for clearer logging/auditing.

Overall sentiment is **mixed but leaning positive**—the community appreciates recent protocol extensions but is eager for concrete UI improvements and clearer error messaging.

---

## 8. Backlog Watch  
| Item | Age (days) | Status | Why it matters |
|------|------------|--------|----------------|
| **#806 – WebUI** | 173 days (opened 2026‑02‑26) | OPEN, high comment volume (9) | Core to expanding user base; stalled without a maintainer commit. |
| **#3328 – webhook_host/port not read** | 8 days (opened 2026‑08‑11) | OPEN, low attention (1 comment) | Prevents silent mis‑configuration; missing validation can cause runtime failures. |
| **#3339 – Antigravity 429** | 2 days (opened 2026‑08‑17) | OPEN, no reactions | Service‑level error that could erode trust in the platform. |
| **#3292 – High CPU on input focus** | 26 days (opened 2026‑07‑24) | OPEN, no reactions | Performance regression affecting UI responsiveness. |
| **#3301 – /clear & compression on routed chats** | 22 days (opened 2026‑07‑29) | OPEN (stale) | Functional bug that could cause data loss in multi‑channel setups. |

**Action points for maintainers:** Prioritise merging PR #3329 (webhook validation), allocate resources to address #806 UI implementation, and triage #3339’s quota‑error handling to avoid recurring 429 responses.

--- 

*All issue and PR references are live GitHub links as of the snapshot date 2026‑08‑19.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**Today's Overview**  
NanoClaw’s development remains robust, with 38 PR updates and 3 issues addressed in the latest 24 hours. Open issues highlight core stability concerns (e.g., database handling, channel persistence), while PR activity centers on refactoring the database layer, enhancing skill workflows, and improving Slack/GitHub integrations. The project shows strong engineering momentum, but unresolved edge cases in deployment workflows and dependency management require continued attention.  

**Releases**  
No new releases were published in the last 24 hours.  

**Project Progress**  
- **Merged/Closed PRs**: 16 PRs closed today, including critical fixes for database concurrency races (`#3326`), driver integration tests (`#3330`), and Slack approval tracking (`#3340`).  
- **Advanced Features**: Refactoring of the central database layer (`#3321`, `#3324`, `#3325`) to enable portable drivers and async operations, paired with `SessionDriver` seam integration (`#3306`, `#3307`) for improved session lifecycle management.  
- **Skill Iterations**: Progress on adapter tools like Webex polling (`#3343`) and Slack invite handling (`#3342`) suggests a focus on expanding channel compatibility.  

**Community Hot Topics**  
- ⬆️ **Issue #3338**: A critical `codex` WebSocket idle timeout failure (`👍: 0`, 2 comments) underscores gaps in error surface visibility, prioritizing reliable CLI-adapter communication.  
- ⬆️ ** closed **: #2868 addresses silent `update-skills` skips, a regression affecting dependency migrations (`👍: 0`, 1 comment), likely impacting users upgrading from `4.29.x`.  
- ⬆️ **PR #3343**: Webex REST polling adapter adds enterprise-friendly integration, reflecting demand for flexible messaging system compatibility.  

**Bugs & Stability**  
1. **High Severity**: Issue #3194 details irrecoverable state loss during `update-nanoclaw` (`closed`, 0 comments). Critical for production deployments; no fix PR merged yet.  
2. **Medium Severity**: Silent `update-skills` (`#2868`) and database concurrency races (`#3326`) resolved via merged PRs, but edge cases remain in rollback procedures.  
3

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑08‑19**

---

### 1. Today’s Overview  
The IronClaw repository is in a high‑velocity state: 22 issues (16 open, 6 closed) and 39 pull requests (24 open, 15 merged/closed) were updated in the last 24 h. The recent **1.3.0‑rc.2** release (Aug 18) brings stability fixes for extension activation and SSH worker support, while the bulk of activity centres on documentation, UI/UX refinements, and a suite of “epic” initiatives targeting durability, automation reliability, and a next‑generation design system. Overall health appears strong – the project is actively evolving, with many open issues indicating ongoing bug‑fix cycles and a steady stream of feature‑level PRs.

---

### 2. Releases  
**ironclaw‑v1.3.0‑rc.2** – 2026‑08‑18  
*Changes*  
- **Extension activation fix** – the `activation_state` field is now correctly handled, ending crash‑loops that occurred when upgrading from 1.2.  
- **Reborn runtime** – public‑key‑only worker SSH on port 2222 is now opt‑in, improving security for container‑based deployments.  

*Breaking changes* – None; the changes are backward‑compatible and aim to increase stability.  

*Migration notes* – No immediate action required; users upgrading from 1.2 should see the extension field preserved automatically.

---

### 3. Project Progress  
**Closed / merged PRs (today)**  
- **#7638** – Replace thread‑deletion `window.alert()` with a global toast (UX polish).  
- **#7639** – Introduce a shared `InlineNotice` component for consistent page feedback.  
- **#7465** – “Company Brain FDE” epic (closed, likely a documentation/feature freeze).  
- **#7165** – “Customer Feedback Remedition” epic (closed).  
- **#7714** – libSQL resource‑governor journal stall under bench load (closed, performance fix).  

**Open PRs advancing key capabilities**  
- **#7735** – Add `timings` block to downloadable run artifacts (evidence‑based bug reporting).  
- **#7737** – Fix Slack channel scope drift (wider `reactions:*` and admin scopes).  
- **#7711** – Typed WASM tool response, guest migration, and dispatch‑error cleanup (core tooling overhaul).  
- **#7686** – Centralise capability outcome processing in runtime (pre‑cursor to unified channel architecture).  
- **#7650** – Derive run outcomes from runtime evidence (deterministic assessment instead of answer‑only).  

These PRs indicate a clear push toward **observable, reproducible runs**, **cleaner UI/UX**, and **more robust tooling contracts**.

---

### 4. Community Hot Topics  

| Issue / PR | Activity (comments / reactions) | Core Need |
|------------|--------------------------------|-----------|
| **#7185** (closed) – *Memory not reliably recalled across conversations* | 2 comments, 0 👍 | Users need **consistent context retention** across sessions – a fundamental UX pain point. |
| **#6879** (open) – *Automation runs are hit‑or‑miss* | 1 comment, 0 👍 | **Reliability of unattended automation** is critical; the structural trigger‑run pipeline needs refinement. |
| **#7681** (open) – *Slack unlinked‑user connect message is public* | 0 comments, 0 👍 | **Privacy & friction** in onboarding Slack users; a one‑click private connect flow is desired. |
| **#7467** (open) – *Reborn durable state profile‑agnostic & legacy migration* | 0 comments, 0 👍 | **Data durability & migration** when profiles change – users fear loss of history/secrets. |
| **#7735** (open) – *Add run timing evidence to artifacts* | 0 comments, 0 👍 | **Debuggability** – developers want concrete performance data attached to reports. |
| **#7737** (open) – *Slack scope drift fix* | 0 comments, 0 👍 | **Slack integration stability** – missing scopes break bot indicators and user experience. |
| **#7697** (open) – *Durable user inbox & product APIs* | 0 comments, 0 👍 | **Persistent notification handling** for users and downstream services. |

**Underlying trends**  
- **Reliability & observability** dominate (memory recall, automation consistency, timing evidence).  
- **Privacy & friction** in communication channels (Slack public messages, onboarding flows).  
- **Durability of state** across profile changes and long‑running runs.  

---

### 5. Bugs & Stability  

| Issue | Severity | Symptom | Fix PR (if any) |
|-------|----------|---------|-----------------|
| **#7720** – *1.3.0‑rc.1 crash‑loops on boot after 1.2.x upgrade* | **High** | Process exits 1 during composition; workers lose HTTP/SSH ports. | No merged PR yet; the fix is the **1.3.0‑rc.2** release (activation_state handling). |
| **#7714** – *libSQL shared write connection starves resource‑governor journal* | **Medium** | Journal stalls ~40 s, causing authority invalidation loops. | Closed (performance optimisation). |
| **#7727** – *Catalog `capabilities` artifact mandatory but never read* | **Medium** | Manifest‑v3 tools may be incorrectly validated. | Open – requires read‑logic addition. |
| **#7726** – *`IRONHUB_MANIFEST_URL` configurable but hard‑coded* | **Medium** | Self‑hosted catalogs rejected despite config knob. | Open – needs allow‑list enforcement. |
| **#7638 / #7639** – *UX alert/toast inconsistency* | Low | Visual inconsistency in error messaging. | Closed (UI polish). |

**Takeaway:** The most severe stability issue (#7720) has been addressed in the latest release, but other medium‑severity catalog and manifest bugs remain open and may affect integrators relying on external catalogs.

---

### 6. Feature Requests & Roadmap Signals  

- **Epic #7467** (Reborn durable state profile‑agnostic migration) – signals a **1.4.0** focus on state portability and resilience.  
- **Epic #7681 / #7737** (Slack UX improvements) – indicates a push to make **Slack onboarding seamless** and **private**, likely shipped in the next minor release.  
- **Epic #7038** (Storybook + AI‑first Design System) and **#7257** (design‑system proposal) – suggest a **design‑system overhaul** that will underpin future UI work.  
- **Epic #7354** (Extensions vNext – unified channels, rich messaging, Signal) – points to a **next‑generation communication layer** that may become part of 1.4.0 or a subsequent 1.5.0 milestone.  
- **PR #7735** (timings in artifacts) and **#7650** (evidence‑backed run outcomes) – demonstrate a community demand for **transparent performance data**, a trend that will likely be incorporated into the next release cycle.  

Overall, the roadmap leans toward **greater observability, durability, and a more cohesive user experience** across web UI, Slack, and automation runtimes.

---

### 7. User Feedback Summary  

- **Context Retention:** Multiple testers report that information set in one conversation is not reliably recalled later (Issue #7185). This undermines trust in the assistant’s memory.  
- **Automation Unreliability:** Automated runs sometimes produce no useful output, especially on small models (Issue #6879). Users need deterministic, repeatable automation behavior.  
- **Slack Privacy:** Unlinked users receive public “connect it in the web app” notices, exposing private onboarding steps in shared channels (Issue #7681).  
- **State Migration Pain:** Profile changes can render existing deployments appear empty while leaving history, secrets, and extensions stranded (Issue #7467).  
- **Performance Transparency:** Users request concrete timing evidence in run artifacts to diagnose slowness (Issue #7735).  

These pain points collectively highlight a need for **more stable state handling, clearer diagnostic data, and smoother onboarding experiences**.

---

### 8. Backlog Watch  

| Item | Why It Matters | Current Status |
|------|----------------|----------------|
| **#7467** – *Reborn durable state profile‑agnostic & migration* | Core to data durability; impacts all deployments when profiles change. | Open, last updated 2026‑08‑18; no active discussion. |
| **#7681** – *Slack unlinked‑user connect message public* | Affects privacy and user trust in shared channels. | Open, last updated 2026‑08‑18; depends on UI component refactor. |
| **#7736** – *Daily ironclaw failure taxonomy* | Provides insight into systemic failure patterns; useful for prioritising fixes. | Open, created 2026‑08‑19; minimal discussion so far. |
| **#7727** – *Mandatory `capabilities` artifact never read* | Could cause manifest‑v3 tool mismatches and runtime errors. | Open, created 2026‑08‑18; requires code change. |
| **#7726** – *`IRONHUB_MANIFEST_URL` hard‑coded* | Limits self‑hosted catalog adoption; impacts enterprise deployments. | Open, created 2026‑08‑18; needs allow‑list enforcement. |
| **#7638 / #7639** – *UX alert/toast consistency* | Though closed, the underlying component refactor may affect other parts of the UI. | Closed, but the shared `InlineNotice` work (PR #7697) is still in progress. |

**Recommendation:** Maintainers should prioritize **#7467** (state durability) and **#7681** (Slack privacy) as they affect core user experiences and have seen recent activity. Issues **#7727** and **#7726** are blockers for external catalog integration and should be addressed promptly to avoid downstream breakage.

--- 

*Prepared on 2026‑08‑19. All GitHub references are live as of the digest publication.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026-08-19

## 1. Today's Overview
LobsterAI is experiencing high development velocity, marked by the release of version **2026.8.18** and the integration of the **DSH (DeepSeek Harness) engine** as a major feature. Over the last 24 hours, the repository saw **19 PR updates** (16 merged/closed, 3 open) and **9 open issues** (all currently active/stale). Overall project health is active on the development side, with significant backend stabilizations (such as OpenClaw gateway crash fixes and SQLite cascade deletes) merged into the latest release. However, the community support backlog remains heavily loaded with stale, unresolved user-facing bugs and feature requests that require triage.

## 2. Releases
### LobsterAI 2026.8.18
*   **Key Changes**:
    *   **DSH Engine Integration**: Major milestone introducing the DeepSeek Harness (DSH) engine, including updating DSH to `rc.7` and launching the DSH process launcher ([PR #2502](https://github.com/netease-youdao/LobsterAI/pull/2502), [PR #2509](https://github.com/netease-youdao/LobsterAI/pull/2509)).
    *   **Critical Bug Fixes**: Resolved a P0 blocker where the OpenClaw gateway failed to start due to strict validation of illegal configuration fields ([PR #1626](https://github.com/netease-youdao/LobsterAI/pull/1626)).
    *   **Resilience Improvements**: Added backoff retries for transient server model loading failures to prevent empty plan model groups during offline launch or token refresh hiccups ([PR #2508](https://github.com/netease-youdao/LobsterAI/pull/2508)).
    *   **Scheduled Tasks**: Added OS-level system notifications (macOS, Windows, Linux) for task completion ([PR #1621](https://github.com/netease-youdao/LobsterAI/pull/1621)) and capped run history page sizes to prevent gateway limit overflows ([PR #2507](https://github.com/netease-youdao/LobsterAI/pull/2507)).
    *   **UI/UX Enhancements**: Refined model selector components, added multi-agent task activity filters in the sidebar, and moved search to header actions ([PR #2418](https://github.com/netease-youdao/LobsterAI/pull/2418), [PR #2481](https://github.com/netease-youdao/LobsterAI/pull/2481)).
*   **Migration Notes**: Users upgrading to the new version will benefit from the OpenClaw schema validation fix. No breaking changes are documented for standard user workflows, though the DSH engine is introduced as an opt-in experimental feature.

## 3. Project Progress
The development team successfully merged 16 pull requests in the last 24 hours, focusing heavily on core architecture stability and UI polish:
*   **Core Backend & Database**: Fixed SQLite foreign key constraints to ensure proper cascading deletes for cowork sessions and user memories, eliminating orphaned database records ([PR #1597](https://github.com/netease-youdao/LobsterAI/pull/1597)).
*   **Cowork & Export**: Upgraded Cowork session export quality by fixing hardcoded English titles, adding metadata, and enabling copy-to-clipboard functions ([PR #1615](https://github.com/netease-youdao/LobsterAI/pull/1615)).
*   **Personalization & Templates**: Launched user avatar settings with SVG previews and local upload support ([PR #1629](https://github.com/netease-youdao/LobsterAI/pull/1629)) and added quick-add templates for MCP services (File System, SQLite, Brave Search) ([PR #1631](https://github.com/netease-youdao/LobsterAI/pull/1631)).
*   **Visual Fixes**: Aligned Sites page layout styling ([PR #2410](https://github.com/netease-youdao/LobsterAI/pull/2410)) and added copy success feedback ([PR #2417](https://github.com/netease-youdao/LobsterAI/pull/2417)).

## 4. Community Hot Topics
*   **Custom Model Configuration Failures ([#1622](https://github.com/netease-youdao/LobsterAI/issues/1622))**: Users report failing tests when trying to add and validate custom models. This highlights a persistent onboarding friction point regarding custom LLM endpoints.
*   **Hermes Agent Integration Request ([#1614](https://github.com/netease-youdao/LobsterAI/issues/1614))**: A highly watched feature request asking the team to include `hermes-agent` as an optional AI engine alongside `openclaw`, reflecting strong community demand for engine pluralism.
*   **Client Crashes on Complex Tasks ([#1627](

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for 2026-08-19.

### 1. Today's Overview
Moltis shows a highly active and healthy development pace as of August 19, 2026, with two new releases deployed in the last 24 hours. The development team and community contributors resolved 2 outstanding bugs and merged 5 pull requests, significantly advancing sandbox stability and introducing new core features. Notably, contributor `penso` drove the majority of today's progress, submitting 4 out of the 6 active PRs. The project continues to expand its capabilities as a personal AI assistant, moving beyond basic chat to include file management and external API integrations.

### 2. Releases
*   **[20260818.08](https://github.com/moltis-org/moltis/releases)**: The latest release, likely incorporating the managed Files library, Settings browser, and README fixes.
*   **[20260818.06](https://github.com/moltis-org/moltis/releases)**: An earlier release from yesterday, likely capturing the Podman escape hatches and Heartbeat UI patches.

### 3. Project Progress
Today saw significant feature advancement and bug squashing through 5 merged/closed PRs:
*   **File Management System**: [PR #1206](https://github.com/moltis-org/moltis/pull/1206) added a managed Files library and a Finder-style Settings browser, introducing persistent, data-directory-backed file management with authenticated APIs and container mounts.
*   **Sandbox Expansion**: [PR #1106](https://github.com/moltis-org/moltis/pull/1106) landed support for Podman escape hatches, improving nested Podman capabilities and Linux host-socket passthrough.
*   **AI Routing Improvements**: [PR #1198](https://github.com/moltis-org/moltis/pull/1198) optimized OpenAI reasoning tool calls by routing them through the Responses API while preserving Chat Completions for other use cases.
*   **UI Patch**: [PR #1209](https://github.com/moltis-org/moltis/pull/1209) fixed the heartbeat settings UI, treating updates as patches rather than replacing the entire config.
*   **Documentation**: [PR #1211](https://github.com/moltis-org/moltis/pull/1211) fixed a broken star history chart in the README.

### 4. Community Hot Topics
The community focus was primarily on bug resolution and new feature testing. 
*   **[PR #1106](https://github.com/moltis-org/moltis/pull/1106) (Podman support)** was a long-awaited fix that finally landed, resolving a months-old user complaint.
*   **[PR #1210](https://github.com/moltis-org/moltis/pull/1210) (Tesla Fleet API connector)** is currently the hottest open topic, signaling strong interest in extending Moltis's reach into vehicle data/IoT synchronization.

### 5. Bugs & Stability
Today closed out 2 tracked bugs, both of which now have corresponding merged fixes:
1.  **High Severity - Podman Compatibility**: [Issue #1095](https://github.com/moltis-org/moltis/issues/1095) reported that Podman was not working via Moltis. *Fix deployed*: [PR #1106](https://github.com/moltis-org/moltis/pull/1106) added explicit, mutually exclusive Podman sandbox escape hatches.
2.  **Medium Severity - UI Data Loss**: [Issue #1187](https://github.com/moltis-org/moltis/issues/1187) reported that the Heartbeat settings UI silently reset fields not represented by the form. *Fix deployed*: [PR #1209](https://github.com/moltis-org/moltis/pull/1209) updated `heartbeat.update` to deserialize params as a patch.

### 6. Feature Requests & Roadmap Signals
The open PRs and recent merges point to a clear roadmap direction focused on ecosystem integration and local resource management:
*   **Vehicle/IoT Integration**: [PR #1210](https://github.com/moltis-org/moltis/pull/1210) introduces a read-only Tesla Fleet API connector. This signals a roadmap push toward making Moltis a central hub for personal digital assets and smart devices.
*   **Local File OS**: [PR #1206](https://github.com/moltis-org/moltis/pull/1206) adding a managed Files library indicates Moltis is evolving into a more capable desktop assistant rather than just a chat interface.

### 7. User Feedback Summary
User feedback over the last 24 hours has been generally positive regarding the responsiveness of the maintainers. Users like `RokkuCode` and `IlyaBizyaev` saw their bugs addressed promptly in this cycle. The primary pain points highlighted were around containerization compatibility (Podman) and UI reliability (silent config resets), both of which have been rectified. The eagerness for features like the Tesla connector and Files library indicates a strong desire for a more agentic assistant that can interact with the physical world and local file systems.

### 8. Backlog Watch
*   **[Issue #1095](https://github.com/moltis-org/moltis/issues/1095)**: Created on 2026-06-03, this Podman issue sat in the backlog for over two months before being finally closed today. Maintainers should ensure complex sandboxing issues are triaged faster in the future.
*   **[PR #1210](https://github.com/moltis-org/moltis/pull/1210)**: The new Tesla Fleet API connector is currently open and needs maintainer review. Given the complexity of API authentication and data syncing, it should be prioritized for review to prevent it from languishing in the queue.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-19

---

## 1. Today's Overview

The CoPaw repository remains highly active, with 46 issues and 50 pull requests updated in the last 24 hours, indicating strong engagement from both users and contributors. No new releases were published during this period, suggesting ongoing stabilization efforts following the v2.1.0 beta cycle. A total of 16 issues were closed and 19 PRs merged, reflecting steady progress in addressing bugs and implementing enhancements. The focus appears to be on improving reliability, security, and developer experience, particularly around MCP integrations, OAuth2 flows, and shell command handling.

---

## 2. Releases

No new releases occurred in the past 24 hours.

---

## 3. Project Progress

Several significant improvements were merged today:

- **`fix(shell)` PR [#7057](https://github.com/agentscope-ai/CoPaw/pull/7057)**: Adds support for user-local binary directories to the subprocess PATH environment, resolving failures when running under restricted execution environments like Docker or systemd services.
- **`fix(providers)` PR [#6617](https://github.com/agentscope-ai/CoPaw/pull/6617)**: Ensures proper handling of the `Retry-After` header cap during streaming retries in chat models, improving stability under rate-limited conditions.
- **`fix(agents)` PR [#7087](https://github.com/agentscope-ai/CoPaw/pull/7087)**: Localizes remote media URLs client-side before sending them to model backends, preventing access errors caused by backend-side fetch restrictions.
- **`feat(console)` PR [#7072](https://github.com/agentscope-ai/CoPaw/pull/7072)**: Introduces a background chat task list API, enhancing multi-agent coordination capabilities within the console UI.
- **`fix(drivers)` PR [#7066](https://github.com/agentscope-ai/CoPaw/pull/7066)**: Persists rotated refresh tokens for OAuth2-based MCP providers, fixing long-term session degradation issues.

These changes indicate a continued emphasis on robustness, especially concerning authentication flows, resource management, and extensibility.

---

## 4. Community Hot Topics

### 🔥 [Issue #6684 – [Enhancement] Add retry functionality for channels](https://github.com/agentscope-ai/CoPaw/issues/6684)

With 10 comments, this issue highlights a critical usability gap where external messaging channels (e.g., Matrix) disconnect without automatic recovery. Users must manually restart the service after each failure due to lack of retry logic or health checks.

**Underlying Need:** Resilient connectivity to third-party platforms through automated reconnect strategies.

---

### 🐞 [Issue #6921 – Agent stops mid-task without warning](https://github.com/agentscope-ai/CoPaw/issues/6921)

An open bug report with 8 comments describes an agent halting its workflow immediately after planning steps ("Now 2.1, 3.1...") without visible output or errors. Requires manual intervention ("continue") to resume.

**Underlying Need:** Improved execution flow control and transparency in agent behavior.

---

### ⚠️ [Issue #7102 – Desktop app freezes for over 10 minutes](https://github.com/agentscope-ai/CoPaw/issues/7102)

Reported with 7 comments, this high-severity crash affects GLM-powered desktop sessions, where no response is received for extended periods, including frozen thinking processes.

**Underlying Need:** Better timeout detection and error reporting in local inference pipelines.

---

### 🧪 [Issue #7011 – Console UI cancels unrelated Feishu sessions](https://github.com/agentscope-ai/CoPaw/issues/7011)

With 7 comments, this regression occurs when stopping one session inadvertently terminates another active Feishu interaction due to incorrect session identity propagation.

**Underlying Need:** Accurate session isolation across concurrent UI instances.

---

### 🛡️ [PR #7120 – Enable shell evasion checks by default](https://github.com/agentscope-ai/CoPaw/pull/7120)

This first-time contributor submission enables built-in shell security checks to prevent potentially malicious command patterns. Includes unit tests.

**Community Signal:** Growing interest in hardening CLI/tool-use features against injection attacks.

---

## 5. Bugs & Stability

| Priority | Title | Status | Link |
|--------|-------|--------|------|
| High | App freezes >10 mins (GLM) | Open | [#7102](https://github.com/agentscope-ai/CoPaw/issues/7102) |
| Medium | Agent halts unexpectedly post-planning | Open | [#6921](https://github.com/agentscope-ai/CoPaw/issues/6921) |
| Medium | Console UI cancels unrelated Feishu sessions | Open | [#7011](https://github.com/agentscope-ai/CoPaw/issues/7011) |
| Low | Malformed image links crash entire session | Open | [#7110](https://github.com/agentscope-ai/CoPaw/issues/7110) |

Fixes are currently in progress via related PRs (#7087, #7066). The freezing issue (#7102) lacks a confirmed fix PR but may relate to provider-side timeouts or local inference stack limitations.

---

## 6. Feature Requests & Roadmap Signals

| Request | Comments | Link |
|--------|----------|------|
| Channel-level retries / health monitoring | 10 | [#6684](https://github.com/agentscope-ai/CoPaw/issues/6684) |
| Per-agent/system_prompt permission for plugins | 4 | [#7052](https://github.com/agentscope-ai/CoPaw/issues/7052) |
| Skill import/search filter in interactive setup | 2 | [#7090](https://github.com/agentscope-ai/CoPaw/issues/7090) |
| Reasoning effort override per agent/session | 2 | [#7062](https://github.com/agentscope-ai/CoPaw/issues/7062) |
| Background chat task listing API | 2 | [#7072](https://github.com/agentscope-ai/CoPaw/pull/7072) |

Several roadmap-aligned topics have gained traction, notably around modular skill configuration, granular reasoning controls, and improved plugin interoperability. These suggest upcoming priorities in customization depth and workflow flexibility.

---

## 7. User Feedback Summary

Users express satisfaction with core performance improvements such as formula rendering fixes and reduced UI latency. However, recurring themes include:

- **Frustration with instability**, particularly in agent task execution and channel connections.
- **Desire for granular session control** over file previews, message deletion, and chat continuity.
- **Security concerns**, especially regarding shell commands, OAuth token rotation, and sandbox policies.
- **Requests for better observability**, such as visual cues when agents pause or retry actions.

Many users appreciate the rapid iteration pace but expect more consistency and documentation around integrations (especially MCP, Feishu, and OAuth2 providers).

---

## 8. Backlog Watch

| Age | Issue/PR | Topic | Last Activity |
|-----|----------|-------|---------------|
| 3 months | [#4001 – Manual message deletion](https://github.com/agentscope-ai/CoPaw/issues/4001) | UX Enhancement | Aug 18 |
| 2 months | [#5584 – Custom Ascend-vLLM model connection broken](https://github.com/agentscope-ai/CoPaw/issues/5584) | Compatibility Bug | Aug 18 |
| 1 month | [#6457 – Task mode logs excessive internal dialogues](https://github.com/agentscope-ai/CoPaw/issues/6457) | Logging Clarity | Aug 18 |
| 1 month | [#6794 – Agent Kanban POST returns 405](https://github.com/agentscope-ai/CoPaw/issues/6794) | Integration Bug | Aug 18 |

Some older yet impactful issues remain unresolved despite recent activity, possibly indicating misaligned priorities or missing ownership. Maintainers should evaluate whether older feature requests (#4001) or regressions (#6794) require immediate triage.

--- 

Let me know if you'd like a version tailored specifically for maintainers or stakeholders!

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



Here is the structured project digest for ZeroClaw, based on GitHub data from the last 24 hours leading up to 2026-08-19.

---

# ZeroClaw Project Digest — 2026-08-19

### 1. Today's Overview
ZeroClaw development activity remains very high, with 50 issues and 50 pull requests updated in the last 24 hours. No new releases were made. The project is focused on architectural refinement (Goal mode RFC), critical bug resolution (Windows test failures, memory growth), and a large pipeline of feature PRs awaiting maintainer review. Community engagement is concentrated on cross-platform parity and runtime consistency.

### 2. Releases
No new releases today.

### 3. Project Progress
19 issues were closed today, indicating active triage and resolution. Notably, PR #10009 [fix(memory): key conversation

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*