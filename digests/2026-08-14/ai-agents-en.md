# OpenClaw Ecosystem Digest 2026-08-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-14 01:07 UTC

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

# OpenClaw Project Digest — 2026-08-14

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours — a volume suggesting either a major triage effort, automated bot activity, or a pre-release stabilization push. The ratio of open to closed (337:163 issues, 384:116 PRs) indicates more work entering than leaving the system. No new release was published today. The issue landscape is dominated by **session-state reliability**, **message delivery failures**, **subagent orchestration bugs**, and **multi-agent concurrency problems** — many marked P1 with "diamond lobster" () or "silver shellfish" () severity ratings. PR activity focuses on UI fixes, gateway stability, and Slack/Feishu channel improvements.

---

## 2. Releases

**No new releases today.** The latest releases section is empty.

---

## 3. Project Progress (Merged/Closed PRs Today)

From the 116 merged/closed PRs, notable completions include:

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#123404](https://github.com/openclaw/openclaw/pull/123404) | `[BACKPORT] fix(slack): apply updated global settings without stale monitor state` | Slack / Gateway | **CLOSED** |
| [#123395](https://github.com/openclaw/openclaw/pull/123395) | `fix(tui): avoid duplicate live assistant replies` | TUI | **CLOSED** |
| [#123391](https://github.com/openclaw/openclaw/pull/123391) | `fix(agents): prevent duplicate final replies in CLI sessions` | Agents / CLI | **CLOSED** |
| [#123157](https://github.com/openclaw/openclaw/pull/123157) | `feat(gateway): launch workers on paired nodes` | Gateway / Workers | **CLOSED** |
| [#119835](https://github.com/openclaw/openclaw/pull/119835) | `fix(codex): preserve quiet native tool results` | Codex Integration | **CLOSED** |
| [#105342](https://github.com/openclaw/openclaw/issues/105342) | All exec command outputs rendered as images instead of text | Telegram / UX | **CLOSED** |
| [#91456](https://github.com/openclaw/openclaw/issues/91456) | Telegram DM lane guarded after send timeout | Telegram / Messaging | **CLOSED** |
| [#85714](https://github.com/openclaw/openclaw/issues/85714) | Agent's final message stranded when LLM forgets delivery tool | Session / Delivery | **CLOSED** |
| [#42273](https://github.com/openclaw/openclaw/issues/42273) | Backup create stalls on large installations (4GB+) | Backup / Data | **CLOSED** |
| [#44431](https://github.com/openclaw/openclaw/issues/44431) | Browser tool: 7 improvements from field test | Browser Tool | **CLOSED** |

**Theme:** Fixes cluster around **message delivery reliability** (duplicate replies, stranded messages, DM lane guards), **gateway worker infrastructure**, and **channel-specific bugs** (Slack, Telegram, Feishu).

---

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top 5 Issues by Comment Count

| Issue | Comments |  | Area | Core Problem |
|-------|----------|-----|------|--------------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 92 | 0 | **Message Delivery** | Silent reply failures recur after #116277 closed — monitoring cron still logs new occurrences |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 48 | 0 | **Security / Memory** | Memory Trust Tagging by Source — prevent memory poisoning from untrusted content (web, 3rd-party) |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 48 | 1 | **UX / Messaging** | Text between tool calls leaks to messaging channels (Slack, iMessage) as visible messages |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 27 | 2 | **Subagents / Reliability** | Subagent completion silently lost — no retry, notification, or auto-restart on timeout |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | 16 | 0 | **Cron / Models** | Cron agent turns stall on DeepSeek due to `[cron:...]` prefix being deprioritized by API edge |

### Top PRs by Activity (all updated today)
- [#97175](https://github.com/openclaw/openclaw/pull/97175): `fix(context-engine): keep background maintenance from blocking new messages` — **P1, XL, needs proof**
- [#123264](https://github.com/openclaw/openclaw/pull/123264): `feat(ui): separate channel conversations in sidebar` — **Web UI, ready for maintainer**
- [#123402](https://github.com/openclaw/openclaw/pull/123402): `feat(anthropic): opt-in server-side compaction (compact-2026-01-12)` — **Gateway, Anthropic, XL**
- [#123347](https://github.com/openclaw/openclaw/pull/123347): `refactor(i18n): re-key native i18n artifacts to content-hash identity` — **Mobile/Web, XL, automation risk**

**Underlying Needs:** Users are screaming for **reliable message delivery** (silent failures, duplicates, lost subagent results), **memory security** (trust tagging), and **multi-agent stability**. The DeepSeek cron stall (#121953) reveals model-specific integration fragility.

---

## 5. Bugs & Stability (Ranked by Severity)

###  Critical (P1,  Diamond Lobster /  Silver Shellfish)

| Issue | Severity | Status | Fix PR? | Summary |
|-------|----------|--------|---------|---------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | P1,  | **OPEN** | No | Silent reply failures persist post-fix; monitoring shows ongoing occurrences |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | P1,  | **OPEN** | Linked PR open | Inter-tool-call text leaks to user-facing channels (Slack, iMessage) |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | P1,  | **OPEN** | No | Subagent completions silently lost — no retry/notification/auto-restart |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | P1,  | **OPEN** | Linked PR open | Multi-agent orchestration unstable: config overwrites, session-lock failures, detached children |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | P1,  | **OPEN** | No | Subagent completion delivery lost on timeout/drain/orphan prune |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | P1,  | **OPEN** | No | Subagent sessions persist after completion; main session becomes unresponsive |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | P1,  | **OPEN** | No | Isolated cron jobs consistently fail "LLM request failed" at model-call-started |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | P1,  | **OPEN** | No | `active-memory` plugin blocks replies; QMD boot overloads multi-agent gateways |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | P1,  | **OPEN** | No | iOS/WebChat messages append to transcript but don't trigger/deliver replies |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | P1,  | **OPEN** | No | Subagent completion dropped when announce steers into requester run that ends early |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | P1,  | **OPEN** | Linked PR open | Codex OAuth refresh succeeds but cron/heartbeat fail with 10s auth timeout |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | P1,  | **OPEN** | No | Main agent blocked by workspace-state migration after Anthropic auth recovery |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1,  | **OPEN** | No | Unreaped hook/tool child processes → zombie accumulation & runtime degradation |
| [#95553](https://github.com/openclaw/openclaw/issues/95553) | P1,  | **OPEN** | No | Preflight compaction hard-capped at ~60s, ignores `compaction.timeoutSeconds` |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | P1,  | **OPEN** | Linked PR open | Telegram DMs still land in `agent:main:main` polluting heartbeat after #40519 |
| [#43374](https://github.com/openclaw/openclaw/issues/43374) | P1,  | **OPEN** | No | All LLM API calls timeout simultaneously under multi-agent concurrency (not provider issue) |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | P1,  | **OPEN** | No | Dev-channel update fails: `EUNSUPPORTEDPROTOCOL` on `workspace:*` (npm vs pnpm) |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | P1,  | **OPEN** | No | Followup drain monopolizes session lane 20-30min, blocks inbound dispatch |
| [#44502](https://github.com/openclaw/openclaw/issues/44502) | P2,  | **OPEN** | No | Discord routing/mention-gating regression — over-permissive preflight logic |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) | P1,  | **OPEN** | No | Heartbeat drift fix (PR #39182) causes aggressive retry blocking Telegram during conversations |

###  High (P2, Regressions)
- [#77733](https://github.com/openclaw/openclaw/issues/77733): Bare `/new` and `/reset` no longer trigger persona greeting (regression in 2026.5.3)
- [#107814](https://github.com/openclaw/openclaw/issues/107814): `gpt-5.3-codex-spark` emits empty arguments for required tool calls
- [#78493](https://github.com/openclaw/openclaw/issues/78493): `sudo openclaw update` creates mixed ownership → `doctor` overwrites config after EACCES

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Area | Signal |
|-------|----------|------|--------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | P2 | **Security / Memory** | Memory Trust Tagging by Source — 48 comments, needs security review. Strong demand for memory poisoning prevention. |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | P3 | **Config** | YAML config support — 8 comments, readability argument for DevOps alignment. |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) | P2 | **Cost Tracking** | Expose OpenRouter usage cost to agent runtime — 8 comments, per-message cost append. |
| [#45771](https://github.com/openclaw/openclaw/issues/45771) | P2 | **Rate Limiting** | Built-in pace-aware rate limiting for autonomous agents — 7 comments, track consumption pace. |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | P2 | **Voice / WebChat** | Self-hosted STT/TTS provider support in webchat — 7 comments, bypass browser Speech API. |
| [#41366](https://github.com/openclaw/openclaw/issues/41366) | P3 | **Memory / Rules** | Durable natural-language rule learning + explicit multi-mention reply semantics — 7 comments. |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) | P1 | **Delivery Queue** | TTL/Expiry for delivery queue messages — 6 comments, prevent stale floods on restart. |
| [#45501](https://github.com/openclaw/openclaw/issues/45501) | P2 | **Session UX** | `session.resetPrompt` — configurable session startup message — 6 comments. |
| [#46058](https://github.com/openclaw/openclaw/issues/46058) | P3 | **Mobile** | Chat-first Android surface discussion — 6 comments, focused upstreaming exploration. |
| [#42276](https://github.com/openclaw/openclaw/issues/42276) | P3 | **UX / Streaming** | Reasoning stream — overwrite lines like OpenAI/Grok to show thinking process — 6 comments. |

**Prediction:** Next version will likely include **memory trust tagging** (security-critical), **delivery queue TTL** (reliability), **YAML config** (low-risk DX), and **server-side Anthropic compaction** (already in PR #123402).

---

## 7. User Feedback Summary (Pain Points & Use Cases)

###  Top Pain Points (from issue narratives)
1. **Silent message loss** — "Monitoring cron continues to log new occurrences" (#121058); subagent results vanish without retry/notification (#44925, #67777, #47975, #92433)
2. **Multi-agent instability** — Config overwrites, session-lock failures, detached children (#43367); all LLM calls timeout simultaneously under concurrency (#43374)
3. **Channel pollution** — Internal processing text leaks to Slack/iMessage (#25592); Telegram DMs land in main session (#41165); exec outputs render as images not text (#105342)
4. **Model-specific integration bugs** — DeepSeek cron stall due to prefix deprioritization (#121953); Codex OAuth timeout mismatch (#89278); gpt-5.3-codex-spark empty args (#107814)
5. **Zombie processes & resource leaks** — Unreaped hook/tool children accumulate (#97616); SQLite memory tables unbounded growth (#114612)
6. **Upgrade/recovery fragility** — `sudo update` mixed ownership → config overwrite (#78493); schema downgrade wipes cron jobs (#115421); dev-channel npm/pnpm conflict (#123073)

###  Positive Signals
- Active community filing detailed repros

---

## Cross-Ecosystem Comparison

# AI Agent & Personal Assistant Open-Source Ecosystem — 2026-08-14 Cross-Project Analysis

### 1. Ecosystem Overview
The personal AI assistant open-source landscape in mid‑August 2026 comprises fourteen active projects spanning gateway infrastructure, multi‑agent orchestration, UI/UX runtimes, and security‑hardened deployment platforms. Activity is polarized: a few projects (OpenClaw, CoPaw, IronClaw) drive extreme daily volume (hundreds of issues/PRs) during pre‑release stabilization or major architectural epochs, while most operate at moderate scale focused on incremental bug fixes, security patches, and feature refinement. Cross‑project commonality centers on message‑delivery reliability, multi‑agent concurrency fragility, trust‑tagging for memory and API access, and cron/session persistence—indicating that reliability and trust are the current rate‑limiting factors for autonomous agent deployment, outweighing raw capability expansion.

### 2. Activity Comparison
| Project | 24h Issues | 24h PRs | Release Status | Health Score* |
|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | No new release | Critical (P1‑dominated: message delivery, subagent orchestration, concurrency) |
| **IronClaw** | 50 | 50 | v1.2.0 (2026‑08‑13) | High (epic #7482 kernel rewrite; stable release with curl healthcheck fix) |
| **CoPaw (QwenPaw)** | 42 | 50 | v2.1.0 / beta.5 | High (critical unauthenticated API #6992/6993; active beta/feature cycle) |
| **Hermes Agent** | 50 | 50 | v0.20.1 (2026‑08‑13) | High (tool‑call corruption #81639; release consolidates 656 PRs) |
| **ZeroClaw** | 50 | 50 | No release (weekly/monthly cadence) | Medium‑High (R

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest - August 14, 2026

## Today's Overview
The NanoBot project shows significant activity with 12 issues and 31 pull requests updated in the past 24 hours. Critical stability fixes are in progress, particularly around cron scheduler persistence failures and session management. The project is actively addressing long-standing issues in Matrix integration, Telegram support, and WebUI functionality while maintaining focus on security and reliability improvements.

## Releases
No new releases available today. The project continues its regular development cycle with frequent bug fixes and feature enhancements.

## Project Progress
Today's merged/closed PRs focus heavily on stability and user experience:
- **Critical System Fixes**: Multiple PRs (#5376, #5374, #5375) address the cron scheduler persistence failure that could permanently kill the scheduler after single job-store errors
- **Session Management**: Improvements to session serialization (#5383), state restoration (#5380), and memory preservation (#5379) 
- **WebUI Enhancements**: Folder picker (#5381), transcript history restoration (#5384), and session collaboration features (#5358)
- **Integration Expansions**: Telegram sticker support (#5387), MCP Apps metadata preservation (#5386), and Matrix SAS verification completion (#5385)

## Community Hot Topics
**Most Active Discussion: Issue #5373** - "Cron scheduler dies permanently after a single job-store persistence failure"
- **Root Cause**: Single persistence failure in `CronService._on_timer` causes permanent scheduler death due to `_arm_timer()` being outside `try/finally` block
- **Impact**: Silent system failure affecting uptime and reliability
- **Community Response**: Multiple fix attempts (#5376, #5374, #5375) indicate high priority for this critical bug

**Key Enhancement Requests**: 
- **Issue #5298**: Budget model-visible MCP schemas for large tool sets - addressing context cost concerns
- **Issue #5251**: MCP Apps host support for WebUI - expanding MCP integration capabilities

## Bugs & Stability
**Critical Issues (High Priority)**:
1. **#5373** - Cron scheduler permanent death from persistence failures (multiple fix PRs exist)
2. **#5306** - `exec.allowPatterns` shell-chain bypass security vulnerability (closed - resolved)
3. **#4841** - Matrix bot device shows as 'untrusted' in Element (open, 1 comment)

**Medium Priority**:
- **#5378** - File-cap archive failure mutates session before persistence
- **#5377** - Consolidation truncates archive input but advances past full message batch
- **#5382** - Windows PermissionError during `os.replace()` in heartbeat cron job

## Feature Requests & Roadmap Signals
**Emerging Trends**:
- **Memory Integration**: ViBo memory system proposal (#5372) indicates user demand for persistent agent memory
- **Provider Expansion**: QwenCloud support alongside existing DashScope (#5350)
- **Localization**: WebUI agent activity text localization (#5366) shows international user base growth

**Next Version Candidates**:
- Budget model-visible MCP schemas (Issue #5298, PR #5388)
- Native workspace folder picker (PR #5381, closed)
- Session collaboration via mentions (PR #5358)

## User Feedback Summary
Users are experiencing frustration with:
- **Reliability**: Cron scheduler failures causing silent system deaths
- **Integration Pain Points**: Matrix bot trust issues preventing seamless deployment
- **UI/UX**: Conflicting copy/fork actions during agent turns (Issue #5368)
- **Memory Management**: Loss of agent memory across sessions

Positive feedback is evident in the rapid fix response times and multiple PR submissions addressing core stability issues.

## Backlog Watch
**Issues Requiring Immediate Attention**:
1. **Issue #5373** - Cron scheduler persistence failure - critical uptime issue
2. **Issue #4841** - Matrix bot trust verification - blocking enterprise adoption
3. **Issue #5372** - Agent memory system - growing feature request

**High-Impact PRs Needing Review**:
- **#5358** - Session collaboration via mentions (conflict PR)
- **#5376** - Cron scheduler stability fix (over 3 duplicate fix attempts)
- **#5379** - Memory consolidation preservation (lossless truncation)

The project shows strong engineering response to critical bugs, with multiple fix attempts indicating thorough testing approaches. The balance between stability fixes, security patches, and feature development suggests a mature, production-ready project addressing both immediate issues and long-term roadmap items.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

1. **Today's Overview**  
The Hermes Agent project shows active development with 50 issues and 50 PRs updated in the last 24h, including a new release. The release v2026.8.13 (Hermes Agent v0.20.1) stabilizes recent changes, while unresolved issues like stale skills indexes, desktop UI bugs, and provider failures dominate discussions. Merges and fixes for session state persistence, cron jobs, and tooling reflect prioritization of core functionality.  

2. **Releases**  
v2026.8.13 consolidates ~656 PRs since v0.20.0 into a stable release for downstream consumers (Docker, deployments). Key focus: improving index freshness, cron job reliability, and terminal/Desktop app stability. No breaking changes reported; migration notes emphasize dependency updates and config adjustments for cron/delivery workflows.  

3. **Project Progress**  
- **Merged PRs**: Fixes for cron secret reuse (`#85710`), terminal window resize (`#85734`), and security checks in OAuth flows (`#82350`).  
- **Fixes**: Addressed gateway crashes (`#83851`), visualization tool issues (`#85406`), and session state corruptions (`#81639`).  
- **New Features**: Plaid spreadsheet support (`#4438`) and Slack peer bot authorization (`#85614`) remain open, signaling incremental enhancement focus.  

4. **Community Hot Topics**  
- **Top Issue**: #66616 (skills index aging) with 25 comments—highlights degradation in tool discovery.  
- **PR Debate**: #82801 (“dual identity system”) with 1 comment—users request SOUL.md/built-in personality coexistence clarity.  
- **Security**: #85723 (security disclaimer in Japanese docs) and #35601 (profile export safeguards) reflect enterprise concerns.  

5. **Bugs & Stability**  
- **Critical**: #81639 (tool call logic corruption, 3 comments) and #69592 (TUI session blocks, 12 comments).  
- **Workarounds**: #85693 (`computer_use` tool missing in desktop) and #85406 (Windows Docker path errors) lack immediate fixes.  
- **Stability Fix**: Merged `#85710` resolves cron delivery failures, but UI regressions persist.  

6. **Feature Requests & Roadmap**  
- **Spreadsheets**: #4438 advocates for structured Excel/CSV handling.  
- **Memory**: #85418 proposes a local-first memory provider, bypassing third-party backends.  
- **Cron Improvements**: #85710 and #87301 show demand for context-aware automation tooling.  

7. **User Feedback Summary**  
- **Pain Points**: TUI session visibility (`#69592`), profile management (`#85731`), and cron job failures disrupt workflows.  
- **Satisfaction**: Fixes for terminal bugs (`#85734`) and error handling (`#85728`) indicate progress, but multi-profile and provider instability remain frustrations.  

8. **Backlog Watch**  
- **High-Priority**: #85693 (desktop `computer_use` exclusion) and #85728 (Honcho backend errors) remain open for months.  
- **Neglected**: #66616 (degraded skills index) and #85701 (Unix profile sync) require maintainer intervention to prevent stagnation.


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑08‑14**  
*Generated from GitHub activity (issues/PRs updated in the last 24 h).*

---

### 1. Today's Overview
The repository shows steady maintenance activity: 3 open issues were touched today and 9 PRs were updated, of which 3 were merged/closed. No new releases were cut. The bulk of today’s work consists of automated dependency bumps, while the only user‑facing bug (web‑UI input lag) remains open and has attracted the most discussion.

### 2. Releases
*No new releases were published today.*

### 3. Project Progress (Merged/Closed PRs)
| PR | Type | Summary |
|----|------|---------|
| [#3305](https://github.com/sipeed/picoclaw/pull/3305) | dependencies, go | Bump `github.com/aws/aws-sdk-go-v2/service/bedrockruntime` from 1.53.3 → 1.56.2 |
| [#3306](https://github.com/sipeed/picoclaw/pull/3306) | dependencies, go | Bump `github.com/aws/aws-sdk-go-v2/config` from 1.32.25 → 1.32.33 |
| [#3304](https://github.com/sipeed/picoclaw/pull/3304) | dependencies, go | Bump `github.com/anthropics/anthropic-sdk-go` from 1.55.1 → 1.61.0 |

All three closed PRs are routine dependency updates; no functional features or bug fixes were merged today.

### 4. Community Hot Topics
| Item | Comments | Reactions | Link | Why it’s hot |
|------|----------|-----------|------|--------------|
| **Issue #3281** – Web UI chat input laggy with longer history | 5 | 👍 1 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Users experience noticeable lag when the chat history grows, affecting usability; the thread includes reproducible steps and a request for performance investigation. |
| PR #3318 – fix unparseable `pnpm-lock.yaml` (stale) | — | — | [#3318](https://github.com/sipeed/picoclaw/pull/3318) | A blocking lock‑file error that prevents `pnpm install`; marked stale but still open, indicating a need for maintainer review. |
| Issue #3331 – Support any model for `/audio/transcriptions` endpoint | 0 | 0 | [#3331](https://github.com/sipeed/picoclaw/issues/3331) | Feature request to relax the hard‑coded Whisper‑only restriction; signals demand for broader ASR model flexibility. |
| Issue #3330 – Dynamic model override for delegate/spawn/subagent tools | 0 | 0 | [#3330](https://github.com/sipeed/picoclaw/issues/3330) | Request to allow runtime model selection in agent spawning tools; reflects a need for more programmable agent composition. |

### 5. Bugs & Stability
| Bug ID | Severity | Status | Fix PR? | Notes |
|--------|----------|--------|---------|-------|
| **#3281** – Web UI chat input laggy with longer history | **High** (impacts core UI interaction) | Open | None reported | Reproduction steps provided; likely tied to inefficient re‑rendering or state growth in the chat component. Needs profiling and possible virtual‑scrolling or debounce optimisation. |

No crash or regression reports were filed today beyond the UI performance issue.

### 6. Feature Requests & Roadmap Signals
| Feature Request | Link | Likelihood for next version | Rationale |
|-----------------|------|----------------------------|-----------|
| Dynamic model override in `delegate/spawn/subagent` tools | [#3330](https://github.com/sipeed/picoclaw/issues/3330) | **Medium‑High** | Directly improves agent composability; aligns with the project’s goal of flexible multi‑agent workflows. |
| Allow any ASR model for `/audio/transcriptions` (not just Whisper‑*) | [#3331](https://github.com/sipeed/picoclaw/issues/3331) | **Medium** | Useful but less core; would require abstraction layer changes in ASR handling. |
| (Implicit) Keep dependencies up‑to‑date | Ongoing Dependabot PRs | **High** | Regular bumps indicate a healthy dependency‑maintenance cadence. |

### 7. User Feedback Summary
- **Pain point:** Web UI becomes unresponsive when chat history accumulates, hindering real‑time interaction.  
- **Desired flexibility:** Users want to plug in newer or faster transcription models beyond the legacy Whisper implementation, and to specify models on‑the‑fly when spawning sub‑agents.  
- **Satisfaction:** The project’s dependency hygiene is appreciated (multiple automated bumps merged/closed today).  
- **Dissatisfaction:** The UI lag issue has been open for ~24 days with no fix, indicating a gap between user experience expectations and current implementation.

### 8. Backlog Watch (Items Needing Maintainer Attention)
| Item | Age (days) | Reason for Attention | Link |
|------|------------|----------------------|------|
| **Issue #3281** – Web UI input lag | 24 | High‑impact bug affecting daily use; no fix PR yet. | [#3281](https://github.com/sipeed/picoclaw/issues/33281) |
| **PR #3318** – Stale lock‑file fix | 9 | Blocks `pnpm install`; marked stale but still open, risking CI failures. | [#3318](https://github.com/sipeed/picoclaw/pull/3318) |
| **Issue #3330** – Dynamic model override | 1 | Feature request with clear utility; no discussion yet. | [#3330](https://github.com/sipeed/picoclaw/issues/3330) |
| **Issue #3331** – Flexible ASR model selection | 1 | Early‑stage request; may need design review before implementation. | [#3331](https://github.com/sipeed/picoclaw/issues/3331) |

---

**Overall Health Assessment:**  
PicoClaw shows active maintenance via dependency updates and a responsive Dependabot workflow. The primary area needing immediate attention is the web‑UI performance bug (#3281), which directly affects user experience. Addressing this, along with reviewing the stale lock‑file PR, will improve stability and contributor confidence. Feature requests around model flexibility indicate a growing demand for more programmable agent capabilities, likely shaping the next minor release roadmap.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

---

### **Today's Overview**  
NanoClaw exhibited high activity on 2026-08-14, with 19 PRs (13 merged/closed, 6 open) and 1 issue closed/opened. The project released v2.2.0, featuring incremental updates to agent template functionality. Stability-focused merges addressed critical security gaps, including CSPRNG adoption for pairing codes. Ongoing work highlights integration improvements (e.g., Hindsight memory), signaling a focus on developer and infrastructure workflows.  

---

### **Releases**  
**v2.2.0** introduced updates to the `ncl groups create --template` command:  
- **Key Changes**: When a group already carries its template’s plugin, the command now updates the plugin in-place instead of creating a duplicate agent. A dry run feature displays plugin-owned surfaces (files, skills, MCP endpoints).  
- **Migration Notes**: Users should validate agent group IDs to ensure compatibility with OneCLI (`ag-` prefix requirement); see Issue #3234 (closed).  

---

### **Project Progress**  
**Merged/Closed PRs advancing features/fixes today**:  
- [#3236](https://github.com/nanocoai/nanoclaw/pull/3236) Repinned agent image to `hardened-2026-08-13` (security hardening).  
- [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) Fixed pairing code generation to use `crypto.randomInt` (security).  
- [#3240](https://github.com/nanocoai/nanoclaw/pull/3240) Enabled agent image promotion workflows via GitHub dispatch.  
- [#3158](https://github.com/nanocoai/nanoclaw/pull/3158) Hardened agent image verification with Sigstore identity checks.  
- [#2420](https://github.com/nanocoai/nanoclaw/pull/2420) (Open since May) Progressed bundled Hindsight MCP wrapper for long-term memory.  
- [#3238](https://github.com/nanocoai/nanoclaw/pull/3238) Fixed CI path filters to ensure `verify-agent-image` runs as a required check.  
- [#3231](https://github.com/nanocoai/nanoclaw/pull/3231) Extended plugin MCP `cwd` support to OpenAI/codex providers.  

---

### **Community Hot Topics**  
**Most active items**:  
1. **[#3235](https://github.com/nanocoai/nanoclaw/issues/3235)** (Open): Webhook/bot senders induce unmanageable approval cards due to `unknown-sender_policy` overlap with automation. *Underlying need*: Decouple automation from approval workflows to prevent unbounded UI/UX noise.  
2. **[#3234](https://github.com/nanocoai/nanoclaw/issues/3234)** (Closed): Template-stamped groups assigned bare UUIDs, violating OneCLI’s `ag-` prefix requirement. *Root cause*: Mismatch in ID generation logic; fix via PR [#3220](https://github.com/nanocoai/nanoclaw/pull/3220).  

---

### **Bugs & Stability**  
**1. Open**:  
- **[#3235](https://github.com/nanocoai/nanoclaw/issues/3235)** (Severity: High): Automated senders trigger infinite approval card loops. No PR submitted yet.  
**2. Closed Fixes**:  
- **#3229**: CSPRNG adoption resolved insecure pairing code generation (medium severity).  
- **Agent group ID mismatch** (Issue #3234): Fixed in PR #3220, ensuring `ag-` prefixes.  

---

### **Feature Requests & Roadmap Signals**  
**Notable pending features**:  
1. **[#2420](https://github.com/nanocoai/nanoclaw/pull/2420)** (Open): Bundled Hindsight MCP integration for memory persistence. Signals potential v2.3.0 focus on agent lifespan.  
2. **[#3218](https://github.com/nanocoai/nanoclaw/pull/3218)** (Closed): Bounded JSON input via `--stdin-json` enables complex CLI workflows. Likely included in v2.2.0.  
3. **Signature Approvals**: PR [#3241](https://github.com/nanocoai/nanoclaw/pull/3241) adds auto-approval for verified agent images, suggesting future CI/CD hardening.  

---

### **User Feedback Summary**  
- Pain points:  
  - Approval workflows fail for automated senders (Issue #3235), disrupting bot-to-bot messaging.  
  - Agent group IDs rejected by OneCLI (Issue #3234), breaking integration compatibility.  
- Improvements: Security fixes (CSPRNG, image signing) and template ID alignment address high-priority stability concerns, improving reliability for large-scale deployments.  

---

### **Backlog Watch**  
1. **[#3235](https://github.com/nanocoai/nanoclaw/issues/3235)**: Unanswered since 2026-08-13; requires prioritization to prevent workflow deadlocks.  
2. **[#2420](https://github.com/nanocoai/nanoclaw/pull/2420)**: Long-running Hindsight integration (opened May 2026, last update Aug 13); potential roadmap anchor.  
3. **[#3145](https://github.com/nanocoai/nanoclaw/pull/3145)** (Closed): Database migration for wiring destinations resolved; check merge integrity.  

---  
*Data compiled from GitHub activity as of 2026-08-14 00:00 UTC.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest - 2026-08-14

### 1. Today's Overview
IronClaw shipped **v1.2.0** stable on 2026-08-13, promoting the validated `1.2.0-rc.3` release. The release includes a critical fix: the runtime container image now installs `curl`, enabling in-container HTTP healthchecks. Activity remains intense: 50 issues and 50 PRs updated in the last 24h, driven largely by the sprawling **#7482 epic** (pluggable agent loops, kernel architecture, egress edge, capability sockets). Two PRs carried activity into today (Aug 14): #7633 (unbound-turns design implementation) and #7378 (doc-fact contract tests). The project is balancing deep architectural refactoring with incremental bug fixes and performance Tier 3 optimizations.

### 2. Releases
- **ironclaw-v1.2.0** (2026-08-13) — Stable promotion of `1.2.0-rc.3`. 
  - **Fixes:** Runtime container image now installs `curl` for in-container HTTP healthcheck orchestration probes.
  - **No breaking changes** are highlighted in the rc.3→1.2.0 changelog, but the promotion coincides with the ongoing #7482 kernel rewrite; consumers should monitor the "disposable container + per-thread workspace mount" shift (Decision 5 in WS5) and the new `ic` CLI/ACP surface.
  - **Migration note:** The `curl` addition is opt-in for orchestrators; no code changes required. The broader architectural decisions (harness selection, workspace mounts, egress proxy) are detailed in the #7482 binding decisions and will shape v1.3.0 planning.

### 3. Project Progress
**Merged/Closed PRs (24 in last 24h):**
- `#7625` — Promoted `1.2.0-rc.3` to stable `1.2.0`; updated shipping package manifest and lockfile.
- `#7579` — Live canary: widened seeded Slack grant to manifest union; narrates scrub verdicts.
- `#7581` — Extensions: refresh bundled MCP catalog projections after OAuth discovery; fixes `setup_needed` persistence.
- `#7590` — Live canary: align bundled-skill marker owner with runtime mint.
- `#7376` — CI: extended reference gate to `docs/` surface (Mintlify pages, `docs/zh/`, contract corpus).
- `#7531` — Loop: made repeated-call detection advisory-only (replaced sliding-window heuristic with 3-consecutive-signature check).
- `#7163` — Documents: structural docx/xlsx/pptx editing, PDF render from HTML, fixed #7109 text-log regression.

**Features Advanced/Opened:**
- `#7633` (created/updated Aug 14) — Unbound-turns design: threads as coordinator unit, unbound run lane, kernel binding-ref deletion. First end-state-first implementation of the #7562 design.
- `#7548` (open since Aug 12) — Structured execution contracts for scheduled automations (goal, success criteria, output instructions, no-result behavior).
- `#7513` (open since Aug 11) — CLI `acp serve` command with streaming + cancel support; enables external tool connection via `--acp --stdio`.
- `#7378` (updated Aug 14) — Doc-fact contract tests: three deterministic tests per crate owning the truth, preventing doc drift from real behavior.

### 4. Community Hot Topics
| Issue/PR | Comments | Link | Underlying Need |
|---|---|---|---|
| **#7482** | 6 | [nearai/ironclaw #7482](https://github.com/nearai/ironclaw/issues/7482) | The epic remaking IronClaw into the "kernel" — scheduling, tenancy, capability membrane, secrets mediation, egress boundary. Loops become off-the-shelf harnesses (Claude-code, pi, codex). Need: ACP executor, edge credential injection, kernel architecture boundaries.
| **#7185** | 2 | [nearai/ironclaw #7185](https://github.com/nearai/ironclaw/issues/7185) | Context/information established in one conversation not reliably recalled in later conversations. Multi-tester observation; fundamental UX gap for persistent agents.
| **#2117** | 2 | [nearai/ironclaw #2117](https://github.com/nearai/ironclaw/issues/2117) | Cloud-hosted IronClaw users cannot access local files (Obsidian vaults, project dirs). Tunnel system exists but is insufficient for local-first use cases.
| **#7633** | — (today) | [nearai/ironclaw #7633](https://github.com/nearai/ironclaw/pull/7633) | Unbound turns: shifts thread coordination to the product side, removes reply routing from the kernel. Predicts more thread

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI Project Digest - 2026-08-14

### 1. Today's Overview
The LobsterAI project continues active development with significant renderer-focused improvements and infrastructure enhancements. Today's activity includes 6 merged PRs and 5 open PRs, alongside 1 active issue that has remained unchanged since March. The merged changes primarily focus on UI refactoring, skill management unification, and testing improvements, indicating a maturing codebase with improved quality assurance practices.

### 2. Releases
No new releases were published today.

### 3. Project Progress
Today saw 6 PRs successfully merged, advancing several key areas:
- **UI/UX Improvements**: PR #2485 implemented an "evergreen daily check-in" feature, while PR #2487 consolidated skills and MCP views into a unified interface
- **Renderer Refactoring**: PRs #2486 and #2488 completed significant UI restructuring of MCP components and cowork management interfaces
- **Infrastructure**: PR #2484 contributed to enterprise edition capabilities
- **Bug Fixes**: PR #1232 resolved issues with scheduled task result propagation

### 4. Community Hot Topics
**Active Issue**: #[1162](https://github.com/netease-youdao/LobsterAI/issues/1162) - Request for Vitest unit testing coverage for `openclawMemoryFile` and `openclawLocalTimeContextPrompt` modules. This represents a clear need for improved code quality and test coverage in core memory management systems.

**Notable Open PR**: #[1156](https://github.com/netease-youdao/LobsterAI/pull/1156) - Seeking unit test coverage for critical security modules `commandSafety` and `coworkMemoryJudge`, addressing immediate stability concerns.

### 5. Bugs & Stability
Several stability issues are being addressed through active PRs:
- **Scheduled Tasks**: PR #1232 (merged) fixes first execution result not being pushed to UI
- **Timer Task Feedback**: PR #1163 addresses missing "run immediately" interaction feedback and introduces optimistic updates
- **Agent Management**: PR #1166 prevents duplicate custom agent names to avoid user confusion

The focus on testing infrastructure suggests proactive stability improvements are underway.

### 6. Feature Requests & Roadmap Signals
Key feature requests emerging from the community include:
- Enhanced scheduled task UX with real-time feedback mechanisms
- Improved agent management with duplicate prevention
- Unified skill and MCP management interfaces
- Better integration testing coverage for core modules

The direction points toward enterprise readiness and UI/UX polish in upcoming releases.

### 7. User Feedback Summary
Users have expressed pain points around:
- Poor feedback in scheduled task operations (no loading states, delayed updates)
- Inconsistent UI styling in context menus
- Confusion with duplicate agent names
- Lack of visibility during task execution
- Need for more reliable memory management systems

These indicate users value responsive interfaces and operational clarity.

### 8. Backlog Watch
Several long-standing PRs and issues require maintainer attention:
- **PR #1156**: Still open for adding unit tests to security-critical modules
- **PR #1163**: Addressing timer task feedback issues, updated just yesterday
- **PR #1165**: Adding 75 unit tests to memory management modules
- **PR #1166**: Agent name duplication fix needs review completion
- **Issue #1162**: Testing request outstanding since March 31st

These represent important quality and functionality improvements that could significantly enhance system reliability.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑08‑14**

---

### 1. Today's Overview  
The Moltis repository had a modest amount of activity today: one issue and four pull‑request updates. No new releases were published. The open‑source community is actively addressing stability on macOS and expanding connector functionality, but the lack of comments or reactions on the current items suggests that the discussion is still in its early stages. Overall, the project remains healthy, with a steady flow of bug‑fixes and feature‑enhancements, though the single flaky test indicates a need for more robust CI coverage.

---

### 2. Releases  
No new releases were published on 2026‑08‑14, so there are no version changes, breaking changes, or migration notes to report.

---

### 3. Project Progress  
| PR | Status | Summary |
|----|--------|---------|
| **#1194** | Open | Fixes a macOS‑specific bash array expansion error that caused `local‑validate‑full` to crash on macOS 3.2. |
| **#1190** | Open | Adds durable CalDAV and channel‑history connectors, including read‑only datasets for Slack, Discord, Matrix, and Microsoft Teams. |
| **#1192** | Open | Corrects the `wacrawl` skill’s Go install fallback to point to the new `openclaw` organization. |
| **#1191** | Open | Updates the sandbox build to use the new `openclaw/gogcli` module path. |

No pull requests were merged or closed today; all four items remain open and awaiting review.

---

### 4. Community Hot Topics  
| Item | Type | Link | Comments / Reactions | Analysis |
|------|------|------|----------------------|----------|
| **#1193** | Issue | https://github.com/moltis-org/moltis/issues/1193 | 0 comments, 0 reactions | A flaky test that only surfaces under full‑suite load on macOS. Indicates a need for more deterministic test harnesses and possibly better resource isolation. |
| **#1194** | PR | https://github.com/moltis-org/moltis/pull/1194 | 0 comments | Addresses a macOS‑specific bug that prevented CI from running on older Bash versions. Shows active maintenance of cross‑platform compatibility. |
| **#1190** | PR | https://github.com/moltis-org/moltis/pull/1190 | 0 comments | Introduces durable connectors and read‑only datasets for popular messaging platforms. Signals a roadmap focus on data persistence and integration breadth. |
| **#1192** | PR | https://github.com/moltis-org/moltis/pull/1192 | 0 comments | Fixes a broken Go module path after a repository rename. Highlights the importance of keeping external dependencies up‑to‑date. |
| **#1191** | PR | https://github.com/moltis-org/moltis/pull/1191 | 0 comments | Similar to #1192, updates the sandbox build to use the new module path. |

The lack of discussion suggests that these items are either straightforward fixes or early‑stage feature proposals still awaiting community input.

---

### 5. Bugs & Stability  
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | #1193 | Flaky test `fanout_is_bounded_and_times_out_a_hung_endpoint` fails intermittently under full‑suite load on macOS. | None yet – issue remains open. |
| **High** | #1194 | `local-validate-full` crashes on macOS due to unbound array variable in Bash 3.2. | #1194 (open) – fix in progress. |
| **Medium** | #1192 | `wacrawl` skill install fails because of outdated module path. | #1192 (open) – fix in progress. |
| **Medium** | #1191 | Sandbox build fails due to outdated `gogcli` module path. | #1191 (open) – fix in progress. |

The two macOS‑specific bugs are the most pressing, as they block CI runs on older systems. The flaky test also threatens release stability.

---

### 6. Feature Requests & Roadmap Signals  
- **Durable connectors & channel history** (#1190) – introduces provider‑neutral persistence, atomic snapshots, and bounded local full‑text search.  
- **Read‑only CalDAV datasets** – part of the same PR, enabling integration without credential duplication.  
- **Reusable message‑history datasets** for Slack, Discord, Matrix, and Microsoft Teams – indicates a push toward a unified data layer for messaging platforms.  

These items suggest that the next release will likely focus on expanding connector capabilities, improving data persistence, and enhancing cross‑platform integration.

---

### 7. User Feedback Summary  
While no direct user comments are visible today, the issues and PRs reflect common pain points:

- **Stability on macOS** – users running CI or local validation on older macOS/Bash versions encounter crashes.  
- **Test reliability** – flaky tests undermine confidence in the test suite.  
- **Connector integration** – demand for durable, read‑only connectors to popular messaging services.  

Overall, the community appears satisfied with the rapid bug‑fix cycle but is looking for more robust, cross‑platform features.

---

### 8. Backlog Watch  
- **#1193** remains open and has not yet been addressed by a fix PR. Given its impact on CI stability, it should be prioritized.  
- No other long‑unanswered issues are present in the current snapshot, but maintainers should keep an eye on older issues that may have been overlooked.

---

**Key Takeaway:** Moltis is actively maintaining cross‑platform stability and expanding its connector ecosystem. Immediate attention is needed for the flaky test and macOS CI failures to ensure a smooth release pipeline.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope-ai/QwenPaw) Project Digest – 2026‑08‑14**  

---

### 1. Today’s Overview  
- **Activity:** 42 issue updates (25 open, 17 closed) and 50 PR updates (31 open, 19 merged/closed) in the last 24 h show a highly active development cycle.  
- **Releases:** Two new versions were published – the stable **v2.1.0** and the pre‑release **v2.1.0‑beta.5**.  
- **Health indicator:** The ratio of merged/closed PRs to open PRs (~ 61 %) suggests maintainers are keeping pace with incoming contributions while still addressing a sizable backlog of open issues.

---

### 2. Releases  

| Version | Highlights (what changed) | Breaking / Migration notes |
|---------|---------------------------|----------------------------|
| **v2.1.0** | • **QwenPaw OS Shell** – movable/resizable app windows, launcher, taskbar, notifications, saved layouts ([#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645)).<br>• Installed and Marketplace apps now share a single catalog in the App Center (truncated in release notes).<br>• Numerous under‑the‑hood fixes (see beta notes). | No explicit breaking changes listed. Users upgrading from 2.0.x should verify workspace‑specific configurations (e.g., custom plugin paths) as the OS Shell introduces a new window‑management layer that may affect existing full‑screen workflows. |
| **v2.1.0‑beta.5** | • `fix(chats): handle dict‑like model responses` ([#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816)).<br>• `fix(memory): simplify long‑term memory guidance` ([#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942)).<br>• `docs(website): make the Files workspace …` (truncated). | Beta‑only; no migration required for stable users. |

---

### 3. Project Progress (Merged/Closed PRs today – 19 items)  

| PR | Summary | Impact |
|----|---------|--------|
| **[#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884)** | Make Auto‑Dream integration resilient to malformed LLM output. | Improves stability of the background “dream” memory‑consolidation task. |
| **[#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636)** | Add pagination + GZip compression to chat history endpoint. | Eliminates 30 s timeouts on slow networks for long chats (≥1 MB). |
| **[#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652)** | Enforce `max_iterations` server‑side in MissionGate. | Prevents runaway sub‑agent spawning that could exhaust quota. |
| **[#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387)** | Install optional channel dependencies on demand. | Reduces base install size; channels like DingTalk/Feishu load only when used. |
| **[#6990](https://github.com/agentscope-ai/QwenPaw/pull/6990)** | Process‑level cache for stable Markdown files used by system prompts & skills. | Cuts repeated file I/O and front‑matter parsing, lowering latency. |
| **[#6984](https://github.com/agentscope-ai/QwenPaw/pull/6984)** | Redesign ReMe runtime status dashboard. | Gives operators a quick view of memory‑capture health and maintenance actions. |
| **[#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975)** | Reset context‑usage ring after `/compact`. | Fixes UI stall where the usage ring showed pre‑compact values. |
| **[#6996](https://github.com/agentscope-ai/QwenPaw/pull/6996)** | Restore workspace state before plugin reload swap. | Prevents loss of slash‑commands, modes, and runtime hooks during hot‑reload. |
| **[#6998](https://github.com/agentscope-ai/QwenPaw/pull/6998)** | Prevent semaphore leaks from unconsumed LLM streams. | Addresses #5411 – eliminates gradual rate‑limiter exhaustion. |
| **[#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001)** (first‑time contributor) | Isolate session & memory per sender in Matrix group rooms. | Enables per‑user context in Matrix, fixing shared‑state bleed‑through. |
| **[#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004)** (first‑time contributor) | Persist spawn parent‑child linkage in chat meta. | Improves traceability of sub‑agent trees in console UI. |
| *(Other merged PRs: #6994, #6989 – release‑note chores; #6997 – doc refresh; #6995 – env‑var feature; #6976 – session‑scoped multi‑project dirs; #6993/#6992 – security incident reports; etc.)* | | |

*Overall:* The merged PRs focus on **stability (pagination, resource leaks, crash‑proof dream), performance (caching, optional deps), and usability (better UI feedback, Matrix isolation)** – all critical for a production‑grade assistant platform.

---

### 4. Community Hot Topics (most commented items)  

| Item | Type | Comments | Link | Core concern / underlying need |
|------|------|----------|------|--------------------------------|
| **#6921** | Issue (bug) | 6 | [link](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Model frequently pauses after planning utterances (“Now 2.1, 3.1, 3.2…”) requiring a manual “continue”. Users want seamless auto‑resume or a clearer prompt. |
| **#6973** | Issue (question) | 5 | [link](https://github.com/agentscope-ai/QwenPaw/issues/6973) | Request to support Alibaba Cloud Bailian token plan for model billing – indicates enterprise users seeking cost‑controlled LLM consumption. |
| **#6811** | Issue (bug) | 5 | [link](https://github.com/agentscope-ai/QwenPaw/issues/6811) | OpenAI Responses continuation summary ignores `disable_thinking` and misreports 60‑s cancellation as malformed output – a regression affecting reasoning models. |
| **#6853** | Issue (bug) | 5 | [link](https://github.com/agentscope-ai/QwenPaw/issues/6853) | Documentation falsely claims Dream process writes to `MEMORY.md`; users notice missing sync and want reliable long‑term memory persistence. |
| **#6047** | Issue (bug) | 4 | [link](https://github.com/agentscope-ai/QwenPaw/issues/6047) | Post‑upgrade session confusion – new chat reopens old session due to stale `chats.json` ordering. Highlights need for robust session isolation across upgrades. |
| **#6847** | Issue (question) | 4 | [link](https://github.com/agentscope-ai/QwenPaw/issues/6847) | Antivirus frequently kills QwenPaw processes while WorkBuddy does not – suggests signature/heuristic false‑positives that impact trust. |
| **#6882** | Issue (question) | 4 | [link](https://github.com/agentscope-ai/QwenPaw/issues/6882) | How to integrate CopilotKit – indicates interest in extending QwenPaw with external AI‑assistant frameworks. |
| **#6992 / #6993** | Issue (security) | 3 each | [link](https://github.com/agentscope-ai/QwenPaw/issues/6992) / [link](https://github.com/agentscope-ai/QwenPaw/issues/6993) | Major architecture vulnerability: service binds 0.0.0.0:8088 without auth, allowing arbitrary plugin installation & command execution. Highest‑severity community alarm. |
| **#6945** | Issue (question) | 3 | [link](https://github.com/agentscope-ai/QwenPaw/issues/6945) | Uncertainty about “smart mode” write‑to‑sandbox limitations – users want clearer docs on what operations are permitted. |
| **#6585** | Issue (enhancement) | 3 | [link](https://github.com/agentscope-ai/QwenPaw/issues/6585) | Dynamic character‑count flashing in chat input causes eye strain – request for toggle to show static count only after load. |

*Takeaway:* The top‑voted items cluster around **reliability (auto‑continue, session isolation), security (exposed API), usability (UI fluency, documentation accuracy), and enterprise integration (token plans, CopilotKit)**.

---

### 5. Bugs & Stability (reported today) – ranked by severity  

| Severity | Item | Summary | Fix / PR status |
|----------|------|---------|-----------------|
| **Critical** | **#6992 / #6993** (security incident) | Service exposes unauthenticated API on 0.0.0.0:8088 → arbitrary plugin install & command execution. | No fix PR yet; issue labelled “invalid” (likely a duplicate/mis‑label) but the underlying vulnerability remains open. |
| **High** | **#6921** (model pause) | LLM stops after planning sentences, requires manual “continue”. | No linked PR; likely needs changes in the agent’s continuation‑logic or prompt handling. |
| **High** | **#6811** (OpenAI Responses summary bug) | Summary call ignores `disable_thinking` & misreports cancellation. | No linked PR; needs provider‑side fix. |
| **Medium** | **#6853** (Dream → MEMORY.md docs mismatch) | Documentation claims Dream auto‑syncs digests; actual pipeline does not. | No fix PR; documentation update needed (could be addressed by #6997 doc refresh). |
| **Medium** | **#7007** (Windows TUI transport error) | `qwenpaw tui` fails with “transport: Connection closed” because packaged exe rejects `-m qwenpaw acp`. | No fix PR; likely a packaging/configuration issue. |
| **Low** | **#7006** (language options inconsistency) | Top‑right dropdown vs bottom‑left gear show different language lists. | No fix PR; trivial UI sync. |
| **Low** | **#7005** (Shabox + UV Run) | Enabling Shabox blocks UV’s cache write. | No fix PR; policy adjustment needed. |

*Note:* Several high‑impact bugs lack an associated PR; maintainers should prioritize security (#6992/6993) and the model‑pause issue (#6921) which directly affect user workflow.

---

### 6. Feature Requests & Roadmap Signals  

| Feature request | Link | Likelihood for next version (based on activity) |
|-----------------|------|-----------------------------------------------|
| **ViBo‑style memory compression** – 97.5% fewer tokens ([#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003)) | High – aligns with ongoing memory‑optimization work (#6984, #6990, #6942). |
| **Embeddable chat sub‑page (no sidebar/header)** + API‑key auth bypass ([#6970](https://github.com/agentscope-ai/QwenPaw/issues/6970)) | Medium – UI‑focused; similar to recent console tweaks (#7004, #6995). |
| **Session‑scoped multi‑project directories** ([#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976)) | High – PR already open; likely to be merged soon. |
| **Inject `QWENPAW_CHANNEL` env var into shell subprocesses** ([#6995](https://github.com/agentscope-ai/QwenPaw/issues/6995)) | Medium – low‑risk enhancement; PR #6995 exists. |
| **Proxy client for server‑side deployment** ([#7002](https://github.com/agentscope-ai/QwenPaw/issues/7002)) | Low – larger architectural change; no PR yet. |
| **Plugin import flow from Codex/Qoder** ([#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)) | Medium – first‑time contributor PR; useful for extensibility. |
| **ReMe runtime status dashboard** ([#6984](https://github.com/agentscope-ai/QwenPaw/pull/6984)) | Already merged – will appear in upcoming release. |
| **File‑cache for system prompts/skills** ([#6990](https://github.com/agentscope-ai/QwenPaw/pull/6990)) | Already merged – improves latency. |

*Roadmap hint:* The maintainers are actively polishing **memory subsystems**, **plugin lifecycle**, and **console UX**. Expect the next minor release (perhaps v2.1.1) to include ViBo‑style memory compression, session‑scoped projects, and the channel env‑var feature.

---

### 7. User Feedback Summary  

- **Positive:** Users praise the new **OS Shell** (movable windows, taskbar) and the **memory‑dashboard** improvements. Contributions from first‑time contributors (Matrix isolation, plugin import) are welcomed.  
- **Pain points:**  
  1. **Unpredictable pauses** after model‑generated planning statements (#6921) force manual “continue”, breaking flow.  
  2. **

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑08‑14**  

---  

### 1. Today's Overview  
- Activity remains brisk: **50 issues** were updated in the last 24 h (37 still open, 13 closed) and **50 pull‑requests** saw updates (41 still open, 9 merged/closed). No new stable releases were published.  
- The repository is in a “maintenance‑plus‑vision” phase – most conversations revolve around design RFCs, runtime‑level stability, and permission‑policy refinements rather than feature‑first pushes.  
- Community energy is focused on high‑risk security and architecture issues (see sections 5–6), while incremental tooling improvements continue to land.  
- Overall health is **stable**, with a manageable backlog and a clear queue of maintainer‑level decisions.  

---  

### 2. Releases  
- **No new releases** were cut yesterday. The project’s versioning cadence continues to rely on weekly/monthly cut‑offs rather than per‑commit tagging.  

---  

### 3. Project Progress  
- **Merged / landed PRs (last 24 h)**  
  1. **#9969** – *fix(gateway): contain filesystem dashboard assets* – closes a path‑traversal risk.  
  2. **#9984** – *validation only: rust-cache useblacksmith path on Blacksmith* (temporary CI experiment).  
  3. **#9674** – *fix(infra): preserve session queue serialization during eviction* – improves session‑slot guarantees.  
  4. **#9705** – *fix(config): allow config set on existing hyphenated cron aliases* – restores a previously broken configuration path.  
  5. **#9707** – *fix(config): migrate bare vision_model_provider to dotted alias ref* – clarifies alias resolution.  
- **Closed issues that delivered tangible fixes** – most notably #9389 (security pairing endpoint leak) and #9706/9705 (resource‑cleanup bugs).  
- **Open PRs that have advanced key functionalities** – #9109 (native Hailo‑Ollama provider), #9203 (authenticated SOP fan‑in), #9420 (Anthropic OAuth support), and #9986 (portable agent bundle).  

---  

### 4. Community Hot Topics  
| Item | Type | Comments | 👍 | Why it matters |
|------|------|----------|----|----------------|
| **#8303** – RFC: Goal mode v1 — bounded foreground Matrix work | RFC / design | 20 | 1 | Introduces a durable, bounded objective mechanism spanning multiple agent turns; signals a shift toward long‑running autonomous goals. |
| **#7155** – RFC: Add per‑execution confirmation tier for high‑risk shell commands | RFC / security | 18 | 0 | Pushes a “tiered” approval model for dangerous shell actions – a direct response to recent security incidents. |
| **#8692** – Tracker: Maintainer decision queue for RFCs & design issues | Tracker | 13 | 0 | Serves as the formal gate‑keeping channel for all new design proposals; activity reflects a heavy design workload. |
| **#6850** – RFC: Decouple memory lifecycle policy from storage backends | RFC / architecture | 12 | 0 | Aims to cleanly separate durable storage from policy – a prerequisite for pluggable memory backends. |
| **#9328** – Bug: verifiable‑intent evaluates constraints without verifying credential chain | Bug / security | 12 | 0 | Highlights a cryptographic trust gap; drives the upcoming SOP permission contract. |
| **#9487** – RFC: Runtime‑owned conversation sessions & transport adapters | RFC / runtime | 11 | 0 | Refines session ownership semantics; a prerequisite for multi‑agent handoffs. |
| **#9810** – RFC: Load Agent Plugins 1.0 skill and MCP packages | RFC / ecosystem | 2 | 0 | Introduces vendor‑neutral plugin loading; could become a major growth driver for community extensions. |

**Observation:** The most commented RFCs focus on **security boundaries (shell command approvals, verifiable intent, SOP contracts)** and **architecture standardization (session ownership, plugin loading)** – indicating the community’s current priority is *trustworthy, auditable automation* rather than raw capability expansion.  

---  

### 5. Bugs & Stability  
| Issue | Severity* | Status | Comment Count | Key Risk | Fix PR (if any) |
|-------|-----------|--------|---------------|----------|-----------------|
| **#9389** – unauthenticated POST /api/pair can leak lockout state | **High** | Closed | 3 | Possible privilege escalation | #9674 (session‑queue serialization) |
| **#9643** – docs: VERSIONING.md misclassifies enum variant addition | Low | Closed | 2 | Breaks backward‑compatible plugins | – (documentation only) |
| **#9366** – WhatsApp Web ignores `approval_timeout_secs` | Medium | Closed | 2 | UI may mislead users about timeout behavior | – |
| **#9706** – Edge TTS temporary output not cleaned on error | Low | Closed | 1 | Disk bloat on mis‑configurations | – |
| **#9968** – providers: preserve compatible‑provider integrity (JWT validation) | **High** | Open | 0 (no 👍) | Potential credential leakage | – (open) |
| **#9709** – fix(tts): clean up Edge TTS temp output on every error path | Medium | Closed | 0 | Same disk‑bloat concern | – |
| **#9929** – headless SOP steps lose session persistence | **High** | Open | 2 | Degraded auditability & state recovery | – |
| **#9987** – downscale oversized images instead of dropping them | **High** | Open | 2 | Prevents premature model rejections for large payloads | – |

\*Severity ranking follows the project’s own `risk:` tag where available, with **High** indicating potential security, data‑loss, or availability impact, **Medium** indicating functional degradation, and **Low** indicating cosmetic or minor operational concerns.  

---  

### 6. Feature Requests & Roadmap Signals  
- **Goal‑mode bounded objectives (#8303)** – likely to become a core pillar of the upcoming *v0.9* release; expected to enable multi‑turn planning.  
- **Per‑execution command confirmation tier (#7155)** – already merged into the design tracker; suggests a shift toward a “policy‑first” execution model, possibly shipping in a **security‑hardening milestone**.  
- **Agent‑Plugin 1.0 loading (#9810)** – gaining traction (RFC with maintainer attention); may appear as an *experimental* feature in the next minor version, opening the ecosystem to community‑built abilities.  
- **Runtime‑owned conversation sessions (#9487)** – tracked as #9600; appears on the maintainer decision queue, indicating upcoming contract changes that could affect multi‑agent orchestration.  
- **Browser tool completeness (#9945)** – still missing ~84 commands; an open technical debt item that may be addressed in a UI‑focused sprint.  

---  

### 7. User Feedback Summary  
- **Pain points recurring in issues**:  
  1. **Credential security** – worries about unauthenticated pair endpoints and credential‑to‑JWT conversion (issues #9389, #9968).  
  2. **Resource cleanup** – temporary files from TTS, Edge TTS, and screenshot handling left on error paths (issues #9706, #9709).  
  3. **Unreachable browser capabilities** – agents can’t invoke iframes, dialogs, or tab controls via the `browser` tool (issue #9945).  
  4. **Session persistence** – headless SOP turns create transient sessions that never get stored (issue #9929).  
- **Positive signals**: Users are excited about the *Goal mode* vision and the prospect of standardized plugin loading, viewing them as “big‑picture” enablers for autonomous workflows.  

---  

### 8. Backlog Watch – Items Requiring Maintainer Attention  
| Item | Why it matters | Current status |
|------|----------------|----------------|
| **#8303** (Goal mode v1) | Core architectural change; impacts runtime, config, and multi‑agent flows. | Open, 20 comments; no maintainer decision yet. |
| **#7155** (Command confirmation tier) | Security‑critical; must be merged before next release. | Open, 18 comments; under discussion. |
| **#8692** (Decision‑queue tracker) | Governs all future RFC acceptance; currently only 13 comments but needed for prioritisation. | Open, 13 comments. |
| **#9929** (Headless SOP session persistence) | Breaks auditability of SOP turns; can cause lost state in long‑running agents. | Open, 2 comments; no fix merged. |
| **#9810** (Agent Plugins 1.0 loading) | Large ecosystem impact; stalled at “needs‑maintainer‑review”. | Open, 2 comments; awaiting decision. |
| **#9968** (Provider JWT integrity) | Security regression risk; currently open with high‑risk tag. | Open, no 👍; no merge yet. |

---  

**Bottom line:** ZeroClaw is in an active stabilization phase where **security, permission contracts, and architectural clarity** dominate the conversation. The project is healthy, with a predictable cadence of merged fixes and a manageable set of high‑visibility RFCs awaiting maintainer resolution. The next two weeks will likely see decisive movement on the Goal‑mode, command‑approval, and plugin‑loading proposals, which will shape the feature set of the upcoming **v0.9** milestone.  

---  

*All GitHub references are hyperlinked to the relevant issue or pull‑request numbers as shown above.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*