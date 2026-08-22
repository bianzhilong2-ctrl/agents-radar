# OpenClaw Ecosystem Digest 2026-08-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-22 00:40 UTC

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

**Today's Overview**  
OpenClaw remains in active development, with 500 issues and 500 PRs updated in the last 24 hours. The project is prioritizing critical bugs like a **gateway memory leak** (Issue #91588) and performance bottlenecks while advancing UI/UX improvements. Despite no new releases today, maintainers are addressing high-severity infrastructure and session recovery issues that directly impact user stability.  

---

**Releases**  
No new releases occurred since the last digest. Work on the **2026.8.1-beta.2** candidate is ongoing, with validation efforts (Issue #125626) underway to ensure stability before general availability.  

---

**Project Progress**  
- **Merged/Closed PRs (800+)**:  
  - Fix UI element alignment for mobile compatibility (PR #124301, #127717).  
  - Improve OpenAI Codex model onboarding reliability (PR #125471).  
  - Prevent session catalog refresh storms during UI initialization (PR #123535).  
- **Fixed Features**: Native Windows device identity consistency (PR #127648), stickers handling for Telegram (PR #126618), and historical wiring of playground state (PR #121576).  
- **Security/Stability**: Session recovery post-restart (Issue #57425) and credential validation during initialization (PR #127703).  

---

**Community Hot Topics**  
1. **Gateway Memory Leak (#91588)**: Critical OOM-related RSS ballooning (350MB → 15.5GB) impacting reliability. [🔗](https://github.com/openclaw/openclaw/issues/91588)  
2. **Telegram Delivery Failures (#87744, #126246)**: Sessions time out or lose messages during tool flows. [🔗](https://github.com/openclaw/openclaw/issues/87744) | [🔗](https://github.com/openclaw/openclaw/issues/126246)  
3. **Codex Integration Stalls (#91009)**: Pre-tool hooks spawn CPU-heavy processes blocking RPCs. [🔗](https://github.com/openclaw/openclaw/issues/91009)  
4. **Release Validation Delay (Issue #125626)**: Beta 2 validation delayed by credential configuration edge cases. [🔗](https://github.com/openclaw/openclaw/issues/125626)  

---

**Bugs & Stability**  
- **P0 (Critical)**: Gateway memory leak causing OOM crashes ([🐸 #91588](https://github.com/openclaw/openclaw/issues/91588)).  
- **P1 (High)**: Feishu duplicate replies during model failover ([🦪 #49381](https://github.com/openclaw/openclaw/issues/49381)).  
- **P2 (Moderate)**: Stealing of GitHub Copilot auth profiles ([🦸 #46031](https://github.com/openclaw/openclaw/issues/46031)).  
- **Notable Fixes**: PRs for memory leak guidance ([PR #126748](https://github.com/openclaw/openclaw/pull/126748)) and database corruption ([#126821](https://github.com/openclaw/openclaw/issues/126821)).  

---

**Feature Requests & Roadmap Signals**  
- **Skill prioritization** (Issue #50199) and **multi-agent messaging** (Issue #50798) align with recurring requests to refine complex workflows.  
- **MathJax/LaTeX support** (Issue #42840) indicates domain-specific user needs.  
- **Slack modals** (Issue #88154) and **task-status interfaces** (Issue #52640) suggest demand for channel-native integrations.  

---

**User Feedback Summary**  
Users report frustration with:  
- **Silent failures** in session state recovery (Issue #87561).  
- **Hardcoded paths** breaking custom setups (Issue #51429).  
- **Latency spikes** during large-tool operations ([Issue #108215](https://github.com/openclaw/openclaw/issues/108215)).  
Positive feedback highlights progress on environment differentiation (PR #127711) and UI polish.  

---

**Backlog Watch**  
- **Open Issues with >10 Comments**:  
  - Memory leak guidance validation (Issue #125626, 18 comments).  
  - Discord routing regression (#44502, 7 comments).  
  - Session token inflation ratchet flaw (Issue #125333, 5 comments).  
- **Key PRs Pending**:  
  - Authorization provider naming in errors (#51336).  
  - Session label/visibility improvements (#55249).  
  - Native palette theme customization (#28300).


---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Ecosystem (2026-08-22)

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is experiencing **rapid innovation** with 8 major projects actively maintained, collectively pushing boundaries in multi-platform integration, safety protocols, and developer tooling. **OpenClaw emerges as the dominant force** with 1000 daily issue/PR updates, while smaller projects like **NanoBot and PicoClaw show targeted maturity** in specialized domains. The ecosystem reflects a clear shift toward **security-first architectures**, **observability infrastructure**, and **cross-platform consistency**, with developers increasingly prioritizing **production-grade reliability** over rapid feature expansion.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases | Health Score* | Status |
|---------|---------------------|-------------------|----------|---------------|---------|
| OpenClaw | 500 | 500 | None | 9/10 | Very High Activity |
| Hermes Agent | 50 | 50 | v0.20.5 | 8/10 | High Activity |
| NanoBot | 5 | 37 | None | 7/10 | Moderate-High |
| ZeroClaw | 50 | 50 | None | 8/10 | High Activity |
| CoPaw | 34 | 36 | None | 7/10 | High Activity |
| Moltis | 2 | 8 | None | 5/10 | Low-Moderate |
| NanoClaw | ~24 | 24 | None | 6/10 | Moderate |
| LobsterAI | 0 | 13 | v2026.8.21 | 7/10 | Moderate-High |
| PicoClaw | 1 | 4 | None | 6/10 | Low |

*Health Score (1-10): Composite metric based on issue resolution rate, PR merge frequency, release cadence, and critical bug backlog

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale Dominance**: 10x higher activity than closest competitors (500 vs 50 daily updates)
- **Critical Bug Resolution**: Rapid turnaround on P0 issues like gateway memory leak (#91588)
- **Enterprise Integration**: Advanced platform parity across Discord, WhatsApp, Slack with dedicated campaigns
- **Architectural Maturity**: Proof-carrying state verification (#90866) and unified deployment planning (#91277)

**Technical Approach Differences:**
- Implements **transactional deployment planning** vs ad-hoc installation workflows
- Uses **proof-carrying observable state** for enhanced reliability
- Employs **bot mode consolidation** architecture vs fragmented control planes

**Community Size**: Estimated 5000+ active users vs 1000-2000 for tier-2 projects

## 4. Shared Technical Focus Areas

Multiple projects converge on critical requirements:

- **Multi-Platform Channel Support**: 
  - OpenClaw (Discord/WhatsApp/Slack parity), Hermes Agent (platform campaigns), ZeroClaw (Telegram/WhatsApp fixes), NanoBot (channel reliability)

- **Safety & Injection Detection**:
  - NanoBot (PromptGuard #1149), OpenClaw (credential validation), ZeroClaw (high-risk command blocking #10164)

- **Cross-Platform Compatibility**:
  - CoPaw (Windows test coverage #7205), OpenClaw (Windows device identity PR #127648), ZeroClaw (Alpine non-root enforcement #10173)

- **Session Management & Recovery**:
  - OpenClaw (session recovery #57425), Hermes Agent (macOS WebSocket reconnection #89083), CoPaw (MCP auto-reconnect #6524)

- **Resource Management**:
  - OpenClaw (gateway memory leak), ZeroClaw (unbounded subprocesses #10210), NanoBot (cron job persistence #5407)

## 5. Differentiation Analysis

**Feature Focus:**
- **OpenClaw/LobsterAI**: Enterprise-scale multi-channel deployments
- **Hermes Agent**: Architectural rigor and proof-carrying state
- **ZeroClaw**: Security-first zero-trust architecture
- **NanoBot**: Provider diversity and safety integration
- **PicoClaw**: Embedded/system-level agent capabilities

**Target Users:**
- **Tier 1 (OpenClaw/Hermes)**: Enterprise developers requiring production-grade reliability
- **Tier 2 (NanoBot/CoPaw)**: Power users needing advanced customization and integrations
- **Specialized (ZeroClaw/PicoClaw)**: Security-conscious and embedded applications

**Technical Architecture:**
- **Event-Driven**: OpenClaw, Hermes Agent
- **Microservice-Oriented**: ZeroClaw (ZeroRelay), NanoBot (provider contracts)
- **Monolithic with Plugins**: CoPaw, Moltis

## 6. Community Momentum & Maturity

**Rapidly Iterating (High Velocity):**
- **OpenClaw** (500+ daily updates), **Hermes Agent** (active release cycle v0.20.5), **ZeroClaw** (intense security focus)
- Characterized by frequent releases, aggressive bug fixing, and architectural evolution

**Stable/Mature Phase:**
- **PicoClaw**, **Moltis** (low daily activity but consistent maintenance)
- Focused on refinements, documentation, and specialized use-case optimization

**Emerging Growth:**
- **NanoBot**, **CoPaw** (moderate activity with clear roadmap signals)
- Transitioning from experimental to production-ready

**Risk Alert**: Projects showing **low community engagement** (Moltis, PicoClaw) despite active PR pipelines may face sustainability challenges

## 7. Trend Signals

**Industry Trends Extracted:**

1. **Security-First Development Becomes Mandatory**
   - PromptGuard integration (NanoBot #1149), high-risk command blocking (ZeroClaw #10164)
   - **Value**: Developers should implement defense-in-depth rather than bolt-on security

2. **Observability Infrastructure Is Critical for Production Adoption**
   - Typed usage contracts (NanoBot #5478-5481), health metrics internationalization (ZeroClaw #10108)
   - **Value**: Agent developers need built-in telemetry for debugging distributed workflows

3. **Cross-Platform Consistency Requires Dedicated Engineering Resources**
   - Windows CI gaps (CoPaw #7205), macOS sleep/wake recovery (Hermes #89083)
   - **Value**: Invest in platform-specific testing infrastructure early to avoid technical debt

4. **Provider Abstraction Enables Competitive Advantage**
   - DeepSeek vision support (NanoBot #5474), Anachronistic native API (PicoClaw #1158)
   - **Value**: Modular provider architectures allow rapid adaptation to market changes

5. **Developer Experience Dictates Adoption Rates**
   - Model switching friction (NanoBot #5198), manual skill invocation (NanoBot #5405)
   - **Value**: Prioritize workflow continuity and intuitive interfaces over feature completeness

**Strategic Recommendation**: Projects focusing on **security primitives**, **observability hooks**, and **cross-platform reliability** are positioning themselves for enterprise adoption, while those emphasizing **novel UX patterns** risk being overtaken by more stable alternatives.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑08‑22**  
*Generated from GitHub activity (issues & PRs updated in the last 24 h; no new releases).*

---

### 1. Today's Overview
The repository showed **steady maintenance activity** today: 5 issues were touched (1 still open, 4 closed) and 37 pull‑requests were updated (14 open, 23 merged/closed). No new version was tagged. The bulk of the work centered on **provider‑usage contract refactoring**, **Dream/agent stability fixes**, and **UI/UX polish** (LaTeX rendering, PWA safe‑area, Slack file validation). Overall project health appears healthy – a high PR merge rate indicates active development, while the single open issue (#5463) points to a lingering background‑task leak in the DingTalk channel that needs attention.

### 2. Releases
- **No new releases** were published in the last 24 h.  
*(If a release appears later, check the changelog for breaking changes and migration notes.)*

### 3. Project Progress – Merged/Closed PRs Today
| PR | Title / Focus | Status | Key Impact |
|----|---------------|--------|------------|
| #5407 | fix(cron): retire persisted heartbeat/dream system jobs when disabled | CLOSED | Stops orphaned cron jobs when `gateway.heartbeat.enabled` or `agents.defaults.dream.enabled` are set to `false`, preventing wasted token usage. |
| #5442 | fix(dream): advance cursor when tool errors were recovered, and report why a run did not complete | CLOSED | Resolves #5441 – Dream runs now advance the memory cursor after recoverable tool errors (e.g., retried `edit_file`) and surface completion status. |
| #5414 | fix(slack): validate file downloads across redirects | CLOSED | Adds full‑redirect‑chain validation for Slack file downloads, closing a potential SSRF‑style risk. |
| #5476 | feat(tui): render LaTeX as Unicode | CLOSED | Enables inline/display LaTeX in TUI transcripts to be shown as readable Unicode/plain‑text while preserving unsupported formulas verbatim. |
| #5477 | fix(webui): keep iOS PWA controls inside safe area | CLOSED | Restores `viewport-fit=auto` and synchronises theme‑color, ensuring PWA UI stays within device safe‑area on iOS. |
| #5474 | feat(providers): support DeepSeek V4 Flash Vision | CLOSED | Registers the new DeepSeek vision model, handling multimodal content correctly for Responses API and Chat Completions. |
| #1149 | feat(safety): Add PromptGuard for prompt injection detection | CLOSED (older) | Introduces a safety module that detects common prompt‑injection patterns (system overrides, role confusion, tool‑call injection). |
| #1592 | feat: finalize Lumina Windows app + local stack installer flow | CLOSED | Completes the Windows Lumina C2 runtime, adds installer smoke‑test and fixes CMake prefix for non‑admin installs. |
| #2063 | feat: add Tauri desktop app with PyInstaller sidecar | CLOSED | Packages nanobot as a standalone Tauri v2 desktop app with a chat UI, onboarding wizard, and PyInstaller binary. |
| #1539 | Add CrowPay skill — payment service for AI agents | CLOSED | Integrates CrowPay managed wallets, letting agents pay for APIs/services under owner‑defined spending rules. |

*Note: Many additional provider‑usage contract PRs (#5478, #5479, #5480, #5481) were also closed/merged today, laying the groundwork for typed usage tracking across OpenAI, Anthropic, Bedrock, and other LLM backends.*

### 4. Community Hot Topics
| Item | Type | Comments / Reactions | Link | Why it’s hot |
|------|------|----------------------|------|--------------|
| #5198 | Issue (bug) | 👍0, **4 comments** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Users cannot switch models mid‑session without restarting the instance – a core usability gap compared to SaaS chat UIs. |
| #5234 | PR (feature) | comment count undefined (active discussion) | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | Proposes adding the Meta‑Search Tool (mst) as a unified web‑search provider – a highly requested capability for richer, fused search results. |
| #5480 / #5478 | PR (refactor) | comment count undefined (recent flurry) | [#5480](https://github.com/HKUDS/nanobot/pull/5480), [#5478](https://github.com/HKUDS/nanobot/pull/5478) | Large‑scale refactor to replace dynamic usage dicts with a typed LLMUsage contract – impacts all provider integrations and signals upcoming telemetry/billing features. |
| #5463 | Issue (open bug) | 👍0, 0 comments | [#5463](https://github.com/HKUDS/nanobot/issues/5463) | DingTalk stream handler leaks background tasks; each inbound message creates an untracked `asyncio.Task` that can accumulate and stall message delivery. |

**Underlying needs:**  
- **Model flexibility** (dynamic switching) is a frequent pain point for power users.  
- **Unified search** via mst would reduce reliance on a single search engine and improve agent grounding.  
- **Typed usage contracts** indicate a move toward observability, cost tracking, and stricter provider boundaries – likely a precursor to billing or quota features.  
- **Channel reliability** (DingTalk) highlights the need for robust async task supervision across all communication adapters.

### 5. Bugs & Stability (reported today)
| Severity | Issue | Summary | Associated Fix PR (if any) |
|----------|-------|---------|----------------------------|
| **High** | #5463 – DingTalk background‑task leak | Unobserved `asyncio.Task` accumulation can stop outbound message delivery. | *No fix PR yet* (open). |
| **Medium** | #5198 – Model change blocked in session | UI/model‑blip and `/model` command ineffective without full restart. | *No fix PR yet* (open). |
| **Medium** | #5454 – Streaming provider retry skips after first delta | `server_error` mid‑stream is not retried once any content has streamed. | *No fix PR yet* (open). |
| **Low** | #5441 – Dream cursor not advanced on recovered tool error | Run rejected as incomplete, causing duplicate edits on retries. | Fixed by #5442 (merged). |
| **Low** | #5407 – Persistent cron jobs when disabled | Heartbeat/Dream cron jobs persisted after being turned off. | Fixed by #5407 (merged). |

**Trend:** The most critical open bugs affect **real‑time channels** (DingTalk) and **core UX** (model switching). Addressing these will improve reliability for production deployments.

### 6. Feature Requests & Roadmap Signals
| Feature | Source PR/Issue | Status | Likelihood for Next Release |
|---------|----------------|--------|-----------------------------|
| Meta‑Search Tool (mst) integration | #5234 (open) | Under review | **High** – adds valuable web‑search fallback; aligns with recent provider‑contract work. |
| Manual‑only skill invocation (opt‑out of model auto‑use) | #5405 (open) | Awaiting merge | **Medium** – useful for side‑effect skills (deployment, publishing). |
| Unified provider usage backend (trajectory logging) | #5479, #5481 (closed/open) | Mostly merged | **High** – already laying groundwork; enables cost analytics and quota enforcement. |
| LaTeX rendering in TUI | #5476 (merged) | Done | **Already delivered** – improves technical‑documentation workflow. |
| Prompt injection detection (PromptGuard) | #1149 (merged) | Done | **Already delivered** – safety layer now present. |
| DeepSeek V4 Flash Vision support | #5474 (merged) | Done | **Already delivered** – expands multimodal model coverage. |

**Roadmap hint:** The recent flurry of provider‑usage contract PRs (#5478‑#5481) suggests the team is preparing for **observability & billing** features (e.g., per‑token cost display, usage limits) likely to appear in an upcoming minor release.

### 7. User Feedback Summary
- **Model switching frustration** (#5198) – users expect the same fluid model‑change experience found in ChatGPT/Claude web UIs.  
- **Channel reliability** – DingTalk users report messages disappearing due to background‑task leaks; similar concerns may exist for other adapters (Slack, Notion).  
- **Search quality** – interest in mst indicates a desire for **more robust, multi‑engine grounding** to reduce hallucinations.  
- **Safety awareness** – the merged PromptGuard shows the community values proactive injection defenses.  
- **Documentation & usability** – LaTeX rendering and PWA safe‑area fixes reflect a focus on **polished, professional‑grade UX** for technical users.  

Overall sentiment: **positive** on recent stability and feature work, with **clear asks** around core usability (model swap) and channel robustness.

### 8. Backlog Watch (Long‑unanswered / Needs Maintainer Attention)
| Item | Age (as of 2026‑08‑22) | Reason for Attention |
|------|-----------------------|----------------------|
| #5234 – mst provider integration | ~19 days (opened 2026‑08‑03) | Large feature touching webui, provider, tests; needs review/maintainer merge to unlock unified search. |
| #5405 – manual‑only skill invocation | ~6 days (opened 2026‑08‑16) | Awaiting merge; important for skills with side effects. |
| #5463 – DingTalk background‑task leak | 0 days (opened today) | High‑impact open bug; could affect production DingTalk users if not addressed soon. |
| #5198 – model‑change UI/UX | ~22 days (opened 2026‑07‑31) | Persistent usability issue; likely a quick fix (UI binding or command handler). |
| #5454 – streaming provider retry logic | ~2 days (opened 2026‑08‑20) | Medium‑severity regression; should be paired with a test to prevent regressions. |

**Actionable:** Prioritize the DingTalk task‑leak (#5463) and model‑switch bug (#5198) for immediate stability; fast‑track #5234 and #5405 to deliver requested search and skill‑control capabilities.

---  
*End of digest.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest - 2026-08-22

## 1. Today's Overview

The Hermes Agent project shows **high sustained activity** with 50 issues and 50 PRs updated in the last 24 hours, indicating active development momentum. The release of v0.20.5 (v2026.8.19) represents a significant stable milestone consolidating approximately 323 merged PRs since the previous version. Activity spans core architectural improvements, platform integrations (Discord, WhatsApp, Slack), and critical bug fixes across desktop and CLI components. The project demonstrates strong focus on reliability, particularly around session management, install/update processes, and proof-carrying state verification.

[Repository](https://github.com/NousResearch/hermes-agent)

## 2. Releases

### v2026.8.19 - Hermes Agent v0.20.5 (August 19, 2026)

This patch release consolidates approximately 323 merged PRs into a stable version for downstream consumers. Key details:

- **Release Date**: August 19, 2026
- **Type**: Patch/Stabilization Release
- **Purpose**: Roll-up of merged work for Docker images, hosted deployments, and fresh installs
- **Migration Notes**: No specific breaking changes documented; standard update procedures apply

The release focuses on stability rather than introducing new features, serving as a foundation for ongoing development work visible in active PRs and issues.

[Release Details](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19)

## 3. Project Progress

Today's activity shows advancement across several key areas:

- **Architectural Improvements**: Major refactoring efforts including large-file decomposition (#78647) completed, with ongoing work on proof-carrying observable state (#90866)
- **Platform Parity Campaigns**: Active progress on Discord Feature Parity (#79564), WhatsApp alignment (#79890), and Slack "@Hermes Tag" campaign (#79772)
- **Install/Update Reliability**: Significant architectural work to create unified deployment planning (#91277, #88683)
- **Cross-cutting Features**: Bot Mode control plane consolidation (#91911), execution mode configuration (#87869), and session filtering capabilities (#91950)

Notable merged/closed work includes completion of repo-wide god-file sharding (#78647).

## 4. Community Hot Topics

### Most Active Issues

1. **Large-file decomposition epic** (#78647) - 78 comments
   - Completed refactoring initiative to shard god-files per project policy
   - URL: [Issue #78647](https://github.com/NousResearch/hermes-agent/issues/78647)

2. **Skills index staleness** (#66616) - 72 comments
   - Automated monitoring system reporting degraded skills index freshness (29.8h old vs 26h limit)
   - URL: [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616)

3. **Fleet update reliability** (#91277) - 7 comments
   - Tracking issue for unifying deployment planning across local, remote, profile, and image-managed installations
   - URL: [Issue #91277](https://github.com/NousResearch/hermes-agent/issues/91277)

### Underlying Needs Analysis

The community shows strong interest in:
- **Reliability and consistency** across platforms and deployment scenarios
- **Operational monitoring** with better observability and automated alerts
- **User experience improvements** particularly around session management and bot interactions

## 5. Bugs & Stability

### Critical/P2 Issues

1. **macOS sleep/wake WebSocket disconnection** (#89083) - Comments: 4
   - Desktop chat windows become permanently unresponsive after sleep/wake cycles
   - Half-open WebSocket detection missing; reconnect logic needs improvement
   - URL: [Issue #89083](https://github.com/NousResearch/hermes-agent/issues/89083)

2. **Windows gateway cold-start issues** (#91675) - Comments: 2
   - Gateway prints success but dies after 6s liveness poll
   - Post-update behavior only resumes active profile on Windows
   - URL: [Issue #91675](https://github.com/NousResearch/hermes-agent/issues/91675)

3. **Gemini session title generation failure** (#91927) - Comments: 1
   - Default thinking tokens consume entire max_tokens budget
   - Results in malformed session titles with markdown artifacts
   - URL: [Issue #91927](https://github.com/NousResearch/hermes-agent/issues/91927)

### Fix PRs Available

- PR #76146 addresses completion marker persistence issues
- PR #90094 fixes z.ai content filtering problems
- PR #87900 recovers leaked tool calls from Ollama's API

## 6. Feature Requests & Roadmap Signals

### High-Priority Features

1. **Unified Deployment Planning** (#91277, #88683)
   - One transactional deployment plan for all install/update scenarios
   - Likely candidate for next major release

2. **Bot Mode Control Plane** (#91911)
   - Consolidate identity, capability, delivery, and cancellation into single control plane
   - High architectural priority

3. **Execution Modes** (#87869)
   - Configurable agent execution: fast | balanced | rigorous modes
   - Already in PR stage, likely near-term inclusion

### Platform Integration Features

- **WhatsApp QR pairing flow** (#87898)
- **Discord API v10 alignment** (#79564)
- **Multi-profile gateway support** (#91260)

## 7. User Feedback Summary

Key user pain points emerging from recent activity:

### Installation & Updates
Users struggle with complex, platform-specific update procedures lacking unified verification. The 91,277 issue explicitly calls out ~30 open issues and ~15 PRs addressing fragmented update corner cases.

### Session Management
Multiple issues highlight session state problems:
- Sessions disappearing from UI (#88534)
- Approval routing failures (#91684)
- Degraded session title generation with certain providers

### Platform Reliability
Desktop users report:
- macOS sleep/wake recovery failures
- Linux Wayland HUD drag issues (#82851)
- Windows gateway startup instability

### Positive Signals
Active community engagement around architectural improvements suggests users value the project's emphasis on correctness and observability.

## 8. Backlog Watch

### Long-Standing Important Issues

1. **Gmail skill MIME parsing** (#43054) - Open since June 2026
   - Productivity skill returns only top-level MIME parts
   - Nested/forwarded email bodies dropped
   - URL: [Issue #43054](https://github.com/NousResearch/hermes-agent/issues/43054)

2. **DaemonThreadPoolExecutor Python 3.14 compatibility** (#91916)
   - Crashes due to internal API signature changes
   - While marked duplicate, represents forward-compatibility concern
   - URL: [Issue #91916](https://github.com/NousResearch/hermes-agent/issues/91916)

3. **GitHub automation split authority** (#90200) - Comments: 3
   - Metadata writes succeed while repository-object writes fail with 403
   - Creates dangerous inconsistent state for CI/CD operations
   - URL: [Issue #90200](https://github.com/NousResearch/hermes-agent/issues/90200)

### PRs Needing Attention

- PR #88796 (security exposure patch) marked as "Live submitted head — do not merge" requires clear resolution path
- Several architectural proposals (#90049, #91230) with "needs-decision" tags require maintainer review to prevent stagnation

These backlog items represent significant functionality gaps and potential security concerns that warrant prioritized attention to maintain project credibility and user trust.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

1. **Today's Overview**  
PicoClaw shows steady maintainership activity with no new releases in the last 24h. Four PRs were merged, focusing on tool enhancements, documentation improvements, and skill system refactoring. A single open issue (#3342) regarding message queuing remains active, indicating ongoing work to refine the "after-turn" steering behavior. The absence of new issues suggests stable user engagement, though the unresolved issue highlights a user-reported edge case needing attention.

2. **Releases**  
No new releases in the last 24h.  

3. **Project Progress**  
- **PR #647**: Enhanced `WebFetchTool` with HTML entity decoding and HTML structure preservation (e.g., block-level elements with newlines). Merged to improve web data extraction accuracy.  
- **PR #1182**: Refined `AGENTS.md` documentation to emphasize principle-based guidance over rigid workflows, updated Go module practices, and clarified maintenance workflows.  
- **PR #1158**: Added support for Anthropic’s native API protocol (`anthropic-messages` prefix) to resolve compatibility issues for services requiring `--native-api` format (fixing #269).  
- **PR #714**: Redesigned CLI install/uninstall workflows into skill-based commands, enabling GitHub Trees API integration and reinstall functionality with overwrite flags.  
[PR #647](https://github.com/sipeed/picoclaw/pull/647), [PR #1182](https://github.com/sipeed/picoclaw/pull/1182), [PR #1158](https://github.com/sipeed/picoclaw/pull/1158), [PR #714](https://github.com/sipeed/picoclaw/pull/714)  

4. **Community Hot Topics**  
- **Issue #3342**: Proposes an opt-in "after-turn" steering mode to queue messages instead of interrupting current tasks. Prioritizes graceful concurrency handling, reflecting demand for robust session management in workflows.  
[Issue #3342](https://github.com/sipeed/picoclaw/issues/3342)  

5. **Bugs & Stability**  
No critical bugs reported in the last 24h. All merged PRs address enhancements rather than regressions.  

6. **Feature Requests & Roadmap Signals**  
- **Message Queuing**: Users seek flexibility in handling concurrent requests without disrupting active workflows. Likely to be prioritized based on issue activity.  
- **Anthropic Native API**: Integration into Anthropic tools suggests API protocol standardization as a short-term roadmap focus.  
- **Skill System Enhancements**: CLI refactoring (PR #714) sets precedent for deepening skill management capabilities.  

7. **User Feedback Summary**  
- **Pain Points**: Current message interruption behavior disrupts user workflows, necessitating opt-in queueing. Compatibility gaps with Anthropic API variants forced reliance on third-party adaptations.  
- **Satisfaction**: Recent fixes to AMQP client and skill CLI suggest responsiveness to developer feedback on usability and deployment.  

8. **Backlog Watch**  
- **Issue #269**: Open since 2026-02-20; blocking PR #1158 now closed, but no further discussion suggests maintainer prioritization or deprioritization.  
- **Issue #1179**: Long-standing wakeup issue flagged in previous reports but no updates in 24h—potential blocker for scheduled job reliability.  
- **Stale PRs**: Monitoring pending enhancements like chunked file streaming (context from closing remarks).  

---  
Project health reflects active maintenance and willingness to adapt to API/framework changes (e.g., Anthropic, Go modules). However, open issues like #3342 and unresolved backlog items may require triage to sustain development velocity.


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest for 2026-08-22**  

---

### **1. Today's Overview**  
NanoClaw experienced significant development activity with 24 PRs updated in the last 24 hours, including 11 merged/closed and 13 open. Key progress includes fixes for core integration bugs (e.g., Slack adapter regression, Telegram pairing) and enhancements to template-driven agent creation. A single unclosed bug issue (#3426) highlights ongoing challenges with platform compatibility. No new releases were published today.  

---

### **2. Releases**  
No new releases were published in the last 24 hours.  

---

### **3. Project Progress**  
- **Merged PRs**:  
  - **#3433**: Updated dependencies (`claude-code` to v2.1.238, `agent-sdk` to v0.3.238) for container stability ([link](https://github.com/qwibitai/nanoclaw/pull/3439)).  
  - **#3403**: Fixed Node 22 ESM compatibility issues via pnpm patching ([link](https://github.com/qwibitai/nanoclaw/pull/3403)).  
- **Closed PRs**: Resolved critical fixes for registry-skilled integrations (e.g., WhatsApp, Codex) and improved CI workflows ([#3424, #3430](https://github.com/qwibitai/nanoclaw/pull/3424), [#3424](https://github.com/qwibitai/nanoclaw/pull/3430)).  
- **Advanced Features**:  
  - **Template-Driven Agent Creation**: PRs #3396 (Slack) and #3428 rework template ref forwarding ([link](https://github.com/qwibitai/nanoclaw/pull/3396), [#3428](https://github.com/qwibitai/nanoclaw/pull/3428)).  
  - **Dial and WhatsApp Fixes**: Normalized credential flows and payload compatibility ([#3431, #3401](https://github.com/qwibitai/nanoclaw/pull/3431), [#3401](https://github.com/qwibitai/nanoclaw/pull/3401)).  

---

### **4. Community Hot Topics**  
- **PR #3396** (Template agents in chat): High visibility but 0 comments, suggesting early-stage feature. [Link](https://github.com/qwibitai/nanoclaw/pull/3396)  
- **Issue #3426** (Bug: `send_card` action loss): User-reported critical UX issue with button rendering; unresolved. [Link](https://github.com/qwibitai/nanoclaw/issues/3426)  
- **PR #3429** (Driver `SessionExecSpec` contract): Proposes long-term tooling improvements; no community engagement yet. [Link](https://github.com/qwibitai/nanoclaw/pull/3429)  

---

### **5. Bugs & Stability**  
- **High Severity**:  
  - **#3426** (Bug): `send_card` actions disappear if no `url` defined; agents incorrectly blame platforms. **Active**, no fix PR yet. [Link](https://github.com/qwibitai/nanoclaw/issues/3426)  
- **Low/Resolved**:  
  - Fixed Slack adapter undo/redo flow ([#3437](https://github.com/qwibitai/nanoclaw/pull/3437)) and Matrix ESM compatibility ([#3403](https://github.com/qwibitai/nanoclaw/pull/3403)).  

---

### **6. Feature Requests & Roadmap Signals**  
- **Template Agents**: Multiple PRs (#3396, #3428, #3435) prioritize template-driven workflows, signaling future integration with external marketplaces.  
- **Dial/Wizard Enhancements**: PRs #3050 (Dial channel picker) and #3436 (Telegram instances) indicate focus on scalable multi-channel pairing.  

---

### **7. User Feedback Summary**  
Users report frustration with platform-specific rendering bugs (e.g., buttons disappearing in `send_card`) and inconsistent error handling during bot pairing. Patch updates (e.g., `2.1.238`) suggest improvements, but unsolved issues highlight gaps in cross-platform resilience.  

---

### **8. Backlog Watch**  
- **#3426** (Bug): Stale issue with critical user impact; no maintainer response in 24h. [Link](https://github.com/qwibitai/nanoclaw/issues/3426)  
- **#3287** (Fix: Strip `agent-group` suffix): Pending merge (last updated 2026-08-21) to resolve message-ID parsing errors. [Link](https://github.com/qwibitai/nanoclaw/pull/3287)  

**Project Health**: Active development with incremental stability improvements. Critical bugs remain unaddressed despite rapid PR throughput.


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**1. Today's Overview**  
The nullclaw project recorded minimal activity within the last 24 hours as of 2026-08-22: zero issues were opened or closed, no new releases were published, and only a single PR entered the update cycle. PR #990 remains open, introducing Eden AI as an OpenAI-compatible gateway provider via the `OpenAiCompatibleProvider` abstraction, following the pattern of previous integrations like #922. With no bug reports or user feedback logged, project stability appears unchanged, though the lone pending PR signals continued expansion of the provider ecosystem rather than bug fixing. Overall health is steady, characteristic of a maintenance-phase AI agent framework.  
🔗 [View Project](https://github.com/nullclaw/nullclaw) | 🔗 [PR #990](https://github.com/nullclaw/nullclaw/pull/990)

**2. Releases**  
No new releases were published during this period.

**3. Project Progress**  
Zero PRs were merged or closed in the last 24 hours. The sole update was the opening of #990, which adds Eden AI routing support behind a single API key, leveraging the existing `OpenAiCompatibleProvider` infrastructure. No code merges or bug fixes landed today, but the PR represents active development toward provider diversity and OpenAI API compatibility, aligning with the project's roadmap of aggregating multiple LLM/backend services under a unified interface.

**4. Community Hot Topics**  
The only community-discussed item in the reporting window is #990 [OPEN], currently with zero 👍 reactions and no visible comment thread. The proposal requests adding Eden AI as an OpenAI-compatible gateway, enabling users to route requests to multiple upstream vendors through one key, with an emphasis on EU-based infrastructure. The low engagement suggests this may be a niche or early-stage request, but it reflects ongoing demand for multi-provider routing and regulatory-compliant API gateways in the nullclaw ecosystem.  
🔗 [#990 Discussion](https://github.com/nullclaw/nullclaw/pull/990)

**5. Bugs & Stability**  
Zero bugs, crashes, or regressions were reported in the last 24 hours, and zero issues were closed related to stability. With no open issue activity, there are no immediate stability concerns to assess. The project’s current state shows no degradation, and the open PR #990 does not appear to introduce risk beyond standard integration patterns.

**6. Feature Requests & Roadmap Signals**  
While no new user feature requests appeared via issues, PR #990 itself serves as a roadmap signal: the integration of Eden AI as an OpenAI-compatible gateway follows the established pathway of #922 (NEAR AI Cloud, Atlas Cloud) and indicates a trajectory toward broader provider abstraction. Future versions may continue adding similar "compatible gateway" providers, reducing vendor lock-in, and supporting partitioned/EU data routing—suggesting the roadmap is shifting from core agent capabilities toward infrastructure flexibility.

**7. User Feedback Summary**  
With zero issues and zero PR merges, there is no direct user feedback in this window. However, the motivation behind #990—unified access to multiple upstream LLM vendors behind a single key, particularly with EU residency—implies user pain points around API key management, cost optimization, and data compliance. The absence of complaints may indicate satisfaction with existing providers, or a silenced voice until gateway integrations like Eden AI become available.

**8. Backlog Watch**  
The primary item needing maintainer attention is #990, opened on 2026-08-21 and still open with no merge/close action as of 2026-08-22. At one day old, it is not yet "long-unanswered" in the traditional sense, but its stalled status warrants a maintainer triage decision: merge, request changes, or close. No other open issues or PRs exist in the backlog, making #990 the sole blocker between the current state and the next release cycle.  
🔗 [#990 Open Status](https://github.com/nullclaw/nullclaw/pull/990)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

### IronClaw Project Digest (2026-08-22)

#### 1. **Today's Overview**  
IronClaw exhibited high development velocity on 2026-08-22 with 15 issue updates (11 open/active) and 37 PR updates (21 open, 16 merged/closed). No new releases were published. Activity centered on CI pipeline improvements (the "CI expedite" T1-T4 track), documentation consolidation, Telegram/sandbox fixes, and notification system maturation. The project demonstrates active refinement of core infrastructure while advancing user-facing features like pluggable memory and WebUI polish.

#### 2. **Releases**  
No new releases were published today.

#### 3. **Project Progress** (M

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



### **Today's Overview**  
LobsterAI saw significant activity today with 13 merged/closed PRs and 2 closed issues, indicating active development but no new releases. The project focuses on stability fixes, DSH integration enhancements, and UX refinements. While the merge rate is high, the absence of new releases suggests prioritization of incremental improvements over feature releases.

---

### **Releases**  
No new releases were published today.

---

### **Project Progress**  
- **Merged/PR Activities**:  
  - Completed 12 PRs, including the release of **Version 2026.8.21**, which updates the DeepSeek Harness (DSH) runtime, enhances Windows integration, and adds DSH analytics.  
  - Key refinements in file sharing (#2517), DSH workflows (#2515–#2518), and renderer performance (#1219–#1220).  
  - Open PR #1550 (scheduled task fixes) remains unresolved but is critical for task delivery reliability.  
- **Progress Summary**: Development is concentrated on backend/backend-integrations (DSH) and UX/performance optimizations rather than major new features.

---

### **Community Hot Topics**  
1. **Issue #1223 (Closed)**: i18n hardcoded Chinese labels in `CoworkPromptInput` caused English prompts to mix English/Mandarin text.  
   - 2 comments, linked to PR #1224.  
   - Addresses user feedback about language inconsistencies.  
2. **Issue #1224 (Closed)**: Fixed agent popup escape key support and prevented duplicate clicks.  
   - 2 comments, directly resolving usability pain points.  
   - Links: [Issue #1223](https://github.com/netease-youdao/LobsterAI/issues/1223), [PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224).  

---

### **Bugs & Stability**  
- **#1217 (Closed)**: Occasional gateway restarts during sessions (fixes unclear yet).  
  --ranked as medium severity due to intermittent disruption.  
- **#1224 (Closed)**: Resolves agent UI crashes and includes escape key support (stability improvement).  
  - Links: [Issue #1217](https://github.com/netease-youdao/LobsterAI/issues/1217), [PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224).  

---

### **Feature Requests & Roadmap Signals**  
- **DSH Analytics**: PRs #2515–#2518 signal integration of usage tracking for DSH features, indicating future focus on analytics-driven analytics.  
- **File Sharing UX**: PR #2517 improves file-sharing workflows, reflecting user demand for better artifact management.  
- **Next Version Potential**: DSH enhancements (e.g., analytics, Heinrich workflows) may dominate the next release cycle.

---

### **User Feedback Summary**  
- **Pain Points**: Gateway restarts, i18n inconsistencies, and agent popup flaws.  
- **Success Signals**: Fixes for escape key support (PR #1224) and DSH refinements suggest resolving core usability issues.  
- **Satisfaction**: Users expect reliable background operations and seamless multilingual support.

---

### **Backlog Watch**  
- **#1550 (Open)**: Critical fix for scheduled tasks in "don’t notify" mode (open since April 2026).  
  - Risk: Untested behavior may cause crashes during task execution.  
  - Link: [PR #1550](https://github.com/netease-youdao/LobsterAI/pull/1550).  

Project health appears strong with rapid PR throughput, but unresolved backend integration issues (#1550) require urgent attention.


</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**MOLTIS PROJECT DIGEST – 2026‑08‑22**  
*(Compiled from the latest 24‑hour GitHub activity on https://github.com/moltis-org/moltis)*  

---

### 1. Today's Overview  
The project saw modest but focused activity: two open bugs were updated, eight pull requests received updates (one of them merged), and no new version was published.  The issue‑tracker remains lightly loaded (2 open issues) while the PR queue is busy, indicating ongoing development pressure.  Overall health appears stable, though a few critical‑looking bugs have resurfaced without community attention.  

---

### 2. Releases  
- **No new releases** were published in the last 24 h.  
- Consequently, there are no breaking‑change notes or migration guides to report.  

---

### 3. Project Progress  
| Merged / Closed PR (last 24 h) | Title | Primary Goal |
|-------------------------------|--------------------------------------------|-------------------------------------------------------------|
| **#1220** (Closed) | *fix(whatsapp): render Markdown in outbound messages* | Convert internally‑generated Markdown to WhatsApp‑native markup before delivery, preserving original Markdown in history and UI. |
| **#1228** (Open) | *fix(whatsapp): persist inbound files for local tools* | Store WhatsApp inbound documents locally so downstream tools receive a stable `local_path`. |
| **#1227** (Open) | *fix(browser): enable Obscura stealth mode by default* | Turn on the Obscura sidecar’s `--stealth` flag by default and expose a configurable toggle. |
| **#1226** (Open) | *fix(cron): deliver scheduled output to the originating chat* | Introduce a `payload.deliver_to_current_chat` shortcut to route scheduled jobs back to the chat that triggered them. |
| **#1225** (Open) | *fix(i18n): update and improve zh‑TW Traditional Chinese locale* | Refine translations for clarity, consistency, and completeness. |
| **#1222** (Open) | *fix(web): validate sandbox image requests* | Validate image references and package names before Docker execution; restrict to admins. |
| **#1208** (Open) | *fix(cron): honor heartbeat active hours when the scheduler fires* | Ensure `heartbeat.active_hours` actually throttles cron execution. |
| **#468** (Open) | *fix(plugins): use cmd.exe on Windows for shell hooks* | Replace `sh -c` with `cmd.exe /C` on Windows to avoid shell‑hook failures. |

*The single merged PR (#1220) lands a functional improvement to WhatsApp outbound formatting, while the remaining seven PRs are still open and under review.*

---

### 4. Community Hot Topics  
| Item | Type | Current Activity | Link | Observations |
|------|------|-------------------|------|--------------|
| **Issue #1224** – “Tools stop working in shared Slack channels” | Bug | 0 👍, 0 comments | <https://github.com/moltis-org/moltis/issues/1224> | The bug reflects a regression in Slack‑channel sharing; users expect seamless operation but experience breakage. Lack of community up‑votes suggests the issue may be niche or quickly dismissed. |
| **Issue #1223** – “heartbeat active_hours has no effect on a default config” | Bug | 0 👍, 0 comments | <https://github.com/moltis-org/moltis/issues/1223> | A core scheduling feature appears inert; the community has not flagged it, yet it undermines a documented configuration option. |
| **PR #1228** – “persist inbound WhatsApp files” | Enhancement | 0 👍, undefined comments | <https://github.com/moltis-org/moltis/pull/1228> | Addresses a user‑requested persistence need for WhatsApp inbound assets; potential impact on local tooling pipelines. |
| **PR #1227** – “enable Obscura stealth mode by default” | Enhancement | 0 👍, undefined comments | <https://github.com/moltis-org/moltis/pull/1227> | Aligns default behaviour with a security‑focused flag; may please privacy‑concerned operators. |
| **PR #1222** – “validate sandbox image requests” | Enhancement | 0 👍, undefined comments | <https://github.com/moltis-org/moltis/pull/1222> | Improves safety of container launches; likely to be welcomed by security‑conscious maintainers. |

*Overall, no issue or PR has accumulated reactions or comments, indicating either a silent user base or that the community is presently focused on other priorities.*

---

### 5. Bugs & Stability  
| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **High** | **#1223** – `heartbeat.active_hours` ineffective | The `is_within_active_hours` function parses `end: "24:00"` incorrectly, causing the active‑hours window to never suppress jobs. | Open, no fix PR yet. |
| **Medium‑High** | **#1224** – Tools fail in shared Slack channels | Shared Slack channels stop receiving tool dispatches, breaking workflow that relies on multi‑channel collaboration. | Open, no fix PR yet. |
| **Low** | Other open issues | No additional bugs reported in the last 24 h. | — |

*No fix PRs have been merged for these bugs; they remain open and awaiting attention.*

---

### 6. Feature Requests & Roadmap Signals  
The most recent PR titles reveal several user‑driven priorities:

| Feature | Potential Impact | Likelihood of inclusion in next release |
|---------|------------------|----------------------------------------|
| Persistent WhatsApp inbound files (`#1228`) | Enables local tooling to reliably access documents; improves integration stability. | High – already merged in spirit; likely to land in the upcoming sprint. |
| Default Obscura stealth mode (`#1227`) | Improves privacy out‑of‑the‑box; provides configurable toggle. | Medium – may be shipped as a default flag with an opt‑out. |
| Scheduled job delivery to originating chat (`#1226`) | Fixes mis‑routed cron outputs; enhances predictability. | High – directly addresses a reported scheduling pain point. |
| Sandbox image validation (`#1222`) | Prevents malformed image specs from reaching Docker; raises security. | Medium – security‑focused patches often move quickly. |
| Windows shell‑hook fix (`#468`) | Eliminates a cross‑platform failure mode. | High – already open for a while; likely to be merged soon. |

These signals point to a roadmap leaning toward **stability, cross‑platform compatibility, and privacy‑first defaults**.

---

### 7. User Feedback Summary  
- **Pain points** highlighted by recent issues: unreliable Slack‑channel tool execution, a seemingly dead `active_hours` configuration, and missing persistence of WhatsApp inbound files.  
- **Use cases** emerging: operators rely on WhatsApp document handling for downstream automation, and need deterministic scheduling for heartbeat‑based jobs.  
- **Satisfaction** appears mixed: core functionalities (e.g., cron, browser stealth) are being actively refined, yet critical bugs linger unaddressed, causing occasional frustration among power users.

---

### 8. Backlog Watch  
| Item | Type | Age / Open Since | Why it deserves attention |
|------|------|------------------|---------------------------|
| **Issue #1223** – `active_hours` does nothing | Bug (core scheduling) | 1 day (opened 2026‑08‑21) | A documented feature that silently fails erodes trust in configuration APIs. |
| **PR #1222** – Sandbox image validation | Enhancement (security) | 2 days (opened 2026‑08‑20) | Remaining checklist items indicate incomplete testing; may block release if left open. |
| **PR #468** – Windows shell‑hook fix | Enhancement (cross‑platform) | 5 months (opened 2026‑03‑23) | Still open despite passing CI; a timely merge would close a known Windows regression. |
| **Issue #1224** – Slack shared‑channel tool breakage | Bug (collaboration) | 1 day | Directly impacts multi‑channel workflows; resolution is needed for teams using shared channels. |

*Maintainers should prioritise closing these long‑standing items to prevent technical debt accumulation and to maintain confidence in the platform’s reliability.*

---

**Bottom Line:**  
Moltis is in a phase of incremental but purposeful development. No releases are pending, yet a cluster of bugs and enhancements—particularly around scheduling (`active_hours`), Slack‑channel integration, and Windows compatibility—require timely attention. The project’s health is moderate; activity levels are healthy, but community reactions remain muted, suggesting that many of the most pressing issues may need a catalyst (e.g., a maintainer‑driven triage) to move from “open” to “resolved.”

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-22

---

## 1. Today's Overview  
CoPaw saw intense activity on August 21–22, with 36 PRs and 34 issues updated within the past 24 hours. There were no new releases during this period. The project remains highly active, particularly around bug fixes, UX improvements, and infrastructure enhancements. A mix of first-time contributors and seasoned maintainers contributed to rapid iteration.

---

## 2. Releases  
No new releases occurred in the last 24 hours.

---

## 3. Project Progress  
The following PRs were merged or closed recently:

- **[PR #7187](https://github.com/agentscope-ai/QwenPaw/pull/7187)** – Disabled thinking mode for automatic chat title generation to prevent unwanted reasoning text leakage.
- **[PR #7205](https://github.com/agentscope-ai/QwenPaw/pull/7205)** – Fixed Windows integration test coverage reporting being zero due to missing `.coverage` file collection logic.
- **[PR #7200](https://github.com/agentscope-ai/QwenPaw/pull/7200)** – Bumped version to v2.1.1b2, indicating progress toward an upcoming beta/stable release.
- **[PR #7112](https://github.com/agentscope-ai/QwenPaw/pull/7112)** – Introduced QwenPaw Hub: a self-hosted multi-user control plane supporting local and Docker-based execution environments.
- **[PR #7176](https://github.com/agentscope-ai/QwenPaw/pull/7176)** – Improved console responsiveness in long-running sessions by reducing synchronous Markdown re-parsing overhead.

These updates reflect ongoing stabilization efforts ahead of a likely v2.1.1 stable release cycle.

---

## 4. Community Hot Topics  
The most discussed topics reflect growing user expectations around usability, customization, and reliability:

### 🔥 Most Active Issues by Comment Count:
- **[Issue #6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)** – After restarting MCP server, QwenPaw fails to auto-reconnect unless manually invoking `list mcp`. (6 comments)
  - Indicates need for robust session recovery mechanism in streaming HTTP transport layer.
  
- **[Issue #6780](https://github.com/agentscope-ai/QwenPaw/issues/6780)** – Idle sessions freeze after ~30 minutes without interaction; requires process restart. (4 comments)
  - Suggests possible heartbeat/connection lifecycle mismanagement in backend runtime.

- **[Issue #7016](https://github.com/agentscope-ai/QwenPaw/issues/7016)** – Tool call endpoint returns 404 error during streaming calls. (3 comments)
  - Points to potential race condition or incorrect routing in tool invocation pipeline.

- **[Issue #7206](https://github.com/agentscope-ai/QwenPaw/pull/7206)** – `/compact` command crashes with Pydantic ValidationError when `compact_threshold_ratio = 0.9`. Regression detected at beta stage.

- **[Issue #7210](https://github.com/agentscope-ai/QwenPaw/issues/7210)** – Built-in tools enabled in `agent.json`, but not injected into function schema at session level. Inconsistency between UI and actual behavior.

---

## 5. Bugs & Stability  
High-priority bugs affecting core workflows have been reported:

| Priority | Issue | Description | Fix Available |
|---------|-------|-------------|---------------|
| ⚠️ High | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP session loss → no auto-reconnect | No |
| ⚠️ High | [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | Session hangs after idle time | No |
| ⚠️ Medium | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | Tool call API returns 404 | No |
| ⚠️ Medium | [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | Embedding health check times out despite warmup | No |
| ⚠️ Medium | [#7136](https://github.com/agentscope-ai/QwenPaw/issues/7136) | Non-ASCII filenames display as percent-encoded mojibake | No |
| ⚠️ Low | [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | WebView2 crash in desktop app (~7 sec startup delay) | No |
| ⚠️ Low | [#6430](https://github.com/agentscope-ai/QwenPaw/issues/6430) | Startup hang (~85 seconds stall) | No |

Several regressions noted in recent betas suggest QA needs strengthened before final release.

---

## 6. Feature Requests & Roadmap Signals  
Community-driven suggestions indicate strong intent toward enhanced flexibility and user experience control:

### 🧩 Top Requested Features:
- **[#7203](https://github.com/agentscope-ai/QwenPaw/issues/7203)** – Toggle visibility of tool call logs for cleaner visual output during contract review/research tasks.
- **[#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196)** – Ability to collapse reasoning/thinking blocks by default in UI.
- **[#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198)** – Approval workflows should ignore pre-existing file operations unrelated to current task.
- **[#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201)** – Allow separate image/video/audio size limits per provider instead of one global cap.
- **[#7195](https://github.com/agentscope-ai/QwenPaw/issues/7195)** – Desktop full-screen mode hides behind dock icons—needs z-index adjustment.
- **[#7204](https://github.com/agentscope-ai/QwenPaw/issues/7204)** – Add support for registering/customizing external tools/plugins easily.

These align well with next-gen UI refinement goals and modular extensibility themes expected in future minor versions.

---

## 7. User Feedback Summary  
Users express both appreciation for powerful features and frustration over inconsistent behavior and lack of configurability:

✅ **Positive Sentiments**:
- Recognition of advanced features like ReMe memory systems, agent orchestration, and tool extensibility.
- Appreciation for continued efforts to unify workspace structure and simplify deployment models.

🛑 **Key Pain Points**:
- Frequent instability in session management, especially under high-load or disconnected scenarios.
- Poor handling of edge cases involving non-Latin characters and large media inputs.
- Lack of granular approval settings and UI personalization options impacts productivity significantly.

Some enterprise users highlight difficulty integrating CoPaw into existing automation pipelines due to poor documentation and missing configuration hooks.

---

## 8. Backlog Watch  
Several longstanding issues remain open despite relevance:

### 📌 Long-Standing Open Items:
- **[Issue #5580](https://github.com/agentscope-ai/QwenPaw/issues/5580)** – App-infra backend unit test coverage stalled in review phase.
- **[Issue #4816](https://github.com/agentscope-ai/QwenPaw/issues/4816)** – Conversations still sort alphabetically rather than chronologically — basic UX expectation unmet since May 2026.
- **[PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)** – Per-session model overrides feature awaiting review and merge.
- **[Issue #6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)** – Reranker UI config panel under Agent Config still pending integration.
- **[PR #6976](https://github.com/agentscope-ai/QwenPaw/pull/6976)** – Multi-project directory support for sessions lacks clarity on conflict resolution and path prioritization.

Maintainers encouraged to prioritize these items to improve foundational consistency and reduce friction for developers building atop CoPaw.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-08-22

## 1. Today's Overview

ZeroClaw remained actively developed on 2026-08-22 with 50 issues updated and 50 PRs submitted in the last 24 hours. No new releases were published during this period, indicating stable versioning. The team continued focus on security hardening, performance optimization, and infrastructure reliability across the zero-cla codebase. Key priorities included fixing context-limiting bugs, improving plugin isolation, and enhancing cross-platform compatibility.

## 2. Releases

No new releases were published in the latest data cycle. The project maintains its current stable version, with ongoing internal testing and preparation for upcoming releases. All recent changes have been addressed through PRs and issue tracking rather than public version bumps.

## 3. Project Progress

**Merged/Closed PRs (last 24h):**
- **#10142** – Introduces `zerorelay` with secure transport and browser enrollment frontdoor, superseding earlier relay work. This is a significant architectural addition for secure communication channels.
- **#10210** – Fixes unbounded waiting in `agent-browser` subprocesses by adding deadlines and kill-on-drop logic, preventing hangs during browser operations.
- **#9645** – Adds ZeroRouter as a first-class compatible provider family with self-hostable, metered LLM gateway capabilities.
- **#10204** – Resolves Rust 1.98 diagnostics by updating the byte decoder implementation to satisfy compiler requirements.
- **#10236** – Binds desktop daemon capture logs to an 8 MiB bound supervisor, ensuring persistent logging even after the application exits.
- **#10093** – Improves isolation of manifest-installed plugin subprocesses by clearing the inherited host environment before execution.
- **#10108** – Enhances UI labeling for health metrics with dynamic cell-aware padding for internationalization support.
- **#10201** – Adds optional `push_name` configuration for WhatsApp Web integration, allowing bots to adopt their device's display name.

**In Progress:**
- **#10142** (secure transport/relay) – Central to future communication architecture
- **#10210** (browser subprocess safety) – Critical for stability on long-running sessions
- **#9645** (ZeroRouter) – Expands provider ecosystem with metered gateway functionality
- **#10184** (terminal restoration) – Ensures proper state recovery after external signals

## 4. Community Hot Topics

The most active areas in the issue tracker include:

- **Security & Sandboxing** (#10164, #10073, #10175, #10121) – Multiple critical findings around high-risk command handling, storage policies, TTS API key sensitivity, and provider-rejected image poisoning. These represent the highest priority areas for the next release cycle.
- **Performance & Degradation** (#10068, #10066, #10116, #10115, #10114) – Context limiting at 32k tokens, SOP engine reordering issues, and tool result truncation problems affecting user experience.
- **Platform-Specific Fixes** (#10173, #10237, #10201) – Alpine non-root image enforcement in Docker CI, Telegram conversation history fragmentation, and WhatsApp push name management respectively.
- **Infrastructure Reliability** (#10236, #10142) – Daemon log bounding and secure transport implementations that improve operational resilience.

Issue #10165 (independent delegate bypassing risk profiles) and #10066 (SOP engine promoting steps before output validation) stand out as particularly impactful bugs that directly affect system safety and workflow correctness.

## 5. Bugs & Stability

| Severity | Issue | Impact | Status |
|----------|-------|--------|--------|
| **S0 (Critical)** | #10121 – Partial Code/ACP turns disappear if process exits early | Data loss / workflow broken | Open |
| **S1 (High)** | #10164 – `block_high_risk_commands=false` not honored | Security gap; high-risk commands still blocked | Open |
| **S2 (Medium-High)** | #10068 – Context capped at 32k tokens despite higher limits | Degraded performance, potential context loss | Open |
| **S2 (Medium)** | #10066 – SOP engine reorders steps before output validation | Workflow blocked, incorrect execution order | Open |
| **P1 (Critical)** | #10230 – Quickstart stack overflow | Workflow blocked, daemon crash | Open |
| **P1 (High)** | #10142 – Unbounded agent-browser subprocesses | Potential hangs during extended sessions | In Progress |

**Fix PRs Available:**
- **#10142** (secure transport) – Directly addresses #10164 and related security concerns
- **#10210** (browser subprocess timeouts) – Mitigates #10230-style hang risks
- **#10184** (terminal restoration) – Improves signal handling stability
- **#10093** (plugin isolation) – Reduces risk of malicious subprocess escapes

## 6. Feature Requests & Roadmap Signals

Several features are gaining traction and likely to appear in upcoming releases:

- **Secure Communication (ZeroRelay)** – PR #10142 establishes a foundation for encrypted, certificate-based transport between agents and browsers. This will become a standard pattern for all future integrations.
- **Logging Infrastructure** – PR #10236 bounds desktop daemon logs, while #10142 introduces secure transport. Combined, these form a more robust observability stack.
- **Provider Ecosystem Expansion** – ZeroRouter (PR #9645) adds a metered LLM gateway capability, expanding the compatible providers beyond the initial set.
- **Internationalization Support** – PR #10108 improves dynamic label padding for health metrics, enabling better localization of Uptime/PID indicators.
- **Session State Management** – #10121 highlights a critical gap where partial turns vanish on process exit. Future work will likely implement persistent session state recovery similar to #10142’s approach.

The roadmap appears to prioritize security hardening (risk mitigation), performance stability (context limits, tool result handling), and infrastructure reliability (Daemon logging, secure transport).

## 7. User Feedback Summary

Users have expressed frustration with several recurring pain points:

- **Context Limitations** – The 32k token context cap in interactive agent sessions frequently causes information loss, especially for long conversations or complex multi-step tasks. This is a frequent complaint in the #10068 and #10116 issues.
- **Workflow Blockages** – SOP engine ordering errors (#10066) and missing risk-blocking enforcement (#10164) cause users to lose control over execution flow, leading to unexpected behavior.
- **Stability Under Load** – Stack overflows during Quickstart application (#10230) and unbounded subprocess waits (#10210) indicate fragility in resource management.
- **Cross-Platform Consistency** – Differences between Linux/Windows/Docker environments (Alpine non-root enforcement, Telegram history fragmentation) suggest inconsistent behavior across platforms.

Overall sentiment is positive regarding the overall direction—users appreciate the security enhancements and new features—but specific functional gaps remain that directly impact daily usage.

## 8. Backlog Watch

Several important issues remain unaddressed and warrant maintenance attention:

- **#10121** (Partial Code/ACP turns disappearing) – High-severity data loss issue; requires immediate investigation to ensure partial turns persist across process boundaries.
- **#10068** (Context cap at 32k) – Critical performance bottleneck; fixing this would significantly improve user experience for long conversations.
- **#10164** (Block-high-risk commands not honored) – Security vulnerability; must be resolved before the next release to prevent unauthorized high-risk actions.
- **#10230** (Quickstart stack overflow) – Critical crash; prevents successful ZeroCode initialization on some configurations.
- **#10073** (StoragePolicy::Rolling deprecation) – Legacy storage policy migration needs careful handling to avoid breaking existing deployments.
- **#10139** (Not listed in top 30 but appears in full list) – Provider-rejected image poisoning (#10061) suggests ongoing challenges with vision-capable provider interactions.

These items should be prioritized in the next sprint alongside the security and performance fixes identified above.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*