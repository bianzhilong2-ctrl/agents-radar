# OpenClaw Ecosystem Digest 2026-09-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-08 02:08 UTC

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

**OpenClaw Project Digest – 2026-09-08**

### 1. Today's Overview
The project sustained an intense 24-hour cycle of 500 issue updates and 500 PR activity, with 249 issues remaining open/active and 251 closed, while 283 PRs are open and 217 were merged/closed. No new releases were published, keeping the codebase on the current development baseline. Activity is evenly split between bug remediation, channel-specific fixes, infrastructure polishing, and documentation updates, reflecting a team focused on stabilizing the 2026.9.2 branch ahead of the next release.

### 2. Releases
No new releases as of 2026-09-08. The project remains on the latest stable build preceding the 2026.9.x development cycle, with the most recent tagged version being v2026.9.2.

### 3. Project Progress
217 PRs were merged/closed in the last 24h, spanning performance optimizations, CI/workflow fixes, and channel-specific bug fixes. Key categories include:
- **Memory & Performance**: `perf(memory): honor explicit embedding batch item limits` (#140508)
- **CI/Workflow**: CodeQL macOS runner restoration (#141761), browser asset exemptions in config RPC fixtures (#141741), workshop review targeting repair (#141575)
- **Channel Fixes**: Matrix release verification stabilization (#141757), auto-reply failure text accuracy (#141760), Feishu long-streaming reply drain prevention (#103928), Google Chat Markdown rendering (#141752), Discord trusted administrator logic (#140798)
- **Documentation & UI**: Android APK availability clarification (#141762), Usage session display count fix (#141749), LINE outbound length honor (#132724), TOOLS.md retention as optional workspace file (#141628)
The merge velocity indicates a push toward hardening the current baseline and reducing technical debt across multiple integrations.

### 4. Community Hot Topics
Most active issues and PRs by comment count and recency:

| Item | Comments | Type | Link | Underlying Need |
|------|----------|------|------|----------------|
| #44925 | 26 | P1 subagent completion loss (silent result drop, no retry/notification) | [openclaw

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – AI Agent / Personal Assistant Open‑Source Ecosystem (2026‑09‑08)**  

---

### 1. Ecosystem Overview  
The open‑source AI agent landscape remains highly fragmented yet increasingly convergent around a few core concerns: reliable state‑persistence, multi‑channel communication, and lightweight, extensible runtimes. Projects that have invested in durable coordination layers (e.g., NanoClaw’s durable‑host work) or hardened CI/pipeline reliability are seeing the fastest merge velocity, while others are still battling channel‑specific UX regressions (Feishu, QQ, Slack) and dependency‑driven breakages. Overall activity is robust – dozens of PRs and issue updates per day across the ecosystem – but the health of individual repos varies sharply with how well they balance feature expansion against stability work.  

---

### 2. Activity Comparison  

| Project | Open Issues | Closed Issues | Open PRs | Merged PRs | Latest Release (or “None”) | Health Score* |
|---------|-------------|---------------|----------|------------|----------------------------|---------------|
| **OpenClaw** | 249 | 251 | 283 | 217 | v2026.9.2 | **0.43** |
| **NanoBot** | 2 | 0 | 13 | 9 | None | **0.41** |
| **Hermes Agent** | 44 | 6 | 47 | 3 | v0.21.1 (v2026.9.7) | **0.06** |
| **PicoClaw** | 1 | 0 | 5 | 0 | None | **0.00** |
| **NanoClaw** | 2 | 0 | 11 | 17 | None | **0.61** |
| **NullClaw** | 0 | 0 | 1 | 0 | None | **0.00** |
| **IronClaw** | 1 | 0 | 5 | 0 | None | **0.00** |
| **LobsterAI** | 0 | 0 | 2 | 6 | None | **0.75** |
| **TinyClaw** | 0 | 0 | 0 | 0 | None | **0.00** |
| **Moltis** | 0 | 0 | 1 | 0 | None | **0.00** |
| **CoPaw** | 43† | 0† | 30 | 17 | None | **0.36** |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | None | **0.00** |
| **ZeroClaw** | 31 | 6 | 43 | 7 | None | **0.14** |

\*Health Score = Merged PRs ÷ (Open PRs + Merged PRs) – a simple proxy for how quickly contributions are landing. Scores ≥ 0.5 indicate a “fast‑landing” cadence; 0.3‑0.5 shows moderate throughput; < 0.3 signals a backlog‑heavy or review‑bound state.  
† CoPaw digest did not split open/closed; we treat all 43 updated issues as open for the purpose of the table.  

---

### 3. OpenClaw’s Position  

**Advantages vs. Peers**  
- **Scale of Activity:** OpenClaw processes the highest absolute volume of issue and PR traffic (≈ 1 000 updates/24 h), dwarfing most peers and indicating a large, active contributor base.  
- **Release Maturity:** It is the only project with a recent tagged release (v2026.9.2) while many others remain on an unreleased dev baseline, giving adopters a concrete stability point.  
- **Broad Integration Coverage:** Its work spans dozens of channel‑specific fixes (Matrix, Feishu, Google Chat, Discord, LINE, etc.) – a breadth unmatched by the more narrowly‑focused repos (e.g., PicoClaw’s QQ‑centric bug).  

**Technical Approach Differences**  
- **Performance‑First Mindset:** Recent merges highlight explicit memory‑batch limits and CI/workflow hardening, suggesting a focus on predictable resource usage rather than rapid feature experimentation.  
- **Incremental Stabilization:** The team is deliberately “hardening the current baseline” (2026.9.2 branch) before cutting a new release, a more conservative stance compared with NanoBot’s rapid UI/UX iterations or Hermes Agent’s frequent patch releases.  

**Community Size Comparison**  
- With ~ 500 issue updates and ~ 500 PR updates per day, OpenClaw’s contributor pool appears an order of magnitude larger than NanoBot (≈ 24 updates/day) or Hermes Agent (≈ 100 updates/day). The high count of open PRs (283) also signals a healthy pipeline of pending contributions awaiting review.  

---

### 4. Shared Technical Focus Areas  

| Focus Area | Projects Highlighting It | Specific Need Emerging |
|------------|--------------------------|------------------------|
| **State Persistence & Storage Hygiene** | NanoClaw (unbounded transcripts, rotation), CoPaw (ReMe background indexing), ZeroClaw (ACP transcript persistence) | Need for bounded, rotatable storage; automated cleanup/compaction policies. |
| **Channel‑Specific UX Consistency** | NanoBot (Feishu streaming CardKit), PicoClaw (QQ 401 auth), LobsterAI (Windows installer fonts, OpenClaw element refs) | Desire for a single, streamed message per turn; reliable auth token handling; consistent UI across platforms. |
| **Dependency‑Driven Breakage** | PicoClaw (botgo/resty incompatibility), NullClaw (Alpine base‑image bump), LobsterAI (Electron upgrade pending) | Need for stricter version locking or automated compatibility testing when upstream libs change. |
| **Lightweight / Edge‑Ready Runtimes** | NanoBot (ultra‑lightweight persona request), NanoClaw (fresh‑session flag for stateless jobs), CoPaw (plugin version management) | Demand for minimal footprint deployments (IoT, unmanned retail) and easy plugin isolation. |
| **Observability & Debugging** | Hermes Agent (Skills index freshness, TUI chord fix), ZeroClaw (cost‑tracking, provider caching) | Better metrics, health‑checks, and visibility into internal queues/caches. |

---

### 5. Differentiation Analysis  

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | NanoClaw | Others (representative) |
|-----------|----------|---------|--------------|----------|----------|--------------------------|
| **Primary User Base** | Enterprise‑grade multi‑channel bots (Matrix, Feishu, Slack, etc.) | Developers needing a extensible CLI/WebUI agent (macOS‑centric) | Desktop‑focused power users (TUI, local MLX, multi‑device sync) | Embedded/IoT hobbyists (ARM boards, custom web‑search) | Fleet operators needing durable state & scheduled tasks | Varies: LobsterAI (enterprise installer), CoPaw (plugin marketplace), ZeroClaw (provider‑centric daemon) |
| **Core Architecture** | Modular channel adapters + centralized performance/tuning layer | Plugin‑based provider system + WebUI‑first UI | Hybrid TUI/Desktop + gateway + memory subsystem | Minimal core + provider‑plug‑in model (OpenCode, Kee) | Durable host + approvals + task scheduler + A2A reliability | Mix: some are daemon‑only (ZeroClaw), some are UI‑centric (LobsterAI) |
| **Release Cadence** | Stable baseline, infrequent tagged releases | No formal releases; continuous PR flow | Periodic patch releases (v0.21.1) | No releases; PR‑driven | No releases; consolidation phase | Sporadic; many rely on direct‑master usage |
| **Technical Risk Appetite** | Conservative – prioritize hardening existing baseline | Moderate – UI/UX experiments, sandboxing | Aggressive – frequent patches, new locale/features | Experimental – provider ecosystem, multiline IRC | Conservative – durability & state correctness first | Wide spectrum (see above) |
| **Community Signal** | High volume, many channel‑specific bug reports | UX pain (Feishu fragmentation) + edge/IoT interest | Skills‑index staleness, desktop stability | Dependency breakage (QQ) | Storage leak & task‑context growth | Varies (see shared focus table) |

---

### 6. Community Momentum & Maturity  

| Activity Tier | Projects (examples) | Characteristics |
|---------------|---------------------|-----------------|
| **High‑Velocity / Rapid Iteration** | OpenClaw, NanoBot, LobsterAI | > 20 PRs/day, > 40 issue updates/day, health scores 0.4‑0.75; frequent merges, active UI/UX channel work. |
| **Moderate / Stabilizing** | Hermes Agent, CoPaw, ZeroClaw | 10‑50 PRs/day, health scores 0.06‑0.36; mix of feature work and bug‑fix backlog; occasional releases. |
| **Low / Maintenance‑Mode** | PicoClaw, NullClaw, IronClaw, TinyClaw, Moltis, ZeptoClaw | ≤ 5 PRs/day, often 0 merged; health ≈ 0; activity limited to dependency bumps or single bug triage. |
| **Consolidation Phase** | NanoClaw | Healthy merge ratio (0.61) but no releases; focus on durable state and CI hardening – a maturing project preparing for a upcoming release. |

Overall, the ecosystem shows a clear split: a handful of projects are pushing rapid feature/UX iteration, while many are either in maintenance or consolidating core reliability.  

---

### 7. Trend Signals for AI Agent Developers  

1. **State‑Boundedness is Becoming a Non‑Negotiable Requirement** – Multiple repos (NanoClaw, CoPaw, ZeroClaw) are hitting storage‑leak or transcript‑growth bugs; developers should design retention/compaction policies from day one.  
2. **Channel‑UX Consolidation** – Users demand a single, streamed message per turn (Feishu, QQ, LobsterAI). Building a unified message‑aggregation layer (e.g., NanoBot’s CardKit) will improve adoption on enterprise chat platforms.  
3. **Dependency Isolation & Version Pinning** – Breakages caused by upstream lib updates (PicoClaw’s botgo/resty,

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑09‑08**

---

### 1. Today’s Overview
The NanoBot repository shows continued engineering activity: 2 issues were updated (both remain open) and a total of 22 pull‑requests (PRs) touched the codebase, with 9 of them merged or closed. No new releases were published, leaving the stable version unchanged. Development effort is focused on performance, stability, and platform‑specific improvements (e.g., macOS sandboxing, session I/O, provider resilience). The mix of closed PRs indicates a healthy cadence of bug‑fixes and minor feature roll‑outs, while open PRs and issues point to ongoing work on documentation, edge‑device support, and multi‑channel streaming.

---

### 2. Releases
**None** – the repository currently has no new version tags released.

---

### 3. Project Progress (Merged / Closed PRs Today)

| # | Title | Category | Core Impact |
|---|-------|----------|--------------|
| **5676** | `feat(cli): add attach‑only Desktop target selection` | CLI | Enables per‑invocation Desktop target choice without breaking existing `nanobot`/`nanobot webui` installs. |
| **5690** | `docs: unify personal‑agent installation with quick‑start` | Docs | Aligns the personal‑agent guide with the Quick‑Start installer, simplifying onboarding. |
| **5689** | `fix(webui): keep working timer consistent across first output` | UI | Stabilises the “Working for X s” countdown when server/browser clocks diverge. |
| **5688** | `fix(memory): invalidate provider state after idle compaction` | Memory | Guarantees that idle compaction does not retain stale provider history. |
| **5685** | `fix(webui): resume incomplete model setup in the browser` | UI | Preserves first‑run model configuration within the WebUI instead of forcing a terminal wizard. |
| **5684** | `docs: refresh README with current WebUI feature gallery` | Docs | Updates the project README with an up‑to‑date visual tour of the browser workbench. |
| **5504** | `fix(ui): surface model retry status (NAN‑34)` | UI | Publishes retry lifecycle events to WebSocket clients and renders countdowns in the TUI/WebUI. |

These merges close several UI/UX bugs, improve the installer experience, and tighten memory/provider consistency, indicating a focus on reliability and developer experience.

---

### 4. Community Hot Topics (Most‑Commented / Most‑Viewed)

* **#5567 – “飞书渠道应整合多轮回复为单条流式卡片消息”** *(HKUDS/nanobot Issue #5567)*  
  *Comments:* **5** | *Reaction:* 0 | *Status:* Open  
  *Summary:* Seeks to consolidate multiple assistant messages (tool prompts, progress, final replies) into a single streaming CardKit for the Feishu channel, preserving the 1‑to‑1 user → agent message mapping.  
  *Why it matters:* The community is experiencing a fragmented chat experience on a key enterprise chat platform, degrading usability. A fix would improve the out‑of‑the‑box Feishu integration.

* **#5693 – “建议：支持Ultra‑lightweight, open‑source, self‑hosted person，适配无人零售/IoT场景”** *(HKUDS/nanobot Issue #5693)*  
  *Comments:* 0 | *Reaction:* 0 | *Status:* Open (new)  
  *Summary:* Proposes ultra‑lightweight, self‑hosted personas for unmanned retail and IoT edge scenarios, requesting lighter deployment options, Chinese documentation, and examples.  
  *Why it matters:* Signals emerging demand for NanoBot on resource‑constrained hardware, hinting at a future “edge‑persona” product line.

Both items are the most‑commented artifacts in the past 24 h, representing a mix of immediate UX pain (Feishu) and strategic roadmap direction (edge/IoT).

---

### 5. Bugs & Stability (Issues & Fixes Reported Today)

| Issue / PR | Severity* | Description |
|-----------|----------|-------------|
| **#5675** *(fix(providers): allow model failover after runner deadlines)* | **High** | A hanging primary model exhausts the runner’s deadline before a fallback provider can be invoked, causing a lost retry. |
| **#5692** *(fix(tools): support recursive glob filters in file searches)* | Medium | Recursive glob patterns (`**`) were treated as single‑segment wildcards, missing nested files in `find_files` and `grep`. |
| **#5580** *(fix(session): move persistence off event loop)* | Medium | Slow session storage blocked the event loop; now dispatched via `nanobot.session.io.call`. |
| **#5630** *(fix(agent): add size guardrails to Dream memory files and requests)* | Medium | Unbounded growth of `SOUL.md`/`USER.md`/`memory/MEMORY.md` could flood deployments. |
| **#5611** *(feat(agent): bound reasoning replay to the latest assistant turn)* | Low‑Medium | Unbounded replay of past reasoning consumed token budget; now capped. |
| **#5662** *(feat(providers): send x‑opencode‑session header for OpenCode session)* | Low | Missing header caused OpenCode Zen/Go to lose prompt‑cache optimisation and error after 2026‑09‑06. |
| **#5691** *(fix(webui): preserve multiline dollar math with attached delimiters)* | Low | Inline math with line‑breaks and $$ delimiters incorrectly rendered; now preserved. |
| **#5686** *(fix(cron): defer timer rearming while jobs execute)* | Low | Cron callbacks editing the job store could cause timer cancellation and `CancelledError`. |
| **#5625** *(fix(ui): surface model retry status)* | Low‑Medium | Added retry countdown and WebSocket events for model retry UI. |

\*Severity based on impact to user experience, performance, or data integrity.

All identified bugs already have fix PRs open (except #5675 which is still open). The backlog shows a relatively low defect density compared to the volume of changes.

---

### 6. Feature Requests & Roadmap Signals

| PR / Issue | Category | Likelihood of Near‑Term Inclusion |
|------------|----------|-----------------------------------|
| **#5602 / #5547** – *Turn‑completion notification sound* (WebUI) | UI/UX | **High** – two parallel PRs already implement the feature; only need merging. |
| **#5607** – *Add AnySearch provider (key‑optional, anonymous quota)* | New Provider | **Medium** – follows the Serper pattern; needs final review. |
| **#5628** – *macOS Seatbelt sandbox backend* | Sandbox/Exec | **Medium** – adds a native sandbox option for macOS. |
| **#5693** – *Ultra‑lightweight persona for unmanned retail/IoT* | Edge/IoT | **Low‑Medium** – a strategic request; will require a new persona profile and possibly a separate lightweight build. |
| **#5567** – *Consolidated Feishu streaming Card* | Channel Integration | **Medium** – directly addresses a user experience gap; fix likely in the next Feishu‑channel update. |
| **#5690** – *Unified personal‑agent installation* | Docs/Installer | **High** – already merged; reflects a UI improvement rather than a new feature. |

Overall, the roadmap is tilting toward richer real‑time feedback (sounds, retry UI), stronger platform integration (OpenCode headers, macOS sandbox), and preparation for edge/IoT deployments.

---

### 7. User Feedback Summary

* **Feishu channel fragmentation** – Users report receiving multiple discrete messages (tool prompts, progress, final replies) instead of a single fluid reply, degrading the conversational feel on an important enterprise platform. The community is actively seeking consolidation into a single streaming CardKit message.

* **Edge/IoT deployment request** – A new contributor highlights the potential of an ultra‑lightweight, self‑hosted persona for unmanned retail and IoT kiosks, asking for lighter runtimes, Chinese documentation, and example scenarios. This points to a nascent market segment that NanoBot could capture.

* **Documentation & onboarding** – Recent merges (personal‑agent guide unification, README refresh) show that users previously struggled with divergent installation paths. The community’s satisfaction is improving as the documentation converges.

* **Performance & stability** – Fixes around session I/O, memory sizing, and provider failover indicate that users have been experiencing occasional stalls and runaway memory growth. The steady stream of related PRs suggests these pain points are being addressed.

---

### 8. Backlog Watch (Important, Long‑Unanswered)

| Item | Age (days) | Current State | Why It Needs Attention |
|------|------------|---------------|------------------------|
| **#5567** – Feishu streaming consolidation | ~33 (since 2026‑08‑27) | 5 comments, no fix yet | Direct UX blocker for enterprise users; a relatively simple refactor of the Feishu channel could unlock a major experience improvement. |
| **#5693** – Ultra‑lightweight persona / IoT support | <1 day (created 2026‑09‑08) | 0 comments, no PR | Early strategic request; if nurtured now, it can shape a new product line and community contribution. |
| **#5607** – AnySearch provider (web‑search) | ~30 (since 2026‑08‑30) | Open, 0 comments | Adds another anonymous‑quota search option; valuable for users who need keyless search. |
| **#5628** – macOS Seatbelt sandbox | ~35 (since 2026‑08‑30) | Open, 0 comments | Provides native macOS security hardening; useful for enterprise/macOS‑only deployments. |
| **#5662** – OpenCode `x‑opencode‑session` header | ~27 (since 2026‑08‑31) | Open, 0 comments | Critical for OpenCode prompt‑cache; missing this header can break deployments after 2026‑09‑06. |

These items span both immediate feature work (Feishu, OpenCode header) and longer‑term strategic levers (edge persona, AnySearch). Maintaining momentum on them will keep NanoBot competitive in enterprise chat, developer tooling, and emerging edge markets.

---

**Overall Health Assessment:**  
NanoBot is in a strong maintenance window, delivering stability fixes and UI improvements. The community is vocal about two key fronts—channel UX (Feishu) and edge/IoT readiness—suggesting clear opportunities for the next release cycle. Continued attention to the backlog items, especially the Feishu streaming request and the OpenCode header, will directly improve user satisfaction and keep platform integrations robust.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-08

## 1. Today's Overview
Hermes Agent shows high development velocity with 50 issues and 50 PRs updated in the last 24 hours. A new patch release **v0.21.1** (v2026.9.7) rolled up changes from main since v0.21.0. The project carries 44 open/active issues and 47 open PRs, indicating a healthy contributor pipeline but a growing backlog that requires triage. Activity spans gateway stability, desktop reliability, cross-platform delivery, and memory system improvements.

## 2. Releases
**v0.21.1 (v2026.9.7)** — Patch release dated September 7, 2026. Rolls up current `main` since v0.21.0 for tagged deployments and downstream consumers. Measured at commit `6178e9f4eed8d99f4fc550add939d58c7bed6206`. No breaking changes noted; intended as a stability/consolidation tag.

## 3. Project Progress
**Merged/Closed (3 PRs):**
- `#105493` — TUI redo chord fixed case-insensitively (Cmd+Shift+Z on extended-key terminals)
- `#105488` — WhatsApp `qs` dependency bumped to 6.16.0 (security DoS advisories)
- `#105465` — (closed duplicate) Desktop UI language reset

**Key active PRs:**
- `#105007` — Gate external delivery on session persistence (P0 session integrity)
- `#103565` — Persist pre-flushed user context by exact row identity (P0, fixes #102194)
- `#105492` — Bot Chat delivery uses recipient project context
- `#105491` / `#105489` — Opt-in env var to silence Qdrant insecure-connection warning
- `#40716` — Korean locale for desktop (long-running, still open)

## 4. Community Hot Topics
| Issue | Comments | Topic |
|-------|----------|-------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 175 | Skills index stale/degraded (29.8h old, limit 26h) |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 27 | Bot Group Chats survive Desktop close |
| [#90663](https://github.com/NousResearch/hermes-agent/issues/90663) | 12 | TUI Shift+letter lowercased on Ghostty macOS |

**Analysis:** #66616's 175 comments indicate deep community reliance on the Skills Hub; the automated freshness probe is a critical path concern. #97681 reflects user demand for true multi-device continuity. The TUI input bug (#90663) is a macOS-specific regression affecting developer ergonomics.

## 5. Bugs & Stability (Ranked by Severity)

**P0/P1 — Critical:**
- [#52261](https://github.com/NousResearch/hermes-agent/issues/52261) — Local MLX/oMLX 400s misclassified as `context_overflow`, triggering destructive compress/reset loop (P1, open since Jun 25)
- [#101060](https://github.com/NousResearch/hermes-agent/issues/101060) — `message_agent` reports sent but DMs silently lost between local profiles (P1, closed but may need verification)
- [#99956](https://github.com/NousResearch/hermes-agent/issues/99956) — Cron bot-chat delivery fails with active session lock (P1, closed)

**P2 — High:**
- [#105471](https://github.com/NousResearch/hermes-agent/issues/105471) — Gateway `_send_with_retry` resends plain-text fallback after timeout
- [#94613](https://github.com/NousResearch/hermes-agent/issues/94613) — Install & Update E2E failing since Aug 13 (sandbox MITM proxy SSL storm)
- [#80625](https://github.com/NousResearch/hermes-agent/issues/80625) — Desktop SSH remote backend fails with Fish shell
- [#99286](https://github.com/NousResearch/hermes-agent/issues/99286) — Desktop shows half real context window (131K vs 262K) for custom providers
- [#105469](https://github.com/NousResearch/hermes-agent/issues/105469) — Desktop approval.respond fails closed on multi-profile installs

**P3 — Medium:**
- [#105145](https://github.com/NousResearch/hermes-agent/issues/105145) — Windows `hermes update` reports FAILED (exit 8) after success
- [#105383](https://github.com/NousResearch/hermes-agent/issues/105383) — ACP model picker missing in Zed 1.18+
- [#105465](https://github.com/NousResearch/hermes-agent/issues/105465) — Desktop UI language resets to English after update
- [#97110](https://github.com/NousResearch/hermes-agent/issues/97110) — TTS safe-root denials mislabeled

**Fix PRs exist for:** #105471, #105492, #105494, #104758, #105495, #105493, #100251, #104061 — indicating active remediation.

## 6. Feature Requests & Roadmap Signals
- **Korean locale** (#40716) — Open since Jun 2026, PR still active; i18n expansion signal
- **Streaming TTS first-sentence tuning** (#105235) — Fresh (Sep 7), addresses UX friction in short responses
- **Per-call model/reasoning overrides on delegate_task** (#80222) — P2, needs decision; power-user flexibility
- **Guided picker for Subagent Model+Provider** (#67347) — P3, improves Desktop/Dashboard config UX
- **Telegram /resume cross-source sessions** (#41220) — Multi-device continuity request
- **Composer suggestion visibility** (#102897) — Desktop personalization
- **Slash-command namespace prefix** (#66163) — Multi-gateway workspace collision avoidance

**Prediction:** Korean locale (#40716) and composer suggestion visibility (#102897) are furthest along and likely for next minor. Streaming TTS tuning (#105235) is small and may ship quickly.

## 7. User Feedback Summary
**Pain Points:**
- Desktop stability on Windows (update failures, AppHangB1, language reset)
- Skills index staleness undermining Hub reliability
- Message delivery loss in multi-profile/Bot Chat scenarios
- TUI input corruption on macOS terminals
- Context window misconfiguration for local providers

**Positive Signals:**
- Active PR throughput (50 PRs in 24h) shows healthy contributor base
- Security responsiveness (WhatsApp `qs` bump, CVE fixes)
- Memory system modernization (Qdrant warning opt-in, OpenViking timeout logging)

**Use Cases Evident:** Multi-device bot orchestration, local inference on limited hardware, enterprise Telegram/Slack integration, persistent long-running sessions.

## 8. Backlog Watch
Items needing maintainer attention:
1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** — Skills index freshness (175 comments, degraded since Jul 18) — highest community engagement
2. **[#52261](https://github.com/NousResearch/hermes-agent/issues/52261)** — MLX/oMLX 400→destructive compress loop (P1, open 2+ months)
3. **[#94613](https://github.com/NousResearch/hermes-agent/issues/94613)** — E2E Install & Update broken since Aug 13 (sandbox MITM proxy)
4. **[#40716](https://github.com/NousResearch/hermes-agent/pull/40716)** — Korean locale PR, 3+ months open without merge
5. **[#80222](https://github.com/NousResearch/hermes-agent/issues/80222)** — Per-call delegate overrides (P2, needs decision)
6. **[#105469](https://github.com/NousResearch/hermes-agent/issues/105469)** — Multi-profile approval.respond failure (fresh, P2)

---

**Overall Health:** Active development with strong PR throughput, but stability regressions in Desktop (Windows/macOS) and the skills index pipeline require prioritization. The community is engaged and providing detailed reproductions, which is positive for long-term quality.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest**
*Date: 2026-09-08*

### 1. Today's Overview
On 2026-09-08, the PicoClaw project exhibited moderate development activity with zero new releases and no PRs merged or closed in the last 24 hours. While 5 open PRs received updates, the lack of merged closures suggests the maintainers may be in an active review or testing phase. The project's issue tracker is currently dominated by a single, highly-upvoted bug report regarding QQ channel authentication failures. Overall, project health shows continuous feature expansion by community contributors, though a bottleneck in merge velocity is apparent.

### 2. Releases
There are **no new releases** for this period. 

### 3. Project Progress
*   **OpenPRs Updated:** 5 Pull Requests received updates today, though none were merged or closed. 
*   **New Contribution:** [PR #3371](https://github.com/sipeed/picoclaw/pull/3371) (OpenCode Go provider) was created today, adding a dedicated provider for OpenCode Go with per-model routing and `x-opencode-session` header support. 
*   **Ongoing Features:** [PR #3344](https://github.com/sipeed/picoclaw/pull/3344) (Build Remote Agent phone pairing), [PR #3354](https://github.com/sipeed/picoclaw/pull/3354) (IRCv3 multiline messages), and [PR #3353](https://github.com/sipeed/picoclaw/pull/3353) (Tool feedback animation fix) were all updated on 09-07, indicating active iteration on multi-platform and UI features.

### 4. Community Hot Topics
*   **Issue [#3365](https://github.com/sipeed/picoclaw/issues/3365):** The most active and upvoted item (1 👍, 1 comment). It details a critical 401 authorization failure on the QQ channel. 
*   **Underlying Need:** This highlights the community's reliance on diverse messaging platforms and their frustration when dependency updates (botgo v0.2.1 + resty v2.17) break existing integrations without backward compatibility.

### 5. Bugs & Stability
*   **High Severity - QQ Channel 401 Failure [Issue #3365](https://github.com/sipeed/picoclaw/issues/3365):** Users running on aarch64 devices (e.g., Orange Pi 3B) are experiencing authorization parameter format errors when using the QQ channel. The root cause is identified as a breaking change or incompatibility between `botgo v0.2.1` and `resty >= v2.17`. 
*   **Stability Note:** No fix PR for this specific bug is currently in the updated PR queue, making it an active blocker for QQ channel users. 

### 6. Feature Requests & Roadmap Signals
*   **Provider Ecosystem Expansion:** The recent surge in provider-related PRs ([PR #3370](https://github.com/sipeed/picoclaw/pull/3370) for Keenable web search, [PR #3371](https://github.com/sipeed/picoclaw/pull/3371) for OpenCode Go) signals a strong roadmap focus on decoupling PicoClaw from hardcoded AI providers and fostering a plug-and-play ecosystem. 
*   **Multi-Platform & UI Refinements:** The persistence of [PR #3344](https://github.com/sipeed/picoclaw/pull/3344) (phone spectating) and [PR #3354](https://github.com/sipeed/picoclaw/pull/3354) (IRC multiline) indicates upcoming support for richer client interactions and messaging protocols.
*   **Prediction:** The next version will likely feature an expanded, decoupled provider architecture and improved lifecycle management for channel UI elements.

### 7. User Feedback Summary
*   **Real Pain Points:** Dependency resolution is a major friction point. As evidenced by Issue #3365, minor updates in transitive dependencies (like resty) can cause immediate runtime failures in production channels (QQ). 
*   **Use Cases:** Users are deploying PicoClaw on diverse hardware (ARM devices like Orange Pi 3B) and utilizing it as a multi-functional hub across IRC, QQ, and custom web search tools. 
*   **Satisfaction/Dissatisfaction:** Satisfaction remains high due to active community contributions (5 PRs updated), but dissatisfaction is present regarding dependency lock-step failures that break channel connectivity without immediate maintainer patches.

### 8. Backlog Watch
*   **Stalled PRs:** [PR #3344](https://github.com/sipeed/picoclaw/pull/3344), [PR #3353](https://github.com/sipeed/picoclaw/pull/3353), and [PR #3354](https://github.com/sipeed/picoclaw/pull/3354) are all tagged `[stale]` and have been open since late August (8/23 and 8/31). They have not been merged despite recent updates.
*   **Unresolved Bug:** [Issue #3365](https://github.com/sipeed/picoclaw/issues/3365) requires immediate maintainer attention to pin dependencies or patch the botgo/resty interaction before it cascades into broader channel reliability concerns.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-08

---

## 1. Today's Overview

NanoClaw shows healthy development velocity on 2026-09-08, with **28 PRs updated** and **17 merged or closed** in the last 24 hours, contrasted against only **2 open issues** with no new issue creation. The absence of new releases (0 in the period) alongside a heavy closed-PR volume suggests a consolidation phase — the team appears to be landing a significant batch of infrastructure and quality-of-life changes accumulated over the preceding days. The project remains in active maintenance mode with a clear focus on stability, storage hygiene, and channel expansion.

---

## 2. Releases

**No new releases.** The project is between release cycles, with the most recent version being **2.1.53** (referenced in Issues #3735 and #3732). All merged PRs from the last 24h appear to be internal improvements, bug fixes, and CI enhancements rather than version-bumping deliverables.

---

## 3. Project Progress

### Merged/Closed PRs Today (key highlights):

| PR | Area | Description |
|---|---|---|
| [#3736](https://github.com/nanocoai/nanoclaw/pull/3736) | CI/DevOps | Added a `gate` job and post-merge run on `main` — ensures dependency failures aren't silently skipped |
| [#3737](https://github.com/nanocoai/nanoclaw/pull/3737) | Core/DB | Fixed race condition where the nested-continuation conformance test's watchdog timed out on PostgreSQL |
| [#3739](https://github.com/nanocoai/nanoclaw/pull/3739) | CI/Registry Skills | Added `registry gate` check for ruleset requirements and built resilience against Docker Hub 5xx errors |
| [#3518](https://github.com/nanocoai/nanoclaw/pull/3518) | Approvals/Infrastructure | Made approvals survive restarts via row-keyed resolution through the gateway-provider seam |
| [#3517](https://github.com/nanocoai/nanoclaw/pull/3517) | DB/Durable State | Dual-wrote all volatile coordination facts into durable rows alongside in-memory maps |
| [#3653](https://github.com/nanocoai/nanoclaw/pull/3653) | Core Architecture | Rolled up the full "durable host" line (#3508–#3528) — coordination state, wake seam, reconcile queue, restart-honest delivery, claim fencing |
| [#3661](https://github.com/nanocoai/nanoclaw/pull/3661) | Container/Infra | Fixed Bun install retry failure in container image builds |
| [#3400](https://github.com/nanocoai/nanoclaw/pull/3400) | Channels/Slack | Fixed typing status persisting long after reply delivery |
| [#1519](https://github.com/nanocoai/nanoclaw/pull/1519) | Task Scheduler | Prevented duplicate task runs, cleaned up orphaned `once` tasks, and hardened IPC (originally filed 2026-03-28 — **long-pending finally landed**) |

### Key Themes:
- **Durability/State Layer Completion**: The #3508→#3653 chain represents a major architectural milestone — moving from purely in-memory coordination to durable, restart-honest state.
- **CI Hardening**: Three CI-related PRs today (#3736, #3739, #3734) signal growing concern about pipeline reliability.
- **Scheduled Task Architecture**: Fixes for task accumulation and rotation are converging.

---

## 4. Community Hot Topics

### Most Active Items:

**Issue [#3735](https://github.com/nanocoai/nanoclaw/issues/3735)** — *"Conversations/Archives grow without bound"*
- **1 comment**, 0 👍. Author: TO-maschenborn
- Core problem: `archiveTranscriptFile()` appends markdown archives on every compaction with zero retention, rotation, or cap.
- **Underlying need**: Storage lifecycle management. As agent groups accumulate transcripts indefinitely, this becomes a production-critical issue for any fleet deployment.

**Issue [#3732](https://github.com/nanocoai/nanoclaw/issues/3732)** — *"Transcript rotation never runs for tasks keeping container alive"*
- **0 comments**, 0 👍. Author: TO-maschenborn
- `maybeRotateContinuation()` only triggers from `runPollLoop()` (once per container start). Tasks with recurrence shorter than the 30-min idle ceiling keep containers alive indefinitely — rotation never fires.
- **Underlying need**: Reliable session hygiene for scheduled/recurring tasks. This pairs directly with the storage concern in #3735.

**PR [#3743](https://github.com/nanocoai/nanoclaw/pull/3743)** — *"Add AgentMail email channel adapter"*
- Created today by billyshipp. Adds a fully-managed agent email inbox via `agentmail.to` API — no MX record ownership required.
- **Underlying need**: Communication channel diversity. Users want agents reachable via email without DNS complexity.

**PR [#3741](https://github.com/nanocoai/nanoclaw/pull/3741)** — *"Tasks: --fresh-session for stateless scheduled runs"*
- Author: slambert. Addresses the problem where scheduled jobs accumulate context, with one user reporting **15% cost growth in a single week**.
- **Underlying need**: Cost control and stateless execution for recurring automation.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 High Severity

| Issue/PR | Problem | Fix Status |
|---|---|---|
| [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) | Unbounded transcript archive growth — storage leak on all agent groups | **No fix PR yet** |
| [#3732](https://github.com/nanocoai/nanoclaw/issues/3732) | Transcript rotation silently skipped for persistent-container tasks | **No fix PR yet** |
| [#3742](https://github.com/nanocoai/nanoclaw/pull/3742) | `add-mount --ro` is a no-op; `--rw` cannot be expressed; `readonly` key omitted when flag absent | **Fix PR open** (#3742, by slambert) |

### 🟡 Medium Severity

| Issue/PR | Problem | Fix Status |
|---|---|---|
| [#3740](https://github.com/nanocoai/nanoclaw/pull/3740) | Bootstrap discards inbound routing completion — adapters may mark messages handled before mailbox writes fail | **Fix PR open** (#3740) |
| [#3737](https://github.com/nanocoai/nanoclaw/pull/3737) | Conformance test races its own watchdog on PostgreSQL (test infra issue) | **Fixed in #3737** (CLOSED) |
| [#3661](https://github.com/nanocoai/nanoclaw/pull/3661) | Bun install failure in container Dockerfile builds | **Fixed in #3661** (CLOSED) |

### 🟢 Low Severity / Cosmetic

| Issue/PR | Problem | Fix Status |
|---|---|---|
| [#3734](https://github.com/nanocoai/nanoclaw/pull/3734) | Competing CI label workflows accumulate duplicate classifications | **Fix PR open** (#3734) |
| [#3400](https://github.com/nanocoai/nanoclaw/pull/3400) | Slack typing indicator outlives delivered replies | **Fixed in #3400** (CLOSED) |

---

## 6. Feature Requests & Roadmap Signals

### Features Actively Advancing:

| Feature | PR/Issue | Signal |
|---|---|---|
| **AgentMail email channel** | [#3743](https://github.com/nanocoai/nanoclaw/pull/3743) | New channel adapter — likely ship in next release |
| **OpenCode provider skill** | [#3733](https://github.com/nanocoai/nanoclaw/pull/3733) | Self-contained provider skill for setup, recovery, debugging |
| **Fresh-session scheduled tasks** | [#3741](https://github.com/nanocoai/nanoclaw/pull/3741) | `--fresh-session` flag for stateless recurring jobs |
| **Community cell browser portal** | [#3729](https://github.com/nanocoai/nanoclaw/pull/3729) | Echo/Slack setup moved to browser with WorkOS SSO |
| **A2A communication reliability** | [#3719](https://github.com/nanocoai/nanoclaw/pull/3719), [#3718](https://github.com/nanocoai/nanoclaw/pull/3718) | Agent-to-agent failure reporting and sender identity preservation |
| **Build Remote Agent phone pairing** | [#3494](https://github.com/nanocoai/nanoclaw/pull/3494) | `gbr/1` protocol for phone spectating desktop agents |

### Roadmap Prediction:
The next NanoClaw version will likely include: (1) durable state layer (#3653 rollup), (2) scheduled task statelessness (`--fresh-session`), (3) AgentMail channel, and (4) A2A reliability improvements. The durable-host architecture is clearly the foundation the team is building on.

---

## 7. User Feedback Summary

### Real Pain Points (from issue/PR data):

1. **"My scheduled job's conversation grew 15% in one week"** — User reports compounding storage costs from accumulation of prior task context. This is a direct monetizable pain point for hosted deployments.
2. **"Archives grow without bound — nothing ever removes them"** — Fleet operators are confronting unbounded storage. This is a production-critical concern, not a cosmetic one.
3. **"Read-write mount can't be expressed"** — Users configuring container mounts are hitting silent misbehavior where `--ro` does nothing.
4. **"Slack typing indicator outlives the reply"** — Channel UX degradation where stale typing states confuse users.
5. **"A2A messages arrive with wrong sender identity"** — Agent-to-agent trust model is broken; receivers refuse legitimate messages.

### Satisfaction Indicators:
- **Positive**: The team is shipping significant infrastructure work (durable host, approvals survival, IPC hardening) — signals a maturing product.
- **Negative**: Storage and lifecycle management issues are piling up faster than they're being fixed. Users on fleets are clearly frustrated with unbounded growth.

---

## 8. Backlog Watch

### Items Needing Maintainer Attention:

| Item | Age | Why It Needs Attention |
|---|---|---|
| [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) — Unbounded archives | 1 day old | **Critical**: Active storage leak affecting all deployments. No fix PR yet despite being flagged by an operator. |
| [#3732](https://github.com/nanocoai/nanoclaw/issues/3732) — Transcript rotation skip | 1 day old | **Critical**: Directly related to #3735; rotation mechanism broken for persistent containers. |
| [#3494](https://github.com/nanocoai/nanoclaw/pull/3494) — Build Remote Agent phone pairing | 16 days old (opened 2026-08-23) | **Stale**: Long-pending PR with no recent activity despite being tagged for merge. May need maintainer review or rebase. |
| [#3719](https://github.com/nanocoai/nanoclaw/pull/3719) — A2A communication failure reporting | 4 days old | **Stalled**: Fix PR exists but hasn't been reviewed/merged despite being part of a core-team area. |
| [#3718](https://github.com/nanocoai/nanoclaw

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026‑09‑08**

---

### 1. Today's Overview
The project shows minimal activity on 2026‑09‑08: no issues were opened, closed, or updated in the past 24 h, and there are no new releases. The only change log entry is a Dependabot‑generated pull request that updates the Alpine base image in the Docker‑images dependency group from version 3.23 to 3.24. With no user‑facing work in progress, the repository remains in a stable, low‑turnover state.

### 2. Releases
**None** – No new releases were published in the last 24 h.

### 3. Project Progress
- **Merged / Closed PRs today:** None.  
- **Active work:** The only open PR is **dependabot[bot] #956** (see link below), which is a routine dependency upgrade and has not been merged yet. No features or bug fixes advanced today.

### 4. Community Hot Topics
- **Issues / PRs with the most engagement:** None.  
- **Analysis:** With zero comments or reactions on any issue or pull request, there are no visible community discussions or immediate user concerns at this time.

### 5. Bugs & Stability
- **Bugs / Regressions reported today:** None.  
- **Severity ranking:** Not applicable – no bug reports were logged.

### 6. Feature Requests & Roadmap Signals
- **User‑requested features today:** None.  
- **Roadmap implication:** The absence of feature‑request activity suggests the community is currently focused on maintenance rather than new capabilities.

### 7. User Feedback Summary
- **Pain points / Use cases captured today:** None detected.  
- **Satisfaction / Dissatisfaction:** No explicit user feedback is reflected in the recent activity log.

### 8. Backlog Watch
- **Items needing maintainer attention:**  
  - **#956 – CI(deps): bump Alpine from 3.23 → 3.24** – Open since 2026‑06‑15, last updated 2026‑09‑07. This is a low‑risk, automated dependency update that should be reviewed and merged to keep the Docker images up‑to‑date. No other unanswered issues or PRs are pending.

**Key Takeaway:** The NullClaw repository is currently in a quiet maintenance phase. The only actionable item is the pending Dependabot PR #956, which, once merged, will keep the Docker base image current with minimal risk. No urgent bugs, feature requests, or community discussions require immediate attention.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-08

**Repository:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Today's Overview

IronClaw shows light but focused activity on 2026-09-08: 1 issue updated and 5 PRs updated, with zero new releases and zero merged PRs. All 5 active PRs remain open in review — none have been landed yet, indicating a deliberate review/gate process. The single updated issue is a diagnostic/failure-taxonomy report, suggesting the project is in a quality-analysis phase rather than a feature-spike phase. Overall project health is stable; throughput is moderate with an emphasis on correctness over velocity.

---

## 2. Releases

**None.** No new version tags or release notes in the last 24h.

---

## 3. Project Progress

All 5 PRs are open (0 merged/closed today):

| PR | Summary | Size | Risk |
|----|---------|------|------|
| [#8071](https://github.com/nearai/ironclaw/pull/8071) | Preserve command result card height in transcript flex column | XS | low |
| [#8070](https://github.com/nearai/ironclaw/pull/8070) | Align slash-command metadata with responsive grid | XS | low (docs) |
| [#8069](https://github.com/nearai/ironclaw/pull/8069) | Add dismiss actions to command result cards (M) | M | low |
| [#8068](https://github.com/nearai/ironclaw/pull/8068) | Keep active slash command visible during navigation | S | low (docs) |
| [#8076](https://github.com/nearai/ironclaw/pull/8076) | Distinguish disconnected shared channels | — | — |

**Trend:** Four of five PRs are UI/UX fixes clustered around the webui slash-command experience, authored by `italic-jinxin`. PR #8076 (disconnected shared channels) is the only non-webui item. No PRs merged — review is still in progress.

---

## 4. Community Hot Topics

- **Issue [#8081](https://github.com/nearai/ironclaw/issues/8081)** — Daily ironclaw failure taxonomy (0 comments, 0 👍). Analyzes 42 OfficeQA non-pass failures as genuine model-quality numeric errors from DeepSeek-V4-Flash. Low engagement but high diagnostic value — signals the maintainers are tracking benchmark regressions systematically.
- **PRs [#8071, #8070, #8069, #8068](https://github.com/nearai/ironclaw/pulls)** — WebUI command-card polish batch (all by `italic-jinxin`). No comments yet, but grouped size/xs/s labels suggest coordinated review.

Underlying need: users want a more robust, readable command-result UX and clearer failure signal attribution.

---

## 5. Bugs & Stability

- **Bug signal:** [#8081](https://github.com/nearai/ironclaw/issues/8081) — 42 OfficeQA failures, classified as model-quality numeric errors (not infra flakiness). No fix PR attached yet; this is a taxonomy/diagnostic issue.
- **No crashes, regressions, or critical bugs reported today.**
- **Severity ranking:** Low (model-quality errors only; no user-facing crash or data loss).

---

## 6. Feature Requests & Roadmap Signals

- Dismissible command-result cards ([#8069](https://github.com/nearai/ironclaw/pull/8069)) — likely to ship next if review approves; addresses UX clutter.
- Disconnected shared-channel handling ([#8076](https://github.com/nearai/ironclaw/pull/8076)) — may indicate upcoming multi-user/shared-workspace work.
- Slash-command visibility/alignment fixes ([#8068](https://github.com/nearai/ironclaw/pull/8068), [#8070](https://github.com/nearai/ironclaw/pull/8070)) — suggest the slash-command surface is a current roadmap focus.

**Prediction:** Next release likely bundles the webui command-card batch + #8076 channel fix.

---

## 7. User Feedback Summary

No direct user comments/reactions today (0 👍, 0 comments on issue/PRs). Indirect signals:
- Pain point: command result cards collapse/shrink in transcript (#8071) — usability friction.
- Pain point: slash-command metadata misalignment (#8070) — discoverability issue.
- Pain point: disconnected shared channels unclear (#8076) — confusion about channel pairing state.
- Satisfaction proxy: active diagnostic issue (#8081) implies trust in the project's failure-tracking.

---

## 8. Backlog Watch

- **Issue [#8081](https://github.com/nearai/ironclaw/issues/8081)** — Created 2026-09-07, 0 comments, no linked PR. Needs maintainer triage to convert taxonomy into actionable model-quality bugs.
- **PRs #8071/#8070/#8068/#8069** — All open since 2026-09-04 (4+ days). XS/S-sized PRs stuck in review; recommend maintainer turnaround to avoid stagnation.
- **PR #8076** — Open since 2026-09-06, no comments — needs review attention for the channel-disconnect logic.

---

**Health flag:** Zero merged PRs + zero releases in 24h is normal for a cautious review gate, but 4-day-old small PRs unmerged warrant a maintainer nudge. Project is stable, diagnostics are active, and the UI polish batch is ready to land.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## **Today's Overview**  
LobsterAI logged **no new releases** on 2026‑09‑08, but the repository remained active with **8 PR updates** (6 merged/closed, 2 still open). Issue activity was flat (0 open/active, 0 closed). The day’s activity reflects a focus on bug‑fixes and maintenance rather than new features, indicating a stable but still evolving codebase.

## **Releases**  
*None* – No version tags or published releases were added today.

## **Project Progress – Merged / Closed PRs (6)**  
| # | Title | Author | Core Changes | Link |
|---|-------|--------|--------------|------|
| **2620** | *fix(installer): use modern CJK UI fonts in NSIS dialogs* | fisherdaddy | Overrode NSIS baked CJK fonts with Windows 10+ system UI fonts per locale via `SetFont /LANG`. Guarded with `!ifdef` so installer language narrowing still compiles. | https://github.com/netease-youdao/LobsterAI/pull/2620 |
| **2623** | *feat(library): 支持任务优先排序与网格分组折叠* | liugang519 | Added task‑priority sorting & grid grouping collapse: grouped artifacts by latest update, unified pagination, independent task‑group paging, improved session change notifications, protocol/cursor validation, accessibility & UI polish, fixed macOS dev‑mode gateway Dock icon, added regression tests & docs. | https://github.com/netease-youdao/LobsterAI/pull/2623 |
| **2621** | *fix(browser): resolve in‑app element refs and preserve tool error details* | btc69m979y‑dotcom | Fixed OpenClaw `scrollIntoView` passing snapshot element as a string → resolved to DOM element, preventing a `TypeError` error banner in the browser. | https://github.com/netease-youdao/LobsterAI/pull/2621 |
| **2622** | *fix(openclaw): 修复网关子进程的 Node 模式继承* | liugang519 | Unified gateway child‑process spawning to run in Node mode, ensuring environment inheritance; abort `postinstall` on patch failure; added start‑param, env‑inherit, and exception‑exit tests. | https://github.com/netease-youdao/LobsterAI/pull/2622 |
| **2617** | *fix(browser): improve in‑app login and tab controls* | btc69m979y‑dotcom | Made saved‑login feedback dismissible & cleared on navigation/tab change; kept credential settings open after adding; replaced page dropdown with scrollable tab strip, adjacent‑tab close selection, and a new blank‑tab action preserving current page. | https://github.com/netease-youdao/LobsterAI/pull/2617 |
| **2619** | *test: fix Windows path portability in installer and thumbnail tests* | btc69m979y‑dotcom | Fixed 4 Windows acceptance test failures after merging main into the v2026.8.1 upgrade branch: synchronised macOS installer test path semantics and corrected thumbnail‑queue priority test. | https://github.com/netease-youdao/LobsterAI/pull/2619 |

## **Community Hot Topics**  
- **No PR or issue has recorded reactions/comments today (all show “undefined”).**  
- The most *functionally* complex PR (**#2623**) touches UI, data handling, and testing, suggesting it likely attracted the most community interest despite the lack of visible metrics.  
- **Key links** for reference: #2620, #2623, #2621, #2622, #2617, #2619.

## **Bugs & Stability (Ranked by Impact)**  
1. **Windows installer text rendering** (PR #2620) – Visual quality issue; could affect user experience on high‑DPI Windows machines.  
2. **OpenClaw in‑app element reference error** (PR #2621) – Produced an uncaught `TypeError` and an error banner; a functional crash‑like bug.  
3. **Gateway Node‑mode inheritance** (PR #2622) – Risk of environment mismatches causing runtime failures.  
4. **Browser login UI/UX glitches** (PR #2617) – Non‑dismissible feedback and poor tab management; usability friction.  
5. **Windows path portability in tests** (PR #2619) – Test failures that could mask real‑world installer issues on Windows/macOS cross‑platform builds.  

All identified bugs have corresponding fix PRs merged.

## **Feature Requests & Roadmap Signals**  
- **Task‑priority sorting & grid grouping collapse** (PR #2623) – A user‑requested library enhancement now shipped, indicating a trend toward richer artifact organization.  
- **OpenClaw session auto‑creation stop** (PR #1067, open) – Community pain‑point: unwanted `[OpenClaw]` Cowork sessions re‑appearing after deletion. Resolution pending.  
- **Electron dependency upgrades** (PR #1277, open) – Dependabot’s automated bump to Electron 44.2.0; awaiting maintainer review, potentially delivering newer browser features and security updates.  

These items suggest the roadmap will prioritize UI/organizational improvements and runtime stability.

## **User Feedback Summary**  
- **Windows installer UI:** Users complained about jagged CJK text on installers; fixed by swapping to modern system fonts.  
- **OpenClaw runtime:** Users observed automatic `[OpenClaw]` Cowork sessions re‑appearing after manual deletion, causing friction; fix (PR #1067) is open.  
- **Browser login flow:** Saved‑login alerts were non‑dismissible and persisted across navigation; now clearable and keep settings open.  
- **Tab management:** Users wanted a smoother tab switching experience; resolved with a scrollable tab strip and adjacent‑tab close logic.  
- **Cross‑platform installer tests:** Developers noted Windows/macOS path handling discrepancies; corrected in test suite (PR #2619).  

Overall satisfaction appears to be improving thanks to targeted bug‑fixes, though the auto‑session issue still lingers.

## **Backlog Watch – Open PRs Requiring Attention**  
1. **#1277 – chore(deps‑dev): bump Electron group** (`dependabot[bot]`) – Open since 2026‑04‑02; includes updates to Electron (40.2.1 → 44.2.0) and electron‑builder. Awaiting review and merge to incorporate the latest Electron stability and feature improvements.  
2. **#1067 – fix(openclaw): stop auto‑creating [OpenClaw] session for main agent heartbeat** – Open since 2026‑03‑30; labeled *stale*. Removes three calls to `resolveOrCreateMainAgentSession()` to prevent unwanted Cowork session generation. Should be prioritized to eliminate a recurring annoyance for OpenClaw users.  

Both PRs are low‑complexity but high‑impact to user experience and should be merged soon to clear the backlog.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-08

### 1. Today's Overview
Moltis is currently experiencing a low-activity development cycle, characterized by zero new issues, zero releases, and only a single updated pull request in the last 24 hours. The project's immediate focus appears to be concentrated entirely on resolving a specific cron scheduling anomaly rather than broad feature development or community-driven bug reporting. With no open issues or active releases, the project's external feedback loop has cooled, leaving maintainer review of the lone open PR as the primary operational task for today.

### 2. Releases
*   **No new releases.** The project has not published any new versions in the last 24 hours.

### 3. Project Progress
*   **Merged/Closed PRs:** 0
*   **Open PRs Updated:** 1
*   **[#1262](https://github.com/moltis-org/moltis/pull/1262)** *fix(cron): treat active_hours end="24:00" as end-of-day* (by @atirna)
    *   **Status:** Open
    *   **Progress:** This pull request advances the project's cron scheduling capabilities by addressing a critical parsing flaw. The PR remains unmerged and awaits maintainer review.

### 4. Community Hot Topics
*   **PR [#1262](https://github.com/moltis-org/moltis/pull/1262)** is the sole point of community interaction today. 
*   **Analysis:** While there are no open issues to gauge broader community sentiment, this PR highlights a significant underlying need: users and contributors expect standard time conventions (like `24:00` to represent midnight) to function seamlessly. The bug reveals that the current cron module lacks native support for end-of-day boundaries, forcing the system into a fail-open state. This indicates a strong demand for more intuitive and resilient time-boundary handling in scheduling features.

### 5. Bugs & Stability
*   **Bug: Cron `active_hours` fails to parse `end="24:00"` (Severity: High)**
    *   **Details:** The `is_within_active_hours` function parsed the `end` parameter before checking for its own `"24:00"` special case. Because chrono's `%H` formatter rejects hour 24, the parse failed. This triggered the invalid-config fail-open mechanism, which defaulted the schedule to always-active at every hour.
    *   **Impact:** This completely bypasses the intended cron scheduling logic, causing tasks meant to run during specific business hours to run 24/7.
    *   **Status:** A fix PR ([#1262](https://github.com/moltis-org/moltis/pull/1262)) has been opened to resolve this stability issue.

### 6. Feature Requests & Roadmap Signals
*   **No explicit feature requests.** The issue tracker is currently empty.
*   **Implicit Signal:** The bug fix in [#1262](https://github.com/moltis-org/moltis/pull/1262) signals a roadmap necessity for the `cron` module: the implementation of native, fail-safe time boundary parsing. Moving forward, the project should ensure that date-time parsing logic robustly handles standard edge cases without relying on fail-open defaults that compromise system security and scheduling accuracy.

### 7. User Feedback Summary
*   **Direct Feedback:** None available in the last 24 hours (0 issues, 0 comments).
*   **Pain Points/Use Cases:** While not explicitly reported today, the existence of PR #1262 reveals that real-world users are attempting to configure `active_hours` using the documented default of `end = "24:00"`. The fact that this breaks the system indicates a prior gap between documentation and actual software behavior, causing user frustration and unintended always-active task execution.

### 8. Backlog Watch
*   **PR [#1262](https://github.com/moltis-org/moltis/pull/1262) — Needs Maintainer Attention**
    *   **Action Required:** This open PR resolves a high-severity bug where the cron module's fail-open mechanism compromises scheduling integrity. 
    *   **Why it matters:** Left unmerged, the default `active_hours` configuration is broken for any user attempting to run tasks from `08:00` to `24:00`. Maintainers should prioritize reviewing this PR to restore expected scheduling behavior and prevent resource misallocation.
    *   **Other Backlog:** No other long-unanswered issues or PRs were found in the data.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest - 2026-09-08

## 1. Today's Overview
The project shows moderate activity with 43 issues and 47 PRs updated in the last 24 hours. There are no new releases, indicating the team is focusing on stabilization and feature development for upcoming versions. The community remains engaged, with several high-comment-count issues revealing critical stability concerns around the ReMe memory system and session management.

## 2. Releases
No new releases were published on 2026-09-08.

## 3. Project Progress
Today saw 17 PRs merged/closed, including:
- **PR #6936** (Closed): Fixed tool argument coercion where numeric strings were incorrectly passed as numbers instead of strings for MCP tools
- **PR #7499** (Closed): Unified navigation and theme-toggle icons with Spark design system
- **PR #7530** (Closed): Added 245 console unit tests, increasing coverage by 5.02 percentage points
- **PR #7603** (Closed): Implemented merge freeze during releases to prevent conflicts

Key ongoing work includes major refactorings for memory backends (PRs #7616, #7561) and console/UI improvements.

## 4. Community Hot Topics
Most discussed items reveal underlying stability issues:

- **Issue #7505** (12 comments): LAN connectivity problems with frequent disconnects causing timeouts - indicates network resilience is a priority
- **Issue #7469** (5 comments): ReMe background indexing failures with embedding dependencies - core memory functionality instability  
- **Issue #7576** (5 comments): Hardcoded 32768 context_size causing CONTEXT_UNFIT errors - fundamental configuration problem
- **PR #6399** (Reranker UI): Adding configuration panels indicates demand for better memory customization UX

These highlight user needs for improved network handling, memory reliability, and flexible configuration options.

## 5. Bugs & Stability
Critical bugs requiring immediate attention:

- **Issue #7579/#7584** (2 comments, marked severe): Assistant responses disappearing from context, causing AI behavior anomalies and tool-call loops - **needs urgent fix PR**
- **Issue #7559** (5 comments): 409 errors during concurrent task execution - task management race condition
- **Issue #7570**: Duplicate message pile-up from heartbeat cron feedback loop - system stability issue
- **Issue #7619**: Unexpected conversation termination with qwen-35B-A3B-FP8 model - potential model-specific crash

Open fix PRs exist for tool argument coercion (#6936) and coordinator exception logging (#7578), but critical context-loss bugs remain unresolved.

## 6. Feature Requests & Roadmap Signals
Key user-requested features gaining traction:

- **Work directory path selection** (Issues #7601, #7588): Restoring manual path input capability - likely for next release given closed duplicate #7588
- **Telegram markdown table rendering** (Issue #7585): Better cross-platform format support
- **Flatter directory navigation** (Issue #7601): Multi-level path browsing improvement
- **Plugin version management** (PR #7605): Official plugin marketplace capabilities

These suggest planning around improved UX configurability and platform compatibility in upcoming versions.

## 7. User Feedback Summary
Major pain points identified:

**Negative feedback:**
- Memory system unreliability causing "forgetting" behaviors (Issues #7571, #7584)
- Poor error handling obscuring root causes (#7572 uninformative stack traces)
- Chinese language input method conflicts (#6885 IME crashes)
- Dashboard slow loading times with multiple agents (#7242)
- Hardcoded configurations lacking flexibility

**Positive signals:**
- Appreciation for v2.1.0's manual path input feature (now regressed in 2.2.0)
- Request to preserve useful existing functionality rather than replacing with less flexible alternatives

## 8. Backlog Watch
Long-standing issues needing maintainer attention:

- **Issue #6820** (154 days old, 5 comments): Frontend UI not displaying model outputs/tools/thinking processes until completion - fundamental streaming issue
- **Issue #7156** (21 days old): Embedding health check timeout with pre-warmed backends - related to #7469 memory failures
- **Issue #3328** (118 days old): Sidebar toggle appearing at certain zoom levels - persistent UI inconsistency

These represent core architectural and integration challenges that impact multiple user workflows and require systematic review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-08

## 1. Today's Overview
ZeroClaw shows high development velocity with **37 issues updated** (31 open, 6 closed) and **50 PRs updated** (43 open, 7 closed/merged) in the last 24 hours. No new releases were published. The project is in active feature-building mode with multiple high-severity bugs still unresolved, particularly around ACP transcript persistence, daemon stability, and provider caching. Contributor activity is strong, with PRs from at least 8 different authors.

## 2. Releases
**None.** No new versions were published today.

## 3. Project Progress
**Closed/Merged:**
- #8720 — CachePoint config for Bedrock Nova 2 Lite (bug fix, closed)
- #10670 — heartbeat.target composite key rejection (bug fix, closed)
- #10660 — Third cache breakpoint for turn-boundary misses (feature, closed)
- #10688 — WhatsApp Web voice note transcription (bug fix, closed)
- #10693 — ZeroCode Enter submission ignored while Connected (bug fix, closed)
- #10638 — Gateway boot default seeding from first model entry (bug fix, merged)
- #9939 — Cost tracking pricing-unavailable surfacing (bug fix, merged)

**Active PRs advancing features:**
- #10611 — Adaptive-thinking Claude model support for Anthropic/Bedrock (XL)
- #10450 — Webhook SSE streaming (XL)
- #9713 — Token accounting on history-trim events (XL)
- #9378 — Persist failed/cancelled ACP transcripts (XL)
- #9724 — always_ask approval survival under Full autonomy (XL)

## 4. Community Hot Topics
| Issue/PR | Comments | Topic |
|----------|----------|-------|
| [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | 12 | Bedrock cachePoint config |
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | 6 | Daemon stack overflow on Quickstart |
| [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) | 4 | ACP turns disappear on session switch |
| [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | 3 | Parallel turn runs causing duplicate replies |
| [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) | 3 | Partial turns lost on process exit |
| [#9399](https://github.com/zeroclaw-labs/zeroclaw/pull/9399) | — | Quickstart checklist terminal width fix |
| [#10637](https://github.com/zeroclaw-labs/zeroclaw/pull/10637) | — | WS memory consolidation on correct provider |

**Underlying needs:** Users want reliable session persistence, correct provider routing, and stable daemon operation under concurrent access.

## 5. Bugs & Stability (Ranked by Severity)

**S0 — Data Loss / Security Risk:**
- [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) — Partial Code/ACP turns lost on process exit

**S1 — Workflow Blocked:**
- [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) — Daemon stack overflow during agent init
- [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) — Failed ACP turns disappear after session switch
- [#10659](https://github.com/zeroclaw-labs/zeroclaw/issues/10659) — Budget-exceeded turn loses progress after restore
- [#10693](https://github.com/zeroclaw-labs/zeroclaw/issues/10693) — Enter submissions ignored while Connected

**S2 — Degraded Behavior:**
- [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) — Parallel turn runs with duplicate replies
- [#9940](https://github.com/zeroclaw-labs/zeroclaw/issues/9940) — Cron delivery channel resolution mismatch
- [#10115](https://github.com/zeroclaw-labs/zeroclaw/issues/10115) — Invisible tool-result truncation
- [#10689](https://github.com/zeroclaw-labs/zeroclaw/issues/10689) — Telegram voice reply skipped with `[` prefix
- [#10694](https://github.com/zeroclaw-labs/zeroclaw/issues/10694) — PowerShell tests timeout on Windows

**Fix PRs present for:** #9333→#9378, #10121→#9378, #10230→#10637, #10408→#9713, #10659→#9713

## 6. Feature Requests & Roadmap Signals
- [#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611) — Adaptive-thinking Claude models (Anthropic/Bedrock)
- [#10704](https://github.com/zeroclaw-labs/zeroclaw/issues/10704) — Async function tools (OpenAI Responses)
- [#10708](https://github.com/zeroclaw-labs/zeroclaw/issues/10708) — Active-response steering (OpenAI WebSockets)
- [#10705](https://github.com/zeroclaw-labs/zeroclaw/issues/10705) — Max reasoning effort for compatible models
- [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) — Configurable 1h prompt-cache TTL
- [#10706](https://github.com/zeroclaw-labs/zeroclaw/issues/10706) — Opaque reasoning state preservation

**Prediction:** OpenAI Responses protocol features (#10704–#10708) and Anthropic adaptive-thinking support (#10611) are likely candidates for the next release, given active PRs and maintainer engagement.

## 7. User Feedback Summary
**Pain points:**
- Session data loss during crashes/restarts (#10121, #10659)
- Transcript rendering incomplete when tool calls interleaved (#10697)
- Provider misconfiguration leading to wrong model serving (#10638)
- Channel-specific silent failures (Telegram voice, WhatsApp transcription)
- Cost tracking lacks per-conversation visibility (#10700)

**Satisfaction signals:** Multiple contributors actively submitting large-scale fixes (XL-sized PRs), indicating healthy community engagement despite bug density.

## 8. Backlog Watch (Long-Unanswered)
| PR/Issue | Age | Status | Needs |
|----------|-----|--------|-------|
| [#9399](https://github.com/zeroclaw-labs/zeroclaw/pull/9399) | ~6 weeks | OPEN (XL) | Maintainer review |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | ~6 weeks | OPEN (XL) | Author action + maintainer review |
| [#9378](https://github.com/zeroclaw-labs/zeroclaw/pull/9378) | ~7 weeks | OPEN (XL) | Maintainer review |
| [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) | ~5 weeks | OPEN (XL) | Maintainer review |
| [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) | ~4 weeks | OPEN (XL) | Author action + maintainer review |
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) | ~5 weeks | OPEN (XL) | Blocked |
| [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) | ~3 weeks | OPEN (XL) | Author action |
| [#9313](https://github.com/zeroclaw-labs/zeroclaw/pull/9313) | ~8 weeks | OPEN (XL) | Maintainer review |
| [#9317](https://github.com/zeroclaw-labs/zeroclaw/pull/9317) | ~8 weeks | OPEN (XL) | Maintainer review |
| [#9940](https://github.com/zeroclaw-labs/zeroclaw/issues/9940) | ~4 weeks | OPEN (P1) | Reproduction + fix |
| [#10104](https://github.com/zeroclaw-labs/zeroclaw/issues/10104) | ~3 weeks | OPEN (P2) | CI configuration fix |
| [#10115](https://github.com/zeroclaw-labs/zeroclaw/issues/10115) | ~3 weeks | OPEN (P1) | Tool result truncation visibility |

**Recommendation:** Prioritize reviewing #93

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*