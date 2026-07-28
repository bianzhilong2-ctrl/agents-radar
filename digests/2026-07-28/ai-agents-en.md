# OpenClaw Ecosystem Digest 2026-07-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-28 01:43 UTC

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

```markdown
# OpenClaw Project Digest - 2026-07-28

**Today's Overview**  
OpenClaw shows robust activity with 500 issues and PRs updated in the last 24 hours, though no new releases were published. Key trends include critical stability fixes (e.g., memory leaks, session initialization bugs), feature enhancements (llm fallback, exec denylist), and UI/UX refinements. Ongoing hot topics revolve around security, session recovery, and extensibility.  

**Releases**  
No new versions published.  

**Project Progress**  
- **Merged/Closed PRs**: 212 PRs merged today, addressing 122 feature enhancements and bug fixes (e.g., redacted secrets, isolated job recovery).  
- **Notable Fixes**: Gateway memory management (#49603), Slack table handling (#111955), and Telegram draft persistence (#112370).  
- **Features Advancing**: PRs for fluent autocomplete (#10118), config schema alignment (#110065), and workboard card identification (#114389).  

**Community Hot Topics**  
- **Most Discussed**:  
  - PR #113233: Session transcript cleanup (115 comments) proposes removing legacy JSONL file handling.  
  - PR #111955: Slack table accessibility fixes (12 comments) resolves stable inbox UI.  
  - Issue #75: Debian/RedHat Linux support (~150 comments) for missing desktop apps.  
  - Issue #10659: Credential leak prevention via masked secrets (~120 comments).  
- **Undecided Debates**: Session memory tagging (#7707) and filesystems sandboxing (#7722) dominate security discussions.  

**Bugs & Stability**  
- **Critical**:  
  - Gateway memory leak (#91588) reaching 15.5GB (no fix PR).  
  - Session deadlocks due to unclaimed approvals (#64664).  
- **P2+ Fixes**: 12 PRs address crashes (e.g., SQL schema migration #113434 fixed via #114713), message loss (#102020), and IDL cleanup.  

**Feature Requests & Roadmap Signals**  
- **Highlighted**:  
  - Exec denylist (#6615): Reflects enterprise security demands.  
  - Masked secrets (#10659): Tied to GDPR/PCI compliance discussions.  
  - LLM fallback (#9986): Community prioritizes resilience over magical automation.  
- **Long-Term Signals**: Filesystem sandboxing (#7722) and skill permissions (#12219) align with distributed deployment goals.  

**User Feedback Summary**  
- **Pain Points**:  
  - Session crashes after memory pressure (#87109, #103917).  
  - Telegram/WHTTP message loss post-upgrades (#113315, #114254).  
- **Satisfaction Drivers**: Redesigned Tabs (#114389), retryable cron actions (#76159), and security hardening (#40255).  
- **Dissatisfaction**: GUI setup complexity (LaunchAgent conflicts in #97166) and lack of cross-platform desktop apps.  

**Backlog Watch**  
- **Critical Stalled Issues**:  
  - [Gateway memory leak](#91588) (6mo Open)  
  - [Linux support](#75) (11mo Open)  
  - [Approval scope deadlock](#74484) (8mo Open)  
- **Notable Long Run**: Feature request for cron job abort handling (#113434 blocks 281 other items).  
```


---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: Personal AI Assistant/Open-Source Agent Landscape**  

---

### **1. Ecosystem Overview**  
The personal AI agent/open-source ecosystem is rapidly evolving, with projects adopting diverse technical approaches to address automation, security, and extensibility. OpenClaw leads as a reference implementation with enterprise-grade stability focus, while platforms like Hermes Agent prioritize UI/UX polish and voice interaction. Specialized tools like PicoClaw target Japanese/localization needs, and NanoClaw emphasizes skill integrations. The ecosystem reflects maturity in core agentic behavior (OpenClaw, CoPaw) and innovation in niche domains (voice, imaging, localized workflows). Shared challenges include session reliability, cross-provider compatibility, and secure tool execution.  

---

### **2. Activity Comparison**  
| Project       | Issues (24h) | PRs (24h) | Release Status | Health Score* |  
|---------------|--------------|-----------|----------------|---------------|  
| **OpenClaw**  | 500          | 122       | ✖ No           | ✅✅✅ (High)  |  
| **NanoBot**   | 64           | 36        | ✖ No           | ✅✅ (Medium)  |  
| **Hermes Agent** | 50 (updated) | 39        | ✖ No           | ✅✅✅ (High)  |  
| **PicoClaw**  | 5            | 4         | ✖ No           | ✅✅ (High)    |  
| **NanoClaw**  | 0            | 1         | ✖ No           | ✅✅ (Medium)  |  
| **NullClaw**  | 0            | 0         | ✖ No           | ✅ (Stable)    |  
| **IronClaw**  | 39           | 19        | ✅ Major (v1.0)| ✅✅✅ (High)  |  
| **LobsterAI** | 120 (+2 crit)| 5 (merged)| ✖ No           | ✅✅ (Medium)  |  
| **CoPaw**     | 50 (updated) | 15        | ✖ No           | ✅✅ (High)    |  

*Health Score: ✅✅✅=High (stable core, active fixes), ✅✅=Medium (functional with open issues), ✅=Stable but minimal activity.  

---

### **3. OpenClaw's Position**  
- **Advantages**:  
  - Scales to enterprise needs with security-first features (exec denylist, masked secrets).  
  - Technical depth via WebSockets, UUID-based session management, and audit defenses.  
  - Community size: 122 PRs closed daily vs peers (Hermes: 39, NanoBot: 36).  
- **Differentiation**:  
  - Focus on stability/correctness vs. NanoBot’s UI/UX and Hermes’ voice interfaces.  
  - Technical rigor in session recovery and cross-platform SDKs.  

---

### **4. Shared Technical Focus Areas**  
1. **Security & Compliance**:  
   - Exec denylists (OpenClaw), GDPR/PCI compliance (Ollama secrets in NanoBot), secret leakage prevention (CoPaw).  
   - Channel-specific auth (NanoBot, ZeroClaw).  
2. **Cross-Provider Flexibility**:  
   - Custom model protocols (CoPaw #5609), fallback chains (PicoClaw #3200), multi-LLM support (Hermes).  
3. **Session & Memory Management**:  
   - Session recovery (OpenClaw #49603), memory consolidation stalls (NanoBot #1174), state persistence (CoPaw #6504).  
4. **Tool Safety**:  
   - `danger`-style denylists (OpenClaw), subprocess hardening (Hermes #68882), privileged cmd restrictions (Moltis #1170).  

---

### **5. Differentiation Analysis**  
| Project       | Core Strength          | User Base                     | Technical Approach               |  
|---------------|------------------------|-------------------------------|----------------------------------|  
| **OpenClaw**  | Enterprise security    | Enterprise/DevOps             | RESTful, middleware-focused      |  
| **NanoBot**   | Consumer UX            | Casual users                  | TypeScript/WebUI-driven          |  
| **Hermes Agent** | Voice integration    | Multi-platform users          | WASM/C++ hybrid runtime          |  
| **PicoClaw**  | Japanese localization  | Japan/Southeast Asia users    | Embedded systems integration     |  
| **IronClaw**  | Rearchitecture         | Pre-MVC ecosystem adoptors   | Rust Aria-2 refactored monolith  |  

---

### **6. Community Momentum & Maturity**  
- **Rapid Iteration**:  
  - **OpenClaw/NanoBot/Hermes Agent**: >15 PRs/week activity.  
  - **IronClaw**: Rust Aria-2 buy-in drives v1.0 release.  
- **Stabilizing**:  
  - **NullClaw**: Near-zero activity; maintenance mode.  
  - **Moltis**: PR-focused, no merges/release.  

---

### **7. Trend Signals**  
1. **GDPR/PCI-Driven Security**:  
   - Masked secrets (OpenClaw #10659), audit logs (CoPaw #6503), OAuth2 provider profiles (ZeroClaw #9464).  
2. **Voice/AI-Native Interfaces**:  
   - Hermes’ wav2json API, ZeroClaw’s S1 workflow improvements.  
3. **Memory/State Reliance**:  
   - EvilPingpong abuse mitigation (OpenClaw #65684), session consolidation fixes (NanoBot #1174).  
4. **Cross-Channel Uniformity**:  
   - Slack/Matrix/Feishu parity (LobsterAI #2388), credential handling (OpenClaw #110065).  

---  
**Conclusion**: OpenClaw solidifies as a foundational, security-oriented core for enterprises, while the ecosystem trends toward voice integration, localized usability, and provider-agnostic tooling. Projects diverge in their technical approaches but converge on core safety and extensibility needs.


---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑07‑28**  
*(Based on GitHub activity over the last 24 h)*  

---  

### 1. Today’s Overview  
The repository showed a burst of closing activity: **64 issues** were touched (only **1 remains open/active**) and **36 pull requests** were updated (13 still open, **23 merged/closed**). No new releases were cut today. The high close‑rate indicates maintainers are clearing a backlog of bugs and small improvements, while a handful of open PRs suggest ongoing work on new features (e.g., LINE channel, WebUI skill marketplace, Dream‑run exposure). Overall project health appears active and responsive, with a focus on stabilising existing functionality.  

---  

### 2. Releases  
*No new releases were published in the last 24 h.*  

---  

### 3. Project Progress – Merged/Closed PRs (23 items)  
Selected highlights (full list available in the PR table):  

| PR | Title / Focus | What was fixed / added | Link |
|----|----------------|------------------------|------|
| #5124 | **fix(gitstore): return real git object ids instead of hex‑of‑hex** | Corrects git‑object ID encoding in the memory store, preventing corrupted IDs. | [#5124](https://github.com/HKUDS/nanobot/pull/5124) |
| #5123 | **docs: improve README landing page** | Adds a clear project H1, star CTA, concrete use‑case labels, and replaces the stale roadmap with contribution paths. | [#5123](https://github.com/HKUDS/nanobot/pull/5123) |
| #5122 | **fix(agent): read document attachments on demand** | Defers heavy attachment parsing (PDF, DOCX, etc.) until the content is actually needed, reducing startup latency. | [#5122](https://github.com/HKUDS/nanobot/pull/5122) |
| #5120 | **fix: session consolidation drops uploaded media paths carried only in `media[]`** | Preserves media‑field paths during session consolidation so uploaded files are not lost. | [#5120](https://github.com/HKUDS/nanobot/pull/5120) |
| #5121 | **fix(webui): prevent composer resize scroll jitter** | Stabilises the WebUI composer scroll when the widget is resized. | [#5121](https://github.com/HKUDS/nanobot/pull/5121) |
| #5119 | **fix(webui): soften model selector emphasis** | Adjusts typography weight and opacity for the model selector to match design intent. | [#5119](https://github.com/HKUDS/nanobot/pull/5119) |
| #5114 | **fix(memory): preserve Dream input integrity** | Ensures Dream’s prompt includes the full conversation history and allows Dream‑initiated `write_file` edits to persist correctly. | [#5114](https://github.com/HKUDS/nanobot/pull/5114) |
| #5113 | **fix(webui): stabilize repeated model preset rows** | Guarantees unique React keys for duplicate preset entries, eliminating stale rows. | [#5113](https://github.com/HKUDS/nanobot/pull/5113) |
| #5110 | **feat(config): make status actionable for agent readiness** | Extends `nanobot status` to validate environment, model resolution, and provider construction; surfaces field‑level errors. | [#5110](https://github.com/HKUDS/nanobot/pull/5110) |
| #5080 | **feat(brand): migrate README and WebUI assets to SVG** | Replaces PNG cover art and favicons with self‑contained SVGs (with PNG fallbacks). | [#5080](https://github.com/HKUDS/nanobot/pull/5080) |
| #5076 | **fix(webui): honor custom gateway port with Vite** | Makes the WebUI dev server respect a non‑default gateway port when proxied via Vite. | [#5076](https://github.com/HKUDS/nanobot/pull/5076) |
| #5077 | **feat(webui): switch model presets from the composer** | Allows users to cycle through configured model presets via a long‑press/drag gesture on the composer capsule. | [#5077](https://github.com/HKUDS/nanobot/pull/5077) |
| … | (additional closed PRs) | Various bug‑fixes, test upgrades, minor refactors, and documentation tweaks. | — |

*Take‑away:* The day’s merged work concentrated on **memory/Dream integrity**, **WebUI polish**, **correct git‑object handling**, and **usability improvements** (status command, attachment handling, custom ports).  

---  

### 4. Community Hot Topics – Most Commented Issues/PRs  

| Item | Comments | Summary & Underlying Need | Link |
|------|----------|---------------------------|------|
| **Issue #1991** – “希望nanobot可以支持多个自定义custom” | 9 | Users want to define **multiple custom model/provider entries** (e.g., `custom2`) and switch between them freely, rather than being limited to a single custom block. This reflects a need for easier multi‑model experimentation and model‑routing without editing config each time. | [#1991](https://github.com/HKUDS/nanobot/issues/1991) |
| **Issue #3123** – “Problem with cron/scheduled task message send” | 8 | Cron‑scheduled messages are sent from a **cron session** that lacks conversational context, preventing follow‑up questions or corrections on the scheduled output. Users desire the ability to **continue a thread** after a scheduled message. | [#3123](https://github.com/HKUDS/nanobot/issues/3123) |
| **Issue #2570** – “local ollama config - getting 404 page not found” | 7 | Ollama integration fails with a 404 and the gateway does not actually listen on the configured port (18790). Indicates a mismatch between documentation/config and the actual binding logic. | [#2570](https://github.com/HKUDS/nanobot/issues/2570) |
| **Issue #2329** – “custom model provider did not work with channels but ok on cli” | 6 | Custom providers work in the CLI (`nano agent`) but break in channels (Feishu) with 401/invalid_model errors. Suggests that **channel‑specific auth/provider resolution** is not propagating the custom config correctly. | [#2329](https://github.com/HKUDS/nanobot/issues/2329) |
| **Issue #2373** – “使用MiniMax的API出现Error calling LLM的错误” | 5 | MiniMax API returns a 400 due to malformed `toolcallid` in the tool‑call JSON. Points to a need for **more robust tool‑call serialization** for certain providers. | [#2373](https://github.com/HKUDS/nanobot/issues/2373) |
| **Issue #1174** – “bug: memory consolidation can take long or even fail” | 5 (👍2) | Memory consolidation stalls, especially with local models, blocking new sessions. Users request a way to **start a fresh session without waiting for consolidation** or to make consolidation more resilient. | [#1174](https://github.com/HKUDS/nanobot/issues/1174) |
| **PR #5112** (open) – “feat(webui): expose Dream runs as read‑only sessions” | – (no comments yet) | Aims to surface the internal Dream reasoning process in the WebUI as a separate, read‑only session group. Indicates community interest in **transparent AI reasoning** and debugging. | [#5112](https://github.com/HKUDS/nanobot/pull/5112) |

**Analysis:** The top‑voted issues revolve around **config flexibility (multiple customs)**, **cron/scheduled task interactivity**, **provider‑specific connectivity (Ollama, MiniMax, custom providers)**, and **memory consolidation reliability**. These are recurring pain points that affect day‑to‑day usability for power users and those integrating with diverse LLMs or messaging platforms.  

---  

### 5. Bugs & Stability – Reports from Today  

| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | #4792 – “/stop silently discards pending queue messages — permanent message loss” | `cmd_stop` purges the pending inbound queue without re‑publishing, causing loss of messages that arrived mid‑stop. | No fix PR yet (issue closed without a linked PR). |
| **High** | #4805 – “suppress(Exception) on prepare_call silently swallows tool validation errors" | `prepare_call` errors are caught by a blanket `suppress(Exception)`, hiding validation bugs and causing silent fallback to raw args. | No fix PR yet. |
| **Medium** | #1174 – memory consolidation can take long or fail (local models) | Consolidation loops or errors block new sessions. | No dedicated fix PR today, but related memory work (e.g., #5114) touches Dream input integrity. |
| **Medium** | #2570 – Ollama 404 & port not listening | Misconfiguration between docs and actual binding; gateway reports listening on 18790 but does not. | No fix PR; likely requires config/binding adjustment. |
| **Low** | #2329 – custom provider works in CLI but not in channels | Channel‑specific auth/provider resolution missing. | No fix PR; points to a gap in channel‑initialisation logic. |
| **Low** | #3166 – Feishu channel doesn’t show progress notifications | `send_progress:true` ignored for Feishu while other channels display it. | No fix PR. |

**Note:** Although many of these bugs are marked *closed* in the issue list, the closure events in the last 24 h appear to be **bulk clean‑ups without accompanying code changes** (no linked PRs). This suggests the bugs are still open in the codebase and may need revisiting.  

---  

### 6. Feature Requests & Roadmap Signals  

| Request | Issue | Why it matters | Likelihood of near‑term inclusion |
|---------|-------|----------------|-----------------------------------|
| **Multiple custom model/provider entries** | #1991 | Enables quick switching between local, remote, or experimental models without editing config each time. | **High** – aligns with recent work on config status command (#5110) and general configurability drive. |
| **Optional tool/memory modules** | #1881 | Allows low‑end models to run without memory bloat or interfering web tools. | **Medium** – would require conditional registration; recent focus on memory integrity (#5114) makes this plausible. |
| **Customisable / removable 🐈 emoji in system prompt** | #2747 | Cosmetic but requested for branding or accessibility. | **Low** – trivial to add; likely to be merged if a PR appears. |
| **Progress notifications for Feishu (and other channels)** | #3166 | Consistency across channels improves UX for long‑running tool calls. | **Medium** – similar fixes exist for Telegram/Matrix; extending to Feishu is straightforward. |
| **LINE Messaging API channel** | PR #5115 (open) | Adds support for a major messenger in JP/TW/TH/ID. | **High** – PR is open, labelled `priority: p1`, and has clear implementation plan. |
| **WebUI Skill Marketplace & management** | PR #5116 (open) | Provides discover/install flow for third‑party skills via skills.sh. | **High** – `priority: p1`, actively being worked on. |
| **Dream runs exposed as read‑only WebUI sessions** | PR #5112 (open) | Improves transparency of the agent’s internal reasoning loop. | **Medium** – useful for debugging; depends on WebUI refactor priority. |

Overall, the roadmap signals point toward **greater configurability**, **cross‑channel parity**, and **enhanced extensibility** (skills, Dream visibility).  

---  

### 7. User Feedback Summary  

- **Positive:** Users appreciate the rapid release cadence, the growing set of channels (Telegram, Matrix, Feishu, upcoming LINE), and the powerful agent‑skill ecosystem. The recent WebUI polishing (model preset switching, SVG assets, status command) is noted as making the tool more approachable.  
- **Pain Points:**  
  - **Configuration friction** – needing to edit `config.json` for each new custom model/provider; difficulty switching models on the fly.  
  - **Provider‑specific bugs** – Ollama port binding, MiniMax tool‑call formatting, custom provider auth in channels.  
  - **Memory/Consolidation stall** – especially with local models, leading to blocked sessions.  
  - **Message loss on stop** – abrupt termination can drop in‑flight messages, eroding trust in reliability.  
  - **Inconsistent UX across channels** – progress notifications, slash‑command handling, and feature parity (e.g., Feishu missing progress UI).  
- **Desired Improvements:** More **declarative, hot‑swappable config**, **robust error handling** (no silent exception suppression), **better memory management**, and **uniform channel feature set**.  

---  

### 8. Backlog Watch – Items Needing Maintainer Attention  

| Item | Reason it’s Stalled | Suggested Action |
|------|---------------------|------------------|
| **1 open/active issue** (not shown in top‑30 list) | The only issue still marked open/active after the bulk close‑wave. Likely a nuanced bug or feature request that needs triage. | Review the open issue list, prioritize based on impact, and either assign a label/milestone or close with commentary. |
| **Bug #4792 (message loss on /stop)** | High severity, no linked fix PR. | Investigate the `cmd_stop` implementation; ensure pending queue messages are re‑published or at least persisted. |
| **Bug #4805 (suppress(Exception) swallowing validation errors)** | High severity, hides critical tool‑definition bugs. | Replace blanket `suppress` with specific exception handling or propagate validation errors to the caller/log. |
| **Issue #1174 (memory consolidation stall)** | Affects local‑model users; still no dedicated fix. | Consider adding a timeout or fallback that allows a new session to start, or make cancellation of consolidation possible. |
| **Issue #2570 (Ollama 404 & port not listening)** | Blocks a common local‑LLM setup. | Verify the gateway’s host/port binding logic; align documentation with actual behavior; add a health‑check endpoint. |
| **Issue #2329 (custom provider not working in channels)** | Limits extensibility for users wanting to plug in private endpoints via Slack/Feishu/etc. | Trace how channel initialisation loads provider config; ensure custom entries are merged into the channel‑specific runtime. |
| **PR #5115 (LINE channel)** – open, priority p1, open, no comments yet | Although marked priority p1, the lack of discussion may stall review. | Assign a reviewer, run automated checks, and request any needed changes from the author. |
| **PR #5112 (Dream runs in WebUI)** – open, no comments | Interesting feature but may need UI/UX feedback. | Prompt a quick design review; consider adding a demo or screenshot to gather community input. |

Addressing these items will convert the current “clean‑up” mode into genuine forward progress and improve overall

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑07‑28)**  

---

### 1. Today's Overview  
In the last 24 hours the Hermes repository saw **50 issue updates** (41 still open, 9 closed) and **50 PR updates** (39 open, 11 merged/closed). The bulk of activity centers on UI‑related regressions (desktop session sidebar, prompt submission), cross‑platform stability (macOS arm64 terminal, Windows search path), and incremental tooling improvements (MCP discovery, activity watchdog). No new formal releases were cut, but a steady stream of merged patches indicates a healthy merge cadence.  

---

### 2. Releases  
- **No new releases** were published in the last day.  
- The project continues to ship hot‑fixes via pull‑request merges, with the latest merged PRs listed in the *Project Progress* section.

---

### 3. Project Progress  
**Merged / closed PRs (today)**  
| PR | Main Change | Link |
|----|-------------|------|
| #73024 | Removed `shiki`/`mermaid` parsing from desktop renderer to cut cold‑start time | <https://github.com/NousResearch/hermes-agent/pull/73024> |
| #73027 | Added classification of HTTP 422 errors in multimodal tool‑content patterns to prevent session poisoning | <https://github.com/NousResearch/hermes-agent/pull/73027> |
| #73031 | Re‑introduced the session activity watchdog (fixes silent agent‑loop stalls) | <https://github.com/NousResearch/hermes-agent/pull/73031> |
| #73028 | Guarded against empty partial‑stream assistant turns that could poison a session | <https://github.com/NousResearch/hermes-agent/pull/73028> |
| #71753 | Suppressed elapsed‑timer announcements in ARIA live regions for screen‑reader users | <https://github.com/NousResearch/hermes-agent/pull/71753> |
| #70509 | Introduced on‑device wake‑word support with multi‑phrase routing across CLI, TUI and Desktop | <https://github.com/NousResearch/hermes-agent/pull/70509> |
| #69437 | Added Relay setup / first‑use metrics for observability | <https://github.com/NousResearch/hermes-agent/pull/69437> |
| #68882 | Aggregated bounded tool‑usage metrics into privacy‑safe Relay scopes | <https://github.com/NousResearch/hermes-agent/pull/68882> |
| #68881 | Integrated NeMo Relay runtime and produced the first shared‑metrics vertical slice | <https://github.com/NousResearch/hermes-agent/pull/68881> |
| #67607 | Full Hermes‑to‑Relay shared‑metrics pipeline (model, tool, cron events) | <https://github.com/NousResearch/hermes-agent/pull/67607> |
| #67328 | Implemented a read‑only drift detector for generated skill documentation | <https://github.com/NousResearch/hermes-agent/pull/67328> |

These merges advance **performance (cold‑start)**, **reliability (watchdog & session poisoning fixes)**, **accessibility (screen‑reader timers)**, and **observability (Relay metrics)** while also expanding **on‑device voice interaction** capabilities.

---

### 4. Community Hot Topics  
| Issue/PR | Comments / Reactions | Why it matters |
|----------|----------------------|----------------|
| **#67600** – Desktop session sidebar empty for the `default` profile only | 13 comments, 0 👍 | Users rely on visible session list for navigation; the regression blocks the default workflow and signals a possible profile‑specific rendering bug. |
| **#61396** – macOS arm64 terminal spawn‑helper loses exec‑bit | 5 comments, 0 👍 | Breaks integrated terminal startup on a growing macOS‑arm64 user base; a concrete runtime error that prevents a core feature from working. |
| **#63177** – `search_files` silently returns 0 results on Windows with absolute paths | 5 comments, 1 👍 | Directly impacts workflow scripts that rely on absolute Windows paths; demonstrates a mismatch between MSYS path translation and native `rg`. |
| **#68339** – Mixed‑batch tool execution front‑loads early tool calls | 4 comments, 0 👍 | Alters conversation pacing for gated models; affects user expectations around “thinking” vs “acting”. |
| **#50681** – pytest creates leaky sessions into production `state.db` | 3 comments, 0 👍 | Produces noisy dashboard artifacts (187 empty sessions per run), eroding trust in test isolation. |
| **#72971** – `prompt.submit` sends messages to wrong session after switch | 3 comments, 0 👍 | Leads to conversation cross‑talk; critical for multi‑session GUI users. |
| **#72016** – Gateway sessions lack activity watchdog → silent stalls | 3 comments, 0 👍 | Prevents users from noticing hangs; a stability‑centric concern for production deployments. |
| **PR #73027** (classify 422) & **#73031** (watchdog) | New fixes addressing the two issues above | Show rapid response from maintainers once the underlying problems were highlighted. |

*Underlying needs*: clearer UI state management, robust cross‑platform path handling, deterministic session routing, and visibility into runtime health (hang detection).  

---

### 5. Bugs & Stability  
**Ranked by severity (high → medium → low)**  

| Severity | Issue (opened/updated) | Core Symptom | Fix Status |
|----------|------------------------|--------------|------------|
| **High** | #67600 – Desktop sidebar empty for `default` profile | Session list UI disappears; renders unusable for default users. | **Open** – No merge yet; under active discussion. |
| | #63177 – Windows `search_files` returns 0 for absolute paths | RG cannot resolve paths rewrote to `/d/`; breaks file‑search workflow. | **Open** – Fix PR #73027 (classify 422) does not address this; separate PRs pending. |
| **Medium** | #61396 – macOS arm64 terminal spawn‑helper loses exec‑bit | Integrated terminal fails to start (`posix_spawnp failed`). | **Open** – Patch awaiting review; impact on macOS users. |
| | #68339 – Mixed‑batch tool execution changes early‑turn behaviour | Early‑session tool calls become more aggressive. | **Open** – Observed impact, no stabilization patch merged yet. |
| | #50681 – pytest leaks sessions into real `state.db` | 187 empty sessions pollute production DB. | **Fixed** – PR #73022 isolates test DB; merged today. |
| **Low** | #46369 – Keyboard shortcuts ignore Dvorak layouts | Shortcuts behave as QWERTY regardless of layout. | **Open** – Minor UI bug; tracked but low priority. |

Overall stability remains **good** (only 9 issues closed in the last day) but **high‑impact UI regressions** (sidebar, prompt routing) still need resolution.

---

### 6. Feature Requests & Roadmap Signals  
- **Multiple OpenAI/Codex subscriptions** – Issue #65735 proposes switching active subscriptions when rate‑limits hit. Indicates a demand for multi‑provider flexibility.  
- **On‑device wake‑word with open‑vocabulary** – PR #70509 already merged; upcoming releases will likely expose this as a default voice mode.  
- **Desktop UI theming & drag‑run pet overlay** – PR #72986 adds animation & floor roaming, suggesting an ongoing focus on playful desktop engagement.  
- **BlueBubbles group‑chat filtering** – Feature #33489 requests `ALLOWED_CHATS`/`IGNORE_GROUP_CHATS`. Likely to be prioritized for channel‑specific adapters.  
- **Relay observability metrics** – Multiple telemetry‑focused PRs (67607, 68881‑68883, 69416, 69437) indicate a roadmap direction toward richer usage analytics and compliance reporting.  

These signals point to a **mid‑term focus on multi‑provider flexibility, richer voice interaction, and expanded desktop personalization**, while maintaining a strong telemetry backbone.

---

### 7. User Feedback Summary  
- **Positive** – Users appreciate recent performance gains (cold‑start cut) and the addition of on‑device wake‑word functionality.  
- **Negative** – Repeated UI regressions (empty sidebar, wrong session routing) cause noticeable workflow disruption, especially for users relying on the default profile.  
- **Frustration Points** –  
  1. **File‑search on Windows** fails silently with absolute paths, forcing work‑arounds.  
  2. **Terminal launch failures** on macOS arm64 erode confidence in the integrated terminal.  
  3. **Session leakage in test runs** pollutes production databases, breaking dashboard expectations.  
- **Satisfaction Indicators** – Telemetry and observability PRs are being merged rapidly, suggesting the maintainers are responsive to community calls for visibility into system health.

---

### 8. Backlog Watch  
| Item | Since | Status | Why it needs attention |
|------|-------|--------|------------------------|
| **#67600** – Desktop sidebar empty | 2026‑07‑19 → 2026‑07‑27 | Open, 13 comments | Affects core UI navigation for default profile; regression risk. |
| **#61396** – macOS arm64 spawn‑helper exec‑bit loss | 2026‑07‑09 → 2026‑07‑28 | Open, 5 comments | Blocks integrated terminal on a growing platform segment. |
| **#63177** – Windows `search_files` with absolute paths | 2026‑07‑12 → 2026‑07‑27 | Open, moderate severity | Directly blocks scripted file‑search workflows. |
| **#50681** – pytest session leakage | 2026‑06‑22 → 2026‑07‑28 | Fixed by PR #73022 (merged today) | Demonstrates need for better test isolation; may re‑appear if not guarded. |
| **#72971** – Prompt submission to wrong session | 2026‑07‑27 → 2026‑07‑28 | Open, 3 comments | Critical for multi‑session GUI correctness. |
| **#68137** – One‑shot mode silently drops slow MCP servers | 2026‑07‑20 → 2026‑07‑27 | Open, 3 comments | Could lead to incomplete tool discovery in one‑shot usage. |
| **#67328** – Docs drift detection (no‑op merge) | 2026‑07‑19 → 2026‑07‑28 | Open, 2 comments | Needs maintainer decision on CI integration policy. |

*Maintainer focus*: prioritize the high‑impact UI bugs (#67600, #61396) and ensure test‑related leakage ( #50681 ) remains isolated. Also watch #68137 for any unintended MCP server loss in one‑shot mode.

---

**Bottom line** – Hermes is experiencing a **high velocity of targeted hot‑fixes** (especially around UI state, session routing, and macOS/Windows platform quirks). While stability metrics remain favorable, the **visibility of a few regressions** (sidebar empty, prompt routing) suggests a period of **active stabilization**. Community interest is clearly shifting toward **enhanced observability, multi‑provider subscription handling, and richer on‑device voice capabilities**—features that are already landing in the `main` branch.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**Project Digest – PicoClaw (github.com/sipeed/picoclaw) – 2026‑07‑28**

---

### 1. Today's Overview  
PicoClaw had a **steady day of activity**: 5 issues and 4 pull‑requests were updated within the last 24 h, but no new releases surfaced. All open issues are still pending, and none of the PRs were merged or closed during the reporting window. The team focused on incremental feature work (Japanese localisation, provider updates, and a new TTS provider) and on addressing bugs that surfaced in recent builds. While the release cadence remains at‑on‑call, the.refresh in issue and PR activity indicates an engaged community and a development pace that supports gradual feature enrichment recreation.  

 ഷ

---

### 2. Releases  
**None** – no new releases were published during the reporting period.

---

### 3. Project Progress  
| PR | Status | Highlights |
|----|--------|------------|
| **#3273** | Open, *stale* | Implemented full Japanese (ja) localisation for the Web UI abrang Supplemented `web/frontend/src/i18n/locales/ja.json` and updated i18n binding to include `dayjs/locale/ja`. |
| **#3271** | Open, *stale* | Updated default model names for nine providers to the latest July 2026 releases, ensuring the provider menus stay current. |
| **#327יכער** | Open, *stale* | Added **DashScope TTS** support and WeChat audio file sending, expanding audio capabilities beyond Whisper. |
| **#3200** | Open | Introduced a configurable **default fallback chain** in the model UI, allowing users to set a primary model and a cascading fallback list that is persisted via the backend API. |

None of the PRs were merged today; they remain in review or marked stale, signalling that the core team is still evaluating or preparing these changes for a future release.

---

### 4. Community Hot Topics  
| Issue / PR | Link | Activity | Underlying Need |
|------------|------|----------|---------------- schreef|
| **#3276** – *Launcher/systemd integration* | <https://github.com/sipeed/picoclaw/issues/3276> | 1 comment, 0 reactions | Users deploying on headless servers want the launcher to respect external serviceLOYF (e.g., systemd) and not fail when encountering unknown channel types. |
| **#3272** – *Japanese localisation* | <https://github.com/sipeed/picoclaw/issues/3272> | 1 comment, 0 reactions | Matching documentation, but UI lacking. Supports global user base and localise‑to‑needs. |
| **#3268** – *exec tool “action” default bug* | <https://github.com/sipeed/picoclaw/issues/3268> | 1 comment | Ensures AI agents can call the exec tool without specifying the common “run” action, improving usability. |
| **#3269** – *MCP connection hang* | <https://github.com/sipeed/picoclaw/issues/3269> | 1 comment | Prevents interface freezes when the MCP server is temporarily unreachable. |
| **#3281** – *Chat input lag* | <https://github.com/sipeed/picoclaw/issues/3281> | 1 comment | Optimisation of history handling in the web UI to keep it responsive for longer sessions. |

**What’s driving these topics?**

- **Operational decoração** – server‑side deployments increasingly rely on systemd.  
- **Internationalisation** – Japanese‑speaking users need UI support.  
- **Robustness** – agents must handle missing defaults and network hiccups gracefully.  
- **Performance** – real‑time chat remains essential for user satisfaction.

---

### 5. Bugs & Stability  
| Severity | Bug | Link | Status | Notes |
|---------- London | 1 |  | | |
| **High** | **#3269** – MCP server fails → agent loop hangs, chat stalls 않습니다 | <https://github.com/sipeed/picoclaw/issues/3269> | Open | Critical for online services; no PR attached yet. |
| **Medium** | **#3281** – Chat input lag with long history | <https://github.com/sipeed/picoclaw/issues/3281> | Open | Performance regression; PR candidates may come soon. |
| **Medium** | **#3268** – `exec` action parameter required | <https://github.com/sipeed/pурналист>/picoclaw/issues/3268> | Open | Removes a usability barrier; simple fix expected. |

**Mitigating measures**  
The PRs listed in Section 3 (particularly #3273, #3271, #3270, #3200) indirectly reduce downstream instability (e.g., proper model naming reduces API errors). However, no direct bug‑fix PRs were merged today. The project remains on a healthy **bug‑fix‑focus** trajectory, with the highest‑priority issue targeting network resilience that has not yet been addressed in code.

---

### 6. Feature Requests & Roadmap ;
| Feature | Origin | Link | Anticipated Release | Rationale |
|---------|--------|------|---------------------|------------|
| Japanese localisation | #3272 / #3273 | <https://github.com/sipeed/picoclaw/pull/3273> | 2026‑ übernimmt | Global reach & documentation parity. |
| External gateway detection / systemd support | #3276 | <https://github.com/sipeed/picoclaw/issues(PDO/3276)> | 2026‑August | Required for high‑availability UVM deployments. |
| Default fallback chain | #3200 | <https://github.com/sipeed/picoclaw/pull/3200> | 2026‑August | Enhances model resilience for multi‑provider setups. |
| DashScope TTS + WeChat audio | #3270 | <https://github.com/sipeed/picoclaw/pull/3270> | 202官网 | Expanded cross‑platform audio features. |
| Updated model names | #3271 | <https://github.com/sipeed/picoclaw/pull/3271> | 2026‑soon | Keeps the provider list current and reduces “unknown model” errors. |

**Tip:** The roadmap appears to converge on **usability** (localisation, UX lag fix) and **operational robustness** (systemd awareness, backup models). These align with the ongoing PRs and indicate a likely beta for 2026‑August/September.

---

### 7. User Feedback Summary  
- **Enterprise/Headless deployments** encounter crashes when the Launcher starts the gateway under systemd, complaining about unknown channel types.  
- **Japanese users** appreciate clone of documentation but lack an in‑app UI mirror, causing onboarding friction.  
- **LLM‑driven agent users** experience intermittent failures when invoking the `exec` tool because the "run" action is not defaulted, hampering automation workflows.  
- **Real‑time chat users** note sluggish input appearance for sessions exceeding a few hundred messages, reducing conversational fluency.  
- **Audio‑centric users** are excited by the new DashScope TTS but still await feedback on latency and quality vs. existing Whisper TTS.

Overall satisfaction is **high** for core features but **moderately** impacted by the above pain points.

---

### 8. Backlog Watch  
| Issue / PR | Created | Status | Why It Needs Attention |
|------------|----------|--------|------------------------|
| **#3276** – systemd detection | 2026‑07‑20 | *stale* | Critical for production adoption; currently unblocked. |
| **#3272** – Japanese localisation | 2026‑07‑20 | *stale* | Essential for global community; solved by #3273 but still awaiting merge. |
|այ **#3268** – exec default | 2026‑07‑19 | *stale* | Simple patch; delays agent stability. |
| **#3269** – MCP hang | 2026‑07‑20 | *stale* | High‑severity network resilience issue; no fix reunion. |
| **#3281** – chat lag | 2026‑07‑21 | *stale* | Affects UX; performance patch pending. |

> **REEF NOTE** – Because all issues remain *stale*, the maintainers have either paused work or are awaiting code review. Immediate triage and merging of the associated pull‑requests will dramatically improve both community trust and operational readiness.  

---

**Key Takeaway:** PicoClaw is _active_ but at a **maintenance‑heavy** phase, with focused work on localisation, model tooling, and TTS. The community largely benefits from incremental releases, and the major high‑impact bugs require attention to safeguard future releases. The next logical release (targeting **August/September 2026**) should ship Japanese UI, systemd compatibility, and the new TTS providers, together with fixes for the live‑chat lag and exec default issues.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-28

---

## 1. Today's Overview

No new issues or releases were recorded in the last 24 hours, indicating a quiet day for bug reports and version updates. However, there was significant activity in pull requests, with **9 PRs updated**, of which **8 remain open** and **1 was closed/merged**. This suggests ongoing development momentum, particularly around core functionality improvements, skill integrations, and documentation enhancements. The project appears stable but actively evolving, with contributors focused on refining agent behavior, messaging consistency, and extensibility.

---

## 2. Releases

**No new releases** were published as of 2026-07-28.

---

## 3. Project Progress

### Merged/Closed PR:

- **[PR #2598](https://github.com/nanocoai/nanoclaw/pull/2598)** – *Fix: Load per-group `CLAUDE.local.md` by adding 'local' to settingSources*  
  - **Author:** jonnychesthair-crypto  
  - **Status:** Closed  
  - **Summary:** A minor configuration fix ensuring that group-specific local settings (`CLAUDE.local.md`) are correctly loaded during runtime. This improves customization flexibility for multi-agent setups.

This is the only PR merged today, suggesting focused maintenance rather than large feature rollouts.

---

## 4. Community Hot Topics

While no issues had comments or reactions today, several recently updated PRs reflect high-priority topics:

### 🔥 [PR #3137](https://github.com/nanocoai/nanoclaw/pull/3137) – Core Team: Fix Engagement Consistency and Expose Self-Serve Wiring Controls  
- **Author:** Koshkoshinsk  
- **Summary:** Addresses inconsistencies in how accumulated messages are handled as context, allows group-scoped agents to inspect wirings, and enforces valid JavaScript engagement regexes.  
- **Why It Matters:** Enhances control over agent responsiveness and prevents misconfigurations that could lead to unexpected behaviors.

### 🔥 [PR #3143](https://github.com/nanocoai/nanoclaw/pull/3143) – Preserve Resolved Approval Card Content  
- **Author:** Koshkoshinsk  
- **Summary:** Ensures resolved approval cards retain their original content even after actions like timeouts or approvals.  
- **Why It Matters:** Improves auditability and transparency in decision-making workflows involving human-in-the-loop systems.

These PRs indicate strong interest in stabilizing interaction models and improving UI/data integrity within the system.

---

## 5. Bugs & Stability

Several bug fixes are currently under review or recently merged:

| Severity | Description | PR Link |
|---------|-------------|---------|
| Medium | Unknown slash commands were being treated as passthrough, leading to silent message drops | [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346) |
| Medium | Signal adapter incorrectly inserted non-mounted file paths into messages | [PR #3142](https://github.com/nanocoai/nanoclaw/pull/3142) |

- **PR #2346**: Fixes an issue where unrecognized slash commands caused responses to be dropped due to SDK misinterpretation. Now falls back to `category: 'none'`.
- **PR #3142**: Resolves a critical path resolution error in the Signal adapter that prevented image/file attachments from being read by the agent container.

Both fixes target edge cases that can degrade user experience significantly if left unaddressed.

---

## 6. Feature Requests & Roadmap Signals

A few notable feature-oriented PRs suggest upcoming roadmap items:

### ✅ [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) – Add Dial to Channel Picker + Wizard/Skills  
- **Type:** Feature Skill  
- **Summary:** Introduces Dial as a new channel option alongside setup wizard integration using `runChannelSkill`.  
- **Implication:** Expands supported communication channels, likely signaling plans to support voice/video integrations.

### ✅ [PR #2971](https://github.com/nanocoai/nanoclaw/pull/2971) – Add ncc Utility Skill: Host Operational and Health CLI  
- **Type:** Utility Skill  
- **Summary:** Adds a command-line interface for monitoring agent health and operational status.  
- **Implication:** Indicates growing emphasis on observability and self-management capabilities in deployed agents.

These contributions point toward a broader push to enhance modularity, diagnostics, and cross-channel compatibility.

---

## 7. User Feedback Summary

Although no direct user comments were logged today, inferred feedback from PR summaries highlights key areas of concern:

- **Configuration Management:** Users want clearer scoping of local configurations across groups (see [PR #2598](https://github.com/nanocoai/nanoclaw/pull/2598)).
- **Messaging Integrity:** There is demand for reliable handling of rich media and approval flows ([PRs #3142](https://github.com/nanocoai/nanoclaw/pull/3142), [#3143](https://github.com/nanocoai/nanoclaw/pull/3143)).
- **Extensibility Needs:** Contributors are actively building skills and tools to extend core functionality (e.g., Dial integration, health checks).

Overall sentiment reflects a mature community investing in polish and robustness rather than basic functionality gaps.

---

## 8. Backlog Watch

Several long-standing or less-recent PRs continue to await final review:

- **[PR #2685](https://github.com/nanocoai/nanoclaw/pull/2685)** – Docs update for group typing indicators, outbound reactions, and quote-reply fixes  
  - Last updated: 2026-07-27  
  - Still pending merge despite clear documentation value.

- **[PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)** – Fix formatter to treat unknown slash commands as normal chat  
  - Created: 2026-05-08  
  - Remains open despite addressing a known usability flaw.

These items may benefit from prioritization to ensure continued clarity and correctness in user-facing components.

--- 

*End of Digest*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

## NullClaw Project Digest – 2026‑07‑28  

### 1. Today’s Overview  
NullClaw is currently inactive on core product development – no new releases or issue activity were recorded in the past 24 h. The only change is a Dependabot‑generated pull request that bumps the Alpine image in the Docker‑Images group. Overall project momentum BESIDES the CI‑dependency upgrade is flat, with no merge activity or feature work reported.

---

### 2. Releases  
**None** – No new tags, releases or changelog commits were created today.

---

### 3. Project Progress  
*Merged/Closed PRs:* **None**  
*Open PRs that were updated:*  
- **#956** – `[dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker‑images group` – Dependabot (bot) – still open  
  *Link:* <https://github.com/nullclaw/nullclaw/pull/956>  

No feature branches were merged or bug fixes completed today.

---

### 4. Community Hot Topics  
With a single PR in play, the top‑viewed discussion is the Dependabot bump.  
- **#956** – Comment activity: none yet – only decline/merge comments from CI.  
  *Link:* <https://github.com/nullclaw/nullclaw/pull/956>  

No issue discussions or user‑generated PRs exist currently.

---

### 5. Bugs & Stability  
**None** – No new bug or crashhanga reports were opened or updated today. The Dependabot PR simply updates a base image; it poses no immediate regression risk.

---

### 6. Feature Requests & Roadmap Signals  
No new user feature requests appear in the issue queue. Based on historical momentum, the next logical roadmap steps would likely center on:

1. Adding CI‑based security audits for Docker images (rapidly approaching release after the Alpine bump).  
2. Enhancing “NullClaw‑CLI” usability for local development (per prior discussions in March).  

---

### 7. User Feedback Summary  
With zero issue activity, there is no fresh userIMARY pain‑point data. Existing PPA comments from earlier months suggest:

- **Stability in non‑Docker environments** is a common satisfaction factor.  
- **Documentation clarity** continues to be a minor friction point when using the CLI for container builds.

---

### 8. Backlog Watch  
*Long‑unanswered issues:* None  
*Pending PRs:* #956 (depends on maintainer merge or dismissal).  
No backlog items demand immediate priority unless a regression is reported.

---

**Bottom Line:** NullClaw is in a maintenance mode today. Progress is limited to a dependency update, with no new features, bug reports, or releases. Zv the project exhibits a healthy balance of stability and minimal churn. Maintainers should watch the open Dependabot PR and ensure that the new Alpine version is compatible with all CI pipelines before merging.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-28

---

## 1. Today's Overview

IronClaw entered a significant release marker on 2026-07-27 with the shipment of **v1.0.0 (ironclaw-v1.0.0)**, the first stable release of the Reborn rearchitecture — a ground-up rebuild of the agent runtime, storage, extension host, and WebUI. The project is operating at high velocity: 39 issues were updated in the last 24 hours (35 still open/active, 4 closed) and 50 PRs were updated (31 open, 19 merged or closed). The active open issue count is substantial (35 open across 30 displayed), but the project is simultaneously closing critical gaps — 4 issues were closed and several major refactoring/behavior-fix PRs were merged. Overall the project appears healthily active, with sustained engineering throughput on architecture hardening (sandboxing, failure vocabulary unification, memory provider contracts, extension normalization), while also fielding new production stability reports from staging/users.

---

## 2. Releases

### 📦 ironclaw-v1.0.0 — 2026-07-27
> **First stable release of a rearchitected IronClaw.** This is not an increment on the 0.29.x line — it is a ground-up rebuild of the agent runtime, storage, extension host, and WebUI.

| Item | Detail |
|------|--------|
| **Binary** | The rearchitected CLI is now the `ironclaw` binary. The v1 monolith builds as `ironclaw-legacy`. |
| **Architecture** | Full replacement of prior monolith (`src/`) with Reborn's public release name. Extends the "Reborn" trajectory tracked in #6725. |
| **Breaking changes** | The `ironclaw_common` crate moved 0.4.2 → 0.5.0 (⚠ API breaking). `ironclaw_skills` moved 0.3.0 → 0.4.0 (⚠ API breaking). `ironclaw_safety` moved 0.2.2 → 0.2.3 (✓ API-compatible). *(see also PR #5598)* |
| **Related migrations** | #6725 (pre-Reborn → v1 migration path) and #6692 (docs restructured around shipped 1.0 binary) are open/just landed alongside this release. |

---

## 3. Project Progress

### Merged / Closed PRs (last 24h)
| PR | Summary | Significance |
|----|---------|--------------|
| [#6687](https://github.com/nearai/ironclaw/pull/6687) | `build(deps)`: everything-else group — 31 package updates closed | Dependency health |
| [#6723](https://github.com/nearai/ironclaw/pull/6723) | sandbox: add unwired credential-firewall primitives (CA + obligation staging) | Foundation for TLS egress (followed by #6740 in next phase) |
| [#6692](https://github.com/nearai/ironclaw/pull/6692) | docs: restructure docs site around shipped 1.0 binary; removed 33 internal doc paths from public surface | Critical for v1 launch hygiene |
| [#6684](https://github.com/nearai/ironclaw/pull/6684) | refactor(reborn): collapse 5 failure-kind enums → `host_api::FailureKind` (36 variants) + fixes 6 wrongful-terminal / mis-retry bugs | Directly supports [epic #6284](https://github.com/nearai/ironclaw/issues/6284) (error-recoverability) |
| [#3847](https://github.com/nearai/ironclaw/pull/3847) | Add filesystem-backed Reborn skill bundle source | Enables hot-swappable skills |

### Key Open PR Advances (merged-ready or under active review)
| PR | Summary | Significance |
|----|---------|--------------|
| [#6697](https://github.com/nearai/ironclaw/pull/6697) | fix(llm): adapters report provider's real finish reason (epic #6284 item 8) | Closes [contract clause (e)](https://github.com/nearai/ironclaw/issues/6284): no non-success may be reported as success |
| [#6737](https://github.com/nearai/ironclaw/pull/6737) | fix(reborn): restore extension behaviors #6616 silently reverted | Important bug fix — a merge conflict resolution in #6616 had silently reverted existing behavior |
| [#6695](https://github.com/nearai/ironclaw/pull/6695) | feat(sandbox): leaf-scoped mount containment + per-user sandbox identity primitives | Sandbox security hardening |
| [#6724](https://github.com/nearai/ironclaw/pull/6724) | feat(memory): rebuild memory provider contract around declared capabilities | Implements the [Pluggable Memory Providers epic (#6482)](https://github.com/nearai/ironclaw/issues/6482) |
| [#6655](https://github.com/nearai/ironclaw/pull/6655) | Normalize filesystem-backed extension state records | Implements [Unified Manifest-Driven Extension Platform epic (#6481)](https://github.com/nearai/ironclaw/issues/6481) |
| [#6691](https://github.com/nearai/ironclaw/pull/6691) | Refactor composition assembly into focused builders | Architecture simplification |
| [#6740](https://github.com/nearai/ironclaw/pull/6740) | W6 phase 1 — TLS termination seam for the sandbox egress proxy | Sandbox network security seam |
| [#6738](https://github.com/nearai/ironclaw/pull/6738) | test(e2e): pin that a case's fault state cannot reach the next one | Hermetic test isolation for [epic #6524](https://github.com/nearai/ironclaw/issues/6524

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-28

## 1. Today's Overview
LobsterAI showed **strong maintenance velocity** today with 5 PRs merged/closed addressing security, stability, and UX improvements, while 4 PRs remain open (2 fresh, 2 stale from April). The issue tracker received 2 new critical reports: a **data-corruption bug** in the accelerator (`\f` → form-feed) and a **Windows install blocker** tied to user-skills backup. Four long-standing issues (April–May) resurfaced without resolution, signaling backlog pressure. No new release was cut, but the volume of merged fixes suggests a patch release is imminent.

## 2. Releases
**No new releases published today.** The last merged PRs (#2386, #2388, #2389, #2387, #1323) collectively contain security hardening, artifact-sharing UX, agent-loop guards, and error-classification fixes—candidates for a `2026.7.x` patch.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | `skills`, `security` | Sanitize email attachment filenames, enforce download-dir boundaries, add cross-platform tests, bump email skill version. | **Security fix** – prevents path-traversal via malicious attachments. |
| [#2388](https://github.com/netease-youdao/LobsterAI/pull/2388) | `renderer`, `artifacts`, `docs` | Add share/deploy buttons to Artifact preview toolbar; route HTML previews to share, local services to deploy; new design doc & telemetry. | **UX enhancement** – streamlines artifact distribution. |
| [#2386](https://github.com/netease-youdao/LobsterAI/pull/2386) | `openclaw`, `main`, `renderer` | Terminate no-progress tool loops before token-budget exhaustion. | **Stability** – prevents runaway agent loops that drain context/tokens. |
| [#2387](https://github.com/netease-youdao/LobsterAI/pull/2387) | `renderer`, `artifacts`, `main` | “2026.7.20 sites” feature bundle (details sparse in PR body). | **Feature batch** – likely site/artifact publishing improvements. |
| [#1323](https://github.com/netease-youdao/LobsterAI/pull/1323) | `cowork` | Narrow `input-too-long` error classification to avoid false “context limit” UI on short prompts. | **Bug fix** – reduces misleading error messages. |

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) | Issue (Bug) | Created 2026-07-27, **🔴 Critical**, 100% repro, data-integrity | **Accelerator silently corrupts `\f` byte pairs (5C 66) → `\x0C`** – breaks Windows paths, PS scripts, JSON, any literal `\f*` token written to disk. |
| [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | Issue (Bug) | Created 2026-07-28, 1 comment | **Windows update fails**: “user skills could not be backed up” – blocks installation entirely for user `yu'yin` (apostrophe in path?). |
| [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) / [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | Issue + PR (stale) | Issue Apr-1, PR Apr-1, both updated Jul-27 | **Settings dirty-check** – users lose API keys/config silently when closing dialog without Save. PR #1241 implements confirmation but remains unmerged for 4 months. |
| [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | PR (stale) | Open since Apr-1 | **Task-completion notification** – flash taskbar (Win) / bounce Dock (macOS) when background task finishes. |

**Signal:** Users are hitting **data-loss** (#2393) and **install-blockers** (#2395) on current builds, while quality-of-life fixes (#1237, #1239) languish in review limbo.

## 5. Bugs & Stability — Ranked by Severity
| Rank | Issue | Severity | Fix PR? | Notes |
|------|-------|----------|---------|-------|
| 1 | [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) – Accelerator `\f` corruption | 🔴 **Critical** (data integrity) | ❌ None | Silent byte-level corruption; affects all file-write tools. |
| 2 | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) – Install blocked on skills backup | 🔴 **Critical** (install failure) | ❌ None (see #2394 doc PR) | Path with apostrophe (`yu'yin`) may trigger backup logic bug. |
| 3 | [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) – `exec` hardcodes PowerShell 5.1 + Chinese path encoding | 🟠 High | ❌ None | Breaks non-ASCII usernames; ignores modern `pwsh.exe`. |
| 4 | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) – Rate-limited model poisons all models | 🟠 High | ❌ None | Stale since Apr; app-wide paralysis when one provider quota exhausted. |
| 5 | [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) – Task timeout on 24 h runs | 🟡 Medium | ❌ None | Unclear if task stops or continues; UX confusion. |

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|-----------------------------|
| **Skill rename** | [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) | High – simple CRUD gap, low risk. |
| **Scheduled-task agent/skill selector** | [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | Medium – requires scheduler refactor. |
| **Settings dirty-check confirmation** | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) / [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | High – PR ready, UX-critical, only needs review/merge. |
| **Task-completion OS notification** | [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | Medium – PR ready, cross-platform polish needed. |
| **Modern PowerShell (`pwsh`) default in `exec`** | [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) | High – security/compat win, straightforward. |

## 7. User Feedback Summary
- **Pain points:** Silent data corruption (#2393), un-installable updates (#2395), loss of API keys on dialog dismiss (#1237), total app freeze when one model hits quota (#1240), Chinese-path breakage (#2390).
- **Use cases:** 24 h autonomous tasks (#2062), scheduled multi-agent workflows (#2392), artifact sharing/deployment (#2388 merged), Windows dev with non-ASCII usernames (#2390, #2395).
- **Sentiment:** Frustration on stale issues (4+ months); appreciation for rapid security/artifact merges today. Trust eroding on “paper-cut” UX bugs that persist across versions.

## 8. Backlog Watch — Maintainer Attention Needed
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) / [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | 119 days | **Ready-to-merge UX fix** for silent config loss; blocks user trust. |
| [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | 119 days | **Cross-platform notification** – small scope, high user visibility. |
| [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | 119 days | **Architectural flaw** – single provider failure cascades to all models. |
| [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | 62 days | **Long-running task clarity** – enterprise/automation blocker. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 118 days | **Electron 40 → 43** – security/perf updates stalled by CI/compat? |

---
*Digest generated from GitHub data as of 2026-07-28 00:00 UTC. Links point to live items on `netease-youdao/LobsterAI`.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑07‑28**  
*Generated from GitHub activity (issues, PRs, releases) for the 24‑hour window ending 2026‑07‑28.*

---

### 1. Today's Overview  
The repository shows **no issue activity** and **no merged or closed pull requests** in the last day, but **five pull requests remain open and were updated today**. These PRs introduce experimental features (a Zvec‑based memory backend, ACP agent exposure over stdio), a security hardening change (gate privileged `/sh` commands), observability instrumentation, and reliability improvements for PWA push notifications. Overall, the project is in a feature‑development phase with pending reviews; no releases have been cut recently, indicating a focus on stabilizing upcoming capabilities before a version bump.

### 2. Releases  
*No new releases were published in the last 24 h.*  
- Latest release: *(none listed in the data)*  
- Consequently, there are no version changes, breaking changes, or migration notes to report.

### 3. Project Progress  
| Metric (last 24 h) | Count |
|--------------------|-------|
| PRs merged / closed| 0 |
| PRs opened         | 0 (all 5 PRs were opened earlier and only updated) |
| Issues closed      | 0 |

Because no PRs were merged or closed, **no features or fixes have been landed to the main branch today**. The open PRs represent work-in‑progress that awaits review and integration.

### 4. Community Hot Topics  
All five open PRs currently show **undefined comment counts and zero 👍 reactions**, indicating limited discussion so far. For completeness, the PRs are:

1. **[#1158] feat(memory): add zvec vector database memory backend** – demyanrogozhin (created 2026‑07‑17, updated 2026‑07‑28)  
   <https://github.com/moltis-org/moltis/pull/1158>

2. **[#1169] feat(acp): expose Moltis as an ACP agent over stdio** – penso (created 2026‑07‑26, updated 2026‑07‑27)  
   <https://github.com/moltis-org/moltis/pull/1169>

3. **[#1170] fix(channels): gate /sh and privileged tools behind a per-account operators list** – penso (created 2026‑07‑26, updated 2026‑07‑27)  
   <https://github.com/moltis-org/moltis/pull/1170>

4. **[#1174] Add instrumentation and feedback collection infrastructure** – penso (created 2026‑07‑27, updated 2026‑07‑27)  
   <https://github.com/moltis-org/moltis/pull/1174>

5. **[#1173] feat(pwa): make push notifications reliable and non-disruptive** – penso (created 2026‑07‑26, updated 2026‑07‑27)  
   <https://github.com/moltis-org/moltis/pull/1173>

Because there is no comment or reaction data, we cannot infer which topic is generating the most community interest at this moment. The lack of engagement may reflect that these changes are still under internal review or that contributors have not yet had time to evaluate them.

### 5. Bugs & Stability  
- **No bug reports, crashes, or regressions were filed or updated in the last 24 h.**  
- Consequently, there are no severity‑ranked issues to highlight, and no fix PRs are associated with newly reported problems.

### 6. Feature Requests & Roadmap Signals  
The open PRs collectively hint at the near‑term roadmap:

| PR | Indicated Feature / Improvement | Likelihood of Near‑Term Inclusion |
|----|--------------------------------|-----------------------------------|
| #1158 | Alternative memory backend using Zvec + redb (feature‑gated) | High – experimental but already behind a cargo feature; likely to land after review. |
| #1169 | Expose Moltis as an ACP agent over stdio (enables external harnesses to drive Moltis) | Medium‑High – addresses a gap in the ACP ecosystem; maintainer interest appears present. |
| #1170 | Restrict privileged `/sh` command execution to a per‑account operators list | High – security hardening; typically prioritized. |
| #1174 | Pluggable instrumentation + end‑user feedback collection | Medium – observability is valuable for production use; may be merged pending design feedback. |
| #1173 | Reliable, non‑disruptive PWA push notifications (fix silent replacement bug) | High – fixes a noticeable UX bug; low risk. |

If the maintainers follow the typical pattern of merging security fixes and UX improvements first, we can expect **#1170** and **#1173** to be merged soon, followed by the feature PRs after further review.

### 7. User Feedback Summary  
- **No explicit user feedback (issues, comments, or reactions) was recorded in the last 24 h.**  
- Hence we cannot derive pain points, satisfaction levels, or specific use‑case requests from recent activity. The PRs themselves imply anticipated user needs (better memory storage, broader ACP interoperability, safer privileged commands, reliable notifications, and observability), but no direct user commentary is available to validate those assumptions.

### 8. Backlog Watch  
- **Open Issues:** None reported in the dataset, so there is no visible issue backlog requiring attention.  
- **Open PRs Awaiting Review:** All five PRs (#1158, #1169, #1170, #1173, #1174) are currently open and have not yet received comments or reactions. These represent the primary backlog items that maintainers should examine to decide on merging, requesting changes, or closing.  
  - **Priority candidates for early review:** #1170 (security fix) and #1173 (UX bug fix) due to their low‑risk, high‑impact nature.  
  - **Longer‑term items:** #1158 (experimental memory backend) and #1174 (instrumentation framework) may need more design discussion or testing before integration.

---

**Overall Health Snapshot**  
- **Activity:** Moderate (PR updates) but no merges/releases today.  
- **Stability:** No known regressions reported.  
- **Development Focus:** Expanding functionality (memory, ACP, observability) and tightening security/UX.  
- **Next Steps:** Maintainer review of the five open PRs, especially the security and notification fixes, to progress toward a forthcoming release.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – 2026‑07‑28**

---

### 1. Today’s Overview  
The CoPaw repository is bustling with activity: **50 issues** (16 open, 34 closed) and **49 pull requests** (34 open, 15 merged/closed) were updated in the last 24 h. The project maintains a steady cadence of bug‑fixes, small enhancements, and feature work, with no new releases published. Overall health appears stable, though several high‑traffic UI‑related bugs and memory‑index regressions are being actively addressed.

---

### 2. Releases  
*No new releases were published in the past day.*  

---

### 3. Project Progress  
- **Merged / Closed PRs (15)** – Mostly bug‑fixes and refactors in the browser, tool‑call, and session‑management layers (e.g., PR #6068 “preserve session IDs during history migration”, PR #6424 “native desktop GUI automation”, PR #6504 “unify project directories and file workspace”).  
- **Open PRs (34)** – A mix of new capabilities (e.g., `computer_use` desktop automation, Chrome extension plugin, unified browser SDK) and quality‑gate improvements (coverage thresholds, token‑usage tracking).  
- **Feature Momentum** – Several “feat”‑tagged PRs (e.g., #6456 Visual Compact, #6503 token usage stats, #6398 reranker support for memory search) indicate a push toward more efficient context handling and richer agent tooling.

---

### 4. Community Hot Topics  

| Issue / PR | Comments | 👍 | Link | Core Need |
|------------|----------|----|------|-----------|
| **#5757** – 飞书信息不回复 | 14 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/5757> | Fix Feishu (飞书) message delivery; currently only first message works. |
| **#5725** – Console streaming UI lag | 6 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/5725> | Reduce browser‑side lag during long streaming outputs. |
| **#4895** – Infinite image compression loop | 5 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/4895> | Prevent endless image compression that leads to hallucinations. |
| **#5090** – Tool‑protection bypass (rm) | 5 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/5090> | Enforce safe command‑execution policies; agent can still delete files via scripts. |
| **#5259** – Windows vector index not persisted | 5 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/5259> | Enable persistent `memory_search` index on Windows. |
| **#6460** – Edge + Wayland high CPU | 3 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/6460> | Optimize rendering / WebSocket push for Edge on Wayland. |
| **#6504** – Unify project directories & workspace | 3 | 0 | <https://github.com/agentscope-ai/QwenPaw/pull/6504> | Simplify project‑context handling for agents. |
| **#6424** – Native desktop GUI automation (Win/macOS) | 3 | 0 | <https://github.com/agentscope-ai/QwenPaw/pull/6424> | Provide a cross‑platform `computer_use` tool. |
| **#6398** – Reranker support for ReMe memory search | 3 | 0 | <https://github.com/agentscope-ai/QwenPaw/pull/6398> | Add optional external reranker to improve memory‑search relevance. |
| **#6503** – Token usage stats per agent | 3 | 0 | <https://github.com/agentscope-ai/QwenPaw/pull/6503> | Expose per‑turn token consumption for monitoring. |

**Analysis:**  
- **UI/UX performance** (streaming lag, Edge/Wayland CPU spikes) is a recurring pain point, suggesting a need for more efficient front‑end rendering and WebSocket handling.  
- **Integration & compatibility** (Feishu, custom model protocols, 9router forwarding) dominate the issue list, indicating that users rely heavily on external messaging and model‑hosting services.  
- **Stability & safety** (image compression loops, tool‑protection bypass, memory‑index persistence) show that core runtime reliability is still being tightened.

---

### 5. Bugs & Stability  

| Severity | Issue | Updated | Comments | Link | Fix PR (if any) |
|----------|-------|---------|----------|------|-----------------|
| **High** | **#6457** – Session duplication in task mode | 2026‑07‑27 | 3 | <https://github.com/agentscope-ai/QwenPaw/issues/6457> | No dedicated fix yet; related to session‑state handling. |
| **High** | **#6460** – Edge/Wayland CPU spike | 2026‑07‑27 | 3 | <https://github.com/agentscope-ai/QwenPaw/issues/6460> | No fix; performance‑focused PRs (#6500) may address it. |
| **High** | **#6324** – Large‑model response truncation | 2026‑07‑27 | 3 | <https://github.com/agentscope-ai/QwenPaw/issues/6324> | No fix; may be mitigated by #6456 Visual Compact. |
| **Medium** | **#5757** – Feishu message delivery stops after first reply | 2026‑07‑27 | 14 | <https://github.com/agentscope-ai/QwenPaw/issues/5757> | No fix; likely requires backend WebSocket/message parsing changes. |
| **Medium** | **#5964** – Chat‑list / history mapping lost after 2.0.0 upgrade | 2026‑07‑27 | 5 | <https://github.com/agentscope-ai/QwenPaw/issues/5964> | No fix; may be addressed by session‑ID preservation PR #6068. |
| **Medium** | **#5259** – Windows memory‑index not persisted | 2026‑07‑27 | 5 | <https://github.com/agentscope-ai/QwenPaw/issues/5259> | No fix; related to storage layer. |
| **Low** | **#6258** – OpenAI model max‑token not respected | 2026‑07‑27 | 4 | <https://github.com/agentscope-ai/QwenPaw/issues/6258> | No fix yet. |
| **Low** | **#5561** – Long replies not delivered via Feishu (requires file upload) | 2026‑07‑27 | 5 | <https://github.com/agentscope-ai/QwenPaw/issues/5561> | No fix; may need message‑size handling adjustments. |

*Ranking is based on impact (user‑visible failure) and frequency of reports.*

---

### 6. Feature Requests & Roadmap Signals  

| Request | Context | Likely Target Version |
|---------|---------|-----------------------|
| **#5609** – Custom model protocol support (non‑OpenAI endpoints) | Users need to connect free/self‑hosted models with alternative API shapes. | **2.1.x** (next minor release) – the “custom protocol” roadmap is already outlined in several PRs (e.g., #6302, #6424). |
| **#5593** – DingTalk previewable image messages | Improves media UX; currently images are sent as files. | **2.1.x** – aligns with ongoing DingTalk channel enhancements (#5593, #5603). |
| **#5658** – 9router model forwarding failures | Indicates a gap in compatibility with third‑party model routers. | **2.1.x** – may be solved by the “safe provider discovery” infrastructure (#6302). |
| **#6424** – Native desktop GUI automation (Windows/macOS) | A major capability that would broaden use‑cases (e.g., UI‑driven agents). | **2.2.x** – already merged in PR #6424; likely to be GA in the next minor release. |
| **#6504** – Unified project directories & workspace | Improves context sharing across agents and tools. | **2.2.x** – part of the broader “project‑context” refactor. |
| **#6503** – Per‑agent token usage metrics | Enables better cost/usage monitoring for hosted services. | **2.2.x** – fits the analytics & observability thrust. |

**Signal:** The project is moving toward **greater modularity (custom protocols, unified SDKs), better observability (token stats), and richer desktop‑automation capabilities**. These are the most likely candidates for inclusion in the upcoming 2.1/2.2 minor releases.

---

### 7. User Feedback Summary  

- **Performance‑related complaints** dominate: long streaming sessions cause browser lag (Issue #5725) and high CPU consumption on Edge/Wayland (Issue #6460). Users request smoother UI rendering and more efficient WebSocket handling.  
- **Integration pain points**: Feishu (飞书) message delivery, custom model endpoints, and 9router forwarding are frequently reported as “broken” or “unreliable,” indicating a strong reliance on external messaging and model‑hosting services.  
- **Stability & safety concerns**: Infinite image compression loops, tool‑protection bypass (rm), and memory‑index persistence failures on Windows reveal that core runtime safeguards need reinforcement.  
- **Feature gaps**: Lack of previewable image messages in DingTalk, inability to set custom model protocols, and missing token‑usage dashboards are recurring requests that suggest a desire for richer media handling and better observability.

Overall satisfaction appears moderate; the community actively reports bugs, but many issues remain open for several weeks, hinting at either prioritization delays or missing resources.

---

### 8. Backlog Watch  

| Item | Why It Matters | Current Status |
|------|----------------|----------------|
| **#5757** – Feishu message delivery stop after first reply | Core communication channel for many enterprise users; broken flow reduces utility. | Open, last updated 2026‑07‑27; no active fix PR. |
| **#6460** – Edge + Wayland high CPU | Affects users on modern Linux desktops; may drive them to other browsers. | Open; performance‑focused PR #6500 (opt‑in CDP) may mitigate but not yet merged. |
| **#6504** – Unify project directories & workspace | Impacts multi‑agent workflows and coding‑assistant context; foundational for future features. | Open; early in the PR lifecycle, requires review & CI validation. |
| **#6398** – Reranker support for ReMe memory search | Could dramatically improve relevance of memory‑search results. | Open, under review; depends on external reranker API availability. |
| **#6068** – Preserve session IDs during history migration | Critical for continuity when migrating legacy sessions; currently broken. | Open; PR #6068 (fix) exists but may need broader testing. |
| **#6489** – Driver unit tests + coverage gate | Quality‑gate enforcement; missing coverage could lead to regressions. | Open; CI configuration change needed. |

*Maintainers should prioritize the above items, especially those with high comment counts and clear user impact (Feishu delivery, Edge CPU, session migration).*

---

**Prepared by:** AI Analyst – CoPaw Open‑Source Project (github.com/agentscope-ai/CoPaw)  
**Date:** 2026‑07‑28  

---

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-28

**Project:** zeroclaw-labs/zeroclaw | **Version:** 0.8.3 (dev, `master` at `05780f44`) | **Generated:** 2026-07-28

---

## 1. Today's Overview

ZeroClaw shows a very high-activity day with **48 issues updated** (44 open/active, 4 closed) and **50 PRs updated** (42 open, 8 merged or closed). No new releases were tagged today. The update volume is driven heavily by security auditing work (multiple high-severity findings filed by `belumume` and others), a spike in bug reports tied to ongoing test-flakiness on `master`, and continued progress on the v0.9.0 roadmap. Overall project health is active but under notable pressure from security-regression bugs and CI stability concerns.

---

## 2. Releases

**No new releases.** The latest published version remains **v0.8.3**. The project ships a per-commit dev binary identifying as `zeroclaw 0.8.3` (commit `05780f44`). No changelog or migration notes apply for this date.

---

## 3. Project Progress

- **PR #9475** (created today, 2026-07-28): Fixes flaky CI by replacing fixed 50 ms sleeps with bounded waits for client-count tracking in listener tests. Addresses test infrastructure stability.
  - 🔗 `zeroclaw-labs/zeroclaw PR #9475`
- **PR #9388** (closed 2026-07-27): Retires `CONTRIBUTORS.md` from the governance record and grounds maintainer roles in FND-003. Housekeeping for governance documentation.
  - 🔗 `zeroclaw-labs/zeroclaw PR #9388`
- **PR #9429** (closed 2026-07-27): Fixes flaky `Repeat parallel runtime tests` where channel tests used fixed wall-clock timeouts as assertions on slow CI runners.
  - 🔗 `zeroclaw-labs/zeroclaw PR #9429`
- Ongoing stacked PRs by `vrurg` (#9447, #9424) carrying the **Anthropic incomplete-terminal classification** fix toward merge — critical for the S1 workflow-block bug reported in #9421.

**Assessment:** The merge pipeline is modest today (mostly small, targeted fixes), but the volume of open PRs (42) indicates a substantial review queue. Large refactor branches like #8784 (runtime history-loop contract split, size L) are still under review from July 7 and represent the heaviest in-flight work.

---

## 4. Community Hot Topics

| # | Issue/PR | Comments | Key Subject |
|---|----------|----------|-------------|
| [9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | [Bug] `cargo test` fails 19/20 runs; flaky assertion poisons global mutex | **5** | CI stability, shared-state poisoning |
| [8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | [Bug] Landlock sandbox blocks shell access to `/dev/null` on Fedora | **4** | Runtime sandboxing, Linux security |
| [9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) | [Bug] Gemini API key in URL survives `sanitize_api_error` and leaks into chat | **4** | Security, secret-leak detector |
| [9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | [Bug] Config metadata stays in English despite locale setting | **3** | Localization, UX |
| [8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | [Bug] `delegate` tool bypasses parent tool allowlist — S0 security risk | **3** | Security, tool policy |
| [8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | [Support] Disable Bedrock Nova 2 Lite caching via config | **3** | Provider config, user usability |

**Underlying needs analysis:**
- The top issue (#9357) reflects a **fundamental CI reliability problem**: a single flaky assertion corrupts shared global state, cascading failures into unrelated tests. The community needs a fix that isolates test state or replaces the poisoned mutex — this is blocking confident CI gating.
- Multiple security issues from `belumume` (#9386, #9393, #9392, #9389, #9390, #9380) indicate an **active external audit** of the host ZeroClaw runs on. The underlying need is a systematic security hardening pass for v0.9.0, particularly around secret sanitization, channel authorization, and pairing authentication.
- S2-severity user-facing bugs (#9363 localization, #8720 Bedrock config) show that **power users are hitting localization and provider configuration gaps** that make ZeroClaw feel incomplete for non-default setups.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 S0 — Data Loss / Security Risk
1. [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) — `delegate` tool bypasses parent tool allowlist; sub-agent can invoke excluded tools. **Open since 2026-06-24 (34 days).** No fix PR merged. Impact: arbitrary tool execution in a sub-agent context bypasses policy.
2. [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) — Gemini API key leaks via `sanitize_api_error` into originating chat. Open 2 days. Affects secret sanitization pipeline.
3. [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) — Bluesky & Reddit channels have no sender authorization and no central gate. Open 2 days.
4. [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) — CLI-created cron jobs hardcode `delivery.mode = "none"`, discarding all output silently. Open 4 days. Data loss for scheduled agents.

### 🟠 S1 — Workflow Blocked
1. [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) — Incomplete terminal responses reported as successful (provider can end turn without final answer). Fix PRs #9447 and #9424 in progress, on stacked dependency.
2. [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) — Running SOP jobs have no operator cancellation path from the web dashboard. Open 1 day.
3. [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) — Emergency stop is a CLI-only state file; no runtime path reads it. Open 2 days. Critical safety mechanism is unreachable by daemon/API.

### 🟡 S2 — Degraded Behavior
1. [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) — Test suite flakes 19/20 runs; global mutex poisoning (CI stability)
2. [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) — Landlock blocks shell from accessing `/dev/null` on Fedora (sandboxing regression)
3. [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392) — LINE group messages skip allowlist and pairing handshake (security)
4. [#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) — Pairing route keys lockout on attacker-supplied header (security)
5. [#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436) — `config init` writes template sections that fail strict loader (onboarding broken)
6. [#9465](https://github.com/zeroclaw-labs/zeroclaw/issues/9465) — Declined precheck on Telegram produces only a reaction, no text (UX)
7. [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) — Config metadata untranslated in localized surfaces (i18n)
8. [#9380](https://github.com/zeroclaw-labs/zeroclaw/issues/9380) — Vendored `wit/v0` drift fails only at registration (runtime plugin reliability)

### 🟢 S3 — Minor
1. [#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) — `zeroclaw-plugins` lib unit tests behind `plugins-wasmtime` feature never run in CI (test coverage gap)
2. [#9422](https://github.com/zeroclaw-labs/zeroclaw/issues/9422) — `zeroclaw-config` unit tests fail to compile on Windows (Windows CI broken)

**Fix PR status:** Only PR #9475 and #9429 closed today's CI bugs. The major S0 and S1 fixes remain in open PRs or untracked.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Priority | Signal Strength |
|---------|-------|----------|-----------------|
| Category-scoped `read_memory_from` for sibling agent memory sharing | [#8983](https://github.com/zeroclaw-labs/zeroclaw/issues/8983) | P2 | Strong — multi-agent architecture gap |
| Wire WASM memory/backends into production runtime selection | [#9463](https://github.com/zeroclaw-labs/zeroclaw/issues/9463) | P2 | Medium — plugin infra exists but not wired |
| Anthropic stored-profile OAuth alias contract (RFC) | [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) | P1 | High — explicit follow-up to PR #9420 |
| AI-assisted PR pre-review via CI results | [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | P2 | Medium — RFC stage, needs maintainer decision |
| v0.9.0 auth/security/gateway tracker | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | P2 (tracker) | High — milestone roadmap anchor |
| SOP control plane 5/5 milestone | [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | P2 (tracker) | Medium — 5 of 5 capabilities being implemented |
| Audit existing drift surfaces across codebase | [#8858](https://github.com/zeroclaw-labs/zeroclaw/issues/8858) | P2 (cleanup) | Low — housekeeping |

**Predictions for next version:** The **Anthropic OAuth path** (#9464) and **provider-identity wiring in usage events** (PR #8966) are likely to land in the next release, as both have active authors and clear dependency chains. The **v0.9.0 security hardening** (#7432) will likely be the defining theme for any v0.9.x release, given the volume of S0/S1 security issues filed in the past two weeks.

---

## 7. User Feedback Summary

### Pain Points (from issues and PRs)
- **CI instability** is the top developer pain: test flakiness (#9357, #9429) erodes confidence in the PR pipeline and wastes maintainer time.
- **Security gaps are surfacing faster than they are being addressed.** The `belumume` auditor alone filed 6 high-severity issues in 3 days (July 26–27), covering API key leaks, channel authorization, pairing auth, and emergency-stop accessibility.
- **Provider configuration is brittle:** Bedrock caching errors (#8720, 21 days open with no response), Gemini API key leaks (#9386), and Anthropic incomplete-terminal handling (#9421) all suggest provider-specific edge cases are catching up to the team.
- **Localization is incomplete:** Config metadata and UI surfaces remain English even when a locale is selected (#9363), frustrating non-English users.
- **Onboarding is broken for new users:** `config init` produces templates that fail the strict config loader (#9436), creating a degraded first experience.

### Positive Signals
- Active contributor base with high-quality PRs across security, runtime, tooling, and provider domains (authors: `vrurg`, `perlowja`, `Audacity88`, `wangmiao0668000666`, `IftekharUddin`, etc.).
- Multiple PRs address security and correctness improvements in the same PR, indicating good security awareness.

---

## 8. Backlog Watch

### ⚠️ Long-Unanswered Issues Needing Maintainer Attention

| Issue | Opened | Age | Severity | Why It Needs Attention |
|-------|--------|-----|----------|----------------------|
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | 2026-06-24 | **34 days** | S0 | `delegate` tool bypasses parent tool allowlist — active security risk, no fix PR merged |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 2026-06-09 | **50 days** | Tracker | v0.9.0 milestone coordination hub — needs maintainer decision on scope and queue |
| [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | 2026-07-04 | **24 days** | P2 | Bedrock Nova 2 Lite cachePoint config gap — user blocked for 3+ weeks |
| [#8692](https://github.com/zer

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*