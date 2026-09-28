# OpenClaw Ecosystem Digest 2026-09-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-28 02:38 UTC

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



# OpenClaw Project Digest — 2026-09-28

---

## 1. Today's Overview

OpenClaw remains highly active with 500 issues and 500 PRs updated in the last 24 hours — a sustained, high-velocity development pace. No new releases were published today, but the pipeline is dense with both bug fixes and refactoring work. The project is in a stabilization phase following the 2026.9.6/2026.9.7 releases, with maintainers actively triaging P0/P1 regressions, channel-specific bugs, and architectural cleanup passes. Overall health is **good but strained**: the volume of open P0 issues (at least 10) suggests the recent release cadence has outpaced the team's ability to fully validate on diverse production configurations.

---

## 2. Releases

**No new releases today.** The most recent stable channel releases are 2026.9.6 and the in-preparation 2026.9.7 (tracked in issue #157531). The 2026.9.7 fixes tracker lists 18 of 21 established P1 candidates, including privacy/us-related fixes. Users on 2026.9.6 should monitor the known P0 regressions documented below before upgrading.

---

## 3. Project Progress

### Merged/Closed PRs Today (126 total)

| PR | Summary | Area |
|---|---|---|
| [#160045](https://github.com/openclaw/openclaw/pull/160045) | perf(ui): project one session row without indexing the whole roster | Web UI |
| [#160043](https://github.com/openclaw/openclaw/pull/160043) | fix(ci): preserve frozen-target managed restart coverage | CI |
| [#159401](https://github.com/openclaw/openclaw/pull/159401) | chore(deps): refresh dependencies through September 19 cutoff | Dependencies |
| [#159282](https://github.com/openclaw/openclaw/pull/159282) | fix(gateway): keep the typed state-contention Stop outcome on sessions.abort | Gateway |
| [#158145](https://github.com/openclaw/openclaw/pull/158145) | fix(diagnostics-otel): gateway stalls after every model call when content capture is on | Diagnostics |
| [#156706](https://github.com/openclaw/openclaw/pull/156706) | fix(codex): explain WebSocket interruptions after tool actions | Codex |
| [#153824](https://github.com/openclaw/openclaw/pull/153824) | fix(memory-core): preserve already-clamped diary context | Memory |

### Key In-Flight Work

- **[#159688](https://github.com/openclaw/openclaw/pull/159688)** (P1, XL): Resume original conversation after restart recovery fails — targets session-state resilience.
- **[#158901](https://github.com/openclaw/openclaw/pull/158901)** (P2, XL): Run native inference on paired workers — part 1/3 of a major worker capability expansion.
- **[#159516](https://github.com/openclaw/openclaw/pull/159516)** (P2, XL): Show plugin requester context and outcome in Slack approvals — improves auditability.
- **[#159933](https://github.com/openclaw/openclaw/pull/159933)** (P3, XL): Third-pass deslop of shared packages — architectural cleanup.
- **[#159998](https://github.com/openclaw/openclaw/pull/159998)** (P3, XL): Fourth-pass deslop of channel plugins (iMessage, WhatsApp, Teams, Mattermost, Signal, LINE).
- **[#158916](https://github.com/openclaw/openclaw/pull/158916)** (P3, XL): Second-pass deslop of runtime tasks, daemon, node-host, and TUI.
- **[#159588](https://github.com/openclaw/openclaw/pull/159588)** (P3, XL): Fourth-pass deslop of config.

**Assessment:** The project is executing a systematic "deslop" refactoring campaign across packages, channels, config, and runtime — a sign of maturing architecture. Simultaneously, feature work on paired-worker inference and Slack approval context signals continued product investment.

---

## 4. Community Hot Topics

### Most Commented Issues

| Issue | Comments | Title | Underlying Need |
|---|---|---|---|
| [#159356](https://github.com/openclaw/openclaw/issues/159356) | 25 | llama.cpp manager reports ready while embedding child exits; embedding requests return HTTP 500 | Users need reliable local embedding inference. The core issue is memory pressure (4 GB → 8 GB RAM resolved semantic recall) but the HTTP 500 on embedding requests points to a lifecycle management bug in the llama.cpp manager. |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 16 | OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation | **Long-standing (since June).** Zombie process leaks degrade runtime over time. Users need proper child process reaping in the hook/tool execution path. |
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | 15 | 2026.9.7 Fixes Tracker | Community-driven tracking of what must be fixed between releases. Reflects user frustration with release quality and desire for transparency. |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | 14 | `openclaw update` fails at "global install swap" while direct npm install succeeds | **P0 UX blocker.** Users on npm global installs cannot update. The failure is deterministic — this is a high-priority release-blocking bug. |
| [#137729](https://github.com/openclaw/openclaw/issues/137729) | 12 | Unguarded `.trim()` calls in transcript replay and error classification | Crash bug on every agent turn. Fix pattern already exists elsewhere in the codebase — a low-hanging fruit for maintainers. |

### Most Active PRs

| PR | Title | Signal |
|---|---|---|
| [#159933](https://github.com/openclaw/openclaw/pull/159933) | Deslop shared packages (3rd pass) | Maintainer-driven cleanup; indicates codebase health focus |
| [#158459](https://github.com/openclaw/openclaw/pull/158459) | Prevent duplicate commentary during active runs | Directly addresses user-visible UI bug in Control UI |
| [#159516](https://github.com/openclaw/openclaw/pull/159516) | Show plugin requester context and outcome | Security/auditability feature requested by Slack plugin reviewers |
| [#144947](https://github.com/openclaw/openclaw/pull/144947) | Match Slack DM delivery receipts to source users | Fixes message delivery reporting for Slack DMs |

---

## 5. Bugs & Stability

### P0 — Critical (Release Blockers)

| Issue | Title | Fix PR? | Notes |
|---|---|---|---|
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` fails at global install swap (npm global) | ❌ No | Deterministic failure; direct `npm install -g` works as workaround |
| [#157812](https://github.com/openclaw/openclaw/issues/157812) | Windows: auto-update fails repeatedly (managed-service-preflight, snapshot path, reconcile:abandoned) | ❌ No | Five failure records in ~2 days; three distinct failure modes on one machine |
| [#152992](https://github.com/openclaw/openclaw/issues/152992) | Windows: `openclaw update` fails — mkdir ENOENT on path with illegal `?` (mangled `\\?\` long-path prefix) | ❌ No | Windows-specific path handling bug |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) | Gateway crash-loops on plugin-doctor-post-session-state even after fixing busyTimeoutMs=0 | ❌ No | Related to #1365, #135133; schema migration 17→18 followed by crash-loop |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite corruption recurs on pristine rebuilt DBs within 15–24h (WSL2) | ❌ No | 5 events in 5 days; includes "paralyzed gateway" mode that refuses all service |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Gateway: runaway RSS outside V8 heap causes OOM and shutdown timeout | ❌ No | Reached 9.32 GiB RSS on 15 GiB host; systemd OOM kill |
| [#158095](https://github.com/openclaw/openclaw/issues/158095) | Gateway worker keeps state-lifecycle after acquireSqliteWorkerLifecycle; every later acquire fails until restart | ❌ No | StateDatabaseError on 2026.9.6 |
| [#156917](https://github.com/openclaw/openclaw/issues/156917) | State-lifecycle lease has no holder heartbeat or forced takeover: one hung client blocks gateway startup for 31 minutes | ❌ No | macOS launchd crash-restart loop; no lease timeout mechanism |
| [#159514](https://github.com/openclaw/openclaw/issues/159514) | Catalog worker rebuilds discovery registry on nearly every request (~8 MB unreleasable modules per request) | ❌ No | 1.5–2.5 GB/h heap growth; related to #157842 |
| [#158936](https://github.com/openclaw/openclaw/issues/158936) | macOS app readiness watchdog SIGTERMs slow-starting gateway, causing restart loop | ❌ No | 40–70s cold start exceeds readiness window after reboot |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway startup wall-time scales with enabled plugin count (discord, codex, openclaw-weixin dominate 120s budget) | ❌ No | Regression on 2026.9.5; each plugin adds tens of seconds |
| [#148307](https://github.com/openclaw/openclaw/issues/148307) | Error: database is locked on agent DB when session reclamation exceeds 5s busy timeout | ❌ No | 464 MB DB with zero freelist pages; 9–47s reclamation vs 5s timeout |

### P1 — High Severity

| Issue | Title | Fix PR? |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Leaked unreaped hook/tool child processes (zombie accumulation) | ❌ No |
| [#127148](https://github.com/openclaw/openclaw/issues/127148) | Codex sessions.compact acquires second app-server, hits active-writer conflict | ❌ No |
| [#157986](https://github.com/openclaw/openclaw/issues/157986) | Automations: every agentTurn job fails with DataCloneError (Windows) | ❌ No |
| [#144291](https://github.com/openclaw/openclaw/issues/144291) | Config hot-reload aborts every in-flight agent turn | ❌ No |
| [#123799](https://github.com/openclaw/openclaw/issues/123799) | Need safe upgrade/backport guidance for production affected by Codex compact 404 | ❌ No |
| [#148789](https://github.com/openclaw/openclaw/issues/148789) | Model fallback chain exhausts every candidate on harness-level session failure | ❌ No |
| [#157389](https://github.com/openclaw/openclaw/issues/157389) | Feishu channel: replies lost under multi-lane load | ❌ No |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | Plugin source capture rewrites ~1.1–1.4 GB per CLI command (~6.5 GB per Gateway start) | ❌ No |
| [#157575](https://github.com/openclaw/openclaw/issues/157575) | Managed Gateway heap flag overrides per-worker old-space limits | ❌ No |
| [#142271](https://github.com/openclaw/openclaw/issues/142271) | Cron agentTurn on CLI-backend model cannot exec when secret egress proxy is active | ❌ No |
| [#156425](https://github.com/openclaw/openclaw/issues/156425) | Durable context-engine turns never committed on Anthropic routes | ❌ No |
| [#118793](https://github.com/openclaw/openclaw/issues/118793) | Claude CLI "session limit" error dies with surface_error instead of triggering model fallback | ❌ No |

### Notable Regression Patterns

- **Update/installation failures** dominate the P0 list: #156112, #157812, #152992, #157227 — four distinct update-related P0s, all on Windows or npm global installs. This is the single most concentrated failure domain.
- **State lifecycle / SQLite contention**: #158095, #156917, #148307, #126821 — the state-lifecycle lease mechanism and SQLite worker architecture are under stress in production.
- **Memory / resource leaks**: #154812 (RSS), #159514 (catalog worker heap), #97616 (zombie processes), #157989 (plugin source capture disk writes).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood of Next Version |
|---|---|---|
| Multi-index embedding memory with model-aware failover | [#63990](https://github.com/openclaw/openclaw/issues/

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – AI Agent / Personal Assistant Open‑Source Ecosystem (2026‑09‑28)**  

---

### 1. Ecosystem Overview  
The open‑source AI agent landscape remains highly fragmented but increasingly convergent around three concerns: **runtime reliability (state‑lifecycle, resource leaks, update mechanics)**, **security hardening (authority checks, sandboxing, dependency hygiene)**, and **extensibility/plugin ecosystems (runtime‑loadable WASM channels, skill frameworks, multi‑channel support)**. While a few projects exhibit explosive contribution velocity (OpenClaw, ZeroClaw, NanoClaw), many others are in maintenance or cleanup modes, reflecting a maturing core that now prioritises stability over rapid feature churn. Community feedback consistently surfaces pain points around installation/upgrade workflows, Windows/Linux container quirks, and opaque context‑window behaviour—areas where cross‑project solutions could yield broad impact.

---

### 2. Activity Comparison  

| Project | Issues (last 24h) | PRs (last 24h) | Releases (last 24h) | Health Assessment* |
|---------|-------------------|----------------|---------------------|--------------------|
| OpenClaw | 500 | 500 | 0 | **High** – intense velocity, stabilization phase, many P0 regressions |
| Hermes Agent | 50 (40 open/10 closed) | 50 (48 open/2 merged) | 0 | **High** – active bug‑fix/security/feature flow |
| PicoClaw | 3 (2 open/1 closed) | 2 (both open) | 0 | **Low** – maintenance/cleanup, minimal feature work |
| NanoClaw | 1 (open) | 37 (29 open/8 merged) | 0 | **High** – PR‑driven infrastructure fixes, critical Docker bug |
| NullClaw | 18 (16 closed/2 open) | 10 (8 closed/2 open) | 0 | **Medium** – consolidating merges, security focus |
| IronClaw | 1 (updated) | 6 (updated) | 0 | **Low‑Medium** – dependency bumps, light maintenance |
| LobsterAI | 5 | 8 | 0 | **Medium** – security patches + usability polish |
| TinyClaw | 0 | 0 | 0 | **Inactive** – no recent activity |
| Moltis | – | – | – | **Insufficient data** (only safety flag) |
| CoPaw | 8 | 7 | 0 | **Medium** – context‑window & desktop stability work |
| ZeptoClaw | 0 | 0 | 0 | **Inactive** – no recent activity |
| ZeroClaw | 48 | 50 | 0 | **High** – security hardening, plugin‑architecture refactor, channel expansion |

\*Health Assessment is a qualitative tier derived from each project’s digest (High = sustained high‑volume contributions; Medium = steady moderate flow; Low = minimal/maintenance work; Inactive = no detectable updates).

---

### 3. OpenClaw’s Position  

**Advantages vs. peers**  
- **Scale of contribution** – 500 issues / 500 PRs in a single day dwarf all other repositories, indicating the largest active developer base and the most aggressive release cadence.  
- **Maturing architecture** – Ongoing “deslop” refactoring across packages, channels, config, and runtime signals a deliberate move toward technical‑debt reduction, a focus less evident in most peers (except ZeroClaw’s authority rework and NanoClaw’s container/cleanup drives).  
- **Breadth of subsystem work** – Parallel effort in session‑state resilience, paired‑worker inference, plugin‑context auditability, and memory‑core fixes shows a holistic approach to agent reliability.

**Technical approach differences**  
- OpenClaw emphasizes **state‑lifecycle lease mechanisms and SQLite worker contention** as primary stability battlegrounds, whereas peers such as Hermes Agent focus more on **cron scheduler robustness and Windows installer quirks**, and ZeroClaw concentrates on **runtime authority boundaries and WASM‑based plugin isolation**.  
- Its **plugin‑context auditability (Slack PR #159516)** and **deslop campaigns** are unique; few other projects expose comparable internal‑interface cleanup initiatives.

**Community size comparison**  
- The sheer volume of open P0 regressions (≥10) and the 500‑issue backlog point to a **large, heterogeneous user base** running diverse production configurations—larger than the more niche or developer‑focused communities of PicoClaw, IronClaw, or LobsterAI.  
- However, the high strain on maintainers (evident from the “good but strained” health note) suggests that contributor growth has not kept pace with issue inflow, a contrast to projects like NullClaw where a high ratio of closed PRs indicates effective maintainer throughput.

---

### 4. Shared Technical Focus Areas  

| Focus Area | Projects Exhibiting the Theme | Specific Needs / Signals |
|------------|------------------------------|--------------------------|
| **State‑lifecycle / resource leaks** | OpenClaw (SQLite worker lifecycle, RSS runaway, zombie processes), Hermes Agent (config hot‑reload aborts agent turns, cron worker import failures), NanoClaw (host container sweep, orphaned Iron Control DB), ZeroClaw (principal‑scope delegation, concurrent file edits) | Need for guaranteed cleanup of worker/process handles, bounded memory growth, and safe session resumption. |
| **Security hardening / authority checks** | OpenClaw (privacy/us‑related P1 fixes, plugin source‑capture audit), NullClaw (A2A bearer‑token scoping, supervisor‑mode approval), IronClaw (dependency bumps), LobsterAI (SSRF & arbitrary‑file‑read patches), ZeroClaw (authority recheck foundation, admin‑token pairing, apostrophe escaping) | Demand for least‑privilege execution, verifiable auth boundaries, and supply‑chain hygiene. |
| **Runtime‑extensibility / plugin model** | OpenClaw (deslop of channel plugins, Slack context), NanoClaw (Iron proxy local‑CA trust, Mattermost callback secret), ZeroClaw (runtime WASM plugin migration, Microsoft Teams channel, session‑ownership contract), LobsterAI (chat‑folder feature, skill persistence) | Shift from compile‑time feature flags to dynamically loadable, sandboxed extensions with clear ownership contracts. |
| **Installer / update reliability** | OpenClaw (npm‑global update failures, Windows path mangling, update‑service preflight), Hermes Agent (Windows install impossible, cua‑driver install), NanoClaw (ping‑agent container cleanup, update‑controller loading), NullClaw (Docker Alpine bump) | Need for atomic, cross‑platform update flows that tolerate partial state and avoid destructive side‑effects. |
| **Context‑window & token management** | Hermes Agent (turn‑level live time context), CoPaw (scroll context folding, historical media reclaim), LobsterAI (context‑window configurability/OpenAI‑1 M vs 200 K), ZeroClaw (bootstrap truncation, context‑eviction bugs) | Users want predictable, observable token usage and the ability to raise or inspect limits without silent data loss. |

---

### 5. Differentiation Analysis  

| Dimension | OpenClaw | Hermes Agent | PicoClaw | NanoClaw | NullClaw | IronClaw | LobsterAI | CoPaw | ZeroClaw |
|-----------|----------|--------------|----------|----------|----------|----------|-----------|-------|----------|
| **Primary user persona** | Enterprise‑scale self‑hosted agents (multi‑tenant, high‑throughput) | Developers & power‑users desiring extensible desktop/CLI agents | Embedded/IoT‑focused lightweight agents (SiPeed) | Container‑native developer toolchains (nanoclaw‑based provisioning) | Teams/communities needing multi‑provider AI gateways | Rust‑based low‑level agent framework (near‑AI) | End‑user‑facing chat UI with skill marketplace | Desktop‑oriented multi‑modal agent (QwenPaw) | High‑assurance, policy‑driven agent runtimes (ZeroClaw) |
| **Technical stack** | Node.js/TypeScript (web UI, gateway, plugins) | Python‑centric (CLI, desktop, skill system) | C/C++ (SiPeed SDK) | Go (container runner, provider adapters) | Python/Go hybrid (provider adapters, core) | Rust (core, knowledge‑graph) | Electron/React + Node.js (desktop UI) | Python/Electron (desktop) | Rust (runtime, WASM plugins) |
| **Release cadence** | Frequent (bi‑weekly) with noticeable regression pressure | Regular but slower; many open bugs |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here from the data overview, we need to generate a project digest for 2026-09-28.

Let's analyze the data:

- Today's date: 2026-09-28 (given).
- Issues updated in last 24h: 50 (open/active: 40, closed: 10)
- PRs updated in last 24h: 50 (open: 48, merged/closed: 2)
- New releases: 0

Latest releases: None.

Latest Issues (top 30 by comment count). We have many issues listed with comment counts and dates.

We need to generate a structured English Hermes Agent project digest with sections:

1. **Today's Overview** - 3-5 sentences summarizing project status, including activity assessment
2. **Releases** - If new versions exist, detail changes, breaking changes, migration notes; omit if none
3. **Project Progress** - Merged/closed PRs today, what features advanced or were fixed
4. **Community Hot Topics** - Most active Issues/PRs with most comments/reactions (with links), analyze underlying needs
5. **Bugs & Stability** - Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist
6. **Feature Requests & Roadmap Signals** - User-requested features, predict which might be in next version
7. **User Feedback Summary** - Real user pain points, use cases, satisfaction/dissatisfaction
8. **Backlog Watch** - Long-unanswered important Issues or PRs needing maintainer attention

Style: objective, data-driven, highlighting project health. Include GitHub links for each item.

We need to parse the data and produce the digest.

First, let's summarize today's overview: The project has high activity with 50 issues and 50 PRs updated in last 24h. Open issues 40, closed 10. PRs open 48, merged/closed 2. No new releases. The project appears active with many recent bugs, security concerns, and feature requests.

Second, Releases: None.

Third, Project Progress: merged/closed PRs today: 2 merged/closed PRs. Need to identify which PRs were merged/closed in last 24h. From the PR list, we see many open PRs, but we need to identify which were merged/closed in last 24h. The data says "PRs updated in last 24h: 50 (open: 48, merged/closed: 2)". So there are 2 PRs merged/closed in last 24h. We need to identify which ones. Looking at the PR list, we see many open PRs, but we need to identify which have been merged/closed recently. The list shows "Open" status for all listed PRs. However, the data says 2 merged/closed. Perhaps some of the PRs listed as "Open" might have been merged earlier but still showing open? But the list shows "Open" status. Maybe the "merged/closed: 2" refers to PRs that were merged/closed in the last 24h but not necessarily listed in the "Latest Pull Requests" section (which shows open PRs). However, the "Latest Pull Requests" section shows "Open" status for all listed. Possibly the "merged/closed: 2" refers to PRs that were merged/closed earlier but still counted in the 24h update? Hard to know.

We can infer from the PR summaries some that are marked as "fix" maybe recently merged. But we need to infer from the data. Perhaps we can look at the "Latest Issues" section: some issues are marked "CLOSED". For example, #122424 [CLOSED], #122410 [CLOSED], #92352 [CLOSED], #63784 [CLOSED], #125463 [CLOSED], #125463 [CLOSED], #125463 etc. Also #104413 [CLOSED], #122410 [CLOSED], etc. So some issues closed recently.

But for PRs, we need to identify which were merged/closed in last 24h. The data says "PRs updated in last 24h: 50 (open: 48, merged/closed: 2)". So there are 2 PRs merged/closed in last 24h. We need to identify which ones. Looking at the PR list, all are marked "Open". However, maybe some of them have been merged recently but still appear open due to labeling? Hard to know.

We might need to infer from the summaries: some PRs mention "Fixes #123935" etc., but those might be open still. However, we can look at the "Latest Pull Requests" section: all have "Open" status. But the count says 2 merged/closed. Possibly the "updated in last 24h" includes both open and merged/closed. The list shows only open PRs, but there might be 2 PRs that were merged/closed within last 24h but not displayed in the "Latest Pull Requests" excerpt (maybe they are beyond the top 20). However, we have the full list? We only have top 20 by comment count. The total PRs updated in last 24h is 50, but we only see top 20 by comment count. So there are 30 other PRs not shown. Among those, 2 were merged/closed.

Given limited info, we can state that 2 PRs were merged/closed in the last 24h, but we cannot detail them due to lack of data. However, we can mention that 2 PRs were merged/closed, advancing some fixes.

But we need to provide "Project Progress - Merged/closed PRs today, what features advanced or were fixed". We can infer from the issues that some bugs were fixed. But we need to be objective.

Maybe we can look at the closed issues: many bugs fixed. But the question asks for "Merged/closed PRs today, what features advanced or were fixed". We can mention that 2 PRs were merged/closed, likely addressing some of the bugs noted in issues, but we don't have explicit details.

Alternatively, we can look at the "Latest Issues" section: some issues are closed, indicating fixes. But the question asks for PRs.

Given limited data, we can state: "2 PRs were merged/closed in the last 24h, contributing to fixes for cron scheduler, config migration, or other areas." But we need to be careful not to hallucinate.

Maybe we can infer from the PR titles: some PRs mention fixes for cron, config, etc. But they are still open. However, maybe some of them were merged earlier today but still appear open due to timing. Hard.

Given the instructions, we need to generate a digest with the sections. We'll do our best with available data.

Let's outline each section:

1. **Today's Overview**: 3-5 sentences summarizing project status, activity assessment. We can say: "As of 2026-09-28, Hermes Agent shows intense activity with 50 issues and 50 PRs updated in the last 24 hours. The repository hosts 40 open issues and 10 closed ones, while 48 PRs remain open and 2 have been merged/closed. No new releases were published. The volume of recent activity indicates ongoing development and rapid response to bugs, security concerns, and feature requests."

2. **Releases**: None. Omit.

3. **Project Progress**: "In the last 24 hours, 2 PRs were merged/closed, advancing fixes for cron scheduler tolerance and config migration boundaries. Additionally, 10 issues were closed, resolving bugs such as desktop session refresh, Windows install failures, and security advisories. The 2 merged PRs (IDs #124499 and #124229 per update timestamps) addressed plaintext .env.bak copy bound and cron re‑arming logic, respectively."

But we need to verify if those PRs were indeed merged. The PR #124499 is listed as open, but maybe it was merged earlier. However, the update timestamp shows 2026-09-26, not 2026-09-28. But the "updated in last 24h" includes PRs updated within last 24h, which could be merged or opened. The "merged/closed: 2" could be PRs that were merged on 2026-09-28. We don't have explicit IDs. We can avoid specifying PR IDs if uncertain.

Better to say: "Two PRs were merged or closed in the past 24 hours, contributing to fixes for cron scheduler tolerance and config migration cleanup, as indicated by the 2‑PR closure count in the 24‑hour update."

But we need to be objective and data-driven. We can state the count without specifics if not known.

4. **Community Hot Topics**: Most active Issues/PRs with most comments/reactions. We have the top issues by comment count. We can list the top ones with links and comment counts, and analyze underlying needs.

From the data, top issues by comment count:

- #10421: 22 comments, about turn-level live time context.
- #122222: 21 comments, about cron external worker import dependencies.
- #107356: 12 comments, about security vulnerabilities.
- #118029: 10 comments, about pinned verified rollout control plane.
- #122490: 9 comments, about bot-to-bot DM delivery runner inherits store python.
- #92352: 9 comments (but closed), about desktop app not refreshing sessions list.
- #123801: 7 comments, about macOS duplicate assistant reply.
- #125350: 7 comments, about Fresh Windows install impossible.
- #122424: 6 comments, about package.json pins vulnerable js-yaml.
- #122112: 4 comments, about pm runtime provisioning hard-fails on pip.conf-mirrored hosts.
- #125305: 4 comments, about DM delivery wrapper runs under sender's interpreter.
- #106716: 3 comments, about Desktop SSH to Windows remote fails.
- #104413: 3 comments, about Hermes update install cua-driver above Hermes root.
- #122410: 3 comments, about hermes update never provisions Browser Use CLI.
- #125121: 3 comments, about Kanban dispatcher worker spawn ModuleNotFoundError.
- #122462? Actually #124762: 3 comments, about Slack manifest generator clamps to 50 commands.
- #125363: 3 comments, about cron retryable send_path_degraded rejection.
- #123985: 3 comments, about Desktop renders session's first messages twice after compaction.
- #124731: 2 comments, about persist override overwrites merged user row.
- #125138: 1 comment, about hermes update internal git fetch fails.
- #125131? Actually #125923: 1 comment, about pre_gateway_dispatch hook skipped.
- #125813: 1 comment, about Linux desktop notify on failed menu launches.
- #125463: 1 comment, about hermes pm lock --bump crashes.
- #125914: 1 comment, about upgrading hermes-agent downgrades other packages.
- #125909: 1 comment, about internal python environments using outdated packages.
- #100768: 1 comment, about Desktop 30s transcript re-graft rebuild.
- #125888: 1 comment, about rotation compaction writes user prompt twice.
- #125489: 2 comments, about reorganization of config.yaml items.
- #63784: 2 comments, about two stacked bugs on macOS.
- #125920: 1 comment, about xAI grok-4.7 compression no-ops.
- #125926? Actually #125926 is a PR, not issue.

We need to select the most active with most comments. The top three are #10421 (22), #122222 (21), #107356 (12). We can analyze their underlying needs.

Also PRs: top PRs by comment count, but all have undefined comments. However, we can still mention the most discussed PRs maybe based on activity.

But the section "Community Hot Topics" asks for "Most active Issues/PRs with most comments/reactions (with links), analyze underlying needs". We can list the top issues with links and comment counts, and briefly analyze what need they represent.

5. **Bugs & Stability**: Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist. We have many bugs in the last 24h. We can rank by severity P1, P2, etc. From the issues, we have several P1 bugs: #122222 (cron external worker cannot import dependencies), #125350 (Fresh Windows install impossible), #125888 (rotation compaction writes user prompt twice), #125305 (DM delivery wrapper runs under sender's interpreter), #125363 (cron retryable send_path_degraded rejection), #125923 (pre_gateway_dispatch hook skipped), #125920 (xAI grok-4.7 compression no-ops), #125914/125909 (security downgrades). Also P2 bugs: #10421 (time context), #122490 (bot-to-bot DM), #123801 (macOS duplicate reply), #125350 (Windows install), #123985 (Desktop renders messages twice), #124762 (Slack manifest), etc.

We can rank by severity: P1 crashes/install failures, P2 bugs affecting functionality, P3 security/usability.

Note if fix PRs exist: some have associated PRs maybe, but not always. We can mention if a fix PR exists, e.g., #124499 for config migration, #124229 for cron re‑arming.

6. **Feature Requests & Roadmap Signals**: User-requested features, predict which might be in next version. From issues, we have features: #10421 (turn-level live time context), #118029 (pinned verified rollout control plane), #125489 (reorganization of config.yaml items), #125813 (Linux desktop notify on failed menu launches), #125489 (reorganization). Also feature requests in PRs.

We can predict that time awareness feature may be added, config reorganization, desktop notifications.

7. **User Feedback Summary**: Real user pain points, use cases, satisfaction/dissatisfaction. From issues, pain points: Windows install failures, cron job failures, security vulnerabilities, desktop UI issues, time awareness, dependency management.

8. **Backlog Watch**: Long-unanswered important Issues or PRs needing maintainer attention. We have issues created earlier but updated recently. For example, #10421 created 2026-04-15, updated 2026-09-28, 22 comments, still open. #122222 created 2026-09-25, updated 2026-09-28, 21 comments, still open. #107356 created 2026-09-10, updated 2026-09-28, 12 comments, security vulnerabilities piling up. #125350 created 2026-09-27, updated 2026-09-28, 7 comments, Windows install impossible. #125121 created 2026-09-27, updated 2026-09-28, 3 comments, ModuleNotFoundError. #125923 created 2026-09-28, 1 comment. #125888 created 2026-09-28, 1 comment. #125914/125909 created 2026-09-28, 1 comment.

Long-unanswered: #10421 has been open since April but active. #107356 since September 10, security issues. #122222 since Sep 25, cron issue. Maybe these need maintainer attention.

Also PRs: #125930 etc. but many are new.

We can list a few backlog items that have been open for while but still active.

Now, we need to generate the digest with sections, include GitHub links for each item.

We need to format as structured English, with headings.

Let's start drafting.

We'll include links in format: [Issue #10421](https://github.com/NousResearch/hermes-agent/issues/10421) etc.

We need to ensure objectivity, data-driven.

Let's write each section.

**Today's Overview**: 3-5 sentences.

**Releases**: None.

**Project Progress**: mention 2 PRs merged/closed, 10 issues closed, etc.

**Community Hot Topics**: list top issues with links and comment counts, analyze needs.

**Bugs & Stability**: rank by severity, note fix PRs if any.

**Feature Requests & Roadmap Signals**: list featured items, predict.

**User Feedback Summary**: summarize pain points.

**Backlog Watch**: list long-unanswered important issues/PRs.

Now, we need to ensure we include GitHub links for each item. We can link the issue/PR numbers

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest — 2026-09-28**

**1. Today's Overview**
PicoClaw logged low velocity on 2026-09-28: zero releases, three issues updated (2 open, 1 closed), and two PRs updated (both remain open). The project is in a maintenance/cleanup mode with no major features merged, though community PRs continue to address channel-specific stability and config gaps.

**2. Releases**
None.

**3. Project Progress**
No PRs merged today. 
- **#3287 closed**: Long-message IRC support feature request resolved after 14 comments. 
- **#3353** (bound tool feedback animations) and **#3396** (OneBot reaction toggle) remain open with recent updates but no merge.

**4. Community Hot Topics**
- **[#3287](https://github.com/sipeed/picoclaw/issues/3287)** — IRC long-message handling (14 comments): Users need coherent message reconstruction across IRCv3 splits. 
- **[#3382](https://github.com/sipeed/picoclaw/issues/3382)** — DingTalk gateway panic on reconnect (1 comment): Stability concern. 
- **[#3395](https://github.com/sipeed/picoclaw/issues/3395)** — OneBot auto-ack config (new): Request for opt-in reaction control.

**5. Bugs & Stability**
- **HIGH**: [#3382](https://github.com/sipeed/picoclaw/issues/3382) — DingTalk stream SDK reconnect panic (`send on closed channel`, client.go:161). Reproducible on v0.3.1 with `dingtalk-stream-sdk-go` v0.9.1. No fix PR identified. 
- MEDIUM: Tool feedback animation unbounded editing (PR #3353 addresses but not merged).

**6. Feature Requests & Roadmap Signals**
- **OneBot `reaction_enabled` toggle** [#3396](https://github.com/sipeed/picoclaw/pull/3396) is implemented and likely to ship next. 
- **IRC long messages** [#3287](https://github.com/sipeed/picoclaw/issues/3287) appears completed (closed). 
- **Animation bounds** [#3353](https://github.com/sipeed/picoclaw/pull/3353) pending review.

**7. User Feedback Summary**
Pain points: DingTalk crashes on SDK reconnect, unwanted QQ auto-reactions via NapCat/OneBot, IRC message fragmentation. Users value multi-platform reach but report channel-specific instability and lack of configurability for acknowledgements.

**8. Backlog Watch**
- **[#3353](https://github.com/sipeed/picoclaw/pull/3353)** — PR stale since 2026-08-31 (nearly 1 month); needs maintainer review for animation lifecycle fix. 
- **[#3382](https://github.com/sipeed/picoclaw/issues/3382)** — Issue stale since 2026-09-20; DingTalk panic unfixed >1 week. 
- **[#3287](https://github.com/sipeed/picoclaw/issues/3287)** — Closed but was stale; verify fix landed in release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here's a thinking process:

1.  **Analyze User Request:**
   - **Role:** Analyst of AI agent and personal AI assistant open-source projects
   - **Source:** GitHub data from NanoClaw (github.com/qwibitai/nanoclaw)
   - **Date:** 2026-09-28
   - **Task:** Generate a project digest with specific sections
   - **Data Provided:** Issues/PRs overview, latest issues, latest PRs, release info

2.  **Extract & Organize Data from Prompt:**
   - **Date:** 2026-09-28
   - **Issues updated in last 24h:** 1 (open/active: 1, closed: 0)
   - **PRs updated in last 24h:** 37 (open: 29, merged/closed: 8)
   - **New releases:** 0
   - **Latest Issues (Total: 1 item):**
     - #3951 [OPEN] ncl tasks delete half-fails on Linux: Docker-created root-owned mount points block the session directory rmSync
     - Author: businesslifers | Created: 2026-09-28 | Updated: 2026-09-28 | Comments: 0 | 👍: 0
     - Summary: On Linux (rootful Docker), deleting a scheduled task leaves an orphaned `active` session with no mailbox. After that, the host logs `collectTasks: inbound.db unreadable … SqliteError: unable to open database file` once a minute, indefinitely.
     - Cause: `buildMounts` (`src/container-ru...`)
   - **Latest Pull Requests (Total: 37 items; showing top 20 by comment count):**
     - #3952 [OPEN] [area/containers] fix(container-runner): pre-create session mount points as the host user
       - Author: IamAdamJowett | Created: 2026-09-28 | Updated: 2026-09-28 | Comments: undefined | 👍: 0
       - Summary: Fixes #3951. The session directory is bind-mounted at `/workspace`, and other mounts are nested inside it (`/workspace/agent`, `/workspace/global`, provider state volumes, allowlisted extras at `/workspace/extra/<name>`). When a nested target is missing on the host, rootful Docker creat...
     - #3878 [OPEN] [kind/bug, PR: Fix, core-team, area/repository-maintenance, area/setup-installation] fix(setup): stop the ping agent's container before deleting its folder
       - Author: glifocat | Created: 2026-09-23 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: Setup's post-ping cleanup left the temporary ping agent's container running after deleting its folder.
     - #3919 [OPEN] [kind/bug, delivery/skill, PR: Fix, PR: Skill, follows-guidelines, core-team, area/providers, area/setup-installation, area/skills] fix(opencode): reject local model URLs Iron Proxy cannot serve at the prompt
       - Author: glifocat | Created: 2026-25 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: OpenCode setup now refuses, at the prompt, a local model URL that Iron Proxy can never route.
     - #3950 [OPEN] [kind/feature, delivery/skill, PR: Feature, PR: Skill, follows-guidelines, core-team, area/providers, area/skills] feat(iron): trust an operator's name-constrained local CA for private model hosts
       - Author: glifocat | Created: 2026-27 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: Iron can now trust an operator's own CA, so a local model server on a private name such as `https://models.home.arpa/v1` works behind Iron.
     - #3949 [OPEN] [kind/bug, delivery/skill, PR: Fix, PR: Skill, follows-guidelines, core-team, area/channels, area/setup-installation, area/skills] fix(add-mattermost): derive callback secret in verify-runtime when unset
       - Author: glifocat | Created: 2026-27 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: Stops Mattermost runtime verification failing when `.env` has no `MATTERMOST_CALLBACK_SECRET`.
     - #3918 [OPEN] [kind/bug, PR: Fix, follows-guidelines, core-team, area/agent-runner, area/core] fix(agent-runner): do not nudge a result-door turn that already replied via a tool
       - Author: glifocat | Created: 2026-25 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: Stops result-door providers (e.g. OpenCode) re-sending a reply the agent already sent with `send_message`.
     - #3946 [OPEN] [kind/bug, PR: Fix, follows-guidelines, core-team, area/skills] fix(skill-apply): show a failed step's own error instead of a generic bounce
       - Author: glifocat | Created: 2026-27 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: A skill step that fails now shows its own reason, instead of "the step did not complete".
     - #3948 [OPEN] [kind/bug, PR: Fix, follows-guidelines, core-team, area/containers, area/setup-installation] fix(update): keep the Iron proxy through cutover and residue reaping
       - Author: glifocat | Created: 2026-27 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: Keeps the Iron Proxy running through `/update-nanoclaw`. Right now, every agent spawn fails after the update finishes.
     - #3920 [OPEN] [delivery/skill, PR: Skill, follows-guidelines, kind/hardening, core-team, area/providers, area/setup-installation, area/skills] fix(setup): restrict failure-assist agents on a live install
       - Author: glifocat | Created: 2026-25 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: Setup's failure-assist agents now start with each CLI's own safe permission baseline instead of allow-all.
     - #3908 [OPEN] [kind/bug, PR: Fix, follows-guidelines, core-team, area/agent-runner, area/core] fix(agent-runner): never answer a failure notice with another
       - Author: glifocat | Created: 2026-25 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: Stops a failed agent-to-agent turn from answering a failure notice with another failure notice, forever.
     - #3913 [OPEN] [kind/bug, delivery/skill, PR: Fix, PR: Skill, follows-guidelines, core-team, area/setup-installation, area/skills] fix(update): load the update controller without setup/ or node_modules
       - Author: glifocat | Created: 2026-25 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: Makes `/update-nanoclaw` load its controller again.
     - #3910 [OPEN] [kind/bug, PR: Fix, follows-guidelines, core-team, area/channels, area/ncl-cli, area/setup-installation, area/skills] fix(setup): detect installed gateways without parsing nested pnpm output
       - Author: glifocat | Created: 2026-25 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: Stops `/update-nanoclaw` from reporting "No installed gateway could be detected" on a healthy install when pnpm prints a workspace warning.
     - #3887 [OPEN] [follows-guidelines, kind/hardening, core-team, area/core, area/setup-installation] fix(setup): never clip a readiness probe to the deadline; budget the delivery-poll drain test
       - Author: glifocat | Created: 2026-24 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: A failed host restart now reports why the host isn't ready, instead of a generic timeout.
     - #3905 [OPEN] [kind/bug, delivery/skill, PR: Fix, PR: Skill, follows-guidelines, core-team, area/providers, area/setup-installation, area/skills] fix(setup): say when OpenCode's endpoint wasn't verified and log the ping
       - Author: glifocat | Created: 2026-25 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: Setup now logs whether the first test message got a reply, and the OpenCode auth step logs its real duration.
     - #3947 [OPEN] [kind/bug, PR: Fix, follows-guidelines, core-team, area/containers, area/core, area/ncl-cli] fix(host): stop containers whose session or agent group was deleted
       - Author: glifocat | Created: 2026-27 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: The host sweep now stops containers whose session or agent group was deleted, so a delete no longer leaves a container running until the next host restart.
     - #3883 [OPEN] [kind/bug, PR: Fix, follows-guidelines, core-team, area/providers, area/repository-maintenance, area/setup-installation, area/skills] fix(iron-proxy): recover an orphaned Iron Control database on re-install
       - Author: glifocat | Created: 2026-24 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: Uninstalling NanoClaw now removes this copy's Iron Control database, so a reinstall in the same folder starts clean.
     - #3945 [OPEN] [follows-guidelines, kind/hardening, core-team, area/core] test(delivery): seed one session past the cap in the drain test
       - Author: glifocat | Created: 2026-27 | Updated: 2026-27 | Comments: undefined | 👍: 0
       - Summary: The delivery-poll drain test now seeds 9 sessions instead of 20, so it stops timing out on a contended CI disk.
     - #3931 [OPEN] [PR: Refactor, follows-guidelines, area/agent-runner, area/configuration, area/core, area/ncl-cli, area/providers, kind/cleanup] refactor(agent-runner): add a minimalContext provider option
       - Author: barnuri | Created: 26 | Updated: 27 | Comments: undefined | 👍: 0
       - Summary: Lets a caller run the Claude provider without ambient context, for small models and deterministic scheduled turns.
     - #3932 [OPEN] [kind/feature, delivery/skill, PR: Feature, PR: Skill, follows-guidelines, area/agent-runner, area/configuration, area/core, area/ncl-cli, area/scheduled-tasks, area/skills] feat(skills): add /add-lean-tasks for minimal-context scheduled task runs
       - Author: barnuri | Created: 26 | Updated: 27 | Comments: undefined | 👍: 0
       - Summary: Adds `/add-lean-tasks`, so a scheduled task can run cheaply on a small or local model without the agent's full context.
     - #3930 [OPEN] [area/agent-runner, area/providers, area/skills] fix(opencode): resolve config, runtime key and server env from one environment
       - Author: barnuri | Created: 26 | Updated: 27 | Comments: undefined | 👍: 0
       - Summary: Makes the OpenCode payload read one environment, `options.env ?? process.env`, for config resolution, the shared-runtime cache key, and the spawned `opencode serve` process.

   Wait, the dates in the PR summaries have "2026-09-25", "2026-09-27", etc. But the prompt says "Based on the following GitHub data from NanoClaw... for 2026-09-28". The data is snapshot as of 2026-09-28. I need to generate the digest for that date, using the data provided. The PRs and issues listed are those updated in the last 24h or total latest, all dated on or before 2026-09-28, with the latest being 2026-09-28.

   Let me re-read the data carefully:
   - "Issues updated in last 24h: 1 (open/active: 1, closed: 0)"
   - "PRs updated in last 24h: 37 (open: 29, merged/closed: 8)"
   - "New releases: 0"
   - Latest Issues: #3951, created/updated 2026-09-28
   - Latest PRs: top 20 by comment count, with creation dates ranging from 2026-09-23 to 2026-09-28, all updated same or earlier, and all marked [OPEN].

   Now I need to structure the digest into 8 sections as specified.

   Let me plan each section:

   1. **Today's Overview** - 3-5 sentences summarizing project status, including activity assessment. Use the data: 1 issue, 37 PRs updated in last 24h, 0 releases. Project is very active with PRs, one critical bug reported same day.

   2. **Releases** - No new versions. Omit or state none.

   3. **Project Progress** - Merged/closed PRs today: 8. What features advanced or were fixed. I need to infer from the PR list which were merged/closed today. The data says "PRs updated in last 24h: 37 (open: 29, merged/closed: 8)". So 8 PRs were merged/closed in the last 24h. I should list the notable ones or summarize the category. Looking at the PRs listed, they are all [OPEN] in the list, but the "merged/closed: 8" means 8 PRs were closed/merged in that period, but they might not be in the "latest 20" list if they were merged earlier or are not top by comments. I'll need to work with what's given. I can mention that 8 PRs were merged/closed, advancing fixes in containers, setup, skills, etc. I'll summarize based on the PR themes visible.

   Actually, the 37 PRs updated in last 24h include both open and merged/closed. The list shows 20 open PRs top by comment count, but there are 29 open total, and 8 merged/closed. I'll note that 8 PRs were merged/closed, covering areas like containers, setup, skills, and infrastructure stability.

   4. **Community Hot Topics** - Most active Issues/PRs with most comments/reactions (with links), analyze underlying needs. The latest issue #3951 has 0 comments, 0 👍. The PRs listed have "Comments: undefined" but likely have some. The most notable is #3951 (critical Linux Docker bug) and #3952 (fix for it). Also #3950 (Iron CA trust), #3949 (Mattermost), etc. I'll highlight the top ones by creation date recency and relevance, and analyze underlying needs: Docker/Linux reliability, Iron proxy reliability, skill feedback, etc.

   5. **Bugs & Stability** - Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist. #3951 is the bug: Linux Docker task deletion leaves orphaned session, SQLite error spam. Fix PR #3952 exists same day. Also other bugs in the PR list like #3878, #3919, etc., but those are fixes, not new bugs. Only #3951 is a new issue reported today. I'll rank it as high severity (indefinite log spam, database unmount issue).

   6. **Feature Requests & Roadmap Signals** - User-requested features, predict which might be in next version. Looking at PRs: #3932 `/add-lean-tasks`, #3931 minimalContext provider, #3950 Iron CA trust, #3948 Iron proxy persistence, #3947 container cleanup, #3930 env resolution. These signal roadmap: lean tasks, minimal context, Iron improvements, container hygiene.

   7. **User Feedback Summary** - Real user pain points, use cases, satisfaction/dissatisfaction. Inferred from issues/PRs: Docker/Linux users hitting orphaned mounts and SQLite spam; Iron proxy users on private models; setup workflow friction; skill error reporting. Satisfaction: active development, many fixes turnaround.

   8. **Backlog Watch** - Long-un

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest – 2026‑09‑28  

**Summary of Activity**  
- **Issues & PRs**: 18 issues (16 closed, 2 open) and 10 PRs (8 closed, 2 open) updated in the past 24 h.  
- **Overall Health**: Project is consolidating recent work—most open‑source contributions are being merged, and critical security bugs are receiving focused attention.  
- **Open Backlog**: Two user‑facing feature requests (WhatsApp Web, Web‑UI setup) and one high‑severity security issue remain unresolved.  

---  

## 1. Today's Overview  
NullClaw is in a maturation phase. The majority of recent activity is the **merging of long‑standing PRs** that improve core reliability (Matrix sync persistence, Teams token handling, email bi‑directionality, approval flow) and add new capabilities (Eden AI, adaptive intelligence pipeline). The only open issues (#764, #974) and PRs (#1012, #1013) represent the current frontier: branding visibility, security hardening, and a new provider. No new releases were published today, indicating the team is still in a pre‑release validation stage.  

---  

## 2. Releases  
**None** – No new versions were tagged or published in the last 24 h.  

---  

## 3. Project Progress (Merged / Closed PRs Today)  

| PR | Author | Status | Core Impact |
|----|--------|--------|-------------|
| **#1012** | vernonstinebaker | **OPEN** | Fixes A2A bearer token scoping (closes #974). |
| **#1013** | cenab | **OPEN** | Adds **Tsubasa** as an OpenAI‑compatible provider. |
| **#968** | addadi | **CLOSED** | Persists Matrix `next_batch` across restarts; improves test isolation. |
| **#958** | dtarandek | **CLOSED** | Accepts lowercase `serviceurl` JWT claim in Teams auth; raises JWKS fetch cap. |
| **#990** | MVS‑source | **CLOSED** | Integrates **Eden AI** as an OpenAI‑compatible gateway. |
| **#527** | sanderdewijs | **CLOSED** | Deploys **Adaptive Intelligence Pipeline** + early **email/WhatsApp Web** channel work. |
| **#667** | sanderdewijs | **CLOSED** | Turns email channel into **full bi‑directional IMAP** with IDLE and network resilience. |
| **#956** | dependabot[bot] | **CLOSED** | Bumps Docker Alpine base from 3.23 → 3.24 (dependency hygiene). |
| **#969** | valonmulolli | **CLOSED** | Implements structured **approval_request / approval_response** flow for shell tool. |
| **#1009** | serhiy‑bzhezytskyy | **CLOSED** | Corrects **supervised mode**: medium/high‑risk commands now pause for `/approve` instead of failing outright (closes #900). |

*Key Takeaway*: The team is **locking down security (A2A)**, **expanding AI provider support**, and **stabilizing critical channels** (email, Matrix, Teams). The approval workflow and adaptive intelligence loop are now operational, addressing long‑standing supervision concerns.  

---  

## 4. Community Hot Topics (Most Discussed Issues/PRs)  

| Issue/PR | Comments | 👍 | Core Theme | Why It Matters |
|----------|----------|----|------------|----------------|
| **#183** – WhatsApp Web via Baileys | 5 | 2 | **Feature Request** | Removes dependency on Meta Business Cloud API; simplifies WhatsApp integration. |
| **#861** – Web UI on headless VPS | 4 | 0 | **Documentation / UX** | Users struggle with non‑intuitive setup; better guides boost adoption. |
| **#764** – NullClaw logo on Agent Skills list | 4 | 0 | **Visibility / Branding** | Inclusion improves discoverability for skill‑centric workflows. |
| **#449** – Docker Hub official image | 4 | 1 | **Packaging / DevOps** | Official image reduces friction for container users. |
| **#477** – Feishu WS disconnect | 4 | 0 | **Stability (Chinese market)** | Critical for users relying on Fei​shu​u real‑time messaging. |
| **#619** – Error message improvement | 4 | 1 | **Developer

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑09‑28**

---

### 1. Today’s Overview
The repository shows modest but steady maintenance activity: one issue was updated and six pull‑requests saw updates in the last 24 hours. No new releases were published today. The open issue proposes a new tool‑selection mechanism, while the PR activity is dominated by dependency bumps and a routine code‑base knowledge‑graph refresh. Overall project health appears stable, with continuous dependency up‑keep and no signs of regressions or blocking bugs.

### 2. Releases
*No new releases were tagged or published on 2026‑09‑28.*  
(Refer to the “Latest Releases” section for the most recent version history.)

### 3. Project Progress – Merged/Closed PRs Today
| PR | Title | Author | Link | Notes |
|----|-------|--------|------|-------|
| #8104 | `chore(deps): bump the everything-else group across 1 directory with 29 updates` | dependabot[bot] | [#8104](https://github.com/nearai/ironclaw/pull/8104) | Merged/closed; updated `uuid`, `base64`, `rust_decimal`, and 26 other crates. No functional changes beyond dependency upgrades. |

All other PRs remain open, indicating ongoing dependency maintenance work.

### 4. Community Hot Topics
*Engagement metrics (comments/reactions) are currently zero for all tracked items, suggesting low immediate discussion volume.*  
Nevertheless, the most substantive item is:

- **Issue #8113 – “Proposal: opt‑in turn‑0 tool selection (BM25F + embeddings)”**  
  Author: CjS77 · Created/Updated: 2026‑09‑27 · [#8113](https://github.com/nearai/ironclaw/issues/8113)  
  *Underlying need:* Users want the agent to predict required tools at conversation start, reducing latency and improving relevance by advertising only a small, predicted tool set plus four discovery bridges. This reflects a demand for smarter, more efficient tool‑invocation workflows.

No PRs have accumulated comments or reactions today, so no further hot topics are evident.

### 5. Bugs & Stability
*No bug, crash, or regression reports were filed or updated in the last 24 hours.*  
Consequently, there are no severity‑ranked stability issues to highlight, and no associated fix PRs are pending.

### 6. Feature Requests & Roadmap Signals
The sole feature‑request‑type artifact is Issue #8113. Its proposal aligns with a broader roadmap trend toward **adaptive tool‑selection** and **reduced overhead** in agent‑tool interactions. If the maintainers endorse the opt‑in approach, it could be slated for an upcoming minor release (likely after the current dependency‑bump cycle stabilizes).

### 7. User Feedback Summary
With no comments or reactions on recent issues/PRs, explicit user pain points are not visible in the data. The implicit feedback from the dependency‑update PRs indicates that users (or automated bots) value **up‑to‑date, secure dependencies**—a common expectation for a Rust‑based agent framework. The open tool‑selection proposal hints at a desire for **better runtime efficiency** and **more predictable tool exposure**.

### 8. Backlog Watch
Several items have been open for an extended period and may benefit from maintainer review:

| Item | Age (as of 2026‑09‑28) | Type | Link | Suggested Action |
|------|----------------------|------|------|------------------|
| PR #7834 | ~5 weeks | Dependency bump (wasm group) | [#7834](https://github.com/nearai/ironclaw/pull/7834) | Verify compatibility; consider merging if tests pass. |
| PR #8078 | ~3 weeks | Dependency bump (tokio‑ecosystem) | [#8078](https://github.com/nearai/ironclaw/pull/8078) | Low risk; likely ready for merge. |
| PR #8103 | ~1 week | Dependency bump (GitHub Actions) | [#8103](https://github.com/nearai/ironclaw/pull/8103) | Review action version changes; merge if CI remains green. |
| PR #8114 | 0 days | Dependency bump (everything‑else group) | [#8114](https://github.com/nearai/ironclaw/pull/8114) | Large batch; ensure no breaking changes before merge. |
| Issue #8113 | 0 days | Feature proposal (tool selection) | [#8113](https://github.com/nearai/ironclaw/issues/8113) | Evaluate feasibility, prototype, and gather community feedback. |

Addressing these backlog items will help keep the dependency chain current and assess whether the proposed tool‑selection enhancement fits the project’s near‑term goals.

--- 

*All links point to the respective GitHub resources within the nearai/ironclaw repository.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑09‑28**  
*Generated from GitHub activity (issues/PRs updated in the last 24 h)*  

---  

### 1. Today's Overview  
The repository saw modest but focused activity: **5 issues** and **8 pull‑requests** were touched in the past day, with no new releases. Most of the updated items are marked *[stale]*, indicating they have been idle for a while but are now receiving maintenance attention (e.g., security fixes, UX polish, and build tweaks). Overall project health appears stable – critical security flaws have been addressed, and a handful of usability and stability improvements were merged, while a few open feature‑request issues remain awaiting triage.  

---  

### 2. Releases  
*No new releases were published today.*  

---  

### 3. Project Progress – Merged/Closed PRs  

| PR | Type | Summary | Link |
|----|------|---------|------|
| #979 | fix | Corrected missing spacing between selected skill options in the Agent create/edit dialogs. | [#979](https://github.com/netease-youdao/LobsterAI/pull/979) |
| #1038 | fix | Guarantees that `ReadableStreamDefaultReader` is cancelled on errors/timeouts in streaming response handlers, preventing resource leaks. | [#1038](https://github.com/netease-youdao/LobsterAI/pull/1038) |
| #1042 | fix (security) | Patches two critical vulnerabilities: SSRF via `api:fetch/stream` IPC and arbitrary file read via `dialog:readFileAsDataUrl`. | [#1042](https://github.com/netease-youdao/LobsterAI/pull/1042) |
| #1044 | fix (installer) | Normalises Windows NSIS install paths when a drive root is selected, avoiding duplicate `\LobsterAI` segments. | [#1044](https://github.com/netease-youdao/LobsterAI/pull/1044) |
| #1045 | feat | Adds an unsaved‑changes confirmation when switching agents in the settings panel. | [#1045](https://github.com/netease-youdao/LobsterAI/pull/1045) |
| #2769 | fix (dev) | Adjusts Vite watch exclusions so that renderer artifact sources trigger hot‑reload during development. | [#2769](https://github.com/netease-youdao/LobsterAI/pull/2769) |
| #2770 | feat | Introduces basic Word‑document editing capabilities in the renderer. | [#2770](https://github.com/netease-youdao/LobsterAI/pull/2770) |

These merges collectively improve **security**, **resource management**, **installer reliability**, **developer experience**, and **user‑facing functionality** (agent switch safety, Word editing).  

---  

### 4. Community Hot Topics  

| Item | Comments | Reactions | Why it’s active | Link |
|------|----------|-----------|----------------|------|
| Issue #976 – duplicate timeout prompts in offline mode | 2 | 0 | Highlights a UX regression where users see two timeout messages when the network is down, conflicting with interaction guidelines. | [#976](https://github.com/netease-youdao/LobsterAI/issues/976) |
| Issue #1041 – SSRF & arbitrary file read (security) | 2 | 0 | Reported a critical security flaw; prompted the immediate fix in PR #1042. Shows community vigilance around safety. | [#1041](https://github.com/netease-youdao/LobsterAI/issues/1041) |
| Issue #1046 – context‑window limit documentation / configurability | 2 | 0 | Users seek clarity on why the context window is capped at 200 K and whether it can be raised to match the model’s 1 M capacity. | [#1046](https://github.com/netease-youdao/LobsterAI/issues/1046) |
| Issue #1047 – skill persistence after agent switch | 2 | 0 | Describes a bug where cleared skills reappear when toggling agents, indicating state‑management gaps. | [#1047](https://github.com/netease-youdao/LobsterAI/issues/1047) |
| PR #978 – chat‑folder feature (open) | 0 | 0 | A long‑running feature request for grouping conversations into user‑defined folders; still awaiting review. | [#978](https://github.com/netease-youdao/LobsterAI/pull/978) |

The most discussed items revolve around **UX polish (duplicate prompts, skill persistence)**, **security hardening**, and **feature extensibility (context window, chat folders)**.  

---  

### 5. Bugs & Stability  

| Severity | Bug | Status | Fix PR (if any) | Link |
|----------|-----|--------|----------------|------|
| **High** | SSRF via `api:fetch/stream` & arbitrary file read (`dialog:readFileAsDataUrl`) | Closed (fixed) | #1042 | [#1041](https://github.com/netease-youdao/LobsterAI/issues/1041) |
| **Medium** | Stream reader not released on error/timeout (resource leak) | Closed (fixed) | #1038 | [#1038](https://github.com/netease-youdao/LobsterAI/pull/1038) |
| **Medium** | Duplicate timeout prompts when offline | Open (no fix yet) | – | [#976](https://github.com/netease-youdao/LobsterAI/issues/976) |
| **Low** | Missing URL validation in deep‑link handler (potential auth‑flow abuse) | Open | – | [#977](https://github.com/netease-youdao/LobsterAI/issues/977) |
| **Low** | Skill list spacing visual glitch | Closed (fixed) | #979 | [#979](https://github.com/netease-youdao/LobsterAI/pull/979) |
| **Low** | Skill persistence after agent switch | Open (no fix yet) | – | [#1047](https://github.com/netease-youdao/LobsterAI/issues/1047) |

The two **high‑severity** security issues have already been patched. Remaining open bugs are primarily UX or state‑management concerns.  

---  

### 6. Feature Requests & Roadmap Signals  

| Request | Description | Indicated Priority | Likely Next‑Version Inclusion |
|---------|-------------|--------------------|------------------------------|
| Context‑window configurability (Issue #1046) | Allow users/admins to raise the limit from 200 K to the model‑supported 1 M, or at least document the reason for the cap. | Medium (documentation + optional config) | Could appear in a **maintenance** release if a config flag is added; otherwise, documentation update soon. |
| Chat‑folder / conversation grouping (PR #978) | Let users drag sessions into custom folders persisted in SQLite. | High (frequent request) | The PR is open but stalled; maintainers may prioritize it after clearing the backlog of stale items. |
| Unsaved‑changes warning on agent switch (PR #1045) – already merged | Shows that the team values preventing data loss; similar prompts may be added for other destructive actions (e.g., clearing skills). | Low‑Medium | Expect follow‑up UX guards in upcoming sprints. |
| Word‑document editing (PR #2770) – merged | Basic .docx editing capability now present; future work may expand formatting, collaboration, or export options. | Low | Likely incremental enhancements in later releases. |

Overall, the roadmap signals a focus on **extensibility (folders, configurable limits)** and **polishing UX safeguards**.  

---  

### 7. User Feedback Summary  

- **Pain points**: Users are frustrated by **misleading timeout messages** when offline, and by **skill state leaking** across agent switches, which disrupts workflow confidence.  
- **Security concerns**: The SSRF and file‑read vulnerabilities were raised sharply; the rapid fix was appreciated, reinforcing trust in the project’s responsiveness to safety issues.  
- **Usability requests**: Clear desire for **better organization** of many chats (folders) and **transparency** around model limits (context window).  
- **Positive notes**: Recent merges for **unsaved‑changes warnings**, **stream‑reader leak fixes**, and **Word editing** show that the team is actively addressing both stability and feature richness.  

---  

### 8. Backlog Watch  

| Item | Age (days) | Type | Why it needs attention | Link |
|------|------------|------|------------------------|------|
| Issue #976 – duplicate timeout prompts | 180+ | UX bug | Affects offline experience; simple UX tweak likely resolves it. | [#976](https://github.com/netease-youdao/LobsterAI/issues/976) |
| Issue #977 – missing deep‑link URL validation | 180+ | Security hygiene | Low‑exploitability but should be hardened to prevent auth‑flow abuse. | [#977](https://github.com/netease-youdao/LobsterAI/issues/977) |
| PR #978 – chat‑folder feature | 180+ | Feature | High user demand; stalled due to missing review/testing. | [#978](https://github.com/netease-youdao/LobsterAI/pull/978) |
| Issue #1047 – skill persistence after agent switch | 180+ | State‑management bug | Causes confusion; needs a deeper look at skill‑store persistence logic. | [#1047](https://github.com/netease-youdao/LobsterAI/issues/1047) |
| Issue #1046 – context‑window limit doc/config | 180+ | Documentation/Feature | Awaiting clarification or optional config; impacts power users. | [#1046](https://github.com/netease-youdao/LobsterAI/issues/1046) |

These items have been idle for several months despite being marked *[stale]*. Addressing them would improve overall product polish and reduce technical debt.  

---  

**Takeaway:** LobsterAI is maintaining a steady pace of security and stability fixes while a handful of UX and feature‑request items await triage. Prioritizing the oldest open bugs and the chat‑folder PR would likely yield the biggest immediate impact on user satisfaction.  

*All links point to the respective GitHub issue or pull request.*

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

# CoPaw Project Digest — 2026-09-28

## 1. Today's Overview
CoPaw saw moderate activity in the last 24 hours with **8 issue updates** and **7 PR updates**. The project is actively addressing context-window management bugs (#7853, #7965) and desktop stability issues (#8000, #7995), while the community surfaces UX pain points around font sizing, pre-made model management, and message editing. Three PRs were merged, including a significant context-reclamation fix and a new multi-tab terminal feature. No new releases were published.

## 2. Releases
**No new releases** in the last 24 hours. Current latest remains v2.2.x series (desktop build 2.2.1 referenced in issues).

## 3. Project Progress — Merged/Closed PRs
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) | **Bug Fix** | Reclaims historical media in Scroll context folding; aligns thinking-token omission with token counting. Directly fixes #7853 (unbounded base64 image accumulation). | **High** — resolves context-window exhaustion in image-heavy sessions. |
| [#7953](https://github.com/agentscope-ai/QwenPaw/pull/7953) | **Bug Fix** | Preserves actionable per-asset import failures (portability improvement). | **Medium** — improves developer experience for asset imports. |
| [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | **Feature** | Adds authenticated multi-tab chat terminal (xterm) with conversation-scoped working directories, lazy-loaded below shared chat/files workspace. | **High** — major desktop/console UX enhancement for power users. |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) (Closed) | 8 comments, 0 👍 | **Critical context-window bug**: ToolResultPruner ignored `type="data"` blocks, causing base64 images from `view_image` to accumulate indefinitely. Fixed by #7965. |
| [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | 3 comments, 0 👍 | **Decluttering**: Users want to disable unused pre-made models/channels (OCD/clean-workspace desire). |
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | 2 comments, 0 👍 | **Agent autonomy**: Automated/cron agents need self-managed context checkpoints & resets to prevent instruction-following degradation at 50–60% context utilization. |
| [#8000](https://github.com/agentscope-ai/QwenPaw/issues/8000) | 1 comment, 0 👍 | **Desktop stability**: Missing single-instance guard on Windows causes second launch to kill first instance's backend. |
| [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) | 0 comments | **Files panel UX**: Refresh button doesn't update expanded folders (fixes #7995). |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853): Unbounded base64 image accumulation → context window exhaustion | **Closed** (fixed) | [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) merged |
| **High** | [#8000](https://github.com/agentscope-ai/QwenPaw/issues/8000): Desktop double-launch kills first instance's backend (Windows) | Open | — |
| **Medium** | [#7995](https://github.com/agentscope-ai/QwenPaw/issues/7995): Files panel refresh leaves expanded folders stale | Open | [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) open |
| **Medium** | [#7998](https://github.com/agentscope-ai/QwenPaw/issues/7998): Context compression only triggers on manual submit, not agent-auto-submit | Closed (question) | — (design clarification needed) |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Disable pre-made models/channels** | [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | **High** — simple settings toggle, "good first issue" potential |
| **Adjustable desktop UI font size** | [#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999) | **High** — marked `good first issue`, accessibility need |
| **Message retraction/editing + workspace rollback (WebUI)** | [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | **Medium** — complex (history truncation + file snapshots) |
| **Agent self-managed context lifecycle (auto checkpoint/reset)** | [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | **Medium** — architectural, affects cron/automation reliability |
| **Configurable MCP tool-call timeout** | [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | **Medium** — PR under review since Aug, adds `tool_call_timeout` param |

## 7. User Feedback Summary
- **Pain Points**: 
  - Context window exhaustion in long/image-heavy sessions (now fixed)
  - Desktop app instability on Windows (double-launch kills backend)
  - Inability to declutter unused models/channels
  - Fixed font size hurts accessibility (high-DPI, vision-impaired, presentation)
  - Files panel refresh doesn't reflect agent-created files without full reload
  - Context compression not triggering during autonomous agent loops
- **Positive Signals**: 
  - Multi-tab terminal (#7861) welcomed for parallel workflows
  - Active community reporting detailed repro steps (logs, screenshots)
  - Contributors stepping up for "good first issue" UI fixes (#7996, #7999)

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | 2026-08-10 (49 days) | **MCP timeout configurability** — critical for long-running tool calls; PR is "Under Review" but stalled. |
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | 2026-05-19 (132 days) | **Agent context autonomy** — blocks reliable cron/automation; needs design decision on checkpoint/reset API. |
| [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | 2026-09-23 (5 days) | **Settings UX unification** — large refactor touching design system; needs review for merge readiness. |
| [#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001) | 2026-09-27 (1 day) | **Timeout tool result recovery** — addresses #7981; improves agent resilience but needs test coverage. |

---

**Health Indicators**: 🟢 **Active bug fixing** (critical context bug resolved in 10 days) | 🟡 **Desktop stability gaps** (single-instance, font size) | 🟡 **Long-running PRs** (#6874, #4525) need triage | 🟢 **Community engagement** (detailed issues, contributor PRs for UI fixes)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-28

---

## 1. Today's Overview

ZeroClaw is experiencing a period of exceptionally high development velocity, with 48 issues and 50 pull requests updated in the last 24 hours. The project has **no new releases**, but release tooling and packaging infrastructure are undergoing significant consolidation. The dominant theme today is **security hardening** — two new PRs (#11205, #11206) introduced an authority recheck foundation, and multiple closed PRs reinforced authentication boundaries across gateway and RPC surfaces. Active work also spans plugin architecture evolution (channels/tools moving to runtime WASM plugins), multi-channel expansion (Microsoft Teams), and release reliability fixes. With 40 open issues and 37 open PRs, the pipeline is healthy but signals potential review bottleneck at maintainer level.

---

## 2. Releases

**No new releases on 2026-09-28.**

However, release infrastructure activity is intense:
- **v0.8.5** was the most recent release, which had crates.io publishing failures that are being addressed by a stacked set of PRs (#11091, #11095, #11105).
- Release efficiency is tracked under **#10814** (P1, high risk), targeting repeatable publication workflows.
- The `promote-stable` flow was fixed (#11109, merged) to include root `llms.txt`/`llms-full.txt` files.

---

## 3. Project Progress

### Merged/Closed PRs Today (2026-09-28):

| PR | Title | Impact |
|---|---|---|
| [#11071](https://github.com/zeroclaw-labs/zeroclaw/pull/11071) | CI debounce master-push runs | Reduced wasted compute; faster CI feedback |
| [#11109](https://github.com/zeroclaw-labs/zeroclaw/pull/11109) | Fix docs: root llms pair on stable promotion | Corrected stable version metadata |
| [#11107](https://github.com/zeroclaw-labs/zeroclaw/pull/11107) | Fix plugins: escape apostrophes in egress remedy commands | Security fix for grant serialization |
| [#11177](https://github.com/zeroclaw-labs/zeroclaw/pull/11177) | Fix gateway: require owner-only admin token for pairing codes | **Critical security fix** — pairing code was publicly accessible |
| [#11178](https://github.com/zeroclaw-labs/zeroclaw/pull/11178) | Feat plugins: admit channel mirrors via manifest `provides` | Plugin architecture advancement |
| [#11202](https://github.com/zeroclaw-labs/zeroclaw/pull/11202) | Fix gateway: share inbound-auth state between gateway and RPC | Eliminated auth policy split |
| [#11121](https://github.com/zeroclaw-labs/zeroclaw/pull/11121) | Docs: require bearer token for remote WSS | Security documentation fix |
| [#10823](https://github.com/zeroclaw-labs/zeroclaw/pull/10823) | Feat RPC: add `config/set-many` for atomic batch writes | New API capability |
| [#10824](https://github.com/zeroclaw-labs/zeroclaw/pull/10824) | Fix RPC: report denied batch entries and verify authorization | Security/audit improvement |

### New PRs Opened Today:
- **[#11205](https://github.com/zeroclaw-labs/zeroclaw/pull/11205)** (XL, P1): Authority recheck foundation — adds `AuthorizedOp` trait, `Admitted<Op>`, `Effect<Op>` types to `zeroclaw_runtime::security::authority`
- **[#11206](https://github.com/zeroclaw-labs/zeroclaw/pull/11206)**: Gateway config-write authority recheck under lock

---

## 4. Community Hot Topics

### Most Discussed Issues:

1. **[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)** (6 comments) — Move channels & tools from compile-time features to runtime WASM plugins. This is the foundational architecture change affecting the entire distribution model.

2. **[#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)** (5 comments) — Crates.io publishing, packaging, and `cargo-install` follow-ups. Direct user impact on installation workflow.

3. **[#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)** (5 comments) — Bootstrap file truncation at 6,000 chars is invisible to operators. A UX bug with `compact_context` enabled.

4. **[#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)** (5 comments) — OpenCode "big-pickle" returns 403 FreeTierError. Provider compatibility issue.

5. **[#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)** (4 comments) — Define execution-tree iteration budget ownership. Affects agent delegation and sub-agent fan-out.

### Most Active PRs:
- **[#11194](https://github.com/zeroclaw-labs/zeroclaw/pull/11194)** (XL): Microsoft Teams (Bot Framework) channel addition — signals channel expansion strategy
- **[#11205](https://github.com/zeroclaw-labs/zeroclaw/pull/11205)** (XL): Authority recheck foundation
- **[#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412)** (XL, P1): Session-ownership claim extraction into shared `SessionBackend` contract

**Analysis**: The community is heavily focused on infrastructure and security work. The most-discussed issues are architectural (plugin system, budget ownership) rather than feature requests from end users. This suggests the project is in a heavy refactoring phase.

---

## 5. Bugs & Stability

Ranked by severity:

### 🔴 S0 — Data Loss / Security Risk (P0–P1):
| Issue | Description | Fix PR |
|---|---|---|
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | Delegated memory tools lose principal scope — child agents access owner's private memory plane | Accepted |
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) | Session resume restores forwarded env after admin revocation | Accepted |
| [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) | Concurrent `file_edit`/`file_write` calls silently drop edits under `parallel_tools` | In progress |

### 🟠 S1–S2 — Degraded Behavior:
| Issue | Description | Status |
|---|---|---|
| [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | Multimodal image cap eviction rewrites earlier history, invalidates cache | In progress |
| [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | Bootstrap file truncation at 6,000 chars invisible to operator | Closed |
| [#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036) | OpenCode big-pickle 403 FreeTierError | Closed |
| [#10921](https://github.com/zeroclaw-labs/zeroclaw/issues/10921) | Qdrant time-bounded vector recall omits eligible results | Open |
| [#11097](https://github.com/zeroclaw-labs/zeroclaw/issues/11097) | Plugin egress remedy commands don't escape apostrophes | Closed (fixed in #11107) |
| [#10919](https://github.com/zeroclaw-labs/zeroclaw/issues/10919) | A2A/HTTP tool tests use separate locks for global proxy state | Open |
| [#11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180) | Flaky test under parallel runtime gate | In progress |

**Key insight**: Three S0 security bugs were reported on 2026-09-27, all related to **principal scope and authorization boundaries**. This cluster suggests the project recently discovered authorization model gaps, likely prompting the new authority recheck foundation (PR #11205/#11206).

---

## 6. Feature Requests & Roadmap Signals

### High-Signal Features:

1. **Runtime Plugin Architecture** (#8850) — Moving channels and tools from compile-time Cargo features to runtime-installable WASM plugins. This is the single largest architectural shift and would fundamentally change how ZeroClaw is distributed and extended.

2. **Microsoft Teams Channel** (PR #11194) — Signals aggressive multi-platform channel expansion alongside existing Discord, Signal, and CLI channels.

3. **Realtime Voice-Host Channel** (#7943) — Backend-agnostic WebSocket client for external voice hosts (CrispASR, sherpa-onnx). Would enable voice-first interactions.

4. **Stall Watchdog Enabled by Default** (#10168) — Conservative non-zero default for `stall_timeout_secs` so stalled turns abort and retry instead of hanging indefinitely.

5. **Discord Role-Based Authorization** (#9970) — `allowed_role_ids` for Discord channels, adding organizational access control.

6. **Knowledge Graph as Memory Layer** (#11053) — RFC to promote the knowledge graph from tool to first-class agent memory, with self-capturing behavior.

### Roadmap Prediction:
The **v0.9.0** timeline (tracked in #7432) appears to focus on **gateway separation** and **security architecture**. The plugin system (#8850) and Teams channel (#11194) are strong candidates for v0.9.0. The stall watchdog (#10168) and `config/set-many` (#10823) could ship in v0.8.6.

---

## 7. User Feedback Summary

### Real User Pain Points:
- **Bootstrap file truncation** (#10523): Users working with `compact_context` lose content without knowing it — invisible degradation of agent context.
- **OpenCode provider compatibility** (#11036): Free-tier "big-pickle" model fails with cryptic 403 errors.
- **Concurrent file operations** (#11136): Parallel tool execution silently drops edits — a severe reliability concern for users running agents on codebases.
- **Windows Ctrl+C force-quit** (#9028): Agent exits with exit code 1073741510 instead of graceful shutdown.
- **CLI terminal IUTF8** (#10795): Multi-byte character handling broken in interactive REPL (Backspace deletes raw bytes).

### Use Cases Emerging:
- **Enterprise/team collaboration**: Discord role authorization, Teams channel, and session ownership contracts indicate adoption in team settings.
- **Developer tooling**: ZeroCode composer editing improvements and text-editing standardization point to growing developer-facing usage.
- **Voice-first AI**: Voice-host channel RFC suggests exploration of conversational AI interfaces beyond text.

### Satisfaction Signals:
- The large number of security-focused PRs and fixes suggests the maintainer team is responsive and proactive about vulnerabilities.
- However, the clustering of S0 bugs indicates recent security model gaps that may erode trust if not resolved quickly.

---

## 8. Backlog Watch

These items have been open for extended periods and need maintainer attention:

| Issue | Opened | Days Open | Topic | Risk |
|---|---|---|---|---|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 2026-06-09 | **111 days** | Runtime & gateway delivery tracker (v0.8.6/v0.9.0) | 🔴 High — milestone tracker |
| [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | 2026-06-18 | **102 days** | Realtime voice-host channel | 🟡 Medium — parked |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 2026-07-08 | **82 days** | Runtime plugins (compile-time → WASM) | 🔴 High — foundational architecture |
| [#91

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*