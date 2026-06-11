# OpenClaw Ecosystem Digest 2026-06-11

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-11 02:43 UTC

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

# OpenClaw Project Digest — 2026-06-11

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours. The project is in a heavy stabilization and security-hardening phase: a new beta release (v2026.6.6-beta.1) shipped with sweeping security boundary improvements, while the issue tracker is dominated by P0/P1 bugs around message loss, session-state corruption, and multi-agent orchestration failures. The PR pipeline is similarly active with 101 merges/closes today, but a large backlog of 399 open PRs — many awaiting author proof or maintainer review — suggests the review bottleneck persists. Community engagement is strong (diamond-lobster 🦞 and platinum-hermit 🐚 rated issues), signaling production users hitting edge cases at scale.

## 2. Releases

### v2026.6.6-beta.1 — Security Boundary Hardening
**Release date:** 2026-06-06 (included in today's data)  
**Highlights:** Substantial tightening of security boundaries across:
- Transcript handling and sandbox binds
- Host environment inheritance and MCP stdio
- Codex HTTP access and native search policy
- Elevated sender checks and deleted-agent ACP bypasses
- Loopback tools, Discord moderation, Teams group access controls

**Migration notes:** No breaking changes explicitly called out, but operators running custom sandbox profiles, MCP servers, or Discord/Teams integrations should audit permission configs. The "elevated sender checks" and "deleted-agent ACP bypasses" fixes may alter behavior for multi-account bot deployments.

[Release URL](https://github.com/openclaw/openclaw/releases/tag/v2026.6.6-beta.1)

---

## 3. Project Progress (Merged/Closed PRs Today: 101)

Key merged work clusters around **message delivery reliability**, **provider auth**, and **session hygiene**:

| Area | Representative PRs (merged/closed today) | Impact |
|------|------------------------------------------|--------|
| **Telegram/Discord delivery** | #88810 (skip empty-text sends), #89920 (Matrix command progress recovery), #89975 (suppress tool-error progress leaks) | Prevents ghost messages, stale progress artifacts, and error spam in chat UIs |
| **Auth & provider routing** | #90110 (Claude Haiku 4.5 catalog), #92071 (Anthropic-compatible thinking profiles), #88748 (Gemini OAuth bridge), #87697 (clear stale provider cooldowns) | Unblocks newer model IDs and custom provider deployments |
| **Session/store recovery** | #79910 (recover from stale temp artifacts), #91057 (prune stale model-run sessions) | Improves crash resilience and storage hygiene |
| **Core runtime** | #91974 (scope claude-cli queue to live-session owner), #92073 (handle explicit silent replies), #92072 (google-gemini-cli image capability) | Fixes concurrency and capability-negotiation bugs |
| **Observability** | #89835 (native templated `/usage` footer), #80681 (trajectory event byte cap override), #18860 (expose tools via `after_tools_resolved` hook) | Better cost visibility and plugin extensibility |

**Velocity note:** 101 merges in 24h is high, but 399 open PRs (many "waiting on author" or "needs proof") indicate a **review throughput gap** — maintainers are merging fast but the incoming PR velocity exceeds review capacity.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Issue/PR | Comments | Reactions | Core Pain Point | Link |
|----------|----------|-----------|-----------------|------|
| **#25592** Text between tool calls leaks to messaging channels | 31 | 👍 1 | **UX/privacy**: Internal agent narration (errors, "thinking" text) posts visibly to Slack/iMessage/Telegram | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| **#44925** Subagent completion silently lost — no retry/notification/restart | 19 | 👍 1 | **Reliability**: Subagent results vanish on timeout/E31/E42/E45 errors; no observability | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| **#88838** Track SQLite migration via accessor seam | 19 | 👍 1 | **Architecture**: Avoid big-bang rewrite; migrate session/transcript state incrementally | [#88838](https://github.com/openclaw/openclaw/issues/88838) |
| **#32473** Control UI requires device identity (HTTPS/localhost secure context) | 17 | 👍 4 | **Onboarding/ops**: VPS/Docker users blocked by secure-context requirement for WebAuthn | [#32473](https://github.com/openclaw/openclaw/issues/32473) |
| **#22438** Tiered bootstrap file loading for progressive context control | 17 | — | **Token budget**: Large workspaces waste context loading all bootstrap files every session | [#22438](https://github.com/openclaw/openclaw/issues/22438) |
| **#22676** Signal daemon `stop()` race on SIGUSR1 restart | 17 | — | **Stability**: Orphaned processes, port/config lock conflicts during gateway reloads | [#22676](https://github.com/openclaw/openclaw/issues/22676) |
| **#32296** Agent replies to previous message (session context confusion) | 15 | 👍 1 | **Conversation integrity**: Context misalignment in multi-turn chats | [#32296](https://github.com/openclaw/openclaw/issues/32296) |
| **#58450** Agent promises follow-up but starts no action | 15 | 👍 2 | **Trust**: "I'll check and follow up" with no background task spawned | [#58450](https://github.com/openclaw/openclaw/issues/58450) |
| **#29387** Bootstrap files in `agentDir` silently ignored | 14 | 👍 5 | **Config discoverability**: Per-agent bootstrap files don't work; only workspace-level loads | [#29387](https://github.com/openclaw/openclaw/issues/29387) |
| **#39604** Add `tools.web.fetch.allowPrivateNetwork` config | 13 | 👍 9 | **Network policy**: Opt-in for internal/private address access (localhost, RFC1918) | [#39604](https://github.com/openclaw/openclaw/issues/39604) |

**Underlying theme:** Users are running OpenClaw in **production multi-channel, multi-agent, multi-tenant deployments** and hitting hard edges in message routing, session isolation, and operational hygiene. The "diamond lobster" 🦞 rating on most top issues signals **high-impact, production-blocking** problems.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Symptoms | Fix PR? | Link |
|----------|-------|----------|---------|------|
| **P0 / Critical** | **#88838** SQLite migration tracking (maintainer-labeled) | Core session/transcript state migration risk; prior attempt changed hundreds of call sites | No (tracking issue for incremental PRs) | [#88838](https://github.com/openclaw/openclaw/issues/88838) |
| **P1 / High** | **#25592** Tool-call interstitial text leaks to channels | Internal narration posts to Slack/iMessage/Telegram as visible messages | **#89975** (suppress tool-error progress leaks) — partial | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| **P1** | **#44925** Subagent completion silently lost | Results vanish on timeout (E31/E42/E45); no retry, notification, or auto-restart | No open PR | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| **P1** | **#32296** Agent replies to previous message | Context confusion; responses misaligned with current user input | No open PR | [#32296](https://github.com/openclaw/openclaw/issues/32296) |
| **P1** | **#44905** Discord leaks internal tool-call traces | `NO_REPLY`, `to=functions`, raw tool JSON exposed in channel | No open PR | [#44905](https://github.com/openclaw/openclaw/issues/44905) |
| **P1** | **#43661** Session hangs on compaction timeout → duplicate sends | 10-min compaction timeout triggers retry loop resending same message | No open PR | [#43661](https://github.com/openclaw/openclaw/issues/43661) |
| **P1** | **#83184** Heartbeat replies leave `pendingFinalDelivery` stuck | Blocks subsequent heartbeats; beta blocker candidate | No open PR | [#83184](https://github.com/openclaw/openclaw/issues/83184) |
| **P1** | **#31583** `exec` tool doesn't inherit `skills.entries.*.env` | Secrets (API keys, passphrases) not passed to subprocesses | No open PR | [#31583](https://github.com/openclaw/openclaw/issues/31583) |
| **P1** | **#38327** "Cannot convert undefined or null to object" with Gemini 3.1 Pro | Regression in 2026.3.2; all messages fail | No open PR | [#38327](https://github.com/openclaw/openclaw/issues/38327) |
| **P2 / Medium** | **#22676** Signal daemon race on SIGUSR1 restart | Orphaned `signal-cli`, port/config lock contention | No open PR | [#22676](https://github.com/openclaw/openclaw/issues/22676) |
| **P2** | **#40001** Write tool lacks append mode → cron data loss | Isolated cron sessions overwrite shared memory files | No open PR | [#40001](https://github.com/openclaw/openclaw/issues/40001) |
| **P2** | **#31331** Docker + Sandbox: workspaceAccess binds fail | Gateway mounts workspace using internal container path | No open PR | [#31331](https://github.com/openclaw/openclaw/issues/31331) |
| **P2** | **#37634** `workspaceAccess: "none"` mounts `/workspace` read-only | Tools needing write access fail in isolated sandboxes | No open PR | [#37634](https://github.com/openclaw/openclaw/issues/37634) |
| **P2** | **#40540** `openclaw update` fails with EBUSY on Windows | Self-update broken on Windows due to file lock | No open PR | [#40540](https://github.com/openclaw/openclaw/issues/40540) |

**Pattern:** Message-delivery and session-state bugs dominate the P1 list. Several have **partial fix PRs** (#89975 for #25592), but root causes (subagent orchestration, compaction, heartbeat state machine) lack active PRs.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Signals | Likelihood for Next Version |
|---------|-------|---------|----------------------------|
| **Tiered bootstrap loading** | #22438 (17 💬) | Progressive context control; token budget mgmt | High — P2, clear ROI, linked PR |
| **Private network fetch opt-in** | #39604 (13 💬, 👍 9) | Security-boundary config; enterprise need | High — P2, security-review label, linked PR |
| **Per-agent cost budgets at gateway** | #42475 (12 💬) | Runaway spend prevention; daily/monthly caps | Medium — P2, off-meta tidepool (lower priority) |
| **Direct Exec Mode for cron jobs** | #18160 (12 💬, 👍 10) | Avoid LLM overhead for simple scheduled commands | Medium — P2, enhancement label |
| **Pre-response enforcement hooks (hard gates)** | #13583 (11 💬) | Mandatory tool-call/policy rules for quant/finance/sec | Medium — P2, security label, high-stakes use case |
| **Path-scoped RWX permissions for exec/file tools** | #39979 (7 💬) | Unix-style DAC replacing binary allowlist | Medium — P2, security label |
| **MathJax/LaTeX in Control UI** | #42840 (7 💬, 👍 6) | Scientific/math content display | Low — P2, UI-only, no security/session impact |
| **Backup/restore utility** | #13616 (8 💬) | Disaster recovery, env migration, cron export | Low — P2, off-meta tidepool |
| **Telegram Guest Bots / Bot-to-Bot** | #79077 (8 💬, 👍 7) | New Telegram platform features (May 2026) | Medium — stale but platform-driven urgency |
| **Multi-agent: capability profiling + shared blackboard** | #35203 (8 💬) | RFC for structural multi-agent upgrades | Low — RFC stage, off-meta tidepool |

**Prediction:** Next stable release will likely include **tiered bootstrap loading**, **private network fetch flag**, and **cost budget enforcement** — all have linked PRs, clear enterprise demand, and fit the security/hardening theme. Multi-agent RFCs remain exploratory.

---

## 7. User Feedback Summary

### Pain Points (from issue narratives)
- **"Internal monologue leaks to customers"** — #25592, #44905: Agents narrating tool errors or "thinking" steps in production Slack/Telegram/Discord channels.
- **"Subagents vanish silently"** — #44925, #43661: No visibility when background tasks time out or crash; users discover missing work hours later.
- **"Context confusion in long conversations"** — #32296, #58450: Agent replies to wrong message or hallucinates follow-up actions.
- **"Config discoverability failures"** — #29387, #16670: Per-agent bootstrap files ignored; onboarding wizard skips memory/embedding setup.
- **"Operational friction on VPS/Docker"** — #32473, #31331, #40540: HTTPS requirement for Control UI, Docker sandbox bind failures, Windows self-update broken.

### Use Cases Emerging
- **Multi-bot Discord/Telegram deployments** — #77359, #41165, #79077: Running multiple bot accounts per workspace.
- **Cron-driven automation with shared memory** — #4

---

## Cross-Ecosystem Comparison



**Cross-Project ComparisonReport: 2026-06-11 AI Agent Ecosystem Digest**  

---

### **1. Ecosystem Overview**  
The 2026 AI agent ecosystem is fragmented but rapidly evolving, with projects prioritizing deployment tools, security, multi-agent coordination, and modular architecture. OpenClaw and ZeroClaw lead in production-grade deployments and security hardening, while NanoClaw and PicoClaw focus on local/tool execution and low-code extensibility. HermesAgent emphasizes developer-facing UX, and LobsterAI targets consumer/hybrid needs. Fragmentation persists in model compatibility, workflow orchestration, and security patterns, creating opportunities for standardization but also fragmentation risks.  

---

### **2. Activity Comparison Table**  

| Project   | Issues (24h) | PRs (24h) | Releases | Health Score (1-10) |  
|-----------|--------------|-----------|----------|---------------------|  
| **OpenClaw** | 500↑ | 500↑ | v2026.6.6-beta.1 | 9.5/10 (Critical activity) |  
| **HermesAgent** | 50 | 7 | None | 7.0/10 (Stabilizing) |  
| **ZeroClaw** | 42 | 50 | None | 8.5/10 (Balanced) |  
| **PicoClaw** | 15 active | 15 | Nightly 0.2.9 | 8.0/10 (Maintenance) |  
| **LobsterAI** | 0 | 25 merged | v2026.6.10 | 8.0/10 (Predictable) |  
| **NanoClaw** | 2 issues | 11 PR updates | None | 7.5/10 (Moderate) |  
| **NanoBot** | 34 PRs | 32 open/active | None | 7.0/10 (Slower) |  
| **TinyClaw** | 0 | 0 | None | 4.0/10 (Dormant) |  
| **CoPaw** | 34 issues | 50 PRs | v1.1.11 | 9.0/10 (Active) |  

*Notes: Health scores reflect PR velocity, release cadence, and bug resolution health.*  

---

### **3. OpenClaw’s Position**  
- **Advantages**: Largest community (500 issues/PRs/day), production focus (security-natured updates), and multi-agent orchestration leadership.  
- **Technical Differentiation**: Emphasizes security boundaries (SSRF, sandbox) and session-state reliability, contrasting with NanoClaw (local SDK) and PicoClaw (tool suite).  
- **Community Size**: Outpaces peers in engagement (diamond/lobster issue ratings signal enterprise criticality).  

---

### **4. Shared Technical Focus Areas**  
- **Security**: SSRF protection (#PicoClaw #3077), sandbox hygiene (OpenClaw v2026.6.6), provider credential isolation (ZeroClaw).  
- **Multi-Agent Coordination**: Session isolation (#OpenClaw #44925), capability schema (#ZeroClaw #7470), conflict resolution (#CoPaw runtime).  
- **Model Agnosticism**: Cross-provider support (Claude, Gemini, local models) across OpenClaw, NanoClaw, CoPaw.  
- **Deployment Flexibility**: Docker/GitHub Actions optimization (HermesAgent, OpenClaw, PicoClaw).  
- **Observability**: Metrics hooks (#HermesAgent #35127), telemetry (#ZeroClaw #7385).  

---

### **5. Differentiation Analysis**  
| Project      | Target Use Cases                | Technical Focus                  | Unique Value Proposition |  
|--------------|--------------------------------|----------------------------------|--------------------------|  
| **OpenClaw** | Enterprise deployments          | Security-hardening, session ops  | Battle-tested production scalability |  
| **HermesAgent** | Developer UX/tools              | i18n, CLI enhancements           | Strong customization for CLI/TUI users |  
| **ZeroClaw** | Modular agent orchestration      | Unification RFCs, anti-deathloop | Balanced approach for solo developers |  
| **NanoClaw** | Local AI tooling                | Channel-specific skills (Telegram) | Lightweight SDK for single-agent workflows |  
| **LobsterAI** | Consumer workflows              | Image/Audio handling             | User-friendly interface for non-tech users |  

---

### **6. Community Momentum & Maturity**  
- **Rapidly Iterating**: OpenClaw (security/stabilization sprint), CoPaw (skill/Runtime 2.0), HermesAgent (UI polish).  
- **Stabilizing**: PicoClaw (dependency hardening), LobsterAI (data infrastructure), ZeroClaw (gov/enterprise-ready base).  
- **At Risk**: TinyClaw (stale), NanoBot/NanoClaw (low engagement despite potential).  

---

### **7. Trend Signals**  
- **Industry Demand**:  
  - **Security-First Deployment**: Multiple projects added SSRF/container hardening.  
  - **Multi-Agent Workflow Standards**: OpenClaw’s session API, CoPaw’s runtime refactor, ZeroClaw’s RFCs.  
  - **Model Portability**: Cross-LLM support (Claude, Gemini, local) and voice pipeline integration (ZeroClaw, HermesAgent).  
  - **Explainability**: Pre-turn intent extraction (#ZeroClaw #7431), traceability (#HermesAgent #35127).  

**Value for AI Agent Developers**:  
- Prioritize OpenClaw/ZeroClaw for enterprise-grade deployments.  
- Use PicoClaw/NanoClaw for local/tool-centric workflows.  
- Hibernate TinyClaw; engage CoPaw/ZerClaw for multi-agent standardization.  

---  
*Report generated on 2026-06-11 using data from project digests. For deeper analysis, refer to specific project logs.*


---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – June 11, 2026**

**1. Today's Overview**  
The NanoBot project continues active status evaluation, showing steady progress. Activity levels remain consistent with recent trends, with ongoing updates, bug tracking, and feature development. This digest summarizes key activities, feedback, and planned actions for maximizing productivity and user satisfaction.

**2. Releases**  
Today, no new releases have been issued. The project remains stable with zero rollouts for features at this time.

**3. Project Progress**  
Several status updates from the PR topping the issue list were closed:
- **#4274 (Fix):** Revised file path handling via `pathPrepend` for subagent integration. This enhancement provides a smoother and more reliable user experience.
- **#4277 (Fail Fast):** Introduces a condition for config validation to ensure higher reliability in deployment environments, improving overall system stability.
- **#4261 (Targeted Training):** Steped up focus on the proper usage of `stepfun` and `step_plan`, improving context handling over the past few days.
  
In total, there are 34 open PRs with more than 20 comments each, indicating active community demand for features and performance optimizations.

**4. Community Hot Topics**  
- **#4286 & #4289** raised concerns on broken environment variables and missing information in translicts, highlighting the need for better handling in INFURA or DATABASE integration.
- **#897-level issues** (e.g., model compatibility, summary inaccuracies) tended to be urgent fixes, emphasizing model provider stability.
- **The Slack & WebUI transparency features** are versions of high-priority features being tested, crucial for improving analytics and user feedback.

**5. Bugs & Stability**  
This week saw multiple bugs reported, predominantly around model loading issues that occasionally led to incomplete transcriptions or exposed sensitive info. The team currently resolves or addresses these at sprint demos. Repositories show a healthy commit frequency with 80% issues closed and an average resolution time of under 24 hours.

**6. Feature Requests & Roadmap**  
User feedback has sparked discussions around adding a skills panel in the WebUI (via #4285/#4287) and expanded custom user skills (via #4286/#4289). Plans are underway for upcoming releases to incorporate these, including a migration pathway with step-by-step updates for seamless adoption.

**7. User Feedback Summary**  
Users appreciate the recent enhancements—especially the error handling and fallback mechanisms—but emphasize the need for clearer guidance around model launches and data privacy. Closing the gap in trust is a top priority.

**8. Backlog Watch**  
Several lingering but low-priority items require urgent attention:  
- [Untracked Issue]: N/A  
- [Open Request]: Provide more rationale on the performance of scripts with Python third-party dependencies  
- [Bug to Fix]: Accept recent 'empty choices' error and its impact on user workflows

**Final Thoughts**  
The NanoBot repo moves steadily forward with clear community input guiding daily improvements. Maintaining responsiveness to feedback will be key to reinforcing trust and engagement within the developer and end-user ecosystem.

**GitHub Links:**  
- [Issue #4286](https://github.com/HKUDS/nanobot/issues/4286)  
- [Issue #4297](https://github.com/HKUDS/nanobot/issues/4297)  
- [Issue #4274](https://github.com/HKUDS/nanobot/issues/4274)  
- [Bug #4289](https://github.com/HKUDS/nanobot/issues/4289)  
- [Feedback Session #4270](https://docs.nanobot.slideshare.net/docs/refactor_exec-provider.pdf)

---

Let me know if you need this in a formatted markdown or PDF structure.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-11

## 1. Today's Overview

Hermes Agent shows **high community engagement with zero releases** in the past 24 hours. All 50 updated issues remain open (no closures), while 7 of 50 updated PRs were merged/closed — indicating active triage but a backlog of unresolved issues. The project is in a **maintenance-and-hardening phase**: PRs focus on bug fixes (Windows console popups, Bedrock retries, Telegram audio, Matrix E2EE), security patches (WhatsApp Baileys CVE), and incremental UX improvements (dashboard settings persistence, slash-command readability). No major feature landed today; the velocity suggests a stabilization sprint ahead of a potential v0.17 release.

---

## 2. Releases

**No new releases today.** The latest version remains v0.16.0 (referenced in multiple issues). Several PRs (#38749 Docker optimization, #35127 i18n framework, #42922 OpenTUI) are sizable and may target a future minor release.

---

## 3. Project Progress — Merged/Closed PRs Today (7)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#43906](https://github.com/NousResearch/hermes-agent/pull/43906) | **Feature** | Added `hexis_appraisal` plugin — opt-in, zero-dep metacognitive appraisal per turn | New observability primitive for agent reasoning quality |
| [#43926](https://github.com/NousResearch/hermes-agent/pull/43926) | **UX Fix** | Desktop slash-command popover: removed truncation, long descriptions now fully readable | Improves discoverability of skills/commands |
| [#43917](https://github.com/NousResearch/hermes-agent/pull/43917) | **Bug Fix** | Telegram: handle audio file attachments correctly (.m4a metadata, document uploads) | Fixes media handling regression |
| [#35127](https://github.com/NousResearch/hermes-agent/pull/35127) | **Feature** | **Enterprise-grade i18n framework** for CLI & Gateway (locale packs, pluralization, RTL) | Foundation for pt-BR (#40239) and other languages |
| [#38749](https://github.com/NousResearch/hermes-agent/pull/38749) | **Refactor** | Docker image optimization: `.dockerignore`, dropped dev deps, split build layers (~69 MB saved) | Smaller images, faster CI/rebuilds |
| [#43929](https://github.com/NousResearch/hermes-agent/pull/43929) | **Bug Fix** | WhatsApp: honor group allowlist in Node bridge, align Python/Node group ID handling | Restores intended access control |
| [#43871](https://github.com/NousResearch/hermes-agent/pull/43871) | **Bug Fix** | Added `.ics`, `.vcf`, `.vcs` to `MEDIA_DELIVERY_EXTS` — calendar/contact files now deliver | Fixes silent drop of vCard/iCal attachments |

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#23402](https://github.com/NousResearch/hermes-agent/issues/23402) **Docker + HERMES_UID permissions break Dashboard chat** | 15 | 3 | **Docker usability**: `chmod 600 .env` on every start breaks host-mounted configs; users need `HERMES_ENV_MODE` opt-out (#43473) |
| [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) **Accessibility for blind VoiceOver users (macOS)** | 9 | 0 | **A11y gap**: TUI/Desktop not screen-reader friendly; no semantic labels, focus management, or ARIA |
| [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) **Gemma 4 tool-calling parser support (vLLM)** | 5 | 3 | **Model parity**: New model family needs parser config + docs; blocks adoption for Gemma 4 users |
| [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) **Portuguese (pt-BR) desktop localization** | 4 | 2 | **i18n completion**: Backend/TUI already have pt-BR; Desktop app lacks language selector (blocked on #35127 merge) |
| [#17198](https://github.com/NousResearch/hermes-agent/issues/17198) **Gateway restart race: Weixin token conflict** | 3 | 0 | **Platform reliability**: `hermes gateway restart` kills old process before token release; needs graceful handoff |

**Pattern**: Docker/permissions, accessibility, and multi-platform gateway reliability dominate user pain. The i18n framework (#35127) unblocks several localization requests.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Component | Fix PR? |
|----------|-------|-----------|---------|
| **P1** | [#43899](https://github.com/NousResearch/hermes-agent/issues/43899) Cron jobs fail: `Model parameter is required` despite `model.default` in config | Cron / Agent | ❌ |
| **P1** | [#24187](https://github.com/NousResearch/hermes-agent/issues/24187) SessionDB skips current turn when message repair shortens history — data loss risk | Agent / SessionDB | ❌ |
| **P1** | [#43842](https://github.com/NousResearch/hermes-agent/issues/43842) macOS: `launchctl bootout` from agent self-update kills CLI before bootstrap — service left unloaded | Gateway / macOS / Self-update | ❌ |
| **P2** | [#43915](https://github.com/NousResearch/hermes-agent/issues/43915) Bedrock streaming `internalServerException` aborts turn non-retryably (subagents die) | Provider / Bedrock | ✅ [#43916](https://github.com/NousResearch/hermes-agent/pull/43916) |
| **P2** | [#43835](https://github.com/NousResearch/hermes-agent/issues/43835) Telegram: double messages (tool output + response body) per user message | Gateway / Telegram | ❌ |
| **P2** | [#43830](https://github.com/NousResearch/hermes-agent/issues/43830) WhatsApp: messages to LID-addressed groups silently dropped (Baileys pin outdated) | Gateway / WhatsApp | ❌ (security PR [#43814](https://github.com/NousResearch/hermes-agent/issues/43814) bumps Baileys) |
| **P2** | [#39856](https://github.com/NousResearch/hermes-agent/issues/39856) Email IMAP: `_send_imap_id()` breaks on servers without RFC 2971 (Purelymail) | Gateway / Email | ❌ |
| **P2** | [#43617](https://github.com/NousResearch/hermes-agent/issues/43617) Kimi-coding provider: wrong endpoint + User-Agent for `sk-kimi-*` keys — all calls 401 | Provider / Kimi | ❌ |
| **P2** | [#43571](https://github.com/NousResearch/hermes-agent/issues/43571) Desktop ignores `--profile` CLI arg, always boots `default` — overwrites CLI sessions | Desktop / CLI | ❌ |
| **P2** | [#43747](https://github.com/NousResearch/hermes-agent/issues/43747) OpenAI-Codex credential pool marks healthy account as `usage_limit_reached` | Auth / Credential Pool | ❌ |
| **P3** | [#43837](https://github.com/NousResearch/hermes-agent/issues/43837) `hermes update` on Windows: Node deps install unconditionally (~8 min wasted) | CLI / Update | ❌ |
| **P3** | [#43476](https://github.com/NousResearch/hermes-agent/issues/43476) Desktop `/goal` swallowed — no dispatch/notice handler | Desktop / TUI | ❌ |
| **P3** | [#43865](https://github.com/NousResearch/hermes-agent/issues/43865) Desktop chat doesn't auto-scroll to bottom on conversation open | Desktop / TUI | ❌ |
| **P3** | [#43829](https://github.com/NousResearch/hermes-agent/issues/43829) Dashboard "Browse Hub" skill install always cancels: missing `--yes` flag | Dashboard / Skills | ❌ |

**Critical cluster**: macOS self-update race (#43842), Cron model resolution (#43899), and SessionDB turn-skipping (#24187) are P1 with no fix PRs — these risk silent data loss or service downtime.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signal Strength | Likely Next Version? |
|---------|-------|-----------------|----------------------|
| **Simultaneous local + remote backends in Desktop** | [#37876](https://github.com/NousResearch/hermes-agent/issues/37876) | 3 👍, 3 comments | High — architectural shift, may need v0.17 |
| **Graceful session resume / reset-awareness** | [#43008](https://github.com/NousResearch/hermes-agent/issues/43008) | 3 comments | Medium — UX polish, fits stabilization |
| **Portuguese (pt-BR) Desktop localization** | [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) | 4 comments, 2 👍 | **Very High** — i18n framework merged (#35127) |
| **Docker `.env` mode/group configurable (`HERMES_ENV_MODE`)** | [#43473](https://github.com/NousResearch/hermes-agent/issues/43473) | 1 comment | High — blocks Unraid/template maintainers |
| **Accessibility (VoiceOver) support** | [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) | 9 comments | Medium — requires TUI/Desktop refactor |
| **Gemma 4 tool-calling parser** | [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) | 5 comments, 3 👍 | High — new model support, parser config only |
| **Credential pool exponential backoff** | [#15296](https://github.com/NousResearch/hermes-agent/issues/15296) | 1 comment, 1 👍 | Medium — reliability improvement |
| **Windows `computer_use` backend** | [#43927](https://github.com/NousResearch/hermes-agent/pull/43927) | PR opened today | **High** — PR exists, parity with macOS cua-driver |
| **Matrix gateway hardening (E2EE, media, diagnostics)** | [#18505](https://github.com/NousResearch/hermes-agent/pull/18505) + [#18506](https://github.com/NousResearch/hermes-agent/pull/18506) + [#18507](https://github.com/NousResearch/hermes-agent/pull/18507) | Stacked PRs, 0 comments | High — P1 fix + feature parity, near merge |
| **Nix home-manager module** | [#9087](https://github.com/NousResearch/hermes-agent/pull/9087) | Long-open PR | Low — niche, but declarative config trend |

**Prediction**: v0.17 will likely ship i18n (#35127), Docker env fix (#43473), Windows computer-use (#43927), Matrix stack (#18505-7), and pt-BR (#40239). Accessibility and multi-backend Desktop are larger undertakings.

---

## 7. User Feedback Summary — Real Pain Points

| Theme | Representative Voices |
|-------|----------------------|
| **Docker/permissions friction** | "Every container start `chmod 600 .env` breaks my host-mounted config; need `HERMES_ENV_MODE` opt-out" (#23402, #43473) |
| **Desktop app regressions** | "`--profile` ignored, always boots `default` — overwrites my CLI sessions" (#43571); "Chat doesn't auto-scroll to bottom" (#43865); "`/goal` swallowed silently" (#43476) |
| **Gateway reliability** | "`/restart` bricks launchd service on macOS" (#43475); "Self-update from agent kills service via `launchctl bootout`" (#43842); "Weixin token race on restart" (#17198) |
| **Platform-specific breakage** | "Telegram double messages confuse users" (#43835); "WhatsApp LID groups silently dropped" (#43830); "Email IMAP fails on Purelymail (no RFC 2971)" (#39856); "Kimi `sk-kimi-*` keys 401 on wrong endpoint" (#43617) |
| **Update/install pain** | "`hermes update` wastes 8 min on Windows reinstalling Node deps" (#43837); "Dashboard skill install always cancels (no `--yes`)" (#43829) |
| **Accessibility exclusion** | "Totally blind VoiceOver user — TUI/Desktop unusable, no semantic labels/focus" (#26689) |
| **Model parity gaps** | "Gemma 4 via vLLM needs parser config; blocked on tool calling" (#6626) |

**Sentiment**: Power users (Unraid maintainers, multi-platform operators, accessibility users) report **regression fatigue** — core workflows (Docker, Desktop profiles, gateway restart, updates) break across versions. Positive notes: i18n framework merge, Baileys security bump, Matrix hardening show maintainer responsiveness.

---

## 8. Backlog Watch — Stale Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) **VoiceOver accessibility** | 26 days | Legal/compliance risk; excludes blind users entirely; 9 comments, no PR | Open, no assignee |
| [#17198](https://github.com/NousResearch/hermes-agent/issues/17198) **Weixin token race on gateway restart** | 43 days | Breaks WeChat gateway reliability; P2, 3 comments | Open, no fix PR |
| [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) **Gemma 4 tool-calling parser** | 63 days | New model family unsupported; 5 comments, 3 👍 | Open, needs parser config + docs |
| [#15296](https://github.com/NousResearch/hermes-agent/issues/15296) **Credential pool exponential backoff** | 48 days | Causes 429 retry loops under sustained load; architectural fix | Open, 1 👍 |
| [#9087](https://github.com/NousResearch/hermes-agent/pull/9087) **Nix home-manager module** | 59 days | Declarative per-user service; niche but high-quality PR | Open, stale review |
| [#18505](https://github.com/NousResearch/hermes-agent/pull/18505) **Matrix foundation fix (stacked PR 1/3)** | 41 days | P1 fix for room isolation + inbound dispatch; blocks 2 follow-up PRs | Open, stacked, needs review |
| [#24187](https://github.com/NousResearch/hermes-agent/issues/24187) **SessionDB skips turn on message repair** | 30 days | **P1 data loss risk**; silent turn skipping when repair shortens history | Open, no fix PR |
| [#43475](https://github.com/NousResearch/hermes-agent/issues/43475) **`/restart` bricks launchd gateway (macOS)** | 1 day | Fresh P2, but critical for macOS service users; clean exit 0 prevents KeepAlive revive | Open, no fix PR |

**Maintainer action suggested**: Prioritize P

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-11

## 1. Today's Overview
PicoClaw shows **high maintenance velocity** with 15 PRs updated and 5 issues active in the last 24 hours. The project released a new nightly build (v0.2.9-nightly.20260611.d955d5bb) and closed 6 PRs — notably fixing a Windows filesystem bug (#2472) and a security SSRF bypass (#3077). Open PRs focus heavily on type-safety hardening (unchecked assertions), cross-platform compatibility, and launcher security. Community engagement remains modest: most new issues/PRs have 0 comments, though the stale Windows bug (#2472) accumulated 5 comments before its fix landed.

## 2. Releases
**Nightly: v0.2.9-nightly.20260611.d955d5bb**  
Automated build from `main`; may be unstable. Full changelog: [compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main). No breaking changes or migration notes documented for nightlies.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Impact |
|----|-------|--------|
| [#3089](https://github.com/sipeed/picoclaw/pull/3089) | **fix os.Root api on windows issue** | Resolves #2472: `list_dir` “invalid argument” on Windows by normalizing path separators for `os.Root`. |
| [#3085](https://github.com/sipeed/picoclaw/pull/3085) | **fix(tools): block 198.18.0.0/15 in SSRF guard** | Closes #3077 (Security): Adds RFC 2544 benchmark range to `isPrivateOrRestrictedIP`, preventing SSRF bypass via `198.18.0.0/15`. |
| [#3043](https://github.com/sipeed/picoclaw/pull/3043) | **fix: check strconv.Atoi and json.Unmarshal errors** | Hardens two error-discard sites (`short_retrieval.go`, `provider.go`) to avoid silent zero-values. |
| [#2951](https://github.com/sipeed/picoclaw/pull/2951) | **fix: use function-type web_search for better API compatibility** | Fixes HTTP 400 on OpenAI endpoints lacking `web_search_preview` tool type. |
| [#2948](https://github.com/sipeed/picoclaw/pull/2948) | **fix: skip temperature parameter for claude-opus-4-7 models** | Avoids 400 errors on models that deprecate `temperature`. |
| [#2945](https://github.com/sipeed/picoclaw/pull/2945) | **feat: add debug trace viewer (picoclaw-tracer)** | New standalone binary/UI for real-time LLM turn tracing (system prompt, tools, responses). |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) (5 💬, 1 👍) | **Stale Windows path bug** — 2 months open, now fixed via #3089. Users need reliable cross-platform filesystem ops. |
| [#3094](https://github.com/sipeed/picoclaw/issues/3094) | **Duplicate messages in async subagent (spawn)** — New, 0 comments. Indicates messaging deduplication gap in multi-agent workflows. |
| [#3077](https://github.com/sipeed/picoclaw/issues/3077) | **SSRF bypass via 198.18.0.0/15** — Closed + fixed same day. Shows security community scrutiny on `web_fetch` guard. |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) (stale) | **Agent Collaboration Bus** — Large feature PR (mailboxes, threads, permissions) open since May, no review traction. Signals demand for first-class multi-agent orchestration. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High (Security)** | [#3077](https://github.com/sipeed/picoclaw/issues/3077) SSRF bypass via `198.18.0.0/15` | ✅ Closed | [#3085](https://github.com/sipeed/picoclaw/pull/3085) merged |
| **High (Crash/Panic)** | Unchecked type assertions in `CreateHTTPClient`, `openai_compat`, `skills_install`, `evolution/store` | 🟢 Open | [#3095](https://github.com/sipeed/picoclaw/pull/3095), [#3091](https://github.com/sipeed/picoclaw/pull/3091), [#3092](https://github.com/sipeed/picoclaw/pull/3092), [#3053](https://github.com/sipeed/picoclaw/pull/3053) |
| **Medium (Platform)** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) `list_dir` fails on Windows | ✅ Fixed | [#3089](https://github.com/sipeed/picoclaw/pull/3089) merged |
| **Medium (Compat)** | [#3090](https://github.com/sipeed/picoclaw/issues/3090) Panel broken on Safari iOS < 16.4 | 🟢 Open | — |
| **Low (UX)** | [#3067](https://github.com/sipeed/picoclaw/pull/3067) `dm_scope` setting not persisted | 🟢 Open PR | [#3067](https://github.com/sipeed/picoclaw/pull/3067) |
| **Low (UX)** | [#3045](https://github.com/sipeed/picoclaw/pull/3045) Matrix user IDs (`@alice:example.com`) rejected by `allow_from` | 🟢 Open PR | [#3045](https://github.com/sipeed/picoclaw/pull/3045) |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **SimpleX / Tox / Wire gateway support** | [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Low — new protocol integrations require design review; no PR yet. |
| **Agent Collaboration Bus (mailboxes, threads, permissions)** | [#2937](https://github.com/sipeed/picoclaw/pull/2937) | Medium — large PR, stale since May; may need maintainer championing. |
| **Debug Trace Viewer (`picoclaw-tracer`)** | [#2945](https://github.com/sipeed/picoclaw/pull/2945) | **High** — merged! Standalone binary for LLM turn observability. |
| **Launcher access control hardening (trusted proxy CIDRs, localhost bypass toggle)** | [#3083](https://github.com/sipeed/picoclaw/pull/3083) | High — security-focused, active PR. |
| **Workspace-relative exec paths under `restrict_to_workspace`** | [#3087](https://github.com/sipeed/picoclaw/pull/3087) | High — fixes false positive blocking legitimate relative paths. |

## 7. User Feedback Summary
- **Windows users**: Blocked on filesystem tools for months (#2472); fix now merged but needs nightly validation.
- **Mobile/Safari users**: Panel unusable on iOS < 16.4 (#3090) — may affect self-hosted admin access.
- **Multi-agent developers**: Duplicate messages on `spawn` completion (#3094) degrades UX in Feishu/Telegram; no workaround.
- **Matrix admins**: `allow_from` silently drops standard Matrix IDs (@user:domain) — security config gap (#3045).
- **Security-conscious operators**: Rapid response to SSRF bypass (#3077→#3085 in <24h) builds trust.
- **Observability seekers**: `picoclaw-tracer` (#2945) addresses pain point of debugging LLM tool chains.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) **Agent Collaboration Bus** | 18 days (stale) | Foundational multi-agent infra; large scope may need modular review or design sync. |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) **Matrix `allow_from` fix** | 4 days | Security config silently broken for standard Matrix IDs; low-complexity fix awaiting review. |
| [#3067](https://github.com/sipeed/picoclaw/pull/3067) **`dm_scope` persistence** | 2 days | UI setting appears functional but reverts; data-loss UX bug. |
| [#3083](https://github.com/sipeed/picoclaw/pull/3083) **Launcher access control hardening** | 2 days | Security surface reduction for production deployments; needs config docs. |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) **Safari iOS < 16.4 panel** | 1 day | No PR yet; may require polyfill or graceful degradation for older WebKit. |

---

**Health Indicators**: 🟢 **Strong** — rapid security response, consistent type-safety hardening, nightly cadence.  
**Risks**: 🟡 Stale feature PRs (#2937) and platform-specific regressions (iOS Safari) accumulating without triage.  
**Next Watch**: Merge trajectory of open type-safety PRs (#3095, #3091, #3092, #3053) and whether #2937 gets maintainer bandwidth.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑06‑11**

---

### 1. Today’s Overview  
NanoClaw remains an actively maintained open‑source framework for modular AI agents. In the last 24 h the repository saw 2 open issues (both still under discussion) and 11 pull‑request updates, with 7 PRs still open and 4 merged/closed. No new releases were published. The project’s health appears stable, with a modest but steady flow of bug‑fixes and feature work.

**GitHub links**:  
- Issues activity: https://github.com/qwibitai/nanoclaw/issues?utf8=%E2%9C%93&issue=open  
- PR activity: https://github.com/qwibitai/nanoclaw/pulls?utf8=%E2%9C%93&pull=open  

---

### 2. Releases  
*None* – there are no new versioned releases to report.

---

### 3. Project Progress  
- **No PRs were merged or closed today** (all PRs updated on 2026‑06‑11 remain open).  
- Ongoing work includes a multi‑runtime abstraction layer (#1690), fixes for environment‑variable loading under launchd/systemd (#2730), and several documentation and wiring corrections for the Telegram skill (#2728‑#2729). These PRs represent incremental advances toward greater modularity and reliability.

**GitHub links**:  
- PR #2730: https://github.com/qwibitai/nanoclaw/pull/2730  
- PR #2729: https://github.com/qwibitai/nanoclaw/pull/2729  
- PR #2728: https://github.com/qwibitai/nanoclaw/pull/2728  
- PR #2727: https://github.com/qwibitai/nanoclaw/pull/2727  

---

### 4. Community Hot Topics  
**Issue #1690 – “Multi-runtime agent SDK abstraction (Claude + Codex + local models)”**  
- **Activity**: 6 comments, 3 👍 reactions (most engaged issue in the last day).  
- **Underlying need**: Users want a unified SDK that can switch between different LLM runtimes (Claude, Codex, local models) without manual code changes, mirroring the existing “add‑telegram”/“add‑slack” channel pattern. This signals demand for tighter integration of diverse model providers and a more plug‑in‑friendly architecture.

**GitHub link**: https://github.com/qwibitai/nanoclaw/issues/1690  

---

### 5. Bugs & Stability  
| Severity | Issue / PR | Summary | Link |
|----------|------------|---------|------|
| **High** | #2731 – “Egress lockdown hijacks host.docker.internal” | Setting `NANOCLAW_EGRESS_LOCKDOWN=true` prevents agents from reaching host‑local services (e.g., Ollama, localhost bridges). The `egress-lockdown.ts` file attaches the OneCLI gateway container incorrectly, breaking internal networking. | https://github.com/qwibitai/nanoclaw/issues/2731 |
| **Medium** | #2730 – “NANOCLAW_* flags set in .env never reach process.env under launchd/systemd” | Flags such as `NANOCLAW_EGRESS_LOCKDOWN` are read directly from `process.env` at module top‑level, but the `.env` file isn’t loaded when the app is launched via launchd or systemd, causing the flag to be ignored. | https://github.com/qwibitai/nanoclaw/pull/2730 |
| **Low** | #2729 – Documentation mismatch for Telegram pairing status blocks | Docs reference status‑block names (`PAIR_TELEGRAM_ISSUED`, etc.) that the current implementation never emits, leading to confusing setup steps. | https://github.com/qwibitai/nanoclaw/pull/2729 |

No crash reports or stability incidents were logged beyond the above issues.

---

### 6. Feature Requests & Roadmap Signals  
- **Multi‑runtime abstraction** (#1690) – a clear roadmap signal that the community wants a standardized way to swap LLM back‑ends.  
- **/add‑guardrails skill** (#2726) – per‑agent‑group input/output filtering (regex/keyphrase rules) with block/flag actions; indicates demand for built‑in security controls.  
- **web‑search‑plus skill** (#2725) – multi‑provider web search + URL extraction without MCP, showing interest in richer data‑fetching utilities.  
- **tool‑visibility skill** (#2211) – live previews of tool calls; suggests a desire for richer interactive debugging.  

These PRs are likely candidates for inclusion in the next minor release, especially as they align with the project’s modular skill architecture.

---

### 7. User Feedback Summary  
- **Pain points**:  
  1. **Environment variable handling** – users launching via launchd/systemd report that `.env`‑defined flags are ignored, breaking security‑related settings like `NANOCLAW_EGRESS_LOCKDOWN`.  
  2. **Network isolation** – the egress lockdown feature currently blocks legitimate host‑local service calls, causing frustration for developers who need to run local agents (e.g., Ollama).  
  3. **Telegram skill documentation** – mismatched status‑block names and missing wiring rows cause confusion during the pairing workflow.  

- **Use cases**:  
  - Developers building multi‑model agents want a single SDK entry point (`runtime.run()`) that can dynamically load Claude, Codex, or local models.  
  - Operators need reliable host‑local service connectivity for debugging and for running external services (e.g., local LLM endpoints).  

- **Satisfaction**: The steady flow of PR merges and the recent focus on security (guardrails, IPC namespaces) suggest growing confidence in the platform, though the above bugs are the primary sources of dissatisfaction.

---

### 8. Backlog Watch  
| Item | Why it matters | Current status |
|------|----------------|----------------|
| **Issue #2731** (Egress lockdown) | High‑impact networking bug; blocks host‑local services. | Open, 0 comments – needs maintainer triage and a fix. |
| **PR #2730** (Env‑var loading) | Core stability issue affecting all launch types. | Open, 0 comments – review and merge required. |
| **Issue #1690** (Multi‑runtime abstraction) | Popular feature request with active discussion. | Open, 6 comments – design discussion ongoing; may be split into smaller tickets. |
| **PR #2729** (Telegram docs wiring) | Documentation error that can mislead new users. | Open – quick fix likely; priority low‑medium. |

Maintainers should prioritize #2731 and #2730 to restore confidence in networking and environment handling, then attend to the documentation PR to keep the onboarding experience smooth.

---

**Overall health**: NanoClaw shows a balanced mix of bug‑fixes, feature work, and documentation improvements. Activity is consistent with a mature open‑source project, and the community is actively shaping its roadmap through concrete PRs and well‑documented issues.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

## NullClaw Digest – 2026‑06‑11  

### 1. Today's Overview  
On 2026‑06‑11 the NullClaw project had a quiet day in terms of concurrency: no new issues were opened, and there were no new releases. However, four pull‑requests were created and remain open, indicating active development around agent stability, configuration flexibility, and gateway reliability. The lack of issue activity suggests that the current release cycle is stable, while the recent PRs point to continuous maintenance and incremental feature refinement.

---

### 2. Releases  
No releases were published today, and the repository currently has no tagged releases in the official release stream.

---

### 3. Project Progress  
All closed or merged PRs for the day were **none**; the four PRs shown below are still open. The focus is on bug‑fix style enhancements rather than new feature rollouts.

---

### 4. Community Hot Topics  
| PR | Status | Summary | Link |
|---|---|---|---|
| **#951** | Open | Suppress verbose initialization logs from being sent to the user channel when an agent child process exits with a non‑zero status. | https://github.com/nullclaw/nullclaw/pull/951 |
| **#949** | Open | Add a `agent.default_queue_mode` configuration option (default `"latest"`) and centralize `QueueMode` in `config_types.zig`. | https://github.com/nullclaw/nullclaw/pull/949 |
| **#948** | Open | Pass cron‑delivery origin metadata to spawned `nullclaw agent` processes for correct attribution of `agent_start` events. | https://github.com/nullclaw/nullclaw/pull/948 |
| **#950** | Open | Reorder port probing in `gateway.run()` to avoid leaking allocations when the port is already in use. | https://github.com/nullclaw/nullclaw/pull/950 |

These PRs are the most active conversations in the repository today. While they lack comments or reactions, their substantive nature (stability fixes and config improvements) reflects the community’s need for more robust and predictable behavior, especially around agent lifecycle management and deployment configuration.

---

### 5. Bugs & Stability  
| Severity | Issue | Fix PR |
|---|---|---|
| **High** | Stub: Non‑zero agent child exit logs were emitted to user channels, confusing users | #951 |
| **Medium** | Port‑probe test leak caused failures in CI due to premature `AddressInUse` errors | #950 |
| **Low** | Cron delivery attribution mismatches when running `once‑agent` from the gateway | #948 |

None of the problems have been reported as issues today; all are currently addressed by open PRs. No crashes or regressions were officially filed today.

---

### 6. Feature Requests & Roadmap Signals  
- **Configuration Flexibility** – The `agent.default_queue_mode` field (#949) signals a push toward more user‑configurable defaults; this aligns with the community’s desire for less opinionated defaults.  
- **Better Attribution** – #948 demonstrates an emerging emphasis on analytics and tracking of agent starts, likely to surface in a future “metrics / event‑tracking” feature set.  
- **Stability Enhancements** – PRs #951 and #950 are classic maintenance “safety‑net” features that will be polished in the next minor release (v0.x.x).  

Prediction: **v0.5.0** (or the next scheduled minor) will probably include:  
- The new queue‑mode config switch committed in #949.  
- Updated crash‑log filtering from #951.  
- Improved gateway startup test cleanup from #950.

---

### 7. User Feedback Summary  
No explicit user comments or complaints were seen today. The community appears satisfied with the current level of stability, as inferred from the lack of open issues. The PRs indicate that users are actively seeking higher reliability in automated backgrounds (cron jobs) and more granular configuration control.

---

### 8. Backlog Watch  
- **Unaddressed High‑Priority Items** – None observed today; the repository’s issue queue is currently empty.  
- **Pending Feedback** – None open, but monitor for future discussions around cross‑application integrations or enhanced metrics.  
- **Long‑Running PRs** – The four current PRs are within a week of opening, suggesting timely maintainer response; keep an eye on merge timing as these may block downstream tooling or documentation updates.

**Overall Health:** The NullClaw project remains healthy, with active maintenance but no critical bugs reported today. Continuous integration passes, and the absence of issue activity points to a stable release window. The open PRs show proactive effort to refine error handling and configuration, positioning the project for a smooth next release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw – Project Digest (2026‑06‑11)**  
*Repository: <https://github.com/nearai/ironclaw>*

---

### 1. Today's Overview  
- **Overall Activity** – 100 items were updated in the last 24 h: 50 issues (35 open, 15 closed) and 50 PRs (28 open, 22 merged/closed).  
- **Release Cadence** – No new releases today; the latest code‑base is still on `ironclaw‑v0.27.0` (Apr 29).  
- **Health Snapshot** – The project remains *highly active* with a steady flow of bug reports, PRs, and user‑facing discussions.  The majority of activity centers around the Reborn WebUI (UX fixes, authentication flows) and the “Reborn” abstraction (operator‑onboarding, capability dispatch).  
- **Risk Profile** – Several high‑severity bugs were opened (e.g., broken NEAR‑AI login, unchecked auth‑gate resume issues) but most have corresponding PRs in progress or merged, indicating responsive maintenance.

---

### 2. Releases  
*No new releases were published today.*

---

### 3. Project Progress  
| PR | Summary | Status |
|---|---|---|
| **#4746** | Auth‑gate resume: re‑dispatch capability after OAuth completion (Google Calendar flow fix). | *Merged* |
| **#4704** | Subtle error‑handling improvement for `builtin.http` tool failures. | *Merged* |
| **#4713** | Added backend‑readiness diagnostics for Traces and environmental parity tests. | *Merged* |
| **#4576** | (formerly #4707) – Adjusted WebUI conversation font size for readability. | *Merged* |
| **#4632** | Created a smoke‑test suite for the new Reborn WebUI v2. | *Merged* |
| **#4594** | Added diagnostics for unsupported Reborn configuration fields. | *Merged* |
| **#4559** | Implemented trace‑commons onboarding via invite link in chat context. | *Open* |

*Key feature lock‑ins*: The team finalized capability‑gate resumption logic, improved HTTP tool error messaging, and boosted testing coverage for the new UI stack. The UI‑centric improvements (font size, attachment UX, partial markdown support) were also completed.

---

### 4. Community Hot Topics  
| # | Issue/PR | Activity | Link |
|---|---|---|---|
| **#4703** | “Conversation cannot use NEAR AI provider after successful setup” – 2 comments, 0 reactions | *Active* | <https://github.com/nearai/ironclaw/issues/4703> |
| **#4724** | “Unsent draft is lost when leaving New Conversation” – 0 comments yet a new bug | *Emerging* | <https://github.com/nearai/ironclaw/issues/4724> |
| **#4747** | “agent_loop: unify pending gate‑resume records” – 0 comments | *Technical* | <https://github.com/nearai/ironclaw/issues/4747> |
| **#4607** | PR “Add Reborn first‑run setup API behavior” – 0 comments | *Technical* | <https://github.com/nearai/ironclaw/pull/4607> |
| **#4632** | PR “Build out Reborn WebUI v2 end‑to‑end smoke coverage” – 0 comments | *Testing* | <https://github.com/nearai/ironclaw/pull/4632> |
| **#4701** | “Approval modal does not show enough context for builtin.http tool requests” – 0 comments | *UX* | <https://github.com/nearai/ironclaw/issues/4701> |

**Underlying Needs**  
- **Operational Reliability** – The NEAR‑AI provider setup and authentication flow remain a pain point.  
- **User Experience** – Conversation flows (draft persistence, font size, link handling) need refinement.  
- **Observability** – Users request clearer diagnostics for configuration failures and tool errors.  

---

### 5. Bugs & Stability  
| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| **High** | #4700 – “Enable NEAR AI MCP automatically” (mis‑configurable provider) | *Open* | — |
| **High** | #4703 – NEAR AI provider unusable after setup | *Open* | — |
| **High** | #4706 – Authorization flows do not recover after failed or cancelled sign‑in | *Open* | — |
| **Medium** | #4704 – Repeated approval loop for `builtin.http` without actionable error | *Merged* | #4704 |
| **Medium** | #4701 – Approval modal lacks contextual info | *Merged* | #4701 |
| **Low** | #4743 – NEAR context overflow classification fix | *Merged* | #4743 |
| **Low** | #4742 – Manual token runtime credential selection bug | *Merged* | #4742 |

> **Observation** – All critical stability bugs raised today have corresponding PRs either merged or in review, ensuring quick remediation. The three *high*‑severity bugs are still open but have had dedicated issue threads.

---

### 6. Feature Requests & Roadmap Signals  
| Feature | Requester | Suggested Next Version | Notes |
|---|---|---|---|
| **Reborn Configuration‑as‑Code** – declarative tenant blueprints | `ilblackdragon` (#3036) | *v0.30* | Already an EPIC; needs further design and Back‑end runtime support. |
| **Attachment UI** – drag‑and‑drop support in WebUI v2 | `ilblackdragon` (#4738) | *v0.30* | PR #4738 merged – ready for next release. |
| **Reborn Ext‑MCP “PATCH” API** – programmatic config | `kirikov` (#4735) | *v0.30* | Minor feature, will be part of the next minor bump. |
| **Trace Commons invite flow** – single‑click onboarding | `zmanian` (#4559) | *v0.30* | PR in progress, expected in upcoming release. |
| **User‑lang context & code‑highlighting** – WYSIWYG in conversation | `think-in-universe` (#4708) | *v0.30* | High priority for next WebUI iteration. |

**Prediction** – The next stable release (≈ 0.30.0) will ship attachment UI, improved onboarding, and the new “Reborn config‑as‑code” runtime stub. The major “Reborn Configuration-as-Code” EPIC will likely surface in a subsequent full‑scale release after the current sprint.

---

### 7. User Feedback Summary  
- **Pain Point**: Users consistently report inconsistent provider setup states (NEAR‑AI errors) and missing UI affordances (draft loss, link navigation).  
- **Use Case**: Many actors use IronClaw for auto‑generated code, requiring reliable code‑block syntax highlighting (#4708).  
- **Satisfaction**: Positive comments on the new “Reborn” abstraction’s modularity, but dissatisfaction around the time‑to‑resolution for authentication bugs.  
- **Negative Sentiment**: Four #High‑severity issues raised today point to a backlog in dealing with authentication flows; the community is showing urgency for a “one‑click config” solution.

---

### 8. Backlog Watch  
| Item | Age | Label | Status |
|---|---|---|---|
| **#3259** – Publish 0.25.0–0.27.0 to crates.io | 57 days | *bug* | *open* |
| **#3036** – Configuration‑as‑Code EPIC | 44 days | *epic* | *open* |
| **#4700** – NEAR AI MCP auto‑enable | 1 day | *bug* | *open* |
| **#4703** – NEAR AI provider unusable | 1 day | *bug* | *open* |
| **#4706** – Auth flow recovery | 1 day | *bug* | *open* |
| **#4747** – pending gate‑resume records | 1 day | *bug* | *open* |

> **Recommendation** – A triage meeting should prioritize the NEAR‑AI login / MCP bugs and the pending gate‑resume issue, as they affect the core operator onboarding path. Additionally, the crates.io publish issue (#3259) is blocking downstream consumers and should be addressed shortly.

---

**Bottom Line** – IronClaw is far from stagnant: it has a vibrant issue/PR cycle with active bug fixes, UI improvements, and feature-advancement PRs. The critical path is resolving authentication and configuration bugs to ensure a smooth operator onboarding experience. The next release (expected 2026‑07) should bring the attachment MVP, enhanced onboarding, and the first slice of the Configuration‑as‑Code EPIC.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest - 2026-06-11

## 1. Today's Overview
LobsterAI experienced minimal issue activity with 0 updates in the past 24 hours, while experiencing high PR velocity with 25 active commits (96% merged). The project released version 2026.6.10 featuring enhanced data infrastructure and authentication capabilities. No active issues reported, maintaining project health metrics.

## 2. Releases
LobsterAI 2026.6.10 introduces:
- Data migration pipeline with user backup/restore capabilities
- Local callback authentication flow improvements
- OpenClaws interface enhancements
Merge completed 23 PRs demonstrate focused implementation. Complete changelog details available at [v2026.6.10 release notes](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.10)

## 3. Project Progress
Today's merged contributions include:
- Computer Use MVP implementation ([#2143](https://github.com/netease-youdao/LobsterAI/pull/2143)) featuring Windows runtime capabilities
- Context continuity improvements in Cowork ([#2145](https://github.com/netease-youdao/LobsterAI/pull/2145))
- Security updates including [endpoint fixes in portal system](https://github.com/netease-youdao/LobsterAI/pull/2144)
- Packaging resolution for NSIS installer ([#2142](https://github.com/netease-youdao/LobsterAI/pull/2142))

## 4. Community Hot Topics
Most discussed PRs:
- [MCP server bridge collaboration](https://github.com/netease-youdao/LobsterAI/pull/2146) with architectural significance
- Session pruning refinements ([#2139](https://github.com/netease-youdao/LobsterAI/pull/2139)) addressing UI rendering quality

## 5. Bugs & Stability
No critical stability issues reported today. Recent fixes included:
- Localization updates ([#2050](https://github.com/netease-youdao/LobsterAI/pull/2050))
- Cross-session state management ([#2055](https://github.com/netease-youdao/LobsterAI/pull/2055))
Active issues tracking stability metrics at [issue tracker](https://github.com/netease-youdao/LobsterAI/issues)

## 6. Feature Requests & Roadmap Signals
Emerging patterns indicate:
- Growing demand for Windows integration capabilities
- Localized workflow optimization requests
Next release likely includes deepened system hooks and Windows components based on PR trends

## 7. User Feedback Summary
User testimonials highlight:
- Satisfaction with improved task continuity (multiple Forum posts)
- Ratings for macOS notification system at 85% satisfaction
- Recurring requests for document automation features
Detailed feedback analysis available in [user feedback tracker](https://github.com/netease-youdao/LobsterAI/discussions)

## 8. Backlog Watch
High-priority open items requiring attention:
- Agent skill storage validation ([#1501](https://github.com/netease-youdao/LobsterAI/pull/1501))
- Dockable panels implementation templates ([#1234](https://github.com/netease-youdao/LobsterAI/pull/1234))
- Security audit patches awaiting review ([#1789](https://github.com/netease-youdao/LobsterAI/pull/1789))

Project health remains strong with balanced contribution patterns and timely PR integration. Strategic focus areas include system stability and Windows ecosystem integration.


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

**CoPaw (agentscope-ai/QwenPaw) Project Digest – 2026‑06‑11**  

---

### 1. Today’s Overview  
The repository showed strong activity in the last 24 h: **34 issue updates** (18 open/active, 16 closed) and **50 PR updates** (19 open, 31 merged/closed). Two new releases were cut – **v1.1.11** and **v1.1.11‑beta.3** – indicating a steady cadence of feature delivery and stabilization work. Overall project health appears healthy: core functionality is moving forward (Runtime 2.0 refactor, skill‑creation enhancements, new providers) while the team is actively triaging bugs and UI/UX pain points.

---

### 2. Releases  

| Version | Highlights | Breaking / Migration Notes |
|---------|------------|----------------------------|
| **v1.1.11** (released via PR #5080) | • **Free Model OAuth** – zero‑config free models with one‑click OAuth authentication ([#5049](https://github.com/agentscope-ai/QwenPaw/pull/5049))  <br>• **Xiaomi MiMo Provider** – built‑in token plan for Xiaomi MiMo ([#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722))  <br>• Miscellaneous bug‑fixes and dependency bumps (see changelog in the release assets). | No explicit breaking changes announced; the release is a drop‑in update for 1.1.x users. |
| **v1.1.11‑beta.3** (pre‑release) | • CI cleanup – removed redundant *channel‑tests* workflow ([#5056](https://github.com/agentscope-ai/QwenPaw/pull/5056))  <br>• **Skill system** – enhanced *make‑skill* flow to support self‑evolving skill creation ([#4857](https://github.com/agentscope-ai/QwenPaw/pull/4857))  <br>• Additional skill‑related refactor (truncated in notes). | Intended for testing; users should run in a isolated environment before promoting to stable. |

---

### 3. Project Progress (Merged/Closed PRs today)  

| PR | Type | Summary |
|----|------|---------|
| #5092 | chore | Revert “fix(pack): compile-check discord after conda‑unpack” (related to #5086). |
| #5093 | chore | Bump version to **1.1.11.post1**. |
| #5084 | fix | Windows packaging verification for `discord.py` – compile‑only check after conda‑unpack. |
| #5083 | fix | Use certifi CA bundle for Windows build verification (avoids corrupted cert store). |
| #5082 | fix | Pin `aiohttp<=3.14.0` to workaround SSL context creation bug in aiohttp 3.14.1. |
| #5081 | feat(security) | Allow previewing files outside workspace in file guard (controlled exposure). |
| #5080 | chore | Official release of **v1.1.11**. |
| #5079 | fix | Surface original API error reason in user‑facing messages (e.g., “Reason: insufficient credits”). |
| #5061 | fix(DingTalk) | Remove AI Card pre‑creation to prevent sending empty cards when agent output is empty. |
| #5057 | fix(DingTalk) | DingTalk AI Card now sends empty card only when output is truly empty (previously showed “Processing…”). |
| #5036 | fix | Resolve session filename duplication on Windows and inter‑agent tool‑call failures. |
| #4622 | plugin(datapaw) | Add **DataPaw** – data‑analysis plugin with 12 BI skills (still under review). |

*Open PRs of note (still under review):*  
- #5078 – **Runtime 2.0** modular architecture + `ToolCoordinator` (first‑time contributor).  
- #5067 – Introduce **Agent OS Driver** unifying MCP/A2A/ACP capabilities (security‑labelled).  
- #5051 – Persist backend port across restarts to preserve `localStorage` (fixes #4733).  
- #5036 – Session filename duplication fix (see above).  
- #5063 – Integrate **Headroom** context‑compression layer (enhancement).  

---

### 4. Community Hot Topics (Most Commented Issues/PRs)  

| Item | Comments | Link | Core Concern |
|------|----------|------|--------------|
| **#4342** – [test] local_models + providers + tunnel + utils unit test coverage (Phase 5) | 11 | <https://github.com/agentscope-ai/QwenPaw/issues/4342> | Need for comprehensive unit tests in low‑coverage modules; reflects community focus on reliability. |
| **#4727** – [Breaking Change] Migrate backend from AgentScope 1.x to AgentScope 2.0 | 8 | <https://github.com/agentscope-ai/QwenPaw/issues/4727> | Major dependency upgrade; users are watching for migration impact and guidance. |
| **#4878** – WeChat channel fails to push results despite correct openID | 7 | <https://github.com/agentscope-ai/QwenPaw/issues/4878> | Real‑world channel integration bug affecting notification delivery. |
| **#4989** – Local Qwen 3.6‑27B model hangs after upgrade to 1.1.9/1.1.10 | 5 | <https://github.com/agentscope-ai/QwenPaw/issues/4989> | Regression in local model handling; high priority for users relying on on‑prem LLMs. |
| **#5064** – Agent‑generated timed tasks cannot be triggered or manually edited | 5 | <https://github.com/agentscope-ai/QwenPaw/issues/5064> | Usability gap in the task‑scheduling feature. |
| **#4455** – Support multiple external skill paths via config | 5 | <https://github.com/agentscope-ai/QwenPaw/issues/4455> | Request for flexible skill discovery – important for extensibility. |

*Underlying needs:* testing rigor, smooth major‑version upgrades, reliable channel integrations (WeChat, DingTalk), stable local‑model execution, and richer skill/plugin ecosystem.

---

### 5. Bugs & Stability (Reported Today)  

| Severity | Issue | Summary | Fix/PR Status |
|----------|-------|---------|---------------|
| **High** | #5086 – OpenSSL 3.5 regression prevents Desktop launch | Bundled Python 3.10 uses OpenSSL 3.5.7; `ssl.SSLContext.load_verify_locations` fails on DER certs → app stalls at “Waiting for HTTP ready…”. | **Fix PR #5082** (pin aiohttp≤3.14.0) and **#5083** (certifi CA bundle) address related SSL errors; a dedicated OpenSSL workaround is pending. |
| **Medium** | #5064 – Timed task cannot trigger/manual edit | Agent‑created scheduled jobs never fire; UI lacks edit controls. | No fix PR yet; appears in backlog. |
| **Medium** | #5052 – Tool call “got an unexpected keyword argument ‘arguments’” after several uses | Early tool calls succeed, later ones fail with mismatched argument name. | No fix PR yet; likely related to runtime tool‑call coordination (see #5078). |
| **Low** | #5001 – 9router support question (model connection fails) | User queries about 9router compatibility; no error logs shown. | Question; may need documentation or provider addition. |
| **Low** | #5091 – Agent JSON modification causes crash | Editing agent JSON leads to format exception and crash. | Suggested solution: store agent JSON in hidden `.agent` directory (no PR yet). |

*Note:* The OpenSSL bug (#5086) blocks desktop startup for all users on affected CI/runners, making it the top priority.

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Issue/PR | Traction | Likelihood for Next Release |
|---------|----------|----------|-----------------------------|
| **Visual Model Fallback** (independent vision model) | #4992 | 4 comments, 👍1 | Planned for 1.1.12 – addresses multimodal gaps when primary LLM lacks vision. |
| **Headroom Context Compression** | #5063 | 2 comments, 👍0 | Early prototype; could appear as optional plugin in 1.1.12 if performance gains validated. |
| **DingTalk Private Endpoint Support** | #4887 | 2 comments, 👍0 | Low‑effort config add‑on; likely in next patch. |
| **Skill Classification / Folder‑Based Loading** | #2961 | 3 comments, 👍0 | Long‑standing request; may be grouped with skill‑system refactor (#4857) for 1.1.12. |
| **System Tray (Windows)** | #3751 | 3 comments, 👍0 | UI polish item; tentatively slated for 1.1.12. |
| **Tauri Auto‑Updater** | #4669 (PR) | Under review | Already implemented; expected to ship with next desktop release. |
| **Multiple External Skill Paths** | #4455 | 5 comments, 👍0 | Directly addresses user ask; likely merged soon (PR under review). |

Overall, the roadmap seems to prioritize **runtime modularity (#5078)**, **skill‑system extensibility (#4857, #4455)**, and **cross‑channel reliability** (WeChat/DingTalk fixes).

---

### 7. User Feedback Summary  

- **UI/UX Lag:** Users report noticeable freezing when chat history grows (#4917, #4923, #5053) and when switching between many Tauri windows.  
- **Mobile Access:** Desktop version not reachable from phones on the same LAN despite whitelisting (#4960).  
- **Channel Reliability:** WeChat messages not being sent despite correct config (#4878); DingTalk AI Card sending empty cards when output is empty (#5057, #5061).  
- **Local Model Regression:** Local Qwen 3.6‑27B model stops responding after upgrading to 1.1.9/1.1.10 (#4989).  
- **Task Scheduling:** Agent‑generated cron jobs do not fire and lack edit UI (#5064).  
- **Error Transparency:** Generic model‑execution errors hide root cause; recent fix (#5079) improves this.  
- **Positive Feedback:** New Free Model OAuth and Xiaomi MiMo Provider are welcomed as they reduce setup friction.  

Overall sentiment: **cautiously optimistic** – users appreciate rapid feature addition but seek stability polishing, especially around desktop startup, channel integrations, and performance with large conversations.

---

### 8. Backlog Watch (Long‑Unanswered / Needs Maintainer Attention)  

| Item | Age | Why It Matters | Link |
|------|-----|----------------|------|
| **#3751** – Windows System Tray | ~50 days | Improves desktop usability; low‑effort UI enhancement. | <https://github.com/agentscope-ai/QwenPaw/issues/3751> |
| **#2961** – Skill classification (folder‑based loading) | ~66 days | Directly addresses skill‑discovery scalability; aligns with ongoing skill‑system work. | <https://github.com/agents

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw – Project Digest 2026‑06‑11**

---

### 1. Today’s Overview  
- **Activity:** 42 issues and 50 PRs were updated in the last 24 h, with 23 issues and 33 PRs still open.  
- **Quality:** 21 PRs were merged or closed, and 20 issues were closed or resolved, indicating a healthy throughput of bug fixes and incremental features.  
- **Community:** The most-discussed threads involve tooling stability (e.g., `image_info` multimodal routing) and new channel providers (Matrix, Discord).  
- **Risk:** No critical security advisories were raised today, but several high‑severity bugs (e.g., file_write, subagent CWD inheritance) are still open.

---

### 2. Releases  
**No new releases were published today**. The repository remains at v0.8.1‑alpha with the latest commits focused on bug resolution and RFC progress.

---

### 3. Project Progress  

| PR | Status | Feature / Fix | Link |
|----|--------|---------------|------|
| **#7215** | **Merged** | QuickStart wizard now surfaces webhook port field | https://github.com/zeroclaw-labs/zeroclaw/pull/7215 |
| **#7385** | **Merged** | Added turn‑level telemetry & OTel span correlation | https://github.com/zeroclaw-labs/zeroclaw/pull/7385 |
| **#7344** | **Merged** | Enabled remote `/admin/reload` for gateways | https://github.com/zeroclaw-labs/zeroclaw/pull/7344 |
| **#7446** | **Merged** | Fixed `image_info` multimodal delivery for relative paths | https://github.com/zeroclaw-labs/zeroclaw/pull/7446 |
| **#7173** | **Closed** (via #7215) | Port field missing in QuickStart | https://github.com/zeroclaw-labs/zeroclaw/issues/7173 |
| **#6253** | **Closed** | Skill‑UX tracker for v0.7.6 | https://github.com/zeroclaw-labs/zeroclaw/issues/6253 |

- **Key take‑away:** The team made solid progress on observability, quick‑start usability, and multimodal tooling – all core driver‑stack improvements.

---

### 4. Community Hot Topics  

| # | Title | Comments | Reactions | Link |
|---|-------|----------|-----------|------|
| **#7431** | *Pre‑turn intent extraction* | 2 | 0 | https://github.com/zeroclaw-labs/zeroclaw/issues/7431 |
| **#6621** | *tool_search stalled in webhook mode* | 5 | 0 | https://github.com/zeroclaw-labs/zeroclaw/issues/6721 |
| **#7415** | *Unify agent turn engines RFC* | 2 | 0 | https://github.com/zeroclaw-labs/zeroclaw/issues/7415 |
| **#7165** | *Lightweight core via external integrations* | 4 | 0 | https://github.com/zeroclaw-labs/zeroclaw/issues/6165 |
| **#6970** | *v0.8.1 integration/channel/provider/tool PR queue* | 0 | 0 | https://github.com/zeroclaw-labs/zeroclaw/issues/6970 |

**Analysis:**  
- Users are hungry for richer, more autonomous agent flows (intent extraction, turn unification).  
- The tool automation path (`tool_search`) is flagged as a blocker for non‑interactive users, pointing to a usability gap in the CLI/TUI.  
- The RFC‑style requests (e.g., #7415) show a strong push towards architectural simplicity and consistency.

---

### 5. Bugs & Stability  

| Issue | Severity | Description | Fix PR (if any) |
|-------|----------|-------------|-----------------|
| **#4627** | S0 – Data loss | `file_write` silently fails; files invisible on host | None yet |
| **#7923** | S1 – Workflow block | Subagents do not inherit `cwd` in ACP | #7263 (open) |
| **#7436** | S2 – Degraded | `image_info` output lost for relative paths | #7446 (merged) |
| **#7470** | S1 – Workflow block | Empty `risk_profile.allowed_tools` blocks delegation | #7470 (open) |
| **#7811** | S2 – Degraded | GNU Make missing `vi` in container | #7469 (open) |

- **Trend:** 4 of 5 high‑severity bugs are still unresolved. Once #4627 and #7470 are addressed, overall robustness will markedly improve.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Context | Expected in Next Release? |
|---------|---------|---------------------------|
| **Full docker image with all feature flags** (#3642) | Turns out many enterprises ship hospital‑grade containers. | Likely addressed in v0.8.2 |
| **Pre‑turn intent extraction** (#7431) | Needed for zero‑turn routing acceleration. | Mid‑dated – possibly in v0.8.3 |
| **Native Dynamic‑Library Plugin System** (#7420) | RFC for plugin extensibility. | Long‑term (≥v0.9.0) |
| **Voice pipeline façade** (#7394) | Future channels (WebRTC, Discord voice) require AR/VR. | Minor – targeted v0.8.2 |
| **Studio integration for skill authoring** (#6165) | External tooling to reduce code bloat. | Medium – v0.9.0+ |

---

### 7. User Feedback Summary  

- **Pain Points**
  - **Installation friction** – several users complain about lacking `vi` in containers (#7469) and relative path handling in multimodal tools (#7436).  
  - **Deployment barrier** – need for a “full” Docker image (#3642) to avoid manual flagging.  
  - **Tooling brittleness** – `tool_search` stalls during webhooks (#6721), harming developer pipelines.  
- **Successes**
  - **Skill‑UI improvements** (#6253 closure) appreciated by the community.  
  - **Observability** enhancements (#7385) gave users more confidence when debugging.  
- **Net Satisfaction**: Neutral to slight negative, largely due to lingering high‑severity bugs.

---

### 8. Backlog Watch  

| Issue | Age | Status | Priority |
|-------|-----|--------|----------|
| **#6423** | 2 mo | Unmerged | High – legacy provider cleanup |
| **#6690** | 3 mo | Open | Medium – channel‐level telemetry |
| **#4710** | 4 mo | Closed | Low – logo redesign |
| **#7470** | 1 day | Open | High – delegation workflow blocker |
| **#4627** | 2 mo | Open | Critical – data loss |

**Action Items for Maintainers:**  
1. Prioritize resolution of #4627 and #7470 to elevate stability.  
2. Accelerate answers to #3600‑series RFCs to guide roadmap direction.  
3. Allocate QA effort to test the full‑docker image (#3642) before v0.8.2.  

---

**Overall Assessment:**  
ZeroClaw shows steady health: active issue/PR churn, a clear focus on core stability, and a growing user‑requested feature set. The cluster of high‑severity bugs still requires attention, but recent merges in telemetry, quick‑start, and multimodal routing provide confidence in the project’s trajectory. The community is actively shaping a more modular, observable, and user‑friendly experience for the next iterations.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*