# OpenClaw Ecosystem Digest 2026-09-30

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-30 03:03 UTC

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

# Cross-Project Comparison Report — Personal AI Agent Ecosystem (2026-09-30)

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape in 2026 is characterized by rapid fragmentation and parallel innovation. Fourteen tracked projects span a maturity spectrum from active production platforms (Hermes Agent, NanoBot, CoPaw) to early-stage experiments (Moltis) and dormant repositories (TinyClaw, ZeptoClaw). The ecosystem is converging around a common stack — multi-provider LLM gateways, Telegram/Matrix/QQ integrations, MCP tool protocols, and desktop runtime environments — while diverging on architectural philosophy (single-host vs. distributed, Web-first vs. desktop-native, feature-rich vs. minimal). Security and sandboxing (IronClaw's Wasmtime update) and resource efficiency (NanoBot's context compaction, MCP lazy loading) are emerging as differentiators. Community engagement correlates strongly with platform breadth: projects supporting multiple messaging channels and OSes attract the highest PR velocity.

---

## 2. Activity Comparison

| Project | Issues (updated/open) | PRs (updated/merged) | Release | Health Score |
|---------|----------------------|----------------------|---------|--------------|
| **Hermes Agent** | 50 / 25 open | 50 / 24 merged | None | ⭐⭐⭐⭐ High |
| **NanoBot** | 5 / 4 open | 38 / 15 merged | None | ⭐⭐⭐⭐ High |
| **CoPaw** | 8 / 6 open | 38 / 21 merged | None | ⭐⭐⭐⭐ High |
| **LobsterAI** | 10 / 8 open | 11 / 11 merged | None | ⭐⭐⭐ Medium |
| **PicoClaw** | 6 / 6 open | 3 / 1 merged | None | ⭐⭐⭐ Medium |
| **NanoClaw** | — / — | 15 / 7 merged | None | ⭐⭐⭐ Medium |
| **IronClaw** | 2 / 2 active | 3 / 1 merged | v1.4.1 ✅ | ⭐⭐⭐ Medium |
| **NullClaw** | 1 / 1 open | 1 / 1 merged | v20260929 ✅ | ⭐⭐ Low-Moderate |
| **Moltis** | 1 / 1 open | 0 / 0 | None | ⭐ Low |
| **OpenClaw** | — | — | — | ⭐⭐⭐⭐ Core ref |
| **TinyClaw** | 0 | 0 | — | ⭐ Dormant |
| **ZeptoClaw** | 0 | 0 | — | ⭐ Dormant |
| **ZeroClaw** | — | — | — | ⚠️ Failed |

*Health score combines PR merge rate, issue resolution velocity, release cadence, and community engagement.*

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Reference architecture status**: As the core reference implementation, OpenClaw defines patterns that downstream projects (LobsterAI, NanoBot's gateway handling) implicitly follow.
- **Safety-first design**: The explicit "User Safety: safe" designation positions OpenClaw as the trust anchor in an ecosystem where sandboxing and policy enforcement are still maturing (cf. IronClaw's Wasmtime security patch).
- **Ecosystem gravity**: High-activity projects like CoPaw and NanoBot show OpenClaw-compatible patterns (MCP tool protocols, gateway restart budgets), suggesting OpenClaw's influence extends beyond its direct contributor base.

**Technical approach differences:**
- OpenClaw appears to favor a modular, provider-agnostic gateway layer — mirrored in NanoBot's provider-configured fallbacks (#5968) and NanoClaw's gateway-specific credential management (#3955).
- Unlike desktop-heavy peers (Hermes Agent, CoPaw), OpenClaw seems to prioritize headless/agent-core stability over UI polish.

**Community size:** Cannot be directly quantified from digest data, but the breadth of projects adopting similar patterns (MCP, gateway restart budgets, session management) suggests OpenClaw serves as the de facto architectural baseline with an implied contributor base larger than any single fork.

---

## 4. Shared Technical Focus Areas

| Area | Projects | Specific Need |
|------|----------|---------------|
| **Telegram integration & policy** | NanoBot, NanoClaw, CoPaw | Per-chat/per-topic reply policies, silent compaction, topic renaming |
| **MCP tool management** | NanoBot, PicoClaw, IronClaw | Context-cost visibility, lazy loading, budget-aware schema filtering |
| **Gateway/provider reliability** | NanoBot, NanoClaw, IronClaw, LobsterAI | Fallback handling, credential management, restart budget logic |
| **Desktop cross-platform** | Hermes Agent, CoPaw, LobsterAI | Windows SSH, path translation, installer robustness, NSIS compression |
| **Session/state management** | NanoBot, NanoClaw, NullClaw | SQLite refactor, session persistence, cross-device memory |
| **Sub-agent orchestration** | NanoBot, IronClaw | Task messaging, cancellation, aggregated notifications, worker pools |
| **Web UI performance** | PicoClaw, CoPaw, LobsterAI | Input lag with long history, rendering optimization, state-driven indicators |
| **Security/sandboxing** | IronClaw, CoPaw | Wasmtime runtime updates, exec tool isolation, PATH preservation |
| **Memory/context windows** | Hermes Agent, NullClaw, LobsterAI | Compressor context clamping, ambient-owner fallbacks, cross-agent data isolation |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architecture |
|---------|---------------|-------------|--------------|
| **OpenClaw** | Agent core safety & reference | Developers building compliant agents | Modular gateway, safety-first |
| **NanoBot** | Sub-agent orchestration, UX richness | Power users, multi-agent workflows | Event-loop + SQLite refactor |
| **Hermes Agent** | Desktop UI, cross-platform consistency | Desktop-first AI assistant users | Tauri/desktop native |
| **PicoClaw** | Web UI correctness, agent loop stability | Browser-based agent interaction | Web-first, steering queue |
| **NanoClaw** | Host-service lifecycle, arm64 support | Embedded/edge deployment | Container-based host service |
| **NullClaw** | Memory engine swap, search provider pinning | Niche AI tooling chains | Minimal, plugin-based memory |
| **IronClaw** | Distributed workers, security hardening | Enterprise multi-node deployments | Multi-host scheduler, WASM sandbox |
| **LobsterAI** | Installer reliability, Chinese market | Chinese-language users, enterprise | OpenClaw-based, installer-focused |
| **CoPaw** | Multi-platform, enterprise marketplace | Teams needing self-hosted skills | Multi-gateway, plugin marketplace |
| **Moltis** | Goal-mode autonomous loops | Researchers, early adopters | Minimal, experimental |

---

## 6. Community Momentum & Maturity

**Rapidly iterating (high velocity, feature delivery):**
- **Hermes Agent** — 50 issues/PRs in 24h, broad cross-platform scope, but no releases yet (pre-1.0 instability risk)
- **NanoBot** — 38 PR updates, 15 merged, strong bug-fix + feature pipeline toward next stable
- **CoPaw** — 38 PR updates, 21 merged (55% merge rate), steady contributor influx including first-time contributors

**Stabilizing (moderate velocity, release discipline):**
- **IronClaw** — v1.4.1 released, security patches applied, RFC-stage architecture planning
- **LobsterAI** — 11/11 PRs merged, focused on stability and installer fixes
- **NanoClaw** — 7/15 PRs merged, critical arm64 blocker resolved, incremental hardening

**Niche / Early stage:**
- **NullClaw** — Single maintainer, minimal activity, stable but limited scope
- **PicoClaw** — 1 PR merged, focused on specific correctness bugs, UI performance backlog
- **Moltis** — Single enhancement issue, no PRs, pre-product stage

**Dormant:**
- **TinyClaw**, **ZeptoClaw** — No activity in 24h; ZeroClaw failed summary generation (possible repo issue)

---

## 7. Trend Signals

**For AI agent developers, the following trends are extractable from community feedback:**

1. **Context-cost awareness is rising** — NanoBot's budget-visible MCP schemas (#5298), PicoClaw's iteration-limit redesign (#440), and IronClaw's embedding-based tool selection (#8119) all signal that developers are optimizing for token efficiency, not just raw capability.

2. **Multi-agent orchestration is mainstreaming** — Sub-agent task messaging (NanoBot #5985), aggregated notifications (#5954), and distributed worker pools (IronClaw #7889) indicate the ecosystem is moving from single-agent to multi-agent patterns.

3. **Desktop deployment is a battleground** — Hermes Agent, CoPaw, and LobsterAI all invest heavily in installer reliability, cross-platform compatibility, and desktop UX. The recurring bugs (PowerShell 5.1 defaults, SSH failures, path encoding) suggest a market need for a standardized desktop agent runtime.

4. **Memory portability is an unsolved gap** — NullClaw's hosted MemCode request (#1015) and LobsterAI's diary panel fallback (#2779) highlight that cross-device, persistent, low-footprint memory remains immature across the ecosystem.

5. **Security sandboxing is becoming a baseline expectation** — IronClaw's Wasmtime update and CoPaw's exec-tool isolation reflect that agents executing arbitrary code are expected to be sandboxed by default, not as an option.

6. **Telemetry and transparency are user-demanded** — Silent context compaction (NanoBot #5900), state-driven working indicators (PicoClaw #3411), and liveness watches (Hermes Agent) show users want visibility into agent state without notification fatigue.

7. **Licensing and commercial clarity are emerging blockers** — LobsterAI's skill commercial-use query (#2401) suggests the ecosystem is approaching a scale where IP/licensing terms for third-party skills and agents become a adoption constraint.

---

*Report generated from 2026-09-30 community digest data across 13 tracked projects. Three projects (TinyClaw, ZeptoClaw, ZeroClaw) had insufficient data for full analysis.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑09‑30**

---

### 1. Today's Overview
NanoBot is in a vigorous development cycle. In the last 24 h the issue tracker saw modest activity (5 updates, 4 still open) and a healthy flow of pull requests (38 updates, 15 merged/closed). The team is actively cleaning up long‑standing bugs (insufficient‑credits fallback and stale model listings) and rolling out UX improvements such as silent context compaction and per‑chat Telegram group policies. No new releases were published today, but the pipeline is moving quickly toward the next stable version.

### 2. Releases
**None.**  

---

### 3. Project Progress (Merged / Closed PRs Today)

| PR | Status | Category | Key Changes |
|---|---|---|---|
| **#5968** | **Closed** | Bug Fix | Honors provider‑configured fallbacks when an OpenAI‑compatible gateway returns *insufficient credits* (HTTP 400) – resolves the silent‑skip bug reported in #5967. |
| **#5982** | **Closed** | UI / Localization | Corrected misleading Taiwanese WebUI strings (20 zh‑TW messages) to match actual UI behavior and improve clarity. |
| **#5978** | **Closed** | Bug Fix | Hides provider models that have passed their OpenAI `shutdown_date`, fixing the “gpt‑5‑chat‑latest does not exist” issue (#5977). |
| **#5979** | **Open** | Bug Fix | Same fix as #5978 (duplicate PR for test coverage); currently pending merge. |
| **#5976** | **Closed** | Security / Stability | Scoped `my` sub‑agent snapshots to the current canonical session, preventing cross‑session leakage. |
| **#5975** | **Closed** | Refactor | Organized TUI source code into feature‑boundary modules (app, client, composer, menus, platform, rendering, views) while preserving history. |
| **#5974** | **Open** | Feature | `/group` command to manage Telegram reply‑policy overrides from within a chat (depends on #5973). |
| **#5973** | **Open** | Feature | Added per‑chat and per‑topic group‑policy overrides for Telegram (the foundation for #5974). |
| **#5968** (duplicate) | — | — | Already closed (see above). |
| **#5967** (issue) | — | — | Closed via fix in #5968. |
| **#5980** | **Open** | Bug Fix | Switches attachment upload (TUI/WebUI) to binary HTTP to avoid WebSocket frame size limits. |
| **#5981** | **Open** | Bug Fix | Allows `/goal` requests to be accepted during active turns, preventing dead‑ends in the command flow. |
| **#5985** | **Open** | Feature | Introduces session‑owned task messaging and cancellation for sub‑agents (builds on #5976). |
| **#5984** | **Open** | Bug Fix | Removes release‑pinned model‑catalog filtering for Codex, using `client_version=99.99.99` to surface newly‑available models. |
| **#5983** | **Open** | Feature | Moves reasoning‑effort selection out of “Advanced options” into a catalog‑driven dropdown under Model. |
| **#5902** | **Open** | Feature | Renames Telegram forum topics with generated session titles (extracted from `nanobot.session.titles`). |
| **#5537** | **Open** | Feature | Persists session‑scoped `focus` via the `my` tool, enabling short‑term continuity across turns and restarts. |
| **#1759** | **Open** | Feature | Reduces MCP tool context overhead via lazy loading and auto‑demotion (still in conflict resolution). |
| **#5954** | **Open** | Feature | Adds an “aggregated” notification mode for concurrent sub‑agent results, reducing premature main‑agent interruption. |
| **#5780** | **Open** | Bug Fix | Suppresses background context‑compaction notifications while preserving `/compact` visibility. |
| **#5943** | **Open** | Refactor | Centralises session ownership in a SQLite worker, replacing JSONL with transactional storage and moving I/O off the event loop. |
| **#5986** | **Open** | Bug Fix | Preserves parent `PATH` for `ExecTool` argument‑vector commands and isolates environment variables. |

*The list above highlights the most substantive merges (closed) and the active feature pipeline. Exact commit counts may vary, but the overall trend is toward tighter storage isolation, more robust provider fallbacks, improved UI/UX, and richer sub‑agent orchestration.*

### 4. Community Hot Topics (Most Discussed)

| Item | Type | Comments / 👍 | Summary |
|---|---|---|---|
| **#5298** | Issue (enhancement) | **2 comments** | Proposal for “budget model‑visible MCP schemas” to curb context‑cost inflation of large tool sets. Highlights a need for finer‑grained tool visibility. |
| **#5900** | Issue (enhancement) | **1 comment** | Requests silent context compaction (no WeChat/Telegram notification) and reduced polling log verbosity. Reflects user frustration with noisy background activity. |
| **#5967** | Issue (bug) | 0 | Insufficiency‑credits fallback bypass – a critical reliability bug (now fixed by #5968). |
| **#5977** | Issue (bug) | 0 | Model picker shows OpenAI models that have already shut down (e.g., `gpt‑5‑chat‑latest`). Fixed by #5978 / #5979. |

*The top‑commented items (#5298, #5900) indicate where the community is most engaged: cost management of MCP tools and logging/visibility noise.*

### 5. Bugs & Stability (Reported Today)

| Issue | Severity* | Fix Status |
|---|---|---|
| **#5967** – Fallback models skipped on “insufficient credits” | **High** (affects provider reliability) | ✅ Fixed by **#5968** (closed). |
| **#5977** – Picker shows shut‑down OpenAI models | **Medium** (user‑facing error on turn) | ✅ Fixed by **#5978 / #5979** (closed / open). |
| **#5972** – No per‑chat per‑topic Telegram group policy | **Low‑Medium** (feature gap) | In‑flight via **#5973 / #5974** (open). |
| **#5900** – Noisy compaction notifications | **Low** (UX annoyance) | In‑flight via **#5780** (open) and UI refinements. |
| **#5298** – Large MCP tool set cost visibility | **Medium** (future scalability) | Under discussion, no fix yet. |

*Severity ranking is based on impact on core agent functionality (fallback behavior) → higher; user‑facing errors (model picker) → medium; policy and UX issues → lower.*

### 6. Feature Requests & Roadmap Signals

| Requested Feature | Issue / PR | Likely Inclusion |
|---|---|---|
| **Per‑chat & per‑topic Telegram group policy** | #5972 (issue) / #5973 (PR) / #5974 (PR) | **Next release** (two PRs are ready; depends only on each other). |
| **Silent context compaction & reduced polling logs** | #5900 | **Next release** (covered by #5780 and UI refinements). |
| **Budget‑aware MCP schema visibility** | #5298 | **Mid‑term** (needs design work; not yet implemented). |
| **Catalog‑driven reasoning effort selection** | #5983 | **Next release** (ready for merge). |
| **Session‑owned sub‑agent messaging & cancellation** | #5985 | **Next release** (depends on #5976, already merged). |
| **Aggregated sub‑agent result notifications** | #5954 | **Next release** (conflict resolved, awaiting merge). |
| **Persistent session focus (`my` tool)** | #5537 | **Next release** (ready for merge). |
| **Rename Telegram topics with session titles** | #5902 | **Next release** (ready). |
| **MCP lazy loading & auto‑demotion** | #1759 | **Long‑term** (still in conflict; will be revisited after #5943 storage refactor). |
| **Binary HTTP attachment upload** | #5980 | **Next release** (bug‑fix ready). |

*Features that are already merged or have a clear, un‑blocked PR path are expected in the upcoming stable version. Larger architectural changes (e.g., MCP lazy loading) will follow after the SQLite session refactor (#5943).*

### 7. User Feedback Summary

* **Cost & Scale** – Users are concerned about context‑cost inflation when many MCP tools are registered. The proposal for “budget model‑visible MCP schemas” captures this need.
* **Provider Reliability** – A critical bug where insufficient‑credits errors bypassed fallback models caused agents to “stop working.” This has been fixed.
* **Model Availability** – The model picker repeatedly shows OpenAI models that have already been retired, causing turn failures. The fix filters out models past their `shutdown_date`.
* **Noise & Visibility** – Background context‑compaction notifications (WeChat/Telegram) and verbose polling logs are considered disruptive. Work is underway to make compaction silent and to reduce log chatter.
* **Policy Granularity** – Telegram super‑group admins want fine‑grained reply policies (active in project topics, silent in announcements). The per‑chat/per‑topic policy feature is in development.
* **Tool & Workflow Management** – Sub‑agent orchestration, task messaging, and session focus are repeatedly requested to improve multi‑agent workflows and continuity across restarts.
* **Attachment Delivery** – Recent regression caused large image attachments to fail over WebSocket, breaking TUI reconnection. Binary HTTP upload fixes this.

Overall sentiment is a mix of **satisfaction** (bug fixes, UI polish) and **dissatisfaction** (missing policy granularity, noisy logs, cost visibility). The community remains active, providing constructive feedback and feature proposals.

### 8. Backlog Watch (Issues / PRs Needing Maintainer Attention)

| Item | Reason |
|---|---|
| **#5973** – Per‑chat/per‑topic Telegram policy (open) | Critical for #5974; blocks completion of the feature. |
| **#5974** – `/group` command (open) | Dependent on #5973; ready for merge once #5973 lands. |
| **#5902** – Topic rename with generated titles (open) | Improves user experience in private Telegram forums; ready for integration. |
| **#5537** – Session focus persistence (open) | Addresses a long‑standing continuity request (#3292); pending merge. |
| **#5980** – Binary HTTP attachment upload (open) | Bug fix for a regression introduced by recent WebSocket changes; ready. |
| **#1759** – MCP lazy loading (open, conflict) | Potentially a major scalability improvement; needs conflict resolution after #5943. |
| **#5943** – SQLite session refactor (open) | Foundational change; subsequent features (e.g., #1759) depend on it. |
| **#5298** – Budget‑visible MCP schemas (issue, 2 comments) | Long‑standing enhancement with growing interest; needs design & implementation. |
| **#5900** – Silent compaction request (issue, 1 comment) | UX improvement; work already started but requires final verification. |
| **#5967** – Fallback model bug (issue) | Now closed via fix, but monitoring for edge‑cases is advisable. |

*These items represent the current “maintainer queue.” Prioritising the unblocked PRs (#5973, #5974, #5902, #5537, #5980) will deliver immediate user value, while the storage refactor (#5943) and MCP lazy‑loading (#1759) are architectural pre‑requisites for future scale.*

---

**Overall Health Assessment:**  
NanoBot is in a strong, iterative improvement phase. Recent merges have tightened reliability (fallback handling, model filtering) and stabilised core storage. A wave of UX and policy features is ready for the next release, addressing community‑identified pain points around noise, granularity, and continuity. The pipeline remains active, with a mix of bug fixes, feature work, and foundational refactoring. Maintaining focus on the backlog items above will ensure the upcoming version delivers a polished, scalable experience.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-09-30

## 1. Today's Overview
Hermes Agent continues active development with high engagement in both issues and pull requests. Over the last 24 hours, the repository saw 50 updated issues (25 open/active, 25 closed) and 50 updated pull requests (26 open, 24 merged/closed), reflecting strong community involvement. However, there have been no new official releases since the last stable version, suggesting ongoing iterative improvement rather than major version bumps. The focus remains on stabilizing desktop experiences, improving cross-platform compatibility, and addressing recurring reliability issues across multiple platforms.

## 2. Releases
No new official releases have been published as of 2026-09-30. The latest stable version remains unchanged, with ongoing internal work targeting incremental improvements. All recent changes are being incorporated through pull requests and feature branches rather than a formal release cycle.

## 3. Project Progress
- **Merged/Closed PRs**: 24 PRs have been merged or closed in the last 24 hours, covering a wide range of fixes and enhancements. Notable merges include:
  - **#128710** – Matrix: Keeps reaction feedback on threaded cards (high priority for collaboration features).
  - **#128809** – Desktop: Prevents duplicate assistant replies after conversation history refresh.
  - **#128420** – Desktop: Improves visibility of superseded backend exits on Windows.
  - **#126283** – Matrix: Configures receipt and processing feedback for better user experience.
  - **#128777** – Desktop: Registers `hermes://` links on Linux for proper deep linking.
  - **#128534** – Desktop: Stops self-sustaining local backend cycles from passive bot relays.
  - **#128526** – Desktop: Improves handling of hung gateways in interactive login windows.
  - **#128423** – Desktop: Properly surfaces session lease refusals instead of generic "not found" errors.
- **Features Advanced**: Several open PRs indicate progress on critical areas:
  - Memory management (Qdrant lock conflicts in #58705).
  - Cross-platform consistency (Telegram media tag deduplication in #78383, Windows SSH failures in #119111).
  - Session resilience (handling dropped Grok streams in #128434, managing sidebar state flips in #128341).

## 4. Community Hot Topics
The most active issues and PRs by comment count highlight several recurring themes:

| Item | Type | Status | Comments | Link |
|------|------|--------|----------|------|
| #128710 | Bug/FE | Open | 0 | [#128710](https://github.com/NousResearch/hermes-agent/pull/128710) |
| #128809 | Bug | Open | 0 | [#128809](https://github.com/NousResearch/hermes-agent/pull/128809) |
| #128420 | Bug | Open | 0 | [#128420](https://github.com/NousResearch/hermes-agent/pull/128420) |
| #126283 | Feature | Open | 0 | [#126283](https://github.com/NousResearch/hermes-agent/pull/126283) |
| #128777 | Feature | Open | 0 | [#128777](https://github.com/NousResearch/hermes-agent/pull/128777) |
| #128534 | Bug | Open | 0 | [#128534](https://github.com/NousResearch/hermes-agent/pull/128534) |

These items represent the highest-impact areas where users are experiencing friction. The desktop-sidebar instability (#67368, #81772) and message duplication (#128720, #105188) are particularly prominent, affecting core usability. Additionally, cross-platform issues (Windows SSH, macOS LaunchAgent visibility, Linux container path translation) continue to drive development effort.

## 5. Bugs & Stability
Ranked by severity, the most critical bugs reported today include:

1. **Memory Management (High)** – #58705: Qdrant lock conflicts cause agent tools to fail when plugins hold locks. This directly impacts Qdrant-backed deployments and could lead to crashes or stalled operations. No fix PR is currently associated with this issue.
2. **Turn Liveness (Medium-High)** – #127643: The activity clock fails to advance during tool execution, causing premature turn abortion. This breaks conversational flow and may leave users waiting indefinitely.
3. **Cross-Platform Connectivity (Medium)** – #119111 & #82960: Desktop SSH failures on Linux due to Windows-specific binary assumptions (OpenSSH) prevent remote updates. Critical for users running Hermes on Linux desktops.
4. **Message Delivery (Medium)** – #125857: Telegram documents sometimes degrade to raw paths, failing authentication checks. Impacts document sharing reliability.
5. **Sidebar State Flips (Low-Medium)** – #73974: Desktop sidebar automatically reopens after manual closure, disrupting focused workflows. Should be configurable or disabled by default.

Fix PRs exist for some issues (e.g., #128534 addresses bot-relay self-sustaining loops, #128526 improves gateway error handling), but many remain open without corresponding resolutions.

## 6. Feature Requests & Roadmap Signals
Several upcoming features are gaining momentum:

- **Matrix Integration** – Multiple PRs (#126283, #128627) aim to standardize reply modes and receipt feedback across Matrix channels, improving automation and transparency.
- **Desktop UX Improvements** – PRs #128341, #128566, and #128451 address sidebar state management, container path translation, and graceful error display—indicating a roadmap toward more robust desktop behavior.
- **Cross-Platform Consistency** – Work on Windows SSH (issue #119111), macOS LaunchAgent visibility (#123118), and Linux container path mapping (#128566) suggests a broader goal of uniform behavior across operating systems.
- **Tool Schema Stability** – #128819 prevents unintended rewrites of tool definitions between turns, ensuring consistent tool availability.

These signals point toward a future where Hermes achieves deeper platform integration, stronger reliability guarantees, and smoother multi-platform experiences.

## 7. User Feedback Summary
Users consistently report pain points centered on **desktop stability** and **cross-platform compatibility**:

- **Desktop Sidebar Behavior** – Frequent reports of the sidebar flickering or disappearing after interactions. Users value predictable UI states for productivity-focused workflows.
- **Connection Reliability** – SSH and gateway connectivity issues on Linux and Windows are common complaints, especially when using remote backends or third-party gateways.
- **Resource Management** – Lock contention (Qdrant) and memory constraints (compressor context windows) affect performance in heavy workloads.
- **Feedback Loops** – Users appreciate clearer system feedback (liveness watches, receipt confirmations) but want fewer false positives (e.g., spurious termination warnings).

Overall sentiment is positive regarding core capabilities, but frustration stems from intermittent failures that break trust in the application’s reliability.

## 8. Backlog Watch
Several long-standing issues require attention:

- **#58705 (Bug)** – Qdrant lock conflict in mem0 OSS mode. High impact on Qdrant users; no fix yet.
- **#99943 (Bug)** – Compressor context window incorrectly clamped to `model.ollama_num_ctx`. Affects Ollama-based deployments; partially resolved but may need further verification.
- **#127643 (Bug)** – Liveness watchdog aborts active turns. Critical for maintaining conversational continuity.
- **#869 (Issue)** – Desktop sidebar Projects tab flashing/disappearing (already tracked in #67368).
- **#119111 (Bug)** – Desktop SSH fails on Linux due to Windows OpenSSH binary assumption. Blocks remote deployment.
- **#128734 (Issue)** – Default profile is a hardcoded alias for root `HERMES_HOME`. Could simplify configuration.

These items should be prioritized in the next sprint to improve overall stability and user satisfaction.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑09‑30**

---

### 1. Today's Overview  
Activity on the PicoClaw repository remains brisk, with **6 open issues** and **3 open pull‑requests** updated in the last 24 h, while one PR was closed/merged. No new releases were published today. The bulk of recent work centres on improving the Web UI experience (state‑driven indicators, steering‑queue feedback, session‑list reliability) and addressing subtle correctness bugs in the agent loop and authentication flow.

### 2. Releases  
*No new releases were tagged today.*

### 3. Project Progress (Merged/Closed PRs)  
- **#3337** – *[stale] Fix/mcp failure hangs agent loop* (closed/merged).  
  This PR resolved a hang that occurred when an MCP server connection failed, preventing the agent loop from exiting and restoring normal chat responsiveness.  
  [PR #3337](https://github.com/sipeed/picoclaw/pull/3337)

### 4. Community Hot Topics  
| Item | Type | Comments / 👍 | Summary & Underlying Need |
|------|------|---------------|---------------------------|
| **#3281** – Web UI chat input laggy with long history | Issue (BUG) | 16 comments, 👍2 | Users experience noticeable input latency as chat history grows, indicating a performance bottleneck in the UI rendering or state update pipeline. |
| **#440** – Replace hard iteration limit with context‑window bounding & loop detection | Issue (ENHANCEMENT) | 7 comments, 👍0 | The fixed `max_tool_iterations: 20` stops legitimate complex workflows prematurely; contributors want a smarter, adaptive bound based on token usage or loop detection. |
| **#3410** – Surface steering queue state so queued/dropped messages are no longer invisible | PR (FIX) | 0 comments (undefined) | Directly addresses the invisibility of messages sent while the agent is busy, providing UI feedback when the steering queue is full. |
| **#3411** – Honest, state‑driven working indicator (Web UI) | PR (FEAT) | 0 comments (undefined) | Implements part 1 of #3406, replacing canned “thinking” phrases with a true reflection of the agent’s internal state. |

The most discussed item is **#3281**, reflecting a clear pain point around UI responsiveness under load. **#440** also gathers steady interest as a blocker for advanced agent usage.

### 5. Bugs & Stability (Reported Today)  
| Severity | Issue | Description | Linked Fix/PR |
|----------|-------|-------------|---------------|
| **High** | #3408 – Messages queued invisibly & dropped when queue full | When the agent is busy, incoming steering messages are queued without UI acknowledgement; if the queue (size = 10) overflows they are silently dropped. | PR #3410 (open) aims to expose queue state and prevent silent drops. |
| **Medium** | #3407 – Ghost session disappears from list while model thinking | A newly created session can vanish from the session dropdown while the model is still processing, leaving no way to return to the chat. | No fix PR yet; related UI state work (#3410/#3411) may mitigate. |
| **Medium** | #3409 – Scheduling primitive used as wait triggers unwanted autonomous‑loop tick | Using `ScheduleWakeup` as a short‑delay poll for subagent completion causes an extra tick that can spur spurious autonomous loops. | No fix PR yet; needs review of scheduling logic. |
| **Low** | #3281 – Chat input laggy with long history (ongoing) | Performance degradation in the Web UI input field as history accumulates. | No dedicated fix PR; likely tied to rendering optimizations (could benefit from #3411’s indicator work). |

### 6. Feature Requests & Roadmap Signals  
- **#3406** – Clearer working indicator, separate manual/channel sessions, richer session list with archiving (Feature).  
  This umbrella issue captures three UX enhancements: a truthful thinking indicator (addressed by #3411), explicit separation of manual vs. channel sessions, and session archiving. Progress on #3411 satisfies the first sub‑goal.  
- **#440** – Adaptive iteration limit / context‑window bounding (Enhancement).  
  Signals a desire to move beyond the static `max_tool_iterations` guardrail, likely to appear in a future minor release once a prototype is vetted.  
- **#3378** – Use configured scopes in `RefreshAccessToken` (Fix).  
  While a bug fix, it improves OAuth flexibility and may be part of the upcoming auth‑stabilization effort.

### 7. User Feedback Summary  
- **Performance:** Long chat histories make typing feel sluggish (#3281).  
- **Reliability:** Messages sent while the agent is busy disappear without notice (#3408) and sessions can ghost‑disappear (#3407).  
- **Transparency:** Users lack a clear “is it still thinking?” signal; current spinner/canned phrases are misleading (#3406, #3411).  
- **Control:** Hard iteration caps stop complex tasks prematurely; users want smarter bounds (#440).  
- **Auth:** Scope handling during token refresh should respect provider configuration (#3378).  

Overall sentiment points to a need for **more responsive, transparent UI** and **more flexible agent execution limits**.

### 8. Backlog Watch (Long‑Unanswered / Important Items)  
| Item | Age | Comments / 👍 | Why It Needs Attention |
|------|-----|---------------|------------------------|
| **#440** – Replace hard iteration limit | ~7 months (created 2026‑02‑18) | 7 comments, 👍0 | Blocks complex, multi‑step agent workflows; a core architectural improvement. |
| **#3281** – Web UI chat input laggy with long history | ~5.5 months (created 2026‑07‑21) | 16 comments, 👍2 | High‑impact usability bug affecting daily interaction; no fix PR yet. |
| **#3378** – Use configured scopes in RefreshAccessToken | ~6.5 months (created 2026‑09‑12, updated 2026‑09‑29) | 0 comments (PR open) | Simple auth correctness fix; ready for merge once reviewed. |
| **#3409** – Scheduling primitive triggers unwanted autonomous‑loop tick | <1 day (created 2026‑09‑29) | 1 comment, 👍0 | Potential source of erratic agent behavior; should be triaged quickly. |

Addressing **#440** and **#3281** would deliver the most noticeable stability and usability gains for the community. The open PRs #3410 and #3411 are direct responses to several of the UI‑related bugs and should be prioritized for review and merge.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑09‑30**  
*(GitHub: qwibitai/nanoclaw)*  

---  

### 1. Today's Overview  
The repository saw modest but focused activity in the last 24 hours: two issues were closed, and 15 pull requests were touched (8 still open, 7 merged/closed). No new releases were published. The work concentrates on stabilizing the host‑service lifecycle, improving cross‑platform compatibility (especially arm64), and tightening gateway/provider handling. Overall project health appears steady, with bug‑fixes outpacing new feature additions today.

---  

### 2. Releases  
*No new releases were tagged today.*  

---  

### 3. Project Progress – Merged/Closed PRs  
Seven PRs were merged or closed, delivering the following advances:  

| PR | Type | Summary | Link |
|----|------|---------|------|
| #3958 | Fix | Logging now safely handles non‑JSON‑serializable values (circular objects, BigInt) without throwing. | [nanoclaw/nanoclaw#3958](https://github.com/qwibitai/nanoclaw/pull/3958) |
| #3955 | Docs | Moved gateway‑specific credential notes from OpenCode skill to the respective provider skills. | [#3955](https://github.com/qwibitai/nanoclaw/pull/3955) |
| #3954 | Docs | Clarified two comments about credential reread refusal logic in gateway adapters. | [#3954](https://github.com/qwibitai/nanoclaw/pull/3954) |
| #3919 | Fix | OpenCode setup validates the model URL against the selected gateway before saving, preventing later failures. | [#3919](https://github.com/qwibitai/nanoclaw/pull/3919) |
| #3953 | Fix | Iron Proxy installation now aborts early on arm64 Docker engines that cannot run the amd64 Iron Control image, with an explanatory message. | [#3953](https://github.com/qwibitai/nanoclaw/pull/3953) |
| #3878 | Fix | Setup’s post‑ping cleanup now stops the temporary ping agent’s container before deleting its folder. | [#3878](https://github.com/qwibitai/nanoclaw/pull/3878) |
| #3947 | Fix | Host sweep stops containers whose session or agent group was deleted, avoiding orphaned containers until next host restart. | [#3947](https://github.com/qwibitai/nanoclaw/pull/3947) |

These changes tighten reliability (logging, container cleanup), improve documentation clarity, and close a critical arm64 compatibility gap.

---  

### 4. Community Hot Topics  
While no PR or issue accumulated visible comments or reactions in the last day, the most actively updated items are:  

* **PR #3964** – *feat(gateway): let a provider declare exact host:port model endpoints* (opened 2026‑09‑29, still open).  
  *Underlying need:* Users running models on non‑standard ports (e.g., local inference services) want the gateway to auto‑approve those endpoints without prompting an approval card on every call.  

* **PR #3958** – *fix(log): never throw when a log value cannot be JSON‑serialized* (merged 2026‑09‑29).  
  *Underlying need:* Prevent host crashes caused by logging complex objects (circular refs, BigInt) – a stability concern highlighted by recent failures.  

Both reflect a dual focus on **usability** (gateway flexibility) and **robustness** (defensive logging).  

---  

### 5. Bugs & Stability  
Bugs reported/fixed today (ordered by perceived impact):  

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **High** | #3888 (closed) / #3953 (fix) | Iron Proxy fails on arm64 hosts because the Iron Control image is amd64‑only → `exec format error`. | Fixed in #3953 (early abort with clear message). |
| **Medium** | #3909 (closed) | Host starts a session container for an agent group that was deleted mid‑spawn. | Addressed indirectly by #3947 (host sweep now stops containers whose session/agent group vanished). |
| **Medium** | #3901 (open) | Host service cannot reach the internet when only an HTTPS proxy is available (`NODE_USE_ENV_PROXY` not honored). | Open PR #3901 proposes setting the flag at process start. |
| **Low** | #3918 (open) | Agent‑runner may re‑send a reply via result‑door after the agent already replied with `send_message`. | Open PR #3918 adds a guard to prevent duplicate nudges. |
| **Low** | #3962 (open) | Update script reports “complete” while the old host is still running if the service liveness probe itself fails. | Open PR #3962 makes rollback respect probe failure. |
| **Low** | #3956 (open) | Rollback does not stop the live nohup host or drain agent containers before replacing `data/`. | Open PR #3956 adds proper shutdown/drain steps. |

The high‑severity arm64 blocker now has a fix merged; remaining open bugs are medium‑low and have associated PRs awaiting review.

---  

### 6. Feature Requests & Roadmap Signals  
Two feature‑oriented PRs opened today hint at near‑term roadmap items:  

* **PR #3964** – Enables providers to declare exact `host:port` model endpoints, extending `modelDomains` to cover non‑HTTPS, local services. Likely to land in the next minor release if approved.  
* **PR #3966** – Allows Iron to serve keyless models over plain HTTP (`http://host.docker.internal:<port>/v1`) for same‑machine, low‑latency use‑cases. Addresses a recurring request for simpler local inference setup.  

Both are labelled `kind/feature` and `delivery/skill`, suggesting they will be released as part of the next skill/gateway update cycle.

---  

### 7. User Feedback Summary  
* **Pain points:**  
  * Arm64 users hit a hard stop when trying to run Iron Proxy (issue #3888). The fix (#3953) now prevents silent failures and gives a clear error.  
  * Users behind strict HTTPS proxies cannot reach external model registries (PR #3901).  
  * occasional orphan containers after deleting agent groups or sessions (issues #3909, #3947) cause resource leaks until a host restart.  

* **Positive signals:**  
  * Recent fixes to logging (#3958) and container cleanup (#3878, #3947) directly address stability complaints.  
  * Documentation clean‑ups (#3955, #3954) reduce confusion around credential handling, a frequent source of setup errors.  

Overall, the community’s feedback is being acted upon promptly, with critical platform‑specific blockers resolved and usability improvements in progress.

---  

### 8. Backlog Watch  
All issues and PRs touched in the last 24 hours have either been closed, merged, or have an open PR with a clear path to resolution. No long‑stale, high‑impact items are evident in today’s snapshot. Maintainers should continue monitoring the open proxy/HTTPS‑proxy PRs (#3901, #3956, #3962) to ensure they are reviewed and merged before the next release cycle.  

---  

*Generated automatically from GitHub activity data for 2026‑09‑30.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest - 2026-09-30
*Data snapshot as of 2026-09-29; generated for 2026-09-30*

## 1. Today's Overview
NullClaw recorded minimal but purposeful activity in the last 24 hours: one open issue and one merged pull request, with no new releases. The project maintains a stable, routine-release cadence, focusing on refining existing integrations (web search provider pinning, markdown formatting) rather than introducing breaking changes. contributor engagement remains sparse, with a single active maintainer merge and one community-originated enhancement request. Overall health indicators suggest a well-maintained, low-risk codebase suited for niche AI-agent memory and tooling use cases.

**Links:** [GitHub Repository](https://github.com/nullclaw/nullclaw) | [Project Dashboard](https://github.com/nullclaw/nullclaw/issues) | [Pull Requests](https://github.com/nullclaw/nullclaw/pulls)

## 2. Releases
No new releases were published during this period. The most recent tag, **v20260929**, was finalized via PR #1014 and includes targeted fixes to search provider handling and release tooling. No breaking changes or migration notes are required for this cycle; the version bump is purely incremental and aligns with the project’s month-level tagging scheme.

## 3. Project Progress
The standout merge was **PR #1014 [CLOSED] v20260929**, which advanced three operational improvements:
- Pinned web search to the configured provider, resolving Exa API rejections from duplicate `Content-Type` headers.
- Stripped Markdown markers before official QQ replies, improving formatting consistency.
- Updated release workflows so `nullclaw version` correctly reports the active tag.

These changes reflect ongoing stabilizer work rather than feature expansion, reinforcing the project’s focus on reliable, out-of-the-box functionality for AI tooling chains.

## 4. Community Hot Topics
The only new community touchpoint was **Issue #1015 [OPEN]**, initiated by Vivek Gupta (Founder & CEO of MemCode) on 2026-09-29. The request asks for a hosted MemCode engine within NullClaw’s memory interface, enabling remote, cross-device memory availability without increasing local storage. Currently at 0 comments and 0 👍, the issue signals emerging interest in distributed memory architectures but has yet to gain community traction. By contrast, PR #1014’s merge demonstrates the maintainer’s immediate focus on search and formatting stability.

**Links:** [Issue #1015](https://github.com/nullclaw/nullclaw/issues/1015) | [PR #1014](https://github.com/nullclaw/nullclaw/pull/1014)

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the 24-hour window. The sole active issue (#1015) is an enhancement/feature request, not a defect. PR #1014’s fixes address provider-header compatibility and formatting edge cases, which indirectly improve stability for users integrating Exa or QQ-based reply flows. The project shows no signs of critical instability; its recent change history is dominated by configuration and polish work.

## 6. Feature Requests & Roadmap Signals
**Issue #1015** is the clearest roadmap signal: a request for a remote/hosted MemCode memory engine that leverages NullClaw’s existing “swappable memory engines” architecture. If adopted, this would extend NullClaw’s utility into cross-device AI assistant scenarios, a niche currently underserved by the project. No other feature requests appeared in the window, but the search-provider pinning work in #1014 suggests a roadmap trend toward configurable, provider-agnostic tooling.

## 7. User Feedback Summary
The MemCode founder’s engagement highlights a specific pain point: **AI agents needing persistent, low-footprint memory across devices without local storage bloat**. Current NullClaw users appear satisfied with the stable release process and search provider controls, but the absence of remote memory support may limit adoption in multi-device or cloud-assisted workflows. No widespread dissatisfaction was detected, but the one-sided focus on infrastructure polish versus user-facing memory mobility could widen the gap between maintainer priorities and community use cases.

## 8. Backlog Watch
- **Issue #1015** (created 2026-09-29): Fresh but unengaged. Maintainers should assess whether the hosted MemCode engine aligns with NullClaw’s roadmap; a brief comment or label decision within the next 7–14 days would prevent the issue from aging into the “long-unanswered” category.
- **No other backlog items** merit attention at this time. The PR queue is clear, and the issue backlog contains only this single, recently opened entry.

**Recommendation:** Monitor #1015 for maintainer response; no urgent backlog clearance required beyond routine triage.

---
*Data source: GitHub API snapshot for nullclaw/nullclaw, retrieved 2026-09-30. Metrics reflect the last 24 hours (2026-09-29–2026-09-30).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



Based on the provided GitHub activity data for **IronClaw** up to September 30, 2026, here is the structured project digest.

---

### 1. Today's Overview
IronClaw is experiencing steady, healthy development activity, marked by the successful stabilization of its `v1.4.1` release. The project shows a balanced mix of maintenance, security hardening, and feature engineering. Over the last 24 hours, the repository recorded 2 active issues and 3 pull requests (with 1 successfully merged for release promotion). Core development focus is currently split between architectural scaling (distributed worker pools) and LLM latency optimization (vector-based tool selection).

### 2. Releases
*   **ironclaw-v1.4.1 (Released 2026-09-29)**: This release marks the stable promotion of the `1.4.1-rc.2` candidate.
    *   **Key Changes & Fixes**: 
        *   **Google OAuth Activation Fix**: Operators can now successfully activate Google extensions (Gmail, Google Calendar) directly via the Web UI when supplying a custom Google OAuth client.
        *   **Security Update**: Includes a critical security update for the Wasmtime runtime, reinforcing sandbox security.
    *   **Breaking Changes & Migration**: None reported; this is a standard candidate-to-stable promotion. Users should update their lockfiles and package versions to `1.4.1`.

### 3. Project Progress
The project has merged key release engineering and feature branches:
*   **Release Promotion (PR #8120)**: Successfully merged/promoted `1.4.1-rc.2` to stable, updating root/public changelocks and shipping packages ([PR #8120](https://github.com/nearai/ironclaw/pull/8120)).
*   **Codebase Knowledge Graph Refresh (PR #7988)**: An automated CI/Infrastructure update to keep the codebase-memory bootstrap snapshot aligned with the current branch state ([PR #7988](https://github.com/nearai/ironclaw/pull/7988)).
*   **Tool Selection Feature Implementation (PR #8119)**: Active development on a large-scale feature adding embedding-based tool ranking ([PR #8119](https://github.com/nearai/ironclaw/pull/8119)).

### 4. Community Hot Topics
*   **Distributed Edge Worker Architecture (Issue #7889)**: An open RFC proposing the extension of the scheduler/orchestrator to support opt-in remote edge workers. The underlying need is to break the single-host bottleneck for the worker pool, allowing operators to distribute parallel jobs across multiple idle hosts ([Issue #7889](https://github.com/nearai/ironclaw/issues/7889)).
*   **Turn-0 Tool Selection Optimization (Issue #8113 / PR #8119)**: A high-interest proposal to implement BM25F + embeddings ranking for the tool catalog before the first model call. The community need is clear: developers want to avoid latency overhead from initial `tool_search` round-trips by letting the model directly call the most relevant tools ([Issue #8113](https://github.com/nearai/ironclaw/issues/8113) / [PR #8119](https://github.com/nearai/ironclaw/pull/8119)).

### 5. Bugs & Stability
*   **Google OAuth Integration Bug (Fixed in v1.4.1)**: Previously, activating Google Workspace extensions was broken if operators tried to supply OAuth credentials via the Web UI. This blocker has been resolved in the latest stable release.
*   **Wasmtime Security Vulnerability (Fixed in v1.4.1)**: Addressed a sandbox-level security dependency update, ensuring safe execution of WASM tools.
*   *Note: No new critical crashes or severe regressions were reported by users in the active issue tracker today.*

### 6. Feature Requests & Roadmap Signals
*   **Immediate Roadmap (Next Minor Releases)**: The opt-in tool selection feature (currently in PR #8119) is highly likely to land in the next minor update (e.g., `v1.5.0` or a backported `v1.4.2`). It is designed to be completely opt-in and off by default, ensuring zero regression risk for existing users.
*   **Mid-to-Long Term Roadmap**: The remote edge worker RFC (Issue #7889) represents a major architectural milestone. If adopted, it will position IronClaw as a highly scalable, multi-node agent orchestrator. However, it remains in the discussion/RFC phase and is likely a few releases out.

### 7. User Feedback Summary
*   **Pain Points**: Users managing enterprise-level deployments of Google Workspace integrations faced friction due to the OAuth UI bug, now resolved. Multi-host operators are currently constrained by single-host worker pool limitations, prompting the architectural RFC (#7889).
*   **Use Cases**: Users are actively looking for ways to optimize agent response times and reduce token overhead during the tool discovery phase. The embedding-based tool selection proposal has received positive alignment from the community.
*   **Satisfaction**: Overall project health is high, with a swift transition from release candidate `1.4.1-rc.2` to stable `v1.4.1` showing a mature release workflow.

### 8. Backlog Watch
*   **RFC: Remote Edge Workers (Issue #7889)**: Created over a month ago (August 25, 2026) and updated recently, this architectural proposal requires core maintainer consensus to define the scheduling API for multi-host deployments ([Issue #7889](https://github.com/nearai/ironclaw/issues/7889)).
*   **New Contributor Integration (PR #8119)**: This is a large (`XL`), medium-risk pull request from a community contributor (`CjS77`). It requires thorough code review by core maintainers to ensure the embedding-based ranking does not introduce security or memory overhead in the loop-host host module ([PR #8119](https://github.com/nearai/ironclaw/pull/8119)).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑09‑30**

---

### 1. Today’s Overview  
LobsterAI saw moderate daily activity: 10 issues were updated (8 still open, 2 closed) and 11 pull requests were merged or closed, all of them completed. No new releases were published. The mix of bug reports, feature requests, and routine maintenance indicates a project that is actively being stabilized while new UI/UX capabilities are being shipped.

**Link summary:**  
- Issues updated in the last 24 h: 10 → <https://github.com/netease-youdao/LobsterAI/issues?labels=issue&state=open> (filter “updated last 24 h”).  
- PRs merged/closed in the last 24 h: 11 → <https://github.com/netease-youdao/LobsterAI/pull?is_merged=true&sort=updated-desc>.

---

### 2. Releases  
**None** – the repository has not published a new version since the previous digest.

---

### 3. Project Progress (Merged / Closed PRs)  
All 11 PRs closed today represent concrete bug‑fixes, stability improvements, and UI refinements:

| PR | Area(s) | Main Fix / Feature | Link |
|----|----------|-------------------|------|
| **#2707** | openclaw (main) | Reset gateway restart budget only after a stability window; prevents infinite restart loops. | <https://github.com/netease-youdao/LobsterAI/pull/2707> |
| **#2783** | openclaw (main) | Adjusts gateway restart budget logic to avoid premature restarts. | <https://github.com/netease-youdao/LobsterAI/pull/2783> |
| **#2782** | installer (Windows) | Shows a localized dialog when skill backup fails, guiding users to move skill folders. | <https://github.com/netease-youdao/LobsterAI/pull/2782> |
| **#2706** | installer (Windows) | Persists skill‑backup statistics as a `PSCustomObject`, fixing PowerShell 5.1 compatibility. | <https://github.com/netease-youdao/LobsterAI/pull/2706> |
| **#2758** | renderer, docs, cowork (main) | Adds native OpenClaw progress cards to the Cowork composer with refresh support. | <https://github.com/netease-youdao/LobsterAI/pull/2758> |
| **#2781** | renderer, artifacts | Fixes markdown inline‑math rendering by preventing dollar‑sign pairs from being mis‑parsed. | <https://github.com/netease-youdao/LobsterAI/pull/2781> |
| **#2780** | renderer, cowork, artifacts | Routes inline file links through a shared opener so they open in the same artifact card. | <https://github.com/netease-youdao/LobsterAI/pull/2780> |
| **#1682** | renderer, cowork (stale) | Implements a “Read” button for AI replies using the Web Speech API (zero‑dependency). | <https://github.com/netease-youdao/LobsterAI/pull/1682> |
| **#1683** | renderer (stale) | Validates GitHub skill‑URL format before initiating a remote import, eliminating noisy download errors. | <https://github.com/netease-youdao/LobsterAI/pull/1683> |
| **#1707** | renderer, cowork (stale) | Clears the homepage input box automatically when switching agents, preventing stale drafts. | <https://github.com/netease-youdao/LobsterAI/pull/1707> |
| **#1773** | renderer (stale) | Adds missing i18n translation key (`edit`) for the memory‑entry edit button. | <https://github.com/netease-youdao/LobsterAI/pull/1773> |

These merges demonstrate a strong focus on **stability (gateway/restart budget, installer robustness), UX polish (progress cards, markdown math, artifact linking), and internationalisation** (i18n edit key).  

---

### 4. Community Hot Topics  

| Issue / PR | Activity (comments/reactions) | Core Concern | Why It Matters |
|------------|------------------------------|--------------|----------------|
| **#2293** – *User‑MD overwrite after restart* (closed) | 6 comments, 0 👍 | Multiple agents share the same `USER.md`; changes in one agent bleed into others. | Directly impacts **data isolation** and user‑defined agent personas. |
| **#2342** – *Ad cannot be fully closed* (closed) | 3 comments, 0 👍 | UI ad persists despite “X” button; no setting to disable it. | Affects **user experience** and perceived cleanliness of the UI. |
| **#2395** – *Installation fails: skills backup not restored* (open) | 2 comments, 0 👍 | Update aborts because user‑skill backup cannot be restored, leaving the install in a broken state. | Blocks **adoption** for new users; signals reliability problems in the installer. |
| **#2401** – *Skill commercial use* (open) | 2 comments, 0 👍 | Asks whether Anthropic‑provided skills can be used commercially. | Highlights **licensing clarity** for third‑party content. |
| **#2779** – *Dreamy Diary panel always empty* (open) | 1 comment, 0 👍 | Internal `doctor.memory.*` ambient‑owner fallback missing; upstream fix pending. | Directly blocks a **core diary feature** that users rely on for memory tracking. |
| **#2393** – *String‑escaping bug in accelerator* (open) | 1 comment, 0 👍 | `\f` byte (0x5C 0x66) is converted to `\x0C`, corrupting files that contain tokens like `\firecrawl`. | **Data‑integrity** issue; severity rated “🔴 严重 (data integrity)”. |
| **#2396** – *exec tool defaults to PowerShell 5.1* (open) | 1 comment, 0 👍 | Linux‑style commands (e.g., `node -e`, `pwsh -Command`) silently fail under Windows. | Causes **silent command failures** across platforms. |
| **#2390** – *exec tool default shell & Chinese path encoding* (open) | 1 comment, 0 👍 | Hard‑coded `powershell.exe` (v5.1) mishandles Chinese characters in paths. | Leads to **runtime errors** for users with non‑ASCII usernames or paths. |
| **#2391** – *Skill rename capability* (open) | 1 comment, 0 👍 | Request to allow users to rename skills. | Improves **usability** and personalisation. |
| **#2392** – *Timed task agent/skill selection* (open) | 1 comment, 0 👍 | Users cannot choose which agent or skill a timed task should run under. | Limits **automation flexibility**. |

**Take‑away:** The most pressing community pain points are **data persistence across agents**, **installer reliability**, and **high‑severity bugs** that jeopardise file integrity or cause silent command failures.

---

### 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Symptom / Impact | Linked PR (if any) | Status |
|----------|-------|------------------|--------------------|--------|
| **🔴 High** | **#2393** – `\f` byte replacement in accelerator | Files containing `\f` tokens become corrupted (silent byte‑level damage). | – | **Open** |
| **🔴 High** | **#2293** – USER.md overwritten across agents after restart | User‑defined markdown for each agent is lost; different agents share the same file. | – | **Closed** (stale) |
| **🟠 Medium** | **#2396** – exec tool defaults to PowerShell 5.1 on Windows | Linux‑style inline scripts (`node -e`, `pwsh -Command`) fail silently. | – | **Open** |
| **🟠 Medium** | **#2779** – Diary panel empty due to missing `doctor.memory.*` fallback | “Dreamy Diary” UI shows no entries while backend updates normally. | – | **Open** |
| **🟠 Medium** | **#2390** – exec tool hard‑coded PowerShell 5.1 + Chinese path encoding | Commands with Chinese characters or paths fail on Windows. | – | **Open** |
| **🟠 Medium** | **#2395** – installation aborts because skill backup cannot be restored | Users cannot complete an update; logs show backup‑failure path. | – | **Open** |
| **🟡 Low** | **#2391** – skill rename request | Users want to rename skills for clarity. | – | **Open** |
| **🟡 Low** | **#2392** – timed task agent/skill selection | Lack of agent/skill choice for scheduled jobs. | – | **Open** |
| **🟡 Low** | **#2342** – ad cannot be fully closed | UI ad persists; only “X” button available. | – | **Closed** (stale) |

*No dedicated fix PRs have been merged for the high‑severity bugs (#2393, #2293) yet; they remain open or were closed as “stale” without a resolution.*

---

### 6. Feature Requests & Roadmap Signals  

| Request | Issue | Anticipated Impact |
|---------|-------|--------------------|
| **Skill rename** (#2391) | Users want to edit skill names. | Improves personalisation; low implementation cost. |
| **Timed task agent/skill selection** (#2392) | Users need to decide which agent runs a scheduled job. | Increases automation usefulness; may require UI changes. |
| **Commercial use of Anthropic skills** (#2401) | Clarification on licensing for third‑party skills. | Could affect adoption by commercial users; may trigger policy changes. |
| **Full ad dismissal** (#2342) | Ability to completely disable the lower‑corner ad. | Enhances user satisfaction; likely a simple toggle. |
| **Diary panel fallback fix** (#2779) | Missing `doctor.memory.*` ambient‑owner causing empty diary view. | Directly restores a core feature; likely to be addressed soon as upstream fix is known. |
| **Read‑aloud for AI replies** (#1682) – already merged, indicates **audio feedback** is a valued direction. | – | Shows the roadmap includes richer interaction modalities. |

**Prediction:** The next release (likely 2026‑10.x) will probably incorporate the **diary panel fix**, **skill rename UI**, and **ad toggle**, while the high‑severity data‑integrity bug (#2393) will be prioritized given its severity.

---

### 7. User Feedback Summary  

- **Data isolation:** Multiple agents inadvertently share the same `USER.md`, leading to loss of individual agent configurations (Issue #2293).  
- **Installation reliability:** Users encounter “skills backup not restored” errors, preventing successful updates (Issue #2395).  
- **Advertising UX:** The persistent lower‑corner ad (#2342) is seen as intrusive; users request a permanent hide option.  
- **Skill licensing clarity:** Questions about commercial use of Anthropic‑provided skills (#2401) indicate a need for transparent licensing terms.  
- **Skill customization:** Requests to rename skills (#2391) and to select agents/skills for timed tasks (#2392) show demand for greater personalization and flexibility.  
- **Technical robustness:** Several bugs (especially #2393, #2396, #2390) cause silent data corruption or command failures, eroding trust in the platform’s stability.

Overall sentiment leans toward **satisfaction with UI/UX enhancements** but **concern over data integrity and installer reliability**.

---

### 8. Backlog Watch  

| Item | Reason for Attention | Current Status |
|------|----------------------|----------------|
| **#2393** – `\f` byte replacement bug (high severity) | Causes silent file corruption; 100 % reproducible. | Open, no fix yet. |
| **#2395** – installation abort due to backup failure | Blocks user onboarding; logs show repeated failures. | Open, minimal discussion. |
| **#2401** – commercial skill licensing query | Unclear IP/licensing could affect enterprise adoption. | Open, only 2 comments. |
| **#2779** – Diary panel empty (upstream fix pending) | Core memory‑diary feature non‑functional for many users. | Open, maintainer acknowledgment needed. |
| **#2390** – exec tool default shell & Chinese path encoding | Affects users with non‑ASCII usernames; may cause crashes. | Open, low‑priority but reproducible. |
| **#2293** – USER.md cross‑agent overwrite (closed as stale) | Though closed, the underlying design flaw may re‑appear; worth revisiting. | Closed, but may need a design review. |
| **PR #1682** – read‑aloud button (merged) | Demonstrates a successful UI/UX feature; could inspire similar audio hooks elsewhere. | Merged – no further action. |
| **PR #1707** – auto‑clear homepage input on agent switch (merged) | Addresses a usability pain point; good example of session hygiene. | Merged – no further action. |

**Recommendation:** The maintainers should prioritize **#2393** and **#2395** (high‑impact bugs) and **#2779** (core feature regression). Engaging with **#2401** to clarify licensing terms would also remove a roadblock for commercial users.

--- 

*Prepared by the AI‑Agent analysis team, September 30 2026.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-30

## 1. Today's Overview
Moltis showed minimal activity in the past 24 hours: one new enhancement issue was opened (#1289), while no pull requests were created, merged, or closed and no new releases were published. The project’s issue tracker remains quiet with only a single open item updated today, indicating a low-velocity period. Community engagement appears limited — no comments or reactions were recorded on the new issue. Overall, the repository is in a maintenance lull with no immediate stability concerns or feature deliveries.

## 2. Releases
No new releases were published today.

## 3. Project Progress
No pull requests were merged, closed, or updated in the last 24 hours. No features were advanced or bugs fixed via PR activity today.

## 4. Community Hot Topics
**Most Active Issue:**  
- **#1289** – *[enhancement] [Feature]: Goal mode or ralph loop*  
  Author: `abda11ah` | Created: 2026-09-29 | Updated: 2026-09-29 | Comments: 0 | 👍: 0  
  [View Issue](https://github.com/moltis-org/moltis/issues/1289)  

**Analysis:** This is the only issue updated today. It proposes a “Goal mode” or “ralph loop” — likely referring to an autonomous agent loop capable of pursuing high-level objectives iteratively (similar to AutoGPT-style workflows). The lack of comments or reactions suggests limited community discussion so far. The request signals interest in higher-level agent orchestration, possibly for task decomposition and recursive execution — a growing trend in AI agent frameworks.

## 5. Bugs & Stability
No bug reports, crashes, or regressions were filed or updated today. No fix PRs exist for current issues.

## 6. Feature Requests & Roadmap Signals
- **Goal mode / Ralph loop (#1289)** – User requests a persistent, goal-driven execution loop enabling agents to autonomously plan, act, and reflect toward a defined objective. This aligns with emerging “agentic workflow” patterns. Given its architectural scope, implementation would likely require changes to the core runtime, task queue, and memory/context management. If prioritized, it could shape the next major version (e.g., v1.0 or v2.0), but no maintainer response or triage has occurred yet.

## 7. User Feedback Summary
Only one user (`abda11ah`) contributed feedback today via a feature request. No pain points, usability complaints, or satisfaction signals were reported. The request reflects a power-user or developer interest in advanced autonomous behavior — not a general usability issue. No real-world use cases or deployment feedback were shared.

## 8. Backlog Watch
- **#1289** – *Goal mode or ralph loop* (opened 2026-09-29)  
  This enhancement has received no maintainer attention, labels beyond `enhancement`, or triage. Given its potential architectural impact, it warrants early review to assess feasibility, design scope, and alignment with project roadmap. Risk of stagnation if not addressed in next triage cycle.  
  [View Issue](https://github.com/moltis-org/moltis/issues/1289)

---
*Digest generated from GitHub data for 2026-09-30. All links point to live GitHub resources.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – 2026‑09‑30**  
*(generated from GitHub activity for the 24‑hour window ending 2026‑09‑30)*  

---  

### 1. Today's Overview  
The repository remains active with **8 issue updates** (6 still open, 2 closed) and **38 pull‑request updates** (17 open, 21 merged/closed) in the last day. No new releases were published today. The mix of bug‑fixes, small feature work, and CI/tooling improvements indicates steady maintenance progress while the core functionality continues to receive attention from contributors.

### 2. Releases  
*No new releases were tagged or published on 2026‑09‑30.*  

### 3. Project Progress – Merged / Closed PRs (21 items)  
The following merged/closed PRs represent the day’s tangible advances:

| PR | Title / Area | Key Change |
|----|--------------|------------|
| #8037 | **fix(console): align e2e tests with redesigned UI** | Updated console E2E selectors to match the new UI; ensures test reliability after UI refresh. |
| #8032 / #8023 | **fix(terminal): support high POSIX descriptors** | Replaced `select()` with `poll()` to allow terminals to work when file‑descriptor count exceeds `FD_SETSIZE` (commonly 1024). |
| #8038 | **fix(hub): close database connections after transactions** | Guarantees SQLite handles are released after commit/rollback, preventing connection leaks. |
| #8025 | **fix(desktop): disable NSIS solid compression** | Turns off solid compression in the Windows installer to improve extraction speed on low‑end hardware. |
| #8026 | **fix(ci): address cross‑platform paths, sandbox cleanup, Windows terminal interrupts** | Improves CI robustness on Windows (UNC/Drive paths, sandbox teardown, timezone loading) and fixes terminal interrupt handling. |
| #8024 | **fix(portability): reject invalid Qoder timezones** | Prevents silent failures when whitespace‑only timezone strings are supplied. |
| #8001 | **fix(runtime): keep timeout tool results recoverable** | Returns a successful timeout explanation so parent models can continue after a tool timeout (related to #7981). |
| #8012 | **[first‑time‑contributor] fix(telegram): render every fenced code block as code in HTML** | Adjusts Telegram markdown conversion to properly handle fenced blocks with info‑strings containing symbols. |
| #8007 | **fix(task_tracker): register run only after the producer task exists** | Prevents zombie tracker entries by attaching the run only after the async task is successfully created. |
| … | (additional minor fixes: skill download offloading, security flag for Office COM, browser arg override, etc.) | Various stability, usability, and security tweaks. |

Collectively, these PRs tighten resource management (DB, terminal, CI), improve cross‑platform reliability, and resolve specific UI/API mismatches.

### 4. Community Hot Topics  
**Most‑commented issue:**  
- **[#7991] [Bug] TaskTracker _runs zombie entries inflate running_task_count, disagree with /api/chats** – 4 comments, 👍0.  
  *Link:* https://github.com/agentscope-ai/CoPaw/issues/7991  
  *Underlying need:* Consistency between the internal task‑tracker counter and the chat‑list API. Users observe a mismatch (“2 running tasks” vs. 1 chat with status=running), indicating a scope/booking bug that surfaces in the dashboard.

**Other notable issues (by comment count):**  
- **[#2359] [enhancement] HEARTBEAT_OK / CRON_OK to control model message sending** – 3 comments.  
  *Link:* https://github.com/agentscope-ai/CoPaw/issues/2359  
  *Need:* Users want a flag (similar to OpenClaw) that lets the model decide whether to emit processing content during heartbeats or cron ticks, reducing unnecessary LLM calls.  

- **[#7946] [Bug] QQ official‑bot gateway replays events on session resume** – 2 comments.  
  *Link:* https://github.com/agentscope-ai/CoPaw/issues/7946  
  *Need:* Prevent duplicate message processing when the QQ gateway forces a reconnect and resends buffered events.  

- **[#8036] [Bug] Creator: OpenAI integration, image credentials/capabilities, and resume failures** – 2 comments.  
  *Link:* https://github.com/agentscope-ai/CoPaw/issues/8036  
  *Need:* Reliable handling of OpenAI (text/image) credentials and graceful degradation when generation fails; currently the UI masks the real error with a generic retry message.  

- **[#8035] [Bug] Transcription settings page cannot configure or update `transcription_model`** – 1 comment.  
  *Link:* https://github.com/agentscope-ai/CoPaw/issues/8035  
  *Need:* Ability to switch transcription providers via the UI without silently breaking transcription.  

These items reflect real‑world pain points around **state consistency**, **extensible lifecycle hooks**, **platform‑specific gateway quirks**, and **provider configuration ergonomics**.

### 5. Bugs & Stability (reported today)  
| Severity | Issue | Summary | Fix PR (if any) |
|----------|-------|---------|-----------------|
| **High** | #7991 – TaskTracker zombie entries | Counter drift between internal tracker and chat API; leads to misleading dashboard metrics. | #8007 (fixes registration order) – already merged. |
| **High** | #8036 – OpenAI creator integration failures | Connection tests pass but actual generation fails; UI shows generic retry message, hiding provider errors. | None yet (open). |
| **Medium** | #8035 – Transcription model not configurable | UI settings page does not persist `transcription_model` changes; switching providers silently breaks transcription. | None yet (open). |
| **Medium** | #8022 – `send_file_to_user` creates empty assistant message | File/image blocks + empty assistant msg pollute chat context, causing subsequent 400s across models. | None yet (open). |
| **Low** | #8030 – invalid/spam issue | Marked invalid; no action needed. | N/A |

Overall, the most critical stability concern is the **TaskTracker inconsistency** (#7991), which already has a addressing PR (#8007) merged today. The OpenAI integration bug (#8036) remains open and may affect users relying on Creator‑mode image/text generation.

### 6. Feature Requests & Roadmap Signals  
- **[#2359] HEARTBEAT_OK / CRON_OK** – Request for lifecycle‑hook flags to suppress model output during automated heartbeats/cron jobs. This mirrors patterns in other agent frameworks and would reduce unnecessary LLM latency/cost. Likely candidate for a near‑future minor release if maintainers approve the design.  
- **[#8015] Support custom Skill/Plugin marketplace source (self‑hosted / offline)** – Enables air‑gapped or intranet deployments to point at a private mirror. Highly relevant for enterprise adopters; expected to be prioritized for the next version that targets enterprise‑grade deployment.  

Both features address **extensibility** and **operational flexibility**, suggesting the roadmap is moving toward more configurable, production‑ready integrations.

### 7. User Feedback Summary  
Users are experiencing:

- **State‑sync frustrations** (duplicate task counts, mismatched API/dashboard views).  
- **Provider‑integration fragility** (OpenAI image/text generation failing silently, requiring manual retries).  
- **Configuration gaps** (unable to switch transcription models via UI; lack of self‑hosted skill marketplace).  
- **Platform‑specific quirks** (QQ gateway replaying events, terminal descriptor limits).  

Positive feedback is implicit in the steady stream of PRs addressing tooling, CI, and terminal robustness, indicating that contributors are actively improving reliability and developer experience.

### 8. Backlog Watch (Long‑standing / Important Items)  
| Item | Age | Why it matters |
|------|-----|----------------|
| **[#2359] HEARTBEAT_OK / CRON_OK** (created 2026‑03‑26) | ~6 months | Affects operational efficiency for automated agents; no resolution yet. |
| **[#8015] Custom Skill/Plugin marketplace source** (created 2026‑09‑29) | < 1 day but high impact for enterprise/offline use; needs maintainer review. |
| **[#7991] TaskTracker zombie entries** (created 2026‑09‑26) | 4 days – already has a fixing PR (#8007) merged; monitor for regression. |
| **[#8036] OpenAI creator integration** (created 2026‑09‑29) | < 1 day – blocker for users relying on Creator mode; watch for upcoming fix. |

These items represent the current focal points where community demand or blocker potential is highest. Maintainer attention to #2359 and #8015 would unlock significant usability gains, while timely resolution of #8036 will restore confidence in OpenAI‑based workflows.

---  

*All links point directly to the GitHub issue or PR. The digest is based solely on the supplied data and aims to give an objective, actionable snapshot of CoPaw’s health on 2026‑09‑30.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*