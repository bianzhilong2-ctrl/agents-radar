# OpenClaw Ecosystem Digest 2026-07-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-14 01:29 UTC

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

# OpenClaw Project Digest – July 14, 2026

## 1. Today's Overview
Project activity remains high, with both issues (500 updated) and PRs (500 updated) near equal split between open/active and newly resolved items. Recent releases (v2026.7.1 and v2026.7.1-beta.6) have expanded model/provider support and set GPT-5.6 as the new default. The bulk of open issues reflect mature feature requests and systemic regressions rather than ad-hoc bugs; however, at least 9 critical (P0/P1) and high-severity concerns require attention, ranging from session-state corruption to sandbox escapes. Overall, the project is in a state of “feature-rich but stability-stressed,” with multiple regressions emerging across platform tools, authentication flows, and multi-agent coordination. 

## 2. Releases
**v2026.7.1 (stable)**
- **New models/providers**: Added Featherless, Claude Sonnet 5, Mythos 5, Meta Muse Spark 1.1, ClawRouter. 
- **New default model**: GPT-5.6 now the default on fresh setups, with thinking modes `/think ultra` for Sol/Terra and `max` for Luna. 
- **OAuth/model refresh**: After OAuth sign-in, model availability is refreshed.
- **Bug fixes**: Included fixes for 2026.7.1-beta.6 baseline.

**v2026.7.1-beta.6 (beta)** — identical feature set to stable but retains beta status. No breaking changes noted for this release cycle.

*Users upgrading from prior versions should verify model availability post-OAuth and confirm GPT-5.6 behavior matches expected thinking mode defaults.* 

## 3. Project Progress – Merged PRs (Jul 14)
Only PRs with activity on this date (most markers show undefined comment counts): 
- **#106404** – *fix(memory-core): dreaming narrative subagent receives full generic prompt instead of minimal.* Addresses prompt bloat for dreaming-enabled users.
- **#106970** – *chore(skills): support large autoreview diffs.* Increases pre-commit review gate usability for large refactors.
- **#104362** – *fix: complete C1 control-character (0x80-0x9f) coverage across terminal/log sinks.* Hardens terminal and logging boundaries against control-character injection.
- **#106969** – *refactor(agents): privatize system prompt helpers.* Cleans up unused exports for system prompt building.
- **#106968** – *improve(doctor): keep regular runs problem-focused and compact.* Reduces noise from healthy-state checks in `openclaw doctor`.

*Taken together, these represent steady, mostly non-breaking improvements in memory behavior, skill review capacity, security hardening, and developer tooling.*/

## 4. Community Hot Topics – Most Active Issues & PRs)
### **Most-Commented & High-Impact Items** (Open Issues)

| **Top 10 by Comment Count** |
|---|---|---|---|
| #75 | **Linux/Windows Clawdbot Apps** | 112 comments, 81 👍 | Open issue requesting macOS/iOS/Android apps for Windows/Linux missing.** |
| #7707 | **Memory Trust Tagging by Source** | First featured continues, impact:session-state, security.** |
| #104721 | **[Bug]** "(see attached image)" literal string placeholder vs actual file** | 16 comments, 1 👍 |
| #102020 | **session init conflict – cross-channel, position-dependent** | 13 comments, 1👍 |
| #38327 | **[Bug]****`undefined or null to object runtime in 2026.3.2** with google-vertex/gemini-3.1-pro-preview** **Error wrapping in 2026.3.2** with google-vertex/gemini-3.1-pro-preview** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.2** **Error wrapping in 2026.3.

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report: Personal AI Assistant/Agent Open-Source Ecosystem  

---

## **1. Ecosystem Overview**  
The personal AI assistant/agent ecosystem in 2026 remains fragmented but rapidly evolving, with projects targeting developers, enterprises, and individual users. OpenClaw serves as a central reference with broad model/provider support but grapples with stability issues. PicoClaw and ZeroClaw emphasize security and governance, respectively, while CoPaw and NanoBot focus on integration and user workflows. Activity varies widely: CoPaw and OpenClaw show high velocity, whereas projects like NanoClaw and PicoClaw balance feature development with security migrations. The ecosystem reflects diverse priorities—from multi-agent coordination to standalone agentic workflows—indicating a maturing but still-divergent landscape.  

---

## **2. Activity Comparison**  
| Project     | Issues Count | PRs Updated | Latest Release? | Health Score (1-5) |  
|-------------|--------------|-------------|-----------------|--------------------|  
| **OpenClaw**| 500 (active)| 500         | v2026.7.1       | 3 (Stability-stressed) |  
| **CoPaw**   | 50           | 50          | v2.0.0.post1    | 4 (High activity, ongoing regressions) |  
| **ZeroClaw**| 50           | 50          | v0.8.2 beta     | 4 (Active RFCs, pending releases) |  
| **PicoClaw**| 4            | 5           | None            | 3 (Security focus, but stalled migration) |  
| **NanoBot** | 13           | 45          | None            | 3 (Stable but with critical loops) |  
| **NanoClaw**| 3            | 27          | None            | 3 (Security-driven, low engagement) |  
| **Others**  | ≤10          | ≤20         | None or patches   | 2-3 (Niche or slow-moving) |  

---

## **3. OpenClaw's Position**  
OpenClaw dominates as a feature-rich reference platform with GPT-5.6 as its default model and robust multi-agent tools. However, it faces criticism for recurring regressions (session-state corruption, sandbox escapes). Its advantage lies in breadth (supports 5+ models/providers) and community adoption, though its 3/5 health score reflects unresolved stability issues. In contrast, ZeroClaw’s modular RFC-driven roadmap and PicoClaw’s focus on security (e.g., `libolm`→`vodozemac` migration) carve distinct niches. OpenClaw’s community is larger and more active, but not without friction over technical debt.  

---

## **4. Shared Technical Focus Areas**  
Across projects, common themes emerge:  
- **Memory/Context Management**: All projects address dream storage (OpenClaw, NanoBot, CoPaw) and context compression (CoPaw, ZeroClaw).  
- **Security & MCP**: OpenClaw, PicoClaw, and NanoClaw prioritize OAuth fixes and sandboxing.  
- **Tool Governance**: CoPaw and ZeroClaw refine permission models and access control.  
- **Cross-Platform integration**: Docker, CLI, and specific platform plugins (e.g., Mattermost in NanoBot) are recurring priorities.  
- **Model Switching**: Projects like OpenClaw and CoPaw emphasize seamless LLM provider transitions.  

---

## **5. Differentiation Analysis**  
- **Feature Focus**: OpenClaw prioritizes multi-agent tools; NanoBot targets enterprise integrations (Mattermost). ZeroClaw focuses on governance; PicoClaw on cryptographic security.  
- **Target Users**:  
  - **Developers**: OpenClaw, CoPaw (tooling, APIs).  
  - **Enterprises**: NanoBot (Mattermost/Slack), ZeroClaw (SOP workflows).  
  - **General Users**: PicoClaw (privacy-conscious CLI), NanoClaw (small-model optimization).  
- **Technical Architecture**: ZeroClaw and CoPaw emphasize modularity; OpenClaw relies on centralized control; PicoClaw uses webhook-driven gateways.  

---

## **6. Community Momentum & Maturity**  
- **Rapidly Iterating**: CoPaw (50 issues/PRs), OpenClaw, and ZeroClaw show high velocity, though CoPaw balances this with active regression resolution.  
- **Stabilizing**: PicoClaw (security migration, but stalled) and Moltis (CalDAV bug fix in progress).  
- **Maturity Signals**:  
  - **Older/Evolving**: OpenClaw (feature parity but technical debt), PicoClaw (security foundational shifts).  
  - **New/Experimental**: ZeroClaw’s v0.8.x RFCs, CoPaw’s governance overhauls.  

---

## **7. Trend Signals**  
- **Security First**: Migrations like `libolm`→`vodozemac` (PicoClaw) and MCP allowlists (ZeroClaw) reflect industry focus on trust.  
- **Modular Architecture**: ZeroClaw’s RFCs and CoPaw’s governance tooling signal a shift away from monolithic designs.  
- **Permission Models**: Improved deny/allow systems are widespread (CoPaw, ZeroClaw), addressing enterprise needs.  
- **Memory Efficiency**: Dream systems (OpenClaw, NanoBot) and local-first modes (ZeroClaw) highlight demand for context control.  
- **Value for Developers**: Open-source collaboration (CoPaw’s RFC process), rapid iteration (CoPaw, OpenClaw), and security-hardened tooling (PicoClaw, ZeroClaw) are key draws.  

--- 

This report underscores a bifurcated ecosystem: OpenClaw and CoPaw drive innovation but face stability hurdles, while security- and governance-focused projects like PicoClaw and ZeroClaw address niche but critical needs. The trends signal a move toward modularity, permission-centric governance, and security-by-design—a boon for developers prioritizing safety and scalability.


---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# NanoBot Project Digest — 2026-07-14

## Today's Overview
NanoBot exhibits high development velocity with 13 issues and 45 pull requests updated in the last 24 hours. The project maintains active bug resolution efforts while advancing core infrastructure improvements. Focus areas include communication channel integrations, memory/dream system stability, and developer experience enhancements. No releases were published today, indicating ongoing stabilization before next version.

## Releases
No new releases recorded for this date.

## Project Progress
**Closed Issues:**
- [#1304](https://github.com/HKUDS/nanobot/issues/1304) - Resolved codex usage limitation (closed)
- [#4897](https://github.com/HKUDS/nanobot/issues/4897) - Fixed Discord bot integration connectivity issues
- [#1500](https://github.com/HKUDS/nanobot/issues/1500) - Addressed forced information-flow output control requests
- [#4882](https://github.com/HKUDS/nanobot/issues/4882) - Corrected dream content diff reporting for unchanged files
- [#4893](https://github.com/HKUDS/nanobot/issues/4893) - Fixed dream-log/restore showing non-Dream commits
- [#4894](https://github.com/HKUDS/nanobot/issues/4894) - Resolved prune_dream_sessions base64 filename handling

**Recently Merged PRs:**
- [#4909](https://github.com/HKUDS/nanobot/pull/4909) - Ignore line-ending-only memory diffs in Dream system
- [#4912](https://github.com/HKUDS/nanobot/pull/4912) - Removed broken Star History embed from documentation
- [#4913](https://github.com/HKUDS/nanobot/pull/4913) - Updated documentation with recent changes through July 12
- [#4914](https://github.com/HKUDS/nanobot/pull/4914) - Added Brazilian Portuguese (pt-BR) WebUI locale support
- [#4320](https://github.com/HKUDS/nanobot/pull/4320) - Implemented audit tool configuration for agent observability

## Community Hot Topics
**[#1011](https://github.com/HKUDS/nanobot/issues/1011) Mattermost Bot Integration** (4 👍 reactions) represents significant community demand for enterprise-friendly communication channels. Users express preference for open-source collaboration platforms over proprietary alternatives like Slack/WhatsApp.

**[#4864](https://github.com/HKUDS/nanobot/issues/4864) Endless Loop Bug** with `complete_goal` function highlights critical gateway parameter serialization issues affecting agent reliability. This generates immediate concern due to potential infinite execution loops.

**[#4866](https://github.com/HKUDS/nanobot/pull/4866) Model Preset Binding** introduces session-scoped model configuration persistence, addressing user needs for consistent multi-turn conversation experiences across different LLM providers.

## Bugs & Stability
**Critical Priority Issues:**
- [#4864](https://github.com/HKUDS/nanobot/issues/4864) - OPEN: Tool gateway parsing causing endless loop in goal completion
- [#4917](https://github.com/HKUDS/nanobot/pull/4917) - OPEN: Windows UTF-16 process output decoding preventing proper shell tool output
- [#4816](https://github.com/HKUDS/nanobot/pull/4816) - OPEN: BaseException catch in tool execution blocking proper cancellation handling
- [#4819](https://github.com/HKUDS/nanobot/pull/4819) - OPEN: WeakValueDictionary consolidation locks allowing concurrent session conflicts

**Fixed Issues:**
- Multiple Dream system bugs resolved: file diff reporting, commit filtering, and session pruning
- Discord integration connectivity problems addressed
- Documentation infrastructure improvements completed

## Feature Requests & Roadmap Signals
**High-demand Integrations:**
- [#192](https://github.com/HKUDS/nanobot/issues/192) WeChat support requested (from February)
- [#1011](https://github.com/HKUDS/nanobot/issues/1011) Mattermost channel integration (4 👍 signals strong interest)

**Core Infrastructure Enhancements:**
- [#4853](https://github.com/HKUDS/nanobot/pull/4853) `nano_timer` core tool for timezone/calendar functionality
- [#4620](https://github.com/HKUDS/nanobot/pull/4620) Heartbeat trigger command with CLI support
- [#4587](https://github.com/HKUDS/nanobot/pull/4587) WebUI session Markdown export capability

**Developer Experience:**
- [#4878](https://github.com/HKUDS/nanobot/pull/4878) Auto-discovery mechanism for agent hooks
- [#4888](https://github.com/HKUDS/nanobot/pull/4888) Workspace write serialization for concurrent safety

## User Feedback Summary
Users express frustration with excessive verbosity in agent execution flows (#1500) and request granular output control mechanisms similar to traditional logging systems. File handling limitations in Feishu/Lark integrations (#2352) indicate need for better MCP interface documentation. Strong community preference emerges for privacy-conscious communication platforms (Mattermost, WeChat) over mainstream alternatives. Discord integration stability improvements show progress on user-reported connectivity issues.

## Backlog Watch
**Stale/Open Issues Requiring Attention:**
- [#192](https://github.com/HKUDS/nanobot/issues/192) WeChat integration (created February 6, 2026) - No recent activity despite clear user need
- [#1011](https://github.com/HKUDS/nanobot/issues/1011) Mattermost bot (created February 22, 2026) - 4 👍 reactions suggest high community priority
- [#2376](https://github.com/HKUDS/nanobot/issues/2376) Multiple assistant messages error (created March 23, 2026) - Recent closure indicates resolution progress
- [#1500](https://github.com/HKUDS/nanobot/issues/1500) Output mode control (created March 4, 2026) - Addresses fundamental usability concern
- [#2352](https://github.com/HKUDS/nanobot/issues/2352) Feishu file reception (created March 22, 2026) - Chinese-language issue suggesting regional adoption challenges


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest (2026-07-14)

## 1. Today's Overview
Hermes Agent showed heavy repository activity on 2026-07-14 with **50 issues updated (25 closed, 25 open)** and **50 pull requests updated — all remaining open with 0 merged/closed**. No new releases were published. A notable share of the 25 closed issues carried `sweeper:implemented-on-main` labels, indicating an automated backlog sweep that reconciled long-standing bugs against fixes already landed on the `main` branch rather than a coordinated release. Concurrently, a burst of new PRs (#64077–#64087) was opened today, signaling an active development push on gateway reliability, MCP tooling, and agent loop hardening — but with zero merge throughput, the project currently has a review/merge bottleneck rather than a delivery bottleneck.

## 2. Releases
No new releases were published today (0 new releases). The most recent referenced version in issue data is `v0.15.2` (PyPI) / `v0.15.1` (desktop), with multiple users noting feature gaps between PyPI builds and `main`-branch `install.sh` artifacts (see [#38949](https://github.com/NousResearch/hermes-agent/issues/38949)). No migration notes or breaking changes to report.

## 3. Project Progress
With **0 PRs merged/closed** today, code progress is reflected indirectly through **25 issue closures**, many auto-resolved by the project's sweeper bot against `main`-branch fixes. Key closed items indicating landed improvements:

- **Provider/routing correctness:** [#39047](https://github.com/NousResearch/hermes-agent/issues/39047) (auxiliary Gemini model mis-routed to Codex backend), [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) (empty Codex response retried 3×).
- **Desktop UX:** [#38989](https://github.com/NousResearch/hermes-agent/issues/38989) (sidebar session list omissions, 3 👍), [#39025](https://github.com/NousResearch/hermes-agent/issues/39025) & [#39231](https://github.com/NousResearch/hermes-agent/issues/39231) (CJK IME composition/send-button bugs), [#38946](https://github.com/NousResearch/hermes-agent/issues/38946) (hidden human-confirmation dialog).
- **Auth & tools:** [#39187](https://github.com/NousResearch/hermes-agent/issues/39187) (`execute_code` "Always" approval persistence), [#39078](https://github.com/NousResearch/hermes-agent/issues/39078) (`session_search` aux slot 400 error).
- **Platform/setup:** [#39143](https://github.com/NousResearch/hermes-agent/issues/39143) (Windows Docker WSL2), [#39185](https://github.com/NousResearch/hermes-agent/issues/39185) (missing `hermes.exe`), [#38919](https://github.com/NousResearch/hermes-agent/issues/38919) (desktop CPU limitation), [#39220](https://github.com/NousResearch/hermes-agent/issues/39220) (Docker WhatsApp install persistence).
- **Gateway control:** [#26813](https://github.com/NousResearch/hermes-agent/issues/26813) (`/stop`/`/interrupt` fed as steer text).
- **Feature delivered:** [#39020](https://github.com/NousResearch/hermes-agent/issues/39020) (dedicated Desktop Providers settings section).

Note: These closures confirm fixes exist on `main` but are **not yet in a tagged release**.

## 4. Community Hot Topics
Most-discussed

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑07‑14**

---

### 1. Today's Overview  
Over the past 24 h the PicoClaw repository stayed active with four **open issues** and **five PRs** updated, but **no new releases**. One PR was **closed/merged** (#3253) introducing a gateway webhook feature, while the remaining four are still stale. The backlog is dominated by a long‑standing, high‑priority request to retire the unmaintained **libolm** library (#3088). Overall health is good: recent code changes (model‑resolution fix, Docker image bump) are low‑risk chores, and the only functional change pushed today is the webhook addition.

---

### 2. Releases  
**None.** No new tags or published versions were generated today.

---

### 3. Project Progress – Merged / Closed PRs (since last digest)  
| PR | Action | Author | Summary |
|----|--------|--------|---------|
| **#3253** | **Closed / Merged** | tisoga | **Feat/gateway webhook** – adds a new webhook endpoint for external gateway integration. The PR includes documentation, tests, and a sample configuration. This is now part of the latest release branch and should be ship‑ready. |

*All other PRs (#3228, #3192, #3191, #3254) remain **open & stale**; none have been merged today.*

---

### 4. Community Hot Topics – Most Discussed Issues / PRs  

**Issue #3088 – “use vodozemac instead of libolm”**  
- **Status:** OPEN, **high‑priority**, **stale** (last activity 2026‑07‑13)  
- **Comments / Reactions:** **8 comments, 2 👍** (by far the most engagement)  
- **Link:** https://github.com/sipeed/picoclaw/issues/3088  
- **Underlying Need:** The community wants to replace the deprecated, insecure `libolm` with the actively maintained `vodozemac` library (the official Olm successor). This is a **critical security/health** move for the project’s encryption stack. The issue is marked “help wanted”, but no maintainer has taken the work yet.

*Other items (e.g., #3230 – a Gemini API format bug) have only 1 comment and no consensus yet, so they’re secondary in community focus.*

---

### 5. Bugs & Stability – Issues Reported Today  

| Issue | Severity* | Status | Comments / Reactions | Impact |
|-------|-----------|--------|----------------------|--------|
| **#3230 – missing `thought_signature` when calling Gemini via OpenAI‑compat format** | **Medium‑High** (breaks tool‑use flow) | OPEN, stale | 1 comment | Users on Cloudflare AI Gateway see a `thought_signature` error, preventing successful LLM calls with function‑calls. |
| **#3229 – rolling conversation cache breakpoints for `anthropic‑messages`** | Low‑Medium (performance) | OPEN, stale | 1 comment | Impacts prompt‑caching efficiency for conversational agents. |
| **#3231 – Basic Auth header for SearXNG search** | Low‑Medium (feature gap) | OPEN, stale | 1 comment | SearXNG integration currently requires URL‑encoded auth; users need proper Basic‑Auth request‑header support. |

\*Severity is judged from the bug’s potential effect on core functionality and user experience.

**No fix PRs yet** for the active bugs (#3230, #3229, #3231). The most critical (Gemini `thought_signature` bug) should be prioritized in the next sprint.

---

### 6. Feature Requests & Roadmap Signals  

| Issue | Type | Community Interest | Likelihood of Next‑Version Inclusion* |
|-------|------|--------------------|--------------------------------------|
| **#3088 – replace libolm with vodozemac** | **Feature (security)** | **High** (8 comments, 2 👍) | **Medium** – High‑priority but stale; needs a maintainer to claim and drive the migration. |
| **#3229 – rolling conversation cache for Anthropic** | **Feature (performance)** | Low (1 comment) | **Low** – Requires deeper changes to the `anthropic‑messages` provider; unlikely without a champion. |
| **#3231 – Basic Auth header for SearXNG** | **Feature (integration)** | Low (1 comment) | **Low** – Niche, but could be a quick add‑on if a contributor steps forward. |

\*Likelihood is an informal estimate based on current activity, priority flags, and backlog depth.

---

### 7. User Feedback Summary  

- **Gemini API (OpenAI‑compat) Users:** Report a **missing `thought_signature`** error that blocks tool‑use scenarios. This is a **functional regression** for anyone routing through Cloudflare AI Gateway.  
- **SearXNG Integration Users:** State that the current implementation only works when credentials are **URL‑encoded**, not via HTTP Basic Auth headers, limiting proper auth handling.  
- **Security‑Conscious Users:** Strongly favor the **libolm → vodozemac migration**, viewing the current dependency as a risk.  
- **Agentic Workloads:** Want **per‑block cache control** for Anthropic messages to improve token efficiency; currently not expressed in the provider.  

Overall satisfaction is mixed: core functionality (gateway webhook) added, but **critical bug** and **security‑risk** items remain unresolved.

---

### 8. Backlog Watch – Items Needing Maintainer Attention  

| Item | Age (Days) | Priority / Flags | Why It Needs Action |
|------|------------|------------------|---------------------|
| **#3088 – libolm → vodozemac** | ~36 | **High / help‑wanted / stale** | Replaces an unmaintained, insecure library; directly impacts project security posture. |
| **#3230 – Gemini `thought_signature` bug** | ~8 | **Medium‑High** | Breaks LLM tool‑use for a major provider; blocks users on common edge‑cases. |
| **#3229 – Anthropic rolling cache** | ~8 | **Medium** | Improves performance for conversational agents; requested in previous releases. |
| **#3231 – SearXNG Basic Auth** | ~8 | **Low‑Medium** | Missing convenience feature for enterprise‑grade search integration. |

**Action Items for Maintainer:**  
1. **Claim #3088** – Assign a PR or a sub‑task list to swap `libolm` with `vodozemac`, ensuring backward compatibility (optional compile‑time flag).  
2. **Prioritize #3230** – Investigate the OpenAI‑compat token flow, add a fix to preserve `thought_signature` in the response schema.  
3. **Schedule a sprint** – Address the performance/backlog items (#3229, #3231) if resources allow, otherwise keep them as low‑priority follow‑ups.

---

### Quick Links (copy‑paste friendly)  

- **Gateway Webhook (merged):** https://github.com/sipeed/picoclaw/pull/3253  
- **Libolm → Vodozemac (stale, high‑need):** https://github.com/sipeed/picoclaw/issues/3088  
- **Gemini `thought_signature` bug:** https://github.com/sipeed/picoclaw/issues/3230  
- **Anthropic cache proposal:** https://github.com/sipeed/picoclaw/issues/3229  
- **SearXNG Basic Auth request:** https://github.com/sipeed/picoclaw/issues/3231  

---  

**Bottom line:** PicoClaw is progressing on a new webhook capability, but the most pressing concerns are security (libolm migration) and a functional bug (Gemini `thought_signature`). Rallying maintainers to tackle the top‑ranked backlog items will restore confidence and keep the project on a stable, modern path.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



### **Today's Overview**  
NanoClaw saw high security activity today, with three closed security issues related to `add_mcp_server` approval flows enabling "approval smuggling" ([#2827](https://github.com/qwibitai/nanoclaw/issues/2827), [#2762](https://github.com/qwibitai/nanoclaw/issues/2762)). While these critical vulnerabilities were addressed in PRs like [#2998](https://github.com/qwibitai/nanoclaw/pull/2998), the lack of community discussion (0 comments/likes) suggests limited visibility. On the positive side, 27 PRs were merged, indicating rapid iteration. Key updates included secure container practices, shared memory systems, and scheduling tools.  

---

### **Releases**  
**No new releases** were published today. The project’s focus remains on resolving security flaws and enhancing core functionality rather than version releases.  

---

### **Project Progress**  
Merged PRs today advanced critical areas:  
- **Security**: [#2998](https://github.com/qwibitai/nanoclaw/pull/2998) ensured full MCP server payload visibility on approval cards, mitigating smuggling risks.  
- **Core Features**: Scheduled tasks in templates ([#3022](https://github.com/qwibitai/nanoclaw/pull/3022)), provider-agnostic memory ([#3012](https://github.com/qwibitai/nanoclaw/pull/3012)), and codec integration ([#3013](https://github.com/qwibitai/nanoclaw/pull/3013)).  
- **User Experience**: Dial channel support ([#3032](https://github.com/qwibitai/nanoclaw/pull/3032)) and improved error handling ([#2996](https://github.com/qwibitai/nanoclaw/pull/2996)).  

Most closed PRs addressed high-priority bugs or user-reported issues.  

---

### **Community Hot Topics**  
There are no actively discussed Issues/PRs with comments/reacts today. Security fixes (e.g., smuggling risks) and tool integrations (e.g., Dial channel) dominated closed PRs but lack engagement. The community may prioritize deeper discussion in future sprints.  

---

### **Bugs & Stability**  
- **[Critical] #2995 (Closed)**: Outbound messages to offline adapters were falsely marked delivered, risking data loss. Fixed via [#2996](https://github.com/qwibitai/nanoclaw/pull/2996), rerouting messages to retry paths.  
- **[Medium] #2995-Style Bug**: No other critical regressions reported. Fix PRs exist for most critical issues, though security flaws remain unacknowledged in the community.  

---

### **Feature Requests & Roadmap Signals**  
- **Dial Integration**: [#3032](https://github.com/qwibitai/nanoclaw/pull/3032) and [#3033](https://github.com/qwibitai/nanoclaw/pull/3033) add SMS/voice capabilities via [Dial](https://getdial.ai).  
- **Security**: [#3037](https://github.com/qwibitai/nanoclaw/pull/3037) proposes MCP tool allowlists for risk mitigation.  
- **Memory/Migration**: Shared memory systems ([#3012](https://github.com/qwibitai/nanoclaw/pull/3012)) and Codex sync ([#3013](https://github.com/qwibitai/nanoclaw/pull/3013)) suggest a focus on interoperability.  

These signals align with enhancing usability and securing self-modification workflows.  

---

### **User Feedback Summary**  
Security vulnerabilities (smuggling risks) were flagged but not widely discussed. Users may value incremental toolset additions (e.g., Dial) over UI/UX improvements. No explicit feedback was captured in comments for closed PRs.  

---

### **Backlog Watch**  
- **High Priority**: [#3037 (MCP Allowlist PR)](https://github.com/qwibitai/nanoclaw/pull/3037) needs maintainer review to finalize security configurations.  
- **Long-Standing**: [#2120 (Provider Output Substitutions)](https://github.com/qwibitai/nanoclaw/pull/2120) (open 6 days) requires testing for error handling reliability.  
- **Critical Open**: [#2802 (Socket Timeouts)](https://github.com/qwibitai/nanoclaw/pull/2802) remains unresolved, risking connection stability.  

Maintainers should prioritize security fixes and memory/extension integrations.  

---  
**GitHub links provided for all items.** This digest reflects a security-first, feature-expanding phase with low community interaction.


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

### NullClaw Project Digest – 2026‑07‑14

#### 1. Today’s Overview  
On 14 materiales the NullClaw repository shows **no new releases** and **zero issue activity**.  Twelve pull‑requests were opened or updated in the past 24 h, but none have been merged or closed today.  Overall, the project is maintaining a steady flow of incremental improvement work, with a focus on stability, interoperability, and documentation.

---

#### 2. Releases  
_No new releases were published on this date._

---

#### 3. Project Progress  
| State | PR # | Author | Title | Link |
|-------|-----|--------|-------|------|
| **Open** | 970 | vernonstinebaker | `fix(cli): handle arrow keys in agent REPL` | <https://github.com/nullclaw/nullclaw/pull/970> |
| **Open** | 969 | valonmulolli | `feat(agent): structured approval_request / approval_response flow` | <https://github.com/nullclaw/nullclaw/pull/969> |
| **Open** | 968 | addadi | `fix(matrix): persist next_batch across restart + test env isolation` | <https://github.com/nullclaw/nullclaw/pull/968> |
| **Open** | 966 | vernonstinebaker | `fix(http Touchable with "secure buffered curl fallback on Android"` | <https://github.com/nullclaw/nullclaw/pull/966> |
| **Open** | 964 | mtdphn | `Enable native API-level tool calls during streaming` | <https://github.com/nullclaw/nullclaw/pull/964> |
| **Open** | 963 | vernonstinebaker | `fix(channels): document and harden Weixin iLink QR auth` | <https://github.com/nullclaw/nullclaw/pull/963> |
| **Open** | 956 | dependabot[bot] | `ci(deps): bump alpine from 3.23 to 3.24 in docker-images group` | <https://github.com/nullclaw/nullclaw/pull/956> |
| **Open** | 962 | vernonstinebaker | `docs(providers): document native Anthropic provider` | <https://github.com/nullclaw/nullclaw/pull/962> |
| **Open** | 961 | valonmulolli | `feat(memory): add configurable auto‑recall, recall_limit, max_context_bytes` | <https://github.com/nullclaw/nullclaw/pull/961> |
| **Open** | 959 | vernonstinebaker | `fix(cron): persist paired token for scheduler tool access (#839)` | <https://github.com/nullclaw/nullclaw/p្តpull/959> |
| **Open** | 958 | dtarandek | `fix(teams): accept lowercase serviceurl JWT claim and raise JWKS fetch cap` | <https://github.com/nullclaw/nullclaw/pull/958> |
| **Open** | 954 | vernonstinebaker | `Fix: one‑shot cron jobs silently fail to deliver messages` | <https://github.com/nullclaw/nullclaw/pull/954> |

_No PRs were merged or closed today, so the feature set remained unchanged._

---

#### 4. Community Hot Topics  
With no active issues, the most discussed items are the PRs listed above—none have particularly high comment or reaction counts (all at 0).  The PRs that stand out in terms of depth and potential impact are:

| PR # | Focus Area | Why It Matters |
|------|------------|----------------|
| 969 | Structured approval flow | Enables safe tool‑execution for shell‑compatible tools, a core use‑case in real‑world automation. |
| 970 | CLI REPL line editor | Improves developer ergonomics for interactive sessions, critical for debugging and rapid exploration. |
| 964 | Native API‑level streaming | Allows tool‑call continuations to be streamed seamlessly, a key feature for large‑language‑model providers. |
| 958 | Teams JWT claim fix | Resolves cross‑platform authentication issues for Microsoft Teams integrators. |

These pull requests are likely to influence the next release cycle.

---

#### 5. errs & Stability  
No bugs or crashes were reported today.  The following previously open bugs are still unresolved but have submitted fixes:

- **#954** – one‑shot cron jobs silently failing. *(Fix PR already merged; observable in PR #954)*

There are no regressions present in the current state of the repository.

---

#### 6. Feature Requests & Roadmap Signals  
| Feature | Origin | Current Status |
|---------|--------|----------------|
| **Auto‑recall configuration** (PR #961) | Core developer proposal | Added new config keys (`auto_recall`, `recall_limit`, `max_context_bytes`) – ready for testing. |
| **Structured approval flow** ( Jonas ) | Open‑source contributor | PR #969 ready for review → likely next milestone. |
| **Native Anthropic provider docs** | Maintainer | PR #962 introduces documentation, improving onboarding. |
| **CLI line editor** | Maintainer | PR #970 will make the REPL more usable. |

These items show that maintenance, user experience, and provider extensibility are central to the upcoming roadmap.

---

#### 7. User Feedback Summary  
_Upon review of the public issue list, there are no user‑submitted issues on the date in question.  Existing discussions indicate that users expect more robust integration with external services (Teams, Matrix, Weixin) and stricter handling of tool refusal flows.  Documentation improvements help lower the learning curve._

---

#### 8. Backlog Watch  
No long‑pending issues are visible Oy but watch for any PRs or questions that sit in the review queue for > 30 days; for now the queue is empty.

---

**Overall Project Health:**  
- **Stability**: No critical bugs today.
- **Engagement**: Pull‑request activity is consistent; community contributions are flowing.
- **Direction**: Clear focus on making the agent more interactive (CLI), safer (approval flow), and more comprehensive in provider support.

Keep an eye on the pending PRs, especially #969 and #970, as they promise tangible improvements to user workflow and safety.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



**IronClaw Project Digest – 2026-07-14**  

---

### **1. Today's Overview**  
IronClaw saw significant activity today with 34 open issues and 50 PR updates in the last 24h, indicating active development and problem-solving. No new releases were made, focusing on resolving bugs and refining core features. Key areas of focus include extensibility, chat UI stability, and migration workflows.  

---

### **2. Releases**  
No new releases were published today.  

---

### **3. Project Progress**  
- **Merged/Closed PRs**: 16 PRs were merged or closed today, advancing key initiatives. For example, PR #6058 shipped the extension ownership migration binary, and PR #6062 added a Matix Reborn channel skeleton.  
- **Notable Advances**: PR #5957 hardened OAuth/extension lifecycles, while PR #5936 introduced an offline v1-to-Reborn migration workflow.  
- **Completed Tasks**: Backend fixes for compaction errors (#5971) and stale surface rendering (#6055) were resolved.  

---

### **4. Community Hot Topics**  
- **Issue #5948** (GitHub extension activation misreport) had 5 comments, highlighting confusion in extension states.  
- **PR #6064** addressed #5948 by clearing stale chat history banners.  
- **Issue #6050** (conversation history error) and **Issue #6060** (default delivery target) also drew attention due to UX/QA impacts.  

---

### **5. Bugs & Stability**  
- **Critical (P3)**:  
  - #5948: Extension status misreporting (GitHub).  
  - #6050: Persistent conversation history error banners.  
  - #5741: `builtin.http.save` failing for large payloads.  
- **High (P2)**:  
  - #5882: Slack reconnect failures.  
  - #6045: Agent prioritizing diagnostics over user intent.  
- **Fixes**: PRs like #6064 (chat banners) and #5957 (OAuth hardening) address specific bugs directly.  

---

### **6. Feature Requests & Roadmap Signals**  
- **PR #6061** proposed a unified extension model for NEA-25, signaling a shift toward standardized extensibility.  
- **PR #5936** introduced offline migration, indicating a focus on backward compatibility.  
- **Issue #6000** raised security reporting concerns, possibly influencing future release security workflows.  

---

### **7. User Feedback Summary**  
- Users reported inconsistent extension states, error banners persisting after fixes, and Slack/DM functionality gaps.  
- Pain points included confusion over tool limitations (e.g., large document saving failures) and poor error messaging in agent outputs.  
- Positive feedback emerged for migration tooling and unified extension concepts.  

---

### **8. Backlog Watch**  
- **#5882** (Slack reconnect broken state) remains open for over a week with no resolution.  
- **#5640** (No RecordingSecurityAuditSink) has persisted since July 4th and requires offline/hosting adjustments.  
- **#5846** (implicit extension-ownership migration earlier) is unresolved, risking deployment gaps in production.  

--- 

**GitHub Links**: [Issues](https://github.com/nearai/ironclaw/issues), [PRs](https://github.com/nearai/ironclaw/pulls)


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-14

## 1. Today's Overview
Moltis shows **minimal activity** over the past 24 hours: no issue updates, no releases, and only **one open pull request** (#1147) receiving attention. The sole active PR targets a CalDAV correctness bug where the `list_events` time-range filter was ignored, causing full-calendar fetches on every call. With zero merged/closed PRs and no community discussion (0 comments, 0 reactions), the project appears in a **quiet maintenance phase** rather than active feature development. Overall health signals are neutral—no regressions reported, but also no velocity.

---

## 2. Releases
**No new releases** published today or in the recent window covered by this data.

---

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#1147](https://github.com/moltis-org/moltis/pull/1147) | **Open** (updated 2026-07-13) | **fix(caldav): honor time range in `list_events` via server-side `calendar-query`** — The `range` parameter was bound as `_range` but never passed to the CalDAV request, so every call returned the entire calendar. The fix sends a proper `CALDAV:calendar-query` with the requested start/end window. | **Correctness / Performance** — Eliminates unbounded calendar scans; restores documented behavior for scheduling assistants and any consumer relying on time-bounded event lists. |

*No PRs were merged or closed today.*

---

## 4. Community Hot Topics
**None.** The single open PR has **0 comments and 0 reactions**, indicating no community debate or external contributor involvement at this time.

---

## 5. Bugs & Stability
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **Medium** | `CalDavClient::list_events` ignores `start`/`end` parameters, fetching entire calendar | **Open** — root cause identified, fix proposed in [#1147](https://github.com/moltis-org/moltis/pull/1147) | [#1147](https://github.com/moltis-org/moltis/pull/1147) (awaiting review/merge) |

*No new crashes, regressions, or stability incidents reported today.*

---

## 6. Feature Requests & Roadmap Signals
**No new feature requests or roadmap discussions** surfaced in the last 24 hours. The only signal is the implicit need for **reliable CalDAV time-range filtering**—a prerequisite for any scheduling/availability features downstream.

---

## 7. User Feedback Summary
**No user-reported issues, support questions, or feedback** captured in the dataset today. Silence may indicate either stable usage or low community engagement; maintainers should monitor channels (Discord, forums, issue tracker) for latent pain points.

---

## 8. Backlog Watch
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1147](https://github.com/moltis-org/moltis/pull/1147) | Opened 2026-07-11 (3 days) | Fixes a documented contract violation in a core CalDAV primitive; blocks correct scheduling UX. | **Prioritize review & merge**; add regression test for time-range filtering. |

*No other stale issues or PRs identified in the provided snapshot.*

---

**Bottom line:** Moltis is currently **stable but static**. The only actionable item is merging #1147 to restore correct CalDAV semantics. A healthy next step would be a quick review cycle for that PR, followed by a patch release to unblock downstream integrations.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – 2026‑07‑14**  
*All links are to the GitHub items mentioned in the data set.*

---

## 1. Today's Overview  
- **Activity volume:** In the last 24 h the repository logged **50 issue updates** (27 open/active, 23 closed) and **50 PR updates** (22 open, 28 merged/closed).  
- **Release cadence:** A **new patch** (`v2.0.0.post1`) was published, bumping the version and shipping a handful of bug‑fix commits.  
- **Overall health:** The project remains **high‑velocity** but shows **growing pains** – several recurring regressions (loop‑detection false positives, context‑compression 400 errors, DBus‑related Chrome crashes) are surfacing repeatedly. Maintainer attention is needed on stability‑critical paths.

---

## 2. Releases  
**v2.0.0.post1** – the latest tag (released 2026‑07‑13)  

| What changed | Commit / PR |
|--------------|-------------|
| Bump version to 2.0.0.post1 | #6007 |
| Prevent browser autofill on provider search input | #6011 |
| Fix legacy session handling (incomplete log) | #6007 (final part) |
| Minor chore: version bump | #6007 |

*Breaking‑change notes:* None explicitly documented; the release is a **patch** fixing edge‑case bugs that were causing crashes in the 2.0 stream. Migration from `v2.0.0` → `v2.0.0.post1` is a **drop‑in update** (no API changes).

---

## 3. Project Progress (Merged / Closed PRs)  
| PR | Summary | Impact |
|----|---------|--------|
| **#5953** – *fix(scroll): preserve session IDs during history migration* | Aligns scroll‑mode tool‑result handling with the unified `ToolResultPruningMiddleware`. | Eliminates session‑ID mismatches that caused 400 errors after context eviction. |
| **#5927** – *add errors='replace' to _run_command for GBK compatibility* | Makes subprocess output safe on Chinese Windows (cp936/GBK). | Prevents UnicodeDecodeError on `nvidia‑smi` and other GBK‑encoded CLI output. |
| **#6065** – *fix: remove dead imports, dead module, and wrong asyncio mark* | Cleans up dead code and marks. | Improves import stability; no functional change. |
| **#6063** – *fix(governance): bridge frontend tool‑guard rules into policy deep scan* | Merges `tool_guard` custom rules into `GovernancePolicy` with hot‑reload. | Reduces false‑positive approval prompts and adds runtime reload capability. |
| **#6058** – *fix(tool_calls): flatten offload hint + temporarily disable broken offload mechanism* | Flattens background tool hints to plain assistant messages, disabling the problematic offload path. | Stops orphan `ToolResultBlock` → 400 BadRequest errors. |
| **#6045** – *fix(console): clear message queue when a session is deleted* | Ensures message‑queue cleanup runs on all session‑delete paths. | Prevents lingering tool‑calls that could trigger 400 errors. |
| **#6044** – *fix(plugins): bridge register_tool to runtime ToolRegistry pipeline* | Registers tools with the ToolRegistry so they are visible to agents at runtime. | Restores functionality for plugins that depend on runtime descriptors. |
| **#6035** – *refactor(tool_calls): unify result pruning with block‑scoped metadata* | Consolidates two separate pruning mechanisms into a single `ToolResultPruningMiddleware`. | Improves consistency of truncation and caching logic. |
| **#6028** – *fix(doctor): use readiness endpoint in doctor* | Switches health‑check from deprecated `/api/agent/health` to `/api/healthz`. | Makes `qwenpaw doctor` report healthy agents correctly. |
| **#6022** – *perf(skills): skip redundant manifest reconciliation* | Checks for existing `skill.json` before full disk scan. | Reduces file‑descriptor exhaustion during startup. |

*Overall:* The merge‑rate is strong (≈ 30 % of the 50 PR updates were **closed** today), indicating active code‑base refinement and a focus on **stability patches**.

---

## 4. Community Hot Topics  

| Issue | Comments | Reaction | Core Concern | Link |
|-------|----------|----------|--------------|------|
| **#5996** – *Bug: 2.0.0 conversation throws `MODEL_EXECUTION_ERROR`* | 10 | 👍 0 | Serialization of `ToolResultBlock` into a `role=tool` message without a preceding `tool_calls` causes a 400 from OpenAI. | <https://github.com/agentscope-ai/QwenPaw/issues/5996> |
| **#5961** – *Bug: v2.0.0 loop‑execution hangs with qwen3.7‑plus* | 7 | 👍 0 | Agent repeatedly writes/erases, never completing simple tasks. | <https://github.com/agentscope-ai/QwenPaw/issues/5961> |
| **#5947** – *V2.0.0 MCP allow/deny settings become ineffective* | 6 | 👍 0 | “Allow” and “Deny” rules lose effect; agents can still call blocked sub‑tools. | <https://github.com/agentscope-ai/QwenPaw/issues/5947> |
| **#6006** – *Missing message‑queue functionality* | 6 | 👍 0 | Core queue feature was removed, breaking background task pipelines. | <https://github.com/agentscope-ai/QwenPaw/issues/6006> |
| **#5872** – *Docker browser_use fails on dbus connection error* | 5 | 👍 0 | Chromium exits immediately inside containers, causing CDP timeouts. | <https://github.com/agentscope-ai/QwenPaw/issues/5872> |
| **#5980** – *Missing SSH offline & profile 404 after upgrade to v2.0* | 5 | 👍 0 | Previously‑available features now return 404. | <https://github.com/agentscope-ai/QwenPaw/issues/5980> |
| **#6034** – *Many unexpected behaviours after upgrading to 2.0* | 4 | 👍 0 | Long‑standing stability complaints; includes “Model ‘unknown’ execution failed” and “off‑load kills”. | <https://github.com/agentscope-ai/QwenPaw/issues/6034> |
| **#5788** – *Skills list pagination (scroll‑to‑load‑more) broken* | 4 | 👍 0 | Only 20 skills shown; infinite scroll not triggered when container not scrollable. | <https://github.com/agentscope-ai/QwenPaw/issues/5788> |

**Analysis:** The most‑commented issues centre on **runtime crashes (400 errors, MODEL_EXECUTION_ERROR), loop‑detection false positives, and permission‑system regressions**. Users are asking for **reliable execution flow** and **consistent permission handling**, indicating that the recent architectural changes (context compression, tool‑call offloading, governance sandbox) are creating subtle coupling bugs.

---

## 5. Bugs & Stability  

| Severity | Symptom | Issue(s) | Fix / PR (if any) |
|----------|---------|----------|-------------------|
| **Critical** | Session crash → 400 BadRequest (`role=tool` without preceding call) | #5996, #5960, #5986 | Fixed by **#6058** (flatten hint) & **#6052** (flatten background hint) |
| **High** | Infinite loop / repeated tool calls causing doom‑loop termination | #5963, #5960, #6041 (open) | Work‑in‑progress: **#6041** (exempt read‑only tools) |
| **High** | Context‑compression splits `tool_call` / `tool_result` across messages → 400 | #5986, #5960 | Same fixes as above; also **#5935** (unified pruning) |
| **Medium** | DBus connection failure in Docker → Chromium exits | #5872 | No fix yet; requires container‑level DBus setup |
| **Medium** | Missing environment variables / config sync in Docker | #6055 | Open; requires backend changes |
| **Medium** | Module import error for `agentscope.tool._builtin._scripts` (Dream job) | #5965, #6024 | Fixed by **#6024** (Dream fix) |
| **Low** | Skills pagination UI bug (only 20 shown) | #5788 | Fix planned; UI logic needs sentinel handling |
| **Low** | Approval‑prompt UI cannot be disabled on headless ARM | #5984 | Open; requires config toggle |

**Ranking by impact:** 1) 400‑error crash loops (issues #5996, #5986), 2) Loop‑detection false positives (#5963), 3) Missing queue & env‑var support (#6006, #6055), 4) Permission‑rule inefficacy (#5947), 5) UI pagination (#5788).

---

## 6. Feature Requests & Roadmap Signals  

| Request | Description | Likelihood of upcoming inclusion |
|---------|-------------|-----------------------------------|
| **SSH Offline support** (Issue #5980) | Ability to run SSH tool without network connectivity. | High – mentioned by multiple users; likely part of “offline‑first” roadmap. |
| **Profile & permission UI improvements** (Issue #5955) | Better visibility of disabled/active skills; whitelist/blacklist UI. | Medium – governance PR #6063 already adds global sandbox switch. |
| **CIDR‑based host whitelist** (Issue #6048) | Allow unauthenticated hosts to be listed by CIDR block. | Medium – community interest growing; may appear in next minor release. |
| **Visual model fallback for text‑only LLMs** (PR #5069) | Optional image/video transcription before main model processing. | Low‑to‑Medium – already merged; will roll out with next agent‑model release. |
| **More granular tool‑timeout control** (Issue #6056) | Respect LLM‑provided timeout instead of immediate kill. | High – maintainers have opened PR #6058 to flatten hints; next step is timeout handling. |
| **Agent‑level “visual‑model” selection** (Community discussion) | UI to toggle per‑agent transcription model. | Medium –aligned with upcoming visual‑model feature. |

---

## 7. User Feedback Summary  

- **Pain points:**  
  - *Instability after upgrade to v2.0*: frequent 400 errors, infinite loops, and “Model ‘unknown’ execution failed” messages.  
  - *Missing core functionalities*: SSH offline, profile 404, message‑queue removal.  
  - *Permission model confusion*: allow/deny settings appear ineffective; approval prompts still fire on headless devices.  
- **Positive signals:**  
  - Strong community interest in **governance** improvements (off‑switch, fine‑grained policies).  
  - Appreciation for **scroll‑mode pruning** fixes that reduce UI lag.  
  - New **visual‑model** capability is viewed as a forward‑looking addition.  
- **Overall satisfaction:** Mixed – **core functionality remains usable**, but **regressions in stability and feature completeness** are causing frustration, especially among power‑users upgrading from v1.x.

---

## 8. Backlog Watch  

| Item | Why it needs attention | Current status |
|------|------------------------|----------------|
| **#5958** – *Can AgentScope permission controls be used in QwenPaw?* | Unanswered question; impacts roadmap for permission‑system integration. | Open, 3 comments, no maintainer response. |
| **#5788** – *Skill list pagination broken* | UI bug affecting discoverability of many agents. | Open, 4 comments; fix pending UI refactor. |
| **#6034** – *Numerous unexpected behaviours post‑2.0* | Broad symptom that may hide deeper architectural issues (context, offload, model errors). | Open, 4 comments; maintainers asked to prioritize regression hunt. |
| **#6008** – *TUI crashes on mouse click (AttributeError NoneType)* | Crash in desktop UI; affects usability on Linux. | Open, 2 comments; needs UI‑event handling fix. |
| **#6056** – *Background offload kills subprocess immediately* | LLM‑provided timeout ignored; kills long‑running commands. | Open, 2 comments; PR #6058 partially addresses but full timeout support required. |
| **Open PR #6041** – *Exempt read‑only tools from doom‑loop detection* | Intended fix for false

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑07‑14**  

---

### 1. Today's Overview  
In the last 24 hours the repository logged **50 issue updates** (34 still open, 16 closed) and **50 PR updates** (49 open, 1 merged/closed). No new version was published, and the overall activity level remains **high** – the project is in a sustained phase of feature‑freeze work, maintenance tracking, and targeted bug‑fixes. Maintainers are actively shepherding multiple RFCs toward acceptance while simultaneously chipping away at the v0.8.3 milestone and the upcoming v0.8.4 maintenance train.

---

### 2. Releases  
**No new releases** were pushed today. The latest tagged version remains **0.8.2** (beta‑1 → beta‑2 progression) and the upcoming **v0.8.3** milestone is still in release‑candidate validation.

---

### 3. Project Progress  
- **Merged/Closed PRs:** Only **1** PR was merged/closed in the last day (the details are not listed in the snapshot, but historically it represents a small stabilisation fix).  
- **Merged work** includes continued cleanup of the ADR baseline (#8691), finalisation of the v0.8.3 index (#7320), and incremental updates to documentation and CI pipelines.  
- **Open PRs** show heavy focus on **SOP (standard‑operating‑procedure) tooling**, **memory‑backend parity**, **channel‑plugin execution**, and **local‑first model support**. Most of these PRs are awaiting maintainer reviews before they can be merged into `master`.

---

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions | Why it matters |
|------|------|----------------------|----------------|
| **#6808** – RFC: Work Lanes, Board Automation, and Label Cleanup | **RFC** (14 comments) | Highlights a community‑wide desire to streamline governance and reduce manual tracking overhead. |
| **#6165** – RFC: Prefer a lighter ZeroClaw core through external integrations | **RFC** (9 comments) | Signals a strategic shift toward modularity; many users want the core to stay lean while external plugins handle heavy integrations. |
| **#5287** – Feature: Local‑First Mode for Small Models | **Enhancement** (5 comments, 2👍) | Directly addresses user‑reported “prompt‑bloat” and leak‑age concerns; likely to become a default small‑model profile. |
| **#8443** – feat(matrix): add single‑message progress drafts | **Enhancement** (open, XL) | Addresses Matrix‑specific UX gaps for streaming progress; high‑impact for integrators using Matrix bots. |
| **#9037** – fix(runtime): strip trailing provider terminal markers | **Bug‑fix** (open) | Prevents leaked “<eom>” markers from entering persisted history; improves output cleanliness. |

*Underlying needs*: The community is gravitating toward **governance clarity**, **modular architecture**, and **more predictable runtime behaviour** (especially around memory and channel interactions). The volume of RFC‑style activity suggests an upcoming **architecture‑focused release cycle** (v0.8.x → v0.9).

---

### 5. Bugs & Stability  

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| **S1 – Workflow blocked** | **#9035** – Docker Compose gateway remains loopback‑bound behind a published port | Open | <https://github.com/zeroclaw-labs/zeroclaw/issues/9035> |
| **S2 – Degraded behaviour** | **#9046** – `models_cache.json` is read but never written; “run zeroclaw models refresh” hint is ineffective | Open | <https://github.com/zeroclaw-labs/zeroclaw/issues/9046> |
| **S2 – Degraded behaviour** | **#9028** – Ctrl+C on Windows forces termination of the agent (exit code 1073741510) | Open | <https://github.com/zeroclaw-labs/zeroclaw/issues/9028> |
| **S3 – Minor issue** | **#6548** – Channel runtime replies bypass Fluent localisation | Open | <https://github.com/zeroclaw-labs/zeroclaw/issues/6548> |
| **High – Critical path** | **#9006** (inferred from PR #9037) – Provider terminal markers leak into assistant text | Fixed in PR #9037 (merged) | <https://github.com/zeroclaw-labs/zeroclaw/pull/9037> |

> **Takeaway:** The most severe blockers today are the Docker networking issue and the Windows‑Ctrl‑C crash. Both have corresponding fix‑PRs under review, indicating that maintainers are actively patching stability regressions.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Indicator of Imminent Inclusion |
|---------|---------------------------------|
| **Local‑First Mode for Small Models** (#5287) – 2👍, 5 comments | Likely to be shipped as part of the **v0.8.3** feature freeze; already has a dedicated RFC‑style discussion. |
| **Persistently‑cured memory planes** (#8891) – Tracker for full‑parity memory subsystem | Part of the **v0.8.4 maintenance train** (see #8357); expected to land after v0.8.3 validation. |
| **SOP milestone: daemon‑owned control plane to 5/5** (#8288) – Tracker with 13 capabilities | Progress tracked; several PRs (e.g., #9027, #8979) are actively landing – suggests SOP will hit “5/5” shortly. |
| **Lighter ZeroClaw core via external integrations** (#6165) – RFC accepted | Signifies a strategic direction; future releases will likely **move more integrations out of core**. |
| **RFC: Separate conversation history from long‑term memory** (#9048) – New RFC, 1 comment | Early stage but already entered the tracker; indicates upcoming architectural clarification. |

*Prediction*: The next public version will likely be **v0.8.3** (currently in release‑candidate testing) with incremental rollout of the above features; a **v0.8.4** maintenance train is already scheduled for July 31 2026.

---

### 7. User Feedback Summary  

- **Positive sentiment**: Users appreciate ongoing **documentation**, **CI** improvements, and the **local‑first mode** proposal that promises leaner prompts and no leak‑age.  
- **Pain points**:  
  - **Docker networking** (issue #9035) leaves deployments unusable for some.  
  - **Windows Ctrl‑C termination** (#9028) disrupts interactive sessions.  
  - **Model cache file** missing writes (#9046) creates confusing CLI hints.  
  - **Channel localisation gaps** (#6548) cause English strings to appear even when a non‑English locale is set.  
- **Feature dissatisfaction**: Some community members feel the **core is becoming bloated** and push for a **leaner architecture** (RFC #6165).  

Overall, satisfaction appears **moderate to high** for ongoing development, but **stability regressions** on Windows and Docker are the primary sources of frustration.

---

### 8. Backlog Watch  

| Item | Age / Status | Why it needs attention |
|------|--------------|------------------------|
| **#6808** – RFC: Work Lanes, Board Automation | Open, 14 comments, accepted but rollout still in progress | Governance changes affect all downstream workflows; needs final rollout coordination. |
| **#8997** – Warn about non‑existent peer‑group channel refs | Open, 1 comment | Prevents silent mis‑configurations; low‑effort but improves UX. |
| **#8998** – GUI for channel pairing codes | Open, 1 comment | Improves onboarding for Telegram/WeChat/Line pairing; currently only a logs‑only view. |
| **#9048** – RFC: Separate conversation history from long‑term memory | New (created today) | Architectural clarification that may impact multiple subsystems; needs early review. |
| **Open PR #8443** – Matrix single‑message progress drafts | Open, XL size, awaiting maintainer sign‑off | Large‑scale UX change; important for Matrix integrators. |
| **Open PR #9037** – Strip terminal markers from streamed text | Open, awaiting merge | Directly fixes a visible bug; simple but blocks further progress on related features. |
| **#8891** – Persistent memory parity tracker | Open, 2 comments | Critical for long‑term memory stability; currently in “tracker” state with limited progress. |

*Action items*: Prioritise **review and merge** of the high‑impact PRs (#8443, #9037) and **triage** the newest RFC (#9048) to keep the architecture track moving. Also monitor the **Docker networking** issue (#9035) as it blocks a production deployment path.

---

**Bottom line:** ZeroClaw is in a busy but controlled phase of development — high issue/PR throughput, no releases, and a clear migration toward a leaner core and more deterministic memory handling. Stabilisation patches are landing, yet a few critical bugs (Docker, Windows termination) still require prompt attention. The community’s focus on governance, modularity, and user‑experience refinements points toward an upcoming **v0.8.3** release that will likely cement several of the roadmap items highlighted above.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*