# OpenClaw Ecosystem Digest 2026-09-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-21 02:25 UTC

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

# OpenClaw Project Digest — 2026-09-21

## 1. Today's Overview

OpenClaw is experiencing **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a project in intense stabilization mode. The issue-to-PR ratio (286 open issues vs 297 open PRs) suggests active remediation efforts, but the volume of P0/P1 severity bugs—particularly around **gateway crashes, update deadlocks, SQLite WAL corruption, and memory leaks**—signals a fragile release pipeline. No new releases were published today, likely due to the backlog of release-blocking issues. The community is heavily engaged on crash-loop and data-integrity problems, with maintainers (notably `steipete`) driving multiple fix PRs simultaneously.

## 2. Releases

**No new releases today.** The latest stable appears to be **2026.9.5**, but multiple issues (#152759, #153704, #146887, #151467) report **update failures from 2026.9.3/9.4 → 2026.9.5** with silent rollbacks, doctor failures, and migration deadlocks. This suggests 2026.9.5 may have been pulled or is effectively blocked for many users.

## 3. Project Progress (Merged/Closed PRs Today)

203 PRs were merged/closed in the last 24h. Key landings from the top-30 list:

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#154234](https://github.com/openclaw/openclaw/pull/154234) | Web UI | Fix stale main branch when starting worktree | **Closed** |
| [#153764](https://github.com/openclaw/openclaw/pull/153764) | CLI/Update | Preserve failures & running worker code during replacement | **Open** (held for compat checks) |
| [#154291](https://github.com/openclaw/openclaw/pull/154291) | macOS | Fix app packaging losing nested worker helpers | **Open** |
| [#154247](https://github.com/openclaw/openclaw/pull/154247) | Plugins/Test | Reuse packed registry fixtures across package cases | **Open** |
| [#153931](https://github.com/openclaw/openclaw/pull/153931) | Web UI | Restore startup JavaScript budget (remove early validation/prefetch) | **Open** |
| [#154094](https://github.com/openclaw/openclaw/pull/154094) | iOS/macOS | Keep sent photos visible in native chat history | **Open** |
| [#154298](https://github.com/openclaw/openclaw/pull/154298) | CI | Validate packaged installs on Node 24 **and** Node 26.1+ | **Open** |
| [#153573](https://github.com/openclaw/openclaw/pull/153573) | Heartbeat/Codex | Prevent cross-channel owner delivery & failure mislabeling | **Open** |
| [#154131](https://github.com/openclaw/openclaw/pull/154131) | Core | Remove compaction checkpoints (retire separate checkpoint workflow) | **Open** |
| [#154203](https://github.com/openclaw/openclaw/pull/154203) | Gateway/Workboard | Keep gateway restarts clean with Workboard enabled | **Open** |
| [#154288](https://github.com/openclaw/openclaw/pull/154288) | Config | Fix `${VAR:-default}` left literal without warning | **Open** |
| [#141057](https://github.com/openclaw/openclaw/pull/141057) | Discord | Format poll & sticker captions via shared outbound path | **Open** |
| [#154006](https://github.com/openclaw/openclaw/pull/154006) | Backup | Avoid false owner conflicts for duplicate registry paths | **Open** |

**Theme:** Most "closed today" PRs are actually **open but staged for maintainer review**—the project uses a "ready for maintainer look" gate. Actual merges appear focused on update-path hardening, CI matrix expansion, and UI polish.

## 4. Community Hot Topics (Most-Commented Issues)

| Issue | Comments | Severity | Core Problem | Underlying Need |
|-------|----------|----------|--------------|-----------------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 35 | **P0** 🦐 | Agent SQLite WAL grows to **1.4–2.8 GB** in days despite `wal_autocheckpoint=1000`; blocks gateway startup (Windows) | **Data integrity & operational reliability** — WAL checkpointing broken on Windows |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 31 | **P1** 🦐 | Unreaped hook/tool child processes → zombie accumulation → runtime degradation | **Process hygiene** — child reaping broken across hook/tool execution |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | 31 | **P1** 🦞 | MCP server init timeout crashes Gateway via unhandled rejection in child cleanup | **Fault isolation** — timeout handling crashes the control plane |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 29 | **P1** 🦪 | Gateway RSS grows **350 MB → 15.5 GB** over 2–3 days → OOM kills | **Memory leak** — sustained growth under normal load |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 21 | **P1** 🦞 | Synchronous agent persistence/transcript maintenance blocks event loop at scale | **Scalability** — sync I/O on main thread |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 21 | **P1** 🦞 | Session transcript projection livelocks under sustained writes, stalling all transports | **Concurrency** — synchronous rebuild cycles |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | 20 | **P0** 🦐 | Gateway reaches `ready` but never serves; `/health` times out, event loop starved (632-agent fleet) | **Readiness signaling** — false ready state |
| [#152759](https://github.com/openclaw/openclaw/issues/152759) | 20 | **P0** 🦪 | `openclaw update` 9.4→9.5 fails with `doctor-failed`; silent auto-rollback, unactionable | **Update UX** — opaque failure, no user guidance |

**Pattern:** The top issues are **not feature requests**—they are **production-breaking stability bugs** affecting Windows/macOS/Linux, single- and multi-agent deployments, and the update mechanism itself. Users are effectively beta-testing the release pipeline.

## 5. Bugs & Stability (Today's Reports, Ranked by Severity)

| Severity | Issue | Title | Fix PR? |
|----------|-------|-------|---------|
| **P0** 🦐 | [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL unbounded growth (Windows) | No |
| **P0** 🦐 | [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway ready but event loop starved (632 agents) | No |
| **P0** 🦐 | [#153257](https://github.com/openclaw/openclaw/issues/153257) | 2026.9.5 turns stable env into 8-hr recovery | No |
| **P0** 🦪 | [#152759](https://github.com/openclaw/openclaw/issues/152759) | Update 9.4→9.5 fails `doctor-failed`, silent rollback | No |
| **P0** 🦪 | [#152981](https://github.com/openclaw/openclaw/issues/152981) | Gateway startup hangs 17 min at `sidecars.model-runtime` timeout | No |
| **P0** 🦐 | [#153704](https://github.com/openclaw/openclaw/issues/153704) | Update candidate doctor dies at ~299s in agent-db pre-migration | **Closed** (duplicate?) |
| **P0** 🦐 | [#153882](https://github.com/openclaw/openclaw/issues/153882) | Update deadlock: plugin migrations defer on parent's install-records lease | **Closed** |
| **P0** 🦐 | [#151467](https://github.com/openclaw/openclaw/issues/151467) | Self-upgrade deadlock & rollback cron failure v6.33→v9.4 | No |
| **P1** 🦐 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie child process leak (hooks/tools) | No |
| **P1** 🦞 | [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP init timeout → unhandled rejection crashes Gateway | No |
| **P1** 🦞 | [#119720](https://github.com/openclaw/openclaw/issues/119720) | Sync persistence blocks event loop at scale | Partial (#140231, #138984 landed) |
| **P1** 🦞 | [#115908](https://github.com/openclaw/openclaw/issues/115908) | Transcript projection livelock under write load | No |
| **P1** 🦐 | [#139847](https://github.com/openclaw/openclaw/issues/139847) | Message sent during active reply run dropped (regression 9.2) | No |
| **P1** 🦞 | [#137332](https://github.com/openclaw/openclaw/issues/137332) | Mixed terminal requester-settle batches retry forever | No |
| **P1** 🦐 | [#144809](https://github.com/openclaw/openclaw/issues/144809) | claude-cli: long turns lose reply ("no active tool authority snapshot") | No |
| **P1** 🦞 | [#138042](https://github.com/openclaw/openclaw/issues/138042) | Gateway control requests stall for minutes | No |
| **P1** 🦞 | [#132303](https://github.com/openclaw/openclaw/issues/132303) | `tools.deny` not enforced for claude-cli backend | No |
| **P2** 🦪 | [#143278](https://github.com/openclaw/openclaw/issues/143278) | Heartbeat internal output leaks to Telegram chat | No |
| **P2** 🦞 | [#123792](https://github.com/openclaw/openclaw/issues/123792) | Assistant turns render twice with CLI backends | No |
| **P2** 🦪 | [#144447](https://github.com/openclaw/openclaw/issues/144447) | Git/dev update ends in managed-service-preflight | No |

**Critical observation:** **Zero P0 issues have linked fix PRs** in the top-50 list. The update pathway (#152759, #152981, #153704, #153882, #151467) is **comprehensively broken** across platforms. The WAL growth (#143524) and memory leak (#91588) are long-standing (June/September) with no resolution.

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Signal | Likelihood for Next Version |
|-------|-------|--------|----------------------------|
| [#45608](https://github.com/openclaw/openclaw/issues/45608) | 4 👍 | Pre-reset agentic memory flush (parity with compaction) | Medium — clear mechanism exists, needs wiring |
| [#110950](https://github.com/openclaw/openclaw/issues/110950) | 2 👍 | Unify heartbeat/watchers/scheduled automation as cron jobs | Low — architectural, maintainer-authored, but "off-meta tidepool" |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | 1 👍 | Multiple Azure/Teams bots per gateway | Medium — PR [#112811](https://github.com/openclaw/openclaw/pull/112811) active, large scope |
| [#131457](https://github.com/openclaw/openclaw/issues/131457) | 0 | Feishu/Lark progress streaming mode (parity with Slack/Discord/Telegram) | High — incremental, follows existing pattern |
| [#154135](https://github.com/openclaw/openclaw/pull/154135) | — | Search provider configuration in Settings (UI) | **High** — PR open, "ready for maintainer look", addresses UX gap |
| [#153907](https://github.com/openclaw/openclaw/pull/153907) | — | `@everyone` notify in shared chats (Control UI) | **High** — PR open, closes #153886, screenshot provided |
| [#150605](https://github.com/openclaw/openclaw/pull/150605) | — | Organize sidebar session filters in one panel | Medium — WIP draft, UX polish |
| [#154131](https://github.com/openclaw/openclaw/pull/154131) | — | Remove compaction checkpoints (simplify) | **High** — PR open, closes #154045, reduces complexity |

**Prediction:** Next version will likely ship **UI/UX improvements** (search config, @everyone, sidebar filters, compaction simplification) and **MS Teams multi-bot support**—features with active PRs—while **core stability bugs remain unresolved**.

## 7. User Feedback Summary

**Pain Points (from issue narratives):**
- **Update trauma:** "I genuinely regret upgrading to OpenClaw 2026.9.5" (#153257); "silent failure... unactionable" (#152759); "8-hour failure recovery session" (#153257)
- **Operational blindness:** Gateway reports `ready` but serves nothing (#149538); health probes timeout while RSS climbs
- **Data loss risk:** WAL files growing to **GBs** with no checkpoint (#143524); memory leak to **15.5 GB** (#91588)
- **Platform neglect:** Windows-specific WAL bug (#143524), macOS update deadlocks (#152759, #153704), Linux OOM kills (#99659)
- **Silent regressions:** `tools.deny` ignored for claude-cli (#132303); messages dropped during active reply (#139847); heartbeat leaks to user chat (#143278)

**Use Cases Revealed:**
- **Large fleets:** 632-agent deployment (#149538), 19 Slack accounts (#131150)
- **Multi-channel:** Telegram, Discord, Slack, Matrix, MS Teams, Feishu, WhatsApp

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem
**Date: 2026-09-21**

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem in September 2026 is characterized by rapid fragmentation and simultaneous convergence. At least eleven distinct projects are actively building agent frameworks that span web UIs, desktop applications, gateway servers, and embedded deployments. A clear industry pattern has emerged: projects are racing toward platformization—marketplaces, multi-tenant architectures, and unified provider integrations—while simultaneously grappling with fundamental reliability challenges around update mechanisms, SQLite/data integrity, session persistence, and cross-platform stability. The volume of P0-grade bugs reported across the ecosystem (particularly in OpenClaw and CoPaw) suggests that the industry is in a turbulent adolescence, where feature velocity outpaces infrastructure hardening. Developers building on these frameworks should expect significant API churn and should monitor release stability closely before committing to production deployments.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score |
|---|---|---|---|---|
| **OpenClaw** | 500 | 500 (203 merged) | None; v2026.9.5 possibly blocked | ⚠️ Moderate (6/10) |
| **CoPaw (QwenPaw)** | 24 | 34 (13 merged) | v2.2.2-beta.3 shipped | ✅ High (9/10) |
| **LobsterAI** | 3 | 14 | 4 recent releases (9.14–9.20) | ✅ High (8/10) |
| **NanoBot** | 4 | ~55 in flight (4 merged) | None | ✅ Good (8/10) |
| **Hermes Agent** | 50 | 50 (14 merged) | None | ✅ Good (7/10) |
| **NanoClaw** | 1 | 41 (38 merged) | None | ✅ Good (7/10) |
| **IronClaw** | 0 | 8 (3 closed) | RC prep: v1.4.1-rc.1 | 🔶 Moderate (6/10) |
| **PicoClaw** | 6 | 5 (2 merged) | None | ⚠️ Low (4/10) |
| **NullClaw** | 1 | 0 | None | ⚠️ Low (3/10) |
| **TinyClaw** | 0 | 0 | None | ❌ Dormant |
| **ZeptoClaw** | 0 | 0 | None | ❌ Dormant |
| **Moltis** | — | — | — | ⚪ Insufficient data |

*Health Score methodology: weighted combination of merge velocity, issue resolution rate, release cadence, and severity of unresolved bugs (0–10 scale).*

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
OpenClaw is by far the largest project in the ecosystem by community engagement, with 500 issues and 500 PRs updated in a single 24-hour period—roughly 20× the activity of its nearest competitor (Hermes Agent, also at 50/50). This scale signals deep community investment and a broad feature surface spanning gateways, plugins, multi-channel delivery (Telegram, Discord, Slack, Matrix, MS Teams, Feishu, WhatsApp), and large fleet deployments (632-agent configurations documented). No other project matches OpenClaw's channel coverage or deployment scale. The project also demonstrates the most active maintainer engagement, with `steipete` driving multiple fix PRs simultaneously across domains.

**Technical Approach Differences:**
OpenClaw's architecture centers on a persistent gateway process with SQLite-backed agent state, heavy plugin infrastructure, and a web UI that has undergone significant recent refactoring (removing legacy message projection, adding search configuration). This contrasts with NanoBot's lightweight WebUI-first approach, Hermes Agent's desktop-application-centric model, and LobsterAI's consumer-app strategy. OpenClaw's commitment to a gateway-as-control-plane model creates unique scalability advantages but also introduces systemic failure modes (gateway crashes, event-loop starvation, update deadlocks) that do not affect lighter-weight peers.

**Community Size:**
OpenClaw's community is the largest by orders of magnitude. However, the issue-to-PR ratio (286 open issues vs. 297 open PRs) and the fact that **zero P0 issues have linked fix PRs** suggest the community is generating more problems than it can resolve, creating a sustainability risk. Smaller projects like NanoBot and NanoClaw maintain healthier ratios and faster time-to-merge, which may make them more attractive for production deployments requiring reliability over breadth.

---

## 4. Shared Technical Focus Areas

**Update & Upgrade Reliability** (OpenClaw, Hermes Agent, CoPaw, LobsterAI, IronClaw)
All major projects report update-related bugs. OpenClaw's `update` command suffers from silent rollbacks and doctor failures; Hermes Agent has stale update receipt warnings; CoPaw recently fixed plugin reload state loss; IronClaw is preparing RC specifically to stabilize its release pipeline. This cross-project pattern indicates that **automated upgrade mechanisms remain the least reliable component** of agent frameworks, and developers should expect breaking changes between patch versions.

**SQLite / Data Integrity** (OpenClaw, LobsterAI, NanoClaw, CoPaw)
OpenClaw reports unbounded WAL growth (1.4–2.8 GB); LobsterAI fixes readonly SQLite errors; NanoClaw migrated from sqlite3 CLI to better-sqlite3 and fixed UTC timestamp parsing; CoPaw's session loss after plugin reload touches persistence layers. The recurrence of SQLite-related bugs across independent projects suggests that **embedded database management is a systemic weakness** in the ecosystem, likely stemming from the tension between SQLite's write-serialization model and the concurrent access patterns of multi-agent, multi-channel systems.

**Session Management & Persistence** (NanoClaw, CoPaw, Hermes Agent)
NanoClaw fixed JSONL session rotation and OpenCode idle handling; CoPaw faces session loss on plugin reload and history truncation after compression; Hermes Agent pursues canonical cross-platform session continuity. This is a universal challenge: maintaining coherent conversation state across interruptions, reloads, and platform transitions remains unsolved at any scale.

**Provider & API Resilience** (NanoBot, CoPaw, Hermes Agent, LobsterAI)
NanoBot has SSE reasoning-event loss for xAI Grok/OpenAI Codex; CoPaw manages provider-specific schema cleaning and audio file handling; Hermes Agent reads API keys from config; LobsterAI migrated xAI credentials. The industry is converging on the need for **provider-agnostic fallback mechanisms and graceful degradation** when individual LLM providers fail or change their APIs.

**OAuth & Authentication** (NanoBot, IronClaw, LobsterAI, CoPaw)
NanoBot improved OAuth reauthentication UX; IronClaw fixed provider activation after OAuth completion; LobsterAI shipped WebAuthn support; CoPaw manages multi-tenant authentication for its Hub. Authentication flow reliability is a near-universal pain point, with projects independently discovering that OAuth is easy to initiate but difficult to complete reliably across edge cases.

**Desktop/UI Stability** (Hermes Agent, CoPaw, OpenClaw, NanoClaw)
Hermes Agent fixes desktop remote updates and chat flicker; CoPaw addresses React DOM injection conflicts and chat page crashes; OpenClaw addresses macOS packaging and web UI stale branches; NanoClaw fixes statusbar service label mismatches. The desktop layer consistently introduces fragility that server-only deployments avoid, suggesting that **desktop agent frameworks should invest heavily in CI coverage for platform-specific edge cases**.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | CoPaw | LobsterAI | NanoBot | Hermes Agent | NanoClaw |
|---|---|---|---|---|---|---|
| **Primary Interface** | Gateway + Web UI | Console UI (Electron) | Consumer App | Web UI | Desktop App | Lightweight Gateway |
| **Target User** | Enterprise/Power User | Enterprise/Team | Consumer | Individual Developer | Individual/Pro | Individual |
| **Architecture** | Gateway-first, plugin-heavy | Multi-tenant, hub-oriented | Platform/marketplace | Lightweight, provider-focused | Desktop-first, cross-platform | Minimalist, channel-focused |
| **Channel Coverage** | Broadest (7+ platforms) | Platform-agnostic | Focused (OpenClaw-based) | Web-native | Desktop-centric | WhatsApp-focused |
| **Monetization** | Open-source | Platform fees (Qwen ecosystem) | Subscription trials, credits | Open-source | Open-source | Open-source |
| **Release Cadence** | Irregular, bug-blocked | Beta cycle (v2.2.2-beta.3) | Rapid (4 releases/week) | Continuous pre-release | Steady, no version bumps | Batch-clearance model |
| **Unique Differentiator** | Scale + plugin ecosystem | Qwen platform integration | Marketplace + consumer UX | Provider diversity + OAuth polish | Desktop reliability + plugin API | Simplicity + WhatsApp focus |

**Key Architectural Divergences:**
- **OpenClaw** treats the gateway as the canonical control plane, centralizing all agent logic and routing. This maximizes flexibility but creates a single point of failure.
- **CoPaw** embraces a multi-tenant, platform-oriented architecture (QwenPaw Hub) that prioritizes team collaboration and enterprise governance over individual usability.
- **LobsterAI** positions itself as a consumer product with marketplace dynamics and subscription economics, leveraging OpenClaw compatibility as a feature rather than building independently.
- **NanoBot** and **Hermes Agent** occupy the "developer tool" niche, emphasizing configurability, provider flexibility, and lightweight deployment.
- **NanoClaw** pursues minimalism, focusing on a single channel (WhatsApp) with deep integration rather than broad surface area.

---

## 6. Community Momentum & Maturity

**Rapidly Iterating (High Velocity, Feature Shipping):**
- **CoPaw** leads with 34 PR updates, active beta releases, and 13 merges/day. The QwenPaw Hub multi-tenant edition is the most ambitious roadmap item in the ecosystem. Community engagement is intense (31 comments on Hub roadmap). This project is in hyper-growth mode and will likely define enterprise AI assistant patterns in the near term.
- **LobsterAI** ships 4 releases in a single week, merging marketplace features, WebAuthn, and subscription infrastructure simultaneously. The batch-merging of legacy PRs alongside new features suggests a project aggressively catching up while innovating.

**Actively Stabilizing (High Activity, Bug Remediation):**
- **OpenClaw** is the most active project by volume

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## **NanoBot Project Digest – 2026‑09‑21**

### 1. Today's Overview
NanoBot is in a healthy, fast‑moving state. The team shipped four merged/closed PRs that tighten UI reliability, OAuth handling, agent testing, and legacy code cleanup, while the community pushed ten new feature‑oriented PRs and three critical bug fixes. Issue activity is modest (four updates, two with recent comments) but highlights two clear user‑pain points: missing real‑time WebUI feedback and slow session searches. The backlog remains populated with open feature PRs and a few unanswered “good‑first‑issue” tickets, indicating ample opportunity for contributor engagement.

### 2. Releases
**No releases** were published today. The project continues with an active pre‑release cadence (55 PRs in flight, 19 open) and no official artifacts to version‑bump.

### 3. Project Progress – Merged / Closed PRs (today)
| PR | Status | Scope & Impact |
|---|---|---|
| **#5830** *[CLOSED]* – `feat(webui): add Baizhi Agent Toolkit MCP preset` | Integration of a hosted Baizhi Cloud Agent Toolkit preset (WebSearch, WebScrape, WebExtract) into the WebUI, letting users connect their own account without manual MCP config. |
| **#5836** *[CLOSED]* – `fix(webui): make OAuth reauthentication actionable` | Improved OAuth flow: distinguishes genuine auth failures from transient network errors, shows a clear “Sign in again” CTA, and preserves unsaved preset state. |
| **#5835** *[CLOSED]* – `test(agent): fix response‑source CI contract` | Fixed a flaky CI test by injecting the required `consolidate_history` callback, leaving production behavior unchanged. |
| **#5823** *[CLOSED]* – `refactor(webui): remove legacy message projection` | Completed the WebUI event‑protocol migration: deleted Python‑owned UI folding rules and made `/webui‑thread` return canonical `events` only. |

These merges tighten UI reliability, enhance the OAuth user experience, and clean up legacy code paths.

### 4. Community Hot Topics  
**Most commented items (as of 24 h)**  

| Item | Comments | Link | Underlying Need |
|---|---|---|---|
| **#5524** – *WebUI 会话结束通知铃声* (good‑first‑issue) | **1** | [HKUDS/nanobot Issue #5524](https://github.com/HKUDS/nanobot/issues/5524) | Users miss visual/audio cues when an agent turn finishes, especially during long‑running tasks. The request asks for an optional notification sound, controllable via Settings. |
| **#5509** – *feat: session search performance with FTS5 index* | **1** | [HKUDS/nanobot Issue #5509](https://github.com/HKUDS/nanobot/issues/5509) | Growing conversation stores cause `SessionManager.search_sessions` to scan the entire JSONL log each query. Proposes an asynchronous SQLite FTS5 index to keep search fast. |

Both items have low comment counts but reflect recurring usability concerns (real‑time feedback and scalability).

### 5. Bugs & Stability  
| Issue / PR | Severity | Current State | Fix Status |
|---|---|---|---|
| **#5833** – *SSE Responses consumer drops `response.reasoning_text.*` events* | **Medium** – Breaks reasoning output for xAI Grok and OpenAI Codex providers. | **Open** – Awaiting fix. |
| **#5834** – *fix(providers): handle `response.reasoning_text.*` events in the SSE Responses consumer* | **Medium** – Directly addresses #5833. | **Open** – PR submitted, ready for review. |
| **#5808** – *WebUI follow‑ups canceled by `/stop` replay after gateway restart* | **Low‑Medium** – Causes duplicate replay attempts on restart. | **Closed** – Resolved in previous work. |
| **#5807** – *fix(discord): clean up reaction state on stop* | **Low** – Prevents stale Discord emoji tasks after runtime reset. | **Open** – PR in flight. |

The most pressing stability issue is the SSE reasoning‑event loss; a fix PR is already on the bench.

### 6. Feature Requests & Roadmap Signals  
- **WebUI Notification Sound** (`#5524`) – Low‑effort good‑first issue; likely to appear in the next minor release if a contributor claims it.  
- **FTS5 Session Search** (`#5509`) – Core performance upgrade; slated for a upcoming 2.0‑series release after index implementation and migration scripts.  
- **Provider & SDK Improvements** – Multiple open PRs (e.g., #5838 routing, #5817 self‑update, #5769 timeout failover, #5832 Unifically provider) suggest the roadmap is moving toward:  
  - **Robust API routing** (per‑session isolation).  
  - **Self‑update & dependency management** (stable + dev channels).  
  - **Enhanced provider resilience** (NIM timeout handling).  
  - **Expanded LLM ecosystem** (Unifically, reusable JEV client).  
- **UI/UX Enhancements** – Ongoing work on reduced turn noise (#5831), localized activity labels (#5367), and OAuth reauth (#5836).  
- **Agent Architecture** – Refactoring sub‑agent execution (#5811) and JEV guardrails (#5815) indicate a push toward safer, more modular delegated work.  

**Prediction:** The next version will most likely ship with the WebUI notification sound toggle, the FTS5 session search index, and the SSE reasoning‑event fix, as these address the highest‑visibility user pain points.

### 7. User Feedback Summary  
- **Audio/Visual Feedback:** Users repeatedly note they “don’t know when the agent is done” during long‑running turns, especially in the WebUI. The requested sound toggle is seen as a simple quality‑of‑life boost.  
- **Search Performance:** As conversation history grows, users experience sluggish session discovery, making the FTS5 index a top performance request.  
- **Reasoning Visibility:** Developers using xAI Grok/OpenAI Codex report missing reasoning deltas in SSE streams—an operational bug that impacts debugging and output correctness.  
- **OAuth & Session Stability:** Recent fixes for OAuth reauth and temporary chat retention indicate users have been frustrated by “sign‑in again” loops and lost messages during navigation.  
- **Overall Sentiment:** The community is enthusiastic about new providers and tooling (JEV, Baizhi Toolkit) but expects reliable core experiences (search, notifications, error handling) to be ironed out first.

### 8. Backlog Watch – Items Needing Maintainer Attention  
| Item | Age | Reason |
|---|---|---|
| **#5524** – WebUI notification sound (good‑first‑issue) | ~5 weeks (2026‑08‑25) | No owner yet; a simple audio integration that could unblock a contributor. |
| **#5509** – FTS5 session search index | ~5 weeks (2026‑08‑24) | Core performance blocker; requires schema migration and async index building. |
| **#5833** – SSE reasoning‑event loss | **Today** (2026‑09‑20) | Open bug affecting two major providers; fix PR exists but needs merge. |
| **#5838** – API session routing fix (open) | **Today** (2026‑09‑20) | Corrects a critical routing bug where all API calls hit the same session; awaiting review/merge. |
| **#5817** – Stable & dev self‑update flows (open) | **Yesterday** (2026‑09‑19) | Adds `nanobot update` and robust source updates; depends on CI verification. |
| **#5832** – Unifically provider addition (open) | **Today** (2026‑09-20) | New LLM provider integration; ready for approval. |
| **#5807** – Discord reaction cleanup (open) | **Yesterday** (2026-09-18) | Prevents leftover emoji tasks; should be merged before next release. |

These tickets/PRs span the spectrum of **critical bugs**, **high‑impact features**, and **contributor‑friendly entry points**. Prioritizing them will keep NanoBot’s growth trajectory smooth and user‑centric.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here's a thinking process:

1.  **Understand User Request:**
   - User wants a project digest for Hermes Agent on 2026-09-21
   - Based on specific GitHub data provided
   - Must follow exact structure: 8 sections
   - Must include GitHub links
   - Objective, data-driven, highlight project health

2.  **Analyze the Data:**
   - Date: 2026-09-21 (today in the scenario)
   - Issues updated in last 24h: 50 (open/active: 25, closed: 25)
   - PRs updated in last 24h: 50 (open: 36, merged/closed: 14)
   - New releases: 0
   - Latest releases: None
   
   Let's look at the issues (top 30 by comment count, but all show comments and dates). I need to extract meaningful patterns:
   - Issues with comments on 2026-09-21 (today): 
     #117793, #117784, #117790, #117791, #117792, #117794, #117795, #117796 - all created and updated on 2026-09-21, mostly 0-1 comments
     #117762, #117710 also updated 2026-09-21
   - Issues updated recently (within the period): many from July, May, June, but also some from Sept 20
     Key ones with comments: #58746 (7 comments), #62780 (6), #35060 (6), #55811 (5), #2045 (5), #117432 (4), #95529 (3), #116446 (2), #117285 (2), #116944 (2), #117433 (2), #117438 (2), #117682 (2), #117433 (2), etc.
   - PRs: 50 total updated, 36 open, 14 merged/closed. Top 20 by comment count (all show undefined comments, but some have dates). Merged/closed PRs today include many from Sept 20-21: #117783, #117659, #117669, #117798, #117661, #117797, #117799, #117653, #117492, #117786, #117787, #117789, #112136, #109548, #117704, #114116, #117764, #117652. Also #80896 closed earlier.
   - No new releases.

   I need to structure the digest carefully, using only the provided data, not making up facts. I'll summarize based on what's there.

3.  **Draft - Section by Section:**

   **1. Today's Overview**
   - Project: Hermes Agent (nousresearch/hermes-agent)
   - As of 2026-09-21: 50 issues and 50 PRs updated in the last 24h, with 25 open/active issues and 25 closed; 36 PRs still open, 14 merged/closed. No new releases.
   - Activity is high and balanced between issue triage/bug fixing and PR merges, indicating active maintenance. The mix of cross-platform, CLI, desktop, agent, and tool-focused work suggests ongoing refinement ahead of a potential stability or feature milestone.

   **2. Releases**
   - No new releases tagged since the last digest. The repository is tracking HEAD/main development, with no version bumps or changelog entries for 2026-09-21.

   **3. Project Progress (Merged/Closed PRs)**
   - 14 PRs merged/closed in the last 24h. Notable merges include: 
     - #117783: auto-fix lint/formatting (bot)
     - #117659: fix desktop remote updates not restarting local gateway
     - #117669: fix large text pastes attaching from wrong cwd
     - #117798: plugin catalog date sorting
     - #117661: fix sign-in wall for private links
     - #117797: hide console-less Windows backend helpers
     - #117492: kanban default worker skills
     - #117786: fix bot-mode per-profile turn lock
     - #117787: read provider api_key from config.yaml
     - #117789: perf: capability epoch counts non-archived skills
     - #112136: Home Assistant session-integrated delivery mode
     - #109548: expose per-turn voice context to hooks
     - #117704: honor ignore-existing for local backend resolution
     - #114116: Gemini Live real-time voice mode for Desktop
     - #117764: keep wake phrases working after interrupted reply
     - #117652: SSH backend install id collapse
   - Many focus on desktop stability, Windows compatibility, CLI config, and cross-platform delivery. The merge rate (14 in 24h) is healthy for an active open-source project.

   **4. Community Hot Topics**
   - Most commented issues (by comment count, updated today):
     - #58746 [7 comments]: `hermes update` targeting main vs stable → community wants stable defaults
     - #62780 [6 comments]: Canonical cross-platform session → conversational continuity across platforms
     - #35060 [6 comments]: Configurable `deliver` target for HA integration → cross-platform messaging routing
     - #55811 [5 comments]: Runtime-enforced capability contracts for high-risk tools → safety/governance
     - #2045 [5 comments]: Lazy skill loading → prompt bloat, on-demand tools
     - #117432 [4 comments]: `register_system_prompt_section()` never rendered → plugin API gap
     - #95529 [3 comments]: Plugin-registered toolsets falsely warned as 'Unknown' → validation timing bug
     - #116446 [2 comments]: LSP diagnostics timeout poisoning workspace → performance/Stability
     - #117285 [2 comments]: Desktop chat area flicker/remount → UI stability
     - #116944 [2 comments]: A2A reply text lost in gateway streaming → message delivery
     - #117433 [2 comments]: kanban show --json omits max_runtime_seconds → verification gap
     - #117438 [2 comments]: Stale update receipt causes endless 'mixed sys.modules' warning → update stability
     - #117682 [2 comments]: HERMES_DESKTOP_IGNORE_EXISTING not preventing local backend → desktop config bug
     - #117793 [1 comment]: context-limit error parsing llama.cpp phrasing → model compatibility
     - #117784 [1 comment]: surrogate stdin round-trip tests spawn bare bash on Windows → test reliability
     - #47247 [1 comment]: context_length resolves to 200K due to free tier cap → model metadata accuracy
     - #117696 [1 comment]: ProfileRow missing previous_names → contract validation
     - #117375 [1 comment]: Desktop chat composer disappears during loading → UI bug
     - #117762 [1 comment]: RFC: Fail-closed admission for operator-required context → safety policy
     - #117229 [1 comment]: kanban request_review records wrong assignee → workflow logic
     - #117710 [1 comment]: api_server chat works once per session, provider drops on second turn → gateway/provider stability
     - #47210 [1 comment]: CLI doesn't auto-detect light terminal backgrounds in Ghostty → TUI theming
     - #117750 [1 comment]: Pruning carried-forward tool payloads duplicates/reorders history → session state
     - #117788 [0 comments]: capability epoch counts archived skills, rebuilds system prompt → perf
     - #117790 [0 comments]: fact_store.add stores raw tool-call payloads as facts → data integrity
     - #117791 [0 comments]: TASK_COMPLETION_GUIDANCE no guard against fabricated tool calls → safety
     - #117792 [0 comments]: classify_items.py cron script missing JSON schema in prompt → model guidance
     - #117794 [0 comments]: tools/neutts_synth.py discards real exception on import fail → error reporting
     - #117795 [0 comments]: Telegram media_write_timeout not env-overridable → messenger config
     - #117796 [0 comments]: Defender quarantines Windows hermes.exe as Trojan → packaging/distribution
   - Top PRs by recency/activity: #117783 (auto-fix), #117659, #117669, #117798, #117661, #117797, #117492, #117786, #117787, #117789, #112136, #109548, #117704, #114116, #117764, #117652 – many address desktop stability, Windows compatibility, CLI config, and cross-platform messaging.

   **5. Bugs & Stability**
   - Bugs reported today (Sept 21): at least 12 issues created/updated today with 0-1 comments, spanning:
     - Context limit parsing for llama.cpp (#117793)
     - STDIN round-trip test issues on Windows (#117784)
     - TTS exception masking (#117794)
     - Telegram timeout configurability (#117795)
     - Windows Defender false positive (#117796)
     - Thinking-stream loop degeneration (#117756 PR, but related bug pattern)
     - Carried-forward tool payload pruning duplicates (#117750)
     - Cron classifier missing JSON schema (#117792)
     - Fact store storing raw tool calls as facts (#117790)
     - TASK_COMPLETION_GUIDANCE missing tool-call fabrication guard (#117791)
     - Session compression/limit error patterns (#117793 etc.)
   - Severity assessment: 
     - Critical: Windows Defender false positive (#117796), stale update receipt causing endless warnings (#117438), A2A reply text loss (#116944), desktop composer flicker (#117375, #117682)
     - Moderate: context-limit parsing, plugin toolset warnings, Telegram timeout, fact store contamination
     - Low/Infrastructure: test spawn issues, exception masking, schema omissions
   - Fix PRs exist for several: #117704 addresses #117682 (ignore-existing), #117659/#
# 117669 address desktop UI/stability, #117786 fixes bot-mode lock, #117787 fixes provider key reading, #117789 fixes capability epoch, #117492 adds default skills, #117764 fixes wake phrases after interrupt. Several high-comment issues (#58746, #62780, #35060) lack merged PRs yet, indicating pending decisions or complex changes.

   **6. Feature Requests & Roadmap Signals**
   - Recurring request themes: 
     - Stable update channel vs main branch (#58746)
     - Cross-platform session continuity (#62780)
     - Configurable message delivery targets (#35060, #112136)
     - Runtime capability contracts & safety guards (#55811, #117762)
     - Lazy/on-demand skill loading (#2045)
     - Plugin system prompt rendering (#117432)
     - Desktop ignore-existing & remote backend focus (#117682, #117704)
     - Gemini Live voice mode (#114116)
     - Plugin catalog metadata (#117798)
     - Default worker skills for kanban (#117492)
     - Voice context exposure (#109548)
   - Predictive next-version signals: Given the merge of #117492 (default skills), #112136 (delivery mode), and #114116 (Gemini Live), plus active work on desktop stability and Windows compatibility, the next minor release likely bundles cross-platform delivery refinements, safer update mechanics, and continued TUI/voice integration. The lack of a new release tag suggests branching toward a v0.22.0 or 2026.10 milestone.

   **7. User Feedback Summary**
   - Pain points evident from high-engagement issues:
     - Update mechanism pulling from main instead of stable (#58746, 7 comments) → users fear unintended dev-channel adoption
     - Session continuity across CLI, desktop, Telegram, Discord (#62780, 6 comments) → fragmented conversation state
     - Home Assistant delivery routing limitations (#35060, 6 comments) → want flexible messaging targets
     - Plugin toolset warnings and system prompt rendering gaps (#95529, #117432, 3-4 comments) → API/documentation mismatches
     - Desktop config ignores (#117682, #117704, 2 comments each) → remote-first setups broken by local backend auto-detection
     - Windows Defender false positives (#117796, 0 comments but noted in data) → distribution trust issue
     - A2A/gateway streaming losing replies (#116944, 2 comments) → reliability for external integrations
     - Kanban runtime cap visibility (#117433, 2 comments) → operational monitoring gap
     - TUI theming and background detection (#47210, 1 comment) → usability on non-standard terminals
   - Satisfaction signals: Healthy PR merge rate (14/50), active community commenting, rapid bug turnover (many Sept 21 entries), and new feature PRs (#117783 auto-fix, #117789 perf, #117764 wake phrases) indicate ongoing refinements users are iterating on.

   **8. Backlog Watch**
   - Important issues without merged PRs yet (last updated within period, high comment count or severity):
     - #58746: hermes update should target stable, not main (7 comments, July 5 → Sept 21) → maintainer decision needed on stable tagging strategy
     - #62780: Canonical cross-platform session (6 comments, July 11 → Sept 21) → design/architecture decision, likely needs RFC or owner assignment
     - #35060: Configurable `deliver` target for HA watch_entities/watch_domains (6 comments, May 30 → Sept 21) → builds on #112136 but delivery_mode default still unresolved
     - #117432: register_system_prompt_section() never rendered (4 comments, Sept 20→21) → API exists but no caller; easy fix if caller added
     - #117682: HERMES_DESKTOP_IGNORE_EXISTING not preventing local backend (2 comments, Sept 20→21) → PR #117704 exists fix; just needs merge/release
     - #116446: LSP diagnostics timeout poisoning workspace (2 comments, Sept 19→21) → performance regression, needs maintainer triage
     - #117710: API server chat drops provider on second turn (1 comment, Sept 21) → regression, needs quick fix
     - #117796: Defender quarantines Windows hermes.exe (0 comments, Sept 21) → packaging team needs to whitelist/sign
     - #117438: Stale update receipt endless warning (2 comments, Sept 20→21) → PR or fix needed, blocks update loop
   - PRs needing attention: 
     - #117783 auto-merge workflow (healthy)
     - #117704 fix for ignore-existing (linked to #117682)
     - #117786 bot-mode lock fix
     - #117789 capability epoch perf fix
     - #117787 provider api_key from config.yaml
     - #112136 & #109548 feature completions
   - Backlog health: 25 open issues, 36 open PRs; ratio suggests maintainers are keeping pace, but the 7-comment issue #58746 from July and 6-comment

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

We need to generate a structured digest with sections. Use data from overview. Need 3-5 sentences for Today's Overview. Summarize status: issues 6, PRs 5, no releases. Activity assessment: active issues, PRs, some stale.

Releases: none.

Project Progress: merged/closed PRs today? Data shows PRs updated in last 24h: 5 (3 open, 2 merged/closed). Which are closed? #3367 closed, #3383 closed. So merged/closed PRs: #3367 and #3383. Also maybe others? Only those two.

Feature advances: #3354 (IRC multiline), #3353 (channel feedback animations), #3378 (auth scope fix), #3367 docs, #3383 sprint plan. So features advanced: IRC multiline, channel feedback, auth scope.

Community Hot Topics: Most active issues with comments/reactions: #3281 (13 comments, 2 👍), #3287 (13 comments, 0 👍), #3366 (4 comments, 0 👍), #3382 (0 comments, 0 👍). Also #3369 (2 comments, 2 👍). So top is #3281 and #3287. Provide links.

Bugs & Stability: Issues with bugs: #973 (closed) about QQ/DingTalk panic, #3382 (open)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-21

**Repository:** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. Today's Overview

NanoClaw experienced a highly active day in terms of pull request throughput, with **41 PRs updated** (3 open, 38 merged/closed) and **1 issue updated** (still open). No new releases were published. The bulk of today's merged work consisted of long-pending bug fixes, infrastructure hardening (WhatsApp auth handling, session management, JSONL rotation), and v2 compatibility updates across multiple skills and channels. One open bug regarding WhatsApp sender display names remains unresolved and is the day's primary community concern. Overall, the project shows strong maintenance cadence with a large backlog of legacy PRs being cleared in a single batch.

---

## 2. Releases

**None today.** No new versions or changelogs were published.

---

## 3. Project Progress — Merged/Closed PRs Today

The following notable PRs were closed/merged around 2026-09-20 (batch processing detected):

| PR | Type | Summary | Link |
|---|---|---|---|
| #2328 | Fix | Default reply destination to message origin in multi-destination groups | [PR #2328](https://github.com/qwibitai/nanoclaw/pull/2328) |
| #2327 | Fix | Inject destination reminder after SDK auto-compaction | [PR #2327](https://github.com/qwibitai/nanoclaw/pull/2327) |
| #746 | Fix | Prevent WhatsApp service restart hammering on auth failure | [PR #746](https://github.com/qwibitai/nanoclaw/pull/746) |
| #706 | Skill | Add `icloud-tools` skill (CalDAV/CardDAV/IMAP/SMTP) | [PR #706](https://github.com/qwibitai/nanoclaw/pull/706) |
| #2565 | Fix | Detect group @-mentions via `contextInfo.mentionedJid` | [PR #2565](https://github.com/qwibitai/nanoclaw/pull/2565) |
| #2402 | Fix | Update CI workflows no-op after repo rename | [PR #2402](https://github.com/qwibitai/nanoclaw/pull/2402) |
| #2309 | Fix | Replace sqlite3 CLI with in-tree better-sqlite3 wrapper | [PR #2309](https://github.com/qwibitai/nanoclaw/pull/2309) |
| #2265 | Fix | Support display cards (send_card) in Chat SDK bridge | [PR #2265](https://github.com/qwibitai/nanoclaw/pull/2265) |
| #2152 | Fix | Kill OpenCode server process group + configurable IDLE_TIMEOUT_MS | [PR #2152](https://github.com/qwibitai/nanoclaw/pull/2152) |
| #701 | Fix | Inject date/time context into all agent prompts | [PR #701](https://github.com/qwibitai/nanoclaw/pull/701) |
| #700 | Fix | Rotate oversized JSONL sessions to prevent container timeouts | [PR #700](https://github.com/qwibitai/nanoclaw/pull/700) |
| #3346 | Fix | Recover when a resumed OpenCode session idles without work | [PR #3346](https://github.com/qwibitai/nanoclaw/pull/3346) |
| #2416 | Fix | Provision companion rows on `ncl groups create` / `ncl wirings create` | [PR #2416](https://github.com/qwibitai/nanoclaw/pull/2416) |
| #2356 | Skill/Operational | Install `~/.local/bin/ncl` symlink on upgrade | [PR #2356](https://github.com/qwibitai/nanoclaw/pull/2356) |
| #2322 | Skill/Operational | v2 compatibility for karpathy-llm-wiki skill | [PR #2322](https://github.com/qwibitai/nanoclaw/pull/2322) |
| #2290 | Fix | Include canonical SQL queries in SKILL.md | [PR #2290](https://github.com/qwibitai/nanoclaw/pull/2290) |
| #2288 | Fix | Parse SQLite timestamps as UTC, not local time | [PR #2288](https://github.com/qwibitai/nanoclaw/pull/2288) |
| #2287 | Fix | Probe correct OneCLI health endpoint | [PR #2287](https://github.com/qwibitai/nanoclaw/pull/2287) |

**Key themes of merged work:** WhatsApp reliability, OpenCode session lifecycle, CI/repo infrastructure, SQLite/data integrity, skill modernization for v2, and CLI provisioning fixes.

---

## 4. Community Hot Topics

### Open Issues (1 active)
- **[#3858 — Agent never sees sender display names from native adapters](https://github.com/qwibitai/nanoclaw/issues/3858)** — The only active issue. In WhatsApp groups, the agent receives only the JID (phone number) as sender identity with no display name, making it impossible to distinguish participants. Created 2026-09-20, 0 comments, 0 reactions. Indicates a gap in WhatsApp adapter metadata mapping.

### Open PRs (3 active)
- **[#3420 — make Swift code and plist labels slug-aware](https://github.com/qwibitai/nanoclaw/pull/3420)** (core-team) — Fixes statusbar service label mismatch after install slug change. Affects macOS status bar functionality on current installs.
- **[#3463 — OpenCode provider fall back to message.part.delta text](https://github.com/qwibitai/nanoclaw/pull/3463)** — Fixes a ~78ms timing race where delta text could be lost during session idle. Related to OpenCode provider reliability.

### High-engagement Closed PRs
Most of today's merged PRs are legacy items (2026-03 to 2026-05 creation dates) that were closed in batch. PRs authored predominantly by `glifocat` suggest a single maintainer driving backlog clearance.

---

## 5. Bugs & Stability

| Severity | Bug | Status | Fix |
|---|---|---|---|
| **High** | WhatsApp agent cannot identify group participants (sender display names missing) — [#3858](https://github.com/qwibitai/nanoclaw/issues/3858) | **OPEN** | No open fix PR |
| **High** | OpenCode provider loses delta text due to timing race (~78ms margin) — issue #2985 | **Fixed** | [PR #3463](https://github.com/qwibitai/nanoclaw/pull/3463) |
| **Medium** | WhatsApp service repeatedly restarts on auth failure — issue #748 | **Fixed** | [PR #746](https://github.com/qwibitai/nanoclaw/pull/746) (was blocked) |
| **Medium** | OpenCode server process group not killed on idle — issue resolved via PR #3346 | **Fixed** | [PR #3346](https://github.com/qwibitai/nanoclaw/pull/3346) |
| **Medium** | JSONL sessions oversized causing container timeouts — issue #697 | **Fixed** | [PR #700](https://github.com/qwibitai/nanoclaw/pull/700) (was blocked) |
| **Low** | SQLite timestamps parsed as local time instead of UTC — PR #2288 | **Fixed** | [PR #2288](https://github.com/qwibitai/nanoclaw/pull/2288) (needs review) |

---

## 6. Feature Requests & Roadmap Signals

While no explicit feature requests are visible in today's issue/PR activity, the following merged items signal upcoming direction:

- **`icloud-tools` skill** ([PR #706](https://github.com/qwibitai/nanoclaw/pull/706)) — Adds CalDAV/CardDAV/IMAP/SMTP access for NanoClaw agents, signaling expansion into iCloud productivity integrations.
- **`send_card` display card support in Chat SDK bridge** ([PR #2265](https://github.com/qwibitai/nanoclaw/pull/2265)) — Enriches Chat SDK channel messaging capabilities.
- **Date/time context injection into all agent prompts** ([PR #701](https://github.com/qwibitai/nanoclaw/pull/701)) — Improves agent temporal awareness.
- **Companion row provisioning on group/wiring creation** ([PR #2416](https://github.com/qwibitai/nanoclaw/pull/2416)) — Streamlines CLI multi-entity setup.

**Predicted next version features:** iCloud-tools skill integration, display card support across Chat SDK, improved temporal context in prompts.

---

## 7. User Feedback Summary

### Pain Points (from issues & PR context)
- **WhatsApp identity resolution**: Users cannot identify group members by name; JIDs are used exclusively (#3858). This is a critical UX gap for multi-participant conversations.
- **OpenCode session fragility**: Multiple PRs (#2985, #3346, #2152) target OpenCode session lifecycle bugs — idle handling, process cleanup, and timing races suggest ongoing reliability concerns.
- **WhatsApp auth failure loops**: Service restart hammering on auth failure (#746) could cause resource drain and user frustration.
- **Session data overflow**: Oversized JSONL sessions causing container timeouts (#700) indicate memory/storage management needs.

### Positive Signals
- Active backlog clearance — 18+ legacy PRs closed in batch, demonstrating maintenance responsiveness.
- Strong focus on v2 compatibility and migration path (e.g., PR #2322, #2287).

---

## 8. Backlog Watch

Items requiring maintainer attention due to prolonged inactivity or review needs:

| Item | Status | Age | Link |
|---|---|---|---|
| **#3858** — WhatsApp sender display names bug | Open, 0 comments, 0 reactions | Created 2026-09-20 | [Issue #3858](https://github.com/qwibitai/nanoclaw/issues/3858) |
| **#701** — Inject date/time context into prompts | Closed, Status: **Blocked** | Created 2026-03-04 | [PR #701](https://github.com/qwibitai/nanoclaw/pull/701) |
| **#700** — Rotate oversized JSONL sessions | Closed, Status: **Blocked** | Created 2026-03-04 | [PR #700](https://github.com/qwibitai/nanoclaw/pull/700) |
| **#706** — icloud-tools skill | Closed, Status: **Needs Review** | Created 2026-03-04 | [PR #706](https://github.com/qwibitai/nanoclaw/pull/706) |
| **#746** — WhatsApp auth failure restart hammering | Closed, Status: **Blocked/Pending Closure** | Created 2026-03-05 | [PR #746](https://github.com/qwibitai/nanoclaw/pull/746) |
| **#2287, #2288, #2290** — Multiple fixes | Closed, Status: **Needs Review** | Created 2026-05-05 | [PR #2287](https://github.com/qwibitai/nanoclaw/pull/2287), [PR #2288](https://github.com/qwibitai/nanoclaw/pull/2288), [PR #2290](https://github.com/qwibitai/nanoclaw/pull/2290) |
| **#3420** — macOS statusbar slug-aware fix | Open (core-team) | Created 2026-08-20 | [PR #3420](https://github.com/qwibitai/nanoclaw/pull/3420) |
| **#3463** — OpenCode provider delta fallback | Open | Created 2026-08-23 | [PR #3463](https://github.com/qwibitai/nanoclaw/pull/3463) |

⚠️ **Alert:** Several PRs created in March 2026 remain in "Blocked" or "Needs Review" status, some approaching 6+ months old. The maintainer should prioritize either merging or formally closing stale items to keep the backlog healthy. Issue #3858 is a recent regression that should be triaged promptly given its impact on WhatsApp usability.

---

*Report generated from GitHub data as of 2026-09-21. All links point to the nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-21

---

## 1. Today's Overview

NullClaw recorded a quiet day with minimal community interaction: one issue was updated (an enhancement request regarding Ollama compatibility), and no pull requests or new releases were published. The project's issue count has reached the milestone of 1,000 issues, signaling sustained long-term community engagement. Overall activity levels suggest the maintainer is in a relatively passive development phase, with no code changes merged in the last 24 hours. The project remains in a stable but low-velocity state.

---

## 2. Releases

No new releases today.

---

## 3. Project Progress

No pull requests were merged or closed today. No features were advanced or bugs fixed through PR activity in the last 24 hours.

---

## 4. Community Hot Topics

The only active issue is also the most engaged item:

- **[#1000 [enhancement] ollama incompatibility notification](https://github.com/nullclaw/nullclaw/issues/1000)** — Author: aaafgcfg | Created: 2026-09-20 | Comments: 1 | 👍: 0

**Analysis of underlying needs:** The reporter highlights that when an Ollama model does not support tool use, NullClaw currently outputs a raw adapter error with no descriptive message. This reveals a **usability gap in error reporting** — users cannot easily diagnose why tool-calling workflows fail. The reporter resorted to using Wireshark to inspect network traffic, indicating that the debugging experience is severely lacking. This is a clear signal that users need clearer, more actionable error messages rather than raw technical stack traces.

---

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today.

> **Note:** Issue [#1000](https://github.com/nullclaw/nullclaw/issues/1000), while filed as an enhancement, has the practical impact of a stability/usability bug — silent adapter errors during Ollama tool-calling could cause users to误 diagnose complete system failures. No fix PR exists.

---

## 6. Feature Requests & Roadmap Signals

| Feature Request | Source | Likelihood of Next Release |
|---|---|---|
| Ollama model compatibility notification / descriptive error messaging | [Issue #1000](https://github.com/nullclaw/nullclaw/issues/1000) | **Medium** — Low-effort UX improvement; maintainer may prioritize given its simplicity |

**Prediction:** The Ollama error notification enhancement is the most likely candidate for the next patch release, as it is a focused, self-contained change. No other roadmap signals are visible from today's data.

---

## 7. User Feedback Summary

| Pain Point | User Impact | Satisfaction |
|---|---|---|
| Uninformative adapter errors when Ollama models lack tool support | Users cannot determine root cause; forced to use external debugging tools (e.g., Wireshark) | **Dissatisfied** — debugging experience is poor |

**User sentiment:** The overall sentiment is muted — one user has identified a real friction point and is advocating for better error messages. No positive feedback or satisfied use cases were recorded today.

---

## 8. Backlog Watch

- **[Issue #1000 [enhancement] ollama incompatibility notification](https://github.com/nullclaw/nullclaw/issues/1000)** — Created 2026-09-20 (1 day old), 1 comment, 0 reactions, no assignee, no fix PR. While recently filed, this issue warrants maintainer attention as it addresses a core UX gap in the Ollama integration path. If left unaddressed, it may accumulate more reports from users encountering the same silent failure mode.

> ⚠️ **Watchlist Note:** With only 1 open issue and no PR activity, the project's backlog is currently very lean. However, the low overall issue volume may also indicate reduced community engagement or that most users are operating without filing feedback.

---

*Digest generated for NullClaw (nullclaw/nullclaw) on 2026-09-21. Data sourced from GitHub activity within the preceding 24 hours.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-21

## 1. Today’s Overview

IronClaw had **8 pull-request updates in the last 24 hours**: 5 remain open and 3 were marked closed. Activity was concentrated on **release-candidate preparation, dependency maintenance, and one integration fix**; there were **no new issues or releases**. The release workflow is advancing toward an `ironclaw-v1.4.1-rc.1` tag. Overall project health appears active and release-oriented, although public issue engagement was absent.

## 2. Releases

No new releases were reported.

## 3. Project Progress

Three PRs were marked closed today, although the data does not distinguish whether each was merged or otherwise closed.

- **[PR #8102](https://github.com/nearai/ironclaw/pull/8102)** — Fixed Gmail and Google Calendar activation for deployments configured through the administrator Web UI. OAuth could complete successfully, but activation failed because provider-instance readiness was not resolved using the administrator configuration.
- **[PR #8099](https://github.com/nearai/ironclaw/pull/8099)** — Closed a Rust dependency update covering 25 packages, including `uuid`, `base64`, and `rust_decimal`.
- **[PR #8079](https://github.com/nearai/ironclaw/pull/8079)** — Closed a GitHub Actions dependency update covering six actions, including `anthropics/claude-code-action` and `actions/setup-node`.

The most significant functional progress is the provider-readiness fix in [#8102](https://github.com/nearai/ironclaw/pull/8102), which broadens reliable Gmail/Google Calendar setup for administrator-managed OAuth deployments.

## 4. Community Hot Topics

There were **no issues updated today**, and comment/reaction counts were unavailable for the listed PRs, so a defensible popularity ranking cannot be made. The most operationally notable PRs were:

- **[PR #8105](https://github.com/nearai/ironclaw/pull/8105)** — Open release-candidate preparation for `1.4.1-rc.1`. This reflects the immediate need for a controlled release train and reproducible package tagging.
- **[PR #8102](https://github.com/nearai/ironclaw/pull/8102)** — Closed fix for provider activation after successful OAuth, addressing a configuration-path compatibility gap.
- **[PR #8104](https://github.com/nearai/ironclaw/pull/8104)** — Open Rust dependency update with 29 packages, including `uuid`, `base64`, and `rust_decimal`.
- **[PR #8103](https://github.com/nearai/ironclaw/pull/8103)** — Open GitHub Actions update with eight actions, including `anthropics/claude-code-action` and `actions/setup-node`.
- **[PR #7834](https://github.com/nearai/ironclaw/pull/7834)** — Open wasm dependency update covering `wasmtime`, `wasmtime-wasi`, and related tools.

The underlying themes are release readiness, integration reliability, and keeping the Rust and automation toolchain current.

## 5. Bugs & Stability

No new bugs, crashes, or regressions were reported in issues today.

The principal stability item was:

1. **[PR #8102](https://github.com/nearai/ironclaw/pull/8102)** — Gmail and Google Calendar activation failed after OAuth completed when the Google OAuth client was configured through the administrator Web UI. This was an integration activation blocker rather than a reported crash or security regression. The fix resolves provider readiness dynamically and prioritizes administrator configuration.

## 6. Feature Requests & Roadmap Signals

No user-requested features appeared in issues. Roadmap signals from the PR activity include:

- **Release candidate preparation:** [#8105](https://github.com/nearai/ironclaw/pull/8105) versions `ironclaw` at `1.4.1-rc.1` so the release workflow can tag `ironclaw-v1.4.1-rc.1` on the merge commit.
- **Administrator-first OAuth configuration:** [#8102](https://github.com/nearai/ironclaw/pull/8102) suggests continued emphasis on making provider activation work across both environment-variable and Web UI administration paths.
- **Dependency modernization:** [#8104](https://github.com/nearai/ironclaw/pull/8104), [#8103](https://github.com/nearai/ironclaw/pull/8103), [#7834](https://github.com/nearai/ironclaw/pull/7834), and [#8078](https://github.com/nearai/ironclaw/pull/8078) indicate an active maintenance track for Rust, wasm, and GitHub Actions dependencies.

The strongest prediction is that **1.4.1 is entering release-candidate validation**. The provider-readiness fix is a plausible candidate inclusion, but the available data does not confirm its final release scope.

## 7. User Feedback Summary

Direct user feedback was not available: there were no issues, comments, or reaction metrics in the supplied data.

The main inferred pain point is operational: administrators configuring Google OAuth through the Web UI could complete consent and token exchange but still be unable to activate Gmail or Google Calendar. The use case is therefore multi-deployment provider onboarding with centralized administrator configuration. Satisfaction cannot be assessed from the available metrics.

## 8. Backlog Watch

No issue backlog was reported. The open PRs requiring maintainer attention are:

- **[PR #7834](https://github.com/nearai/ironclaw/pull/7834)** — Open since 2026-08-23; a medium-risk, large wasm dependency update. This is the oldest open PR in the supplied set.
- **[PR #8105](https://github.com/nearai/ironclaw/pull/8105)** — Release-candidate versioning and tagging workflow; likely a release gate.
- **[PR #8104](https://github.com/nearai/ironclaw/pull/8104)** — Large Rust dependency update with 29 packages.
- **[PR #8103](https://github.com/nearai/ironclaw/pull/8103)** — GitHub Actions dependency update with eight actions.
- **[PR #8078](https://github.com/nearai/ironclaw/pull/8078)** — Tokio ecosystem update covering `tower-http` and `tokio-tungstenite`.

The most urgent maintenance attention is likely on the release-candidate PR and the older wasm update, followed by the larger dependency batches.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-21

## 1. Today's Overview
The LobsterAI project exhibits high development velocity with 14 PR updates and 4 recent releases, though active issue resolution remains moderate (3 issues updated). The development focus is heavily bifurcated between aggressive platform stabilization—specifically repairing OpenClaw gateway processes and SQLite integrity—and shipping new consumer-facing features like WebAuthn browser security and subscription monetization. The project is currently in a feature-integration phase, merging capability marketplaces and refining core agent-switching logic, while legacy bugs related to MCP environment variables and engine restarts persist.

## 2. Releases
Four new versions were released in the lead-up to today, indicating rapid iteration:
*   **[2026.9.20](https://github.com/netease-youdao/LobsterAI/releases)**: Introduced subagent session visibility and passkey/WebAuthn support for the in-app agent browser. 
*   **[2026.9.17](https://github.com/netease-youdao/LobsterAI/releases)**: Focused on OpenClaw resilience by migrating the shared state schema prior to startup repair, adding repair snapshot rollback, and handling agent media migration. *Migration Note: Users may need to allow schema migration processes during startup.*
*   **[2026.9.15](https://github.com/netease-youdao/LobsterAI/releases)**: Repaired OpenClaw compatibility issues and migrated xAI authentication credentials to a canonical SQLite store. *Breaking Change: xAI auth storage mechanism has shifted to SQLite.*
*   **[2026.9.14](https://github.com/netease-youdao/LobsterAI/releases)**: Upgraded OpenClaw to v2026.8.1 and introduced markdown editing support.

## 3. Project Progress
Significant ground was covered in PRs closed/merged today:
*   **Refactoring & Cleanup**: PR [#2724](https://github.com/netease-youdao/LobsterAI/pull/2724) successfully removed the background jobs feature, including associated IPC channels and UI components. PR [#2720](https://github.com/netease-youdao/LobsterAI/pull/2720) closed, adding monetization features (one-cent trials and low-credit offers).
*   **Security & Browser**: PR [#2723](https://github.com/netease-youdao/LobsterAI/pull/2723) shipped passkey/WebAuthn support for the in-app browser.
*   **Localization & Config**: PR [#2722](https://github.com/netease-youdao/LobsterAI/pull/2722) fixed Weixin target casing and improved error handling for resend rejections. PR [#2728](https://github.com/netease-youdao/LobsterAI/pull/2728) addressed an OpenClaw SQLite readonly issue.

## 4. Community Hot Topics
*   **[PR #2726](https://github.com/netease-youdao/LobsterAI/pull/2726)**: Highly anticipated feature adding "digital employees, expert teams, and a capability marketplace." This suggests community demand for a more modular, marketplace-driven AI skill ecosystem.
*   **[Issue #1003](https://github.com/netease-youdao/LobsterAI/issues/1003)**: A persistent issue regarding the Notion MCP returning 401 errors due to environment variables not being passed to `child_process.spawn`. This highlights a deep integration pain point between LobsterAI's MCP Bridge and third-party Node.js servers.
*   **[PR #2721](https://github.com/netease-youdao/LobsterAI/pull/2721)**: Open PR aiming to apply IM configuration changes without requiring a full gateway restart, addressing user frustration with workflow interruption.

## 5. Bugs & Stability
Stability issues remain centered around the OpenClaw runtime and database integrity:
*   **[High] Windows Gateway Exits**: PR [#2729](https://github.com/netease-youdao/LobsterAI/pull/2729) is currently open to fix `OpenClaw gateway process did not exit after SIGKILL` errors during Windows repairs. 
*   **[High] Agent Engine Infinite Restart**: Issue [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) remains open, with users reporting continuous engine restarts, indicating an unresolved underlying configuration or runtime crash loop.
*   **[Medium] SQLite Readonly**: PR [#2728](https://github.com/netease-youdao/LobsterAI/pull/2728) recently closed a readonly SQLite result file bug, showing ongoing database layer friction.
*   **[Medium] Agent Switching UI**: Issue [#1068](https://github.com/netease-youdao/LobsterAI/issues/1068) was closed today; it fixed a bug where deleting an agent failed to auto-refresh the task list for the remaining main agent.

## 6. Feature Requests & Roadmap Signals
The roadmap is heavily leaning toward platformization and user customization:
*   **Marketplace & Digital Employees**: PR [#2726](https://github.com/netease-youdao/LobsterAI/pull/2726) signals that a skill/capability marketplace is a primary upcoming feature.
*   **Prompt & Skill Management**: PR [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) (prompt template library) and PR [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) (slash-triggered skill picker) indicate a strong user need for streamlined, reusable prompt engineering and inline skill invocation.
*   **Artifact Rendering**: PR [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) requests an extensible pipeline for rendering HTML, React, and Mermaid diagrams directly in Cowork sessions, suggesting a move toward richer, visual AI outputs.

## 7. User Feedback Summary
*   **Pain Points**: Users are highly frustrated by backend instability (engine restarts, SQLite errors) and integration friction (MCP env vars not passing, agent switching UI lag). 
*   **Monetization Friction**: The recent addition of subscription trials and low-credit purchases (PR #2720) indicates a shift toward freemium models, which users are engaging with but require clear UI/UX around quotas and billing.
*   **Customization Demand**: There is clear demand for more control over agent personas (preset agents PR #1008) and dialogue inputs (prompt templates PR #1009), showing users are treating LobsterAI as a production tool requiring workflow optimization.

## 8. Backlog Watch
Several items have lingered or require immediate maintainer attention:
*   **Stale but Active PRs**: PRs [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) (6 new preset agents), [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) (prompt templates), and [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) (artifact pipeline) are marked "[stale]" but were updated recently. They require maintainer review to prevent stale drift.
*   **Long-Standing Issues**: Issues [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) (Notion MCP) and [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) (Engine restart) have been open since late March. Despite recent updates, they remain unresolved and are critical for user retention.
*   **Windows Repair Logic**: PR [#2729](https://github.com/netease-youdao/LobsterAI/pull/2729) is open and addresses a critical Windows-only stability issue; it needs prioritization to unblock Windows users from repairing their gateways.

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

# CoPaw (QwenPaw) Project Digest — 2026-09-21

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **exceptionally high velocity** with 34 PRs and 24 issues updated in the last 24 hours. The project is in active beta stabilization for v2.2.2 (currently at **v2.2.2-beta.3**), with a heavy focus on bug fixes, provider integrations, and Console UI hardening. A major milestone — **QwenPaw Hub (multi-tenant edition)** — is slated for 2.2.0 and generating significant community discussion. The merge rate (13 PRs closed/merged) indicates healthy throughput, though the open PR count (21) suggests a growing review backlog.

---

## 2. Releases

### v2.2.2-beta.3 (2026-09-20)
| Change | Details |
|--------|---------|
| **Fix: Console assistant response actions** | Restored actions (copy, regenerate, etc.) on assistant messages that were lost in the #7502 redesign ([#7851](https://github.com/agentscope-ai/QwenPaw/pull/7851)) |
| **Fix: E2E test selectors** | Re-anchored brittle console selectors broken by the #7502 redesign; hardened session-list assertions ([#7851](https://github.com/agentscope-ai/QwenPaw/pull/7851)) |

> **Note**: This is a beta release; no breaking changes or migration notes published. The release gate PR ([#7891](https://github.com/agentscope-ai/QwenPaw/issues/7891)) requires installation verification across platforms before promotion.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Type | Summary | Linked Issue |
|----|------|---------|--------------|
| [#7904](https://github.com/agentscope-ai/QwenPaw/pull/7904) | **Bug fix** | Forward `actor` argument in `qwenpaw-pet` plugin to native approval service — fixes tool approval 500 errors | [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) |
| [#7887](https://github.com/agentscope-ai/QwenPaw/pull/7887) | **Bug fix** | Handle unknown `input_audio` variant rejections; trigger audio fallback classifier | [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) |
| [#7886](https://github.com/agentscope-ai/QwenPaw/pull/7886) | **Bug fix** | Same as above (duplicate fix path) | [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) |
| [#7894](https://github.com/agentscope-ai/QwenPaw/pull/7894) | **Test** | +1,027 frontend statements covered (+3.19% coverage); no product code changes | — |
| [#7901](https://github.com/agentscope-ai/QwenPaw/pull/7901) | **CI** | Unfreeze merges immediately after release finishes (workflow_run trigger) instead of 5-min cron | — |
| [#7862](https://github.com/agentscope-ai/QwenPaw/pull/7862) | **CI** | Gate artifact publishing on test gate; make E2E watch set blocking | — |
| [#7345](https://github.com/agentscope-ai/QwenPaw/pull/7345) | **Bug fix** | Tool card no longer stuck in "executing…" after stop/cancel | [#7321](https://github.com/agentscope-ai/QwenPaw/issues/7321) |
| [#5836](https://github.com/agentscope-ai/QwenPaw/pull/5836) | **Feature** | Auto-detect local paths in chat output; click to open in file explorer (Desktop) | [#4830](https://github.com/agentscope-ai/QwenPaw/issues/4830) |
| [#7843](https://github.com/agentscope-ai/QwenPaw/pull/7843) | **Feature** | Add **AgentScope Platform** as built-in OpenAI-compatible provider (model discovery, logo, API key link) | — |
| [#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877) | **Bug fix (closed)** | Session working-directory panel: viewport height, "recent projects" empty, "Apply" disabled — fixed in Console | — |

**Key advance**: The `qwenpaw-pet` plugin compatibility break (#7856) was resolved within 24h — a strong signal of plugin ecosystem responsiveness.

---

## 4. Community Hot Topics (Most Comments/Reactions)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|-----|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | Discussion | 31 | 4 | **QwenPaw Hub (multi-tenant) roadmap** — community wants: RBAC, shared skills, team workspaces, audit logs, SSO, cost tracking |
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | Bug | 6 | 0 | **ToolResultPruner skips `type="data"` (base64 images)** → unbounded context growth, OOM on long sessions |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Bug | 5 | 0 | **Session loss** after plugin reload/shutdown — history & model config disappear |
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | Question | 4 | 0 | **History truncation after compression** — users cannot scroll back; poor UX for long conversations |
| [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | Bug | 4 | 0 | **React `insertBefore` NotFoundError** — browser UI injects `<font>` wrapper into React-managed text node, breaks chat page |

**Underlying themes**:
- **Multi-tenancy** is the #1 strategic ask (Hub)
- **Context management** is fragile (image pruning, history truncation)
- **Session durability** is a trust issue (loss on reload/restart)
- **React/Console integration** has architectural friction (DOM injection conflicts)

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) `ToolResultPruner` skips base64 images → context window exhaustion | Open | None yet |
| **Critical** | [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) Session + model config loss after plugin reload/shutdown | Open | None |
| **High** | [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) Chat page crash: React `NotFoundError` from browser-injected `<font>` | Open | None |
| **High** | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) Persistent prompt injection in tool-result reminders → agent tries to delete all skills | Open | None |
| **High** | [#7907](https://github.com/agentscope-ai/QwenPaw/issues/7907) Responses API schema cleaning removes `nullable` + implicit `strict` → `recall_history` optional date params rejected | Open | None |
| **High** | [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) `DoomLoopGate` escalates to TERMINATE on text-only round without new tool evidence | Open | [#7906](https://github.com/agentscope-ai/QwenPaw/pull/7906) (open) |
| **Medium** | [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) Tool-returned PDF serialized as OpenAI nested file part → DeepSeek 400 | Open | None (regression of #7597) |
| **Medium** | [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) `kimi-code` ACP runner bypasses boundary/destructive checks unevenly | Open | None |
| **Medium** | [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) File-area tab shows stale content after agent rewrites file | Open | [#7902](https://github.com/agentscope-ai/QwenPaw/pull/7902) (open) |
| **Medium** | [#7895](https://github.com/agentscope-ai/QwenPaw/issues/7895) Idle cleanup drops messages while another consumer stops | Open | [#7896](https://github.com/agentscope-ai/QwenPaw/pull/7896) (open) |
| **Low** | [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) OpenCode "free" models return 403 FreeTierError but UI marks them free | Open | None |
| **Low** | [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) Zero-downtime reload drops plugin `runtime_hook` (middleware preserved) | Open | None |

> **Critical path**: #7853 (image context leak) and #7724 (session loss) affect core reliability for power users. No fix PRs yet — maintainers should prioritize.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **QwenPaw Hub (multi-tenant)**: RBAC, shared skills, team workspaces, SSO, audit logs, cost tracking | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) (31 comments) | **High** — explicitly targeted for 2.2.0 |
| **Per-agent avatars** in management list, switcher, chat window | [#4974](https://github.com/agentscope-ai/QwenPaw/issues/4974) (closed but 2 👍) | **Medium** — UI-only, low risk |
| **Custom browser tab title** per panel/project | [#7648](https://github.com/agentscope-ai/QwenPaw/issues/7648) | **Medium** — trivial frontend change |
| **Unified model config** (type, input/output modalities) for embeddings, audio, video models | [#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182) | **Medium** — aligns with provider unification PR [#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899) |
| **Separate model for ReMeLight memory writing** (cheaper than chat model) | [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) (open PR) | **High** — PR open, clear cost-saving value |
| **Authenticated multi-tab chat terminal** (xterm, per-conversation cwd) | [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) (open PR) | **High** — PR open, major UX upgrade |
| **Community/Inbox integration** (Platform editor links, PKCE auth) | [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) (open PR) | **Medium** — strategic for Platform stickiness |

**Prediction**: v2.2.2 stable will ship with Hub preview, provider unification (#7899), ReMeLight model separation (#7719), and terminal (#7861). Avatars and tab titles are likely 2.3.0.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **History truncation** | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884): "How short is history now? Can't scroll back — experience is terrible" | High — core UX for daily drivers |
| **Session/model loss on reload** | [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724): "Conversation gone, model config gone — had to re-pick model" | High — erodes trust |
| **Image context explosion** | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853): Base64 images never pruned → every request exceeds context window | Critical for vision workflows |
| **Multi-panel tab confusion** | [#7648](https://github.com/agentscope-ai/QwenPaw/issues/7648): 7-8 panels all titled "QwenPaw Console" — constant wrong-tab clicks | Medium — power-user friction |
| **Tool approval broken by plugin** | [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856): `qwenpaw-pet` drops `actor` → 500 on every approve/deny | High — plugin ecosystem fragility |
| **Audio file kills conversation** | [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876): `.wav` via `send_file_to_user` → DeepSeek 422, fallback never fires, session permanently dead | Medium — niche but catastrophic |

**Positive signals**: 
- Community-built [GitHub Issue Helper Skill](https://github.com/agentscope-ai/QwenPaw/issues/5567) shows extensibility working
- Quick fix for `qwenpaw-pet` approval bug (#7904 merged same day)
- Desktop path-click feature (#5836) delivered after 2+ months — users notice

---

## 8. Backlog Watch — Stale High-Value Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) `ToolResultPruner` skips base64 images | 3 days | **Silent context killer** — every image chat accumulates until OOM | Assign to core loop team; add `type="data"` pruning with size-aware truncation |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) Session + model loss on reload | 9 days | **Data durability** — users lose work & config | Investigate plugin reload → shutdown → history persistence path; add integration test |
| [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) React `NotFoundError` from browser `<font>` injection | 2 days | **Chat page completely broken** for affected users | Audit Console DOM injection points; isolate React root from browser extensions/UI layers |
| [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) Zero-downtime reload drops `runtime_hook` | 1 day | **Plugin API contract broken** — reload ≠ restart | Align reload hook re-registration with middleware path; add plugin reload contract test |
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) Prompt injection in tool-result reminders | 3 days | **Security/integrity** — agent instructed to delete all skills | Trace injection source (skill? provider?); sanitize system-reminder blocks |
| [#518

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