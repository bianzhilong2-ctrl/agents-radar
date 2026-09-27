# OpenClaw Ecosystem Digest 2026-09-27

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-27 02:35 UTC

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

# OpenClaw Project Digest — 2026-09-27

---

## **Today's Overview**

OpenClaw experienced another high-activity day with significant community engagement and ongoing instability reports. There were **500 issues** and **500 pull requests** updated within the last 24 hours. No new releases were published today. The project remains highly active, but stability concerns dominate discussions, particularly around recent versions (2026.9.4–2026.9.6). Multiple P0 bugs related to crashes, memory leaks, and update failures are driving urgent maintainer and user interaction.

---

## **Releases**

No new releases were announced on 2026-09-27.

---

## **Project Progress**

Several key engineering PRs were actively developed or reviewed:

- **[PR #159190]** – Performance improvements for memory provenance and dreaming reads.
- **[PR #159182]** – Reduces unnecessary CPU usage during session activity broadcasts.
- **[PR #158847]** – Refactors plugins (Workboard, Voice Call, Reef, LINE) to remove duplication.
- **[PR #158992]** – Fixes worker spawn behavior in Telegram and other non-threaded channels.
- **[PR #158582]** – Completes Android Models settings UI and provider integrations.

These changes suggest continued focus on performance optimization, platform parity (especially mobile), and plugin maintainability.

🔗 [View all PRs](https://github.com/openclaw/openclaw/pulls?q=updated%3A2026-09-27)

---

## **Community Hot Topics**

### 🔥 Top Active Issues:
1. **[Issue #153257]** – *"OpenClaw 2026.9.5 Turned a Stable Environment Into an 8-Hour Failure Recovery Session"*  
   - Status: Open / P0 / Crash  
   - Comments: 41  
   - Link: [GitHub Issue #153257](https://github.com/openclaw/openclaw/issues/153257)  
   - Highlights severe regression impact post-upgrade; indicates need for better pre-release testing.

2. **[Issue #111897]** – *"Two concurrent runs for the same session lane both complete and deliver duplicate replies under load"*  
   - Status: Open / P1  
   - Comments: 20  
   - Link: [GitHub Issue #111897](https://github.com/openclaw/openclaw/issues/111897)  
   - Shows concurrency control weaknesses affecting message integrity.

3. **[Issue #114612]** – *"SQLite unbounded growth in memory_index_chunks + memory_embedding_cache tables"*  
   - Status: Open / P2  
   - Comments: 16  
   - Link: [GitHub Issue #114612](https://github.com/openclaw/openclaw/issues/114612)  
   - Indicates lack of database retention policies leading to disk exhaustion.

4. **[Issue #157067]** – *"Windows isolated cron setup passes uncloneable environment Proxy to session history worker"*  
   - Status: Open / P1  
   - Comments: 13  
   - Link: [GitHub Issue #157067](https://github.com/openclaw/openclaw/issues/157067)  
   - Affects Windows users specifically due to platform-specific environment handling.

5. **[Issue #87561]** – *"Define durable final fallback delivery semantics across channels"*  
   - Status: Open / P1  
   - Comments: 12  
   - Link: [GitHub Issue #87561](https://github.com/openclaw/openclaw/issues/87561)  
   - Addresses silent message loss issues across communication channels like WhatsApp.

🔗 [Top commented issues list](https://github.com/openclaw/openclaw/issues?q=comments%3A%3E10+updated%3A2026-09-27)

---

## **Bugs & Stability**

Critical bugs reported or discussed today include:

| Severity | Issue Title | Link |
|---------|-------------|------|
| **P0** | Gateway crash-loops on startup | [Issue #157160](https://github.com/openclaw/openclaw/issues/157160) |
| **P0** | Native memory leak (~1GB/30s) | [Issue #155191](https://github.com/openclaw/openclaw/issues/155191) |
| **P0** | Model catalog worker leaks large temp files | [Issue #156571](https://github.com/openclaw/openclaw/issues/156571) |
| **P0** | Plugin source capture rewrites 1.1–6.5GB per command/startup | [Issue #157989](https://github.com/openclaw/openclaw/issues/157989) |
| **P1** | Duplicate assistant replies in ACP sessions | [Issue #110368](https://github.com/openclaw/openclaw/issues/110368) |
| **P1** | WhatsApp group messages not received | [Issue #107244](https://github.com/openclaw/openclaw/issues/107244) |
| **P1** | Update failure: `global-install-failed` | [Issue #154924](https://github.com/openclaw/openclaw/issues/154924), [Issue #155243](https://github.com/openclaw/openclaw/issues/155243) |

Many of these bugs stem from recent releases (e.g., 2026.9.4–2026.9.6), suggesting potential QA gaps or risky feature rollouts.

---

## **Feature Requests & Roadmap Signals**

- **[Issue #155633]** – Request to add **Databricks Unity Gateway** as an official model provider.  
  - Implementation PR already exists: [PR #155634](https://github.com/openclaw/openclaw/pull/155634)  
  - Signal of interest in enterprise-grade model hosting integrations.

- **[Issue #79223]** – Configurable Dream Diary language/prompt support.  
  - Link: [GitHub Issue #79223](https://github.com/openclaw/openclaw/issues/79223)  
  - Reflects demand for localization and customization in memory features.

- **[Issue #156632]** – Bounded launch contract for Swarm agents.run.  
  - Link: [GitHub Issue #156632](https://github.com/openclaw/openclaw/issues/156632)  
  - Proposal aimed at enhancing security and isolation for agent workflows.

- **[PR #158582]** – Full Models settings implementation for Android app.  
  - Suggests roadmap emphasis on cross-platform consistency.

---

## **User Feedback Summary**

Users continue to express frustration over:

- **Upgrade instability:** Many report that upgrades from prior stable versions resulted in catastrophic failures requiring multi-hour recovery efforts.
- **Performance degradation:** Memory and disk leaks have rendered some installs unusable post-upgrade.
- **Update mechanism bugs:** Repeatedly failing global install swaps (`openclaw update`) cause disruption.
- **Delivery reliability:** Message duplication, suppression, or complete loss in various messaging platforms (WhatsApp, Slack, Discord).

However, positive feedback highlights appreciation for enhanced plugin extensibility and improved Android UI.

---

## **Backlog Watch**

Some long-standing important issues remain unresolved despite repeated updates:

- **[Issue #87561]** – Durable fallback delivery semantics (first raised May 2026).  
  - Still lacks definitive resolution plan or assignee action.

- **[Issue #103694]** – Unknown format warning on every boot.  
  - First reported July 2026; still flagged with "needs live repro".

- **[Issue #107244]** – WhatsApp group messages never reach inbound handling.  
  - Originally filed July 2026; persists across multiple releases.

Maintainers should prioritize these systemic issues that affect core functionality and user experience.

---

For full transparency and traceability, refer directly to the following resources:
- 📌 [All issues updated today](https://github.com/openclaw/openclaw/issues?q=updated%3A2026-09-27)
- 🛠️ [All PRs updated today](https://github.com/openclaw/openclaw/pulls?q=updated%3A2026-09-27)

Let me know if you'd like a formatted Markdown export or deeper dive into specific areas such as plugin architecture, agent lifecycle changes, etc.

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – Personal AI Assistant & Agent Open‑Source Landscape**  
*Date: 2026‑09‑27*  

---

### 1. Ecosystem Overview
The personal AI assistant / agent ecosystem is maturing into a fragmented but vibrant space, with projects ranging from **broad‑scope “core reference” platforms** (e.g., OpenClaw) to **specialized, security‑first toolkits** (e.g., ZeroClaw) and **niche integration layers** (e.g., PicoClaw for QQ).  Most repositories follow a **continuous‑integration, rapid‑iteration** model, delivering dozens‑to‑hundreds of changes per day, while a few have settled into a **maintenance‑only** mode.  Across the board, the community is increasingly demanding **observability, security hardening, cross‑platform consistency, and multimodal capabilities** (voice, image, schedule‑driven tasks).  

---

### 2. Activity Comparison  

| Project | Issues updated (24 h) | PRs updated (24 h) | Releases (24 h) | Health Score* |
|---------|----------------------|-------------------|----------------|---------------|
| **OpenClaw** | **500** | **500** | 0 | 55 |
| **ZeroClaw** | **50** | **50** | 0 | 68 |
| **Hermes Agent** | **50** | **50** | 0 | 75 |
| **NanoClaw** | **4** | **28** | 0 | 65 |
| **NanoBot** | **4** | **13** | 0 | 80 |
| **CoPaw** | **4** | **3** | 0 | 60 |
| **PicoClaw** | **1** | **3** | 0 | 85 |
| **Moltis** | **0** | **1** | 0 | 90 |
| **IronClaw** | **1** | **1** | 0 | 70 |
| **NullClaw** | – | – | – | N/A |
| **ZeptoClaw** | – | – | – | N/A |
| **TinyClaw** | – | – | – | N/A |
| **LobsterAI** | – | – | – | N/A |

\*Health scores (0‑100) are **estimates** based on: bug severity mix, stability of releases, community engagement, and the proportion of critical (P0/S0) issues left unresolved. Higher scores indicate fewer critical blockers and a more mature, stable code‑base.

---

### 3. OpenClaw's Position  

*Advantages vs. peers*  
- **Largest community footprint** – 500 issues + 500 PR updates in a single day dwarfs all other projects.  
- **Mature plugin ecosystem** – Workboard, Voice Call, Reef, LINE, and emerging Android‑model UI illustrate a breadth of supported channels and platforms rarely matched elsewhere.  
- **Performance‑first core** – Dedicated PRs for memory‑provenance, CPU‑budget trimming, and worker‑spawn optimization show a strong engineering focus on runtime efficiency.

*Technical approach differences*  
- OpenClaw appears to be the **reference architecture** for the broader “Claw” family, emphasizing **plug‑and‑play channel adapters** and **cross‑platform parity** (especially Android).  
- While many peers (ZeroClaw, NanoClaw) gravitate toward **security‑first design** or **specialized runtime features**, OpenClaw’s diffusion is broader, targeting **general‑purpose multi‑channel AI agents** with an emphasis on **scalable performance**.

*Community size comparison*  
- OpenClaw’s daily activity (≈ 1 k items) is **20‑30×** the next most active project (ZeroClaw), indicating a **large, highly engaged contributor base** and a correspondingly **large issue back‑log** that can be a double‑edged sword for users seeking stability.

---

### 4. Shared Technical Focus Areas  

| Focus Area | Core Need | Projects Driving It |
|------------|-----------|----------------------|
| **Observability & Tracing** | Turn‑level telemetry, cost/ confidence reporting, provenance tracking | ZeroClaw (structured sub‑agent results), NanoClaw (`/add‑turn‑traces`), Hermes Agent (host‑context binding) |
| **Security Hardening** | Approval‑manager bypasses, key/session leakage, OIDC enrollment, dependency hygiene | ZeroClaw (S0 approval bypass), NanoClaw (session‑key leakage), OpenClaw (gateway crashes), IronClaw (MCP extension security) |
| **Multimodal & Voice Support** | Native voice replies, image handling, TTS control, suppress/force flags | NanoClaw (`/add‑voice‑replies`), OpenClaw (voice call plugin), ZeroClaw (WhatsApp TTS bugs), Hermes Agent (TUI compression) |
| **Scheduling & Cron Integration** | Direct script execution, jitter windows, reliable cron‑based turns | CoPaw (direct script execution), ZeroClaw (jitter window), OpenClaw (worker spawn), NanoClaw (lean tasks) |
| **Cross‑Platform Parity** | Windows stability, Android UI consistency, Linux Electron sockets, macOS TUI reliability | Hermes Agent (Windows PID check), OpenClaw (Android model UI), ZeroClaw (Windows CI failures), NanoClaw (socket‑safe temp dirs) |
| **Channel‑Specific Reliability** | WhatsApp/Telegram/Matrix/QQ group semantics, mentions, reaction handling | OpenClaw (WhatsApp duplicate replies), ZeroClaw (WhatsApp mentions), PicoClaw (QQ interface), NanoBot (Feishu checkpoint), CoPaw (WeCom tables) |

These overlaps indicate a **converging requirement set** for the ecosystem: agents must be **observable, secure, multimodal, reliably scheduled, and platform‑agnostic** while supporting **rich, channel‑specific semantics**.

---

### 5. Differentiation Analysis  

| Project | Feature Focus | Primary User Profile | Core Architecture Highlights |
|---------|---------------|----------------------|------------------------------|
| **OpenClaw** | Broad multi‑channel plugin suite, performance & Android UI | Teams needing extensible, cross‑platform assistants | Central plugin manager, channel adapters, memory‑provenance runtime |
| **ZeroClaw** | Security‑first, DeFi / NEAR integration, approval manager | Financial‑services or high‑security automation | OIDC‑driven auth, bounded child loops, explicit session roots |
| **NanoBot** | UI‑centric, MCP tool discovery, lightweight chat (Feishu) | UI/UX‑focused bots, low‑latency streaming | WebUI streaming metrics, MCP server abstraction, minimal context model |
| **Hermes Agent** | TUI‑heavy, sub‑agent cost visibility, Windows/ Linux parity | Power users, researchers needing detailed agent introspection | Structured sub‑agent results, host‑context provenance, live compression engine |
| **NanoClaw** | Voice & multimodal flows, error reporting, provider wrappers | Developers building conversational assistants with rich media & scheduling | Turn‑trace DB, voice reply pipeline, lean scheduled tasks, error sink |
| **CoPaw** | Task tracking, i18n, console settings unification, script execution | Enterprise workflow automation, multi‑language deployments | TaskTracker with zombie cleanup, i18n error strings, unified console UX |
| **PicoClaw** | QQ channel

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑09‑27**

---

### 1. Today’s Overview  
The repository shows robust activity: four issues were updated in the last 24 h (all still open) and thirteen pull requests were touched (eleven remain open, two have been merged/closed). No new releases were published. The high proportion of PR updates relative to issues suggests that the codebase is currently in a “steady‑state” development phase, with most effort focused on bug‑fixes, documentation, and incremental feature work rather than major new functionality.

---

### 2. Releases  
*None* – there are no new version tags or release notes for this period.

---

### 3. Project Progress  
- **Merged / Closed PRs (2)**  
  - **#5916** – *Closed*: bug‑fix for MCP server tool discovery when the `tools/list` endpoint paginates. All pages are now loaded before registration, restoring full tool visibility.  
  - **#5919** – *Closed*: UI enhancement for Linear workspace access, letting admins select which members may use the Linear agent directly from the WebUI, removing the need for pairwise exchange codes.  

- **Open PRs advancing features / fixes** – Eleven PRs remain open, most of them (≈ 80 %) are low‑priority bug‑fixes or documentation tweaks. The two PRs that address Feishu bot‑to‑bot messaging (#5929 → #5930) are actively being worked on, indicating a clear community need for richer group‑chat interactions.

---

### 4. Community Hot Topics  

| Item | Type | Link | Activity (comments / reactions) | Core Need |
|------|------|------|--------------------------------|-----------|
| **#5908** | Issue (p2) | <https://github.com/HKUDS/nanobot/issues/5908> | 4 comments, 0 👍 | **Visibility into streaming speed** – users want a live “tokens/sec” indicator while the WebUI streams a reply to know if the model is stalled. |
| **#5903** | Issue (bug) | <https://github.com/HKUDS/nanobot/issues/5903> | 3 comments, 0 👍 | **Incorrect Feishu session‑checkpoint delivery** – after idle auto‑compaction a hidden checkpoint message is sent to the user, cluttering the chat and breaking workflow. |
| **#5924** | Issue (bug) | <https://github.com/HKUDS/nanobot/issues/5924> | 0 comments, 0 👍 | **Sudo loop causing agent lock‑out** – the agent repeatedly attempts sudo, gets stuck, and becomes unusable after the first turn. |
| **#5929** | Issue (enhancement) | <https://github.com/HKUDS/nanobot/issues/5929> | 0 comments, 0 👍 | **Allow bot‑to‑bot messages in groups** – need to permit allow‑listed bot senders to post group messages with hop limits. |

*Analysis*: The most discussed items are #5908 (UX/visibility) and #5903 (messaging hygiene). Both point to a desire for clearer, more reliable interaction feedback in the WebUI and Feishu integration. The sudo loop (#5924) is a critical stability bug, though it currently has no targeted fix PR.

---

### 5. Bugs & Stability  

| Severity | Issue | Summary | Fix PR (if any) |
|----------|-------|---------|-----------------|
| **Critical** | **#5924** | Agent gets stuck in a sudo loop; after the first sudo the authorisation expires, causing the agent to retry endlessly and eventually become unusable. | No dedicated fix PR yet; the problem remains open. |
| **High** | **#5903** | Feishu hidden session‑checkpoint message is delivered to the user after idle compaction, persisting a “Continue the active task …” note that should be suppressed. | **#5930** (open) addresses this by allowing bot‑to‑bot messages in groups with allow‑list and hop‑limit checks. |
| **Medium** | **#5928** | Email body charset unknown → decoding error causing polling interruption. | Fixed in PR #5928 (open). |
| **Medium** | **#5920** | Token‑based truncation may split Unicode characters, inserting replacement  symbols. | Fixed in PR #5920 (open). |
| **Low** | **#5925** | Windows file creation/editing adds duplicate carriage‑return characters, corrupting line breaks. | Fixed in PR #5925 (open). |
| **Low** | **#5922** | Cron next‑run time calculated without proper timezone rules when `CronSchedule.tz` is not set. | Fixed in PR #5922 (open). |

*Overall*: Stability concerns are concentrated around agent interaction loops (sudo) and Feishu message handling. Most of the reported bugs already have corresponding PRs, indicating active remediation.

---

### 6. Feature Requests & Roadmap Signals  

- **Live token‑per‑second metric** (#5908) – a clear UX enhancement that would give operators immediate feedback on model throughput. Its priority (p2) and recent activity suggest it may be slated for the next minor release.  
- **Bot‑to‑bot messaging in Feishu groups** (#5929 → #5930) – the pending PR demonstrates a concrete implementation path; if merged, it will enable richer collaborative workflows between multiple AI agents.  
- **MCP tool pagination fix** (#5916) – already merged, showing that the maintainers are responsive to discovery‑related issues that affect tool usability.  

These items collectively hint at a roadmap focusing on **observability (metrics), reliable messaging, and robust tool integration**.

---

### 7. User Feedback Summary  

- **Visibility & Diagnostics** – Users repeatedly request live performance indicators (tokens/sec) and clearer error messages when streaming stalls.  
- **Messaging Clarity** – Hidden checkpoint messages and bot‑to‑bot message handling are perceived as noisy and confusing, especially in group chats.  
- **Reliability** – The sudo loop bug makes the agent intermittently unusable, frustrating power‑users who rely on continuous execution.  
- **Data Integrity** – Issues with charset handling, Unicode truncation, image base64 decoding, and cron timezone calculations reveal a need for more rigorous handling of edge‑case data formats.  

Overall sentiment leans toward **satisfaction with the project’s rapid bug‑fix cadence**, but **dissatisfaction with certain reliability regressions** (sudo loop, hidden messages) that affect day‑to‑day workflow.

---

### 8. Backlog Watch  

| Item | Why it needs attention | Status |
|------|------------------------|--------|
| **#5924** (sudo loop) | Critical – renders the agent unusable after the first sudo; no fix PR yet. | Open, no recent activity beyond issue creation. |
| **#5908** (live tokens) | High‑impact UX request; no implementation started. | Open, 4 comments, recent updates (Sep 24‑26). |
| **#5903** (Feishu hidden checkpoint) | Moderately severe – pollutes user chat; PR #5930 is in progress but not yet merged. | Open, 3 comments; PR #5930 targets it. |
| **#5927** (boolean‑type validation for notify) | Low‑severity logic bug; PR #5927 fixes it but may have edge‑case regressions. | Open, recent activity. |
| **#5914** (Napcat image size validation) | Prevents premature rejection of oversized images; PR #5914 is open. | Open, recent updates. |

*Maintainer focus*: Prioritize the **sudo loop** issue (high severity, no fix) and the **live token** feature (high user‑requested value). The Feishu bot‑to‑bot PR should be merged promptly to close the related hygiene issue.

--- 

*Prepared by the NanoBot analysis team – data sourced from the project’s GitHub activity as of 2026‑09‑27.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-09-27

## 1. Today's Overview

Hermes Agent continues steady development with **50 open/active issues** and **50 pull requests** in the last 24 hours. There are **no new releases** this period—releases remain at version 0.21.5+. The codebase shows strong focus on stability improvements for Windows compatibility, TUI reliability, and enhanced feature parity across platforms. Most issues remain open, indicating ongoing refinement of edge cases rather than critical blockers.

## 2. Releases

**No new releases** were published in the 2026-09-27 window. The latest stable version remains **v0.21.5+2441**. Existing releases continue to receive maintenance-focused patches rather than major version bumps.

## 3. Project Progress

### Merged/Closed PRs (selected)
- **#124695** – Re-attribute 194 agent-identity commits to @OutThisLife (chore)
- **#124697** – Fix autostash retention when updates replace untracked files (fix)
- **#124698** – End-to-end testing suite for install/update across diverse host environments (test)
- **#124699** – Bind host context to tool handler execution for provenance tracking (feature)
- **#122835** – Broadcast `projects.changed` events when `projects.db` mutates (fix)
- **#112394** – Structured subagent results display for cost visibility (feature)

### Key Feature Advances
- **Structured subagent results** (#112394) improve transparency around pricing and confidence scores.
- **ParrotNotes plugin** (#124693) adds community support for meeting note-taking.
- **Host-context binding** (#124699) enables provenance tracking for tool executions.
- **Autostash resilience** (#124697, #124698) ensures local changes survive updates even when files are replaced.

### Ongoing Improvements
- **Workspace consistency** (#122425, #123344, #123463) addresses managed-environment drift and PID identity checks on Windows.
- **TUI stability** (#103410, #124583, #119070) resolves live compression hot-reload crashes and incorrect terminal hints.
- **Desktop performance** (#124696, #124699) introduces socket-safe temporary directories for Linux Electron.

## 4. Community Hot Topics

| Issue | Type | Comments | Link |
|-------|------|----------|------|
| **#103410** – TUI live compression hot-reload crashes on external context engines (LCMEngine) | Bug | 9 | [#103410](https://github.com/nousresearch/hermes-agent/issues/103410) |
| **#122425** – Managed env workspace copy drift, missing install metadata | Bug | 6 | [#122425](https://github.com/nousresearch/hermes-agent/issues/122425) |
| **#119070** – Kanban card parked as `blocker_auth` after rate-limit success | Bug | 6 | [#119070](https://github.com/nousresearch/hermes-agent/issues/119070) |
| **#124583** – Terminal tool background hint references non-existent `process_manage` | Bug | 4 | [#124583](https://github.com/nousresearch/hermes-agent/issues/124583) |
| **#123109** – Bootstrap-launched gateway misclassified after #121635 | Bug | 4 | [#123109](https://github.com/nousresearch/hermes-agent/issues/123109) |

These five issues dominate discussion due to their impact on core functionality (TUI stability, workspace integrity, workflow automation, and terminal usability).

## 5. Bugs & Stability

| Severity | Issue | Impact | Status | Fix PR |
|----------|-------|--------|--------|--------|
| **High** | **#103410** – Live compression hot-reload crashes on LCMEngine | Crash on external context engine usage | Open | No dedicated fix yet; referenced in #122425 |
| **High** | **#122425** – Workspace drift causing PM sync failures | Installed environments diverge from main | Open | No fix yet; requires workspace re-sync logic |
| **Medium** | **#123463** – Windows PID identity check rejects live gateway post-update | False "no gateway" status after update | Open | No fix yet |
| **Medium** | **#124318** – Windows updater gateway invisible to discovery | Update blocks restart loop | Open | No fix yet |
| **Low** | **#124582** – Memory tool overwrites entire entries on partial edits | Silent loss of sibling facts | Open | No fix yet |

**Priority Fixes**
- **#103410** (TUI compression crash) is actively monitored; linked to broader workspace consistency efforts.
- **#122425** (workspace drift) is a recurring pain point affecting multiple environments.
- **#123463** (Windows PID check) directly impacts Windows stability and requires immediate attention.

## 6. Feature Requests & Roadmap Signals

- **Structured subagent results** (#112394) – Provides clearer visibility into agent confidence and cost breakdowns, likely to become standard in future releases.
- **ParrotNotes plugin** (#124693) – Community-driven addition for meeting note-taking; may expand to other specialized plugins.
- **Host-context provenance** (#124699) – Enables tracing tool execution origins, improving auditability and debugging.
- **Autostash resilience** (#124697, #124698) – Ensures local changes aren't lost during updates, addressing frequent user frustration.
- **Explicit fallback mode persistence** (#111142) – Improves session continuity after interruptions.

These features align with Hermes Agent’s direction toward better observability, platform diversity (especially Windows), and improved developer experience.

## 7. User Feedback Summary

Users consistently report friction around **Windows-specific behaviors**:
- Gateway detection failures after updates (#124318, #123463).
- TUI instability when using external context engines (#103410).
- Terminal tool guidance pointing to non-existent commands (#124583).
- Session management complexity (parked cards, orphaned tasks).

Additionally, **feature requests** highlight demand for:
- More transparent cost and confidence reporting in subagents.
- Better integration with third-party tools (Mattermost, custom providers).
- Enhanced offline/edge capabilities (local cold archives).

Overall sentiment leans positive regarding recent stability fixes, but critical usability gaps—particularly on Windows—remain unresolved and require prioritization.

## 8. Backlog Watch

Several high-priority issues warrant continued attention:

1. **#103410** – TUI live compression hot-reload crash (critical stability risk)
   - [Link](https://github.com/nousresearch/hermes-agent/issues/103410)
2. **#122425** – Managed environment workspace drift (affects multi-instance deployments)
   - [Link](https://github.com/nousresearch/hermes-agent/issues/122425)
3. **#123463** – Windows PID identity check blocking gateway startup
   - [Link](https://github.com/nousresearch/hermes-agent/issues/123463)
4. **#124318** – Windows updater invisibility preventing restart loops
   - [Link](https://github.com/nousresearch/hermes-agent/issues/124318)
5. **#124583** – Terminal tool misleading background hint
   - [Link](https://github.com/nousresearch/hermes-agent/issues/124583)

These items should be addressed in the next sprint to prevent regression and improve user satisfaction.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑09‑27**  
*(based on GitHub activity for sipeed/picoclaw)*  

---  

### 1. Today's Overview  
- **Issue activity:** 1 issue was updated in the last 24 h (opened #3394, still open).  
- **PR activity:** 3 pull‑requests were updated (1 still open #3347, 2 merged/closed #3310 and #1349).  
- **Releases:** No new tags or releases were published today.  
Overall, the repository shows modest maintenance activity – a handful of updates focused on UI lag fixes and QQ‑channel enhancements, with a newly reported QQ‑interface bug awaiting attention.

### 2. Releases  
*None.* No new version was released in the past 24 h.

### 3. Project Progress (Merged/Closed PRs)  
| PR | Title | Type | Summary of Changes | Link |
|----|-------|------|--------------------|------|
| #3310 | **Feat/auto pr** | Feature (automation) | Automated PR handling (likely CI/CD workflow tweaks) – merged without discussion. | [sipeed/picoclaw#3310](https://github.com/sipeed/picoclaw/pull/3310) |
| #1349 | **feat(qq): support parsing and replying to more attachment types** | Enhancement (channel‑specific) | • Adds parsing of QQ Channel emoji structures.<br>• Enables handling of incoming voice, image, video, and file messages from QQ Channel.<br>• Adds ability to reply with local voice/image/video/file attachments (upload‑then‑send).<br>• Prefers Markdown for replies, falling back to plain text. | [sipeed/picoclaw#1349](https://github.com/sipeed/picoclaw/pull/1349) |

These two merges advance QQ‑channel support and improve repository automation, indicating ongoing work on the QQ integration pathway.

### 4. Community Hot Topics  
All items currently show **zero comments and zero reactions** (the API returned “undefined” for comment counts). Consequently, there is no clear “hot” discussion based on engagement metrics. The most notable items by recency are:  

- **Issue #3394** – *BUG: QQ机器人的接口更新了，但QQ聊天通道的接口似乎没有更新，希望修复* (QQ bot interface updated but QQ chat channel interface not updated).  
- **PR #3347** – *[stale] fix laggy interface* – addresses UI lag when chat area contains large text volumes.  

Both are linked below for reference:  

- [Issue #3394](https://github.com/sipeed/picoclaw/issues/3394)  
- [PR #3347](https://github.com/sipeed/picoclaw/pull/3347)  

The lack of comments suggests either low community visibility or that maintainers are handling these items internally.

### 5. Bugs & Stability  
| Severity | Item | Description | Status / Fix PR |
|----------|------|-------------|-----------------|
| **Medium** | Issue #3394 | QQ bot interface changed; the QQ chat channel adapter has not been updated, causing potential message send/receive failures. | Open – no linked fix PR yet. |
| **Low** | PR #3347 (still open) | UI lag when chat area accumulates large text; fix prepared but PR marked *stale* (no recent activity). | Open – fix exists but needs review/merge. |

No crashes or regressions were reported today beyond the QQ interface mismatch.

### 6. Feature Requests & Roadmap Signals  
- **QQ‑channel attachment handling** (PR #1349) signals a clear roadmap push toward richer multimedia support on QQ. Expect the next release to include these capabilities unless blocked by further QQ API changes.  
- **Automation of PR workflow** (PR #3310) indicates a focus on reducing maintenance overhead; future releases may incorporate more CI/CD automation.  
- The laggy‑interface fix (PR #3347) reflects a user‑experience priority; once merged, it should improve responsiveness for heavy‑use chats.  

Thus, the imminent roadmap likely centers on stabilizing QQ integration, polishing UI performance, and streamlining contribution processes.

### 7. User Feedback Summary  
- **Pain points:**  
  - Users experience lag in the web UI when chat histories grow large (reported via PR #3347).  
  - Recent QQ bot API updates broke the existing QQ chat channel integration (Issue #3394).  
- **Positive signals:**  
  - Contributors are actively enhancing QQ channel multimedia support (PR #1349), showing responsiveness to feature requests for richer messaging.  
  - Automation improvements (PR #3310) suggest an effort to lower contributor friction, which may improve long‑term project health.  

Overall, satisfaction appears mixed: core functionality works, but UI performance and external‑API compatibility need attention.

### 8. Backlog Watch  
| Item | Age | Why it matters | Suggested action |
|------|-----|----------------|------------------|
| **Issue #3394** (QQ interface mismatch) | <1 day | Blocks reliable QQ bot operation; likely affecting users who rely on QQ channel. | Prioritize a fix; coordinate with QQ API documentation; consider adding a test to catch future API changes. |
| **PR #3347** (laggy interface) | ~1 month (stale) | Directly impacts user experience, especially in long‑running chats. | Review the fix, run the provided benchmarks, and merge if no regressions. |
| *(No other long‑standing items were present in the 24 h snapshot.)* | | | |

---  

**Conclusion:** PicoClaw is seeing modest, focused development activity—primarily around QQ channel enhancements and UI performance. The immediate priority should be resolving the newly reported QQ interface bug (#3394) and merging the lag‑fix PR (#3347) to restore stability and usability for the community. Continued attention to automated PR handling (#3310) will help maintain momentum as the project evolves.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest – 2026-09-27

## 1. Today's Overview
NanoClaw remains highly active with 28 pull requests merged or created in the last 24 hours, alongside four newly opened issues. The team is focused on expanding feature set—particularly around agent observability, multimodal capabilities, and operational reliability—while addressing several critical security and compatibility concerns. Despite the pace of development, three open issues require immediate attention, primarily related to potential key leakage and dependency stability.

## 2. Releases
No new releases have been published since the last stable version. The project continues to iterate internally through pull requests rather than public version bumps.

## 3. Project Progress
In the past day, the team delivered 28 PRs (23 open, 5 merged/closed), advancing multiple high-priority initiatives:

- **Feature Expansion** – Over a dozen new skills were introduced or refined, including per-turn agent traces (`/add-turn-traces`), voice replies for spoken responses (`/add-voice-replies`), repository self-editing (`/add-repo-self-edit`), error reporting (`/add-error-reports`), lean scheduled tasks (`/add-lean-tasks`), and graphical pre-task flow definitions (`/add-flows`).
- **Channel Improvements** – Slack now supports collapsible `send_card` sections, and Telegram receives an opt-in live progress indicator during long turns.
- **Agent Runner Refactoring** – A minimal-context provider option was added, allowing calls to the Claude provider without ambient context, improving efficiency for small/local models.
- **Host Stability** – An operational error sink was introduced to capture plumbing failures, and a provider-wrapper seam with per-query retry logic was implemented.
- **Security Hardening** – Ongoing work addresses a known vulnerability in the `@whiskeysockets/baileys@7.0.0-rc.9` dependency and mitigates risk from potential key exposure in session logs.

## 4. Community Hot Topics
The most active discussion points center on **security and privacy**, particularly around secret leakage in session logs (Issue #2520), and **feature demand** for richer observability and multimodal interactions. Recent PRs indicate strong interest in:

- **Observability** – Tracking per-turn agent actions via database-backed traces (`/add-turn-traces`) and visual flow definitions (`/add-flows`).
- **Multimodality** – Adding voice reply support (`/add-voice-replies`) and ensuring safe integration of third-party libraries like `libsignal-node`.
- **Reliability** – Better error reporting (`/add-error-reports`) and graceful handling of host plumbing failures (`/add-scheduled-update`, `/add-flows`).

All four newly opened issues are open and active, with #2520 drawing particular concern due to potential exposure of cryptographic material.

## 5. Bugs & Stability
| Issue | Severity | Impact | Status |
|-------|----------|--------|--------|
| #2520 – Session key leakage | High | Privacy risk – logs may contain `privKey`, `rootKey`, `chainKey` buffers | Open |
| #3943 – MODULE_NOT_FOUND regression | Medium | Crash on controller import after recent changes | Open |
| #3942 – Dependency pin drift | Medium | Broken builds due to stale `@whiskeysockets/baileys` | Open |
| #3941 – Vulnerable dependency | High | Known security flaw (GHSA-qvv5-jq5g-4cgg) affecting WhatsApp channel | Open |

No fix PRs have been merged yet for these issues. The key leakage issue requires immediate review of log sanitization, while the MODULE_NOT_FOUND regression must be resolved to restore stable builds.

## 6. Feature Requests & Roadmap Signals
The current trajectory suggests the following upcoming enhancements:

- **Turn Traces & Observability** – Per-turn action logging will become foundational for debugging and audit trails.
- **Voice Interaction** – Native voice replies enable multimodal conversations without requiring external services.
- **Error Resilience** – Automatic error reporting and operational error sinks improve system transparency.
- **Efficient Scheduling** – Lean tasks and provider wrappers reduce overhead for lightweight deployments.
- **Upstream Contribution Framework** – The `/contribute-upstream` skill streamlines sharing custom features back to the main codebase.

These align with the core goals of making NanoClaw more reliable, observable, and extensible.

## 7. User Feedback Summary
Users have expressed frustration with opaque internal processes and lack of visibility into agent behavior. The introduction of collapsible `send_card` sections (Slack) and detailed turn traces should address this by providing clearer, more manageable interfaces. Additionally, the security incident (#2520) has raised awareness about the importance of protecting sensitive cryptographic material. Overall sentiment leans positive toward the feature momentum, though trust in the platform’s safety posture remains a priority.

## 8. Backlog Watch
The following open issues warrant urgent attention:

- **[#2520](https://github.com/qwibitai/nanoclaw/issues/2520)** – Potential exposure of Signal Protocol session keys in `logs/nanoclaw.log`. Requires immediate mitigation to prevent credential leakage.
- **[#3943](https://github.com/qwibitai/nanoclaw/issues/3943)** – Regression causing `MODULE_NOT_FOUND` errors in the controller. Must be fixed to ensure stable builds.
- **[#3941](https://github.com/qwibitai/nanoclaw/issues/3941)** – Dependency on `@whiskeysockets/baileys@7.0.0-rc.9` is vulnerable (GHSA-qvv5-jq5g-4cgg). Needs patching or replacement.
- **[#3942](https://github.com/qwibitai/nanoclaw/issues/3942)** – Continued instability from stale dependency pins; regular audits recommended.

These items should be prioritized in the next sprint to maintain both functionality and security posture.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-27

## 1. Today's Overview
IronClaw's activity on 2026-09-27 is exceptionally low, with only 1 issue and 1 pull request updated over the last 24 hours and zero new releases. The sole community contribution is a feature request to integrate NEAR token launchpad capabilities, while the only codebase update is an automated, bot-generated knowledge graph refresh. This indicates a quiet period for community-driven development and core feature advancement, with project maintenance currently relying heavily on automated infrastructure workflows rather than active human contribution.

## 2. Releases
No new versions were published in the last 24 hours. There are no breaking changes, migration notes, or version updates applicable for today.

## 3. Project Progress
There were zero merged or closed pull requests today. The only PR updated, [#7988](https://github.com/nearai/ironclaw/pull/7988), is an automated, CI-generated chore task to refresh the codebase knowledge graph bootstrap snapshot rather than a feature advancement or bug fix. No features advanced, and no issues were fixed in the last 24 hours.

## 4. Community Hot Topics
*   **Issue [#8112](https://github.com/nearai/ironclaw/issues/8112) - [OPEN] Feature: NEARA hosted-MCP extension**
    *   **Analysis:** This is the only active topic in the last 24 hours. The author requests MCP (Model Context Protocol) extensions to allow IronClaw agents to interact with the NEARA launchpad on NEAR mainnet. The underlying need is to expand the agentic and financial capabilities of IronClaw, enabling autonomous actions such as listing, quoting, launching, and trading tokens with a fixed 1B supply that open as locked concentrated-liquidity pools on Rhea DCL. 
    *   **Link:** [github.com/nearai/ironclaw/issues/8112](https://github.com/nearai/ironclaw/issues/8112)

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. No stability-related issues exist, and consequently, there are no associated fix PRs to review.

## 6. Feature Requests & Roadmap Signals
*   **Issue [#8112](https://github.com/nearai/ironclaw/issues/8112):** The request for a NEARA hosted-MCP extension signals a strong push toward DeFAI (Decentralized Finance AI) capabilities. As agents increasingly require real-world transaction and trading utilities, this feature has high potential for future roadmap prioritization. The specific mechanism for interacting with NEARA's locked concentrated-liquidity pools on Rhea DCL could serve as a blueprint for broader DeFi integrations in upcoming versions.

## 7. User Feedback Summary
There is no direct user feedback available today. The sole active issue has 0 comments and 0 👍 (reactions). The project is currently experiencing a silent period regarding direct user interaction, suggesting either a stable state where pain points are not actively being reported, or a temporary lack of active community engagement.

## 8. Backlog Watch
*   **PR #7988** ([https://github.com/nearai/ironclaw/pull/7988](https://github.com/nearai/ironclaw/pull/7988)): This automated `Codebase Graph Refresh` PR was created on 2026-08-29 and only received an update today (2026-09-26). It has been sitting in an open state for nearly a month. Although it is a low-risk, XS-sized CI/Infrastructure task generated by a nightly workflow, maintainers should review and merge it promptly to ensure the committed codebase-memory bootstrap snapshot remains current. 
*   **Issue #8112** ([https://github.com/nearai/ironclaw/issues/8112](https://github.com/nearai/ironclaw/issues/8112)): As the only open issue with zero community engagement, it requires maintainer attention to triage, validate the scope of the NEARA MCP integration, and provide initial feedback to the contributor.

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

# Moltis Project Digest — 2026-09-27

**Repository:** [moltis-org/moltis](https://github.com/moltis-org/moltis)

---

### 1. Today's Overview
Activity is extremely low: **0 issues** updated and **1 open PR** (no merges/closures) in the last 24h. No new releases were published. The project appears to be in a quiet/maintenance phase with minimal community pull on the development pipeline. The sole change is a documentation tweak, suggesting no active feature or bug-fix sprint is underway.

### 2. Releases
**None.** No new versions tagged or published today.

### 3. Project Progress
No PRs were merged or closed. The only PR updated is a **docs-only** addition:
- [#1285](https://github.com/moltis-org/moltis/pull/1285) `docs: add RepoCloud one-click deploy button` — adds a RepoCloud row to the Cloud Deployment table in README.md, linking to `https://repocloud.io/details/Moltis/`.

### 4. Community Hot Topics
No high-engagement items. The single PR has **0 reactions** and **undefined comment count**, indicating no visible community discussion or traction yet.

### 5. Bugs & Stability
**None reported.** Zero issues updated in the last 24h; no crash/regression signals.

### 6. Feature Requests & Roadmap Signals
The RepoCloud button PR signals ongoing demand for **multi-cloud one-click deployment** — expect more provider rows (e.g., Railway, Fly.io, AWS) if this pattern continues.

### 7. User Feedback Summary
No user feedback captured in today's data window. Cannot assess pain points or satisfaction from the snapshot.

### 8. Backlog Watch
Nothing surfaced from the 24h window. Recommend checking the full issue/PR list for aged items (e.g., PRs open >30 days, issues with no reply >14 days) outside this digest scope.

---

**Health Signal:** 🟡 Low velocity — single doc PR, no code merges, no releases, no issues. Project is alive but not actively evolving. Worth monitoring whether this is a lull or a sustained quiet period.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest - 2026-09-27

## 1. Today's Overview

The CoPaw project maintained moderate activity over the past 24 hours, with **4 issues updated** (2 open, 2 closed) and **3 pull requests updated** (all open). Notably, there have been **no new releases** since the last version. The focus has shifted toward critical stability fixes—particularly around context window management and task tracking—and several feature enhancements targeting workflow automation and cross-platform compatibility.

## 2. Releases

No new releases were published in the current period. The project remains stable with the latest available version unchanged. All recent changes are being addressed through pull requests rather than version upgrades.

## 3. Project Progress

### Open Pull Requests (Updated Today/Last 24h)
- **#7993** [OPEN] *fix(i18n)* – Add two missing error strings used by unguarded call sites (`common.operationFailed`, `voiceTranscription.loadFail`). This ensures proper internationalization localization across six call sites in `MailAccessControlDrawer.tsx` and one in `Inbox/index.tsx`.
- **#7992** [OPEN] *fix(wecom)* – Correct `format_markdown_tables()` logic in `src/qwenpaw/app/channels/wecom/utils.py`. Previously, any line containing a pipe character `|` would trigger unwanted table generation, incorrectly converting normal prose into markdown tables.
- **#7991** [OPEN] *Bug* – TaskTracker reports inflated `running_task_count` due to zombie entries not being cleaned up, causing disagreement between the dashboard aggregator and the per-chat tracker counters.
- **#7956** [OPEN] *feat(console)* – Unify console settings UX and improve conversation transitions. Includes refinement of settings interface, smoother flow between workspaces, and resolution of workspace-picker overflow and welcome-screen flash issues.

### Closed Pull Requests (Recent)
- **#7994** [CLOSED] – Context window compression bug (created 2026-09-27). Users report that compressing long contexts (e.g., 91.7K → 131.1K) fails to reduce output below 3 dialogues, and adjusting the threshold to 0.5 does not resolve the issue.
- **#7804** [CLOSED] – Management component overhaul affecting backend, console, channels, skills, CLI, and documentation.

## 4. Community Hot Topics

| Item | Type | Status | Impact |
|------|------|--------|--------|
| **#4963** – Cron script/shell execution | Open | High | Enables direct execution of scripts without AI mediation, addressing a common workflow gap. |
| **#7994** – Context compression failure | Closed | Medium | Recent regression affecting context window management; requires immediate fix. |
| **#7991** – TaskTracker zombie entries | Open | High | Core reliability issue affecting task counting accuracy. |
| **#7992** – WeCom markdown table bug | Open | Medium | Channel-specific rendering problem impacting WeCom users. |

The most actively discussed topics center on **automation capabilities** (#4963) and **stability improvements** (#7994, #7991). These align with user demands for more direct task execution and better resource management.

## 5. Bugs & Stability

| Priority | Issue | Summary | Link |
|----------|-------|---------|------|
| 🔴 Critical | **#7994** – Context compression | Compressed context windows fail to meet expected size reduction; threshold adjustment ineffective. | [#7994](https://github.com/agentscope-ai/CoPaw/issues/7994) |
| 🔴 Critical | **#7991** – Zombie task tracking | Running task counter inflates due to uncleaned zombie entries, causing mismatch between dashboard and API. | [#7991](https://github.com/agentscope-ai/CoPaw/issues/7991) |
| 🟡 High | **#7992** – WeCom table rendering | Pipe characters in prose incorrectly trigger markdown table generation. | [#7992](https://github.com/agentscope-ai/CoPaw/issues/7992) |
| 🟡 Medium | **#4963** – Cron script execution | Feature request for direct shell/script execution within cron tasks. | [#4963](https://github.com/agentscope-ai/CoPaw/issues/4963) |
| 🟢 Low | **#7956** – Console settings UX | Ongoing improvement to settings consistency and conversation transition flow. | [#7956](https://github.com/agentscope-ai/CoPaw/pull/7956) |

The most severe issues are **#7994** (recently opened) and **#7991** (already open), both directly impacting core functionality. Both require urgent attention before the next release cycle.

## 6. Feature Requests & Roadmap Signals

- **Direct Script/Shell Execution** (Issue #4963) – A clear roadmap item. Users frequently ask how to run external commands without AI intervention. This aligns with the "Cron: Support direct script/shell execution task type" enhancement already tracked.
- **Context Window Optimization** (Issue #7994) – The compression bug suggests room for improved memory management. Once resolved, future versions could explore smarter truncation strategies.
- **Console Settings Unification** (PR #7956) – Indicates ongoing effort to standardize the UI/UX across all components, which will benefit both new and existing users.
- **WeCom Channel Improvements** (PR #7992) – While currently a bug fix, the underlying issue highlights the need for robust markdown parsing across diverse channel integrations.

These signals point toward a roadmap prioritizing **workflow automation**, **resource efficiency**, and **cross-platform consistency**.

## 7. User Feedback Summary

Users have expressed frustration with three main areas:

1. **Lack of Direct Automation** – Multiple requests for executing scripts and shell commands outside the AI layer. Issue #4963 captures this demand explicitly.
2. **Context Management Pain Points** – The compression bug (#7994) indicates users struggle with managing long-context scenarios, leading to truncated responses.
3. **UI/UX Friction** – Consistency issues in the console settings and channel-specific rendering (especially WeCom) affect daily usage.

Overall sentiment leans positive regarding recent fixes (e.g., #7992, #7956), but critical stability gaps remain unresolved.

## 8. Backlog Watch

| ID | Title | Status | Action Needed |
|----|-------|--------|---------------|
| #4963 | Cron: Support direct script/shell execution task type | Open | Prioritize implementation; ensure security scanning for executed commands. |
| #7994 | Context display status update (compression) | Closed (but unresolved) | Investigate root cause; implement smarter compression algorithm. |
| #7991 | TaskTracker zombie entries inflate running_task_count | Open | Debug cleanup logic; verify task lifecycle management. |
| #7992 | Stop treating prose containing pipe as markdown table | Open | Review regex-based table detection; test edge cases. |
| #7956 | Unify settings UX and smooth conversation transitions | Open | Continue iterative improvements; address remaining overflow/flash issues. |

**Priority**: Address #7994 and #7991 immediately to restore core reliability. Follow with #4963 to enable powerful automation use cases.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-27

---

## 1. Today's Overview

ZeroClaw shows **high velocity** with 100 total items (50 issues, 50 PRs) updated in the last 24 hours. The project is in active development with **no new release** but significant progress on security hardening, channel integrations (WhatsApp, Matrix, ACP), and core runtime stability. Critical security bugs (S0 severity) around approval bypasses and data loss are being actively addressed. The maintainer decision queue (#8692) indicates structured governance for RFCs and design issues. Overall health: **active, security-focused, pre-release stabilization phase**.

---

## 2. Releases

**No new releases** in the last 24 hours. The project appears to be between versions (last referenced v0.8.4–v0.8.5 in issues).

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#11133](https://github.com/zeroclaw-labs/zeroclaw/pull/11133) | fix(rpc): revalidate forwarded environment on session reuse | Security / RPC | **Closed** |
| [#11082](https://github.com/zeroclaw-labs/zeroclaw/pull/11082) | feat(security): OIDC principals, enrollment and the gateway auth surface (#8289) | Security / Auth | **Closed** (major merge) |
| [#11189](https://github.com/zeroclaw-labs/zeroclaw/pull/11189) | fix(parser): preserve browser and search tool semantics | Tools / Parser | **Closed** |
| [#11044](https://github.com/zeroclaw-labs/zeroclaw/pull/11044) | feat(zerocode): make session roots explicit and preserve resumed roots | ZeroCode / UX | **Closed** |
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | [Bug]: Git `--attr-source` can hide mutating subcommand from approval | Security / Sandbox | **Closed** (issue) |
| [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) | [Bug]: WhatsApp Web ignores `suppress_voice` when queueing TTS | Channel / WhatsApp | **Closed** (issue) |
| [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) | Three Windows-only test failures on advisory job | CI / Windows | **Closed** (issue) |
| [#10826](https://github.com/zeroclaw-labs/zeroclaw/issues/10826) | [Feature]: Make ZeroCode session root selection explicit | ZeroCode | **Closed** (issue) |
| [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) | [Bug]: Single-candidate stream recovery ignores `provider_retries` | Provider / Anthropic | **Closed** (issue) |
| [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) | fix(runtime): fail-closed approval enforcement for bounded child loops | Security / Runtime | **Closed** (issue) |

**Key advances**: Major OIDC/security stack landed (#11082), parser tool-semantics fix merged, ZeroCode session-root UX improved, multiple S0/S1 security bugs resolved.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue for RFCs | 15 | Tracker | **Governance**: Centralized queue for maintainer decisions on RFCs, design issues, release policy |
| [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) WhatsApp Web: `create_room` / `invite_user` | 5 | Feature | **Channel parity**: Group creation & participant management for WhatsApp Web |
| [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) WhatsApp ignores `suppress_voice` | 5 | Bug (closed) | **TTS control**: Voice-reply suppression not respected |
| [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) Windows test flakiness | 4 | Bug (closed) | **CI stability**: Spurious Windows failures on unrelated PRs |
| [#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036) OpenCode `big-pickle` 403 FreeTierError | 4 | Bug | **Provider compat**: Free-tier model blocked on OpenCode-compatible provider |
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) Daemon never registers channel-map factory | 4 | Bug (P1) | **Daemon channels**: Webhook/cron/SOP turns have no channels in daemon mode |
| [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) Add Cheaper Inference provider | 3 | Feature | **Provider ecosystem**: Typed OpenAI-compatible provider for Cheaper Inference |
| [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) WhatsApp ignores `force_voice` | 3 | Bug | **TTS control**: `send_via` cannot route to voice |
| [#10976](https://github.com/zeroclaw-labs/zeroclaw/issues/10976) WhatsApp mentions broken both ways | 3 | Bug | **Mentions**: Inbound bare JIDs, outbound no `mentionedJid` |
| [#10969](https://github.com/zeroclaw-labs/zeroclaw/issues/10969) Jitter window for cron/heartbeat | 3 | Feature | **Scheduling**: Prevent thundering herd on co-scheduled agents |

**Underlying themes**: WhatsApp Web channel maturity, daemon-mode channel wiring, provider ecosystem expansion, scheduling reliability, and governance scaling.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **S0** Data loss / Security | [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) | Concurrent `file_edit`/`file_write` to same path silently drops one edit under `parallel_tools` | No PR yet |
| **S0** Security | [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | Unattended turns (cron, heartbeat, headless SOP, spawn_subagent) run with **no ApprovalManager** → risk-profile tool approvals silently inert | No PR yet |
| **S0** Security | [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | Git `--attr-source` hides mutating subcommand from approval classification | **Closed** (fixed) |
| **S2** Degraded | [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | Daemon never registers channel-map factory → webhook/cron/SOP have no channels | No PR yet |
| **S2** Degraded | [#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036) | OpenCode `big-pickle` returns 403 FreeTierError on v0.8.4 | No PR yet |
| **S2** Degraded | [#10976](https://github.com/zeroclaw-labs/zeroclaw/issues/10976) | WhatsApp mentions broken inbound/outbound | No PR yet |
| **S2** Degraded | [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) | WhatsApp ignores `force_voice` | No PR yet |
| **S2** Degraded | [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) | Matrix `send_via` treats peer user identities as room destinations | No PR yet |
| **S2** Degraded | [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | Multimodal image cap eviction rewrites earlier history, invalidates cache prefix | In progress |
| **S2** Degraded | [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | No proactive token-budget context compaction (only message-count trim) | In progress |

**Critical watch**: #11136 (data loss, filed today), #10968 (security bypass in daemon), #11055 (daemon channels broken). All P1/P2, no fix PRs yet.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|-----------------------------|
| [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) Cheaper Inference provider | **High** — typed provider, OpenAI-compatible, in-progress | **Very likely** (status: in-progress, accepted) |
| [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) WhatsApp `create_room`/`invite_user` | **High** — channel parity, in-progress | **Likely** (status: in-progress, accepted) |
| [#10969](https://github.com/zeroclaw-labs/zeroclaw/issues/10969) Cron/heartbeat jitter window | **Medium** — scheduling reliability, accepted | **Likely** (accepted, P2) |
| [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) RFC: `search_routes` hint-based routing | **Medium** — mirrors `model_routes`, RFC stage | **Possible** (RFC, needs design) |
| [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) RFC: Knowledge graph as first-class memory | **Strategic** — architectural shift, RFC | **Not soon** (RFC, high risk) |
| [#10933](https://github.com/zeroclaw-labs/zeroclaw/issues/10933) MiniMax TTS/STT providers | **Medium** — extends existing MiniMax model support | **Possible** (parking-lot, accepted) |
| [#10900](https://github.com/zeroclaw-labs/zeroclaw/issues/10900) Transcription provider cascade | **Medium** — fallback chain for STT | **Possible** (parking-lot, accepted) |
| [#10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909) Standard text editing in ZeroCode composer | **UX** — undo/redo, selection, in-progress | **Likely** (in-progress, accepted) |
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) Token-budget context compaction | **Core** — proactive compaction, in-progress | **Likely** (in-progress, accepted, P1) |
| [#10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963) Forward session identity to delegate sub-agents | **Architecture** — delegate context, parking-lot | **Later** (parking-lot, high risk) |

**Predicted next-version themes**: Provider ecosystem (Cheaper Inference, MiniMax), WhatsApp group features, ZeroCode composer UX, token-budget compaction, cron jitter.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **WhatsApp Web channel gaps** | 4 active bugs (#10977, #10976, #11059, #10922) + mentions, TTS, group creation | Blocks production WhatsApp group automation |
| **Daemon mode broken for channels** | #11055 (P1), #11020, #11021 (ACP/session_end) | Daemon deployments missing webhook/cron/SOP channels |
| **Provider free-tier blocks** | #11036 (OpenCode `big-pickle` 403) | Users on free tiers hit hard errors |
| **Windows CI flakiness** | #10793 (3 tests fail spuriously) | Erodes confidence in Windows support |
| **ZeroCode session root confusion** | #10826, #11044 (fixed) | UX friction for Code/Chat session workspace |
| **Browser/search tool rewrites to shell** | #11108, #11189 (fixed) | Semantic loss for web/browser tools |
| **Context compaction missing** | #10780 (no token-budget proactive trim) | Long sessions degrade / hit limits unexpectedly |
| **Approval bypass in unattended modes** | #10968 (S0), #10643 (fixed) | Security risk for cron/SOP/spawned agents |

**Satisfaction signals**: Quick fixes for parser tool-semantics (#11189), ZeroCode roots (#11044), Git approval bypass (#10966). **Dissatisfaction**: WhatsApp channel maturity, daemon channel wiring, free-tier provider blocks.

---

## 8. Backlog Watch — Long-Unanswered / Stalled Important Items

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue | **86 days** (2026-07-04) | Open, accepted | Governance backbone — 15 comments, no resolution tracker visible |
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) Token-budget context compaction | **16 days** | In-progress, accepted, P1 | Core runtime quality — affects all long sessions |
| [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) Multimodal cache invalidation | **16 days** | In-progress, P1 | ACP/Anthropic cache breakage on image attachment |
| [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) Restore supervised shell approval routing | **36 days** | Open, needs maintainer review, XL | Security: channel-driven shell approvals |
| [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) Browser PKCE / cross-surface enrollment | **34 days** | Open, stacked, XL | Major auth/security stack (stage 5 of #8289) |
| [#10275](https://github.com/zeroclaw-labs/zeroclaw/pull/10275) Retire Nevis/iam_policy | **35 days** | Open, stacked, XL | Security refactor completion |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) Per-agent ownership scoping | **54 days** | Open, needs author action, XL | Session tool security, Discord search |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) Bounded delegate filesystem tools respect target workspace | **32 days** | Open, needs author action, XL | Delegate sandbox correctness |
| [#9453](https://github.com/zeroclaw-labs/zeroclaw/pull/9453)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*