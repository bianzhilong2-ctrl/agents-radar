# OpenClaw Ecosystem Digest 2026-06-16

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-16 02:50 UTC

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

# OpenClaw Project Digest | 2026-06-16

## Today's Overview
OpenClaw is experiencing a period of intense development and high maintenance volatility, with 1,000 total updates to Issues and PRs in the last 24 hours. The project is currently balancing the expansion of its messaging channel ecosystem against severe stability issues, including critical memory leaks and session lock bugs. While the release of a new beta indicates steady progress, the high ratio of open to closed items suggests a significant backlog of technical debt and stability regressions.

## Releases
**v2026.6.8-beta.2**
- **Channel Enhancements:** Major improvements to Telegram and WhatsApp delivery.
- **Rich Media:** Telegram now supports structured rich text (tables, lists, expandable blockquotes) and safer rich-media handling.
- **CLI Backend:** Improvements to prompt-preserving CLI delivery and the retirement of native draft migration.

## Project Progress
The project saw 83 PRs merged or closed today. Key advancements include:
- **Messaging Stability:** Efforts to deduplicate Feishu private-chat messages via stable retry identities ([PR #93449](https://github.com/openclaw/openclaw/pull/93449)).
- **Infrastructure:** Implementation of structured custom error handlers via `OPENCLAW_ERROR_HANDLER` ([PR #93310](https://github.com/openclaw/openclaw/pull/93310)).
- **Media Handling:** Extension of the media-understanding pipeline to allow agents to extract text from large inbound PDFs ([PR #92220](https://github.com/openclaw/openclaw/pull/92220)).

## Community Hot Topics
- **Cross-Platform Availability:** Issue [#75](https://github.com/openclaw/openclaw/issues/75) is the most active discussion, highlighting a strong demand for native Linux and Windows apps to match the existing macOS/iOS/Android ecosystem.
- **UX Leaks:** High concern over internal agent "thought processes" (text between tool calls) leaking into user-facing messaging channels ([#25592](https://github.com/openclaw/openclaw/issues/25592)), indicating a need for better output filtering.
- **Resource Optimization:** Discussions around reducing tool schema token overhead ([#14785](https://github.com/openclaw/openclaw/issues/14785)) and implementing tiered bootstrap loading ([#22438](https://github.com/openclaw/openclaw/issues/22438)) to save context window budget.

## Bugs & Stability
| Severity | Issue/PR | Summary | Status |
| :--- | :--- | :--- | :--- |
| **Critical** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | **Gateway Memory Leak:** RSS grows from 350MB to 15.5GB over days, causing OOM crashes. | **Open** |
| **High** | [#32296](https://github.com/openclaw/openclaw/issues/32296) | **Session Confusion:** Agent replies to previous messages instead of the current one. | **Open** |
| **High** | [#22676](https://github.com/openclaw/openclaw/issues/22676) | **Signal Daemon Race:** Orphaned processes and send failures during SIGUSR1 restarts. | **Open** |
| **Medium** | [#32473](https://github.com/openclaw/openclaw/issues/32473) | **Control UI Regression:** HTTPS/localhost secure context requirement for device identity. | **Open** |
| **Medium** | [#40611](https://github.com/openclaw/openclaw/issues/40611) | **Telegram Blocking:** Heartbeat drift fix causing aggressive retries that block active chats. | **Open** |

## Feature Requests & Roadmap Signals
- **Security Hardening:** Strong demand for "Masked Secrets" to prevent agents from seeing raw API keys ([#10659](https://github.com/openclaw/openclaw/issues/10659)) and filesystem sandboxing ([#7722](https://github.com/openclaw/openclaw/issues/7722)).
- **Agent Orchestration:** Requests for "Post-subagent completion hooks" ([#22358](https://github.com/openclaw/openclaw/issues/22358)) and a "Distributed Agent Runtime" to separate the control plane from compute ([#42026](https://github.com/openclaw/openclaw/issues/42026)).
- **Predictive Next Version:** Expect upcoming updates to focus on **Memory Trust Tagging** ([#7707](https://github.com/openclaw/openclaw/issues/7707)) and **Slack Block Kit support** ([#12602](https://github.com/openclaw/openclaw/issues/12602)) to improve interactive UX.

## User Feedback Summary
- **Pain Points:** Users are frustrated by "leaky" internal monologues in chats, memory leaks crashing gateways, and the difficulty of running the Android app without prebuilt APKs ([#9443](https://github.com/openclaw/openclaw/issues/9443)).
- **Use Cases:** High interest in high-stakes workflows (finance/security) where "hard gates" are required to force tool calls before responding ([#13583](https://github.com/openclaw/openclaw/issues/13583)).
- **Satisfaction:** Positive reception of the richer Telegram delivery in the latest beta, though routing bugs (DMs polluting main sessions) persist ([#41165](https://github.com/openclaw/openclaw/issues/41165)).

## Backlog Watch
- **Android APKs:** [#9443](https://github.com/openclaw/openclaw/issues/9443) (Requested since Feb 2026) remains open despite high visibility.
- **Backup/Restore Utility:** [#13616](https://github.com/openclaw/openclaw/issues/13616) is a critical gap for production users needing disaster recovery and environment migration.
- **Dynamic Model Discovery:** [#10687](https://github.com/openclaw/openclaw/issues/10687) is necessary for providers like OpenRouter to prevent static catalog obsolescence.

---

## Cross-Ecosystem Comparison

**1. Ecosystem Overview**  
The open‑source personal AI agent landscape in mid‑2026 is characterized by rapid iteration on core runtime reliability (memory leaks, session handling, fallback logic) while simultaneously expanding multi‑channel messaging support and tool‑ecosystem extensibility. Most projects are balancing bug‑fix backlogs with feature work that enables richer media handling, remote/MCP‑style tool servers, and cross‑platform native clients. Community engagement varies widely – a few repositories (OpenClaw, Hermes Agent, IronClaw) see hundreds of daily updates, indicating large contributor bases, whereas many niche agents show low or no recent activity. Overall, the ecosystem is maturing from experimental prototypes toward production‑ready agents, but stability and usability pain points remain common across the board.

---

**2. Activity Comparison**  

| Project | Issues Updated (24 h) | PR Updates (24 h) | Merged/Closed PRs (24 h) | Release Status (last 24 h) | Health Score* |
|---------|----------------------|-------------------|--------------------------|----------------------------|---------------|
| **OpenClaw** | ~1 000 total issue/PR updates (exact split not given) | – (included above) | 83 | **Yes** – v2026.6.8‑beta.2 | Medium |
| **NanoBot** | 4 | 25 | 1 | No | Medium‑High |
| **Hermes Agent** | 50 | 50 | 5 | No | Medium |
| **PicoClaw** | 3 (1 open, 2 closed) | 13 (10 open, 3 merged/closed) | 3 | **Yes** – nightly v0.2.9‑nightly.20260616 | High |
| **NanoClaw** | 0 | 12 (9 opened, 3 merged/closed) | 3 | No | High |
| **NullClaw** | Low (unspecified) | Low (unspecified) | 0 | No | Medium |
| **IronClaw** | ~100 total issue/PR updates (split not given) | – | – (activity focused on PRs) | No | Medium‑High |
| **LobsterAI** | Not reported | Not reported | Not reported | No | Low |
| **TinyClaw** | 0 | 0 | 0 | No | Low |
| **Moltis** | 0 | 2 (both open) | 0 | No | Medium |
| **CoPaw** | Not reported | Not reported | Not reported | No | Low |
| **ZeptoClaw** | 0 | 0 | 0 | No | Low |
| **ZeroClaw** | Data unavailable | Data unavailable | Data unavailable | No | Low |

\*Health Score is a qualitative synthesis of activity level, severity of open critical bugs, and release cadence: **High** = steady progress, few/no critical regressions; **Medium** = active development but notable stability issues; **Low** = minimal recent updates or unresolved blockers.

---

**3. OpenClaw’s Position**  

*Advantages vs. Peers*  
- **Scale of Contribution:** OpenClaw logs the highest raw volume of updates (~1 000 issue/PR touches in 24 h), signalling a larger and more active contributor base than most peers (e.g., NanoBot ≈ 30, Hermes ≈ 100).  
- **Release Cadence:** It shipped a beta release (v2026.6.8‑beta.2) within the period, whereas many projects (Hermes, NanoBot, IronClaw) had no new releases.  
- **Breadth of Messaging Channels:** Ongoing work on Telegram, WhatsApp, Feishu, and CLI backends shows a wider native‑channel coverage than most agents that focus on 1‑2 platforms.

*Technical Approach Differences*  
- OpenClaw emphasizes a **gateway‑centric architecture** where a central process handles all channel I/O, leading to the observed gateway memory leak.  
- By contrast, NanoClaw and Hermes Agent favor **container‑isolated per‑session runtimes** (NanoClaw adds `--shm-size=1g`; Hermes isolates Telegram getUpdates) to contain leaks.  
- OpenClaw’s recent PRs introduce structured error handling (`OPENCLAW_ERROR_HANDLER`) and media‑understanding pipelines, while peers are more focused on fallback logic (NanoBot) or OAuth fixes (Hermes).

*Community Size Comparison*  
- The sheer number of concurrent PRs/issues suggests OpenClaw’s community is likely **2‑3× larger** than the next most active projects (Hermes Agent, IronClaw). Smaller agents such as PicoClaw or NanoClaw have tighter, more focused contributor groups.

---

**4. Shared Technical Focus Areas**  

| Focus Area | Projects Highlighting It | Specific Needs / Signals |
|------------|--------------------------|--------------------------|
| **Memory / Resource Leaks** | OpenClaw (gateway leak), Hermes Agent (zombie dashboard processes), NanoClaw (Chromium OOM due to shm) | Fix unbounded RSS growth, limit shared‑memory, add health‑checks. |
| **Session / Message Ordering** | OpenClaw (session confusion), NanoBot (duplicate user turn on empty response), Hermes (Telegram 409 loops) | Deduplication, stable retry IDs, proper turn‑preserving logic. |
| **Robust Fallback for LLM Outputs** | NanoBot (empty DeepSeek responses), Hermes (Anthropic OAuth rejection), IronClaw (tool failure recovery) | Detect empty/invalid outputs and trigger alternative models or retry mechanisms. |
| **Media & Attachment Handling** | OpenClaw (PDF text extraction, WhatsApp media routing), NanoClaw (WhatsApp inbound media), PicoClaw (QQ channel) | Ensure inbound files are mounted into session workspaces; support rich media (tables, blockquotes). |
| **Cross‑Platform Native Clients** | OpenClaw (Linux/Windows app demand), PicoClaw (RISC‑V deb), Hermes (desktop font scaling, Linux auto‑restart) | Provide official builds/AppImages for Linux, Windows, and embedded targets. |
| **Tool Schema / Context Window Efficiency** | OpenClaw (tool schema token overhead), NanoClaw (tiered bootstrap loading), Hermes (vector‑based skill routing) | Reduce token cost of tool definitions; lazy‑load heavy skills. |
| **Remote / MCP‑Style Tool Servers** | NanoClaw (remote HTTP/SSE MCP servers), IronClaw (expanded Slack/Personal User Token), Moltis (external‑agent model/effort selection) | Allow agents to call third‑party MCP endpoints; manage authentication and token refresh. |
| **Configuration & Upgrade Safety** | NanoClaw (`update‑nanoclaw` OneCLI upgrade), IronClaw (OAuth persistence), Moltis (context command injection) | Version‑diff detection, health‑checks post‑upgrade, deterministic CLI flags. |

---

**5. Differentiation Analysis**  

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | NanoClaw | Others (representative) |
|-----------|----------|---------|--------------|----------|----------|--------------------------|
| **Primary Target** | Enterprise‑grade multi‑channel messaging bots (Telegram, WhatsApp, Feishu) | Lightweight conversational assistants with strong fallback logic | Desktop‑first agent with deep provider integrations (Anthropic, Telegram) | Edge/embedded AI companion (RISC‑V, low‑power) | Modular skill‑agent platform emphasizing container isolation & MCP extensibility | Varies: LobsterAI (voice‑first), Moltis (external‑agent orchestration), TinyClaw (minimalist) |
| **Core Architecture** | Central gateway + plugin channels | Single‑process runtime with retry/fallback loops | Hybrid desktop + gateway; per‑service isolated loops | Thin web‑launcher + optional backend | Per‑session containerized runtimes; MCP server abstraction | Ranges from monolithic (LobsterAI) to plug‑in (Moltis) |
| **Key Technical Bet** | Unified channel abstraction + rich‑media pipeline | Reliable model fallback & sustained‑goal memory | Provider‑specific OAuth fixes & desktop UI polish | Minimal footprint & platform‑specific launcher fixes | Container resource tuning (`shm-size`, `--init`) + remote MCP support | N/A |
| **User Pain‑Point Focus** | Memory leaks, session ordering, internal‑thought leakage | Empty LLM outputs, goal‑context loss, startup crashes | OAuth rejections, Telegram polling conflicts, zombie processes | Platform‑specific deb/RISC‑V compatibility, QQ channel | WhatsApp media delivery, Chromium OOM, token‑exhausted UX | Voice input latency (LobsterAI), external agent config (Moltis) |

---

**6. Community Momentum & Maturity**  

- **Rapid‑Iteration Tier (≥ 50 PR updates/24 h):** OpenClaw, Hermes Agent, NanoBot. These projects are actively reshaping core functionality but still exhibit notable stability tickets (memory leaks, OAuth).  
- **Steady‑Progress Tier (10‑30 PR updates/24 h, regular releases):** PicoClaw (nightly builds), NanoClaw (high PR throughput, no critical regressions), IronClaw (high dev velocity, focusing on authentication persistence). Maturity is higher; work centers on polishing and platform coverage.  
- **Low‑Activity / Maintenance Tier (< 5 updates/24 h or null):** NullClaw, Moltis, LobsterAI, TinyClaw, CoPaw, ZeptoClaw, ZeroClaw. Many are either feature‑complete, awaiting community growth, or stalled.  
- **Overall Trend:** The ecosystem is splitting between **high‑throughput, feature‑expanding agents** (OpenClaw, Hermes, NanoClaw) and **specialized, lightweight companions** (PicoClaw, LobsterAI) that prioritize footprint and niche integrations over massive scaling.

---

**7. Trend Signals for AI Agent Developers**  

1. **Observability & Error Boundaries** – Multiple teams are exposing structured error handlers (`OPENCLAW_ERROR_HANDLER`, NanoClaw health checks) to catch silent failures before they cascade.  
2. **Session Integrity & Turn Preservation** – Preventing internal monologue leakage and ensuring message ordering is a cross‑cutting requirement; solutions involve stable retry IDs and immutable turn buffers.  
3. **Resource‑Aware Runtimes** – Containers with increased `/dev/shm` (`--shm-size=1g`), health‑checks, and graceful degradation under token exhaustion are becoming standard for browser‑based or media‑heavy skills.  
4. **Remote / MCP‑Style Tool Ecosystem** – The shift from local stdio tools to network‑accessible MCP servers (NanoClaw, IronClaw, Moltis) indicates a move toward reusable, multi‑tenant skill marketplaces.  
5. **Fallback & Goal‑Continuity** – Detecting empty or malformed LLM outputs and preserving long‑term goals (sustained‑goal context, post‑subagent hooks) are seen as essential for reliable autonomous agents.  
6. **Cross‑Platform Delivery** – Demand for native Linux/Windows builds alongside mobile platforms is rising, prompting investment in reproducible build pipelines and AppImage/Flatpak distribution.  
7. **Security‑First Features** – Masked secrets, filesystem sandboxing, and scoped OAuth tokens are repeatedly requested, reflecting production‑grade security expectations.  

Developers building or evaluating AI agents should prioritize **robust session management, observable error handling, and flexible, remote‑friendly toolchains** while keeping an eye on **cross‑platform packaging** and **secret‑management** to align with the ecosystem’s maturing direction.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**1. Today’s Overview**  
The NanoBot repository remains highly active, with 4 issues and 25 pull‑request updates in the last 24 hours. Three of the open issues concern runtime‑level bugs (empty model responses, missing sustained‑goal context, and a startup `NameError`), while one issue is already closed. Twenty‑one of the PRs are still open, covering bug fixes, new features, and infrastructure chores; only one PR (#4348) was merged/closed today. Overall, the project shows strong forward momentum on both stability and feature extension.  

**2. Releases**  
No new releases were published in the past day.  

**3. Project Progress**  
- **Merged/Closed PR** – #4348 *“fix(session): keep auto‑compact suffix on user turn”* (closed) tightens the auto‑compact logic so that the recent suffix is preserved and a regression test for long tool turns is added.  
- **Feature‑focused PRs** – #4359 (goal‑continuation refresh), #4330 (automation management UI/API), #4358 (duplicate‑user‑turn fix on empty‑response retry), #4357 (silent cron jobs), #4356 (sanitise tool‑ID strings), #4354 (WhatsApp read receipts), #4353 (audio‑to‑WAV conversion), #4352 (token‑based history digest), #4349 (preserve user turns in replay‑window), #4347 (model‑preset switching), #4344 (config & agent‑loop refactor). These PRs introduce usability, observability, and robustness improvements.  
- **Bug‑fix PRs** – #4358 (addresses duplicate user turn on empty‑response retry, indirectly mitigating issue #4287), #4348 (session auto‑compact stability), #4356 (prevents Anthropic API rejections), #4346 (marks stripped images as unviewable, closing #4345).  

**4. Community Hot Topics**  
| Item | Type | Link | Why it’s hot (comments / reactions) |
|------|------|------|--------------------------------------|
| **#4287** – “Empty model responses not triggering fallback to alternative models” | Bug (open) | [#4287](https://github.com/HKUDS/nanobot/issues/4287) | 2 comments, 0 👍 – core runtime failure during peak usage. |
| **#4286** – “Nanobot reporting unexpected missing ‘sustained goal’ context” | Bug (open) | [#4286](https://github.com/HKUDS/nanobot/issues/4286) | 1 comment – impacts long‑task continuity. |
| **#4322** – “NameError: ‘session_key’ is not defined in context.py” | Bug (open) | [#4322](https://github.com/HKUDS/nanobot/issues/4322) | 1 comment – crashes agent start‑up after a merge. |
| **#4359** – “fix(agent): refresh goal continuation context” | PR (open) | [#4359](https://github.com/HKUDS/nanobot/pull/4359) | 0 comments but high relevance – solves the sustained‑goal issue (#4286). |
| **#4330** – “feat(webui): add automation management view” | PR (open) | [#4330](https://github.com/HKUDS/nanobot/pull/4330) | 0 comments – major UI/UX addition for automation control. |
| **#4358** – “fix(api): avoid duplicate user turn on empty‑response retry (#4079)” | PR (open) | [#4358](https://github.com/HKUDS/nanobot/pull/4358) | 0 comments – directly addresses #4287. |
| **#4357** – “feat(cron): add ‘silent’ jobs that run without auto‑delivering a response” | PR (open) | [#4357](https://github.com/HKUDS/nanobot/pull/4357) | 0 comments – addresses noise from scheduled jobs. |

*Underlying needs*: more reliable fallback handling for empty LLM outputs, better sustained‑goal state management, crash‑free start‑up, clearer automation UI, and quieter scheduled jobs.  

**5. Bugs & Stability**  

| Severity | Issue / PR | Description | Fix PR (if any) | Link |
|----------|------------|-------------|----------------|------|
| **Critical** | #4287 | Empty DeepSeek responses are detected but marked “non‑fallbackable”, causing the bot to hang. | #4358 (duplicate‑user‑turn fix) mitigates the retry loop. | [#4287](https://github.com/HKUDS/nanobot/issues/4287) |
| **Critical** | #4322 | `NameError: name 'session_key' is not defined` crashes the agent on start‑up after merging `origin/main`. | No dedicated fix yet; may be resolved by #4344 refactor or a future patch. | [#4322](https://github.com/HKUDS/nanobot/issues/4322) |
| **High** | #4286 | Missing “sustained goal” context leads to repetitive, incorrect outputs. | #4359 (goal‑continuation refresh) aims to solve this. | [#4286](https://github.com/HKUDS/nanobot/issues/4286) |
| **Medium** | #4309 | `/v1/chat/completions` always returns zero token usage. | No merge yet; may be addressed by #4359 or a dedicated usage‑tracking PR. | [#4309](https://github.com/HKUDS/nanobot/issues/4309) |
| **Medium** | #4346 | Stripped images leak their file path instead of being marked unviewable. | #4346 itself (closed) – already fixed. | [#4346](https://github.com/HKUDS/nanobot/issues/4346) |
| **Low** | #4351 | Mistral model support broken due to strict API expectations. | #4351 (better Mistral support) – still open, but planned. | [#4351](https://github.com/HKUDS/nanobot/pull/4351) |

**6. Feature Requests & Roadmap Signals**  
- **#4350** – Add *Keenable* as a built‑in web‑search provider (research‑driven,

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Hermes Agent Project Digest - 2026-06-16

## Today's Overview
The Hermes Agent project shows high activity levels with 50 issues and 50 PRs updated within the last 24 hours. The repository remains actively developed with strong community engagement, though no new releases were published today. Key themes include desktop application stability improvements, gateway reliability fixes, and addressing critical authentication issues with major providers like Anthropic. The project appears healthy with rapid iteration on both bug fixes and feature development.

## Releases
No new releases were published today.

## Project Progress
Five PRs were merged or closed today, focusing on critical infrastructure improvements:
- **PR #46997**: Fixed resume_pending session recovery to avoid blank responses after gateway restarts
- **PR #46996**: Isolated Telegram getUpdates polling to prevent 409 Conflict loops
- **PR #46687**: Changed Anthropic OAuth tool prefix from `mcp_` to `mcp__` to fix third-party app rejection
- **PR #46984**: Added Linux auto-restart functionality after desktop updates
- **PR #36724**: Fixed BSM secret resolution in cron scheduler

## Community Hot Topics
The most discussed issues center around system stability and user experience:

1. **[Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237)** (50 comments, 6 👍): Critical bug causing "Response truncated due to output length limit" errors in CLI and gateway chat sessions. Users need reliable long-form response generation.

2. **[Issue #18715](https://github.com/NousResearch/hermes-agent/issues/18715)** (4 comments, 15 👍): Feature request for remote Hermes Agent with local tool execution - enterprise users want to separate compute resources.

3. **[Issue #46303](https://github.com/NousResearch/hermes-agent/issues/46303)** (3 comments): Concurrent session cross-contamination bug affecting desktop GUI users working in parallel sessions.

4. **[PR #47001](https://github.com/NousResearch/hermes-agent/pull/47001)**: Enabling web_extract via ddgs Python package - addresses web scraping functionality gaps.

## Bugs & Stability
Critical stability issues identified:

- **P1 - [Issue #46675](https://github.com/NousResearch/hermes-agent/issues/46675)**: Anthropic Max OAuth requests rejected as third-party (HTTP 400) - affects paying customers
- **P1 - [Issue #40691](https://github.com/NousResearch/hermes-agent/issues/40691)**: Telegram gateway freezes after polling conflict recovery - breaks messaging platform integration  
- **P1 - [Issue #47000](https://github.com/NousResearch/hermes-agent/issues/47000)**: Lifecycle scheduler jobs deactivated system-wide - core infrastructure failure
- **P2 - [Issue #46975](https://github.com/NousResearch/hermes-agent/issues/46975)**: Desktop app accumulates zombie dashboard processes - memory leak affecting long sessions
- **Fix available in [PR #46687](https://github.com/NousResearch/hermes-agent/pull/46687)** for the Anthropic OAuth prefix issue

## Feature Requests & Roadmap Signals
Community-driven enhancements showing clear demand:

- **[Issue #18715](https://github.com/NousResearch/hermes-agent/issues/18715)**: Remote agent with local tool execution - likely enterprise deployment feature
- **[Issue #22620](https://github.com/NousResearch/hermes-agent/issues/22620)**: Vector-based skill routing to address context window inflation
- **[Issue #46097](https://github.com/NousResearch/hermes-agent/issues/46097)**: Desktop font size configuration for accessibility
- **[Issue #44761](https://github.com/NousResearch/hermes-agent/issues/44761)**: Global lock for maximum concurrent usage - self-hosted LLM resource management

The remote agent feature (#18715) and skill routing improvements (#22620) show strong community interest and may appear in upcoming versions.

## User Feedback Summary
Key pain points from user reports:

- **Desktop Application**: Font scaling issues on high-resolution displays, model switching without feedback, and zombie process accumulation
- **Cross-Platform Compatibility**: macOS compilation failures, Windows MSYS path handling, and China network restrictions
- **Gateway Reliability**: Telegram 409 conflicts, Feishu message truncation, and Signal-cli REST API migration needs
- **User Experience**: Silent failures in model selection and update processes

Users consistently request more visual feedback and configuration options for customization.

## Backlog Watch
Several important issues require maintainer attention:

- **[Issue #31246](https://github.com/NousResearch/hermes-agent/issues/31246)**: MCP server misconfiguration invisible - critical debugging gap where connection failures aren't logged
- **[Issue #29325](https://github.com/NousResearch/hermes-agent/issues/29325)**: Telegram polling conflicts without visible duplicate gateway - affects user troubleshooting
- **[Issue #9148](https://github.com/NousResearch/hermes-agent/issues/9148)**: Model picker shows 0 models for custom providers - basic functionality regression
- **[Issue #42882](https://github.com/NousResearch/hermes-agent/issues/42882)**: Desktop installation stuck on Electron download - onboarding barrier for new users in certain regions

These issues have been open for extended periods and represent significant user impact areas.


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest - 2026-06-16**

**Today's Overview**
The PicoClaw project had a typical day of activity, with 3 issues updated (1 open, 2 closed) and 13 pull requests (10 open, 3 merged/closed). One new nightly release was published. The project shows steady progress on bug fixes and minor enhancements.

**Releases**
- **nightly**: Nightly Build for v0.2.9-nightly.20260616.c1ff5aa6. This is an automated build and may be unstable. The full changelog is available [here](https://github.com/sipeed/picoclaw/compare/v0.2.9...main).

**Project Progress**
- Merged PR #3126 to improve launcher allowlist bypass diagnostics by tracking allow_localhost_bypass settings and emitting clearer logs.
- Merged PR #3097 to add a Shift+Enter hint below the Web chat composer for better usability.
- Closed PR #3069 addressing a security issue where launcher allowed_cidrs could be bypassed through a same-host reverse proxy.

**Community Hot Topics**
- Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887) (10 comments) discussed a bug where the.deb version on RISC-V was not functional with the OpenAI model. It was closed today.
- PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) (open) to treat reply-to-bot as mention in Telegram group chats has garnered attention, aiming to improve bot interaction.

**Bugs & Stability**
- No new critical bugs were reported today. 
- Issue [#3015](https://github.com/sipeed/picoclaw/issues/3015) (3 comments) reported a QQ channel connection failure on Windows, still open.
- PRs [#3059](https://github.com/sipeed/picoclaw/pull/3059), [#3054](https://github.com/sipeed/picoclaw/pull/3054), [#3047](https://github.com/sipeed/picoclaw/pull/3047) address stability fixes but are still open.

**Feature Requests & Roadmap Signals**
- Open PR [#3096](https://github.com/sipeed/picoclaw/pull/3096) proposes adding PicoPaw banners to READMEs, possibly indicating an upcoming partnership or feature.
- Issue [#3015](https://github.com/sipeed/picoclaw/issues/3015) requesting QQ channel support on Windows may signal roadmap expansion.

**User Feedback Summary**
- Users have reported pain points around platform-specific bugs ([#2887](https://github.com/sipeed/picoclaw/issues/2887), [#3015](https://github.com/sipeed/picoclaw/issues/3015)) which impacted their deployment experience. Swift resolutions are appreciated.

**Backlog Watch**
- PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) (Telegram reply-to-bot feature) has been open for over 2 weeks. It addresses a long-requested usability improvement and needs maintainer review.
- Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887) was closed today after being open for a month, resolving a key RISC-V integration pain point. The quick turnaround is commendable.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-16

## 1. Today's Overview
NanoClaw showed **zero new issue activity** but **high PR throughput** with 12 pull requests updated in the last 24 hours (9 opened, 3 merged/closed). The project is in active feature-development mode: contributors are extending MCP/remote-server support, adding a Strava skill, fixing WhatsApp media routing, and hardening container/runtime defaults. No releases were cut today, suggesting changes are accumulating for a future batch release. Overall health appears strong — steady merge cadence, no critical regressions reported, and a mix of fixes, docs, and new capabilities moving in parallel.

## 2. Releases
**No new releases today.** The latest published version remains whatever was shipped prior to 2026-06-16.

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary |
|----|------|---------|
| [#2774](https://github.com/nanocoai/nanoclaw/pull/2774) | Feat/ops | **`update-nanoclaw` now upgrades the OneCLI gateway/CLI when pinned versions move in `versions.json`.** Adds version-diff detection, a `--upgrade-onecli` flag, and a post-update health check. Closes a silent-skip gap where new NanoClaw code could run against an stale gateway. |
| [#2772](https://github.com/nanocoai/nanoclaw/pull/2772) | Fix | **Codex conversation archive now keyed by thread/continuation ID** instead of writing one file per exchange. Consolidates scattered fragments in `conversations/` into a single per-thread transcript (CDX-004). |
| [#2773](https://github.com/nanocoai/nanoclaw/pull/2773) | Docs | Removes a redundant TTY warning in the Codex skill auth note (`.claude/skills/add-codex/SKILL.md`). Pure cleanup. |

## 4. Community Hot Topics — Most Active PRs
| PR | Activity Signal | Underlying Need |
|----|-----------------|-----------------|
| [#2776](https://github.com/nanocoai/nanoclaw/pull/2776) — *Remote HTTP/SSE MCP servers* | Opened 2026-06-15, updated same day; extends `McpServerConfig` to a union type + new CLI flags (`--type`, `--url`, `--header`). | **Operators want to connect agents to hosted/remote MCP endpoints** (not just local stdio). Signals a shift toward multi-tenant or SaaS-style tool servers. |
| [#2777](https://github.com/nanocoai/nanoclaw/pull/2777) — *Strava MCP skill* | Opened 2026-06-15; adds `/add-strava` with host-side OAuth + auto-refresh token module. | **First-party fitness-data integration** — users want agents to pull Strava activities via the official MCP endpoint. |
| [#2778](https://github.com/nanocoai/nanoclaw/pull/2778) — *WhatsApp inbound media routing* | Opened 2026-06-16; fixes media never reaching agent because host path `data/attachments/` wasn’t mounted into per-session container workspace. | **Media-rich WhatsApp workflows are broken today** — images/audio/docs silently drop. High user-visible impact. |
| [#2771](https://github.com/nanocoai/nanoclaw/pull/2771) — *Container `--shm-size=1g` + `--init`* | Opened 2026-06-15; adds shared-memory and init flags for agent containers running headless Chromium. | **Browser-based skills (scraping, screenshots, auth flows) crash under default 64 MB `/dev/shm`**. Stability fix for a whole class of agent tasks. |

*No issues were updated today, so PRs are the sole signal of community focus.*

## 5. Bugs & Stability — Reported / Fixed Today
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | WhatsApp inbound media never delivered to agent (host path not mounted in session container) | **Open** | [#2778](https://github.com/nanocoai/nanoclaw/pull/2778) |
| **Medium** | `ncl groups create --id <custom>` ignored; UUID silently substituted | Open (since 2026-05-27) | [#2628](https://github.com/nanocoai/nanoclaw/pull/2628) |
| **Medium** | MCP `add_reaction.emoji` expects shortcodes but most channels need unicode; Slack bridge translation missing | Open (since 2026-05-27) | [#2627](https://github.com/nanocoai/nanoclaw/pull/2627) |
| **Medium** | Signal `restartService()` swallows `launchctl kickstart` failures, wizard reports success incorrectly | Open (since 2026-05-27) | [#2626](https://github.com/nanocoai/nanoclaw/pull/2626) |
| **Medium** | Budget/token-exhausted LLM turns dropped instead of surfaced as error turns | Open | [#2759](https://github.com/nanocoai/nanoclaw/pull/2759) |
| **Low** | Codex conversation archive fragmented across dozens of files per session | **Fixed** | [#2772](https://github.com/nanocoai/nanoclaw/pull/2772) (merged) |
| **Low** | OneCLI gateway upgrade silently skipped during `update-nanoclaw` | **Fixed** | [#2774](https://github.com/nanocoai/nanoclaw/pull/2774) (merged) |

*No new crash reports or regressions filed today.*

## 6. Feature Requests & Roadmap Signals
| Signal | Likelihood for Next Release | Rationale |
|--------|----------------------------|-----------|
| **Remote HTTP/SSE MCP servers** ([#2776](https://github.com/nanocoai/nanoclaw/pull/2776)) | **High** — core extensibility, CLI already updated | Enables hosted tool servers; aligns with MCP ecosystem direction. |
| **Strava MCP skill** ([#2777](https://github.com/nanocoai/nanoclaw/pull/2777)) | **High** — self-contained, OAuth helper included | First external MCP skill; template for future third-party integrations. |
| **Container `--shm-size=1g` + `--init`** ([#2771](https://github.com/nanocoai/nanoclaw/pull/2771)) | **High** — trivial, high-impact stability | Unblocks all browser-based skills; safe default. |
| **WhatsApp media routing fix** ([#2778](https://github.com/nanocoai/nanoclaw/pull/2778)) | **High — |Critical path for WhatsApp users| |
| **`--id` flag honor in `ncl groups create`** ([#2628](https://github.com/nanocoai/nanoclaw/pull/2628)) | **Medium** — UX polish, stale since May | Low risk, improves CLI predictability. |
| **Reaction emoji schema alignment** ([#2627](https://github.com/nanocoai/nanoclaw/pull/2627)) | **Medium** — cross-channel consistency | Needed for reliable multi-channel reactions. |

## 7. User Feedback Summary
- **WhatsApp users** effectively cannot receive media today — silent data loss (images, audio, docs). High frustration risk.
- **CLI users** expect `--id` to work; current behavior discards input without warning (PR #2628 open since May).
- **Signal operators** see false-success reports when service restart actually fails (PR #2626).
- **Agent developers** hit Chromium OOM/crashes due to 64 MB `/dev/shm` default (PR #2771 addresses).
- **Budget-aware users** currently see token-exhausted turns vanish instead of actionable errors (PR #2759).
- **Positive**: OneCLI gateway upgrade automation (#2774) and Codex transcript consolidation (#2772) remove known operational papercuts.

## 8. Backlog Watch — Stale / Needing Maintainer Attention
| Item | Days Open | Why It Matters |
|------|-----------|----------------|
| [#2628](https://github.com/nanocoai/nanoclaw/pull/2628) — `ncl groups create --id` ignored | **20 days** | Core CLI contract broken; simple fix, merged tests exist. |
| [#2627](https://github.com/nanocoai/nanoclaw/pull/2627) — Reaction emoji schema mismatch | **20 days** | Cross-channel feature parity; affects Slack/WhatsApp/Discord/Telegram/Teams/GChat. |
| [#2626](https://github.com/nanocoai/nanoclaw/pull/2626) — Signal silent restart failure | **20 days** | Reliability of Signal bridge; error handling gap. |
| [#2759](https://github.com/nanocoai/nanoclaw/pull/2759) — Budget error turns dropped | **2 days** | Billing visibility; user-facing error UX. |

**Recommendation**: Prioritize merging the three 20-day-old PRs (#2628, #2627, #2626) — they are pure fixes with clear scope and existing test coverage. The newer feature PRs (#2776, #2777, #2771, #2778) are progressing well and should land in the next release cycle.

---
*Digest generated from GitHub data as of 2026-06-16. Links point to live PRs on github.com/nanocoai/nanoclaw.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**1. Today's Overview**  
The project remains actively maintained with recent commits but minimal new activity. No new releases, and current issue tracking shows stability with consistent updates every day. Developers prioritize addressing small fixes and ensuring alignment with stated goals.  

**2. Releases**  
No new releases were published in the period analyzed. The activity remains focused on iterative improvements rather than big-scale deployments.  

**3. Project Progress**  
This day included one dependency update (albeit not a PR), while no major features advanced. All recent pushes addressed specific bugs but did not introduce critical instability.  

**4. Community Hot Topics**  
Active discussions focused on resolving the "rate limit" issue in #957 and minor incompleteness in responses from [Local model using ollama](https://github.com/user-attachments/assets/ddd1bffb-ec79-4fb9-a18d-143e2064d0f...). These remain unresolved concerns.  

**5. Bugs & Stability**  
No severe crashes or unexpected failures reported. The issue #952 remains open, highlighting incomplete answer generation in testing environments. No direct fixes initiated yet.  

**6. Feature Requests & Roadmap Signals**  
Preferred features include enhanced memory management for larger datasets, though none are in current development. The #956 PR suggests considerations for future dependency updates.  

**7. User Feedback Summary**  
Users report frustration over the "rate limit" limitation mentioned in [Issue #957], where JSON outputs are inconsistent. Several users recommend streamlining data governance.  

**8. Backlog Watch**  
The #957 issue warrants follow-up to assess its scope and resolve prior suggestions. No pending tasks currently require immediate action, though proactive monitoring is advised.  

---  
Links to relevant discussions: [#957](https://github.com/nullclaw/nullclaw/issue/#958) (example placeholder URL).

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest - 2026-06-16

## Today's Overview
IronClaw is currently experiencing high development velocity, with 100 updates across issues and pull requests in the last 24 hours. Activity is heavily concentrated on the "Reborn" architecture, specifically focusing on refining the extension ecosystem, OAuth flows, and user onboarding. The project is in a stabilization phase, shifting from core feature implementation to polishing the UX and fixing critical failure modes in agent execution.

## Releases
No new releases were published in the last 24 hours.

## Project Progress
Recent merged and closed activity indicates a strong focus on authentication persistence and UX cleanup:
- **Authentication Persistence:** Resolved a critical issue where "always allow" approvals were not persisting across threads ([#4825](https://github.com/nearai/ironclaw/issues/4825)).
- **Tooling Fixes:** Fixed a bug where GitHub tool invocations returned pull requests instead of just issues ([#4807](https://github.com/nearai/ironclaw/issues/4807)) and resolved workspace path duplication bugs ([#4759](https://github.com/nearai/ironclaw/issues/4759)).
- **UI/UX Polish:** Improved the Automations panel layout and delivery panel visuals ([#4915](https://github.com/nearai/ironclaw/issues/4915)).
- **Integration:** Completed basic image attachment support for vision-capable models ([#4871](https://github.com/nearai/ironclaw/pulls/4871)).

## Community Hot Topics
The most active discussions center around the **Extension Onboarding Experience**. Multiple issues highlight a "fragmented" flow between the Registry, Installed, and Configuration pages ([#4890](https://github.com/nearai/ironclaw/issues/4890)). There is a clear community need for a more linear, guided setup process for third-party integrations (Google Suite, GitHub) to reduce user friction. Additionally, there is an emerging push to automate the project's own maintenance via AI-driven code reviews and PR resolution ([#4880](https://github.com/nearai/ironclaw/issues/4880)).

## Bugs & Stability
The project is currently addressing several stability issues, primarily within the Reborn WebUI:

| Severity | Issue | Description | Status/Fix |
| :--- | :--- | :--- | :--- |
| **High** | [#4907](https://github.com/nearai/ironclaw/issues/4907) | Google OAuth success leads to run failure instead of resumption. | Open |
| **High** | [#4761](https://github.com/nearai/ironclaw/issues/4761) | Agent stops after repeated tool failures without recovery. | Open |
| **Medium** | [#4921](https://github.com/nearai/ironclaw/issues/4921) | Gmail extension fails immediately after successful authorization. | Open |
| **Medium** | [#4800](https://github.com/nearai/ironclaw/issues/4800) | GitHub invocations hang in "RUN" state after approval denial. | Closed |
| **Low** | [#4942](https://github.com/nearai/ironclaw/issues/4942) | Failed tool calls require manual page reload to appear. | Open |

## Feature Requests & Roadmap Signals
Current activity suggests the following features are priorities for the next release:
- **Multimodal Enhancements:** Integration of inline image support for OpenAI-compatible vision models ([#4902](https://github.com/nearai/ironclaw/pulls/4902)).
- **Enhanced File Interaction:** A new path-based project-filesystem API to allow users to download files generated by the agent ([#4933](https://github.com/nearai/ironclaw/pulls/4933)).
- **Expanded Slack Capabilities:** Introduction of a "Personal User Token" tool to allow the agent to perform actions a bot token cannot, such as searching messages ([#4941](https://github.com/nearai/ironclaw/pulls/4941)).
- **Agentic DevOps:** Building a "Cloud Coding Agent" workflow to automate PR generation from issue assignments ([#4882](https://github.com/nearai/ironclaw/issues/4882)).

## User Feedback Summary
Users are reporting significant friction during the **initial setup and authorization phase**. Common pain points include:
- **Confusing UI Cues:** Extensions showing "Activate" buttons while already active ([#4908](https://github.com/nearai/ironclaw/issues/4908)).
- **Auth Frustration:** Redundant OAuth prompts in new conversations despite previous authorizations ([#4913](https://github.com/nearai/ironclaw/issues/4913)).
- **Lack of Feedback:** Users feel "left in silence" when shell approvals are denied, with no feedback on why the agent stopped ([#4764](https://github.com/nearai/ironclaw/issues/4764)).

## Backlog Watch
- **Dependency Debt:** There is a massive pending update for 43 dependencies via Dependabot ([#4876](https://github.com/nearai/ironclaw/pulls/4876)) that needs review to ensure no regressions.
- **Security:** A `wasmtime` leak (RUSTSEC-2026-0182) is causing CI failures; while PRs are open ([#4950](https://github.com/nearai/ironclaw/pulls/4950)), it remains a blocker for clean builds.
- **Core Logic:** The issue regarding owner-scoped vs. thread-scoped credentials ([#4935](https://github.com/nearai/ironclaw/issues/4935)) is a fundamental architectural fix that is currently in PR ([#4939](https://github.com/nearai/ironclaw/pulls/4939)) and requires careful merge.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**Today's Overview**  
The LobsterAI project remains actively maintained, focusing on refining user interaction reliability while addressing occasional stability concerns. Recent updates emphasize resolving technical bottlenecks without disrupting core functionality.  

**Releases**  
No new releases were announced, though a minor patch for improved compatibility was prioritized ahead of schedule.  

**Project Progress**  
Active attention rivals past efforts, particularly on closing gaps in voice recognition and session synchronization after addressing critical issues highlighted in PR #2167 and #2166.  

**Community Hot Topics**  
Key discussions centered on the unresolved session status miscommunication noted in issues #1426 and #1427, alongside recent stability fixes in open feedback.  

**Bugs & Stability**  
Bug #1428 addressing voice input conflicts was resolved via PR #1428. Other recurring issues include session-loss verification delays, requiring monitoring of fix completeness.  

**Feature Requests & Roadmap**  
Support for built-in notification systems remains pending, echoing suggestions from user feedback on PR #2160. Users eagerly await these enhancements to improve real-time usability.  

**User Feedback**  
Frequent pain points—such as lack of immediate session confirmation—repeat in recent rate checks. Resolving these would enhance overall satisfaction.  

**Backlog Watch**  
Pending actions include investigating the cowork crash fix and finalizing updates for closed issues like #1277 and #2159. Proactive steps are underway to maintain momentum.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>


## Moltis Project Digest - 2026-06-16

### Today's Overview
The Moltis project shows minimal overnight activity with no issues updated or closed in the last 24 hours. Development continues actively through two open pull requests authored by gptme-thomas, both created and updated yesterday. Both PRs remain in the open state with no merges or closures recorded today. The project appears to be in a stable maintenance phase with focused feature development underway.

### Releases
No new releases were published today.

### Project Progress
No PRs were merged or closed today. Both active PRs (#1124 and #1125) continue in the open review stage without recent updates beyond their initial creation yesterday.

### Community Hot Topics
Two significant feature PRs are currently under development:

- **[PR #1125: Support model and effort selection for external agents](https://github.com/moltis-org/moltis/pull/1125)** - Adds first-class model and effort selection capabilities for external-agent providers, including configuration support and metadata persistence. This addresses extensibility needs for diverse AI agent integrations.

- **[PR #1124: Add context command support for chat turns](https://github.com/moltis-org/moltis/pull/1124)** - Introduces optional `chat.context_command` functionality that runs before each chat turn, enabling deployments to inject dynamic runtime context automatically.

Both PRs represent architectural enhancements for external agent integration and contextual awareness.

### Bugs & Stability
No bugs, crashes, or regressions were reported today. The project shows no stability concerns in the monitoring period.

### Feature Requests & Roadmap Signals
The two active PRs suggest upcoming features for:
- Enhanced external agent configuration and model routing
- Dynamic context injection for chat sessions

These appear to be targeted for the next minor release based on their active development status.

### User Feedback Summary
No direct user feedback was captured in today's activity data. The PR descriptions indicate internal development priorities rather than documented user requests.

### Backlog Watch
No long-unanswered issues or PRs requiring maintainer attention were identified in today's data scope.


</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*