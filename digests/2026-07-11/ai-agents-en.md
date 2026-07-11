# OpenClaw Ecosystem Digest 2026-07-11

> Issues: 429 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-11 01:47 UTC

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

# OpenClaw Project Digest — 2026-07-11

---

## 1. Today's Overview

OpenClaw shows **very high velocity** with 929 total items (429 issues + 500 PRs) updated in the last 24 hours. The project is in active maintenance mode with a healthy merge rate (~38% of PRs closed/merged). No new releases were cut today. The issue backlog reveals a mature project grappling with **session-state stability**, **memory management**, **multi-channel message delivery**, and **security hardening** — all hallmarks of a platform scaling across diverse transport layers (Discord, Slack, Telegram, WhatsApp, Feishu, Voice, macOS app, Web UI). The volume of P1/P0 issues with `clawsweeper:needs-maintainer-review` tags suggests maintainer bandwidth is a bottleneck.

---

## 2. Releases

**No new releases today.** The last release version is not indicated in the data. The project appears to operate on a continuous-delivery model with `dev`/`stable` npm distribution channels (see [#7669](https://github.com/openclaw/openclaw/issues/7669) requesting re-enable of `dev` tag).

---

## 3. Project Progress — Merged/Closed PRs Today (192 items)

Key merged/closed PRs signal progress on **stability**, **security**, and **cross-platform polish**:

| PR | Area | Impact |
|----|------|--------|
| [#104046](https://github.com/openclaw/openclaw/pull/104046) | Active Memory | UTF-16 safe truncation for search queries (fixes emoji corruption) |
| [#104047](https://github.com/openclaw/openclaw/pull/104047) | Web UI | UTF-16 safe workshop preview truncation |
| [#104042](https://github.com/openclaw/openclaw/pull/104042) | Web UI | Suppress login gate flash on refresh with stored token |
| [#104049](https://github.com/openclaw/openclaw/pull/104049) | Installer | Clean up temp files after failed commands |
| [#104051](https://github.com/openclaw/openclaw/pull/104051) | macOS | Start existing CLI gateway during onboarding |
| [#99681](https://github.com/openclaw/openclaw/issues/99681) | Discord | **Closed** — auto-reconnect after WS 1006 close (forces full gateway restart) |
| [#91283](https://github.com/openclaw/openclaw/issues/91283) | Security | **Closed** — `minSecurity` rank order inverted (security="full" clamped to "allowlist") |
| [#68691](https://github.com/openclaw/openclaw/issues/68691) | Sandbox | **Closed** — zombie processes under PID 1 accumulating to `pids.max` risk |
| [#44749](https://github.com/openclaw/openclaw/issues/44749) | Exec Approvals | **Closed** — concurrent `allow-always` race losing allowlist entries (last-write-wins) |
| [#27984](https://github.com/openclaw/openclaw/issues/27984) | Telegram | **Closed** — 5-20MB files cause silent deadlock, locks entire chat |
| [#78362](https://github.com/openclaw/openclaw/issues/78362) | Control UI | **Closed** — CSP blocks Zod `Function()` constructor (`eval` violation) |
| [#85714](https://github.com/openclaw/openclaw/issues/85714) | Session State | **Closed** — agent final message stranded when LLM forgets delivery tool |

**Pattern**: Recent merges disproportionately target **session lifecycle bugs**, **memory/process leaks**, **security boundary fixes**, and **channel-specific delivery failures** — confirming the project is in a hardening phase.

---

## 4. Community Hot Topics (Most Commented/Reacted)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | Issue | 20 | 2 | **Tool outputs rendering as unreadable image attachments** in long/ANSI-heavy workflows — breaks agent evidence loop |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | Issue | 16 | 1 | **Embedded prompt cache breaks** across room-event, policy, Responses boundaries — regression in long-lived sessions |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Issue | 15 | 4 | **Masked Secrets** — prevent agent from seeing raw API keys (security + prompt injection defense) |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Issue | 15 | 1 | **Gateway memory leak**: RSS 350MB → 15.5GB over days → OOM crashes (P0) |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | Issue | 14 | 0 | **Slack Block Kit support** for rich agent messages (CRM, briefings, action confirmations) |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | Issue | 13 | 10 | **Per-agent memory-wiki vault** — isolate knowledge per agent in multi-agent setups |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Issue | 11 | 0 | **Webhook hook sessions reuse** — `sessionKey` consistency for multi-turn conversations broken |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Issue | 11 | 4 | **Filesystem sandboxing config** (`tools.fileAccess.allowedPaths/denyPaths`) |
| [#90354](https://github.com/openclaw/openclaw/issues/90354) | Issue | 10 | 1 | **Bounded/validated append** for pre-compaction memory flush (guardrails on size, validation, silent failure) |
| [#84569](https://github.com/openclaw/openclaw/issues/84569) | Issue | 10 | 3 | **WhatsApp session stalls** on long `model_call` → incomplete turn, reply never delivered |

**Underlying themes**:  
- **Session-state integrity** (cache continuity, pruning, stall recovery)  
- **Security-by-default** (secret masking, filesystem sandboxing, exec approval races)  
- **Multi-channel richness** (Slack Block Kit, WhatsApp stickers, Feishu pagination)  
- **Observability gaps** (context overflow messages, queue visibility, usage reporting)

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? | Description |
|----------|-------|--------|---------|-------------|
| **P0 / Crash** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Open | No | Gateway RSS grows 350MB → 15.5GB in 2-3 days → OOM kill → `launchd-handoff` restart loops |
| **P0 / Crash** | [#87109](https://github.com/openclaw/openclaw/issues/87109) | Open | No | Heap grows 558MB → 1073MB+ at idle on macOS; cron jobs silently fail (event-loop starvation) |
| **P1 / Data Loss** | [#99241](https://github.com/openclaw/openclaw/issues/99241) | Open | No | Tool outputs collapse to `(see attached image)` — agent cannot read stdout/stderr evidence |
| **P1 / Regression** | [#102175](https://github.com/openclaw/openclaw/issues/102175) | Open | No | Embedded prompt cache breaks across room-event, policy, Responses boundaries |
| **P1 / Crash** | [#83959](https://github.com/openclaw/openclaw/issues/83959) | Open | No | Codex app-server startup retries exhaust before replacement ready → `client is closed` |
| **P1 / Delivery** | [#84569](https://github.com/openclaw/openclaw/issues/84569) | Open | [#103562](https://github.com/openclaw/openclaw/pull/103562) | WhatsApp session stalls on long model_call → incomplete turn, reply never delivered |
| **P1 / Security** | [#91283](https://github.com/openclaw/openclaw/issues/91283) | **Closed** | — | `minSecurity` rank inverted — `full` treated as most restrictive |
| **P1 / Data Loss** | [#44749](https://github.com/openclaw/openclaw/issues/44749) | **Closed** | — | Concurrent `allow-always` approvals lose allowlist entries (last-write-wins) |
| **P2 / Hang** | [#27984](https://github.com/openclaw/openclaw/issues/27984) | **Closed** | — | Telegram 5-20MB files → silent deadlock, locks entire chat |
| **P2 / Config** | [#103956](https://github.com/openclaw/openclaw/issues/103956) | Open | [#104039](https://github.com/openclaw/openclaw/pull/104039) | `session.pruneAfter` ignored — sessions grow unbounded |
| **P2 / Model** | [#101763](https://github.com/openclaw/openclaw/issues/101763) | Open | No | Hosted Molty: model selector doesn't persist — API receives `claude-opus-4.8` (dot) vs `claude-opus-4-8` (dash) |
| **P2 / Resource** | [#68691](https://github.com/openclaw/openclaw/issues/68691) | **Closed** | — | Sandbox zombie processes under PID 1 accumulate → `pids.max` risk |

**Critical cluster**: Memory leaks ([#91588](https://github.com/openclaw/openclaw/issues/91588), [#87109](https://github.com/openclaw/openclaw/issues/87109)) and session-state corruption ([#99241](https://github.com/openclaw/openclaw/issues/99241), [#102175](https://github.com/openclaw/openclaw/issues/102175), [#103956](https://github.com/openclaw/openclaw/issues/103956)) are the top stability risks. Two P1s have active fix PRs ([#103562](https://github.com/openclaw/openclaw/pull/103562) for WhatsApp, [#104039](https://github.com/openclaw/openclaw/pull/104039) for pruning).

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signals | Likelihood Next Version |
|-------|----------|---------|-------------------------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | P1 | 4👍, security + prompt-injection defense, `clawsweeper:needs-security-review` | **High** — security boundary work active |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) Filesystem Sandboxing Config | P2 | 4👍, concrete config proposal, `clawsweeper:needs-security-review` | **High** — aligns with exec-approval hardening |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) Slack Block Kit | P2 | 14 comments, **PR #103583** adds portable table blocks (foundation) | **High** — PR merged today for table primitives |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) Per-Agent Memory Wiki | P1 | 10👍, multi-agent isolation, **Closed** but likely re-opened for implementation | **Medium** — design accepted, impl pending |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) Webhook Session Reuse | P2 | Multi-turn hook conversations, `clawsweeper:linked-pr-open` | **Medium** — PR exists, needs review |
| [#90354](https://github.com/openclaw/openclaw/issues/90354) Bounded Memory Flush | P2 | Guardrails for compaction, `clawsweeper:queueable-fix` | **Medium** — compaction stability focus |
| [#7524](https://github.com/openclaw/openclaw/issues/7524) GroupScope Consolidation | P2 | 4👍, DM-style `groupScope: "main"` for groups | **Low-Medium** — niche but requested |
| [#10467](https://github.com/openclaw/openclaw/issues/10467) Multi-Lane Sub-Agent Concurrency | P2 | Bottleneck for complex workflows, single `subagent` lane | **Low** — architectural, needs design |
| [#9912](https://github.com/openclaw/openclaw/issues/9912) MaxTurns/MaxToolCalls Config | P2 | Model ignoring stop instructions (KIMI K2) | **Medium** — simple config, high impact |
| [#8355](https://github.com/openclaw/openclaw/issues/8355) Streaming TTS Pipeline | P2 | Sentence-level LLM→TTS→audio for voice calls | **Low** — significant refactor |

**Strongest signals**: Security hardening (masked secrets, filesystem sandboxing), Slack richness (Block Kit via table primitives), and session-state guardrails (pruning, max turns, bounded flush). The [#103583](https://github.com/openclaw/openclaw/pull/103583) PR for portable table blocks (closed #12602) shows feature work landing.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Unreadable tool output** | [#99241](https://github.com/openclaw/openclaw/issues/99241) 20 comments | Agents lose evidence in long/ANSI workflows — "cannot read stdout/stderr even though it's the evidence needed" |
| **Gateway OOM crashes** | [#91588](https://github.com/openclaw/openclaw/issues/99241) 15 comments | Process killed by OS every 2-3 days → restart loops, lost in-flight turns |
| **Silent cron failures** | [#87109](https://github.com/openclaw/openclaw/issues/87109) 8 comments | Memory pressure → event-loop starvation → `web_fetch`/`web_search` timeout → **no output, no push, no error** |
| **WhatsApp message loss** | [#84569](https://github.com/openclaw/openclaw/issues/84569) 10 comments | Long model calls → session stalls → reply never delivered |
| **Model selector broken** | [#101763](https://

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date of Digests:** 2026-07-11  
**Audience:** Technical Decision-Makers, AI Agent Developers  

---

## 1. Ecosystem Overview
The personal AI assistant/open-source agent landscape is highly fragmented yet dominated by a "Claw"-branded family (OpenClaw, NanoClaw, PicoClaw, IronClaw, ZeroClaw, NullClaw) alongside research-lab and enterprise variants (NanoBot/HKUDS, Hermes/Nous, LobsterAI/NetEase, CoPaw/AgentScope). Development velocity varies drastically—from massive continuous-delivery engines (OpenClaw: 929 daily items) to fully dormant repositories (TinyClaw, ZeptoClaw). Across all active projects, universal design goals include omnichannel messaging (WhatsApp, Telegram, Slack, Feishu, iMessage) and multi-agent orchestration, while the predominant engineering phase is session-state stabilization, memory-leak mitigation, and security boundary enforcement.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health / Activity Tier |
|---------|--------------|-----------|----------------|------------------------|
| **OpenClaw** | 429 | 500 | None (CD model) | Very High (Hardening) |
| **IronClaw** | 36 | 50 | None | Very High (Iterating `main`) |
| **CoPaw** | 44 | 49 (23 merged) | **v2.0.0** (+2 beta) | Intense (Migration) |
| **ZeroClaw** | 19* | 50 | None | Robust (Cautious merge) |
| **NanoBot** | 8 | 42 (17 closed) | None | High (Conflict backlog) |
| **Hermes Agent** | ~50** | ~50** | None | Active (Cross-platform) |
| **Lob

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-11

## 1. Today's Overview
NanoBot (HKUDS/nanobot) showed very high development velocity on the preceding day, with 8 issues and 42 pull requests updated (25 open, 17 closed/merged). No new releases were cut. The activity cluster centers on subagent orchestration, memory consolidation, WebUI UX polish, and stability/security hardening; however, several closed PRs carry `[conflict]` tags, indicating a non-trivial integration backlog that tempers the raw merge count. Overall project health appears active and responsive, with maintainers triaging both community features and bug reports within 24 hours.

## 2. Releases
No new releases were published (Latest Releases: None). Deployment notes and migration guidance are therefore omitted.

## 3. Project Progress
The following PRs were closed/merged as **valid** (non-conflict) and advanced the codebase:
- **#4635** `fix(tools): enforce exact edit_file line hints` — Resolves dominant wrong-occurrence failure mode in `edit_file` (closes Issue **#4634**). [PR #4635](https://github.com/HKUDS/nanobot/pull/4635)
- **#4876** `feat(webui): guide queued prompt with second Enter` — Prevents accidental mis-sent prompts; addresses WebUI bug **#4835**. [PR #4876](https://github.com/HKUDS/nanobot/pull/4876)
- **#4877** `feat(webui): highlight file previews and diffs` — Adds Prism syntax highlighting to diffs/previews with test coverage. [PR #4877](https://github.com/HKUDS/nanobot/pull/4877)
- **#4832** `fix(cli): handle CSI-u Shift+Enter` — Fixes a terminal-input regression from a prior multiline-input change. [PR #4832](https://github.com/HKUDS/nanobot/pull/4832)

*Note:* PRs **#4623** (spawn model override) and **#4622** (cron model presets) were closed with `[conflict]` tags—not merged—so their linked feature requests remain open pending rebase.

## 4. Community Hot Topics
- **Issue #4253** — *Support overriding model per conversation* (6 comments, oldest

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

1. **Today's Overview**  
The Hermes Agent project remains in active development, with 50 issues and PRs updated in the last 24h. While no new releases were published, progress includes bug fixes for desktop/TUI stability (e.g., session corruption on compaction) and workspace alignment #363. Community proposals emphasize enterprise workflows (#6330: watermark localization) and diagnostic improvements (#6299: context readability metrics). High-priority work includes stability fixes for Linux desktop builds and reconnecting MCP server processes, reflecting ongoing focus on cross-platform reliability.

2. **Releases**  
No new versions published in the last 24h.

3. **Project Progress**  
Merged PRs include desktop feature enhancements (#44130 fork remote tracking), credential security fixes (#3628 environment scans), and deployment stabilization (#3791 background lock cleanup). Closed PR #3826 added UUIDs for event differentiation, resolving UI state sync issues between desktop and TUI clients through source-invariant identifiers.

4. **Community Hot Topics**  
Top issues include:  
- #6330: Request for localization in watermark strings (72 👍), highlighting internationalization needs  
- #513: Two-phase context compression proposal (today's update discussion), addressing efficiency concerns  
- #6299: Community reaction to visibility improvements ("This would make debugging so much easier!"), emphasizing observability gaps

5. **Bugs & Stability**  
Includes desktop fullscreen freezes (#6320), TUI session corruption (#4583), and dependency crashes (#6323). Multiple fix attempts under review, indicating complex root causes. Medium-severity runtime leaks (#3892) and version mismatch regressions (#4217) persist without patches.

6. **Feature Requests & Roadmap Signals**  
Delegation per-model configuration (#567) and volatile skills (#4199) show traction with ≥3 requests each. #6330's localization proposal suggests potential for regional release planning, while enterprise focus evident in growing requests for audit logs (#3211) and telemetry controls (#6302).

7. **User Feedback Summary**  
Users report desktop stability as primary pain point ("crashes twice daily", #4382), while praising proposed changes like autocomplete improvements (#6264). Enterprise users (#3975) express appreciation for upcoming audit logging capabilities but question documentation readiness for monitoring ports.

8. **Backlog Watch**  
Critical elevation suggested for:  
- #3001: Docker Mac file permissions (2024-03-18, 700+ days old)  
- #4776: Monospace font inconsistencies (2025-06-23)  
- #5867: Memory visualization improvements (no response since 2026-02-15). Maintainers recommended triaging these "3+ year old critical blockers" in security-sensitive deployments.


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



### **Today's Overview**  
The PicoClaw project remains actively developed, with 3 issues and 18 pull requests (PRs) updated in the last 24 hours. Most activity centers on bug fixes (e.g., WhatsApp reconnection, OAuth security) and feature enhancements (e.g., typing presence, model fallback chains). Activity is driven by community contributions and automated tools like Dependabot, which updated dependencies across multiple packages. The closed issue #3178 addressing WhatsApp WebSocket timeouts marks progress in stabilizing core channels.  

---

### **Releases**  
No new releases were published today. The last version remains v0.2.9, with ongoing development focused on incremental updates rather than major version releases.  

---

### **Project Progress**  
Two PRs were merged or closed today:  
- **#3179 (closed)**: Fixed WhatsApp broadcaster reconnection after WebSocket drops, improving reliability.  
- **#3248 (merged)**: Upgraded Go to 1.25.12 to patch security vulnerabilities in the standard library.  
Key open PRs advancing include:  
- **#3239**: OAuth refresh fixes to prevent race conditions.  
- **#3240**: Native typing presence in WhatsApp replies, enhancing UX.  
- Several refactoring PRs to reduce allocations and improve efficiency (e.g., #3243–#3245).  

---

### **Community Hot Topics**  
The most active items today (by recency and open status) include:  
1. **#3240 (WhatsApp native typing presence)**: Proposing a fix to show user feedback during response delays.  
2. **#3239 (OAuth refresh semantics)**: Addressing incompatibilities with providers like OpenAI.  
3. **#3246 (security hardening)**: Adding MQTT TLS verification and OAuth timeouts.  
All lack comments/reactions, but their alignment with user-reported issues (e.g., WhatsApp reliability, OAuth errors) suggests high implicit interest.  

---

### **Bugs & Stability**  
- **Closed**: #3178 (WhatsApp timeout bug, fixed via #3179).  
- **Open**:  
  - **Medium**: #3240 (no typing feedback in WhatsApp), #3239 (OAuth race conditions).  
  - **Low**: Minor refactoring PRs reducing allocations but not critical.  
No high-severity crashes reported today, but fix PRs for lower-severity issues are pending review.  

---

### **Feature Requests & Roadmap Signals**  
- **Typing presence (WhatsApp)**: Direct user feedback request via #3240.  
- **OAuth flexibility**: #3239 indicates demand for provider-specific configurations.  
- **i18n expansion**: PR #3247 adds Czech translations, suggesting localization is a priority.  
- **Agent collaboration**: PR #2937 (opened months ago) remains a long-term roadmap pillar.  

---

### **User Feedback Summary**  
Users report pain points around:  
- **WhatsApp instability** (timeouts, lack of typing signals).  
- **OAuth reliability** (provider-specific issues).  
- **Feature gaps** (typing presence, multi-agent workflows).  
Satisfaction appears high for core functionality, but newer users expecting real-time interaction improvements (e.g., typing indicators) are vocal about missing features.  

---

### **Backlog Watch**  
Critical items needing maintainer attention:  
- **#2937 (agent collaboration)**: Stale but foundational for future scalability.  
- **#3239 (OAuth fixes)**: Open for ~24 hours, requires review to prevent provider-specific bugs.  
- **#1951 (installation scripts)**: Moved but lacks recent updates; could impact onboarding.  

---  
All links and PR/issue references point to [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw).


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑07‑11**  

---

### 1. Today's Overview  
The NanoClaw ecosystem showed moderate activity: 3 issues were updated in the last 24 h (1 newly closed, 1 opened, 1 reopened) and 25 pull requests received recent updates, with 15 still open and 10 merged/closed. No new releases were pushed, indicating the project is in a consolidation phase rather than a major version rollout. Core‑team activity dominates the PR flow, suggesting ongoing architectural refinements and bug‑fix sprints. Overall health appears stable, though a handful of long‑standing bugs remain open and require attention.

---

### 2. Releases  
- **No new releases** were published today.  
- The project continues to rely on the latest stable tag from the *main* branch, with all changes delivered via merged pull requests.

---

### 3. Project Progress  
- **Closed / merged PRs (today)**  
  - #3011 – *adapter‑declared channel defaults* (core‑team) – consolidates channel‑behavior configuration.  
  - #3010 – *adapter‑declared channel defaults (engage mode, threading, sender policy)* – same refactor, merged alongside #3011.  
  - #3009 – *move channel formatting skills (whatsapp, slack) from trunk* – cleans up skill duplication.  
  - #3007 & #3006 – *timestamp conventions fix (ISO storage + local‑time display)* – enforces UTC‑ISO storage + local display.  
  - #3005 – *stamp task rows with ISO timestamps* – aligns task timestamps with other logs.  
  - #3004 – *context‑preview tool* – adds a debugging utility for agent contexts.  
  - #2966 – *log when an errored batch is acked completed* – improves batch‑job observability.  
  - #2988 – *one‑door delivery for tasks* – enforces explicit destination routing.  
  - #3002 – *warn when a real entry blocks a shared skill symlink* – prevents silent overwrites.  
  - #3000 – *footer token numeric simplification* – fixes display of aggregate token usage.  

- **Features that advanced**  
  - Provider‑agnostic persistent memory (PR #3012, #3013) is being integrated, paving the way for cross‑provider recall.  
  - iMessage channel unification (PR #2999) consolidates local and hosted back‑ends under a single `imessage` skill.  
  - Task‑session routing now requires an explicit `to` field, eliminating silent drops (PR #2988).  

- **Fixes & stability improvements**  
  - Timestamp handling across the codebase has been standardized to ISO‑UTC storage + local display.  
  - Container‑runner logging now reports ack’d completed batches (PR #2966).  
  - Skill‑symlink conflicts are detected and warned about (PR #3002).  

---

### 4. Community Hot Topics  
| Item | Type | Comments / 👍 | Link | Underlying Need |
|------|------|---------------|------|-----------------|
| **Issue #3001** | Bug (open) | 0 / 0 | <https://github.com/qwibitai/nanoclaw/issues/3001> | Stale skill copies from pre‑refactor groups block updates; users need deterministic skill synchronization. |
| **PR #2999** | Feature (unify iMessage) | 0 / 0 | <https://github.com/qwibitai/nanoclaw/pull/2999> | Simplify channel integration – users want a single, unified iMessage skill rather than duplicated local/hosted implementations. |
| **PR #3012** | Feature (persistent memory) | 0 / 0 | <https://github.com/qwibitai/nanoclaw/pull/3012> | Long‑term memory persistence across providers is a top‑requested capability for continuity. |
| **Issue #2415** (closed) | Bug | 1 / 0 | <https://github.com/qwibitai/nanoclaw/issues/2415> | “Container config not found” on first group spawn – indicates a runtime‑configuration gap that still surfaces sporadically. |
| **PR #3014** | Fix (bounded send) | 0 / 0 | <https://github.com/qwibitai/nanoclaw/pull/3014> | Prevents messages from being sent after the turn has ended – an edge‑case that can cause silent failures. |

*Analysis*: The most discussed items are the **persistent‑memory** effort and the **iMessage unification**, both of which address long‑standing user pain points around state management and channel integration. The open bug in **Issue #3001** highlights a synchronization gap that could lead to silent drift if left unattended.

---

### 5. Bugs & Stability  
| Severity | Reported Issue | Status | Linked PR (fix) | Summary |
|----------|----------------|--------|-----------------|---------|
| **High** | #3001 – Stale skill copies silently block managed symlinks | Open | #3002 (warn on symlink conflict) | Agents created before the shared‑skills refactor retain outdated skill copies; updates never propagate, causing silent failures. |
| **Medium** | #2415 – “Container config not found” on first group spawn (closed) | Closed | — | Runtime missing of container config leads to spawn failure; fix required robust config lookup. |
| **Low** | #2389 – Wirings created via `bin/ncl` don’t auto‑create destinations, causing silent message drops (closed) | Closed | — | Absence of `agent_destinations` rows leads to swallowed responses; resolved by ensuring destination creation. |

*Ranking*: High → Medium → Low based on impact on runtime correctness and user experience.

---

### 6. Feature Requests & Roadmap Signals  
- **Persistent memory across providers** (PR #3012/#3013) – Expected to become a core capability in the next 2–3 releases, enabling agents to recall historic context without manual re‑upload.  
- **Unified iMessage channel** (PR #2999) – Likely to be merged into the *channels* branch as a standard skill; observers anticipate it will be promoted to stable in the upcoming minor version.  
- **Channel defaults declared by adapters** (PR #3010/#3011) – Signals a shift toward per‑adapter configuration; future roadmap may expose these defaults to end‑users via UI.  
- **Hardware‑specific skill packaging** – Early discussions in PR #2877 (Telegram rich rendering) suggest interest in richer native channel capabilities, which may expand to other platforms.  

*Prediction*: Features that standardize configuration (channel defaults, memory provider‑agnosticism) are moving toward production; experimental skills (iMessage unification) will likely graduate after a few review cycles.

---

### 7. User Feedback Summary  
- **Pain Points**  
  1. **Stale skill copies** cause agents to operate on outdated functionality, leading to silent errors.  
  2. **Missing container configs** on first group creation break the spawn flow.  
  3. **Silent message drops** when wirings lack destinations – users notice “no response” without clear diagnostics.  

- **Use Cases Highlighted**  
  - Multi‑agent groups that need to retain long‑term context across sessions (memory request).  
  - Uniform channel handling for iMessage to avoid duplicate SDK code.  
  - Predictable task routing where every outgoing message must target a known destination.  

- **Satisfaction / Dissatisfaction**  
  - Overall sentiment is cautiously optimistic; users appreciate the active refactor of channel behavior but are uneasy about lingering bugs that affect stability (e.g., Issue #3001).  

---

### 8. Backlog Watch  
| Item | Type | Last Updated | Comments | Watch Priority |
|------|------|--------------|----------|----------------|
| **Issue #3001** | Bug (open) | 2026‑07‑10 | 0 comments | **High** – stale skill copies still unaddressed; impacts reliability of pre‑refactor groups. |
| **PR #3014** | Fix (bounded send) | 2026‑07‑11 | 0 comments | **Medium** – implementation neat but no community reaction yet; may need reviewer attention. |
| **PR #2999** | Feature (iMessage unification) | 2026‑07‑10 | 0 comments | **Medium** – high‑value feature but lacking maintainer triage; could stall if not merged soon. |
| **Issue #2415** (closed) | Bug (closed) | 2026‑07‑10 | 1 comment | **Low** – already resolved; no further action needed unless regression appears. |
| **PR #3008** | Fix (whatsapp cachedGroupMetadata) | 2026‑07‑10 | 0 comments | **Low** – niche fix; monitor for edge‑case regressions in LID groups. |

*Takeaway*: The maintainers should prioritize **Issue #3001** and **PR #3001** (the persistent‑memory branch) for the next sprint, while ensuring that open PRs with significant architectural impact receive timely reviews.

---

**End of Digest**  

*All links point to the official NanoClaw repository on GitHub.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**1. Today's Overview**
NullClaw's development activity on 2026-07-11 shows a quiet code integration day with zero pull requests opened, updated, or merged, and no new software releases published. Despite the lack of PR movement, the issue tracker saw engagement on two critical bug reports concerning Telegram stability and A2A security, both remaining open. The backend core appears functional based on user-reported CLI checks, but integration and authorization layers are currently the focal points of community concern. Overall project health indicates active user deployment with maintainers needing to shift focus toward bug remediation and security hardening.

**3. Project Progress**
No pull requests were opened, updated, or merged in the last 24 hours, indicating a pause in codebase advancements from contributors. Consequently, no features were explicitly advanced or fixed via merged code today, and the project's visible progress is limited to issue reporting and discussion.

**4. Community Hot Topics**
- **Issue #972** ([bug] telegram channel stop respond after some idle time – https://github.com/nullclaw/nullclaw/issues/972): This is the most active thread with 2 comments. It highlights user needs for reliable, long-lived connections in messaging channels for always-on personal assistant use-cases.
- **Issue #974** (NullClaw shared bearer A2A route allows cross-caller task and context reuse – https://github.com/nullclaw/nullclaw/issues/974): Although newly created with 0 comments, it raises a structurally significant concern for multi-agent deployments. Underlying community needs center on strict tenant isolation and authoritative session scoping in agent-to-agent (A2A) communication routes.

**5. Bugs & Stability**
- **High Severity (Security / Authorization):** Issue #974 – Shared bearer A2A route allows cross-caller task and context reuse (https://github.com/nullclaw/nullclaw/issues/974). The report details that a valid bearer token holder can read and list another caller's task history and reuse their contextId, representing a multi-tenant isolation failure. No associated fix PRs exist.
- **Medium Severity (Stability / Connectivity):** Issue #972 – Telegram channel stops responding after idle time (https://github.com/nullclaw/nullclaw/issues/972). The backend remains operational (verified via `nullclaw agent -m "ping"`), but the Telegram integration drops after overnight inactivity, suggesting missing keep-alive or auto-reconnect logic. No associated fix PRs exist.

**6. Feature Requests & Roadmap Signals**
While no explicit feature requests were filed, the bug reports signal clear roadmap priorities: (1) implementation of robust session/connection keep-alive mechanisms or auto-reconnect for communication channels like Telegram, and (2) hardening of the A2A authorization model to enforce per-caller task/context scoping rather than trusting caller-supplied IDs. The next minor version will likely prioritize security patching for the A2A route and resilience improvements for chat integrations.

**7. User Feedback Summary**
Real-world users are deploying NullClaw as an always-on personal AI assistant (e.g., hosted on EC2 and interfaced via Telegram). Pain points include operational fragility of chat channels during idle periods, causing missed interactions, and concerns over data leakage between agents sharing credentials. Satisfaction with the core backend engine remains implied as functional, but integration-layer reliability and security boundaries are current dissatisfaction points requiring resolution.

**8. Backlog Watch**
- **Issue #972** (https://github.com/nullclaw/nullclaw/issues/972): Opened on 2026-06-30, this stability bug has persisted for over a week with only 2 comments and no linked remediation PR, marking it as a lingering issue needing maintainer triage.
- **Issue #974** (https://github.com/nullclaw/nullclaw/issues/974): Freshly reported, this security flaw requires immediate maintainer acknowledgment to prevent exploitation in shared or enterprise deployments. 
Neither open issue currently has an associated pull request, indicating a gap between reported defects and active development resolution.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-11

## 1. Today's Overview
IronClaw (nearai/ironclaw) showed very high development activity on 2026-07-11, with 36 issues updated (28 open, 8 closed) and 50 PRs updated (35 open, 15 merged/closed) in the last 24 hours. No new releases were cut, indicating the team is iterating directly on the `main` branch, primarily around the Reborn runtime, agent loop resilience, and MCP/tooling improvements. A large batch of bug‑bash issues (P1–P3) was triaged, and several crash/compaction regressions were promptly fixed, reflecting strong maintainer responsiveness. Overall project health is vigorous, but recurring Slack/Google integration and routine‑scheduling defects suggest the integration layer still requires hardening before broader stability.

## 2. Releases
No new releases were published for IronClaw on 2026-07-11. (Latest Releases: none.)

## 3. Project Progress (Merged/Closed PRs Today)
The following pull requests were merged or closed on the reported day, advancing fixes and foundational refactors:

* **#5967** `fix(reborn)`: Skip invalid available‑extension manifests at boot catalog load instead of crash‑looping (resolves boot crash‑loop #5966). https://github.com/nearai/ironclaw/pull/5967
* **#5895** `Fix compaction failures after tool results` (closes #5838 context‑compaction terminal errors, makes them recoverable). https://github.com/nearai/ironclaw/pull/5895
* **

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest - 2026-07-11  

## 1. Today's Overview  
LobsterAI experienced significant development activity on 2026-07-10, with 17 pull requests merged/closed (65% of daily PRs) and 1 critical bug reported. The team prioritized stability fixes (e.g., Windows title bar, IM group task routing) and feature enhancements (session grouping, workdays scheduling). A new release (2026.7.10) was launched, introducing subagent collaboration and minimizable permission prompts. The project maintains strong momentum with 2 open issues requiring attention.  

---

## 2. Releases  
**2026.7.10: LobsterAI 2026.7.10**  
- **Key Changes**:  
  - **Delegated Subagent Collaboration**: Enables multi-agent workflows by supporting nested agent interactions ([#2285](https://github.com/netease-youdao/LobsterAI/pull/2285)).  
  - **Minimizable Permission Prompts**: Users can now reduce visual clutter in cowork sessions ([#2296](https://github.com/netease-youdao/LobsterAI/pull/2296)).  
  - **Additional Fixes**: Session state preservation, memory index migration, and text formatting improvements.  

---

## 3. Project Progress  
**Merged/Closed PRs (2026-07-10)**:  
- [#2316](https://github.com/netease-youdao/LobsterAI/pull/2316): Fixed Windows title bar logo compression.  
- [#2315](https://github.com/netease-youdao/LobsterAI/pull/2315): Enabled queued follow-up processing across sessions.  
- [#2314](https://github.com/netease-youdao/LobsterAI/pull/2314): Preserved WeCom/DingTalk group ID casing in scheduled tasks.  
- [#2313](https://github.com/netease-youdao/LobsterAI/pull/2313): Ensured FIFO processing for queued steer submissions.  
- [#2311](https://github.com/netease-youdao/LobsterAI/pull/2311): Migrated full-text search (FTS) indexes for all agents.  
- [#2310](https://github.com/netease-youdao/LobsterAI/pull/2310): Added folder context attachments in Cowork.  

---

## 4. Community Hot Topics  
- **Issue #2293** ([Open](https://github.com/netease-youdao/LobsterAI/issues/2293)): *Critical User.md Overwrite Bug*  
  - **Activity**: 3 comments, high user impact.  
  - **Analysis**: Users report that modifying one agent's `USER.md` overwrites all agents' files on restart. This suggests a flawed configuration synchronization mechanism, potentially breaking multi-agent workflows.  
- **PR #1338** ([Open](https://github.com/netease-youdao/LobsterAI/pull/1338)): *Session List Time Grouping*  
  - **Activity**: Directly addresses [Issue #1337](https://github.com/netease-youdao/LobsterAI/issues/1337) (open for 3+ months).  
  - **Analysis**: Reflects user demand for better session organization in busy workspaces.  

---

## 5. Bugs & Stability  
- **Severity 1**:  
  - **[Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)**: Critical multi-agent configuration corruption. No fix PR linked yet.  
- **Severity 2**:  
  - **[Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392)** (Closed): Scheduled task toggle unresponsive. Likely fixed by [#2314](https://github.com/netease-youdao/LobsterAI/pull/2314).  

---

## 6. Feature Requests & Roadmap Signals  
- **Session Grouping** ([#1337](https://github.com/netease-youdao/LobsterAI/issues/1337)): PR [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338) is under review. Likely in next release.  
- **Workdays Scheduling** ([#1335](https://github.com/netease-youdao/LobsterAI/pull/1335)): Merged in 2026.7.10; supports Mon-Fri cron syntax.  
- **MCP JSON Import** ([#1336](https://github.com/netease-youdao/LobsterAI/pull/1336)): Enhances MCP server setup; pending review.  

---

## 7. User Feedback Summary  
- **Pain Points**:  
  - Multi-agent configurations are unstable due to file overwrites.  
  - Session lists lack time-based organization, causing navigation friction.  
- **Satisfaction**:  
  - Positive response to subagent collaboration and minimized UI elements.  
  - Mixed feedback on scheduled task reliability (fixed in [#2314](#)).  

---

## 8. Backlog Watch  
- **Issue #1337** ([Open](https://github.com/netease-youdao/LobsterAI/issues/1337)): Session time grouping request remains unaddressed.  
- **PR #1331** ([Open](https://github.com/netease-youdao/LobsterAI/pull/1331)): Error status red dot for sessions lacks final review.  
- **Issue #1392** (Closed): Requires verification that fixes stabilize the toggle behavior.  

--- 

**Project Health**: Strong development velocity with a focus on stability and user-requested features. Critical bug #2293 requires urgent attention to prevent multi-agent workflow disruptions.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑07‑11**

---

### 1. Today’s Overview  
- No issues or pull‑requests were updated or closed in the last 24 hours.  
- The only activity recorded is a single open pull‑request (#1146) that was created on 2026‑07‑09 and updated on 2026‑07‑10ד.  
- There were no releases, regressions, or new bugs reported.  
- Overall, the project is on a steady but low‑activity course, with the community still waiting on the GPT‑5.6 model support to be merged.

---

### 2. Releases  
_No new releases were published today. The latest public release remains **v3.2.1** (published 2025‑12‑18)._

---

### 3. Project Progress  
| Merge / Close | PR # | Title | Status | Comment | Link |
|---------------|------|-------|--------|---------|------|
| – | 1146 | Add GPT‑5.6 model support | Open | 0 👍, 0 reactions | [#1146](https://github.com/moltis-org/moltis/pull/1146) |

*Only one pull‑request is pending; no new features were merged or bug fixes applied on this date.*

---

### 4. Community Hot Topics  
| Item | Activity | Summary | Link |
|------|----------|---------|------|
| PR #1146 | 0 comments, 0 reactions | Adds GPT‑5.6 model support to the OpenAI / OpenAI Codex fallback catalogs, updatesBooks (???) | [#1146](https://github.com/moltis-org/moltis/pull/1146) |

*With no issues or PRs prompting discussion, the primary conversation point is the status of GPT‑5.6 integration.*

---

### 5. Bugs & Stability  
_No bugs, crashes, or regressions were reported or filed today. No corresponding fix PRs exist for today’s date._

---

### 6. Feature Requests & Roadmap Signals  
- **GPT‑5.6 Integration** – The open PR #1146 indicates a community-driven request for newer GPT‑5.6 model support.  
- *Other historical feature requests* (e.g., multi‑region heat‑map generation, unified provider win‑changelog) remain active but have not moved forward in this timeframe.

**Prediction:** If PR #1146 is merged, the next release (likely ≤ **v3.3.0**) will provide official downstream support for GPT‑5.6.

---

### 7. User Feedback Summary  
*No new user feedback, support tickets, or community comments were logged today.* Historical notes suggest users appreciate the ease of adding new model providers but have occasional friction around configuration file syntax for advanced providers.

---

### 8. Backlog Watch  
| Item | Status | Age (days) | Notes |
|------|--------|------------|-------|
| PR #1146 | Open | 2 | Awaiting review & merging; no conflicts reported. |
| Issue #1123 | Unassigned | 14 | “Spike: Automatic provider selection logic” – still pending a triage decision. |
| Issue #1098 | In‑Progress | 7 | “Refactor fallback catalog for performance” – no recent activity. |

*These items deserve priority for reviewers to maintain momentum and reduce stale ticket count.*

---

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest - 2026-07-11

## 1. Today's Overview
CoPaw is experiencing intense development activity with 44 issues and 49 PRs updated in the last 24 hours, centered around the v2.0.0 release. The project shows strong momentum with 23 PRs merged and 3 new releases published. Critical stability concerns are emerging, particularly around desktop shell sandbox functionality and memory management systems, requiring urgent attention.

## 2. Releases
Three new releases were published today:
- **v2.0.0-beta.7**: Included homepage updates and memory session propagation fixes
- **v2.0.0-beta.6**: Featured unit tests, version bumps, and envelope fixes
- **v2.0.0**: The stable release representing the culmination of extensive Runtime 2.0 refactoring and AgentScope 2.0 migration

## 3. Project Progress
Today's merged PRs advanced several key areas:
- Memory system improvements: Session ID propagation in ReMe summarize tasks (#5938)
- Website updates for v2.0.0 branding and visuals (#5940)
- Documentation refinements and version bumps (#5942, #5937)
- Core architecture stability fixes across runtime components

## 4. Community Hot Topics
Most discussed issues reveal critical user pain points:

- **#5401** [15 comments]: Console crashes with large tool-use history due to frontend rendering failures with `type: "data"` content blocks
- **#4727** [12 comments]: Migration from AgentScope 1.x to 2.0, tracking breaking changes and compatibility
- **#5273** [11 comments]: Centralized tracker for v2.0.0 pre-release bugs and regressions

These discussions indicate users are struggling with performance at scale and migration complexity.

## 5. Bugs & Stability
Critical stability issues reported today:

**HIGH SEVERITY:**
- **#5951** [5 comments]: Desktop shell sandbox causing pwsh recursive explosion and 20GB memory consumption with no shutdown option
- **#5947** [4 comments]: MCP tool access policies being ignored in v2.0.0, allowing denied tool access
- **#5952** [1 comment]: Auto-memory failing with missing module `agentscope.tool._builtin._scripts`

**MEDIUM SEVERITY:**
- **#5956**: Tool_call structure loss during context compaction causing 400 errors
- **#5950**: Chinese memory files triggering embedding 400 errors due to character-based truncation

## 6. Feature Requests & Roadmap Signals
User-requested features gaining traction:

- **#5903**: Session grouping and import/export functionality for better organization
- **#5453**: KaTeX/LaTeX rendering support for desktop app
- **#5909**: Configurable theme/skin module for customization
- **#3623**: Multi-agent session feedback mechanism for task delegation

These suggest upcoming focus on usability, customization, and enterprise collaboration features.

## 7. User Feedback Summary
Users express significant frustration with:
- Migration challenges from v1.x to v2.0.0, particularly regarding breaking changes and data compatibility
- Performance degradation with large tool histories causing frontend crashes
- Desktop shell instability making the application nearly unusable
- Memory system issues affecting embedding and summarization workflows

Mixed satisfaction with new features but critical concerns about stability regressions in the v2.0.0 release.

## 8. Backlog Watch
Long-standing issues requiring maintainer attention:

- **#3437**: Kimi code API support request still unresolved
- **#3502**: Enterprise WeChat connection instability persisting since April
- **#3432**: Feishu channel integration problems with permission handling

These represent ongoing integration challenges affecting user adoption in Chinese enterprise environments.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026-07-11**  

---

### **Today's Overview**  
ZeroClaw shows robust contributor activity today, with **19 open issues** and **50 pull requests (PRs)** updated in the last 24 hours. Only **4 PRs were merged**, reflecting cautious integration of fixes and enhancements. Notably, critical bugs like **Issue #8654** (skill-review panics) and **Issue #8936** (tool-arg JSON deep-cloning) remain unresolved, while infrastructure improvements (e.g., Alpine multi-arch images in PR #8954) and developer tooling updates (#8924) progressed. Open issues dominate areas like **Telegram channel stability**, **documentation gaps**, and **cross-provider tool integrations**, highlighting ongoing prioritization of usability and infrastructure.  

---

### **Releases**  
No new releases today.  

---

### **Project Progress**  
**Merged PRs** advanced stability and tooling:  
1. **PR #8680** fixed out-of-bounds slices in skill review logic (linked to Issue #8654).  
2. **PR #8941** removed unused `write_lock` fields in logging code, streamlining concurrency.  
3. **PR #8957** refactored skill-install error messaging via Fluent localization, improving multilingual UX.  
4. **PR #8825** expanded Telegram setup guide documentation, addressing community-reported confusion.  

**Key advancements**: Reduced regressions in skill execution, better error handling for globally used features.  

---

### **Community Hot Topics**  
1. **[#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)** [🔥 Critical Bug]  
   - **Skill-review fork panic causes daemon crash** (SIGSEGV). Community urgency highlighted by 3 comments and PR #8680 as a partial resolution.  
2. **[#8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958)** [✨ Feature Proposal]  
   - **Multi-agent selection via `?agent=` query param** for external ACP clients. Initial discussion in 0 comments, but strategic for plugin ecosystems.  
3. **[#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950)** [📊 Telegram Limitations]  
   - **Command registration overwhelm** at 100+ tools/skills. PR #8825 (Telegram docs) may alleviate low-sev UX issues.  

---

### **Bugs & Stability**  
- **High Severity**:  
  - **#8654** (Bug, High Risk): Handled in PR #8680 but requires testing.  
  - **#8929** (Bug, S2): Duplicate streamed narration post-trimming. No fix PR yet.  
  - **#8934** (Bug, S1): Gemini function calls fail due to missing metadata. Critical for LLM workflows.  
- **Medium/Low Severity**:  
  - **#8944** / **#8945** (ZeroCode UI bugs): Blocked macOS text replacements/copy. Low-risk but frequent user complaints.  

---

### **Feature Requests & Roadmap Signals**  
- **PR #8880** (SOP Approval Broker): Group-based quorum auth for plugins, a precursor to **security workflows** in future releases.  
- **PR #8954** (Alpine Images): Signals focus on **resource-constrained deployments** (e.g., Mac M1), now stabilized as merged.  
- **PR #8906** (Security Hardening): Link/image sanitization via deterministic credential detection; critical for transfer security.  

---

### **User Feedback Summary**  
- **Top Pain Points**:  
  - **Telegram instability** (Issues 5514/8950) and **tool-argument bugs** (8654, 8936) disrupt workflows.  
  - **Documentation gaps** (Issue 8810) hinder onboarding for custom media providers like Comfy Cloud (#6563).  
- **Positive Signals**: Enthusiasm for **MCP server support** (PR #8948) and **approval workflows** (#8880) suggests traction in enterprise use cases.  

---

### **Backlog Watch**  
- **Critical Open Issues**:  
  - **#8936** (High): Tool-arg JSON deep-cloning in hot path; impacts memory usage.  
  - **#8950** (Medium): Telegram command limits block usability for large toolsets.  
- **Stuck PRs**:  
  - **#8857** (Webhook plugin verification) and **#8923** (TCP outbound channels) await merger, critical for plugin ecosystems.  

---  

**Health Assessment**: ZeroClaw maintains momentum in resolving critical bugs (PR #8680, #8941) and expanding platform capabilities (MCP TCP, Alpine images). High-sev stability issues persist but align with upcoming releases. Active community contributions (e.g., PR #8825 docs rewrite) indicate strong engagement. Watchdog topics like multi-agent routing (#8958) position the project for scalable deployments.


</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*