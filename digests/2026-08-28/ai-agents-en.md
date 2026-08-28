# OpenClaw Ecosystem Digest 2026-08-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-28 08:01 UTC

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

## **OpenClaw Project Digest – 2026‑08‑28**

### 1. Today's Overview
OpenClaw is in a very active but restless state today. **500 issues and 500 PRs were updated** across the repo, indicating a high level of development activity and a sizable backlog of work in progress. **No new official releases** were pushed, leaving the beta channel (v2026.

---

## Cross-Ecosystem Comparison



# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-28 | **Scope:** 13 open-source AI agent / personal assistant projects

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape in late August 2026 is characterized by a **bimodal distribution**: a handful of projects (OpenClaw, NanoBot, IronClaw, CoPaw, ZeroClaw) are experiencing sustained high-velocity development with coordinated refactoring and architecture-level RFCs, while several smaller or newer projects (NullClaw, TinyClaw, ZeptoClaw) show zero recent activity. The most active projects share a common preoccupation: **provider abstraction refactoring**, **memory system modularization**, and **multi-platform channel reliability** — reflecting a field-wide transition from "works on my machine" to "production-hardened agent runtime." Releases are sparse across the board, with most teams accumulating changes behind feature branches rather than cutting stable versions, suggesting the ecosystem is still converging on architectural patterns.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed (24h) | Latest Release | Health Score |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | — | None (beta v2026) | ★★★★☆ |
| **NanoBot** | 2 | 24 | 9 | None | ★★★★★ |
| **Hermes Agent** | — | — | — | — | Unknown |
| **PicoClaw** | 2 | 7 | 6 | None | ★★★★☆ |
| **NanoClaw** | 11 | 50 | 4 | None | ★★★☆☆ |
| **NullClaw** | 0 | 0 | 0 | — | ★☆☆☆☆ |
| **IronClaw** | 30 | 48 | 31 | None | ★★★★★ |
| **LobsterAI** | 7 | 13 | 13 | **2026.8.26** ✅ | ★★★★★ |
| **TinyClaw** | 0 | 0 | 0 | — | ★☆☆☆☆ |
| **Moltis** | 0 | 2 | 2 | **20260827.01** ✅ | ★★★☆☆ |
| **CoPaw (QwenPaw)** | 32 | 50 | 23 | None (v2.2.0 in prep) | ★★★★★ |
| **ZeptoClaw** | 0 | 0 | 0 | — | ★☆☆☆☆ |
| **ZeroClaw** | 23 | 50 | 2 | None (v0.8.5 stabilization) | ★★★★☆ |

**Health Score Rubric:** ★★★★★ = Active, disciplined, low critical bug load | ★★★★☆ = Active with manageable issues | ★★★☆☆ = Active but carrying significant technical debt or bug burden | ★☆☆☆☆ = Dormant

**Key observations:**
- Only **LobsterAI** and **Moltis** shipped releases in the observed window.
- **OpenClaw's** 500/500 issue/PR figure is an outlier — likely a bulk backfill or sync event rather than organic daily activity.
- **IronClaw** and **CoPaw** lead in *meaningful* merges (31 and 23 respectively), indicating actual code landing rather than just review churn.
- Three projects (NullClaw, TinyClaw, ZeptoClaw) are effectively dormant.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Reference Architecture:** As the core reference implementation, OpenClaw implicitly sets conventions that other projects (notably LobsterAI, which integrates an "OpenClaw memory module") adopt or align with.
- **Scale of Engagement:** Even if discounted for bulk updates, its issue/PR velocity exceeds all competitors, suggesting the largest contributor base and deepest community feedback loops.
- **Beta Channel Strategy:** Operating on a beta channel (v2026) signals confidence in iterative, continuous delivery — a discipline that slower-moving peers could learn from.

### Technical Approach Differences
- OpenClaw appears to be the **canonical implementation** against which forks and derivatives measure themselves. Its architecture choices (provider contracts, memory journaling, tool execution pipelines) become *de facto* standards.
- Unlike ZeroClaw's explicit RFC process or IronClaw's tenant-scoped telemetry model, OpenClaw's governance model is less formalized — it moves fast by design, accepting the restlessness noted in its digest.

### Community Size Comparison
- OpenClaw likely has the largest user and contributor base, evidenced by its role as a reference repo and the LobsterAI integration. However, **CoPaw** (QwenPaw) shows comparable or higher *issue engagement quality* — its #7318 multi-tenant Hub discussion generated 10 substantive comments, indicating an enterprise-oriented community.
- **ZeroClaw** has the most structured community interaction (RFC review process with named maintainers), but a narrower contributor pool concentrated among a few reviewers.

---

## 4. Shared Technical Focus Areas

Several cross-cutting requirements emerge across 3+ projects:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Provider Abstraction & Multi-Model Routing** | NanoClaw, ZeroClaw, CoPaw, NanoBot, IronClaw | Codex/OpenCode/Cursor/Gemini provider contracts; per-group model overrides; multi-model per-provider profiles; fallback chain reliability |
| **Memory System Modularization** | NanoBot, IronClaw, ZeroClaw, OpenClaw | Pluggable recall backends; explicit recall vs. implicit archival; cross-conversation durable memory; memory lifecycle policy decoupled from storage |
| **Context Management & Overflow Recovery** | IronClaw, ZeroClaw, NanoClaw | Compaction barriers; context projection cost optimization; loop-level overflow recovery not shadowed by wrapper truncation; budget tied to model window ratio |
| **Channel/Platform Reliability** | NanoClaw, PicoClaw, CoPaw, ZeroClaw | Discord attachment handling; Telegram MarkdownV2 edge cases; WhatsApp image size limits; IRC long-message reassembly; Feishu message streaming |
| **Security & Permission Hardening** | NanoBot, Moltis, ZeroClaw, PicoClaw | Path traversal in session handling; sandbox image validation; temp file permission hygiene; auth gate persistence |
| **UI/UX Consistency & Transparency** | NanoBot, CoPaw, PicoClaw, ZeroClaw | Model retry visibility; approval card state preservation; Herdr pane full-screen layout; laggy chat panes with large histories |

**Most urgent shared need:** The **provider contract layer** is being reified independently by at least four projects (NanoClaw's `zvi-fried` series, ZeroClaw's wire protocol RFC, CoPaw's model discovery restoration, NanoBot's fallback refactoring). A shared interface specification would reduce duplicated effort and improve cross-project contributor mobility.

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architecture Signature |
|---|---|---|---|
| **OpenClaw** | Reference implementation, broad coverage | Ecosystem builders, adopters | Canonical monolith with extension points |
| **NanoBot** | Memory & provider reliability | Developers prioritizing stability | Refactored agent-runner / memory-store separation |
| **NanoClaw** | Multi-provider agent runtime | Power users running multiple LLM backends | Provider contract reification; Codex/OpenCode native |
| **IronClaw** | Memory systems, notifications, telemetry | Enterprise / multi-tenant deployments | Tenant-scoped BI telemetry; durable inbox; sandboxed executors |
| **CoPaw (QwenPaw)** | Desktop + mobile + Hub | Qwen/Alibaba ecosystem; team deployment | Tauri desktop, Expo React Native, multi-tenant Hub |
| **ZeroClaw** | Architectural rigor, WASM plugins | Platform builders, research community | RFC-governed; WASM Component Model; weekly cuts alongside milestone freeze |
| **LobsterAI** | Desktop distribution, installer UX | Consumer / SMB desktop users | Windows installer hardening; library UX; OpenClaw memory integration |
| **PicoClaw** | Lightweight Go-based agent | IRC/embedded deployments | Go toolchain; AWS/Anthropic/Matrix SDK maintenance |
| **Moltis** | Security & API compliance | Operators running sandboxed agents | Sandbox image validation; OpenAI schema strictness |

**Key Differentiators:**
- **ZeroClaw** is the only project with a formal RFC process reaching Rev. 9–15 on core architecture documents — it is building for *long-term platform stability*, not just shipping features.
- **CoPaw** is the only project actively building a **native mobile client** (Expo/React Native, PR #7378 draft), positioning it as the most user-facing contender.
- **IronClaw** uniquely embeds **tenant-scoped BI telemetry** and durable notification infrastructure, making it the most "enterprise-ready" from an observability standpoint.
- **LobsterAI** is the only project that shipped a release in the window and is the only one with a consumer-facing **installer contract** (silent-install zero-UI specification), suggesting a distribution-first strategy.

---

## 6. Community Momentum & Maturity

### Rapid Iteration (High Velocity, High Quality)
- **IronClaw** — 31 PRs merged, focused on context overflow recovery, memory admission, and notification durability. Strong maintainer coordination across notifications/MCP/learning workstreams.
- **CoPaw (QwenPaw)** — 23 PRs merged, Python 3.13/TLS upgrade, mobile client prototype, v2.2.0 on track. Highest community engagement (10-comment Hub discussion).
- **NanoBot** — 9 PRs merged with clean separation of concerns (provider fallback, agent runner, memory decoupling). Low bug burden, high code quality.

### Active but Uneven
- **NanoClaw** — High PR volume (50) but only 4 merged; carries 4+ high-severity user-facing bugs (Discord approval cards broken, WhatsApp image wedging, session starvation, Telegram MarkdownV2). The provider refactor is promising but not yet translating to user value.
- **ZeroClaw** — 50 PRs updated but only 2 merged; bottlenecked by RFC ratification and a small reviewer pool. Stabilization window (v0.8.5, closes Aug 30) is constraining merges.
- **OpenClaw** — Extreme activity numbers but unclear what is merging; beta channel suggests pre-release churn.

### Stabilizing / Maintenance
- **LobsterAI** — Shipped 2026.8.26 with 13 merged PRs concentrated on release stabilization. Two critical open issues (#2561 data loss, #2562 credit drain) need urgent triage.
- **PicoClaw** — Modest but focused; dependency maintenance and a single UI performance PR. No critical bugs.
- **Moltis** — Quiet; two security/compliance PRs merged, one release cut. Stable but low momentum.

### Dormant
- **NullClaw, TinyClaw, ZeptoClaw** — No activity in 24h. Unknown viability; may be abandoned or pre-release.

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **Provider Fragmentation Is the Dominant Engineering Challenge**
   Every active project is reifying provider contracts. Community demand for "any model," "per-group model override," and "multi-model per provider profile" signals that users are no longer satisfied with single-vendor锁定. The emerging standard is a **provider abstraction layer with fallback chains, model aliases, and per-tenant routing** — and no project has fully solved this yet.

2. **Memory Is Becoming a Differentiator, Not a Commodity**
   Pluggable recall backends (NanoBot), cross-conversation fact promotion (IronClaw), explicit recall semantics (NanoBot), and memory lifecycle RFCs (ZeroClaw) all point to memory as the next battleground. Users expect persistent, composable memory across sessions and channels — projects that treat memory as an afterthought are falling behind.

3. **Channel Reliability Is a Trust Issue**
   The cluster of high-severity channel bugs (Discord approval cards, WhatsApp image wedging, Telegram MarkdownV2 failures, IRC message fragmentation) shares a common pattern: **silent failure with no user-visible error**. Community sentiment is that "the agent appears to work while data is lost." Projects that solve channel reliability first will gain significant user trust.

4. **Architecture Governance Is a Bottleneck, Not a Luxury**
   ZeroClaw's RFC process (#6850 open for 98+ days, #8692 decision queue tracker) and NanoClaw's coordinated PR series demonstrate that **architecture decisions are the rate-limiting step** for scaling contributor velocity. Projects with ad-hoc governance are accumulating technical debt faster than they can refactor.

5. **Mobile and Multi-Platform Deployment Is Emerging**
   CoPaw's mobile client prototype (#7378) and the multi-tenant Hub discussion (#7318) indicate that users want agents on all their devices with team-level management. Projects confined to desktop or single-user models face a narrowing market.

6. **Security and Data Safety Are Now Table Stakes**
   Path traversal (NanoBot), sandbox image validation (Moltis), temp file permissions (ZeroClaw), and upgrade data loss (LobsterAI) show that the community has zero tolerance for silent data leakage or loss. Security is no longer a "nice-to-have" — it's a release gate.

### Value for AI Agent Developers

| Signal | Developer Takeaway |
|---|---|
| Provider contract reification across 4+ projects | Invest in a standardized provider interface; contributor mobility between projects will increase |
| Memory modularization (pluggable backends, explicit recall) | Memory SDK/API is the next greenfield; early contribution here has high leverage |
| Channel reliability = trust | Testing infrastructure for channel adapters (offline tests, Wiremock patterns like ZeroClaw #10413) is undervalued and high-impact |
| RFC governance scales contributor velocity | If your project lacks architecture decision records, you're limiting your contributor pool |
| Mobile/Hub deployment demand | Cross-platform UI frameworks (Tauri, Expo) are viable paths for agent products |
| Silent failure pattern is the enemy | Every data loss path needs explicit error propagation; users will report "broken" even if the agent "works" |

---

## Summary

The personal AI agent open-source ecosystem is in a **coherence phase**: after a period of experimentation, the leading projects (IronClaw, CoPaw, NanoBot, ZeroClaw) are converging on shared architectural patterns around provider abstraction, memory systems, and context management. The differentiators that

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑08‑28**

---

### 1. Today’s Overview  
The repository shows a healthy flow of activity: two issues were opened and remain open, while 24 pull requests were updated in the last 24 hours (15 still open, 9 merged/closed). No new releases were cut. The bulk of the recent work centres on UI/UX refinements, memory‑handling refactors, and security‑related bug fixes, indicating that the maintainers are actively balancing feature development with stability improvements.

---

### 2. Releases  
*None* – the project has not published a new version in the past day.

---

### 3. Project Progress  
**Merged / Closed PRs (last 24 h)**  
- **#5574** – *refactor(provider)*: makes fallback attempts explicit, improving reliability when a provider fails.  
- **#5569** – *refactor(agent)*: extracts tool‑execution logic, keeping `AgentRunner` focused on the ReAct loop.  
- **#5572** – *fix(agent)*: defaults agent request concurrency to unlimited, simplifying configuration for new users.  
- **#5565** – *refactor(memory)*: decouples archival from provider state, enabling cleaner memory journal writes.  
- **#4346** – *fix(providers)*: marks stripped images as unviewable, preventing path leakage after image‑strip failures.  

**Open PRs that advanced the codebase**  
- **#5576** – UI: preserves full UI in Herdr panes by applying the same alternate‑screen TUI layout used by standalone terminals.  
- **#5568** – Agent runner now owns request‑fitting and memory archival, giving finer‑grained control over context pressure.  
- **#5504** – UI: surfaces model retry status (NAN‑34) in both TUI and WebUI, improving transparency for users.  
- **#5570** – Memory: adds a pluggable recall backend, paving the way for alternative storage strategies.  
- **#5571** – Memory: requires explicit recall by default, reducing hidden memory side‑effects.  

Overall, the merged PRs tighten security, improve memory handling, and streamline the agent execution pipeline, while open PRs continue to polish the user interface and expand memory flexibility.

---

### 4. Community Hot Topics  

| Item | Type | Link | Activity (comments / 👍) | Core Need |
|------|------|------|--------------------------|-----------|
| **#5567** | Issue | <https://github.com/HKUDS/nanobot/issues/5567> | 2 comments, 0 👍 | Users want Feishu messages aggregated into a single **streamed card** instead of multiple separate messages, to improve conversation flow. |
| **#5564** | Issue | <https://github.com/HKUDS/nanobot/issues/5564> | 0 comments, 0 👍 | Security: prevent **path‑traversal** in session file handling; a malicious session ID could expose arbitrary filesystem paths. |
| **#5576** | PR | <https://github.com/HKUDS/nanobot/pull/5576> | 0 comments (status open) | UI consistency: make Herdr panes use the same full‑screen TUI layout as regular terminals, preserving UI state. |
| **#5568** | PR | <https://github.com/HKUDS/nanobot/pull/5568> | 0 comments (status open) | Agent stability: let `AgentRunner` own request‑fitting and memory archival, enabling better context‑pressure handling. |
| **#5504** | PR | <https://github.com/HKUDS/nanobot/pull/5504> | 0 comments (status open) | UI: surface model retry status (NAN‑34) in‑place, giving users visibility into why a response may be delayed. |

**Analysis** – The most discussed item is the Feishu UX issue (#5567), reflecting a clear user‑experience pain point: fragmented replies break conversation continuity. The path‑traversal issue (#5564) is a critical security concern that, while currently quiet, could have severe repercussions if exploited. UI‑focused PRs (#5576, #5504) indicate ongoing effort to make the terminal‑style interface more robust and informative.

---

### 5. Bugs & Stability  

| Severity | Bug / Issue | Link | Current Fix Status |
|----------|-------------|------|--------------------|
| **High** | **Path traversal in session handling** – malicious session IDs can escape the designated directory. | <https://github.com/HKUDS/nanobot/issues/5564> | No fix merged yet; the issue is actively open. |
| **Medium** | **Feishu multi‑message UX** – users receive several separate messages (progress, tool hints, final reply) instead of a single streamed card. | <https://github.com/HKUDS/nanobot/issues/5567> | No fix merged; the issue is open and awaiting a design/implementation. |
| **Medium** | **Session recreation after deletion** – delayed cross‑session messages could recreate a deleted session. | <https://github.com/HKUDS/nanobot/pull/5483> (closed) | Fixed in PR #5483 (merged). |
| **Low** | **Session save crash on Windows PermissionError** – `os.replace()` raises a transient `WinError 5` during heartbeat, crashing the gateway. | <https://github.com/HKUDS/nanobot/pull/5382> (open) | Fix is in progress; the PR is still open. |

**Ranking** – The path‑traversal bug (#5564) is the most severe (security‑critical). The Feishu UX issue, while not a crash, severely degrades user experience and therefore ranks second. The session‑recreation bug is a correctness issue but has already been addressed. The Windows PermissionError crash is a low‑severity stability bug that remains open.

---

### 6. Feature Requests & Roadmap Signals  

- **Feishu multi‑message consolidation** (#5567) – a clear user‑requested feature that could become a priority target for the next release, given its high comment count and impact on user flow.  
- **Pluggable memory recall backend** (#5570) – introduces extensibility for memory storage; likely to be merged soon as it builds on existing `MemoryStore`.  
- **Explicit recall requirement** (#5571) – tightens memory semantics, a logical next step after the recall‑backend foundation.  
- **Per‑spawn model presets allowlist** (#5561) – expands configurability for spawning agents with specific model configurations; may be scheduled for a mid‑term release.  
- **Session focus persistence** (#5537) – adds a durable “focus” cue across turns, useful for long‑running assistants; currently open but low‑traffic.

These requests suggest a roadmap that balances **UX enhancements** (Feishu card streaming), **security hardening** (session path validation), and **modular memory architecture** (plug‑in backends, explicit recall). Maintainers appear to be moving toward a more **composable** and **user‑friendly** system.

---

### 7. User Feedback Summary  

- **Conversation fragmentation** – Users on Feishu report that agents’ multi‑message replies (progress hints, tool output, final answer) break the “one‑user‑message → one‑agent‑reply” mental model.  
- **Security concerns** – The path‑traversal issue, though not yet exploited, raises alarms about data leakage and potential privilege escalation via session files.  
- **UI consistency** – Community members request that Herdr panes behave like regular terminal panes (full‑screen, state preservation) to avoid confusion when switching contexts.  
- **Transparency of model retries** – Users want visible indicators when a model is retrying (e.g., countdown timers) rather than silent delays.  
- **Memory handling opacity** – Some users have expressed confusion over hidden memory archival and consolidation, prompting the push for explicit recall and clearer UI cues.

Overall sentiment is **constructive**: the community is eager for smoother interactions and safer code, while the core team is actively delivering fixes and refactors.

---

### 8. Backlog Watch  

| Item | Type | Why It Matters | Current Status |
|------|------|----------------|----------------|
| **#5567** – Feishu multi‑message streaming | High‑impact UX feature; many users experience fragmented replies. | Open, 2 comments, no recent response beyond the initial description. |
| **#5564** – Path‑traversal in session handling | Critical security vulnerability; could allow arbitrary file reads. | Open, no comments yet; maintainer attention required to review and patch. |
| **#5576** – Preserve full UI in Herdr panes | Improves developer experience and consistency across terminal‑style UI components. | Open; relatively recent (created 2026‑08‑28) – may need early review. |
| **#5504** – Surface model retry status | Enhances transparency for end‑users dealing with flaky models. | Open; moderate traffic; likely to be addressed soon. |
| **#5561** – Per‑spawn model presets allowlist | Expands configurability for automated agent spawning; ties back to earlier feature request #4231. | Open; may become a priority if spawn usage grows. |

**Watchlist Recommendation** – Prioritize **#5564** (security) and **#5567** (UX) for the next maintainer sprint, as both have direct impact on safety and user satisfaction. The UI‑focused PR **#5576** is also fresh and could be merged quickly to reduce backlog.

--- 

*Prepared by the NanoBot analysis team – 2026‑08‑28.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑08‑28**  
*Generated from GitHub activity (issues & PRs) over the last 24 h.*

---

### 1. Today’s Overview
PicoClaw shows modest but focused activity: **1 open issue** and **1 open PR** were updated today, while **2 issues** and **6 PRs** were closed/merged. No new releases were published. The project is primarily handling maintenance‑type work (dependency bumps) and addressing a UI‑performance concern, while a longer‑standing feature request about IRC message handling remains under discussion.

---

### 2. Releases
*No new releases were tagged today.*  
*(If a release appears, this section would list version numbers, notable changes, breaking changes, and migration guidance.)*

---

### 3. Project Progress – Merged/Closed PRs (Today)

| PR | Type | Summary |
|----|------|---------|
| **[#3336](https://github.com/sipeed/picoclaw/pull/3336)** | Dependency bump | `github.com/aws/aws-sdk-go-v2/service/bedrockruntime` → 1.57.1 |
| **[#3335](https://github.com/sipeed/picoclaw/pull/3335)** | Dependency bump | `github.com/aws/aws-sdk-go-v2/config` → 1.32.35 |
| **[#3334](https://github.com/sipeed/picoclaw/pull/3334)** | Dependency bump | `github.com/anthropics/anthropic-sdk-go` → 1.62.0 |
| **[#3333](https://github.com/sipeed/picoclaw/pull/3333)** | Dependency bump | `maunium.net/go/mautrix` → 0.29.0 |
| **[#3332](https://github.com/sipeed/picoclaw/pull/3332)** | Dependency bump | `github.com/aws/aws-sdk-go-v2` → 1.43.4 |
| **[#1555](https://github.com/sipeed/picoclaw/pull/1555)** | Misc/cleanup | Merges fixes from older PRs #1390, #1389, #1383, #1381 (no functional change, just consolidates prior work). |

*Take‑away:* Today’s merged work is almost entirely **dependency maintenance**, keeping the Go toolchain up‑to‑date with AWS, Anthropic, and Matrix libraries. No user‑facing feature or bug‑fix code landed beyond the housekeeping updates.

---

### 4. Community Hot Topics
| Item | Comments | Reactions | Why it matters |
|------|----------|-----------|----------------|
| **[Issue #3287 – Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)** | 8 | 0 | Users want PicoClaw to treat IRCv3 messages that exceed the 512‑byte limit (and are split by clients) as a single logical message. The discussion shows real‑world usage of IRC bots and a need for robust message re‑assembly. |
| Issue #3331 – Use any models with `/audio/transcriptions` endpoint | 2 | 0 | Request to relax the hard‑coded “*‑whisper‑*” model check, enabling newer/faster ASR models. |
| Issue #3330 – Dynamic model override in delegate/spawn/subagent tools | 2 | 0 | Desire to specify a model at call time rather than relying on static config. |
| PR #3347 – Fix laggy interface (open) | – (no comment count) | 0 | Addresses UI performance when the chat pane contains large amounts of text; a tangible usability bug. |

*The most‑commented item is the IRC long‑message feature request, indicating a niche but active user base that relies on PicoClaw for IRC integration.*

---

### 5. Bugs & Stability
- **Open PR #3347** – *Fix laggy interface*: resolves UI lag when the chat area accumulates many messages. No crash logs or regressions were reported today; this is a **performance/stability** improvement rather than a correctness bug.
- No other bug‑related issues or PRs were flagged in the last 24 h.

*Severity ranking (if any):*  
1. **Performance lag** (PR #3347) – medium impact on user experience, especially in long‑running sessions.  
2. No high‑severity crashes or data‑loss bugs reported.

---

### 6. Feature Requests & Roadmap Signals
| Feature Request | Current Status | Likelihood for Near‑Term Release |
|-----------------|----------------|----------------------------------|
| **Better IRC long‑message handling** (#3287) | Open, 8 comments, active discussion | **Medium** – The request is well‑articulated and has maintainer attention; a prototype could appear in a minor release if the community provides a patch. |
| **Allow any ASR model for `/audio/transcriptions`** (#3331) | Closed as stale (no recent activity) | **Low** – Stale status suggests waning interest or lack of maintainer bandwidth; would need revival. |
| **Dynamic model override for delegate/spawn/subagent** (#3330) | Closed as stale | **Low** – Same as above; would require re‑opening with a concrete implementation plan. |
| **UI performance fix** (#3347) | Open PR, ready for merge | **High** – Straightforward code change; likely to be merged soon, delivering immediate UX improvement. |

*Overall roadmap signal:* The project is currently **maintenance‑heavy**, but the open IRC issue and UI lag PR indicate that the next incremental release could focus on **usability enhancements** (IRC message re‑assembly and chat‑pane performance) if contributors step forward.

---

### 7. User Feedback Summary
- **Pain points:**  
  - Users encountering **truncated or fragmented IRC messages** when dealing with lengthy bot responses or multi‑line pastes.  
  - UI **lag** in the web interface when chat history grows, affecting usability on both desktop and mobile browsers.  
  - Desire for **greater model flexibility** (audio transcription, agent spawning) to avoid being locked into older Whisper‑based pipelines.
- **Satisfaction:**  
  - The steady stream of dependency bumps shows the project stays **secure and up‑to‑date** with third‑party SDKs, which users appreciate for reliability.  
  - No recent reports of crashes or data corruption suggest the core runtime is stable.

---

### 8. Backlog Watch
| Item | Age / Activity | Why it needs attention |
|------|----------------|------------------------|
| **[Issue #3287 – Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)** | Open since 2026‑07‑22; 8 comments, last updated 2026‑08‑27 | Represents a concrete usability gap for IRC users; no PR yet assigned. |
| **Open PR #3347 – Fix laggy interface** | Created 2026‑08‑27, updated 2026‑08‑28 | Simple performance fix; merging would immediately improve UX. |
| **Stale feature issues #3331 & #3330** | Both created 2026‑08‑13, marked stale, last updated 2026‑08‑27 | Indicate lingering interest in model flexibility; could be revived if a contributor volunteers. |

*Actionable insight:* Maintainers could prioritize reviewing and merging **PR #3347** (low risk, high reward) and engage the community on **Issue #3287** to shepherd a patch for IRC message re‑assembly.

---

**Conclusion:** PicoClaw’s health is solid—dependencies are current, the core is stable, and the project is responding to user‑experience concerns. The main opportunities for near‑term progress lie in **merging the UI‑lag fix** and **advancing the IRC long‑message feature**, both of which have clear community traction. Reviving the stalled model‑flexibility requests would require renewed contributor interest or a explicit maintainer push.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-28

---

## 1. Today's Overview

NanoClaw remains in a period of **intense, multi-threaded development**. The project logged 11 issue updates and 50 pull request updates in the last 24 hours, with 4 PRs merged or closed and zero new releases. The dominant theme is a **large-scale provider refactoring** (at least 6 coordinated PRs by `zvi-fried` reifying provider contracts for Codex, OpenCode, host, setup, and runtime), alongside a cluster of **high-severity user-facing bugs** — particularly around Discord attachment handling, approval cards, and session starvation. Activity is healthy; the backlog of long-dormant PRs remains the main drag on velocity.

---

## 2. Releases

**No new releases today.** The latest releases section is empty. No version tags, changelogs, or migration notes are available for this period.

---

## 3. Project Progress

**4 PRs merged/closed in the last 24h** (46 remain open). The visible snapshot does not surface the titles of the merged items, but the active PR slate reveals where momentum sits:

| Area | Activity |
|---|---|
| **Provider contracts** | `zvi-fried` opened a coordinated series (#3581, #3585, #3586, #3584, #3588, #3591) declaring runtime, host, setup, Codex, OpenCode, and rendering contracts — a foundational refactor separating "core-owned canon" from provider-specific instructions. |
| **Codex auth & tooling** | `amit-shafnir` (#3489) is replacing terminal-based Codex sign-in with a structured setup-driver flow; `glifocat` (#2878) targets stale OpenAI secret reconnect bugs. |
| **OpenCode provider fixes** | `grantland` has three PRs (#2848, #2865, #2872) addressing env-var fallbacks, stale-session rotation, and per-group model override via `container_configs.model`. |
| **Tasks & runs** | `chiptoe-svg` (#3594) fixes errored task turns being silently dropped instead of marked FAILED. |
| **Gemini & Cursor** | `farooqu` (#2136, open since April) adds a Google Gemini provider via the Gemini CLI `app-server`; `zvi-fried` (#3356) adds a Cursor Agent SDK payload. |

---

## 4. Community Hot Topics

### 🔥 #3456 — Discord approval cards broken by duplicate `value` param (5 comments)
**Link:** [nanocoai/nanoclaw Issue #3456](https://github.com/nanocoai/nanoclaw/issues/3456)

The most-discussed issue. In `createChatSdkBridge`'s `ask_question` card builder, each Discord option button sets **both** `id` and `value` to the same string, which corrupts the `custom_id` Discord expects for approval interactions. The result: every click silently resolves to the wrong option, and the card is re-sent on timeout. Users cannot use approval or `ask_question` cards on Discord at all. **Severity: high.**

### 🔥 #2888 — Discord (and likely other url-only adapters) drop image/file attachments (2 comments)
**Link:** [nanocoai/nanoclaw Issue #2888](https://github.com/nanocoai/nanoclaw/issues/2888)

`messageToInbound` in `src/channels/chat-sdk-bridge.ts` downloads attachment bytes via `att.fetchData()` but discards the source URL. Consumers that require `url` (rather than fetched bytes) receive nothing — the agent sees only filename metadata, never the image content. Telegram works fine because it uses a different adapter path. This is a **platform-specific regression** for Discord users sending screenshots or files.

### 🔥 #3572 — Inbound attachments silently dropped: adapters supply `url`, consumers require `fetchData` (2 comments, CLOSED)
**Link:** [nanocoai/nanoclaw Issue #3572](https://github.com/nanocoai/nanoclaw/issues/3572)

Closed today. Confirms the same root cause as #2888: a contract mismatch between adapters that produce `url` and consumers that expect pre-fetched `fetchData` bytes. No error or warning is emitted anywhere — the files vanish silently.

---

## 5. Bugs & Stability

| Rank | Issue | Severity | Status | Fix in Flight? |
|---|---|---|---|---|
| **1** | [#3456](https://github.com/nanocoai/nanoclaw/issues/3456) — Discord approval/ask_question cards unusable; every click resolves wrong option | **High** | Open | No PR yet |
| **2** | [#3575](https://github.com/nanocoai/nanoclaw/issues/3575) — WhatsApp: one big photo (>2000px) wedges the entire SDK session for hours until `/clear` | **High** | Open | No PR yet |
| **3** | [#3568](https://github.com/nanocoai/nanoclaw/issues/3568) — Pending `system` rows (≥ `maxMessagesPerPrompt`) starve the inbound queue; agent silently stops responding | **High** | Open | No PR yet |
| **4** | [#3569](https://github.com/nanocoai/nanoclaw/issues/3569) — Telegram: odd-numbered MarkdownV2 underscores cause whole-message delivery failure; `@chat-adapter/telegram` pinned at 4.29.0, upstream fixed in 4.32.0 | **High** | Open | No PR yet |
| **5** | [#2888](https://github.com/nanocoai/nanoclaw/issues/2888) — Discord image/file attachments: agent only sees filename, never content | **High** | Open | Related #3572 closed (same root cause) |
| **6** | [#3576](https://github.com/nanocoai/nanoclaw/issues/3576) — Rate-limited turns flood channel with duplicate error notices; no backoff/dedup in `deliverErrorResult` | **Medium** | Open | No PR yet |
| **7** | [#3532](https://github.com/nanocoai/nanoclaw/issues/3532) — `/add-*-tool` per-agent scoping misses agents created later; new groups get the tool by default | **Medium** | Open | No PR yet |
| **8** | [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) — `update-nanoclaw` skill refresh misidentifies local adapters as skill imports, blocking updates or overwriting user code | **Medium** | Open | No PR yet |
| **9** | [#3579](https://github.com/nanocoai/nanoclaw/issues/3579) — Registry skills: `nc:copy` lists can drift from installed channel/provider payloads | **Low** | Open | No PR yet |

**Key takeaway:** Four high-severity bugs share a common pattern — **silent failure with no user-visible error**. The agent appears to work (or appears dead) while data is lost or interactions are corrupted. The Telegram issue (#3569) is a known upstream dependency lag; the others are internal logic defects.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood |
|---|---|---|
| **Auto-wire sole eligible agent group** — stop prompting "Choose an agent" when only one group exists | [#3577](https://github.com/nanocoai/nanoclaw/issues/3577) | **High** — low-friction UX win, explicitly requested by power user `DawoudIO` |
| **Google Gemini provider** — native Gemini CLI `app-server` integration | [#2136](https://github.com/nanocoai/nanoclaw/pull/2136) | **Medium-High** — PR open since April, follows existing Codex pattern |
| **Cursor Agent SDK payload** | [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) | **Medium** — expanding provider choice beyond Codex/OpenCode |
| **Per-group custom OpenAI-compatible endpoints** — route groups to LiteLLM, llama.cpp, vLLM, local proxies | [#1994](https://github.com/nanocoai/nanoclaw/pull/1994), [#1995](https://github.com/nanocoai/nanoclaw/pull/1995) | **Medium** — both PRs open since April, strong demand signal for local/privacy deployments |
| **Core-owned tone & speed inference** — personality and service tier mapped from provider metadata | [#3592](https://github.com/nanocoai/nanoclaw/pull/3592), [#3593](https://github.com/nanocoai/nanoclaw/pull/3593) | **Medium** — part of the broader provider contract refactor |

---

## 7. User Feedback Summary

**Pain points voiced by real users:**

- **Discord is functionally broken for interactive flows.** Approval

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest - 2026-08-28

## Today's Overview
The IronClaw project shows significant activity today with 30 issues and 48 PRs updated, demonstrating active development around context management, memory systems, and cross-platform compatibility. Performance optimization continues to be a critical focus, with recent work on context overflow recovery and memory admission systems. The project has merged 31 PRs and closed 8 issues, indicating steady progress toward stabilizing the Reborn architecture while addressing Windows compatibility and tool discovery issues.

## Releases
**No new releases** available today.

## Project Progress
**Major Merged/Closed PRs Today:**
- **#7968** - Normalize hosted MCP tool results to preserve text/JSON metadata while filtering binary content
- **#7964** - Fix large MCP catalog bug that published zero tools instead of truncating
- **#7958** - Add shared review router with provider-neutral post-run learning (replacing hidden skill learning model)
- **#7962** - Compact and resume once on context overflow with proper recovery attempt persistence
- **#7961** - Add tenant-scoped BI telemetry collection with privacy-bounded contracts
- **#7901** - Persist auth gates before enrichment to prevent outage-related inbox gaps
- **#7900** - Publish durable resource blocks with stable notification IDs
- **#7899** - Publish automation pre-run failures with durable Inbox notifications

**Key Features Advanced:**
- Memory system stabilization with stable commit/feedback/forget capabilities
- Cross-conversation memory recall through bounded active recall
- Improved context overflow recovery with single compaction retry
- Enhanced notification reliability and durability

## Community Hot Topics

**Most Active Issues:**
1. **#7891** (10 comments) - Gmail performance bottleneck (19.7s turns from unprojected payloads)
   - *Link:* nearai/ironclaw Issue #7891
   - *Need:* Context projection to reduce prompt size

2. **#7824** (4 comments) - Context projection cost optimization (227.7M vs 55.1M tokens)
   - *Link:* nearai/ironclaw Issue #7824
   - *Need:* Pi-style compaction barriers for thread history

3. **#7276** (2 comments) - Automatic conversation fact promotion to durable memory
   - *Link:* nearai/ironclaw Issue #7276
   - *Need:* Cross-conversation memory persistence

4. **#7903** (1 comment) - Persistent sandboxed executor architecture
   - *Link:* nearai/ironclaw Issue #7903
   - *Need:* Per-user sandbox boundary improvements

**PR Activity Analysis:**
Top contributors focus on notifications (3 PRs), MCP tools (2 PRs), memory systems (2 PRs), and learning infrastructure (2 PRs), indicating coordinated efforts to stabilize core systems.

## Bugs & Stability

**Critical Priority Bugs:**
1. **#6590** - Windows serve failures with workspace root overlap
   - *Severity:* High - Windows users cannot run `ironclaw serve`
   - *Status:* Open (3 comments)

2. **#7956** - Telegram unpaired sender gets command inventory instead of pairing notice
   - *Severity:* Medium - UX issue for new workspace users
   - *Status:* Open (0 comments)

3. **#7955** - Telegram personal-account linking shows generic error with missing API config
   - *Severity:* Medium - Breaking onboarding experience
   - *Status:* Open (0 comments)

**Resolved Issues:**
- **#7776** - Memory.write expected-version mode bug (closed)
- **#7918** - HTTP 413 content too large for giant trajectories (closed)
- **#7876** - Notification producer lifecycle hardening (closed)

## Feature Requests & Roadmap Signals

**High-Impact Enhancement Requests:**
1. **#7276** - Automatic conversation fact promotion to durable memory
   - *Likelihood:* High - Core to Reborn value proposition

2. **#7864** - Self-learning write pipeline with turn activity durability
   - *Likelihood:* Medium - Complex implementation requiring multiple phases

3. **#7903** - Persistent per-user sandboxed executor
   - *Likelihood:* Medium - Architecture change requiring coordination

4. **#7950** - Native, mem0, and Mnesis learning capability adapters
   - *Likelihood:* High - Integration-focused enhancement

5. **#7949** - Deterministic memory admission and approval promotion
   - *Likelihood:* High - Addresses core memory system reliability

## User Feedback Summary

**Primary Pain Points:**
- **Performance:** Gmail operations causing 19+ second turns due to unprojected payload costs
- **Cross-Conversation Memory:** Users expect conversation information to persist across sessions but it doesn't
- **Platform Compatibility:** Windows users experiencing critical serve failures
- **Tool Discovery:** Hosted MCP discovery silently skipping camelCase tool names
- **Onboarding Issues:** Telegram setup failing with generic error messages when API keys missing

**Satisfaction Drivers:**
- Memory system improvements enabling learned-skill extraction
- Context overflow recovery preventing infinite loops
- Enhanced notification durability and reliability
- Better MCP tool catalog handling and normalization

## Backlog Watch

**Unanswered Critical Issues:**
1. **#7891** - Gmail performance bottleneck (10 comments, 0 reactions) - **URGENT**
2. **#6590** - Windows serve compatibility (3 comments) - **HIGH PRIORITY**
3. **#7824** - Context projection cost optimization (4 comments) - **HIGH PRIORITY**
4. **#7856** - MCP tool discovery camelCase skipping (0 comments) - **MEDIUM PRIORITY**
5. **#7940** - MCP OAuth resource indicator gaps (0 comments) - **MEDIUM PRIORITY**

**Recent Activity Gaps:**
- Several enhancement requests (#7903, #7864, #7949) received minimal engagement despite being core architectural improvements
- Memory system work shows fragmented issue tracking (#7776, #7907, #7948, #7950) requiring consolidation

**Maintainer Attention Needed:**
- Coordinate Windows compatibility fixes (#6590) with broader Reborn testing
- Address performance bottlenecks in Gmail and context projection (#7891, #7824)
- Consolidate memory system improvements across multiple capability adapters
- Establish patterns for addressing MCP discovery and OAuth interoperability (issues #7856, #7940)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-28

## 1. Today's Overview

LobsterAI maintained a strong release cadence with version **2026.8.26** published alongside 13 merged/closed PRs concentrated on the `release/2026.8.24` branch. Activity skews toward release stabilization rather than net-new development: a high proportion of closed PRs target installer hardening (Windows silent install, payload truncation), app update state preservation, and UI polish (model collapse, sidebar login animation, library thumbnails). The 7 issues updated today are mostly historical [stale] items from late March being administratively closed, but two freshly opened community issues — one about a data-loss regression during upgrade, another about credit consumption on filtered prompts — point to real stability and cost concerns that warrant maintainer follow-up. Overall project health is **active and disciplined**, with the caveat that user-reported damage (wiped project folders, drained credits) needs prompt triage.

## 2. Releases

### 2026.8.26 — Released 2026-08-27/28

**Channel:** `release/2026.8.24` branch, Windows-focused build.

**Notable changes (from referenced PRs):**

- **Installer silent-install UX (PR #2511, #2512)** — Supports silent upload-first web builds; removes dictbind-only banner; subsequent hardening in **PR #2560** drops the silent-install progress banner for *all* channels, enforcing a strict `/S` zero-UI contract where the invoking store/channel owns the install progress display. The Windows install spec and contract test are updated to match.
- **App update state preservation (PR #2551)** — Fixes a regression where the app could lose its "ready" state across update flows.
- **More Models collapse & sidebar banner (PR #2564 / #2568)** — Groups optional models under a default-collapsed "More Models" section; introduces server-synchronized sidebar banner scheduling with client-version gating, local expiry, cache handling, and refresh recovery.
- **Library list rendering (PR #2565)** — Decouples local vs. cloud query snapshots, prevents flicker and stale-result pollution, unifies busy states, adds progress hints and a11y loading state, plus new tests.
- **Library thumbnail & sharing UX (PR #2559)** — Improves grid image and PPTX-first-slide rendering, adds render-generation validation, blank-frame detection with retry, subscription-tier-aware sharing/deletion quota hints.
- **Scheduled-task "Run Now" feedback (PR #1163)** — Optimistic update + Gateway state sync; eliminates up-to-15s polling delay and prevents duplicate clicks; right-click menu brought in line with UI spec.
- **Custom agent duplicate-name guard (PR #1166)** — Renderer-side validation blocks submitting a name that already exists.
- **Auth UX (PR #2558)** — Rainbow border/glow animation on the logged-out sidebar login CTA, with theme contrast preserved and renderer-side attempt/failure logging.
- **OpenClaw memory module test coverage (PR #1165)** — 75 Vitest tests added across `openclawMemoryFile.ts` and `openclawLocalTimeContextPrompt.ts`.

**Breaking changes / migration notes:** None declared. The silent-install banner removal is a behavioral change for any downstream channel that was relying on the dictbind progress UI — channel owners must render their own install progress.

## 3. Project Progress

All 13 PRs touched in the last 24h were closed/merged (0 open). Highlights:

| PR | Area | Impact |
|---|---|---|
| [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568) | renderer, docs, main | More-models collapse + synced sidebar banner schedules |
| [#2567](https://github.com/netease-youdao/LobsterAI/pull/2567) | renderer | Fix batch (release/2026.8.24) |
| [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551) | renderer, main | App update preserves ready state |
| [#2566](https://github.com/netease-youdao/LobsterAI/pull/2566) | build, windows | Installer payload truncation hardening |
| [#2565](https://github.com/netease-youdao/LobsterAI/pull/2565) | renderer | Library list query/loading state overhaul |
| [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) | renderer | Scheduled-task "Run Now" feedback + Gateway sync |
| [#1165](https://github.com/netease-youdao/LobsterAI/pull/1165) | tests | 75 Vitest tests for OpenClaw memory modules |
| [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166) | renderer | Duplicate custom-agent name prevention |
| [#2564](https://github.com/netease-youdao/LobsterAI/pull/2564) | renderer, docs, main | More-models collapse (precursor to #2568) |
| [#2563](https://github.com/netease-youdao/LobsterAI/pull/2563) | renderer | Fix batch |
| [#2560](https://github.com/netease-youdao/LobsterAI/pull/2560) | docs, windows | Silent-install banner removed for all channels |
| [#2559](https://github.com/netease-youdao/LobsterAI/pull/2559) | renderer, docs, main, artifacts | Library thumbnail fix + share/delete quota hints |
| [#2558](https://github.com/netease-youdao/LobsterAI/pull/2558) | renderer | Sidebar login CTA rainbow animation |

**Themes:** (1) release/2026.8.24 stabilization across installer, app-update, library, and agent flows; (2) deferred but valuable work from March (test coverage, scheduled-task UX) landing now; (3) progressive UX polish on login and library surfaces.

## 4. Community Hot Topics

By comments and reactions, today's active issues are low-engagement (most have 0–3 comments and 0 reactions) but the **severity-weighted** ones stand out:

- **[#2561 — "installer nukes entire projects folder"](https://github.com/netease-youdao/LobsterAI/issues/2561)** *(1 comment)* — Author `dreamsdesign` lost ~2,000 credits when an upgrade wiped the projects folder because it was inside the installation directory. High-impact data loss.
- **[#2562 — "use the f-words carefully, drains 200 credits"](https://github.com/netease-youdao/LobsterAI/issues/2562)** *(0 comments)* — User lost ~800 credits to profanity-filtered prompts they consider unrelated to DeepSeek's actual semantics. Cost / content-policy transparency issue.
- **[#1179 — "How to disable the forced sandbox in 3.31?"](https://github.com/netease-youdao/LobsterAI/issues/1179)** *(3 comments, closed stale)* — Long-standing user friction around the 3.31 sandbox policy. Closed as stale but reflects an unresolved UX complaint.
- **[#1173 — "App still runs after uninstall"](https://github.com/netease-youdao/LobsterAI/issues/1173)** *(2 comments, closed stale)* — Uninstall reliability / trust issue; user explicitly worried about residual processes ("backdoor") that even sent Feishu messages.
- **[#1174 — "Support multiple custom model providers"](https://github.com/netease-youdao/LobsterAI/issues/1174)** *(2 comments, closed stale)* — Repeated feature request for provider-config flexibility.

**Underlying needs:** trust (uninstall cleanliness, sandbox transparency), data safety (upgrade should never wipe user projects), cost transparency (filters should not silently consume credits), and provider flexibility (multiple custom providers, not just one).

## 5. Bugs & Stability

| # | Title | Severity | Status | Fix PR? |
|---|---|---|---|---|
| [#2561](https://github.com/netease-youdao/LobsterAI/issues/2561) | Upgrade wipes projects folder inside install dir, 2,000 credits lost | **Critical** (data + monetary loss) | Open | None yet |
| [#2562](https://github.com/netease-youdao/LobsterAI/issues/2562) | Profanity filter drains 200 credits per rejected prompt | **High** (monetary loss, opaque policy) | Open | None yet |
| [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | Editing custom agent triggers gateway restart loop on 2026.3.31 | High (operational) | Closed (stale) | Not visible |
| [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) | Process continues running after uninstall, can still send Feishu messages | High (trust) | Closed (stale) | Not visible |
| [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) | 3.31 forced sandbox — no UI toggle, only file edit | Medium (UX) | Closed (stale) | Partial — recent installer hardening PRs may reduce friction |
| [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551) | App update lost ready state | Medium (regression) | **Merged** | ✅ |
| [#2566](https://github.com/netease-youdao/LobsterAI/pull/2566) | Windows installer truncated payload | High (installability) | **Merged** | ✅ |
| [#2560](https://github.com/netease-youdao/LobsterAI/pull/2560) | Silent-install progress banner on `/S` (zero-UI) installs | Medium (contract) | **Merged** | ✅ |
| [#2559](https://github.com/netease-youdao/LobsterAI/pull/2559) | Library thumbnail render glitches / cross-talk | Medium | **Merged** | ✅ |

**Priority:** #2561 should be treated as P0 — it is an upgrade-path data-loss bug with direct financial impact on the user. #2562 is P1 and intersects with billing/policy clarity.

## 6. Feature Requests & Roadmap Signals

- **[#1174 — Multiple custom model providers](https://github.com/netease-youdao/LobsterAI/issues/1174)** — Single-provider model is a recurring complaint; the use case (swap/keep multiple providers) is common. **Likelihood for next version: medium-high** — aligns with the "More Models" collapse work in #2564/#2568, suggesting the team is already thinking about multi-provider UX.
- **[#1162 / #1165 — OpenClaw memory unit tests](https://github.com/netease-youdao/LobsterAI/issues/1162)** — Already shipped in 2026.8.26, signaling continued investment in test coverage for memory/migration paths.
- **More-models collapse + sidebar banner scheduling (#2564/#2568)** — Server-driven banner scheduling is a new architectural capability that opens the door to in-product announcements, promotional CTAs, and upgrade nudges.
- **Scheduled-task "Run Now" feedback (#1163)** — Suggests upcoming work to make manual triggers and Gateway state near-real-time across other actions too.
- **Custom agent duplicate-name guard (#1166)** — A small but indicative cleanup; expect continued agent-management UX refinements.

## 7. User Feedback Summary

- **Pain points**
  - **Data loss on upgrade** ([#2561](https://github.com/netease-youdao/LobsterAI/issues/2561)) — User expected projects to be safe inside the install folder and lost ~2,000 credits. Strong signal that upgrade behavior needs a confirmation step or path check.
  - **Silent credit burn** ([#2562](https://github.com/netease-youdao/LobsterAI/issues/2562)) — User feels content filters charge real money for "nothing to do with DeepSeek." Calls for clearer cost-of-rejection signaling.
  - **Uninstall trust gap** ([#1173](https://github.com/netease-youdao/LobsterAI/issues/1173)) — Lingering process after uninstall that can still send messages severely erodes trust ("backdoor" framing).
  - **Sandbox friction** ([#1179](https://github.com/netease-youdao/LobsterAI/issues/1179)) — 3.31 forced sandbox with no UI toggle pushes users to roll back, which is a strong dissatisfaction signal.
  - **Single custom provider limitation** ([#1174](https://github.com/netease-youdao/LobsterAI/issues/1174)) — Users want to A/B or migrate between providers without losing prior config.
- **Use cases observed**
  - Long-lived agent workspaces stored near the install root.
  - Heavy scheduled-task usage where "Run Now" feedback latency mattered.
  - Library work involving PPTX + image thumbnails and cross-channel sharing.
- **Satisfaction signals**
  - Multiple closed-stale issues from March (issues and PRs alike) suggest the project is finally catching up on backlog, which typically correlates with renewed user trust.
  - Recent UX polish (login animation, more-models collapse, library states) indicates an investment in perceived quality, not just feature count.

## 8. Backlog Watch

These items deserve maintainer attention despite being closed as stale, because the underlying user need is unresolved and likely to be re-filed:

- **[#2561](https://github.com/netease-youdao/LobsterAI/issues/2561) — Upgrade wipes projects folder (NEW, open, P0)** — Needs a response and a fix PR; consider a path safety check in the installer updater.
- **[#2562](https://github.com/netease-youdao/LobsterAI/issues/2562) — Credit drain on filtered prompts (NEW, open, P1)** — Needs an authoritative reply on whether and how filtered prompts are billed.
- **[#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) — Forced-sandbox toggle (closed stale)** — Add a documented settings entry; likely to be re-opened.
- **[#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) — Process survives uninstall (closed stale)** — Important for trust; verify uninstall lifecycle on Windows.
- **[#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) — Multiple custom model providers (closed stale)** — Aligns with current "More Models" work; revisit.
- **[#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) — Gateway restart loop on agent icon edit (closed stale)** — Verify against current 2026.8.26 behavior; if reproducible, file a regression.
- **[#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) — Scheduled-task "Run Now" UX (merged but old)** — Confirm it ships in a stable channel and not just the release branch; the issue was filed March and only merged now.
- **[#1165](https://github.com/netease-youdao/LobsterAI/pull/1165) — OpenClaw memory test coverage (merged but old)** — Audit the SQLite migration paths it now exercises; this is a sensitive area.

**Overall health:** Active and shipping, with a healthy mix of features, fixes, and tests. The two open issues from `dreamsdesign` are the most important items to address before the next release — both are concrete, reproducible, and cost the user real money.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest - 2026-08-28

## 1. Today's Overview
Moltis shows minimal activity in the last 24 hours, with zero new issues created or updated across the repository. The project maintained a stable state without any open or active issues. Within this quiet period, two pull requests were merged and closed, primarily addressing security and API compliance improvements. A new release (20260827.01) was published on 2026-08-27, marking the latest version update. Overall, the project demonstrates healthy stability with no immediate blockers affecting development momentum.

## 2. Releases
**Release 20260827.01** was deployed on 2026-08-27. This release incorporates the fixes from the two closed pull requests discussed below. Specific change details, breaking changes, or migration notes are not available in the current data snapshot, but the release represents the latest stabilization of the codebase after addressing sandbox image validation and OpenAI schema compliance.

## 3. Project Progress
Two pull requests were successfully merged and closed within the last 24 hours:

- **PR #1222** ([moltis-org/moltis PR #1222](https://github.com/moltis-org/moltis/pull/1222)) – Closed on 2026-08-27  
  *Summary:* Validates sandbox image requests by checking image references and package names before container or Dockerfile use, restricting such operations to operator administrators while preserving full administrative access for password, passkey, and trusted loopback identities.  
  *Impact:* Enhances security by preventing unauthorized image deployments and tightens access controls.

- **PR #1232** ([moltis-org/moltis PR #1232](https://github.com/moltis-org/moltis/pull/1232)) – Closed on 2026-08-27  
  *Summary:* Implements OpenAI-safe object schemas by setting `additionalProperties=false`, forcing Codex tools to send only explicitly defined fields rather than defaulting to null or empty values when unsupported schemas are used.  
  *Impact:* Improves API compliance and reduces risk of unexpected data transmission from external tools.

## 4. Community Hot Topics
With no new issues reported in the past 24 hours, the issue tracker remains quiet. The two closed PRs (#1222 and #1232) represent the most active areas of recent discussion, though they have already been resolved. There is no indication of broader community concerns at this time; all recent activity has been focused on internal security and compatibility improvements rather than open user-reported problems.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The closed PRs serve as proactive mitigations rather than reactive bug fixes:
- **#1222** addresses potential vulnerabilities in sandbox image handling that could allow unintended resource consumption or misconfiguration.
- **#1232** prevents schema drift between Moltis and OpenAI tools, ensuring consistent behavior across integrations.

Both fixes are considered low-severity improvements aimed at strengthening the system's robustness and compliance posture.

## 6. Feature Requests & Roadmap Signals
The recent work highlights two emerging priorities:
- **Sandbox Isolation** (PR #1222): Indicates a growing focus on secure container management and tighter operator permissions, potentially expanding into more granular access controls in future releases.
- **OpenAI Schema Compliance** (PR #1232): Suggests ongoing effort to align with evolving OpenAI tool interfaces, which may influence upcoming API contract updates and developer experience enhancements.

These signals point toward continued emphasis on security hardening and third-party integration reliability.

## 7. User Feedback Summary
Direct user feedback is limited due to the absence of open issues. However, the targeted nature of the recent fixes implies that users may have encountered challenges with:
- **Image validation failures** when deploying sandboxed containers, leading to deployment errors.
- **Schema mismatches** when integrating with OpenAI-based tools, causing unexpected null returns or runtime errors.

Overall sentiment appears positive regarding the direction of these improvements, with users likely appreciating the increased safety and compliance measures implemented.

## 8. Backlog Watch
There are no long-unanswered important issues or PRs requiring immediate attention. Both relevant PRs (#1222 and #1232) have been successfully closed, and the project remains in a stable state. The backlog is clear, with no critical blockers pending resolution. Maintenance can proceed without delay until the next scheduled review cycle.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-28

## 1. Today's Overview

CoPaw (QwenPaw) maintained high development velocity with 32 issue updates and 50 PR updates in the past 24 hours. The project shows strong activity around the upcoming v2.2.0 release, with significant engineering work on TLS stack upgrades, mobile client development, and performance optimizations. Community engagement remains robust, particularly around the multi-tenant Hub vision and platform deployment improvements. No new releases shipped today, but several critical bug fixes are in review.

---

## 2. Releases

**No new releases today.** The project is actively preparing v2.2.0 (beta: #7348 release notes in progress). Notable in-flight changes targeting this release include Python 3.13 bundling, AgentScopeRuntimeWebUI 1.2.0 API adaptation, and workspace-scoped skill preload configuration.

---

## 3. Project Progress

### Merged/Closed PRs (23 total)
| PR | Author | Summary |
|----|--------|---------|
| [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) | LUOSENGWA | **Fixes #7298** — Bumped bundled Python from 3.11 → 3.13 in desktop and Docker pipelines, upgrading TLS stack from OpenSSL 3.0.x to 3.5.x |
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | chrischen-coder | Rejected conflicting chat payloads to prevent silent message drops |
| [#7309](https://github.com/agentscope-ai/QwenPaw/pull/7309) | zhijianma | Refactored task-tracker to use structured events; improved SSE serialization |
| [#7375](https://github.com/agentscope-ai/QwenPaw/pull/7375) | cuiyuebing | **Fixes #7362** — Enforced File Guard paths in GovernancePolicy evaluation |
| [#7374](https://github.com/agentscope-ai/QwenPaw/pull/7374) | zhijianma | Auto-folding assistant process messages during streaming |
| [#7337](https://github.com/agentscope-ai/QwenPaw/pull/7337) | wangfei010313 | Separated model output capabilities from request limits |

### Open PRs Under Review (27 total)
| PR | Author | Summary |
|----|--------|---------|
| [#7382](https://github.com/agentscope-ai/QwenPaw/pull/7382) | sanfran1068 | Adapts `@agentscope-ai/chat` to 1.2.0-beta; implements structured beforeSubmit and cancellation callbacks |
| [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | rayrayraykk | **Draft: Mobile** — Introduces native iOS/Android client via Expo/React Native |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | wuyak | Adds workspace-scoped preload configuration for frequently-used Skills |
| [#7380](https://github.com/agentscope-ai/QwenPaw/pull/7380) | zhijianma | Cuts test suite wall clock by 41%; removes zero-value tests |
| [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) | wangfei010313 | **Fixes #7305** — Restores automatic model discovery for custom OpenAI-compatible providers |
| [#7381](https://github.com/agentscope-ai/QwenPaw/pull/7381) | hongxicheng | Adds bounded timeouts and watchdog improvements to DingTalk stream |
| [#7057](https://github.com/agentscope-ai/QwenPaw/pull/7057) | lcq225 | Adds user-local bin directories to subprocess PATH for systemd/Docker environments |
| [#7361](https://github.com/agentscope-ai/QwenPaw/pull/7361) | zsrmoyanzsr | Implements paginated chat history with virtualized transcript |
| [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) | jinliyl | Integrates ReMe 0.4.1.9 with hardened embedding recovery |
| [#7372](https://github.com/agentscope-ai/QwenPaw/pull/7372) | jinglinpeng | Unifies packaged Python runtime source for Tauri desktop |

---

## 4. Community Hot Topics

### Highest Engagement Issues

1. **#7318 — QwenPaw Hub Multi-Tenant Discussion** (10 comments, 1 reaction)  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7318)  
   **Analysis:** The community is actively shaping the v2.2.0 Hub vision. Users want multi-user access, admin-managed skills, and team-oriented deployment options. This signals strong enterprise/team adoption interest.

2. **#7298 — OpenSSL TLS Handshake Bug** (8 comments)  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7298)  
   **Analysis:** Carrier DPI resets TLS handshakes on desktop/Docker builds shipped with Python 3.11 (OpenSSL 3.0.x). **Resolved by PR #7328** upgrading to Python 3.13.

3. **#2814 — Multi-Agent Chat History Empty** (7 comments)  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/2814)  
   **Analysis:** Long-standing bug where the running callee agent's chat page shows empty history. Highlights multi-agent orchestration pain points.

4. **#4237 — In-Chat Shell Command Observability** (5 comments)  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/4237)  
   **Analysis:** Users want real-time visibility into running shell commands with kill/timeout controls. Reuses existing approval-card pipeline.

5. **#6273 — Task Tracking Concurrency Semantics** (5 comments)  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/6273)  
   **Analysis:** Inconsistent task tracking behavior across execution entry points; some paths serialize work, others silently ignore payloads.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Available |
|----------|-------|-------------|----------------|
| **High** | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | Synchronous calls freeze event loop; timeout never fires; 118–135s startup hangs | No |
| **High** | [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) | Desktop blocks ~60s on 'Installing managed Playwright Chromium' on critical path | No |
| **High** | [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) | Console-only startup takes 30–45s; `_load_builtin_channels()` imports all 18 channel modules | No |
| **Medium** | [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) | PDF processing fails with Chinese filenames causing "No connection adapters" error | No |
| **Medium** | [#7376](https://github.com/agentscope-ai/QwenPaw/issues/7376) | Icon inconsistency in sidebar navigation (v2.2.0b1) | No |
| **Medium** | [#7362](https://github.com/agentscope-ai/QwenPaw/issues/7362) | File Guard paths not enforced in GovernancePolicy — **RESOLVED by PR #7375** | ✅ Yes |
| **Medium** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | OpenSSL TLS handshake resets — **RESOLVED by PR #7328** | ✅ Yes |
| **Low** | [#7302](https://github.com/agentscope-ai/QwenPaw/issues/7302) | DingTalk channel sends empty messages when tool info disabled | PR #7381 |
| **Low** | [#7370](https://github.com/agentscope-ai/QwenPaw/issues/7370) | WeCom channel crashes with "File name too long" for base64 data URI images | No |

**Notable Fix Progress:** Two critical security/usability bugs (#7362 File Guard, #7298 TLS) were resolved today.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Comments | Likelihood for v2.2.0 |
|---------|-------|----------|----------------------|
| **Multi-tenant Hub** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 10 | Confirmed for v2.2.0 |
| **Native Mobile Client** | [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | Draft | Experimental |
| **Workspace Quick Access** (desktop) | [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) | 5 | Possible |
| **In-Chat Shell Observability** | [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | 5 | Under discussion |
| **Paginated Chat History** | [#7361](https://github.com/agentscope-ai/QwenPaw/pull/7361) | — | In review |
| **Skill Preload Config** | [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | — | In review |
| **Deployment Version Visibility** | [#7366](https://github.com/agentscope-ai/QwenPaw/issues/7366) | 3 | Likely |
| **Mobile Input Fix** (Android newline) | [#7355](https://github.com/agentscope-ai/QwenPaw/issues/7355) | 3 | Possible |

---

## 7. User Feedback Summary

### Pain Points Reported
- **HDD Update Performance** (#6380): Mechanical disk users experience 1.5-hour update times vs. 5–10 min on SSD; requests incremental updates and dependency caching.
- **Windows Installation UX** (#7188): Unclear "Delete local application cache" option during uninstall lacks explanation.
- **Loop Mode Persistence** (#7377): Agent loop mode reverts to default after task completion in v2.1.0 console.
- **File Upload Routing** (#7322): Files uploaded to specific knowledge base categories end up in workspace root.

### Use Cases Highlighted
- **Team Deployment**: Strong demand for multi-tenant Hub with admin-managed skills (#7318).
- **Shell Command Control**: Power users want visibility and control over running commands (#4237).
- **Deployment Management**: Users on platform.agentscope.io want clear version upgrade paths (#7366).

### Satisfaction Indicators
- Community engagement is active (10 comments on Hub roadmap).
- Bug fix turnaround is rapid (TLS and File Guard fixed same day as reported).

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>48h without response)

| Issue | Age | Comments | Priority |
|-------|-----|----------|----------|
| [#6380](https://github.com/agentscope-ai/QwenPaw/issues/6380) | ~35 days | HDD update performance; no response since 2026-07-23 | High |
| [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) | ~14 days | Playwright blocking startup; needs decision on lazy-load | High |
| [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) | ~45 days | Desktop workspace quick access; feature vs. won't-fix? | Medium |
| [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) | <1 day | Channel import bloat; likely fixable via lazy imports | Medium |

### PRs Awaiting Review (>3 days)

| PR | Age | Status | Notes |
|----|-----|--------|-------|
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | ~8 days | Under Review | First-time contributor; workspace-scoped skill preload |
| [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) | ~9 days | Open | ReMe 0.4.1.9 integration |
| [#7057](https://github.com/agentscope-ai/QwenPaw/pull/7057) | ~13 days | Ready for Human Review | Shell PATH improvements |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | ~47 days | Under Review | Per-session model overrides |

---

**Digest prepared:** 2026-08-28  
**Data source:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/QwenPaw)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-28

## 1. Today's Overview

ZeroClaw shows elevated activity in the final days of its v0.8.5 stabilization window (tracking issue [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459), closing 2026-08-30), with 23 issues and 50 PRs updated in the last 24 hours. The day's work is dominated by **architecture-level RFCs** (session persistence [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600), WASM plugin runtime [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076), wire protocol onboarding [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396), and memory lifecycle [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)) alongside a steady cadence of bug fixes and feature PRs. No new releases shipped today; the project remains in a stabilization/intake-frozen phase. Merge velocity is low (2 of 50 PRs closed), but most open PRs are progressing through CI/review rather than stalled, suggesting a busy landing window in the next 1–3 days.

## 2. Releases

No new releases in the last 24 hours. The active stabilization line is **v0.8.5** ([#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)), with intake frozen since 2026-08-04 and the milestone close scheduled for 2026-08-30. Weekly cuts continue to ship ready work without waiting for every milestone item.

## 3. Project Progress

Two PRs were closed/merged in the last 24 hours:

- **[#10413](https://github.com/zeroclaw-labs/zeroclaw/pull/10413)** — `test(channels): keep Telegram photo upload test offline` (ump45nose). Replaced a live `api.telegram.org` request with a local Wiremock endpoint, improving test hermeticity. Closed without merging into a release branch in the data shown; classified as `risk:low`, `size:XS`.
- **[#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329)** — Bug resolved: *Resilient wrapper truncation shadows loop-level context-overflow recovery for OpenAI-compatible providers*. Fix lifts context-overflow recovery out of the resilient provider wrapper so the loop-level recovery path actually engages. `risk:high`, `provider:reliable`/`provider:compatible`.

**Notable PRs advancing toward merge** (open, active review, multiple maintainer signals):
- **[#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527)** — Rust toolchain bump to 1.98.0 (source floor remains 1.96.0). `principal contributor` signal.
- **[#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819)** — Pixel-level image validation before provider dispatch; addresses a class of corrupt-image request failures.
- **[#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214)** — Entry-count log rotation + multi-segment log queries.
- **[#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)** — Context-compaction budget tied to selected model window ratio (replaces fixed 32k cap).
- **[#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)** — Multi-model per provider profile (a single credential/end-point can host multiple model aliases).
- **[#10380](https://github.com/zeroclaw-labs/zeroclaw/pull/10380)** — Restore persisted ACP transcripts in ZeroCode.
- **[#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350)** — Measurement-only Windows test jobs in CI (advisory only, not in required gate yet).

## 4. Community Hot Topics

Discussion volume is heavily concentrated in the **RFC/architecture tier**, where maintainer review is the bottleneck rather than community interest:

| # | Item | Type | Comments | Why it matters |
|---|------|------|----------|----------------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | RFC | 27 | Defines the ownership boundary between runtime, channels, and ACP. Reaches Rev. 2 with typed ingress envelope + durable admission semantics. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified attachment architecture for web chat and channels | RFC | 21 | At Rev. 9, near ratification. Anchors the attachment contract that several Telegram/webhook PRs depend on. |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC: Decouple memory lifecycle policy from storage backends | RFC | 20 | Has been open since 2026-05-22; long-running consensus-building. |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | RFC: Make wire protocol first-class in provider construction | RFC | 15 | Ratified shape governed by FND-003 Rev. 15. Blocks cleaner onboarding for compatible providers. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker] Maintainer decision queue for RFCs and design issues | Tracker | 14 | The operational funnel that decides what actually ships. |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | [Tracker] Session-persistence contract ownership and layer ordering | Tracker | 14 | Coordinates four workstreams touching the same contract; needs an owner. |

**Underlying need:** ZeroClaw is consolidating a year of growth into a coherent architecture. Community signal is "stop adding edge cases, ratify the boundaries" — the same set of reviewers (Audacity88, JordanTheJet, NiuBlibing) appear across the highest-comment threads, indicating a maintainer-capacity constraint rather than disagreement.

## 5. Bugs & Stability

Ranked by severity and current acceptance status:

| Sev | Issue | Component | Status | Fix PR? |
|-----|-------|-----------|--------|---------|
| **P1** | [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) — cron manual trigger and run-history reads are check-then-act across an agent rename | runtime/cron/security | accepted, follow-up | None linked |
| **P1** | [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) — Anthropic-backed compatible gateways reject `image_url` blocks inside tool results | provider:compatible | accepted, follow-up | None linked |
| P2 / high | [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) — Telegram reply-threads fragment conversation memory into per-thread buckets | channel:telegram / memory | open | None linked |
| P2 / high | [#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329) — Resilient wrapper truncation shadows loop-level context-overflow recovery | provider | **closed** | bundled with the bug |
| P2 / high | [#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409) — Temp file handling in `zeroclaw-channels` uses 0o644, leaking media (voice, images) on shared systems | channel/security | open | filed by `arena-ai-coding-agent[bot]` — needs human review |
| P2 | [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) — Second message during an active turn starts a parallel run in the same session (duplicate work, duplicate reply) | runtime/daemon | open | **[#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411)** (serialize same-session messages) in flight |
| P2 | [#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186) — Terminal fallback text bypasses live delivery seams | runtime | open, follow-up | None linked |
| P2 | [#10286](https://github.com/zeroclaw-labs/zeroclaw/issues/10286) — Restored ZeroCode transcripts omit persisted turns after history trimming | zerocode | in-progress | [#10380](https://github.com/zeroclaw-labs/zeroclaw/pull/10380) in flight |
| P2 | [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) — Disable cachePoint for Bedrock Nova 2 Lite via config | provider:bedrock | in-progress, accepted | None linked |
| P3 | [#10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326) — Reliable streaming errors report requested model instead of served pinned model | provider | accepted, follow-up | None linked |

**Stability read:** No new crash-class (S0) reports today. The two P1 items are filed deliberately below S0 (cross-agent boundary + narrow window) but are the highest-leverage fixes before v0.8.5 closes. The temp-file permission bug ([#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409)) is a likely quick patch candidate and warrants a fast security review.

## 6. Feature Requests & Roadmap Signals

- **[#10419 — Stream agent-loop tokens from POST /webhook (SSE)](https://github.com/zeroclaw-labs/zeroclaw/issues/10419)** (dakaii). When `stream: true` and `Accept: text/event-stream`, the webhook should stream cumulative tokens via SSE. **Likelihood: high for v0.8.6 or v0.9.0** — aligns with the agent-loop and observability direction already visible in #10214 and #9535.
- **[#10421 — Paginate persisted ACP transcript restoration in ZeroCode](https://github.com/zeroclaw-labs/zeroclaw/issues/10421)** (Audacity88). Bounded pagination while preserving full-transcript navigation. **Likelihood: high**, since it directly follows PR #10380 (same author, same area).
- **[#10244 — Add agent deletion and bulk cleanup to ZeroCode](https://github.com/zeroclaw-labs/zeroclaw/issues/10244)** (Audacity88). Closes a long-standing UX gap (list/details/rename but no delete). **Likelihood: high for v0.8.6.**
- **[#10405 — Implement session-scoped prompt attachments (#9998)](https://github.com/zeroclaw-labs/zeroclaw/issues/10405)** (Audacity88). Tracker for accepted #9998 across durable chat, ACP, prompt mutation, approval, redaction, lifecycle. **Likelihood: medium-term**, multi-workstream.
- **[#10076 — Composable WASM plugin runtime architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)** (NiuBlibing). Expands the WASM Component Model host with composable typed extension points. **Likelihood: post-v0.9.0**; this is foundational and unlikely to land before the current stabilization line closes.
- **[#10402 — Serply web search provider](https://github.com/zeroclaw-labs/zeroclaw/pull/10402)** (googio). Adds another `web_search_tool` provider. **Likelihood: high** as a low-risk additive integration.

## 7. User Feedback Summary

- **Pain point — multi-turn context loss.** [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) (Telegram reply-thread memory fragmentation) and [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) (parallel runs producing duplicate replies in the same session) are both expressed as "the agent forgets or doubles up in real conversations." Together they signal that **session serialization and per-thread memory keying are top user-facing pain**, not just internal architecture concerns.
- **Pain point — provider interoperability.** [#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329) and [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) show that the resilient/compatible provider path is producing silently broken behavior (truncation shadowing overflow recovery; image content rejected in tool results). Users running Anthropic-compatible gateways are materially blocked.
- **Pain point — observability and Bedrock quirks.** [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) (Nova 2 Lite cachePoint) and [#10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326) (reliable streaming reports wrong model in errors) indicate users want **finer provider controls and truthful error reporting**.
- **Positive signal — hosted/streaming UX demand.** [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) comes from a "Hosted Path A" consumer, indicating real production deployment is asking for token streaming. This is a satisfaction-adjacent signal: users have enough confidence in the system to want it to feel more responsive.
- **Satisfaction read:** Active issue volume is high, but most newly opened items are tracker/feature work rather than regressions. The merged test-hygiene PR ([#10413](https://github.com/zeroclaw-labs/zeroclaw/pull/10413)) and the closed provider-overflow fix ([#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329)) show the project is **closing real user-reported problems**, not just refactoring.

## 8. Backlog Watch

Items that have been open long enough or are blocking enough to warrant maintainer attention:

- **[#6850 — Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** (since 2026-05-22, 98+ days). High-impact RFC that multiple gateway/memory PRs implicitly depend on. Needs a maintainer decision to either ratify or split.
- **[#9600 — Session-persistence contract ownership](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)** is the *coordination* issue for the family that includes #9487, #9998, #10237, #10405, #10408, #10411. No owner named yet, despite 14 comments.
- **[#8692 — Maintainer decision queue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** is the meta-tracker; its own low progress suggests the decision queue itself is the bottleneck.
- **Stale-candidate PRs (need author action to unblock v0.8.5):**
  - [#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064) — Telegram self-destruct approval cards.
  - [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) — Distinguish absent vs empty `allowed_tools` (security-relevant; risk:high).
  - [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) — `always_ask` survives Full autonomy (security-relevant; risk:high).
  - [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) — Multi-model per provider profile (size:XL, last activity 2026-08-28 — fresh, but wide surface).
  - [#10005](https://github.com/zeroclaw-labs/zeroclaw/pull/10005) — Channel health based on the channel, not listener liveness.
  - [#9379](https://github.com/zeroclaw-labs/zeroclaw/pull/9379) — Charge image markers in context-token estimate.
  - [#9283](https://github.com/zeroclaw-labs/zeroclaw/pull/9283) — Decompress gzip/brotli/deflate in `web_fetch`.
  - [#9378](https://github.com/zeroclaw-labs/zeroclaw/pull/9378) — Persist failed/cancelled ACP turn transcripts.
- **P1 follow-ups awaiting fix PRs:** [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) (cron rename TOCTOU) and [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) (Anthropic-compatible image-in-tool-results) are accepted but have no PR linked.
- **Untriaged but security-relevant:** [#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409) (channel temp file permissions). Filed by an automation bot; should be human-triaged quickly given the data-leak surface.

---

*Digest generated 2026-08-28 from GitHub activity on the last 24h. All links point to `github.com/zeroclaw-labs/zeroclaw`.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*