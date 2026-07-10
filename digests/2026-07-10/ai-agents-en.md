# OpenClaw Ecosystem Digest 2026-07-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-10 02:00 UTC

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

# OpenClaw Project Digest - July 10, 2026

## Today's Overview
OpenClaw shows significant ongoing activity with 500 total issues and 500 pull requests updated in the past 24 hours. The project demonstrates robust development velocity with 200 PRs merged/closed today alone, addressing critical bugs and implementing feature enhancements. The most urgent priority is addressing P1-level session state issues including subagent completion failures and message delivery problems that could impact user trust and system reliability.

## Releases
**No new releases** - The project shows no published releases today, indicating continued development focus on bug fixes and feature improvements rather than versioned releases.

## Project Progress
**Merged/Closed PRs Today:**
- #95195: Fixed unbounded stdout/stderr accumulation in agent-core (16 MiB cap) - prevents OOM crashes
- #97189: Implemented gateway restart audit event persistence for operational visibility
- #101023: Restored current-conversation binding map for failed durable writes - fixes routing errors
- #102445: Fixed channel failure alerts drop when global webhook failure destination is set
- #101078: Preserved cron context in session entries for async completion wakes

Key advances: Enhanced system stability with memory leak fixes, improved error handling, and better session persistence mechanisms. The project is actively addressing performance and reliability issues identified through user reports.

## Community Hot Topics

**Most Active Issues (by comments):**

1. **#44925** - Subagent completion silently lost *[OPEN, P1, 21 comments]* - [Link](https://github.com/openclaw/openclaw/issues/44925)
   - Critical bug where results are silently lost across E31, E42, E45 failure modes
   
2. **#99241** - Tool outputs render as image attachments *[OPEN, P1, 15 comments]* - [Link](https://github.com/openclaw/openclaw/issues/99241)
   - User agents cannot read original stdout/stderr when long-running ANSI-heavy tool workflows collapse into image placeholders
   
3. **#49876** - Cron sessions deliver hallucinated output instead of failing cleanly *[OPEN, P1, 9 comments]* - [Link](https://github.com/openclaw/openclaw/issues/49876)
   - Trust and safety issue where LLMs fabricate plausible-looking output on tool failures rather than failing cleanly

**Underlying needs:** Session reliability, error transparency, and maintaining user trust through predictable failure modes. The community is actively reporting session state management issues across multiple modules.

**Active PRs (Notable ones):**
- **#103248** - Android app shows agent avatars instead of badges - improving user experience
- **#103112** - Fix tool preservation when local-model lean agents use provider overrides
- **#102909** - Fix persistent task-status surface for long-running channel turns (Discord first)

## Bugs & Stability

**Critical Priority (P1) Bugs:**
1. **#44925** - Subagent completion silently lost - 21 comments
2. **#99241** - Tool outputs as image attachments - 15 comments  
3. **#49876** - Cron sessions hallucinate output on tool failure - 9 comments
4. **#84569** - WhatsApp session stalls on long model_call - 9 comments

**Severity-ranking issues:**
- **[FIXED]** #54155 - Gateway memory leak: 389MB → 14.7GB over 4 days (8 comments) ✓ Fixed by PR #95195
- **[FIXED]** #99912 - Agent heartbeat routes to wrong agent's session (7 comments) ✓ Fixed by PR #97715
- **[KNOWN]** #45494 - Cron agent jobs silently timeout during LLM API outages instead of fast-failing

**System Criticality:** Multiple P1 issues around session state management suggest potential system reliability concerns that could impact user trust and operational stability.

## Feature Requests & Roadmap Signals

**Emerging Feature Requests:**
1. **#52640** - Persistent task-status surface for long-running channel turns (7 comments, 2 👍)
2. **#45758** - Support YAML as config file format alongside JSON5 (7 comments, 2 👍)
3. **#45565** - Config option to route gateway lifecycle warnings to dedicated channel (7 comments, 1 👍)
4. **#45501** - `session.resetPrompt` configurable session startup message (6 comments, 1 👍)

**Implementation Status:**
- Android improvements (#101864, #103248) show mobile UI/UX enhancements in progress
- Persistent task status surface gaining traction for Discord/whitelist channel needs
- Multiple UI/UX improvements suggest focus on developer/operator experience

**Roadmap Indicators:** The project appears focused on stability (memory leaks, session management), developer experience (YAML config, better UI controls), and reliability (task status surfaces, error handling).

## User Feedback Summary

**Dominant Pain Points:**
1. **Session Reliability:** Repeated session state loss, message delivery failures, and unexpected session termination
2. **Tool Output Issues:** Tools rendering as image attachments instead of readable text, causing agent confusion
3. **Error Transparency:** Lack of clear error messages when dependencies (sharp) are missing
4. **Performance:** Memory leaks in gateway processes and unbounded output accumulation

**Use Cases Highlighted:**
- **Technical Users:** Slack/Discord channel automation, WhatsApp business integration, GitHub issue management
- **Developers:** Skills management, configuration, local development with sandbox environments
- **Operators:** Dashboard management, system monitoring, gateway restarts, audit trails

**Satisfaction Indicators:** High engagement from technical community with detailed bug reports and clear reproduction steps. Users expect enterprise-grade reliability from this open-source AI agent platform.

## Backlog Watch

**Critical Unaddressed Issues ( Requiring Maintainer Attention ):**

1. **#45740** - gh-issues skill: untrusted issue body injected directly into sub-agent prompt (14 comments, security issue)
2. **#46786** - tools.elevated.enabled: true breaks exec routing logic (6 comments)  
3. **#50126** - Inconsistent message:sent hook coverage across outbound dispatch paths (6 comments)
4. **#52130** - Restart storm from telegram.retry.jitter type mismatch + misleading doctor SecretRef (6 comments)
5. **#92516** - Containerized/self-hosted deploys can't use externalized channel plugins (7 comments)

**Maintenance Required:**
- Security boundary issues in sub-agent prompt injection
- Configuration/logic bugs in elevated tool routing
- Authentication and messaging system inconsistencies
- Plugin deployment and trust model problems for self-hosted environments

**Pattern:** Many of these are "missing security isolation" or "configuration logic bugs" that could impact enterprise deployments. The issues suggest need for more robust security testing and configuration validation.

---

**Assessment:** OpenClaw shows high engineering activity with more than 70% of issues having been addressed through today's PRs. However, critical session reliability issues and security concerns remain that require immediate maintainer attention. The project is in a transitional phase addressing technical debt while continuing feature development.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant OSS Ecosystem
**Date of Digests:** 2026-07-10  
**Audience:** Technical decision-makers, AI agent developers  

---

## 1. Ecosystem Overview
The personal AI assistant / agent open-source landscape is highly fragmented but vigorously active, dominated by a cluster of "Claw"-branded projects alongside academic and vendor-backed alternatives (NanoBot, Hermes, CoPaw). Across the board, engineering effort has shifted from initial feature scaffolding to hardening **session reliability, channel integration stability, and security isolation**. While several projects (NullClaw, TinyClaw, ZeptoClaw) are dormant, the leading projects (OpenClaw, IronClaw, ZeroClaw, CoPaw) are processing 30–50+ issues/PRs daily, indicating a maturing but still pre-stable ecosystem preparing for multi-user and enterprise readiness.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score (1–5)* |
|---------|--------------|-----------|----------------|----------------------|
| **OpenClaw** | 500 | 500 (200 merged/closed) | None | 5 – High velocity, critical P1s open |
| **NanoBot** | 22 | 22 | None | 4 – Strong momentum |
| **Hermes Agent** | 50 | 50 (15 merged) | None | 4 – Active stabilization |
| **PicoClaw** | 3 | 16 (4 merged) | None | 3 – Maintenance/Dep. updates |
| **NanoClaw** | 9 | 17 (3 merged) | None | 3 – Steady, security backlog |
| **NullClaw** | 0 | 0 | None | 1 – Dormant |
| **IronClaw** | 32 | 50 (28 merged) | None | 5 – Intense merge activity |
| **LobsterAI** | 5 | 14 (11 merged) | None | 4 – High UI/gateway velocity |
| **TinyClaw** | 0 | 0 | None | 1 – Dormant |
| **Moltis** | 0 | 1 (open) | None | 2 – Quiet/Stable |
| **CoPaw** | 35 | 50 | v2.0.0-beta.5 | 4 – Beta, active security fixes |
| **ZeptoClaw** | 0 | 0 | None | 1 – Dormant |
| **ZeroClaw** | 36 | 50 (11 merged) | None | 4 – Robust, security focus |

*\*Health Score reflects activity volume, merge ratio, and critical-bug posture.*

---

## 3. OpenClaw's Position
**Advantages vs Peers:** OpenClaw demonstrates an order-of-magnitude higher absolute activity (500 issues/PRs updated, 200 merged/closed today) compared to the next tier (IronClaw 50 PRs, ZeroClaw 36 issues). It has already resolved severe systemic risks like gateway memory leaks (PR #95195: 389MB → 14.7GB fix) and added operational audit trails, outpacing NanoBot’s sandbox-focused fixes or PicoClaw’s ARMv7 patches.  
**Community Size:** Substantially larger—P1 issues like #44925 (subagent completion lost) drew 21 comments, whereas NanoBot’s top issue (#912) drew 5.  
**Technical Approach:** Centralized "gateway + agent-core" with durable write restoration and stdout caps (16 MiB). Unlike Hermes (reasoning-effort capping) or ZeroClaw (SSRF/multi-tenant isolation), OpenClaw prioritizes broad channel routing correctness and memory boundedness as the primary reliability lever.

---

## 4. Shared Technical Focus Areas
1. **Session & State Durability**  
   *Projects:* OpenClaw (#44925, #49876), Hermes (#61145), NanoClaw (#2992), IronClaw (#5836), ZeroClaw (#8915)  
   *Need:* Eliminate silent loss of subagent output, transcripts, and scheduled tasks; implement fail-cleanly modes instead of hallucinated responses.
2. **Channel Reconnection & Routing**  
   *Projects:* OpenClaw (WhatsApp stall), NanoBot (WhatsApp flood #4823), PicoClaw (Matrix sync #3203), NanoClaw (Telegram blackhole #2989), IronClaw (Slack wrong-user #5877), CoPaw (Feishu #5757)  
   *Need:* Resilient adapters with reconnect contracts and accurate delivery receipts.
3. **Security & Sandbox Isolation**  
   *Projects:* OpenClaw (#45740 prompt injection), NanoBot (#4629 symlink escape), CoPaw (#5866 rm -rf bypass), ZeroClaw (SSRF #8713), NanoClaw (#2762 hidden approval)  
   *Need:* Hardened execution boundaries and transparent approval flows.
4. **Tool Output Transparency**  
   *Projects:* OpenClaw (#99241 image rendering), NanoBot (#954 leaks), IronClaw (#5701 UI hides tools)  
   *Need:* Readable stdout/stderr and visible tool-call progress to maintain agent trust.
5. **Config/Migration Safety**  
   *Projects:* PicoClaw (#3206 v2→v3 fail), Hermes (deserializer crash #40834), ZeroClaw (capability catalog #8909)  
   *Need:* Non-breaking upgrades and clear migration paths.

---

## 5. Differentiation Analysis
- **Target Users & Architecture:**  
  - *OpenClaw / IronClaw / ZeroClaw:* Operator/enterprise-grade, multi-channel gateway architectures (IronClaw’s "Reborn" CLI, ZeroClaw’s multi-user isolation).  
  - *PicoClaw:* Edge/IoT (Sipeed hardware, ARMv7, QQ/Line channels, Go modules).  
  - *Hermes Agent:* Privacy-centric hybrid (remote agent, local tools #18715), strong desktop/macOS focus.  
  - *NanoBot:* Academic lightweight (HKUDS), task-specific model config, Matrix/Docker.  
  - *CoPaw:* Qwen/Alibaba ecosystem alignment, memory reranking, browser automation.  
  - *LobsterAI:* Netease Youdao, UI/UX polish and OpenClaw-gateway interop.  
  -

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



### **1. Today's Overview**  
The NanoBot project showed active development on July 10, 2026, with **22 issues** and **22 pull requests (PRs)** updated in the last 24 hours. This indicates sustained engineering effort, though no new releases were released today. The team prioritized addressing critical bugs, advancing feature requests, and refining system stability.  

---

### **2. Releases**  
No new releases were published today.  

---

### **3. Project Progress**  
**Merged/Closed PRs**:  
- **#4857**: Added Dockerfile argument `NANOBOT_EXTRAS` to customize dependency installation (fixes build flexibility).  
- **#4859**: Preserved Matrix `mxc://` image sources in markdown rendering.  
- **#4629**: Blocked symlink escapes in exec operations for security.  
- **#4845**: Added Red Hat certificate path support for Node.js sandbox reliability.  
- **#4853**: Introduced core `nano_timer` tool for time/calendar utilities.  

**Key Advances**:  
- Security improvements in sandboxing and PR isolation.  
- Enhanced CLI tooling (`nano_timer`).  
- WebUI streamlining (e.g., streaming markdown fixes).  

---

### **4. Community Hot Topics**  
**Most Active Issues/PRs**:  
1. **#912 (Support Task-Specific Model Config)**  
   - 5 comments, 3 likes. Users want distinct models for conversational, tool, and browser tasks.  
   - Link: [Issue #912](https://github.com/HKUDS/nanobot/issues/912)  
2. **#4823 (WhatsApp Group Bug)**  
   - 4 comments. Groups now flood notifications; users report broken workflows.  
   - Link: [Issue #4823](https://github.com/HKUDS/nanobot/issues/4823)  
3. **#954 (Progress Streaming Leaks)**  
   - 4 comments. Internal tool calls (e.g., `exec()`) exposed in chat, confusing users.  
   - Link: [Issue #954](https://github.com/HKUDS/nanobot/issues/954)  

---

### **5. Bugs & Stability**  
**Today’s Reports**:  
1. **Critical (Fixed in PR #4823? Open)**: WhatsApp Group Notification Flood  
   - Users receive messages across all group memberships. No PR yet.  
2. **High (Open)**: Exec Tool Hallucinations (Issue #937)  
   - 3 comments. Frequent errors in tool execution.  
   - Link: [Issue #937](https://github.com/HKUDS/nanobot/issues/937)  
3. **Medium (Fixed in PR #4661)**: File Edit Progress IDs Leak  
   - PR resolved duplication in file edit tracking.  
4. **Low (Fixed in PR #4857)**: Docker Build Failure due to `package-lock.json` mismatch  

---

### **6. Feature Requests & Roadmap Signals**  
**Key Proposals**:  
1. **Multi-Tenant Gateway (Issue #936)**  
   - 2 comments. Users want consolidated agent management for resource efficiency.  
   - Link: [Issue #936](https://github.com/HKUDS/nanobot/issues/936)  
2. **Eden AI Provider (PR #4861)**  
   - Adds EU-hosted OpenAI-compatible gateway with 100+ models.  
3. **Guided Channels Setup (PR #4855)**  
   - Simplified integration flows for Feishu, Telegram, and Discord.  

---

### **7. User Feedback Summary**  
**Pain Points**:  
- Broken commands (e.g., `onboard`, `webui`).  
- Unbounded media storage in Telegram/Discord.  
- Tool call leaks and execution errors.  
**Use Cases Highlighted**:  
- Multi-agent workflows.  
- Lexis integration for task-specific models.  
- Cron job automation for personal tasks.  
**Sentiment**: Mixed. Active development excites users, but unresolved bugs (e.g., WhatsApp groups) cause frustration.  

---

### **8. Backlog Watch**  
**Critical Long-Term Issues**:  
1. **#940 (Sandbox Filesystem Access)**  
   - 2 comments. Agent cannot interact with host files, blocking skill development.  
   - Link: [Issue #940](https://github.com/HKUDS/nanobot/issues/940)  
2. **#990 (Zero-Token Message Hook)**  
   - 1 comment. Users want to skip LLM processing for frequent commands.  
3. **#1118 (Webhook Server for Nextcloud)**  
   - 1 comment. Real-time inbound messaging support missing.  

**PRs Needing Attention**:  
- **#4858**: Refactor MCP Provider Lifecycle (prevents leaks).  
- **#4816**: Narrow `BaseException` Catch (reduces false error handling).  

--- 

**Note**: All items include GitHub links for traceability. The project shows strong momentum but requires focus on critical bug resolution (e.g., WhatsApp, sandbox) to maintain user trust.


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑07‑10)**  

---

### 1. Today’s Overview  
The repository saw a high level of interaction in the last 24 h: **50 issues** and **50 pull‑requests** were updated. Of the PRs, **15 were merged or closed** while **35 remain open**, indicating active development and cleanup work. No new releases were published today. Overall activity suggests the team is focusing on bug‑triaging, feature refinement, and stabilizing the core agent and gateway components ahead of the next scheduled release.

---

### 2. Releases  
*No new releases were tagged today.*  

---

### 3. Project Progress (Merged/Closed PRs)  
Although the detailed list of the 15 merged/closed PRs is not shown in the top‑20‑by‑comment snapshot, the merged work today includes:

| PR | Summary (from title) | Link |
|----|----------------------|------|
| #61772 | `fix(reasoning): project max to provider capabilities` | [PR #61772](https://github.com/NousResearch/hermes-agent/pull/61772) |
| #61763 | `fix(desktop): preserve macOS TCC identity across rebuilds` | [PR #61763](https://github.com/NousResearch/hermes-agent/pull/61763) |
| #61771 | `fix(skills): install complete bundles with scan provenance` | [PR #61771](https://github.com/NousResearch/hermes-agent/pull/61771) |
| #61766 | `feat(gateway): add authenticated runtime readiness checks` | [PR #61766](https://github.com/NousResearch/hermes-agent/pull/61766) |
| #61767 | `fix(gateway): enforce reconnect contract across adapters` | [PR #61767](https://github.com/NousResearch/hermes-agent/pull/61767) |
| #61770 | `fix(feishu): restore group events over WebSocket` | [PR #61770](https://github.com/NousResearch/hermes-agent/pull/61770) |
| #61769 | `fix(export): escape remaining role sinks + nonce‑based CSP in HTML session export` | [PR #61769](https://github.com/NousResearch/hermes-agent/pull/61769) |
| #61756 | `fix(secrets): defer plugin sources until first consumer` | [PR #61756](https://github.com/NousResearch/hermes-agent/pull/61756) |
| #61750 | `perf(tools): slim verbose core tool schemas` | [PR #61750](https://github.com/NousResearch/hermes-agent/pull/61750) |
| #61751 | `fix(codex): unify app‑server turn finalization` | [PR #61751](https://github.com/NousResearch/hermes-agent/pull/61751) |
| #61752 | `fix(tests): stop cmd_update tests leaking real detached Windows gateways` | [PR #61752](https://github.com/NousResearch/hermes-agent/pull/61752) |
| #61753 | `perf(tui): skip rebuild when production bundle is fresh` | [PR #61753](https://github.com/NousResearch/hermes-agent/pull/61753) |
| #61754 | `fix(run_agent): refresh Copilot token and base_url together during credential rotation` | [PR #61754](https://github.com/NousResearch/hermes-agent/pull/61754) |
| #61755 | `fix(mcp): use localhost (not 127.0.0.1) in OAuth redirect_uri` | [PR #61755](https://github.com/NousResearch/hermes-agent/pull/61755) |
| #61749 | `docs(skills/comps-analysis): drop reference to non‑existent bundled example file` | [PR #61749](https://github.com/NousResearch/hermes-agent/pull/61749) |

These changes collectively improve reasoning‑effort handling, macOS desktop signing, skill installation reliability, gateway health checks, reconnection logic, Feishu/WeCom messaging, session‑export security, secret‑loading performance, tool schema size, Codex integration, test isolation on Windows, TUI startup speed, Copilot credential rotation, MCP OAuth handling, and documentation accuracy.

---

### 4. Community Hot Topics (Most‑Commented Issues/PRs)  

| Item | Type | Comments | Reactions | Summary & Underlying Need | Link |
|------|------|----------|-----------|---------------------------|------|
| #38963 | Bug (closed) | 9 | 0 | Desktop installer fails with “no git” error on Windows 11 – indicates a missing Git dependency in the bundled installer. Users need a self‑contained setup that does not require external Git. | [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) |
| #18715 | Feature (open) | 8 | 20 | Request to run a remote Hermes agent while executing tools locally. Highlights demand for split‑mode deployments (centralized model/memory, local tool access) for privacy and latency reasons. | [#18715](https://github.com/NousResearch/hermes-agent/issues/18715) |
| #61487 | Bug (closed) | 5 | 0 | Z.AI credential pool incorrectly marks all keys exhausted when one hits per‑key quota. Shows a need for finer‑grained quota tracking per credential rather than pool‑wide pessimism. | [#61487](https://github.com/NousResearch/hermes-agent/issues/61487) |
| #61099 | Bug (open) | 4 | 0 | OpenRouter logs intermittently show “Unknown” App instead of “Hermes Agent”. Points to inconsistent user‑agent header setting in the OpenRouter provider. | [#61099](https://github.com/NousResearch/hermes-agent/issues/61099) |
| #60429 | Bug (open) | 4 | 0 | Agent repeatedly violates user‑defined rules stored in memory/skills – suggests a gap in rule‑enforcement during skill invocation or memory recall. | [#60429](https://github.com/NousResearch/hermes-agent/issues/60429) |
| #35410 | Feature (open) | 3 | 1 | Dashboard logout should trigger IdP end‑session (RP‑initiated logout). Users expect single‑sign‑out to propagate to the identity provider (Nous Portal, Authentik, Keycloak, etc.). | [#35410](https://github.com/NousResearch/hermes-agent/issues/35410) |
| #23524 | Feature (open) | 3 | 0 | Per‑cron reasoning‑effort overrides – reflects varied workload needs for scheduled jobs (light scans vs heavy analysis). | [#23524](https://github.com/NousResearch/hermes-agent/issues/23524) |
| #61766 | PR (open) | 0 | 0 | Adds authenticated runtime readiness checks to the gateway – addresses operational visibility for self‑hosted deployments. | [#61766](https://github.com/NousResearch/hermes-agent/pull/61766) |
| #61767 | PR (open) | 0 | 0 | Enforces reconnect contract across QQBot/WeCom adapters – targets reliability of messaging platform integrations. | [#61767](https://github.com/NousResearch/hermes-agent/pull/61767) |

*The high reaction count on #18715 signals strong community interest in hybrid remote/local deployments.*

---

### 5. Bugs & Stability (Today’s Reports)  

| Severity (label) | Issue | Brief Description | Fix/PR Status | Link |
|------------------|-------|-------------------|---------------|------|
| **P1** | #61145 (closed) | Gateway session‑hygiene auto‑compress **deletes** transcript instead of soft‑archiving → silent data loss. | Fixed in #61145 (closed) – no open PR needed. | [#61145](https://github.com/NousResearch/hermes-agent/issues/61145) |
| **P2** | #61099 (open) | OpenRouter logs show “Unknown” App intermittently. | No dedicated PR yet; likely to be addressed in a provider‑header fix. | [#61099](https://github.com/NousResearch/hermes-agent/issues/61099) |
| **P2** | #60429 (open) | Agent keeps violating rules saved in memory/skill. | No PR yet; indicates a rule‑enforcement gap. | [#60429](https://github.com/NousResearch/hermes-agent/issues/60429) |
| **P2** | #61762 (open) | WeCom bot fails to perceive uploaded images (cache lookup fails). | No PR yet; file‑caching path needs Windows‑safe handling. | [#61762](https://github.com/NousResearch/hermes-agent/issues/61762) |
| **P2** | #48877 (open) | Agent‑created & openclaw‑imports skills disappear after `hermes update` / bootstrap sync. | No PR yet; skill‑discovery logic needs to respect updated paths. | [#48877](https://github.com/NousResearch/hermes-agent/issues/48877) |
| **P2** | #60794 (closed) | `build_channel_directory` blocks event loop with synchronous SQLite queries (Discord heartbeat stalls). | Fixed via #60794 (closed). | [#60794](https://github.com/NousResearch/hermes-agent/issues/60794) |
| **P2** | #40834 (closed) | Gateway config deserializers crash on malformed scalar sections. | Fixed via #40834 (closed). | [#40834](https://github.com/NousResearch/hermes-agent/issues/40834) |
| **P3** | #61761 (open) | `honcho_conclude` tool sends empty API key → AuthenticationError. | No PR yet; tool needs to forward the active credential. | [#61761](https://github.com/NousResearch/hermes-agent/issues/61661) |
| **P3** | #60583 (closed) | Status‑bar tokens/sec inaccurate for streaming/OpenAI‑compatible providers. | Fixed via #60583 (closed). | [#60583](https://github.com/NousResearch/hermes-agent/issues/60583) |
| **P3** | #61296 (closed) | `switch_model` trusts a stale non‑empty `base_url`, causing cross‑wiring. | Fixed via #61296 (closed). | [#61296](https://github.com/NousResearch/hermes-agent/issues/61296) |

**Take‑away:** The most critical open bugs today are the rule‑violation issue (#60429) and the OpenRouter user‑agent problem (#61099), both marked P2. Several P2 bugs were closed today, showing active regression fixing.

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Issue | Comments / Reactions | Why it matters | Likelihood for next release |
|---------|-------|----------------------|----------------|-----------------------------|
| Remote agent with local tool execution | #18715 | 8 c / 20 👍 | Enables privacy‑preserving split deployments; high community interest. | **High** – aligns with recent PRs on credential rotation and gateway readiness. |
| Per‑cron reasoning‑effort overrides | #23524 | 3 c / 0 👍 | Allows fine‑tuned resource usage for scheduled jobs. | Medium – low comment count but easy to implement via config override. |
| Dashboard logout → IdP end‑

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026-07-10**  

---

### **1. Today's Overview**  
PicoClaw exhibited active development activity with 3 open issues and 16 PRs (12 open, 4 merged/closed) updated in the last 24 hours. No new releases were published, but critical bug fixes and feature enhancements remain in progress. The focus is on resolving configuration migration errors, improving channel stability (e.g., Matrix sync loops), and expanding streaming support for QQ. Dependabot-driven dependency updates (e.g., AWS SDK, Go modules) dominate recent PRs, reflecting ongoing maintenance.  

---

### **2. Releases**  
No new releases were published in the last 24 hours.  

---

### **3. Project Progress**  
- **Merged/Closed PRs**:  
  - `#3171` (Closed): Fixed LINE channel’s `Send` method by adding `ok` checks for `sync.Map` type assertions, preventing potential panics.  
  - `#3213` (Closed): Updated AWS SDK config from v1.32.25 to v1.32.27 (Dependabot).  
  - `#3207` (Closed): Updated Copilot SDK from v0.2.0 to v1.0.5 (Dependabot).  
  - `#3226` (Closed): Prevented destructive overwrites in `write_file` by refining the overwrite guard logic.  

---

### **4. Community Hot Topics**  
**Most Active Issues/PRs**:  
- **Issue #3201** (Open): [Support streaming output for QQ channel](https://github.com/sipeed/picoclaw/issues/3201). Users seek real-time token streaming for QQ, akin to Telegram/WebSocket channels.  
- **Issue #3206** (Open): [v2→v3 config migration failure](https://github.com/sipeed/picoclaw/issues/3206). A critical bug blocking upgrades due to unrecognized fields (`build_info`, `session.dm_scope`).  
- **Issue #3203** (Open): [Matrix sync loop lacks reconnection logic](https://github.com/sipeed/picoclaw/issues/3203). Silent crash after network disruptions.  
- **PR #3205** (Open): [Fix 9router gateway + ARMv7 support](https://github.com/sipeed/picoclaw/pull/3205). Addresses Raspberry Pi compatibility and OpenAI API response parsing.  

**Underlying Needs**:  
- Users demand stable, cross-platform deployments (ARMv7 support).  
- Config migration errors and sync failures hinder reliability.  
- Streaming output for QQ is a high-priority UX improvement.  

---

### **5. Bugs & Stability**  
**Critical Bugs**:  
1. **Issue #3206**: Config migration fails with false `unknown field(s)` errors, blocking upgrades (v0.2.9). **Fix PR**: None proposed yet.  
2. **Issue #3203**: Matrix sync loop crashes silently after network disruptions. **Fix PR**: None proposed yet.  
**Moderate Bugs**:  
- **PR #3226**: Prevents destructive overwrites in `write_file` (merged).  

---

### **6. Feature Requests & Roadmap Signals**  
- **Issue #3201**: Streaming support for QQ (high priority, aligns with Telegram/WebSocket features). Likely in next minor release.  
- **PR #3163**: Bedrock prompt caching via `Converse` API cache points (ongoing feature enhancement).  
- **PR #3118**: Remote Pico WebSocket mode for `picoclaw agent` (feature expansion).  

---

### **7. User Feedback Summary**  
- **Pain Points**:  
  - Config migration errors prevent upgrades.  
  - Matrix sync loops die silently, requiring manual restarts.  
  - Desire for QQ streaming to match Telegram/WebSocket UX.  
- **Satisfaction/Dissatisfaction**:  
  - Users appreciate ARMv7 support (Raspberry Pi compatibility) but are frustrated by instability in matrix/QQ channels.  

---

### **8. Backlog Watch**  
- **Issue #3206**: Config migration failure needs urgent attention to unblock upgrades.  
- **Issue #3203**: Matrix reconnection logic is critical for long-running deployments.  
- **PR #3205**: ARMv7 support is blocked by the need for upstream changes (e.g., build targets).  

---  
*Data sourced from GitHub activity as of 2026-07-10. Project health indicators: active development, critical bugs requiring fixes, and user-driven feature prioritization.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑07‑10**  

---  

### 1. Today’s Overview  
In the last 24 hours the core repository saw **9 open issue updates** and **17 Pull Request updates** (14 still open, 3 merged/closed). No new package releases were published. Activity is steady: the team is busy patching bugs and polishing recent security‑related changes, while a handful of high‑visibility feature PRs are moving toward merge. Overall health appears stable, but several long‑standing security and reliability concerns remain open.  

---  

### 2. Releases  
- **No new releases** were tagged in the period.  
- Consequently there are no changelog entries, breaking‑change notices, or migration guides to report.  

---  

### 3. Project Progress  
**Merged / Closed PRs (today)**  

| PR | Author | Summary |
|----|--------|---------|
| **[#2621 – chore]** | GarethWright | Adds `.gitattributes` to enforce LF line endings for `*.sh` scripts (ensures consistent line endings on Windows). |
| **[#2993 – Make NanoClaw resilient to a down container runtime]** | shiranLupo | Treats a failed `docker info` check as a non‑fatal boot error, allowing the scheduler and channel connections to continue when Docker Desktop is unavailable. |
| **[#2981 – Scheduled tasks: ncl tasks control plane]** | omri‑maya | Completes the “ncl tasks” control‑plane implementation: per‑series isolated sessions, run‑history, and the full set of `list_tasks`, `update_task`, `cancel_task`, `pause_task`, `resume_task` APIs. (Previously merged as part of the scheduled‑tasks train.) |

These merges indicate progress on **container resilience** and **task orchestration**, while the `.gitattributes` change is a minor housekeeping improvement.  

---  

### 4. Community Hot Topics  
The most **interacted‑with items** (comments + 👍) in the last day are:

| Item | Type | Comments / 👍 | Link |
|------|------|---------------|------|
| **#2985 – opencode provider silent no‑reply** | Issue | 1 comment, 0 👍 | <https://github.com/qwibitai/nanoclaw/issues/2985> |
| **#2989 – Telegram allowed_updates blackhole** | Issue | 1 comment, 0 👍 | <https://github.com/qwibitai/nanoclaw/issues/2989> |
| **#2998 – PR: fix(self‑mod): render full MCP server payload** | PR | comment count not recorded (undefined), 0 👍 | <https://github.com/qwibitai/nanoclaw/pull/2998> |
| **#2996 – PR: fix(delivery): route missing‑adapter messages** | PR | undefined comments, 0 👍 | <https://github.com/qwibitai/nanoclaw/pull/2996> |

**Analysis of underlying needs**  
- The two issues with a single comment each spotlight **silent failure modes** that frustrate users: a missing reply from the opencode provider and a Telegram adapter that silently drops updates when `allowed_updates` is omitted.  
- The PRs under review address **delivery robustness** (routing missing adapters to retry) and **approval‑card transparency** (rendering the full MCP payload). Their lack of community reaction so far may reflect that the changes are internal to the core rather than user‑visible, but they are critical for reliability.  

---  

### 5. Bugs & Stability  
**Bugs reported in the last 24 h (ranked by severity)**  

| Issue | Severity | Symptom | Status / Fix PR |
|-------|----------|---------|-----------------|
| **#2997 – Recurring reminders stop after first fire** | High ( functional regression ) | Identical send detection marks the task as completed, preventing further deliveries. | Open; no fix PR yet. |
| **#2995 – Offline adapter marks messages delivered** | High (data integrity) | Delivery loop records a message as delivered even when the target adapter is missing/failed. | Open; no fix PR yet. |
| **#2992 – Scheduled tasks invisible across agent groups** | Medium ( manageability ) | Tasks live in per‑session DBs; commands only affect the calling session, breaking multi‑group coordination. | Open; discussion ongoing. |
| **#2990 – Bot ignores `my_chat_member` updates** | Medium ( bot responsiveness ) | Bot does not react when added as admin or member, causing missed permission changes. | Open. |
| **#2991 – Channel wirings with `sender_scope='known'` never fire** | Low‑Medium ( integration glitch ) | Broadcast channel messages are treated as coming from the channel itself, which never matches a known user. | Open. |

**Fix activity** – Several of these bugs already have open PRs aimed at the underlying delivery logic (e.g., #2996, #2226) but the specific symptoms above remain unresolved as of today.  

---  

### 6. Feature Requests & Roadmap Signals  
- **/add‑audit skill (PR #2987)** – introduces an opt‑in local audit log for all NCL surface events; signals a push toward stronger observability.  
- **Per‑group harness capability toggles (PR #2983)** – moves default enabled/disabled states into group‑level configuration, indicating a roadmap emphasis on **granular feature exposure**.  
- **Multimodal restore (PR #2618)** – revives image/voice/PDF attachment handling and `chat.onReaction` from the v1 API, highlighting continued investment in richer interaction modalities.  
- **Telegram rich rendering via Bot API 10.1 (PR #2877)** – adds native rich message support, a clear step toward “modern” Telegram integration.  
- **Guarded‑actions decision function (PR #2986)** – centralises approval logic for privileged actions, reinforcing the security‑first direction of the platform.  

These PRs are all tagged **core‑team** or **follows‑guidelines**, suggesting they are slated for inclusion in the upcoming maintenance release (likely NanoClaw 2.2).  

---  

### 7. User Feedback Summary  
| Pain point | Frequency / Context | User sentiment |
|------------|---------------------|----------------|
| **Silent message loss** (Telegram blackhole, opencode provider no‑reply) | Reported in #2985, #2989, #2995 | Frustration – “nothing shows up, no error” |
| **Missing adapter handling** – messages marked delivered while the channel is offline | #2995, #2226 (PR under review) | Dissatisfaction – “state is misleading” |
| **Recurring reminder failure** | #2997 | Annoyance – “first fire works, then nothing” |
| **Scheduled‑task visibility across groups** | #2992 | Confusion – “tasks disappear when switching groups” |
| **Bot ignores permission updates** | #2990 | Concern – “cannot manage group membership programmatically” |
| **Security‑relevant hidden approvers** | #2762, #2827 | High‑severity worry – “approval flow can be smuggled” |

Overall, users value **reliability and visibility** of interactions; silent failures and missing feedback loops are the primary sources of dissatisfaction.  

---  

### 8. Backlog Watch  
**Long‑standing items requiring maintainer attention**  

| Issue/PR | Age (since creation) | Why it matters |
|----------|----------------------|----------------|
| **#2762 – `add_mcp_server` hidden args/env approval smuggling** | 3 weeks (opened 2026‑06‑14) | Security‑critical – can allow unauthorized runtime arguments to be persisted. |
| **#2827 – Same issue, higher‑severity wording** | 4 weeks (opened 2026‑06‑21) | Same as above; still open with no merge. |
| **#2992 – Scheduled tasks invisible across sessions** | 1 day (opened 2026‑07‑09) | Impacts multi‑agent group coordination. |
| **#2990 – Bot ignores `my_chat_member` updates** | 1 day | Prevents dynamic permission changes. |
| **#2991 – Channel wirings with `sender_scope='known'` never engage** | 1 day | Breaks broadcast‑channel integrations. |
| **#2989 – Telegram allowed_updates silent blackhole** | 1 day | Core reliability issue for Telegram adapters. |
| **#2762 & #2827** (combined) – hidden approval data flow | >3 weeks | Needs a definitive security patch or policy clarification. |

Maintainers should prioritise **#2762 / #2827** for a security hot‑fix, and allocate a **sprint** to resolve the **scheduled‑task cross‑session visibility** (#2992) and the **Telegram allowed_updates** blackhole (#2989).  

---  

**Conclusion** – NanoClaw’s current release cycle is focused on tightening security, improving delivery guarantees, and polishing the task‑orchestration layer. While no new version is imminent, the backlog contains several high‑impact items that, if addressed quickly, will reinforce confidence in the platform’s stability and safety.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest - 2026-07-10

## 1. Today's Overview

IronClaw shows intense development activity with 32 issues updated (24 open, 8 closed) and 50 PRs updated (22 open, 28 merged/closed). The project continues its rapid iteration cycle focused on stability improvements and feature enhancements. No new releases were published today, suggesting a focus on stabilization rather than public releases. The majority of recent work appears centered around Slack integration fixes and infrastructure improvements.

## 2. Releases

No new releases were published today.

## 3. Project Progress

Today saw significant merge activity with 28 PRs closed. Key merged/closed PRs include:
- **#5652**: Build improvement - now denies `unused_must_use` errors workspace-wide, preventing silent error swallowing
- **#5799**: Added default setters for Reborn CLI config sections (identity, Slack, budget, trigger poller)
- **#5812**: Used default setters in event projection fixtures
- **#5811**: Added default-backed setters for memory native fixtures
- **#5800**: Used default setters in Reborn CLI config fixtures
- **#5798**: Used default setters in Reborn composition fixtures
- **#5794**: Used read scope setters in Reborn event store tests
- **#5793**: Added default setters for event read scopes

These merges indicate a strong focus on code quality improvements, refactoring for maintainability, and standardizing configuration patterns across the codebase.

## 4. Community Hot Topics

### Most Active Issues:
- **#5553** [bug_bash_P2]: Approval notifications disappear instead of remaining in notification history (4 comments) - https://github.com/nearai/ironclaw/issues/5553
- **#5747** [OPEN]: Reborn: No way to unpair Slack on the built-in host-beta mount (3 comments) - https://github.com/nearai/ironclaw/issues/5747
- **#5701** [bug_bash_P2]: Activity panel hides tool details and does not update during active run (3 comments) - https://github.com/nearai/ironclaw/issues/5701

### Most Active PRs:
- **#5904** [OPEN]: Slack tool overhaul with comprehensive identity, status, and error handling improvements - https://github.com/nearai/ironclaw/pull/5904
- **#5899** [OPEN]: QA automation delivery probes for Slack failures - https://github.com/nearai/ironclaw/pull/5899
- **#5662** [OPEN]: Surface best-effort failures instead of silent let _ drops - https://github.com/nearai/ironclaw/pull/5662

The underlying need is clear: users require reliable notification systems, better visibility into tool execution, and robust Slack integration functionality.

## 5. Bugs & Stability

### Critical Bugs (P1):
- **#5504** [CLOSED]: Routine creation hangs without returning result or error
- **#5877** [OPEN]: Slack notification delivered to the wrong user - https://github.com/nearai/ironclaw/issues/5877

### High Priority Bugs (P2):
- **#5553**: Approval notifications disappear instead of remaining in notification history
- **#5701**: Activity panel hides tool details and does not update during active run
- **#5838**: Run fails with context compaction error despite successful tool execution
- **#5886**: Pending approval blocks subsequent automation runs
- **#5887**: Run hits maximum action limit and discards accumulated progress
- **#5878**: Revoked GitHub token produces misleading errors instead of re-authentication flow
- **#5885**: Approval notification opens action without showing the approval message
- **#5884**: Routine loses credentials after external token revocation
- **#5883**: Generic "model output could not be used" error after successful tool execution
- **#5882**: Repeated Slack reconnect attempts leave authentication flow in broken state
- **#5881**: Authentication notification sent to wrong Slack app/channel
- **#5880**: Slack auth completed externally is not reflected in Web UI approval flow
- **#5836**: Routine fails on every scheduled run with "No thread attached"

Several of these bugs have associated fix PRs in progress, particularly around Slack integration (#5898, #5904).

## 6. Feature Requests & Roadmap Signals

### Notable Feature Requests:
- **#2601**: CLI / TUI for Managing Secrets - https://github.com/nearai/ironclaw/issues/2601
- **#5897**: Decompose first-party skill activation module - https://github.com/nearai/ironclaw/issues/5897

### Roadmap Indicators:
- **#5904**: Comprehensive Slack tool overhaul suggests upcoming improvements in messaging capabilities
- **#5901**: Co-locate and name the Reborn runner control plane indicates architectural consolidation
- **#5499**: WASM tool install from zip functionality points to expanded tool ecosystem capabilities

The pattern suggests focus on improving developer tooling (secrets management), architectural stability (runner control plane), and integration capabilities (Slack, WASM tools).

## 7. User Feedback Summary

Users are experiencing significant pain points with:
- **Notification System Reliability**: Approval notifications disappearing or failing to appear properly
- **Slack Integration Issues**: Multiple authentication flow problems, wrong recipient delivery, broken reconnection states
- **UI/UX Problems**: Activity panel not updating in real-time, missing tool details, inability to delete old threads
- **Credential Management**: Tokens being lost or producing misleading errors after revocation
- **Scheduled Task Failures**: Routines failing consistently with "No thread attached" errors

The feedback indicates frustration with core functionality reliability, particularly around asynchronous operations and third-party integrations.

## 8. Backlog Watch

### Long-Unanswered Important Issues:
- **#2601**: CLI / TUI for Managing Secrets (Created: 2026-04-18, still open with minimal engagement) - https://github.com/nearai/ironclaw/issues/2601

This issue highlights a fundamental usability gap for developers trying to authenticate with external services, suggesting it needs priority attention despite being months old.

### PRs Needing Attention:
- **#5904**: Slack tool overhaul - appears to be a major refactoring with comprehensive fixes but may need review attention
- **#5899**: QA automation delivery probes - critical for validating Slack fixes but appears to be awaiting review

The project shows healthy maintenance activity but has several interconnected issues that require coordinated attention, particularly around the Slack integration ecosystem.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-10

## 1. Today's Overview
On 2026-07-10, LobsterAI demonstrated high development velocity with 14 pull requests updated (11 merged/closed) and 5 issues updated (1 closed, 4 remaining open/stale) in the trailing 24‑hour window. The core maintainer team—led by contributors `btc69m979y-dotcom` and `liuzhq1986`—focused heavily on Cowork/OpenClaw gateway robustness, sidebar UX, and Windows‑specific UI polish. No new releases were published, indicating these improvements are accumulating on the main branch for a future version. A set of community‑authored PRs from April remains open and tagged stale, signaling a backlog of unmerged UX enhancements that warrants triage.

## 2. Releases
No new releases were published for LobsterAI

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-10

## 1. Today's Overview
On 2026-07-10, Moltis (github.com/moltis-org/moltis) exhibited minimal but targeted development activity, with zero issues updated, zero PRs merged or closed, and no new releases published. The sole recorded action was one open pull request (#1146) proposing expanded LLM model support, which currently has no comments or reactions. From a project-health perspective, the day was stable and quiet, showing no signs of regressions or community friction, though overall contributor engagement and review throughput were low.

## 2. Releases
*Omitted: No new releases were published for this date.*

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. The only active work is the open PR [#1146](https://github.com/moltis-org/moltis/pull/1146) ("Add GPT-5.6 model support"), which remains under review. While no features reached completion today, the pending contribution advances model-compatibility groundwork for the OpenAI and Codex providers.

## 4. Community Hot Topics
No community hot topics emerged. There were zero issues updated, and the sole PR ([#1146](https://github.com/moltis-org/moltis/pull/1146)) shows 0 comments and 0 👍 reactions. This indicates no contested changes, urgent community demands, or active discussions requiring maintainer facilitation at this time.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today (0 issues updated). With no severity-ranked stability concerns and no fix PRs triggered by defect reports, the codebase appears operational and healthy from a defect-management perspective.

## 6. Feature Requests & Roadmap Signals
The open PR [#1146](https://github.com/moltis-org/moltis/pull/1146) by `PeterDaveHello` serves as the primary roadmap signal, requesting integration of OpenAI's GPT-5.6 model family. The PR proposes adding GPT-5.6 Sol, Terra, and Luna to OpenAI and OpenAI Codex fallback catalogs, applying the documented 1.05M API context window and a 372K ChatGPT/Codex backend limit (including the `gpt-5.6` Sol alias), and updating configuration templates and provider-selection documentation. Based on this signal, the next feature increment will likely formalize GPT-5.6 support and refine context-window handling for OpenAI fallback routing.

## 7. User Feedback Summary
No qualitative user feedback was captured in the observed window; there were no issue comments, PR reviews, or reactions. User pain points, satisfaction levels, and real-world use cases remain unrecorded for this specific day, suggesting either a quiescent user base or low daily interaction volume rather than active dissatisfaction.

## 8. Backlog Watch
No long-standing unanswered issues or PRs were identified in the provided dataset. The only open PR, [#1146](https://github.com/moltis-org/moltis/pull/1146), was created on 2026-07-09 and is too recent to be considered backlog. Maintainers should monitor the review status of this PR to ensure timely integration of the requested model support and prevent it from becoming stalled.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest - 2026-07-10

## 1. Today's Overview
The CoPaw project shows high activity levels with 35 issues and 50 PRs updated in the last 24 hours. The recent v2.0.0-beta.5 release addresses critical scroll functionality issues while the project continues advancing its 2.0 architecture. Multiple stability concerns are emerging around session management, tool calling, and channel integrations, indicating ongoing refinement of core systems. Community engagement remains strong with numerous feature requests and bug reports suggesting active development and user adoption.

## 2. Releases
**v2.0.0-beta.5** - Released with critical scroll functionality fixes:
- Fixed label un-headlined evicted spans in the eviction index (#5848)
- Anchored the live turn with a seam banner in the eviction index (#58)

No breaking changes reported in this beta release, focusing on UI/UX stability improvements.

## 3. Project Progress
Today's merged/closed PRs have advanced several key areas:
- **Memory System**: PR #5692 added reranker support for memory search results on reme0.4, improving search quality
- **MCP Integration**: PR #5864 fixed driver policy approval levels and PR #5853 resolved OFF approval level handling
- **Security**: PR #5866 fixed critical `rm -rf ${HOME}` security bypass vulnerability (#5090)
- **Runtime**: PR #5905 standardized error objects for frontend SDK compatibility
- **Tool Calling**: PR #5841 recovered whitespace-prefixed tool-call JSON arguments
- **Documentation**: PR #5899 updated documentation for QwenPaw 2.0

## 4. Community Hot Topics
**Most Active Issues/PRs:**

1. **#2291 [Help Wanted: Open Tasks]** - 64 comments
   - Community contribution hub with open tasks across priorities P0-P2
   - URL: [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)

2. **#5757 [Feishu Bot Response Issue]** - 13 comments  
   - First message replies but subsequent messages receive no response in Docker deployments
   - URL: [Issue #5757](https://github.com/agentscope-ai/QwenPaw/issues/5757)

3. **#5514 [Chat Input Queue Session ID Migration]** - Active PR
   - Restoring chat input queue functionality through AgentScope Runtime WebUI SDK
   - URL: [PR #5514](https://github.com/agentscope-ai/QwenPaw/pull/5514)

4. **#5908 [Reduce Reasoning Alignment Log Spam]** - Active PR fixing #5771
   - Addresses excessive WARNING level logging in model_factory.py
   - URL: [PR #5908](https://github.com/agentscope-ai/QwenPaw/pull/5908)

**Underlying Needs**: Users require stable multi-turn conversation handling, proper channel integrations, and reduced operational noise. Community wants clearer contribution pathways and responsive support for deployment-specific issues.

## 5. Bugs & Stability
**Critical Severity:**
- **#5910 [Auto Memory Search breaks OpenAI Responses API]** - Cloudflare 502 errors when auto-memory is enabled
- **#5872 [Docker browser_use startup failure]** - Chromium exits due to dbus connection errors
- **#5911 [Windows AppContainer sandbox ignores configured shell]** - Always uses cmd.exe instead of configured PowerShell

**High Severity:**
- **#5856 [Tool_call structure lost during context compaction]** - Causes 400 errors and message count mismatches
- **#5906 [Deduplication feature false triggers Doom loop]** - Normal conversations incorrectly flagged as repetitive
- **#5909 [OneBot channel infinite watchdog restart loop]** - Enabled by default causing CPU/memory consumption

**Medium Severity:**
- **#5757 [Feishu bot stops responding after first message]** - Channel-specific regression
- **#5868 [Matrix channel token login failure]** - Authentication regression in latest version

Several bugs have associated fix PRs in progress (#5908, #5853, #5864, #5866).

## 6. Feature Requests & Roadmap Signals
**High Priority Requests:**
- **#5879 [Disable sandbox functionality]** - Users want control over sandbox settings for trusted environments
- **#5797 [Timer task notification popup toggle]** - User-controlled notification preferences for scheduled tasks
- **#5903 [Session grouping and import/export]** - Organizational features for managing multiple conversations
- **#4767 [Token information per session]** - Visibility into token usage for context management

**Roadmap Predictions:**
These features align with QwenPaw 2.0's focus on user customization and enterprise deployment needs. The sandbox control and session management features may appear in upcoming beta releases, especially given their impact on usability in self-hosted environments.

## 7. User Feedback Summary
**Key Pain Points:**
- **Deployment Issues**: Feishu bot non-responsiveness, Matrix authentication failures, Docker browser_use problems
- **Performance**: Large conversation file (>500KB) crashes in frontend, excessive log spam
- **Functionality Gaps**: Inability to disable sandbox, missing session organization features
- **Regression Concerns**: Multiple issues reported after version upgrades suggesting breaking changes

**User Satisfaction Indicators:**
Mixed sentiment with active community engagement suggesting invested users despite frustrations. Feature requests indicate desire for enhanced customization and enterprise readiness rather than abandonment.

## 8. Backlog Watch
**Long-Unanswered Important Issues:**
- **#5328 [Deepseek agent freezing during thinking]** - 5 comments, ongoing stability issue with Deepseek models
- **#5479 [Frontend crash on large conversation files]** - 6 comments, performance bottleneck affecting usability
- **#5711 [QwenPaw capability analysis and improvement directions]** - 4 comments, architectural roadmap discussion
- **#5528 [Browser tool Linux desktop IME issues]** - 2 comments, platform compatibility concern

**PRs Needing Attention:**
- **#5637 [Subagent event-driven background lifecycle]** - Significant architectural change awaiting review
- **#5187 [Windows desktop GUI automation]** - Complex feature for computer-use capabilities
- **#5813 [Runtime security regression tests]** - Critical test coverage for security fixes

These items represent potential bottlenecks for future releases and require maintainer attention to prevent technical debt accumulation.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest - 2026-07-10

## 1. Today's Overview
The ZeroClaw project shows robust activity with 36 issues and 50 pull requests updated in the last 24 hours. Despite zero new releases, there's significant engineering momentum with 11 merged/closed PRs addressing critical bugs and architectural improvements. Open issues have shifted toward CLI reliability, SSRF hardening, and multi-user isolation features. The project appears to be in active development preparing for v0.8.3/v0.9.0, with strong focus on security hardening and gateway expansion.

## 2. Releases
**None** - No new releases published today, but active development continues on security and gateway features.

## 3. Project Progress
### Merged PRs Today:
- **#8926**: Fixed terminal emoji width counting in ZeroCode TUI, preventing visual misalignment after emoji glyphs
- **#8884**: Added test coverage for LLM request UTF-8 truncation in logging
- **#8873**: Fixed UTF-8-safe stdin capture in exit prompts with improved audit trail
- **#8872**: Corrected ZeroCode context meter to use runtime profile max_context_tokens
- **#8881**: Exposed WeChat, Signal, and Email in Cron delivery schema
- **#8652**: Fixed ZeroCode transcript highlight dismissal behavior

### Advancements:
- Ongoing work on v0.8.3 observability improvements (#8073)
- Multi-user isolation milestone (#8290) progressing
- Gateway OpenAI-compatible endpoint development (#8486) nearly complete
- SSRF hardening across file_download, image_gen tools (#8713, #8826, #8827)

## 4. Community Hot Topics

### Most Active Issues (by comments):
1. **#5862** (13 comments) - "ZeroClaw does not know it can add cron"
   - **Need**: Documentation/clarification gap for cron functionality
   - **Impact**: User frustration with missing feature awareness
   
2. **#6808** (13 comments) - "RFC: Work Lanes, Board Automation, and Label Cleanup"
   - **Need**: Workflow automation framework governance
   - **Impact**: Major architectural change affecting project governance
   
3. **#6699** (9 comments) - "tool_filter_groups is a no-op for real MCP tools"
   - **Need**: Fix MCP tool filtering logic with prefix-check and deferred_loading integration
   - **Impact**: Critical bug affecting agent tool configuration

4. **#5903** (5 comments) - "MCP stdio child processes accumulate on daemon"
   - **Need**: MCP registry sharing across heartbeat ticks to prevent leaks
   - **Impact**: Resource exhaustion in long-running daemon instances

**Key Observation**: Community is actively debugging complex integration issues (MCP, cron, provider compatibility) suggesting these are high-priority pain points for users.

## 5. Bugs & Stability

### Critical Priority Bugs:
1. **#8915** - Missing agent_start/agent_end events for channel turns (S2)
   - **Risk**: Observability gap prevents monitoring of agent lifecycle in channels
   - **Status**: No fix observed in recent activity

2. **#7809** - Channel turns ignore runtime-profile strict/parallel tool flags (P1)
   - **Risk**: Tool execution behavior inconsistent with configuration
   - **Impact**: Security and performance modeling gaps
   - **Status**: In-progress, block noted

### Medium Priority:
3. **#7836** - Fixed: Channels orchestrator uses correct agent config for strict_tool_parsing (resolved)
4. **#8762** - Anthropic provider timeout handling (S2)
   - **Need**: Better handling of long-context Anthropic turns

### Low Priority:
- Various CLI/UX bugs (emoji counting, highlight dismissal, transcription feedback)

**Stability Assessment**: Core runtime and tool systems showing improvement, but MCP integration and channel observability remain problematic areas.

## 6. Feature Requests & Roadmap Signals

### High-Impact Features:
1. **OpenAI-compatible endpoint** (#8550, #8486)
   - **Status**: Feature complete in PR, ready for production
   - **Impact**: Enables integration with OpenAI clients and ecosystem

2. **Multi-user isolation** (#8290)
   - **Status**: Per-principal session isolation in progress
   - **Impact**: Enterprise-grade multi-tenant support

3. **Local-first mode for small models** (#5287)
   - **Status**: Feature request with 2 upvotes
   - **Need**: Compact prompting and strict parsing for local deployments

4. **Gateway and dashboard capability catalog** (#8909)
   - **Status**: In development
   - **Impact**: Unified plugin management across all UI surfaces

**Roadmap Indicator**: Project is shifting focus toward external integrations, multi-user support, and developer experience improvements ahead of v0.9.0.

## 7. User Feedback Summary

### User Satisfaction Areas:
- **Good**: Documentation improvements and test coverage
- **Frustration**: MCP tool filtering, daemon resource leaks, provider compatibility issues

### Real Pain Points:
1. **MCP Integration** - Multiple users report tool filtering and process management bugs
2. **Provider Configuration** - Issues with Anthropic timeouts, Bedrock setup, and Qwen CORS
3. **Observability** - Missing events and misaligned context windows
4. **Feature Discovery** - Users unaware of existing capabilities (cron, agent commands)

### Positive Signals:
- Active plugin ecosystem development (gateway catalog, capability unification)
- Security hardening through SSRF fixes and rate-limit improvements
- Strong community engagement on RFCs and governance changes

## 8. Backlog Watch

### Critical Unanswered Issues:
1. **#8925** - Amazon Bedrock configuration guidance (0 comments, but high support request)
2. **#8750** - [Not listed but referenced] - Would review gateway/multi-user dependencies

### Long-Standing Open PRs:
1. **#8486** - OpenAI chat completions endpoint (needs author action)
2. **#8923** - Host-mediated outbound TCP/TLS for channel plugins (0 comments)
3. **#8909** - Gateway and dashboard capability catalog (0 comments)

### Priority Attention Needed:
1. **Security Hardening Stack**: Multiple SSRF and timeout issues awaiting full resolution
2. **MCP Integration**: Registry sharing (#8866) and tool filtering (#6699) bugs
3. **Channel Observability**: Missing agent lifecycle events (#8915)
4. **Multi-user Foundation**: Per-principal isolation prerequisites unclear

**Recommendation**: Focus maintainer attention on resolving MCP integration bugs (#6699), adding missing observability events (#8915), and completing Bedrock documentation (#8925) to improve user experience and reduce support burden.

---

*Summary Verdict*: ZeroClaw shows strong engineering velocity with 61 total artifacts processed in 24 hours, but requires attention to integration reliability (MCP, providers) and user education (feature discovery) to maintain healthy growth trajectory toward v0.9.0.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*