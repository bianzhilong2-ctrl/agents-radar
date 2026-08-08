# OpenClaw Ecosystem Digest 2026-08-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-08 00:55 UTC

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

**OpenClaw Project Digest – 2026‑08‑08**  

---

### 1. Today's Overview  
OpenClaw showed a mixed but still‑active development pulse today: 500 issue updates and 500 PR updates were recorded in the last 24 h, yet no new releases were published. The bulk of activity revolves around bug‑fixes, memory‑management refinements, and a handful of high‑impact feature proposals. While the repository remains stable enough for daily use, several critical regressions (P0/P1) require immediate attention from maintainers.

---

### 2. Releases  
*No new versioned releases were tagged on 2026‑08‑08.* The latest stable branch (`2026.7.2-beta.7`) remains the point of reference for all ongoing work.

---

### 3. Project Progress – Merged / Closed PRs  
OpenClaw’s merge queue today contains a snapshot of 30 newly opened PRs; none were listed as merged/closed in the provided snapshot. Ongoing PRs are primarily focused on:  

* Documentation fixes for Slack Enterprise Grid routing (`#120087`).  
* CI stability improvements for the embedded run registry (`#120399`).  
* Small‑scale bug‑fixes (e.g., OAuth consent‑envelope handling, Ollama utf‑8 stream sanitisation, tool‑payload pagination).  

When merges do occur they tend to land on **size‑L** or **size‑S** changes that preserve backward compatibility.

---

### 4. Community Hot Topics  

| Item | Type | Comments | Rating | Link | Core Need |
|------|------|----------|--------|------|-----------|
| **#116277** | Bug (P1) – DeepSeek v4 Flash silent reply failure | 129 | 🦞 diamond lobster | [Issue #116277](https://github.com/openclaw/openclaw/issues/116277) | Users experience *silent* model failures, leading to lost conversational context and UX friction. |
| **#116201** | Bug (P1) – Unbounded session‑state resources | 59 | 🦞 diamond lobster | [Issue #116201](https://github.com/openclaw/openclaw/issues/116201) | Real‑time voice pipelines retain unbounded provider/consult state, risking memory blow‑up under bursty traffic. |
| **#7707** | Feature – Memory Trust Tagging by Source | 29 | 🌊 off‑meta tidepool | [Issue #7707](https://github.com/openclaw/openclaw/issues/7707) | Desire for *source‑level trust* to prevent memory‑poisoning attacks from untrusted content. |
| **#115700** | Bug (P1) – “thread switched branches” after model finish | 9 | 🦞 diamond lobster | [Issue #115700](https://github.com/openclaw/openclaw/issues/115700) | Stale `expectedLeafEntryId` causes thread‑branch mismatches after compaction/retry cycles. |
| **#91588** | Bug (P0) – Critical gateway memory leak | 22 | 🦐 gold shrimp | [Issue #91588](https://github.com/openclaw/openclaw/issues/91588) | Memory leak (350 MB → 15.5 GB) forces OOM kills and repeated restart cycles. |

*Why these matter:*  
* High comment counts and “diamond lobster” ratings indicate intense community scrutiny.  
* Issues span **stability** (leak, silent failures), **security** (trust tagging), and **UX** (session‑state mismatches).  
* Underlying consensus: the platform needs tighter resource caps, clearer provenance tracking, and more deterministic error handling.

---

### 5. Bugs & Stability  

| Severity | Issue | Rating | Symptoms | Fix Track (if any) |
|----------|-------|--------|----------|--------------------|
| **P0** | #91588 – Gateway memory leak | 🦐 gold shrimp | RSS grows from 350 MB to 15.5 GB; OOM kills → restart loops | No merge‑ready fix yet; under active discussion. |
| **P1** | #116277 – DeepSeek v4 Flash silent failure | 🦞 diamond lobster | No reply generated; fallback only after timeout | Fixes in PR `#119778` (retryable chat‑send error handling) – still pending review. |
| **P1** | #115700 – `chat.send` “thread switched branches” after model completes | 🦞 diamond lobster | Stale `expectedLeafEntryId` → false branch‑switch error | Fix pending in PR `#116382` (branch‑switch error guard). |
| **P1** | #101290 – SQLite DB corruption on macOS CLI startup | 🦞 diamond lobster | “database disk image is malformed” after repeated `openclaw` commands | No merge‑ready patch; root cause under investigation. |
| **P1** | #98435 – MCP loopback transport not auto‑reconnected after restart | 🐚 platinum hermit | `recovered=1` reported but transport dead; next tool call fails | Fix under review (PR `#119778` includes transport verification). |
| **P2** | #75380 – Unbounded diagnostic JSONL growth | 🦞 diamond lobster | `provider-payload.jsonl` & `cache-trace.jsonl` grow without rotation | No PR yet; community flagged need for rotation policy. |
| **P2** | #87136 – Absolute token thresholds break with varied context windows | 🦞 diamond lobster | Compaction thresholds mis‑fire when switching models (e.g., DeepSeek 1M vs GLM‑5 200K) | Open for discussion; tied to “compaction: absolute token thresholds”. |
| **P2** | #86012 – LINE messages silently lost due to token expiry | 🐚 platinum hermit | No user‑visible failure; messages dropped | Fix pending (PR `#86012` invites live‑repro). |

*Key takeaway:*  The most severe stability concerns are memory leaks and silent model failures, both of which can cause process crashes or data loss. Several PRs are already drafted to mitigate these, but they await maintainer approval.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Issue | Rating | Likely Timeline |
|---------|-------|--------|-----------------|
| **Memory Trust Tagging by Source** – classify memory entries by provenance (user, web, third‑party) to block poisoning attacks. | #7707 | 🌊 off‑meta tidepool | High interest; may appear in a **security‑focused** release. |
| **Tiered Bootstrap File Loading** – load only needed bootstrap files per session to cut token waste. | #22438 | 🌊 off‑meta tidepool | Feature‑complete prototype exists; slated for a **mid‑term** release after performance testing. |
| **Per‑model Usage Logging** – native cost‑tracking per model to aid budgeting. | #13219 | 🦪 silver shellfish | Expected in the next minor version once metrics API stabilises. |
| **Channel‑mediated Approval for MCP Calls** – standardise consent envelopes across MCP tools. | #78308 | 🦞 diamond lobster | Considered a **core‑infrastructure** improvement; probable inclusion in the next major iteration. |
| **Intelligent Session Auto‑Titling** – auto‑generate session titles from topic‑aware LLM slugs. | #99583 | 🌊 off‑meta tidepool | Early‑stage; may be shipped as an **UX** enhancement in a future release. |

**Overall signal:** The community is gravitating toward **security hardening**, **resource awareness**, and **cost‑tracking** as the next set of high‑value improvements.

---

### 7. User Feedback Summary  

* **Silent model failures** (DeepSeek v4, generic fallback) frustrate users who lose conversational continuity without explicit error messages.  
* **Memory‑leak anxiety**: several users report OOM crashes after 2–3 days of normal operation, forcing restarts and breaking workflows.  
* **Resource‑billing surprises** – runaway retry loops have cost users **> $200** in a single incident, highlighting a need for smarter retry‑timeout caps.  
* **Tool‑injection gaps** – MCP schemas are not always propagated to sub‑agents, leading to hidden failures in automation pipelines.  
* **Session‑state confusion** – reuse of stable session IDs after retirement creates “zombie” bindings that cannot be recovered with `/new`.  
* **Credential & transport visibility** – LINE and MCP transports sometimes remain dead after gateway restarts, leaving users unaware of failures.  

Overall sentiment is **cautiously optimistic**: core functionality remains usable, but a handful of stability regressions and security‑oriented features dominate user concerns.

---

### 8. Backlog Watch – Items Needing Maintainer Attention  

| Issue | Age (days) | Why It Matters |
|-------|------------|----------------|
| **#7707 – Memory Trust Tagging** | ~186 | Core security feature; no progress since creation, high comment volume. |
| **#91588 – Gateway memory leak** | ~61 | P0 severity; repeated OOM crashes affect production deployments. |
| **#116277 – DeepSeek v4 silent failure** | ~9 | P1 bug with >100 comments; pending PR `#119778` still under review. |
| **#101290 – SQLite DB corruption on macOS** | ~30 | Causes data loss; regression from previous stable releases. |
| **#115700 – “thread switched branches” error** | ~12 | P1 bug affecting multiple channel types; fix PR pending. |
| **#99551 – Codex worker runaway hardening sprint** | ~38 | Large‑scale reliability effort; requires coordinated PR merges. |

*Recommendation:* Prioritise the **P0/P1** items above, especially #91588 and #116277, and allocate maintainer bandwidth to close the long‑standing feature proposals (#7707, #78308) that address security and usability concerns.

--- 

*All issue and PR references are live on GitHub; click the links for the full discussion threads.*

---

## Cross-Ecosystem Comparison

**1. Ecosystem Overview**  
The personal‑AI‑assistant and agent open‑source ecosystem is highly fragmented, with dozens of independent projects pursuing overlapping goals—chat‑driven agents, multi‑modal assistants, and plug‑in extensible frameworks. Most repositories are actively maintained, delivering frequent bug‑fixes and incremental feature work, while a few are in a stabilisation phase or have stalled. The community size varies dramatically, from tiny hobby‑level forks (≤ 10 issues) to large, enterprise‑grade platforms (hundreds of issues and PRs). Overall, the trend is toward tighter resource management, stronger security hygiene, and more modular, observable architectures.

**2. Activity Comparison**  

| Project | Issues (open/updated) | PRs (open/merged) | New Release (last 24 h) | Health Score* |
|---------|-----------------------|-------------------|--------------------------|----------------|
| **OpenClaw** | ~500 (high‑frequency updates) | ~500 (high‑frequency updates) | No | 6 |
| **NanoBot** | 10 | 21 | No | 7 |
| **Hermes Agent** | 50 | 50 | No | 6 |
| **PicoClaw** | 4 | 14 (12 open, 2 merged) | No | 7 |
| **NanoClaw** | 0 | 10 (8 open, 2 merged) | No | 5 |
| **NullClaw** | 0 | 0 | No | 0 |
| **IronClaw** | 50 | 50 | No | 6 |
| **LobsterAI** | 7 | 7 | No | 6 |
| **TinyClaw** | 0 | 0 | No | 0 |
| **Moltis** | 0 | 0 | No | 0 |
| **CoPaw** | 31 | 49 | Yes (v2.1.0‑beta.2) | 7 |
| **ZeptoClaw** | 0 | 0 | No | 0 |
| **ZeroClaw** | 50 | 50 | No | 7 |

\*Health Score reflects activity intensity, issue/PR turnover, release cadence and severity of open bugs (1 = stagnant, 10 = vibrant, release‑driven development).

**3. OpenClaw’s Position**  

*Advantages*  
- **Largest community footprint** – 500 issues/PRs indicate a broad user base and strong contributor interest.  
- **Depth of stability work** – continuous focus on memory‑management, security patches and critical P0/P1 bugs, which keeps the core usable despite a lack of new releases.  
- **Transparent issue‑to‑PR pipeline** – most open issues are paired with ready‑to‑merge PRs, suggesting an efficient triage process.

*Technical Approach*  
- Emphasises **incremental, backward‑compatible fixes** (size‑L/S PRs) rather than large‑scale refactors.  
- Maintains a **stable beta branch** (`2026.7.2‑beta.7`) for ongoing development, allowing rapid iteration without breaking production deployments.  

*Community Size*  
- OpenClaw’s issue/PR volume far exceeds all peers except CoPaw, Hermes Agent and ZeroClaw, positioning it among the “large‑scale, enterprise‑oriented” segment of the ecosystem.

**4. Shared Technical Focus Areas**  

| Need | Projects Highlighting It |
|------|---------------------------|
| **Resource & Memory Management** (leaks, OOM, token‑usage tracking) | OpenClaw (#91588, #116201), NanoBot (#5266), Hermes Agent (#80280), IronClaw (#5456) |
| **Security & Credential Hygiene** (API‑key leaks, SSRF, auth scopes) | OpenClaw (#91588, #116277), IronClaw (#80847), ZeroClaw (#9386) |
| **Session & State Consistency** (branch mismatches, zombie bindings, auto‑titling) | OpenClaw (#115700, #101290), NanoBot (#5198), CoPaw (#6116) |
| **Cross‑Platform / Provider Integration** (Mattermost, Telegram, WhatsApp, Slack, Discord) | NanoBot, PicoClaw (#3302, #3307), CoPaw (#6782), OpenClaw (#7707, #78308) |
| **Tool Reliability & Idempotence** (audio delivery, tool‑chain truncation, DOOM loops) | OpenClaw (#116277, #115700), Hermes Agent (#79278, #6813), CoPaw (#6116, #6773) |
| **Observability & Cost Transparency** (OTel correlation, token logging) | ZeroClaw (#8933), NanoBot (#5266), OpenClaw (community demand) |
| **Plugin / Extension Ecosystem** (standardised plugin interfaces, MCP support) | Hermes Agent (#64182), CoPaw (#6490), OpenClaw (#7707), PicoClaw (#3302) |
| **Onboarding & UX Polish** (setup wizard, searchable chat, math rendering) | NanoBot (#2909), LobsterAI (#2451), PicoClaw (UI fixes), IronClaw (docs PRs) |

**5. Differentiation Analysis**  

| Dimension | OpenClaw | Hermes Agent | CoPaw | NanoBot | IronClaw |
|-----------|----------|--------------|-------|---------|----------|
| **Primary Audience** | Enterprise / advanced users needing stable, secure agents | Researchers / developers building modular agents | General‑purpose agent platform for product teams | Casual users / lightweight assistants | Enterprise developers requiring robust tool discovery |
| **Feature Emphasis** | Stability, security, resource caps, bug‑fix velocity | Plugin extensibility, API‑first design, modular “god‑file” refactor | Multi‑agent workflows, plugin marketplace, cross‑platform tooling | UI/UX polish, cross‑app messaging (Telegram/WhatsApp), easy onboarding | Schema‑aware tool discovery, cost‑aware tool loading, strong CI/CD |
| **Architectural Style** | Incremental bug‑fixes, large monolithic core with active PR pipeline | Heavy refactoring (god‑file decomposition), explicit plugin contracts | Plugin‑centric, modular services, extensive ACP protocol | Simple, opinionated UI layer, limited internal modularity | Decoupled tool registry, schema‑driven disclosure, clear separation of concerns |
| **Release Cadence** | No new releases (continuous beta) | No releases (continuous beta) | Recent beta release (v2.1.0‑beta.2) | No releases (steady incremental updates) | No releases (continuous beta) |
| **Community Size** | Large (≈ 500 issues/PRs) | Medium‑large (≈ 50) | Medium (≈ 30 issues, 50 PRs) | Small (≈ 10 issues, 21 PRs) | Medium (≈ 50 issues/PRs) |

**6. Community Momentum & Maturity**  

- **Rapidly Iterating** (high issue/PR turnover, active bug‑bash, frequent PR merges): OpenClaw, Hermes Agent, IronClaw, ZeroClaw, CoPaw.  
- **Steady / Stabilising** (moderate activity, fewer critical bugs, focus on UI/UX): NanoBot, PicoClaw, LobsterAI.  
- **Stagnant / Low Activity** (no recent updates, minimal issue/PR count): NanoClaw, NullClaw, TinyClaw, Moltis, ZeptoClaw.  

Projects with the most sustained PR activity (OpenClaw, Hermes, IronClaw, ZeroClaw) appear to be in a “mature‑but‑still‑evolving” state, continuously addressing critical regressions while maintaining a healthy contribution pipeline.

**7. Trend Signals for AI‑Agent Developers**  

1. **Resource‑Centric Engineering** – memory caps, token‑usage logging, and cost‑aware tooling are repeatedly raised (OpenClaw, NanoBot, ZeroClaw, IronClaw).  
2. **Security‑First Mindset** – credential leakage, SSRF, and privilege‑escalation bugs dominate the high‑severity issue list across multiple repos.  
3. **Modular Plugin & MCP Ecosystems** – standardised plugin interfaces (Hermes, CoPaw, OpenClaw) and MCP tool support (PicoClaw, NanoBot, CoPaw) indicate a shift toward reusable, composable agent components.  
4. **Observability & Correlation** – OTel‑style cross‑turn conversation IDs (ZeroClaw) and detailed token‑spend metrics (NanoBot) reflect growing demand for production‑grade monitoring.  
5. **Cross‑Platform Consistency** – users expect uniform behaviour across Telegram, WhatsApp, Slack, Discord, and Mattermost; projects that expose unified APIs or adapters (OpenClaw, NanoBot, CoPaw) are gaining traction.  
6. **Onboarding & UX Simplification** – setup wizards, searchable chat histories, and math‑rendering improvements (LobsterAI, NanoBot) show that reducing friction for new users is a shared priority.  

For AI‑agent developers, the key take‑aways are to prioritize **secure, observable, and resource‑aware architectures**, invest in **modular plugin systems**, and ensure **cross‑platform reliability** while maintaining a **steady cadence of bug‑fix releases** to sustain community confidence.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest - 2026-08-08

## 1. Today's Overview
NanoBot shows robust development activity with 10 open issues and 21 pull requests active in the past 24 hours. The project is actively addressing both stability concerns (bugs in audio delivery, session management) and feature enhancements (Telegram sticker support, workspace isolation). With 11 PRs merged/closed and no new releases, the codebase is in a state of continuous improvement focused on security, reliability, and cross-platform support.

## 2. Releases
**None** - No new releases published today.

## 3. Project Progress
### Merged/Closed PRs Today:
- **#5287** - Fixed channels to preserve global progress defaults (closed)
- **#5268** - Fixed webui staging of out-of-media-root attachments (closed) 
- **#5263** - Hardened Weixin protocol delivery and login (closed)
- **#5284** - Removed legacy session messages route from webui (closed)
- **#5282** - Modernized dependency recovery guidance (closed)
- **#5281** - Fixed webui activity text rendering (closed)
- **#5277** - Expanded model preset editor in webui (closed)
- **#5280** - Archived short idle sessions for Dream (closed)
- **#5272** - Preserved proactive channel delivery during session trimming (closed)

### Open PRs Advancing Development:
- **#5288** - Integrating Agent Plugins with CLI Apps
- **#5291** - Persisting subagent conversation transcripts
- **#5156** - Recovering from stalled Telegram polling
- **#4276** - Model-agnostic computer use and browser tools
- **#5286** - Isolating Matrix thread sessions
- **#5252** - Adding temporary chat mode to webui
- **#5283** - Per-session sandbox isolation for non-WebUI channels
- **#5279** - Storing session history outside agent workspace

## 4. Community Hot Topics
**Most Active Discussion: Issue #5266** - Token consumption logging
- *10 comments* - Users urgently need visibility into massive token burns (millions in 2 hours)
- *Underlying need*: Debugging unexpected API costs and understanding consumption patterns

**Critical Bug: Issue #5149** - WhatsApp audio delivery failure
- *5 comments* - Persistent regression in audio message transmission
- *Impact*: Breaks core messaging functionality on WhatsApp platform

**Security Focus: Issue #5278** - Session history in agent workspace
- *1 comment* - Session files exposed when `restrict_to_workspace` enabled
- *Underlying concern*: Privilege escalation risk through file tool access

**Feature Interest: Issue #5289** - Telegram sticker support
- *0 comments* - Missing basic Telegram functionality
- *Need*: Complete Telegram channel parity with other platforms

## 5. Bugs & Stability
### Critical Priority:
1. **#5149** - WhatsApp audio delivery (regressing functionality)
2. **#5256** - /goal message loop causing repeated replies (user experience degradation)
3. **#5198** - Model switching limitations in sessions (feature gap)

### Medium Priority:
4. **#5290** - Code duplication in JSONL writers (technical debt)
5. **#5276** - Workspace directory sharing conflicts (security/Isensitivity)

### Stability Concerns:
- Multiple PRs addressing session history management (#5272, #5279, #5280)
- Media URL handling fixes (#5264, #5268)
- WebUI route and attachment serving improvements (#5284, #5285)

## 6. Feature Requests & Roadmap Signals
### High-Impact User Requests:
- **Token consumption logging** (#5266) - Critical for cost control
- **Per-session sandbox isolation** (#5283) - Security enhancement
- **Agent plugin integration** (#5288) - Platform unification
- **Subagent transcript persistence** (#5291) - Audit trail capability

### Platform Completeness:
- **Telegram sticker support** (#5289) - Closing feature gaps
- **Model switching UX** (#5198) - User experience improvement
- **Temporary chat mode** (#5252) - Privacy feature

### Technical Enhancements:
- **Computer use + browser tools** (#4276) - Advanced interaction capabilities
- **Atomic JSONL deduplication** (#5290) - Code quality improvement

## 7. User Feedback Summary
**User Pain Points:**
- **Cost opacity**: Users cannot trace why millions of tokens are consumed unexpectedly
- **Platform inconsistencies**: Audio delivery failures, missing Telegram features
- **Session management frustration**: Model switching requires complete reconfiguration
- **Security concerns**: Session files accessible when workspace restrictions enabled

**Use Cases Highlighted:**
- Need for detailed token consumption debugging for cost management
- Requirement for temporary, non-persistent conversations
- Cross-platform consistency demands (WhatsApp audio, Telegram stickers)

**Satisfaction Signals:**
- Strong engagement on security fixes (multiple PRs on session isolation)
- Active development on code quality (JSONL deduplication)
- Proactive WebUI improvements (model editor, temporary chat)

## 8. Backlog Watch
### Critical Unaddressed Issues:
- **#5266** - Token consumption logging: **10 comments unanswered** - High priority for cost management
- **#5149** - WhatsApp audio delivery: **5 comments unanswered** - Core functionality regression
- **#5198** - Model switching limitations: **3 comments unanswered** - UX improvement needed

### Maintenance Required:
- **#5276** - Workspace directory isolation: **2 comments unanswered** - Security hardening
- **#5278** - Session history security: **1 comment unanswered** - Critical privilege escalation risk
- **#5289** - Telegram sticker support: **No comments** - Feature completeness

**Key Attention Needs:**
1. Address token consumption visibility (highest user impact)
2. Resolve WhatsApp audio regression (core functionality)
3. Complete Telegram feature parity (platform consistency)
4. Implement session history security isolation (critical security fix)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest (2026-08-08)  

## 1. Today's Overview  
As of 2026-08-08, Hermes Agent remains in a high-activity development phase, with **50 issues and 50 PRs updated in the past 24 hours**. The repository faces critical challenges in architectural refactoring (e.g., "god file" decomposition) and platform-specific stability. Of note, **45 issues remain open**, including high-severity bugs in session state, memory, and gateway crashes. Despite zero new releases, progress is evident through three merged PRs addressing security, policy compliance, and agent handoff protocols. Community engagement is vigorous, with discussions focused on plugin scalability and cross-platform compatibility.  

---

## 2. Releases  
**No releases** were published in the last 24 hours.  

---

## 3. Project Progress  
Three PRs were merged/closed today, driving stability and foundational improvements:  
- **#80808** ([PR](https://github.com/NousResearch/hermes-agent/pull/80808)): *Closed*  
  Fixed a P2 bug requiring actionable agent handoffs at implementation boundaries to avoid leaving users in ambiguous task states.  
- **#81412** ([PR](https://github.com/NousResearch/hermes-agent/pull/81412)): *Closed*  
  Added policy fallback delegation to local Qwen to address provider-specific policy restrictions.  
- **#80847** ([PR](https://github.com/NousResearch/hermes-agent/pull/80847)): *Closed*  
  Resolved a P2 security vulnerability in `browser_cdp` that bypassed SSRF safeguards via malformed `frame_id` parameters.  

---

## 4. Community Hot Topics  
### Most Active Issues/PRs (by comments/engagement):  
1. **#78647** ([Issue](https://github.com/NousResearch/hermes-agent/issues/78647)):  
   *Epic: Shard all 20 god files — repo-wide god-file decomposition*  
   - **60 comments**, foundational architectural shift.  
   - Core challenge: Restructuring monolithic codebase to align with modular design guidelines.  

2. **#64182** ([Issue](https://github.com/NousResearch/hermes-agent/issues/64182)):  
   *Tracking: Plugin Interface Expansion — community ideas, July 2026*  
   - **30 comments**, roadmap for expanding plugin extensibility.  

3. **#79278** ([Issue](https://github.com/NousResearch/hermes-agent/issues/79278)):  
   *Bug: Context compression drops in-flight tool chains*  
   - **10 comments**, P1 severity, impacts agent safety in non-idempotent actions.  

### Most Controversial PRs:  
- **#81418** ([PR](https://github.com/NousResearch/hermes-agent/pull/81418)):  
  Fixes context-window mismatches for Meta’s Muse Spark models (**"meta-ai provider maps to models.dev ‘meta’ id"**).  
- **#79599** ([PR](https://github.com/NousResearch/hermes-agent/pull/79599)):  
  Enables self-contained desktop installers (**"bundled installers with payloads, channels, eject"**).  

---

## 5. Bugs & Stability  
Ranked by severity (P1 = critical):  
1. **P1: #79278** ([Issue](https://github.com/NousResearch/hermes-agent/issues/79278)):  
   Tool-chain truncation during compression risks unsafe replays. **No fix PR opened yet**.  
2. **P1: #80968** ([Issue](https://github.com/NousResearch/hermes-agent/issues/80968)):  
   Gateway crashes on Windows with `--tui` due to Unicode decoding errors.  
3. **P1: #80280** ([Issue](https://github.com/NousResearch/hermes-agent/issues/80280)):  
   Zombie worker processes survive timeout in Kanban, violating concurrency constraints. **PR #81411** in progress to kill process groups.  
4. **P2: #65365** ([Issue](https://github.com/NousResearch/hermes-agent/issues/65365)):  
   OAuth connections to Claude Pro/Max fail if `memory` or `session_search` tools are enabled (**"HTTP 400: out of extra usage"**).  
5. **P2: #54523** ([Issue](https://github.com/NousResearch/hermes-agent/issues/54523)):  
   macOS Atomic Hermes desktop-gateway conflicts with CLI gateway, blocking session states.  

---

## 6. Feature Requests & Roadmap Signals  
- **#17565** ([Issue](https://github.com/NousResearch/hermes-agent/issues/17565)):  
  *Configurable Temperature Parameter for Model Inference* (**13👍**); likely prioritized for improving output customization.  
- **#18374** ([Issue](https://github.com/NousResearch/hermes-agent/issues/18374)):  
  *Expose full cron prompt via get/include_prompt* (now addressed by PR #81408).  
- **#81419** ([PR](https://github.com/NousResearch/hermes-agent/pull/81419)):  
  *Discover pip-installed providers via entry points* signals a push toward modular plugin ecosystems.  
- **#81405** ([Issue](https://github.com/NousResearch/hermes-agent/issues/81405)):  
  *First-class Teams for persistent multi-profile workflows*; indicates focus on collaboration features.  

---

## 7. User Feedback Summary  
- **Pain Points**:  
  - **Discord UX Issues**: Mismatches between docs and code behavior (#11349), missing `/voice` commands.  
  - **Windows/Platform Stability**: Recurring crashes in TUI gateway (#80968), duplicate startup entries (#80569).  
  - **Security Concerns**: SSRF vulnerabilities in browser tools (#80847), SSH path normalization (#81414).  
- **Positive Signals**:  
  - Community engagement on plugin design (#64182) and temperature configurability (#17565).  

---

## 8. Backlog Watch  
- **#78647** ([Issue](https://github.com/NousResearch/hermes-agent/issues/78647)):  
  Epic for "god file" decomposition — central to long-term scalability. Awaiting maintainer decisions on prioritization.  
- **#65365** ([Issue](https://github.com/NousResearch/hermes-agent/issues/65365)):  
  OAuth/Claude Pro integration requires provider-side fixes from Anthropic, necessitating cross-team liaison.  
- **#54523** ([Issue](https://github.com/NousResearch/hermes-agent/issues/54523)):  
  Remote desktop over Tailscale issues span multiple platforms; maintainers need to triage client-side Electron/Chromium fixes.  

---  
*Project Health: Actively developed but under structural strain from architectural debt and platform-specific bugs.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**Today's Overview**  
PicoClaw shows robust activity on 2026-08-08, with 14 updated PRs (12 open, 2 merged) and 4 open/active issues. Progress is evident in dependency updates, feature enhancements (e.g., audio support, WhatsApp fixes), and performance optimizations like memory leak fixes. Despite no new releases, dependency upgrades (e.g., Telegram, whereby fix support for latest WhatsApp protocols) and model provider updates suggest ongoing behind-the-scenes work to stabilize the codebase.

**Releases**  
No new versions released in the last 24h.

**Project Progress**  
Two PRs were merged today:  
- **PR #3291**: Upgraded GitHub Copilot SDK from `0.2.0` to `1.0.8`, improving compatibility and features ([link](https://github.com/sipeed/picoclaw/pull/3291)).  
- **PR #3271**: Updated default model names across providers (e.g., OpenAI’s `gpt-5.4`/`5.5` to `gpt-5.6-*`) for alignment with provider docs ([link](https://github.com/sipeed/picoclaw/pull/3271)).  
Other merged PRs include bug fixes like preventing LLMs from leaking tool calls ([PR #3279](https://github.com/sipeed/picoclaw/pull/3279)) and API schema corrections for `exec` tool parameters ([PR #3319](https://github.com/sipeed/picoclaw/pull/3319)). Dependency bumps for AWS SDKs and Anthropic client improved stability.

**Community Hot Topics**  
1. **OAuth 2.1 Support for MCP Servers (Issue #3302)**: The top-voted feature request ([link](https://github.com/sipeed/picoclaw/issues/3302)) seeks integration with Microsoft’s ecosystem, with 6 comments. Prioritized via `Nice-to-Have/Enhancement`.  
2. **Concurrency Hazards in Core Components (Issue #3308)**: A critical bug report ([link](https://github.com/sipeed/picoclaw/issues/3308)) addresses goroutine leaks in `SeaHorse` (5 reactions), with urgency emphasized via `[BUG]` tags.  
3. **Telegram Session Switching (Issue #3307)**: A long-standing usability gap ([link](https://github.com/sipeed/picoclaw/issues/3307)) requests UI parity for Telegram session management (3 reactions).  

**Bugs & Stability**  
- **High**: WhatsApp client outdated error (fixed via `go.mau.fi/whatsmeow` upgrade in **PR #3320** but still open for stabilization, [Issue #3320](https://github.com/sipeed/picoclaw/issues/3320)).  
- **Medium**: Concurrency hazards in `SeaHorse` causing memory leaks [PR #3308](https://github.com/sipeed/picoclaw/issues/3308)).  
- **Low**: `exec` tool `timeout` argument ignored in sync mode (fixed in **#3319**).  

**Feature Requests & Roadmap Signals**  
1. **DashScope TTS + WeChat Audio (PR #3270)**: Integrated Alibaba’s Bailian TTS and WeChat audio support—likely final steps in full-sentence audio transactions.  
2. **Payload-Level `timeout`/`background` Flags (PR #3319)**: Enhances tool execution flexibility, aligning with user demands for granular control.  
3. **Fallback Model Chains (PR #3200)**: Modular model pipelines could reduce downtime during provider outages—might appear in 2026 v2.1.  

**User Feedback Summary**  
Users prioritize stability improvements (e.g., concurrency bugs) over superficial features. WhatsApp and Telegram have mixed satisfaction—while WhatsApp’s fixes worked, Telegram’s lack of session management lingers. Security optimizations compact one codebase " Nikolai need Fixing critical **Follows backlink trade-offs, highlighting community desire for performance and enterprise compatibility.  

**Backlog Watch**  
- **Issue #3093** (Stale, Open for 65 Days): Support for SimpleX/Wire/Tox (governance via [Slack governance model](https://github.com/sipeed/picoclaw/issues/3093))—critical for decentralization goals but has zero PRs.  
- **PR #3307** (Stale): Telegram session switching stalls at 3 reviews; requested 45 days ago.  
- **PR #3321** (Open 1day): Prefix caching fix—early-stage but likely high-impact for performance.  

**Project Health**:  
Active development trajectory (14 daily PRs) with balanced focus on bugs (3/4 issues updated) and features. Dependency cycles (2 bumps today) suggest maintenance readiness, though resolved merge gaps in GitHub indicate potential overload. Long-stale issues (#3093) require urgency for maintainer bandwidth.


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑08‑08**

---

### 1. Today’s Overview  
- No issues were updated in the last 24 hours (0 open, 0 closed).  
- Ten pull requests (PRs) received updates: eight remain open, two have been merged/closed.  
- No new releases were published.  
- The repository shows a steady cadence of PR activity, indicating ongoing development rather than a crisis or a lull.  

**GitHub activity log:** https://github.com/qwibitai/nanoclaw/pulls  

---

### 2. Releases  
- **No new releases** were published in the past day (or recently).  

---

### 3. Project Progress  
- **Merged / closed PRs (2):**  
  - **#3197** – *fix(progress)*: improves failure‑state reporting by extracting the first actionable reason from the run‑summary and limiting the displayed message to 38 characters.  
  - **#546** – *Add Mattermost channel skill (/add‑mattermost)*: implements a self‑registering `MattermostChannel` class that conforms to the current `Channel` contract, closing the earlier blocked Mattermost integration effort.  

- **Open PRs advancing features:**  
  - **#3199** – Mattermost channel integration (v2 `ChannelAdapter`).  
  - **#3190** – Tavily MCP tool skill (utility skill).  
  - **#2909** – Setup wizard flow and first‑agent stamping.  
  - **#3145** – DB backfill for missing channel destinations (migration 021).  
  - **#2346** – Formatter fix: unknown slash commands now fall through to `category: 'none'`.  
  - **#3198** – AnyDoc document conversion utility skill.  
  - **#3050** – Adds “Dial” to the channel picker and wizard/skills integration.  
  - **#3196** – Fix/add mount readonly (read‑only mount handling).  

These PRs collectively signal a focus on:  
  * richer messaging platform support (Mattermost, Dial),  
  * improved onboarding (setup wizard, first‑agent stamping),  
  * robustness (DB migrations, error reporting),  
  * extensibility (various utility skills, document conversion).  

---

### 4. Community Hot Topics  
| PR (link) | Status | Core Theme | Why it matters |
|-----------|--------|------------|----------------|
| **[#3199 – Mattermost channel integration](https://github.com/qwibitai/nanoclaw/pull/3199)** | Open | New Mattermost v2 `ChannelAdapter` implementation | Addresses a long‑standing request for a modern Mattermost connector; supersedes the pre‑v2 architecture. |
| **[#3190 – Tavily MCP tool skill](https://github.com/qwibitai/nanoclaw/pull/3190)** | Open | Utility skill for external MCP tool | Expands the ecosystem of standalone tools, aligning with the “utility skill” category. |
| **[#2909 – Setup wizard & first‑agent stamping](https://github.com/qwibitai/nanoclaw/pull/2909)** | Open | Onboarding wizard enhancements | Improves the first‑time user experience, a common friction point reported by early adopters. |
| **[#3145 – DB backfill for destinations](https://github.com/qwibitai/nanoclaw/pull/3145)** | Open | Data migration / bug fix | Fixes a silent data‑loss risk when existing wirings lack destination entries. |
| **[#2346 – Formatter slash‑command handling](https://github.com/qwibitai/nanoclaw/pull/2346)** | Open | Bug fix for command categorisation | Prevents silent dropping of unrecognised slash commands, enhancing reliability. |

These PRs reflect **high community interest** in expanding platform integrations, polishing the onboarding flow, and shoring up data integrity.

---

### 5. Bugs & Stability  
| PR (link) | Issue Type | Severity | Fix Status |
|-----------|------------|----------|------------|
| **[#3145 – DB backfill](https://github.com/qwibitai/nanoclaw/pull/3145)** | Bug (missing destinations) | Medium‑High – could cause data loss or silent failures | **Open** – migration 021 is in progress; no merge yet. |
| **[#3197 – Progress error display](https://github.com/qwibitai/nanoclaw/pull/3197)** | Bug (cryptic failure messages) | Medium – impacts debugging experience | **Closed** – fix implemented and merged. |
| **[#2346 – Formatter slash‑command handling](https://github.com/qwibitai/nanoclaw/pull/2346)** | Bug (incorrect categorisation) | Medium – leads to silent command drops | **Open** – fix pending review. |
| **[#3196 – Mount readonly](https://github.com/qwibitai/nanoclaw/pull/3196)** | Enhancement / bug‑prevention | Low‑Medium – may cause accidental writes | **Open** – early stage. |

Overall, the project maintains a **stable core** with targeted bug‑fixes; no critical crashes or regressions are evident in the last 24 h.

---

### 6. Feature Requests & Roadmap Signals  
- **Mattermost integration (#3199)** – signals strong demand for a first‑class Mattermost connector. Likely to land in the next minor release.  
- **Tavily MCP tool skill (#3190)** – reflects interest in external AI/knowledge‑base tools; may become a default utility skill.  
- **Setup wizard & first‑agent stamping (#2909)** – indicates a focus on smoother onboarding, a known pain point for new users.  
- **AnyDoc document conversion (#3198)** – shows appetite for broader file‑type support, suggesting a roadmap item for richer document handling.  
- **Dial channel picker (#3050)** – points to an evolving channel ecosystem; could lead to a dedicated “channel marketplace” feature.  

These open PRs are **high‑visibility** and likely to be bundled into the upcoming 2026‑Q4 release.

---

### 7. User Feedback Summary  
- **Error clarity:** Users complain that failure messages are too generic (e.g., “执行系统检查失败”). PR #3197 directly addresses this by surfacing the first actionable cause.  
- **Command handling:** Unknown slash commands are silently dropped, causing confusion. PR #2346 resolves this by routing them to a neutral category.  
- **Integration gaps:** The community repeatedly requests a robust Mattermost connector (see #546, #3199). The recent shift to a self‑registering channel pattern shows progress.  
- **Onboarding friction:** The setup wizard (PR #2909) aims to reduce the “how do I start?” uncertainty that new users experience.  
- **Feature breadth:** Requests for additional channel options (Dial) and document conversion (AnyDoc) illustrate a desire for a more versatile, plug‑and‑play environment.

Overall sentiment appears **constructive**: users appreciate rapid bug‑fixes but want richer integrations and clearer diagnostics.

---

### 8. Backlog Watch  
| PR (link) | Age (approx.) | Reason for Watch |
|-----------|----------------|------------------|
| **[#2346 – Formatter slash‑command fix](https://github.com/qwibitai/nanoclaw/pull/2346)** | ~3 months | Long‑standing bug; impact on command handling; needs review before closure. |
| **[#2909 – Setup wizard](https://github.com/qwibitai/nanoclaw/pull/2909)** | ~5 weeks | Core onboarding flow; pending final polishing and merge. |
| **[#3050 – Dial channel picker](https://github.com/qwibitai/nanoclaw/pull/3050)** | ~5 weeks | Feature addition that may depend on other channel‑related work. |
| **[#3145 – DB backfill migration](https://github.com/qwibitai/nanoclaw/pull/3145)** | ~2 weeks | Data integrity fix; risk of breaking existing wirings if not merged promptly. |
| **[#3190 – Tavily MCP skill](https://github.com/qwibitai/nanoclaw/pull/3190)** | ~2 days | Recent activity but still open; may need clarification on skill categorisation. |
| **[#3199 – Mattermost v2 integration](https://github.com/qwibitai/nanoclaw/pull/3199)** | 1 day | High‑impact integration; maintainers should monitor for breaking changes. |

**Action items:**  
- Prioritise review of #2346 and #3145 to unblock data‑related workflows.  
- Follow up on #2909 to ensure the setup wizard is fully tested before the next release.  
- Keep an eye on #3199 for potential ripple effects on the channel‑registry layer.

---

**Conclusion**  
NanoClaw continues its steady evolution with a healthy mix of bug‑fixes, utility‑skill additions, and integration work. The lack of issue churn and the presence of several open, high‑impact PRs suggest a focused development sprint aimed at expanding platform support (Mattermost, Dial), refining the onboarding experience, and strengthening data consistency. Maintainers should keep the longest‑standing PRs under review to ensure timely merges and maintain community confidence.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest  

## **Today's Overview**  
IronClaw remains in active development, balancing urgent bug fixes (e.g., Slack extension activation leaks, Telegram pairing failures) with infrastructural upgrades (e.g., schema-aware deferred tool retrieval). The team is tightening CI/CD guardrails to enforce backward compatibility and expanding documentation verification systems. Stress testing increases focus on built-in tool reliability under load. Despite 50 issues/PRs updated in 24h, the roadmap is advancing through community-driven bug bash initiatives and Epic-driven feature work.  

## **Releases**  
No new versions were released today. The last release (1.0.0-rc.1 / 1.1.0-rc.1) introduced schema-aware deferred tool disclosure as default behavior (PR #6810) and launched the `doc-truth` pipeline prototype. Breaking changes in the form of mandatory `origin_gate_matrix` for tool manifests were identified as documentation gaps (Issue #7317).  

## **Project Progress**  
### **Merged/Closed PRs**  
- **#7131**: Deliver triggered run failures to creators, resolving QA concerns about silent skipped tasks (merged today).  
- **#7372**: Enforced wide-catalog schema-token limits for tool discovery, preventing cost inflation (closed today).  
- **#7157** series: Shipped infrastructure for channel delivery tools, separating run actor identity from shared routes.  

### **In Progress**  
- **Docs**: PR #7375 updates extension API docs to `#tools` manifest format; #7376 implements content-reference gates for `docs/`.  
- **CI/CD**: #7380 will enforce persisted-state compatibility across upgrades via automated state lineage tracking.  
- **Tooling**: #7374 advances bulk tool disclosure via `tool_describe`, reducing model round-trip overhead.  

## **Community Hot Topics**  
### **#7340: Reset to Defaults**  
User-reported regression blocks access to prior model configuration states. Devs are prioritizing a factory-reset workflow for Inference settings (open, 6↑, `p1` severity). [Issue #7340](https://github.com/nearai/ironclaw/issues/7340)  

### **#7292: Tool/Runtime Integration**  
Installed tools (e.g., CoinGecko) fail post-pairing due to heartbeat race conditions in Railway deployments. QA teams recommend rate-limiting runner lease timeouts (open, 2↑, `bug_bash_P1`). [Issue #7292](https://github.com/nearai/ironclaw/issues/7292)  

### **#7383: Tool Disclosure Code Refactor**  
The 4.4k-line `tool_disclosure_port.rs` will be decomposed per architectural guidelines (Issue #7383), addressing maintainability concerns raised during PR #7374 review.  

## **Bugs & Stability**  
### **Critical Regression**  
- **#6476** (Closed): Slack extension activation leaked tenant ID, causing model hallucinations about admin roles. Fixed in v1.1.0-rc.1 via credential scoping.  

### **Active Bugs**  
1. **#7074**: Multi-tool workflows fail post-calendar-data retrieval in QA rail (priority `P1`, 3 comments).  
2. **#7344**: Slack connection shows as ACTIVE but unrecognized by assistant (priority `P1`, 0 comments).  
3. **#7247**: VAT false-positives on GitHub connector status (priority `P1`, 1 comment).  

## **Feature Requests & Roadmap Signals**  
- **Progressive Tool Disclosure**: Demanded in #6810 + #7177 follow-ups, now generalized via schema ranking (Epic v1.2).  
- **Channel Delivery**: Two-lane model launched (PR #7157) for notification routing to WebUI + Slack/Telegram.  
- **Memory Recall**: PR #7365 fixes vanished context between conversations, tied to QA reports in #7185.  

## **User Feedback Summary**  
- **Pain Points**: Configuration immutability (Issue #7340), tool handoff stress (Issue #7298), and memory gaps dominate complaints.  
- **Satisfaction**: Progressive disclosure praised for balancing UX consistency with enterprise scalability (via PR #7372 metrics).  

## **Backlog Watch**  
- **#6989**: Hybrid token estimation bug (update `message.content_ref`) stalled since 2026-08-01.  
- **#5456**: Runner lease timeout criticism (open since 2026-06-30) risks multi-node deployment scalability.  
- **#4874**: WebChat v2 UI crashes over HTTP (open 2026-06-14).  

---  
**Project Health**: Stable under current load but at risk without resolving QA-critical runner expiration bugs (#5456) and Slack pairing regressions.


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑08‑08**  

---

### 1. Today's Overview
LobsterAI shipped a minor patch release **2026.8.7** that adds in‑conversation search to Cowork, improves Markdown/LaTeX math rendering, and tightens Windows installer reliability. The community saw **7 issue updates** and **7 PR updates** in the last 24 h – a modest but steady level of activity, indicating that core stability work is progressing while new feature requests are beginning to surface.

---

### 2. Releases
- **2026.8.7** (latest)  
  *Key changes*  
  - `feat(cowork): add title‑bar conversation search` – searchable chat history from the title bar.  
  - `feat: markdown latex math delimiters` – better rendering of `$…$` and `$$…$$`.  
  - `fix(win‑installer): rescue null watchdog exit` – prevents installer crashes on certain Windows configurations.  

  No breaking changes were documented.

---

### 3. Project Progress
- **Merged / Closed PRs today**  
  - #2451 – Merge of `release/2026.8.5` into `main` (adds Cowork search, math rendering, OpenClaw config improvements).  
  - #2450 – Fix cowork fullscreen toolbar clicks on Windows.  
  - #2448 – Restore chat‑search functionality fixes.  
  - #2445 – Strip plugin‑index‑managed keys from `config.set`.  
  - #2446 – Rescue null watchdog exit code in Windows installer extractor.  

- **Open PR** – #2452 (fix: preserve provider for slashed model IDs).  

These merges show a focus on UI polish, installer robustness, and proper handling of custom OpenAI‑compatible providers.

---

### 4. Community Hot Topics
| Item | Type | Comments / Reactions | Link | Underlying Need |
|------|------|----------------------|------|-----------------|
| #1195 | Bug | 2 comments | <https://github.com/netease-youdao/LobsterAI/issues/1195> | Skills disappear after installation & restart. |
| #1263 | Bug | 2 comments | <https://github.com/netease-youdao/LobsterAI/issues/1263> | Duplicate scheduled‑task UI entries and frequent “API rate limit reached” messages. |
| #1265 | Feature Request | 2 comments | <https://github.com/netease-youdao/LobsterAI/issues/1265> | Ability to bind distinct IM bots / models to separate agents. |
| #1273 | Bug | 2 comments | <https://github.com/netease-youdao/LobsterAI/issues/1273> | `sql.js` memory‑access crash under high‑frequency DB writes. |
| #2443 | Bug | 1 comment | <https://github.com/netease-youdao/LobsterAI/issues/2443> | Provider IDs containing “/” cannot be selected in the UI. |
| #2447 | Bug | 1 comment | <https://github.com/netease-youdao/LobsterAI/issues/2447> | Execution of a prompt returns no output and no error. |
| #2444 | Feature Request | 0 comments (yet) | <https://github.com/netease-youdao/LobsterAI/issues/2444> | Desired “Enter‑default‑newline” editing mode for long prompts. |

**Analysis:** The most discussed topics revolve around *skill persistence*, *multi‑agent model binding*, *DB stability*, and *UI ergonomics* (search, prompt editing). These signal upcoming priorities: reliable skill lifecycle management, clearer multi‑agent isolation, and smoother interaction for power users.

---

### 5. Bugs & Stability
1. **High severity – Core crash**  
   - `#1273` – `sql.js` memory‑out‑of‑bounds error causing application freeze. Fix under review in PR #2452 (preserve provider for slashed IDs) and related stability patches.  
2. **Medium severity – Functional loss**  
   - `#1195` – Custom skills installed to OpenClaw disappear after restart.  
   - `#2447` – Silent execution with no feedback; may be UI thread issue.  
3. **Medium‑Low severity – UI/Config bugs**  
   - `#2443` – Model IDs containing “/” cannot be added as custom providers.  
   - `#1263` – Duplicate scheduled‑task entries and rate‑limit warnings.  

Fixes for the installer (`#2446`) and provider handling (`#2452`) are already merged; the DB‑crash issue is expected to be addressed in the next patch.

---

### 6. Feature Requests & Roadmap Signals
- **Requested:** Input editing mode with configurable newline behaviour (`#2444`).  
- **Completed / Planned:** Title‑bar conversation search (`#2451` merge) – likely to become a permanent Cowork feature.  
- **Signal:** The community is pushing for *per‑agent model/provider isolation* (`#1265`) and *cleaner UI for slash‑laden model IDs* (`#2443`). Both are simple UI changes but may require backend schema adjustments.

---

### 7. User Feedback Summary
- **Pain points:**  
  - Skills installed via OpenClaw are not visually persisted, leading to “ghost” agents.  
  - Long prompts are cumbersome; users want Enter to create new lines by default.  
  - Multi‑agent environments need distinct IM bots and models to avoid cross‑talk confusion.  
- **Satisfaction:** Recent UI polish (search, math rendering) is positively received; most complaints are about stability edge cases rather than missing features.

---

### 8. Backlog Watch
| Issue / PR | Age (days) | Status | Maintainer Attention Needed |
|------------|-----------|--------|------------------------------|
| `#1265` – Multi‑agent binding to distinct IM bots/models | 126 | Open (2 comments) | Prioritise a design spec for per‑agent provider mapping. |
| `#1273` – sql.js crash under high write load | 126 | Open (2 comments) | Allocate effort to a safer `save()` implementation (atomic writes). |
| `#2443` – Provider IDs with “/” not selectable | 2 | Open (1 comment) | Review UI component for model‑ID parsing and validation. |
| `#2447` – Silent execution without error | 1 | Open (1 comment) | Investigate event‑loop handling in the execution pipeline. |

These items have seen limited traction despite repeated updates; assigning a maintainer or triage owner could prevent them from stagnating.

--- 

*All links point to the original GitHub entries for immediate reference.*

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

Looking at this GitHub data for CoPaw, I'll create a structured project digest based on the provided information.

## CoPaw Project Digest - 2026-08-08

### 1. Today's Overview
The CoPaw project shows significant development activity with 31 issues and 49 pull requests updated in the last 24 hours. The project recently released v2.1.0-beta.2 with targeted fixes, indicating active maintenance. Community engagement is high with multiple critical bugs reported across different platforms (Windows, Linux, macOS) and components (providers, plugins, ACP protocol). The project appears to be in a healthy development phase with numerous PRs under review addressing stability and feature gaps.

### 2. Releases
**v2.1.0-beta.2** has been released with two key fixes:
- Fixed fence-aware section extraction in real-behavior-proof scenarios [PR #6653](https://github.com/agentscope-ai/QwenPaw/pull/6653)
- Restored auto snapshots in web workspace bootstrap [PR #6](https://github.com/agentscope-ai/QwenPaw/pull/6)

No breaking changes or migration notes are specified in this release.

### 3. Project Progress
Today saw 22 PRs merged/closed with several notable advancements:
- Web workspace and snapshot functionality improvements
- Console UI file handling and profile rendering fixes
- Shell command execution stabilization
- Chat session management enhancements

Multiple PRs address cross-platform compatibility issues, particularly Windows-related concerns.

### 4. Community Hot Topics
**Most Active Items:**
- **[#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116)** Doom loop bug with 8 comments - Agent repeatedly triggers same tool call
- **[#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)** Docker version marketplace issues with 8 comments - Plugin/application market maintenance mode
- **[#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)** MCP tool reliability problems with 6 comments - Tools become invalid periodically

These discussions reveal user frustrations with core agent reliability, platform-specific marketplace access, and tool stability - fundamental usability concerns.

### 5. Bugs & Stability
**Critical/Major Issues:**
- **[#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116)** Doom loop causing API waste (~6 consecutive repetitions before detection)
- **[#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813)** KeyError: '__aiter__' breaking chat auto-title generation
- **[#6773](https://github.com/agentscope-ai/QwenPaw/issues/6773)** Doom-loop/rubric gates not activating in Linux loop modes (HIGH severity)
- **[#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)** MalwareBytes false positive on Windows desktop version causing installation blocks

**Platform-specific Critical Issues:**
- Windows installation failures due to process locking and file access issues
- Plugin installation failures with module import errors

Fix PRs are in development for several of these issues (#6799, #6776, #6809).

### 6. Feature Requests & Roadmap Signals
**Notable Requests:**
- **[#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490)** Add Volcano Engine Agent Plan and Xiaomi MiMo Standard API providers
- **[#6285](https://github.com/agentscope-ai/QwenPaw/issues/6285)** Support for qwen3.8-max-preview in Aliyun Token Plan
- **[#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770)** Configurable Chrome tab lifetime across response cycles

These suggest upcoming focus on provider expansion, model support updates, and UI/UX customization.

### 7. User Feedback Summary
**Key Pain Points:**
- **Reliability**: Doom loops and tool failures causing resource waste
- **Cross-platform Issues**: Windows installation and plugin problems
- **Marketplace Functionality**: Plugin/app store accessibility problems
- **UI/UX Problems**: Text selection disabled in desktop mode, double-click requirements
- **Configuration Persistence**: Access control whitelists resetting during multica operations

**Satisfaction Indicators**: Mixed - users appreciate features but frustrated by stability issues and platform inconsistencies. Security concerns raised by enterprise users.

### 8. Backlog Watch
**Long-Unanswered Important Items:**
- **[#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619)** "ToolCallBlock" object has no field "extra_content" crash - affects core functionality with agentscope 2.0.4.post1
- **[#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565)** Multi-line command newline conversion causing syntax errors - affects Unix/Linux users broadly
- **[#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683)** Plugin namespace isolation causing module import failures

These represent fundamental infrastructure and cross-platform compatibility issues that impact broad user bases and require maintainer attention despite having potential community contributions addressing them.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-08

---

## 1. Today's Overview  
The ZeroClaw project remains highly active, with **50 issues** and **50 pull requests** updated within the past 24 hours. Of these, **45 issues** are open/active and **5 were closed**, indicating ongoing development momentum. On the PR side, **47 remain open** while **3 have been merged or closed**.

No new releases occurred during this period, suggesting continued focus on refinement rather than version increments. The volume of updates reflects a mature, evolving codebase actively addressing architectural improvements, observability enhancements, security concerns, and bug resolution. Despite no release activity, the depth of discussion around key RFCs and fixes signals strong forward progress.

---

## 2. Releases  
No new releases were published on August 8, 2026.

---

## 3. Project Progress  

### Merged/Closed PRs Today:
While direct data does not list merged PRs explicitly under “Latest Pull Requests,” some entries indicate closure:

- **[PR #9836](https://github.com/zeroclaw-labs/zeroclaw/pull/9836)** – Closed PR titled *"fix(transcription): make local_whisper bearer_token optional"* improves compatibility with whisper.cpp by removing mandatory authentication requirements when none is needed.

Overall, three PRs were marked as merged/closed today, including this fix.

---

## 4. Community Hot Topics  

### 🔥 Top Active Issues by Comment Count:

#### ✅ [Issue #8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) – RFC: Add Cross-Turn Conversation Correlation to OTel Export  
**Comments**: 13 | **Status**: Closed/Accepted  
This RFC proposes enriching OpenTelemetry traces with conversation-level correlation IDs using experimental `gen_ai.conversation.id`. It addresses the observability gap in tracking multi-turn interactions across agent sessions — critical for production-grade monitoring and debugging.

#### 🔄 [Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) – Refactor Providers Architecture & Reqwest Client Management  
**Comments**: 12 | **Status**: Open/Accepted  
A foundational refactor aimed at unifying provider logic and HTTP client handling, reducing duplication and improving maintainability. This signals long-term architectural investment.

#### ⚠️ [Issue #9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) – Bug: Gemini API Key Leaks Into Chat Output  
**Comments**: 4 | **Status**: Closed/Accepted  
Highlights a serious credential exposure vulnerability where API keys embedded in URLs survived sanitization. Prompt attention shows commitment to security hygiene.

These topics reveal community interest in **observability**, **architectural clarity**, and **security robustness**.

---

## 5. Bugs & Stability  

| Severity | Description | Link |
|---------|-------------|------|
| **Critical** | **Gemini API key leak via URL formatting** exposed credentials into chat output. Fixed in [#9836](https://github.com/zeroclaw-labs/zeroclaw/issues/9386). | [Issue #9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) |
| **High** | SOP engine silently drops malformed TOML files; `sop validate` returns false positives. Awaiting triage. | [Issue #9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) |
| **High** | Cost tracking broken for Anthropic provider, leading to inaccurate budget enforcement. | [Issue #9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) |
| **Medium** | Telegram typing indicator runs indefinitely during pending approvals. | [Issue #9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) |

Several high-severity bugs relate to failure diagnostics, cost control, and UI fidelity. Some have accompanying fix PRs (e.g., [#9836](https://github.com/zeroclaw-labs/zeroclaw/pull/9836)), though several remain unresolved.

---

## 6. Feature Requests & Roadmap Signals  

### 🚀 Notable Enhancements Under Review or Acceptance:
- **Agent Plugins Standard Support (#9810)**: Adds support for loading [Agent Plugins](https://agent-plugins.org/) v1.0, enabling richer extensibility through community-developed packages.
- **Web Tool Simplification (#9824)**: Proposes consolidating web tools into simpler primitives (`web_fetch`, `web_research`, `http_request`) to improve usability and reduce redundancy.
- **Herdr Integration (#8337)**: Integrates real-time agent status reporting into terminal workflows via Herdr sidebar support.

These align closely with trends toward **modular toolchains**, **standardized plugin ecosystems**, and **improved UX**.

---

## 7. User Feedback Summary  

Users express both appreciation and frustration depending on subsystem usage:

- **Positive Sentiment**: Appreciation for improved **Telegram integration features** like draft messages and group authorization controls.
- **Frustration Points**:
    - Confusion over silent failures in SOP parsing and cron job updates.
    - Frustration with inaccurate billing due to zero-cost tracking in certain providers.
    - Difficulty distinguishing between deleted vs malformed SOP definitions.

There’s clear demand for better **error messaging**, **cost visibility**, and **documentation accuracy**.

---

## 8. Backlog Watch  

Some older yet impactful items continue to draw attention:

- **[Issue #7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130)** – Restore `#![forbid(unsafe_code)]` globally except for hardware crate. Status: Accepted/In Progress.
- **[Issue #9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770)** – `cron update` silently ignores declarative changes. Status: Accepted. Needs resolution soon given impact on automation pipelines.
- **[Issue #9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780)** – Cron-triggered SOPs lack network capabilities despite marketing claims. Blocks autonomous operation use cases.

These represent systemic gaps that hinder reliability and trust in automated agents — requiring priority maintainer engagement.

--- 

✅ *End of Digest*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*