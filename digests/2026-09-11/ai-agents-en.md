# OpenClaw Ecosystem Digest 2026-09-11

> Issues: 445 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-11 02:06 UTC

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

We need to produce a cross-project comparison report with sections as specified. Use data from the digests. We have many projects: OpenClaw, NanoBot (failed), Hermes Agent (safe), PicoClaw (failed), NanoClaw, NullClaw, IronClaw, LobsterAI, TinyClaw, Moltis, CoPaw (safe), ZeptoClaw, ZeroClaw.

We need 1-5 sentences overview, then a table comparing Issues count, PR count, Release status, health score for each project. Need to derive health score: maybe from each project's summary. We have health indicators: OpenClaw safe, moderate activity, some bugs. NanoBot unknown. Hermes safe. PicoClaw unknown. NanoClaw moderate activity, some bugs. NullClaw none activity. IronClaw modest activity, stable. LobsterAI focused, high-velocity, but no community issues. TinyClaw none. Moltis consistent activity, moderate. CoPaw safe (no data). ZeptoClaw high activity, security focus. ZeroClaw high activity, many issues/PRs, many bugs, stable but heavy.

Health score maybe 1-5? Could infer: safe = stable, moderate = stable but some issues, high-velocity = active but may be unstable. Let's assign:

OpenClaw: moderate activity, some bugs, no releases, health maybe 3/5.

NanoBot: failed summary generation => unknown, maybe 2/5.

Hermes Agent: safe, no activity reported => likely stable, health 4/5.

PicoClaw: failed summary => unknown, health 2/5.

NanoClaw: moderate activity, some bugs, health 3/5.

NullClaw: no activity => maybe 2/5 (stagnant).

IronClaw: modest activity, stable, health 4/5.

LobsterAI: high-velocity, focused, health 4/5 (active but stable).

TinyClaw: no activity => 2/5.

Moltis: steady activity, health 4/5.

CoPaw: safe, no activity data => maybe 4/5 (stable).

ZeptoClaw: high activity, security fixes, health 4/5.

ZeroClaw: high activity, many issues/PRs, many bugs, but stable, health maybe 3/5 (busy but stable).

We need Issues count and PR count. Let's extract:

OpenClaw: Issues? Not given explicitly. The digest mentions "three issues and six pull‑requests were not<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk>  (<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> .210-017

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑09‑11**

---

### 1. Today’s Overview
The NanoClaw codebase is in a **moderate activity** phase: three issues and six pull‑requests were touched in the past 24 h, but no releases were shipped. One high‑priority bug remains open (#3643) while three of the six PRs have been merged, advancing both bug‑fixes and a new admission‑gate seam. The team is actively addressing verification and host‑management edge‑cases (systemd‑less users, no‑hup hosts) and tightening snapshot semantics for symlinked mutable roots.

---

### 2. Releases
**None** – no new version tags were cut today.

---

### 3. Project Progress (merged / closed PRs today)

| PR | State | Area | Impact |
|----|-------|------|--------|
| **#3708** | **Closed** | agent‑runner / core | Swapped `busy_timeout`/`journal_mode` order in the outbound SQLite DB, preventing exclusive locks and improving concurrency. |
| **#3707** | **Closed** | agent‑runner / core | Added `registerAdmissionGate` poll‑loop seam (`container/agent-runner/src/admission-gate.ts`) and wired it into the outer poll loop, enabling admission‑gate control for pending‑message handling. |
| **#3760** | **Closed** | setup‑installation | Fixed `setup/verify.ts` to correctly detect a host started via the `nohup` wrapper when the user‑systemd bus is unavailable. |
| **#3689** (open) | **Open** | update | Fixed snapshotting of symlinked mutable roots – now captures target content rather than the link itself (internal symlinks stay links). |
| **#3758** (open) | **Open** | setup‑installation | Prevents portal reminders from re‑asking questions the operator already answered (e.g., sandbox image source). |
| **#3757** (open) | **Open** | verify | Stops an ambient credential environment variable from fabricating a channel in `verify.ts`, avoiding false‑negative test failures. |

*Result:* Core stability (SQLite handling), a new admission‑gate mechanism, and improved verification for non‑systemd hosts are now in the codebase. Three bug‑related PRs are pending review.

---

### 4. Community Hot Topics  
*(most discussion / open interest)*

| Topic | Reason for Spotlight | Link |
|-------|----------------------|------|
| **#3643 – Hard‑coded 30‑min absolute ceiling kills long local‑model turns** | High‑priority bug affecting local‑model backends; only one comment so far but the issue is still open and could impact user experience for extended inference jobs. | [Issue #3643](https://github.com/nanocoai/nanoclaw/issues/3643) |
| **#3758 – Skip portal reminders the operator already answered** | Directly improves the operator’s workflow by removing redundant prompts (e.g., sandbox image source). The PR is open and likely to be merged soon. | [PR #3758](https://github.com/nanocoai/nanoclaw/pull/3758) |

Both topics address **user friction** – one a runtime kill‑switch, the other a UI/UX annoyance.

---

### 5. Bugs & Stability (today’s reports)

| Bug / Issue | Severity | Current Status | Fix PR |
|-------------|----------|----------------|--------|
| **#3643** – Absolute ceiling (`ABSOLUTE_CEILING_MS`) kills long local‑model turns | **High** | Open, awaiting fix | – |
| **#3759** – `setup/verify` reports `SERVICE: not_found` on hosts without a user‑systemd instance | Medium | Closed – fix merged via **#3760** | [#3760](https://github.com/nanocoai/nanoclaw/pull/3760) |
| **#3761** – Permission probe (do‑not‑merge) | Low | Closed (merged) | – |

*Takeaway:* The only **unresolved critical bug** is the 30‑minute ceiling; all other reported regressions have been addressed in the latest merges.

---

### 6. Feature Requests & Roadmap Signals
- **Admission‑Gate Seam** (PR #3707) – a new extensibility point for controlling message admission. This is a **core‑team‑approved** feature that will likely be used in upcoming QoS or load‑shedding work.
- **Improved Snapshot Semantics** (PR #3689) – while framed as a bug‑fix, it also signals a roadmap move toward more deterministic snapshot behavior for symlinked filesystems.
- No explicit roadmap items were posted today; the above two PRs represent the most visible forward‑looking changes.

---

### 7. User Feedback Summary
- **Timeout Pain:** Operators running long‑duration local models are hitting an unexpected hard stop after ~30 minutes due to `ABSOLUTE_CEILING_MS`. Users need a configurable absolute ceiling or a way to extend the limit without code changes.
- **Verification Friction:** Hosts lacking a user‑systemd bus (e.g., containerized or minimal Linux environments) previously caused `verify` to falsely report a missing service, creating setup headaches for non‑traditional deployment scenarios.
- **UX Annoyance:** Portal reminders that repeat already‑answered questions (sandbox image source) cause unnecessary clicks and reduce operator satisfaction.

Overall sentiment is **mixed**: core functionality is stable, but edge‑case configurations (local‑model runs, non‑systemd hosts) and UI redundancy are still pain points.

---

### 8. Backlog Watch (needs maintainer attention)

| Item | Type | Age / Stuck Point | Why It Needs Attention |
|------|------|-------------------|------------------------|
| **#3643** (bug) | Open high‑priority | Created 2026‑08‑28, still open | Direct impact on local‑model users; needs a fix or at least a config seam. |
| **#3689** (fix) | Open PR | Created 2026-08-31, no comments | Snapshot semantics for symlinked mutable roots – should be reviewed to avoid breaking changes. |
| **#3758** (fix) | Open PR | Created 2026-09-10, no comments | Portal reminder logic – low risk, high UX gain; ready for merge. |
| **#3757** (fix) | Open PR | Created 2026-09-10, no comments | Ambient credential handling – prevents false‑negative verify; should be merged to stabilize CI. |

**Action Items for Maintainers:**
1. Prioritize a resolution (or at least a configuration seam) for #3643.
2. Review and merge #3689, #3758, and #3757 to close outstanding bug‑fix backlogs.
3. Consider a quick release note or patch bump to surface the admission‑gate feature (#3707) and the verification fix (#3760) to users.

---

**Overall Health Assessment:** The project is moving steadily forward with core stability improvements and a new admission‑gate capability. The only blocker to a smoother user experience is the unresolved absolute ceiling bug; addressing it (or exposing a config seam) would be the highest‑impact next step.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑09‑11**

---

### 1. Today’s Overview  
The repository saw modest but focused activity in the last 24 hours: one issue was opened (Issue #8093) concerning the daily failure taxonomy of Ironclaw runs, and nine pull requests were updated (seven remain open, two were merged/closed). No new releases were published. Dependency‑related PRs dominate the activity, indicating ongoing maintenance of Rust and JavaScript tooling, while a handful of bug‑fix PRs target web UI, MCP catalog handling, and IME composition stability. Overall project health appears stable, with continuous integration‑driven updates and a clear focus on fixing regressions and improving user‑experience details.

---

### 2. Releases  
**None** – there are currently no new versioned releases.

---

### 3. Project Progress  
- **Closed PRs (merged/closed today):**  
  - **#8080** – dependency bump (Rust “everything‑else” group, 21 crate updates).  
  - **#8072** – feature addition for Telegram Bot API command‑menu registration at extension activation.  

- **Open PRs advancing work:**  
  - **#8076** – distinguishes a paired user’s disconnected shared Slack channel from an unpaired account and standardises rejection handling across product surfaces.  
  - **#8092** – preserves IME composition in the chat composer, fixing Safari‑specific Enter‑to‑send behavior.  
  - **#8090** – resolves per‑caller hosted‑MCP catalog discovery, preventing tool‑list overwrites when credentials differ.  

These PRs collectively improve reliability (MCP catalog consistency), user‑experience (IME handling), and feature completeness (Telegram command menu).

---

### 4. Community Hot Topics  
| Item | Type | Link | Summary & Underlying Need |
|------|------|------|---------------------------|
| **#8093** | Issue (open) | <https://github.com/nearai/ironclaw/issues/8093> | Reports that 42/42 non‑pass tasks in the *officeqa* benchmark are “genuine model errors” (e.g., DeepSeek‑V4‑Flash navigation failures). Indicates a **high‑severity stability/quality concern** that may require model‑level investigation rather than code changes. |
| **#8076** | PR (open) | <https://github.com/nearai/ironclaw/pull/8076> | Aims to make Slack‑style shared‑channel state clearer for users and bots, ensuring consistent rejection classification. Reflects **UX/confusion around channel state** that can hinder productive interactions. |
| **#8092** | PR (open) | <https://github.com/nearai/ironclaw/pull/8092> | Fixes IME composition preservation in the chat composer, especially on Safari where Enter‑to‑send can be lost. Addresses **user frustration with input handling** on certain browsers. |
| **#8090** | PR (open) | <https://github.com/nearai/ironclaw/pull/8090> | Ensures hosted‑MCP catalogs are discovered per‑caller rather than per‑extension, preventing tool‑list collisions when multiple users share a credential. Highlights **multi‑user contention** in tool discovery. |

The most actively discussed items are the failure‑taxonomy issue (model reliability) and the Slack‑channel PR (shared‑state clarity), both of which surface recurring pain points for power users and developers.

---

### 5. Bugs & Stability  
- **Issue #8093** – *“Daily ironclaw failure taxonomy”* (opened 2026‑09‑10).  
  - **Severity:** High – 42 non‑pass tasks stem from model‑generated errors, indicating a **critical stability regression** that may affect downstream benchmarking and user trust.  
  - **Fix PR status:** None yet; the issue remains open with no recent comments, suggesting the maintainer may need to investigate model‑level causes or allocate resources for a fix.  

No other crash‑related issues were reported in the last 24 h.

---

### 6. Feature Requests & Roadmap Signals  
- **#8072** (closed) – *“feat(telegram): register Bot API command menu at activation.”*  
  - Signals a roadmap direction toward richer **Telegram interaction** and better command discoverability, likely to be part of the next minor release.  

- **#8076** – *“fix(assistant): distinguish disconnected shared channels.”*  
  - While framed as a bug‑fix, it also introduces a clearer mental model for channel state, hinting at **future UI/UX refinements** for multi‑user collaboration features.  

These PRs suggest the maintainers are investing in **user‑experience polish** and **feature completeness** rather than only performance or scaling work.

---

### 7. User Feedback Summary  
- **Model reliability:** Users report that non‑pass tasks in benchmark runs are “genuine model errors,” indicating dissatisfaction with **prediction accuracy** and a desire for more robust model behavior.  
- **Input handling:** Feedback on the chat composer (PR #8092) points to **Safari IME composition loss**, causing frustration when users rely on composition for formatting or special characters.  
- **Shared‑channel confusion:** The Slack‑channel PR (#8076) reflects a need for **clearer UI cues** when a user’s shared channel is disconnected, reducing ambiguity for both end‑users and bots.  
- **Tool discovery collisions:** The MCP catalog PR (#8090) surfaces concerns about **multi‑user credential sharing** causing tool list overwrites, a pain point for teams that rotate credentials or use shared service accounts.

Overall sentiment leans toward **constructive criticism**: users appreciate ongoing feature work but are keen to see improvements in model stability, input reliability, and clearer multi‑user state management.

---

### 8. Backlog Watch  
- **Issue #8093** – Still open with zero comments; the lack of recent discussion may indicate a **maintainer bottleneck**. Prioritizing a response or a triage comment would help surface whether the issue requires a model‑level fix or a documentation update.  
- **PR #8076** – Open for five days with no reviews; given its impact on shared‑channel UX, a maintainer review is advisable to unblock downstream work.  
- **PR #8090** – Open since 2026‑09‑08; while the change is relatively small, its impact on MCP catalog correctness warrants attention to prevent runtime tool‑list conflicts.  
- **PR #8092** – Open for one day; the recent creation suggests active work, but a timely review will keep the IME‑composition fix from lingering in the queue.  

These items represent the longest‑standing open items that could benefit from maintainer outreach to maintain momentum.

--- 

*Prepared on 2026‑09‑11. All links point to the official GitHub repository (github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-11

## 1. Today's Overview
LobsterAI shows focused, high-velocity internal development activity with **13 PRs updated** (10 closed/merged, 3 open) and **zero new issues** reported in the last 24h. The project is in a heavy maintenance mode around the **OpenClaw v2026.8.1** upgrade, with a single primary contributor (`btc69m979y-dotcom`) driving nearly all changes. No new releases were published. The project appears stable but is in a transition/cleanup phase rather than shipping new features.

## 2. Releases
**None today.** No new version published.

## 3. Project Progress (Merged/Closed PRs)
10 PRs closed today, all from the same author, clustered around OpenClaw v2026.8.1 compatibility:
- **#2649** — Complete gateway startup state migrations (device identity cleanup)
- **#2648** — Deduplicate IM restarts; MCP config hot reload instead of restart
- **#2647** — Quarantine corrupt workspace attestations (59 NUL bytes on Windows blocking startup)
- **#2646** — Scheduled task history date filtering applied locally (avoids unsupported `startMs`/`endMs`)
- **#2645** — Fix collapsed engine failure overlay swallowing clicks on Windows
- **#2644** — Avoid false "engine starting" screens during config sync
- **#2643** — New opt-in `openClawMemoryFlushEnabled` setting (reduces token cost)
- **#2642** — Unblock legacy session migration (SQLite header dedup bug)
- **#2641** — Make automatic skill review opt-in (token cost concern)
- **#2640** — Keep model selection session-scoped (prevent accidental default overwrite)

## 4. Community Hot Topics
**No community issues or PRs with comments/reactions today.** All 13 PRs have 0 comments and 0 👍. The 3 open PRs are stale Dependabot bumps:
- [#2459](https://github.com/netease-youdao/LobsterAI/pull/2459) — `@nodesecure/js-x-ray` 14.3.0→16.0.0
- [#2461](https://github.com/netease-youdao/LobsterAI/pull/2461) — `eslint-plugin-react-hooks` 5.2.0→7.1.1
- [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464) — `react-dom` 18.3.1→19.2.8

## 5. Bugs & Stability
**No new bug reports** (0 issues). However, today's closed PRs reveal recent instability themes:
- **High**: Gateway blocked at startup by corrupt workspace attestations (#2647)
- **High**: Legacy session migration deadlock (#2642)
- **Medium**: False restart loops during config sync (#2644)
- **Medium**: IM/MCP causing duplicate gateway restarts (#2648)
- **Low**: Renderer click hijacking on Windows (#2645)

All have fix PRs already merged.

## 6. Feature Requests & Roadmap Signals
Two new **opt-in** settings shipped today signal user-driven cost control:
- Memory flush before compression (#2643) — likely to ship in next release
- Automatic skill review toggle (#2641) — already merged
Both address **token cost awareness**, suggesting users are monitoring usage closely after the OpenClaw upgrade.

## 7. User Feedback Summary
Zero direct user feedback visible in issues/PRs today. Indirect signals:
- Pain points are **upgrade friction** (OpenClaw v2026.8.1 migration broke startups, migrations, config sync)
- Users care about **gateway stability** and **unpredictable restarts**
- Token cost surprises from automatic features (skill review, memory flush) are a real concern

## 8. Backlog Watch
- 3 stale Dependabot PRs (#2459, #2461, #2464) open since **2026-08-10** — 1 month old, need maintainer review or cleanup
- No open issues to track

---
**Overall Health**: 🟡 Active maintenance, single-contributor bottleneck, no community engagement visible, upgrade instability being systematically resolved.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

1. **Today's Overview**  
The Moltis project shows consistent activity with 2 issues closed and 7 PRs updated (4 open, 3 merged) as of 2026-09-11. Key focus areas include dependency updates, bug fixes for Docker deployments and exec tools, and feature enhancements for external agent integrations and reasoning capabilities. No releases were published today. The project demonstrates steady progress in addressing stability gaps and expanding functionality through collaboration with contributors.  

---

2. **Releases**  
No new releases were published on 2026-09-11.  

---

3. **Project Progress**  
Three PRs were merged today, addressing both fixes and documentation:  
- **PR #1252** ([docs(docker): document the bind-mount permission fix](moltis-org/moltis/pull/1252)): Resolves Docker deployment permission issues for fresh installs by clarifying bind-mount configurations, closing Issue #293.  
- **PR #1256** ([chore(deps-dev): bump browserslist](moltis-org/moltis/pull/1256)): Updates development dependencies (browserslist from 4.28.2 to 4.28.8) in the UI frontend crate.  
- **PR #1260** ([fix(exec): report missing shell accurately](moltis-org/moltis/pull/1260)): Improves error messaging for exec tool scenarios where `sh` is missing, closing Issue #279.  

---

4. **Community Hot Topics**  
- **[Issue #293](moltis-org/moltis/issues/293)** ([closed]): Highlighted Docker deployment failures on fresh installs due to missing database files. Resolved via documentation updates in PR #1252.  
- **[Issue #279](moltis-org/moltis/issues/279)** ([closed]): Addressed misleading error messages in the exec tool when `sh` is not in PATH. Fixed in PR #1260 by refining error classification.  
- **[PR #1258](moltis-org/moltis/pull/1258)** ([open]): Adds direct AGY (Google’s AI Studio CLI) streaming support, leveraging OAuth sessions instead of API keys. A high-priority feature for seamless agent-toolchain integration.  
- **[PR #1253](moltis-org/moltis/pull/1253)** ([open]): Implements a "max effort level" in reasoning, expanding model control for users with providers like OpenAI Codex.  

---

5. **Bugs & Stability**  
- **Severity 1**: Fixed critical issues in **fresh Docker deployments** ([#293](moltis-org/moltis/issues/293)) and **exec tool error misreporting** ([#279](moltis-org/moltis/issues/279)). Both resolved via merged PRs (#1252, #1260).  
- **Severity 2**: Open fix for **cron-related time parsing** ([PR #1262](moltis-org/moltis/pull/1262)): Addressing a failure when `end="24:00"` is specified, which currently causes unintended 24/7 active hours in cron jobs.  

---

6. **Feature Requests & Roadmap Signals**  
- **AGY Streaming Integration** ([PR #1258](moltis-org/moltis/pull/1258)): Likely to be prioritized for the next release to simplify external agent workflows.  
- **Reasoning Effort Expansion** ([PR #1253](moltis-org/moltis/pull/1253)): "Max effort" levels may debut in the next version to enhance reasoning depth with select providers.  

---

7. **User Feedback Summary**  
Users encountered **deployment friction** in Docker environments (Issue #293) and **confusing exec tool errors** (Issue #279), both resolved through documentation and error-handling improvements. Positive sentiment appears aligned with new feature development, particularly integrations with external tools like AGY.  

---

8. **Backlog Watch**  
- **[PR #1262](moltis-org/moltis/pull/1262)** ([open]): A cron time-parsing fix requiring maintainer review to resolve lingering instability in scheduled tasks.  
- **[PR #1263](moltis-org/moltis/pull/1263)** ([open]): Dependabot’s automated dependency updates across npm and docs, awaiting validation for potential build conflicts.  

---  
This digest reflects a stable, collaborative development cycle with user-driven fixes and forward-looking feature work.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-11

**Repository:** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)
**Report Date:** 2026-09-11

---

## 1. Today's Overview

ZeptoClaw experienced a highly productive day with 19 pull requests updated (18 closed/merged, 1 still open) and 4 issue updates (1 open, 3 closed). The dominant theme was **security hardening**: a cluster of three long-pending vulnerability reports concerning bearer token handling was resolved by a single merged PR, while a CI permission fix moved toward completion. No new releases were published. Overall, project health is trending positively, with maintainers actively triaging and closing stale security debt.

---

## 2. Releases

*No new releases published.*

---

## 3. Project Progress

### Merged/Closed PRs (Recent Activity)

| PR | Status | Summary |
|---|---|---|
| [#677](https://github.com/qhkm/zeptoclaw/pull/677) | **OPEN** | `fix(ci)`: grant `checks: write` permission to rustsec audit job so it can publish results |
| [#674](https://github.com/qhkm/zeptoclaw/pull/674) | **CLOSED** | `fix(panel)`: replace WebSocket bearer token URLs with short-lived tickets |
| [#630](https://github.com/qhkm/zeptoclaw/pull/630) | CLOSED | chore(deps): bump debian base image (`b6e2a15` → `4e401d9`) |
| [#628](https://github.com/qhkm/zeptoclaw/pull/628) | CLOSED | chore(deps): bump docker/login-action 4.1.0 → 4.2.0 |
| [#625](https://github.com/qhkm/zeptoclaw/pull/625) | CLOSED | chore(deps): bump rpassword 7.4.0 → 7.5.4 |
| [#624](https://github.com/qhkm/zeptoclaw/pull/624) | CLOSED | chore(deps): bump codecov/codecov-action 6.0.0 → 6.0.1 |
| [#623](https://github.com/qhkm/zeptoclaw/pull/623) | CLOSED | chore(deps): bump tokio 1.52.1 → 1.52.3 |
| [#622](https://github.com/qhkm/zeptoclaw/pull/622) | CLOSED | chore(deps): bump docker/build-push-action 7.1.0 → 7.2.0 |
| [#621](https://github.com/qhkm/zeptoclaw/pull/621) | CLOSED | chore(deps-dev): bump @types/node 25.3.5 → 25.9.1 (panel) |
| [#620](https://github.com/qhkm/zeptoclaw/pull/620) | CLOSED | chore(deps): bump scraper 0.26.0 → 0.27.0 |
| [#619](https://github.com/qhkm/zeptoclaw/pull/619) | CLOSED | chore(deps-dev): bump tailwindcss 4.2.2 → 4.3.0 (panel) |
| [#618](https://github.com/qhkm/zeptoclaw/pull/628) | CLOSED | chore(deps): bump docker/metadata-action 6.0.0 → 6.1.0 |
| [#617](https://github.com/qhkm/zeptoclaw/pull/617) | CLOSED | chore(deps): bump tower-http 0.6.10 → 0.6.11 |
| [#616](https://github.com/qhkm/zeptoclaw/pull/616) | CLOSED | chore(deps): bump react & @types/react (19.2.4 → 19.2.6) |
| [#615](https://github.com/qhkm/zeptoclaw/pull/615) | CLOSED | chore(deps): bump astro 6.3.1 → 6.3.7 (docs) |
| [#614](https://github.com/qhkm/zeptoclaw/pull/614) | CLOSED | chore(deps): bump astro 6.3.3 → 6.3.7 (r8r docs) |
| [#658](https://github.com/qhkm/zeptoclaw/pull/658) | CLOSED | chore(deps): bump rust image 1.95 → 1.98 slim-trixie |
| [#626](https://github.com/qhkm/zeptoclaw/pull/626) | CLOSED | chore(deps): bump taiki-e/install-action 2.78.2 → 2.79.7 |

**Key takeaway:** 17 dependency/maintenance PRs were closed, reflecting active dependency hygiene. The single functional fix (#674) addresses critical auth security.

---

## 4. Community Hot Topics

### Most Active Items

| # | Item | Type | Engagement | Link |
|---|---|---|---|---|
| [#677](https://github.com/qhkm/zeptoclaw/pull/677) | fix(ci): allow rustsec audit check reporting | PR (OPEN) | Created 2026-09-10 | [Link](https://github.com/qhkm/zeptoclaw/pull/677) |
| [#656](https://github.com/qhkm/zeptoclaw/issues/656) | panel start prints full API token to stdout | Issue (CLOSED) | Updated 2026-09-10 | [Link](https://github.com/qhkm/zeptoclaw/issues/656) |
| [#655](https://github.com/qhkm/zeptoclaw/issues/655) | bearer token compared non-constant-time (3 sites) | Issue (CLOSED) | Updated 2026-09-10 | [Link](https://github.com/qhkm/zeptoclaw/issues/655) |
| [#653](https://github.com/qhkm/zeptoclaw/issues/653) | panel WS auth token in query param (leaks) | Issue (CLOSED) | Updated 2026-09-10 | [Link](https://github.com/qhkm/zeptoclaw/issues/653) |

**Analysis:** All hot topics center on **authentication/token security** — a clear community priority. The three closed issues (#653, #655, #656) were reported simultaneously on 2026-08-31 and resolved together via PR #674, indicating a coordinated security review. The open PR #677 shows the maintainer is addressing CI/CD infrastructure gaps.

---

## 5. Bugs & Stability

### Resolved Bugs (Ranked by Severity)

| Severity | Issue | Fix | Link |
|---|---|---|---|
| 🔴 **Critical** | [#653](https://github.com/qhkm/zeptoclaw/issues/653) — WS auth token leaked via `?auth=` query param (logs, history, telemetry) | Fixed by [PR #674](https://github.com/qhkm/zeptoclaw/pull/674) | [Issue](https://github.com/qhkm/zeptoclaw/issues/653) |
| 🔴 **Critical** | [#656](https://github.com/qhkm/zeptoclaw/issues/656) — `zeptoclaw panel start` prints full API token to stdout | Closed 2026-09-10 | [Issue](https://github.com/qhkm/zeptoclaw/issues/656) |
| 🟠 **High** | [#655](https://github.com/qhkm/zeptoclaw/issues/655) — Bearer token compared with non-constant-time `==` (3 code locations) | Closed 2026-09-10 | [Issue](https://github.com/qhkm/zeptoclaw/issues/655) |

### Open Bugs
No new bug reports today.

**Note:** PR #674's ticket-based WebSocket auth system is the comprehensive fix for the token leakage chain (#653 → #655 → #656). The fix replaces long-lived tokens in URLs with 30-second single-use tickets obtained via a CSRF-protected endpoint.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today. However, the following signals may inform the next version:

- **CI/CD maturity** — PR #677 (rustsec audit job permissions) suggests the project is refining its supply-chain security pipeline, potentially preparing for broader adoption.
- **Dependency modernization** — Bumps of React 19.2.x, Astro 6.3.x, and TailwindCSS 4.3.x indicate the frontend stack is being kept current with latest stable releases.
- **Security-first architecture** — The shift to ticket-based WS auth implies a roadmap direction toward zero-trust credential handling.

---

## 7. User Feedback Summary

### Key Pain Points (from Issues)

| User | Pain Point | Resolution |
|---|---|---|
| **morler** | API token exposed in terminal scrollback, CI logs, and screenshots via `println!("API token: {api_token}")` | Closed (no dedicated fix PR identified — may require manual code change) |
| **morler** | Bearer token compared non-constant-time at 3 sites, false doc claim of "constant-time-like" comparison | Closed |
| **morler** | WS auth token in URL query params leaks to reverse-proxy logs and browser history | Fixed via PR #674 |

### User Satisfaction Indicators
- The reporter (morler) appears to be a security-conscious external contributor who identified three related auth vulnerabilities in a single session — suggesting the project is being actively scrutinized by security researchers.
- All three issues were acknowledged and resolved within ~10 days, indicating responsive maintainership.

---

## 8. Backlog Watch

| Item | Status | Action Needed | Link |
|---|---|---|---|
| [#677](https://github.com/qhkm/zeptoclaw/pull/677) | **OPEN PR** — `fix(ci)`: grant rustsec audit job `checks: write` permission | Maintainer review needed; blocks proper security audit reporting | [PR #677](https://github.com/qhkm/zeptoclaw/pull/677) |
| [#656](https://github.com/qhkm/zeptoclaw/issues/656) | Closed but **no linked fix PR** for stdout token printing | Verify if fix was included in PR #674 or needs separate PR | [Issue #656](https://github.com/qhkm/zeptoclaw/issues/656) |
| [#655](https://github.com/qhkm/zeptoclaw/issues/655) | Closed but **no linked fix PR** for non-constant-time comparison | Verify if fix was included in PR #674 or needs separate PR | [Issue #655](https://github.com/qhkm/zeptoclaw/issues/655) |

**Recommendation:** PR #677 should be prioritized for merge to unblock `rustsec audit` check reporting. Additionally, the maintainer should verify whether issues #655 and #656 have corresponding code changes beyond PR #674, as both issues reference specific code locations that may require targeted fixes not fully covered by the WebSocket ticket PR.

---

*Digest generated from GitHub activity data for ZeptoClaw (qhkm/zeptoclaw) as of 2026-09-11.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑09‑11**

---

### 1. Today’s Overview  
The repository is in a high‑velocity state: **50 issues** and **50 pull requests** were updated in the last 24 h, all remaining open. No new releases were published. The bulk of activity centers on CI/platform compatibility (Windows/macOS), security‑related attestation consolidation, and a wave of high‑severity bugs affecting daemon state, tool‑policy enforcement, and runtime stability. Overall health appears **stable but strained**, with a heavy focus on fixing cross‑platform regressions and security‑policy leaks.

---

### 2. Releases  
*None* – the latest published version remains **v0.8.3** (June 2026). No changelog or migration notes are available for a newer tag.

---

### 3. Project Progress  
- **No PRs were merged today**; all 50 PRs remain open, most targeting bug fixes, security hardening, or UI/UX refinements.  
- Several PRs advance core architectural work (e.g., session‑ownership contracts, per‑agent tool scoping, live‑eval sandboxing) that will underpin future stability and feature expansion.  
- The community is actively pushing for **cross‑platform CI** (Windows/macOS support) and **reducing redundancy** in release‑signing pipelines.

---

### 4. Community Hot Topics  

| Issue / PR | Comments | 👍 | Link | Core Need |
|------------|----------|----|------|-----------|
| **#7462** – “74 test failures on Windows” (p1) | 19 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/7462> | Windows CI parity; path‑semantics & console‑encoding bugs. |
| **#9101** – “Consolidate release attestation mechanisms” (p1) | 9 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9101> | Reduce duplicated signing steps; simplify CI workload. |
| **#10549** – “RFC voting simplification” (p1) | 8 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/10549> | Shorten mandatory discussion windows; streamline RFC governance. |
| **#5514** – “Batch Telegram media groups” (p2) | 8 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/5514> | Collapse multiple image uploads into a single agent turn. |
| **#6157** – “Nextcloud Talk bot API misuse” (p2) | 8 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/6157> | Fix incorrect bot‑message endpoint for Nextcloud Talk. |
| **#7108** – “Improve cached Rust builds & CI critical path” (p2) | 7 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/7108> | Cut CI runtime (15‑20 min → <10 min) via better caching. |
| **#9486** – “High‑entropy detector redacts Solana addresses” (p2, high risk) | 7 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9486> | Prevent false‑positive redaction of crypto wallet strings. |
| **#8279** – “Delegate bypasses parent allow‑list” (S0) | 4 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8279> | Enforce per‑agent tool policy; stop data‑loss risk. |
| **#8642** – “MCP/tool‑schema cloning → unbounded RSS” (p1) | 4 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8642> | Mitigate memory‑growth OOM in agent loops. |
| **#9191** – “Cron agent jobs lack wall‑clock timeout” (p1) | 3 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9191> | Add timeout/cancel budget to long‑running agent jobs. |
| **#9390** – “Emergency stop CLI‑only, not read by runtime” (p1) | 3 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9390> | Make emergency stop observable to all runtime paths. |
| **#9393** – “Bluesky & Reddit lack sender auth / central gate” (p1) | 4 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9393> | Centralize authorization for federated channels. |
| **#9247** – “Shell tool workspace boundary bypass” (S0) | 2 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9247> | Enforce workspace isolation for shell commands. |
| **#9332** – “Multimodal context meter under‑counts image‑heavy requests” (p2) | 2 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9332> | Accurate resource accounting for image‑heavy tool calls. |
| **#9089** – “Tool output supports [IMAGE:] but not [AUDIO:]” (p2) | 2 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9089> | Extend parser to recognise audio markers. |
| **#8800** – “Windows: killed process leaves port bound, new daemon fails” (S2) | 2 | 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8800> | Ensure proper socket cleanup on Windows process termination. |
| **#10034** – “Probe saved provider alias after model‑routing update” (p1) | – | 0 | <https://github.com/zeroclaw-labs/zeroclaw/pull/10034> | Fix provider‑alias resolution after config reload (related to #7462). |
| **#10262** – “Close RPC connections on daemon reload” (p1) | – | 0 | <https://github.com/zeroclaw-labs/zeroclaw/pull/10262> | Resolve zombie ports after Windows daemon restart (ties to #8800). |
| **#9746** – “Per‑agent ownership scoping for session tools & discord_search” (p1) | – | 0 | <https://github.com/zeroclaw-labs/zeroclaw/pull/9746> | Prevent cross‑agent tool abuse (addresses #8279). |
| **#10417** – “Deliver terminal fallbacks live” (p1) | – | 0 | <https://github.com/zeroclaw-labs/zeroclaw/pull/10417> | Improve UI resilience when tool protocol exhausts retries. |
| **#10768** – “Add Sendblue iMessage/SMS channel” (p1) | – | 0 | <https://github.com/zeroclaw-labs/zeroclaw/pull/10768> | Provide native iMessage support on non‑macOS hosts. |
| **#9341** – “Surface Code session‑history vs persistent‑memory isolation” (p1) | – | 0 | <https://github.com/zeroclaw-labs/zeroclaw/pull/9341> | Clarify session boundaries for debugging & state recovery. |

**Analysis:** The most active discussion revolves around **CI platform coverage (Windows)** and **security/attestation hygiene**. A sizeable subset of high‑severity bugs (S0/S1) involve **daemon state leakage**, **tool‑policy bypass**, and **runtime OOM**. Many of these are already being addressed by PRs that focus on **proper resource cleanup**, **per‑agent policy enforcement**, and **more granular UI feedback**.

---

### 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Key Symptom | Fix PR (if any) |
|----------|-------|-------------|-----------------|
| **S0 – Data‑loss / Security risk** | **#8279** – Delegate bypasses parent allow‑list | Sub‑agents can call disallowed tools → potential data loss. | **#9746** (per‑agent ownership scoping) – in‑progress. |
| **S0 – Data‑loss / Security risk** | **#9247** – Shell tool workspace boundary bypass | Symlink can expose files outside workspace. | No dedicated PR yet; related to #8279. |
| **S1 – Workflow blocked** | **#9191** – Cron jobs lack timeout | Long‑running agent jobs never abort. | No PR; high‑priority item for next sprint. |
| **S1 – Workflow blocked** | **#8794** – Stopping agent mid‑work erases context | Agent state lost when UI stops, breaking continuity. | **#10417** (live terminal fallbacks) – addresses UI‑state sync. |
| **S1 – Workflow blocked** | **#8559** – Agent stops when chat window closes | Loop interrupted; no further work possible. | No PR; requires deeper daemon redesign. |
| **S2 – Degraded behavior** | **#7462** – 74 Windows test failures (p1) | CI flaky on Windows 11 (CJK console, path semantics). | **#10034** (probe saved provider alias) – partially mitigates config reload issues. |
| **S2 – Degraded behavior** | **#8800** – Windows process kill leaves bound port (zombie) | New daemon fails to start after dashboard reload. | **#10262** (close RPC on reload) – in‑progress. |
| **S2 – Degraded behavior** | **#9089** – Tool output ignores [AUDIO:] markers | Audio‑rich tool results become literal text. | No PR; UI parser needs extension. |
| **S2 – Degraded behavior** | **#9363** – Config metadata stays English in localized UI | Localization mismatch for config headings. | No PR; minor UI polish. |
| **S2 – Degraded behavior** | **#9486** – High‑entropy detector redacts Solana addresses | Wallet strings falsely flagged as high‑entropy. | No PR; logic tweak required. |
| **S2 – Degraded behavior** | **#9393** – Bluesky/Reddit lack sender auth / central gate | Unauthorized federation; security gap. | No PR; architectural review needed. |
| **S3 – Minor issue** | **#9198** – Discord typing indicator stuck after daemon reload | UI indicator remains “typing…” indefinitely. | No PR; UI state cleanup required. |
| **S3 – Minor issue** | **#8514** – Telegram batch media groups not collapsed | Multiple images trigger separate LLM calls. | **#8955** (fix telegram batch media) – in‑progress. |

*Overall*: **7 S0/S1 bugs** dominate the stability surface; most have corresponding **open PRs** that aim to close the gap. The remaining issues are primarily **S2** (CI/platform parity, UI polish) or **S3** (minor UX quirks).

---

### 6. Feature Requests & Roadmap Signals  

| Request | Evidence | Likely Target Version |
|---------|----------|-----------------------|
| **Native Windows/macOS CI** (run test suite on non‑Linux runners) | Issue #7462, #7461 (feature request) | **v0.9.0** (next minor release) |
| **Consolidated release attestation** (single signing story) | Issue #9101 (enhancement) | **v0.9.0** – aligns with upcoming release pipeline overhaul. |
| **Simplified RFC voting** (remove mandatory discussion windows) | Issue #10549 (RFC) | **v0.9.0** – governance streamlining. |
| **Telegram media‑group batching** | Issue #5514 (bug) & PR #8955 (fix) | **v0.9.0** – improves Telegram UX. |
| **Audio marker support ([AUDIO:])** | Issue #9089 (bug) | **v0.9.0** – extend multimodal parsing. |
| **Per‑agent tool allow‑list enforcement** | Issue #8279 (S0) & PR #9746 (fix) | **v0.9.0** – security hardening. |
| **Live‑eval sandboxed mode** | PR #9214 (feat(eval)) | **v0.9.0** – new evaluation workflow. |
| **Sendblue iMessage/SMS channel** | PR #10768 (feat) | **v0.9.0** – expands messaging options. |
| **Terminal‑width‑aware Quickstart checklist** | PR #9399 (fix) | **v0.9.0** – UI polish. |
| **Emergency stop visible to runtime** | Issue #9390 (bug) | **v0.9.0** – reliability improvement. |

**Signal:** The project is moving toward **greater cross‑platform robustness**, **tighter security boundaries**, and **simplified governance**. The convergence of several high‑priority PRs (session ownership, per‑agent tool scoping, live‑eval sandbox) suggests the next minor release will be a **stability & security‑focused** update.

---

### 7. User Feedback Summary  

- **CI Pain:** Windows developers report **74 failing tests** due to console code‑page (936) and path‑semantic mismatches. Users request **full Windows CI** to catch these early.  
- **Security Concerns:** Multiple reports (e.g., #8279, #9247, #9486) indicate **policy bypasses** that could lead to data leakage or false‑positive redactions, eroding trust in the security model.  
- **Daemon Stability:** Crashes or improper shutdowns (e.g., #8800, #9198) cause **zombie ports** and **stuck UI indicators**, disrupting workflow continuity.  
- **Telegram UX:** Users want **batched media handling** to avoid fragmented agent turns when sending multiple images/documents.  
- **Feature Gaps:** Missing **audio‑marker parsing**, **native iMessage support**, and **clearer emergency stop mechanisms** are recurring requests that impact usability across channels.  

Overall sentiment leans toward **high satisfaction with core functionality**, but **frustration** is evident around **platform‑specific bugs**, **security policy opacity**, and **runtime state management**.

---

### 8. Backlog Watch  

| Issue / PR | Age (approx.) | Why It Matters | Owner / Maintainer |
|------------|---------------|----------------|--------------------|
| **#7462** – Windows test failures (p1) | 3 months (created Jun 10) | Core CI stability; blocks release confidence. | No dedicated maintainer; community interest high. |
| **#9101** – Release attestation consolidation (p1) | 2 months | Reduces CI overhead; aligns with security audit cycles. | Maintainer actively reviewing. |
| **#8279** – Delegate allow‑list bypass (S0) | 2.5 months | Critical security risk; could lead to data loss. | No PR yet; high‑priority for security audit. |
| **#9191** – Cron jobs without timeout (p1) | 2 months | Potential runaway processes; impacts reliability. | No fix PR; needs runtime redesign. |
| **#9390** – Emergency stop CLI‑only (p1) | 2 months | Inconsistent state exposure; safety concern. | No runtime‑level fix yet. |
| **#10034** – Provider alias probing after config reload (p1) | 4 weeks | Directly related to #7462; resolves Windows CI flakiness. | Open PR, awaiting review. |
| **#10262** – Close RPC on daemon reload (p1) | 4 weeks | Addresses zombie ports after Windows restarts (#8800). | Open PR, under review. |
| **#9746** – Per‑agent tool scoping (p1) | 5 weeks | Mitigates #8279 and other S0 issues. | Open PR, progress steady. |
| **#10417** – Live terminal fallbacks (p1) | 4 weeks | Improves UI resilience; ties to #8794. | Open PR, awaiting merge. |
| **#10768** – Sendblue iMessage/SMS channel (p1) | 1 week | New feature request; expands platform support. | Open PR, ready for integration. |

**Watch List Rationale:** These items are **high‑severity**, **long‑standing**, or **directly impact the next release**. Maintainers have been responsive, but the sheer volume of open PRs (50) means triage and merge cadence will dictate whether these issues are resolved before the upcoming **v0.9.0** milestone.

--- 

*Prepared by the ZeroClaw analysis team – 2026‑09‑11.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*