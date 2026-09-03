# OpenClaw Ecosystem Digest 2026-09-03

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-03 02:07 UTC

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

# OpenClaw Project Digest — 2026-09-03

---

## 1. Today's Overview

The OpenClaw project is experiencing high ongoing development activity, with significant engagement across both issues and pull requests. In the last 24 hours, 500 issues were updated (353 open/active, 147 closed), and 500 PRs were updated (372 open, 128 merged/closed). Despite no new releases being published today, the volume of active discussions indicates a focus on stabilizing core subsystems, particularly around session management, delivery reliability, and multi-agent coordination. Many of the most-commented issues reflect complex systemic bugs affecting enterprise-grade deployments, pointing to a maturing but still evolving platform under real-world stress.

---

## 2. Releases

No new releases were published on 2026-09-03.

---

## 3. Project Progress

Several key areas advanced through recently merged or discussed PRs:

- **Agent Ownership Preservation**: [PR #136754](https://github.com/openclaw/openclaw/pull/136754) fixes an issue where native catalog continuation resolved the outer default model instead of the native snapshot model, improving agent identity consistency across Codex chat turns.
- **Active Memory Localization**: [PR #136502](https://github.com/openclaw/openclaw/pull/136502) adds Portuguese recall intent recognition to Active Memory, expanding language support for international users.
- **Process Supervision Improvements**: [PR #136507](https://github.com/openclaw/openclaw/pull/136507) ensures supervisor timeouts are set before adapter construction begins, preventing deadlocks during initialization.
- **Security Dependency Updates**: [PR #136827](https://github.com/openclaw/openclaw/pull/136827) moves the `qs` override off two known vulnerable versions, addressing critical security advisories.
- **Compaction Logic Fixes**: [PR #136533](https://github.com/openclaw/openclaw/pull/136533) addresses incorrect heartbeat session behavior that ignored active transcript byte caps.

These changes span core stability, security posture, localization, and internal performance optimizations.

---

## 4. Community Hot Topics

Most active issues and PRs by comment count include several recurring themes:

### [Issue #99551 – Tracker: Codex worker runaway hardening sprint](https://github.com/openclaw/openclaw/issues/99551)
This tracker issue aggregates multiple follow-up tasks related to hardening Codex/OpenClaw worker failure modes following a reported incident. With 17 comments, it reflects ongoing concern about robustness in distributed agent execution environments.

### [Issue #121953 – Cron agent stalls on DeepSeek due to message prefixing](https://github.com/openclaw/openclaw/issues/121953)
Discusses how the `[cron:<jobId> <name>]` prefix causes scheduling delays specifically when using DeepSeek models. This highlights platform-specific LLM interaction quirks and potential vendor routing issues.

### [Issue #85030 – MCP tools not injected into subagents](https://github.com/openclaw/openclaw/issues/85030)
A high-severity bug report indicating that MCP tool schemas registered via `mcp.servers` are ignored in spawned subagents, undermining extensibility and dynamic tool integration capabilities.

### [PR #112748 – UI throttles session catalog bursts](https://github.com/openclaw/openclaw/pull/112748)
Addresses UI responsiveness under heavy load conditions, especially when paired-node presence/focus events trigger repeated catalog refreshes.

These discussions reveal strong community interest in agent lifecycle control, scalable UI interactions, and cross-platform compatibility.

---

## 5. Bugs & Stability

Critical bugs affecting system reliability dominate current discourse:

| Issue | Severity | Description |
|-------|----------|-------------|
| [#127229](https://github.com/openclaw/openclaw/issues/127229) | P1 | Telegram watchdog falsely tombstones durable updates; impacts message delivery integrity. |
| [#135835](https://github.com/openclaw/openclaw/issues/135835) | P1 | API key exhaustion recovery fails post-recharge; blocking production usage after upgrades. |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1 | Leaked hook/tool child processes accumulate as zombies, degrading runtime performance over time. |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | P2 | Cron jobs silently time out during LLM API outages rather than failing fast on definitive errors. |
| [#134570](https://github.com/openclaw/openclaw/issues/134570) | P0 | Upgrade to 2026.8.1 causes gateway crash-loops and dispatch failures due to incomplete state migrations. |

Some related PRs exist (e.g., [PR #121096](https://github.com/openclaw/openclaw/pull/121096), [PR #136827](https://github.com/openclaw/openclaw/pull/136827)), suggesting progress toward resolution, though full verification may require further testing.

---

## 6. Feature Requests & Roadmap Signals

Several feature requests indicate strategic direction:

- **[Feature Request #121729](https://github.com/openclaw/openclaw/issues/121729)** – Introduces daily spending allowances for agents, enabling safer long-term background operation without cost surprises.
- **[Feature Request #16555](https://github.com/openclaw/openclaw/issues/16555)** – Adds TTL support for delivery queue messages to prevent stale/orphaned entries from flooding channels on restart.
- **[Feature Request #116615](https://github.com/openclaw/openclaw/issues/116615)** – Proposes a pre-mutation guard for `apply_patch` operations to enforce filesystem mutation policies dynamically.

These features align with increasing demands for operational safety, policy enforcement, and cost management in autonomous agent systems.

---

## 7. User Feedback Summary

User-reported pain points reveal diverse challenges:

- **Delivery Reliability**: Multiple reports ([#96692](https://github.com/openclaw/openclaw/issues/96692), [#128971](https://github.com/openclaw/openclaw/issues/128971)) highlight lost replies or ambiguous delivery confirmations, particularly in Slack and Telegram integrations.
- **Upgrade Pain Points**: Users upgrading to 2026.8.1 experienced severe disruptions ([#134608](https://github.com/openclaw/openclaw/issues/134608)), including broken authentication flows and corrupted databases.
- **Session State Integrity**: Reports like [#118625](https://github.com/openclaw/openclaw/issues/118625) and [#133327](https://github.com/openclaw/openclaw/issues/133327) underscore concerns around data loss and corruption in session state persistence layers.
- **Cross-Agent Contamination**: Dreaming mechanisms contaminating agent identities ([#65374](https://github.com/openclaw/openclaw/issues/65374)) raise architectural questions about isolation boundaries.
- **Language Support Gaps**: Lack of Portuguese recall recognition led directly to a fix ([PR #136502](https://github.com/openclaw/openclaw/pull/136502)).

Overall sentiment appears cautiously optimistic, with users appreciating deep customization options but expressing frustration over inconsistent edge-case handling and upgrade instability.

---

## 8. Backlog Watch

Key longstanding issues requiring attention:

- **[Issue #74704](https://github.com/openclaw/openclaw/issues/74704)** – SDK stabilization effort ongoing since April; aims to solidify external app client integrations.
- **[Issue #51245](https://github.com/openclaw/openclaw/issues/51245)** – Telegram slash sessions still unresolved after months; affects elevated permission controls.
- **[Issue #48709](https://github.com/openclaw/openclaw/issues/48709)** – Gemini 2.5 Pro context bloat remains unfixed; limits model usability.
- **[Issue #119992](https://github.com/openclaw/openclaw/issues/119992)** – Duplicate-answer storms within turns persist; impacts UX quality.

These issues represent foundational problems that hinder broader adoption unless addressed promptly. Maintainers should prioritize triaging and assigning ownership to ensure forward momentum.

--- 

*End of Digest*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Ecosystem

**Report Date:** 2026-09-03
**Projects Analyzed:** OpenClaw, Hermes Agent, NanoBot, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, TinyClaw, Moltis, CoPaw, ZeptoClaw, ZeroClaw

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem demonstrates polarized maturity levels on 2026-09-03. Large-scale platforms like **OpenClaw** (500 issues/PRs updated daily) contrast sharply with dormant projects (NullClaw, TinyClaw, ZeptoClaw, PicoClaw) showing zero activity. The ecosystem reveals three distinct tiers: **production-grade platforms** (OpenClaw, Hermes Agent, ZeroClaw) handling enterprise-scale workloads, **active niche projects** (NanoClaw, IronClaw, LobsterAI, Moltis) iterating on specific capabilities, and **stalled/abandoned repositories** representing nearly 30% of tracked projects. Critical technical themes converging across the ecosystem include memory/session lifecycle management, multi-agent coordination reliability, security boundary enforcement, and cross-platform integration stability. No project published a major release today, indicating collective focus on stabilization rather than feature expansion.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases Today | Activity Level | Health Score |
|---------|---------------------|-------------------|---------------|----------------|--------------|
| **OpenClaw** | 500 (353 open) | 500 (372 open) | 0 | Very High | ●●●●● |
| **Hermes Agent** | 50 (majority open) | 50 (majority open) | 0 | High | ●●●○○ |
| **ZeroClaw** | 50 (majority high-risk) | 50 (all open) | 0 | High | ●●○○○ |
| **NanoClaw** | 2 | 21 (18 open) | 0 | Moderate | ●●●○○ |
| **LobsterAI** | 8 (2 open) | 10 (majority open) | 0 | Moderate | ●●●●○ |
| **IronClaw** | Not disclosed | Multiple merged | 0 | Active | ●●●○○ |
| **Moltis** | 2 | 3 | 3 patch releases | Low-Moderate | ●●○○○ |
| **NanoBot** | Not disclosed | Not disclosed | 0 | Minimal | ●○○○○ |
| **PicoClaw** | 0 | 0 | 0 | None | ●○○○○ |
| **NullClaw** | 0 | 0 | 0 | None | ●○○○○ |
| **TinyClaw** | 0 | 0 | 0 | None | ●○○○○ |
| **ZeptoClaw** | 0 | 0 | 0 | None | ●○○○○ |
| **CoPaw** | N/A (generation failed) | N/A | N/A | Unknown | N/A |

*Health Score: ●●●●● = Strong/stable, ●○○○○ = Weak/at-risk*

---

## 3. OpenClaw's Position

### Advantages vs Peers

OpenClaw maintains **dominant ecosystem presence** with 10x the activity volume of any competitor. Its advantages include:

- **Scale**: 500 issues/PRs daily vs. 50 for nearest competitors (Hermes Agent, ZeroClaw)
- **Enterprise adoption depth**: Real-world stress testing evidenced by complex systemic bug reports (session management, delivery reliability, multi-agent coordination)
- **Localization investment**: Active language expansion (Portuguese recall recognition in PR #136502)
- **Security maturity**: Proactive dependency updates addressing CVEs (PR #136827)

### Technical Approach Differences

| Aspect | OpenClaw | Hermes Agent | ZeroClaw |
|--------|----------|--------------|----------|
| **Primary focus** | Core stability, enterprise reliability | Desktop integration, session persistence | Security boundaries, RFC governance |
| **Architecture** | Monolithic core with plugin adapters | Gateway-owned authority model | Modular runtime with WASM plugins |
| **Bug severity handling** | P0-P2 with rapid triage | P1-P3 with investigation lag | S0-S2 with pending fixes |
| **Community engagement** | High (500 daily updates) | Moderate (50 daily updates) | High (50 daily, high-risk focus) |

### Community Size Comparison

OpenClaw's 353 active open issues and 372 open PRs represent a community approximately **7x larger** than Hermes Agent or ZeroClaw (both ~50 active items). The platform's 17-comment tracker issues (e.g., #99551 on Codex worker hardening) indicate deeper architectural discussions than competitors.

---

## 4. Shared Technical Focus Areas

### Cross-Project Requirements Emerging Today

| Technical Need | Affected Projects | Specific Manifestation |
|----------------|-------------------|----------------------|
| **Session/Memory Lifecycle Management** | OpenClaw, Hermes Agent, ZeroClaw, NanoClaw | OpenClaw: session state integrity bugs; Hermes: state.db corruption (P1); ZeroClaw: memory lifecycle RFC #6850; NanoClaw: credential lane requests |
| **Subprocess/Process Leak Prevention** | OpenClaw, Hermes Agent, NanoClaw | OpenClaw: zombie child processes (#97616); Hermes: MCP stdio orphans causing OOM (#81880); NanoClaw: container HTTP MCP server issues |
| **Delivery Reliability** | OpenClaw, NanoClaw, LobsterAI | OpenClaw: Telegram/Slack delivery failures; NanoClaw: disconnected adapter retries; LobsterAI: concurrent IM message handling |
| **Security Boundary Enforcement** | OpenClaw, ZeroClaw, LobsterAI | OpenClaw: API key exhaustion recovery; ZeroClaw: independent delegate bypass (#10165); LobsterAI: MCP stdio shell injection hardening |
| **Type Safety / Code Quality** | IronClaw, Hermes Agent | IronClaw: 170+ @ts-nocheck elimination; Hermes: desktop app stability issues |
| **Multi-Agent Coordination** | OpenClaw, Hermes Agent | OpenClaw: MCP tools not injected into subagents (#85030); Hermes: bot group chat persistence |

### Concurrency & Reliability Patterns

**Three projects simultaneously addressing race conditions today:**
- **LobsterAI**: PRs #1090 and #1100 fix duplicate session creation from concurrent IM messages
- **OpenClaw**: Compaction logic fixes for heartbeat session behavior (#136533)
- **NanoClaw**: Task run start delays awaiting resync tick (PR #3702)

---

## 5. Differentiation Analysis

### Feature Focus Comparison

| Project | Primary Differentiator | Target User Segment |
|---------|----------------------|---------------------|
| **OpenClaw** | Enterprise-grade multi-agent coordination, catalog continuation | Large organizations, AI agent platforms |
| **Hermes Agent** | Desktop-first integration, skills index, platform adapters (Nextcloud Talk) | Desktop users, cross-platform communicators |
| **IronClaw** | Frontend type safety, component standardization | Frontend developers, web UI builders |
| **NanoClaw** | Provider contracts, supply chain security gates | Plugin developers, security-conscious operators |
| **ZeroClaw** | RFC governance, granular sandbox policies, WASM extensibility | Security researchers, governance-focused teams |
| **LobsterAI** | IM concurrency, cross-provider model switching | Team collaboration, multi-model users |
| **Moltis** | Hook lifecycle system, reasoning effort control | Extension developers, customization-focused users |

### Technical Architecture Divergence

```
OpenClaw     ──► Monolithic core + adapter plugins (Scale-first)
Hermes       ──► Gateway-owned authority + desktop integration (Desktop-first)  
ZeroClaw     ──► Modular runtime + WASM plugins + RFC governance (Security-first)
IronClaw     ──► Frontend refactoring + shared component library (UI-first)
NanoClaw     ──► Provider contract standardization (Interoperability-first)
LobsterAI    ──► IM concurrency + model provider abstraction (Communication-first)
Moltis       ──► Hook-based extension system (Developer-first)
```

### Target User Segments

- **Enterprise/Platform**: OpenClaw, ZeroClaw
- **Desktop Power Users**: Hermes Agent, IronClaw
- **Developer/Plugin Ecosystem**: NanoClaw, Moltis
- **Team Collaboration**: LobsterAI
- **Dormant/Unclear**: PicoClaw, NullClaw, TinyClaw, ZeptoClaw, NanoBot

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | OpenClaw, Moltis | High volume activity + frequent releases (Moltis: 3 patch releases today) |
| **Active Development** | Hermes Agent, ZeroClaw, NanoClaw, IronClaw, LobsterAI | Steady progress, bug fixes, feature PRs |
| **Stabilizing** | None identified | Projects with declining activity post-major release |
| **Dormant** | PicoClaw, NullClaw, TinyClaw, ZeptoClaw | Zero activity in 24h |
| **Unknown** | NanoBot, CoPaw | Insufficient data |

### Rapidly Iterating Projects

**Moltis** demonstrates highest release velocity with 3 patch versions in 24 hours, indicating:
- Rapid bug-to-fix turnaround (hook lifecycle issues addressed within hours)
- Small, focused releases (patch versioning only)
- Core contributor-driven development without community bottleneck

**OpenClaw** shows sustainable high-volume iteration with proper triage:
- 128 PRs merged/closed today
- Security updates (PR #136827) deployed without version bump
- Regression-aware release discipline

### Stabilization Signals

No project exhibits clear stabilization patterns. Even mature platforms like OpenClaw continue:
- P0 issues (gateway crash-loops #134570)
- Active architectural discussions (agent ownership preservation)
- Enterprise pain points (upgrade instability #134608)

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Memory & Session Isolation** | 5+ projects addressing memory lifecycle, session persistence, cross-agent contamination | Operators demand deterministic agent state; expect memory policy APIs in upcoming releases |
| **Multi-Agent Security Boundaries** | ZeroClaw: delegate bypass; OpenClaw: zombie processes; Hermes: subprocess leaks | Security hardening becomes competitive differentiator; expect sandbox policy standardization |
| **Cross-Provider Reliability** | LobsterAI: model switch failures; OpenClaw: DeepSeek prefix issues | Multi-model deployments require robust provider abstraction layers |
| **Type Safety Investment** | IronClaw: 170+ @ts-nocheck removal; Hermes: desktop app regressions | Quality investment increasing; TypeScript-first development becoming baseline |
| **Delivery & Communication Reliability** | OpenClaw, NanoClaw, LobsterAI: message delivery issues | Integration quality under scrutiny; expect formal channel adapter specifications |
| **RFC Governance Maturation** | ZeroClaw: maintainer decision queue; OpenClaw: architecture discussions | Community-driven design processes emerging; expect formal RFC pipelines |
| **Supply Chain Security** | NanoClaw: minimumReleaseAge gate reactivation | Dependency safety becoming mandatory; expect automated supply chain verification |
| **Localization & Internationalization** | OpenClaw: Portuguese recall recognition | Global market expansion; expect multi-language support prioritization |

### Value for AI Agent Developers

1. **Architecture Patterns**: OpenClaw's catalog continuation, Hermes' gateway ownership, ZeroClaw's WASM modularity offer reference architectures for different scaling scenarios

2. **Integration Risks**: Cross-provider model switching (LobsterAI #1101) and subprocess management (Hermes OOM, OpenClaw zombies) represent high-risk areas requiring defensive coding

3. **Community Signals**: ZeroClaw's S0 security issue (#10165) highlights independent delegate risks—developers should audit privilege escalation paths

4. **Release Strategy**: Moltis' rapid patch cadence vs. OpenClaw's security-update-without-release demonstrates two viable release models for different project scales

5. **Testing Priorities**: Concurrency bugs appearing across 3 projects simultaneously (LobsterAI, OpenClaw, NanoClaw) indicate need for stress testing IM/session scenarios

---

**Report prepared:** 2026-09-03
**Data sources:** GitHub activity feeds for 13 tracked repositories
**Confidence:** High (comprehensive data for 11/13 projects; NanoBot and CoPaw excluded due to insufficient data)

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑09‑03)**  

---

### 1. Today’s Overview  
The Hermes Agent repository is in a highly active state: **50 issues** and **50 pull requests** were updated in the last 24 h, with the majority still open. No new releases were published. The bulk of activity consists of bug‑fixes, stability patches, and incremental feature work, indicating a steady‑state development cycle rather than a major version bump.

---

### 2. Releases  
**None** – there are currently no new versioned releases to report.

---

### 3. Project Progress  
* **Merged / Closed PRs (today)** – 2 PRs were merged/closed:  
  * #96633 – upgrade Relay to 0.8.3 (closed)  
  * #101690 – fix receipt writing after `hermes update` (closed)  

* **Feature advances** – Several open PRs target core capabilities:  
  * #101052 – provider‑neutral AgentRuntime plugin API (adds a neutral runtime layer).  
  * #11458 – Nextcloud Talk platform adapter (adds a new communication channel).  
  * #63721 – `register_background_service()` API for long‑running services.  

* **Stability work** – A large share of the day’s PRs address bugs that could cause crashes, data corruption, or silent failures (e.g., #98077 state.db corruption, #48721 wrong interpreter, #81880 OOM on macOS).

---

### 4. Community Hot Topics  
| Issue / PR | Comments | 👍 | Link | Underlying Need |
|------------|----------|----|------|-----------------|
| **#66616** – *Skills index is stale or degraded* (144 comments) | 144 | 0 | <https://github.com/nousresearch/hermes-agent/issues/66616> | Automated freshness probes are missing; the skills index falls behind the 26 h freshness limit, breaking downstream tooling. |
| **#97681** – *Bot Group Chats should keep working after Desktop closes* (23 comments) | 23 | 0 | <https://github.com/nousresearch/hermes-agent/issues/97681> | Users need persistent group‑chat state across device disconnects; current gateway‑owned authority is in place but the session‑state integration is missing. |
| **#98077** – *state.db physical cross‑B‑tree corruption* (8 comments) | 8 | 0 | <https://github.com/nousresearch/hermes-agent/issues/98077> | Production stability is at risk; SQLite 3.50.4 WAL mode can corrupt the internal state DB under concurrent access. |
| **#81880** – *MCP stdio orphans accumulate → OOM on macOS* (4 comments) | 4 | 0 | <https://github.com/nousresearch/hermes-agent/issues/81880> | Desktop app memory pressure from leaking subprocesses; a serious reliability issue on high‑end Macs. |
| **#101748** – *Dashboard serves Electron renderer when Desktop‑spawned* (2 comments) | 2 | 0 | <https://github.com/nousresearch/hermes-agent/issues/101748> | Regression where `HERMES_DESKTOP=1` causes the wrong UI to be served, breaking the web‑dashboard experience. |
| **#101786** – *Project‑level skills cannot be invoked in project sessions* (1 comment) | 1 | 0 | <https://github.com/nousresearch/hermes-agent/issues/101786> | Skill discovery must respect the session’s working directory; currently the gateway uses the repo root, hiding project‑local skills. |
| **#101741** – *Revoking a permanent command approval has no effect* (1 comment) | 1 | 0 | <https://github.com/nousresearch/hermes-agent/issues/101741> | Config reload merges instead of replacing the allowlist, preventing users from revoking permanent approvals. |
| **#101743** – *Checkpoint list shows blank labels* (1 comment) | 1 | 0 | <https://github.com/nousresearch/hermes-agent/issues/101743> | UI bug where `rollback.list` never receives a `message` key, resulting in empty labels in the Dashboard. |
| **#101806** – *kanban: refuse CLI complete on a blocked card without --force* (0 comments) | 0 | 0 | <https://github.com/nousresearch/hermes-agent/pull/101806> | Prevents accidental removal of block gates; a safety‑critical improvement for workflow integrity. |
| **#95458** – *stop oversized browser results from stalling Codex retries* (0 comments) | 0 | 0 | <https://github.com/nousresearch/hermes-agent/pull/95458> | Large multimodal payloads inflate request size and cause repeated zero‑event retries; needs payload trimming. |

**Takeaway:** The most vocal community concerns revolve around **index freshness**, **session persistence**, **desktop‑app memory leaks**, and **UI regressions**. Several high‑impact bugs (state.db corruption, OOM, 503 auth errors) are also being actively discussed.

---

### 5. Bugs & Stability (ranked by severity)  

| Severity | Issue | Summary | Link | Fix PR (if any) |
|----------|-------|---------|------|-----------------|
| **P1** | **#98077** | Physical cross‑B‑tree corruption of `state.db` under SQLite 3.50.4 WAL mode. | <https://github.com/nousresearch/hermes-agent/issues/98077> | No merged PR yet; ongoing investigation. |
| **P1** | **#81880** | MCP stdio subprocesses accumulate → OOM on macOS (300+ node processes). | <https://github.com/nousresearch/hermes-agent/issues/81880> | No fix merged; PR #101804 addresses a related MCP boolean‑schema parking bug. |
| **P1** | **#94558** | Cloud agents (sjc) return 503 “Auth provider ‘nous’ unreachable”. | <https://github.com/nousresearch/hermes-agent/issues/94558> | No fix merged; requires backend service health checks. |
| **P1** | **#48721** | `hermes update` targets wrong interpreter on macOS (Homebrew Python 3.14) → PEP 668 violation. | <https://github.com/nousresearch/hermes-agent/issues/48721> | No merged PR; PR #101805 (tui hot‑apply) indirectly touches related session handling. |
| **P2** | **#101783** | Discord typing indicator persists after idle (leaked `_keep_typing` task). | <https://github.com/nousresearch/hermes-agent/issues/101783> | No fix yet; relates to PR #101756 (MCP OAuth async flow). |
| **P2** | **#101786** | Project‑level skills cannot be invoked in project sessions (cwd mismatch). | <https://github.com/nousresearch/hermes-agent/issues/101786> | PR #101801 (skills discovery) implements the required cwd‑aware fix. |
| **P2** | **#101741** | Revoking a permanent command approval has no effect (config merge). | <https://github.com/nousresearch/hermes-agent/issues/101741> | No merged PR; likely needs a rewrite of the allowlist loading logic. |
| **P2** | **#101743** | Checkpoint list shows blank labels (`message` key never emitted). | <https://github.com/nousresearch/hermes-agent/issues/101743> | No PR yet; UI layer needs to emit the missing key. |
| **P2** | **#101644** | Duplicate conversation history stored for named conversations (2 turns → 8 messages). | <https://github.com/nousresearch/hermes-agent/issues/101644> | No fix merged; may involve conversation‑id deduplication logic. |
| **P2** | **#69637** | Async delegation re‑triggers 300 s preflight compression timeouts, wedging long‑running CLI sessions. | <https://github.com/nousresearch/hermes-agent/issues/69637> | No merged PR; may require debouncing of compression triggers. |
| **P2** | **#101536** | Parallel tool calls to Gemini are merged into a single slot, causing argument collision. | <https://github.com/nousresearch/hermes-agent/issues/101536> | No fix yet; PR #101802 (desktop open links) touches browser‑tab handling which could affect this. |
| **P2** | **#101568** | Bot‑mode clarify prompts are unbound from renamed group chats (race condition). | <https://github.com/nousresearch/hermes-agent/issues/101568> | No merged PR; likely part of the broader session‑state refactor. |
| **P2** | **#100561** | Nix/Home Manager package missing `hermes_state_registry` module, causing gateway start‑up failure. | <https://github.com/nousresearch/hermes-agent/issues/100561> | No fix merged; requires Nix packaging update. |
| **P2** | **#101748** | Dashboard inherits `HERMES_DESKTOP` and serves wrong Electron renderer. | <https://github.com/nousresearch/hermes-agent/issues/101748> | No merged PR; related to #52945 (closed) but regression persists. |
| **P2** | **#76457** | `hermes config set` writes list‑of‑strings as a quoted JSON literal instead of a YAML list. | <https://github.com/nousresearch/hermes-agent/issues/76457> | No merged PR; may be addressed by config‑parsing refactors. |
| **P2** | **#32384** | `hermes update` corrupts local Git repo, breaking subsequent commands. | <https://github.com/nousresearch/hermes-agent/issues/32384> | No merged PR; high‑impact stability bug. |
| **P3** | **#66616** | Skills index stale (>26 h) despite cron jobs; automated freshness probe fails. | <https://github.com/nousresearch/hermes-agent/issues/66616> | No merged PR; core indexing pipeline needs attention. |
| **P3** | **#79579** | Quit‑in‑flight warning incorrectly warns about losing work when backend outlives the app. | <https://github.com/nousresearch/hermes-agent/issues/79579> | No fix yet; UI confirmation logic needs refinement. |
| **P3** | **#60932** | Lack of proper ZDR‑passthrough makes “Private Mode” credibility questionable. | <https://github.com/nousresearch/hermes-agent/issues/60932> | No PR yet; requires upstream provider compliance. |
| **P3** | **#89388** | Request for a full‑featured browser DevTools inside the Desktop Preview pane. | <https://github.com/nousresearch/hermes-agent/issues/89388> | No PR; feature request awaiting design. |

*Overall stability picture*: A handful of **P1** bugs (state.db corruption, OOM, auth 503, wrong interpreter) are actively being investigated, while many **P2** issues are being addressed via targeted PRs. The most critical stability blockers appear to be the **state.db corruption** and **OOM from leaking MCP subprocesses**.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Summary | Likely Target Version |
|---------|---------|-----------------------|
| **Bot Group Chats persistence** (#97681) | Keep group‑chat state functional after Desktop disconnects. | Next minor release (post‑0.22). |
| **Cron per‑job `send_message` opt‑in** (#20140) | Allow cron jobs to actively send messages to channels. | Upcoming feature sprint. |
| **ZDR‑passthrough fix** (#60932) | Enforce Zero Data Retention flags when routing via OpenRouter/third‑party providers. | Likely in a 0.23 release. |
| **Full‑Featured Bug Hunt Browser** (#89388) | Embed Chromium DevTools in the Desktop Preview pane for security hunting. | Medium‑term (0.24+). |
| **Provider‑neutral AgentRuntime API** (#101052) | Decouple runtime execution from specific provider implementations. | Core infrastructure work; may land in 0.23. |
| **Nextcloud Talk adapter** (#11458) | Add native support for Nextcloud Talk conversations. | Planned for 0.23. |
| **Background service registration** (#63721) | Allow plugins to run long‑lived services without a `MessageHandler`. | Likely in 0.23. |
| **Mistral API compatibility patches** (#11455) | Adjust tool‑call IDs and response formats for Mistral’s quirks. | Already merged in #11455 (April); still relevant for future provider updates. |
| **Kanban “complete” safety** (#101806) | Refuse `hermes kanban complete` on blocked cards unless `--force` is used. | Immediate merge (already open). |
| **Desktop open‑link navigation** (#101802) | Open clicked links in a new Browser tab instead of reusing the active tab. | Already merged in #101802 (Sept 3). |
| **MCP boolean schema fix** (#101804) | Prevent server parking when a single boolean property is declared. | Merged (Sept 3). |

**Signal**: The project is actively expanding its **integration surface** (Nextcloud Talk, background services, AgentRuntime) and tightening **stability safeguards** (index freshness, session persistence, OOM mitigation). Feature work is moderate; most high‑impact user‑visible bugs are being addressed promptly.

---

### 7. User Feedback Summary  

* **Stale Skills Index** – Users report that automated tooling based on the skills index fails because it lags beyond the 26 h freshness window. This blocks workflows that rely on up‑to‑date skill metadata.  
* **Session Persistence** – Bot group chats lose state when the desktop client closes, and project‑level skills cannot be discovered/invoked inside a project session. Users want reliable, cross‑device session continuity.  
* **Memory & Crash Risks** – macOS desktop users experience OOM due to accumulating MCP stdio processes; state.db corruption under SQLite WAL mode threatens production stability.  
* **UI/UX regressions** – Dashboard sometimes serves the wrong Electron renderer (`HERMES_DESKTOP=1`), and checkpoint labels appear blank, causing confusion in the UI.  
* **Feature Gaps** – Users request richer debugging tools (full DevTools in preview), better cron flexibility (send messages), and more robust ZDR compliance for private‑mode routing.  

Overall sentiment is **cautiously positive**: the community appreciates rapid bug‑fix cadence but is concerned about **long‑standing stability issues** (state.db, OOM) and **missing core capabilities** (session persistence, skill discovery).

---

### 8. Backlog Watch  

| Issue / PR | Age (approx.) | Why it matters | Maintainer attention needed |
|------------|---------------|----------------|----------------------------|
| **#66616** – Skills index stale | 45 days (created 2026‑07‑18) | Core indexing pipeline; impacts many downstream tools. | Review cron schedule, consider more frequent rebuilds or incremental updates. |
| **#97681** – Bot group chat persistence | 5 days (created 2026‑08‑29) | Users need reliable cross‑device chat state; currently incomplete. | Implement gateway‑owned authority integration with session state. |
| **#101741** – Command approval revocation | 1 day (created 2026‑09‑03) | Prevents users from removing permanent approvals; silent failure harms workflow security. | Verify config reload semantics; consider atomic replace instead of merge. |
| **#101743** – Blank checkpoint labels | 1 day (created 2026‑09‑03) | UI confusion; checkpoint list is a key operational metric. | Fix `CheckpointManager` to emit `message` key; UI should handle missing data gracefully. |
| **#101806** – Kanban `complete` safety | 1 day (created 2026‑09‑03) | Accidentally clearing block gates can break workflow gating. | Ensure `hermes kanban complete` checks `needs_input`/`blocked` status before proceeding. |
| **#101805** – Hot‑apply checkpoint requirement to open sessions | 1 day (created 2026‑09‑03) | Sessions may remain fail‑closed with stale `checkpoint_required` flag. | Implement live update propagation to running agents. |
| **#101801** – Skills discovery scoped to session cwd | 1 day (created 2026‑09‑03) | Project‑level skills invisible when typing `/` in a project session. | Align `find_project_root()` with session working directory. |
| **#95458** – Oversized browser results stall Codex retries | 38 days (created 2026‑08‑26) | Large multimodal payloads cause unnecessary retries and API cost. | Implement payload trimming / streaming limits for browser results. |
| **#101536** – Parallel Gemini tool calls merged | 41 days (created 2026‑09‑02) | Identical slot keys cause argument collisions and incorrect streaming. | Refine slot‑keying logic to include unique identifiers for parallel calls. |
| **#101786** – Project‑level skill invocation failure | 1 day (created 2026‑09‑03) | Skills created in a project repo cannot be called from within that project’s session. | Ensure `rpc`/`slash` commands pass the session’s cwd to the skill runtime. |
| **#101756** – MCP OAuth async flow generator leak | 1 day (created 2026‑09‑03) | Leaked generators keep `context.lock` held, causing deadlocks in OAuth flows. | Close the wrapped generator properly; add `aclose()` handling. |

*These items have the highest comment counts or represent critical functionality that remains unaddressed, indicating a need for maintainer prioritization.*

--- 

**End of Digest**.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑09‑03**

---

### 1. Today's Overview
The repository saw a burst of pull‑request activity (21 PRs updated, 18 still open) while only two issues were touched in the last 24 h. No new releases were published. The workflow is dominated by refactor‑ and bug‑fix work, especially around provider contracts, channel adapters, and CI/release‑gate mechanics. Overall project health appears active, with maintainers merging a few safety‑related changes and a large backlog of open contributions awaiting review.

### 2. Releases
- **None** – No new version tags were created today.

### 3. Project Progress (Merged/Closed PRs today)
| PR | Title | Link | What it advances |
|----|-------|------|------------------|
| #2973 | **fix(supply-chain): activate the minimumReleaseAge gate (hoist out of `pnpm:` key)** | <https://github.com/qwibitai/nanoclaw/pull/2973> | Moves the `minimumReleaseAge: 4320` setting to the top level of `pnpm-workspace.yaml`, ensuring the 3‑day delay between publish and install is enforced (addresses a discrepancy noted in `CLAUDE.md`). |

*No other PRs were marked merged/closed with an update timestamp of 2026‑09‑03.*

### 4. Community Hot Topics
| Item | Type | Comments / Reactions | Link | Why it’s drawing attention |
|------|------|----------------------|------|----------------------------|
| #3529 | Issue | 2 comments | <https://github.com/qwibitai/nanoclaw/issues/3529> | Users report that the skill‑refresh process incorrectly treats every channel import as a skill, breaking local adapters and offering no opt‑out. |
| #3701 | Issue | 0 comments | <https://github.com/qwibitai/nanoclaw/issues/3701> | Request to add a gateway‑declared credential lane to `validateSpec` for multi‑tenant proxy deployments. |
| #3492 | PR | (comment count not exposed) | <https://github.com/qwibitai/nanoclaw/pull/3492> | Reactivates the `minimumReleaseAge` gate (similar to #2973) and adds a regression test – a core‑team safety change. |
| #3592 | PR | (comment count not exposed) | <https://github.com/qwibitai/nanoclaw/pull/3592> | Introduces a core‑owned `speed` property for agent groups, touching CLI, configuration, and provider contracts – a visible feature‑direction signal. |
| #3584 / #3588 / #3591 | PRs | (comment count not exposed) | <https://github.com/qwibitai/nanoclaw/pull/3584>, <https://github.com/qwibitai/nanoclaw/pull/3588>, <https://github.com/qwibitai/nanoclaw/pull/3591> | Series of provider‑contract refactors (Codex, OpenCode, instruction rendering) that generate discussion across core‑team and provider areas. |

*Because comment numbers are not supplied in the feed, activity is inferred from update timestamps, label density (multiple area/tags), and the presence of core‑team labels.*

### 5. Bugs & Stability (reported today)
| Severity | Description | Linked Issue/PR | Fix status |
|----------|-------------|-----------------|------------|
| **High** | **Mount‑security bypass** – allowlisted‑extra mount can be circumvented in `validateSpec`. | PR #3680 (fix) | Open – awaiting review |
| **Medium** | **Delivery retries on disconnected adapters** – wasted attempts when `isConnected()` is false. | PR #3703 (fix) | Open |
| **Medium** | **Task run start delayed** – `ncl tasks run` waits for next resync tick instead of starting immediately. | PR #3702 (fix) | Open |
| **Medium** | **Agent `send_card` drops callback actions** – UI reports success but bridge silently removes buttons. | PR #3427 (fix) | Open |
| **Low** | **WhatsApp inbound media staging** – media not placed where container can read it. | PR #3113 (fix) | Open |
| **Low** | **Teams file uploads missing MIME type** – causing rejection. | PR #3674 (fix) | Open |
| **Low** | **Container HTTP MCP server unreachable via gateway** – host‑local address blocked. | PR #3597 (fix) | Open |
| **Low** | **Setup‑mailbox test timeout too aggressive** – spurious failures. | PR #3673 (fix) | Open |

*No crash or regression reports were filed as issues today; the above are all bug‑fix PRs.*

### 6. Feature Requests & Roadmap Signals
| Feature | Source | Link | Implication for next release |
|---------|--------|------|------------------------------|
| **Per‑agent‑group `speed` inference property** | PR #3592 | <https://github.com/qwibitai/nanoclaw/pull/3592> | Enables fine‑grained latency/throughput tuning; likely to land in the upcoming minor version. |
| **Provider contract enforcement (Codex, OpenCode, Host, Setup)** | PRs #3584, #3588, #3585, #3586, #3591 | <https://github.com/qwibitai/nanoclaw/pull/3584> … <https://github.com/qwibitai/nanoclaw/pull/3591> | Standardises provider integration, reducing ad‑hoc code – a foundational step for future plugin ecosystem. |
| **Gateway‑declared credential lane** | Issue #3701 | <https://github.com/qwibitai/nanoclaw/issues/3701> | Would support multi‑tenant proxy deployments; if accepted, could appear in the next release after design review. |
| **AIML API integration** | PR #3573 | <https://github.com/qwibitai/nanoclaw/pull/3573> | Adds a new channel/skill; contingent on skill‑review and testing. |
| **Local‑adapter opt‑out for skill refresh** | Issue #3529 | <https://github.com/qwibitai/nanoclaw/issues/3529> | Addresses a real pain point for downstream forks; likely to be prioritised as a bug‑fix/feature toggle. |

### 7. User Feedback Summary
- **Adapter workflow friction** – Users with custom adapters (Issue #3529) feel blocked by the automatic skill‑refresh validation and request an opt‑out mechanism.  
- **Credential isolation needs** – Operators running many agent groups via a gateway (Issue #3701) want a way to declare per‑group credentials without colliding with the global secret store.  
- **Provider contract clarity** – Numerous refactor PRs indicate a community desire for clearer, versioned provider interfaces (Codex, OpenCode, Host, Setup).  
- **Reliability concerns** – Repeated bug‑fix PRs around delivery retries, media staging, and file MIME types point to intermittent flakiness in channel integrations that users have hit in production.  
- **CI/release safety** – The reactivation of the `minimumReleaseAge` gate (PR #2973 & #3492) shows appreciation for protecting consumers from potentially compromised releases.

Overall, feedback leans toward **stability and extensibility**: users want the core to be more predictable (correct retries, proper adapter handling) while also being flexible enough to support custom adapters, gateway‑based credential models, and new provider integrations.

### 8. Backlog Watch (Long‑running / Unaddressed items)
| Item | Age (as of 2026‑09‑03) | Type | Link | Reason for attention |
|------|----------------------|------|------|----------------------|
| #3113 (WhatsApp inbound media) | ~74 days | PR (bug) | <https://github.com/qwibitai/nanoclaw/pull/3113> | Open since 2026‑07‑21; addresses a media‑handling gap that affects a widely used channel. |
| #3427 (send_card drops callbacks) | ~44 days | PR (bug) | <https://github.com/qwibitai/nanoclaw/pull/3427> | Open since 2026‑08‑21; impacts UI reliability for card‑based interactions. |
| #3573 (AIML API integration) | ~38 days | PR (feature) | <https://github.com/qwibitai/nanoclaw/pull/3573> | Awaiting skill review; could expand ecosystem if merged. |
| #3529 (local adapter skill‑refresh opt‑out) | 39 days | Issue | <https://github.com/qwibitai/nanoclaw/issues/3529> | Directly blocks downstream forks; high impact for custom adapter maintainers. |
| #3701 (gateway credential lane) | 1 day | Issue | <https://github.com/qwibitai/nanoclaw/issues/3701> | New but aligns with a growing multi‑tenant use case; early discussion may shape near‑term roadmap. |
| #2973 (minimumReleaseAge gate) – *already merged* | – | PR (fix) | <https://github.com/qwibitai/nanoclaw/pull/2973> | Recently merged; watch for any fallout in CI or downstream consumption. |

*Items older than ~60 days with no recent comment activity (where visible) are flagged for maintainer triage.*

--- 

**Overall Assessment:**  
NanoClaw is in an active development phase, with a strong focus on tightening provider contracts, fixing delivery/reliability bugs, and reinforcing release safety. The community is signalling clear desires for more granular configuration (speed), better credential isolation for gateway setups, and smoother custom‑adapter workflows. Addressing the longer‑standing open PRs/issues—especially those affecting widely used channels (WhatsApp, Teams) and the skill‑refresh adapter conflict—will likely improve user satisfaction and stabilize the next release train.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest - September 3, 2026

## **Today's Overview**
IronClaw shows significant progress in frontend refactoring and bug resolution today. The project is actively addressing technical debt by removing 170+ `@ts-nocheck` directives from the WebUI v2 frontend, while simultaneously fixing critical tool failure handling that could send models into unrecoverable states. There's a strong emphasis on component standardization and type safety improvements across the codebase.

## **Releases**
No new releases today. This indicates either ongoing development cycles or a staged release process.

## **Project Progress**

### **Merged/Closed PRs Today:**
1. **[#8051](https://github.com/nearai/ironclaw/pull/8051)** - Fixed reply system to ensure only current model call text appears as answer, resolving progressive reply concatenation issues that affected Slack and Telegram responses.

2. **[#8045](https://github.com/nearai/ironclaw/pull/8045)** - Improved CLI smoke tests by requiring actual TCP loopback connections after serve banners, eliminating duplicated connection retry logic.

3. **[#8006](https://github.com/nearai/ironclaw/pull/8006)** - Added durable progressive replies and native Slack Agent UI with provider-neutral reply documents and bounded construction.

4. **[#8050](https://github.com/nearai/ironclaw/pull/8050)** - Stopped cold-compiling Reborn test lanes, implementing stable hermetic Cargo home and push-only shared caches to improve CI efficiency.

5. **[#8042](https://github.com/nearai/ironclaw/pull/8042)** - Fixed CLI serve issues including stderr handling, binding before banners, and critical gate mutant selection.

### **Advancing Work:**
- **[#8039](https://github.com/nearai/ironclaw/pull/8039)** - Typed 64 production components, hooks, pages, and authentication payloads
- **[#8038](https://github.com/nearai/ironclaw/pull/8038)** - Added shared API types and validated frontend boundaries
- **[#8040](https://github.com/nearai/ironclaw/pull/8040)** - Typed frontend test infrastructure, removing all 94 test-side `@ts-nocheck` directives

## **Community Hot Topics**

### **Most Active Discussions:**

1. **[#8041](https://github.com/nearai/ironclaw/issues/8041)** - Critical tool failure bug where incorrect `FailureKind` variants send models to wrong recovery paths. Status: OPEN, 0 comments

2. **[#8032](https://github.com/nearai/ironclaw/issue/8032)** - Massive `ts-nocheck` debt elimination (170 files, 61,800 lines) exposing 1,354 new diagnostics. Status: OPEN, 0 comments

3. **[#8006](https://github.com/nearai/ironclaw/pull/8006)** - Major Slack Agent UI implementation with durable progressive replies. Status: CLOSED

### **Underlying Needs Analysis:**
- **Type Safety Focus:** Multiple concurrent efforts to eliminate `@ts-nocheck` debt suggest a strong push for code reliability
- **Component Standardization:** Systematic migration of native controls to shared design system components
- **Performance Optimization:** Stream processing improvements and CI efficiency gains

## **Bugs & Stability**

### **Critical Issues (Severity Ranked):**

1. **#8041 - HIGH** - Tool failure kind mapping error causes model to go to incorrect recovery paths. This affects fundamental tool interaction reliability and could block models from recovering from errors.

2. **#7985 - MEDIUM** - Missing document reporting as domain failure instead of malformed request, causing incorrect error handling. Status: OPEN

3. **#7989 - MEDIUM** - `list_dir` failures don't include path information, preventing models from diagnosing path issues. Status: OPEN

4. **#7991 - LOW** - Pre-push gate failures on macOS due to GNU extension usage in tests. Status: OPEN

### **Resolution Status:**
- Several critical bugs (#8051, #8045, #8006, #8042) have been fixed in closed PRs
- New fixes for LLM caching gates (#8044) and performance (#8043) are in progress

## **Feature Requests & Roadmap Signals**

### **Emerging Patterns:**
1. **UI Component Standardization** - Multiple issues focus on migrating native controls to shared design system components (SettingsField, SearchField, form components)

2. **Frontend Type Safety** - Comprehensive TypeScript typing for production components, test infrastructure, and API boundaries

3. **Performance Optimization** - Stream text update coalescing and CI pipeline improvements

### **Roadmap Predictions:**
- **WebUI v2 Type Safety:** Likely to be major focus with 170+ @ts-nocheck directives being eliminated
- **Component Library Consolidation:** Shared Input, SelectMenu, SearchField, InlineNotice adoption across all pages
- **Improved Error Handling:** Better tool failure recovery and memory service error reporting

## **User Feedback Summary**

### **Primary Pain Points:**
1. **Tool Error Recovery:** Users experiencing models getting stuck due to incorrect failure kind mapping
2. **TypeScript Friction:** High number of @ts-nocheck directives causing development friction
3. **Component Inconsistency:** Native controls vs shared design system components causing visual and behavioral inconsistencies

### **Use Cases Driving Changes:**
- **Slack/Telegram Integration:** Improved reply system needed for agent UI
- **Automation Workflows:** Standardized form components and feedback messages
- **Developer Experience:** Better CI reliability and TypeScript support

### **Satisfaction Indicators:**
- Strong focus on developer experience through TypeScript improvements
- Systematic approach to UI/UX consistency
- Performance optimization efforts show responsiveness to user concerns

## **Backlog Watch**

### **High-Priority Unresolved Items:**

1. **#8041 - Critical (No Response)** - Tool failure recovery bug requires immediate attention as it affects core model functionality

2. **WebUI v2 Type Safety** - Massive @ts-nocheck debt (170 files) still partially unresolved despite significant progress

3. **CI Cross-Platform Reliability** - macOS pre-push gate failures and serve smoke test flakiness persisting

4. **Memory Service Error Handling** - Missing document reporting still incorrectly classified as input error

5. **Frontend API Boundaries** - Shared API types implementation still in progress despite initial work

### **Maintainer Attention Needed:**
- **Issue #8041:** Requires immediate investigation of FailureKind mapping logic
- **CI Pipeline:** Cross-platform testing issues affecting macOS and other environments
- **Type Safety Backlog:** Remaining @ts-nocheck directives and type safety gaps
- **Performance Debt:** Stream processing and memory service optimization efforts

The project shows strong forward momentum but has critical stability issues that need resolution before further feature expansion can be safely undertaken.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest – 2026-09-03

## 1. Today's Overview

The LobsterAI project maintained steady activity over the past 24 hours, with **8 issues updated** (2 open, 6 closed) and **10 pull requests updated**. No new releases were published since the last snapshot. The team focused on stabilizing core functionality—particularly around IM concurrency, file uploads, and session management—while addressing several high‑priority bugs reported by users. Overall, the project shows healthy momentum with multiple fixes targeting stability and usability improvements.

## 2. Releases

No new releases were published in the period covered. The latest stable version remains at **2026.4.3**, though ongoing work continues to address regression risks and enhance reliability.

## 3. Project Progress

### Merged / Closed Pull Requests (last 24h)
- **#1090** – Added per‑session execution serialization to prevent duplicate session creation and message duplication when `CoworkRunner.startSession()`/`continueSession()` is called concurrently. Introduced `sessionRunPromise` tracking and `awaitPreviousRun()` to ensure only one in‑flight run exists per `sessionId`.  
  🔗 [PR #1090](https://github.com/netease-youdao/LobsterAI/pull/1090)

- **#1100** – Implemented per‑conversation async mutex (`conversationLocks`) to serialize message processing within the same IM session, resolving the race condition that caused duplicate sessions and lost responses during concurrent IM handling.  
  🔗 [PR #1100](https://github.com/netease-youdao/LobsterAI/pull/1100)

- **#1101** – Fixed a race condition where switching models across providers (e.g., Anthropic → DeepSeek) could trigger immediate “Model service call failed” errors. The root cause was a fire‑and‑forget `configService.updateConfig()` call that didn’t wait for the backend to respond; the fix ensures proper synchronization before sending messages after a provider switch.  
  🔗 [PR #1101](https://github.com/netease-youdao/LobsterAI/pull/1101)

- **#1102** – Added a tooltip to the toggle button controlling the status label vs. more‑menu view, providing clear action verbs (“click to enable / click to disable”) and supporting i18n keys for Chinese and English.  
  🔗 [PR #1102](https://github.com/netease-youdao/LobsterAI/pull/1102)

- **#1103** – Introduced a read‑only Docker daemon probe (`checkDockerForSandbox()`) to help users verify whether their environment supports OpenClaw sandbox‑style tools without altering execution‑mode settings.  
  🔗 [PR #1103](https://github.com/netease-youdao/LobsterAI/pull/1103)

- **#1125** – Extended session search to support full‑text search across message content (not just session titles) and added intelligent keyword highlighting with contextual summaries. This addresses the long‑tail difficulty of finding specific conversations among many historical sessions.  
  🔗 [PR #1125](https://github.com/netease-youdao/LobsterAI/pull/1125)

- **#2597** – Reverted the in‑app browser feature back to its pre‑2026.8.31 state after determining it belonged in a later release window.  
  🔗 [PR #2597](https://github.com/netease-youdao/LobsterAI/pull/2597)

- **#2590** – Security hardening: added boundary checks for MCP `stdio` commands and rendered URLs to prevent shell injection and unauthorized external calls.  
  🔗 [PR #2590](https://github.com/netease-youdao/LobsterAI/pull/2590)

- **#2596** – Enhanced analytics to track chat login CTA clicks throughout the onboarding flow, improving usage telemetry.  
  🔗 [PR #2596](https://github.com/netease-youdao/LobsterAI/pull/2596)

### Open Pull Requests (still pending review)
- **#1090** – Already opened above (in progress).  
- **#1100** – In progress, targeting the concurrent IM message problem.  
- **#1101** – In progress, fixing cross‑provider model switch failures.  
- **#1102** – In progress, adding accessibility tooltips.  
- **#1103** – In progress, adding sandbox readiness probes.  
- **#1125** – In progress, expanding session search capabilities.  
- **#2597** – Closed.  
- **#2590** – In progress, security hardening for MCP interfaces.

## 4. Community Hot Topics

| Topic | Status | Impact | Link |
|-------|--------|--------|------|
| **Concurrent IM Message Handling (#1099)** | **OPEN** – Critical | Duplicate session creation and message loss under rapid multi‑message bursts. Multiple PRs (#1090, #1100) aim to resolve via per‑session locking and serialized execution. | [Issue #1099](https://github.com/netease-youdao/LobsterAI/issue/1099) |
| **File Upload Recognition (#1561)** | CLOSED | Users reported that dragged files were not recognized until after they were manually attached. The bug stems from a change in how files are stored and searched. | [Issue #1561](https://github.com/netease-youdao/LobsterAI/issue/1561) |
| **Version 2026.4.3 Content Repetition (#1566)** | CLOSED | All inputs returned identical responses despite different prompts. Likely a caching or state‑reset issue in the newer release. | [Issue #1566](https://github.com/netease-youdao/LobsterAI/issue/1566) |
| **Gateway Restart Resilience (#1551)** | CLOSED | Network fluctuations caused repeated gateway restarts, temporarily halting operations. The system recovers automatically once connectivity stabilizes. | [Issue #1551](https://github.com/netease-youdao/LobsterAI/issue/1551) |
| **Traffic Package Service Terms (#1563)** | CLOSED | Misleading wording in the traffic package service agreement. Documentation correction completed. | [Issue #1563](https://github.com/netease-youdao/LobsterAI/issue/1563) |
| **MD→PDF Conversion Artifacts (#1096)** | OPEN | Online Markdown-to-PDF conversion produced unwanted membership frames and poor rendering. | [Issue #1096](https://github.com/netease-youdao/LobsterAI/issue/1096) |
| **Cross‑Provider Model Switching (#1101)** | OPEN | After switching models (e.g., Anthropic → DeepSeek), immediate “model service call failed” errors occurred due to unawaited config updates. | [PR #1101](https://github.com/netease-youdao/LobsterAI/pull/1101) |

The most pressing technical debt appears to be the **concurrent IM messaging** bug, which has been actively addressed by two PRs (#1090, #1100). File upload recognition (#1561) and version‑specific content repetition (#1566) remain resolved but should be monitored as part of the ongoing maintenance cycle.

## 5. Bugs & Stability

| Severity | Bug | Description | Status / Fix |
|----------|-----|-------------|--------------|
| **High** | #1561 – File upload not recognized | Dragged files were ignored until manual attachment; likely a storage‑path mapping issue. | Closed |
| **High** | #1566 – Version 2026.4.3 returns identical output | Regardless of input, the model produced the same response. Root cause traced to internal state reset/cache. | Closed |
| **Medium** | #1099 – Concurrent IM message handling | Two messages arriving simultaneously triggered separate session creations, leading to duplicate sessions and lost responses. | **In Progress** – PR #1090 (serialization) + PR #1100 (conversation locks) |
| **Medium** | #1551 – Gateway restart loops | Network instability caused repeated gateway restarts; auto‑recovery works after stabilization. | Closed |
| **Low** | #1563 – Service terms typo | Minor documentation error in traffic package service agreement. | Closed |
| **Open** | #1096 – MD→PDF rendering issues | Online converter adds unwanted membership boxes and produces suboptimal PDF layout. | Open – PR #1125 aims to improve the conversion pipeline |
| **Open** | #1101 – Cross‑provider model switch failure | Immediate “model service call failed” after switching models due to fire‑and‑forget config updates. | **In Progress** – PR #1101 |

Overall, the stability picture is positive: critical concurrency bugs have been prioritized and are being addressed, while minor UI/UX and documentation issues are either resolved or queued for future refinement.

## 6. Feature Requests & Roadmap Signals

- **Full‑text session search** (PR #1125) – A major usability improvement enabling users to locate any past conversation by searching message content rather than just titles. Expected in upcoming releases.
- **Docker sandbox readiness probe** (PR #1103) – Helps users validate their local environments before running heavy workloads; aligns with OpenClaw’s container‑first philosophy.
- **Enhanced analytics** (PR #2596) – Tracks chat login CTA clicks, providing deeper insights into user engagement flows.
- **Tooltips for UI controls** (PR #1102) – Improves discoverability of interactive elements like the status‑toggle switch.
- **Security hardening for MCP** (PR #2590) – Prevents shell injection and unauthorized external URL execution, strengthening the platform’s attack surface.

These signals suggest a roadmap focused on **reliability (concurrency, cross‑provider resilience)**, **usability (search, tooltips, analytics)**, and **security (MCP isolation)**.

## 7. User Feedback Summary

Users have expressed frustration primarily around three areas:

1. **Reliability of IM interactions** – The concurrent message handling bug (#1099) was a hot topic, with reports of duplicate sessions and missing responses. The community responded quickly with targeted PRs, indicating strong user awareness and demand for stability.
2. **File handling** – The file‑upload recognition issue (#1561) affected workflow efficiency; once fixed, users noted improved productivity.
3. **Content consistency** – The version‑specific repetition bug (#1566) caused confusion when expecting varied outputs, prompting a thorough code review.

General sentiment leans toward **satisfaction** regarding the recent fixes, especially around concurrency and file handling, but there is clear interest in **long‑term improvements** such as better search capabilities and robust cross‑provider transitions.

## 8. Backlog Watch

| Item | Priority | Owner | Notes |
|------|----------|-------|-------|
| **Issue #1099 – Concurrent IM message handling** | High | Team | Two PRs in progress; monitor for merge success and regression testing. |
| **Issue #1561 – File upload recognition** | Medium | Maintainers | Previously closed; consider adding automated smoke tests to prevent regression. |
| **Issue #1566 – Version 2026.4.3 content repetition** | Low | QA | Verify that the fix does not introduce side effects in other modules. |
| **Issue #1096 – MD→PDF rendering artifacts** | Medium | Design/Dev | PR #1125 may require additional testing across Markdown variants. |
| **PR #1101 – Cross‑provider model switch** | High | Backend | Ensure the fix is tested across all supported providers (Anthropic, DeepSeek, etc.). |
| **PR #2590 – MCP stdio security hardening** | High | Security | Must pass all existing security scans and penetration test criteria. |

**Action Items:**
- Follow up on PR #1090 and #1100 to confirm closure and integration testing.
- Monitor issue #1099 resolution and verify no new concurrency regressions appear.
- Review PR #1125 for potential impact on downstream components (rendering, export).
- Schedule a retrospective on the recent stability improvements to capture lessons learned.

--- 

*Prepared on 2026-09-03 based on GitHub activity from LobsterAI (github.com/netease-youdao/LobsterAI).*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑09‑03**

---

### 1. Today's Overview  
The repository shows a burst of short‑term activity: two new bug/feature issues and three open pull requests were created or updated within the last 24 hours, while no issues or PRs were closed. Three version tags (20260902.01 – 20260902.03) were released today, indicating rapid patch‑level iteration. Overall, the project is actively developing but currently has no merged changes; all work-in-progress remains open for review.

### 2. Releases  
| Release | Tag | Date | Notable Implications* |
|---------|-----|------|-----------------------|
| 20260902.01 | `moltis 20260902.01` | 2026‑09‑02 | Baseline for the day's work; includes the initial state before today's PRs. |
| 20260902.02 | `moltis 20260902.02` | 2026‑09‑02 | Likely incorporates the dependency bump (browserslist) from PR #1256. |
| 20260902.03 | `moltis 20260902.03` | 2026‑09‑02 | Probably contains the hook‑lifecycle fixes and feature additions from PRs #1257 and #1253. |

\*Because no release notes were provided in the data, the above mapping is inferred from the timing of the PRs and the semantic versioning pattern (patch‑level increments). No breaking changes are evident from the version numbers; users can safely upgrade to the latest patch (20260902.03) for the most recent fixes and features.

### 3. Project Progress  
- **Merged/Closed PRs today:** 0 (all three PRs remain open).  
- **Open PRs indicating progress:**  
  - **#1257** – `fix(hooks): complete lifecycle dispatch` – adds missing `AgentEnd`, `MessageSending`, `MessageSent` dispatches and introduces an optional `tool_call_id` to correlate tool‑call events.  
  - **#1253** – `feat(reasoning): add max effort level` – extends the `ReasoningEffort` schema with a `max` value and updates UI/model‑suffix handling.  
  - **#1256** – `chore(deps-dev): bump browserslist` – updates the frontend tooling dependency; no functional impact.  

No features have been merged yet, but the open PRs collectively address the day’s reported bugs and feature requests.

### 4. Community Hot Topics  
All tracked items have **zero comments and reactions**, reflecting limited external discussion at this moment. The most‑viewed items (by recency) are:  

- **Issue #1255** – Bug: `AgentEnd`, `MessageSending`, `MessageSent` hooks never dispatched.  
- **Issue #1254** – Feature request: stable tool‑call ID in hook payloads.  
- **PR #1257** – Implements fixes for both #1255 and #1254.  

The lack of commentary suggests that the activity is primarily driven by core contributors (e.g., GTanger) rather than community debate.

### 5. Bugs & Stability  
| Bug ID | Summary | Severity | Fix PR? | Link |
|--------|---------|----------|---------|------|
| #1255 | Declared hooks (`AgentEnd`, `MessageSending`, `MessageSent`) are never dispatched, breaking lifecycle expectations. | Medium (affects reliability of hook‑based extensions) | Yes – PR #1257 adds the missing dispatches. | [#1255](https://github.com/moltis-org/moltis/issues/1255) • [#1257](https://github.com/moltis-org/moltis/pull/1257) |

No crash or regression reports were filed today beyond this hook‑dispatch issue.

### 6. Feature Requests & Roadmap Signals  
| Request ID | Summary | Related PR | Likelihood of inclusion in next version |
|------------|---------|------------|----------------------------------------|
| #1254 | Add a stable `tool_call_id` to `BeforeToolCall`/`AfterToolCall` payloads to enable end‑to‑end correlation. | PR #1257 (adds optional `tool_call_id`) | **High** – the PR directly implements the request and is already open. |
| #1253 (via PR) | Expose a `max` effort level for reasoning models, allowing users to specify the upper bound of reasoning depth. | PR #1253 | **High** – the feature is coded and awaiting review; aligns with recent reasoning‑focused work. |

Given that both requests have corresponding open PRs, they are strong candidates for inclusion in the next patch release (likely 20260903.x).

### 7. User Feedback Summary  
- **Pain points:**  
  - Hooks not firing (#1255) prevents developers from reliably reacting to agent lifecycle events.  
  - Missing tool‑call identifiers (#1254) hampers debugging and tracing of tool interactions.  
  - Desire for granular control over reasoning effort (#1253) indicates users want to tune model behavior for cost/quality trade‑offs.  
- **Satisfaction:** No explicit praise or dissatisfaction was recorded; feedback is limited to constructive issue/PR submissions from a single contributor.  
- **Use cases:** The changes target extension developers building custom agent workflows and power users needing deterministic tool‑call tracking.

### 8. Backlog Watch  
All open items are **very recent** (created ≤ 2 days ago) and each has at least one linked PR addressing it. Consequently, there are no stale, high‑priority issues or PRs awaiting maintainer attention at this time. The project’s backlog appears healthy, with rapid triage and prototyping underway.

---

**Overall Health:**  
Moltis is in an active development phase, with rapid patch releases and a clear focus on stabilizing the hook system and extending reasoning capabilities. While community engagement is currently low, the core team is promptly turning reported bugs and feature requests into actionable code, suggesting a responsive maintenance cycle. Continued monitoring of PR review speed and external contributor involvement will be important as the project matures.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑09‑03**

---

### 1. Today’s Overview  
ZeroClaw is experiencing a burst of high‑priority RFC activity and a handful of critical bug fixes. Fifty issues and fifty pull requests were updated in the last 24 h, with the majority of issues remaining open and marked “high risk.” No new releases were published, indicating the project is in an active development sprint rather than a stabilization phase.

### 2. Releases  
*None* – there are no new versioned releases to report.

### 3. Project Progress  
- **Merged/Closed PRs:** 0 PRs were merged or closed today (all 50 PRs remain open).  
- **Feature Advances:** Several RFCs moved to “accepted” or “in‑progress” status, including decoupling memory lifecycle from storage back‑ends (#6850) and introducing granular sandbox policies (#6996).  
- **Bug Fixes:** Critical bugs affecting security delegation (#10165) and web‑dashboard session termination (#8559) were updated, but corresponding fix PRs have not yet been landed.

### 4. Community Hot Topics  
| Issue / PR | Comments | 👍 | Link | Core Need |
|------------|----------|----|------|-----------|
| **#9487** – *Runtime‑owned conversation sessions & transport surface adapters* | 32 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9487> | Establish clear ownership of conversation‑session lifecycles and unify transport adapters. |
| **#6850** – *Decouple memory lifecycle policy from storage back‑ends* | 25 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/6850> | Separate durable storage concerns from higher‑level memory management to enable reusable policies. |
| **#6996** – *Granular sandbox policy (filesystem & network)* | 22 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/6996> | Consolidate two drifting filesystem‑policy layers into a single, agent‑driven sandbox. |
| **#9103** – *Separate authoritative memory storage from optional enrichment connectors* | 19 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9103> | Clarify the boundary between core memory and enrichment connectors. |
| **#8692** – *Maintainer decision queue for RFCs & design issues* | 14 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8692> | Provide a transparent, maintainer‑driven decision pipeline for design proposals. |

These issues dominate discussion volume and reflect a strong community focus on **security boundaries, memory management, and session ownership**—areas that directly impact safety and scalability.

### 5. Bugs & Stability  
| Severity | Issue | Summary | Link | Fix PR (if any) |
|----------|-------|---------|------|-----------------|
| **S0** (critical) | **#10165** – *Independent delegate bypasses `block_high_risk_commands`* | A high‑risk command (e.g., `rm`) succeeds when executed via an independent delegate even when the delegate’s risk profile blocks such commands. | <https://github.com/zeroclaw-labs/zeroclaw/issues/10165> | **#10188** (enforcement of independent delegate approval policy) – still open. |
| **S1** (workflow blocked) | **#8559** – *Agents stop work when exiting chat window in web dashboard* | Exiting a chat session aborts the agent loop, preventing ongoing tasks. | <https://github.com/zeroclaw-labs/zeroclaw/issues/8559> | No fix PR yet; work in progress. |
| **S2** (degraded behavior) | **#10523** – *Bootstrap file truncation at 6000 chars invisible to operator* | `compact_context` truncates agent workspace files at 6 k characters, hiding the loss from users. | <https://github.com/zeroclaw-labs/zeroclaw/issues/10523> | No fix PR yet. |
| **S2** (degraded behavior) | **#10068** – *Interactive agent session caps context at 32k tokens despite higher `max_context_tokens`* | Session context is artificially limited to 32 k tokens, ignoring configuration. | <https://github.com/zeroclaw-labs/zeroclaw/issues/10068> | No fix PR yet. |

**Ranking by severity:** S0 > S1 > S2. The most critical issue (#10165) already has a dedicated fix PR (#10188) that remains open, indicating a pending security patch.

### 6. Feature Requests & Roadmap Signals  
- **Session‑persistence ownership** (#9600) and **maintainer decision queue** (#8692) suggest a push toward clearer responsibility boundaries and governance—likely to be bundled in the next minor release.  
- **Runtime‑owned conversation sessions** (#9487) and **WASM plugin observer subscriptions** (#7822) indicate an ongoing effort to make the runtime more modular and observable, which may shape the upcoming 2026‑Q4 roadmap.  
- **Granular sandbox policies** (#6996) and **Web‑bundle/daemon compatibility** (#9975) point to heightened security and deployment‑flexibility concerns that are likely to be addressed before the next stable release.

### 7. User Feedback Summary  
- **Context Management:** Users report unexpected truncation of bootstrap files and session context caps, causing loss of information and reduced usability.  
- **Session Lifecycle:** Exiting the web dashboard halts agent activity, leading to workflow interruptions.  
- **Security Delegation:** Independent delegates bypassing risk‑profile restrictions raise concerns about data loss and privilege escalation.  
- **Overall Satisfaction:** While the community is highly engaged (many comments, high‑risk labels), the frequency of critical bugs and pending security fixes suggests a mix of enthusiasm and frustration over stability.

### 8. Backlog Watch  
| Issue / PR | Last Update | Comments | Risk | Why It Needs Attention |
|------------|-------------|----------|------|------------------------|
| **#9487** – *Runtime‑owned conversation sessions* | 2026‑09‑02 | 32 | High | Lacks a concrete ownership model; pending decision may block related RFCs. |
| **#6850** – *Decouple memory lifecycle* | 2026‑09‑03 | 25 | High | Still “accepted” but no implementation progress; could delay memory‑related features. |
| **#6996** – *Granular sandbox policy* | 2026‑09‑03 | 22 | High | High‑risk security impact; needs maintainer review to avoid divergent implementations. |
| **#9103** – *Separate authoritative memory storage* | 2026‑09‑03 | 19 | High | Accepted but still open; may affect upcoming memory‑enrichment work. |
| **#8692** – *Maintainer decision queue* | 2026‑09‑03 | 14 | Medium | Decision‑making bottleneck; unclear if maintainers are actively triaging. |

These issues have sustained discussion, high risk tags, and no clear resolution path, making them prime candidates for maintainer focus in the coming weeks.

--- 

*All links point to the official GitHub repository (github.com/zeroclaw-labs/zeroclaw). The digest reflects data available up to 2026‑09‑03.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*