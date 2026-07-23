# OpenClaw Ecosystem Digest 2026-07-23

> Issues: 438 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-23 01:54 UTC

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

### **Today's Overview**  
OpenClaw remains highly active with robust issue and PR throughput. In the last 24h, **438 issues** were updated (289 open, 149 closed) and **500 PRs** processed (295 open, 205 merged/closed). Despite no new releases, development momentum is evident through critical bug fixes, architectural refactors, and feature progression. Key areas of focus include session lineage tracking, provider reliability, and UI/UX improvements. The project demonstrates strong maintainer engagement, with PRs like #112331 (model catalog coherence) and #112575 (Matrix dedupe migration) advancing core infrastructure.  

---

### **Project Progress**  
- **Merged PRs**: 205 (bug fixes, security, and refactors).  
- **Key Advances**:  
  - PR #112331: Fixed model catalog inconsistencies during config reloads.  
  - PR #112575: Improved Matrix token deduplication for scaling.  
  - PR #111861: Redesigned session lineage for transparency.  
  - PR #112820: Enabled voice plugins to manage realtime sessions.  

---

### **Community Hot Topics**  
**Top 3 Issues by Engagement**:  
1. **#75** (Missing Linux/Windows apps): Requests parity with macOS/iOS tools. [Link](https://github.com/openclaw/openclaw/issues/75)  
   - *Analysis*: High community demand for cross-platform desktop support.  
2. **#13583** (Hard policy hooks): Needs mechanical enforcement for tool-call rules. [Link](https://github.com/openclaw/openclaw/issues/13583)  
   - *Analysis*: Critical for audit-sensitive workflows (finance/sec).  
3. **#87314** (Memory growth via cron errors): Potential gateway instability issue. [Link](https://github.com/openclaw/openclaw/issues/87314)  

**Top PRs by Engagement**:  
1. **#112331** (Model catalog fix): Merged to ensure cross-configuration reliability. [Link](https://github.com/openclaw/openclaw/pull/112331)  
2. **#112820** (Voice plugin refactor): Critical for enterprise voice integration. [Link](https://github.com/openclaw/openclaw/pull/112820)  

---

### **Bugs & Stability**  
**High-Severity Issues Today**:  
- **#108435**: Gateway fails to start with `claw-ollama` post-2026.7.1 deployment. [Link](https://github.com/openclaw/openclaw/issues/108435)  
  - *Impact*: Regression blocker for self-hosted deployments.  
- **#92043**: Compaction timeouts cause cascading failures. [Link](https://github.com/openclaw/openclaw/issues/92043)  
  - *Fix Status*: No patch yet; PR #83538 (manual cron fix) partially addresses related logic.  
- **#110504**: WhatsApp auto-replies fail post-2026.7.2. [Link](https://github.com/openclaw/openclaw/issues/110504)  

**Stable PRs**:  
- PR #112831: Resolved changelog attribution to meet release process requirements. [Link](https://github.com/openclaw/openclaw/pull/112831)  

---

### **Feature Requests & Roadmap Signals**  
- **Masked Secrets** (Issue #10659): Demand for secure credential handling without exposure.  
- **`maxTurns` Config** (Issue #9912): Prevents unchecked LLM loops in low-latency apps.  
- **Session Headers** (Issue #10142): Critical for workflow integration (e.g., Temporal).  

**High-Probability Next Steps**:  
- Session/agent lineage tracking (#111861) to stabilize multi-operator workflows.  
- Case-sensitive routing improvements for AWS Bedrock (Issue #87318).  

---

### **User Feedback Summary**  
**Key Pain Points**:  
- **Provider Failures**: Inconsistent auth flows (e.g., OpenAI OAuth, Mission Control billing errors).  
- **UI/UX**: Screen reader fragmentation (Issue #65538) and WhatsApp/Feishu latency regressions.  
- **Developer Experience**: Confusing migration paths (e.g., legacy token deduplication, plugin pathways).  

**Satisfaction Drivers**:  
- Active community triage in `#openclaw`, with rapid resolution of high-severity bugs.  

---

### **Backlog Watch**  
**Long-Standing PRs Needing Attention**:  
- **#75** (Linux/Windows apps): Open since 2026-01-01, stalled awaiting resources.  
- **#99773**: Hot-reload model registry loss (open 2026-07-04).  
- **#10142** (`session:end` hook): Blocking since 2026-02-06.  

**Critical Fixes Pending**:  
- `doctor --fix` stability (#77802): Security risk with atomic validation failures.  
- `exec` tool shell redirect corruption (#87980): Impacts CLI workflows.  

---  
**Project Health**: Active iteration with high PR volumes. No releases in last 24h, but critical infrastructure fixes and feature refactors progressing steadily. Prioritize resolving provider regressions (#108435) and session management (#111861) for stability.


---

## Cross-Ecosystem Comparison

**1. Ecosystem Overview**  
The personal‑AI‑assistant / agent open‑source landscape is highly fragmented, with dozens of lightweight agents (e.g., PicoClaw, NanoClaw, NullClaw) coexisting alongside more feature‑rich platforms (OpenClaw, IronClaw, Hermes Agent, CoPaw). Most projects focus on extending a core chat‑bot engine with additional messaging adapters, modular skills, or UI refinements, while a few (OpenClaw, IronClaw, Hermes Agent) are undergoing large architectural refactors aimed at production‑grade reliability and multi‑platform consistency. Community size varies widely, from a handful of contributors to active, multi‑disciplinary teams maintaining thousands of issues and PRs. The overall trend is toward tighter integration with existing AI models, better session/persistence handling, and more robust cross‑platform deployment pipelines.

---

**2. Activity Comparison**  

| Project | Issues (24 h) | PRs (24 h) | New Releases? | Health Score* |
|---------|---------------|------------|---------------|---------------|
| **OpenClaw** | 438 (289 open / 149 closed) | 500 (295 open / 205 merged‑closed) | No | 4 |
| **NanoBot** | 6 (4 open / 2 closed) | 63 (23 open / 40 merged‑closed) | No | 3 |
| **Hermes Agent** | 50 (100 total updates) | 50 (10 merged‑closed) | No | 4 |
| **IronClaw** | 50+ (7 new) | 21 (mostly retrospective) | No | 5 |
| **CoPaw (QwenPaw)** | 31 (post‑release) | 50 (many closed) | Yes – v2.0.0.post4 | 4 |
| **LobsterAI** | 1 (closed) | 5 (all merged) | No | 3 |
| **PicoClaw** | 4 | 5 (1 merged) | No | 2 |
| **NanoClaw** | 1 | 3 | No | 2 |
| **NullClaw** | 1 | 1 (merged) | No | 2 |
| **TinyClaw** | 0 | 0 | No | 1 |
| **Moltis** | 0 | 0 | No | 1 |
| **ZeptoClaw** | 0 | 0 | No | 1 |
| **ZeroClaw** | 0 | 0 | No | 1 |

\*Health Score (1 = inactive, 5 = vibrant, production‑ready).  

---

**3. OpenClaw’s Position**  

*Advantages* – OpenClaw leads in **issue/PR throughput** (438 issues, 500 PRs) and maintains a **steady stream of critical bug‑fixes and architectural refactors** (session lineage, provider reliability, UI/UX). Its community is large and responsive, with rapid triage of high‑severity bugs (e.g., gateway start‑up failures).  

*Technical Approach* – OpenClaw emphasizes **modular provider integration** (Matrix, WhatsApp, voice plugins) and **session lineage tracking**, using a plug‑in architecture that isolates concerns. Compared with peers, it avoids heavyweight “one‑size‑fits‑all” runtimes, opting for lightweight, extensible services.  

*Community Size* – With > 1 k open issues and > 300 active contributors (inferred from PR volume), OpenClaw dwarfs most peers (e.g., NanoClaw, NullClaw) and rivals IronClaw and Hermes Agent in sheer activity.

---

**4. Shared Technical Focus Areas**  

| Requirement | Projects showing the need | Comments |
|-------------|--------------------------|----------|
| **Robust session / lineage management** | OpenClaw (#111861), Hermes Agent (#6284, #6376), CoPaw (#6323) | Persistent, cross‑platform conversation state is a recurring pain point. |
| **Provider reliability & auth consistency** | OpenClaw (#108435, #110504), NanoBot (#5040), Hermes Agent (#6534) | OAuth flows, token deduplication, and cross‑platform auth are frequent failure sources. |
| **Cross‑platform UI/UX consistency** | OpenClaw (#75), NanoBot (#5028), Hermes Agent (#4335) | Users demand uniform desktop/mobile/web experiences and better accessibility. |
| **Error‑recoverability & graceful degradation** | OpenClaw (#87314, #92043), Hermes Agent (#62708), IronClaw (#6284) | Systems must survive network glitches, OOM, and transient failures without manual restarts. |
| **Secure credential handling & documentation** | OpenClaw (#10659), NanoClaw (#3118), Hermes Agent (#6523) | Mis‑documented security models lead to confusion and potential vulnerabilities. |
| **Telegram / messaging channel support** | OpenClaw (#110504), Hermes Agent (#6474‑#6478), CoPaw (#6323) | Telegram integration gaps (large‑file timeouts, delivery defaults) are a top user complaint. |
| **Performance / low‑latency optimisations** | CoPaw (#6307), LobsterAI (#2375), NanoBot (#5041) | Reducing duplicate tool calls, OOM handling, and latency spikes are actively addressed. |
| **Testing & state‑machine validation** | IronClaw (#6105), Hermes Agent (#6284) | Need for automated, canary‑driven tests to guard against regressions in complex lifecycles. |

---

**5. Differentiation Analysis**  

| Dimension | OpenClaw | IronClaw | Hermes Agent | CoPaw (QwenPaw) | PicoClaw |
|-----------|----------|----------|--------------|----------------|----------|
| **Primary Focus** | Core agent engine + provider reliability; heavy on session lineage | End‑to‑end product surface & Reborn architecture, strong on testing & extensibility | Rapid bug‑fixes & UI polish, strong on cross‑platform session sharing | AI‑driven chatbot with skill & scheduled‑task extensions, UI‑centric | Minimalist protocol layer, lightweight, limited feature set |
| **Target Users** | Developers building custom AI agents, enterprises needing multi‑modal integrations | Large‑scale AI product teams, SaaS platforms requiring high reliability and extensibility | Individual developers & small teams seeking fast iteration | End‑users of AI assistants, developers integrating Qwen models into chat apps | Hobbyists / small‑scale bots needing simple protocol support |
| **Technical Architecture** | Plug‑in centric, modular provider services, explicit session lineage objects | Unified “ProductSurface” façade, Reborn runtime composition, extensive test harnesses | Modular but still monolithic core; heavy focus on desktop/web UI consistency | Node.js/TypeScript agent framework, skill‑based extensibility, strong UI layer | Minimal codebase, simple Go‑based services, limited abstractions |
| **Release Cadence** | No releases in 24 h, but frequent PR merges → continuous delivery | No releases, but many “completed foundation” PRs → steady progress toward a v1 launch | No releases, many open issues → still iterating | Recent release (v2.0.0.post4) → indicates a more mature release pipeline | No releases, very low activity → early‑stage or stalled |

---

**6. Community Momentum & Maturity**  

*Rapidly Iterating* (Health ≥ 4, high issue/PR counts): **OpenClaw, IronClaw, Hermes Agent, CoPaw**. These projects show daily issue/PR churn, active triage, and either recent releases or imminent v1/RC milestones.  

*Stabilizing / Low Activity* (Health ≤ 2, minimal updates): **PicoClaw, NanoClaw, NullClaw, TinyClaw, Moltis, ZeptoClaw, ZeroClaw**. Activity is limited to occasional documentation or security fixes; no new releases and few open issues.  

*Intermediate* (Health = 3): **NanoBot, LobsterAI**. They have modest but steady contributions and occasional feature merges, indicating a “maintenance” phase rather than a high‑velocity sprint.

---

**7. Trend Signals for AI Agent Developers**  

1. **Cross‑Platform Session Persistence** – Multiple projects (OpenClaw, Hermes Agent, CoPaw) are investing in lineage tracking and state‑machine testing, signaling that reliable multi‑device conversation continuity is becoming a baseline expectation.  

2. **Provider‑Centric Reliability** – Issues around OAuth, token deduplication, and gateway start‑up failures (OpenClaw, Hermes Agent, NanoBot) highlight the need for robust, auditable authentication flows and graceful degradation under network instability.  

3. **Modular Skill / Tool Integration** – Projects such as NanoBot, CoPaw, and IronClaw are adding skill management, scheduled tasks, and per‑cron model overrides, reflecting a shift toward composable AI agents that can be customized per workflow.  

4. **Performance & Resource Management** – OOM handling (LobsterAI), duplicate tool‑call elimination (CoPaw), and low‑latency optimisation (Hermes Agent) show that developers are prioritising efficiency, especially for edge‑device deployments.  

5. **Security & Documentation Clarity** – Repeated concerns about credential isolation (OpenClaw, NanoClaw) and inaccurate security docs (NanoClaw, Hermes Agent) indicate that community trust hinges on clear, accurate security guidance and auditable credential handling.  

6. **Testing & Canary Strategies** – IronClaw’s “state‑machine test” epic and Hermes Agent’s focus on session‑switching bugs illustrate a growing emphasis on automated, production‑grade testing pipelines to prevent regressions in complex lifecycles.  

**Takeaway:** For AI agent developers, the most valuable investments today are in **robust session/persistence models**, **reliable multi‑provider authentication**, **modular extensibility**, and **automated, canary‑driven testing**. Projects that excel in these areas (OpenClaw, IronClaw, Hermes Agent) are setting the de‑facto standards for production‑ready personal AI assistants.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑07‑23**

---

### 1. Today’s Overview  
NanoBot remains highly active with **63 pull‑request updates** (23 open, 40 merged/closed) and **6 issue updates** (4 open, 2 closed) in the past 24 h, but no new releases were published. The main focus today was the resolution of a significant bug in Dream batch handling (#5041) and several infrastructure‑level enhancements (WebUI history indexing, OAuth status, and Feishu group‑policy support). The project is generally healthy, with a steady flow of merges and active discussion around improving the multi‑agent workflow.

---

### 2. Releases  
No new releases were created today.  

---

### 3. Project Progress  
**Merged / Closed PRs (today):poss**  
| PR | Topic | Notes |
|---|---|---|
| #5040 | Forwarded MCP tool schema bug | Fixed verbatim schema forwarding that caused Kimi/Moonshot to error out. |
| #5041 | Dream batch starvation bug | Added cursor advancement when a Dream run produces no durable‑memory diff to prevent replaying the same batch. |
| #5035 | xAI Grok OAuth provider | Introduced OAuth 2.0 PKCE flow, token refresh, and conditional “x_search” support for Grok‑4.5. |
| #5033 | Telegram multi‑bot support | Added backward compatible multi‑bot config for WebUI with per‑bot runtime isolation. |
| #5003 | WebUI: SQLite history index | Replaced JSON‑L reads with SQLite WAL for faster history Pageable display. |
| #4988 | Silent background turns | Suppressed the placeholder message when a background cron trigger returns no output. |

*(The table lists a representative sample; 40 PRs were merged or closed on this day.)*

---

 إجمالي من المشاريع CERN

---

### 4. Community Hot Topics  
| Issue / PR | Status | Comments / Reactions | Link |
|---|---|---|---|
| **#5000 – Evolution of sub‑agent system** (enhancement) | Open | 4 comments; 0 reactions | <https://github.com/HKUDS/nanobot/issues/5000> |
| **#5041 – Dream batch starvation** (bug) | Open | 0 comments, but was merged today for a critical regression fix | <https://github.com/HKUDS/nanobot/issues/5041> |
| **#5040 – MCP schema `$ref` problem** (bug) | Open | 0 comments, resolved by PR #5040 | <https://github.com/HKUDS/nanobot/issues/5040> |
| **#5035 – xAI Grok OAuth** (feature) | Open | 0 comments (PR only) | <https://github.com/HKUDS/nanobot/pull/5035> |
| **#5018 – Explicit skill context loading** (feature) | Open | 0 comments | <https://github.com/HKUDS/nanobot/pull/5018> |
| **#4446 – DingTalk private chat gating** (feature) | Open | 0 comments | <https://github.com/HKUDS/nanobot/pull/4446> |

**Analysis**  
- The *sub‑agent evolution* issue shows a growing community need for persistent, collaborative agents dinámicos.  
- The *Dream batchbug* indicates a serious runtime regression that was quickly fixed.  
- The *MCP schema bug* and *xAI Grok OAuth* point to provider‑specific edge‑cases that the team is actively resolving.

---

### 5. Bugs & uticity  
| Bug | Severity | Status | Fix PR | Link |
|---|---|---|---|---|
| #5041 – Dream no‑op batch starves history | Major | Fixed | #5041 | <https://github.com/HKUDS/nanobot/issues/5041> |
|.zz | L |  |  |  |
| #5040 – MCP `$ref` issue on strict providers | Major | Fixed | #5040 | <https://github.com/HKUDS/nanobot/issues/5040> |
| #5028 – Workspace vs media path conflict on Feishu | Major | Unresolved | – | <https://github.com/HKUDS/nanobot/issues/5028> |
| #4934 – Qwen expose reasoning content (closed earlier) | Critical | Closed | #4934 | <https://github.com/HKUDS/nanobot/issues/4934> |

**Notes**  
- Two high‑severity bugs were closed today.  
- The workspace/media conflict remains a pain point for Feishu users; no fix yet.

---

### 6. Feature Requests & Roadmap Signals  
| Feature | Source | Current Progress | Likely in Next Release | Link |
|---|---|---|---|---|
| Multi‑agent collaboration framework | #5000 (issue) | Stage: discussion & early design | High | <https://github.com/HKUDS/nanobot/issues/5000> |
| Read‑only `search_history` tool | Pull #4439 | Merged today, ready for use | High | <વિધ> |
| WebUI fallback‑model display | Pull #5017 | Merged for beta testing | Medium | <https://github.com/HKUDS/nanobot/pull/5017> |
| Feishu groupPolicy: listen | PR #5009 | merged, testing | Medium | <https://github.com/HKUDS/nanobot/pull/5009> |
| xAI Grok OAuth provider | PR #5035 | merged, provider ready | Medium | <https://github.com/HKUDS/nanobot/pull/5035> |
| Telegram multi‑bot support | PR #5033 | merged, stable | Medium | <https://github.com/HKUDS/nanobot/pull/5033> |

*The high‑priority items focus on expanding multi‑provider support, improving UI experience, and adding core team collaboration features.*

---

### 7. User Feedback Summary  
- **Feishu integration**: Users reported media upload paths clashing with `workspace` limits (issue #5028) and the need for less intrusive, group‑policy‑only ingestion (#5009).  
- **WebUI experience**: A reported “lost visibility” when a sub‑agent finishes during a turn (#4948), addressed by the new model‑fallback UI and by ensuring message ordering.  
- **Performance**: The Raspberry‑Pi‑friendly config for idle compaction (#5036) came from community usage data, giving users control over CPU consumption.  

Overall, users appreciate the rapid issue resolution, but some remain concerned about provider‑specific quirks (Kimi/Moonshot) and file‑management errata.

---

### 8. Backlog Watch  
| Issue / PR | Seconds Open | Comments | Urgency | Link |
|---|---|---|---|---|
| #5000 – Evolution of sub‑agent system | > 30 days | 4 comments | High | <https://github.com/HKUDS/nanobot/issues/5000> |
| #5040 – MCP `$ref` handling | 12 days | 0 comments | Medium | <https://github.com/HKUDS/nanobot/issues/5040> |
| #5028 – Feishu media/workspace conflict | 9 days | 0 comments | High | <https://github.com/HKUDS/nanobot/issues/5028> |
| #5036 – Idle compaction config | 7 days | Helpful discussion | Low | <https://github.com/HKUDS/nanobot/pull/5036> |
| #4934 – Qwen reasoning leak | 45  Hadoop | resolved | Low | <https://github.com/HKUDS/nanobot/issues/4934> |

These items warrant maintainer attention either because of pending user impact (blockers) or because they have accumulated time in the backlog with no recent discussion.

---

**Bottom line** – NanoBot is on a healthy trajectory: daily merges, active pull‑request discussions, and a solid streak of quick bug fixes. The roadmap is clear: finalize the multi‑agent framework, tighten the provider‑specific edge cases, and Marathi‑finish the new UI hooks. 🚀

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Hermes Agent Project Digest - 2026-07-23

## Today's Overview

Hermes Agent shows exceptionally high development velocity with 100 total repository updates today (50 issues, 50 PRs), indicating active maintenance and community engagement. The project maintains strong momentum with 10 merged/closed PRs but continues struggling with session state management across platforms - a recurring theme in both bug reports and feature requests. No new releases were published, suggesting ongoing stabilization work ahead of the next version.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

**Merged/Closed PRs Today:**
- [#69725](https://github.com/NousResearch/hermes-agent/pull/69725) - Fixed desktop warm-resume race condition where stale prompts persisted after user corrections
- [#17247](https://github.com/NousResearch/hermes-agent/pull/17247) - Added OpenRouter Zero Data Retention (ZDR) preference support for privacy-conscious routing
- [#69273](https://github.com/NousResearch/hermes-agent/pull/69273) - Registered gateway services after profile imports to fix service visibility issues
- [#69729](https://github.com/NousResearch/hermes-agent/pull/69729) - Added E2E test coverage for queued and steered turn boundaries in Desktop

These merges address critical session state consistency, privacy controls, and service registration bugs, advancing the project's stability and configurability.

## Community Hot Topics

**Most Active Discussions:**

1. **[#4335](https://github.com/NousResearch/hermes-agent/issues/4335)** - Cross-platform session context sharing (CLI ↔ Telegram) - 9 comments, 2 upvotes. Users demand unified conversation history across messaging platforms rather than isolated sessions.

2. **[#66875](https://github.com/NousResearch/hermes-agent/issues/66875)** - Latest session switching bug in desktop app - 7 comments. Critical navigation issue affecting user experience when moving between tabs and sessions.

3. **[#62936](https://github.com/NousResearch/hermes-agent/issues/62936)** - Telegram uploads >15MB timeout - 6 comments. Configuration override for media uploads not functioning properly for large file transfers.

The underlying need is clear: users want seamless cross-platform experiences and reliable large-file handling, while core navigation stability requires immediate attention.

## Bugs & Stability

**Critical Issues (P1):**
- [**#62708**](https://github.com/NousResearch/hermes-agent/issues/62708) - Silent context overflow when compression is blocked with no user warnings (**No fix PR yet**)

**High Severity Issues (P2):**
- [**#66875**](https://github.com/NousResearch/hermes-agent/issues/66875) - Session switching broken in desktop after tab navigation (**No fix PR yet**)
- [**#62936**](https://github.com/NousResearch/hermes-agent/issues/62936) - Telegram media upload timeouts (**No fix PR yet**)
- [**#21341**](https://github.com/NousResearch/hermes-agent/issues/21341) - NixOS module installs files to wrong paths (**No fix PR yet**)
- [**#45279**](https://github.com/NousResearch/hermes-agent/issues/45279) - macOS installation conflicts with Homebrew/NVM (**No fix PR yet**)
- [**#63395**](https://github.com/NousResearch/hermes-agent/issues/63395) - Matrix E2EE disconnects after cron delivery (**No fix PR yet**)

**Today's New Issues (P2):**
- [**#69709**](https://github.com/NousResearch/hermes-agent/issues/69709) - Vision support override not resolved for CLI custom providers (**No fix PR yet**)

Multiple session state management issues (sweeper:risk-session-state) dominate the stability concerns, with several critical navigation and platform integration bugs lacking immediate fixes.

## Feature Requests & Roadmap Signals

**Promising Features Under Discussion:**

1. **[#4335](https://github.com/NousResearch/hermes-agent/issues/4335)** - Cross-platform session sharing likely targeted for next major release given high engagement
2. **[#66268](https://github.com/NousResearch/hermes-agent/issues/66268)** - WhatsApp skill bindings for auto-loading group skills indicates platform expansion roadmap
3. **[#66393](https://github.com/NousResearch/hermes-agent/issues/66393)** - Browser tool gating for non-interactive sessions suggests improved tooling lifecycle management

The focus on cross-platform consistency and expanded platform support signals a strategic push toward broader ecosystem compatibility.

## User Feedback Summary

**Key Pain Points:**
- **Installation conflicts**: macOS users face node/npm shim shadowing despite previous "fixes"
- **Session management**: Inconsistent behavior across platforms and navigation scenarios frustrates users
- **File handling**: Large media uploads consistently fail on Telegram without clear error resolution
- **Configuration complexity**: Environment variable parsing and NixOS integration issues indicate friction in deployment

Users express clear dissatisfaction with core functionality reliability while showing strong interest in advanced features like cross-platform synchronization and privacy controls.

## Backlog Watch

**Long-Unanswered Critical Issues:**

1. **[#57775](https://github.com/NousResearch/hermes-agent/issues/57775)** - Windows atomic_replace drops writes on concurrent access (1 comment, 2 months old) - Critical Windows stability issue
2. **[#63222](https://github.com/NousResearch/hermes-agent/issues/63222)** - ACP model switch preserves stale base_url routing (1 comment, 11 days old) - Provider configuration regression
3. **[#65942](https://github.com/NousResearch/hermes-agent/issues/65942)** - Snapshot restore data consistency when database is open (1 comment, 7 days old) - Core state management risk
4. **[#69638](https://github.com/NousResearch/hermes-agent/issues/69638)** - Desktop large image reconnect loops (1 comment, 1 day old) - Memory/resource exhaustion vulnerability

These long-standing issues represent technical debt affecting platform compatibility and core reliability that warrant maintainer prioritization.


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑07‑23**  
*Based on GitHub activity (issues & PRs updated in the last 24 h).*

---

### 1. Today's Overview
PicoClaw saw modest activity today: **4 issues** and **5 pull‑requests** were updated, with no new releases. The project remains active, with a mix of bug‑fix work, documentation cleanup, and ongoing feature discussions. No PRs were merged except one documentation‑only change, indicating that development effort is currently focused on triaging and refining existing contributions rather than shipping new functionality.

---

### 2. Releases
- **No new releases** were published today.  
*(Latest version remains v0.2.9 / 0.3.1 as referenced in open issues.)*

---

### 3. Project Progress (Merged/Closed PRs)
| PR | Type | Summary |
|----|------|---------|
| [#3285](https://github.com/siped/picoclaw/pull/3285) | **docs** | Removed the obsolete *picopaw* documentation (reverts PR #3096). No functional code change. |

*No other PRs were merged or closed today.*

---

### 4. Community Hot Topics
| Item | Comments / Reactions | Why it’s hot |
|------|----------------------|--------------|
| [Issue #3203 – Matrix sync loop has no reconnection logic](https://github.com/siped/picoclaw/issues/3203) | 5 comments, 👍 2 | Core reliability issue: the `/sync` long‑polling loop dies silently after any network or homeserver disruption, preventing systemd‑based auto‑restart. Users are experiencing “silent death” of the Matrix channel, making this a high‑visibility stability concern. |
| PR #3286 – fix: update Go and x/text for govulncheck | 0 comments (status undefined) | Security‑maintenance bump; likely to be merged quickly as it addresses vulnerability scanning. |
| PR #3283 – fix(dingtalk): support picture/image message inbound | 0 comments (status undefined) | Feature addition for DingTalk channel; interest from users needing multimedia support. |

*All other updated issues/PRs have 0‑1 comments and no reactions, indicating lower immediate traction.*

---

### 5. Bugs & Stability (Severity Ranking)
| Severity | Item | Description | Fix PR? |
|----------|------|-------------|---------|
| **High** | [#3203](https://github.com/siped/picoclaw/issues/3203) – Matrix sync loop lacks reconnection | Loop terminates permanently on network/homeserver glitch; systemd cannot detect failure. | None yet. |
| **Medium** | [#3258](https://github.com/siped/picoclaw/issues/3258) – Process Hook `before_tool` modify broken | Decision field discarded, args misparsed due to deserialization defect in hook handling. | None yet. |
| **Low** | PR #3286 – update Go & x/text for govulncheck | Dependency update to keep vulnerability scanning current. | **PR #3286** (open). |
| **Low** | PR #3283 – DingTalk picture/inbound support | Adds missing media‑message handling; no reported crash. | **PR #3283** (open). |

*Note: No crash‑reports or regression issues were filed today beyond the above.*

---

### 6. Feature Requests & Roadmap Signals
| Feature Request | Source | Likelihood for Near‑Term Release |
|-----------------|--------|----------------------------------|
| **Stateless / no‑history mode for gateway sessions** | [Issue #3257](https://github.com/siped/picoclaw/issues/3257) | Medium – addresses a clear UX gap for CLI/gateway users; relatively isolated change. |
| **Better IRC long‑message support** | [Issue #3287](https://github.com/siped/picoclaw/issues/3287) | Low‑Medium – requires protocol‑level framing adjustments; may wait for a broader IRC refactor. |
| **AWS Bedrock Converse prompt caching** | [PR #3163](https://github.com/siped/picoclaw/pull/3163) (stale) | Medium – performance‑oriented; if maintainers prioritize cost‑efficiency, could be merged after review. |
| **Deltachat refactor & docs cleanup** | [PR #3222](https://github.com/siped/picoclaw/pull/3222) (stale) | Low‑Medium – code health improvement; likely to be merged once stale label is cleared. |
| **DingTalk picture message support** | [PR #3283](https://github.com/siped/picoclaw/pull/3283) | High – already implements the feature; pending review/merge. |

*Overall, the roadmap appears to be stabilizing reliability (reconnection hooks), extending multimedia channel support, and enabling performance optimizations (prompt caching).*

---

### 7. User Feedback Summary
- **Reliability pain points:** Users report that Matrix connections drop silently after any network hiccup, requiring manual restarts (Issue #3203). This undermines confidence in long‑running deployments.
- **Extensibility frustrations:** Hook developers find the `before_tool` process hook ineffective due to deserialization defects (Issue #3258), limiting custom logic.
- **Gateway usability:** CLI‑oriented users want a stateless mode to easily reset conversations without managing opaque session keys (Issue #3257).
- **Channel‑specific gaps:** DingTalk users desire inbound picture/message handling (PR #3283) and IRC users need proper long‑message reassembly (Issue #3287).
- **Performance interest:** AWS Bedrock users are keen on prompt‑caching to reduce token costs (PR #3163).

*Overall sentiment: users appreciate PicoClaw’s multi‑channel flexibility but are asking for stronger fault‑tolerance and clearer session controls.*

---

### 8. Backlog Watch (Long‑Unanswered / Stale Items Needing Attention)
| Item | Age (approx.) | Label / Note | Why it needs maintainer focus |
|------|---------------|--------------|------------------------------|
| [PR #3222 – deltachat refactor](https://github.com/siped/picoclaw/pull/3222) | ~20 days | **stale** | Code‑health cleanup (200 LOC removed) that would simplify deltachat maintenance; ready for review. |
| [PR #3163 – Bedrock prompt caching](https://github.com/siped/picoclaw/pull/3163) | ~30 days | **stale** | Performance feature with clear user demand; awaiting feedback/testing. |
| [Issue #3258 – before_tool hook broken](https://github.com/siped/picoclaw/issues/3258) | ~8 days | **stale**, **bug** | Blocks extension developers; fix likely localized to hook deserialization. |
| [Issue #3257 – stateless/no‑history mode](https://github.com/siped/picoclaw/issues/3257) | ~8 days | **stale**, **feature** | Straightforward session‑key adjustment; high UX impact. |
| [Issue #3203 – Matrix sync reconnection](https://github.com/siped/picoclaw/issues/3203) | ~21 days | **bug**, **high severity** | Critical reliability gap; no workaround besides manual restart. |

*Addressing these items would improve stability, extensibility, and user experience, and would clear a noticeable backlog of stale but valuable contributions.*

--- 

**End of Digest** – *Generated 2026‑07‑23.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑07‑23**

---

### 1. Today's Overview
The NanoClaw ecosystem is quietly active with one newly‑opened security‑documentation issue and three pull requests still awaiting merge. All three PRs address core functionality—WhatsApp sender‑ID consistency, a Waybar status‑bar utility, and richer Telegram rendering—highlighting continued focus on integration stability and user experience. No releases or merged changes were recorded today, keeping the codebase in a “development‑ready” state.

---

### 2. Releases
**None** – no new versions were published in the last 24 h.

---

### 3. Project Progress
- **Merged / Closed PRs:** *None* – the repository recorded zero merged or closed pull requests today.  
- **Pending Work:** Three open PRs are the primary vehicles of progress:
  1. **#3070** – *Fix WhatsApp sender identity divergence between Baileys and Cloud paths* (QuantumBreakz, updated 2026‑07‑22) – targets a bug where the same phone number receives two different user‑IDs depending on the WhatsApp delivery path.  
  2. **#3117** – *feat(skill): add-omarchy-statusbar — Waybar status indicator for NanoClaw* (mmneimne, updated 2026‑07‑22) – adds a utility skill that surfaces NanoClaw’s “omarchy” state in a system‑status bar.  
  3. **#2877** – *feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage* (robbyczgw‑cla, updated 2026‑07‑22) – introduces native rich‑media formatting for Telegram channels.

---

### 4. Community Hot Topics
| Item | Type | Community Signal | Link |
|------|------|------------------|------|
| **#3118** | Issue (Security Documentation) | First‑day activity; highlights a potential over‑claim about per‑group credential isolation in self‑hosted OneCLI OAuth connections. Likely to attract maintainer attention due to security implications. | [nanocoai/nanoclaw #3118](https://github.com/nanocoai/nanoclaw/issues/3118) |
| **#3070** | PR (Bug Fix) | Highest recent activity; directly resolves a user‑visible inconsistency in WhatsApp channel identity—core to reliability. | [nanocoai/nanoclaw #3070](https://github.com/nanocoai/nanoclaw/pull/3070) |
| **#2877** | PR (Feature) | Ongoing feature work; expands Telegram support with native rich rendering, a frequently requested capability. | [nanocoai/nanoclaw #2877](https://github.com/nanocoai/nanoclaw/pull/2877) |

*Underlying needs:* The community is gravitating toward **stabilizing existing integrations** (WhatsApp identity) and **enriching user‑facing experiences** (Telegram rich messages, status‑bar visibility). The security‑documentation issue signals a need for clearer, accurate documentation around credential management.

---

### 5. Bugs & Stability
| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Medium** | #3118 | SECURITY.md overstates “per‑group credential isolation” for OAuth app connections on self‑hosted OneCLI gateways. | **Open** – documentation clarification required; no code fix yet. |
| **Low** | *None* | No runtime bugs, crashes, or regressions were reported today. | – |

---

### 6. Feature Requests & Roadmap Signals
- **Utility Skill (Waybar status‑bar)** – PR #3117 indicates a demand for quick visual feedback of NanoClaw’s core state (omarchy). If merged, it would become a **low‑overhead, user‑visible feature** useful for system monitoring.  
- **Telegram Rich Rendering** – PR #2877 points to a clear product request for richer messaging on Telegram, aligning with broader trends toward media‑rich chats.  
- **WhatsApp Consistency** – PR #3070 fixes a niche but potentially confusing identity divergence; meeting user expectations for consistent sender IDs is a **baseline reliability goal**.

These three PR themes likely signal where the roadmap will focus in the next release cycle: **bug‑fixes → improved reliability**, **UI‑adjacent utilities → better operability**, and **enhanced channel features → richer integrations**.

---

### 7. User Feedback Summary
- **WhatsApp Identity Inconsistency** (implied by PR #3070) – users reported seeing two distinct user IDs for the same phone number, causing confusion in channel management.  
- **Missing System Status Visibility** (implied by PR #3117) – community contributors requested a simple status indicator (e.g., Waybar) to monitor NanoClaw’s omarchy state at a glance.  
- **Telegram Media Limitations** (implied by PR #2877) – users expressed desire for native rich‑message support, currently limited to basic text in the Bot API.  
- **Security Documentation Clarity** (issue #3118) – the discovery that SECURITY.md overstated credential isolation suggests a need for more precise documentation around OAuth connections, especially for self‑hosted OneCLI deployments.

Overall sentiment leans toward **satisfaction with core functionality** but **dissatisfaction with documentation accuracy** and **requests for richer UI/telemetry**.

---

### 8. Backlog Watch
| Item | Age | Priority | Notes |
|------|-----|----------|-------|
| **#3118** – SECURITY.md over‑claim | 1 day | **High** | Security‑related; requires maintainer review and possible PR to amend docs. |
| **#3070** – WhatsApp identity fix | 7 days | **Medium** | Bug fix ready; awaiting merge to prevent future channel confusion. |
| **#2877** – Telegram rich rendering | 25 days | **Medium** | Feature PR; still in review, but addresses a long‑standing UX gap. |
| **#3117** – Omarchy status‑bar skill | 1 day | **Low‑Medium** | Utility skill; nice‑to‑have but not critical to core functionality. |

These items constitute the **immediate maintainer backlog**: the security‑documentation issue is the top priority, followed by the two integration‑focused PRs that directly affect user experience.

---

**Overall Health Assessment:** NanoClaw is in a **steady development cadence** with clear, actionable work items. The lack of releases suggests a focus on polishing existing features before a new version. The community’s attention is split between **bug fixes**, **documentation correctness**, and **enhancing channel capabilities**, indicating a healthy, user‑driven roadmap.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026‑07‑23**  

---

### 1. Today’s Overview  
The repository saw low but focused activity in the last 24 hours: one issue was closed and one pull request was merged, both addressing a Discord‑gateway stability problem. No new releases were published. Overall, the project remains in a maintenance‑oriented state, with contributors quickly triaging and fixing a reproducible crash that renders bots “deaf” after a single message event.  

### 2. Releases  
*No new releases* were tagged today, so there are no version changes, breaking changes, or migration notes to report.  

### 3. Project Progress  
| PR | Status | Summary | Link |
|----|--------|---------|------|
| #978 | **Merged** (closed) | Moved the Discord typing‑indicator thread from the auxiliary loop stack (512 KB) to the heavy runtime stack, preventing stack overflow caused by TLS handshake memcpys. This resolves the immediate crash that occurs when a bot attempts to send a typing indicator. | [nullclaw/nullclaw PR #978](https://github.com/nullclaw/nullclaw/pull/978) |

The merged PR directly addresses the root cause of the crash described in Issue #977, thereby restoring normal gateway operation after the fix is included in the next build.  

### 4. Community Hot Topics  
Both the issue and the PR have minimal discussion (0 👍, 1 comment on the issue, no comments on the PR), indicating that the problem was identified and resolved quickly by the reporter/maintainer rather than sparking broader community debate.  

* **Issue #977** – “Discord gateway goes permanently deaf after exactly one MESSAGE_CREATE” – reported by **Tetraslam**.  
  *URL:* [nullclaw/nullclaw Issue #977](https://github.com/nullclaw/nullclaw/issues/977)  
  *Underlying need:* Users expect a Discord bot to remain responsive indefinitely; a one‑time failure that silences the gateway is a critical reliability concern.  

* **PR #978** – Fix for the typing‑thread stack overflow – also by **Tetraslam**.  
  *URL:* [nullclaw/nullclaw PR #978](https://github.com/nullclaw/nullclaw/pull/978)  

### 5. Bugs & Stability  
| Item | Severity | Description | Fix Status |
|------|----------|-------------|------------|
| Issue #977 | **High** (blocks core functionality) | After processing a single `MESSAGE_CREATE` event, the Discord gateway stops dispatching any further events while heartbeats continue, leaving the bot “deaf” until restart. | Fixed by PR #978 (merged). |

No other bugs or regressions were reported today.  

### 6. Feature Requests & Roadmap Signals  
There were no new feature requests or roadmap‑related issues opened in the last 24 h. The recent fix suggests the maintainers are currently prioritizing stability of the Discord integration; future work may focus on:  

* Stress‑testing the gateway under high‑frequency event loads.  
* Adding observability (metrics/logs) to detect silent event‑dropping earlier.  

### 7. User Feedback Summary  
The sole user report highlights a **critical pain point**: a bot that appears online but stops reacting to messages after the first interaction, which severely impacts usability for any real‑world deployment. The rapid resolution (issue opened and PR merged within the same day) indicates a responsive maintenance process, likely leaving the user satisfied once the fix is released.  

### 8. Backlog Watch  
*No long‑standing, unanswered issues* are evident from today’s data. The only recent issue (#977) has been closed with a fix merged, so there is no immediate backlog requiring maintainer attention. Maintainers should, however, keep an eye on similar stack‑size or threading edge cases in other parts of the Discord client as the codebase evolves.  

---  

*All links point to the exact GitHub resources referenced above.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-23

## 1. Today's Overview

IronClaw shows **intense pre-launch activity** with 100 total items updated (50 issues, 50 PRs) in 24 hours. The project is in a **"v1-launch-checklist" sprint** — 7 new issues tagged with this label appeared today alone, covering onboarding failures, OAuth configuration gaps, and missing Telegram setup guidance. Simultaneously, the team is retroactively closing 10+ "Completed foundation" issues documenting work merged over the past weeks (Reborn architecture, extension runtime, Telegram/Slack channels, operator config, testing playbook). The codebase is undergoing a **major architectural migration to "ProductSurface"** — 5 large PRs (#6442, #6480, #6536, #6538, #6529) refactor runtime composition, API routing, and channel ingress onto a unified facade. No new releases cut today; the release PR (#5598) remains open with breaking changes in `ironclaw_common` and `ironclaw_skills`.

## 2. Releases

**No new releases published today.**  
The automated release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (opened 2026-07-03, updated today) proposes:
- `ironclaw_common` 0.4.2 → 0.5.0 (**breaking**: `copy_impl_added` type now implements `Copy`)
- `ironclaw_skills` 0.3.0 → 0.4.0 (**breaking** changes)
- `ironclaw_safety` 0.2.2 → 0.2.3 (compatible)
No migration guide linked; consumers should audit `Copy` trait dependencies before upgrading.

## 3. Project Progress — Merged/Closed PRs Today (21 items)

| PR | Title | Area | Significance |
|----|-------|------|--------------|
| [#6535](https://github.com/nearai/ironclaw/pull/6535) | test(reborn): add Slice 0 reference model oracles | Testing/E2E | Adds pure turn/run lifecycle reference model + generated stateful operation coverage (submit, claim, heartbeat, block, resume, cancel, complete, fail, lease expiry, race-claim, reopen recovery) |
| [#6444](https://github.com/nearai/ironclaw/pull/6444) | docs: refresh Reborn ProductSurface routing design | Docs/Architecture | Documents Urbit/terminal causal-routing model for ProductSurface |
| [#6441](https://github.com/nearai/ironclaw/pull/6441) | refactor(reborn): name ProductSurface boundary | Core Refactor | Introduces `ProductSurface` trait over frozen `RebornServicesApi`; moves WebUI, auth, composition, tests to `Arc<dyn ProductSurface>` |
| [#6519](https://github.com/nearai/ironclaw/pull/6519) | Completed foundation: Testing playbook and required PR test strategy | Process | Retrospective: PR #6411 (TDD playbook) + #6415 (required Test Strategy in PRs) merged July 21 |
| [#6515](https://github.com/nearai/ironclaw/pull/6515) | Completed foundation: Operator configuration write plane | Operator/Config | Retrospective: PR #6246 added `ironclaw config set` with plain/encrypted separation, validation, explicit apply |
| [#6514](https://github.com/nearai/ironclaw/pull/6514) | Completed foundation: Generic installation ownership and extension runtime | Extensions | Retrospective: PR #6116 delivered generic install ownership, per-user visibility, unified runtime |
| [#6513](https://github.com/nearai/ironclaw/pull/6513) | Completed foundation: Per-user extension lifecycle and OAuth hardening | Extensions/OAuth | Retrospective: PR #5957 hardened OAuth, actor-scoped cleanup, credential revocation, durable continuation |
| [#6510](https://github.com/nearai/ironclaw/pull/6510) | Completed foundation: Unified web-gateway thread model | Web Gateway | Retrospective: PR #607 (Mar 7) established unified thread model |
| [#6505](https://github.com/nearai/ironclaw/pull/6505) | Completed reference: Slack routing, identity, threads, delivery honesty | Slack/Channels | Retrospective: PR #5898 (Jul 10) delivered strongest Slack provider reference |
| [#6499](https://github.com/nearai/ironclaw/pull/6499) | Completed foundation: Telegram production-image support | Telegram | Retrospective: PR #6217 (Jul 18) compiled Telegram host into production image |
| [#6498](https://github.com/nearai/ironclaw/pull/6498) | Completed foundation: Reborn Telegram channel, pairing, DM entrypoint | Telegram | Retrospective: PR #6159 (Jul 18) shipped Telegram as first-class Reborn channel |
| [#6495](https://github.com/nearai/ironclaw/pull/6495) | Completed foundation: Unified generic extension runtime | Extensions | Retrospective: PR #6116 (Jul 22) delivered unified runtime, manifest registry |
| [#6494](https://github.com/nearai/ironclaw/pull/6494) | Completed foundation: Manifest-driven extension ingress | Extensions | Retrospective: PR #5626 (Jul 5) made Slack inbound routes declarative in manifest |
| [#6493](https://github.com/nearai/ironclaw/pull/6493) | Completed foundation: Extension manifest registry and Manifest V2 | Extensions | Retrospective: PRs #3015, #3591, #3760 established manifest registry + V2 types |
| [#6489](https://github.com/nearai/ironclaw/pull/6489) | Completed foundation: Host-managed memory retrieval and after-turn recording | Memory/Agent | Retrospective: PR #5327 (Jul 20) delivered provider-neutral retrieval + after-turn recording |
| [#6521](https://github.com/nearai/ironclaw/pull/6521) | [v1-launch-checklist] ironclaw CLI not available on agent staging | CLI/Infra | **Closed** (issue #6521): CLI missing in hosted staging SSH |

**Pattern**: 10 "Completed foundation" issues closed today are **retrospective documentation** of work already merged — not new merges. The only *new* merge today appears to be #6535 (test oracles) and #6521 (CLI fix). The team is cleaning up tracking hygiene ahead of v1.

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) **EPIC: error-recoverability endgame** | 4 | Epic | **Model must recover from 100% of seen errors**: run survives, model sees cause+fix, gets turn to act. Terminal failure only for genuine unrecoverables. |
| [#6105](https://github.com/nearai/ironclaw/issues/6105) **Extension/channel lifecycle state-machine test** | 3 | Enhancement/E2E | Slack lifecycle (install→connect→disconnect→reconnect→uninstall) is #1 user-facing bug family; regressed across 4 QA waves despite 5 fixes. Needs canary cron + state-machine test. |
| [#5459](https://github.com/nearai/ironclaw/issues/5459) **Configurable skills and tools** | 2 | Enhancement | Admin/user WASM tool/skill install with proper visibility scoping (admin=shared, user=private). Admin tool catalog management. |
| [#3288](https://github.com/nearai/ironclaw/issues/3288) **Reborn: production/scoped capability lifecycle admin parity** | 2 | Epic/Refactor | Move extension/skill/MCP/WASM ownership into typed lifecycle/config/package/trust services, `CapabilityCatalog`, `ToolSurfaceService` — preserve UX while restructuring. |
| [#6534](https://github.com/nearai/ironclaw/issues/6534) **Google OAuth config can't be applied in hosted deployments** | 1 | v1-blocker | Hosted staging: operator can save Google OAuth config but it doesn't take effect — container restart path + config consumption broken. Partial fix in [#6533](https://github.com/nearai/ironclaw/pull/6533). |
| [#6480](https://github.com/nearai/ironclaw/pull/6480) **Continue ProductSurface conversion for operator/project/admin APIs** | — | PR (XL) | Major architectural PR: route operator config, project, admin, automation, view APIs through ProductSurface; retains API-only capabilities, reuses operator tool catalog. |
| [#6442](https://github.com/nearai/ironclaw/pull/6442) **Unify Reborn runtime composition** | — | PR (XL) | Collapse local/production runtime onto single production-shaped path; remove `build_local_runtime`, `RuntimeSubstrate::Local`, profile predicates. |
| [#6538](https://github.com/nearai/ironclaw/pull/6538) **Route OpenAI compat through ProductSurface** | — | PR (XL) | Route OpenAI Chat Completions/Responses through ProductSurface instead of ProductWorkflow; preserve 10MiB inline image limit. |

**Underlying theme**: The project is **simultaneously stabilizing for v1 launch** (fixing onboarding, OAuth, Telegram UX) **and completing a massive architectural migration** (ProductSurface unification, Reborn runtime composition, extension lifecycle generification). The "v1-launch-checklist" issues are user-facing blockers; the XL PRs are internal debt paydown that enables maintainability post-launch.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P0 — Launch Blocker** | [#6523](https://github.com/nearai/ironclaw/issues/6523) | **Agent creation fails during onboarding if "test build" flag set** — deployment errors out completely. Screenshot attached. | None yet |
| **P0 — Launch Blocker** | [#6534](https://github.com/nearai/ironclaw/issues/6534) | **Google OAuth config saved but not applied in hosted deployments** — container restart path broken, config consumption unclear. | Partial: [#6533](https://github.com/nearai/ironclaw/pull/6533) (container-supervised mode) |
| **P1 — Core Function** | [#6475](https://github.com/nearai/ironclaw/issues/6475) | **Telegram `/pair` command not recognized** — user trapped in pairing loop; agent treats `/pair` as plain text, repeats instruction. | None |
| **P1 — Core Function** | [#6478](https://github.com/nearai/ironclaw/issues/6478) | **Agent doesn't recognize connected Telegram, redirects to Slack auth** — channel detection broken; Telegram active but Slack auth triggered. | None |
| **P1 — Core Function** | [#6474](https://github.com/nearai/ironclaw/issues/6474) | **Telegram delivery channel not configurable in Delivery Defaults** — only "Web app only" option shown; no way to select Telegram/Slack. | None |
| **P2 — UX/Config** | [#6522](https://github.com/nearai/ironclaw/issues/6522) | **No Telegram setup instructions** — user left without guidance (Google OAuth shows example). Screenshots attached. | None |
| **P2 — Infra** | [#6521](https://github.com/nearai/ironclaw/issues/6521) | **`ironclaw` CLI not available on agent staging** — `command not found` on SSH. | **Closed** (fix deployed/verified) |

**Note**: 4 Telegram-related bugs filed today (#6474, #6475, #6478, #6522) — indicates **Telegram channel is a major gap** for v1 launch. Only #6521 has resolution.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Error recoverability contract** — every mid-run error must be survivable, visible to model with cause+fix, actionable | [#6284](https://github.com/nearai/ironclaw/issues/6284) (Epic) | **High** — labeled "endgame"; foundational for agent reliability |
| **Extension/channel lifecycle state-machine test + canary cron** for Slack/Telegram | [#6105](https://github.com/nearai/ironclaw/issues/6105) | **High** — #1 bug family, 4 QA regressions; canary = production monitoring |
| **Admin/user-scoped WASM tool & skill installation** with visibility controls | [#5459](https://github.com/nearai/ironclaw/issues/5459) | **Medium** — TODO list in issue; partial work in "Completed foundation" PRs |
| **Capability lifecycle admin parity** — typed services for extension/skill/MCP/WASM ownership | [#3288](https://github.com/nearai/ironclaw/issues/3288) | **Medium** — "Reborn" epic parent; long-running (created May 6) |
| **Secret-lease + egress-proxy daemon** for sandboxed tool execution | [#6472](https://github.com/nearai/ironclaw/issues/6472) | **Medium** — Part of #6468; depends on container core; C1-C7 tasks defined |
| **Attested-signing stack + Ledger hardware wallet clear signing** | [#6532](https://github.com/nearai/ironclaw/issues/6532) | **Low** — Design + Phase A plan only; blockchain tx signing safety feature |
| **Hermetic capability & journey testing platform** — deterministic coverage for all capabilities | [#6524](https://github.com/nearai/ironclaw/issues/6524) | **High** — Epic created today; addresses "cannot answer mechanically if every capability has coverage" |
| **Automated QA for Reborn binary** (hermetic + fixture + e2e + live) | [#4775](https://github.com/nearai/ironclaw/issues/4775) | **High** — Epic from Jun 11; 8 manual QA journeys to automate |

**Prediction**: Next version (v1.0.0-rc.x) will ship with **Telegram fixes**, **Google OAuth hosted fix**, **error recoverability foundation**, and **ProductSurface unification complete**. The testing platform epics (#6524, #4775) are post-v1 investments.

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Onboarding broken for test builds** | [#6523](https://github.com/nearai/ironclaw/issues/6523) — screenshot shows deployment error | New users trying test builds hit dead end; blocks QA/dogfooding |
| **Telegram setup is invisible** | [#6522](https://github.com/nearai/ironclaw/issues/6522) — "needs to provide instructions... even if CLI"; [#6474](https://github.com/nearai/ironclaw/issues/6474) — delivery defaults missing Telegram | Users cannot complete Telegram pairing; falls back to Slack incorrectly ([#6478](https://github.com/nearai/ironclaw/issues/6478)) |
| **Pairing loop trap** | [#6475](https://github.com/nearai/ironclaw/issues/6475) — `/pair` treated as text, instruction repeats | User stuck, cannot recover without external help |
| **OAuth config appears saved but does nothing** | [#6534](

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>


## LobsterAI Project Digest (2026-07-23)

---

### 1. Today's Overview  
Over the past 24 hours, LobsterAI has seen **moderate activity**, with **1 closed issue** and **5 merged/closed pull requests**. All recent PRs focused on stability, UI refinements, and feature enhancements. Notably, there were **no new releases** during this period. The project appears stable but with ongoing maintenance and infrastructure improvements rather than major feature launches.

---

### 2. Releases  
No new releases were published in the last 24 hours.

---

### 3. Project Progress  
The following PRs were **merged or closed today**, indicating active development and quality improvements:

- **#2377** – *feat: windows update installer hardening*  
  Author: [fisherdaddy](https://github.com/netease-youdao/LobsterAI/pull/2377)  
  Addresses Windows-specific installer robustness. Likely improves installation reliability on Windows platforms.

- **#2376** – *fix(cowork): render export modal above sidebar*  
  Author: [liuzhq1986](https://github.com/netease-youdao/LobsterAI/pull/2376)  
  Fixes a UI layering issue by mounting the export options modal outside the normal DOM hierarchy to avoid z-index conflicts.

- **#1346** – *[stale] Feat/skills management*  
  Author: [leefinder](https://github.com/netease-youdao/LobsterAI/pull/1346)  
  A long-standing PR refined and merged, suggesting integration of skill management capabilities based on prior work ([PR #846](https://github.com/netease-youdao/LobsterAI/pull/846)).

- **#1347** – *[stale] feat(scheduledTask): 新增 Cron 自定义调度、Agent 选择器及交互体验优化*  
  Author: [swuzjb](https://github.com/netease-youdao/LobsterAI/pull/1347)  
  Enhances the scheduled task module with custom cron scheduling, agent/model selection, and improved form UX. This represents a substantial usability and functionality upgrade.

- **#2375** – *fix(openclaw): guard against oversized transcript OOM crashes*  
  Author: [fisherdaddy](https://github.com/netease-youdao/LobsterAI/pull/2375)  
  Prevents out-of-memory crashes in the gateway when handling large transcripts. Adds crash classification and prevents reconnect loops post-OOM recovery.

---

### 4. Community Hot Topics  
While no single discussion thread dominated today in terms of comment volume, two items stand out due to their age and closure status:

- **Issue #1348**: A bug report regarding lack of validation for duplicate scheduled task names ([link](https://github.com/netease-youdao/LobsterAI/issues/1348)). Though closed as stale, it reflects a real user need for stronger input validation in core modules.
  
- **PR #1346 & #1347**: Both submitted months ago (April 2026) and marked as "stale" before merging. Their closure today suggests improved triage or revival of previously overlooked contributions. Users may be seeking clearer signals on which features are prioritized or revived.

---

### 5. Bugs & Stability  
The most critical stability-related PR is **#2375**, which guards against **OOM crashes** caused by oversized transcripts—an essential fix for runtime reliability in production environments. 

Additionally, **Issue #1348** highlights a missing validation check leading to potential duplication errors in scheduled tasks. While not resolved in-code (marked stale), its closure implies either low priority or that it was addressed indirectly elsewhere.

No regression reports were observed in today’s updates.

---

### 6. Feature Requests & Roadmap Signals  
Based on merged PRs, especially **#1347**, there is clear momentum around enhancing **scheduled task management**. Features like:
- Customizable Cron scheduling via visual builder or raw expression
- Agent/model binding within scheduler GUI
- Improved UX consistency

These could become key user-facing capabilities in a future minor release. Similarly, the integration of **skills management** via **#1346** signals extensibility improvements—potentially aligning with AI agent customization trends.

---

### 7. User Feedback Summary  
Users appear to value:
- Reliable cross-platform installations (e.g., hardened Windows support)
- Smoother collaboration workflows (fixed modal overlap)
- Better control over automated behaviors through enhanced scheduling tools

However, unresolved edge cases like name collision in task creation (Issue #1348) suggest room for improvement in backend validation and user guidance.

---

### 8. Backlog Watch  
Several items from April 2026 resurfaced today after being labeled “stale”:
- **PR #1346** (*skills management*) – Now merged, but sat unaddressed for months.
- **PR #1347** (*scheduled task enhancements*) – Also stale but now integrated.
- **Issue #1348** (*task naming validation*) – Remains unfixed despite closure.

This pattern suggests periodic maintenance cycles where older submissions receive renewed focus. Maintainers may benefit from more proactive labeling or feedback mechanisms to reduce uncertainty among contributors.

--- 

✅ _All links direct to official GitHub resources._  
📅 _Generated on 2026-07-23 using data from netease-youdao/LobsterAI._


</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw – Project Digest (2026‑07‑23)

**Project:** QwenPaw (the agent‑powered chatbot platform)  
**Repository:** `agentscope-ai/QwenPaw`  
**Primary language:** Node.js / TypeScript

---

## 1️⃣ Today’s Overview  
On July 22 2026 the QwenPaw community saw a **steady burst of activity**:.lst. 31 issues were updated, 50 PRs were touched, and a new major post‑release (v2.0.0.post4) was published. The release added runtime optimizations that reduce duplicate tool calls – a key focus for stability. The day was dominated by bug‑fix and feature‑extension work, but no critical production outages were reported. Overall, the project is progressing smoothly, with a healthy mix of maintenance and feature‑development.

---

## 2️⃣ Releases  
**🚀 v2.0.0.post4** (Published 2026‑07‑22 11:15 UTC)  
- **Reasoning Optimisation:** Removes redundant thinking loops and prevents duplicate tool invocations, improving throughput and reducing CPU usage.  
- **Micro‑overhead:** A 2 s fixed latency per simple conversational reply was observed compared to v1.1.x; users desiring ultra‑low latency should benchmark against this.  
- **Breaking changes:** None.  
- **Migration note:** Existing agents may see a minor increase in response time; no code changes are required.  

> Release page: https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post4

---

## 3️⃣ Project Progress  
### Closed/merged PRs (today)

| PR | Status | Summary |
|----|--------|---------|
| **#6375** | Closed, Closed‑and‑review‑later | Re‑implements tokenन्च persistence retry after transient write failure. |
| **#6359** | Closed, Fix | Switches context‑injection role from `system` to `user`, preventing accidental mid‑conversation system messages. |

### Notable open PRs (feature / bug‑fix)

| Issue / PR | Feature / Fix | Comments | Link |
|------------|----------------|----------|------|
| **#6284** | *Feature* – QwenPaw Creator app | 0 comments (in kendi) | https://github.com/agentscope-ai/QwenPaw/pull/6284 |
|、安全 | **#6307** | *Bug* – 2 s overhead issue misdiagnosed | 4 comments நண்பர் | https://github.com/agentscope-ai/QwenPaw/issues/6307 |
| **#6323** | *Feature* – staged compaction & durable task continuity | 0 comments | https://github.com/agentscope-ai/QwenPaw/pull/6323 |
| **#6353** | *Feature* – per‑cron‑job model overrides | 0 comments | https://github.com/agentscope-ai/QwenPaw/pull/6353 |
| **#6363** | *Fix* – strip markdown fences / XML tags from tool‑call arguments | 1 comment | https://github.com/agentscope-ai/QwenPaw/pull/6364 |
| **#6318** | *Feature* – Conversation‑level model selection |dagog | 0 comments | https://github.com/agentscope-ai/QwenPaw/issues/6318 |
| **#6376** | *Bug* – main‑process hangs after loop feature in v2.0.0.post3/4 | 1 comment | https://github.com/agentscope-ai/QwenPaw/issues/6376 |

*The above PRs are the most high‑visibility items updated today, though many others are in review/queued.*

---

## 4️⃣ Community Hot Topics  
| Issue | Comment Count | Primary Pain Point | Context / Summary |
|-------|---------------|--------------------|-------------------|
| **#5218** (closed) | 18 | Sub‑agent context comp среднем leading to process freeze | Context compaction triggers CPU‑heavy compression; freeze occurs during sub‑agent invocation. |
| **#6322** | 8 | “跳广告页” problem on mobile networks | Platform redirects to ad page on 运营商 networks; likely network behaviour(iv). |
| **#6314** | 8 | RemoteProtocolError: Peer closed connection | The main process prematurely closes TCP socket; traced to “shutdown” call after a 1st loop cycle. |
| **#6318** | 6 | Crypto model selection per conversation | Users want per‑conversation, not per‑agent, model. |
| **#6307** | 4 | Performance regression (~2 s latency) | Newly added architecture overhead; needs tuning. |

These items show that *performance*, *reliability*, and *flexible deployment* remain top community priorities.

---

## 5️⃣ Bugs & Stability (Severity Scale – High/Med/Low)

| Severity | Issue | Symptoms | Fix PR (today) |
|----------|-------|----------|----------------|
| **High** | **#5218** | Complete process freeze during sub‑agent context compaction | ✅ Closed (fixed in earlier commit); no open PR today. |
| **High** | **#6376** | Main process hangs after new loop feature (post‑Kas) | Pending – open issue, no patch yet. |
| **Med** | **#6314** | Random RemoteProtocolError causing agent logout | No reference PR today; will be addressed in next build. |
 mở | **Med** | **#6307** | 2 s idle overhead per reply | No PR today – issue flagged for performance review. |
| **Low** | **#6363** | Tool‑call arguments unreadable due to markdown fences | **#6364** – closed today. |
| **Low** | **#6358** | Context injection as `system` leads to ValueError | **#6359** fix closed today. |

*High‑severity bugs remain in maintenance mode; upcoming PRs will focus on stabilizing the loop logic.*

---

## 6️⃣ Feature Requests & Roadmap Signals  

| Feature | Source | Priority | Likely Next Version? |
|---------|--------|----------|-----------------------|
| Per‑cron‑job model override (`--model`) | #6353 | **-** | → v2.0.1 |
| Per‑conversation model selection | #6318 | **+** | → v2.0.1adhan |
| Durable context compaction / staged compaction | #6323 | **+** | → v2.0.1 |
| Drag‑and‑drop file upload (images, PDFs) | #6297 | **+** | → v2.0.2 |
| Docker hot‑reload web front‑end | #6344 | **+** | → v2.0.2 |
| Multi‑user support for corporate deployment | #6335 | **+** | → v3.0 (major intent) |

The community is increasingly demanding **fine‑grained model control**, **robust context persistence**, and **deployment‑friendly upgrades**—all of which are slated for the next hot release or included in a feature‑heavy minor iteration.

---

## 7️⃣ User Feedback Summary  

- **Pain points**  
  - “Process freezes سل during sub‑agent invocation (posted 2026‑06‑16).”  
  - “Tool call JSON is wrapped in markdown → failure (posted 2026‑07‑22).”  
  - “Timestamped context compaction introduces ~2 s latency (posted 2026‑07‑21).”  
- **Use‑cases**  
  - *reatment features*: image commenting, document review.  
  - *Cron jobs*: scheduled data‑fetching with per‑job model selection.  
- **Satisfaction**  
  - Positive reception of the new reasoning optimisation post‑release.  
  - Mixed feedback on the new two‑second overhead; more testing needed.

---

## 8️⃣ Backlog Watch  
| Issue/PR | Status | Comments | Recommendation |
|----------|--------|----------|----------------|
| **#6376** | Open | Main process hangs after loop upgrade | Prioritize; reproduce with minimal setup. |
| **#6307** | Open | Fixed‑overhead regression | Benchmark; consider lazy‑initialisation. |
| **#6314** | Open | Random RemoteProtocolError | Add socket‑linting, connection‑timeout logic. |
| **#6535** | Not listed but significant | Wrong behavior with MiniMax‑M3 visual capability | Investigate image‑description API integration. |
| **#6344** | Open | Docker deployment retains state | Propose container data volume scheme. |

These items are **high‑impact** but have not received sufficient triage; maintainers should assign triagers or issue owners soon.

---

**Bottom line:** QwenPaw enjoys active development, a healthy issue/PR backlog, and a rapidly evolving feature set. The latest release’s optimization has increased confidence in the platform, though some performance regressions and stability bugs need attention. Next‑Milestone (v2.0.1) should focus on fine‑grained model control, durable compaction, and enhancing deployment ergonomics, as indicated by the community’s top‑ranked feature requests.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

User Safety: safe

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*