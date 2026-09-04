# OpenClaw Ecosystem Digest 2026-09-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-04 02:03 UTC

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

# OpenClaw Project Digest — 2026-09-04

## 1. Today's Overview

OpenClaw maintains **very high activity** with 500 issues and 500 PRs updated in the last 24 hours. The project released **v2026.9.1**, bringing native Mermaid diagram rendering across all platforms. Community engagement is intense, with 351 open issues actively being tracked and 393 pull requests under review. The maintainer team is actively triaging regressions (particularly around SQLite corruption, child process leaks, and session management) while advancing significant features including hot-reload auth limits, native realtime audio support, and cross-surface model list unification.

---

## 2. Releases

### ✅ v2026.9.1 — openclaw 2026.9.1
**Release Date**: 2026-09-04

**Highlights**:
- **Diagrams in every chat**: Mermaid blocks now render as diagrams in the Control UI and in the native macOS, iOS, and Android apps, with enlarge previews and a retry mechanism when a diagram fails to render on mobile.
  - Referenced PRs: #134913, #135746, #135470, #135342

**Note**: The release description appears truncated in the provided data; additional changes may be present in the full release notes.

---

## 3. Project Progress

### Merged/Closed Activity (Last 24h)
The project closed **107 PRs** and **149 issues** in the past day. Key areas of advancement:

| Area | Notable PRs | Purpose |
|------|-------------|---------|
| **Gateway** | #137794 | Fix prewarm work wait during shutdown |
| **Documentation** | #137785 | Add dashboard build guardrails for Control UI |
| **Agents** | #132116 | Omit inherited max for maintained Codex ACP |
| **Performance** | #137237 | Build core tool catalogs faster |
| **Memory** | #137774 | Avoid session history work for memory-only searches |
| **Sessions** | #136639 | Preserve conversations under maintenance pressure |
| **Workers** | #135838 | Stop provisioning after turn authority closes |
| **Browser** | #137671 | Preserve tab ownership during lazy cleanup |

### Active PRs Ready for Maintainer Review (30+ items)
- **#136257** (Size: XL, P1) — Direct model lists and provider login across surfaces — unifies catalog/auth across Gateway CLI, `/models`, and Control UI
- **#134003** (Size: XL, P2) — Native realtime support for thin audio clients
- **#137790** (Size: XL, P1) — Hot-reload auth limits and discovery mode
- **#135868** (Size: XL, P1) — Start owned recovery after update and startup failures
- **#126056** (Size: M, P1) — Start new chat worktrees from fresh defaults

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **#125626** — *OpenClaw 2026.8.1 beta feedback* (24 comments)
   - **Author**: Patrick-Erichsen | **Labels**: maintainer, P2
   - **Link**: https://github.com/openclaw/openclaw/issues/125626
   - **Signal**: Active beta testing feedback; users validating v2026.8.1 features

2. **#114612** — *SQLite unbounded growth: memory_index_chunks + memory_embedding_cache tables have no retention policy* (11 comments)
   - **Author**: ralf003 | **Labels**: P2, impact:other
   - **Link**: https://github.com/openclaw/openclaw/issues/114612
   - **Signal**: Critical storage concern; tables grow without bound on every memory extraction cycle

3. **#97616** — *OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation* (10 comments)
   - **Author**: avp717 | **Labels**: bug, P1, impact:message-loss, impact:crash-loop
   - **Link**: https://github.com/openclaw/openclaw/issues/97616
   - **Signal**: Resource leak causing runtime degradation over time

4. **#110190** — *Runtime context carrier positioned AFTER user message causes severe model confusion* (9 comments)
   - **Author**: consoleaf | **Labels**: P1, impact:session-state, impact:message-loss
   - **Link**: https://github.com/openclaw/openclaw/issues/110190
   - **Signal**: Prompt engineering issue affecting model reasoning quality

5. **#39406** — *Feature request: config option to suppress transient tool error warnings* (9 comments)
   - **Author**: neoclaw-latrobe | **Labels**: P3, impact:ux-friction
   - **Link**: https://github.com/openclaw/openclaw/issues/39406
   - **Signal**: UX polish request; PR #137775 addresses related suppression retirement

6. **#72741** — *Standard Interface for External Security and Guardrail Checks* (9 comments)
   - **Author**: Dylanzhang1128 | **Labels**: enhancement, security
   - **Link**: https://github.com/openclaw/openclaw/issues/72741
   - **Signal**: Enterprise security integration demand

### Underlying Needs Analysis
- **Resource management**: Users experiencing unbounded SQLite growth, zombie processes, and memory leaks demand better lifecycle management
- **Beta validation**: Active engagement with v2026.8.1 beta indicates community participates in release validation
- **Enterprise features**: Security/guardrail interface request suggests adoption in regulated environments

---

## 5. Bugs & Stability

### 🔴 Critical (P0) — Immediate Attention Required

| Issue | Title | Severity | Status | Fix PR? |
|-------|-------|----------|--------|---------|
| #126821 | SQLite corruption recurs on pristine rebuilt DBs within 15–24h (WSL2) | P0 | OPEN | No |
| #125333 | totalTokens inflation still reproduces on 2026.8.1-beta.2 | P0 | OPEN | Linked PR open |
| #136452 | compaction.maxActiveTranscriptBytes silently unenforced for heartbeat-driven sessions → V8 OOM | P0 | OPEN | No |
| #123327 | Shared state WAL checkpoint copies index pages over SQLite page 1 | P0 | OPEN | No |
| #136452 | compaction.maxActiveTranscriptBytes is silently unenforced for heartbeat-driven sessions | P0 | OPEN | No |

### 🟠 High (P1) — Regression/Impact Issues

| Issue | Title | Regression? | Link |
|-------|-------|-------------|------|
| #97616 | Child process leaks (zombies) | Yes (2026.8.1) | https://github.com/openclaw/openclaw/issues/97616 |
| #136183 | Command executor hangs when spawning ssh — SIGTERM while waiting for server banner | Yes (2026.8.1→2026.8.2) | https://github.com/openclaw/openclaw/issues/136183 |
| #136113 | claude-cli backend returns empty response when stdout exceeds ~50 KB | Yes | https://github.com/openclaw/openclaw/issues/136113 |
| #125344 | memory-core local embedding workers and codex app-servers leak with no idle TTL | Yes | https://github.com/openclaw/openclaw/issues/125344 |
| #86119 | Orphaned node server.js worker processes accumulate after subagent/cron runs | Yes | https://github.com/openclaw/openclaw/issues/86119 |
| #123799 | Need safe upgrade/backport guidance for production affected by Codex compact 404 | No | https://github.com/openclaw/openclaw/issues/123799 |
| #115642 | Billing cooldown outlives the outage on subscription auth | No | https://github.com/openclaw/openclaw/issues/115642 |
| #119411 | Memory file watcher never reindexes, reports Dirty: no incorrectly | Yes | https://github.com/openclaw/openclaw/issues/119411 |

### Notable Regression Patterns
- **Process lifecycle**: Multiple issues (#97616, #125344, #86119) point to child process management regressions
- **Database integrity**: SQLite corruption (#126821) and WAL checkpoint issues (#123327) suggest transaction handling problems
- **Platform-specific**: Windows de-DE upgrade (#136203), Doctor --fix deadlocks (#137377), SSH banner exchange (#136183)

---

## 6. Feature Requests & Roadmap Signals

### High-Value Feature Requests

| Issue | Title | Priority | Signals | Link |
|-------|-------|----------|---------|------|
| #72741 | Standard Interface for External Security and Guardrail Checks | Security | 9 comments, enterprise adoption | https://github.com/openclaw/openclaw/issues/72741 |
| #39406 | Config option to suppress transient tool error warnings | P3 | 9 comments; PR #137775 related | https://github.com/openclaw/openclaw/issues/39406 |
| #120244 | RFC: cron maintenance window with role isolation | P3 | 5 comments, follow-up to #79192 | https://github.com/openclaw/openclaw/issues/120244 |
| #121729 | Friendly daily spending allowances for agents running in background | P3 | 6 comments | https://github.com/openclaw/openclaw/issues/121729 |
| #132781 | Use latest commentary as progress draft label when narration unavailable | P3 | 6 comments | https://github.com/openclaw/openclaw/issues/132781 |
| #126781 | Durable Lobster workflows started by /loop and Automations | P3 | 4 comments | https://github.com/openclaw/openclaw/issues/126781 |

### Roadmap Predictions
Based on active PRs and issue engagement:
1. **Model unification** (#136257) — Likely near release; unifies model lists/auth across all surfaces
2. **Native realtime audio** (#134003) — Active development, significant PR size (XL)
3. **Hot-reload capabilities** (#137790, #135868) — Enterprise operational improvements
4. **Memory improvements** — Multiple PRs addressing indexing, cleanup, and session history optimization suggest memory subsystem is a focus area

---

## 7. User Feedback Summary

### Pain Points Identified

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Upgrade instability** | Doctor --fix deadlocks (#137377), gateway fails after file-backed upgrade (#134179), Windows de-DE upgrade leaves blocked state (#136203) | High |
| **Resource leaks** | SQLite unbounded growth (#114612), child process zombies (#97616), orphaned workers (#86119, #125344) | Critical |
| **Data loss risk** | SQLite corruption (#126821), message loss on large CLI output (#136113), silent memory persistence disable (#126906) | Critical |
| **Session state confusion** | Context window misreported (#127239), compaction misclassifications (#121617), transcript duplication (#118185) | Medium |
| **Platform gaps** | Windows CI runs only 0.60% of test suite (#126874), SSH command hangs (#136183), sandbox root ownership (#126631) | Medium |
| **Auth/billing issues** | Billing cooldown outlives outage (#115642), Codex compact 404 guidance needed (#123799) | High for production |

### User Satisfaction Signals
- **Beta feedback engagement**: Issue #125626 shows active beta tester participation (24 comments)
- **Feature adoption**: Mermaid rendering in v2026.9.1 addresses visual communication needs
- **Cross-platform interest**: iOS/Android chat reopening fixes (#137682) show mobile-first usage patterns

---

## 8. Backlog Watch

### Long-Unanswered Important Issues (>7 days without maintainer response)

| Issue | Title | Age | Comments | Priority | Link |
|-------|-------|-----|----------|----------|------|
| #97616 | Child process leaks (zombies) | ~67 days | 10 | P1 | https://github.com/openclaw/openclaw/issues/97616 |
| #86119 | Orphaned node server.js worker processes | ~103 days | 5 | P1 | https://github.com/openclaw/openclaw/issues/86119 |
| #114612 | SQLite unbounded growth | ~39 days | 11 | P2 | https://github.com/openclaw/openclaw/issues/114612 |
| #110190 | Runtime context carrier positioning | ~49 days | 9 | P1 | https://github.com/openclaw/openclaw/issues/110190 |
| #119411 | Memory file watcher never reindexes | ~30 days | 5 | P1 | https://github.com/openclaw/openclaw/issues/119411 |

### PRs Waiting on Author/Proof

| PR | Title | Size | Status | Days Open |
|----|-------|------|--------|-----------|
| #126056 | fix(ui): start new chat worktrees from fresh defaults | M | waiting on author | ~17 |
| #137274 | fix(cron): prevent retry while active execution is in progress | S | needs proof | ~1 |
| #137678 | fix(voice-call): TTS voice constructor interpolates into TwiML | XS | needs proof | ~1 |
| #135838 | fix(workers): stop provisioning after turn authority closes | XL | needs proof | ~2 |
| #118303 | fix(minimax): route M3 image calls through MiniMax VL | M | waiting on author | ~33 |

### Issues Needing Product Decision
Multiple issues tagged `clawsweeper:needs-product-decision` suggest areas awaiting strategic clarity:
- #110190 (runtime context carrier positioning)
- #115642 (billing cooldown TTL)
- #125570 (skill routing after update)
- #123799 (upgrade guidance)
- #136203 (Windows upgrade recovery)

---

*Digest generated from OpenClaw project data for 2026-09-04. All issue/PR links reference https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Landscape (2026-09-04)

## 1. Ecosystem Overview

The personal AI assistant and agent ecosystem has entered a phase of accelerated maturation, with multiple projects converging on common architectural challenges—secure sandboxing, cross-platform consistency, and robust tool orchestration. OpenClaw stands out as a mature, well-maintained reference implementation with extensive feature parity across platforms, while Hermes Agent represents the most aggressive architectural transformation among the cohort, undertaking a major codebase simplification that positions it for a v0.22.0 release. PicoClaw and LobsterAI provide practical, deployment-ready solutions for specific channel integrations, whereas smaller projects like NanoClaw, Moltis, CoPaw, ZeptoClaw, and IronClaw demonstrate varied levels of activity ranging from stagnant to hyper-active. The collective trend points toward increased specialization: some teams pursue broad platform coverage (OpenClaw, PicoClaw), others focus on niche integrations (LobsterAI), and a few concentrate on fundamental infrastructure improvements (Hermes Agent, IronClaw).

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score* |
|---------|---------------------|-------------------|----------------|---------------|
| **OpenClaw** | 500 | 500 | v2026.9.1 (released 2026-09-04) | ⭐⭐⭐⭐⭐ (Very High) |
| **Hermes Agent** | 50 | 50 | No new releases (last: v0.21.0) | ⭐⭐⭐⭐ (High) |
| **PicoClaw** | 5 | 7 | No new releases | ⭐⭐⭐ (Moderate) |
| **NanoBot** | 4 | 0 | No new releases | ⭐⭐ (Low) |
| **NanoClaw** | 0 | 0 | No new releases | ⭐ (Minimal) |
| **IronClaw** | 17 | 9 (9 merged/closed today) | No new releases | ⭐⭐⭐⭐ (High) |
| **LobsterAI** | 6 | 15 (10 merged, 5 open) | v2.2.0 (stable, 2026.8.31) | ⭐⭐⭐⭐ (High) |
| **TinyClaw** | 0 | 0 | No new releases | ⭐ (None) |
| **Moltis** | 0 | 1 | No new releases | ⭐ (None) |
| **CoPaw** | 31 | 31 (mostly open) | v2.2.0 (stable) | ⭐⭐⭐⭐ (High) |
| **ZeptoClaw** | 50 | 50 (all open) | No new releases | ⭐⭐⭐ (Moderate) |
| **ZeroClaw** | 50 | 50 (all open) | No new releases | ⭐⭐⭐ (Moderate) |

*\*Health Score: Subjective assessment based on activity velocity, release cadence, and community responsiveness.*

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Feature Parity & Maturity**: OpenClaw leads in cross-platform consistency (native Mermaid rendering on macOS/iOS/Android), hot-reload auth, and realtime audio support—capabilities that other projects are still implementing.
- **Release Cadence**: With v2026.9.1 released today, OpenClaw demonstrates the ability to ship stable, feature-rich releases quickly—a benchmark for the ecosystem.
- **Community Engagement**: 351 open issues and 393 PRs under review indicate strong user involvement and a mature issue-tracking discipline.

**Technical Approach Differences:**
Unlike Hermes Agent, which pursues radical architectural simplification (reducing LOC by 35.6% and decomposing monolithic modules), OpenClaw emphasizes incremental feature expansion atop a stable foundation. PicoClaw and LobsterAI adopt a pragmatic, dependency-focused strategy—PicoClaw prioritizes channel-specific reliability (Slack media uploads), while LobsterAI focuses on hub-style multi-tenancy and MCP integration. IronClaw's approach is fundamentally different: it is restructuring its entire codebase to eliminate TypeScript suppressions and achieve type safety, signaling a shift toward a more rigorously engineered, less experimental codebase.

**Community Size Comparison:**
OpenClaw appears to have the largest engaged community among the listed projects, evidenced by the highest number of simultaneous issues and PRs. However, Hermes Agent and CoPaw show comparable activity levels with larger release histories (v0.21.0, v2.2.0 respectively), suggesting established ecosystems with deeper institutional backing.

## 4. Shared Technical Focus Areas

Across multiple projects, three technical domains emerge as universal pain points and opportunities:

1. **Resource Lifecycle Management** – All projects grapple with memory leaks (child process zombies in Hermes Agent, SQLite unbounded growth in OpenClaw, resource exhaustion in IronClaw). The community consensus is clear: explicit lifecycle hooks, bounded caches, and strict cleanup protocols are non-negotiable for production-grade agents.

2. **Cross-Platform Consistency** – OpenClaw's native Mermaid rendering, PicoClaw's iOS/Android support, and LobsterAI's multi-channel parity illustrate a growing demand for consistent UX across desktops, mobiles, and web interfaces. This drives ongoing work on standardized APIs and abstraction layers.

3. **Secure Execution Environments** – Hermes Agent's sandbox refactoring, IronClaw's granular sandbox policy RFC, and ZeroClaw's RUSTSEC advisory (#9899) underscore a sector-wide push toward formal security guarantees. Projects must balance flexibility (multi-provider support) with isolation (credential chain verification, file system restrictions).

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | PicoClaw | LobsterAI | IronClaw | Others |
|-----------|----------|--------------|----------|-----------|-----------|----------|
| **Primary Goal** | Reference implementation with broad platform parity | Architectural overhaul & reliability | Channel-specific reliability | Hub-style multi-tenancy | Codebase simplification & type safety | Specialized tooling (CoPaw, ZeptoClaw, ZeroClaw) |
| **Target Users** | Developers building cross-platform assistants | Enterprise/advanced users needing robust agent loops | Power users on Slack/QQ/LINE | Teams requiring multi-tenant hubs | Researchers/developers prioritizing clean architecture | Niche integrators (CoPaw), generalists (ZeptoClaw/ZeroClaw) |
| **Technical Architecture** | Monorepo with native mobile support | Major refactoring (god-file elimination) | Modular microservices (WebUI, CLI, SDK) | Hub-centric with MCP integration | Decomposed codebase (LOC reduction) | Various (distributed, containerized, etc.) |
| **Stability Profile** | Very high (500 issues/PRs, active triage) | High (major architectural changes underway) | Moderate (steady but limited scope) | High (stable v2.2.0) | High (rapid iteration, major refactor) | Variable (some stagnant, some hyper-active) |
| **Key Differentiator** | First-class native Mermaid rendering, hot-reload auth | Largest LOC reduction, architectural reset | Best-in-class Slack/Line media handling | Hub model for multi-tenant deployments | Most aggressive type-safety focus | Niche integrations or specialized tooling |

## 6. Community Momentum & Maturity

The ecosystem displays two distinct maturity tiers:

- **Fast-Moving Cohort**: Hermes Agent, OpenClaw, CoPaw, and LobsterAI exhibit high velocity—weekly releases, frequent PR merges, and active RFC processes. These projects are iterating rapidly, often releasing major versions within months. Their strength lies in continuous improvement and responsiveness to user feedback.

- **Stabilizing Cohort**: PicoClaw, ZeroClaw, and IronClaw show solid foundations but slower progress. OpenClaw sits at the intersection: it is mature enough to support enterprise adoption while maintaining active development. IronClaw's major refactor suggests a transition from early-stage experimentation to production readiness.

The **activity tier** breakdown:
- **Hyper-Active**: Hermes Agent, OpenClaw, CoPaw, LobsterAI (50+ issues/PRs, regular releases)
- **Active/Mature**: PicoClaw, IronClaw (moderate activity, stable releases)
- **Steady/Stagnant**: NanoClaw, Moltis, TinyClaw, ZeroClaw, NanoBot (low or zero activity)

This stratification implies that organizations should allocate resources differently: invest heavily in the hyper-active projects for cutting-edge features, while leveraging the stable ones (OpenClaw, LobsterAI) for production systems requiring proven reliability.

## 7. Trend Signals

Emerging themes from the community feedback and project digests include:

1. **Sandbox Hardening**: Multiple projects (OpenClaw, IronClaw, ZeroClaw) are addressing security vulnerabilities related to sandbox isolation, credential chain verification, and unauthorized introspection. This signals a maturing understanding that agent security cannot be an afterthought.

2. **Cross-Platform Consistency**: The proliferation of native diagram rendering (OpenClaw), mobile-compatible chat UIs (PicoClaw), and multi-channel hubs (LobsterAI, CoPaw) indicates a market demand for seamless experiences across devices and platforms.

3. **MCP Integration**: Projects like CoPaw and IronClaw are actively adopting Model Context Protocol (MCP) for interoperability, suggesting that external tool ecosystems will become increasingly important for agent extensibility.

4. **Performance Optimization**: Hermes Agent's core loop improvements and OpenClaw's hot-reload auth reflect a broader industry trend toward minimizing latency and maximizing resource efficiency—critical for long-running agent sessions.

5. **Specialized Tooling Demand**: The rise of hub models (CoPaw) and multi-tenant architectures (LobsterAI) points to enterprise needs for scalable, isolated agent deployments, potentially driving further standardization efforts.

**Value for AI Agent Developers**: Developers should prioritize learning from OpenClaw and LobsterAI for production-grade reliability, while exploring Hermes Agent for advanced architectural patterns and IronClaw for insights into sustainable codebase evolution. For those targeting niche integrations, PicoClaw offers concrete examples of robust channel support, and CoPaw provides a template for hub-based multi-tenancy.

---

*Prepared for technical decision-makers and developers evaluating the open-source AI assistant ecosystem.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑09‑04**

---

### 1. Today's Overview
The repo is in a healthy, active state. **13 pull requests were merged/closed**, covering stability fixes for the WebUI, channels, Matrix, Signal, the SDK, and provider logic. Meanwhile **four new issues opened** (mainly UI/locale bugs) and **one legacy issue was resolved** (#5512). Comment activity remains modest, indicating that most work is carried out via PR descriptions rather than public discussion. Overall, the team is aggressively cleaning up technical debt and expanding UI capabilities.

---

### 2. Releases
**None** – there are no new tags or published releases today.

---

### 3. Project Progress
| PR | Status | Core Change |
|----|--------|-------------|
| **#5504** | **Closed** | Surface model‑retry status (NAN‑34): expose retry countdown and progress in TUI/WebUI without relying on gateway clock. |
| **#5334** | **Closed** | Preserve indentation across message splits – fixes whitespace‑only chunks and aligns Signal UTF‑16 offsets. |
| **#5637** | **Closed** | Propagate Matrix stream‑delivery failures using the channel‑manager retry policy; avoid silent loss of deltas. |
| **#5646** | **Closed** | Language picker now shows only native language names; removed unused English fallbacks and added regression tests. |
| **#5385** | **Closed** | Complete Element SAS verification – accepts modern `m.key.verification.request` events, sends `ready/done` only after MAC completion. |
| **#5413** | **Closed** | Apply the existing fallback error policy to LLM providers that raise exceptions (not just error responses). |
| **#5472** | **Closed** | Honor `*` wildcard in Signal DM and group allowlists while preserving exact sender/group matching. |
| **#5514** | **Closed** | Clear stale WebUI streaming state on Gateway reconnect; fixes the “spinning forever” bug (#5512). |
| **#5515** | **Closed** | Observe failures from delayed session‑reply timeout tasks instead of discarding them; added regression test. |
| **#5629** | **Closed** | `format_tool_hints()` now respects `max_length` for plain tool values (e.g., grep patterns, search queries, globs). |
| **#5635** | **Closed** | Preserve unread SDK stream events when the queue is full – wait for space before adding the completion sentinel. |
| **#5632** | **Closed** | Keep Codex prompt‑cache affinity: same SHA‑256‑derived routing key for both `session-id` header and `prompt_cache_key`. |
| **#5634** | **Closed** | Bound the outbound reply‑fingerprint cache (`ChannelManager._origin_reply_fingerprints`) to prevent unbounded growth. |

These merged items collectively tighten reliability (retries, cache bounds, timeout handling), improve UI consistency (language picker, retry status, streaming state), and harden cross‑protocol integration (Matrix SAS, Signal allowlists, provider fallbacks).

---

### 4. Community Hot Topics
| Item | Comments | Reaction | Core Need |
|------|----------|----------|-----------|
| **#5644** – *WebUI locale registry drops a locale on concurrent startup* | **1** | 0 | Race‑condition fix needed for multi‑locale environments. |
| **#5512** – *WebUI stalls after Gateway restart* (resolved) | **1** | 0 | Critical UI‑stability regression – now addressed by #5514. |
| **#5647** – *Session title not generated when frontend envelope lacks webui flag* | **0** | 0 | Fix for title projection under `unifiedSession` mode – pending fix. |
| **#5645** – *Current Time runtime context missing by default* | **0** | 0 | Core functional regression for automated agents – pending fix. |

Comment volume is low, but the three open bugs (#5644, #5647, #5645) represent user‑facing defects that are likely to generate more discussion as they are investigated.

---

### 5. Bugs & Stability
| Severity | Issue | Impact | Fix Status |
|----------|-------|--------|------------|
| **High** | **#5644** – Locale registry race condition | Potential missing translations, UI broken for concurrent locale loads. | Open – awaiting fix. |
| **High** | **#5645** – Missing Current Time runtime context (0.3.0) | Breaks automated time‑aware workflows that relied on auto‑added context in 0.2.2. | Open – awaiting fix. |
| **Medium** | **#5647** – Session title generation failure | UI shows blank titles for per‑chat sessions when envelope lacks `webui` flag. | Open – fix already drafted in PR #5648 (pending merge). |
| **Medium** | **#5512** – WebUI spinning after Gateway restart | Persistent streaming spinner, stuck turn state. | **Fixed** via #5514. |
| **Low** | **#5641** – iOS PWA tap & status‑bar quirks | Minor UX friction on iOS Safari (tap swallow, status‑bar overlap). | Open – PR #5641 in progress. |
| **Low** | **#5640** – Mobile keyboard input & streaming send | Enter behavior on touch keyboards, composer send handling. | Open – PR #5640 in progress. |

The most urgent backlog items are the three open bugs above; they affect core UI functionality and automated agents.

---

### 6. Feature Requests & Roadmap Signals
The following **open PRs** (or即将 merged drafts) indicate where the team is heading:

| PR | Theme | Likely in Next Release |
|----|-------|------------------------|
| **#5620** | **Cron** – configurable delivery targets & batch archive lifecycle | **Yes** (p2 priority, docs & WebUI already updated). |
| **#5649** | **WebUI** – visual context‑reuse per request (compact composer popover, stacked bar) | **Yes** (p2 priority, improves transparency). |
| **#5640** | **WebUI** – mobile keyboard input (Enter → newline, refined send flow) | **Yes** (p2, iOS & Android composer UX). |
| **#5639** | **WebUI/TUI** – stable session labels, streaming fences, upgraded OpenTUI → 0.5.10 | **Yes** (p2, improves readability of fenced code). |
| **#5641** | **WebUI** – iOS PWA tap & status‑bar fixes (single‑tap rows, proper bar height) | **Yes** (p2, polish). |
| **#5446** | **Codex** – OAuth tokens stored in Nanobot data dir (security) | **Yes** (p2, conflict resolved). |
| **#5648** | **WebUI** – check session metadata for title generation (fixes #5647) | **Yes** (p2, complementary to #5647). |

Collectively, these signals point to a release focused on **UI polish, mobile experience, and operational control (cron/archive)** while tightening **security (token storage)** and **cross‑protocol reliability**.

---

### 7. User Feedback Summary
* **Locale & Context Issues** – Users report that concurrent locale loads can silently drop languages, and the “Current Time” runtime block disappeared in 0.3.0, breaking time‑sensitive prompts.  
* **UI/UX Pain Points** – Mobile users struggle with the composer’s Enter key (sends instead of new line) and iOS PWA tap‑through behavior (hover‑style swallows taps).  
* **Title & Session Management** – Per‑chat session titles are missing when the envelope lacks a `webui` flag, causing confusing empty headers.  
* **Positive Feedback Channels** – PRs for retry status, language picker native names, and context‑reuse visualization have been merged, indicating the community values clearer feedback and better internationalization.

Overall satisfaction is high on the reliability front (many bugs closed) but there is a lingering expectation for consistent, auto‑populated runtime context and robust multi‑locale startup behavior.

---

### 8. Backlog Watch
| Item | Reason it needs maintainer attention |
|------|---------------------------------------|
| **#5644** – Locale registry race condition | Directly impacts users with multiple locales; fix is non‑trivial (concurrency in TypeScript map). |
| **#5645** – Missing Current Time runtime context | Critical for automated agents; regression from a recent version bump. |
| **#5647** – Session title generation bug | UI regression affecting user experience in unifiedSession mode; fix is ready in #5648 but needs merging. |
| **#5639** – Stabilize session labels & TUI streaming | Improves visual stability; depends on OpenTUI upgrade. |
| **#5646** – Language picker native‑only names (already merged) | Now a stable baseline for i18n work. |

These items represent the most pressing **unresolved functional gaps** and should be prioritized for the next minor release cycle.

---

**Project Health:** ✅ Stable with a strong focus on reliability and UI polish. The backlog is manageable, and the upcoming changes align with user‑requested features and bug fixes.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-04

---

## 1. Today's Overview

Hermes Agent shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours (46 issues open, 48 PRs open). No new release was published today. The project is in the middle of a **major architectural refactoring** (PR #102117: −35.6% LOC, god-file decomposition) while simultaneously addressing a cluster of **P0–P1 stability regressions** affecting session persistence, cron delivery, shell-hook registration, and Desktop UX. Community engagement is strong on long-standing UX requests (system tray, multi-profile session markers) and on the automated skills-index freshness alert that has been degraded for weeks.

---

## 2. Releases

**No new releases today.** The last release appears to be v0.21.0 (referenced in issue #102486). The codebase is undergoing a large simplification (PR #102117) that may precede a v0.22.0 cut.

---

## 3. Project Progress

| Item | Status | Summary |
|------|--------|---------|
| **#83993** | ✅ **Closed** | Cron delivery failures silently swallowed — `last_status:ok` hid `last_delivery_error`. Fix ensures users see delivery errors. |
| **#102570** | ✅ **Closed** | Bridge TUI slash commands (`/btw`) to messaging channels (Feishu/Lark, Telegram, Discord). |
| **#102117** | 🔄 **Open (Major)** | Whole-codebase simplification: **1,063,826 → ~676k LOC (−36%)**, 37 god files → 6, zero behavior change. Three integration rounds forward-ported. **Critical path for next release.** |
| **#69832** | 🔄 **Open** | Fix `hermes serve` / `dashboard` shell-hook registration (root cause: commands not in `_AGENT_COMMANDS`). |
| **#102518** | 🔄 **Open** | macOS 27 fix: keep CPython 3.11 on `posix_spawn` at threaded-parent `Popen` sites (addresses #97296 SIGSEGV). |
| **#102534** | 🔄 **Open** | Pin Desktop launch `SessionDB` handle to launch home (fixes multi-profile DB corruption). |
| **#102599/102603/102590** | 🔄 **Open** | MoA configure UX: per-slot `max_tokens` & `reasoning_effort` editing without re-picking model. |
| **#102601** | 🔄 **Open** | Desktop: show profile ownership glyph on every session row in All-profiles recents (closes #102597). |
| **#102594** | 🔄 **Open** | Desktop: opt-in composer task-list visibility toggle. |
| **#102595** | 🔄 **Open** | Desktop: keep plugin pages reachable with sidebar hidden (Bot Mode). |
| **#102600** | 🔄 **Open** | Kanban: terminate live worker on `schedule_task`/`block_task` transitions. |
| **#102596** | 🔄 **Open** | Cron lifecycle guard: route script reads through SQLite live-connection registry (avoids locking `state.db`). |
| **#102598** | 🔄 **Open** | ntfy: route cron deliveries to addressed topic via `publish_topic` bridge. |
| **#102602** | 🔄 **Open** | Relay: re-dial once with fresh token before treating 4401 as revocation. |
| **#3335** | 🔄 **Open (Long-running)** | Zulip integration as bundled platform plugin. |

---

## 4. Community Hot Topics

| Issue/PR | Comments | 👍 | Signal |
|----------|----------|-----|--------|
| **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** Skills index stale/degraded (29.8h old, limit 26h) | 150 | 0 | **Automated freshness probe failing for weeks.** The unified skills index (`/docs/api/skills-index.json`) rebuild cron (6/18 UTC) or deploy workflow is not keeping up. Blocks community skill discovery. |
| **[#78647](https://github.com/NousResearch/hermes-agent/issues/78647)** Repo-wide godfile eradication epic (residual 2K tasks after #102117) | 79 | 0 | **Architectural debt paydown.** Policy: "all god files are sharded, never reverted." 2,000 residual tasks remain after the main simplification PR. |
| **[#38007](https://github.com/NousResearch/hermes-agent/issues/38007)** System tray support for background running (Windows/Linux) | 8 | **13** | **Highest user demand (13 👍).** Desktop quits on window close → cold start every launch. Users want background daemon + tray icon. |
| **[#42962](https://github.com/NousResearch/hermes-agent/issues/42962)** Desktop active session doesn't refresh after Telegram updates same session | 9 | 0 | **Cross-frontend sync gap.** Messages persist to shared `state.db` but Desktop view stays stale until manual refresh. |
| **[#69825](https://github.com/NousResearch/hermes-agent/issues/69825)** `serve` command never registers shell hooks (`register_from_config` never called) | 7 | 0 | **Security boundary regression.** Configured hooks (destructive-command guards, tenant guards) work in CLI/TUI but **silently absent in Desktop backend**. |

**Underlying needs:**  
- **Reliability over features** — multiple P0/P1 bugs in session state, cron delivery, and hook registration.  
- **Desktop parity with CLI/TUI** — hooks, session sync, background running, multi-profile UX.  
- **Observability** — silent failures (cron delivery, Discord adapter status, skills index) erode trust.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **P0** | **[#102194](https://github.com/NousResearch/hermes-agent/issues/102194)** | CLI path never persists `api_content` sidecar → injected `<memory-context>`/tool-result decorations dropped at turn boundary → **first API call of every new turn misses prompt cache** (cache_read collapses to header-only). | — |
| **P1** | **[#102574](https://github.com/NousResearch/hermes-agent/issues/102574)** | Shared `PeriodicScheduler` runs all callbacks inline on one daemon thread; **one blocked callback stalls every safety timer** (turn-liveness, fire/turn lease refresh, delegated-child heartbeats). | — |
| **P1** | **[#102486](https://github.com/NousResearch/hermes-agent/issues/102486)** | Restart-safe cron worker dispatch fails closed on **systemd 249** — `OOMPolicy=kill` rejected as unknown assignment. Every gateway cron worker dispatch fails post-v0.21.0. | — |
| **P1** | **[#99956](https://github.com/NousResearch/hermes-agent/issues/99956)** | Cron `deliver: bot-chat` fails (exit 1) if target profile has **active session lock** (CLI/TUI/Desktop). Scheduler records failure but user sees no action. | — |
| **P1** | **[#102504](https://github.com/NousResearch/hermes-agent/issues/102504)** | **Duplicate of #69825**: Shell hooks from `config.yaml` never register in `hermes serve` (Desktop backend) — `_prepare_agent_startup` skips "serve" command. | **[#69832](https://github.com/NousResearch/hermes-agent/pull/69832)** |
| **P2** | **[#102566](https://github.com/NousResearch/hermes-agent/issues/102566)** | Assistant final response replaced with `"[response interrupted]"` placeholder **despite `finish_reason=stop`**. User sees truncated answer. | — |
| **P2** | **[#102511](https://github.com/NousResearch/hermes-agent/issues/102511)** | `hermes cron run` leaves agent-backed executions in **`unknown` state** after caller timeout. Scheduler later records ambiguous state. | — |
| **P2** | **[#101321](https://github.com/NousResearch/hermes-agent/issues/101321)** | **macOS Desktop + Grok**: old answer lands at bottom, replacing new one. Chat spine broken — "impossible to use." | — |
| **P2** | **[#88621](https://github.com/NousResearch/hermes-agent/issues/88621)** | Desktop incoming messages **interrupt active composer typing** — composer loses focus/keystrokes until re-click. | — |
| **P2** | **[#97296](https://github.com/NousResearch/hermes-agent/issues/97296)** | macOS 27 beta: Kanban dispatcher `Popen(start_new_session=True)` forks threaded gateway → **SIGSEGV in Network.framework atfork** (0-byte worker logs, pid not alive @ 60s). | **[#102518](https://github.com/NousResearch/hermes-agent/pull/102518)** |
| **P2** | **[#96743](https://github.com/NousResearch/hermes-agent/issues/96743)** | SSH remote mode: Renderer stays on "Connecting…" 9+ min after main logs "Remote Hermes backend is ready" (healthy tunnel). | — |
| **P2** | **[#102592](https://github.com/NousResearch/hermes-agent/issues/102592)** | Plugin-registered hooks (`pre_llm_call`, `post_llm_call`, …) **never fire on `serve` / `dashboard`** — plugin discovery skipped at startup. | — |
| **P3** | **[#64638](https://github.com/NousResearch/hermes-agent/issues/64638)** | Gateway restart waits for `TimeoutStopSec` when Email IMAP executor poll is active (synchronous poll in default executor blocks SIGTERM). | — |
| **P3** | **[#102554](https://github.com/NousResearch/hermes-agent/issues/102554)** | Discord adapter never clears fatal status on reconnect — dashboard shows stale "Discord startup failed" indefinitely. | — |
| **P3** | **[#101925](https://github.com/NousResearch/hermes-agent/issues/101925)** | `auxiliary.vision` ignores keyless `opencode-free` provider (401) while chat works — vision path missing empty-Auth override. | — |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|-----------------------------|
| **[#38007](https://github.com/NousResearch

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑09‑04**

---

### 1. Today’s Overview  
PicoClaw remains an actively maintained open‑source AI‑assistant framework, with 5 issues and 7 pull requests updated in the last 24 hours. The project shows a healthy mix of bug‑fix activity and dependency upgrades, while core functionality (web UI, Slack, QQ, LINE, and Antigravity) continues to see user‑reported friction. No new releases were cut, indicating that the team is focused on stabilisation and incremental improvements rather than feature bumps.

---

### 2. Releases  
*No new releases were published in the past day.*  

---

### 3. Project Progress  
- **Closed PR #3329** (merged 2026‑09‑03) fixes a stale LINE webhook configuration bug by ensuring `webhook_host` and `webhook_port` are actually read from settings, resolving issue #3328.  
- The remaining 6 open PRs are mostly dependency bumps (AWS SDK, Go term, ergo‑chat IRC, protobuf, LarkSuite SDK) and a UI‑related fix for Slack media uploads (PR #3340). These upgrades improve library compatibility and pave the way for the pending UI‑lag fix.

---

### 4. Community Hot Topics  

| Item | Type | Link | Activity (comments/👍) | Underlying Need |
|------|------|------|------------------------|-----------------|
| **#3281** | Issue (open, stale) | <https://github.com/sipeed/picoclaw/issues/3281> | 9 comments, 2 👍 | UI chat input becomes extremely laggy once chat history grows – users need a responsive web UI for long‑running sessions. |
| **#3339** | Issue (closed, stale) | <https://github.com/sipeed/picoclaw/issues/3339> | 3 comments, 0 👍 | Antigravity model calls always return a 429 “resource exhausted” error despite valid OAuth; users expect reliable model inference without quota‑related failures. |
| **#3338** | Issue (open) | <https://github.com/sipeed/picoclaw/issues/3338> | 3 comments, 0 👍 | Slack media uploads fail (`file.upload.v2: file size cannot be 0`) because `FileSize` is omitted from `UploadFileParameters`. The community needs reliable media handling for Slack integration. |
| **#3340** | PR (open, stale) | <https://github.com/sipeed/picoclaw/pull/3340> | — (no reactions) | Implements the missing `FileSize` field in Slack media upload parameters, directly addressing #3338. This is the most concrete fix currently under review. |
| **#3349** | Issue (open) | <https://github.com/sipeed/picoclaw/issues/3349> | 3 comments, 0 👍 | QQ channel cannot be used (401 auth error). Users need stable cross‑channel support, indicating a gap in authentication handling for third‑party messaging platforms. |

*Analysis*: The most active discussion centers on **UI performance** (#3281) and **media upload reliability** (#3338 / #3340). Both affect user experience heavily, suggesting that the maintainers should prioritize UI optimisation and complete the Slack media fix soon.

---

### 5. Bugs & Stability  

| Severity | Issue | Summary | Fix PR (if any) |
|----------|-------|---------|-----------------|
| **High** | #3281 | Web UI chat input lags when history length increases. | No fix yet; PR #3340 (Slack media) is unrelated, but a UI‑focused PR would be required. |
| **High** | #3339 | Antigravity generation returns generic 429 “resource exhausted” despite valid OAuth scopes. | No remediation PR; likely a quota or backend throttling issue. |
| **Medium** | #3338 | Slack media uploads rejected because `FileSize` is zero. | **PR #3340** (open) addresses this directly; awaiting merge. |
| **Medium** | #3349 | QQ channel fails with 401 authorization error (header format). | No fix PR yet; indicates missing/incorrect auth handling. |
| **Low** | #3346 | Abnormal responses from RKLLM model on ARM board (potential performance or model‑specific bug). | No associated PR; may need model‑specific tuning. |

*Ranking*: The UI lag (#3281) and Slack media failure (#3338) are the most urgent, as they directly block day‑to‑day interaction. The 429 error (#3339) is critical for model reliability but may be a backend/resource‑management problem rather than a code bug.

---

### 6. Feature Requests & Roadmap Signals  

- **QQ channel support** (#3349) signals a demand for broader third‑party messaging integration beyond Slack and LINE.  
- **RKLLM abnormal responses** (#3346) hints that the current ARM‑optimized model handling may need refinement, possibly pointing toward a future performance‑oriented feature or a dedicated ARM‑specific branch.  
- The **Slack media fix** (#3340) demonstrates that the roadmap includes concrete UI/UX improvements for media handling, which could be bundled into the next minor release.

---

### 7. User Feedback Summary  

- **Pain Points**:  
  - *Web UI*: Input latency when chat history grows (Issue #3281).  
  - *Model reliability*: Repeated 429 errors from Antigravity (Issue #3339).  
  - *Media handling*: Slack uploads fail due to missing file size (Issue #3338).  
  - *Channel auth*: QQ channel cannot be used because of header formatting errors (Issue #3349).  
- **Use Cases**: Users are running long‑form conversational agents via the web UI, integrating AI responses into Slack, and attempting to use QQ as a messaging bridge.  
- **Satisfaction/Dissatisfaction**: Overall satisfaction appears moderate; users appreciate the breadth of supported channels but are frustrated by stability and performance issues that hinder productive workflow.

---

### 8. Backlog Watch  

| Item | Reason for Attention | Status |
|------|----------------------|--------|
| **#3281** (UI lag) | High comment count, stale label, no recent activity after 2026‑09‑04 update. | Open, awaiting a performance‑focused PR. |
| **#3339** (429 Antigravity) | Closed but still relevant; users report repeated quota‑exhaustion errors. | Closed; maintainers should verify backend quota configuration. |
| **#3338** (Slack media) | Open; critical for users who rely on Slack notifications. | PR #3340 addresses it; merge needed. |
| **#3349** (QQ channel) | Open, shows auth‑format problem; impacts multi‑channel users. | Open, requires authentication logic update. |
| **#3340** (Slack FileSize fix) | Open, directly resolves #3338; still awaiting review/merge. | Open, high priority for UI/UX stability. |
| **#3329** (LINE webhook) | Closed but ties to webhook handling; may affect other channels. | Closed; good to keep as reference for future channel implementations. |

*Recommendation*: The maintainer community should prioritize merging PR #3340, then address the UI lag in #3281 (potentially by optimizing chat rendering or pagination). Following that, a review of Antigravity quota handling and QQ authentication logic would improve overall stability.

--- 

*All links are to the official PicoClaw repository at https://github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-09-04

## 1. Today's Overview
IronClaw is experiencing a period of high engineering velocity, characterized by significant hardening of the WebUI type safety, key performance optimizations in the core agent loop, and architectural planning for the Reborn sandboxing model. Over the last 24 hours, the project recorded 17 pull request updates and 7 issue updates. The merge rate was strong, with 9 PRs closed/merged, reflecting a highly active core contributor base focused on reducing technical debt (specifically eliminating TypeScript suppressions) and improving runtime efficiency. Overall project health is excellent, with clear tracking of architectural spikes and failure taxonomies.

## 2. Releases
*   **No new releases** were published in the last 24 hours.

## 3. Project Progress
The project saw significant advancement across multiple subsystems, with 9 PRs merged or closed today:
*   **WebUI Type Safety & CI Ratcheting (Major Cleanup):** A massive effort to remove redundant `@ts-nocheck` directives and enforce type safety was finalized. This included typing production components and hooks (PR #8039, removing 64 suppressions), typing frontend API boundaries (PR #8038), typing test infrastructure (PR #8040, removing 94 test-side suppressions), and introducing a source-convention ratchet to prevent regressions (PR #8037). This closed three tracking issues (#8033, #8035, #8036).
*   **Core Loop & LLM Performance Gains:** 
    *   PR #8043 merged a critical performance fix coalescing streamed text updates, eliminating an $O(N \cdot k)$ re-sanitization bottleneck that caused severe CPU overhead during long streamed model responses.
    *   PR #7984 optimized `tool_search` replies, sizing them strictly to the model's first-look envelope rather than an independent budget, saving context window space.
*   **Subagent Architecture:** PR #8046 merged a feature ensuring a subagent child blocked on approval or credential gates now surfaces the block visibly to the parent's inbox. PR #8061 verified the concurrent-children cap and the child-gate card replay flow.
*   **Pipeline Unblocking:** Minor test fixes (PR #8055, PR #8058) were merged to restore green builds on the `main` branch.

## 4. Community Hot Topics
*   **The Reborn Sandbox Architecture Spike (#7903):** 
    *   *Link:* [nearai/ironclaw Issue #7903](https://github.com/nearai/ironclaw/issues/7903)
    *   *Analysis:* This high-risk, high-scope issue is the primary architectural discussion point. It debates moving the canonical agent loop out of the trusted host process and into a persistent, per-user Docker sandbox. This is a foundational design choice balancing security/

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest | 2026-09-04  

---

### **Today's Overview**  
LobsterAI demonstrated moderate development activity with **6 issues** (4 open, 2 closed) and **15 PRs** (10 merged, 5 open) updated within the last 24 hours. The project continued resolving critical stability and UX issues, while feature requests for MCP support and cloud integration gained traction. No new releases were made, though work on the upcoming 2026.9.4 release line intensified with fixes and enhancements.  

---

### **Releases**  
No new releases are associated with this update. The most recent release, **2026.8.31** (merged in PR #2600), introduced features like video sharing, improved login messaging, and Windows installer recovery.  

---

### **Project Progress**  
10 PRs were merged today, advancing key improvements and fixes:  
- **PR #2609**: Added confirmation dialogs to prevent unintended app updates or shutdowns during agent tasks (renderer/main stability).  
- **PR #2607**: Removed unused MCP server dependencies to reduce plugin bundle bloat (openclaw optimization).  
- **PR #2602**: Restored interactive browser functionality and saved credential support (artifacts/renderer).  
- **PR #2599**: Enhanced visibility of multi-instance bot configurations in the UI.  
- Additional merged fixes addressed DPI-awareness for Windows installers (PR #2605), scrollbar overflow in MCP config dialogs (PR #1081), and duplicate error messaging (PR #1087).  

---

### **Community Hot Topics**  
**Most Active Open Issues**:  
1. **Issue #2601**: Request for MCP App/Prefab UI rendering in desktop client.  
   - [Link](https://github.com/netease-youdao/LobsterAI/issues/2601)  
   - *Underlying Need*: Compatibility with emerging MCP standards for interactive UIs; critical for integration with tools like FastMCP or PrefectHQ.  

2. **Issue #1082**: Alert about outdated openclaw version (v2026.3.2) risking compliance/adoption.  
   - [Link](https://github.com/netease-youdao/LobsterAI/issues/1082)  
   - *Underlying Need*: Security and regulatory compliance; urgency driven by government standards requiring updates.  

3. **Issues #1088 and #1089**: Concurrency-related bugs in session/turn management.  
   - [Links](https://github.com/netease-youdao/LobsterAI/issues/1088), [Issue #1089](https://github.com/netease-youdao/LobsterAI/issues/1089)  
   - *Underlying Need*: Stability under rapid user interaction or IM-driven messaging scenarios.  

---

### **Bugs & Stability**  
- **Critical Risks**:  
  1. **Issue #1089**: Concurrent `startSession/continuesSession` calls corrupt messages (merged PR #1087 partially addresses error display overlaps but not reentrancy guards).  
  2. **Issue #1082**: Outdated openclaw version may violate compliance (fix not yet proposed).  

- **Active Fixes**:  
  - PR #1087 resolves error duplication; PR #1277 (electron updates) may indirectly address stability via version upgrades.  

---

### **Feature Requests & Roadmap Signals**  
- **Closed Features**:  
  - **Issue #1552**: Markdown/file-card previews (merged in PR #2602) enhance file management UX.  
- **Open Requests**:  
  1. **PR #1078**: Alerting for failed scheduled tasks (IM notifications) pending review.  
  2. **PR #1079**: Progress panel with tool execution history/diff viewers (200+ LOC) indicates roadmap focus on transparency.  
- **MCP Ecosystem**: Issue #2601 signals priority for supporting MCP Apps, likely in Q3/Q4 2026 releases.  

---

### **User Feedback Summary**  
- **Pain Points**:  
  - Users struggle with file preview (resolved via #2602) and duplicate error messages (addressed in #1087).  
  - IM configuration guides (Issue #1556) and outdated openclaw versions create accessibility/compliance issues.  
- **Satisfaction**:  
  - Improved quota messaging (#2603) and voice input UX (#2604) suggest incremental UX wins.  

---

### **Backlog Watch**  
1. **Issue #1277**: Dependabot PR to upgrade Electron v40→v44; high impact on stability/cross-platform compatibility.  
2. **Issue #1078**: Scheduled task alerting (still open since March 2026); addresses operational visibility gaps.  
3. **Issue #1088**: TurnToken validation in prefetch logic; key for preventing session state corruption (no PR yet).  

--- 

**Data Source**: GitHub Activity Summary (2026-09-04)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑09‑04**

---

### 1. Today’s Overview  
The Moltis repository shows minimal day‑to‑day activity: no issues were updated in the last 24 hours, and no new releases were published. The sole recent development is an open pull request (#1257) that adds an optional `tool_call_id` field to the hook lifecycle events, aiming to improve end‑to‑end tracing of tool invocations. Overall, the project appears stable with low traffic and no critical bugs reported.

---

### 2. Releases  
*No new releases were published.*  

---

### 3. Project Progress  
- **Merged/Closed PRs today:** 0  
- **Open PRs:** 1 (the “fix(hooks): complete lifecycle dispatch” PR).  
- **Feature/bug activity:** No new features or bug fixes were merged today; the only work in progress is the above PR, which is still awaiting reviewer feedback.

---

### 4. Community Hot Topics  
**PR #1257 – “fix(hooks): complete lifecycle dispatch”** (opened 2026‑09‑02, updated 2026‑09‑03)  
- **Link:** <https://github.com/moltis-org/moltis/pull/1257>  
- **Summary:** Adds an optional `tool_call_id` to `BeforeToolCall`, `AfterToolCall`, and `ToolResultPersist` events, preserving backward compatibility while enabling a unique identifier for each tool invocation. The PR also ensures that previously emitted `AgentEnd`, `MessageSending`, and `MessageSent` events are dispatched for native, non‑tool‑based interactions.  
- **Underlying need:** The community is seeking richer traceability and correlation of tool‑call lifecycles, which is essential for debugging, logging, and monitoring in complex agent workflows. By providing a stable identifier, developers can more reliably link logs, metrics, and UI events across the entire tool invocation chain.

---

### 5. Bugs & Stability  
- **Reported bugs today:** 0  
- **Stability concerns:** None detected in the last 24 hours. The open PR is the only active item and does not currently introduce instability.

---

### 6. Feature Requests & Roadmap Signals  
- **Feature requests:** 0  
- **Roadmap signals:** The addition of `tool_call_id` suggests a roadmap focus on enhanced observability and traceability, which may lead to future extensions such as automated log correlation, distributed tracing integrations, or richer event payloads.

---

### 7. User Feedback Summary  
- **Pain points / use cases:** No direct user feedback is captured in the current data (no issues or comments). The open PR indicates that users (or contributors) are interested in finer‑grained event correlation for tool‑centric workflows, implying a need for better diagnostic tooling.  
- **Satisfaction / dissatisfaction:** No quantitative sentiment can be derived at this moment.

---

### 8. Backlog Watch  
- **Open PR #1257** remains unmerged and is the only pending change. It has received no reactions (👍 = 0) and no reviewer comments yet, so maintainer attention is advisable to keep the PR moving toward merge.  
- **Issues:** None reported or updated in the past day, so the backlog is effectively empty.

--- 

*All links are to the official GitHub repository: <https://github.com/moltis-org/moltis>.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) Project Digest — 2026-09-04**

**1. Today's Overview**  
The project exhibits high development velocity, with 31 issues and 29 pull requests updated in the last 24 hours. Today marks the stable release of **v2.2.0**, which introduces significant architectural shifts like the QwenPaw Hub. Community engagement is robust, particularly around the new multi-tenant Hub discussion and critical security reports. While several high-impact bug fixes have been merged (e.g., Langfuse, OpenCode, Windows ACP), the maintainers are actively inundated with security, UX, and integration reports that require prioritization.

**2. Releases**  
*   **v2.2.0 (Stable)**  
    *   **What's Changed:** The major highlight is **QwenPaw Hub**, enabling self-hosted multi-user environments with local-process or Docker runtimes, workspace-level access controls, credential management, and reverse-proxy support. 
    *   **Migration Notes:** Users upgrading from the 2.1.x line should note changes to `ModelInfo.max_tokens` (now `max_output_length`), which may break custom provider configurations if not migrated. Additionally, the 2.2.0 beta series introduced behavioral changes around loop.rubric forced confirmation turns and UI rendering (e.g., Agent model routing panel visibility).

**3. Project Progress**  
Key merged/closed PRs advancing the project today include:
*   **#7532** *(Fix)*: Resolved Langfuse monitoring blank tool outputs by ensuring async event streams fully consume data before writing Observation spans. *(Fixes #7529)*
*   **#7536** *(Fix)*: Added the mandatory `x-opencode-session` header to OpenCode API requests to prevent upcoming service errors.
*   **#7539** *(Fix)*: Moved managed Playwright Chromium installation off the critical startup path to lazy-load on first `Browser.connect()`, eliminating a ~60s desktop startup block.
*   **#7538** *(Feat)*: Unified runtime environment management, ensuring QwenPaw-managed values properly override inherited system or `.env` variables.
*   **#7441** *(Feat)*: Upgraded ReMe memory runtime to 0.4.1.11 and added "Auto Fin" as a scheduled long-term memory source.
*   **#7525** *(Fix)*: Corrected governance logic so CRITICAL security findings require manual approval rather than being auto-rejected if the rule isn't set to auto-deny.
*   **#7401** *(Fix)*: Prevented Windows ACP agent stalls by making `bootstrap_plugins()` asynchronous during workspace initialization.
*   **#7502** *(Feat)* & **#7487** *(Feat)*: Redesigned the Console sidebar/settings experience and unified theme tokens across the UI.

**4. Community Hot Topics**  
*   **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** (17 comments): *Open Discussion.* The community is actively brainstorming the QwenPaw Hub multi-tenant roadmap post-2.2.0. *Underlying Need:* Strong demand for team collaboration, admin-managed skills, and multi-user access.
*   **[#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511)** (9 comments): *Closed Bug.* Reports that the QwenPaw2 security sandbox was breached. *Underlying Need:* Urgent reassessment of sandbox isolation and execution security.
*   **[#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036)** (6 comments): *Open Good First Issue.* Adding a model requires too many clicks and UI hops. *Underlying Need:* Streamlined developer/UX experience for model onboarding.

**5. Bugs & Stability** *(Ranked by Severity)*  
*   **Critical (Security/Crash):**
    *   **[#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511)**: Security sandbox breached.
    *   **[#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)**: Dangerous instructions can easily evade the safety guardrails.
    *   **[#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510)**: `/memory/status` endpoint returns 500 on v2.2.0-beta.7 Desktop.
*   **High (Feature Breakage/Integration):**
    *   **[#7474](https://github.com/ai/agentscope-ai/QwenPaw/issues/7474)**: Custom providers fail to load due to the `max_tokens` -> `max_output_length` migration in v2.2.0.
    *   **[#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505)**: Frequent client disconnects when accessing local LAN LLM servers, causing timeouts.
    *   **[#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)**: Feishu session queue consumer gets stuck, causing the session to silently stop responding.
    *   **[#7513](https://github.com/agentscope-ai/QwenPaw/issues/7513)**: deepseek-v4-pro outputs mixed tool-call data during conversation.
*   **Medium (UX/Performance):**
    *   **[#7507](https://github.com/agentscope-ai/QwenPaw/issues/7507)**: WeCom channel streams character-by-character with a 150ms throttle, feeling sluggish compared to WeChat.
    *   **[#7516](https://github.com/agentscope-ai/QwenPaw/issues/7516)**: WeCom fails to send base64 data URL images.
    *   **[#74

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-04

---

## 1. Today's Overview

ZeroClaw demonstrates **sustained high activity** on 2026-09-04, with 50 issues and 50 pull requests updated in the last 24 hours. All 50 open PRs remain open with no merges recorded, suggesting a focus on code review and iteration. The project shows active RFC discussions around security (granular sandbox policy, verbatim channel send), architecture decisions (maintainer decision queue), and web/gateway compatibility. No new releases shipped today. A notable large-scale refactor (cron extraction, 11,386 lines) is in review alongside multiple small bug fixes across runtime, channels, and providers.

---

## 2. Releases

**No new releases today.** The project has not published any versions in the current reporting period. Users seeking the latest stable release should refer to the most recent tagged release on the repository.

---

## 3. Project Progress

The following pull requests represent recent activity. All are currently open (no merges recorded in the last 24 hours):

| PR | Author | Description | Size |
|----|--------|-------------|------|
| [#10557](https://github.com/zeroclaw-labs/zeroclaw/pull/10557) | JordanTheJet | **Refactor**: Extract cron into `zeroclaw-cron` crate (11,386 lines moved) | XL |
| [#10563](https://github.com/zeroclaw-labs/zeroclaw/pull/10563) | wromansky | **Feature**: Re-sample and flag replies claiming unreceipted actions | L |
| [#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596) | Audacity88 | **Feature**: Paginate persisted ACP transcripts with cursor-based navigation | XL |
| [#10584](https://github.com/zeroclaw-labs/zeroclaw/pull/10584) | Audacity88 | **Feature**: Persist Todo tracker dismissal across sessions | XL |
| [#10597](https://github.com/zeroclaw-labs/zeroclaw/pull/10597) | wromansky | **Feature**: Log reported context usage and budget trims | — |
| [#10583](https://github.com/zeroclaw-labs/zeroclaw/pull/10583) | JordanTheJet | **Feature**: Accept any file on `/api/upload` with RPC-parity document markers | M |
| [#10595](https://github.com/zeroclaw-labs/zeroclaw/pull/10595) | Audacity88 | **Bug Fix**: Cache wrapped rows for long thinking output | XL |
| [#10565](https://github.com/zeroclaw-labs/zeroclaw/pull/10565) | tidux | **Bug Fix**: Pin local Code sessions to process cwd | S |
| [#10589](https://github.com/zeroclaw-labs/zeroclaw/pull/10589) | JordanTheJet | **Config**: Default `multimodal.max_image_size_mb` to 20 MiB ceiling | S |
| [#10599](https://github.com/zeroclaw-labs/zeroclaw/pull/10599) | JordanTheJet | **Bug Fix**: Record non-execution so silent cron failures are visible | — |
| [#10600](https://github.com/zeroclaw-labs/zeroclaw/pull/10600) | JordanTheJet | **Bug Fix**: Stop reporting success for outbound sends that never happened | — |
| [#10601](https://github.com/zeroclaw-labs/zeroclaw/pull/10601) | Audacity88 | **Bug Fix**: Honor `delegation_policy` for bounded delegate targets | — |
| [#10602](https://github.com/zeroclaw-labs/zeroclaw/pull/10602) | Audacity88 | **Bug Fix**: Retry replay-safe empty streams once | M |
| [#10567](https://github.com/zeroclaw-labs/zeroclaw/pull/10567) | wromansky | **Feature**: Stamp recalled memory entries with their recall date | S |
| [#10578](https://github.com/zeroclaw-labs/zeroclaw/pull/10578) | JordanTheJet | **Feature**: Add `/upload` slash command to open image picker | XS |
| [#10590](https://github.com/zeroclaw-labs/zeroclaw/pull/10590) | JordanTheJet | **Feature**: Add canonical release target registry (`zeroclaw-dist`) | — |
| [#10591](https://github.com/zeroclaw-labs/zeroclaw/pull/10591) | JordanTheJet | **Feature**: Add MCP launcher and per-platform distribution | — |
| [#10581](https://github.com/zeroclaw-labs/zeroclaw/pull/10581) | taljeon | **Docs**: Add Twitch setup guide | XS |
| [#10562](https://github.com/zeroclaw-labs/zeroclaw/pull/10562) | JordanTheJet | **Docs**: Define how holding-crate exceptions are granted | S |

**Notable trends**: Multiple PRs from JordanTheJet (distinguished contributor) address cross-cutting concerns: distribution infrastructure, cron extraction, and channel reliability. Audacity88 leads runtime improvements and ACP transcript pagination.

---

## 4. Community Hot Topics

Most active discussions by comment count:

| Issue | Title | Comments | Category |
|-------|-------|----------|----------|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy — filesystem restrictions | 23 | Security/Architecture |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | **[Bug]**: `verifiable-intent` evaluates constraints without verifying credential chain | 14 | Security/Bug |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs and design issues | 14 | Process |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | RFC: Verbatim channel send over the gateway, without an agent turn | 13 | Gateway/Architecture |
| [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) | RFC: define Web bundle/daemon compatibility for `web_dist_dir` | 12 | Web/Config |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | feat(ci): improve cached Rust builds and CI critical path | 7 | CI |

**Analysis of underlying needs**:

- **Security hardening**: The granular sandbox RFC (#6996) reflects community demand for OS-level filesystem isolation (Bubblewrap, Landlock, Seatbelt) aligned with application-layer policies. Issue #9328's verifiable-intent bug reveals concerns about cryptographic credential chain verification gaps.
- **Architecture governance**: The maintainer decision queue (#8692) indicates the project recognizes a need for structured RFC decision-making processes.
- **Gateway extensibility**: The verbatim channel send RFC (#10050) addresses a gap where 47 distinct `/api/*` paths exist but none deliver caller-supplied messages verbatim without an agent turn.
- **CI performance**: The Rust build caching issue (#7108) highlights developer frustration with 15-20 minute CI times for small changes.

---

## 5. Bugs & Stability

Bugs ranked by severity (P1 = highest):

### P1 — Critical/S1

| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | [Tracker]: triage and remove bitmaps unmaintained advisory waiver (RUSTSEC-2026-0247) | Open, Blocked | No |
| [#9654](https://github.com/zeroclaw-labs/zeroclaw/issues/9654) | **[Bug]**: genuine operator denial reaches model as three words with no semantics | Closed | PR #9423 |
| [#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) | **[Bug]**: interactive approval responses accepted from any chat member (Telegram, Slack, Lark, Matrix) | Closed | — |
| [#9231](https://github.com/zeroclaw-labs/zeroclaw/issues/9231) | **[Bug]**: Docker runtime commands nested inside a second Docker sandbox | Open, In Progress | — |

### P2 — Degraded Behavior/S2

| Issue | Title | Fix PR |
|-------|-------|--------|
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | **[Bug]**: Interactive agent session caps context at 32,000 tokens, ignoring `max_context_tokens = 131072` | — |
| [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) | **[Bug]**: zerocode ignores launch directory and forces agent workspace as cwd | PR #10565 |
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | **[Bug]**: OpenCode providers never send `x-opencode-session` header | — |
| [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) | **[Bug]**: `/health` reports channel healthy that has never connected | — |
| [#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983) | **[Bug]**: Fallback model without vision incorrectly reports cause of error | — |
| [#10238](https://github.com/zeroclaw-labs/zeroclaw/issues/10238) | **[Bug]**: ZeroCode shows stale Connected state after daemon exits | — |
| [#9857](https://github.com/zeroclaw-labs/zeroclaw/issues/9857) | **[Bug]**: JSONL session operations disagree on valid file types | — |

**Stability assessment**: The `zerocode` cwd bug (#10609) has a corresponding PR (#10565) ready. The `max_context_tokens` bug (#10068) affects interactive agent sessions and warrants priority attention. The `/health` false-positive (#9811) could impact monitoring and alerting in production deployments.

---

## 6. Feature Requests & Roadmap Signals

**High-interest RFCs indicating roadmap direction**:

| Issue | Title | Signals |
|-------|-------|---------|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy — filesystem restrictions | **Next version likely** — High priority, in-progress, high risk |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | RFC: Verbatim channel send over gateway | **Next version likely** — Accepted, high risk |
| [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) | RFC: Web bundle/daemon compatibility for `web_dist_dir` | **Next version likely** — Accepted, high risk |
| [#10222](https://github.com/zeroclaw-labs/zeroclaw/issues/10222) | RFC: Opt-in single-tool provider rounds for interactive agents | **Under consideration** — Accepted |
| [#10405](https://github.com/zeroclaw-labs/zeroclaw/issues/10405) | [Tracker]: Implement session-scoped prompt attachments (#9998) | **Implementation batch** — Tracked |
| [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) | [Tracker]: Implement accepted Gemini speech-to-speech broker channel (#8780) | **Implementation batch** — Tracked |
| [#10529](https://github.com/zeroclaw-labs/zeroclaw/issues/10529) | [Feature]: Support Anthropic thinking.display progress updates | **Recent** — P2, 2026-09-03 |

**Predicted next version priorities**: Security sandbox policies, gateway extensibility, web bundle compatibility, and provider round optimizations appear to be the primary focus areas.

---

## 7. User Feedback Summary

**Pain points identified from issue activity**:

1. **Context token misbehavior**: Users report interactive agent sessions capping at 32,000 tokens despite higher `max_context_tokens` configuration (#10068). This limits utility for long-running conversations.

2. **Workspace vs. working directory mismatch**: ZeroCode users are frustrated that launching from a specific directory defaults to the agent workspace, breaking workflow expectations (#10609, #10603).

3. **Channel health misleading**: The `/health` endpoint reporting healthy status for channels that never connected (#9811) creates false confidence in monitoring.

4. **CI performance**: Developers report 15-20 minute PR CI runs for trivial changes, hurting productivity (#7108).

5. **Image upload friction**: Users with photos between 5-20 MiB have uploads silently dropped due to low default `max_image_size_mb` (#10589 — now addressed via PR).

6. **Missing OpenCode session header**: OpenCode provider users risk account flags due to missing `x-opencode-session` header (#10603 — S1 severity).

**Positive signals**: The multi-session web chat feature (#7543) was closed as completed, indicating delivery on a user-requested enhancement. Documentation additions (Twitch setup guide) show investment in discoverability.

---

## 8. Backlog Watch

**Issues requiring maintainer attention**:

| Issue | Title | Age | Status | Concern |
|-------|-------|-----|--------|---------|
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | RUSTSEC-2026-0247 bitmaps advisory | 25 days | Blocked | Security advisory blocking CI |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | verifiable-intent credential chain gap | 42 days | In Progress | High-risk security bug |
| [#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) | Interactive approval from any chat member | 40 days | Closed | Security vulnerability (multi-channel) |
| [#9231](https://github.com/zeroclaw-labs/zeroclaw/issues/9231) | Docker nested in Docker sandbox | 45 days | In Progress | S1 runtime bug |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | CI Rust build caching | 94 days | Accepted | Developer experience |
| [#7685](https://github.com/zeroclaw-labs/zeroclaw/issues/7685) | [Tracker]: Test coverage across 13 shards | 81 days | Accepted | Technical debt |

**Observations**: The RUSTSEC advisory (#9899) is blocked and needs triage to unblock security CI. Several security-related issues have been open for 40+ days. The maintainer decision queue tracker (#8692) may help prioritize these going forward.

---

*Digest generated from ZeroClaw GitHub data for 2026-09-04. All links reference `https://github.com/zeroclaw-labs/zeroclaw`.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*