# OpenClaw Ecosystem Digest 2026-09-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-02 02:02 UTC

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

# OpenClaw Project Digest — 2026-09-02

## 1. Today's Overview

OpenClaw shows **high activity** with 500 issues and 500 PRs updated in the past 24 hours. The project released **v2026.8.2** with Home agent dock improvements, though **multiple P1 regressions** stemming from the 2026.7.1-2 → 2026.8.1 upgrade path continue to surface. Community engagement remains robust, with several critical bugs (gateway crashes, SQLite contention, auth migration failures) driving active discussion. Maintainers are actively merging fixes across Telegram, Feishu, iOS, and web-UI components, but upgrade-related issues remain a significant pain point.

---

## 2. Releases

### v2026.8.2 — openclaw 2026.8.2
**Released:** 2026-09-02

**Highlights:**
- **Home agent dock:** Open Home in a right or bottom dock with `Cmd/Ctrl+Shift+H`, keeping current page in view
- **Work-context snapshot management:** Preview or remove work-context snapshots
- **Text attachment:** Attach selected text to messages directly from the dock

**Related Issue:** #133632 | **PR:** #133676

---

## 3. Project Progress

### Recently Merged/Closed PRs

| PR | Description | Size | Status |
|----|-------------|------|--------|
| #135203 | fix(cli): suggest config patch --file when shell strips JSON quotes | XS | Closed |
| #130993 | fix: Responses sessions compact before reaching context limit | XL | Closed |
| #134525 | fix(cron): create jobs with configured Codex app-server auth | L | Open |
| #135583 | fix: keep cloud sessions stopped and surface cleanup failures | XL | Open |
| #132180 | fix(nodes): reduce completion delays and clarify execution outcomes | XL | Open |

### Active Development (Open PRs with High Priority)

| PR | Description | Priority | Merge Risks |
|----|-------------|----------|------------|
| #134826 | fix(telegram): prioritize finals over CLI commentary | P1 | compatibility, message-delivery |
| #135791 | fix(plugins): preserve external payloads during doctor repair | — | — |
| #135730 | fix(feishu): apply group binding changes without restart | P2 | — |
| #119135 | feat: smart model tiering for cost optimization | P2 | compatibility, availability |
| #131590 | fix(cron): make one-shot terminal disables visible | P1 | compatibility |

**Key Focus Areas:** Telegram message delivery fixes, cron job visibility, plugin/doctor repair resilience, and cloud session management.

---

## 4. Community Hot Topics

### Most Active Issues (by Comment Count)

**#116201** — Realtime voice work can retain unbounded provider and consult state
- **Comments:** 59 | **Severity:** P1
- **URL:** https://github.com/openclaw/openclaw/issues/116201
- **Summary:** Realtime voice sessions retain superseded consult work and large provider frames under slow/stalled behavior
- **Underlying Need:** Resource management and session state cleanup for real-time voice interactions

**#112423** — Large SQLite transcript cleanup blocks the gateway event loop
- **Comments:** 16 | **Severity:** P1
- **URL:** https://github.com/openclaw/openclaw/issues/112423
- **Summary:** Archiving large SQLite-backed transcripts performs blocking I/O on the gateway thread
- **Underlying Need:** Async/off-thread transcript archiving to prevent event-loop stalls

**#96834** — WhatsApp 1:1 inbound image wedges main lane ~3min before processing
- **Comments:** 14 | **Severity:** P1
- **URL:** https://github.com/openclaw/openclaw/issues/96834
- **Summary:** Multimodal image processing causes 3-minute delays on WhatsApp direct messages
- **Underlying Need:** Faster multimodal injection and processing pipeline

**#69208** — Umbrella: duplicate transcript, replay, and context assembly across channels
- **Comments:** 14 | **Severity:** P1
- **URL:** https://github.com/openclaw/openclaw/issues/69208
- **Summary:** Broader class of duplicate transcript/replay bugs across MSTeams, webchat, Telegram, and delivery paths
- **Underlying Need:** Unified transcript handling architecture

---

## 5. Bugs & Stability

### Critical P1 Bugs (Active)

| Issue | Title | Severity | Impact | Fix PR? |
|-------|-------|----------|--------|---------|
| #135171 | 2026.8.1/2 gateway crash-loop: bundled Perplexity requires capability consent | P0 | Crash-loop | No |
| #134353 | Xiaomi provider empty install payload after upgrade; Gateway refuses to start | P1 | Gateway unstartable | #135791 |
| #135347 | Forced memory reindex inflates shared agent DB to 35GB | P1 | Data loss, session destruction | No |
| #133984 | 2026.7.1-2 → 2026.8.1 leaves Gateway unstartable | P1 | Gateway unstartable | No |
| #134608 | Auth migration archives JSON without credentials, blocking repair | P1 | Auth failure | No |
| #115424 | Gateway V8 heap OOM during main-session turn; crash-loop recovery | P1 | Crash-loop, session-state | No |
| #117262 | SQLite contention: 3 concurrent write handles cause ~33s event-loop stalls | P1 | Event-loop stalls | No |
| #97616 | OpenClaw leaks unreaped hook/tool child processes, zombie accumulation | P1 | Runtime degradation | No |

### Regressions Reported

- **#135171:** Perplexity capability consent regression in v2026.8.1/2
- **#134453:** Windows doctor --fix aborts with bare file not found
- **#134331:** Doctor reports legacy workspace conflicts on every run, dead-lettering Discord messages
- **#87407:** Anthropic provider UND_ERR_SOCKET failures trigger silent mid-turn fallback

### Notable Stability Issues

| Issue | Platform | Severity | Summary |
|-------|----------|----------|---------|
| #134925 | ARM64/Pi | P1 | Gateway main thread hits ~100% CPU on every agent turn |
| #115546 | CLI | P1 | CLI-budget compaction timeout fires far below deadline (4.9s–50s), 100% failure on large sessions |

---

## 6. Feature Requests & Roadmap Signals

### High-Impact Feature Requests

**#53763** — Built-in headless browser for reliable web access without external dependencies
- **Comments:** 12 | **Priority:** P3
- **URL:** https://github.com/openclaw/openclaw/issues/53763
- **Proposal:** Bundle headless Chromium as first-class OpenClaw tool for JS-rendered and login-required pages
- **Roadmap Signal:** 🔴 High community demand; removes fragile three-layer external dependency

**#66252** — Per-Agent TTS/STT Configuration Overrides for Multi-Language Support
- **Comments:** 8 | **Priority:** P3
- **URL:** https://github.com/openclaw/openclaw/issues/66252
- **Proposal:** Agent-specific TTS/STT configuration for different voices, languages, providers
- **Roadmap Signal:** 🟡 Enables multi-lingual/multi-voice deployments

**#13219** — Per-model usage logging for cost tracking
- **Comments:** 8 | **Priority:** P2
- **URL:** https://github.com/openclaw/openclaw/issues/13219
- **Proposal:** Native per-model usage logging and aggregated cost tracking
- **Roadmap Signal:** 🟡 Critical for multi-model deployments and cost optimization

**#44309** — One-way dispatch mode for A2A handoffs without reply-back ping-pong
- **Comments:** 9 | **Priority:** P2
- **URL:** https://github.com/openclaw/openclaw/issues/44309
- **Proposal:** Dispatch-only/handoff mode dropping tasks without reply-back
- **Roadmap Signal:** 🟡 Improves agent-to-agent efficiency

**#10687** — Fully dynamic model discovery (OpenRouter + beyond)
- **Comments:** 9 | **Priority:** P3
- **URL:** https://github.com/openclaw/openclaw/issues/10687
- **Proposal:** Dynamic model catalog for fast-moving provider catalogs
- **Roadmap Signal:** 🔴 Essential for OpenRouter users with rapidly changing model availability

**#119135** — Smart model tiering for cost optimization
- **Comments:** 0 | **Priority:** P2 | **PR Open**
- **URL:** https://github.com/openclaw/openclaw/issues/119135
- **Proposal:** Route simple requests to cheaper models, keep primary for complex work
- **Roadmap Signal:** 🟢 Active development — likely in next release

---

## 7. User Feedback Summary

### Pain Points

1. **Upgrade Path Fragility** — Multiple users report gateway unstartable after 2026.7.1-2 → 2026.8.1 upgrades (#133984, #134353, #134608). The `openclaw doctor --fix` command frequently fails to resolve upgrade-induced issues.

2. **Performance on Resource-Constrained Hardware** — ARM64/Raspberry Pi users report 100% CPU on every agent turn (#134925). Large session handling causes CLI-budget compaction timeouts at 4.9s–50s instead of configured 180s deadline (#115546).

3. **Message Loss & Silent Failures** — Telegram network-failed outbound sends dead-lettered after single attempt (#125764). WhatsApp image processing wedges for ~3 minutes before any processing (#96834). Subagent yield results never delivered (#124343).

4. **SQLite Event-Loop Stalls** — Gateway event-loop stalls of ~33 seconds caused by SQLite lock contention (#117262). Large transcript archiving blocks gateway thread (#112423).

5. **OAuth Token Refresh Issues** — MiniMax Portal OAuth tokens cannot auto-refresh (#77467), requiring manual re-authentication every ~2 hours.

### Positive Signals

- **#37634** (Closed) — Sandboxed workspace write access fix received 8 👍 reactions
- Community actively contributing PRs across multiple channels (Telegram, Feishu, Slack, iOS)
- Apple Watch spoken reply timeout explanation fix (#135765) addresses UX clarity

---

## 8. Backlog Watch

### Long-Standing Issues Needing Maintainer Attention

| Issue | Title | Age | Comments | Status | Blockers |
|-------|-------|-----|----------|--------|----------|
| #69208 | Duplicate transcript, replay, context assembly across channels | ~5 months | 14 | OPEN | Needs product decision |
| #53763 | Built-in headless browser | ~6 months | 12 | OPEN | Needs product decision |
| #44309 | One-way dispatch mode for A2A | ~6 months | 9 | OPEN | Needs product decision |
| #10687 | Dynamic model discovery | ~7 months | 9 | OPEN | Needs product decision |
| #66252 | Per-agent TTS/STT overrides | ~5 months | 8 | OPEN | Needs product decision |
| #13219 | Per-model usage logging | ~6 months | 8 | OPEN | Needs product decision |
| #37634 | Sandbox workspace write access | ~6 months | 9 | CLOSED | — |

### Issues with No Fix PR (High Severity)

- **#116201** (59 comments) — Realtime voice unbounded state — needs fix PR
- **#112423** (16 comments) — SQLite transcript blocking — needs fix PR
- **#135347** (7 comments) — Memory reindex DB inflation — needs fix PR
- **#115424** (7 comments) — V8 heap OOM crash-loop — needs fix PR
- **#117262** (6 comments) — SQLite contention stalls — needs fix PR
- **#77467** (5 comments) — MiniMax OAuth refresh not implemented — needs fix PR

### Security-Sensitive Issues

- **#37634** — Sandbox workspace write access (Closed, needs security review tag)
- **#134608** — Auth migration archives credentials incorrectly

---

*Digest generated from OpenClaw GitHub data for 2026-09-02*

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – AI Agent / Personal Assistant OSS Ecosystem (2026‑09‑02)**  

---

### 1. Ecosystem Overview  
The open‑source AI‑agent landscape is bifurcated between a few large, rapidly iterating codebases (e.g., OpenClaw, ZeroClaw, Hermes Agent) that drive feature experimentation and a long tail of smaller projects focused on stability, niche integrations, or maintenance‑only work. Common pain points centre on upgrade fragility, resource‑constrained performance, and state‑management reliability, while the community converges on demands for dynamic model discovery, unified file‑attachment handling, sandbox‑level security, and cross‑platform UI parity. Overall activity remains healthy, but the distribution of effort shows a clear concentration of innovation in a handful of hubs versus many sustaining‑effort forks.

---

### 2. Activity Comparison  

| Project | Issues (24 h) | PRs (24 h) | Latest Release (date/ver.) | Health Score\* |
|---------|---------------|-----------|----------------------------|----------------|
| **OpenClaw** | 500 | 500 | v2026.8.2 – 2026‑09‑02 | 3.5 |
| **NanoBot** | 6 (4 o/2 c) | 19 (10 o/9 c/m) | – | 3.0 |
| **Hermes Agent** | 50 | 50 | – | 2.8 |
| **PicoClaw** | 3 | 5 | – | 2.0 |
| **NanoClaw** | 2 | 13 (merged/opened) | – | 2.5 |
| **NullClaw** | 0 | 0 | – | 1.0 |
| **IronClaw** | 14 | 19 | – | 3.0 |
| **LobsterAI** | – | – | – | 1.5* |
| **TinyClaw** | 0 | 0 | – | 1.0 |
| **Moltis** | – | – | – | 1.0* |
| **CoPaw** | 34 | 34 | v2.2.0‑beta.6 – 2026‑09‑02 | 3.5 |
| **ZeptoClaw** | 0 | 2 (dep‑bump) | – | 2.0 |
| **ZeroClaw** | 31 | 50 | – | 3.0 |

\*Health Score is a qualitative 1‑5 assessment (5 = very active, stable, frequent releases, low critical‑bug backlog; 1 =  dormant/no activity). Scores blend issue/PR volume, release cadence, and severity of open bugs noted in each digest.

---

### 3. OpenClaw’s Position  

| Dimension | Observation vs. Peers |
|-----------|-----------------------|
| **Community Size** | By far the largest contributor base – 500 issues + 500 PRs updated in a single day dwarf the next‑largest (ZeroClaw ≈ 80 total updates). Indicates a mature, widely adopted core. |
| **Technical Approach** | Monolithic “core reference” with tightly coupled Home‑agent dock, work‑context snapshots, and extensive channel integrations (Telegram, Feishu, iOS, web‑UI). Contrasts with more modular designs (e.g., ZeroClaw’s RFC‑driven runtime‑owned sessions, NanoBot’s AgentLoop refactor). |
| **Release Cadence** | Regular point releases (v2026.8.2) despite a high regression burden; most peers either ship only beta/nightly (CoPaw) or have stalled releases. |
| **Strengths** | Rich feature set (dock UI, text‑attachment, work‑context snapshots), broad channel coverage, strong CI/CD infrastructure enabling rapid PR turnover. |
| **Weaknesses** | Upgrade‑path fragility (multiple P1 gateway‑unstartable bugs), SQLite event‑loop stalls, high‑CPU on ARM64, and a backlog of critical P1 bugs lacking fix PRs. |
| **Differentiation** | Focuses on an all‑in‑one desktop‑centric assistant with deep OS‑level integration, whereas many peers target embeddable agent cores or specific channel‑centric bots. |

---

### 4. Shared Technical Focus Areas (Cross‑Project Needs)  

| Need | Projects Highlighting It | Concrete Signals |
|------|--------------------------|------------------|
| **Upgrade / Migration Robustness** | OpenClaw, CoPaw, Hermes Agent | OpenClaw: gateway unstartable after 2026.7→8 upgrade; CoPaw: ReMe index rebuild 500 error; Hermes: session‑state restore failures. |
| **SQLite / DB Concurrency & Async I/O** | OpenClaw, Hermes Agent, ZeroClaw | OpenClaw: #112423 (blocking transcript archive), #117262 (33 s stalls); Hermes: #98077 (WAL corruption); ZeroClaw: RFC #6996 (granular sandbox policy touches DB). |
| **Realtime Voice / Transcript State Cleanup** | OpenClaw, NanoBot | OpenClaw: #116201 (unbounded provider/consult state); NanoBot: Dream‑prompt duplication & agent‑loop refactor to curb stale state. |
| **Unified File / Attachment Architecture** | OpenClaw, ZeroClaw, NanoClaw | OpenClaw: text‑attachment from dock; ZeroClaw: RFC #9488 (unified file/attachment); NanoClaw: provider‑contract work enabling remote MCP tools. |
| **Dynamic Model Discovery / Catalog** | OpenClaw, Hermes Agent, ZeroClaw | OpenClaw: #10687 (dynamic model discovery); Hermes: #66616 (skills index freshness); ZeroClaw: RFC #10076 (composable WASM plugin runtime). |
| **Headless Browser / JS‑Rendered Access** | OpenClaw, NanoBot | OpenClaw: #53763 (built‑in headless Chromium); NanoBot: no direct request but similar need for reliable web access in MCP tools. |
| **Per‑Agent TTS/STT & Multi‑Language** | OpenClaw, Hermes Agent | OpenClaw: #66252 (per‑agent TTS/STT overrides); Hermes: desire for multi‑lang support implicit in session‑scope unification (#100794). |
| **Cost‑Optimized Model Tiering** | OpenClaw, Hermes Agent, CoPaw | OpenClaw: #119135 (smart model tiering); Hermes: zero‑TTL lazy MCP startup (#100816) aims to reduce waste; CoPaw: memory‑index rebuild cost concerns. |
| **Security Sandboxing & Policy Granularity** | OpenClaw, ZeroClaw, IronClaw | OpenClaw: sandboxed workspace write‑access (#37634); ZeroClaw: RFC #6996 (granular sandbox); IronClaw: rootless‑Docker workspace UID/GID issue. |
| **Cross‑Platform UI Parity (Desktop ↔ Web ↔ Gateway)** | Hermes Agent, IronClaw, CoPaw | Hermes: #89995 (bot‑mode group chats in web/gateway); IronClaw: WebUI design‑system migration; CoPaw: console UX enhancements & memory‑index rebuild UI. |
| **Session Persistence & State Restoration** | Hermes Agent, ZeroClaw, CoPaw | Hermes: #93888 (desktop session restore); ZeroClaw: RFC #9487 (runtime‑owned conversation sessions); CoPaw: ReMe index rebuild & memory‑system proposals. |
| **Plugin / Doctor Resilience** | OpenClaw, NanoBot | OpenClaw: doctor --fix failures post‑upgrade; NanoBot: agent‑loop lifecycle refactors & background‑task failure reporting. |
| **Transparent Cost / Usage Logging** | OpenClaw, Hermes Agent | OpenClaw: #13219 (per‑model usage logging); Hermes: implicit need in cost‑optimization tiering. |

---

### 5. Differentiation Analysis  

| Axis | OpenClaw | ZeroClaw | Hermes Agent | NanoBot | CoPaw |
|------|----------|----------|--------------|---------|-------|
| **Primary Target** | End‑user desktop assistant with deep OS integration | Platform‑level runtime for composable agents & WASM plugins | Multi‑modal conversational agent with strong session & skill index focus | Lightweight embeddable agent core (TUI/WebSocket/Telegram) | Desktop‑first assistant with memory‑index (ReMe) focus |
| **Architecture** | Monolithic core + extensive channel plugins | Micro‑service‑style runtime (session‑owned, plugin‑first) | Modular (gateway, agent, skill index) with clear separation of concerns | AgentLoop‑centric, minimal runtime, emphasis on ephemeral context | Hybrid (desktop UI + bundled memory engine) |
| **Feature Maturity** | Broad but plagued by upgrade regressions | Early‑stage RFCs; high innovation, low released features | Mid‑stable; active bug‑fixing, occasional releases | Stabilizing; frequent bug‑fix PRs, no releases | Beta cycle; frequent fixes, limited public releases |
| **Community Engagement** | Very high (500 + updates/day) | High (30‑50 updates/day) | Moderate‑high (≈ 100 updates/day) | Low‑moderate (≈ 25 updates/day) | Moderate (≈ 70 updates/day) |
| **Key Differentiator** | All‑in‑one dock UI + work‑context snapshots | Runtime‑owned conversation sessions & WASM plugin runtime | Skill‑index freshness & cross‑platform session parity | AgentLoop lifecycle & ephemeral runtime‑context | ReMe memory engine + console UX polish |

---

### 6. Community Momentum & Maturity  

| Activity Tier | Projects (representative) | Characteristics |
|---------------|---------------------------|-----------------|
| **Rapid Iteration / High Momentum** | OpenClaw, ZeroClaw, Hermes Agent, IronClaw | Hundreds of weekly issues/PRs, frequent refactors, active RFCs, ongoing release pushes despite bug backlog. |
| **Stabilizing / Maintenance‑Heavy** | NanoBot, NanoClaw, CoPaw, ZeptoClaw | Steady PR flow, focus on bug fixes and dependency bumps; few or no feature releases; health scores 2.5‑3.5. |
| **Low Activity / Dormant** | NullClaw, TinyClaw, Moltis, LobsterAI (inferred) | No or negligible updates in the last 24 h; no releases; health ≤ 1.5. |

OpenClaw and ZeroClaw sit at the top of the iteration tier, driven by large contributor bases and ambitious roadmap RFCs. Hermes Agent and IronClaw show strong momentum but are more focused on internal correctness (session state, performance). NanoBot and NanoClaw illustrate a “healthy maintenance” cadence — regular bug fixing without major feature bursts. The long tail remains largely inactive, suggesting either project completion, abandonment

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-02

## 1. Today's Overview

NanoBot (HKUDS/nanobot) showed a busy but steady 24-hour cycle with 6 updated issues (4 open, 2 closed) and 19 updated pull requests (10 open, 9 closed/merged). No new releases were published. Activity is dominated by **AgentLoop lifecycle refactors**, **ephemeral runtime-context support**, and a cluster of **bug fixes across WebUI, TUI, WebSocket, Dream consolidation, and channel integrations** — indicating a stabilization push rather than headline feature work. The PR throughput (9 closed in a day) is healthy and suggests maintainers are triaging aggressively, while no release was cut, consistent with batching changes for a future tag.

## 2. Releases

No new releases in the last 24 hours. No release notes to report.

## 3. Project Progress

Nine PRs were closed/merged today, spanning correctness fixes, refactors, and one invalid PR:

- **[#5617](https://github.com/HKUDS/nanobot/pull/5617) — fix(websocket): stop treating SO_ACCEPTCONN as portable (p1, merged)**  
  Corrects a regression in the WebSocket listener health probe by removing reliance on the non-portable `SO_ACCEPTCONN` socket option (broke on macOS/BSDs). Marked **p1**.

- **[#5430](https://github.com/HKUDS/nanobot/pull/5430) — fix(agent): release completed task groups**  
  Removes empty `_active_tasks` session entries when their dispatch tasks complete; covers single-task, multi-task, and replacement-group lifecycles.

- **[#5623](https://github.com/HKUDS/nanobot/pull/5623) — fix(agent): drop empty active-task groups after tasks finish (p2)** *(related to #5428)*  
  Separate, overlapping fix for the same `_active_tasks` retention bug. Worth noting both PRs landed within hours of each other — review overlap may be needed.

- **[#5621](https://github.com/HKUDS/nanobot/pull/5621) — fix(tui): preserve input typed after submit (p2)**  
  Seals deferred submissions so post-submit typing becomes the next draft instead of being silently merged and cleared. Test suite green (163 passing).

- **[#5622](https://github.com/HKUDS/nanobot/pull/5622) — fix(dream): stop duplicating SOUL/USER/MEMORY into the Dream prompt (p2)**  
  Eliminates a double-include of context files in `MemoryStore.build_dream_prompt()` — relevant cost/quality win for the Dream consolidation flow.

- **[#5604](https://github.com/HKUDS/nanobot/pull/5604) — docs(edit_file): state that match selectors are mutually exclusive (p2)**  
  Pure doc correction: occurrence/line_hint/replace_all are runtime-exclusive, but docs implied they could be combined.

- **[#5569](https://github.com/HKUDS/nanobot/pull/5569) — refactor(agent): extract tool execution boundary (p2)**  
  Moves tool-call prep, batching, error observation, and safety classification out of `AgentRunner` into a functional boundary — reduces runner responsibilities.

- **[#5603](https://github.com/HKUDS/nanobot/pull/5603) — Detect a turn that claims an action it never performed (#1697) — closed as [invalid]**  
  Closed without merge: maintainers concluded the proposed detection heuristic was not the right framing. Issue #1697 remains open.

- **[#5615](https://github.com/HKUDS/nanobot/pull/5615) and [#5619](https://github.com/HKUDS/nanobot/pull/5619) — ephemeral runtime-context support**  
  Both PRs targeting issue [#5586](https://github.com/HKUDS/nanobot/issues/5586) closed without merge; a third attempt — [#5627](https://github.com/HKUDS/nanobot/pull/5627) — is now open. Indicates the design for ephemeral blocks is still being negotiated.

## 4. Community Hot Topics

The most-commented and most-strategic items today:

- **[#2061 — Bug: Unable to Copy File Inside Workspace](https://github.com/HKUDS/nanobot/issues/2061)** (3 comments, open since 2026-03-15)  
  A long-standing, lightly-trafficked but unresolved bug where the agent loops on `list_dir`/`read_file` without ever calling a write/copy tool. Directly motivates PR [#5626](https://github.com/HKUDS/nanobot/pull/5626) below.

- **[#5251 — Feature: Add MCP Apps host support to the WebUI](https://github.com/HKUDS/nanobot/issues/5251)** (3 comments, open since 2026-08-05)  
  Asks for the official MCP Apps extension (`io.modelcontextprotocol/ui`) so MCP servers can attach interactive UIs. Underlying need: nanobot's MCP client currently treats results as text/images only — limiting server-side UI affordances.

- **[#1697 — Agent claims an action it never performed](https://github.com/HKUDS/nanobot/issues/1697)** (transcript evidence, still open after PR #5603 closed as invalid)  
  High-quality bug report: agent announces a query three times with zero tool calls. Maintainers rejected the proposed detector but the underlying behavior — silent no-op turns masquerading as healthy — remains unaddressed.

- **[#5428 / #5493 / #5586 — closed/reopened hotbed of agent-loop and runtime-context design](https://github.com/HKUDS/nanobot/issues/5428)**  
  Active thread-of-the-day: how `AgentLoop._active_tasks` should be cleaned up and whether runtime-context blocks should be opt-out (`ephemeral`).

**Underlying needs:** better filesystem primitives, richer MCP UI integration, runtime-context lifecycle control, and observability for "fake-progress" turns.

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|---|---|---|---|
| **High (p1)** | [WebSocket listener health probe uses non-portable SO_ACCEPTCONN, breaks on macOS/BSDs](https://github.com/HKUDS/nanobot/pull/5617) | Fixed (merged today) | #5617 |
| **Medium (p2)** | [Dream prompt duplicates SOUL/USER/MEMORY contents](https://github.com/HKUDS/nanobot/pull/5622) | Fixed (closed today) | #5622 |
| **Medium (p2)** | [TUI discards input typed after submit](https://github.com/HKUDS/nanobot/pull/5621) | Fixed (closed today) | #5621 |
| **Medium (p2)** | [WebUI cannot delete a pane before its first message is persisted](https://github.com/HKUDS/nanobot/pull/5624) | Open — fix PR ready | [#5624](https://github.com/HKUDS/nanobot/pull/5624) |
| **Medium (p2)** | [edit_file selector docs imply selectors can be combined](https://github.com/HKUDS/nanobot/pull/5604) | Fixed (docs only) | #5604 |
| **Medium** | [AgentLoop retains empty active-task groups after session tasks finish](https://github.com/HKUDS/nanobot/issues/5428) | Issue closed; **two competing fix PRs (#5430, #5623) both landed today** — risk of duplicate work / merge conflict, needs maintainer coordination |
| **Medium** | [Background task failures not reported (lost exceptions, no traceback)](https://github.com/HKUDS/nanobot/pull/5431) | Open — fix PR ready, still unmerged | [#5431](https://github.com/HKUDS/nanobot/pull/5431) |
| **Low** | [Cannot copy a file inside the workspace — agent loops without writing](https://github.com/HKUDS/nanobot/issues/2061) | Open since 2026-03-15; PR [#5626](https://github.com/HKUDS/nanobot/pull/5626) now open | [#5626](https://github.com/HKUDS/nanobot/pull/5626) |

**Note:** No crashes or data-loss reports today. The single p1 item is regression-class and was fixed same-day. The duplicate fix paths for #5428 are the main triage risk.

## 6. Feature Requests & Roadmap Signals

- **Ephemeral runtime-context blocks** — [#5586](https://github.com/HKUDS/nanobot/issues/5586); two earlier PRs (#5615, #5619) closed; [#5627](https://github.com/HKUDS/nanobot/pull/5627) now open. **High likelihood** of landing in the next release if #5627 is accepted.
- **`copy_file` / `move_file` filesystem tools** — [#5626](https://github.com/HKUDS/nanobot/pull/5626). Fills a real gap (today only read/write/edit/list exist). **Likely** in next release.
- **Per-session sandbox isolation for non-WebUI channels** — [#5283](https://github.com/HKUDS/nanobot/pull/5283). Opt-in `per_session_sandbox` mode. Security-flavored; **likely**.
- **WebUI first-run AI setup guide** — [#5625](https://github.com/HKUDS/nanobot/pull/5625). Replaces fresh-install error state with a setup flow. UX win; **likely**.
- **Telegram streaming rich messages** — [#5614](https://github.com/HKUDS/nanobot/pull/5614). Author flagged it as draft + to be reviewed this week. **Possible**, pending author self-review.
- **Cron result routing to configurable channels + batch archive** — [#5513](https://github.com/HKUDS/nanobot/issues/5513). Operational-use motivation; **plausible for next release**.
- **HTML/Markdown/TXT preview in chat channels** — [#5493](https://github.com/HKUDS/nanobot/issues/5493). Suggestion uses sandboxed iframe `srcdoc`. **Mid-term** — useful but not imminent.
- **MCP Apps (UI) host support in WebUI** — [#5251](https://github.com/HKUDS/nanobot/issues/5251). Ecosystem-driven; **roadmap candidate**, depends on MCP spec stabilization.

**Most probable next-release themes:** ephemeral runtime context, `copy_file`/`move_file`, per-session sandbox, WebUI onboarding.

## 7. User Feedback Summary

- **Pain: agent stalls silently on filesystem operations.** Issue #2061 describes a Feishu conversation where the agent appeared to work but never actually copied the file. Concrete user dissatisfaction, multi-month unresolved.
- **Pain: agent claims progress without acting.** Issue #1697 shows the model saying "查询中…结果即将返回" three times with no tool calls — a trust/UX problem, not a correctness bug.
- **Pain: shared chat pollutes operational output.** #5513 explicitly says cron/health-check noise mixes into personal conversations — operators want channel routing.
- **Pain: ambiguous tooling contracts.** #5604 (docs) revealed users were *combining* mutually exclusive `edit_file` selectors and failing — signals the tool API needs clearer contract documentation.
- **Satisfaction signal:** solid PR throughput (9 closed/day) and same-day fixes for a p1 regression (#5617) suggest responsive maintenance, especially for the TUI/Dream/WebSocket surface.
- **Use cases observed:** multi-channel ops (Feishu, Telegram, WebSocket), long-running gateways, Dream-style memory consolidation, WebUI onboarding for new users, cross-session workspace sandboxing.

## 8. Backlog Watch

Items that deserve maintainer attention but have low recent comment traffic or are at risk of being lost:

- **[#2061 — Unable to Copy File Inside Workspace](https://github.com/HKUDS/nanobot/issues/2061)**  
  Open since **2026-03-15 (~5.5 months)**. 0 reactions. Now has a ready fix PR [#5626](https://github.com/HKUDS/nanobot/pull/5626) — needs review and merge.

- **[#5431 — fix(agent): report background task failures](https://github.com/HKUDS/nanobot/pull/5431)**  
  Open since 2026-08-18. A real stability fix (lost exceptions + traceback logging) sitting unmerged while a related/overlapping fix (#5430) already merged today. Maintainers should reconcile both.

- **[#5614 — Telegram streaming rich messages](https://github.com/HKUDS/nanobot/pull/5614)**  
  Author explicitly says they haven't reviewed and is running a personal fork on top for testing. Needs a maintainer reviewer to break the deadlock.

- **[#2078 — Zalo integration refactor](https://github.com/HKUDS/nanobot/pull/2078)**  
  Open since **2026-03-16 (~5.5 months)**. Refactor of Zalo channel against the nightly plugin architecture; low activity, needs a maintainer to pick it up or close it.

- **[#1697 — Agent announces actions without performing them](https://github.com/HKUDS/nanobot/issues/1697)**  
  Still open after PR #5603 closed as invalid. The *behavior* is real; only the proposed detection heuristic was rejected. Maintainers should weigh in with direction (e.g., tool-call invariants) so contributors don't churn on the same problem.

- **Duplicate active-task-group fixes (#5430 merged, #5623 just landed)**  
  Both target [#5428](https://github.com/HKUDS/nanobot/issues/5428). One is now in main; the other needs a maintainer decision (close as duplicate, or rebase and supersede).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑09‑02)**  

---

### 1. Today’s Overview  
The Hermes Agent repository is in a highly active state: **50 issues** and **50 pull requests** were updated in the last 24 hours, with 44 open/active issues and 49 open PRs. No new releases were published. The bulk of activity centers on bug‑fixes, session‑state stability, and incremental UI/feature refinements, indicating a strong focus on reliability and developer experience rather than major version bumps.

---

### 2. Releases  
**None** – the project is on a rolling release cadence; the latest version remains 0.21.0 (as of the PR activity).

---

### 3. Project Progress  
- **Merged / Closed PRs (today):** 4 PRs were closed/merged, most notably **#94906** (Windows stdio MCP client timeout) and **#100708** (Matrix gateway missing m.replace edits).  
- **Open PRs:** 49 PRs remain open, many addressing narrow‑scope bugs (e.g., #100816 – zero TTL disabling lazy MCP startup) or adding modest UI/feature toggles (e.g., #100702 – compact chat setting).  
- **Feature Advancement:** Several PRs target long‑standing UI/UX pain points (desktop compact chat, bot‑mode group‑chat exposure) and are likely slated for the next minor release.

---

### 4. Community Hot Topics  
| Issue / PR | Comments | 👍 | Link | Core Need |
|------------|----------|----|------|-----------|
| **#66616** – Skills index stale/degraded | 138 | 0 | <https://github.com/nousresearch/hermes-agent/issues/66616> | Automated index freshness; current cron (6/18 UTC) misses the 26 h freshness window. |
| **#93888** – Desktop session‑state restore failure | 19 | 0 | <https://github.com/nousresearch/hermes-agent/issues/93888> | Users cannot resume sessions after a desktop‑to‑gateway hand‑off; risk of permanent “Restore failed” state. |
| **#97681** – Bot group chats break after desktop close | 18 | 0 | <https://github.com/nousresearch/hermes-agent/issues/97681> | Need for persistent bot‑group state across app restarts. |
| **#89995** – Expose bot‑mode group chats in web dashboard & gateway | 16 | 2 | <https://github.com/nousresearch/hermes-agent/issues/89995> | Desktop‑only limitation; users request web/gateway parity. |
| **#98077** – SQLite WAL cross‑B‑tree corruption (state.db) | 6 | 0 | <https://github.com/nousresearch/hermes-agent/issues/98077> | Production‑critical DB integrity issue under concurrent access. |

*Analysis:* The most vocal community concerns revolve around **session persistence**, **index freshness**, and **UI consistency** (desktop vs. web/gateway). These are high‑visibility bugs that affect daily usability and trust in the platform.

---

### 5. Bugs & Stability (ranked by severity)  

| Severity | Issue | Summary | Fix PR (if any) |
|----------|-------|---------|-----------------|
| **P1** | **#98077** – SQLite WAL cross‑B‑tree corruption (state.db) | Physical DB corruption under WAL mode with multiple processes; can cause FTS and structural damage. | No dedicated fix yet; requires low‑level DB handling changes. |
| **P1** | **#97948** – `/compress` 120 s timeout despite background success | UI reports timeout while background worker eventually succeeds, leading to “lease lost” errors on large sessions. | No PR yet; may need timeout/retry logic. |
| **P1** | **#93918** – `/refine` always prompts “Nothing to refine yet” | Command never reaches live agent; users cannot self‑review or auto‑refine. | No fix PR; likely a routing bug. |
| **P2** | **#89166** – Cross‑process session lease wait floods gateways every 15 s | Starves final delivery; status messages repeatedly update, harming UX. | No PR; needs smarter lease management. |
| **P2** | **#82052** – xAI 403 non‑retryable → long‑lived workers never refresh expired OAuth token | Permission errors block all subsequent turns until process restart. | No PR; requires token refresh logic. |
| **P2** | **#99270** – MCP client wraps array elements as `{item: …}` breaking array‑typed arguments | Breaks any tool that expects plain arrays (handlerIds, ids, etc.). | **#100816** (fix: zero TTL disables lazy MCP startup) indirectly addresses cache‑lookup failures that exacerbate this bug. |
| **P2** | **#100788** – `load_transcript()` swallows DB errors, returning `[]` on corrupt state.db | Silent loss of conversation history; users think data is gone. | No PR; needs proper error distinction. |
| **P2** | **#72280** – Shared‑session restart treats empty attribution as new message | Recovery logic misinterprets empty text, prompting unnecessary follow‑up. | No PR. |
| **P3** | **#66616** – Skills index stale (29.8 h old) | Automated freshness probe fails; index out‑of‑date. | No PR yet; cron schedule may need adjustment. |
| **P3** | **#25065** – `HASS_TOKEN` forces Home Assistant platform even when disabled in config | Overrides user‑specified `platforms.homeassistant.enabled: false`. | No PR; config handling bug. |
| **P3** | **#80946** – Windows local file paths show “Invalid external URL” in artifacts panel | UI cannot open local file URIs. | No PR; UI/path parsing issue. |

*Takeaway:* The most critical stability bugs involve **database integrity** (#98077) and **session‑state handling** (#97948, #93918, #89166). Several of these have related PRs that address peripheral symptoms but not the root cause.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Issue/PR | Insight |
|---------|----------|---------|
| **Bot Group Chats in Web Dashboard & Gateway** | #89995 (open) | Indicates a clear demand for parity between desktop and web/gateway experiences. Likely targeted for the next minor release. |
| **Shared DM Session (`session.dmScope`)** | #100794 (open) | Mirrors OpenClaw’s multi‑channel DM model; suggests a roadmap item for session unifi­cation. |
| **Resume Interrupted Tasks on Restart** | #9673 (open, 2026‑04) | Long‑standing feature request; presence in the issue list signals ongoing interest and potential inclusion in a future “resilience” milestone. |
| **Compact Chat Setting (hide transcript chrome)** | #100702 (open) | UI‑level opt‑in; suggests a focus on reducing visual clutter for power users. |
| **Zero TTL Disables Lazy MCP Startup** | #100816 (open) | Bug in lazy‑MCP implementation; fixing it may unlock the intended defer‑spawn behavior, improving startup efficiency. |
| **iLink “prepare failed” handling** | #100815 (open) | Distinguishes stale sessions from rate‑limit errors; a refinement that could reduce unnecessary reconnects. |

*Prediction:* The next Hermes version (likely 0.22.x) will probably incorporate **bot‑mode UI parity**, **session‑scope unification**, and **lazy‑MCP startup fixes**, based on the concentration of related PRs and feature requests.

---

### 7. User Feedback Summary  

- **Session & State Management:** Users repeatedly encounter “session not found”, “restore failed”, and “state.db corruption” errors, eroding confidence in persistence across restarts and across devices.  
- **UI Consistency:** Desktop‑only features (bot‑mode group chats, `/refine` command) create friction for users who switch between desktop, web, and gateway interfaces.  
- **Credential & Auth Handling:** Providers (xAI, Home Assistant) sometimes force‑enable or lock out credentials, leading to non‑retryable 403/429 states that persist until process restart.  
- **Performance & Reliability:** Issues such as the 120 s `/compress` timeout, matrix missing `m.replace` edits, and the `hermes doctor` hang after diagnostics indicate concerns about background worker coordination and long‑running process termination.  
- **Developer Experience:** The MCP array‑wrapping bug and stdio child‑process deaths cause silent tool‑call failures, hampering automation and integration workflows.

Overall sentiment leans toward **dissatisfaction with stability and UI consistency**, while **feature requests** show enthusiasm for greater cross‑platform parity and smarter session handling.

---

### 8. Backlog Watch  

| Item | Why It Matters | Current Status |
|------|----------------|----------------|
| **#66616** – Skills index stale/degraded (138 c) | Core freshness guarantee; impacts any feature relying on up‑to‑date skill index. | Open; no fix PR yet. |
| **#25065** – `HASS_TOKEN` forces HA platform despite config | Prevents users from disabling Home Assistant integration. | Open; low‑priority but blocks configuration. |
| **#43603** – WhatsApp pairing fails behind HTTP(S) proxy (408) | Hinders users on restricted networks; blocks a major messaging channel. | Open; reproducible but no fix. |
| **#72280** – Shared‑session restart treats empty attribution as new message | Leads to confusing conversation flow and unnecessary prompts. | Open; low‑severity but user‑visible. |
| **#93918** – `/refine` always says “Nothing to refine yet” | Blocks manual self‑improvement and automatic review pipelines. | Open; UI routing bug. |
| **#76590** – MCP OAuth tokens deleted on transient connection failure | Causes loss of credentials after brief network glitches, forcing re‑login. | Open; impacts reliability of external tool integrations. |
| **#100792** – `hermes doctor` hangs after diagnostics (thread shutdown) | Prevents clean termination; users must manually kill process. | Open; recent (Sept 2) – likely a regression. |
| **PR #99220** – Relay egress authorization fix | Security‑critical: ensures destination authorization, not just sender auth. | Open; high‑impact security improvement. |
| **PR #100790** – Classify Baileys `loggedOut` as non‑retryable fatal | Prevents endless retry loops after device unlink events. | Open; important for bridge stability. |
| **PR #100811** – Desktop‑update detached‑HEAD handling | Update failures when repo is in detached HEAD state. | Open; directly affects upgrade reliability. |

*Maintenance Focus:* The maintainers should prioritize **#66616** (index freshness) and **#100792** (doctor hang) as they affect core workflow reliability. Security‑related PRs (**#99220**, **#100790**) also merit prompt review to avoid privilege‑escalation or endless retry scenarios.

---

**Conclusion:** Hermes Agent is experiencing a burst of focused activity on stability, session management, and UI consistency. While no new releases are pending, the high volume of open issues and PRs suggests the project is moving quickly toward a **0.22.x** update that will likely address the most vocal community pain points and tighten cross‑platform capabilities. Maintainer attention on the long‑standing backlog items (index freshness, doctor hang, WhatsApp proxy) will be critical to sustaining momentum.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**1. Today's Overview**  
On 2026-09-02, PicoClaw exhibits moderate activity with 3 issues and 5 PRs updated in the last 24 hours, all issues remaining open/active and no new releases published. Two PRs were merged/closed: #3359 introduces a canonical repository-review contract, resource taxonomy, and deterministic acceptance gates, while #3299 adds a native Exa web-search provider with highlights and date-range filtering. The three remaining open PRs (#3358, #3357, #3356) focus on Telegram group reply threading, implicit mention handling for bot-self replies, and quoted-document media re-attachment, respectively. Three open issues—dominated by a stale MCP server hang bug and a Feishu configuration error—indicate the project is in an active but uneven stabilization phase, with maintainers merging structural features while addressing critical reliability gaps.

**2. Releases**  
No new releases were published in the reporting period. The project continues on the nightly/git cycle (current git: 2cf030d2 / bbf6893c).

**3. Project Progress**  
Two PRs were merged/closed today:  
- **#3359 [CLOSED]** feat(repository-reviews): enforces product and retention contracts, canonical resource taxonomy (`rrw_*`/`rdf_*`/`rrf_*` ownership), bounded API references, lifecycle/retention rules, and deterministic acceptance gates.  
- **#3

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest - 2026-09-02

## 1. Today's Overview

NanoClaw shows moderate activity today with 2 newly updated issues and 13 total pull requests merged or opened in the last 24 hours. No new releases have been published, indicating stable maintenance focus. The project continues its steady pace of infrastructure improvements, particularly around provider contracts and security hardening. Overall health remains strong with active development across core functionality and tool integrations.

## 2. Releases

No new releases were published in the last 24 hours. The latest container update (#3698) had already been released earlier this week, and there are currently no version bumps or feature additions to report. The project maintains its current stable baseline while ongoing refactoring continues in the background.

## 3. Project Progress

**Merged/Closed PRs Today:**
- **#3680** (Updated 2026-09-02) - Security fix closing an allowlisted extra mount bypass in `validateSpec`. This addresses a potential security vulnerability where unauthorized mount configurations could bypass validation checks.

**Key Progress Areas:**
- **Provider Contracts**: Multiple PRs (#3584, #3588, #3591, #3592, #3585, #3586) are actively implementing provider contracts (OpenCode, Codex, Host, Runtime, Setup). These foundational changes enable better integration patterns and consistency across different provider implementations.
- **Agent Memory & Runner Improvements**: Several refactors (#3581-#3586) focus on improving agent memory management, runner behavior, and configuration handling, particularly around task scheduling and idling timeouts.
- **Security Hardening**: Ongoing work on mount security and API boundary enforcement reflects continued emphasis on system reliability.

## 4. Community Hot Topics

**Top Active Issues:**
- **#3700** - Destination local-name repointing failure when messaging groups are recreated. This affects real-world deployments where users may accidentally delete and recreate Discord messaging groups, causing destination references to break. The issue has been created recently (2026-09-01) and requires careful handling of existing resource cleanup.
- **#3699** - Inconsistent auto-filling of `--agent-group-id` for `ncl destinations create/remove` commands compared to other group-scoped commands. This inconsistency creates friction for users who expect uniform behavior across similar operations.

Both issues are open and represent genuine user pain points that impact usability. The security-focused PR #3680 suggests the team is proactively addressing potential vulnerabilities discovered during testing.

## 5. Bugs & Stability

**Critical Bugs Reported:**
- **#3700** - Destination local-name repointing fails when targets' messaging groups are recreated. Users must manually delete and recreate groups, leading to operational overhead and potential data loss if not handled correctly. This directly impacts production stability for teams managing multiple messaging groups.
- **#3699** - Missing automatic `--agent-group-id` population for destination creation/removal commands. While less severe than #3700, this represents a usability gap that could cause confusion for power users familiar with other group-scoped commands.

**Stability Notes:**
- **Idle Timeout Fix (#3646)** - A recent fix makes idle timeout configurable and applies it consistently to both kill paths, preventing premature termination of slow-but-functional model runs. This improves reliability for long-running tasks.
- **Security Patch (#3680)** - Addresses a potential mount bypass vulnerability that could allow unauthorized access through misconfigured platform IDs.

**Fix PR Status:**
- PR #3680 (security fix) was updated today (2026-09-02), indicating prompt response to the identified risk.
- No other bug-specific fixes appear in the recent PR list, suggesting the team prioritizes security over general stability fixes at this moment.

## 6. Feature Requests & Roadmap Signals

**Emerging Features:**
- **Keenable MCP Tool Skill (#3697)** - Adds a dedicated skill for integrating Keenable web search and page fetching as remote MCP tools. This signals growing interest in external knowledge retrieval capabilities within the agent ecosystem.
- **Speed Inference Property (#3592)** - Introduces a core-owned speed inference feature, likely targeting performance optimization for high-throughput scenarios.
- **Per-Task Missed-Run Policy (#3696)** - Establishes explicit policies for recurring tasks when scheduled periods are missed, replacing previous implicit fallback behavior. This improves reliability for automated workflows.

**Roadmap Indicators:**
The pattern of provider contract implementation (#3584, #3588, etc.) suggests a strategic push toward standardized integration interfaces. The Keenable addition indicates expansion beyond core functionality into specialized tool ecosystems. The speed inference feature hints at performance-focused enhancements for enterprise-grade usage.

## 7. User Feedback Summary

**Pain Points Identified:**
- **Group Management Complexity** - Users struggle with destination name resolution when messaging groups are recreated, requiring manual intervention. This is a significant operational burden highlighted by Issue #3700.
- **Inconsistent CLI Behavior** - The lack of consistent `--agent-group-id` auto-filling across similar commands creates cognitive load and potential errors for experienced users.
- **Slow Task Termination** - The previous idle timeout mechanism incorrectly terminated long-running tasks, impacting reliability for continuous operation workloads.

**Positive Feedback Signals:**
- The security fix (#3680) demonstrates responsiveness to potential vulnerabilities.
- Recent provider contract work appears well-received internally given the volume of related PRs, though direct user feedback isn't available yet.

**Overall Sentiment:** Users are encountering practical usability challenges that affect daily workflow efficiency. The team's proactive approach to security and incremental feature delivery suggests alignment with user needs for stability and reliability.

## 8. Backlog Watch

**Unresolved High-Priority Items:**
- **Issue #3700** - Destination repointing failure when messaging groups are recreated. Requires careful implementation to ensure backward compatibility while fixing the broken path. Monitor closely as this affects real deployment scenarios.
- **Issue #3699** - Inconsistent agent-group-id auto-filling for destination commands. Should be addressed alongside #3700 to provide complete consistency across group-scoped operations.

**Long-Unanswered PRs:**
- Several provider-related refactors (#3584, #3588, #3591, #3592, #3585, #3586) remain open but show active development. These are critical foundation work that should continue without delay.
- **PR #3680** (security fix) was recently updated, indicating timely resolution of a known risk.

**Monitoring Recommendations:**
- Track the resolution of #3700 and #3699 as they directly impact user experience.
- Ensure provider contract implementations remain aligned with evolving integration requirements.
- Continue monitoring the Keenable MCP skill rollout for early adoption metrics.

---

**Summary:** NanoClaw maintained steady activity with a focus on security hardening (PR #3680), provider contract standardization, and usability improvements. Two key issues remain open that require attention—destination repointing failures (#3700) and inconsistent agent-group-id handling (#3699)—both of which significantly impact user workflows. The project is on track with no new releases, maintaining stability while advancing core functionality.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-02

## 1. Today's Overview

IronClaw shows **high-velocity internal development** on 2026-09-02, with 14 issues updated and 19 PRs updated in the trailing 24 hours, but zero new releases — consistent with a project in active dogfooding rather than a public release window. The merged/closed work concentrates on three themes: **(a) WebUI design-system convergence** (replacing native inputs/selects and ad-hoc banners with shared `Input`, `SelectMenu`, `SearchField`, and `InlineNotice` components), **(b) agent-loop refactoring** (decomposing the 2,938-line `executor/capabilities.rs` into focused modules), and **(c) live-channel correctness fixes** (Slack admission, mention preservation, durable progressive replies). Open issues skew toward performance regressions in production runs (GitHub `list_repos` payload size, OpenAI prompt-cache hit collapse, hosted-MCP `tool_search` unsearchability at scale), suggesting the team is now tuning for real-world workloads rather than adding scope. No critical/blocker issues were filed in the window.

## 2. Releases

**No new releases in the last 24 hours.**

## 3. Project Progress (Merged/Closed PRs)

| PR | Title | Impact |
|---|---|---|
| [#8031](https://github.com/nearai/ironclaw/pull/8031) | refactor(agent-loop): decompose capability stage mechanics | Reduces `executor/capabilities.rs` from 2,938 → 890 lines while preserving a single `CapabilityStage::process` execution path; extracts batch scheduling, dispatch/recovery, failure normalization, outcome persistence, and record construction into focused modules. |
| [#8028](https://github.com/nearai/ironclaw/pull/8028) | refactor(agent-loop): align state and stage ownership | Splits checkpoint state into compaction/recovery/reply-admission/stop-control modules; moves model-usage bookkeeping into `ModelStage`; preserves public paths and serialized bytes. |
| [#8013](https://github.com/nearai/ironclaw/pull/8013) | ci: parallelize affected crate tests with nextest | Switches ordinary affected-package tests from Cargo's sequential scheduler to nextest with four test processes; a Cargo-only subset is derived for `harness = false` and unknown target kinds. |
| [#7998](https://github.com/nearai/ironclaw/pull/7998) | feat(llm): preserve NEAR AI model capabilities through discovery | Adds provider-neutral model catalog entries with input/output modalities; introduces additive `list_model_catalog()` while preserving `list_models()`; parses NEAR AI modalities. |
| [#7997](https://github.com/nearai/ironclaw/pull/7997) | feat(webui): show model capability icons across Inference | Renders icon-only Text / Image input / Image output capabilities with localized hover descriptions and accessible labels; supports both legacy list and detailed catalog responses. (closes [#7971](https://github.com/nearai/ironclaw/issues/7971)) |
| [#7996](https://github.com/nearai/ironclaw/pull/7996) | perf(github): compact repository list responses | Projects `github.list_repos` onto model-useful fields; reuses the projection for `search_repositories`; rebuilds the committed WASM artifact. (closes [#7986](https://github.com/nearai/ironclaw/issues/7986)) |
| [#8027](https://github.com/nearai/ironclaw/pull/8027) | fix(live-qa): find the Slack run by message identity, not envelope event_id | Resolves `qa_7d_slack_bug_message_trigger` failures (33 consecutive canary timeouts since 2026-08-28); the event was accepted but the harness couldn't find it. |
| [#8029](https://github.com/nearai/ironclaw/pull/8029) | fix(live-qa): state Slack admission from the accepted outcome, not dispatch routing | Follow-up to #8027; reads `outcome` before `dispatch_kind` so `DeferredBusy`/`RejectedBusy` map correctly to Slack run state. |
| [#8014](https://github.com/nearai/ironclaw/pull/8014) | fix(slack): preserve explicit mentions across callback dedup | Preserves explicit mentions when Slack delivers the same threaded post as both `message` and `app_mention`; ignores only the ambiguous reply-shaped callback. |

## 4. Community Hot Topics

**Most active items (by comments/reactions):**

- **[#8025 — Special characters cause incorrect output / stripped characters](https://github.com/nearai/ironclaw/issues/8025)** (1 comment) — User kapibarazoku0422-create reports that special-character input strips characters or errors, suspected regression from "encoding changes in the last release." Low comment volume but high signal: input-handling regressions are user-visible.
- **[#7986 — GitHub `list_repos` ships 81 raw fields (519 KB) per listing](https://github.com/nearai/ironclaw/issues/7986)** (1 comment) — henrypark133 documents a measured 519,551-byte tool result for "list my github repos," with the package's projection seam unused. Already addressed by merged [#7996](https://github.com/nearai/ironclaw/pull/7996); the underlying need is *consistent use of the projection seam across all tool outputs*, not just one.
- **[#8026 — Epic: Dogfooding & QA bug fixing 09/01–09/06](https://github.com/nearai/ironclaw/issues/8026)** — Weekly QA epic opened by italic-jinxin, succeeds [#7843](https://github.com/nearai/ironclaw/issues/7843) (closed). No comment volume itself, but it anchors the week's bug-fix cadence.

**Underlying needs:** (a) defensive input encoding/escaping across the stack, (b) tool-result payload sizing as a first-class concern, and (c) an ongoing dogfooding loop with weekly QA epics.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| **High** | [#7921 — OpenAI-family backends send no `prompt_cache_key`: measured 82%→29% cache-hit collapse past ~200 calls](https://github.com/nearai/ironclaw/issues/7921) | Open, P2 | None yet — only Anthropic transports implement cache hints |
| **High** | [#8012 — Hosted-MCP catalog of 47,337 tools ingests fully but no tool is reachable via `tool_search`](https://github.com/nearai/ironclaw/issues/8012) | Open | Partial: [#7984](https://github.com/nearai/ironclaw/pull/7984) sizes replies to first-look envelope (open), but root cause for large-catalog unsearchability not addressed |
| **High** | [#8016 — `reborn_turn_state_lock_free_submit_parity` test intermittently times out while Running in CI](https://github.com/nearai/ironclaw/issues/8016) | Open, P2 | None |
| **Medium** | [#8015 — Rootless Docker sandbox workspace not writable (UID/GID namespace mismatch)](https://github.com/nearai/ironclaw/issues/8015) | Open | None |
| **Medium** | [#8025 — Special characters in input field: stripped or errored](https://github.com/nearai/ironclaw/issues/8025) | Open | None |
| **Resolved** | [#7986 — `github.list_repos` 519 KB payload](https://github.com/nearai/ironclaw/issues/7986) | Closed | [#7996](https://github.com/nearai/ironclaw/pull/7996) merged |
| **Resolved** | Slack live-QA canary (33 consecutive failures since 2026-08-28 03:09Z) | Closed | [#8027](https://github.com/nearai/ironclaw/pull/8027) + [#8029](https://github.com/nearai/ironclaw/pull/8029) merged |

The most consequential unresolved bug is **#7921**: a measurable ~53 percentage-point cache-hit collapse on OpenAI-family transports that IronClaw is currently sending without `prompt_cache_key` headers — the existing Anthropic cache-control implementation is not symmetric across backends.

## 6. Feature Requests & Roadmap Signals

The 24h window is dominated by **internal design-system migration requests** rather than net-new user features:

- **WebUI component unification (4 open issues, 4 PRs staged):**
  - [#8020 — Shared `SearchField` for Workspace and Logs filters](https://github.com/nearai/ironclaw/issues/8020) → [#8024](https://github.com/nearai/ironclaw/pull/8024) (open)
  - [#8019 — Automations status banners → `InlineNotice`](https://github.com/nearai/ironclaw/issues/8019) → [#8022](https://github.com/nearai/ironclaw/pull/8022) (open)
  - [#8018 — Native SettingsField controls → shared `Input` / `SelectMenu`](https://github.com/nearai/ironclaw/issues/8018) → [#8021](https://github.com/nearai/ironclaw/pull/8021) (open)
  - [#8017 — Shared form/feedback in Extension Configure](https://github.com/nearai/ironclaw/issues/8017) → [#8023](https://github.com/nearai/ironclaw/pull/8023) (open)
- **Native Slack Agent UI & durable progressive replies** — [#8006](https://github.com/nearai/ironclaw/pull/8006) (open, XL, low): one `ReplyDocument` reply seam, provider-specific presentation at the edges.
- **Session-event transport unification** — [#8010](https://github.com/nearai/ironclaw/pull/8010) (open, XL, medium): unified WebUI session-event transport + run-completion notifications per approved design `2026-08-13-webapp-run-notifications.md`.
- **NEAR AI model modalities in UI** — [#7970](https://github.com/nearai/ironclaw/issues/7970) (closed) → [#7998](https://github.com/nearai/ironclaw/pull/7998) (merged); [#7971](https://github.com/nearai/ironclaw/issues/7971) (closed) → [#7997](https://github.com/nearai/ironclaw/pull/7997) (merged).

**Prediction for the next release:** The next published IronClaw build will almost certainly ship (1) the WebUI design-system migration as a coherent batch (all four PRs above are sized M/low-risk and self-contained), (2) the Slack `ReplyDocument` seam with native Slack Agent UI, and (3) the agent-loop capability/state refactor. Performance work on OpenAI prompt-cache keys (#7921) and large-catalog `tool_search` (#8012) is less likely to land in the same release — both are root-cause investigations, not localized patches.

## 7. User Feedback Summary

The 24h feedback signal is thin on end-user voices and dominated by internal contributors (italic-jinxin, henrypark133, BenKurrek, dependabot). Real user pain visible today:

- **kapibarazoku0422-create ([#8025](https://github.com/nearai/ironclaw/issues/8025))** — *dissatisfaction*, possible regression after encoding changes; user is unable to use special-character inputs reliably. Suspected encoding/escaping defect.
- **Mkobi34 ([#8015](https://github.com/nearai/ironclaw/issues/8015))** — *dissatisfaction*, rootless-Docker workspace unwritable due to UID/GID mismatch; blocks self-hosting as a non-root user.
- **pranavraja99 ([#8012](https://github.com/nearai/ironclaw/issues/8012))** — *dissatisfaction*, hosted-MCP catalogs above ~2k tools are functionally unreachable via `tool_search`; the catalog ingests but no tool can be discovered.
- **henrypark133 ([#7921](https://github.com/nearai/ironclaw/issues/7921), [#7986](https://github.com/nearai/ironclaw/issues/7986))** — measured production-shape regressions: 519 KB tool results for trivial queries, and a 53-point cache-hit collapse on OpenAI backends; both indicate cost/efficiency dissatisfaction at scale.
- **Satisfaction signal:** [#8027](https://github.com/nearai/ironclaw/pull/8027) merged — a long-running Slack canary (33 consecutive failures) was diagnosed and fixed; the team's live-QA harness is producing actionable findings.

Net satisfaction: **mixed-low** for end users (encoding, sandbox ownership, large catalogs), **positive** on engineering hygiene (canary catches, dogfooding epics shipping fixes).

## 8. Backlog Watch

Items updated today that have lingered without resolution or maintainer engagement:

- **[#7921 — OpenAI prompt_cache_key collapse](https://github.com/nearai/ironclaw/issues/7921)** — Created 2026-08-27, updated today, **0 comments, 0 👍**. High-impact performance bug affecting every OpenAI-family backend with a measured regression; no PR proposed yet. *Needs a maintainer to assign and to confirm scope across `OpenAiCodex`, Codex-ChatGPT registry, and Chat-Completions paths.*
- **[#7020 — Dependabot: tokio-tungstenite 0.29 → 0.30](https://github.com/nearai/ironclaw/pull/7020)** — Open since 2026-08-02, updated 2026-09-02, **S / low risk, dependencies, rust**. Stale dependency bump. *Should land or close; one-month-old dependency PRs tend to drift out of compatibility.*
- **[#7984 — Size `tool_search` replies to first-look envelope](https://github.com/nearai/ironclaw/pull/7984)** — Open since 2026-08-28, measured 16,066 → 857-byte reduction. XL, low risk, docs. *Awaiting review; potentially complements the still-open #8012 large-catalog issue.*
- **[#7988 — Refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7988)** — Nightly bot refresh, open since 2026-08-29, XS. Routine merge.*
- **[#8006 — Durable progressive replies + native Slack Agent UI](https://github.com/nearai/ironclaw/pull/8006)** and **[#8010 — Session-event transport unification](https://github.com/nearai/ironclaw/pull/8010)** — Both XL, both open since 2026-08-31. Large design-driven PRs awaiting core maintainer review; risk of merge-queue drift.
- **[#8030 — Dependabot: browserslist 4.28.2 → 4.28.8](https://github.com/nearai/ironclaw/pull/8030)** — Docs-only, fresh. *Routine.*

**Maintainer attention recommended on:** #7921 (no proposed fix despite strong evidence), #7020 (one-month-stale dep bump), and #8006/#8010 (large PRs in merge-queue limbo).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest - 2026-09-02

## 1. Today's Overview

CoPaw is experiencing active development with 34 issues and 34 PRs updated in the last 24 hours, indicating a healthy pace of community and maintainer engagement. A new beta release (v2.2.0-beta.6) was published, addressing critical stability and bundling issues. The focus remains on improving memory management (ReMe integration), console UX enhancements, and security hardening, though several persistent bugs continue to surface across different components.

## 2. Releases

### v2.2.0-beta.6 (2026-09-02)
- **fix(desktop): bundle ReMe entry-point plugins** by @jinliyl ([#7458](https://github.com/agentscope-ai/QwenPaw/pull/7458))
- **test(console): expand console unit tests** (+617 cases, +10.61pp statement coverage) by @yutai78786 ([#7452](https://github.com/agentscope-ai/QwenPaw/pull/7452))

*Note: The changelog appears truncated in the provided data.*

## 3. Project Progress

Several key PRs were merged or closed today, advancing stability and features:
- **PR #7468** (closed): Fixed ReMe startup race condition by starting it before model configuration, preventing failures on fresh installs.
- **PR #7472** (closed): Addressed a security vulnerability where shell line-continuation could bypass tool guards.
- **PR #7453** (closed): Fixed the "Rebuild Memory Index" 500 error by properly bundling the ReMe Python core in PyInstaller.
- **PR #7466** (closed): Updated Daily Paper link to point to QwenPaw's own memory documentation.
- **PR #7459** (closed): Marked duplicate of #7463 regarding bundled llama.cpp inability to load Spark-X2.5 GGUF.

## 4. Community Hot Topics

The most discussed issues reflect ongoing challenges with core functionality and user experience:
- **[#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420)** (8 comments): Tool results lost to agent + re-dispatched command causing potential doom-loop protection triggers. Represents a critical stability issue for desktop users after upgrading to 2.2.0-beta.1.
- **[#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417)** (5 comments): Console stream duplication bug. This highlights UX degradation in the streaming display layer, affecting usability during long responses.
- **[#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)** (5 comments): Multi-agent status reporting delay. Addresses a significant usability problem for complex workflows where agents don't proactively update state, requiring user prompting.
- **PR #7482** (new): Adding localization to Agent Kanban suggests community interest in internationalization and UI customization tools.

*Underlying needs*: Users require stable, predictable agent behavior, especially in multi-agent setups and long-running tasks. Improving feedback mechanisms and reducing manual intervention is a clear priority.

## 5. Bugs & Stability

High-severity bugs reported today include:
- **Critical**: [#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446)/[#7453](https://github.com/agentscope-ai/QwenPaw/pull/7453) (Closed): ReMe index rebuild failing with 500 error due to missing Python core in bundled app. *Fixed in beta.6.*
- **Critical**: [#7481](https://github.com/agentscope-ai/QwenPaw/issues/7481) (new): macOS StdIO MCP tool invocation killing the active backend. *No fix PR yet.*
- **High**: [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) (new): Console stream text duplication. *No fix PR yet.*
- **High**: [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) (ongoing): Tool results lost and commands re-dispatched, potentially triggering safeguards. *No fix PR yet.*
- **Medium**: [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) (new): Dangerous instructions evading protections. *No fix PR yet.*
- **Medium**: [#7464](https://github.com/agentscope-ai/QwenPaw/issues/7464) (new): DashScope embedding index rebuild disabled due to false "unsaved changes" detection. *No fix PR yet.*

## 6. Feature Requests & Roadmap Signals

Users are requesting practical improvements aligned with upcoming releases:
- ****#7455** (closed)**: Allow disabling all built-in cloud providers for greater control/configurability.
- ****#7459** (closed duplicate)**: Support for Spark-X2.5 GGUF models in bundled llama.cpp. *Likely to be addressed in future releases given the fix attempt.*
- ****#7378** (open draft)**: Introduction of a native mobile experience using Expo/React Native, showing long-term roadmap expansion beyond desktop/web.
- ****#7461** (new)**: Support for in-round queued events, allowing mid-tool-execution user messages to be injected into the current trajectory. This is a sophisticated workflow improvement.

## 7. User Feedback Summary

User feedback indicates dissatisfaction with several core aspects:
- **Stability Concerns**: Multiple users report stalls, loses of context, and crashes, particularly after upgrading to 2.2.x betas.
- **Multi-Agent Coordination**: Users find the main agent unresponsive unless prompted about sub-agent status, leading to idle times and uncertainty in complex tasks.
- **Context Loss**: Reports of early conversation history disappearing in long sessions, jeopardizing task completion.
- **Memory/System Configuration**: Confusion and bugs around embedding index rebuilding and configuration persistence.
- **UX Details**: Issues with console rendering (duplication, dark mode backgrounds, scroll behavior) and command interpretation (misspelled commands still processed).

## 8. Backlog Watch

Long-standing issues requiring attention:
- **[#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003)** (Closed/Proposal): Proposal for an encrypted, token-efficient memory system (ViBo) to address statelessness and cost concerns. While closed, it represents a significant architectural suggestion for the future of agent memory.
- **[#6399](https://github.com/agentscope-ai/QwenPaw/issues/6399)** (Open draft): Adding a reranker UI config panel. This is a companion to backend work and shows planned expansion of memory configuration options.
- **[#5992](https://github.com/agentscope-ai/QwenPaw/issues/5992)** (Open): Adding per-session model overrides. This feature allows different LLMs for different conversations within the same agent, a useful flexibility feature for advanced users. Review status is "Under Review".

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest – 2026‑09‑02**  
*Generated from GitHub activity (issues, PRs, releases) for the repository qhkm/zeptoclaw.*

---

### 1. Today's Overview  
The repository showed **no issue updates** in the last 24 h, indicating a quiet period for bug reports or feature discussions. Two pull‑requests were updated: one **merged** (#649) and one **still open** (#658), both generated by Dependabot to bump the base Rust Docker image. No new releases were published today. Overall, project activity is low but maintenance‑focused, with automated dependency updates keeping the build environment current.

### 2. Releases  
*No new releases* were recorded in the last 24 h. The latest released version remains unchanged; therefore there are no version‑specific changes, breaking changes, or migration notes to report.

### 3. Project Progress  
| PR | State | Summary | Link |
|----|-------|---------|------|
| #649 | **Merged/Closed** (2026‑09‑01) | Bumped the Rust Docker base image from `1.95‑slim‑trixie` to `1.97‑slim‑trixie`. This updates the toolchain used in CI/containers to a newer patch level, bringing minor security and performance improvements. | [qhkm/zeptoclaw#649](https://github.com/qhkm/zeptoclaw/pull/649) |
| #658 | **Open** (created & updated 2026‑09‑01) | Proposes to further bump the Rust Docker base image from `1.95‑slim‑trixie` to `1.98‑slim‑trixie`. The PR includes a Dependabot compatibility score badge; no further discussion or review comments have been added yet. | [qhcm/zeptoclaw#658](https://github.com/qhkm/zeptoclaw/pull/658) |

**Progress takeaway:** The project’s CI/tooling is being kept up‑to‑date via automated dependency bumps. No functional code changes or feature work were merged today.

### 4. Community Hot Topics  
*No issues or PRs received comments or reactions* in the last 24 h, so there are no active discussions to highlight. The only recent activity is the Dependabot‑generated PRs, which typically attract little community interaction unless a conflict or breakage arises.

### 5. Bugs & Stability  
*No bugs, crashes, or regressions* were reported today. Consequently, there are no severity‑ranked stability issues or associated fix PRs to note.

### 6. Feature Requests & Roadmap Signals  
With **zero open issues**, there are no explicit user‑submitted feature requests visible in the tracker. The ongoing dependency updates suggest the maintainers are focusing on keeping the build environment modern; any upcoming feature work would likely be tracked in future issues that have not yet been filed.

### 7. User Feedback Summary  
No user comments, queries, or feedback appear in the issue or PR comment threads today. Hence, there is no direct signal of pain points, satisfaction, or dissatisfaction from the community at this moment.

### 8. Backlog Watch  
- **Open PR #658** – awaiting review/merge. While it is a routine dependency bump, it has been open for less than a day; maintainers should verify compatibility and merge when convenient to keep the Rust toolchain current.  
- **No long‑standing issues** (>30 days) are present in the data set, so there is currently no backlog requiring urgent attention.

---

**Overall Health Assessment:**  
ZeptoClaw appears stable and well‑maintained from an infrastructure standpoint, with automated dependency updates ensuring the build environment stays current. The lack of issue activity indicates either a mature, low‑defect codebase or limited community engagement. Maintainers may consider encouraging more user interaction (e.g., discussion prompts, roadmap sharing) to surface feature desires and ensure the project continues to evolve beyond maintenance.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑09‑02**

---

### 1. Today’s Overview  
The repository is in a highly active state: 31 issues and 50 pull requests were updated in the last 24 h, with 27 issues still open and 14 PRs merged or closed. No new releases were published, but the bulk of activity centres on architecture‑level RFCs (runtime‑owned conversation sessions, unified file/attachment design, WASM plugin runtime) and security‑focused design trackers. The project shows strong momentum on both forward‑looking roadmap items and concrete stability fixes, indicating a healthy balance between innovation and reliability.

**Link:** https://github.com/zeroclaw-labs/zeroclaw

---

### 2. Releases  
*No new releases were published in the past day.*  

---

### 3. Project Progress  
- **14 PRs merged/closed** in the last 24 h, delivering enhancements such as browser‑PKCE enrollment, OIDC device‑grant flows, and the removal of compile‑time feature flags for optional channels/tools (PR #8850).  
- **Feature advances:** PR #10274 (gateway route‑layer auth), PR #10268 (private principal memory isolation), and PR #10259 (authenticated principal enforcement on RPC) continue the RFC 7141 storage‑boundary work, moving the codebase closer to a “stage 5” implementation.  
- **Stability fixes:** PR #10262 (rpc connection cleanup on daemon reload) and PR #9402 (avoid nested Docker sandboxes) address runtime containment bugs that could cause resource leaks or double‑sandboxing.  

---

### 4. Community Hot Topics  

| Issue / PR | Comments | 👍 | Link | Underlying Need |
|------------|----------|----|------|-----------------|
| **#9487** – *Runtime‑owned conversation sessions & transport surface adapters* | 31 | 0 | https://github.com/zeroclaw-labs/zeroclaw/issues/9487 | A desire for a more coherent, agent‑centric session model that can be owned and managed by the runtime rather than scattered across multiple components. |
| **#9488** – *Unified file and attachment architecture for conversation surfaces* | 25 | 0 | https://github.com/zeroclaw-labs/zeroclaw/issues/9488 | Users need a single, consistent way to handle files/attachments across all conversation surfaces, reducing fragmentation. |
| **#6996** – *Granular sandbox policy (filesystem & network restrictions)* | 20 | 0 | https://github.com/zeroclaw-labs/zeroclaw/issues/6996 | Tightening security by exposing a fine‑grained policy layer that aligns application‑level path admission with OS‑level sandbox back‑ends. |
| **#8396** – *Make wire protocol first‑class in provider construction* | 17 | 0 | https://github.com/zeroclaw-labs/zeroclaw/issues/8396 | Simplify provider onboarding and improve extensibility by treating the wire protocol as a first‑class entity. |
| **#8692** – *Maintainer decision queue for RFCs & design issues* | 14 | 0 | https://github.com/zeroclaw-labs/zeroclaw/issues/8692 | A need for a clear, prioritized decision pipeline so maintainers can triage design proposals efficiently. |

These topics reveal a community focused on **security hardening**, **architectural consistency**, and **developer ergonomics** (e.g., easier plugin integration, better session management).

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue | Summary | Updated (24 h) | Fix PR? |
|----------|-------|---------|----------------|----------|
| **S0 – data‑loss / security risk** | **#10495** – *Config::save() can replace an operator’s populated config.toml with a near‑empty file* | A workspace test can overwrite a user’s 109 KB config with a 702‑byte minimal file, risking loss of agent settings. | 2026‑09‑01 | No merge yet; a fix is in review (PR #10220 adds pre‑hook gates that could prevent accidental overwrites). |
| **S2 – degraded behavior** | **#6996** – *Granular sandbox policy – filesystem and network restrictions* | Two historically divergent policy layers (application‑level path admission vs. OS sandbox back‑ends) cause inconsistent security guarantees. | 2026‑09‑02 | No dedicated fix PR yet; the RFC is still in “proposed” stage, indicating a need for further design consensus. |
| **S2 – degraded behavior** | **#10523** – *Bootstrap file truncation at 6000 chars is invisible to the operator* | With `compact_context` enabled, workspace bootstrap files are silently cut at 6 k characters, leading to hidden prompt truncation. | 2026‑09‑01 | No merge; a fix would likely involve adjusting truncation logic and surfacing a warning. |
| **S2 – degraded behavior** | **#10513** – *RPC `sops.run` returns a run ID for a step nothing will execute* | The dispatcher starts a manual SOP, calls the worker, and returns the run ID, but no driver sink exists to actually run the step. | 2026‑09‑01 | No merge; a follow‑up PR is expected to add proper driver integration. |
| **S0 – data‑loss / security risk** | **#8279** – *Delegate bypasses parent’s tool allowlist* (updated 2026‑09‑01) | A sub‑agent can invoke tools that the parent policy explicitly excludes, creating a data‑loss vector. | 2026‑09‑01 | Fix merged in PR #8850 (runtime‑plugin migration) which removes compile‑time feature flags, thereby tightening tool invocation paths. |

*Only #6996 was updated on 2026‑09‑02; the others are included because they represent the most severe stability concerns reported recently.*

---

### 6. Feature Requests & Roadmap Signals  

- **#9487** (runtime‑owned conversation sessions) and **#9488** (unified file/attachment architecture) are high‑risk RFCs that signal a shift toward a **more modular, agent‑centric runtime**. They are likely candidates for the next major version (v1.0+).  
- **#10076** (composable WASM plugin runtime) and **#10526** (append‑only session event history) indicate a strategic focus on **extensibility and reproducibility**, which aligns with the roadmap’s “stage 5” vision for storage‑level isolation and deterministic replay.  
- **#10530** (pass Anthropic extended‑thinking params through OpenAI‑compatible providers) shows demand for **better support of advanced LLM features** across gateway providers.  

These RFCs and feature tickets suggest the upcoming release will emphasize **runtime ownership, unified data handling, and richer plugin ecosystems**.

---

### 7. User Feedback Summary  

- **Configuration mishaps:** Users report that `Config::save()` can silently replace a fully populated `config.toml` with an almost empty file (Issue #10495). This erodes trust in the onboarding workflow.  
- **SOP silent failures:** Issue #9779 highlights that the documented default for `sops_dir` is ignored, causing the SOP engine to never load without any warning.  
- **Memory status confusion:** Issue #9896 shows the status banner reports “Memory: none” even when SQLite‑backed memory is actively used, leading to misleading operational awareness.  
- **Tool delegation privilege leakage:** Issue #8279 demonstrates that a delegate can bypass a parent’s allowlist, a serious security concern for multi‑agent deployments.  
- **Bootstrap truncation:** Issue #10523 reveals that `compact_context` truncates workspace bootstrap files at 6 k characters without notifying the operator, causing hidden loss of context.  

Overall sentiment leans toward **dissatisfaction with silent failures and hidden state changes**, while users appreciate ongoing work on security and modularity.

---

### 8. Backlog Watch  

| Issue / PR | Age (days) | Comments | Maintainer Activity | Why It Matters |
|------------|------------|----------|---------------------|----------------|
| **#9487** – *Runtime‑owned conversation sessions* | 35 | 31 | 1 (last update 2026‑09‑01) | Core architectural change; without resolution the session model remains fragmented. |
| **#9488** – *Unified file & attachment architecture* | 35 | 25 | 1 | Impacts every client that handles files; a blocker for consistency. |
| **#8692** – *Maintainer decision queue* | 59 | 14 | 0 | Provides a needed governance process; its stagnation delays many RFCs. |
| **#10050** – *Verbatim channel send over gateway* | 15 | 12 | 0 | High‑risk security‑relevant feature; needs maintainer review. |
| **#9850** – *llm_task provider alias config loss* | 23 | 1 | 0 | Affects Azure/OAuth provider configuration; critical for multi‑cloud deployments. |

These items have **high comment counts** and **no recent maintainer response**, indicating they are likely to become bottlenecks if not addressed soon.

---

**Conclusion** – ZeroClaw is experiencing a burst of productive activity, especially around security‑hardening, runtime modularity, and developer‑experience refinements. While the bulk of the roadmap is forward‑looking (RFCs and composable WASM plugins), several high‑severity bugs and long‑standing design issues still require maintainer attention. The project’s health appears robust, but prioritizing the backlog items above will be key to maintaining stability and community confidence in the upcoming release cycle.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*