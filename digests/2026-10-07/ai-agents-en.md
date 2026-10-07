# OpenClaw Ecosystem Digest 2026-10-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-07 03:22 UTC

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

# OpenClaw Project Digest — 2026-10-07

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours. The project is in a **stability crisis** — no new releases since the 2026.9.x series, but a flood of P0/P1 regressions around memory leaks, gateway startup hangs, update failures, and message loss. Of 409 open issues, the top items are dominated by **diamond lobster (🦞)** and **gold shrimp (🦐)** severity ratings, indicating data-loss and release-blocking bugs. The 131 merged/closed PRs suggest maintainers are triaging aggressively, but the backlog of 369 open PRs (many XL-sized refactors) signals architectural churn. Overall health: **critical — multiple production-blocking regressions without a stabilizing release**.

---

## 2. Releases

**No new releases today.** The latest version appears to be 2026.9.8 (referenced in #165686), with 2026.9.5–2026.9.6 being the most-reported problematic versions. Users are stuck on 2026.9.4–2026.9.5 due to update failures (#154114, #153094, #154924, #155243).

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary |
|----|------|---------|
| [#166335](https://github.com/openclaw/openclaw/pull/166335) | Doctor/Update | Fix cleanup when foreign process cwd unreadable |
| [#163573](https://github.com/openclaw/openclaw/pull/163573) | Gateway/Perf | Faster long-reply preparation at ASCII boundaries |
| [#154114](https://github.com/openclaw/openclaw/issues/154114) | Update | Closed: candidate rehearsal failure (not repro on main) |
| [#166360](https://github.com/openclaw/openclaw/pull/166360) | Tests | Fix E2E fixture missing prompt-context capability |

**Key trend**: Most closed items are small fixes (XS/S) or issues marked "not repro on main." Large refactors (#161057, #164265, #166293) remain open awaiting maintainer review.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Severity | Core Problem |
|------|----------|----------|--------------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 31 | 🦞 Diamond Lobster | **Subagent completion silently lost** — no retry, notification, or auto-restart on timeout |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | 24 | 🦐 Gold Shrimp | **Gateway ready but never serves** — event loop starved, /health times out, RSS climbs to OOM (632-agent fleet) |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 20 | 🦪 Silver Shellfish | **Unbounded memory leak** in `prepared-model-catalog.worker.js` — ~4-5 GB/h, provider-agnostic |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 18 | 🦪 Silver Shellfish | **Unreaped child processes** accumulate as zombies (`openclaw-hooks`, `bash`, `codex`) |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | 17 | 🦪 Silver Shellfish | **Gateway startup hangs 17 min** at `sidecars.model-runtime`, then times out publishing prepared model runtime |

**Underlying needs**: Users need **reliability over features** — message loss, memory leaks, and startup failures make production deployments untenable. The "diamond lobster" issues (#44925, #157126, #150132, #154834, #159912, #166360) all involve **silent data loss or state corruption** without crashes, which erodes trust most severely.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 P0 / Release Blockers (Crash Loops, Data Loss, Update Failures)

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | 🦐 Gold Shrimp | Open | No |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | 🦪 Silver Shellfish | Open | No |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) | 🦪 Silver Shellfish | Open | No |
| [#154572](https://github.com/openclaw/openclaw/issues/154572) | 🦪 Silver Shellfish | Open | No |
| [#160386](https://github.com/openclaw/openclaw/issues/160386) | 🦪 Silver Shellfish | Open | No |
| [#148307](https://github.com/openclaw/openclaw/issues/148307) | 🦐 Gold Shrimp | Open | No |
| [#153094](https://github.com/openclaw/openclaw/issues/153094) | 🦐 Gold Shrimp | Open | No |
| [#154924](https://github.com/openclaw/openclaw/issues/154924) | 🦐 Gold Shrimp | Open | No |
| [#155243](https://github.com/openclaw/openclaw/issues/155243) | 🦪 Silver Shellfish | Open | No |
| [#155191](https://github.com/openclaw/openclaw/issues/155191) | 🦐 Gold Shrimp | Open | No |
| [#165686](https://github.com/openclaw/openclaw/issues/165686) | 🦪 Silver Shellfish | Open | No |

### 🟠 P1 / Data Loss & Silent Corruption

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 🦞 Diamond Lobster | Open | No |
| [#157126](https://github.com/openclaw/openclaw/issues/157126) | 🦞 Diamond Lobster | **Closed** | Linked PR open |
| [#127229](https://github.com/openclaw/openclaw/issues/127229) | 🦞 Diamond Lobster | Open | No |
| [#150132](https://github.com/openclaw/openclaw/issues/150132) | 🦞 Diamond Lobster | **Closed** | Linked PR open |
| [#154834](https://github.com/openclaw/openclaw/issues/154834) | 🦞 Diamond Lobster | Open | Linked PR open |
| [#159912](https://github.com/openclaw/openclaw/issues/159912) | 🦞 Diamond Lobster | Open | No |
| [#155374](https://github.com/openclaw/openclaw/issues/155374) | 🦞 Diamond Lobster | Open | No |
| [#154180](https://github.com/openclaw/openclaw/issues/154180) | 🦞 Diamond Lobster | Open | Linked PR open |

### 🟡 P2 / Performance & UX Regressions

| Issue | Severity | Status |
|-------|----------|--------|
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 🐚 Platinum Hermit | Open (SSD wear: 1.1–1.4 GB/CLI cmd) |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | 🦪 Silver Shellfish | Open (startup scales with plugin count) |
| [#160485](https://github.com/openclaw/openclaw/issues/160485) | 🦪 Silver Shellfish | Open (plugin load CPU-bound, 57s for 3 channel plugins) |
| [#154104](https://github.com/openclaw/openclaw/issues/154104) | 🐚 Platinum Hermit | Open (50% CPU idle with Matrix E2EE) |
| [#153899](https://github.com/openclaw/openclaw/issues/153899) | 🐚 Platinum Hermit | Open (gateway drain waits full TimeoutStopSec) |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Type | Signals |
|-------|------|---------|
| [#161057](https://github.com/openclaw/openclaw/pull/161057) | **Refactor** | Skill Workshop → direct self-learning loop (XL, needs maintainer look) |
| [#164265](https://github.com/openclaw/openclaw/pull/164265) | **Refactor** | Retire heartbeat into ordinary jobs (XL, accepted-large, needs proof) |
| [#166293](https://github.com/openclaw/openclaw/pull/166293) | **Refactor** | Move transcript reads to retained history owner (XL) |
| [#162164](https://github.com/openclaw/openclaw/issues/162164) | **Feature** | Opt-in personal identity on iOS/macOS (off-meta) |
| [#56349](https://github.com/openclaw/openclaw/issues/56349) | **Feature** | Unbypassable outbound policy enforcement (platinum hermit, old) |
| [#23451](https://github.com/openclaw/openclaw/issues/23451) | **Feature** | Tool-level confirmation gate before execution (platinum hermit) |
| [#70266](https://github.com/openclaw/openclaw/issues/70266) | **Feature** | Assistant avatar in macOS Talk Mode overlay (off-meta) |

**Prediction**: Next version will likely be a **stabilization release (2026.9.9 or 2026.10.x)** rather than feature release. The XL refactors (#161057, #164265, #166293) are "ready for maintainer look" but carry compatibility/security risks — they'll land only after P0 fires are contained.

---

## 7. User Feedback Summary

### Pain Points (from issue descriptions)
- **"Cannot upgrade"** — Update pipeline broken across Windows/macOS/Linux (#154114, #153094, #154924, #155243, #156986)
- **"Gateway doesn't serve"** — Ready but /health times out, event loop starved (#149538, #165686)
- **"Memory grows until OOM"** — Multiple leaks: catalog worker (#159662), native RSS (#155191), plugin capture (#157989)
- **"Messages silently lost"** — Subagent completions (#44925), Telegram callbacks (#126950), hot-reload drops streams (#152965)
- **"Startup takes minutes"** — 17 min hang (#152981), 57s plugin load (#160485), 120s publication budget exceeded (#155859)
- **"Zombie processes accumulate"** — Unreaped children from hooks/tools (#97616)
- **"Database locked"** — Session reclamation exceeds 5s busy timeout (#148307)

### Use Cases Revealed
- Large fleets (632 agents in #149538)
- Multi-platform: Windows, macOS, Linux, QNAP NAS (ZFS), WSL2
- Multi-channel: Telegram, Discord, WhatsApp, Matrix, Lark, Weixin, Slack, Teams, Nextcloud Talk
- Heavy plugin usage: 23+ plugins, Codex, Claude CLI, OpenRouter, Minimax, Anthropic, OpenAI
- Session-heavy workloads: 464 MB DB, 33 sessions, long-running agents

### Sentiment
**High frustration** — users report "worked before, now fails" regressions in 2026.9.5+. Multiple "beta release blocker: No" but "impact:ux-release-blocker" tags show these are de facto release blockers. The `clawsweeper:needs-maintainer-review` tag on 30+ top issues indicates maintainer bandwidth is the bottleneck.

---

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer)

| Item | Age | Tags | Why It Matters |
|------|-----|------|----------------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 7 months | 🦞, clawsweeper:needs-maintainer-review, clawsweeper:needs-product-decision | **Silent subagent result loss** — foundational reliability |
| [#56349](https://github.com/openclaw/openclaw/issues/56349) | 6 months | 🐚, needs-security-review, needs-product-decision | **Outbound policy enforcement** — security boundary |
| [#23451](https://github.com/openclaw/openclaw/issues/23451) | 8 months | 🐚, needs-security-review, needs-product-decision | **Tool confirmation gate** — safety/UX |
| [#47002](https://github.com/openclaw/openclaw/issues/47002) | 7 months | 🦞, clawsweeper:linked-pr-open | **Config validator rejects valid `mediaLocalRoots`** — Telegram media broken |
| [#127229](https://github.com/openclaw/openclaw/issues/127229) | 1.5 months | 🦞, clawsweeper:bulk-filed | **Telegram durable updates falsely tombstoned** — message loss |
| [#161057](https://github.com/openclaw/openclaw/pull/161057) | 8 days | XL, 🦞, security-sensitive, needs maintainer look | **Skill Workshop rewrite** — major feature, high risk |
| [#164265](https://github.com/openclaw/openclaw/pull/164265) | 4 days | XL, accepted-large, needs proof | **Automations heartbeat retirement** — cross-cutting refactor |
| [#147244](https://github.com/openclaw/openclaw/pull/147244) | 24 days | XL, needs proof | **iOS Cloudflare Access** — mobile connectivity |
| [#102379](https://github.com/openclaw/openclaw/pull/102379) | 3 months | XL, maintainer, needs proof | **MS Teams mention normalization** — enterprise channel |
| [#117074](https://github.com/openclaw/openclaw/pull/117074) | 2 months | XL, stale, blank-template | **Cron history placeholder reclamation** — DB hygiene |

---

## Summary Metrics

| Metric | Value |
|--------|-------|
| Open Issues (active) | 409 |
| Issues Updated (24h) | 500 |
| Open PRs | 369 |
| PRs Merged/Closed (24h) | 131 |
| P0/P1 Issues in

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent & Personal Assistant Ecosystem (2026-10-07)

## 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape is highly active but fragmented, with at least 10 distinct projects competing on integration breadth, runtime architecture, and reliability. The community has rapidly shifted from feature-first development to stability hardening — memory leaks, silent data loss, gateway failures, and sandbox misconfigurations dominate discussion. Multi-platform support (Windows, macOS, Linux, NAS, WSL2) and multi-channel IM integration (Telegram, Discord, Slack, Matrix, WeChat, Lark) are table stakes. Rust/WASM migration, provider abstraction layers, and fleet-scale deployment are the next frontier.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Open Issues | Open PRs | Releases | Health |
|---------|---------------------|-------------------|-------------|----------|----------|--------|
| OpenClaw | 500 | 500 | 409 | 369 | None (stuck on 2026.9.x) | 🔴 Critical |
| ZeroClaw | 40 | 50 | 33 | 46 | None (pre-v0.9.0) | 🟢 Active/Healthy |
| NanoBot | 5 (issues) | 10 (PRs) | — | — | None (0.3.5 referenced) | 🟢 Green |
| NanoClaw | — | 16 (5 merged) | 3 | 11 | None (v2026.10.0-rc.2) | 🟢 Active |
| NullClaw | 0 | 14 (4 merged) | — | 10 | None (pre-1.0) | 🟡 Stable |
| LobsterAI | 50 closed | 6 merged/closed | — | 3 | None | 🟡 Stabilization |
| PicoClaw | — | 70 closed (stale) | — | — | None | 🟠 Fork-maintained |
| CoPaw | 1 | 2 | — | 2 | None | 🟡 Low activity |
| Hermes Agent | — | — | — | — | — | ⚪ No data |
| IronClaw / TinyClaw / Moltis / ZeptoClaw | 0 | 0 | — | — | None | 🔴 Inactive |

## 3. OpenClaw's Position

**Advantages vs peers:**
- **Largest active community** — 500 issues + 500 PRs updated in 24h dwarfs all peers combined.
- **Broadest channel support** — Telegram, Discord, WhatsApp, Matrix, Lark, Weixin, Slack, Teams, Nextcloud Talk.
- **Deep plugin ecosystem** — 23+ plugins, Codex/Claude CLI/OpenRouter/Minimax/Anthropic/OpenAI providers.
- **Fleet-scale proven** — 632-agent deployment cited in production issues.

**Technical approach:** Node.js/JavaScript runtime with gateway + sidecar architecture, multi-agent orchestration, ASCII-boundary optimization for long replies. Contrasts with NullClaw (Zig, systems-level memory safety), ZeroClaw (Rust, WASM migration), PicoClaw (Go, agent collaboration bus), and NanoBot (Python/Node, lightweight bot framework).

**Community size:** By far the largest, but also the most strained — maintainer bandwidth is the bottleneck (`clawsweeper:needs-maintainer-review` on 30+ top issues).

## 4. Shared Technical Focus Areas

| Area | Projects | Specific Needs |
|------|----------|----------------|
| Memory stability / leak fixes | OpenClaw (#159662), ZeroClaw, NullClaw | Bounded buffers, GC controls, RSS caps |
| Gateway & startup reliability | OpenClaw (#149538, #152981), ZeroClaw | Event loop starvation, health check timeouts |
| Sandbox / security isolation | ZeroClaw (firejail/bubblewrap), NullClaw (#1012 A2A scoping), OpenClaw (#56349) | Path traversal, secret ACLs, bearer principal scoping |
| Multi-channel IM integration | OpenClaw, NanoClaw, NanoBot, PicoClaw | DingTalk sender names, Matrix thread metadata, Telegram durable updates |
| Custom provider support | CoPaw (#6823), ZeroClaw (#11583 Opper), LobsterAI | Capability inference, OpenAI-compatible endpoints |
| Streaming & tool execution | NullClaw (#971), OpenClaw | Native tool calls during SSE, prompt-injection avoidance |
| Fleet / multi-agent orchestration | OpenClaw, PicoClaw (#2937), ZeroClaw | Agent collaboration bus, session management, concurrency bounds |

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architecture |
|---------|--------------|--------------|-------------|
| **OpenClaw** | Full-featured multi-channel agent platform | Large fleets, enterprise multi-tenant | Node.js gateway + sidecars |
| **NanoBot** | Lightweight Telegram/chat bot with WebUI | Solo users, small teams | Python/Node, cron + session checkpoints |
| **PicoClaw** | Agent collaboration, MCP transport | Developers wanting Go-based agent toolkit | Go, fork-maintained |
| **NanoClaw** | Cross-platform setup robustness | macOS/Windows/Linux deployers | Node.js, setup/wiring focus |
| **NullClaw** | Systems-level safety, A2A auth | Security-conscious, multi-tenant deployments | Zig, pre-1.0 |
| **ZeroClaw** | Sandbox isolation, WASM web UI | Security-first, cloud-native deployments | Rust, WASM migration |
| **CoPaw** | Reasoning control, provider templates | Qwen model users, custom endpoint deployers | Python/Node, Qwen-focused |
| **LobsterAI** | OpenClaw integration layer | Chinese ecosystem users | OpenClaw plugin-based |

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly iterating, high volume:**
- OpenClaw (critical but highest throughput — 131 PRs merged/closed in 24h)
- ZeroClaw (healthy PR-to-issue ratio 1.25:1, pre-release stabilization)

**Tier 2 — Active maintenance, steady cadence:**
- NanoBot (rapid bug-response cycles, green health)
- NanoClaw (setup robustness focus, cross-platform)
- NullClaw (disciplined refactor splits, pre-1.0 maturing)
- LobsterAI (stale-bot cleanup, OpenClaw integration)

**Tier 3 — Low activity / maintenance mode:**
- CoPaw (small but focused, refinement phase)
- PicoClaw (effectively upstream-abandoned, fork carries development)

**Tier 4 — Inactive / no data:**
- IronClaw, TinyClaw, Moltis, ZeptoClaw, Hermes Agent

## 7. Trend Signals

1. **Reliability over features** — Every project with active issues cites memory leaks, data loss, or startup failures. Users reject "beta release blocker: No" labels when impact is "ux-release-blocker."

2. **Security hardening is table stakes** — Path traversal (#543), secret file ACLs (#11451), A2A bearer scoping (#1012), sandbox isolation (ZeroClaw firejail cluster). Not a differentiator anymore — a baseline requirement.

3. **WASM/Rust migration gaining traction** — ZeroClaw's WASM web UI prototype (#8132, 11 comments) signals community appetite for eliminating Node.js dependencies. NullClaw's Zig base positions it similarly.

4. **Provider abstraction is commoditizing** — Custom OpenAI-compatible provider support (ZeroClaw's Opper integration, CoPaw's capability templates, LobsterAI's OpenClaw plugin) reduces vendor lock-in but increases configuration surface area.

5. **Fleet-scale management is emerging** — OpenClaw's 632-agent deployment and ZeroClaw's configurable concurrency bounds (#11558) indicate the market is moving beyond single-user bots to multi-agent orchestration.

6. **Platform fragmentation is a silent churn driver** — macOS/Windows/Linux/QNAP NAS/WSL2/CI-CD (worktree `GIT_DIR` issues in NullClaw, MacPorts in NanoClaw, Cygwin in LobsterAI) create persistent support burden.

**Value for AI agent developers:** The ecosystem is ripe for abstraction layers that address cross-cutting concerns — memory management, sandbox security, provider agnosticism, and fleet orchestration. Projects that solve these generically (rather than per-IM-channel) will capture the community's attention as stability crises deepen.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest
**Date:** 2026-10-07  
**Source:** github.com/HKUDS/nanobot  
**Reporting Period:** Last 24 Hours

## 1. Today's Overview
NanoBot demonstrated high development velocity today, with **15 total artifacts** updated in the last 24 hours: 10 Pull Requests and 5 Issues. Despite **zero new releases**, the maintainers actively closed 3 PRs and 1 Issue, indicating steady throughput on the backlog. Development focus shifted toward **stability and diagnostics**, with immediate fixes for a critical provider deserialization crash and enhancements to WebUI debugging visibility. Core infrastructure (cron scheduling, session checkpoints) is also being hardened against race conditions and data loss. Overall project health remains **green**, characterized by rapid bug-response cycles and clear prioritization of p2 stability fixes.

[View Repository](https://github.com/HKUDS/nanobot)

## 2. Releases
**None.** No new releases were published today.
*   **Context:** Users reporting issues today reference `nanobot-ai 0.3.5` for the WebUI ([#6088](https://github.com/HKUDS/nanobot/issues/6088)).
*   **Note:** Several closed fixes today (#6080, #6057, #6086) suggest a patch release may be imminent to bundle WebUI diagnostics and the web_search provider fix.

## 3. Project Progress (Merged/Closed PRs)
Three PRs were completed today, focusing on usability, debugging, and legacy channel fixes:
*   **#6057 [CLOSED] feat(webui): Choose the chat for scheduled tasks** — Advanced automation flexibility by allowing users to specify the target chat for scheduled runs, separating execution context from reply routing.
*   **#6080 [CLOSED] feat(webui): Show commit and prefill bug report diagnostics** — Improved support workflows by displaying the connected gateway's short commit hash in the About settings and auto-filling environment details into issue reports.
*   **#1420 [CLOSED] Fix: Add sender name context to DingTalk messages** — Cleared a long-standing legacy backlog item, resolving an issue where the agent received only `staffId` instead of the sender's display name.

## 4. Community Hot Topics
*   **Silent Background Maintenance (#6029)** — *2 Comments (Most Discussed)*
    *   **Link:** https://github.com/HKUDS/nanobot/issues/6029
    *   **Need:** Users are requesting the ability to suppress "Compressing context…" broadcasts during idle/dream cycles. This indicates a growing user base running bots in shared channels who find background noise intrusive.
*   **Deepseek WebSearch Crash (#6085 / #6086)** — *Critical Sync*
    *   **Link:** https://github.com/HKUDS/nanobot/issues/6085 | https://github.com/HKUDS/nanobot/pull/6086
    *   **Need:** A mismatch between hosted `web_search` tools and Chat Completions endpoints rendered LLM calls unusable. The community reported the crash, and a fix PR was opened within 24 hours, highlighting an effective user-developer feedback loop.
*   **Matrix Reply Persistence (#5274)** — *Closed after 2 Months*
    *   **Link:** https://github.com/HKUDS/nanobot/issues/5274
    *   **Need:** Users want the bot to respect Matrix thread metadata when replying outside threading features. This item is closed today, signaling resolved long-tail integration gaps.

## 5. Bugs & Stability
Ranked by severity based on impact to functionality and data integrity:

| Severity | Item | Summary | Fix Status |
| :--- | :--- | :--- | :--- |
| 🔴 **Critical** | [#6085](https://github.com/HKUDS/nanobot/issues/6085) | Deepseek `web_search` tool breaks all LLM calls via JSON deserialization errors. | ✅ **Fix PR #6086** exists (filters extra_body tools). |
| 🟠 **High** | [#6082](https://github.com/HKUDS/nanobot/pull/6082) | Runtime checkpoints drop completed tool iterations after interruption, losing work evidence. | 🔵 **Open PR #6082** (Data integrity risk). |
| 🟠 **Medium** | [#6084](https://github.com/HKUDS/nanobot/issues/6084) | Slack Socket Mode posts duplicate "Compressing context"/"Context compacted" messages. | ⚪ Pending. |
| 🟢 **Low** | [#6088](https://github.com/HKUDS/nanobot/issues/6088) | Dark mode `Delete` buttons have insufficient color contrast (accessibility). | ⚪ Pending. |
| 🟠 **Medium** | [#6071](https://github.com/HKUDS/nanobot/pull/6071) | Cron schedules edited during execution are consumed by stale callbacks (race condition). | 🔵 **Open PR #6071** (In review). |

## 6. Feature Requests & Roadmap Signals
*   **#6032 (Open): Configurable local trusted extension surface** — WebUI extensions loaded from local dirs. *Likelihood: High for next minor; signals a roadmap toward plugin

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-10-07

## 1. Today's Overview

PicoClaw remains in a **fork-maintained state** with the upstream repository (`sipeed/picoclaw`) showing no maintainer activity, while the community fork (`afjcjsbx/picoclaw`) continues to drive all substantive development. Today saw **70 closed/merged PRs** — but all appear to be stale updates rather than fresh merges, indicating a lull in active development. No new releases were published. The project's technical debt is being systematically addressed through the fork, though the fragmentation between upstream and the active fork remains the central community concern.

## 2. Releases

**No new releases today.** The last known activity on the releases page predates this digest window. Users seeking the latest stable build should refer to the [afjcjsbx/picoclaw fork](https://github.com/afjcjsbx/picoclaw).

## 3. Project Progress

All 70 PR updates today were **closed/merged items**, though most carry `[stale]` tags suggesting they were bulk-processed rather than actively merged today. Notable merged PRs from the fork include:

| PR | Summary |
|---|---|
| [#3418](https://github.com/sipeed/picoclaw/pull/3418) | CI: enforce shared DevOps gates and branch protection rules |
| [#3248](https://github.com/sipeed/picoclaw/pull/3248) | Bump Go to 1.25.12 to remediate stdlib vulnerabilities |
| [#3116](https://github.com/sipeed/picoclaw/pull/3116) | Complete `turn.done` lifecycle signaling for Pico protocol |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | Agent Collaboration Bus with mailboxes and structured envelopes |
| [#2811](https://github.com/sipeed/picoclaw/pull/2811) | Docker-backed integration testing framework + MCP streamable HTTP |
| [#2762](https://github.com/sipeed/picoclaw/pull/2762) | `/stop` command for hard-aborting active agent turns |
| [#2681](https://github.com/sipeed/picoclaw/pull/2681) | Sanitize MCP tool schemas for Gemini function calling |

The fork is steadily closing gaps in **security patching, agent lifecycle, MCP transport, and multi-agent collaboration**.

## 4. Community Hot Topics

### 🔥 Issue #440 — Replace hard iteration limit with context-window bounding
- **Author:** drpedapati | **Comments:** 8 | **👍:** 0
- **Link:** [sipeed/picoclaw#440](https://github.com/sipeed/picoclaw/issues/440)
- **Analysis:** The most-commented open issue. Users report the `max_tool_iterations: 20` hard cap causes legitimate complex workflows to fail prematurely with "I've completed processing but have no response to give." This is a **fundamental agent-loop design complaint** — users need adaptive iteration limits tied to context budget rather than a fixed number.

### 🔥 Issue #3407 — Web UI: ghost session disappearance during thinking
- **Author:** racso2609 | **Comments:** 2 | **👍:** 0
- **Link:** [sipeed/picoclaw#3407](https://github.com/sipeed/picoclaw/issues/3407)
- **Analysis:** Sessions silently vanish from the dropdown while the model is still generating, leaving users unable to return to an active chat. Paired with #3406, this indicates the Web UI session management has **real-time synchronization gaps** that frustrate day-to-day usage.

### 🔥 Issue #3398 & #3417 — Active Fork Announcements
- **Author:** afjcjsbx | **Comments:** 1–0 | **👍:** 0
- **Links:** [sipeed/picoclaw#3398](https://github.com/sipeed/picoclaw/issues/3398), [sipeed/picoclaw#3417](https://github.com/sipeed/picoclaw/issues/3417)
- **Analysis:** The fork maintainer publicly declared continued maintenance of `afjcjsbx/picoclaw`. These notices serve as **community signals** that the upstream is effectively archived and the fork is the de facto continuation path.

## 5. Bugs & Stability

| Issue | Severity | Fix Status |
|---|---|---|
| **#3407** — Ghost session in Web UI during model thinking | **High** (data loss / UX blocker) | No fix PR identified |
| **#440** — Hard iteration limit truncates complex tasks | **Medium** (functional limitation) | No fix PR identified |
| **#3406** — Missing working indicator & session archiving in Web UI | **Medium** (UX friction) | No fix PR identified |

**Note:** The fork has addressed several stability issues via merged PRs (LLM retry on empty responses [#2983](https://github.com/sipeed/picoclaw/pull/2983), transient HTTP error retry [#2768](https://github.com/sipeed/picoclaw/pull/2768), cron duplicate responses [#2689](https://github.com/sipeed/picoclaw/pull/2689), MCP flag parsing [#3048](https://github.com/sipeed/picoclaw/pull/3048)), but the Web UI session management bugs remain **unaddressed**.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood of Next Release |
|---|---|---|
| **Adaptive iteration limits** (context-window bounding) | Issue #440 | **High** — directly addresses agent loop design |
| **Web UI session persistence & archiving** | Issue #3406 | **Medium-High** — the Web UI is becoming the primary interface |
| **Richer session list with working indicator** | Issue #3406 | **Medium** — depends on backend event plumbing |
| **Multi-agent discovery & registry injection** | PR #2158 (merged) | **Already landed** — Layer 1 discovery is in |
| **Agent Collaboration Bus** | PR #2937 (merged) | **Already landed** — inter-agent mailboxes shipped |

The clearest roadmap signal is the fork's emphasis on **Web UI maturity** and **agent loop robustness** — both are blocking real-world usage.

## 7. User Feedback Summary

**Pain points:**
- The **Web UI is the primary day-to-day interface** but has critical real-time bugs (session disappearance, unclear thinking state).
- The **hard 20-iteration limit** is too restrictive for complex multi-step tasks — users report silent failures.
- The **upstream repo appears unmaintained**, creating uncertainty about long-term support and forcing users toward the fork.

**Use cases driving demand:**
- Complex agentic workflows requiring many tool calls (driving #440).
- Multi-session chat management in the Web UI (driving #3406, #3407).
- Long-running cron jobs and inter-agent task delegation (driven by merged PRs).

**Sentiment:** Users are pragmatic — they've gravitated toward the fork as the functional continuation, but the fragmentation itself is a source of frustration.

## 8. Backlog Watch

| Item | Age | Why It Matters |
|---|---|---|
| **#440** — Iteration limit redesign | Since 2026-02-18 (~8 months) | Core agent loop limitation; 8 comments indicate sustained community interest |
| **#3407** — Ghost session bug | Since 2026-09-29 (~8 days) | Active bug causing data loss in the primary UI; no maintainer response |
| **#3406** — Web UI feature suite | Since 2026-09-29 (~8 days) | Comprehensive UX improvement request; single comment, no engagement |
| **Upstream maintenance status** | Ongoing | The fork's existence (#3398, #3417) signals the upstream is effectively abandoned; this needs formal acknowledgment |

**Recommendation:** The most urgent unaddressed item is **#3407 (ghost session bug)** — it causes active data loss in the primary user interface and has gone without response for over a week. Issue **#440** has the deepest community engagement and represents the highest-impact design change for the agent loop.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



Here is the structured project digest for NanoClaw (`nanocoai/nanoclaw`) as of **October 7, 2026**.

---

### 1. Today's Overview
On October 7, 2026, NanoClaw exhibits high development velocity, characterized by significant activity across 16 pull requests (11 open, 5 merged/closed) and 3 open issues. While no new software releases were published today, the project is heavily focused on hardening delivery routing, resolving platform-specific setup blockers (macOS and Windows), and improving agent observability regarding outbound message failures. Overall project health is active and responsive, with core maintainers actively triaging and merging critical stability fixes.

---

### 2. Releases
*   **New Releases Today:** None.
*   *Note:* The development cycle remains focused on integrating fixes targeting the upcoming release cycle, with baseline versions such as `v2026.10.0-rc.2` referenced in current issue tracking.

---

### 3. Project Progress
Five pull requests were merged or closed today, advancing key features and setup robustness:
*   **New Group Thread Engagement (`#4048` - Closed):** Added a new wiring engage mode for group channels, allowing the agent to respond to every new top-level thread without requiring an explicit mention. [(Link)](https://github.com/nanocoai/nanoclaw/pull/4048)
*   **MacPorts Setup Support (`#2238` - Closed):** Expanded setup flexibility on macOS by supporting MacPorts alongside Homebrew for installing Node and signal-cli. [(Link)](https://github.com/nanocoai/nanoclaw/pull/2238)
*   **Setup Upgrade Marker Fix (`#4051` - Closed):** Prevented setup stalls and "update did not go through the supported path" errors by carrying the upgrade marker across local commits when channels are added during setup. [(Link)](https://

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-10-07
**Project:** NullClaw (github.com/nullclaw/nullclaw) – AI agent & personal assistant toolkit, systems-level implementation in Zig.

## 1. Today's Overview
NullClaw saw steady PR activity with 14 updates in the last 24 hours (10 open, 4 merged/closed) and zero new issues or releases. The closed PRs continue the deliberate split of #987, addressing critical boundary, concurrency, and gating defects in the `local_loop` subsystem. No new user-reported bugs or crashes arrived in the issue tracker, indicating a stable baseline. Ongoing work spans agent loop hygiene, memory controls, tool streaming, and documentation hygiene, reflecting a maturing codebase shifting from foundational fixes toward feature polish and ergonomics.

## 2. Releases
No new releases tagged. The project remains on its pre-1.0 development cycle with version pins tracked in documentation (e.g., Zig 0.15.2→0.16.0 migrations). No breaking changes or migration notes to report this cycle.

## 3. Project Progress
**Merged/Closed PRs (4):**
- **#1044** [CLOSED]: Fixes `local_loop.enabled` gating — the feature was effectively on-by-default since the flag only chose between two caps, allowing compression and tool execution unconditionally. Now properly gates the entire `local_loop` path.
- **#1045** [CLOSED]: Fixes concurrency and lifetime defects in parallel tool workers across all exit paths, completing the second leg of the #987 trilogy.
- **#1046** [CLOSED]: Third and final PR of #987; resolves stack-bound dead-frame bugs (`stackLowerAscii`) and ensures `local_loop` config is properly bound, preventing dead stack storage returns.
- **#1001** [CLOSED]: Restores configurable memory recall controls (`memory.auto_recall`, `recall_limit`, `max_context_bytes`) after the head fork of #979 was deleted.

**Notable Open PRs Updated (10):**
- #971: Decouples native tool calls from SSE streaming paths, enabling providers to emit real tool outputs during streaming instead of forced prompt-injection formats.
- #987: Ongoing agent loop hygiene overhaul (stable prefix/variable tail compression, per-turn call dedup).
- #1021: Clears inherited `GIT_DIR` before pre-push hooks in worktree workflows.
- #1012: Scopes A2A tasks/context sessions by bearer principal, closing identity leakage across `tasks/get/cancel/resubscribe/list`.
- #1005: Prevents archived conversation shards from leaking into live turns during recall.
- #1003: Adds symlink-following support for skill directory discovery.
- #1040, #1039: Documentation refreshes (CLAUDE.md pointer file, scale figure audits).
- #1019: Byte-exact HTTP curl transport integrity testing.

## 4. Community Hot Topics
The most active discussion drivers are the split PRs of #987 and the streaming-tool decoupling effort:
- **#971** (OPEN, updated 2026-10-06): Needs from providers that support native tool calls during SSE streaming but are currently blocked by the agent loop’s blanket tool-disabling when stream callbacks attach. Underlying need: seamless, low-latency tool outputs in streaming UIs without prompt-injection overhead.
- **#987** (OPEN, updated 2026-10-06): The agent loop hygiene overhaul is the community’s largest current focus, addressing stack safety, compression, and deduplication for long, tool-heavy runs.
- **#1021** (OPEN, updated 2026-10-06): Worktree-maintainer workflow friction — `GIT_DIR` inheritance breaks `git push` from submodules/worktrees, a documented operational pain point.
- **#1012** (OPEN, updated 2026-10-06): A2A bearer-authentication without caller identity propagation, causing context-session key derivation failures for multi-user/task scenarios.

## 5. Bugs & Stability
Zero new issues reported in the last 24h; the 4 merged PRs above constitute the stability workstream. The #987 trilogy explicitly fixes:
- Arena race conditions and use-after-free on parallel tool worker exit paths (#1045).
- Dead-stack-frame returns and unguarded config flags (#1044, #1046).
- Unconditional compression/tool execution despite `local_loop.enabled` being false (#1044).
No regressions detected. The closed memory recall PR (#1001) also prevents prompt flooding from archived shards, directly improving output stability.

## 6. Feature Requests & Roadmap Signals
Open PRs map to the near-term roadmap:
- **Native tool streaming (#971)** — likely pre-1.0 gate, enabling real-time tool UIs.
- **Agent loop compression/dedup (#987)** — will reduce token overhead and latency for long-horizon agent runs.
- **Memory recall limits (#1001, #1005)** — user-configurable caps and archival filtering are being finalized.
- **A2A caller-scoping (#1012)** — foundational for multi-tenant or multi-user deployments.
- **Symlinked skill discovery (#1003)** — ergonomic improvement for skill package management.
These signals suggest the next release will emphasize *controlled* agent autonomy (loop gating, memory caps) and *interoperability* (A2A scoping, skill symlinks) rather than raw capability bumps.

## 7. User Feedback Summary
- **Positive:** Maintainers are highly responsive; the #987 split demonstrates a disciplined, review-driven approach to complex refactors. Memory controls (#1001) are restoring user confidence in prompt management.
- **Pain Points:** Worktree `GIT_DIR` inheritance breaking CI/hooks (#1021); lack of native tool streaming support forcing prompt-injection workarounds (#971); A2A identity gaps causing silent task-operations failures (#1012).
- **Satisfaction:** High for bugfix velocity (4 merges in 24h), moderate for feature completeness as the project transitions from “does it work?” to “how does it scale/integrate?”.

## 8. Backlog Watch
- **#971** — Open since June 2026, still no maintainer comment on the streaming decoupling approach. Needs a decision on provider API contract.
- **#987** — Split into 3 landed PRs, but the main branch PR remains open awaiting final integration or review sign-off. Long-running agent loops are blocked on this.
- **#1021** — Open since Oct 4; the worktree workflow friction affects all maintainers using the documented submodule workflow. No comments or fixes beyond the PR description.
- **#1012** — Open since Sept 27; A2A scoping issue with no maintainer triage comment. Impacts any deployment using bearer-token auth across multiple callers.

*Digest generated from data available at https://github.com/nullclaw/nullclaw on 2026-10-07. All links direct to GitHub PR/issues objects.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



## LobsterAI Project Digest - 2026-10-07

### 1. Today's Overview
LobsterAI experienced high issue closure activity today (50 issues closed, 0 open), though most were marked as stale or obsolete by the automated bot, indicating routine maintenance rather than active resolution. Pull request activity was moderate (6 merged/closed, 3 open), focused on bug fixes, UI improvements, and CI dependency updates. No new releases were published. The project appears to be in a stabilization phase, with development effort concentrated on OpenClaw integration and platform-specific fixes.

### 2. Releases
No new releases were published today.

### 3. Project Progress
The following PRs were merged or closed today:
- **[PR #2807](https://github.com/netease-youdao/LobsterAI/pull/2807)** (Closed): Fixed cowork proxy network failure reporting and added screenshot scaling for Computer Use sessions.
- **[PR #2806](https://github.com/netease-youdao/LobsterAI/pull/2806)** (Closed): Redesigned the cowork progress card above the composer for better visual consistency.
- **[PR #2805](https://github.com/netease-youdao/LobsterAI/pull/2805)** (Closed): Added Computer Use feature support for macOS.
- **[PR #2804](https://github.com/netease-youdao/LobsterAI/pull/2804)** (Closed): Fixed symlinked profile paths on macOS that were causing Vitest test failures in plugin repair modules.
- **[PR #2803](https://github.com/netease-youdao/LobsterAI/pull/2803)** (Closed): Limited the stale bot workflow to issues labeled `needs-info` to prevent premature closure of unresolved bugs.
- **[PR #2802](https://github.com/netease-youdao/LobsterAI/pull/2802)** (Closed): Removed dead legacy NIM direct-SDK gateway code that was no longer used after the migration to the OpenClaw plugin.
- **[PR #2581](https://github.com/netease-youdao/LobsterAI/pull/2581)** (Open): CI dependency bump for `actions/stale` (9.1.0 → 11.0.0).
- **[PR #2580](https://github.com/netease-youdao/LobsterAI/pull/2580)** (Open): CI dependency bump for `actions/cache` (4 → 6).
- **[PR #2579](https://github.com/netease-youdao/LobsterAI/pull/2579)** (Open): CI dependency bump for `actions/checkout` (4 → 7).

### 4. Community Hot Topics
The most active issues today (by comment count) were:
- **[Issue #831](https://github.com/netease-youdao/LobsterAI/issues/831)** (5 comments): Custom Gemini proxy model support missing in the latest version.
- **[Issue #144](https://github.com/netease-youdao/LobsterAI/issues/144)** (5 comments): Windows 11 installation/404 errors.
- **[Issue #188](https://github.com/netease-youdao/LobsterAI/issues/188)** (4 comments): Skills defaulting to enabled but failing to execute, with Cygwin dependency confusion.
- **[Issue #885](https://github.com/netease-youdao/LobsterAI/issues/885)** (3 comments): WeChat link functionality broken.
- **[Issue #884](https://github.com/netease-youdao/LobsterAI/issues/884)** (3 comments): Account login/payment feature parity questions.
- **[Issue #405](https://github.com/netease-youdao/LobsterAI/issues/405)** (3 comments): Local Ollama models unable to execute commands despite correct configuration.
- **[Issue #366](https://github.com/netease-youdao/LobsterAI/issues/366)** (3 comments): Gateway port 18789 status check failures.
- **[Issue #417](https://github.com/netease-youdao/LobsterAI/issues/417)** (3 comments): Comprehensive Windows 11 bug report covering sandbox, browser automation, performance, and skill market issues.

**Underlying Needs:** Users are seeking stability, clearer configuration guidance, and broader platform/IM compatibility. The transition to the OpenClaw engine has created friction, with many users struggling with local setup and skill integration.

### 5. Bugs & Stability
Bugs reported today, ranked by severity:
- **High Severity:**
  - **[Issue #543](https://github.com/netease-youdao/LobsterAI/issues/543)**: Path traversal vulnerability in `openclawMemoryFile.ts` (user-controlled paths). *Status: Closed/Stale – no fix PR linked.*
  - **[Issue #561](https://github.com/netease-youdao/LobsterAI/issues/561)**: Cross-user conversation data leakage. *Status: Closed/Stale.*
  - **[Issue #489](https://github.com/netease-youdao/LobsterAI/issues/489)**: Execution of dangerous/unexpected commands. *Status: Closed/Stale.*
- **Medium Severity:**
  - Windows 11 compatibility issues (#144, #188, #417, #815, #200, #153).
  - Local model command execution failures (#405).
  - IM integration breaks (WeChat #52/#885, DingTalk #197, Feishu #204).
  - Gateway/service crashes (#366, #898).
  - Model-specific errors (GLM5 #446).
- **Low Severity:**
  - Feature gaps (Gemini #831, Codex #29, token saving #38).
  - Localization (#568), upgrade process (#578), WSL usage (#574).

**Fix Status:** Most issues are closed/stale with no linked fix PRs, suggesting they are deferred or require user workarounds. The security issue (#543) requires immediate maintainer verification.

### 6. Feature Requests & Roadmap Signals
Key user-requested features:
- **[Issue #831](https://github.com/netease-youdao/LobsterAI/issues/831)**: Custom Gemini proxy model support.
- **[Issue #29](https://github.com/netease-youdao/LobsterAI/issues/29)**: Codex login integration.
- **[Issue #38](https://github.com/netease-youdao/LobsterAI/issues/38)**: Token/request optimization methods.
- **[Issue #568](https://github.com/netease-youdao/LobsterAI/issues/568)**: English localization improvements.
- **[Issue #418](https://github.com/netease-youdao/LobsterAI/issues/418)**: Clarification on

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

# CoPaw Project Digest — 2026-10-07

## 1. Today's Overview
CoPaw shows low but focused activity over the past 24 hours: one new enhancement issue and two open pull requests updated, with no merged PRs, closed issues, or new releases. The project appears to be in a maintenance-and-refinement phase rather than a feature-delivery sprint. Community engagement remains modest (zero reactions on all items), suggesting either a quiet period or that discussions are happening elsewhere. The two active PRs address console boot resilience and provider capability inference—both quality-of-life improvements rather than headline features.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
**No PRs merged or closed today.** The two open PRs received updates but remain in review:
- **#8102** – Console boot watchdog: adds error-surface UI and auto-reload when entry chunks fail to load (stale cache, CDN hiccup). Improves upgrade UX. [PR #8102](https://github.com/agentscope-ai/QwenPaw/pull/8102)
- **#6823** – Provider capability templates: auto-applies built-in capability flags (e.g., `supports_image`) to custom OpenAI-compatible providers by matching model IDs against documented baselines. Reduces manual config for known models. [PR #6823](https://github.com/agentscope-ai/QwenPaw/pull/6823)

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#8114** | Enhancement | 1 comment, 0 👍 | [Issue #8114](https://github.com/agentscope-ai/QwenPaw/issues/8114) |

**Analysis**: The sole new issue requests a *reasoning-strength* control for models that “over-think” (citing “3.8”-class models). This signals growing user exposure to reasoning-heavy models and a need for runtime token-budget / depth knobs—currently absent from the UI/config. No reactions yet, but the request touches core agent loop behavior and may attract votes if surfaced in Discord/forum.

## 5. Bugs & Stability
**No new bug reports or crash logs** in the last 24 hours.  
PR #8102 mitigates a known stability edge-case (console hang on stale asset loads) but is not yet merged.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| Reasoning-strength / thinking-depth parameter for models | Issue #8114 | Medium — aligns with industry trend (OpenAI `reasoning_effort`, Anthropic `thinking` budget); requires provider-agnostic abstraction |
| Auto capability inference for custom providers | PR #6823 | High — PR is mature (open since Aug, updated today), first-time contributor, solves recurring config friction |
| Console boot resilience (watchdog + reload) | PR #8102 | High — small, low-risk, directly improves upgrade reliability |

## 7. User Feedback Summary
- **Pain point**: Models with strong default reasoning (e.g., Qwen 3.8-class) consume excessive tokens/latency; no UI or config knob to throttle.  
- **Use case**: Users deploying custom OpenAI-compatible endpoints want zero-config multimodal/capability detection instead of manual YAML.  
- **Satisfaction signal**: Silent on recent releases (no issues/PRs referencing regressions), but low reaction counts make sentiment hard to gauge.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **#6823** feat(providers): capability templates for custom providers | ~60 days | Open, updated today | First-time contributor; solves repeated “why doesn’t my custom model support images?” tickets. Needs maintainer review/merge. |
| **#8102** fix(console): boot watchdog | 3 days | Open, updated today | Small but user-visible; prevents “white screen after upgrade” reports. Ready for merge if CI passes. |
| **#8114** reasoning-strength control | 1 day | Open, 1 comment | New; may need design discussion (per-model vs global, provider support matrix). Assign to roadmap triage. |

---
*Data sourced from GitHub API (agentscope-ai/QwenPaw) covering 2026-10-06 00:00 → 2026-10-07 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-10-07

## 1. Today's Overview
ZeroClaw is in a period of intense development velocity, with **40 issues updated** (33 open, 7 closed) and **50 PRs updated** (46 open, 4 merged/closed) in the last 24 hours. No new releases were published, indicating active pre-release stabilization work. The high PR-to-issue ratio (1.25:1) suggests the team is focused on implementing fixes and features faster than they are being reported, a healthy signal for an active development cycle.

## 2. Releases
**None today.** The next expected release appears to be v0.9.0, with several PRs tagged `release:v0.9.0` and v0.8.6 completion items still in flight.

## 3. Project Progress
**Merged/Closed PRs (4):**
- **#11509** — Channels: prefer attachments for large generated artifacts (merged)
- **#11451** — Secrets: protect Windows key files at creation (merged)
- 2 additional merges not shown in top-20 list

**Key PRs advanced today:**
- **#11592** — Add glob patterns for file_read path filtering (security, new)
- **#11558** — Make channel in-flight concurrency bounds configurable (new)
- **#11593** — Preserve created_at of retained rows when replacing session transcripts (infra fix)
- **#11591** — Correct sandbox backend auto-selection documentation (docs fix)
- **#11571** — Keep in-flight prompt during chat hydration (web UX fix)
- **#11588** — Dependabot: 21 Rust dependency updates (maintenance)

## 4. Community Hot Topics
| Issue | Comments | Topic |
|-------|----------|-------|
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | 11 | Evaluate Rust/WASM web UI prototype before React/Vite migration |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 6 | Runtime & gateway delivery tracker v0.8.6/v0.9.0 |
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | 6 | Standalone channel start SOP lacks live tool handles |
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | 6 | Config::save() replaces populated config with near-empty file (CLOSED) |

**Analysis:** The WASM migration debate (#8132) is the most-discussed, reflecting deep architectural interest in eliminating Node.js. The channel/tool wiring bug (#11055) and the config data-loss bug (#10495, now closed) represent the most critical user-facing pain points.

## 5. Bugs & Stability (Ranked by Severity)

| Sev | Issue | Summary |
|-----|-------|---------|
| **S0** | [#11540](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) | Bubblewrap sandbox not detected on Linux, falls back to application-layer |
| **S1** | [#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539) | Firejail fails with invalid `--nowheel` option |
| **S1** | [#11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538) | Firejail fails with invalid private directory |
| **S2** | [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | `firejail_args` documented but never applied to invocation (NEW) |
| **S2** | [#11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585) | Cost limit tripped; only clearable via daemon restart |
| **S2** | [#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) | Path-marker images re-sent as "new" each turn |
| **S1** | [#11481](https://github.com/zeroclaw-labs/zeroclaw/issues/11481) | ZeroCode spins at 100% CPU after terminal disconnection |
| **S3** | [#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586) | Sidebar shows failed sessions as green after daemon restart |

**Fix PRs exist for:** #11539/11538/11540 cluster (sandbox), #11451 (Windows secrets). No dedicated PRs yet for the firejail_args gap (#11594) or cost limit (#11585).

## 6. Feature Requests & Roadmap Signals
- **#9824** (P1, accepted) — Simplify default web tools to `web_fetch` + `web_research` + `http_request` (3 tools from 5)
- **#8310** (P2, in-progress) — Schema V4 breaking cut: remove dead/inert config surface
- **#8132** (P3, high risk) — Rust/WASM web UI migration (11 comments, hot topic)
- **#11583** (NEW) — Add Opper as typed OpenAI-compatible provider (EU-hosted, 700+ models)
- **#11547** (icebox) — Bind SOP runs to immutable workflow-definition revisions
- **#10996** (accepted) — Seed channel config during plugin installation
- **#11166** (in-progress) — Batch image eviction when per-request cap exceeded

**Prediction:** v0.9.0 likely includes the runtime/gateway separation (#7432), capability-taking constructors (#11174), and tunnel WSS publication (#11530). Schema V4 (#8310) may ship as a follow-up breaking change.

## 7. User Feedback Summary
**Pain points:**
- Sandbox misconfiguration on Linux (firejail flags, bubblewrap detection) — 4 related issues in 2 days
- Config corruption/data loss risk (#10495, now fixed) — eroded trust
- Cost limit persistence requiring daemon restart (#11585)
- Image handling regressions across multiple channels (#11554, #10908)
- ZeroCode stability after disconnect (#11481)

**Positive signals:** Multiple PRs improving security hardening (#11469 null device, #11451 Windows ACLs), active provider ecosystem expansion (#11583 Opper, #11378 Bedrock fix).

## 8. Backlog Watch
Items needing maintainer attention:
- **#8132** (open since 2026-06-22, 11 comments) — WASM migration decision stalled; needs author action
- **#8310** (open since 2026-06-25) — Schema V4 breaking cut, in-progress but aging
- **#9887** (open since 2026-08-10, blocked) — Image downsizing vs. dropping, multimodal limits
- **#9460** (closed) — Windows key-file ACL hardening (completed)
- **#11265** (depends on #11264, #11313) — CLI user commands for roster password lifecycle, blocked
- **#11174** (needs-author-action) — Capability-taking constructors, review pending

---

**Overall Health:** Active and healthy — high contribution volume, responsive bug fixing, clear roadmap tracking. Primary risks: sandbox stability on Linux and config/data integrity edge cases.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*