# OpenClaw Ecosystem Digest 2026-07-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-15 01:26 UTC

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

User Safety: safe

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-07-15

### 1. Today's Overview
NanoBot is experiencing a period of intense development activity, characterized by a very high volume of Pull Request activity (65 updates in 24h) compared to a steady stream of issue reporting. The project appears to be focused on hardening the platform, specifically addressing stability in session management, channel communication (Telegram/DingTalk), and WebUI UX. With 47 PRs merged or closed in the last day, the development velocity is exceptionally high, signaling a robust maintenance phase for the current architecture.

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Project Progress
The development team has been highly productive, closing/merging 47 Pull Requests today. Key advancements include:
* **WebUI Enhancements:** Significant improvements to user experience, including adding copy actions for messages (#4930), highlighting slash commands/app mentions (#4933), and validating file paths for previews (#4935).
* **Stability & Testing:** Substantial effort in hardening the codebase with a faster CI suite (#4936) and a new scripted agent runner harness for testing tool-loops (#4631).
* **Architecture Refinement:** Refactoring channel setup and instance ownership to improve multi-instance support and reduce coupling (#4908).
* **Deployment:** New support for one-click deployment to Render via Blueprints (#4937).

### 4. Community Hot Topics
* **Heartbeat & Automation Reliability:** There is significant discussion around the "heartbeat" mechanism and the migration to cron-based execution. Users and developers are working to make response evaluation more configurable (#4915) and routing unified sessions to specific channels to ensure reliable delivery (#4928).
* **Session Management:** A focus on "unified sessions" is driving high engagement, specifically regarding how the system picks heartbeat targets and manages session locks/garbage collection (#4928, #4890).

### 5. Bugs & Stability
The following bugs were addressed or reported today, ranked by severity:
1. **High Severity (Memory/Resource Leak):** An open critical issue regarding `Session.messages` growing without bounds in long-running sessions (#4787).
2. **High Severity (Protocol/Communication):** Issues with Telegram markdown rendering reliability (#2568) and long message splitting in Telegram (#4637).
3. **Medium Severity (Logic/Integration):** 
    * `unifiedSession: true` failing to select correct targets in CLI (#4924).
    * Qwen models exposing "thinking/reasoning" content in chat responses (#4934).
    * Windows `ExecTool` corrupting PowerShell output via UTF-16 decoding errors (#4881).
4. **Resolved Today:** Issues involving `package-lock.json` synchronization (#4927), session lock leaks (#4890), and worker/restart completion delivery (#4931).

### 6. Feature Requests & Roadmap Signals
* **Hardware Expansion:** High user interest in integrating smart home ecosystems (e.g., Xiaomi speakers) for voice interaction (#1411).
* **Management Tooling:** A recurring demand for a dedicated WebUI interface for Cron Job management, as the current CLI-only approach is considered error-prone for non-technical users (#4218).
* **Advanced UX:** Features like OAuth status/expiry warnings (#4689) and DingTalk group reply enhancements (#4446) indicate a roadmap moving toward a more professional-grade, enterprise-ready assistant.

### 7. User Feedback Summary
Users are expressing a desire for "less noise"—specifically requesting that cron jobs do not send notifications unless something meaningful actually occurred (#1445). There is also clear satisfaction with the expanding WebUI capabilities, though users are noting the complexity of managing complex configurations (like cron jobs) via CLI only.

### 8. Backlog Watch
The following items require urgent maintainer attention to prevent system degradation:
* **Resource Leak (#4787):** The unbounded growth of `Session.messages` is a critical risk for production deployments.
* **Unified Session Logic (#4924):** A bug preventing correct heartbeat targets in unified mode needs a timely fix.
* **Model Transparency (#4934):** The exposure of reasoning tokens in chat responses (Qwen models) may affect the UX for many users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent – Project Digest  
**Date:** 2026‑07‑15 (24  financieras)  

---

## 1. Today's Overview  
On 15 July the project saw a moderate level of activity: 50 issues and 50 PRs were touched in the last 24 hours. Roughly 70 % of the issue updates closed bugs, while the remaining 30 % were feature‑requests or infrastructure tweaks. The majority of PRs that landed are bug‑fixes, with a handful of new feature branches ready for review. No new releases were published, but a succession of critical bug‑fix PRs hints at an imminent minor release (likely v0.18.0).  

---

## 2. Releases  
*No new releases were pushed in the last 24 hours.*  

---

## 3. Project Progress  
| PR # | Title | Status | Notes |
|------|-------|--------|-------|
| **#29552** | *fix(feishu): render markdown tables…* | **Merged** | Corrects Feishu adapter Markdown table rendering. |
| **#48732** | *fix(desktop): dispose orphaned PTYs…*-disabled | **Merged** | Prevents rogue PTY processes on Electron renderer reload. |
| **#64689** | *fix(desktop): accumulate MoA reference reasoning blocks…* | **Open** | Split reasoning blocks into separate MoA references. |
| **#64664** | *fix(pty): 16 MB reconnect‑replay buffer…* | **Open** | Enhances PTY persistence across websocket reconnects. |
| **#50969** | *feat(plugins): add thread_ownership…* | **Open** | Adds Slack thread‐ownership coordination for multi‑agent usage. |
| **#63672** | *feat(api‑server): auto‑title API sessions…* | **Open

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest - 2026-07-15  

---

## 1. **Today's Overview**  
The PicoClaw project shows active development with 3 open issues and 9 PR updates in the last 24 hours. Key highlights include the migration to the `vodozemac` library to address security concerns, ongoing optimizations for LLM integrations (notably AWS Bedrock and Anthropic), and functionality fixes for DingTalk and Feishu integrations. The maintainers are balancing feature development with bug resolution, maintaining a steady pace of progress. However, one active issue related to rate limiting remains unresolved despite updates.  

---

## 2. **Releases**  
No new releases were published in the last 24 hours.  

---

## 3. **Project Progress**  
Merged/closed PRs (5):  
- **#2982**: Fixed temperature parameter handling for AWS Bedrock's Claude Opus 4.8, resolving a 400 error (merged 2026-07-14).  
- **#3233**: Enhanced backward compatibility with PR #3222, ensuring stability in tool handling (merged 2026-07-14).  
- **#2270**: Addressed panics when handling `SecureString` in config files via reflection fixes (merged 2026-07-14).  
- **#2128**: Enforced JSON Schema `properties` validation for tools, improving compatibility with MCP servers (merged 2026-07-14).  
- **#3156**: Added per-turn token usage tracking for Pico channels to aid billing transparency (merged 2026-07-14).  

---

## 4. **Community Hot Topics**  
- **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)** (High Priority): Proposal to replace `libolm` with `vodozemac`, critical for security. Community support: 8 comments, 2 votes.  
- **[Issue #3232](https://github.com/sipeed/picoclaw/issues/3232)**: Rate limiting failures without fallback models. Stale, 1 comment, no resolution.  
- **[PR #3256](https://github.com/sipeed/picoclaw/pull/3256)**: Improves Feishu integration by enabling native audio/video playback. No comments yet but aligns with media-related feature demand.  

---

## 5. **Bugs & Stability**  
- **UT: Issue #3255** (DingTalk preview bug): Fixed in-reply chats show correct content, but chat-list previews display "PicoClaw" instead. Severity: Medium; No PR exists yet.  
- **UT: Issue #3232** (Rate limiting regression): Critical for production use cases where fallback configurations are missing.  

---

## 6. **Feature Requests & Roadmap Signals**  
- **PR #3163** (Converse prompt caching): Advancing AWS Bedrock integration. Potential next-step dependency for #3088 migration.  
- **PR #3228** (Anthropic `SystemParts`): Fixes prompt caching limitations. Indicates focus on AI provider optimization.  

---

## 7. **User Feedback Summary**  
Users prioritize stability in integrations (e.g., Fixed-bedrock CLI errors), environment configuration reliability (e.g., misconfigured rate limits), and media-rich interactions (e.g., native Feishu audio/video). Pain points include Docker container debugging and particle management in tool configs. Satisfaction is tied to responsive roadmap execution (e.g., token tracking implementation).  

---

## 8. **Backlog Watch**  
- **Issue #3232**: Stale for 4 days without maintainer engagement. Requires urgency to prevent user churn in production envs.  
- **PR #3233**: Closed but highlights breaking changes that could affect third-party integrations; ensure documentation covers new backward-compat logic.  

--- 

**Project Health**: Steady progress with mixed urgency in bug resolution vs. feature development. Security-critical issues (#3088) and production readiness fixes (#3232) demand prioritization. User satisfaction hinges on maintaining active issue triage.


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

1. **Today's Overview**  
NanoClaw shows robust development activity with 26 PR updates in the last 24 hours, including 19 open and 7 merged/closed. No new releases or issues were reported today. Key fixes include improving security validation, refining skill configurations, and enhancing message delivery reliability. The project remains focused on maintenance and incremental improvements, with no major feature releases or breaking changes at this stage.

---

2. **Releases**  
**No new releases observed** in the last 24 hours.

---

3. **Project Progress**  
Today’s progress centers on critical bug fixes and incremental enhancements:  
- **Merged**: #2728 (Telegram pairing wiring fix), #2729 (Telegram doc correction), #3042 (Dial integration into setup), #2973 (Pnpm config migration), #3043 (Telegram deep-link URL fix).  
- **Focus areas**: Security safeguards, skill configuration clarity, message delivery consistency, and Docker behavior corrections. Key contributors include sturdy4days, joevandyk, and OmriBenShoham.  
- Link to PR #3050 highlights expanded channel picker and wizard integrations.  

---

4. **Community Hot Topics**  
Rendered imperceptible due to **0 open issues** today. Analysis of recent activity suggests community priorities align with stability and usability improvements.  

---

5. **Bugs & Stability**  
**Today’s critical issues**:  
- **Security**: #2800 (prevent implicit image pulls) and #3047 (add-slack credential ordering fix).  
- **Delivery**: #2888 (inbound attachments lost) and #2516 (stale journals post-kill).  
- **Discord**: #2899 (button parsing misrouting).  
PRs exist for all but #2888 (open) and #2516 (resolved via #2750).  

---

6. **Feature Requests & Roadmap Signals**  
Early signals from PRs #3050 (Dial integration) and #2921 (skill grouping gate) suggest a focus on **integration flexibility** and **modular workflows**. However, no explicit feature requests emerged today.  

---

7. **User Feedback Summary**  
Despite zero issues today, historical reports highlight:  
- Urgency for **Telegram pairing reliability** (fixed via #2728/#2729).  
- Persistent pain points in **crew scheduling** and **add-slack** configuration (addressed partially by #3047).  
User-reported crashes in containerized workflows drove fixes like #2730 (systemd/launchd flag handling).  

---

8. **Backlog Watch**  
Long-standing tickets:  
- #2888 (inbound attachment delivery): Requires maintainer attention to resolve `fetchData()` gaps.  
- #2640 (hot-journal poll races): Documented but unresolved.  
- #2801 (router input hardening): Active discussion needed for safe parsing logic.  

---

**Key GitHub Links**  
- Merged fixes: PR #2728, #2729, #3042, #2973, #3043  
- Open critical: PR #3044 (inbound attachments), PR #2899 (Discord)


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

We are generating a project digest for IronClaw (github.com/nearai/ironclaw) for 2026-07-15 based on the provided data.

 Steps:
 1. Today's Overview: Summarize the project status from the data (issues and PRs updated in last 24h).
 2. Releases: Check if there are new releases (data says: New releases: 0, Latest Releases: None) -> omit.
 3. Project Progress: Look at merged/closed PRs (from PRs updated: 50, open:23, merged/closed:27 -> so 27 merged/closed in last 24h). We'll note the key merged PRs and what they fixed/advanced.
 4. Community Hot Topics: From the Issues and PRs, look for those with the most comments (in the Issues section, we have a list of top 30 by comment count; in PRs, we don't have comment counts but we can look for open/closed with activity). However, note that the Issues list provided is top 30 by comment count (showing 30 items, but we have 48 total). We'll pick the top ones from the Issues list (which are sorted by comment count) and also check PRs for any with high comment counts (but the PR list doesn't show comment counts, so we rely on the Issues for hot topics by comments).
 5. Bugs & Stability: Look at the Issues that are bugs (especially those marked as bug_bash or with bug labels) and are open or recently closed. We'll rank by severity (if indicated by labels like P2, P3, etc.) and note if there are fix PRs.
 6. Feature Requests & Roadmap Signals: Look for enhancement issues and PRs, and also note any roadmap-like signals (e.g., issues about releasing, versioning, or specific features).
 7. User Feedback Summary: From the issues (especially open ones) and comments, extract user pain points.
 8. Backlog Watch: Look for old issues (by creation date) that are still open and have not been addressed, or PRs that have been open for a long time.

 However, note: the data provided is for the last 24h (updated in last 24h). So we are focusing on activity in the last day.

 Let's break down:

 Today's Overview:
   - Issues updated in last 24h: 48 (36 open/active, 12 closed)
   - PRs updated in last 24h: 50 (23 open, 27 merged/closed)
   - No new releases.

   This indicates a very active day with lots of issue triage and PR activity.

 Project Progress (merged/closed PRs in last 24h: 27):
   We don't have the list of merged PRs explicitly, but we can infer from the PR list that is provided (which shows open PRs and some closed ones? Actually, the PR list says "showing top 20 by comment count" but note: the PR list provided has both open and closed? Let's check the data:

   The PRs updated in last 24h: 50 (open:23, merged/closed:27). The provided PR list says "showing top 20 by comment count", but we don't have comment counts for PRs in the data. However, we can look at the PRs that are marked as CLOSED in the list (if any) to see what was merged.

   Looking at the PR list:
     - #5896 [CLOSED] ... (Fix WebUI memory browse isolation)
     - #6095 [CLOSED] ... (fix(reborn): name blocked provider in Slack auth-unavailable notice; ...)
     - #6089 [CLOSED] ... (fix(reborn): recover resource governor from libSQL contention)
     - #6013 [CLOSED] ... (feat(agent-loop): tools-capable completion nudge for interactive coding)
     - #6065 [CLOSED] ... (P7b: extension-runtime finalize ...)
     - #6056 [CLOSED] ... (feat(extension-runtime): P7a ...)
     - #6012 [CLOSED] ... (feat(extension-runtime): P5 ...)
     - #6007 [CLOSED] ... (feat(extension-runtime): P4 ...)
     - #6013 [CLOSED] ... (already noted)
     - #6061 [OPEN] ... (so not closed)
     - #6066 [OPEN] ... (not closed)
     - etc.

   So we see several closed PRs. We'll note the key ones.

 Community Hot Topics: From the Issues list (top 30 by comment count), the top ones are:
   #5948: 5 comments (closed)
   #5889: 2 comments (closed)
   #5640: 2 comments (closed)
   #6105: 1 comment (open) ... and then many with 0 or 1 comment.

   So the most commented issue in the last 24h is #5948 with 5 comments.

   However, note: the issue list says "showing top 30 by comment count" and we have 48 total issues updated. So the top 30 are the ones with the highest comment counts. We see #5948 has 5, then two with 2, then the rest with 1 or 0.

   Therefore, the hottest topic by comments is #5948.

   But note: we also have PRs. However, the PR list doesn't show comment counts, so we cannot tell which PRs have the most comments. We'll rely on the Issues for hot topics by comments.

 Bugs & Stability: We'll look for open bugs (especially those with high severity labels) and recent bug fixes.

   From the Issues list, open bugs (with bug_bugly: OPEN) that are bug-related:
     #6105: [enhancement, e2e-coverage, reborn] ... (not a bug, but an enhancement for testing)
     #6109: [OPEN] OpenAI-compat API: ... (bug? it's about a correctness gap -> bug)
     #6108: [OPEN] [enhancement, reborn] Error fidelity: ... (enhancement but about bug reporting)
     #6107: [OPEN] [enhancement, scope: tool/builtin] ... (enhancement)
     #6106: [OPEN] [enhancement, scope: ci] ... (enhancement)
     #6104: [OPEN] [enhancement] Process: ... (enhancement)
     #6103: [OPEN] [enhancement, scope: ci] ... (enhancement)
     #6102: [OPEN] Verify FilesystemSessionThreadService ... (bug? it's about a potential issue -> bug)
     #6101: [OPEN] Extend per-thread inbound-message write serialization ... (enhancement/bug fix follow-up)
     #6100: [OPEN] One-shot context-window cache ... (bug)
     #6099: [OPEN] POST /llm/test-connection reports ok:true for ... (bug)
     #6094: [OPEN] Production-profile integration coverage ... (enhancement/test)
     #5884: [OPEN] [bug_bash_P2] Routine loses credentials after external token revocation (bug, P2)
     #6092: [OPEN] [bug_bash_P2] Slack conversation hangs in thinking state ... (bug, P2)
     #6091: [OPEN] [bug_bash_P2] Slack extension reports conflicting connection states ... (bug, P2)
     #6047: [OPEN] [bug_bash_P2] Task messages are processed and displayed out of chronological order (bug, P2)
     #6087: [OPEN] Extension catalog load failures are shown as an empty state (bug? it's about misrepresenting failure -> bug)
     #6085: [OPEN] Admin user details expose a broken Create token action (bug)
     #6083: [OPEN] Replace native confirmation dialogs with a shared Reborn modal (enhancement)
     ... and so on.

   We see several P2 bugs open: #5884, #6092, #6091, #6047.

   Also note: #6047 has a fix PR: #6096 (which is open but ready to be merged?).

 Feature Requests & Roadmap Signals: Look for enhancement issues and PRs that indicate future direction.

   We see many enhancement issues opened today (e.g., #6105, #6106, #6107, etc.) and PRs that are feature-related.

   Notably, there is a PR for WebChat v2 model selection and per-run usage/cost (#6111) and a state-machine test for Slack (#6110).

 User Feedback Summary: From the open issues, we can extract user pain points.

   Examples:
     - #5884: Routine loses credentials after token revocation -> user has to reconfigure routines after token revocation.
     - #6092: Slack conversation hangs after reconnecting -> user sees "thinking" forever.
     - #6091: Slack reports conflicting connection states -> confusion about whether Slack is connected.
     - #6047: Task messages out of order -> breaks conversation flow.
     - #6099: Test connection reports success for invalid endpoint -> misleading feedback.
     - #6087: Extension catalog load failures shown as empty state -> user thinks there are no extensions when it's a network issue.

 Backlog Watch: Look for old issues that are still open.

   We don't have the full list, but we can note from the Issues list that some issues were created a while ago and are still open.

   For example:
     #5884: created 2026-07-09, still open (as of 2026-07-14) -> 5 days old.
     #5460: created 2026-06-30, closed? Actually, #5460 is CLOSED (we see it in the list as CLOSED). So not open.

   Open issues that are old:
     #5884: 2026-07-09 (5 days)
     #5460 is closed, so skip.
     #3483: created 2026-05-11, but it's CLOSED (we see it as CLOSED in the list).

   Actually, looking at the open issues in the list (the ones marked OPEN) and their creation dates:
     #6105: 2026-07-14 (today)
     #6109: 2026-07-14
     ... most are today or yesterday.

   However, note: the issue list says "showing top 30 by comment count", so we don't see all open issues. But we know there are 36 open/active issues updated in the last 24h. Some of them might be old issues that were just updated (e.g., commented on) today.

   We can look for issues that were created long ago but updated today (which would appear in the updated list). For example, #5884 was created 2026-07-09 and updated 2026-07-14.

   So #5884 is a candidate for backlog watch.

   Similarly, #5460 is closed so not in backlog.

   Another: #5640: created 2026-07-04, updated 2026-07-14, but it's CLOSED.

   So the main backlog candidate from the list is #5884 (and maybe others that are open and old but not in the top 30 by comment count?).

   However, note: the issue list provided is only the top 30 by comment count. We don't have the full 48. But we can infer that the issues with 0 or 1 comment might be older and less discussed.

   Since we don't have the full list, we'll focus on the ones we see that are open and have been around for a few days.

   #5884: created 2026-07-09, updated 2026-07-14, open, 0 comments -> but it's a P2 bug.

   Also, note: #5889 is closed, so not backlog.

   We'll mention #5884 as a backlog item.

 Now, let's structure the digest.

 Important: We must include GitHub links for each item.

 Steps for each section:

 1. Today's Overview:
    - Active day: 48 issues updated (36 open, 12 closed), 50 PRs updated (23 open, 27 merged/closed).
    - No new releases.
    - High activity in bug fixing and feature development, particularly around Slack extension, error handling, and core agent loop.

 2. Releases: None.

 3. Project Progress:
    - We'll list some of the merged PRs (from the closed PRs in the list) that represent significant progress.

    Examples from the closed PRs:
      #5896: Fix WebUI memory browse isolation (security/privacy fix for memory browsing)
      #6095: Fix Slack auth-unavailable notice and misclassifying installation-store I/O faults (improves error messaging for Slack)
      #6089: Recover resource governor from libSQL contention (stability fix for database contention)
      #6013: Tools-capable completion nudge for interactive coding (enhances coding assistance)
      #6065, #6056, #6012, #6007: Progress on the extension-runtime train (P7b, P7a, P5, P4) - major refactoring of extension system.

 4. Community Hot Topics:
    - The most commented issue in the last 24h is #5948 (5 comments): [bug_bash_P3] Assistant incorrectly reports GitHub extension as activated when it is only installed.
      Link: https://github.com/nearai/ironclaw/issues/5948
      Underlying need: Users need accurate status reporting of extensions to avoid confusion about whether features are available.

 5. Bugs & Stability:
    - We'll list the open P2 bugs (high severity) that were updated in the last 24h and note if there are fix PRs.

    Open P2 bugs (from the list):
      #5884: Routine loses credentials after external token revocation (created 2026-07-09, updated 2026-07-14, 0 comments) 
        Link: https://github.com/nearai/ironclaw/issues/5884
        Fix PR: Not obvious from the list, but we see #6095 is related to Slack auth and might address part of it? However, #5884 is about GitHub token (PAT) and #6095 is about Slack. So likely no direct fix PR in the last 24h for #5884.

      #6092: Slack conversation hangs in thinking state after reconnecting the integration (created 2026-07-14, updated 2026-07-14, 0 comments)
        Link: https://github.com/nearai/ironclaw/issues/6092
        Fix PR: Not seen in the list (but note: we have #6096 which is about message ordering, not directly this).

      #6091: Slack extension reports conflicting connection states after disconnect (created 2026-07-14, updated 2026-07-14, 0 comments)
        Link: https://github.com/nearai/ironclaw/issues/6091
        Fix PR: Not obvious.

      #6047: Task messages are processed and displayed out of chronological order (created 2026-07-13, updated 2026-07-14, 0 comments)
        Link: https://github.com/nearai/ironclaw/issues/6047
        Fix PR: #6096 (open) - fix: serialize concurrent inbound-message writes per thread

    So for #6047, there is a fix PR (#6096) ready.

    We'll rank by severity: all are P2, but note #6047 has a fix PR so it's likely to be resolved soon.

 6. Feature Requests & Roadmap Signals:
    - Enhancement issues opened today that indicate future work:
        #6105: Extension/channel lifecycle state-machine test (install→connect→disconnect→reconnect→uninstall) + put channel canary lanes on cron
          -> Indicates focus on reliability of extensions (especially Slack) via automated testing.
        #6106: Release/staging gate: boot smoke + upgrade-path canary (seeded prior-release state, both backends) required before publish
          -> Indicates a move towards more rigorous release processes to avoid deployment issues.
        #6107: Model-input compatibility corpus: replay real tool-call argument shapes against schemas, parsers, and safety scanners in CI
          -> Indicates focus on improving tool use reliability by validating inputs in CI.

    - PRs that are feature-related and merged today (from the closed PRs list) show progress in:
        - WebChat v2 model selection and cost tracking (#6111 is open, so not merged yet, but we see similar work in progress)
        - Extension runtime train (P4, P5, P7a, P7b merged) - indicating a major refactor of

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-15

## 1. Today's Overview
LobsterAI saw **zero new issues or open PRs** in the last 24 hours. Instead, the repository performed a **maintenance sweep**: four stale issues (all filed in April 2026) were closed, and three pull requests—two backporting critical OpenClaw loop-termination fixes and one addressing a UI scroll-jump regression—were merged. No new release was cut. The activity pattern indicates a **stabilization/maintenance phase** rather than active feature development.

## 2. Releases
**No new releases** published today.

## 3. Project Progress — Merged/Closed PRs (2026-07-14)
| PR | Area | Summary | Link |
|----|------|---------|------|
| **#2331** | `openclaw`, `docs`, `main` | Backports OpenClaw v2026.6.1 dual-layer fix: a critical `tool-loop` veto now terminates the current Agent run while preserving normal plugin veto behavior and allowing sibling tools in parallel batches to finish. Includes patch validation & regression coverage. | [#2331](https://github.com/netease-youdao/LobsterAI/pull/2331) |
| **#2330** | `openclaw`, `docs`, `main` | Backports OpenClaw `7fe287b0d3`: stops the agent loop at abort boundaries after tool execution and async turn hooks. Adds validation and LobsterAI-specific regression tests. | [#2330](https://github.com/netease-youdao/LobsterAI/pull/2330) |
| **#2329** | `renderer`, `cowork` | Fixes conversation scroll jumps during streaming by respecting manual scroll position and cancelling pending auto-scroll actions. | [#2329](https://github.com/netease-youdao/LobsterAI/pull/2329) |

**Net effect**: Two critical agent-loop stability fixes (preventing runaway tool loops) and one UX polish for the co-working chat renderer.

## 4. Community Hot Topics
All four issues closed today were **stale auto-closures** (last activity 2026-04-03 → closed 2026-07-14). None had recent community discussion. The highest historical engagement was low (≤3 comments, 0 👍). No active hot topics today.

## 5. Bugs & Stability — Reported (Historical, Now Closed)
| Severity | Issue | Symptom | Fix Status |
|----------|-------|---------|------------|
| **High** | [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) | Email config “Test Connectivity” hangs indefinitely (spinner never resolves) even after restart. | **No fix PR linked**; closed as stale. |
| **Medium** | [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) | Long chat sessions produce truncated share-images (content missing). | **No fix PR linked**; closed as stale. |
| **Medium** | [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) | Scheduled-task edit → “Update Task” button intermittently unresponsive. | **No fix PR linked**; closed as stale. |
| **Low** | [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) | Language selector shows “Chinese” in English when UI language is English. | **No fix PR linked**; closed as stale. |

**Observation**: Three of four bugs affect core workflows (email, sharing, scheduling) but received no fix PRs before stale closure. Maintainers may need to triage whether to reopen or migrate to a backlog.

## 6. Feature Requests & Roadmap Signals
**No new feature requests** in the last 24 h. The closed issues were defect reports, not enhancements. Current merged PRs signal **runtime stability** (OpenClaw loop control) and **chat UX polish** as near-term priorities.

## 7. User Feedback Summary
- **Pain points** (from stale issues):  
  - Email integration unreliable (hangs on bad credentials).  
  - Long-session sharing loses content.  
  - Scheduled-task editing occasionally broken.  
  - Minor i18n inconsistency in language picker.  
- **Satisfaction signals**: No new complaints or praise today; stale closure suggests either workarounds found or users disengaged.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) Email test hang | 103 days | Blocks email feature adoption; spinner UX suggests missing timeout/error handling. | Reopen, add timeout + error toast, write regression test. |
| [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) Truncated share images | 103 days | Affects power users sharing long threads; likely virtualization/rendering limit. | Reopen, investigate canvas height cap or pagination. |
| [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) Scheduled-task update flake | 103 days | Intermittent but user-facing; may be race condition in task store. | Reopen, add integration test for edit→update flow. |
| [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) Language picker i18n | 103 days | Low severity but easy fix; improves polish. | Quick PR: use native language names in selector. |

---

**Bottom line**: Today’s activity was **housekeeping**—closing stale tickets and landing critical OpenClaw stability backports. The four unresolved user-facing bugs (email, sharing, scheduling, i18n) remain in the backlog and should be triaged before the next release cycle.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**1. Today's Overview**  
The Moltis project remains highly active, with 12 PRs updated (8 merged/closed, 4 open) and 3 issues updated (1 closed, 2 open). A new release (20260714.11) was published, reflecting ongoing development. Key improvements include bug fixes for MCP OAuth, CalDAV datetime handling, and browser tool parameter tolerance, while features like GPT-5.6 support and context command integration advance. The open-source community continues to drive enhancements for STT engines and session management.  

**2. Releases**  
- **20260714.11**: No detailed changelog provided. Likely includes dependency updates and incremental fixes from recent merged PRs (e.g., CalDAV panic fix, MCP OAuth resolution). Breaking changes or migration notes cannot be determined from available data.  

**3. Project Progress**  
Merged/closed PRs today:  
- **#1146** (OpenAI): Added GPT-5.6 model support across Sol, Terra, and Luna, updating context window configurations.  
- **#1120** (MCP): Fixed OAuth flow for servers using `resource_metadata` (e.g., Notion, Linear).  
- **#1145** (CalDAV): Resolved panic in `normalise_datetime` for non-ASCII datetime values.  
- **#1098** (Browser): Fixed tolerance for null optional parameters in browser tool calls (e.g., Gemma 4).  
- **#1136** (Agents): Coerced stringified scalar tool arguments before validation.  
- **#1139** (Gateway): Removed forced `matrix-sdk` dependency via metrics feature.  
- **#1089** (Session): Capped persisted tool results to prevent memory issues.  
- **#1141** (Deps): Automated dependency updates for `esbuild` and `vite`.  

**4. Community Hot Topics**  
- **Issue #1102**: [Feature request](https://github.com/moltis-org/moltis/issues/1102) to add FunASR/SenseVoice as local STT engine. Signals interest in open-source speech recognition.  
- **PR #1124**: [Context command support](https://github.com/moltis-org/moltis/pull/1124) for chat turns, enabling runtime context injection via config.  
- **PR #1135**: [Auto-screenshot after browser actions](https://github.com/moltis-org/moltis/pull/1135), enhancing UI/UX for chat clients.  
- **Issue #1132**: [Bug](https://github.com/moltis-org/moltis/issues/1132) preventing deletion/archival of "main" session, indicating session management gaps.  

**5. Bugs & Stability**  
- **Critical**:  
  - **#1119** (Closed): MCP OAuth `invalid_target` error for servers using `resource_metadata` (fixed in PR #1120).  
  - **#1145** (Closed): CalDAV datetime panic (fixed in PR #1145).  
- **Open**:  
  - **#1132**: Session deletion bug persists, requiring urgent attention. Severity: Medium-High.  

**6. Feature Requests & Roadmap Signals**  
- **FunASR/SenseVoice** (Issue #1102): Likely candidate for next release, aligning with open-source STT trends.  
- **Context command support** (PR #1124): Enables advanced automation use cases; probable near-term inclusion.  
- **Activity log visibility** (PR #1093): Granular controls for channel replies, suggesting a focus on collaboration features.  

**7. User Feedback Summary**  
- **Pain points**: Users struggle with session management (Issue #1132), MCP OAuth integrations (Issue #1119), and local STT engine support (Issue #1102).  
- **Satisfaction**: Fixes for OAuth (PR #1120) and CalDAV (PR #1145) address critical workflows, improving stability.  

**8. Backlog Watch**  
- **Issue #1132**: "main" session deletion bug (created June 18, updated July 14) remains unresolved, indicating a blocker for session lifecycle management.  
- **PR #1093**: Activity log visibility settings (created June 3, updated July 14) requires review for collaborative use cases. Maintainers should prioritize these for community responsiveness.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest – 2026‑07‑15

 slower in the final commit **⛂**.  

## 1. Today’s Overview
- **Cumulative activity**: 50 issues and 50 pull‑requests were touched in the last 24 h – an indicator of a healthy, active community.  
- **Issue health**: 16 open (≈32 %) vs. 34 closed (≈68 %); the majority of requests are being triaged and resolved quickly.  
- **PR health**: 24 open PRs balance 26 merged/closed PRs, showing a good merge cycle and an active code‑base.  
- **Release cadence**: The project just shipped *v2.0.0.post תג* → showing regular version bumping and a delivery rhythm that keeps features and fixes on track.  

**Bottom line:** The project is on a solid pace of improvements, with active community engagement and a dependable release cadence.

## 2. Releases
### v2.0.0.post2
- **Key changes**  
  - Added *sensitive file* handling and мегӯяд of read‑global permissions allowed via `@weidankong` (PR #6067).  
  - Minor version bump to post‑release and added regression tests for runtime security installation.  
  - No API‑breaking changes announced – the upgrade path from *v1.x* continues to work without migration steps.  
- **Migration**  
  - Verify `agentscope` dependency is ≥ 2.0, as the release relies on the updated sandbox/telemetry stack.  
  - All configuration Wrappers (e.g. `sandbox_enabled`, `approval_level`) remain backward‑compatible, but **always pull the most recent change‑log** before an upgrade to avoid stale sandbox behaviors.  

## 3. Project Progress
Merged / closed PRs today that contributed tangible fixes or features:

| PRCart | What it fixed / added | Status |
|--------|----------------------|--------|
| **#6109** | Fixed `sandbox_enabled` handling in OFF‑mode; removes unintended sandbox fallback. | Closed |
| **#6112** | Re‑implemented Zalo Bot channel as a 2.0 plugin. | Closed |
| **#6106** | Handled gzip‑encoded JSON in catalog downloads, eliminating malformed responses. | Closed |
| **#6103** | Raised CI coverage floors to match current baselines and prevent flaky test failures. | Closed |
| **#6088** | Fixed message‑queue regression in `v2.0.0.post1`; restored user queueing during long operations. | Closed |
| **#6071** | Restricted Tauri desktop auto‑updates to OSS only; reduces runtime communication overhead. | Closed |

### Feature downstreams
- #6214 (pending) – “OpenClaw‑inspired compound agent value” – still under discussion.  
- #6098 (open) – **ReMe reliability** improvements are actively integrated.

## 4. Community Hot Topics
### Issue #2291 – “Helpmañwind: Open Tasks (S1)”
- **Comments:** 64, 0 reactions – demonstrates high community interest.  
- **Analysis:** Developers are actively requesting contribution “to-do” items. The issue serves as a central hub for the community – many new contributors are claiming “Not Started” tasks.  

| PR | Link |
|----|------|
| #5922 | https://github.com/agentscope‑ai/QwenPaw/pull/5922 |
| #5966 | https://github.com/agentscope‑ai/QwenPaw/pull/5966 |

### PR #5922 – Observability integration (Langfuse) got the most discussion (≥10 comments).  
### Issue #5951 – Windows sandbox runaway – bug was reported, fixed in #5980 (merged).  

## 5. Bugs & Stability
| Issue | Severity | Summary | Fix status |
|-------|----------|---------|------------|
| #5951 | **High** | Sandbox recursion, memory blow‑up, and inability to close Windows sandbox. | Fixed in PR **#5980** (merged). |
| #5964 | **Medium** | 2.0 upgrade breaks chat‑history mapping – 500 errors on legacy conversations. | Fixed via schema migration in **#6092** (closed). |
| #6089 | **Medium** | Free‑model errors (“MODEL_EXECUTION_ERROR”) when using Opencode. | Resolved by patching model‑lookup in **#6090** (closed). |
| #6020 | **Low** | Approval routing error on DingTalk – users see approval on wrong UI. | Fixed in **#6025**. |
| #6108 | **Medium** | Context compression breaks DeepSeek API – `tool` messages decouple. | Fixed by `fix(context)` PR **#6108** (under review). |

**Overall trend:** Most regressions are identified, patched quickly, and merged within 24–48 h.

## 6. Feature Requests & Roadmap Signals
| Requested | Priority | Likely Release |
|-----------|-----------|----------------|
| *Separate channel‑tool‑call‑params vs. result* – #5976 | **P0** – decreases clutter in high‑volume channels. | v2.1 (Q3) |
| *Config UI for `generate_image_gpt`* – #6105 | **P1** – enhances developer ergonomics. | v2.0.0.post3 |
| *CIDR‑based host whitelist* – #6048 | **P1** – for secure remote integrations. | v2.1 |
| *Zყalo Bot plugin* – #6112 | **P2** – expands channel coverage. | v2.0.2 (early Q4) |
| *Sandbox‑debug UI toggles* – #6023 | **P2** – aligns with recent sandbox overhaul. | v2.0 (post‑post2) |

**Roadmap peek:** The upcoming v2.0.2 will focus on Channel‑logging, sandbox controls, and baseline UI cleanup.

## 7. User Feedback Summary
| Pain Point | Frequency | Response |
|-----------|-----------|----------|
| **Memory summarization crashes** – (#5952, #5964) | 4/50 | Fixed in PRs #5980 sup. |
| **Sandbox runaway/ACL leaks** – Windows build | 3/50 | Resolved; `sandbox_enabledիշ` toggle added. |
| **Tool‑result duplication** – (#6111) | 2/50 | Pending merge; duplicate suppression logic added. |
| **Missing config UI** – image generation | 1/50 | Added UI toggle in v2.0.0.post3. |
| **Alternatively, user‑queue blocking** – #6088 | 1/50 | Restored via PR #6088. |

Users appreciate the speed of bug fixes, but continue to complain about sandbox confinements and memory expansion when using Chinese documents.

## 8. Backlog Watch
| Item | Status | Attention Needed |
|------|--------|------------------|
| **#2291** – Help‑wanted template | Open (P0) | Requires labeling + milestone tagging. |
|angira | #6123 | Open – Scroll context limit failure; high potential impact on long‑running sessions. |
| #6108 | Open – Context compression – Critical for DeepSeek usage. |
| #6120 | Open – Auto‑memory injection filter – User complaints of loops. |
| #5980 | Jan‑2026 | Ensure regression for sandbox won’t regress. |
| #6109 | Closed – but a hot‑fix cycle; need a formal release note. |

**Action:** Prioritize code reviews for #6123, #6108, and #6120 toитиниң mitigate long‑term stability risk. The #2291 task list should be republished with current priority tags to encourage adoption.

---

*Prepared by the CoPaw analytics team.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-15

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 79 total items updated in the last 24 hours (29 issues, 50 PRs). The project is in a **feature-heavy maintenance phase** between v0.8.3 release-closeout and v0.8.4 maintenance train (target July 31). Critical security and correctness bugs dominate the open issue queue — notably a **S0 confused-deputy vulnerability** (#7947) where `execute_pipeline` bypasses per-agent tool gating, and a **P1 sandbox regression** (#8973) where Landlock blocks shell access to `/dev/null` on Fedora. Sixteen PRs were merged/closed today, including fixes for SOP cron triggers (#6686), filesystem SOP event source (#8413), and ephemeral daemon cleanup (#8582). A massive 7-PR "Hindsight memory stack" (#9064–#9069) landed to overhaul memory tiers, recall, and dashboard observability. No new releases were published.

---

## 2. Releases

**No new releases today.** The v0.8.3 milestone is in final validation (#7320), with all child trackers closed. The v0.8.4 maintenance train (#8357) targets July 31, 2026.

---

## 3. Project Progress — Merged/Closed PRs Today (16 items)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#8582](https://github.com/zeroclaw-labs/zeroclaw/pull/8582) | fix(zerocode): terminate ephemeral daemon on connection failure | Bug fix | Prevents orphaned daemon processes on connection timeout |
| [#8413](https://github.com/zeroclaw-labs/zeroclaw/pull/8413) | feat: channel-filesystem SOP event source | Feature | Enables file-watch triggers for SOP workflows |
| [#6686](https://github.com/zeroclaw-labs/zeroclaw/pull/6686) | SOP cron triggers have no production caller | Bug fix | Resolves silent no-op for `type = "cron"` SOP triggers |
| [#8678](https://github.com/zeroclaw-labs/zeroclaw/pull/8678) | advance_step has no run-status guard | Security fix | Closes approval-gate bypass in SOP engine |
| [#8631](https://github.com/zeroclaw-labs/zeroclaw/pull/8631) | headless deterministic SOP steps recorded Completed without executing | Bug fix | Fixes false-green audit trail for headless SOP runs |
| [#8695](https://github.com/zeroclaw-labs/zeroclaw/pull/8695) | Cron jobs still recall memory even when `uses_memory = false` | Bug fix | Restores stateless behavior for cron jobs |
| [#6689](https://github.com/zeroclaw-labs/zeroclaw/pull/6689) | Production SOP audit is silently no-op | Bug fix | Implements promised `sop_run_*`/`sop_step_*` memory audit keys |
| **Hindsight Memory Stack** (7 PRs) | [#9064](https://github.com/zeroclaw-labs/zeroclaw/pull/9064)–[#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9069) | Feature/Perf | Shared/system memory tiers, dedup, recall tuning, retention, async retain, dashboard integration |

**Net effect:** SOP engine reliability significantly improved; memory subsystem modernized with multi-tier architecture; zerocode/daemon lifecycle hardened.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Signals |
|------|----------|---------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) Per-sender RBAC for multi-tenant deployments | 10 | **Enterprise demand**: Customers, operators, developers need isolated workspaces, tool sets, rate limits, system prompts on single instance. Blocked by OIDC/Principal work (#8289, #8290). |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) Slack: hydrate thread context on first mention | 7 | **UX friction**: Users must re-@mention bot in threads; backfill via `conversations.replies` requested. Follow-up to #5992. |
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) Landlock blocks shell access to `/dev/null` on Fedora | 4 | **Sandbox regression**: S2 severity; shell tool completely broken on Fedora with Landlock enabled. No workaround. |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) RFC: Cross-turn conversation correlation to OTel | 3 | **Observability gap**: Need opaque `conversation.id` propagated through turn lifecycle for distributed tracing. |
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) RFC: Separate conversation history from long-term memory | 3 | **Architecture debt**: Runtime mixes `MemoryCategory::Conversation` for both session history and curated memory; breaks lifecycle semantics. |

**PRs with notable discussion:** [#8890](https://github.com/zeroclaw-labs/zeroclaw/pull/8890) (web-search failure classification), [#9029](https://github.com/zeroclaw-labs/zeroclaw/pull/9029) (OpenAI Responses vision), [#8923](https://github.com/zeroclaw-labs/zeroclaw/pull/8923) (WASM plugin raw TCP/TLS), [#8901](https://github.com/zeroclaw-labs/zeroclaw/pull/8901) (repo-wide comment hygiene).

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Component | Status | Fix PR? |
|----------|-------|-----------|--------|---------|
| **S0** | [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) `execute_pipeline` bypasses per-agent tool gating (confused deputy) | Security/Sandbox | Open | ❌ |
| **S1** | [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) SOPs not available to agent via web dashboard chat | Web Dashboard | Open | ❌ |
| **S1** | [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) Malformed tool-call args sent unvalidated to OpenRouter/OpenAI → 400/empty reply | Provider | Open | ❌ |
| **S1** | [#9052](https://github.com/zeroclaw-labs/zeroclaw/issues/9052) `channel-line` omitted from `channels-full` and `ci-all` coverage | CI/Channel | Open | ❌ |
| **S2** | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) Landlock blocks shell access to `/dev/null` on Fedora | Runtime/Daemon | Open | ❌ |
| **S2** | [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) `advance_step` lacks run-status guard → approval bypass | SOP Engine | **Closed** | ✅ Merged |
| **S2** | [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631) Headless deterministic SOP steps marked Completed without executing | SOP Engine | **Closed** | ✅ Merged |
| **S2** | [#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695) Cron jobs recall memory despite `uses_memory = false` | Memory | **Closed** | ✅ Merged |
| **S2** | [#9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001) Provider failures buried under generic retry envelope | Provider | Open | ❌ |
| **S2** | [#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) SOP audit entries never written to memory backend | Observability/SOP | **Closed** | ✅ Merged |

**Critical gaps:** S0 #7947 and S1 #8563/#8675/#9052 have no open fix PRs. Landlock regression (#8973) blocks Fedora users entirely.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Priority | Likelihood for v0.8.4 |
|---------|-------|----------|------------------------|
| **Per-sender RBAC / Multi-tenant isolation** | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | P2 | 🟡 Depends on OIDC/Principal trackers (#8289, #8290) |
| **Slack thread context backfill** | [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | P2 | 🟢 High — follow-up to shipped #5992 |
| **Pre-hook skip gates for cron/SOP triggers** | [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | P2 | 🔴 Blocked — needs design decision |
| **Centralized SOP ingress adapters** | [#8581](https://github.com/zeroclaw-labs/zeroclaw/issues/8581) | P2 | 🟢 High — reduces duplication across AMQP, filesystem, HTTP |
| **SOP routing: false `when` → next step** | [#8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719) | P2 | 🟢 High — enables multi-phase SOPs |
| **Cross-turn OTel correlation** | [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | P2 | 🟡 RFC stage — needs maintainer review |
| **Separate conversation history from long-term memory** | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | P2 | 🟡 RFC stage — architectural refactor |
| **Channel-filesystem SOP event source** | [#8413](https://github.com/zeroclaw-labs/zeroclaw/issues/8413) | P2 | ✅ **Merged today** |
| **zerorelay nominated relay** | [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*