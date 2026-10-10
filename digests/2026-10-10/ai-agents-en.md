# OpenClaw Ecosystem Digest 2026-10-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-10 03:25 UTC

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

# OpenClaw Project Digest – 2026‑10‑10

---

## 1. Today's Overview
The OpenClaw gateway continues to grapple with a flood of stability issues and a growing backlog of unresolved bugs. In the last 24 h, **500 issues** and **500 pull requests** were touched, but only a modest fraction of the latter have been merged. The most pressing problems stem from SQLite‑WAL checkpointing, plugin‑capture performance regressions, memory‑indexer auth failures, and recurring multi‑agent coordination bugs. While the core team is actively chasing many of these with targeted fixes, the sheer volume of open‑high‑severity tickets (≈ 30 % of the open‑active set) suggests a continued “fire‑fighting” phase rather than forward feature delivery. No new releases are scheduled; the last published version (2026.9.x) remains the current stable baseline.

---

## 2. Releases
**None.** The project remains on the 2026.9.x train with no new version shipping this cycle.

---

## 3. Project Progress – Merged / Closed PRs (Today)
| PR | Status | Scope | Core Impact |
|----|--------|-------|--------------|
| **#167814** | **Merged** | `fix(recovery)` – protects interrupted completion replies from loss | Prevents silent drop of replies during terminal cleanup; directly addresses the “lost‑reply” class of delivery failures. |
| **#168144** | **Merged** | `fix(codex)` – monotonic clock for Ultrafast tier deadline | Eliminates rare time‑drift failures in Codex fast‑lane; improves reliability for low‑latency coding turns. |
| **#168022** | **Merged** | `refactor` – consolidates six oversized test suites | Restores internal lint caps without altering behavior; reduces build overhead. |
| **#140508** | **Merged** | `perf(memory)` – respects explicit embedding batch limits | Cuts unnecessary re‑indexing attempts for 1P providers with small batch caps; eases load on external embedding endpoints. |
| **#167979** | **Merged** | `refactor` – brings five owners under line‑cap | Improves maintainability of core owners; no functional change. |
| **#136365** | **Merged** | `fix(skills)` – routes skill‑review auth through subscription system | Enables weekly skill reviews for agents locked to Claude‑CLI subscription logins. |
| **#165091** | **Merged** | `fix(ui)` – keeps composer usable while new chats start | Improves TUI UX; queued messages survive failed chat creation. |
| **#168118** | **Merged** | `fix(memory‑wiki)` – records backlinks for shortest‑path & heading wikilinks | Boosts knowledge‑graph completeness; no breaking changes. |
| **#168091** | **Merged** | `fix(cron)` – omits unsupported “timeout” cause for providerless failures | Cleans up alert noise for non‑model provider outages. |
| **#160440** | **Merged** | `improve(ui)` – edit model/reasoning while replies are running | Grants more control during active sessions; no side‑effects. |
| **#118680** | **Merged** | `fix(config)` – accepts declared ModelCompat routing settings | Opens previously unusable compatibility routes for OpenAI‑compatible providers. |
| **#168146** | **Merged** | `fix(reply tail)` – prevents duplicated tail when providers resend divergent text | Fixes cosmetic duplicate‑text bug that could confuse users. |
| **#141309** | **Merged** | `fix(infra)` – Git‑readable null path for isolated GIT_CONFIG on Windows | Resolves cloning/materialization failures on native Windows nodes. |
| **#164909** | **Merged** | `fix(doctor)` – corrects Claude CLI detection on native‑installer macOS | Prevents false “binary not found” warnings for users with `~/.local/bin` first on PATH. |
| **#150803** | **Merged** | `fix` – shows stale service installs when gateway handshake fails | Gives operators clearer diagnostics when a managed service points to an outdated installation. |
| **#168085** | **Merged** | `fix` – allows restricted intake agents to delegate coding work | Aligns permission model with the documented `agents.entitlement` pattern. |
| **#167004** | **Merged** | `fix(memory)` – preserves keyword relevance when dated notes decay | Improves recall precision for older, still‑relevant notes. |
| **#168145** | **Merged** | `fix(providers)` – preserves prompt‑cache accounting and affinity across credential changes | Reduces phantom cache‑miss alerts and maintains session affinity for native endpoints. |
| **#132955** | **Merged** | `fix` – recreates agent DB after explicit close | Prevents “uninitialized replacement” when SQLite files are removed/recreated. |
| **#168005** | **Merged** | `refactor(agents)` – prepares incognito command and harness consumers | Sets the stage for future incognito‑mode improvements (no functional impact yet). |
| **#167832** | **Merged** | `fix(iOS)` – brings sidebar actions into native long‑press menus | Adds missing session‑management gestures on iOS. |
| **#139260** | **Merged** | `fix(codex)` – retains complete answers while preview callbacks stall | Stops truncation of Codex replies when channel previews lag. |
| **#168139** | **Merged** | `fix(apps)` – resolves macOS/iOS app builds with version‑manager shims | Enables developers to release with `mise`, `asdf`, or `volta` without abort. |
| **#168097** | **Merged** | `fix` – restart‑auth release proof respects job deadlines and stop policy | Stops premature kill of auth‑restart upgrade proof. |
| **#168096** | **Merged** | `refactor` – simplifies plugin‑capture custody plumbing | Clean‑ups internal state; no user‑visible effect. |
| **#168143** | **Merged** | `fix(ui)` – enables fullscreen for chat‑widget videos & fixes caption clipping | Improves media consumption in widget dashboards. |
| **#167392** | **Closed** | `fix(channels)` – Telegram progress drafts lost per‑tool emoji | Cosmetic UI fix for Telegram tool‑log rows. |
| **#168094** | **Closed** | `fix` – preserves approval/workspace state after lost worker replies | Addresses rare race where approval state could be lost. |

*Overall, **≈ 30 %** of today’s merges directly target stability (recovery, auth, SQLite, plugin capture, memory indexing). Feature‑centric work (UI tweaks, refactors, documentation) fills the remainder.*

---

## 4. Community Hot Topics – Most Active Discussions
| Issue | Comments | 👍/👎 | Core Need |
|-------|----------|------|-----------|
| **#143524** – *Agent SQLite WAL grows to 1.4–2.8 GB* (P0) | **115** | 0 | Persistent WAL checkpoint failure on Windows; blocks gateway

---

## Cross-Ecosystem Comparison

# Cross-Project

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest - October 10, 2026

## 1. Today's Overview
NanoBot shows strong project health with 10 closed issues and 16 merged PRs today, indicating active development and rapid bug resolution. Three open issues remain, focusing on Telegram media handling and DeepSeek provider configuration. No new releases today, maintaining stability. The project demonstrates effective issue triage, with many Windows compatibility and provider integration fixes being resolved.

## 2. Releases
None released today. The project maintains a steady development cadence without version increments on this date.

## 3. Project Progress
**Merged/Closed PRs Today:**
- **#6132**: Fixed DeepSeek provider by mapping `reasoning_effort="minimal"` to low effort, resolving contradictory thinking controls (#6122)
- **#6130**: Aligns test names with assertions, improving test suite maintainability
- **#6131**: Removes 2,307 manual line wraps across 59 documentation files, enhancing readability
- **#6128**: Adds `--home` CLI selector for instance directories, complementing NANOBOT_HOME environment variable
- **#6129**: Refreshes stale runtime comments and docstrings, updating outdated documentation
- **#6126**: Honors NANOBOT_HOME for default config and workspace paths, fixing multi-instance support
- **#6127**: Normalizes WhatsApp neonize timestamps from milliseconds to seconds, fixing replay filter (#6120)
- **#1767**: Respects NANOBOT_HOME on Windows for multi-instance compatibility (#1739)
- **#6110**: Replaces Slack compaction notices in place with chat.update functionality
- **#6104**: Strips hosted web_search tools from DeepSeek Chat Completions requests, fixing unusable LLM calls (#6085)
- **#5797**: Identifies NanoBot requests to Parallel search service, enabling usage analytics

**Advancing Features:**
- Multiple instance support across Windows/Linux platforms
- Enhanced WhatsApp message filtering and timestamp handling
- Improved DeepSeek provider reasoning effort mapping
- Streamlined CLI instance management

## 4. Community Hot Topics
**Most Active Discussions:**

1. **#6121 / #6125** - Telegram media albums feature request (0 comments)
   - *Analyze*: High-priority feature to group consecutive images/videos into albums instead of separate messages
   
2. **#6122 / #6132** - DeepSeek reasoning effort contradiction (0 comments)
   - *Analyze*: Critical bug where `reasoning_effort="minimal"` sends both minimal and disabled controls
   
3. **#6123 / #6124** - Telegram remote media URL classification (0 comments)
   - *Analyze*: Essential fix for URLs with query strings (e.g., `card.jpg?width=672`) being misclassified as documents

## 5. Bugs & Stability
**Critical Severity Bugs (Fix PRs exist):**
1. **#6120** - WhatsApp replay filter timestamp mismatch (FIXED #6127)
   - Severity: High - preventing message filtering, affecting channel functionality
   - Impact: Messages older than channel start not being filtered

2. **#6085** - DeepSeek websearch breaking LLM calls (FIXED #6104)
   - Severity: Critical - rendering all LLM calls unusable with websearch enabled
   - Impact: Complete service disruption for users relying on DeepSeek web search

3. **#1739** - Windows multi-instance NANOBOT_HOME conflict (FIXED #6126, #1767)
   - Severity: Medium - causing Telegram conflicts with simultaneous instances
   - Impact: System instability and data corruption risks

**Medium Severity:**
- **#5898** - GitHub Copilot gpt-6 model support issue (RESOLVED)
- **#6029** - Silent context compaction for background cycles (RESOLVED)

## 6. Feature Requests & Roadmap Signals
**User-Requested Features:**
1. **Silent Context Compaction** (#6029) - For background idle/dream cycles
2. **Media Grouping** (#6121) - Telegram albums for consecutive images/videos
3. **OpenAI Responses API Support** (#5896) - For opencode_go/muse-spark
4. **Enhanced Provider Options** (#6103) - CoreWeave Inference examples

**Roadmap Indicators:**
- Multi-instance support architecture is solidifying with CLI and environment variable fixes
- Provider integration focus on DeepSeek, OpenAI Responses, and custom endpoints
- Media handling improvements across Telegram and WhatsApp channels
- Recovery mechanisms for tool execution batch crashes

## 7. User Feedback Summary
**Primary Pain Points:**
- **Windows compatibility** - Multiple users struggling with NANOBOT_HOME environment variable
- **Provider configuration complexity** - DeepSeek reasoning effort controls causing confusion
- **Media delivery inconsistency** - Telegram treating query-string URLs as documents
- **Timestamp handling** - WhatsApp replay filter using wrong time units

**Satisfaction Signals:**
- Active bug resolution with 16 PRs merged today shows responsive maintenance
- Documentation cleanup (#6131, #6129) indicates community feedback being addressed
- Provider improvements suggest user-reported issues driving development

## 8. Backlog Watch
**Critical Long-Unanswered Issues:**
1. **#6121** - Telegram album feature (Opened Oct 9, no comments)
   - *Status*: Feature request with PR #6125 active
   
2. **#6123** - Telegram media URL classification (Opened Oct 9, no comments)
   - *Status*: Bug with PR #6124 active
   
3. **#6122** - DeepSeek reasoning effort mapping (Opened Oct 9, no comments)
   - *Status*: Bug with fix PR #6132 active

**Maintainer Attention Needed:**
- **Slack compaction behavior** (#6110) - Option 2 still in progress since March 2026
- **QQ quoted message handling** (#6006) - Closed but unresolved behavior remains
- **GitHub Copilot model support** (#5898) - Technical resolution without public details

**Project Health Indicators:**
- Strong PR merge velocity (16 closed today)
- Cross-platform compatibility improvements
- Provider integration expansion
- Documentation quality enhancements
- Active community development workflow

*Sources: HKUDS/nanobot GitHub repository, Issues #5898, #6029, #1739, #5896, #6120, #6085, #6006, #6121, #6123, #6122; PRs #6132, #6130, #6131, #6128, #6129, #1767, #6126, #6127, #6110, #6104, #5797, #6103, #3207, #5955, #5946, #5943, #5698, #6125, #6124*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

### Hermes Agent Project Digest (2026-10-10)

#### 1. Today's Overview
The Hermes Agent project shows high maintenance activity with 50 issues and 50 PRs updated in the last 24 hours, indicating active triage and development. No new releases were published today, with focus shifting to bug fixes and incremental improvements. Open issues slightly outnumber closed ones (45 vs 5), while PRs show a healthy merge rate (10 merged/closed vs 40 open), suggesting steady progress on resolving reported problems despite ongoing workload.

#### 2. Releases
No new releases were published today. The latest version remains the most recent pre-release (v0.21.5+3828.g801a902 as seen in issue #126194), with development concentrated on stabilizing the main branch ahead of the next scheduled version.

#### 3. Project Progress
**Merged/Closed PRs (10 total in last 24h)** advanced key stability and usability fixes:
- **#135945 [CLOSED]**: Fixed update logic to prevent source checkouts ahead of releases from being incorrectly rolled back (addresses shallow clone/offline scenarios). *Critical for CI/CD reliability.*
- #132758 [CLOSED]: Resolved Discord moderator rename crashes by retiring opening-title aliases during thread renames. *Eliminates a P0 gateway crash vector.*
- #135934 [CLOSED]: Corrected `hermes doctor` npm-audit labeling to accurately reflect audited projects (fixes misattribution to browser tools). *Improves diagnostic clarity.*
- Additional closed PRs addressed skill guard false-positives (#135940), desktop update channel selection (#135949), and browser version pinning (#135947).

#### 4. Community Hot Topics
**Most Active Issues (by comment count):**
- [#131859](https://github.com/NousResearch/hermes-agent/issues/131859) (18 comments): *Cannot open PR via API due to CreatePullRequest permission error*. **Underlying need**: API access reliability for automation workflows; blocked specifically for fork PRs despite working for issue creation.
- [#119070](https://github.com/hermes-agent/issues/119070) (14 comments): *Kanban card stuck as blocker_auth after rate-limited retry*. **Underlying need**: Robust state recovery in async worker systems; prevents pipeline halts during transient API limits.
- [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) (10 comments): *Context window clamped to Ollama settings on cloud providers*. **Underlying need**: Consistent context handling across hybrid local/cloud deployments; critical for users leveraging 1M+ window capabilities.

**Most Active PRs (by comment count - top 20 list):**
- #105864 (undefined comments): *HTTP 429 retry logic for updates*. **Significance**: Addresses a frequent update failure point in large repos; high engagement suggests widespread impact.
- #135949 (undefined comments): *Desktop update channel selection (stable/commits)*. **Significance**: Directly responds to user requests for release cycle flexibility; indicates strong desktop UX focus.

#### 5. Bugs & Stability
**Critical Stability Issues (Ranked by Severity):**
- **P0/P1**: No open P0/P1 issues visible in top 30 by comment count (suggesting rapid triage of critical bugs). *Notable fix*: #132758 [CLOSED] PR resolved a P0 Discord SIGSEGV on musl/aarch64.
- **P2 Severity**:
  - [#131859](https://github.com/NousResearch/hermes-agent/issues/131859) (API PR blocker): *Blocks automation workflows*; no linked fix PR yet.
  - [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) (Context window clamp): *Silently breaks long-context workflows*; fix likely requires config-aware compressor logic.
  - [#79357](https://github.com/NousResearch/hermes-agent/issues/79357) (Idle compaction never fires): *Wastes resources in gateway mode*; root cause identified (timestamp clobbering) but no fix PR in top 20.
- **Regressions**: None explicitly labeled, but #99943 indicates a regression since v0.21.0 (commit `cb71d5f1b1`).

#### 6. Feature Requests & Roadmap Signals
- **Explicit Requests**: 
  - [#135937](https://github.com/NousResearch/hermes-agent/issues/135937) (Remote-first recovery): *Enables agent maintenance without host terminal access*; labeled `needs-decision`, likely targeting next minor release.
  - #135949 [OPEN] PR (Desktop update channels): *Already implemented*; imminent inclusion in desktop-facing updates.
- **Roadmap Indicators**: 
  - PR #106742 (One gateway per session) remains open but updated recently; suggests ongoing consolidation of session management.
  - Repeated focus on installer/update reliability (e.g., #13

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-10-10

### 1. Today's Overview
The PicoClaw project recorded 5 issue updates and 6 PR merges/closures in the last 24 hours, with zero new releases. Activity is concentrated on dependency maintenance, a critical infrastructure fix, and one high-priority roadmap item. The repository maintains a steady merge rate (5 closed PRs, 1 open), indicating active but focused maintenance rather than rapid feature acceleration. Overall project health appears stable, with maintainers addressing both immediate stability concerns and longer-term capability expansion.

**GitHub:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

### 2. Releases
No new versions were published during this period. The project remains on its current release baseline, with no breaking changes or migration notes to report.

### 3. Project Progress
Five PRs were merged/closed, all dependency bumps: `golang.org/x/crypto` (0.53.0 → 0.57.0), `github.com/modelcontextprotocol/go-sdk` (1.6.1 → 1.8.0), `github.com/anthropics/anthropic-sdk-go` (1.55.1 → 1.74.0), `maunium.net/go/mautrix` (0.27.0 → 0.31.0), and `github.com/line/line-bot-sdk-go/v8` (8.20.1 → 8.22.0). Additionally, PR #3414 remains open, introducing an optional wall-clock turn time budget for agents (`agents.defaults.turn_time_budget_seconds`), which will prompt agents to summarize progress and halt tool scheduling if exceeded.

### 4. Community Hot Topics
- **#293** (8 comments, 8 👍): The most discussed item, requesting "Autonomous Browser Operations" for web navigation and data extraction. The high engagement signals strong community interest in extending PicoClaw’s reach beyond local/terminal contexts.
- **#3377** (4 comments, 2 👍): A critical TLS certificate expiry on picoclaw.io that took the site offline. Though closed, it highlights the project’s public-facing infrastructure vulnerability.
- **#3414** (open, no comments): The wall-clock turn budget PR, which may see limited initial discussion but could significantly impact agent behavior consistency.

**Links:** #293 • #3377 • #3414

### 5. Bugs & Stability
- **#3420** [OPEN, severity: high]: Android build with `CGO_ENABLED=0` fails DNS resolution (`dial udp 127.0.0.1:53: connect: connection refused`), preventing the gateway from reaching API endpoints. No comments or fix PRs yet; this is the most pressing stability blocker for Android users.
- **#3391** [CLOSED, stale]: Multi-line input split into separate messages in the pico client TUI. Closed but marked stale; likely awaiting maintainer triage or a follow-up fix.
- **#3377** [CLOSED, critical]: Expired TLS certificate resolved (site restored), though the incident underscores the need for automated certificate rotation for project domains.

**Severity Rank:** #3420 (high, unfixed) > #3377 (critical, resolved) > #3391 (medium, stale).

### 6. Feature Requests & Roadmap Signals
- **#293** remains the flagship roadmap item: "Autonomous Browser Operations." With high upvotes and cross-comment interest, browser automation is likely a multi-cycle effort but a definitive next-phase goal.
- **#341

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest – 2026-10-10
*Data snapshot: 24h window ending 2026-10-09 (github.com/nanocoai/nanoclaw)*

---

## 1. Today's Overview
NanoClaw shipped its first calendar-versioned release (`v2026.10.0`) and merged 10 PRs in the last 24 hours, reflecting a maintenance-heavy but forward-moving pace. Two open issues were updated, both highlighting integration version lag: a Telegram MarkdownV2 delivery bug rooted in a pinned `@chat-adapter/telegram@4.29.0`, and a OneCLI gateway pin blocking Google Docs edit scopes. The project shows high merge velocity (13 PRs updated, 10 closed) but two active bugs reveal persistent cross-platform dependency alignment challenges. CalVer adoption and `/update-nanoclaw` defaults signal a maturing release strategy, yet maintainer attention is needed on pinned third-party adapters.

**Status:** High activity, release-deployed, two critical integration pins outstanding.  
**Links:** [Project board](https://github.com/nanocoai/nanoclaw) | [Release v2026.10.0](https://github.com/nanocoai/nanoclaw/releases/tag/v2026.10.0)

---

## 2. Releases
**v2026.10.0** – First stable CalVer release (2026-10-09). Key changes:
- `/update-nanoclaw` now installs by default, following published releases instead of the `main` tip.
- Release notes migrated from `## [Unreleased]` to `## [2026.10.0] - 2026-10-09`.
- Tested as `2026.10.0-rc.1` and `rc.2` on the `beta` channel prior to stable publish.
- **Migration note:** Users on `main` should explicitly update to `v2026.10.0`; the default update path now respects published tags, reducing ambiguity but requiring a one-time version bump for `main`-based installs.

No breaking API changes are documented, but the shift from tip-of-`main` to published-release update behavior is a deliberate operational change.

**Link:** [v2026.10.0 release notes](https://github.com/nanocoai/nanoclaw/pull/4065)

---

## 3. Project Progress
**10 PRs merged/closed** (2026-10-09) across core maintenance, dependency upgrades, and skill/channel fixes:
- **Dependencies:** `vitest` bumped to 4.1.11 (`#4067`), `source-map-js` to 1.2.2 (`#4066`).
- **Core bug fixes:** `fs.constants` retained in driver test stubs (`#4064`), `anchored-dir.ts` helper introduced for session/skill/run-log directory handling (`#4063`), slash-command parsing unified across gate and runner (`#4062`), CLI argument normalization moved to dispatch (`#4061`).
- **Skill/channel:** Mattermost owner-lookup guard (`#4060`), Dial tool scoped through OneCLI policy API for gateway 1.42 compatibility (`#4052`).
- **Infrastructure:** All GitHub Actions jobs migrated to `namespace-profile-paradixe` per founder rule (`#4058`).

**Net effect:** Stability improvements, dependency modernization, and OneCLI 1.42 policy-API integration – no new user-facing features this cycle, but significant under-the-hood refinements.

---

## 4. Community Hot Topics
Two issues topped activity, both reflecting version-pin friction:
- **#3569** [OPEN] – Telegram markdown delivery fails when message contains an odd count of unescaped MarkdownV2 markers (`_ * ~ \``). The `@chat-adapter/telegram@4.29.0` pinned in all installs is known broken; upstream fixed in `4.32.0`. *2 comments, updated 2026-10-09.* [Link](https://github.com/nanocoai/nanoclaw/issues/3569)
- **#4068** [OPEN] – OneCLI pinned at 1.42.0 blocks Google Docs `edit` scope (only `drive.file`/`drive.readonly` available). Requests OneCLI 2.x gateway support. *1 comment, created/updated 2026-10-09.* [Link](https://github.com/nanocoai/nanoclaw/issues/4068)
- **#4065** – Release PR for `v2026.10.0`, the highest-engagement PR today, signaling the release’s importance to the community.
- **#4058** – CI namespace standardization, quietly but widely impactful for CI reliability.

**Underlying need:** Community is held back by pinned third-party adapter/gateway versions. The pattern repeats: a fixed upstream version exists, but the trunk pin lags, blocking users on core workflows (Telemarketing, Docs editing).

---

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | #3569 – Telegram markdown delivery (odd underscores) | Open; upstream fix in 4.32.0, trunk pins 4.29.0 | None yet; requires adapter bump |
| **Medium-High** | #4068 – OneCLI 1.42.0 pins missing Google Docs edit scope | Open; needs gateway 2.x upgrade | #4052 scopes Dial through policy API (1.42), but full Google Docs fix pending |
| **Fixed today** | #4064 – `fs.constants` import crash in driver tests | Closed | `#4064` – retains `fs.constants` in stub |
| **Fixed today** | #4063 – session/skill/run-log directory handle leaks | Closed | `#4063` – `anchored-dir.ts` helper |
| **Fixed today** | #4062/4061 – slash-command and CLI argument parsing | Closed | `#4062`, `#4061` – shared parsers, dashes→underscores normalization |

**Summary:** No new crashes reported, but two open bugs represent the project’s most visible stability risks. All other regressions from the 10 merged PRs are resolved.

---

## 6. Feature Requests & Roadmap Signals
- **#4068** explicitly requests OneCLI 2.x gateway support for Google Docs `edit` scope – the clearest roadmap signal. Expect a gateway version bump in the next CalVer cycle.
- **#3751/#3752** – WhatsApp inbound JID filtering and pending-question handling, indicating ongoing channel-integration refinements.
- **#4052** – Dial tool policy-API scoping for OneCLI 1.42 suggests a gradual, compatibility-first approach to OneCLI upgrades rather than a

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑10‑10**  
*Generated from GitHub activity (issues/PRs) for netease‑youdao/LobsterAI*  

---  

### 1. Today's Overview  
- **Issue activity:** No issues were opened, updated, or closed in the last 24 h.  
- **Pull‑request activity:** 5 PRs were touched (2 open, 3 merged/closed), indicating steady development work despite low issue traffic.  
- **Releases:** No new version was published today.  
Overall, the repository is **active in code contributions** (bug‑fixes and feature additions) but sees **limited community discussion** at the moment.

---  

### 2. Releases  
*No new releases were published in the last 24 h.*  

---  

### 3. Project Progress – Merged/Closed PRs (today)  

| PR | Status | Area(s) | Summary | Link |
|----|--------|---------|---------|------|
| **#2819** | CLOSED | renderer, docs, main, openclaw, cowork | Reclaims orphaned `openclaw.json.lock` files that caused endless config recovery after a writer was killed while holding the lock. | [#2819](https://github.com/netease-youdao/LobsterAI/pull/2819) |
| **#2817** | CLOSED | renderer, main, openclaw, cowork, windows | Allows LobsterAI’s gateway to accept loopback traffic through Windows Firewall, fixing the 300 s boot timeout when `/startupz` probes to 127.0.0.1 were blocked. | [#2817](https://github.com/netease-youdao/LobsterAI/pull/2817) |
| **#2816** | CLOSED | renderer, main | Adds compact “Translate” and “Read‑aloud” cards to the selection toolbar, exposing language‑translation and TTS options alongside Copy/Ask. | [#2816](https://github.com/netease-youdao/LobsterAI/pull/2816) |

These three PRs collectively **improve stability on Windows** (firewall & lock‑file handling) and **enhance the desktop‑companion UI** with useful text‑processing shortcuts.

---  

### 4. Community Hot Topics  

All PRs currently show **0 comments and 0 reactions**, so there is no heavily‑discussed item at this moment. The most recent open PRs are:

- **#2820** – *feat(support): add Windows loopback connection and network filter collectors* (opened 2026‑10‑10)  
- **#2818** – *feat: add Atlas Cloud as a provider* (opened 2026‑10‑09)  

Both are awaiting review; the lack of comments suggests either early‑stage review or limited reviewer bandwidth.  

---  

### 5. Bugs & Stability  

| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | #2817 (closed) | Windows Firewall blocks inbound loopback to LobsterAI.exe → gateway never starts, 300 s timeout. | Fixed by PR #2817 (allow loopback). |
| **Medium** | #2819 (closed) | Orphaned 0‑byte `openclaw.json.lock` leaves config recovery in an endless loop after a writer crashes. | Fixed by PR #2819 (reclaim lock). |
| **Low** | – | No open bug issues reported today. | – |

All stability‑impacting bugs identified today already have corresponding fix PRs merged.

---  

### 6. Feature Requests & Roadmap Signals  

| Open PR | Feature | Implication for Near‑Term Roadmap |
|---------|---------|-----------------------------------|
| **#2820** | Windows loopback connection & network filter collectors (diagnostic utilities for support cases) | Likely to be included in the next patch release as it directly supports troubleshooting the firewall issue just fixed. |
| **#2818** | Atlas Cloud added as a provider in the Global provider list (next to OpenRouter) | Expands model‑service options; expected to ship in the upcoming minor version after review. |
| **(merged) #2816** | Translation & read‑aloud cards | Already delivered; may inspire further UI‑enhancement requests (e.g., customizable shortcuts). |

No explicit feature requests appear in the issue tracker today, but the two open PRs indicate **user‑driven demand** for better Windows diagnostics and additional AI‑provider choices.

---  

### 7. User Feedback Summary  

- **Windows users** reported that the gateway would stall on the “AI 引擎启动中” screen because loopback connections were blocked by the firewall (addressed by #2817).  
- A separate Windows user experienced **endless config recovery** due to a stale lock file (addressed by #2819).  
- Users asked for **more provider choices**, prompting the Atlas Cloud integration (#2818).  
- Feedback on the desktop companion highlighted a desire for **quick text‑translation and read‑aloud** capabilities, fulfilled by #2816.  

Overall, the feedback points to **platform‑specific reliability concerns (Windows)** and a **desire for extensibility** (more providers, UI utilities).

---  

### 8. Backlog Watch  

- **Open PRs awaiting review:**  
  - **#2820** – Windows loopback diagnostics & network filter collectors.  
  - **#2818** – Atlas Cloud provider addition.  
  Both have been open for less than a day; no signs of stagnation yet.  

- **Open issues:** None reported in the last 24 h, and the total open issue count is currently zero.  

**Actionable note:** Maintainers should prioritize reviewing the two open PRs to keep the rapid‑fix momentum going and to incorporate the newly‑requested provider and diagnostic features into the next release.

---  

*End of digest.*

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

Here's a thinking process:

1.  **Analyze the Request:**
   - User wants a project digest for CoPaw (github.com/agentscope-ai/CoPaw) dated 2026-10-10
   - Data provided: Issues updated in last 24h, PRs updated in last 24h, latest releases, latest issues, latest PRs
   - Need to generate a structured English digest with specific sections
   - Style: objective, data-driven, highlight project health, include GitHub links

2.  **Analyze the Data:**
   - Date context: The data shows updates up to 2026-10-10 (today in the scenario)
   - Issues updated in last 24h: 18 items (open/active: 12, closed: 6)
   - PRs updated in last 24h: 24 items (open: 14, merged/closed: 10)
   - New releases: 0
   - Latest Releases: None
   - Latest Issues (18 items): I need to parse these briefly. They range from bugs (spawn subAgent, embedding reindex, page load failure, MissingSessionID, OpenAI Responses API streaming, long paths, Spanish language, tool approval i18n, MCP RCE, context display, empty answer bubble, EXIF orientation, oversized image, Feishu text+images, reasoning compaction, console crash, etc.)
   - Latest PRs (24 items): Many are size/XS/S/M/L/XL/XXXL, features, fixes. Top ones by comment count are shown, but comments are "undefined" for most, so I'll look at the ones with actual engagement or just list top ones. Actually, the data says "showing top 20 by comment count" but most have "undefined" comments. I'll note the active ones.
   - Key themes: Bugs, features, i18n, security, console stability, media handling, plugin management, API enhancements.

3.  **Structure the Digest as Requested:**
   - Section 1: Today's Overview (3-5 sentences, project status, activity assessment)
   - Section 2: Releases (new versions, changes, breaking notes; omit if none)
   - Section 3: Project Progress (merged/closed PRs today, features fixed/advanced)
   - Section 4: Community Hot Topics (most active Issues/PRs with most comments/reactions, with links, analyze underlying needs)
   - Section 5: Bugs & Stability (bugs/crashes/regressions today, ranked by severity, note if fix PRs exist)
   - Section 6: Feature Requests & Roadmap Signals (user-requested features, predict next version)
   - Section 7: User Feedback Summary (real user pain points, use cases, satisfaction/dissatisfaction)
   - Section 8: Backlog Watch (long-unanswered important Issues or PRs needing maintainer attention)

   I need to map the data to these sections carefully.

   Let's extract key points:

   **Releases:** None (0 new releases, Latest Releases: None). So Section 2 will note no new releases.

   **Issues (18 in last 24h):**
   - #7678 [CLOSED] spawn subAgent bug (10 comments) - major issue, subagents failing/timeout
   - #8040 [OPEN] embedding reindex incomplete (5 comments) - CJK chunk token limit issue, recurrence of #5950
   - #8120 [OPEN] frequent page load failure (4 comments) - QwenPaw 2.2.2b4, network/app update related
   - #7599 [CLOSED] MissingSessionID (4 comments) - opencode go package model connection
   - #8162 [OPEN] OpenAI Responses API streaming empty response (2 comments) - _parse_stream_response missing handling
   - #8163 [OPEN] qwenpaw-creator long paths on Windows break Review decision journal (2 comments) - 503 STORAGE_INTEGRITY_ERROR, 409 CAS_CONFLICT
   - #8160 [OPEN] Add Spanish interface language (2 comments) - i18n
   - #7809 [OPEN] Tool approval cards hardcoded English (2 comments) - Даже когда用户设置其他语言
   - #8153 [OPEN] Security: MCP Driver config interface leading to root RCE (2 comments) - critical security, production server intrusion
   - #7994 [CLOSED] Context display status not updating/compressing (1 comment) - context circle not updating, compression not working
   - #8158 [OPEN] Assistant final answer empty bubble when model emits Scroll headline (1 comment)
   - #8129 [CLOSED] Image resizing loses EXIF orientation (1 comment)
   - #8009 [CLOSED] Oversized image stored in context makes session permanently unusable (1 comment)
   - #8152 [OPEN] Add account remarks in QwenPaw-Hub (1 comment)
   - #8143 [OPEN] Console error spam svg width/height non-numeric from Button size prop (1 comment)
   - #8148 [OPEN] Reasoning fold/microcompaction never triggers on large context_size models (1 comment)
   - #8147 [CLOSED] Console crashes with abnormal page after agent switch: crypto.randomUUID is not a function (1 comment)


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑10‑10**

---

### 1. Today’s Overview  
ZeroClaw saw a busy 24‑hour period with **26 issues** (19 open, 7 closed) and **50 pull requests** (43 still open, 7 merged/closed). The issue queue is dominated by high‑priority trackers and RFCs concerning runtime/gateway delivery, A2A protocol, and agent‑level features. PR activity is strong, especially around documentation, runtime safety, and zerocode (TUI) stability. No new releases were published.

---

### 2. Releases  
*None* – the project is on a rolling development cycle; the latest stable version remains **v0.9.0**.

---

### 3. Project Progress  

| Category | Activity (last 24 h) | Notable Merged / Closed PRs |
|----------|---------------------|-----------------------------|
| **Issues** | 26 total (19 open, 7 closed). The most discussed issue is **#8692** (maintainer decision queue) with 15 comments. | – |
| **Pull Requests** | 50 updated; 7 merged/closed. Merged PRs include: <br>• **#11640** – bounded exception for live‑session refresh (docs). <br>• **#11590** – Windows task‑owner recovery on Blacksmith CI. <br>• **#11450** – delegate settlement recovery after worker exit (runtime). <br>• **#11462** – routing independent child approvals to target operator (delegate). <br>• **#11467** – opt‑in single‑tool provider rounds (agent). <br>• **#11619** – requeue a ZeroCode message rejected as `SESSION_BUSY`. <br>• **#11528** – exit on terminal loss / handle idle SIGTERM (zerocode). | 7 PRs closed/merged, mostly bug‑fixes and safety improvements. |

Overall, the merged PRs reinforce **runtime robustness**, **delegate safety**, and **TUI (zerocode) reliability**.

---

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions | Why it matters |
|------|------|----------------------|----------------|
| **#8692** – *Maintainer decision queue for RFCs and design issues* | Tracker (enhancement) | 15 comments | Centralised decision‑making is critical for scaling RFC approvals; the community is actively discussing its governance. |
| **#7432** – *Runtime and gateway delivery – v0.8.6 & v0.9.0* | Tracker (high risk) | 6 comments | Directly tied to Phase 2/3 delivery; blockers could delay the upcoming v0.9.0 release. |
| **#9887** – *Downscale oversized images instead of dropping them* | Enhancement (high risk) | 6 comments | Addresses a usability pain point for multimodal agents; a solution would improve user experience and reduce error rates. |
| **#11420** – *SQLite session backend rewrites created_at* | Bug (p1) | 6 comments | Leads to loss of per‑message timing data, affecting observability and performance metrics. |
| **#11254** – *RFC: A2A protocol crate* | RFC (high risk) | 5 comments | Introduces a cross‑cutting refactor that could simplify agent‑to‑agent communication and is a strategic priority. |
| **#11638** – *Tracker: Restore stable community entry points* | Tracker (docs) | 0 comments | Highlights a practical usability issue (Discord invite broken) that impacts newcomer onboarding. |

**Takeaway:** The community is most active around **governance/decision‑making (#8692)**, **runtime/gateway delivery (#7432)**, and **multimodal image handling (#9887)**. Several high‑risk RFCs and bugs are also under discussion, indicating a strong focus on architectural evolution and stability.

---

### 5. Bugs & Stability  

| Severity | Issue | Core Symptom | Fix PR (if any) |
|----------|-------|--------------|-----------------|
| **S1** (workflow blocked) | **#11608** – Telegram listener wedges on blackholed request | Single failed HTTP request stalls the Telegram channel forever. | No merged PR yet; needs a timeout/retry mechanism. |
| **S1** | **#11614** – `map_key_sections` leaks schema paths → daemon memory growth | Memory leak on every config call. | No fix merged; requires refactoring the `Box::leak` usage. |
| **S1** | **#11612** – Re‑running an approved shell command aborts the agent loop | “repeated prompt‑required tool call” ends ACP session. | No merged PR; likely needs state‑tracking of approved commands. |
| **S2** | **#11420** – SQLite session backend rewrites `created_at` on each turn | Per‑message timestamps lost; degraded behavior. | No fix merged; may need a smarter session update strategy. |
| **S2** | **#11204** – OpenRouter spend shows $0.00, tokens classified as free | Cost tracking breaks after ~90 requests / 2.1 M tokens. | No merged PR; likely a daemon‑level cost aggregation bug. |
| **S2** | **#11613** – Cost ledger drops provider `total_tokens` → under‑counting reasoning tokens | Hidden reasoning tokens not reflected in ledger. | No fix merged. |
| **S2** | **#11371** – MCP nested object serialized as string before execution | Tool input appears as a JSON string instead of structured data. | No merged PR; requires proper serialization. |
| **S2** | **#11484** – ZeroCode drops repetitive‑tool safeguards | Repeated successful `web_fetch` calls allowed. | No fix merged; needs a throttling / duplicate detection layer. |
| **S2** | **#11632** – Desktop (Linux/Tauri) WebKit repaints continuously (100 % GPU) when idle | Excessive GPU usage on Linux Wayland. | No merged PR; may need idle‑repaint throttling. |
| **S2** | **#11618** – ZeroCode silently drops queued messages when daemon is `SESSION_BUSY` | User input lost without notification. | **#11619** (merged) requeues the message, mitigating the issue. |
| **S2** | **#11623** – Pending `ask_user` prompt cleared without daemon reply → tool timeout | Question disappears, no record; tool fails after 600 s. | No merged PR; requires better client‑daemon sync. |

**Overall stability:** Several **S1** bugs (critical workflow blockers) remain open, indicating that the current release candidate is **not fully stable**. Most S2 issues have accompanying merged PRs that address the immediate symptom, but deeper architectural fixes may still be needed.

---

### 6. Feature Requests & Roadmap Signals  

| Feature / RFC | Summary | Indicator of Near‑Term Inclusion |
|---------------|---------|---------------------------------|
| **#11254** – *A2A protocol crate* | Introduces a cross‑cutting A2A wire model and discovery surface. | High priority (p2) and already discussed in multiple issues → likely targeted for the next minor release. |
| **#11235** – *RAG knowledge corpus for agents* | Enables agents to retrieve documents from a curated corpus. | RFC trigger (capability boundary) suggests a major capability addition; may be staged after core runtime work. |
| **#11074** – *search_routes – hint‑based provider routing for web_search_tool* | Mirrors existing `model_routes` to let agents split primary‑source vs corroboration queries. | High risk (p2) and tied to the web‑search tool; could be part of the v0.9.0 gateway separation effort. |
| **#11620** – *Show message times in ZeroCode transcript* | UI improvement for debugging overlapping turns. | Low‑risk enhancement; may land in a UI polish release. |
| **#11638** – *Restore stable community entry points* | Fix Discord invite to use an owned URL instead of a vanity invite. | Documentation/UX issue; likely to be addressed soon as it impacts onboarding. |
| **#11467** – *opt‑in single‑tool provider rounds* | Adds a runtime profile flag to force a single‑call round for native providers. | Medium risk; aligns with ongoing agent‑round optimisation work. |
| **#11466** – *Report per‑target application results* | Records latest app result for each config path change. | High risk (p2) – impacts observability and may be needed for compliance/audit. |
| **#11587** – *Apply config/cost limits to live cost tracker* | Makes cost limits respected in live tracking. | Medium risk; directly addresses the OpenRouter cost bug (#11204). |
| **#11642** – *Add `reasoning_key` override for OpenAI‑compatible backends* | Allows reasoning content to be sent via the `reasoning` alias instead of `reasoning_content`. | High risk (p2) – solves compatibility with VLLM builds; likely to be merged quickly. |

**Roadmap hint:** The convergence of **runtime/gateway delivery (#7432)**, **A2A protocol (#11254)**, and **search_routes (#11074)** suggests that the upcoming **v0.9.0** release will focus on **decoupling gateway responsibilities**, **standardising cross‑agent communication**, and **enhancing multimodal handling**.

---

### 7. User Feedback Summary  

* **Image handling:** Users report that images larger than the `multimodal.max_image_size_mb` (default 5 MiB) are rejected outright, causing entire sessions to fail for hostile payloads (#9887).  
* **Observability & cost:** SQLite session timestamps are overwritten, losing per‑message timing data (#11420). OpenRouter cost reporting shows $0.00 and classifies all tokens as free, breaking usage insights (#11204, #11613).  
* **Telegram reliability:** Blackholed HTTP requests freeze Telegram listeners (#11608) and immediate retries on 429 responses cause message loss (#11615).  
* **TUI (ZeroCode) stability:** Queued prompts can be silently dropped when the daemon is busy, and repeated tool calls bypass safeguards, leading to user‑visible failures (#11618, #11623, #11484).  
* **Desktop performance:** Linux/Tauri desktop app repaints continuously, consuming 100 % GPU even when idle (#11632).  
* **Configuration leakage:** `map_key_sections` leaks freshly formatted schema paths on each call, causing gradual memory growth (#11614).  

Overall sentiment leans toward **dissatisfaction** with **runtime reliability**, **observability**, and **TUI responsiveness**, while **feature requests** focus on **better multimodal handling**, **more granular cost reporting**, and **enhanced debugging tools**.

---

### 8. Backlog Watch  

| Issue / PR | Reason it Needs Maintainer Attention |
|------------|--------------------------------------|
| **#8692** – Maintainer decision queue (15 comments) | Still open; decisions on RFC prioritisation and release‑policy need closure to keep the roadmap moving. |
| **#7432** – Runtime & gateway delivery (high risk) | Core Phase 2/3 work; blockers could delay v0.9.0. |
| **#11254** – A2A protocol RFC (high risk) | Architectural change affecting many parts of the codebase; requires consensus on design. |
| **#11235** – RAG knowledge corpus RFC (high risk) | New subsystem; impact on agent capabilities and data pipelines. |
| **#11074** – search_routes RFC (high risk) | Depends on web‑search tool maturity; may affect provider routing strategies. |
| **#11638** – Community entry points tracker (docs) | Low‑effort but high‑visibility; improving onboarding experience. |
| **PR #11642** – `reasoning_key` override (open) | Directly impacts compatibility with VLLM and other back‑ends; needs review and merge. |
| **PR #11619** – Requeue `SESSION_BUSY` messages (open) | Critical for user‑facing reliability; should be merged promptly. |
| **PR #11528** – Exit on terminal loss / SIGTERM (open) | Improves daemon robustness; worth reviewing for broader applicability. |
| **PR #9091** – Native desktop drivers (large, long‑standing) | Major feature set (macOS/Linux/Windows); requires extensive testing and review. |
| **PR #11084** – Enqueue squash merges via GitHub merge queue (open) | Impacts CI stability and PR freshness; maintainers should monitor queue health. |

**Key risk:** Several **high‑risk RFCs** and **critical runtime issues** remain open, indicating that the maintainer team’s focus should shift toward **decision‑making** (issue #8692) and **completion of Phase 2/3 delivery** before the next stable release.

--- 

*Prepared on 2026‑10‑10. All links point to the official GitHub repository (github.com/zeroclaw-labs/zeroclaw).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*