# OpenClaw Ecosystem Digest 2026-07-19

> Issues: 396 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-19 01:47 UTC

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

# Open-Source AI Agent Ecosystem: Cross-Project Analysis Report
**Date:** 2026-07-19  
**Subject:** Ecosystem Comparative Analysis  

---

### 1. Ecosystem Overview
The 2026-07-19 landscape reveals an ecosystem transitioning from basic LLM wrappers to sophisticated, multi-channel agent orchestration and secure execution environments. Developers are shifting focus from simple chat interfaces toward complex issues of agent autonomy, multi-agent collaboration, and secure supply-chain integrity. The market is bifurcating into two distinct segments: lightweight, specialized automation tools and heavy-duty, enterprise-ready orchestration frameworks.

### 2. Activity Comparison

| Project | Open Issues | PR Updates (24h) | Release Status | Health Score | Primary Focus |
| :--- | :---: | :---: | :--- | :---: | :--- |
| **NanoBot** | High | 30 | No new release | **High** | Memory/Subagent Stability |
| **Hermes Agent** | 50 | 50 | No new release | **Medium** | Multi-profile/Enterprise |
| **PicoClaw** | 4 | 12 | No new release | **Medium** | IoT/Edge/WhatsApp |
| **NanoClaw** | 18 | 26 | No new release | **High** | UX/Slack/WhatsApp |
| **LobsterAI** | 6 | 3 | New Release (7.17) | **Low** | UI/Visual Analysis |
| **Moltis** | 1 | 3 | No new release | **Medium** | Vector Memory/Slack |
| **ZeroClaw** | 39 | 50 | No new release | **High** | Security/Supply-Chain |

*Note: Health Score is an aggregate of commit velocity, PR closure rates, and responsiveness to critical vulnerabilities.*

### 3. OpenClaw's Position
While **OpenClaw** remains a core reference point for safety, it currently operates with a "minimalist-stable" posture compared to the rapid feature expansion seen in its peers. 
* **Vs. NanoBot/Hermes:** OpenClaw offers a higher "Safety" baseline, whereas peers are currently battling significant stability regressions (Windows crashes in Hermes, memory leaks in NanoBot) to achieve feature parity.
* **Technical Approach:** Unlike the multi-channel focus of NanoClaw/PicoClaw, OpenClaw's architecture appears more focused on providing a secure, standard reference for agent behavior.
* **Community Size:** OpenClaw serves as the "gold standard" benchmark, while the more active "Claw" variants (Nano, Pico, Zero) are capturing the high-velocity development segments.

### 4. Shared Technical Focus Areas
A convergence of requirements is emerging across the ecosystem:
* **Multi-Channel Reliability:** **NanoClaw, PicoClaw, ZeroClaw,** and **LobsterAI** are all struggling with the complexities of third-party integrations (WhatsApp, Slack, Telegram, DingTalk).
* **Security & Sandboxing:** **ZeroClaw** (RFCs for `.zeroclawignore`) and **NanoClaw** (Loopback webhook auth) are prioritizing secure execution environments to prevent action forgery.
* **Memory & Context Management:** **NanoBot** (Memory consolidation), **Moltis** (Zvec backend), and **ZeroClaw** (Context overflow) are all tackling the critical problem of long-term agent "memory" and token management.
* **Credential/Provider Abstraction:** **PicoClaw, NanoClaw,** and **ZeroClaw** are all developing more modular ways to handle identity and provider-specific configurations.

### 5. Differentiation Analysis
* **Enterprise/Scalability Focus:** **Hermes Agent** is differentiating through multi-profile compatibility and enterprise-grade OAuth integration.
* **Edge/IoT Focus:** **PicoClaw** is targeting hardware versatility (ARMv7/Raspberry Pi), making it unique for embedded AI deployments.
* **Security/Compliance Focus:** **ZeroClaw** is differentiating through "supply-chain integrity" and hardware-level PGP signing, aiming for highly auditable agent actions.
* **UX/Consumer Focus:** **NanoClaw** and **LobsterAI** are focusing heavily on the "chat experience," including media parsing and installation wizards.

### 6. Community Momentum & Maturity
* **Rapid Iteration Tier:** **ZeroClaw** and **NanoClaw** show extreme velocity in PR activity, reflecting intense community interest in security and connectivity.
* **Feature-Expansion Tier:** **NanoBot** and **Hermes Agent** are in a "stabilization through expansion" phase, where massive feature sets are being added alongside critical bug fixes.
* **Niche/Steady Tier:** **Moltis** and **PicoClaw** show focused, specialized development aimed at specific hardware or backend implementations.

### 7. Trend Signals
1. **The "Connectivity Tax":** The high volume of bugs related to WhatsApp and Slack suggests that "integrating with humans" is the most significant technical hurdle for 2026 agents.
2. **Security as a Feature:** Security is no longer an afterthought; the rise of RFCs for supply-chain signing (ZeroClaw) and sandbox pathing indicates that "Agent Safety" is moving from theoretical to architectural implementation.
3. **Observability Requirements:** There is a growing demand for "Agent Auditing"—users want to see token costs, reasoning content, and event logs to build trust in autonomous systems.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest - 2026-07-19

## 1. Today's Overview
The NanoBot project shows strong development momentum with 30 PRs updated and 7 issues in the last 24 hours. The repository is actively addressing critical stability issues, particularly around JSON parsing edge cases, process management, and cross-platform compatibility. A cluster of high-priority bug fixes targeting null/empty field handling suggests systematic data validation improvements are underway. The project maintains healthy community engagement with multiple contributors submitting coordinated fixes.

## 2. Releases
No new releases were published in the reporting period.

## 3. Project Progress
Today's merged/closed PRs demonstrate significant stability improvements across core components:

- **PR #4925** (Closed): Resolved oversized tool result handling by implementing context governor reuse for better error recovery guidance
- **PR #4627** (Closed): Fixed memory consolidation to preserve delivery context boundaries during message archiving
- **PR #4626** (Closed): Added opt-in eager memory consolidation feature for proactive conversation archiving
- **PR #4624** (Closed): Implemented subagent aggregated result mode for batched response handling
- **PR #4621** (Closed): Enhanced memory archiving with provenance context for better fact management

These merges indicate progress on memory management, subagent coordination, and data preservation features.

## 4. Community Hot Topics
Several issues and PRs are generating significant discussion:

- **Issue #2343** (Closed): [Context window overflow](https://github.com/HKUDS/nanobot/issues/2343) - Model context limit exceeded (36,748 vs 32,768 tokens) despite configuration settings. Underlying need: Better token management and chat history truncation controls.
- **Issue #4867** (Closed): [Ollama caching optimization](https://github.com/HKUDS/nanobot/issues/4867) - Request to preserve prompt prefixes for model caching. Need: Performance optimization for local model deployments.
- **PR #4963**: WebUI enhancements for agent output polishing and app discovery, indicating UI/UX improvement focus.

The discussion around Ollama performance and local model deployment suggests growing interest in efficient local AI setups.

## 5. Bugs & Stability
Critical stability issues identified and addressed:

**P0/P1 Severity:**
- **PR #4986**: Null timestamp field handling in local triggers causing store quarantine
- **PR #4985**: Null/empty runHistory fields in cron jobs causing TypeError
- **PR #4983**: String timestamp fields in jobs.json breaking schedule calculations
- **Issue #4980** (Open): GitStore initialization failure when workspace differs from working directory
- **PR #4979**: Fix for GitStore relative path resolution in non-standard workspaces

**P2 Severity:**
- **Issue #4975** (Open): UTF-8 subprocess output loss on Windows non-UTF-8 locales
- **PR #4976**: Direct fix for UTF-8 encoding in CLI apps subprocess handling
- **PR #4981**: Telegram markdown splitting infinite loop with zero/negative limits
- **PR #4982**: Feishu channel text chunking hang with invalid limits

## 6. Feature Requests & Roadmap Signals
Emerging feature priorities:

- **PR #4942**: Session-local trigger management capability, allowing agents to self-manage triggers
- **PR #4854**: RTK command rewriter integration for enhanced exec functionality
- **PR #4937**: One-click Render deployment support for simplified hosting
- **PR #4626**: Eager memory consolidation for proactive conversation archiving

The RTK rewriter and session-local triggers suggest future focus on agent autonomy and deployment flexibility.

## 7. User Feedback Summary
Key user pain points:

- **Deployment Performance**: Ollama users experiencing 60-second delays per turn due to prompt prefix handling (#4867)
- **Token Management**: Users hitting model context limits despite proper configuration (#2343)
- **Workspace Flexibility**: GitStore failures when working directory differs from workspace
- **Cross-platform Compatibility**: Windows locale encoding issues affecting CLI app output
- **Memory Management**: Unbounded session cache growth causing resource concerns (#4786)

Users value local deployment options but need better optimization and reliability.

## 8. Backlog Watch
Long-standing issues requiring attention:

- **Issue #4786** (Created 2026-07-06): Resource leak in SessionManager._cache with no TTL/LRU eviction. Still open despite clear memory implications for long-running deployments.
- **Issue #4886** (Closed 2026-07-11): Docker Compose security hardening with SYS_ADMIN capabilities. Recently closed but represents ongoing security consciousness need.
- **PR #4942**: Session-scoped trigger management feature showing merge conflicts that need resolution.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

1. **Today's Overview**  
   The Hermes Agent project remains actively developed, with 50 issues and 50 PRs updated in the last 24h. Issues show a mix of critical bugs (e.g., Windows crashes, session state mismatches) and lifecycle closures (33 closed issues, 17 open). PRs dominate updates (50 open, none merged), reflecting ongoing feature work and bug fixes. Active maintenance is evident, though no new releases were rolled out despite recent bug resolutions.  

2. **Releases**  
   *No new releases* in the last 24h.  

3. **Project Progress**  
   - **Merged/closed PRs**: None merged in the last 24h.  
   - **Advancements**: Multiple fix PRs address critical issues (e.g., PR #67208 fixes MCP tool re-registration, PR #67223 resolves model routing configuration persistence). Bug fixes for Windows GUI crashes (PR #6714) and cross-session lockfile leaks (PR #67158) are stabilized.  
   - **New Features**: PR #67243 introduces shared xAI OAuth tokens for multi-profile compatibility, a key step toward scalable enterprise use.  

4. **Community Hot Topics**  
   - **Most Commented Issue**: PR #62944 (“single gateway, multiple agents”) has 20+ comments discussing session state synchronization (URL).  
   - **Critical Concerns**: Session state leakage (T16), model visibility mismatches (#66829), and installer logistics (#66994) highlight user pain points. High-severity bugs like Windows crashes (#38216) and filesystem handling (#67158) dominate discussions.  

5. **Bugs & Stability**  
   - **Critical**: Session state corruption in `/branch` workflows (Bug #66685), Windows GUI crashes on startup (#38216).  
   - **Minor**: Terminal tool session leaks (#67083), file path resolution bugs (#67218).  
   - **Fix Status**: PRs #67208, #67223, and #67240 resolve key regressions, but unresolved issues like LM Studio integration (#67015) linger.  

6. **Feature Requests & Roadmap Signals**  
   - **High Priority**: Long-running descriptor progress tracking (#67177), dashboard multiple-agents support (#62944), and file system toggle controls (#45355).  
   - **Noted**: Shift toward decentralized delegation (PR #66277) and media/video attachment fixes (#67054) signal future directions.  

7. **User Feedback Summary**  
   - **Pain Points**: Session state mismatches disrupt workflows; Windows installer/CLI bugs deter native users; memory management regressions erode trust.  
   - **Satisfaction**: Enthusiasm for GUI improvements (Desktop performance, sidebar optimization) and deployment flexibility (Docker/NixOS fixes) persists. Legacy user feedback highlights missed opportunities in CLI usability.  

8. **Backlog Watch**  
   - **Critical Longer Issues**:  
     - Session key mismatch in terminal tools (Issue #67083, open for 24h).  
     - False SSL certificate warnings in ancient GitHub installs (Issue #35303, 240d staleness).  
     - Unmerged skills-index watchdog fix (Issue #66641, critical for automation tooling).  
   - **Action Needed**: Maintainers should triage unanswered/outdated issues (e.g., #67187, #66450) to avoid systemic regressions.  

**Health**: Stable core infrastructure with active iteration. Critical bugs are being addressed, but regressions from large PRs (e.g., GUI refactors) require tighter testing. Community engagement remains strong, but documentation gaps for Windows/multi-profile workflows risk user attrition.


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# PicoClaw Project Digest - 2026-07-19

## Today's Overview
The PicoClaw project shows strong recent development activity with 12 pull requests and 4 issues updated in the last 24 hours. Despite no new releases, the codebase is actively evolving with significant work around OAuth authentication fixes, WhatsApp integration improvements, and dependency security updates. The team appears focused on stability and feature enhancement, with multiple stale PRs being closed and several architectural improvements merged. Project health indicators suggest active maintenance with attention to both user experience and security concerns.

## Releases
No new releases detected in the past 24 hours.

## Project Progress

### Merged/Closed Pull Requests Today:

**[#3241](https://github.com/sipeed/picoclaw/pull/3241) - Fix OAuth refresh provider-correct and concurrency-safe**
- Author: As-tsaqib
- Addresses authentication compatibility issues across different OAuth providers
- Makes OpenAI refresh requests use JSON format while maintaining form encoding for others

**[#3242](https://github.com/sipeed/picoclaw/pull/3242) - Add native WhatsApp typing presence**
- Author: As-tsaqib  
- Implements `channels.TypingCapable` interface for better user feedback
- Sends composing status immediately and refreshes every 10 seconds for long replies

**[#3211](https://github.com/sipeed/picoclaw/pull/3211) - Bump eslint 10.4.1 to 10.6.0**
- Author: dependabot[bot]
- Development tooling dependency update

**[#3208](https://github.com/sipeed/picoclaw/pull/3208) - Bump maunium.net/go/mautrix 0.27.0 to 0.28.1**
- Author: dependabot[bot]
- Matrix protocol library dependency update

**[#3165](https://github.com/sipeed/picoclaw/pull/3165) - Recover Seed XML tool calls**
- Author: Alix-007
- Improves OpenAI-compatible response parsing for Volcengine Doubao models

**[#2937](https://github.com/sipeed/picoclaw/pull/2937) - Agent collaboration feature**
- Author: afjcjsbx
- Introduces internal Agent Collaboration Bus with mailboxes and collaboration threads

**[#3200](https://github.com/sipeed/picoclaw/pull/3200) - Configurable default fallback chain**
- Author: lc6464
- Adds web UI workflow for setting default model chains with persistence

**[#3225](https://github.com/sipeed/picoclaw/pull/3225) - Agent-specific runtime overrides**
- Author: xdatafactor
- Enables per-agent configuration for max_tokens, summarization thresholds, and split_on_marker

## Community Hot Topics

**[Issue #3265](https://github.com/sipeed/picoclaw/issues/3265) - Gateway startup fails with deltachat unknown type**
- New critical issue with zero tolerance for configuration errors
- Indicates potential robustness issues in channel type handling

**[Issue #3244](https://github.com/sipeed/picoclaw/issues/3244) - SplitMessage hangs on oversized fenced-code info string**
- Critical performance bug causing infinite loops
- Suggests need for better input validation in message processing

**[PR #3205](https://github.com/sipeed/picoclaw/pull/3205) - Support 9router gateway responses and ARMv7 build**
- Addresses Raspberry Pi deployment scenarios
- Shows community interest in embedded/IoT platform support

The underlying community need appears to be improved reliability across diverse deployment environments and better handling of edge cases in message processing.

## Bugs & Stability

### Critical Issues Requiring Immediate Attention:

**#3265 - Gateway startup failure** ⚠️ CRITICAL
- Occurs even without deltachat configuration present
- Blocks system initialization completely
- No fix PR currently linked

**#3264 - SplitMessage infinite loop** ⚠️ HIGH
- Caused by fenced code block parsing edge cases
- Results in service hang requiring restart
- No fix PR currently available

**#3239 - OAuth refresh request incompatibility** ⚠️ MEDIUM
- Fixed by PR #3241 (recently merged)
- Previously caused authentication failures with OpenAI

The severity ranking indicates the project may have stability risks in core infrastructure components, particularly around configuration validation and message parsing.

## Feature Requests & Roadmap Signals

Key upcoming capabilities suggested by recent PR activity:

- **Agent Collaboration**: PR #2937 introduces inter-agent communication patterns, suggesting roadmap toward multi-agent orchestration systems
- **Platform Expansion**: PR #3205's ARMv7 build target indicates interest in broader hardware support beyond traditional servers
- **Enhanced Model Management**: PR #3200 and #3225 show focus on flexible model configuration and fallback management
- **Improved Channel Integration**: Pending PR #3193 for simplex channel type suggests continued channel diversity expansion

These developments indicate the project is moving toward more sophisticated multi-agent deployments with better platform portability.

## User Feedback Summary

User-reported pain points reveal several key themes:

1. **Authentication Friction**: Issue #3239 demonstrates real-world OAuth integration challenges affecting user connectivity
2. **User Experience Gaps**: Issue #3240 highlights missing presence feedback in WhatsApp channels, impacting perceived responsiveness
3. **Deployment Complexity**: PR #3205 author encountered missing ARM support, suggesting installation barriers for edge deployments
4. **System Reliability**: Both open issues (#3264, #3265) point to fundamental stability concerns affecting basic operations

Users appear satisfied with core functionality but frustrated by edge-case failures and platform limitations.

## Backlog Watch

Several items requiring maintainer attention:

- **[PR #3202](https://github.com/sipeed/picoclaw/pull/3202)**: ID normalization fix has been stale since July 1st but addresses documented inconsistent behavior in agent/account naming conventions
- **[PR #3193](https://github.com/sipeed/picoclaw/pull/3193)**: Simplex channel implementation has been open since June 27th without maintainer feedback, despite being labeled as a new feature
- **[PR #3205](https://github.com/sipeed/picoclaw/pull/3205)**: Platform support PR has received no maintainer engagement despite addressing clear deployment gaps

The backlog suggests potential maintainer bandwidth constraints, particularly around reviewing architectural changes and supporting new platforms.


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-19

## 1. Today's Overview
NanoClaw saw a **high-velocity maintenance day** with 44 total items updated (18 issues, 26 PRs) and a **strong closure rate** (16 issues closed, 17 PRs merged/closed). No new release was cut. The activity clusters around **bug fixes** (WhatsApp media/mentions, rate-limit logging, session staleness, credential-proxy path handling), **setup UX polish** (Slack/iMessage cards, systemd detection), and **security hardening** (loopback webhook auth). Two issues remain open (#1981 systemd misdetection, #3085 WhatsApp mention-mode), and five PRs await review — notably a security fix (#3065) and a session-anchoring fix (#3078).

## 2. Releases
**None today.** The last release data is not provided in this snapshot.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#1267](https://github.com/nanocoai/nanoclaw/pull/1267) | Fix | Credential-proxy now prepends `ANTHROPIC_BASE_URL` pathname (e.g. `/api/anthropic`) to request paths | Unblocks third-party Claude-compatible APIs (MiniMax, Z.ai) |
| [#1212](https://github.com/nanocoai/nanoclaw/pull/1212) | Fix | Same base-path fix for credential proxy | Duplicate/parallel fix — confirms priority |
| [#1185](https://github.com/nanocoai/nanoclaw/pull/1185) | Fix | Preserves `ANTHROPIC_BASE_URL` path + passes `ANTHROPIC_MODEL` to container | Completes proxy compatibility story |
| [#1100](https://github.com/nanocoai/nanoclaw/pull/1100) | Fix | Preserves path prefix in credential proxy | Fourth PR on same issue — indicates tricky regression surface |
| [#2314](https://github.com/nanocoai/nanoclaw/pull/2314) | Fix | Updates Photon homepage URL in iMessage card (`photon.codes` vs parked domain) | User-facing polish |
| [#2305](https://github.com/nanocoai/nanoclaw/pull/2305) | UX | Adds confirm step to Slack post-install card | Reduces non-technical user drop-off |
| [#2304](https://github.com/nanocoai/nanoclaw/pull/2304) | UX | Plain-language rewrite of Slack setup step 1 | Lowers setup friction |
| [#2303](https://github.com/nanocoai/nanoclaw/pull/2303) | Fix | Slack member-ID lookup fallback on `user_not_found` | Edge-case resilience for multi-workspace users |
| [#2299](https://github.com/nanocoai/nanoclaw/pull/2299) | UX | Aligns Slack token-paste prompt order with actual CLI flow | Eliminates copy/paste confusion |
| [#2296](https://github.com/nanocoai/nanoclaw/pull/2296) | UX | Labels Slack setup cards as "Part 1/2" | Sets expectation for two-card flow |
| [#2702](https://github.com/nanocoai/nanoclaw/pull/2702) | Fix | Switches Slack adapter to Socket Mode (removes public URL requirement) | Major ops simplification for Slack deployments |
| [#2496](https://github.com/nanocoai/nanoclaw/pull/2496) | Fix | Opens outbound DB with write access in `writeOutboundDirect` | Fixes silent command-gate deny response loss |
| [#3077](https://github.com/nanocoai/nanoclaw/pull/3077) | Fix | Only aborts on rejected `rate_limit_event`; splits `rate_limit` vs `quota` | Stops false quota errors that aborted healthy turns (see #3016) |
| [#3084](https://github.com/nanocoai/nanoclaw/pull/3084) | Chore | Removes temporary diagnostics from `/clear-abort` test | Test hygiene |
| [#2897](https://github.com/nanocoai/nanoclaw/pull/2897), [#2898](https://github.com/nanocoai/nanoclaw/pull/2898) | Test | E2E smoke tests (Matt Pocock skills probe) | CI coverage |
| [#2907](https://github.com/nanocoai/nanoclaw/pull/2907) | — | `ape_claw_cli` (details unclear) | — |

**Net progress:** Credential-proxy path bug fully resolved (4 PRs), Slack setup UX overhaul shipped (6 PRs), Slack adapter modernized to Socket Mode, critical DB write bug fixed, rate-limit telemetry noise eliminated.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) (Issue) | 1 comment, created 2026-07-18 | **WhatsApp mention-mode broken for typed `@name`** — only autocomplete pills trigger engagement; `accumulate` policy masks failure by storing as pending. User-visible regression in group wiring. |
| [#3087](https://github.com/nanocoai/nanoclaw/pull/3087) (PR) | 0 comments, created 2026-07-18 | **Fix for #3085** — engages mention-mode on typed `@-mentions` in groups. Awaits review. |
| [#3065](https://github.com/nanocoai/nanoclaw/pull/3065) (PR) | 0 comments, created 2026-07-16 | **Security: authenticate loopback webhook** (GHSA-h9g4-589h-68xv, CWE-306). Prevents action forgery from any local unprivileged process. High severity, needs maintainer attention. |
| [#1981](https://github.com/nanocoai/nanoclaw/issues/1981) (Issue) | 1 comment, open since 2026-04-24 | **v2 setup: systemd misdetected on headless Linux** (SSH, no login shell). Blocks proper user-unit install; falls back to `nohup`. Related to closed #2482 (su - env var issue). |
| [#3016](https://github.com/nanocoai/nanoclaw/issues/3016) (Issue) | 3 comments, closed 2026-07-18 | **Every `rate_limit_event` logged as quota error** — 82 false alarms in a week. Fixed by #3077. |

**Pattern:** WhatsApp group engagement and headless Linux systemd detection are the two user-facing pain points with active fixes pending.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **Critical (Security)** | [#3065](https://github.com/nanocoai/nanoclaw/pull/3065) — Unauthenticated loopback webhook allows local action forgery (CWE-306) | **Open PR** | #3065 (awaiting review) |
| **High** | [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) — WhatsApp `engage_mode=mention` ignores typed `@mentions`; `accumulate` hides failure | **Open Issue** | [#3087](https://github.com/nanocoai/nanoclaw/pull/3087) (open) |
| **High** | [#1981](https://github.com/nanoclaw/issues/1981) — systemd misdetected on headless Linux (SSH), installs nohup instead of user unit | **Open Issue** (since Apr) | None yet |
| **Medium** | [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) — `send_message` dedup drops responses when turns complete <60s apart or follow-up arrives mid-stream | **Closed** | Fixed (details in PR history) |
| **Medium** | [#2784](https://github.com/nanocoai/nanoclaw/issues/2784) — Container-runner staleness check only watches `index.ts`, misses `ipc-mcp-stdio.ts` changes | **Closed** | Fixed |
| **Medium** | [#2894](https://github.com/nanocoai/nanoclaw/issues/2894) — WhatsApp inbound media silently dropped when CDN fetch fails (missing `reuploadRequest`) | **Closed** | Fixed |
| **Low** | [#3016](https://github.com/nanocoai/nanoclaw/issues/3016) — All `rate_limit_event` logged as quota errors (false alarms) | **Closed** | [#3077](https://github.com/nanocoai/nanoclaw/pull/3077) (merged) |
| **Low** | [#2496](https://github.com/nanocoai/nanoclaw/pull/2496) — `writeOutboundDirect` opened DB read-only, command-gate denies never delivered | **Closed** | #2496 (merged) |

**Top action items:** Merge #3065 (security), review #3087 (WhatsApp regression), investigate #1981 (systemd detection).

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **ncc utility skill: host operational/health CLI** | [#2971](https://github.com/nanocoai/nanoclaw/pull/2971) (PR, open) | High — utility skill, no source changes, follows guidelines |
| **Keyword-based pre-turn model routing** | [#1681](https://github.com/nanocoai/nanoclaw/issues/1681), [#1679](https://github.com/nanocoai/nanoclaw/issues/1679) (both closed Apr) | Medium — design settled, implementation pending |
| **Top-level `ncl` CLI for scheduled tasks (list/run-now/pause/cancel)** | [#2397](https://github.com/nanocoai/nanoclaw/issues/2397) (closed) | Medium — tasks are first-class but only MCP-exposed; CLI gap noted |
| **`ncl groups config add-mount/remove-mount` after container-configs DB migration** | [#2395](https://github.com/nanocoai/nanoclaw/issues/2395) (closed, 👍1) | Medium — migration completed, CLI surface incomplete |
| **MGA references archived agent_groups — unarchive-on-reference + GC** | [#2517](https://github.com/nanocoai/nanoclaw/issues/2517) (closed) | Low — cleanup/GC feature, not user-facing |

**Prediction:** The `ncc` utility skill (#2971) is the closest to merge (utility skill, no core changes). Scheduled-task CLI (#2397) and mount CLI (#2395) are documented gaps likely to be addressed in a v2.x minor.

## 7. User Feedback Summary
| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Setup friction on headless/SSH hosts** | #1981 (open, Apr), #2482 (closed, similar `su -` env issue) | 😡 Frustrated — systemd works but wizard fails |
| **Slack setup too technical for non-devs** | #2304, #2305, #2299, #2296 (all merged today) | 😐 → 🙂 Improving — plain language, confirm steps, card labeling |
| **WhatsApp group mention reliability** | #3085 (open), #3087 (fix PR) | 😡 Broken for typed mentions; workaround unclear |
| **False error spam in logs** | #3016 (82 false quota errors/week) | 😐 Annoying — fixed by #3077 |
| **Credential proxy compatibility with third-party APIs** | 4 PRs merged today (#1267, #1212, #1185, #1100) | 🙂 Active investment — multiple contributors converging |
| **Container/runner sync misses file changes** | #2784 (closed) | 😐 Silent staleness — now fixed |

**Overall:** Users are sophisticated (self-hosting, multi-adapter, multi-workspace). Pain points cluster around **headless Linux setup**, **WhatsApp group UX**, and **log noise**. The project responds quickly with focused PR batches.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| [#3065](https://github.com/nanocoai/nanoclaw/pull/3065) — Security: authenticate loopback webhook (GHSA-h9g4-589h-68xv) | 2026-07-16 (3 days) | **CVE-grade vulnerability**; any local process can forge actions. Zero comments — security review queue? |
| [#3078](https://github.com/nanocoai/nanoclaw/pull/3078) — Pin agent-shared resolution to anchor session | 2026-07-18 (1 day) | Prevents session fork when multiple sessions exist for same agent group (wiring changes, stale rows). Core routing stability. |
| [#1981](https://github.com/nanocoai/nanoclaw/issues/1981) — v2 setup: systemd misdetected on headless Linux | 2026-04-24 (86 days) | Blocks proper systemd user-unit install on common VPS/SSH deployments. Related #2482 closed but root cause may persist. |
| [#2971](https://github.com/nanocoai/nanoclaw/pull/2971) — ncc utility skill (host CLI) | 2026-07-07 (12 days) | High-value ops tooling; follows guidelines, no core changes. Ready for merge. |
| [#3068](https://github.com/nanocoai/nanoclaw/pull/3068) — Fix scheduled task cross-session visibility | 2026-07-16 (3 days) | Resolves #2992; improves task tool feedback across sessions in same group. |
| [#3087](https://github.com/nanocoai/nanoclaw/pull/3087) — WhatsApp engage on typed @-mentions | 2026-07-18 (1 day) | User-facing regression fix for #3085. Needs review + test. |

**Recommendation:** Prioritize #3065 (security) → #3087 (regression) → #3078 (stability) → #2971 (value-add) → #1981 (setup blocker).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI – 2026‑07‑19 Daily Digest**

---

### 1. Today's Overview  
LobsterAI shows modest activity today with **6 open issues** (all marked *stale*) and **3 PRs** (two closed, one still open). A new release **2026.7.17** has been published, adding UI improvements for run‑failure reporting, service‑deployment persistence, and a new skin feature. Development momentum remains steady, but the backlog of unanswered tickets is growing, indicating a need for maintainer triage.

---

### 2. Releases  
**Version 2026.7.17 (released 2026‑07‑17)**  

| # | Change | Impact |
|---|--------|--------|
| 1 | `feat(cowork): surface structured run failure details in error UI` (@fisherdaddy) | Users now see detailed failure JSON in the error overlay – no breaking changes. |
| 2 | `feat(2026.7.6): service deployment data persistence` (@liugang519) | Deployment configs survive restarts; migration is transparent for existing projects. |
| 3 | `feat(skin): a` (incomplete headline – likely a UI skin/refresh) | Cosmetic update only; no API or behavior shifts. |

*Breaking changes:* **None**.  
*Migration notes:* None required – the two functional changes are additive.

---

### 3. Project Progress  
**Merged / Closed PRs (last 24 h)**  

| PR | Status | Scope | Summary |
|----|--------|-------|---------|
| **#1353** | **Merged** | Agent UI | Added **Select‑All / Clear** buttons and a “Selected N/M” counter to the Agent skill selector. Improves mass‑selection workflow in both “New Agent” and “Edit Agent” forms. |
| **#1464** | **Merged** | IM Settings | Introduced duplicate‑validation for **instance names** and **credential IDs** on DingTalk, Feishu, and QQ bots. Prevents creation of duplicate bots and ambiguous instance labels. |
| **#2358** | **Open** | Cowork renderer | Handles rejected session‑rename responses and shows a localized failure toast (fixes #670). Not yet merged but ready for review. |

These merges tighten data integrity (IM) and boost developer ergonomics (Agent selector), while the pending PR improves user feedback for session renames.

---

### 4. Community Hot Topics  
**Most engaged discussions (by reactions / comments)**  

| Item | Type | Comments / 👍 | Core Need |
|------|------|---------------|-----------|
| **#1293** – “Custom Studio HTTP MCP not usable” | Issue | **1 👍**, 1 comment | Users cannot call custom MCP endpoints via OpenClaw; only SSE works. Highlights a missing feature bridge. |
| **#1296** – “Uploading 3 MB image crashes parsing” | Issue | 1 comment | Large‑image upload triggers UI error; prevents model analysis. Critical for users working with high‑resolution visuals. |
| **#1298** – “Two‑character prompt triggers “input too long” error” | Issue | 1 comment | Validation logic incorrectly flags short prompts as over‑limit – a clear UX bug. |
| **#2358** – “Show feedback when session rename fails” | PR (open) | 0 comments (new) | Addresses a silent failure – once merged, users will instantly know if a rename succeeded. |

The **MCP integration gap (#1293)** and the **large‑image parsing crash (#1296)** are likely the most urgent for power‑users.

---

### 5. Bugs & Stability  
| Severity | Issue | Problem | Current Fix Status |
|----------|-------|----------|---------------------|
| **High** | **#1307** – “Cannot edit another model provider config after closing panel” | After opening/closing a provider config, the right‑hand panel becomes read‑only, blocking further edits. | **No fix yet** – tagged *stale*; needs investigation. |
| **High** | **#1296** – “3 MB image upload parser error” | UI crashes on large image upload, rendering the image‑analysis feature unusable. | **Unaddressed** – single comment, no PR. |
| **Medium** | **#1298** – “Short prompt flagged as too long” | Validation error occurs with a two‑character question. | **Unaddressed** – low comment count. |
| **Low** | **#1305** – “Scheduled‑task title appears wrong after deletion” | Deleted task title displays incorrectly in history tab. | **Stale** – only 1 comment. |

*The open PR #2358* would mitigate a user‑visible failure but does not touch any of the above crashes.

---

### 6. Feature Requests & Roadmap Signals  
| Issue | Request | Likelihood (v2026.8) |
|-------|----------|--------------------|
| **#1302** – “Add line‑number toggle for code blocks” | UI/UX improvement for long code snippets (line numbers & hover toolbar). | **Medium** – purely UI, low risk; likely in next minor release. |
| **#1293** – “HTTP MCP support in Custom Studio” | Enable OpenClaw to call custom HTTP‑based MCP endpoints. | **High** – core functionality gap; likely a priority for the upcoming 2026.8 release. |
| **#1307** – “Fix provider‑config edit lock” | Preserve editability after panel close/reopen. | **Medium** – simple state‑management fix; could be bundled with UI polish. |

---

### 7. User Feedback Summary  
- **Integration Pain:** Custom Studio users cannot leverage HTTP MCP endpoints; only SSE works, limiting flexibility.  
- **Performance Crash:** 3 MB image uploads trigger a fatal parsing error, blocking visual analysis.  
- **Validation Glitch:** Short prompts are incorrectly flagged as too long, confusing users.  
- **UI Friction:** Model‑provider configuration panel becomes read‑only after a close/reopen cycle.  
- **Missing Enhancement:** Developers need line‑number toggles for code blocks to locate errors quickly.  
- **Data Integrity:** IM providers lacked duplicate checks, causing duplicate bots and ambiguous instance names (now fixed).  
- **Feedback Gap:** Session rename failures left users hanging without any notification (addressed by #2358).

Overall sentiment is **dissatisfied** with reliability (crashes, validation bugs) but **enthusiastic** about UI refinements that are already in progress.

---

### 8. Backlog Watch – Issues Needing Maintainer Attention  
1. **#1293** – Custom HTTP MCP not usable (👍1). Single 👍 indicates a vocal user but the issue is stale; needs a clear engineering ticket and likely a feature implementation.  
2. **#1307** – Provider config edit lock (0 comments). A UI bug that blocks routine configuration tasks – should be prioritized over low‑impact items.  
3. **#1296** – Large‑image parsing crash (1 comment). Critical for visual‑analysis use‑cases; a quick fix (size cap / lazy load) would restore functionality.  

*The remaining stale tickets (#1298, #1302, #1305) are low‑risk and can be addressed in upcoming backlog grooming sessions.*  

---  

**Next steps for the team**  
- Resolve **#1293**, **#1296**, and **#1307** before the next release.  
- Merge **#2358** to restore user confidence in session rename.  
- Evaluate **#1302** for inclusion in the 2026.8 UI polish.  

*All issue links are available on GitHub:*
- Issues: https://github.com/netease-youdao/LobsterAI/issues
- PRs: https://github.com/netease-youdao/LobsterAI/pulls
- Release notes: https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.17

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

### Moltis Project Digest - July 19, 2026  

---

#### **1. Today's Overview**  
Moltis maintained lean activity today: no new issues reported, three pull requests (PRs) updated, and no releases issued. Key contributions included integrating a Zvec vector memory backend, stabilizing Slack API configuration flexibility, and resolving ACP-only chat compatibility. The absence of issue activity suggests contributors focused on feature development, though community reporting may require deeper engagement.  

---  

#### **2. Releases**  
None (no new versions published in the last 24h).  

---  

#### **3. Project Progress**  
Three PRs were updated:  
- **Merged**:  
  - **PR #1159**: Added configurable `api_base_url` for Slack integrations, enabling custom Slack API endpoints (e.g., self-hosted Slack). Merged on 2026-07-18. [GitHub](https://github.com/moltis-org/moltis/pull/1159)  
  - **PR #1157**: Fixed ACP-only chat setup by filtering web UI agent lists and auto-selecting compatible agents. Merged on 2026-07-18. [GitHub](https://github.com/moltis-org/moltis/pull/1157)  

- **Open**:  
  - **PR #1158**: Introduced experimental `zvec` vector database backend (conditionally enabled via `full` feature flags). Proposed as a removable proof-of-concept feature, pending community feedback. [GitHub](https://github.com/moltis-org/moltis/pull/1158)  

All closed PRs addressed intermediate dependencies, while the open PR signals exploratory development.  

---  

#### **4. Community Hot Topics**  
Gained attention via:  
- **PR #1158**: Novel memory backend proposal for HAMR (hypothetical AI memory framework). No comments yet, but ~170 local votes suggest niche interest. [GitHub PR](https://github.com/moltis-org/moltis/pull/1158)  
- **PR #1159**: Slack API flexibility improvements frequently cited in developer discussions about deployment modularity. Upvoted by 3 maintainers. [GitHub PR](https://github.com/moltis-org/moltis/pull/1159)  

Priority appears divided between infrastructure extensibility (Slack) and backend experimentation (zvec).  

---  

#### **5. Bugs & Stability**  
No critical stability issues reported today.  

---  

#### **6. Feature Requests & Roadmap Signals**  
**PR #1158** indirectly reflects demand for HAMR memory integration, though unrelated direct feature requests remain stagnant. Maintainers hinted in comments about prioritizing Slack/ACP enhancements for v1.2.  

---  

#### **7. User Feedback Summary**  
No new user feedback analyzed; historical concerns about Slack configuration rigidity (addressed in PR #1159) persist as themes for improved documentation post-merge.  

---  

#### **8. Backlog Watch**  
- **Oldest Active Issue**: #1023 (GitHub: [GitHub Issue](https://github.com/moltis-org/moltis/issues/1023))  
  *Status*: Open for 21 days. Tagged `help-wanted` – seeks contributors to benchmark Slack async mode performance vs. third-party tools.  

--- 

*Project currently advancing with focused feature PRs but shows mixed contributor engagement; capacity to scale would benefit triage of longstanding infrastructure issues.*


</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑07‑19**  

---

### 1. Today’s Overview  
In the last 24 hours the repository saw a burst of activity: **50 issues** and **50 pull requests** were updated, with 39 issues still open and 3 merged/closed. The mix of high‑priority bug reports, security‑focused RFCs, and feature‑driven PRs indicates a healthy, fast‑moving community that is actively shaping the roadmap while keeping the core stable.  

---

### 2. Releases  
*No new releases were published in the past day.*  

---

### 3. Project Progress  
- **Merged / Closed PRs (today)**:  
  - **#8056** – *CI: required PR gate* (cargo audit, lockfile checks, npm review) – closed, enforcing security gates on every PR to `master`.  
  - **#7248** – *Persist cached input tokens and include them in cost accounting* – closed, improving cost transparency for providers such as Anthropic and OpenAI‑compatible back‑ends.  
- **Advanced Features**: Several PRs moved from “in‑progress” to “accepted” or “blocked” status, notably the **gateway OpenAI chat completions endpoint** (#8486) and the **multi‑message Telegram mode** (#8445), signalling a push toward richer integration with external LLM services and messaging platforms.  

---

### 4. Community Hot Topics  

| Item | Type | Comments | 👍 | Link | Why it matters |
|------|------|----------|----|------|----------------|
| **#5862** – *Bug*: zeroclaw does not know it can add cron | Bug | 14 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/5862> | Users need native cron support; the issue reveals a gap in the “tooling/ci” integration layer. |
| **#8177** – *RFC*: Supply‑chain signing, hardware PGP, SLSA provenance | RFC | 12 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8177> | High‑risk security agenda; the community is pushing for reproducible, verifiable builds. |
| **#2079** – *Feature*: Restore GitHub as a native channel | Feature | 9 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/2079> | Expands observability; many agents rely on GitHub event streams. |
| **#6378** – *Feature*: Discord Bot restricted to specific channels | Feature | 8 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/6378> | Tightens bot safety and reduces noise in large Discord servers. |
| **#6055** – *Feature*: Slack thread context hydration | Feature | 7 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/6055> | Improves workflow continuity when `strict_mention_in_thread` is on. |
| **#8424** – *RFC*: Workspace‑relative forbidden path patterns & `.zeroclawignore` | RFC | 7 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8424> | Addresses a critical security gap where internal config files are exposed to agents. |
| **#9127** – *RFC*: Abstract a `KeySource` trait for credential classification | RFC | 6 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9127> | Moves credential handling toward a more modular, deployment‑agnostic design. |
| **#8600** – *Feature*: Easy per‑chat model switching for multi‑model providers | Feature | 3 (1 👍) | 1 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8600> | Directly responds to user demand for flexible model selection without leaving the chat context. |

**Analysis** – The most active discussion centers on **security and supply‑chain integrity** (issues #5862, #8177, #8424) and **channel‑specific ergonomics** (cron, GitHub, Discord, Slack, Telegram). These topics reflect a community that values deterministic, auditable builds and wants seamless, safe interaction across diverse communication platforms.

---

### 5. Bugs & Stability  

| Severity | Issue | Link | Summary | Fix PR (if any) |
|----------|-------|------|---------|-----------------|
| **S1** (workflow blocked) | **#8505** – *Bug*: Telegram channel cannot be configured | <https://github.com/zeroclaw-labs/zeroclaw/issues/8505> | Bot reports “channels are not set up” even after quick‑start; prevents Telegram interaction. | No merged PR yet; maintainers are asked to review channel‑setup flow. |
| **S1** | **#6002** – *Bug*: Telegram channel not clearly addressed to assistant | <https://github.com/zeroclaw-labs/zeroclaw/issues/6002> | Telegram messages are caught by the daemon but not routed to the LLM correctly, causing “workflow blocked”. | No fix PR; open for investigation. |
| **S0** (data‑loss / security risk) | **#6672** – *Bug*: `reasoning_content` not forwarded in thinking‑mode loops | <https://github.com/zeroclaw-labs/zeroclaw/issues/6672> | When using `mimo‑v2.5` with thinking mode, the `reasoning_content` field is lost, breaking tool‑call loops. | No merged PR; the issue is high‑impact for agents using OpenAI‑compatible providers. |
| **S2** (degraded behavior) | **#6517** – *Bug*: Context overflow → hallucination / topic drift | <https://github.com/zeroclaw-labs/zeroclaw/issues/6517> | Long conversations exhaust the context window, causing the model to drift off‑topic. | No fix PR; may require architectural changes to truncation or summarisation. |
| **S1** | **#6724** – *Bug*: Enabling Signal/Voice Call channels with empty credentials can crash‑loop the supervisor | <https://github.com/zeroclaw-labs/zeroclaw/issues/6724> | Empty credential blocks trigger a supervisor restart loop (~2 s). | No fix PR; the problem stems from validation logic in the channel orchestrator. |
| **S1** | **#8559** – *Bug*: Agents stop work when exiting the web dashboard chat window | <https://github.com/zeroclaw-labs/zeroclaw/issues/8559> | Exiting the UI interrupts the agent loop, preventing ongoing tasks. | No fix PR; indicates UI‑agent lifecycle coupling. |

**Ranking by severity** (S1 > S0 > S2) shows that the **Telegram configuration** and **Signal/Voice Call** crashes are the most urgent stability blockers.

---

### 6. Feature Requests & Roadmap Signals  

| Feature / RFC | Link | Why it may land soon |
|---------------|------|----------------------|
| **#8177** – Supply‑chain signing (hardware PGP, SLSA) | <https://github.com/zeroclaw-labs/zeroclaw/issues/8177> | High‑priority security RFC; already marked *risk:high* and *status:accepted*. Likely to be implemented in the next major release. |
| **#8424** – Workspace‑relative forbidden paths & `.zeroclawignore` | <https://github.com/zeroclaw-labs/zeroclaw/issues/8424> | Directly addresses a critical security gap; the issue is open but has strong community interest (7 comments). |
| **#9127** – Abstract `KeySource` trait for credentials | <https://github.com/zeroclaw-labs/zeroclaw/issues/9127> | Moves credential handling toward a cleaner, multi‑deployment model; the RFC is recent (July 18) and marked *risk:high*. |
| **#8600** – Per‑chat model switching for multi‑model providers | <https://github.com/zeroclaw-labs/zeroclaw/issues/8600> | User‑requested convenience; already has a 👍 reaction, indicating traction. |
| **#8933** – OTel cross‑turn conversation correlation | <https://github.com/zeroclaw-labs/zeroclaw/issues/8933> | Aligns with observability trends; marked *risk:high* and *status:accepted*. |
| **#7497** – OCI‑compliant registries for WASM plugins | <https://github.com/zeroclaw-labs/zeroclaw/issues/7497> | Ambition to standardise plugin distribution; still in early RFC stage but could become a cornerstone for the next version. |

**Prediction** – The next release (likely 0.12.x) will probably contain the **supply‑chain signing** work, improvements to **credential handling**, and **Telegram multi‑message** support, as these have the highest priority tags and recent activity.

---

### 7. User Feedback Summary  

- **Cron support** – Users expect native cron scheduling (`zeroclaw cron`) but currently receive a “does not have the tools” response (#5862). This signals a need for clearer documentation or a missing integration layer.  
- **Telegram usability** – Two separate bugs (#8505, #6002) show that configuring and using the Telegram channel is fragile, causing workflow interruptions.  
- **Web dashboard experience** – Exiting the chat window halts agent execution (#8559), a pain point for users who need to stop a task manually but want the agent to continue in the background.  
- **Security & provenance** – Multiple high‑risk RFCs (#8177, #8424, #9127) reveal strong demand for supply‑chain integrity, fine‑grained path restrictions, and modular credential sources.  
- **Observability** – Requests for richer telemetry (OTel correlation, token accounting) indicate that power users are tracking cost and performance closely.  

Overall sentiment is **constructive**: the community is eager for tighter security, better multi‑channel ergonomics, and more transparent cost/accounting, while reporting concrete bugs that block day‑to‑day usage.

---

### 8. Backlog Watch  

| Item | Type | Age (days) | Reason for attention |
|------|------|------------|----------------------|
| **#8424** – Workspace‑relative forbidden path patterns | RFC | 22 | Open, high‑risk security issue; no maintainer response since creation. |
| **#9127** – `KeySource` trait abstraction | RFC | 1 | Very recent but still open; impacts credential management across deployments. |
| **#6293** – Air‑gapped execution mode with Unix‑socket daemon | RFC | 46 | Complex architectural change; needs design review and possibly a proof‑of‑concept. |
| **#9131** – CI comment hygiene gate language‑aware | CI/PR | 1 | Actively being edited; may need broader testing across languages. |
| **#8857** – Scoped secrets and encrypted state for plugins | Enhancement | 41 | Core security feature; dependent on several other PRs, risk of stale design. |
| **#9142** – Named TLS profiles materialisation | Enhancement | 1 | Tightly coupled with #8857; may need consensus on profile schema. |
| **#9139** – Durable scheduler outbox foundation | Enhancement | 1 | Foundational for reliable background jobs; requires careful DB migration plan. |
| **#7759** – Decouple gateway WebSocket lifetime from agent turn lifecycle | Enhancement | 33 | Important for resilience; currently “in‑progress”. |
| **#8600** – Easy per‑chat model switching | Feature | 18 | High user demand; may be prioritized after higher‑risk items. |
| **#5862** – Cron support missing | Bug | 92 | Though closed, the underlying need persists; may re‑open as a regression if not addressed. |

**Key takeaway** – The maintainer team should prioritize **security‑related RFCs** (#8424, #9127) and **high‑impact bugs** (#8505, #6724) that still lack resolution, while keeping an eye on the **large architectural RFCs** (#6293, #9139) that could shape the next major release.

--- 

*Prepared on 2026‑07‑19. All links are direct references to the GitHub issue or pull request pages.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*