# OpenClaw Ecosystem Digest 2026-08-18

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-18 00:40 UTC

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

### 1. **Today's Overview**  
OpenClaw saw exceptionally high activity today, with 500 open/active issues and 500 PRs updated in the last 24h, indicating intense maintenance and development efforts. Key priorities included addressing critical stability issues (e.g., CPU overloads, message loss, and authentication failures) and resolving UX friction points. No new releases were published today, suggesting a focus on incremental improvements over a major release.

---

### 2. **Releases**  
No new versions were released in the last 24h. This aligns with recent trends where stability and bug fixes take precedence over new feature releases, especially given the high volume of open issues requiring urgent attention.

---

### 3. **Project Progress**  
Today saw significant progress on high-impact PRs, including fixes for ```62505``` (automation regression), ```78493``` (sudo update ownership issues), and ```80396``` (media handling in fenced code blocks). Multiple PRs addressed compatibility and security upgrades in dependencies and codex integrations. While many PRs remain open, several critical bugs (e.g., ```91009```, ```68596```) have fix PRs in progress or under maintainer review.

---

### 4. **Community Hot Topics**  
- **#77598** (23👍): Developer tracking agent behavior over 24h. Focuses on observability for dev agents.  
  [Issue Link](https://github.com/openclaw/openclaw/issues/77598)  
- **#91009** (20👍): Codex tool misuse causing CPU overloads. A platinum hermit severity bug.  
  [Issue Link](https://github.com/openclaw/openclaw/issues/91009)  
- **#68596** (15👍): Streaming watchdog timeouts in long reasoning.  
  [Issue Link](https://github.com/openclaw/openclaw/issues/68596)  
These threads highlight demand for reliability improvements, especially around model-tool integrations and resource management.

---

### 5. **Bugs & Stability**  
Critical bugs reported today include:  
- **#91009** (P1, 🦚 platinum hermit): CPU-blocking Codex Native Hooks.  
- **#62505** (P2, 🦞 diamond lobster): Automation and code agent regression.  
- **#78493** (P1, 🦚 platinum hermit): Mixed file ownership after sudo update.  
Fixes exist for some (e.g., PRs for ```78493```), but others remain open, posing regression risks. Plugin-related memory leaks (e.g., ```97616```) also require urgent resolution.

---

### 6. **Feature Requests & Roadmap Signals**  
High-priority requests include:  
- **Per-agent dreaming/config** (`PR 67413`) for memory control.  
- **MathJax/LaTeX support** (`PR 42840`) for scientific use cases.  
- **Multi-index embedding memory** (`PR 63990`) for reliable fallback.  
These align with roadmap signals toward advanced memory management and enhanced UX for technical workflows.

---

### 7. **User Feedback Summary**  
Users report pain points like session state inconsistency, OAuth token failures (`86215`), and lost messages in WhatsApp Discord integrations (`50093`). UX friction points (e.g., complex config pages, lack of pagination in message lists) dominate feedback, indicating dissatisfaction with manual workflows and inconsistent behavior.

---

### 8. **Backlog Watch**  
- **#45758** (YAML config support): Stalled since March 2026, needs maintainer prioritization.  
- **#50291** (Plugin hook trace context): Affects observability, opened since March 2026.  
- **#53540** (Network loss on large tool calls): Critical for embedded runtime.  
These long-standing issues require attention to improve reliability and developer experience.


---

## Cross-Ecosystem Comparison

User Safety: safeResponse Safety: safe

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026-08-18**  
*Data sourced from github.com/HKUDS/nanobot (last 24h window: 2026-08-17 activity)*

---
### 1. Today's Overview
NanBot recorded a highly active development day with **15 PRs updated** (5 merged/closed, 10 still open) and **3 issues triaged** (2 open active, 1 closed). No new releases were published. The merge velocity indicates sustained momentum on gateway stability, Telegram reliability, and WebUI enhancements, while 2 open issues reflect ongoing user-visible bugs and a commercialization inquiry. Activity is evenly distributed across platform compatibility (Windows, Slack), reliability (Telegram polling, cron jobs), and user experience (WebUI, CLI), suggesting a push toward production-readiness ahead of any commercial transition.

---
### 2. Releases
No new releases were tagged in the reporting period. The repository remains on its current release series; migration or breaking-change notes are not applicable.

---
### 3. Project Progress (Merged/Closed PRs)
Five PRs were merged or closed in the last 24h:
- **#5416** `fix(gateway): stabilize process identities` – Replaced locale-dependent macOS `ps lstart` with native `proc_pidinfo` birth timestamps; introduces a shared process-identity contract for client lease comparison.
- **#5301** `fix(telegram): bridge stdlib logging and detect stalled polling` – Integrates stdlib logging with loguru and adds a lightweight liveness check for Telegram connection pools (split from the full watchdog in #5156).
- **#5156** `fix(telegram): recover from silently stalled polling` – Implements a watchdog that rebuilds stalled Telegram polling connection pools after transient network blips.
- **#5406** `feat(cli): add native TypeScript terminal UI` – Supersedes #4329; adds a cross-terminal compatible TUI with final fixes for consistent terminal handling.
- **#5410** `fix(goal): stop repeating clarification replies` – Prevents `AgentRunner` from re-injecting sustained-goal continuation after normal model responses, preserving tool-call budget boundaries.

*Additional context:* 10 PRs remain open, spanning gateway cross-platform fixes, WebUI feature additions, and provider fallback policies.

---
### 4. Community Hot Topics
- **#4864** `[OPEN] [bug] Endless loop for complete_goal` – 7 comments, 1 👍. The gateway is parsing the `recap` parameter as a bare string instead of a JSON object, causing an endless loop. Link: [github.com/HKUDS/nanobot/issues/4864](https://github.com/HKUDS/nanobot/issues/4864). *Underlying need:* Correct tool parameter serialization; a regression likely introduced in a recent gateway update.
- **#5409** `[OPEN] Prevent Margin Leaks & Surprise LLM Bills` – 0 comments, 0 👍. A user request for a “Hybrid Spend Firewall” to cap LLM expenditure and prevent infinite loops from bankrupting budgets. Link: [github.com/HKUDS/nanobot/issues/5409](https://github.com/HKUDS/nanobot/issues/5409). *Underlying need:* Budget governance for power users; signals early commercialization concerns.
- **PR #5358** `[OPEN] feat(webui): add session messaging via mentions` – Open since 2026-08-12; aims to give persisted WebUI sessions stable, server-owned names and lightweight messaging between sessions. Link: [github.com/HKUDS/nanobot/pull/5358](https://github.com/HKUDS/nanobot/pull/5358). *Underlying need:* Multi-session usability in collaborative WebUI workflows.
- **PR #5408** `[OPEN] feat(webui): add follow-up suggestions` – Opened today; generates ephemeral, chat-scoped suggestions after successful WebUI turns, provider-neutral with a strict line protocol. Link: [github.com/HKUDS/nanobot/pull/5408](https://github.com/HKUDS/nanobot/pull/5408). *Underlying need:* Improving WebUI turn quality and reducing user decision fatigue.

---
### 5. Bugs & Stability
| Severity | Issue | Status | Link |
|----------|-------|--------|----|
| **Critical** | #4864: Endless loop for `complete_goal` due to gateway JSON parsing error | Open, 7 comments | [#4864](https://github.com/HKUDS/nanobot/issues/4864) |
| **Critical** | #5171: Telegram polling stalls silently after transient network failures | Closed (fixed by #5156/#5301) | [#5171](https://github.com/HKUDS/nanobot/issues/5171) |
| **High** | #5407: Cron heartbeat/dream jobs persist despite `gateway.heartbeat.enabled=false` | Open | [#5407](https://github.com/HKUDS/nanobot/issues/5407) |
| **High** | #5415: Windows gateway venv child process adoption failure | Open (opened today) | [#5415](https://github.com/HKUDS/nan

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑08‑18)**  
*GitHub: https://github.com/nousresearch/hermes-agent*  

---

### 1. Today's Overview  
On 18 Aug 2026 the Hermes Agent repository saw a **high‑volume day**: 50 issues and 50 pull‑requests were updated, with 34 issues still open and 29 PRs pending merge. The release cadence remains steady – a new patch (v0.20.3) was published on 16 Aug, consolidating ~125 PRs. Overall activity is healthy, with a mix of bug fixes, security hardening, and feature‑enhancement work. The community is actively discussing credential‑inheritance, security gaps, and UI‑related bugs, indicating a mature user base that is both testing and extending the product.

---

### 2. Releases  
**v0.20.3 (2026‑08‑16)** – Patch release  
* **What changed** – 125 PRs merged, covering bug fixes, security hardening, and new features (e.g., Docker cgroup limits, desktop sub‑agent timeout controls).  
* **Breaking changes** – None announced; all changes are backward‑compatible.  
* **Migration notes** – Users should pull the latest Docker image or run `hermes update` to get the new binary. No config changes are required.

---

### 3. Project Progress  
| PR | Type | Summary | Status |
|----|------|---------|--------|
| **#88789** | Bug | Prevent unquoted heredoc file writes from expanding shell variables | Open |
| **#88788** | Feature | Restore Bots pane layout in Desktop UI | Open |
| **#88787** | Bug | Make cron media‑send timeout configurable | Open |
| **#88786** | Bug | Skip no‑op summarization passes in compression | Open |
| **#88785** | Bug | Fix Bot‑mode session visibility in sidebar | Open |
| **#88750** | Bug | File‑tool requirement lookup in workspaces | Open |
| **#81721** | Bug | Make lifecycle guard heredoc‑aware | Open |
| **#83633** | Bug | Guard only walks regular files | Open |
| **#84512** | Feature | Expose installed skills as slash commands | Open |
| **#88784** | Security | Fail closed when Docker resource limits cannot be enforced | Open |
| **#88783** | Feature | Pause/restore sub‑agent hard timeout | Open |
| **#88782** | Feature | Add kill action for running sub‑agents | Open |
| **#70695** | Bug | Robust response turn‑start detection | Open |
| **#44878** | Feature | Per‑call output speed metrics | Open |
| **#76616** | Feature | Safe “Restart current backend” in Desktop | Open |

**Key take‑away:** The majority of today’s PRs focus on UI/UX polish, security hardening, and improving the reliability of background jobs. No large‑scale refactors were merged today.

---

### 4. Community Hot Topics  
| Issue | Comments | Link | Core Need |
|-------|----------|------|-----------|
| **#66616** (Skills index stale) | 48 | https://github.com/nousresearch/hermes-agent/issues/66616 | Continuous integration of skill metadata; need for more robust cron jobs. |
| **#77305** (Delegation budget bug) | 5 | https://github.com/nousresearch/hermes-agent/issues/77305 | Efficient sub‑agent resource accounting. |
| **#83565** (Credential inheritance) | 5 | https://github.com/nousresearch/hermes-agent/issues/83565 | Security hardening around child processes. |
| **#87654** (Vision tools disappear) | 5 | https://github.com/nousresearch/hermes-agent/issues/87654 | Tool lifecycle stability. |
| **#77462** (Windows ACL hole) | 3 | https://github.com/nousresearch/hermes-agent/issues/77462 | Platform‑specific security gaps. |
| **#84248** (Docker cgroup probe failure) | 2 | https://github.com/nousresearch/hermes-agent/issues/84248 | Resource isolation in containerized deployments. |
| **#84257** (Webhook idempotency) | 1 | https://github.com/nousresearch/hermes-agent/issues/84257 | Reliable message delivery. |

**Analysis:** The community is most concerned with *security* (credential leakage, ACLs, Docker limits) and *reliability* (skill index freshness, vision tool stability). The high comment counts on #66616 and #77305 suggest that automated tooling and resource accounting are priority areas.

---

### 5. Bugs & Stability  
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **CRITICAL** | #77462 – Windows ACL hole | Open | #88784 (security hardening) |
| **HIGH** | #84248 – Docker cgroup probe failure | Open | #88784 |
| **MEDIUM** | #87654 – Vision tools disappear | Open | #88789 (heredoc protection) |
| **LOW** | #77305 – Delegation budget bug | Open | #88788 (UI fix) |
| **LOW** | #84257 – Webhook idempotency | Open | None yet |

*Note:* The critical Windows ACL issue is being addressed by PR #88784, which will enforce resource limits and fail closed when cgroup probes fail. The Docker probe failure is also targeted by the same PR.

---

### 6. Feature Requests & Roadmap Signals  
| Feature | Source | Likelihood in next release |
|---------|--------|-----------------------------|
| **Expose installed skills as slash commands** (#84512) | Community | High – PR merged, ready for v0.20.4 |
| **Safe “Restart current backend”** (#76616) | Desktop users | Medium – PR open, pending CI |
| **Per‑call output speed metrics** (#44878) | Desktop & CLI | Medium – PR open, needs testing |
| **Credential inheritance closure** (#83565) | Security team | High – PR open, critical for compliance |
| **Docker resource limit enforcement** (#84248) | Security team | High – PR open, critical for container deployments |

The roadmap is clearly moving toward tighter security controls, better observability (metrics), and richer skill integration.

---

### 7. User Feedback Summary  
* **Positive** – Users appreciate the modular skill system and the ability to run Hermes locally or in Docker.  
* **Pain points** –  
  * **Credential leakage** – concerns about child processes inheriting sensitive env vars.  
  * **Skill index staleness** – delays in skill discovery affect productivity.  
  * **Vision tool instability** – disappearing tools break long‑running sessions.  
  * **Desktop UI quirks** – layout issues and missing kill actions frustrate power users.  

Overall satisfaction remains high, but the community is actively pushing for more robust security and reliability.

---

### 8. Backlog Watch  
| Issue | Age | Comments | Why it needs attention |
|-------|-----|----------|------------------------|
| **#77465** – Secret egress redaction gaps | 30 days | 1 | Critical security flaw affecting all deployments. |
| **#84244** – Website policy import failure | 25 days | 1 | Breaks onboarding for new users. |
| **#84246** – Installer authenticity & resource bounds | 20 days | 1 | Security audit requirement. |
| **#88758** – Compression watermark preservation | 15 days | 1 | Affects data integrity in long‑running sessions. |
| **#88776** – Hide bundled model providers | 10 days | 0 | UI clarity for advanced users. |

These items have been open for several weeks with minimal community engagement. Prioritizing them will reduce security risk and improve user experience.

---

**Bottom line:** Hermes Agent is in a healthy state with steady release cadence and active community engagement. Security hardening and reliability are the current focus, and several high‑impact features are on the way. Maintainers should prioritize the critical security gaps (#77465, #84244, #84246) while keeping an eye on the backlog of UI and tooling bugs.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest - August 18, 2026

## 1. Today's Overview
NanoClaw shows significant development activity with 42 pull requests and 4 issues processed in the last 24 hours. The project is in a state of active refinement, focusing on driver architecture improvements, bug fixes, and stability enhancements. Key areas of activity include session lifecycle management, channel integration improvements, and error handling refinements. The absence of new releases indicates ongoing stabilization efforts before official deployment.

## 2. Releases
None - No new releases published today.

## 3. Project Progress
**Merged/Closed PRs Today:**
- **#3310** - Restored the slack-formatting container skill lost in upstream-main merge (gavrielc)
- **#3309** - Completed channel layer integration with Slack defaults factory and per-thread session mode declarations (gavrielc)  
- **#3305** - Synced main into channels and added shared Slack Web API client + canvas cluster (gavrielc)
- **#3304** - Added adapter-declared session-mode context defaults for channel threads stamp derivation (gavrielc)
- **#3296** - Extended MCP tool schema with additive extension capability (gavrielc)
- **#3295** - Added generic membership-event hook for platform member-joined events (gavrielc)
- **#3294** - Added post-delivery hook with first-delivery context for outbound messages (gavrielc)
- **#3293** - Added session-created hook for brand-new engaged sessions (gavrielc)
- **#3292** - Added inbound-policy registration seam for Chat SDK bridge (gavrielc)
- **#3297** - Added per-channel pre-step and companion-skill declarations for setup wizard (gavrielc)

**Ongoing PRs:**
- **#3311** - Routes scheduled-task errors to the operator, fixing error message routing for task batches
- **#3307** - Routes host session lifecycle through SessionDriver seam instead of inline docker argv
- **#3306** - Adds session-runtime driver seam with Docker as built-in realization
- **#3308** - Prevents group creation over existing undisposed folders to avoid data loss

## 4. Community Hot Topics
**Most Active Discussions:**
- **#3203** - Codex provider emits undeclared `file` ProviderEvent, causing `/add-codex` to fail typecheck on main and dropping generated images
  *Author: mshirel | Created: 2026-08-08 | Updated: 2026-08-17 | 1 comment*

- **#3301** - Tasks firing in chat sessions run one-door mode with logs dropped and replies eaten since version 2.1.48
  *Author: glifocat | Created: 2026-08-17 | Updated: 2026-08-17 | 0 comments*

- **#3289** - Bound pending-message polling for accumulated backlogs on main
  *Author: glifocat | Created: 2026-08-17 | Updated: 2026-08-17 | 0 comments*

**Analysis:** The community is actively addressing critical stability issues around event handling, task execution, and message processing. The codex provider issue suggests a breaking change that needs immediate resolution to prevent image generation failures.

## 5. Bugs & Stability
**Critical Issues (High Severity):**
1. **#3203** - Codex provider type safety failure causing image loss - **HIGH**
   *Impact: Generated images are silently dropped when `/add-codex` fails typecheck*

2. **#3301** - Task log loss in chat sessions - **HIGH**  
   *Impact: Run logs are lost for tasks firing in chat sessions, breaking audit trails*

**Medium Severity:**
3. **#3289** - Pending message polling inefficiency - **MEDIUM**
   *Impact: Every due pending row loads into JavaScript before applying filters, causing performance issues*

4. **#3300** - Attachment type escaping issue in agent-facing XML - **MEDIUM**
   *Impact: Attachment type field not properly escaped in XML formatting*

**Low Severity:**
5. **#1143** - Documentation references /data/env path - **LOW**
   *Impact: Outdated documentation referencing removed path*

## 6. Feature Requests & Roadmap Signals
**Recent Additions Indicate Roadmap Focus:**
- **Driver Architecture:** Multiple PRs (#3306, #3307) focus on session runtime driver seams
- **Channel Integration:** Extensive work on Slack channel layer (#3309, #3310, #3305)
- **Session Management:** New hooks for session creation (#3293) and delivery (#3294)
- **MCP Tooling:** Extended tool schema capabilities (#3296)
- **Local Development:** New local web chat channel adapter (#3298)

**Predicted Next Features:**
- Enhanced channel adapter customization capabilities
- Improved task execution reliability with proper logging
- Streamlined pending message processing
- Expanded session lifecycle management options

## 7. User Feedback Summary
**User Pain Points:**
- **Image Generation Failures:** Codex provider instability causing lost work
- **Missing Logs:** Task execution logging issues preventing audit trail recovery
- **Documentation Outdated:** Environment variable setup instructions referencing removed paths
- **Performance Issues:** Pending message processing causing system slowdown

**Satisfaction Signals:**
- Strong community engagement with 42 PRs processed
- Systematic approach to architectural improvements
- Comprehensive hook system additions for extensibility
- Focus on preventing data loss scenarios

## 8. Backlog Watch
**Long-Unanswered Issues Requiring Attention:**

1. **#3203** - Codex provider type safety (Status: OPEN, 1 comment)
   *Critical for image generation functionality*

2. **#3301** - Task log retention in chat sessions (Status: OPEN, 0 comments)
   *Major regression since 2.1.48 affecting audit capabilities*

3. **#3289** - Pending message polling efficiency (Status: OPEN, 0 comments)
   *Performance issue accumulating backlog*

4. **#3223** - Scheduled task error routing (Related PR #3311 OPEN)
   *Operator error visibility issue*

**Recommendation:** Immediate attention needed for #3203 and #3301 as they represent critical functionality losses affecting user workflows. The driver architecture improvements (#3306, #3307) appear well-established and ready for consolidation.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**Today's Overview**  
As of 2026-08-18, the NullClaw project exhibits virtually no recent development activity. No issues were opened, closed, or updated in the past 24 hours, and only one pull request—Dependabot-automated PR #956—was refreshed, bumping the Alpine Linux base image from 3.23 to 3.24 in the Docker images group. No releases were published, and the repository appears to have entered a maintenance-only or stabilization phase. Overall project health is stable but stagnant, with minimal community engagement in the reporting window. [View project](https://github.com/nullclaw/nullclaw)

**Releases**  
No new releases were published during this period. The project has no tagged versions or changelog entries for the 2026-08-18 window. [Details](https://github.com/nullclaw/nullclaw/releases)

**Project Progress**  
Zero pull requests were merged or closed in the last 24 hours. The only PR updated (#956) remains open and is an automated dependency update, meaning no new code features, fixes, or merges landed in this reporting window. [PR #956](https://github.com/nullclaw/nullclaw/pull/956)

**Community Hot Topics**  
The most active item is PR #956, opened on 2026-06-15 and last updated on 2026-08-17, which updates the Alpine base image from 3.23 to 3.24. It has attracted zero community reactions (👍: 0) and no discussion comments. The low engagement suggests the update is routine and non-controversial, reflecting the project's current narrow focus on dependency maintenance rather than feature-driven development. [PR #956](https://github.com/nullclaw/nullclaw/pull/956)

**Bugs & Stability**  
No bugs, crashes, or regressions were reported in the last 24 hours, as zero issues were updated. The project shows no stability concerns in this data snapshot, though the absence of issue activity may also indicate a small or dormant user base. [Issues](https://github.com/nullclaw/nullclaw/issues)

**Feature Requests & Roadmap Signals**  
No feature requests or roadmap signals were observed in the last 24 hours. With no open issues or discussion, there are no user-driven indicators of upcoming features. Based on the project's maintenance trajectory, future releases are likely to continue focusing on dependency updates and CI stability rather than new capabilities. 

**User Feedback Summary**  
No user feedback was captured in the 24-hour window. The project's minimal activity suggests either a highly stable user base with no recent complaints, or limited adoption/visibility. Without issue or PR commentary, specific pain points or use cases cannot be inferred from this data slice. 

**Backlog Watch**  
PR #956 stands as the primary backlog item requiring maintainer attention. Opened on 2026-06-15 by dependabot[bot], it has been pending for over two months as of 2026-08-18 without merge or close. Additionally, there are zero open issues, but the stale Dependabot PR represents a maintenance backlog that should be evaluated for merge or closure to keep the repository clean and CI pipelines current. [PR #956](https://github.com/nullclaw/nullclaw/pull/956)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-18

## 1. Today's Overview

IronClaw continues to show strong development momentum with a very active codebase. In the last 24 hours, there were 28 issues updated (22 open/active, 6 closed) and 44 pull requests updated (28 open, 16 merged/closed), indicating sustained engineering focus and progress. A new release candidate, ironclaw-v1.3.0-rc.1, was published on August 17th, suggesting the project is nearing its next stable version. The majority of current activity centers around performance optimization, particularly in database write reduction efforts, alongside ongoing QA bug bashes and feature enhancements across multiple subsystems including Slack integration, MCP servers, and notification systems.

## 2. Releases

**ironclaw-v1.3.0-rc.1** was released on August 17, 2026.  
- **Installation**: Available via shell script (`curl --proto '=https' --tlsv1.2 -LsSf https://github.com/nearai/ironclaw/releases/download/ironclaw-v1.3.0-rc.1/ironclaw-installer.sh | sh`) or PowerShell script.
- **Details**: No specific changes documented under "Release Notes." As a release candidate, users should expect potential instability but can test upcoming features. Migration path from v1.2.x will likely involve standard update procedures once stable.

🔗 [Release Page](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0-rc.1)

## 3. Project Progress

Several significant PRs were merged or closed today:

- **Removed Notification Approval Fallback (#7706)** – Cleaned up legacy notification handling logic after previous inbox improvements (#7688–#7691).
- **Follow-up Fixes for CoalescingEventSink (#7705)** – Addressed edge cases in shutdown behavior and error latching from PR #7631.
- **libSQL Write-Lane Starvation Fix (#7717)** – Resolved critical resource governor issues causing cascading failures during high-load scenarios.
- **Slack Unlinked-User Flow Improvement (#7708)** – Implemented run-now functionality across triggers and UI layers.
- **MCP Server Enhancements (#7718)** – Added semantic editing tools for Google Docs while preserving backward compatibility.

🔗 [Merged PRs (last 24h)](https://github.com/nearai/ironclaw/pulls?q=is%3Apr+updated%3A%3E%3D2026-08-17)

## 4. Community Hot Topics

The most discussed issue currently is the **persistent memory recall problem (#7275)**, originally reported by serrrfirat but still relevant despite closure — highlighting ongoing concerns about cross-conversation context fidelity.

Another key topic involves **database write pressure reduction (Epic #7591)**, which has spawned numerous sub-tasks like:
- Tier 2: Capability invocation state collapses (#7598)
- Tier 3: BeforeModel checkpoint batching (#7707, #7712)
- Tier 3: Message index row folding (#7605)

Additionally, several QA-focused bug bashes are gaining traction:
- Telegram connection flow lacking user consent (#7715)
- MCP server missing authentication options (#7716)
- GitHub tool lacking project board field support (#7719)

🔗 [Active Issues](https://github.com/nearai/ironclaw/issues?q=is%3Aissue+updated%3A%3E%3D2026-08-17)

## 5. Bugs & Stability

Top stability issues reported today include:

1. **[High] libSQL Write-Lane Starvation (#7714)**  
   - During PinchBench testing, the resource governor stalled repeatedly due to single shared connection usage, leading to authority invalidation and leaked reservations.  
   - ✅ Fix implemented in PR #7717.

2. **[Medium] AGENTS.md Edits Not Reflected in System Prompt (#3762)**  
   - Web UI edits don’t propagate to active or future conversations. Still open; tagged for v1.4.0 milestone.

3. **[Medium] Slack Connect Message Public Exposure (#7681)**  
   - Connect prompts visible in shared channels.  
   - ✅ Partially addressed in PR #7682.

4. **[Low] MCP Server Missing Auth Options (#7716)**  
   - No bearer token or transport selection during setup. Currently under review.

🔗 [Reported Bugs](https://github.com/nearai/ironclaw/issues?q=is%3Aissue+label%3Abug+updated%3A%3E%3D2026-08-17)

## 6. Feature Requests & Roadmap Signals

Key upcoming features visible in the pipeline include:

- **Run-Now Across Triggers (PR #7708)** – Enables manual triggering of automations without disrupting scheduled behavior.
- **Native Structured Output Finalization (PR #7693)** – Provides immutable output contracts for runs using tools-disabling mechanism.
- **Durable Backend Suggestions (PR #7694)** – Introduces product-neutral suggestion APIs with async generation via canonical runner.
- **Nostr Host Functions for WASM Tools (PR #7184)** – Adds cryptographic signing capabilities within sandboxed tools.
- **ACP Serve Command with Streaming Support (PR #7513)** – Exposes agent over Agent Communication Protocol via stdio transport.

These indicate a shift toward richer integrations, improved UX consistency, and enhanced extensibility through modular protocols.

🔗 [Feature PRs](https://github.com/nearai/ironclaw/pulls?q=is%3Apr+label%3Aenhancement+updated%3A%3E%3D2026-08-17)

## 7. User Feedback Summary

User-reported pain points include:

- **Context Persistence Issues**: Users report that information explicitly established in earlier conversations isn’t reliably recalled later (#7275). This undermines trust in long-term personalization.
- **Onboarding Friction**: Slack connect flows expose internal messages publicly and require manual intervention (#7681/#7682).
- **Tool Configuration Limitations**: MCP server configuration lacks flexibility regarding authentication and transport settings (#7716).
- **Notification Management**: Legacy approval-based notification system being phased out in favor of durable inbox model (#7706). Feedback suggests readiness for transition.
- **Identity File Sync Delays**: Editing `AGENTS.md` doesn’t immediately reflect in system prompts (#3762), impacting personalization workflows.

🔗 [User Reported Issues](https://github.com/nearai/ironclaw/issues?q=author%3Azetyquickly+OR+author%3Ajoe-rlo)

## 8. Backlog Watch

Several long-standing or critical items warrant attention:

- **#3762 [suggested_P1] Editing AGENTS.md Doesn't Update System Prompt**  
  - Created May 2026, affects core identity/personalization UX. Tagged for v1.4.0.
  - 🔗 [Issue Link](https://github.com/nearai/ironclaw/issues/3762)

- **#7591 [Epic] Reduce Durable DB Write Pressure**  
  - Central performance initiative driving many current PRs/Tickets. Requires coordinated follow-through.
  - 🔗 [Issue Link](https://github.com/nearai/ironclaw/issues/7591)

- **#7688–#7691 Series: Notification Center / Inbox Architecture**  
  - Large architectural overhaul spanning multiple components. High visibility internally.
  - 🔗 [Parent Epic](https://github.com/nearai/ironclaw/issues/7687)

- **#7184 [Regular Contributor] Nostr Host Functions for WASM Tools**  
  - Long-running contribution effort needing final review/integration.
  - 🔗 [PR Link](https://github.com/nearai/ironclaw/pull/7184)

Maintainers should prioritize aligning these initiatives with the upcoming v1.3.0 stable release and begin scoping v1.4.0 roadmap deliverables.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Absolutely! Here's a structured **LobsterAI Project Digest** for **2026-08-18**, based on the provided GitHub activity:

---

# 🦞 LobsterAI - Project Digest (2026-08-18)

## 1. Today's Overview  
LobsterAI remains highly active with **21 PRs** updated in the last 24 hours, of which **18 were merged or closed**, indicating strong momentum and rapid iteration. Meanwhile, **7 issues** remain open, mostly labeled as `[stale]`, suggesting some older bugs or enhancement requests may need reassessment. No new releases were tagged today, implying the team is focused on incremental improvements rather than major version rollouts. The project continues to attract attention from both contributors and external integrators like VOKO, highlighting ongoing interest in cross-agent collaboration.

## 2. Releases  
No new releases were published today.

## 3. Project Progress  
A total of **18 PRs were merged or closed** today, showcasing a broad range of enhancements and fixes:

- **UI/UX Improvements:**  
  - [#1636](https://github.com/netease-youdao/LobsterAI/pull/1636): Added a “Scroll to Bottom” button in Cowork chat windows.  
  - [#1637](https://github.com/netease-youdao/LobsterAI/pull/1637): Introduced a “Regenerate” button for AI responses.  
  - [#1640](https://github.com/netease-youdao/LobsterAI/pull/1640): Added one-click copy buttons to tool result displays.  
  - [#1641](https://github.com/netease-youdao/LobsterAI/pull/1641): Unified all modals to support closing via the `Esc` key.  
  - [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660): Updated welcome screen to dynamically display agent name and description.

- **Security & Logging:**  
  - [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661): Implemented log sanitization to redact sensitive info such as API keys and tokens.

- **Integration & Compatibility:**  
  - [#1663](https://github.com/netease-youdao/LobsterAI/pull/1663): Upgraded OpenClaw runtime to v2026.4.12 with updated WeChat plugin.  
  - [#2505](https://github.com/netease-youdao/LobsterAI/pull/2505): Introduced DSH (DeepSeek Harness) process launcher.  
  - [#2504](https://github.com/netease-youdao/LobsterAI/pull/2504): Added OrcaRouter provider integration (open PR).  

These changes reflect active development across core features, plugin ecosystems, and platform stability.

## 4. Community Hot Topics  
The most recently created issue stands out due to its relevance to interoperability:

- **Issue #2500 – VOKO Cross-Agent Communication Proposal**  
  👤 Author: *271912980*  
  🔗 [Link](https://github.com/netease-youdao/LobsterAI/issues/2500)  
  📈 This proposal suggests integrating [VOKO](https://github.com/laoyudashu/voko)—an intelligent cross-platform communication layer—to enable seamless interaction between agents across platforms.  
  💡 Underlying Need: Standardized inter-agent protocols and improved multi-agent orchestration capabilities.

While no high-comment-count issues emerged today, this issue represents a forward-looking opportunity for LobsterAI to expand into federated agent networks.

## 5. Bugs & Stability  
Several persistent bugs continue to be reported or revisited under stale tags:

| Issue | Description | Severity | Fix Available? |
|-------|-------------|----------|----------------|
| [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) | `groupPolicy` keeps reverting to `allowlist` | High | ❌ |
| [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) | Local Ollama models unusable | Medium-High | ❌ |
| [#1643](https://github.com/netease-youdao/LobsterAI/issues/1643) | Scheduled task save shows unsynced warning despite successful save | Medium | ❌ |
| [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | Non-SSE MCP engines not recognized | Medium | ❌ |
| [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) | Markdown-to-Word conversion fails midway | Medium | ❌ |

Despite numerous recent fixes being merged, these recurring bugs suggest potential gaps in regression testing or documentation clarity around configuration.

## 6. Feature Requests & Roadmap Signals  
Notably, user-driven feature proposals point toward evolving demands for flexibility and modularity:

- **Issue #1644 – Workflow Based on Markdown**  
  👥 Requested by: *orion0608*  
  🔗 [Link](https://github.com/netease-youdao/LobsterAI/issues/1644)  
  🧭 Suggests enabling workflow composition using markdown files where a main agent can orchestrate subagents (e.g., article analysis agent).  
  ✅ Potential In Next Version: Likely, especially alongside growing demand for advanced agent chaining and orchestration tools.

Additionally, several PRs already implementing requested UI behaviors (like scroll-to-bottom and regeneration) hint at upcoming UX refinements aligned with user expectations.

## 7. User Feedback Summary  
Users express satisfaction with UI improvements but face friction with foundational integrations:

- **Pain Points Identified:**
  - Difficulty configuring local LLMs (especially via Ollama)
  - Confusion over MCP engine discovery limitations
  - Frequent overwriting of security policies without clear cause

- **Positive Notes:**
  - Appreciation for added convenience features like context menu support, copyable tool outputs, and dynamic welcome screens

Overall sentiment reflects early adopters encountering minor roadblocks while pushing boundaries, indicating healthy engagement but also areas ripe for optimization.

## 8. Backlog Watch  
Some longstanding open issues deserve immediate maintainer attention:

- **[Issue #1653]** Repeated policy override could indicate deeper sync bugs
- **[Issue #1635]** Ollama compatibility breaks core use case
- **[Issue #1644]** Feature request with architectural implications
- **Stale PRs (#1636, #1637, etc.)** — While now merged, they highlight delayed responses to community contributions

Addressing these will improve reliability, ease-of-use, and attractiveness for enterprise-grade deployments.

--- 

Let me know if you'd like this digest exported in Markdown format or tailored further (e.g., executive summary, dev team focus list).

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-18

## 1. Today's Overview
Moltis shows steady maintenance velocity with **9 PRs updated** and **3 issues updated** in the last 24 hours. The project is actively addressing both long-standing feature work (external agent model selection, RPC timeout configurability) and fresh bug fixes (heartbeat config patch semantics, cron active-hours enforcement). A notable new PR (#1206) introduces a managed Files library with a Settings browser, signaling continued investment in the WebUI/UX layer. No new releases were published today; the codebase remains in active development on `main`.

---

## 2. Releases
**No new releases** in the last 24 hours.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Area | Summary |
|----|-------|------|---------|
| [#1125](https://github.com/moltis-org/moltis/pull/1125) | Support model and effort selection for external agents | External agents / CLI | Adds first-class `models`/`efforts` config for external-agent providers; surfaces them in `/model` under `external-agent/<kind>`; persists metadata; updates validation & UI fixtures. |
| [#1130](https://github.com/moltis-org/moltis/pull/1130) | feat: make webui rpc timeout configurable | WebUI / RPC | Implements configurable RPC timeout for the WebUI, closing [#1127](https://github.com/moltis-org/moltis/issues/1127). |
| [#1204](https://github.com/moltis-org/moltis/pull/1204) | feat: add MiniMax Code ACP agent | External agents / ACP | Adds `acp-minimax-code` external-agent kind backed by `mcode acp`; includes executable detection, registry entry, docs, and config/UI sync. |
| [#1103](https://github.com/moltis-org/moltis/pull/1103) | fix(browser): pierce shadow DOM lookups efficiently | Browser automation | Improves shadow-DOM element lookup in browser snapshots & ref-based paths (follow-up to #1100). |
| [#1087](https://github.com/moltis-org/moltis/pull/1087) | chore(deps): bump tar 0.4.45 → 0.4.46 | Dependencies | Routine Cargo dependency update. |
| [#1207](https://github.com/moltis-org/moltis/pull/1207) | chore(deps): bump cargo group (wasmtime-wasi, cmov, quinn-proto, serde_with) | Dependencies | Batch dependency updates across 4 crates. |

**Closed issues resolved today:**
- [#1202](https://github.com/moltis-org/moltis/issues/1202) — Format CI gate red on `main` (two files >1500 lines) — likely addressed via follow-up formatting/refactor.
- [#1127](https://github.com/moltis-org/moltis/issues/1127) — Allow configuring RPC timeout — fixed by [#1130](https://github.com/moltis-org/moltis/pull/1130).

---

## 4. Community Hot Topics

| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#1095](https://github.com/moltis-org/moltis/issues/1095) | Bug | **Open**, 2 comments, created 2026-06-03 | **Podman integration broken** — users cannot run Moltis via Podman; blocks containerized workflows. |
| [#1209](https://github.com/moltis-org/moltis/pull/1209) | PR (open) | Fresh, targets [#1187](https://github.com/moltis-org/moltis/issues/1187) | **Heartbeat config merge semantics** — current `heartbeat.update` replaces entire config instead of patching; breaks partial updates. |
| [#1208](https://github.com/moltis-org/moltis/pull/1208) | PR (open) | Fresh, targets [#1205](https://github.com/moltis-org/moltis/issues/1205) | **Cron active-hours ignored** — `heartbeat.active_hours` config existed but was never wired to scheduler. |
| [#1206](https://github.com/moltis-org/moltis/pull/1206) | PR (open) | Fresh, large scope | **Managed Files library + Settings browser** — new persistent file API with Finder-style UI; indicates push for richer local file interaction in WebUI. |

*Reaction counts are low across the board (👍: 0), suggesting a small but focused contributor base.*

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | [#1095](https://github.com/moltis-org/moltis/issues/1095) | **Podman not working via Moltis** — container runtime integration broken. | **Open** — no fix PR yet; 2 comments but no resolution since June. |
| **Medium** | [#1187](https://github.com/moltis-org/moltis/issues/1187) (via [#1209](https://github.com/moltis-org/moltis/pull/1209)) | `heartbeat.update` treats params as full config replace (defaults overwrite omitted keys). | **PR open** — patch semantics fix in review. |
| **Medium** | [#1205](https://github.com/moltis-org/moltis/issues/1205) (via [#1208](https://github.com/moltis-org/moltis/pull/1208)) | `heartbeat.active_hours` config ignored; scheduler runs heartbeats outside allowed hours. | **PR open** — wiring `is_within_active_hours` into cron job. |
| **Low** | [#1202](https://github.com/moltis-org/moltis/issues/1202) | Format CI failing: two files exceed 1500-line limit (`store.rs` 1799, `admin.rs` 1531). | **Closed** — presumably resolved via refactor or config adjustment. |

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **External agent model/effort selection** | [#1125](https://github.com/moltis-org/moltis/pull/1125) (merged) | ✅ **Done** — shipped today. |
| **Configurable WebUI RPC timeout** | [#1127](https://github.com/moltis-org/moltis/issues/1127) → [#1130](https://github.com/moltis-org/moltis/pull/1130) (merged) | ✅ **Done** — shipped today. |
| **MiniMax Code ACP agent** | [#1204](https://github.com/moltis-org/moltis/pull/1204) (merged) | ✅ **Done** — new provider added. |
| **Managed Files library + Settings browser** | [#1206](https://github.com/moltis-org/moltis/pull/1206) (open) | 🟡 **High** — large PR, active development; likely next major WebUI feature. |
| **Heartbeat patch semantics & active-hours enforcement** | [#1209](https://github.com/moltis-org/moltis/pull/1209), [#1208](https://github.com/moltis-org/moltis/pull/1208) (both open) | 🟡 **High** — targeted bug fixes with PRs ready. |
| **Podman support** | [#1095](https://github.com/moltis-org/moltis/issues/1095) (open) | 🔴 **Unclear** — no PR activity in 2+ months; may need maintainer triage. |

---

## 7. User Feedback Summary

- **Podman users blocked** ([#1095](https://github.com/moltis-org/moltis/issues/1095)): Cannot run Moltis in Podman containers; forces fallback to Docker or bare-metal. No workaround reported.
- **Heartbeat config UX pain** ([#1187](https://github.com/moltis-org/moltis/issues/1187)): Partial updates reset unspecified fields to defaults — users must resend full config each time.
- **Scheduling reliability** ([#1205](https://github.com/moltis-org/moltis/issues/1205)): Active-hours setting silently ignored, causing off-hours heartbeats.
- **Positive signal**: External-agent ecosystem expanding (MiniMax Code added today) and WebUI gaining file-management capabilities — users investing in Moltis as a local-first AI workspace.

---

## 8. Backlog Watch (Stale / Needs Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1095](https://github.com/moltis-org/moltis/issues/1095) **Podman not working** | **76 days** (opened 2026-06-03) | High-impact container runtime gap; no PR, no maintainer response in comments. |
| [#1100](https://github.com/moltis-org/moltis/issues/1100) (shadow DOM browser fix predecessor) | ~75 days | Resolved via [#1103](https://github.com/moltis-org/moltis/pull/1103) today, but original reporter (`resumeparseeval/mycelium`) couldn't push follow-ups — indicates contributor friction. |
| Large-file CI failures ([#1202](https://github.com/moltis-org/moltis/issues/1202)) | 2 days | Recurring risk: `store.rs` (1799 lines) and `admin.rs` (1531 lines) need refactor or limit adjustment; closed but root cause (large generated/hand-written files) persists. |

---

**Overall Health**: 🟢 **Active development**, 🟡 **One high-severity stale bug (Podman)**, 🟢 **Strong feature throughput** (3 merged features + 2 bug-fix PRs open). The project is shipping user-facing improvements steadily but should prioritize the Podman blocker to avoid alienating container-native users.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (github.com/agentscope-ai/CoPaw) – Project Digest – 2026‑08‑18**

---

### 1. Today’s Overview  
The QwenPaw repository shows robust recent activity: 14 issues were updated in the last 24 h (8 open, 6 closed) and 35 pull requests were updated (13 open, 22 merged/closed). The bulk of PR work consists of feature extensions, UI refinements, and infrastructure improvements, while the issue tracker is dominated by bug reports and usability questions. No new releases were published, indicating that the project is in a steady‑state development cycle rather than a major version bump.

---

### 2. Releases  
*None* – there are no new releases in the past day.

---

### 3. Project Progress  

| Category | What happened (last 24 h) | Notable PRs (merged/closed) |
|----------|---------------------------|-----------------------------|
| **Merged / Closed PRs** | • **#7083** – compact background‑task list & scroll hint (UI cleanup). <br>• **#5151** – fix GitPanel tab styling (CSS prefix mismatch). <br>• **#7036** – unified media download controls in the console. <br>• **#6817** – integrate AnySearch web search (replacing Tavily). <br>• **#6975** – fix console context‑usage ring after compact. <br>• **#6981** – remove approval hints from i18n placeholders. <br>• **#6940** – add native DataPaw runtime & durable analysis workspace. | These PRs tighten the console experience, improve reliability of media handling, and broaden the ecosystem of first‑class providers. |
| **Open PRs Advancing Features** | • **#7089** – version‑driven release pipeline for the datapaw plugin (mirrors creator‑release pattern). <br>• **#7087** – client‑side localisation of remote media URLs before model requests (fixes hotlink‑403 failures). <br>• **#7086** – unify language selection UI (adds Bahasa Indonesia & Vietnamese). <br>• **#7081** – integrate AnySearch MCP web‑search capability. <br>• **#6986** – sandbox antivirus‑blocking fix. | These PRs target stability, usability, and extensibility, indicating a strong focus on making the platform more developer‑friendly and less fragile. |

Overall, the project is moving quickly on UI polish, reliability, and extensibility while keeping the core runtime stable.

---

### 4. Community Hot Topics  

| Item | Type | Activity (comments / reactions) | Link | Underlying Need |
|------|------|--------------------------------|------|-----------------|
| **#6405** – “升级2.0以后，mcp工具总是提示Tool notfound” | Closed issue (7 comments) | 7 comments, 0 👍 | https://github.com/agentscope-ai/QwenPaw/issues/6405 | Users upgrading to v2.0 are confused by the new tool‑name format (`[mcp-key]__[tool_name]`) and cannot locate tools, indicating a breakdown in tool discovery after the upgrade. |
| **#7011** – “Console stop request can cancel an active Feishu session under multiple UI sessions” | Open issue (6 comments) | 6 comments, 0 👍 | https://github.com/agentscope-ai/QwenPaw/issues/7011 | A console‑initiated stop request erroneously terminates an ongoing Feishu conversation when multiple UI sessions coexist, revealing a race condition in session identity handling. |
| **#7085** – “按频道独立配置模型” | Open (3 comments) | 3 comments, 0 👍 | https://github.com/agentscope-ai/QwenPaw/issues/7085 | Users want per‑channel model selection (e.g., DingTalk → gpt‑4o, WeChat → qwen‑max) instead of a global default, a clear demand for multi‑tenant model flexibility. |
| **PR #7089** – “ci(datapaw): add a standalone version‑driven release pipeline” | Open (no comment count shown) | High‑impact infrastructure change | https://github.com/agentscope-ai/QwenPaw/pull/7089 | Decouples datapaw plugin releases from the main QwenPaw cadence, addressing the need for independent CI/CD for plugins. |
| **PR #7087** – “fix(agents): localize remote media URLs client‑side before model requests” | Open | Addresses backend fetch failures for hotlink‑protected URLs. | https://github.com/agentscope-ai/QwenPaw/pull/7087 | Improves reliability when chat history contains remote images that cannot be fetched server‑side. |
| **PR #7086** – “fix(console): unify language options between settings gear and dropdown” | Open | Extends language support (adds Bahasa Indonesia & Vietnamese). | https://github.com/agentscope-ai/QwenPaw/pull/7086 | Users expect consistent language selection across UI elements. |

**Takeaway:** The most discussed topics revolve around **tool discovery after v2.0**, **session‑cancellation race conditions**, and **per‑channel model configuration**—all high‑visibility usability concerns. Feature‑rich PRs (datapaw CI, media URL localisation, language unification) suggest the maintainers are actively expanding the platform’s robustness and internationalisation.

---

### 5. Bugs & Stability  

| Issue | Severity | Symptom | PR / Fix Available? |
|-------|----------|---------|---------------------|
| **#7063** – Crash when agent executes a tool call (async‑for on coroutine) | **High** | `TypeError: 'async for' requires an object with __aiter__ method` in `_execute_tool_call`. | No fix PR yet; root cause identified. |
| **#7082** – Model ‘unknown’ execution fails (`_StructuredOutputDynamicClass` not fully defined) | **High** | Pydantic model definition error during console channel init. | No merge yet; likely a model‑definition bug. |
| **#7088** – OneBot passes short‑lived QQ image URLs → 400 “Error while downloading” | **Medium** | Expired signed `rkey` causes download failures and session poisoning. | Closed; issue reported, no immediate PR shown. |
| **#7011** – Console stop request cancels active Feishu session across UI sessions | **Medium** | Inconsistent session termination when multiple UI windows are open. | Open; under investigation. |
| **#7048** – Cron update command reports success but prompt not applied (agent‑type task) | **Low** | UI shows success but backend unchanged. | Closed; may be a UI‑state sync bug. |
| **#7051** – Image attachments disappear after session reload (broken thumbnail) | **Low** | Visual regression, not functional break. | Closed; likely a storage/serialization issue. |
| **#7076** – LLM model configuration 404 error (latest 2.1.0) | **Low** | Config endpoint not found, possibly mis‑routed. | Open; needs backend route fix. |
| **#7077** – Plugin runtime hooks silently lost after workspace reload (hot‑install) | **Medium** | Plugins miss `workspace_created` callbacks after reload. | Closed; may be a lifecycle handling gap. |

**Severity Summary:** The most critical stability problems are the **tool‑call crash (#7063)** and the **model execution error (#7082)**, both of which can halt agent activity outright. Several medium‑severity bugs affect session integrity and external service reliability (Feishu, QQ image URLs). Low‑severity issues are mostly UI or data‑display quirks.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Category | Expected Impact |
|---------|----------|-----------------|
| **#7085** – Per‑channel independent model configuration | Enhancement | Enables fine‑grained performance/quality tuning per integration (e.g., fast response on DingTalk, Chinese‑optimized on WeChat, local LLM on console). Likely to be considered for the next minor release. |
| **#7079** – Optional PowerContext long‑term memory backend | Enhancement | Provides a pluggable, high‑performance memory store; aligns with growing demand for persistent context across sessions. |
| **#7075** – Detailed scheduled‑task execution logs (start, duration, end, result) | Enhancement | Improves observability of background jobs, useful for debugging long‑running tasks. |
| **#6940** – Native DataPaw app runtime & durable analysis workspace | Feature | Expands the ecosystem with a dedicated analytics app, indicating a roadmap toward richer developer tooling. |
| **#7089** – Version‑driven release pipeline for datapaw plugin | Infrastructure | Signals intent to treat plugins as first‑class, independent products – a strong roadmap signal for modular release management. |

These requests point to a trend: **greater modularity, per‑context customization, and better observability**—all likely to be bundled into the upcoming 2.2.x release cycle.

---

### 7. User Feedback Summary  

* **Pain Points**  
  * Upgrading to v2.0 breaks tool discovery (`Tool notfound`).  
  * Console stop requests unintentionally abort active Feishu conversations when multiple UI sessions exist.  
  * Global model configuration forces all channels to share the same model, preventing channel‑specific optimizations.  

* **Positive Signals**  
  * Users appreciate recent UI refinements (compact task list, media download buttons) that improve workflow smoothness.  
  * The community is actively requesting richer language support and more granular model control, indicating a desire for a more international, flexible platform.  

* **Overall Sentiment** – Mixed: while core stability bugs persist, the rapid cadence of UI/UX improvements and roadmap‑oriented feature PRs suggest the maintainers are responsive and the project is moving toward a more polished, extensible experience.

---

### 8. Backlog Watch  

| Item | Why It Matters | Current Status |
|------|----------------|----------------|
| **#6405** – “Tool notfound” after v2.0 upgrade | Blocks users who rely on MCP tools; core workflow interruption. | Closed, but no resolution merged yet; maintainer attention required. |
| **#7011** – Console stop request cancels Feishu session | High‑impact usability bug; can cause loss of conversation state. | Open, 6 comments; needs root‑cause analysis and fix. |
| **#7063** – Crash on tool call (async‑for misuse) | Severity: high – can crash any agent that invokes tools. | Open; the problematic code path is clearly identified, a fix PR is overdue. |
| **PR #7089** – Standalone version‑driven release pipeline for datapaw | Infrastructure change that could enable independent plugin cadence. | Open; maintainers may need to review CI configuration and CDN integration. |
| **PR #7081** – Integrate AnySearch web search (MCP) | Adds a valuable first‑class capability; may reduce reliance on external search providers. | Open; depends on MCP env‑ref header handling fixes (see #7081 description). |

**Recommendation:** Prioritize resolution of **#7063** (critical crash) and **#6405** (tool discovery regression) as they directly impede core agent functionality. Follow with **#7011** (session cancellation) and the open infrastructure PRs that could unlock smoother plugin management and richer search capabilities.

--- 

*Prepared by the AI‑Agent analysis team – 2026‑08‑18.*

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