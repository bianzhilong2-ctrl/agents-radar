# OpenClaw Ecosystem Digest 2026-10-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-15 02:24 UTC

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



# OpenClaw Project Digest — 2026-10-15

---

## 1. Today's Overview

OpenClaw shows high issue and PR activity (500 each in the last 24h), but **no new releases** were cut. The project is in a **stabilization-heavy phase**: the majority of open issues are P0/P1 regressions tied to the 2026.9.x and 2026.10.x release trains — particularly SQLite WAL growth, gateway startup blocks, and plugin-capture disk exhaustion. On the PR side, a large wave of UI refactoring (Solid migration) alongside targeted channel and CI fixes suggests the team is simultaneously paying down technical debt and shipping fixes. Overall health is **cautiously optimistic** but the volume of unresolved P0s warrants attention.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

350 PRs open, 150 merged/closed today. Key movements:

**Bug Fixes (merged/closed or active fix PRs):**
- **#172733** — `fix(triage)`: reject FIFO update artifacts without blocking recovery *(Leon-SK668)*
- **#131347** — `fix(telegram)`: cap rich message media at 20 *(aspalagin, closes #129004)*
- **#172701** — `fix`: code examples stall streamed replies with repeated sanitization *(steipete, fixes #172663)*
- **#158844** — `fix(ui)`: show pending cron action instead of generic "Saving…" *(carlosjarenom, closes #147801)*
- **#172707** — `fix`: chat images intermittently fail to load during replies *(steipete)*
- **#169684** — `fix`: Cron repair shows false empty-response error in WebChat *(huyengiang101086-spec, related #169614)*
- **#97646** — `fix(session)`: defer `flushPendingToolResults` by one event-loop tick *(xydt-tanshanshan, fixes #84134)*
- **#104114** — `fix(agents)`: prioritize `skill-creator` over direct `skill_workshop` calls *(xianshishan, fixes #104104)*
- **#117906** — `fix(feishu)`: preserve self mentions in agent-facing group messages *(clawsweeper, fixes #72504)*
- **#161997** — `fix(channels)`: `ingress claimNext` starves other conversations when one blocked lane fills scan window *(YangManBOBO)*
- **#94871** — `fix(gateway)`: replace blocking sync I/O with async in auth/credential paths *(mazhuima, fixes #78805)*
- **#98259** — `fix(openai)`: enable prompt cache keys for Azure *(BSG2000)*
- **#172728** — `fix(ci)`: `check-dependencies` fails on unused exports left by recent refactors *(RomneyDa)*
- **#172718** — `test`: remove low-value tests (batch d087) *(steipete)*

**UI Refactoring (Solid migration — major push):**
- **#171741** — `refactor(ui)`: remove redundant MCP and update view bridges *(steipete)*
- **#171827** — `refactor(ui)`: port chat metadata rendering to Solid *(steipete)*
- **#171882** — `refactor`: unify setup wizard controls in Solid *(steipete)*
- **#171554** — `refactor(ui)`: finish native shell rendering *(steipete)*
- **#171981** — `fix(ui)`: align native UI consumers and browser fixtures *(steipete)*
- **#172729** — `fix(ui)`: keep model defaults available during initial loading *(steipete)*
- **#98544** — `fix(ui)`: bridge tool stream state to composer run status indicator *(ditingdapeng)*

**Features & Infrastructure:**
- **#171623** — `feat`: add Claws as ordinary agents and resources *(Patrick-Erichsen)*
- **#171600** — `feat`: show Claw contents and open new agent chat after Add *(Patrick-Erichsen)*
- **#172722** — `feat`: assess plugin SDK impact with public ClawHub usage *(Patrick-Erichsen)*
- **#93218** — `feat`: add session stream mode command *(clawSean, implements #74077)*
- **#172703** — `refactor(daemon)`: move runtime pins to a daemon-owned local store *(steipete)*
- **#172731** — `improve(ios)`: expose qualification setup timeout diagnostics *(joshavant)*
- **#172730

---

## Cross-Ecosystem Comparison

User Safety: safe

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-10-15

## 1. Today's Overview
NanoBot shows moderate activity over the past 24 hours with **35 pull requests** (15 open, 20 closed/merged) but **no new releases**. The codebase is focused on performance optimization, session management stability, and expanding provider/tool support. The most pressing technical debt centers on idle‑compaction interactions with direct‑entry turns, which have been the subject of multiple open and closed issues. Overall project health appears stable, with several critical fixes already merged and ongoing work on long‑term architectural improvements.

## 2. Releases
No new releases were published in the current period. The latest activity consists solely of pull requests and issue updates.

## 3. Project Progress
- **Performance Optimizations**: PR #6224 moves prompt and request preparation out of the event loop; PR #6220 estimates missing token usage synchronously; PR #6218 skips unnecessary transcript snapshots—all aimed at reducing latency in high‑throughput scenarios.
- **Session Management**: PR #6215 addresses idle compaction excluding sessions in `_pending_queues`; PR #6211 improves turn reconciliation after reconnects; PR #6214/#6213 highlight the core idle‑compaction bug requiring further refinement.
- **Provider Integration**: PR #5875 adds the IO Intelligence (io.net) provider; PR #6168 integrates managed installs and in‑app updates.
- **State Management**: PR #5943 centralizes session state in SQLite, moving away from mutable JSONL caches.
- **WebUI Enhancements**: PR #6195 introduces a read‑only Google Drive tool; PR #6216 expands MCP service presets by 118 new configurations; PR #6208 streams bounded file diff previews for better UX.

## 4. Community Hot Topics
| Topic | Description | Link |
|-------|-------------|------|
| **Idle Compaction & Session Lifecycle** | Multiple issues (#6214, #6213, #6215) report that idle compaction can archive a running session via `process_direct`, risking loss of active turn summaries. | [#6214](https://github.com/HKUDS/nanobot/issues/6214) |
| **Event Loop Performance** | PRs #6224, #6220, #6218 target slow prompt reading and transcript handling to keep the gateway responsive. | [#6224](https://github.com/HKUDS/nanobot/pull/6224) |
| **Provider Ecosystem** | #5875 adds IO Intelligence; #6210 preserves Kimi K3 reasoning effort; #6168 enables managed installs. | [#5875](https://github.com/HKUDS/nanobot/pull/5875) |
| **WebUI Improvements** | #6195 (Google Drive tool), #6216 (MCP presets), #6208 (diff previews) are actively discussed. | [#6195](https://github.com/HKUDS/nanobot/pull/6195) |

These topics reflect the highest engagement areas, with idle‑compaction being the most urgent technical concern.

## 5. Bugs & Stability
| Severity | Issue / PR | Impact | Status |
|----------|------------|--------|--------|
| **High** | #6214 (IDLE COMPACTION) | Idle compaction may archive a running session via `process_direct`, causing lost turn summaries. | Open |
| **Medium** | #6213 (Duplicate of #6214) | Same root cause as #6214; resolved in PR #6215 but may recur. | Closed |
| **Medium** | #6222 | Shell path resolution fails when `~unknown` is encountered under workspace restrictions. | Closed |
| **Low** | #6217 | Skill discovery repeated unnecessarily; addressed in PR #6215. | Closed |
| **Open** | #6210 | Kimi K3 reasoning‑effort handling needed preservation of low/high/max labels. | Closed |
| **Closed** | #6215 | Fixes idle compaction exclusion for direct turns. | Closed |

The most critical outstanding issue is **#6214**, which remains open and directly affects session integrity. Several related PRs (#6215, #6211) have attempted mitigations, but the core logic in `_pending_queues` and `process_direct` requires deeper review.

## 6. Feature Requests & Roadmap Signals
- **Expanded MCP Presets** – PR #6216 adds 118 new presets, indicating a roadmap toward richer external service connectivity.
- **SQLite Session State** – PR #5943 centralizes state ownership, suggesting future migrations away from in‑memory JSONL caches.
- **Google Drive Tool** – PR #6195 provides read‑only access to shared drives, a common enterprise requirement.
- **File Diff Streaming** – PR #6208 yields incremental diffs rather than full copies, improving WebUI responsiveness for large edits.
- **Provider Diversity** – #5875 (IO Intelligence) and #6210 (Kimi K3) demonstrate a push toward broader ecosystem integration.

These signals point to a trajectory of **long‑term stability** (session state, provider diversity) and **enhanced usability** (better tooling, faster feedback loops).

## 7. User Feedback Summary
Users have expressed frustration with **session archival timing** during direct turns, leading to potential loss of active turn summaries—a core pain point highlighted by multiple open/closed issues. Performance complaints center on **slow prompt initialization** and **transcript processing delays**, especially under heavy load. Positive feedback exists around the newly added **Google Drive tool** and **MCP preset expansion**, which reduce friction for power users. Overall sentiment leans positive regarding recent feature additions, but the idle‑compaction bug remains a blocker for confidence in production deployments.

## 8. Backlog Watch
- **[#6214](https://github.com/HKUDS/nanobot/issues/6214)** – Idle compaction incorrectly archives running sessions via `process_direct`. Requires thorough testing across different concurrency patterns.
- **[#6213](https://github.com/HKUDS/nanobot/issues/6213)** – Duplicate of #6214; monitor for recurrence after fixes.
- **[#6215](https://github.com/HKUDS/nanobot/pull/6215)** – Partial mitigation; ensure all direct‑turn paths respect `_pending_queues`.
- **[#6210](https://github.com/HKUDS/nanobot/issues/6210)** – Kimi K3 reasoning‑effort label preservation; verify against official docs.
- **[#6190](https://github.com/HKUDS/nanobot/pull/6190)** – Media gallery component duplication; consider separate examples for each source type.
- **[#5943](https://github.com/HKUDS/nanobot/pull/5943)** – SQLite migration progress; watch for backward‑compatibility impacts.

**Priority**: Address #6214 immediately to prevent data loss; follow up on session‑state centralization and provider integrations in the next sprint.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest (2026-10-15)  
*Generated: 2026-10-15T00:00:00Z*

---

## 1. Today's Overview  
Hermes Agent exhibited **high activity** in the last 24 hours, with 50 issues and 50 PRs updated. All PRs remain open (0 merged), reflecting a focus on stabilization and pre-release validation. Two new versions (v0.22.0 and v0.22.1) were launched, positioning the project as **feature-rich but stable**. The open PRs suggest ongoing fixes and minor enhancements, with no critical regressions reported. Community engagement centers around installation issues, session management, and platform compatibility.  

---

## 2. Releases  
### v0.22.1 (2026-10-14)  
- **Type:** Patch release  
- **Purpose:** Fixes for Windows Store, plugin updates, and minor regressions.  
- **Migration Notes:** Users should update to resolve Windows Store-related issues and ensure plugin compatibility.  

### v0.22.0 — *The Threshold Release* (2026-10-13)  
- **Scope:** ~24,200 commits, 6,080 merged PRs, and 7,180 issues closed since v0.21.0.  
- **Key Features:**  
  - Unified gateway runtime (tracked by Issue #134889).  
  - Expanded plugin and session management capabilities.  
- **Breaking Changes:** Potential impact on workflows relying on legacy gateway behaviors; see Issue #134889 for details.  

---

## 3. Project Progress  
- **Merged PRs:** None in the last 24 hours (50 open PRs; 0 merged).  
- **Features/Advances:**  
  - PR #137951 addresses Windows sandbox PATH issues (P1).  
  - PR #138723 introduces advanced kanban worker termination (P3).  
  - PR #137507 adds config keys for white-label branding (P3).  
- **Notable Fixes:**  
  - PR #138669 restores group-member turn execution in hosted rooms (P2).  
  - PR #129456 fixes default install metadata probes (P3).  

---

## 4. Community Hot Topics  
### Top Issues/PRs (by comments/activity)  
1. **Issue #134889** (14 comments):  
   - Tracks post-merge fixes for the unified gateway runtime.  
   - [Link](https://github.com/NousResearch/hermes-agent/issues/134889)  
   - *Need:* Finalize gateway-session ownership and stability.  

2. **Issue #129455** (12 comments):  
   - Test suite failures on default installs due to PM activation.  
   - [Link](https://github.com/NousResearch/hermes-agent/issues/129455)  
   - *Need:* Robust handling of partial clones and manifest probes.  

3. **PR #138749** (0 comments):  
   - Implements `hermes doctor --turn` to validate model chat capability.  
   - [Link](https://github.com/NousResearch/hermes-agent/pull/138749)  
   - *Need:* Prevent false-positive model compatibility reporting.  

4. **PR #138734** (0 comments):  
   - Fixes test runner interference with live dashboards.  
   - [Link](https://github.com/NousResearch/hermes-agent/pull/138734)  
   - *Need:* Isolation between test environments and production services.  

---

## 5. Bugs & Stability  
- **High Priority (P1):**  
  - **Issue #105758** (Node.js CLI blocking): Post-merge lifecycle guard issues persist after PR #106742.  
  - PR #138669 addresses group-member turn execution in gateways.  

- **Medium Priority (P2):**  
  - **Issue #124022**: Windows updater fails due to proxy/SSL issues.  
  - **Issue #138660**: Telegram bot hangs pre-socket on restarts.  

- **Low Priority (P3):**  
  - **Issue #138669**: HUD mode renders dashboard instead of composer (PR #138751).  
  - **Issue #138220**: Docker venv out-of-sync after v0.22.0 (related PR #138616).  

---

## 6. Feature Requests & Roadmap Signals  
- **Top Requests:**  
  1. **Issue #52554**: Floating "Quote" button for desktop chat pane (PR #138751 implemented).  
  2. **Issue #134024**: Configurable max-width for chat messages (pending).  
  3. **Issue #30649**: Proton Pass AI Access Tokens (closed as planned in v0.22.0).  

- **Likely for v0.23:**  
  - Session-scoped artifact directories (Issue #120206).  
  - Dashboard resilience to browser disconnects (Issue #25738).  

---

## 7. User Feedback Summary  
- **Pain Points:**  
  - **Installation Failures**: Update channel timeouts (Issues #138404, #138702).  
  - **Session Instability**: Crashes after Windows updates, Docker sync issues (Issues #138660, #138220).  
  - **Cross-Platform Gaps**: Android/Termux package breakage (PR #138739).  

- **Satisfaction Areas:**  
  - Dashboard and desktop app enhancements.  
  - Kanban dispatcher and session management improvements.  

---

## 8. Backlog Watch  
- **Long-Unanswered:**  
  - **Issue #30649** (Proton Pass support): Closed as "not planned" but community interest remains.  
  - **Issue #25738**: Dashboard session persistence post-disconnect (needs prioritization).  
- **Pending PRs with Impact:**  
  - PR #138752 (console command retirement fence integration).  
  - PR #138669 (group-member turn restoration in gateways).  

---  
*Data sourced from NousResearch/hermes-agent (2026-10-15 00:00 UTC)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-10-15

## 1. Today's Overview
PicoClaw (sipeed/picoclaw) shows **minimal activity** in the past 24 hours with **zero pull requests, zero merged changes, and zero new releases**. The sole update is Issue **#3417**, where community member **afjcjsbx** announces an **active fork** (github.com/afjcjsbx/picoclaw) citing the upstream repository as **apparently unmaintained**. This signal strongly suggests the original project is in **maintenance limbo**, with community-driven continuity now occurring outside the official Sipeed repository.

## 2. Releases
**No new releases** published today or in the recent period covered by the data.

## 3. Project Progress
**No merged or closed PRs** in the last 24 hours. No feature advancement or bug fixes landed upstream.

## 4. Community Hot Topics
| Item | Type | Activity | Link | Analysis |
|------|------|----------|------|----------|
| **#3417** | Issue (OPEN) | 1 comment, updated 2026-10-14 | [sipeed/picoclaw#3417](https://github.com/sipeed/picoclaw/issues/3417) | **High-signal community action**: User `afjcjsbx` declares the repo unmaintained and publishes an actively maintained fork. The underlying need is **project continuity** — users depend on PicoClaw but see no upstream movement. This is effectively a **soft handoff announcement**; watch for migration of contributors/issues to the fork. |

## 5. Bugs & Stability
**No new bug reports, crashes, or regressions** filed in the last 24 hours. Stability status cannot be assessed from today’s data; historical bug backlog remains opaque without maintainer triage.

## 6. Feature Requests & Roadmap Signals
**No new feature requests** today. The only roadmap signal is **external**: the fork maintainer (`afjcjsbx`) implicitly sets a roadmap of *“keep the project alive and moving forward”*. Expect the fork to prioritize:
- Merging stale upstream PRs
- Dependency updates
- Platform support fixes (likely for Sipeed hardware)
- Community-reported issues

## 7. User Feedback Summary
- **Pain point**: Perceived abandonment of upstream (`sipeed/picoclaw`).
- **Use case**: Continued reliance on PicoClaw for whatever its domain is (likely embedded/AI edge given Sipeed’s focus).
- **Sentiment**: Proactive but frustrated — a contributor stepped up to fork rather than wait.
- **Satisfaction**: Low with upstream maintenance; high hope placed in the fork.

## 8. Backlog Watch
| Item | Status | Age | Why It Matters |
|------|--------|-----|----------------|
| **#3417** (Active Fork notice) | OPEN | 9 days (created 2026-10-06) | **Critical governance signal**. No maintainer response from Sipeed. If upstream intends to resume, they should acknowledge/coordinate with the fork. If not, consider archiving or officially handing off. |
| *All other issues/PRs* | *Unknown* | *Unknown* | Data provided covers only the last 24h. A full backlog audit is needed to assess stale security issues, unmerged PRs, and hardware-support gaps. |

---

**Bottom line**: PicoClaw upstream is **dormant**; the project’s pulse has moved to **afjcjsbx/picoclaw**. Stakeholders (users, contributors, Sipeed) should engage with the fork for current development and support.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026‑10‑15**  

---

### 1. Today's Overview  
The repository shows **no new issues** and **no closed/open issues** in the last 24 h. Five pull requests were opened (all by *wray‑lee*) on 2026‑10‑14 and remain open; none have been merged or closed yet. No new releases were published. Overall activity is low in terms of issue triage, but the burst of PRs indicates active development on several feature fronts.

### 2. Releases  
*No new releases* were tagged or published today, so there are no version changes, breaking changes, or migration notes to report.

### 3. Project Progress (Merged/Closed PRs)  
**No PRs were merged or closed** today. The five open PRs represent work‑in‑progress features:

| PR | Title | Summary |
|----|-------|---------|
| [#1061](https://github.com/nullclaw/nullclaw/pull/1061) | feat(slack): show the task lifecycle as reactions | Adds Slack reactions that follow a task through its lifecycle. |
| [#1060](https://github.com/nullclaw/nullclaw/pull/1060) | fix(providers): route configured providers by explicit prefix | Improves provider/model routing so explicit `provider/model` references work beyond the primary provider and fallback list. |
| [#1059](https://github.com/nullclaw/nullclaw/pull/1059) | feat(config): add agent.reasoning_mode default | Introduces a configurable default for the `/reasoning` display mode (additive change, high risk per AGENTS.md). |
| [#1058](https://github.com/nullclaw/nullclaw/pull/1058) | feat(slack): stream outbound replies while they are generated | Enables streaming of Slack outbound messages as they are produced (2‑commit series). |
| [#1057](https://github.com/nullclaw/nullclaw/pull/1057) | feat(providers): support native tool calls while streaming | Adds support for native tool calls during streaming provider responses. |

These PRs collectively advance Slack integration, provider routing/configurability, and streaming capabilities.

### 4. Community Hot Topics  
All five PRs currently have **zero comments and zero reactions**, indicating limited community discussion or review so far. Consequently, there are no “hot” issues or PRs to highlight based on engagement metrics.

### 5. Bugs & Stability  
No bug reports, crashes, or regressions were filed today. Likewise, none of the open PRs are tagged as fixes for known stability issues.

### 6. Feature Requests & Roadmap Signals  
The open PRs themselves act as concrete feature requests that are already implemented in code and awaiting review. Based on their scope, the next version is likely to include:

* Slack task‑lifecycle reactions (#1061)  
* More flexible provider routing via explicit prefixes (#1060)  
* A configurable default reasoning mode for agents (#1059)  
* Real‑time streaming of Slack outbound replies (#1058)  
* Native tool‑call support while streaming from providers (#1057)  

If maintainers approve and merge these, they will shape the upcoming release roadmap toward richer Slack interactivity and more robust provider streaming.

### 7. User Feedback Summary  
No user comments, issue reports, or feedback entries appear in the last 24 h, so there is no direct pain‑point or satisfaction data to summarize at this time.

### 8. Backlog Watch  
All five PRs remain **open and awaiting review**. No issue has been left unanswered for an extended period (the issue list is empty), but the PRs represent the current backlog that maintainers should prioritize:

* Review and test the Slack reaction and streaming changes (#1061, #1058).  
* Verify the provider routing fix does not regress existing fallback logic (#1060).  
* Assess the config change for agent.reasoning_mode for backward compatibility (#1059).  
* Validate native tool‑call streaming implementation against provider contracts (#1057).  

Prompt attention to these PRs will reduce the backlog and move the features toward a releasable state.

---  

*Generated from GitHub data for NullClaw (github.com/nullclaw/nullclaw) as of 2026‑10‑15.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-10-15

---

## 1. Today's Overview

LobsterAI shipped a **major feature release (2026.10.13)** yesterday and followed up today with a **high-velocity PR sprint**: 11 PRs merged/closed and 1 still open in the last 24 hours. The merged work is heavily concentrated on the **Desktop Companion** (floating toolbar, capture, quick-input, task follow-up, TTS playback), **model selector UX**, **Windows/UTF-8 fixes**, **provider export security**, and **analytics event wiring**. No new issues were opened today, indicating the team is in a polishing/stabilization cycle post-release. Overall project health is **strong** — rapid iteration on desktop-agent workflows, zero open regressions reported, and a clear focus on cross-platform parity (macOS Computer Use, Windows UTF-8 defaults).

---

## 2. Releases

### LobsterAI 2026.10.13  *(published 2026-10-13)*
| Category | Details |
|----------|---------|
| **Highlights** | • **Office document editing** (Word/Excel/PowerPoint)<br>• **Computer Use** support for **macOS** (previously Windows-only)<br>• **Improved MCP tool management**<br>• Refreshed UI, smoother task flow, major **OpenClaw** stability/reliability gains |
| **Breaking Changes** | None explicitly called out in the truncated notes. |
| **Migration Notes** | • Existing MCP tool configs should auto-migrate; verify custom tool definitions after upgrade.<br>• macOS users: grant Accessibility + Screen Recording permissions for Computer Use.<br>• OpenClaw agents may need re-validation due to internal protocol hardening. |
| **Assets** | `netease-youdao/LobsterAI/releases/tag/2026.10.13` |

---

## 3. Project Progress (Merged/Closed PRs — 2026-10-14)

| PR | Area | Summary | Link |
|----|------|---------|------|
| **#2870** | renderer, docs, main, cowork | **Desktop Companion**: multi-screen capture + attachment piping; task-result bubble on floating orb (read/unread sync, pin, jump-to-session); selection-toolbar ordering & app-exclude settings; quick-panel model/expert/workdir/theme sync + voice-input hotkey (default `Alt/Option+Space`). | [#2870](https://github.com/netease-youdao/LobsterAI/pull/2870) |
| **#2869** | renderer | **Model Selector**: shows a cube icon + “自定义/Custom” badge for selected custom models; plan models keep vendor icons. | [#2869](https://github.com/netease-youdao/LobsterAI/pull/2869) |
| **#2868** | main, openclaw, cowork | **Windows/UTF-8**: forces child Python processes to UTF-8 by default (fixes garbled logs & tool output on non-UTF-8 locales). | [#2868](https://github.com/netease-youdao/LobsterAI/pull/2868) |
| **#2867** | docs, skills | **Skills**: film/music search now returns only basic metadata (title, year, artist) — no full plot/lyrics. | [#2867](https://github.com/netease-youdao/LobsterAI/pull/2867) |
| **#2866** | renderer, docs, main, cowork, artifacts | **Analytics**: adds correlated funnels for expert discovery → invocation → execution → media generation → artifact reuse. New events: `expert_impression`, `expert_invoke`, `task_start`, `tool_call`, `media_generate`, `artifact_save`; linked via `journeyId/taskId/turnId`. No PII/prompt bodies uploaded. | [#2866](https://github.com/netease-youdao/LobsterAI/pull/2866) |
| **#2865** | renderer | **Desktop Companion** (foundational UI/components — superseded by #2870). | [#2865](https://github.com/netease-youdao/LobsterAI/pull/2865) |
| **#2864** | main | **Windows**: isolates dev-app identity (separate AppUserModelId, taskbar icon, jump-list) so dev builds don’t clash with installed version. | [#2864](https://github.com/netease-youdao/LobsterAI/pull/2864) |
| **#2863** | renderer | **Settings Security**: provider exports default to **credential-free**; v3 encrypted backups now require user password. v1/v2 imports retained with atomic failure & credential-routing guards. Regression tests added. | [#2863](https://github.com/netease-youdao/LobsterAI/pull/2863) |
| **#2862** | renderer, docs, main | **Selection Toolbar**: fixed order `[翻译, 复制, 朗读, 总结, 更多]`; “解释” moved into “更多” (ellipsis) menu; menu opens downward by default, upward only when screen space low; Electron pre-reserves menu space → **no window resize flicker**; hit-test transparency preserved. | [#2862](https://github.com/netease-youdao/LobsterAI/pull/2862) |
| **#2861** | renderer | **TTS Playback Speed**: sets both `defaultPlaybackRate` and `playbackRate` so selected speed survives segment boundaries, delayed loads, cached replays. | [#2861](https://github.com/netease-youdao/LobsterAI/pull/2861) |
| **#2860** | renderer, build, docs, main, cowork, windows | **Desktop Companion** (Windows build/packaging pieces — superseded by #2870). | [#2860](https://github.com/netease-youdao/LobsterAI/pull/2860) |

> **Velocity signal**: 11 PRs merged in a single day, 9 of them touching the Desktop Companion stack — confirms the 2026.10.13 release was a “feature freeze” and the team is now hardening the desktop-agent loop.

---

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| **No new issues in 24h** | 0 issues opened/updated | Post-release calm; users likely validating new Office/Computer Use features. |
| **PR #2871 (open)** | 0 comments, 0 👍 | Login-gating for selection tools (summary/explain/follow-up) — **first auth-enforcement PR after release**; watch for community reaction once merged. |
| **PR #2866 (analytics)** | 0 comments | Internal telemetry wiring; no external discussion yet. |

*No high-comment/reaction threads today — typical for a Chinese-enterprise-driven repo where discussion lives in internal channels.*

---

## 5. Bugs & Stability

| Severity | Bug / Regression | Status | Fix PR |
|----------|------------------|--------|--------|
| **Medium** | Windows child processes defaulted to system codepage → garbled OpenClaw/log output | **Fixed** | [#2868](https://github.com/netease-youdao/LobsterAI/pull/2868) |
| **Medium** | TTS playback speed reset to 1× on segment change | **Fixed** | [#2861](https://github.com/netease-youdao/LobsterAI/pull/2861) |
| **Low** | Selection toolbar menu flicker on open/close (window resize) | **Fixed** | [#2862](https://github.com/netease-youdao/LobsterAI/pull/2862) |
| **Low** | Dev build clashed with installed app on Windows taskbar | **Fixed** | [#2864](https://github.com/netease-youdao/LobsterAI/pull/2864) |
| **None** | No crash reports or data-loss issues surfaced today. | — | — |

---

## 6. Feature Requests & Roadmap Signals

| Inferred Request | Evidence | Likelihood for Next Version |
|------------------|----------|-----------------------------|
| **Unified auth gate for all desktop-companion tools** | #2871 adds login-required checks & IPC `login_required` code for summary/explain/follow-up; translate/read-aloud already shared login entry. | **High** — PR open, tests written. |
| **Cross-device task/session sync** | #2870 adds “unread result bubble” + “jump to original session” — implies multi-device session awareness. | **Medium** — UI ready, backend sync not yet visible. |
| **Granular MCP tool versioning/rollback** | Release notes mention “improved MCP tool management”; no PR yet. | **Medium** — likely next sprint. |
| **Offline/air-gapped mode for enterprise** | Provider export encryption (#2863) + credential-free default = stepping stones. | **Low–Medium** — security hardening first. |

---

## 7. User Feedback Summary

*Direct user quotes unavailable (0 public issues today). Proxy signals from PR scope:*

| Pain Point / Use Case | PR Addressing It |
|------------------------|------------------|
| “Selection toolbar jumps/flickers when I open the ‘more’ menu” | #2862 (pre-reserved menu space, no resize) |
| “Read-aloud speed keeps resetting between sentences” | #2861 (dual rate properties) |
| “I accidentally invoke summary/explain when not logged in” | #2871 (login gate + IPC error code) |
| “Dev build overrides my installed LobsterAI on taskbar” | #2864 (isolated AppUserModelId) |
| “Need to see which model is custom vs. built-in at a glance” | #2869 (cube badge) |
| “Want to capture multi-monitor screenshots for asking questions” | #2870 (multi-screen capture + attachment) |

Overall sentiment: **positive iteration velocity**, desktop-agent UX polishing is the clear priority.

---

## 8. Backlog Watch

| Item | Age | Why It Matters | Current State |
|------|-----|----------------|---------------|
| **None in public tracker** | — | All high-signal work is flowing through PRs; issues likely managed internally (Youdao/NetEase). | — |

> **Maintainer attention tip**: The only open PR (#2871) introduces a **new auth error code (`login_required`)** that IPC consumers (plugins, scripts) must handle. Ensure docs & SDK types are updated before merge.

---

*Digest generated from GitHub REST/GraphQL data at 2026-10-15 00:00 UTC. Links point to `github.com/netease-youdao/LobsterAI`.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest - 2026-10-15

## 1. Today's Overview

Moltis shows stable operational status with no new releases published during the reporting period. The codebase remains active through two newly created pull requests that address critical infrastructure improvements. There have been zero issue updates or bug reports in the last 24 hours, indicating current stability. The primary focus has shifted toward refining agent spawning controls and aligning sub-agent behavior with direct chat interactions. While no immediate blockers exist, the upcoming merges will enhance security and consistency across the platform.

## 2. Releases

No new versions have been released for Moltis as of 2026-10-15. The repository remains on its current release cycle without any backward-incompatible changes or major feature additions. Existing functionality continues to operate under the established versioning scheme.

## 3. Project Progress

Two pull requests were created in the last 24 hours, both remaining open and awaiting review:

- **#1302** ([Open](https://github.com/moltis-org/moltis/pull/1302)) – Introduces an optional `agents.presets.<id>.spawn.allow` field that restricts `spawn_agent` calls to specific presets (e.g., org-chart or coordinator graphs). This enforcement occurs in `resolve_preset` prior to provider execution, providing a safety mechanism against unauthorized agent creation. Dependencies are noted but not fully resolved.

- **#1301** ([Open](https://github.com/moltis-org/moltis/pull/1301)) – Addresses parity between sub-agent and direct chat operations by synchronizing persona configuration, system prompt suffixes, delegate-only modes, and preset model handling across both interaction paths. This ensures that agents treated as themselves versus delegated sub-agents receive consistent configurations.

Both PRs represent incremental improvements rather than breaking changes, maintaining backward compatibility while expanding the system's robustness.

## 4. Community Hot Topics

The most active discussion centers on PR #1302 (Preset spawn.allow), which directly impacts how agents are instantiated within the system. This change provides fine-grained control over which preset types can be spawned, addressing potential security concerns around unrestricted agent creation. PR #1301 (Chat ↔ sub-agent parity) is also prominent due to its impact on developer experience—ensuring that sub-agent and main-chat workflows behave consistently. Together, these PRs indicate active community engagement focused on reliability and usability improvements.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. The issue tracker shows zero updates, meaning there are no outstanding problems requiring immediate attention. Since no incidents occurred, there are no corresponding fix PRs to highlight. The absence of reported instability suggests the codebase is currently stable, though the pending PRs (#1301 and #1302) may introduce subtle behavioral changes worth monitoring post-merge.

## 6. Feature Requests & Roadmap Signals

The upcoming work signals two key feature directions:

- **Controlled Agent Spawning** – PR #1302 introduces a mandatory allowlist pattern for `spawn_agent`, which aligns with broader trends toward safer AI deployment practices. This could become a standard pattern for multi-tenant or regulated environments where agent isolation is critical.

- **Unified Sub-Agent Parity** – PR #1301 aims to eliminate inconsistencies between interacting with an agent directly versus through a delegated sub-agent. This improvement supports more predictable workflows and reduces cognitive load for developers building complex agent orchestration systems.

These features suggest a roadmap prioritizing security hardening and developer ergonomics alongside existing core capabilities.

## 7. User Feedback Summary

Users appear satisfied with the overall stability of the platform, given the lack of reported issues. The primary feedback themes revolve around:

- **Safety Controls** – Developers are requesting tighter constraints on agent creation to prevent accidental misuse or unintended side effects. The proposed `spawn.allow` list directly addresses this need.
- **Consistency Across Interfaces** – The gap between sub-agent and main-chat behaviors was identified as a friction point. Unifying these experiences would reduce debugging time and improve developer confidence when building multi-agent applications.
- **Documentation Gaps** – Neither PR includes extensive documentation updates, suggesting opportunities to add clear guidance on the new spawn allowlist semantics and the rationale behind sub-agent parity alignment.

## 8. Backlog Watch

There are currently no long-unanswered high-priority issues blocking progress. However, the two open PRs warrant close monitoring after merge:

- **PR #1302** – Once merged, it will enforce stricter spawning policies. Ensure that existing integrations respect the new allowlist constraints.
- **PR #1301** – After merging, verify that sub-agent and direct chat configurations remain synchronized across all relevant modules.

Both PRs are small, focused changes that should integrate smoothly with the existing codebase. No other backlog items require immediate attention at this time.

---

*Generated on 2026-10-15 based on GitHub activity from moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest - 2026-10-15

## 1. Today's Overview

The CoPaw project remains actively developed with steady momentum across releases, issues, and pull requests. Two new beta releases (v2.2.2-beta.5 and v2.2.2-beta.6) have been published, bringing significant improvements to core functionality. In the last 24 hours, the project saw 12 issues updated (10 open, 2 closed) and 32 pull requests merged or opened, indicating robust development activity. The overall health appears healthy with consistent focus on stability, feature enhancement, and addressing user-reported pain points.

## 2. Releases

### v2.2.2-beta.5 (Released 2026-10-14)
- **Focus**: Console reliability and provider integration
- **Key Changes**:
  - Fixed console draft preservation during long-text paste operations (#7948)
  - Added support for external database paths and portable backups (#8246)
  - Improved GPT token limit parameter recognition for providers (#8090)
- **Impact**: Enhances usability for power users managing large datasets and complex workflows.

### v2.2.2-beta.6 (Released 2026-10-14)
- **Focus**: UI alignment and backend robustness
- **Key Changes**:
  - Aligned end-to-end test selectors with current console UI (#8247)
  - Enhanced error handling for history storage with external database paths
- **Impact**: Reduces flaky tests and improves data portability for users.

## 3. Project Progress

**Merged/Closed PRs (Last 24h):**
- **#8259** (First-time contributor): Introduced structured human-in-the-loop question capability, allowing agents to pause and collect user responses before continuing. Leverages existing AskUserParams/Answer/Metadata contracts.
- **#8240**: Refined model management experience by reorganizing the multi-layered interface (global models, providers, agent settings) and adding direct API key editing within provider cards.
- **#8204**: Implemented optional Tavily API key via credential store to resolve the long-standing issue where paid subscriptions couldn't be utilized due to lack of authentication surface.
- **#8257**: Fixed menu visibility enforcement in Settings Center, ensuring built-in shortcuts respect public visibility overrides—closing issue #8254.
- **#8229**: Truncates oversized tool outputs in chat history to prevent 30-second request timeouts on slower connections.

**Features Advanced:**
- Human-in-the-loop interaction flow is now operational, enabling better user engagement and quality control.
- Model management is more intuitive with clearer separation of concerns and improved exit pathways.
- Provider configuration is becoming more flexible, particularly around API key management.

## 4. Community Hot Topics

| Issue | Status | Priority | Link |
|-------|--------|----------|------|
| **#8174** | OPEN | High | [Issue #8174](https://github.com/agentscope-ai/QwenPaw/Issue/8174) – Tavily provider lacks API key configuration surface, preventing paid subscriptions from being used. |
| **#8252** | OPEN | High | [Issue #8252](https://github.com/agentscope-ai/QwenPaw/Issue/8252) – Silent cancellation of agent inter-call sessions without notification or reason logging. |
| **#8225** | OPEN | Medium | [Issue #8225](https://github.com/agentscope-ai/QwenPaw/Issue/8225) – Zero-downtime hot reload incorrectly cancels running cron tasks. |
| **#8251** | OPEN | Medium | [Issue #8251](https://github.com/agentscope-ai/QwenPaw/Issue/8251) – Message navigation directory miscalculates anchor positions based solely on item count. |
| **#8256** | OPEN | Low | [Issue #8256](https://github.com/agentscope-ai/QwenPaw/Issue/8256) – Missing Docker startup instructions for Hub mode documentation. |

The most pressing issues are **#8174** (Tavily API key support) and **#8252** (silent agent cancellation), both directly impacting user productivity and system reliability.

## 5. Bugs & Stability

| Bug | Severity | Impact | Status | Fix PR |
|-----|----------|--------|--------|--------|
| **#8120** | Medium | High | Closed | N/A |
| **#8174** | High | Critical | Open | #8204 (API key support) |
| **#8252** | High | High | Open | Pending |
| **#8225** | Medium | Medium | Open | Pending |
| **#8251** | Low | Medium | Open | Pending |
| **#8249** | Medium | Medium | Open | Pending |

**Top Priorities:**
- **#8174** (Tavily API key): Without this fix, paid users cannot utilize their subscription quotas, creating a significant barrier to full feature access.
- **#8252** (Silent cancellation): Affects multi-agent workflows where orchestrators lose track of running tasks, potentially leading to resource leaks.
- **#8225** (Hot reload crash): Can cause unexpected task termination during maintenance windows, disrupting automated pipelines.

## 6. Feature Requests & Roadmap Signals

- **Tavily API Key Configuration** (#8174): A clear demand from paid users; the fix in #8204 addresses this directly.
- **Hub Mode Docker Startup Documentation** (#8255/#8256): Users report difficulty starting HUB mode via Docker; adding explicit Docker commands will improve onboarding.
- **Structured Human-in-the-Loop** (#8259): Demonstrates growing interest in interactive, guided workflows beyond simple prompting.
- **Clean Unload & Rollback-Safe Hot Reload** (#7565): Indicates a need for more robust plugin lifecycle management.
- **Experimental Python Code Mode** (#8224): Shows expanding capabilities toward code generation and execution within the agent framework.

These signals suggest a trajectory toward deeper interactivity, better infrastructure documentation, and more reliable plugin systems.

## 7. User Feedback Summary

Users have expressed frustration with several recurring pain points:
- **Page Load Instability**: Multiple reports of intermittent page loads affecting multiple devices, suggesting network resilience or state management issues.
- **Authentication Gaps**: The inability to use paid Tavily subscriptions due to missing API key configuration is a major blocker for research-heavy users.
- **Inter-Agent Communication**: Silent task cancellations during hot reloads and unclear inter-agent coordination lead to confusion about system state.
- **Navigation Friction**: Incorrect message navigation anchoring creates friction in complex multi-step workflows.
- **Documentation Gaps**: Missing Docker-specific setup instructions for Hub mode hampers deployment for teams requiring containerized environments.

Overall sentiment leans positive regarding recent stability improvements, but critical gaps in provider integration and cross-agent reliability require urgent attention.

## 8. Backlog Watch

Several high-priority items remain unaddressed and should receive maintainer attention:

1. **[#8174](https://github.com/agentscope-ai/QwenPaw/Issue/8174)** – Tavily API key configuration must be resolved to enable paid subscriptions. This is a blocking issue for enterprise adoption.
2. **[#8252](https://github.com/agentscope-ai/QwenPaw/Issue/8252)** – Silent cancellation of inter-agent calls needs immediate fixing to prevent silent failures in distributed workflows.
3. **[#8225](https://github.com/agentscope-ai/QwenPaw/Issue/8225)** – Hot reload behavior should be corrected to preserve running cron tasks during updates.
4. **[#8251](https://github.com/agentscope-ai/QwenPaw/Issue/8251)** – Message navigation anchor calculation requires refinement to match actual document structure.
5. **[#8256](https://github.com/agentscope-ai/QwenPaw/Issue/8256)** – Comprehensive Docker startup guide for Hub mode is needed to reduce onboarding friction.

These items collectively represent the most impactful areas for the next sprint, balancing technical debt reduction with user-facing reliability improvements.

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