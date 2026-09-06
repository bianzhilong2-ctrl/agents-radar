# OpenClaw Ecosystem Digest 2026-09-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-06 01:59 UTC

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

# OpenClaw Project Digest - 2026-09-06

## Today's Overview
OpenClaw shows active development with 500 total issues and 500 PRs updated in the past 24 hours, indicating high community engagement and ongoing maintenance. The project released version 2026.9.2 addressing performance concerns with faster, more responsive chat experiences. Current activity balances bug fixes, stability improvements, and feature development across multiple channels including Telegram, Teams, and web interfaces. The codebase appears healthy with ongoing refinement of core functionality and gradual feature additions.

## Releases
**Version 2026.9.2** is the latest release, focusing on performance improvements:
- **Faster, more responsive chat** with direct dashboard lookup and reduced cold-load work
- **Durable history reads** outside the Gateway event loop for better concurrency
- **Optimized session interactions** while processing long transcripts and disk usage

## Project Progress
**Top Merged/Closed PRs** (based on comment activity):
1. **#139534** - Fixed streamed tool-call argument handling to prefer real-time chunks over stale snapshots
2. **#139492** - Added native embed mode and phone-width settings pages for UI flexibility
3. **#139573** - Major refactoring to remove dead code and redundant indirection across core systems
4. **#139495** - Enhanced update recovery with bounded repair mechanisms
5. **#137381** - Preserved long transcript history during `sessions_yield` cleanup operations
6. **#135599** - Introduced plugin management without Gateway restart capability
7. **#139611** - Shared HTTP authority test scenarios to reduce duplication

Key advances include improved session stability, enhanced UI capabilities, and better resource management across the platform.

## Community Hot Topics
**Most Active Issues** (by comment count):

1. **#69208** - Duplicate transcript/context assembly across channels (14 comments)
   - *Pattern*: Cross-channel synchronization bugs affecting multiple messaging platforms
   - *Community Impact*: Users experiencing message duplication across Telegram, Teams, webchat, and other channels

2. **#132762** - Overflow retry ending successfully on tool results without final delivery (13 comments)
   - *Pattern*: Workflow execution failures in multi-stage document processing
   - *Technical Depth*: Beta release blocker classification with specific runtime behavior

3. **#53763** - Built-in headless browser for reliable web access (12 comments)
   - *User Need*: Eliminating dependency on external Chrome instances and third-party APIs
   - *Feature Gap*: Current three-layer approach proven unreliable

4. **#39476** - A2A sessions_send causing duplicate messages between agents (12 comments)
   - *Architecture Issue*: Cross-agent communication protocol flaws
   - *Root Cause*: Independent message posting in requester channels

5. **#97616** - Unreaped hook/tool child processes causing zombie accumulation (11 comments)
   - *System Impact*: Runtime degradation over time
   - *Scope*: Multiple process types including `openclaw-hooks`, `bash`, `codex`

**Underlying Themes**: Cross-cutting concerns around message duplication, process management, and session state consistency across distributed components.

## Bugs & Stability
**Critical Issues (P1 Priority)**:
1. **#110190** - Runtime context carrier positioning causing model confusion (10 comments)
   - **Severity**: P1 - Reasoning token waste and user experience degradation
   - **Impact**: ~15K characters of metadata disrupting model understanding
   - **Fix Status**: No fix PR present yet

2. **#119720** - Synchronous agent persistence blocking Gateway event loop (10 comments)
   - **Severity**: P1 - Event loop blockage at scale
   - **Impact**: Performance degradation under load
   - **Context**: Despite fixes in #133925 and #134062, core issue persists

3. **#72015** - Active-memory blocks replies causing gateway overload (10 comments, 2 upvotes)
   - **Severity**: P1 - Production reliability impact
   - **Affected**: Multi-agent gateways with active-memory plugin enabled
   - **Symptoms**: Slow/unreliable message delivery

4. **#91941** - Feishu streaming card updates causing latency regression (6 comments, 2 upvotes)
   - **Severity**: P1 - Regression in live response performance
   - **Scope**: Long reply processing in Feishu environment
   - **Root**: Full-content update transition from suffix payloads

5. **#91931** - Preseeded SOUL/IDENTITY/USER files triggering premature bootstrap completion (6 comments, 1 upvote)
   - **Severity**: P1 - Incorrect state management
   - **Impact**: Deletion of user-provided BOOTSTRAP.md
   - **Root Cause**: Auto-complete bootstrap logic

**Emerging Patterns**: Context management issues, event loop blocking, and streaming performance problems appear frequently in current bug reports.

## Feature Requests & Roadmap Signals
**High-Significance Enhancements** (P2-P3):

1. **#53763** - Headless browser bundle (12 comments)
   - **Maturity**: Well-defined with clear problem statement
   - **Technical Scope**: First-class browser tool supporting JS-rendered and login-required pages
   - **Readiness**: Ready for implementation pending technical approach

2. **#6599** - Model fallback chain testing command (11 comments, 1 upvote)
   - **User Need**: Verification without actual failures
   - **Implementation**: CLI command to test fallback configuration
   - **Priority**: Operational reliability enhancement

3. **#99583** - Intelligent session auto-titling (8 comments, 2 upvotes)
   - **Feature**: LLM-powered session renaming
   - **Benefits**: Reduced manual intervention, topic-aware naming
   - **Complexity**: Medium - requires existing LLM slug generator integration

4. **#71058** - Multiple Azure/Teams bots support (9 comments, 1 upvote)
   - **Current Limitation**: Single Teams bot identity per instance
   - **User Pain**: Inability to run multiple Teams bots from same gateway
   - **Solution Path**: Configuration object expansion

5. **#14785** - Tool schema token overhead reduction (10 comments)
   - **Quantified Impact**: ~3,500 tokens/session fixed tax
   - **Largest Tools**: Significant overhead from schema-heavy tools
   - **Business Case**: Performance improvement for all sessions

**Roadmap Indicators**: Browser automation, operational tooling, session intelligence, and multi-tenant configuration represent strategic focus areas.

## User Feedback Summary
**Primary Pain Points**:
- **Performance**: Event loop blocking, slow message processing, streaming latency
- **Reliability**: Message duplication, session state corruption, process leaks
- **Configuration Complexity**: Multi-bot setups, fallback chain verification
- **User Experience**: Poor UI scroll behavior, LaTeX rendering limitations

**Satisfaction Signals**:
- 3 issues with positive reactions (👍)
- Feature requests with multiple upvotes indicating strong user demand
- High comment counts on technical issues suggesting engaged user base

**Use Cases Highlighted**:
- Production multi-agent gateway operations
- Document workflow automation
- Cross-platform messaging consistency
- Web content access without external dependencies

**Quality Concerns**: Users report degraded reliability under production load, suggesting stability improvements should be prioritized over new features.

## Backlog Watch
**Critical Unaddressed Issues**:

1. **#110190** - Context carrier positioning (10 comments, 1 upvote) - *Status*: Still open P1
2. **#119720** - Synchronous persistence blocking (10 comments) - *Status*: Still open P1 despite partial fixes
3. **#72015** - Active-memory plugin performance (10 comments, 2 upvotes) - *Status*: Still open P1
4. **#42408** - memory_search quality instability (6 comments, 1 upvote) - *Status*: P2 unresolved since 2026-03-10
5. **#111630** - Context display issues for MiniMax-M3 (6 comments, 1 upvote) - *Status*: Closed but indicates ongoing provider-specific problems

**High-Attention PRs**:
- **#139492** - UI native embed mode - waiting on author
- **#139495** - Update recovery mechanism - proof videos needed
- **#135599** - Plugin management - extensive security boundary requirements
- **#139615** - Service refresh restoration - requires verification

**Maintenance Burndown**: Several P1 issues remain unaddressed despite high community attention and clear reproduction steps, indicating potential resource constraints or technical complexity requiring maintainer intervention.

**Recommendation Priority**: Address context management and event loop blocking issues first, as they affect core platform performance across all channels and use cases.

---

## Cross-Ecosystem Comparison

Here's a thinking process:

1.  **Analyze User Request:**
   - **Role:** Senior analyst of AI agent and personal AI assistant open-source ecosystem
   - **Source:** Multiple GitHub projects' digest summaries from 2026-09-06
   - **Task:** Generate a cross-project comparison report with specific sections
   - **Projects Available:** OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw (User Safety: safe), NullClaw, IronClaw, LobsterAI, TinyClaw, Moltis, CoPaw (QwenPaw), ZeptoClaw, ZeroClaw
   - **Required Sections:**
     1. Ecosystem Overview (3-5 sentences)
     2. Activity Comparison (Table: Issues count, PR count, Release status, health score for each project)
     3. OpenClaw's Position (vs peers, technical approach differences, community size comparison)
     4. Shared Technical Focus Areas (across multiple projects, note which projects, specific needs)
     5. Differentiation Analysis (feature focus, target users, technical architecture)
     6. Community Momentum & Maturity (activity tiers, rapidly iterating vs stabilizing)
     7. Trend Signals (industry trends from community feedback, value for AI agent developers)
   - **Style:** Concise, professional, data-backed, suited for technical decision-makers/developers

2.  **Data Extraction & Organization:**
   I need to extract key metrics from each project's digest. Let me go through each:

   **OpenClaw:**
   - Issues: 500 total, active engagement
   - PRs: 500 updated in last 24h (high velocity)
   - Release: v2026.9.2 (performance focus)
   - Health: Active, some P1 bugs but active maintenance
   - Community: High engagement, ~15K+ users? Not exact but high comment counts

   **NanoBot:**
   - Issues: Not directly stated count, but "24 PRs updated in last 24h (17 open, 7 closed/merged)"
   - PRs: 24 in 24h, 17 open, 7 closed
   - Release: None mentioned/latest not available
   - Health: Strong, active maintenance, security fixes
   - Community: Engaged maintainers

   **Hermes Agent:**
   - Issues: 50 issues and 50 PRs updated in last 24h
   - PRs: 50 updated, 3 merged/closed
   - Release: None
   - Health: High activity, stability concerns (update failures, Windows issues)
   - Community: Engaged, skills index degradation topic huge (163 comments)

   **PicoClaw:**
   - Issues: Minimal activity, 3 PRs merged, 1 issue closed in period
   - PRs: 3 merged
   - Release: None
   - Health: Stable, low velocity, single contributor bottleneck
   - Community: Moderate engagement

   **NanoClaw:** 
   - "User Safety: safe" - no data, probably negligible or placeholder
   - Skip or note as minimal data

   **NullClaw:**
   - "No activity in the last 24 hours." - stagnant

   **IronClaw:**
   - 1 issue updated, 2 PRs updated in last 24h
   - 0 new releases, 0 merged PRs
   - Health: Stable but low-velocity
   - Community: Minimal

   **LobsterAI:**
   - 0 issues updated, 0 PRs merged/closed, 0 new releases
   - 2 open PRs (~5 months old, low engagement)
   - Health: Maintenance-phase, lightly contributed
   - Community: Low velocity

   **TinyClaw:**
   - "No activity in the last 24 hours." - stagnant

   **Moltis:**
   - "No activity in the last 24 hours." - stagnant

   **CoPaw (QwenPaw):**
   - 10 issues, 3 PRs updated in last 24h
   - No new releases
   - Health: Moderate activity, bugs and features in progress
   - Community: Focus on Hub v2.2.0, multi-tenant features

   **ZeptoClaw:**
   - 12 open issues, 2 open PRs updated in last 24h
   - No new releases
   - Health: Active on security/refactoring, P0 critical items
   - Community: Security-focused, developer-centric

   **ZeroClaw:**
   - 42 issues updated in last 24h (34 open, 8 closed)
   - 50 PRs updated in last 24h (44 open, 6 merged/closed)
   - New release: v0.8.5 (454 commits, 73 contributors)
   - Health: High activity, security hardening, infrastructure focus
   - Community: High engagement, RFC-driven architecture

   Let me tabulate Activity Comparison. I need: Issues count, PR count, Release status, health score.
   I'll assign health score based on activity velocity, bug status, release recency, community engagement. Scale maybe 1-10 or categories: High, Medium, Low. I'll use descriptive categories or numerical. The prompt says "health score for each project". I'll make it a 1-10 score or High/Medium/Low. I'll do High/Medium/Low for clarity, or a number with rationale brief. The table should have columns: Project, Issues (active/recent), PRs (recent), Release Status, Health Score. I'll extract counts from digests.

   Let me compile precise data per project from the digests:

   **OpenClaw:**
   - Issues: "500 total issues and 500 PRs updated in the past 24 hours" -> active issues count not explicitly "total" but engagement. I'll use "500+ active" or note the 500 in 24h. The digest says "500 total issues and 500 PRs updated in the past 24 hours" - that's velocity, not total repo size. But it also says "Current activity balances bug fixes..." I'll note issues: high engagement, PRs: 500 in 24h.
   - PRs: 500 in 24h
   - Release: v2026.9.2
   - Health: Very High (active maintenance, frequent releases)

   **NanoBot:**
   - Issues: Not explicit total, but "24 PRs updated in last 24h (17 open, 7 closed/merged)" implies issue activity. I'll infer issue count from hot topics: 5 notable issues discussed. But digest says "Project Progress: Seven PRs were closed/merged today...". I'll use "Active issues: ~several dozen from hot topics". Actually, the digest doesn't give a total issue count. I'll note "High velocity (24 PRs/24h)" and not force a total issue count if not given. For comparison table, I'll put available metrics.
   - PRs: 24 in 24h (17 open, 7 closed)
   - Release: None/latest info not available
   - Health: High (active security fixes, maintainer engagement)

   **Hermes Agent:**
   - Issues: "50 issues and 50 PRs updated in the last 24 hours"
   - PRs: 50 in 24h (3 merged/closed)
   - Release: None
   - Health: High activity but stability concerns; score maybe 7/10 due to update failures

   **PicoClaw:**
   - Issues: Minimal; "three pull requests merged and one issue closed" in the period
   - PRs: 3 merged in period
   - Release: None
   - Health: Low-Medium (stable but slow)

   **NanoClaw:** 
   - Minimal data; I'll note "No data/negligible activity" or skip. The prompt says "The following are 2026-09-06 community digest summaries for each project." and lists them. NanoClaw has "User Safety: safe" - probably a brief note. I'll include it with "No activity data" or similar.

   **NullClaw:** 
   - "No activity in the last 24 hours." -> 0 issues, 0 PRs, no release.

   **IronClaw:**
   - 1 issue updated, 2 PRs updated in last 24h
   - 0 new releases, 0 merged PRs
   - Health: Low (stable but minimal activity)

   **LobsterAI:**
   - 0 issues updated, 0 PRs merged/closed, 0 new releases
   - 2 open PRs ~5 months old
   - Health: Very Low (maintenance-phase)

   **TinyClaw:** 
   - "No activity in the last 24 hours." -> same as NullClaw

   **Moltis:** 
   - "No activity in the last 24 hours." -> same

   **CoPaw (QwenPaw):**
   - 10 issues updated, 3 PRs updated in last 24h
   - No new releases
   - Health: Medium (focused activity, bugs and features)

   **ZeptoClaw:**
   - 12 open issues, 2 open PRs updated in last 24h
   - No new releases
   - Health: Medium-High (security-focused, critical P0 items being addressed)

   **ZeroClaw:**
   - 42 issues updated in last 24h (34 open, 8 closed)
   - 50 PRs updated in last 24h (44 open, 6 merged/closed)
   - Release: v0.8.5 (released)
   - Health: High (major release, high velocity, security hardening)

   Now, for the table, I'll create a concise comparison. Projects with no activity data will have "N/A" or "0". I'll list all 13 projects (OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, TinyClaw, Moltis, CoPaw, ZeptoClaw, ZeroClaw).

   But maybe I should only include those with meaningful data. The prompt says "for each project" in the context, but the comparison report should cover the ecosystem. I'll include all that have data, and note others briefly.

   Let me structure the data extraction carefully.

   **Activity Comparison Table columns:** Project, Recent Issues (24h count/description), Recent PRs (24h count/merged), Release Status, Health Score (1-10 or category).

   I'll assign Health Score based on: activity velocity, release recency, bug criticality, community engagement. I'll use 1-10 where 10 = very active/healthy, 1 = dormant.

   Let score:
   - OpenClaw: 9/10 (500 PRs/24h, recent release, active bugs but maintained)
   - ZeroClaw: 8/10 (50 PRs/24h, v0.8.5 released, high engagement)
   - Hermes Agent: 7/10 (50/24h high activity but significant stability issues)
   - ZeptoClaw: 7/10 (security focus, P0 fixes, active PRs)
   - NanoBot: 7/10 (24 PRs/24h, strong security fixes, active maintenance)
   - CoPaw: 6/10 (moderate activity, bugs and features in progress)
   - IronClaw: 3/10 (very low velocity)
   - PicoClaw: 5/10 (stable but slow, single contributor)
   - NanoClaw/Moltis/TinyClaw/NullClaw/LobsterAI: 2/10 or 1/10 (minimal/no activity)

   Now, section by section:

   **1. Ecosystem Overview:** 3-5 sentences on overall landscape. I'll synthesize from the data: diverse projects, varying maturity, security focus, infrastructure hardening, multi-agent gateways, session management, platform integration.

   **2. Activity Comparison:** Table. I'll format as markdown table. Projects: OpenClaw, ZeroClaw, Hermes Agent, NanoBot, CoPaw, ZeptoClaw, PicoClaw, IronClaw, NanoClaw, NullClaw, LobsterAI, Moltis, TinyClaw. I'll include counts.

   **3. OpenClaw's Position:** Advantages vs peers, technical approach differences, community size comparison. From OpenClaw digest: 500 PRs/24h, performance focus, cross-platform (Telegram, Teams, web), large issue/PR volume, P1 bugs but active. Compared to others: highest velocity, broader channel support, more feature-complete but heavier. Technical approach: performance-first, session stability, plugin management. Community size: implied large from comment counts (14+ comment issues, 15K chars metadata etc.).

   **4. Shared Technical Focus Areas:** Requirements across multiple projects. I'll identify: session management/stability, security/sandbox policies, provider timeouts/fallback, event loop blocking, multi-tenant/hub features, plugin/WASM architectures, credential/boundary hardening, cross-platform compatibility. Note which projects have each.

   **5. Differentiation Analysis:** Feature focus (e.g., OpenClaw: chat performance & multi-channel; ZeroClaw: security hardening & principal sessions; Hermes Agent: CLI/desktop integration; ZeptoClaw: secure subprocess control; CoPaw: skill ecosystems & multi-tenant hub; NanoBot: provider resilience & session security). Target users: individual agents vs production gateways vs desktop clients vs secure automation. Technical architecture: gateway-centric (OpenClaw, ZeroClaw), plugin-extension (NanoBot, PicoClaw), desktop-integrated (Hermes, PicoClaw), security-first subprocess (ZeptoClaw), skill-based (CoPaw).

   **6. Community Momentum & Maturity:** Activity tiers. Rapidly iterating: OpenClaw, ZeroClaw, Hermes Agent (high velocity, frequent changes). Stabilizing: PicoClaw, IronClaw, CoPaw (moderate, focused). Stagnant: NullClaw, TinyClaw, Moltis, LobsterAI (low/No activity). I'll categorize.

   **7. Trend Signals:** Industry trends from community feedback: security hardening as priority (ZeroClaw, ZeptoClaw, OpenClaw P1 bugs about context carriers, event loop blocking); session state consistency across channels (OpenClaw #69208, NanoBot #5633); provider fallback/resilience (NanoBot #5675, ZeroClaw likely); event loop blocking under load (OpenClaw #119720, NanoBot #5580); multi-tenant/hub emergence (CoPaw #7318, OpenClaw cross-channel); skill/plugin ecosystems (CoPaw PRs, NanoBot PRs); cross-platform stability (Hermes Agent Windows issues, IronClaw pairing UX); TTS/voice and rendering (Hermes, ZeroClaw maybe).

   Now, I need to ensure all data is accurate to the digests. I'll double-check counts.

   Let me re-verify key metrics from each digest:

   **OpenClaw:** 
   - "500 total issues and 500 PRs updated in the past 24 hours" -> yes, velocity.
   - Release v2026.9.2
   - P1 issues: #110190, #119720, #72015, #91941, #91931
   - Community hot topics with comments: #69208 (14), #132762 (13), #53763 (12), #39476 (12), #97616 (11)
   - So issues count in repo not given total, but engagement high.

   **NanoBot:**
   - "24 PRs updated in the last 24 hours (17 open, 7 closed/merged)"
   - No new releases
   - P1 issues: #5674/#5675, #5633, #5580, #5589
   - PRs merged/closed today: 7 (from "Seven PRs were closed/merged today")

   **Hermes Agent:**
   - "50 issues and 50 PRs updated in the last 24 hours"
   - 3 PRs merged/closed today
   - No new releases
   - P1 issues: #98022 (fleet restart), plus list

   **PicoClaw:**
   - "three pull requests merged and one issue closed"
   - No new releases
   - Issue #3287 active

   **NanoClaw:** "User Safety: safe" - I'll treat as no activity data, maybe skip or note.

   **NullClaw:** "No activity in the last 24 hours."

   **IronClaw:** "1 issue updated and 2 PRs updated in the last 24h, with 0 new releases and 0 merged PRs."

   **LobsterAI:** "zero issues updated, zero PRs merged/closed, and zero new releases. Only two existing PRs (#1069, #1070) received touch-ups (likely stale-bot or author metadata sync)."

   **TinyClaw:** "No activity in the last 24 hours."

   **Moltis:** "No activity in the last 24 hours."

   **CoPaw (QwenPaw):** "10 issues and 3 pull requests updated in the last 24 hours. No new releases were published."
   - PRs: #7509, #7569, #6874 updated
   - Bugs: #7576, #7574, #7575, #7572, #7571

   **ZeptoClaw:** "12

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-06

## 1. Today's Overview

NanoBot shows **high development velocity** with 24 PRs updated in the last 24 hours (17 open, 7 closed/merged) and no new releases. The project is actively addressing critical security and stability issues, particularly around session handling and provider timeouts. The community is focusing on hardening the agent's resilience to provider failures and improving WebUI/CLI developer experience. Overall health appears strong with maintainers actively reviewing and merging PRs.

## 2. Releases

**No new releases today.** The latest version information is not available in the provided data.

## 3. Project Progress

Seven PRs were closed/merged today, advancing several areas:

| PR | Title | Impact |
|---|---|---|
| [#5670](https://github.com/HKUDS/nanobot/pull/5670) | refactor(events): unify scoped runtime notifications across clients | Unified event delivery architecture using MessageBus |
| [#5671](https://github.com/HKUDS/nanobot/pull/5671) | fix(cli): skip WebUI bundle check in dev mode | Improved DX for developers using `--dev` mode |
| [#5669](https://github.com/HKUDS/nanobot/pull/5669) | docs: explain derived context budget | Documentation for context window configuration |
| [#5672](https://github.com/HKUDS/nanobot/pull/5672) | test: remove obsolete nonexistence checks | Test maintenance, removed deprecated assertions |

## 4. Community Hot Topics

**Most notable active discussions:**

- **[#5675](https://github.com/HKUDS/nanobot/pull/5675)** — `fix(providers): allow model failover after runner deadlines` — Fixes the critical timeout handling bug. Author `be-student` addresses a scenario where a hanging primary model exhausts the runner's deadline before `FallbackProvider` can respond, preventing fallback attempts entirely.

- **[#5633](https://github.com/HKUDS/nanobot/pull/5633)** — `fix(session): reject session keys with path traversal components` (P1) — Security fix preventing path traversal attacks via malicious session IDs like `../../etc/passwd`.

- **[#5580](https://github.com/HKUDS/nanobot/pull/5580)** — `fix(session): move persistence off event loop` (P1) — Performance fix addressing event loop blocking caused by slow session storage or file-lock contention.

**Underlying needs:** Users need robust agent reliability when providers fail, secure session handling, and responsive UI performance even under load.

## 5. Bugs & Stability

**Active bug reports:**

| Priority | Issue/PR | Description | Fix Available? |
|----------|----------|-------------|----------------|
| **P1** | [#5674](https://github.com/HKUDS/nanobot/issues/5674) / [#5675](https://github.com/HKUDS/nanobot/pull/5675) | Agent stops when Nvidia NIM returns specific timeout errors; treated as model output instead of errors | Yes (#5675) |
| **P1** | [#5633](https://github.com/HKUDS/nanobot/pull/5633) | Path traversal vulnerability in session keys | Yes |
| **P1** | [#5580](https://github.com/HKUDS/nanobot/pull/5580) | Session persistence blocks event loop | Yes |
| **P1** | [#5589](https://github.com/HKUDS/nanobot/pull/5589) | Discarded sessions can revive unexpectedly | Open |
| **P2** | [#5664](https://github.com/HKUDS/nanobot/pull/5664) | Unbounded idle summary cache growth | Open |
| **P2** | [#5630](https://github.com/HKUDS/nanobot/pull/5630) | Dream memory files lack size guardrails (regression) | Open |

**Regression note:** [#5630](https://github.com/HKUDS/nanobot/pull/5630) is a regression from PR #5622 that fixed Dream system-prompt duplication but removed the file size cap.

## 6. Feature Requests & Roadmap Signals

**Active feature PRs suggesting near-term roadmap direction:**

| PR | Feature | Priority | Notable |
|---|---|---|---|
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | Heartbeat model override for cost reduction | P2 | Allows cheaper models for heartbeat/notification evaluation |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | Isolated session config for shared sessions | P2 | Opt-in to access conversation context in heartbeat execution |
| [#5652](https://github.com/HKUDS/nanobot/pull/5652) | Signed direct delivery webhook | P2, security | Deterministic CI/monitoring notifications bypassing agent loop |
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) | Per-spawn model presets with allowlist | conflict | Alternative implementation for spawn presets feature |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) | Preserve MCP Apps result metadata | conflict | Rich tool results without polluting model context |

**Predicted next version focus:** Provider resilience (fallback improvements), session security hardening, and developer experience enhancements (WebUI, CLI).

## 7. User Feedback Summary

**Pain points emerging from PR descriptions:**

- **Provider reliability:** Timeout errors from Nvidia NIM break agent workflow (#5674)
- **Performance under load:** Event loop blocking from session I/O affects unrelated conversations (#5580)
- **Memory management:** Unbounded caches for idle summaries and Dream memory files (#5664, #5630)
- **Security concerns:** Path traversal in session keys is a critical gap (#5633)
- **DX improvements:** Developers want better dev-mode WebUI behavior (#5671)

**Satisfaction signals:** Active maintenance, rapid bug response (fix PR #5675 immediately after issue #5674), and documentation improvements suggest engaged maintainers.

## 8. Backlog Watch

**Important items needing maintainer attention:**

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | ~2.5 months | Open (P2) | Heartbeat model override feature stalled |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | ~2.5 months | Open (P2) | Isolated session feature stalled |
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) | ~10 days | Open (conflict) | Spawn presets feature has merge conflict |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) | ~24 days | Open (conflict) | MCP metadata feature has merge conflict |
| [#5471](https://github.com/HKUDS/nanobot/pull/5471) | ~16 days | Open | Ephemeral runs not preserving session state |
| [#5457](https://github.com/HKUDS/nanobot/pull/5457) | ~17 days | Open (conflict) | Channel dispatcher exception boundary fix |

**Recommendation:** Maintainers should prioritize resolving conflicts on [#5561](https://github.com/HKUDS/nanobot/pull/5561) and [#5386](https://github.com/HKUDS/nanobot/pull/5386), and review long-pending feature PRs [#4549](https://github.com/HKUDS/nanobot/pull/4549) and [#4551](https://github.com/HKUDS/nanobot/pull/4551) to provide community feedback.

---

*Digest generated for HKUDS/nanobot on 2026-09-06*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-06

## 1. Today's Overview

Hermes Agent maintains high activity with **50 issues and 50 PRs updated in the last 24 hours**, though **no new releases** were published. The project is actively addressing stability concerns, with 3 PRs merged/closed today. Notable focus areas include CLI update reliability, session state management, and cross-platform compatibility (particularly Windows and desktop components). The skills index is currently degraded, and the community is engaged through multiple high-comment threads indicating ongoing refinement of core workflows.

---

## 2. Releases

**No new releases today.** The project continues to work on fixes and features without tagging a new version.

---

## 3. Project Progress

### Merged/Closed PRs (3)

| PR | Title | Component | Status |
|----|-------|-----------|--------|
| [#103984](https://github.com/NousResearch/hermes-agent/pull/103984) | Default busy input mode to queue | CLI, TUI, Gateway | ✅ CLOSED |
| — | — | — | — |

### Key Open PRs Advancing Today

- **[#103983](https://github.com/NousResearch/hermes-agent/pull/103983)** — `fix(agent): retry incomplete tool calls before any batch executes` — Addresses edge cases where non-streaming providers return partial tool arguments; also validates local `execute_code` syntax before batch execution.
- **[#103976](https://github.com/NousResearch/hermes-agent/pull/103976)** — `fix(tools/terminal): reap terminal work when session kernels disconnect` — Prevents orphaned shell, test runner, and TypeScript compiler processes after kernel death.
- **[#103982](https://github.com/NousResearch/hermes-agent/pull/103982)** — `fix(slack): salvage chunks-only native task-card updates` — Repairs payload for Slack task-card updates when gateway supplies both `chunks` and `markdown_text`.
- **[#103977](https://github.com/NousResearch/hermes-agent/pull/103977)** — `feat(email): opt-in review-first outbound policy` — Adds policy requiring human approval before auto-replies leave business mailboxes.
- **[#103980](https://github.com/NousResearch/hermes-agent/pull/103980)** — `fix(feishu): bump lark-oapi pin to 1.7.3` — Fixes websocket event push failures in Feishu integration.
- **[#94572](https://github.com/NousResearch/hermes-agent/pull/94572)** — `fix(tui/desktop): fix session-scoped UI actions after runtime remint` — Preserves approval response resolution and stored-session compatibility.
- **[#102047](https://github.com/NousResearch/hermes-agent/pull/102047)** — `fix(windows): hide nvidia-smi consoles on hardware polls` — Suppresses popup consoles when Desktop polls GPU status every 5 seconds.
- **[#103970](https://github.com/NousResearch/hermes-agent/pull/103970)** — `fix(cli): escape Rich markup in resumed session title` — Prevents crash when session titles contain markup characters like `[/plan]`.
- **[#103972](https://github.com/NousResearch/hermes-agent/pull/103972)** — `fix(cli): silence stderr without disabling file logging in oneshot` — Preserves file logging during `-z` mode.
- **[#103971](https://github.com/NousResearch/hermes-agent/pull/103971)** — `fix(agent): default curator.prune_builtins to false` — Prevents automatic archival of bundled Hermes skills without user opt-in.

---

## 4. Community Hot Topics

### Most Active Issues by Comments

| Issue | Title | Comments | Component | Priority |
|-------|-------|----------|-----------|----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale or degraded | **163** | Skills Hub | P3 |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats should keep working after Desktop closes | **23** | Gateway, Desktop | P2 |
| [#26058](https://github.com/NousResearch/hermes-agent/issues/26058) | auto_thread disabled for free_response_channels breaks legitimate use case | **10** | Gateway, Discord | P2 |
| [#98022](https://github.com/NousResearch/hermes-agent/issues/98022) | hermes update catch-up fleet restart re-fires on every run | **10** | CLI | P1 |

### Analysis

- **Skills Index Degradation (#66616):** The Skills Hub at `/docs/skills` depends on a unified index (`/docs/api/skills-index.json`) that is currently 29.8 hours old, exceeding the 26-hour limit. This is the most actively discussed topic, reflecting community reliance on the Skills ecosystem. The automated freshness probe consistently reports degradation.

- **Bot Group Chats Persistence (#97681):** High engagement indicates strong user interest in multi-instance deployment scenarios (laptop, homelab, VPS) where bots should maintain group chat functionality independently of the originating desktop session. The foundation (gateway-owned authority, scoped transport) is on `main`, awaiting final production connection.

- **Discord auto_thread Regression (#26058):** 5 👍 reactions indicate user impact. Channels in `free_response_channels` bypass auto-thread creation even when appropriate, breaking workflow expectations.

- **Fleet Restart Loop (#98022):** The P1 severity and active discussion reflect critical CLI stability concerns during updates.

---

## 5. Bugs & Stability

### P1 — Critical (Immediate Attention)

| Issue | Title | Fix PR | Platform |
|-------|-------|--------|----------|
| [#98022](https://github.com/NousResearch/hermes-agent/issues/98022) | hermes update catch-up fleet restart re-fires forever | — | Cross-platform |

### P2 — High Severity

| Issue | Title | Fix PR | Component |
|-------|-------|--------|-----------|
| [#90495](https://github.com/NousResearch/hermes-agent/issues/90495) | ZIP fallback deletes Desktop app and forgets installation | — | CLI, Desktop |
| [#103900](https://github.com/NousResearch/hermes-agent/issues/103900) | Pinned sessions are local-only, diverge from native Hermes | — | Desktop, Sessions |
| [#103949](https://github.com/NousResearch/hermes-agent/issues/103949) | local_runtime returns 'cuda' on Linux+NVIDIA but no Linux CUDA prebuilt | — | CLI, Backend |
| [#103978](https://github.com/NousResearch/hermes-agent/issues/103978) | Claude Code OAuth auto-discovery logs out Claude CLI (ToS conflict) | — | Agent, Auth |
| [#97394](https://github.com/NousResearch/hermes-agent/issues/97394) | Desktop hand-off watchdog cancels healthy Windows updates | — | CLI, Windows |
| [#91212](https://github.com/NousResearch/hermes-agent/issues/91212) | Root owned file under ~/.hermes/ on non-root installs | — | Gateway, Config |
| [#102193](https://github.com/NousResearch/hermes-agent/issues/102193) | hermes update creates root owned files, breaking functionality | — | CLI, Security |
| [#102172](https://github.com/NousResearch/hermes-agent/issues/102172) | hermes update --backup FAILS with insufficient permission | — | CLI |

### P3 — Medium Severity (Notable)

| Issue | Title | Notes |
|-------|-------|-------|
| [#90782](https://github.com/NousResearch/hermes-agent/issues/90782) | Terminal env snapshot leaks HERMES_DELEGATED_CHILD_CONTEXT | Breaks kanban CLI in parent |
| [#82912](https://github.com/NousResearch/hermes-agent/issues/82912) | Cron jobs with web+file toolsets silently lose web toolset | — |
| [#103973](https://github.com/NousResearch/hermes-agent/issues/103973) | browser_exec UnicodeDecodeError on CJK-locale Windows | Encoding bug |
| [#103893](https://github.com/NousResearch/hermes-agent/issues/103893) | Group-chat hold directive misclassifies German filler words | — |
| [#83670](https://github.com/NousResearch/hermes-agent/issues/83670) | Hermes release/version tags don't correspond to git tags | Version confusion |

**Stability Summary:** The most concerning pattern is the **persistent CLI update failures** (#98022, #90495, #102193, #102172, #91212), with repeated reports of root-owned files and failed backups indicating systemic issues in the update pipeline. Windows integration (#97394, #103973) shows fragility in background process handling.

---

## 6. Feature Requests & Roadmap Signals

### Most Requested Features (by 👍 or engagement)

| Feature | Issue/PR | 👍 | Component | Likelihood of Near-Term Inclusion |
|---------|----------|----|-----------|-----------------------------------|
| Standalone Desktop installer (lite client) | [#58799](https://github.com/NousResearch/hermes-agent/issues/58799) | **4** | Desktop | Medium — clear user need, technical complexity |
| Colorblind-friendly diff colors | [#87773](https://github.com/NousResearch/hermes-agent/pull/87773) | — | Desktop | **High — PR open** |
| delegate_task simplified structured-output contract | [#103917](https://github.com/NousResearch/hermes-agent/issues/103917) | — | Agent | Medium — API enhancement |
| Realtime off-device voice (server-owned WS) | [#103279](https://github.com/NousResearch/hermes-agent/pull/103279) | — | Gateway, TTS | Medium — active development |
| Opt-in review-first email policy | [#103977](https://github.com/NousResearch/hermes-agent/pull/103977) | — | Email | **High — PR open** |
| Run npm-check AND npm outdated before releases | [#102563](https://github.com/NousResearch/hermes-agent/issues/102563) | — | CI, Security | Low — process change requested |

### Analysis

The **standalone Desktop installer** (#58799) represents a significant user experience improvement, separating the client UI from the bundled agent runtime. This would appeal to users wanting a lightweight remote interface. The **colorblind accessibility** feature and **email review-first policy** are closest to merge, with active PRs.

---

## 7. User Feedback Summary

### Pain Points Reported

1. **Update System Failures:** Users report repeated failures during `hermes update`, including fleet restart loops, deleted Desktop installations, and failed backups. The root-owned file issue persists despite multiple reports.

2. **Windows Integration Roughness:** Desktop updates on Windows fail due to watchdog timeout (missing `logs/update.log`), nvidia-smi popup consoles, and Unicode handling issues under CJK locales.

3. **Session State Inconsistencies:** Pinned sessions, session titles with markup characters, and session-scoped UI actions show gaps between Desktop and native Hermes behavior.

4. **Dependency Issues:** npm vulnerabilities in browser tools, web workspace, and ui-tui remain unresolved. Outdated packages (some with security issues) are a recurring concern.

5. **OAuth Token Handling:** Claude Code OAuth auto-discovery conflicts with Anthropic's ToS, and the single-use refresh token behavior logs out the CLI.

### Positive Signals

- **Group Chat Resilience Interest:** Strong engagement (#97681) indicates users value multi-instance deployment flexibility.
- **Accessibility Improvements:** Colorblind mode feature and keyboard focus fixes show attention to inclusive design.
- **Internationalization:** Indonesian documentation addition (#92192) demonstrates expanding global reach.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues Needing Maintainer Attention

| Issue | Age | Title | Priority | Status |
|-------|-----|-------|----------|--------|
| [#83670](https://github.com/NousResearch/hermes-agent/issues/83670) | ~1 month | Hermes release/version tags don't correspond to git tags | P3 | Open, no response |
| [#88201](https://github.com/NousResearch/hermes-agent/issues/88201) | ~3 weeks | bash completion goes to wrong location | P2 | Open |
| [#79649](https://github.com/NousResearch/hermes-agent/issues/79649) | ~1 month | web workspace, agent-browser, ui-tui have npm vulnerabilities | P2 | Open |
| [#102563](https://github.com/NousResearch/hermes-agent/issues/102563) | 2 days | Run npm-check AND npm outdated before every release | P3 | Open, low engagement |
| [#94345](https://github.com/NousResearch/hermes-agent/issues/94345) | ~2 weeks | Broken line wrapping in 'hermes help' | P3 | Open |

### Items with Multiple Reports (Cumulative)

- **Root-owned file issue** (affects updates, backups, installs): [#91212](https://github.com/NousResearch/hermes-agent/issues/91212), [#102193](https://github.com/NousResearch/hermes-agent/issues/102193), [#102172](https://github.com/NousResearch/hermes-agent/issues/102172) — multiple reports over months
- **Windows update failures**: [#97394](https://github.com/NousResearch/hermes-agent/issues/97394), [#102047](https://github.com/NousResearch/hermes-agent/pull/102047) (partial fix)

**Backlog Summary:** The update subsystem carries the most technical debt, with root-owned file issues spanning multiple release cycles. Version/tag

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-06

---

## 1. Today's Overview  
The PicoClaw project showed minimal but steady development activity on September 6, 2026, with three pull requests merged and one issue closed. No new releases were published, indicating a focus on maintenance and stabilization rather than feature delivery. The project remains under active development, though community engagement appears moderate, with only two issues updated within the past day. Notably, all recent PR activity originated from a single contributor (`xuwei-xy`), suggesting potential bottlenecks in code review bandwidth or contributor diversity. Overall health looks stable, but growth momentum may be slowing slightly.

---

## 2. Releases  
**No new releases detected.**  
There are no new versions available for this date. Refer to [releases page](https://github.com/sipeed/picoclaw/releases) for historical version details.

---

## 3. Project Progress  
Three closed pull requests indicate consolidation of fixes:

- **[PR #1559 – Merge Fixes from Multiple PRs](https://github.com/sipeed/picoclaw/pull/1559)**  
  Consolidates patches from earlier contributions (e.g., #1327, #1319), likely addressing minor bugs or dependency updates.

- **[PR #1545 – Batch Fix Integration](https://github.com/sipeed/picoclaw/pull/1545)**  
  Combines several older fixes across the codebase; possibly improves stability without introducing major changes.

- **[PR #1555 – Additional Fix Aggregation](https://github.com/sipeed/picoclaw/pull/1555)**  
  Continues integration of legacy improvements, signaling ongoing technical debt cleanup.

These merges suggest continued effort toward codebase refinement ahead of future enhancements or releases.

---

## 4. Community Hot Topics  
### 🔥 Issue #3287: Better Long Message Support in IRC  
[Issue Link](https://github.com/sipeed/picoclaw/issues/3287)  
- **Comments:** 10  
- **Reactions:** 0  
This feature request highlights user demand for improved handling of long-form messages via IRCv3 protocols. It reflects real-world usage where chat platforms often fragment large texts into multiple parts. This could impact how PicoClaw interprets incoming data streams and maintains message coherence.

> 🧠 Underlying Need: A more robust parsing mechanism for multi-line or long messages to ensure seamless AI interaction over text-based communication channels.

---

## 5. Bugs & Stability  
No new bug reports surfaced today. One stale feature request was auto-closed due to inactivity:

- **[Issue #3342 – Optional Post-Turn Queueing Mode](https://github.com/sipeed/picoclaw/issues/3342)** *(Closed as Stale)*  
While not a direct bug, its closure implies that some advanced steering behaviors aren't prioritized currently, possibly due to architectural constraints or low user adoption at present.

✅ All current known issues appear resolved or deprioritized.

---

## 6. Feature Requests & Roadmap Signals  
Two key feature requests remain open or noted:

- **Long Message Handling in IRC (#3287)** — High relevance given increasing adoption of richer messaging patterns in agentic workflows.
- **Post-Turn Steering Mode (#3342)** — While marked stale, it reveals interest in configurable interrupt policies during task execution. Resurfacing could align with roadmap planning.

🚩 These topics may influence next-gen behavior tuning and protocol compatibility enhancements.

---

## 7. User Feedback Summary  
Users express clear expectations around:

- Seamless handling of extended messages in chat environments.
- More flexible control over agent interruptions and session flow.

No negative sentiment or dissatisfaction surfaced from comments or reactions during this period.

🗣️ Satisfaction Level: Neutral-to-positive among engaged users; deeper discussion needed around messaging fidelity.

---

## 8. Backlog Watch  
Several older PRs still await final merge or closure beyond their last update timestamps:

| PR | Title | Status |
|----|-------|--------|
| [#1327](https://github.com/sipeed/picoclaw/pull/1327) | Original PR | Integrated via #1559 |
| [#1319](https://github.com/sipeed/picoclaw/pull/1319) | Various Fixes | Integrated via #1559 |
| [#1500](https://github.com/sipeed/picoclaw/pull/1500) | Legacy Improvements | Integrated via #1545 |

⚠️ *Action Required:* Maintainers should prioritize reviewing remaining standalone contributions to reduce fragmentation and clarify ownership boundaries in pre-merge discussions.

--- 

**Last Updated:** September 6, 2026 @ 09:00 UTC  
**Source:** [https://github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

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

# IronClaw Project Digest — 2026-09-06

**Repository:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Today's Overview
Activity is very quiet — 1 issue updated and 2 PRs updated in the last 24h, with 0 new releases and 0 merged PRs. The single issue is a UX bug around pairing/connection state messaging, and both open PRs are contributor/core-driven (one feature, one CI chore). Project health looks stable but low-velocity; no regressions or critical incidents reported.

## 2. Releases
**None.** No new version tagged in the period.

## 3. Project Progress
No PRs were merged or closed today. Two open PRs represent work in progress:
- **#8075** — Embedded Pi sandbox default-loop feature (stacked on #7908, base #7903), intended for benchmark scenarios. Still open and gated on its base PR.
- **#7988** — Nightly codebase knowledge-graph refresh (CI/infrastructure). Still open, awaiting review/merge.

## 4. Community Hot Topics
- **[Issue #8074](https://github.com/nearai/ironclaw/issues/8074)** — 1 comment, 0 👍. A paired user in a disconnected shared channel receives the *unpaired*-actor `connect_required` copy instead of a channel-not-connected message. Underlying need: correct contextual messaging per actor pairing state — users expect the UI to distinguish "my channel isn't connected" from "my account isn't paired."

## 5. Bugs & Stability
| # | Severity | Summary |
|---|----------|---------|
| [8074](https://github.com/nearai/ironclaw/issues/8074) | Medium | Wrong notice copy shown to paired users in disconnected shared channels — UX confusion, potential misconfiguration follow-through. No fix PR observed. |

## 6. Feature Requests & Roadmap Signals
- **#8075** signals continued investment in the embedded Pi/sandbox path, making the startup loop the default for benchmarking. Predicts tighter CI/benchmark integration in a future release once stacked PRs land.

## 7. User Feedback Summary
- **Pain point:** Contextual messaging fails when pairing state and channel connection state diverge (#8074) — users get instructions that don't apply to their situation.
- **Use case:** Benchmark-driven embedded Pi usage (#8075) suggests a power-user / evaluator segment wants out-of-the-box loop behavior without manual config.

## 8. Backlog Watch
- **[PR #7988](https://github.com/nearai/ironclaw/pull/7988)** — Open since 2026-08-29 (8 days), auto-generated by CI `Codebase Graph Refresh`. Low risk, routine merge; needs maintainer attention to unblock the nightly workflow cycle.
- **[PR #8075](https://github.com/nearai/ironclaw/pull/8075)** — Depends on #7908 and base #7903; stacked review could stall if base is delayed.

---

*Assessment: Low churn, no critical issues, one UX bug to triage, two PRs needing review/merge to keep the pipeline moving.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-06

**Repo:** `netease-youdao/LobsterAI` | **Period:** Last 24h

---

### 1. Today's Overview
September 6 was a quiet day: zero issues updated, zero PRs merged/closed, and zero new releases. Only two existing PRs (#1069, #1070) received touch-ups (likely stale-bot or author metadata sync). The project shows minimal recent velocity — consistent with a maintenance-phase or lightly-contributed open-source effort. No regression signals, but also no forward momentum visible in this window.

### 2. Releases
*None.* No new versions published; no changelog entries to report.

### 3. Project Progress
No PRs merged or closed today. Two open PRs represent the most substantive work:
- **#1069** — Refactors the 2,100+ line `CoworkSessionDetail.tsx` into typed sub-modules to improve render performance and testability.
- **#1070** — Adds per-session MCP server toggle with persistence and OpenClaw-level request interception.

Neither has progressed to merge yet.

### 4. Community Hot Topics
No active Issues or PRs with comments/reactions in the last 24h. Both tracked PRs have `undefined` comments and 0 👍 despite being open since March 2026 — indicating low community engagement rather than contentious debate.

### 5. Bugs & Stability
No bug reports, crashes, or regressions filed today. No fix-PRs opened.

### 6. Feature Requests & Roadmap Signals
- **Per-session MCP control** (PR #1070) is the strongest signal: users want granular MCP server management per conversation, not just a global switch. If merged, this likely lands in a desktop-agent-centric release.
- **Component refactor** (PR #1069) signals accumulated technical debt in the core chat UI; expect follow-up splits if this pattern is accepted.

### 7. User Feedback Summary
No direct user feedback captured in the last 24h. The stale tags on both PRs suggest the maintainer or original authors may be the only active contributors.

### 8. Backlog Watch
Both PRs require maintainer attention — they've been open ~5 months with zero merges and zero comments:
- 🔗 [PR #1069 — Refactor CoworkSessionDetail](https://github.com/netease-youdao/LobsterAI/pull/1069)
- 🔗 [PR #1070 — Per-session MCP switch](https://github.com/netease-youdao/LobsterAI/pull/1070)

**Recommendation:** Either merge (after review) or close with a reason to clear stale PR debt and signal roadmap direction to contributors.

---

*Generated from GitHub activity snapshot; links point to `github.com/netease-youdao/LobsterAI`.*

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


# CoPaw (QwenPaw) Project Digest — 2026-09-06

## 1. Today's Overview

CoPaw (QwenPaw) shows **moderate development activity** on September 6, 2026, with 10 issues and 3 pull requests updated in the last 24 hours. No new releases were published. The community is actively discussing multi-tenant deployment features for the upcoming QwenPaw Hub v2.2.0. Three bugs were closed, but several new issues emerged, including a notable regression affecting context size handling across all models and image generation skill API issues. No PRs were merged today, with three open PRs under active development.

---

## 2. Releases

**No new releases today.**

The project remains on v2.2.0. Users on v2.1.0 through v2.2.0 are affected by bug [#7576](#7576) (hardcoded 32768 context size fallback).

---

## 3. Project Progress

### Pull Requests Updated (Last 24h)

| PR | Title | Status | Author |
|----|-------|--------|--------|
| [#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509) | feat(skill): Update make-skill to v2 | Ready for Merge | Leirunlin |
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | feat(modes): add Advisor Mode | Open | AntiQuality |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | feat(mcp): add configurable tool call timeout | Under Review | AaronZ345 |

**No PRs were merged today.**

- **PR #7509**: Introduces Make Skill v2 with an approval-driven, script-based draft-then-publish workflow for creating reusable workspace Skills.
- **PR #7569**: Adds Advisor Mode—a loop mode pairing a stronger "advisor" model with a cheaper "worker" agent for improved task collaboration.
- **PR #6874**: Implements configurable per-client MCP tool-call timeout (default 300s), pending review since August 10.

---

## 4. Community Hot Topics

### Most Active Discussions

**#7318** — **[QwenPaw Hub multi-tenant edition coming in 2.2.0](https://github.com/agentscope-ai/QwenPaw/issues/7318)**  
- **Activity**: 23 comments, 3 👍
- **Status**: Open
- **Summary**: Community discussion on QwenPaw Hub features for team use cases. Users have repeatedly requested better multi-tenant deployment options.
- **Underlying Need**: Organizations want to run QwenPaw collaboratively with shared skills, admin management, and multi-user access—signals a strategic shift from personal assistant to team tool.

**#7474** — **[Custom provider loading failure](https://github.com/agentscope-ai/QwenPaw/issues/7474)** *(Closed)*  
- **Activity**: 5 comments
- **Summary**: After merging PR #7337 (ModelInfo.max_tokens → max_output_length migration), custom providers fail to load with configuration errors.
- **Resolution**: Issue closed—users affected should verify provider JSON configs use `max_output_length` instead of `max_tokens`.

**#7557** — **[Version & dependency metadata for skills](https://github.com/agentscope-ai/QwenPaw/issues/7557)**  
- **Activity**: 2 comments
- **Summary**: Request to add versioning to skills to manage deployments across multiple workspaces and prevent revision drift.
- **Underlying Need**: Fleet management—users running 9+ agents need to track which skill revision each workspace is using.

---

## 5. Bugs & Stability

### Reported Bugs (Ranked by Potential Impact)

| # | Issue | Severity | Status | Fix PR |
|---|-------|----------|--------|--------|
| **#7576** | Hardcoded 32768 context_size fallback in RetryChatModel affects all models | **High** | Open | None |
| #7574 | img-gen skill missing `model` field in request body (HTTP 503 fallback to dall-e-2) | Medium | Closed | None |
| #7575 | img-gen skill `edit()` sends `response_format` causing HTTP 400 | Medium | Closed | None |
| #7572 | Tool coordinator swallows exception stack traces | Medium | Open | None |
| #7571 | Agent memory issues—cannot retain path/directory instructions | Medium | Open | None |

### Key Bug Details

**#7576** — *RetryChatModel hardcoded context_size*:  
- **Affects**: v2.1.0 through v2.2.0 (all published releases)
- **Issue**: `RetryChatModel.__init__` forces all models to use 32768 token context window via hardcoded fallback, causing `CONTEXT_UNFIT` for models with context limits >31130 tokens.
- **Action**: Maintainers should prioritize fix; patch release may be needed.

**#7572** — *Exception swallowing in tool coordinator*:  
- Location: `qwenpaw/tool_calls/_coordinator.py` `_drain()` method
- **Issue**: `except Exception` catches all errors but only returns `str(exc)` to the model without logging or re-raising. No stack traces appear in logs.
- **Impact**: Makes debugging production issues extremely difficult.

---

## 6. Feature Requests & Roadmap Signals

### High-Priority Feature Requests

| # | Request | Comments | Signal Strength |
|---|---------|----------|-----------------|
| #7573 | "Edit last message" and "Rewind" button in Web UI | 1 | Medium |
| #7570 | Feishu streaming cards auto-collapse after reasoning | 1 | Medium |
| #7557 | Skill version/dependency metadata | 2 | High (fleet use) |

### Roadmap Signals

- **Multi-tenant Hub (v2.2.0)**: Community discussion confirms QwenPaw Hub is the next major focus. Related to issue #2324 (multi-user access and admin-managed skills).
- **Advisor Mode (PR #7569)**: In-progress feature enabling dual-model collaboration for cost optimization.
- **Make Skill v2 (PR #7509)**: Structured skill creation workflow with approval gates—indicates investment in skill ecosystem quality.

**Prediction**: The next version may include multi-tenant Hub features, skill versioning, and improved Web UI controls.

---

## 7. User Feedback Summary

### Pain Points

**Memory & Context Issues**  
- Issue #7571: User reports agent repeatedly "forgets" instructions about where to create files (TODO files appearing in wrong directories) and sometimes switches development context unexpectedly (works in runtime path instead of source path).
  - *This suggests fragile state management in multi-path development workflows.*

**Regression After Update**  
- Issue #7474: Users upgrading after PR #7337 migration cannot load custom providers due to configuration incompatibility.
  - *Migration documentation may be insufficient.*

**API Reliability**  
- Issues #7574, #7575: img-gen skill has two bugs affecting OpenAI image generation endpoints—one causing fallback to older models, another causing request failures.
  - *These were reported and closed quickly, suggesting known/fixable issues.*

### Positive Signals

- Issue #7318 has strong engagement (23 comments) indicating healthy community interest in team features.
- Feature requests show users are extending QwenPaw into production fleet scenarios.

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| # | Type | Age | Priority | Notes |
|---|------|-----|----------|-------|
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | PR | 27 days | Medium | MCP tool call timeout—open since Aug 10, awaiting review |
| [#2324](https://github.com/agentscope-ai/QwenPaw/issues/2324) | Issue | Long-standing | High | Multi-user access request (referenced in #7318) |
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | Bug | 1 day | **High** | Regression affecting all model context limits |

### Recommendations

1. **High Priority**: Address bug #7576 (context size regression) before it affects more users—consider patch release.
2. **Review Backlog**: PR #6874 has been pending review for nearly a month; consider expediting.
3. **Migration Docs**: Issue #7474 suggests need for better documentation on provider config migration from `max_tokens` to `max_output_length`.

---

*Digest generated for CoPaw (QwenPaw) — 2026-09-06*  
*Data source: GitHub activity from last 24 hours*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

### ZeptoClaw Project Digest – 2026-09-06

#### 1. Today's Overview
The ZeptoClaw project remains highly active, with **12 open issues** and **2 open PRs** updated in the last 24 hours. All issues were created on 2026-09-05 and remain unresolved, indicating a focus on foundational improvements rather than incremental fixes. No new releases have been made, suggesting stability work and architectural refactoring are in progress. Two critical security PRs (#672 and #671) are under review, addressing P0-level concerns around process environment leakage and agent mode validation.

---

#### 2. Releases
No new releases were published on 2026-09-06.

---

#### 3. Project Progress
There were no merged or closed PRs today. However, significant progress is visible through two proposed fixes:

- **PR #672**: Addresses security vulnerability (Issue #660) by scrubbing inherited environments in plugin and MCP spawn sites.
- **PR #671**: Fixes insecure fallback behavior in invalid `agent_mode` values (Issue #659).

These represent urgent compliance and hardening efforts ahead of potential future releases.

---

#### 4. Community Hot Topics
All issues from 2026-09-05 show zero engagement (no comments or reactions), reflecting either recent initiation or internal prioritization outside public discussion loops.

##### Top Priority Issues by Severity:
| Title | Area | Priority | Link |
|------|------|----------|------|
| [#660](https://github.com/qhkm/zeptoclaw/issues/660): Centralize child-process env scrubbing | Safety | P0-Critical | [Issue #660](https://github.com/qhkm/zeptoclaw/issues/660) |
| [#659](https://github.com/qhkm/zeptoclaw/issues/659): Fail closed on invalid agent_mode | Safety | P0-Critical | [Issue #659](https://github.com/qhkm/zeptoclaw/issues/659) |
| [#672](https://github.com/qhkm/zeptoclaw/pull/672): Scrub inherited env in plugin/MCP spawn sites | Security | P0-Critical | [PR #672](https://github.com/qhkm/zeptoclaw/pull/672) |
| [#671](https://github.com/qhkm/zeptoclaw/pull/671): Fail closed on invalid agent_mode | Security | P0-Critical | [PR #671](https://github.com/qhkm/zeptoclaw/pull/671) |

Underlying Need: Improving security posture during subprocess spawning and reducing risk of privilege escalation due to misconfigurations.

---

#### 5. Bugs & Stability
No active bug reports were filed today. However, several issues point to critical stability risks related to secure execution practices:

- **Issue #660** highlights uncontrolled credential exposure via environment inheritance in child processes — a high-severity flaw partially addressed in PR #672.
- **Issue #659** exposes a dangerous silent fallback to autonomous mode upon invalid input, now being corrected in PR #671.

Fix PRs exist for both P0 items, indicating strong responsiveness despite late discovery.

---

#### 6. Feature Requests & Roadmap Signals
Several high-priority roadmap items suggest upcoming architectural changes targeting modularity, scalability, and operational control:

- **Issue #667**: Proposal to reduce binary size and improve extensibility using registry-owned extension metadata ("Extension Host v2").
- **Issue #661**: Requires redesign of prompt envelope handling for better caching and byte stability.
- **Issue #665**: Aims to modernize cron job functionality with acknowledgment mechanisms and ledger tracking.

These indicate preparation for enterprise-grade deployment scenarios involving trusted concurrency and persistent scheduling.

---

#### 7. User Feedback Summary
There is currently no user feedback recorded in terms of comments or reactions. Given the nature of most open issues—all authored by project maintainers—it appears that real-world user input may not yet be driving feature requests or complaints directly visible in GitHub.

However, one theme emerges strongly: developers relying on ZeptoClaw for secure automation workflows are likely experiencing friction around misconfiguration risks (especially in agent permissions and subprocess environment control).

---

#### 8. Backlog Watch
Long-standing issues requiring attention include:

- **Issue #663**: Highlights outdated production pipeline still using legacy `AgentLoop`. Needs migration to newer `CoreLoop`.
- **Issue #662**: Incomplete implementation of outbound-only channel plugins — affects extensibility for custom integrations.
- **Issue #661**: System prompt reconstruction impedes efficient prompt caching — impacts performance at scale.

While all assigned priorities are marked as `[M]` or higher, none have merged PRs except under urgent P0 cases (#671, #672). Maintainers should prioritize finalizing migrations and completing interface contracts to ensure clean architectural evolution.

--- 

**Generated on 2026-09-06 | Source: [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)**

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here's a thinking process:

1.  **Analyze User Request:**
   - **Role:** Analyst of AI agent and personal AI assistant open-source projects
   - **Source:** GitHub data from ZeroClaw (github.com/zeroclaw-labs/zeroclaw)
   - **Date:** 2026-09-06
   - **Task:** Generate a project digest with specific sections
   - **Data Provided:** Issues updated in last 24h, PRs updated in last 24h, new releases, latest releases, latest issues (top 30 by comment count), latest PRs (top 20 by comment count)

2.  **Identify Key Data Points from the Prompt:**
   - Issues updated in last 24h: 42 (open/active: 34, closed: 8)
   - PRs updated in last 24h: 50 (open: 44, merged/closed: 6)
   - New releases: 1 (v0.8.5)
   - Latest release v0.8.5: security, connectivity, operator-experience, 454 commits, 73 contributors, ZeroRelay, ZeroRouter, live chat, provider capabilities, hardening
   - Latest Issues (top 30 by comment count) - I need to extract the most relevant/commented ones. The top 3 are #9487 (33 comments), #9488 (26 comments), #6808 (24 comments), #6996 (24 comments), etc.
   - Latest PRs (top 20 by comment count) - many have "undefined" comments, but some are clearly active. Note the dates: created/updated on 2026-09-06 for several PRs (#10652, #10651, #9320, #10005, #10356, #9997, etc.)

3.  **Structure the Digest as Requested:**
   - 1. Today's Overview (3-5 sentences)
   - 2. Releases (detail changes, breaking changes, migration notes; omit if none, but there is a new release)
   - 3. Project Progress (merged/closed PRs today, features advanced/fixed)
   - 4. Community Hot Topics (most active Issues/PRs with comments/reactions, links, analyze underlying needs)
   - 5. Bugs & Stability (bugs/crashes/regressions reported today, ranked by severity, note if fix PRs exist)
   - 6. Feature Requests & Roadmap Signals (user-requested features, predict next version)
   - 7. User Feedback Summary (real user pain points, use cases, satisfaction/dissatisfaction)
   - 8. Backlog Watch (long-unanswered important Issues or PRs needing maintainer attention)

   Style: objective, data-driven, highlighting project health. Include GitHub links for each item.

4.  **Extract and Analyze Data:**

   **Releases:**
   - v0.8.5 just released. Summary from prompt: "security, connectivity, and operator-experience release spanning 454 commits from 73 contributors. It introduces ZeroRelay and ZeroRouter, expands live chat and provider capabilities, hardens plugin, sandbox, webhook, credential, and file boundaries"
   - Need to check if there are breaking changes/migration notes. The prompt doesn't explicitly list breaking changes, but I can infer from the summary: "hardens plugin, sandbox, webhook, credential, and file boundaries" suggests potential migration/upgrade notes. I'll be careful not to hallucinate; I'll stick to what's given or gently generalize based on the summary. Since it's a security/connectivity release, I'll note that migration may involve policy/schema updates, but I'll avoid false specifics. Actually, the prompt says "If new versions exist, detail changes, breaking changes, migration notes; omit if none". There is a new release, so I must detail it. I'll base it on the provided summary: "ZeroRelay and ZeroRouter, expands live chat and provider capabilities, hardens plugin, sandbox, webhook, credential, and file boundaries". I'll note it's a significant update with security hardening and new infrastructure components. I won't invent breaking changes unless clear from context. The prompt says "v0.8.5: v0.8.5" and the description. I'll use that.

   **Project Progress:**
   - PRs updated in last 24h: 50 (open: 44, merged/closed: 6)
   - So 6 PRs were merged/closed today. I need to identify which ones from the PR list that are marked as closed/merged and updated today (2026-09-06). Looking at the PR list:
     - #10005 [CLOSED] updated 2026-09-06
     - #5230 [CLOSED] updated 2026-09-06 (but created 2026-04-02, so it's old but updated today?)
     - Actually, the list shows "Updated: 2026-09-06" for several. Let's check each:
       - #10356: Updated: 2026-09-06 (open)
       - #9997: Updated: 2026-09-06 (open)
       - #10652: Updated: 2026-09-06 (open)
       - #10651: Updated: 2026-09-06 (open)
       - #9320: Updated: 2026-09-06 (open)
       - #10005: Updated: 2026-09-06 (closed)
       - #5230: Updated: 2026-09-06 (closed, but old)
       - #10094: Updated: 2026-09-06 (open)
       - #10636: Updated: 2026-09-06 (open)
       - #10337: Updated: 2026-09-05 (closed? It says Open but Updated: 2026-09-05, Comments: undefined)
       - Actually, many have "Updated: 2026-09-06" or "2026-09-05". The prompt says "PRs updated in last 24h: 50 (open: 44, merged/closed: 6)". So exactly 6 PRs were merged/closed in the last 24h. I need to identify which 6 from the list have status closed/merged and updated today.
       Looking at the PR statuses:
       - #10005: [CLOSED] ... updated 2026-09-06
       - #5230: [CLOSED] ... updated 2026-09-06 (but this seems odd; maybe it was re-opened and closed again? Or the "Updated" date is when it was last touched, but status is closed. I'll treat it as closed today.)
       - Are there others? #10356 is open. #9997 open. #10652 open. #10651 open. #9320 open. #10094 open. #10636 open. #10337 open (Updated 2026-09-05). #102xx series all open updated 2026-09-06 but status open.
       So the 6 merged/closed likely include #10005 and #5230, plus maybe others that are closed but not explicitly marked in the snippet? Wait, the list shows only 2 with [CLOSED] status and updated 2026-09-06: #10005 and #5230. Maybe there are 6 closed in total, but the "top 20 by comment count" only shows some. I'll work with what's visible: #10005 (channels health fix) and #5230 (WASM plugin system). I'll note that 6 PRs were merged/closed, highlighting #10005 and #5230 as notable. I can also mention that the merged PRs include security infrastructure, channel health, and WASM plugin system.
       Actually, looking more carefully at the PR list, there are entries like #10045 [CLOSED] but updated 2026-09-05. #7911 [CLOSED] updated 2026-09-05. The prompt says "PRs updated in last 24h: 50 (open: 44, merged/closed: 6)". So within the last 24h from 2026-09-06, 50 PRs had activity, 6 of which were merged/closed. I'll summarize that 6 PRs were merged/closed, focusing on the ones with clear closed status and today's update: #10005 (channel health) and #5230 (WASM plugins). I might also infer others like security-related closures, but I'll stick to visible data.

   **Community Hot Topics:**
   - Most active issues by comments: #9487 (33), #9488 (26), #6808 (24), #6996 (24), #8692 (15), #10050 (14), #7822 (13), #9975 (13), etc.
   - I need to analyze underlying needs. #9487 and #9488 are RFCs about runtime-owned conversation sessions, transport surface adapters, and unified file/attachment architecture. These are high-level architecture/security items with high risk/priority p2. Underlying need: structuring conversation infrastructure, security boundaries, file handling.
   - #6996: Granular sandbox policy - filesystem restrictions. Security risk high, needs maintainer review. Underlying need: unifying two filesystem-policy layers, agent risk profiles.
   - #10050: Verbatim channel send over gateway without agent turn. Risk high. Need: automation, direct messaging.
   - #7822: WASM plugin lifecycle observer subscriptions. Architecture risk high.
   - I'll pick the top 3-4 by comments and analyze needs.

   **Bugs & Stability:**
   - Bugs reported today (updated 2026-09-06): Look at issues with updated date 2026-09-06 and bug/enhancement tags.
     - #10641: [Feature] [Web]: Per-field cron schedule input - new, 2 comments
     - #10625: [bug] Internal [media attachment] placeholder delivered to users when non-vision model is in use - 2 comments, severity S2
     - #10626: [bug] TTS synthesizes text verbatim: Markdown and emoji spoken aloud - 1 comment, severity S2
     - #10585: [bug] new log sink regression races migration tests under default parallel runner - 2 comments, severity S3
     - #10536: [bug] macOS Seatbelt ignores configured allowed_roots for shell commands - 2 comments, severity S1 (workflow blocked!) - created/updated 2026-09-02, but updated 2026-09-05? Actually Updated: 2026-09-05, but still relevant.
     - #10534: [bug] bounded delegates silently strip the delegate tool - 2 comments, severity high
     - #10533: [bug] model_routing_config rejects custom.* provider slots - 2 comments, severity high
     - #10532: [bug] degraded-config remediation can invoke different binary - 2 comments, severity high
     - #10045 [CLOSED] [bug] Persisted image markers retain temporary source paths - 1 comment, updated 2026-09-05
     - #10282 [CLOSED] [bug] hardware probe feature does not reach tool implementations - 1 comment, updated 2026-09-05
     - Severity ranking: S1 (macOS Seatbelt), S2 (media placeholder, TTS, degraded config), S3 (log sink regression). I'll rank them.
     - Note if fix PRs exist: Some have linked PRs or are in progress. I'll check the summaries. For #10536, it's a bug, might have a PR in works. I'll mention if fix PRs are referenced or likely.

   **Feature Requests & Roadmap Signals:**
   - From issues/PRCs: RFCs on WASM plugin runtime architecture (#10076, #10526), channel/source cleanup (#8583), opt-in single-tool provider rounds (#10222), verbatim channel send (#10050), unified file architecture (#9488), runtime-owned sessions (#9487), browser PKCE/enrollment (#10321, #10275+), principal sessions (#10268+), etc.
   - Predict next version v0.9.0 or v0.8.6: likely focus on principal/agent session architecture, WASM plugin enhancements, security hardening, gateway routing.

   **User Feedback Summary:**
   - Pain points: Termux/Android installation issues (but that's closed), Windows self-update hardenings, macOS Seatbelt restrictions, TTS markdown issues, media attachment placeholders, config migration across binaries, degraded config warnings, sandbox policy drifts.
   - Satisfaction: New release v0.8.5 positive with security/hardening, new features ZeroRelay/ZeroRouter.
   - Dissatisfaction: Sandbox/policy inconsistencies, cross-platform issues (Android/Termux, Windows), TTS markup rendering, config migration binary mismatches.

   **Backlog Watch:**
   - Long-unanswered important Issues: Look at issues with high priority/high comments but old or stalled.
     - #9487 and #9488 are RFCs from July 28, updated Sept 5, 33/26 comments - likely need maintainer review/voting.
     - #6996 from May 28, updated Sept 5, 24 comments - granular sandbox policy, in progress.
     - #8692 tracker from July 4, updated Sept 5, 15 comments - maintainer decision queue.
     - #10536, #10533, #10534, #10532 from Sept 2, only 2 comments each but high severity/risk - might need attention.
     - PRs: #10321, #10275+ stack are large security/authorization stacks, needing review.
     - I'll pick a few that are stale or need maintainer action.

5.  **Synthesize and Structure the Digest:**
   - I'll follow the exact section format.
   - I'll include GitHub links for each item mentioned.
   - I'll be objective, data-driven, no hallucination beyond what's in the prompt or clearly inferable.
   - I'll ensure counts/statistics match the prompt.
   - I'll keep it concise but comprehensive.

   Let's draft each section mentally:

   **1. Today's Overview (3-5 sentences):**
   - ZeroClaw saw 50 PR activities and 42 issue updates in the last 24 hours leading up to 2026-09-06, with 6 PRs merged/closed and 34 open/active issues. The highlights are the v0.8.5 release (454 commits, 73 contributors) and ongoing RFC-driven architecture work. Activity is heavy on security, gateway, and sandbox policy discussions, reflecting a maturation phase toward stable, hardened infrastructure. Project health appears strong with active maintainer engagement and a clear stabilization line for v0.8.5.

   **2. Releases:**
   - v0.8.5 released (announced alongside 2026-09-06 data). Changes: introduces ZeroRelay and ZeroRouter, expands live chat and provider capabilities, hardens plugin, sandbox, webhook, credential, and file boundaries across 454 commits from 73 contributors. No explicit breaking changes listed in the release summary, but the security-hardening boundaries (sandbox, webhook, credential, file) imply migration considerations for plugin and credential configurations. Users should review the sandbox policy updates and credential boundary changes per the release notes. Link: https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.5 (or the release text provided)

   **3. Project Progress:**
   - 6 PRs were merged/closed in the last 24h. Notable closures: #10005 fix(channels): base channel health on the channel, not on listener liveness; #5230 feat(plugins): add WASM plugin system with security sandbox (originally from April, closed/updated today). Additionally, the merged PRs advance channel health infrastructure and the long-awaited WASM plugin extension mechanism. The 44 remaining open PRs focus on security principal infrastructure (stack #10248-#10321), gateway routing, and memory/backend features.

   **4. Community Hot Topics:**
   - #9487 [RFC: Runtime-owned conversation sessions and transport surface adapters] (33 comments) - architects a full replacement of conversation session/transport surface, needing maintainer voting reset. Need: standardized session/transport ownership.
   - #9488 [RFC: Unified file and attachment architecture for conversation surfaces] (26 comments) - replaces prior revision, unifies file/attachment handling across channels. Need: consistent file attachment lifecycle.
   - #69

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*