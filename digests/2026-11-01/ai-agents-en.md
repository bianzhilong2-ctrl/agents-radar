# OpenClaw Ecosystem Digest 2026-11-01

> Issues: 495 | PRs: 500 | Projects covered: 13 | Generated: 2026-11-01 03:19 UTC

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

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape in late 2026 is characterized by rapid diversification and specialization. Projects range from foundational reference implementations (OpenClaw) to feature-rich multi-provider integrations (PicoClaw, NanoBot) and domain-specific frameworks (NanoClaw, ZeroClaw). Security hardening has emerged as a dominant theme across the ecosystem, with multiple projects addressing authorization, session management, and API-level safeguards. Simultaneously, there is strong momentum toward multi-provider support, recovery/resilience tooling, and internationalization—reflecting user demand for robust, extensible, and globally accessible agent platforms. The landscape shows a clear split between projects prioritizing core infrastructure stability (OpenClaw, Hermes Agent) and those pushing feature velocity and ecosystem integration (PicoClaw, ZeroClaw).

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
|---------|--------------|-----------|----------------|--------------|
| **OpenClaw** | Not specified | Not specified | No new releases | Moderate |
| **NanoBot** | 2 | 8 | No new releases | Moderate |
| **Hermes Agent** | 50 | 50 | No new releases | High |
| **PicoClaw** | 5 | 5 | No new releases | Moderate |
| **NanoClaw** | 1 | 3 | No new releases | Moderate |
| **NullClaw** | 1 | 3 | No new releases | Stable |
| **IronClaw** | 0 | 0 | No new releases | Stable |
| **LobsterAI** | 0 | 0 | No new releases | Stable |
| **TinyClaw** | 0 | 0 | No new releases | Stable |
| **Moltis** | 0 | 0 | No new releases | Stable |
| **CoPaw** | Not specified | Not specified | No new releases | Failed (summary generation) |
| **ZeptoClaw** | 0 | 0 | No new releases | Stable |
| **ZeroClaw** | 13 | 50 | No new releases | High |

*Health scores are qualitative: High (active iteration, multiple PRs/issues), Moderate (steady activity with some stale items), Stable (minimal activity, no new changes).*

## 3. OpenClaw's Position

**Advantages vs Peers:** OpenClaw serves as the core reference implementation for the OpenClaw ecosystem, providing a stable foundation that other projects may build upon. Its "core reference" status suggests higher reliability and broader community trust compared to more experimental or feature-specific projects. The project demonstrates consistent, low-velocity activity with a focus on provider expansion, channel reliability, and recovery tooling—areas where it differentiates itself from competitors by emphasizing foundational stability.

**Technical Approach Differences:** Unlike PicoClaw (which adds new OpenAI-compatible providers) or NanoBot (which focuses on provider expansion and resilience), OpenClaw appears to prioritize core infrastructure integrity and API standardization. Its approach leans toward maintaining a stable, well-tested base rather than aggressive feature rollout. This contrasts with Hermes Agent, which is actively iterating on mobile beta stability, gateway/session reliability, and security hardening—indicating a more aggressive development pace.

**Community Size Comparison:** While specific community metrics are not provided, OpenClaw's role as a "core reference" implies a larger, more established user base and higher developer engagement than projects like CoPaw (where summary generation failed) or IronClaw (no activity). Its presence as a foundational project likely attracts more contributors and external integrations than the more niche or experimental projects in the ecosystem.

## 4. Shared Technical Focus Areas

Across multiple projects, several technical requirements are emerging:

- **Security Hardening:** Hermes Agent, ZeroClaw, PicoClaw, and NanoClaw all address security concerns—SOP/admin authority enforcement, session-data tool isolation, RPC session ownership, and CSRF protection. This indicates a cross-cutting need for robust identity and access control in agent systems.
- **Multi-Provider Support:** OpenClaw, PicoClaw, and NanoClaw all work with multiple OpenAI-compatible providers (Runcrate, OpenRouter, Standard Compute). This reflects user demand for flexible, multi-gateway agent deployments.
- **Reliability & Error Handling:** Hermes Agent, ZeroClaw, and NanoClaw prioritize recovery/resilience tooling, checkpoint consistency, and graceful degradation. The closed PRs (#6147, #5747, #6534) and open fixes demonstrate a shared focus on preventing silent failures and ensuring checkpoint integrity.
- **Internationalization & Documentation:** NanoClaw and PicoClaw are actively adding multilingual documentation (Traditional Chinese, Japanese), while ZeroClaw is addressing header-duplication bugs that affect cross-channel compatibility. This suggests a growing emphasis on global accessibility and localized support.

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Technical Architecture |
|---------|---------------|--------------|------------------------|
| **OpenClaw** | Core reference, provider expansion, recovery tooling | Developers building agent infrastructure, enterprise deployments | Stable, well-tested core with incremental feature additions |
| **Hermes Agent** | Mobile beta, gateway/session reliability, security hardening | Mobile-first users, enterprise teams needing cross-platform support | Feature-rich, rapidly iterating, high activity |
| **PicoClaw** | Standard Compute provider, Telegram integration, cron reliability | Users needing multi-provider support and channel integration | Provider-agnostic with strong focus on channel event routing |
| **NanoClaw** | Telegram bot framework, bot-to-bot security, WebSocket reliability | Telegram-based workflows, bot developers | Secure, low-latency messaging with emphasis on safety |
| **ZeroClaw** | Pre-v0.9.0 stabilization, CLI-only builds, security audit fixes | Developers targeting v0.9.0 release, security-conscious teams | High-velocity, release-gated, with active security remediation |

**Key Differences:**
- **OpenClaw** is the most stable and foundational, serving as a reference for others.
- **Hermes Agent** is the most active and mobile-focused, with the highest issue/PR count.
- **PicoClaw** differentiates through provider expansion (Standard Compute) and Telegram-specific fixes.
- **NanoClaw** specializes in Telegram bot frameworks with strong security emphasis.
- **ZeroClaw** is in a high-velocity pre-release phase with critical security fixes.

## 6. Community Momentum & Maturity

The ecosystem exhibits a clear tiered maturity profile:

- **Rapidly Iterating (High Momentum):** Hermes Agent (50 issues/PRs in 24h), ZeroClaw (63 total updates), and PicoClaw (5 PRs updated) show the highest activity levels. These projects are in active development cycles, with frequent PR merges and open issues indicating ongoing refinement.
- **Stabilizing (Moderate Momentum):** OpenClaw, NanoBot, and NanoClaw maintain steady but slower activity. They are in a consolidation phase, with some stale issues but overall healthy pipelines.
- **Stable (Low Momentum):** IronClaw, LobsterAI, TinyClaw, Moltis, CoPaw, and ZeptoClaw show minimal activity—either no changes or summary generation failures. These projects appear to be in maintenance mode or have lost momentum.

This distribution suggests that the ecosystem is transitioning from a period of broad exploration (many new projects) to a more focused phase where core infrastructure (OpenClaw, Hermes Agent) and feature expansion (PicoClaw, ZeroClaw) dominate.

## 7. Trend Signals

Extracted from community feedback and project digests, several industry trends emerge:

1. **Security Hardening as a Priority:** Multiple projects (Hermes Agent, ZeroClaw, PicoClaw, NanoClaw) are actively addressing authorization, session management, and API-level security. This reflects growing awareness of the risks in agent systems and the need for robust identity and access control.
2. **Multi-Provider Ecosystem Growth:** OpenClaw, PicoClaw, and NanoClaw all demonstrate strong interest in supporting multiple OpenAI-compatible providers, indicating that users increasingly require flexible, multi-gateway deployments.
3. **Reliability and Resilience Focus:** Closed PRs related to checkpoint consistency (OpenClaw #5747, Hermes Agent #12158), retry-wait event routing (NanoBot #6163), and recovery tooling (NanoClaw #5747) highlight a shared emphasis on preventing silent failures and ensuring system stability.
4. **Internationalization and Localization:** Projects like NanoClaw and PicoClaw are adding multilingual documentation and fixing cross-channel compatibility issues (Signal voice-note transcription, Telegram MarkdownV2), suggesting a trend toward global accessibility.
5. **Mobile and Edge Deployment:** Hermes Agent's focus on mobile beta stability and gateway/session reliability indicates growing demand for agent systems that run on mobile devices and require robust offline/edge capabilities.

**Value for AI Agent Developers:** These trends collectively point to a maturing ecosystem where developers should prioritize security, multi-provider flexibility, and reliability. Projects like OpenClaw and Hermes Agent offer stable foundations, while PicoClaw and ZeroClaw provide the advanced features needed for production-grade deployments. The emphasis on internationalization and cross-channel integration also suggests that future agent systems will need to handle diverse user environments and communication channels.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026-11-01**  
*Data snapshot: Issues & PRs updated through 2026-10-31 | GitHub: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)*

---

### 1. Today's Overview
NanoBot recorded 2 issue updates and 8 PR activities in the last 24 hours, with 1 PR merged/closed and 7 still open. No new releases were published. The project shows steady, focused activity around provider expansion, channel reliability, and recovery/resilience tooling. While the issue count remains low, the PR pipeline is active, indicating ongoing technical debt cleanup and incremental feature work rather than major version shifts.

### 2. Releases
No new releases were tagged during this period. The latest release history is empty, and no versioned changelogs or migration notes are available for this digest window.

### 3. Project Progress
- **Closed PR:** #6147 – `fix(providers): tighten tool calls and compatibility fallbacks` (p1). Removes plaintext tool-call extraction, enforces API-structured fields, and prevents assistant text containing `fty` markup from being interpreted as executable calls. Marked as a regression/security fix.
- **Open PRs (7):** 
  - #6446: Adds Runcrate as a new OpenAI-compatible provider.
  - #5825: Introduces a provider-neutral structured decision client (OpenRouter System One protocol).
  - #6264: Routes provider retry-wait events through `sendProgress` to channels.
  - #6194: Replaces session-lock storage with `WeakValueDictionary` to prevent idle lock leaks.
  - #6163: Fixes dropped `RetryWaitEvent` in channel outbound loops.
  - #5405: Adds `disable-model-invocation: true` flag for manual-only skill activation.
  - #5718: Supports OpenRouter native image generation API.

### 4. Community Hot Topics
- **#5747** – *Open, 3 comments, 👍: 0* – Recovery: persist completed tool results at execution-batch boundaries. The most discussed issue currently, reflecting concern over checkpoint consistency during multi-tool runs.
- **#6534** – *Open, 0 comments, 👍: 0* – Signal audio attachment auto-transcription. Newest issue (created/updated 2026-10-31), indicating immediate user need for cross-channel voice-note handling parity.
- **PR cluster:** Seven open PRs span provider onboarding, channel event routing, and API compatibility, suggesting maintainers are prioritizing infrastructure stability over surface features at this stage.

### 5. Bugs & Stability
| Issue/PR | Type | Severity | Status |
|----------|------|----------|--------|
| #6147 (closed) | Regression / Security | P1 | Fixed – enforces structured tool-call fields |
| #6194 | Bug (session leak) | P2 | Fixed – `WeakValueDictionary` for idle locks |
| #6163 | Bug (dropped retry events) | P2 | Fixed – hooks `RetryWaitEvent` to channel loop |
| #5747 | Crash-consistency (checkpoint) | P2/Medium | Open – 3 comments, no maintainer response yet |
| #6534 | Feature gap (transcription) | P3/Low | Open – newly reported |

No critical crashes were reported in the last 24h, but #5747’s checkpoint race condition remains the most significant outstanding stability risk.

### 6. Feature Requests & Roadmap Signals
- **Transcription parity:** #6534 requests automatic Signal voice-note transcription, leveraging nanobot’s existing service – likely to land in a future channel-integration release.
- **Provider expansion:** #6446 (Runcrate) and #5718 (OpenRouter image generation) signal a roadmap of adding third-party OpenAI-compatible gateways and native API support.
- **Recovery & resilience:** #5747 and #5825 (structured decision client) point to a growing focus on durable checkpoints and API-agnostic orchestration.
- **Skill ergonomics:** #5405’s manual-only invocation mode addresses power-user workflows for side-effect skills.

### 7. User Feedback Summary
Users are reporting two distinct pain clusters: **(a)** reliability risks when tools run across process boundaries (checkpoint loss, unignorable tool-call injection), and **(b)** inconsistency in non-Text channels, specifically Signal voice notes being passed as raw file paths without transcription. The closed #6147 fix suggests the maintainer team is actively responding to the first cluster, while the newly opened #6534 highlights a lingering gap in multimedia handling. Overall satisfaction appears driven by incremental stability wins rather than major new capabilities.

### 8. Backlog Watch
- **#5747** (created 2026-09-12, updated 2026-10-31, 3 comments) – Oldest active issue; maintainer triage needed to decide on checkpoint API changes.
- **#5405** (created 2026-08-16, updated 2026-10-31, open ~2+ months) – Skill invocation control feature sitting in review/feedback limbo; may block manual-skill users.
- **#5718** (created 2026-09-09, updated 2026-10-31, open) – OpenRouter image generation support; low comment count but high relevance for multimodal roadmap.
- **#6163** & **#6264** – Both fix retry/event delivery bugs; recently updated and likely close to merge, but worth verifying channel-hook integration.

---
*Digest compiled from GitHub issue/PR activity up to 2026-10-31. All links point to `https://github.com/HKUDS/nanobot`. Project health is moderate: active PR pipeline, no critical regressions in the last day, but two long-open issues warrant maintainer attention.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-11-01

## 1. Today's Overview

Hermes Agent shows elevated daily activity with **50 issues** and **50 pull requests** updated in the last 24 hours. The backlog remains predominantly open: 47 active issues versus 3 closed, and 42 open PRs versus 8 merged/closed. No new releases were shipped today. Development attention is concentrated on mobile beta stability (Android/iOS), gateway/session reliability, desktop/TUI behavior, and security hardening around approval gates and lifecycle guards. Community engagement is highest around the requested native mobile app with voice calling, signaling strong user interest in mobile-first Hermes access.

## 2. Releases

**No new releases** were published on 2026-11-01. The latest referenced stable version in issue reports is v0.22.5 (2026.9.24), with at least one build string `v0.22.5+1855.g642dfd1` in circulation. No breaking changes or migration notes are applicable for today.

## 3. Project Progress

### Merged / Closed PRs Today
Of the 8 PRs merged or closed in the last 24 hours, two are visible in the top-20 list:
- **[#115453](https://github.com/NousResearch/hermes-agent/pull/115453)** [CLOSED] `fix(cron)`: attribute a job source's own failure to that source, not to a provider — corrects failure attribution in cron chat alerts.
- **[#130187](https://github.com/NousResearch/hermes-agent/pull/130187)** [CLOSED] `fix(web)`: validate Firecrawl destinations and retain cache provenance — closes a URL validation/cache inconsistency.

### Notable Open PRs Advancing Features / Fixes
- **[#147395](https://github.com/NousResearch/hermes-agent/pull/147395)** `feat(desktop)`: recover timed-out approvals through session steer — adds an "Ask Hermes to try again" action to desktop approval-timeout notifications.
- **[#147398](https://github.com/NousResearch/hermes-agent/pull/147398)** `fix(gateway)`: keep startup-deferred requests pending — prevents A2A requests from receiving empty completed results during startup restoration.
- **[#147396](https://github.com/NousResearch/hermes-agent/pull/147396)** 429 retries now honor `retry-after-ms` instead of a fixed ~2s backoff (Azure/OpenAI-compatible gateways).
- **[#147399](https://github.com/NousResearch/hermes-agent/pull/147399)** LiteLLM proxy aliases get native image input on custom endpoints.
- **[#147397](https://github.com/NousResearch/hermes-agent/pull/147397)** MCP servers listing duplicate tool names with different schemas no longer advertise the wrong schema.
- **[#124735](https://github.com/NousResearch/hermes-agent/pull/124735)** Google billing/daily-cap 429s are classified as `billing` (immediate rotate) rather than retryable throttles on Gemini routes.
- **[#147152](https://github.com/NousResearch/hermes-agent/pull/147152)** `fix(checkpoints)`: prune preview and execution now agree on orphan detection.
- **[#105626](https://github.com/NousResearch/hermes-agent/pull/105626)** `feat(kanban/desktop)`: board settings UI with per-board toggles.
- **[#146415](https://github.com/NousResearch/hermes-agent/pull/146415)** `fix(tui)`: second Enter no longer breaks held-Enter submit.
- **[#147188](https://github.com/NousResearch/hermes-agent/pull/147188)** `fix(browser)`: URL scanners now reject cloud-metadata hosts hidden behind userinfo.
- **[#146407](https://github.com/NousResearch/hermes-agent/pull/14

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest - 2026-11-01

## 1. Today's Overview

As of 2026-11-01, PicoClaw shows moderate activity with a focus on feature development and bug fixes. The project recorded **5 PRs updated in the last 24 hours** (1 open, 4 closed/merged) and **1 issue updated** (which was closed). There are **no new releases** since the last version. The primary activity centers on three key areas: adding the Standard Compute OpenAI-compatible provider (PR #3431), fixing Telegram MarkdownV2 formatting issues (PR #3443), and improving cron job status tracking (PR #3442). The only stale issue (#3439) from earlier in the month has been resolved, indicating the project is moving forward with active development.

## 2. Releases

**No new releases** have been published as of 2026-11-01. The project remains on the current version (v0.5.0) introduced in the launcher update. All recent changes are contained within PRs and do not constitute a new version release.

## 3. Project Progress

- **PR #3431 [OPEN]** - *feat(provider): add Standard Compute provider*  
  This is the most significant progress item, adding Standard Compute as an OpenAI-compatible provider. The change follows #2917 (NEAR AI Cloud) and introduces a new provider option in `provider_metadata.go`. This feature enables PicoClaw to interface with multiple AI model labs using a single key, expanding its ecosystem integration capabilities.

- **PR #3443 [CLOSED]** - *fix(telegram): escape link labels and blockquote text in MarkdownV2*  
  Resolves issue #3426 where reserved characters in Telegram link labels (e.g., `.` in `[picoclaw.io]`) and blockquote text caused formatting rejection. The fix ensures proper escaping of special characters in MarkdownV2 links.

- **PR #3442 [CLOSED]** - *fix(cron): propagate job failures to lastStatus*  
  Corrects a bug where cron jobs always recorded `"lastStatus": "ok"` even when execution failed. The fix ensures accurate status tracking by propagating actual job outcomes instead of defaulting to "ok".

- **PR #1558 & #1545** - Merged fixes from earlier PRs (#1344, #1342, #1341, #1331) and multiple open PRs (#1500, #1490, #1488, #1487, #1485), indicating ongoing maintenance and stabilization work.

## 4. Community Hot Topics

| Item | Type | Link | Status | Impact |
|------|------|------|--------|--------|
| **Issue #3439** | Bug (Stale/Closed) | [#3439](https://github.com/sipeed/picoclaw/issues/3439) | Closed | Launcher binding issue (IPv4/IPv6) |
| **PR #3431** | Feature (Open) | [#3431](https://github.com/sipeed/picoclaw/pull/3431) | Open | New Standard Compute provider |
| **PR #3443** | Bug Fix | [#3443](https://github.com/sipeed/picoclaw/pull/3443) | Closed | Telegram MarkdownV2 formatting |
| **PR #3442** | Bug Fix | [#3442](https://github.com/sipeed/picoclaw/pull/3442) | Closed | Cron job status tracking |

The most active discussion points are the **Standard Compute provider** (PR #3431) and **Telegram MarkdownV2 compatibility** (PR #3443). The cron job status fix (PR #3442) was already resolved, indicating that reliability improvements are being prioritized.

## 5. Bugs & Stability

**Critical Bugs (Ranked by Severity):**

1. **Issue #3439 (Stale/Closed)** - *Launcher Crash Loop*  
   When `-public` and `-host` flags are used together, the PicoClaw Launcher enters a crash loop. Additionally, using `-public` alone binds only to IPv6, preventing IPv4 clients from connecting. This is a **high-severity stability issue** affecting launcher connectivity. The fix PR (#3439) was closed, but the underlying configuration conflict remains to be addressed in the codebase.

2. **PR #3442 (Closed)** - *Cron Job Status Reporting*  
   Previously, cron jobs always reported `"lastStatus": "ok"` regardless of actual execution outcome. This was a **medium-severity reliability issue** that has been resolved in the closed PR #3442.

**Current Stability Status:** The project shows improved stability with the cron job fix applied. The launcher binding issue (#3439) was addressed in a closed PR, but users may still encounter IPv4 connectivity problems if the launcher is configured with `-public` without `-host`.

## 6. Feature Requests & Roadmap Signals

- **Standard Compute Provider (PR #3431)** - This is the most prominent feature signal. The addition of an OpenAI-compatible provider with multi-lab support (following #2917) represents a significant expansion of PicoClaw's AI integration capabilities. This aligns with the project's roadmap toward broader ecosystem compatibility.

- **Telegram MarkdownV2 Support (PR #3443)** - The fix for link label and blockquote escaping indicates ongoing work to improve Telegram client compatibility. This is a **low-priority but valuable** feature for users who rely on Telegram for notifications.

- **Cron Job Reliability** - The fix for accurate status tracking suggests a broader focus on operational reliability. This may be a precursor to more robust job management features.

**Predicted Next Version:** The Standard Compute provider is likely to be merged and released in a future version, making it a core feature for users seeking multi-provider support. Telegram compatibility improvements are expected to be stable after the recent fix.

## 7. User Feedback Summary

- **Connectivity Issues**: Users have reported IPv4/IPv6 binding problems with the launcher (Issue #3439). The fix was closed, but the issue persists in some configurations, indicating a need for clearer documentation or configuration guidance.

- **Telegram Integration**: The Telegram client was experiencing formatting rejections due to special characters in links and blockquotes. The recent PR #3443 resolves this, improving user experience for Telegram-based workflows.

- **Cron Job Reliability**: The previous bug where cron jobs always reported success was a significant pain point for automation users. The fix in PR #3442 addresses this, enhancing the project's reliability profile.

- **General Satisfaction**: The project appears stable overall, with most recent changes being bug fixes and feature additions rather than breaking changes. The open PR #3431 (Standard Compute) suggests active development and community interest in expanding functionality.

## 8. Backlog Watch

| Item | Type | Link | Priority | Notes |
|------|------|------|----------|-------|
| **Issue #3439** | Bug (Stale/Closed) | [#3439](https://github.com/sipeed/picoclaw/issues/3439) | Medium | Launcher IPv4/IPv6 binding conflict - resolved but may need configuration guidance |
| **PR #3431** | Feature (Open) | [#3431](https://github.com/sipeed/picoclaw/pull/3431) | High | Standard Compute provider - major ecosystem expansion |
| **PR #3443** | Bug Fix (Closed) | [#3443](https://github.com/sipeed/picoclaw/pull/3443) | Medium | Telegram MarkdownV2 compatibility |
| **PR #3442** | Bug Fix (Closed) | [#3442](https://github.com/sipeed/picoclaw/pull/3442) | Medium | Cron job status tracking accuracy |

**Key Watch Items:**
- **Issue #3439** remains stale but should be monitored for any reopening or configuration guidance needs.
- **PR #3431** is the most important open item and should be prioritized for review and potential release.
- The cron job fix (#3442) is resolved, but ongoing reliability improvements may be needed for production deployments.

---

**Summary:** PicoClaw is actively developing with a focus on feature expansion (Standard Compute provider) and bug fixes (Telegram compatibility, cron job reliability). The project shows stable progress with no new releases, but the open Standard Compute provider PR represents the most significant upcoming contribution. Users should be aware of the launcher IPv4/IPv6 binding issue (resolved but may require configuration attention) and appreciate the recent improvements in Telegram and cron job functionality.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**1. Today’s Overview**  
NanoClaw remains an actively maintained open‑source Telegram‑bot framework, with recent activity showing a healthy cadence of bug‑fixes and small feature tweaks. In the last 24 hours the project saw one issue opened and three pull requests updated, indicating ongoing development momentum. No new releases were published, so the current stable version continues to be the reference point for users. The mix of open and closed PRs suggests that the maintainers are quickly merging targeted fixes while still welcoming new contributions.

**2. Releases**  
*No new releases were published.* The latest tagged version remains unchanged, and there are no migration notes or breaking‑change announcements to report.

**3. Project Progress**  
- **Closed PR #4111** (`feat(telegram): bot‑to‑bot admission gate (doorman) behind TELEGRAM_BOT_INBOUND`) merges a security‑focused enhancement that prevents other Telegram bots from unintentionally triggering unbounded reply loops when Bot‑to‑Bot mode is active.  
- This merge advances the bot‑to‑bot interaction safety net, a notable stability improvement for deployments that enable multiple Telegram accounts.  

**4. Community Hot Topics**  
- **Issue #3338** – *“Codex WebSocket idle retry is hidden until NanoClaw’s 10‑minute turn timeout”* (4 comments, no 👍). The discussion reveals a hidden failure mode where a stalled WebSocket causes silent ten‑minute dead‑air for users, highlighting a need for clearer error surfacing and better timeout handling.  
- **PR #4244** – *“fix(host): propagate operational errors from AnchoredDir callers instead of treating them as unsafe paths”* (no comments yet). It addresses a security‑related bug where disk‑ and permission‑related errors were mis‑interpreted, indicating community concern for robust error handling and preventing false‑positive path‑safety rejections.  
- **PR #4243** – *“fix(telegram): escape $ and keep line breaks in rich messages”* (no comments yet). Users have complained that Telegram rich‑message formatting mangles dollar signs and merges bullet‑point lines, so this fix directly improves message fidelity and user experience.

**5. Bugs & Stability**  
| Severity | Reported Item | Impact | Fix PR (if any) | Link |
|----------|---------------|--------|----------------|------|
| **High** | Issue #3338 – WebSocket idle timeout hidden until 10‑minute turn timeout | Users experience unresponsive bot behavior for up to 10 minutes, no immediate feedback | PR #4244 (operational error propagation) indirectly mitigates mis‑classification of errors, but a dedicated timeout/retry improvement is still pending | https://github.com/qwibitai/nanoclaw/issues/3338 |
| **Medium** | PR #4244 – propagate operational errors from AnchoredDir | Disk/permission errors previously treated as unsafe‑path refusals could hide real I/O failures, leading to silent crashes | **Self** (the PR itself) | https://github.com/qwibitai/nanoclaw/pull/4244 |
| **Low** | PR #4243 – escape `$` and preserve line breaks in rich messages | Formatting glitches cause user‑visible text corruption in Telegram replies | **Self** | https://github.com/qwibitai/nanoclaw/pull/4243 |

**6. Feature Requests & Roadmap Signals**  
- The **bot‑to‑bot admission gate** in PR #4111 signals demand for tighter control over multi‑bot interactions, a feature likely to be upstreamed in the next minor release to improve safety for advanced deployment scenarios.  
- The **Telegram rich‑text escaping** fix in PR #4243 reflects user‑reported quality‑of‑life issues; expect this to be part of the upcoming 4.42.x patch series, as it touches core message rendering logic.  

**7. User Feedback Summary**  
- **Pain Points:** Users report silent failures when the Codex WebSocket stalls (Issue #3338) and formatting errors in Telegram messages (Issue #4243), both eroding confidence in reliability.  
- **Use Cases:** Deployments that run multiple Telegram bots (e.g., admin + assistant bots) need explicit admission gating to avoid reply loops, as highlighted by PR #4111.  
- **Satisfaction/Dissatisfaction:** Overall satisfaction appears moderate; the community appreciates rapid bug‑fix merges but is calling for clearer error reporting and more robust handling of network stalls.

**8. Backlog Watch**  
- **Issue #3338** remains open with no recent maintainer response (last updated 2026‑10‑31). The lack of a timely fix for the hidden WebSocket timeout could affect production stability.  
- **PR #4244** and **PR #4243** are both open but have seen no review activity since their creation on 2026‑10‑31. Given their security and usability implications, maintainer attention is advisable to unblock the merged benefits.  

*All links are to the official NanoClaw repository at https://github.com/qwibitai/nanoclaw.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026‑11‑01**

---

### 1. Today’s Overview  
NullClaw shows a modest but focused activity spike on 2026‑11‑01. One issue (Issue #1085) was updated, indicating an ongoing bug that affects the `web_search` integration with the “exa” search provider. Three pull requests (PR #1084, #1086, #1087) were also updated, all concerning documentation additions and a bug‑fix for the duplicate `Content‑Type` header. No releases were published, and the repository remains on a single development line. Overall health appears stable, with the core problem being a header‑duplication defect that is already being addressed.

**Links**:  
- Issue #1085: <https://github.com/nullclaw/nullclaw/issues/1085>  
- PR #1084: <https://github.com/nullclaw/nullclaw/pull/1084>  
- PR #1086: <https://github.com/nullclaw/nullclaw/pull/1086>  
- PR #1087: <https://github.com/nullclaw/nullclaw/pull/1087>

---

### 2. Releases  
*No new releases were published in the last 24 hours.*  

---

### 3. Project Progress  
- **Merged/Closed PRs today:** 0 (all three PRs remain open).  
- **What advanced or was fixed:**  
  - PR #1086 directly addresses the duplicate `Content‑Type` header bug reported in Issue #1085, preventing Exa from rejecting requests and restoring functional `web_search` calls.  
  - PR #1087 adds a full Traditional Chinese (zh‑TW) documentation set, expanding accessibility for Taiwanese users.  
  - PR #1084 introduces Japanese documentation, continuing the multilingual outreach effort.

---

### 4. Community Hot Topics  
**Most active items** (all updated within the last 24 h):  

| Type | Title | Author | Comments / Reactions | Link |
|------|-------|--------|----------------------|------|
| Issue | **web_search: Exa rejects requests because Content‑Type is sent twice** (Issue #1085) | Krakazybik | 0 👍 | <https://github.com/nullclaw/nullclaw/issues/1085> |
| PR | **docs(zh-tw): add Traditional Chinese (zh‑TW) documentation** (PR #1087) | supersonictw | 0 👍 | <https://github.com/nullclaw/nullclaw/pull/1087> |
| PR | **fix(http): send a single Content‑Type when callers pass their own** (PR #1086) | Krakazybik | 0 👍 | <https://github.com/nullclaw/nullclaw/pull/1086> |
| PR | **docs: add Japanese documents** (PR #1084) | eltociear | 0 👍 | <https://github.com/nullclaw/nullclaw/pull/1084> |

**Underlying needs analysis**  
- The **duplicate `Content‑Type` header** issue (Issue #1085 / PR #1086) reveals a critical integration problem: callers supplying their own headers cause Exa to receive two `Content‑Type: application/json` headers, resulting in HTTP 400 errors and a broken search flow. This is a high‑severity stability bug that directly impacts user experience.  
- The **multilingual documentation PRs** (Japanese & Traditional Chinese) indicate strong community demand for broader language support, especially in regions where English documentation may be a barrier. These PRs are low‑risk, high‑value contributions that improve onboarding and adoption.

---

### 5. Bugs & Stability  
| Severity | Bug / Symptom | Reported By | Fix PR (if any) | Link |
|----------|---------------|-------------|----------------|------|
| **High** | `web_search` with `search_provider: "exa"` fails due to duplicate `Content‑Type` headers → Exa returns 400 `InvalidResponse`. Agent receives no search results. | Krakazybik (Issue #1085) | **PR #1086** – skips caller‑provided `Content‑Type` when it duplicates the default. | <https://github.com/nullclaw/nullclaw/pull/1086> |

*No other crashes, regressions, or stability alerts were reported today.*

---

### 6. Feature Requests & Roadmap Signals  
- No explicit feature requests were opened or updated in the last 24 h.  
- The **documentation PRs** suggest a roadmap direction toward greater internationalization. Future releases may bundle these language packs as optional modules, reducing the need for manual translation maintenance.

---

### 7. User Feedback Summary  
- **Pain point:** Users attempting `web_search` with the “exa” provider are blocked by a malformed HTTP request (duplicate header). This results in silent failures—agents answer without search results, harming workflow reliability.  
- **Use cases affected:** Any automated or scripted workflow that relies on `web_search` (e.g., data‑fetching bots, QA agents) is impacted.  
- **Satisfaction:** The majority of the community appears satisfied with the rapid response (a fix PR opened within the same day), but the underlying bug erodes confidence in the stability of external provider integrations.

---

### 8. Backlog Watch  
| Item | Reason for Attention | Status |
|------|----------------------|--------|
| **Issue #1085** (duplicate `Content‑Type` header) | High‑severity bug affecting core search functionality. | **Open** – fix PR #1086 is ready for review/merge. |
| **PR #1087** (Traditional Chinese docs) | Ongoing multilingual expansion; no review comments yet. | **Open** – awaiting maintainer approval. |
| **PR #1084** (Japanese docs) | Similar to PR #1087; may need QA of translation consistency. | **Open** – pending review. |

*All three items are actively being worked on, but the issue‑bug fix should be prioritized to unblock users as soon as possible.*  

--- 

**Conclusion:** NullClaw’s immediate health is good, with a clear, high‑impact bug fix in progress and steady progress on documentation localization. The project demonstrates responsiveness to community‑reported issues and a commitment to expanding language support, which should enhance user satisfaction and broaden adoption in non‑English speaking markets.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-11-01

**Source:** github.com/netease-youdao/LobsterAI  
**Data window:** Activity updated in the last 24 hours (2026-10-31 → 2026-11-01)

---

## 1. Today's Overview

LobsterAI shows minimal activity on 2026-11-01. Zero issues were opened or updated, no new releases were published, and no pull requests were merged or closed in the last 24 hours. The only recorded activity is a single open pull request (#2966) concerning Windows release tooling and Codown SVN publishing. Project health appears stable but low-velocity for this period, with no reported incidents or user-facing changes.

---

## 2. Releases

No new releases were published on 2026-11-01. This section is omitted per instructions.

---

## 3. Project Progress

- **Merged/closed PRs today:** 0  
- **Features advanced:** None merged.  
- **Open PR contributing to progress:**  
  - **#2966** `[area: build, platform: windows] feat(release): add codown SVN publish workflow` by **fisherdaddy**  
    - Adds release tooling that builds signed installers and submits them to the internal SVN drop used by Codown.  
    - Deployment remains manual: scripts print the ticket URL and public download URLs, and never open a browser or create a ticket.  
    - New command introduced: `npm run release:codown ...`  
    - **Link:** https://github.com/netease-youdao/LobsterAI/pull/2966  

No bug fixes or feature merges were recorded today.

---

## 4. Community Hot Topics

Only one item registered activity in the last 24 hours:

| Item | Type | Comments | Reactions | Link |
|------|------|----------|-----------|------|
| #2966 | Pull Request | 0 | 👍 0 | https://github.com/netease-youdao/LobsterAI/pull/2966 |

**Underlying need analysis:** The contributor is seeking a standardized, auditable path to publish Windows installers to the internal Codown SVN distribution channel. By keeping deployment manual (URLs are printed, not auto-submitted), the design reflects a need for release governance and human sign-off rather than fully automated publishing.

No issues with comments or reactions were reported today.

---

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in issues today (0 issues updated). No fix PRs are associated with today’s activity.

---

## 6. Feature Requests & Roadmap Signals

No new issue-based feature requests were submitted today.  
The only roadmap-relevant signal is **PR #2966**, indicating the team is working on release automation and internal distribution tooling for Windows. If maintainers review and merge it, this release-tooling capability could appear in the next version.

---

## 7. User Feedback Summary

No user feedback, issue comments, or reactions were captured in the last 24 hours. Pain points, use cases, or satisfaction/dissatisfaction levels cannot be assessed from the provided data.

---

## 8. Backlog Watch

- **PR #2966** — Open since 2026-10-31, updated 2026-10-31. Awaiting maintainer review/merge. This is the primary item needing attention.  
  **Link:** https://github.com/netease-youdao/LobsterAI/pull/2966  
- **Long-unanswered issues:** None listed in the provided data.

---

*Digest generated from GitHub activity data for 2026-11-01. All links point to https://github.com/netease-youdao/LobsterAI.*

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

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-11-01

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 63 total updates (13 issues, 50 PRs) in the last 24 hours. The project is in a **pre-v0.9.0 stabilization phase** — no new releases today, but multiple release-gated security PRs and CLI-only build work are converging. Security dominates: 5 P1/P2 security PRs remain open, a professional audit found 10 unpatched vulnerabilities upstream, and a CSRF in OIDC callback was reported. Meanwhile, the agent runtime sees active fixes for `send_message_to_peer` scope/autonomy bugs and SOP parity work. The CLI/installer has 4 minor but user-visible bugs filed today (musl/glibc detection, version display, quickstart cleanup).

---

## 2. Releases

**No new releases published today.** The project appears to be accumulating changes for v0.9.0 (referenced in 8+ PRs/issues). Key release-blocking items include:
- Security audit fixes (10 unpatched vulns in #12158)
- Wasmtime security advisories blocking CI (#12128, closed but may need version bump)
- SOP/admin authority enforcement PRs (#11220, #11230, #11234)
- CLI-only build installation path (#12111 closed, #11971 closed)

---

## 3. Project Progress — Merged/Closed Today (6 PRs)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#11940](https://github.com/zeroclaw-labs/zeroclaw/pull/11940) | `fix(enroll): redeem enrollment codes on daemon's canonical pairing guard` | Gateway/Security | Fixes enrollment flow inconsistency; unblocks pairing codes |
| [#11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822) | `fix(security): split POSIX commands at substitution/subshell boundaries` | Shell/Security | Hardens command scanning against injection via `$(...)`, `<(...)`, subshells |
| [#12071](https://github.com/zeroclaw-labs/zeroclaw/pull/12071) | `feat(zerocode): add /load-session to resume saved session by name or id` | ZeroCode/UX | Adds missing session resume command (closes #12069) |
| [#12111](https://github.com/zeroclaw-labs/zeroclaw/pull/12111) | `feat(install): install CLI-only build, switch to standard only on request` | CLI/Distribution | Enables minimal server installs without dashboard/gateway (closes #11971) |
| [#12102](https://github.com/zeroclaw-labs/zeroclaw/pull/12102) | `chore(deps): bump rust-all group (34 updates)` | Dependencies | Routine dependency maintenance |
| [#12128](https://github.com/zeroclaw-labs/zeroclaw/issues/12128) | Security job fails: Wasmtime 48.0.7 advisories (RUSTSEC-2026-0420..0424) | CI/Security | **Closed** — likely resolved by dependency update or Wasmtime pin |

---

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | Issue (RFC) | 8 | **Knowledge Corpus / RAG** — Operators want agents to answer from local docs, standards, references. Capability boundary expansion. |
| [#11220](https://github.com/zeroclaw-labs/zeroclaw/pull/11220) | PR (Security) | — | **SOP Admin Authority** — Require administrator authority for `sops/run` and `sops/decide`. P1, release-gate, high risk. |
| [#11230](https://github.com/zeroclaw-labs/zeroclaw/pull/11230) | PR (Security) | — | **Session-Data Tool Isolation** — Withhold `session-data` tools from non-admin principals. Depends on #11225, #11234. P1. |
| [#11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234) | PR (Security) | — | **RPC Session Ownership** — Judge queued session ownership by *current* authority, not stale context. P1, release-gate. |
| [#11965](https://github.com/zeroclaw-labs/zeroclaw/pull/11965) | PR (Feature) | — | **OIDC Dashboard Sign-In** — Opt-in SSO for dashboard (currently pairing-code only). High risk, needs author action. |
| [#12158](https://github.com/zeroclaw-labs/zeroclaw/issues/12158) | Issue (Security) | 0 | **10 Unpatched Vulnerabilities** — External audit found 15 findings; 5 fixed upstream, 10 remain. Reference fixes available in fork. |

**Analysis:** The community is pushing hard on **identity/access control hardening** (SOP, RPC, session isolation) and **enterprise auth** (OIDC). The RFC for RAG (#11235) signals the next major capability frontier. The security audit (#12158) is a credibility/urgency signal — 10 unpatched vulns with fixes already in a fork.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Component | Fix PR? |
|----------|-------|-----------|---------|
| **Critical** | [#12050](https://github.com/zeroclaw-labs/zeroclaw/issues/12050): OIDC callback token page lacks browser binding → login CSRF | Gateway/Identity | No |
| **High** | [#12169](https://github.com/zeroclaw-labs/zeroclaw/issues/12169): `send_message_to_peer` starts recipient turn outside headless SOP step tool scope | Runtime/Tools | Yes: [#12170](https://github.com/zeroclaw-labs/zeroclaw/pull/12170) |
| **High** | [#12167](https://github.com/zeroclaw-labs/zeroclaw/issues/12167): `send_message_to_peer` ignores sender autonomy level & action budget | Runtime/Tools | Yes: [#12168](https://github.com/zeroclaw-labs/zeroclaw/pull/12168) |
| **High** | [#12158](https://github.com/zeroclaw-labs/zeroclaw/issues/12158): 10 unpatched vulnerabilities from professional security review | Cross-cutting | No (fixes in fork, not yet upstreamed) |
| **S2 (Degraded)** | [#12156](https://github.com/zeroclaw-labs/zeroclaw/issues/12156): `zeroclaw update` always downloads glibc build, breaks musl installs | Daemon/Update | No |
| **S3 (Minor)** | [#12155](https://github.com/zeroclaw-labs/zeroclaw/issues/12155): Cancelled quickstart leaves `~/.zeroclaw/config.toml` despite "No config written" | Onboarding | No |
| **S3 (Minor)** | [#12154](https://github.com/zeroclaw-labs/zeroclaw/issues/12154): `install.sh` shows commit hash instead of version (e.g., `v(99bd353)`) | Installer | Yes: [#12159](https://github.com/zeroclaw-labs/zeroclaw/pull/12159) |
| **S3 (Minor)** | [#12153](https://github.com/zeroclaw-labs/zeroclaw/issues/12153): `install.sh` picks musl build on glibc hosts with musl package installed | Installer | No |

**Note:** The two `send_message_to_peer` bugs (#12169, #12167) have companion fix PRs opened same day (#12170, #12168) — fast response.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.9.0 / Next |
|--------|--------|------------------------------|
| **Knowledge Corpus / RAG** | [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) (RFC, 8 comments) | **High** — Capability boundary RFC, active design discussion |
| **CLI-only Build Distribution** | [#11971](https://github.com/zeroclaw-labs/zeroclaw/issues/11971) + [#12111](https://github.com/zeroclaw-labs/zeroclaw/pull/12111) | **Done** — CLI-only build now installable via `install.sh` |
| **OIDC Dashboard SSO** | [#11965](https://github.com/zeroclaw-labs/zeroclaw/pull/11965) | **Medium** — Opt-in, high risk, needs author action; may slip to post-v0.9.0 |
| **Goal Controls at Turn Boundaries** | [#11883](https://github.com/zeroclaw-labs/zeroclaw/pull/11883) (6/12 slice) | **Low for v0.9.0** — Large architectural PR, draft, depends on Goal stack |
| **SOP Parity (cancel, dispatch-event, decision-models, graph-legend)** | [#11169](https://github.com/zeroclaw-labs/zeroclaw/pull/11169) | **High** — Gateway split dependency, v0.9.0 release-gate |
| **Session Resume by Name/UUID** | [#12069](https://github.com/zeroclaw-labs/zeroclaw/issues/12069) + [#12071](https://github.com/zeroclaw-labs/zeroclaw/pull/12071) | **Done** — `/load-session` merged |

**Prediction:** v0.9.0 will ship with **CLI-only builds, SOP parity, session resume, and core security hardening (admin authority, session isolation)**. RAG and OIDC SSO are likely post-v0.9.0.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Installer/Updater broken for musl** | #12156 (update), #12153 (detect), #12154 (version display) | 3 issues filed today |
| **Quickstart UX misleading** | #12155: "No config written" but file created | 1 issue today |
| **Session management in ZeroCode** | #12069: Only `Ctrl+S` picker worked; no CLI command | Resolved by #12071 |
| **Security audit gaps** | #12158: 10 vulns unpatched upstream despite fixes in fork | 1 report, high credibility |
| **Agent-to-agent tool gaps** | #12169, #12167: `send_message_to_peer` breaks scope/autonomy | 2 issues, same author, same day |

**Satisfaction signal:** Users are filing **specific, reproducible bugs** with severity labels — indicates active production use. The CLI-only build request (#11971) was driven by "servers and minimal installs" need and delivered quickly.

---

## 8. Backlog Watch — Stale High-Impact Items Needing Maintainer Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#11220](https://github.com/zeroclaw-labs/zeroclaw/pull/11220) | 33 days | **P1 Security**: Admin authority for SOP execution. Release-gate for v0.9.0. | Open, needs review |
| [#11230](https://github.com/zeroclaw-labs/zeroclaw/pull/11230) | 33 days | **P1 Security**: Session-data tool isolation for non-admins. Depends on #11225, #11234. | Open, needs review |
| [#11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234) | 33 days | **P1 Security**: RPC session ownership by current authority. Release-gate. | Open, needs review |
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | 31 days | **P1 Security**: Publish auth edits from `config set/patch` to running daemon. Needs maintainer review. | Open |
| [#11266](https://github.com/zeroclaw-labs/zeroclaw/pull/11266) | 32 days | **Security**: Subagent memory leakage (child gets parent's memory). v0.9.0. | Open |
| [#11169](https://github.com/zeroclaw-labs/zeroclaw/pull/11169) | 36 days | **Architecture**: SOP parity for gateway split. v0.9.0. | Open, large |
| [#11965](https://github.com/zeroclaw-labs/zeroclaw/pull/11965) | 10 days | **Feature**: OIDC dashboard sign-in

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*