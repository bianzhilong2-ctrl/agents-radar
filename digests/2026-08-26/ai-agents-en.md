# OpenClaw Ecosystem Digest 2026-08-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-26 00:42 UTC

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

# OpenClaw Project Digest – 2026-08-26  

## 1. **Today's Overview**  
The OpenClaw project remains highly active, with 500 issues and 500 PRs updated in the last 24 hours. While 63 issues and 246 PRs were closed, the bulk of activity remains in addressing stability, session management, and integration challenges. No new releases emerged today, but critical work is ongoing to stabilize the upcoming v2026.8.1 beta (commit `5831b807`).  

---

## 2. **Releases**  
No new releases were published today.  

---

## 3. **Project Progress**  
- **Closed PRs Today**:  
  - #129478 ([fix(cron)](https://github.com/openclaw/openclaw/pull/129478)): Recovers missed reminders after daylight-saving transitions.  
  - #109029 ([fix(qa-lab)](https://github.com/openclaw/openclaw/pull/109029)): Bounds internal transport response sizes in QA Lab tests.  
  - #125471 ([fix(models)](https://github.com/openclaw/openclaw/pull/125471)): Preserves Claude CLI OAuth in Control UI after gateway restarts.  

**Advancements**:  
- Stability fixes for cron job reliability and QA testing workflows.  
- Improved persistence for authentication flows and session management.  

---

## 4. **Community Hot Topics**  
### Most Active Issues/PRs:  
1. **#125626** ([OpenClaw 2026.8.1 beta feedback](https://github.com/openclaw/openclaw/issues/125626)): 20 comments. Collectively discussed configuration tweaks, bug regressions, and feedback on the beta’s performance.  
2. **#80319** ([QA tool-defaults suite conflation](https://github.com/openclaw/openclaw/issues/80319)): 17 comments. Highlights misalignment between Codex-native tools and OpenClaw dynamic parity.  
3. **#79902** ([SQLite transcript/seams feature](https://github.com/openclaw/openclaw/issues/79902)): 14 comments. Users requested SQLite integration for session state persistence.  

**PRs**:  
- #129620 ([fix(ui): keep hidden session files cold](https://github.com/openclaw/openclaw/pull/129620)): Addresses slow session loads due to unauthorized file enumeration.  

---

## 5. **Bugs & Stability**  
### Critical Issues (P0/P1):  
1. **#67777** ([Subagent completion delivery loss](https://github.com/openclaw/openclaw/issues/67777)):  
   - **Severity**: 🦞 Diamond Lobster (Impact: message loss, session state).  
   - **Status**: Open. Subagent completions fail under timeouts/restarts, risking data loss.  

2. **#97616** ([Process leaks causing zombie accumulation](https://github.com/openclaw/openclaw/issues/97616)):  
   - **Severity**: 🦐 Gold Shrimp (Impact: crash loops, degradation).  
   - **Status**: Open. Leaked child processes from hooks/tools degrade performance over time.  

3. **#126821** ([SQLite corruption in beta builds](https://github.com/openclaw/openclaw/issues/126821)):  
   - **Severity**: 🐚 Platinum Hermit (P0, Regression).  
   - **Status**: Open. Database corruption recurs within 24 hours post-rebuild on WSL2.  

### Fix PRs in Flight:  
- #128508 ([fix(codex): preserve child hooks](https://github.com/openclaw/openclaw/pull/128508)) targets hook persistence but awaits merge authorization.  

---

## 6. **Feature Requests & Roadmap Signals**  
### High-Priority User Requests:  
1. **#45758** ([YAML config support](https://github.com/openclaw/openclaw/issues/45758)):  
   - Users prefer YAML’s readability over JSON5 for DevOps integrations. Likely next roadmap item.  

2. **#67413** ([Per-agent dreaming configuration](https://github.com/openclaw/openclaw/issues/67413)):  
   - Requests granular control over memory dreaming to prevent OOM kills.  

3. **#9016** ([OpenRouter cost tracking](https://github.com/openclaw/openclaw/issues/9016)):  
   - Developers seek cost-aware model routing for budget management.  

---

## 7. **User Feedback Summary**  
- **Pain Points**:  
  - **Onboarding**: #16670 highlights missing memory setup guidance, causing configuration failures.  
  - **Performance**: #67777 and #95746 report system-wide stability risks from subagent/tool timeout handling.  
  - **UX Friction**: #9637 and #95601 emphasize accessibility gaps in TUI/Control UI.  

- **Satisfaction**:  
  - Users appreciate v2026.6.9 accessibility updates (#95601), but regressions in beta builds (e.g., #126821) risk trust.  

---

## 8. **Backlog Watch**  
### Urgent Long-Unanswered Items:  
1. **#119401** ([NO_REPLY suppression bug](https://github.com/openclaw/openclaw/issues/119401)):  
   - **Open**: 17 days. Silent reply policy ignores `direct/DM` enforcement.  

2. **#127176** ([Windows CLI metadata approvals](https://github.com/openclaw/openclaw/issues/127176)):  
   - **Open**: 3 days. Device metadata mismatches block approvals.  

3. **#126900** ([Compaction loop bug](https://github.com/openclaw/openclaw/issues/126900)):  
   - **Open**: 4 days. `maxActiveTranscriptBytes` triggers infinite compaction cycles, stalling sessions.  

4. **#77298** ([Cron error incrementing](https://github.com/openclaw/openclaw/issues/77298)):  
   - **Open**: 51 days. Interrupted jobs misreport as failures, masking real agent issues.  

--- 

**Data Sources**: GitHub Issues/PRs as of 2026-08-26. Severity ratings derived from `issue-rating` labels (e.g., 🦞 Diamond Lobster = Highest).

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – AI Agent & Personal‑Assistant Open‑Source Ecosystem**  
*(Compiled from 2026‑08‑26 community digests)*  

---

### 1. Ecosystem Overview  

The personal‑AI‑assistant stack is a **highly fragmented, but fast‑moving** open‑source universe.  Projects range from UI‑centric desktop clients (NanoBot, IronClaw) and cloud‑native sandboxed runtimes (Moltis, ZeroClaw) to specialist integrations (Slack, Telegram, WeChat).  A dominant theme is **rapid iteration toward production‑grade stability**—most repos now publish beta releases weekly, while maintainers still wrestle with a persistent “last‑mile” of reliability (sandbox escapes, session drift, credential leaks).  Community health is still driven by **visible, code‑level progress** rather than pure feature hype, with many projects publishing frequent PR/merge traffic even when releases are on hold.

---

### 2. Activity Comparison  

| Project (Repo)                         | Issues (24 h) | PRs (24 h) | Release Status (24 h) | Health Score (1‑100) |
|---------------------------------------|--------------|-----------|----------------------|----------------------|
| **OpenClaw** (`openclaw/openclaw`)     | 500 updated (63 closed) | 500 updated (246 closed) | **None** – beta v2026.8.1 in progress | **70** – high throughput but many critical bugs open (e.g., #67777, #97616) |
| **NanoBot** (`HKUDS/nanobot`)         | 5 new issues | 24 updated (14 merged) | **None** – changes piling for next bump | **85** – strong PR velocity, quick P1 fixes (#5533, #5536) |
| **IronClaw** (`nearai/ironclaw`)      | 37 updated (4 closed) | 23 updated (10 merged) | **None** – v1.4.0 roadmap active | **72** – lots of dev activity but lingering high‑severity bugs (#7892, #7285) |
| **CoPaw (QwenPaw)** (`agentscope-ai/QwenPaw`) | 33 issues + 50 PR updates | — | **Beta v2.1.1‑beta.3** released today | **80** – rapid beta churn, critical SSE/loop bugs closed, UI polish ongoing |
| **LobsterAI** (`netease-youdao/LobsterAI`) | 1 issue + 9 PR merged + 2 new releases (2026.8.25, 2026.8.21) | — | **2 new releases** | **88** – steady UI/analytics releases, minor drift |
| **Moltis** (`moltis-org/moltis`)       | 2 issues + 5 PR updates | — | **None** – sandbox‑backend RFCs in flight | **70** – focused on security & Kubernetes sandbox (#1118) |
| **NanoClaw** (`qwibitai/nanoclaw`)    | 5 new issues + 50 PR updates (16 merged) | — | **None** – tooling & integration fixes only | **60** – lots of PRs but many low‑priority bugs remain (#3543, #3529) |
| **ZeroClaw** (`zeroclaw-labs/zeroclaw`) | 50 issues + 50 PR updates (12 issues closed, 1 PR merged) | — | **None** – hardening before v0.9.0 | **65** – heavy on security/RFC governance, many open sandbox issues |
| **PicoClaw** (`sipeed/picoclaw`)      | 4 issues + 1 open PR | — | **None** – triaging bugs (#3281, #3269) | **45** – low throughput, few merges, UI‑lag and MCP hangs open |
| **NullClaw** (`nullclaw/nullclaw`)    | 1 issue + 0 PR updates | — | **None** – feature request only (#994) | **30** – near‑stall, minimal code movement |
| **TinyClaw** (`TinyAGI/tinyagi`)     | 0 activity | 0 activity | **N/A** | **N/A** |
| **ZeptoClaw** (`qhkm/zeptoclaw`)     | 0 activity | 0 activity | **N/A** | **N/A** |
| **Hermes Agent** (`nousresearch/hermes-agent`) | – (no data) | – (no data) | **N/A** | **N/A** |

*Health scores are derived from a blend of PR/merge velocity, open‑critical‑bug count, and release cadence (higher = healthier).*

---

### 3. OpenClaw’s Position vs Peers  

* **Advantages** – Unmatched **throughput** (500 issues/PRs in 24 h), a deep focus on **session‑persistence and OAuth stability** (e.g., #125471, #129478), and a clear enterprise‑grade roadmap (v2026.8.1 beta).  The project also enjoys **granular bug‑severity labeling** (Diamond Lobster, Gold Shrimp) that keeps maintainers aware of data‑loss and crash‑loop risks.  
* **Technical differences** – OpenClaw’s **cron‑plus‑reminders** stack and **Control‑UI OAuth preservation** differentiate it from more UI‑centric projects like NanoBot or IronClaw.  Its code‑base appears to treat **session‑state persistence** as a first‑class concern (see SQLite transcript requests).  
* **Community size** – The raw count of open/closed issues/PRs suggests a **large, active user base** (likely enterprise teams) compared with the narrower contributor bases of NanoBot or CoPaw.  

---

### 4. Shared Technical Focus Areas  

| Emerging Need | Representative Projects | Current Express  
|--------------|------------------------|----------------|
| **Sandbox & Isolation Hardening** | OpenClaw (#67777, #126821), Moltis (#1118), ZeroClaw (#9206, #9872), IronClaw (#7892) | Prioritizing per‑agent memory, container‑level boundaries, and credential scoping. |
| **Multi‑Agent Session Consistency** | OpenClaw (#95746), IronClaw (#7285), NanoClaw (#3532) | Fixing drift between agents, sub‑agent completions, and scoped tool access. |
| **Communication‑Platform Integration** | NanoBot (Telegram, Slack), IronClaw (Telegram device‑link), CoPaw (WeChat, Slack), LobsterAI (WeChat group) | Rich‑message parity, device‑pairing UX, and channel‑specific toggles (e.g., “show thinking”). |
| **Performance & Resource Efficiency** | NanoBot (#5533 find_files), IronClaw (#7891 unprojected payloads), OpenClaw (#125471 OAuth overhead) | Addressing CPU spikes, token waste, and UI lag with algorithmic/bit‑level optimizations. |
| **CI / Release Reliability** | CoPaw (nextest pipeline #7817), IronClaw (T2/T3 CI), ZeroClaw (MSRV CI fixes #10042) | Consolidating test pipelines, adding failure‑signal gating, and pinning dependencies. |
| **Installer & Platform Parity** | IronClaw (Windows NM host locks #6810), ZeroClaw (MSRV CI), CoPaw (Windows installer), NanoBot (cross‑OS TUI) | Streamlining native packaging, pre‑flight process termination, and consistent binaries. |
| **Observability & Analytics** | LobsterAI (library usage analytics #2529), ZeroClaw (bounded telemetry RFC #10340) | Formalizing usage metrics, conversion attribution, and secure telemetry pilots. |

These themes are **cross‑cutting**: a new sandbox feature in Moltis often triggers security review in ZeroClaw, while UI/UX polish in NanoBot influences IronClaw’s design system work.

---

### 5. Differentiation Analysis  

| Dimension | OpenClaw | NanoBot | IronClaw | CoPaw | LobsterAI | Moltis |
|-----------|----------|---------|----------|-------|-----------|--------|
| **Primary Feature Focus** | Enterprise‑grade cron & OAuth session durability | Rich TUI/UX, Telegram & Slack integration, skill autocomplete | Full‑stack agent orchestrator with sub‑agent background mode | Cloud‑native plugin architecture & rapid beta releases | Desktop UI + analytics + document‑processing tools | Kubernetes‑native sandbox runtime & edge mesh RFCs |
| **Target User** | DevOps / business teams needing reliable scheduled agents | Power‑terminal users, communities needing multi‑channel chat bots | Researchers / data‑pipeline engineers using sub‑agents | Distributed‑system engineers building plugin ecosystems | End‑users wanting a polished UI + collaborative document work | Enterprises requiring hardened, cloud‑deployable sandboxes |
| **Technical Architecture Highlights** | Heavy use of **cron** and **SQLite** for persistence; gateway‑level OAuth handling | **Skill‑centric** plugin model, built‑in **TUI autocomplete**, responsive **find_files** | **Agent‑loop** architecture with background sub‑agents, **device‑link** flows | **PluginAPI**‑driven extensible UI, **SSE** streaming, rapid beta release cadence | **Renderer‑centric** UI with analytics pipelines, **plan model catalog** | **RuntimeClassName** sandbox backend, **ZeroRelay** secure transport |
| **Community Signal** | High issue/PR volume, strong focus on **bug‑fix stability** | High PR merge velocity, **UX polish**, community‑driven feature requests | Active **critical‑bug triage**, heavy on CI/testing improvements | **Rapid beta churn**, many **first‑time contributor** PRs, governance‑heavy RFCs | **Release‑driven** progress, user‑visible analytics dashboards | **Architectural RFCs**, long‑standing design discussions (#6808, #9103) |
| **Unique Differentiator** | **Cron‑first** reliability + OAuth preservation across restarts | **Skill‑autocomplete** + Telegram rich‑message UX | **Sub‑agent background mode** + device‑link guidance | **Plugin system** + **web‑first** extensibility | **Analytics‑rich UI** + integrated document processing | **Kubernetes‑native sandbox** + edge‑mesh planning |

---

### 6. Community Momentum & Maturity  

| Tier | Projects | Rationale |
|------|----------|-----------|
| **Maturing / Release‑Ready** | **LobsterAI (v2026.8.25/2026.8.21)**, **CoPaw (v2.1.1‑beta.3)** | Published recent stable or beta releases; UI/analytics ship regularly; bug‑fix churn is high. |
| **Active / High Velocity** | **OpenClaw**, **IronClaw**, **ZeroClaw**, **Moltis**, **NanoClaw** | Dozens of issues/PRs daily, many open PRs, heavy on security/sandbox work, but most have **no releases** – focus on hardening. |
| **Stabilizing / Low Velocity** | **PicoClaw**, **NullClaw**, **NanoClaw** (some drift) | Limited PR merges, long‑standing UI/UX bugs (#3281, #

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest

**Date:** 2026-08-26  
**Repository:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Today's Overview

NanoBot is experiencing high development velocity today with 24 PRs updated and 14 successfully merged/closed. The project shows strong health with a healthy balance of bug fixes, performance improvements, and feature enhancements. Five new issues were reported, all currently open and being triaged. The maintainer team is actively addressing both user-reported bugs and rolling out new capabilities across WebUI, TUI, Telegram integration, and core agent functionality. No new releases were published today, suggesting the team is accumulating changes for an upcoming version bump.

---

## 2. Releases

**No new releases today.** The project has not published any new versions in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (14 total)

| PR | Author | Description | Priority |
|----|--------|-------------|----------|
| [#5541](https://github.com/HKUDS/nanobot/pull/5541) | dangzitou | **fix(telegram):** Attribute group messages to senders with fallback from first name → username → numeric ID | p2 |
| [#5540](https://github.com/HKUDS/nanobot/pull/5540) | chengyongru | **fix(provider):** Stabilize Codex prompt cache routing by propagating stable session identity | p2 |
| [#5538](https://github.com/HKUDS/nanobot/pull/5538) | chengyongru | **refactor(tui):** Clarify active composer actions ("Enter send now · Tab send next") | p2 |
| [#5534](https://github.com/HKUDS/nanobot/pull/5534) | chengyongru | **feat(tui):** Autocomplete skill references with filtered picker, arrow navigation, and caret-aware completion | p2 |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) | bingqilinweimaotai | **feat(webui):** Drag-and-drop session organization with group creation | p2 |
| [#5533](https://github.com/HKUDS/nanobot/pull/5533) | chengyongru | **fix(tools):** Keep find_files scans responsive using budgeted os.scandir traversal | p1 |
| [#5529](https://github.com/HKUDS/nanobot/pull/5529) | chengyongru | **fix(agent):** Wait for background subagents only at turn exit to prevent blocking | p2 |
| [#5530](https://github.com/HKUDS/nanobot/pull/5530) | KailBug | **style(tui):** Keep short transcripts and composer top-aligned in tall terminal panes | p2 |
| [#5525](https://github.com/HKUDS/nanobot/pull/5525) | chengyongru | **feat:** Add demand-driven document retrieval for grep (PDF, DOCX, XLSX, PPTX support) | p2 |
| [#5526](https://github.com/HKUDS/nanobot/pull/5526) | chengyongru | **fix(agent):** Wait for exec sessions without polling; renamed session tool to `exec_session` | p2 |

### Notable Open PRs (10 total)

| PR | Author | Description | Priority |
|----|--------|-------------|----------|
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | KDB-Wind | **fix(exec):** Fail closed when restricted shell lacks sandbox (security fix for #4072) | **p1** |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | goodtiding5 | **feat(agent):** Integrate mst-python as metasearch provider aggregating DuckDuckGo, Google, Brave, Bing | **p1** |
| [#5535](https://github.com/HKUDS/nanobot/pull/5535) | chengyongru | **fix(gateway):** Retry MCP readiness before turns (NAN-43) | p2 |
| [#5539](https://github.com/HKUDS/nanobot/pull/5539) | YHonc | **fix(tools):** Interpolate ToolLoader log context (replace printf-style placeholders) | p2 |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | chengyongru | **fix(ui):** Surface model retry status in TUI and WebUI (NAN-34) | p2 |
| [#5531](https://github.com/HKUDS/nanobot/pull/5531) | nolanchic | **fix(telegram):** Upgrade streaming preview to rich messages at stream end | p2 |
| [#5537](https://github.com/HKUDS/nanobot/pull/5537) | KDB-Wind | **feat(my):** Persist session focus across turns (fixes #3292) | p2 |
| [#5528](https://github.com/HKUDS/nanobot/pull/5528) | zpljd258 | **fix(webui):** Project generated titles onto per-chat sessions under unifiedSession | p2 |
| [#5519](https://github.com/HKUDS/nanobot/pull/5519) | Re-bin | **fix(webui):** Compact single-pane chat header and conversation spacing | p2 |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | yu-xin-c | **fix(subagent):** Mark partial completion results (regression fix) | — |

---

## 4. Community Hot Topics

### Most Active Issues

1. **[#5505](https://github.com/HKUDS/nanobot/issues/5505)** — **AnySearch Web Search Provider Integration** (3 comments)  
   **Author:** cleverLucky  
   **Summary:** The AnySearch team proposes integrating their unified real-time search tool offering API, MCP, and Skill integration methods for AI agents. This would add a key-optional, anonymous quota option as a new `web_search` provider.  
   **Signal:** Third-party search provider ecosystem expansion; community contribution indicating external adoption.

2. **[#5532](https://github.com/HKUDS/nanobot/issues/5532)** — **Missing Import of "mask_session_key"** (1 comment)  
   **Author:** chenyujie  
   **Summary:** Bug report describing a runtime error when processing Chinese user query for resource cleanup. Traceback points to missing import in `autocompact.py` line 1423.  
   **Signal:** Internationalization edge case; potential regression in session management code.

3. **[#5516](https://github.com/HKUDS/nanobot/issues/5516)** — **Telegram Rich Messages + Streaming Incompatibility** (1 comment)  
   **Author:** flobo3  
   **Summary:** Rich messages and streaming modes are mutually exclusive; with streaming enabled, `sendRichMessage` is never called, forcing legacy HTML `editMessageText`. Bot API 10.1-10.3 drafts could resolve this.  
   **Signal:** User frustration with Telegram UX limitations; feature parity gap with other channels.

4. **[#5527](https://github.com/HKUDS/nanobot/issues/5527)** — **WebUI Sidebar "Untitled" with unifiedSession** (0 comments)  
   **Author:** zpljd258  
   **Summary:** With `unifiedSession: true`, all turns route to `unified:default` session, but WebUI sidebar renders per-chat `websocket:<id>` sessions—title generation and UI rendering never align.  
   **Signal:** Unified session feature has incomplete UI integration; active bug with existing PR fix (#5528).

5. **[#5524](https://github.com/HKUDS/nanobot/issues/5524)** — **WebUI Session End Notification Sound** (0 comments)  
   **Author:** yrxeva  
   **Summary:** Feature request for a notification sound when agent turn completes while user is viewing the page. Should be opt-in via Settings, play short notification tone.  
   **Signal:** User experience enhancement for long-running task awareness.

---

## 5. Bugs & Stability

### Priority 1 (Critical/High)

| Issue/PR | Title | Status | Fix Available |
|----------|-------|--------|---------------|
| [#5533](https://github.com/HKUDS/nanobot/pull/5533) | find_files scans unresponsive (performance regression) | **MERGED** | ✅ Yes |
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | Restricted shell sandbox bypass (security) | Open | ⚠️ PR exists |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | Metasearch provider integration (mst-python) | Open | ⚠️ PR exists |

### Priority 2 (Medium)

| Issue | Title | Status | Fix Available |
|-------|-------|--------|---------------|
| [#5532](https://github.com/HKUDS/nanobot/issues/5532) | Missing `mask_session_key` import | Open | 🔄 Fix in progress? |
| [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Telegram rich + streaming mutually exclusive | Open | 🔄 PR #5531 open |
| [#5527](https://github.com/HKUDS/nanobot/issues/5527) | WebUI "Untitled" sidebar with unifiedSession | Open | ✅ PR #5528 open |

**Stability Assessment:** The project shows good response to critical issues with P1 fixes being merged quickly. The sandbox security issue (#5536) requires maintainer priority given its severity. Performance regression in `find_files` has been addressed.

---

## 6. Feature Requests & Roadmap Signals

### Emerging Features

1. **Metasearch Provider Integration** ([#5234](https://github.com/HKUDS/nanobot/pull/5234))  
   mst-python would aggregate results from DuckDuckGo, Google, Brave, Bing using Reciprocal Rank Fusion—significantly richer search coverage. This aligns with the AnySearch proposal (#5505), suggesting search provider expansion is a roadmap priority.

2. **Demand-Driven Document Retrieval** ([#5525](https://github.com/HKUDS/nanobot/pull/5525) - merged)  
   grep becomes a content retrieval tool supporting PDF, DOCX, XLSX, PPTX with incremental search—expanding agent capabilities for document analysis.

3. **Session Focus Persistence** ([#5537](https://github.com/HKUDS/nanobot/pull/5537))  
   Durable session-scoped `focus` value for continuity across turns and restarts—addresses workflow continuity needs.

4. **Skill Autocomplete in TUI** ([#5534](https://github.com/HKUDS/nanobot/pull/5534) - merged)  
   Arrow-key navigation and completion for `$skill-name` references—improving developer experience.

5. **WebUI Notification Sound** ([#5524](https://github.com/HKUDS/nanobot/issues/5524))  
   Opt-in audio notification for session completion—UX enhancement for long-running tasks.

**Roadmap Prediction:** The next release likely focuses on search provider ecosystem (mst-python), security hardening (sandbox fixes), and WebUI polish (compact headers, notification sounds, drag-drop sessions).

---

## 7. User Feedback Summary

### Pain Points

- **Telegram UX Gap:** Users cannot use rich messages with streaming enabled, forcing downgrade to legacy HTML rendering ([#5516](https://github.com/HKUDS/nanobot/issues/5516)).
- **Session Title Visibility:** Unified session mode breaks WebUI sidebar title display, creating confusion ([#5527](https://github.com/HKUDS/nanobot/issues/5527)).
- **Long Task Awareness:** No notification when agent completes long-running tasks in WebUI, requiring constant page monitoring ([#5524](https://github.com/HKUDS/nanobot/issues/5524)).
- **Internationalization Edge Cases:** Non-English commands trigger import errors ([#5532](https://github.com/HKUDS/nanobot/issues/5532)).

### Positive Signals

- **WebUI Improvements:** Multiple PRs addressing UI polish (drag-drop sessions, compact headers) indicate active WebUI investment.
- **TUI Enhancements:** Skill autocomplete and composer action clarity show commitment to terminal-based experience.
- **Performance Focus:** Quick turnaround on find_files performance fix demonstrates responsiveness to responsiveness issues.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Priority | Title | Notes |
|-------|-----|----------|-------|-------|
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | 2 days | enhancement | AnySearch integration | External partnership proposal; needs decision |
| [#5532](https://github.com/HKUDS/nanobot/issues/5532) | 1 day | p2 | Missing import bug | Active user-reported crash |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | 29 days | regression | Mark partial completion results | Open for ~1 month; needs review |
| [#5524](https://github.com/HKUDS/nanobot/issues/5524) | 1 day | enhancement | WebUI notification sound | Feature request; low urgency |

### Long-Running PRs

| PR | Age | Priority | Title | Status |
|----|-----|----------|-------|--------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | 23 days | p1 | Metasearch provider (mst-python) | Open with `conflict` tag |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | 29 days | regression | Mark partial completion results | Open with `conflict` tag |

**Attention Needed:** The two PRs with `conflict` tags (#5234, #5152) have been open for 3-4 weeks and may need conflict resolution assistance from maintainers to move forward.

---

*Digest generated from NanoBot GitHub activity on 2026-08-26*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑08‑26**  
*Generated from GitHub activity (issues/PRs updated in the last 24 h)*  

---  

### 1. Today's Overview  
The repository shows steady but modest activity: four open issues were touched in the past day and one pull request remains open. No new releases were cut, indicating the team is currently focused on triaging bugs and evaluating feature ideas rather than shipping a version. Overall health is stable, with a handful of usability‑ and reliability‑related bugs receiving attention, while a proposal for a lightweight “worker” mode hints at future edge‑compute ambitions.  

---  

### 2. Releases  
- **None** – No new tags or releases were published in the last 24 h.  

---  

### 3. Project Progress  
- **Merged/Closed PRs today:** 0.  
- **Open PR awaiting review:**  
  - **#3340** – *fix(slack): set FileSize on media upload params* (octavioturra, opened 2026‑08‑17, updated 2026‑08‑25). This PR directly addresses the Slack image‑upload failure reported in #3338. No merge yet, but it is the only concrete code change in flight.  

---  

### 4. Community Hot Topics  
| Item | Comments | Reactions | Link | Why it’s hot |
|------|----------|-----------|------|--------------|
| **#3281** – UI chat input laggy with long history | 7 | 👍1 | <https://github.com/siped/picoclaw/issues/3281> | Persistent usability pain; many users experience slowdown as chat history grows. |
| **#3269** – MCP server connection hang stops agent replies | 7 | 👍1 | <https://github.com/siped/picoclaw/issues/3269> | Reliability bug that can completely halt the assistant; high impact on user trust. |
| **#3338** – Slack media upload fails (`file size cannot be 0`) | 2 | 👍0 | <https://github.com/siped/picoclaw/issues/3338> | Blocks a core integration; directly tied to open PR #3340. |
| **#3345** – Proposal: lightweight PicoClaw worker mode for edge devices | 0 | 👍0 | <https://github.com/siped/picoclaw/issues/3345> | Emerging feature request reflecting community interest in running PicoClaw on low‑resource hardware.  

**Underlying needs:**  
- Users want a responsive chat UI even with extensive conversation histories (performance optimization).  
- Robust handling of external service failures (MCP, Slack) to avoid silent hangs.  
- Desire to deploy PicoClaw on constrained edge nodes, suggesting a future “lite” runtime.  

---  

### 5. Bugs & Stability  
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **High** | #3269 – MCP server connection hang | Agent loop blocks, UI stops replying. | No open PR. |
| **Medium** | #3281 – Web UI chat input laggy with long history | Input latency grows as history accumulates. | No open PR. |
| **Medium** | #3338 – Slack media upload fails (zero FileSize) | Slack SDK rejects upload before network call. | **Yes** – PR #3340 addresses this. |
| **Low** | – | – | – |  

The Slack bug already has a ready‑to‑merge PR; the other two bugs remain unfixed and are the primary stability concerns.  

---  

### 6. Feature Requests & Roadmap Signals  
- **#3345 – Lightweight worker mode** – Proposes a stripped‑down PicoClaw instance targeting devices with ~10‑20 MB RAM (RISC‑V/ARM/MIPS boards, old Android phones, etc.). If accepted, this could shape a future “pico‑worker” variant alongside the full‑featured server. No implementation exists yet, but the issue is fresh (created 2026‑08‑25) and may be prioritized after the current bug backlog is cleared.  

---  

### 7. User Feedback Summary  
- **Pain points:**  
  - Chat UI becomes unresponsive after moderate‑length conversations, degrading the interactive experience.  
  - External service outages (MCP, Slack) cause the assistant to hang silently, leaving users unaware of the failure.  
  - Slack integration cannot send images, limiting multimedia workflows.  
- **Positive signals:**  
  - Community actively reports reproducible issues and supplies detailed steps, indicating an engaged user base.  
  - The worker‑mode proposal shows enthusiasm for deploying PicoClaw on inexpensive edge hardware, opening new use‑case opportunities (home automation, offline assistants).  

---  

### 8. Backlog Watch  
Long‑running or high‑impact items lacking maintainer action:  

1. **#3281** (UI lag) – Open since 2026‑07‑21, 7 comments, 1 reaction. Needs performance profiling of the web UI chat component.  
2. **#3269** (MCP hang) – Open since 2026‑07‑20, 7 comments, 1 reaction. Requires timeout/retry logic around MCP client calls.  
3. **#3338** (Slack media) – Though a fix PR exists (#3340), it has not been merged; reviewing and merging would immediately resolve the blocker.  
4. **#3345** (Worker mode) – Fresh feature request; no discussion yet. Worth a quick triage to gauge interest and estimate effort.  

Addressing the first two bugs and merging #3340 would markedly improve stability and user satisfaction before venturing into new feature territory.  

---  

*All links point directly to the corresponding GitHub issue or pull request.*  

---  

*End of digest.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026-08-26**
*Data source: github.com/qwibitai/nanoclaw (mirrored at nanocoai/nanoclaw)*

### 1. Today's Overview
NanoClaw logged 5 new issues and 50 PR activity updates in the last 24 hours, with 16 PRs merged/closed and 34 still open. No new releases were published. The issue surface is evenly split across skill-validation bugs, container-scoping gaps, and setup-wizard refinements, while PR momentum focuses on error routing, integration tooling, and infrastructure hardening. Activity is steady and broadly distributed, indicating an active development cycle without critical blockers.

### 2. Releases
No new releases were tagged today. The project remains on its current stable build.

### 3. Project Progress (Merged/Closed PRs Today)
Six PRs were closed or merged since the prior digest, representing incremental but meaningful advances:
- **#3544** [CLOSED] Slack room handoff tooling – explicit room assignment and mention validation for selected agents.
- **#3540** [CLOSED] OpenCode workspace alignment – agents now run sessions in their correct working directory rather than inheriting the runner’s cwd.
- **#3539** [CLOSED] Codex composer consolidation – eliminated duplicated project-document composition, reducing drift.
- **#3536** [CLOSED] Instruction inlining – every source merged into a single project document, resolving security-gate import errors.
- **#2656** [CLOSED] Mnemon setup relocation – moved `mnemon setup` from `entrypoint.sh` to `main()` to survive host ENTRYPOINT overrides.
- **#3452** [CLOSED] Update output buffer fix – captured update commands now retain real output rather than losing it in chat-message routing.

These closures sharpen stability, improve cross-tool integration, and clean up legacy setup footguns.

### 4. Community Hot Topics
The most discussed items by recency and thematic weight (all 0 comments/likes, but freshly active):
- **#3543** – Shell metachars and unquoted `{{owner_email}}` break dial-skill sign-in; apostrophes pass validation unexpectedly. [Link](https://github.com/nanocoai/nanoclaw/issues/3543)
- **#3538** – Proposal to use isolated NanoClaw containers as opt-in household edge workers, leveraging idle home hardware instead of cloud workers. [Link](https://github.com/nanocoai/nanoclaw/issues/3538)
- **#3535** – `add-vercel` skill’s per-session rsync blocks symlink sync and pins groups to stale skill copies. [Link](https://github.com/nanocoai/nanoclaw/issues/3535)
- **#3532** – `add-*-tool` per-agent scoping misses agents created after initial configuration, defaulting new groups to tool access. [Link](https://github.com/nanocoai/nanoclaw/issues/3532)
- **#3529** – `update-nanoclaw` skill refresh erroneously flags non-skill channels in `src/channels/index.ts`, breaking local adapters. [Link](https://github.com/nanocoai/nanoclaw/issues/3529)

Underlying need: users want reliable skill deployment, secure agent scoping, and multi-device/orchestration support without friction from validation or sync bugs.

### 5. Bugs & Stability
| Severity | Issue | Status | Fix PR (if any) |
|----------|-------|--------|----------------|
| High | #3543: Unquoted `owner_email` with shell metachars bypasses validation, breaking dial-skill sign-in | Open (updated 2026-08-25) | None yet; requires input sanitization or quoting in skill scripts |
| Medium-High | #3529: Skill refresh validates every `src/channels/index.ts` entry as a skill, blocking legitimate local adapters | Open (updated 2026-08-25) | None yet; needs conditional import detection |
| Medium | #3535: Vercel skill rsync blocks symlink sync, causing stale skill copies across sessions | Open (updated 2026-08-25) | None yet; symlink/resolver review needed |
| Medium | #3532: Agent-scope for add-*-tool tools doesn’t persist for agents created after initial setup | Open (updated 2026-08-25) | PR #3525 addresses prompt echo bug but not the scoping gap |
| Low | #3538: Visionary edge-container proposal – no stability impact, purely architectural | Open (updated 2026-08-25) | No fix PR; discussion-phase |

No crashes or regressions reported, but the validation and scoping bugs are the most likely to cause runtime failures or misconfigured tool access.

### 6. Feature Requests & Roadmap Signals
- **#3538** (edge workers) signals a long-term roadmap toward decentralized, multi-node deployments – likely several quarters out but worth monitoring for architecture direction.
- **#3484** (keep auth secrets out of argv) and **#3485** (structured setup driver protocol) point to a security-and-automation focus in the next release cycle.
- **#3545** (Slack room handoffs) and **#3452** (output buffer fixes) suggest the immediate roadmap will prioritize integration polish and reliability over new capabilities.
- Prediction: v2026.09 or next minor will likely include the output-buffer fix, Slack handoff tooling, and perhaps the beginnings of the setup-driver protocol, while edge-container work remains a future milestone.

### 7. User Feedback Summary
Real-user pain points extracted from recent activity:
- **Shell validation quirks** – Apostrophes and metachars in email fields bypass checks, causing sign-in failures for dial skills.
- **Skill refresh breakage** – Local adapters not derived from skills are incorrectly flagged, halting updates for custom integrations.
- **Agent-scoping drift** – New agents added to a group don’t inherit tool scopes, requiring reconfiguration.
- **Vercel skill sync friction** – rsync-based per-session copies create stale skill directories and break symlink expectations.
- **Setup-wizard exposure** – Auth tokens pasted into command lines are visible in process listings (addressed in PR #3484).

Satisfaction is moderate: the project moves quickly with frequent PR merges, but the density of low-level skill/containers bugs means users near the “edge” of skill deployment or multi-Node setups frequently encounter friction. No critical outages, but several “last-mile” polish items remain.

### 8. Backlog Watch – Items Needing Maintainer Attention
- **#3543** – Created/updated 2026-08-25, 0 comments. Critical validation bypass; triage and a fix patch needed within the week.
- **#3529** – Skill refresh false-positive blocking; maintainer review of `src/channels/index.ts` import logic required.
- **#3532** – Agent-scope gap for newly created agents; related PR #3525 fixes the prompt echo but not the underlying scoping logic.
- **#3538** – Edge-container proposal; maintainer direction needed to decide if this becomes a roadmap track or stays a community proposal.
- **PR #3311** – Open

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest - 2026-08-26  

---

## 1. **Today's Overview**  
The NullClaw project shows minimal activity on 2026-08-26, with 1 open issue updated (no PRs merged or closed, no new releases). Development seems stagnant, though the open issue highlights a potential feature request for household edge mesh functionality, indicating user interest in decentralized networking. The project’s core components (Zig runtime, RuntimeAdapter, and peripherals) remain foundational but no updates to code repositories or releases signal a lack of active development cycles.  

---

## 2. **Releases**  
No new releases were published in the last 24 hours.  

---

## 3. **Project Progress**  
No pull requests were merged or closed on 2026-08-26. The project’s latest code activity appears dormant, with no documented advancements in features, bug fixes, or infrastructure.  

---

## 4. **Community Hot Topics**  
### [Issue #994: Household edge mesh using RuntimeAdapter workers and signed receipts](https://github.com/nullclaw/nullclaw/issues/994)  
**Status**: Open | Author: kvnloo | Created/Updated: 2026-08-25 | 0 comments/👍  
**Summary**: This issue proposes enhancing NullClaw’s capabilities for household edge mesh networking, building on its existing primitives (Zig runtime, RuntimeAdapter, Docker/WASM integration). The request emphasizes idle hardware utilization and decentralized networking, suggesting users seek streamlined local network solutions.  

---

## 5. **Bugs & Stability**  
No bug reports, crash logs, or regression issues were updated in the last 24 hours. The open issue is a feature proposal, not a stability concern, indicating no immediate stability risks.  

---

## 6. **Feature Requests & Roadmap Signals**  
**Issue #994** points to a critical user demand for improved household-level networking capabilities. This aligns with NullClaw’s existing infrastructure (hardware discovery, tunnels), suggesting this feature could be prioritized in future releases. No other feature requests were posted in the last day.  

---

## 7. **User Feedback Summary**  
There is no tangible user feedback (comments, reactions) on open issues as of 2026-08-26. However, the detailed proposal in Issue #994 implies that users may value:  
- **Decentralized local networking solutions** leveraging idle hardware (PCs/laptops).  
- **Integration with signed receipts and RuntimeAdapter**, highlighting security and modularity concerns.  

---

## 8. **Backlog Watch**  
### [Issue #994: Household edge mesh using RuntimeAdapter workers and signed receipts](https://github.com/nullclaw/nullclaw/issues/994)  
This issue remains unanswered after 1 day, though the scope is substantial. Maintainers may need to clarify feasibility or scope, as the proposal combines multiple existing components (tunneling, Docker/WASM, hardware discovery) into a cohesive household mesh solution.  

---  

**Overall Health**: Low activity, no code changes or stability concerns, but potential for feature development in networking.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here's a thinking process:

1.  **Analyze User Request:**
   - **Role:** Analyst of AI agent and personal AI assistant open-source projects
   - **Source:** GitHub data from IronClaw (github.com/nearai/ironclaw)
   - **Date:** 2026-08-26 (today's date for the digest)
   - **Output:** Structured English IronClaw project digest with 8 specific sections
   - **Style:** Objective, data-driven, highlighting project health, include GitHub links

2.  **Analyze Provided Data:**
   - **Issues updated in last 24h:** 37 (open/active: 33, closed: 4)
   - **PRs updated in last 24h:** 23 (open: 13, merged/closed: 10)
   - **New releases:** 0
   - **Latest Releases:** None
   - **Latest Issues (top 30 by comment count):** Listed from #7732 to #7895, with dates, authors, comment counts, summaries
   - **Latest Pull Requests (top 20 by comment count):** Listed from #7894 to #7516, with dates, authors, comment/like counts, summaries

   Key observations:
   - Date is 2026-08-26, data reflects activity up to 2026-08-25 (yesterday/very recent)
   - 37 issues updated in last 24h, 33 open/active, 4 closed
   - 23 PRs updated, 13 open, 10 merged/closed
   - No new releases
   - High activity in webui/design-system, CI/ci-expedite, extensions, Telegram device-link, notifications, onboarding
   - Several bugs about performance, deferred tool calls, Telegram linking, logs hanging
   - Many enhancement/epic items for v1.4.0 roadmap
   - PRs focus on CI consolidation, webui polish, docs, Scorecard, device-link fixes

3.  **Structure the Digest as Requested:**
   I need to create 8 sections with specific content. I'll go one by one, making sure to:
   - Keep it objective/data-driven
   - Include GitHub links
   - Use the data provided
   - Not hallucinate beyond the data, but infer reasonable project status based on the metrics
   - Follow the exact section order

   Let outline each section mentally:

   **1. Today's Overview** (3-5 sentences, project status, activity assessment)
   - 37 issues, 23 PRs, 0 releases
   - High velocity, focus on v1.4.0 roadmap, webui design system, CI improvements, extensions/Telegram fixes
   - 33 open issues, 13 open PRs, good merge activity (10 closed)
   - No new releases, but steady progress toward roadmap

   **2. Releases** (new versions exist? detail changes etc; omit if none)
   - None. Data says "New releases: 0", "Latest Releases: None". So just state that.

   **3. Project Progress** (Merged/closed PRs today, what features advanced or were fixed)
   - 10 PRs merged/closed listed
   - Highlights: CI expedite T2 pipeline (nextest, failure signal, PR unthrottle), device-link guidance restoration, notification legacy fallback retirement, webui loading shells, localization, shared controls, OpenSSF Scorecard addoption
   - Design System Phase 3a foundation PR, changelog navbar move, etc.

   **4. Community Hot Topics** (Most active Issues/PRs with most comments/reactions, with links), analyze underlying needs
   - Top issues by comments: #7732 (epic: persistent per-user sandbox), #7891 (perf: unprojected capability payloads + 14.3s inference cost), #7892 (bug: deferred tool found 15x, never invoked), #7862 (device link fails), #7887 (extension lookup path improvises device-link setup)
   - Top PRs: #7817 (ci: nextest test pipeline T2), #7818 (subagent background mode), #7846 (notifications legacy fallback retirement), #7886 (OpenSSF Scorecard), #7884 (wall-clock occupancy bound)
   - Analyze needs: persistent sandbox, performance/token cost, tool invocation reliability, Telegram UX, notification durability

   **5. Bugs & Stability** (Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist)
   - #7892: bug(agent-loop): deferred tool found 15x, never invoked — 123s run with 4 distinct calls, no terminating guard (severity: high, no PR yet)
   - #7862: Device link fails with generic error when telegram_api_id/api_hash unconfigured (medium, no PR yet, but #7861 closed related device-link guidance fix)
   - #7888: Getting logs hangs indefinitely on multiple instances (medium, no PR yet)
   - #7891: perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s inference (medium, no PR yet, but highlights token/pricing concern)
   - #7885: Add OpenSSF Scorecard workflow configuration (low, PR #7886 added it)
   - Note if fix PRs exist: #7861 closed related, #7886 added Scorecard

   **6. Feature Requests & Roadmap Signals** (User-requested features, predict which might be in next version)
   - #7732: Epic: Persistent per-user sandbox with iron-proxy; defer loop executors (roadmap v1.4.0)
   - #7895: Add personality (agent.md) editor section to Settings UI
   - #7871: Epic: Slack-to-console bridge + rich interactive Slack UX
   - #7867: Voice-to-text in the WebUI composer
   - #7889: RFC: extend scheduler/orchestrator with opt-in remote edge workers
   - #4625: Slack channel-routed personal and team agents (epic, roadmap)
   - Predict: v1.4.0 will likely include persistent sandbox, Slack bridge improvements, design system phases, notification durability, maybe remote edge workers as opt-in

   **7. User Feedback Summary** (Real user pain points, use cases, satisfaction/dissatisfaction)
   - Pain points: Telegram device-link failing without credentials, agent loops stuck calling same 4 tools 123s, 14.3s inference cost from bloated MIME headers, logs hanging indefinitely, difficulty setting personality/agent.md, onboarding suggestions flow not closing
   - Satisfaction: CI pipeline improvements (nextest, full-failure signal), legacy notification fallback retirement, design system visual regression setup, OpenSSF security scoring
   - Use cases: Telegram account linking, Slack agent interaction, WebUI composer voice input, persistent user sandboxes for recurring agents

   **8. Backlog Watch** (Long-unanswered important Issues or PRs needing maintainer attention)
   - Check dates: many issues created/updated on 2026-08-25, so not necessarily "long-unanswered" but very recent backlog
   - However, some might have been open longer: need to infer from data. The data shows issues from #7732 (created 2026-08-18) to #7895 (created 2026-08-25). So some are ~1 week old.
   - Items needing attention: #7732 (epic persistent sandbox, 9 comments, still open), #7892 (bug agent-loop 123s, 0 comments but critical), #7862 (device link failure, 3 comments), #7889 (RFC remote edge workers, 0 comments but architectural importance), #4625 (Slack channel-routed agents, created June 9, updated Aug 25, 1 comment - very old, needs decision)
   - PRs: #7817 closed, but backlog maybe #7820 (draft), #7819 closed, etc. Need to highlight those still open needing maintainer triage: #7831 (open, Design System Phase 3a), #7737 (open, Slack setup drift), #7886 (open, Scorecard), etc.

   I'll make sure each section is concise, data-driven, includes links, and follows the exact naming.

   Now, let's map to the actual data carefully, ensuring I don't invent items not present. I'll reference exact issue/PR numbers, dates, comment counts, summaries where given.

   Check dates: All issues/PRs have dates up to 2026-08-25. The digest is for 2026-08-26. So "today's" activity is from the last 24h ending 2026-08-25.

   I need to be careful with "Merged/closed PRs today" - the data says PRs updated in last 24h: 23 (open: 13, merged/closed: 10). So 10 were merged/closed in that period. I'll list the ones that are closed with dates 2026-08-25 or recent.

   Let's list the closed PRs from the PR section with creation/update dates 2026-08-25 or 2026-08-24 etc:
   - #7894 [CLOSED] created/updated 2026-08-25
   - #7816 [CLOSED] created 2026-08-22, updated 2026-08-25
   - #7831 [OPEN] - not closed
   - Wait, looking at PR list: 
     #7894 CLOSED 2026-08-25
     #7491 OPEN (created 2026-08-11, updated 2026-08-25) - still open
     #7816 CLOSED created 2026-08-22 updated 2026-08-25
     #7859 OPEN created 2026-08-24 updated 2026-08-25
     #7861 CLOSED created 2026-08-25 updated 2026-08-25
     #7820 CLOSED created 2026-08-22 updated 2026-08-25
     #7809 CLOSED created 2026-08-21 updated 2026-08-25
     #7819 CLOSED created 2026-08-22 updated 2026-08-25
     #7846 CLOSED created 2026-08-24 updated 2026-08-25
     #7886 OPEN created 2026-08-25 updated 2026-08-25
     #7884 OPEN created 2026-08-25 updated 2026-08-25
     #7883 OPEN created 2026-08-25 updated 2026-08-25
     #7877 OPEN created 2026-08-25 updated 2026-08-25
     #7882 OPEN created 2026-08-25 updated 2026-08-25
     #7881 OPEN created 2026-08-25 updated 2026-08-25
     #7817 CLOSED created 2026-08-22 updated 2026-08-25
     #7818 CLOSED created 2026-08-22 updated 2026-08-25
     #7516 OPEN created 2026-08-12 updated 2026-08-25

   So closed in last 24h (up to 2026-08-25): #7894, #7816, #7861, #7820, #7809, #7819, #7846, #7817, #7818. That's 9. Maybe #7886 etc are open. I'll just summarize the merged/closed PRs theme rather than list all 10, or list the ones clearly closed with dates.

   The section says "Merged/closed PRs today, what features advanced or were fixed". I'll highlight the key merged/closed items and their impact.

   Now, let's structure the output. I'll write it in markdown-like format as requested, with sections labeled.

   I need to ensure GitHub links are included for each item mentioned. The format should be like `[#7732](https://github.com/nearai/ironclaw/issues/7732)` or similar. The user said "Include GitHub links for each item." I'll include links inline or in a list.

   Let's draft section by section:

   **1. Today's Overview** 
   - 37 issues updated in the last 24h (33 open/active, 4 closed), 23 PRs updated (13 open, 10 merged/closed), 0 new releases. 
   - Project velocity remains high ahead of the v1.4.0 roadmap, with steady progress on CI consolidation, webui design-system polish, and extensions/Telegram UX fixes. 
   - No releases shipped this cycle, but the merge rate (10 PRs in 24h) indicates active maintainer momentum. 
   - Focus areas: persistent user sandboxes, design system phases 2-5, notification durability, and Telegram device-link reliability.

   **2. Releases** 
   - No new releases tag this period. The repository remains on its pre-v1.4.0 development track, with the next stable release contingent on roadmap epics such as #7732 (persistent sandbox) and #7781/#7782 (design system completion).

   **3. Project Progress** 
   - 10 PRs merged/closed since yesterday: 
     - `#7817` — CI: nextest test pipeline, full-failure signal, PR unthrottle (T2), closes #7799. 
     - `#7818` — Subagent background mode (slices 2b+2c), enabling receipt spawns and healing sweeps. 
     - `#7846` — Notifications: retire legacy approval fallback, making the durable inbox the exclusive source. 
     - `#7861` — Fix extensions: restore device-link guidance on install/activate paths. 
     - `#7819` — CI: PR/queue check convergence, planner drift guard, clippy on PRs (T3). 
     - `#7809` — CI: canonical preflight gate list, worktree-safe hooks, self-printing REPRO (T4 tasks 1-5). 
     - `#7846` — Notifications legacy fallback retirement. 
     - `#7817` — nextest pipeline T2. 
     - `#7818` — subagent background mode. 
     - `#7861` — device-link guidance restore. 
     - (Plus #7894, #7816, #7809, #7819, #7846 as listed in the PR table.) 
   - Key features advanced: nextest CI pipeline overhaul, background subagent architecture, notification inbox durability, device-link UX restoration, design system token/Chromatic infrastructure, OpenSSF security scoring workflow addoption.

   I'll refine to exactly 10 merged/closed PRs as per data, but I can group them by theme. I'll list the ones with CLOSED status and 2026-08-25 update dates.

   Actually, the PR table shows 10 merged/closed in the last 24h. I'll enumerate them briefly with their main impact.

   **4. Community Hot Topics** 
   - Most active issues by comments: 
     - `#7732` [OPEN, 9 comments] Epic: Persistent per-user sandbox with iron-proxy; defer loop executors — roadmap v1.4.0, addresses Docker-per-command overhead and per-(tenant,user) persistence. 
     - `#7891` [OPEN, 2 comments] perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s inference on two emails — highlights token/pricing waste from raw MIME headers. 
     - `#7892` [OPEN, 0 comments] bug(agent-loop): deferred tool found 15x, never invoked — 123s run with 4 distinct calls, no terminating guard — critical loop stability issue. 
     - `#7862` [OPEN, 3 comments] Device link fails with generic error when telegram_api_id/api_hash unconfigured — Telegram UX blocker. 
     - `#7887` [OPEN, 1 comment] Extension lookup path improvises device-link setup instructions — related Telegram pairing

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑08‑26**  

---

### 1. Today's Overview  
The repository showed a burst of activity in the last 24 hours: 9 PRs were merged/closed, 2 PRs remain open, and a single issue was updated. Two new releases (2026.8.25 and 2026.8.21) were published, delivering library‑side enhancements, analytics, and UI polish. The only open issue (#2536) reports that the official WeChat discussion group has reached capacity, signalling strong community interest in a communication channel. Overall, project health appears healthy with steady feature delivery and routine dependency maintenance.

### 2. Releases  

| Version | Date | Highlights (what changed) | Links |
|---------|------|---------------------------|-------|
| **LobsterAI 2026.8.25** | 2026‑08‑25 | • **feat: library** – core library work (PR #2513) <br>• **feat(library): 增强跨平台缩略图与本地产物生命周期** – cross‑platform thumbnail handling & local‑artifact lifecycle (PR #2524) <br>• **feat(library): 优化本地产物预览与操作体验** – improved local‑artifact preview & interaction (PR #2525 *truncated in source*) | https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.25 |
| **LobsterAI 2026.8.21** | 2026‑08‑21 | • **feat(dsh): add usage analytics for enable toggle and workbench open** – DSH usage tracking (PR #2515) <br>• **feat: update dsh to 0.1.1‑rc.1** – dependency bump (PR #2516) <br>• **refactor(dsh): move usage …** – internal refactor of DSH (PR #2517 *truncated*) | https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.21 |

*No breaking changes or migration notes were mentioned in the release notes.*

### 3. Project Progress – Merged/Closed PRs (today)  

| PR | Area | Summary | Link |
|----|------|---------|------|
| #2535 | renderer | **feat(settings): add plan model catalog** – adds a new tab for plan‑based model selection. | https://github.com/netease-youdao/LobsterAI/pull/2535 |
| #2530 | renderer, main | **feat(settings): add plan model catalog** – duplicate effort (same feature as #2535) with UI cards, sticky category controls, diagnostics. | https://github.com/netease-youdao/LobsterAI/pull/2530 |
| #2529 | renderer, artifacts | **feat(analytics): 完善资料库埋点与发布转化归因** – adds exposure, filter, search, preview, favorite & refresh events; ties library activity to subscription conversion with 7‑day last‑touch attribution. | https://github.com/netease-youdao/LobsterAI/pull/2529 |
| #2533 | renderer, docs, artifacts | **fix(artifacts): 区分网页与本地服务的预览展示** – separates HTML web pages (code‑icon + “网页”) from local services (globe icon + “本地服务”), updates icons, copy, and preview‑card spec. | https://github.com/netease-youdao/LobsterAI/pull/2533 |
| #2531 | renderer, main | **fix(library): 修复本地产物后台刷新闪烁** – splits load/refresh/pagination states, merges history back‑fill with file‑watcher, adds batch‑query API, prevents UI flicker. | https://github.com/netease-youdao/LobsterAI/pull/2531 |
| #2532 | renderer | **fix(sidebar): fade out login promo tip** – auto‑hides free‑token tip after 5 s, cleans timers on auth change. | https://github.com/netease-youdao/LobsterAI/pull/2532 |
| #2534 | renderer, docs, main, cowork, im, artifacts | **Release/2026.8.20** – prepares the 2026.8.20 release (no functional changes). | https://github.com/netease-youdao/LobsterAI/pull/2534 |
| #1275 | ci | **bump actions/stale from 9.1.0 → 10.2.0** – dependency maintenance. | https://github.com/netease-youdao/LobsterAI/pull/1275 |
| #1276 | ci | **bump actions/first‑interaction from old → a1db772…** – dependency maintenance. | https://github.com/netease-youdao/LobsterAI/pull/1276 |

*Overall progress:* Settings UI gained a **plan model catalog** (duplicate PRs indicate the feature was prioritized), library preview stability was fixed, artifact preview semantics were clarified, and analytics were deepened to tie usage to conversion.

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions | Why it’s hot | Link |
|------|------|----------------------|--------------|------|
| #2536 | Issue (WeChat group full) | 1 comment, 0 👍 | Indicates strong demand for a community chat channel; the group’s limit being hit shows active user base. | https://github.com/netease-youdao/LobsterAI/issues/2536 |
| #1159 | PR (Session Fork) | 0 comments, 0 👍 (but long‑lived) | A requested “session fork” feature that lets users branch a cowork session; despite no discussion, it remains open, suggesting pending interest. | https://github.com/netease-youdao/LobsterAI/pull/1159 |
| #1277 | PR (Electron bump) | 0 comments, 0 👍 | Routine dependency update; high visibility due to being a dependabot PR that stayed open for months. | https://github.com/netease-youdao/LobsterAI/pull/1277 |

*No issue or PR attracted multiple comments or reactions today; the WeChat group issue is the sole conversation starter.*

### 5. Bugs & Stability  

| Severity | Description | Related Fix PR(s) | Status |
|----------|-------------|-------------------|--------|
| **Low** | Library artifact list flickers on background refresh (visual glitch). | #2531 – fix library refresh flicker | Merged |
| **Low** | Login promo tip persists indefinitely in sidebar. | #2532 – fade out login promo tip | Merged |
| **Low** | HTML web pages and local services shown with same icon/copy, causing confusion. | #2533 – distinguish preview types | Merged |
| **Info** | WeChat group capacity issue – not a code bug, but a community‑ops concern. | N/A (requires external action) | Open |

No crashes or regressions were reported; all stability‑related PRs have been merged.

### 6. Feature Requests & Roadmap Signals  

- **Plan Model Catalog** – delivered via #2530/#2535; likely to appear in the next stable release (post‑2026.8.25).  
- **Library Analytics & Conversion Attribution** – #2529 adds deep tracking; expect this data to surface in future dashboards or billing prompts.  
- **Session Fork (cowork)** – long‑open PR #1159; if maintainers prioritize collaboration workflows, this could land in a upcoming minor version (maybe 2026.9.x).  
- **Electron/Builder Updates** – #1277 (still open) suggests the team is keeping the desktop runtime current; once merged, it will enable newer OS features and security patches.  

### 7. User Feedback Summary  

- **Communication Channel Demand** – The WeChat group being full (issue #2536) reveals users want a reliable place to ask questions and share tips. The maintainers may consider opening a secondary group or migrating to a platform with higher capacity (e.g., Discord, Slack).  
- **Desire for Flexible Session Handling** – The stagnant but existent interest in a “session fork” feature (PR #1159) indicates power users want to experiment without losing the original session state.  
- **Satisfaction with Recent UI Improvements** – The rapid merging of UI polish PRs (fading promo tip, artifact preview separation) suggests users appreciate subtle usability tweaks, even if they don’t leave explicit feedback.  

Overall feedback points to **community engagement** and **advanced collaboration features** as the next focal points.

### 8. Backlog Watch  

| Item | Age | Why it needs attention | Link |
|------|-----|-----------------------|------|
| PR #1159 – **feat(cowork): add session fork** | Open since 2026‑03‑31 (~5 months) | No comments/review; a requested feature that could improve power‑user workflows. | https://github.com/netease-youdao/LobsterAI/pull/1159 |
| PR #1277 – **chore(deps-dev): bump electron group** | Open since 2026‑04‑02 (~5 months) | Dependabot PR awaiting merge; keeping Electron up‑to‑date is important for security and compatibility. | https://github.com/netease-youdao/LobsterAI/pull/1277 |
| Issue #2536 – **WeChat group full** | Created 2026‑08‑25 (today) | Immediate community‑ops action required to avoid fragmenting discussion. | https://github.com/netease-youdao/LobsterAI/issues/2536 |

Maintainers should consider reviewing the long‑running PRs (especially #1159) and addressing the WeChat group capacity to keep the contributor and user base engaged.  

---  

*All links point to the official LobsterAI repository on GitHub.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest - 2026-08-26

## Today's Overview
The Moltis project shows active development with 2 issues and 5 pull requests updated in the last 24 hours. No new releases were published today, but the repository maintains steady progress with both bug fixes and feature development. The project appears healthy with ongoing work on sandbox backends, OAuth improvements, and tool enhancements.

## Releases
No new releases were published today. The project continues with its regular development cycle without version updates.

## Project Progress
One PR was merged/closed today (#1243), fixing a critical bug where follow-up questions were losing channel context when scheduled messages were delivered. This fix ensures that cron-executed follow-ups now append their content as assistant messages to the destination's existing conversation rather than losing context.

## Community Hot Topics
**Issue #1118** stands out as the most actively discussed topic: "[Feature] Add Kubernetes-native sandbox backend with runtimeClassName support" by AzgadAGZ. With 2 comments and 1 reaction, this feature request represents significant community interest in advanced sandboxing capabilities. The proposal aims to enable VM-level isolation through Kubernetes runtime classes like Kata Containers and gVisor, addressing security concerns for LLM-generated agent execution.

## Bugs & Stability
**Issue #1224** represents a critical stability concern: "Tools stop working in shared Slack channels" reported by affanshahid. This functional regression affects tool usability in collaborative environments and requires immediate attention. Additionally, PR #1244 addresses OAuth scope registration issues with Fastmail, showing proactive bug fixing in authentication systems.

## Feature Requests & Roadmap Signals
The Kubernetes sandbox backend request (#1118) signals a strategic direction toward cloud-native isolation and security. Complementary development includes Coder workspace support (#1199) and enhanced tool safety measures (#1232). These features suggest Moltis is evolving toward enterprise-grade sandboxing and improved integration capabilities.

## User Feedback Summary
Users are requesting advanced sandboxing options for secure execution environments, indicating growing demand for enterprise features. The Slack tools issue highlights concerns about tool reliability in team collaboration settings. OAuth configuration challenges suggest opportunities for improved developer experience in authentication workflows.

## Backlog Watch
**Issue #1118** requires maintainer attention as it represents a substantial feature request with community support but lacks development progress. Additionally, several open PRs (#1245, #1244, #1232, #1199) are awaiting review and merge, covering important improvements in tool validation, OAuth fixes, schema safety, and sandbox support. These represent significant backlog items that could benefit from maintainer priority.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-26

---

## 1. Today's Overview

CoPaw remains in **high-velocity beta iteration** with v2.1.1-beta.3 released today. The repository saw **83 total issue/PR updates** in 24 hours (33 issues, 50 PRs), indicating intense stabilization work ahead of a likely v2.1.1 stable release. The closed-to-open ratio for PRs (29:21) and issues (14:19) shows the team is actively clearing backlog while new regressions surface — notably around SSE serialization loops, memory growth, and Windows installer file-locking. Community engagement is healthy: multiple first-time contributor PRs, detailed bug reports with logs, and feature requests with mockups.

---

## 2. Releases

### v2.1.1-beta.3 (2026-08-26)
| Change | Details |
|--------|---------|
| **chore(console)** | Pin `@agentscope-ai/chat` to `1.1.72` ([#7257](https://github.com/agentscope-ai/QwenPaw/pull/7257)) |
| **docs(loop-engineering)** | Fix `PluginAPI` → `PluginApi` casing ([#7269](https://github.com/agentscope-ai/QwenPaw/pull/7269)) |
| **test(integration)** | Expand integration test coverage (truncated in feed) |

> **Note**: This is the **third beta** in the v2.1.1 series (beta.1 → beta.2 → beta.3 in ~48h). No breaking changes documented; migration notes absent. Expect a stable v2.1.1 once critical regressions (see §5) are resolved.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7276](https://github.com/agentscope-ai/QwenPaw/pull/7276) | chore(deps) | Bump AgentScope to **2.0.7** | Core dependency alignment |
| [#7300](https://github.com/agentscope-ai/QwenPaw/pull/7300) | docs | Update Scroll Context Manager blog | Documentation |
| [#7228](https://github.com/agentscope-ai/QwenPaw/pull/7228) | bug (closed via issue) | Fix installed app showing "Install" button in marketplace | UX polish |
| [#7256](https://github.com/agentscope-ai/QwenPaw/pull/7256) | enhancement (closed) | Revert sidebar "应用" → "市场" rename | Naming consistency |
| [#7279](https://github.com/agentscope-ai/QwenPaw/pull/7279) | enhancement (closed) | Model multi-choice: prefer modal over text input | UX improvement (deferred) |
| [#7263](https://github.com/agentscope-ai/QwenPaw/pull/7263) | enhancement (closed) | Task-complete indicator: orange bottom-bar tag | UX improvement (deferred) |
| [#7285](https://github.com/agentscope-ai/QwenPaw/pull/7285) | bug (closed) | Long-conversation performance degradation | **Critical** — see §5 |
| [#7261](https://github.com/agentscope-ai/QwenPaw/pull/7261) | bug (closed) | SSE serialization runaway loop (100% CPU, OOM) | **Critical** — see §5 |
| [#7249](https://github.com/agentscope-ai/QwenPaw/pull/7249) | release-duty | v2.1.1-beta.2 installation verification | Release automation |

**Net progress**: Dependency bump, two **critical stability fixes** merged/closed, multiple UX polish items addressed or deferred. Integration test sharding ([#7293](https://github.com/agentscope-ai/QwenPaw/pull/7293)) and coverage boost (+5pp, [#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292)) are in-flight.

---

## 4. Community Hot Topics (Most Comments/Reactions)

| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) **Webhook support** (open since Mar) | 9 | 1 | **Integration-first users** want async callback (`POST` → return key → poll) for embedding CoPaw in external workflows. |
| [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) **WeChat channel "show thinking" toggle ignored** | 6 | 0 | **Channel parity** — settings not respected on specific channels; erodes trust in config system. |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) **MCP client fails to reconnect after server restart** | 6 | 0 | **Resilience** — `streamable_http` transport reuses stale `mcp-session-id`; needs automatic session recovery. |
| [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) **Memory leak v1.1.12 (closed)** | 5 | 0 | Historical reference: async task leak + HTTP session leak → OOM kill → config corruption. Informs current beta triage. |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) **Windows installer blocked by browser extension NM host locks** | 5 | 0 | **Installer robustness** — needs pre-flight process termination (like Electron's `before-quit`). |
| [#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273) **Task tracking / concurrency semantics inconsistent** | 4 | 0 | **Architecture** — same-session concurrency behaves differently by entry point; needs unified contract. |
| [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) **Workspace-scoped Skill preload policy** | 4 | 0 | **Developer UX** — avoid first-turn tool-call latency for workspace-default skills. |

**Pattern**: Top issues cluster around **integration reliability (webhooks, MCP)**, **channel config parity**, **Windows installer UX**, and **developer ergonomics (skill preload, task indicators)**. The webhook request (#338, 5 months open) signals a segment using CoPaw as an embedded engine, not just a chat UI.

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **🔴 Critical** | [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) | **SSE runaway serialization loop** after agent-to-agent run → 100% CPU, unbounded memory, server unresponsive (macOS, v2.1.1b2) | Closed (fix likely in beta.3) |
| **🔴 Critical** | [#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285) | **Long-conversation browser freeze** — 1-2min generation → mouse 2s/frame, console still streaming, full system lag (i5-12450H/3060, v2.1.1b2) | Closed (fix likely in beta.3) |
| **🟠 High** | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) | **WeChat channel "show thinking" setting ignored** — thinking output leaks despite toggle off (web, v2.1) | ❌ Open |
| **🟠 High** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | **MCP client session not recovered** after server restart — reuses stale `mcp-session-id`, tool queries fail (v2.0.1) | ❌ Open |
| **🟠 High** | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | **Incomplete chunked read** on long responses/reasoning — "peer closed connection without sending complete message body" (win10, v2.1.0) | ❌ Open |
| **🟡 Medium** | [#7266](https://github.com/agentscope-ai/QwenPaw/issues/7266) | **SubAgent uses wrong working directory** — targets default path B instead of project path A (win, v2.1.0) | ❌ Open |
| **🟡 Medium** | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | **Windows installer fails** — browser extension native-messaging host locks python runtime files (v2.1.0b1→b2) | ❌ Open |
| **🟡 Medium** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | **Desktop (Tauri) bundles Python 3.11 + OpenSSL 3.0.x** — carrier middleboxes reset TLS handshakes; needs Python 3.13 | ❌ Open |
| **🟡 Medium** | [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) | **OpenAI Responses API multi-turn fails** — 400 "reasoning item not found/expired" on stateless upstreams (v2.1.0) | ❌ Open |
| **🟢 Low** | [#7282](https://github.com/agentscope-ai/QwenPaw/issues/7282) | **Markdown list excessive vertical spacing** in Console (v2.1.1b2) | ❌ Open |

> **Observation**: Two critical regressions (#7261, #7285) were **closed today** — likely fixed in beta.3. The remaining high-severity bugs are **channel config propagation**, **MCP session resilience**, and **streaming transport reliability** — all core to "agent-as-a-service" reliability.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals | Likelihood (Next Version) |
|---------|-------|---------|---------------------------|
| **Webhook / async callback API** | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 5-month-old, 9 comments, 1👍 — "POST → return key → poll" pattern | 🟡 Medium (architectural, needs design) |
| **Workspace-scoped Skill preload policy** | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | 4 comments, clear spec (`on_demand`/`preload`), low complexity | 🟢 High (UX win, backend-only) |
| **Task-complete notification (orange bottom-bar)** | [#7263](https://github.com/agentscope-ai/QwenPaw/issues/7263) | 1 comment, closed as "review later" | 🟡 Medium (deferred) |
| **Model multi-choice: modal picker vs text input** | [#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279) | 1 comment, closed as "review later", references Hermes UX | 🟡 Medium (deferred) |
| **Auto-clear completed background tasks** | [#7280](https://github.com/agentscope-ai/QwenPaw/issues/7280) | 1 comment, explicit setting request | 🟢 High (simple, settings toggle) |
| **Skin/theme "zero-intrusion gateway"** | [#7287](https://github.com/agentscope-ai/QwenPaw/issues/7287) | Novel proposal from AI-built agent, architectural | 🔴 Low (exploratory) |
| **Unified tool panel / web preview / terminal in Chat** | [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | 3 comments, closed, broad scope (core+console) | 🔴 Low (major feature, post-v2.1) |

**Prediction**: v2.1.1 stable will ship **Skill preload policy**, **auto-clear background tasks**, and **MCP session recovery** (high ROI, low risk). Webhook API and unified tool panel are v2.2+ candidates.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Theme | Representative Voices |
|-------|----------------------|
| **Performance anxiety** | "1-2min generation → mouse 2s/frame, computer unusable, must refresh" ([#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285)); "memory 150MB→580MB in 64min, killed by process manager" ([#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720)) |
| **Config trust erosion** | "WeChat channel 'show thinking' off but still shows thinking" ([#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258)); "installed app shows 'Install' button" ([#7228](https://github.com/agentscope-ai/QwenPaw/issues/7228)) |
| **Windows installer fragility** | "NSIS 4+ 'cannot open file' errors, python.exe/VCRUNTIME locked by browser extension" ([#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)) |
| **Integration gaps** | "Need webhook: my software → CoPaw → callback my API" ([#338](https://github.com/agentscope-ai/QwenPaw/issues/338)); "MCP reconnect fails after server restart" ([#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)) |
| **Developer ergonomics** | "First-turn skill rediscovery latency — want workspace preload" ([#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182)); "SubAgent uses wrong project folder" ([#7266](https://github.com/agentscope-ai/QwenPaw/issues/7266)) |
| **Positive signal** | Detailed WPR traces ([#7129](https://github.com/agentscope-ai/QwenPaw/issues/7129)), root-cause analyses ([#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720)), mockup-rich proposals ([#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182), [#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279)) — **power users investing in the platform**. |

---

## 8. Backlog Watch — Stale High-Value Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) **Webhook support** | 5 months | Enables CoPaw as embeddable engine; 9 comments, clear async pattern | Open, "good first issue" but no assignee |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) **MCP session recovery** | 1 month | Blocks production MCP usage; 6 comments, reproducible | Open, no PR |
| [#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273) **Task tracking/concurrency unification** | 1 month | Architectural inconsistency; 4 comments, affects reliability | Open, no PR |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) **Windows installer pre-flight kill** | 19 days | Blocks updates for users with browser extensions; 5 comments | Open, no PR |
| [#2773](https://github.com/agentscope-ai/QwenPaw/pull/2773) **Self-evolution skill** | 5 months | "Self-improving AI agent

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-26

## 1. Today's Overview

ZeroClaw continues to exhibit high-velocity, governance-driven development on the path toward v0.9.0. The last 24 hours saw 50 issues and 50 pull requests updated, with an open-to-closed ratio of ~38:12 for issues and 49:1 for PRs — a sign of an active intake pipeline rather than throughput on merging. The activity is heavily skewed toward security hardening (skill egress, credential caches, sandbox scoping, symlink races), architectural RFCs (memory backend separation, wire protocol, telemetry pilot), and CI/platform parity (Windows/macOS tests, MSRV bump to 1.98.0). No new releases were cut, consistent with the project being in a hardening phase between 0.8.4 and the next milestone. Overall project health is **stable but caution-flagged**: the volume of P1 security bugs and high-risk PRs marked `do-not-merge` indicates maintainers are deliberately slowing convergence on a risky change set.

## 2. Releases

No new releases in the last 24 hours. Latest shipped version remains 0.8.4 per the RFC #6808 tracker; v0.9.0 milestone work is in progress (see #7432).

## 3. Project Progress

**Closed Issues (12 in 24h) — features and bugs that landed or were triaged:**

- [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) **P1** — Fixed: `agent` cron jobs intermittently resolving `workspace_dir` to `/` (S0 data-loss/security). Mitigation now in place.
- [#9769](https://github.com/zeroclaw-labs/zeroclaw/issues/9769) — Resolved: operator notice for withheld `vi_verify` capability is now visible even when log persistence is disabled.
- [#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058) — Fixed: ZeroCode file-explorer search mode ignoring row/page navigation.
- [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) — Mitigated: streamed user turns being misread as log/API payloads by small local Ollama models.
- [#9663](https://github.com/zeroclaw-labs/zeroclaw/issues/9663) — Fixed: Voice Wake bound to the owning agent's transcription provider.
- [#10257](https://github.com/zeroclaw-labs/zeroclaw/issues/10257) — Fixed: `cron update --command` writing an unused column on agent jobs.
- [#10271](https://github.com/zeroclaw-labs/zeroclaw/issues/10271) — Refactor: consolidated three crate-local `floor_char_boundary` copies onto stdlib.
- [#10042](https://github.com/zeroclaw-labs/zeroclaw/issues/10042) — Fixed: MSRV CI job consuming its 20-minute timeout in `apt_install.sh`.

**Merged/Closed PRs (1 of 50 closed in 24h):**
- The single non-open PR appears to be a routine tooling or test change; specific identification was not surfaced in the dataset.

**Notable open PRs advancing features:**
- [#10369](https://github.com/zeroclaw-labs/zeroclaw/pull/10369) — Bounds skill HTTP egress (1 MiB cap, validated destination pinning, no ambient proxies/redirects).
- [#10370](https://github.com/zeroclaw-labs/zeroclaw/pull/10370) — Hardens Copilot credential cache; flagged `do-not-merge` pending Windows CI and maintainer review.
- [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) — Enforces execution-tree iteration budgets (closes loop on #9323).
- [#10363](https://github.com/zeroclaw-labs/zeroclaw/pull/10363) — Includes Git channel in official artifacts.
- [#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527) — Bumps routine Rust toolchains to 1.98.0 (MSRV stays at 1.96.0).
- [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) — ZeroRelay secure transport with blind relay + native mTLS enrollment; supersedes #9080.
- [#10234](https://github.com/zeroclaw-labs/zeroclaw/pull/10234) — Surfaces terminal provider failure causes to CLI and ZeroCode.

## 4. Community Hot Topics

The most-discussed items are governance and architectural RFCs, not features — a hallmark of a project in heavy pre-stable design phase:

- [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — **24 comments** — RFC: Work Lanes, Board Automation, and Label Cleanup. The active governance rollout tracker (Rev. 26). Signals the project is investing heavily in triage automation to scale maintainer load.
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — **14 comments** — Maintainer decision queue for RFCs and design issues. Reinforces that maintainer attention is the bottleneck.
- [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) — **14 comments** — RFC: separate authoritative memory storage from enrichment connectors. High-risk architecture change; revised by maintainers on 2026-08-22 after a prior vote was rejected.
- [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) — **12 comments** — RFC: make wire protocol first-class in provider construction. Aimed at reducing provider onboarding friction.
- [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) — **9 comments** — Harden runtime-written executable test fixtures under parallel runtime gate.
- [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) — **9 comments, 1 👍** — Evaluate Rust/WASM web UI prototype (Dioxus/Leptos/Yew) before committing to a React/Vite migration. Long-term platform decision.

**Underlying need:** most top-of-mind concerns are *meta* — workflow automation, decision routing, architectural boundaries. This is a project consciously professionalizing rather than chasing features.

## 5. Bugs & Stability

Bugs filed or updated today cluster around sandbox/security boundaries and daemon reload behavior. Ranked by severity:

| Severity | Issue | Component | Fix PR |
|---|---|---|---|
| S0 (data loss/security) | [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) — cron workspace resolves to `/` | runtime/daemon | ✅ Closed |
| S0 (data loss/security) | [#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947) — cron tools not scoped to owning agent; cross-agent access | runtime/daemon | None yet |
| S1 (workflow blocked) | [#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357) — tool error path discards detailed body, only "HTTP 400" reaches the agent | tools | [#10364](https://github.com/zeroclaw-labs/zeroclaw/pull/10364) open |
| S1 (workflow blocked) | [#10042](https://github.com/zeroclaw-labs/zeroclaw/issues/10042) — MSRV CI timeout | tooling/ci | ✅ Closed |
| S2 (degraded) | [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) — bounded delegate target uses delegator's workspace | security/sandbox | None yet |
| S2 (degraded) | [#10257](https://github.com/zeroclaw-labs/zeroclaw/issues/10257) — `cron update --command` unused column | runtime/daemon | ✅ Closed |
| S2 (degraded) | [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) — local Ollama reads streamed user turns as logs | zerocode/tui | ✅ Closed |
| S2 (degraded) | [#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058) — ZeroCode file explorer search ignores nav | zerocode/tui | ✅ Closed |
| S3 (minor) | [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) — ZeroCode Health status misaligned in fr/es | zerocode/tui | None yet |

**Hotspots:** cron job isolation (#9206, #9947, #10257) and sandbox-workspace resolution (#9872) are the two highest-risk recurring bug classes. Both touch agent isolation in multi-agent installs, and at least one of the three cron bugs remains unfixed.

## 6. Feature Requests & Roadmap Signals

Active feature work in last 24h, ranked by likely inclusion in the next release (v0.9.0 per [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)):

**High confidence for v0.9.0:**
- **Multi-session gateway web chat UI** ([#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543)) — long-standing, in-progress, broadly requested.
- **Cross-platform CI matrix** ([#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)) — Windows/macOS testing now in-progress; PR #10350 introduces advisory Windows measurement jobs, signaling a phased rollout.
- **Auth, security, gateway breaking changes** ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)) — the v0.9.0 milestone tracker.
- **Skill HTTP egress bounds** ([#10369](https://github.com/zeroclaw-labs/zeroclaw/pull/10369)) — security hardening aligned with v0.9.0 theme.
- **Execution-tree iteration budgets** ([#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323), [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351)) — closed-loop enforcement likely bundled.

**Medium confidence:**
- **TaskRecord as single delegation lifecycle owner** ([#9593](https://github.com/zeroclaw-labs/zeroclaw/issues/9593)) — in-progress refactor.
- **ZeroCode dynamic tool-registry refresh** ([#10297](https://github.com/zeroclaw-labs/zeroclaw/issues/10297)) — eliminates need for daemon restart on config changes.
- **Hailo-Ollama native provider** ([#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)) — opt-in provider, low blast radius.
- **AnySearch web provider** ([#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356)) — opt-in web search.
- **Mattermost approval prompts** ([#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358)) — fills a known channel gap.

**Lower confidence / likely deferred:**
- **Rust/WASM web UI** ([#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)) — major platform decision, contested.
- **Edge mesh with pull workers** ([#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)) — new RFC, just filed.
- **Bounded telemetry pilot** ([#10340](https://github.com/zeroclaw-labs/zeroclaw/issues/10340)) — gated by a single Windows shell-host research case.

## 7. User Feedback Summary

Concrete user pain points observable from issue/PR text:

- **Sandbox boundaries are leaky in multi-agent installs.** The fact that cron tools, bounded delegates, and cron-resolved workspaces can all cross agent boundaries (issues #9947, #9872, #9206) indicates users running realistic multi-agent setups are routinely hitting isolation bugs.
- **Web UI is single-session per agent.** Users want sidebar session management ([#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543)), implying power-users run multiple parallel contexts.
- **Config changes require full daemon restart.** [#10297](https://github.com/zeroclaw-labs/zeroclaw/issues/10297) shows users expect hot-reload of built-in tool enable/disable.
- **Tool error messages are too terse for agents.** [#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357) — agents see "HTTP 400" with no body, breaking recovery workflows.
- **Local LLM users hit prompt-formatting issues.** [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) shows Ollama `llama3.2` users get garbled ZeroCode prompts.
- **i18n polish in ZeroCode.** French/Spanish label width issues in Health panel ([#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103)) indicate an active non-English user base.
- **Channel support gaps are still felt.** Mattermost had no approval path until PR #10358; the "Channels" status output in #10138 (no Telegram/Discord/Matrix/WhatsApp/Email/Gmail) implies users expect first-class status reporting for these.
- **Distributed compute interest.** Edge mesh RFC ([#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)) is a request from operators with idle heterogeneous hardware who don't want to pay for cloud GPUs.

**Satisfaction signal:** GitHub reactions are sparse (only 1 👍 across the 30 top issues), but comment counts are healthy on governance and architecture items — users are *engaged*, not just complaining. The dominant tone is "I want this thing to be production-grade," not feature envy.

## 8. Backlog Watch

Items needing maintainer or code-owner attention that are still open and materially important:

- [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) — Memory backend RFC. **14 comments, `needs-maintainer-review`, `risk:high`.** Already revised once after a failed vote (2026-08-22); blocker for downstream memory work.
- [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) — Wire-protocol-first provider construction RFC. **12 comments, `needs-maintainer-review`, `risk:high`.** Affects every future provider.
- [#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947) — Cross-agent cron tool access. **S0, P1, no fix PR.** Open since 2026-08-12; users are exposed until merged.
- [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) — Bounded delegate workspace leak. **S2, P1, no fix PR.** Open since 2026-08-09.
- [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) — Rust/WASM web UI evaluation. **9 comments, 1 👍, `needs-author-action`, `risk:high`.** Awaiting decision so a major web-stack commitment can move.
- [#10340](https://github.com/zeroclaw-labs/zeroclaw/issues/10340) — Bounded telemetry pilot implementation. **Just opened, `risk:high`.** Coordination surface for the first sanctioned telemetry work; needs explicit policy boundaries.
- [#10346](https://github.com/zeroclaw-labs/zeroclaw/issues/10346) — Gateway/channels MCP-registry caching pattern. **`needs-maintainer-review`.** Just opened, addresses a 3x-per-boot spawn inefficiency.
- [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) — Edge mesh RFC. **`needs-maintainer-review`.** Brand new; will need triage to determine whether it aligns with the local-first principle.
- [#10370](https://github.com/zeroclaw-labs/zeroclaw/pull/10370) — Copilot credential cache hardening. **Marked `do-not-merge`, awaiting Windows CI + maintainer review.** High-risk credential change sitting in the merge queue.
- [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) — ZeroRelay secure transport. **`needs-author-action`, XL.** Supersedes prior work; large surface area, needs focused review.

**Pattern:** the maintainer attention bottleneck is on high-risk, cross-cutting items (memory backend, wire protocol, sandbox boundaries, credential handling, transport security). Everything else is moving; these are the load-bearing decisions for v0.9.0.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*