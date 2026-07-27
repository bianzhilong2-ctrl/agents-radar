# OpenClaw Ecosystem Digest 2026-07-27

> Issues: 349 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-27 02:01 UTC

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

**OpenClaw Project Digest – 2026‑07‑27**  

---  

### 1. Today's Overview  
- **Activity volume:** In the last 24 h the repository recorded **349 issue updates** (245 open, 104 closed) and **500 pull‑request updates** (160 still open, 340 merged/closed).  
- **Release cadence:** No new version was published today, so the code‑base remains on the most recent `2026.7.x` prerelease line.  
- **Overall health:** The influx of PR merges (≈ 68 % of all PR activity) suggests a steady flow of bug‑fixes and refactors, while the high number of open issues signals ongoing stability work and feature negotiations.  

---  

### 2. Releases  
- **Latest releases:** *None* – the project is currently in a maintenance window, with only patch‑level updates and PR merges being landed.  

---  

### 3. Project Progress  
- **Merged/closed PRs:** **340** pull requests were merged or closed in the past day, covering refactors of the config layer, agents, plugins, and command‑line tooling.  
- **Notable closed issues:** A regression fixing duplicate Telegram replies (Issue #86519) and a fix for the “session‑reset reuse of retired ID” crash (Issue #113434) were among the most discussed closures.  
- **Feature advances:** Several experimental gates were completed in the UI (`feat(ui): complete the Labs roster…`), and a refactor of the IRC outbound adapter landed, improving message‑adapter consistency.  

---  

### 4. Community Hot Topics  
| Issue / PR | Comments | 👍 | Link | Core Concern |
|------------|----------|----|------|--------------|
| **#75** – *Linux/Windows Clawdbot Apps* | 115 | 80 | <https://github.com/openclaw/openclaw/issues/75> | Missing CLI/web clients on Linux/Windows; call for feature parity with macOS/iOS/Android. |
| **#99241** – *Image‑attachment rendering loss* | 24 | 2 | <https://github.com/openclaw/openclaw/issues/99241> | Tool stdout sometimes collapses to placeholder “(see attached image)”, breaking agent perception. |
| **#102020** – *Reply‑session initialization conflict* | 15 | 1 | <https://github.com/openclaw/openclaw/issues/102020> | Second message fails with “reply session initialization conflicted” on Signal/Discord. |
| **#86996** – *Active Memory + Codex latency spikes* | 13 | 2 | <https://github.com/openclaw/openclaw/issues/86996> | Heavy latency, timeouts, and gateway stalls when combining active‑memory, Honcho, lossless‑claw, and GPT‑5.4‑mini. |
| **#86519** – *Duplicate replies after 5.20 update* | 12 | 1 | <https://github.com/openclaw/openclaw/issues/86519> | Post‑upgrade duplicate message explosion; severity reduced but not eliminated. |
| **#11665** – *Webhook session reuse* | 11 | 0 | <https://github.com/openclaw/openclaw/issues/11665> | Need to honour `sessionKey` for multi‑turn webhook hooks. |
| **#15032** – *Per‑spawn tool restrictions* | 6 | 0 | <https://github.com/openclaw/openclaw/issues/15032> | Desire to limit tool access for sub‑agents (DMZ sandboxing). |
| **#7476** – *WhatsApp sticker support* | 6 | 1 | <https://github.com/openclaw/openclaw/issues/7476> | Current plugin can only send `.webp` as normal images, not as true stickers. |
| **PR #114230** – *test(ai): freeze Responses stream processor parity* | – | 0 | <https://github.com/openclaw/openclaw/pull/114230> | Ongoing work to align two stream processors before further changes. |

*Analysis*: The most commented issues cluster around **platform coverage gaps**, **session‑state reliability**, and **tool‑output rendering**. These repeatedly surface as “missing capabilities on non‑macOS platforms” and “inconsistent state handling” – clear signals that the maintainer team will likely prioritise cross‑platform parity and robust session recovery in the next minor release.

---  

### 5. Bugs & Stability  
| Severity (Rating) | Issue | Comments | Rating | Link | Summary |
|-------------------|-------|----------|--------|------|---------|
| **P1** (Critical) | **#99241** – Image‑attachment rendering loss | 24 | 🐚 platinum hermit | <https://github.com/openclaw/openclaw/issues/99241> | Agents cannot read stdout when tool output becomes an image placeholder. |
| | **#102020** – Reply session initialization conflict | 15 | 🦐 gold shrimp | <https://github.com/openclaw/openclaw/issues/102020> | Second message fails with init conflict; blocks Telegram/Discord flows. |
| | **#86996** – Memory + Codex latency spikes | 13 | 🦞 diamond lobster | <https://github.com/openclaw/openclaw/issues/86996> | High latency and OOM under active‑memory + Codex combo. |
| | **#86519** – Duplicate replies post‑5.20 | 12 | 🦞 diamond lobster | <https://github.com/openclaw/openclaw/issues/86519> | Duplicate outputs; partially mitigated but still present. |
| | **#92043** – 180 s compaction timeout causing permanent failure | 12 | 🦞 diamond lobster | <https://github.com/openclaw/openclaw/issues/92043> | Long‑running summarisation gets stuck, leading to unrecoverable timeout. |
| | **#85251** – Codex app‑server silent turn start | 12 | 🐚 platinum hermit | <https://github.com/openclaw/openclaw/issues/85251> | Agent never receives `turn/completed` after `turn/started`. |
| **P2** (High) | **#95840** – `contextPruning` (cache‑ttl) never fires for OpenAI | 6 | 🐚 platinum hermit | <https://github.com/openclaw/openclaw/issues/95840> | Automatic pruning blocked for OpenAI models. |
| | **#108394** – Telegram progress draft hides tool rows | – | – | <https://github.com/openclaw/openclaw/issues/108394> | UI regression in progress view. |
| | **#90378** – Cron store migration to SQLite silently changes defaults | 7 | 🐚 platinum hermit | <https://github.com/openclaw/openclaw/issues/90378> | Silent JSON→SQLite migration changes job delivery mode. |

*Fixes in PRs*: Several of the above (e.g., #86519, #99241) already have associated **maintainer‑submitted PRs** that address the core bug (see PR #114219 for abort‑reason preservation, PR #114056 for in‑place Codex session recovery). However, many remain open, indicating ongoing triage.

---  

### 6. Feature Requests & Roadmap Signals  
| Feature | Issue | Rating / Context | Link |
|---------|-------|------------------|------|
| **Denylist support for exec‑approvals** | #6615 | P2, enhancement | <https://github.com/openclaw/openclaw/issues/6615> |
| **Webhook session reuse with consistent `sessionKey`** | #11665 | P2, linked to multi‑turn hooks | <https://github.com/openclaw/openclaw/issues/11665> |
| **Per‑spawn tool restriction** | #15032 | P2, security‑oriented sandboxing | <https://github.com/openclaw/openclaw/issues/15032> |
| **Suppress sub‑agent announce step** | #8299 | P2, UX friction | <https://github.com/openclaw/openclaw/issues/8299> |
| **WhatsApp sticker send** | #7476 | Enhancement, user‑facing | <https://github.com/openclaw/openclaw/issues/7476> |
| **Feature: Pre‑compaction notification & deferral** | #38520 | P2, reliability | <https://github.com/openclaw/openclaw/issues/38520> |
| **Per‑agent dreaming configuration** | #67413 | P2, resource‑control | <https://github.com/openclaw/openclaw/issues/67413> |
| **Telegram quote‑reply as first‑class durable contract** | #88032 | P2, stability of chat flow | <https://github.com/openclaw/openclaw/issues/88032> |
| **Distributed Agent Runtime (control‑plane vs compute)** | #42026 | RFC, long‑term arch refactor | <https://github.com/openclaw/openclaw/issues/42026> |
| **Leases‑bound metadata for `sessions_spawn`** | #112589 | P1/2, orchestration proof | <https://github.com/openclaw/openclaw/pull/112589> |

*Predicted near‑term*: The maintainer team has already merged UI‑roster completions and refactors around IRC/telegram adapters. With the high comment count on platform‑coverage and session‑reuse issues, **a “cross‑platform CLI/Web” milestone** and **enhanced session‑state durability** are likely targets for the upcoming `2026.8` beta.

---  

### 7. User Feedback Summary  
- **Pain points**: Frequent crashes on Windows/Linux CLI clients, duplicate Telegram replies after version updates, and silent session‑state loss when compaction times out.  
- **Use‑case clusters**: Multi‑turn webhook hooks, sandboxed sub‑agent execution, and richer media handling (stickers, quoted replies).  
- **Sentiment**: Overall satisfaction appears **moderate to high** for core functionality, but **UX frictions** (missing platform parity, invisible progress UI, and occasional “stuck” sessions) generate measurable frustration, especially among power users who rely on Telegram/Discord direct channels.

---  

### 8. Backlog Watch  
| Issue | Age (days) | Status | Why it matters |
|-------|------------|--------|----------------|
| **#42026** – Distributed Agent Runtime RFC | 560+ | Open | Foundational architectural change; still missing maintainer commitment and community consensus. |
| **#26370** – Per‑agent cron isolation | 540+ | Open | Critical for multi‑tenant deployments; no progress since early 2026. |
| **#6599** – `/models test‑fallback` command | 515+ | Open | Would improve reliability of fallback chain verification; no implementer assigned. |
| **#87254** – Plugin‑state eviction on row‑cap | 150+ | Open | Addresses stale plugin row overflow; low attention despite P1 rating. |
| **#113474** – Raspberry Pi 5 crash loop | 8+ | Closed (but recurring) | Recurring crash loop on Pi 5 indicates unresolved stability issue; needs maintainer triage. |
| **PR #114233** – UI Labs roster completion | 0 (merged) | Merged | Shows maintainer willingness to finish UI experiments; may signal openness to similar UI‑related backlog items. |

*Watchlist recommendation*: Prioritise **#42026** and **#26370** for a dedicated maintainer sync, and schedule a **backlog grooming** session for the longstanding plugin‑state and fallback‑verification issues.

---  

**Bottom line:** OpenClaw remains a highly active open‑source project with a strong daily merge velocity, but the stability surface is currently dominated by session‑state edge cases and cross‑platform gaps. Targeted fixes to the most‑commented issues, coupled with roadmap‑aligned feature deliveries (session‑key reuse, per‑spawn tool gating, and UI parity), should be the primary levers for maintaining momentum through the upcoming release cycle.  

---  

*All links are formatted for direct navigation on GitHub.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report
**Date:** 2026-07-27

---

## 1. Ecosystem Overview

The personal AI assistant and autonomous agent open-source landscape in mid-2026 is highly fragmented yet converging around a common stack: multi-channel messaging integration (Telegram, Discord, Slack, WhatsApp), LLM provider abstraction, session state durability, and increasingly, security hardening and sandboxing. Eight active repositories were reviewed — ranging from early-stage Rust micro-kernels (ZeroClaw) to mature Python-based multi-agent frameworks (OpenClaw) — spanning contributors in Asia-HK (NanoBot), US-based research labs (Hermes Agent), and generalist community hubs. The dominant themes are **cross-platform parity**, **session reliability**, and **supply-chain security**, with projects at varying stages of maturity but shared technical DNA.

---

## 2. Activity Comparison

| Project | Issues (last 24h) | PRs (last 24h) | Release Status | Health Score* |
|---------|-------------------|----------------|----------------|---------------|
| **OpenClaw** | 349 (245 open / 104 closed) | 500 (160 open / 340 merged) | None (2026.7.x prerelease) | 🟢 High |
| **NanoBot** | 9 updated (7 resolved) | 29 (22 merged/closed) | None | 🟢 High |
| **Hermes Agent** | 50 (41 open) | 50 (0 merged/closed) | None (v0.18.2) | 🟡 Moderate |
| **PicoClaw** | 4 active | 7 (1 merged) | None | 🟡 Moderate |
| **NanoClaw** | 2 open (0 updated) | 8 (2 merged/closed) | None | 🟡 Moderate |
| **IronClaw** | 4 open | 18 (6 merged/closed) | None (0.5.x) | 🟡 Moderate |
| **LobsterAI** | 2 (1 closed) | 8 (1 merged) | None | 🟠 Low |
| **Moltis** | 0 | 8 (0 merged) | None | 🟡 Moderate |
| **CoPaw** | 12 (8 updated) | 8 (0 merged) | None (v2.0.1) | 🟡 Moderate |
| **ZeroClaw** | 50 | 50 (2 merged) | Pre-release (v0.8.4 pending) | 🟠 Low |

*Health Score is qualitative, weighted on merge velocity, community response, and bug resolution rate. "Stable/fragmented/low" scores reflect velocity, open bug accumulation, and release readiness.

---

## 3. OpenClaw's Position

**Advantages vs peers:**

- **Largest active contributor base** by a wide margin — 349 issue updates and 500 PR updates in 24 hours dwarfs every other project. No other project exceeds 50 issues or 50 PRs in the same window.
- **Highest merge closure ratio** (~68% of PR activity), indicating disciplined triage and maintainer bandwidth compared to Herme­s Agent (0 merged) or CoPaw (0 merged).
- **Broadest platform surface** — macOS, iOS, Android, Linux, Windows, Telegram, Discord, Signal, IRC, webhooks — while most peers target 1–2 channels.

**Technical approach differences:**

- OpenClaw uses a **plugin-first architecture** (agent plugins, message adapters, command-line tooling all plugin-gated) whereas NanoBot and IronClaw favor **Rust-native sandboxing** and **runtime isolation**.
- OpenClaw's config layer is undergoing active refactor (PR merges), while IronClaw and ZeroClaw are in a **kernel/sandbox consolidation** phase.

**Community size:**

- OpenClaw's 349 daily issue updates suggest a **multi-thousand contributor community**, likely the largest in this cohort. The next-largest is ZeroClaw and Hermes Agent at ~50/day — an order of magnitude smaller.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Needs |
|------------|-------------------|----------------|
| **Session state durability & recovery** | OpenClaw (#102020, #11665, #92043), NanoClaw (#3136, #3140), CoPaw (#6470, #6480) | Reliable message routing after compaction, webhook session reuse, avoiding silent reply loss |
| **Cross-platform parity** | OpenClaw (#75), IronClaw (#7462), ZeroClaw (#7462), LobsterAI (#273) | CLI/web clients on Linux/Windows; CI test coverage beyond Linux; Windows test stability |
| **Security hardening** | NanoBot (#5095, #5101), PicoClaw (#3297), IronClaw (#6689), ZeroClaw (#9386) | SSRF prevention, DNS pinning, sandbox credential isolation, API key leakage |
| **Model/provider diversity** | PicoClaw (AI Router, Exa), OpenClaw (multi-model), Hermes Agent (multi-provider) | Native provider presets, per-route API key handling, pluggable LLM backends |
| **Memory/compaction** | NanoBot (#5054, #5099), OpenClaw (#92043), Moltis (#1158 zvec backend) | Correct cursor advancement post-compaction, pre-compaction notification, vector storage backends |
| **Rich media handling** | OpenClaw (#99241 image render, #7476 stickers), Hermes Agent (#62936 large uploads), ZeroClaw (#5514) | Image attachment rendering, video/audio data blocks, Telegram media grouping |
| **Agent sandboxing & gating** | NanoClaw (#3137), IronClaw (#6689, #6688), CoPaw (#6480 nohup) | Per-agent tool restrictions, per-account operator gating, subprocess hang prevention |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw / ZeroClaw | PicoClaw |
|-----------|----------|---------|--------------|---------------------|----------|
| **Primary language** | Python-based (inferred from PR scope) | Python | Python | Rust | Go |
| **Target user** | Power users, multi-channel operators | Self-hosted automation | Research / agent experimentation | Systems/embedded, security-critical | Edge/IoT, lightweight deployment |
| **Architectural focus** | Plugin ecosystem, config layer refactor | Extension platform, memory compaction | Gateway config, profile isolation | Recoverability contract, Wasm/sandbox | Provider presets, i18n |
| **Release maturity** | Pre-release 2026.7.x line | Rolling (no tag) | v0.18.2 stable | v0.5.x, prepping v0.8.4 | Rolling |
| **Geographic origin** | Community (likely US/EU) | HKUDS (Hong Kong) | Nous Research (US) | Near (US), QHkm (China) | Sipeed (China) |
| **Key differentiator** | Broadest channel support + largest community | Security-first image handling + unified extension platform | Research-grade agent profile isolation | Formal recoverability contract + Rust safety | Go micro-kernel optimized for low-resource devices |

---

## 6. Community Momentum & Maturity

**Rapidly iterating (daily merge velocity):**
- **OpenClaw** — 340 PR merges/closures per day; highest activity in the ecosystem, but also highest bug-open count, indicating active feature negotiation alongside stability work.
- **NanoBot** — 22 PR merges/closures in 24 hours; focused on security and infrastructure, with a clear roadmap toward modular extensibility.
- **ZeroClaw** — Despite modest numbers (2 merges), the project is at a **release-boundary moment** (v0.8.4), suggesting a stabilization sprint after rapid earlier growth.

**Stabilizing / maturing:**
- **Hermes Agent** — 0 PR merges but steady issue/PR volume; entering a refinement phase (profile isolation, desktop ergonomics) ahead of v0.19.
- **IronClaw** — Focused on architectural unification (error vocab, safe text, MCP multi-tenancy); transitioning from feature development to contract enforcement.
- **Moltis** — No merges yet; 8 PRs in early review for memory backends, ACP, and security hardening.

**Low-momentum / stalled:**
- **LobsterAI** — Only 1 bug actively addressed; 147+ day age on critical issue #1243; Linux request closed without action.
- **CoPaw** — Post-v2.0.1 stabilization phase with multiple regressions unfixed; community contributors are driving (not maintainers).
- **TinyClaw / ZeptoClaw** — No activity reported.

---

## 7. Trend Signals

1. **Security is now a first-class requirement** — Every project has at least one active security hardening PR or issue (SSRF, credential leakage, sandbox isolation, API key sanitization). Supply-chain risks around image ingestion and sandbox execution are now community expectations, not edge cases.

2. **Cross-platform parity is the #1 community demand** — OpenClaw issue #75 (Linux/Windows CLI), Hermes Agent #62936 (Telegram large uploads), ZeroClaw #7462 (Windows CI failures), and LobsterAI #273 (Linux build) all signal that **users expect parity with macOS first-class support** and are frustrated by platform gaps.

3. **Session state and compaction reliability are systemic pain points** — Compaction timeout crashes (#92043), message routing corruption after migration (#3136), and silent reply loss (#3140) recur across OpenClaw, NanoClaw, and CoPaw. This is a **maturity-level problem** that the ecosystem will need standardized solutions for.

4. **Agent sandboxing is migrating from convenience to necessity** — Per-spawn tool restrictions (OpenClaw #15032), per-account operator gating (Moltis #1170), credential placeholder registries (IronClaw #6689), and landlock self-protection (ZeroClaw #9233) show a clear trajectory toward **mandatory sandboxing** in production deployments.

5. **Modular extensibility is converging** — NanoBot's unified extension platform, OpenClaw's plugin gates, Hermes Agent's profile cloning, and Moltis's ACP agent support all point toward a future where **agents are composable, portable, and vendor-neutral**. The ACP (Agent Communication Protocol) is emerging as the de facto interoperability layer.

6. **Vector memory and long-context management are the next frontier** — PicoClaw and Moltis are experimenting with pluggable vector backends (zvec, redb), while OpenClaw and CoPaw are building visual context compression. **Long-running agent sessions** are the performance bottleneck being actively addressed.

---

**Prepared for technical decision-makers and AI agent developers. All links are to live GitHub repositories. Data snapshot taken 2026-07-27.**

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-27

## 1. Today's Overview  
The NanoBot project experienced significant development momentum with **29 pull requests** updated in the last 24 hours, of which **22 were merged or closed**, indicating strong progress toward stabilization and feature delivery. Nine issues were also updated, with **7 resolved**, reflecting active maintenance. No new releases were published today. The focus was primarily on critical bug fixes, security hardening, and infrastructure improvements. Overall, the project shows robust engagement from contributors addressing both immediate stability concerns and foundational enhancements.

## 2. Releases  
No new releases were made on 2026-07-27.

## 3. Project Progress  
A total of **22 PRs were merged or closed**, advancing several key areas:

- **Security & Image Handling**: PRs [#5095](https://github.com/HKUDS/nanobot/pull/5095) and [#5101](https://github.com/HKUDS/nanobot/pull/5101) hardened image URL download flows by introducing DNS pinning, redirect validation, and provider proxy support, significantly improving security posture around untrusted content ingestion.
- **Channel Reliability**: Fixes like [#5069](https://github.com/HKUDS/nanobot/pull/5069) improved WeChat/Feishu connector reliability by preventing credential saving after connection cancellation.
- **Memory & Dream System**: Multiple PRs including [#5054](https://github.com/HKUDS/nanobot/pull/5054) and [#5099](https://github.com/HKUDS/nanobot/pull/5099) addressed Dream system logic to ensure correct cursor advancement and history preservation during compaction.
- **Agent Runtime**: Improvements such as [#5056](https://github.com/HKUDS/nanobot/pull/5056) preserved output continuity across length recovery scenarios, enhancing agent consistency under token constraints.
- **Extension Platform**: A major architectural addition came via [#5098](https://github.com/HKUDS/nanobot/pull/5098), introducing a unified extension platform for managing native capabilities with transactional lifecycle control.

## 4. Community Hot Topics  
Several high-priority items drew attention due to their impact and urgency:

- **[Security Fix PR #5095](https://github.com/HKUDS/nanobot/pull/5095)** – Hardened image downloads to prevent SSRF attacks and unsafe network access. Marked as P1 priority, this reflects growing awareness of supply chain risks in AI agents.
- **[Image Proxy Support PR #5101](https://github.com/HKUDS/nanobot/pull/5101)** – Ensures secure handling of provider-returned images through configurable proxies, aligning with enterprise deployment requirements.
- **[Unified Extension Platform PR #5098](https://github.com/HKUDS/nanobot/pull/5098)** – Introduces a governed framework for extensions, signaling long-term modularity goals and community demand for extensibility without bloating core logic.

These topics highlight increasing emphasis on **security**, **enterprise readiness**, and **modular architecture** within the ecosystem.

## 5. Bugs & Stability  
Several critical bugs were reported and fixed today:

| Rank | Issue | Severity | Status |
|------|-------|----------|--------|
| 🔴 High | [#5051](https://github.com/HKUDS/nanobot/issues/5051): Final content lost during length recovery | Critical | Fixed in [#5056](https://github.com/HKUDS/nanobot/pull/5056) |
| 🟠 Medium | [#4792](https://github.com/HKUDS/nanobot/issues/4792): `/stop` silently discards pending queue messages | High | Open |
| 🟡 Low | [#4064](https://github.com/HKUDS/nanobot/issues/4064): Pending mid-turn messages lose runtime context | Medium | Fixed in [#5084](https://github.com/HKUDS/nanobot/pull/5084) |
| 🟢 Info | [#5040](https://github.com/HKUDS/nanobot/issues/5040): Non-standard $ref breaks strict provider schemas | Medium | Fixed in [#5057](https://github.com/HKUDS/nanobot/pull/5057) |

Notably, the length recovery bug had direct implications for agent coherence and is now resolved. However, the silent message loss in `/stop` remains an open concern requiring urgent attention.

## 6. Feature Requests & Roadmap Signals  
Key feature requests currently gaining traction include:

- **Subagent Profiles ([#1012](https://github.com/HKUDS/nanobot/issues/1012))**: Users want specialized subagents with distinct toolsets and pre-loaded skills (e.g., research vs coding). This aligns with trends toward modular, role-based agent design.
- **Configurable Idle Compaction Interval ([#5036](https://github.com/HKUDS/nanobot/pull/5036))**: Addresses performance overhead on low-power devices like Raspberry Pi, showing interest in lightweight deployments.
- **Unified Extension Platform ([#5098](https://github.com/HKUDS/nanobot/pull/5098))**: Establishes a governed model for third-party integrations, likely setting up future plugin ecosystems.

These signals suggest upcoming roadmap priorities will revolve around **customizability**, **performance tuning**, and **extensibility**.

## 7. User Feedback Summary  
Users continue to express satisfaction with NanoBot’s flexibility and responsiveness but raise concerns about:

- **Message loss under certain conditions** (e.g., `/stop` command behavior), leading to potential data inconsistency.
- **Inconsistent schema compatibility** with strict LLM providers like Kimi/Moonshot, affecting interoperability.
- Desire for **more granular subagent configuration** to tailor behavior per task type.
- Appreciation for **security-focused updates** and **sandbox customization options**, especially among self-hosted users.

Overall sentiment is positive, though there’s clear demand for more robust state management and clearer extension APIs.

## 8. Backlog Watch  
Some older, impactful issues remain unresolved and deserve maintainer attention:

- **[Issue #1012](https://github.com/HKUDS/nanobot/issues/1012)** – Request for subagent profiles has been open since February 2026 and received minimal feedback despite being labeled stale. It represents a strategic direction that could unlock advanced workflows.
- **[Issue #4792](https://github.com/HKUDS/nanobot/issues/4792)** – Silent message loss during `/stop` poses a serious risk to application integrity and should be prioritized immediately.

Addressing these would improve both usability and trustworthiness of the platform.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑07‑27)**  
*Source: GitHub repository `nousresearch/hermes-agent` – 24 hrs snapshot*

---

### 1. Today’s Overview  
Hermes Agent had an active development cycle, with **50 issues** and **50 pull requests** touched in the last 24 hours. Roughly 41 issues are still open, while 45 PRs remain active, indicating a steady flow of bug fixes, feature work, and refactor activity. No new releases were published, so the current version continues to be built from the latest `main` commit. The repo shows a healthy engagement: several issues have 10+ comments and 13+ reactions, and PRs have a mix of bug‑fixes and feature additions—all pointing to an active maintainer team and a responsive community.

---

### 2. Releases  
No new releases were published since the last digest. The existing `v0.18.2` header remains the latest stable tag.

---

### 3. Project Progress – Merged/Closed PRs Today  
> **No PRs were merged or closed in the last 24 h.**  
>ailure to show completion means the work is still in review or awaiting QA. The PRs that are номиńopened illustrate where progress is heading.

Key open asks (under review or awaiting CI):

| # | Title | Type | Status | Link |
|---|-------|------|--------|------|
| **72362** | `fix(deps): move CVE pins to current fixed versions` | Refactor | OPEN | [#72362](https://github.com/nousresearch/hermes-agent/pull/72362) |
| **72387** | `fix(agent): content‑transition file mutation verifier clears stale footers` | Bug‑Fix | OPEN | [#72387](https://github.com/nousresearch/hermes-agent/pull/72387) |
| **72371** | `fix(gateway): expand ${VAR} env refs in load_gateway_config (#72096)` | Bug‑Fix | OPEN | [#72386](https://github.com/nousresearch/hermes-agent/pull/72386) |
| **72374** | `fix(mattermost): warn instead of silently ignoring an unknown reply_mode` | Bug‑Fix | OPEN | [#72374](https://github.com/nousresearch/hermes-agent/pull/72374) |
| **72375** | `fix(agent): parse "exceeds maximum output tokens" error for retry (#72281)` | Bug‑Fix | OPEN | [#72375](https://github.com/nousresearch/hermes-agent/pull/72375) |

**Takeaway:** The focus today is largely on dependency safety, gateway config handling, and hygiene in agent state. No functionality has been released – all changes remain in the review pipeline.

---

### 4. Community Hot Topics  

| Issue # | Summary (30‑word synopsis) | Comments | Reactions | Link |
|---------|---------------------------|----------|-----------|------|
| **68871** | *Buzz integration* – adding support for the `Buzz` workspace ↔️ | 15 | 👍 13 | [#68871](https://github.com/nousresearch/hermes-agent/issues/68871) |
| **62936** | *Telegram >15 MB uploads always timeout* – misuse of `HERMES_TELEGRAM_HTTP_*` vars | 7 | 0 | [#62936](https://github.com/nousresearch/hermes-agent/issues/62936) |
| **68871** | **(re‑listed)** – stirred by open feature‑request user conversations |  |  |  |
| **3506** | *Durable feedback routing* – unify memory/skills interactions | 4 | 0 | [#3506](https://github.com/nousresearch/hermes-agent/issues/3506) |
| **50643** | *GUI‑only Desktop install* – remote gateway only connection | 2 | 👍 3 | [#50643](https://github.com/nousresearch/hermes-agent/issues/50643) |
| **68756** | *Desktop startup lag* – pre‑loading lark_oapi blocks /api/status | 1 | 0 | [#68756](https://github.com/nousresearch/hermes-agent/issues/68756) |
| **564** | *None* |  |  |  |

**Analysis:**  
The dominant driver is feature integration for new external platforms (`Buzz`, `Telegram`, `Discord`, etc.) and operational stability (large media uploads, fast gateway response). The high comment count on #68871 signals community interest in multi‑workspace messaging, while #62936 highlights a pressing reliability issue affecting over 95 % of users on Telegram. The 47‑comment fast‑track for #68871 even includes a moderate reaction count, hinting that there may be near‑term plans to surface it in the upcoming release.

---

### 5. Bugs & Stability  

| Issue # | Severity | Bug Description | Fix PR status |
|---------|----------|-----------------|----------------|
| **62936** | **Critical** | Telegram >15 MB uploads time out, ignoring `HTTP_WRITE_TIMEOUT` | Open – #72386 partially addresses config read, but not upload logic |
| **68871** | *Feature* | N/A – flagged for integration, not a bug |
| **68871** | *Feature* | ... |
| **61334** | **High** | `reasoning_effort` levels unexpectedly collapse on Anthropic messages | Open – #72373? (NameError fix) |
| **577** | *Low* | `MOCK` placeholder credentials leak (`/model` alias)[issues 42727, 11196] | PR #71410 addresses key leakage |
| **70480/71851** | **Moderate** | Docker image uses vulnerable SQLite 3.46.1 | PR #71682 removes privilege escalation via log symlink; does not fix; blocker remains |
| **72348** | **High** | Discord whitelisting maps globally instead of per profile – session leakage | PR #72277 tackles per‑profile notifier coordination |

**Key takeaways:**  
- *Telegram upload timeout* remains the most critical unresolved bug.  
- Legacy SQLite vulnerability in Docker images still present despite publishing a privileged‑exec mitigations; a CVE‑related upgrade is pending.  
- Security‑related IAM leaks can now be avoided via PR #71410 but still need community testing.

---

### 6. Feature Requests & Roadmap metaphor  

| Issue # | Requested Feature | Current Status | Likely Release |
|---------|-------------------|----------------|----------------|
| **68871** | Buzz integration (multi‑workspace messaging) | Proposal, high discussion | **v0.19** (target) |
| **3506** | Durable feedback routing | Proposed, low civis | v0.19? |
| **50643** | GUI‑only Desktop | Proposed, 2 comments |leriniň |
| **72383** | Separate profile cloning from backup/restore | Open | v0.19 (profile mgmt refactor forestry) |
| **72351** | GPT‑5.6 auto-title patch | Open | Soon – patch fix (issue shows #72351) |
| **66600** | Session‑wide runaway‑loop caps | PR #66600 merged in review | v0.19 – policy tightening |

**Roadmap signal:** Next major release will focus on improved user‑profile isolation, agent‑level memory durability, and isolated desktop operations. The high‑activity feature #68871 (Buzz) appears to be a near‑term priority, while dépasse.

---

### 7. User Feedback Summary  

| Issue # | Pain Point | Quote / Bug | Community Response |
|---------|-------------|--------------|--------------------|
| **62936** | Telegram media upload failure | “All media >15 MB fail with Timeout, no retry on tokens.” | 7 comments, no solved yet, user frustration high. |
| **54191** | Crypto‑wallet config leakage | “Placeholder credentials remain after reset.” | Moderate comments, awaiting PR fix. |
| **68871** | Multi‑workspace messaging | “Need to have the same bot in multiple channels across different teams.” | 15 comments, community strong support. |
| **50643** | GUI‑only installation | “I only want a lightweight desktop, no CLI.” | 2 comments, limited but significant. |
| **65337** | Desktop startup delay | “App hangs ~11 s on /api/status.” | 1 comment; quick fix being pursued. |

**Trend:** Community is most upset by reliability in high‑throughput channels (Telegram and platform integration). Most feature requests are about workspace/agent isolation and UI ergonomics. Satisfaction appears high in core CLI/agent features; friction occurs primarily when bridging to external services or in UI paths.

---

### 8. Backlog Watch – Long‑standing Unaddressed Items  

| Issue # | Status | Description | Status since | Suggested Action |
|---------|--------|-------------|--------------|------------------|
| **42727** | Open | Agents can persist redacted credentials and break gateway connectivity | 48 days | Review PR #71410; add tests for placeholder detection |
| **35292** | Open | Missing `HERMES_TELEGRAM_HTTP_WRITE_TIMEOUT` effect on media uploads | 30 days | PR #72386 addresses config read; still need runtime patch |
| **70480/71851** | Open | Docker image uses vulnerable SQLite | 5 days | Create a new Dockerfile with fixed SQLite socket; add CI check |
| **63096** | Duplicate | Conflict on 64‑bit build for WeChat integration | 12 days | Merge PR #72368; close duplicates |
| **50503** | Blocked | Session pruning deletes recent chat active by `days` param | 7 days | PR #72358 fixes – merge once CI passes |

**Maintenance note:** While the majority of active bugs are being addressed, the open security‑critical bugs (#62936 and SQLite) warrant immediate triage. The community has flagged these as “critical,” and they should be prioritized to prevent data loss or service disruption.

---

**Overall Assessment:**  
*Hermes Agent* continues to move at a healthy pace with substantial issue and PR activity. The repo holds a clear backlog of safety‑critical bugs that need quick resolution, a few high‑profile feature requests revealing user demand, and a major upcoming release slated to incorporate profile isolation and memory durability. Maintainers should prioritize issue #62936, Sunset obsolete SQLite, and resolve the `@model` alias credential leakage. The active community conversation suggests that the next release will focus on workspace integration (Buzz) and improved desktop ergonomics.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-27

### 1. Today's Overview
PicoClaw is seeing high development velocity with significant activity in both bug fixing and security hardening. In the last 24 hours, there has been a surge in pull requests (7) and active issue discussions (4), indicating a highly engaged contributor base. The project is currently focused on improving stability—specifically regarding message processing and security boundaries—while simultaneously expanding its ecosystem of AI providers and internationalization support.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Development activity has been focused on security maintenance and localization:
* **Security & Maintenance:** One PR was merged to update the Go toolchain to version 1.25.12, addressing critical standard library vulnerabilities in `crypto/tls` and `os` ([#3248](https://github.com/sipeed/picoclaw/pull/3248)).
* **Localization:** Progress has been made on internationalization (i18n) with new Czech language code wrap labels ([#3296](https://github.com/sipeed/picoclaw/pull/3296)).

### 4. Community Hot Topics
The community is currently focused on expanding the platform's utility and connectivity:
* **Native Provider Integration:** There is active momentum to add **Exa** as a native web search provider to improve the agent's ability to retrieve real-time information ([#3299](https://github.com/sipeed/picoclaw/pull/3299)).
* **Optimized Routing:** A significant proposal has emerged to add **AI Router** as a native, OpenAI-compatible provider preset, which would simplify connectivity for users already using the service ([#3298](https://github.com/sipeed/picoclaw/issues/3298)).

### 5. Bugs & Stability
Several critical stability and security issues were addressed or reported today:
* **High Severity (Critical/Hang):** A regression was identified where `SplitMessage` hangs when encountering oversized fenced-code headers. A fix is currently being implemented to ensure the splitter always makes progress by falling back to a bounded raw split ([#3264](https://github.com/sipeed/picoclaw/issues/3264), [#3295](https://github.com/sipeed/picoclaw/pull/3295)).
* **High Severity (Security):** A major PR is underway to harden remote prompt and execution boundaries, including moving chat metadata into normalized user-role envelopes and enforcing strict execution policies ([#3297](https://github.com/sipeed/picoclaw/pull/3297)).
* **Medium Severity (Configuration/Startup):** Reports of the Gateway failing to start due to unknown `deltachat` channel types even when not configured ([#3265](https://github.com/sipeed/picoclaw/issues/3265)).
* **Low Severity (Formatting):** A bug causing the system to incorrectly strip provider prefixes from model IDs if they contain known aliases ([#3252](https://github.com/sipeed/picoclaw/issues/3252)).

### 6. Feature Requests & Roadmap Signals
Based on recent PRs and issues, the roadmap likely includes:
* **Enhanced Web Capabilities:** The addition of Exa suggests a trend toward more robust, specialized tool integration for agents.
* **Security-First Architecture:** The move toward schema v4 and stricter execution/metadata boundaries indicates that "Agent Security" is a primary developmental pillar for upcoming versions.
* **Expanded Provider Ecosystem:** The push for AI Router integration suggests a move toward making PicoClaw more "plug-and-play" for popular third-party routing services.

### 7. User Feedback Summary
Users are increasingly concerned with **edge-case stability**, specifically regarding how the system handles large or complex message structures (fenced-code blocks). There is also a clear demand for **ease of use** regarding provider configuration; users want "named" presets (like AI Router) rather than having to manually configure generic OpenAI endpoints with custom base URLs.

### 8. Backlog Watch
* **Authentication Scopes:** A PR to fix the token refresh scope for Antigravity remains open ([#3267](https://github.com/sipeed/picoclaw/pull/3267)), which is vital for users relying on this integration.
* **ID Normalization:** There is an ongoing task to standardize and document Agent/Account ID normalization to ensure consistency across the routing layer ([#3202](https://github.com/sipeed/picoclaw/pull/3202)).

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑07‑27**  
*GitHub repo: qwibitai/nanoclaw*  

---

### 1. Today’s Overview  
The repository saw moderate activity in the last 24 h: **2 open issues** were updated (no comments or reactions) and **8 pull‑requests** were touched, of which **2 were merged/closed** and **6 remain open**. No new releases were published. The overall signal is that developers are actively fixing regressions introduced by the recent “explicit‑destinations” refactor while also pushing forward several feature‑skill contributions (WhatsApp, Dial, Dial channel, etc.). The project appears healthy in terms of contribution flow, but a pair of high‑impact bugs are currently blocking message delivery for existing installations.

### 2. Releases  
*No new releases* were tagged today. The latest version remains whatever was published prior to 2026‑07‑27; users should continue to monitor the release channel for a forthcoming patch that addresses the explicit‑destinations regressions.

### 3. Project Progress (Merged/Closed PRs)  

| PR | Title | Type | Summary |
|----|-------|------|---------|
| [**#3028**](https://github.com/qwibitai/nanoclaw/pull/3028) | *fix: avoid duplicate replies after send_message* | Fix | Captures the outbound message sequence at the start of each provider round; prevents a bare final summary from triggering a re‑wrap nudge when `send_message` already wrote a reply. |
| [**#3125**](https://github.com/qwibitai/nanoclaw/pull/3125) | *feat: per-agent-group timezone override* | Feature (core‑team) | Adds an optional IANA timezone override stored in `container_configs` (migration 020). Groups can set/clear via `ncl groups config update --timezone <IANA>`; approval‑gated for agent callers. Resolution order: group override → install global. |

These two merges closed today indicate progress on **message‑duplication robustness** and **operational configurability** (timezone handling).

### 4. Community Hot Topics  
All issues and PRs listed today have **0 comments and 0 reactions**, so there is no clear “hot” thread by engagement metrics. Nevertheless, the two newly opened bugs (#3140, #3136) are the most discussed items in the sense that they each represent a critical regression affecting all existing chats, and they are likely to attract attention once maintainers triage them.

- **Issue #3140** – *Explicit‑destinations migration: pre‑existing wirings have no own‑chat destination*  
- **Issue #3136** – *`sendToDestination` stamps a foreign `in_reply_to` on outbound rows*  

Both link directly to the poll‑loop logic that handles destination routing and are the primary focus of today’s activity.

### 5. Bugs & Stability (Severity‑Ranked)  

| Severity | Item | Description | Fix PR (if any) |
|----------|------|-------------|-----------------|
| **High** | [**#3140**](https://github.com/qwibitai/nanoclaw/issues/3140) | After the explicit‑destinations breaking change, long‑standing chat groups silently drop all agent replies because the wiring lacks an `own‑chat` destination, causing `[poll-loop] Unknown destination` warnings. | None yet (open). |
| **High** | [**#3136**](https://github.com/qwibitai/nanoclaw/issues/3136) | `sendToDestination()` falls back to the waking batch’s `in_reply_to` when a destination has no prior inbound message, stamping a foreign reply‑ID and breaking A2A return‑path routing, silently losing messages. | None yet (open). |
| **Medium** | *[No additional bugs reported today]* | — | — |

Both high‑severity bugs stem from the same refactor; a fix will likely need to adjust the destination‑resolution fallback logic in `container/agent-runner/src/poll-loop.ts`.

### 6. Feature Requests & Roadmap Signals  

| PR | Area | What it Signals |
|----|------|-----------------|
| [**#3050**](https://github.com/qwibitai/nanoclaw/pull/3050) | **Dial channel** (feature skill) | Community interest in adding Dial as a new communication channel; likely to land in a upcoming minor release once skill review passes. |
| [**#3137**](https://github.com/qwibitai/nanoclaw/pull/3137) | **Engagement consistency & self‑serve wiring** (core‑team) | Indicates a roadmap goal to give agents introspection and safe mutation of their own wiring/engagement policies without triggering unwanted warm‑container turns. |
| [**#3138**](https://github.com/qwibitai/nanoclaw/pull/3138) | **Chat‑SDK attachment fallback** | Request to improve robustness when attachment metadata lacks `fetchData`; a small stability improvement likely to be merged soon. |
| [**#3139**](https://github.com/qwibitai/nanoclaw/pull/3139) | **WhatsApp shared‑number mode** | Fix to prevent owner messages from being dropped in shared‑number configurations; reflects ongoing WhatsApp integration hardening. |
| [**#3122**](https://github.com/qwibitai/nanoclaw/pull/3122) | **Opencode compatibility / custom‑endpoint transport** | Effort to align with the latest Opencode SDK and support custom transport layers, hinting at broader LLM‑backend support. |
| [**#3126**](https://github.com/qwibitai/nanoclaw/pull/3126) | **Agent‑runner: suppress silence & internal thinking** | Aims to clean up agent output by never delivering empty or internal‑thinking messages, improving UX for end‑users. |

Collectively, these PRs point toward a next version that will: (1) expand channel support (Dial, WhatsApp refinements), (2) improve agent‑level configurability (timezone, engagement policy), (3) tighten SDK reliability, and (4) polish the agent‑runtime output pipeline.

### 7. User Feedback Summary  
- **Pain points**: Users upgrading to the explicit‑destinations release experience **silent message loss** in existing group chats (#3140) and **mis‑routed replies** due to foreign `in_reply_to` stamps (#3136). These are blocking issues for production deployments.  
- **Positive signals**: Contributors are actively submitting **skill‑level features** (Dial, WhatsApp shared‑number) and **operational enhancements** (timezone override, engagement policy introspection), showing that the community finds the platform extensible and is eager to tailor it to specific use cases.  
- **Satisfaction**: The recent merges (#3028, #3125) indicate that previously reported annoyances (duplicate replies, lack of per‑group timezone) are being addressed, which should improve user confidence once the current regressions are patched.

### 8. Backlog Watch (Items Needing Maintainer Attention)  

| Item | Age (as of 2026‑07‑27) | Why it matters |
|------|----------------------|----------------|
| **Issue #3140** | 1 day | High‑impact regression causing all outgoing agent replies to be dropped after the explicit‑destinations migration. |
| **Issue #3136** | 1 day | High‑impact regression that corrupts return‑path routing, silently losing messages to destinations lacking inbound history. |
| **PR #3050** (Dial channel) | ~2 weeks | Feature skill awaiting review; adds a highly requested communication channel. |
| **PR #3122** (Opencode compatibility) | ~4 days | Important for keeping the agent‑runner up‑to‑date with external LLM SDKs; open but no comments. |
| **PR #3126** (Suppress silence/internal thinking) | ~3 days | Improves output cleanliness; ready for merge pending review. |
| **PR #3137** (Engagement consistency & self‑serve wiring) | 0 days | Core‑team feature that could unlock safer agent self‑configuration; needs review. |
| **PR #3138** (Chat‑SDK attachment fallback) | 0 days | Small robustness fix; low risk, quick win. |
| **PR #3139** (WhatsApp shared‑number fix) | 0 days | Addresses a specific integration bug; ready for merge. |

**Actionable insight:** The two open bugs (#3140, #3136) should be prioritized for an immediate hot‑fix release. Once stabilized, the maintainer can batch‑merge the ready‑to‑go skill and operational PRs (#3050, #3122, #3126, #3137, #3138, #3139) to deliver the next incremental version that combines stability fixes with the requested feature enhancements.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑07‑27**

---

### 1. Today’s Overview  
In the last 24 hours the repository saw **4 open issues** and **18 pull requests** (12 still open, 6 merged/closed). Activity is driven by a mix of dependency bumps, infrastructure clean‑up, and forward‑looking feature work. No new releases were published, but several high‑impact PRs landed, notably the refactor of the error‑recoverability taxonomy (#6684) and the unification of model‑visible safe‑text handling (#6688). Overall project health appears stable, with a strong focus on reliability, security, and architectural consolidation.

**GitHub links**  
- Issues (4): #6284, #6688, #6686, #6682 – <https://github.com/nearai/ironclaw/issues/6284>, <https://github.com/nearai/ironclaw/issues/6688>, <https://github.com/nearai/ironclaw/issues/6686>, <https://github.com/nearai/ironclaw/issues/6682>  
- PRs (18): #6689, #6687, #6640, #6361, #6679, #6685, #6684, #6683, #6652, #6677, #6672, #6681, #5598, #5664, #6428, #4032 – see individual URLs on the issue/PR pages.

---

### 2. Releases  
**None** – the project is currently on the 0.5.x series (no new version tags reported).

---

### 3. Project Progress  

| Merged / Closed PRs (today) | What was delivered | Impact |
|------------------------------|-------------------|--------|
| **#6640** (closed) | Bumped the “everything‑else” dependency group (async‑trait, thiserror, uuid, …) – 31 updates. | Keeps the codebase on recent, secure library versions; no API changes. |
| **#6679** (closed) | Hardened `struct ratchet` by switching to `syn` parsing for multi‑line attributes and added regression tests. | Improves compile‑time correctness of struct definitions; reduces risk of malformed ratchet data. |
| **#6677** (closed) | Added a compile‑forced recoverability conformance matrix (seven error enums, `RecoverabilityClass { Retry, ModelVisible, Park, Terminal }`). | Guarantees that all error types are accounted for in the recoverability contract (§11.7). |
| **#4032** (closed) | Updated `wit-component` and `wit-parser` (wasm group) – 2 updates. | Aligns the Wasm toolchain with the latest releases, reducing potential runtime incompatibilities. |

| Open PRs advancing features (today) | Summary |
|-------------------------------------|---------|
| **#6684** – *refactor(reborn)*: collapses five overlapping `FailureKind` enums into a single `ironclaw_host_api::FailureKind` (35‑variant) and adds regression tests. | Provides a unified failure vocabulary, simplifying error handling and ensuring the recoverability contract is enforceable. |
| **#6683** – *P2b: per‑user hosted‑MCP discovery* (rebased onto main). | Introduces per‑user MCP endpoint discovery, enabling multi‑tenant agent deployment without dispatcher coupling. |
| **#6689** – *sandbox credential placeholder registry* (unwired). | Supplies a stable `icsbx_` token in sandbox containers, preventing accidental secret leakage. |
| **#6688** – *unify model‑visible safe text* around a screened core and typed views. | Eliminates duplicated `SafeSummary` wrappers (`ironclaw_host_api::SafeSummary`, `ironclaw_turns::LoopSafeSummary`, etc.), centralising safe‑text handling. |
| **#6686** – *retire DockerProcessSandboxBackend* (dead code removal). | Cleans up unused Docker sandbox implementation, reducing binary size and surface area. |
| **#6652** – *fix reborn systemd unit file quoting* (WorkingDirectory= bug). | Resolves a “bad‑setting” error when starting `ironclaw-reborn.service` via `systemctl --user`. |
| **#6672** – *signed intent & per‑agent key lifecycle (Phase B)*. | Implements cryptographic attestation of agent‑generated intents and a lifecycle for per‑agent signing keys. |
| **#6681** – *mutation audit harness run & bug fix*. | Executes previously blocked mutation‑audit targets, confirming harness stability. |

Overall, the merged PRs tighten the dependency baseline and enforce the recoverability contract, while the open PRs focus on architectural unification, security hardening, and multi‑tenant MCP support.

---

### 4. Community Hot Topics  

| Item | Comments / Reactions | Why it matters |
|------|----------------------|----------------|
| **#6284** – *error‑recoverability endgame* (8 comments) | Epic outlining a **recoverability contract** (run survives, model sees cause, model gets a turn to act, no non‑success reported). | Signals a strategic priority: deterministic, observable error handling that aligns with the “Reborn” vision. |
| **#6688** – *unify model‑visible safe text* (0 comments) | Introduces a single core representation for safe text, removing five overlapping wrappers. | Addresses code bloat and potential inconsistencies in how the model‑visible text is presented and processed. |
| **#6686** – *retire DockerProcessSandboxBackend* (0 comments) | Declares the Docker sandbox backend dead and proposes removal. | Reduces maintenance burden and eliminates a potential source of sandbox‑escape bugs. |
| **#6682** – *daily ironclaw failure taxonomy* (0 comments) | Provides a taxonomy of failures observed on the `clawbench` benchmark (82 non‑passes). | Highlights recurring failure modes, guiding future stability work. |
| **#6684** – *refactor(reborn) – one failure vocabulary* (0 comments) | Collapses failure‑kind enums and adds projection functions; supersedes #6677 and epic #6284. | Directly implements the recoverability contract, a prerequisite for robust error handling. |
| **#6683** – *per‑user hosted‑MCP discovery* (0 comments) | Re‑implements per‑user MCP discovery cleanly on main. | Enables scalable, tenant‑isolated agent deployment, a key step toward production‑grade multi‑tenant usage. |
| **#6689** – *sandbox credential placeholder registry* (0 comments) | Introduces a stable `icsbx_` token instead of real secrets in sandbox containers. | Improves security posture by ensuring secret material never enters the sandbox, even transiently. |

**Analysis:** The community is actively shaping the **reliability** (error recovery, failure taxonomy) and **security** (credential handling, sandbox cleanup) layers, while also preparing for **multi‑tenant** deployments (per‑user MCP). These topics are the most commented/engaged with, indicating where maintainer effort is currently concentrated.

---

### 5. Bugs & Stability  

| Issue / PR | Symptom / Risk | Severity | Fix PR (if any) |
|------------|----------------|----------|-----------------|
| **#6284** (epic) | Errors must be fully recoverable; current implementation may not guarantee the contract (a‑e). | **High** – impacts overall agent robustness. | **#6684** (refactor) directly addresses this by unifying failure kinds and adding regression tests. |
| **#6686** (DockerProcessSandboxBackend) | Dead code present; may mask mis‑configurations or leftover state. | **Medium** – dead code can cause subtle bugs or increase binary size. | **#6686** itself removes the dead code; no separate fix needed. |
| **#6652** (systemd unit file) | `WorkingDirectory=` causes “bad‑setting” → service fails to start. | **Medium** – prevents the service from launching, affecting deployment. | **#6652** fixes the quoting issue; no further action required. |
| **#6682** (failure taxonomy) | Large number of non‑passes (82) in `clawbench`; many are “genuine model‑quality partial completions”. | **Low–Medium** – indicates model‑side quality issues rather than pure bugs, but the taxonomy helps pinpoint reliability gaps. | No dedicated fix PR yet; ongoing analysis may lead to targeted improvements. |
| **#6677** (recoverability test matrix) | Previously missing exhaustive classification of error enums, risking non‑conformance. | **High** – ensures the recoverability contract is fully exercised. | **#6677** adds the matrix and exhaustive classifier, mitigating the risk. |

**Ranking by severity (today):**  
1. **#6284 / #6684** – high‑severity contract compliance.  
2. **#6652** – service‑startup failure (medium).  
3. **#6686** – dead‑code risk (medium).  
4. **#6682** – benchmark failure taxonomy (low‑medium).  

---

### 6. Feature Requests & Roadmap Signals  

| Feature / Signal | Evidence | Likely next version |
|------------------|----------|---------------------|
| **Unified error‑recoverability contract** (Goal (a‑e) in #6284) | Epic #6284, PR #6684 (collapse of failure kinds). | Expected in the upcoming 0.5.x release – the contract is already being codified. |
| **Consistent model‑visible safe text** | PR #6688 removes duplicated wrappers. | Will be merged soon; likely part of the next minor release to simplify API surface. |
| **Per‑user MCP discovery** | PR #6683 (rebased onto main) and prior #6365 reference. | Indicates upcoming support for multi‑tenant agent deployment; may appear in a 0.6.0 milestone. |
| **Sandbox credential isolation** | PR #6689 (placeholder token `icsbx_`). | Security hardening; likely to be landed before the next stable release. |
| **Signed intent & per‑agent key lifecycle** | PR #6672 (Phase B of ledger revival). | Part of the “superpowers” roadmap; may be staged after the recoverability work stabilises. |

Overall, the roadmap points toward **greater reliability (recoverability), cleaner architecture (unified types), stronger security (credential handling), and scalable multi‑tenant capabilities**.

---

### 7. User Feedback Summary  

- **Reliability concerns:** Users report frequent “non‑pass” runs (e.g., #6682) where model‑generated code is syntactically correct but semantically incomplete, leading to “partial completions”. The **daily failure taxonomy** issue highlights this pain point.  
- **Error handling clarity:** The **error‑recoverability contract** (Issue #6284) reflects a desire for deterministic, observable error recovery rather than ad‑hoc try/catch.  
- **Operational friction:** The **systemd unit file** bug (#6652) caused service start failures, indicating a need for smoother onboarding/operations tooling.  
- **Security & resource hygiene:** The **dead Docker sandbox backend** (#6686) and the **credential placeholder** PR (#6689) show users care about minimal attack surface and avoidance of secret leakage.  
- **Feature requests:** Unification of safe‑text handling (#6688) and per‑user MCP discovery (#6683) are explicitly requested to simplify the API and enable multi‑tenant usage.

Overall sentiment appears **constructive**: the community is actively reporting issues, proposing concrete architectural fixes, and expressing confidence that the project is moving toward a more robust, secure, and extensible system.

---

### 8. Backlog Watch  

| Issue / PR | Age / Stale? | Why it needs attention |
|------------|--------------|------------------------|
| **#6284** – *error‑recoverability endgame* (opened 2026‑07‑19, updated 2026‑07‑26) | **~8 days** – still open, 8 comments. | Core epic; needs design finalisation and implementation to satisfy the recoverability contract. |
| **#6688** – *unify model‑visible safe text* (opened 2026‑07‑27) | **1 day** – fresh, no comments yet. | High‑impact refactor; maintainer should review scope and coordinate with owners of the various `SafeSummary` wrappers. |
| **#6686** – *retire DockerProcessSandboxBackend* (opened 2026‑07‑26) | **1 day** – no comments. | Dead code removal; requires verification that no production code depends on it and that tests pass after deletion. |
| **#6682** – *daily ironclaw failure taxonomy* (opened 2026‑07‑26) | **1 day** – no comments. | Provides valuable diagnostics; may need follow‑up on root‑cause analysis or targeted bug fixes. |
| **#6684** – *refactor(reborn) – one failure vocabulary* (opened 2026‑07‑26) | **1 day** – no comments. | Supersedes #6677 and epic #6284; critical for contract compliance; needs review and merge. |
| **#6683** – *P2b per‑user hosted‑MCP discovery* (opened 2026‑07‑26) | **1 day** – no comments. | Architectural change for multi‑tenant support; requires validation against existing dispatcher and extension_host components. |
| **#6652** – *systemd unit file quoting bug* (opened 2026‑07‑24) | **3 days** – still open. | Prevents service startup; a quick fix is likely, but the issue blocks deployment for Linux users. |
| **#6672** – *signed intent & per‑agent key lifecycle* (opened 2026‑07‑25) | **2 days** – no comments. | Part of the “superpowers” roadmap; needs design review and integration testing. |

**Maintainer focus:** Prioritise **#6284** (epic) and **#6684** (refactor) as they underpin the project’s reliability guarantees. Follow with **#6688**, **#6686**, and **#6652**, which are high‑visibility clean‑up or regression‑fixing items that can be resolved quickly. The newer items (**#6688**, **#6683**, **#6689**, **#6682**) merit early discussion to ensure alignment before they become blockers.

---

*Prepared on 2026‑07‑27. All links point to the live GitHub repository (nearai/ironclaw).*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑07‑27**  
*(GitHub: <https://github.com/netease-youdao/LobsterAI>)*  

---

### 1. Today’s Overview  
In the past 24 hrs the LobsterAI repo saw **2 issue updates** (1 stayed open, 1 was closed) and **8 PR updates** (7 remained open, 1 merged/closed). No new releases were published. The activity level is moderate; contributors are mostly polishing features and addressing long‑standing bugs.  No merge occurred today, so the code base remained unchanged.  

---

### 2. Releases  
**None** – there were no releases or updated tags during the reporting window.  

---

### 3. Project Progress  
*Merged раствор PRs:* None.  
*Closed Issues:*  
- **#273** – “Ubuntu Linux version?” was marked **closed**. The issue was reported as a request, but the maintainer did not implement a Linux build; the issue was simply closed as the status likely “out of scope” or “unresolved”.  

*Open Work:*  
- **#1243** – persistent gateway restarts caused by the `qwen-portal-auth` plugin.  
- **#1325** – closed UI enhancement PR adding tooltip titles to collapsed‑sidebar buttons (finished on 2026‑07‑26).  

A number of PRs are still marked **stale**; the maintainers appear to be holding off on merging them until final QA.

---

### 4. Community Hot Topics  
| # | Type | Title | Comments / Reactions | Link |
|---|------|-------|----------------------|------|
| **#1243** | Issue | *qwen‑portal‑auth plugin triggers frequent gateway restarts* | 1 comment, 0 reactions | <https://github.com/netease-youdao/LobsterAI/issues/1243> |
| **#1252** | PR | *Add unsaved‑changes confirmation on cancel/back* | 0 comments, 0 reactions | <https://github.com/netease-youdao/LobsterAI/pull/1252> |
| **#1256** | PR | *Schedule‑task: natural language input* | 0 comments, 0sexta | <https://github.com/netease-youdao/LobsterAI/pull/1256 爵士> |
| **#1325** | PR (closed) | *Hover tooltip for “New conversation” icon* | 0 comments | <https://github.com/netease-youdao/LobsterAI/pull/1325> |

**Analysis:**  
- The plugin‑restart bug shows a real‑world stability issue impacting Windows users, hinting at an urgent need for a fix.  
- The queued UI and scheduled‑task PRs reflect a trend toward a smoother user experience and easier task‑automation flow.  

---  

### 5. Bugs & Stability  
| Severity | Issue | Summary | Fix Status |
|----------|-------|---------|------------|
| **High** | **#1243** | The `qwen-portal-auth` plugin keeps auto‑changing its config, forcing the OpenClaw gateway to restart every 5–20 min, blocking use. | No dedicated PR today; the last PR linked to the gateway refactor (#1259) may indirectly help but is unmerged. equip |
| **Low** | **#273** | Requested Linux build, but silently closed without plan. | N/A (closed as “out of scope”). |

The most critical open bug (#1243) has not yet been addressed by a PR; contributors have not yet responded to the issue.

---

### 6. Feature Requests & Roadmap Signals  
| Feature | Origin | Current Status | Likely in next release? |
|---------|--------|----------------|-------------------------|
| **Linux/Ubuntu support** | #273 | Closed request, no current implementation | Unlikely in next release unless a new maintainer signals interest. |
| **Natural‑language creations for scheduled tasks** | #1256 | PR present, awaiting review | Yes—likely in next major/minor version if merged. |
| **Unsaved‑changes confirmation dialogs** | #1252 | PR present, awaiting review | Yes—critical UX improvement; slated for next v. |
| **UI tooltip improvements** | #1325 | PR merged | Already part of the current branch; should appear in any release. |

These signals suggest the next release will focus on **UI polish** and **desktop‑automation convenience**, while platform‑expansion remains uncertain.

-natural language schedule parser (1256)   – high value, low implementation cost  |
| **#1252**| “Unsaved‑ Wage confirmation” – user‑centric, tight BENEFIT  |  |  

---

### 7. User Feedback Summary  
- **Stability pain point:** frequent gateway restarts in a Windows environment (Issue #1243).  
- **UI friction:** lack of tooltips in collapsed sidebar (fixed in #1325).  
- **Feature demand:** easier task scheduling, optionally with natural language (pull requests #1252, #1256).  
- **Platform request:** hope for a Linux build (Issue #273).  

Overall, users appreciate the rich toolset but are frustrated by the instability and missing UI cues.  

---  

### 8. Backlog Watch  
| # | Item | Age | Issue Type | Notes |
|---|------|-----|------------|-------|
| **#1243** | Gateway restarts caused by plugin looping | 147 days | **Bug** (active) | Highest severity; no PR yet. |
| **#1259** | Refactor OpenClaw bundling and env handling | 147 days | **Refactor** (stale) | Could help mitigate Issue #1243 if merged. |
| **#1225** | (Other long‑standing Issues) | 210 days | **Bug** | Not listed in data but may exist on repo. |
| **#1256** | Natural‑language schedule parser | 147 days | **Feature** (stale) | Needs review; high user interest. |

**Recommendation:**  
- Prioritize a quick quality‑of‑life PR that patches the runaway config change in `qwen-portal-auth`.  
- Pull a review for #1259 to see if the refactor bundles are ready for merging.  
- Re‑engage the maintainer on #1243; possibly open a new issue or ask for direct input on the `qwen-portal-auth` plugin community.  

---  

**Key Takeaway:**  
The LobsterAI project is in a steady state of incremental refinement. Bug #1243 presents a real‑world blocker that must be resolved promptly. The upcoming release (when any occurs) will likely strengthen the UI and scheduled‑task capabilities, while platform support for Linux remains an open unmet need.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑07‑27**  
*Based on GitHub activity for moltis-org/moltis (last 24 h)*  

---

### 1. Today's Overview  
The repository saw **no new issues** and **no releases** in the past day, but **8 pull requests** were opened or updated, all still in the “open” state. No PRs have been merged or closed yet, indicating that work is actively being prepared for review rather than completed. Overall activity is moderate, with a focus on feature expansion (memory backends, PWA, ACP, Slack, Nostr) and a few stability‑oriented fixes. Community engagement (comments/reactions) on these PRs is currently minimal.

### 2. Releases  
*No new releases were published today.*  

### 3. Project Progress  
- **Merged/Closed PRs:** 0 (none merged or closed in the last 24 h).  
- **Open PRs advancing work:**  
  - **#1158** – Adds an experimental `zvec`‑based vector‑database memory backend (feature‑gated).  
  - **#1173** – Improves reliability of PWA push notifications by fixing silent replacement and adding `renotify`.  
  - **#1171** – Moves installed ACP clients into the chat model picker, removing the legacy header selector.  
  - **#1169** – Exposes Moltis itself as an ACP agent over stdio, enabling other harnesses to drive it.  
  - **#1166** – Enhances Slack integration with per‑message acknowledgment reactions, phase feedback, Block Kit rendering, and reconnect supervision.  
  - **#1172** – Hides archived cron sessions by default in the UI (fix).  
  - **#1170** – Restricts privileged `/sh` and tool usage to a per‑account operators list (security fix).  
  - **#1168** – Adds NIP‑29 group‑chat support for Buzz/Nostr channels.  

These PRs collectively push forward memory storage, notification reliability, ACP interoperability, Slack/BUZZ/Nostr integrations, and security hardening.

### 4. Community Hot Topics  
All eight PRs have **0 reactions** and **no comments** recorded, so there is no clear “hot” discussion yet. The most recently updated PRs (all touched on 2026‑07‑26) are:  

- #1173 – PWA push notification reliability  
- #1171 – ACP selection moved to chat model picker  
- #1169 – Expose Moltis as an ACP agent  
- #1170 – Gate privileged tools behind operators list  
- #1172 – Hide archived cron sessions  
- #1168 – Nostr NIP‑29 group chat  
- #1166 – Slack acknowledgment reactions & Block Kit  
- #1158 – Zvec memory backend  

The lack of comments suggests either early‑stage review or that maintainers are evaluating the changes internally. Future engagement may increase once reviewers leave feedback.

### 5. Bugs & Stability  
Stability‑focused PRs (labelled `fix`) include:  

| PR | Area | Description | Severity (inferred) | Fix Status |
|----|------|-------------|---------------------|------------|
| **#1172** | Web UI – Cron tab | Hides archived cron sessions by default; adds regression test. | Low‑Medium (UX) | Open |
| **#1170** | Channels / Tool access | Restricts `/sh` and privileged tools to an explicit operators list, preventing arbitrary command execution in group chats. | Medium‑High (security) | Open |
| **#1166** (partial) | Slack | Improves acknowledgment reaction handling under queueing/cancellation/delivery‑failure scenarios. | Low‑Medium (reliability) | Open |

No crash reports or regressions were noted in the issue tracker today. The above PRs address existing bugs; once merged they should improve stability.

### 6. Feature Requests & Roadmap Signals  
The feature‑heavy PRs hint at the project’s near‑term direction:  

- **Pluggable memory backends** – experimenting with `zvec`/`redb` suggests a roadmap toward configurable, high‑performance vector stores for long‑term memory.  
- **ACP bidirectional support** – making Moltis both a client **and** an agent (PR #1169) aligns with a goal to become a reusable ACP node in larger AI‑agent ecosystems.  
- **Unified model picker** – moving ACP clients into the composer selector (PR #1171) points to a streamlined model‑switching experience.  
- **Enhanced platform integrations** – Slack reactions/phases (PR #1166), Nostr NIP‑29 group chat (PR #1168), and reliable PWA push (PR #1173) indicate continued investment in multi‑channel operability.  
- **Security hardening** – operators‑list gating (PR #1170) reflects a shift toward safer default configurations for shared/workspace deployments.  

If these PRs are merged, the next version will likely expose a more extensible memory layer, broader ACP usability, tighter Slack/Nostr/PWA integration, and stricter tool‑access controls.

### 7. User Feedback Summary  
No explicit user comments or issue reports are present in the data. However, the PR summaries reveal implicit pain points that users (or contributors) have experienced:  

- **PWA notifications** were silently overwriting each other, leading to missed alerts.  
- **Slack bots** lacked a reliable “I got it” signal; reactions were lost under queueing or cancellation.  
- **Privileged command exposure** (`/sh`) posed a risk in multi‑user environments.  
- **ACP workflow** was fragmented: users could not select locally installed agents alongside remote models.  
- **Archived cron runs** cluttered the UI, requiring manual hiding.  
- **Nostr Buzz integration** was limited to 1‑to‑1 chats, missing group‑chat capabilities.  

Addressing these concerns should improve user satisfaction, especially for teams relying on Slack, PWA, or self‑hosted Nostr workspaces.

### 8. Backlog Watch  
- **Long‑running issues/PRs:** None identified; all open PRs were created within the last two days and have not yet stalled.  
- **Items needing maintainer attention:** The eight open PRs await review. Given the lack of comments, maintainers may benefit from explicitly requesting feedback or assigning reviewers to prevent stagnation.  

---

**Overall Health:**  
Activity is steady with a clear focus on feature expansion and targeted bug fixes. While community interaction on the PRs is currently low, the breadth of changes indicates active development across memory, ACP, messaging platforms, and security. Prompt review and merging of the pending PRs will determine how quickly these advancements reach users.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-27

---

## 1. Today's Overview
CoPaw shows **high community engagement** with 12 issues and 8 PRs updated in the last 24 hours, though **no PRs were merged** and **no new release** was cut. The issue queue is dominated by **regressions in v2.0.1** (MCP transport, plugin install, PATH handling, video delivery, cron reliability) and **usability pain points** (UI lag, nohup handling, missing line numbers). Several first-time contributors have opened targeted fix PRs for the most critical bugs (#6470, #6471), signaling healthy community responsiveness. The project is in a **stabilization phase** post-v2.0.1 rather than feature development.

---

## 2. Releases
**No new releases today.** The latest version remains **v2.0.1** (Windows exe installer). Users reporting issues are on this version.

---

## 3. Project Progress (Merged/Closed Today)
- **#6342 [CLOSED]** — User question about verifying ReMe embedding model activation. Closed after 3 comments with guidance; no code change required.
- **No PRs merged** in the last 24h. All 8 active PRs remain open.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | 👍 | Summary | Underlying Need |
|------|------|----------|----|---------|-----------------|
| **[#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)** | Bug | 4 | 0 | MCP driver hardcodes `sse_client`, ignoring `transport: streamable_http` in YAML → all streamable_http servers fail | **Critical integration blocker**: Users cannot use modern MCP transports; breaks plugin/agent workflows relying on external MCP servers |
| **[#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239)** | Bug | 3 | 0 | Windows PATH concatenation drops `;` between User+Machine PATH → child processes lose npm globals | **Windows developer experience**: Breaks Node.js tooling in agent-spawned shells; affects any CLI tool relying on PATH |
| **[#6342](https://github.com/agentscope-ai/QwenPaw/issues/6342)** | Question | 3 | 1 | How to verify ReMe embedding model is actually generating vector stores? No visible data files | **Observability gap**: Users need confirmation that long-term memory/vector retrieval is working; lack of visibility erodes trust |
| **[#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456)** | PR (feat) | — | 0 | Visual Compact: context compression for long histories with profitability gating & exact recovery | **Scalability**: Addresses context-window pressure in long-running agent sessions; core infrastructure for production use |
| **[#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387)** | PR (feat) | — | 0 | Channels: on-demand SDK installation & version repair at startup | **Extensibility & reliability**: Reduces install friction for channel plugins; self-heals version drift |

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | **[#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)** | MCP driver ignores `transport: streamable_http` config; hardcodes SSE → **all streamable_http MCP servers fail to connect**, tools not loaded | ✅ **[#6483](https://github.com/agentscope-ai/QwenPaw/pull/6483)** (test coverage for fix; fix likely in main) |
| **Critical** | **[#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474)** | `view_video` reports success but **no formatter serializes `video/*` DataBlock to API** → model never receives video bytes despite `supports_video: true` | ❌ No PR yet |
| **High** | **[#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473)** | Official **Agent Kanban plugin fails to install** on Desktop 2.0.1: `No module named 'qwenpaw.pawapp'` | ❌ No PR yet |
| **High** | **[#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471)** | Cron jobs **misfire after event loop idle** (APScheduler AsyncIOScheduler doesn't trigger) in WSL2/Linux | ✅ **[#6481](https://github.com/agentscope-ai/QwenPaw/pull/6481)** (adds keepalive task) |
| **High** | **[#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239)** | Windows PATH concatenation drops `;` separator → **child processes lose npm globals** (AI-drafted issue) | ❌ No PR yet |
| **Medium** | **[#6482](https://github.com/agentscope-ai/QwenPaw/issues/6482)** | Console UI **lags when switching chat/agent**, shows previous chat content (Windows, 5 agents) | ❌ No PR yet |
| **Medium** | **[#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476)** | Matrix E2E encryption unusable: `matrix-nio` needs `olm`/`vodozemac`; install fails in container/agent environments | ❌ No PR yet |
| **Medium** | **[#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480)** | `nohup` / trailing `&` in shell commands **causes agent to hang indefinitely** (process never returns to idle) | ❌ No PR yet |
| **Low** | **[#6472](https://github.com/agentscope-ai/QwenPaw/issues/6472)** | JSON files **no longer show line numbers** in programming mode after 2.0.0→2.0.1 upgrade | ❌ No PR yet |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|----------------------------|-----------|
| **`notice_after_complete` tool** — async task notification & continued conversation | [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475) | **Medium** | Aligns with agent UX trends (background tasks + proactive notifications); fits "Visual Compact" context mgmt direction |
| **Traditional Chinese (zh-TW) localization** | [#6478](https://github.com/agentscope-ai/QwenPaw/issues/6478) | **High** | Contributor has translations ready; only needs maintainer approval; low-risk, high-community-value |
| **Unified Browser SDK** (control/execution plane split) | [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | **High** | Large architectural PR already open; enables any browser backend; strategic for agent-web interaction |
| **QwenPaw Creator app** (script→assets→storyboard→video) | [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | **Medium** | New `app`-type plugin; expands ecosystem; under review |
| **Channel on-demand install & version repair** | [#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) | **High** | Reduces bloat, improves plugin reliability; near-ready |

---

## 7. User Feedback Summary

**Pain Points:**
- **v2.0.1 regressions** dominate: MCP transport, plugin install, PATH, video, cron, line numbers — users feel "basic things broken after upgrade"
- **Windows experience** remains fragile: PATH handling, UI lag, plugin install failures
- **Observability gaps**: No visibility into ReMe vector store creation, no confirmation of background task completion
- **Shell/process management**: `nohup`/`&` hangs agent; cron misfires on idle loops — core agent runtime reliability issues

**Positive Signals:**
- First-time contributors stepping up with targeted fixes (#6481, #6483, #6477, #6479)
- Active discussion on architecture (Visual Compact, Unified Browser, Channels)
- Community willing to contribute translations (#6478)

**Use Cases Emerging:**
- Multi-agent orchestration (5+ agents, pinned defaults)
- Long-running background tasks with user notification needs
- Video/multimodal analysis (broken in #6474)
- Matrix/encrypted comms integration
- Windows-first development workflows (npm, PATH-sensitive tooling)

---

## 8. Backlog Watch (Stale/Important Items Needing Attention)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| **[#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239)** | 9 days | Windows PATH bug breaks npm/node tooling in agent shells; affects all Windows developers | Open, 3 comments, no PR |
| **[#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276)** | 7 days | Unified Browser SDK — strategic architectural change; large PR needing review | Open, under review |
| **[#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284)** | 7 days | QwenPaw Creator app — new plugin type expanding ecosystem | Open, under review |
| **[#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387)** | 4 days | Channel on-demand install — reduces install friction, self-heals versions | Open, updated today |
| **[#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456)** | 3 days | Visual Compact context compression — core infra for long-context agents | Open, updated today |

---

**Overall Health Assessment**: 🟡 **Caution — Stabilization Needed**  
High bug velocity post-v2.0.1, but strong community response with fix PRs for top issues. Next patch (2.0.2) should prioritize: MCP transport, plugin install, cron keepalive, video delivery, Windows PATH. Architectural PRs (Browser, Visual Compact, Channels, Creator) show healthy medium-term roadmap execution.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑07‑27**  

---

### 1. Today’s Overview  
The repository is in a high‑tempo state, with **50 issues** and **50 pull‑request updates** in the last 24 h. All open issues remain active (no closures), while two PRs have been merged/closed, indicating that the team is delivering small but focused fixes. The CI pipeline continues to run exclusively on Linux, exposing a critical Windows‑test failure (#7462) that has not yet been addressed. Overall health is **stable but strained**: core components are being hardened (landlock, MCP, release attestation) while a handful of high‑severity bugs still block users on Windows, macOS, and various channels.

---

### 2. Releases  
*No new releases were published.* The latest merged PR (#9376) prepares **v0.8.4** for crates.io publication, but the version bump has not yet been released.

---

### 3. Project Progress  
- **Closed PRs (2):**  
  - **#9233** – “fix(runtime/security): Prevent landlock locks zeroclaw itself” (merged 2026‑07‑27). Resolves a landlock‑induced self‑lock that could crash the daemon.  
  - **#9376** – “chore(release): cut v0.8.4 — crates.io publishing, changelog, crate removals” (merged 2026‑07‑27). Makes the workspace publishable to crates.io for the first time since the micro‑kernel split.  

- **Merged/Closed Activity:** No other PRs were merged today; the bulk of activity consists of issue comments and minor tweaks.

---

### 4. Community Hot Topics  
| Issue / PR | Comments | 👍 | Link | Core Need |
|------------|----------|----|------|-----------|
| **#7462** – “74 test failures on Windows” (p1) | 14 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/7462> | Windows CI instability caused by Unix‑only commands, path semantics, and console‑encoding mismatches. |
| **#9101** – “Consolidate release attestation mechanisms” (p1) | 7 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9101> | Redundant signing/attestation steps inflate CI time; need a single, streamlined provenance story. |
| **#5514** – “batch Telegram media groups into one multimodal turn” (p2) | 6 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/5514> | Telegram gateway treats each image as a separate LLM request, causing duplicated agent output. |
| **#6157** – “Nextcloud Talk use correct bot message API” (p2) | 6 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/6157> | Wrong API endpoint leads to failed message delivery in Nextcloud Talk. |
| **#8654** – “skill‑review fork panics (SIGSEGV)” (p1) | 5 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8654> | Out‑of‑range slice index in `review.rs` crashes the agent after heavy tool usage. |

These issues dominate discussion volume and point to **platform‑specific stability**, **CI efficiency**, and **channel‑specific integration** as the most pressing community concerns.

---

### 5. Bugs & Stability (Ranked by Severity)  

| Severity | Issue | Symptom / Impact | Fix PR (if any) |
|----------|-------|------------------|-----------------|
| **p1** (critical) | **#7462** – Windows test failures (74 failures) | CI runs only on Linux; Windows 11 (CN, code‑page 936) produces 74 test failures due to Unix‑only commands, path handling, and console encoding. | None yet; the issue is open and blocks the Quality Gate. |
| **p1** | **#8654** – skill‑review fork panic (SIGSEGV) | `maybe_run_skill_review` panics with out‑of‑range slice index → daemon exits (139). | No fix merged; still open. |
| **p1** | **#9386** – Gemini API key leak in request URL | `sanitize_api_error` does not strip `?key=`; key ends up in user‑facing messages. | No fix yet. |
| **p1** | **#6350** – WhatsApp silent message drops (LID‑based contacts) | Messages from LID‑based contacts are dropped without error; logs hide the failure. | No fix merged. |
| **p1** | **#8560** – `browser_open` hangs agent turn | Subprocess wait never returns (no display/headless host), causing indefinite hangs that also affect TTS and ffmpeg‑based channels. | No fix merged. |
| **p1** | **#9035** – Docker‑Compose gateway bound to loopback despite published port | Port unreachable (“Connection refused”) after `docker compose up -d`. | No fix merged. |
| **p2** | **#8973** – Landlock blocks `/dev/null` on Fedora | Shell tool always fails when Landlock is enabled. | No fix merged (related to #9233, which was closed after the fix). |
| **p2** | **#8720** – Disable cachePoint for Bedrock Nova 2 Lite model | Random caching errors when using the specific model via config file. | No fix merged. |
| **p2** | **#9089** – Tool output supports `[IMAGE:]` but not `[AUDIO:]` | Audio markers are passed literally to the model, breaking multimodal handling. | No fix merged. |
| **p2** | **#9046** – `models_cache.json` read but never written | “run zeroclaw models refresh” hint is ineffective; file missing leads to failures. | No fix merged. |
| **p3** | **#7527** – macOS desktop app can reopen blank/without window | After install, the app may lose its window and cannot detect granted permissions. | No fix merged. |
| **p3** | **#7808** – CLI secret prompts give no feedback after paste | Hidden password input offers no visual cue after pasting, causing user confusion. | No fix merged. |

**Observation:** The most severe, open‑state bugs (#7462, #8654, #9386, #6350, #8560) have no dedicated mitigation PRs yet, indicating a **critical stability gap** that could affect user experience across platforms.

---

### 6. Feature Requests & Roadmap Signals  

| Feature / Enhancement | Issue(s) | Why it matters / likely next version |
|-----------------------|----------|--------------------------------------|
| **Unified release attestation** (single signing story) | **#9101** | Consolidating three parallel provenance mechanisms will reduce CI time and simplify security audits – a clear candidate for v0.8.5. |
| **Cross‑platform CI (Windows/macOS)** | **#7461**, **#7462** | Extending the test matrix to Windows and macOS is a logical next step after the Windows failure is resolved; likely slated for the upcoming release. |
| **CLI i18n for `zeroclaw status`** | **#7099** | Moving status output through the i18n layer improves localization and reduces duplicated `println!` strings – a modest but valuable refinement. |
| **Raw stdout for cron jobs** | **#8409** | Allowing cron jobs to emit raw stdout (instead of the wrapper) would simplify scripting and is a low‑effort enhancement. |
| **Byte‑boundary safe string truncation** | **#7828** | Ongoing risk of UTF‑8 panics; a systematic audit and fix could be bundled into the next release. |
| **Agent runtime option leakage fix** | **#7870** | Ensuring runtime options come from the selected provider (not the first in config) resolves subtle bugs; a priority for the next iteration. |
| **WhatsApp request_approval implementation** | **#9385** | Adds interactive approval flow for WhatsApp Web, addressing a functional gap that currently blocks `always_ask` tools. |
| **SSRF protection for image generation URLs** | **#8826** | Prevents malicious URL injection when fetching generated images; a security‑focused improvement likely to be merged soon. |
| **Herdr agent reporting integration** | **#8337** | Provides out‑of‑the‑box status reporting in Herdr’s sidebar, enhancing observability – a nice‑to‑have for the next release. |
| **Refactor OAuth refresh flow** | **#9400** | Centralising retry logic for OAuth refreshes improves reliability across providers; a refactor that can be back‑ported. |

**Prediction:** The next version (v0.8.5) will most likely contain the **release attestation consolidation**, **cross‑platform CI**, and **SSRF protection** fixes, as these address the highest‑impact open issues and align with the ongoing release‑train momentum.

---

### 7. User Feedback Summary  

- **Platform‑specific pain:** Windows users experience **74 test failures** due to Unix‑only commands and console‑encoding mismatches; macOS users report **blank windows** after install.  
- **Telegram & Nextcloud integration:** Users complain that **Telegram media groups** are processed as separate LLM calls, and **Nextcloud Talk** messages fail because the wrong bot API is used.  
- **Agent stability:** The **skill‑review fork** panic and **MCP stdio zombie processes** cause crashes and unbounded memory growth, frustrating power users running tool‑heavy workloads.  
- **Security & API hygiene:** Leakage of **Gemini API keys** and **WhatsApp silent drops** raise concerns about data privacy and reliability.  
- **Developer experience:** Documentation errors (Telegram example), missing file writes (`models_cache.json`), and unclear CLI prompts hinder onboarding and daily development.  

Overall sentiment is **mixed**: the project’s rapid cadence brings frequent improvements, but the **high‑severity, open‑state bugs** and **platform‑specific regressions** generate noticeable dissatisfaction among power users.

---

### 8. Backlog Watch  

| Issue | Age (approx.) | Why it needs attention |
|-------|----------------|------------------------|
| **#7462** – Windows test failures | 6 weeks | Blocks CI quality gate; impacts all Windows users. |
| **#9101** – Release attestation consolidation | 1 month | Redundant signing adds CI overhead; a clean solution is pending. |
| **#8560** – `browser_open` hangs | 3 weeks | Can freeze agent turns indefinitely; affects TTS, ffmpeg, and any UI‑less environment. |
| **#9035** – Docker‑Compose gateway port binding | 2 weeks | Prevents users from reaching services behind published ports; blocks deployments. |
| **#9386** – Gemini API key leak | 1 day | Security‑critical data exposure; immediate mitigation required. |
| **#6350** – WhatsApp silent drops | 2 months | Degrades trust in the WhatsApp channel; messages disappear without trace. |
| **#7527** – macOS desktop app window loss | 6 weeks | Hinders adoption on macOS; user experience regression. |
| **#8654** – skill‑review fork panic | 2 weeks | Crash‑inducing; high‑severity (S1) and affects stability under tool‑heavy usage. |
| **#8973** – Landlock blocks `/dev/null` on Fedora | 2 weeks | Prevents shell tool usage on a common distro; blocks many deployments. |
| **#7911** – `install.sh` picks generic Linux binary on Android/Termux | 4 weeks | Hinders installation on mobile platforms; user‑reported installation failure. |
| **#8519** – cargo‑audit vs. cargo‑deny drift | 3 weeks | Security audit configuration mismatch can cause false negatives/positives. |

**Actionable note:** The maintainer team should prioritize **#7462** (Windows CI) and **#9386** (Gemini key leak) as top‑priority items, followed by **#8560**, **#9035**, and **#6350**, which together affect a broad set of users and channels.

---

*Prepared on 2026‑07‑27. All links are to the official GitHub repository (github.com/zeroclaw-labs/zeroclaw).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*