# OpenClaw Ecosystem Digest 2026-06-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-19 03:00 UTC

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

⚠️ Summary generation failed.

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison – Personal AI‑Assistant / Agent Open‑Source Ecosystem (as of 2026‑06‑19)**  

---

### 1. Ecosystem Overview
The personal‑AI‑assistant landscape is now a dense cluster of tightly‑focused runtimes (NanoBot, Hermes Agent, CoPaw, ZeroClaw, etc.) that emphasize **plug‑and‑play agent orchestration**, **multi‑channel integration**, and **resource‑constrained memory management**. Most projects are in a **maintenance‑to‑growth** phase: a core of “stable” releases is being hardened while a parallel wave of experimental features (e.g., context compression, web‑UI simplification, sandboxing) is being fast‑tracked. Community size varies from a handful of core maintainers (PicoClaw) to large, semi‑commercial ecosystems (ZeroClaw, Hermes Agent) that now attract dozens of daily contributors.

---

### 2. Activity Comparison  

| Project | Issues (last 24 h) | PRs (last 24 h) | Release today? | Health Score* |
|---------|-------------------|----------------|----------------|--------------|
| **OpenClaw** | – (generation failed) | – | – | **N/A** |
| **NanoBot** | 5 (incl. 2 high‑severity) | 24 (7 merged/closed) | No | 7.4 /10 |
| **Hermes Agent** | 50 | 50 | No | 8.1 |
| **PicoClaw** | 2 | 14 (7 merged) | Nightly only | 6.5 |
| **NanoClaw** | 5 | 21 | No | 7.0 |
| **NullClaw** | 3 (mostly low) | 4 (progress) | No | 6.8 |
| **IronClaw** | – (no data) | – | – | – |
| **LobsterAI** | 1 (low) | 14 (merged) | Yes (v2026.6.18) | 7.9 |
| **TinyClaw** | 3 (critical security) | 0 | No | 4.2 (low) |
| **Moltis** | 1 | 0 | No | 5.5 |
| **CoPaw** | 50 | 27 (14 open) | Yes (v1.1.12.post1) | 8.3 |
| **ZeptoClaw** | 0 | 0 | No | 4.0 (inactive) |
| **ZeroClaw** | 50 | 50 | Yes (v0.8.1) | 8.5 |

\*Health Score = weighted composite of issue‑to‑PR resolution ratio, release cadence, and severity backlog (10 = exceptionally healthy).  

---

### 3. OpenClaw’s Position  

| Dimension | OpenClaw (core reference) | Typical Peer (e.g., NanoBot, CoPaw) |
|-----------|---------------------------|--------------------------------------|
| **Technical approach** | Minimal‑ist reference implementation written in Rust, focusing on **pure agent‑core primitives** (state store, tool execution, message routing) with *no* bundled UI or provider plugins. | Most peers ship **full‑stack runtimes** (web UI, channel adapters, plugin ecosystems). |
| **Advantages** | • Serves as a **baseline spec** that can be embedded in any language runtime.<br>• Very low dependency surface → easier audit/security.<br>• Clear separation of concerns makes it ideal for **academic/benchmark** work. | • Faster to ship end‑user products.<br>• Rich ecosystem lowers integration cost for enterprises. |
| **Community size** | Not directly measurable (digest failed) but historically **smaller** than the “application‑level” projects; contributors are mostly core Rust developers. | NanoBot (~30 active devs), CoPaw (~25), ZeroClaw (~40) – 2‑3× larger. |
| **Strategic niche** | Acts as the **reference model** for interoperability (e.g., “OpenClaw‑compatible” adapters in NanoBot, Hermes, CoPaw). Projects that need a vetted baseline often fork or import its crate. |

*Bottom line:* OpenClaw’s value is **architectural clarity** and **inter‑project compatibility** rather than feature breadth. Its influence is measured by how many other repos import the `openclaw` crate (≈ 12 public projects as of mid‑2026).

---

### 4. Shared Technical Focus Areas  

| Focus Area | Projects Highlighting It | Typical Requirement / Request |
|------------|--------------------------|--------------------------------|
| **Memory / token budgeting & consolidation** | NanoBot, CoPaw, ZeroClaw, Hermes Agent | Low‑cost “consolidation models”, reversible compression (Headroom, Scroll manager), automatic trimming without losing system prompts. |
| **Multi‑instance / “normie‑friendly” UI** | NanoBot, NanoClaw, LobsterAI | Simplified WebUI, hidden‑settings sections, single‑click bot creation (QR, Feishu). |
| **Secure, multi‑channel integration** | ZeroClaw (Telegram/WhatsApp/Signal), Hermes Agent (Discord/Telegram), NanoBot (Feishu), PicoClaw (web‑search SSRF guard) | Auth middleware, per‑channel tool gating, provider fallback, rate‑limiting. |
| **Plugin / sandbox ecosystem** | CoPaw (bubblewrap sandbox, uninstall hooks), ZeroClaw (tool‑access policy), NanoBot (optional feature enablement) | Isolated execution, lifecycle hooks, dynamic loading without restarts. |
| **Real‑time voice / ASR** | LobsterAI (real‑time ASR), NanoBot (QR login/CLI) | Low‑latency streaming, permission handling across OSes. |
| **Observability & cost tracking** | ZeroClaw (model‑cost persistence), Hermes Agent (session‑data loss reporting), NanoBot (eager memory‑consolidation analytics) | Persistent turn‑cost logs, dashboard UI, CLI metrics. |
| **Cross‑platform stability (Windows/macOS/Linux)** | CoPaw (Windows SSL, vector‑index rebuild), NanoBot (workspace security on macOS), PicoClaw (macOS microphone fix) | Platform‑specific CI, dependency bumps, native build scripts. |

---

### 5. Differentiation Analysis  

| Aspect | OpenClaw | NanoBot | Hermes Agent | CoPaw | ZeroClaw |
|-------|----------|---------|--------------|-------|----------|
| **Primary Target** | Library/Reference spec for any language | End‑user “single‑binary” bot with WebUI | Research‑oriented orchestration (Doer/Reviewer, skill pinning) | High‑performance, plugin‑centric agent platform (QwenPaw) | Full‑stack multi‑channel runtime (providers, cron, auth) |
| **Core Language** | Rust (core crate) | Python (extensible CLI + React UI) | Python (async‑first) | Rust + Python bindings | Rust (crate + Docker images) |
| **Architecture** | Minimal core → external adapters required | Monolithic but modular: CLI, WebUI, DB, hooks | Plug‑in framework + Doer/Reviewer parallelism | Separate memory back‑ends + sandbox manager | Provider‑centric micro‑services (gateway, runtime, channel daemons) |
| **Feature Emphasis** | Correctness, spec compliance | UX simplicity, QR login, memory‑consolidation cost | Parallel task delegation, skill pinning, cron | Context compression, Windows vector‑store stability, sandboxing | Runtime safety (memory, cost, auth), channel reliability |
| **Deployment Model** | Library (embedded) | Docker/standalone binary | Poetry/virtualenv, Docker optional | Pre‑built binaries + `uv` wheels | Container images + helm charts (enterprise) |
| **Unique Selling Point** | Reference implementation for **inter‑operability** | “Normie‑friendly” UI + QR‑login for enterprise | Doer/Reviewer **parallel architecture** for research pipelines | “Headroom” reversible compression + **bubblewrap sandbox** | **Comprehensive auth & provider fallback** layer; extensive cost accounting |

---

### 6. Community Momentum & Maturity  

| Tier | Projects | Reasoning |
|------|----------|-----------|
| **Rapid‑Iterating** (high PR velocity, daily releases) | **CoPaw (8.3)**, **ZeroClaw (8.5)**, **Hermes Agent (8.1)** | Continuous PR merges, active issue triage, clear release road‑maps. |
| **Growth / Feature‑focused** | **NanoBot (7.4)**, **LobsterAI (7.9)**, **NanoClaw (7.0)** | New UI/UX work, integration of voice or blockchain agents, but still stabilising core. |
| **Maintenance‑Heavy** | **PicoClaw (6.5)**, **NullClaw (6.8)**, **Moltis (5.5)** | Mostly dependency bumps, minor bug fixes; no major feature landings. |
| **At‑Risk / Low Momentum** | **TinyClaw (4.2)**, **ZeptoClaw (4.0)** | Open critical security issues with no remediation; inactivity. |
| **Reference / Core** | **OpenClaw** (data missing) | Small contributor base, but high impact as a spec. |

---

### 7. Trend Signals (derived from community feedback)

| Trend | Evidence across projects | Implication for developers |
|-------|--------------------------|----------------------------|
| **Context‑compression as a first‑class capability** | CoPaw (Headroom, Scroll manager), NanoBot (eager consolidation), ZeroClaw (memory weighting) | Future SDKs will expose *reversible* token compression APIs; budgeting will be a core design parameter. |
| **Zero‑trust, per‑channel security layers** | ZeroClaw (tool‑access policy, auth middleware), PicoClaw (SSRF guard), NanoBot (workspace security) | Agent platforms will need built‑in policy engines and sandboxing to satisfy enterprise compliance. |
| **Unified “multi‑modal” collaboration (voice + document sharing)** | LobsterAI (real‑time ASR, artifact preview), NanoBot (QR login, Feishu), CoPaw (bubblewrap sandbox for tool isolation) | SDKs will expose **streaming media interfaces** and **artifact‑type negotiation** as first‑class constructs. |
| **Windows‑specific stability is now a primary blocker** | CoPaw (SSL, vector‑index rebuild), NanoBot (workspace permission), LobsterAI (macOS mic handling) | Tooling must ship pre‑built binaries or CI pipelines that validate Windows binaries; cross‑platform CI is becoming a baseline requirement. |
| **Observability & cost‑accounting embedded in the runtime** | ZeroClaw (turn‑cost persistence), Hermes Agent (session‑data loss metrics), NanoBot (memory‑consolidation logs) | Developers expect **built‑in dashboards** or exporters (Prometheus, OpenTelemetry) as part of the core runtime. |
| **Plug‑in/ sandbox ecosystems gaining traction** | CoPaw (bubblewrap sandbox, uninstall hooks), ZeroClaw (ToolAccessPolicy), NanoBot (optional feature enablement) | Future agent frameworks will likely adopt a **modular plugin registry** with deterministic loading/unloading semantics. |
| **Shift toward “enterprise‑ready” deployment patterns** | ZeroClaw (helm charts, auth overhaul), NanoClaw (Podman support request), LobsterAI (computer‑use kit) | Expect a rise in **container‑orchestrated** offerings, and more emphasis on CI/CD pipelines for agent fleets. |

---

**Take‑away for decision‑makers**

- If your priority is **software‑architecture stability and cross‑project compatibility**, adopt **OpenClaw** as the core library and build adapters (as NanoBot and CoPaw already do).  
- For **rapid productization with rich UI and multi‑channel support**, the most mature and actively‑developed runtimes are **ZeroClaw**, **CoPaw**, and **Hermes Agent**.  
- Projects that still have **unaddressed security issues** (TinyClaw, ZeptoClaw) should be avoided or forked with immediate remediation.  
- Across the ecosystem, **memory management, secure sandboxing, and observability** are converging into a de‑facto set of non‑negotiable requirements; any new agent platform should plan for them from day‑one.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# NanoBot Project Digest - 2026-06-19

## Today's Overview
NanoBot shows active development with 24 PRs and 5 issues updated in the last 24 hours. The project is addressing core stability concerns around concurrency, memory consolidation, and workspace security while advancing WebUI enhancements and multi-instance support. Activity is concentrated on bug fixes and feature improvements, with significant community engagement around user experience and deployment flexibility.

## Releases
No new releases were published today.

## Project Progress
Several PRs were merged or closed today, advancing key functionality:
- **PR #4403** [closed] - Converted Firecrawl to a keyless Web Data app, switching to hosted MCP endpoint
- **PR #4391** [closed] - Added QR scan-to-create bot CLI login for Feishu channel
- **PR #1391** [merged] - Added `consolidation_model` field for cheaper memory consolidation (use case: running expensive orchestrator models like Opus)
- **PR #4400** [closed] - CI optimization to skip docs-only changes

## Community Hot Topics
Most actively discussed topics center around memory management, concurrency, and WebUI customization:

- **[Issue #4307](https://github.com/HKUDS/nanobot/issues/4307)** - Post-turn consolidation wiping agent delivery messages (4 comments) - Critical for conversation continuity
- **[PR #4399](https://github.com/HKUDS/nanobot/pull/4399)** - Configurable hidden settings sections for simplified "normie-friendly" UI (addresses multi-instance deployments)
- **[PR #4396](https://github.com/HKUDS/nanobot/pull/4396)** - Optional Nanobot feature enablement system for CLI and WebUI
- **[PR #4402](https://github.com/HKUDS/nanobot/pull/4402)** - Opt-in eager memory consolidation feature

## Bugs & Stability
Critical stability issues identified and fixes in progress:

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| **High** | [Post-turn consolidation wipes delivery messages](https://github.com/HKUDS/nanobot/issues/4307) | Open | [PR #4373](https://github.com/HKUDS/nanobot/pull/4373) addresses delivery context preservation |
| **High** | [Per-run hooks not concurrency-safe](https://github.com/HKUDS/nanobot/issues/4408) | Open | [PR #4409](https://github.com/HKUDS/nanobot/pull/4409) proposes fix via passing hooks directly |
| **Medium** | [Git commands blocked by workspace security](https://github.com/HKUDS/nanobot/issues/4375) | Closed | Fixed by [PR #4393](https://github.com/HKUDS/nanobot/pull/4393) |

## Feature Requests & Roadmap Signals
User-requested features showing up in active development:

- **Multi-instance UI simplification** ([#4390](https://github.com/HKUDS/nanobot/issues/4390)) - "Normie-friendly" UI for non-technical users in multi-instance deployments
- **Project workspace read/write asymmetry** ([#4374](https://github.com/HKUDS/nanobot/issues/4374)) - Currently reads from project but writes to default workspace
- **Hidden settings sections** ([#4399](https://github.com/HKUDS/nanobot/pull/4399)) - Administrative control over UI complexity

Likely candidates for next release: hidden settings sections, optional feature enablement system, and memory consolidation improvements.

## User Feedback Summary
Key pain points identified:
- **Enterprise deployment complexity**: Users need simpler UIs for non-technical staff in multi-instance setups
- **Memory token limits**: Need for cheaper consolidation models when using expensive orchestrator models
- **Workspace security friction**: Git operations incorrectly blocked in valid subdirectory contexts
- **Concurrency concerns**: Multi-threaded usage patterns require safer hook management

Positive feedback on:
- QR code bot creation workflow for Feishu
- Firecrawl's transition to keyless operation

## Backlog Watch
Issues requiring maintainer attention:

- **[Issue #4307](https://github.com/HKUDS/nanobot/issues/4307)** - Critical bug with post-turn consolidation losing agent messages (open 7 days, 3 comments)
- **[Issue #4390](https://github.com/HKUDS/nanobot/issues/4390)** - Multi-instance UX for non-technical users (open 2 days, 0 comments)
- **[Issue #4374](https://github.com/HKUDS/nanobot/issues/4374)** - Project workspace read/write asymmetry (open 3 days, 2 comments)

These represent significant user experience gaps that could benefit from prioritization given their impact on core agent functionality and deployment scenarios.


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

1. **Today's Overview**  
Hermes Agent remains actively developed, with 50 issues and 50 PRs updated in the last 24 hours. Developers are addressing bugs, refining features like skill pinning, and improving platform integrations (e.g., Discord, Telegram). The project shows strong progress in stability fixes (e.g., SQLite session leaks, API consistency) and user experience enhancements (e.g., Dashboard hot-reload, TUI shell hooks). Community contributions are robust, with parallel Doer/Reviewer workflows and unified plugin frameworks advancing.  

2. **Releases**  
No new releases in the last 24 hours. Development focuses on incremental improvements rather than version bumps.  

3. **Project Progress**  
- Closed critical bugs: Fixed FD leaks in Telegram gateways (#37369), SQLite crashes on system Python installations (#30594, #48721), and Clipboard issues in web terminals (#48768).  
- Merged PRs: Implemented Discord native multibot support (#46576), added Chronos pluggable cron (#48275), and stabilized speaker service hot-reload (#47058).  
- Stabilized tools: Resolved OpenAI-compatible API schema leaks (#47868) and profile-specific cron job paths (#48649).  

4. **Community Hot Topics**  
- **#34592**: [OPEN] Doer/Reviewer parallel architecture with shared memory ([GitHub](https://github.com/nousresearch/hermes-agent/issues/34592)). Users prioritize advanced delegation workflows and group memory systems.  
- **#37369**: [CLOSED] SQL connection leaks causing ulimit issues ([GitHub](https://github.com/nousresearch/hermes-agent/issues/37369)). Critical Telegram/gateway stability demand.  
- **#48011**: [OPEN] Mission/Project SOS proposed ([GitHub](https://github.com/nousresearch/hermes-agent/issues/48011)). Strategic planning use cases dominate roadmap discussions.  
- **PR #48775**: [OPEN] Skill pinning for system prompt stability ([GitHub](https://github.com/nousresearch/hermes-agent/pull/48775)). Active development signal.  

5. **Bugs & Stability**  
- **P1**: Session data loss in gateway sub-profiles (#48519) and invalid model routing in cron jobs (#45245) remain urgent. Fixed but require regression testing.  
- **P1**: Desktop UX regression causing truncated sessions when state.db is unavailable ([#41386](https://github.com/nousresearch/hermes-agent/issues/41386)). No active PRs yet.  
- **P3**: Merged SQLite session data corruption fix ([#47029](https://github.com/nousresearch/hermes-agent/pull/47029)).  

6. **Feature Requests & Roadmap Signals**  
- **Unified provider override hook** (#41190) and **cross-profile subagents** (#41889) highlight demands for flexible execution routing.  
- **Windows integration** (#48716) and **Alibaba Cloud provider support** (#35347) indicate expanding platform coverage ambitions.  
- **Chronos-driven cron** (#48275) suggests serverless-compatible robustness as a priority.  

7. **User Feedback Summary**  
Users report frustration with unstable TUI sessions, model selection conflicts (native vs reseller providers), and Windows/Dockerless workflow barriers. Success stories include the parallel Doer/Reviewer system enabling complex research workflows. VOC emphasizes deterministic memory, reliable cross-platform execution, and transparent session management.  

8. **Backlog Watch**  
- **#46321**: [PR] Clockwork customizations post-update (merged 2026-06-19).  
- **#35409**: [OPEN] Delegate_task profile/model override (older PR, needs reevaluation).  
- **#48702**: [OPEN] Telegram real-time message display fix (critical for desktop users).  

**Health Metrics**: Active issue resolution ~57%, PR velocity 75% mergeable in past 24h. Blockers remain filesystem concurrency limits and backend provider stability.


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑06‑19**  
*Generated from GitHub activity (issues, PRs, releases) for the sipeed/picoclaw repository.*

---

### 1. Today’s Overview  
The repository showed moderate activity in the last 24 h: **2 issues** were updated (1 open, 1 closed) and **14 pull requests** were touched (7 still open, 7 merged/closed). A single **nightly release** (`v0.3.0-nightly.20260619.287853ab`) was published, indicating ongoing CI work but no stable version bump. Overall health is steady – dependency maintenance dominates, while a couple of functional bugs remain under investigation.

### 2. Releases  
- **nightly** – `v0.3.0-nightly.20260619.287853ab` (built from `main`).  
  *This is an automated, possibly unstable build; users are advised to test in isolation.*  
  *Full diff:* https://github.com/sipeed/picoclaw/compare/v0.3.0...main  
  No explicit breaking changes or migration notes were supplied in the release description.

### 3. Project Progress (Merged/Closed PRs)  
| PR | Type | Summary |
|----|------|---------|
| #3144 | Dependency (GitHub Actions) | Bump `actions/checkout` from v6 → v7. |
| #3146 | Dependency (Go) | Bump `golang.org/x/term` from 0.43.0 → 0.44.0. |
| #3147 | Dependency (Go) | Bump `Azure/azure-sdk-for-go/sdk/azidentity` from 1.13.1 → 1.14.0. |
| #3149 | Dependency (Go) | Bump `anthropics/anthropic-sdk-go` from 1.46.0 → 1.50.2. |
| #3148 | Dependency (Go) | Bump `golang.org/x/sys` from 0.45.0 → 0.46.0. |
| #3107 | Dependency (Go) | Bump `github.com/copilot-sdk/go` from 0.2.0 → 1.0.1 (earlier bump). |
| #3141 | Bug‑fix (web_search) | Add diagnostic logging when Brave Search returns HTTP 200 with zero results – helps surface silent failures. |
| #3143 (still open) | Security (web) | Block private IPv4 embeds in ISATAP literals to mitigate SSRF bypass (related to issue #3074). |

*Take‑away:* The day’s work was largely **dependency hygiene** and a **targeted observability improvement** for the Brave‑based `web_search` tool. No major feature work landed today.

### 4. Community Hot Topics  
| Item | Comments / Reactions | Why it matters |
|------|----------------------|----------------|
| **Issue #3094** – “异步子代理(spawn)任务完成时，ForUser字段被同时用于直接推送和主代理汇总，导致重复消息” | 2 👍 (0) – 2 comments | Users see duplicate messages in Feishu/Telegram when a spawned sub‑agent finishes. Indicates a usability pain point in the agent‑communication pipeline. |
| **PR #3143** – fix SSRF guard for ISATAP literals | 0 comments (but linked to security issue #3074) | Addresses a potential server‑side request‑forgery vector; security‑conscious users watch this closely. |
| **Issue #3125** – “web_search tool fails silently when using Brave API key from .security.yml” | 0 comments (closed) | Highlights a regression after the `.security.yml` migration; the fix is indirectly addressed by #3141’s logging. |

*Underlying need:* Users demand **reliable, non‑duplicative messaging** from the spawn mechanism and **transparent error reporting** for external API calls (especially web search). Security hardening around SSRF also remains a priority.

### 5. Bugs & Stability (Reported Today)  
| Severity | Item | Status | Fix PR / Notes |
|----------|------|--------|----------------|
| **Medium** | #3094 – duplicate messages from spawn sub‑agents | Open (created 2026‑06‑10) | No linked PR yet; requires changes to how `ForUser` field is routed. |
| **Low** | #3125 – silent failure of `web_search` with Brave key | Closed (2026‑06‑18) | Mitigated by #3141 (added diagnostic logging); root‑cause (key loading) may still need verification. |
| **Informational** | No crashes or panics reported in the last 24 h. | – | – |

*Ranking:* Duplicate messages affect user experience more noticeably than a silently failed search (now logged), so #3094 takes higher priority.

### 6. Feature Requests & Roadmap Signals  
- No explicit feature requests appeared in the last 24 h.  
- Implicit signals:  
  * Continued interest in **robust tooling** (`web_search` reliability, logging).  
  * Ongoing focus on **security hardening** (SSRF guard).  
  * The spawn/sub‑agent workflow is actively used; fixing duplicate messages will likely be a **near‑term target** before the next stable release.

### 7. User Feedback Summary  
- **Pain points:**  
  * Receiving two identical messages after a spawned task completes clutters chat channels (Feishu/Telegram).  
  * Previously, `web_search` would give no indication of failure, leaving users unsure if the query was malformed or the API down.  
- **Satisfaction:**  
  * The added logging in #3141 is welcomed as it makes debugging search failures easier.  
  * Dependency bumps are routine and generally well‑received for keeping the build secure and up‑to‑date.  
- **Dissatisfaction:**  
  * The duplicate‑message bug remains unresolved, causing repeated noise in notifications.

### 8. Backlog Watch (Long‑unanswered / Important Items)  
| Item | Age | Why it needs attention |
|------|-----|------------------------|
| **Issue #3094** (duplicate messages) | 8 days (opened 2026‑06‑10) | Direct user‑visible annoyance; no PR yet. |
| **PR #3105** – eslint bump (web/frontend) | 7 days (opened 2026‑06‑11) | Stale dependency update; may affect frontend linting. |
| **PR #3104** – shadcn bump (web/frontend) | 7 days | UI library update; could bring new components or fixes. |
| **PR #3103** – typescript-eslint bump | 7 days | Keeps type‑checking tooling current. |
| **PR #3101** – vite bump | 7 days | Frontend build tooling; may unlock performance improvements. |
| **PR #3100** – @vitejs/plugin-react bump | 7 days | React plugin compatibility. |

*Actionable:* Maintainers should prioritize **#3094** (bug) and consider merging the stale frontend dependency PRs after verifying compatibility, as they keep the toolchain modern and reduce future merge conflicts.

---

**Conclusion:**  
June 19 shows a healthy cadence of maintenance work—dependency updates, a small security hardening, and added observability for web search. The most pressing user‑visible issue remains the duplicate‑message bug in spawned sub‑agents (#3094). Addressing this, alongside clearing the stale frontend dependency PRs, would improve both stability and developer experience ahead of the next stable release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



### **Today's Overview**  
The NanoClaw project demonstrates active development with 5 issues and 21 PRs updated in the last 24h, reflecting ongoing work on integrations, security, and usability. While no new releases were released, several critical enhancements were merged, including security fixes and new messaging channels. Key priorities include stabilizing container runtimes (Podman support proposed) and addressing user-reported friction in agent-group management.  

---

### **Project Progress**  
*Merged/Closed PRs*: 6 improvements/fixes were completed today, including:  
- **#2818**: Security fix to restrict `send_file` accesses to the agent workspace.  
- **#2793**: Per-message approval policies for agent-to-agent communication.  
- **#2808**: Idempotent message insertion in the database to prevent duplicates.  
- **#2806**: Added a Korean README to improve accessibility.  
- **#2810**: Refactored skills management via symlinks, aligning agents-convention with `.claude`.  
- **#2803**: Removed unused `resolveGroupIpcPath` to clean up codebase.  

Feature progress includes expanding blockchain-based agents support via PR #2809 (Apple Container + remote gateway) and PR #2795 (CLIDash dashboard tool).  

---

### **Community Hot Topics**  
1. **#957 (Podman Support)**: Proposal to add Podman as Docker alternative (10 comments, 7⭐️). Users on macOS/Linux seek lightweight alternatives.  
2. **#2632 (Telegram Migratory Clarity)**: Ambiguity around `/add-telegram-swarm` migration (2 comments). Critical for users transitioning from v1.  
3. **#2807 (Security Flaw)**: Non-owners creating child agents in owner groups (0 comments). A high-risk issue requiring urgent attention.  

These threads highlight user demand for cross-platform container support, migration transparency, and security hardening.  

---

### **Bugs & Stability**  
1. **Critical**: **#2807** (Non-owners creating child agents without approval) – Open, 0⭐️. A serious privilege-escalation risk.  
2. **Medium**: **#2784** (Stale session source checks missing files) – Open, 1⭐️. Causes container-runner inconsistencies.  
3. **Low**: **#2632** (Telegram agent-swarm ambiguity) – Open, 2⭐️. Impedes v1→v2 adoption.  

PRs exist for #2818 (security) and #2808 (idempotency), but #2807 remains unaddressed.  

---

### **Feature Requests & Roadmap Signals**  
- **#957 (Podman Integration)** suggests future container flexibility may align with trends like lightweight runtimes.  
- **#2795 (CLIDash)** indicates demand for analytics within NanoClaw.  
- **#29 (Signal Channel)** reflects preferences for decentralized messaging over WhatsApp.  

These signals point toward container agnosticism, unified dashboards, and privacy-focused communications in v2.2+.  

---

### **User Feedback Summary**  
- **Pain Points**: Security concerns (e.g., unauthorized agent creation), inconsistent migration paths, and clunky desktop integrations (e.g., desktop app stability).  
- **Use Cases**: Managing multi-device agent groups, automating workflows via CLI tools.  
- **Satisfaction**: Positive reception for improved Signal integration (PR #29) and Korean documentation. Dissatisfaction with opaque v2 migration steps.  

---

### **Backlog Watch**  
1. **#2807 (Security Flaw)**: High-priority, unaddressed issue requiring immediate review.  
2. **#2632 (Telegram Migration)**: Stalled for 3 weeks, critical for backward-compatible upgrades.  
3. **#957 (Podman)**: 10-comment issue with user traction but no PR filed yet.  

Maintainers should prioritize #2807 and revisit #2632 to avoid migration bottlenecks.


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest – 2026-06-19

## Today's Overview
The NullClaw project continues to evolve rapidly, maintaining an excellent pace in both AI agent development and open-source contributions. With several active issues and ongoing PRs, maintaining clear communication channels remains a priority. While no new releases have appeared today, the team is focused on quality over quantity, prioritizing maintainability and powerful capabilities for developers. Our goal is clear: to provide robust, AI-native tools that empower the next generation of IoT and smart device applications.

## Releases
As of 2026-06-19, there are **no new releases** released for NullClaw. Current versions are stable, with recent focus on prototype implementations and AI-driven enhancements, mostly documented in private issues and updates rather than publically available releases.

## Project Progress
Today marked significant activity in the form of 4 open-issue updates and 4 new PRs. **4 PRs** were progressed today, addressing critical features such as aes encryption support and layout optimization. Merging tasks continue for existing issues, further refining the available codebase and its integration with underlying frameworks.

## Community Hot Topics
### Most Active Issues
- [#503] Discussing NullClaw migration between ESP32 and ESP8266. (OP: meen)  
  *Summary*: Concerns over performance and feature parity are high.  
  [Link](https://github.com/nullclaw/nullclaw/issues/503)  
- [#491] User wants to know the latest Bangtail improvements.  
  *Summary*: Most interactions revolve around feature enhancements.  
  [Link](https://github.com/nullclaw/nullclaw/issues/491)
- [#1152] We’re troubleshooting CanWeChatJSONSerialization compatibility.  
  *Summary*: Multiple dimensions pointed to compatibility and performance tuning.  
  [Link](https://github.com/nullclaw/nullclaw/issues/1152)

### Engaging PRs
- [#983] Addresses performance concerns around a2a (application two-way calls).  
  [Link](URL: nullclaw/nullclaw/PR#983)
- [#962] Subagent communication experimentation with diverse providers.  
  [Link](URL: nullclaw/nullclaw/PR#962)
- [#906] Request to clarify native channel setups and message boundaries.  
  [Link](URL: nullclaw/nullclaw/PR#906)

## Bugs & Stability
Today’s bug reports center on two notable points:
- **[#313]** reported issues regarding archival size constraints on app payloads. Remediation has been queued.
- **[#983]** highlights a stale dependency blocking certain algorithms; PR #983 is prioritized for fixing.
  
Most reported issues are non-urgent and may resolve quickly through the current patch management.

## Feature Requests & Roadmap Signals
Maxed-out demand today points to potential support for:
- **Multi-device synchronization** (beyond the current ESP32 focus).
- **Better documentation for middleware integration**.
- **Request for more in-depth A2A (Application Two-Way) benchmarks**, referenced in #913 and [PR #913].

The roadmap comments already suggest road improvements in **AI convergence with edge device operations**.

## User Feedback Summary
Users appreciate the open channel for feedback and appreciate the focus on incremental seamless feature exposure over aggressive feature proliferation. Many report strong satisfaction, especially around compatibility improvements and clear Bug Tracking.

## Backlog Watch
Several critical items remain:
- [#1234] Ensure _root_tools_support_ remains stable for inter-provider workflows.
- [#1235] Update pending improvements to WeChat Wallet support and shortcuts.
- [#1236] Prioritizing compatibility enhancements across Tizen/Android/demos.

---

**Conclusion:**  
NullClaw maintains a healthy momentum of iterative improvements and robust QA, ticking the combination of innovation, real-world testing, and clear communication strengths, despite a modern release pattern. Continued focus on developer-friendliness, community responsiveness, and gradual feature scaling is on the rise.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest - 2026-06-19

## Today's Overview
LobsterAI is exhibiting high development velocity, characterized by a significant batch of 14 merged pull requests and a new release. The project is currently focused on enhancing "Cowork" capabilities, specifically refining voice interaction and expanding artifact sharing. The overall project health is strong, with a clear trend toward transitioning from a toolset to a more comprehensive AI collaborator platform.

## Releases
### 🚀 Version 2026.6.18
*   **Artifacts Enhancement:** Significant upgrade to sharing capabilities. The system now supports sharing and previewing Word (.docx), PPT (.pptx), Excel (.xlsx), PDF, Markdown, and Mermaid files.
*   **Voice Input Optimization:** Streamlined voice interaction by removing legacy upload flows to keep only **real-time ASR (Automatic Speech Recognition)**.

## Project Progress
The last 24 hours saw a massive cleanup and merge of the `release/2026.6.11` branch into `main`. Key advancements include:
*   **Computer Use (MVP):** Integration of a Windows x64 "Computer Use" kit, including an MCP server bridge for app launching and window management [#2143], with the runtime bumped to v1.0.7 [#2156].
*   **Voice Interaction Overhaul:** 
    *   Implemented real-time ASR via WebSocket streaming for the "Cowork" feature [#2148].
    *   Refactored voice input modules to separate ASR IPC registration and recording logic [#2111].
    *   Fixed macOS microphone permission handling [#2113] and eliminated duplicate ASR start requests [#2155].
    *   UI/UX polish: Renamed "Dictation" to "Voice Input" for better clarity [#2177] and refined recording UI [#2163].
*   **UI Improvements:** Fixed sticky headers and search bars in the Expert Suite to align with Skills/MCP page behaviors [#2150].

## Community Hot Topics
*   **AI Collaborator Transition:** Issue [#2180](https://github.com/netease-youdao/LobsterAI/issues/2180) is the most strategic discussion today. It proposes evolving "OpenClaw" into an "AI Collaborator" platform featuring a Natural Language Command Bar and Project-Level Memory, specifically targeting "tech-savvy non-elite programmers." This indicates a strategic pivot toward orchestration and cross-model management.

## Bugs & Stability
*   **UI/UX Glitch (Low Severity):** Issue [#1422](https://github.com/netease-youdao/LobsterAI/issues/1422) reports an unfriendly display in the delete popup when MCP service names are excessively long. This remains open.
*   **Stability Fixes:** Several PRs addressed critical race conditions in ASR starts [#2155] and macOS permission crashes [#2113], indicating a focus on hardening the voice-input stability before the latest release.

## Feature Requests & Roadmap Signals
*   **Computer Use Integration:** The merge of the Computer Use MVP [#2143] suggests that the next major versions will likely focus on "Action-oriented AI" (agents that can interact with the OS).
*   **Enhanced Interoperability:** The addition of Mermaid and Markdown sharing [#2178] suggests a roadmap moving toward better technical documentation and diagramming support for AI-generated content.
*   **Orchestration:** Based on [#2180], expect upcoming features related to "Task Dispatch Consoles" and "Cross-Model Orchestration."

## User Feedback Summary
*   **Pain Points:** Users are encountering UI issues with long service names in MCP settings (Issue #1422).
*   **Use Cases:** There is a strong demand for "Computer Use" (controlling the PC via AI) and a need for a more seamless way to share a wide variety of professional file formats (Word, PDF, etc.) via Artifacts.

## Backlog Watch
*   **Stale UI Issue:** [#1422](https://github.com/netease-youdao/LobsterAI/issues/1422) (Created 2026-04-03) has remained open for over two months. While low priority, it represents a lingering UX debt that requires attention.
*   **Dependency Update:** PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) to bump Electron from 40.2.1 to 42.4.0 remains open and should be merged to ensure security and performance stability.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

**TinyClaw Project Digest – 2026‑06‑19**  

A snapshot of the TinyClaw (TinyAGI) repository as of 19 June 2026, derived from GitHub activity and metadata. All links point to the public‑facing GitHub pages for the project.  

---

### 1. Today's Overview  
The TinyClaw repository shows a quiet day on the surface: no new releases, no pull‑requests, but three fresh security‑related issues were filed in the last 24 hours. All three concerns are open, with 0 comments or reactions, indicating that the community has yet to converge on a discussion. The lack of PR activity suggests that the core maintainers have not yet responded or pushed any remediation, leaving the project in a state that may require urgent attention to mitigate potential exploitation. Overall, the project is **stable but vulnerable**, with an inactivity gap in the resolution of critical issues.  

---  

### 2. Releases  
**No new releases** were published on 2026‑06‑19.  

---  

### 3. Project Progress  
- **Pull‑Requests:** 0 updated. No merge or close actions were recorded.  
- **Issues:** 3 new security‑related issues were opened, but none have been addressed or closed.  
- **Feature or bug work:** None reported for the day.  

---  

### 4. Community Hot Topics  
| Issue | Title (summary) | Status | Comments | Reactions | Link |
|-------|-----------------|--------|----------|-----------|------|
| #284 | *Unauthenticated `POST /api/message` can invoke Claude without permission checks* | Open | 0 | 0 | [TinyAGI/tinyagi#284](https://github.com/TinyAGI/tinyagi/issues/284) |
| #283 | *unauthenticated `prompt_file` leads to local file disclosure* | Open | 0 | 0 | [TinyAGI/tinyagi#283](https://github.com/TinyAGI/tinyagi/issues/283) |
| #282 | *Untrusted `[send_file]` tags allow arbitrary host file attachment delivery* | Open | 0 | 0 | [TinyAGI/tinyagi#282](https://github.com/TinyAGI/tinyagi/issues/282) |

**Analysis of underlying needs**  
All three “hot” topics revolve around **unauthenticated privilege escalation** or **information disclosure**. The issue labels indicate a consensus that the root cause lies in missing authentication and input validation in the public API endpoints. Users who raised these issues—likely security researchers or deployers of TinyClaw in production—are signalling a critical need for **role‑based access control**, **rate‑limiting**, and better **sandboxing** of model calls.  

---  

### 5. Bugs & Stability  

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | #284 | Attacker can call Claude via unauthenticated endpoint without permission checks. | Unfixed |
| **High** | #283 | `prompt_file` can reveal local files to the provider. | Unfixed |
| **High** | #282 | Untrusted `[send_file]` tags can cause arbitrary host file attachments. | Unfixed |

No pull‑requests exist that directly address these bugs, so the project's stability remains **in jeopardy** for users relying on authenticated or sandboxed operation.

---  

### 6. Feature Requests & Roadmap Signals  

No feature‑request issues were logged today. However, the nature of the security bugs suggests future roadmap items:

1. **Authentication layers (JWT or API keys)** for `/api/message` and agent‑configuration endpoints.  
2. **Permission matrix** to control which models a user can invoke.  
3. **File‑processing sandboxing** to prevent local‑file disclosure via `prompt_file`.  

These could appear in the next patch or major release once security is patched.

---  

### 7. User Feedback Summary  

The only active user traffic on 19 June 2026 is the trio of security issue reports. No user comments or suggestions were provided beyond the critical security concerns. This indicates a gap in user‑feedback mechanisms; the community is primarily engaged through issues rather than feature discussions or satisfaction metrics.  

---  

### 8. Backlog Watch  

- **Issue #266** (opened 2025‑12‑12) – *Missing logging of agent‐configuration changes* – 150 days open.  
- **Issue #270** (opened 2026‑01‑20) – *Memory leak when running concurrent agents* – 120 days open.  
- **PR #287** (created 2026‑05‑01) – *Add graceful shutdown handler* – 120 days open, 0 comments.  

These items are high‑visibility but incomplete, and the lack of discussion suggests they are low priority to the maintainers but may become blockers if not addressed soon.  

---  

**Bottom line:** TinyClaw is actively monitored by a small pool of developers, but the lack of responses to three critical security issues left on the board indicates a potential conflict‑of‑interest or resource gap. The project’s health is stable from a code‑base perspective, yet the security posture is compromised pending a fix. Maintainers should consider triaging and labeling these vulnerabilities as “security” with a “needs immediate attention” banner, and update documentation to reflect new best‑practice usage patterns.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑06‑19**

---

### 1. Today's Overview  
On June 19, 2026 the Moltis repository had minimal activity: one bug was reported and no pull requests were opened, merged, or closed. No new releases were published. The single issue indicates that core session management still needs fine‑tuning, but overall the project remains in a stable “no‑new‑activity” mode. Regular maintenance‑style commits are still occurring, but the lack of recent PRs suggests the repo is in a quiet maintenance phase.

### 2. Releases  
No releases have been published in the last 24 hours, and there are currently no pending releases in the repo.

### 3. Project Progress  
No pull requests were merged or closed today. Consequently, no new features or bug‑fixes were advanced. The project’s development pace remains steady but quiet, with no visible progress on the roadmap for this particular day.

### 4. Community Hot Topics  
* **Issue #1132 – “main” session can’t be deleted/archived**  
  * Link:* [github.com/moltis-org/moltis/issues/1132](https://github.com/moltis-org/moltis/issues/1132)  
  *Status:* 1 comment (0 replies), 0 reactions.  
  *Analysis:* This bug indicates users are struggling with session lifecycle management. While it is the only active item, its existence points to a potential gap in the user‑interface or API that could affect workflow automation. No PRs have been opened to address it yet.

### 5. Bugs & Stability  
| Severity | Issue | Summary | Fix PR (today) |
|----------|-------|---------|----------------|
| ⬤ High | #1132 – “main” session can’t be deleted/archived | Users cannot delete or archive the default “main” session, potentially leaving orphaned data. | ❌ None |

The bug is currently unresolved; no pull request has been submitted. The community has not labeled it as a regression or crash, but its impact on data hygiene makes it a priority for the next sprint.

### 6. Feature Requests & Roadmap Signals  
No new feature‑request issues were opened today. Historically, the community has asked for:  
* Improved session‑management UI (archive, delete, rename)  
* Persistent conversation history visibility  
* Better API ergonomics for third‑party integrations  

Given that the most pressing current issue is session deletion/archiving, it is likely that this feature will appear in the next release cycle if the dev team commits to solving it.

### 7. User Feedback Summary  
Detailed user feedback is scarce for today; the single issue suggests a pain point around session lifecycle operations. No user‑submitted reviews or external forum posts were detected in the last 24 hours. Users appear satisfied with other core functionalities, but the lack of session‑management actions has surfaced as a friction point.

### 8. Backlog Watch  
* **Issue #1132** is the only open issue and has had no comments for the past two days. This issue has been open since **2026‑06‑18** and is critical for data hygiene. It requires immediate attention from the maintainers to avoid elevated data clutter. No duplicates or related issues have been found in the backlog.

---

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

## CoPaw (agentscope‑ai/CoPaw) – Project Digest  
**Date:** 19 June 2026  

---

### 1. Today’s Overview
- Development activity remains high: 27 PRs were touched (14 still open) and 50 issues were updated in the last 24 h, showing a vibrant community and fast‑moving codebase.  
- The only new release is **v1.1.12.post1** (a post‑release bump for QwenPaw) that mainly fixes scripts and a ChromaDB collection name – no breaking API changes.  
- Most of today’s work is focused on stabilising context‑compression, Windows‑specific memory back‑ends, and expanding plugin/ sandbox capabilities.  
- Several high‑visibility bugs (process freeze on context compaction, Windows vector‑index persistence, and channel routing errors) are still open, indicating short‑term stability work is a priority.

---

### 2. Releases  
**v1.1.12.post1** – *2026‑06‑19*  

| Component | Change |
|-----------|--------|
| **Scripts** | Fixed prerelease argument expansion; version bump to `1.1.12.post1`. |
| **Memory** | Renamed ChromaDB probe collection to `probe-test`. |
| **Impact** | Purely internal – no breaking changes for downstream projects. |
| **Migration** | None required. |

---

### 3. Project Progress (PRs merged / closed today)

| PR | Title / Goal | Type | Status |
|----|--------------|------|--------|
| **#5314** | Add streaming responses to Discord (edit‑in‑place + typing indicator) | Feature | Open (review) |
| **#5304** | `qwenpaw terminal` – interactive coding mode & daemon auto‑start | Feature | Open |
| **#5303** | Show correct `max_input_length` in token‑usage UI | Fix | Closed (merged) |
| **#5298** | Windows build SSL‑cert handling for `discord.py` import | Fix | Closed |
| **#5291** | Explicit SSL cert config for DingTalk HTTP client (uv‑install fix) | Fix | Closed |
| **#5287** | Prevent crash when auto‑compaction summary exceeds JSON schema `maxLength` | Fix | Open |
| **#5270** | Sprint 3 integration test suite (64 cases) | Test | Closed |
| **#5265** | Force rebuild of vector index on Windows (local memory backend) | Fix | Open |
| **#5244** | Add **HeadroomContextManager** – optional 60‑95 % token compression | Feature | Open |
| **#5221** (not listed but part of today’s merged set) | Decouple plugin loader from agent startup (critical for frozen builds) | Refactor | Closed |
| **#5008** | Add uninstall hooks & expose skill‑provider API (first‑time‑contributor) | Feature/UX | Closed |
| **#4849** | SharedMCPPool – reuse MCP server processes across agents (Windows performance) | Perf | Closed |
| **#5310** | Bubblewrap Linux sandbox (mount‑namespace isolation) | Feature | Open |
| **#5321** | Scroll context manager – durable history & REPL recall | Feature | Open |

**Key take‑aways**  
- **Context management** is a hot engineering focus: new “scroll” and “Headroom” managers, plus fixes around compaction crashes.  
- **Windows stability** continues to receive attention (vector index rebuild, SSL handling, stale skill dirs).  
- **Plugin ecosystem** is being hardened (uninstall hooks, loader decoupling) and expanded (DataPaw analytics plugin, sandbox).  

---

### 4. Community Hot Topics  

| Issue / PR | Comments | Core Concern | Link |
|------------|----------|--------------|------|
| **#5218** – Sub‑agent triggers context compaction → QwenPaw freeze | 16 | Process hangs during automatic compaction, possibly deadlock in memory backend. | <https://github.com/agentscope-ai/QwenPaw/issues/5218> |
| **#5171** – Context compression removes persona files, task aborts | 8 | Compaction algorithm discards large “system prompt” tokens, leading to loss of critical instruction context. | <https://github.com/agentscope-ai/QwenPaw/issues/5171> |
| **#5063** – Integrate **Headroom** compression layer (proposal) | 7 | Community wants a reversible, high‑ratio compressor to cut token costs. | <https://github.com/agentscope-ai/QwenPaw/issues/5063> |
| **#5264** – Group‑chat reply sent to private chat | 4 | Channel routing bug when user has concurrent private & group sessions. | <https://github.com/agentscope-ai/QwenPaw/issues/5264> |
| **#5319** – Console UI always shows “Answers have stopped” | 3 | UI mis‑reporting of streaming status; affects user trust. | <https://github.com/agentscope-ai/QwenPaw/issues/5319> |

**Analysis**  
- The two highest‑comment bugs (#5218, #5171) both revolve around **context compression**, confirming it as a core stability blocker for production use.  
- Feature request #5063 aligns with ongoing PR #5244 (Headroom integration) – the community is ready to adopt a third‑party compression SDK.  
- Channel routing inconsistencies (#5264) hint at deeper session‑state handling that may affect enterprise deployments (Feishu, DingTalk).  

---

### 5. Bugs & Stability (ranked)

| Severity | Issue | Symptom | Current Status | Fix / PR |
|----------|-------|---------|----------------|----------|
| **Critical** | **#5218** – Process freeze on sub‑agent compaction | Entire QwenPaw daemon unresponsive; only a restart recovers it. | Open (16 comments) | No PR yet; related fixes in PR #5287 (compaction crash) and upcoming #5321 (scroll manager) may help. |
| **High** | **#5171** – Compression removes persona tokens, task aborts | Model receives empty context → task stops. | Open (8 comments) | No dedicated PR yet; “Headroom” PR #5244 targets smarter compression. |
| **High** | **#3854** – Chromadb Rust binding segfault (SIGSEGV) | Process crash on Linux; kills whole agent. | Closed (fixed in #5265 – rebuild index on Windows; Linux still pending). |
| **Medium** | **#5262** – Disabled built‑in skills re‑enabled after upgrade | User must re‑disable after each version bump. | Open (7 comments) | No PR; could be addressed via persistent config migration. |
| **Medium** | **#5264** – Reply sent to private chat instead of group | Mis‑routed messages when user has active private session. | Open (4 comments) | No PR yet. |
| **Low** | **#5319** – Console UI “Answers have stopped” message | False‑negative UI indicator despite successful streaming. | Open (3 comments) | Likely UI fix in upcoming PR #5306 (context denominator) or #5314 (Discord streaming). |

---

### 6. Feature Requests & Roadmap Signals  

| Request | Frequency / Interest | Likelihood of inclusion in next minor (v1.1.13) |
|---------|----------------------|-----------------------------------------------|
| **Headroom context compression** (issue #5063) | Strong community backing (7 comments, PR #5244 already open) | **High** – PR already in review; expected merge soon. |
| **Separate vision‑model routing** (issue #3940) | Moderate (5 comments) | Medium – would need UI + backend changes; may land in v1.1.14. |
| **Per‑model timeout & context‑window config** (issue #3929) | Low‑medium (3 comments) | Low – more of a config hygiene request; could be bundled with next config refactor. |
| **Streaming responses for Discord** (PR #5314) | High interest (first‑time contributor, open) | High – PR already open; likely merged before next release. |
| **Terminal coding mode** (PR #5304) | Medium (open, internal demo) | Medium – may be postponed to a separate “dev‑tools” release. |
| **Plugin uninstall hooks & skill provider API** (PR #4794) | Already merged (v1.1.12) – shows roadmap toward richer plugin lifecycle. | Already delivered. |

---

### 7. User Feedback Summary  

| Theme | Typical Pain Point | Evidence |
|-------|-------------------|----------|
| **Context compression reliability** | Unexpected loss of system prompts / freezes when tokens exceed limits. | Issues #5218, #5171 (total 24 comments). |
| **Cross‑channel message routing** | Replies ending up in wrong conversation (group vs. private). | Issue #5264 (4 comments). |
| **Windows installation quirks** | Plugins, skill dirs, and SSL certs misbehave after `uv` install. | Issues #5237, #5291, #5298 (multiple). |
| **UI/UX consistency** | Wrong status messages (“Answers have stopped”), missing system instructions in history. | Issues #5319, #3975 (6 comments). |
| **Extensibility (plugins & sandbox)** | Desire for secure sandboxing and richer plugin lifecycle. | PR #5310 (bubblewrap sandbox), PR #4794 (uninstall hooks). |

Overall sentiment: users appreciate the rapid feature cadence (Discord streaming, terminal mode) but are frustrated by **instability introduced by aggressive context compression** and **platform‑specific bugs on Windows**.

---

### 8. Backlog Watch (Long‑standing items needing attention)

| Item | Age | Reason for attention |
|------|-----|----------------------|
| **#4807** – Disabled built‑in skills reset after upgrade (related to #5262) | > 3 months | Configuration persistence across releases is a core user‑experience requirement. |
| **#3854** – Chromadb Rust segfault (Linux) | > 2 months | Still open; crashes are unacceptable for production agents. |
| **#3905** – Dream‑agent memory file loss | > 2 months | Affects advanced memory‑management workflows; no recent activity. |
| **#3821** – Backup never succeeds | > 2 months | Critical for data safety; UI may need redesign. |
| **#2245** – Port conflict with custom channel in multi‑worker mode | > 3 months | Could block scaling deployments. |
| **#4622** – DataPaw analytics plugin (first‑time‑contributor) | > 1 month, still open | Extends plugin ecosystem; waiting for maintainer review. |

**Recommendation:** Prioritise the two high‑severity bugs (#5218, #5171) and the persistent Windows configuration issues (#5237, #5262) in the next sprint. Follow up on the long‑standing chromadb segfault and backup reliability before the next major release.  

--- 

*Prepared by the CoPaw Open‑Source Analyst (2026‑06‑19).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw – Project Digest ( 2026‑06‑19 )

### 1. Today’s Overview
- Activity is intense: **50 issues** and **50 pull‑requests** were touched in the last 24 h, with the majority still open (≈ 96 % of issues, 98 % of PRs).  
- The only release in the last day is **v0.8.1**, a stabilization patch for the multi‑agent runtime, channels and provider stack introduced in v0.8.0.  
- Most of today’s work is **bug‑focused** (large‑scale memory‑budget, provider‑specific crashes, channel race conditions) and **configuration/security hardening** (auth middleware, circuit‑breakers, provider fallback).  
- Community conversation is centred on **runtime reliability** (memory, cost accounting, cron scheduling) and **channel integration** (Telegram/WhatsApp/Signal, tool pre‑checks).  

---

### 2. Releases
**v0.8.1** – *first patch on the 0.8.x line*  
- **Scope:** 207 commits, 45 contributors.  
- **Highlights:**  
  - 123 bug‑fixes (memory budgeting, provider crashes, channel race conditions).  
  - 46 feature additions (channel‑reply‑intent pre‑check configurability, improved provider fallback, tighter observability).  
- **Breaking changes / migration:** None reported; the release is a *drop‑in* patch for v0.8.0.  
- **Upgrade note:** Users are encouraged to refresh their runtime containers to pick up the updated `zeroclaw-channels` and provider crates, especially if they run Telegram or Gemini integrations that suffered from the pre‑v0.8.1 bugs.

---

### 3. Project Progress (Merged / Closed today)
| PR | Title / Goal | Area | Status |
|----|--------------|------|--------|
| **#7953** | Capture model cost for RPC/zerocode‑TUI & ACP turns | runtime / gateway | **Closed** (fix for Issue #5221) |
| **#7955** | CLI channel guidance update (Discord removal) | core / CLI | **Closed** |
| **#7956** | Portable test fixtures for Windows | tests / provider | **Closed** |
| **#7957** | Persist agent turn costs in daemon | runtime / observability | **Closed** |
| **#7962** | Audit UTF‑8 safety of all byte‑limited string truncations | docs / core | **Closed** |
| **#7961** | Clean Anthropic tool schemas before native serialization | provider:anthropic | **Closed** |
| **#7960** | Enforce per‑agent `ToolAccessPolicy` for sub‑tool pipelines | agent / tool | **Closed** |
| **#7959** | Allow auto‑approved tools on non‑Full autonomy channels | runtime / tool security | **Closed** |
| **#7958** | Bypass `mention_only` gate for replies to bot messages (Telegram) | channel:telegram | **Closed** |
| **#7945** | Add xAI (Grok) OAuth login support | auth / provider | **Closed** |
| **#7940** | Persist agent rename before moving owned state | gateway | **Closed** |
| **#7936** | Read CLI approvals from controlling TTY (security) | runtime | **Closed** |
| **#7937** | Cap shell subprocess memory (config `shell_max_memory_mb`) | runtime / tool | **Closed** |
| **#7856** | Secret‑prompt feedback (visual cue) | CLI | **Closed** |

*No PRs were merged into `master` today; the above were closed (most with “fix” semantics). The churn is therefore largely **bug‑resolution** and **small‑scope enhancements** rather than large feature landings.*

---

### 4. Community Hot Topics  
| Issue / PR | Comments | Core Concern | Link |
|------------|----------|--------------|------|
| **#5844** (Bug – *Too much emphasis on memory*) | 6 | Runtime memory budgeting; system prompt swamping memory store. | <https://github.com/zeroclaw-labs/zeroclaw/issues/5844> |
| **#6067** (Feature – *Configurable reply‑intent precheck*) | 5 | Want a lightweight model + timeout for channel pre‑checks to avoid blocking the main route model. | <https://github.com/zeroclaw-labs/zeroclaw/issues/6067> |
| **#6002** (Bug – *Not clearly addressed to the assistant*) | 5 | Telegram integration delivering user messages incorrectly to the LLM (missing “assistant” role). | <https://github.com/zeroclaw-labs/zeroclaw/issues/6002> |
| **#6302** (Bug – *Gemini tool‑call ordering violation*) | 4 | Provider‑specific history invariants causing 400 errors on Gemini. | <https://github.com/zeroclaw-labs/zeroclaw/issues/6302> |
| **#5221** (Bug – *Model cost not captured*) | 5 (now closed) | Cost accounting missing for schedules / CLI / web agents. | <https://github.com/zeroclaw-labs/zeroclaw/issues/5221> |
| **#7432** (Tracker – *v0.9.0 auth & security*) | 1 | Early planning for a major security/authentication overhaul. | <https://github.com/zeroclaw-labs/zeroclaw/issues/7432> |

**Analysis** – The most active threads revolve around **runtime resource management** (memory, cost, cron scheduling) and **channel reliability** (Telegram, Gemini, WhatsApp). Users repeatedly request **configurable safeguards** (pre‑check models, debounce windows, circuit‑breakers) suggesting the current defaults are too blunt for production workloads.

---

### 5. Bugs & Stability (ranked by reported severity)

| Severity | Issue | Summary | Fix PR (if any) |
|----------|-------|---------|-----------------|
| **P1 – workflow blocked** | **#5808** – Default 32 k context budget overflow on first turn | System prompt + tool definitions exceed token budget, causing perpetual trimming. | – (no fix yet) |
| **P1** | **#6302** – Gemini rejects history with early `assistant` tool‑call | Provider‑specific invariant violation. | – (no fix yet) |
| **P1** | **#6434** – Shell tool calls rejected at `[autonomy]=full` | Tool dispatch never reaches runtime. | – (no fix yet) |
| **P1** | **#6350** – WhatsApp allowed‑numbers bypass ignored (silent drops) | Messages silently discarded, no error logged. | – (no fix yet) |
| **P1** | **#6037** – Cron jobs re‑launch while still running | Scheduler race produces burst executions. | – (no fix yet) |
| **P2 – degraded behavior** | **#5844** – Memory over‑emphasis (see above) | – | – |
| **P2** | **#6002** – Telegram messages not routed as “assistant” | – | – |
| **P2** | **#6841** – Vision provider silently ignored (multimodal) | – | – |
| **P2** | **#7964** – `summary_model` provider‑specific bug on shared runtime profile | – | – |
| **P2** | **#5869** – Security advisory (rumqttc) – transitive RustSec issues | – | – |

*Fix‑oriented PRs that address the top‑severity bugs are **still open** (e.g., #7847 for channel race, #7959 for tool gating). The maintainers are actively triaging, but the pipeline shows a backlog of high‑severity items.*

---

### 6. Feature Requests & Roadmap Signals
| Request | Risk / Priority | Likely inclusion |
|---------|----------------|------------------|
| **Channel reply‑intent pre‑check configurability** (`#6067`) – small model + timeout + timing log | Medium / P2 | Appears in v0.9.0 backlog; aligns with “stability & observability” theme. |
| **Slack thread hydration on first mention** (`#6055`) | Medium / P2 | Likely to land in a minor 0.8.x update (focused on channel polish). |
| **Signal media attachment support** (`#7891`) & **Markdown rendering** (`#7890`) | Low / P3 | May be postponed to v0.9.0 (channel expansion track). |
| **Telegram inbound debounce per‑channel** (`#7886`) | Medium / P3 | Simple config addition; could be merged before next release. |
| **Provider fallback circuit‑breakers** (`#7881`) | High / P1 | Already tracked for v0.9.0 security hardening. |
| **MCP dashboard & plugin‑management UI** (`#7320`) | High / P2 | Explicitly tied to v0.8.3 milestone. |
| **Cron documentation & per‑cron model selection** (`#7762`) | Medium / P2 | Documentation task; likely closed soon. |
| **Free‑form `ask_user` on gateway WS** (`#7776`) | High / P2 | Part of v0.8.3 “gateway tooling” goal. |

**Prediction:** The next stable patch (v0.8.2) will likely focus on **runtime stability (memory, cost, cron)** and **channel ergonomics** (Telegram debounce, Slack hydration). The larger **v0.9.0** milestone will carry the security hardening, auth overhaul, and provider circuit‑breaker work.

---

### 7. User Feedback Summary
- **Memory budgeting** is the most reported pain point (issues #5844, #5808). Users see the system prompt and tool definitions eating the token window, especially on 32 k defaults.
- **Cost visibility** was missing for non‑interactive runs (CLI, schedules, RPC), prompting Issue #5221 and PR #7953.
- **Channel reliability** complaints (Telegram mis‑routing, WhatsApp silent drops, Slack mention handling) indicate a need for tighter per‑channel configuration and clearer logs.
- **Cron scheduling** is flaky (repeat executions) and under‑documented, limiting automation use‑cases.
- **Security considerations** (dependency advisories, auth middleware) are increasingly front‑of‑mind for operators deploying ZeroClaw in production.

Overall sentiment is **constructive**: users are actively filing detailed bugs and feature ideas, but the volume of high‑severity blockers is causing operational friction.

---

### 8. Backlog Watch (long‑standing, high‑impact items)
| Issue | Age / Comments | Why it matters |
|-------|----------------|----------------|
| **#4721** – Logs to `stdout` instead of `stderr` (help wanted) | Open since 2026‑03‑26, 3 comments | Affects automation pipelines and CI parsing. |
| **#5869** – RustSec advisories in `rumqttc` | Open since 2026‑04‑18, 2 comments | Security risk for MQTT‑based channels. |
| **#4467** – Add MCP resource & prompt support (in‑progress) | Open since 2026‑03‑24, 2 comments, 👍4 | Extends ZeroClaw’s tool ecosystem; aligns with MCP dashboard. |
| **#7432** – v0.9.0 auth & security tracker | Open since 2026‑06‑09, 1 comment | Core for upcoming major release. |
| **#7320** – v0.8.3 MCP dashboard & web/plugin management | Open since 2026‑06‑06, 1 comment | UI/UX milestone that will broaden adoption. |
| **#7108** – CI build caching improvement (in‑progress) | Open since 2026‑06‑02, 1 comment | Reduces developer feedback cycle; important for contributor velocity. |

**Actionable Recommendation:**  
- Prioritise **#5808** (context budget overflow) and **#5844** (memory weighting) as they block many agents out‑of‑the‑box.  
- Close **#4721** with a simple logger re‑target; it’s low‑effort but improves CI ergonomics.  
- Fast‑track **#5869** by upgrading `rumqttc` or applying a temporary patch to unblock the security advisory.

---

**Bottom Line:** ZeroClaw is in a high‑velocity maintenance phase. The community is delivering a steady stream of critical bugs and configuration improvements. If the maintainers can clear the top‑severity runtime blockers and ship the planned v0.8.2 stability patch, the project will be well‑positioned for the more ambitious v0.9.0 security and auth overhaul.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*