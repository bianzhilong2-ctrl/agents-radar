# OpenClaw Ecosystem Digest 2026-09-01

> Issues: 449 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-01 02:41 UTC

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

**OpenClaw Project Digest – 2026‑09‑01**

---

### 1. Today's Overview
OpenClaw logged a very active day: **449 issue updates** (217 open, 232 closed) and **500 PR updates** (242 merged/closed, 258 still open). The latest stable release, **v2026.8.1**, is now in the wild, but recent activity shows a steady stream of critical bugs, migration churn, and feature‑request work across chat, gateway, agents, and CLI layers. Overall health remains **high‑velocity but still noisy**, with several P1 incidents still unresolved and a backlog of “needs‑maintainer” work.

---

### 2. Releases
**OpenClaw v2026.8.1** – released today.  
Key release notes (see https://docs.openclaw.ai/releases/2026.8.1):
- **Update help** – If the automatic updater fails, use the local coding harness to complete the upgrade, diagnose migration errors, and verify the Gateway starts cleanly.  
- **Back‑up your configuration** before applying the update.  

Breaking‑change impact: The upgrade introduced a few regressions (see Bugs & Stability below) that required manual fixes for many users, notably the **config‑key migration omission** (#133984) and **legacy workspace attestation handling** (#134445). Users are advised to run `openclaw doctor --fix` *after* backing up.

---

### 3. Project Progress (Merged/Closed PRs Today)
- **#134655** – *fix: installer points users to an error log that no longer exists* – Closes #134638. The installer now preserves the temporary log or directs users to a readable location.  
- **#134590** – *fix(plugins): orphan installs no longer block updates and uninstall* – Closes #134321. Operators can now update/uninstall plugins whose files were manually deleted.  
- **#134673** – *perf(gateway): reduce repeated turn preparation work* – Cuts duplicated plugin‑policy and session data preparation during model/tool discovery and transcript persistence.  
- **#134670** – *feat(gateway): deliver delegated system‑agent config approvals to channels* – System‑agent proposals (e.g., Gateway restarts) now surface to operators’ chat channels, not just the Control UI.  
- **#134272** – *fix(state): make schema‑17 session repair atomic* – Guarantees doctor can upgrade older agent DBs without missing route‑context objects.  
- **#128371** – *fix(release): authorize focused beta evidence* – Resolved a beta.3 release blocker by allowing a clean beta manifest with only Slack test updates.  
- **#123975** – *fix(scripts): clean up tsgo process trees on timeout or signal* – Prevents wedged compiler trees when the wrapper is killed.  
- **#123535** – *fix(ui): avoid session catalog refresh storms* – Stops redundant sidebar refreshes on browser focus and startup race conditions.

These merges indicate a focus on **stability, migration robustness, and user‑facing diagnostics**.

---

### 4. Community Hot Topics (Most Discussed Issues)
| # | Title | Comments | Rating | Status |
|---|-------|----------|--------|--------|
| **#91588** | Critical: Gateway Memory Leak – RSS grows from 350 MB to 15.5 GB over days | **23** | P1 (🦪) | Open |
| **#102175** | Embedded prompt cache breaks across room‑event, policy, and Responses boundaries | **18** | P1 (🐚) | Open |
| **#22676** | Signal daemon stop() race condition on SIGUSR1 restart | **17** | P1 (🦞) | Closed |
| **#96834** | WhatsApp 1:1 inbound image wedges main lane ~3 min before processing | **14** | P1 (🦪) | Open |
| **#79077** | Support for Telegram bot‑to‑bot and guest‑bot modes (May‑7 2026 release) | **13** | P2 (🐚) | Open |
| **#98435** | MCP loopback transport does not auto‑reconnect after gateway restart | **11** | P2 (🦪) | Open |
| **#126360** | AgentSelectionRequiredError floods logs under explicit multi‑agent ownership | **10** | P1 (🦞) | Open |
| **#97616** | OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation | **10** | P1 (🦐) | Open |
| **#97680** | Beta‑tagged update can leave official external plugins on latest instead of beta | **10** | P1 (🦞) | Closed |
| **#90916** | Topic‑session families for one assistant across multiple named context lanes | **10** | P2 (🌊) | Open |

*Hot‑topic insight*: The community is heavily focused on **session‑state integrity** (memory leaks, cache breakage, race conditions) and **cross‑channel reliability** (WhatsApp image flow, Telegram bot features).

---

### 5. Bugs & Stability (Critical & High‑Impact)

| # | Bug Summary | Severity | Comments | Fix PR? |
|---|-------------|----------|----------|---------|
| **#91588** | Gateway RSS grows from 350 MB to 15.5 GB → OOM crashes | **P1** | 23 | No |
| **#102175** | Embedded prompt cache loss across delivery boundaries → session drift | **P1** | 18 | No |
| **#115424** | Gateway V8 heap OOM on long‑lived main session; crash‑loop after recovery | **P1** | 6 | No |
| **#97616** | Unreaped hook/tool child processes → zombie accumulation & runtime degradation | **P1** | 10 | No |
| **#96834** | WhatsApp 1:1 image wedges lane ~3 min; multimodal run stalls | **P1** | 14 | No |
| **#119884** | SQLite agent DB migration lacks ANALYZE → 15‑57 s query stalls after mass deletions | **P1** | 7 | No |
| **#133813** | 2026.8.1 upgrade crash‑loops Gateway; doctor --fix blocked by ExecApprovalsMigrationRequiredError | **P1** | 7 | *PR #133984* (related) |
| **#133984** | 2026.7.1‑2 → 2026.8.1 leaves Gateway unstartable; missing config‑key migrations | **P1** | 5 | *Merged PR #134272* |
| **#120600** | AGENTS.md never reaches model on sandboxed Codex app‑server runs | **P1** | 5 | No |
| **#134445** | doctor --fix never completes legacy workspace migration when zero‑byte attestation file exists | **P1** | 5 | No |
| **#120162** | Safeguard compaction qualityGuard audit retry shares timeout budget → whole compaction fails | **P1** | 6 | No |
| **#131807** | System‑agent conversations share Codex session key → fresh turns rejected | **P1** | 5 | No |

*Stability note*: While many P1 bugs remain open, several migration‑related crashes have been addressed in the latest PR wave, reducing immediate startup failures for new upgrades.

---

### 6. Feature Requests & Roadmap Signals

| Issue | Requested Feature | Community Reaction | Likely Next‑Version Impact |
|-------|------------------|--------------------|---------------------------|
| **#53763** | Built‑in headless browser for reliable web access (no Chrome/third‑party APIs) | 8 comments, 0 👍 | Low priority – still an enhancement |
| **#78963** | WhatsApp listen‑only / hooks‑only mode for inbound messages without agent runs | 6 comments, 1 👍 | Medium – aligns with telemetry needs |
| **#76247** | Native dispatch landing ACK / receiver‑entry telemetry across cron, sessions_spawn, channel_inbound, gateway_agent, cli_agent, acp_downstream | 5 comments, 1 👍 | Medium – multi‑agent visibility |
| **#90916** | Topic‑session families: one assistant ↔ multiple named lanes with isolated recent transcript context | 10 comments, 2 👍 | High – fits multi‑assistant workflows |
| **#79077** | Telegram Guest‑Bots & Bot‑to‑Bot communication support (May‑7 2026 release) | 13 comments, 8 👍 | High – platform feature release |
| **#65374** | Built‑in dreaming system contaminates agent identity in multi‑agent setups | 8 comments, 2 👍 | Medium – memory‑core dreaming boundaries |

**Roadmap prediction**: The team is likely to surface **Telegram bot‑to‑bot & guest‑bot** support and **topic‑session families** in the next stable release, as they have the highest community traction and align with recent gateway performance improvements. Headless browser and telemetry enhancements will likely see incremental work in follow‑up releases.

---

### 7. User Feedback Summary

- **Memory & resource leaks** dominate user frustration (Gateway RSS growth, child‑process zombies). Users report **repeated OOM restarts** and degraded runtime after days of normal use.  
- **Session state inconsistencies** are the second biggest pain: embedded prompt‑cache loss, agent‑selection logging floods, and multimodal message stalling (WhatsApp images). These cause **effective throughput drops** and unpredictable behavior.  
- **Migration & upgrade chaos**: The 2026.8.1 upgrade caused a **wave of startup failures** due to missing config migrations and attestation file issues. Users complained about opaque error messages and the need for manual repair.  
- **Plugin & runtime loading problems**: WeChat plugin fails to load due to missing exports; plugin SDK surface sprawl remains a maintenance burden.  
- **iMessage and Telegram delivery failures**: Users experiencing opaque timeouts (private‑API bridge death) and inconsistent local‑media allowlisting.  
- **

---

## Cross-Ecosystem Comparison

User Safety: safe

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# NanoBot Project Digest — 2026-09-01

## 1. Today's Overview

NanoBot demonstrates **high development velocity** with 18 PRs updated in the past 24 hours, of which 8 were merged/closed, alongside 4 issues (2 open, 2 closed). No new releases were published today. The project's current focus spans **agent memory architecture** (pluggable recall backend, explicit recall requirements), **channel improvements** (Telegram rich message streaming, Feishu consolidation), and **stability fixes** (WebSocket portability, runtime context opt-out). The mix of refactoring, feature development, and bug fixes indicates a healthy pipeline balancing technical debt reduction with user-facing enhancements.

## 2. Releases

**None** — No new releases were published today.

---

## 3. Project Progress

### Merged/Closed PRs (8 items)

| PR | Author | Summary |
|-----|--------|---------|
| [#5619](https://github.com/HKUDS/nanobot/pull/5619) | xiexiahao | Added `ephemeral` lifecycle option to `RuntimeContextBlock` — blocks remain visible to current request but are excluded from durable session history |
| [#5612](https://github.com/HKUDS/nanobot/pull/5612) | chengyongru | Unified `AgentRunner` request fitting — prepares and pressure-checks messages/tools payload before every provider request |
| [#5608](https://github.com/HKUDS/nanobot/pull/5608) | chengyongru | Deferred transcript assembly to runner — keeps persisted history and fresh turn as explicit `TranscriptInput` |
| [#5610](https://github.com/HKUDS/nanobot/pull/5610) | chengyongru | Made memory summaries cumulative — each session summary now builds as a replacement checkpoint from previous checkpoint + new context |
| [#5531](https://github.com/HKUDS/nanobot/pull/5531) | nolanchic | Fixed Telegram rich messages not rendering with streaming — upgraded streaming preview to rich at stream end |
| [#5598](https://github.com/HKUDS/nanobot/pull/5598) | dajiaohuang | Clarified `edit_file` tool documentation — `occurrence`, `line_hint`, `replace_all` are mutually exclusive |
| [#5604](https://github.com/HKUDS/nanobot/pull/5604) | LWT1212 | Documented match selector exclusivity for `edit_file` — addressed confusion in tool contract |
| [#5618](https://github.com/HKUDS/nanobot/pull/5618) | chengyongru | Simplified TUI runtime header — removed decorative separators, streamlined session display |

### Open PRs (10 items)

Notable in-flight work:
- **#5617** [P1] Fixes WebSocket listener health check portability issue across macOS/BSD — `SO_ACCEPTCONN` is not portable
- **#5620** [P2] Adds configurable cron result delivery and batch archive lifecycle
- **#5614** Enables streaming rich messages for Telegram
- **#5571** & **#5570** Redesign memory recall to require explicit retrieval and support pluggable backends
- **#5234** Integrates `mst-python` as a metasearch provider using Reciprocal Rank Fusion

---

## 4. Community Hot Topics

### Active Issues by Engagement

| Issue | Title | Comments | Topic |
|-------|-------|----------|-------|
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Add MCP Apps host support to WebUI | 3 | MCP ecosystem expansion |
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) | Feishu channel: consolidate multi-reply into single streaming card | 3 | Channel UX improvement |

**Analysis:**
- **#5251 (MCP Apps host support):** The community seeks deeper MCP integration — extending beyond the existing client path for tools/resources/prompts to include the official MCP Apps UI extension (`io.modelcontextprotocol/ui`). This signals demand for richer human-AI interaction models within the WebUI.
- **#5567 (Feishu message consolidation):** Chinese user community highlights a friction point where agents send multiple separate messages (tool progress, intermediate updates, final reply) per user turn. Consolidating into a single streaming card would significantly improve UX parity with other channels.

---

## 5. Bugs & Stability

### Closed Bug Fixes

| PR/Issue | Severity | Description | Status |
|----------|----------|-------------|--------|
| [#5531](https://github.com/HKUDS/nanobot/pull/5531) | P2 | Telegram rich messages never rendered with streaming enabled — final messages always used legacy `editMessageText` | **Fixed** |
| [#5592](https://github.com/HKUDS/nanobot/issues/5592) | Low | `edit_file` documentation did not clarify that match selectors are mutually exclusive | **Fixed** (docs) |
| [#5617](https://github.com/HKUDS/nanobot/pull/5617) | **P1** | WebSocket `SO_ACCEPTCONN` not portable — breaks on macOS and BSDs | **Open** (fix ready) |

**P1 Alert:** PR #5617 addresses a regression risk in WebSocket listener health checks. Maintainers should prioritize review and merge — the fix is submitted and awaits approval.

---

## 6. Feature Requests & Roadmap Signals

### High-Priority Feature PRs (P1-P2)

| PR | Priority | Feature | Impact |
|----|----------|---------|--------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | P1 | Integrate `mst-python` metasearch provider (RRF aggregation) | New search capability |
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) | P1 | Require explicit memory recall by default | Breaking change; behavior shift |
| [#5617](https://github.com/HKUDS/nanobot/pull/5617) | P1 | Fix WebSocket SO_ACCEPTCONN portability | Cross-platform stability |
| [#5283](https://github.com/HKUDS/nanobot/pull/5283) | P2 | Per-session sandbox isolation for non-WebUI channels | Security & multi-tenancy |
| [#5570](https://github.com/HKUDS/nanobot/pull/5570) | P2 | Pluggable memory recall backend | Extensibility |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | P2 | Telegram custom Bot API base URL | Enterprise/self-hosted support |
| [#5620](https://github.com/HKUDS/nanobot/pull/5620) | P2 | Configurable cron delivery and batch archive | Scheduling UX |

**Predicted Next Release Inclusions:**
- WebSocket portability fix (#5617) — critical P1
- Telegram streaming rich messages (#5614, #5531) — addresses documented regression
- Cumulative memory summaries (#5610) — improves context efficiency
- `edit_file` documentation clarification (#5598, #5604) — low-risk doc update

---

## 7. User Feedback Summary

### Pain Points Identified

| Source | Issue | Impact |
|--------|-------|--------|
| **Telegram users** | Rich messages + streaming were mutually exclusive; final output always used legacy HTML path | Degraded rich media experience |
| **Feishu users** | Agent replies fragmented into multiple messages per turn | Poor UX, noisy thread |
| **WebUI users** | MCP call results treated only as model-facing artifacts; no MCP Apps host integration | Limited MCP ecosystem adoption |
| **Self-hosted operators** | Telegram channel hardcoded to `api.telegram.org` | No enterprise gateway support |

### Satisfaction Signals

- **Telegram streaming fix** (#5531) received positive reception — the regression had been reported since Bot API 10.1-10.3 drafts were available
- **Ephemeral runtime context** (#5619, #5615) addresses developer demand for transient context without polluting session history
- **Pluggable memory backend** (#5570) received interest as users want custom recall strategies beyond lexical search

---

## 8. Backlog Watch

### Long-Standing or Unanswered Items

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) MCP Apps host | ~27 days | Open, 3 comments | No PR yet; requires design decision on UI integration scope |
| [#5283](https://github.com/HKUDS/nanobot/pull/5283) Per-session sandbox | ~25 days | Open, conflicts | Active development but flagged conflicts; needs rebase |
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) Explicit recall default | ~5 days | Open, conflicts | Breaking change may need deprecation notice |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) Telegram custom API | ~49 days | Open | Enterprise feature demand; low activity recently |

**Maintainer Attention Recommended:**
1. **#5617** — P1 WebSocket fix ready; merge ASAP
2. **#5283** — Resolve conflicts to unblock security enhancement
3. **#5251** — MCP Apps feature needs scope clarification; consider RFC
4. **#4919** — Low engagement; consider closing if no bandwidth or requesting update from author

---

*Digest generated from NanoBot (HKUDS/nanobot) GitHub activity on 2026-09-01. All links reference https://github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-01

---

## 1. Today's Overview

The Hermes Agent project demonstrates high activity on September 1, 2026, with **50 issues and 50 PRs updated** in the past 24 hours. The release of **v0.21.0 (The Pantheon Release)** on August 31st has catalyzed significant community engagement, with 15 PRs merged/closed today. Key focus areas include Desktop application stability (multiple P1 bugs), MCP server improvements (service-account auth), and cross-platform compatibility fixes (Windows). The project shows healthy velocity with ~2,475 merged PRs since v0.20.0, though several high-priority bugs require immediate attention.

---

## 2. Releases

### v2026.8.31 — Hermes Agent v0.21.0 (The Pantheon Release)
**Release Date:** August 31, 2026

This major release represents significant project maturation:
- **~5,800 commits** since v0.20.0
- **~2,475 merged PRs**
- **~5,680 files changed** (~869,000 insertions, ~135,000 deletions)
- **~2,100 issues closed**
- **760+ contributors**

> [!NOTE]
> Full changelog details were not provided in the dataset. Users should refer to the [official release notes](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.31) for migration details.

---

## 3. Project Progress

### Merged/Closed PRs Today (15 total)

| PR | Author | Description | Area |
|----|--------|-------------|------|
| [#97067](https://github.com/NousResearch/hermes-agent/pull/97067) | xxxigm | Fix desktop SSH backend recycling after post-update 503 | Desktop/SSH |
| [#99924](https://github.com/NousResearch/hermes-agent/pull/99924) | salch-cred | Report symlinked directories as directories in `/api/fs/list` | Dashboard |
| [#99931](https://github.com/NousResearch/hermes-agent/pull/99931) | fangliquanflq | Let Scheduled Task gateways update on Windows | CLI/Windows |
| [#99092](https://github.com/NousResearch/hermes-agent/pull/99092) | waterlabs-bot | Ignore cron runtime state for file-tools verification | Tools/Cron |

### Open PRs Advancing Today

| PR | Author | Description | Priority |
|----|--------|-------------|----------|
| [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) | dokterdok | Complete Group Chat continuity, control, and files | P3 |
| [#99930](https://github.com/NousResearch/hermes-agent/pull/99930) | teknium1 | Add `agent_loop_stopped` hook for plugins | P3 |
| [#99919](https://github.com/NousResearch/hermes-agent/pull/99919) | salch-cred | Tag catch-up cron dispatches with lateness metadata | P1 |
| [#99921-#99926](https://github.com/NousResearch/hermes-agent/pulls?q=is%3Apr+author%3Ajameswynn+created%3A2026-09-01) | jameswynn | MCP service-account auth (5 PRs, profile-scoped) | P3 |
| [#99630](https://github.com/NousResearch/hermes-agent/pull/99630) | vsd2807 | Handle late settlement after `/compress` timeout | P1 |
| [#99934](https://github.com/NousResearch/hermes-agent/pull/99934) | afourniernv | Add native NeMo Relay integration guide | Docs |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Priority | Area |
|-------|-------|---------|----------|------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale or degraded | 132 | P3 | Skills/Tools |
| [#88168](https://github.com/NousResearch/hermes-agent/issues/88168) | Case-collision files break Windows checkouts | 12 | P1 | CLI/Windows |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats should keep working after Desktop closes | 10 | P2 | Gateway/Desktop |
| [#37811](https://github.com/NousResearch/hermes-agent/issues/37811) | Desktop chat auto-scrolls up (CLOSED) | 9 | P3 | Desktop |
| [#94198](https://github.com/NousResearch/hermes-agent/issues/94198) | Hermes Chat — standalone web UI | 6 | P3 | Dashboard |

### Analysis

**Skills Index Degradation (#66616, 132 comments):** The most-discussed issue concerns the Skills Hub at `/docs/skills` being **29.8 hours stale** (limit: 26h). The automated freshness probe has failed, and community members are actively debugging the GitHub Actions workflow (`.github/workflows/skills-index.yml`). This impacts developer experience when discovering available skills.

**Windows Compatibility (#88168):** Two files in `contributors/emails/` differ only by case, causing `git status` to report permanently dirty on Windows. This is a fundamental cross-platform file system issue affecting contributor workflows.

---

## 5. Bugs & Stability

### P1 Critical Bugs (Require Immediate Attention)

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#88168](https://github.com/NousResearch/hermes-agent/issues/88168) | Case-collision files under `contributors/emails` break Windows | P1 | Open | None |
| [#83993](https://github.com/NousResearch/hermes-agent/issues/83993) | Cron delivery failures silently swallowed | P1 | Open | [#99919](https://github.com/NousResearch/hermes-agent/pull/99919) (open) |
| [#99839](https://github.com/NousResearch/hermes-agent/issues/99839) | `hermes import` can overwrite default home | P1 | Open | None |
| [#97764](https://github.com/NousResearch/hermes-agent/issues/97764) | Desktop renderer never resumes stored session after ws drop | P1 | Closed | None mentioned |
| [#99895](https://github.com/NousResearch/hermes-agent/issues/99895) | Windows: `asyncio.start_unix_server` AttributeError in v0.21.0 | P1 | Open | None |
| [#99630](https://github.com/NousResearch/hermes-agent/issues/99630) | Late settlement after `/compress` timeout | P1 | Open | PR exists |

### P2 Notable Bugs

| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| [#88858](https://github.com/NousResearch/hermes-agent/issues/88858) | MCP trust gate: `readOnlyHint` never detected (camelCase vs snake_case) | P2 | Open |
| [#99864](https://github.com/NousResearch/hermes-agent/issues/99864) | Desktop composer shows paid model while serving free variant | P2 | Open |
| [#99897](https://github.com/NousResearch/hermes-agent/issues/99897) | Output-cap retry clamp not applied to retried request | P2 | Open |
| [#84106](https://github.com/NousResearch/hermes-agent/issues/84106) | Security: `hermes config get mcp_servers` exposes resolved secrets | P2 | Open |
| [#97315](https://github.com/NousResearch/hermes-agent/issues/97315) | Sole-credential openai-codex pool spins on 429 with no backoff | P2 | Open |
| [#99877](https://github.com/NousResearch/hermes-agent/issues/99877) | `requires_toolsets` gate has no alias normalization | P2 | Open |

### Regression Watch
- **v0.21.0 introduced a Windows regression:** `asyncio.start_unix_server` is unavailable on Windows Python, causing gateway initialization failure ([#99895](https://github.com/NousResearch/hermes-agent/issues/99895))

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Title | Priority | Signals |
|-------|-------|----------|---------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats should keep working after Desktop closes | P2 | PR #98307 in progress |
| [#77952](https://github.com/NousResearch/hermes-agent/issues/77952) | Restore last selected session when switching profiles | P3 | User request |
| [#674](https://github.com/NousResearch/hermes-agent/issues/674) | Memory Storage Migration: Flat Files to SQLite | P3 | Architectural need |
| [#99886](https://github.com/NousResearch/hermes-agent/issues/99886) | Unofficial Grok Bot provider (ConnectRPC) | P3 | New provider |
| [#36797](https://github.com/NousResearch/hermes-agent/issues/36797) | Surface auxiliary failover provenance as artifact pyramid | P3 | Observability |

### Roadmap Prediction

Based on current PR activity and issue trends:
1. **Group Chat Continuity** — PR #98307 indicates this is near-term priority
2. **MCP Profile Scoping** — Five PRs today (#99921-#99926) show significant investment in MCP multi-profile support
3. **Windows Stability** — Multiple P1/P2 Windows issues suggest near-term patch likely
4. **Plugin Lifecycle Hooks** — `agent_loop_stopped` signal (#99930) enables better external resource management

---

## 7. User Feedback Summary

### Pain Points

| Category | Issue | User Impact |
|----------|-------|-------------|
| **Desktop Stability** | Session resume failures ([#97764](https://github.com/NousResearch/hermes-agent/issues/97764)) | Chat frozen until full app restart; lost work |
| **Windows Support** | Case-sensitive file collisions ([#88168](https://github.com/NousResearch/hermes-agent/issues/88168)) | Permanently dirty git status; broken checkouts |
| **Cron Reliability** | Silent delivery failures ([#83993](https://github.com/NousResearch/hermes-agent/issues/83993)) | Users unaware scheduled tasks are failing |
| **Model Selection** | Stale per-session model pin ([#99864](https://github.com/NousResearch/hermes-agent/issues/99864)) | Paying for premium, getting free-tier output |
| **Desktop UX** | Incoming messages interrupt typing ([#88621](https://github.com/NousResearch/hermes-agent/issues/88621)) | Lost keystrokes; focus stolen |
| **Skills Discovery** | Stale skills index ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616)) | Developers can't find available capabilities |

### Positive Signals
- Community-built tools emerging (e.g., [Hermes Chat web UI](https://github.com/royabby365/hermes-chat))
- Active contributor ecosystem (760+ contributors in v0.20→v0.21 cycle)
- Quick bug turnaround observed (several P3 bugs closed today)

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Title | Priority | Concern |
|-------|-----|-------|----------|---------|
| [#674](https://github.com/NousResearch/hermes-agent/issues/674) | ~6 months | Memory Storage Migration: Flat Files to SQLite | P3 | Architectural blocker for memory features |
| [#36797](https://github.com/NousResearch/hermes-agent/issues/36797) | ~3 months | Surface auxiliary failover provenance | P3 | Observability gap |
| [#52694](https://github.com/NousResearch/hermes-agent/issues/52694) | ~2 months | Background notifications misinterpreted | P2 | Discord integration reliability |
| [#81860](https://github.com/NousResearch/hermes-agent/issues/81860) | ~3 weeks | QQ group handoff orphans session | P2 | Platform-specific regression |

### Issues Needing Maintainer Decision

| Issue | Title | Blocking |
|-------|-------|----------|
| [#97780](https://github.com/NousResearch/hermes-agent/pull/97780) | Immutable ResolvedRuntime + central client factory | Extra headers loss in fallback paths |
| [#99886](https://github.com/NousResearch/hermes-agent/issues/99886) | Unofficial Grok Bot provider | Community provider integration path |

---

## Summary Table

| Metric | Value |
|--------|-------|
| Issues Updated (24h) | 50 (40 open, 10 closed) |
| PRs Updated (24h) | 50 (35 open, 15 merged/closed) |
| Latest Release | v0.21.0 (2026.8.31) |
| P1 Bugs Open | 5 |
| P2 Bugs Open | 7+ |
| New Features In Progress | 4+ |

---

*Digest generated for 2026-09-01. Data sourced from NousResearch/hermes-agent GitHub activity.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026-09-01**  
*Data snapshot as of 2026-08-31; GitHub: sipeed/picoclaw*

### 1. Today's Overview
PicoClaw logged minimal activity across the final day of August: 1 issue and 5 PRs were updated in the last 24 hours, with only 1 PR merged/closed. The standout event is the ongoing Telegram feedback animation bug (#3343) that triggered a server-side rate-limit after generating over 228,000 `editMessageText` calls. Two new fix-PRs (#3353, #3354) landed the same day, addressing animation lifecycle bounds and IRC multiline handling, suggesting maintainers are responding to stability signals. Overall health remains steady but hinges on resolving stale PR backlog and preventing unbounded API loops.

### 2. Releases
No new releases were published in the period. The project remains on its latest tagged version with no breaking changes or migration notes announced.

### 3. Project Progress
- **Merged/Closed PRs:** #3299 *[CLOSED]* "Add native Exa web search provider" was merged, integrating Exa’s `POST /search` API as a `tools.web`/`web_search` provider with `X-Api-Key` authentication and date-range filters.
- **Open PRs updated:** 
  - #3344 *[OPEN]* "[stale] Add Build Remote Agent phone pairing (gbr/1)" – adds a phone-as-spectator adapter via `gbr/1` protocol, supporting QR and 8-char code entry.
  - #3354 *[OPEN]* "feat(irc): assemble IRCv3 multiline messages" – enables cohesive inbound multi-line IRC messages via `draft/multiline` and `batch` caps.
  - #3353 *[OPEN]* "fix(channels): bound tool feedback animations" – directly caps animation edits after 5 minutes or on first edit error.
  - #3222 *[OPEN]* "refactor(deltachat): cleanup implementation, documentation -200LOC" – still open since 2026-07-03, drops legacy features and hardcoded relay lists.

Net progress: web search shipping, two feedback/animation fixes imminent, phone pairing and delchat cleanup pending maintainer review.

### 4. Community Hot Topics
- **#3343** *[OPEN]* "[BUG] Tool feedback animation can edit a Telegram message indefinitely after a failed turn" – 2 comments, 0 👍. The issue describes a 3-second looping `editMessageText` that caused Telegram to enforce a `retry_after` rate limit. Highlights a critical feedback-loop stability gap.
- **#3353** *[OPEN]* "fix(channels): bound tool feedback animations" – created 2026-08-31, 0 comments. Positions a hard timeout (5 min) and early-error stopping as the remedy for #3343.
- **#3344** *[OPEN]* "[stale] Add Build Remote Agent phone pairing (gbr/1)" – 0 comments, 0 👍. Reflects user demand for remote phone spectation; the `[stale]` tag suggests it has been awaiting triage.

Underlying need: users want reliable cross-device agent feedback without API abuse, and seamless peripheral integration (phone/IRC) without manual workarounds

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-01

---

## 1. Today's Overview

NanoClaw is experiencing high activity with **50 issues and 34 PRs** updated in the last 24 hours, resulting in **16 merged/closed PRs** and **41 closed issues**. No new releases were published today. The project is actively addressing multiple high-priority bugs across WhatsApp integration, scheduled tasks, and container management, while also progressing on infrastructure improvements including automatic labeling, issue/PR templates, and provider refactoring. Skill-related merge-forward failures remain a recurring backlog item being systematically resolved.

---

## 2. Releases

**No new releases today.**

---

## 3. Project Progress

### Merged/Closed PRs (16 total)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#3695](https://github.com/nanocoai/nanoclaw/pull/3695) | Slack agents companion skills move in-tree | channels, skills | Closed |
| [#3657](https://github.com/nanocoai/nanoclaw/pull/3657) | CI: report-only template-compliance status | repository-maintenance | Closed |
| [#3648](https://github.com/nanocoai/nanoclaw/pull/3648) | CI: PR template v2 with token parsing | repository-maintenance | Closed |
| [#3650](https://github.com/nanocoai/nanoclaw/pull/3650) | Release: harvest PR release-note blocks into draft changelog | repository-maintenance | Closed |
| [#3647](https://github.com/nanocoai/nanoclaw/pull/3647) | CI: automatic area/* and kind/* from changed paths | repository-maintenance | Closed |
| [#3651](https://github.com/nanocoai/nanoclaw/pull/3651) | Docs: add issue intake section | repository-maintenance | Closed |
| [#3644](https://github.com/nanocoai/nanoclaw/pull/3644) | Add GitHub issue forms | repository-maintenance | Closed |

**Key advancements:**
- **Slack skills canonicalization** (#3695): Slack agent companion skills moved from external branches to main, improving developer experience
- **CI automation** (#3647, #3648, #3657): Automatic label classification and PR template v2 implemented
- **Release tooling** (#3650): Added automated release-note harvesting from PRs

### Open PRs of Note (18 total)

| PR | Title | Status |
|----|-------|--------|
| [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) | **Fix sweep: configurable idle timeout** | Open |
| [#3691](https://github.com/nanocoai/nanoclaw/pull/3691) | Test update: isolate git fixtures | Open |
| [#3693](https://github.com/nanocoai/nanoclaw/pull/3693) | Signal: queue outbound sends while disconnected | Open |
| [#3581-#3591](https://github.com/nanocoai/nanoclaw/pulls?q=is%3Apr+author%3Azvi-fried+refactor+providers) | Provider contract refactoring (6 PRs) | Open |
| [#2317](https://github.com/nanocoai/nanoclaw/pull/2317) | Add /add-voice-transcription-free-whisper skill | Open |
| [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) | Add /add-paws4claws skill | Open |
| [#2685](https://github.com/nanocoai/nanoclaw/pull/2685) | Signal docs: group typing, reactions, quote-reply | Open |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Priority |
|-------|-------|----------|----------|
| [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) | WhatsApp engage_mode=mention only fires on autocomplete pills | 1 | **HIGH** |
| [#892](https://github.com/nanocoai/nanoclaw/issues/892) | Merge-forward failed (skill branches) | 1 | Medium |
| [#2868](https://github.com/nanocoai/nanoclaw/issues/2868) | /update-skills silent no-op for installed channels | 1 | Medium |

**Analysis:** The most-discussed issue (#3085) reveals a **usability gap in WhatsApp mention handling**—users expect typed @mentions to trigger the agent, but only autocomplete selections work. This indicates user education may be needed alongside the fix. The merge-forward failures (issues #892-#1290 range) suggest **ongoing friction in the skill branch maintenance workflow** that the team is actively working through.

### Most Active PRs (by comment count)

All open/closed PRs today show 0 external comments (undefined), indicating **internal team-driven development** with limited public community engagement on individual changes.

---

## 5. Bugs & Stability

### Critical/High Priority Bugs

| Issue | Title | Severity | Fix PR |
|-------|-------|----------|--------|
| [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) | WhatsApp engage_mode=mention fails for typed @name | **HIGH** | — |
| [#2997](https://github.com/nanocoai/nanoclaw/issues/2997) | Recurring reminders with fixed text stop delivering | **HIGH** | — |
| [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) | WhatsApp upgrade strands messaging_groups rows | **HIGH** | — |
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | Hardcoded 30-min ceiling kills local-model turns | **HIGH** | [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) |

### Medium/Low Priority Bugs

| Issue | Title | Severity | Fix PR |
|-------|-------|----------|--------|
| [#3694](https://github.com/nanocoai/nanoclaw/issues/3694) | Slack add-slack copy list breaks build | Medium | — |
| [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) | setup.sh node check fails on "too old" | Medium | — |
| [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) | send_card callback buttons silently dropped | Low | [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) |
| [#3001](https://github.com/nanocoai/nanoclaw/issues/3001) | Pre-refactor groups have stale skill copies | Medium | — |
| [#2868](https://github.com/nanocoai/nanoclaw/issues/2868) | /update-skills silent no-op for installed channels | Medium | — |

**Stability Assessment:** 4 high-severity bugs remain open, with one (#3643) having a pending fix. WhatsApp integration has multiple independent issues, suggesting **testing coverage gaps** in that channel. The 30-minute hardcoded ceiling (#3643) particularly affects local-model users—a growing use case.

---

## 6. Feature Requests & Roadmap Signals

### In-Progress Features

| PR | Title | Type | Predictability |
|----|-------|------|----------------|
| [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) | Configurable idle timeout for sweep | Fix/Feature | High (fix for #3643) |
| [#3693](https://github.com/nanocoai/nanoclaw/pull/3693) | Signal: queue outbound while disconnected | Feature | High |
| [#2317](https://github.com/nanocoai/nanoclaw/pull/2317) | /add-voice-transcription-free-whisper | Skill | Medium |
| [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) | /add-paws4claws AWS credential proxy | Skill | Medium |

### Provider Refactoring Initiative

A **large refactoring effort** is underway (6 open PRs by @zvi-fried) restructuring provider contracts:
- [#3581](https://github.com/nanocoai/nanoclaw/pull/3581) Runtime provider contract
- [#3584](https://github.com/nanocoai/nanoclaw/pull/3584) Codex provider contract
- [#3585](https://github.com/nanocoai/nanoclaw/pull/3585) Host provider contract
- [#3586](https://github.com/nanocoai/nanoclaw/pull/3586) Setup provider contract
- [#3588](https://github.com/nanocoai/nanoclaw/pull/3588) OpenCode provider contract
- [#3591](https://github.com/nanocoai/nanoclaw/pull/3591) Provider instructions rendering

This suggests **upcoming architectural improvements** to the provider system, likely targeting extensibility and cleaner abstractions.

### Potential Next Version Indicators
- Configurable sweep timeouts (addresses local-model use case)
- Signal offline resilience (#3693)
- Automatic labeling infrastructure (#3647)
- PR template v2 with changelog harvesting (#3650)

---

## 7. User Feedback Summary

### Confirmed Pain Points

1. **WhatsApp mention handling confusion** (#3085): Users type @name expecting engagement; behavior differs from autocomplete selection. The `accumulate` policy masks this by storing unrecognized messages silently.

2. **Recurring reminders silently fail** (#2997): Users set up scheduled tasks expecting recurring alerts, but fixed-text reminders stop delivering after first fire. No user-visible error indicates the problem.

3. **Slack skill installation breaks builds** (#3694): Clean v2.3.0 installs applying Slack skills fail lint and container suite tests due to missing files in copy lists.

4. **Setup script fails silently on old Node** (#3248): Users with outdated Node cannot use setup.sh's recovery path due to a logic bug.

5. **Signal sends dropped when disconnected** (#3693): Users report outbound messages lost during brief network interruptions; fix PR pending.

### Satisfaction Signals

- The **Slack skills in-tree move** (#3695) addresses long-standing developer experience concerns about branch maintenance
- **Automatic labeling** (#3647) reduces contributor friction
- **Release-note automation** (#3650) improves release transparency

---

## 8. Backlog Watch

### Long-Unanswered or Recurring Issues

| Issue | Title | Age | Notes |
|-------|-------|-----|-------|
| [#892-#1290](https://github.com/nanocoai/nanoclaw/issues?q=is%3Aissue+Merge-forward+failed) | Merge-forward failures (skill branches) | ~6 months | Dozens of identical bot-created issues; many closed today but backlog persists |
| [#3001](https://github.com/nanocoai/nanoclaw/issues/3001) | Pre-refactor groups have stale skills | ~2 months | No fix PR filed; affects users created before April 2026 |
| [#2464](https://github.com/nanocoai/nanoclaw/issues/2464) | ncl: warn on overridden auto-fill args | ~4 months | Enhancement suggestion; low priority |
| [#2463](https://github.com/nanocoai/nanoclaw/issues/2463) | docs(module-cli): clarify --agent-group-id scope | ~4 months | Documentation only; low priority |

### Issues Needing Maintainer Attention

1. **WhatsApp multi-bug cluster** (#3085, #3105): Two high-priority WhatsApp issues reported ~1.5 months ago with no assigned fix PRs
2. **Scheduled task identity bug** (#2997): Core functionality regression, no PR filed
3. **Skill copy staleness** (#3001, #2868): Two related issues about skill updates not propagating; interconnected root causes likely

---

*Generated 2026-09-01 | Data source: github.com/nanocoai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-01  

## 1. **Today's Overview**  
No new issues or pull requests were opened or actively updated today in the NullClaw repository. The only recent activity is limited to an automated dependency update PR from Dependabot, which remains open. No new releases have been published as of this date. Overall, the project shows minimal developer engagement and no active feature development or bug resolution at the moment.

## 2. **Releases**  
No new releases were observed for 2026-09-01.

## 3. **Project Progress**  
There were no merged or closed pull requests during the day. The only notable action was the opening of [PR #956](https://github.com/nullclaw/nullclaw/pull/956), a routine CI dependency bump managed by Dependabot to upgrade the Alpine image version inside Docker-based workflows.

## 4. **Community Hot Topics**  
There are currently no issues or pull requests showing any community interaction such as comments or reactions. The most recently updated item is [PR #956](https://github.com/nullclaw/nullclaw/pull/956), but it does not indicate any discussion or urgency around core functionality or roadmap planning.

## 5. **Bugs & Stability**  
No bugs, crashes, or regressions have been reported recently. There is no evidence of instability based on current data.

## 6. **Feature Requests & Roadmap Signals**  
There are currently zero open or active feature requests visible. No clear signals indicate upcoming enhancements or planned features being prioritized by contributors or users.

## 7. **User Feedback Summary**  
There are no recent user-reported pain points or satisfaction indicators available in the form of issues, comments, or reviews. User engagement appears dormant at present.

## 8. **Backlog Watch**  
As there are no open issues and only one inactive automated PR, there are no urgent items requiring immediate maintainer attention. Maintainers may want to review [PR #956](https://github.com/nullclaw/nullclaw/pull/956) to assess whether manual approval/testing is needed for continued integration health.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑09‑01**  

---

### 1. Today's Overview  
The repository showed steady activity in the last 24 h: **13 issues** were touched (10 open, 3 closed) and **20 pull‑requests** were updated (15 open, 5 merged/closed). No new releases were published. The bulk of the work continues to revolve around the WebUI design‑system effort, MCP‑related stability fixes, and CI/tooling improvements, indicating a healthy focus on both user‑facing polish and internal reliability.

---

### 2. Releases  
*No new versions were released today.*

---

### 3. Project Progress – Merged/Closed PRs  

| PR | Title (link) | Summary of what landed |
|----|--------------|------------------------|
| [#7977](https://github.com/nearai/ironclaw/pull/7977) | **fix(loop): terminate on dominant repeated output, cap interactive wall clock** | Adds a termination condition for agent loops that repeatedly produce the same output and caps interactive wall‑clock time, preventing runaway runs. |
| [#7992](https://github.com/nearai/ironclaw/pull/7992) | **ci: unify bounded integration execution** | Consolidates all integration‑test jobs into a single `cargo nextest run` with a fixed concurrency ceiling, simplifying CI and reducing flakiness. |
| [#7993](https://github.com/nearai/ironclaw/pull/7993) | **chore(deps): bump the everything-else group across 1 directory with 16 updates** | Dependency bump (uuid, base64, toml, etc.) to keep the tree current. |
| [#7995](https://github.com/nearai/ironclaw/pull/7995) | **fix(ci): stabilize main branch coverage checks** | Resolves stale approval‑required notifications and isolates Railway sandbox tests from network‑allowlist overrides, improving CI reliability. |
| [#8000](https://github.com/nearai/ironclaw/pull/8000) | **feat(webui): repaint the --v2-* colour tokens onto the Gemini palette (Epic #7781 phase 3)** *(draft – do not merge)* | Introduces the M3 colour palette (`#6b4eff`, `#00e5ff`, `#ff4e9e`) as a neutral surface layer; superseded by the upcoming #8011 reskin PR. |

These closed PRs collectively advance loop safety, CI predictability, dependency hygiene, and lay the groundwork for the next WebUI visual refresh.

---

### 4. Community Hot Topics  

| Item | Comments / Reactions | Why it’s drawing attention |
|------|----------------------|----------------------------|
| [#7038](https://github.com/nearai/ironclaw/issues/7038) – *Epic: Design System Phase 1 — Storybook integration & design‑system catalog* | **3 comments** (most‑commented issue) | Clarifies the scope of the design‑system work, shows active discussion on re‑scoping phases, and links to downstream epics (#7781, #7782). |
| [#7781](https://github.com/nearai/ironclaw/issues/7781) – *Epic: Design System Phases 2–3 — DESIGN.md governance + theme update & UI reskin* | 2 comments | Central tracking for the ongoing M3 reskin and governance doc; ties directly to PRs #7994, #8005, #8006, #8011. |
| [#7994](https://github.com/nearai/ironclaw/pull/7994) – *docs(design-system): DESIGN.md governance + Storybook guidelines* | (comment count not shown) | Adds the authoritative `DESIGN.md` and Storybook integration, a key deliverable for the design‑system epic. |
| [#8010](https://github.com/nearai/ironclaw/pull/8010) – *feat(webui): session‑event transport unification & web‑app run‑completion notifications* | (comment count not shown) | Implements the approved WebSocket‑based session‑event design and durable run‑completion notices – a major UX improvement. |

The design‑system effort remains the focal point of community conversation, reflecting its strategic importance for the upcoming UI overhaul.

---

### 5. Bugs & Stability  

| Bug/Issue | Severity (label/inferred) | Status | Fix PR (if any) |
|-----------|---------------------------|--------|-----------------|
| [#7892](https://github.com/nearai/ironclaw/issues/7892) – *bug(agent-loop): deferred tool found 15x, never invoked* | **medium** (risk: medium) | **Closed** (issue) | Implicitly addressed by loop‑termination fix in #7977. |
| [#7987](https://github.com/nearai/ironclaw/issues/7987) – *tool schemas: flatten_top_level discards non‑forbidden constraints* | low (no explicit risk) | Open | [#7999](https://github.com/nearai/ironclaw/pull/7999) – fix to preserve legal root constraints. |
| [#7986](https://github.com/nearai/ironclaw/issues/7986) – *github.list_repos ships 81 raw fields (≈519 KB per listing)* | low | Open | [#7996](https://github.com/nearai/ironclaw/pull/7996) – compacts repo list responses. |
| [#7964](https://github.com/nearai/ironclaw/issues/7964) – *large MCP tool catalog publishes zero tools instead of truncating* | low | Open | PR #7964 itself is the fix (open). |
| [#8009](https://github.com/nearai/ironclaw/issues/8009) – *MCP egress errors flatten to "response_error"* | low | Open | No linked PR yet. |
| [#8008](https://github.com/nearai/ironclaw/issues/8008) – *Hosted‑MCP discovery leak‑blocked tools/list discards entire catalog* | low | Open | No linked PR yet. |

Overall, the most impactful stability issue today was the agent‑loop repeat‑call bug (#7892), which appears to be mitigated by the newly merged loop‑termination PR (#7977). Several MCP‑related bugs remain open but have accompanying PRs in progress.

---

### 6. Feature Requests & Roadmap Signals  

| Feature / Epic | Evidence (issue/PR) | Expected inclusion |
|----------------|----------------------|--------------------|
| **Design System – Phase 2 (DESIGN.md governance)** | Issue #7042, PR #7994 | Likely in next minor release (v1.4.0) as part of Epic #7781. |
| **Design System – Phase 3 (M3 reskin)** | Issue #7781, PR #8000 (draft), PR #8011 (open) | Targeted for v1.4.0; #8011 will supersede the draft. |
| **Design System – Phases 4‑5 (agentic interactions, IA)** | Epic #7782 (open) | Planned for a later milestone (post‑v1.4.0). |
| **Progressive replies & Slack Agent UI** | PR #8006 (feat(channels): durable progressive replies + native Slack UI) | Slated for upcoming release; improves extensibility. |
| **Session‑event transport & run‑completion notifications** | PR #8010 | Core WebUI UX upgrade; expected soon after review. |
| **NEAR AI model capability preservation** | PR #7998 (preserve model capabilities through discovery) | Will enhance model‑discovery reliability in the next cycle. |
| **Model capability icons in Inference** | PR #7997 | Minor UI polish; likely to ship with the next WebUI update. |

The roadmap is clearly dominated by the phased design‑system rollout, followed by MCP reliability and extensibility features (Slack UI, progressive replies).

---

### 7. User Feedback Summary  

- **Performance pain points** – Users notice huge payloads from `github.list_repos` (#7986) and silent MCP catalog drops when limits are exceeded (#7964, #8008, #8009).  
- **Reliability frustrations** – Repeated tool calls draining agent runtime (#7892) and CI flakiness on coverage checks (#7995) have been highlighted.  
- **UX inconsistencies** – The WebUI still shows legacy Tailwind colour‑alias remnants (#7890) and lacks a unified design‑language source of truth (addressed by #7994).  
- **Positive signals** – The community appreciates the move toward Storybook‑driven design (#7038) and the proactive efforts to cap runaway loops (#7977).  

Overall, feedback stresses the need for **leaner data transfers**, **more robust error handling**, and **a cohesive visual language**—all of which are actively being tackled.

---

### 8. Backlog Watch  

| Item | Age / Activity | Why it needs attention |
|------|----------------|------------------------|
| [#8005](https://github.com/nearai/ironclaw/pull/8005) – *PREVIEW ONLY — Epic #7781 phases 2–3 integrated* | Created

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Here is the structured project digest for **LobsterAI** (`netease-youdao/LobsterAI`) dated **2026-09-01**, based on the provided GitHub activity data.

---

### 1. Today's Overview
On September 1, 2026, the LobsterAI repository demonstrated high development activity, with 27 pull requests and 11 issues updated in the last 24 hours. The project's maintenance health is robust, driven heavily by automated dependency upgrades via Dependabot, alongside targeted feature development—specifically around the DSH (DeepSeek Harness) integration and model reasoning metadata synchronization. While no new software releases were published today, the active merging of documentation and dependency updates indicates a steady codebase maintenance phase. Overall, project health is stable, though a few critical security and user experience issues remain in a stale/open state requiring maintainer focus.

---

### 2. Releases
* **No new releases** were published today (New releases: 0). 

---

### 3. Project Progress
Today saw 12 merged or closed PRs out of 27 total updated, demonstrating active codebase maintenance and documentation improvements:
* **Dependency & CI Maintenance:** Multiple Dependabot PRs were successfully merged or closed, including updates to core development tools like `vite` (to 8.2.1), `@vitejs/plugin-react`, `@types/react-dom`, and `mermaid` (from 10.9.8 to 11.16.1). This shows the project is keeping its build tooling and visualization libraries modern.
* **Documentation Updates:** PR #2588 (`Liuzhq/user guide`) was closed, indicating improvements to user onboarding and documentation.
* **Active Feature Development:** PR #2585 (`feat(dsh): sync reasoning-effort metadata...`) is currently open. This PR maps LobsterAI-side thinking metadata to DSH's configuration, enabling customizable thinking strengths for integrated models.

---

### 4. Community Hot Topics
The community and

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

User Safety: safe

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

User Safety: safe

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*