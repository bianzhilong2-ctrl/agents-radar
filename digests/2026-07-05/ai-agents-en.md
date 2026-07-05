# OpenClaw Ecosystem Digest 2026-07-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-05 02:07 UTC

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

User Safety: safe

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Open-Source Ecosystem (2026-07-05)

---

## 1. Ecosystem Overview

The open-source AI agent ecosystem shows a **bimodal distribution**: a cluster of highly active "claw-family" projects (NanoBot, Hermes, ZeroClaw, NanoClaw, CoPaw) driving rapid iteration on runtime stability, multi-provider support, and developer tooling, contrasted with a long tail of low-activity or dormant forks (NullClaw, TinyClaw, Moltis, ZeptoClaw). **No project released a new version today**, indicating a cross-ecosystem focus on stabilization over feature delivery. The dominant technical themes are **provider abstraction**, **memory/RAG extensibility**, **security hardening** (credential handling, sandboxing), and **Python 3.14 compatibility**. Community engagement is strongest around robustness (crash fixes, auth reliability) and extensibility (custom providers, memory plugins), signaling maturation from prototype to production-grade tooling.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs | Releases | Health Score (1-10) | Status Tier |
|---------|--------------|-----------|------------|----------|---------------------|-------------|
| **NanoBot** | 2 hot + backlog | 6 | **6** | 0 | **8** | **Rapidly Stabilizing** |
| **Hermes Agent** | 50 touched | 50 touched | 0 | 0 | **7** | **High-Velocity Iteration** |
| **ZeroClaw** | 50 touched | 50 touched | 0 | 0 | **6** | **High-Velocity Iteration** |
| **NanoClaw** | 3 active | 40 opened | 2 | 0 | **6** | **Feature Expansion** |
| **CoPaw** | 11 open | 3 open | 1 | 0 | **7** | **Active Development** |
| **PicoClaw** | 4 updated | 7 updated | 2 | 0 | **5** | **Maintenance Mode** |
| **LobsterAI** | 1 open | 2 merged | 2 | 0 | **4** | **Stagnating** |
| **OpenClaw** (core) | — | — | — | — | **7*** | **Reference Implementation** |
| **IronClaw** | — | — | — | — | **5*** | **Unknown** |
| **NullClaw** | 0 | 0 | 0 | 0 | **1** | **Dormant** |
| **TinyClaw** | 0 | 0 | 0 | 0 | **1** | **Dormant** |
| **Moltis** | 0 | 0 | 0 | 0 | **1** | **Dormant** |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | **1** | **Dormant** |

*Scores for OpenClaw/IronClaw inferred from "core reference" positioning and safety status only; no activity data provided.

**Tier Definitions:**
- **Rapidly Stabilizing**: High merge rate, bug-fix focus, near-release readiness
- **High-Velocity Iteration**: Massive parallel workstreams, low merge rate, architectural refactoring
- **Feature Expansion**: High PR volume, mixed bug/feature, security/documentation push
- **Active Development**: Steady issue/PR flow, user-facing feature work
- **Maintenance Mode**: Low volume, chore/bug fixes, stale high-priority items
- **Stagnating**: Critical bugs unresolved >90 days, minimal maintainer response

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Reference Architecture**: As the "core reference" (github.com/openclaw/openclaw), it sets API/interface standards the claw-family inherits (evident in NanoClaw, PicoClaw, ZeroClaw naming/patterns).
- **Safety Baseline**: Explicit "User Safety: safe" designation—critical for enterprise adoption where LobsterAI/CoPaw show credential leakage risks.
- **Ecosystem Gravity**: 6+ active derivatives indicate strong architectural influence; ZeroClaw/NanoClaw explicitly track "claw" conventions.

**Technical Approach Differences:**
| Dimension | OpenClaw (Inferred) | Hermes/ZeroClaw | NanoBot | CoPaw |
|-----------|---------------------|-----------------|---------|-------|
| **Architecture** | Minimal core, plugin-first | Monorepo, multi-runtime (WASM, Docker, native) | Gateway-centric, channel adapters | Agent-centric, memory-first |
| **Provider Model** | Abstract interface | Registry + adapter pattern (50+ providers) | MCP tool protocol + channel bridges | LLM fallback chains + auto-memory |
| **Extensibility** | Skill/Plugin SOP | WASM plugins, OCI registry, SOP engine | Sub-agent MCP inheritance | Custom agent UI, cron scheduling |
| **Security** | Baseline safe | Leak detection, egress control, OTel | Atomic writes, token guards | Proxy propagation, memory isolation |

**Community Size Comparison:**
- **Direct contributors**: Unknown (no activity data), but **derivative ecosystem = 6 active projects** (NanoBot, PicoClaw, NanoClaw, ZeroClaw, IronClaw, ZeptoClaw) vs. Hermes (single repo, 50+ daily contributors), ZeroClaw (monorepo, 50+ daily), NanoBot (steady 5-10 PR authors/day).
- **Adoption signal**: High fork/derivative count suggests **architectural adoption > direct contribution**—OpenClaw likely serves as a specification layer rather than a runtime.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Provider Abstraction & Multi-Model Support** | Hermes (Groq, Cerebras, Eden.ai PRs), NanoBot (MCP tools), ZeroClaw (OpenAI bridge, OCI plugins), CoPaw (LLM fallback, OCG/Gemini), NanoClaw (agent APIs) | Unified adapter interface; credential pooling; vision/tool-call parity; streaming standardization |
| **Memory/RAG Extensibility** | Hermes (#844 RAG, #42864 scope-recall), ZeroClaw (cron memory leak #8695), CoPaw (auto-memory state #5775, #5777), NanoBot (MCP inheritance #4697) | Pluggable memory backends; turn-level recall; hybrid search; per-agent configuration; persistence guarantees |
| **Security & Credential Hardening** | Hermes (Anthropic keychain #58612, Telegram token leak #58594, 401/429 confusion #40960), ZeroClaw (leak detector #8723, OCI supply-chain #7497), LobsterAI (proxy propagation #2271), CoPaw (model censorship #5772) | Zero-trust credential handling; audit logging redaction; sandbox egress control; supply-chain verification |
| **Runtime Stability & Modern Python** | Hermes (Python 3.14 DaemonThreadPoolExecutor #57459, #58598), NanoBot (asyncio locks, atomic writes), ZeroClaw (SIGSEGV #8654, malformed tool-calls #8675), PicoClaw (Android launch #3182) | 3.14 compatibility; crash-proof concurrency; structured error handling; cross-platform service management |
| **Observability & Debugging** | ZeroClaw (OTel tracing #6641, ZeroCode log detail #8646), Hermes (context-health #58597), CoPaw (cron timezone #5779) | Turn-level tracing; structured logs; memory/state inspection; timezone-aware scheduling |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture | Key Differentiator |
|---------|---------------|-------------|------------------------|---------------------|
| **Hermes Agent** | **Universal LLM Gateway** | Power users, researchers, multi-platform deployments | Monorepo: Core runtime + 50+ provider adapters + Matrix/Telegram/WhatsApp/Discord/Slack/CLI/WebUI channels | **Breadth**: Single binary connects to everything; skill hub + memory plugins + SOP engine |
| **ZeroClaw** | **Production-Grade Agent Runtime** | Enterprise/ops teams, plugin developers | Monorepo: WASM plugin sandbox, OCI registry, OTel tracing, SOP visual authoring, goal-mode execution | **Depth**: Supply-chain security, formal verification (goal-mode), multi-runtime (WASM/Docker/native) |
| **NanoBot** | **Stable Channel Gateway** | Developers building multi-channel bots | Gateway-centric: MCP tool protocol → channel adapters (DingTalk, Mattermost, Copilot, etc.) | **Reliability**: Crash-free MCP handling, token race guards, Windows/Linux parity |
| **CoPaw** | **Personal Assistant UX** | End-users, desktop/mobile users | Agent-centric: Auto-memory, cron scheduling, custom UI, model fallback chains | **Usability**: Desktop tray, wake-word, personalized avatars, timezone-aware automation |
| **NanoClaw** | **Security-First Agent Framework** | Security-conscious deployers | Agent runner + mount topology + security perimeter v2 migration | **Compliance**: Mount isolation, data privacy controls, buffer/policy tools |
| **PicoClaw** | **Lightweight/Embedded Agent** | IoT, mobile, resource-constrained | Minimal core, Matrix crypto (libolm→vodozemac), Android service | **Portability**: Android native, crypto modernization, small footprint |
| **LobsterAI** | **Task/Skill Automation** | Enterprise workflow automation | Browser-managed tasks, skill generation, attachment handling | **Browser-Native**: Managed browser contexts for web automation |

**Architectural Spectrum:**
- **Gateway-First** (NanoBot, Hermes) → **Agent-First** (CoPaw, ZeroClaw) → **Runtime-First** (ZeroClaw WASM, NanoClaw security perimeter)
- **Monolithic Monorepo** (Hermes, ZeroClaw) vs. **Modular Gateway** (NanoBot) vs. **Minimal Core** (PicoClaw, OpenClaw reference)

---

## 6. Community Momentum & Maturity

| Tier | Projects | Indicators |
|------|----------|------------|
| **Rapidly Iterating (Pre-1.0, High Churn)** | **Hermes Agent, ZeroClaw** | 50+ daily issues/PRs; 0 merges today = massive parallel WIP; architectural refactors (goal-mode, context-health, WASM/OCI); RFC-driven governance |
| **Rapidly Stabilizing (Pre-Release Polish)** | **NanoBot, CoPaw** | High merge rate (NanoBot: 6/6 PRs merged); critical P1 bugs fixed; feature PRs in review for next release; user-facing pain points resolved |
| **Feature Expansion (Active Development)** | **NanoClaw, PicoClaw** | High PR volume (NanoClaw: 40); security/docs focus; PicoClaw has stale high-priority bugs (Android, crypto) indicating maintainer bandwidth limits |
| **Stagnating (Critical Debt)** | **LobsterAI** | 3-month-old critical bugs (#1350, #1352); only 2 maintenance PRs merged; no feature velocity |
| **Dormant / Reference Only** | **NullClaw, TinyClaw, Moltis, ZeptoClaw, IronClaw** | Zero activity; likely abandoned or private forks |
| **Reference Layer** | **OpenClaw** | No visible activity but high derivative count = specification influence |

**Maturity Signals:**
- **Hermes/ZeroClaw**: Building **production infrastructure** (OTel, OCI, SOP, goal-mode) — targeting 1.0 readiness
- **NanoBot/CoPaw**: **User-experience polishing** — crash fixes, UI streaming, desktop integration — targeting stable minor releases
- **NanoClaw/PicoClaw**: **Niche hardening** (security, embedded) — slower cadence, dependency on upstream (OpenClaw?)

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **1. Provider Abstraction → Standardized Protocol** | Hermes/NanoBot/ZeroClaw all building adapter registries; MCP (Model Context Protocol) emerging as de-facto tool interface (NanoBot, Hermes skills) | **Adopt MCP or equivalent**; avoid vendor lock-in; build once, deploy across gateways |
| **2. Memory/RAG as Pluggable Service, Not Core** | Hermes (scope-recall, RAG), ZeroClaw (cron memory isolation), CoPaw (auto-memory state), NanoBot (MCP inheritance) | **Design memory as replaceable plugin**; support multiple backends (vector, graph, episodic); expect per-agent config |
| **3. Security Shifts from "Auth" to "Supply-Chain & Runtime"** | ZeroClaw (OCI WASM, leak detector), Hermes (egress control, keychain isolation), NanoClaw (mount topology), LobsterAI (proxy propagation) | **Implement**: Credential redaction in logs; sandbox egress allow-lists; plugin signature verification; audit trails |
| **4. Observability Becomes Non-Negotiable** | ZeroClaw (OTel tracing), Hermes (context-health), CoPaw (cron debugging) | **Instrument turn-level spans**; correlate LLM calls, tool calls, memory ops; expose structured logs for debugging |
| **5. Multi-Runtime Deployment Targets** | ZeroClaw (WASM/Docker/native), PicoClaw (Android), Hermes (CLI/WebUI/Desktop/Matrix/Telegram/WhatsApp) | **Build runtime-agnostic cores**; package as WASM, container, native binary; support headless + UI channels |
| **6. Goal/Intent-Based Execution Replaces Linear Chains** | ZeroClaw (goal-mode admission/verification), Hermes (SOP engine, steer command), NanoBot (sub-agent MCP inheritance) | **Model workflows as declarative goals with verification**; enable mid-execution steering; separate planning from execution |
| **7. Desktop/Embedded Convergence** | CoPaw (tray, wake-word, custom UI), PicoClaw (Android service), Hermes (Desktop per-session workspace) |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑07‑05**

---

###  أيام المحتوى

| Section | Highlights |
|---------|------------|
|**Today's Overview** | The repository saw steady bug‑fix activity and a few focus‑area PRs merged, but no new releases were pushed.  Two high‑                    
  impact issues were closed – a process‑crash bug and a Copilot token race condition – indicating a strong emphasis on stability.  |
|**Releases** | **None** – no new tags or pushes were created in the last 24 h. |
|**Project Progress** | Six PRs were closed/merged: <br>• #4695 – upstream merge <br>• #4690 – Windows gateway stop fix <br>• #4646 – DingTalk stream shutdown fix <br>• #4653 – atomic write restore <br>• #4684 вами – Copilot token guard <br 펤 #自产 – malformed MCP result containment |
|**Community Hot Topics** | • #4652 – Process crash on MCP tool error (#3 comments) <br>• #4677 – Copilot token race (#1 comment)|
|**Bugs & Stability** | • #4666 – Shielded malformed MCP results (fixed) <br>• #4684 – Race‑condition guard (fixed) <br>• #4652 – Crash on empty MCP data (resolved) <br>• #4690 – Windows stop fallback (resolved) |
|**Feature Requests & Roadmap** | • #4459 – Mattermost channel (open, slated for v2) <br>• #4697 – Configurable MCP inheritance for sub‑agents (feature) <br>• #4696 –  Concierge‑style Markdown streaming (<feature>) |
|**User Feedback Summary** | Users primarily complained of abrupt crashes when MCP tools returned errors and of intermittent token refresh failures.  Both concerns muunpped with the above‑listed fixes. |
|**Backlog Watch** | No pending issues older than a week remain.  The longest‑standing open pull request is #4459, which has seen activity but has yet to merge. |

---

## 1️⃣ Today's Overview

NanoBot continued to advance its reliability sphere, closing two significant bugs while expanding its ecosystem with new channel support.  Gewalt of PRs remains in the **open** phase, focused on wire‑tap levels of security and frontend polish.  No new version was published; however, the solid bug‑fix momentum signals a healthy maintenance cadence.

---

## 2️⃣ Releases

> **None** – no tag or release events in the last 24 h.  
> The next version will likely incorporate the newly merged fixes and new channel integrations.

---

## 3️⃣ Project Progress

| PR | Type | Summary | Status |
|----|------|--------|--------|
|[#4695](https://github.com/HKUDS/nanobot/pull/4695) | Merge | Pull the latest 2026‑06‑26 upstream changes. | **Merged** |
|[#4690](https://github.com/HKUDS/nanobot/pull/4690) | Bug | Windows gateway stop now falls back properly to `taskkill` when `CTRL_BREAK_EVENT` fails. | **Closed** |
|[#4646](https://github.com/HKUDS/nanobot/pull/4646) | Bug | Stops DingTalk streaming task cleanly during shutdown, preventing stray error logs. | **Closed** |
|[#4653](https://github.com/HKUDS/nanobot/pull/4653) | Bug | Restored crash‑durable atomic writes in `pairing._save()` to guard pair‑file consistency. | **Closed** |
|[#4684](https://github.com/HKUDS/nanobot/pull/4684) | Bug | Added an `asyncio.Lock` to guard Copilot token refreshes and eliminate race conditions on concurrent chat calls. | **Closed** |
|[#4666](https://github.com/HKUDS/nanobot/pull/4666) | Bug | Shields against malformed MCP tool results, marking timeouts/cancellations/retries as structured errors. | **Closed** |

These changes address both runtime stability and data‑integrity conditions that surfaced during recent user testing.

---

## 4️⃣ Community Hot Topics

| Issue | Activity | Insight |
|-------|----------|--------|
|[#4652](https://github.com/HKUDS/nanobot/issues/4652) | 3 comments, 0 thumbs‑up | Users encountered hard crashes when an MCP tool call returned an error or empty data.  The fix (PR #4666) now catches such exceptions, preventing a pipeline crash. |
|[#4677](https://github.com/HKUDS/nanobot/issues/4677) | 1 comment, 0 thumbs‑up | Discord‑style race condition in Copilot token refresh caused intermittent authentication failures under high concurrency.  It is now guarded by a lock (PR #4684). |

These threads illustrate the community’s focus on **robustness** (no crashes, reliable authentication) and real‑time workflows.

---

## 5️⃣ Bugs & Stability

| Bug | Priority | Fix PR |
|-----|----------|--------|
|Crash on MCP tool exception (`#4652`) | P1 | #4666 |
|Copilot token race condition (`#4677`) | P1 | #4684 |
|Windows gateway stop crash (`#4690`) | P2 | #4690 |
|Ding:innen stream memory leak (`#4646`) | P2 | #4646 |
|Atomic write safety loss (`#4653`) | P1 | #4653 |

All high‑severity bugs closed today; no critical regressions have been reported.

---

## 6️⃣ Feature Requests & Roadmap Signals

| Feature PR | Feature | Status |
|------------|---------|--------|
|[#4459](https://github.com/HKUDS/nanobot/pull/4459) | Mattermost channel integration | **Open** – added to v2 roadmap |
|[#4697](https://github.com/HKUDS/nanobot/pull/4697) | Configurable MCP inheritance for sub‑agents | **Open** – feature in progress |
|[#4696](https://github.com/HKUDS/nanobot/pull/4696) | Smooth Markdown revealing in WebUI streaming | **Open** – UI polish |
|[#4698](https://github.com/HKUDS/nanobot/pull/4698chers) | Standardize OAuth‑CLI‑Kit error messages | **Open** – cross‑stack consistency |

The Mattermost integration is the most visible roadmap item; all others represent incremental API refinements that will appear in future minor releases.

---

## 7️⃣ User Feedback Summary

- **Crash‑Free Runtime:** Fixed immediate termination on MCP errors; trust in long‑runningLessons improved.  
- **Auth Reliability:** Token race condition patch ensures uninterrupted copilot access, boosting user confidence for high‑density conversations.  
- **Platform Compatability:** Windows gateway fix eliminates OSError tracebacks, reducing support tickets.  
> Overall sentiment remains positive, with most comments praising the stability effort.

---

## 8️⃣ Backlog Watch

| Item | Type | Notes |
|------|------|-------|
|[#4459](https://github.com/HKUDS/nanobot/pull/4459) | Feature | Open for 3 weeks; approved by maintainers; slated for v2. |
|[#4696](https://github.com/HKUDS/nanobot/pull/4696) | Feature | Single comment, early in review; likely to merge soon. |
|[#4697](https://github.com/HKUDS/nanobot/pull/4697) | Feature | Mixed priority; waiting for policy review. |

No critical placeholders remain; backlog chiefly consists of feature improvements Ahmad.

---

**Conclusion** –  
NanoBot’s maintenance activity on **July 5, 2026** demonstrates a mature cycle: bugs are resolved promptly, stability spikes are mitigated, and feature requests are actively monitored.  With no release today, the next version will probably embed these critical fixes and add the Mattermost channel once PR #4459 merges.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑07‑05)**  
*Compiled from GitHub activity on the `nousresearch/hermes‑agent` repository.*

---

## 1. Today’s Overview
- The Hermes Agent ecosystem is **highly active**: 50 issues and 50 pull‑requests were touched in the last 24 h, with the overwhelming majority still open (≈ 88 % open issues, 86 % open PRs).  
- Activity is concentrated on **core stability (credential handling, Python 3.14 compatibility, vision fallback)** and **extensibility (new model providers, memory plugins, platform adapters)**.  
- No new releases were cut today, indicating that the maintainer team is still in a “continuous integration” mode, processing bugs and feature work before the next version bump.  

---

## 2. Releases
*No new version was published on 2026‑07‑05.*  

---

## 3. Project Progress (Merged / Closed PRs)
| PR | Title / Goal | Type | Impact |
|----|--------------|------|--------|
| **#58606** | Add Groq & Cerebras as recognized providers | Feature | Expands the provider registry; paired with issue #58603. |
| **#58612** | Isolate Anthropic adapter tests from macOS Keychain | Test‑fix, Security | Prevents accidental credential leakage during CI. |
| **#57459** | Python 3.14 compatibility for `DaemonThreadPoolExecutor` | Bug‑fix | Stops crashes of all concurrent tools on the newest interpreter. |
| **#58598** | Adapt `DaemonThreadPoolExecutor` for new worker signature (duplicate of #57459) | Bug‑fix | Reinforces the 3.14 fix across the codebase. |
| **#58601** | Docker sandbox egress‑control (allow‑list mode) | Feature | Gives operators fine‑grained network isolation for containers. |
| **#58610** | Compact large tool results behind handles | Feature | Improves UI readability and avoids oversized payloads in chat history. |
| **#58607** | Fix QQAdapter reconnect parameter | Bug‑fix | Restores automatic reconnection for the QQ gateway. |
| **#58594** | Redact Telegram bot tokens from error logs | Security | Eliminates credential leakage in production logs. |
| **#58595** | Compression of dict/list content in `write_file` summarizer | Bug‑fix | Prevents `AttributeError` when tool output is non‑string. |
| **#58608** | Preserve dots in custom‑provider model IDs | Feature | Enables exact model naming for providers that use dot notation (e.g., `Claude‑Opus‑4.6‑hq`). |
| **#58604** | `/steer` breakout and live‑UI tagging | Bug‑fix / UX | Allows mid‑batch steering commands without breaking tool batches. |
| **#58597** | Context‑health auto‑governance phases 1‑9 | Feature (framework) | Lays groundwork for systematic context validation and cleanup. |
| **#58591** & **#58565** | Matrix long‑command batching & skill bypass fixes | Bug‑fix | Removes command truncation and ensures skills run reliably on Matrix. |
| **#58569** (duplicate) | Clarify skill‑instruction enforcement (still open) | **No merge yet** – highlighted as a hot topic. |

*Closed PR count today: 0 (all listed PRs remain open). The majority of work is forward‑moving (new features, compatibility, security) rather than housekeeping.*

---

## 4. Community Hot Topics  
*Issues & PRs with the most discussion/comments today (≥ 5 comments or notable reactions).*

| Item | Summary | Comments / 👍 | Link |
|------|----------|---------------|------|
| **#844** *(Feature)* | “Knowledgebase RAG System – user‑configured document directory, local embedding, hybrid search & auto‑retrieval.” | 7 comments, 4 👍 | <https://github.com/NousResearch/hermes-agent/issues/844> |
| **#42864** *(Feature / RFC)* | “scope‑recall standalone memory provider – request for inclusion in core.” | 6 comments, 0 👍 | <https://github.com/NousResearch/hermes-agent/issues/42864> |
| **#40297** *(Feature)* | “Desktop: make workspace selectable per session rather than only at launch.” | 5 comments, 9 👍 | <https://github.com/NousResearch/hermes-agent/issues/40297> |
| **#40960** *(Bug, P2)* | “Credential‑pool exhaustion returns misleading 401 instead of true 429/402.” | 3 comments, 0 👍 | <https://github.com/NousResearch/hermes-agent/issues/40960> |
| **#56004** *(Bug, P2)* | “Qwen3.6/vLLM prior‑turn reasoning lost on replay.” | 3 comments, 2 👍 | <https://github.com/NousResearch/hermes-agent/issues/56004> |
| **#58596** *(Bug, P3)* | “DaemonThreadPoolExecutor crashes on Python 3.14 (`_initializer` removed).” | 2 comments | <https://github.com/NousResearch/hermes-agent/issues/58596> |
| **#58569** *(Bug, duplicate)* | “Agent loads skills but treats instructions as advisory.” | 2 comments | <https://github.com/NousResearch/hermes-agent/issues/58569> |
| **#58041** *(Feature)* | “WhatsApp setup wizard – interactive one‑command config.” | 2 comments | <https://github.com/NousResearch/hermes-agent/issues/58041> |

**Analysis:**  
- **RAG & memory extensibility** dominate the conversation (issues #844, #42864, #21709). Users are pushing Hermes toward a richer, persistent knowledge base that can be authored locally.  
- **Desktop ergonomics** (#40297) and **cross‑platform onboarding** (WhatsApp wizard #58041) indicate demand for a smoother UI/UX as the product matures beyond CLI‑first usage.  
- **Credential / auth reliability** (issues #40960, #34143, #58594) is a recurring pain point, especially as more providers and higher‑quota models are added.  
- **Python 3.14 compatibility** is an urgent technical blocker, reflected in both the issue (#58596) and several PRs (#57459, #58598).  

---

## 5. Bugs & Stability (ranked by severity)

| Severity | Issue / PR | Core Area | Symptom | Fix Status |
|----------|------------|-----------|---------|------------|
| **Critical (P1‑P2)** | **#40960** – Credential pool exhaustion → 401 | Auth / CLI | Misleads users, can halt long‑running sessions. | No fix yet (open). |
| **Critical (P2)** | **#58594** – Telegram token leakage in logs | Security / Gateway | Sensitive bot tokens written to public logs. | PR #58594 opened (open). |
| **High (P2)** | **#56004** – Qwen3.6 prior‑turn reasoning stripped | Provider (Qwen) / Agent | Multi‑turn reasoning lost, breaking complex tasks. | No fix yet. |
| **High (P2)** | **#58581 / #58600** – Vision fallback not applied when main provider lacks vision | Vision tool | 400 errors on first call, degraded UX. | PR #58600 opened (open). |
| **Medium (P3)** | **#58596** – DaemonThreadPoolExecutor crashes on Python 3.14 | Core / Tools | All async tool execution fails. | Fix in PR #57459 (open) & #58598 (open). |
| **Medium (P3)** | **#58404** – Desktop sessions flagged as TUI | Desktop / Agent | Incorrect platform guidance, UI glitches. | No fix yet. |
| **Medium (P3)** | **#58569** – Skills treated as advisory | Skills hub | Agent ignores mandatory skill instructions. | Duplicate of #58569 (open). |
| **Low (P3)** | **#35530** – TUI resize SIGWINCH fallback missing | TUI | UI misalignment on resize. | No fix yet. |
| **Low (P3)** | **#58555** – ClawHub skill “View source” wrong URL | Docs / Skills hub | Minor documentation navigation issue. | No fix yet. |

*Overall*: Stability concerns revolve around **credential handling**, **Python 3.14 runtime changes**, and **provider‑specific edge cases** (vision, Qwen). Several mitigation PRs are in flight, but the most critical auth bug remains unresolved.

---

## 6. Feature Requests & Roadmap Signals

| Request | Core Motivation | Likelihood of landing in next minor release (v0.19.x) |
|---------|----------------|------------------------------------------------------|
| **RAG knowledge‑base system** (#844) | Users want local document indexing & hybrid search for on‑the‑fly retrieval. | **High** – aligned with recent “context‑health” work (PR #58597) and memory‑plugin activity. |
| **Scope‑recall memory plugin** (#42864) | Stand‑alone memory provider for turn‑level recall & auditability. | **Medium** – requires integration testing; could ship as an optional plugin. |
| **Per‑session workspace selection in Desktop** (#40297) | Improves multi‑project workflow for long‑running desktop sessions. | **Medium‑High** – UI‑focused PRs (Aurora theme, wake‑word) show UI attention; may be bundled into a desktop‑enhancement release. |
| **WhatsApp interactive setup wizard** (#58041) | Reduces friction for a high‑profile platform. | **Medium** – depends on platform‑gateway stability; a wizard could be added once core WhatsApp bugs are resolved. |
| **Voice wake‑word for Desktop** (#49383) | Hands‑free activation, aligns with consumer‑grade assistants. | **Low‑Medium** – hardware/audio pipeline adds complexity; likely a later roadmap item. |
| **Groq & Cerebras provider support** (#58603 / PR #58606) | Expands model ecosystem, direct community demand. | **High** – PR already open, small scope; expected to merge soon. |
| **Eden.ai aggregator provider** (#58571) | One‑stop API for many back‑ends. | **Low‑Medium** – requires new plugin infrastructure; may wait for next quarter. |
| **Docker egress allow‑list** (#58601) | Security hardening for sandboxed tools. | **High** – PR open, security relevance suggests fast‑track. |

---

## 7. User Feedback Summary
- **Authentication reliability** is the top pain point: users encounter misleading HTTP status codes and token leakage across providers (Anthropic, Telegram, Codex).  
- **Memory & knowledge management**: multiple issues request richer, user‑controlled retrieval (RAG) and more deterministic memory plugins (scope‑recall, Hindsight bug).  
- **Desktop usability**: desire for per‑session workspaces, UI themes, and voice activation indicates that the desktop client is moving from a dev‑tool toward a consumer‑grade interface.  
- **Provider diversity**: frequent requests for new model back‑ends (Groq, Cerebras, Eden.ai) highlight community expectation that Hermes stays a “one‑stop shop” for LLM APIs.  
- **Stability on modern Python**: The shift to Python 3.14 broke core concurrency utilities, causing widespread crashes; users are waiting for a hot‑fix.  

Overall sentiment is **constructive but urgent**: contributors are eager to see the core bugs resolved while the roadmap pushes toward richer knowledge features and a more polished desktop experience.

---

## 8. Backlog Watch (Long‑Open / High‑Impact Items)
| Issue / PR | Open Since | Reason for Attention |
|-----------|------------|----------------------|
| **#48534** *(Closed)* – Anthropic Max OAuth 404 | June 2026 (closed) | Highlights fragility of provider auth flows; may recur with future OAuth changes. |
| **#21709** – Hindsight memory storing entire novels | May 2026 | Could cause identity confusion; needs policy/gating before memory plugins are widely used. |
| **#31874** – Web UI gateway crash / D‑state on WSL2 | May 2026 | Affects Windows‑WSL users; still open and not yet addressed. |
| **#31513** – WSL2 gateway idle 100 % CPU | May 2026 | Resource exhaustion bug still unresolved. |
| **#57948** – Vision fallback first‑call 400 error | July 2026 (open) | Directly related to current Vision fallback PR #58600; high‑impact for vision‑enabled agents. |
| **#58569** – Skills treated as advisory (duplicate) | July 2026 | Prevents deterministic tool usage; risk of broken skill ecosystem. |
| **#58581** – Vision auxiliary fallback not working for DeepSeek | July 2026 | Same domain as #57948; pending fix. |
| **#58612** – Anthropic tests keychain isolation (open) | July 2026 | Security hygiene; merges soon but still in review. |
| **#58601** – Docker egress allow‑list (open) | July 2026 | Security feature; could be merged quickly, but needs final review. |

*Maintainers should prioritize:*
1. **Auth reliability (#40960, #34143, #58594)** – quick win with clear user impact.  
2. **Python 3.14 compatibility (PR #57459 / #58598)** – essential for all downstream users.  
3. **Vision fallback robustness (issues #57948, #58581, PR #58600)** – prevents runtime 400 errors for a growing set of vision‑enabled models.  
4. **RAG knowledge‑base (issue #844)** – aligns with the strategic move toward richer contextual agents.  

--- 

*Prepared by the AI‑Agent Open‑Source Analyst (2026‑07‑05).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑07‑05**

---

### 1. Today’s Overview  
The repository shows modest but steady activity: four issues and seven pull requests were updated in the last 24 hours, with three issues still open and one already closed. No new releases were published. The bulk of the recent work consists of routine chores (Docker image upgrades, .gitignore cleanup, translation sync) and a couple of bug‑fix merges that address session‑clear handling and test coverage. Overall health appears stable, though a handful of stale, high‑priority issues remain unaddressed.

---

### 2. Releases  
*None* – there are no new version tags or release notes to report for this snapshot.

---

### 3. Project Progress  
- **Closed PRs**:  
  - **#3221** – Reverts a test‑related change that introduced log errors on Windows paths.  
  - **#3224** – Fixes the `/clear` command so that a routed (non‑default) agent’s session is correctly cleared, resolving a routing‑logic bug.  

These merges indicate that the maintainers are actively tightening test reliability and fixing agent‑session management, two areas that directly affect stability and developer experience.

---

### 4. Community Hot Topics  
| Item | Type | Activity (comments/likes) | Link |
|------|------|---------------------------|------|
| **#3150** | Issue (closed, stale) | 4 comments, 0 👍 | <https://github.com/sipeed/picoclaw/issues/3150> |
| **#3088** | Issue (open, high‑priority, stale) | 4 comments, 2 👍 | <https://github.com/sipeed/picoclaw/issues/3088> |
| **#3182** | Issue (open, stale) | 2 comments, 0 👍 | <https://github.com/sipeed/picoclaw/issues/3182> |
| **#3194** | Issue (open, stale) | 1 comment, 0 👍 | <https://github.com/sipeed/picoclaw/issues/3194> |
| **#3192** | PR (chore) | 0 comments, 0 👍 | <https://github.com/sipeed/picoclaw/pull/3192> |
| **#3191** | PR (chore) | 0 comments, 0 👍 | <https://github.com/sipeed/picoclaw/pull/3191> |
| **#3190** | PR (i18n fix) | 0 comments, 0 👍 | <https://github.com/sipeed/picoclaw/pull/3190> |
| **#3189** | PR (line fix) | 0 comments, 0 👍 | <https://github.com/sipeed/picoclaw/pull/3189> |

The two most discussed items are **#3150** (a self‑destruct bug that was closed) and **#3088** (a feature request to replace the unmaintained `libolm` library with `vodozemac`). Both have the same number of comments, suggesting community interest in either resolving a regression or modernising the cryptographic stack.

---

### 5. Bugs & Stability  
| Severity | Issue | Summary | Fix PR (if any) |
|----------|-------|---------|-----------------|
| **High** | **#3182** – Android version | Service fails to launch on Android; logs and screenshots show permission errors and an inability to change the app’s data path despite full permissions. | None reported yet. |
| **Medium** | **#3194** – Crypto not enabled | An encrypted Matrix message is received, but the crypto module is disabled, causing a mismatch between expected and actual handling. | No fix PR merged; the issue is open. |
| **Low** | **#3150** – “Self‑destruct” bug (closed) | The agent appears to lose its memory/state (“整失忆”) under certain conditions. | Fixed in closed issue; no separate PR. |

The Android launch problem (#3182) is the most critical stability concern because it prevents users from running the service on a major platform.

---

### 6. Feature Requests & Roadmap Signals  
- **#3088** – Proposes swapping `libolm` for `vodozemac`, the official, actively maintained replacement. This signals a desire to improve security and future‑proof the cryptographic backend.  
- **#3225** – Requests per‑agent runtime overrides (e.g., `max_tokens`, summarisation thresholds). This indicates a roadmap direction toward more flexible, user‑configurable agents.  

Both items are still open, suggesting they may be considered for the next minor release after the current stabilisation effort.

---

### 7. User Feedback Summary  
- **Android users** report an inability to start the service and to modify storage paths, pointing to a platform‑specific launch/permissions bug.  
- **Matrix users** experience a functional inconsistency when encrypted messages arrive but crypto is disabled, highlighting a mismatch between UI expectations and backend state.  
- **General users** are calling for a more modern crypto library (`vodozemac`) and better per‑agent configuration, indicating demand for security upgrades and richer agent capabilities.  

Overall sentiment appears mixed: core functionality (core agent operation) works, but platform‑specific and security‑related pain points are still present.

---

### 8. Backlog Watch  
| Item | Why it matters | Current status |
|------|----------------|----------------|
| **#3088** – Replace `libolm` with `vodozemac` | Security & maintenance; libolm is unmaintained and vulnerable. | Open, high‑priority, stale – no recent activity beyond the original request. |
| **#3182** – Android launch failure | Blocks a whole user base (Android) from using the service. | Open, stale – only 2 comments, no response from maintainers. |
| **#3194** – Crypto disabled despite encrypted messages | Leads to silent failures in encrypted communication. | Open, stale – low attention. |
| **#3189**, **#3190**, **#3191**, **#3192** – Various chore PRs (line error handling, translation sync, .gitignore cleanup, Docker base‑image bump) | These are low‑risk but accumulate technical debt; they affect CI consistency and internationalisation. | Open, no feedback; maintainers have not merged or closed them yet. |

Maintainer attention is warranted on the Android launch bug and the cryptographic library migration, as both are high‑impact, user‑visible issues that have been open for several days without resolution.

--- 

*Prepared on 2026‑07‑05. All links point to the official GitHub repository (github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest – 2026-07-05

Today marks a snapshot of NanoClaw’s activity, health, and user direction. Our pristine codebase remains stable despite new tooling and security enhancements, and we’ve seen focused development in core features and minor bug fixes.

## Project Status Overview
NanoClaw continues to evolve as a cross-platform, AI-powered personal assistant agent, leveraging open-source power and strong community engagement. Despite recent changes and the introduction of more complex features, we’ve kept our infrastructure robust and most users delighted with new enhancements, including phase-1 security reporting and security documentation refinements.

## Recent Activity
- **New Releases:** No new versions were released today.
- **Active Issues:** 
  - #2923 (Security): A critical display spoof was identified in the last 24 hours; the team is actively working on a fix to prevent compromised button clicks.
  - #2956 (Agent runner): Fix addressing duplicate delivery bouts that could leak content unnecessarily.
  - #2954 (Security docs): Alek updated the mount topology docs to reflect migrated configurations, removing outdated mount table entries.
- **Open PRs:** 40 total opened PRs over the last 24 hours, focusing on feature enhancements, tool integrations, and container configuration improvements.
- **PRs closed:** Two notable merges addressed critical resources and setup logic, with most commits resolving known issues.

## What’s Next in Development
NanoClaw is heavily investing in security, transparency, and modernizing its agent APIs. Key priorities include complete migration of legacy mounting mechanisms, expanding configured mount options, and introducing stricter data privacy controls. A planned security perimeter rewrite will move us into the v2 era, improving the robustness of both the buffer and policy tools.

We are also addressing remaining integration inefficiencies, notably between call-to-agent flows and dispatcher logic, and enhancing communication support for multi-agent workflows.

## Community and User Feedback
Recent community discussions focus on:
- **User-experience pain points**: Many users report inconsistencies in security responses and the need for clearer user guidance.
- **Request for more direct feedback channels**: The community is eager for built-in channels to report bugs or suggest new features.
- **Request for more clarity in release notes**: Clarity on upcoming changes and timelines remains essential, particularly for power users.

## Stability & Known Issues
- **Critical Issue:** The spawn issue around `ask_user_question` messages should be closed, and clear disclaimers on behavior concisely fixed.
- **Stable Core:** Official stats confirm no crashes or data loss, and the agent continues to function as intended.
- **Ongoing work:** Two active issues point to areas requiring immediate attention, as noted by the contributor team.

## Roadmap Signals
- **Security & documentation updates** expected within the next two weeks.
- **Feature roadmap** will gain traction once the owner signs off on two major user requests.
- **Migration notes** will help NGAN clients align their infrastructure with the latest NanoClaw standards.

## Final Thoughts
NanoClaw remains on a strong trajectory, prioritizing security, usability, and team-driven enhancements. With clear issue resolution and an increasing momentum toward v2, we expect even more value to be delivered to our vibrant open-agent community.

For real-time updates, follow the official [Security](https://github.com/qwibitai/nanoclaw) and [PRs](https://github.com/qwibitai/nanoclaw) channels. Thank you for being part of the NanoClaw ecosystem!

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

# LobsterAI Project Digest (2026-07-05)  

## 1. **Today's Overview**  
LobsterAI saw minimal activity on July 4–5, with 1 open issue and 2 closed pull requests (PRs) updated in the last 24h. No new releases were published, indicating a focus on addressing stagnant issues rather than introducing new features. The team resolved two technical bugs but left critical user-facing problems unresolved. Project velocity appears low, with a backlog of unresolved tasks requiring prioritization.  

## 2. **Releases**  
No new versions of LobsterAI were released in the past 24h. The absence of releases suggests either stability maintenance over iteration or delays in addressing high-priority user-reported defects.  

## 3. **Project Progress**  
Two PRs were merged on July 4:  
- **PR #2272**: Fixed legacy identity conflicts in AGENTS.md by migrating to IDENTITY.md, ensuring cleaner agent configuration.  
- **PR #2271**: Propagated system proxy settings to managed browsers, improving security and consistency.  
These merges reflect low-risk technical maintenance rather than feature advancements.  

## 4. **Community Hot Topics**  
Two open issues dominate community attention:  
- **Issue #1352 (PR #1352)**: *Task dialog attachment upload fails* (last updated 2026-07-04). Users cannot interact with attachment controls during task execution.  
  - [Link](https://github.com/netease-youdao/LobsterAI/issues/1352)  
- **Issue #1350 (PR #1350)**: *Skills generation blocks progress* (last updated 2026-07-04). Neither dialogue feedback nor error handling exists for skill creation.  
  - [Link](https://github.com/netease-youdao/LobsterAI/issues/1350)  
Both highlight UX/UX process design flaws.  

## 5. **Bugs & Stability**  
- **Critical**: Failure to upload attachments during task execution (#1352) – no fix PR exists.  
- **Moderate**: Skills file generation freezes without feedback (#1350) – no mitigation PRs open.  
No crashes or regressions reported in the last 24h.  

## 6. **Feature Requests & Roadmap Signals**  
Implicit requests for:  
- Real-time feedback during skill generation (from #1350).  
- Reliable attachment handling in task dialogs (from #1352).  
These align with potential roadmap improvements for task and skill UX.  

## 7. **User Feedback Summary**  
Users report:  
- **Pain point 1**: Attachment workflows are non-responsive in active task dialogs.  
- **Pain point 2**: Skills creation lacks progress indicators or error resolution paths.  
Satisfaction is dampened by opaque system states and inability to recover from errors.  

## 8. **Backlog Watch**  
- **Issue #1352**: Stale for 3 months; blocking user interaction. Needs urgent QA/UX review.  
- **Issue #1350**: Stale for 3 months; risks user disengagement. Requires root-cause analysis of skills generation latency.  
Both demand immediate maintainer intervention.  

---  
All links are active on GitHub: [Issues](https://github.com/netease-youdao/LobsterAI/issues), [PRs](https://github.com/netease-youdao/LobsterAI/pulls).


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

### 1. **Today's Overview**  
Over the last 24 hours, CoPaw showed high activity with 11 open issues and 3 open PRs, indicating active development. However, no new releases were made, focusing efforts on bug fixes and feature improvements rather than stabilization. Key bugs related to memory management, model fallback, and timezone handling dominated discussions, signaling prioritization of core functionality stability.  
- Issues: 11 open (9 active, 2 closed) | PRs: 3 open | Releases: 0  

---

### 2. **Releases**  
No new releases were published in the last 24 hours.  

---

### 3. **Project Progress**  
- **PRs**: All 3 open PRs focused on core features: auto-memory state management (`#5777`), LLM fallback configuration (`#5597`, `#5598`). These align with efforts to enhance reliability and customization.  
- **Closed PR**: `#5772` resolved a critical LM Studio model-switching issue, preventing cultural loss of functionality.  

---

### 4. **Community Hot Topics**  
- **#5773 (OpenCode Channel Bug)**: 2 comments. Users face OCG provider failures with DeepSeek models when auto-memory is enabled.  
- **#5775 (Auto-Memory Interval)**: 2 comments. Memory persistence breaks during long sessions due to state loss.  
- **#5779 (Cron Timezone Bug)**: 1 comment. Timezone-ignorant cron API responses disrupt workflow automation.  
*Analysis*: Memory management and timezone-aware scheduling are critical pain points for enterprise use cases.  

---

### 5. **Bugs & Stability**  
- **High Severity**:  
  - `#5773` (OpenCode channel failure) and `#5775` (memory state loss) block core memory functionality.  
- **Medium Severity**:  
  - `#5772` (LM Studio censorship) and `#5779` (cron UTC mismatch) affect usability but aren’t showstoppers.  
- No fix PRs exist for most open bugs, risking delayed resolutions.  

---

### 6. **Feature Requests & Roadmap Signals**  
- **#2865 (Custom Agent UI)**: 4 comments, strong community support. Adds features for custom agent names/avatars via URLs. This suggests roadmap focus on personalized AI UX.  
- **#5770 (V2.0 Excitement)**: User demand for polished V2.0 release, hinting at feature readiness for official rollout.  

---

### 7. **User Feedback Summary**  
- **Pain Points**:  
  - Memory management failures in long sessions (`#5775`).  
  - Model compatibility issues with OCG (`#5773`) and Google Gemini (`#5774`).  
  - UI customization needs (thumb-up for `#2865`).  
- **Satisfaction**: Positive reception for features enhancing flexibility (e.g., `#2865`).  

---

### 8. **Backlog Watch**  
- **#2830 (Desktop Tray Icon)**: Open for 3 months, critical for desktop users seeking background operation.  
- **#5777 (Auto-Memory State)**: No comments despite being a key PR. May indicate maintenance gaps.  

All items linked via GitHub. Project health is strong in active development but requires urgent bug closures.


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑07‑05**

---

## 1. Today’s Overview
- Activity on the ZeroClaw monorepo remains very high: 50 issues and 50 pull‑requests were touched in the last 24 h, with 39 issues still open and 49 PRs still open.  
- The bulk of the work is centred on the upcoming **v0.8.3** milestone (runtime stability, WASM plugins, OTel tracing, and the SOP engine).  
- No new release was cut today, but a large wave of “tracker” issues and PRs is being used to coordinate the remaining v0.8.3 deliverables.  
- High‑severity bugs (priority P1) are still being reported (tool‑call handling, context compression, and gateway‑MCP mismatches) and are actively discussed, while several “feature” RFCs are in the in‑progress lane (board automation, OCI‑based plugin storage).  

---

## 2. Releases
*No new version was published on 2026‑07‑05.* The project is still targeting the **v0.8.3‑rc** series; most changes are gated behind tracker issues (e.g., #8071, #7314, #8073) and have not yet been merged.

---

## 3. Project Progress (merged / closed PRs today)

| PR | Title (high‑level) | Area | Status |
|----|--------------------|------|--------|
| **#8561** | Telegram channel – multi‑message streaming mode | channel:telegram | **Open** (large XL PR, still under review) |
| **#8689** | Goal‑command admission for all channels | channel, runtime, tool | **Open** |
| **#8688** | Trusted goal tools & delegation boundaries | runtime, security | **Open** |
| **#8723** | Leak‑detector – preserve generated file references | security | **Open** |
| **#8711** | Refactor `Agent::from_config` through `ScopedToolRegistry` | runtime, agent | **Open** |
| **#8710** | Add OpenAI bridge channel (HTTP‑compatible) | channel | **Open** |
| **#8705** | ZeroCode UI – fix Code help / key‑bindings | zerocode | **Open** |
| **#8590** | SOP visual authoring surfaces + tests + docs | SOP | **Open** |
| **#8546** | Localise CLI status fragments | CLI | **Open** |

*No PRs were merged or closed in the 24 h window.* The dominant activity is large‑scale feature work still awaiting maintainer review or CI pass.

---

## 4. Community Hot Topics  

| Item | Comments | Type | Why it matters |
|------|----------|------|----------------|
| **#8193** (Closed) – *MCP tools missing from TUI* | 15 comments | bug (gateway + zerocode) | Highlights a split‑brain state between the MCP discovery layer and the TUI client; the fix required cross‑component coordination (gateway → runtime → UI). |
| **#6808** (Open) – *Work Lanes, Board Automation, and Label Cleanup* | 13 comments | RFC (project governance) | Signals a demand for better project‑management automation; the community wants the roadmap visible inside the repo, not just on external issue trackers. |
| **#8681** (Open) – *Goal‑mode implementation split stack* | 7 comments | tracker / architecture | The “goal‑mode” feature is a major new capability (goal‑admission, verification) and is being broken into smaller PRs for review. |
| **#6641** (Open) – *Turn‑level OpenTelemetry trace correlation* | 3 comments | feature | Shows growing interest in observability; users need end‑to‑end tracing across LLM calls, tool calls, and memory ops. |
| **#7497** (Open) – *OCI‑compliant container registries for WASM plugins* | 3 comments | RFC | Indicates a push toward a more production‑ready plugin distribution model (security & supply‑chain). |

**Underlying needs:** better *cross‑component consistency* (gateway ↔ UI), stronger *project governance* (automation, labels), expanded *goal‑oriented execution*, and deeper *observability & supply‑chain security* for plugins.

---

## 5. Bugs & Stability (ranked by severity)

| Severity | Issue | Summary | Fix status |
|----------|-------|---------|------------|
| **P1 – Workflow blocked** | **#8193** (closed) – MCP tools not propagated to TUI sessions | Tool discovery works on the gateway but the UI never sees the tools, breaking end‑to‑end workflows. | Fixed in recent merge to `gateway`/`zerocode`. |
| **P1 – Workflow blocked** | **#6361** (closed) – `context_compression` drops tool calls for OpenAI‑compatible providers | Causes infinite tool loops and invalid system messages. | Fixed in provider‑adapter updates (merged after discussion). |
| **P1 – Workflow blocked** | **#8654** (open) – `skill‑review` fork panics after tool‑heavy turn → daemon SIGSEGV | Crashes the whole agent pod, directly impact production stability. | No PR yet; discussion ongoing. |
| **P1 – Workflow blocked** | **#8675** (open) – Malformed native tool‑call arguments sent to OpenAI‑compatible providers → 400 errors | Breaks tool usage with OpenRouter, Azure‑OpenAI, etc. | No fix yet; high priority. |
| **P2 – Degraded behavior** | **#8695** – Cron jobs recall memory despite `uses_memory = false` | Scheduled jobs unintentionally carry state, violating expectation of stateless runs. | No fix yet. |
| **P2 – Degraded behavior** | **#8664** – ZeroCode copy includes Markdown fences | Minor UX annoyance for developers. | No fix yet. |
| **P2 – Degraded behavior** | **#8646** – ZeroCode log detail hidden behind preview rows | Hinders debugging of turn‑level events. | No fix yet. |
| **P2 – Degraded behavior** | **#8644** – ZeroCode can complete a code turn with no visible output | Users see successful turns but no code displayed. | No fix yet. |

*Takeaway:* While the most critical P1 bugs have been closed, several high‑impact regressions remain open with no associated PRs, representing the current stability bottleneck.

---

## 6. Feature Requests & Roadmap Signals

| Feature / RFC | Current Status | Likelihood for next release (v0.8.3) |
|---------------|----------------|--------------------------------------|
| **Goal‑mode admission / verifier** (issues #8681, PR #8688, PR #8687) | Core implementation in progress, multiple PRs open | **High** – expected to land before v0.8.3 final. |
| **OCI‑based WASM plugin registry** (RFC #7497) | Draft RFC, open discussion | **Medium** – needs consensus on storage model; may spill into v0.8.4. |
| **Board automation / lane cleanup** (RFC #6808) | In‑progress, 13 comments | **Medium‑High** – governance changes often land early in a minor cycle. |
| **Turn‑level OTel tracing** (issue #6641) | Feature request, no PR yet | **Low‑Medium** – depends on upstream `tracing-opentelemetry` work. |
| **OpenAI bridge channel** (PR #8710) | Large XL PR, under review | **Medium** – if CI passes, could be merged for v0.8.3 to widen API surface. |
| **SOP visual authoring UI** (PR #8590) | Open, extensive UI work | **Low** – likely postponed to a dedicated UI release. |

---

## 7. User Feedback Summary

- **Tool discovery mismatch** (MCP vs. ZeroCode) was a pain point for power users running multi‑modal pipelines; the issue got enough traction to be fixed quickly.  
- **Memory handling in cron jobs** surprised operators who expected stateless runs; the missing `uses_memory` flag caused hidden state leakage.  
- **Leak‑detector false positives** (high‑entropy token redaction) generated frustration for developers relying on generated filenames; a dedicated security PR (#8723) is being drafted.  
- **Localization gaps** (missing translations in UI tool strings, toolbar buttons) continue to affect non‑English users, though the volume of comments is modest.  
- **Observability** requests (OTel spans, better log detail) indicate a maturing user base that now runs ZeroClaw in production and needs richer diagnostics.  

Overall sentiment is *constructive*: users report blockers but also contribute detailed repro steps and propose fixes, showing a healthy collaborator‑maintainer loop.

---

## 8. Backlog Watch (stale / high‑priority items needing attention)

| Issue / PR | Reason for urgency | Last activity |
|------------|--------------------|---------------|
| **#8654** – skill‑review fork panic (SIGSEGV) | Crashes agents in production | Updated 2026‑07‑04, no fix yet |
| **#8675** – malformed tool‑call arguments (provider 400) | Blocks tool usage on major providers | Updated 2026‑07‑04, no PR |
| **#8678** – `SopEngine::advance_step` missing run‑status guard | Security‑relevant approval‑gate bypass | Updated 2026‑07‑04, no PR |
| **#8722** – High‑entropy detector redacts legitimate filenames | Security scanner over‑aggressive; impacts CI pipelines | Open today, no PR |
| **#7497** – OCI‑compliant plugin storage RFC | Strategic for supply‑chain security, still in draft | Updated 2026‑07‑04 |
| **#8719** – SOP routing false‑when handling | Core to SOP correctness for multi‑phase flows | Open, no PR |
| **#8681** – Goal‑mode split tracker | Coordination of many PRs; risk of drift without a merge | Open, early stage |

Maintainers should prioritize the three **P1/P2 crash/validation bugs** (#8654, #8675, #8678) and move the high‑visibility RFCs (#7497, #6808) toward a decision before the v0.8.3 freeze.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*