# OpenClaw Ecosystem Digest 2026-10-12

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-12 03:21 UTC

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

# OpenClaw Project Digest - 2026-10-12

## 1. Today's Overview

OpenClaw remains highly active with 500 issues updated and 500 pull requests in the last 24 hours. The project continues to address critical stability and performance challenges across multiple areas, including database reliability, memory management, and multi-agent coordination. Recent efforts have focused on improving gateway stability, reducing resource consumption, and simplifying developer experience through documentation and code cleanup. The latest release v2026.10.5-beta.1 introduces safety improvements for database operations, building on ongoing work to address persistent issues with memory leaks and zombie processes.

## 2. Releases

**v2026.10.5-beta.1** – The most recent release (2026-10-11) brings significant safety improvements to the system. Key highlights include enhanced "safer updates" functionality that ensures consistent database checkpointing across devices, filesystems, Windows elevation scenarios, and interrupt handling. The release addresses critical issues related to database write-ahead logging where unchecked writes could strand installations or block future updates. This release also incorporates fixes for memory-related regressions and improves overall system resilience.

## 3. Project Progress

Several high-impact pull requests have been merged or are in active development:

- **#169520** – Refactoring agents to consolidate runtime and worktree bookkeeping, removing retired auth-profile state and redundant agent-runtime machinery.
- **#169567** – Fixes Windows installer lane failures when `openclaw gateway stop --help` exits slowly, preventing misleading aggregate errors during cleanup.
- **#168714** – Simplifies messaging and calling plugin messages across multiple channels (Discord, Slack, Telegram, Matrix, NextCloud Talk, Feishu, Twitch).
- **#169563** – Resolves terminal access failures in multi-agent fleets where "Multiple agents are configured" prevents proper terminal opening.
- **#168713** – Improves Codex and provider plugin messages by removing avoidable jargon and technical shorthand.
- **#169524** – Stops idle gateways from polling for expired plugin state unnecessarily, reducing resource waste.
- **#168703** – Streamlines settings and configuration help to reduce technical jargon that obscures user actions.

These merges indicate continued focus on stability, developer experience, and performance optimization.

## 4. Community Hot Topics

The most active and impactful issues driving community attention include:

- **Issue #143524** (Database WAL Growth) – 122 comments – Critical issue where agent SQLite WAL grows to 1.4–2.8 GB despite `wal_autocheckpoint=1000`, blocking gateway startup on Windows. Manual intervention required to truncate and reset the log.
- **Issue #91588** (Gateway Memory Leak) – 38 comments – Severe memory leak causing RSS to grow from ~350 MB to 15.5 GB over days, leading to repeated OOM kills and restart loops.
- **Issue #97616** (Zombie Process Accumulation) – 18 comments – Unreaped hook/tool child processes accumulate as zombies, degrading performance over time.
- **Issue #148707** (Reply Loss) – 18 comments – Intermittent loss of replies when a second run displaces an in-flight turn, causing "Reply operation has no active tool authority snapshot."
- **Issue #157989** (Plugin Source Capture Bloat) – 15 comments – Plugin source capture rewrites 1.1–1.4 GB per CLI command and 6.5 GB per Gateway start, causing SSD wear and storage pressure.
- **Issue #160521** (Gateway Crash) – 15 comments – Permanent update blockage due to state DB read-admission seal conflicts and unhandled rejection in `reconcileActive`.
- **Issue #164113** (LXC Update Failure) – 11 comments – `openclaw update` fails on unprivileged LXC containers due to `--max-old-space-size` silently defeating worker resource limits.

These issues represent core stability and performance bottlenecks that require sustained engineering effort.

## 5. Bugs & Stability

**Critical Bugs (Ranked by Severity):**

1. **Database Write-Ahead Logging (Issue #143524)** – WAL grows unbounded on Windows, blocking gateway startup. Requires immediate attention to prevent production outages.
2. **Gateway Memory Leak (Issue #91588)** – RSS escalation from 350 MB to 15.5 GB causes OOM kills and restart loops. Directly impacts reliability and user experience.
3. **Zombie Process Accumulation (Issue #97616)** – Unreaped child processes degrade performance over time, affecting responsiveness.
4. **Reply Loss in Conversations (Issue #148707)** – Displaced turns result in lost replies, creating frustration for users expecting complete conversational continuity.
5. **Plugin Source Capture Disk Bloat (Issue #157989)** – Excessive disk usage from rewriting plugin sources threatens storage capacity and increases latency.
6. **Gateway Crash on State DB Conflicts (Issue #160521)** – Persistent update blockage due to unhandled rejections in reconciliation logic.

**Fix Status:** Several PRs directly address these issues:
- #169520 (refactor agents) helps reduce memory footprint
- #169567 (Windows installer fix) mitigates update failures
- #168714 (messaging simplification) reduces complexity that may contribute to zombie processes
- #169563 (terminal access) resolves multi-agent fleet coordination issues

## 6. Feature Requests & Roadmap Signals

Several feature directions emerge from recent commits and community feedback:

- **Simplified Language & Diagnostics** – Multiple PRs (#168702, #168714, #168713, #169520) aim to replace technical jargon with clearer, more accessible terminology in tool outputs and help texts. This aligns with user feedback requesting less cryptic interfaces.
- **Improved Multi-Agent Coordination** – Issue #169563 highlights failures when opening terminals in multi-agent fleets, suggesting opportunities for better ownership tracking and resource allocation.
- **Optimized Skill Discovery** – PR #169571 reduces unnecessary skill searches during file work, indicating demand for smarter onboarding and workflow guidance.
- **Plugin State Management** – Issue #169562 proposes rescan-based detection improvements to speed up setup and reduce redundant checks.
- **Documentation Modernization** – Numerous PRs focus on cleaning up docs (e.g., #168702, #168713, #169524) to improve discoverability and reduce cognitive load for new users.

These signals point toward a roadmap emphasizing developer experience, stability, and cleaner architecture.

## 7. User Feedback Summary

Users consistently report pain points centered on:

- **Performance Degradation** – Slow gateway startup (from ~410s to ~1030s on Windows) and memory leaks causing frequent crashes.
- **Storage Pressure** – Plugin source capture and other operations consume excessive disk space, impacting deployment flexibility.
- **Usability Friction** – Complex terminology in tool outputs and unclear error messages frustrate power users who expect intuitive interactions.
- **Multi-Agent Coordination** – Issues with shared resources (terminal access, agent ownership) in fleet deployments affect operational efficiency.
- **Reliability Concerns** – Unpredictable crashes and update blockages erode trust in the platform's stability.

Overall sentiment indicates strong interest in stability improvements and a desire for more transparent, user-friendly tooling.

## 8. Backlog Watch

Several important issues remain unaddressed and require maintainer attention:

- **Issue #167771** (Update Blocked) – Persistent update recovery interlock preventing gateway updates on certain configurations. Last updated 2026-10-11.
- **Issue #164113** (LXC Update Failure) – `openclaw update` fails in unprivileged LXC containers due to resource limit conflicts. Still open.
- **Issue #157630** (Resource Limits Conflict) – `--max-old-space-size` incorrectly overrides worker memory limits, causing unexpected behavior in managed gateways.
- **Issue #146** (Database WAL) – While partially addressed in v2026.10.5-beta.1, ongoing monitoring needed for production deployments.
- **PR #169520** (Agents Refactor) – Marked as "waiting on author," potential delay in completing agent bookkeeping consolidation.

These items should be prioritized to maintain system reliability and prevent recurring incidents.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent & Personal Assistant Ecosystem (2026-10-12)

---

## 1. Ecosystem Overview

The open-source AI agent landscape is bifurcating into **two distinct tiers**: a handful of high-velocity "platform" projects (OpenClaw, Hermes Agent, CoPaw, ZeroClaw) running 50–500 daily issue/PR updates with complex multi-agent, gateway, and plugin architectures; and a long tail of specialized or early-stage tools (NanoBot, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI) focused on narrower use cases—self-hosted deployment, edge/embedded runtimes, or single-user productivity. **No project shipped a stable release today**; several (Hermes, OpenClaw) have release candidates blocked on final gates, while others are in explicit stabilization sprints. The dominant theme across active projects is **operational hardening**—memory leaks, zombie processes, database WAL growth, sandbox enforcement, and silent failure modes—over new feature delivery, signaling a maturation phase where reliability is the primary adoption blocker.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score* |
|---------|--------------|-----------|-------------------|----------------|---------------|
| **OpenClaw** | 500 | 500 | ~6 (high-impact) | **Beta v2026.10.5-beta.1** (2026-10-11) | 🟡 **High Activity / Critical Bugs** |
| **Hermes Agent** | 50 | 50 | 4 | RC **v0.21.7 stalled** (render fail) | 🟡 **High Churn / Merge Lag** |
| **CoPaw (QwenPaw)** | 10 | 21 | 12 | None | 🟢 **High Velocity / Stabilizing** |
| **ZeroClaw** | 14 | 40+ | 2 | None | 🟡 **Active / Tracker-Heavy** |
| **NanoBot** | 1 | 22 | 4 | None (pipeline prep) | 🟡 **Active / Deployment Blocker** |
| **NanoClaw** | 2 | 12 | 8 | None | 🟢 **Moderate / Stabilizing** |
| **PicoClaw** | 2 | 2 | 0 | None (v0.3.1 current) | 🟡 **Reactive / Awaiting Review** |
| **NullClaw** | 2 | 1 | 0 | None | 🟢 **Focused / Fix In-Progress** |
| **IronClaw** | 0 | 7 | 3 | None | 🟢 **Stable / Maintenance-Only** |
| **LobsterAI** | 0 | 0 | 1 (stale) | None | ⚪ **Dormant / Feature-Complete** |
| **TinyClaw** | 0 | 0 | 0 | None | ⚪ **Inactive** |
| **Moltis** | 0 | 0 | 0 | None | ⚪ **Inactive** |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚪ **Inactive** |

*Health Score: 🟢 Stabilizing/Healthy • 🟡 Active with Risks • 🟠 High Churn/Backlog • ⚪ Low/No Activity

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale & Breadth**: Only project managing 500+ daily issues/PRs across database, gateway, multi-agent fleet, and plugin ecosystem simultaneously.
- **Release Cadence**: Shipped a safety-focused beta (v2026.10.5-beta.1) while peers are stuck in RC or pre-release stabilization.
- **Multi-Agent Fleet Maturity**: Actively solving terminal ownership, agent-bookkeeping consolidation (#169520), and gateway polling waste (#169524)—problems most peers haven't reached.

**Technical Approach Differences**
- **Gateway-Centric Architecture**: Persistent gateway process managing SQLite WAL, plugin state, and agent fleets—vs. NanoBot/NullClaw's lighter session models or CoPaw's console/backend split.
- **Windows-First Reliability Investment**: Explicit fixes for installer lanes (#169567), WAL growth on NTFS (#143524), and LXC resource limits (#164113)—unmatched cross-platform rigor.
- **Plugin Source Capture as First-Class Concern**: Treating 6.5 GB/gateway-start disk rewrite (#157989) as a blocker, not an implementation detail.

**Community Size Comparison**
- **Issues with 100+ comments**: OpenClaw has **#143524 (122 comments)** on DB WAL; next highest is Hermes **#6626 (13 comments)** on Gemma 4 support. OpenClaw's community engagement depth is an order of magnitude higher, reflecting production deployments at scale.

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Bounded Resource Consumption** | OpenClaw (#91588 mem leak, #157989 disk bloat), Hermes (#136910 worktree pruner), NullClaw (#1053 session history), CoPaw (#8173 zombie tasks), ZeroClaw (#11594 firejail) | Hard limits on memory, disk, process trees, and session history with automatic enforcement |
| **Silent Failure Elimination** | PicoClaw (#3422 Telegram hang, #3423 Cron false-ok), CoPaw (#8175 silent startup fail), ZeroClaw (#11615 Telegram 429 ignore), NanoBot (#6165 Docker non-functional) | Observable failure modes: timeouts, error propagation, health endpoints, structured logs |
| **Self-Update / In-App Upgrade** | NanoBot (#5817, #6168), NanoClaw (#4076 per-group image rebuild), OpenClaw (#160521 update block), ZeroClaw (tunnel URL fix #11531) | Atomic, verifiable, rollback-capable updates for self-hosted deployments |
| **Sandbox / Isolation Enforcement** | ZeroClaw (#11594 firejail_args ignored), IronClaw (WASM deps), NanoClaw (container path v2 spec #2255), Hermes (skills path portability) | Actual enforcement of declared sandbox policies, not just documentation |
| **Multi-Session / Multi-User State** | Hermes (per-board kanban #118116, per-user toolsets #136917), CoPaw (nested skills #8179), ZeroClaw (delegate policy #11667), OpenClaw (multi-agent fleet #169563) | Isolation, quotas, and ownership tracking for concurrent agents/users |
| **Local Model Tool-Calling Parity** | Hermes (#6626 Gemma 4), CoPaw (Ollama IPv6 #1848), NanoBot (provider configs) | Standardized parser/config for vLLM/Ollama/local models to match cloud provider UX |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | CoPaw | ZeroClaw | NanoBot | NanoClaw | PicoClaw | IronClaw |
|-----------|----------|--------------|-------|----------|---------|----------|----------|----------|
| **Primary Focus** | Enterprise-grade multi-agent fleet gateway | Skills ecosystem & local-model integration | Desktop/console UX & plugin marketplace | Memory/runtime/gateway separation | Self-hosted deployment & update UX | Email automation & container skills | Embedded/gateway reliability | Rust dependency hygiene |
| **Target User** | Teams running fleets, Windows/LXC prod | Power users, local-model enthusiasts | Desktop users, plugin developers | Platform builders, long-horizon agents | Self-hosters, non-expert operators | Email-centric automation devs | Edge/proxied gateway operators | Rust backend maintainers |
| **Architecture** | Monolithic gateway + agent runtime | Modular skills + gateway + sessions | Console (React) + Backend (Go/TS) + Agents | Core + Channels + Memory + Runtime | Python + Bun + WebUI | Container-first, Node skills | Lightweight gateway + cron/Telegram | Rust crates + WASM |
| **Differentiator** | Windows/LXC hardening, fleet bookkeeping | Skills as extensibility primitive, Telegram topics | Plugin market with version gating, HarmonyOS client | Memory provenance planes, dark factory workflow | Verified prebuilt previews, SHA-256 Bun | AgentMail adapter, umask-safe tests | Forever-hang prevention, status fidelity | Zero user-facing features, pure maintenance |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (High Velocity, High Risk)** | OpenClaw, Hermes Agent, CoPaw, ZeroClaw | 50+ daily issue/PR updates; multiple P0/P1 bugs open; release candidates blocked; heavy maintainer triage load |
| **Stabilizing (Focused Fixes, Pre-Release)** | NanoBot, NanoClaw, PicoClaw, NullClaw | <25 daily updates; critical bugs have authored fix PRs awaiting review; clear path to next release |
| **Maintenance Mode (Stable, Low Churn)** | IronClaw, LobsterAI | Zero user-facing issues; activity = automated dependency updates or single stale PR closure |
| **Dormant / Inactive** | TinyClaw, Moltis, ZeptoClaw | No 24h activity; unclear maintenance status |

**Key Insight**: The "Rapidly Iterating" tier projects collectively represent **~85% of all ecosystem issue/PR volume** but share the same failure patterns (resource leaks, silent failures, update blocks). This suggests **cross-project standardization of reliability primitives** (bounded queues, health checks, update protocols) would yield disproportionate ecosystem value.

---

## 7. Trend Signals for AI Agent Developers

1. **Reliability > Features**: Every active project is prioritizing memory bounds, zombie reaping, and silent-failure elimination over new capabilities. **Invest in observability and resource quotas from day one.**

2. **Self-Hosted Update UX is a Differentiator**: NanoBot's verified prebuilt pipeline, NanoClaw's per-group image rebuild, and OpenClaw's safer DB checkpointing show that **"git pull + restart" is no longer acceptable** for production agents. Design for atomic, rollback-safe updates.

3. **Local Model Tool-Calling is the Next Compatibility Frontier**: Hermes (Gemma 4), CoPaw (Ollama), and NanoBot (provider configs) all block on parser/config gaps for local models. **Standardize on a common tool-call interchange format** (e.g., OpenAI-compatible + extensions) to avoid fragmentation.

4. **Multi-Tenancy Primitives Are Converging**: Per-board kanban (Hermes), per-user toolsets (Hermes), nested skills (CoPaw), delegate policies (ZeroClaw), fleet terminal ownership (OpenClaw). **Build isolation/quotas into core architecture, not as afterthought.**

5. **Windows & Container Edge Cases Are Production Blockers**: OpenClaw's WAL/NTFS/LXC issues, PicoClaw's SOCKS proxy hangs, NanoClaw's umask test failures, CoPaw's IPv6 Ollama timeouts. **Test on Windows, unprivileged containers, and proxied networks continuously.**

6. **Plugin/Extension Markets Require Version Gating**: CoPaw's min/max_version filtering, OpenClaw's plugin source capture bloat, Hermes' skill path drift. **Enforce semantic versioning and compatibility metadata at the platform level.**

7. **Session/Context Bounding is Universal**: NullClaw's max_history_messages, Hermes' context overflow recovery, OpenClaw's reply loss, ZeroClaw's memory consolidation. **Implement hard token/message limits with automatic compaction—never unbounded growth.**

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-10-12

## 1. Today's Overview
NanoBot is experiencing high development velocity on **2026-10-12**, with **22 Pull Requests updated** (18 open, 4 merged/closed) and only **1 open issue** flagged. Activity is concentrated on internal stability (CI import boundaries, Cron persistence), WebUI configuration UX, and provider-specific bug fixes, rather than major feature launches. Notably, no new releases were published in the last 24 hours. While core architecture work is advancing rapidly (self-update flows, prebuilt preview candidates), a critical onboarding regression surfaced today: the default Docker image fails to run, which contradicts the project's "Just Works" deployment value proposition. Project health is **active but fragile at the deployment layer**, requiring immediate attention to Docker QA.

## 2. Releases
*   **No new versions released** in the last 24 hours.
*   **Distribution Work:** Maintenance is focused on the *pipeline* for future releases rather than shipping new binaries today. PRs **#6154** (verified prebuilt preview candidates) and **#6168** (managed installs/in-app updates) indicate the team is preparing a more robust release infrastructure for the near future, decoupling preview distribution from frontend build environments.

## 3. Project Progress
Significant momentum is visible in **update management, CI hygiene, and WebUI polish**.

*   **Self-Update & Installation (Closed/In Progress):**
    *   **Merged:** **#5817** (`feat: add stable and source self-update flows`) — Established `nanobot update` for stable PyPI, `--dev`/`--update-dev` source handling, and a SHA-256-verified Bun runtime. This is foundational work currently being extended by **#6168**.
    *   **In Progress:** **#6154** — Preparing verified prebuilt preview candidates so users avoid needing a frontend build environment.
*   **CI & Code Health:**
    *   **#6166** — Enforcing Python import ownership boundaries via an AST checker with five explicit rules for core execution, session storage, and security primitives. This is a major refactor to prevent dependency coupling.
*   **WebUI & Settings:**
    *   **#6161** — Consolidated web proxy/User-Agent controls into **Settings → Capabilities → Web access**.
    *   **#6162** — Ensuring WebUI `Restart` settings do not pollute chat history/transcripts.
    *   **#6150** — (Closed) Fixed WSL browser launch issues by routing through Windows PowerShell instead of a Linux launcher.

## 4. Community Hot Topics
*Note: Comment/reaction counts are unavailable in the source data; topics are ranked by severity labels (`priority: p1`, `security`, `conflict`) and functional impact.*

*   **#6165 [OPEN] Default Docker image doesn't result in working app** — `[Issue]` | This is the most prominent community signal today. A user reported that `git clone` + `docker compose up` yields a non-functional bot.
    *   *Analysis:* This is a severe onboarding blocker. The existence of this issue suggests a gap between the CI build path and the default Compose configuration, potentially indicating environment variable or entrypoint mismatches.
*   **#6112 [OPEN] Subagent inherit and enforce session tool restrictions** — `priority: p1`, `security`, `conflict` |
    *   *Analysis:* Critical security/correctness gap. A parent session denying `write_file` can currently delegate that operation to a subagent, bypassing restrictions. The `conflict` label indicates merge friction that needs maintainer resolution before the security fix can land.
*   **#6168 [OPEN] Integrate managed installs and recoverable in-app updates** — `feat/update` |
    *   *Analysis:* Indicates strong roadmap focus on user retention via self-hosting ease-of-upgrade. Users are increasingly demanding self-hosted control without manual reinstalling.
*   **GitHub

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-10-12

## 1. Today's Overview

Hermes Agent shows **high daily churn** with 50 issues and 50 PRs updated in the last 24 hours, though only 4 PRs were merged/closed and 2 issues closed — indicating active triage and development but limited merge throughput today. The backlog is dominated by **skills ecosystem bugs** (paths, documentation drift, platform compatibility), **gateway/session reliability** (Telegram topic routing, agent-close interruption), and **local model integration gaps** (Gemma 4 tool calling, Ollama pricing). No new release shipped; the last release gate (rc.14-v0.21.7) passed all checks but stalled on a final rendering step (PR #136921).

## 2. Releases

**No new releases today.** The v0.21.7 release candidate (rc.14) cleared all build, smoke, install, staging, acceptance, bundle publication, and Store submission checks, but the final "Stable release is green" job failed during the `Render the admitted candidate smoke results` step ([PR #136921](https://github.com/NousResearch/hermes-agent/pull/136921)). Maintainers are investigating the rendering failure; a re-run or hotfix is expected shortly.

## 3. Project Progress (Merged/Closed Today)

| PR / Issue | Type | Summary |
|------------|------|---------|
| [#136921](https://github.com/NousResearch/hermes-agent/pull/136921) | **fix(release)** | Final release gate's builds-table step now gets its inputs and cannot block the release (merged). |
| [#136916](https://github.com/NousResearch/hermes-agent/pull/136916) | **perf(agent/codex)** | Codex requests now go out zstd-compressed, matching the official Codex client (merged). |
| [#136896](https://github.com/NousResearch/hermes-agent/issues/136896) | **bug(skills)** | `simplify-code` skill treated ordinary review requests as authorization to edit files (closed). |
| [#136919](https://github.com/NousResearch/hermes-agent/pull/136919) | **fix(gateway)** | Gateway runtime status now restamps `hermes_home` on `gateway_state.json` reload (merged). |

**Net movement:** 4 PRs merged/closed, 2 issues closed. Most open PRs are bug fixes for skills, gateway routing, and local-model tool calling.

## 4. Community Hot Topics (Most Comments/Reactions)

| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) **Gemma 4 tool calling support** | 13 | 4 | Parser availability & required config for `google/gemma-4-E4B-it` via vLLM; blocks local-model adoption. |
| [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) **Telegram DM topics: opening message delivered thread-less** | 12 | 0 | New forum topic's first message lacks `message_thread_id`, causing lobby recovery to misroute to previous topic. |
| [#60551](https://github.com/NousResearch/hermes-agent/issues/60551) **config.yaml write guard & `hermes config set` writes string for list keys** | 6 | 0 | Runtime refuses patches to `config.yaml`; CLI writes scalars where lists expected — breaks secret passthrough. |
| [#29584](https://github.com/NousResearch/hermes-agent/issues/29584) **productivity/maps skill: wrong script path (twice)** | 5 | 0 | Missing category prefix (`productivity/`) and `~/` not resolved in sandboxed subprocesses. |
| [#118116](https://github.com/NousResearch/hermes-agent/issues/118116) **Per-profile in-progress cap configurable per board** | 4 | 0 | Kanban `max_in_progress_per_profile` is global; need per-board overrides (Platform vs Induct). |

**Signal:** Top pain points are **local model tool-calling parity** (Gemma 4), **Telegram session integrity**, and **config/skills path portability** across `HERMES_HOME` and profiles.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0** | [#136910](https://github.com/NousResearch/hermes-agent/pull/136910) | Worktree orphan-branch pruner deletes in-flight branches (no age gate) — **data loss risk**. | **Yes** (open PR) |
| **P2** | [#117906](https://github.com/NousResearch/hermes-agent/issues/117906) | `terminal` & `process_manage wait` cut at 420s by generic tool deadline; partial output discarded. | No |
| **P2** | [#136623](https://github.com/NousResearch/hermes-agent/issues/136623) | Background-review tool whitelist not enforced: `threading.local` invisible on tool worker threads (post-ededa8c4f1). | No |
| **P2** | [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) | Gemma 4 tool calling parser/config missing for vLLM integration. | No |
| **P2** | [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) | Telegram new-topic opening message misrouted (missing `message_thread_id`). | No |
| **P2** | [#69779](https://github.com/NousResearch/hermes-agent/pull/69779) | Local-model `intent_ack_continuation` stopped firing in established sessions (tool-using). | **Yes** (open PR) |
| **P2** | [#136930](https://github.com/NousResearch/hermes-agent/issues/136930) | `agent_close` silently kills background checkpointed tasks; no recovery notice in Telegram. | No |
| **P3** | [#136681](https://github.com/NousResearch/hermes-agent/issues/136681) | Desktop plugin catalog renders blank: docs site now sends `X-Frame-Options: DENY`. | No |
| **P3** | [#122464](https://github.com/NousResearch/hermes-agent/issues/122464) | PDF skill tables overflow page (raw strings not wrapped). | **Yes** ([#122467](https://github.com/NousResearch/hermes-agent/pull/122467)) |
| **P3** | [#91542](https://github.com/NousResearch/hermes-agent/issues/91542) | `grounded-citations` skill missing `scripts/_hermes_home.py` from Hub package. | No |

**Critical watch:** P0 worktree pruner ([#136910](https://github.com/NousResearch/hermes-agent/pull/136910)) and P2 local-model continuation regression ([#69779](https://github.com/NousResearch/hermes-agent/pull/69779)) have open fix PRs but unmerged.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Per-board kanban dispatch caps** (`max_in_progress_per_profile`, `max_spawn` in `board.json`) | [#118116](https://github.com/NousResearch/hermes-agent/issues/118116) + [PR #136925](https://github.com/NousResearch/hermes-agent/pull/136925) | **High** — PR opened today, addresses gateway multi-board tenancy. |
| **Per-user toolset overrides** (`user_toolsets.<platform>.<user-id>`) | [PR #136917](https://github.com/NousResearch/hermes-agent/pull/136917) | **High** — PR opened today, expands gateway personalization. |
| **Background memory review at session boundaries** (reset/close/compression) | [#31597](https://github.com/NousResearch/hermes-agent/issues/31597) | Medium — architectural, needs memory/compression coordination. |
| **Show model context window in desktop model picker** | [#136656](https://github.com/NousResearch/hermes-agent/issues/136656) | Medium — UI-only, low risk. |
| **Gemma 4 tool calling parser/config** | [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) | **High** — blocks local-model users; 13 comments, 4 👍. |
| **Ollama Cloud pricing from official snapshot** | [PR #136918](https://github.com/NousResearch/hermes-agent/pull/136918) | **High** — PR opened today, fixes `unknown` pricing for first-party provider. |

## 7. User Feedback Summary

**Pain points (from issue narratives):**
- **Config rigidity:** Runtime refuses `patch`/`write_file` on `config.yaml`; `hermes config set` writes strings for list keys — forces manual restarts for secret passthrough ([#60551](https://github.com/NousResearch/hermes-agent/issues/60551)).
- **Skills path portability:** Multiple skills hardcode `~/.hermes` or wrong category paths, breaking non-default `HERMES_HOME` and sandboxed execution ([#29584](https://github.com/NousResearch/hermes-agent/issues/29584), [#93152](https://github.com/NousResearch/hermes-agent/issues/93152), [#12707](https://github.com/NousResearch/hermes-agent/pull/12707)).
- **Documentation drift:** Skills reference removed helpers, unimplemented CLI flags (`--services`, `--format`), stale `python3` on Windows, and phantom parameters (`delegate_task(background=true)`) ([#106671](https://github.com/NousResearch/hermes-agent/issues/106671), [#109731](https://github.com/NousResearch/hermes-agent/issues/109731), [#87048](https://github.com/NousResearch/hermes-agent/issues/87048), [#109730](https://github.com/NousResearch/hermes-agent/issues/109730)).
- **Silent failures:** `agent_close` kills background work without notice ([#136930](https://github.com/NousResearch/hermes-agent/issues/136930)); tool deadline discards partial output ([#117906](https://github.com/NousResearch/hermes-agent/issues/117906)).
- **Desktop regressions:** Plugin catalog blank due to upstream docs site CSP change ([#136681](https://github.com/NousResearch/hermes-agent/issues/136681)).

**Positive signals:** Active community contributions fixing skills (PDF table wrapping, GitHub helper paths, shop sign-in logic, maps `HERMES_HOME` usage) and gateway enhancements (per-board/user caps, channel route banner).

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) **Gemma 4 tool calling** | ~6 months (created 2026-04-09) | Blocks adoption of Google's latest local model; 13 comments, 4 👍, no fix PR. |
| [#60551](https://github.com/NousResearch/hermes-agent/issues/60551) **config.yaml write guard & list scalar bug** | ~3 months (2026-07-07) | Fundamental config UX gap; affects secret management workflows. |
| [#29584](https://github.com/NousResearch/hermes-agent/issues/29584) **maps skill path bugs** | ~5 months (2026-05-21) | Two stacked path bugs; fix PRs exist ([#29589](https://github.com/NousResearch/hermes-agent/pull/29589), [#12707](https://github.com/NousResearch/hermes-agent/pull/12707)) but unmerged. |
| [#31597](https://github.com/NousResearch/hermes-agent/issues/31597) **Background memory review at session boundaries** | ~5 months (2026-05-24) | Architectural memory UX gap; nudges don't reflect mid-session. |
| [#88660](https://github.com/NousResearch/hermes-agent/issues/88660) **Bundled skills: 3 functional bugs + 3 doc corrections** | ~2 months (2026-08-17) | Includes arXiv ID corruption, Sources-section deletion, citation-coverage inflation; diffs provided. |
| [#101754](https://github.com/NousResearch/hermes-agent/issues/101754) **Doc-code drift: cron `skip_memory`** | ~1.5 months (2026-09-03) | Docs say `skip_memory=True`, code passes `False` — memory behavior mismatch. |
| [#125183](https://github.com/NousResearch/hermes-agent/issues/125183) **Three stale claims in docs site + defaults-dict split** | ~2 weeks (2026-09-27) | Verified against `main`; docs site unversioned, no dates. |
| [#65463](https://github.com/NousResearch/hermes-agent/pull/65463) **Gateway: show effective channel route on `/new` banner** | ~3 months (2026-07-16) | UX fix for session transparency; open PR, unmerged. |

---

**Overall Health:** 🟡 **Active but congested** — high issue/PR velocity, strong community contribution on skills/gateway, but merge throughput lags. Critical P0/P2 bugs have open fix PRs awaiting review. Next release (v0.21.7) blocked on final gate rendering. Priority should go to merging the worktree pruner fix (#136910), local-model continuation (#69779), and Gemma 4 support (#6626) to unblock local-model users and prevent data loss.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest
**Date:** 2026-10-12  
**Project:** sipeed/picoclaw  
**Scope:** GitHub Activity (Last 24h)

## 1. Today's Overview
PicoClaw activity on 2026-10-12 is characterized by reactive maintenance rather than feature development. There are **no new releases** today, and no issues or pull requests were closed or merged within the last 24 hours. However, the project remains actively engaged by a core contributor who filed two critical reliability bugs and immediately authored corresponding fix PRs. All recent activity centers on integration stability (Telegram HTTP clients and Cron job reporting), suggesting the team is currently prioritizing robustness over new functionality. Project health is stable but currently sits in a code-review limbo with fixes awaiting merge.

## 2. Releases
**None.** No new tags or release candidates were published in the last 24 hours. The latest confirmed version referenced in the issue tracker is **v0.3.1** (commit `2cf030d2`). Users relying on the fixes discussed below will need to wait for a new release cycle following PR merges.

## 3. Project Progress
*   **Merged/Closed PRs:** 0
*   **Open Work:** 2 fix PRs submitted by contributor `sstpnk`.
*   **Advancement:** No new features were announced. Development effort today was entirely directed toward closing a gap between reported status and actual execution state in the `cron` and `telegram` modules.
*   **Key PRs:**
    *   [PR #3424](https://github.com/sipeed/picoclaw/pull/3424) - Adds HTTP timeouts to the Telegram long-poll client.
    *   [PR #3425](https://github.com/sipeed/picoclaw/pull/3425) - Ensures cron job execution errors propagate to the gateway status report.

## 4. Community Hot Topics
Activity volume is low, with **0 comments and 0 reactions** across all 24h items. Consequently, "hot topics" are defined by recency and technical impact rather than community engagement.

*   **Telegram Connectivity Reliability (#3422 / #3424):** The Telegram integration can enter a permanent silent failure state when underlying connections hang (e.g., via SOCKS proxies or tunnels). Since `getUpdates` uses long-polling without client-side timeouts, a half-open connection blocks message reception indefinitely while the process appears healthy.
*   **Cron Job Observability (#3423 / #3425):** The Cron module masks execution failures by defaulting `lastStatus` to `"ok"`. This prevents users from detecting dead automation pipelines, which is critical for agents relying on scheduled tasks.

**Underlying Need:** Both topics highlight a demand for **fault-tolerant gateways**. Users are integrating PicoClaw into production-like environments (proxies, schedulers) and require guarantees that failures are reported and services do not hang silently.

## 5. Bugs & Stability
Two severity-critical bugs were reported today, both with open fix PRs.

| Severity | Issue | Description | Fix Status |
| :--- | :--- | :--- | :--- |
| **High** | [Issue #3422](https://github.com/sipeed/picoclaw/issues/3422) | Telegram messages stop receiving **forever** due to missing HTTP timeouts on long-poll requests. | **PR #3424** open (bound requests with timeouts) |
| **High** | [Issue #3423](https://github.com/sipeed/picoclaw/issues/3423) | Cron jobs report `"lastStatus": "ok"` regardless of actual failure. | **PR #3425** open (propagate errors from `ExecuteJob`) |

*   **Stability Assessment:** No crashes or regressions reported today. The bugs are logic/behavioral rather than application-crashing, meaning the gateway remains running but is unreliable. The presence of immediate fix PRs (author `sstpnk` for both issues and PRs) indicates a tight feedback loop likely to resolve these quickly once reviewed.

## 6. Feature Requests & Roadmap Signals
**None.** No feature requests were filed today. The development queue appears to be clearing out a backlog of reliability defects (timeouts, error propagation) discovered during active usage of v0.3.1. Based on this trajectory, the next minor release is expected to prioritize **integration resilience** (network timeouts, status fidelity) rather than new tooling capabilities.

## 7. User Feedback Summary
User feedback is concentrated on two pain points: **silence** and **misleading status**.
*   **Pain Point:** The system lies about success. Users cannot distinguish between a successful cron run and a silent failure (`#3423`).
*   **Pain Point:** The system fails silently. Telegram channels stop receiving input without error logs or process restart (`#3422`), which is unacceptable for autonomous agents requiring continuous communication.
*   **Satisfaction:** Functional capability is present, but reliability expectations in networked/proxied environments are currently unmet. The lack of maintainer comments on the issues (0 comments) suggests users are waiting for the fixes to be merged rather than engaging in discussion.

## 8. Backlog Watch
Based on the 24-hour snapshot, there are **no long-term abandoned items**. However, the current state of the two critical bugs warrants maintenance attention:
*   **Awaiting Review:** Both critical fix PRs (`#3424`, `#3425`) have been open since 2026-10-11 (approx. 1 day) with no comments or maintainer merges yet.
*   **Watch Item:** If the maintainer team does not review these self-authored fixes promptly, the "forever hang" and "silent failure" conditions will persist for existing users, potentially increasing ticket volume for the same root causes. No stale issues were detected in this window.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑10‑12**

---

### 1. Today's Overview  
The repository shows moderate activity with 2 open issues and 12 pull‑requests (4 open, 8 merged/closed). The past 24 h are dominated by bug fixes (two open regressions) and a handful of cleanup/merge PRs that bring the `channels` branch up‑to‑date and normalize tooling (Node‑only skills, container path renames). No new releases were published, indicating the team is still in a stabilization phase before a next cut‑release. Overall health is good, but two critical bugs in the update/validation pipeline are blocking the `/update‑nanoclaw` workflow for some users.

---

### 2. Releases  
**None** – there are no new tags or published artifacts for this period.

---

### 3. Project Progress  
| PR | Status | Core Change | Impact |
|----|--------|-------------|--------|
| **#4077** *(closed)* | Merged | Rewrites Python‑based skill examples into Node, allowing agents running on Python‑less images to execute without “python3: not found”. | Improves cross‑image compatibility for skill authors. |
| **#4071** *(closed)* | Merged | Slack‑only bot now replies to DMs from its own workspace with a channel‑pointer instead of impersonating the user. | Tightens workspace boundaries for Slack bots. |
| **#4073** *(closed)* | Merged | Syncs `main` into `channels` (last sync at `7fbf22fb`). | Keeps branch parity and avoids conflict cascades. |
| **#4072** *(closed)* | Merged | Fixes Slack app‑posted DMs: messages now reach the correct person’s agent while preserving bot privacy. | Resolves identity leakage in Slack forwarding. |
| **#4070** *(closed)* | Merged | `declineAndNotify` can skip owner FYI by passing `fyiText: null` – useful for channel‑only bots. | Gives more granular control over decline notifications. |
| **#2255** *(closed)* | Merged | Replaces stale `/workspace/group` mounts with `/workspace/agent` across container skills and documentation. | Aligns container filesystem layout with v2 spec. |
| **#2237** *(closed)* | Merged | Adds `@every:<ms>` interval scheduling, anchored to the last `process_after` to prevent drift. | Extends scheduling options and improves reliability. |
| **#3062** *(closed)* | Merged | Enables `--send-read-receipts` for the signal‑cli daemon so NanoClaw marks messages read on the sender side. | Improves UX on Signal conversations. |
| **#3449** *(open)* | – | Pins Telegram `allowed_updates` to prevent channel‑post blackholing. | Critical for reliable Telegram bot operation. |
| **#4078** *(open)* | – | Carries sender and bot workspace IDs on inbound Slack messages (needed for workspace‑aware guards). | Required for advanced Slack module logic. |
| **#4075** *(open)* | – | Introduces `/add‑agentmail‑tool` – a dependency‑free Bun script for AgentMail inbox management with per‑thread ledger. | Expands email‑automation capabilities for agents. |
| **#3743** *(open)* | – | Adds AgentMail email channel adapter (no Chat‑SDK bridge) for per‑agent inboxes. | Provides a self‑hosted email channel without domain MX changes. |

**What advanced?**  
* Cleanup and path normalization (#2255) reduce container‑skill friction.  
* Scheduling flexibility (#2237) and read‑receipt support (#3062) improve reliability of long‑running tasks and messaging.  
* The Node‑only skill rewrite (#4077) removes a Python dependency for agents on minimal images.  

**What was fixed?**  
* Identity leakage in Slack forwarding (#4072).  
* Owner‑FYI spam for channel‑only bots (#4070).  
* File‑mode test hard‑coding that blocked `/update‑nanoclaw validate` (#4074, see Bugs).  

---

### 4. Community Hot Topics  
- **Issue #4076** – *Updates don’t rebuild per‑group images*: after `/update‑nanoclaw`, groups with installed packages retain the old agent image, causing a drift between the agent base and the group‑specific packages.  
  - **Link**: https://github.com/nanocoai/nanoclaw/issues/4076  
  - **Underlying need**: Reliable per‑group image isolation and consistent rebuild triggers.  

- **Issue #4074** – *group‑skills test hardcodes file mode 644 and fails under umask 002 (blocks `/update‑nanoclaw validate`)*: the test assumes a default umask, causing validation failures in environments where the group‑skills directory is created with mode 664.  
  - **Link**: https://github.com/nanocoai/nanoclaw/issues/4074  
  - **Underlying need**: Umask‑agnostic test logic to support enterprise hardening.  

Both issues have zero comments yet, indicating they are newly discovered blockers rather than long‑standing debates.

---

### 5. Bugs & Stability  
| Severity | Bug | Issue/PR | Description | Current Fix Status |
|----------|-----|----------|-------------|--------------------|
| **High** | Per‑group image rebuild failure | #4076 (open) | `/update‑nanoclaw` does not trigger rebuild for groups that have `packages_apt` or `packages_pip` defined, leaving the container with stale layers. | No fix yet – awaiting investigation. |
| **Medium** | File‑mode test hard‑coding | #4074 (open) | `src/group‑skills.test.ts` expects mode 644; fails under umask 002, breaking the `/update‑nanoclaw validate` step. | No fix yet – test needs to be umask‑agnostic. |
| **Low** | Signal read‑receipt default | #3062 (closed) | Signal‑cli only sent delivery receipts; now `--send‑read‑receipts` flag is added to surface read status. | Fixed – merged. |

The two high‑impact bugs are still open and should be priority for the next release cycle.

---

### 6. Feature Requests & Roadmap Signals  
- **#4075** – `/add‑agentmail‑tool` (CLI + per‑thread ledger). Appears production‑ready and likely to ship in the next release.  
- **#3743** – AgentMail email channel adapter. Provides a clean “agent‑mail” channel without touching MX records; also likely to be released soon.  
- **#4078** – Preserve sender & bot workspace IDs in Slack events. Enables more sophisticated workspace‑aware guards; depends on bridge changes.  
- **#3449** – Pin Telegram `allowed_updates`. Critical for reliable channel posting; awaiting review/merge.  

Overall, the roadmap is leaning toward **email‑centric automation** and **robust, umask‑safe container skills**.

---

### 7. User Feedback Summary  
* **Update pipeline frustration** – Users report that `/update‑nanoclaw` leaves per‑group images stale, causing configuration drift and manual rebuilds.  
* **Node‑only skill demand** – Several operators have Python‑free agent images and cannot run existing Python examples; the Node rewrite (#4077) directly addresses this pain point.  
* **Slack workspace awareness** – The need to differentiate a bot’s workspace from a DM’s workspace (for security guards) sparked #4078, indicating a gap in current Slack handling.  
* **Signal UX** – Users missed read‑receipt visibility; the flag added in #3062 resolves that.  

Overall satisfaction is moderate; the two blockers above are the primary sources of dissatisfaction.

---

### 8. Backlog Watch – Items Needing Maintainer Attention  
| Item | Type | Why it matters |
|------|------|----------------|
| **Issue #4076** | Open bug | Directly blocks `/update‑nanoclaw` for groups with packages; high impact on operator workflows. |
| **Issue #4074** | Open bug | Prevents validation step from passing in hardened environments; must be fixed before any release. |
| **PR #4078** | Open (core‑team) | Adds essential workspace context for Slack; currently waiting for review/merge. |
| **PR #3449** | Open (channels) | Fixes Telegram channel posting; may affect users relying on channel updates. |
| **PR #4075** | Open (skill) | New email tool; needs QA/integration testing before release. |
| **PR #3743** | Open (email channel) | Provides AgentMail adapter; needs stability testing. |

These items should be addressed in the next sprint or release planning session to keep the project on a stable trajectory.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest - 2026-10-12

## 1. Today's Overview

NullClaw experienced moderate activity today (2026-10-12) with two newly updated issues addressing critical session management concerns and one pull request focused on fixing the root cause. There have been no new releases published, indicating ongoing development work without a major version bump. The primary focus remains on stabilizing long-lived sessions by bounding their history size, preventing unbounded memory growth that could degrade performance over time.

## 2. Releases

No new releases were published on 2026-10-12. The project continues its iterative development cycle through issue and pull request resolution rather than version increments at this time.

## 3. Project Progress

The only significant progress today came from pull request #1054, authored by vernonstinebaker, which directly addresses the unbounded session history problem identified in issues #1053 and #1055. This PR implements a fix to bound restored session history to the `max_history_messages` limit during session restoration, ensuring that persistent session transcripts do not grow indefinitely. The validation suite passed successfully (7491/7500 tests passing), confirming the fix maintains overall functionality while imposing the necessary boundary on memory consumption.

## 4. Community Hot Topics

The most active discussion topics center around session history management, specifically:

- **Issue #1053** ([nullclaw/nullclaw#1053](https://github.com/nullclaw/nullclaw/issues/1053)) – Describes how per-request context grows without bound in long-lived sessions, even though in-memory trimming exists. The core problem is that `persistTurn` appends user and assistant turns to storage, and upon session restore, the entire historical record is reloaded without any persistence-boundary enforcement.

- **Issue #1055** ([nullclaw/nullclaw#1055](https://github.com/nullclaw/nullclaw/issues/1055)) – A follow-up to #1053 that expands on the solution approach, emphasizing the need for compaction writes-back with sequence guards to prevent unbounded storage accumulation.

Both issues remain open and actively discussed, reflecting strong community interest in solving this fundamental scalability concern.

## 5. Bugs & Stability

The primary stability concern today relates to unbounded session context growth, which can lead to increased memory consumption and potential performance degradation for long-running conversations. While no individual crash reports were logged, the two open issues represent latent instability risks:

- **Severity: High** – Uncontrolled session history expansion threatens resource exhaustion over time, particularly for production deployments handling extended interactions.
- **Fix Status: In Progress** – PR #1054 has been opened to implement bounded restoration, but the change is still pending review and merge. Once merged, it should mitigate the risk of unbounded memory growth.

## 6. Feature Requests & Roadmap Signals

The central feature signal emerging from the community is the need for explicit session history bounding. This represents a shift toward more predictable resource usage in production environments. The roadmap implications include:

- **Immediate Priority:** Implement hard limits on session history retention (as done in PR #1054).
- **Future Enhancements:** Consider adding configurable `max_history_messages` settings, automatic compaction strategies, and monitoring alerts for session growth patterns.
- **User Expectation:** Developers and operators expect stable, predictable behavior where session restoration does not consume unbounded resources.

## 7. User Feedback Summary

Users have expressed frustration with the current unbounded session context model, noting that:

- Long-lived conversations gradually consume increasing amounts of memory despite existing trimming mechanisms.
- The lack of storage-boundary enforcement creates uncertainty about system reliability under sustained load.
- The proposed solution (bounding restored history) aligns with common developer expectations for controlled resource usage.

These feedback points underscore the importance of the upcoming fix and suggest that resolving this issue will improve overall adoption confidence among teams integrating NullClaw into production systems.

## 8. Backlog Watch

Two open issues require continued attention:

- **[nullclaw/nullclaw#1053](https://github.com/nullclaw/nullclaw/issues/1053)** – Still open; focuses on explaining why current trimming doesn't persistently bound storage and outlines the compaction strategy needed.
- **[nullclaw/nullclaw#1055](https://github.com/nullclaw/nullclaw/issues/1055)** – Follow-up to #1053, detailing implementation approaches and sequence-guard mechanisms for compaction writes.

Both issues are high-priority because they address a fundamental architectural limitation that affects system scalability. Resolution of these items should be prioritized before the next release cycle to ensure consistent behavior across all deployments.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑10‑12**

---

### 1. Today's Overview
The IronClaw repository is in a quiet but steady state. No new issues were opened or closed in the past 24 hours, indicating a lack of user-reported problems or feature requests. Conversely, PR activity remains robust with **7 pull requests** updated (4 open, 3 merged), all of which are dependency‑related updates generated by Dependabot. This reflects a healthy, well‑maintained codebase where automated upkeep is the primary focus, while the core feature development pipeline appears to be on hold.

---

### 2. Releases
**None** – No new releases were published in the last day.

---

### 3. Project Progress
| Merged / Closed PR | Type | Key Changes |
|--------------------|------|-------------|
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | Dependencies (Rust) | 31‑package bump in the `everything-else` group (e.g., `thiserror 2.0.20 → 2.0.21`, `uuid 1.24.0 → 1.26.1`, `base64` & others). |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | Dependencies (GitHub Actions) | 8‑action bump in the `actions` group (`anthropics/claude-code-action 1.0.183 → 1.0.228`, `actions/setup-node 4.0.2 → 7.0.0`, …). |
| [#8123](https://github.com/nearai/ironclaw/pull/8123) | Dependencies (Rust) | 3‑package bump in the `tokio‑ecosystem` group (`tokio‑test 0.4.5 → 0.4.6`, `tower‑http`, `tokio‑tungstenite`). |

These merges advance the project by keeping the dependency graph up‑to‑date, reducing technical debt and security exposure. No functional features or bug fixes were introduced.

---

### 4. Community Hot Topics
The most active recent activity revolves around Dependabot‑driven dependency updates. The four **open** PRs that moved in the last 24 h are:

* **[PR #8134](https://github.com/nearai/ironclaw/pull/8134)** – “chore(deps): bump the everything‑else group across 1 directory with 34 updates” (Rust crates such as `thiserror`, `uuid`, `base64`, etc.).  
* **[PR #8132](https://github.com/nearai/ironclaw/pull/8132)** – “chore(deps): bump the tokio‑ecosystem group across 1 directory with 4 updates” (tokio, tokio‑test, tower‑http, tokio‑tungstenite).  
* **[PR #8133](https://github.com/nearai/ironclaw/pull/8133)** – “chore(deps): bump the actions group across 1 directory with 10 updates” (anthropics/claude‑code‑action, actions/setup‑node, …).  
* **[PR #7834](https://github.com/nearai/ironclaw/pull/7834)** – “chore(deps): bump the wasm group across 1 directory with 4 updates” (wasmtime, wasmtime‑wasi, wit‑component, wit‑parser).

These PRs indicate an ongoing focus on maintaining a modern, secure dependency surface, with no user‑driven feature requests currently surfacing.

---

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The **open issue count remains zero**, and the closed issue count is unchanged, suggesting that the repository is currently stable from a defect‑management perspective.

---

### 6. Feature Requests & Roadmap Signals
The issue tracker contains **no open issues** at present, which implies a temporary lull in user‑driven feature requests. In the absence of explicit demand, the next visible priorities will likely be:

1. Reviewing and merging the pending Dependabot PRs (to keep CI green).  
2. Reactivating the roadmap work that was paused while dependency hygiene was being addressed.

---

### 7. User Feedback Summary
With zero open issues, there are no direct user pain points, use‑case queries, or satisfaction/dissatisfaction signals captured in the issue tracker for today. Feedback appears to be channelled primarily through the automated dependency‑update workflow rather than explicit user reports.

---

### 8. Backlog Watch
* **Open Dependabot PRs** (#8134, #8132, #8133, #7834) are awaiting maintainer review. Though generated automatically, they represent a backlog of changes that need attention to keep the CI/CD pipeline green and the dependency graph up‑to‑date.  
* **No long‑standing unanswered issues** exist in the repository at this moment.

---

**Overall Assessment:** IronClaw is in a maintenance‑heavy phase, with all recent activity focused on dependency hygiene. The code base is stable, and no new functional work or bug reports have surfaced. The immediate next step for the maintainers is to merge or reject the pending Dependabot PRs to ensure the repository stays clean and CI passes without manual intervention.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest - 2026-10-12

## 1. Today's Overview
The LobsterAI project showed minimal activity today (2026-10-12). There were zero new issues opened or updated in the last 24 hours, and no pull requests were merged or closed during this period. The only recent PR activity involved PR #978, which was marked as [CLOSED] and [STALE] after being updated on 2026-10-11. Overall, the project remains stable with no active maintenance or development work underway today.

## 2. Releases
No new releases were published on 2026-10-12. The repository currently has no version bumps or distribution packages available.

## 3. Project Progress
- **PR #978** ([link](https://github.com/netease-youdao/LobsterAI/pull/978)) was the sole change in the last 24 hours. This pull request was closed and marked as stale after being updated on 2026-10-11. The PR implemented "Task List Categorization (Folder Functionality)", allowing users to organize sidebar tasks into custom folders with persistent storage via a local SQLite database (`cowork_sessions` table).

## 4. Community Hot Topics
The single recent PR (#978) represents the most active community topic. It addresses a clear user need for improved task management through folder-based organization. While not numerous, this issue highlights ongoing demand for better task grouping capabilities within the application.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The absence of any updated issues indicates system stability. The previously closed PR #978 did not introduce new critical bugs, though its stale status suggests prior discussion around the feature may have concluded without further action.

## 6. Feature Requests & Roadmap Signals
The implemented feature—customizable task folders with persistent SQLite storage—represents a significant UX improvement. Future roadmap signals suggest potential expansion into:
- Cross-device synchronization of folder structures
- Hierarchical folder nesting
- Integration with external task management systems
- Advanced filtering and search across folders

This feature aligns well with common productivity patterns and could serve as a foundation for more sophisticated organizational tools.

## 7. User Feedback Summary
Users expressed a desire for better task organization beyond simple linear lists. The folder/category feature directly addresses this pain point by enabling visual grouping and persistent state retention. The implementation demonstrates successful translation of user feedback into concrete functionality, improving workflow efficiency for power users who manage multiple concurrent sessions.

## 8. Backlog Watch
- **PR #978** (closed/stale): Previously highlighted interest in folder-based task management. Now resolved, but the feature remains valuable and should remain prioritized in future development cycles.
- **Long-unanswered issues**: None detected in the current dataset. All existing issues appear to be either resolved or inactive.

---

**Summary:** LobsterAI maintained steady operation with no new activity today. The closed PR #978 delivered a meaningful enhancement for task organization, providing persistent folder-based categorization that addresses core user needs. The project remains healthy with no critical stability concerns.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw (QwenPaw) Project Digest — 2026-10-12

## 1. Today's Overview
CoPaw (QwenPaw) shows high development velocity and robust community engagement today, with 10 issues and 21 pull requests updated in the last 24 hours. The project is currently in a stabilization and feature-expansion phase, focusing heavily on hardening runtime stability (MCP teardown, context overflow recovery, and tool cancellation) alongside major UI/UX and platform expansions, such as the native HarmonyOS client and nested skill directory structures. Overall project health remains strong, with maintainers actively closing legacy issues and addressing critical user-facing bugs.

## 2. Releases
*   **New Releases:** None today.

## 3. Project Progress
A total of 12 pull requests were merged or closed today, representing significant advancements in memory management, system compatibility, and deployment UX:
*   **Memory Backend Expansion ([PR #5732](https://github.com/agentscope-ai/QwenPaw/pull/5732)):** Added a `none` memory backend manager, allowing users to completely disable the memory system (ReMeLight) directly via the Console UI without manual config file editing.
*   **Plugin Market Hardening ([PR #5661](https://github.com/agentscope-ai/QwenPaw/pull/5661), [PR #5612](https://github.com/agentscope-ai/QwenPaw/pull/5612)):** Implemented server-side filtering of CDN official plugins based on version constraints (`min_version`/`max_version`) and fixed download routing to isolate v1.x and v2.x plugin compatibility.
*   **Desktop UX Improvement ([PR #5569](https://github.com/agentscope-ai/QwenPaw/pull/5569)):** Eliminated the 5–30s white/blank screen on Windows desktop startup by introducing a two-phase seamless loading experience with a lightweight tkinter splash screen.
*   **Runtime & Model Resiliency ([PR #2783](https://github.com/agentscope-ai/QwenPaw/pull/2783), [PR #2520](https://github.com/agentscope-ai/QwenPaw/pull/2520), [PR #2052](https://github.com/agentscope-ai/QwenPaw/pull/2052)):** Implemented auto-recovery from context overflow errors via memory compaction retries, added preflight checks for active model availability, and downgraded MCP connection failures to normal tool-level errors to prevent agent loop crashes.
*   **MCP & Agent Tools ([PR #1977](https://github.com/agentscope-ai/QwenPaw/pull/1977), [PR #1978](https://github.com/agentscope-ai/QwenPaw/pull/1978), [PR #1848](https://github.com/agentscope-ai/QwenPaw/pull/1848), [PR #1480](https://github.com/agentscope-ai/QwenPaw/pull/1480)):** Improved MCP teardown exception handling, import templates, and runtime diagnostics. Fixed Ollama connectivity defaults to `127.0.0.1` to prevent IPv6-related timeout issues.
*   **Agents Square Integration ([PR #1883](https://github.com/agentscope-ai/QwenPaw/pull/1883)):** Added source browsing, validation, and import flows for Agents Square across backend APIs and the Console UI.

## 4. Community Hot Topics
*   **External Tool & Model Configuration (Issues #8174, #7990):** Users are highly active in requesting configuration surfaces for external services. Specifically, the inability to configure a custom Tavily API key for the built-in `web_search` tool ([#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174)) and the lack of `thinking_param_style` declarations for Aliyun Token Plan models ([#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)) are major discussion points. Users demand these changes to unlock paid tiers and full reasoning capabilities.
*   **Real-time Chat WebSockets (Issue #8181):** There is strong interest in replacing hard page refreshes with a session-level persistent event channel to reflect real-time backend chat changes dynamically.
*   **Skill Directory Organization (Issue #8179, PR #8178):** The community is discussing skill installation bugs (specifically binary corruption) and requesting support for nested, categorized skill directories to mirror standard agent layouts.

## 5. Bugs & Stability
Several critical bugs were reported today, though some already have active fix PRs:
*   **Critical: Skill Binary Corruption ([Issue #8179](https://github.com/agentscope-ai/QwenPaw/issues/8179)):** Installing skills from GitHub silently corrupts binary files (images/fonts) by replacing non-UTF-8 bytes with U+FFFD. *No fix PR yet, high priority.*
*   **Critical: Codex Backend Zombie Tasks ([Issue #8173](https://github.com/agentscope-ai/QwenPaw/issues/8173)):** After restarts, the codex-backend connection silently breaks, leaving permanent zombie `running` entries that block all recovery paths except chat/stop. *No fix PR yet.*
*   **High: Silent Startup Failures & Cron Errors ([Issue #8175](https://github.com/agentscope-ai/QwenPaw/issues/8175)):** `ProviderManager.active_model` fails to load at startup due to silent `except Exception: pass` blocks in model settings loading, causing nightly service cron (dream) tasks to fail. *No fix PR yet.*
*   **Medium: Plugin Store "Update All" Limitation ([Issue #8176](https://github.com/agentscope-ai/QwenPaw/issues/8176)):** The bulk update feature only targets official plugins, leaving third-party plugins unupdated. *No fix PR yet.*
*   **Medium: Reverse-Proxy Subpath Deployments ([Issue #8177](https://github.com/agentscope-ai/QwenPaw/issues/8177)):** The console basename is hardcoded to `/console`, blocking deployment under arbitrary subpaths (e.g., `/qwenpaw/`). *No fix PR yet.*
*   **Under Review / Fix in Progress:** 
    *   Tool cancellation reasons and agent loop continuation are being addressed in [PR #8183](https://github.com/agentscope-ai/QwenPaw/pull/8183).
    *   Media URL rejection recovery is handled in [PR #7973](https://github.com/

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑10‑12**

---

### 1. Today's Overview  
ZeroClaw shows continued active development with **14 open issues** and **40 open PRs** updated in the last 24 h. Activity is dominated by tracker/epic work, bug fixes, and feature refinements across memory, runtime, gateway, and channel subsystems. Two pull requests were merged/closed, indicating a modest but steady release cadence. No new releases were tagged today, preserving the current stable baseline.

### 2. Releases  
**None** – the repository did not ship a new version on 2026‑10‑12.

### 3. Project Progress  
- **Merged / Closed PRs (2 total)**  
  - **#11531** – *fix(tunnel): report the URL tailscale actually serves the gateway on* – corrects the tunnel advertisement so operators see the real HTTPS endpoint.  
  - *(Other closed PR not in the top‑20 list – minor housekeeping).*  
- **Open PRs (40+)** continue to address core‑runtime, memory, plugin, and UI concerns. Notable ongoing work includes:  
  - **#11669** – *fix(channels): parse flat inbound Lark post content* – resolves a locale‑parsing mismatch for Feishu inbound posts.  
  - **#11659** – *fix(providers): recognize snake_case context‑window overflow codes* – broadens error‑text matching for LLM provider overflow responses.  
  - **#11660** – *fix(web): keep the chat input focused through a turn* – restores focus after agent replies, improving the web UI UX.  
  - **#11347**, **#11304**, **#11228**, **#11311**, **#11310**, **#11309**, **#11262**, **#11221**, **#11174**, **#11309**, **#11310**, **#11174**, **#11262**, **#11221**, **#11174**, etc. – plugin and CLI enhancements, WASM plugin host packaging, and tool defaults.

### 4. Community Hot Topics  
| Issue | Comments | Priority | Core Need |
|-------|----------|----------|-----------|
| **#8891** – *Persistent memory – wire the curation, relevance, and operability planes to parity* | **10** | Tracker | Multi‑PR epic to bring cross‑session memory parity; critical for long‑term agent coherence. |
| **#7432** – *Runtime and gateway delivery – v0.8.6 and v0.9.0* | **6** | Tracker | Phase‑2 runtime and Phase‑3 gateway separation; essential roadmap for security and performance. |
| **#11594** – *firejail_args is advertised but never applied* | **4** | Bug (S2) | Security hardening – sandbox arguments are documented but not enforced. |
| **#10755** – *Preserve preference provenance in typed rows* | **3** | Bug (S2) | Memory provenance loss during consolidation could affect user intent tracking. |
| **#8409** – *cron shell jobs should support raw stdout output* | **3** | Feature | Enables cleaner machine‑readable cron job output for automation. |

**Underlying needs:** The community is pushing hard on **memory consistency**, **runtime/gateway reliability**, and **sandbox enforcement**, reflecting production‑grade expectations for a multi‑agent platform.

### 5. Bugs & Stability  
| Severity | Issue | Impact |
|----------|-------|--------|
| **S1** | **#11615** – *Telegram send path ignores 429 retry_after* | **Workflow blocked** – flood‑limit handling compounds rate limits, risking message loss. |
| **S2** | **#11594** – *firejail_args not applied* | **Degraded security** – sandbox configuration silently ignored, exposing potential privilege escalation. |
| **S2** | **#11655** – *Core conflict supersede hides unrelated memories* | **Data loss** – unrelated Core memories may be soft‑hidden when vector scores are missing. |
| **S3** | **#11658** – *Web chat input loses focus after reply* | **Minor UX** – forces extra clicks, reduces conversational fluidity. |
| **S3** | **#10755** – *Preference provenance loss* | **Data integrity** – may affect preference tracking and user personalization. |

*No fix PRs have been merged yet for the above bugs (except the closed tunnel fix).*

### 6. Feature Requests & Roadmap Signals  
- **#8409** – Raw stdout for cron shell jobs (enhances automation).  
- **#11667** – Decide on delegate command‑policy inheritance (design question for bounded delegation).  
- **#11668** – Make gateway `MAX_BODY_SIZE` configurable with better error reporting (addresses large‑prompt handling).  
- **#11665** – Better Windows support (installer, Docker, WSL).  
- **#11664** – Level‑5 Dark Factory Workflow (orchestration for agent swarms).  
- **#11662** – Separate channels from Core (modular architecture, reduces overhead/security risk).  
- **#11657** – Configurable target category for turn consolidation (flexible memory placement).  

These are **high‑priority, user‑visible enhancements** that likely feature in v0.8.6 / v0.9.0 roadmaps.

### 7. User Feedback Summary  
- **Pain points:** Users report **sandbox mis‑configuration**, **rate‑limit mishandling**, and **UI focus loss** as friction points in day‑to‑day operation.  
- **Desired capabilities:** Clearer memory provenance, more expressive cron output, robust Windows deployment, and granular control over runtime limits.  
- **Satisfaction signals:** Active contribution (10‑comment tracker, multiple bug reports) suggests a engaged community, but the backlog of unresolved trackers indicates some **perceived stall** in core‑memory and gateway work.

### 8. Backlog Watch (Maintainer‑Level Items)  
| Issue | Age | Status | Why it needs attention |
|-------|-----|--------|------------------------|
| **#8891** – Persistent memory parity tracker | ~3 months | Open, 10 comments | Epic coordinating multiple PRs; risk of fragmentation if not resolved. |
| **#7432** – Runtime & gateway delivery tracker | ~4 months | Open, 6 comments | Central roadmap for v0.8.6/v0.9.0; delays affect release schedule. |
| **#11594** – firejail_args bug | 5 days | Accepted, no fix | Security‑relevant mis‑implementation; fix should be urgent. |
| **#11655** – Memory conflict supersede bug | 5 days | Open, 1 comment | Could cause silent data loss for users without embeddings. |
| **#11615** – Telegram 429 handling | 5 days | Open, 2 comments | Immediate workflow impact for Telegram channel users. |
| **#11658** – Web chat focus bug | 5 days | Open, 0 comments | UX degradation; low‑effort fix available (see #11660). |

These items represent **high‑risk, high‑impact gaps** that merit quick triaging and either PR creation or prioritization for the next release cycle.

--- 

*Prepared from GitHub data as of 2026‑10‑12. All links point to the ZeroClaw repository (`github.com/zeroclaw-labs/zeroclaw`).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*