# OpenClaw Ecosystem Digest 2026-09-23

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-23 02:28 UTC

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

### OpenClaw Project Digest (2026-09-23)

#### 1. Today's Overview
OpenClaw exhibits high activity with 500 issues and 500 PRs updated in the last 24 hours. Currently, 471 issues remain open/active (29 closed), while PRs show 354 open and 146 merged/closed. No new releases were published today. The project maintains strong development velocity but faces persistent stability challenges, particularly around memory leaks, message loss, and upgrade-related regressions, as reflected in the top-reported issues.

#### 2. Releases
No new releases were published today.

#### 3. Project Progress
- **146 PRs were merged or closed** in the last 24 hours, indicating active bug resolution and feature integration.
- While the top-commented PRs (all currently open) focus on documentation, CI optimizations, and niche fixes (e.g., Slack auth retry handling, SQLite schema inspection), the merged PR volume suggests progress on lower-visibility but critical maintenance work.
- Notable merged efforts likely include incremental stability improvements, though specific details are not visible in the top-discussion PRs.

#### 4. Community Hot Topics
The most discussed issues highlight core stability and reliability concerns:
- **[#91588](https://github.com/openclaw/openclaw/issues/91588)** (36 comments): Critical gateway memory leak (RSS 350MB → 15.5GB) causing OOM crashes and restart loops. *Underlying need:* Urgent memory management fix in gateway process.
- **[#44925](https://github.com/openclaw/openclaw/issues/44925)** (29 comments): Subagent completion silently lost without retry/notification. *Underlying need:* Robust task orchestration with guaranteed result delivery.
- **[#126360](https://github.com/openclaw/openclaw/issues/126360)** (18 comments): AgentSelectionRequiredError flooding logs under explicit multi-agent ownership. *Underlying need:* Improved agent ID resolution and logging noise reduction.
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** (16 comments): Unreaped hook/tool child processes causing zombie accumulation. *Underlying need:* Proper process reaping in tool execution pipelines.
- **[#148707](https://github.com/openclaw/openclaw/issues/148707)** (15 comments): Reply lost due to tool authority snapshot displacement. *Underlying need:* Atomic session state handling during concurrent turns.

#### 5. Bugs & Stability
Ranked by severity (P0/P1 impact, issue rating, and symptoms):
- **Critical (P0, crash-loop/UX-blocker):**  
  - [#91588](https://github.com/openclaw/openclaw/issues/91588): Memory leak → OOM (silver shellfish). *No fix PR visible in top discussions.*  
  - [#155764](https://github.com/openclaw/openclaw/issues/155764): Update blocked by retained plugin conflict (silver shellfish). *No fix PR visible.*  
  - [#154381](https://github.com/openclaw/openclaw/issues/154381): Updater timeout fix unreachable (platinum hermit). *No fix PR visible.*  
  - [#136203](https://github.com/openclaw/openclaw/issues/136203): Windows upgrade leaves Doctor blocked (diamond lobster). *No fix PR visible.*  
- **High (P1, message-loss/session-state):**  
  - [#44925](https://github.com/openclaw/openclaw/issues/44925): Subagent completion lost (diamond lobster).  
  - [#126360](https://github.com/openclaw/openclaw/issues/126360): Log flooding (silver shellfish).  
  - [#97616](https://github.com/openclaw/openclaw/issues/97616): Zombie processes (silver shellfish).  
  - [#148707](https://github.com/openclaw/openclaw/issues/148707): Reply loss (silver shellfish).  
  - [#136311](https://github.com/openclaw/openclaw/issues/136311): Memory reindex lock (platinum hermit).  
*Note: Despite 146 merged PRs, top critical bugs lack visible fix PRs in the provided data, indicating potential gaps in immediate resolution.*

#### 6. Feature Requests & Roadmap Signals
User-driven enhancements signaling future direction:
- **[#79902](https://github.com/openclaw/openclaw/issues/79902)**: SQLite transcript/session seams for companion tools (P3, silver shellfish, 14 comments). *Enables external tooling without scraping internals.*  
- **[#53763](https://github.com/openclaw/openclaw/issues/53763)**: Built-in headless browser for reliable web access (P3, off-meta tidepool, 12 comments). *Addresses fragile external Chrome dependency.*  
- **[#73537](https://github.com/openclaw/openclaw/issues/73537)**: Production-readiness stability labels for releases (P3, off-meta tidepool, 8 comments). *Improves release confidence for enterprise users.*  
- **[#120598](https://github.com/openclaw/openclaw/pull/120598)**: Private model-run prompt files (P2, platinum hermit, PR open). *Enhances security for local model evaluation.*  
*Predicted near-term focus:* SQLite transcript seams (#79902) and headless browser (#53763) align with recurring themes of reliability and reduced external dependencies.

#### 7. User Feedback Summary
Users report consistent pain points undermining trust in OpenClaw for production use:
- **Memory instability:** Leaks (#91588) and zombie processes (#97616) cause frequent OOM crashes and restarts, disrupting long-running agent workflows.
- **Silent failures:** Message loss without retry/notification (#44925, #112259, #118185) breaks trust in task completion, especially in automated workflows.
- **Upgrade fragility:** Windows/Linux update paths leave systems in broken states (#136203, #155764), requiring manual intervention and eroding confidence in zero-downtime upgrades.
- **Resource exhaustion:** CPU spikes (#134993, #134925) and log flooding (#126360) degrade observability and increase operational overhead.
- **Channel-specific bugs:** Telegram, iMessage, and Feishu integrations lose messages or duplicate replies (#49381, #125764, #135704), hurting real-world usability.
*Overall sentiment:* Users value OpenClaw's capabilities but demand foundational stability before adopting it for critical workflows.

#### 8. Backlog Watch
Long-standing, high-impact issues needing maintainer attention:
- **[#91588](https://github.com/openclaw/openclaw/issues/91588)** (Memory leak): Open since 2026-06-09 (106 days), P0, crash-loop, 36 comments. *Critical path blocker for production use.*  
- **[#44925](https://github.com/openclaw/openclaw/issues/44925)** (Subagent loss): Open since 2026-03-13 (194 days), P1, message-loss, 29 comments. *Core reliability gap in agent orchestration.*  
- **[#10687](https://github.com/openclaw/openclaw/issues/10687)** (Dynamic model discovery): Open since 2026-02-06 (230 days), P3, auth-provider, 10 comments. *Key enhancement for staying current with model providers.*  
- **[#79902](https://github.com/openclaw/openclaw/issues/79902)** (SQLite seams): Open since 2026-05-09 (167 days), P3, feature request, 14 comments. *Enables ecosystem tooling without invasive changes.*  
*These issues represent persistent user frustrations and strategic opportunities; their resolution would significantly improve perceived project maturity.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Ecosystem

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem in 2026 demonstrates significant fragmentation with multiple competing projects addressing different aspects of AI agent infrastructure. Core projects like OpenClaw, Hermes Agent, and LobsterAI focus on comprehensive AI agent platforms, while specialized tools like NanoBot, PicoClaw, and ZeroClaw target specific integration challenges (WhatsApp, QQ, voice processing). The ecosystem shows a maturation trend toward platform-specific optimizations (multi-modal support, cross-channel compatibility) and stability improvements after years of development. Notably, most projects are still grappling with foundational reliability issues like memory leaks, configuration management, and cross-platform consistency, indicating the field is still evolving toward production-ready solutions.

## 2. Activity Comparison

| Project | Open Issues | PRs Updated | Releases Today | Health Score* |
|---------|-------------|-------------|----------------|---------------|
| OpenClaw | 471 | 500 | 0 | Low (Critical bugs unresolved) |
| Hermes Agent | 50 | 50 | 0 | Medium (Active fixes, P1 crashes) |
| LobsterAI | 9 | 17 | 1 | Medium-High (Recent fixes) |
| NanoBot | 16 | 31 | 0 | Medium-High (Bug fixes dominant) |
| ZeroClaw | 19 | 50 | 0 | Medium (WhatsApp focus) |
| NanoClaw | 0 | 0 | 0 | High (No activity) |
| NullClaw | 0 | 0 | 0 | N/A (Dormant) |
| PicoClaw | 0 | 0 | 0 | High (Stable maintenance) |
| IronClaw | 0 | 3 | 0 | Medium-High (Locale/IM fixes) |
| CoPaw | 39 | 48 | 0 | Low (Critical timeouts) |
| Moltis | 0 | 1 | 0 | Medium (Dependency updates only) |
| ZeptoClaw | 0 | 3 | 0 | High (Routine maintenance) |
| TinyClaw | 0 | 0 | 0 | N/A (Dormant) |
| *(Derived from bug count, issue age, and PR/merge velocity)* |

## 3. OpenClaw's Position

**Advantages vs Peers:**
- Largest community engagement (500+ issues/PRs daily) indicating strong user base
- Comprehensive feature set covering core agent functionality
- Aggressive bug-fix velocity (146 merged PRs daily)

**Technical Approach Differences:**
- Monolithic gateway architecture vs. modular approach in Hermes Agent
- Proprietary configuration patterns vs. standardized approaches in ZeroClaw
- Direct memory management focus vs. higher-level abstractions in NanoBot

**Community Size Comparison:**
- OpenClaw's 500 daily active contributors far exceed peers (Hermes: 50, CoPaw: 39)
- Highest issue volume suggests broader enterprise adoption
- Critical stability issues (memory leaks, message loss) indicate scale challenges

## 4. Shared Technical Focus Areas

**Cross-Project Requirements Emerging:**

| Need | Projects | Specific Focus |
|------|----------|----------------|
| **Multi-Channel Stability** | OpenClaw, ZeroClaw, LobsterAI, CoPaw | WhatsApp, WeChat, Telegram reliability |
| **Memory Management** | OpenClaw, Hermes Agent, CoPaw, NanoBot | Context compaction, leaks, zombie processes |
| **Configuration Persistence** | OpenClaw, LobsterAI, ZeroClaw | Workspace/file persistence across restarts |
| **Voice Processing** | ZeroClaw, OpenClaw, CoPaw | TTS, voice note handling, suppression |
| **Provider Integration** | Hermes Agent, LobsterAI, CoPaw | Anthropic, OpenAI, local model compatibility |
| **UI/Experience Polish** | IronClaw, LobsterAI, Hermes Agent | IME support, layout improvements, localization |

## 5. Differentiation Analysis

**Feature Focus Differences:**
- **OpenClaw/Hermes Agent**: Full-stack AI platforms with gateway, UI, and model management
- **ZeroClaw/ZeroClaw**: Channel-specific specialists (WhatsApp, voice processing)
- **NanoBot/Moltis**: Infrastructure/components (memory management, utilities)
- **PicoClaw/IronClaw**: Tool-focused (QQ extensions, IME support)

**Target Users:**
- **Enterprise**: OpenClaw, LobsterAI (production stability, scale)
- **Developers/Integrators**: ZeroClaw, Hermes Agent (API flexibility)
- **End Users**: IronClaw, ZeptoClaw (UI/UX improvements)

**Technical Architecture:**
- **Monolithic**: OpenClaw, Hermes Agent (single binary, integrated)
- **Plugin-based**: ZeroClaw, NanoClaw (extensible through plugins)
- **Component Library**: NanoBot, Moltis (focused utilities)

## 6. Community Momentum & Maturity

**Activity Tiers:**
- **Rapid Iteration**: OpenClaw (500+ daily changes), CoPaw (48 PRs), ZeroClaw (50 PRs)
- **Stabilizing**: Hermes Agent (patch-oriented), LobsterAI (bug-fix focus)
- **Maintenance Mode**: PicoClaw, ZeptoClaw (routine updates only)
- **Dormant**: NullClaw, TinyClaw (no activity)

**Development Patterns:**
- **Crisis Response**: OpenClaw and Hermes Agent focus on critical bug fixes (SIGTRAP crashes, memory leaks)
- **Feature Polish**: IronClaw (localization), LobsterAI (UI enhancements)
- **Infrastructure Hardening**: NanoBot (security fixes), ZeroClaw (provider stability)

## 7. Trend Signals

**Industry-Wide Value Drivers:**
1. **Production Readiness**: Post-2026, projects are shifting from prototype to enterprise deployment focus
2. **Cross-Platform Consistency**: Universal requirement for consistent behavior across macOS/Linux/Windows
3. **Real-Time Reliability**: Decreased tolerance for silent failures (message loss, OOM crashes)
4. **Developer Experience**: Improved configuration persistence, better error reporting, UI/UX refinement

**Technical Trends:**
- **Memory-Centric Solutions**: Context compaction (ZeroClaw), leak fixes (OpenClaw), bounded processing
- **Integration-First Architecture**: WhatsApp Web focus (ZeroClaw), provider compatibility emphasis
- **User-Centric Improvements**: Localization (IronClaw), IME support (Hermes Agent), UI polish
- **Security Hardening**: Dependency updates (Moltis), BOM decoding fixes (NanoBot), registry provenance

**Implications for AI Agent Developers:**
- Prioritize memory management and state consistency over feature velocity
- Invest in cross-platform testing (IMEs, keyboard layouts, voice processing)
- Focus on configuration persistence and upgrade reliability
- Plan for multi-modal support (text, voice, image) as baseline expectations
- Consider channel-specific optimizations for mass adoption

The ecosystem is converging toward production-grade reliability while expanding feature scope, suggesting a maturation period where foundational stability will enable broader adoption and deeper feature development.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-09-23

## 1. Today's Overview
On September 23, 2026, NanoBot shows high development activity, particularly driven by a wave of critical bug fixes, security enhancements, and refactoring efforts. While there are no new releases today, the repository has processed 31 pull requests in the last 24 hours, with 15 successfully merged or closed and 16 remaining open. The project is actively addressing high-priority user-reported issues, particularly around context compaction deadlocks and Telegram notification spam, demonstrating strong maintenance responsiveness.

## 2. Releases
*No new releases have been published today.*

## 3. Project Progress
The development team has merged and closed several key pull requests today, advancing multiple features and stabilizing core mechanics:
*   **Core Refactoring:** Merged PR #5872 (and its sibling #5873) to deduplicate the atomic JSONL write helper into a unified `atomic_write_lines` utility in `nanobot/utils/helpers.py`, improving code maintainability and file write safety.
*   **Telegram Enhancements:** Merged PR #5614, which introduces streaming rich messages for Telegram, improving real-time message rendering in private chats.
*   **Heartbeat & Retry Fixes:** Closed critical P1 bugs including PR #4959 (adding a critical one-second buffer to retry delays to avoid rate-limit storms), PR #4896 (rewriting the heartbeat prompt to execute tasks rather than just reporting them), and PR #4915 (making heartbeat response evaluation more configurable).
*   **WebUI & Controls:** Closed PR #5831 to streamline contextual message controls in the WebUI, making block-hover actions cleaner.
*   **Critical File & System Fixes:** Closed PR #5867 (fixing BOM decoding in file reads), PR #5868 (fixing quoted Windows executable invocation in PowerShell), and PR #5859 (preventing crashes on boolean JSON subschemas during tool validation).

## 4. Community Hot Topics
The community focus is heavily directed towards context management stability and multi-modal expansion:
*   **Auto-compaction Deadlock (#5849):** A critical architectural issue where the summarization model receives the entire history without token budgeting, causing system deadlock. The issue has 2 comments and is highly watched.
*   **Telegram Compaction Notice Spam (#5870):** Users are highly active on this P1 issue, reporting that the "Context compacted." notice is repeated multiple times in personal chats, cluttering the user experience.
*   **Video Input Support (#5869):** A popular feature request asking for direct video file ingestion to feed state-of-the-art omni models (like Qwen3.8 or Mino-v2.6) instead of relying purely on disk paths.

## 5. Bugs & Stability
Today's bugs are ranked by severity, with key fixes already proposed or merged:
*   **🔴 Critical (P1) — Auto-compaction Deadlock (#5849):** The automatic context-compaction path has no token-budget guard, making recovery impossible once history exceeds the input limit. *Fix PR #5857 (`fix(memory): bound automatic transcript summarization`) is currently open and awaiting review.*
*   **🔴 Critical (P1) — Telegram Context Compaction Spam (#5870):** Gateway logs show multiple automatic compactions triggering duplicate "Context compacted." notices in the same chat.
*   **🟠 High (P1) — Tokenizer Warmup (#5861):** Latency issues or failures can occur if the fallback tokenizer isn't warmed up. *Fix PR #5861 is open, aiming to warm the tokenizer in a background daemon thread at gateway startup.*
*   **🟠 High (P1) — CLI Apps Security Drift (#5866):** Registry metadata is unsigned, allowing potential code execution compromises. *Fix PR #5866 is open, aiming to record install provenance and fail closed on registry drift.*
*   **🟡 Medium (P2) — BOM Decoding (#5867):** Fixed today. BOM-marked UTF-16/32 files were returning garbled, NUL-filled text. 
*   **🟡 Medium (P2) — Windows Exec Quoting (#5868):** Fixed today. Quoted Windows executable paths failed to invoke correctly without arguments in PowerShell.

## 6. Feature Requests & Roadmap Signals
*   **Direct Video Input (#5869):** A strong signal that users want to transition from simple text path handoffs to utilizing the native video input capabilities of multi-modal/omni models. This is likely a high-priority candidate for future native tool integration.
*   **Linear Native Agent UX (#5871):** An open PR improving the Linear integration with better OAuth handling, workspace health checks, and direct tool setup paths, indicating closer native project management tool integrations are on the roadmap.
*   **WebUI Preset Persistence (#5865):** An open PR aiming to keep the selected model preset as transient state during the WebUI provisioning flow, showing a drive to polish the web chat onboarding funnel.

## 7. User Feedback Summary
*   **Frustration with Context Management:** Users have highlighted that as sessions grow longer, the automatic compaction feature is prone to deadlocking (#5849) and spamming duplicate notifications

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-23

---

## 1. Today's Overview

Hermes Agent shows very high activity with 50 issues and 50 PRs updated in the last 24 hours, but no new releases were published. The bulk of today's work is concentrated on bug fixes, config/loader consistency, and desktop stability. A P1 desktop crash (SIGTRAP in Electron) and multiple streaming/rendering duplicates dominate community attention. The maintainer team is actively merging PRs — especially around gateway config, env-var expansion, and tool-whitelist hardening — suggesting a patch-oriented sprint rather than a feature-release cycle.

---

## 2. Releases

**None.** No new version was published today. Users on v0.21.3 (latest) are exposed to the bugs listed below without a remediated build.

---

## 3. Project Progress (Merged / Closed PRs & Features Advanced)

Several PRs landed today addressing long-standing gaps:

- **#119747** — `feat(btw)`: side questions can now read files/web/past sessions; tool whitelist survives worker hop. Salvages #98485 and closes P0 safety gap #98479. ([Link](https://github.com/NousResearch/hermes-agent/pull/119747))
- **#119750 / #119755 / #119737** — Three complementary PRs fixing `${VAR}` env-var expansion in gateway platform config, closing #119733. ([Link](https://github.com/NousResearch/hermes-agent/pull/119750))
- **#119759** — Wraps `/v1/responses` `output_text` in `content_part.added/done`, fixing OpenAI SDK streaming compatibility. ([Link](https://github.com/NousResearch/hermes-agent/pull/119759))
- **#119754** — Desktop install cancellation now kills the full process tree, not just the shell. ([Link](https://github.com/NousResearch/hermes-agent/pull/119754))
- **#119749** — Desktop Maintenance panel now tails repeat runs of the same op. ([Link](https://github.com/NousResearch/hermes-agent/pull/119749))
- **#119752** — Plugins: recognize resource-only MCP activation, fixing #119751. ([Link](https://github.com/NousResearch/hermes-agent/pull/119752))
- **#119740** — Retires archived Bot Chat titles regardless of hidden flag. ([Link](https://github.com/NousResearch/hermes-agent/pull/119740))
- **#119742** — Cron: stops unreachable-model re-fire for cron-expression jobs. ([Link](https://github.com/NousResearch/hermes-agent/pull/119742))
- **#119736** — Slack: ignore configured bot senders by ID. ([Link](https://github.com/NousResearch/hermes-agent/pull/119736))
- **#119731** — Catalog: adds `grok-acp` model provider (community contribution). ([Link](https://github.com/NousResearch/hermes-agent/pull/119731))

---

## 4. Community Hot Topics

| Issue | Comments | Topic |
|-------|----------|-------|
| [#100573](https://github.com/NousResearch/hermes-agent/issues/100573) | 13 | Desktop P1 SIGTRAP crash (Electron 40.10.2, Linux/Wayland) |
| [#118670](https://github.com/NousResearch/hermes-agent/issues/118670) | 10 | Long streaming turn rendered twice in Desktop; DB has one copy |
| [#119661](https://github.com/NousResearch/hermes-agent/issues/119661) | 7 | Todoist MCP OAuth fails — `code_challenge required` |

**Analysis:** The SIGTRAP crash (#100573) is the top concern — a libc++ fatal from out-of-range `string_view::substr` in Electron, reproducible on Arch/Wayland. The streaming duplication (#118670, #38319) points to a race between hydration and live stream that spans multiple related bugs. The Todoist OAuth failure (#119661) reflects MCP connector pressure around PKCE compliance for public clients.

---

## 5. Bugs & Stability (Ranked by Severity)

**P1:**
- [#100573](https://github.com/NousResearch/hermes-agent/issues/100573) — Desktop recurrent SIGTRAP crash, Electron main process, Linux/Wayland. **No fix PR yet.**

**P2 (multiple fix PRs in flight or open):**
- [#118670](https://github.com/NousResearch/hermes-agent/issues/118670) — Streaming duplication (race between hydrate + live stream)
- [#98479](https://github.com/NousResearch/hermes-agent/issues/98479) — Tool whitelist authorization lost across worker dispatch (**PR #119747 fixes**)
- [#118826](https://github.com/NousResearch/hermes-agent/issues/118826) — `message_agent` turn lock pinned indefinitely by unbounded child
- [#118825](https://github.com/NousResearch/hermes-agent/issues/118825) — `delegate_task` silently drops undeclared per-task fields
- [#118871](https://github.com/NousResearch/hermes-agent/issues/118871) — `reasoning_effort` silently dropped for bare named providers
- [#119219](https://github.com/NousResearch/hermes-agent/issues/119219) — PeriodicScheduler accepts zero/negative intervals
- [#119643](https://github.com/NousResearch/hermes-agent/issues/119643) — Desktop chat freezes minutes on busy host; replies dropped

**P3 / Other:**
- [#94916](https://github.com/NousResearch/hermes-agent/issues/94916) — Kanban dry-run mutates state
- [#117734](https://github.com/NousResearch/hermes-agent/issues/117734) — Gateway kanban caps cached at boot, live changes ignored
- [#119733](https://github.com/NousResearch/hermes-agent/issues/119733) — Env var substitution not expanded for gateway platform config (**PRs #119750/#119755/#119737 fix**)
- [#97389](https://github.com/NousResearch/hermes-agent/issues/97389) — Windows Computer Use registers per-boot task with no opt-out

---

## 6. Feature Requests & Roadmap Signals

- **#119731** — `grok-acp` provider added to catalog (community); signals demand for non-API-key model access.
- **#7327** — Intelligent local model detection for memory system (open since April); long-standing user need.
- **#37661** — Mem0 temporal hygiene plugin with deduplication; community-maintained extension.
- **#119736** — Slack bot sender filtering by ID; policy-gap fix, likely to ship.

**Prediction:** The `grok-acp` catalog entry and Slack bot filtering are small, self-contained, and likely to ship in the next patch. Local model detection (#7327) and Mem0 temporal hygiene (#37661) are community-driven and less likely to be prioritized by core maintainers soon.

---

## 7. User Feedback Summary

**Pain points surfacing repeatedly:**

1. **Desktop instability** — SIGTRAP crashes, UI freezes, duplicate rendering, split-pane wipe (#100573, #119643, #118670, #100675).
2. **Config/env inconsistency** — `${VAR}` expansion works in CLI but not gateway (#119733, #117734).
3. **Silent failures** — `delegate_task` drops fields (#118825), `reasoning_effort` dropped (#118871, #119681), `custom_instructions` dropped in mem0.json (#114201).
4. **Streaming integrity** — Duplicate messages, dropped terminal chunks (#118670, #119663, #38319).
5. **OAuth/MCP connector friction** — Todoist PKCE, Telegram lazy-install hard-fail (#119661, #119704).

---

## 8. Backlog Watch

Long-unanswered items needing maintainer attention:

| Issue | Age | Why it matters |
|-------|-----|----------------|
| [#100573](https://github.com/NousResearch/hermes-agent/issues/100573) | 22 days | P1 crash, no fix PR |
| [#38319](https://github.com/NousResearch/hermes-agent/issues/38319) | 113 days | Streaming race, intermittent, 5 comments |
| [#54826](https://github.com/NousResearch/hermes-agent/issues/54826) | 88 days | Unbounded Ollama read, potential DoS |
| [#7327](https://github.com/NousResearch/hermes-agent/issues/7327) | 176 days | Local model detection feature request |
| [#98479](https://github.com/NousResearch/hermes-agent/issues/98479) | 24 days | P0 tool whitelist — **PR #119747 now addresses** |
| [#119704](https://github.com/NousResearch/hermes-agent/issues/119704) | 0 days | Telegram lazy install hard-fail on mirrored indexes |
| [#119733](https://github.com/NousResearch/hermes-agent/issues/119733) | 0 days | Env var substitution gap — **3 PRs in flight** |

**Recommendation:** The P1 SIGTRAP crash (#100573) and the streaming race (#38319/#118670) are the two highest-risk backlog items. The env-var expansion trio (#119750/#119755/#119737) should be reviewed for merge quickly — it unblocks multiple gateway integrations.

---

*Generated from GitHub data updated 2026-09-23. All links point to `github.com/NousResearch/hermes-agent`.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑09‑23**

---

### 1. Today’s Overview  
The repository shows modest but focused activity: two issues were closed (both marked *stale* and *bug*), while four pull requests were updated—one remains open and three have been merged/closed. No new releases were published. The recent work centers on fixing a concurrency bug in the sensitive‑data cache and tightening configuration handling, indicating that stability and correctness are the current priorities.

---

### 2. Releases  
**None** – there are no new version tags or release notes for this period.

---

### 3. Project Progress  
- **Closed PR #3375** – “fix(config): guard lazy sensitive‑data cache against concurrent init.”  
  *Implemented a `sync.Once`‑protected initialization for `Config.sensitiveCache`, eliminating the race that could create multiple cache instances.*  
- **Closed PR #3372** – “fix(config): make the reaction tool configurable.”  
  *Added a dedicated branch for the `reaction` tool in `ToolsConfig.IsToolEnabled`, preventing it from defaulting to “enabled” when no explicit config exists.*  
- **Closed PR #1349** – “feat(qq): support parsing and replying to more attachment types.”  
  *Extended QQ Channel message handling to parse emojis, and to accept voice, image, video, and file attachments, with reply‑back support.*  
- **Open PR #3370** – “feat(tools): add Keenable web search provider.”  
  *Introduces Keenable.ai as a no‑API‑key web‑search tool; currently awaiting final review/merge.*  

Overall, the team is consolidating core safety (concurrency guard) and expanding tooling capabilities.

---

### 4. Community Hot Topics  

| Item | Type | Activity (comments/reactions) | Link |
|------|------|------------------------------|------|
| **Issue #3374** | Bug – data race in `Config.initSensitiveCache` | 2 comments, 0 👍 | <https://github.com/sipeed/picoclaw/issues/3374> |
| **Issue #3373** | Bug – silent loss of `api_key` entries on config round‑trip | 2 comments, 0 👍 | <https://github.com/sipeed/picoclaw/issues/3373> |
| **PR #3375** | Fix – guard lazy sensitive‑data cache | 0 comments, 0 👍 | <https://github.com/sipeed/picoclaw/pull/3375> |
| **PR #3370** | Feature – add Keenable web search provider (open) | 0 comments, 0 👍 | <https://github.com/sipeed/picoclaw/pull/3370> |

*Analysis*: The two recent issues are high‑visibility bugs that directly affect runtime stability (panic) and data integrity (silent loss). Their rapid closure via PR #3375 shows that the maintainer is actively addressing concurrency concerns. The open PR #3370 signals ongoing community interest in extending the toolset with a free‑to‑use search provider.

---

### 5. Bugs & Stability  

| Severity | Issue | Core Problem | Fix PR (if any) | Link |
|----------|-------|--------------|----------------|------|
| **High** | #3374 | Race condition in `Config.initSensitiveCache` → `sync.Once` bypassed, leading to a **nil `*strings.Replacer`** and a panic in `FilterSensitiveData`. | **#3375** (merged) – adds proper `sync.Once` guarding of cache creation. | <https://github.com/sipeed/picoclaw/issues/3374> |
| **Medium** | #3373 | `SaveConfig` silently overwrites all `api_key` entries after the first, leaving a dangling `fallbacks` reference that points to a non‑existent model name → silent data loss. | No dedicated fix yet; the underlying config handling is being revisited in PR #3375 and #3372. | <https://github.com/sipeed/picoclaw/issues/3373> |

The high‑severity bug has already been resolved; the medium‑severity issue remains under discussion.

---

### 6. Feature Requests & Roadmap Signals  

- **Keenable web search (PR #3370)** – A user‑requested free‑to‑use search provider. Its inclusion suggests the roadmap is moving toward richer external tooling without requiring API keys.  
- **QQ Channel attachment support (PR #1349)** – Expands message‑type handling, indicating demand for broader platform integration (voice, video, files).  
- **Reaction tool configurability (PR #3372)** – Shows a need for more granular control over which tools are enabled, hinting at a broader effort to make the agent‑tool registry more flexible.

These PRs are likely candidates for the next minor release, as they add concrete functionality without breaking existing behavior.

---

### 7. User Feedback Summary  

- **Pain Points**:  
  1. **Concurrency‑induced panic** when multiple goroutines access `Config.sensitiveCache` (Issue #3374).  
  2. **Silent loss of API keys** after a config load‑save cycle (Issue #3373).  
  3. **Limited reaction tool configuration** – users cannot disable or fine‑tune the `reaction` tool via config.  
  4. **Missing web‑search integration** – community asked for a no‑API‑key search provider (see PR #3370).  

- **Satisfaction**: The quick closure of the data‑race bug indicates that the maintainers are responsive to critical stability concerns, which should boost confidence in the project’s reliability.

---

### 8. Backlog Watch  

- **PR #3370** (open) – Still awaiting final review/merge. The feature is complete but has not been merged; maintainer attention is needed to close this long‑standing open change.  
- **Issue #3373** – Although closed, the underlying config round‑trip logic may still be fragile; a follow‑up audit or additional test coverage could prevent regression.  
- **Issue #3374** – Fixed, but the surrounding `security.go` file may need broader concurrency review to ensure no similar races exist elsewhere.

---

**Overall Health**: PicoClaw is actively maintaining stability (critical bug fix merged) while gradually expanding its tool ecosystem. The mix of bug fixes, configuration improvements, and new feature proposals suggests a balanced roadmap: solidify the core, then enrich the platform with community‑driven capabilities.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



Here is the structured project digest for the **IronClaw** repository, generated from the GitHub data available for **2026-09-23**.

---

### 1. Today's Overview
Today marks a steady day of development for IronClaw, characterized by focused feature additions and targeted UI bug fixes. While no releases were published and no pull requests were merged or closed in the last 24 hours, the repository shows healthy active development with three significant open pull requests updated recently. The focus of today's contributions is split between improving internationalization (adding the Italian locale) and fixing critical browser-specific input issues for non-English keyboard layouts. Overall project stability remains high, with no new critical issues opened.

---

### 2. Releases
*   **No new releases were published today.** There are currently no migration notes, breaking changes, or version updates to report.

---

### 3. Project Progress
While no pull requests were merged today, progress is actively advancing on three major open PRs that represent key milestones for the project:
*   **Host Runtime Enhancement (PR #8108):** Adds a `shift` operation to the `builtin.time` tool, allowing developers and agents to safely sum signed time deltas (seconds to weeks) and apply them to a target timestamp or the current time.
*   **WebUI IME Fix (PR #8092):** Focuses on preserving native Input Method Editor (IME) composition sequences in the chat composer, resolving edge cases where key presses (like Safari's `keyCode 229`) were prematurely intercepted.
*   **Italian Locale Support (PR #8107):** Introduces full Italian (`it`) translation support, expanding the WebUI locale list to twelve and ensuring complete key coverage to prevent English fallback.

---

### 4. Community Hot Topics
With zero issues reported today, community focus is directed toward the active development branches:
*   **WebUI Localization (PR #8107):** This pull request responds directly to community requests (originally tracked in issue #7855) for Italian localization. The comprehensive translation pack highlights the community's demand for a truly internationalized interface.
*   **Chat Composer Usability (PR #8092):** This PR addresses a subtle but critical interaction bottleneck for international users utilizing IMEs (commonly used for East Asian languages) on Safari, where standard Enter-to-send logic interfered with character composition. 

---

### 5. Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours (0 open issues). However, there are active fixes in the pipeline targeting existing stability and usability hurdles:
*   **IME Input Regression (PR #8092):** A high-priority UI bug fix targeting Safari composition issues. It includes robust regression test cases to ensure future updates do not break input method behaviors.
*   **Typed Input Arithmetic Issues (PR #8108):** Fixes runtime bugs related to typed inputs inside the `builtin.time` utility, ensuring time-shift operations handle numeric inputs safely and predictably.

---

### 6. Feature Requests & Roadmap Signals
*   **Multi-language Expansion:** The merge of PR #8107 signals that the roadmap is actively responding to localization requests. We predict the next minor release will feature Italian, with potential follow-ups for other major European languages as requested by the user base.
*   **Advanced Temporal Tooling (PR #8108):** The addition of the `shift` operation indicates a roadmap direction towards more robust temporal reasoning inside the host runtime, enabling better scheduling, delayed actions, and timestamp arithmetic for autonomous agents.

---

### 7. User Feedback Summary
User satisfaction is heavily tied to accessibility and platform compatibility:
*   **Localization Pain Points:** Users of non-English languages (specifically Italian speakers, as requested in #7855) have historically faced missing translation strings, forcing fallback to English. The addition of `it.ts` resolves key friction points for Italian-speaking administrators and users.
*   **Keyboard Layout Friction:** Users relying on IME input methods on macOS/Safari faced severe chat input bugs where messages would send prematurely mid-composition. The fix in PR #8092 directly addresses this productivity bottleneck.

---

### 8. Backlog Watch
*   **PR #8092 (IME Composition Fix):** Open since September 10, 2026, this PR has been in review for over 12 days. Because it handles tricky browser-level keyboard events (`keyCode 229`), it requires careful maintainer review to ensure no regressions are introduced. It is flagged as a high-value stability fix.
*   **Issue #7855 (Italian Locale Request):** A long-standing community request that is finally nearing completion via PR #8107, but still requires final registration and merge to close the loop.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑09‑23**

---

### 1. Today’s Overview  
The LobsterAI repository shows healthy, focused activity: five issues were updated in the last 24 hours, all remaining open, while thirteen pull requests were touched (three still open, ten merged/closed). The most recent release (2026.9.22) addressed a native‑task/Feishu delivery regression and a Windows‑gateway start‑up crash. Overall, the project is moving quickly on bug‑fixes and UI polish, with a clear emphasis on stability for the gateway and plugin ecosystem.

---

### 2. Releases  
**LobsterAI 2026.9.22** – *2026‑09‑22*  
- **fix(im)**: restored native scheduled tasks and Feishu delivery (PR #2737) – no breaking changes.  
- **fix(openclaw)**: recovered Windows gateway exit failures and improved start‑up robustness (PR #2737).  

No migration notes were required; the changes are additive and preserve backward compatibility.

---

### 3. Project Progress  
**Merged / Closed PRs (last 24 h)** – ten PRs were merged or closed on 2026‑09‑22, delivering a suite of stability and performance improvements:  

| PR | Summary | Impact |
|----|---------|--------|
| #2748 | Raise Kimi K3 `maxTokens` to 1 048 576 and replace plugin‑SDK wrapper with a local stream implementation. | Removes artificial token caps, improves large‑context generation. |
| #2749 | Added live per‑step turn progress and diff stats for coworker sessions. | Enhances transparency during tool calls, improves UX. |
| #2746 | Eliminated unnecessary Clawguard lease waits, preventing gateway time‑outs. | Reduces start‑up latency, especially on slower machines. |
| #2745 | Fixed corrupted model‑policy generation that could block gateway launch after upgrades. | Increases reliability of model‑switching upgrades. |
| #2744 | Moved “Active exec sessions” snapshot to hidden runtime‑context, preventing cache invalidation. | Stabilises provider prefix caching during rapid turn flow. |
| #2743 | Backported native Koffi Windows private‑directory patch. | Improves file‑system isolation and security on Windows. |
| #2742 | Stabilised skill‑config sync, filtered spurious changes, and added timeout‑recovery logic. | Cuts repeated gateway restarts caused by config drift. |
| #2741 | Enabled legacy `nsp-clawguard` startup after upgrade (manifest fix). | Restores ability to run older plugin versions without breaking the gateway. |
| #2740 | Restored CJK body‑weight (400) to keep bold markdown text distinguishable. | Improves visual contrast and readability. |
| #2747 | Release/2026.9.21 – meta‑release containing the above fixes. | Consolidates the stability work. |

**Open PRs (updated today)**  
- #2750 – *cowork* “turn progress polish” (renderer, main, openclaw, cowork areas). Still in progress; aims to refine UI feedback for multi‑turn interactions.

---

### 4. Community Hot Topics  
| Item | Type | Comments / Reactions | Link | Underlying Need |
|------|------|----------------------|------|-----------------|
| **#1006** – “配置文件和工作空间文件在重启后被重置” | Issue (3 comments) | 0 👍 | https://github.com/netease-youdao/LobsterAI/issues/1006 | Users want persistent custom configuration (e.g., Feishu streaming channels) and workspace files to survive restarts. |
| **#986** – “微信回复没有与客户端同步” | Issue (2 comments) | 0 👍 | https://github.com/netease-youdao/LobsterAI/issues/986 | Desire for real‑time sync of WeChat bot replies, avoiding long wait‑then‑burst experience. |
| **#981** – “启动app报错Failed to start Web Search service” | Issue (1 comment) | 0 👍 | https://github.com/netease-youdao/LobsterAI/issues/981 | Crash on launch; indicates a stability regression in the Web Search bridge. |
| **#982** – “「预设 Agents」的国际化适配问题” | Issue (1 comment) | 0 👍 | https://github.com/netease-youdao/LobsterAI/issues/982 | UI text not switching to English, hurting multilingual users. |
| **#983** – “无法通过按下新的组合键修改快捷键” | Issue (1 comment) | 0 👍 | https://github.com/netease-youdao/LobsterAI/issues/983 | Shortcut‑key editing UI is broken, limiting customization. |
| **PR #2750** – “cowork turn progress polish” | PR (open) | 0 👍 | https://github.com/netease-youdao/LobsterAI/pull/2750 | Enhances coworker UI with polished progress indicators; signals a push for richer collaborative features. |

The most active discussion centre on **#1006**, reflecting a strong demand for a reliable persistence mechanism for user‑customized files.

---

### 5. Bugs & Stability  
| Severity | Reported Issue | Symptom | Fix PR (if any) |
|----------|----------------|---------|-----------------|
| **High** | **#1006** – config & workspace reset on restart | Custom `openclaw.json` and workspace `AGENTS.md` are overwritten each start, forcing users to re‑apply settings. | No dedicated fix yet; community workaround via scheduled tasks. |
| **High** | **#981** – “Failed to start Web Search service” (crash) | Gateway aborts during start‑up after Web Search bridge initialization. | **#2746** (avoid unnecessary Clawguard lease waits) may alleviate start‑up stalls; **#2745** (model‑policy recovery) fixes a related launch‑blocking condition. |
| **Medium** | **#986** – WeChat reply sync lag | Messages batch‑send only after all client replies are completed, causing long delays. | No direct fix; may be addressed by improved real‑time messaging architecture in future releases. |
| **Medium** | **#982** – i18n mismatch for preset Agents | English language switch does not affect Agent names/descriptions. | Likely to be tackled by a i18n refactor; no PR yet. |
| **Low** | **#983** – shortcut‑key editing not working | UI promises “press new combo key” but action never triggers. | No fix; may be a UI state‑management bug. |

Overall, the most critical stability regressions are the config reset (#1006) and the Web Search start‑up crash (#981). The merged PRs #2746 and #2745 directly target start‑up reliability, while #2742 mitigates repeated config‑sync restarts.

---

### 6. Feature Requests & Roadmap Signals  
- **Live progress & diff stats** (PR #2749) indicates a roadmap focus on transparent, step‑by‑step feedback for tool calls – likely to be part of the next UI polish iteration.  
- **Persistent user configuration** (Issue #1006) is a clear user‑driven requirement; the maintainers have shown willingness to address it (see the recent fix for Feishu delivery).  
- **Internationalisation for preset Agents** (Issue #982) and **shortcut‑key editing** (Issue #983) are UI/UX refinements that could be bundled into a “user‑experience” sprint.  
- **Web Search service stability** (Issue #981) suggests a backend reliability concern that may be revisited after the current wave of gateway‑level fixes.

These signals point to a next version that will tighten stability, preserve user settings, and enrich collaborative UI feedback.

---

### 7. User Feedback Summary  
- **Configuration persistence** – Users are frustrated that custom JSON and workspace files are regenerated on every start, breaking their curated settings (e.g., Feishu streaming channels).  
- **WeChat interaction flow** – The batch‑send behaviour feels clunky; users want immediate, per‑message sync.  
- **Shortcut key customization** – The UI promises a simple key‑redefinition but the action is missing, reducing workflow efficiency.  
- **Language consistency** – Switching the app to English does not propagate to built‑in Agent names, causing confusion for multilingual teams.  
- **Crash on launch** – The Web Search service failure halts the app, indicating a critical stability bug that impacts first‑time user experience.

Overall satisfaction appears moderate; the community is actively reporting bugs but also contributing via PRs, indicating a collaborative development environment.

---

### 8. Backlog Watch  
| Item | Why It Matters | Current Status |
|------|----------------|----------------|
| **#1006** – config & workspace reset | High‑impact user‑visible regression; no resolution yet. | Open, last updated 2026‑09‑22; maintainer attention required. |
| **#981** – Web Search start‑up crash | Prevents app launch; may affect many users. | Open, last updated 2026‑09‑22; linked to PR #2746/#2745 which may resolve it. |
| **#982** – Agent i18n mismatch | Affects non‑Chinese users; UI inconsistency. | Open, stale (created Mar 2026). |
| **#983** – shortcut‑key edit broken | Hinders power‑user customization. | Open, stale. |
| **PR #2727** – persist OpenClaw entry hooks | Critical for plugin state survival across gateway restarts. | Open since Sep 2026‑09‑20; no recent activity. |
| **PR #1277** – electron dependency bump | Upgrades the Electron runtime (potential compatibility & performance gains). | Open since Apr 2026; may need review for breaking changes. |

These items have seen limited recent activity and merit maintainer follow‑up to keep the project’s momentum steady.

--- 

*Prepared on 2026‑09‑23. All links point to the official GitHub repository (netease-youdao/LobsterAI).*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-23

**Repository:** [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. Today's Overview

Moltis shows minimal activity as of 2026-09-23, with no issue updates, no new releases, and only a single pull request touched in the last 24 hours. The project appears to be in a low-activity or maintenance phase, with no community-driven issues or discussions surfaced today. The only recorded change is an automated dependency bump, suggesting the codebase is still being kept up-to-date but without active feature development. Overall health signals are neutral — no regressions or emergencies, but also no visible forward momentum.

---

## 2. Releases

No new releases published today.

---

## 3. Project Progress

No merged or closed PRs recorded today.

**Open PR (created 2026-09-22, not yet merged):**
- [#1284 [OPEN] [dependencies, rust] chore(deps): bump wasmtime-wasi from 36.0.9 to 36.0.11 in the cargo group across 1 directory](https://github.com/moltis-org/moltis/pull/1284)
  - Author: dependabot[bot]
  - A routine Dependabot update bumping `wasmtime-wasi` from 36.0.9 → 36.0.11 in the `/` directory. No breaking changes noted at this scope; still open and awaiting maintainer review/merge.

---

## 4. Community Hot Topics

No issues or PRs with significant community engagement (comments/reactions) recorded today. The only open item is the automated dependency PR above, which carries no community discussion.

---

## 5. Bugs & Stability

No bugs, crashes, or regressions reported today. The project reported zero active issues in the last 24h window, indicating either a stable state or a lack of active user reporting.

---

## 6. Feature Requests & Roadmap Signals

No feature requests surfaced today. The absence of issue activity means there are no visible roadmap signals from community input at this time. The wasmtime-wasi dependency bump in PR #1284 may indirectly signal continued investment in the WebAssembly/WASI runtime stack that underpins Moltis' agent execution layer.

---

## 7. User Feedback Summary

No user feedback, pain points, or satisfaction signals are available in today's data window (0 issues updated). This makes it difficult to assess current user sentiment — the silence could reflect either a stable experience or declining community engagement.

---

## 8. Backlog Watch

- **[PR #1284](https://github.com/moltis-org/moltis/pull/1284)** — Open Dependabot PR since 2026-09-22. While routine, dependency PRs left unmerged can accumulate and increase merge conflict risk. Recommend maintainer review and merge or close to keep the dependency tree fresh.

---

*Generated from GitHub data as of 2026-09-23. Activity assessment is based solely on the provided dataset; low activity does not necessarily indicate project abandonment — further historical analysis is recommended for a complete health picture.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest - 2026-09-23

## 1. Today's Overview
CoPaw shows robust development activity today with 39 issues updated and 48 PRs modified, indicating strong engineering momentum. The project is actively addressing stability issues, improving user experience, and expanding functionality. Notably, there are 24 merged/closed PRs today, suggesting efficient code integration. Despite no new releases, the high volume of closed issues and merged PRs demonstrates significant progress in resolving existing bugs and implementing features. The backlog includes several critical stability concerns that require immediate attention.

## 2. Releases
**None** - No new versions released today.

## 3. Project Progress
**Recent Merges & Closes:**
- **#7940** `feat(console): refine sidebar interactions and persist avatars` - Improves UI navigation and user session continuity
- **#7931** `feat(chat): add durable paginated transcript history` - Adds per-session SQLite storage with stable item cursors
- **#7941** `test(unit): make the batch-3 lock and portability tests cross-platform` - Expands test coverage by 47 files with 2,720 new cases
- **#7944** `fix(tool-calls): deliver background tool results as a hint block` - Fixes background tool call result delivery
- **#7835** `fix(memory): stop leaking auto-memory-recall payload to channels` - Prevents memory payload leakage to outbound channels
- **#7934** `fix(providers): report bot-challenge pages as blocked instead of blaming credentials` - Improves error classification for security gateways
- **#7869** `fix(providers): carry the session header on connection checks` - Enhances session management for provider connections
- **#7933** `fix(pet): preserve caller identity when resolving approvals` - Fixes desktop pet approval resolution
- **#6808** `fix(console): show custom profile markdown files` - Makes custom persona files visible alongside built-in ones
- **#1512** `fix(local-models): support OpenAI-style tool calls` - Improves local model tool call compatibility

## 4. Community Hot Topics
**Most Active Discussions (Issues):**
- **#7935** `LLM Request timed out` - **3 comments** - Critical stability issue where LLM timeouts prevent automatic recovery, requiring manual process restart
- **#7929** `409 task already running error` - **2 comments** - Frontend stop action completes but backend continues execution, causing duplicate task errors
- **#7850** `Driver card policy lost update` - **3 comments** - Race condition in driver card updates during background reloads
- **#7721** `Workspace file browser freezes server` - **2 comments** - Large repository hangs entire QwenPaw server during file browsing

**Key Need Analysis:** Users are experiencing fundamental reliability issues with task management, error recovery, and system performance under load. The conversation management and model switching workflows need significant improvements.

## 5. Bugs & Stability
**Critical Severity Bugs:**
1. **#7935** - **LLM timeout recovery failure**: Once timeout occurs, entire process becomes unresponsive; manual restart required
2. **#7929** - **Task duplication after stop**: Stop action appears successful but tasks continue running, causing 409 conflicts
3. **#7721** - **Server freeze on file browser**: Large workspace repositories block entire server event loop

**Medium Severity:**
- **#7850** - **Driver card race condition**: Background reload overwrites concurrent policy changes
- **#5856** - **Tool call structure loss**: Context compaction destroys structured tool call data
- **#7549** - **Volcengine API rejection**: Model requests ending with assistant text turns rejected by API

**Available Fixes:** #7944, #7931, #7869, #7933, #6808, #1512 contain fixes for related issues.

## 6. Feature Requests & Roadmap Signals
**High-Priority User Requests:**
- **#6318** - **Conversation-level model specification**: Support per-conversation model selection (currently agent-bound only)
- **#7062** - **Per-agent reasoning effort override**: Allow different thinking depths for different agents/situations
- **#6229** - **User-controlled reasoning depth**: Light/Medium/Deep/Auto selection for speed vs. thoroughness balance
- **#4036** - **Simplify model configuration**: Current 5-step process is overly complex
- **#7739** - **Historical conversation layout**: Move conversation history to right side for better notebook usability

**Roadmap Indicators:** Users clearly demand better configurability, improved user experience, and more flexible conversation management. The multi-model and reasoning control features appear particularly mature in their requirements.

## 7. User Feedback Summary
**Recurring Pain Points:**
1. **Configuration Complexity**: Adding models requires 5+ clicks across multiple screens
2. **Conversation Management Issues**: Task stop doesn't actually stop execution; duplicate task problems
3. **Storage/Workspace Issues**: Agent working directory settings not persisting correctly
4. **Display/Performance**: UI layout issues on small screens; server freezes with large workspaces
5. **Error Handling**: Poor error recovery after timeouts; confusing error messages

**Use Cases Highlighted:**
- Long-running tasks need cancellation capabilities
- Multi-agent workflows require better progress visibility
- Local model integration needs better tool call support
- Large repository users need performance optimizations
- Cross-platform users report inconsistent behavior

**Overall Satisfaction Concerns:** Users express frustration with technical reliability, complex workflows, and lack of intuitive controls for common operations.

## 8. Backlog Watch
**Critical Unanswered Issues:**
- **#5182** - **Unified model configuration** - 3 comments, about simplifying model type and support configuration
- **#4020** - **Memory file protection** - 2 comments, about read-only protection for MEMORY/AGENTS/SOUL files
- **#7890** - **Zero-downtime reload bug** - 2 comments, plugin runtime hooks lost during reloads

**Long-Standing Issues Needing Attention:**
- **#3424** - **Background agent task cancellation** - 2 comments, no solution for canceling subagent tasks
- **#3789** - **Model fallback functionality** - 2 comments, needs automatic backup model switching
- **#3251** - **Frontend base URL modification** - 2 comments, can't modify provider base URLs in UI

**Note:** Many of these issues (4036, 6318, 7062) represent fundamental workflow improvements that, if addressed, would significantly enhance user satisfaction and reduce technical support overhead. The project would benefit from prioritizing the timeout recovery (#7935) and task management issues (#7929, #7721) as these represent current system reliability blockers.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**Today’s Overview**  
ZeptoClaw (github.com/qhkm/zeptoclaw) entered a quiet period on 2026‑09‑23 with no new releases, no reported issues, and no closed pull requests. The only activity consists of three open Dependabot‑generated PRs that bump core GitHub Actions dependencies (docker/build‑push‑action, actions/checkout, and mail-parser). These updates are routine maintenance steps and do not introduce new functionality or break existing behavior, suggesting the project remains stable and well‑maintained.

**Releases**  
*None* – there are no new releases to report for this date.

**Project Progress**  
- **Merged/Closed PRs:** 0 (all three PRs remain open).  
- **Feature Advances/Fixes:** No functional changes were merged today; the PRs merely update dependency versions to newer, presumably more secure or bug‑fixed releases.

**Community Hot Topics**  
| PR | Summary | Link |
|----|---------|------|
| #704 | Bump `docker/build-push-action` from 7.2.0 → 7.3.0 (dependencies, github_actions) | <https://github.com/qhkm/zeptoclaw/pull/704> |
| #706 | Bump `actions/checkout` from 6.0.2 → 7.0.1 (dependencies, github_actions) | <https://github.com/qhkm/zeptoclaw/pull/706> |
| #705 | Bump `mail-parser` from 0.11.3 → 0.11.9 (dependencies, rust) | <https://github.com/qhkm/zeptoclaw/pull/705> |

All three PRs have zero 👍 reactions and no comments, indicating minimal community engagement at the moment. The underlying need is to keep the project’s CI pipeline and Rust dependencies up‑to‑date, which is a typical maintenance activity for an open‑source codebase.

**Bugs & Stability**  
No bugs, crashes, or stability regressions were reported in the last 24 hours. Consequently, there are no severity‑ranked issues and no fix PRs to reference.

**Feature Requests & Roadmap Signals**  
No user‑requested features or roadmap discussions appear in the current data. The absence of issues or feature‑request PRs suggests that the project’s scope is currently focused on maintenance rather than new functionality.

**User Feedback Summary**  
There is no direct user feedback (positive or negative) captured in issues or PR discussions for today. The lack of active dialogue implies either a stable user base or that users are satisfied with the current state of the project.

**Backlog Watch**  
- **Open Issues:** 0 (no issues to monitor).  
- **Open PRs:** 3 (all dependabot updates). While none are long‑standing, maintainers may wish to review and merge these PRs promptly to keep the CI pipeline and dependency ecosystem current.  

*Overall project health*: The repository appears healthy—regular dependency updates, no critical bugs, and no pending feature work. Maintainers should consider merging the open PRs to finalize the maintenance window and keep the project’s CI pipeline aligned with the latest action versions.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest - 2026-09-23

## 1. Today's Overview

ZeroClaw shows moderate activity on 2026-09-23 with 34 issues updated in the last 24 hours (19 open/active, 15 closed) and 50 pull requests (32 open, 18 merged/closed). Notably, there are no new releases this period. The project remains focused on improving multi-channel support (especially WhatsApp Web), enhancing provider compatibility, and addressing critical reliability issues in voice and image handling. Recent efforts emphasize making agent interactions more robust across different platforms and ensuring consistent behavior between local and cloud-based execution environments.

## 2. Releases

No new releases were published during this period. The project maintains its stable release cadence with incremental improvements rather than major version bumps. Existing releases continue to receive maintenance and bug fixes through PRs.

## 3. Project Progress

### Merged/Closed PRs (Last 24h)
- **#10391** - Fixed bounded delegate filesystem tools to respect target workspaces (merged in master)
- **#10172** - Ongoing work on preserving configured provider profile identities through runtime model switching
- **#10980** - Added PDF thumbnail support for WhatsApp Web document messages
- **#10904** - Fixed image marker resolution errors in the vision provider gate
- **#10938** - Explicitly declares tool attachments to prevent image marker parsing issues
- **#10931** - Bound Windows task stdout/stderr to improve service logging reliability
- **#9368** - Improved history counting to treat entire turns consistently
- **#11060** - Ensures forced replies are queued outside voice chats
- **#11057** - Honors `suppress_voice` before routing TTS messages in WhatsApp Web
- **#11054** - Implements thematic breaks and setext headings for WhatsApp Web outbound messages
- **#11044** - Makes ZErCode session roots explicit and preserves resumed roots
- **#10988** - Enables reading poll votes back as structured `[choice]` messages
- **#10979** - Implements `create_room` and `invite_user` for WhatsApp Web channel

### Features Advanced
- **WhatsApp Web Enhancements**: Multiple PRs address formatting (thematic breaks, setext), voice interaction (suppress_voice/force_voice), and media handling (PDF previews, image markers)
- **ZErCode Integration**: Session root preservation and workspace defaults
- **Knowledge Graph**: RFC introduced for first-class agent memory layer (still in progress)
- **Provider Compatibility**: Improvements to Anthropic and OpenAI provider transports

## 4. Community Hot Topics

The most active discussion areas revolve around **WhatsApp Web channel improvements**, specifically:

- **Voice Interaction Conflicts** (#11057, #11060): Users report that `force_voice` is ignored by WhatsApp Web, causing voice notes to fail when `suppress_voice` is set. This is a high-severity usability issue affecting real-world deployments.
- **Image Marker Handling** (#10904, #10797): Data loss occurs when tool outputs contain image markers without corresponding vision capabilities, requiring careful validation and fallback logic.
- **Poll Functionality** (#10988): Missing ability to read poll votes back as structured choices, limiting interactive workflow efficiency.
- **PDF Previews** (#10980): Adding visual previews to WhatsApp Web document messages improves developer experience.

These topics dominate both the issue tracker and pull request landscape, indicating strong user demand for reliability in cross-platform messaging and clearer feedback loops.

## 5. Bugs & Stability

| Severity | Issue | Impact | Status |
|----------|-------|--------|--------|
| **High** | WhatsApp Web voice routing failure (#11057) | Critical - voice notes not delivered when `suppress_voice` is set | Open PR #11057 in progress |
| **High** | Image marker data loss in tool outputs (#10797) | High - silent data corruption in memory backend | Open PR #10797 |
| **Medium** | Detached peer-agent turns lacking durability (#9597) | Medium - lost context in distributed conversations | Open PR #9597 |
| **Medium** | `suppress_voice` vs `force_voice` conflict (#11060) | Medium - inconsistent voice behavior | Open PR #11060 |
| **Low** | Windows task logging leakage (#10931) | Low - noisy logs | Open PR #10931 |

The most pressing stability concerns are the WhatsApp Web voice interaction bugs and image marker handling, both of which directly impact user experience. The knowledge graph implementation remains incomplete and may introduce future risks if not carefully integrated.

## 6. Feature Requests & Roadmap Signals

- **Knowledge Graph Memory Layer** (#11053): A significant architectural shift positioning the knowledge graph as a first-class memory system for agents. This is likely to be a major focus in upcoming releases, potentially transforming how agents retain and retrieve information across sessions.
- **WhatsApp Web Polish**: Multiple small enhancements (PDF previews, thematic breaks, poll vote retrieval, room creation) indicate a roadmap toward making WhatsApp Web more capable and intuitive.
- **ZErCode Session Management**: Making session roots explicit and preserving resumed states will improve reproducibility and debugging.
- **Provider Transport Improvements**: Ongoing work to stabilize Anthropic and OpenAI provider connections addresses intermittent failures observed in production.

## 7. User Feedback Summary

Users express clear pain points around **cross-platform consistency**:
- **Voice Note Reliability**: The most frequent complaint is that WhatsApp Web sometimes ignores `suppress_voice` settings, leading to unwanted voice replies. This affects productivity and accessibility.
- **Data Integrity**: Image markers in tool outputs occasionally cause silent data loss, frustrating developers who rely on precise artifact handling.
- **Interactive Workflows**: Polls and room management in WhatsApp Web remain underutilized due to missing features, suggesting opportunities to reduce friction in collaborative workflows.

Overall sentiment is positive regarding the direction of improvements, but critical reliability issues in voice and image handling require immediate attention to maintain trust in the platform.

## 8. Backlog Watch

Several important issues remain unaddressed and warrant maintainer attention:

1. **#11057** - Fix WhatsApp Web to honor `suppress_voice` before queuing TTS (critical for voice interaction reliability)
2. **#11060** - Ensure forced replies are queued outside voice chats (prevents voice contamination)
3. **#10988** - Read poll votes back as structured `[choice]` messages (improves poll UX)
4. **#11053** - Complete knowledge graph implementation (long-term architecture change)
5. **#10979** - Implement `create_room` and `invite_user` for WhatsApp Web (missing core functionality)
6. **#10952** - Seam sanitizer rewriting of multimodal markers (ongoing cleanup task)

These items represent either critical fixes or foundational improvements that should be prioritized in the next development cycle.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*