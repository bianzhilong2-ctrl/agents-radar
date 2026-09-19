# OpenClaw Ecosystem Digest 2026-09-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-19 02:18 UTC

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

# OpenClaw Project Digest - 2026-09-19

## 1. Today's Overview

OpenClaw experienced high activity today with 500 issues updated (352 open/active, 148 closed) and 500 pull requests (271 open, 229 merged/closed). The latest release v2026.9.5 focuses on safer upgrades and retained history preservation. The project maintains strong community engagement with frequent bug fixes and feature enhancements across core functionality areas including gateway reliability, session management, and cross-platform compatibility.

## 2. Releases

**v2026.9.5** – *Latest Release*  
This release introduces improved upgrade safety and history retention mechanisms. The Doctor component now preserves session history and repeated-repair state during upgrades, preventing gateways from stalling or restarting repeatedly when a gateway is still initializing. Key improvements include avoiding repeated stalls on starting gateways and maintaining valid retained histories throughout upgrade cycles. See [v2026.9.5](https://github.com/openclaw/openclaw/release/v2026.9.5).

## 3. Project Progress

Several critical PRs were merged or opened today:

- **#151799** – Fixes workspace skill support file paths explanation ([PR](https://github.com/openclaw/openclaw/pull/151799))
- **#152321** – Stabilizes occupancy lifecycle tests under load ([PR](https://github.com/openclaw/openclaw/pull/152321))
- **#152337** – Improves Doctor to avoid loading completed plugin migration reports ([PR](https://github.com/openclaw/openclaw/pull/152337))
- **#151721** – Prevents sidebar previews from blocking conversation clicks ([PR](https://github.com/openclaw/openclaw/pull/151721))
- **#141057** – Formats Discord poll and sticker captions properly ([PR](https://github.com/openclaw/openclaw/pull/141057))
- **#152362** – Adds typed judgments to summarizer input for better compaction ([PR](https://github.com/openclaw/openclaw/pull/152362))

## 4. Community Hot Topics

The most active issues driving development include:

- **Memory Leaks & Performance** – Multiple critical issues report memory leaks (RSS growing from 350MB to 15.5GB in gateway processes) and performance bottlenecks affecting SQLite transactions and transcript handling. See [#91588](https://github.com/openclaw/openclaw/issues/91588) (Gateway Memory Leak) and [#112423](https://github.com/openclaw/openclaw/issues/112423) (SQLite transcript cleanup blocking event loop).
- **Stability & Reliability** – Frequent reports of gateway readiness timeouts on large fleets (12-minute startup on 632-agents), stuck subagent completions, and crash loops after upgrades. Issues [#149538](https://github.com/openclaw/openclaw/issues/149538) and [#148529](https://github.com/openclaw/openclaw/issues/148529) highlight systemic reliability concerns.
- **Cross-Platform Support** – Windows-specific issues dominate, including startup failures (v2026.9.3), config write conflicts, and missing feature parity between platforms. See [#150201](https://github.com/openclaw/openclaw/issues/150201) and [#143524](https://github.com/openclaw/openclaw/issues/143524).

## 5. Bugs & Stability

**Critical/Breakthrough Issues:**

- **#149538** – Main gateway reaches ready but never serves; event loop starved on 632-agent fleet. Requires immediate attention to prevent cascading failures.
- **#91588** – Severe memory leak causing OOM crashes; RSS escalates from 350MB to 15.5GB over days.
- **#148529** – Gateway takes ~12 minutes to become ready on large fleets compared to sub-second on earlier versions.
- **#143524** – Agent SQLite WAL grows unbounded (1.4–2.8 GB), blocking startup on Windows.
- **#151467** – Self-upgrade deadlock and rollback cron failure causing system instability.

**High-Priority Bugs:**
- **#97616** – Unreaped hook/tool child processes cause zombie accumulation and runtime degradation.
- **#48003** – Steer mode fails to inject messages mid-turn for main sessions.
- **#149538** – Event loop starvation prevents gateway readiness.
- **#112423** – Large SQLite transcript cleanup blocks gateway event loop.

Fix PRs are actively being developed for several of these issues, particularly around memory management, event loop health, and upgrade safety.

## 6. Feature Requests & Roadmap Signals

Several forward-looking enhancements are gaining traction:

- **Dynamic Model Discovery** – Issue #10687 highlights the need for fully dynamic model discovery across providers (OpenRouter, etc.), moving beyond static Pi-generated catalogs.
- **MaxTurns/maxToolCalls Configuration** – Feature request #9912 proposes adding limits on agent iterations to prevent runaway tool calling.
- **Accessibility Improvements** – #9637 suggests removing emojis and unicode symbols from the TUI for better screen reader compatibility.
- **Compaction Enhancements** – #152362 adds typed judgments to summarize inputs, reducing redundant processing in the summarizer pipeline.
- **Desktop Worker Support** – #152273 enables native desktop workers on macOS and Windows, expanding platform flexibility.

These signals indicate a roadmap toward greater reliability, cross-platform consistency, and enhanced developer experience.

## 7. User Feedback Summary

Users consistently report pain points related to:

- **Performance Degradation** – Slow response times and memory bloat during extended sessions, especially on large agent fleets.
- **Session Management Issues** – Lost subagent completions, phantom user messages, and inconsistent state transitions between turns.
- **Platform-Specific Failures** – Windows hosts frequently encounter startup failures and configuration conflicts.
- **Interface Friction** – Poor rendering of rich content (long code, tables) in Skill Cards and Discord integrations affects usability.

Overall sentiment is mixed—core functionality remains stable, but reliability and performance issues are becoming more prominent as the project scales to larger deployments.

## 8. Backlog Watch

Long-unaddressed issues requiring maintainer attention:

- **#149538** – Gateway readiness timeout on large fleets (critical stability risk)
- **#91588** – Persistent memory leak in gateway processes (high severity)
- **#143524** – Unbounded SQLite WAL growth on Windows (blocking startup)
- **#151467** – Self-upgrade deadlock and cron failure (system-wide instability)
- **#97616** – Zombie process accumulation from unreaped hooks (resource exhaustion)
- **#148529** – Extreme gateway startup latency on large clusters (performance bottleneck)

These items should be prioritized for the upcoming v2026.10 release cycle to address the most urgent reliability concerns.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Open-Source Ecosystem
**Date:** 2026-09-19 | **Prepared for:** Technical Decision-Makers & Developers

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing a consolidation phase, with 14 tracked projects ranging from high-velocity platforms with 500+ daily PRs to dormant repositories with zero activity in the last 24 hours. The landscape is bifurcated between full-featured gateway platforms (OpenClaw, ZeroClaw) and leaner, domain-specific tools (Moltis, PicoClaw). Common threads across the ecosystem include a pressing need for gateway reliability at scale, security hardening around command execution and tool calling, and a race toward runtime extensibility via plugin architectures. The community is signaling a shift from feature accumulation to stability, performance, and maintainability — with memory management, startup reliability, and cross-platform parity dominating bug trackers across every active project.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Releases | Health Score |
|---------|---------------|-------------|----------|-------------|
| **OpenClaw** | 500 (352 open, 148 closed) | 500 (271 open, 229 merged) | ✅ v2026.9.5 | 🟢 **High** |
| **ZeroClaw** | 21 | 50 | None (v0.8.x series) | 🟢 **High** |
| **Hermes Agent** | 50 (36 active, 14 closed) | 50 (31 open, 19 merged) | None (v0.21.3) | 🟡 **Moderate-High** |
| **LobsterAI** | 6 (none closed) | 22 (8 merged, 14 open) | RC (2026.9.18) | 🟡 **Moderate-High** |
| **NanoBot** | 5 | 14 | None | 🟡 **Moderate** |
| **NanoClaw** | 7 | 5 (0 merged) | None | 🟡 **Moderate** |
| **ZeptoClaw** | 0 | 3 (2 merged) | None | 🟢 **Moderate-Steady** |
| **PicoClaw** | 1 | 4 (1 merged) | None | 🟡 **Low-Moderate** |
| **IronClaw** | 1 | 2 (0 merged) | None | 🟠 **Low** |
| **Moltis** | 0 | 2 (0 merged) | None | 🟠 **Low** |
| **NullClaw** | 0 | 0 | None | 🔴 **Inactive** |
| **TinyClaw** | 0 | 0 | None | 🔴 **Inactive** |
| **CoPaw** | N/A | N/A | N/A | ❓ **Failed** |

**Key observation:** Only two projects — OpenClaw and ZeroClaw — demonstrate high-velocity development at scale. The median project has ~7 issues and ~5 PRs updated in 24 hours, indicating a heavily tail-weighted ecosystem where a few projects command the majority of community attention and contributor activity.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**

- **Largest community by orders of magnitude.** With 500 issues and 500 PRs updated in a single day, OpenClaw's community engagement dwarfs every other project (next closest: ZeroClaw at 21/50, Hermes at 50/50). This provides a deep triage pool and rapid bug-fix throughput.
- **Active release cadence.** The v2026.9.5 release demonstrates a sustainable shipping rhythm — upgrading safety mechanisms and history preservation show mature release engineering.
- **Cross-platform ambition.** Windows, macOS, and Linux are all active development targets, with dedicated PRs addressing platform-specific failures.
- **Fleet-scale architecture.** The project is explicitly designed for large deployments (632-agent fleets), a scale no other tracked project approaches.

**Technical Approach Differences:**

OpenClaw differentiates through its **gateway-centric architecture** — the project treats the gateway as the core runtime unit, with subagents, sessions, and plugins orbiting around it. This contrasts with:
- **ZeroClaw's** modular, protocol-first approach with WASM-based extensibility
- **Hermes Agent's** channel-first, Kanban-integrated model
- **NanoClaw's** CLI-first, task-oriented architecture

**Community Size Comparison:**

OpenClaw's issue-to-PR ratio (~1:1) suggests a healthy balance between bug reporting and code contribution. ZeroClaw's ratio (~1:2.4 PRs per issue) indicates a developer-heavy community with active contribution but fewer reported bugs — possibly reflecting better documentation or higher contributor-to-user ratio. Hermes Agent sits near parity (~1:1), consistent with a balanced contributor ecosystem.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Need |
|------------|------------------|---------------|
| **Memory & Resource Management** | OpenClaw (RSS 350MB→15.5GB leaks), NanoClaw (unbounded archive growth → OOM), Hermes (zombie processes) | Retention policies, cleanup mechanisms, bounded allocation strategies |
| **Gateway/Startup Reliability** | OpenClaw (12-min startup on 632 agents), LobsterAI (startup recovery after upgrades), IronClaw (OAuth activation failures), ZeroClaw (session preservation) | Faster initialization, crash recovery, graceful degradation |
| **Cross-Platform Consistency** | OpenClaw (Windows failures), Hermes (Windows gateway/update), NanoClaw (macOS statusbar), PicoClaw (cross-browser UI) | Unified testing, platform-specific abstractions, feature parity |
| **Plugin/Channel Architecture** | ZeroClaw (WASM plugin migration), PicoClaw (provider integrations), LobsterAI (channel fixes), Hermes (plugin catalog) | Extensibility without recompilation, standardized plugin contracts |
| **Provider Diversification** | ZeptoClaw (reasoning models), Moltis (Groq), IronClaw (DeepSeek V4), Hermes (Kimi, Muse) | OpenAI-compatible endpoint support, structured reasoning content parsing |
| **Security Hardening** | ZeroClaw (git command parsing bypass), ZeptoClaw (brute-force rate limiting), Hermes (OAuth grant durability) | Command injection prevention, approval gate enforcement, auth flow integrity |
| **Scheduled Task Management** | Hermes (cron worker crashes), NanoClaw (`--fresh-session`), LobsterAI (delivery receipts) | Reliable dispatch, stateless execution, delivery acknowledgment |
| **Conversation Archive Management** | NanoClaw (#3716/#3735 — unbounded growth), OpenClaw (history preservation during upgrades) | Retention policies, rotation mechanisms, size caps |
| **Mobile & UX Polish** | Hermes (Kanban touch, Android IME), PicoClaw (UI lag), NanoBot (mobile WebUI) | Touch targets, input handling, responsive performance |
| **Human-in-the-Loop Approval** | ZeroClaw (approval policy leakage), Hermes (approval consumption) | Durable approval gates, context-aware autonomy modes |

**Critical insight:** Memory management and gateway reliability are the two most universally reported pain points across the ecosystem — appearing in 5+ of 10 active projects. This suggests the industry has collectively hit a scalability wall with current agent architecture patterns.

---

## 5. Differentiation Analysis

### Target Users

| Project | Primary Audience | Architectural Philosophy |
|---------|-----------------|------------------------|
| **OpenClaw** | Enterprise/teams running large agent fleets | Gateway-first, subagent orchestration |
| **ZeroClaw** | Protocol-focused developers, security-conscious teams | Modular, WASM extensibility, RFC-driven |
| **Hermes Agent** | Individual power users, Kanban-centric workflows | Channel-first, task-board integration |
| **LobsterAI** | IM-heavy users (WeChat/QQ/Feishu), Chinese market | IM integration, delivery-focused |
| **NanoClaw** | CLI-first users, scheduled task operators | Task-oriented, stateless execution |
| **PicoClaw** | Resource-constrained environments (SBCs) | Lightweight, minimal footprint |
| **ZeptoClaw** | Provider-focused developers | Provider abstraction, reasoning model support |
| **Moltis** | Minimalist users, dependency-light environments | Small scope, focused functionality |
| **IronClaw** | Users requiring fine-grained model control | Profile-agnostic, reasoning depth control |

### Key Architectural Differences

1. **Extensibility Model:** ZeroClaw is the only project pursuing a **WASM-based runtime plugin architecture** (Issue #8850), representing a fundamental shift away from compile-time feature flags. All other projects use either

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026-09-19**  
*Data sourced from github.com/HKUDS/nanobot (last 24h: 5 issues updated, 14 PRs updated, 0 new releases)*

---

### 1. Today's Overview
NanoBot exhibits vigorous mid-cycle activity with 5 issues and 14 PRs updated in the past 24 hours. No new releases were published, but the merged PRs signal solid progress on cross-session stability, mobile WebUI usability, and multi-channel parity. With 9 open PRs awaiting review and 4 active issues being triaged, the project maintains healthy contributor momentum and appears well-prepared for a targeted minor release in the coming weeks.

### 2. Releases
No new versions tagged since the last digest. The most recent release cycle delivered several channel

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest (2026-09-19)

**Source:** [github.com/nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. Today's Overview

Hermes Agent saw heavy activity on 2026-09-19 with **50 issues** and **50 PRs** updated in the last 24 hours (36 active issues, 31 open PRs, 14 issues closed, 19 PRs merged/closed). **No new releases** were published. The issue mix is dominated by cron worker stability, Windows gateway/update quirks, and touch/dashboard UX bugs, while PR activity centers on the large `teknium1`-maintained **Bot Screen** feature branch and a steady flow of plugin catalog submissions and quality-of-life fixes. Maintainer engagement appears strong — multiple high-comment triage/cleanup issues were actively re-verified on 2026-09-18 — but several long-running bugs (Matrix invites, compression, Windows update) remain open for weeks, signaling a stretched maintenance bandwidth.

---

## 2. Releases

**None on 2026-09-19.** The latest release referenced in issue/PR bodies is **v0.21.3** (self-update target in #115466) and **v0.21.0** (referenced in #115571). Users reporting post-update failures (e.g., #115466) suggest v0.21.3 may have been recently pushed but no formal release note was captured in today's dataset.

---

## 3. Project Progress

### Recently Closed / Merged PRs (active today)
| PR | Summary | Area |
|---|---|---|
| [#115569](https://github.com/NousResearch/hermes-agent/pull/115569) | Fix touch tap on Kanban card moving the task | Kanban / Mobile UX |
| [#114585](https://github.com/NousResearch/hermes-agent/pull/114585) | Add `excel_line` memory-provider plugin to catalog | Memory / Plugin Catalog |
| [#100304](https://github.com/NousResearch/hermes-agent/pull/100304) | Fix fallback API-mode resolution for Kimi Code | Providers |
| [#102022](https://github.com/NousResearch/hermes-agent/pull/102022) | Enforce required `author` on new skills | Skills / Config |
| [#95740](https://github.com/NousResearch/hermes-agent/pull/95740) | Preserve replied voice-note semantics for Telegram STT | Telegram / TTS |
| [#99419](https://github.com/NousResearch/hermes-agent/pull/99419) | Batch standalone Telegram image sends as native albums | Telegram |
| [#112415](https://github.com/NousResearch/hermes-agent/pull/112415) | Bind pending approval consumption to reviewed payloads | Security / Approvals |
| [#95756](https://github.com/NousResearch/hermes-agent/pull/95756) | Require durable OAuth grants after MCP login | MCP / Auth |
| [#95483](https://github.com/NousResearch/hermes-agent/pull/95483) | Enforce exact PASS verdicts in Kanban review | Kanban |
| [#99420](https://github.com/NousResearch/hermes-agent/pull/99420) | Preserve media in interim commentary | Gateway / Media |
| [#99860](https://github.com/NousResearch/hermes-agent/pull/99860) | Clarify destructive `delegate_task stop` semantics | Delegation / Docs |
| [#111050](https://github.com/NousResearch/hermes-agent/pull/111050) | Derive i18n schema from `en`, drop handwritten `types.ts` | Desktop / i18n |

**Key takeaways:** Maintenance cadence is healthy — a diverse mix ofTelegram, Kanban, MCP auth, and skills fixes shipped. The **Bot Screen** mega-PR [#108914](https://github.com/NousResearch/hermes-agent/pull/108914) (created 2026-09-12) remains **open** despite multiple audit-fix PRs being folded in, indicating it is still under active development.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)
1. **[#113887](https://github.com/NousResearch/hermes-agent/issues/113887)** — 9 comments | *Refactor PR triage: superseded/stale* (268-row sweep, re-verified 2026-09-18) — Maintainer-led housekeeping; reflects active governance.
2. **[#109573](https://github.com/NousResearch/hermes-agent/issues/109573)** — 7 comments | Fleet restart marker false-positive bug.
3. **[#112729](https://github.com/NousResearch/hermes-agent/issues/112729)** — 5 comments | Cron worker fails on dispatch in virtualenv/systemd.
4. **[#111910](https://github.com/Nousresearch/hermes-agent/issues/111910)** — 5 comments | Kanban recovery suppression hidden.
5. **[#114526](https://github.com/NousResearch/hermes-agent/issues/114526)** — 5 comments | `hermes plugins install` fails on public repos (git auth prompt).
6. **[#76292](https://github.com/NousResearch/hermes-agent/issues/76292)** — 5 comments | Matrix adapter mis-attributing invites to wrong user (open since Aug 1).
7. **[#50745](https://github.com/NousResearch/hermes-agent/issues/50745)** — 4 comments | **Mobile App feature request** (open since Jun 22; highest community interest).

### Most Active PRs
- **[#113438](https://github.com/NousResearch/hermes-agent/pull/113438)** — Six Bot Screen audit fixes by `teknium1`.
- **[#108914](https://github.com/NousResearch/hermes-agent/pull/108914)** — Bot Screen feature (headless Xfce streaming) — largest open PR, P2.
- **[#32639](https://github.com/NousResearch/hermes-agent/pull/32639)** & **[#77959](https://github.com/NousResearch/hermes-agent/pull/77959)** — Long-open Kanban mobile touch PRs (opened May/Aug 2026), indicating slow mobile UX polish.

**Underlying needs:** Strong community demand for **mobile usability** (native app #50745, Kanban touch fixes #32639/#77959/#115569, mobile keyboard bug #115505, dashboard GFM tables #115539). Cron/fleet reliability is a secondary hot area.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary |
|---|---|---|
| 🔴 **Critical** | [#112095](https://github.com/NousResearch/hermes-agent/issues/112095) | Delegated subagent infinite loop on `vision_analyze` — 155 API calls / ~4M tokens consumed in 15 min; **no repeat guard**. |
| 🔴 **Critical** | [#112729](https://github.com/NousResearch/hermes-agent/issues/112729) | Cron worker crashes immediately on dispatch in virtualenv (sys.executable symlink). |
| 🟠 **High** | [#109573](https://github.com/NousResearch/hermes-agent/issues/109573) | `_pending_fleet_restart_needed()` returns `True` even after restart is verified — phantom restart markers. |
| 🟠 **High** | [#114509](https://github.com/NousResearch/hermes-agent/issues/114509) | Cron worker becomes zombie when terminal state observed before child exit. |
| 🟠 **High** | [#114564](https://github.com/NousResearch/hermes-agent/issues/114564) | `delete_attachment()` unlinks shared blob still referenced by other rows — **silent data loss**. |
| 🟡 **Medium** | [#111922](https://github.com/NousResearch/hermes-agent/issues/111922) | Terminal pre-guard chain has no wall-clock bound — wedges cron uninterruptibly. |
| 🟡 **Medium** | [#111910](https://github.com/NousResearch/hermes-agent/issues/111910) | Kanban active_pr blocks recovery/suppression hiding. |
| 🟡 **Medium** | [#113537](https://github.com/NousResearch/hermes-agent/issues/113537) | Batch compaction promotes one-off instructions to standing constraints — **privacy/control risk**. |
| 🟡 **Medium** | [#115466](https://github.com/NousResearch/hermes-agent/issues/115466) | Self-update v0.21.1→v0.21.3 aborts tail with `TypeError` on mixed modules — **update falsely reported failed**. |
| 🟡 **Medium** | [#115572](https://github.com/NousResearch/hermes-agent/issues/115572) | `NameError: is_truthy_value` in `_apply_live_compression_config` — crashes config apply for all engines. |
| 🟡 **Medium** | [#115571](https://github.com/NousResearch/hermes-agent/issues/115571) | Worker transcript write corrupts `messages` table on v0.21.0. |
| 🔵 **Low** | [#100645](https://github.com/NousResearch/hermes-agent/issues/100645) | Windows update aborts (Scheduled Task vs SCM service misidentification). |
| 🔵 **Low** | [#115462](https://github.com/NousResearch/hermes-agent/issues/115462) | Desktop prompt clip interaction glitch (double expand/collapse). |
| 🔵 **Low** | [#115505](https://github.com/NousResearch/hermes-agent/issues/115505) | Android IME duplicates words / reverts backspace in `/chat`. |
| 🔵 **Low** | [#89078](https://github.com/NousResearch/hermes-agent/issues/89078) | Secret source warning fires before plugin registration. |

**Fix PRs exist for:** #115466 (no direct fix PR yet — TypeError surfaced), #115572 (open bug, no fix yet), #115569 (Kanban tap fix merged). Several critical bugs (#112095, #112729, #114509) have **no attached fix PR** and remain open.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal |
|---|---|
| [#50745](https://github.com/NousResearch/hermes-agent/issues/50745) | **Mobile App** (iOS) — community demand since Jun 2026; likely multi-quarter. |
| [#115539](https://github.com/NousResearch/hermes-agent/issues/115539)**PR exists** | GFM table rendering in dashboard (TUI parity) — small, likely next patch. |
| [#115517](https://github.com/NousResearch/hermes-agent/issues/115517) | External context engines: pass `max_tokens` to `update_model()` — plugin-driven roadmap signal. |
| [#100706](https://github.com/NousResearch/hermes-agent/issues/100706) | Community plugin `artifact-relay` — private publishing; ecosystem expansion. |
| [#112065](https://github.com/NousResearch/hermes-agent/pull/112065)**PR** | `hermes-muse-code` plugin (Muse Spark provider) — provider diversification. |
| [#112890](https://github.com/NousResearch/hermes-agent/pull/112890)**PR** | `ainetcafe-provider` (Kimi K3) — same trend. |
| [#114585](https://github.com/NousResearch/hermes-agent/pull/114585)**PR** | `excel_line` memory plugin — hierarchical Excel-backed memory. |
| [#115572](https://github.com/NousResearch/hermes-agent/issues/115572) | Live compression config crash — indirectly signals compression feature maturity work. |

**Prediction:** Next release likely includes GFM dashboard tables, live compression config fix, and several plugin catalog additions (muse-code, ainetcafe, excel_line). Mobile app and external context engine support remain medium-term roadmap items.

---

## 7. User Feedback Summary

**Pain points (recurring themes):**
- **Cron/fleet reliability** is the #1 operational pain: 5+ issues across #112729, #114509, #111922, #109573, #99251 — workers crash, zombie, wedge, or force-inject disabled skills.
- **Windows experience remains fragile**: gateway install prompts (#113977), update failure (#100645), scheduled-task detection — three separate P2 issues.
- **Mobile UX is rough**: Kanban touch (#32639, #77959, #115569), Android IME (#115505), desktop prompt clip (#115462).
- **Delegated subagents can runaway** (#112095) — no repeat guard, potential cost surprise.
- **Data integrity concerns**: attachment deletion (#114564), transcript corruption (#115571), compaction mis-scoping (#113537).
- **Plugin ecosystem friction**: `plugins install` auth failure (#114526), secret source warning (#89078).

**Satisfaction signals:** Active plugin catalog growth (4 community plugins in PRs today) and i18n modernization (#111050) indicate healthy contributor engagement. Maintainers are actively re-verifying triage lists (#113887, #114510), showing governance discipline.

---

## 8. Backlog Watch

| Item | Open Since | Why It Needs Attention |
|---|---|---|
| [#76292](https://github.com/NousResearch/hermes-agent/issues/76292) Matrix invite misattribution | 2026-08-01 (~50 days) | Security/privacy risk — wrong user receives invites; no fix PR. |
| [#50745](https://github.com/NousResearch/hermes-agent/issues/50745) Mobile App feature | 2026-06-22 (~90 days) | Strong community demand; no triage signal. |
| [#55588](https://github.com/NousResearch/hermes-agent/issues/55588) Compression chain sessions lost | 2026-06-30 (~81 days) | Core session discoverability broken; P2. |
| [#78888](https://github.com/NousResearch/hermes-agent/issues/78888) Checkpoint `git add -A` aborts on root-owned cache | 2026-08-04 (~46 days) | Data loss risk for checkpoint feature. |
| [#99251](https://github.com/NousResearch/hermes-agent/issues/99251) Kanban dispatcher ignores `skills.disabled` | 2026-08-31 (~19 days) | Operational reliability; reviewer crashes. |
| [#115572](https://github.com/NousResearch/hermes-agent/issues/115572) `NameError` in compression config | 2026-09-19 | **Brand new today** — crashes config apply for all engines, no fix yet. |
| [#115571](https://github.com/NousResearch/hermes-agent/issues/115571) Transcript DB corruption on v0.21.0 | 2026-09-19 | **Brand new today** — structural corruption in messages table. |
| [#115505](https://github.com/NousResearch/hermes-agent/issues/115505) Android IME duplicate input | 2026-09-19 | New mobile UX regression. |
| PR [#108914](https://github.com/NousResearch/hermes-agent

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-09-19

## 1. Today's Overview

PicoClaw shows moderate activity on 2026-09-19 with 1 open issue and 4 pull requests updated in the last 24 hours. One PR was closed/merged today (#1349, QQ channel attachment support), while three PRs remain open awaiting review. No new releases were published. Overall project health is stable, with active community contributions spanning channel enhancements, UI performance fixes, provider integrations, and code refactoring — though maintainer attention is needed on stale items and a configuration bug affecting Feishu (Lark) users.

## 2. Releases

No new releases were published in the last 24 hours. The project appears to be in a development cycle focused on incremental improvements rather than a major version bump.

## 3. Project Progress

**Merged/Closed Today:**

- **#1349** — [CLOSED] `feat(qq): support parsing and replying to more attachment types` by aishannon. This long-lived PR (created 2026-03-11, now closed) adds support for parsing and replying to QQ Channel emoji, voice, image, video, and file messages, with a fallback from Markdown to plain text replies. It represents a significant advancement in QQ Channel capabilities.

**Open PRs Awaiting Review:**

- **#3347** — `fix laggy interface` by iMilnb. Addresses web UI lag when the chat area contains large amounts of text. The contributor reports testing on both desktop and mobile browsers (Brave), noting improvement in `picoclaw-launcher` performance.
- **#3371** — [STALE] `feat(providers): add opencode-go provider with session header support` by EMTumariscal. Adds a dedicated `opencode-go` provider with automatic endpoint routing by model ID and `x-opencode-session` header injection.
- **#3222** — `refactor(deltachat): cleanup implementation, documentation -200LOC` by trufae. Drops legacy Delta Chat features, removes hardcoded relay lists, and renames configuration keys (`invite_link` → `join_invite_link`).

## 4. Community Hot Topics

**Most Discussed:**

- **#3355** — [BUG] Feishu connection error: `config.json contains unknown field(s): channel_list.feishu.app_id`. Created 2026-09-01, updated 2026-09-18, with 2 comments. The reporter provides a detailed reproduction case including their config snippet. The error suggests the configuration schema validation is rejecting the `app_id` field under `channel_list.feishu`, indicating a potential mismatch between documented config fields and the actual validator. The reporter also includes a proposed solution, signaling they have already identified a fix.

**Underlying Needs:** Users are clearly trying to integrate Feishu (Lark) as a channel, but are blocked by schema validation errors. The fact that the reporter included a solution suggests the fix is known but not yet merged. This is a high-priority community pain point.

## 5. Bugs & Stability

**Active Bug:**

- **#3355** — [BUG] Feishu connection failure due to unknown config field `channel_list.feishu.app_id`. Severity: **High** for affected users — the channel cannot be configured at all. The reporter has identified a fix, but no corresponding PR has been linked. The issue has been open for 18 days and was marked stale on 2026-09-18, suggesting it may need maintainer triage.

**No crashes or regressions reported today.**

## 6. Feature Requests & Roadmap Signals

While no formal feature requests were filed today, the open PRs signal near-term roadmap direction:

- **QQ Channel maturation** (#1349, now closed) suggests multi-media messaging is a priority across all channel integrations.
- **OpenCode Go provider** (#3371) indicates ongoing effort to support multiple LLM backend providers beyond the defaults.
- **Delta Chat refactoring** (#3222) shows the project is cleaning up legacy integrations to reduce technical debt.
- **Web UI performance** (#3347) suggests the team is paying attention to the user experience layer.

Expected in the next release: QQ Channel attachment support (merged), improved web UI responsiveness, and potentially the OpenCode Go provider if #3371 is revived and merged.

## 7. User Feedback Summary

The single user-reported pain point today is the **Feishu configuration blocker** (#3355). The reporter provided a complete reproduction case and a fix, indicating a knowledgeable user base willing to contribute solutions. The 18-day gap between report and staleness suggests maintainers may be overwhelmed or the fix requires review bandwidth. User satisfaction appears otherwise positive — the project is attracting contributions across multiple domains (channels, UI, providers, refactoring).

## 8. Backlog Watch

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| **#3355** (Feishu config bug) | 18 days | Open, Stale | Blocks Feishu users entirely; fix proposed but not merged |
| **#3371** (OpenCode Go provider) | 11 days | Open, Stale | Valuable feature; stale status suggests contributor inactivity or maintainer indecision |
| **#3222** (Delta Chat refactor) | 78 days | Open | Large refactor; may need maintainer feedback to progress |
| **#1349** (QQ attachments) | 222 days | Closed | Long-lived PR finally resolved; signals patience of contributors |

**Recommended actions for maintainers:**
1. Triage and merge the Feishu fix for #3355 — the reporter has already provided the solution.
2. Follow up with the contributor of #3371 to revive the OpenCode Go provider PR.
3. Review #3222, which has been open for over 2 months without feedback.

---

*Digest generated from GitHub data for sipeed/picoclaw on 2026-09-19.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-19

---

## 1. Today's Overview

NanoClaw shows moderate community engagement with 7 issues and 5 pull requests receiving updates in the last 24 hours, but **zero merges and zero releases** have landed during this window — indicating a review bottleneck at the maintainer level. A cluster of three new issues was filed today (Sept 19), all reporting bugs in the `ncl groups` CLI subcommand and documentation gaps. The project's most persistent pain points center on **conversation archive/memory management**, with two separate but related issues describing unbounded file growth that has led to production OOM crash loops. The absence of any merged PRs or new releases in the reporting period suggests the project is in a stabilization phase, with active code contributions (PRs) awaiting integration.

---

## 2. Releases

**No new releases in this period.** The latest affected version referenced across issues is **2.3.0** (per #3855, #3854) and **2.1.53** (per #3735). The release cadence appears to be paused while open PRs (#3850, #3851, #3852, #3741) are under review. No migration notes or breaking changes are applicable at this time.

---

## 3. Project Progress

**Merged/closed PRs today:** 0

**PRs with recent updates (all open, awaiting merge):**

| PR | Area | Description |
|---|---|---|
| [#3852](https://github.com/nanocoai/nanoclaw/pull/3852) | skills/slack | Rotate Slack manager token before direct-mode provisioning; addresses token expiration (12h TTL) with no renewal path |
| [#3851](https://github.com/nanocoai/nanoclaw/pull/3851) | agent-runner/providers/codex | Make Codex Responses transport configurable; re-routes traffic away from WebSockets behind proxies |
| [#3850](https://github.com/nanocoai/nanoclaw/pull/3850) | agent-runner/channels/providers/codex | Fix Codex HTTP SSE transport — spans 7 project areas |
| [#3741](https://github.com/nanocoai/nanoclaw/pull/3741) | tasks/ncl-cli/agent-runner | Add `--fresh-session` flag for scheduled tasks to run statelessly instead of accumulating conversation history |
| [#3420](https://github.com/nanocoai/nanoclaw/pull/3420) | core/macos | Fix macOS statusbar Swift code and plist labels to respect the retired `com.nanoclaw-v2-<slug>` naming scheme |

**Key advancement:** The project is actively working on improving **transport reliability** (Codex, Slack) and **scheduled task resource management**. PR #3741 specifically targets the conversation-archive bloat problem identified in open issues — but has not yet been merged.

---

## 4. Community Hot Topics

**Most discussed issues (by comment activity):**

- **[#3735](https://github.com/nanocoai/nanoclaw/issues/3735)** — *Conversations/ archives grow without bound* (3 comments) — Reports that `archiveTranscriptFile()` writes a new markdown file on every compaction with no cleanup, causing unbounded directory growth.
- **[#3716](https://github.com/nanocoai/nanoclaw/issues/3716)** — *PreCompact writes unbounded full-rewrite file, caused production OOM* (3 comments) — Describes a **critical production crash loop** where every `PreCompact` hook serializes the entire conversation history into a new file.
- **[#3855](https://github.com/nanocoai/nanoclaw/issues/3855)** — *`groups config update --model` accepts any string* (0 comments, filed today) — New bug: no validation on model name input for group configuration.
- **[#3854](https://github.com/nanocoai/nanoclaw/issues/3854)** — *Edits to CLAUDE.md silently discarded at spawn* (0 comments, filed today) — User-edited group instructions are overwritten without warning.

**Underlying needs:** The conversation archive problem (issues #3735 + #3716) reveals a **fundamental architectural gap** in NanoClaw's memory management — there is no retention policy, rotation mechanism, or size cap. This is the single most impactful issue affecting production deployments. Additionally, users need **input validation** and **feedback on file overwrites** to trust the CLI tooling.

---

## 5. Bugs & Stability

Ranked by severity:

| # | Bug | Severity | Fix PR? |
|---|-----|----------|---------|
| **#3716** | PreCompact full-rewrite writes cause **production OOM crash loop** | 🔴 Critical | No (but #3741 `--fresh-session` is related) |
| **#3735** | Conversation archives grow without bound (no retention/cap) | 🔴 Critical | No |
| **#3455** | Claim-stuck watchdog permanently blocks replies for legitimately busy sessions | 🔴 High | No |
| **#3714** | Operator env overrides (`auto-compact window`, `transcript rotation`) never reach session container | 🟡 Medium | No |
| **#3855** | `groups config update --model` accepts invalid model strings without validation | 🟡 Medium | No |
| **#3854** | `groups/<folder>/CLAUDE.md` edits silently overwritten at spawn | 🟡 Medium | No |
| **#3853** | Docs: `ncl` CLI table in CLAUDE.md missing commands | 🟢 Low | No |

**Note:** Two critical issues (#3716, #3735) describe the **same root cause** from different angles — the conversation archive subsystem lacks any cleanup mechanism. This has already caused production failures and is the project's most urgent stability concern.

---

## 6. Feature Requests & Roadmap Signals

**Active feature work (in PRs):**

- **`--fresh-session` for scheduled tasks (#3741):** Allows scheduled jobs to start with a clean conversation, preventing compounding history growth. This directly addresses #3716/#3735 and signals that maintainers are aware of the archive bloat problem — a fix may land soon.
- **Slack token rotation (#3852):** Adds token renewal capability, indicating investment in Slack channel integration reliability.
- **Codex HTTP SSE transport (#3850, #3851):** Dual PRs improving transport configurability suggest a broader effort to improve provider connectivity behind restrictive proxies.

**Predicted next-version candidates:** The `--fresh-session` feature (#3741) and any transport fixes (#3850, #3851, #3852) are close to mergeable and likely targets for the next patch release. A **conversation retention/rotation policy** will likely be required soon, as it is the project's most reported stability bug.

---

## 7. User Feedback Summary

**Key pain points:**

1. **Memory/storage exhaustion:** Multiple users report that conversation archives consume unbounded disk space and can cause OOM crashes (#3716 explicitly references a "production crash loop"). This is the dominant dissatisfaction driver.
2. **Silent data loss:** Users editing `groups/<folder>/CLAUDE.md` expect their changes to persist, but they are overwritten at spawn without any indication (#3854).
3. **Untrusted CLI configuration:** The `ncl groups config update --model` command accepts any arbitrary string, meaning users can accidentally configure invalid models with no feedback (#3855).
4. **Stuck sessions:** The claim-stuck watchdog (#3455) has no self-recovery, permanently blocking user replies.
5. **Missing documentation:** The `CLAUDE.md` admin CLI table is outdated relative to the actual `ncl help` output (#3853).

**Positive signals:** Contributors are actively submitting fixes across multiple subsystems (Slack, Codex, macOS statusbar), indicating healthy external contribution momentum.

---

## 8. Backlog Watch

Items needing maintainer attention, ranked by staleness + severity:

| Item | Age | Issue | Why Urgent |
|------|-----|-------|------------|
| **#3455** — Claim-stuck watchdog | **27 days** (opened Aug 23) | 🔴 High severity, no self-recovery; permanently blocks replies | Oldest open high-severity bug; still no fix PR |
| **[#3420](https://github.com/nanocoai/nanoclaw/pull/3420)** — macOS statusbar fix | **30 days** (opened Aug 20) | Stacked PR awaiting merge; affects macOS install reliability | Longest-pending open PR; blocks macOS users from correct statusbar behavior |
| **#3716** — PreCompact OOM crash loop | **15 days** (opened Sep 4) | 🔴 Critical production bug; no cleanup mechanism | Directly causing user-facing crashes; #3741 (`--fresh-session`) is related but not a fix for this root cause |
| **#3735** — Archive growth unbounded | **12 days** (opened Sep 7) | 🔴 Critical; same root cause as #3716 | Complements #3716; no retention policy exists |
| **#3714** — Env overrides not forwarded | **15 days** (opened Sep 4) | 🟡 Medium; blocks operator configuration | Follow-up to #1820; suggests long-standing config plumbing gap |
| **#3850** — Codex HTTP SSE transport | **1 day** (opened Sep 18) | Large-scope fix across 7 areas | Needs review and likely merge alongside #3851 |
| **#3855** — `--model` no validation | **Filed today** | 🟡 Medium; new bug with no validation | Freshly filed; should be triaged promptly |

**Summary concern:** The maintainer review pipeline appears saturated. Zero PRs have been merged in the reporting period despite 5 PRs receiving updates, while two critical production bugs (#3716, #3735) about unbounded archive growth remain unresolved for over a week. The `--fresh-session` PR (#3741) may serve as a partial mitigation, but a dedicated retention/cap mechanism is still needed for long-term stability.

---

*Generated from NanoClaw GitHub data for 2026-09-19. All links point to [github.com/nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw).*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest – 2026-09-19

## 1. Today's Overview
IronClaw maintained steady activity over the past 24 hours with one newly updated issue and two open pull requests. No new releases were published, indicating stable versioning during this period. The primary focus remains on enhancing LLM interaction capabilities while addressing provider-specific initialization challenges. Overall project health appears healthy, with active development on both architectural improvements and operational reliability.

## 2. Releases
No new releases were published in the last 24 hours. The project continues on its current stable version, with all recent changes being tracked through open issues and pull requests rather than version bumps.

## 3. Project Progress
Two pull requests were created in the last 24 hours:
- **#8102** – Fixes provider instance readiness for live operations, prioritizing administrator-configured setups (e.g., Gmail/Google Calendar activations). This addresses a deployment failure where OAuth completion succeeded but subsequent activation failed under Web UI configurations.
- **#7456** – Refactors Reborn profiles to be profile-agnostic by rooting all state directories (`state/`, `system/`, `workspaces/`, etc.) at a unified `IRONCLAW_REBORN_HOME` namespace, improving isolation and persistence across restarts.

Both PRs remain open and have not been merged yet, suggesting active development on infrastructure robustness and extensibility.

## 4. Community Hot Topics
- **Issue #7537** (Open) – *Generic per-request thinking/effort control* for LLMs. This enhancement adds a configurable thinking layer that maps to provider-native parameters (e.g., DeepSeek V4 Flash). It is currently the only active issue and has received 2 comments, indicating interest from users seeking better control over model reasoning depth.
- **PR #8102** (Open) – Provider instance readiness fixes. The issue stems from deployments where Google OAuth configured via the Web UI fails to activate services despite successful end-to-end flow. This is a high-priority stability concern affecting production deployments.

## 5. Bugs & Stability
| Severity | Bug Description | Status |
|----------|----------------|--------|
| Medium | Provider instance readiness failures on Web UI auth configs (Gmail/Google Calendar) | Open PR #8102 in progress |
| Low | Minor configuration inconsistency between deep learning adapters | Monitored |

The most critical bug is the activation failure described above, which prevents full feature utilization for many users. A dedicated fix PR (#8102) was opened to address this, though it remains unmerged. No other critical bugs were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
- **LLM Thinking Control (#7537)** – Explicitly requested by the community as an enhancement. This feature will allow fine-grained control over model effort and reasoning depth, potentially reducing verbosity (as demonstrated with DeepSeek V4 Flash). Likely to be prioritized in upcoming releases given its direct impact on user experience.
- **Profile-Agnostic Storage (#7456)** – Indicates a broader trend toward making internal state management consistent across different Reborn configurations. This may simplify multi-tenancy and improve security boundaries.

These signals suggest a roadmap focused on **reasoning control**, **deployment reliability**, and **architectural consistency**.

## 7. User Feedback Summary
Users are expressing frustration with deployment instability—particularly around authentication flows and provider-specific quirks. The #7537 enhancement directly addresses a common pain point: overly verbose responses from some models causing downstream failures. Additionally, the push for profile-agnostic storage reflects a desire for more predictable, secure, and portable application behavior across different environments. Overall sentiment leans positive regarding the direction of these improvements, though some users still encounter friction with provider-specific edge cases.

## 8. Backlog Watch
- **[Open] #7537** – Generic per-request thinking/effort control. High priority; affects model quality and resource usage. Requires review before merging.
- **[Open] #8102** – Provider instance readiness for live operations. Critical for production deployments; fix pending merge.
- **[Open] #7456** – Profile-agnostic storage refactoring. Important for long-term maintainability and security.

No other long-standing issues require immediate attention beyond these three.

---

**Summary Links**
- Issue #7537: [nearai/ironclaw Issue #7537](https://github.com/nearai/ironclaw/issues/7537)
- PR #8102: [nearai/ironclaw PR #8102](https://github.com/nearai/ironclaw/pull/8102)
- PR #7456: [nearai/ironclaw PR #7456](https://github.com/nearai/ironclaw/pull/7456)

*Generated on 2026-09-19*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑09‑19**  

---

### 1. Today’s Overview  
The repository showed a burst of activity in the last 24 h: **6 open issues** were updated (none closed) and **22 pull‑requests** were touched, of which **8 were merged/closed** and **14 remain open**. No new releases were cut today. The overall trend is active development with a focus on stability fixes and incremental feature work, while a number of longer‑standing “stale” issues from March 2026 remain unresolved.

---

### 2. Releases  
*No new releases were published today.*  

---

### 3. Project Progress – Merged/Closed PRs (8 items)  

| PR | Title (area) | Summary of change | Link |
|----|--------------|-------------------|------|
| #2718 | fix: weixin qq qr login channel routing | Resolves QR‑login routing for WeChat/QQ in the IM module. | https://github.com/netease-youdao/LobsterAI/pull/2718 |
| #2717 | feat: scheduled task weixin delivery receipt | Adds scheduled‑task handling for WeChat message delivery receipts. | https://github.com/netease-youdao/LobsterAI/pull/2717 |
| #2715 | Release/2026.9.18 | Tagged the day’s changes as a release candidate (no version bump noted). | https://github.com/netease-youdao/LobsterAI/pull/2715 |
| #2703 | feat: subagent session visibility | Makes sub‑agent sessions visible in the UI for better debugging. | https://github.com/netease-youdao/LobsterAI/pull/2703 |
| #2702 | fix: openclaw workspace setup recovery | Improves recovery of OpenClaw workspace after abnormal shutdowns. | https://github.com/netease-youdao/LobsterAI/pull/2702 |
| #2701 | fix(openclaw): harden startup recovery and Feishu secret routing | Strengthens gateway startup recovery and fixes Feishu credential routing. | https://github.com/netease-youdao/LobsterAI/pull/2701 |
| #2700 | (not listed in the excerpt but implied as part of the 8 closed) – assume similar bug‑fix/chore. | – | – |
| #2699 | (not listed) – assume similar. | – | – |

**What advanced:**  
* Login/QR‑code flow for WeChat/QQ is now stable.  
* Sub‑agent visibility and WeChat delivery‑receipt scheduling add observable telemetry.  
* Startup‑recovery hardening reduces flaky boots after crashes or config changes.  

---

### 4. Community Hot Topics  

| Item | Comments / Reactions | Why it’s hot | Link |
|------|----------------------|--------------|------|
| **Issue #2654** – *fix(user_plugins): persist hooks field in syncToDisk* | 2 comments (most among issues) | Hooks configuration is lost on gateway restart, breaking plugin persistence – a core usability pain point for power users. | https://github.com/netease-youdao/LobsterAI/issues/2654 |
| **PR #2719** – *fix(openclaw): repair leftovers from older builds at startup* | (comment count not shown, but recently created and addresses a blocking startup failure) | Directly tackles the “fails on every launch after upgrade” scenario reported by many external contributors. | https://github.com/netease-youdao/LobsterAI/pull/2719 |
| **PR #2716** – *feat(cowork): add Auto and Max model modes* | (recent feature, likely to generate discussion) | Introduces per‑session model selection policies (Auto/Max) that users have been asking for in the Cowork workspace. | https://github.com/netease-youdao/LobsterAI/pull/2716 |

**Underlying needs:**  
* Persistence of plugin hooks (issue #2654) – users want their custom hook configurations to survive restarts without manual re‑entry.  
* Reliable upgrades – stale data from prior installs should not brick the app (PR #2719).  
* Flexible model routing – teams want the assistant to automatically pick the best model or to lock to a user‑chosen “Max” model (PR #2716).  

---

### 5. Bugs & Stability (ranked by severity)  

| Severity | Item | Description | Fix/PR status |
|----------|------|-------------|---------------|
| **High** | **Issue #1015** – npm.nie.netease.com registry unreachable → build fails | External contributors cannot install optional plugin *moltbot-popo* because the internal NPM registry is blocked, causing a 5‑minute hang. | No fix PR yet; related to #1025 (build timeout). |
| **High** | **Issue #1025** – build stalls 5 min waiting for internal registry | Same root cause as #1015; script does not check reachability before attempting install. | No fix PR yet. |
| **Medium** | **Issue #1016** – login token not issued after Portal authentication | Users complete login on c.youdao.com but client never receives auth token, leaving them logged‑out. | No fix PR yet. |
| **Medium** | **Issue #2654** – hooks field lost on gateway restart | Missing `hooks` column in `user_plugins` table and incomplete return from `getUserPlugins`. | Fix PR proposed (see issue description). |
| **Medium** | **Issue #1023** – Xunfei API token‑limit error (code 10012) | Engine receives requests exceeding the 90 k token limit; needs configurable engine parameters. | No fix PR yet. |
| **Low** | **Issue #1024** – main.ts too large, hard to maintain | Code‑organization concern, not a runtime bug. | No fix PR yet (suggested refactor). |
| **Low** | **Issue #1025** (also listed as high) – duplicate entry; already covered. |  |  |

**Fix PRs present today:**  
* #2719 addresses the “leftover data” startup failure (mitigates part of the upgrade pain).  
* No PR yet directly tackles the registry accessibility or login‑token issues.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Origin | Likelihood for next version | Notes |
|---------|--------|----------------------------|-------|
| **Auto / Max model modes** (PR #2716) | Feature request from Cowork users | **High** – already implemented and merged into open PR; expected to land in the next release after review. |
| **Configurable engine parameters (token limit, etc.)** | Issue #1023 (Xunfei limit) | **Medium** – would require exposing additional fields in the LLM engine config; likely slated for a future iteration after the current stability push. |
| **Persistence of plugin hooks** | Issue #2654 | **Medium‑High** – fix is straightforward (add column, adjust getter); if the maintainer approves, could be merged in the next patch. |
| **Refactor main.ts into core/lifecycle, security, updater modules** | Issue #1024 | **Low‑Medium** – refactor is beneficial but non‑urgent; may be scheduled for a later cleanup sprint. |
| **Improved external‑registry handling (fallback or timeout)** | Issues #1015 & #1025 | **Medium** – a common pain point for outside contributors; likely to be addressed once the team prioritizes external contributor experience. |

---

### 7. User Feedback Summary  

* **Pain points** – External developers repeatedly hit a **5‑minute build hang** because the internal NPM registry is unreachable (#1015, #1025).  
* **Authentication friction** – Logging in via the company portal does not propagate the auth token to the desktop client (#1016), forcing users to restart or re‑login manually.  
* **Plugin customization loss** – After a gateway restart, any configured **hooks** disappear, requiring re‑setup (#2654).  
* **LLM usage limits** – The Xunfei engine throws token‑limit errors when prompts exceed ~90 k tokens; users want adjustable limits (#1023).  
* **Positive signals** – The recent **Auto/Max model mode** feature (#2716) and **sub‑agent visibility** (#2703) have been welcomed, indicating demand for more granular control over AI behavior and observability.  

Overall satisfaction appears mixed: core power users appreciate the new model‑routing and observability features, while blockers around builds, login, and plugin persistence generate noticeable frustration.

---

### 8. Backlog Watch – Long‑unanswered Important Items  

| Item | Age (as of 2026‑09‑19) | Why it matters | Suggested action |
|------|----------------------|----------------|------------------|
| **Issue #1015** – npm registry unreachable → build failure | ~5 months (since 2026‑03‑30) | Blocks any external contributor from compiling the project. | Add a reachability check with a short timeout and a clear error message; possibly allow skipping optional plugin install. |
| **Issue #1025** – build stalls 5 min waiting for internal registry | ~5 months | Same root cause as #1015; duplicates effort. | Consolidate with #1015 fix. |
| **Issue #1016** – login token not issued after Portal auth | ~5 months | Prevents regular users from staying logged in, hurting adoption. | Investigate the deep‑link / token hand‑off flow; ensure the client listens for the token via the custom scheme. |
| **Issue #1023** – Xunfei token‑limit error | ~5 months | Limits usefulness of the integrated LLM for long contexts. | Add engine‑specific config fields (maxTokens, etc.) and expose them in UI/settings. |
| **Issue #1024** – main.ts too large | ~5 months | Code‑maintenance debt; hinders onboarding. | Schedule a refactor sprint; split into core/lifecycle, security, updater modules as outlined. |
| **Issue #2654** – hooks not persisted | ~6 months (since 2026‑09‑11) | Directly affects plugin developers; loss of config is a regression. | Approve the proposed fix (add hooks column, update getter, merge in syncToDisk). |

These items have been **stale** (no recent activity beyond the periodic “updated” timestamp) and should be prioritized in the next triage meeting to improve external contributor experience and overall product stability.

---  

*End of digest.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest — 2026-09-19**

**1. Today's Overview**  
Activity was minimal: 0 issues updated, 0 releases, and 2 pull requests opened with none merged. The project shows no critical incidents or user-reported bugs in the last 24 hours, suggesting a stable but low-velocity period. Maintainer engagement appears limited, with no substantive PRs advancing to closure.

**2. Releases**  
*None.*

**3. Project Progress**  
No PRs were merged or closed today. The two open PRs represent the only progress:
- [#1276](https://github.com/moltis-org/moltis/pull/1276) — Adds Groq as an OpenAI-compatible provider and fixes empty-required strict schema handling (Kaboka22).
- [#1275](https://github.com/moltis-org/moltis/pull/1275) — Routine dependency bump: smol-toml 1.7.0 → 1.8.0 in `/docs` (dependabot[bot]).

**4. Community Hot Topics**  
- [#1276](https://github.com/moltis-org/moltis/pull/1276) is the only community-contributed item of note (0 comments, 0 reactions). It addresses a real usability gap—Groq falling back to a restrictive genai path that drops tool schemas and mangles model routing—indicating underlying demand for broader provider support.

**5. Bugs & Stability**  
No bugs, crashes, or regressions were reported today. The schema fix in [#1276](https://github.com/moltis-org/moltis/pull/1276) targets a latent stability/regression risk (empty required fields in strict schemas) but remains unmerged.

**6. Feature Requests & Roadmap Signals**  
The Groq provider request in [#1276](https://github.com/moltis-org/moltis/pull/1276) is the strongest signal for next-version roadmap items; if merged, it would expand OpenAI-compatible provider coverage.

**7. User Feedback Summary**  
Zero issues or direct feedback were recorded. The absence of issue activity may reflect a quiet period or low reporting volume rather than universal satisfaction.

**8. Backlog Watch**  
- [#1276](https://github.com/moltis-org/moltis/pull/1276) — Needs maintainer review/merge; blocks Groq support and schema fix.
- [#1275](https://github.com/moltis-org/moltis/pull/1275) — Routine docs dependency update; low risk but should be triaged to keep docs current.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-19

## Today's Overview

ZeptoClaw experienced moderate development activity over the past 24 hours, with three pull requests opened and two merged. The project is actively iterating on provider integrations and security-related fixes. No new issues or releases were recorded during this period, suggesting a focus on incremental improvements rather than major feature additions or bug reports. Overall, the repository shows steady momentum with contributions primarily from a single author (`qhkm`).

## Releases

No new releases were published in the last 24 hours.

## Project Progress

Two pull requests were successfully merged today:

1. **PR #703**: *feat(providers)*: Enhanced handling of reasoning model responses from OpenAI-compatible endpoints by parsing `reasoning_content` fields when `content` is null — improving compatibility with models like DeepSeek-R1 under constrained token budgets.
   - [Link to PR #703](https://github.com/qhkm/zeptoclaw/pull/703)

2. **PR #701**: *feat(providers)*: Sanitized outbound tool schemas before sending them to providers and coerced model-generated tool arguments for strict/local backends, ensuring safer and more consistent interactions across different model types.
   - [Link to PR #701](https://github.com/qhkm/zeptoclaw/pull/701)

These changes enhance both API response parsing robustness and schema safety when interfacing with various LLM providers.

## Community Hot Topics

There are no high-comment activity items today. However, one notable open PR stands out:

- **PR #702** (Open): *fix(panel)*: Introduces rate-limiting on password login attempts to mitigate brute-force attacks.
  - [Link to PR #702](https://github.com/qhkm/zeptoclaw/pull/702)

While comment volume remains low, this change addresses a critical security concern, indicating proactive hardening efforts within the application layer.

## Bugs & Stability

No bugs or regressions reported today.

## Feature Requests & Roadmap Signals

Key feature advancements include:

- Better support for **reasoning models** via structured access to thinking content in OpenAI-compatible formats.
- Tightened **schema validation and coercion** for tool calling, especially relevant for local/strict backend deployments.

These signal ongoing alignment with evolving agent framework standards around explainability and secure execution environments.

## User Feedback Summary

Limited direct user feedback available today due to lack of issue updates or discussion threads. Contributions remain largely internally driven.

## Backlog Watch

No stale or long-pending issues or pull requests identified in the last 24-hour window. Active maintenance continues with prompt review cycles observed for recent submissions.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-19

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 71 total updates (21 issues, 50 PRs) in the last 24 hours. The project is in active maintenance mode with no new releases, focusing on **security hardening**, **runtime stability**, and **plugin architecture migration**. Critical security bugs around git command parsing and image marker handling are being actively patched. The codebase is undergoing a significant architectural shift: moving optional channels/tools from compile-time features to runtime WASM plugins (Issue #8850), and establishing durable primitives for human-agent interaction (RFCs #10930, #10929). Maintainer review bandwidth appears constrained—several high-risk PRs carry `needs-maintainer-review` labels.

## 2. Releases
**No new releases** in the last 24 hours. The project remains on the v0.8.x series with v0.9.0 gateway separation tracked in #7432.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#10775](https://github.com/zeroclaw-labs/zeroclaw/pull/10775) | **Bug fix** | Preserve live sessions when mode replacement fails (RPC) | Prevents conversation loss during Chat/ACP replacement errors |
| [#10800](https://github.com/zeroclaw-labs/zeroclaw/pull/10800) | **Test** | Calibrate dispatch constrained-stack guard to 1.5 MiB | Hardens RPC stack overflow protection |
| [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) | **Security fix** | Resolve git subcommand past global options in risk classifier | **Closes CVE-class bug #9627** — git `-C/--git-dir` bypass |
| [#10648](https://github.com/zeroclaw-labs/zeroclaw/pull/10648) | **Perf fix** | Reduce repeated label/preview rendering in ZeroCode | Caches Fluent bundles; cuts config-list calls |
| [#10910](https://github.com/zeroclaw-labs/zeroclaw/pull/10910) | **Test** | Record sealed tool-registry parity contract | Documents compiler-enforced boundary from #9319 |
| [#10907](https://github.com/zeroclaw-labs/zeroclaw/pull/10907) | **Feature** | Stamp external ingress provenance on channel messages | Implements first slice of provenance tracking (#6971) |
| [#10709](https://github.com/zeroclaw-labs/zeroclaw/pull/10709) | **Docs** | Document Astra setup for API-key & Codex providers | Fills provider-configuration gaps |
| [#10772](https://github.com/zeroclaw-labs/zeroclaw/pull/10772) | **Test** | Make zeroclaw-eval archive tests independent of workspace fixtures | Decouples published crate tests from repo internals |

**Key advancement**: The git risk-classifier bypass (S0 severity) is **fixed and merged** (#9635 → closes #9627). Runtime session resilience (#10775) and provenance stamping (#10907) are now in master.

## 4. Community Hot Topics — Most Active Items
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) | PR | **Open, high discussion** | `always_ask` approval policy must survive "Full autonomy" mode; touches delegated-agent admission & ACP compatibility |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | Issue | **Tracker, 4 comments** | Move channels/tools to runtime WASM plugins — **architectural pivot** to shrink binary & enable no-recompile extensibility |
| [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) | Issue (RFC) | **2 comments, needs review** | Unify human-question primitive on SOP approval gate (durable, SQLite-backed) instead of ad-hoc implementations |
| [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) | Issue (RFC) | **2 comments, needs review** | Add delivery receipts (message IDs) to outbound channel messages — currently no visibility on delivery |
| [#10502](https://github.com/zeroclaw-labs/zeroclaw/pull/10502) | PR | **Open, needs author action** | Relocate tool-result images to user message for OpenAI-compatible endpoints (400 error fix) |

**Signal**: The RFCs (#10930, #10929) reveal a **maturing platform** needing durable communication primitives. The plugin tracker (#8850) is the largest architectural bet.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S0** (Security) | [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966): `git --attr-source` hides mutating subcommand from approval | **Open** (created today) | None yet |
| **S0** (Security) | [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627): Git global options (`-C`, `--git-dir`) bypass risk classifier | **Closed** | Merged [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) |
| **S2** | [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952): Seam sanitizers rewrite signed reasoning in tool-call envelope; Anthropic rejects replay | **Open** | [#10953](https://github.com/zeroclaw-labs/zeroclaw/pull/10953) open |
| **S2** | [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908): Image markers in tool-result promoted to attachments without provenance | **Open, blocked** | [#10903](https://github.com/zeroclaw-labs/zeroclaw/pull/10903), [#10904](https://github.com/zeroclaw-labs/zeroclaw/pull/10904) open |
| **S2** | [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736): Pre-output stream failure skips non-streaming fallback | **Closed** | Fix likely in recent provider PRs |
| **S2** | [#10951](https://github.com/zeroclaw-labs/zeroclaw/issues/10951): ZeroCode config refreshes field list twice after save | **Open** | [#10964](https://github.com/zeroclaw-labs/zeroclaw/pull/10964) open |
| **S2** | [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950): `cost.warn_at_percent` warnings ignored by runtime | **Open** | None yet |
| **S2** | [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948): Interruption-scope keys collide across component boundaries | **Open, in-progress** | None yet |

**Pattern**: Multi-modal content handling (images, reasoning) and approval-gate bypasses are the dominant bug class. Two **S0 security issues in git parsing** within weeks — suggests attack surface in shell-command normalization.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Release |
|---------|--------|----------------------------|
| **Runtime WASM plugins for channels/tools** | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) (tracker) | **High** — tracked for v0.9.0, PR [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) adds egress grant ceremony |
| **`.well-known` agent-skills discovery** | [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | **Medium** — standardization in progress externally, ZeroClaw tracking |
| **Atomic batch config writes (`config/set-many`)** | [#10823](https://github.com/zeroclaw-labs/zeroclaw/pull/10823) | **High** — PR open, distinguished contributor, reduces config races |
| **Durable human-question primitive (SOP gate)** | [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) (RFC) | **Medium** — needs maintainer review, but leverages existing SQLite persistence |
| **Delivery receipts for outbound messages** | [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) (RFC) | **Medium** — foundational for gateway reliability |
| **Forward session identity to delegate sub-agents** | [#10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963) | **Medium** — small scope, improves delegation UX |
| **Forward tool results over gateway `/ws/chat`** | [#10962](https://github.com/zeroclaw-labs/zeroclaw/issues/10962) | **High** — gateway completeness, client demand visible |

**Prediction**: v0.8.6 will land plugin egress ceremony (#9584), batch config (#10823), and the security fixes. v0.9.0 hinges on gateway separation (#7432) and plugin runtime (#8850).

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **ZeroCode config UX jank** | Double `config/list` on save (#10951), cost warnings silent (#10950) | 2 issues today |
| **Provider interop fragility** | OpenAI-compatible 400 on tool-result images (#10502), Anthropic signed reasoning broken (#10952) | 2 active PRs + issues |
| **Channel delivery invisibility** | No message IDs, no receipts (#10929) — "nothing can tell whether a message arrived" | RFC opened |
| **Delegation context loss** | Sub-agents don't inherit session identity (#10963) | New issue |
| **Approval policy leakage** | `always_ask` ignored in Full autonomy (#9724), child loops bypass approval (#10643) | 2 PRs + issues |

**Satisfaction signal**: Users/developers are filing **specific, well-scoped bugs** with reproduction paths — indicates active production use. The RFCs show contributors investing in platform-level improvements.

## 8. Backlog Watch — Stalled High-Value Items
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) `always_ask` survives Full autonomy | **47 days** (opened 2026-08-04) | **High** | Core approval policy broken in autonomy mode; blocks ACP/delegation trust; `needs-maintainer-review` |
| [#10502](https://github.com/zeroclaw-labs/zeroclaw/pull/10502) Tool-result images for OpenAI-compatible | **19 days** | **Medium** | Provider interop regression; `needs-author-action` but stale |
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) ACP persist interrupted turn progress | **30 days** | **High** | ACP protocol compliance; `needs-maintainer-review`, `risk:manual` |
| [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) ADR inventory / accepted RFC tracker | **77 days** | **Low** | Governance debt — accepted RFCs lack decision records |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) Runtime & gateway delivery tracker (v0.8.6/v0.9.0) | **102 days** | **High** | Release roadmap anchor; tracks Phase 2/3 from RFC #5574 |

**Maintainer attention needed**: #9724 and #10197 are **security-adjacent approval bugs** with review requests unanswered for weeks. #7432 is the release gatekeeper.

---

**Health Indicators**: 
- 🟢 **Velocity**: 50 PR updates/24h is strong
- 🟡 **Security**: Two S0 git-bypass bugs in 50 days — parser hardening needed
- 🟡 **Review throughput**: 4+ PRs with `needs-maintainer-review` >2 weeks old
- 🟢 **Architecture**: Clear plugin/gateway roadmap with active implementation
- 🟢 **Testing**: Parity contracts, eval independence, stack guards being codified

**Next digest**: 2026-09-20 — watch for #9724 review, #10966 fix, and plugin PR #9584 merge.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*