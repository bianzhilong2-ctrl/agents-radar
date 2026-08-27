# OpenClaw Ecosystem Digest 2026-08-27

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-27 05:50 UTC

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

# OpenClaw Project Digest – 2026-08-27

## 1. Today's Overview
The project recorded **500 issues and 500 PRs updated in the last 24 hours**, reflecting an intensely active development cycle. With **332 open/active issues** and **168 closed**, and **302 open PRs** having **198 merged/closed**, maintainers are sustaining a high throughput rate. No new releases were published, but the release branch is preparing **2026.9.1-beta.1** (PR #130731), marking the next beta candidate. Activity is concentrated on core reliability: multi-agent orchestration, session-state integrity, cross-channel delivery, and SQLite durability. The volume of concurrent work suggests sustained pressure on foundational subsystems rather than isolated feature work.

*Links: [GitHub Stats](https://github.com/openclaw/openclaw/graphs/commit-activity), [Current Beta](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.3)*

## 2. Releases
**0 new releases today.** The latest beta remains **v2026.8.1-beta.3** (commit `5831b80721f802072b0ec1893b30a16cf42d538c`), with guidance commit `004b06b6a02f0aa5ddcee488caa9c51d38e6d017`. The release branch is freezing for **2026.9.1-beta.1** (PR #130731), which prepares authorized candidates for exact-head CI and validates compatibility retention, package fixes, and Linux installer updates. No breaking changes are announced, but several upstream issues (#113306, #94939) highlight migration landmines around SQLite snapshot restore and state-store migration that operators should test before upgrading.

## 3. Project Progress
**198 PRs merged/closed** in the last 24 hours, with a strong skew toward gateway, channel, and session-stability fixes. Merged highlights include:
- **#128371** – Authorizes focused beta evidence, resolving a beta.3 publisher blocker.
- **#116489** – Requires acknowledgement for install policy warnings, adding security gaterails.
- **#125471** – Keeps Claude CLI OAuth available in the Control UI after Gateway restarts.
- **#128995** – Makes full session actions (pin, unread, icon, group move) available from the chat header.
- **#119444** – Gives reloaded plugin routes their current registry, fixing stale hook/provider execution.

Near-merge “ready for maintainer look” PRs focus on channel schema consistency (#117287, #117302, #118157), tool-search directory/tools wrapping (#126618), GitHub profile verification rate-limit avoidance (#128236), and memory-index continuity after folder replacement (#130698). The merge velocity indicates a push toward stabilizing the 2026.8.x cycle before the 2026.9.1 beta.

## 4. Community Hot Topics
**Most commented/issues and their underlying needs:**

| Item | Comments | Link | Core Need |
|------|----------|------|-----------|
| #125626 | 20 | [beta feedback](https://github.com/openclaw/openclaw/issues/125626) | Beta validation & release-candidate guidance |
| #43367 | 14 | [multi-agent orchestration instability](https://github.com/openclaw/openclaw/issues/43367) | Concurrent `agents add` config overwrites, session-lock failures |
| #38327 | 14 (3 👍) | [gemini null conv crash](https://github.com/openclaw/openclaw/issues/38327) | “Cannot convert undefined or null to object” with google-vertex/gemini |
| #53628 | 14 | [XDG_CONFIG_HOME not processed](https://github.com/openclaw/openclaw/issues/53628) | Config/env variable interpretation during skill installs |
| #87561 | 12 | [durable fallback delivery semantics](https://github.com/openclaw/openclaw/issues/87561) | Cross-channel message suppression/drop on fallback |
| #113306 | 12 | [SQLite snapshot restore guarantees](https://github.com/openclaw/openclaw/issues/113306) | Crash/identity guarantees missing in snapshot restore |

**Top PRs by activity:**
- **#117287** – Fixes feishu/mattermost `contextVisibility` key rejection.
- **#117302** – Fixes IRC `healthMonitor` config validation.
- **#118157** – Fixes bundled channels rejecting `mediaMaxMb` override.
- **#126618** – Fixes Tool Search `directory`/`tools` wrapping native read/exec in `tool_call`.
- **#128236** – Prevents GitHub profile verification rate-limit failures in gateways.
- **#130735** – Fixes cloud-workers build artifacts for Codex remote execution.

*Analysis: The highest‑comment issues cluster around concurrency safety (multi-agent config overwrites, session-lock failures), config/schema consistency (XDG_CONFIG_HOME, channel overrides), and data durability (SQLite snapshots). PRs are rapidly addressing the latter three, but the multi-agent concurrency problem (#43367) remains open with 14 comments and no linked fix PR, signaling a higher‑effort maintainer priority.*

## 5. Bugs & Stability
**P1‑severity bugs active today**, ranked by reported impact and fix‑PR availability:

| Severity | Issue | Comments | Link | Fix PR? |
|----------|-------|----------|------|---------|
| P1 | #43367 – multi-agent orchestration instability | 14 | [link](https://github.com/openclaw/openclaw/issues/43367) | No |
| P1 | #38327 – gemini null conv crash | 14 (3 👍) | [link](https://github.com/openclaw/openclaw/issues/38327) | No |
| P1 | #87561 – fallback delivery semantics | 12 | [link](https://github.com/openclaw/open

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem
**Snapshot Date: 2026-08-27**

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is in a **high-velocity stabilization phase** as of late August 2026, with the majority of active projects prioritizing reliability, concurrency safety, and channel-integration hardening over greenfield feature work. OpenClaw dominates by raw activity (~1,000 combined issue/PR events/day), while a long tail of specialized projects (CoPaw/QwenPaw, Hermes Agent, NanoBot, IronClaw, ZeroClaw) cluster in the 25–100 event range, and several niche or dormant projects (TinyClaw, ZeptoClaw, NullClaw) show minimal movement. Cross-cutting pain points — session-state durability, MCP/tool reliability, multi-agent concurrency, and desktop/installer regressions — recur across nearly every active codebase, indicating shared infrastructure maturity gaps rather than project-specific issues.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Activity Tier | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 500 (332 open / 168 closed) | 500 (302 open / 198 merged) | 0 (preparing 2026.9.1-beta.1) | Very High | 7/10 |
| **Hermes Agent** | 50 (35 / 15) | 50 (46 / 4) | 0 | High | 5/10 |
| **IronClaw** | 27 (9 closed) | 50 (48 merged) | v1.4.0 release push | Very High | 8/10 |
| **ZeroClaw** | 27 (21 / 6) | 50 (46 / 4) | 0 | High | 6/10 |
| **CoPaw (QwenPaw)** | 33 (15 closed) | 45 (28 merged) | **v2.2.0-beta.1 shipped** | Very High | 7/10 |
| **NanoBot** | 1 closed | 32 (17 merged) | 0 | Medium-High | 8/10 |
| **NanoClaw** | 2 (1 closed) | 24 (6 merged) | 0 | Medium-High | 7/10 |
| **PicoClaw** | 7 (5 / 2) | 6 (4 merged) | 0 | Medium | 7/10 |
| **LobsterAI** | 2 opened | 16 (15 merged) | 0 | Medium | 8/10 |
| **Moltis** | low | 2 (2 merged) | **20260826.01 shipped** | Low-Medium | 9/10 |
| **NullClaw** | 1 (no response) | 0 | 0 | Dormant | 3/10 |
| **TinyClaw** | 0 | 0 | 0 | Inactive | N/A |
| **ZeptoClaw** | 0 | 0 | 0 | Inactive | N/A |

*Health Score = subjective composite of merge velocity, issue closure rate, critical-bug exposure, and release cadence.

---

## 3. OpenClaw's Position

**Advantages vs. peers**
- **~10x raw throughput** of the next-tier projects (500/500 vs. 50/50 for Hermes/ZeroClaw), reflecting both a larger contributor base and a more aggressive issue-burn rate.
- **Broadest channel/integration surface** evidenced by active work across feishu, mattermost, IRC, GitHub, Telegram, LINE, and Discord adapters in a single 24h window.
- **Mature release discipline** — versioned beta cadence (2026.8.1-beta.3 → 2026.9.1-beta.1) with explicit migration notes for SQLite snapshot and state-store landmines.

**Technical approach differences**
- OpenClaw treats **multi-agent orchestration and session-state integrity as a first-class subsystem** (issue #43367 with 14 comments, no fix PR — a higher-effort maintainer priority). Most peers (NanoBot, PicoClaw) treat agents as single-instance or narrowly-scoped.
- Heavier emphasis on **SQLite-backed durability** (issue #113306 on snapshot restore guarantees) — peers like NanoClaw and PicoClaw use lighter persistence layers.
- **Gateway + Control UI** architecture (Claude CLI OAuth preservation across restarts, PR #125471) is more elaborate than NanoBot's TUI-centric or LobsterAI's renderer-centric designs.

**Community size comparison**
- OpenClaw's comment density (top issue: 20 comments) and PR breadth (500) suggest a community an order of magnitude larger than the next tier. Hermes Agent and CoPaw show comparable comment density (10–13) but at 1/10 the volume, indicating **deeper but narrower** communities. Moltis, NanoBot, and LobsterAI show small but highly responsive maintainer-led communities (high merge-to-open ratio).

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Need |
|---|---|---|
| **Multi-agent concurrency safety** | OpenClaw (#43367), NanoBot (goal continuation #5553, #5257) | Atomic config writes under concurrent `agents add`; session-lock failures; race-free goal lifecycle |
| **Session / state durability** | OpenClaw (#113306 SQLite snapshots), Hermes Agent (#93888 session restore), NanoClaw (#3568 pending system rows) | Crash-consistent restore, identity preservation, queue-starvation avoidance |
| **MCP stdio / tool reliability** | Hermes Agent (#94335, #94637, #95165 — inverted liveness), CoPaw (cache hit observability #7335) | Subprocess liveness detection, OAuth scope correctness (RFC 7591 — Moltis #1244), tool allowlist integrity |
| **Channel adapter schema/config consistency** | OpenClaw (#117287, #117302, #118157), NanoClaw (Mattermost #3557, #3556), PicoClaw (Slack #3340, LINE #3329), CoPaw (DingTalk #7158) | Context-visibility key handling, media-size overrides, webhook config surfacing, topic support |
| **Desktop / installer robustness** | CoPaw (Windows installer #6810, missing backend #7311, TLS #7298 → Python 3.13), Hermes Agent (Windows update #95589, #95294) | Process-locked install dirs, bundled-binary completeness, TLS handshake on carrier DPI, atomic update rollback |
| **Provider/model catalog freshness** | CoPaw (Volcengine, Xiaomi, qwen3.8-max — PRs #6490, #6285), LobsterAI (Synthorai #2554) | Built-in provider slots, dual base-URL support, model list currency |
| **Observability & cost telemetry** | OpenClaw (cross-channel delivery semantics #87561), Hermes Agent (token/cost metrics #96091), CoPaw (cache hit rate #7335) | Per-channel drop/suppression visibility, cache hit rate exposure, token/cost export |
| **Memory scaling** | Hermes Agent (#5320 memory_char_limit), CoPaw (#7252 OpenViking backend) | Configurable defaults, long-term memory backends |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw / NanoClaw / Hermes / ZeroClaw | NanoBot / PicoClaw / Moltis | CoPaw (QwenPaw) / LobsterAI |
|---|---|---|---|
| **Feature focus** | Multi-agent orchestration, channel breadth, gateway durability | Lean TUI/WebUI agent runtimes, single-user ergonomics | Multi-tenant Hub (CoPaw), consumer-grade renderer (LobsterAI) |
| **Target users** | Operators / DevOps running self-hosted agent gateways | Power users / developers running local-first assistants | Teams (CoPaw Hub) and end-user desktop (LobsterAI) |
| **Technical architecture** | Gateway + Control UI + multi-channel adapters + SQLite | TUI-first or minimal WebUI; lighter persistence | Renderer-heavy desktop app; cloud-deployable Hub variant |
| **Release cadence** | Continuous beta chain (OpenClaw), stable minor (Hermes) | Frequent small PRs, infrequent tags | Tagged betas (CoPaw v2.2.0-beta.1), patch-driven (LobsterAI) |
| **Concurrency model** | Multi-agent as core primitive | Mostly single-agent with goal-continuation | Single-agent → multi-tenant Hub transition (CoPaw) |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly iterating (high churn, stabilizing core):**
- **OpenClaw** — merging ~200 PRs/day against a 300-PR backlog; beta freeze imminent.
- **IronClaw** — 48/50 PRs merged in 24h with v1.4.0 release; appears to be in a consolidation sprint.
- **CoPaw** — v2.2.0-beta.1 just shipped; 28 PRs merged, parallel CI overhaul, Python 3.13 upgrade landing.

**Tier 2 — Active maintenance (steady bug-burn, feature work in parallel):**
- **Hermes Agent** — many P1 defects open (stdio, session restore, gateway SIGSEGV); only 4/50 PRs merged; backlog is growing faster than it's closing. **Health risk.**
- **ZeroClaw** — 46/50 PRs still open; mostly RFC and risk-review work; healthy engagement but low merge velocity.
- **NanoBot** — high merge ratio (17/32) on small-to-medium fixes; very healthy for its size.
- **NanoClaw** — coordinated 14-PR hardening batch from a single contributor; stable but low community engagement.

**Tier 3 — Stable, low churn:**
- **PicoClaw** — small, focused fix cadence; channel integrations and routed-agent polish.
- **LobsterAI** — UI/UX polish cycle; no critical bugs; localization requests emerging.
- **Moltis** — extremely disciplined: shipped 20260826.01, closed both open issues; exemplary small-project hygiene.

**Tier 4 — Dormant / Inactive:**
- **NullClaw** — 1 open enhancement, no maintainer response since May 2026 release.
- **TinyClaw, ZeptoClaw** — zero 24h activity.

---

## 7. Trend Signals

**Industry trends extracted from community feedback:**

1. **Concurrency and state durability are the new bottleneck.** Multi-agent config overwrites (OpenClaw), session restore (Hermes), queue starvation (NanoClaw), and goal-continuation lifecycle (NanoBot) all surfaced today. The "easy" CRUD problems are solved; the "hard" atomicity and crash-consistency problems are now blocking production.

2. **MCP is becoming a reliability minefield.** Three duplicate issues (Hermes #94335/#94637/#95165) and a dedicated OAuth-scope fix (Moltis #1244) in a single day show that the Model Context Protocol standardization is outpacing the implementation's ability to handle subprocess lifecycle, scope negotiation, and RFC 7591 conformance.

3. **Desktop packaging is a first-class concern again.** CoPaw's Python 3.13 bump for TLS, Hermes' Windows update atomicity, and PicoClaw's NSIS installer fixes reflect a broader industry reality: **carrier DPI, locked DLLs, and interrupted updates are now shipping-blockers for AI assistant desktops**, not edge cases.

4. **Observability and cost transparency are emerging as competitive features.** Prompt cache hit rates (CoPaw #7335), token/cost export (Hermes #96091), and unified provider usage backends (NanoBot #5481) signal that **users increasingly expect to see and optimize spend**, especially as model catalogs expand (CoPaw adding Volcengine, Xiaomi, qwen3.8-max in one day).

5. **Multi-tenant / team deployment is the next product frontier.** CoPaw's QwenPaw Hub (v2.2.0 headline), aggregating 4+ years of issue requests, is the clearest signal that **personal-assistant → team-assistant** is the dominant upgrade path being demanded by enterprise-adjacent users.

6. **Localization (RTL, bidi) and international provider slots** (LobsterAI's Persian request, Synthorai provider slot) suggest the user base is broadening beyond English/Chinese-first markets, even if slowly.

**Value for AI agent developers:**
- **Reuse, don't fork** — the recurrence of identical problems (stdio liveness, SQLite snapshot restore, channel schema validation) across 5+ projects argues strongly for shared libraries or a "gateway agent" reference implementation rather than parallel reinvention.
- **Bet on durability and observability primitives** — projects that ship these well (Moltis, IronClaw post-1.4.0) are the ones climbing the health-score ladder.
- **Watch the multi-tenant pivot** — CoPaw's Hub bet is the most consequential architectural decision in this digest; its adoption will set expectations for the entire category.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest (2026‑08‑27)

## 1. Today's Overview
NanoBot shows a healthy activity level for a late‑August date. One issue was closed (bug #5550) and 32 pull requests saw updates—17 of them merged/closed—indicating strong development momentum, particularly around UI stability, performance, and bug fixes. No new releases were published, so users are operating on the most recent stable version while awaiting the next feature‑ready build. Overall, the project maintains a steady pace of incremental improvements and rapid issue resolution.

## 2. Releases
**None** – there were no new releases today, and the “Latest Releases” section shows no version tags. This suggests the team is still stabilizing merged changes before cutting a release.

## 3. Project Progress
### Merged / Closed PRs (last 24 h)
| # | Title | State | Category | Author |
|---|-------|-------|----------|--------|
| **5556** | fix(agent): complete native reasoning lifecycle | **CLOSED** | bug/fix | chengyongru |
| **5543** | fix(tui): surface chat connection failures | **CLOSED** | bug/fix | chengyongru |
| **5491** | fix(webui): keep answer text outside reasoning shell | **CLOSED** | bug/fix | chengyongru |
| **5481** | feat(usage): add unified provider usage backend | **CLOSED** | feature | chengyongru |
| **5534** | feat(tui): autocomplete skill references | **CLOSED** | enhancement | chengyongru |
| **5533** | fix(tools): keep find_files scans responsive | **CLOSED** | bug/fix | chengyongru |
| **5538** | refactor(tui): clarify active composer actions | **CLOSED** | refactor | chengyongru |
| **5546** | refactor(agent): make run usage explicit | **CLOSED** | refactor | chengyongru |
| **5548** | refactor(webui): isolate websocket application orchestration | **CLOSED** | refactor | chengyongru |
| **5555** | refactor(agent): remove duplicate progress streaming path | **CLOSED** | refactor | chengyongru |
| **5519** | fix(webui): compact single‑pane chat header | **CLOSED** | bug/fix | Re‑bin |
| **5544** | fix(gateway): recover degraded WebSocket listener | **CLOSED** | bug/fix | chengyongru |
| **5484** | *Not listed* (likely internal/PR with no activity) | — | — | — |

**Key Advances**
- **Reasoning lifecycle** is now fully closed before answer streaming, preventing race conditions.
- **UI stability**: Connection failures, chat headers, and composer actions are cleaner and more responsive.
- **Performance**: Dependency install caching in TUI and responsive `find_files` scans reduce latency.
- **Developer experience**: Unified usage backend, explicit run usage, and websocket orchestration simplify maintenance.

## 4. Community Hot Topics
The most active community interaction today is the **closed bug #5550**—the only open issue that has been resolved. Though it currently has zero comments/reactions, it signals a critical user‑facing bug concerning `read_session` tool behavior when using wildcard queries.

- **Issue #5550** – “read_session tool returns empty history when models use wildcard queries for the optional filter”
  - URL: https://github.com/HKUDS/nanobot/issues/5550
  - **Underlying need**: Users referencing other conversations with `@session` expect the tool to retrieve recent messages. A wildcard‑like `query` (`"*"`, `".*"`, whitespace) should return all history, but currently fails. This is a foundational bug for conversation referencing, a core NanoBot feature.

No PR in the top‑20 list currently shows comment counts (they appear as “undefined”), so the “most comments/reactions” metric is limited; however, the active PRs that are still **OPEN** (e.g., #5504, #5557, #5553, #5234, #5364, #5339, #5257, #5520) represent ongoing work and are likely the focus of community discussion in their respective issue threads.

## 5. Bugs & Stability
| # | Bug Title | Severity | State | Fix Availability |
|---|-----------|----------|-------|------------------|
| **5550** | `read_session` returns empty history on wildcard queries | **High** (affects core conversation linking) | **CLOSED** (resolved) | ✅ |
| **5504** | Surface model retry status in UI (NAN‑34) | **Medium** (user‑visible retry indicator) | **OPEN** | – |
| **5553** | Hold goal continuation after a failed completion attempt | **Medium** (goal lifecycle logic) | **OPEN** | – |
| **5234** | Integrate mst‑python as metasearch provider | **Low–Medium** (new provider integration) | **OPEN** | – |
| **5364** | Add temporary side conversations (WebUI) | **Low** (feature) | **OPEN** | – |
| **5339** | Reject discarded temporary chat messages | **Medium** (message persistence) | **OPEN** | – |
| **5257** | Bound sustained‑goal continuation when the turn goes idle | **Medium** (resource leak) | **OPEN** | – |

**Overall Stability** – Most reported bugs have clear fix PRs already merged, and several high‑priority open PRs aim to harden retry handling, goal continuations, and WebSocket resilience, indicating a proactive approach to stability.

## 6. Feature Requests & Roadmap Signals
From the open PRs, the following user‑oriented features are in active development:
1. **Retry Status UI** – Real‑time model retry countdown and attempt progress in TUI/WebUI (PR #5504).  
2. **Side Conversations** – `/side` command for temporary, isolated chats (PR #5364).  
3. **Metasearch Provider (mst‑python)** – Unified multi‑engine search with Reciprocal Rank Fusion (PR #5234).  
4. **Skill Autocomplete** – TUI support for `$skill-name` references (PR #5534).  
5. **Langfuse Tracing for Codex** – Native OpenTelemetry integration (PR #5520).

These indicate a roadmap focused on **enhanced user experience** (UI clarity, multitasking), **search capabilities**, and **observability**.

## 7. User Feedback Summary
- **Positive**: Users appreciate the ongoing UI refinements (compact headers, composer actions) and performance gains (dependency caching, responsive file scans). The unified usage backend and explicit agent run usage suggest cleaner telemetry for power users.  
- **Pain Points**: The closed #5550 reveals a critical gap in conversation referencing—a core use case that users rely on for cross‑session queries. Additionally, open issues around goal continuations and temporary chat messages hint at lingering edge‑case confusion for sustained interactions.

Overall satisfaction appears high, but the wildcard query bug indicates a need for thorough testing of query parsing in session tools.

## 8. Backlog Watch
**Issues needing maintainer attention (still open):**
- **#5550** – now resolved, but the fix should be validated for edge cases (e.g., whitespace, `"*"`).  
- **#5504** – UI retry status (NAN‑34) is still in conflict; this likely requires coordination with other UI PRs.  
- **#5553** – Goal continuation logic after failed completion – a core loop stability issue.  
- **#5257** – Sustained‑goal continuation bound when idle – addresses a potential resource leak.  
- **#5339** – Discarded temporary chat messages persistence – could affect user confidence in temporary chats.

These items merit prompt review to prevent regressions and to maintain the project’s rapid delivery cadence.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – 2026‑08‑27**

---

### 1️⃣ Today’s Overview
- **Activity:** The repo logged **50 issues** (35 open/active, 15 closed) and **50 PRs** (46 open, 4 merged/closed) in the past 24 h. No releases were published, indicating the team is still in a heavy “fix‑and‑feature” cycle.
- **Health Snapshot:** Critical bugs dominate the active backlog (multiple P1s on MCP stdio, Desktop session restore, gateway crashes). Feature work is progressing in parallel (webapp, bot‑room durability, governance hardening), but the stability picture remains fragile. The project is in a “maintenance‑heavy” mode with an accelerating pace of triage.

---

### 2️⃣ Releases
**None.** The pipeline has not shipped a new version since the last release (v0.20.x). All current work is staged in PRs awaiting merge.

---

### 3️⃣ Project Progress – Merged / Closed PRs Today
| # | Title | Status |
|---|-------|--------|
| #96110 | `fix(desktop/sessions):` legacy NULL‑owner session migration – single‑match owner backfill + read‑only transcript resume | **Merged** (addresses “Error B” restoration failures) |
| #96109 | `fix(tools):` restore executor allowlist on message_agent inject success | **Merged** (closes #96105 – allowlist leak) |
| #96091 | `feat(monitoring):` export coding‑agent token/cost usage as hermes.* metrics | **Closed** (feature delivered) |
| #91467 | `feat(cli):` detect uv.lock changes and refresh python deps on `hermes update` | **Open** (awaiting merge) |
| #93508 | `feat(webapp):` serve Desktop renderer in browsers (browser‑native `window.hermesDesktop`) | **Open** (RFC‑style feature) |

*Key Themes:* Immediate fixes for session migration and executor allowlist integrity have been merged, while longer‑term durability and webapp hosting PRs continue to await final review.

---

### 4️⃣ Community Hot Topics – Most Discussed Issues (comments ↑)

| Rank | Issue (link) | Comments / 👍 | Core Need |
|------|--------------|---------------|-----------|
| 1 | [#94335](https://github.com/NousResearch/hermes-agent/issues/94335) – `_stdio_children_dead()` inverted liveness check | **13** | **Reliability** – MCP stdio tools are failing fast on alive child processes, affecting all stdio‑based servers (ADO, GBrain, chrome‑devtools). |
| 2 | [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) – Desktop sends local runtime ID to Remote Gateway, cannot restore stored sessions | **12** | **Session continuity** – Multi‑gateway ownership campaign left orphaned session rows (`profile_name = NULL`) that Desktop cannot open. |
| 3 | [#94637](https://github.com/NousResearch/hermes-agent/issues/94637) – MCP stdio tool calls fast‑fail with “subprocess has exited” (duplicate of #95165/#95150) | **10** | **Stability** – A single root cause (inverted `_stdio_children_dead()`) is now reported three times, confirming a systemic regression introduced in #85125. |
| 4 | [#94724](https://github.com/NousResearch/hermes-agent/issues/94724) – Desktop persistent multi‑gateway connections – campaign complete (27 PRs merged) | **8** | **Campaign cleanup** – Post‑campaign “salvage” is near‑complete; remaining stray sessions are the focus. |
| 5 | [#95589](https://github.com/NousResearch/hermes-agent/issues/95589) – Windows `hermes update` hangs after build, never relaunches desktop | **8** | **Platform stability** – Windows update hand‑off leaves a zombie process and stale code forever (related to #95294). |
| 6 | [#5320](https://github.com/NousResearch/hermes-agent/issues/5320) – Raise/auto‑scale `memory_char_limit` defaults | **8** | **Scalability** – Curated memory store defaults hit quickly on long‑running sessions; users request configurable defaults. |
| 7 | [#94248](https://github.com/NousResearch/hermes-agent/issues/94248) – Gateway SIGSEGV 17‑72 ms after delegate deadlines (macOS arm64) | **7** | **Crash‑proofing** – Deadline handling leaks unsafe reads, causing segmentation faults in long‑running gateways. |
| 8 | [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) – RealtimeVoiceProvider ABC (four competing duplex‑voice PRs need a unified interface) | **5** | **Architecture hygiene** – Multiple voice adapters threaten merge‑queue health; community wants an ABC + orchestrator. |
| 9 | [#95816](https://github.com/NousResearch/hermes-agent/issues/95816) – Telegram gateway hangs at “Connecting to Telegram” (duplicate) | **5** | **Gateway health** – New bot profiles cause the Telegram adapter to stall, echoing the broader “connector stability” issue. |
|10| [#95294](https://github.com/NousResearch/hermes-agent/issues/95294) – Interrupted `hermes update` leaves gateway on stale code forever | **4** | **Update atomicity** – Partial update roll‑backs can leave the system in a permanently inconsistent state. |

*Takeaway:* **MCP stdio reliability** and **Desktop session restoration** dominate the conversation. Both trace back to a few underlying regressions (inverted child‑liveness logic, session ownership cleanup). The community is also pushing for **memory scaling** and **cross‑platform update robustness**.

---

### 5️⃣ Bugs & Stability – Critical Open Defects (severity rank)

| Priority | Issue (link) | Tags | Impact |
|----------|--------------|------|--------|
| **P1** | [#94335](https://github.com/NousResearch/hermes-agent/issues/94335) – `_stdio_children_dead()` inverted | `tools/mcp_tool.py` | MCP stdio servers (ADO, GBrain, chrome‑devtools) incorrectly reported as dead → all tool calls fast‑fail. |
| **P1** | [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) – Desktop session restore with remote gateway | `area/sessions, sweeper:risk-session-state` | Desktop UI “Restore failed – Session not found” after the multi‑gateway ownership campaign; years of history at risk. |
| **P1** | [#94637](https://github.com/NousResearch/hermes-agent/issues/94637) (dup) – MCP stdio fast‑fail after #85125 | `tool/mcp, Windows` | Windows users see “subprocess has exited” even when the MCP server is alive; duplicates confirm a single root cause. |
| **P1** | [#94248](https://github.com/NousResearch/hermes-agent/issues/94248) – Gateway SIGSEGV on delegate deadline | `gateway, macOS arm64` | Long‑running gateways crash on deadline expiry; Apple crash logs (12 reports) point to unsafe SSL reads. |
| **P1** | [#95816](https://github.com/NousResearch/hermes-agent/issues/95816) (dup) – Telegram gateway hangs | `platform/telegram, sweeper:risk-message-delivery` | New bot profiles stall at “Connecting to Telegram”; a regression in socket‑mode startup logic. |
| **P1** | [#95165 / #95150](https://github.com/NousResearch/hermes-agent/issues/95165) – `_stdio_children_dead()` reports alive child as dead | `tools/mcp_tool.py` | Same inverted logic as #94335, now documented in three duplicate issues. |
| **P2** | [#95294](https://github.com/NousResearch/hermes-agent/issues/95294) – Interrupted `hermes update` leaves stale code | `area/install-update, sweeper:risk-compatibility` | Partial updates (Ctrl‑C) leave the gateway on an older commit forever; receipt record exists but no repair logic runs. |
| **P2** | [#96062](https://github.com/NousResearch/hermes-agent/issues/96062) – Clicking bot chat jumps to sessions list | `comp/desktop, area/sessions` | UI UX bug; intermittent on half the bot chats, degrades mobile workflow. |
| **P2** | [#96069](https://github.com/NousResearch/hermes-agent/issues/96069) (dup) – Slack Socket Mode wedges in reconnect loop | `platform/slack` | Rate‑limited reconnects never rebuild the underlying aiohttp session; only a full gateway restart clears the loop. |
| **P3** | [#96105](https://github.com/NousResearch/hermes-agent/issues/96105) – injector reports success without restoring executor allowlist | `comp/agent` | Long‑lived Bot Chats can lose `message_agent` tool after a schema rebuild, breaking tool surface. |
| **P3** | [#96066](https://github.com/NousResearch/hermes-agent/issues/96066) – opencode‑go deepseek‑v4‑flash‑vision mis‑routes | `provider/openai, provider/bedrock` | Vision‑capable model incorrectly sent to Anthropic endpoint → 401 error; not auto‑detected as vision‑ready. |
| **P3** | [#96027](https://github.com/N

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### PicoClaw Project Digest (2026-08-27)  

#### 1. **Today's Overview**  
PicoClaw maintained steady activity in the last 24 hours with 7 issue updates (5 open, 2 closed) and 6 PR updates (2 open, 4 merged/closed). No new releases were published. The project shows active bug fixing and incremental improvements, particularly in Slack/LINE integrations and routed agent functionality, though lingering performance and feature gaps persist.  

#### 2. **Releases**  
No new releases were published in the last 24 hours.  

#### 3. **Project Progress**  
Four PRs were merged/closed today, advancing stability and feature completeness:  
- **#1549**: Batched merge of fixes from PRs #1448–#1444 (unspecified improvements).  
- **#3316**: Fixed routed-agent context management to respect history, summarization, compression, and Seahorse bootstrap (resolves **#3301**).  
- **#3315**: Added support for Telegram topics in private bot chats (enhances forum-like UX for bots).  
- **#3314**: Corrected `customAllowPatterns` logic to allow shell commands like `git push` (fixes silent command blocking).  

#### 4. **Community Hot Topics**  
- **#3287** (IRC long messages): **8 comments** – Feature request to handle IRCv3 message fragmentation (>512 bytes) as cohesive units. Highlights user need for robust IRC integration in modern deployments.  
- **#3281** (Web UI lag): **7 comments** – Performance bug where input latency increases with chat history length in Web UI. Reflects critical UX pain point for heavy-session users.  
- **#3340** (Slack media fix): **0 comments** – Open PR directly addressing **#3338** (Slack image upload failures) by setting `FileSize` in upload parameters. Community-driven fix awaiting review.  
- **#3329** (LINE webhook warning): **0 comments** – Open PR proposing runtime warnings for unused `webhook_host`/`webhook_port` config (tied to **#3328**), improving configuration clarity.  

#### 5. **Bugs & Stability**  
Ranked by user impact and fix readiness:  
- **🔴 High**:  
  - **#3338** (Slack media upload fails with `file size cannot be 0`): Blocks core Slack functionality. Fix PR **#3340** exists (awaiting merge).  
  - **#3281** (Web UI input lag with long history): Degrades usability in extended sessions; no fix PR yet.  
- **🟠 Medium**:  
  - **#3339** (Antigravity returns 429 despite valid scopes): Disrupts Google AI workflows; root unclear (quota vs. token handling).  
  - **#3346** (RKLLM abnormal responses on ARM): Environment-specific issue needing reproduction details.  
- **🟢 Recently Fixed**:  
  - **#3301** (Routed agent context/compression failure): Resolved by **#3316**.  
  - **#3328** (LINE webhook settings inert): Addressed by **#3329** (open PR).  
  - **#3314** (Shell command allow patterns ignored): Fixed by **#3314**.  

#### 6. **Feature Requests & Roadmap Signals**  
- **#3287** (IRC long message support) signals demand for resilient IRCv3 handling – likely candidates for next version if prioritized.  
- Merged **#3315** (Telegram topics in private chats) indicates ongoing focus on Telegram UX enhancements; future work may extend to topic-based message routing.  
- Fixes for media uploads (**#3340**) and webhook config warnings (**#3329**) suggest a trend toward tightening channel-specific integrations.  

#### 7. **User Feedback Summary**  
Users express frustration with:  
- **Performance**: Web UI becomes unresponsive during prolonged use (**#3281**), hindering productivity.  
- **Integration gaps**: Slack image uploads fail silently due to SDK parameter omission (**#3338**), breaking media-sharing workflows.  
- **Configuration confusion**: Documented LINE webhook settings (`webhook_host`/`webhook_port`) have no effect (**#3328**), causing setup errors.  
Positive feedback surrounds recent fixes for routed agent context (**#3301**→**#3316**) and command execution (**#3314**→**#3314**), restoring reliability for advanced automations.  

#### 8. **Backlog Watch**  
- **#3287** (IRC long messages): Open since 2026-07-22 (8 comments, stale). *Needs triage*: High-user-impact feature lacking implementation path.  
- **#3281** (Web UI lag): Open since 2026-07-21 (7 comments). *Critical UX gap*: Requires performance audit of history rendering/input handling.  
- **#3339** (Antigravity 429): Open since 2026-08-17 (2 comments). *Blocks Google AI*: Investigate OAuth token reuse/quota reporting.  
- **#3340** (Slack media fix): Open PR since 2026-08-17. *Actionable*: Low-risk fix for blocker bug; prioritize merge.  
- **#3329** (LINE webhook warning): Open PR since 2026-08-11. *Quick win*: Improves config safety with minimal effort.  

---  
*Data sourced from GitHub events on 2026-08-27. Stale labels indicate possible inactivity but recent updates suggest ongoing relevance.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-27

## 1. Today's Overview

NanoClaw shows **high development activity** in the 24-hour window, with 24 PRs updated (6 closed/merged, 18 still open) and 2 issues addressed (1 closed, 1 new). The pipeline is dominated by a coordinated batch of 14 fix-style PRs from a single contributor (`Agi-Asi`), targeting setup, host, container, chat, and channels subsystems, suggesting a focused hardening sweep. Community engagement remains low on individual items (no items show non-zero reactions on the latest PRs), but the breadth of fixes indicates active maintainer-level maintenance. No new releases shipped in the period, so changes are still accumulating on trunk awaiting a tagged cut.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

Six PRs were closed/merged in the last 24h:

- **#3557** [Mattermost initial setup & SiteURL handling](https://github.com/qwibitai/nanoclaw/pull/3557) — closed
- **#3556** [Mattermost card-thread recovery after restart](https://github.com/qwibitai/nanoclaw/pull/3556) — closed
- **#574** [Containers lack `jq`](https://github.com/qwibitai/nanoclaw/issues/574) — closed (older enhancement finally addressed)

The Mattermost channel adapter received two reliability fixes (setup UX and restart-time card routing), and the long-standing `jq` enhancement for safer API response parsing closed. The 18 remaining open PRs are nearly all staged for the next merge window — covering container output-token caps, Node version floor bumps, signal-cli probe timeouts, launchd bootstrapping, and chat-session wiring — indicating a substantial fix batch pending review.

## 4. Community Hot Topics

Comment-driven ranking is essentially flat in this 24h slice — most items have no recorded comments or reactions. The single notable engagement signal is the long-lived enhancement **#574** (1 👍, 3 comments) from February, which finally closed today. Its underlying need — replacing `node -e` JSON parsing with `jq` to avoid eval-injection vulnerabilities inside agent containers — points to a broader, ongoing concern about safe tool execution inside sandboxes that the project is now actively addressing.

The new open issue **#3568** (0 comments) is fresh and may attract attention shortly because it describes a hard-failure mode (silent agent non-response) that is operational rather than cosmetic.

## 5. Bugs & Stability

**High severity (functional outage):**

- **#3568** — *Pending system rows starve the inbound queue; agent silently stops responding.* New, open, no comments. A session accumulating ≥ `maxMessagesPerPrompt` (default 10) pending `kind='system'` rows with lower `seq` than real traffic causes the agent to stop responding to every inbound message, with no error surfaced. No linked fix PR yet. This is the most actionable stability issue today. (https://github.com/qwibitai/nanoclaw/issues/3568)

**Medium severity (reliability / recovery):**

- Mattermost card thread recovery after restart — **#3556** closed (fix merged).
- Repeated container wake-up failures producing no user notification — **#3566** open (fix proposed).

**Lower-severity stability fixes in the open PR queue:**

- `signal-cli` probe deadlocking on the daemon's config lock — **#3563** open.
- `launchd` plist not bootstrapped in `restart.sh` (silent kickstart no-op) — **#3561** open.
- `better-sqlite3` 13 segfault on Node < 22.14.0 — **#3555** open.
- `INSERT INTO messages_in` causing retry crash loops on UNIQUE collisions — **#3549** open.

Overall: several of today's PRs are direct, narrowly-scoped stability fixes, and a critical silent-failure bug is currently unpatched.

## 6. Feature Requests & Roadmap Signals

The 24h PR mix skews heavily toward fix and documentation types, with one explicit feature-skill-shaped item: **#3501** (open) — *Docs: mention the Dial channel in the README and changelog.* This is documentation for the already-shipped Dial channel integration (#3050/#3041), not new functionality, and is a strong signal that the **Dial channel is effectively in the current channel set** even though it has not yet been called out publicly.

Other forward-leaning items in the open queue:

- **#3565** — *Forks keep local adapters through skill refresh* (preserves user customizations across updates).
- **#3558** — *Raise the Claude SDK output-token cap to the model's real ceiling* (perceived quality/throughput improvement).
- **#3553** — *Normalize reaction emoji per platform in the Chat SDK bridge* (cross-channel UX consistency).

No PRs advertise new feature skills today; the next release, when cut, is most likely a stability/quality release rather than a feature release.

## 7. User Feedback Summary

Concrete user pain points visible in today's data:

- **Operational blindness**: users hit cases where the agent stops responding with no error surfaced (issue #3568), and cases where container wake-ups fail repeatedly with no user notification (PR #3566). Both reflect a need for *better failure surfacing* in the host/runtime layer.
- **Installer friction on Linux**: non-interactive `apt` hangs on `needrestart` (PR #3562), `signal-cli` deadlocks (PR #3563), PATH ordering around the onecli guard (PR #3567) — collectively a pattern of *setup-time reliability* complaints.
- **Security ergonomics**: long-standing user concern that `node -e`-based JSON parsing in containers creates eval-attack surface (issue #574, now closed). This is a security-shaping user ask.
- **Cross-channel correctness**: emoji normalization (PR #3553) and Mattermost restart-time thread recovery (PR #3556) indicate users care about *behavioral parity and idempotence* across channels.

The most recent issue (BuckG71, #3568) and the recent contributions from `aniruddhaadak80` (mailbox, skills) and `wildcard` (Codex, OneCLI gateway) show a community of integrators pushing on real production deployment edges rather than feature novelty.

## 8. Backlog Watch

- **#3568** — *Pending system rows starve the inbound queue* (new, 0 comments, no fix PR). This is the highest-priority backlog item: it is a fresh, high-severity functional outage with no owner yet. Recommend maintainer triage immediately. (https://github.com/qwibitai/nanoclaw/issues/3568)
- **#3501** — *Docs: mention Dial channel in README and changelog* (open since 2026-08-24, marked `[core-team]`). Stale-pending documentation PR that, if accepted, would also retroactively close a discoverability gap for the Dial integration. (https://github.com/qwibitai/nanoclaw/pull/3501)
- **#3551** and **#3552** — *Per-group MCP policy + OneCLI gateway routing / MCP-only policy behind OneCLI* (open, from `wildcard`). These are structurally related Codex/MCP hardening PRs and would benefit from a coordinated review rather than independent merge. (https://github.com/qwibitai/nanoclaw/pull/3551, https://github.com/qwibitai/nanoclaw/pull/3552)
- The 14 open fix-style PRs from `Agi-Asi` (#3553–#3567) form a coherent batch; collectively they represent a sizable merge candidate but none have review engagement yet — a candidate for a batched review pass.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**Project Digest: NullClaw (nullclaw/nullclaw) – 2026-08-27**  

---

### 1. **Today's Overview**  
Project activity remains dormant as of August 27, 2026. A single open enhancement issue was raised yesterday (Issue #995), while no pull requests or releases were recorded in the last 24 hours. Maintainers have not yet responded to the new feature request, signaling a potential backlog or focus on stabilization.  

---

### 2. **Releases**  
No new versions have been released since the last update (2026-5.29).  

---

### 3. **Project Progress**  
No merged or closed pull requests were reported today.  

---

### 4. **Community Hot Topics**  
**Issue #995** (Enhancement: *Support Skills Symlinks*)  
- **Author**: @ivostoykov (2026-08-26)  
- **Reactions**: 0 👍 | **Comments**: 0  
- **Link**: [Issue #995](https://github.com/nullclaw/nullclaw/issues/995)  
- **Summary**: The user requests native support for symlinks in the `skills` directory, noting that current versions (2026.5.29) ignore symlinked skills.  

---

### 5. **Bugs & Stability**  
No bug reports, crashes, or regressions were documented in the past 24 hours.  

---

### 6. **Feature Requests & Roadmap Signals**  
- **Issue #995** highlights a feature gap that could improve workflow efficiency for users relying on symlinks for skill management.  
- **Predictability**: If deemed high-priority, this could be addressed in the next minor release (e.g., 2026.8.x) to align with version 2026.5.29’s timeline.  

---

### 7. **User Feedback Summary**  
- **Pain Point**: The lack of symlink support complicates skill synchronization and prevents the use of older versions of skills.  
- **Use Case**: Users managing skills across multiple projects may benefit significantly from this feature.  

---

### 8. **Backlog Watch**  
- **Issue #995** (2026-08-26): This newly created issue remains the sole open item. Maintainers should prioritize reviewing the request, as it addresses a clear usability gap for developers.  

---  
*Data Source: GitHub activity snapshot (nullclaw/nullclaw as of 2026-08-27).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-08-27

An objective, data-driven analysis of the development activity, release milestones, community issues, and architectural progress in the **IronClaw** repository (`nearai/ironclaw`) over the last 24 hours.

---

### 1. Today's Overview
On August 27, 2026, IronClaw is experiencing exceptionally high development velocity and momentum, marked by a massive consolidation and release push. The repository recorded **50 updated pull requests (48 merged/closed)** and **27 updated issues (9 closed)** in the last 24 hours. The primary focus of current work is stabilizing the newly cut **`v1.4.0

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑08‑27**  

---

### 1. Today's Overview  
The repository showed moderate activity in the last 24 hours: **2 open issues** were created (both feature requests) and **16 pull requests** were updated, with **15 merged/closed** and **1 still open**. No new releases were published. Overall, the project is in a healthy maintenance mode – many small UI/UX polish PRs landed, while the community is beginning to surface longer‑term feature requests (multi‑protocol service provider and RTL/Persian support).

### 2. Releases  
*No new releases were tagged today.*  

### 3. Project Progress (Merged/Closed PRs)  
| PR | Area | Summary of Changes |
|----|------|--------------------|
| #2555 | renderer / artifacts | **Analytics:** Added events for share, deploy, copy‑link & permission updates; correlated operation/exposure/outcome; added async deployment final‑state tracking, reliable reporting queue; enriched account‑id, subscription & env data; improved library‑refresh, favorites & publish dialog instrumentation; added deployment analysis, identity & queue‑retry tests. |
| #2550 | renderer / docs / main / artifacts | **Library:** Implemented permanent deletion of cloud‑shared files (IPC + client type); only stopped shares can be deleted after filename confirmation; syncs cloud list, status counters & local favorites; handles status conflicts, server incompatibilities & deletion‑failure calibration; fixed duplicate local‑service deployment triggers after account switch/popup close; improved shared‑file update timestamps, site‑visit ranking tooltip accessibility; added automated tests & server‑联调 documentation. |
| #2539 | renderer / account | **User Menu:** Added a “daily credit gift” entry to the user menu. |
| #2546 | renderer | **Sidebar:** Delayed login‑promo auto‑hide timer while the engine startup overlay is visible; the five‑second promo window starts after the overlay clears. |
| #2553 | renderer / build / docs / windows | **UI:** Fixed Zhipu icon display in dark mode. |
| #2548 | renderer | **Chore:** Updated settings panel width. |
| #2544 | renderer | **Chore:** Updated library icon assets. |
| #2542 | renderer / main / openclaw / cowork | **Style:** Adjusted sidebar library icon styling. |
| #2540 | renderer | **Style:** Redesigned sidebar library icon. |
| #2547 / #2545 | renderer | **Chore:** Minor login‑guide fixes (no detailed description). |
| #2552 | renderer / cowork | **Chore:** Guide‑recharge updates (no detailed description). |
| #2556 | renderer / docs | **Chore:** rlog update (no detailed description). |
| #2549 | renderer / build / docs / windows | **Release prep:** Tagged as *Release/2026.8.26* (no functional change). |
| #2543 | build / docs / windows | **Chore:** Fixed web‑installer timing diagnostics. |

**Take‑away:** The day’s work centered on analytics depth (#2555), library file‑management safety (#2550), and a series of UI/UX polish items (icons, login flow, sidebar behavior, settings width). No major architectural changes were merged.

### 4. Community Hot Topics  
| Item | Type | Comments | Reactions | Link |
|------|------|----------|-----------|------|
| #2554 | Feature Request – add **Synthorai** as a built‑in service provider (dual OpenAI/Anthropic base‑URL support) | 1 | 0 | [#2554](https://github.com/netease-youdao/LobsterAI/issues/2554) |
| #2541 | Feature Request – **Persian (Farsi) text support** in chat (RTL input, mixed bidi, ZWNJ half‑space) | 1 | 0 | [#2541](https://github.com/netease-youdao/LobsterAI/issues/2541) |

Both issues were opened yesterday and each received a single comment, indicating early community interest. No PRs or comments have yet surpassed this level of engagement.

### 5. Bugs & Stability  
No explicit bug reports were filed today. However, several merged PRs address stability‑related regressions:

- **#2551** (still open) – *fix: app update preserve ready state* – likely resolves a crash or inconsistent state during self‑updates.  
- **#2546** – fixes a UI race where the login promo timer could fire prematurely during engine start‑up.  
- **#2553** – corrects a dark‑mode icon regression for the Zhipu provider.  

These are classified as **low‑to‑medium severity** (UX regressions) and already have fix PRs (except #2551, which awaits review).

### 6. Feature Requests & Roadmap Signals  
| Feature | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Synthorai built‑in service provider** (dual OpenAI/Anthropic base‑URL switch) | Issue #2554 | Medium – addresses a common “custom slot” pain point; aligns with existing built‑in providers (e.g., OpenRouter). |
| **Persian/Farsi RTL chat support** (input caret, bidi rendering, ZWNJ handling) | Issue #2541 | Medium – localisation demand is growing; similar RTL tickets have been closed in other projects. |
| **Permanent deletion of cloud‑shared files** | PR #2550 (merged) | High – already merged; will appear in the next patch. |
| **Daily credit gift entry** | PR #2539 (merged) | High – merged; user‑facing soon. |
| **Enhanced analytics for sharing/deployment** | PR #2555 (merged) | High – already merged; improves observability. |

### 7. User Feedback Summary  
- **Convenience:** Users want a one‑click way to add gateway‑style services like Synthorai without manually filling model IDs or juggling base URLs (Issue #2554).  
- **Localisation:** Persian speakers report broken chat layout (input LTR, caret misplaced) and missing half‑space handling, hindering fluent communication (Issue #2541).  
- **Polish:** Recent feedback (implied by merged PRs) appreciates refined icons, smoother login prompts, and clearer settings width – indicating the team’s focus on UI consistency.  

Overall sentiment appears **neutral‑to‑positive**; no negative sentiment or complaint threads were observed today.

### 8. Backlog Watch  
| Item | Status | Age | Why It Needs Attention |
|------|--------|-----|------------------------|
| #2551 – *fix: app update preserve ready state* | **Open** | 1 day | Prevents potential update‑related instability; should be reviewed and merged soon. |
| #2554 – Synthorai service provider | Open | 1 day | High‑impact feature; awaiting design/discussion. |
| #2541 – Persian text support | Open | 1 day | Localization milestone; early community interest. |

No issues or PRs remain untouched for > 7 days; the backlog is currently **light** and actionable.

---  

*Generated automatically from GitHub event data for 2026‑08‑27.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



Based on the provided GitHub activity for **Moltis** (`moltis-org/moltis`) leading up to 2026-08-27, here is the structured project digest.

---

### 1. Today's Overview
Moltis is experiencing high-velocity, focused maintenance activity, prioritizing critical configuration usability fixes and security-compliance improvements for integrations. The project health is highly stable, characterized by rapid issue triage and successful merge closures within a day of activity. The release of version `20260826.01` packages these essential user-facing improvements, particularly around model preference management and OAuth standard compliance.

---

### 2. Releases
*   **Version `20260826.01` (Released 2026-08-26)**
    *   **Changes:** This release contains critical bug fixes regarding provider model preferences and third-party MCP OAuth registrations (specifically Fastmail). 
    *   **Breaking Changes / Migration Notes:** No breaking changes are identified in the merged fixes; this is a standard patch release focused on backward compatibility, configuration persistence, and security alignment.

---

### 3. Project Progress
Two major pull requests were successfully closed/merged, advancing the project's configuration robustness and security standards:

*   **PR #1104: `fix(providers): allow replacing preferred models`** ([Link](https://github.com/moltis-org/moltis/pull/1104))
    *   **Impact:** Advanced the provider configuration UI/UX. Users can now cleanly preselect saved preferences and completely replace or clear a provider’s preferred models upon saving. This change is reinforced with robust backend and Playwright regression tests to prevent UI state desync.
*   **PR #1244: `Fix Fastmail MCP OAuth scope registration`** ([Link](https://github.com/moltis-org/moltis/pull/1244))
    *   **Impact:** Advanced the security and standards-compliance of the OAuth flow. It prioritizes protected-resource scopes over broader catalogs and correctly injects selected scopes into RFC 7591 dynamic client registration, backed by a Fastmail-shaped regression test.

---

### 4. Community Hot Topics
While comment and reaction counts are low (typical for internal technical fixes), the underlying user needs are highly pronounced:

*   **Issue #1094: De-Preferring Models (Closed)** ([Link](https://github.com/moltis-org/moltis/issues/1094))
    *   **Underlying Need:** Users required an intuitive method to manage, de-select, or completely clear saved model preferences for specific providers. The lack of a "clear all" or replacement mechanism caused configuration friction. This was resolved promptly by PR #1104.
*   **PR #1244: Fastmail MCP OAuth Scope Registration (Closed)** ([Link](https://github.com/moltis-org/moltis/pull/1244))
    *   **Underlying Need:** seamless local integration with provider APIs like Fastmail. Users needed strict adherence to modern OAuth standards (RFC 7591) to prevent scope mismatch errors during local authentication redirects.

---

### 5. Bugs & Stability
*   **Bug #1094: De-Preferring Models** (Status: **Closed** | Severity: Medium)
    *   *Symptom:* Users were unable to properly clear or replace existing preferred models in the provider settings dialog.
    *   *Resolution:* Fully resolved by PR #1104, implementing UI preselection, empty selection clearing, and comprehensive automated regression coverage.
*   **Fastmail MCP OAuth Scope Mismatch** (Status: **Closed/Fixed in PR #1244** | Severity: High for local MCP users)
    *   *Symptom:* Potential authentication failures or scope mismatches during Fastmail OAuth flows.
    *   *Resolution:* Corrected the OAuth discovery flow to prefer protected-resource scopes and correctly map them during dynamic client registration.

---

### 6. Feature Requests & Roadmap Signals
*   **Model Preference Management Robustness:** The transition of Issue #1094 to a feature-complete fix in PR #1104 signals a roadmap focus on polish and edge-case handling for multi-provider environments. Users can expect future updates to build on more resilient configuration profiles.
*   **Standards-First MCP Integrations:** The strict adherence to RFC 7591 and protected-resource scopes in PR #1244 indicates a roadmap priority on standards-compliant, secure local integrations. This signals that other MCP providers will likely see similar OAuth hardening in upcoming minor releases.

---

### 7. User Feedback Summary
*   **Pain Points:** Configuration clutter regarding saved model preferences (the inability to easily "start fresh" or switch model preferences for a provider) and OAuth scope inconsistencies with niche email providers (Fastmail).
*   **User Satisfaction:** High satisfaction regarding maintainer responsiveness. The bug report by user RokkuCode (#1094) and the rapid implementation of both fixes by developer `penso` showcase a highly responsive, professional maintenance cycle.

---

### 8. Backlog Watch
*   No long-dormant, critical open issues are present in the current 24-hour snapshot. The backlog remains highly disciplined, with all recently updated items successfully resolved and prepared for release `20260826.01`. Maintainers should continue monitoring the Playwright regression tests for provider preference states to ensure UI persistence across future major framework updates.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-27

---

## 1. Today's Overview

CoPaw is in **high-velocity development** ahead of the v2.2.0 release. In the last 24 hours, **45 PRs** were updated (28 merged/closed) and **33 issues** touched (15 closed), reflecting a focused stabilization sprint. The first v2.2.0 beta shipped today, introducing the **multi-tenant "QwenPaw Hub"** — a major architectural shift from personal assistant to team platform. Concurrently, the team is upgrading the bundled Python from 3.11 → 3.13 (OpenSSL 3.0.x → 3.5.x) to resolve TLS handshake failures on carrier networks, and investing heavily in test infrastructure (parallelized CI shards, +5–7 pp coverage gains). Bug density remains notable: several desktop regressions (missing `_qwenpaw_remote_backend`, installer file-locks, auto-scroll focus issues) and provider-level regressions (model discovery, output token caps) surfaced in beta and are being patched in real time.

---

## 2. Releases

### **v2.2.0-beta.1** — *Released today*
| Aspect | Details |
|--------|---------|
| **Headline** | First beta of the 2.2 line; introduces **QwenPaw Hub (multi-tenant edition)** |
| **Key Changes** | • Docs: updated scroll context manager blog ([#7300](https://github.com/agentscope-ai/QwenPaw/pull/7300))<br>• Fix: sanitize DashScope tool schemas for strict models ([#7284](https://github.com/agentscope-ai/QwenPaw/pull/7284))<br>• Test: targeted integration improvements (truncated in feed) |
| **Breaking Changes** | None documented in beta notes; Hub introduces new deployment model (multi-tenant) — migration path TBD |
| **Migration Notes** | • Hub will require separate deployment; existing single-user instances unaffected<br>• Python 3.13 upgrade (see PR [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328)) will change bundled runtime — test custom toolchains |
| **Links** | [Release tag](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.1) • [Issue #7318: Hub roadmap discussion](https://github.com/agentscope-ai/QwenPaw/issues/7318) |

---

## 3. Project Progress (Merged/Closed PRs — Last 24h)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) | **Test/E2E** | +23 console E2E cases, extended assertions; ~6–7 pp coverage gain | 🟢 Quality gate hardening |
| [#7325](https://github.com/agentscope-ai/QwenPaw/pull/7325) | **Test/Unit** | +382 vitest unit tests for console; +5.49 pp statement coverage | 🟢 Frontend regression safety |
| [#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292) | **Test/Unit** | +19 backend unit test files (1,148 tests); +5.02 pp coverage; fixed `/root` home-dir classification | 🟢 Backend reliability |
| [#7293](https://github.com/agentscope-ai/QwenPaw/pull/7293) | **CI** | Split integration tests into 3 parallel shards (p0/p1/p2) | 🟢 Faster feedback loop |
| [#7326](https://github.com/agentscope-ai/QwenPaw/pull/7326) | **CI** | Split nightly E2E into 3 parallel priority shards + fail-closed summary | 🟢 Nightly reliability |
| [#7250](https://github.com/agentscope-ai/QwenPaw/pull/7250) | **Fix/Script** | Fixed `scripts/run_tests.py` skipping suites & false-success reporting | 🟢 Local dev trust |
| [#7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) | **Fix/Workspace** | Cancellation-safe startup failure cleanup; no leaked services | 🟢 Stability |
| [#7190](https://github.com/agentscope-ai/QwenPaw/pull/7190) | **Feat/Data** | `qwenpaw-data` PyPI runtime, docker-compose GAAP demo, env inheritance fix | 🟢 Data layer operability |
| [#7284](https://github.com/agentscope-ai/QwenPaw/pull/7284) | **Fix/Provider** | Sanitize DashScope tool schemas for strict models | 🟢 Provider compat |
| [#7158](https://github.com/agentscope-ai/QwenPaw/pull/7158) | **Feat/Channel** | Configurable DingTalk group context modes (isolated ↔ shared) | 🟢 Enterprise channel flex |
| [#7212](https://github.com/agentscope-ai/QwenPaw/pull/7212) | **Fix/Image** | Graceful degradation when image pixel dims exceed provider limit | 🟢 UX resilience |
| [#7282](https://github.com/agentscope-ai/QwenPaw/pull/7282) | **Fix/UI** | Excessive vertical spacing in Markdown lists | 🟢 Polish |
| [#7206](https://github.com/agentscope-ai/QwenPaw/pull/7206) | **Fix/Context** | `/compact` pydantic ValidationError at `compact_threshold_ratio=0.9` | 🟢 Context mgmt regression |
| [#6810](https://github.com/agentscope-ai/QwenPaw/pull/6810) | **Fix/Installer** | Windows uninstall now kills processes locking install dir (browser extension NM host) | 🟢 Install reliability |
| [#6490](https://github.com/agentscope-ai/QwenPaw/pull/6490) | **Feat/Provider** | Added Volcengine Agent Plan & Xiaomi MiMo Standard API as built-in providers | 🟢 Provider ecosystem |
| [#6285](https://github.com/agentscope-ai/QwenPaw/pull/6285) | **Feat/Model** | Added `qwen3.8-max-preview` to Aliyun Token Plan model list | 🟢 Model freshness |

**Theme:** Test infrastructure overhaul (parallel CI, coverage push), installer/desktop stability fixes, provider/model catalog updates, and incremental UX polish — all converging on v2.2.0 readiness.

---

## 4. Community Hot Topics (Most Commented Issues/PRs)

| Item | Comments | Core Need / Signal |
|------|----------|-------------------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) **Bug: Agent stops mid-task after planning output** | 11 | **Critical UX regression**: Agent outputs "Now 2.1, 3.1, 3.2. Let me do all three." then halts silently; user must type "继续" to resume. Affects multi-step tasks on Windows 2.1beta2. |
| [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) **Bug: "Hide thinking" setting ignored on WeChat channel** | 6 | **Privacy/UX**: Reasoning tokens leak to end-users despite toggle off. Web deployment (`qwenpaw.platform.agentscope.io`). |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) **Discussion: QwenPaw Hub (multi-tenant) coming in 2.2 — what next?** | 5 | **Strategic pivot**: Community explicitly asked for team deployment (#2324, #5780, #6335, #4702). Hub is the answer; this issue crowdsources priority features (RBAC, admin console, per-user policies). |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) **Windows installer fails due to locked files (NSIS)** | 5 | **Install reliability**: Multiple `python.exe`/`DLL` locks block updates; fixed in [#7323](https://github.com/agentscope-ai/QwenPaw/pull/7323)/[#7336](https://github.com/agentscope-ai/QwenPaw/pull/7336). |
| [#7306](https://github.com/agentscope-ai/QwenPaw/issues/7306) **Bug: Input focus jumps down one line in tall composer** | 4 | **Desktop UX**: Focus drift on multi-line input (Win10); disrupts long-form prompting. |
| [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) **Enhancement: Mobile web deploy page UX** | 4 | **Mobile-first**: Deploy entry buried; stop button too close to primary actions on phone. |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) **OpenSSL 3.0.x TLS stack breaks on carrier DPI** | 3 | **Network compatibility**: Python 3.11/OpenSSL 3.0.x handshake resets; fix via Python 3.13 bump ([#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328)). |
| [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) **Bug: Agent memory search crosses sessions** | 3 | **Data isolation**: Auto-memory search pulls from *other* sessions of same agent — privacy/confusion risk. |
| [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) **Bug: v2.1.1b2 missing `_qwenpaw_remote_backend` — all tools broken** | 2 | **Desktop regression**: `ModuleNotFoundError` for bundled module; clean reinstall doesn't help. Blocking. |
| [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) **Feature: Prompt cache hit rate observability (81% vs OpenCode 96%)** | 2 | **Cost optimization**: No visibility into cache perf; 15 pp gap = direct $ impact. Labeled `good first issue`. |

**Underlying Themes:**
1. **Agent reliability** — silent halts, cross-session leakage, tool chain breaks
2. **Team/enterprise readiness** — Hub discussion aggregates 4+ year-old multi-user requests
3. **Desktop quality** — installer, focus, TLS, missing binaries
4. **Observability gap** — cache hit rates, thinking visibility, background task notifications

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Status | Fix PR / Notes |
|----------|-------|--------|----------------|
| 🔴 **Critical** | [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) `_qwenpaw_remote_backend` missing — all tools broken (v2.1.1b2, Win10) | Open | No PR yet; clean reinstall fails. Blocking desktop beta. |
| 🔴 **Critical** | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) Agent stops silently after planning output; requires manual "continue" | Open | 11 comments; no fix PR. Core loop regression. |
| 🟠 **High** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) OpenSSL 3.0.x TLS handshake resets on carrier DPI (desktop + Docker) | Open | **Fix PR [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328)**: bump Python 3.11→3.13 (OpenSSL 3.5.x) in desktop pipeline & Docker base. |
| 🟠 **High** | [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) Auto memory search crosses session boundaries | Open | Privacy/confusion; no fix PR. |
| 🟠 **High** | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) "Hide thinking" ignored on WeChat channel | Closed | Fixed? (Issue closed 2026-08-26) |
| 🟡 **Medium** | [#7306](https://github.com/agentscope-ai/QwenPaw/issues/7306) Input focus jumps down one line in multi-line composer (Win10) | Open | No PR. |
| 🟡 **Medium** | [#7321](https://github.com/agentscope-ai/QwenPaw/issues/7321) Tool call shows "executing" after completion/force-stop | Open | UI state desync. |
| 🟡 **Medium** | [#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324) Scheduled task success notifications missing for 1 of 3 agents | Open | Partial delivery. |
| 🟡 **Medium** | [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) OpenAI Responses multi-turn fails: "Referenced reasoning item not found" on stateless upstreams | Open | Provider compat; affects OpenCode Zen/Go, Muse Spark. |
| 🟢 **Low** | [#7282](https://github.com/agentscope-ai/QwenPaw/issues/7282) Markdown list excessive vertical spacing | Closed | Fixed in [#7282](https://github.com/agentscope-ai/QwenPaw/pull/7282). |
| 🟢 **Low** | [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339) Desktop: no setting to disable auto-scroll during streaming | Open | **Fix PR [#7340](https://github.com/agentscope-ai/QwenPaw/pull/7340)** open — adds chat scroll lock. |

**Stability Signal:** Two **critical desktop regressions** in v2.1.1 beta line (missing backend module, silent agent halt) suggest beta validation gaps. The TLS/Installer fixes are proactive and well-scoped.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for v2.2.x | Rationale |
|---------|--------|----------------------|-----------|
| **QwenPaw Hub — Multi-tenant / RBAC / Admin console** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) + [#2324](https://github.com/agentscope-ai/QwenPaw/issues/2324) + [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780) + [#6335](https://github.com/agentscope-ai/QwenPaw/issues/6335) + [#4702](https://github.com/agentscope-ai/QwenPaw/issues/4702) | 🟢 **High** — *v2.2.0 headline feature* | 4+ years of consolidated demand; Hub beta announced; discussion issue open for scope. |
| **Prompt cache hit rate observability & optimization** | [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) | 🟡 **Medium** — *v2.2.x or 2.3* | Labeled `good first issue`; documented 15 pp gap vs OpenCode; cost impact quantified. |
| **OpenViking-backed long-term memory backend** | [#7252](https://github.com/agentscope-ai/QwenPaw/issues/7252) | 🟡 **Medium** — *opt-in backend* | Uses existing `BaseMemoryManager`/`MemoryMiddleware`; author seeking direction before PR. |
| **MCP Streamable-HTTP dual-protocol client (2026-07-28 + legacy fallback)** | [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) | 🟢 **High

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw Project Digest (2026-08-27)

### 1. Today's Overview
ZeroClaw exhibits high development activity with 27 issues updated (21 open, 6 closed) and 50 PRs updated (46 open, 4 merged/closed) in the last 24 hours. No new releases were published today, indicating the project is in an active integration phase focused on resolving bugs, advancing RFCs, and refining infrastructure. The sustained engagement across issues and PRs suggests healthy maintainer responsiveness and community contribution momentum.

### 2. Releases
No new releases were published today.

### 3. Project Progress
Four PRs were merged/closed today, advancing key stability and documentation efforts:
- **[#10363](https://github.com/zeroclaw-labs/zeroclaw/pull/10363)**: Added Git channel to official artifacts (Docker, Nix, AUR, etc.), ensuring the Git channel is included in distribution builds.
- **[#10192](https://github.com/zeroclaw-labs/zeroclaw/pull/10192)**: Updated maintainer documentation to align risk review policies with RFC #9990, clarifying consequence-based risk labeling.
- **[#9725](https://github.com/zeroclaw-labs/zeroc

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*