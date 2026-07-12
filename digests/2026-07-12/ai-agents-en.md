# OpenClaw Ecosystem Digest 2026-07-12

> Issues: 464 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-12 01:50 UTC

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

**1. Ecosystem Overview**  
The personal‑AI‑assistant/open‑source agent landscape in 2026 is highly fragmented, with dozens of niche repositories each targeting a specific slice of the agent stack (e.g., UI, tool‑use, multi‑modal, calendar, or WASM‑based runtimes). Most projects are small‑to‑medium in size, exhibit rapid development and frequent bug fixes, but critical stability issues persist, especially on Windows and in configuration management. Security gating inconsistencies and data integrity concerns represent highest immediate risk to enterprise users.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest - July 12, 2026

## 1. Today's Overview
Hermes Agent shows significant activity with 50 issues and PRs updated in the last 24 hours. The project is addressing critical stability issues (memory leaks, process crashes), improving cross-platform compatibility, and enhancing security gating mechanisms. Recent activity indicates focused attention on Windows stability, message delivery reliability, and agent tool gating improvements. Despite these efforts, no new releases were made today, suggesting the team is prioritizing bug fixes and feature refinement over versioned releases.

## 2. Releases
**No new releases** - The project continues shipping fixes and features without versioned releases, consistent with their rapid iteration approach.

## 3. Project Progress
Several key contributions merged/closed today:

- **PR #61259**: Fixed API server stream model reasoning as `reasoning.delta` on `/v1/runs/events`, enabling better reasoning visibility for DeepSeek, Codex, Bedrock, and other providers
- **PR #61263**: Bumped `hindsight-client` from 0.6.1 to 0.8.4+, resolving undeclared `packaging` module blocker
- **PR #61291**: Fixed Windows desktop backend PYTHONPATH for pywin32 paths, improving Windows system reliability
- **PR #61092**: Fixed gateway session_reset.mode respect and misleading reset notice, addressing session management logic bugs
- **PR #61045**: Fixed PTY attach token scoping to prevent wrong-session reattach on dashboard navigation
- **PR #61287**: Added provider/model composition to image generation tool for backend switching
- **PR #61283**: Scoped API server secrets under multiplex profiles for better security isolation

## 4. Community Hot Topics

**Most Active Issues & PRs:**

**Issues:**
1. **#38240** *(21 comments)*: [Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/38240) - The automated freshness probe failed, with github index showing 0 < 30 required. Skills Hub depends on stale `/docs/api/skills-index.json`. Critical infrastructure concern affecting documentation and skill discovery.

2. **#35357** *(6 comments)*: [Tirith approval gate bypasses non-shell tools](https://github.com/NousResearch/hermes-agent/issues/35357) - Security gating only works for shell commands but not built-in tools like `send_message`, `write_file`, creating potential security gaps in human-in-the-loop workflows.

3. **#9403** *(5 comments)*: [Add pricing overrides, contract pricing, and sync CLI](https://github.com/NousResearch/hermes-agent/issues/9403) - Phase 4 of pricing architecture unimplemented, needing user overrides, contract pricing, and CLI sync capabilities for enterprise deployments.

**PRs:**
1. **#61259** *(unmerged)*: Stream model reasoning via `/v1/runs/events` - API server finally exposing reasoning content from DeepSeek, Codex, Bedrock, and thinking models.

2. **#61293** *(unmerged)*: 11 video editing tools added as native builtins under `video_editor` toolset - Significant expansion of built-in creative tools.

## 5. Bugs & Stability

**Most Critical (P1) Issues:**
1. **#62365**: Context compaction fabricates user requests that never happened - High-severity bug causing fabricated user requests in agent context after compaction
2. **#62557**: Hermes Desktop leaks bracketed-paste markers into user messages, corrupting persisted content (~200+ repeats) - Critical data corruption bug affecting message storage
3. **#62723**: Config migration v30→v32 silently drops platforms section in multi-profile setups (P1) - Critical compatibility bug wiping Feishu configurations from 9/10 profiles

**P2 Issues:**
1. **#53995**: Gateway pymalloc memory leak causes hard crashes on Windows - Progressive memory leak leading to OS-killed processes
2. **#62401**: Matrix gateway blocked on macOS arm64 with E2EE off - Unnecessary python-olm build dependency
3. **#62736**: Messenger components leak - process accumulation over time
4. **#62651**: High relevance persistent tools frequently use stale data - Performance/stale data caching issues

**Recently Closed Fixes:**
- **#62884**: Desktop new sessions frozen/blank on Windows (fixed)
- **#60385**: MCP server processes leak on reconnect (fixed)
- **#56058**: Desktop chat model picker persists to global config (fixed)

## 6. Feature Requests & Roadmap Signals

**High-Impact Requests:**
1. **Microsoft SkillOpt Integration** (#32925) - Self-evolving agent skills through trajectory-driven edits (2 comments, 11 upvotes)
2. **Skills always_preload config option** (#62927) - Inject skill bodies into every session for local skill reliability
3. **Video editor tools** (#61293) - Native video editing toolset (11 tools including transcription, effects, export)
4. **OpenAI-compatible provider setup in Desktop UI** (#38975) - Full custom provider configuration from GUI
5. **Edge TTS pitch control** (#62883) - Add pitch parameter configuration for text-to-speech
6. **LLM internal clock** (#62904) - Persistent time-keeping for time-relative statements

**Next Version Indicators:**
- Context7 MCP catalog gap needs filling
- Memory provider tool schema separation required
- Multi-provider composition for image generation
- Enhanced desktop electron UI controls and bubble visibility

## 7. User Feedback Summary

**Primary Pain Points:**
1. **Windows Platform Instability**: Multiple Windows-specific crashes (memory leaks, frozen sessions, broken model pickers)
2. **Security Gating Gaps**: Non-shell tools bypass Tirith approval, creating inconsistent human-in-the-loop enforcement
3. **Configuration Corruption**: Config migrations silently dropping settings, cross-profile compatibility issues
4. **MCP Process Management**: Server reconnection leaks causing resource exhaustion
5. **Provider Management**: Complex manual setup for custom providers, desktop UI lacking advanced configuration
6. **Data Integrity**: Input corruption (bracketed-paste markers), fabricated context during compaction

**User Satisfaction Drivers:**
- Rapid bug fix response (many issues closed within days)
- Feature expansion (video editing tools, reasoning streaming)
- Cross-platform improvements (Windows PYTHONPATH fixes)
- Security hardening (API secret scoping, MCP tool enforcement)

## 8. Backlog Watch

**Critical Issues Needing Immediate Attention:**

1. **#53995**: **P2 - High Priority** - Gateway pymalloc memory leak on Windows causing hard crashes - blocking Windows users since June
2. **#62557**: **P1 - Urgent** - Desktop electron input buffer corruption leaks bracketed-paste markers throughout message history - affecting message content integrity
3. **#62723**: **P1 - Critical** - Config migration v30→v32 silently drops platforms section - affecting enterprise Feishu deployments
4. **#62365**: **P1 - Critical** - Context compaction fabricates user requests - potentially causing compliance/legal issues with fabricated statements
5. **#35357**: **P3 - Security** - Tirith approval gate bypasses non-shell tools - security boundary concern with human-in-the-loop workflows

**Long-Standing Feature Gaps:**
- **#32925**: Microsoft SkillOpt integration (2+ years old, 11 upvotes)
- **#38975**: Desktop UI custom OpenAI-compatible provider setup
- **#9403**: Enterprise pricing architecture completion
- **#62675**: Context7 MCP catalog inclusion

**Technical Debt Items:**
- Multiple "needs-repro" issues indicating poor test coverage
- "sweeper:risk-session-state" indicators across many bugs
- "risk-security-boundary" markings on several platform integrations

The project shows strong development velocity with daily bug fixes and feature additions, but critical stability issues persist particularly on Windows and in configuration management. Security gating inconsistencies and data integrity concerns represent highest immediate risk to enterprise users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-12

## 1. Today's Overview
PicoClaw shows **low community activity** over the past 24 hours: zero new issues, zero releases, and only three pull-request updates (two open, one closed). The single merged PR (#3249) introduces a skill toggle and cron “RunNow” capability, indicating ongoing work on agent-skill lifecycle management. The two remaining open PRs have been stale for ~8–9 days, suggesting limited reviewer bandwidth or a backlog of larger refactors awaiting maintainer attention. Overall project health appears stable but quiet; no regressions or critical bugs were reported today.

## 2. Releases
**No new releases** published today. The latest version remains whatever was shipped prior to this date.

## 3. Project Progress
| PR | Status | Key Changes |
|----|--------|-------------|
| [#3249](https://github.com/sipeed/picoclaw/pull/3249) | **Merged/Closed** | Adds **skill enable/disable state** persisted in `workspace/skills/.skills-state.json` (per-skill root) so the prompt-cache mtime tracker automatically invalidates and hides disabled skills on the next turn without a restart. Also implements **cron “RunNow”** trigger for immediate job execution. |
| [#3225](https://github.com/sipeed/picoclaw/pull/3225) | Open (stale) | Allows `agents.list` entries to declare per-agent overrides for `max_tokens`, summarization thresholds, and `split_on_marker`; applies them when building `AgentInstance`. Removes an unused `openai_compat` import. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | Open | **DeltaChat refactor**: −200 LOC, drops legacy features/fallbacks/outdated tests, references official relay list, removes password-based email config (secrets → JSON-RPC), renames `invite_link` → `join_invite_link` + adds `show_invite_link`, documents full DeltaChat section. |

## 4. Community Hot Topics
With only three PRs and zero issues in the last 24 h, **no clear “hot topic” emerges from today’s data**. The two open PRs (#3225, #3222) have zero comments and zero reactions, indicating they have not yet attracted community discussion. The merged PR (#3249) likewise shows no comments or 👍, suggesting the change was either non-controversial or reviewed privately.

## 5. Bugs & Stability
**No bugs, crashes, or regressions were reported today** (0 issues opened/updated). None of the three PRs are labeled as bug fixes; #3249 is a feature, #3225 a configurability enhancement, and #3222 a cleanup refactor.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Per-agent runtime overrides** (max_tokens, summarization, split_on_marker) | [#3225](https://github.com/sipeed/picoclaw/pull/3225) | Medium — PR is stale but touches core agent config; maintainers may prioritize after review. |
| **DeltaChat modernization & secret handling** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | Medium-High — Large cleanup, aligns with security best practices (secrets out of config). |
| **Skill toggle + cron RunNow** (already merged) | [#3249](https://github.com/sipeed/picoclaw/pull/3249) | Delivered — may appear in next patch/minor release. |

## 7. User Feedback Summary
**No direct user feedback** (issues, comments, reactions) captured in the last 24 h. The absence of issue activity could indicate either a stable user experience or low community engagement; maintainers may wish to solicit feedback via discussions or surveys.

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#3225](https://github.com/sipeed/picoclaw/pull/3225) | 8 days (updated 2026-07-11) | Stale PR adding per-agent config overrides; touches `pkg/config` and agent instantiation — core surface area. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 9 days (updated 2026-07-11) | −200 LOC DeltaChat refactor with security-relevant changes (secret handling); needs thorough review before merge. |

> **Maintainer action suggested**: Assign reviewers to #3225 and #3222 to unblock the backlog; consider a triage label or “needs-review” ping.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑07‑12**  

---

### 1. Today's Overview  
The community saw modest but focused activity: two new open issues were filed and eight pull requests were updated in the last 24 h (six still open, two merged/closed). No new releases were cut, indicating that the project is in a consolidation phase rather than a major feature sprint. Most contributions are targeted at core runtime stability (watchdog, agent‑runner) and the next generation of guard‑based security primitives. Overall health remains **stable**, with activity concentrated on high‑impact bug fixes and architectural enhancements.

**GitHub activity snapshot** – 2 issues | 8 PR updates | 0 releases.  

---

### 2. Releases  
*No new version tags were published in the last 24 h.* Consequently, there are no change‑logs, breaking‑change announcements, or migration notes to report.

---

### 3. Project Progress  
**Merged / closed PRs today**  

| PR | Title | Merged? | Primary Impact |
|----|-------|---------|----------------|
| #3018 | *[RFC] Temporal (incognito) sessions* | ✅ Closed | Ideation of throw‑away DM sessions; will inform future privacy‑focused design. |
| #3015 | *fix: preserve phase context in live progress* | ✅ Closed | Guarantees that E2E test counts are preserved and removes warning‑filled summaries that caused test flakiness. |

**Recently merged / closed PRs (summary)**  

- **#3020** – Open; rescues undelivered unwrapped replies after a re‑wrap nudge and adds recap suppression (fixes silent drops).  
- **#2987** – Open; introduces an opt‑in local audit‑log skill for the NCL surface.  
- **#2986** – Open; adds a single decision function (`guard()`) governing all privileged actions (allow / hold / deny).  
- **#2988** – Open; enforces “one‑door” delivery for tasks, mandating explicit `to` destinations.  
- **#3019** – Open; adds a watchdog stall‑recovery mechanism for hung in‑flight tools.  
- **#3012** – Open; scaffolds provider‑agnostic persistent memory (see Section 6).  

These PRs collectively advance **runtime reliability**, **security enforcement**, **task determinism**, and **memory persistence**—the three pillars of the upcoming release cycle.

---

### 4. Community Hot Topics  
| Item | Type | Comments / Reactions | URL | Why it matters |
|------|------|----------------------|-----|----------------|
| **Issue #3017** | Windows build failure (Visual Studio 2026 + better‑sqlite3 v11.10.0) | 0 comments, 0 👍 | https://github.com/qwibitai/nanoclaw/issues/3017 | Blocks Windows developers; a regression that could stall adoption on the most common dev platform. |
| **Issue #3016** | Rate‑limit events logged as “quota” errors even when allowed | 0 comments, 0 👍 | https://github.com/qwibitai/nanoclaw/issues/3016 | Generates noisy logs that obscure real failures; erodes trust in telemetry. |
| **PR #3020** | Rescue undelivered unwrapped replies & recap suppression | 0 comments, 0 👍 | https://github.com/qwibitai/nanoclaw/pull/3020 | Directly solves silent drop complaints from maintainers and power users. |
| **PR #3019** | Stall watchdog recovery from hung tools | 0 comments, 0 👍 | https://github.com/qwibitai/nanoclaw/pull/3019 | Critical for high‑throughput agent groups; prevents container OOM kills after 30‑minute idle periods. |

The **most talked‑about** items are the Windows compilation breakage (Issue #3017) and the spurious rate‑limit log noise (Issue #3016). Both involve platform stability and observability—core concerns for the broader developer community.

---

### 5. Bugs & Stability  
| Severity | Bug / Crash | Reported In | Fix‑in‑PR (if any) | Comments |
|----------|------------|-------------|-------------------|----------|
| **Critical** | Build fails on Windows 11 with VS 2026 + better‑sqlite3 v11.10.0 (Issue #3017) | Windows dev environment | – (open) | Prevents many contributors from testing locally; high priority for a patch release. |
| **High** | Watchdog stalls causing container OOM kills after 30‑min idle (Issue #3019) | Busy agent groups | **#3019** (open, fix in progress) | Already being addressed; will be merged once tests pass. |
| **Medium** | Rate‑limit logged as quota errors even when allowed (Issue #3016) | All environments | – (open) | Generates false alerts; slated for a logging‑level adjustment. |
| **Medium** | Silent drop of unwrapped replies (PR #3020) | Agent‑runner | **#3020** (open) | Directly mitigates data loss; likely to land in next stable tag. |
| **Low** | Test‑flaky warning‑overflow in live‑progress (fixed in #3015) | CI pipeline | **#3015** (closed) | Already resolved; improves test reliability. |

---

### 6. Feature Requests & Roadmap Signals  
| Requested Feature | PR / Issue | Likely Release | Rationale |
|-------------------|------------|----------------|-----------|
| **Provider‑agnostic persistent memory** | #3012 (open) | Next minor (vX.Y) | Enables cross‑provider state sharing; already scaffolded, awaiting implementation. |
| **Audit‑log skill (opt‑in)** | #2987 (open) | Mid‑term (vX.Y+1) | Aligns with compliance & debugging needs; requires UI/UX work. |
| **Guard‑seam decision function** | #2986 (open) | Core upcoming (vX+1) | Centralizes privileged‑action gating; already merged into CI. |
| **Temporal (incognito) sessions** | #3018 (closed RFC) | Future major (vZ) | Design shared for feedback; may re‑emerge as a concrete feature after community vetting. |
| **One‑door delivery for tasks** | #2988 (open) | Immediate (next patch) | Improves predictability of message routing; already merged into core. |

These signals indicate a **roadmap leaning toward enhanced observability, security gating, and cross‑provider state management**.

---

### 7. User Feedback Summary  
- **Pain Point 1 – Windows Build Breakage** – Multiple developers reported that a recent update to `better-sqlite3` together with the VS 2026 toolchain causes compilation failures, halting contribution on the dominant Windows platform.  
- **Pain Point 2 – Log Noise from Rate Limiting** – Users see every normal request logged as a “quota” error, which drowns out genuine throttling events and reduces log usefulness.  
- **Pain Point 3 – Silent Reply Drops** – When agents omit the `<message to>` wrapper, replies can be silently discarded; users expect explicit delivery confirmation.  
- **Positive Signal** – Strong interest in audit‑log capabilities and persistent memory, reflecting a desire for richer debugging and stateful interactions.  

Overall satisfaction appears **moderate**: while core runtime stability is improving, platform‑specific regressions and noisy telemetry are the most vocal sources of dissatisfaction.

---

### 8. Backlog Watch  
| Item | Type | Age | Attention Needed |
|------|------|-----|------------------|
| **Issue #3017** (Windows compile fail) | Bug | 1 day (open) | High – requires immediate maintainer triage / CI fix. |
| **Issue #3016** (Rate‑limit log noise) | Bug | 1 day (open) | Medium – logging level adjustment needed. |
| **PR #3012** (Persistent memory scaffold) | Feature | 2 days (open) | Medium – implementation pending after maintainer review. |
| **PR #2987** (Audit‑log skill) | Feature | 2 days (open) | Medium – design clarification and status update required. |
| **PR #3019** (Watchdog stall recovery) | Bug/Fix | 1 day (open) | High – already in review; ensure merge before next tag. |

These items sit in the **critical path** for the upcoming release cycle; maintainers should prioritize triage and merge approvals to keep the project momentum steady.

---

**Bottom Line:** NanoClaw remains technically healthy, with focused activity on stability patches and architectural hardening. The most pressing external blockers are Windows build failures and misleading log entries; addressing them promptly will preserve developer confidence and keep the project’s roadmap on schedule.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026‑07‑12**  
*Generated from GitHub activity (issues, PRs, releases) for the repository [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*  

---

### 1. Today's Overview  
The project shows low but steady activity: two issues were updated in the last 24 h, both still open, and no pull requests were touched. No new releases have been cut recently, indicating the maintainers are currently focused on triaging existing reports rather than shipping new binaries. Overall health is stable—core functionality appears to be working (the Telegram backend still responds to manual pings), but there are outstanding reliability concerns that need attention.

### 2. Releases  
*No new releases were published in the last 24 h.*  
Thus there are no version changes, breaking changes, or migration notes to report for today.

### 3. Project Progress  
- **Merged/closed PRs:** 0 (none updated today).  
- **Features advanced / bugs fixed:** None reported via PRs today. Progress is therefore limited to issue discussion and investigation rather than code integration.

### 4. Community Hot Topics  
| Item | Type | Comments / Reactions | Link | Underlying Need |
|------|------|----------------------|------|-----------------|
| **#975** – Add `grok-cli` provider | Feature request (open) | 1 comment, 0 👍 | <https://github.com/nullclaw/nullclaw/issues/975> | Users want to leverage their existing Grok subscription via the CLI, mirroring the pattern already used for Claude, Codex, and Gemini providers. This would expand the model ecosystem without requiring a new API key flow. |
| **#972** – Telegram channel stops responding after idle time | Bug report (open) | 3 comments, 0 👍 | <https://github.com/nullclaw/nullclaw/issues/972> | The Telegram integration appears to lose its connection after prolonged inactivity (e.g., overnight). Users rely on the bot being always‑available, so they need a keep‑alive or reconnection mechanism. |

The Telegram bug (#972) currently has the most engagement (3 comments), indicating it is a noticeable pain point for at least a subset of the user base. The Grok‑CLI request (#975) reflects a growing interest in supporting additional commercial LLMs through existing CLI auth sessions.

### 5. Bugs & Stability  
- **#972 – Telegram idle disconnect**  
  - *Severity:* Medium‑High (affects reliability of a core communication channel).  
  - *Status:* Open, no linked fix PR.  
  - *Analysis:* The bot works when manually triggered (`nullclaw agent -m "ping"`), but the underlying Telegram client likely closes the socket after a timeout. A typical fix would involve adding a periodic ping or enabling Telegram’s `getUpdates` long‑polling with appropriate keep‑alive settings.  

No other bugs were reported today.

### 6. Feature Requests & Roadmap Signals  
- **Grok‑CLI provider (#975)** – Aligns with the project’s existing pattern of wrapping CLI tools (`claude-cli`, `codex-cli`, `gemini-cli`). If the maintainer accepts the request, we can expect a new provider entry in `src/provider_probe.zig` and associated tests in the next minor release.  
- **Implicit need for better connection handling** – The Telegram issue suggests a broader need for robust idle‑state management across all chat adapters. Addressing this could be bundled into a “stability” sprint rather than a feature release.

### 7. User Feedback Summary  
- **Pain points:**  
  - Users experience dropped Telegram conversations after nightly idle periods, requiring manual restarts or re‑authentication.  
  - There is enthusiasm for integrating Grok via its CLI, indicating users value the ability to reuse existing authenticated sessions rather than manage separate API keys.  
- **Satisfaction:**  
  - The core agent (`nullclaw agent`) still responds correctly to direct commands, showing that the backend processing pipeline is functional.  
  - No negative sentiment or complaints about performance or correctness were observed in the limited comment set.  

### 8. Backlog Watch  
| Issue | Age (days) | Why it matters | Suggested action |
|-------|------------|----------------|------------------|
| **#972 – Telegram idle disconnect** | 12 (created 2026‑06‑30) | Affects production‑grade deployments where the bot must be always‑on. | Assign a maintainer to reproduce the timeout, examine the Telegram client library usage, and implement a keep‑alive/reconnect strategy. |
| **#975 – Grok‑CLI provider** | 1 (created 2026‑07‑11) | Fresh feature request; low effort if following existing provider template. | Review the proposal, confirm licensing compatibility, and consider adding it to the next release cycle (potentially v0.x.x). |

No pull requests are currently stalled; the backlog consists solely of these two open issues.

---

**Summary:**  
Today’s activity is confined to issue triage. The most pressing item is the Telegram idle‑disconnect bug (#972), which impacts reliability. A new feature request for a Grok‑CLI provider (#975) shows community interest in expanding supported LLMs. Maintainers should prioritize stabilizing the Telegram adapter while evaluating the Grok‑CLI addition for the upcoming release. No releases or PR movement today indicates a brief lull in development velocity.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI – Project Digest (2026‑07‑12)**  

---

### 1. Today's Overview  
The repository shows a quiet day with **no releases** and **no merged PRs**. Activity is limited to three **open, stale issues** and one **open, stale pull‑request** that together address UI/UX enhancements: bulk expansion/collapse of ToolUse blocks, a red‑dot badge for errored sessions, and missing notification options for newly created scheduled‑task channels. All of these items have been pending for more than three months, indicating low immediate development velocity.

### 2. Releases  
*None* – no new versions were published on this date.

### 3. Project Progress  
- **Merged / Closed PRs today:** *None*  
- **Opened PRs today:** #1327 ([MaoQianTu](https://github.com/netease-youdao/LobsterAI/pull/1327)) – implements the “expand/collapse‑all” toggle for multiple ToolUse blocks. The PR is still **open** and **stale**; no merge or review activity has occurred yet.  

The only code change referenced is in `src/renderer/components/cowork/CoworkSessionDetail.tsx`, adding a `forceExpanded?` prop and splitting the local expansion state.

### 4. Community Hot Topics  
All open issues have similar engagement (1 comment, 0 👍), making them equally “hot” in terms of conversation:

| Issue | Comments | 👍 | Core Need | Link |
|-------|----------|----|-----------|------|
| **#1326** – Bulk expand/collapse for ToolUse blocks | 1 | 0 | One‑click control of multiple tool‑call expansions to reduce manual clicks. | [netease-youdao/LobsterAI/issues/1326](https://github.com/netease-youdao/LobsterAI/issues/1326) |
| **#1329** – Missing notification options for new scheduled‑task channels | 1 | 0 | Ability to choose notification preferences when creating a scheduled‑task channel instead of a forced “no‑notification” default. | [netease-youdao/LobsterAI/issues/1329](https://github.com/netease-youdao/LobsterAI/issues/1329) |
| **#1330** – Red‑dot badge for errored sessions in the sidebar | 1 | 0 | Visual indicator (red static dot with glow) for sessions that error out, matching existing blue indicators for running/unread states. | [netease-youdao/LobsterAI/issues/1330](https://github.com/netease-youdao/LobsterAI/issues/1330) |

The low comment count suggests these issues are **well‑understood** but lack immediate champion action.

### 5. Bugs & Stability  
- **Severity ranking (based on user impact):**  
  1. **#1329** – Functional bug: new scheduled‑task channels default to “no notification” with no alternative, potentially breaking workflow for users who rely on alerts. No fix PR yet.  
  2. **#1330** – UX bug: missing visual cue for errored sessions makes debugging slower; not a crash but a usability regression. No fix PR yet.  
  3. **#1326** – Cosmetic/UX issue: tedious manual expansion of multiple ToolUse blocks; low impact but reduces interaction efficiency. PR #1327 is pending.  

*Current fix status:* **0** of the three issues have an associated PR ready for review.

### 6. Feature Requests & Roadmap Signals  
| Feature | Source | Likelihood (next release) | Rationale |
|---------|--------|---------------------------|-----------|
| Bulk “expand/collapse all” for ToolUse blocks | Issue #1326 / PR #1327 | **High** | The implementation is already written (PR #1327) and awaiting merge. |
| Red‑dot error badge in session list | Issue #1330 | **Medium** | Requires CSS changes and a small UI tweak; similar visual patterns already exist for running/unread states. |
| Configurable notification options for scheduled‑task channels | Issue #1329 | **Medium** | Involves backend form validation and UI dropdowns; a higher‑risk change but a clear user need. |

---

### 7. User Feedback Summary  
- **Pain point #1:** In Cowork sessions with many ToolUse blocks, users must click each block individually to expand/collapse – a repetitive, time‑consuming action.  
- **Pain point #2:** When a Cowork session errors, there is no visual cue in the sidebar; users must open each session manually to locate errors, slowing troubleshooting.  
- **Pain point #3:** The scheduled‑task notification creation flow forces “do not notify,” leaving users unable to set alerts for periodic updates.  

Overall satisfaction appears low on these three fronts, especially for power users who rely on quick visual feedback and efficient channel management.

### 8. Backlog Watch  
The following items have been **open >90 days** and still lack maintainer attention or a merging PR:

| Item | Age (approx.) | Status | Why it matters |
|------|---------------|--------|----------------|
| Issue #1326 – Bulk expand/collapse | ~3 months | Open, stale | Ready implementation (PR #1327) – ready to merge. |
| Issue #1329 – Missing notification options | ~3 months | Open, stale | Functional bug affecting scheduled‑task usability. |
| Issue #1330 – Error‑state badge | ~3 months | Open, stale | Improves visibility and debugging efficiency. |
| PR #1327 – Bulk expand/collapse code | ~3 months | Open, stale | Implements the fix for #1326; currently waiting for review/merge. |

These four items represent **high‑priority** work that could be tackled in the next minor release to improve UI consistency, user experience, and stability.

---

**Overall health assessment:** The project is in a **maintenance‑heavy** phase. The core development velocity is low, with only a single PR awaiting merge and three long‑standing issues awaiting resolution. Prioritizing the already‑implemented PR (#1327) and the two UI‑focused enhancements (#1329, #1330) would likely provide the most immediate value to users while reducing backlog.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑07‑12**  
*Source: GitHub repository moltis-org/moltis (data snapshot for the last 24 h)*  

---

### 1. Today's Overview  
The repository showed minimal activity in the past 24 hours: no issues were opened or updated, no releases were published, and only a single pull request was modified. PR #1147 remains open and addresses a long‑standing bug in the CalDAV client where the `list_events` time‑range argument was ignored. Overall project health appears stable, but development momentum is currently low, indicating either a lull between feature cycles or that maintainers are focusing on other tasks (e.g., testing, documentation, or internal tooling).  

### 2. Releases  
*No new releases were recorded in the last 24 h.*  

### 3. Project Progress  
- **Merged/Closed PRs:** None today.  
- **Open PR Activity:** PR #1147 ([fix(caldav): honor time range in list_events via server-side calendar…](https://github.com/moltis-org/moltis/pull/1147)) was updated by author **thoscut** on 2026‑07‑11. The change binds the `_range` parameter correctly so that the `start`/`end` arguments supplied to the `list_events` tool are now respected by the CalDAV server, aligning behavior with documentation. No further progress (e.g., review, merge) has occurred yet.  

### 4. Community Hot Topics  
- **Most Active Item:** PR #1147 is the sole item with any recent activity (1 update, 0 comments/reactions).  
- **Underlying Need:** Users have encountered a discrepancy where the `list_events` tool’s time‑range filters were ineffective, causing unnecessary data transfer and potential performance issues. The fix resolves this by ensuring client‑side range parameters are forwarded to the server, directly addressing a usability pain point reported in the documentation/usage feedback.  

### 5. Bugs & Stability  
- **Reported Bugs Today:** None (0 issues).  
- **Known Bug with Fix PR:** The CalDAV time‑range bug described in PR #1147 is the only identified issue with an associated fix awaiting review. Severity: **Medium** – it leads to inefficient queries and contradicts the API contract but does not cause crashes or data loss.  

### 6. Feature Requests & Roadmap Signals  
- No new feature request issues were logged today.  
- The resolved bug in PR #1147 suggests a focus on **correctness and API fidelity** for the CalDAV integration. If the maintainers prioritize stabilizing existing integrations, upcoming work may include similar range‑handling fixes for other calendar/task APIs (e.g., Google Calendar, Exchange) or enhanced test coverage for query parameters.  

### 7. User Feedback Summary  
- Direct user feedback (comments, reactions) is absent in the last 24 h.  
- The existence of the bug fix implies that at least one user (or contributor) had encountered the missing time‑range behavior and found it sufficiently impactful to submit a PR. This indicates a niche but real need for accurate calendar query filtering, likely from users building scheduling or automation workflows that depend on precise event windows.  

### 8. Backlog Watch  
- **Long‑Unanswered Important Items:** There are no open issues, so no backlog of unresolved bug reports or feature requests is visible.  
- **PR Awaiting Review:** PR #1147 remains open and has not yet received reviewer feedback or a merge. Maintainer attention is needed to validate the fix, run any relevant CI/tests, and merge it to close the known bug.  

---  

*Digest generated algorithmically from the supplied GitHub data; all statements are strictly derived from the provided metrics and linked items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-07-12

## 1. Today's Overview
The CoPaw project is currently experiencing a period of high volatility and intense developer activity following the release of version 2.0.0. While there has been significant engagement with 23 new issues and 7 pull requests in the last 24 hours, the project is facing a critical "stabilization crisis." The current focus is heavily skewed toward resolving breaking regressions and critical bugs introduced in the 2.0.0 update, particularly regarding Windows compatibility and session data migration.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Project Progress
The development team has been actively working on UI stability. Four Pull Requests (#5974, #5973, #5971, #5970) have been merged/closed, all addressing critical contrast issues in the **Dark Mode** console, ensuring that text remains readable in the loop templates and chat history. Additionally, work is progressing on better handling of large tool outputs to prevent context overflow via artifact file persistence (#5953).

## 4. Community Hot Topics
*   **V2.0.0 Migration & Data Integrity:** A major theme is the difficulty users face when upgrading from 1.x to 2.0.0. Users are reporting lost session mappings (#5964), Pydantic validation errors due to legacy file tool formats (#5956), and failed session loads in WeChat/DingTalk (#5957, #5962).
*   **Sandbox & Environment Stability:** Technical deep-dives are occurring regarding Windows sandbox implementations, with users reporting extreme system resource consumption (e.g., "pwsh window explosion" #5951).
*   **AI Logic Loop Failures:** Users are reporting issues where models (specifically Qwen3.7-plus) enter infinite loops of writing and deleting instead of completing tasks when using the new version (#5961).

## 5. Bugs & Stability
The project is currently navigating several high-severity regressions.
1.  **Critical (System/Resource):** Windows sandbox implementation causing infinite process spawning and high memory usage (#5951).
2.  **High (Data/Migration):** Breaking changes in the data schema causing $500$ errors when trying to access legacy chat history (#5964) and Pydantic `ValidationError` in chat channels (#5956).
3.  **High (Logic/Context):** Context compression logic splitting `tool_call` and `tool_result` pairs, leading to API 400 errors (#5960, #5962, #5972).
4.  **Medium (UI/UX):** Skills list rendering failures where scroll-to-load fails to trigger (#5788, #5955); Dark mode text visibility issues (#5969 - *Fix in progress/merged*).
5.  **Medium (Tooling):** `execute_shell_command` having a hard-coded 60s timeout in Runtime 2.0 (#5963) and missing submodules in the PyInstaller backend (#5965).

## 6. Feature Requests & Roadmap Signals
*   **Permission Systems:** Users are inquiring about the availability of AgentScope's permission control features within QwenPaw (#5958) and suggesting a "Tool Whitelist" mode to balance security and usability (#5954).
*   **Authentication:** Support for OAuth login for OpenAI/Codex has been requested (#4124).
*   **UI Enhancements:** Requests for granular control over tool result transmission (e.g., truncating results or choosing not to send long outputs to the channel) (#5976).

## 7. User Feedback Summary
User sentiment is currently **low/frustrated** due to the 2.0.0 upgrade path. Key pain points include:
*   **Inconsistency:** Users feel the "smart mode" for permissions is too cumbersome, requiring too many approvals, while "closed mode" is too restrictive.
*   **Unreliability:** The inability to continue existing sessions (WeChat/DingTalk) after upgrading is a significant barrier to professional adoption.
*   **Deployment Issues:** Users are struggling with the installation/upgrade scripts and noticing inconsistencies between the desktop app (PyInstaller) and standard pip installs.

## 8. Backlog Watch
The following items require urgent maintainer attention to restore user trust:
*   **#5951:** The Windows sandbox "recursion explosion" is a potential system-stability risk.
*   **#5965:** The missing `agentscope.tool._builtin._scripts` in the PyInstaller bundle is breaking core tool functionality for desktop users.
*   **#5960:** The context compression logic error is a fundamental flaw in how the agent interacts with LLM APIs.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest - July 12, 2026

## 1. Today's Overview
ZeroClaw is experiencing significant technical activity with 50 open issues and 46 open PRs as of today. Four PRs were completed, indicating steady engineering progress while maintaining extensive ongoing work across multiple high-risk areas. The project continues to address critical infrastructure gaps around goal administration, provider integration, and runtime stability, though no releases were made this period.

## 2. Releases
No new releases were published today.

## 3. Project Progress
**Completed PRs Today:**
- **#8836** - Fixed doctor's report on degraded config sections, addressing configuration resilience
- **#8751** - Resolved LocalWhisperConfig default reuse issue (closes #8718), fixing voice transcription setup
- **#8759** - Made zerocode clipboard screenshot paste reliable, fixing user productivity issues
- **#8845** - Enabled runtime rebuild of live sessions when agent model_provider changes, addressing configuration drift

**Key Advances:**
- Goal administration systems are moving forward with completion of goal controller/verifier (#8687) and trusted goal tools (#8688)
- Gateway web UI enhancements include per-agent in-flight prompt counters (#8905) and skills management (#6695)
- Provider reliability improvements include idle-bound SSE streaming (#8838) and Gemini tool-call history preservation (#8935)

## 4. Community Hot Topics

**Most Active Issues (by comments):**

1. **#8681** - Goal mode implementation split stack [9 comments]
   - Links: [GitHub Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)
   - **Underlying Need:** Coordinating refactoring of goal-mode features into reviewable PRs, indicating a significant architectural restructuring effort

2. **#8054** - System prompt tool-availability mismatch [9 comments]  
   - Links: [GitHub Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)
   - **Underlying Need:** Ensuring consistent tool visibility across all entry points (channels, gateway, WebSocket, multimodal, /think), a critical user experience gap

3. **#5808** - Default 32k context budget exceeded [8 comments]
   - Links: [GitHub Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) 
   - **Underlying Need:** Context trimming thresholds too aggressive, causing token consumption issues affecting workflow continuity

**Emerging High-Impact Issues:**
- **Issue #8654** - Skill-review fork panics (SIGSEGV) indicates a critical runtime stability problem where tool-heavy turns crash the agent process
- **Issue #6350** - WhatsApp Web allowed-numbers bypass suggests security vulnerabilities in channel access control
- **Issue #8675** - Provider validation failures for OpenRouter/OpenAI/others indicate data integrity issues in tool-call serialization

## 5. Bugs & Stability

**Critical Severity (P1) - Most Urgent:**
1. **#8654** - Skill-review fork panic → daemon SIGSEGV (3 comments, high risk)
   - Links: [GitHub Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)
   - **Status:** In-progress, runtime crash after tool-heavy turns requiring immediate attention
   - **Impact:** Complete agent process termination affecting user workflows

2. **#6350** - WhatsApp Web allowed-numbers bypass (2 comments, high risk)
   - Links: [GitHub Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6350)
   - **Status:** In-progress, silent message drops indicating security breach
   - **Impact:** Undetected message delivery failures for WhatsApp channel users

3. **#8675** - Malformed tool-call arguments to OpenRouter/OpenAI (1 comment, high risk)
   - Links: [GitHub Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8675)
   - **Status:** Blocked, provider communication failures causing empty responses
   - **Impact:** Provider integration failures affecting multi-provider user setups

**Medium Severity - Active Handling:**
- **#8718** - Config template incompatibility for local_whisper transcription (1 comment) - fixed by PR #8751
- **#8578** - Partial startup failure termination (2 comments, medium risk) - zerocode TUI issue

**Bug Fixes Completed Today:**
- **#8751** - LocalWhisperConfig default reuse fixed
- **#8845** - Runtime rebuild live sessions on agent model_provider edits completed

## 6. Feature Requests & Roadmap Signals

**Tracker Items Requiring Focus (1-2 comments):**
- **#8358** - Zerorelay milestone: secure transport plane relay standup
- **#7959** - Gateway local Kanban board for agent work visualization  
- **#8134** - Session TTL auto-truncate for channels (high P2 priority)

**High-Priority Features in Progress:**
- **Goal Administration** (#8689, #8746, #8996, #8996): Comprehensive goal command admission, trusted tools, and lifecycle management
- **Persistent Memory** (#8891): Cross-session memory parity with peer agent runtimes
- **WASM-First Plugin Runtime** (#8135, #7822, #8187): Moving from Node.js to WebAssembly plugins with capability enforcement

**Infrastructure Improvements:**
- **Channel Parity** (#7831): Discord interaction-surface parity progress
- **Gateway Upgrades** (#8173): In-app upgrade capability with auto-restart
- **Prebuilt Assets** (#7952): Full-channel vs lean prebuilt bundle differentiation

## 7. User Feedback Summary

**Pain Points Observed:**
1. **Configuration Complexity** - Users struggling with config template inconsistencies (#8718) and daemon rejection of valid setups
2. **Runtime Instability** - Critical crashes during tool-heavy turns (#8654) affecting reliability expectations
3. **Channel Integration Gaps** - Security bypasses (WhatsApp #6350) and access control issues across channels
4. **Provider Synchronization** - Tool-call validation failures causing provider communication breakdowns (#8675)

**User Satisfaction Drivers:**
- **Goal Administration UI** - New `/goal` command admission providing better control surfaces
- **Gateway Dashboard Enhancements** - Per-agent in-flight counters (#8905) improving operational visibility
- **Incremental Bug Fixes** - Configuration robustness improvements (#8836, #8751) enhancing setup reliability
- **Quickstart Improvements** - Capability-safe runtime defaults recommendations (#8987)

**Technical Friction Points:**
- **Memory Growth** - Unbounded RSS growth from MCP/tool-schema cloning (#8642) indicating infrastructure scaling challenges
- **Context Management** - Context budget overspending affecting token efficiency (#5808)
- **Provider Configuration** - Runtime options leaking between providers (#7870) indicating configuration management complexity

## 8. Backlog Watch

**Issues Needing Maintainer Attention:**

1. **#8135** - RFC: Wasm-first plugin runtime (4 comments, high risk, needs-maintainer-review)
   - Links: [GitHub Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)
   - **Criticality:** High - Fundamental architectural decision affecting future plugin ecosystem

2. **#8142** - RFC: Gateway-local Kanban board for agent work (2 comments, needs-maintainer-review)  
   - Links: [GitHub Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)
   - **Criticality:** Medium - User-facing feature governance

3. **#8360** - Tracker: v0.8.3 provider and native-tool message serialization (1 comment)
   - Links: [GitHub Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8360)
   - **Criticality:** Medium - Release milestone coordination

4. **#7314** - Tracker: WASM plugin program (1 comment)
   - Links: [GitHub Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)
   - **Criticality:** Medium - Architecture foundation work

5. **#7822** - RFC: WASM plugin lifecycle hook subscriptions (1 comment, needs-maintainer-review)
   - Links: [GitHub Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)
   - **Criticality:** Medium - Runtime architecture extension

**Unresolved Dependencies:**
- Multiple PR stacks (#8746, #8689, #8688) dependent on #8187 and #8645 authorization decisions
- Issue #7420 hardware access requirements pending capability-gated WASI host function decisions
- ZedCode startup timeout behaviors (#8578) awaiting diagnostic clarification

**Overall Assessment:** ZeroClaw is in a complex but active development phase, with significant architectural evolution occurring around goal administration, plugin runtime transitions, and provider integration. The project exhibits healthy bug-fixing momentum while tackling substantial technical debt. Critical attention is needed on runtime stability issues (#8654) and maintainership decisions around RFCs for future architecture directions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*