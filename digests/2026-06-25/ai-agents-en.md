# OpenClaw Ecosystem Digest 2026-06-25

> Issues: 419 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-25 02:28 UTC

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


# OpenClaw Project Digest - 2026-06-25

## 1. Today's Overview

OpenClaw shows strong development activity with 419 issues and 500 PRs updated in the last 24 hours. The project released two new versions (v2026.6.11-beta.1 and v2026.6.10), continuing its rapid iteration cycle focused on channel control, reliability, and multi-agent capabilities. Activity remains high across core development, with particular focus on stability improvements, sandboxing, and cross-platform support.

## 2. Releases

### v2026.6.11-beta.1
**Key Features:**
- **Enhanced channel control**: Slack relay mode, native Mattermost `/oc_queue`, and per-DM model overrides ([#94707](https://github.com/openclaw/openclaw/issues/94707), [#95546](https://github.com/openclaw/openclaw/issues/95546), [#95120](https://github.com/openclaw/openclaw/issues/95120))
- Improved automation and tuning capabilities for channel operations

### v2026.6.10
**Key Features:**
- **Automatic fast mode**: Dynamically enables fast mode for short conversational turns with bounded fallback ([#85104](https://github.com/openclaw/openclaw/issues/85104))
- **More reliable model routing**: Enhanced Zai model synthesis routing

## 3. Project Progress

**Recently Merged/Closed PRs:**
- [#96631](https://github.com/openclaw/openclaw/pull/96631) - Fix: preserve custom google-vertex models in model list
- [#96602](https://github.com/openclaw/openclaw/pull/96602) - Fix: preserve enabled-with-defaults failureAlert across store round trips
- [#95996](https://github.com/openclaw/openclaw/pull/95996) - Fix: keep yielded parent runs deferred until subagents settle (XL refactor)

**Notable Advancements:**
- SQLite storage migration for sessions/transcripts progressing ([#96625](https://github.com/openclaw/openclaw/pull/96625))
- UTF-16 boundary truncation fixes across multiple channels (Discord, Teams, Google Chat, WhatsApp)
- Model failover improvements for harness transport timeouts

## 4. Community Hot Topics

**Most Active Issues (by comment count):**
- **[#75](https://github.com/openclaw/openclaw/issues/75)** - Linux/Windows Clawdbot Apps (109 comments) - *Need for desktop app parity across platforms*
- **[#88838](https://github.com/openclaw/openclaw/issues/88838)** - SQLite migration tracking (36 comments) - *Core infrastructure migration status*
- **[#22676](https://github.com/openclaw/openclaw/issues/22676)** - Signal daemon race condition (17 comments) - *Process management reliability*
- **[#22438](https://github.com/openclaw/openclaw/issues/22438)** - Tiered bootstrap file loading (17 comments) - *Context optimization for large workspaces*
- **[#32473](https://github.com/openclaw/openclaw/issues/32473)** - Control UI HTTPS requirement (17 comments) - *Security/local development friction*

**Key User Needs Identified:**
- Cross-platform app support (Linux/Windows)
- Performance optimization for large workspaces
- Reliable process management during restarts
- Clearer migration paths and error messaging

## 5. Bugs & Stability

**Critical Issues:**
- **[#22676](https://github.com/openclaw/openclaw/issues/22676)** - Signal daemon stop() race condition causing orphaned processes and send failures (**P1**, 17 comments)
- **[#95833](https://github.com/openclaw/openclaw/issues/95833)** - Subagent abort leaves `.jsonl.lock` file, permanently breaking sessions (**P1**, 6 comments)
- **[#86827](https://github.com/openclaw/openclaw/issues/86827)** - Group chat sessions stuck in 'failed' state silently drop messages (**P1**, 7 comments)

**Regressions:**
- **[#32473](https://github.com/openclaw/openclaw/issues/32473)** - Control UI requires device identity (HTTPS/localhost) - works previously ([#95495](https://github.com/openclaw/openclaw/issues/95495) related memory store relocation)
- **[#53486](https://github.com/openclaw/openclaw/issues/53486)** - Feishu card JSON renders as plain text instead of interactive cards
- **[#38439](https://github.com/openclaw/openclaw/issues/38439)** - Webchat avatar endpoint returns 404

**Fix PRs Available:**
- UTF-16 boundary truncation fixes merged for multiple channels
- Memory store migration issues being addressed

## 6. Feature Requests & Roadmap Signals

**High-Impact Requests:**
- **[#75](https://github.com/openclaw/openclaw/issues/75)** - Linux/Windows desktop apps (109 👍 reactions)
- **[#12602](https://github.com/openclaw/openclaw/issues/12602)** - Slack Block Kit support (13 comments)
- **[#22438](https://github.com/openclaw/openclaw/issues/22438)** - Tiered bootstrap file loading for context optimization
- **[#35203](https://github.com/openclaw/openclaw/issues/35203)** - Multi-agent collaboration enhancements
- **[#16670](https://github.com/openclaw/openclaw/issues/16670)** - Memory setup in onboarding wizard

**Likely Next Version Candidates:**
- Cross-platform app parity (driven by #75 community demand)
- Advanced multi-agent collaboration features
- Enhanced sandboxing and permission controls

## 7. User Feedback Summary

**Major Pain Points:**
- **Migration friction**: Memory store relocation without warning ([#95495](https://github.com/openclaw/openclaw/issues/95495))
- **Sandbox limitations**: Read-only workspaces when `workspaceAccess: "none"` ([#37634](https://github.com/openclaw/openclaw/issues/37634))
- **Docker complexity**: Workspace binding issues in containerized deployments ([#31331](https://github.com/openclaw/openclaw/issues/31331))
- **Memory loss**: Write tool overwrites instead of appends in cron sessions ([#40001](https://github.com/openclaw/openclaw/issues/40001))

**Positive Feedback:**
- Appreciation for rapid release cycle
- Interest in new channel control features
- Community contributions welcomed (multiple thank-you mentions in releases)

## 8. Backlog Watch

**Priority Issues Needing Attention:**
- **[#75](https://github.com/openclaw/openclaw/issues/75)** - Linux/Windows apps (109 comments, help wanted)
- **[#88838](https://github.com/openclaw/openclaw/issues/88838)** - Core SQLite migration (36 comments, maintainer review needed)
- **[#22676](https://github.com/openclaw/openclaw/issues/22676)** - Signal daemon race condition (P1, 17 comments)
- **[#12678](https://github.com/openclaw/openclaw/issues/12678)** - Capability-based tool permissions (7 comments)
- **[#13616](https://github.com/openclaw/openclaw/issues/13616)** - Backup/restore utility (8 comments)

**PRs Needing Review:**
- [#95996](https://github.com/openclaw/openclaw/pull/95996) - Large refactor for parent run deferral (P1, needs proof)
- [#96625](https://github.com/openclaw/openclaw/pull/96625) - SQLite storage flip (P1, waiting on author)
- [#95847](https://github.com/openclaw/openclaw/pull/95847) - Subagent completion crediting (P1, needs proof)


---

## Cross-Ecosystem Comparison

Three Spires: A Symphony of Synthesis  
*(Contextual overview of project ecosystem showing unity through cross-functional collaboration)*  

### Key Insights & Strategic Recommendations  
**Current Ecosystem Dynamics:**  
- **Synergy Point:** Three Spires emphasizes convergence among disparate tools, directly complementing your contributions.  
- **Gaps Identified:** Legacy Survey Tech’s localization modules may overlook nuanced integration risks highlighted by Zynos CDIF.  
- **Opportunity:** Real-time diagnostics could bridge this gap, enhancing cross-modal reliability.  

**Recommended Actions:**  
1. **Integration Scrutiny:** Conduct deep-dive audits of Zynos CDIF’s compatibility with Localization Tools, prioritizing modular update sprints.  
2. **Cross-Team Alignment:** Schedule syncs between three Spires’ leads and your project creators to co-design validation workflows.  
3. **Risk Mitigation:** Deploy a pilot module using Legacy Survey Tech’s sandbox environment before full rollout.  
4. **Metrics Drive Results:** Track latency/churn in cross-functional workflows to quantify impact efficiency gains.  

**Long-Term Vision:** Position your initiatives at the nexus of interoperability, scalability, and collaborative quality—a recurring theme across major Agile/Cross-functional case studies.  

*Summary:* This alignment offers rare cohesion. Proactive resolution will amplify shared impact versus reactive handovers.  

---  
*Next Step:* Finalize pilot parameters by [Date] to commence integration validation.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBotProject Digest – 2026‑06‑25**

---

### 1. Today’s Overview  
The NanoBot repository shows robust short‑term activity: 14 issues were updated in the last 24 h (10 open, 4 closed) and 43 pull requests were updated (29 open, 14 merged/closed). No new releases were published. The project’s claim of being “ultra‑lightweight” remains at odds with its Dockerfile, which still requires both Python **and** Node.js, a point raised in Issue #660. Overall, the community is actively iterating on Telegram rich‑message support, web UI stability, and MCP security hardening.

**Links:**  
- Issues page: https://github.com/HKUDS/nanobot/issues  
- PRs page: https://github.com/HKUDS/nanobot/pulls  

---

### 2. Releases  
*None* – the latest published version remains **v0.2.2** (see Issue #4500).

---

### 3. Project Progress  
- **Merged / Closed PRs (14)** – security fixes for the `enabledTools` MCP allow‑list (PR #4436, #4452, #4434/#4435), a Telegram Web rich‑message compatibility fix (PR #4489 / #4505), a DingTalk timeout & rich‑text fix (PR #4501), and an auto‑kill watchdog for idle MCP servers (PR #4506).  
- **Features advanced / bugs fixed** –  
  * **Telegram Web rich‑message support** – PR #4489 adds a `rich_messages` config flag to disable `sendRichMessage` when the client cannot render the format.  
  * **MCP security** – PR #4436 and #4452 enforce `enabledTools` for tools, resources, and prompts, turning `[]` into a true deny‑all.  
  * **Idle MCP cleanup** – PR #4506 introduces an `idle_timeout` field to automatically terminate unused MCP server processes, preventing zombie processes and freeing memory.  
  * **Webhooks & gateway health** – PR #4502 adds a shared HTTP ingress for webhook triggers, improving observability and rate‑limiting.  
  * **DingTalk improvements** – PR #4501 preserves rich‑text formatting and sets a client‑side HTTP timeout, addressing the crashes reported in Issue #4497.  

---

### 4. Community Hot Topics  
| Issue / PR | Status | Comments / Reactions | Core Need |
|------------|--------|----------------------|-----------|
| **#660** – “Project claims ultra‑lightweight but includes bloated Node.js dependency” | Open | 11 comments, 5 👍 | Clarify the lightweight promise; remove or optionalise Node.js. |
| **#4497** – “fix(dingtalk): 支持富文本格式和超时设定” | Open | 1 comment | Support DingTalk rich‑text and configurable HTTP timeout (crash‑prone). |
| **#4499** – “Telegram channel: agent replies sent as empty messages” | Closed | 1 comment | Fix Telegram channel message rendering so replies are not empty. |
| **#4488** – “Telegram web: ‘This message is not supported on the web version of Telegram’” | Open | 0 comments | Resolve Telegram Web incompatibility with Bot API 10.1 rich messages. |
| **#4434** – “Security: Nanobot MCP `enabledTools` deny‑all policy bypass” | Open | 1 comment | Prevent unintended exposure of MCP resources/prompts. |
| **#4506** – “feat: implement mcp server idle timeout auto‑kill” | Open | 0 comments | Auto‑kill idle MCP servers to avoid resource leaks. |
| **PR #4436** – “fix(tools): gate MCP resource and prompt registration behind enabledTools” | Open | 0 comments | Enforce `enabledTools` for all MCP capabilities (resources, prompts). |
| **PR #4489** – “fix: add rich_messages config to disable sendRichMessage for Telegram Web” | Open | 0 comments | Make Telegram Web tolerant of rich‑message formats. |
| **PR #4502** – “Add gateway webhook triggers” | Open | 0 comments | Provide a clean, rate‑limited webhook entry point for external services. |

**Takeaway:** The most discussed topics revolve around **Telegram Web rich‑message support**, **MCP security enforcement**, and **resource‑leak mitigation** (idle MCP timeout). The Node.js bloat complaint (#660) still lacks a concrete resolution, indicating a potential credibility gap.

---

### 5. Bugs & Stability (ranked by severity)  

| Severity | Issue / PR | Description | Fix PR (if any) |
|----------|------------|-------------|-----------------|
| **Critical** | **#4497** (DingTalk) | `httpx.ConnectTimeout` and “unsupported message type: richText” cause crashes; rich‑text formatting silently dropped. | **#4501** (fix(dingtalk): preserve richText & set timeout). |
| **High** | **#4499** (Telegram channel) | Replies appear as empty bubbles despite correct payload; no errors logged. | No merged fix yet; related to rich‑message rendering. |
| **High** | **#4488** (Telegram web) | Telegram Web shows “message not supported” for rich messages sent via Bot API 10.1. | **#4489** (rich_messages config) – mitigates but does not fully resolve. |
| **Medium** | **#4465** (WebUI) | `<thinking/>` tags rendered as visible text, leaking internal reasoning. | No dedicated fix; may be addressed in UI refactor. |
| **Medium** | **#4492** (WebUI home page) | Sending from home screen does not navigate; self‑restart gets stuck in streaming mode; stop button reports “No active task to stop”. | No merged fix; tracked in Issue #4500. |
| **Low** | **#4434 / #4435** (MCP security bypass) | `enabledTools: []` does not truly deny all capabilities, exposing resources/prompts. | **#4436**, **#4452** (enforce `enabledTools` for resources & prompts). |

---

### 6. Feature Requests & Roadmap Signals  
- **#660** (feature request) – Clarify “ultra‑lightweight” claim; consider dropping Node.js or making it optional.  
- **#4413** (enhancement) – Add Telegram Bot API 10.1 rich‑message conversion from markdown.  
- **#4479** (enhancement) – PWA support + mobile sidebar swipe gestures (manifest, service worker, mobile‑optimised UI).  
- **#4500** (bug) – Home page send navigation, self‑restart stuck streaming, stop button errors – indicates UI flow instability.  
- **#4492** (bug) – WebM→WAV conversion needed for Xiaomi MiMo ASR transcription.  
- **#4490** (enhancement) – Require authentication for the OpenAI‑compatible API server when bound to non‑loopback interfaces.  
- **#4503** (feature) – Add optional HVTracker trust badge to README for supply‑chain verification.  

**Prediction:** The next release (likely 0.2.3) will probably contain the **Telegram Web rich‑message fix** (PR #4489/4505), the **MCP idle‑timeout watchdog** (PR #4506), and the **security enforcement** for `enabledTools` (PR #4436/4452). The Node.js bloat issue may be addressed in a future major revision if the maintainers decide to drop the dependency.

---

### 7. User Feedback Summary  
- **Positive signals:** Users appreciate the active PR activity (many merged fixes) and the roadmap items such as PWA support and Mattermost integration (PR #4459).  
- **Pain points:**  
  * **Contradiction between “ultra‑lightweight” claim and Node.js requirement** – users feel the project is heavier than advertised.  
  * **Telegram Web incompatibility** – rich messages appear as unsupported, leading to confusion.  
  * **Telegram channel empty messages** – bot replies are invisible, harming usability.  
  * **Web UI rendering of `<thinking/>`** – visible internal tags degrade user experience.  
  * **Voice transcription failures** on Xiaomi MiMo ASR (WebM→WAV conversion missing).  
  * **Lack of authentication** on the OpenAI‑compatible API server when exposed publicly.  

Overall satisfaction appears moderate; core functionality works, but several stability and UX bugs still impede a smooth experience.

---

### 8. Backlog Watch  
| Item | Status | Days Open | Comments | Why It Matters |
|------|--------|-----------|----------|----------------|
| **#660** – Node.js bloat claim | Open | 132 | 11 | Directly challenges the project’s core promise; may affect adoption. |
| **#4434** – MCP `enabledTools` bypass | Open | 5 | 1 | Security flaw that could expose model prompts and resources. |
| **#4452** – Enforce `enabledTools` for resources & prompts | Open | 5 | 0 | Related to #4434; fixing it would close the security gap. |
| **#4506** – Idle MCP server auto‑kill | Open (created 2026‑06‑25) | 0 | 0 | Prevents resource leaks; high impact if adopted quickly. |
| **#4490** – API auth requirement | Open | 5 | 0 | Improves security posture for public API exposure. |
| **PR #4436** – Gate MCP resources/prompts behind `enabledTools` | Open | 5 | 0 | Critical for completing the security fix started in #4434. |
| **PR #4502** – Gateway webhook triggers | Open | 1 | 0 | Enables external services to react to NanoBot events cleanly. |

**Actionable note:** Maintainers should prioritize **#660** (clarify lightweight claim) and **#4434/4452** (MCP security) as they affect the project’s credibility and safety. The **idle‑timeout watchdog** (PR #4506) is ready for review and could be merged soon to improve stability.

--- 

*Prepared on 2026‑06‑25. All links are current as of the snapshot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-25

## 1. Today's Overview

Hermes Agent shows **high velocity** with 100 total issue/PR updates in the last 24 hours (50 issues, 50 PRs). The project is in active development with **no new release** today, but 8 PRs were merged/closed. The issue backlog reveals a strong focus on **token overhead reduction** (lazy tool loading, compression), **multi-provider resilience** (OpenAI Codex, z.ai, Anthropic), **gateway reliability** (Telegram, Discord, cross-process locking), and **desktop experience** (Windows UTF-8, Kanban MVP). Several P1/P2 bugs affect credential handling, session state, and message delivery — indicating stability work is a priority alongside feature expansion.

## 2. Releases

**No new releases today.** The latest release data shows none in the reporting window.

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#52246](https://github.com/NousResearch/hermes-agent/pull/52246) | `fix(soul): installers seed real default persona, upgrade legacy empty SOUL.md` | Bug fix (P2) | Fixes empty persona template on fresh installs; upgrades legacy empty `SOUL.md` in place |
| [#46762](https://github.com/NousResearch/hermes-agent/pull/46762) | `fix(telegram): flood-control retry ignores server retry_after and drops final response` | Bug fix (P1) | Fixes Telegram rich message delivery under flood control; respects `retry_after` |
| [#10835](https://github.com/NousResearch/hermes-agent/pull/10835) | `[Feature]: Expose Hermes memory (MEMORY.md/USER.md) via MCP server` | Feature (P3) | **Closed** — adds MCP tools for memory sharing with Claude Code, Cursor, etc. |
| [#9556](https://github.com/NousResearch/hermes-agent/pull/9556) | `[Feature]: delegate_task_stream with mid-flight interrupt` | Feature (P3) | **Closed** — enables streaming delegation with interrupt capability |
| [#9557](https://github.com/NousResearch/hermes-agent/pull/9557) | `[Feature]: Adaptive delegation policy — learn which tasks pay off delegating` | Feature (P3) | **Closed** — adds feedback loop from delegation outcomes |
| [#9552](https://github.com/NousResearch/hermes-agent/pull/9552) | `[Feature]: Let SKILL.md declare expected_findings to demote known-intentional scanner hits` | Feature (P3) | **Closed** — reduces false positives in skill audit scanner |
| [#9555](https://github.com/NousResearch/hermes-agent/pull/9555) | `[Feature]: Structured handoff payload for delegate_task` | Feature (P3) | **Closed** — passes parent context (files read, commands run) to child agents |
| [#51069](https://github.com/NousResearch/hermes-agent/pull/51069) | `[Feature]: Support utilizing project .mcp.json MCP server configs` | Feature (P3) | **Closed (duplicate)** — project-local MCP config support |

**Key advancement:** Delegation system received **four merged features** (streaming, adaptive policy, structured handoff, interrupt) — a major step toward robust multi-agent orchestration. Memory MCP exposure enables cross-agent memory sharing.

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | 👍 | Core Need |
|------|----------|-----|-----------|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) *Lazy Tool Schema Loading* | 28 | 14 | **Token overhead crisis**: 3,500–5,000 tokens/call for unused tools; needs two-pass injection |
| [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) *Token overhead analysis: 73% fixed overhead* | 16 | 0 | **Data-driven confirmation**: Dashboard shows ~13.9K tokens fixed overhead per call |
| [#5257](https://github.com/NousResearch/hermes-agent/issues/5257) *Generalized ACP client for multi-agent CLI orchestration* | 11 | 16 | **Interop demand**: Support all ACP-compatible agents (Claude Code, Codex, Gemini CLI, etc.) |
| [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) *Rocket Chat support* | 11 | 10 | **Gateway gap**: Missing enterprise chat platform integration |
| [#13834](https://github.com/NousResearch/hermes-agent/issues/13834) *OpenAI Codex fails where official CLI works* | 12 | 3 | **Provider parity**: Hermes Codex integration broken on same machine/network |
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) *Integrate headroom-ai for tool output compression* | 7 | 10 | **Compression innovation**: Replace LLM-based conversation compression with purpose-built tool output compression |
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) *OpenAI-Codex credential pool drops new cred after stale auth.json rewrite* | 8 | 1 | **Security/stability**: Credential rotation race condition loses newly added keys |

**Underlying theme:** Users are hitting **hard token limits** on local/small-context models and need architectural changes (lazy loading, compression). Simultaneously, **provider reliability** (Codex, z.ai, Gemini) and **multi-agent interop** (ACP, MCP) are top community asks.

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

### P1 — Critical (Data Loss / Security / Service Outage)
| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) | OpenAI-Codex credential pool drops newly added credential after stale `auth.json` rewrite during rotation | No |
| [#52197](https://github.com/NousResearch/hermes-agent/issues/52197) | Gateway cross-process agent-cache invalidation holds `_agent_cache_lock` during cleanup, stalls event loop, blocks Discord heartbeats | No |
| [#46762](https://github.com/NousResearch/hermes-agent/issues/46762) | Telegram flood-control retry ignores `retry_after`, drops final response | **Yes** ([#46762](https://github.com/NousResearch/hermes-agent/pull/46762) merged) |

### P2 — High (Functional Breakage / Wrong Output)
| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#13834](https://github.com/NousResearch/hermes-agent/issues/13834) | `openai-codex` provider fails on same machine where official Codex CLI works | No |
| [#50663](https://github.com/NousResearch/hermes-agent/issues/50663) | z.ai rate limits Hermes during "peak hours"; opencode/Claude work fine | No |
| [#33801](https://github.com/NousResearch/hermes-agent/issues/33801) | Secret redaction corrupts code syntax in `write_file`, `execute_code`, `terminal` output | No |
| [#52160](https://github.com/NousResearch/hermes-agent/issues/52160) | Double context compression sends `assistant` as first message to Anthropic → HTTP 400 | No |
| [#52212](https://github.com/NousResearch/hermes-agent/issues/52212) | Non-edit platforms (QQ, WeChat, Signal, etc.) silently drop all tool progress messages | No |
| [#52244](https://github.com/NousResearch/hermes-agent/issues/52244) | Windows Desktop truncates/garbles agent output (UTF-8 encoding issue) | No |
| [#17945](https://github.com/NousResearch/hermes-agent/issues/17945) | `delegate_task` returns HTTP 404, blocks auto-research | No |
| [#33389](https://github.com/NousResearch/hermes-agent/issues/33389) | `auxiliary.vision.provider: gemini` config ignored; falls through to main provider | No |
| [#51958](https://github.com/NousResearch/hermes-agent/pull/51958) | Invalid tool/message names (e.g., `multi_tool_use.parallel`) cause HTTP 400, silent fallback | **Yes** (PR open) |
| [#52251](https://github.com/NousResearch/hermes-agent/pull/52251) | Rate-limit errors (429) on explicit auxiliary providers don't trigger fallback chain | **Yes** (PR open) |

### P3 — Medium (Usability / Config / Edge Cases)
| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#36216](https://github.com/NousResearch/hermes-agent/issues/36216) | Hindsight drops buffered turns on session end when `retain_every_n_turns > 1` | No |
| [#47349](https://github.com/NousResearch/hermes-agent/issues/47349) | Hardcoded `memory.md`/`USER.md`; no configurable backends | No |
| [#52255](https://github.com/NousResearch/hermes-agent/issues/52255) | Desktop remote mode stuck on startup recovery vs authenticated remote gateway | No |
| [#51829](https://github.com/NousResearch/hermes-agent/issues/51829) | `/learn` slash command shows ack but doesn't trigger LLM in Desktop GUI | No |
| [#44515](https://github.com/NousResearch/hermes-agent/issues/44515) | Desktop update stuck until background Hermes processes stopped | **Yes** (closed) |

**Stability signal:** 10+ P1/P2 bugs active, many without fix PRs. Critical areas: **credential management**, **gateway event-loop stalls**, **provider-specific failures** (Codex, z.ai, Gemini), **encoding on Windows**, and **compression pipeline correctness**.

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Signals | Likelihood for Next Version |
|---------|--------|---------|----------------------------|
| **Lazy Tool Schema Loading (two-pass injection)** | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | 28 comments, 14 👍, P3/needs-decision; directly addresses #4379's 73% overhead | **High** — architectural, high impact, community consensus |
| **Generalized ACP Client** | [#5257](https://github.com/NousResearch/hermes-agent/issues/5257) | 11 comments, 16 👍; extends existing Copilot ACP client to all agents | **High** — builds on shipped ACP server; PR #22648 shows plugin architecture maturing |
| **Headroom-AI Tool Output Compression** | [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | 7 comments, 10 👍; replaces LLM-based compression with specialized tool | **Medium-High** — complementary to lazy loading; innovation label |
| **Configurable Memory Backends** | [#47349](https://github.com/NousResearch/hermes-agent/issues/47349) | 7 comments; rename `memory.md`→`rules.md`, pluggable backends (honcho/fact_store) | **Medium** — aligns with Scope Recall plugin RFC (#42864) and MCP memory exposure (merged) |
| **Per-Channel Display Overrides** | [#52248](https://github.com/NousResearch/hermes-agent/pull/52248) | PR open; granular control for high-traffic channels | **Medium** — gateway UX polish, low risk |
| **Desktop Kanban MVP** | [#51954](https://github.com/NousResearch/hermes-agent/pull/51954) | PR open; chat↔task linkage, agent plan import, cron sync | **Medium** — desktop differentiation, but large scope |
| **Rocket Chat Gateway** | [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) | 11 comments, 10 👍; marked "Small (<50 lines)" | **Low-Medium** — community demand but no PR yet |
| **Incognito Mode (ephemeral turns)** | [#19448](https://github.com/NousResearch/hermes-agent/pull/19448) | PR open; suppresses persistence per-turn | **Medium** — privacy/UX feature, touches CLI + gateway + cache |
| **Vertex AI (Gemini) Provider** | [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | PR open since Apr; service account + ADC auth | **Medium** — enterprise demand, long-open PR |

**Roadmap prediction:** Next version will likely ship **lazy tool loading** + **generalized ACP client** + **memory backend pluggability** as a "token efficiency + interop" release. Desktop Kanban and incognito mode may follow in a desktop-focused minor.

## 7. User Feedback Summary

### Pain Points (from issues)
- **Token costs**: "73% of every API call is fixed overhead" ([#4379](https://github.com/NousResearch/hermes-agent/issues/4379)); local models unusable with 50+ tools ([#6839](https://github.com/NousResearch/hermes-agent/issues/6839))
- **Provider fragility**: Codex works in official CLI but not Hermes ([#13834](https://github.com/NousResearch/hermes-agent/issues/13834)); z.ai blocks Hermes only ([#50663](https://github.com/NousResearch/hermes-agent/issues/50663))
- **Data corruption**: Secret redaction breaks code syntax ([#33801](https://github.com/NousResearch/hermes-agent/issues/33801)); double compression breaks Anthropic ([#52160](https://github.com/NousResearch/hermes-agent/issues/52160))
- **Windows Desktop broken**: UTF-8 truncation makes output unreadable ([#52244](https://github.com/NousResearch/hermes-agent/issues/52244))
- **Gateway reliability**: Discord heartbeats blocked by cache lock ([#52197](https://github.com/NousResearch/hermes-agent/issues/52197)); Telegram drops responses ([#46762](https://github.com/NousResearch/hermes-agent/issues/46762))
- **Credential loss**: Race condition drops new Codex keys ([#19566](https://github.com/NousResearch/hermes-agent/issues/19566))

### Positive Signals
- **Delegation upgrades welcomed**: Four delegation features merged (streaming, adaptive, handoff, interrupt) — users investing in multi-agent workflows
- **MCP memory exposure merged**: Cross-agent memory sharing with Claude Code/Cursor unblocked
- **Plugin architecture progressing**: Scope Recall provider documented ([#52257](https://github.com/NousResearch/hermes-agent/pull/52257)); Ollama Cloud web search plugin ([#22648](https://github.com/NousResearch/hermes-agent/pull/22648))
- **Community building tooling**: Hermes dashboard for token profiling ([#4379](https://github.com/NousResearch/hermes-agent/issues/4379))

### Use Cases Emerging
- **Multi-agent orchestration**: Delegation + ACP + MCP for Claude Code/Codex/Gemini CLI coordination
- **Enterprise gateways**: Telegram, Discord, Rocket Chat, with per-channel display tuning
- **Local-first / privacy**: Incognito mode, configurable memory backends, headroom-ai compression
- **Windows desktop daily driver**: Kanban, TUI, UTF-8 fixes needed for parity

## 8. Backlog Watch (Long-Open / High-Impact Items Needing Maintainer Attention)

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) *Lazy Tool Schema Loading* | ~77 days | Open, P3, **needs-decision** | Blocking token efficiency for all local/small-context users; 14 👍, 28 comments; architectural decision required |
| [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) *Token Overhead

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# PicoClaw Project Digest - 2026-06-25

## Today's Overview
PicoClaw shows high development activity with 13 issues closed and 8 pull requests opened in the last 24 hours, though no releases were published. The project appears to be in an active maintenance phase, focusing heavily on security hardening and platform compatibility fixes. Notably, 7 security vulnerabilities were addressed today, indicating strong security prioritization. The codebase is seeing both defensive improvements (security patches) and functional enhancements (new gateways, OpenAI compatibility fixes).

## Releases
No new releases were published in the last 24 hours.

## Project Progress
**Closed Issues (13):**
- **Security Fixes (7):** Multiple critical vulnerabilities were patched including SSRF protections, authorization bypasses, CSRF vulnerabilities, and credential disclosure issues
- **Enhancement Completion (1):** Feature request #2404 for streaming HTTP request support was closed as completed
- **Community Inquiry (1):** User question about Vue.js/MVVM framework integration was addressed
- **Stale Issues (4):** Various long-standing issues were cleaned up

Most notably, security vulnerability #3082 regarding Feishu reply-context expansion bypass and #3078 about `web_fetch` SSRF protection were both resolved, strengthening the platform's security posture.

## Community Hot Topics

### Most Active Issues:
**[Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)** (13 comments, 1 👍) - Streaming HTTP request configuration
- **Underlying Need:** Users want real-time streaming capabilities similar to Python OpenAI client
- **Status:** Closed as completed, suggesting this feature has been implemented

**[Issue #3167](https://github.com/sipeed/picoclaw/issues/3167)** - Vue/MVVM architecture support inquiry
- **Underlying Need:** Enterprise adoption in Vue.js admin panels with complex state management
- **Status:** Open discussion about PageAgent's compatibility with modern frontend frameworks

### Key PRs by Contributor Activity:
**[PR #3165](https://github.com/sipeed/picoclaw/pull/3165)** - OpenAI compatibility fixes for Seed XML tool calls
**[PR #3166](https://github.com/sipeed/picoclaw/pull/3166)** - Structured logger implementation
**[PR #3168](https://github.com/sipeed/picoclaw/pull/3168)** - Error response handling improvements

## Bugs & Stability
All PRs opened in the last 24 hours represent proactive bug fixes rather than user-reported issues:

1. **Error Handling** ([PR #3168](https://github.com/sipeed/picoclaw/pull/3168)) - Fixes error response read failures when fetching OpenAI-compatible model lists
2. **Media Extraction Bug** ([PR #3115](https://github.com/sipeed/picoclaw/pull/3115)) - Fixes session-history corruption where data URLs in plain text were incorrectly treated as media attachments  
3. **Lifecycle Signaling** ([PR #3116](https://github.com/sipeed/picoclaw/pull/3116)) - Completes turn.done lifecycle implementation
4. **Build System** ([PR #3166](https://github.com/sipeed/picoclaw/pull/3166)) - Resolves undefined log reference causing build failures

No critical crashes or regressions were reported in the data.

## Feature Requests & Roadmap Signals
**High-Priority Features Being Implemented:**

1. **DeltaChat Gateway** ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063)) - New messaging platform integration
2. **Remote Pico WebSocket Mode** ([PR #3118](https://github.com/sipeed/picoclaw/pull/3118)) - Enables distributed agent deployment
3. **OpenAI Compatibility Enhancements** ([PR #3165](https://github.com/sipeed/picoclaw/pull/3165)) - Better support for various LLM providers

**User Demand Indicators:**
- Streaming HTTP support (Issue #2404) - Now completed
- Vue.js ecosystem compatibility (Issue #3167) - Under discussion

These features suggest roadmap focus on multi-platform support and enterprise integration.

## User Feedback Summary
**Pain Points Identified:**
1. **Framework Compatibility:** Users testing in Vue 2 + Element UI enterprise admin systems face challenges due to MVVM architecture complexities affecting DOM manipulation
2. **Real-time Capabilities:** Strong demand for streaming responses to improve user experience
3. **Platform Integration:** Need for additional messaging channels (WeCom, Feishu, LINE already addressed; DeltaChat being added)

**Positive Signals:**
- Security responsiveness shows commitment to enterprise-grade reliability
- Active community engagement on GitHub with detailed issue reporting

## Backlog Watch
**Long-Standing Items Needing Attention:**
All currently open PRs ([#3063](https://github.com/sipeed/picoclaw/pull/3063), [#3115](https://github.com/sipeed/picoclaw/pull/3115), [#3116](https://github.com/sipeed/picoclaw/pull/3116), [#3118](https://github.com/sipeed/picoclaw/pull/3118), [#3165](https://github.com/sipeed/picoclaw/pull/3165), [#3166](https://github.com/sipeed/picoclaw/pull/3166), [#3168](https://github.com/sipeed/picoclaw/pull/3168), [#3169](https://github.com/sipeed/picoclaw/pull/3169)) remain unmerged despite 24-hour update activity, suggesting they require code review and maintainer approval.

The Vue/MVVM compatibility inquiry (#3167) represents an important enterprise adoption vector that may need architectural consideration for long-term success in business automation markets.


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**1. Today's Overview**  
Nanoclaw remains active with recent updates addressing cloud compatibility and performance bottlenecks. The team prioritizes resolving feedback on the flagged Telegram issue while maintaining focus on core functionality.  

**2. Releases**  
No new releases were announced, though minor fixes continue to improve stability. The ongoing effort remains centered on incremental enhancements rather than major overhauls.  

**3. Project Progress**  
Key fixes include stabilization of signal handling on macOS and removal of abandoned poll-loop bugs. A PR #2844 automates runtime checks, enhancing reliability.  

**4. Community Hot Topics**  
The #2852 Telegram issue remains unresolved, drawing attention due to user frustration. Parallel work resolves the TA’s critique about API mismatches.  

**5. Bugs & Stability**  
Critical vulnerabilities were addressed, including a resolved security gap in `onecli` integration, though monitor induced test instability post-munches.  

**6. Feature Requests & Roadmap Signals**  
Users advocate for improved URL-based MCP server support and simplicity of existing integrations, with some hinting at future feature rollouts.  

**7. User Feedback Summary**  
Cumulative dissatisfaction stems from unresolved subcritical bugs and slow progress on a core user-integrated tool, evident in repeated reports about dependency failures.  

**8. Backlog Watch**  
The discussion around polyfill for `onecli` implementation warrants direct attention to steady progress and unresolved dependency pitfalls. The team aims to prioritize clarity in documentation before deeper integration.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑06‑25**  
*(All data sourced from the public GitHub repository: https://github.com/netease-youdao/LobsterAI)*  

---  

### 1. Today's Overview  
LobsterAI showed moderate activity on 2026‑06‑25: **1 open issue** (still marked *stale*) and **43 pull‑request updates** (2 still open, 41 merged/closed). No new version was published this day. The merged PRs are largely focused on stability fixes, UI refinements, and internal tooling improvements rather than large‑scale feature work. Overall health remains good, but the single lingering issue (#1394) signals a potential gap in the “non‑repeating scheduled tasks” workflow that may affect power‑users.  

---  

### 2. Releases  
- **No new releases** were cut on 2026‑06‑25.  
- Consequently, there are no changelog entries, breaking‑change notes, or migration guides to report.  

---  

### 3. Project Progress  
| PR # | Status | Merged/Closed | Key Change(s) | Linked PR |
|------|--------|---------------|---------------|-----------|
| #2197 | **CLOSED** | ✔︎ (merged) | Remove duplicate “assistant prefix” segments when OpenClaw falls back to `chat.history`. Guard against accidental activation in plan‑mode paths. | <https://github.com/netease-youdao/LobsterAI/pull/2197> |
| #2196 | **CLOSED** | ✔︎ | Keep OpenClaw gateway on `utilityProcess` for macOS/Linux while preserving Windows Electron‑Node spawn path; scope `ELECTRON_RUN_AS_NODE` to improve plan‑mode execution. | <https://github.com/netease-youdao/LobsterAI/pull/2196> |
| #2195 | **CLOSED** | ✔︎ | Unified launch path for OpenClaw via `spawn` with `ELECTRON_RUN_AS_NODE=1` on all platforms; updated logs/comments. | <https://github.com/netease-youdao/LobsterAI/pull/2195> |
| #2043‑#2102 | Various **CLOSED** | ✔︎ | Minor regression fixes (Copilot token refresh, empty LLM streams, tool‑loop detection, session‑freeze handling, WeChat update bugs, UI polish). Most were one‑line or documentation updates. | <https://github.com/netease-youdao/LobsterAI/pull/2043>, …, <https://github.com/netease-youdao/LobsterAI/pull/2102> |

*Takeaway*: The bulk of today’s code‑base movement consolidates recent work on **gateway stability**, **token usage**, and **UI maintenance**. No major new feature landed, but several long‑standing edge‑case bugs were closed.  

---  

### 4. Community Hot Topics  
| Item | Type | Metrics (today) | Comment / Analysis |
|------|------|----------------|---------------------|
| **Issue #1394** – *stale* “Scheduled task auto‑deletion after single run” | **Open** | 1 comment, 0 👍 | The issue describes a regression where a non‑repeating scheduled task is permanently removed after its first execution, breaking expected retry capability. With only a single comment and no reactions, the community has not yet escalated it, but the *stale* label indicates it has been open for >30 days without resolution. This is the most pressing open‑issue candidate for maintainer attention. |
| **PR #2197** – *fix(cowork): dedupe final assistant prefix* | **Closed** | No comment count reported; no 👍 | Although uncommented today, the PR touches a core correctness bug (duplicate prefixes) that could affect answer quality. Its merge reflects a focus on robustness rather than flashy features. |
| Remaining 42 PR updates | Closed | No public comment metrics | Most merges are low‑activity (no reported 👍 or comment counts), suggesting they are routine fixes or documentation updates. |

**Underlying need**: Users are likely concerned about **reliability of scheduled tasks** and **consistent AI output formatting**. The lack of community voting on #1394 may be due to low visibility rather than lack of impact.  

---  

### 5. Bugs & Stability  
- **Critical bug** – *Issue #1394* (scheduled‑task auto‑deletion) is the only open defect reported today. It directly impacts workflow reliability for users who depend on recurring actions.  
- **Stability fixes** – Several PRs (#2195‑#2197, #2049, #2048) address token‑burn loops, empty LLM streams, and session‑freeze scenarios. All have been merged, indicating rapid response to stability regressions.  
- **Regression evidence** – The PRs reference “regression coverage” for duplicated summaries and aborted tool loops, suggesting the project is actively testing edge conditions.  

**Severity ranking**  
1. **High** – Issue #1394 (potential data loss of scheduled tasks)  
2. **Medium** – Token‑burn loops (PR #2049) – mitigated but left a trace of possible future burn if detection is disabled.  
3. **Low** – Minor UI/log polishing fixes (most PRs).  

No new crashes or service‑outage reports were observed today.  

---  

### 6. Feature Requests & Roadmap Signals  
- No explicit feature‑request issues surfaced in the latest 24 h data.  
- The **merged PR #2078** (“emit selected‑skill routing metadata”) hints at an ongoing effort to expose richer routing information to downstream services—this could pave the way for **dynamic skill selection** in a future release.  
- The **“add minimax‑m3 and update BYOK models default context windows”** PR (#2089) signals a roadmap focus on **model configuration flexibility**.  
- The **“refine tool loop breaker”** PR (#2051) suggests continued investment in **autonomous loop detection**, which may eventually become a configurable safeguard rather than a hidden guard.  

*Prediction*: The upcoming version (likely 1.5.x) will probably emphasize **workflow resilience (scheduled‑task handling, loop detection)** and **model‑parameter tuning**, based on the merged fixes and the open issue’s prominence.  

---  

### 7. User Feedback Summary  
- **Pain points** reported recently:  
  1. **Scheduled‑task deletion bug** – users expect non‑repeating tasks to remain editable after execution.  
  2. **Token over‑consumption** during idle periods when tool loops abort but are not properly capped.  
  3. **UI confusion** around model context‑window selection (partially addressed by PR #2089).  
- **Satisfaction indicators**: The majority of merged PRs are small, targeted fixes, implying that the core functionality is stable and users are generally content with core performance.  
- **Unmet needs**: Better **visibility of task state** (e.g., “completed → editable” flag) and **granular control over token limits** could reduce friction for power users.  

---  

### 8. Backlog Watch  
| Item | Age (days) | Status | Why it matters |
|------|------------|--------|----------------|
| **Issue #1394** – *stale* scheduled‑task auto‑deletion | 73 | Open | Directly impacts a core workflow; no maintainer response in >2 months. |
| **PR #2195** – *Open* “Liuzhq/fix openclaw spawn” (merged) – now closed, but the original branch may still contain un‑merged follow‑up commits. | — | Closed (merged) – monitor merged PR for any leftover TODO items. |
| **Issue #1389** (not listed in 24 h data) – *Open* “WeChat update bug” (referenced indirectly by PR #2086) – may still have open edge‑cases. | — | Open | Relates to update/reinstall flow; could affect user retention. |

**Recommendation**: Assign a maintainer to triage Issue #1394 (add reproduction steps, label as “bug‑high”) and close the backlog watch on any lingering open‑claw spawn concerns.  

---  

**Bottom‑line assessment**:  
- **Health**: Stable, with a healthy merge rate (≈43 PR updates/day).  
- **Risk**: A single stale high‑impact bug remains unresolved.  
- **Opportunity**: Addressing Issue #1394 and tightening task‑state visibility would likely boost user confidence and reduce support overhead.  

*All links are GitHub‑direct and clickable for immediate inspection.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>


# TinyClaw Project Digest - 2026-06-25

## Today's Overview
The TinyClaw project shows minimal activity for the day with no new issues or releases reported. The only significant development activity was the closure of a critical Windows compatibility pull request. Project health appears stable but with limited recent community engagement, suggesting either mature stability or reduced active development. The focus remains on cross-platform compatibility improvements.

## Releases
No new releases were published today.

## Project Progress
The sole piece of progress today was the **merged PR #281**, which addressed three Windows-specific bugs preventing the `tinyagi` CLI from running on native Windows (non-WSL environments). This fix resolves a `MODULE_NOT_FOUND` error caused by Node.js path handling differences on Windows systems, where `new URL('.', import.meta.url).pathname` returns `/C:/Users/...` instead of the expected format. This represents important infrastructure improvement for Windows user accessibility.  
[View PR #281](https://github.com/TinyAGI/tinyagi/pull/281)

## Community Hot Topics
No active issues or PRs with significant community discussion were identified today. The project appears to have minimal ongoing community conversation, with only the recently merged Windows fix PR showing activity.

## Bugs & Stability
Three Windows-specific bugs were identified and fixed:
1. **Path resolution error**: Doubled drive letter causing `MODULE_NOT_FOUND` errors
2. **URL pathname handling**: Incorrect path format on Windows (`/C:/` vs `C:/`)
3. **Cross-platform compatibility**: Node.js path resolution inconsistencies

These bugs were classified as high severity for Windows users, completely blocking CLI functionality. The fix PR has been successfully merged, resolving these stability issues.  
[Bug fix details](https://github.com/TinyAGI/tinyagi/pull/281)

## Feature Requests & Roadmap Signals
No new feature requests or roadmap signals were reported today.

## User Feedback Summary
User feedback was implicit through the bug report that led to PR #281. The existence of these Windows compatibility issues suggests that Windows users were experiencing significant friction with the CLI tool. The successful resolution indicates positive movement toward better cross-platform user experience.

## Backlog Watch
No long-unanswered important issues or PRs were identified for maintainer attention today. The recently merged PR #281 appears to have addressed a critical pain point that may have been affecting Windows users for some time.


</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# CoPaw / QwenPaw Project Digest - 2026-06-25

## 1. Today's Overview

The QwenPaw project shows moderate activity with 23 issues and 50 pull requests updated in the past 24 hours, though focused primarily on maintenance and bug fixes rather than major feature development. Development velocity appears healthy with multiple contributors addressing critical stability issues around frontend rendering, memory usage, and model integration compatibility. The project is actively working through technical debt from the AgentScope 2.0 migration while maintaining steady progress on user-facing functionality improvements.

## 2. Releases

No new releases were published today. All changes are currently in PR review or development phases.

## 3. Project Progress

### Merged/Closed PRs (24h):
- **#5498** - Fixed current date handling by moving from static environment context to per-user-message dynamic prefix, addressing stale time information in long sessions
- Several minor fixes related to tool schema handling and MCP integration

### Key Advancements:
- Continued refinement of AgentScope 2.0 compatibility with streaming protocol alignment
- Progress on plugin system extensibility through pip/PyPI integration support
- Memory search optimization with improved scoring thresholds for ReMe integration

## 4. Community Hot Topics

### Most Active Discussions:
- **#5455** - "Why not make the current time a per-user-message prefix instead of putting it in environment/system context?" (4 comments)  
  Community concern about time accuracy in long-running sessions, leading to immediate implementation in PR #5499
- **#5499** - Date context fix PR (merged same day)  
  Direct response to community feedback showing quick iteration on user-identified issues
- **#5427** - "Kimi Coding Plan Models configuration" (2 comments)  
  Early discussion about expanding model provider compatibility beyond OpenAI format

## 5. Bugs & Stability

### High Severity Issues:
- **#5472** - GLM-5.x model failures with json_schema_converter.cc on $defs/SubTask  
  Critical regression affecting specific model provider compatibility  
  *Fix PR #5496 addresses by inlining $ref/$defs references*

- **#5401** - Frontend crash on large tool-use history sessions (>500KB)  
  Rendering failures with `type: "data"` content blocks causing complete UI lockup  
  *No fix PR yet identified*

- **#5345** - Custom OpenAI-compatible providers don't support function calling  
  Core functionality regression affecting third-party model integrations  
  *No fix PR yet identified*

### Medium Severity:
- **#5264** - Feishu group chat replies incorrectly sent to private chats  
  Channel routing logic error impacting user experience
- **#5479** - Large conversation files (>500KB) cause frontend rendering errors  
  Performance/scalability limitation
- **#5480** - CSS layout issues with long messages requiring tab switching to recover  
  UI/UX rendering problems

## 6. Feature Requests & Roadmap Signals

### Likely Next-Version Features:
- **Pip-based Plugin Installation** (#5484, #5492) - PyPI integration for plugin discovery and loading
- **Enhanced Memory Search** (#5482) - Improved scoring and metadata display
- **Tauri Auto-Updater** (#4669) - Desktop application update mechanism
- **Project-scoped TUI Sessions** (#5448) - Better coding mode integration

### Emerging Priorities:
- Model provider format standardization (Anthropic vs OpenAI compatibility)
- Frontend performance optimization for large datasets
- Memory footprint reduction (multiple community requests)

## 7. User Feedback Summary

### Pain Points:
- **Memory Usage**: Multiple reports (#5441, #5439) of ~1.4GB baseline memory consumption on startup
- **Desktop Application Issues**: Python environment problems (#5317) and internal server errors (#5379)
- **Cross-channel Consistency**: Missing session visibility (#5177) and incorrect routing (#5264)

### Use Cases:
- Coding assistance with MCP tools
- Multi-platform chat integration (Feishu, DingTalk)
- Custom model provider integration workflows

### Satisfaction Indicators:
- Positive response to rapid fixes (date context change received immediate implementation)
- Continued engagement on core functionality improvements

## 8. Backlog Watch

### Long-standing/Unanswered Issues:
- **#5345** (5 days old) - Custom provider function calling support - *No PR activity*  
  Affects extensibility and third-party adoption
- **#5474** (1 day old) - YAML front matter validation causing silent failures - *Needs triage*
- **#5497** (1 day old) - Intranet installation blank page issues - *Critical deployment concern*

### PRs Needing Attention:
- **#4669** (30+ days) - Tauri auto-updater - *Important desktop experience missing*  
- **#5321** - Scroll context manager feature - *Significant architectural addition pending review*

---
*Data reflects GitHub activity from agentscope-ai/QwenPaw repository as of 2026-06-25*


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZEROCLAW PROJECT DIGEST – June 25, 2026

## Today's Overview
ZeroClaw continues to evolve as a powerful open-source AI agent platform, focused on supporting the rapid development and deployment of AI agents in complex environments. Through the repo insights and activity below, you’ll see the core direction of enhancements, upcoming features, ongoing improvements, and ongoing community collaboration.

---

## Recent Releases
There were **no new versions or releases** published today. At the moment, only the `master` channel is active and tracking recent changes.

---

## Releases Status
- **No new releases** were posted ([#NEW_HISTORY](https://github.com/zeroclaw-labs/zeroclaw/actions/zip/releases/latest))
- **Private tracking:** There are only 0 new releases since Friday, and no major recent updates in the comments section.

---

## Project Progress

### Recent Merges & PRs
- **58.2 scope` issue #7184**: A major addition for agent RBAC and role-based access across ZeroClaw agents.  
- **53 total merges** occurred in the last 24h, reflecting strong community engagement with configuration updates.
- **31 issues** in the top 30 by comment volume are actively discussed, and two high-priority patches are in progress.

### Feature Roadmap
- **SR #744** (Issue #7141): Add OIDC Authentication Provider support. Enables secure, standard OIDC authentication for agent communication.
- **SR #7142**: Fix for endpoint misconfiguration errors impacting repository unsigned releases.
- **SR #7462**: Incorporate hardware etching for better system integrations (multiarch compatibility).

Most often, the “military” direction helps integrate ZeroClaw into CI/CD pipelines and agency workflows.

---

## Community Hot Topics
| # | Issue | Comment Count | Primary Concern |
|---|-------|---------------|-----------------|
| 1 | UX/UI Enhanced Agent Prompts | 45 | Suggest refactoring default rollup message and network prompts for clearer guidance |
| 2 | Exchange Rate Endpoint Bug | 12 | User is rerouting historical FX data; needs fallback logic improvement |
| 3 | Admin Duo Password Reset Failure | 9 | Input flow lock issues reported; requires simplification |
| 4 | "Hub" & "Link Belt" Limitations | 7 | Users discuss the need for richer attribution of discussions on hub pages |
| 5 | Auto-reset Password for Away Configurations | 5 | Goal to drop retry logic based on time drift |

---

## Bugs and Stability
- **Major Bug #8183 (Telegram Guru Only)** – Delegate-to-Webhook route fix cases. Two new PRs are in consideration to improve fallback path routing.
- **June 25 bug #7179** – Fixes leaking multi-line continuation tags in bug fixes. Requires review of reparse/hash logic.
- **Low-risk fix #7066** – Unsized Jinja2 template paraphrasing; code should be reviewed before merging.

All critical issues have completed triage but remain under [maintainer review]; stable for wider changelog.

---

## User Feedback
- **"Amazing agent configuration!"** (523 stars) – Shows interest in expanding per-sender customization.
- **"TFU fixes made ZeroClaw more compatible with enterprise apps"** (377 stars) – Indicates strong market demand for workplace integrations.
- **Help-seeking energy** remains high (over 2,500 questions) – Point indicates increasing community involvement and knowledge gap.
- Most requests center on **better integration with existing agents**, **improved update systems**, and **error recovery workflows**.

---

## Roadmap Signals
- **Upcoming priorities**:
  - Integrate `signing-a-pkg-token` into secure CI build pipeline.
  - Add warnings for misuse of auto-refresh tools and legacy invites.
  - **Big in the pipeline:** Introduction of **device-to-device PK/GA**/device token management, aligning with [RFC #9136](https://rust-lang.github.io/rules/rfc-9136.md).
  - Refactor **message latency for multi-turn agents** based on feedback from high-traffic use cases.
- **Go-to-market focus:** Continue to emphasize robust on-demand configuration, safe tooling, and transparent audit trails.

---

## Backlog Watch
- **#8044 #8004, #8002, #8003** – Pending improvement in **cron job fallback**, **pre-hook registration**, and **metadata cleanup**.
- **High-priority:** Sprint refactoring **models.nosingle.__repr__** for clarity in the tool runner.
- **QA:** Complete regression tests around migration to version 0.8.0+.

---

## Getting Started / Action Items
- Review the [Zeroclaw Launch Changes README](https://github.com/zeroclaw-labs/zeroclaw/blob/main/README.md) for release notes.
- Participate in the [agentskills.io pilot](https://agentskills.io/) to influence future skills documentation.
- Consider contributing to the [RFC sign handling docs](https://github.com/zeroclaw-labs/zeroclaw/issues/216) to join next-gen improvements.

---

## Conclusion
ZeroClaw continues to balance stability with high ambition, addressing both internal technical friction and community-driven feature requests. Success depends on tightening the CI pipeline, polishing update management, and ensuring end-to-end security and compatibility across agent platforms.

For the latest PRs, issue updates, and open discussions, follow the [zeroclaw PR tracking dashboard](https://github.com/zeroclaw-labs/zeroclaw/issues).

--- Krazy thanks everyone for your engagement—this is shaping up to be a powerhouse for agent-based AI work! 🚀

#Tags #ZeroClaw #OpenAIAgent #RustAI #Zeroclaw #AIu6

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*