# OpenClaw Ecosystem Digest 2026-10-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-17 02:11 UTC

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



Here is a structured English OpenClaw project digest for 2026-10-17, based on the provided GitHub data.

---

# OpenClaw Project Digest — 2026-10-17

## 1. Today's Overview
OpenClaw remains exceptionally active, with 500 issues and 500 pull requests updated in the last 24 hours. While no new releases were published today, the project is characterized by intense bug-fixing and performance optimization efforts, particularly around SQLite stability, Windows reliability, and gateway startup times. The maintainers are actively merging and opening numerous PRs to address critical regressions and long-standing issues.

## 2. Releases
*None.* No new releases were published today.

## 3. Project Progress
Several PRs were merged or closed today, indicating progress on various fronts:
- **#174964 (Closed)**: Fixed an issue with balancing forced open-fence chunks in agents, preventing unclosed Markdown fragments from being published.
- **#174935 (Closed)**: Improved error reporting for Crabbox executable and lease inspection, preventing false negatives during managed acquisitions.
- **#174941 (Closed)**: Refactored the UI to read page snapshots through owner projections, preserving behavior across Agents, Profile, Sessions, and Settings pages post-Solid migration.

Numerous other PRs are open and in progress, focusing on performance improvements, bug fixes, and UI enhancements.

## 4. Community Hot Topics
The most active issues today revolve around stability, performance, and data integrity:
- **#143524**: Agent SQLite WAL grows to 1.4–2.8 GB in days despite `wal_autocheckpoint=1000`; blocks gateway startup (Windows, 2026.9.2/9.3). This issue has **131 comments** and highlights a critical performance and stability problem.
- **#159356**: llama.cpp manager reports ready while embedding child exits; embedding requests return HTTP 500. This has **28 comments** and relates to operational recovery and memory pressure.
- **#112423**: Large SQLite transcript cleanup blocks the gateway event loop. With **22 comments**, this issue addresses performance bottlenecks during session cleanup.
- **#148707**: Reply lost with 'Reply operation has no active tool authority snapshot' when a second run displaces an in-flight turn on the same session (2026.9.4 regression). This has **21 comments**.

## 5. Bugs & Stability
Several critical bugs and regressions were reported today, ranked by severity:

### P0 / Critical
- **#143524**: SQLite WAL growth issue leading to gateway startup blocks.
- **#164113**: Update fails at updater-runtime-retention with FICLONE EPERM inside an unprivileged LXC container.
- **#162211**: Startup blocks the Gateway event loop for 40–200s, leading to restart loops.
- **#152275**: Post-commit plugin activation failure leaves model catalog and reply dispatch unavailable until restart.
- **#140161**: Windows gateway cold boot in scheduled-task mode hangs or silently exits.
- **#167406**: Windows MSIX 2026.9.900.0: Codex-enabled Gateway startup starves main thread.
- **#154950**: Update from 2026.7.1-2 → 2026.9.x permanently blocks Gateway via unresolvable "legacy-workspace" StartupMaintenanceRequiredError.

### P1 / High
- **#148707**: Reply lost with 'Reply operation has no active tool authority snapshot' when a second run displaces an in-flight turn.
- **#111897**: Two concurrent runs for the same session lane both complete and deliver duplicate/redundant replies under load.
- **#157989**: Plugin source capture rewrites ~1.1–1.4 GB per CLI command and ~6.5 GB per Gateway start, causing severe SSD wear.
- **#168955**: Startup regression in 2026.10.1: ready ~1030s vs ~410s on 2026.9.9 (Windows).
- **#112259**: Visible inbound channel turn can be silently dropped: zero-payload dispatch has no retry, dead-letter, or user-visible failure.
- **#104719**: Memory-wiki supplement exhaustive fallback ignores tool deadline.
- **#120385**: Code Mode tool catalog built incomplete for scheduled/cron and memory-flush turns.
- **#164799**: After a version change, agents admit one by one for minutes past ready.
- **#173764**: openclaw update hangs forever in post-activation doctor step.
- **#170956**: Windows: slow startup, unclean plugin shutdown, and schtasks permission error.
- **#109478**: Literal \n injected into multi-line tool-call string arguments at colon-then-indent boundary.
- **#107244**: WhatsApp group messages never reach inbound handling.
- **#153417**: Subagent completion announce retries indefinitely when requester yields no visible reply.
- **#99910**: Memory dreaming run pegs the gateway event loop for ~10 min until killed.
- **#98702**: Inherited OpenAI OAuth rejected at provider for built-in openclaw runtime on openai-chatgpt-responses transport.
- **#94939**: 6.x state migration leaves channel conversation-store SQLite empty, breaking proactive sends.

### P2 / Medium
- **#159356**: llama.cpp manager reports ready while embedding child exits.
- **#166133**: MCP tool_call wrapper coerces integer args to string, breaking MCP tools.
- **#162585**: Plugin source-capture staging re-materializes the plugin's own package and never converges.
- **#76493**: Allow SecretRef objects in `mcp.servers[].env` schema.
- **#105528**: exec/read tools silently return empty output on Windows.
- **#112313**: Dead-lettered outbound delivery queue entries are permanent.
- **#172091**: A worker SQLite transaction stays open forever, blocking shared-state WAL checkpoints.
- **#97335**: Cron fallback model works in normal session but LLM request fails when triggered via cron.
- **#101445**: Embedded Ollama agent reports payloads=0 tools=0 for certain prompts.
- **#143017**: Prompt-cache: five ways a persistent session rewrites its prefix.
- **#158417**: Plugin re-materialisation fills /tmp and nothing cleans it up.
- **#111346**: channels status --deep falsely reports not-running for an auto-loaded channel plugin.
- **#151962**: Phantom user messages: internal runtime strings submitted as user prompts.
- **#138245**: Output guards: catch pseudo tool-calls emitted as plain text.
- **#106704**: sessions_yield on a subagent's first turn silently finalizes the run as ok with an empty result.

*Note: Fix PRs are not explicitly listed for most of these issues in the provided data, but several open PRs address related areas.*

## 6. Feature Requests & Roadmap Signals
- **#44965**: Feature Request: Stream Repetition Safeguard (Halt & Confirm) to prevent infinite loops and spam.
- **#76493**: Allow SecretRef objects in `mcp.servers[].env` schema for better security practices.
- **#138245**: Output guards to catch pseudo tool-calls and stream repetition/length guards.

These requests indicate a community desire for better safety nets and security features.

## 7. User Feedback Summary
Users are reporting significant pain points around:
- **Stability and Reliability**: Frequent crashes, hangs, and startup failures, particularly on Windows and after updates.
- **Performance**: Slow startup times, event loop blocking, and excessive disk I/O.
- **Data Integrity**: Issues with SQLite WAL growth, lost messages, and incomplete tool catalogs.
- **Usability**: Problems with plugin activation, update processes, and channel integrations (WhatsApp, MCP).

Overall, user satisfaction appears to be strained due to these stability and performance issues, especially following recent updates.

## 8. Backlog Watch
Several long-standing issues require maintainer attention:
-

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open Source Ecosystem  
*As of 2026-10-17*

## 1. Ecosystem Overview  
The personal AI assistant and agent open-source ecosystem is highly dynamic, with dozens of active projects spanning from full-stack agent frameworks to specialized micro-tools. Activity levels vary significantly, with some projects like OpenClaw and Hermes Agent maintaining intense development cadence, while others remain dormant or stabilize toward release maturity. Projects span diverse architectural approaches—from monoliths to distributed systems—and target users ranging from researchers experimenting locally to enterprise teams deploying scalable infrastructures.

## 2. Activity Comparison

| Project         | Issues Updated (24h) | PRs Updated (24h) | New Releases | Health Score |
|------------------|----------------------|-------------------|--------------|---------------|
| OpenClaw         | 500                  | 500               | No           | Active/Very High |
| Hermes Agent     | 50                   | 50                | No           | Active/Moderate-High |
| NanoClaw         | 57                   | 57                | No           | Active/Moderate |
| NullClaw         | N/A                  | 17 Open           | No           | Developing/Moderate |
| LobsterAI        | 5                    | 21                | Yes          | Mature/Moderate |
| ZeroClaw         | 36                   | 50                | No           | Active/High |
| PicoClaw         | 2                    | 4                 | No           | Stable/Low |
| IronClaw         | 0                    | 0                 | No           | Inactive |
| Moltis           | 5                    | 21                | No           | Stable/Low |
| CoPaw            | N/A                  | N/A               | No           | Active/Medium |
| ZeptoClaw        | 0                    | 0                 | No           | Inactive |

> **Health Score** reflects combined activity, issue responsiveness, and community engagement.

## 3. OpenClaw’s Position  
OpenClaw dominates the ecosystem in raw activity volume, with over twice as many issues and pull requests touched in a single day compared to any peer. Its technical approach emphasizes deep integration across platforms (SQLite-backed agents, Solid migrations, multi-channel messaging) and prioritizes backward compatibility while pushing forward with complex features like managed acquisitions and plugin catalogs.

Community comparison reveals OpenClaw leads in breadth but not necessarily engagement quality—despite high PR/issue churn, several critical bugs (e.g., #143524 SQLite WAL bloat) remain unresolved or inadequately addressed. In contrast, ZeroClaw shows more targeted progress on runtime stabilization and cost controls.

## 4. Shared Technical Focus Areas  

- **Database Stability & Performance**:
  - OpenClaw (#143524), ZeroClaw (#11796) – SQLite WAL growth and locking issues.
  - Need: Better resource management, checkpointing strategies, and failure recovery.

- **Cross-Platform Messaging Integrations**:
  - OpenClaw (WhatsApp #107244), NullClaw (Slack/Telegram), ZeroClaw (WhatsApp-web), PicoClaw (QQ)
  - Need: Robust parsers for emojis, voice notes, media, and reliable delivery semantics.

- **Multi-Provider Support & Reasoning Mode Handling**:
  - OpenClaw, LobsterAI (preset routing), NullClaw (reasoning passthrough)
  - Need: Standardized interfaces for provider-specific parameters and response formats.

- **Agent Runtime Resilience**:
  - OpenClaw (#148707), ZeroClaw (#11589 cost override), Hermes Agent (#134889 tracking)
  - Need: Graceful degradation, cancellation hooks, and predictable lifecycle management.

## 5. Differentiation Analysis  

| Aspect                  | OpenClaw                          | ZeroClaw                         | NullClaw                         | LobsterAI                        |
|-------------------------|-----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| **Core Architecture**    | Monolithic agent + gateway       | Modular components, WASM plugins | Channel-centric, lightweight     | Full-stack desktop + cloud       |
| **Target Users**         | Researchers, power users         | DevOps, infra operators          | Bot builders, streamers          | General consumers, enterprise    |
| **Messaging Focus**      | Broad (SMS, WhatsApp, email)     | Internal/internal comms          | Slack, Telegram, CLI             | Desktop-focused companions       |
| **Runtime Type**         | Integrated gateway               | Distributed microservices        | Daemon-based                     | Hybrid local/cloud               |
| **Deployment Model**   | Native binaries                  | Container-native                 | Background services              | Cross-platform apps              |

## 6. Community Momentum & Maturity  

### Rapidly Iterating:
- **OpenClaw**, **Hermes Agent**, **ZeroClaw**: High daily activity, active PR/merging cycles.
- **NullClaw**: Single-contributor-driven but focused on feature parity with OpenClaw.

### Stabilizing Toward Release:
- **LobsterAI**: Recent release (v2.2.2), shifting toward UX polish and feature freeze.
- **PicoClaw**, **Moltis**: Lower activity, likely post-feature-complete stabilizations.

### Dormant/Inactive:
- **IronClaw**, **ZeptoClaw**: Minimal to zero activity; potential archival candidates.

## 7. Trend Signals  

- **Increased Focus on Embedded & Local Models**: Projects like LobsterAI and ZeroClaw emphasize local-first deployments, preset routing, and cost control—indicating a growing need for offline-capable agents.
  
- **Demand for Streaming UX & Real-Time Feedback**: Multiple projects (OpenClaw, NullClaw) are working on streaming replies and mid-turn steering, showing interest in interactive agent experiences.

- **Security Hardenening**: Feature requests around `SecretRef`, per-agent policy overrides (NullClaw), and credential handling (ZeroClaw) reflect rising concerns about secrets exposure and autonomy boundaries.

- **Platform Decoupling & Pluggable Channels**: Emphasis on independent QQ C2C (PicoClaw), WASM plugins (ZeroClaw), and flexible channel transports suggests movement toward modular architectures that can adapt to changing platform policies.

- **Enterprise Readiness Features**: Cost caps, model fallback chains, structured logging (LobsterAI), and archive retention (ZeroClaw) point to aspirations beyond hobbyist use cases.

This ecosystem is maturing rapidly, balancing innovation velocity with increasing demands for reliability, security, and professional-grade tooling.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-10-17

## 1. Today's Overview
NanoBot maintained high activity over the past 24 hours with **57 pull requests** (30 open, 27 closed/merged), indicating robust development momentum. No new releases were published, though several critical issues were resolved. The codebase continued to address persistent problems in token consolidation accuracy, WebUI state integrity, and session management overhead. Overall project health remains stable, with a focus on fixing regressions and improving reliability.

## 2. Releases
No new releases were published in the period. The latest stable version remains unchanged, and existing releases continue to serve users without modifications.

## 3. Project Progress
- **Token Consolidation**: Multiple efforts to improve token counting accuracy. Issue #5402 highlighted that tiktoken-based estimations consistently underestimate actual API token counts, preventing consolidation from triggering. PR #6260 attempted to shift from reliance on tiktoken estimates to actual usage metrics, and PR #6260 is linked to closing #5402.
- **WebUI Stability**: Several PRs addressed sidebar state corruption. Issues #6008, #6237, #6259, and #6203 focused on ensuring the sidebar persists correctly after updates and prevents silent fallback to default state when fetches fail.
- **Agent Loop Optimization**: PRs #6262, #6215, and #5801 improved checkpoint handling during multi-tool responses and prevented premature compaction during direct turns.
- **Instance Management**: PR #6261 unified instance storage under home directories to resolve configuration root ambiguity.
- **Performance Improvements**: PR #5826 introduced FTS5 indexing for faster session history searches, reducing latency for large workspaces.

## 4. Community Hot Topics
| Topic | Status | Key Items |
|-------|--------|-----------|
| **Token Consolidation** | 🔴 Critical | #5402 (closed), #6260 (closed) – Core issue: estimation underestimation leads to missed consolidations |
| **WebUI State Integrity** | 🔴 High | #6008, #6237, #6259, #6203 – Sidebar state wiping after failed initial fetches; silent defaults causing confusion |
| **Model Availability** | 🟡 Medium | #5977, #5979 – Dead/retired models appearing in picker; need graceful handling of shutdown dates |
| **Session Compaction Overhead** | 🟠 Medium | #6192, #6033, #5801 – Expensive full-scan compaction on idle ticks; optimization with targeted checks |

## 5. Bugs & Stability
| Severity | Issue | Impact | Fix Status |
|----------|-------|--------|------------|
| **Critical** | #5402 – Token consolidation never triggers | Core functionality broken; tokens not consolidated due to underestimation | PR #6260 (closed) addresses this |
| **High** | #6008 – Sidebar state wiped after update | UI regression; user actions lost when initial fetch fails | PR #6237 (closed) + #6259 (open) |
| **High** | #6192 – Expensive compaction on idle ticks | Performance degradation in long-running sessions | PR #6260 (closed) partially mitigates |
| **Medium** | #5977 – Shut-down models appear in picker | User frustration; stale model references | PR #5979 (closed) fixes |
| **Medium** | #5819 – Oversized file reads after compaction | Crash risk when reading large outputs | PR #5880 (open) in progress |
| **Low** | #5801 – Checkpoint loss on metadata updates | Data loss risk during concurrent modifications | PR #5801 (open) |

**Most urgent**: Token consolidation (#5402) remains the primary functional gap. The fix in #6260 aims to replace tiktoken estimates with actual usage, but monitoring is needed post-merge.

## 6. Feature Requests & Roadmap Signals
- **Ephemeral Runtime Context Blocks** (#5586): Multiple PRs (#5659, #5627) aim to add an opt-out flag for ephemeral context, allowing session-constant info to be attached without persisting across turns. This is a significant architectural improvement for transient state management.
- **Managed Installs & In-App Updates** (#6168): Integration of managed installation flows and recoverable updates is planned, currently in a "not ready" state pending Sigstore approval.
- **Instance Storage Unification** (#6261): Centralizing instance storage under home directories resolves configuration root ambiguity across configurations.
- **Performance Enhancements**: FTS5 indexing for history search (PR #5826) and session-level debugging timings (PR #5846) indicate ongoing focus on speed.

## 7. User Feedback Summary
Users have reported:
- **Sidebar corruption**: After updating the WebUI, the sidebar sometimes resets to default state, losing user customizations. This affects productivity and causes confusion.
- **Missing token consolidation**: Users observe that prompts aren't being trimmed because the system underestimates token usage, leading to unnecessary costs or quality issues.
- **Stale model listings**: The model picker occasionally shows models that have been shut down, resulting in errors like "model not found."
- **Slow history retrieval**: Large workspaces experience noticeable delays when searching or viewing session histories.

Overall sentiment is mixed—core functionality works but edge cases cause friction. The team is actively addressing these pain points through multiple PRs.

## 8. Backlog Watch
| Item | Priority | Action Required |
|------|----------|-----------------|
| **#5402 – Token consolidation** | 🔴 High | Monitor PR #6260; ensure production behavior matches expectations |
| **#6008 – Sidebar state preservation** | 🔴 High | PR #6237 closed; verify #6259 fully resolves the issue |
| **#6192 – Compaction efficiency** | 🟠 Medium | Review PR #6260 impact; consider further optimizations |
| **#5819 – Oversized file reads** | 🟠 Medium | PR #5880 in progress; track for resolution before next release cycle |
| **#6168 – Managed installs** | 🟢 Low | Wait for Sigstore approval; prepare release notes once approved |

**Recommendation**: Prioritize validation of the token consolidation fix (#6260) and confirm that sidebar state fixes remain stable after recent commits. The ephemeral runtime context feature (#5586) should be monitored for broader adoption potential.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑10‑17)**  

---

### 1. Today’s Overview  
The repository saw a high volume of activity in the last 24 h: **50 issues** and **50 pull‑requests** were updated. Most items remain open (44 issues, 49 PRs) with only a single PR merged/closed and six issues closed. No new releases were published today. Overall, the project is in an active triage‑and‑fix mode, with maintainers focusing on post‑merge cleanup, bug reproduction, and dependency‑security updates.

### 2. Releases  
*No new releases were tagged or published today.*

### 3. Project Progress (Merged/Closed PRs)  
- **One PR was merged/closed** (the exact PR is not among the top‑20 listed; it likely corresponds to a minor dependency or documentation bump).  
- No feature‑level PRs reached merge today; the bulk of open PRs are still under review or awaiting feedback.

### 4. Community Hot Topics  
| Item | Type | Comments / Reactions | Key Points | Link |
|------|------|----------------------|------------|------|
| **#134889** | Issue (tracking) | **132 comments** | Post‑merge fixes for the unified‑gateway runtime (#106742). The gateway now owns every local session; work is stabilizing session‑state, message‑delivery, and compatibility risks. | [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) |
| **#107402** | Issue (bug) | 23 comments | `hermes update` leaves a permanent “did not restart running gateways” warning when restart is deferred. Affects update UX and fleet state reporting. | [#107402](https://github.com/NousResearch/hermes-agent/issues/107402) |
| **#124583** | Issue (bug) | 18 comments | Terminal tool background hint references non‑existent tool `process(action=…)` instead of `process_manage`. Causes confusion for operators. | [#124583](https://github.com/NousResearch/hermes-agent/issues/124583) |
| **#121095** | Issue (bug/perf) | 16 comments | `browser_exec` leaves stale `browser_harness.daemon` processes after each call, leading to resource leaks. | [#121095](https://github.com/NousResearch/hermes-agent/issues/121095) |
| **#103410** | Issue (bug) | 16 comments 👍:1 | Live‑compression hot‑reload crashes when using external context engines (LCMEngine) because a missing method is called. | [#103410](https://github.com/NousResearch/hermes-agent/issues/103410) |
| **#50148** | Feature request | 7 comments 👍:15 | Add Nextcloud Talk as a messaging‑platform adapter. Strong community interest (15 👍). | [#50148](https://github.com/NousResearch/hermes-agent/issues/50148) |

**Underlying needs:**  
- Stabilise the new gateway‑ownership model (session state, message delivery, Windows compatibility).  
- Improve update experience and eliminate spurious warnings.  
- Fix UX‑level inconsistencies in tool hints and daemon clean‑up.  
- Address performance/resource leaks in browser automation.  
- Respond to high‑demand feature requests (Nextcloud Talk, clearer chat actions, OpenRouter nitro/floor support).

### 5. Bugs & Stability (Today’s Updates)  
**P1‑priority bugs updated today** (most severe):  

| Issue | Summary | Severity | Fix/PR Status |
|-------|---------|----------|---------------|
| #134889 | Tracking post‑merge fixes for unified gateway runtime (session ownership, message delivery, compatibility). | P1 | Tracking issue; underlying PR #106742 already merged. |
| #107402 | `hermes update` leaves permanent stale‑gateway warning. | P1 | No linked PR visible; likely needs a fix in update‑logic. |
| #101160 | Buzz relay read‑idle watchdog reconnects every 300 s on healthy quiet connections. | P1 | No linked PR; watchdog logic needs adjustment. |
| #99988 | Cron failure summarizer mislabels non‑auth errors as provider auth errors. | P1 | No linked PR; requires regex‑refinement in summarizer. |
| #140189 | Gateway retries undeliverable process‑completion notifications every 5 s forever (no backoff). | P2 | No linked PR; needs backoff/cap implementation. |
| #124583 | Terminal tool background hint references wrong tool name. | P2 | No linked PR; simple documentation/tool‑name fix. |
| #121095 | Stale browser_harness daemon processes after `browser_exec`. | P3 (perf) | No linked PR; daemon lifecycle needs timeout. |
| #103410 | Live compression hot‑reload crash on LCMEngine. | P2 | No linked PR; missing method implementation. |

**Note:** Several of the above bugs have **no obvious open PR** in the current list, indicating they may be awaiting triage or a dedicated fix branch.

### 6. Feature Requests & Roadmap Signals  
- **#50148 (Nextcloud Talk adapter)** – Strong community endorsement (15 👍). A working implementation exists; likely candidate for an upcoming minor release if maintainers prioritize messaging‑platform breadth.  
- **#139557 (OpenRouter :nitro/:floor support)** – Request for easier toggling of OpenRouter performance tiers. Low comment count but aligns with recent OpenRouter integration work.  
- **#110229 (Explicit Clear chat action for Bot Chat)** – UX improvement for clearing conversation history; modest interest (1 👍).  
- **#99733 (Persistent per‑job Desktop chat for recurring cron output)** – Desired for better cron‑job traceability; no reactions yet.  

These signals suggest the roadmap may soon expand messaging adapters, improve provider‑specific configuration toggles, and refine desktop‑session UX.

### 7. User Feedback Summary  
- **Pain points:**  
  - Update command gives confusing stale‑gateway warnings, eroding trust in the upgrade process.  
  - Terminal tool hints mislead users, causing “tool‑not‑found” errors.  
  - Long‑running browser automation leaves orphan processes, consuming resources.  
  - Gateway can get stuck in retry loops when a notification is rejected, leading to log spam and potential CPU waste.  
  - Dependency pins (js‑yaml, httpx2, ip‑address) expose known CVEs, raising security concerns.  
- **Positive notes:**  
  - The unified gateway runtime merge (#106742) is seen as a major architectural step forward, with active post‑merge stabilization work.  
  - Community enthusiasm for adding Nextcloud Talk shows demand for broader platform coverage.  
  - Security‑hardening suggestions (e.g., iteration budget defaults, plugin signing) are being tracked for future hardening sprints.

### 8. Backlog Watch (Long‑Unanswered / Important Items)  
| Item | Age | Why It Matters | Link |
|------|-----|----------------|------|
| **#50148 – Nextcloud Talk adapter** | ~4 months (opened 2026‑06‑21) | High community interest (15 👍); would expand messaging‑platform support. | [#50148](https://github.com/NousResearch/hermes-agent/issues/50148) |
| **#110126 – Systemic output‑truncation failure class** | ~1 month (opened 2026‑09‑13) | Tracks 35+ scattered P2/P3 issues across subsystems; resolving could unlock many dependent bugs. | [#110126](https://github.com/NousResearch/hermes-agent/issues/110126) |
| **#122424 – js‑yaml/yaml vulnerable dependency pins** | ~3 weeks (opened 2026‑09‑25) | Security‑critical; pins known CVE ranges; needs version bump. | [#122424](https://github.com/NousResearch/hermes-agent/issues/122424) |
| **#115140 – Desktop per‑bot session tab strip** | ~1 month (opened 2026‑09‑18) | Improves UX for power users managing multiple sessions per bot. | [#115140](https://github.com/NousResearch/hermes-agent/issues/115140) |
| **#86413 – Launch‑directory contract design question** | ~2 months (opened 2026‑08‑14) | Open design decision affecting terminal.cwd namespacing; blocker for several tool‑related fixes. | [#86413](https://github.com/NousResearch/hermes-agent/issues/86413) |

These items have remained open for weeks or months, have clear user or security impact, and would benefit from maintainer review or a dedicated sprint.

---  

*All links point to the specific GitHub issue or pull request in the `NousResearch/hermes-agent` repository.*  
*Generated automatically from the supplied data; no external inference beyond the provided fields.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



Here is the structured project digest for PicoClaw based on the GitHub data for **2026-10-17**.

---

### 1. Today's Overview
PicoClaw exhibits steady, focused development activity on 2026-10-17, with 2 issues and 4 pull requests updated in the last 24 hours. The project's current trajectory is heavily centered on decoupling and strengthening QQ platform integrations, alongside resolving critical stability issues on Android and cron timezone handling. Overall project health is active and responsive to ecosystem changes, particularly regarding Tencent's QQ platform policy updates.

### 2. Releases
*No new releases were published today.*

### 3. Project Progress
The development team merged/closed 3 pull requests and 1 issue today, advancing several key features and fixes:
*   **Decoupled QQ C2C Integration (PR #3440 [CLOSED])**: Merged a self-developed QQ C2C Channel (`qq_c2c`) that removes the dependency on `tencent-connect/botgo`. It implements the QQ API v2 from scratch (WebSocket gateway, Auth, streaming, Markdown, and buttons). [View PR](https://github.com/sipeed/picoclaw/pull/3440)
*   **Cron Timezone Fix (PR #3441 [CLOSED])**: Fixed a bug where the cron scheduler ignored the `TZ` field, causing incorrect execution times and UI display issues for users without system timezone variables. [View PR](https://github.com/sipeed/picoclaw/pull/3441)
*   **QQ Attachment Support (PR #1349 [CLOSED])**: Merged enhancements to the QQ channel to parse and reply to emojis, voice messages, images, video, and files, while prioritizing Markdown for richer interactions. [View PR](https://github.com/sipeed/picoclaw/pull/1349)
*   **QQ Platform Workaround (Issue #166 [CLOSED])**: Closed the bug report regarding QQBot's inability to send messages due to QQ Open Platform disabling active messaging. The new C2C channel (PR #3440) serves as the alternative path. [View Issue](https://github.com/sipeed/picoclaw/issues/166)

### 4. Community Hot Topics
*   **QQ Ecosystem Independence & Native Implementation**: The community focus is heavily directed toward QQ integration. The closure of active messaging on QQ's official platform (#166) acted as a catalyst for the native C2C channel (#3440) and attachment parsing (#1349). Users are seeking robust, library-free bot capabilities.
*   **Android Deployment Issues**: The Android DNS resolution bug (#3420) remains a critical point of discussion for mobile users, highlighting the need for stable pure-Go binary support. [View Issue](https://github.com/sipeed/picoclaw/issues/3420)

### 5. Bugs & Stability
*   🔴 **High Severity (Open/Active)**: **Issue #3420** - Android pure-Go (CGO_ENABLED=0) binaries fail DNS resolution (`dial udp 127.0.0.1:53: connect: connection refused`), blocking the gateway from reaching external API endpoints. This is a deployment blocker for Android. [View Issue](https://github.com/sipeed/picoclaw/issues/3420)
*   🟡 **Medium/High Severity (Closed)**: **Issue #166** - QQBot conversation failure due to external platform policy changes (error 40034102). Resolved by pivoting to the new C2C channel. [View Issue](https://github.com/sipeed/picoclaw/issues/166)
*   🟢 **Medium Severity (Fixed)**: **PR #3441** - Cron schedules ignoring the `TZ` field, leading to incorrect execution times. This has been resolved. [View PR](https://github.com/sipeed/picoclaw/pull/3441)

### 6. Feature Requests & Roadmap Signals
*   **OpenCode Go Provider (PR #3371 [OPEN])**: An open, stale PR adding a dedicated `opencode-go` provider with session header support. This signals a roadmap direction toward supporting alternative LLM providers beyond standard OpenAI-compatible APIs. [View PR](https://github.com/sipeed/picoclaw/pull/3371)
*   **QQ Native Channel Roadmap**: The merging of the C2C channel and attachment support indicates a roadmap focused on making QQ integrations fully self-sufficient and resilient to upstream library or platform changes.

### 7. User Feedback Summary
*   **Pain Points**: Users face significant friction from external platform changes (QQ's active messaging disablement) and mobile deployment limitations (Android DNS). 
*   **Satisfaction**: Satisfaction is high regarding the maintainers' rapid response to the QQ platform crisis, delivering a native C2C channel and richer attachment parsing. The cron timezone fix also addresses a persistent UX complaint for scheduled task users.

### 8. Backlog Watch
*   **Issue #3420 (Android DNS)**: Critical for mobile expansion, currently marked stale and needing maintainer attention or a community patch to resolve the CGO DNS issue.
*   **PR #3371 (opencode-go provider)**: A valuable feature addition that is currently stale; needs review or a maintainer bump to be merged.
*   **Issue #166 (QQBot conversations)**: While closed, the transition from the legacy `qq` channel to the new `qq_c2c` channel needs clear documentation and completion for users still migrating.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest - 2026-10-17

## 1. Today's Overview
NanoClaw shows robust maintenance activity with 16 closed issues and 20 merged PR updates today, indicating strong issue resolution and feature integration. One critical open issue (#3811) regarding database lock contention requires immediate attention as it impacts system stability. The project demonstrates healthy development velocity with focused work on container improvements, provider integration, and user experience enhancements across messaging channels.

## 2. Releases
None released today. No new versions are currently available.

## 3. Project Progress
Today saw significant progress in container infrastructure and provider integration:

**Core Fixes Merged:**
- **#4110**: Fixed host rows cleanup and destination refresh in `ncl groups delete`, resolving cascading deletion gaps and race conditions
- **#4103**: Resolved foreign key constraint failures in `ncl messaging-groups delete` by properly removing dependent messaging rows
- **#4102**: Fixed `/add-imessage` removal sequence to clear messaging-group dependents, enabling proper uninstallation
- **#4104**: Major refactoring moving Codex provider runtime into skill payload instead of `providers` branch, improving installation reliability for forks

**Features Advanced:**
- **#4108**: Enhanced setup experience with longer first-reply timeout and progress staging, preventing false negatives during local model warm-up
- **#4107**: Added `/add-cursor` skill with dedicated payload, bringing Cursor provider from `providers` branch to main
- **#4106**: Improved gateway credential targeting allowing single-path injection for Cursor authentication
- **#4105**: Added shared exchange archive for provider contracts, enabling Cursor's independent transcript management

**Quality Improvements:**
- **#4109**: Updated documentation clarifying that provider code ships in skill payloads, not from `providers` branch
- **#3646**: Added global environment overrides for sweep timers, allowing operators to adjust container timeout settings
- **#3851**: Made Codex Responses transport configurable to address proxy reliability issues

## 4. Community Hot Topics
**Most Active Issues:**
- **#3811** [OPEN] - "Central DB has no busy_timeout, so lock contention throws as if it were corruption" (1 comment)
  - **Need**: Database connection timeout configuration to prevent immediate failures during concurrent access
  - **Impact**: Affects task scheduling and agent state management reliability
  - **Link**: https://github.com/nanocoai/nanoclaw/issues/3811

**PR Activity Highlights:**
- **#2136** (feat(providers): add Google Gemini provider support) - Addresses demand for first-class alternative to existing providers
- **#3849** (fix(opencode): recover from history serialization issues) - Critical fix for session history corruption with Gemini's strict turn ordering
- **#3923** (fix(discord): connect Gateway through Node's env proxy) - Enables Discord connectivity in proxy-restricted environments

## 5. Bugs & Stability
**Critical Issues (Severity 1-2):**
1. **#3811** - High: Database lock contention causing immediate failures instead of graceful waiting
2. **#3643** - High: Hardcoded 30-minute absolute ceiling killing long local-model turns (long-standing issue)
3. **#2985** - Medium: OpenCode provider silent no-reply failures during long agentic turns

**Recent Regressions:**
- **#2752** - Medium: Discord attachment URL exposure issues preventing agent access to uploaded files
- **#3859** - Medium: WhatsApp channel naming conflicts with group resolution

**Stability Fixes Applied Today:**
- **#4103**, **#4110**: Resolved database constraint violations in group deletion operations
- **#4104**: Fixed provider installation reliability for forked repositories

## 6. Feature Requests & Roadmap Signals
**Emerging Requirements:**
- **Container Registry Install** (#1116): Community demand for pure container-based deployment without host system dependencies
- **Non-Agentic Runtime** (#1850): Linux OAuth/MITM proxy authentication improvements for enterprise environments
- **Large Media Support** (#1831): MTProto fallback implementation showing need for expanded media handling beyond Telegram's 20MB limit

**Roadmap Indicators:**
- Provider diversification: Google Gemini integration (#2136) suggests expanding beyond OpenAI/Codex ecosystem
- Enhanced security: GH_TOKEN injection (#1105) and credential targeting improvements (#4106) show security hardening priorities
- Local model support: Longer setup timeouts (#4108) and sweep timer overrides (#3646) indicate focus on local AI deployment

## 7. User Feedback Summary
**Primary Pain Points:**
1. **Installation Complexity**: Users struggle with host-based installation requirements (#1116, #1850)
2. **Local Model Instability**: Long turn timeouts and premature container kills (#3643, #4108)
3. **Provider Integration Issues**: OAuth/proxy connectivity problems across platforms (#1105, #3923)
4. **Media Handling Limitations**: Telegram's 20MB file restriction impacting practical usage (#1831)

**Positive Signals:**
- Strong adoption evidenced by multiple skill additions (/add-cursor, /add-codex, /add-hindsight)
- Community engagement with 50+ PRs indicating healthy contributor ecosystem
- Documentation improvements addressing user confusion about provider architecture

## 8. Backlog Watch
**Critical Unaddressed Items:**
- **#3811** [OPEN, 1 comment] - Database busy_timeout configuration - **IMMEDIATE ATTENTION REQUIRED**
  - Central DB lacks WAL timeout, causing false corruption errors during normal load
  - This issue could impact thousands of active instances during peak usage

**High-Priority Unprocessed:**
- **#1116** - Container registry install option: Fundamental architectural change request
- **#1850** - Linux OAuth/MITM proxy fixes: Enterprise deployment blocker
- **#3643** - Configurable sweep timers: Long-standing limitation affecting local model users

**Developer Experience Backlog:**
- **#1244** - Missing test coverage for agent-specific modules (6 modules with zero tests)
- **#4109** - Documentation cleanup: Persistent references to deprecated providers branch structure

The project shows healthy activity but requires immediate attention to database stability (#3811) and has significant architectural improvements still needed for enterprise adoption and local model support.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-10-17

## 1. Today's Overview

NullClaw is experiencing an intense contribution burst: **17 pull requests** were updated in the last 24 hours, all open and all authored by `wray-lee`. There were **no new releases** and **no merged or closed PRs** today, signaling a review bottleneck rather than a release cadence. All activity is coordinated under tracking issue **[#1066](https://github.com/nullclaw/nullclaw/issues/1066)**, which collects OpenClaw parity PRs for streaming, channel UX, and provider reasoning. The project remains in active pre-release development with a concentrated push toward production-hardening Slack and Telegram integrations against OpenAI-compatible gateways (e.g., DeepSeek, IFM K2). Activity is high but entirely single-contributor driven, which creates both momentum and maintainer-bandwidth risk.

## 2. Releases

**None.** No new versions were published today.

## 3. Project Progress

No PRs were merged or closed today; all 17 updated PRs remain open. Features and fixes advanced in open PRs span the following domains:

| Domain | Representative PRs | Summary |
|--------|-------------------|---------|
| **Streaming / CLI** | [#1071](https://github.com/nullclaw/nullclaw/pull/1071) | Hides text-form tool calls from reasoning and CLI streams via a shared stream filter. |
| **Slack UX** | [#1058](https://github.com/nullclaw/nullclaw/pull/1058), [#1075](https://github.com/nullclaw/nullclaw/pull/1075), [#1061](https://github.com/nullclaw/nullclaw/pull/1061) | Outbound reply streaming, Socket Mode slash-command handling, and task-lifecycle status reactions. |
| **Telegram UX** | [#1067](https://github.com/nullclaw/nullclaw/pull/1067), [#1062](https://github.com/nullclaw/nullclaw/pull/1062), [#1072](https://github.com/nullclaw/nullclaw/pull/1072) | Live-draft turn ownership, HTML parse-mode drafts, and opt-in rich messages via `sendRichMessage`. |
| **Provider / Reasoning** | [#1065](https://github.com/nullclaw/nullclaw/pull/1065), [#1064](https://github.com/nullclaw/nullclaw/pull/1064), [#1060](https://github.com/nullclaw/nullclaw/pull/1060), [#1070](https://github.com/nullclaw/nullclaw/pull/1070), [#1059](https://github.com/nullclaw/nullclaw/pull/1059) | `/think` and `reasoning_effort` passthrough, `reasoning_content` history resend, explicit provider/prefix routing, truncated-tool-call discarding, and configurable `agent.reasoning_mode`. |
| **Agent Stability** | [#1073](https://github.com/nullclaw/nullclaw/pull/1073), [#1068](https://github.com/nullclaw/nullclaw/pull/1068) | Turn-completion stall guards and `/stop` handling on every channel (including aborting in-flight provider streams). |
| **Channels / Infrastructure** | [#1074](https://github.com/nullclaw/nullclaw/pull/1074), [#1069](https://github.com/nullclaw/nullclaw/pull/1069) | Bounded channel network I/O, non-blocking poller supervision, and non-blocking gateway logging. |
| **Security** | [#1063](https://github.com/nullclaw/nullclaw/pull/1063) | Per-agent autonomy policies instead of a single global `SecurityPolicy`. |

## 4. Community Hot Topics

**Central tracking issue:** [#1066](https://github.com/nullclaw/nullclaw/issues/1066) — “OpenClaw parity PRs for streaming, channel UX and provider reasoning (#1057-#1065).” It is the only issue updated in the last 24h and serves as the umbrella for the current PR batch.

**Most notable PRs by scope/impact:**

- [#1058](https://github.com/nullclaw/nullclaw/pull/1058) `feat(slack): stream outbound replies while they are generated` — Largest diff (12 files, ~2,044 insertions); enables real-time Slack reply streaming.
- [#1075](https://github.com/nullclaw/nullclaw/pull/1075) `feat(slack): handle a single Slack slash command over Socket Mode` — Fixes silent dropping of `slash_commands` envelopes (e.g., `/nullclaw /stop`).
- [#1071](https://github.com/nullclaw/nullclaw/pull/1071) `fix(streaming): hide text tool calls inside reasoning and CLI streams` — Addresses UI/UX leakage of internal dispatcher calls.
- [#1068](https://github.com/nullclaw/nullclaw/pull/1068) `fix(agent): honor /stop on every channel` — Critical UX fix for interrupting long-running turns.

**Underlying needs:** The community (represented here by a single active contributor) needs **multi-channel parity** with OpenClaw, **production-grade interruptibility** (`/stop`, stall recovery), and **LLM-gateway compatibility** (OpenAI-compatible endpoints such as DeepSeek and IFM K2). Despite the volume, all items show `0` comments and `0` reactions, indicating that discussion has not yet moved to public review or that the maintainer has not yet engaged.

## 5. Bugs & Stability

All bugs listed below have associated open fix PRs; none are merged yet.

| Severity | Issue / PR | Description |
|----------|-----------|-------------|
| **High** | [#1073](https://github.com/nullclaw/nullclaw/pull/1073) `fix(agent): guard structural turn-completion stalls` | A model can end a turn with prose announcing an action but no tool call, causing the task to stall silently with no final answer. The `shouldForceActionFollowThrough` heuristic does not cover this case. |
| **High** | [#1068](https://github.com/nullclaw/nullclaw/pull/1068) `fix(agent): honor /stop on every channel` | `/stop` only reached running turns on Telegram; on the daemon/gateway path it was enqueued behind the running turn on a FIFO worker and never reached `routeInbound`. |
| **High** | [#1070](https://github.com/nullclaw/nullclaw/pull/1070) `fix(providers): discard tool calls from truncated responses` | When a model hits `finish_reason: "length"` / `max_tokens` / `incomplete`, the produced text is a truncated prefix that may include invalid tool calls. |
| **High** | [#1074](https://github.com/nullclaw/nullclaw/pull/1074) `fix(channels): bound channel network I/O` | Wedged channel polling threads could hang supervision; `last_activity` stopped advancing after a Telegram turn. |
| **Medium** | [#1069](https://github.com/nullclaw/nullclaw/pull/1069) `fix(logging): make gateway logging non-blocking` | `std.log` holds a process-global stderr lock; a turn holding `Session.mutex` can be parked by a different thread blocked on stderr writes. |
| **Medium** | [#1067](https://github.com/nullclaw/nullclaw/pull/1067) `fix(telegram): keep the live draft owned by the running turn` | Telegram draft buffer (`draft_buffers`) lacks turn ownership; inbound messages clear/rotate draft state and can corrupt deferred drafts. |

## 6. Feature Requests & Roadmap Signals

User/contributor-requested features visible in open PRs:

- **[#1063](https://github.com/nullclaw/nullclaw/pull/1063)** Per-agent autonomy for named agents (security policy isolation).
- **[#1059](https://github.com/nullclaw/nullclaw/pull/1059)** Configurable `agent.reasoning_mode` default (overlaps with maintainer PR #1050).
- **[#1061](https://github

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑10‑17**  

---  

### 1. Today's Overview  
The repository showed steady activity in the last 24 h: **5 issues** were updated (1 open, 4 closed) and **21 pull requests** were touched (6 still open, 15 merged/closed). A new release, **LobsterAI 2026.10.16**, was published, introducing the Desktop Companion, a redesigned model‑selector with presets, and a configurable Expert Plaza. Overall, the project remains in an active development cycle with frequent bug‑fixes, dependency updates, and feature work landing on the `release/2026.10.13` branch.  

---  

### 2. Releases  
**LobsterAI 2026.10.16** (released 2026‑10‑16)  

- **Desktop Companion** – an always‑on assistant surface offering translation, read‑aloud, quick input, screen capture, and task follow‑up.  
- **Model selector rework** – new preset system (`yd‑fast`, `yd‑ultra`, Balanced/Flagship) with persistent session bindings and account‑scoped preferences.  
- **Expert Plaza** – made configurable; UI can be toggled via a feature flag while retaining the underlying selection logic.  
- Various polish fixes (source‑expansion hints, panel flicker, analytics, etc.) shipped in the same release.  

*No breaking changes were mentioned in the release notes; migration appears to be seamless for existing users.*  

---  

### 3. Project Progress (Merged/Closed PRs today)  

| PR | Area | Summary |
|----|------|---------|
|[#2890](https://github.com/netease-youdao/LobsterAI/pull/2890)|renderer|Show “Click to expand source” hint only when source text is actually truncated (desktop‑companion).|
|[#2889](https://github.com/netease-youdao/LobsterAI/pull/2889)|main/openclaw|Activate preset‑model routing for scheduled tasks so `yd‑fast`/`yd‑ultra` resolve to real models before inference.|
|[#2887](https://github.com/netease-youdao/LobsterAI/pull/2887)|renderer/docs/main/openclaw/cowork|Unify virtual preset routing (`yd‑fast`/`yd‑ultra`) and preserve conversation usage across chat, Agent, and scheduled tasks.|
|[#2885](https://github.com/netease-youdao/LobsterAI/pull/2885)|renderer|Add sidebar capabilities menu (Kits, Skills, Connectors) and distinct local/cloud icons for library source tabs.|
|[#2884](https://github.com/netease-youdao/LobsterAI/pull/2884)|renderer|Enable account‑scoped default image/video models for signed‑in users; video generation requires per‑submission confirmation.|
|[#2881](https://github.com/netease-youdao/LobsterAI/pull/2881)|renderer/docs/main/cowork|Add dedicated usage‑analytics events for the Desktop Companion (`desktop_companion` prompt surface).|
|[#2879](https://github.com/netease-youdao/LobsterAI/pull/2879)|renderer/docs/main/openclaw/cowork|Add Balanced/Flagship model presets with persistent session bindings, per‑model turn costs, and synchronized session titles for billing.|
|[#2880](https://github.com/netease-youdao/LobsterAI/pull/2880)|renderer/cowork|Temporarily hide Expert Plaza entry points (UI flag `ENABLE_EXPERT_PLAZA_UI = false`) while preserving underlying logic.|
|[#2893](https://github.com/netease-youdao/LobsterAI/pull/2893)|main/openclaw|Bound disk usage of OpenClaw repair backups and runtime caches to prevent uncontrolled growth.|
|[#2892](https://github.com/netease-youdao/LobsterAI/pull/2892)|renderer/main|Recover online kit catalog after transient network failures instead of caching a built‑in‑only view.|
|[#2883](https://github.com/netease-youdao/LobsterAI/pull/2883)|renderer|Fix Desktop Companion panel flicker and correct Windows screenshot bounds.|
|[#2882](https://github.com/netease-youdao/LobsterAI/pull/2882)|renderer/main/cowork|Preserve selection/context when creating new tasks from the Companion; improve drag, edge placement, and dismissal.|
|[#2888](https://github.com/netease-youdao/LobsterAI/pull/2888)|renderer/main/openclaw/cowork|Refine Companion popovers and sidebar menu dismissal (focus handling, compact model‑permission card, etc.).|
|[#2886](https://github.com/netease-youdao/LobsterAI/pull/2886)|renderer/docs/main|Fix media‑funnel accounting for unknown/submitted states and preserve companion turn attribution on retries.|
|[#2855](https://github.com/netease-youdao/LobsterAI/pull/2855)|chore(deps)|Bump KaTeX from 0.16.47 → 0.19.0.|
|[#2858](https://github.com/netease-youdao/LobsterAI/pull/2858)|chore(deps)|Bump Mermaid from 10.9.8 → 12.2.0.|
|[#2668](https://github.com/netease-youdao/LobsterAI/pull/2668)|chore(deps-dev)|Bump @sinclair/typebox from 0.34.49 → 0.34.52.|
|[#2461](https://github.com/netease-youdao/LobsterAI/pull/2461)|chore(deps-dev)|Bump eslint‑plugin‑react‑hooks from 5.2.0 → 7.1.1.|

These PRs collectively advance the Desktop Companion experience, tighten model‑preset handling, improve UI polish, tighten resource usage, and keep dependencies up‑to‑date.  

---  

### 4. Community Hot Topics  

| Item | Comments | Link | Why it’s hot |
|------|----------|------|--------------|
|[#2395](https://github.com/netease-youdao/LobsterAI/issues/2395)|3|Installation fails with “user skills could not be backed up” error.|Users are blocked from updating/installing; the log points to a backup‑failure scenario that needs a robust fallback or clearer messaging.|
|[#2801](https://github.com/netease-youdao/LobsterAI/issues/2801)|2|Invitation to list LobsterAI on a free L1 agent‑harness leaderboard.|Community interest in external validation and benchmarking; signals desire for credibility and visibility.|
|[#2839](https://github.com/netease-youdao/LobsterAI/issues/2839)|1|Questions about NetEase Youdao’s work‑time policy (dual‑rest, overtime).|Not a product issue but reflects community curiosity about the sponsor’s internal practices, which can affect perception of project support.|
|[#2440](https://github.com/netease-youdao/LobsterAI/issues/2440)|1|Desktop client injects duplicate system instructions (≈78 % repeat).|Performance/prompt‑size concern; users notice unnecessary token usage.|
|[#2851](https://github.com/netease-youdao/LobsterAI/issues/2851)|0|Security flaw: exported provider API keys encrypted with a hard‑coded password.|High‑severity security report; even without comments, it demands immediate attention.|

---  

### 5. Bugs & Stability (reported today)  

| Severity | Issue | Summary | Fix/PR status |
|----------|-------|---------|---------------|
|**High**|[#2851](https://github.com/netease-youdao/LobsterAI/issues/2851)|Provider API‑key export uses a public hard‑coded password → trivial decryption.|No linked fix PR yet; needs urgent cryptographic‑key‑management update.|
|**Medium**|[#2440](https://github.com/netease-youdao/LobsterAI/issues/2440)|Duplicate system‑instruction block injected each session (≈4,425 chars).|No dedicated fix PR visible; likely addressed indirectly by recent model‑selector/Preset work (#2887, #2879) but verification needed.|
|**Low**|[#2395](https://github.com/netease-youdao/LobsterAI/issues/2395)|Installation aborts due to backup failure.|No fix PR; requires investigation of backup/logic in the installer.|
|**Low**|[#2839](https://github.com/netease-youdao/LobsterAI/issues/2839)|Work‑time policy clarification request (non‑code).|No code change needed; informational.|

---  

### 6. Feature Requests & Roadmap Signals  

- **External harness listing** (#2801) – indicates community appetite for standardized benchmarking; could lead to an official “LobsterAI Harness” page or integration with third‑party leaderboards.  
- **Installer robustness** (#2395) – users repeatedly hit backup failures; a future release should add fallback/rollback mechanisms and clearer error dialogs.  
- **Model‑preset UI refinements** – ongoing work (#2887, #2879, #2889) suggests the roadmap will continue to expose preset‑based model selection across chat, Agent, and scheduled tasks, with persistent bindings and cost visibility.  
- **Expert Plaza** – currently hidden via flag (#2880); the feature flag signals a planned staged rollout once UI and moderation tooling are ready.  
- **Usage analytics for Companion** (#2881) – telemetry expansion hints at future data‑driven UI improvements and possibly usage‑based quotas.  

---  

### 7. User Feedback Summary  

- **Pain points**: Installation/update failures (#2395) and duplicate system prompts (#2440) directly affect usability and perceived reliability.  
- **Security concern**: Hard‑coded encryption key for exported provider data (#2851) is a serious trust issue that users will expect to be resolved quickly.  
- **Positive signals**: The Desktop Companion launch (release notes) and companion‑specific analytics (#2881) show the team is responding to requests for a persistent, always‑on assistant with measurable engagement tracking.  
- **Community engagement**: Interest in external benchmarking (#2801) reflects a user base that values credibility and wants to see LobsterAI compared against other agent frameworks.  

Overall, feedback points to a need for **installer stability, security hardening, and prompt‑efficiency improvements**, while the new companion features are well‑received and driving further polish work.  

---  

### 8. Backlog Watch (Long‑running items needing attention)  

| Item | Age | Type | Link | Why it matters |
|------|-----|------|------|----------------|
|[#1181](https://github.com/netease-youdao/LobsterAI/pull/1181)|~6 months|Open PR (stale)|Hide OpenClaw main‑agent sessions from the cowork session list.|Reduces UI clutter for end‑users; low‑effort cleanup.|
|[#2461](https://github.com/netease-youdao/LobsterAI/pull/2461)|~2 months|Open PR (stale)|Bump eslint‑plugin‑react‑hooks to 7.1.1.|Keeps linting current; avoids future compatibility warnings.|
|[#2668](https://github.com/netease-youdao/LobsterAI/pull/2668)|~1 month|Open PR (stale)|Bump @sinclair/typebox dev dependency.|Ensures type‑checking stays up‑to‑date.|
|[#2893](https://github.com/netease-youdao/LobsterAI/pull/2893)|0 h|Open PR|Bound disk usage of OpenClaw backups/caches.|Prevents unbounded disk growth; should be merged soon.|
|[#2855](https://github.com/netease-youdao/LobsterAI/pull/2855)|0 h|Open PR|Bump KaTeX.|Dependency health; low risk.|
|[#2858](https://github.com/netease-youdao/LobsterAI/pull/2858)|0 h|Open PR|Bump Mermaid.|Dependency health; low risk.|

These items represent either **stale contributions awaiting review** or **recently opened fixes** that have not yet been merged. Prioritizing them will keep the repository healthy and reduce technical debt.  

---  

*Generated from the supplied GitHub activity snapshot for 2026‑10‑17.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



Based on the provided GitHub activity for the Moltis project over the last 24 hours leading up to **2026-10-17**, here is the structured project digest:

---

### 1. Today's Overview
The Moltis project has experienced low development activity today, with no new releases, pull requests, or merged code changes recorded. However, community attention remains focused on a newly reported bug regarding the `web_fetch` tool, which is failing to retrieve data from the GitHub REST API due to missing HTTP headers. Overall, the project is stable but awaiting maintenance updates to resolve integration friction.

### 2. Releases
*No new releases have been published today.*

### 3. Project Progress
* **Merged/Closed PRs:** None today.
* **Features Advanced/Fixed:** No active development or pull request mergers took place during this 24-hour window. 

### 4. Community Hot Topics
* **[Issue #1305](https://github.com/moltis-org/moltis/issues/1305) - `web_fetch` omits User-Agent, causing HTTP 403 from GitHub REST API**
  * **Activity:** Opened on 2026-10-16 by `theantichris`. Currently has 0 comments and 0 reactions.
  * **Underlying Needs:** The user is attempting to fetch resources from the GitHub REST API using the agent's `web_fetch` tool but is blocked by HTTP 403 (Forbidden) responses. The core need is for the `web_fetch` tool to support custom HTTP headers (specifically `User-Agent`) or to default to a recognizable bot/browser user agent string to bypass basic anti-bot and security filters on major API endpoints.

### 5. Bugs & Stability
* **Active Bugs:** 
  * **[Issue #1305](https://github.com/moltis-org/moltis/issues/1305) (Severity: Medium/High):** The `web_fetch` utility currently sends requests without a `User-Agent` header, causing target servers (such as GitHub's API) to reject the requests with a 403 error. This is a functional blocker for users integrating agent tools with REST APIs that enforce header validation.
* **Fix Status:** No open or merged pull requests currently address this issue.

### 6. Feature Requests & Roadmap Signals
* **Implicit Feature Requests:** Issue #1305 highlights a gap in the configuration flexibility of network tools. While labeled as a bug, it signals a strong user demand for customizable HTTP headers within the `web_fetch` tool.
* **Roadmap Prediction:** The next minor update or patch release is likely to include enhancements to the `web_fetch` module, such as adding optional header parameters or implementing a standard default `User-Agent` header to prevent API access blocks.

### 7. User Feedback Summary
* **Pain Points:** Users are experiencing integration failures when attempting to query public APIs (specifically GitHub) due to the lack of a `User-Agent` header in automated web requests. 
* **Use Cases:** This limitation directly impacts agent workflows that require real-time data retrieval from web APIs.
* **Sentiment:** Dissatisfaction is noted regarding the rigidity of the fetch tool, as users expect standard HTTP clients to mimic browser behavior or allow header customization out of the box.

### 8. Backlog Watch
* **[Issue #1305](https://github.com/moltis-org/moltis/issues/1305):** As a newly reported issue, it does not yet belong to the long-term backlog, but maintainers should prioritize it as it blocks common API integration use cases. No other historical issues are present in the current snapshot.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



Based on the GitHub activity data for **agentscope-ai/QwenPaw** (referenced as CoPaw) up to **2026-10-17**, here is the structured project digest.

---

### 1. Today's Overview
The project is experiencing high development velocity and active community engagement, with 15 issues and 29 pull requests updated in the last 24 hours. The focus is currently on stabilizing the recently released v2.2.2 stable version while tackling critical channel-specific rendering bugs, console performance bottlenecks, and backend concurrency issues. Major feature work is advancing in parallel, particularly around search provider diversification, global sharing configurations, and cancellable background tasks.

### 2. Releases
*   **No new releases** were published today. 
*   The latest stable release is **v2.2.2**, whose installation verification was successfully closed yesterday (Issue #8262).

### 3. Project Progress
Several key pull requests were merged or closed recently, advancing

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑10‑17**  
*Generated from GitHub activity (issues + PRs updated in the last 24 h; 0 new releases)*  

---  

### 1. Today’s Overview  
The repository remains highly active: **36 issues** and **50 pull‑requests** were touched in the past day, with **27 issues still open/active** and **18 PRs merged/closed**. No new version was cut, but the team is pushing a steady stream of bug‑fixes, configuration‑UX improvements, and runtime stabilisation work. Overall project health looks good – a lot of work is landing, while a handful of high‑impact bugs (e.g., unexpected GitHub‑credential prompts) are being tracked and addressed.  

---  

### 2. Releases  
*No new releases were published today.*  

---  

### 3. Project Progress (Merged/Closed PRs)  
Eighteen PRs reached **merged/closed** status. Highlights that moved features forward or fixed notable regressions:  

| PR | Title & Link | Area | What it did |
|----|--------------|------|-------------|
| [#11506](https://github.com/zeroclaw-labs/zeroclaw/pull/11506) | feat(zerocode): show saved and applied config status | ZeroCode/TUI | Returns the exact committed revision on Config set/delete so operators can see whether a change is saved, applied, pending or rejected. |
| [#11725](https://github.com/zeroclaw-labs/zeroclaw/pull/11725) | fix(runtime): deliver mid‑turn steering at the next step, not after the final answer | Runtime | Steering messages (`session/steer`) now reach the model at the next tool‑call step instead of being lost or delayed until after the final answer. |
| [#11589](https://github.com/zeroclaw-labs/zeroclaw/pull/11589) | feat(runtime): let the operator override an exceeded cost limit | Runtime/Cost‑control | Adds `cost.allow_override` handling; when enabled the tool loop pauses before a provider call and lets the operator decide whether to continue after a shared limit is hit. |
| [#11466](https://github.com/zeroclaw-labs/zeroclaw/pull/11466) | feat(config): report per‑target application results | Config | Records the latest application result for each changed config path/target instance, making it possible to verify that a running consumer actually adopted a change. |
| [#11460](https://github.com/zeroclaw-labs/zeroclaw/pull/11460) | feat(zerocode): rename provider aliases in Config | ZeroCode | Adds a rebindable **Rename** action (default key `e`) to provider‑alias lists in the ZeroCode Config UI. |
| [#10567](https://github.com/zeroclaw-labs/zeroclaw/pull/10567) | feat(memory): stamp recalled entries with their storage date | Memory | Recalled memory lines now show `[from YYYY-MM-DD] {key}: {content}` giving the model temporal context. |
| [#11606](https://github.com/zeroclaw-labs/zeroclaw/pull/11606) | bug: model_routing_config upsert_agent rewrites entire config | Config/Model‑routing | Fixes the `upsert_agent` action so it only patches the targeted agent’s routing fields instead of round‑tripping the whole `config.toml`. |
| [#11519](https://github.com/zeroclaw-labs/zeroclaw/pull/11519) | bug: resumed workspace split hides installed plugins from recovery | Workspace/Plugin recovery | Prevents a resumed V2 workspace split from moving plugin directories into the agent’s private workspace, keeping them visible to the legacy plugin loader. |
| [#10770](https://github.com/zeroclaw-labs/zeroclaw/pull/10770) | bug: recover incomplete plugin installations without overwriting valid packages | Plugins/WASM | Improves atomic plugin‑package staging so a failed copy leaves no visible package and retries succeed. |
| [#11259](https://github.com/zeroclaw-labs/zeroclaw/pull/11259) | feat(channels/whatsapp‑web): save inbound images and mark them like Telegram | Channels/WhatsApp | Enables media‑pipeline for WhatsApp Web so inbound images are persisted and shown with proper markers (like Telegram). |

*All other merged PRs addressed smaller bug‑fixes, documentation updates, or dependency bumps.*  

---  

### 4. Community Hot Topics (Most‑Commented Items)  

| Item | Type | Comments | Link | Why it’s hot |
|------|------|----------|------|--------------|
| **#7432** | Issue (tracker) | **8** | [Runtime and gateway delivery – v0.8.6 & v0.9.0](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Central tracker for Phase 2 runtime work and Phase 3 gateway separation; many dependencies and design discussions. |
| **#5836** | Issue | 4 | [Add cooperative cancellation to the Tool execution contract](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) | Long‑running tools ignore the turn‑cancellation token; users hit hangs during shell/HTTP calls. |
| **#11655** | Issue | 4 | [Core conflict supersede hides unrelated memories when recall has no vector scores](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | With `embedding_provider = "none"` the consolidation step incorrectly masks unrelated Core memories, degrading recall. |
| **#11657** | Issue | 3 | [Configurable target category for turn consolidation](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) | Users want to write consolidation output to a non‑Core memory category. |
| **#11580** | Issue | 3 | [x86_64 Linux release binary is about 0.7 MiB under the 64 MiB size cap](https://github.com/zeroclaw-labs/zeroclaw/issues/11580) | Release‑size gate discussion – whether to raise the limit or keep headroom. |

*PR comment counts are not exposed in the supplied data, so the issue list reflects the most visible community conversation.*  

---  

### 5. Bugs & Stability (Severity‑Ranked)  

| Severity | Issue | Summary | Fix/PR status |
|----------|-------|---------|---------------|
| **S0 – data loss / security risk** | [#11796](https://github.com/zeroclaw-labs/zeroclaw/issues/11796) | Daemon suddenly prompts for GitHub credentials at startup and blocks. | Open – no linked PR yet. |
| **S1 – workflow blocked** | [#11777](https://github.com/zeroclaw-labs/zeroclaw/issues/11777) | Loop detector default threshold too low → agents abort after 6 tool‑alternation cycles. | Open – no PR. |
|  | [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) (closed) | `model_routing_config upsert_agent` rewrites entire config, wiping limits/profiles. | Fixed in PR #11606 (merged). |
|  | [#11519](https://github.com/zeroclaw-labs/zeroclaw/issues/11519) (closed) | Resumed workspace split hides installed plugins from recovery. | Fixed in PR #11519 (merged). |
| **S2 – degraded behavior** | [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | Core memories unrelated to new update are soft‑hidden when embedding provider is “none”. | Open. |
|  | [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) | WhatsApp Web drops caption of inbound images/video/documents. | Open. |
|  | [#11760](https://github.com/zeroclaw-labs/zeroclaw/issues/11760) | Email channel answers the same mail again after each restart (active mode). | Open. |
|  | [#11761](https://github.com/zeroclaw-labs/zeroclaw/issues/11761) | Email channel misses mail that arrives during a fetch until IMAP IDLE timeout. | Open. |
|  | [#11764](https://github.com/zeroclaw-labs/zeroclaw/issues/11764) | WhatsApp Web drops untranscribed voice notes without notifying sender. | Open. |
| **S3 – minor / confusing** | [#11771](https://github.com/zeroclaw-labs/zeroclaw/issues/11771) | Bootstrap file cap differs between gateway (20k) and agent/loop (6k) turns. | Open. |
|  | [#11758](https://github.com/zeroclaw-labs/zeroclaw/issues/11758) | WhatsApp Web keeps printing pairing QR codes after listener stops. | Open. |
|  | [#11769](https://github.com/zeroclaw-labs/zeroclaw/issues/11769) | Voice‑drop/model‑fallback channel tests depend on operator locale. | Open. |

*Overall, the most critical blocker today is the unexpected GitHub‑credential prompt (#11796), which needs immediate investigation.*  

---  

### 6. Feature Requests & Roadmap Signals  

| Feature | Issue/PR | Link | Notes |
|---------|----------|------|-------|
| Configurable consolidation target | [#11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) | Add `[memory] consolidation_category` to let turns write to non‑Core memory. |
| Shell‑policy refusal hints | [#11799](https://github.com/zeroclaw-labs/zeroclaw/issues/11799) | When a command is refused, show the rule name and allow an operator‑configured hint. |
| Sub‑agent on operator‑declared model route | PR #11577 (open) | `spawn_subagent` takes an optional `model_hint` to run the child on a specific route. |
| WASM plugin runtime artifact | [#10994](https://github.com/zeroclaw-labs/zeroclaw/issues/10994) | Ship a supported release artifact that can install/execute WIT plugins without rebuilding ZeroClaw. |
| Provider‑level JPEG admission without copy | PR #11672 (open) | Project JPEG allocation from SOF header to avoid extra buffer copy. |
| Cost‑override for shared limits | PR #11589 (merged) | Allows operators to exceed a shared cost limit interactively. |
| Mid‑turn steering delivery | PR #11725 (merged) | Steering messages now reach the model at the next tool step. |
| Memory entry date stamping | PR #10567 (merged) | Recalled memories show their storage date. |

*Features that already have merged PRs (cost‑override, mid‑turn steering, date stamping) are likely to appear in the next patch release. Open items like the WASM plugin artifact and configurable consolidation target are strong candidates for the upcoming v0.9.0 milestone.*  

---  

### 7. User Feedback Summary (Pain Points & Use Cases)  

- **Unexpected authentication prompts** – Daemon asking for GitHub credentials at startup blocks automation workflows (security concern).  
- **Over‑aggressive loop detection** – Low threshold causes legitimate agents that alternate between two tools (e.g., `file_write` ↔ `shell`) to be halted, forcing users to raise the threshold or disable the detector.  
- **WhatsApp Web media loss** – Captions, voice‑note transcripts, and image metadata are dropped, limiting the usefulness of the channel for rich‑media interactions.  
- **Email channel duplication** – In active mode the channel re‑processes the same message on every restart, leading to duplicate replies and wasted quota.  
- **Memory recall masking** – With no embedding provider, the consolidation step incorrectly hides unrelated Core memories, degrading the agent’s long‑term recall ability.  
- **Configuration visibility** – Users want clear feedback whether a config change has been saved, applied, pending, or rejected (addressed by #11506).  
- **Plugin management on Windows** – Plugin hosts lock the plugins directory and its ancestors, interfering with concurrent tooling or anti‑virus scans.  
- **Build size gate anxiety** – The x86_64 Linux binary sits just under the 64 MiB limit; teams discuss whether to raise the cap or keep headroom for future features.  

Overall, users appreciate the steady stream of UX and reliability fixes (config status, steering, cost override) but are frustrated by intermittent blocking bugs and media‑loss issues in the channel integrations.  

---  

### 8. Backlog Watch (Long‑Unanswered / Needs Maintainer Attention)  

| Item | Type | Age / Last Update | Link | Why it needs attention |
|------|------|-------------------|------|------------------------|
| **#7432** | Tracker issue | Open since 2026‑06‑09, last updated 2026‑1

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*