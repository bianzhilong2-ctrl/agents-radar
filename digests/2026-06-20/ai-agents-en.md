# OpenClaw Ecosystem Digest 2026-06-20

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-20 02:32 UTC

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

⚠️ Summary generation failed.

---

## Cross-Ecosystem Comparison

User Safety: safe

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# NanoBot Project Digest - 2026-06-20

## Today's Overview
The NanoBot project shows strong development activity with 33 PR updates and 11 issue updates in the last 24 hours. The repository is actively addressing both bug fixes and feature enhancements, with a focus on improving multi-channel support, performance optimizations, and model handling capabilities. Recent work indicates a maturing codebase with attention to operational stability and user experience refinements.

## Releases
No new releases today.

## Project Progress
**Merged/Closed PRs Today (6 items):**
- [#4412](https://github.com/HKUDS/nanobot/pull/4412) - Suppresses routine cron job notifications that were spamming users after the cron-session-binding refactor
- [#4394](https://github.com/HKUDS/nanobot/pull/4394) - Adds support for OpenAI image reference edits with proper routing and error handling
- [#4342](https://github.com/HKUDS/nanobot/pull/4342) - Fixes Feishu WebSocket card content reading for proper message rendering
- [#4246](https://github.com/HKUDS/nanobot/pull/4246) - Resolves session deletion asymmetry by removing legacy path files during cleanup
- [#4230](https://github.com/HKUDS/nanobot/pull/4230) - Sets httpx timeout for streamableHttp transport to prevent indefinite hangs
- [#4138](https://github.com/HKUDS/nanobot/pull/4138) - Adds `tools.file.enable` toggle for filesystem tools to support sandboxed environments

These merges demonstrate active maintenance of communication channels (Feishu, Telegram preparations) and operational reliability improvements.

## Community Hot Topics
**Most Active Issues/PRs:**
- [Issue #4013](https://github.com/HKUDS/nanobot/issues/4013) (5 comments) - Critical streaming stall error affecting real-world usability, with user reporting complete workflow breakdown after version upgrade
- [Issue #4374](https://github.com/HKUDS/nanobot/issues/4374) (3 comments) - Project workspace read/write asymmetry causing configuration inconsistencies
- [Issue #4389](https://github.com/HKUDS/nanobot/issues/4389) (2 comments) - Per-model context window token handling for better fallback model management

The underlying community need is for **stable production deployments** and **reliable multi-environment operation**, particularly around version upgrades and workspace isolation.

## Bugs & Stability
**Critical Issues Requiring Attention:**
1. **Issue #4013** - Stream stalls for >90 seconds rendering AI unusable (no fix PR visible)
2. **Issue #4287** - Empty model responses don't trigger fallback, causing silent failures in Telegram bot deployments
3. **Issue #4345** - Image strip fallback leaks file paths and misleads model perception (closed but potentially incomplete)
4. **Issue #4052** - MCP notification validation errors breaking server integrations

**Stability Improvements Merged:**
- Session management cleanup and timer configuration fixes address operational reliability
- HTTP timeout configurations prevent indefinite connection hangs

## Feature Requests & Roadmap Signals
**High-Priority Requests:**
- [Issue #4419](https://github.com/HKUDS/nanobot/issues/4419) - Automatic reasoning effort escalation for adaptive model thinking depth
- [Issue #4420](https://github.com/HKUDS/nanobot/issues/4420) - Performance optimization caching token estimation for faster response times
- [Issue #4418](https://github.com/HKUDS/nanobot/issues/4418) - Improved heartbeat task channel targeting for multi-user environments
- [Issue #4413](https://github.com/HKUDS/nanobot/issues/4413) - Telegram rich message formatting for enhanced UX

**Likely Next-Version Features:**
Based on PR activity (#4416, #4415, #4414), expect enhanced cron capabilities with model presets, spawn model overrides, and aggregated subagent results.

## User Feedback Summary
Users highlight significant **version upgrade pain points** (#4013: 0.1.5 → 0.2.0 breaking workflows) and **operational friction** in production deployments. Key satisfaction areas include improved Telegram integration potential and performance optimization efforts. Dissatisfaction stems from **stream reliability issues** and **workspace configuration inconsistencies** that break expected workflows.

## Backlog Watch
**Long-Unanswered Important Items:**
- [PR #1945](https://github.com/HKUDS/nanobot/pull/1945) (since 2026-03-12) - XMPP channel support awaiting maintainer review despite functional implementation
- [PR #3591](https://github.com/HKUDS/nanobot/pull/3591) (since 2026-05-02) - Dream scope controls for preventing skill drift in automated contexts
- [PR #3590](https://github.com/HKUDS/nanobot/pull/3590) (since 2026-05-02) - Manual heartbeat trigger command for controlled execution

These items represent **strategic functionality expansion** and **operational safety controls** that would benefit from maintainer attention to complete the platform's enterprise readiness.


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – 2026‑06‑20**  
*Compiled from the latest GitHub activity (issues, PRs, releases). All links are to the original GitHub entries.*

---

## 1. Today’s Overview
- The project saw **50 issue updates** and **50 PR updates** in the last 24 h, indicating a very active day of development and community reporting.  
- One new release (**v0.17.0 / v2026.6.19**) went live, bringing the “Reach Release” updates, additional community contributors, and a host of bug‑fixes and feature refinements.  
- Activity is **high but stable**: most updates are focused on bug‑fixes, platform adapters, and CLI/API improvements rather than major architectural changes.  
- The community is engaging with both **long‑standing open issues** and **new feature proposals**, suggesting ongoing interest in multi‑modal integrations and desktop‑app polish.

---

## 2. Releases| Version | Tag | Release Date | Highlights |
|---------|-----|--------------|------------|
| **v0.17.0** (v2026.6.19) | - | 19 Jun 2026 | • ~1,475 commits since v0.16.0  <br>• ~800 merged PRs <br>• 1,693 files changed, 235,390 insertions, 50,730 deletions <br>• 300+ issues closed <br>• 245 community contributors <br>• “The Reach Release” – builds on v0.16.0’s desktop support with broader platform adapters and CLI refinements |
| **Previous** | v0.16.0 | 12 Jun 2026 | Desktop‑focused release (now superseded) |

*Breaking changes:* None explicitly listed in the changelog for v0.17.0, but the release notes hint at **runtime‑contract parity for desktop plugins** and **new credential‑proxy daemon** work that may affect custom provider implementations. Migration guidance is limited to reviewing the migration guide in the repository README.

---

## 3. Project Progress (Merged / Closed PRs & Advanced Features)

- **Merged / Closed PRs today:**  
  - PR #49280 – *“Fix silent delivery failures in Signal live adapter (#49260)”* – resolves the silent‑delivery bug reported in issue #49260.  
  - PR #49349 – *“fix(desktop): sync global profile store after Manage Profiles mutations”* – removes stale profile icons after deletion.  
  - PR #49352 – *“fix(desktop,windows): use pythonw.exe for background actions to avoid console window”* – improves UX on Windows.  
  - PR #49367 – *“fix(test): clear HERMES_REAL_HOME env leak in copilot ACP home test”* – stabilises CI testing.  
  - PR #49366 – *“fix: confirm explicit gateway restarts”* – ensures user receives an acknowledgement when `/restart` is invoked.  

- **Technical Advancements:**    - **Cron enhancements**: new `deliver_file` override capability (PR #49372) allowing deterministic delivery of files via scheduled jobs.  
  - **Execution receipts** (PR #49371) – opt‑in metadata for tool outcomes, paving the way for richer loop‑back monitoring.  
  - **Telegram startup timeout** (PR #49369) – prevents indefinite hangs caused by DoH discovery loops.  
  - **Kanban request_review transition** (PR #49368) – adds a first‑class “review” status for CI/CD pipelines inside Hermes.  

- **CLI & Auth Fixes:**  
  - PR #49362 clears stale `api_key`/`api_mode` when switching away from custom providers.  
  - PR #49351 improves Nous Portal token resilience, preventing token‑refresh churn.

---

## 4. Community Hot Topics  

| Item | Type | Comments (≈) | Link | Core Need |
|------|------|--------------|------|-----------|
| **Issue #4656** – *credential proxy daemon* | Feature / Type‑change | 11 | <https://github.com/NousResearch/hermes-agent/issues/4656> | Secure, zero‑knowledge broker for agent credentials to eliminate attack surface. |
| **Issue #45924 / #49297** – *Gemma 4 12B via Ollama fails* | Bug (repro) | 5‑3 | <https://github.com/NousResearch/hermes-agent/issues/45924> / <https://github.com/NousResearch/hermes-agent/issues/49297> | Integration of locally‑hosted LLM back‑ends (Ollama) into Hermes UI without errors. |
| **Issue #23802** – *CLI plugin filter bug* | Bug / Feature | 3 | <https://github.com/NousResearch/hermes-agent/issues/23802> | CLI should expose entry‑point‑discovered plugins; currently filtered out. |
| **PR #49371** – *add opt‑in execution receipts* | Feature / Enhancement | — | <https://github.com/NousResearch/hermes-agent/pull/49371> | Visibility into tool‑outcome success / failure for debugging loops. |
| **PR #49372** – *deterministic cron delivery* | Feature / Reliability | — | <https://github.com/NousResearch/hermes-agent/pull/49372> | Guarantees a file is delivered *exactly* when fresh, reducing nondeterministic scheduling bugs. |

**Analysis:**  
- **Security & credential handling** is top‑of‑mind (Issue #4656).  
- **LLM backend integration** (Gemma 4) reveals friction between local Ollama deployments and Hermes UI – users expect seamless “just works” experiences.  
- **Plugin discovery** (Issue #23802) shows developers want full plugin visibility from the CLI.  
- **Execution receipts** and **deterministic cron** signal a desire for better observability and predictability in automated workflows.

---

## 5. Bugs & Stability  

| Severity | Issue | Symptoms | Current Status |
|----------|-------|----------|----------------|
| **Critical** | #49307 *Context compression causes answer repetition & new instruction loss* | Repetitive responses, lost instructions in long sessions | Open; reproduction described in attached markdown. |
| **High** | #47868 *Strict chat‑completions reject timestamp metadata* | OpenAI‑compatible back‑ends reject extra fields, causing failures with Fireworks models | Open. |
| **High** | #49283 *Execute_code consent gate does not recognize explicit chat consent* | `execute_code` tool repeatedly blocked even after explicit consent | Open. |
| **Medium** | #49326 *Chinese punctuation triggers settings screen* | Comma `,` or full‑stop `。` in Chinese input jumps to settings | Open. |
| **Medium** | #49332 *delegate_task model override ignored* | Sub‑agents always use session default model, ignoring per‑task model strings | Open. |
| **Low‑Medium** | #49345 *“Start Gateway” button does nothing* | UI button inert, no gateway start | Open. |
| **Closed** | #49260 *Signal cron deliveries silent* – fixed by PR #49280 | — | Resolved in PR #49280. |
| **Closed** | #43476 *Desktop /goal command swallowed* – fixed by PR #49349 (profile sync) and other UI tweaks | — | Resolved. |

**Overall Stability:** Most critical bugs are being addressed quickly; the majority of open high‑severity issues involve **metadata handling** and **LLM integration**. No regressions reported across the 50 PR updates today.

---

## 6. Feature Requests & Roadmap Signals  

| Request | Source | Likely Target Milestone |
|---------|--------|--------------------------|
| **Credential proxy daemon** (zero‑knowledge broker) | Issue #4656 | Likely part of **v0.18** – addresses credential security for future multi‑agent workflows. |
| **Desktop plugin dashboard parity** (load runtime plugins on Electron) | Issue #49363 | Targeted for next minor release (v0.18) to close the gap between web and desktop plugin ecosystems. |
| **Ordered failover chains for web/extract backends** | Issue #32159 | Requested for v0.19, as it requires design of a multi‑backend routing layer. |
| **GLM‑5.x reasoning support** (Zhipu GLM‑5.x models) | Issue #49279 | Could be added via a new model‑provider integration; may ship with a dedicated plugin. |
| **Persistent webhook sessions** | PR #49353 | Expected in v0.19 – enables long‑running external integrations (e.g., Feishu, Zulip). |
| **Deterministic delivery via `deliver_file`** | PR #49372 | Already merged; indicates a shift toward predictable scheduling semantics. |
| **Execution receipts** | PR #49371 | Core to upcoming **observability** enhancements, slated for early v0.18. |

**Interpretation:** The project is progressively tightening the **desktop‑web parity**, **security**, and **reliability** layers. The next stable release likely will focus on completing the plugin ecosystem and expanding multi‑modal provider support.

---

## 7. User Feedback Summary  

- **Positive signals:** Users love the **desktop Agent UI** (especially the new profile system) and the **speed of the CLI**. The recent v0.17 “Reach Release” is praised for adding a robust **desktop plugin architecture**.  
- **Pain points:**  
  - **Credential security** – users demand a zero‑knowledge proxy to safely store API keys.  
  - **LLM backend friction** – local Ollama models (e.g., Gemma 4) encounter errors when accessed via Hermes UI; the UI does not gracefully handle provider‑specific metadata (timestamps, token limits).  
  - **CLI plugin visibility** – plugins installed via entry‑points are hidden from `hermes plugins list`, making discovery opaque.  
  - **Desktop UI quirks** – punctuation input in Chinese triggers settings screens, and some GUI buttons (e.g., “Start Gateway”) are inert.  
  - **Execution transparency** – users want clear feedback on background tool runs (receipts, logs) to debug loops.  

Overall satisfaction remains high among early adopters, but **security & integration robustness** are the emerging focus areas for the community.

---

## 8. Backlog Watch  | Item | Type | Age (days) | Why it demands attention |
|------|------|------------|--------------------------|
| **Issue #4656** – *credential proxy daemon* | Feature | 73 (opened 2 Apr) | Critical for security; still open with 11 comments, no PR yet. |
| **Issue #39281** – *Gemma 4 12B Ollama failure* | Bug | 48 (opened 04 Jun) | Repeatedly resurfaces (issues #45924, #49297); impacts LLM adoption. |
| **PR #44335** – *Honcho OAuth connect* | Feature | 87 (opened 11 Mar) | Still open; would simplify desktop/OAuth onboarding. |
| **Issue #49326** – *Chinese punctuation jumps to settings* | Bug | 2 (opened 19 Jun) | Recent regression; needs quick fix for UI usability. |
| **PR #49367** – *clear HERMES_REAL_HOME env leak* | Test fix | 2 (opened 20 Jun) | Small but indicative of environment‑leak bugs that can cause flaky CI. |

**Recommendation:** Prioritize the **credential proxy daemon** design session, close the **Gemma 4 Ollama** bug triage, and merge the **Honcho OAuth** flow to streamline user onboarding.  

---

### Bottom Line  
- **Health:** The project is **actively maintained** with a healthy cadence of releases and community interactions.  
- **Risk:** Most critical bugs are being addressed promptly; the main long‑term risk lies in **security‑focused feature gaps** (credential proxy, OAuth integration).  
- **Opportunity:** The upcoming **desktop plugin parity** and **execution receipts** will close the gap between the web and Electron experiences, positioning Hermes as a full‑featured personal AI orchestration platform.  

*All links are live on GitHub and can be inspected for the latest details.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-20

## 1. Today's Overview

PicoClaw showed **moderate-to-high development activity** over the last 24 hours: **4 issues updated**, **7 PRs updated**, and **1 new nightly release** were recorded. Most PR activity is still open, with only **1 PR closed** today, suggesting active contribution flow but also a growing review/maintenance queue. The project appears to be moving toward **v0.3.0-era changes**, with nightly automation active via `v0.3.0-nightly.20260620.287853ab`. Key focus areas today include **Windows path handling, Telegram permission controls, attachment support, security hardening, Matrix identity parsing, MCP CLI behavior, and agent collaboration**.

---

## 2. Releases

### `nightly` — Nightly Build: `v0.3.0-nightly.20260620.287853ab`

- Release page / artifact: `nightly`
- Version: `v0.3.0-nightly.20260620.287853ab`
- Description: Automated nightly build.
- Stability note: Marked as **may be unstable**; users should treat it as a test build.
- Full changelog: [Compare `v0.3.0...main`](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

### Breaking changes / migration notes

No explicit breaking changes or migration notes were provided in the available release data. Since this is a nightly build, users should review the full changelog and test before upgrading production deployments.

---

## 3. Project Progress

### Closed / merged PRs today

#### [PR #2956: fix: preserve channel enabled state when merging `security.yml`](https://github.com/sipeed/picoclaw/pull/2956)

- Status: **Closed**
- Author: `yuxuan-7814`
- Updated: 2026-06-19
- Summary: Fixed a configuration merge issue where channels marked as `enabled: true` in `config.json` could be disabled after loading `.security.yml`.
- Impact: Improves config reliability, especially for users storing credentials separately in `security.yml` while keeping channel enablement in `config.json`.

### Features / fixes advanced through open PRs

Several substantial changes are moving forward but remain unmerged:

- [PR #3143: block private IPv4 embeds in ISATAP literals](https://github.com/sipeed/picoclaw/pull/3143)  
  Security hardening for `web_fetch` SSRF protections.

- [PR #2937: Feat/agent collaboration](https://github.com/sipeed/picoclaw/pull/2937)  
  Introduces an internal Agent Collaboration Bus with durable inter-agent messaging, mailboxes, isolated session history, and permission-aware routing.

- [PR #3045: fix(identity): allow `allow_from` fallthrough for Matrix user IDs with colon](https://github.com/sipeed/picoclaw/pull/3045)  
  Fixes Matrix user ID parsing for standard IDs such as `@alice:example.com`.

- [PR #3048: fix(mcp): reject unknown pre-positional flags in `mcp add`](https://github.com/sipeed/picoclaw/pull/3048)  
  Improves CLI argument parsing for MCP commands.

- [PR #3053: fix(evolution): add `ok` check for `LoadOrStore` type assertion](https://github.com/sipeed/picoclaw/pull/3053)  
  Prevents possible panic in per-path lock storage.

- [PR #3091: fix(openai_compat): add `ok` check for native search type assertion](https://github.com/sipeed/picoclaw/pull/3091)  
  Improves robustness of provider option parsing.

---

## 4. Community Hot Topics

### Most active issue: [Issue #2472 — Windows `list_dir` invalid argument](https://github.com/sipeed/picoclaw/issues/2472)

- Status: **Open**
- Created: 2026-04-10
- Updated: 2026-06-19
- Comments: **6**
- Reactions: **1 👍**
- Summary: `list_dir` fails on Windows with `invalid argument` because backslashes are passed directly to Go’s `fs.FS` / `os.Root`, which expects forward slashes.
- Underlying need: Cross-platform filesystem correctness. This is a practical blocker for Windows users using filesystem tools.

### High-priority roadmap item: [Issue #348 — General Attachment Support](https://github.com/sipeed/picoclaw/issues/348)

- Status: **Open**
- Created: 2026-02-17
- Updated: 2026-06-19
- Comments: **4**
- Summary: Requests support for handling files, documents, logs, code snippets, and media attachments across IM channels such as Telegram and Discord.
- Underlying need: PicoClaw is being used as a real assistant across messaging channels, and users expect it to process non-text attachments, not just plain messages.

### Security discussion: [Issue #3074 / PR #3143 — SSRF guard bypass via ISATAP literals](https://github.com/sipeed/picoclaw/pull/3143)

- Status of PR: **Open**
- Summary: PR #3143 addresses an SSRF guard bypass by recognizing ISATAP IPv6 literals that embed private or loopback IPv4 addresses.
- Underlying need: Stronger network safety for `web_fetch`, especially important for an agent framework with remote execution and file access capabilities.

### Telegram permissions: [Issue #3114 — Permission grading by Telegram chat type](https://github.com/sipeed/picoclaw/issues/3114)

- Status: **Open**
- Created: 2026-06-12
- Updated: 2026-06-19
- Comments: **1**
- Reactions: **1 👍**
- Summary: Users want Telegram permissions differentiated by private chat, group, and channel.
- Underlying need: Safer deployment in shared environments. Current `allow_from` controls “who” can use the bot, but not “where” or “in what social context,” which matters for dangerous tools like shell, file write, and delete.

---

## 5. Bugs & Stability

### 1. High severity — Windows `list_dir` invalid argument

- Issue: [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472)
- Problem: `list_dir` returns `invalid argument` on Windows because path separators are not normalized for Go’s `fs.FS` / `os.Root`.
- Impact: Filesystem browsing or directory listing may fail on Windows.
- Fix PR status: No fix PR identified in the provided data.
- Severity rationale: Direct tool failure on a major platform.

### 2. High severity — `web_fetch` SSRF guard bypass

- PR: [PR #3143](https://github.com/sipeed/picoclaw/pull/3143)
- Problem: `web_fetch` may bypass SSRF protections using ISATAP IPv6 literals embedding private IPv4 addresses.
- Impact: Potential private network access through web fetch functionality.
- Fix PR status: Fix PR exists and is open.
- Severity rationale: Security issue in an agent tool with network access.

### 3. Medium severity — Matrix `allow_from` rejects valid user IDs

- PR: [PR #3045](https://github.com/sipeed/picoclaw/pull/3045)
- Problem: Matrix user IDs like `@alice:example.com` are split incorrectly on the first colon.
- Impact: Valid users may be blocked despite being intended as allowed.
- Fix PR status: Fix PR exists and is open.
- Severity rationale: Access-control regression or misconfiguration behavior.

### 4. Medium severity — Possible panic in evolution lock store

- PR: [PR #3053](https://github.com/sipeed/picoclaw/pull/3053)
- Problem: `sync.Map.LoadOrStore` result type assertion lacks an `ok` check.
- Impact: Potential panic if stored value type does not match expectation.
- Fix PR status: Fix PR exists and is open.
- Severity rationale: Crash risk, though trigger conditions are unclear from the data.

### 5. Medium / unclear severity — “Agent lost memory”

- Issue: [Issue #3150](https://github.com/sipeed/picoclaw/issues/3150)
- Problem: User reports the agent “gave itself amnesia.”
- Impact: Could indicate memory/session persistence bugs, context truncation, identity reset, or configuration issues.
- Fix PR status: No fix PR identified.
- Severity rationale: High user-impact if confirmed, but details are currently incomplete.

### 6. Low / correctness severity — MCP `mcp add` flag parsing

- PR: [PR #3048](https://github.com/sipeed/picoclaw/pull/3048)
- Problem: Root-level persistent flags such as `--no-color` before subcommands may be misparsed by `mcp add`.
- Impact: CLI usability and configuration correctness.
- Fix PR status: Fix PR exists and is open.

### 7. Low / correctness severity — OpenAI-compatible provider native search parsing

- PR: [PR #3091](https://github.com/sipeed/picoclaw/pull/3091)
- Problem: `native_search` type assertion discards the `ok` value.
- Impact: Invalid config may silently disable native search.
- Fix PR status: Fix PR exists and is open.

---

## 6. Feature Requests & Roadmap Signals

### General attachment support

- Issue: [Issue #348 — General Attachment Support](https://github.com/sipeed/picoclaw/issues/348)
- Priority signal: Marked **high priority** and **roadmap**.
- Requested capability: Support files, documents, logs, code snippets, configuration files, and media attachments across Telegram, Discord, and other channels.
- Prediction: This is likely a strong candidate for a near-term roadmap item because it is explicitly labeled high priority and roadmap, and it addresses a clear gap in channel-based assistant workflows.

### Telegram permission tiers by chat type

- Issue: [Issue #3114 — Telegram permission grading by chat type](https://github.com/sipeed/picoclaw/issues/3114)
- Requested capability: Different behavior for private chats, groups, and channels.
- Prediction: Likely to be prioritized because it addresses safety concerns around dangerous tools in shared group/channel contexts.

### Agent collaboration

- PR: [PR #2937 — Feat/agent collaboration](https://github.com/sipeed/picoclaw/pull/2937)
- Requested / proposed capability: First-class internal agent collaboration bus with durable messaging, per-agent mailboxes, isolated session history, structured envelopes, delivery state, and permission-aware routing.
- Prediction: This looks like a major architectural feature rather than a small patch. It may land in a later v0.3.x or v0.4.x release depending on review complexity.

### Security hardening for `web_fetch`

- PR: [PR #3143 — Block private IPv4 embeds in ISATAP literals](https://github.com/sipeed/picoclaw/pull/3143)
- Prediction: Likely to be prioritized for merge if validation passes, because SSRF protection is a safety-critical area for an AI agent framework.

---

## 7. User Feedback Summary

Users are reporting several practical pain points:

- **Windows filesystem tooling is broken or fragile**: [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) shows that path separator handling can prevent basic directory listing.
- **Attachment workflows are missing**: [Issue #348](https://github.com/sipeed/picoclaw/issues/348) indicates users expect PicoClaw to read logs, config files, code snippets, and media from messaging channels.
- **Memory/session continuity is a concern**: [Issue #3150](https://github.com/sipeed/picoclaw/issues/3150) suggests users may be experiencing context loss, persistence problems, or confusing agent behavior.
- **Security boundaries need to be more expressive**: [Issue #3114](https://github.com/sipeed/picoclaw/issues/3114) highlights concern that Telegram groups/channels may expose dangerous tools if only user/session allowlists are used.
- **Access control can reject valid users**: [PR #3045](https://github.com/sipeed/picoclaw/pull/3045) shows Matrix user IDs may be incorrectly parsed.
- **Security users are scrutinizing network safety**: [PR #3143](https://github.com/sipeed/picoclaw/pull/3143) reflects attention to SSRF edge cases.

Overall, feedback suggests PicoClaw is being used in real assistant deployments, but users are pushing for stronger **cross-platform reliability, attachment handling, memory continuity, permission models, and security hardening**.

---

## 8. Backlog Watch

### Stale or long-open issues needing attention

#### [Issue #2472 — Windows `list_dir` invalid argument](https://github.com/sipeed/picoclaw/issues/2472)

- Open since: 2026-04-10
- Updated: 2026-06-19
- Why it matters: Platform-specific filesystem bug affecting Windows users.
- Recommended action: Confirm fix strategy around path normalization for `os.Root` / `fs.FS`, then merge or request a targeted PR.

#### [Issue #348 — General Attachment Support](https://github.com/sipeed/picoclaw/issues/348)

- Open since: 2026-02-17
- Updated: 2026-06-19
- Why it matters: High-priority roadmap feature and major user-facing capability gap.
- Recommended action: Define MVP scope: text/log/code attachments first, then media, with channel-specific limitations documented.

#### [Issue #3114 — Telegram permission grading by chat type](https://github.com/sipeed/picoclaw/issues/3114)

- Open since: 2026-06-12
- Updated: 2026-06-19
- Why it matters: Safety-critical permission model gap for group/channel deployments.
- Recommended action: Treat as security/permission design work, possibly tying into broader tool permission policies.

### Stale or important PRs needing maintainer review

#### [PR #3143 — Block private IPv4 embeds in ISATAP literals](https://github.com/sipeed/picoclaw/pull/3143)

- Created: 2026-06-18
- Why it matters: Security hardening

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw – Project Digest (2026‑06‑20)**  
*Generated from the public GitHub repository [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)*  

---

## 1. Today’s Overview
- No new issues were opened or updated in the last 24 h, indicating a quiet bug‑reporting front.  
- Development activity is modest but focused: five pull requests were updated today, all of them **open** and none merged yet.  
- The lack of a new release suggests the maintainers are still iterating on larger feature work (Apple Container support, permission inheritance, Discord message handling) before cutting a version bump. Overall health appears stable, with the main risk being the backlog of unmerged PRs that could stall upcoming releases.

---

## 2. Releases
*No releases have been published in the last 24 h (or at all).*

---

## 3. Project Progress
| PR # | Title / Scope | Author | Created → Updated | Current Status | What’s Advancing |
|------|----------------|--------|-------------------|----------------|------------------|
| **#2820** | *fix(approvals): persist delivery target on pending_approvals rows* | caburi00 | 19 Jun → 19 Jun | **Open** | Improves auditability of approval flows by storing channel/platform IDs on the pending‑approval record. |
| **#2605** | *feat: inherit parent agent permissions via OneCLI* | guyb1 | 24 May → 19 Jun | **Open** | Adds a permission‑inheritance hook for agents launched with OneCLI, laying groundwork for tighter security delegations. |
| **#2812** | *fix(discord): chunk replies over 2000 chars instead of truncating* | axnjxn415 | 18 Jun → 19 Jun | **Open** | Fixes Discord message truncation by ensuring the `splitForLimit` utility is invoked, preventing loss of long responses. |
| **#2809** | *feat(apple-container): Apple Container runtime + remote OneCLI gateway* | hidenwalker | 18 Jun → 19 Jun | **Open** | Introduces an env‑gated `CONTAINER_RUNTIME` switch (Docker ⇢ Apple Container) and remote OneCLI gateway support—major platform‑expansion work. |
| **#2819** | *Add MseeP.ai badge* | mseep‑ai | 19 Jun → 19 Jun | **Open** | Cosmetic/security badge addition for the README; no functional impact. |

*No PRs were merged or closed today.* The open PR set shows a bias toward **platform‑specific fixes** (Discord, Apple) and **core permission/approval mechanics**—areas that will likely shape the next release.

---

## 4. Community Hot Topics
| PR | Comments / 👍 | Link | Why It Matters |
|----|---------------|------|----------------|
| **#2809** (Apple Container + remote OneCLI) | 0 comments, 0 👍 | <https://github.com/qwibitai/nanoclaw/pull/2809> | Expands NanoClaw to macOS‑only container runtimes and enables remote OneCLI gateways, addressing a long‑standing request from macOS‑centric developers. |
| **#2812** (Discord chunking) | 0 comments, 0 👍 | <https://github.com/qwibitai/nanoclaw/pull/2812> | Directly fixes a user‑visible problem (message truncation) that can break long‑form interactions on Discord, a high‑traffic channel. |
| **#2820** (Approval persistence) | 0 comments, 0 👍 | <https://github.com/qwibitai/nanoclaw/pull/2820> | Enhances traceability for compliance‑heavy deployments where knowing *where* a request was delivered is required. |

Even though the comment counts are low (reflecting the early stage of each PR), the topics align with recurring community pain points: **cross‑platform reliability** and **auditability**.

---

## 5. Bugs & Stability
| Severity | Symptom | Source PR (if any) | Status |
|----------|---------|--------------------|--------|
| **Medium** | Discord replies >2000 chars are silently truncated, causing loss of information. | Fix in **#2812** (open) | Patch ready but not merged. |
| **Medium** | Approval rows miss `channel_type`, `platform_id`, `platform_message_id`, breaking approval history audits. | Fix in **#2820** (open) | Patch ready but not merged. |
| **Low** | No new crash reports or runtime regressions observed today (no issues filed). | — | N/A |

Both medium‑severity bugs have dedicated PRs, but until they land in a release the problems remain in production for users of Discord and the approvals UI.

---

## 6. Feature Requests & Roadmap Signals
- **Apple Container runtime & remote OneCLI gateway** (PR #2809) – strong indicator that the roadmap now includes *macOS‑first* container support and a decoupled CLI gateway. Expect this to be a headline feature in the next minor version.  
- **Permission inheritance via OneCLI** (PR #2605) – suggests a shift toward **hierarchical agent security**; likely to land soon after the container work, as it builds on the same OneCLI infrastructure.  
- **Approval persistence** (PR #2820) – not a user‑requested feature per se, but reflects internal compliance requirements that could become a documented “audit‑ready” capability.  

No brand‑new feature requests appeared today, but the open PRs collectively map a short‑term roadmap: platform expansion → security tightening → reliability fixes.

---

## 7. User Feedback Summary
- **Pain points** observed from the PR titles/comments (even though comments are minimal):  
  1. *Message truncation on Discord* – users lose long responses, affecting bot usability.  
  2. *Missing metadata on approval rows* – hampers debugging and audit trails, especially for teams with strict compliance.  
  3. *Desire for macOS container support* – a niche but vocal segment of developers cannot currently run NanoClaw locally on Apple Silicon without Docker.  
- **Satisfaction**: No negative sentiment or complaints were lodged today, indicating that existing functionality is generally stable for the majority of the user base.  

---

## 8. Backlog Watch
| Item | Type | Age | Reason for attention |
|------|------|-----|----------------------|
| **#2820** (approval persistence) | Bug fix | 1 day | Blocking audit‑related use cases; high impact for enterprise users. |
| **#2812** (Discord chunking) | Bug fix | 1 day | Affects a large community channel; easy win. |
| **#2809** (Apple Container) | Feature | 1 day | Major platform addition; needs review for security implications of remote OneCLI gateway. |
| **#2605** (OneCLI permission inheritance) | Feature | ~3 weeks | Core to upcoming security model; pending maintainer review. |
| Any **closed but unresolved** issues – none currently, but the empty issue list suggests low reporting; maintainers should proactively solicit feedback to avoid silent failure accumulation.  

*Actionable recommendation*: Prioritize merging the two bug‑fix PRs (#2812, #2820) to shore up reliability, then move the larger feature PRs (#2809, #2605) through review, as they constitute the next release’s headline changes.  

---  

**Bottom line** – NanoClaw’s development pipeline is active but awaiting a release milestone. The open PRs address concrete, user‑reported problems and strategic platform extensions, so closing them promptly will both improve current stability and deliver a compelling next‑version feature set.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest –2026‑06‑20**  
*Compiled from the latest 24‑hour snapshot (GitHub activity of nullclaw/nullclaw)*  

---

### 1. Today's Overview  
- The repository saw **3 issue updates** (2 reopened/active, 1 closed) and **1 pull‑request update** (still open).  
- No new releases were published during the period.  
- Activity is modest but steady; the bulk of today’s traffic centers on a **bug report about incomplete Ollama responses** and a **network‑connectivity problem in Feishu**.  
- The community appears engaged, with three distinct issues attracting sustained commentary, indicating that core functionality (local LLM integration and platform‑specific networking) remains a pain point.

---

### 2. Releases  
- **No new versions** were tagged or published in the last 24 hours.  
- Consequently, there are **no changelogs, breaking‑change notes, or migration guides** to report.

---

### 3. Project Progress  - **Merged / closed PRs today:** 0 (the sole PR updated today – #966 – remains open).  - **Closed issues today:** 1 (Issue #952 was *closed* after being resolved, but the underlying bug related to Ollama answer completeness is still under discussion).  - No new features were merged; the only code change on the table is the ongoing work on PR #966 addressing aarch64 networking.

---

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions | Why It Matters | Link |
|------|------|----------------------|----------------|------|
| **Issue #952** | Bug (Ollama) | 3 comments, 0 👍 | Reports **incomplete answers** when using a locally‑pulled model via Ollama, affecting user trust in the AI assistant’s reliability. | <https://github.com/nullclaw/nullclaw/issues/952> |
| **Issue #484** | Bug (Feishu) | 3 comments, 0 👍 | **“飞书无法联网查询”** – a networking failure that blocks integration with the Feishu (Lark) platform, a key enterprise communication channel. | <https://github.com/nullclaw/nullclaw/issues/484> |
| **Issue #868** | Bug (Android/Termux) | 2 comments, 0 👍 | **Zig build fails** on aarch64 Termux due to file‑linking permissions; impacts users building on Android devices. | <https://github.com/nullclaw/nullclaw/issues/868> |
| **PR #966** | Enhancement (HTTP) | 0 comments | Attempts to route stdlib HTTP through **curl on aarch64‑linux‑android**, aiming to fix the NameServerFailure seen on Termux. Still open, awaiting maintainer review. | <https://github.com/nullclaw/nullclaw/pull/966> |

*Underlying needs*: The community is gravitating toward **stability of external service integrations** (Ollama, Feishu) and **platform‑specific build reproducibility** (Termux/AArch64). These issues are repeatable and blocking for users who rely on local LLM inference or enterprise chat APIs.

---

### 5. Bugs & Stability  

| Severity | Issue | Symptom | Current Status | Fix PR / ETA |
|----------|-------|---------|----------------|--------------|
| **High** | #952 – Ollama returns incomplete answers | Truncated or non‑sentence responses from the local model | *Closed* (ticket resolved) but the problem persists for some users; no fix shipped yet. | No merge; likely needs upstream model‑response parsing improvements. |
| **Medium** | #868 – Zig build fails on Android/Termux | `AccessDenied` on `options.zig` linkat during `zig build` | Open; code‑level error still present. | No fix PR yet – maintainer attention required. |
| **Medium** | #484 – Feishu network query fails | Cannot perform network lookup through Feishu client | Open; likely a missing system file or permission issue on certain OS versions. | No merge; requires OS‑level configuration fix or code adjustment. |

---

### 6. Feature Requests & Roadmap Signals  

- **Automatic fallback to curl** for HTTP on constrained platforms (referenced in PR #966) suggests a broader desire for **more resilient network stacks** on embedded/Android environments.  
- Ongoing **Ollama integration refinements** hint that users expect richer model‑control APIs (e.g., token streaming, configurable temperature).  
- No explicit feature tickets are visible today, but the attention to *network‑level fixes* may foreshadow a **“platform‑agnostic HTTP client”** roadmap item in the next minor release.

---

### 7. User Feedback Summary  

| Pain Point | Frequency | Typical Use‑Case | Sentiment |
|------------|-----------|------------------|-----------|
| **Incomplete Ollama responses** | 3 recent comments | Users run a locally‑pulled Gemma model for on‑device AI assistance; expect full‑sentence answers. | Frustrated – functional but unreliable. |
| **Feishu network query failures** | 3 recent comments | Enterprise users rely on Lark/Feishu for messaging and need real‑time data fetching. | Dissatisfied – blocks workflow. |
| **Build failures on Android/Termux** | 2 recent comments | Developers testing on mobile devices or low‑cost hardware. | Concerned – builds are a mandatory step for contributors. |

Overall satisfaction appears **moderate**; the project’s core functionalities are usable but are hampered by platform‑specific regressions.

---

### 8. Backlog Watch  - **Issue #484** (Feishu network connectivity) has been **open for over three months** with only three comments, suggesting it may be low‑priority for maintainers despite its impact on enterprise adoption.  
- **Issue #868** (Zig build on aarch64 Termux) is similarly long‑standing; the lack of a merging fix leaves a segment of the community unable to compile from source.  
- **PR #966** remains **open with no reviews**; it represents a potential fix for the Termux networking issue but needs maintainer endorsement to be merged.  

*Actionable recommendation*: Prioritize a quick review of PR #966 and allocate maintainer time to triage the two long‑standing issues to prevent further community disengagement.

---

**Bottom line:** NullClaw is presently in a **maintenance‑heavy phase** with no version bump. The health of the project hinges on resolving two persistent bugs (Ollama answer completeness and Feishu networking) and merging an open networking PR that could improve cross‑platform stability. Continued community activity is encouraging, but sustained attention to the backlog items is essential for maintaining confidence among power users and enterprise adopters.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-20

## 1. Today's Overview
IronClaw remains in **high-velocity active development** with 30 PRs and 4 issues updated in the last 24 hours. The project is heavily focused on the **"Reborn" architecture** — a major rewrite/refactor spanning web UI, host kernel, approvals, triggers, external-tool integration, and multi-tenant hosting. No releases were cut today. The merge rate (12 PRs closed/merged) indicates strong maintainer throughput, though the open PR backlog (18) suggests sustained feature pressure. Nightly E2E failures (#4108) persist, signaling ongoing test stability work.

## 2. Releases
**No new releases today.** The project appears to be in a pre-release or continuous-development phase for the Reborn stack.

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#5097](https://github.com/nearai/ironclaw/pull/5097) | docs: add Reborn QA guidance to agent rules | Docs/QA | Codifies cross-layer testing strategy; clarifies fixture vs. hermetic test usage |
| [#5096](https://github.com/nearai/ironclaw/pull/5096) | test(reborn-qa): port project-setup automation-workflow benchmarks to QA record/replay | Testing | 7 benchmark scenarios now recorded/replayable; strengthens regression coverage |
| [#5095](https://github.com/nearai/ironclaw/pull/5095) | test(reborn-qa): add recorded fixtures | Testing | Commits LLM trace fixtures for connection, routine, web-fetch; adds HTTP replay & credential import support |
| [#5064](https://github.com/nearai/ironclaw/pull/5064) | fix(reborn): Projects — address leftover review comments on the merged port | Projects/UI | Typed timestamps, DTO fixes, facade cleanup post-merge |
| [#5019](https://github.com/nearai/ironclaw/pull/5019) | feat(reborn): Projects — light up the Projects page (5/5) | Web UI | Final slice: real `/api/webchat/v2/projects` CRUD + membership; project-delete confirmation |
| [#5092](https://github.com/nearai/ironclaw/pull/5092) | ci(spike): A/B sccache (GHA) vs rust-cache on heavy Reborn build | CI/Perf | Experimental workflow to measure mold+sccache vs. rust-cache link-time |
| [#5090](https://github.com/nearai/ironclaw/pull/5090) | perf(ci): extend mold linker to reborn-e2e and replay-gate Rust jobs | CI/Perf | Applies proven mold linker flags to remaining link-bound jobs |
| [#4829](https://github.com/nearai/ironclaw/pull/4829) | ci: retire dormant reborn-integration workflow, add Reborn suites to nightly deep CI | CI | Removes dead workflow; consolidates Reborn test matrix into nightly-deep |

**Key advancement:** The **Projects feature** (multi-tenant project/workspace management) is now fully wired end-to-end. **QA infrastructure** took a major step forward with recorded fixtures and replay harnesses. **CI performance** investments (mold linker, sccache A/B) target Reborn's heavy compile times.

## 4. Community Hot Topics — Most Active Items

| Item | Type | Comments | Signals |
|------|------|----------|---------|
| [#5078](https://github.com/nearai/ironclaw/issues/5078) | Issue (Closed) | 1 | **Approval modal UX**: Large shell commands overflow the modal, hiding action details/controls. Closed quickly — likely addressed in a follow-up PR not yet linked. |
| [#5091](https://github.com/nearai/ironclaw/issues/5091) | Issue (Open) | 0 | **Unified feature-flag system**: Request for env + dynamic switching, targeting, rollout, A/B. Currently ad-hoc `std::env::var` checks read once at startup. **High architectural leverage** — would enable safe Reborn rollouts. |
| [#5088](https://github.com/nearai/ironclaw/issues/5088) | Issue (Open) | 0 | **Misleading approval prompt**: "reads" shown as shell command to approve. Sub-issue of #4879. Indicates approval UI classification logic needs refinement. |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Issue (Open, bot) | 0 | **Nightly E2E failure**: Recurring scheduled run failure. Persistent since May 27. **Stability blocker** for continuous delivery confidence. |
| [#5087](https://github.com/nearai/ironclaw/pull/5087) | PR (Open) | — | **Google OAuth token auto-refresh**: Proactive refresh before expiry (access token 1h, refresh token 7d). Closes #5071. Critical for hosted SSO reliability. |
| [#5099](https://github.com/nearai/ironclaw/pull/5099) | PR (Open) | — | **External-tool Responses round-trip (Phase 4b-4f)**: Completes OpenAI-compatible external tool flow — declare client tools, surface parked `function_call`, resume from submitted outputs. Stacked on #5094. |
| [#5061](https://github.com/nearai/ironclaw/pull/5061) | PR (Open) | — | **Skill extraction & self-evolution**: Hermes-style distillation of successful turns into reusable `SKILL.md` with safety scan. **Ambitious self-improvement loop** — novel for this class of agent. |
| [#5085](https://github.com/nearai/ironclaw/pull/5085) | PR (Open) | — | **Concurrent turn execution**: Replaces serial `TurnRunnerWorker` with `TurnRunScheduler` + per-user/per-type caps. **Major throughput unlock** for multi-user Reborn. |

**Underlying needs:** 
- **Operational maturity**: Feature flags (#5091), OAuth refresh (#5087), CI stability (#4108) point to production hardening.
- **Multi-tenancy & concurrency**: Projects (#5019), concurrent turns (#5085), per-tool permissions (#5062) signal hosted SaaS trajectory.
- **Agent autonomy**: Skill extraction (#5061), external-tool round-trip (#5099) push toward self-evolving agents.

## 5. Bugs & Stability — Reported Today

| Severity | Item | Description | Fix PR? |
|----------|------|-------------|---------|
| **High** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failing consistently since May 27. Blocks release confidence. | No linked PR; infra/test fix needed |
| **Medium** | [#5078](https://github.com/nearai/ironclaw/issues/5078) | Approval modal unusable for large shell commands (content overflow). **Closed** — fix likely in flight. | Implied (closed) |
| **Medium** | [#5088](https://github.com/nearai/ironclaw/issues/5088) | Approval prompt mislabels `reads` as shell command requiring approval. Sub-issue of #4879. | No fix PR yet |
| **Low** | [#5064](https://github.com/nearai/ironclaw/pull/5064) | Projects port: leftover typed timestamp/DTO issues. **Fixed & merged**. | Yes (#5064) |

**Note:** The persistent nightly E2E failure (#4108) is the most concerning stability signal — it has been open for ~3 weeks without resolution.

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Version | Rationale |
|---------|--------|----------------------------|-----------|
| **Unified feature-flag system** (env + dynamic, targeting, A/B) | [#5091](https://github.com/nearai/ironclaw/issues/5091) | High | Explicitly scoped to `config, reborn, M1-webui-product, M4-host-kernel`; architectural prerequisite for safe rollouts |
| **Google OAuth proactive token refresh** | [#5087](https://github.com/nearai/ironclaw/pull/5087) | Very High | PR open, closes #5071; critical for hosted SSO uptime |
| **Concurrent turn execution** | [#5085](https://github.com/nearai/ironclaw/pull/5085) | High | PR open; removes serial bottleneck for multi-user runtime |
| **Per-tool permission overrides** (`always_allow`/`ask_each_time`/`disabled`) | [#5062](https://github.com/nearai/ironclaw/pull/5062) | High | PR open; wire-stable enum + per-(tenant,user,capability) store |
| **One-shot scheduled triggers** (`TriggerSchedule::Once`) | [#5065](https://github.com/nearai/ironclaw/pull/5065) | High | PR open; completes trigger scheduling alongside Cron |
| **Skill extraction & self-evolution** | [#5061](https://github.com/nearai/ironclaw/pull/5061) | Medium | PR open but XL size; novel capability, may need more bake time |
| **External-tool Responses round-trip** | [#5099](https://github.com/nearai/ironclaw/pull/5099) | High | PR open; completes OpenAI-compatible tool calling (Phase 4b-4f) |
| **Slack/Telegram ingress from extension state** | [#5093](https://github.com/nearai/ironclaw/pull/5093), [#5100](https://github.com/nearai/ironclaw/pull/5100) | High | Both PRs open; projects host-ingress from extension manifests — extensibility pattern |
| **Hosted single-tenant Postgres profile** | [#5081](https://github.com/nearai/ironclaw/pull/5081) | Medium | PR open; DB migration; narrow hosted preview path |

**Predicted next version theme:** **"Reborn Hosted Preview"** — multi-tenant Projects, concurrent turns, OAuth reliability, feature flags, and external-tool compatibility.

## 7. User Feedback Summary

| Pain Point / Use Case | Source | Sentiment |
|----------------------|--------|-----------|
| **Approval modal unusable for large commands** — content dominates, hides controls | [#5078](https://github.com/nearai/ironclaw/issues/5078) | 😞 Frustrated → **Closed** (fix in progress) |
| **Misleading "reads" approval prompt** — users asked to approve non-command `reads` | [#5088](https://github.com/nearai/ironclaw/issues/5088) | 😕 Confused — UX clarity gap |
| **No feature-flag system for gradual rollout** — forced binary deployment-wide toggles | [#5091](https://github.com/nearai/ironclaw/issues/5091) | 😐 Architectural limitation blocking safe releases |
| **Google OAuth requires manual reconnect** when tokens expire | [#5087](https://github.com/nearai/ironclaw/pull/5087) (closes #5071) | 😞 Operational burden → **Fix in PR** |
| **Serial turn execution limits throughput** for concurrent users | [#5085](https://github.com/nearai/ironclaw/pull/5085) | 😐 Scaling ceiling → **Scheduler PR open** |
| **Desire for agent self-improvement** (skill extraction from successful runs) | [#5061](https://github.com/nearai/ironclaw/pull/5061) | 😃 Excitement — advanced use case |

**Overall:** Users (and internal teams) are pushing for **production-grade multi-tenancy** (projects, permissions, OAuth, feature flags) and **agent autonomy** (skills, external tools). UX polish on approvals remains a friction point.

## 8. Backlog Watch — Long-Unanswered / Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failed | ~24 days (since 2026-05-27) | **Recurring CI failure** erodes release confidence; no assignee, no linked fix PR. **Highest priority stability debt.** | Open, bot-reported, 0 comments |
| [#4829](https://github.com/nearai/ironclaw/pull/4829) Retire dormant reborn-integration workflow | 8 days (created 2026-06-12) | CI consolidation PR; **approved but not merged** (updated 2026-06-19). Removes dead workflow, adds Reborn to nightly-deep. | Open, stale merge |
| [#4002](https://github.com/nearai/ironclaw/pull/4002) Dependabot: bump actions group (16 updates) | 27 days (created 2026-05-24) | **Security/maintenance debt** — includes `actions/checkout 4.3.1→7.0.0`, `claude-code-action 1.0.88→1.0.152`. Low risk but large surface. | Open, dependabot, 0 comments |
| [#5091](https://github.com/nearai/ironclaw/issues/5091) Unified feature-flag system | 1 day (created 2026-06-19) | **Architectural gap** for Reborn rollouts; no discussion yet. Needs design review before implementation. | Open, 0 comments |
| [#5061](https://github.com/nearai/ironclaw/pull/5061) Skill extraction & self-evolution | 2 days (created 2026-06-18) | **XL, novel feature**; safety scan + prompt-injection defense. High complexity — needs thorough review. | Open, 0 comments |

---

**Project Health Assessment:** 🟡 **Active but with stability debt**  
- ✅ Strong feature velocity (30 PRs/24h, 12 merged)  
- ✅ Clear architectural direction (Reborn, hosted, multi-tenant)  
- ✅ Investment in QA infrastructure (fixtures, replay, benchmarks)  
- ⚠️ **Nightly E2E broken for 3+ weeks** — critical gap  
- ⚠️ Dependabot PR stale for 27 days — security hygiene  
- ⚠️ Several XL PRs (#5061, #5099, #5100) need review bandwidth  

**Recommended maintainer actions:**  
1. **Triage #4108** — assign owner, bisect failure, restore green nightly  
2. **Merge #4829** — CI consolidation is ready  
3. **Review #4002** — bulk actions update, low risk  
4. **Design review for #5091** — feature flags are a cross-cutting concern  
5. **Prioritize review of #5085, #5062, #5099** — high-impact concurrency/permission/tool features

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

1. **Today's Overview**  
LobsterAI shows minimal activity in the last 24h with **4 issues closed** (1 active, 3 stale) and no PRs opened or merged. Despite recent releases of new features (none reported), the project is resolving lingering bugs, though progress appears cautious. The focal point remains improving session persistence and user experience in Cowork mode. [GitHub Activity](https://github.com/netease-youdao/LobsterAI).  

2. **Releases**  
No new releases reported in the last 24h.  

3. **Project Progress**  
All three recently closed issues focus on stability fixes rather than feature advancements. These resolutions prioritize critical user workflows (e.g., session navigation crashes), suggesting a shift toward technical debt reduction ahead of future releases.  

4. **Community Hot Topics**  
- **Issue #2180** (Open): Proposes an ambitious "AI Collaborator" form for orchestrating multiple models, targeting technical users. [Link](https://github.com/netease-youdao/LobsterAI/issues/2180)  
- **Stale Issues #1471, #1472, #1487**: Community interest in resolving input consistency and message-editing bugs persists, indicating lingering friction points. [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471), [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472), [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487).  

5. **Bugs & Stability**  
- **Medium Severity**: Input draft loss during session switching (Issue #1471) – no fix PR yet.  
- **Medium Severity**: Silent input overwrite during history editing (Issue #1472) – no fix PR.  
- **Medium Severity**: Brokense.lled sessions triggering skill failures (Issue #1487) – resolved post-reproduction.  

6. **Feature Requests & Roadmap Signals**  
Issue #2180 introduces a cross-model orchestration framework for power users, aligning with "advanced model workflows" roadmap trends. Likely candidate for future releases if prioritized.  

7. **User Feedback Summary**  
Users report frustration with data loss during navigation (Issue #1471) and unintended workflow disruptions (Issue #1472). Positive feedback exists for core skills like Claude Code CLI (Issue #1487), highlighting model performance as a strength.  

8. **Backlog Watch**  
- **Issue #1471**: Active for 2+ months, unresolved despite repeated upvotes (3). Blocking user experience.  
- **Issue #1472**: Analog 2-month aged bug requiring UX oversight.  
- **Issue #2180**: Newish PR proposal; maintainers should evaluate feasibility for OpenClaw integration.  

**Project Health Note**: LobsterAI maintains critical stability core but requires faster resolution of recurring UX bugs. The lack of PR activity raises concerns about development velocity during peak issue times.


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

**CoPaw (github.com/agentscope-ai/CoPaw) – Project Digest – 2026‑06‑20**

---

### 1. Today’s Overview  
- **Activity:** 12 issues and 17 pull‑requests were updated in the last 24 h.  
- **Releases:** No new version was published.  
- **Health:** The repository is in a steady state of bug‑fixes and incremental UI/UX enhancements; no breaking changes are pending.  

---

### 2. Releases  
- **None** – the latest published version remains **v1.1.12.post1** (released previously). No migration notes or breaking‑change announcements are required at this time.

---

### 3. Project Progress  

| PR # | Title | Status | Key Advancement |
|------|-------|--------|-----------------|
| **#5340** | `fix(model_factory): switch formatter drop detection from blacklist to whitelist` | Open | Improves reliability of model‑factory handling after user interruption (closes #5208). |
| **#5321** | `feat(context): scroll context manager — durable history + recall REPL` | Open | Introduces a scroll‑based context strategy and fixes agent‑config resolution for non‑default agents. |
| **#5334** | `feat(ui): allow switching agent in collapsed sidebar mode` | Open | Makes the sidebar icon clickable, enabling agent selection without expanding the UI (addresses #5329). |
| **#5336** | `feat(providers): support custom model ordering within providers` | Open | Adds a `sort_order` field to `ModelInfo` and lets providers reorder models manually. |
| **#5339** | `fix(providers): use plain string content for check_model_connection (#5330)` | Open | Resolves Zhipu model‑level connection test failures by sending plain strings instead of JSON arrays. |
| **#5335** | `fix(console): yield failed response event on exception to prevent stuck UI (#5333)` | Open | Guarantees the UI receives error events after backend failures, preventing a “waiting” state. |
| **#5326** | `feat: minimize window to system tray on close (#5312)` | Open | Provides a tray icon with right‑click actions (show / quit) instead of outright exit. |
| **#5325** | `feat(memory): add optional recency‑aware ranking for memory_search daily notes (#5316)` | Open | Implements exponential temporal decay for daily notes, improving relevance of older memories. |
| **#5324** | `fix(files): use inline content‑disposition for file preview (#5320)` | Open | Fixes image preview in chat after the v1.1.12 file‑response refactor. |
| **#5323** | `feat(plan): add native todo_write progress panel for multi‑step agent tasks` | Open | Adds a real‑time progress panel for plan execution, improving transparency of multi‑step workflows. |

*Closed/merged PRs that remain relevant (updated earlier but still part of the current baseline):*  

- **#5332** – `fix(memory): add index maintenance and timeout protection for ChromaDB` (addresses the 37 GB index growth crash).  
- **#5338** & **#5337** – Both close #5330 (Zhipu connection test failures).  

These PRs demonstrate a strong focus on **stability** (memory index, timeout protection), **UX** (real‑time console updates, system‑tray behavior), and **extensibility** (custom model ordering, agent switching).

---

### 4. Community Hot Topics  

| Item | Type | Link | Why it’s hot |
|------|------|------|--------------|
| **#5208** | Bug | <https://github.com/agentscope-ai/QwenPaw/issues/5208> | 6 comments; reports a warning when a reasoning block uses type `"reasoning"` instead of `"thinking"` – impacts LongCat‑2.0‑Preview users. |
| **#5329** | Feature Request | <https://github.com/agentscope-ai/QwenPaw/issues/5329> | 3 comments; user wants a **switch‑agent button** in the collapsed sidebar to enable mobile‑friendly agent control. |
| **#4795** | Bug (critical) | <https://github.com/agentscope-ai/QwenPaw/issues/4795> | 3 comments; vector index ballooning to 37 GB causes `memory_search` crashes and periodic process kills. |
| **#5328** | Bug | <https://github.com/agentscope-ai/QwenPaw/issues/5328> | 2 comments; deepseek agents freeze during the “thinking” phase, requiring manual stop/continue. |
| **#5333** | Bug | <https://github.com/agentscope-ai/QwenPaw/issues/5333> | 1 comment; after sending a command the UI shows a “continue‑able” state while the agent is actually stuck. |
| **PR #5340** | Fix (first‑time contributor) | <https://github.com/agentscope-ai/QwenPaw/pull/5340> | 0 comments; directly resolves the reasoning‑block count mismatch (Issue #5208). |
| **PR #5321** | Feature | <https://github.com/agentscope-ai/QwenPaw/pull/5321> | 0 comments; adds scroll‑based context management, a core usability improvement. |

**Underlying needs:** Users are asking for **more reliable reasoning handling**, **better mobile/ narrow‑viewport navigation**, and **stable memory/index performance**. The community also values **quick UI feedback** (real‑time console updates) and **clear visual cues** (agent‑switch buttons).

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue | Symptoms | Fix PR (if any) |
|----------|-------|----------|-----------------|
| **Critical** | **#4795** | ChromaDB index grows to ~37 GB → `memory_search` hangs/crashes, process killed repeatedly. | **#5332** (fix memory index, adds auto‑compact & timeout protection). |
| **High** | **#5208** | Wrong block type (`"reasoning"` vs `"thinking"`) triggers “Assistant message count mismatch” warnings and skips reasoning injection. | **#5340** (formatter drop detection whitelist fix). |
| **High** | **#5328** | Deepseek agents freeze during “thinking” → must manually stop and resume. | No dedicated PR yet; may be addressed by upcoming reasoning‑flow refinements. |
| **Medium** | **#5333** | Agent appears stuck while UI remains in a “send‑new‑command” state. | **#5335** (yield failure events) mitigates UI freeze. |
| **Medium** | **#5320** | Images sent via `send_file_to_user` are logged as successful but never displayed; previous images disappear. | **#5324** (inline content‑disposition fix). |
| **Low** | **#5317** | Tauri environment cannot locate Python after conda change; skills fail to run scripts. | No PR yet; may require environment‑setup documentation updates. |
| **Low** | **#5322** | API messages do not appear in console UI in real‑time; users must refresh. | **#5331** (real‑time SSE push with voice beep) aims to solve this. |

---

### 6. Feature Requests & Roadmap Signals  

| Request | Link | Anticipated Impact |
|---------|------|--------------------|
| **Sidebar agent‑switch button** (compact mode) | #5329 | Improves mobile usability; likely to be delivered in the next minor release. |
| **Custom model ordering** | #5336 | Gives power users control over model priority; signals a roadmap move toward more configurable provider UI. |
| **Recency‑aware memory ranking** | #5325 | Enhances retrieval relevance for long‑term agents; may become default after testing. |
| **Todo‑write progress panel** | #5323 | Provides visibility into multi‑step agent execution, aligning with the trend of richer UI diagnostics. |
| **Real‑time console SSE updates** | #5331 | Reduces latency from seconds to sub‑50 ms, improving interactive agent‑to‑agent workflows. |

These items collectively suggest that the next version (likely **v1.1.13**) will focus on **UX polish**, **memory stability**, and **customizable provider/model handling**.

---

### 7. User Feedback Summary  

- **Positive signals:** Users appreciate rapid UI updates (real‑time console), the new system‑tray minimize feature, and the ongoing memory‑index health improvements.  
- **Pain points:**  
  1. **Reasoning block type mismatches** cause warning spam and lost context (Issue #5208).  
  2. **Massive vector index growth** leads to crashes and lost sessions (Issue #4795).  
  3. **Agent “thinking” hangs** with deepseek, requiring manual intervention (Issue #5328).  
  4. **Inability to switch agents** in a collapsed sidebar hampers mobile/desktop narrow‑viewport usage (Issue #5329, PR #5334).  
  5. **Image preview broken** after the v1.1.12 file‑response refactor (Issue #5320).  

Overall satisfaction appears moderate; the community is actively reporting bugs but also contributing patches, indicating a healthy collaborative environment.

---

### 8. Backlog Watch  

| Item | Reason to Monitor |
|------|-------------------|
| **#5208** (Bug – reasoning block type) | Still open with 6 comments; the fix (#5340) is merged but the issue may still affect downstream users if the whitelist logic needs further tuning. |
| **#4795** (Memory index explosion) | Although #5332 addresses index maintenance, there is no confirmation yet that the 37 GB burst is fully resolved; keep an eye on related discussions. |
| **#5328** (Deepseek “thinking” hang) | No dedicated PR yet; may require deeper changes in the reasoning pipeline. |
| **PR #5340** (first‑time contributor) | As a newcomer, the author may need guidance; maintainers should review the PR promptly to avoid stalls. |
| **PR #5336** (custom model ordering) | Feature is still open; ensure it aligns with the upcoming UI redesign for the model‑settings page. |



</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑06‑20**  

---  

### 1. Today's Overview  
The project is experiencing a high‑velocity flow of activity: 25 issues were updated in the last 24 h (19 still open, 6 closed) and 50 PRs were touched (48 remain open, 2 merged/closed). No new versioned release shipped, but the issue tracker is dominated by a handful of high‑priority bugs and feature proposals that are driving most of the recent discussions. Overall health remains **stable with moderate‑to‑high churn**, indicating an active development sprint rather than a stagnant code base.  

---  

### 2. Releases  
- **Latest releases:** *None* (no new version tags or pre‑built bundles were published in the last 24 h).  ---  

### 3. Project Progress  
**Merged / closed PRs (today)**  
| PR | Title | Summary of Change | Link |
|----|-------|-------------------|------|
| **#5618** (closed) | *Phase 2 D1: Replace DaemonSubsystems callbacks with typed Registry API* | Completes the migration from function‑pointer callbacks to a strongly typed `Registry` API for daemon subsystems. | https://github.com/zeroclaw-labs/zeroclaw/pull/5618 |
| **#6826** (closed) | *[Tracker] Zerocode* | Initialised the standalone terminal UI (`zerocode`) as a long‑term roadmap item. | https://github.com/zeroclaw-labs/zeroclaw/pull/6826 |
| **#8031** (closed) | *NOOP* | Administrative placeholder used for housekeeping. | https://github.com/zeroclaw-labs/zeroclaw/pull/8031 |

**Open PRs with notable momentum**  
- **#8024** – *feat(channels/telegram): dispatch media groups as a single album message* (1 comment). Resolves issue #7873.  - **#8033** – *feat(onboard): chat‑based conversational setup assistant as default `zeroclaw onboard`* (0 comments). Introduces a guided CLI wizard.  
- **#7965** – *feat(channels/discord): interaction components — buttons, selects, modals…* (0 comments) implements full Discord UI parity.  

These PRs represent the front‑line of work on channel media handling, user onboarding, and Discord interaction parity.  

---  

### 4. Community Hot Topics  
| Issue / PR | Comments / 👍 | Current State | Link | Underlying Need |
|------------|---------------|----------------|------|-----------------|
| **#7787** – *Prebuilt v0.8.0 binaries lack Slack/Discord channel features* | 6 comments, 1 👍 | Open – high‑risk regression; users report broken Slack integration. | https://github.com/zeroclaw-labs/zeroclaw/issues/7787 | Users rely on Slack/Discord channels for real‑time coordination; the regression breaks a core communication pathway. |
| **#7141** – *OIDC Authentication Provider support* | 5 comments | Open – awaiting rollout in v0.9.0; part of a broader pluggable auth framework. | https://github.com/zeroclaw-labs/zeroclaw/issues/7141 | Enterprises demand standards‑based, federated authentication to replace custom token handling. |
| **#7950** – *Request for Docker images to include ZeroClaw docs* | 3 comments | Open – low‑risk but highlights knowledge‑gap for agents. | https://github.com/zeroclaw-labs/zeroclaw/issues/7950 | Agents cannot self‑diagnose issues when documentation is not bundled. |
| **#7759** – *Decouple gateway WebSocket lifetime from agent turn lifecycle* | 3 comments | Open – accepted, in‑progress; aims for smoother reconnect handling. | https://github.com/zeroclaw-labs/zeroclaw/issues/7759 | Users experience lost context when network drops; requires structural change to turn persistence. |
| **#7922** – *feat(channels/discord): slash command localizations + guild scope* | 1 comment | Open – part of Discord parity effort. | https://github.com/zeroclaw-labs/zeroclaw/issues/7922 | Need for multi‑language command help and consistent guild‑level availability. |

*Analysis*: The most talked‑about topics cluster around **communication channel reliability**, **authentication standards**, and **user‑facing tooling** (onboarding, documentation). These signals indicate where the community expects the next functional milestone.  

---  

### 5. Bugs & Stability  
| Issue | Severity / Risk | Description | Fix Status (PR) | Link |
|--------|----------------|-------------|-----------------|------|
| **#7907** – *Agent rename can move owned state before config persistence* | **S1** (workflow blocked) | `rename_agent_cascade()` mutates external owned state before the rename is durably persisted. | Fix in progress – PR #7907 (closed) already merged, but the ordering defect is mirrored in #7941. | https://github.com/zeroclaw-labs/zeroclaw/issues/7907 |
| **#7941** – *Agent delete can purge owned state before config persistence* | **S1** | Same ordering defect as #7907 for deletion. | Fix in progress – PR #7941 open, awaiting review. | https://github.com/zeroclaw-labs/zeroclaw/issues/7941 |
| **#7964** – *context_compression.summary_model is provider‑specific on shared runtime profile* | **S2** (silent runtime failure) | Bare model ID leads to cross‑provider failures. | Fix in progress – PR #7973 (open) addresses the issue. | https://github.com/zeroclaw-labs/zeroclaw/issues/7964 |
| **#7911** – *Android Termux Setup* | **Medium** | Installation attempts resolve to an unknown `linux aarch64` binary. | No fix yet; issue open. | https://github.com/zeroclaw-labs/zeroclaw/issues/7911 |
| **#7757** – *Gateway web dashboard Skills page missing workspace/open‑skills/plugin skills* | **S2** (degraded UI) | UI omits certain skill categories. | PR #7757 closed; functionality restored in later PRs. | https://github.com/zeroclaw-labs/zeroclaw/issues/7757 |

**Most severe bugs** (ranked by severity) are the ordering defects in rename/delete (`#7907`, `#7941`). Both have open corrective PRs but require careful review to avoid race conditions in the persisted config layer.  

---  

### 6. Feature Requests & Roadmap Signals  
| Requested Feature (Issue/PR) | Type | Likely Target Milestone | Rationale |
|------------------------------|------|--------------------------|-----------|
| **#7141** – OIDC Authentication Provider | Enhancement (high risk) | v0.9.0 | Needed for enterprise SSO migration. |
| **#7952** – Publish `channels-full` prebuilt bundle alongside default | Enhancement (high) | v0.9.0 or v0.8.2 | Addresses confusion around missing channel artefacts. |
| **#7929** – Unify slash‑command registries across web, zerocode, channel runtime | Enhancement (high) | v0.9.0 | Removes duplicated maintenance and improves UX consistency. |
| **#7831** – Discord channel interaction‑surface parity (embeds, typed options, voice) | Enhancement (high) | v0.9.0 | Completes the Discord integration roadmap. |
| **#7996** – Configurable temporary‑file cleanup for storage‑constrained deployments | Enhancement (p3) | Future (post‑v0.9) | Addresses low‑end device storage concerns. |
| **#8034** – Conversational `zeroclaw onboard` assistant | Enhancement (low) | Near‑term (next release) | Improves first‑time user onboarding experience. |
| **#7946** – Add context‑window bar to zerocode, gateway chat, CLI | Enhancement (high) | v0.9.0 | Provides visibility into model limits, critical for capacity planning. |

*Signal*: The community is gravitating toward **standard‑based authentication**, **reliable persistence**, and **uniform command/interaction surfaces**. Features with higher vote counts (#7141, #7929, #7831) are strong candidates for the upcoming **v0.9.0** milestone.  

---  

### 7. User Feedback Summary  
- **Positive signals**: Users appreciate the new **Docker‑image documentation bundle** request (#7950) and the **OIDC provider** proposal (#7141) as steps toward a more self‑contained and enterprise‑ready stack. The **WebSocket decoupling** effort (#7759) is viewed as a necessary evolution for reliability.  
- **Pain points**: The regression where **v0.8.0 prebuilts drop Slack/Discord support** (#7787) generated immediate outage‑like complaints from teams relying on those channels for coordination. Several users reported **confusion over missing channel artefacts** when switching versions, leading to support tickets. Stability issues around **agent rename/delete ordering** (#7907, #7941) erode confidence in state‑mutation guarantees.  
- **Satisfaction level**: Overall sentiment remains cautiously optimistic; the active PR queue and roadmap transparency are praised, but the **high‑severity runtime bugs** are the principal source of dissatisfaction.  

---  ### 8. Backlog Watch  
| Item | Age (days) | Status | Maintainer Action Needed |
|------|------------|--------|---------------------------|
| **#7787** – Slack/Discord regression | 4 days (opened 2026‑06‑16) | Open, high‑risk | Prioritize merge of a fix; currently under review in related PRs. |
| **#7141** – OIDC Authentication Provider | 17 days (opened 2026‑06‑03) | Open, high‑risk | Await final implementation; ensure test coverage for OIDC flows. |
| **#7922** – Discord slash‑command localizations + guild scope | 2 days (opened 2026‑06‑18) | Open, high‑risk | Review for completeness before closing; impact on multi‑locale UX. |
| **#5618** – DaemonSubsystems → Registry API migration | 2 months (closed) | Closed, merged | No further action; verify downstream impact. |
| **#6825** – Zerocode UX tracker | 1 month (closed) | Closed, merged | Ensure documentation of UX decisions for future maintainers. |
| **#7911** – Android Termux Setup | 2 days (opened 2026‑06‑18) | Open, medium | Provide cross‑compilation guidance; may need a dedicated maintainer. |
| **#7996** – Configurable temp‑file cleanup | 1 day (opened 2026‑06‑19) | Open, p3 | Consider adding to upcoming release notes; monitor usage on low‑end hardware. |

*Observation*: The backlog contains **several high‑visibility, high‑risk items that have lingered for weeks** (OIDC, Slack regression). Assigning dedicated maintainer attention or a short‑term “triage sprint” could prevent bottlenecks as the v0.9.0 milestone approaches.  

---  

**Bottom Line:**  
The ZeroClaw project is in an active development phase with robust PR churn and a clear focus on stability‑critical bugs, authenticationStandard adoption, and richer user‑facing tooling. While no new version was published today, the convergence of high‑comment issues around communication channels, OIDC support, and Discord interaction parity suggests the next release will likely emphasise **reliable external integrations** and **consistent command surfaces**. Maintainers should prioritise closing the Slack/Discord regression, finalising OIDC provider implementation, and ensuring long‑standing backlog items receive timely review.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*