# OpenClaw Ecosystem Digest 2026-09-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-07 01:56 UTC

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

# OpenClaw Project Digest — 2026-09-07

## 1. Today's Overview

OpenClaw shows **very high activity** with 500 issues and 500 PRs updated in the last 24 hours. The project is in active maintenance mode with no new releases today, but significant bug-fixing and refactoring work underway. The issue backlog reveals systemic stability concerns around session management, gateway event-loop blocking, child-process leaks, and Windows-specific regressions. PR velocity is strong with 192 merged/closed PRs, though 308 remain open — many tagged "ready for maintainer look" or "needs proof," indicating a review bottleneck.

## 2. Releases

**No new releases today.** The latest version appears to be 2026.9.2 (referenced in issues #140129, #139847, #139578). Several issues reference recent updates (2026.8.1 → 2026.9.1 → 2026.9.2) causing regressions, suggesting a rapid release cadence with incomplete validation.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Area | Summary |
|----|------|---------|
| [#130860](https://github.com/openclaw/openclaw/pull/130860) | Discord, Gateway, Agents | **Closed (superseded)** — Preserve meeting logs through voice reconnects; landed via 7 focused successor PRs |
| [#125972](https://github.com/openclaw/openclaw/pull/125972) | Gateway, Agents | **Closed** — Fix Claude live sessions losing prompt cache on every captured turn |
| [#125528](https://github.com/openclaw/openclaw/pull/125528) | Gateway, Commands, Anthropic | **Closed** — Apply thinking levels end-to-end; keep live sessions warm for prompt-cache reuse |
| [#140580](https://github.com/openclaw/openclaw/pull/140580) | Portals, Gateway | **Closed** — Fix IPv6 loopback reachability with IPv4-only localhost records |

**Key advancement:** The Discord voice-reconnect fix (#130860) and Claude CLI prompt-cache stability fixes (#125972, #125528) represent meaningful UX improvements for real-time and LLM-integration paths.

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | 👍 | Core Issue |
|------|----------|-----|------------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 14 | 1 | **Child-process leak (zombies)** — Hook/tool children unreaped, causing runtime degradation over time. Tagged P1, regression, "gold shrimp" rating. |
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | 14 | 0 | **Malformed JSON from provider** — Intermittent "Provider completed tool call with malformed JSON arguments" on v2026.8.1 (Claude Sonnet 5). |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 12 | 0 | **Gateway event-loop blocking** — Synchronous agent persistence/transcript maintenance blocks gateway at scale. "Diamond lobster" severity. |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | 12 | 1 | **Subagent context pollution** — Child-session completion injects too much content into parent, bloating context. |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) | 12 | 0 | **Overflow retry silent success** — Retry ends with toolResult but no final assistant response or delivery. |
| [#137813](https://github.com/openclaw/openclaw/issues/137813) | 11 | 0 | **Windows gateway won't start** — New `--task-supervisor` flag exits 0 silently; child never spawns (P0, release blocker). |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | 10 | 4 | **Docs ahead of release** — `IsolatedSessions` documented but not in v2026.3.13. |

**Underlying needs:** Users are hitting **scale/reliability walls** — zombie processes, event-loop stalls, session-state corruption, and Windows breakage. The "diamond lobster" and "platinum hermit" ratings indicate these affect production multi-agent deployments.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0 / Release Blocker** | [#137813](https://github.com/openclaw/openclaw/issues/137813) | Windows gateway never starts after 2026.9.1 — `--task-supervisor` exits 0 silently | No |
| **P0 / Release Blocker** | [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live docs feature (`IsolatedSessions`) not in released version | No |
| **P1 / Crash Loop** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes → zombie accumulation → runtime degradation | No |
| **P1 / Crash Loop** | [#119720](https://github.com/openclaw/openclaw/issues/119720) | Sync persistence blocks gateway event loop at scale | No (partial fixes in #133925, #134062) |
| **P1 / Session State** | [#132762](https://github.com/openclaw/openclaw/issues/132762) | Overflow retry succeeds on toolResult without final delivery | No |
| **P1 / Session State** | [#127148](https://github.com/openclaw/openclaw/issues/127148) | Codex `sessions.compact` acquires second app-server → active-writer conflict | No |
| **P1 / Message Loss** | [#139847](https://github.com/openclaw/openclaw/issues/139847) | Message sent during active reply run dropped — "no active tool authority snapshot" (regression in 2026.9.2) | No |
| **P1 / Crash Loop** | [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming pegs gateway event loop ~10 min; short-term recall never persists | No |
| **P2 / Regression** | [#135111](https://github.com/openclaw/openclaw/issues/135111) | Intermittent malformed JSON from provider on v2026.8.1 | No |
| **P2 / Regression** | [#136203](https://github.com/openclaw/openclaw/issues/136203) | Windows de-DE upgrade leaves Doctor blocked, legacy workspace state | No |
| **P2 / Crash** | [#137729](https://github.com/openclaw/openclaw/issues/137729) | Unguarded `.trim()` on undefined in transcript replay/error classification | No |
| **P2 / Data Loss** | [#124393](https://github.com/openclaw/openclaw/issues/124393) | Transcript rewrite deletes concurrent rows, reports success | No |
| **P2 / UX** | [#140129](https://github.com/openclaw/openclaw/issues/140129) | Anthropic cache stuck at ~46k prefix; history rewritten every turn | No |
| **P2 / UX** | [#140535](https://github.com/openclaw/openclaw/issues/140535) | Discord `/new` returns "No reply generated", doesn't reset session | No |

**Pattern:** Regressions cluster around **2026.8.1 → 2026.9.2** updates. Windows, session persistence, and provider-integration paths are most fragile.

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#99583](https://github.com/openclaw/openclaw/issues/99583) | **Intelligent session auto-titling** — Lazy generation, cheap models, topic-aware renames (7 comments, 2 👍) | Medium — UX improvement, low risk |
| [#51572](https://github.com/openclaw/openclaw/issues/51572) | **Fire session-memory hook on reset/prune** — Not just compaction (8 comments, 1 👍) | High — Fixes silent context loss |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | **Multiple Azure/Teams bots per gateway** — Currently single bot only (8 comments, 1 👍) | Medium — Enterprise demand |
| [#120244](https://github.com/openclaw/openclaw/issues/120244) | **Cron maintenance window with role isolation** — Defer non-roster work (6 comments) | Medium — Operational need |
| [#14376](https://github.com/openclaw/openclaw/issues/14376) | **Reason-aware cron guardrails** — Quota/auth/rate-limit aware backoff (5 comments) | High — Prevents billing runaway |
| [#84242](https://github.com/openclaw/openclaw/issues/84242) | **Expose memory-lancedb tools to agents** — Registered but not callable (5 comments, 3 👍) | High — Unblocks vector memory |

**Roadmap inference:** Next version will likely prioritize **stability fixes** (P0/P1 bugs) over features, but memory-system completeness (#84242, #51572) and cron reliability (#14376) have strong community pull.

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Update/upgrade fragility** | #134896: "5-blocker gateway restart cascade + doctor --fix self-referential failure on legacy workspace state"; #136203: Windows upgrade requires manual interventions |
| **Session/context management broken at scale** | #119720: Gateway event-loop blocked by sync persistence; #54488: Followup drain monopolizes lane 20-30min; #113701: Large tool outputs exceed context, compaction can't recover |
| **Windows as second-class platform** | #137813: Gateway won't start; #136203: de-DE locale breaks Doctor; #140010: Sleep/resume causes 30-60s WebSocket failures |
| **Provider integration flakiness** | #135111: Malformed JSON from Claude; #132720: claude-cli 410 session_expired after update; #97335: Cron fallback model fails |
| **Silent data loss** | #112259: Inbound messages silently dropped; #139847: Messages during active reply dropped; #124393: Transcript rows deleted on rewrite |
| **Observability gaps** | #139215: Cron ticks silently swallowed; #119454: Stuck-session recovery self-suppresses; #92241: Stale module paths after rollback |

**Sentiment:** Frustration with **regression density** in recent releases. Users report spending hours on manual recovery after updates. The "diamond lobster" / "platinum hermit" tags on many issues indicate these hit serious production deployments.

## 8. Backlog Watch — Stale High-Impact Items Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 70 days | Open, needs-info | **Zombie process leak** — Fundamental resource management bug; degrades all long-running deployments |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 33 days | Open, needs-product-decision | **Gateway scalability blocker** — Sync persistence blocks event loop; partial fixes landed but core issue remains |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | 166 days | Open, no fix PR | **Session lane starvation** — 20-30min inbound dispatch stall; affects all channel integrations |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | 73 days | Open, needs-product-decision | **Subagent context pollution** — Architectural; parent sessions inherit child's token bloat |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | 174 days | Open, needs-maintainer-review | **Docs/release drift** — Feature documented but not shipped; erodes trust |
| [#137813](https://github.com/openclaw/openclaw/issues/137813) | 3 days | Open, P0 | **Windows gateway broken** — Release blocker; no workaround |
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | 6 days | Open, needs-live-repro | **Provider JSON corruption** — Intermittent but user-visible; affects Claude Sonnet 5 path |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | 65 days | Open, needs-live-repro | **Memory dreaming wedges gateway** — 10-min event-loop stall; requires watchdog kill |

**Maintainer capacity signal:** 308 open PRs with many "ready for maintainer look" suggests review bandwidth is the primary bottleneck. Several P0/P1 issues have no fix PR despite clear reproduction steps.

---

**Overall Health Assessment:** 🟡 **Degraded** — High velocity but accumulating critical regressions in recent releases. The project needs a **stabilization sprint** (Windows, session persistence, process management) before feature work. The review backlog (308 open PRs) must be cleared to unblock fixes for P0/P1 issues.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Agent Ecosystem (2026-09-07)

## 1. Ecosystem Overview
The personal AI assistant and agent open-source ecosystem exhibits diverse maturity levels, from highly active projects like OpenClaw and CoPaw to dormant repositories such as TinyClaw. Projects are converging around common technical challenges including session management, gateway reliability, and cross-platform compatibility, while differing significantly in architectural approaches and feature priorities. The landscape reflects a growing emphasis on production-grade stability, with several projects prioritizing bug fixes and security hardening over new feature development. Community-driven innovation remains strong, particularly around real-time communication integrations and memory systems.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score |
|---------|-------------|-----------|----------|--------------|
| OpenClaw | 500 | 500 | None | 🟡 Degraded |
| NanoBot | 0 | 13 | None | 🟢 Stable |
| Hermes Agent | 50 | 50 | None | 🟡 Active |
| PicoClaw | 4 | 2 | None | 🟡 Moderate |
| NanoClaw | 2 | 16 | None | 🟢 Stable |
| NullClaw | 0 | 1 | None | 🟢 Stable |
| IronClaw | 0 | 9 | None | 🟡 Maintenance |
| LobsterAI | 1 | 0 | None | 🟡 Idle |
| CoPaw | 24 | 12 | None | 🟢 Active |
| ZeptoClaw | 5 | 8 | None | 🟢 Healthy |
| ZeroClaw | 33 | 50 | None | 🟢 Active |
| TinyClaw | 0 | 0 | None | ⚪ Inactive |

## 3. OpenClaw's Position

**Advantages vs Peers:**
OpenClaw demonstrates the highest development velocity with 500 issues and PRs updated in 24 hours, significantly outpacing competitors. Its modular architecture supporting Discord, Claude CLI integration, and gateway services creates a comprehensive platform for multi-channel agent deployment. The project's extensive contributor base enables rapid iteration across diverse integration points.

**Technical Approach Differences:**
Unlike NanoClaw's focused provider contract standardization or ZeptoClaw's security-first Rust implementation, OpenClaw employs a broad integration strategy with extensive plugin ecosystems. Its gateway-based approach contrasts with CoPaw's console-centric design, favoring distributed deployment models over centralized interfaces.

**Community Size Comparison:**
With 500 active issues/PRs daily compared to ZeptoClaw's 13 total activities and CoPaw's 36 combined, OpenClaw maintains an order-of-magnitude larger community engagement level.

## 4. Shared Technical Focus Areas

Multiple projects identify critical requirements around:

**Session Management & Persistence:**
- OpenClaw (#119720, #127148), Hermes Agent (#92837), NanoBot (#5580) all require offloading persistence from event loops
- ZeptoClaw (#664) and ZeroClaw (#9487) RFC discussions focus on session transport decoupling

**Cross-Platform Reliability:**
- Windows compatibility issues plague OpenClaw (#137813), Hermes Agent (#104666), NanoClaw, and ZeroClaw (#7462)
- Process management problems span OpenClaw (#97616) and ZeptoClaw (#644)

**Provider Integration Stability:**
- Malformed JSON handling affects OpenClaw (#135111) and Hermes Agent
- Gateway reliability concerns emerge in OpenClaw, ZeptoClaw, and ZeroClaw contexts

**Memory Systems:**
- Vector memory exposure requested in OpenClaw (#84242) and ZeptoClaw
- Context pollution mitigation needed across OpenClaw (#96975) and NanoClaw

## 5. Differentiation Analysis

**Feature Focus:**
- **OpenClaw**: Broad integration platform targeting real-time communication (Discord, Telegram)
- **ZeptoClaw**: Security-hardened Rust implementation focusing on privilege separation
- **CoPaw**: Console-based UX emphasizing visual feedback and workflow orchestration
- **NanoBot**: Developer tooling focus with MCP management and browser-based setup
- **Hermes Agent**: Enterprise messaging integration (Slack, Teams, Feishu)

**Target Users:**
- **Production Operators**: OpenClaw, ZeroClaw, Hermes Agent addressing scale and reliability
- **Developers**: NanoBot, ZeptoClaw emphasizing customization and security
- **End Users**: CoPaw, LobsterAI focusing on simplified interfaces
- **Enterprise Teams**: Hermes Agent, IronClaw integrating with business communication tools

**Technical Architecture:**
- **Multi-Gateway Approach**: OpenClaw, Hermes Agent distributing across channels
- **Console-Centric**: CoPaw, LobsterAI centralizing user interaction
- **Security-First**: ZeptoClaw implementing strict sandbox policies
- **Modular Framework**: NanoBot enabling plugin extensibility

## 6. Community Momentum & Maturity

**High Velocity (Rapid Iteration):**
- **OpenClaw**: 1000+ daily activities, 192 PR merges, intense bug-fix cycles
- **ZeroClaw**: 83 daily activities, active RFC discussions, architectural evolution
- **Hermes Agent**: 100 daily activities, continuous feature development

**Stable/Mature:**
- **ZeptoClaw**: Security-hardened releases, focused on stability over features
- **NanoBot**: Regular CI/CD improvements, mature feature set
- **NanoClaw**: Provider contract standardization indicating platform maturity

**Maintenance Mode:**
- **IronClaw**: Dependency updates, minor bug fixes
- **LobsterAI**: Minimal activity, single stale issue tracking

**Inactive:**
- **TinyClaw**: Zero activity indicating abandonment

## 7. Trend Signals

**Security Becomes Table Stakes:**
Projects like ZeptoClaw investing heavily in environment sanitization, privilege separation, and fail-closed defaults indicate security hardening moving from differentiator to baseline expectation for AI agent infrastructure.

**Event Loop Non-Blocking Architecture:**
The recurring theme across OpenClaw (#119720), NanoBot (#5580), and Hermes Agent of offloading I/O operations reflects industry recognition that synchronous operations fundamentally limit scalability in agent systems.

**Windows as Second-Class Platform No Longer Acceptable:**
Cross-project Windows compatibility issues suggest the ecosystem is maturing beyond Linux-first developer environments toward broader accessibility requirements.

**Session Transport Decoupling:**
ZeroClaw's RFC and related discussions indicate architectural shift toward treating sessions as persistent, channel-independent entities rather than tied to specific connection lifetimes.

**Provider Contract Standardization:**
NanoClaw's systematic provider contract refactoring reflects growing recognition that consistent integration interfaces reduce friction and improve reliability across diverse LLM providers.

**Real-Time Communication Integration Depth:**
Projects increasingly target seamless integration with existing communication platforms (Discord, Slack, Teams) suggesting the ecosystem is moving toward embedded AI assistants rather than standalone applications.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑09‑07**

---

### 1. Today's Overview
The NanoBot repository is seeing moderate activity: **0 issues** were touched in the last 24 h, while **13 pull‑requests (PRs)** were updated (10 still open, 3 closed). The closed PRs include CI/CD improvements, a TUI context‑footer fix, and a marketplace‑skill shadowing fix. No releases were published today, indicating the team is still in a development‑focused sprint. Overall health remains stable, with a clear push toward bug‑fixes, performance hardening, and feature refinements.

---

### 2. Releases
**None** – there are no new version tags or release notes to report.

---

### 3. Project Progress (Merged/Closed Today)

| PR | State | Category | Core Change | GitHub link |
|----|-------|----------|------------|-------------|
| **#5680** | **CLOSED** | CI/CD | Parallelized test execution on Linux/Windows via *pytest‑xdist*; separated Windows process‑compatibility tests; added `uv` dependency caching and skipped unnecessary jobs. | [HKUDS/nanobot PR #5680](https://github.com/HKUDS/nanobot/pull/5680) |
| **#5679** | **CLOSED** | TUI / Bug‑fix | Re‑designed idle footer to show **actual context‑window occupancy** (`context_tokens / context_window`) instead of aggregate token throughput, eliminating misleading stats. | [HKUDS/nanobot PR #5679](https://github.com/HKUDS/nanobot/pull/5679) |
| **#5309** | **CLOSED** | WebUI / Bug‑fix | Fixed **Marketplace skill installation** so workspace‑level skills can correctly shadow built‑in skills; the “install” button now works as expected. | [HKUDS/nanobot PR #5309](https://github.com/HKUDS/nanobot/pull/5309) |

These three closures represent **CI efficiency, UX clarity, and tooling reliability**—all high‑impact areas for daily contributors.

---

### 4. Community Hot Topics
While comment counts are not yet available, the **most talked‑about** (by label frequency and community interest) open PRs are:

1. **#5682 – `fix(exec): resolve relative working_dir from workspace`**  
   *Labels:* bug, fix, test, security, p2  
   *Why it matters:* The `ExecTool` previously interpreted a relative `working_dir` from the process’s current working directory, leading to inconsistent behavior across projects. Fixing this aligns execution context with the configured workspace, a core stability concern for users who run NanoBot in multi‑project environments.  
   ↳ [HKUDS/nanobot PR #5682](https://github.com/HKUDS/nanobot/pull/5682)

2. **#5580 – `fix(session): move persistence off event loop`**  
   *Labels:* bug, webui, fix, performance, test, **p1**  
   *Why it matters:* Slow session storage or file‑lock contention could stall unrelated conversations and runtime events. Off‑loading I/O through a dedicated dispatcher improves overall responsiveness—critical for a real‑time assistant.  
   ↳ [HKUDS/nanobot PR #5580](https://github.com/HKUDS/nanobot/pull/5580)

3. **#5676 – `feat(cli): add attach‑only Desktop target selection`**  
   *Labels:* feat, cli  
   *Why it matters:* Introduces per‑invocation target selection for both `nanobot` and `nanobot webui`, keeping Desktop and Python installs independent. This addresses user requests for flexible deployment scenarios (e.g., “run the UI without starting a new Desktop session”).  
   ↳ [HKUDS/nanobot PR #5676](https://github.com/HKUDS/nanobot/pull/5676)

These topics reflect the community’s focus on **reliability**, **performance**, and **flexible deployment**.

---

### 5. Bugs & Stability (Reported Today)

| Severity | PR / Issue | Description | Fix Status |
|----------|------------|-------------|------------|
| **P1** | **#5580** (fix(session): move persistence off event loop) | Session persistence could block the event loop, causing unrelated conversations to freeze. | **Open** – in PR, ready for review. |
| **P2** | **#5682** (fix(exec): resolve relative working_dir from workspace) | Relative `working_dir` in `ExecTool` incorrectly resolved against process CWD instead of the effective workspace path. | **Open** – ready for merge. |
| **P2** | **#5309** (fix(skills): allow marketplace skills to shadow builtins) – *already closed* | Marketplace incorrectly marked built‑in skills as “installed”, disabling the install button for workspace overrides. | **Closed** – merged. |
| **P2** | **#5679** (fix(tui): show context window usage in footer) – *already closed* | TUI footer reported misleading aggregate token metrics; now shows actual context‑window occupancy. | **Closed** – merged. |

*No crashes or regressions* were reported beyond the above, indicating the codebase is relatively stable.

---

### 6. Feature Requests & Roadmap Signals
The **open PRs** give a clear view of the next‑generation priorities:

| Feature Area | Open PR(s) | Signal Strength |
|--------------|-----------|-----------------|
| **MCP Management** | **#5388** – byte‑budget for model‑visible MCP schemas (opt‑in) <br> **#5386** – preserve MCP Apps result metadata | High – two complementary PRs suggest a strategic push to make MCP tools **more controllable** and **structured**. |
| **Heartbeat Configuration** | **#4551** – `isolatedSession` flag <br> **#4549** – `modelOverride` for cheaper heartbeat model | Medium – improves **heartbeat granularity** and cost‑efficiency. |
| **Desktop Integration** | **#5676** – attach‑only Desktop target selection | Medium – adds **flexible targeting** for CLI and UI. |
| **Observability** | **#5520** – Langfuse tracing for Codex provider | Medium – extends **tracing coverage** to previously untracked provider. |
| **Security / Test Coverage** | **#5678** – SSRF guard regression suite (redirect & pinned‑DNS) <br> **#5677** – stabilize flaky tests (Windows & nondeterministic) | Low‑Medium – defensive coding and test hygiene, essential for production reliability. |
| **Performance** | **#5580** – off‑load session I/O | High – directly addresses **event‑loop blocking**, a performance bottleneck. |
| **CLI/UX** | **#5682** – exec working_dir fix <br> **#5679** – context‑window footer (already merged) | High – user‑facing bug fixes that improve **developer experience**. |

Overall, the roadmap is leaning toward **better resource control (MCP budgets, heartbeat cost management), improved performance (session I/O), and richer observability (Langfuse)** while maintaining robust security and test coverage.

---

### 7. User Feedback Summary
* From the PR summaries, the most frequent pain points are:
  * **Misleading UI metrics** – users relied on the TUI footer for context usage, which gave inaccurate throughput numbers. Fixed in #5679.
  * **Inconsistent execution paths** – relative `working_dir` behavior caused confusion when running tools from different projects. Addressed in #5682.
  * **Tool installation frustration** – marketplace skills incorrectly disabled install buttons, blocking workspace overrides. Resolved in #5309.
  * **Session latency** – occasional stalls during conversation switches due to blocking I/O. Mitigated in #5580.
* Feature requests (e.g., per‑invocation Desktop targeting, heartbeat configuration) indicate a desire for **granular control** and **cost optimization**.

Overall sentiment appears **positive**, with the community actively contributing fixes and enhancements rather than reporting bugs in mass.

---

### 8. Backlog Watch
The following **open PRs** are awaiting maintainer review/merge and represent the current backlog of important work:

| PR | Priority / Area | Why it needs attention |
|----|----------------|------------------------|
| **#5580** | **P1 Bug / Performance** | Directly impacts UI responsiveness; high severity. |
| **#5682** | **P2 Bug / Exec** | Core

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-07

## 1. Today's Overview

Hermes Agent shows sustained high activity with 50 issues and 50 PRs updated in the 24-hour window, and a 96% open ratio on both sides (48 open issues, 46 open PRs), indicating an active triage and proposal cycle rather than a focused merge push. No new releases were tagged today; churn is concentrated in session-state integrity, gateway message delivery, and platform-specific plugins. The single dominant issue — the Skills-index freshness watchdog with 169 comments and `degraded` status — points to an operations-level staleness that warrants immediate maintainer attention. Overall the project is healthy but mid-stream on several multi-PR stacks (delegation, unified package manager, Feishu messaging), which suppresses merge throughput without indicating stagnation.

## 2. Releases

No new releases in the last 24 hours. The most recent merged work continues to target the `main` branch at commit `820106d4a5` (referenced in [#104666](https://github.com/NousResearch/hermes-agent/issues/104666)), consistent with an unreleased v0.21.x line.

## 3. Project Progress

Four PRs were closed in the last 24 hours, all of which were supersession checkpoints rather than landed fixes:

- **[#104426](https://github.com/NousResearch/hermes-agent/pull/104426)** — closed; superseded by [#104434](https://github.com/NousResearch/hermes-agent/pull/104434) as the active implementation of the delegation "inject policy" behavior ([#85648](https://github.com/NousResearch/hermes-agent/issues/85648)).
- **[#104419](https://github.com/NousResearch/hermes-agent/pull/104419)** — closed; landed on the wrong base surface and re-issued as [#104426](https://github.com/NousResearch/hermes-agent/pull/104426), then superseded.
- **[#99398](https://github.com/NousResearch/hermes-agent/issues/99398)** — closed bug report on preflight estimator double-charging the `reasoning` field and triggering a compaction loop. No fix PR is linked in the digest window; resolution appears to have happened outside today's open-PR list.
- **[#70328](https://github.com/NousResearch/hermes-agent/issues/70328)** — closed bug on flat 1500-token image pricing breaking vision-heavy sessions on 64K local models; again closed without a linked fix PR in today's set, suggesting an out-of-band or already-merged fix.

Net progress today is dominated by the delegation stack re-pointing (three PRs from `Xipong` converging on [#104434](https://github.com/NousResearch/hermes-agent/pull/104434)) and a steady drumbeat of small, targeted bugfix PRs.

## 4. Community Hot Topics

The discussion volume is highly skewed: one issue accounts for 169 of all comments across the top 30.

- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — 169 comments.** The Skills Hub at `/docs/skills` is being served from a `degraded` index that is 29.8h old against a 26h freshness limit. The rebuild pipeline is `.github/workflows/skills-index.yml` on cron `6/18 UTC`. The underlying need is a self-healing or freshness-aware regeneration path so docs consumers never see a stale index between scheduled rebuilds.
- **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681) — 25 comments.** Cross-device group-chat continuity: bots in a group chat should keep collaborating after the Desktop client that owns them is closed, with state held by an external host (laptop, home server, or VPS). The pain point is session ownership coupling to a running Desktop process rather than the underlying gateway.
- **[#26277](https://github.com/NousResearch/hermes-agent/issues/26277) — 9 comments, 2 👍.** Opt-in Email gateway mode that isolates sessions per normalized email subject instead of collapsing all messages from one sender into one session.
- **[#73327](https://github.com/NousResearch/hermes-agent/issues/73327) — 6 comments, 3 👍.** Make `cron/scheduler.py`'s hardcoded response wrapper (job ID header + "how to manage" footer) a customizable template.
- **[#92837](https://github.com/NousResearch/hermes-agent/issues/92837) — 4 comments.** P1 heartbeat bug: ticks increment `last_fired_at`/`fire_count` even when never delivered, and post-agent-cache idle-evict wakes are silently lost on Telegram group leader sessions.

PR-side attention is dispersed across many small, well-scoped proposals; no single PR dominates comment volume.

## 5. Bugs & Stability

### P1 (data integrity / session-state loss risk)

- **[#92837](https://github.com/NousResearch/hermes-agent/issues/92837)** — Heartbeat ticks silently increment counters without delivery; idle-evicted agent cache loses scheduled wakes. **No fix PR** open in today's digest.
- **[#104453](https://github.com/NousResearch/hermes-agent/issues/104453)** — After v0.21.0, all cron jobs fail on Ubuntu 22.04 / systemd 249 because `Restart-safe cron worker dispatch failed: cannot create restart-safe systemd scope for gateway child: systemd-run --user --scope is unavailable`. Tagged duplicate; **no fix PR** in today's set.
- **[#42719](https://github.com/NousResearch/hermes-agent/issues/42719)** — ACP-supplied MCP servers register their tools but the tools are dropped from the actual chat-completions request. **No fix PR** in today's set.
- **[#104653](https://github.com/NousResearch/hermes-agent/issues/104653)** — Inbound user turns persisted twice on Telegram gateway (gateway row with `platform_message_id`, agent-flush row with NULL), so history load returns duplicates. **Fix PR exists: [#104673](https://github.com/NousResearch/hermes-agent/pull/104673)** from `BrunoBza`, opened today.
- **[#104666](https://github.com/NousResearch/hermes-agent/issues/104666)** — `codex_app_server` runtime fails on Windows when Codex is installed via npm because the subprocess ignores `PATHEXT`. **No fix PR** in today's set.

### P2 (regressions and degraded UX)

- **[#94921](https://github.com/NousResearch/hermes-agent/issues/94921)** — Shift+letter leaks raw `ESC[27;2;<cp>~` into the CLI prompt under Ghostty's `modifyOtherKeys=2`. Tagged as a regression from #87630.
- **[#100302](https://github.com/NousResearch/hermes-agent/issues/100302)** — Hermes Desktop composer caret disappears on macOS mid-burst because the DOM normalizer removes Chromium's active caret node.
- **[#100836](https://github.com/NousResearch/hermes-agent/issues/100836)** — `hermes doctor --fix` self-detects as a live writer and refuses to repair `state.db` because a `COUNT(*)` connection is leaked and never closed.
- **[#104357](https://github.com/NousResearch/hermes-agent/issues/104357)** — Discord cron `deliver=discord:<guild>:<channel>` silently drops MEDIA attachments with 10003 Unknown Channel while text still delivers.
- **[#104176](https://github.com/NousResearch/hermes-agent/issues/104176)** — Third-party `ContextCompressor` subclasses break under `bypass_cooldown` because provider-overflow recovery from #100661 changed the `_generate_summary` signature.
- **[#104169](https://github.com/NousResearch/hermes-agent/issues/104169)** — `refresh_agent_mcp_tools()` rebuilds the tool array from `get_tool_definitions()` and silently drops per-session assembly context. Tagged `needs-decision`; **no fix PR** in today's set.
- **[#104678](https://github.com/NousResearch/hermes-agent/issues/104678)** — Anthropic Pro/Max subscription-exhaustion error latches `failure_reason=billing` with no expiry, so the cached error replays after the quota window resets until manual `hermes auth reset`.
- **[#104671](https://github.com/NousResearch/hermes-agent/issues/104671)** — Backlog of stale background-process completions in interactive CLI becomes N synthetic agent turns (turn storm).
- **[#104591](https://github.com/NousResearch/hermes-agent/issues/104591)** — Startup update check spawns an interactive SSH host-key prompt that hijacks CLI input when `insteadOf` and `GIT_CONFIG_GLOBAL=/dev/null` conflict.

Closed-as-fixed bugs in today's window (no linked PRs visible in the digest set, suggesting out-of-band merges): **[#99398](https://github.com/NousResearch/hermes-agent/issues/99398)** (preflight double-charging `reasoning`) and **[#70328](https://github.com/NousResearch/hermes-agent/issues/70328)** (flat 1500-token image pricing on vision-heavy 64K sessions).

## 6. Feature Requests & Roadmap Signals

Items with 👍 reactions and concentrated discussion cluster around a few themes that look like plausible next-release candidates:

- **Gateway continuity / cross-device** — [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) (group chats survive Desktop close).
- **Session-state hardening** — [#26277](https://github.com/NousResearch/hermes-agent/issues/26277) (email subject isolation, 2 👍), and the uniform channel-awareness injection in [#45122](https://github.com/NousResearch/hermes-agent/issues/45122) which already has a matching PR: **[#104685](https://github.com/NousResearch/hermes-agent/pull/104685)**.
- **Cron ergonomics** — [#73327](https://github.com/NousResearch/hermes-agent/issues/73327) (customizable cron wrapper, 3 👍) and [#104572](https://github.com/NousResearch/hermes-agent/issues/104572) (atomic disabled-job creation).
- **Delegation behavior** — [#85648](https://github.com/NousResearch/hermes-agent/issues/85648) plus the converging PR stack [#76230](https://github.com/NousResearch/hermes-agent/pull/76230) / [#104434](https://github.com/NousResearch/hermes-agent/pull/104434) (ready-dependency injection).
- **CLI surface expansion** — [#104638](https://github.com/NousResearch/hermes-agent/issues/104638) (`hermes auth add --priority` / `priority`); [#104022](https://github.com/NousResearch/hermes-agent/pull/104022) already adds macOS LaunchAgent lifecycle for the dashboard.
- **Profile / agent contract** — [#104640](https://github.com/NousResearch/hermes-agent/issues/104640) (load `AGENTS.md` from profile home, not just cwd chain).
- **Feishu parity with Slack** — [#104684](https://github.com/NousResearch/hermes-agent/pull/104684) adds `dm_top_level_threads_as_sessions`.

The most plausible "next-release" candidates given current PR momentum are: the uniform channel-capabilities block ([#104685](https://github.com/NousResearch/hermes-agent/pull/104685)), Feishu DM session un-fragmentation ([#104684](https://github.com/NousResearch/hermes-agent/pull/104684)), the budget-warning iteration guard ([#104683](https://github.com/NousResearch/hermes-agent/pull/104683)), and the shared JSON-encoder transcript perf fix ([#104682](https://github.com/NousResearch/hermes-agent/pull/104682)).

## 7. User Feedback Summary

Recurring pain points read directly from the issues:

- **State is too easy to lose.** Three separate complaints — heartbeat silent-drop ([#92837](https://github.com/NousResearch/hermes-agent/issues/92837)), double-persisted turns ([#104653](https://github.com/NousResearch/hermes-agent/issues/104653)), and Desktop local→local source switch wiping the session list ([#104680](https://github.com/NousResearch/hermes-agent/pull/104680)) — point at a shared concern that gateway/agent handoff boundaries are not idempotent.
- **Platform-specific regressions hit quickly.** Shift+letter leaks on Ghostty ([#94921](https://github.com/NousResearch/hermes-agent/issues/94921)), Desktop caret removal on macOS ([#100302](https://github.com/NousResearch/hermes-agent/issues/100302)), Codex startup on Windows ([#104666](https://github.com/NousResearch/hermes-agent/issues/104666)) all surfaced within ~2 weeks.
- **Operational tooling lacks self-healing.** Doctor self-blocks ([#100836](https://github.com/NousResearch/hermes-agent/issues/100836)), Skills index goes stale without automatic rebuild ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616)), and Anthropic billing errors latch without expiry ([#104678](https://github.com/NousResearch/hermes-agent/issues/104678)). Users consistently ask for these loops to resolve themselves.
- **Plugin and extension authors want stable contracts.** [#104176](https://github.com/NousResearch/hermes-agent/issues/104176) (subclass break) and [#104169](https://github.com/NousResearch/hermes-agent/issues/104169) (silent tool-array rebuild) are both complaints about API surface that changes invisibly across releases.

Satisfaction signal is mostly absent from issue text; positive signals are 👍 counts on the small-feature issues (#26277, #73327) and on [#104022](https://github.com/NousResearch/hermes-agent/pull/104022) which acknowledges the original reporter.

## 8. Backlog Watch

Items needing maintainer decision or response, ordered by severity and staleness:

- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** — 169 comments, status `degraded`, 50 days since creation. Needs a maintainer decision on either tightening the cron, adding on-read fallback rebuild, or accepting the SLO miss.
- **[#92837](https://github.com/NousResearch/hermes-agent/issues/92837)** — P1, silent heartbeat loss with no fix PR in the digest window.
- **[#42719](https://github.com/NousResearch/hermes-agent/issues/42719)** — P1, ACP MCP tools dropped from the model request; no fix PR.
- **[#104453](https://github.com/NousResearch/hermes-agent/issues/104453)** — P1, all cron jobs broken on a still-supported distro (Ubuntu 22.04 / systemd 249) after v0.21.0; no fix PR.
- **[#104653](https://github.com/NousResearch/hermes-agent/issues/104653)** — P1 duplicate-write, **but** a fix PR ([#104673](https://github.com/NousResearch/hermes-agent/pull/104673)) exists from today and is awaiting review.
- **[#104169](https://github.com/NousResearch/hermes-agent/issues/104169)** — tagged `needs-decision`; structural refactor decision required before any fix lands.
- **[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)** — 112 days old, 9 comments, 2 👍, no PR. Maintainer input needed on whether opt-in subject-isolation should be a default rather than a flag.
- **[#45122](https://github.com/NousResearch/hermes-agent/issues/45122)** — 87 days old, now has a matching PR ([#104685](https://github.com/NousResearch/hermes-agent/pull/104685)) waiting for review.

**Health verdict:** the project is active and triage is current on the last 24 hours, but three P1 bugs (#92837, #42719, #104453) and the stale Skills index are sitting without visible fix momentum and represent the highest-risk backlog for the next release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑09‑07**

---

### 1. Today’s Overview  
PicoClaw shows modest activity with **4 issues** and **2 pull requests** updated in the last 24 hours. No new releases were published. The repository remains largely stable, but several **stale** issues (open for >5 days) indicate lingering community concerns that have not yet been addressed. Overall health is moderate: core functionality is intact, yet user‑reported stability and feature gaps persist.

**Links:**  
- Issues overview: <https://github.com/sipeed/picoclaw/issues>  
- Pull requests overview: <https://github.com/sipeed/picoclaw/pulls>

---

### 2. Releases  
**None** – there are currently **0** new releases.

---

### 3. Project Progress  
- **Closed PR #1349** (merged on 2026‑09‑06) added **QQ Channel attachment parsing & reply support** (emoji, voice, image, video, file) and prioritized Markdown replies.  
- **Open PR #3348** (created 2026‑08‑29, last updated 2026‑09‑06) addresses **Czech i18n label wrapping**; it remains **stale** with no recent progress.

**Links:**  
- PR #1349: <https://github.com/sipeed/picoclaw/pull/1349>  
- PR #3348: <https://github.com/sipeed/picoclaw/pull/3348>

---

### 4. Community Hot Topics  

| Issue / PR | Status | Comments | Reactions | Summary & Underlying Need |
|------------|--------|----------|-----------|---------------------------|
| **#675** – *Add more LLM Provider Support* (CLOSED) | Closed (enhancement) | 7 | 0 | Users request **additional LLM provider integrations** beyond the current limited set. The closure suggests the request may be tracked for a future release or considered out‑of‑scope. |
| **#3351** – *Session data physically deleted after compression → history loss* (OPEN, stale) | Open (stale) | 1 | 0 | **Critical usability bug**: session `.jsonl` files are overwritten/trimmed, causing irreversible loss of chat history. Users need **persistent, append‑only storage** to guarantee data durability. |
| **#3350** – *Web UI input lag on low‑performance devices* (OPEN, stale) | Open (stale) | 1 | 0 | **Performance regression**: typing latency spikes on embedded hardware (RV1106, RISC‑V boards). The issue points to **client‑side rendering bottlenecks** tied to large session histories. |
| **#3369** – *Add OpenCode Go session header support* (OPEN) | Open (feature) | 0 | 0 | A **targeted enhancement** for OpenCode Go clients that require an `x‑opencode‑session` header. No community pressure yet, but the request is clear and likely to be considered for the next version. |

**Key Insight:** The most active community pain points are **data integrity** (Issue #3351) and **UI responsiveness on constrained devices** (Issue #3350). Both have minimal recent discussion, suggesting they may be waiting on maintainer triage.

---

### 5. Bugs & Stability  

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|-----------|
| **Critical** | **#3351** – Session data loss via `rewriteJSONL` | The `JSONLStore` rewrites the entire log file, physically deleting prior messages. Users lose historical context after compression. | **No** fix PR observed; the issue remains open. |
| **High** | **#3350** – Input box lag on low‑performance hardware | UI input latency correlates with session size; each keystroke triggers noticeable delay and CPU spikes. | **No** dedicated fix PR yet. |
| **Medium** | **#675** – Request for extra LLM providers | Not a bug, but a feature gap that could cause inconsistent behavior if providers are added manually. | N/A |
| **Low** | **#3369** – OpenCode Go session header | Feature request, not a stability concern. | N/A |

**Takeaway:** The **most severe stability bug** (#3351) lacks a mitigation PR, posing a risk of data loss for long‑running sessions.

---

### 6. Feature Requests & Roadmap Signals  

- **#675** (closed) – Expanding LLM provider support indicates a **roadmap need** for a more modular provider architecture.  
- **#3369** – Introducing an `x‑opencode‑session` header signals that **OpenCode Go integration** is a planned direction; the maintainers may prioritize this in the next minor release.  
- **#3351** – Persistent session storage is a **prerequisite** for any future provider or UI enhancements; addressing it could unlock other roadmap items.

**Prediction:** The next release (v0.9.x) will likely contain **session‑storage refactoring** (to resolve #3351) and **expanded provider support** (to satisfy #675), with the OpenCode Go header added shortly after.

---

### 7. User Feedback Summary  

- **Data Loss Concern:** Multiple users (e.g., Issue #3351) report that session files are **physically truncated**, making chat histories unrecoverable after compression. This erodes trust in the persistence layer.  
- **Performance on Embedded Devices:** Issue #3350 highlights **severe UI lag** when typing on low‑end hardware, affecting productivity for developers and end‑users running PicoClaw on edge devices.  
- **Feature Gaps:** Users request **broader LLM provider compatibility** (#675) and **OpenCode Go session header** support (#3369), indicating a desire for a more extensible and standards‑compliant API surface.  
- **Overall Sentiment:** Mixed – core functionality works, but **stability** (data loss) and **performance** on constrained platforms are pain points that dampen satisfaction.

---

### 8. Backlog Watch  

| Item | Age (days) | Reason for Attention |
|------|------------|----------------------|
| **#3351** – Session data loss | 7 | Critical bug; no recent comments or proposed fix. |
| **#3350** – UI lag on low‑performance devices | 7 | High‑impact usability issue; performance regression may affect adoption on edge devices. |
| **#3348** – Czech i18n label wrapping (stale PR) | 9 | Long‑standing PR with no progress; may indicate maintainer availability constraints. |
| **#3369** – OpenCode Go session header (new) | 1 | Feature request with zero discussion; worth monitoring for community interest. |

**Action Recommendation:** Prioritize triage of **#3351** and **#3350** to prevent further data loss and maintain user confidence. Follow up on **#3348** to either unblock the PR or close it if the scope is no longer relevant.

---

*Prepared on 2026‑09‑07. All links point to the official GitHub repository.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest - September 7, 2026

## 1. Today's Overview
NanoClaw shows healthy development activity with 2 issues updated (1 closed, 1 open) and 16 PRs updated in the last 24 hours. The project is in active maintenance mode with a strong focus on provider contract refactoring and bug fixes. Recent work includes Slack DM threading fixes, provider contract standardization, and Telegram polling reliability improvements. No new releases were published today, maintaining the stable v2.3.0 version.

## 2. Releases
**None** - No new releases published on September 7, 2026. The project remains at v2.3.0 with 119 commits ahead of the release tag.

## 3. Project Progress
**Merged/Closed PRs Today:**
- **#3731** - *Fix Slack DM threading issue* - Closed the bug where Slack wiring with session_mode: "shared" created new per-thread sessions for each DM message. This fix ensures proper thread_ts preservation for reply delivery.

**Significant Advancements:**
- Multiple provider contract refactorings (#3585, #3581, #3727, #3591) standardizing how providers declare and implement their interfaces
- Implementation of OpenCode provider contract (#3588) with byte-identical output
- Core-owned speed inference property for agent groups (#3592)
- Cursor Agent SDK payload addition (#3356, #3355, #3729) bringing browser-based setup capabilities

## 4. Community Hot Topics
**Most Active Discussions:**
- **#3730 (CLOSED)** - Slack wiring bug fix requiring thread_ts preservation - **0 comments**, resolved through PR #3731
- **#3728 (OPEN)** - Telegram polling loop reliability issue - **0 comments**, inbound messages can silently fail for days

**Key Concern:** The Telegram polling issue (#3728) represents a critical stability problem where the agent can appear active but stop receiving messages entirely, potentially disrupting user workflows for extended periods.

## 5. Bugs & Stability
**Critical Issues (High Priority):**
1. **Telegram polling failure (#3728)** - Silent failure mode for days with no logging
2. **Slack DM threading (#3730)** - Fixed, was creating unnecessary sessions per message

**Rank by Severity:**
- **CRITICAL:** Telegram polling loop (could cause days of service disruption)
- **HIGH:** Slack DM threading (resolution achieved today)

## 6. Feature Requests & Roadmap Signals
**Emerging Trends:**
- **Browser-based setup** (#3729) - Moving Echo and Slack setup into a unified portal with WorkOS authentication
- **Community cell integration** - New focus on connecting hosts to community cells and managing perks
- **Multi-provider ecosystem** - Expanding support beyond core providers with Cursor, OpenCode, and Codex integrations

**Predicted Next Version Features:**
- Native browser setup wizard (based on PR #3729 progress)
- Enhanced Telegram reliability improvements (in response to #3728)
- Standardized provider contract compliance across all integrations

## 7. User Feedback Summary
**Pain Points Identified:**
- **Telegram users** experiencing silent message loss (4-day outage reported)
- **Slack users** frustrated with DM threading inefficiency
- **Setup complexity** - Multiple manual steps for different providers

**Satisfaction Signals:**
- Strong focus on provider contract standardization indicates improved developer experience
- Active maintenance of core infrastructure with regular refactoring
- Community-driven development with targeted feature additions

## 8. Backlog Watch
**High-Attention Items:**
- **Issue #3728 (OPEN)** - Critical Telegram polling reliability issue needs immediate attention
- **PR #3654 (OPEN)** - NO_PROXY configuration fix for host.docker.internal accessibility
- **PR #3464 (OPEN)** - Removal of v1-only session commands cleanup
- **PR #3722 (OPEN)** - OpenCode contract adoption in install skill
- **PR #3726 (OPEN)** - Proton Mail adapter via Proton Mail Bridge

**Maintainer Action Required:**
- The Telegram polling issue represents a service disruption risk requiring priority attention
- Provider contract standardization (#3722, #3588, #3584) shows systematic improvement needs ongoing coordination
- Browser-based setup initiative (#3729) indicates strategic direction requiring resource allocation

**Repository Health:** Strong active development with balanced bug fixes and feature work, but critical stability issue in Telegram integration requires immediate resolution.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**1. Today's Overview**  
NullClaw’s GitHub repository shows minimal activity as of 2026-09-07, with zero issues updated in the last 24 hours and only 1 open PR under review. The open PR (#996) addresses a stability issue in MCP stdio response handling, suggesting ongoing efforts to improve robustness. No new releases or closed issues were reported today, indicating low user-facing disruption but active developer engagement in backend fixes.  

**2. Releases**  
No new releases were published in the last 24 hours.  

**3. Project Progress**  
The only updated item is [PR #996](https://github.com/nullclaw/nullclaw/pull/996), which is open but unmerged. This PR targets fixes to MCP stdio response handling by adding timeouts (`timeout_ms`) and process group termination on timeout. It also ensures cleanup of spawned child processes during failed initialization. All tests passed (`7,373 passed, 9 skipped`), signaling strong validation of the changes.  

**4. Community Hot Topics**  
The most active community discussion is **PR #996**, which directly addresses [Issue #991](https://github.com/nullclaw/nullclaw/issues/991). While no issues were updated today, the PR’s focus on resolving timeouts and process stability indicates a critical need for reliable MCP communication, particularly in resource-constrained or error-prone environments.  

**5. Bugs & Stability**  
The PR #996 ([GitHub link](https://github.com/nullclaw/nullclaw/pull/996)) resolves a bug (linked to closed Issue #991) involving unbounded waits in MCP stdio response reads, which could lead to deadlocks or unresponsive servers. This fix improves stability by introducing timeouts and proper cleanup of child processes. No other stability issues were reported today.  

**6. Feature Requests & Roadmap Signals**  
No explicit feature requests or roadmap items were noted today. The PR’s focus on core MCP stability suggests prioritization of reliability over new features, aligning with a "foundational improvements first" approach. However, the mention of process group termination hints at future enhancements for embedded or containerized environments.  

**7. User Feedback Summary**  
User feedback remains low-visibility today, as no issues or discussions were active. However, the resolution of #991 implies prior pain points around MCP communication deadlocks. The comprehensive test suite (7,373 passed) suggests confidence in the fix, which could alleviate frustration for users encountering initialization or timeout-related crashes.  

**8. Backlog Watch**  
Open PR #996 ([GitHub link](https://github.com/nullclaw/nullclaw/pull/996)) is the primary backlog item needing attention. While Issue #991 ([GitHub link](https://github.com/nullclaw/nullclaw/issues/991)) is addressed by this PR, its merging would close the loop on user-reported stability concerns. No other unaddressed issues or PRs were highlighted in today’s data.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — September 7, 2026

---

### **Today's Overview**
This report covers activity up to September 7, 2026. The repository showed minimal issue engagement but had notable pull request (PR) activity. There were no new issues opened or updated in the last 24 hours, indicating low real-time discussion or reporting from users. However, there was significant contributor engagement through nine PRs created or updated recently — six still open and three closed or merged. None of these PRs appear urgent; they are primarily automated dependency updates managed by Dependabot. This suggests ongoing maintenance efforts, particularly around toolchain and library modernization.

---

### **Releases**
No new releases were published as of this date. For historical context, refer to [IronClaw's release history](https://github.com/nearai/ironclaw/releases).

---

### **Project Progress**
Three PRs were merged or closed during this period:

- **[PR #7835](https://github.com/nearai/ironclaw/pull/7835)** – Updated GitHub Actions dependencies including Anthropic's Claude Code Action and Node.js setup actions. Likely improves CI reliability and compatibility with newer tooling.
- **[PR #8049](https://github.com/nearai/ironclaw/pull/8049)** – Bumped multiple Rust crates such as `uuid`, `base64`, and `toml`. Maintains codebase stability and security via updated libraries.
- **[PR #7020](https://github.com/nearai/ironclaw/pull/7020)** – Incremental upgrade of `tokio-tungstenite` within its ecosystem group. Enhances WebSocket handling capabilities.

Other open PRs continue to focus on large-scale dependency upgrades and minor bug fixes.

---

### **Community Hot Topics**
Currently, community-related activity is sparse. No highly commented or popular issues surfaced today. Two actively contributed PRs have drawn limited attention:

- **[PR #8077](https://github.com/nearai/ironclaw/pull/8077)** *(open)*: Addresses diagnostic classification for MCP response leaks ([Issue #8009](https://github.com/nearai/ironclaw/issues/8009)). Focuses on improving egress telemetry clarity without compromising safety.
- **[PR #8076](https://github.com/nearai/ironclaw/pull/8076)** *(open)*: Distinguishes disconnected shared channels in assistant integrations. Offers better UX feedback when integrations fail due to disconnection.

These PRs highlight ongoing refinement in integration logic and system observability rather than feature expansion.

---

### **Bugs & Stability**
No critical bugs, crashes, or regressions were reported today. Current focus remains on preventative maintenance through dependency updates and minor behavioral refinements.

---

### **Feature Requests & Roadmap Signals**
There are currently no trending feature requests identified in recent activity. Future enhancements may stem from:
- Continued reliance on MCP protocol improvements (as seen in [PR #8077](https://github.com/nearai/ironclaw/pull/8077)).
- Better user-facing guidance mechanisms in communication tools like Slack (referenced in [PR #8076](https://github.com/nearai/ironclaw/pull/8076)).

No explicit roadmap signals found today.

---

### **User Feedback Summary**
Limited direct user input exists in the form of comments or reactions today. However, some inferred user needs include:
- Improved error messaging when integrations disconnect.
- More transparent diagnostics regarding blocked responses in secure environments.

Overall sentiment appears neutral, with developers actively maintaining infrastructure quality.

---

### **Backlog Watch**
Several long-standing PRs remain unresolved despite periodic updates from Dependabot:
- **[PR #7834](https://github.com/nearai/ironclaw/pull/7834)** *(open)*: Bumping WASM-related dependencies. Marked "risk: medium", it requires review before merging into production branches.
- Several other dependency-upgrade PRs initiated weeks ago await approval, suggesting either cautious release cycles or lack of available reviewers.

Maintainers should prioritize resolving older backlog items to reduce technical debt accumulation.

--- 

*End of Digest — Generated automatically based on available data through September 7, 2026.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑09‑07**  
*Based on GitHub activity for the repository netease-youdao/LobsterAI (issues/PRs updated in the last 24 h).*

---  

### 1. Today's Overview  
The project shows minimal activity over the past day: only one issue was updated (issue #1068) and it remains open and marked as *stale*. No pull requests were opened, merged, or closed, and no new releases were published. Overall, development momentum appears low, with the codebase currently idle aside from routine issue tracking.

### 2. Releases  
*No new releases were recorded in the last 24 h.*  
- Latest version: *(information not supplied in the data set)*  
- No changelog, breaking changes, or migration notes to report.

### 3. Project Progress  
- **Merged/closed PRs today:** 0  
- **Features advanced or bugs fixed:** none reported.  
The lack of PR activity indicates that no completed work was integrated into the main branch during the reporting window.

### 4. Community Hot Topics  
| Item | Type | Comments / Reactions | Link | Observation |
|------|------|----------------------|------|-------------|
| #1068 | Issue (open, stale) | 1 comment, 0 👍 | [netease-youdao/LobsterAI#1068](https://github.com/netease-youdao/LobsterAI/issues/1068) | The sole active discussion concerns a UI refresh bug when deleting an agent and switching to another. Engagement is low (single comment, no reactions), which explains the *stale* label. |

**Underlying need:** Users expect the task list to update automatically after agent deletion; the current manual refresh step disrupts workflow and leads to confusion about which tasks belong to the active agent.

### 5. Bugs & Stability  
- **Bug reported today:** #1068 – *Deleting the current agent and switching to another does not automatically refresh the task list.*  
  - **Severity assessment:** Medium – UI inconsistency; does not crash the application but can cause user confusion and potential data‑misinterpretation.  
  - **Fix PR status:** No associated pull request exists at present.  

No crashes, regressions, or higher‑severity bugs were reported in the last 24 h.

### 6. Feature Requests & Roadmap Signals  
No explicit feature requests were logged today. However, the bug in #1068 implicitly signals a need for improved state‑management/reactivity in the agent‑switching workflow. If the maintainers prioritize UI consistency, a fix for this refresh issue could be incorporated into an upcoming maintenance patch (e.g., vX.Y.Z+1) rather than waiting for a major feature release.

### 7. User Feedback Summary  
- **Pain point:** After removing an agent, the UI retains the stale task list of the deleted agent until the user manually triggers a refresh, leading to mistaken assumptions about the active agent’s tasks.  
- **Use case impacted:** Users who frequently experiment with multiple agents (e.g., testing different configurations) experience friction when cleaning up agents.  
- **Satisfaction signal:** The single comment on the issue suggests at least one user has encountered the problem and finds it noteworthy enough to report, though the lack of additional reactions may indicate limited broader impact or that users have devised work‑arounds.

### 8. Backlog Watch  
- **Stale issue needing attention:** #1068 (open, stale, last updated 2026‑09‑06).  
  - **Why it matters:** Although marked stale, the bug reflects a straightforward UI‑state synchronization gap that, if left unresolved, could degrade the user experience for agent‑management workflows.  
  - **Suggested action:** Maintainers should evaluate whether to close the issue as “won’t fix” (if the behavior is intentional) or allocate a small effort to implement automatic task‑list refresh on agent deletion/switch. Adding a test or updating the documentation to clarify expected behavior would also resolve the stale status.  

---  

*All data points are derived solely from the provided GitHub activity summary; no external sources were consulted.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

---

### **Moltis Project Digest (2026-09-07)**  

---

#### **1. Today's Overview**  
The Moltis project maintained its low-activity status on 2026-09-06, with no issues updated and two PRs in progress. Both active PRs focus on critical security improvements (TLS configuration) and bug fixes (error reporting in execution). The absence of issues or releases suggests the team prioritizes small, incremental fixes over major feature development. No regressions or critical bugs were reported today, signaling stable core functionality.  

---

#### **2. Releases**  
None. No new versions or releases were published on 2026-09-06.  

---

#### **3. Project Progress**  
- **Merged/Closed PRs Today**: None (0 merged/closed PRs).  
- **Active PRs**:  
  - [#1261](https://github.com/moltis-org/moltis/pull/1261) ([Open]): *Fix TLS ALPN Restriction for HTTP/1.1*  
    - Implements TLS protocol constraints to exclude WebSocket upgrades until RFC 8441 support is added.  
    - Validates through `cargo test -p moltis-tls` (18 passed tests).  
  - [#1260](https://github.com/moltis-org/moltis/pull/1260) ([Open]): *Accurate Reporting for Missing Shell in Execution*  
    - Addresses edge cases where existing directories falsely mask missing `sh` in PATH.  

These PRs suggest ongoing focus on security hardening and error handling refinements.  

---

#### **4. Community Hot Topics**  
- **PRs in Focus**:  
  - [#1261](https://github.com/moltis-org/moltis/pull/1261) (0 reactions, 0 comments):  
    - Targets **TLS security** and documentation updates for contributors.  
    - Underlying need: Protecting against protocol downgrade risks while awaiting future WebSocket standardization.  
  - [#1260](https://github.com/moltis-org/moltis/pull/1260) (0 reactions, 0 comments):  
    - Focuses on **execution reliability** improvements.  
    - Underlying need: Ensuring accurate error messages for shell dependencies (linked to closed issue #279).  

No issues or PRs received community engagement today, indicating a lack of user-reported blockers or feature requests.  

---

#### **5. Bugs & Stability**  
- **Bugs Reported Today**: 0.  
- **Notable Progress**:  
  - PR #1260 addresses potential misclassification of `NotFound` shell errors, improving error clarity.  
  - PR #1261 mitigates security risks by restricting TLS ALPN protocols.  

No critical regressions or new bug reports were identified.  

---

#### **6. Feature Requests & Roadmap Signals**  
- **Roadmap Context**:  
  - PR #1261 explicitly mentions awaiting **RFC 8441 WebSocket upgrade support** as a future priority, implying WebSocket functionality over TLS is a planned feature.  
  - No open feature requests were linked to today’s activity.  
  - The project appears focused on foundational stability (TLS, execution) before expanding capabilities.  

---

#### **7. User Feedback Summary**  
- **Current Feedback**: No user-reported issues or feedback were updated today.  
- **Inferred Needs**:  
  - Improved error messaging (PR #1260) and secure TLS configuration (PR #1261) suggest developers prioritize robustness over user-facing features.  

---

#### **8. Backlog Watch**  
- **Open Issues/PRs**: 0. All issues are either open or closed.  
- **Urgent Items**:  
  - PRs #1261 and #1260 remain unmerged but address key security and stability gaps. Maintainers may need to review/merge these to resolve their linked issues (#245 and #279, respectively).  

---

**Data Snapshot**:  
- Activity Level: Low (0 issue updates).  
- PR Throughput: 2 open PRs since no merges today.  
- Focus Areas: Security patches, error handling, and awaiting foundational features.  

---

**Links**:  
- PR #1261: https://github.com/moltis-org/moltis/pull/1261  
- PR #1260: https://github.com/moltis-org/moltis/pull/1260

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest - 2026-09-07

## 1. Today's Overview

The CoPaw project shows significant daily activity with 24 issues and 12 PRs updated in the last 24 hours. Core areas receiving attention include agent coordination bugs, channel integration improvements (Telegram, Feishu), and console UX enhancements. Notably, several critical stability bugs remain open, including context loss issues and event loop blocking. The project demonstrates strong community engagement through multiple first-time contributor PRs addressing prominent feature requests.

## 2. Releases

No new releases were published in the last 24 hours. The previously mentioned beta v2.2.0-beta.7 release duty (Issue #7503) was verified on 2026-09-07.

## 3. Project Progress

Today saw several PRs merged or advanced:
- **PR #2134**: Implemented configurable heartbeat timeout (merged), allowing per-run timeout customization via console configuration. Addresses long-standing flexibility need for heartbeat tasks requiring extended execution times.
- **PRs #7590, #7591, #7592, #7593, #7577, #7578**: Multiple first-time contributor PRs addressing critical user-reported issues including Telegram markdown rendering, Feishu card auto-collapse, message queuing, and exception logging.
- **PR #7521**: Advanced context management through thinking block folding during high-context scenarios.

## 4. Community Hot Topics

**Most Active Issues/PRs:**

1. **Issue #7450** ([Open]) - Multi-agent progress reporting delay - 8 comments  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7450)  
   Users report master agents not proactively checking child agent status, requiring explicit user prompting. Highlights need for better orchestrated multi-agent workflow monitoring.

2. **PR #7502** ([Open]) - Console sidebar and settings redesign - actively updated  
   [Link](https://github.com/agentscope-ai/QwenPaw/pull/7502)  
   Ongoing UI/UX improvements with significant community interest in navigation and settings accessibility.

3. **Issue #7579/#7584** ([Open]) - Critical context/history loss bugs (duplicate reports)  
   [Links](https://github.com/agentscope-ai/QwenPaw/issues/7579), [Link](https://github.com/agentscope-ai/QwenPaw/issues/7584)  
   Multiple users reporting severe conversation history truncation leading to AI forgetfulness and behavioral loops.

## 5. Bugs & Stability

**Critical Bugs (requiring immediate attention):**

- **Issue #7584** ([Open], PROMPT: [严重⚠️⚠️]) - Severe context loss causing AI behavior corruption and infinite loops
- **Issue #7579** ([Open]) - Persistence with missing context in subsequent requests ("empty response" symptoms)
- **Issue #7363** ([Open]) - Event loop blocking with 118-135s freezes on Windows during sync calls and message sending
- **Issue #7567** ([Closed]) - Stop button visual feedback vs actual execution state mismatch
- **Issue #7589** ([Open]) - Heartbeat cron session feedback loop causing duplicate message pile-up

**Moderate Bugs:**

- **Issue #7559** ([Open]) - HTTP 409 errors when sending messages during active task execution
- **Issue #7513** ([Open]) - DeepSeek model showing tool call confusion
- **Issue #6814** ([Closed]) - macOS SIGBUS crash in SQLite WAL (resolved)
- **Issue #6541** ([Open]) - Scroll context compression triggering errors on DeepSeek

Fix PRs are in progress for several issues including #7578 (exception logging), #7577 (message queuing), and #7590 (Telegram rendering).

## 6. Feature Requests & Roadmap Signals

**High-Priority Feature Requests:**

1. **Issue #7588** ([Open]) - Restore v2.1.0's direct path input for working directory selection
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7588)  
   *Likely for next patch/update* - PR #7593 implements this fix.

2. **Issue #7580** ([Open]) - Add blocking tool to wait for agent task completion
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7580)  
   Addresses fundamental multi-agent workflow management gap.

3. **Issue #7583** ([Open]) - Add community features (login, feedback mechanisms)
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7583)  
   Integration with AgentScope community platform.

4. **Issue #7586** ([Open]) - Telegram intermediate message cleanup
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7586)  
   *Addressed by PR #7592* - Optional cleanup implemented.

## 7. User Feedback Summary

Users consistently report frustration with:

**Stability Concerns:**
- Unpredictable behavior due to context/history loss in long sessions
- UI-to-backend state synchronization issues (stop button, navigation records)
- Platform-specific crashes (macOS SQLite issues)

**UX Pain Points:**
- Complex plugin marketplace requiring excessive clicks for bulk operations
- Loss of convenient features from v2.1.0 (direct path input, plugin update mechanisms)
- Channel-specific rendering inconsistencies (Telegram tables, Feishu card expansion)

**Workflow Limitations:**
- Lack of proactive multi-agent status reporting
- Absence of proper blocking mechanisms for delegated agent tasks
- Difficulty managing long-running conversation contexts

## 8. Backlog Watch

**Long-Unanswered Important Issues:**

- **Issue #6541** ([Open], 39 days old) - Scroll context compression errors on DeepSeek
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/6541)  
  Persistent compatibility issue with specific model providers.

- **Issue #7163** ([CLOSED]) - Model/thinking management refinements
  [Link](https://github.com/agentscope-ai/QwenPaw/pull/7163)  
  Recently closed but represents ongoing refinement needs in core agent management.

- **Issue #2134** ([CLOSED]) - Configurable heartbeat timeout (recently merged)
  [Link](https://github.com/agentscope-ai/QwenPaw/pull/2134)  
  Long-standing enhancement now resolved, demonstrating good backlog maintenance.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>


# ZeptoClaw Project Digest — 2026-09-07

## 1. Today's Overview

ZeptoClaw experienced significant security-focused activity on 2026-09-06, with three P0/P1-critical security fixes merged addressing subprocess environment handling and agent mode validation. The project resolved 4 of 5 tracked issues and closed 3 of 8 PRs, indicating strong momentum on hardening the codebase ahead of any potential release. The sole remaining open issue (#664) signals the start of a new capability-inheritance security workstream for delegated agents. Five dependency-bump PRs from dependabot remain open, awaiting maintainer review.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (3 items)

| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#672](https://github.com/qhkm/zeptoclaw/pull/672) | fix(security): scrub inherited env in plugin/MCP spawn sites | Closed (fixes #660) | **P0 Security** — Complements runtime-level env scrubbing (PR #645) by applying it at plugin and MCP transport spawn sites. Prevents API keys, tokens, and database URLs from leaking into child processes. |
| [#671](https://github.com/qhkm/zeptoclaw/pull/671) | fix(security): fail closed on invalid agent_mode | Closed (fixes #659) | **P0 Security** — Changes fallback behavior for unknown mode strings from `Autonomous` (max permissions) to `Assistant` (restricted) with a warning, eliminating privilege-escalation risk from config typos. |
| [#645](https://github.com/qhkm/zeptoclaw/pull/645) | fix(runtime): scrub subprocess secrets and reap timed-out process trees | Closed (fixes #644) | **P1 Safety** — Removes credential inheritance from shell commands and ensures spawned process trees are terminated and reaped on timeout (including Docker containers). |

### Summary

Three security-focused PRs closed a class of environment-scrubbing vulnerabilities spanning runtime, plugin, and MCP transport layers, plus corrected a dangerous mode-string fallback. All related issues (#644, #659, #660) are now closed.

---

## 4. Community Hot Topics

### Most Active Issue

**#664 — [M][safety] Delegated-agent capability inheritance — children must not exceed parent policy** *(OPEN)*
- Author: qhkm | Created: 2026-09-05 | Comments: 1 | 👍: 0
- Link: https://github.com/qhkm/zeptoclaw/issues/664
- **Analysis**: This is a new architectural discussion opened just 2 days ago, indicating the maintainer is proactively identifying the next security frontier. The issue references Exec #6 and the delegation spec (§5), noting that while delegation mechanics exist (fresh child loops, sessions, concurrent execution, recursion blocking), policy inheritance is the gap. The underlying need is to prevent child agents from escalating beyond their parent's configured permissions — a critical feature for multi-agent safety in production deployments.

### Active Dependency Bumps (5 open PRs)

| PR | Dependency | Version Bump | Impact |
|----|------------|--------------|--------|
| [#627](https://github.com/qhkm/zeptoclaw/pull/627) | serde_json | 1.0.149 → 1.0.150 | Enum validation tightening |
| [#625](https://github.com/qhkm/zeptoclaw/pull/625) | rpassword | 7.4.0 → 7.5.2 | Unicode parity fix |
| [#623](https://github.com/qhkm/zeptoclaw/pull/623) | tokio | 1.52.1 → 1.52.3 | Tokio v1.52.3 bugfixes |
| [#620](https://github.com/qhkm/zeptoclaw/pull/620) | scraper | 0.26.0 → 0.27.0 | Minor feature/bugfix |
| [#617](https://github.com/qhkm/zeptoclaw/pull/617) | tower-http | 0.6.10 → 0.6.11 | Minor additions |

**Trend**: All five dependabot PRs have been open since 2026-06-03 (~95 days). This backlog may warrant a batch-merge strategy to reduce maintenance overhead.

---

## 5. Bugs & Stability

### Closed Issues (Security Fixes)

| Issue | Severity | Status | Fix PR | Summary |
|-------|----------|--------|--------|---------|
| [#660](https://github.com/qhkm/zeptoclaw/issues/660) | **P0 Critical** | Closed | [#672](https://github.com/qhkm/zeptoclaw/pull/672) | Centralize child-process env scrubbing across all spawn sites — unscrubbed sites in `plugin.rs`, `mcp/transport.rs`, and `binary_plugin.rs` could leak secrets |
| [#659](https://github.com/qhkm/zeptoclaw/issues/659) | **P0 Critical** | Closed | [#671](https://github.com/qhkm/zeptoclaw/pull/671) | Invalid `agent_mode` values fell back to `Autonomous` (max permissions) instead of failing closed |
| [#644](https://github.com/qhkm/zeptoclaw/issues/644) | **P1 Critical** | Closed | [#645](https://github.com/qhkm/zeptoclaw/pull/645) | Subprocess environments inherited full credential set; timeouts did not terminate/reap process trees |

### Open Issues

| Issue | Severity | Status | Summary |
|-------|----------|--------|---------|
| [#664](https://github.com/qhkm/zeptoclaw/issues/664) | **P2 High** | Open | Delegated-agent capability inheritance — children must not exceed parent policy |

**Stability Assessment**: The project has successfully addressed a cluster of P0/P1 security findings from a 2026-09-06 architecture review. No active bugs or regressions are reported today.

---

## 6. Feature Requests & Roadmap Signals

### New Open Issue — Roadmap Signal

**#664 — Delegated-agent capability inheritance** ([qhkm/zeptoclaw#664](https://github.com/qhkm/zeptoclaw/issues/664))

This issue explicitly references "Exec #6 + §5 Subagents and delegation" and the project's existing delegation code in `src/tools/delegate.rs:32–53, 153–250, 254–358`. The maintainer has identified that **policy inheritance** is the missing piece for safe multi-agent workflows. This strongly suggests that the next version (likely post-security-hardening) will include:

- Formal capability/policy constraints on delegated agents
- Enforcement that child agents cannot exceed parent permissions
- Potential configuration schema additions for inheritance rules

### Closed CI/Chore Issue

**#646 — Restore Clippy and cargo-deny checks** ([qhkm/zeptoclaw#646](https://github.com/qhkm/zeptoclaw/issues/646)) — Resolved CI baseline issues (new Clippy warnings on Rust 1.97.1, vulnerable `quick-xml` and `lopdf` versions), indicating ongoing tooling hygiene.

---

## 7. User Feedback Summary

No direct user feedback (issues authored by community) is visible in the last 24h. All recent issues were opened by the maintainer (`qhkm`), suggesting this digest period reflects internal security hardening rather than external feature requests.

**Inferred Pain Points (from issue context)**:

1. **Secret leakage risk** — The volume of P0 env-scrubbing fixes (#644, #659, #660, #672, #671, #645) indicates that credential isolation in subprocess execution is a known operational concern for users deploying ZeptoClaw in multi-tenant or credential-rich environments.
2. **Permission misconfiguration risk** — The `agent_mode` fallback issue suggests users may accidentally misconfigure agent permissions, and the current fix provides safer defaults.

---

## 8. Backlog Watch

| Item | Age | Priority | Status | Notes |
|------|-----|----------|--------|-------|
| [#627](https://github.com/qhkm/zeptoclaw/pull/627) — serde_json bump | ~95 days | Low | Open | Dependabot PR awaiting merge |
| [#625](https://github.com/qhkm/zeptoclaw/pull/625) — rpassword bump | ~95 days | Low | Open | Dependabot PR awaiting merge |
| [#623](https://github.com/qhkm/zeptoclaw/pull/623) — tokio bump | ~95 days | Low | Open | Dependabot PR awaiting merge |
| [#620](https://github.com/qhkm/zeptoclaw/pull/620) — scraper bump | ~95 days | Low | Open | Dependabot PR awaiting merge |
| [#617](https://github.com/qhkm/zeptoclaw/pull/617) — tower-http bump | ~95 days | Low | Open | Dependabot PR awaiting merge |
| [#664](https://github.com/qhkm/zeptoclaw/issues/664) — capability inheritance | 2 days | P2-High | Open | Needs maintainer architectural decision |

**Actionable**: The five dependabot PRs have been pending for ~95 days. A single batch-merge or bulk-close would clean up the PR queue. Issue #664 is fresh but high-priority given its security implications for multi-agent deployments.

---

*Digest generated for ZeptoClaw (github.com/qhkm/zeptoclaw) — 2026-09-07*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-09-07

## 1. Today's Overview
ZeroClaw remains a highly active open-source AI agent project, with **33 issues and 50 pull requests** updated in the last 24 hours. The repository is dominated by deep architectural RFCs (session transport, file attachment unification, WASM plugin runtimes) alongside a steady stream of critical bug fixes and UX improvements. No new releases were made today, but development velocity is strong—maintainers are actively triaging, reviewing large feature PRs, and closing out legacy fixes. Overall project health is **good**, though a few long-standing RFCs and Windows compatibility gaps still demand attention.

## 2. Releases
*No new releases today.*

## 3. Project Progress
- **Closed PR #10487** — `fix(channels/matrix): resolve transcription providers from live config`. This closes a stale-configuration bug in the Matrix channel where transcription providers were never registered from a live `TranscriptionConfig` snapshot. ([PR #10487](https://github.com/zeroclaw-labs/zeroclaw/pull/10487))
- **6 PRs merged/closed** in the last 24h, indicating steady convergence on fixes. Other notable closed/merged work includes ACP transcript persistence (#10197, #9378), delegate filesystem tool scoping (#10391), and Windows test scoping (#10668).
- **Architecture advancement**: Multiple RFCs (e.g., #9487, #9488, #10526) are moving through revision cycles, signaling active design work that will shape the next major release.

## 4. Community Hot Topics
| Topic | Comments | Analysis |
|-------|----------|----------|
| **#9487** — RFC: Runtime-owned conversation sessions and transport surface adapters | 34 | The most discussed issue. Proposes a material replacement of the session/transport layer, decoupling agent turns from WebSocket lifetimes. Underlying need: reliable multi-channel, mobile-resume experiences. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)) |
| **#9488** — RFC: Unified file and attachment architecture for conversation surfaces | 27 | Complements #9487 by standardising how files and attachments flow across channels. Underlying need: stop drift between channel-specific attachment handling. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)) |
| **#6996** — RFC: Granular sandbox policy - filesystem restrictions | 25 | Addresses security-policy drift between application-layer path admission and OS sandbox backends (Bubblewrap, Landlock, Seatbelt). Underlying need: a single source of truth for filesystem restrictions. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)) |
| **#7462** — Bug: 74 test failures on Windows | 19 | Highlights a significant cross-platform gap. Underlying need: Windows is a first-class citizen, not an afterthought. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)) |
| **#8692** — Tracker: Maintainer decision queue for RFCs and design issues | 15 | Meta-issue tracking the decision-making process. Underlying need: transparency on which RFCs are accepted/rejected/deferred. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) |

## 5. Bugs & Stability
**Critical (S1 — workflow blocked):**
- **#10230** — Daemon startup/reload overflows during agent initialization (Tokio stack overflow). No fix PR yet. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10230))
- **#9421** — Incomplete terminal responses reported as successful. Fix PR **#9447** is open and in progress. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9421))
- **#9191** — Cron agent jobs have no wall-clock timeout; in-flight locks only cleared at process start. No fix PR yet. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9191))
- **#10670** — `heartbeat.target` rejects a channel instance composite key (`<type>.<alias>`). Fix PR **#10671** is open and ready for merge. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10670))
- **#10659** — Budget-exceeded Code turn loses visible progress after session restore. No fix PR yet. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10659))

**High (S2 — degraded behavior):**
- **#7462** — 74 test failures on Windows 11 (S

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*