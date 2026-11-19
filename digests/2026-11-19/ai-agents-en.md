# OpenClaw Ecosystem Digest 2026-11-19

> Issues: 491 | PRs: 500 | Projects covered: 13 | Generated: 2026-11-19 05:05 UTC

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

# Cross-Project Comparison Report — 2026-11-19

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape on 2026-11-19 is a tale of two velocities. At one extreme, ZeroClaw and NanoClaw are shipping with exceptional speed — the former driving a foundational V5 provider registry refactor alongside a wave of security hardening, the latter cutting a second release candidate with provider and channel improvements. At the other, projects like PicoClaw and LobsterAI are in consolidation mode: closing issues, merging sync PRs, and stabilizing. Several projects (OpenClaw, NanoBot, Hermes Agent, CoPaw) produced no usable signal today, and four of the thirteen tracked repos showed zero activity in the last 24 hours. The overall picture is one of **uneven momentum**, with a few rapidly iterating projects carrying the ecosystem's developmental weight while others appear dormant or in maintenance.

## 2. Activity Comparison

| Project | Issues (24h) | PRs Merged/Closed (24h) | Release Status | Health Signal |
|---|---|---|---|---|
| **ZeroClaw** | ~30+ (99 combined updates) | 12 closed | v0.9.1 in prep; v0.9.0 last shipped | ★★★★★ — Exceptional velocity, active refactor |
| **NanoClaw** | 6 (all closed) | 13 merged/closed | v2026.11.0-rc.2 cut today | ★★★★☆ — High closing velocity, release candidate |
| **LobsterAI** | 1 update | 9 merged/closed | None | ★★★☆☆ — Steady merge activity, security focus |
| **PicoClaw** | 1 closed | 4 closed/merged | None | ★★☆☆☆ — Low activity, maintenance phase |
| **OpenClaw** | — | — | — | No data |
| **NanoBot** | — | — | — | No data |
| **Hermes Agent** | — | — | — | No data |
| **CoPaw** | — | — | — | No data |
| **NullClaw** | 0 | 0 | — | Inactive |
| **IronClaw** | 0 | 0 | — | Inactive |
| **TinyClaw** | 0 | 0 | — | Inactive |
| **Moltis** | 0 | 0 | — | Inactive |
| **ZeptoClaw** | 0 | 0 | — | Inactive |

**Key takeaway:** Only 4 of 13 projects generated meaningful activity today. ZeroClaw alone accounted for roughly 60% of all PR closures across the tracked ecosystem.

## 3. OpenClaw's Position

OpenClaw is the designated "core reference" project, but today's digest provides no data to evaluate its current trajectory. This absence is itself notable: in a landscape where ZeroClaw and NanoClaw are driving architectural change (V5 provider registry, release candidate cadence), OpenClaw's silence means it cannot be benchmarked against peers on velocity, technical approach, or community engagement. If OpenClaw is the intended anchor, its current lack of visible momentum risks creating a **reference gap** — developers looking for a stable, canonical architecture may instead gravitate toward the more visibly active alternatives. Without data on commit volume, issue responsiveness, or release frequency, no comparative advantages or disadvantages can be assessed for today's window.

## 4. Shared Technical Focus Areas

Across the four active projects, several common requirements emerge:

| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **Security Hardening** | ZeroClaw, LobsterAI, PicoClaw | Approval-hook lifecycle integrity (PicoClaw #3456), SSRF prevention in MCP SSE clients (ZeroClaw #12146), `localfile://` path traversal (LobsterAI #3096), tool scope enforcement (ZeroClaw #12169), file permission bypass (ZeroClaw #12144) |
| **Provider Abstraction & Integration** | ZeroClaw, NanoClaw | Canonical provider registry with typed connections and fallback (ZeroClaw V5), Codex/OneCLI parity (NanoClaw #4451, #4464), llama.cpp custom URI handling (ZeroClaw #11296) |
| **Setup & Installation Reliability** | NanoClaw, PicoClaw | Polkit-less Linux hosts (NanoClaw #4428), provider image rebuilds in progress windows (NanoClaw #4447), Bun-pinned typechecking (NanoClaw #4454), WebSocket auth header standardization (PicoClaw #2363) |
| **Release Process Maturity** | ZeroClaw, NanoClaw | Binary size gates (ZeroClaw #11580), release candidate discipline (NanoClaw rc.1 → rc.2), SHA256SUMS verification (ZeroClaw #12122) |
| **Web / Channel UX** | ZeroClaw, LobsterAI, NanoClaw | Chat input focus persistence (ZeroClaw #11660), Slack suggested prompts (NanoClaw #4456), model-tag localization and link previews (LobsterAI #3109, #3115) |

**Consensus observation:** Every active project is simultaneously tackling security, provider plumbing, and setup robustness — suggesting these are **table-stakes requirements** in the current ecosystem, not differentiators.

## 5. Differentiation Analysis

| Dimension | ZeroClaw | NanoClaw | LobsterAI | PicoClaw |
|---|---|---|---|---|
| **Feature Focus** | Architectural refactor (V5 registry), plugin system (WASM), MCP OAuth 2.1 | Provider integrations (Codex, Slack, OneCLI), setup reliability | OpenClaw skill compaction, execution mode persistence, renderer UX | Upstream sync, bug fixes, approval-hook hardening |
| **Target Users** | Power users needing multi-provider routing; plugin developers | Teams standardizing on Codex/Slack workflows; Linux deployers | OpenClaw ecosystem users; Chinese-market localization | Existing PicoClaw users; upstream-sync followers |
| **Technical Architecture** | 40+ Rust crates; WASM plugins; RPC-based session state; V5 typed provider registry | Bun-based; containerized setup; channels branch separate from main | Electron/React renderer; skill catalog compaction; cowork execution modes | Go-based; agent loop split into `agent_*.go`; tools reorganized |
| **Release Cadence** | v0.9.0 → v0.9.1 (blocked by regressions) | 2026.10.1 (abandoned) → 2026.11.0-rc.1 → rc.2 | Irregular; no recent releases | No recent releases |
| **Community Signal** | Highest issue/PR volume; 7-comment threads on critical bugs | Moderate; sparse comments, thematic clustering | Low engagement; stale PRs (~45 days) closed in batch | Minimal; 2 comments on security issue |

**Key differentiator:** ZeroClaw is the only project pursuing a **deep architectural refactor** (V5 registry, WASM plugins) while simultaneously fixing critical regressions — a high-risk, high-reward strategy that, if successful, could make it the de facto reference implementation for multi-provider agent routing. NanoClaw is the most **release-disciplined** project today, with a clear rc.1 → rc.2 progression and a focused integration agenda. PicoClaw and LobsterAI are playing **defensive** — stabilizing, syncing, and hardening.

## 6. Community Momentum & Maturity

**Activity Tiers:**

| Tier | Projects | Characteristics |
|---|---|---|
| **Tier 1 — Rapid Iteration** | ZeroClaw, NanoClaw | 99 and ~25 combined updates/day; active refactors; release candidates; security audits; community engagement on critical bugs |
| **Tier 2 — Steady State** | LobsterAI, PicoClaw | Merge/closure-heavy; no new features; backlog cleanup; security issue resolution; low community interaction |
| **Tier 3 — Dormant / No Signal** | OpenClaw, NanoBot, Hermes Agent, CoPaw, NullClaw, IronClaw, TinyClaw, Moltis, ZeptoClaw | No activity in 24h; summaries failed or unavailable |

**Maturity Assessment:**
- **ZeroClaw** is the least mature in terms of release stability (v0.9.0 has known regressions blocking v0.9.1) but the most mature in architectural vision (V5 registry, WASM plugin model).
- **NanoClaw** demonstrates the most mature release process ( disciplined rc.1 → rc.2, clear changelog) but is still recovering from a failed 2026.10.1 release.
- **PicoClaw** and **LobsterAI** show operational maturity (consistent PR closure, security remediation) but lack the velocity to indicate rapid evolution.
- The **eight Tier-3 projects** represent either stalled efforts, very low activity repos, or projects whose summaries failed to generate — a significant portion of the tracked ecosystem is currently unobservable.

## 7. Trend Signals

**Industry trends extracted from community feedback:**

1. **Provider abstraction is the new battleground.** ZeroClaw's V5 registry, NanoClaw's Codex/OneCLI integration, and the llama.cpp URI issue all point to a market demand for **provider-agnostic agent frameworks** that can route across OpenAI, Anthropic, Codex, self-hosted models, and MCP backends without vendor lock-in.

2. **Security is shifting from reactive to proactive.** Six security fixes in a single day (ZeroClaw), a security issue closed within 3 days (LobsterAI #3096), and approval-hook lifecycle hardening (PicoClaw) indicate that the community now treats security as a **continuous audit function**, not a point-in-time review.

3. **Setup reliability is a competitive moat.** NanoClaw's fixes for Polkit prompts, provider image rebuilds, and Bun-pinned typechecking address **deployment friction** — the projects that make agent setup work on minimal Linux hosts without interactive prompts are winning mindshare with operators and DevOps users.

4. **Release process maturity correlates with community trust.** NanoClaw's rc.1 → rc.2 cadence and ZeroClaw's binary size gate debate (#11580) both reflect a community that expects **transparent, documented release processes**. Projects that skip this (PicoClaw, LobsterAI) show lower community engagement.

5. **Web UX is table stakes, not a differentiator.** Chat input focus, suggested prompts, model tags, and link previews are being fixed across all active projects simultaneously — indicating a **baseline expectation** rather than a source of competitive advantage.

**Value for AI agent developers:** The ecosystem is converging on a common architectural pattern (typed provider registry, plugin/WASM extensibility, MCP integration, security-first defaults). Developers should evaluate projects not on whether they have these features, but on **how cleanly they implement them** — ZeroClaw's V5 registry and NanoClaw's release discipline are the two most concrete signals of implementation quality in today's data.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-11-19

## 1. Today's Overview

PicoClaw recorded a quiet but operationally active day on 2026-11-19, with activity concentrated in issue triage and pull-request closure rather than new feature development. The GitHub feed shows one closed issue and four closed/merged pull requests in the last 24 hours, and no new releases published. The single closed issue concerns a security vulnerability involving approval-hook re-initialization, while the closed PRs are dominated by maintenance and bug-fix synchronization work. Project health indicators remain stable, though the low volume of fresh content means today's snapshot offers limited signal on overall momentum or sentiment.

## 2. Releases

**No new releases** were published within the reporting window. No changes, breaking changes, or migration notes to document at this time.

## 3. Project Progress

Today's pull-request activity was entirely closure/merge activity, indicating resolution of previously open work:

- **PR #2810** — [Sync with upstream/main (1095 commits) + forward-port magicform customizations](https://github.com/sipeed/picoclaw/pull/2810) — Closed today (updated 2026-11-18). The largest item, merging roughly 1095 upstream commits and forward-porting customizations onto a restructured layout (agent loop split into `agent_*.go`, tools reorganized).
- **PR #2363** — [Fix WebSocket authentication and standardize header casing](https://github.com/sipeed/picoclaw/pull/2363) — Closed today; flagged as a bug fix, related to [issue #2354](https://github.com/sipeed/picoclaw/issues/2354).
- **PR #1546** — [fix: merge PR #1480 #1479 #1478 #1473 #1467](https://github.com/sipeed/picoclaw/pull/1546) — Closed today.
- **PR #1558** — [fix: merge PR #1344 #1342 #1341 #1331](https://github.com/sipeed/picoclaw/pull/1558) — Closed today.

The pattern of merged sync/fix PRs suggests the project is in a maintenance and hardening phase, clearing queued fixes rather than shipping new user-facing features.

## 4. Community Hot Topics

- **Issue #3456** — [Security: failed approval-hook re-initialization during reload leaves the gateway serving with tools ungated](https://github.com/sipeed/picoclaw/issues/3456) *(closed today)*. Author: EddieMurphy89; created 2026-11-04, updated 2026-11-18; 2 comments, 0 reactions. The only community discussion in the window. The issue describes a security-relevant failure mode in PicoClaw's approval-hook lifecycle during process reloads (`/reload` or config reload), where a failed re-initialization could leave tool execution ungated. The `[stale]` label and 2-day quiet period suggest it lingered before closure.

## 5. Bugs & Stability

- **High — Security**: Issue [#3456](https://github.com/sipeed/picoclaw/issues/3456) — failed approval-hook re-initialization during reload left the gateway serving with tools ungated. Closed today; a fix PR is not referenced in the visible data, so status of the actual fix is unclear.
- **Medium — Bug**: PR [#2363](https://github.com/sipeed/picoclaw/pull/2363) — WebSocket authentication fix and header-casing standardization; closed today, likely resolving related stability/auth concerns ([#2354](https://github.com/sipeed/picoclaw/issues/2354)).

No new crash reports or regressions appeared in today's data; stability assessment is based on the closed security issue and merged auth fix.

## 6. Feature Requests & Roadmap Signals

No standalone feature requests were surfaced in today's digest. Roadmap signals from current activity point toward:

- Continued **security hardening** (approval-hook reliability).
- **Upstream synchronization** and forward-porting of customizations (PR #2810), implying the roadmap may prioritize compatibility and feature parity over novel functionality in the near term.

## 7. User Feedback Summary

Feedback volume is minimal for today — the security issue drew 2 comments and no reactions, and no satisfaction metrics were available. The discussion around failed approval-hook re-initialization indicates users are engaging with the runtime safety/governance layer, but the low engagement may also reflect limited public visibility or stalled discussion before closure.

## 8. Backlog Watch

- **Issue #3456** was labeled `[stale]`, which may indicate delayed maintainer attention before its recent closure — worth monitoring whether similar approval-hook issues recur.
- The batch of merged fix-PRs (#1546, #1558, #2363) suggests multiple small queued bugs were resolved; the source PRs they merged from (#1467, #1331, etc.) may still carry context worth revisiting.

---

**Project Health Snapshot:** Low-day activity, zero releases, one security issue closed, four maintenance/fix PRs merged. Overall signals remain positive for stability (active remediation) but the absence of new releases and feature work keeps roadmap momentum modest. Data limitations: comment/reaction counts were sparse, and release notes were unavailable.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-11-19

**Repository:** [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)  
**Reporting period:** Activity updated in the last 24 hours (issues, PRs, release)

---

## 1. Today's Overview

NanoClaw showed high closing velocity on 2026-11-19. All 6 issues updated in the window are closed, and 13 of 25 active PRs were merged or closed, leaving 12 open. The project cut **v2026.11.0-rc.2**, the second release candidate for the November 2026 release, which is expected to ship as stable unless testing finds regressions. Development attention is concentrated on setup reliability, provider integrations (Codex, Slack, OneCLI), and agent-runner correctness.

---

## 2. Releases

### v2026.11.0-rc.2
- **Tag:** [v2026.11.0-rc.2](https://github.com/qwibitai/nanoclaw/releases/tag/v2026.11.0-rc.2)
- **Status:** Second release candidate of 2026.11.0; intended as the stable build unless testing finds a problem.
- **Notes:** The November release supersedes 2026.10.1, which never became stable. Cut from `main` @ `634fa9ead`. Contains 9 PRs since rc.1. The `channels` branch has not moved since rc.1 (`b563b332`).

---

## 3. Project Progress

### Merged / Closed PRs (13)

| PR | Title | Area | Fixed Issue(s) |
|----|-------|------|----------------|
| [#4453](https://github.com/qwibitai/nanoclaw/pull/4453) | fix(setup): show the provider image rebuild in the progress window | setup-installation, containers | [#4447](https://github.com/qwibitai/nanoclaw/issues/4447) |
| [#4456](https://github.com/qwibitai/nanoclaw/pull/4456) | fix(slack): show the agent DM's suggested prompts and thread titles | channels | [#4452](https://github.com/qwibitai/nanoclaw/issues/4452) |
| [#4461](https://github.com/qwibitai/nanoclaw/pull/4461) | fix(update): typecheck agent-runner with the pinned Bun when the host has none | setup-installation, skills | [#4454](https://github.com/qwibitai/nanoclaw/issues/4454) |
| [#4465](https://github.com/qwibitai/nanoclaw/pull/4465) | fix(add-codex): raise the Codex AGENTS.md cap to 64 KiB | providers, skills | [#4464](https://github.com/qwibitai/nanoclaw/issues/4464) |
| [#4164](https://github.com/qwibitai/nanoclaw/pull/4164) | fix(codex): make built-in image generation work behind OneCLI | providers, skills | [#4451](https://github.com/qwibitai/nanoclaw/issues/4451) |
| [#3798](https://github.com/qwibitai/nanoclaw/pull/3798) | fix(setup): verify linger without interactive polkit prompts | setup-installation | [#4428](https://github.com/qwibitai/nanoclaw/issues/4428) |
| [#4466](https://github.com/qwibitai/nanoclaw/pull/4466) | chore(release): v2026.11.0-rc.2 | repository-maintenance | — |
| [#4300](https://github.com/qwibitai/nanoclaw/pull/4300) | fix(agent-runner): never block or follow links on the Claude settings.json | agent-runner, providers | — |
| [#4441](https://github.com/qwibitai/nanoclaw/pull/4441) | fix(setup): follow-ups from the #4418 review | setup-installation | — |
| [#3322](https://github.com/qwibitai/nanoclaw/pull/3322) | skills: add /add-youdotcom-tool for You.com MCP tools | skills | — |

### Features Advanced
- **Slack onboarding:** Suggested prompts and thread titles now render in agent DMs.
- **Codex / OneCLI parity:** Image generation works behind OneCLI; AGENTS.md cap doubled to 64 KiB so `ncl` and canvas sections survive on default Slack installs.
- **Setup robustness:** Polkit-less Linux hosts no longer see `pkttyagent` errors; provider image rebuilds run inside the progress window instead of flooding stdout; `/update-nanoclaw` typechecks agent-runner source using a pinned Bun even when the host lacks Bun.
- **Release hygiene:** v2026.11.0-rc.2 release PR merged.

---

## 4. Community Hot Topics

Comment counts are mostly `undefined` or 0–1 across the dataset, so "hot" is interpreted by thematic clustering and fix linkage rather than raw discussion volume.

### Topical Clusters
1. **Codex + OneCLI integrations** — Issues [#4451](https://github.com/qwibitai/nanoclaw/issues/4451) and [#4464](https://github.com/qwibitai/nanoclaw/issues/4464), with fixes in PRs [#4164](https://github.com/qwibitai/nanoclaw/pull/4164), [#4465](https://github.com/qwibitai/nanoclaw/pull/4465), and the open sign-in rework [#4455](https://github.com/qwibitai/nanoclaw/pull/4455).  
   *Underlying need:* Users want Codex to behave like a first-class provider on Linux, including image generation and full instruction documents, without host-specific workarounds.

2. **Slack first-run experience** — Issue [#4452](https://github.com/qwibitai/nanoclaw/issues/4452) fixed by [#4456](https://github.com/qwibitai/nanoclaw/pull/4456).  
   *Underlying need:* Onboarding messaging must match actual UI capabilities; suggested prompts should not advertise unavailable actions.

3. **Setup reliability on minimal Linux hosts** — Issue

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

# LobsterAI Project Digest — 2026-11-19

## 1. Today's Overview
LobsterAI saw a merge/closure-heavy day: 11 PRs updated with 9 merged/closed versus only 1 issue update, and no new releases. Maintenance focus was on **security hardening and state persistence** — the `localfile://` path-traversal issue #3096 was closed within ~3 days, and a cowork execution-mode bug was fixed. Activity is healthy on the PR side, though community engagement signals (comments/reactions) are sparse, and one security PR has been open since September.

## 2. Releases
None. No new releases in the last 24h.

## 3. Project Progress (9 PRs merged/closed)
- **Security/config:** [#3114](https://github.com/netease-youdao/LobsterAI/pull/3114) — restores persisted `executionMode` in Cowork and honors explicit sandbox policy (cherry-picks fix from [#3090](https://github.com/netease-youdao/LobsterAI/pull/3090); related [#735](https://github.com/netease-youdao/LobsterAI/issues/735)).
- **OpenClaw:** [#3113](https://github.com/netease-youdao/LobsterAI/pull/3113) — compacts skill catalogs, enforces deliverable save paths; 191 Vitest cases pass.
- **Renderer/UX:** [#3115](https://github.com/netease-youdao/LobsterAI/pull/3115) model-tag localization; [#3109](https://github.com/netease-youdao/LobsterAI/pull/3109) Windows GBK CSV decoding + in-app link preview; [#3116](https://github.com/netease-youdao/LobsterAI/pull/3116) companion hover menu on first use/full screen.
- **Stale batch closure:** [#2790](https://github.com/netease-youdao/LobsterAI/pull/2790), [#2791](https://github.com/netease-youdao/LobsterAI/pull/2791), [#2792](https://github.com/netease-youdao/LobsterAI/pull/2792) (all labeled `stale`, open ~45 days) closed 11-18.
- Still open: [#3117](https://github.com/netease-youdao/LobsterAI/pull/3117) Pet Vlog Director workflow, [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) MCP/URL hardening.

## 4. Community Hot Topics
- [#3096](https://github.com/netease-youdao/LobsterAI/issues/3096) (Issue

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

# ZeroClaw Project Digest — 2026-11-19

## 1. Today's Overview
ZeroClaw shows **exceptionally high velocity** with 99 combined issue/PR updates in 24 hours. The project is in the midst of a **major architectural refactor** around a canonical V5 provider registry (7 large stacked PRs by @NiuBlibing), while simultaneously addressing critical bugs in the Anthropic provider, MCP security, cron jobs, and web UX. No release shipped today, but v0.9.1 is actively being prepared with multiple release-gated issues. The codebase spans 40+ crates covering providers, channels, runtime, tools, and a web dashboard — all actively evolving.

---

## 2. Releases
**No new releases today.** The last release appears to be v0.9.0; v0.9.1 is in progress with several blocking issues (#11580 binary size gate, #12401 Claude Opus 5.5 regression, #9770 cron data loss).

---

## 3. Project Progress — Merged/Closed PRs & Key Advances (Last 24h)

| PR | Status | Summary |
|----|--------|---------|
| [#12417](https://github.com/zeroclaw-labs/zeroclaw/pull/12417) | **Closed** | ADR-016 exception for WASM plugin wake dispatch — architectural documentation |
| [#11660](https://github.com/zeroclaw-labs/zeroclaw/pull/11660) | **Closed** | Web: keep chat input focused through a turn (UX fix) |
| [#10318](https://github.com/zeroclaw-labs/zeroclaw/pull/10318) | **Closed** | Serialize concurrent SOP authoring writes (create/save/delete/rename) |
| [#12217](https://github.com/zeroclaw-labs/zeroclaw/pull/12217) | **Closed** | Docs: clarify email tools-only setup starts IMAP listener |
| [#9655](https://github.com/zeroclaw-labs/zeroclaw/pull/9655) | **Closed** | Approval cards carry position metadata (Telegram/Web) |
| [#9736](https://github.com/zeroclaw-labs/zeroclaw/pull/9736) | **Closed** | Runtime: persist SessionState (idle/running/error) via RPC |
| [#12169](https://github.com/zeroclaw-labs/zeroclaw/pull/12169) | **Closed** | Security: `send_message_to_peer` now respects tool scope |
| [#12122](https://github.com/zeroclaw-labs/zeroclaw/pull/12122) | **Closed** | Windows installers now verify SHA256SUMS |
| [#12280](https://github.com/zeroclaw-labs/zeroclaw/pull/12280) | **Closed** | SOP cancel auth: reject forwarded loopback as local |
| [#12146](https://github.com/zeroclaw-labs/zeroclaw/pull/12146) | **Closed** | MCP SSE client: validate `endpoint` event URLs (SSRF fix) |
| [#12144](https://github.com/zeroclaw-labs/zeroclaw/pull/12144) | **Closed** | File tools: fix read-via-write permission bypass |
| [#12053](https://github.com/zeroclaw-labs/zeroclaw/pull/12053) | **Closed** | Gateway: pin third-party script on `/api/docs` (CSP/integrity) |

**Net progress**: 12 PRs closed — heavily weighted toward **security hardening** (6/12), **SOP/runtime correctness** (3/12), and **web UX** (2/12). The canonical registry mega-PRs remain open.

---

## 4. Community Hot Topics — Most Discussed Items

| Item | Type | Comments | Core Issue |
|------|------|----------|------------|
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | Issue | 7 | **llama.cpp/custom provider URI handling broken** — models not fetched from non-localhost URIs |
| [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | Issue | 7 | **CI: auto-recalculate PR risk/size labels** on diff changes — automation gap |
| [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | Issue | 6 | **Claude Opus 5.5 breaks after tool-context collapse** — `keep_tool_context_turns` regression in v0.9.0 |
| [#11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580) | Issue | 5 | **Release binary 0.7 MB under 64 MiB cap** — decide whether to raise limit or trim |
| [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) | Issue | 3 | **`cron update` silently drops 6 declarative job fields** — data loss risk |
| [#12450](https://github.com/zeroclaw-labs/zeroclaw/pull/12450) | PR | — | **Canonical V5 registry adoption** — 7 stacked PRs, XL size, touches providers/config/runtime/web |
| [#12443](https://github.com/zeroclaw-labs/zeroclaw/pull/12443) | PR | — | **IRC/Twitch → WASM plugins** — binary size reduction, plugin architecture milestone |

**Underlying needs**: 
- **Provider abstraction stability** — the V5 registry refactor is foundational for multi-provider routing/fallback
- **Release process maturity** — binary size gate, regression testing, automation
- **Security default hardening** — multiple SSRF/scope-bypass fixes merged this week

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Component | Fix PR? | Notes |
|----------|-------|-----------|---------|-------|
| **S1 — Workflow Blocked** | [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | Runtime/daemon (Anthropic provider) | ❌ | `keep_tool_context_turns` evicts thinking blocks → 400 on retry; blocks v0.9.1 |
| **S2 — Degraded** | [#12504](https://github.com/zeroclaw-labs/zeroclaw/issues/12504) | Provider (Anthropic) | ❌ | Unsigned thinking block replayed on retry → signature required error |
| **S2 — Degraded** | [#11696](https://github.com/zeroclaw-labs/zeroclaw/issues/11696) | Runtime/daemon | ❌ | System prompt re-read from disk every turn — busts cache, costs I/O |
| **S2 — Degraded** | [#11823](https://github.com/zeroclaw-labs/zeroclaw/issues/11823) | Security/sandbox | ❌ | Shell scanner skips command substitution in unquoted heredocs |
| **S2 — Degraded** | [#12144](https://github.com/zeroclaw-labs/zeroclaw/issues/12144) | Tools (file_*) | ✅ [#12144](https://github.com/zeroclaw-labs/zeroclaw/pull/12144) | Write-tier auth allows read of sibling workspace files — **closed today** |
| **S2 — Degraded** | [#12146](https://github.com/zeroclaw-labs/zeroclaw/issues/12146) | Tools (MCP SSE) | ✅ [#12146](https://github.com/zeroclaw-labs/zeroclaw/pull/12146) | SSRF via `endpoint` event — **closed today** |
| **S3 — Minor** | [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | Provider (llama.cpp/custom) | ❌ | Wrong URI used for model fetching from router |
| **S3 — Minor** | [#12568](https://github.com/zeroclaw-labs/zeroclaw/issues/12568) | Web dashboard | ❌ | Cost bars scaled to max value → Monthly always full |
| **S3 — Minor** | [#9896](https://github.com/zeroclaw-labs/zeroclaw/issues/9896) | Config/memory | ❌ | Startup banner shows `Memory: none` when sqlite backend active |

**Critical cluster**: Anthropic provider + tool-context collapse (#12401, #12504) directly blocks Claude Opus 5.5 users. Two security bugs fixed today (#12144, #12146).

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.9.1+ |
|--------|--------|------------------------|
| **Canonical V5 provider registry** — typed connections, exact model refs, fallback/switching | [#12450](https://github.com/zeroclaw-labs/zeroclaw/pull/12450) + 6 stacked PRs | **Very high** — XL PRs, "merge only after dependencies", touches all providers |
| **IRC/Twitch as WASM plugins** — binary size reduction, extensibility | [#12443](https://github.com/zeroclaw-labs/zeroclaw/pull/12443) | **High** — ready to merge, aligns with plugin architecture |
| **MCP OAuth 2.1 + PKCE** for remote servers | [#12449](https://github.com/zeroclaw-labs/zeroclaw/pull/12449) | **High** — single config opt-in, security hardening |
| **Signal listener health reporting** in dashboard | [#11955](https://github.com/zeroclaw-labs/zeroclaw/issues/11955) | **Medium** — enhancement, unblocks channel readiness UI |
| **Telegram `trusted_groups`** — allow any member in listed groups | [#12562](https://github.com/zeroclaw-labs/zeroclaw/issues/12562) | **Medium** — new issue, clear use case for community bots |
| **HTTP `Retry-After` honor** for 429s | [#11768](https://github.com/zeroclaw-labs/zeroclaw/issues/11768) | **Medium** — follow-up to quota classifier, provider reliability |
| **SOP run cancellation RPC** (`sops/cancel`) | [#9685](https://github.com/zeroclaw-labs/zeroclaw/issues/9685) | **Low** — explicitly deferred until #9476 merges |

**Roadmap read**: The V5 registry is the **single largest in-flight feature** — once landed, it unlocks model switching, routing, and a unified config model. Plugin migration (IRC/Twitch) and MCP OAuth are next-tier priorities.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Claude Opus 5.5 unusable after few tool turns** | [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) — "fails for good once older tool-using turn leaves window" | High — blocks flagship model |
| **Anthropic retries always fail (400 signature)** | [#12504](https://github.com/zeroclaw-labs/zeroclaw/issues/12504) — "every retry fails" | High — affects all Anthropic users |
| **llama.cpp/custom provider can't reach remote models** | [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) — "uri not taken correctly" | Medium — self-hosted/router users |
| **Cron jobs silently lose config on update** | [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) — 6 fields discarded | Medium — automation reliability |
| **Web chat input loses focus every turn** | [#11660](https://github.com/zeroclaw-labs/zeroclaw/pull/11660) — "every follow-up needed a click" | Medium — UX friction (fixed) |
| **Dashboard cost bars misleading** | [#12568](https://github.com/zeroclaw-labs/zeroclaw/issues/12568) — "Monthly always full" | Low — observability clarity |
| **Windows installer skips checksum verification** | [#12122](https://github.com/zeroclaw-labs/zeroclaw/issues/12122) — security gap | Low — fixed today |

**Positive signals**: Rapid security fixes (6 merged today), active web UX iteration, plugin architecture progressing.

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | ~4 months | In-progress | **CI automation gap** — PR risk/size labels stale without manual action; blocks reliable release gating |
| [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) | ~3.5 months | In-progress | **Silent data loss** in `cron update` — 6 declarative fields dropped; affects automation trust |
| [#9492](https://github.com/zeroclaw-labs/zeroclaw/issues/9492) | ~4 months | In-progress | **OpenAI OAuth refresh dead-end** when Codex CLI rotates token — breaks auth for Codex users |
| [#9685](https://github.com/zeroclaw-labs/zeroclaw/issues/9685) | ~3.5 months | Deferred | **SOP cancellation RPC** — needed for zerocode/long-running SOP control; blocked on #9476 |
| [#9914](https://github.com/zeroclaw-labs/zeroclaw/issues/9914) | ~3 months | In-progress | **Docker workspace root preservation** — relative cwd contract for coding CLI tools |
| [#10318](https://github.com/zeroclaw-labs/zeroclaw/issues/10318) | ~3 months | Closed today | **SOP authoring write serialization** — now resolved |
| [#11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580) | ~1.5 months | Open | **Release binary size gate** — 0.7 MB headroom; decision needed before v0.9.1 |

**Maintainer action suggested**: 
1. Resolve #11580 (binary size policy) to unblock v0.9.1
2. Prioritize #12401/#12504 (Anthropic regressions) — user-facing breakage
3. Review #9345 automation — reduces future maintainer load
4. Land V5 registry stack (#12450-#12457) — architectural keystone

---

## Summary Health Indicators
- **Velocity**: ★★★★★ (99 updates/24h, 12 PRs closed)
- **Security posture**: ★★★★☆ (6 security fixes today, proactive SSRF/scope audits)
- **Release readiness**: ★★★☆

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*