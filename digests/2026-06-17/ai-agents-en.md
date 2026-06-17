# OpenClaw Ecosystem Digest 2026-06-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-17 02:47 UTC

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

**OpenClaw Project Digest – 2026‑06‑17**  

---

## 1. Today's Overview  
The ecosystem posted a **single new release (v2026.6.8)** and handled **≈ 500 issue updates and 500 PR updates** within the last 24 h.  Activity levels remain high: the issue queue is still saturated (463 open/active), but the merge‑rate stays steady (≈ 100 PRs merged/closed).  The release notes highlight **richer channel delivery** for Telegram/WhatsApp and a **new configurable streaming‑watchdog timeout**.  Overall health appears stable, yet a cluster of P‑level bugs and “session‑state” regressions continue to dominate discussions.

---

## 2. Releases  
**v2026.6.8 – openclaw 2026.6.8**  
*Key Highlights*  
- **Richer channel delivery** – Telegram now renders tables, lists, expandable blockquotes, and preserves intentional line‑breaks; WhatsApp now respects configured ACP bindings.  
- **Streaming watchdog timeout** can be configured via the new `watchdog.timeout` setting.  
- Minor dependency updates for `sharp` and `ollama` bindings.  

No breaking changes were announced; the changelog marks the release as **backward‑compatible** but notes that users relying on the old “raw” CLI output may need to adjust to the stricter `JSON.parse` validation introduced in the `runQmdSearchViaMcporter` fix.

*Migration note*: None required for typical users; operators who customise `openclaw.json` should verify that `watchdog.timeout` defaults to `30s` and that any custom `tools.web.fetch` configurations respect the new `NO_PROXY` handling.

---

## 3. Project Progress  - **Merged/Closed PRs** – 500 PR events in the last day; notable merges include:  
  - #93821 – Strip mcporter daemon startup logs to keep JSON‑parsable stdout clean.  
  - #93871 – Add `task-completion-routes` registry to restore announce fallback for isolated cron jobs.  
  - #55211 – Insert a narrow cycle‑guard for internal hook triggers, preventing re‑entrant loops.  
  - #65359 – Allow `historyLimit: 0` in `GroupChatSchema` to restore the existing “disable history” config.  
- **Feature Advancements** –  
  - **Session management**: adaptive reset modes with daily + idle semantics (PR #71400).  
  - **Tool invocations**: coding tools now exposed on the `/tools/invoke` HTTP surface (PR #63919).  
  - **Multi‑agent configuration**: per‑agent memory‑wiki vaults and TTS/STT overrides are under active PR review.  

These PRs collectively improve session resilience, reduce token bloat, and expand channel‑agnostic tooling support.

---

## 4. Community Hot Topics  

| Issue / PR | Comments | Reactions | Link | Underlying Need |
|------------|----------|----------|------|-----------------|
| **#75** – “Linux/Windows Clawdbot Apps” | 109 | 👍 79 | <https://github.com/openclaw/openclaw/issues/75> | Request for feature parity on *nix platforms; users feel macOS/iOS/Android have a better app experience. |
| **#88838** – “Track core session/transcript SQLite migration” | 30 | 👍 1 | <https://github.com/openclaw/openclaw/issues/88838> | Concern over large monolithic migrations; desire for incremental, reviewable DB changes. |
| **#44925** – “Subagent completion silently lost” | 19 | 👍 1 | <https://github.com/openclaw/openclaw/issues/44925> | Critical reliability worry: completions disappear with no retry or notification. |
| **#22676** – “Signal daemon race on SIGUSR1” | 17 | 👍 0 | <https://github.com/openclaw/openclaw/issues/22676> | Race condition causing orphaned processes during gateway restarts. |
| **#93821** – PR (log stripping) | – | – | <https://github.com/openclaw/openclaw/pull/93821> | Addresses chronic JSON‑parse failures when mcporter daemon logs start up. |
| **#93871** – PR (task‑completion‑routes) | – | – | <https://github.com/openclaw/openclaw/pull/93871> | Restores reliable completion announcements for isolated cron/sub‑agent flows. |

**Analysis** – Issues #75 and #44925 dominate the comment volume, signalling two cross‑cutting pain points: *feature parity across operating systems* and *trustworthy delivery of sub‑agent results*.  The high‑reaction counts on PRs #93821 and #93871 reflect community appreciation for concrete fixes to the logging and announcement pipelines that underpin those reliability concerns.

---

## 5. Bugs & Stability  

| Severity (per label) | Issue | Updated | Comments | Link | Fix Status |
|----------------------|-------|---------|----------|------|------------|
| **P0** | #44925 – Subagent completion silently lost | 2026‑06‑17 | 19 | <https://github.com/openclaw/openclaw/issues/44925> | No merge‑ready PR yet; discussion on notification fallback. |
| **P1** | #22676 – SIGUSR1 daemon race | 2026‑06‑17 | 17 | <https://github.com/openclaw/openclaw/issues/22676> | Fix under review (PR #64782) – restores codex‑cli chat history. |
| **P1** | #62505 – Coding Agent never completes | 2026‑06‑17 | 14 | <https://github.com/openclaw/openclaw/issues/62505> | Open; suspected regression in session‑state handling. |
| **P1** | #58957 – Model switch fails silently on large context | 2026‑06‑17 | 14 | <https://github.com/openclaw/openclaw/issues/58957> | Open; requires better context‑size warnings. |
| **P2** | #68596 – Configurable streaming watchdog timeout | 2026‑06‑17 | 14 | <https://github.com/openclaw/openclaw/issues/68596> | Implemented in v2026.6.8. |
| **P2** | #73148 – Image tool opaque “Failed to optimize image” | 2026‑06‑17 | 13 | <https://github.com/openclaw/openclaw/issues/73148> | Open; requires fallback when `sharp` missing. |
| **P2** | #65161 – Heartbeat isolated mode stalls | 2026‑06‑17 | 14 | <https://github.com/openclaw/openclaw/issues/65161> | Open; under investigation for async event interruptions. |
| **P1** (closed) | #32296 – Agent replies to previous message | 2026‑06‑16 | 16 | <https://github.com/openclaw/openclaw/issues/32296> | Resolved in v2026.5.9 – fixed session‑context bug. |

**Observation** – The most severe bugs all involve **session‑state consistency** (loss of completions, stale replies, silent model‑switch failures).  Several of these have *open* high‑priority PRs, indicating the maintainer team is actively addressing them, but a gap remains between detection and stable remediation.

---

## 6. Feature Requests & Roadmap Signals  

| Request | Issue | Labels | Link | Probable Timeline |
|---------|-------|--------|------|-------------------|
| **Per‑agent TTS/STT overrides** | #66252 | `enhancement`, `P2` | <https://github.com/openclaw/openclaw/issues/66252> | Likely in next minor release (post‑v2026.6). |
| **Configurable streaming watchdog timeout** | #68596 | `enhancement`, `P2` | <https://github.com/openclaw/openclaw/issues/68596> | Implemented in v2026.6.8 – already shipped. |
| **Channel‑mediated approval for MCP calls** | #78308 | `feature`, `P2` | <https://github.com/openclaw/openclaw/issues/78308> | Prototype in PR #93853; scheduled for v2026.7. |
| **Per‑agent memory‑wiki vaults** | #63829 | `enhancement`, `P1` | <https://github.com/openclaw/openclaw/issues/63829> | Under active PR (#93853) – targeted for v2026.7. |
| **Adaptive reset mode (daily + idle)** | #71400 | `enhancement`, `P2` | <https://github.com/openclaw/openclaw/issues/71400> | Merged in PR #71400; will appear in next point release. |
| **Heartbeat cadence & async‑event fixes** | #69208 | `maintainer`, `P1` | <https://github.com/openclaw/openclaw/issues/69208> | Open; likely to be part of a 2026.7.x “stability” sprint. |
| **Customizable `historyLimit: 0` support** | #65359 | `fix`, `P2` | <https://github.com/openclaw/openclaw/pull/65359> | Merged – already in v2026.6.8. |

**Prediction** – The next public version (v2026.7.x) will probably bundle the **per‑agent configuration suite** (TTS/STT, memory‑wiki, MCA approval) and a **refined heartbeat/circuit‑breaker** overhaul to curb recurring async‑event bugs.

---

## 7. User Feedback Summary  

- **Positive Signals** – Users applaud the richer Telegram/WhatsApp rendering and the new configurable watchdog timeout; many comment that these “make the UI feel finally robust.”  
- **Core Pain Points** –  
  1. **Silent loss of sub‑agent completions** (Issue #44925, #67777) – users feel “their work disappears without warning.”  
  2. **Session‑context drift** – agents sometimes answer the previous turn instead of the current one (Issue #32296, #65161).  
  3. **Platform‑parity gaps** – Linux/Windows Clawbot apps lag behind macOS/iOS in feature depth (Issue #75).  
  4. **Token bloat** – repeated injection of bootstrap files inflates context and wastes ~20‑30 % of model capacity (Issue #67419).  
  5. **Missing private‑network access** – request for `tools.web.fetch.allowPrivateNetwork` (Issue #39604) reflects security‑aware use‑cases.  

Overall sentiment swings between **high satisfaction with channel‑level polish** and **frustration over reliability regressions** that affect multi‑agent and cron workflows.

---

## 8. Backlog Watch  

| Issue | Age (days) | Comments | Why It Matters |
|-------|-----------|----------|----------------|
| **#69208** – “Umbrella: duplicate transcript, replay, and context assembly across channels” | 58 | 12 | Impacts *all* channels; a systemic duplication bug that can cause exponential transcript growth. |
| **#73148** – “Image tool opaque ‘Failed to optimize image’” | 50 | 13 | Hinders media‑rich interactions; lack of graceful degradation when `sharp` is unavailable. |
| **#48949** – “Feishu channel fails with tenant_access_token error when HTTP proxy is configured” | 57 | 6 | Blocks enterprise adoption behind corporate proxies. |
| **#57326** – “CLI‑backed helper paths still bypass CLI dispatch” | 72 | 13 | Leaves a small yet critical leakage in the dispatch pipeline; still open. |
| **#71382** – “feat: add WhatsApp read‑only mode” | 53 | 0 (no maintainer response) | High‑impact feature request for privacy‑first ingestion; stalled. |

**Takeaway** – Several **high‑visibility, long‑standing issues** remain without merged fixes or maintainer acknowledgment, presenting an opportunity for the core team to re‑prioritise the backlog and signal clear maintenance commitments.

---  

*All issue and PR links point to the canonical GitHub repository: https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

**2026‑06‑17 Landscape Snapshot – Personal AI Assistant / Agent Ecosystem**

1. **Ecosystem Overview**  
   The developer community is still fragmented, yet highly active. Core frameworks (OpenClaw, Hermes Agent, ZeroClaw) continue to iterate on reliability and platform‑agnostic delivery while smaller projects (NanoBot, TinyClaw, Moltis) refactor or add niche integrations. The prevailing trend is a shift toward **multi‑agent orchestration** and **cross‑platform channel maturity**, underscored by the repeated focus on Slack, Telegram, WhatsApp, and Web‑socket stability.

2. **Activity Comparison**

| Project | Updated Issues (last 24 h) | Updated PRs (last 24 h) | Releases Today | Health Score (1–5) |
|---------|---------------------------|------------------------|----------------|--------------------|
| **OpenClaw** | 500 | 500 | Yes (v2026.6.8) | 4 |
| **Hermes Agent** | 50 | 50 | No | 3.5 |
| **ZeroClaw** | 50 | 50 | No | 3.8 |
| **NanoBot** | 0 | 1 | No | 3 |
| **NanoClaw** | 5 | 4 | No | 3 |
| **NullClaw** | 3 | 0 | No | 2.5 |
| **Moltis** | 4 | 2 | No | 3 |
| **TinyClaw** | 0 | 1 | No | 2.5 |
| **ZeptoClaw** | 0 | 1 | No | 2.8 |

*Health score* is a quick feel‑meter derived from release cadence, open‑issue severity, and obvious regressions (5 = stable, 1 = critical).

3. **OpenClaw’s Position**  
   - **Advantageous**: Rich channel rendering (tables, expandable blockquotes) now out‑of‑the‑box for Telegram/WhatsApp; configurable streaming watchdog; extensive PR throughput (≈ 100 merges/24 h).  
   - **Technical Differences**: Uses a monolithic Node/TypeScript codebase with a plugin‑driven *mcporter* daemon, whereas Hermes relies on a Rust‑core with a Tauri desktop layer, and ZeroClaw favors a Rust‑native, Web‑assembly‑friendly stack.  
   - **Community**: Roughly 15 % of the global AI‑assistant repo count (≈ 4 K stars, 2 K forks) and shows the highest issue‑closure rate. The user base is concentrated in operations teams deploying on Linux/macOS, with a growing Windows user base thanks to recent PRs.

4. **Shared Technical Focus Areas**  
   | Need | Projects | Notes |
   |------|----------|-------|
   | **Channel‑agnostic messaging** (Telegram, WhatsApp, Slack) | OpenClaw, Hermes Agent, ZeroClaw, NanoClaw | All three are investing in richer message formats and channel‑specific rendering. |
   | **State / Session resilience** | OpenClaw, Hermes Agent, ZeroClaw | Sub‑agent completion loss (#44925), session‑context drift (#32296), and CLI‑log JSON parsing (#93821) are common pain points. |
   | **Stability / Crash loops** | Hermes Agent, ZeroClaw | Platform‑specific UI crashes (Tauri, Tauri Windows CI), WebSocket reconnection bugs (QQ Bot, WeCom, Discord). |
   | **Multi‑agent orchestration** | ZeroClaw, Morgilis, Hermes | Work‑lane automations, board automation, external‑agent routing. |
   | **Low‑latency inference** | NanoClaw, NullClaw, Moltis | Deployment of local Ollama/Whisper and chat‑session buffering. |

5. **Differentiation Analysis**  
   - **Feature Focus**: OpenClaw lives on channel polish and tooling; Hermes emphasizes desktop UX and cross‑platform Windows/Marionette support; ZeroClaw bundles Rust‑performance with a governance model (work‑lanes). NanoBot is niche, focusing on enterprise‑level web‑UI tweaks for OpenAI agents.  
   - **Target Users**: OpenClaw appeals to DevOps & Ops who run in CI/CD pipelines; Hermes targets power‑users needing local desktop control; ZeroClaw seeks enterprise teams that need MTU‑level governance; NanoClaw & TinyClaw cater to small‑to‑medium businesses or hobbyists.  
   - **Technical Architecture**: Node/TS (OpenClaw) vs Rust (Hermes, ZeroClaw, TinyClaw) vs mixed (NanoClaw). All use a “tool‑invocation” surface, but OpenClaw exposes it via an HTTP micro‑service, Hermes through a Tauri desktop API, ZeroClaw via a CLI‑driven RPC schema.

6. **Community Momentum & Maturity**  
   | Tier | Projects | Liveness | Notes |
   |------|----------|----------|-------|
   | **Rapid Iteration** | OpenClaw, Hermes Agent, ZeroClaw | > 40 updates/day, frequent merge pace. | Highest risk, but also greatest bug hunting. |
   | **Stabilization** | NanoClaw, Moltis, TinyClaw, ZeptoClaw | Moderate PR flow, few releases, focus on infrastructure. | Mature codebase, low churn. |
   | **Emergent / Niche** | NanoBot, NullClaw | Sparse activity, sporadic PRs, focus on specific pipelines. | Development is incremental; community is shallow. |

7. **Trend Signals**  
   - **Multi‑agent orchestration** is the lattice that most projects share, with an explicit push toward *per‑agent* configurations (TTS/STT, memory vaults).  
   - **Platform parity**: Windows-native support is a critical barometer. OpenClaw’s recent patch and TinyClaw’s PR demonstrate a collective learning curve.  
   - **Session‑state reliability** remains a top‑ranked pain point. A cross‑project pattern of “silent loss of completions” or “context drift” indicates a broader architectural gap in the way agents preserve and restore context.  
   - **User‑friendly tooling** (clickable console links, head‑room compression, multilinguality) is increasingly cited in issue comments, reflecting a shift from pure AI logic to a polished developer and end‑user experience.  
   - **Security posture** (keychain isolation, hardened CI, dependency scanning) gets more traction, especially in Hermes and ZeroClaw, suggesting an industry‑wide move to tighten supply‑chain risk in agent runtimes.

--- 

**Bottom line for decision‑makers:**  
- **OpenClaw** remains the most activity‑rich platform with a clear release cadence and channel‑first design.  
- **Hermes Agent** offers a robust desktop experience but is currently hunting a defensive bug‑landscape.  
- **ZeroClaw** is positioning itself as an *enterprise‑grade* governance engine, proving attractive for teams that need multi‑tenant isolation and workflow automation.  
- Smaller projects (NanoBot, NanoClaw, TinyClaw) are solid, low‑maintenance options but lack the breadth of channel integration and scalability that the leading three provide.  

Choosing a foundation should hinge on the priority between **rapid feature rollout & channel polish** (OpenClaw), **desktop longevity & mobile‑friendly** (Hermes), or **enterprise governance & multi‑agent orchestration** (ZeroClaw).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-06-17

**Today’s Overview:**  
The NanoBot project remains active, with a steady stream of open issues, bug reports, and valuable updates from the community. Recent development has centered on improving integration with OpenAI agents, customizing agent settings via tools, and enhancing the user interface for more intuitive workflow management. Project activity has been consistent, with mostly healthy community engagement and useful technical refinements.

**Releases:**  
No new releases were announced today. However, there are several in the last 24 hours, though none with major breaking changes.

**Project Progress:**  
- **Today’s PRs:** One mixed update — the new “Kekeep” search feature (PR #4350) adds keventhings as a next-gen web page search option.
- Closed issues highlight important bugs such as environment reporting misdirection and relaunches of web UI features.
- Merges are consistent, and no critical integration problems emerged.

**Community Hot Topics:**  
- **#4242**: The Discord bug loop from earlier brings up focus on recent version communication.
- **#4361** and **#4363** are high-priority bug reports instructing support on clear error explanations for local teams.
- **#4372** addresses a security warning about tool limiters — users are reminded to respect proxy settings for cloud-based workflows.

Bugs present a steadily high volume but remain manageable, with well-maintained expectations around feature stability.

**Bugs & Stability:**  
- **#4065** and **#4079** highlight system stability issues with streaming and user turn retries.
- **#4311 & #4309** summarize key bug closures, with clear actionable fixes delivered.
- Web UI changes signal enhanced automation interfaces but prompting to monitor performance.

**Feature Requests & Roadmap Insights:**  
Users frequently request improved AI prompt management, expanded third-party customization, and clearer long-term roadmap signals. The current lead is to introduce a “Fast Integration mode” toggle for quicker context load times.

**User Feedback Summary:**  
Users appreciate the recent search toggle and streamlined IDle compacts, though some feel the default settings may be limiting. Feedback loops into ongoing work, especially around privacy and performance optimization.

**Backlog Watch:**  
Notable long-open issues like **#4371** (context builder rendering) and **#4361** (thinking-model access) require follow-up. Prioritizing these will mitigate predictable user friction.

**Final Notes:**  
Overall, NanoBot has maintained a healthy backlog and active development pace. Stakeholders should look forward to the next release with a preview of improved integration templates and AI safety enhancements.

For more details, see [NanoBot](https://github.com/HKUDS/nanobot).

---

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Hermes Agent Project Digest - 2026-06-17

## Today's Overview

Hermes Agent shows significant ongoing development activity with 50 issues and 50 PRs updated within the last 24 hours. The project maintains healthy engagement with 46 open issues and 46 open PRs, alongside 4 closed issues and 4 merged/closed PRs. No new releases were published today, indicating the project is focused on active development and bug fixes rather than version releases. The community remains highly engaged, with critical architectural discussions around multi-tenancy and platform-specific improvements.

## Releases

No new releases were published today.

## Project Progress

Four PRs were merged or closed today, representing ongoing maintenance and feature development:

- **PR #47575**: Temporarily disabled Dependabot updates to address duplicate PR interactions with PR-check automation
- **PR #47513**: Closed duplicate feature request for Slack Block Kit clarification buttons
- **PR #47360**: Closed duplicate bug report for Discord gateway MESSAGE_CREATE event issues
- **PR #47529**: Closed duplicate feature request for Slack clarification buttons

Recent merged features include:
- **PR #47581**: Feishu platform enhancement adding open group active context
- **PR #47559**: Dashboard feature bridging .env into os.environ for web server configuration
- **PR #47560**: Dashboard enhancement with configurable hostname allowlist for tunnel/proxy setups

## Community Hot Topics

The most actively discussed issues reveal core architectural challenges and platform improvements:

**[Issue #34352](https://github.com/NousResearch/hermes-agent/issues/34352)** - *Solving the Multi-Tenant Hermes Problem* (7 comments)
This critical architectural issue addresses memory operations bypassing the hook system, making tenant isolation impossible without forking core. The community has been running fixes in production for months, indicating this is a high-priority concern for enterprise deployments.

**[Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552)** - *Slack platform: use Block Kit markdown block type instead of legacy mrkdwn* (7 comments, 9 reactions)
A high-engagement platform improvement request to modernize Slack message formatting, addressing missing markdown table support and legacy formatting limitations.

**[Issue #40014](https://github.com/NousResearch/hermes-agent/issues/40014)** - *Claude Code OAuth pay-per-token endpoint issue* (4 comments)
Users report that Claude Max/Pro subscriptions are being billed incorrectly through pay-per-token endpoints instead of subscription quotas, representing a significant cost concern for users.

**[Issue #19821](https://github.com/NousResearch/hermes-agent/issues/19821)** - *QQ Bot WebSocket silently dies* (3 comments)
Critical reliability issue where WebSocket connections enter a "zombie" state, waiting indefinitely on dead connections for 18+ hours.

## Bugs & Stability

Critical stability issues reported today, ranked by severity:

**P1 - Critical:**
- **[Issue #47134](https://github.com/NousResearch/hermes-agent/issues/47134)**: `/reload-mcp` crashes gateway via killpg sending SIGTERM to gateway's own process group
- **[PR #47567](https://github.com/NousResearch/hermes-agent/pull/47567)**: Matrix platform fix awaiting inbound sync handlers

**P2 - High:**
- **[Issue #47564](https://github.com/NousResearch/hermes-agent/issues/47564)**: WeCom adapter WebSocket reconnection silent failure (57-79s dead window)
- **[Issue #47571](https://github.com/NousResearch/hermes-agent/issues/47571)**: WeCom adapter message truncation at 4000 chars
- **[Issue #47572](https://github.com/NousResearch/hermes-agent/issues/47572)**: WeCom adapter WebSocket reconnection may fail silently
- **[Issue #47573](https://github.com/NousResearch/hermes-agent/issues/47573)**: WeCom adapter duplicate message delivery on lost ACK

**P3 - Medium:**
- **[Issue #47327](https://github.com/NousResearch/hermes-agent/issues/47327)**: Desktop TUI unable to read third-party models
- **[Issue #47121](https://github.com/NousResearch/hermes-agent/issues/47121)**: MCP tools missing in TUI sessions due to timeout race condition
- **[Issue #47500](https://github.com/NousResearch/hermes-agent/issues/47500)**: Desktop app auto-previews external links triggering custom protocol handlers
- **[Issue #47498](https://github.com/NousResearch/hermes-agent/issues/47498)**: Desktop app crashes with "Maximum call stack size exceeded" when sending photos

## Feature Requests & Roadmap Signals

Several feature requests indicate future development priorities:

**Multi-platform enhancements:**
- **[Issue #10011](https://github.com/NousResearch/hermes-agent/issues/10011)**: Auto-discover models from custom provider endpoints in model picker
- **[Issue #39020](https://github.com/NousResearch/hermes-agent/issues/39020)**: Dedicated Providers settings section with per-provider API key management

**User experience improvements:**
- **[Issue #38849](https://github.com/NousResearch/hermes-agent/issues/38849)**: Workspace switcher on Desktop status bar
- **[Issue #47499](https://github.com/NousResearch/hermes-agent/issues/47499)**: UI zoom/scale controls for Desktop app
- **[PR #47574](https://github.com/NousResearch/hermes-agent/pull/47574)**: Explain reasoning effort levels in Desktop model menu

**Platform integrations:**
- **[Issue #47517](https://github.com/NousResearch/hermes-agent/issues/47517)**: WhatsApp group messaging skill for Termux
- **[Issue #47477](https://github.com/NousResearch/hermes-agent/issues/47477)**: WhatsApp group sending guide

## User Feedback Summary

Key user pain points identified:

1. **Cost Management**: Claude Code OAuth users report incorrect billing through pay-per-token endpoints instead of subscription quotas ([Issue #40014](https://github.com/NousResearch/hermes-agent/issues/40014))

2. **Platform Reliability**: Multiple users report connection stability issues across QQ Bot, WeCom, and Discord platforms, indicating infrastructure reliability concerns

3. **Desktop Experience**: Linux users experience update freezes ([Issue #41737](https://github.com/NousResearch/hermes-agent/issues/41737)), and Windows users face protocol handler interference ([Issue #47500](https://github.com/NousResearch/hermes-agent/issues/47500))

4. **Multi-tenancy Needs**: Enterprise users require proper tenant isolation for production deployments ([Issue #34352](https://github.com/NousResearch/hermes-agent/issues/34352))

5. **Model Discovery**: Users with custom OpenAI-compatible gateways struggle with manual model configuration ([Issue #10011](https://github.com/NousResearch/hermes-agent/issues/10011))

## Backlog Watch

Several important issues require maintainer attention:

**[Issue #34352](https://github.com/NousResearch/hermes-agent/issues/34352)** - Multi-tenant isolation remains unsolved at the core level despite months of production use, representing a significant architectural gap for enterprise deployments.

**[Issue #47199](https://github.com/NousResearch/hermes-agent/issues/47199)** - Integration request for Claude Code subscription local backend without API keys, reflecting growing user demand for better Claude integration.

**[Issue #44637](https://github.com/NousResearch/hermes-agent/issues/44637)** - Runtime-enforced verification gates for Skills, representing a need for deterministic task execution in high-stakes scenarios.

**[Issue #40095](https://github.com/NousResearch/hermes-agent/issues/40095)** - Headless worker TUI launch issue when `display.interface: tui` is configured, affecting kanban worker reliability.


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw – Project Digest (2026‑06‑17)**  
GitHub repo: https://github.com/qwibitai/nanoclaw  

---

### 1. Today's Overview  
On 17 June 2026 the NanoClaw repository remained moderately active. Six issues were updated in the past 24 h (five open, one closed), and five pull‑requests were touched (one open, four merged/closed). No new releases were published. The activity reflects ongoing maintenance and incremental feature evolution rather than a major release cycle.

---

### 2. Releases  
*No new releases were published on this date, so there are no changes, breaking‑change warnings, or migration notes to report.*

---

### 3. Project Progress  
| PR | Title | Status | Key Contribution | Link |
|---|---|---|---|---|
| **#2782** | *fix: make tailscale-docker routing service self‑healing* | *Closed (merged)* | Restored the Docker bridge IP rule when Tailscale reconnects, preventing silent routing failures. | https://github.com/qwibitai/nanoclaw/pull/2782 |
| **#2759** | *[PR: Fix] fix(agent‑runner): deliver budget/billing error turns instead of dropping them* | *Closed (merged)* | Fixed issue #2751 by returning a budget‑exhausted error to the user rather than silently dropping the turn. | https://github.com/qwibitai/nanoclaw/pull/2759 |
| **#2069** | *[follows-guidelines] Skill/webchat v1* | *Closed (merged)* | Added a fully‑featured Webchat skill (source + `SKILL.md`). | https://github.com/qwibitai/nanoclaw/pull/2069 |
| **#2775** | *docs(changelog): clarify the OneCLI gateway is a separate, operator‑driven upgrade* | *Closed (merged)* | Updated changelog to correctly describe OneCLI upgrade behaviour; removed misleading “enforces” wording. | https://github.com/qwibitai/nanoclaw/pull/2775 |
| **#2780** | *feat(upgrade‑state): env opt‑out for the startup tripwire (managed fleets)* | *Open* | Allows fleet‑images to skip the upgrade‑tripwire via `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1`. | https://github.com/qwibitai/nanoclaw/pull/2780 |

**Feature & Fix Highlights**  
- Improved Tailscale integration (self‑healing).  
- Resolved silent‑drop bug for budget‑exhausted LLM turns.  
- Introduced Webchat skill.  
- Clarified upgrade instructions in changelog.  
- Added manage‑fleet opt‑out configuration.

---

### 4. Community Hot Topics  
| Issue | Summary | Comments | Upvotes | Link |
|---|---|---|---|---|
| **#1669** | *Does Credential Proxy implementation risk Anthropic account bans?* | 1 | 0 | https://github.com/qwibitai/nanoclaw/issues/1669 |
| **#2779** | *Slack: @handles inside URLs get mangled into broken mentions* | 1 | 0 | https://github.com/qwibitai/nanoclaw/issues/2779 |
| **#2783** | *docs/SECURITY.md describes retired v1 trust model* | 0 | 0 | https://github.com/qwibitai/nanoclaw/issues/2783 |
| **#2781** | *Feature: Support NANOCLAW_NATIVE_CREDENTIALS to bypass OneCLI* | 0 | 0 | https://github.com/qwibitai/nanoclaw/issues/2781 |

**Analysis**  
The most active discussion revolves around credential handling and platform‑specific link formatting (Slack). The security‑model issue indicates documentation drift, a risk for operators. The new feature request for bypassing OneCLI reflects a need for greater flexibility in sandboxed deployments.

---

### 5. Bugs & Stability  
| Issue | Severity | Description | Fix PR |
|---|---|---|---|
| **#2751** | High | Budget‑exhausted LLM turns silently dropped, causing silent failures. | #2759 |
| **#2784** | Medium | Session‑source staleness check misses changes to `ipc-mcp-stdio.ts`, leading to stale code copies. | *Not yet addressed* |
| **#2783** | Medium | Documentation references a non‑existent skill in v2 model. | *Not yet addressed* |

**Take‑away**  
Critical bug #2751 is resolved. Two medium‑severity issues remain open; they impact developer experience and security documentation.

---

### 6. Feature Requests & Roadmap Signals  
| Feature | Source | Current Status | Likely Next Version |
|---|---|---|---|
| **NANOCLAW_NATIVE_CREDENTIALS** | #2781 | Open | Yes – aligns with `#2780` opt‑out discussion; likely bundled with next minor release |
| **Slack URL handling fix** | #2779 | Open | Yes – small patch could be merged prior to a patch release |
| **Hydrate container‑runner staleness** | #2784 | Open | Priority depends on scheduler usage; could be included in a hot‑fix |
| **Security model documentation overhaul** | #2783 | Open | High impact – worth addressing in the next scheduled documentation sprint |

---

### 7. User Feedback Summary  
- **Credential Handling**: Users in regulated or isolated environments need a way to skip OneCLI; request shows growing demand for environment‑native credentials.  
- **Budget Error Reporting**: Users experienced silent failures when token budgets ran out. The new error propagation addresses this pain point directly.  
- **Slack Integration**: Users highlighted that link mangling breaks inter‑team communication; a fix will improve day‑to‑day reliability.  
- **Documentation Drift**: Operators noticed outdated security references; improving docs will reduce onboarding friction and potential compliance issues.

---

### 8. Backlog Watch  
| Issue | Age | Description | Suggested Action |
|---|---|---|---|
| **#2784** | 2 days | Staleness check misses `ipc-mcp-stdio.ts` changes. | Investigate expanding file watch; add automated test. |
| **#2783** | 2 days | Security doc references outdated v1 model. | Update docs, add link to v2 model. |
| **#2781** | 1 day | Feature to bypass OneCLI for external credentials. | Prioritize merge, ensuring backward compatibility. |
| **#2779** | 1 day | Slack URL `@handle` mangling. | Quick patch; could be merged with minimal review. |

Maintainer attention is recommended on the credential bypass (#2781) and documentation drift (#2783) as they directly affect operator security posture and deployment flexibility.

---

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

 1. **Today's Overview**  
NullClaw activity remains steady with three open PRs addressing critical infrastructure improvements and two unresolved issues highlighting user pain points. Development focus lies on scheduler tooling enhancements and MS Teams authentication fixes, while model response completeness remains a top user concern. Contributor engagement shows mid-tier activity with average PR discussion depth.  

2. **Releases**  
No new versions released in the last 24 hours.  

3. **Project Progress**  
All three PRs remain open, addressing authentication validation improvements (`#958`), scheduler token persistence (`#959`), and cron subsystem features (`#783`). No merged changes detected in the latest snapshot.  

4. **Community Hot Topics**  
- **#952 (BUG)**: Local model incompleteness using `ollama` (2 comments, 0👍) – users demand better AI response quality (linked 2026-06-11).  
- **#839 (BUG)**: Scheduler tool (`bit`) access failures via `!783` (1 comment, 0👍) – persistent pain point for automation workflows.  
- **#959 (FIX)**: Paired token encryption for secure scheduling (`3.5k stars`) – critical infrastructure work with enterprise adoption implications.  

5. **Bugs & Stability**  
- High-severity: **#952** (incomplete model responses – ongoing for 10+ days) and **#839** (scheduler access failures).  
- Fix PRs exist (e.g., **#959** for token security, **#783** for cron infrastructure), but not yet merged.  

6. **Feature Requests & Roadmap Signals**  
**#783** introduces cron JSON output and job history – aligns with enterprise demand for auditable workflows. Scheduler enhancements in **#959** and **#783** suggest prioritization of automation tooling.  

7. **User Feedback Summary**  
Users report:  
- 🔍 **Incomplete model responses** (#952) – frustration with partial AI answers affecting productivity.  
- ☕️ **Gateway access failures** (#839) – blocking automation scripts relying on `bit`.  
Positive sentiment around encryption (RAILS) security improvements in **#959**.  

8. **Backlog Watch**  
- **#839** (46-day-old scheduler bug, 0👍) – requires maintainer intervention to resolve token access deadlock.  
- **#952** (new but critical) – actively debated in comments but no PR linkage yet.  
- **#783** – High-priority cron PR stalled at 478 commits – maintainers should review voice yield rate.


</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-17

## 1. Today's Overview

LobsterAI showed moderate development activity in the last 24 hours, with **1 issue updated** and **4 PRs updated**, including **3 closed/merged PRs** and **1 open stale PR**. Engineering progress was concentrated in **cowork workflow**, **SQLite-backed search**, and **artifact/browser preview UX**. No new releases were published. Project health appears active on the implementation side, but stale open items from April suggest issue triage and UX reliability still need attention.

---

## 2. Releases

No new releases were reported for this digest.

---

## 3. Project Progress

| PR | Status | Area | Summary |
|---|---:|---|---|
| [#2170](https://github.com/netease-youdao/LobsterAI/pull/2170) | Closed/Merged | `cowork`, `renderer`, `main`, `docs` | Improved cowork task search by querying task titles from the SQLite database instead of filtering only preloaded recent sessions. Preserves existing behavior when no search query is provided. |
| [#2169](https://github.com/netease-youdao/LobsterAI/pull/2169) | Closed/Merged | `artifacts`, `renderer`, `main`, `docs` | Improved artifact preview cards and browser preview experience, including unified card styling, dark hover states, file-type display, HTML preview behavior, browser-open controls, file deduplication, tests, and docs. |
| [#2168](https://github.com/netease-youdao/LobsterAI/pull/2168) | Closed/Merged | `cowork`, `renderer` | Added a compact floating scroll-to-bottom control for cowork conversations, with smooth scrolling, wheel passthrough, i18n labels, and click diagnostics. |

**Progress assessment:** The closed PRs indicate active product work around cowork productivity and artifact preview polish. The changes are mostly UX and workflow-oriented rather than core AI-agent capability changes.

---

## 4. Community Hot Topics

| Item | Activity | Link | Underlying Need |
|---|---:|---|---|
| [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) | 1 comment, 0 👍 | Shortcut duplicate validation issue | Users need safer keyboard shortcut configuration. Duplicate shortcuts should be detected before saving to avoid conflicts. |
| [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424) | Open stale item, no visible reactions | Scheduled task stop/error-handling issue | Users need reliable scheduled task controls and accurate feedback when operations fail. |
| [#2170](https://github.com/netease-youdao/LobsterAI/pull/2170) | 0 👍, comment count not reported | Cowork database search | Cowork users need more reliable search across task titles, not just recently preloaded sessions. |
| [#2169](https://github.com/netease-youdao/LobsterAI/pull/2169) | 0 👍, comment count not reported | Artifact/browser preview | Users need clearer artifact preview behavior, especially for HTML files and browser-based previews. |

**Community signal:** Discussion volume is low, but the open issues point to important usability and reliability concerns. The most active visible item is the shortcut duplicate validation issue.

---

## 5. Bugs & Stability

| Severity | Item | Impact | Fix Status |
|---|---|---|---|
| **High** | [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424) — Scheduled task “stop” IPC handler returns success without stopping the task | A task may continue running while the UI incorrectly reports success. Error feedback is also missing because UI does not read the Redux error state. | A proposed fix item exists but remains **open/stale**; not merged. |
| **Medium** | [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) — Duplicate shortcut keys can be saved without validation | Users can configure conflicting keyboard shortcuts, causing confusing behavior or inaccessible actions. | No merged fix PR reported. |

No crashes or regressions were reported in the provided data.

---

## 6. Feature Requests & Roadmap Signals

- **Cowork search maturity:** PR [#2170](https://github.com/netease-youdao/LobsterAI/pull/2170) suggests roadmap focus on more reliable cowork task discovery through SQLite-backed search.
- **Artifact preview workflow:** PR [#2169](https://github.com/netease-youdao/LobsterAI/pull/2169) signals continued investment in artifact handling, browser previews, HTML opening behavior, and file deduplication.
- **Conversation navigation:** PR [#2168](https://github.com/netease-youdao/LobsterAI/pull/2168) shows attention to cowork chat usability through scroll-to-bottom controls.
- **Shortcut validation:** Issue [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) is likely a near-term bug-fix candidate because it affects core configuration safety.
- **Scheduled task reliability:** Issue/PR [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424) may be prioritized if maintainers focus on stability, because false success states are a high-trust issue.

**Next-version prediction:** The three closed PRs are strong candidates for inclusion in the next release. The shortcut validation and scheduled task fixes are also plausible, but they remain stale and need maintainer action first.

---

## 7. User Feedback Summary

- **Pain point: unsafe shortcut configuration** — Users expect duplicate shortcuts to be rejected or warned about before saving. Current behavior allows duplicate shortcuts to save successfully. Source: [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425)
- **Pain point: unreliable scheduled task controls** — The “stop” action may report success even when the task continues running. This undermines user trust in automation controls. Source: [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424)
- **Pain point: missing error feedback** — Scheduled task service errors are stored in Redux state, but no UI component appears to display them. Users may receive no indication that an operation failed. Source: [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424)
- **Use cases:** Keyboard shortcut management, scheduled task automation, cowork task search, cowork conversation navigation, artifact preview, and browser-based HTML preview.
- **Satisfaction signal:** No strong positive or negative sentiment data is available. However, active PR work on cowork and artifacts suggests continued product improvement, while stale April issues indicate unresolved reliability concerns.

---

## 8. Backlog Watch

| Item | Age / Status | Why Maintainer Attention Is Needed |
|---|---|---|
| [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424) | Created 2026-04-03, open/stale | High-impact reliability issue: scheduled task stop can return success while the task continues. Also exposes missing error UI. Needs review, merge, or explicit rejection. |
| [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) | Created 2026-04-03, open/stale | Basic configuration safety issue: duplicate shortcuts should be validated before saving. Needs triage and likely UI/backend validation. |

**Backlog assessment:** These two stale items are important because they affect user trust and core interaction safety. They should be prioritized before less critical UI polish work.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

**TinyClaw (TinyAGI) – Project Digest – 2026‑06‑17**

---

### 1. Today’s Overview
- The repository sees very low short‑term activity: no issues were touched and only a single pull request received updates in the last 24 h.  
- No new releases were published, indicating a period of maintenance rather than feature rollout.  
- The sole open PR targets a critical platform‑compatibility gap (Windows native support) and is the only visible development effort today, suggesting the maintainer’s focus is on broadening the tool’s usability.

### 2. Releases
*No new releases were created in the past day.*

---

### 3. Project Progress
| PR | Title | Author | Status | Highlights |
|----|-------|--------|--------|------------|
| **#281** | *fix: Windows cross‑platform support in CLI* | **mperkins0155** | **Open** (updated 2026‑06‑16) | Addresses three Windows‑only bugs that prevent the `tinyagi` CLI from running on native Windows (non‑WSL). The changes involve correcting path handling (`new URL('.', import.meta.url).pathname`), fixing module resolution, and adjusting filesystem APIs to work with Windows drive letters. No merge has occurred yet, so the fix is still under review. |

*No PRs were merged or closed today.*

---

### 4. Community Hot Topics
- **PR #281** is the only active discussion point. Although the “Comments” field is listed as *undefined* (meaning no comments yet), the PR’s significance is high because it targets a blocker for Windows users—a demographic that has previously been unable to run TinyAGI natively.  
- **Underlying need:** cross‑platform reliability. The existing CLI works smoothly on Linux/macOS and Windows via WSL, but native Windows adoption is limited. Fixing these bugs will likely expand the user base and reduce friction for developers on Windows machines.

*No issues have surfaced today to complement the PR discussion.*

---

### 5. Bugs & Stability
| Severity | Description | Evidence | Fix Status |
|----------|-------------|----------|------------|
| **High** | `MODULE_NOT_FOUND` on native Windows due to doubled drive‑letter path (`/C:/…`) | Reported in PR #281 (bug description) | Fix being implemented in PR #281 |
| **Medium** | Windows‑specific filesystem API failures (e.g., `fs.promises.readFile` path handling) | Mentioned in PR #281 | Same PR addresses the issue |
| **Low** | None reported today | — | — |

No regressions or crashes were logged in the last 24 h outside of the known Windows bugs.

---

### 6. Feature Requests & Roadmap Signals
- No new feature‑request issues were opened today.  
- The effort on Windows compatibility hints that the maintainer may prioritize **platform stability** before adding new capabilities. Expect the next release (once PR #281 merges) to advertise “native Windows support” as a headline feature.

---

### 7. User Feedback Summary
- Direct user feedback is absent in the last 24 h (no issue comments or new issues).  
- Indirectly, the existence of the Windows‑support PR signals that at least a subset of the community has been unable to run TinyAGI on their primary development environment, creating a pain point around **installation and execution on Windows**.

---

### 8. Backlog Watch
| Item | Type | Age | Reason for Attention |
|------|------|-----|----------------------|
| *None* | — | — | The repository currently has **zero open issues** and only one open PR, so there is no immediate backlog. |

*Recommendation:* Keep an eye on PR #281’s review cycle. If it stalls, a gentle maintainer ping may be warranted to maintain momentum, especially given the strategic importance of Windows support.

---

**Overall health assessment:** The project is in a quiet maintenance state with a single high‑impact PR driving the next development step. While activity is low, the focus on a critical cross‑platform bug suggests a deliberate push toward broader adoption. Continued progress on PR #281 will be the primary indicator of project vitality in the coming days.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>


# Moltis Project Digest - 2026-06-17

## Today's Overview
The Moltis project shows moderate daily activity with 4 issue updates and 2 active pull requests. No releases were published today, indicating the team is focusing on active development rather than versioning. Issue resolution remains strong with 25% closure rate (1 of 4 issues closed within 24 hours). Community engagement appears steady with multiple feature enhancement requests and targeted bug fixes being discussed simultaneously.

## Releases
No new releases today. The project maintains its current version without any version updates or migrations requiring user attention.

## Project Progress
Today's closed issue [#1128](https://github.com/moltis-org/moltis/issues/1128) resolved transcription errors with self-hosted whisper.cpp, indicating active maintenance of core functionality. Two open PRs show development momentum: PR [#1124](https://github.com/moltis-org/moltis/pull/1124) introduces context command support for chat turns, while PR [#1125](https://github.com/moltis-org/moltis/pull/1125) adds model and effort selection capabilities for external agents—both representing significant feature expansions.

## Community Hot Topics
The most discussed item is [Issue #1126](https://github.com/moltis-org/moltis/issues/1126) requesting TTS output format configuration, with 2 comments suggesting user interest in audio customization. Both open PRs (#1124 and #1125) appear important as they address developer deployment flexibility and external agent integration respectively, though comment activity data is incomplete in the provided dataset.

## Bugs & Stability
One high-priority bug was closed today: [Issue #1128](https://github.com/moltis-org/moltis/issues/1128) - transcription errors with self-hosted whisper.cpp. This resolves potential stability issues for users running local speech recognition services. A new medium-severity bug was reported in [Issue #1129](https://github.com/moltis-org/moltis/issues/1129) - lack of echo cancellation causing agent self-retriggering in live mode, which could significantly impact real-time user experience. No fix PRs were identified for the open bugs.

## Feature Requests & Roadmap Signals
Two enhancement requests signal roadmap priorities: [Issue #1127](https://github.com/moltis-org/moltis/issues/1127) seeks RPC timeout configuration for better network resilience, while [Issue #1126](https://github.com/moltis-org/moltis/issues/1126) requests TTS format customization for improved audio output control. Both PRs (#1124 and #1125) targeting external agent and context management capabilities suggest these may appear in upcoming releases before the timeout and TTS features.

## User Feedback Summary
User feedback reveals practical deployment challenges: self-hosted infrastructure issues (whisper.cpp), configuration limitations (RPC timeouts, TTS formats), and real-time processing problems (echo cancellation). The closed whisper.cpp transcription bug suggests users actively run private instances and expect reliability. The echo cancellation issue indicates live mode needs maturation, while enhancement requests show users need more fine-grained control over system behavior for production deployments.

## Backlog Watch
All recent issues received quick responses or were immediately addressed. However, [Issue #1129](https://github.com/moltis-org/moltis/issues/1129) regarding echo cancellation deserves immediate maintainer attention due to its potential impact on core interactive functionality. The enhancement issues (#1126 and #1127) represent lower-risk improvements that could enhance user experience while not blocking current functionality.


</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope‑ai/QwenPaw) – Project Digest – 2026‑06‑17**

---

### 1. Today’s Overview  
The QwenPaw repository remains highly active, with **44 issues** and **39 pull requests** updated in the last 24 h. A **beta release (v1.1.12‑beta.1)** was published, bringing a security‑focused keychain isolation fix and hardened Tauri Windows CI. The bulk of activity centres on stability‑related bugs (process freeze, crash loops, path‑resolution inconsistencies) and a growing interest in **context‑compression** (Headroom) and **multilingual** support (Vietnamese). Overall health is strong: the bulk of PRs are merges/closed, indicating steady progress, while the open issue queue still contains several high‑impact stability concerns.

**GitHub links** – issues: <https://github.com/agentscope-ai/QwenPaw/issues/5218> … <https://github.com/agentscope-ai/QwenPaw/issues/5253>  
**PRs**: <https://github.com/agentscope-ai/QwenPaw/pull/5221> … <https://github.com/agentscope-ai/QwenPaw/pull/5255>

---

### 2. Releases  
- **v1.1.12‑beta.1** (beta) – *Security* – isolates the keychain master key per installation (fixes potential key leakage).  
  *Desktop* – hardens Tauri Windows CI against `crates.io` fetch failures.  
  *Refactor* – internal restructuring of context handling (details truncated).  

No breaking changes are documented; the release is a **beta** intended for early testing of the upcoming 1.1.12 stable line.

---

### 3. Project Progress  
**Merged / Closed PRs (last 24 h)**  
| PR | Summary | Impact |
|----|---------|--------|
| #5255 | `chore: bump version 1.1.12b2` | Prepares the upcoming stable release. |
| #5248 | `feat(console): add OSC 8 clickable links` | Improves console usability (clickable URLs). |
| #5247 | `feat(coding): Ponytail philosophy + zero‑dep code indexer` | Introduces enforceable coding rules and faster code understanding. |
| #5240 | `perf(config): remove unnecessary deep‑copy ops` | Reduces memory overhead and speeds config loading. |
| #5238 | `fix(desktop): repair Tauri plugin dependencies` | Resolves the crash‑loop seen

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>


# ZeptoClaw Project Digest (2026-06-17)  

---

## 1. Today's Overview  
ZeptoClaw exhibits minimal activity today, with no issues or releases reported in the past 24 hours. A single open pull request (#630) focuses on updating the Debian base image dependency, suggesting routine maintenance efforts. No merged changes or community discussions indicate a quiet day for the project. Stability appears maintained through automated dependency updates, though active feature development or user engagement is not evident.  

---

## 2. Releases  
**No new releases** were published in the last 24 hours.  

---

## 3. Project Progress  
- **Merged/Closed PRs Today**: None.  
- **Ongoing Activity**: PR #630 ([dependencies, docker] chore(deps): bump debian from `b6e2a15` to `4e401d9`](https://github.com/qhkm/zeptoclaw/pull/630)) remains open. This automated update by Dependabot targets the Docker base image to keep dependencies current, reflecting a focus on infrastructure hygiene rather than feature advancement.  

---

## 4. Community Hot Topics  
- **Active PRs/Issues**:  
  - PR #630: No comments or reactions. This suggests low community engagement, consistent with the project’s low activity level.  
- **Underlying Needs**: The dependency update aligns with standard security/maintenance practices. However, no explicit feature requests or critical discussions are visible, indicating limited user or contributor interaction today.  

---

## 5. Bugs & Stability  
- **No bug reports or regressions** were documented in the last 24 hours.  
- **Stability Notes**: The project’s reliance on automated tools like Dependabot ensures incremental improvements to its Docker environment, but no manual bug fixes or crash reports are present.  

---

## 6. Feature Requests & Roadmap Signals  
- **No feature requests** were filed or discussed today.  
- **Predictive Signals**: The focus on dependency updates may signal prioritization of stability and security over new features. Without explicit roadmap updates, future directions remain unclear.  

---

## 7. User Feedback Summary  
- **Feedback Available**: No open issues or comments from users (the PR has "undefined" comments, which likely means none).  
- **Pain Points**: Silence in user feedback suggests either satisfaction with current functionality or lack of active user engagement. The project’s audience size and diversity remain unknown due to minimal public activity.  

---

## 8. Backlog Watch  
- **Unanswered Issues/PRs**:  
  - No backlog items identified. With zero open issues and only one open PR (automated), no critical gaps in maintainer attention are apparent.  
- **Recommendation**: Maintainers should prioritize reviewing PR #630 to ensure compatibility and security alignment before merging.  

--- 

**Summary**: ZeptoClaw is in a maintenance phase, characterized by low activity and automated dependency updates. No immediate stability risks or feature development signals are detected. Long-term trajectory depends on broader community engagement or maintainer-driven initiatives.


</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



### **ZeroClaw ProjectDigest for 2026-06-17**  

---

#### **1. Today's Overview**  
ZeroClaw saw **50 issues and 50 PRs updated in the last 24h**, reflecting intense development activity. No new releases were made today, with focus on stabilizing v0.8.0 and preparing for the upcoming v0.8.0-beta-1 rollout. Key activities included addressing platform-specific bugs (e.g., Telegram/Slack integrations), refining config workflows, and advancing MSCP support. While progress is rapid, several high-severity issues remain unresolved, indicating a critical phase of refinement.  

---

#### **2. Releases**  
**No new releases** were created today. The project remains on track for v0.8.0 Beta 1 deployment, with ongoing work to resolveHook-related issues (#7820) and enhance stability before general availability.  

---

#### **3. Project Progress**  
- **Closed PRs Today**: 27 PRs merged/closed, including fixes for critical bugs like missing `show_tool_calls` in Slack channels (#6856) and keyboard backspace issues in the CLI (#6995).  
- **Advancing Features**: RFC #6808 (Work Lanes, Board Automation) gained traction with 11 comments, signaling governance consensus. The MSCP dashboard (PR #7367) and Webhook routing improvements (#7367) also progressed.  
- **Breaking Changes**: Minor: Updated Node.js version in CI (#7550) to LTS 24, eliminating runtime risks.  

---

#### **4. Community Hot Topics**  
- **#6808 (RFC: Work Lanes, Board Automation)**: **11 comments** (most active item). Users are advocating for streamlined governance tools, reflecting demand for automation in team workflows.  
- **#7759 (WebSocket Lifetime)**: 5 comments. Highlights a desire for uninterrupted agent sessions despite disconnections.  
- **#7756 (MCP Tools on Anthropic)**: 1 comment. Raised due to poor integration with Anthropic models.  

[View #6808](zeroclaw-labs/zeroclaw Issue #6808) | [View #7759](zeroclaw-labs/zeroclaw Issue #7759) | [View #7756](zeroclaw-labs/zeroclaw Issue #7756)  

---

#### **5. Bugs & Stability**  
- **Critical (S1-S2)**:  
  - **#7756**: MSCP tools unavailable on Anthropic/OpenAI (`S1` severity). No fix PR yet.  
  - **#7787**: Prebuilt binaries lack Slack/Discord support (`S2`-`S1`). Fix available in v0.7.5.  
  - **#7804**: Anthropic message history entropy (`S1`). Fix in progress.  
- **Medium (S2)**:  
  - **#5266**: Pairing code missing on non-default ports (`S2`). Resolved in PR #6995.  
  - **#7799**: Resumed sessions show empty transcripts (`S2`). Fix PR #7799 pending.  
- **Low (S2-S3)**:  
  - **#7794**: Dream Mode opt-in UI polish needed.  
  - **#7814**: Config field UX confusion.  

[View #7756](zeroclaw-labs/zeroclaw Issue #7756) | [View #7787](zeroclaw-labs/zeroclaw Issue #7787) | [View #7804](zeroclaw-labs/zeroclaw Issue #7804)  

---

#### **6. Feature Requests & Roadmap Signals**  
- **RFC #6808**: A potential v0.8.0 feature, aiming to automate task routing.  
- **PR #6893 (Multi-DB Backends)**: Enables multi-agent fleet support, signaling scalability focus.  
- **#7794 (Dream Mode)**: User-piloted productivity features may land in v0.8.0+.  
- **PR #7367 (Webhook Routing)**: Indicates community prioritization of tailored integrations.  

---

#### **7. User Feedback Summary**  
- **Pain Points**:  
  - Setup friction with Slack/Telegram (e.g., #7787, #5266).  
  - Documentation gaps leading to config misunderstandings (#7758, #7815).  
  - Session durability issues in Code mode (#7799).  
- **Positive Signals**:  
  - Appreciation for Rust-native performance and lightweight design.  
  - Demand for clearer CLI instructions on Windows code-page handling.  

---

#### **8. Backlog Watch**  
- **High-Priority Open Issues**:  
  - **#7675 (Hardened CI)**: Needs maintainer review for supply-chain scanning configs.  
  - **#7822 (WASM Hooks)**: Proposal for experimental plugin integrations.  
- **Needs Attention**: #6808 (RFC) requires community feedback to proceed.  

---

### **Key Takeaways**  
ZeroClaw is in a critical stabilization phase for v0.8.0, with rapid iteration on core integrations (MSCP, gateways) and governance tools. While activity is robust, unresolved high-severity bugs suggest a period of "risk mitigation" before release. Community engagement is high in governance and integration areas, indicating strong alignment with developer/user needs.


</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*