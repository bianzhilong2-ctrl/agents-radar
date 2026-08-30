# OpenClaw Ecosystem Digest 2026-08-30

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-30 02:30 UTC

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

# OpenClaw Project Digest - August 30, 2026

## Today's Overview
OpenClaw shows high operational activity with 500 issues and PRs updated today, reflecting an intensive development cycle addressing critical infrastructure problems. The project is experiencing multiple severe reliability issues across memory management, session handling, and provider integrations. Despite the high issue volume, no new releases were published, suggesting ongoing stabilization work. The priority focus appears to be on fixing memory leaks, session state management, and delivery failures that impact core operational stability.

## Releases
**None** - No new releases published today, maintaining current stable versions across the platform.

## Project Progress
**Merged/Closed PRs Today:**
- PR #133014: Performance optimization for hidden session detail projection
- PR #132459: Enhanced stuck-session recovery for CLI background work
- PR #115286: Fixed config rejection of agents.defaults.mediaLocalRoots
- PR #133020: Voice smoke test fix for speech reception
- PR #123535: Session catalog refresh storm avoidance
- PR #131682: macOS signer-only fixtures cleanup
- PR #132622: Feishu group/chat management capabilities

Recent progress indicates strong focus on reliability improvements, particularly around session management, authentication handling, and provider integration stability. Several critical fixes are queued for maintainer review.

## Community Hot Topics
**Most Active Discussions:**

1. **#91588 Gateway Memory Leak (22 comments, 1 upvote)**
   - Critical RSS growth from 350MB to 15.5GB causing OOM crashes
   - High severity impact on session-state, message-loss, and crash-loop
   - Community engaged with detailed technical analysis of memory management failure

2. **#121953 DeepSeek Cron Agent Stalling (13 comments, 0 upvotes)**
   - Cron agent messages deprioritized due to `[cron:` prefix
   - DeepSeek API edge case affecting agent-turn user messages
   - Cross-provider compatibility issue requiring message formatting adjustments

3. **#74586 Memory Search Tool Timeout (13 comments, 3 upvotes)**
   - AM embedded run abort behavior with model completion
   - Tool call classification errors despite successful completion
   - Higher community engagement indicating user impact

These issues reveal core infrastructure challenges around memory management, provider-specific behavior handling, and tool execution reliability.

## Bugs & Stability
**Critical Issues by Severity:**

**P0 Critical:**
- **#110190 Runtime context carrier positioning** causing model confusion and token waste
- **#125333 totalTokens inflation** still reproducing in beta.2
- **#124788 Event loop blocking** (~100s every ~10 min) in beta.2
- **#54488 Session lane starvation** causing 20-30min dispatch stalls
- **#69242 Linux exec tool SIGKILL** on broad discovery commands

**P1 High:**
- **#84516 Codex agent replies truncation** at ~1000-1100 chars
- **#86214 Codex app-server closure** during image/tool requests
- **#91144 Windows CLI Scheduled Task** not staying running
- **#97616 Hook/tool child process leaks** causing zombie accumulation

**P2 Medium:**
- **#44502 Discord routing/mention-gating** bugs
- **#78493 Mixed ownership creation** during sudo update
- **#119884 Agent DB migration** statistics refresh delays
- **#101929 Context overflow estimator** over-counts by 2.3-2.6x

**Status:** Multiple critical bug fix PRs are in progress (e.g., #131949 for completed reply duplication, #120545 for codex compaction). However, core memory leak and session starvation issues remain unresolved, requiring immediate attention.

## Feature Requests & Roadmap Signals
**Emerging Features:**

1. **#6599 /models test-fallback command** - Model fallback chain verification
2. **#91455 Kubernetes documentation update** - Improved deployment guidance
3. **#99583 Intelligent Session Auto-Titling** - Lazy title generation with cheap models
4. **#71058 Multiple Azure/Teams bots support** - Multi-identity configuration
5. **#82450 Linear Persistent Workspace Mode** - Accessibility improvements for blind users

**Roadmap Indicators:** The project is shifting focus toward enhanced reliability (memory management, session handling) while continuing incremental feature improvements in documentation, multi-platform support, and user experience.

## User Feedback Summary
**Key Pain Points:**
- **Memory Management**: Persistent memory leaks causing service disruptions
- **Session Reliability**: Duplicate messages, lost deliveries, and delivery failures
- **Provider Integration**: Cross-provider compatibility issues (DeepSeek, Google, xAI)
- **Platform Support**: Windows scheduled tasks and WSL startup issues
- **Tool Execution**: Timeout misclassification and process management problems

**User Satisfaction Signals:**
- High engagement on critical issues (22+ comments)
- Positive reactions on accessibility features (82450, 3 upvotes)
- Demand for improved testing capabilities (JSONL session replay)
- Strong interest in multi-environment support (Kubernetes, Teams)

**Dissatisfaction Indicators:** Severe frustration with memory leaks and session state problems affecting operational reliability, particularly in production environments.

## Backlog Watch
**Critical Unanswered Issues:**

1. **#91588 Gateway Memory Leak** (P1, 22 comments) - **STALE**
   - Requires immediate memory management investigation
   - Direct impact on service availability

2. **#110190 Runtime Context Positioning** (P1, 6 comments) - **UNANSWERED**
   - Root cause analysis needed for model confusion
   - Impacts token efficiency and model performance

3. **#124788 Event Loop Blocking** (P0, 6 comments) - **UNANSWERED**
   - Systematic performance degradation affecting all services
   - Critical for maintaining service responsiveness

4. **#54488 Session Lane Starvation** (P0, 6 comments) - **UNANSWERED**
   - Fundamental session processing bottleneck
   - Directly affects user experience and throughput

5. **#119884 Agent DB Migration** (P1, 5 comments) - **UNANSWERED**
   - Performance regression affecting large deployments
   - Requires SQLite statistics refresh optimization

**Maintainer Action Required:** These issues represent fundamental infrastructure problems that could severely impact production deployments. Immediate investigation and prioritization are recommended given their severity and potential business impact.

---
*Digest generated from OpenClaw GitHub data as of August 30, 2026. All links point to the respective issue/PR numbers within the openclaw/openclaw repository.*

---

## Cross-Ecosystem Comparison

User Safety: safe

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑08‑30**

---

### 1. Today’s Overview  
The NanoBot repository shows modest but steady activity: two issues were updated in the last 24 h, all remaining open, and thirteen pull requests were updated (eight still open, five merged/closed). No new releases were published. The project appears healthy, with a balanced mix of bug‑fixes, documentation clarifications, and larger refactorings that keep the codebase moving forward.

**GitHub links**  
- Issues: <https://github.com/HKUDS/nanobot/issues/5593>, <https://github.com/HKUDS/nanobot/issues/5592>  
- Pull requests: <https://github.com/HKUDS/nanobot/pull/5568>, <https://github.com/HKUDS/nanobot/pull/5600>, <https://github.com/HKUDS/nanobot/pull/5536>, <https://github.com/HKUDS/nanobot/pull/5405>, <https://github.com/HKUDS/nanobot/pull/5601>, <https://github.com/HKUDS/nanobot/pull/5599>, <https://github.com/HKUDS/nanobot/pull/5596>, <https://github.com/HKUDS/nanobot/pull/5598>, <https://github.com/HKUDS/nanobot/pull/5597>, <https://github.com/HKUDS/nanobot/pull/5595>, <https://github.com/HKUDS/nanobot/pull/5594>, <https://github.com/HKUDS/nanobot/pull/5591>, <https://github.com/HKUDS/nanobot/pull/5560>

---

### 2. Releases  
*None* – the project is on the latest commit without a version bump.

---

### 3. Project Progress  
- **Closed PRs today**  
  - **#5599** – *fix(cli): stream gateway logs in WebUI launcher* – mirrors live gateway log lines while the WebUI remains attached, preventing orphaned media and revoked‑connection side‑effects.  
  - **#5596** – *feat(providers): discover OAuth model catalogs online* – adds online discovery of account‑specific model catalogs for OpenAI Codex, xAI Grok, and GitHub Copilot, normalises the catalog and sets Grok 4.6 as the default.  

- **Open PRs with notable impact**  
  - **#5568** – Refactors the `AgentRunner` so it owns context compaction immediately before each provider call, tightening input‑ceiling enforcement and improving turn latency under pressure.  
  - **#5600** – Fixes a race where a cancelled streaming request leaves the reasoning stream open, causing the client to receive partial reasoning output without a `reasoning_end` signal.  
  - **#5536** – Addresses a security gap in `ExecTool` when `restrict_to_workspace` is enabled; now fails closed if the sandboxed shell lacks a proper sandbox, preventing path‑traversal attacks.  

These merged/closed PRs demonstrate that the team is actively tightening security, improving logging transparency, and refining the agent‑runner’s context handling.

---

### 4. Community Hot Topics  

| Item | Type | Summary | Why it matters |
|------|------|---------|----------------|
| **#5593** – *Session message rate‑limit state retains expired one‑shot sessions* | Issue | `SendSessionMessageTool` keeps a timestamp deque per source session and only purges expired entries when that same source sends again. | Leads to unnecessary memory growth and can cause stale rate‑limit state, affecting throughput. |
| **#5592** – *[bug] edit_file documentation does not state that match selectors are mutually exclusive* | Issue | The tool description fails to clarify that `occurrence`, `line_hint`, and `replace_all` cannot be used together. | Users may mis‑configure edits, resulting in unexpected matches or runtime errors. |
| **#5568** – *refactor(agent): let runner own context compaction* | PR (open) | Moves context‑pressure handling into the runner, ensuring the local input ceiling is respected even when provider‑native compaction is available. | Improves predictability of latency and reduces hidden “context‑pressure” delays. |
| **#5600** – *[bug, fix, test, priority: p2] fix(agent): close native reasoning on cancellation* | PR (open) | Guarantees that a cancelled streaming request cleanly closes the native reasoning stream, emitting `reasoning_end`. | Prevents clients from receiving incomplete reasoning output and missing termination signals. |
| **#5536** – *[bug, documentation, fix, test, security, priority: p1] fix(exec): fail closed when restricted shell lacks a sandbox* | PR (open) | Tightens security around `ExecTool` when `restrict_to_workspace` is on, handling symlinks, shell expansion, and command substitution safely. | Mitigates a critical security vector that could allow privilege escalation. |

The most actively discussed items are the **session‑rate‑limit bug (#5593)** and the **OAuth model‑catalog discovery (#5596)**, each receiving attention from the core maintainers and indicating a need for more robust session hygiene and clearer provider‑model integration.

---

### 5. Bugs & Stability  

| Severity | Issue / PR | Core Problem | Fix PR (if any) | Comments |
|----------|------------|--------------|-----------------|----------|
| **High** | **#5593** (Issue) | `SendSessionMessageTool` keeps expired timestamps alive, causing one‑shot session state to accumulate. | **#5594** (PR) – *bound session message rate‑limit state* – orders entries by latest successful send, discards expired prefixes before each send, preserving the rolling‑minute limit. | No user comments yet; the fix is in review. |
| **High** | **#5600** (PR) | Cancellation of a streaming request after native reasoning starts leaves the reasoning stream open, so the client never receives `reasoning_end`. | Same PR – adds explicit stream close on `CancelledError`. | Critical for correct UI feedback. |
| **Medium** | **#5536** (PR) | `ExecTool` relies on application‑level path checks under `restrict_to_workspace`, which miss paths formed via symlinks, shell expansion, or substitution. | Same PR – enforces closed‑failure when the sandboxed shell lacks a proper sandbox. | Security‑critical; high impact if exploited. |
| **Medium** | **#5597** (PR) | `ChannelManager` discards `RetryWaitEvent` unless progress is enabled, causing missed back‑pressure signals. | Same PR – routes retry waits through the existing progress visibility gate while preserving opt‑out behavior. | Improves user‑visible back‑pressure handling. |
| **Low** | **#5592** (Issue) | Documentation omits that match selectors (`occurrence`, `line_hint`, `replace_all`) are mutually exclusive. | No dedicated fix PR yet; a documentation update is expected. | Low‑risk but can cause user confusion. |

Overall, the project is actively addressing stability and security concerns, with concrete fix PRs already submitted for the most severe bugs.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Description | Likely Target Version |
|---------|-------------|-----------------------|
| **#5405** – *feat(skills): support manual‑only invocation* | Introduces `disable-model-invocation: true` so skills that perform side‑effects (e.g., deployment) can be hidden from the model unless explicitly allowed. | **v0.9** (next minor release) – aligns with growing need for safer, user‑controlled side‑effects. |
| **#5598** – *docs(tools): clarify edit_file selector exclusivity* | Adds explicit statements that `occurrence`, `line_hint`, and `replace_all` are mutually exclusive, and clarifies `expected_replacements` verification. | **v0.8.1** – documentation polish before the next feature‑rich release. |
| **#5568** – *refactor(agent): let runner own context compaction* | Moves compaction logic into the runner, tightening input‑ceiling enforcement. | **v0.9** – performance‑oriented changes often land in minor releases. |
| **#5594** – *fix(agent): bound session message rate‑limit state* | Improves session‑level rate limiting by purging expired entries before each send. | **v0.8.2** – bug‑fixes that affect core messaging are typically shipped quickly. |

The presence of several **documentation** and **refactor** PRs suggests the maintainers are preparing a polished, performance‑focused release (likely 0.9.x) that will also introduce the manual‑only skill mode.

---

### 7. User Feedback Summary  

- **Session‑level rate limiting** – Users report that one‑shot sessions keep expired timestamps, inflating memory and causing erratic rate‑limit behavior.  
- **Tool documentation clarity** – The `edit_file` tool’s docstring is seen as ambiguous, leading to misuse of mutually exclusive selectors.  
- **WebUI orphaned resources** – Rejected messages sometimes leave attached files and WebSocket subscriptions active, resulting in orphaned media and unwanted chat events.  
- **SkillHub install counts** – Sparse install data (many “0 installs”) appears misleading; users want cleaner metadata.  
- **Pane‑group title loss** – When a pane group collapses to a single pane, its custom title is lost, frustrating UI customisation.  
- **Default agent command** – Community expects `nanobot` to behave like `nanobot agent` out‑of‑the‑box, simplifying invocation.

These pain points highlight a desire for **more reliable session management**, **clearer tool contracts**, **cleaner UI state handling**, and **smoother developer experience** (e.g., consistent CLI defaults).

---

### 8. Backlog Watch  

| Item | Age / Activity | Why it needs attention |
|------|----------------|------------------------|
| **#5593** (Issue) | Open 1 day, 0 comments | Core session‑rate‑limit bug; fix PR #5594 is in progress but needs final review/merge. |
| **#5592** (Issue) | Open 1 day, 0 comments | Documentation ambiguity; a small PR to update the docstring is pending. |
| **#5568** (PR) | Open since 2026‑08‑27, updated 2026‑08‑30 | Large refactor of `AgentRunner`; may impact many parts of the codebase – needs thorough review and CI validation. |
| **#5405** (PR) | Open since 2026‑08‑16, updated 2026‑08‑29 | Introduces a new `disable-model-invocation` flag; requires design discussion around skill activation flow. |
| **#5536** (PR) | Open since 2026‑08‑25, updated 2026‑08‑29 | Security‑critical fix for `ExecTool`; needs verification that the sandbox enforcement works across all platforms. |
| **#5597** (PR) | Open 1 day, 0 comments | Channel retry progress handling; may affect user‑visible back‑pressure cues. |

**Maintainer focus:** Prioritise merging #5594 (session‑rate‑limit fix) and #5596 (OAuth catalog discovery) as they address high‑impact bugs and feature enhancements. Then attend to the larger refactor #5568 and security fix #5536 to ensure stability before the next release cycle.

--- 

*Prepared by the NanoBot analysis team – 2026‑08‑30.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest - 2026-08-30

## Today's Overview
On August 30, 2026, the PicoClaw project showed low overall activity with **1 open issue** and **3 pull requests** updated within the last 24 hours. Among these, **2 were closed** while **1 remained open**, indicating minimal forward momentum. No new releases occurred during this period. The project appears relatively quiet, with only one active discussion and limited contributions, suggesting either stability or reduced community engagement.

## Releases
No new releases were published as of 2026-08-30.

## Project Progress
Two pull requests were merged or closed:
1. **[PR #3315](https://github.com/sipeed/picoclaw/pull/3315)** – Added support for topics in private bot chats, correcting an issue where Telegram's `IsTopicMessage` field wasn't being checked alongside `Chat.IsForum`. This improves compatibility with bots using forum topic mode in private conversations.
2. **[PR #3337](https://github.com/sipeed/picoclaw/pull/3337)** – Resolved a hang in the agent loop caused by failures in MCP server initialization. Previously, such errors would halt all agent responses until restart. This significantly enhances reliability when integrating with external tools via MCP.

## Community Hot Topics
- **[Issue #3343](https://github.com/sipeed/picoclaw/issues/3343)** (Updated Aug 29): Highlights a critical bug where tool feedback animations repeatedly edit Telegram messages indefinitely after a failed turn, leading to over 228K API calls and rate limiting. While it has no comments or reactions yet, its impact suggests it affects real-world deployments.

## Bugs & Stability
### 1. Indefinite Message Editing Post-Failure  
   - **Status**: Open  
   - **Link**: [Issue #3343](https://github.com/sipeed/picoclaw/issues/3343)  
   - **Severity**: High — Causes excessive API usage, server-side throttling, and potential account penalties.  
   - **Fix PR Available**: No  

This is the sole bug currently under active discussion, representing a systemic stability flaw tied to how agent loops handle failed interactions in messaging contexts.

## Feature Requests & Roadmap Signals
No explicit feature requests were noted today. However, recent merges suggest ongoing focus on:
- Improving **Telegram integration robustness** (private chat topics).
- Enhancing **tool reliability** through better handling of MCP-related failures.

These signal continued investment in messaging platform fidelity and system resilience.

## User Feedback Summary
User frustration stems from unexpected behavior in long-running agent scenarios:
- The main concern (from Issue #3343) reflects dissatisfaction with error recovery mechanisms that don’t respect terminal states, causing cascading failures like spammy edits and rate limits.

There is also implicit demand for more granular control over retry logic and message lifecycle management.

## Backlog Watch
Several older PRs/issues may require attention:
- **[PR #3315](https://github.com/sipeed/picoclaw/pull/3315)** and **[PR #3337](https://github.com/sipeed/picoclaw/pull/3337)** were both labeled "[stale]" before closure/merging, possibly indicating slow review cycles.
- Any unresolved stale issues could benefit from triage automation or clearer deprecation policies.

Maintaining responsiveness to such items will be key to sustaining contributor trust and codebase quality.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest — 2026-08-30**

**1. Today's Overview**
Today's activity reflects a high-velocity development cycle, with 30 pull requests merged or closed and 6 issues updated across the repository. No new official releases were cut, though significant architectural, configuration, and CI/tooling PRs advanced through the pipeline. The community is actively reporting critical bugs in the Signal channel integrations and core runtime modules, while the maintainer team is concurrently overhauling the repository's issue intake and label taxonomy. Overall, the project health is robust in terms of contributor throughput, but stability concerns are emerging in

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-08-30**
*Data snapshot: last 24h (through 2026-08-29). 3 issues updated (1 closed, 2 active), 8 PRs updated (1 merged/closed, 7 open), 0 new releases.*

### 1. Today's Overview
IronClaw shipped a high-velocity 24-hour window with 3 issue updates, 8 PR touchpoints, and no new releases. The core pulse is on compaction/summarization boundaries, agent lifecycle extensibility, and CI/UX stability. Two issues remain actively commented (#7824, #7770), while one closed issue (#7873) aligns with a merged notification feature. Seven open PRs address everything from macOS CI gate blockers to loop-termination logic, indicating maintainer momentum but a growing surface area of framework seams. Project health is strong contributor-wise, yet token-cost predictability and lifecycle extensibility emerge as the two most pressing cross-cutting concerns.

🔗 [View Project](https://github.com/nearai/ironclaw) | 📅 Last 24h: 3 issues | 8 PRs | 0 releases

### 2. Releases
No new versions tagged in this period. The project continues on the default branch with a steady stream of PR-driven evolution rather than point-release cycles.

### 3. Project Progress
- **Merged/Closed PRs today:** `#7899` [CLOSED] `feat(notifications): publish automation pre-run failures` – introduces a durable `RunFailed` Inbox notification for automation starts that cannot proceed due to invalid configuration, bad input, or execution setup. Notification identity derives from the opaque fire reference, keeping personal Inbox publication independent of external services.
- **Features advanced via open PRs:** 
  - `#7978` – Bounds cumulative summarizer input across carried summaries and multi-message deltas (compaction guardrails).
  - `#7977` – Adds dominant repeated-output termination and interactive wall-clock capping to the default loop family.
  - `#7990` – Clarifies tool-disclosure encoding: unresolvable tool names no longer falsely stamp `FailureKind::InputEncode`.
  - `#7989` – `list_dir` now reports the specific “not found” path instead of a generic failure.
  - `#7991` – Fixes pre-push CI gate failure on macOS (two independent root causes).
  - `#7988` – Nightly codebase-graph bootstrap snapshot refresh.
- Closed issue `#7873` (automation pre-run failure notifications) was enacted via `#7899`, closing the loop on a user-facing automation reliability feature.

### 4. Community Hot Topics
| Item | Comments | 👍 | Link | Underlying Need |
|------|----------|----|------|----------------|
| **#7824** [OPEN] Context projection: Pi-style compaction barrier, structured summaries, overflow recovery | 5 | 0 | [#78

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

User Safety: safe

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

**CoPaw (agentscope‑ai/QwenPaw) Project Digest – 2026‑08‑30**  

---  

### 1. Today's Overview  
The repository shows steady community engagement: 11 issues were touched in the last 24 h (9 still open/active, 2 closed) and 7 pull‑requests were updated (all still open). No new releases were published today. Overall activity indicates active discussion around upcoming multi‑tenant capabilities and a steady stream of usability‑focused contributions, though no PRs have been merged or closed in the window, suggesting a brief pause in integration work.  

---  

### 2. Releases  
*No new releases were published today.*  

---  

### 3. Project Progress  
**Merged / Closed PRs today:** none. All 7 PRs remain open, so no features were merged or bugs fixed via PRs in the last 24 h.  

---  

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions | Summary & Link | Underlying Need |
|------|------|----------------------|----------------|-----------------|
| #7318 | Issue (question/discussion) | 14 comments, 👍 1 | Discussion on the forthcoming **QwenPaw Hub (multi‑tenant edition)** slated for v2.2.0 and what the community would like to see next. | Users want a clear roadmap for team‑oriented features (admin‑managed skills, tenant isolation, billing, etc.) and early influence on priority. |
| #7406 | Issue (feature request) | 1 comment, 👍 0 | Request for **official theming support** (accent color, font, spacing) in the desktop app. | Desire for UI personalization beyond the hard‑coded orange theme; users currently resort to manual HTML edits. |
| #7398 | Issue (feature request) | 1 comment, 👍 0 | Proposal to add a **`/btw [question]` side‑question command** (mirroring Claude Code) to ask quick queries without polluting main conversation history. | Need for lightweight, non‑intrusive clarifications during long sessions. |
| #7405 | Issue (question) | 2 comments, 👍 0 | Inquiry about the **Plan Mode** – users miss the ability to see the model’s intended steps before execution. | Demand for better visibility/control of agent planning to avoid costly roll‑backs. |
| #7356 | PR (feature) | 0 comments | **Chat scroll lock** – lets users freeze the viewport while streaming responses continue. | Improves readability of long generations. |
| #7357 | PR (feature) | 0 comments | **Tool‑call visibility toggle** – hide/show tool‑call cards in chat. | Reduces noise during normal conversation while preserving debug utility. |

The most active thread is #7318, signalling that the community’s immediate focus is shaping the next major release (v2.2.0) around multi‑tenant/team usage.  

---  

### 5. Bugs & Stability  

| Bug ID | Severity* | Status | Description | Fix PR? |
|--------|-----------|--------|-------------|---------|
| #7301 | High | Open | **MCP legacy migration** leaves empty‑env clients with a dangling credential reference → every new session fails with `CredentialNotFoundError`. | No open PR yet. |
| #7402 | Medium | Open | Empty `assistant output_text` blocks persisted in session history cause Ark Responses API to return `400 MissingParameter: input.content.text`. | No open PR yet. |
| #6770 | Low (closed) | Closed | Request to make **Chrome tab lifetime configurable** across response cycles – closed without apparent resolution. | N/A |
| #7400 | Invalid | Closed | User error (“搞错”) – not a genuine bug. | N/A |

\*Severity is inferred from impact: credential errors block all sessions (high); empty‑text poisoning affects specific provider usage (medium). No fix‑PRs are currently linked to the two open bugs, indicating they need maintainer attention.  

---  

### 6. Feature Requests & Roadmap Signals  

- **QwenPaw Hub (multi‑tenant)** – #7318 shows strong interest; likely core of v2.2.0. Expect admin‑managed skill stores, tenant‑level auth, usage reporting.  
- **Theming** – #7406 (plus occasional UI‑customization comments) suggests a settings‑page for accent/font/spacing could land in a near‑future patch (perhaps v2.2.1).  
- **Side‑question command (`/btw`)** – #7398 mirrors a popular Claude Code feature; low implementation cost, good candidate for next minor release.  
- **Plan Mode visibility** – #7405 indicates users miss the earlier “plan” view; could be addressed by exposing the existing snapshot/plan data in the UI.  
- **Console DingTalk `card_auto_layout` exposure** – #7404 is a small doc/UX tweak; likely to be merged quickly.  
- **Chat scroll lock & tool‑call toggle** – #7356 & #7357 are UI enhancements already drafted; pending review/merge.  

Overall, the roadmap appears to be shifting from core engine stability toward **team‑oriented Hub features** and **polish/UX improvements** (theming, side commands, layout controls).  

---  

### 7. User Feedback Summary  

- **Pain points:**  
  - Inability to personalize the desktop UI (hard‑coded orange/theme).  
  - Lack of a quick, non‑intrusive way to ask side questions without cluttering chat history.  
  - Missing visibility of the agent’s planned steps before execution, leading to wasted effort when the model goes off‑track.  
  - Stability issues with MCP credential handling on fresh sessions and with empty assistant blocks when using Volcengine Ark.  

- **Positive signals:**  
  - Strong enthusiasm for a multi‑tenant Hub; many users are eager to run QwenPaw in team settings.  
  - Contributions from first‑time contributors (README update, image‑size guard, media fixes) show a healthy onboarding pipeline.  
  - UI‑oriented PRs (scroll lock, tool‑call toggle) indicate users value readability and customization during long interactions.  

---  

### 8. Backlog Watch (Items Needing Maintainer Attention)  

| Item | Age | Why it matters | Suggested action |
|------|-----|----------------|------------------|
| #6874 (MCP tool‑call timeout) | ~20 days | Provides configurable per‑client timeout; addresses potential hanging tool calls. | Review & merge; align with #6724. |
| #7080 (PowerContext LTM backend) | ~13 days | Adds optional long‑term memory backend; expands memory‑management options. | Complete review; address any integration concerns. |
| #7220 (reject oversized image dimensions) | ~7 days | Prevents freezing on large‑pixel images that pass byte limit. | Straightforward fix; merge after testing. |
| #7356 (chat scroll lock) & #7357 (tool‑call toggle) | ~3 days | UI usability enhancements already drafted; high user interest. | Prioritize review; likely low risk. |
| #7403 (README update – first‑time contributor) | ~1 day | Improves onboarding clarity. | Quick merge. |
| #7301 (MCP legacy migration credential bug) | ~3 days | Blocks all new sessions for affected users; high severity. | Investigate migration path; produce fix PR. |
| #7402 (empty assistant output_text poisoning) | ~1 day | Affects specific provider (Ark) but can corrupt session history. | Add validation/filter on history write. |

---  

*All links point to the respective GitHub issue or PR under the `agentscope-ai/QwenPaw` repository.*  

---  

**Overall Health:** The project is vibrant, with active community dialogue shaping the next major release (multi‑tenant Hub) and a steady stream of UI/UX contributions. Two moderate‑to‑high severity open bugs (#7301, #7402) deserve prompt attention to avoid regressions, while several ready‑to‑merge PRs can quickly deliver requested usability improvements. Maintaining focus on bug fixes alongside the Hub roadmap will keep both stability and feature velocity on a positive trajectory.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*