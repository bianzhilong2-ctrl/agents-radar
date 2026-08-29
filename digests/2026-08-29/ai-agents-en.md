# OpenClaw Ecosystem Digest 2026-08-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-29 04:50 UTC

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

# OpenClaw Project Digest — 2026-08-29

## 1. Today's Overview

OpenClaw shows very high activity: 500 issues and 500 PRs updated in the last 24 hours, with a notably higher open ratio (414 open issues / 272 open PRs) than closed, suggesting the project is absorbing more incoming work than it is resolving. The release of `v2026.9.1-beta.1` directly addresses Gateway restart recovery and config-write reliability, which have been recurring pain points across multiple P0/P1 issues. Overall project health is mixed: the maintainer team (steipete, jalehman, vincentkoc, VACInc) is shipping targeted fixes, but a long tail of "platinum hermit" severity bugs remains in `clawsweeper-recovery-stuck` and `needs-live-repro` states, indicating that complex reproduction and triage are the primary bottleneck, not lack of engineering effort.

## 2. Releases

**v2026.9.1-beta.1** ([PR #130731](https://github.com/openclaw/openclaw/pull/130731)) — *Published 2026-08-27, prepare-release PR by vincentkoc*

### Highlights
- **Gateway restart recovery** ([#130491](https://github.com/openclaw/openclaw/pull/130491), thanks @jalehman): Preserves admitted turns across repeated Gateway restarts, so restart-safe runs continue through each checkpoint and deliver their final response. Directly addresses [#87938](https://github.com/openclaw/openclaw/issues/87938) and [#87711](https://github.com/openclaw/openclaw/issues/87711)-class issues.
- **Gateway config-write reliability**: Committed config writes are kept consistent under concurrent activity, reducing the silent partial-write state that has been triggering crash-loop and recovery-stuck flags.

### Migration / Risk Notes
- This is a **beta** release, scoped narrowly to Gateway reliability — no public schema or public API changes reported. Operators on `2026.5.x`–`2026.6.x` who have hit the Gateway restart loop should consider testing on this beta before the stable cut.
- The release PR spans 80+ extension/channel labels (a sign this is a coordinated cut), but the change set itself is bounded to Gateway internals. No upgrade-time action expected beyond a normal Gateway restart.

## 3. Project Progress

A high number of PRs were closed/merged in the last 24h; notable items advancing the codebase:

- **[#90745](https://github.com/openclaw/openclaw/pull/90745)** — `fix: carry reply metadata into runtime context` (P1, XL). Establishes a trust boundary so reply metadata reaches the agent runtime as structured context rather than flat prompt text, addressing prompt-injection risks from quoted human input.
- **[#131949](https://github.com/openclaw/openclaw/pull/131949)** — `fix(gateway): completed replies duplicate after a late abort` (P1, M, closes [#131711](https://github.com/openclaw/openclaw/issues/131711)). Resolves a session-state regression where persisted replies appeared as both completed and aborted transcript entries.
- **[#130993](https://github.com/openclaw/openclaw/pull/130993)** — `fix: Responses sessions compact before reaching context limit` (P1, XL). Fixes six compaction-pipeline failures including doubled replay estimation and multi-state boundary loss.
- **[#131669](https://github.com/openclaw/openclaw/pull/131669)** — `fix(workers): honor session tool policies on cloud sessions` (P1, XL, security boundary). Ensures `before_tool_call` policies apply to cloud-worker-initiated child sessions.
- **[#126618](https://github.com/openclaw/openclaw/pull/126618)** — `fix: Tool Search directory/tools wrap native read/exec in tool_call` (P1, M). Stops openai-completions models from emitting meta `tool_call` wrappers for native file/shell work.
- **[#132367](https://github.com/openclaw/openclaw/pull/132367)** — `feat: let voice agents hang up` (P2, channel: voice-call). Closes the gap where classic (transcription+text+TTS) voice calls had no end-of-call control, only realtime calls did.
- **[#132362](https://github.com/openclaw/openclaw/pull/132362)** — `fix(fireworks): prevent unsupported images reaching GLM 5.2 Fast` (P1, docs). Corrects the provider catalog so a text-only model no longer advertises image input.
- **[#116237](https://github.com/openclaw/openclaw/pull/116237)** — `fix(feishu): send caption text before media in card+media payloads` (P1, S). Fixes a long-standing Feishu outbound bug where the caption was silently dropped on card+media sends.
- **[#132185](https://github.com/openclaw/openclaw/pull/132185)** — `fix(cli): read session history from the canonical store, not a retired file` (P1, XL). SQLite-only sessions were rendering as empty conversations because CLI history still read the legacy JSONL path.
- **[#132364](https://github.com/openclaw/openclaw/pull/132364)** — `fix(sessions): accept inert defaults when creating visible sessions` (P2, S). `sessions_spawn` no longer rejects inert empty attachments.
- **[#130115](https://github.com/openclaw/openclaw/pull/130115)** — `fix(mac): avoid duplicate Codex sessions with a local Gateway` (P2, S). macOS users no longer see Codex sessions listed twice (gateway-local + paired Mac app).
- **[#132366](https://github.com/openclaw/openclaw/pull/132366)** — `fix: avoid malformed Unicode at runtime text limits` (P2, S). Prevents A2A status errors and cloud-worker enrollment names from being truncated mid-supplementary-character.

## 4. Community Hot Topics

The high-comment issues cluster around three themes: **session/lane integrity**, **channel correctness on Feishu/Telegram/WhatsApp/Discord**, and **observability/trace context**.

- **[#91588](https://github.com/openclaw/openclaw/issues/91588)** (23 comments, P0, platinum hermit) — *Gateway memory leak: RSS 350MB → 15.5GB → OOM crash loop.* Highest-traffic issue on the board. The fix path is unclear (no PR linked), and the issue is flagged `needs-live-repro` despite a detailed report. This is a **release blocker** in all but name.
- **[#48788](https://github.com/openclaw/openclaw/issues/48788)** (20 comments, P3) — *Centralized filename encoding utility for multi-encoding Content-Disposition.* Architectural RFC that would consolidate Shift-JIS/EUC-KR/GB18030 handling across channel adapters. High engagement despite low priority suggests broad stakeholder interest.
- **[#68596](https://github.com/openclaw/openclaw/issues/68596)** (15 comments, 8 👍, P2) — *Configurable streaming watchdog timeout.* Users running reasoning-heavy models (kimi-k2.5, DeepSeek-R1) are hitting false-positive 30s watchdog resets. Strong reaction count indicates a real, widespread operator friction point.
- **[#96834](https://github.com/openclaw/openclaw/issues/96834)** (14 comments, P1) — *WhatsApp 1:1 inbound image wedges the main lane ~3 min.* Multimodal runs strand `active_reply_work`/`queued_work_without_active_run`. A P1 with `impact:message-loss`; no fix PR linked yet.
- **[#84516](https://github.com/openclaw/openclaw/issues/84516)** (13 comments, P1) — *Codex app-server silently truncates long replies at ~1000–1100 chars.* `stop=null, aborted=false` — a state-machine bug that misleads operators into thinking the run succeeded.
- **[#41744](https://github.com/openclaw/openclaw/issues/41744)** (13 comments, P3) — *Feishu: read image tool result loses media before final outbound payload.* A linked PR is open, but the issue remains unresolved.
- **[#126906](https://github.com/openclaw/openclaw/issues/126906)** (6 comments, P1) — *Denying the `write` tool silently disables memory persistence; agent reports success anyway.* A silent data-loss path — `doctor` doesn't surface it, the agent doesn't surface it.

**Underlying need:** the community is signaling that *observability, trust, and graceful failure* matter more than feature breadth. Truncation without error, denied tools that appear to succeed, memory leaks that look like restarts — these all break the contract between OpenClaw and its operators.

## 5. Bugs & Stability

Severity ranking (P0 first), focused on items with active fix PRs or recent activity:

| Severity | Issue | Title | Fix PR |
|---|---|---|---|
| **P0** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway memory leak 350MB→15.5GB / OOM crash | None |
| **P1** | [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 image wedges main lane ~3 min | None |
| **P1** | [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex app-server silently truncates replies at ~1100 chars | None |
| **P1** | [#126906](https://github.com/openclaw/openclaw/issues/126906) | `tools.deny` silently disables memory persistence | None |
| **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Leaked unreaped hook/tool child processes → zombies | None |
| **P1** | [#85027](https://github.com/openclaw/openclaw/issues/85027) | macOS LaunchAgent Gateway unrecoverable after 2026.5.6→2026.5.19 upgrade | None |
| **P1** | [#107814](https://github.com/openclaw/openclaw/issues/107814) | gpt-5.3-codex-spark emits empty arguments for required tool calls | None |
| **P1** | [#105528](https://github.com/openclaw/openclaw/issues/105528) | exec/read silently return empty output on Windows (2026.6.x regression) | None |
| **P1** | [#124284](https://github.com/openclaw/openclaw/issues/124284) | Subagent spawn fails with vLLM + thinking: malformed XML tool calls since 2026.8.1-beta.2 | None |
| **P1** | [#54488](https://github.com/openclaw/openclaw/issues/54488) | Session lane starvation: followup drain monopolizes lane 20–30 min | None |
| **P1** | [#87711](https://github.com/openclaw/openclaw/issues/87711) | Empty assistant delivery on first turn after /new on Telegram (CLOSED today) | Indirect via 2026.9.1-beta.1 restart recovery |
| **P1** | [#87938](https://github.com/openclaw/openclaw/issues/87938) | Feishu DM sessions rebuilt after gateway restart (CLOSED today) | Indirect via 2026.9.1-beta.1 |

**Key gap:** the highest-severity items — the Gateway memory leak, the WhatsApp image lane wedge, the Codex silent truncation, and the memory-persistence silent disable — are open with **no linked fix PR**. The beta release helps restart-recovery paths but not the underlying leaks/locks causing them.

## 6. Feature Requests & Roadmap Signals

Most-displaced feature asks cluster around **per-channel extension, runtime guardrails, and developer ergonomics**. Likely candidates for inclusion in the next minor or `2026.9.x` stable:

- **Multiple Azure/Teams bots per Gateway** ([#71058](https://github.com/openclaw/openclaw/issues/71058), 9 comments, 1 👍). Current `channels.msteams` schema is a single object with `additionalProperties: false`. The request is structurally compatible with existing multi-account patterns in Feishu/Discord.
- **Slack Modal Support** ([#88154](https://github.com/openclaw/openclaw/issues/88154), 7 comments). First-class structured input via Slack native modals. Cross-cuts the control-ui and channel:slack layers already receiving activity.
- **Configurable streaming watchdog threshold** ([#68596](https://github.com/openclaw/openclaw/issues/68596), 15 comments, 8 👍). The reaction count makes this the strongest "incoming PR" candidate — it's a config-only change with measurable user demand.
- **maxTurns / maxToolCalls config** ([#9912](https://github.com/openclaw/openclaw/issues/9912), 6 comments, 1 👍). A general guardrail against runaway agent loops; complements the in-flight "tool call circuit breaker" request.
- **Tool call circuit breaker** ([#78865](https://github.com/openclaw/openclaw/issues/78865), 5 comments). Pairs naturally with the existing "agent stuck in tool-retry loop" issues ([#55694](https://github.com/openclaw/openclaw/issues/55694)).
- **Plugin hot-reload without container restart** ([#14438](https://github.com/openclaw/openclaw/issues/14438), 5 comments, 4 👍). Jiti cache invalidation. Improves the plugin dev loop; modest scope.
- **Centralized filename encoding utility** ([#48788](https://github.com/openclaw/openclaw/issues/48788)). Architectural RFC — likely a multi-version effort, but the volume of comments suggests it's on the maintainer radar.
- **Surface API provider name in error messages** ([#51336](https://github.com/openclaw/openclaw/issues/51336)). Small, high-UX-impact change.
- **muteKeywords channel config** ([#89870](https://github.com/openclaw/openclaw/issues/89870), CLOSED today, P3). Drop messages matching keyword/regex before dispatch. CLOSED in this digest window — may have shipped.
- **Cron job name/label in /status** ([#51184](https://github.com/openclaw/openclaw/issues/51184)). Cosmetic but high-frequency operator touchpoint.

**Prediction:** of these, `configurable streaming watchdog` and `maxTurns/maxToolCalls` are most likely to land in `2026.10.x` — both are config-surface changes with low risk and proven demand. Multi-Teams-bot and Slack modals are heavier and likely `2026.11+`.

## 7. User Feedback Summary

**Real pain points (high signal):**
- **Silent failure modes are the dominant complaint.** Users explicitly call out: Codex silent truncation with `stop=null` ([#84516](https://github.com/openclaw/openclaw/issues/84516)), `tools.deny` silently disabling memory persistence ([#126906](https://github.com/openclaw/openclaw/issues/126906)), and macOS LaunchAgent unrecoverable upgrades requiring Time Machine ([#85027](https://github.com/openclaw/openclaw/issues/85027)). The recurring theme: **the system looks fine until it isn't, with no operator-facing warning.**
- **Hardcoded paths leaked into releases.** [#51429](https://github.com/openclaw/openclaw/issues/51429) (Chinese-language) reports a `/Users/wangtao` workspace path hardcoded into shipped code. This is a trust issue as much as a bug.
- **Long-running session correctness.** Users running multi-hour reasoning sessions (kimi-k2.5, DeepSeek-R1) hit false-positive watchdogs and lane-starvation issues — the system is not yet tuned for "agent thinks for 5+ minutes" workloads.
- **Codex / OAuth flows remain fragile.** Multiple P1s touch the Codex app-server and Claude CLI OAuth: silent truncation, duplicate sessions on Mac, auth epoch invalidation.

**Use cases surfaced:**
- Multi-account Feishu and multi-bot Teams deployments (operator/scale use).
- Cross-channel message routing with `responsePrefix` consistency.
- Plugin/skill development loops (hot-reload).
- Cron-driven automation (`memory-core` plugin's isolated `agentTurn`).

**Satisfaction signal:** engagement is high (many P1/P2s with 5–20 comments, multiple 4–8 👍 counts), and the maintainer team is visibly closing issues. The dissatisfaction is concentrated in *unobservable failures*, not missing features.

## 8. Backlog Watch

Items that have been open for **weeks to months** with no linked fix and high severity — these are the maintainer-attention gaps:

- **[#91588](https://github.com/openclaw/openclaw/issues/91588)** (P0, platinum hermit, *open since 2026-06-09*) — Gateway OOM memory leak. The single most urgent open item; no PR, no clear owner.
- **[#96834](https://github.com/openclaw/openclaw/issues/96834)** (P1, *open since 2026-06-25*) — WhatsApp image lane wedge.
- **[#84516](https://github.com/openclaw/openclaw/issues/84516)** (P1, *open since 2026-05-20*) — Codex app-server silent truncation.
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** (P1, *open since 2026-06-29*) — Zombie hook/tool child process accumulation.
- **[#85027](https://github.com/openclaw/openclaw/issues/85027)** (P1, *open since 2026-05-21*) — macOS LaunchAgent upgrade unrecoverable.
- **[#107814](https://github.com/openclaw/openclaw/issues/107814)** (P1, *open since 2026-07-14*) — gpt-5.3-codex-spark empty-argument tool calls.
- **[#54488](https://github.com/openclaw/openclaw/issues/54488)** (P1, *open since 2026-03-25*) — Session lane starvation (followup drain blocks inbound 20–30 min). Has been waiting since March with no fix PR.
- **[#9912](https://github.com/openclaw/openclaw/issues/9912)** (P2, *open since 2026-02-05*) — maxTurns/maxToolCalls guardrail. ~7 months old.
- **[#48788](https://github.com/openclaw/openclaw/issues/48788)** (P3 RFC, *open since 2026-03-17*) — Centralized filename encoding utility.
- **[#50291](https://github.com/openclaw/openclaw/issues/50291)** (P2, *open since 2026-03-19*) — Plugin hooks missing trace context (messageId, runId, parentSpanId) for distributed tracing. Important for

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison: Personal AI Assistant & Agent Open‑Source Ecosystem**  
*Compiled from 2026‑08‑29 community digests*  

---

### 1. Ecosystem Overview
The personal AI assistant landscape is highly fragmented but increasingly collaborative. Core orchestrator projects (OpenClaw, CoPaw/QwenPaw) are pushing large‑scale reliability and provider flexibility, while lightweight UI/toolkits (NanoBot, PicoClaw, LobsterAI) focus on cross‑platform user experience. Security‑hardened runtimes (ZeroClaw) and sandbox‑first platforms (Moltis) provide niche, high‑ assurance alternatives. Community activity is bimodal: a few projects generate **hundreds of concurrent issues/PRs** (OpenClaw, CoPaw, ZeroClaw), while many are quiescent or in long‑term maintenance mode. Silent‑failure visibility, multi‑channel correctness, and provider‑agnostic configuration are recurring themes across the active cohorts.

---

### 2. Activity Comparison  
| Project | Issues (last 24 h) | PRs (last 24 h) | Release Status (latest) | Health Score* |
|---------|-------------------|----------------|------------------------|---------------|
| **OpenClaw** | 500 | 500 | v2026.9.1‑beta.1 (2026‑08‑27) | **Medium** – high velocity but 10+ critical bugs unresolved |
| **CoPaw (QwenPaw)** | 45 | 36 | v2.2.0‑beta.3 (2026‑08‑28) | **High** – frequent releases, strong test & refactor cadence |
| **ZeroClaw** | 39 | 50 | None (architectural RFC phase) | **Medium** – intense design churn, several open security bugs |
| **NanoBot** | 7 | 20 | None (last stable unknown) | **Medium** – steady UI/CLI fixes, platform‑specific issues |
| **LobsterAI** | 5 | 10 | 2026.8.28 (2026‑08‑28) | **High** – consistent UI/UX releases, test coverage push |
| **PicoClaw** | 1 | 1 (open) | None (feature‑stable) | **Low** – minimal churn, one high‑priority after‑turn steering issue |
| **Moltis** | 1 | 0 | None | **Low** – single sandbox‑execution bug, little community activity |
| **NanoClaw** | 0 | 0 | None | **Very Low** – no observable activity |
| **NullClaw** | 0 | 0 | None | **Dormant** |
| **IronClaw** | 0 | 0 | N/A (safety flag only) | **Dormant** |
| **ZeptoClaw** | 0 | 0 | None | **Dormant** |
| **TinyClaw** | 0 | 0 | None | **Dormant** |
| **Hermes Agent** | — | — | Summary generation failed | **No data** |

\*Health Score reflects a blend of release cadence, critical bug backlog, and community engagement (High = stable & actively shipping; Medium = busy but with unresolved issues; Low = quiet or single‑point concerns; Very Low/Dormant = no observable activity).

---

### 3. OpenClaw’s Position
* **Advantages vs. Peers** – OpenClaw’s issue/PR volume dwarfs most peers, indicating a large, battle‑tested user base and rapid triage loops. Its “Gateway‑centric” architecture (restart‑safe sessions, config‑write reliability) is a concrete differentiator against the more modular provider‑first designs of CoPaw or the sandbox‑centric focus of ZeroClaw.  
* **Technical Approach Differences** – OpenClaw treats the **Gateway** as a monolithic, stateful orchestrator that must survive restarts; CoPaw leans on **provider abstraction** and streaming MCP protocols; ZeroClaw prioritizes **security sandboxing** and policy granularity. OpenClaw’s channel adapters (Feishu, WhatsApp, Telegram, Discord) are tightly coupled to a central session store, whereas CoPaw separates provider discovery from channel dispatch.  
* **Community Size Comparison** – OpenClaw’s ~900 concurrent issue/PR activities place it in the top tier (≈3‑5× the next largest, CoPaw). This scale fuels both rapid bug discovery and a high‑impact maintenance burden (e.g., many “platinum hermit” bugs awaiting live repro).

---

### 4. Shared Technical Focus Areas
| Focus Area | Projects Highlighting It | Core Need / Pain Point |
|------------|--------------------------|-----------------------|
| **Session / Lane Integrity** | OpenClaw, ZeroClaw, NanoBot | Deterministic handling of concurrent user inputs, avoiding duplicate runs, preserving lane ordering. |
| **Channel Correctness** | OpenClaw, ZeroClaw, LobsterAI | Reliable media handling (WhatsApp images, Feishu captions), encoding utilities, per‑channel limits. |
| **Observability & Silent Failures** | OpenClaw, ZeroClaw, LobsterAI | Failure visibility (tool denials, truncation, memory‑persistence loss), improved error messages. |
| **Sandbox & Security Policies** | ZeroClaw, Moltis | Filesystem/network restrictions, path validation, secure default sandboxes. |
| **Provider Flexibility & MCP Integration** | CoPaw, NanoBot, OpenClaw | Multi‑protocol client support (Streamable‑HTTP, custom thinking styles), unified provider catalog. |
| **Configurable Guardrails** | OpenClaw, CoPaw | Streaming watchdog thresholds, maxTurns/maxToolCalls, circuit breakers for runaway loops. |
| **Cross‑Platform UI / UX** | NanoBot, LobsterAI, PicoClaw | Consistent terminal behavior (Windows cursor reset), web‑UI search, rich‑media attachments. |
| **Memory Lifecycle Management** | CoPaw, ZeroClaw | Decoupling persistence policies, compaction correctness, long‑term recall with privacy controls. |
| **Concurrency & Race Conditions** | ZeroClaw, NanoBot, OpenClaw | Event‑loop blocking, session resurrection, duplicated tool executions. |

---

### 5. Differentiation Analysis
| Project | Feature Focus | Primary Users | Architectural Highlights |
|---------|----------------|---------------|--------------------------|
| **OpenClaw** | End‑to‑end orchestration, restart‑safe Gateway, multi‑channel adapter suite | Enterprise operators running many concurrent agent instances | Monolithic Gateway + session store; strong emphasis on operator‑facing reliability. |
| **CoPaw (QwenPaw)** | Provider abstraction, MCP protocol modernization, modular tool execution | Developers building custom agent pipelines, multi‑model environments | Dual‑protocol MCP client, pluggable recall backends, explicit ProviderAttempt for fall‑backs. |
| **ZeroClaw** | Security‑first sandboxing, policy granularity, architectural RFCs | High‑assurance deployments, edge‑computing, regulated environments | Heavy reliance on RFC/design issues, separation of policy vs. backend, WASM plugin observability. |
| **NanoBot** | CLI ergonomics, cross‑platform UI, lightweight tooling | Power users needing a terminal‑

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-29

---

## 1. Today's Overview

NanoBot continues to experience high development velocity, with **20 pull requests** updated in the past 24 hours and **7 issues** actively discussed. While no new releases were published, significant progress was made on improving stability, memory management, UI/UX enhancements, and internal refactoring. The team focused heavily on addressing regressions in session handling, tool execution, and TUI behavior across platforms—particularly on Windows. There is strong emphasis on architectural cleanliness, including explicit provider routing and modularized tool execution logic.

---

## 2. Releases

No new releases were tagged for NanoBot on this date. Last known stable version remains unlisted in recent activity logs.

🔗 [Releases Page](https://github.com/HKUDS/nanobot/releases)

---

## 3. Project Progress

A total of **8 closed/merged PRs** reflect ongoing maturation efforts:

| PR | Focus Area | Description |
|----|------------|-------------|
| [#5560](https://github.com/HKUDS/nanobot/pull/5560) | CLI | Makes `nanobot` the default agent command for improved usability. |
| [#5574](https://github.com/HKUDS/nanobot/pull/5574) | Providers | Introduces `ProviderAttempt`, making fallback attempts explicit and traceable. |
| [#5569](https://github.com/HKUDS/nanobot/pull/5569) | Agent Tools | Extracts tool execution boundary from `AgentRunner` into a functional module. |
| [#5579](https://github.com/HKUDS/nanobot/pull/5579) | Sessions | Moves persistence off event loop for better performance and concurrency safety. |
| [#5576/#5577](https://github.com/HKUDS/nanobot/pull/5576), [PR #5577](https://github.com/HKUDS/nanobot/pull/5577) | TUI | Fixes full UI preservation in Herdr panes. |
| [#5575](https://github.com/HKUDS/nanobot/pull/5575) | Memory | Removes outdated `consolidationRatio`. |
| [#5578](https://github.com/HKUDS/nanobot/pull/5578) | Tests | Avoids clipboard status race condition on Windows. |

These changes improve core reliability, extensibility, and cross-platform compatibility.

---

## 4. Community Hot Topics

While there is minimal direct engagement (👍/comments), several issues stand out due to technical depth and impact:

### 🔥 Feature: Add MCP Apps Host Support to WebUI (`#5251`)
- Status: Open
- Author: [yuklcool](https://github.com/yuklcool)
- 💬 2 comments

This request aims to support interactive UIs within WebUI via [MCP Apps](https://github.com/modelcontextprotocol/servers/tree/main/src/apps), enhancing visual interactivity beyond text/image output.

🔗 [Issue #5251](https://github.com/HKUDS/nanobot/issues/5251)

> ⚠️ *Need:* Enable richer app-like experiences inside WebUI using standardized MCP extensions.

---

### 🧠 Allow Custom Provider Thinking Styles (`#4429`)
- Status: Closed (resolved)
- Author: [gkd2323c](https://github.com/gkd2323c)

Adds configurability for reasoning models not following OpenAI conventions, especially relevant for providers like Doubao/VolcEngine.

🔗 [Issue #4429](https://github.com/HKUDS/nanobot/issues/4429)

---

## 5. Bugs & Stability

Several critical bugs are under active resolution:

| Issue | Severity | Summary | Fix PR |
|-------|----------|---------|--------|
| [#5582](https://github.com/HKUDS/nanobot/issues/5582) | High | Cron jobs from quoted/@mentioned turns crash at creation/firing time | [#5587](https://github.com/HKUDS/nanobot/pull/5587) |
| [#5589](https://github.com/HKUDS/nanobot/issues/5589) | High | Discarded sessions revive unexpectedly through deferred queues | [#5589](https://github.com/HKUDS/nanobot/pull/5589) |
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) | Medium | Session persistence blocking event loop → performance degradation | Done |
| [#5581](https://github.com/HKUDS/nanobot/issues/5581) | Low | Cursor position resets after exiting TUI on Windows | [#5581](https://github.com/HKUDS/nanobot/pull/5581) |

Fixes target memory leaks, race conditions, and platform-specific rendering quirks.

---

## 6. Feature Requests & Roadmap Signals

Several emerging themes hint at upcoming priorities:

- **Memory Management Overhaul**
  - [PR #5570/#5571](https://github.com/HKUDS/nanobot/pull/5570): Adds pluggable recall backends with opt-in access control over historical data.
  - Suggests focus on privacy-aware long-term memory usage.

- **Tool Execution Refinement**
  - [PR #5569](https://github.com/HKUDS/nanobot/pull/5569): Modularizes how tools are executed, possibly paving way for plugin-based tool runners.

- **Improved UX Across Platforms**
  - [PR #5581/#5577](https://github.com/HKUDS/nanobot/pull/5581): Targeted fixes for Windows terminal behavior and pane embedding.

Expected near-future additions may include:
✅ Enhanced MCP App integration in WebUI  
✅ Smarter context compaction strategies  
✅ More granular model retry feedback mechanisms  

---

## 7. User Feedback Summary

Users appear satisfied with general workflow improvements but express concerns around:

- **Session lifecycle bugs** causing unexpected persistence/replays (Issue [#5582](https://github.com/HKUDS/nanobot/issues/5582), [#5584](https://github.com/HKUDS/nanobot/issues/5584))
- Need for **better control over model introspection features** like thinking/reasoning modes ([Issue #4429](https://github.com/HKUDS/nanobot/issues/4429))
- Desire for **richer visualizations/UI components** via MCP apps in WebUI ([Issue #5251](https://github.com/HKUDS/nanobot/issues/5251))

On positive side:
- CLI ergonomics improved significantly with root-level agent invocation (#5560)
- Better abstraction layers introduced for memory and tool systems increase modularity.

---

## 8. Backlog Watch

The following items require maintainer attention despite being open for some time:

| Item | Type | Age Estimate | Notes |
|------|------|--------------|-------|
| [#5586](https://github.com/HKUDS/nanobot/issues/5586) | Enhancement | New | Opt-out mechanism for runtime-context history persistence — aligns well with memory overhaul. |
| [#5583](https://github.com/HKUDS/nanobot/issues/5583) | Enhancement | New | Append recovery hints to all raised exceptions — improves error observability. |
| [#5584](https://github.com/HKUDS/nanobot/issues/5584) | Enhancement | New | Bounds replay of reasoning content/tool thinking per turn — affects token cost predictability. |
| [#5585](https://github.com/HKUDS/nanobot/issues/5585) | Enhancement | New | Forward retry wait events to communication channels — improves transparency during failover. |

Longer-term architectural decisions will likely shape these areas; early design input would be valuable.

🔗 [Backlog Filter (Open Issues)](https://github.com/HKUDS/nanobot/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc)

--- 

🔚 *End of Digest — Prepared based on public GitHub activity up to 2026-08-29.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-08-29

## 1. Today's Overview
PicoClaw remained stable with minimal activity today, reflecting continued focus on performance optimization and feature expansion. One issue was actively maintained while two pull requests were submitted—one closed and one open—indicating steady development momentum without major disruptions. The absence of new releases suggests the team is prioritizing bug fixes and incremental improvements over major version bumps at this time.

## 2. Releases
No new releases were published since the last update. The project continues to operate under its existing versioning scheme, allowing ongoing refinement through iterative development cycles.

## 3. Project Progress
- **Closed PR #1349**: Completed work to enhance attachment handling across multiple channels. This PR adds support for parsing QQ channel emoji structures, processing voice/image/video/file messages, and enabling local replies with rich media attachments. The change prioritizes Markdown-based replies where possible, ensuring compatibility with existing UI expectations.
- **Open PR #3347**: Addresses UI responsiveness concerns by implementing optimizations that prevent lag when large amounts of text accumulate in the chat area. The contributor noted they are not a TypeScript or Node.js developer, indicating the fix may involve frontend-specific adjustments or cross-cutting infrastructure improvements.

## 4. Community Hot Topics
- **Issue #3342 (OPEN)** – *After-Turn Steering Mode*  
  This high-priority issue remains active and stale, focusing on improving how the system handles concurrent user inputs during active turns. When a user sends a second message while the agent is still processing the first, the current behavior skips pending tool calls and injects the new message into the conversation. The proposed solution involves adding an opt-in "after-turn" steering mode that routes queue-busy session messages appropriately rather than interrupting the running turn. [View Issue #3342](https://github.com/sipeed/picoclaw/issues/3342)

## 5. Bugs & Stability
| Severity | Item | Details |
|----------|------|---------|
| Medium | After-Turn Steering Mode (#3342) | Active issue affecting multi-turn interaction flow. Users experience unintended message injection when rapid follow-up messages arrive during an active turn. Requires careful state management to preserve ongoing tool executions while allowing controlled interruption. |
| Low | Interface Lag (#3347) | Performance degradation observed when chat history contains extensive text blocks. The fix aims to reduce rendering overhead but is still being validated across desktop and mobile browsers. |

No critical bugs were reported today beyond the ongoing discussion around issue #3342. The closed PR #1349 did not introduce any known stability regressions.

## 6. Feature Requests & Roadmap Signals
- **Rich Media Attachments** – Supported via PR #1349. Users can now receive and reply with voice, images, videos, and files locally uploaded before sending, expanding the platform's multimedia capabilities.
- **Interface Optimization** – PR #3347 targets UI responsiveness, addressing a common pain point for users with lengthy chat histories. While not a new feature per se, it signals ongoing effort to improve perceived performance.
- **After-Turn Steering** – The open issue #3342 represents a significant architectural improvement aimed at making the agent more robust in fast-paced conversational scenarios.

## 7. User Feedback Summary
Users have expressed interest in more flexible control over input handling, particularly regarding concurrent messaging. The request for better "after-turn" modes aligns with feedback about maintaining context continuity while allowing timely responses. Additionally, the desire for richer media interactions (voice, video, files) reflects growing demand among power users who rely on multimodal communication within the claw environment.

Overall sentiment appears positive toward recent progress on attachment support, though the unresolved after-turn steering issue indicates an opportunity to further refine the core interaction model.

## 8. Backlog Watch
- **[#3342] Open – After-Turn Steering Mode**  
  Still active and unaddressed. Critical for maintaining smooth multi-turn conversations. Requires prioritization to avoid degrading user experience during complex tasks.
- **[#3347] Open – Fix Laggy Interface**  
  In progress. Monitor implementation to ensure broad browser compatibility (desktop + mobile).
- **[#1349] Closed – Rich Attachment Support**  
  Successfully merged. No backlog items remain from this PR.

---

**Summary:** PicoClaw shows healthy maintenance activity with a focus on quality-of-life improvements (UI performance) and expanded functionality (rich media attachments). The primary technical challenge remains the after-turn steering issue, which could significantly enhance the agent's robustness in real-world usage. No major release is planned for the near term.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026-08-29**  
*Data source: github.com/qwibitai/nanoclaw (reflected as `nanocoai/nanoclaw` in issue

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-29

---

## 1. Today's Overview

LobsterAI maintains a high-velocity development cadence, with **10 PRs updated and 1 new release** pushed in the past 24 hours. The project closed out its **2026.8.28** release yesterday (built on the prior 2026.8.24 release branch), and community engagement remains healthy with 5 issues receiving updates. Three issues were closed — two community requests (v4 pro update, WeChat group expansion) and a critical test-coverage PR (#1154). Two stale issues from late March (#1149, #1151) remain open and may be slipping toward inactivity without maintainer action. Overall health is solid but the team should monitor the growing stale-issue backlog.

---

## 2. Releases

### 🆕 LobsterAI 2026.8.28
**Released:** 2026-08-28 | [Release page](https://github.com/netease-youdao/LobsterAI/releases) | [PR #2572](https://github.com/netease-youdao/LobsterAI/pull/2572)

This is a quick-follow release on top of the **2026.8.24** release, patching several UI-level issues:

| PR | Author | Change |
|---|---|---|
| [#2525](https://github.com/netease-youdao/LobsterAI/pull/2525) | @liuzhq1986 | Login guide documentation |
| [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) | @liuzhq1986 | Add plan model catalog in settings |

**Key improvements:**
- Settings panel now includes a dedicated **Plan Model Catalog** for easier model management.
- Login flow documentation has been updated.

**Breaking changes:** None.  
**Migration notes:** No special action required; update via standard build or release artifact.

---

## 3. Project Progress

### Merged / Closed PRs (9 merged/closed in last 24h)

| PR | Status | Author | Summary |
|---|---|---|---|
| [#2572](https://github.com/netease-youdao/LobsterAI/pull/2572) | Closed | @liuzhq1986 | Release/2026.8.24 base for 2026.8.28 |
| [#2571](https://github.com/netease-youdao/LobsterAI/pull/2571) | Closed | @liuzhq1986 | Fix phone nickname display |
| [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570) | Closed | @liuzhq1986 | Resolve phone masking merge conflict; replace test fixtures with synthetic data |
| [#2569](https://github.com/netease-youdao/LobsterAI/pull/2569) | Closed | @liuzhq1986 | Fix phone nickname (variant) |
| [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568) | Closed | @Mind-Hand | Collapse optional models into "More Models" section; add server-synced sidebar banner scheduling with version gating and local cache expiry |
| [#2567](https://github.com/netease-youdao/LobsterAI/pull/2567) | Closed | @liuzhq1986 | 2026.8.24 release fixes |
| [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) | Closed | @YDXyydsyyds | **In-session Ctrl+F search** — TreeWalker + CSS Custom Highlight API for precise, keyboard-navigable keyword search within chat sessions |
| [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156) | Closed | @MaoQianTu | Vitest unit tests for `commandSafety.ts` and `coworkMemoryJudge.ts` (security & memory modules) |
| [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) | Closed | @MaoQianTu | **Bug fix:** `buildOpenAIChatCompletionsURL` off-by-one slice error causing malformed Google Gemini URLs |

### Open PRs (1 remaining open)

| PR | Status | Author | Summary |
|---|---|---|---|
| [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) | Open | @tzhouzhou | New agents not loading task history — user must switch away and back to see records |

**Highlight feature:** The **in-session search (Ctrl+F)** PR (#1155) is a significant UX enhancement for power users working with long conversations, using modern browser APIs for performance.

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Status | Comments | Summary | Link |
|---|---|---|---|---|
| #2489 | Closed | 3 | "快更新v4pro！" — User urgently requesting v4 Pro release | [Link](https://github.com/netease-youdao/LobsterAI/issues/2489) |
| #2536 | Closed | 2 | WeChat group is full; user requesting a new group | [Link](https://github.com/netease-youdao/LobsterAI/issues/2536) |
| #1154 | Closed | 2 | Vitest tests for `commandSafety` and `coworkMemoryJudge` | [Link](https://github.com/netease-youdao/LobsterAI/issues/1154) |
| #1149 | Open | 1 | Vitest tests for `coworkMemoryExtractor` | [Link](https://github.com/netease-youdao/LobsterAI/issues/1149) |
| #1151 | Open | 1 | Bug: `buildOpenAIChatCompletionsURL` malformed URLs for Gemini | [Link](https://github.com/netease-youdao/LobsterAI/issues/1151) |

**Analysis:** The top two issues (#2489, #2536) are community engagement/support requests rather than technical items, indicating strong user interest in both product upgrades (v4 Pro) and community channel expansion. The test-coverage issues (#1154, #1149) signal the team's commitment to code quality — #1154 is now resolved, but #1149 (35 test cases for `coworkMemoryExtractor`) remains open and should be prioritized to avoid regression risk in the memory subsystem.

---

## 5. Bugs & Stability

| Bug | Severity | Status | Fix PR | Link |
|---|---|---|---|---|
| `buildOpenAIChatCompletionsURL` off-by-one slice truncates `/` for Gemini `/v1` baseURLs | **High** | Fixed | [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) merged | [Issue #1151](https://github.com/netease-youdao/LobsterAI/issues/1151) |
| New agent task records not loading until agent switch | **Medium** | Open | None | [PR #1146](https://github.com/netease-youdao/LobsterAI/pull/1146) |
| Phone masking merge conflict in account menu | **Low** | Fixed | [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570) merged | — |

**Assessment:** The Gemini URL bug (#1151/#1153) was a production-affecting regression for users integrating with Google Gemini endpoints; its prompt resolution is a positive sign. The unfixed agent task-record bug (#1146) is a moderate UX regression that has been open since March — **maintainers should assign and address before it accumulates duplicate reports.**

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Signals | Likely in Next Version? |
|---|---|---|---|
| v4 Pro update | Community issue #2489 (3 comments) | Strong user demand, "urgent" framing | Probable |
| WeChat group expansion | Community issue #2536 | Support channel bottleneck | Community action, not code |
| In-session Ctrl+F search | PR #1155 (merged) | Already shipped in 2026.8.28 | ✅ Shipped |
| "More Models" collapsible section | PR #2568 (merged) | Already shipped in 2026.8.28 | ✅ Shipped |
| Sidebar banner scheduling with version gating | PR #2568 (merged) | Already shipped in 2026.8.28 | ✅ Shipped |
| Plan Model Catalog in settings | PR #2530 (merged) | Already shipped in 2026.8.28 | ✅ Shipped |
| Expanded Vitest test coverage (`coworkMemoryExtractor`) | Issue #1149 | Stale since March; needs maintainer review | Uncertain |

**Roadmap signal:** The cluster of merged PRs (search, model management UI, banner scheduling) indicates the team is investing heavily in **UI/UX refinement and configurability**. Test coverage expansion is ongoing but at risk of stalling on less-pressured modules.

---

## 7. User Feedback Summary

| Theme | Sentiment | Evidence |
|---|---|---|
| **Product upgrade appetite** | ⚠️ Frustrated | Issue #2489: "快更新v4pro！" — user feels update pace is too slow |
| **Community support channels** | ⚠️ Blocked | Issue #2536: WeChat group at capacity; no alternative support channel cited |
| **Memory module reliability** | ✅ Positive | Issue #1154: contributor highlights critical modules, tests now added |
| **URL integration robustness** | ⚠️ Frustrated | Bug #1151: Gemini users hit broken URLs before patch #1153 |
| **Agent lifecycle UX** | ⚠️ Frustrated | PR #1146: new agents missing task history is a friction point for power users |

**Key pain points:** Users are frustrated by the lack of a public v4 Pro timeline and by community support channel capacity. Technical users integrating with third-party models (Gemini) experienced a blocking bug that is now resolved. The agent task-history bug remains a live friction point.

---

## 8. Backlog Watch

⚠️ **Items needing maintainer attention** (stale or unaddressed):

| Item | Type | Age | Last Updated | Priority | Link |
|---|---|---|---|---|---|
| Vitest tests for `coworkMemoryExtractor` | Issue/PR | ~5 months | 2026-08-28 | Medium | [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149) / [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149) |
| Fix agent task records for new agents | PR | ~5 months | 2026-08-28 | Medium-High | [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) |
| `buildOpenAIChatCompletionsURL` Gemini bug | Issue | ~5 months | 2026-08-28 | **Resolved** (see #1153) | [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) |

**Note:** The off-by-one URL bug (#1151) was opened on 2026-03-31 alongside the test-coverage issues. Its PR #1153 was only merged in the past 24 hours — a **~5-month turnaround** that suggests the team has a backlog of long-running technical issues. Prioritizing the agent task-record bug (#1146) and the `coworkMemoryExtractor` tests (#1149) would reduce the stale backlog and improve both stability and regression safety.

---

*Digest generated for LobsterAI (netease-youdao/LobsterAI) on 2026-08-29. Data sourced from GitHub API activity for the preceding 24 hours.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-08-29

## Today's Overview

As of August 29, 2026, the Moltis project remains relatively quiet in terms of development activity. No new pull requests or releases were recorded in the past 24 hours, and only one issue was updated. The sole activity centers around a newly reported bug related to sandbox execution after node addition, indicating potential instability in that specific workflow. While no regressions or feature updates occurred today, this open issue warrants immediate attention from maintainers to ensure continued reliability.

## Releases

No new releases were published within the last 24 hours.

## Project Progress

There were no merged or closed pull requests during the day, suggesting minimal active development or review cycles currently underway.

## Community Hot Topics

The most prominent community topic revolves around **Issue #1246**, filed by user *maop* on August 28, 2026:

- [Issue #1246 – Can't run on sandbox after a node is added](https://github.com/moltis-org/moltis/issues/1246)  
  This bug report highlights an issue where Moltis fails to execute properly within a sandbox environment following the addition of a new node. As it currently has zero comments and reactions, there’s limited visibility into its impact scope—but given its nature, it could affect users working with dynamic node configurations in restricted environments.

## Bugs & Stability

| Rank | Bug Description | Severity | Status | Fix PR |
|------|------------------|----------|--------|--------|
| 1    | Cannot run on sandbox after adding a node | High     | Open   | None   |

This defect should be prioritized due to implications for secure or isolated execution contexts.

GitHub Link: [Issue #1246](https://github.com/moltis-org/moltis/issues/1246)

## Feature Requests & Roadmap Signals

There are no newly surfaced feature requests as of today.

## User Feedback Summary

User *maop* reported difficulty running Moltis inside a sandbox post-node integration, suggesting possible environment-specific incompatibilities. Their submission includes adherence to standard pre-flight checks but lacks detailed reproduction steps or logs, which may slow triage efforts.

GitHub Link: [Issue #1246](https://github.com/moltis-org/moltis/issues/1246)

## Backlog Watch

Currently, there are no long-standing critical issues or pull requests requiring urgent maintainer intervention beyond the newly raised bug (#1246). Continued monitoring of unresolved issues will help identify patterns of recurring problems or neglect.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-29

## 1. Today's Overview
The project is in an intense beta iteration phase for the upcoming v2.2.0 release, with high development velocity (45 issues and 36 PRs updated in the last 24 hours). Activity is heavily concentrated on stabilizing the new Streamable-HTTP MCP client, optimizing provider/model discovery, and refining the startup experience. While the core engine is advancing rapidly, the community is actively flagging network compatibility and multi-turn reliability issues that require immediate attention. Overall project health is robust, characterized by rapid feature delivery and responsive bug-fixing, though edge-case stability (Docker/Desktop network stacks) remains a friction point.

## 2. Releases
Two new versions were released leading into this digest:
*   **v2.2.0-beta.3**: Focuses heavily on MCP protocol modernization and teardown resilience.
    *   **New Feature**: Added a Streamable-HTTP dual-protocol MCP client (`HttpAutoClient`) that supports the latest 2026-07-28 protocol with legacy fallback to older handshakes (PR #7330).
    *   **Bug Fix**: Aborts hung session RPCs during teardown and recovers stale `list_tools` calls after a transport failure or server restart (PR #7329).
*   **v2.2.0-beta.2**: Focused on workspace stability and testing infrastructure.
    *   **Bug Fix**: Made startup failure cleanup cancellation-safe, preventing resource leaks during failed initialization (PR #7194).
    *   **Testing**: Boosted console end-to-end coverage with 23 targeted cases and extended assertions (PR #7327).

## 3. Project Progress (Merged/Closed PRs)
Recent merged PRs demonstrate a strong focus on reliability, performance, and provider accuracy:
*   **MCP & Protocol**: PR [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) and [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) were closed, shipping the dual-protocol client and hang recovery mechanisms.
*   **Provider & Model Discovery**: PR [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) restored reliable model discovery for custom OpenAI-compatible providers. PR [#7386](https://github.com/agentscope-ai/QwenPaw/pull/7386) migrated legacy per-model `max_tokens` values while preserving encrypted credentials. PR [#7390](https://github.com/agentscope-ai/QwenPaw/pull/7390) added regression guards to align the Aliyun Coding Plan catalog with the official DashScope catalog.
*   **Performance & Startup**: PR [#7384](https://github.com/agentscope-ai/QwenPaw/pull/7384) introduced a shared A-tier deferred startup architecture, exposing health checks and version info before the full Python app initializes. PR [#7388](https://github.com/agentscope-ai/QwenPaw/pull/7388) fixed ACP runtime limits to use `max_completion_tokens`. PR [#7380](https://github.com/agentscope-ai/QwenPaw/pull/7380) reduced the test suite wall-clock time by 41%.
*   **Integrations**: PR [#7381](https://github.com/agentscope-ai/QwenPaw/pull/7381) added stale connection detection and SDK request bounding for DingTalk. PR [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) bounded oversized single-line tool results to prevent context overflow.
*   **Contract Testing**: PR [#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267) made channel contract checks portable and complete across different OS code pages.
*   **Versioning**: PR [#7393](https://github.com/agentscope-ai/QwenPaw/pull/7393) bumped the version to v2.2.0b3.

## 4. Community Hot Topics
The most discussed items reveal where user pain points and architectural debates lie:
*   **Issue [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) (13 comments, OPEN)**: Discussion on the QwenPaw Hub multi-tenant edition coming in 2.2.0. The community is actively requesting roadmap items, signaling a high demand for team collaboration and admin

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-29

## 1. Today's Overview
ZeroClaw shows **very high architectural activity** with 39 issues and 50 PRs updated in the last 24 hours. The project is in a heavy RFC and stabilization phase — multiple high-risk architectural proposals (runtime-owned sessions, unified attachments, memory lifecycle decoupling, sandbox policy granularity, WASM plugin composability) are under active maintainer review. Four PRs were merged/closed, primarily bug fixes. No new release was cut. The velocity suggests a major architectural milestone is being prepared, with strong focus on security boundaries, provider reliability, and channel/runtime separation.

---

## 2. Releases
**No new releases** published today.

---

## 3. Project Progress (Merged/Closed PRs & Issues)
| PR/Issue | Title | Type | Status |
|----------|-------|------|--------|
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork panics → daemon SIGSEGV after tool-heavy turn | Bug (P1) | **Closed** |
| [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) | `forbidden_paths` unreachable under allowed_roots/workspace | Bug (P1, Security) | **Closed** |
| [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) | Running SOP jobs have no operator cancellation path (web) | Bug (P1) | **Closed** |
| [#9711](https://github.com/zeroclaw-labs/zeroclaw/issues/9711) | Clean up Arduino flash temp dirs on every exit | Bug (P3, Hardware) | **Closed** |
| [#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329) | Resilient wrapper truncation shadows loop-level context overflow recovery | Bug (P2) | **Closed** |

**Net effect**: Three P1 crashes/security gaps resolved (skill-review panic, path policy bypass, SOP cancellation), one P3 cleanup, and one provider resilience fix. All were in-progress and now closed.

---

## 4. Community Hot Topics (Most Discussed)
| Item | Comments | Area | Core Need |
|------|----------|------|-----------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC: Runtime-owned conversation sessions & transport surface adapters | 27 | Architecture, Runtime, Channel, Security | **Ownership boundary**: Move session lifecycle into runtime; define typed ingress envelopes for all entry points (web, ACP, channels). High risk, needs maintainer ratification. |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: Decouple memory lifecycle policy from storage backends | 21 | Memory, Runtime, Gateway | **Separation of concerns**: Stop reimplementing consolidation/governance in every gateway/channel; introduce a policy layer above `Memory` trait. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Unified attachment architecture for web chat & channels | 21 | Channel, Gateway, Runtime, Web | **Consistent attachment handling**: Single architecture for uploads, rendering, and security across web dashboard and all channel adapters. |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) RFC: Provenance, conversation binding, reply contract for internally initiated agent turns | 16 | Runtime, Cron | **Agent-initiated turn semantics**: Define identity stability, binding concurrency, reply lifecycle for cron/background turns. **Accepted**, in implementation. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: Granular sandbox policy — filesystem & network restrictions | 15 | Config, Runtime, Security | **Policy/backend alignment**: Unify application-layer path admission with OS sandbox backends (Bubblewrap, Landlock, Seatbelt) per agent risk profile. In progress. |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) RFC: Make wire protocol first-class in provider construction & onboarding | 15 | Provider, Architecture | **Provider onboarding**: Treat wire protocol (OpenAI, Anthropic, Gemini, etc.) as a first-class config dimension, not an implementation detail. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) [Tracker] Maintainer decision queue for RFCs & design issues | 14 | Process | **Governance**: Active queue for maintainer decisions on RFCs, release policy, coordination. 32 open RFCs/design issues awaiting verdict. |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) RFC: Computer-use support for desktop screen interaction & input control | 12 | Runtime, Tool, Desktop, Security | **Desktop automation**: Bounded approval units, execution-time revalidation, session arming for screen/input control. Maintainer takeover; security clarified. |
| [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) RFC: Define Web bundle/daemon compatibility for `web_dist_dir` | 8 | Gateway, Web, Config | **Deployment contract**: Capability negotiation for explicit filesystem bundle deployments (web dashboard + daemon). |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) RFC: WASM plugin lifecycle observer subscriptions (`PluginCapability::Observer`) | 8 | WASM, Architecture | **Observability hooks**: Use reserved `Observer` capability for host-owned completion sources; avoid new `Hook` capability. |

**Pattern**: The top 10 discussions are all **RFCs or trackers** — ZeroClaw is solving architectural debt and defining contracts before implementation. Security, runtime ownership, and provider/channel boundaries dominate.

---

## 5. Bugs & Stability (Reported/Updated Today)
| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **P1 / High** | [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | Second message during active turn starts parallel run in same session → duplicate work & reply | *In progress* (no PR linked yet) |
| **P1 / High** | [#10427](https://github.com/zeroclaw-labs/zeroclaw/issues/10427) | Advisory scan failed: yanked crate `chacha20 0.10.0` in lockfile | *In progress* (CI-driven) |
| **P2 / Medium** | [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) | Deepgram/OpenAI transcription providers drop `language` hint → non-English voice notes return empty & skipped (Telegram) | [#10431](https://github.com/zeroclaw-labs/zeroclaw/pull/10431) **Open** |
| **P2 / High** | [#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432) | ElevenLabs TTS API key header (`xi-api-key`) not marked sensitive → leaks in logs/traces | *No PR yet* |
| **P2 / High** | [#10195](https://github.com/zeroclaw-labs/zeroclaw/issues/10195) | Manifest schema validators recompile on every config resolution (per-tool/per-channel) | *No PR yet* |
| **P1 / High** | [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | Host launchers resolved *after* workspace cwd → sandbox escape risk | [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) **Open** |
| **P2 / Medium** | [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | Git operations not bounded by `allowed_roots` → workspace escape | [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) **Open** |
| **P2 / Medium** | [#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064) | Telegram approval cards don't self-destruct after operator tap | [#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064) **Open** |

**Critical cluster**: Concurrency bug (#10408), sandbox bypasses (#10381, #10337), and credential leakage (#10432) are all P1/P2 with open fix PRs or in-progress. The yanked-crate advisory (#10427) blocks CI.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Runtime-owned session & transport adapters** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (27 comments, P2, high risk) | High — foundational for ACP/web/channel unification |
| **Unified attachment architecture** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (21 comments, P2, high risk) | High — blocks consistent UX across web & channels |
| **Memory lifecycle policy layer** | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) (21 comments, P2, high risk) | Medium-High — reduces duplication in gateways/channels |
| **Granular sandbox policy (fs/net)** | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (15 comments, P2, in progress) | High — security hardening, aligns with risk profiles |
| **Wire protocol as first-class provider config** | [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) (15 comments, P2) | Medium — improves provider onboarding/extensibility |
| **Computer-use (desktop screen/input)** | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (12 comments, P2, high risk) | Medium — desktop automation, security-sensitive |
| **WASM plugin observer capability** | [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) (8 comments, P2) | Medium — enables observability without new host APIs |
| **Web bundle/daemon compatibility contract** | [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) (8 comments, P2) | Medium — deployment reliability |
| **Composable WASM plugin runtime (core APIs, typed extension points)** | [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) (4 comments, P2, high risk) | Medium — long-term extensibility for tools/channels/memory/skills |
| **AnySearch as built-in `web_search_tool` provider** | [#10336](https://github.com/zeroclaw-labs/zeroclaw/issues/10336) (1 comment, P3) | Low — niche provider, easy follow-up |
| **SSE streaming from `POST /webhook`** | [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) (3 comments, P2, high risk) | Medium — improves hosted Path A UX |
| **Gemini speech-to-speech broker channel** | [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) (tracker for accepted #8780) | High — implementation tracker for accepted RFC |

**Prediction**: The next version will likely include **runtime-owned sessions (#9487)**, **unified attachments (#9488)**, **granular sandbox policy (#6996)**, and **Gemini Live broker channel (#10406)**. Memory lifecycle decoupling (#6850) and wire-protocol-first providers (#8396) are strong candidates but may slip.

---

## 7. User Feedback Summary (Pain Points & Use Cases)
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **No cancellation for running SOP jobs** | [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) (S1 - workflow blocked) | Operators cannot stop long-running SOPs; only Approve/Deny during pending state. **Closed** but highlights UX gap. |
| **Parallel runs on rapid messages** | [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) (S2) | Duplicate work, duplicate replies, session corruption risk. Active bug. |
| **Non-English voice notes silently dropped** | [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) (S2) | Telegram users sending Italian voice notes get no transcription; no error surfaced. Fix PR open. |
| **Credential leakage in logs** | [#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432) (S2) | ElevenLabs API key appears in request/response logs. Security regression. |
| **Schema validator recompilation on every config load** | [#10195](https://github.com/zeroclaw-labs/zeroclaw/issues/10195) | Per-tool/per-channel startup latency; regex-bounding work didn't fix this. |
| **Git operations escape `allowed_roots`** | [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | Workspace sandbox bypass via linked worktrees. Fix PR open. |
| **Host launcher resolution order** | [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | CWD applied before canonical path resolution → potential sandbox escape. Fix PR open. |
| **Telegram approval cards persist after tap** | [#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064) | UX confusion; stale UI. Fix PR open. |

**Overall sentiment**: Users (and maintainers) are hitting **security boundaries, concurrency correctness, and deployment/ops friction**. The project is responding with architectural RFCs rather than point fixes — indicating maturity but also accumulated debt.

---

## 8. Backlog Watch (Stale/Unanswered High-Value Items)
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue for RFCs | 56 days | Open, 14 comments | **32 RFCs/design issues** await maintainer verdict. Bottleneck for all architectural work. |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) Memory lifecycle policy decoupling | 99 days | Open, 21 comments | Cross-cutting; every gateway/channel reimplements consolidation. Blocked on maintainer review. |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) Runtime-owned sessions | 32 days | Open, 27 comments | **Highest-comment RFC**; defines ownership boundary for all entry points. Needs ratification. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) Unified attachment architecture | 32 days | Open, 21 comments | Coupled to #9487; web & channels need consistent attachment handling. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) Granular sandbox policy | 93 days | In progress, 15 comments | Security hardening; application vs OS sandbox drift. Maintainer review needed. |
| [#8

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*