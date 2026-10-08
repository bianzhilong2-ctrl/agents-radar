# OpenClaw Ecosystem Digest 2026-10-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-08 03:37 UTC

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

# OpenClaw Project Digest — 2026-10-08

## 1. Today's Overview
OpenClaw shows very high development activity with 500 issues and 500 PRs updated in the last 24 hours. 62 issues were closed and 144 PRs merged/closed, indicating steady throughput. One new pre-release (`v2026.10.1-beta.2`) shipped focusing on sessions and memory stability. The project is in active maintenance mode with significant attention to gateway stability, session management, and multi-platform support (Android, iOS, Windows, Linux).

## 2. Releases
**v2026.10.1-beta.2** — Sessions and memory improvements:
- Preserved usage across registry changes
- Delivered worker attachments from remote workspaces
- Prevented queued cancellations and transcript aliases from stalling active turns
- Kept continuation signatures aligned
- Migrated embedding caches

*No breaking changes noted in beta; migration notes not provided.*

## 3. Project Progress
**Merged/Closed PRs today:**
- **Gateway stability:** Fixed diagnostics hiding startup failures (#166946), gateway start reporting success before ready (#166942), Tailscale startup prerequisites (#166947)
- **Agent fixes:** Claude-cli transcript race condition (#166009), subagent results dropped (#165987), Astra answer lost with async tools (#166876)
- **Android:** Simplified shared phone/Wear internals (#166944)
- **Performance:** Moved OAuth recovery off Gateway thread (#166936), iOS skipped unchanged chat bubbles (#137462)
- **Features:** Worker placement requirement (#158903), audit runtime skill usage (#141004), Skill Workshop self-learning loop (#161057)
- **Cleanup:** Two batches of low-value test removal (#166939, #166818)

## 4. Community Hot Topics
| Issue | Comments | Topic |
|-------|----------|-------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 26 | Per-agent cost budget enforcement at gateway |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 19 | Dreaming deep phase never promotes (recall eviction) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 18 | Zombie process accumulation from hook/tool leaks |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | 18 | Doctor regression blocking legacy workspace migration |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | 16 | CLI-backed subagent runs tool-free, fabricates calls |

**Underlying needs:** Users want cost control, memory/state integrity, and reliable subagent communication.

## 5. Bugs & Stability (Ranked by Severity)

**P0 — Critical:**
- [#160548](https://github.com/openclaw/openclaw/issues/160548) — prepared-model-catalog worker leaks ~1 GiB/5min
- [#158592](https://github.com/openclaw/openclaw/issues/158592) — prepared model runtime publication timeout after sleep/wake
- [#157255](https://github.com/openclaw/openclaw/issues/157255) — turn claim not released after lane timeout (session wedge 90+ min)
- [#138042](https://github.com/openclaw/openclaw/issues/138042) — gateway control requests stall minutes

**P1 — High:**
- [#165686](https://github.com/openclaw/openclaw/issues/165686) — sustained high CPU on Windows after 2026.9.8 upgrade
- [#157605](https://github.com/openclaw/openclaw/issues/157605) — 240-276% CPU after v2026.9.6 (stuck sessions.list)
- [#136311](https://github.com/openclaw/openclaw/issues/136311) — reindex lock never released, 19 GB orphaned temp DBs
- [#137729](https://github.com/openclaw/openclaw/issues/137729) — unguarded `.trim()` crashes on undefined fields
- [#160485](https://github.com/openclaw/openclaw/issues/160485) — plugin load CPU-bound (57s from 3 channel plugins)

*Fix PRs exist for several: #166009, #165987, #166876, #166941*

## 6. Feature Requests & Roadmap Signals
- **Per-agent cost budgets** (#42475, 26 comments) — likely for next gateway release
- **SQLite transcript seams** (#79902) — companion app integration signal
- **Headless browser** (#53763) — requested for reliable web access
- **Dream Diary language config** (#79223) — i18n demand
- **Per-agent visibility scoping** (#59149) — multi-agent security needs
- **Skill Workshop self-learning** (#161057 PR) — active development

## 7. User Feedback Summary
**Pain points:**
- Update failures on Windows/npm (#156112, #157812, #157818)
- Gateway startup delays (220s on Windows, #159499)
- Session state loss after sleep/wake (#140010, #158592)
- Memory leaks and CPU spikes degrading long-running deployments
- Subagent completion delivery issues (#90840, #159612)
- Multi-platform instability (Android Talk drops #138272, iOS UI issues)

**Positive signals:** Active community contribution, detailed bug reports with repro steps, maintainer responsiveness on PR reviews.

## 8. Backlog Watch
**Long-unanswered important items needing maintainer attention:**
- [#42475](https://github.com/openclaw/openclaw/issues/42475) — Per-agent cost budgets (created 2026-03, 26 comments)
- [#79902](https://github.com/openclaw/openclaw/issues/79902) — SQLite transcript seams (created 2026-05, 15 comments)
- [#53763](https://github.com/openclaw/openclaw/issues/53763) — Built-in headless browser (created 2026-03, 12 comments)
- [#73537](https://github.com/openclaw/openclaw/issues/73537) — Production-readiness stability label (created 2026-04, 9 comments)
- [#84853](https://github.com/openclaw/openclaw/pull/84853) — Drop throttled exec update events (opened 2026-05, no merge)
- [#141004](https://github.com/openclaw/openclaw/pull/141004) — Audit runtime skill usage (opened 2026-09, needs proof)

*Recommendations: Prioritize cost budget enforcement (#42475) and SQLite transcript seams (#79902) — both have high community engagement and clear use cases.*

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report: AI Agent & Personal Assistant Ecosystem
**Date:** 2026-10-08
**Scope:** Open-source personal AI agent projects (digest-based analysis)

## 1. Ecosystem Overview
The current landscape is dominated by a closely related "Claw" derivative lineage (OpenClaw, ZeroClaw, PicoClaw, NullClaw, IronClaw, NanoClaw, TinyClaw, ZeptoClaw), suggesting shared architectural origins or a common open-source fork pattern. Activity is heavily concentrated in three "Tier 1" projects—OpenClaw, ZeroClaw, and Hermes Agent—which collectively account for the vast majority of community throughput. While OpenClaw operates as a large-scale, multi-platform generalist, ZeroClaw and Hermes focus on security hardening and infrastructure integrity. A significant portion of the registry (including CoPaw, Moltis, and several "Claw" variants) currently reports no detectable activity, indicating a "winner-takes-most" dynamic in developer attention.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated/Merged (24h) | Release Status | Health Score (1-5) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 updated / 144 merged | `v2026.10.1-beta.2` Shipped | **4.5** (High Momentum / Scaling Risk) |
| **Hermes Agent** | 50 | 50 updated / 27 merged/closed | None | **4.0** (High Velocity) |
| **ZeroClaw** | 46 | 50 updated / 2 closed | None (v0.9.0 current) | **4.0** (Security-Focused) |
| **NullClaw** | 0 (0 active) | 1 PR (Open) | None | **3.0** (Stable / Low Throughput) |
| **PicoClaw** | 2 (Open) | 6 PRs (All Stale) | None | **2.0** (Maintenance Mode) |
| **NanoBot / NanoClaw** | N/A | N/A | N/A | **1.0** (No Data) |
| **IronClaw / LobsterAI** | N/A | N/A | N/A | **1.0** (No Data) |
| **TinyClaw / Moltis** | 0 | 0 | N/A | **1.0** (Dormant) |
| **ZeptoClaw** | 0 | 0 | N/A | **1.0** (Dormant) |
| **CoPaw** | N/A | N/A | N/A | **1.0** (Digest Failed) |

*Health Score synthesizes activity volume, merge velocity, and stability signals from daily digests.*

## 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw demonstrates throughput an order of magnitude higher than its nearest peers (500 issue/PR updates vs. ~50 for ZeroClaw/Hermes). It is the only project with a defined multi-platform native footprint (Android, iOS, Windows, Linux) and a consistent release cadence, even if currently on beta. Its community engagement is deeper, evidenced by 62 issues closed and 144 PRs merged in 24 hours, compared to ZeroClaw's zero merges and PicoClaw's stale PRs.

**Technical Approach:** Unlike ZeroClaw's security-first Rust sandboxing or NullClaw's minimalist concurrency focus, OpenClaw pursues a gateway-centric, worker-separated architecture. It prioritizes session management, memory stability, and cost enforcement at scale, treating infrastructure reliability as the primary bottleneck rather than security isolation.

**Community Size:** By volume alone, OpenClaw is the ecosystem leader. However, its P0 bug count (4 critical, including memory leaks and session wedges) indicates its community is also the most burdened by complex scaling issues, whereas ZeroClaw's community is more focused on correctness and isolation.

## 4. Shared Technical Focus Areas
Requirements emerging across multiple projects indicate where the ecosystem is converging:

*   **Gateway Stability & Concurrency:** Critical across **OpenClaw** (gateway stalls, worker leaks), **NullClaw** (gateway accept-loop deadlock), and **ZeroClaw** (inbound bus saturation). All three are addressing single-threaded bottlenecks under load.
*   **Cost & Resource Control:** **

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



Here is the structured project digest for the **Hermes Agent** repository (`github.com/nousresearch/hermes-agent`) for **2026-10-08**.

---

### 1. Today's Overview
The Hermes Agent project exhibits very high development velocity and community engagement today, with 50 issues updated (38 open/active, 12 closed) and 50 pull requests updated (23 open, 27 merged/closed) in the last 24 hours. The focus of today's activity is heavily tilted toward security hardening, critical bug fixes (particularly around authentication flows, database integrity, and platform-specific update failures), and CLI/desktop documentation alignment. No new software releases were published today, but the volume

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑10‑08**  
*Generated from GitHub activity (issues/PRs updated in the last 24 h)*  

---  

### 1. Today’s Overview  
The repository showed modest activity in the past day: **2 open issues** and **6 open pull requests** were updated, all marked *[stale]* and none were closed or merged. No new releases were published. This indicates ongoing discussion and development work, but no completed changes have been integrated into the main branch today. Overall project health remains steady, with contributors focusing on UI/UX improvements, reliability fixes, and auxiliary feature work.  

---  

### 2. Releases  
*No new releases were tagged today.*  

---  

### 3. Project Progress  
| Type | Count | Notes |
|------|-------|-------|
| Merged PRs | 0 | No PRs were merged today. |
| Closed PRs | 0 | No PRs were closed. |
| Closed Issues | 0 | No issues were closed. |

*Because nothing was merged, no functional advances or bug fixes landed in the codebase on 2026‑10‑08.*  

---  

### 4. Community Hot Topics  
All items have the same comment count (2) and zero reactions, so we highlight the two issues that have sparked the most discussion and are directly linked to open PRs:

| Item | Link | Comments | Why it’s hot |
|------|------|----------|--------------|
| **Issue #3409** – *Scheduling primitive used as a wait mechanism for background subagents triggers an unwanted autonomous‑loop tick* | <https://github.com/sipeed/picoclaw/issues/3409> | 2 | Describes a CPU‑spinning loop when agents use `ScheduleWakeup` merely as a poll‑wait for subagent completion. |
| **Issue #3408** – *Web UI: messages sent while the agent is busy are queued invisibly and dropped silently when the queue is full* | <https://github.com/sipeed/picoclaw/issues/3408> | 2 | Highlights a lack of feedback when the steering queue overflows, causing messages to disappear. |

Both issues have accompanying PRs that aim to resolve them (see **Bugs & Stability** below), indicating active community concern about agent responsiveness and UI transparency.  

---  

### 5. Bugs & Stability  
| Severity | Item | Description | Associated Fix PR (if any) |
|----------|------|-------------|----------------------------|
| **High** | #3409 – Scheduling primitive misuse → autonomous loop | Agents calling `ScheduleWakeup` with a short delay as a pure wait mechanism cause a tight loop that wastes CPU and can stall other turns. | *No dedicated fix PR yet*; the issue suggests replacing the wait with a proper completion‑signal mechanism. |
| **High** | #3408 – Web UI queue invisibility & silent drop | When the agent is busy, incoming messages are queued but not shown; if the queue (`MaxQueueSize=10`) fills, messages are dropped without any UI indication. | **PR #3410** – *fix(pico/web): surface steering queue state* (adds acknowledgements and queue‑full signals). |
| **Medium** | – (implicit) Failed turns silent | Turns that error without a reply leave the user with no feedback. | **PR #3412** – *fix(agent): make a failed turn visible* (ensures error notices are surfaced). |
| **Low** | #3378 – Auth scope hard‑coded in refresh token | `RefreshAccessToken` always sends `"openid profile email"`, ignoring provider‑specific scopes. | **PR #3378** – *fix(auth): use configured scopes* (already open, awaiting review). |

*The two high‑severity bugs directly affect core agent loop efficiency and user‑visible messaging reliability; both have PRs queued to address them.*  

---  

### 6. Feature Requests & Roadmap Signals  
| PR | Area | What it adds / improves | Likelihood for next release |
|----|------|------------------------|-----------------------------|
| **#3413** | Web UI – Session handling | Global multi‑channel session sidebar (lists sessions across *all* channels, not just `pico`). | High – builds on #3406 and addresses a frequently requested navigation improvement. |
| **#3411** | Web UI – Working indicator | Replaces static “thinking” phrases with a state‑driven indicator (dots + shimmer bar reflect real agent state). | High – directly tied to #3406; improves perceived responsiveness. |
| **#3410** | Web UI – Queue visibility | Exposes steering‑queue state so users see when messages are queued or dropped. | High – resolves #3408; already paired with the issue. |
| **#3412** | Agent error handling | Makes failed turns visible to the user (error notice propagation). | Medium – addresses a silent‑failure UX gap. |
| **#3378** | Auth / OAuth | Uses provider‑configured scopes during token refresh instead of a hard‑coded set. | Medium – important for correctness with external IdPs; low risk. |
| **#3222** | DeltaChat integration | Refactoring & cleanup (‑200 LOC), drops legacy fallbacks, updates docs, secrets handling. | Low‑Medium – large refactor; may target a later maintenance release unless blockers arise. |

Collectively, these PRs signal a roadmap focused on **UI transparency**, **session management**, and **robust error/auth handling**—areas where users have reported friction.  

---  

### 7. User Feedback Summary  
*Pain points voiced in the open issues:*  

1. **CPU‑wasting loop** – Users running background subagents report the agent “spins” and consumes excessive resources when using a sleep‑style wake‑up as a wait mechanism.  
2. **Invisible messaging** – In the Web UI, messages typed while the agent is processing disappear from the chat view; if the internal queue fills, they are silently dropped, leaving users uncertain whether their input was received.  
3. **Opaque failure states** – When a turn crashes, the UI shows nothing, making debugging difficult.  
4. **Auth scope rigidity** – Users integrating with custom OAuth providers notice that their requested scopes are ignored during token refresh, leading to permission errors.  

The associated PRs (#3410, #3412, #3378) directly address points 2, 3, and 4, while #3409 awaits a concrete solution (likely replacing the wait‑loop with a proper event/completion signal). Overall, feedback indicates a strong desire for **more predictable, observable agent behavior** and **better UI feedback loops**.  

---  

### 8. Backlog Watch  
Long‑running or stale items that may need maintainer attention:  

| Item | Age (as of 2026‑10‑08) | Type | Why it matters |
|------|-----------------------|------|----------------|
| **PR #3222** – *refactor(deltachat): cleanup implementation, documentation -200LOC* | ~3 months (opened 2026‑07‑03) | Refactor | Large code‑health improvement; removes legacy fallbacks and centralises secret handling. |
| **PR #3378** – *fix(auth): use configured scopes instead of hardcoded default in RefreshAccessToken* | ~4 weeks (opened 2026‑09‑12) | Bug fix | Prevents auth scope mismatches; impacts all OAuth‑enabled deployments. |
| **Issue #3409** – Scheduling primitive wait‑loop | ~1 week (opened 2026‑09‑29) | Bug / performance | Core agent loop efficiency; if unaddressed could degrade throughput in heavy subagent workflows. |
| **Issue #3408** – Web UI queue invisibility | ~1 week (opened 2026‑09‑29) | UX bug | Directly affects user trust in the UI; paired with PR #3410 awaiting review. |

Maintainers should prioritize reviewing **PR #3410** and **PR #3412** (they resolve the two high‑visibility UI bugs) and consider providing guidance or a provisional fix for **#3409** to eliminate the autonomous‑loop tick. The larger refactor **#3222** and auth fix **#3378** are valuable but lower‑risk; they can be scheduled for the next maintenance window.  

---  

*End of digest.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest – 2026-10-08

## 1. Today's Overview
The NullClaw project remains stable with no new releases published today. Activity is concentrated on a single pull request that addresses a critical concurrency issue in the gateway component. There are zero open or active issues, and no merges have been completed in the last 24 hours. The sole PR (#1047) focuses on preventing a deadlock scenario in the single‑threaded gateway accept loop, ensuring the system can handle saturated inbound queues without blocking indefinitely.

## 2. Releases
No new versions have been released as of 2026‑10‑08. The project continues to operate under its existing release cycle, with any future updates pending resolution of the outstanding gateway fix.

## 3. Project Progress
- **PR #1047 (Open)** – Addadi submitted a fix titled *"fix(gateway): bound inbound bus publish instead of blocking the accept loop"* on 2026‑10‑07.  
  - **Summary:** The original implementation used an unbounded `Bus.publishInbound` inside the single‑threaded gateway accept loop, which would block forever on `not_full.wait` when the inbound queue reaches capacity (100 messages). Under heavy load, agents finishing long synchronous turns could cause the bus to fill up, leading to a permanent stall. The proposed change replaces the unbounded publish with a bounded approach, allowing the system to gracefully handle full queues without deadlocking.  
  - **Link:** [nullclaw/nullclaw PR #1047](https://github.com/nullclaw/nullclaw/pr/1047)

## 4. Community Hot Topics
The only notable discussion point stems from PR #1047. The issue centers on **gateway concurrency safety**—specifically, how the accept loop interacts with the inbound bus under high‑throughput conditions. While no other issues have gained traction, the PR represents the primary area of community interest and technical focus for the coming days.

## 5. Bugs & Stability
| Severity | Issue | Impact | Status |
|----------|-------|--------|--------|
| **High** | Unbounded `Bus.publishInbound` in gateway accept loop causes indefinite blocking (`not_full.wait`) when the inbound queue is full (capacity 100). | Critical – can lead to complete service unavailability during peak loads. | **In progress** – PR #1047 aims to fix this by bounding the publish operation. |

No other bugs or regressions were reported in the last 24 hours. The absence of open issues suggests the codebase is otherwise stable, though the gateway fix is the key stability improvement for the near term.

## 6. Feature Requests & Roadmap Signals
At present, there are no explicit feature requests or roadmap signals beyond the gateway stability fix. The priority for the upcoming release cycle will likely be the resolution of PR #1047, followed by broader performance and reliability enhancements once the critical path is cleared. No new feature proposals appear in the latest activity feed.

## 7. User Feedback Summary
Direct user feedback is limited given the minimal activity window. However, the implicit need highlighted by PR #1047 is **reliability under load**: users operating at high throughput must ensure their agents do not experience silent failures due to blocked event processing. The fix directly addresses a class of production‑grade incidents where saturated buses caused cascading stalls. Users who rely on real‑time coordination between agents and external services will benefit from this change, as it guarantees the gateway can continue processing messages even when the inbound buffer is full.

## 8. Backlog Watch
- **PR #1047** – Currently the only open PR. Its completion is essential before the next scheduled release. The fix is well‑scoped and targets a fundamental concurrency flaw. Monitoring its merge status will indicate overall project momentum.

No other long‑standing issues or PRs require immediate attention. All open concerns are being addressed through this single, high‑impact fix.

--- 

*Generated on 2026‑10‑08 based on GitHub activity for nullclaw/nullclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

User Safety: safe

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

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-10-08

---

## 1. Today's Overview

ZeroClaw is experiencing high activity, with 46 issues and 50 pull requests updated in the last 24 hours. The project maintains a healthy ratio of open-to-closed work (45 of 46 issues open; 47 of 50 PRs open), indicating steady ongoing maintenance rather than a crisis. No new releases were published today. Contribution is concentrated among a small set of active developers—Audacity88, IftekharUddin, GaijinSystems, and maacruz account for the majority of recent issue filings and PRs—suggesting a tightly coordinated, security-focused development cycle.

---

## 2. Releases

No new releases were published in the last 24 hours. The most recent tagged releases referenced in issue metadata are v0.8.6 and v0.9.0, but no new binaries or crates are available today.

---

## 3. Project Progress

Two pull requests were closed today:

- **#11192** — `test(runtime): isolate payload capture tests by trace id` ([CLOSED]). This fixes a flaky test (#11180) where `llm_request_payload_off_still_carries_prefix_fingerprints` read another test's record under the parallel runtime gate. The fix replaces a hard-coded `turn_id` literal with proper trace-id isolation. ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11192))
- **#11232** — `fix(plugins): open admitted payloads from the retained package root` ([CLOSED]). This hardens plugin payload admission on Unix by resolving components through a directory handle (`O_DIRECTORY | O_NOFOLLOW | O_CLOEXEC`) instead of a pathname, closing a concurrent-ancestor-replacement race. It is a follow-up to #9134 and addresses the remaining race report from that PR's discussion. ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/11232))

No PRs were merged today. Several large, stacked PRs remain open and under review (see Backlog Watch).

---

## 4. Community Hot Topics

### Most Commented Issues

| Issue | Comments | Title | Link |
|-------|----------|-------|------|
| #8692 | 15 | Maintainer decision queue for RFCs and design issues | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #8424 | 13 | RFC: Workspace-relative forbidden path patterns and optional .zeroclawignore | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) |
| #11055 | 7 | Standalone channel start SOP turns lack live channel tool handles | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) |
| #11420 | 5 | SQLite session backend rewrites created_at of every message on each turn | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) |
| #9549 | 4 | Guide local model selection with llmfit and ZeroClaw setup documentation | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) |
| #11554 | 4 | Earlier path-marker images are re-sent on every later turn | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) |
| #11166 | 4 | Evict images in batches when the per-request image cap is exceeded | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) |

### Analysis of Underlying Needs

- **#8692** (15 comments) is the most active thread. It is a meta-tracker aggregating RFCs, design issues, and release-policy questions needing maintainer or code-owner attention. The comment volume reflects the community's need for a single, visible decision queue—maintainers are actively engaging but have not yet finalized decisions on several stacked items.
- **#8424** (13 comments) is an RFC requesting workspace-relative forbidden path patterns and an optional `.zeroclawignore` file. The high comment count signals strong community demand: users want to protect sensitive workspace-internal files (`.env`, `config.yaml`, `rust-toolchain.toml`) from AI agent access, going beyond the current `forbidden_paths` mechanism which only blocks paths *outside* the workspace.
- **#11055** (7 comments) identifies a real usability gap: channel-addressed tools are unusable outside two specific entry points in a daemon deployment. Users running standalone channels (cron, daemon) cannot access channel-specific tools, which is a significant operational blocker for headless deployments.
- **#11554** and **#11166** both address image-handling correctness and efficiency in multi-turn conversations—a recurring pain point for users running long sessions with vision-capable models through channels like Signal, Telegram, and Discord.

---

## 5. Bugs & Stability

Bugs reported or updated today, ranked by severity:

### Critical / High Severity (S0–S1, risk:high)

| Issue | Severity | Title | Link |
|-------|----------|-------|------|
| #11540 | S0 — data loss / security risk | bubblewrap sandbox isn't detected on linux falling back to application-layer | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) |
| #11539 | S1 — workflow blocked | Firejail sandbox fails with `Error: invalid --nowheel command line option` | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11539) |
| #11538 | S1 — workflow blocked | Firejail sandbox fails with `Error: invalid private directory` | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11538) |
| #11594 | S2 — degraded behavior | firejail_args is advertised and reported but never applied to the firejail invocation | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) |
| #11579 | S1 — workflow blocked | save_dirty stamps schema_version = 3 on an unmigrated V1/V2 config, so the next load skips migration and the agent disappears | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) |
| #11585 | S2 — degraded behavior | A tripped cost limit can only be cleared by a daemon restart; cost.allow_override is never read | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11585) |
| #11606 | S2 — degraded behavior | model_routing_config upsert_agent rewrites entire config: fabricates risk/runtime profiles, drops fields, resets agent limits | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) |

**Note on sandbox bugs (#11538, #11539, #11540, #11594):** All four were filed by the same user (`maacruz` / `tunglambk`) within a 3-day window (Oct 5–7). They describe a cluster of sandbox backend failures on Linux—bubblewrap detection silently falls back to application-layer, and firejail rejects its own generated arguments. No fix PRs exist yet for any of these, but they are tagged `status:accepted`, indicating maintainers acknowledge them. The related PR #7821 (canonical sandbox_policy schema) may address some root causes once merged.

### Moderate Severity (S2, degraded behavior)

| Issue | Title | Link |
|-------|-------|------|
| #11420 | SQLite session backend rewrites created_at of every message on each turn, so per-message times are lost | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) |
| #11554 | Earlier path-marker images are re-sent on every later turn, so the model describes phantom "new" images | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) |
| #11517 | Web chat: reloading mid-turn drops the user's prompt (screen and localStorage) because hydration replaces local state with a snapshot that predates the running turn | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11517) |
| #10950 | cost.warn_at_percent warnings are ignored by the runtime | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) |
| #11552 | The tool egress ceremony ignores websocket_client and socket_client declarations | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11552) |
| #11562 | Discovery can pair one generation's manifest with another's component during plugin update | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11562) |

### Low Severity (S3, minor)

| Issue | Title | Link |
|-------|-------|------|
| #11586 | ZeroCode sidebar turns failed sessions green after the daemon restarts | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11586) |
| #11360 | The package lock file is readable by other local accounts, which can hold it and make install and remove fail | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11360) |

---

## 6. Feature Requests & Roadmap Signals

### Active RFCs and Enhancements

| Issue/PR | Type | Title | Link |
|----------|------|-------|------|
| #8424 | RFC | Workspace-relative forbidden path patterns and optional .zeroclawignore | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) |
| #11254 | RFC | A2A protocol crate (zeroclaw-a2a) | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) |
| #11138 | Feature | Define caller tool-level approval in bounded delegation | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11138) |
| #11324 | Feature | Verify the daemon's identity in call_local and share one CLI daemon client | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11324) |
| #11325 | Feature | Verify the named-pipe server so CLI authorization edits apply live on Windows | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11325) |
| #9549 | Feature | Guide local model selection with llmfit and ZeroClaw setup documentation | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) |
| #11583 | Feature | Add Opper as a typed OpenAI-compatible provider | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11583) |
| #11166 | Feature | Evict images in batches when the per-request image cap is exceeded | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) |
| #11553 | Feature | Merge split inbound messages reliably (per-channel debounce and attachment-preserving batches) | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/11553) |

### Predicted Next-Version Candidates

- **`.zeroclawignore` / workspace-relative forbidden paths (#8424):** High community demand, RFC already accepted. Likely to land in the next minor release.
- **Opper provider (#11583):** Straightforward addition to the OpenAI-compatible provider slot; could ship quickly if the author addresses review comments.
- **A2A protocol crate (#11254):** This is an architectural RFC with cross-cutting implications. It is more likely a v0.9.x or later feature.
- **Plugin update with verified replacement (#11261, #11262):** These are stacked, XL-sized PRs with `do-not-merge` tags. They will likely land together once the underlying plugin install/recovery PRs (#11236, #11581) merge.

---

## 7. User Feedback Summary

### Recurring Pain Points

1. **Sandbox backend failures on Linux.** Four separate issues (#11538, #11539, #11540, #11594) filed within days describe bubblewrap not being detected and firejail rejecting its own arguments. This is the most acute user-reported problem today—it blocks shell tool usage entirely when sandboxing is enabled.

2. **Configuration fragility.** Multiple issues (#11579, #1

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*