# OpenClaw Ecosystem Digest 2026-06-08

> Issues: 293 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-08 03:58 UTC

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


# OpenClaw Project Digest - 2026-06-08

## Today's Overview
OpenClaw shows intense development activity with 293 issues and 500 PRs updated in the last 24 hours, indicating active community engagement and ongoing maintenance. The project maintains a healthy balance with 181 open issues and 168 closed PRs, though the high volume suggests growing complexity. Security and session state management emerge as primary focus areas, with multiple P1 issues addressing critical vulnerabilities and data handling concerns. Recent updates demonstrate continued investment in channel integrations and platform stability, though several regressions and architectural challenges require immediate attention.

## Releases
No new releases were published today.

## Project Progress
**Merged/Closed PRs (168 total):**
- **PR #89289** closed stale session cleanup archives with aggregated archived session usage tracking
- **PR #90089** fixed sandbox skill sync to use config-resolved workspace directory instead of hardcoded defaults
- **PR #87219** resolved inbound media read references through host workspace guard validation
- **PR #75025** addressed heartbeat stale "Current time" line refresh across all helper calls

Key feature advancements include Feishu integration improvements, Discord search functionality fixes, and enhanced session compaction handling for token boundaries.

## Community Hot Topics
**Most Active Issues:**

1. **[#25592](https://github.com/openclaw/openclaw/issues/25592)** - Text between tool calls leaks to messaging channels (27 comments)
   - Critical security/UX issue where internal processing output exposes sensitive information
   - Represents fundamental privacy leakage in multi-channel deployments

2. **[#88838](https://github.com/openclaw/openclaw/issues/88838)** - Track core session/transcript SQLite migration (18 comments)
   - Architectural refactoring toward safer incremental database migration
   - Addresses need for safer state management in production deployments

3. **[#90991](https://github.com/openclaw/openclaw/issues/90991)** - Cron trigger contaminates global runtime state (13 comments)
   - Performance/stability concern affecting system-wide reliability
   - Highlights resource isolation requirements in scheduled task execution

## Bugs & Stability
**Critical Regressions (P1/P2):**

1. **[#88312](https://github.com/openclaw/openclaw/issues/88312)** - Codex app-server turn-completion stall (Platinum Hermit rating)
   - Regression from 2026.5.27 blocking multi-tool agent execution
   - Previously fixed in #85107, indicating systemic stability issues

2. **[#90912](https://github.com/openclaw/openclaw/issues/90912)** - Delivery recovery fails after gateway restart (Platinum Hermit rating)
   - Message loss during channel reconnection sequences
   - Recovery timing conflicts with transport readiness

3. **[#88380](https://github.com/openclaw/openclaw/issues/88380)** - Write tool lacks append mode causing data loss
   - Isolated cron sessions destroy shared workspace files
   - No mechanism to preserve incremental writes across sessions

**Available Fixes:**
- PR #90641 addresses compaction boundary preservation for assistant replies
- PR #90310 sanitizes null content before SDK serialization for OpenAI Responses
- PR #87380 persists configured extra CA certificates for gateway deployments

## Feature Requests & Roadmap Signals
**High-Priority Enhancements:**

1. **[#86881](https://github.com/openclaw/openclaw/issues/86881)** - Gateway-lite mode without AI harness
   - Demand for deterministic plugin deployments without full model overhead
   - Likely target for next release given recent PR activity (#90101)

2. **[#90916](https://github.com/openclaw/openclaw/issues/90916)** - Topic-session families for context isolation
   - Multi-lane conversation management for chat-native assistants
   - Aligns with upcoming session consolidation work

3. **[#40215](https://github.com/openclaw/openclaw/issues/40215)** - Cumulative context usage in /usage footer
   - Operational visibility improvements for resource monitoring
   - Supported by PR #90328 exposing model picker agent runtimes

## User Feedback Summary
Users report significant pain around **session state persistence** and **channel integration reliability**:

- **Memory Management**: Multiple complaints about dreaming feature producing irrelevant content (#70005) and bootstrap file loading inconsistencies (#29387)
- **Multi-Channel UX**: Telegram streaming issues (#87136), Discord approval button regressions (#73802), and Feishu typing indicators (#69572) indicate platform maturity gaps
- **Configuration Complexity**: Onboard UI (#38657) and provider discovery (#33329) issues suggest onboarding friction for new operators
- **Operational Visibility**: Missing session usage metrics (#40215) and unclear recovery states (#65201) impact production monitoring

Positive signals include appreciation for subagent capabilities and extensive channel support despite integration bugs.

## Backlog Watch
**Stale High-Impact Issues Requiring Maintainer Attention:**

1. **[#25592](https://github.com/openclaw/openclaw/issues/25592)** - Security: Text leak to messaging channels (181+ days old)
   - Multiple diamond lobster ratings indicate severe impact
   - PR needed for internal processing output filtering

2. **[#31583](https://github.com/openclaw/openclaw/issues/31583)** - Exec tool environment variable inheritance (124+ days old)
   - Security implications for secret injection in subprocesses
   - Blocks legitimate credential handling workflows

3. **[#91283](https://github.com/openclaw/openclaw/issues/91283)** - minSecurity inverted logic (fresh P3)
   - Core security boundary logic error affecting permission enforcement
   - Simple fix with broad security implications

The backlog shows strong community engagement with well-documented issues, but several security-critical items have remained unaddressed for months, suggesting need for renewed focus on foundational protections.


---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison – Personal‑AI‑Assistant / Agent Open‑Source Ecosystem (as of 2026‑06‑08)**  

---  

### 1. Ecosystem Overview  
The open‑source AI‑assistant landscape is maturing into a heterogeneous ecosystem of full‑stack gateways (OpenClaw, ZeroClaw, IronClaw, PicoClaw), lightweight “nanobots” that focus on session handling and sandboxing (NanoBot, NanoClaw), and niche UI‑first tools (LobsterAI, CoPaw).  Development velocity is high overall, but projects are diverging: many are tightening security‑ and state‑management foundations, while a subset is pushing UI/UX polish and multi‑agent orchestration (A2A, topic‑session families).  The community is increasingly enterprise‑oriented – requests for deterministic “gateway‑lite”, RBAC, Docker‑ready releases, and configuration‑as‑code dominate the backlog.

---  

### 2. Activity Comparison  

| Project | Open Issues (last 24 h) | PRs Updated (last 24 h) | Release in last 24 h | **Health Score** *¹* |
|--------|------------------------|------------------------|----------------------|----------------------|
| **OpenClaw** | 181 (total, 27 new today) | 500 (total, 168 closed) | – | 8.2 |
| **NanoBot** | 8 (total, 4 new) | 24 (total, 4 merged) | – | 7.5 |
| **Hermes Agent** | 34 | 42 | – | 6.9 |
| **PicoClaw** | 21 | 20 | nightly build (unstable) | 6.7 |
| **NanoClaw** | 9 | 9 | – | 6.4 |
| **ZeroClaw** | 32 | 50 | – (v0.8.0 prep) | 7.0 |
| **LobsterAI** | 15 | 2 | – | 5.9 |
| **IronClaw** | 43 | 38 | – (v0.8.0 prep) | 7.2 |
| **CoPaw (QwenPaw)** | 5 | ≈10 | – | 6.1 |
| **Others (TinyClaw, Moltis, ZeptoClaw, NullClaw)** | 0 | 0 | – | 4.0 (inactive) |

\* *Health Score (0‑10) = weighted composite of issue‑to‑PR closure ratio, release cadence, and reported severity of open bugs. Higher = healthier.*

---  

### 3. OpenClaw’s Position  

| Dimension | OpenClaw | Typical Peer |
|-----------|----------|--------------|
| **Core Scope** | Full‑stack “gateway” that abstracts providers, channel adapters, session persistence, and tool orchestration. | NanoBot / NanoClaw – focus on session & sandbox only; ZeroClaw – micro‑gateway with plug‑in model. |
| **Technical Approach** | SQLite‑backed transcript store, configurable “gateway‑lite” mode, granular token‑boundary compaction, extensive channel SDKs (Discord, Feishu, Telegram, …). | NanoBot uses in‑memory or file‑based history, relies heavily on `bubblewrap` sandbox; IronClaw builds a *god‑file* turn‑context; ZeroClaw leans on a Rust‑based “Reborn” core. |
| **Community Size** | >300 active contributors (≈293 issues, 500 PR touches per day) – the largest absolute traffic in the set. | NanoBot ~30 contributors; IronClaw ~25; ZeroClaw ~20. |
| **Advantages** | • Broadest channel coverage and mature integration tests.<br>• Proactive security work (session‑migration, CA cert persistence).<br>• Strong plugin ecosystem (sub‑agents, topic‑session families). | • Faster iteration cycles (NanoBot, NanoClaw).<br>• Simpler code‑base for embed‑in‑product use‑cases. |

Overall, OpenClaw is the **de‑facto reference platform** for enterprises that need a single binary to power multi‑channel bots, while peers occupy either “light‑weight sandbox” or “Rust‑first re‑architecture” niches.

---  

### 4. Shared Technical Focus Areas  

| Focus Area | Projects Raising It | Typical Requirement |
|------------|----------------------|---------------------|
| **Session / State Persistence** | OpenClaw [#88838], NanoBot [#4203], NanoClaw [#2706], ZeroClaw [#4866], IronClaw [#514] | Robust incremental DB migration, compaction across token boundaries, isolation per topic or tenant. |
| **Security / RBAC** | OpenClaw [#25592, #31583, #91283], NanoClaw [#2711], ZeroClaw [#4627, #7243], LobsterAI [#1500] | Strict tool output filtering, role‑based gating of MCP tools, token revocation on rotation, sandbox leak prevention. |
| **Sandbox / Isolation (bwrap / container)** | NanoBot [#4236, #4237], NanoClaw [#2709], IronClaw [#41686] | Namespace‑isolation that works on modern distros (Ubuntu 24.04+), explicit home‑dir reset, blocked‑host lists. |
| **Multi‑Channel / UI Consistency** | OpenClaw [Discord, Feishu bugs], NanoBot [Telegram, WhatsApp], ZeroClaw [Web dashboard], LobsterAI [skill UI], IronClaw [WebUI v2] | Unified typing‑indicator, approval‑button workflow, progressive UI feedback for long‑running tasks. |
| **Configuration‑as‑Code / Declarative Ops** | IronClaw [#3036], ZeroClaw [#3036], OpenClaw [#90916] | YAML/JSON blueprinting, auto‑generation of gateway profiles, version‑controlled env vars. |
| **Agent‑to‑Agent (A2A) / Multi‑Agent Routing** | Hermes [#514], ZeroClaw [#3566], IronClaw [#514] | Standardised discovery, message‑routing primitives, isolation of “topic‑session families”. |
| **Resource / Token Visibility** | OpenClaw [#40215], ZeroClaw [#5146], LobsterAI [#1516] | Real‑time usage dashboards, per‑skill token accounting, model‑picker runtime exposure. |

---  

### 5. Differentiation Analysis  

| Aspect | OpenClaw | NanoBot / NanoClaw | IronClaw | ZeroClaw | LobsterAI |
|--------|----------|--------------------|----------|----------|-----------|
| **Primary Target** | Enterprise gateways with many channels | Individual developers / sandbox‑first bots | Desktop‑first “agent‑IDE” with rich UI | Rust‑centric “Reborn” platform for high‑throughput services | Web‑UI / productivity‑focused AI assistant |
| **Language Stack** | Python (core) + optional Rust plugins | Python (pure) | Python + Electron (TS) + Rust‑like internal libs | Rust (core) + Tauri UI | TypeScript/React front‑end, Python back‑end |
| **Deployment Model** | Binary + optional “gateway‑lite” | Docker / source install, bubblewrap sandbox | Desktop app + CLI, auto‑update system | Binary + optional Docker image, “Reborn” composable crates | Cloud‑hosted service, occasional nightly builds |
| **Key Feature Emphasis** | Multi‑channel adapters, session migration, sub‑agent spawning | Tool sandbox stability, reasoning‑content handling, UI ANSI output | Agent‑to‑agent UI, Kanban view, skill marketplace | Configuration‑as‑code, outbound‑preference façade, dashboard tabs | Skill generation UI, session colour/tagging, OAuth flow robustness |
| **Security Posture** | Ongoing hardening (CA certs, session compaction, minSecurity logic) | Sandbox leaks (bwrap) under active fix | Auth re‑auth loops, file‑write sandbox gaps | Token revocation, file_write sandbox, no‑exposure safeguards | Skill state validation, AES‑key checks, OAuth token loss handling |
| **Maturity** | Highest issue/PR volume, no recent release (maintenance mode) | Rapid bug‑fix cycle, stable core but sandbox still flaky | High UI churn, some P2 bugs, active refactor | Preparing v0.8.0, many high‑impact blockers still open | Low activity, UI‑centric tickets dominate |

---  

### 6. Community Momentum & Maturity  

| Tier | Projects | Momentum |
|------|----------|----------|
| **Rapidly Iterating (high churn, many PRs, active issue triage)** | OpenClaw, NanoBot, IronClaw, ZeroClaw | Continuous integration, daily merges, visible roadmap items. |
| **Stabilizing (moderate churn, focus on bug‑fix & release prep)** | NanoClaw, PicoClaw, Hermès Agent | PRs closed faster than opened; small but steady releases on the horizon. |
| **Maintenance / Low Activity** | LobsterAI, CoPaw, TinyClaw, Moltis, ZeptoClaw, NullClaw | Few PRs, mainly UI polish or isolated bugs; suitable for low‑risk deployments. |

---  

### 7. Trend Signals (derived from community feedback)

| Trend | Evidence | Value to Developers |
|-------|----------|---------------------|
| **Session‑state as a first‑class resource** | OpenClaw “migration” issue, ZeroClaw dashboard demand, NanoBot “orphan tool results” | Drives design of incremental DB migrations, compaction‑aware token budgeting, and multi‑tenant isolation. |
| **Security‑by‑default tooling** | Repeated RBAC bugs (#2711, #25592, #4627) and sandbox failures on Ubuntu 24.04 | Encourages built‑in secret‑injection guards, per‑tool CA cert handling, and “gateway‑lite” deterministic mode. |
| **Declarative deployment & config‑as‑code** | IronClaw & ZeroClaw EPICs, OpenClaw topic‑session families | Enables CI/CD pipelines, reproducible prod setups, and easier onboarding for SRE teams. |
| **Multi‑agent orchestration (A2A)** | Hermes #514, ZeroClaw #3566, IronClaw #514 | Signals market shift toward composable agent ecosystems rather than monolithic bots. |
| **Rich UI / Observability** | LobsterAI session‑colour/tag requests, ZeroClaw dashboard, IronClaw Kanban UI | Developers are demanding immediate visual feedback (token usage, tool status) to reduce debugging cycles. |
| **Container‑friendly sandboxing** | NanoBot bwrap failures, NanoClaw blocked‑hosts, ZeroClaw token‑revocation policies | Pushes for standardized sandbox APIs (e.g., OCI runtime hooks) that work across modern Linux distros. |
| **Edge‑ready Docker/One‑click images** | ZeroClaw Docker‑image request, IronClaw CI gate, OpenClaw gateway‑lite | Lowers ops friction, a decisive factor for enterprise adoption in CI/CD environments. |

**Implication:**  The next wave of personal‑AI‑assistant platforms will likely converge on **secure, declarative, multi‑agent cores** backed by **observable dashboards** and **container‑native isolation**.  Projects that already provide a stable “gateway‑lite” mode (OpenClaw), robust Rust‑based foundations (ZeroClaw), and a clear UI/UX roadmap (IronClaw, LobsterAI) are best positioned to capture the emerging enterprise demand.  

---  

*Prepared for technical decision‑makers and developer leads on 2026‑06‑08.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-06-08

## Today's Overview
NanoBot is currently experiencing high development velocity with 24 Pull Request updates and 8 issue updates in the last 24 hours. The project is focusing heavily on refining the core session management, enhancing the WebUI, and stabilizing the sandbox environment. Overall project health is strong, with a rapid turnaround on bug fixes and active community contributions across diverse channel integrations.

## Releases
*No new releases recorded in the last 24 hours.*

## Project Progress
Several critical stability and UX improvements were merged today:
*   **Reasoning Integrity:** Fixed an issue where custom providers would drop empty `reasoning_content` strings, ensuring better compatibility with models like DeepSeek and Kimi ([PR #4227](https://github.com/HKUDS/nanobot/pull/4227)).
*   **UI/UX Enhancements:** The WebUI now renders ANSI-colored output in code blocks, improving the readability of shell outputs ([PR #4240](https://github.com/HKUDS/nanobot/pull/4240)).
*   **Channel Optimizations:** Improved Feishu mention resolution ([PR #2885](https://github.com/HKUDS/nanobot/pull/2885)) and WhatsApp LID group mention handling ([PR #2663](https://github.com/HKUDS/nanobot/pull/2663)).
*   **Memory Management:** Fixed a bug where disabling the "Dream" feature still caused prompt bloat by not advancing the history cursor ([PR #4244](https://github.com/HKUDS/nanobot/pull/4244)).

## Community Hot Topics
The community is currently focused on **Sandbox Stability** and **Session Continuity**:
*   **Bubblewrap (bwrap) Issues:** Significant discussion around `bwrap` failing on Ubuntu 24.04 and `$HOME` environment variable leaks ([#4236](https://github.com/HKUDS/nanobot/issues/4236), [#4237](https://github.com/HKUDS/nanobot/issues/4237)). This indicates a strong user need for secure, isolated tool execution on modern Linux distros.
*   **Context Management:** Discussions regarding "orphan tool results" and history trimming suggest users are encountering edge cases where AI agents lose context during complex tool-call loops ([#4203](https://github.com/HKUDS/nanobot/issues/4203)).

## Bugs & Stability
| Severity | Issue | Description | Status | Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **High** | [#4203](https://github.com/HKUDS/nanobot/issues/4203) | `find_legal_message_start` drops all messages when orphan tool results exist. | Open | [#4219](https://github.com/HKUDS/nanobot/pull/4219) |
| **High** | [#4236](https://github.com/HKUDS/nanobot/issues/4236) | bwrap sandbox fails on Ubuntu 24.04 due to restricted namespaces. | Open | In Progress |
| **Medium** | [#4237](https://github.com/HKUDS/nanobot/issues/4237) | bwrap sandbox does not reset `$HOME`, breaking tool writes. | Open | [#4239](https://github.com/HKUDS/nanobot/pull/4239) |
| **Medium** | [#4242](https://github.com/HKUDS/nanobot/issues/4242) | `dream.enabled=false` still injects history into system prompt. | Closed | [#4244](https://github.com/HKUDS/nanobot/pull/4244) |
| **Low** | [#4105](https://github.com/HKUDS/nanobot/issues/4105) | Custom provider drops empty reasoning strings. | Closed | [#4227](https://github.com/HKUDS/nanobot/pull/4227) |

## Feature Requests & Roadmap Signals
*   **Subagent Model Overrides:** A request to allow the `spawn` tool to specify a different model for subagents, enabling a "hierarchical" agent architecture ([#4231](https://github.com/HKUDS/nanobot/issues/4231)).
*   **Voice Capabilities:** Integration of shared voice input support across WebUI and desktop ([PR #4232](https://github.com/HKUDS/nanobot/pull/4232)).
*   **Transparency:** Adding versioning and update notifications directly into the WebUI ([#4233](https://github.com/HKUDS/nanobot/issues/4233) $\rightarrow$ [PR #4235](https://github.com/HKUDS/nanobot/pull/4235)).
*   **Security:** Strengthening MCP (Model Context Protocol) SSRF guards to reject unsafe HTTP URLs ([PR #4123](https://github.com/HKUDS/nanobot/pull/4123)).

## User Feedback Summary
*   **Pain Points:** Users on newer Linux distributions (Ubuntu 24.04) are struggling with sandbox permissions. Some users are experiencing "disappearing chat history" in the WebUI when transcript files exceed 8MB ([PR #4247](https://github.com/HKUDS/nanobot/pull/4247)).
*   **Use Cases:** High interest in using NanoBot as a bridge for enterprise chat apps (Feishu, DingTalk) and utilizing subagents for specialized tasks.

## Backlog Watch
*   **MCP Timeout:** [PR #4230](https://github.com/HKUDS/nanobot/pull/4230) regarding `httpx` timeouts for `streamableHttp` transport is critical for preventing the system from hanging indefinitely during MCP startup.
*   **API Duplication:** [PR #4234](https://github.com/HKUDS/nanobot/pull/4234) addresses a bug where empty responses cause duplicated user turns in session history; this is a key stability fix for API users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – 2026‑06‑08**  

---

### 1. Today’s Overview  
The repository showed unusually high churn today: **50 issues** and **50 pull‑requests** were touched in the last 24 h, with a split of 34 open/active issues vs. 16 closed, and 42 open PRs vs. 8 merged/closed. No new releases were cut. The surge reflects a burst of bug‑triage, small feature work, and the ongoing god‑file refactor effort. Overall activity is healthy, indicating the maintainers are actively addressing both stability concerns and planned enhancements.

### 2. Releases  
*No new releases were published today.*  

### 3. Project Progress (Merged/Closed PRs)  
Only two PRs reached a closed state today, both addressing specific reliability bugs:  

| PR | Title (link) | Change |
|----|--------------|--------|
| [#39430](https://github.com/NousResearch/hermes-agent/pull/39430) | `fix(qqbot): prevent CPU-spinning tight loop after WebSocket reconnect failure` | Stops the QQBot adapter from entering a busy‑loop that starved the asyncio event loop after a failed WS reconnect. |
| [#41777](https://github.com/NousResearch/hermes-agent/pull/41777) | `refactor(yuanbao): consolidate media resolution into dedicated pipeline middlewares` | Moves media‑resolution logic out of a monolithic middleware into composable, testable middlewares, improving maintainability of the Yuanbao platform adapter. |

All other PRs remain open, including the first step of the agent‑loop god‑file decomposition ([#41778](https://github.com/NousResearch/hermes-agent/pull/41778)), a desktop‑theme tweak ([#41770](https://github.com/NousResearch/hermes-agent/pull/41770)), and several small bug‑fixes (status redaction, TUI session recovery, Docker chown, etc.).

### 4. Community Hot Topics  
The most‑commented issue today is the **A2A protocol feature request**, signaling strong community interest in inter‑agent interoperability:  

* **[#514](https://github.com/NousResearch/hermes-agent/issues/514) – [Feature] A2A (Agent‑to‑Agent) Protocol Support** – 20 comments, 👍 18.  
  *Summary:* Implements Google’s A2A standard (remote agent discovery, communication, and interoperability) alongside MCP. The discussion covers protocol mapping, security considerations, and integration points with the existing agent/tool stack. The high engagement suggests users see A2A as a strategic enabler for multi‑agent workflows and are eager to see a concrete implementation.

Other notable threads (4‑comment issues) include a persistent OpenAI Codex reauth loop ([#6653](https://github.com/NousResearch/hermes-agent/issues/6653)) and a conversation‑compression desync bug that was recently closed ([#34089](https://github.com/NousResearch/hermes-agent/issues/34089)).

### 5. Bugs & Stability (Today’s Reports)  
Bug reports dominated the issue stream. Severity is inferred from the `P*` priority labels present in the data:

| Priority | Issue (link) | Brief description | Fix PR? |
|----------|--------------|-------------------|---------|
| **P2** | [#6653](https://github.com/NousResearch/hermes-agent/issues/6653) – OpenAI Codex reauth loop when switching back from local models | Unnecessary reauthentication triggers across Hermes profiles, causing login churn. | – |
| **P2** | [#38974](https://github.com/NousResearch/hermes-agent/issues/38974) – `hermes update` hangs on macOS during dependency pull | Update process stalls after “Pulling updates…”. | – |
| **P2** | [#41053](https://github.com/NousResearch/hermes-agent/issues/41053) – Skills hub hangs on network timeout; `hermes update` session‑resume misrouting | CLI skills commands timeout indefinitely behind restrictive corporate proxies. | – |
| **P2** | [#41566](https://github.com/NousResearch/hermes-agent/issues/41566) – Desktop shows “Could not connect to Hermes gateway” despite reachable gateway | UI overlay persists after successful WSS/HTTPS verification. | – |
| **P2** | [#41737](https://github.com/NousResearch/hermes-agent/issues/41737) – Linux desktop update freezes at 100% | Electron overlay never calls `app.quit()` after applying updates. | PR [#41746](https://github.com/NousResearch/hermes-agent/pull/41746) (open) |
| **P2** | [#24911](https://github.com/NousResearch/hermes-agent/issues/24911) – No Webhooks option in Gateway setup wizard | Platform selector omits the Webhooks entry. | – |
| **P2** | [#41669](https://github.com/NousResearch/hermes-agent/issues/41669) – Desktop cannot attach screenshots/files in Gateway mode | File‑not‑found error when trying to attach media. | – |
| **P2** | [#41686](https://github.com/NousResearch/hermes-agent/issues/41686) – `terminal_tool.py:_get_env_config()` crashes with `FileNotFoundError` if CWD missing | Unchecked `os.getcwd()` call. | – |
| **P2** | [#41676](https://github.com/NousResearch/hermes-agent/issues/41676) – macOS launchctl fallback gateway not recognized as healthy → repeated `--replace` restarts | Telegram inbound DMs drop due to gateway health mis‑detection. | – |
| **P2** | [#41662](https://github.com/NousResearch/hermes-agent/issues/41662) – Windows gateway cron scheduler circular dependency + broken `os.kill(pid,0)` | All cron jobs stop when gateway crashes; no auto‑recovery. | – |
| **P2** | [#41660](https://github.com/NousResearch/hermes-agent/issues/41660) – WhatsApp send fails with bare phone number (missing `@s.whatsapp.net`) | JID construction error leads to 500 response. | – |

*Note:* No open **P1** bugs were visible today; the sole P1‑tagged issue ([#34089](https://github.com/NousResearch/hermes-agent/issues/34089)) was closed earlier today.

### 6. Feature Requests & Roadmap Signals  
Feature‑type issues and PRs that gained traction today point toward the following near‑term priorities:

* **A2A Protocol Integration** – #514 (feature) is the most active discussion; implementation would likely land in a future minor release after the current god‑file refactor stabilizes.  
* **Multi‑Agent Messaging Channel** – #25176 (feature) seeks a built‑in Agent‑to‑Agent messaging primitive; aligns with the A2A work.  
* **Durable Unbounded Memory** – #32064 (feature) requests retrieval‑backed user memory beyond the current character limit; a related PR ([#41755](https://github.com/NousResearch/hermes-agent/pull/41755)) adds in‑turn consolidation guidance.  
* **Desktop UI Enhancements** – PRs #41756 (Kanban tab), #41701/#41702 (YAML frontmatter preview & auto‑open attachments), and #41770 (theme typography) show continued investment in the Electron desktop experience.  
* **Skill Ecosystem** – PR #41774 adds an Imgflip meme‑generator skill, indicating ongoing expansion of the official skill registry.  

Given the current focus on refactoring the agent loop and stabilizing platform adapters, the next version is likely to contain:  
1. Consolidated god‑file changes (TurnContext extraction, etc.).  
2. Preliminary A2A scaffolding (session‑list/history/send tools).  
3. Memory‑overflow guidance improvements (PR #41755).  
4. Desktop UI polish (Kanban integration, theme tweaks).  

### 7. User Feedback Summary  
Recurring pain points voiced in today’s issues:

* **Profile & Data Isolation** – Users report that `--clone` still copies memory files, breaking the promise of isolated environments (#10376).  
* **Authentication Friction** – Switching between local and remote models triggers unnecessary reauth loops, especially with OpenAI Codex (#6653).  
* **Desktop Reliability** – Update freezes, false “gateway unreachable” alerts, and file‑attachment failures erode trust in the macOS/Linux clients.  
* **Memory Limits** – Frequent hits to the `MEMORY.md` character cap cause lost corrections and forced manual pruning (#32064, #35186).  
* **Platform‑Specific Glitches** – WhatsApp JID formatting, Telegram health checks, and Webhook wizard omissions create friction for multi‑channel deployments.  

Overall sentiment: users appreciate the extensibility and multi‑modal capabilities but are eager for stronger baseline stability (especially around updates, auth, and memory management) before adopting more advanced features like A2A at scale.

### 8. Backlog Watch (Long‑Unanswered / Needs Maintainer Attention)  
* **[#10376](https://github.com/NousResearch/hermes-agent/issues/10376) – Profile isolation incomplete** – Open since 2026‑04‑15; still lacks a fix despite being labelled P2. Affects multi‑tenant usage and CI pipelines.  
* **[#514](https://github.com/NousResearch/hermes-agent/issues/514) – A2A support** – While active, the issue remains open with no concrete implementation PR yet; maintainers may need to prioritize a spike or prototype to convert discussion into code.  
* **[#41053](https://github.com/NousResearch/hermes-agent/issues/41053) – Skills hub hangs on network timeout** – Open since today; impacts users behind corporate proxies and could benefit from a timeout/retry policy or offline fallback.  
* **[#24911](https://github.com/NousResearch/hermes-agent/issues/24911) – Missing Webhooks option** – Simple UI addition; low effort but lingering for over a month.  

Addressing these items would improve core usability and reduce friction for enterprise adopters.

---  

*All links point to the respective GitHub issue or pull request in the NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



###**Today's Overview**  
PicoClaw saw high activity today with 21 issues and 20 PRs updated, reflecting rapid progress in bug fixes, feature implementation, and community engagement. A new nightly build (v0.2.9-nightly.20260608.875cf4a2) was released, though marked as unstable. While most closed PRs addressed critical bugs (e.g., API errors, compatibility issues), some open issues like Telegram location handling and Matrix user ID support remain active. The project maintains strong community-driven development, with frequent updates and prioritization of stability improvements.  

---

### **Releases**  
A nightly build for **v0.2.9-nightly.20260608.875cf4a2** was released today. This is an automated, unstable build intended for testing. Key changes and risks should be reviewed via the [full changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main). No stable releases were announced, emphasizing ongoing iteration over finalized versions.  

---

### **Project Progress**  
Closed PRs addressed critical bugs (e.g., #3045 for Matrix `allow_from` failures, #3050 for structured logging refactor) and added features like Kagi web search (#3037) and an Android Termux guide (#2902). The project advanced toward a more robust backend (structured logging, error handling) and expanded platform support (Telegram, Matrix). Progress is steady but fragmented, with many PRs focusing on edge-case fixes and dependency management.  

---

### **Community Hot Topics**  
1. **Telegram Location Handling** (#3049, open): Users request recognition of `message.location` in Telegram channels.  
2. **Matrix User ID Compatibility** (#3044, #3038, open): Fixes needed for `@user:domain` format support.  
3. **OmniRoute Integration** (#2978, open): Community interest in adding omniroute as a provider.  
4. ** Nightly Build Feedback** (PR #3050-3051, open): Debates around structured logging and error handling in the nightly.  
[See active links](https://github.com/sipeed/picoclaw/issues?q=is%3Aopen+is%3Aissue) for details.  

---

### **Bugs & Stability**  
Top bugs reported:  
1. **Telegram location messages ignored** (#3049): No agent response to location pins.  
2. **Matrix `allow_from` failures** (#3044, #3038): Silent rejection of standard user IDs.  
3. **Empty API responses** (#2674, closed): Codec OAuth issues with ChatGPT.  
While #2674 and #3038 were fixed, #3049 remains critical. No proactive fixes for #3049 yet.  

---

### **Feature Requests & Roadmap Signals**  
- **OmniRoute Integration**: Community-driven PR #2978 suggests adding omniroute as a provider.  
- **Android Support**: PR #2902 (merged) addresses Termux deployment.  
- **Kagi Web Search**: PR #3037 introduces native Kagi integration, signaling market diversification.  
These align with mobile-first and search-tool trends.  

---

### **User Feedback Summary**  
- **Pain Points**: Codex API instability (#2674), JSONL parsing issues, and terminal guide gaps.  
- **Use Cases**: Mobile deployment (Android Termux), Telegram/Matrix integrations.  
- **Satisfaction**: Positive reception for Kagi search and structured logging refactor.  

---

### **Backlog Watch**  
- **Issue #2952**: User requests more frequent updates (3+ months without releases).  
- **Issue #2941**: Anthropic model ID formatting errors in defaults.  
- **Issue #2978**: OmniRoute provider integration (open for months).  
These require prioritization to address long-standing user demands.


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-06-08

## Today's Overview
NanoClaw is currently experiencing a high volume of maintenance and stabilization activity, with 9 PR updates in the last 24 hours. The development focus has shifted toward strengthening infrastructure stability, improving deployment reliability (upgrade tripwires), and refining account management. While no new releases were published today, the high ratio of PR activity suggests a push toward a more robust versioning and configuration system.

## Releases
*No new releases recorded for this period.*

## Project Progress
Three PRs were successfully merged today, focusing on documentation, deployment safety, and account rotation logic:
- **Deployment Safety:** Implemented a "startup tripwire" and upgrade marker [#2707](https://github.com/nanocoai/nanoclaw/pull/2707) to prevent silent failures when users perform raw `git pull` updates without running migrations.
- **Optimization:** Added documentation for Ollama prompt caching [#2710](https://github.com/nanocoai/nanoclaw/pull/2710) to reduce latency in the Claude-Code-CLI $\rightarrow$ Ollama pipeline.
- **Account Management:** Improved account rotation logic [#2706](https://github.com/nanocoai/nanoclaw/pull/2706) to isolate Codex/Gemini modes from Anthropic rotations and improve the precision of DB cursor calibration.

## Community Hot Topics
The most significant discussion revolves around **Security and Access Control**. Issue [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) highlights a critical discrepancy where the `create_agent` MCP tool is documented as "admin-only" but is actually accessible to any agent container. This indicates a pressing community need for stricter role-based access control (RBAC) within the agent ecosystem.

## Bugs & Stability
| Severity | Issue/PR | Description | Status | Fix Available |
| :--- | :--- | :--- | :--- | :--- |
| **High** | [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) | Security vulnerability: `create_agent` tool ungated; any container can create agent groups. | Open | No |
| **Medium** | [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) | `CLAUDE.md` is unconditionally deleted on startup, causing a permanent dirty working tree. | Open | No |
| **Low** | [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) | Duplicate text appearing when `send_message` fires mid-turn. | Open (PR) | PR Pending |

## Feature Requests & Roadmap Signals
Based on current PR activity, the project is moving toward:
- **Advanced Configuration:** Integration of DB-backed environment variables and `blocked_hosts` for `ContainerConfig` [#2709](https://github.com/nanocoai/nanoclaw/pull/2709).
- **Enhanced Messaging Integration:** Telegram topic isolation with auto-registration [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) suggests a roadmap goal of scaling multi-user/multi-topic agent interactions.
- **Better Resource Cleanup:** Efforts to reap orphaned agent containers on service stop [#2708](https://github.com/nanocoai/nanoclaw/pull/2708) indicate a move toward professional-grade resource management.

## User Feedback Summary
- **Pain Points:** Users are experiencing frustration with "dirty" git working trees caused by automated file deletions [#2312] and performance bottlenecks when using Ollama without prompt caching [#2710].
- **Use Cases:** There is a clear demand for "native" credential proxying to bypass standard gateways for better performance/direct access [#2705].
- **Satisfaction:** The addition of the "startup tripwire" shows a positive response to the need for louder, clearer error messages during failed updates.

## Backlog Watch
- **Stale Feature Request:** PR [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) (Telegram topic isolation) has been open since April 2026. Given its potential for scaling agent communication, this remains a high-value item requiring maintainer attention.
- **Unresolved Regression:** Issue [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) regarding the `CLAUDE.md` deletion has been open since May 2026 and continues to affect the developer experience for all users.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑06‑08**  
*Data source: GitHub activity (issues/PRs updated in the last 24 h, no new releases).*

---

### 1. Today’s Overview  
The repository showed strong maintenance momentum with **50 issue updates** (43 open/active, 7 closed) and **38 PR updates** (22 open, 16 merged/closed). No version was released today, but contributors landed a batch of focused improvements around the Reborn subsystem—Slack integration, WebUI refinements, CI hardening, and early scaffolding for outbound‑preference and model‑observable tooling. Overall activity indicates steady progress toward the Reborn cut‑over goal while addressing stability and operator‑experience concerns.

### 2. Releases  
*No new releases were published today.*

### 3. Project Progress – Merged/Closed PRs (16 total)  
Closed PRs that shipped user‑facing or infrastructure changes:

| PR | Summary | Link |
|----|---------|------|
| #4532 | Added Slack allowed‑channel picker (admin‑managed) for Reborn Slack host‑beta. | <https://github.com/nearai/ironclaw/pull/4532> |
| #4511 | Introduced Phase‑1 outbound‑preference facade contracts (`OutboundPreferencesProductFacade`) and DTOs. | <https://github.com/nearai/ironclaw/pull/4511> |
| #4530 | Added structured model‑visible tool observations (`ModelVisibleToolObservation`) to improve debugging. | <https://github.com/nearai/ironclaw/pull/4530> |
| #4516 | Implemented WebChat v2 thread deletion scoped to the authenticated caller. | <https://github.com/nearai/ironclaw/pull/4516> |
| #4463 | Wired Slack host‑beta conversation/outbound/idempotency state to durable filesystem stores and improved turn‑runner wake‑up. | <https://github.com/nearai/ironclaw/pull/4463> |
| #3298 | Added a hermetic local CI gate (fmt, safety, clippy, test tiers) with pre‑push hooks. | <https://github.com/nearai/ironclaw/pull/3298> |
| #3565 | Extended nightly E2E job timeout to 90 minutes and refreshed `AGENTS.md`. | <https://github.com/nearai/ironclaw/pull/3565> |

These changes collectively advance Slack operability, outbound‑policy modeling, observability, UI safety, and CI reliability.

### 4. Community Hot Topics (Most‑Commented Issues/PRs)  

| Item | Comments | Summary & Underlying Need | Link |
|------|----------|---------------------------|------|
| **#3280** – [Reborn] Add ProductWorkflow and InboundTurnService facade | 7 | Core Reborn façade work: defining the boundary between ProductAdapters and host‑layer services. Indicates demand for a clean, testable product‑facing API layer. | <https://github.com/nearai/ironclaw/issues/3280> |
| **#3036** – [EPIC] Configuration‑as‑Code for IronClaw Reborn: tenant blueprints & use‑case harnesses | 5 | Operators want declarative, version‑controlled configuration (replacing ad‑hoc `.env`, JSON, flags). Signals a need for schema‑driven setup, diff‑ability, and audit trails. | <https://github.com/nearai/ironclaw/issues/3036> |
| **#3283** – [Reborn] Migrate OpenAI‑compatible chat and Responses APIs onto Reborn | 3 | Aligning external LLM‑API surfaces with the new Reborn workflow while preserving compatibility. Reflects user pressure to keep existing integrations functional during cut‑over. | <https://github.com/nearai/ironclaw/issues/3283> |
| **#3333** – [Reborn] Production wiring and missing crates | 3 | Highlights remaining fake/in‑memory seams in the Reborn stack; points to a need for real‑world component composition before production rollout. | <https://github.com/nearai/ironclaw/issues/3333> |
| **#4529** – test: add WebUI beta acceptance E2E (PR) | – (comment count not shown) | Adding an end‑to‑end test that drives the WebChat v2 HTTP/SSE surface against a local Reborn runtime. Shows community focus on validating the WebUI beta via realistic scenarios. | <https://github.com/nearai/ironclaw/pull/4529> |

**Analysis:** The top‑commented items revolve around **foundational Reborn architecture** (facades, configuration, API migration) and **production readiness** (wiring, missing crates). This suggests the community is actively shaping the cut‑over plan while requesting concrete, operable features (Slack controls, WebUI tests) to gain confidence in the new stack.

### 5. Bugs & Stability  
No explicit “bug”‑labelled issues appeared in the latest update list, but several high‑risk/open items merit attention:

| Issue | Risk / Severity | Description | Link |
|-------|----------------|-------------|------|
| **#4042** – [Reborn] Complete tenant sandbox process capabilities | `risk: high`, `suggested_P1` | Extends the Docker tenant sandbox beyond simple scoped command execution to support safe hosted workspace processes. | <https://github.com/nearai/ironclaw/issues/4042> |
| **#4116** – Carry v1 Google/GitHub/NEAR SSO into WebChat v2 *(closed)* | `risk: high` (resolved) | Ensured SSO parity for the WebChat v2 surface; closed today, indicating the risk was mitigated. | <https://github.com/nearai/ironclaw/issues/4116> |
| **#3032** – Reborn cutover blocker: add no‑exposure safeguards | `suggested_P0` (implicitly high impact) | Tracks防止敏感数据泄露的安全层；尚未解决，是削产前的关键风险。 | <https://github.com/nearai/ironclaw/issues/3032> |

**Takeaway:** The most pressing stability concern is the **tenant sandbox** (#4042) and the **no‑exposure safeguards** (#3032). Both are open, high‑impact, and lack linked fix PRs in the current batch.

### 6. Feature Requests & Roadmap Signals  
A cluster of `suggested_P0/P1/P2` issues maps the near‑term Reborn roadmap:

- **Configuration‑as‑Code** (#3036) – declarative tenant blueprints.  
- **Local developer runtime profiles** (#3044) – one‑click local coding agent setup.  
- **Production cut‑over blockers** – no‑exposure safeguards (#3032), config‑driven composition root (#3026), migration/compatibility bridges (#3029).  
- **OpenAI API migration** (#3283) – moving chat/completions onto Reborn.  
- **Production wiring & missing crates** (#3333) – replacing fake/seam components.  
- **WebUI beta owner‑module tracking & release path** (#3607) – coordinating the WebUI‑first beta rollout.  

**Prediction:** The next version (if/when released) will likely include the **local developer runtime profile** feature, initial **configuration‑as‑code** scaffolding, and further **production‑wiring** work (real crates replacing seams). The OpenAI API migration may appear in a subsequent release after the core cut‑over stabilizes.

### 7. User Feedback Summary (Inferred from Comments & PRs)  
- **Operator pain points:** Manual, fragmented configuration (env files, JSON, flags) → demand for declarative, version‑controlled setup (#3036).  
- **Integration concerns:** Preserving existing LLM‑API contracts while moving to Reborn → need for compatibility layers (#3283).  
- **Desired self‑service:** Slack channel allow‑lists, WebUI thread deletion, outbound‑preference UI → reflected in #4532, #4516, #4511.  
- **Safety anxieties:** Preventing accidental data exposure in host kernel → #3032 (no‑exposure safeguards) and #3609/#3608 (approval lease attenuation).  
- **CI/CD experience:** Requests for hermetic, reliable local gating → #3298.  
- **Observability:** Want richer, structured error/tool‑output for debugging → #4530, #4059.

Overall, users are **eager for a stable, operable Reborn platform** that reduces manual ops, improves security, and preserves existing integrations while offering a polished WebUI/Slack experience.

### 8. Backlog Watch – Long‑Unanswered Important Items  

| Issue | Age (approx.) | Why it matters | Link |
|-------|---------------|----------------|------|
| **#3036** – Configuration‑as‑Code (EPIC) | ~41 days (created 2026‑04‑28) | Central to reducing operator toil; still open with only 5 comments, indicating limited traction. | <https://github.com/nearai/ironclaw/issues/3036> |
| **#3280** – ProductWorkflow & InboundTurnService facade | ~63 days (created 2026‑05‑06) | Foundational Reborn API layer; 7 comments show interest but no concrete implementation PR yet. | <https://github.com/nearai/ironclaw/issues/3280> |
| **#3044** – Local developer runtime profiles | ~41 days (created 2026‑04‑28) | Directly improves onboarding; only 3 comments, risk of slipping. | <https://github.com/nearai/ironclaw/issues/3044> |
| **#3032** – No‑exposure safeguards (cut‑over blocker) | ~41 days (created 2026‑04‑28) | Security‑critical blocker for production cut‑over; still open. | <https://github.com/nearai/ironclaw/issues/3032> |
| **#3026** – Config‑driven production composition root | ~41 days (created 2026‑04‑28) | Required for a coherent host/service graph from typed config; no visible progress. | <https://github.com/nearai/ironclaw/issues/3026> |

These items represent **strategic, high‑impact work** that has lingered for over a month without obvious resolution. Maintainer focus on them would unblock multiple downstream features (e.g., local profiles, configuration‑as‑code, production cut‑over) and improve overall project health.

---  

*End of digest.*  
*All links point to the exact GitHub resources referenced above.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑06‑08**  

---  

### 1. Today’s Overview  
In the last 24 hours the LobsterAI community registered **15 open issues** and **2 closed pull‑requests**. No new version was published. Activity is steady but concentrated on a handful of core bugs and UI‑related tickets, indicating that the project is currently in a **maintenance‑heavy** phase rather than a major feature‑rollout phase.  

---  

### 2. Releases  
*No new releases were published in the past 24 h.*  

---  

### 3. Project Progress  
| PR # | Title | Status | What was delivered |
|------|-------|--------|--------------------|
| **[#2110](https://github.com/netease-youdao/LobsterAI/pull/2110)** | *fix(cowork): guard oversized OpenClaw image payloads* | **Closed** | Prevents oversized `chat.send` payloads from reaching the gateway, adds classification of `1009`/`max-payload` errors and improves error messaging. |
| **[#2117](https://github.com/netease-youdao/LobsterAI/pull/2117)** | *fix(config): preserve deleted provider models after migration* | **Closed** | Tracks provider‑model version numbers so deleted models are retained across restarts and adds regression coverage for migration‑related failures. |

These PRs address **payload‑size safety** and **model‑migration persistence**, two of the most technically risky areas in the current codebase.  

---  

### 4. Community Hot Topics  
The most actively discussed items (highest comment count) are:

| Issue | Comments | Link |
|-------|----------|------|
| **#1509** – *skills file generation blocks without visual feedback* | 2 | <https://github.com/netease-youdao/LobsterAI/issues/1509> |
| **#1500** – *disabled skill still appears in `activeSkillIds`* | 1 | <https://github.com/netease-youdao/LobsterAI/issues/1500> |
| **#1502** – *Agent‑settings save does not update `activeSkillIds`* | 1 | <https://github.com/netease-youdao/LobsterAI/issues/1502> |
| **#1504** – *Popo AES‑Key validation missing* | 1 | <https://github.com/netease-youdao/LobsterAI/issues/1504> |
| **#1506** – *Timed‑task can submit with empty session list* | 1 | <https://github.com/netease-youdao/LobsterAI/issues/1506> |

**Underlying needs:**  
* Users want **transparent progress indication** when heavy operations (e.g., skill creation) are running, so they are not left in a silent “stuck” state.  
* There is a strong desire for **accurate skill‑state management**—the UI must reflect disabled/enabled status instantly, otherwise users lose trust in the system.  
* The **visibility of session metadata** (colors, tags, statistics) repeatedly appears as a pain point, suggesting that power users rely on rich contextual cues to navigate large collections of sessions.  

---  

### 5. Bugs & Stability  
| Severity | Issue | Why it’s critical | Link |
|----------|-------|-------------------|------|
| **High** | **#1509** – Skills generation blocks without UI feedback | Users cannot perceive progress; may abort workflow unintentionally. | <https://github.com/netease-youdao/LobsterAI/issues/1509> |
| **High** | **#1500** – Disabled skill remains in `activeSkillIds` | Leads to “ghost” skill execution, causing mis‑behaviour and wasted token consumption. | <https://github.com/netease-youdao/LobsterAI/issues/1500> |
| **High** | **#1502** – Settings save does not update `activeSkillIds` | Users must toggle agents to see changes; creates friction and hidden bugs. | <https://github.com/netease-youdao/LobsterAI/issues/1502> |
| **Medium** | **#1504** – AES‑Key field accepts empty values | Validation gap could allow malformed configurations to be saved. | <https://github.com/netease-youdao/LobsterAI/issues/1504> |
| **Medium** | **#1506** – Timed‑task submits with empty session list, causing silent delivery failure | Tasks appear successful but never fire, misleading users. | <https://github.com/netease-youdao/LobsterAI/issues/1506> |
| **Medium** | **#1516** – Closing Settings panel aborts OAuth token handling, losing token silently | Authentication flow can be left in an inconsistent state. | <https://github.com/netease-youdao/LobsterAI/issues/1516> |
| **Low** | **#1537** – No way to bookmark important AI replies in long conversations | Primarily a usability issue but may affect productivity for heavy users. | <https://github.com/netease-youdao/LobsterAI/issues/1537> |

> **Note:** No fix‑PRs have been merged for the above issues in the last 24 h; they remain open and are currently the **focus of community attention**.  

---  ### 6. Feature Requests & Roadmap Signals  
| Requested Feature | Issue(s) | Potential Impact |
|-------------------|----------|-------------------|
| **Color‑coding / tagging of sessions** | #1541 (lack of tags) | Enables quick visual filtering, aligns with tools like VS Code/Obsidian, likely to be considered for a “productivity” release. |
| **Batch export of selected sessions** | #1528 (batch mode only delete) | Critical for backup/migration; indicates a move toward data‑ownership features. |
| **Local usage statistics dashboard** | #1532 (no local stats) | Provides self‑insight, matches patterns seen in VS Code and Obsidian; could be bundled with v2.4‑type UI refresh. |
| **Message bookmarking (star/collect)** | #1537 (collect AI replies) | Directly improves long‑conversation productivity; may precede a “knowledge‑base” mode. |
| **Session colour / icon indicator** | #1525 (no colour annotation) | Reinforces the tagging/tag‑filter concept; likely part of the same roadmap effort. |

**Prediction:** The most frequently mentioned UI‑level enhancements (color/tags, batch export, stats) are probable candidates for the next minor version (v2.5) if the maintainers prioritize user‑driven usability over purely stability fixes.  

---  

### 7. User Feedback Summary  * **Positive signals:** Users appreciate the **skill‑creation engine** once it works and value the **OpenClaw model migration** safety improvements.  
* **Pain points:**  
  * **Perceived stall** during file generation and lack of progress indicators.  
  * **Inconsistent skill state** (disabled skills still firing).  
  * **Missing visual cues** for session organization (colors, tags, stats).  
  * **Silent token loss** after OAuth cancellation.  
  * **Token waste** when models repeatedly re‑output identical text.  

Overall sentiment leans toward **“good core, UX gaps”** – the community is eager for a more polished, responsive interface rather than new flagship features.  

---  

### 8. Backlog Watch  | Issue | Age (days) | Why it needs attention | Potential Owner |
|-------|------------|------------------------|-----------------|
| **#1509** – Skills generation blocks without UI feedback | 62 | Directly impacts user trust; blocks downstream usage. | Core Engine team |
| **#1513** – Declaration‑terms UI glitches (duplicate numbers, broken brackets) | 62 | Legal‑compliance visibility issue; may cause confusion. | Docs/Settings team |
| **#1516** – OAuth token loss after Settings panel close | 62 | Security‑relevant; can leave users unauthenticated. | Auth/Integration team |
| **#1525** – No colour annotation for sessions | 62 | Major usability gap for power users. | UI/Product team |
| **#2121** – User question about token consumption (potential bug) | 1 | Highlights possible token‑waste bug; needs investigation. | Performance team |

These tickets have **no maintainer comment** in the past 24 h and represent the **long‑standing blockers** that could stall user adoption if left unattended.  

---  

## Overall Health Assessment  
- **Activity Level:** Moderate – 15 open issues, 2 merged PRs, no releases.  
- **Stability:** Several high‑severity UI‑logic bugs remain open, indicating a **stability debt**.  
- **Roadmap Momentum:** The team is focusing on **bug‑fixes and infrastructure** (payload guarding, migration persistence) while user‑driven quality‑of‑life tickets accumulate.  
- **Community Pulse:** The most vocal topics revolve around **transparent progress, accurate state management, and richer session organization**, suggesting that the next version will likely prioritize **UX polish** over new AI capabilities.  

*Prepared by the LobsterAI open‑source analyst – data extracted from GitHub activity up to 2026‑06‑08.*

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

**QwenPaw Project Digest – June 8, 2026**

Today, the QwenPaw AGENT project remained active with progress across code reviews, PR handling, bug fixes, and contributor updates. The project slipped behind a modest number of merged commits and a handful of open issues, but overall activity suggested a steady development pace. 

**Release Update:**
Service has adopted new backend versions in the latest package, aligning QwenPaw with seamless AgentScope 2.0 capabilities. Users should overwrite their local dependencies with `agentscope-ai/QwenPaw-2.0.0+` to benefit from improved stability and performance. No new major releases were announced, but several versions have been quietly integrated into production builds.

**Project Status & Progress:**
On June 8, 2026, the main points of progression included:
- Successful completion and review of recent pull requests (PRs), with most builds passed.
- Resolved issues regarding session management conflicts and channel response delays.
- Enhanced robustness of web UI enhancements and improved handling of multimedia integration.
- Minor bugs related to environment compatibility and encoding issues identified on June 6-8.

**Hot Bugs & Stability:**
While the project maintained operational stability, users were confronted with a few intermittent bugs:
- Problematic responses when invoking plugins or shared tools, often compounded by issues like corrupted config files or missing dependencies.
- Occasional Instagram/Telegram Bug: a lack of TypeScript support within `looptypes` could slow development on newer environments.
- An upcoming migration to v1.1.9 is pending for full compatibility support with older Python versions.

**Community Engagement:**
Contributors remain active, with frequent discussions around custom extensions and responsive support from maintainers. User feedback is central to shaping future features, and actionable requests were consistently acknowledged by the development team.

**Key Community Priorities:**
Users interested in QwenPaw requests must expect next steps to include added tools for enhanced video understanding, real-time model transitions, and compatibility fixes for critical plugins. Expanding multimedia support and improving tool whitelisting via MCP are also favored milestones.

**Overall Assessment:**
QwenPaw demonstrates steady progression, with a strong focus on Qwik-voice integration and safe plugin interactions. While bug remediation remains a priority, the project’s reactive and open agile practices ensure quick resolution cycles.

**Last Updated: June 8, 2026**  
*Follow for real-time updates via the GitHub issues and releases page.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 8 June 2026**  
*(GitHub /zeroclaw‑labs/zeroclaw – data from the last 24 h)*  

---

### 1. Today’s Overview
- Activity is **high**: 50 issues and 50 pull‑requests were touched in the past day, with a net **‑20** change (38 open PRs vs. 12 merged/closed, 32 open issues vs. 18 closed).  
- The most visible pain point is the **missing web dashboard** (issue #4866) and a series of security‑oriented bugs (e.g., context compression, file_write sandboxing).  
- No new releases were cut, but a **v0.8.0 release‑prep branch** (PR #7364) is already open, signalling that a stable 0.8.0 package is imminent.  
- The community is debating **large‑scale architectural changes** (A2A protocol, air‑gapped daemon, full Docker image) while also pushing UI/UX polish for the dashboard and TUI.

---

### 2. Releases
*No new version was published in the last 24 h.*  
The forthcoming **v0.8.0** is being prepared (see PR #7364) and will likely contain numerous UI, security, and provider updates. Keep an eye on the **release‑prep branch** for breaking‑change notes.

---

### 3. Project Progress (merged / closed today)

| PR | Title / Goal | Type | Comments / 👍 |
|----|--------------|------|---------------|
| **#7243** | *Token revocation on rotation / device deletion* – partial fix for critical security issue #6984 | Bug‑fix (high risk) | 0 |
| **#7249** | *Zerocode theme enhancements* – colour‑depth fallback, palette swatches | Enhancement (medium) | 0 |
| **#7209** | */model* and */model‑provider* live picker for Zerocode | Enhancement (high) | 0 |
| **#7190** | Outbound message queue with sidebar (UX overhaul) | Enhancement (high) | 0 |
| **#7360** | Quickstart modal sizing fix | Bug (low) | 0 |
| **#7366** | Restore mid‑turn input for outbound queue | Bug (medium) | 0 |
| **#7364** | Release‑prep for v0.8.0 (chore) | CI/Release | 0 |
| **#7367** | Webhook routing per channel alias (multi‑instance) | Enhancement (low) | 0 |
| **#7229** | Dashboard tabs for MCP, Skills, Plugins & Providers | Feature (high) | 0 |
| **#7260** | Add seven OpenAI‑compatible providers (schema v3) | Provider expansion (low) | 0 |

*All the above are **open** but represent the bulk of work that will be merged before the next stable tag. The most impactful changes are the security token revocation (PR #7243) and the inbound‑webhook routing (PR #7367), both directly addressing today’s top‑ranked issue themes.*

---

### 4. Community Hot Topics  

| # | Title (comments) | Link | Why it matters |
|---|------------------|------|----------------|
| **#4866** – *Web dashboard unavailable* (28 cmt) | https://github.com/zeroclaw-labs/zeroclaw/issues/4866 | The dashboard is the primary entry point for non‑technical operators. Its absence blocks **S1** workflows for many deployments. |
| **#3566** – *A2A protocol support* (6 cmt, 7 👍) | https://github.com/zeroclaw-labs/zeroclaw/issues/3566 | Shows strong interest in **inter‑agent orchestration** and the ecosystem’s expansion beyond a single instance. |
| **#2767** – *Multi‑Agent Routing* (6 cmt, 9 👍) | https://github.com/zeroclaw-labs/zeroclaw/issues/2767 | Aligns with A2A and points to a demand for **isolated workspaces** (e.g., multiple WhatsApp accounts) in one gateway. |
| **#5146** – *Token consumption minimisation via skill compilation* (9 cmt) | https://github.com/zeroclaw-labs/zeroclaw/issues/5146 | Reflects cost‑sensitivity; users want the system to avoid sending massive skill files with every LLM call. |
| **#3642** – *Full Docker image* (9 cmt) | https://github.com/zeroclaw-labs/zeroclaw/issues/3642 | A recurring “low‑tech” barrier: many users cannot compile feature‑flagged binaries; a “one‑click” image would broaden adoption. |

**Analysis:** The community is split between **operational stability** (dashboard, Docker image) and **architectural growth** (A2A, multi‑agent routing). The high‑comment issues also tend to have a security or workflow‑blocking rating (S1/S2), indicating that fixing these will lift the overall health dramatically.

---

### 5. Bugs & Stability (ranked)

| Severity | Issue/PR | Summary | Current Status | Fix in progress? |
|----------|----------|---------|----------------|------------------|
| **S1 – workflow blocked** | **#4866** (bug) – dashboard not built | UI & Tauri desktop both refuse to start. | Open, 28 cmt. | No PR yet; very high priority. |
| **S1** | **#4827** – auto_compact_history disabled in channel mode | Loss of tool‑call history, breaking multi‑turn flows. | Closed (no fix merged). | Needs a follow‑up PR. |
| **S1** | **#4879** – Gemini OAuth CLI fails (rate‑limited loop) | Users cannot use Gemini provider at all. | Open, 3 cmt. | No PR yet. |
| **S2 – degraded experience** | **#4880** – context compression not triggered in daemon mode | Memory usage spikes on busy channels. | Closed, 5 cmt. | Fixed in closed issue. |
| **S2** | **#5122** – web_fetch private‑host allowlist ineffective | Private‑IP bypass blocked; limits internal APIs. | Closed, 4 cmt. | Fixed. |
| **S0 – data loss / security risk** | **#4627** – file_write tool silently fails (invisible files) | Potential data‑loss, high severity. | Open, 3 cmt. | No PR yet – urgent. |
| **S2** | **#5155** – delegate agents ignore prompt_injection_mode | Extra token usage, security surface. | Closed, 3 cmt. | Fixed. |
| **S2** | **#5803** – fallback provider chain ignores config | Could cause credential leakage. | Closed, 3 cmt. | Fixed. |

*Only two high‑severity bugs have been closed today (#4880, #5122). The most critical open bugs (#4866, #4627, #4879) still lack an associated PR, highlighting a gap between issue reporting and engineering response.*

---

### 6. Feature Requests & Roadmap Signals

| Request | Category | Comments | Likelihood for next release |
|---------|----------|----------|-----------------------------|
| **Full Docker image** (#3642) – “one‑click” with all feature flags | Deployment | 9 cmt, medium risk, blocked | **High** – a Docker image is already in the CI pipeline; expected in v0.8.0. |
| **A2A protocol** (#3566) – native agent‑to‑agent HTTP | Inter‑op | 6 cmt, 7 👍, high risk | **Medium** – requires protocol implementation; may land in a follow‑up minor (0.8.x). |
| **Multi‑Agent Routing** (#2767) – isolated workspaces, multiple accounts | Architecture | 6 cmt, 9 👍 | **Medium‑High** – aligns with A2A; likely slated for Q3 2026. |
| **Token‑consumption minimisation** (#5146) – compile‑time skill reduction | Performance | 9 cmt, high risk | **Low‑Medium** – needs tooling changes; maybe later 0.8.x. |
| **Webhook per‑alias routing** (implemented in PR #7367) | Feature (already in PR) | 3 cmt, low risk | **Will be merged** before v0.8.0. |
| **Skill install via .well‑known URI** (#4853) | Extensibility | 4 cmt, high risk | **Medium** – may be scoped into provider improvements. |
| **LeakDetector disable flag** (#4832) | Security/Config | 4 cmt, high risk | **Low** – niche use‑case. |

**Roadmap inference:** The next stable release will focus on **deployment ergonomics (Docker, dashboard build), security hardening (token revocation, webhook routing), and provider ecosystem expansion**. Larger architectural features (A2A, multi‑agent) are being discussed but will likely appear in a later minor/patch cycle.

---

### 7. User Feedback Summary
- **Primary pain point:** *Inability to launch the web UI* (issue #4866) – blocks non‑CLI users and is repeatedly referenced across issues.  
- **Security concerns:** multiple bugs around token leakage, file‑write sandboxing, and provider fallback misbehaviour indicate that operators treat ZeroClaw as a trusted edge component and expect strict isolation.  
- **Cost & performance:** Users are worried about **token waste** when large Skill files are sent on every LLM call (issue #5146).  
- **Developer experience:** Several PRs aim to improve **config editing** (`#[natural_key]`, schema stamping) and **quickstart UX**, showing a desire for smoother onboarding.  
- **Ecosystem expansion:** Requests for *full Docker images*, *A2A*, and *multi‑agent routing* signal a move from “personal assistant” to *enterprise‑grade orchestration*.

Overall sentiment is **high engagement but frustration** over missing UI and a few high‑severity bugs.

---

### 8. Backlog Watch (items needing maintainer attention)

| ID | Title / Category | Open Since | Reason it matters |
|----|------------------|------------|-------------------|
| **#4866** (bug – dashboard) | 3 months | Blocks all non‑CLI usage; S1 severity. |
| **#4627** (bug – file_write) | 1 month | Data‑loss / security risk (S0). |
| **#4879** (bug – Gemini OAuth) | 1 month | Provider completely unusable; S1. |
| **#3566** (feature – A2A) | 2 months | Strategic roadmap; high community interest. |
| **#2767** (feature – multi‑agent) | 3 months | Core to future architecture; high votes. |
| **#6293** (RFC – air‑gapped daemon) | 1 month | Addresses enterprise security requirements. |
| **#7184** (RFC – i18n submodule) | 4 days | Important for localization, but low activity. |
| **#4647** (feature – provider‑scoped fallback) | 2 months | Improves reliability; still open. |

**Recommendation:** Prioritize **#4866**, **#4627**, and **#4879** for immediate triage; schedule **#3566** and **#2767** for the next planning sprint; keep an eye on **#6293** as a potential “air‑gap” differentiator for security‑focused adopters.

---

*Prepared by the ZeroClaw Open‑Source Analyst (2026‑06‑08). All links point to the respective GitHub issue or pull‑request.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*