# OpenClaw Ecosystem Digest 2026-09-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-26 02:36 UTC

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

# OpenClaw Project Digest — 2026-09-26

## 1. Today's Overview

OpenClaw is in a high-activity maintenance window with 500 issues and 500 PRs updated in the last 24 hours. No new releases were published today. The project is clearly in a post-release triage mode: multiple P0 stability regressions from the 2026.9.5→2026.9.6 upgrade cycle are surfacing simultaneously (crash loops, memory leaks, update failures), while a large batch of performance and refactoring PRs is converging for maintainer review. Overall project health is under pressure — the volume of P0 open issues and update-failure reports suggests the recent releases shipped with incomplete validation.

## 2. Releases

**None today.** The latest release in flight is 2026.9.6 (eb377ac), which introduced the `prepared-model-catalog` worker that is now the subject of multiple critical bug reports. A 2026.9.7 Fixes Tracker issue (#157531) is open, indicating the next patch is already being scoped.

## 3. Project Progress

**Merged/closed PRs today (notable):**
- `#157242` — fix(test): synchronize subagent recovery validation (closed)

**Open PRs advancing key areas:**
- `#158588` / `#158586` / `#158450` / `#158583` — performance sweep moving Gateway reads off the main thread (activity recap, chat admission, artifact reads/downloads)
- `#158587` — stream append deltas to every client (fixes quadratic serialization growth)
- `#158561` — bound retained native voice threads on Discord
- `#158539` — deslop Android app (refactor)
- `#158272` / `#158441` / `#158514` — channel/CLI/plugin deslop refactor passes
- `#158569` — preserve standalone QMD data during doctor repair
- `#158585` — fix parent tasks reporting false failures after Gateway restart
- `#156941` — bind chat admission to current session authority
- `#158584` — migrate every agent DB before Doctor repairs
- `#157433` — add native Levanto Sage decision provider
- `#158307` / `#158328` — Agents API: hosted/self-hosted config + persona/workspace context loading
- `#156181` — honor explicit NO_REPLY on required turns
- `#152875` — refuse dist rebuild under live managed Gateway

## 4. Community Hot Topics

| Issue | Comments | Rating | Topic |
|-------|----------|--------|-------|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 35 | 🐚 Platinum | 2026.9.5 turned stable env into 8-hour recovery |
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | 31 | 🦪 Silver | Catalog refresh loop pins CPU core |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 24 | 🌊 Tidepool | Per-agent cost budget enforcement |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 20 | 🌊 Tidepool | Tiered bootstrap file loading |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | 18 | 🦞 Diamond | Requester-settle batches retry forever |
| [#157842](https://github.com/openclaw/openclaw/issues/157842) | 15 | 🦞 Diamond | 77 MB/turn memory leak in catalog worker |

**Underlying needs:** Users are demanding (a) rollback/stability guarantees after upgrades, (b) memory and CPU resource bounds for background workers, (c) cost control at the gateway level, and (d) selective context loading to reduce token waste.

## 5. Bugs & Stability (Ranked by Severity)

**P0 — Critical:**
- [#153257](https://github.com/openclaw/openclaw/issues/153257) — 2026.9.5 crash/recovery loop (35 comments, no fix PR yet)
- [#155753](https://github.com/openclaw/openclaw/issues/155753) — CPU burn from `refreshExpiredCatalog()` on every read (31 comments, links to #154276/#153422)
- [#157842](https://github.com/openclaw/openclaw/issues/157842) — catalog worker heap grows 70–80 MB/turn, exceeds 512 MB limit (15 comments)
- [#157107](https://github.com/openclaw/openclaw/issues/157107) — plugin generation rebuild every ~6s, blocks all agent runs (CLOSED, 14 comments)
- [#152804](https://github.com/openclaw/openclaw/issues/152804) — minimax-portal loses catalog after upgrade (11 comments)
- [#156112](https://github.com/openclaw/openclaw/issues/156112) — `openclaw update` fails at global install swap (11 comments)
- [#154812](https://github.com/openclaw/openclaw/issues/154812) — Gateway RSS 9.32 GiB, host OOM (7 comments)

**P1 — High:**
- [#144809](https://github.com/openclaw/openclaw/issues/144809) — claude-cli turns lose reply after RUN_STALE_TAKEOVER_MS (12 comments)
- [#144291](https://github.com/openclaw/openclaw/issues/144291) — config hot-reload aborts in-flight turns (8 comments)
- [#156191](https://github.com/openclaw/openclaw/issues/156191) — multi-agent catalog churn, memory pressure (8 comments)

**Fix PRs exist for:** none of the P0 crashes yet; several performance PRs (#158588, #158586, #158450, #158583) address underlying Gateway thread saturation that contributes to these failures.

## 6. Feature Requests & Roadmap Signals

- **Per-agent cost budgets** (#42475, 24 comments) — strong operator demand
- **Tiered bootstrap loading** (#22438, 20 comments) — context window optimization
- **Per-agent dreaming config** (#67413, 10 comments, 👍5) — memory/CPU control
- **Per-agent MCP server scoping** (#72591, 6 comments) — reduce process explosion
- **Self-hosted STT/TTS in webchat** (#45508, 9 comments)
- **Reaction-triggered agent turns** (#17840, 6 comments)
- **Telegram thread binding** (#42986, 5 comments)
- **Session activity state API** (#39127, 5 comments)
- **Native Levanto Sage provider** (#157433, PR open)
- **Agents API hosted/self-hosted** (#158307, PR open)

**Next-version prediction:** 2026.9.7 will likely include the catalog worker memory fix, update-path stabilization, and the Gateway performance PRs currently in review. Cost-budget and tiered-loading features are roadmap candidates but need product decisions.

## 7. User Feedback Summary

**Pain points:**
- Upgrade experience is broken: multiple update-failure reports (#156112, #155094, #154924, #154460, #154381) across platforms (npm global, systemd, Windows managed service)
- Memory is unbounded: catalog worker leaks 77 MB/turn, gateway RSS reaches 9+ GiB
- CPU burn: catalog refresh loop pins cores indefinitely
- Message loss after reconnect/restart (#50093, #55792)
- Long turns lose replies (#144809)
- Config hot-reload kills in-flight turns (#144291)

**Satisfaction signals:** Performance PRs (main-thread offloading, stream deltas, voice thread bounds) are well-received; UI improvements (agent identification in tabs, Android provider setup) address real UX friction.

## 8. Backlog Watch

Long-unanswered important items needing maintainer attention:
- [#42475](https://github.com/openclaw/openclaw/issues/42475) — Per-agent cost budgets (opened 2026-03, 24 comments, P2, needs product decision)
- [#22438](https://github.com/openclaw/openclaw/issues/22438) — Tiered bootstrap loading (opened 2026-02, 20 comments, needs product decision)
- [#67413](https://github.com/openclaw/openclaw/issues/67413) — Per-agent dreaming config (opened 2026-04, 👍5)
- [#72591](https://github.com/openclaw/openclaw/issues/72591) — Per-agent MCP scoping (opened 2026-04, security review needed)
- [#16670](https://github.com/openclaw/openclaw/issues/16670) — Onboarding wizard memory/embedding step (opened 2026-02, P1)
- [#16555](https://github.com/openclaw/openclaw/issues/16555) — TTL for delivery queue messages (opened 2026-02, P1)
- [#51441](https://github.com/openclaw/openclaw/issues/51441) — Expose resolved backend model in session_status (opened 2026-03, P2)
- [#45508](https://github.com/openclaw/openclaw/issues/45508) — Self-hosted STT/TTS in webchat (opened 2026-03, 9 comments)
- [#14785](https://github.com/openclaw/openclaw/issues/14785) — Reduce tool schema token overhead (opened 2026-02, 10 comments)
- [#13219](https://github.com/openclaw/openclaw/issues/13219) — Per-model usage logging (opened 2026-02, 8 comments)

**Stale PRs needing action:** Multiple PRs are in 👀 ready-for-maintainer-look status (#158547, #158561, #158567, #158582, #158584, #158587, #158588, #158450, #157433, #156181, #152875) — review bottleneck is the primary constraint.

---

## Cross-Ecosystem Comparison



# Cross-Project Ecosystem Comparison Report
**Date:** 2026-09-26 | **Scope:** 13 open-source AI agent / personal assistant projects

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is experiencing a bifurcated phase: a handful of projects (OpenClaw, Hermes Agent, NanoClaw, CoPaw) are in high-activity cycles with 50+ issues and PRs churned daily, while others (IronClaw, NullClaw, PicoClaw) are in quieter, refinement-focused periods. The dominant narrative across active projects is **post-release stabilization** — multiple projects are contending with P0 regressions, memory leaks, and update-path failures that surfaced after recent version cuts. Underlying this is a shared community demand for predictable resource bounds (memory, CPU), reliable upgrade mechanics, and granular per-agent configuration. The ecosystem is maturing from "can it run?" to "can it run safely at scale?", with cost control, context optimization, and execution guardrails emerging as the top unmet needs.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed (24h) | Latest Release | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 1 | 2026.9.6 (eb377ac) | 6.0 / 10 |
| **Hermes Agent** | 50 | 50 | 1 PR, 3 issues | None (pre-release) | 6.5 / 10 |
| **NanoClaw** | 5 | 50 | 2 | None (bug-fix phase) | 6.0 / 10 |
| **CoPaw** | 11 | 13 | 0 | None | 6.5 / 10 |
| **LobsterAI** | 0 | 10 | 1 | None | 6.0 / 10 |
| **PicoClaw** | 2 | 4 | 0 | None | 5.5 / 10 |
| **NullClaw** | 0 | 1 | 0 | Current version stable | 7.0 / 10 |
| **IronClaw** | 0 | 2 | 0 | Current version stable | 8.0 / 10 |
| **NanoBot** | — | — | — | — | Insufficient data |
| **TinyClaw** | 0 | 0 | 0 | — | Dormant |
| **Moltis** | 0 | 0 | 0 | — | Dormant |
| **ZeptoClaw** | 0 | 0 | 0 | — | Dormant |
| **ZeroClaw** | 0 | 0 | 0 | — | Minimal activity |

*\*Health Score: composite of stability (P0 count, fix velocity), activity throughput (merge rate), and community satisfaction signals. 10 = production-ready, zero known critical issues.*

**Key observation:** Only 2 of 13 projects published a release in the last 24 hours. The highest-activity projects (OpenClaw, Hermes, NanoClaw, CoPaw) are all in accumulation phases — taking in work faster than they ship it.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Largest visible community:** OpenClaw's top issues attract 18–35 comments each, dwarfing peer engagement (Hermes tops out at 7; CoPaw at 7). This signals a materially larger user base generating feedback volume.
- **Most mature feature surface:** Features like per-agent cost budgets (#42475), tiered bootstrap loading (#22438), and MCP scoping (#72591) have been community-labeled and tracked for months — indicating a longer roadmap history than competitors.
- **Active maintainer pipeline:** 15+ PRs are in review for performance and stability fixes, including Gateway main-thread offloading (#158588, #158586) and stream delta optimization (#158587). No other project has this breadth of concurrent review-stage PRs targeting the same architectural bottleneck.

### Technical Approach Differences
- **Gateway-centric architecture:** OpenClaw's performance PRs focus on moving Gateway reads off the main thread — a pattern not seen in peers. Hermes Agent and CoPaw appear more agent-centric in their fix patterns.
- **Catalog worker as stress-test vector:** The `prepared-model-catalog` worker is the single largest source of P0 bugs (memory leak, CPU pinning, crash loop). This suggests OpenClaw's architecture has a more aggressive background-preparation strategy than competitors, which may explain both its feature richness and its current instability.
- **Multi-channel breadth:** OpenClaw's issue tracker spans Discord, Android, CLI, plugin, and webchat surfaces simultaneously — a broader platform footprint than any peer except possibly CoPaw.

### Community Size Comparison
OpenClaw's issue comment counts (35, 31, 24, 20, 18 on top 5 issues) suggest a community approximately 3–5× larger than Hermes Agent or CoPaw in terms of active reporters. PicoClaw, NullClaw, and IronClaw show near-zero comment activity, indicating either very small user bases or insufficient issue triage.

---

## 4. Shared Technical Focus Areas

Five requirements emerge across **3+ projects** simultaneously:

| Requirement | Projects | Specific Evidence |
|---|---|---|
| **Memory / CPU resource bounds** | OpenClaw, Hermes, NanoClaw, CoPaw | OpenClaw: catalog worker leaks 77 MB/turn (#157842); Hermes: systemd gateway grows tens of GB (#123340); NanoClaw: container lifecycle issues (#3909); CoPaw: context budget overruns (#7628) |
| **Update / install reliability** | OpenClaw, Hermes, NanoClaw, LobsterAI | OpenClaw: `openclaw update` fails at global swap (#156112); Hermes: Windows update aborts (#122495); NanoClaw: update-nanoclaw flow broken (#3906); LobsterAI: work preservation across compaction (#2765) |
| **Context / token optimization** | OpenClaw, Hermes, CoPaw | OpenClaw: tiered bootstrap loading (#22438); Hermes: BEDROCK_CONTEXT_LENGTHS fix (#74263); CoPaw: compaction budget miscalculation (#7628) |
| **Per-agent configuration granularity** | OpenClaw, CoPaw | OpenClaw: per-agent cost budgets (#42475), dreaming config (#67413), MCP scoping (#72591); CoPaw: per-media inline caps (#7359), model visibility toggle (#7357) |
| **Execution safety / approval guardrails** | NullClaw, CoPaw | NullClaw: `/approve` pause state broken for medium/high-risk commands (#900); CoPaw: tool_result age-out (#7923), grep_search binary filtering (#7980) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | CoPaw | PicoClaw | IronClaw |
|---|---|---|---|---|---|
| **Primary focus** | Gateway performance + catalog stability | Cross-platform install/update reliability | UI/UX polish + session integrity | Provider ecosystem expansion | Infrastructure maintenance |
| **Target user** | Power users running multi-channel agents | Managed-deployment operators (Windows, systemd) | Conversational AI developers (web console) | Cost-sensitive users, multi-provider routing | Internal tooling / CI automation |
| **Architecture style** | Gateway + catalog worker | Agent + plugin + vault | Agent + browser + tool registry | Lightweight channels + providers | Host runtime + builtin tools |
| **Bug profile** | Memory leaks, CPU pinning, update failures | Windows ABI mismatches, venv redirectors | Session poisoning, context budget overruns | Config schema brittleness | Minimal (no open issues) |
| **Release cadence** | ~2 weeks (2026.9.5 → 2026.9.6 → 2026.9.7 in flight) | Pre-release accumulation, no date | Pre-release accumulation, no date | Stalled (4 PRs, 0 merges) | Infrequent, low-risk |

**Key differentiator:** OpenClaw is the only project with both (a) a large, vocal community and (b) an active, multi-PR review pipeline targeting the same architectural bottleneck. Hermes has comparable activity but slower throughput (1 PR merged vs. OpenClaw's 1 PR + 1 issue closed, but OpenClaw's PRs are larger in scope). CoPaw has the most first-time-contributor PRs, suggesting the lowest barrier to entry.

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Activity, High Throughput)
- **OpenClaw:** 500 issues + 500 PRs in 24h. Post-release triage mode. Maintainer review bottleneck is the primary constraint. P0 bugs exist but performance PRs are queued.
- **Hermes Agent:** 50 + 50. Fast paired bug-fix response (same-day PRs for same-day issues). Windows platform stress-testing. Throughput lagging intake.

### Tier 2: Active Development (Moderate Activity, Mixed Throughput)
- **CoPaw:** 11 + 13. Strong first-time-contributor pipeline. UI/UX and tool safety focus. Critical bugs (#7980, #7946) have fix PRs in review.
- **NanoClaw:** 5 + 50. Intense PR churn but only 2 merges. Critical update-flow and container bugs have fix PRs (#3910, #3913) — remediation path is clear.
- **LobsterAI:** 0 + 10. Steady maintenance. Multiple 5-month stale PRs need triage. OpenClaw-integration focused.

### Tier 3: Stabilizing (Low Activity, Low Risk)
- **IronClaw:** 0 + 2. Quiet, automated CI contributions. Zero open issues. Mature and stable.
- **NullClaw:** 0 + 1. Focused on a single critical execution-safety fix. No user-facing issues.

### Tier 4: Dormant / Minimal
- **PicoClaw:** 2 + 4. Feature momentum strong but merge bottlenecks risk PR staleness (DeltaChat refactor open 86 days).
- **NanoBot, TinyClaw, Moltis, ZeptoClaw, ZeroClaw:** No meaningful 24h activity.

---

## 7. Trend Signals

### For AI Agent Developers
1. **Resource bounding is the #1 community demand.** Memory leaks (77 MB/turn), CPU pinning (catalog refresh loop), and unbounded RSS growth (9+ GiB) are the most-upvoted, most-commented issues across projects. Developers should prioritize explicit memory/CPU limits on background workers and per-agent resource quotas.

2. **Update reliability is a trust killer.** OpenClaw (5+ update-failure reports), Hermes (Windows update abort), and NanoClaw (broken update flow) all show that the upgrade path is the single biggest friction point. Atomic swaps, rollback mechanisms, and pre-update validation are expected, not nice-to-have.

3. **Context optimization is becoming table stakes.** Tiered bootstrap loading, per-agent context windows, and compaction budgeting appear in 3+ projects. The community understands that naive context loading is wasteful and dangerous. Any new agent framework should build in selective context loading from day one.

4. **Per-agent granularity is the emerging UX standard.** Cost budgets, dreaming config, MCP scoping, per-media caps, model visibility — users want to control each agent's behavior independently. One-size-fits-all configuration is rapidly becoming unacceptable.

5. **Execution safety is the next frontier.** NullClaw's `/approve` pause mechanism and CoPaw's tool_result age-out and binary filtering point toward a growing demand for human-in-the-loop guardrails. Agents that can execute shell commands need predictable approval flows.

6. **Provider ecosystem expansion is a bottom-up trend.** PicoClaw (Cheaper Inference), LobsterAI (Requesty), and OpenClaw (Levanto Sage) all show users voting with their wallets for cheaper, more flexible model routing. Hardcoding a single provider is increasingly seen as a limitation.

### Value for Technical Decision-Makers
- **If prioritizing stability:** IronClaw and NullClaw are the only projects with zero open bugs. OpenClaw and Hermes are too active to be stable yet.
- **If prioritizing community / ecosystem:**

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-09-26

Based on the latest GitHub activity for **`HKUDS/nanobot`** up to September 26, 2026, here is the structured project digest.

---

### 1. Today's Overview
NanoBot is experiencing high development velocity, focusing heavily on channel integration stability, core

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-26

---

## 1. Today's Overview

Hermes Agent is experiencing exceptionally high development velocity, with **50 issues and 50 PRs** updated in the past 24 hours. However, throughput skews heavily toward **inflow**: only 3 issues were closed and 1 PR was merged, meaning the project is in a rapid intake/working-phase rather than a consolidation phase. The contributor base is broad — new reporters like `mysoul12138`, `jhyland9`, `coygeek`, and `benbarrows` joined alongside long-time contributors like `jonpol01`, `webtecnica`, and `Ethan-Vex`. **No new releases** were published today, suggesting the codebase is in a feature/bug-fix accumulation cycle ahead of a future cut. The volume of Windows, install-update, and desktop-related issues signals a maturing multi-platform surface area under active stress-testing.

---

## 2. Releases

**None.** No new versions were tagged or published in the last 24 hours. The project is in a pre-release stabilization window with no release notes to summarize.

---

## 3. Project Progress

### Merged/Closed Today
- **PR #122007** *(P0, closed)* — `fix(plugins)`: `hermes plugins update` now preserves user files in subdirectory installs and gitignored data directories, preventing data loss during plugin updates. This was a high-severity data-loss fix.
- **Issue #74263** *(closed)* — Fixed BEDROCK_CONTEXT_LENGTHS to include Claude 5 profiles, resolving context compression activating ~8× too early.
- **Issue #122424** *(closed)* — Resolved known CVE ranges in `package.json` dependencies (js-yaml, yaml).
- **Issue #122736** *(closed)* — Fixed Windows managed-store Python overlaying legacy venv site-packages causing pydantic_core ABI mismatch.

### PRs Opened Today (20 shown; all dated 2026-09-26)
Notable PRs advancing the project:

| PR | Component | Summary |
|---|---|---|
| [#123358](https://github.com/NousResearch/hermes-agent/pull/123358) | gateway | Fix Windows gateway boot failure from ABI mismatched venvs |
| [#123351](https://github.com/NousResearch/hermes-agent/pull/123351) | agent | Fix fallback/`--once` resetting primary context window to stale startup value |
| [#123353](https://github.com/NousResearch/hermes-agent/pull/123353) | agent | Count iteration-limit summary requests in session billing/cost |
| [#123355](https://github.com/NousResearch/hermes-agent/pull/123355) | file-sync | Preserve host files when sync-back writes fail (no truncation) |
| [#123356](https://github.com/NousResearch/hermes-agent/pull/123356) | terminal | Coerce boolean/string notify arguments for terminal tool |
| [#123285](https://github.com/NousResearch/hermes-agent/pull/123285) | cron | Skip non-object entries in jobs.json instead of halting every tick |
| [#123313](https://github.com/NousResearch/hermes-agent/pull/123313) | memory | Mirror memory 'replace'/'remove' operations; count retrievals |
| [#119225](https://github.com/NousResearch/hermes-agent/pull/119225) | vault | Add macOS Keychain login backend (`kc:` handles) |
| [#122007](https://github.com/NousResearch/hermes-agent/pull/122007) | plugins | Preserve user files during plugin updates |
| [#123348](https://github.com/NousResearch/hermes-agent/pull/123348) | tools | Avoid state.db creation/schema migration on `model_tools` import |

The day's PR activity shows a strong pattern of **paired bug-fix PRs directly addressing same-day bug reports** (e.g., #123350→#123351, #123352→#123353, #123354→#123355, #123345→#123356), indicating rapid triage and response.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[Issue #122495](https://github.com/NousResearch/hermes-agent/issues/122495)** — *7 comments* — Windows: `hermes update` aborts when a profile gateway runs as the venv redirector's `-c` shim form (identity classifier false negative). **Underlying need**: Windows users running managed profiles need reliable update paths; the PID-to-profile mapping logic fails to recognize gateway processes in certain execution forms.

2. **[Issue #122593](https://github.com/NousResearch/hermes-agent/issues/122593)** — *7 comments, P1* — `pm` workspace materializer strips `pm/uv.lock`, causing **every** `hermes pm` command to fail with FileNotFoundError on materialized installs. **Underlying need**: The PM package manager cannot function at all on materialized installs; this is a critical workflow blocker for PM-based deployments.

3. **[Issue #74263](https://github.com/NousResearch/hermes-agent/issues/74263)** — *5 comments, CLOSED* — BEDROCK_CONTEXT_LENGTHS missing Claude 5 entries, causing compressor to compact 8× too early. **Underlying need**: Provider context-length metadata must stay current with new model generations; the catch-all default severely under-reports windows for Claude 5 families.

4. **[Issue #122424](https://github.com/NousResearch/hermes-agent/issues/122424)** — *4 comments, CLOSED* — `package.json` pins `js-yaml@4.3.1` / `yaml<2.9` to known CVE ranges. **Underlying need**: Automated dependency pinning must avoid known-vulnerable versions; security tooling flagged GHSA-2883-xcg3-v3hh and GHSA-48c2-rrv3-qjmp.

5. **[Issue #90949](https://github.com/NousResearch/hermes-agent/issues/90949)** — *3 comments, P2* — `read_file` dedup can survive context compaction and suppress content evicted from context, causing the tool to reference non-existent content. **Underlying need**: Context compaction must invalidate tool-level caches/dedup state; otherwise the model receives hallucinated "unchanged" responses.

### Pattern Analysis
The dominant themes are: **(a)** Windows platform stability (multiple issues), **(b)** install/update reliability across managed environments, and **(c)** state/context management during long-running sessions. The community is actively stress-testing the managed deployment and multi-profile scenarios.

---

## 5. Bugs & Stability

Ranked by severity (P0 > P1 > P2):

### P0 — Critical
- **[Issue #122822](https://github.com/NousResearch/hermes-agent/issues/122822)** — Gateway hygiene persists a reduced-toolset system prompt over the live session; skills index is lost after compaction. This silently degrades agent capabilities without user-visible errors. *(No fix PR yet.)*

### P1 — High
- **[Issue #122593](https://github.com/NousResearch/hermes-agent/issues/122593)** — Every `hermes pm` command fails on materialized installs due to missing `pm/uv.lock`. Complete PM manager outage. *(No fix PR yet.)*
- **[Issue #123340](https://github.com/NousResearch/hermes-agent/issues/123340)** — systemd gateway re-runs source-completion tail on every start; `installs/<hash>/environments` grows to tens of GB, risking ENOSPC. *(No fix PR yet.)*
- **[Issue #123285](https://github.com/NousResearch/hermes-agent/issues/123281)** — Cron halts every tick if `jobs.json` contains a non-object entry. *(Fix PR: [#123285](https://github.com/NousResearch/hermes-agent/pull/123285))*

### P2 — Medium
- **[Issue #122495](https://github.com/NousResearch/hermes-agent/issues/122495)** — Windows update abort (PID mapping false negative). *(Fix PR: [#123358](https://github.com/NousResearch/hermes-agent/pull/123358))*
- **[Issue #123350](https://github.com/NousResearch/hermes-agent/issues/123350)** — Fallback/`--once` restores primary context window to stale startup value. *(Fix PR: [#123351](https://github.com/NousResearch/hermes-agent/pull/123

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-26

> **Repo:** [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)
> **Data as of:** 2026-09-26 | Issues: 2 updated | PRs: 4 updated | Releases: 0

---

## 1. Today's Overview

PicoClaw shows **low merge velocity** today — 4 PRs remain open, 0 merged or closed. Community activity is modest: one new bug reported (#3392) and one stale bug resolved (#3355). The project continues to expand its AI provider ecosystem (OpenAI, Cheaper Inference) and channel integrations (Feishu, DeltaChat), but maintainer responsiveness on reviews appears delayed.

---

## 2. Releases

**None** — no new version published.

---

## 3. Project Progress

No PRs merged or closed in the last 24h. Current open PRs:

| PR | Topic | Open Since |
|---|---|---|
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Switch OpenAI to Responses API | 2026-09-17 |
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | Parallel Search MCP setup docs | 2026-09-05 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | DeltaChat refactor (-200 LOC) | 2026-07-03 |
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | Add Cheaper Inference provider | 2026-09-25 |

---

## 4. Community Hot Topics

- **[#3381](https://github.com/sipeed/picoclaw/pull/3381)** — OpenAI Responses API migration (newest flagship feature, 8 days open, no reviews yet).
- **[#3393](https://github.com/sipeed/picoclaw/pull/3393)** — Cheaper Inference provider (just opened, reflects user demand for cost-effective LLM routing).
- **[#3392](https://github.com/sipeed/picoclaw/issues/3392)** — CLAassistant signature not detected (new bug, 0 comments — likely a config/schema mismatch).

**Underlying need:** Users want broader, cheaper AI provider options and seamless channel integrations, but encounter config compatibility gaps.

---

## 5. Bugs & Stability

| Severity | Issue | Status |
|---|---|---|
| Medium | [#3392](https://github.com/sipeed/picoclaw/issues/3392) — CLA signature detection failure | Open, 0 comments |
| Low (fixed) | [#3355](https://github.com/sipeed/picoclaw/issues/3355) — Feishu `app_id` config field rejected | Closed 2026-09-25 |

No fix PRs visible for #3392 yet.

---

## 6. Feature Requests & Roadmap Signals

Predicted near-term additions:
- **OpenAI Responses API** support (#3381) — most mature PR
- **Cheaper Inference** as new provider (#3393) — if merged, expands budget-friendly LLM access
- **Parallel Search MCP** integration (#3368) — extends web/search capabilities
- **DeltaChat modernization** (#3222) — cleanup, not new features, but improves maintainability

---

## 7. User Feedback Summary

**Pain points:**
- Config schema brittleness (Feishu `app_id` field rejected — #3355)
- CLA assistant integration unreliable (#3392)
- Cost of LLM APIs driving demand for cheaper routers

**Satisfaction signals:**
- Active community submitting features (4 PRs from 4 different authors)
- Multi-channel support (Feishu, DeltaChat, MCP) valued

---

## 8. Backlog Watch

These items need maintainer attention:
- ⚠️ **[#3222](https://github.com/sipeed/picoclaw/pull/3222)** — DeltaChat refactor, open **~86 days**, -200 LOC, high impact — **stale risk**.
- **[#3368](https://github.com/sipeed/picoclaw/pull/3368)** — Parallel Search MCP docs, open 21 days.
- **[#3381](https://github.com/sipeed/picoclaw/pull/3381)** — OpenAI Responses API, open 9 days, likely next feature release candidate.
- **[#3392](https://github.com/sipeed/picoclaw/issues/3392)** — New bug, no triage yet.

---

**Health snapshot:** Feature momentum is strong, but **merge bottlenecks** and **review delays** risk PR staleness. Maintainer engagement needed this week.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest - 2026-09-26

## 1. Today's Overview

The NanoClaw project shows intense development activity with 50 pull requests updated within the last 24 hours, though only 2 were merged or closed. Five new issues were reported, all remaining open and unresolved. The project is currently in a heavy bug-fixing phase, with multiple critical issues affecting core functionality like agent group management, container spawning, and update flows. No new releases were published during this period, indicating the team is focused on stabilizing existing functionality rather than releasing new features.

## 2. Releases

No new releases were published on 2026-09-26.

## 3. Project Progress

Two pull requests were merged or closed today:
- **PR #3917**: Fixed Claude's default output style seeding, stopping the use of "Concise" which was defeating prompt caching [https://github.com/nanocoai/nanoclaw/pull/3917](https://github.com/nanocoai/nanoclaw/pull/3917)

The remaining 48 open PRs represent ongoing work across various areas including setup improvements, bug fixes for agent runners, gateway detection issues, and CI/CD pipeline enhancements.

## 4. Community Hot Topics

The most active issues today center around critical bugs in fundamental operations:

1. **Issue #3906**: Controller archive fails to load during update-nanoclaw flow, missing setup/ directory [https://github.com/nanocoai/nanoclaw/issues/3906](https://github.com/nanocoai/nanoclaw/issues/3906)
2. **Issue #3911**: Agent groups restart the wrong target when using `ncl groups restart --id <other group>` [https://github.com/nanocoai/nanoclaw/issues/3911](https://github.com/nanocoai/nanoclaw/issues/3911)
3. **Issue #3909**: Sessions spawned for deleted agent groups cause container conflicts [https://github.com/nanocoai/nanoclaw/issues/3909](https://github.com/nanocoai/nanoclaw/issues/3909)

These issues indicate problems with core orchestration and update mechanisms that affect multiple users.

## 5. Bugs & Stability

Critical bugs ranked by severity:

1. **Update Flow Broken** (#3906): The documented controller archive cannot load, breaking the entire `/update-nanoclaw` process [https://github.com/nanocoai/nanoclaw/issues/3906](https://github.com/nanocoai/nanoclaw/issues/3906)
2. **Wrong Group Restart** (#3911): Commands targeting other agent groups inadvertently restart the calling group [https://github.com/nanocoai/nanoclaw/issues/3911](https://github.com/nanocoai/nanoclaw/issues/3911)
3. **Orphaned Containers** (#3909): Deleting agent groups mid-spawn creates inconsistent state [https://github.com/nanocoai/nanoclaw/issues/3909](https://github.com/nanocoai/nanoclaw/issues/3909)
4. **Gateway Detection Failure** (#3907): Nested pnpm workspace warnings break gateway detection [https://github.com/nanocoai/nanoclaw/issues/3907](https://github.com/nanocoai/nanoclaw/issues/3907)
5. **Log Rotation Issues** (#3916): Host logs don't rotate and carry no timestamps, complicating incident analysis [https://github.com/nanocoai/nanoclaw/issues/3916](https://github.com/nanocoai/nanoclaw/issues/3916)

Fix PRs exist for several issues:
- PR #3910 addresses gateway detection (#3907)
- PR #3913 fixes controller loading (#3906)

## 6. Feature Requests & Roadmap Signals

Several PRs suggest upcoming improvements:

- **PR #3903**: Pluggable admission for session wake scheduling, allowing custom concurrency controls [https://github.com/nanocoai/nanoclaw/pull/3903](https://github.com/nanocoai/nanoclaw/pull/3903)
- **PR #3646**: Global environment overrides for sweep timers, providing better control over container lifecycle management [https://github.com/nanocoai/nanoclaw/pull/3646](https://github.com/nanocoai/nanoclaw/pull/3646)

These indicate a focus on configurability and operational control for enterprise deployments.

## 7. User Feedback Summary

Users are experiencing significant pain points around:

- Update reliability: The core update mechanism is currently broken
- Agent group management: Critical operations like restarting other groups fail silently
- Container lifecycle: Orphaned containers and inconsistent states during group deletion
- Operational visibility: Log management issues make debugging difficult
- Platform compatibility: ARM64 support gaps in gateway installations

Satisfaction appears low due to these fundamental breakages affecting daily operations.

## 8. Backlog Watch

Several long-standing issues require attention:

- **PR #3185** (created 2026-08-04): Discord webhook interaction bug causing all approvals to fail [https://github.com/nanocoai/nanoclaw/pull/3185](https://github.com/nanocoai/nanoclaw/pull/3185) - This critical usability issue remains unresolved despite being open for over a month
- **PR #3446** (created 2026-08-22): Auto-drop automated senders in unknown-sender gate [https://github.com/nanocoai/nanoclaw/pull/3446](https://github.com/nanocoai/nanoclaw/pull/3446) - Important security/UX improvement pending review
- **PR #3302** (created 2026-08-17): Fix OneCLI gateway bind address [https://github.com/nanocoai/nanoclaw/pull/3302](https://github.com/nanocoai/nanoclaw/pull/3302) - Network configuration issue affecting gateway connectivity

These older PRs contain important fixes that may be overshadowed by the recent wave of bug reports.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-09-26

## 1. Today's Overview
Today, NullClaw exhibits low overall issue and release activity, but developer focus remains sharp on core execution safety. The primary movement is the submission of a significant pull request (#1009) aimed at fixing a critical flaw in the supervised autonomy workflow. This indicates the project is actively refining its command execution guardrails to ensure medium and high-risk commands correctly pause for manual approval rather than failing outright. Overall project health appears stable, with a targeted, code-focused effort to resolve security and operational bottlenecks before they reach production users.

## 2. Releases
*No new releases were published today.* The project remains on its current version, with development focus directed toward upcoming safety patches.

## 3. Project Progress
* **Merged/Closed PRs Today:** 0 merged or closed.
* **Active Developments:** 
  * **PR #1009** is currently open and represents the main active development line. It targets the execution module (`fix(exec): pause for /approve on medium/high-risk commands instead of failing`). The patch aims to resolve a state-routing bug where the `approval_request` state is never reached, blocking the safe execution of commands from `/bash`, `/exec`, or LLM interfaces. 

## 4. Community Hot Topics
* **Most Active Item:** [PR #1009](https://github.com/nullclaw/nullclaw/pull/1009) (Open, created by serhiy-bzhezytskyy).
* **Underlying Needs:** The community and developers require reliable, predictable "supervised autonomy" guardrails. The core need is for AI agents to execute shell commands with a safe, interruptible pause state (`/approve`) rather than a hard fail when risk thresholds are met. The gap identified is that the state machine fails to transition to the `approval_request` state, highlighting a need for robust, predictable approval hooks to trust the agent with higher-level system access.

## 5. Bugs & Stability
* **Critical Bug (Fix in Progress):** Medium and high-risk shell commands bypass the approval prompt and fail outright instead of pausing for `/approve`. This affects commands run via `/bash`, `/exec`, or the LLM.
  * **Severity:** High (blocks safe execution of medium/high-risk commands under supervised mode).
  * **Fix Status:** A fix is actively being developed in [PR #1009](https://github.com/nullclaw/nullclaw/pull/1009) (closes [Issue #900](https://github.com/nullclaw/nullclaw/issues/900)), but it remains unmerged. The bug is still present in the main branch and awaits maintainer review and integration.

## 6. Feature Requests & Roadmap Signals
* No new feature requests were filed today. 
* However, the roadmap signal is clearly pointing toward the maturation of the "supervised autonomy" and execution control layer. The focus on fixing the `/approve` pause mechanism suggests that secure, human-in-the-loop command execution is a high-priority milestone for the upcoming version. Future versions are likely to see further refinement in execution sandboxing, risk classification, and approval UI/CLI flows.

## 7. User Feedback Summary
* No direct user comments or new issues were reported today.
* However, the existence of [Issue #900](https://github.com/nullclaw/nullclaw/issues/900) and [PR #1009](https://github.com/nullclaw/nullclaw/pull/1009) indicates a clear underlying user pain point: users face frustration when trying to use the agent in semi-autonomous modes, where high-risk commands unexpectedly fail instead of prompting for permission, disrupting automated workflows and trust. The demand is for a seamless, non-destructive execution pause state.

## 8. Backlog Watch
* No long-unanswered issues are currently listed in the active dataset.
* However, **[Issue #900](https://github.com/nullclaw/nullclaw/issues/900)** represents a critical backlog item that requires resolution to unlock supervised execution of risky commands. Maintainers should prioritize merging [PR #1009](https://github.com/nullclaw/nullclaw/pull/1009) to close #900 and restore confidence in the execution safety controls.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



Based on the GitHub activity for IronClaw (`nearai/ironclaw`) as of **2026-09-26**, here is the structured project digest.

---

### 1. Today's Overview
On September 26, 2026, IronClaw exhibits quiet but steady development activity, with no new releases, issue updates, or merged pull requests recorded in the last 24 hours. However, the project remains active with two open pull requests updated recently, focusing on core infrastructure maintenance and runtime utility enhancements. Overall project health appears stable, characterized by low-risk, systematic contributions from both community members and automated CI bots. This indicates a mature repository focusing on refinement, documentation, and automated codebase consistency rather than chaotic rapid changes.

### 2. Releases
No new releases were published today. There are no version changes, breaking changes, or migration notes to report.

### 3. Project Progress
No pull requests were merged or closed today. Progress is represented by the ongoing review and maintenance of open pull requests:
*   **PR #8108** (`fix(host-runtime): add builtin.time shift and typed input issues`): Awaiting integration, this PR enhances the host runtime by adding a robust `shift` operation to the `builtin.time` tool.
*   **PR #7988** (`chore(agents): refresh codebase knowledge graph`): Automated housekeeping to refresh the committed codebase-memory bootstrap snapshot, ensuring internal AI memory structures stay aligned with the current codebase.

### 4. Community Hot Topics
With zero active issues, community focus is currently directed towards the open pull requests:
*   **PR #8108: `fix(host-runtime): add builtin.time shift`** ([Link](https://github.com/nearai/ironclaw/pull/8108)): Authored by new contributor Bortlesboat, this XL-sized but low-risk PR addresses a key developer need for precise temporal manipulation. The underlying community need is for robust, signed time offset calculations (seconds, minutes, hours, days, weeks) relative to explicit timestamps, which is crucial for scheduling and temporal reasoning in agent workflows.
*   **PR #7988: `chore(agents): refresh codebase knowledge graph`** ([Link](https://github.com/nearai/ironclaw/pull/7988)): Generated by the automated `ironclaw-ci[bot]`, this highlights the community's focus on maintaining up-to-date AI memory layers and codebase embeddings automatically.

### 5. Bugs & Stability
No new bugs, crashes, or regressions were reported today. The repository is currently stable. However, PR #8108 is labeled as a `fix` for "typed input issues" in the host-runtime, suggesting it addresses existing edge cases or bugs in the `builtin.time` utility, though it remains in the open phase awaiting review and integration.

### 6. Feature Requests & Roadmap Signals
While no formal user feature requests are present in the issue tracker today, the open PR #8108 serves as a strong roadmap signal for the developer experience path. The addition of a `shift` operation to `builtin.time` suggests that precise relative time calculations (e.g., shifting timestamps by signed units like weeks or hours) are highly desired for scheduling and temporal reasoning in personal AI assistant workflows. This kind of granular time manipulation is critical for advanced automation and agent planning, indicating a roadmap trend toward richer built-in temporal utilities.

### 7. User Feedback Summary
No direct user feedback or satisfaction metrics are available in today's dataset, as there are no active or updated issues. The project appears to be in a quiet phase of community interaction, relying on pull request contributions to drive direction.

### 8. Backlog Watch
With zero open issues in the current dataset, there are no immediate orphaned or unanswered issues requiring urgent maintainer intervention. However, maintaining the automated codebase graph refreshes (as seen in PR #7988) is vital for keeping the project's AI memory layers aligned with code changes without accumulating massive technical debt.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑09‑26**  
*Based on GitHub activity (issues/PRs updated in the last 24 h).*

---

### 1. Today’s Overview  
The repository saw **no new issues** and **ten pull‑request updates** in the past day, with **one PR merged/closed** (#2763) and nine still open. No releases were published. Overall activity indicates steady maintenance work—primarily bug‑fixes and incremental feature additions—while a number of older PRs remain stalled (marked *stale*), suggesting a growing backlog that may need maintainer triage.

---

### 2. Releases  
*No new releases were tagged today.*

---

### 3. Project Progress (Merged/Closed PRs)  

| PR | Type | Summary (from PR description) | Link |
|----|------|-------------------------------|------|
| **#2763** | **fix** (openclaw) | Prevents whole‑turn replay after a model call has started, eliminating a false “LLM request failed.” error by gating outer replays with a new `modelCallStarted` flag. | [#2763](https://github.com/netease-youdao/LobsterAI/pull/2763) |

*Impact:* Improves reliability of the agent‑runner error handling path, reducing spurious failure messages when a model call succeeds but downstream retry logic incorrectly replays the turn.

---

### 4. Community Hot Topics  
All PRs currently show **no comment count** (the data field is `undefined`), so there is no measurable discussion volume today. The most recently updated items (and thus likely to attract attention) are:

* **#2766** – Add Requesty as a model provider (opened 2026‑09‑25)  
* **#2765** – Preserve accepted work through recovery and compaction (opened 2026‑09‑25)  
* **#2764** – Reload live gateway policies without restarting (opened 2026‑09‑25)  

These reflect active work on extensibility (new provider), durability (work‑preservation), and operational flexibility (hot‑reloadable gateway settings).

---

### 5. Bugs & Stability (Reported/Today)  

| Severity | PR | Bug Area | Brief Description | Fix Status |
|----------|----|----------|-------------------|------------|
| **High** | #2763 | openclaw agent‑runner | Whole‑turn replay collides with a started model call, masking real provider errors. | **Closed/merged** |
| **Medium** | #1547 | scheduledTask (renderer) | After setting a task’s notification channel to “不通知” and saving, re‑opening the edit form shows the previous IM channel instead of “不通知”. | Open (stale) |
| **Medium** | #1550 | scheduledTask (renderer) | Tasks created via conversation/IM with `mode=none` still send `channel/to` fields to the gateway, causing validation errors on trigger. | Open (stale) |
| **Medium** | #1634 | cowork (global search) | Search scope incorrectly limited to the current agent; sessions data unstable; UX needs upgrade. | Open (stale) |
| **Low** | #1628 | cowork UI (model selector) | UI polishing – provider icons, i18n, truncation, portal‑based dropdown to avoid clipping. | Open (stale) |

*Note:* Severity is inferred from impact on core functionality (agent execution) vs. UI/UX polish.

---

### 6. Feature Requests & Roadmap Signals  

| PR | Feature | Rationale / Indicator |
|----|---------|------------------------|
| **#2766** | **Requesty provider** | Adds a new LLM gateway (OpenRouter‑style) as a built‑in option, signalling interest in multi‑provider flexibility. |
| **#1628** | **Model selector UI revamp** | Provider icons, image‑model labels, adaptive dropdown – prepares for a growing model catalog and better accessibility. |
| **#1660** | **Non‑main agent welcome area** | Dynamic greeting/description per agent – enhances on‑boarding for cowork‑style workflows. |
| **#2758** | **Display & refresh native OpenClaw progress cards** | Surfaces persisted plan progress in the Cowork composer, allowing manual refresh – aligns with a roadmap for richer plan visibility. |
| **#2765** | **Preserve accepted work across compaction/restarts** | Reduces pinned‑runtime startup overhead while safeguarding user‑accepted work – a stability‑performance feature likely targeting the next release. |

These PRs collectively point toward: (1) broader model‑provider ecosystem, (2) polished UI for model/discovery tasks, (3) improved cowork collaboration UX, and (4) runtime durability enhancements.

---

### 7. User Feedback Summary  
*Derived from PR descriptions (no explicit user comments available):*  

* **Error‑masking frustration** – Users encountered misleading “LLM request failed.” messages when a model call actually succeeded (#2763).  
* **Notification‑channel confusion** – Users reported inability to revert a scheduled task to “不通知” after switching from an IM channel (#1547, #1550).  
* **Search limitations** – Users expected global search across all agents but only saw results for the current agent, leading to low discoverability (#1634).  
* **UI polish requests** – Requests for clearer model identification (provider icons, image labels) and non‑clipping dropdowns (#1628).  
* **Personalized onboarding** – Desire for the welcome screen to reflect the active agent’s name and description when not using the main agent (#1660).  

Overall, feedback emphasizes **reliability**, **clear UI state**, and **global discoverability** of features.

---

### 8. Backlog Watch (Stale / Long‑Running Items)  

| PR | Age (as of 2026‑09‑26) | Labels | Why it Needs Attention |
|----|-----------------------|--------|------------------------|
| **#1547** | ~5 months | `stale`, `fix(scheduledTask)` | Notification‑channel UI bug affecting core task‑setup workflow. |
| **#1550** | ~5 months | `stale`, `fix(scheduledTask)` | Gateway validation error for IM‑created silent tasks – impacts reliability. |
| **#1628** | ~5 months | `stale`, `feat(ui)`, `area:renderer` | UI enhancements pending; could improve model selection experience. |
| **#1634** | ~5 months | `stale`, `fix(cowork)`, `area:cowork` | Global search broken and UX outdated – high user impact. |
| **#1660** | ~5 months | `stale`, `feat(cowork)` | Welcome‑area personalization ready to merge; low risk, high polish value. |

*Recommendation:* Prioritize review and merger of the above stale PRs, especially the two scheduled‑task fixes (#1547, #1550) and the cowork search fix (#1634), as they address functional defects that affect daily usage.

--- 

**Overall Health Indicator:**  
- **Activity:** Moderate (steady PR flow, no issue spikes).  
- **Stability:** Recent high‑severity bug fixed (#2763); several medium‑severity bugs linger in stale PRs.  
- **Feature Momentony:** Active work on extensibility (new provider) and durability (work preservation).  
- **Action Needed:** Triage stale PRs to reduce technical debt and unlock pending UX/search improvements.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (github.com/agentscope-ai/CoPaw) – Project Digest**  
*Date: 2026‑09‑26*  

---  

### 1. Today’s Overview  
The repository is in a highly active state: **11 issues** and **13 pull requests** were updated in the last 24 hours, with **no new releases** published. All open items remain unreleased, indicating that the development cycle is focused on incremental bug‑fixes, UI/UX refinements, and feature extensions rather than major version bumps. The project’s health appears robust, with rapid community engagement and a steady flow of first‑time‑contributor PRs.  

---  

### 2. Releases  
*None* – there are currently **0 new releases**.  

---  

### 3. Project Progress  
- **Merged/Closed PRs:** None reported for the past day; all 13 PRs remain open.  
- **Key Advances:**  
  - **UI/UX:** PR #7989 (keep Markdown tables scroll‑reachable), PR #7988 (skip binary/internal files in `grep_search`), PR #7987 (support Playwright default argument exclusions), PR #7986 (skip context‑window pattern for custom providers).  
  - **Stability:** PR #7983 (fix QQ replayed messages), PR #7984 (browser SDK profile extension loading), PR #7980 (binary filtering for `grep_search`).  
  - **Feature Enhancements:** PR #7357 (tool‑call visibility toggle), PR #7359 (per‑media inline caps), PR #7923 (age‑out `tool_result` blocks), PR #7542 (scroll‑back message pagination).  

Overall, the sprint is heavily oriented toward polishing the console/web UI, tightening tool safety, and improving the reliability of long‑running sessions.  

---  

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions | Link | Underlying Need |
|------|------|----------------------|------|-----------------|
| **#7628** | Issue (enhancement/bug) | 7 comments | <https://github.com/agentscope-ai/QwenPaw/issues/7628> | Context compaction budget is calculated from only the *visible* conversation, causing provider‑budget overruns and failed turns. Users need accurate budgeting based on the full request that will be sent. |
| **#7884** | Issue (question) | 5 comments | <https://github.com/agentscope-ai/QwenPaw/issues/7884> | After compression, the front‑end cannot reload the full history, leaving users unable to scroll back through older messages. Desired: persistent, fully loadable chat history. |
| **#7957** | Issue (feature) | 3 comments | <https://github.com/agentscope-ai/QwenPaw/issues/7957> | Users request the ability to manually disable pre‑made models and channels, especially for those with “OCD” tendencies who want a clean UI. |
| **#7989** | PR (first‑time‑contributor) | 0 comments | <https://github.com/agentscope-ai/QwenPaw/pull/7989> | Improves Markdown table scrolling reachability, addressing the same UI pain seen in #7924. Likely to be merged soon. |
| **#7988** | PR (first‑time‑contributor) | 0 comments | <https://github.com/agentscope-ai/QwenPaw/pull/7988> | Adds binary & internal‑file filtering to `grep_search`, directly tackling the session‑state poisoning described in #7980. |
| **#7987** | PR (first‑time‑contributor) | 0 comments | <https://github.com/agentscope-ai/QwenPaw/pull/7987> | Makes Playwright launch arguments configurable, solving the “profile extension not loading” issue in #7984. |

**Analysis:** The most active discussion centers on **accurate context budgeting** (#7628) and **persistent chat history** (#7884). These reflect core usability concerns: agents must respect provider limits, and users expect a complete, searchable conversation history even after compaction. Feature requests (#7957) and UI polish (#7989) further indicate a community that values a tidy, customizable interface.  

---  

### 5. Bugs & Stability  

| Severity | Issue | Summary | Fix PR (if any) | Link |
|----------|-------|---------|-----------------|------|
| **Critical** | **#7980** | `grep_search` lacks binary filtering; matches internal `history.db-wal`, corrupting session state and causing doom loops. | **#7988** (binary filtering) | <https://github.com/agentscope-ai/QwenPaw/issues/7980> |
| **High** | **#7984** | Browser SDK cannot load profile extensions because Playwright launches with `--disable-extensions`; QwenPaw cannot remove this flag. | **#7987** (Playwright default‑arg support) | <https://github.com/agentscope-ai/QwenPaw/issues/7984> |
| **High** | **#7946** | QQ official‑bot gateway replays events on session resume, producing duplicate message processing and duplicate replies. | **#7983** (fix QQ replayed messages) | <https://github.com/agentscope-ai/QwenPaw/issues/7946> |
| **Medium** | **#7981** | `chat_with_agent` foreground timeout reports “interrupted by user” while the parent turn ends with no final answer, misleading the caller. | None yet (open) | <https://github.com/agentscope-ai/QwenPaw/issues/7981> |
| **Medium** | **#7979** | Cloud context‑window catalog incorrectly applies a 32 k local llama.cpp provider as a 1 M window, preventing compaction. | None yet (open) | <https://github.com/agentscope-ai/QwenPaw/issues/7979> |
| **Low‑Medium** | **#7948** | Poor web‑console design breaks user input (e.g., input field overflow). | None yet (open) | <https://github.com/agentscope-ai/QwenPaw/issues/7948> |

**Takeaway:** Several high‑impact bugs affect **session integrity** (binary file matching, QQ replay) and **developer experience** (browser profile loading). The corresponding PRs (#7988, #7987, #7983) are already in review, suggesting rapid remediation.  

---  

### 6. Feature Requests & Roadmap Signals  

- **Manual disabling of pre‑made models/channels** (#7957) – signals demand for a cleaner UI and user‑controlled environment.  
- **Model catalog `thinking_param_style` for Aliyun Token‑Plan models** (#7990) – indicates that thinking‑budget UI controls are missing for certain providers, limiting user configurability.  
- **Markdown table auto‑wrap & scroll‑reachability** (#7924, #7989) – strong UX feedback on console rendering; likely to be landed in the next minor release.  
- **Binary & internal‑file exclusion in `grep_search`** (#7980, #7988) – a stability‑critical request that may become a default behavior.  
- **Playwright profile extension support** (#7984, #7987) – shows that the team is addressing deeper integration concerns for browser‑based agents.  

These items collectively hint that the next version will likely ship **enhanced budgeting logic**, **more granular UI controls**, and **greater configurability of external integrations**.  

---  

### 7. User Feedback Summary  

- **Context Budget Mis‑calculation** – Users report that compaction can exceed the provider’s request budget, causing failed turns (#7628).  
- **Short‑Lived Chat History** – After compression, older messages disappear from the UI, making it hard to retrieve past discussions (#7884).  
- **UI Clutter & Customization** – Community members want to hide unused pre‑made models/channels (#7957) and control thinking‑level UI elements for specific models (#7990).  
- **Console & Table Usability** – Markdown tables overflow the chat bubble, require horizontal scrolling, and lack auto‑wrapping (#7924, #7989).  
- **Tool Safety** – `grep_search` indiscriminately reads binary files, contaminating conversation state (#7980).  
- **Browser Profile Extensions** – Persistent profiles cannot load installed extensions due to Playwright’s `--disable-extensions` flag (#7984).  
- **QQ Bot Replay Issues** – Duplicate message processing after reconnection leads to noisy or incorrect agent replies (#7946).  
- **Timeout Mis‑communication** – When a foreground call times out, the user is told they interrupted the session, while the agent receives no final answer (#7981).  

Overall sentiment is **mixed**: core functionality works, but users are frustrated by UI quirks, inaccurate budgeting, and occasional stability bugs that affect long‑running sessions.  

---  

### 8. Backlog Watch  

| Item | Why It Needs Attention | Link |
|------|------------------------|------|
| **#7628** (context compaction budget) | Core budgeting bug; high comment count, still open after many days. | <https://github.com/agentscope-ai/QwenPaw/issues/7628> |
| **#7884** (history load after compression) | Directly impacts user ability to review past conversation; no resolution yet. | <https://github.com/agentscope-ai/QwenPaw/issues/7884> |
| **#7957** (disable pre‑made models/channels) | Feature request with clear user demand; may require UI redesign. | <https://github.com/agentscope-ai/QwenPaw/issues/7957> |
| **#7983** (fix QQ replayed messages) | Duplicate processing can corrupt session state; PR exists but may need deeper review. | <https://github.com/agentscope-ai/QwenPaw/pull/7983> |
| **#7989** (markdown table scrolling) | UI polish that improves readability; first‑time‑contributor PR, may need guidance. | <https://github.com/agentscope-ai/QwenPaw/pull/7989> |
| **#7988** (binary filtering in grep) | Prevents session poisoning; high impact, but PR is still open. | <https://github.com/agentscope-ai/QwenPaw/pull/7988> |
| **#7984** (browser profile extension loading) | Affects any user employing persistent profiles; blocker for advanced browser usage. | <https://github.com/agentscope-ai/QwenPaw/issues/7984> |
| **#7979** (cloud catalog applied to local llama.cpp) | Leads to incorrect context window sizing and never‑firing compaction; needs deeper investigation. | <https://github.com/agentscope-ai/QwenPaw/issues/7979> |

*Maintainer focus:* Prioritize issues with **high comment counts** and **critical impact** (e.g., #7628, #7980, #7946). Review open PRs that address these problems (#7988, #7987, #7983) to ensure they are merged promptly.  

---  

**Conclusion** – CoPaw is actively evolving, driven by a vibrant community that surfaces concrete usability pain points and requests finer‑grained control over models, UI, and integration details. The steady stream of first‑time‑contributor PRs suggests a healthy contribution pipeline, while the concentration of open high‑severity bugs indicates that maintainers should allocate attention to stability fixes before pushing new features.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

User Safety: safe

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*