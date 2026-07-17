# OpenClaw Ecosystem Digest 2026-07-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-17 01:50 UTC

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

User Safety: safe

---

## Cross-Ecosystem Comparison

## 1. Ecosystem Overview
The personal‑AI‑assistant and agent open‑source ecosystem continues to fragment around specialized “‑Claw” brands (OpenClaw, NanoBot, Hermes, PicoClaw, NanoClaw, NullClaw, IronClaw, ZeroClaw, …) that each target a slightly different slice of the market: hardware‑first runtimes, cloud‑first orchestration, multi‑channel messaging, UI‑centric bots, or security‑hardened toolchains.  Across the board the community is moving from “feature‑heavy releases” to continuous‑maintenance sprints that tighten security, improve reliability, and lower deployment friction.  The most active projects now treat **bugs and stability as primary road‑maps**, while high‑traffic concerns such as localization, provider fallback, sandbox enforcement, and remote control appear repeatedly in multiple code‑bases.  This signals a maturing ecosystem where developers are demanding more predictable runtime behavior rather than pure feature bloat.

---

## 2. Activity Comparison  

| Project | Issues (24 h) | PRs (24 h) | Releases (24 h) | Health Score* |
|---------|---------------|------------|-----------------|---------------|
| **OpenClaw** | 0 | 0 | – | Low (reference only) |
| **NanoBot** | 1 (new) | 13 | – | Medium – active bug‑fix sprint, UI/ security focus |
| **Hermes Agent** | 50 | 50 | – | High – heavy dev velocity, many docs & UI work |
| **PicoClaw** | 1 (open) | 9 (open) | – | Low‑Medium – mostly dependency/maintenance PRs |
| **NanoClaw** | 4 (updated) | 19 (16 open) | – | Medium – rapid bug/ feature churn |
| **NullClaw** | 1 (opened) | 0 | – | Low – stuck on critical crash bug |
| **IronClaw** | 18 | 39 | – | High – intensive refactor & gateway work |
| **LobsterAI** | 0 | 0 | – | Low – safety‑flagged, no visible activity |
| **TinyClaw** | 0 | 0 | – | Low – dormant |
| **Moltis** | 0 (minimal) | 3 (merged) | – | Medium – internal polish, few open items |
| **CoPaw** | 44 | 46 | – | High – steady stabilisation sprint |
| **ZeptoClaw** | 5 (closed) | 0 | – | Low – docs‑only churn |
| **ZeroClaw** | 26 | 50 | – | High – aggressive architectural refactor |

\*Health Score is a qualitative indicator: **High** = rapid, diversified activity and low critical backlog; **Medium** = steady churn with some open issues; **Low** = minimal activity or single‑point critical blockers.

---

## 3. OpenClaw’s Position  

| Dimension | OpenClaw | Typical Peer (e.g., Hermes, ZeroClaw) |
|-----------|----------|----------------------------------------|
| **Safety classification** | **Safe** (core reference) | Most peers are *unsafe* or *mixed* ( LobsterAI explicitly *unsafe*) |
| **Community size** | Very small – only a handful of closed issues | Hermes (≈50 issues/50 PR) or ZeroClaw (≈80 combined) |
| **Technical approach** | Appears to be a “reference implementation” – almost no code changes in the digest, only high‑level safety label. | Peers implement concrete runtime logic, provider handling, UI states, or hardware‑integration. |
| **Advantage** | Serves as a **baseline for safety testing**; developers can rely on it for secure, high‑level orchestration without the complexity of full‑featured bots. | Peers offer richer functionality but also higher maintenance burden and security surface. |
| **Differentiation** | Primarily a **reference/specification** project; not a production runtime. | Production‑ready bots with active bug‑fix pipelines. |

*Conclusion*: OpenClaw is best treated as a **safety‑anchor** rather than a competitor to the feature‑rich “‑Claw” families.

---

## 4. Shared Technical Focus Areas  

| Focus Area | Projects Highlighting the Need |
|------------|--------------------------------|
| **Security Hardening & Sandbox Enforcement** | NanoBot (Docker compose defaults), Hermes (sandbox bypass), ZeroClaw (provider auth), IronClaw (OAuth lifecycles), CoPaw (validation fixes) |
| **Session & UI State Management** | NanoBot (WebUI visibility loss), Hermes (session isolation, chat responsiveness), CoPaw (stale memory, agent‑switch), ZeroClaw (conversation vs. memory) |
| **LLM Provider Fallback & Quota Management** | NanoClaw (Claude↔Codex fallback), Hermes (context‑aware routing), Moltis (Kimi fallback), ZeroClaw (delegate OAuth) |
| **Cross‑Platform Deployment & Accessibility** | NanoBot (Render deployment), Hermes (desktop gateway, Windows update handling), PicoClaw (ARM64 launcher), IronClaw (background service install) |
| **Localization & Internationalization** | PicoClaw (zh‑TW locale), Hermes (locale UI improvements), CoPaw (i18n updates), IronClaw (Traditional Chinese) |
| **Performance & Resource Management** | Hermes (layout‑thrash, memory leak fixes), ZeroClaw (pgvector panic, models_cache write), CoPaw (token‑usage noise), IronClaw (WASM output handling) |
| **Dependency & CI Maintenance** | PicoClaw (Go/Node actions), Moltis (under‑the‑hood updates), ZeptoClaw (docs validation) |
| **Remote Control & Emerging Protocols** | ZeroClaw (A2A outbound, Gemini Live), IronClaw (Telegram integration), Hermes (Telegram entrypoint) |
| **Tool & Runtime Lifecycle Management** | Hermes (tool restart logic), CoPaw (UAC elevation), ZeroClaw (execute_pipeline policy), NanoBot (sensitive‑URL protection) |

These themes indicate a **converging requirement** for more robust, auditable, and user‑transparent runtime behavior across the ecosystem.

---

## 5. Differentiation Analysis  

| Project | Core Feature Emphasis | Primary Target Users | Technical Architecture Highlights |
|---------|----------------------|----------------------|------------------------------------|
| **NanoBot** | Security‑first UI & external‑reader safeguards | Users running LLMs behind corporate firewalls | Jina‑Reader integration, Docker hardening, lightweight UI |
| **Hermes Agent** | Desktop‑centric GUI + multi‑gateway orchestration | Power‑users, enterprises needing UI control | Tauri desktop app, gateway plugins, service‑level sandboxing |
| **PicoClaw** | Hardware‑level integration (NanoKVM, ARM) | Embedded/​edge‑IoT teams | ARM64 binaries, WebSocket remote control |
| **NanoClaw** | Multi‑channel messaging (WhatsApp/Telegram) + LLM fallback | Communication‑heavy automation teams | Baileys ↔ Cloud adapters, channel‑adapter startup propagation |
| **NullClaw** | Telegram gateway (currently crashing) | Early adopters of NullClaw gateway | Thin‑wrapper Telegram bot, systemd service |
| **IronClaw** | Architecture refactor (provider unification) & WebUI richness | Developers building custom agents, workflow builders | “Reborn” runtime, per‑user secrets, Kanban UI |
| **ZeroClaw** | Full‑stack agent runtime + attestation & OTA upgrades | Large‑scale, regulated deployments | Provider‑agnostic runtime, prebuilt bundles, cryptographic attestation |
| **CoPaw** | Multi‑agent collaboration & cron‑based task scheduling | Users needing coordinated multi‑agent workflows | UAC‑aware CLI, session memory handling, cross‑platform sync |
| **Moltis** | Agent‑status feedback & external container support | Teams using Apple Container or external orchestration | External agent metadata broadcasting |
| **LobsterAI** | – (flagged unsafe) – | – | – |
| **TinyClaw** | – (dormant) – | – | – |
| **ZeptoClaw** | Security‑documentation and D2 trigger classification | Security auditors / compliance teams | Pure‑doc repo, automated security‑doc classification |

**Key take‑aways**

* **Security vs. Feature** – NanoBot, ZeroClaw, IronClaw prioritize security hardening.  
* **UI‑first vs. CLI‑first** – Hermes & IronClaw emphasize GUI capabilities; NanoBot & CoPaw are more CLI‑oriented.  
* **Hardware‑centric** – PicoClaw distinguishes itself with native ARM support.  
* **Multi‑channel focus** – NanoClaw and ZeroClaw invest heavily in channel adapters and protocol abstraction.  
* **Regulatory / attestation** – ZeroClaw is the only project to explicitly address cryptographic release attestation and OTA upgrades.

---

## 6. Community Momentum & Maturity  

| Tier | Projects | Indicator |
|------|----------|-----------|
| **High Momentum** | **ZeroClaw**, **Hermes Agent**, **CoPaw**, **IronClaw** | 40‑50 PR/issue updates per day, multiple “p1” (critical) fixes, active RFCs and architectural refactors. |
| **Stable / Maintenance** | **NanoBot**, **Moltis**, **PicoClaw**, **NanoClaw** | Consistent bug‑fix cycles, dependency updates, UI polish; fewer open‑ended feature work. |
| **Low / Stalled** | **OpenClaw**, **NullClaw**, **ZeptoClaw**, **LobsterAI**, **TinyClaw** | Minimal recent activity, single critical blockers (e.g., NullClaw SIGSEGV), or safety flagging. |

**Rapid‑iterators** (ZeroClaw, Hermes) are currently driving the bulk of the ecosystem’s innovation.  
**Maturing projects** (NanoBot, CoPaw) are shifting from heavy feature ramps to reliability hardening.  
**Stagnant ones** are either focused on narrow niche tasks (PicoClaw) or are still blocked by critical bugs (NullClaw) or safety concerns (LobsterAI).

---

## 7. Trend Signals (Value for AI‑Agent Developers)

| Signal | Why It Matters |
|--------|----------------|
| **Universal security hardening** (Docker defaults, sandbox enforcement, OAuth validation) | Reduces surface area for credential leakage and misuse across all agent runtimes. |
| **Session & memory separation** (conversation vs. long‑term memory) | Enables predictable state handling for long‑running multi‑agent workflows and improves debugging. |
| **Provider fallback & quota management** | Guarantees service continuity when primary LLMs hit limits – a top user pain point. |
| **Cross‑platform deployment tooling** (Render, one‑click deployment, background services) | Lowers entry barrier for non‑dev users and accelerates community adoption. |
| **Localization & UI standardisation** (zh‑TW, locale file updates) | Expands market reach beyond English‑only tooling and improves inclusivity. |
| **Performance & resource visibility** (token‑usage reports, memory leak fixes, layout optimisation) | Directly addresses cost control and user‑experience friction – the main attrition factors. |
| **Attestation & OTA updates** (ZeroClaw) | Emerging requirement for regulated environments; future‑proofs deployments. |
| **Remote control & emerging protocols (A2A, Gemini Live)** | Early‑adopter advantage for developers building multimodal or multi‑gateway agents. |
| **Tool‑policy & sandbox boundaries** (IronClaw, CoPaw) | Ensures multi‑tenant safety and predictable tool execution in collaborative environments. |
| **Dependency hygiene** (Go/Node actions) | Reduces CI breakage and improves reproducibility of builds across platforms. |

**Implication for developers:**  
If you are building or extending an AI agent, prioritize **modular provider handling**, **robust sandboxing**, **observable resource accounting**, and **low‑friction deployment**.  The community’s current motion indicates that projects that solve these cross‑cutting concerns will capture the next wave of

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑07‑17**  

---

### 1. Today's Overview  
The ecosystem remains active with **13 PR updates** and **1 new issue** reported in the last 24 hours. No new releases were cut, but the merged documentation PR (4950) signals a shift toward community‑driven maintenance. Overall activity points to a healthy, issue‑driven development cadence rather than a release‑heavy cycle.

---

### 2. Releases  
*No new versions were published today.* The project continues to rely on the latest merged code rather than a formal version bump.

---

### 3. Project Progress  
- **Closed / merged PR**: **[#4950 – docs(readme): reflect community maintenance](https://github.com/HKUDS/nanobot/pull/4950)** – updates the README to acknowledge collaborative stewardship.  
- **Open PRs with recent activity**: 13 pull requests were updated today, covering bug fixes, security hardening, performance improvements, and locale refinements. Notable merges in the last few days include PR #4947 (sensitive‑URL protection in Jina Reader) and PR #4937 (one‑click Render deployment blueprint).  

These updates indicate continued focus on stability, security, and developer experience rather than feature expansion.

---

### 4. Project Progress – Hot Topics  
| Item | Type | Recent Activity | Link | Why it matters |
|------|------|----------------|------|----------------|
| **Issue #4948** | Bug – WebUI visibility loss when a late sub‑agent triggers a system turn | Updated today; still open (0 comments) | <https://github.com/HKUDS/nanobot/issues/4948> | Core UI state handling under abnormal turn flows; impacts user trust in long‑running conversations. |
| **PR #4959** | Bug fix – add 1 s retry after delays | Updated today; high priority (p1) | <https://github.com/HKUDS/nanobot/pull/4959> | Addresses recurring “requests limit reached” errors that can stall the agent loop. |
| **PR #4955** | Security – harden Docker Compose defaults | Updated today; p1 | <https://github.com/HKUDS/nanobot/pull/4955> | Removes privileged defaults, mitigating container escape risk. |
| **PR #4947** | Bug fix – keep sensitive URLs out of Jina Reader | Updated today; p1 | <https://github.com/HKUDS/nanobot/pull/4947> | Prevents accidental leakage of credentials in external readers. |
| **PR #4937** | Enhancement – one‑click Deploy to Render | Updated today; p2 | <https://github.com/HKUDS/nanobot/pull/4937> | Enables painless, reproducible deployments for the broader community. |

These items have the highest visibility (p1–p2 priority tags) and are repeatedly updated, indicating ongoing community focus.

---

### 5. Bugs & Stability  
| Severity | Reported Issue | Linked PR (if a fix exists) |
|----------|----------------|----------------------------|
| **Critical** | **#4948** – WebUI loses visibility when a late sub‑agent spawns a new system turn, breaking the delivery lifecycle. | Fix underway in **#4954** (keep late sub‑agent turns visible). |
| **High** | **#4959** – Persistent “requests limit reached” causing retry loops to stall. | Fix in **#4959** (adds 1 s retry). |
| **High** | **#4957 / #4956** – In‑memory session cache overflow and message‑count caps leading to potential data loss or throttling. | Both are being addressed in **#4957** and **#4956**. |
| **Medium** | **#4952** – UTF‑16 surrogate encoding errors when emojis travel through JSON round‑trips. | Fix slated in **#4952** (sanitize at provider boundary). |
| **Medium** | **#4947** – Sensitive URLs exposed to Jina Reader. | Fixed in **#4947**. |
| **Low** | Various locale translation quirks (e.g., #4958) that affect user experience but not core stability. | Under review in **#4958**. |

The convergence of fixes suggests the maintainers are prioritizing reliability and security over new feature rollout.

---

### 6. Feature Requests & Roadmap Signals  
- **One‑click Render deployment** (PR #4937) signals a roadmap move toward lower‑friction hosting for end users.  
- **Nimble search provider** (PR #4951) adds a new web‑search integration, expanding the provider ecosystem beyond existing REST APIs.  
- **Improved zh‑TW locale** (PR #4958) indicates a focus on multilingual quality, targeting users in Taiwanese markets.  
- **Native folder picker bridges** (PR #4953) aim to broaden file‑handling capabilities via external host APIs.  

These PRs are currently open and have received at least one 👍 reaction, suggesting likely inclusion in the next minor iteration (e.g., v0.9.x).

---

### 7. User Feedback Summary  
- **Pain points**: Users are experiencing occasional stalls due to rate‑limit errors and intermittent session visibility loss when complex sub‑agent flows run.  
- **Use cases**: Long‑running conversations that spawn multiple sub‑agents, especially in WebUI environments, are hitting edge‑case state management problems.  
- **Satisfaction**: The majority of feedback centers on reliability (security hardening, retry behavior) rather than functional gaps; users appear generally satisfied with the core LLM orchestration but demand more predictable UI state handling.  

Overall sentiment leans toward “stable but fragile in edge cases,” with a strong appetite for smoother deployment experiences.

---

### 8. Backlog Watch  
| Item | Status | Why it needs attention |
|------|--------|------------------------|
| **Issue #4948** (WebUI visibility loss) | Open, 1 day old | Core UI bug that can break conversation continuity; no merge yet. |
| **PR #4954** (keep late sub‑agent turns visible) | Open, awaiting review/merge | Direct fix for #4948; stalled merge could delay resolution. |
| **Issue #4947** (sensitive URLs in Jina Reader) | Open, 1 day old | Security‑sensitive leakage; fix is ready but may need broader testing. |
| **PR #4937** (Render deployment blueprint) | Open, awaiting merge | Important for community adoption; long merge time may deter contributors. |
| **Issue #4952** (UTF‑16 surrogate errors) | Open, 1 day old | Rare but severe encoding crash; fix pending review. |

Maintainers should prioritize merging the high‑priority fixes (especially #4954) and consider dedicating triage resources to close these lingering items, which currently sit at the intersection of stability and user‑experience concerns.

---  

*All links are current as of 2026‑07‑17 00:00 UTC.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest - 2026-07-17

## Today's Overview
The Hermes Agent project shows high development activity with 50 issues and 50 PRs updated in the last 24 hours, indicating robust maintenance and rapid iteration. While no releases were made today, the codebase remains active with significant focus on performance improvements, bug fixes, and feature enhancements. Community engagement remains strong, with users actively reporting issues and contributors submitting fixes across desktop, gateway, and AI provider integrations.

## Releases
No new releases today. Development continues with active PRs and issue resolution but no version bump announced.

## Project Progress
**Recent Merged/Fixed PRs:**
- **#66033** - Performance fix for desktop layout-thrash cascade on session switch, addressing UI instability when navigating between sessions
- **#61183** - Windows cron Python script execution fix to prevent visible console windows during automated tasks
- **#53222** - Memory leak fix preventing internal `<memory-context>` recall blocks from reaching external messaging channels
- **#53392** - GUI model picker fix for Kimi China provider display - now correctly shows "Kimi / Moonshot (China)" instead of "KIMI FOR CODING"
- **#65935** - Desktop update hand-off improvement killing all venv holders with extended 45-second cleanup window

**Advanced Features:**
- **Gateway Improvements**: Multiple PRs (#56770, #66029, #66026, #66027) enhancing Telegram and Discord gateway reliability, crash prevention, and proper first-contact handling
- **Session Isolation**: Critical fixes for cron job context isolation and gateway session management
- **Performance**: Desktop app layout optimization and Windows notification click handling restoration

## Community Hot Topics

### Most Active Issues (by comments/reactions)

**🔥 HIGH IMPACT FEATURE REQUESTS:**
1. **#25267** - Claude Agent SDK model provider with subscription OAuth (11 comments, 41 likes) - *Core users want seamless Claude subscription integration without double billing*
2. **#45779** - Multi-gateway connections with per-gateway tabs in Desktop (4 comments, 4 likes) - *Growing demand for multi-agent management across different platforms*

**🐛 RECURRING BUGS:**
3. **#61265** - Extremely large prompts causing multi-minute stalls with local OpenAI models (6 comments) - *Performance bottleneck affecting local deployments*
4. **#65384** - Desktop App creates new sessions on non-default profiles (4 comments) - *Session state management inconsistency*

**🔧 TECHNICAL ISSUES:**
5. **#65787** - MCP keepalive timeout due to O(tool-count) operations (4 comments) - *Scalability issue for tools-heavy MCP servers*
6. **#58345** - xAI Grok-4.3 drops optional multiline string args in MCP tool calls (2 comments) - *Critical integration bug affecting AgentMail service*

**Feature Spike:** #66020 - Context-Aware Orchestrator Model Routing suggests users want dynamic model selection beyond static config

## Bugs & Stability
**🔥 CRITICAL (Immediate Action Required):**
1. **#66019** - `hermes -z` silently ignores terminal.backend configuration (opens sandbox bypass) - *Security issue allowing local tool execution despite remote sandbox settings*
2. **#53491** - Skills auto-creation off by default with unanalyzed security scans - *Persistent security boundary concern*

**⚠️ HIGH SEVERITY:**
3. **#61265** - Large prompt generation causing multi-minute stalls - *Performance regression impacting local LLM deployments*
4. **#66008** - Hermes Desktop "Read aloud" timeout on long replies (15s fetch timeout) - *User-facing TTS functionality broken*

**⚠️ MEDIUM SEVERITY:**
5. **#65650** - /model picker slow (~5s) with custom providers due to sequential discovery
6. **#65746** - MoA/local calls crash after 30s due to float infinity conversion

**📊 Recent Fixes in Progress:**
- Windows cron popup prevention (#61183)
- Gateway crash protection from error handlers (#56770)
- Memory leak fixes (#53222)
- Desktop update cleanup (#65935)

## Feature Requests & Roadmap Signals

**🔥 Priority Features (based on comment volume/support):**
1. **Claude Subscription Integration** (#25267) - *High demand for subscription-based Claude usage without double billing*
2. **Cross-Platform Session Context Sharing** (#4335) - *Fundamental feature for cohesive multi-platform user experience*
3. **Multi-Gateway Desktop** (#45779) - *Growing need for managing multiple Hermes instances across machines*

**🔄 Emerging Trends:**
- **Model Discovery Separation** (#65481) - *Decouple discovery from inference URLs for custom providers*
- **Skip Parameters Config** (#26881) - *Need for provider-specific parameter filtering*
- **Structured Session Tracing** (#6741) - * observability improvements requested for profiling*

**⭐ Potential Near-Term Releases:**
1. MCP keepalive optimization (#65787)
2. Desktop TTS timeout fixes (#66008)
3. Terminal backend sandbox enforcement (#66019)
4. Multi-gateway desktop support (#45779)

## User Feedback Summary

**✅ Satisfaction Drivers:**
- Community actively contributing fixes (dozens of recent PR merges)
- Strong feature request engagement (multiple high-comment issues)
- Windows improvements appreciated (cron popups, update cleanup)

**❌ Pain Points:**
1. **Performance**: Slow /model picker, large prompt generation, MoA timeouts
2. **Stability**: Session creation bugs, TTS timeouts, sandbox bypass concerns
3. **User Experience**: Multi-platform session isolation, desktop app reliability
4. **Integration Issues**: MCP tools timeout, provider parameter rejections, gateway crashes

**Key Themes:**
- Users want **better sandbox enforcement** for security
- **Performance optimization** needed for local deployments
- **Cross-platform consistency** is a major user expectation gap
- **Provider integration improvements** repeatedly requested

## Backlog Watch - Critical Unanswered Issues

**🚨 REQUIRES IMMEDIATE ATTENTION:**

1. **#66020** - Context-Aware Orchestrator Model Routing - *Feature request since June, addresses fundamental limitation of static model configuration*
2. **#53491** - Skills security scanning - *6-week-old security issue with persistent credential exposure*
3. **#66019** - hermes -z sandbox bypass - *Security-critical issue blocking safe tool execution*
4. **#61265** - Large prompt generation - *Performance issue since July 9th affecting local AI deployments*

**📋 MEDIUM PRIORITY:**

1. **#58745** - Context length capability vs budget semantics conflict - *Configuration confusion since July 5th*
2. **#65497** - Model discovery vs inference URL separation - *June 16th request impacting custom provider workflows*
3. **#54115** - BG Review OOM with llama.cpp - *June 28th resource management issue*
4. **#52470** - Dashboard auto-restart failure - *June 25th reliability issue*

**🔍 OBSERVATION:**
The project shows **strong maintenance discipline** with most critical bugs receiving attention within 48-72 hours. However, **feature requests lag significantly** behind bug fixes, suggesting a need for more proactive roadmap development and earlier user feedback collection.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw – Project Digest (2026‑07‑17)**  

---

### 1. Today’s Overview  
PicoClaw is experiencing a burst of upstream dependency updates (9 open PRs) but has not merged any code in the last 24 h. Only one issue remains open, while a previously reported ARM64 launcher bug was closed yesterday. The project’s activity score is moderate: steady external dependency bumps (AWS SDK, Go libraries, etc.) suggest ongoing maintenance, yet the lack of merges indicates that review cycles may be slowing downstream progress.

---

### 2. Releases  
*No new releases were published.*  

---

### 3. Project Progress  
- **Closed PRs:** 0 (all 9 PRs opened today remain open).  
- **Merged/Closed PRs today:** None.  
- **Feature/bug‑fix activity:** The only “closed” item is Issue #3260, which reported that the PicoClaw launcher binary is missing for ARM64 builds; the issue was marked closed, implying the problem may have been resolved in a prior release or through a workaround not captured in the PR list. All other recent work consists of dependency bumps and new feature proposals that await review.

---

### 4. Community Hot Topics  

| Item | Type | Activity | Why it matters | Link |
|------|------|----------|----------------|------|
| **#3195** – “OpenAI GPT does not work on NanoKVM with default config” | Issue (stale, bug) | 3 comments, 0 👍 reactions | Users attempting to enable GPT‑5.4 on the newly released NanoKVM hardware encounter runtime failures, indicating a possible incompatibility or missing configuration step. This is the most discussed item currently. | <https://github.com/sipeed/picoclaw/issues/3195> |
| **#3261** – “Add zh‑TW locale and Traditional Chinese translations” | PR (new feature) | 0 comments, 0 👍 | Introduces Taiwanese‑specific terminology and Chinese localisation, expanding accessibility for Mandarin‑speaking users. Highlights a demand for broader i18n support. | <https://github.com/sipeed/picoclaw/pull/3261> |
| **#3118** – “Add remote Pico WebSocket mode to picoclaw agent” | PR (enhancement) | 0 comments, 0 👍 | Provides a remote‑control mode for the `picoclaw agent` command, opening possibilities for distributed or cloud‑based interaction. Shows community interest in remote operation capabilities. | <https://github.com/sipeed/picoclaw/pull/3118> |
| **#3262 / #3263** – Dependency bumps (`actions/setup-go` & `actions/setup-node`) | PRs (maintenance) | 0 comments, 0 👍 | Keep CI pipelines up‑to‑date with the latest GitHub Actions runners, reducing breakage risk from deprecated tool versions. | <https://github.com/sipeed/picoclaw/pull/3262> <br> <https://github.com/sipeed/picoclaw/pull/3263> |

**Analysis:** The open issue #3195 is the current community hotspot, reflecting a functional blocker for a premium feature (GPT integration) on new hardware. The two PRs (#3261, #3118) represent high‑impact user‑facing enhancements (localization and remote control) that, if merged, would broaden adoption. All other PRs are low‑risk CI/maintenance updates.

---

### 5. Bugs & Stability  

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **High** | **#3195** (Open) | GPT‑5.4 calls fail on NanoKVM with default configuration, causing all PicoClaw interactions to hang or error out. | No dedicated fix PR yet; the issue is still under discussion. |
| **Medium** | **#3260** (Closed) | The pre‑built PicoClaw launcher binary is missing for ARM64 (arm64) releases, preventing users on aarch64 platforms from running the tool. | Closed; presumed resolved in a prior release or via manual binary placement. |

No crash reports, memory leaks, or regression symptoms were reported in the last 24 h beyond the two items above.

---

### 6. Feature Requests & Roadmap Signals  

- **#3261** (Locale & Traditional Chinese) – Direct user request for region‑specific language support; likely to be merged soon given its clear scope and low risk.  
- **#3118** (Remote WebSocket mode) – Adds a remote control mechanism, a logical next step after the introduction of the NanoKVM hardware. If accepted, it may be bundled in the next minor release (e.g., 0.3.2).  
- **#3195** (GPT on NanoKVM) – While not a request per se, the discussion reveals a need for clearer documentation or a dedicated “gpt‑nano” configuration profile, which could become a roadmap item for supporting the new hardware out‑of‑the‑box.

---

### 7. User Feedback Summary  

- **Pain Points:**  
  - Users on NanoKVM (new 2.4.0 hardware) cannot enable GPT‑5.4 with the default config, leading to non‑functional AI interactions.  
  - ARM64 users encounter a missing launcher binary, causing confusion about how to run PicoClaw on aarch64 systems.  

- **Use Cases:**  
  - Remote operation of the `picoclaw agent` via WebSocket (requested in #3118) suggests interest in cloud‑or‑edge orchestration.  
  - Localization (zh‑TW) indicates a growing user base in Taiwan/Chinese‑speaking regions that require UI and documentation in Traditional Chinese.  

- **Satisfaction/Dissatisfaction:**  
  - **Dissatisfaction** is evident around GPT integration and ARM64 packaging; these blockers may affect adoption of the newer NanoKVM platform.  
  - **Satisfaction** appears high for the ongoing dependency maintenance, as the project continues to stay current with Go and GitHub Actions ecosystems.

---

### 8. Backlog Watch  

| Item | Age | Why it needs attention |
|------|-----|-----------------------|
| **#3195** – GPT on NanoKVM | 17 days (created 2026‑06‑30) | Still open with only 3 comments; the lack of a concrete fix is blocking users who rely on the GPT feature. Maintainer should investigate the configuration mismatch or consider a dedicated NanoKVM config template. |
| **#3261** – zh‑TW locale | 1 day (created 2026‑07‑16) | Though recent, the PR is still open and awaiting reviewer approval. Merging this PR would improve accessibility for a sizable user segment. |
| **#3118** – Remote WebSocket mode | 34 days (created 2026‑06‑12) | No progress in the last week; the feature is valuable for remote management but remains unimplemented. Prioritizing this could differentiate PicoClaw in the edge‑AI market. |
| **#3262 / #3263** – CI action upgrades | 1 day (created 2026‑07‑16) | These are low‑risk maintenance PRs; however, they sit in the queue and could delay future releases if CI breaks. Review and merge promptly. |

**Key Takeaway:** The most critical open item is the GPT‑NanoKVM bug (#3195). Addressing it quickly would remove a major friction point for users adopting the latest hardware. The other open PRs, while less urgent, represent strategic enhancements (localization, remote control) that could shape the next release cycle.  

---  

*All links point to the official GitHub repository: <https://github.com/sipeed/picoclaw>.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑07‑17**

---

### 1. Today’s Overview  
The repository shows healthy, rapid momentum: four issues were updated in the last 24 hours (three still open, one closed) and nineteen pull requests have recent activity, with sixteen still open and three merged/closed. No new releases were published. The bulk of the activity centers on bug‑fixes (channel‑adapter startup, WhatsApp identity consistency, scheduled‑task visibility) and on new capabilities such as LLM fallback logic and a Dial‑based channel adapter. Overall, the project appears stable but continues to address several high‑visibility stability and usability concerns.

---

### 2. Releases  
*No new releases were published.*  

---

### 3. Project Progress  
- **Closed PR:** `#3061` (contributing‑guide custom template) was merged/closed on 2026‑07‑16, cleaning up documentation scaffolding.  
- **Feature & bug‑fix PRs** that advanced today:  
  * `#3067` – propagates channel‑adapter startup failures instead of silently logging them, preventing silent “deaf” channels.  
  * `#3068` – makes scheduled tasks session‑scoped, improving feedback when tasks cross sessions.  
  * `#3069` – adds automatic, install‑wide fallback to a backup LLM provider when Claude hits a real usage limit.  
  * `#3070` – resolves divergent WhatsApp sender identities between the Baileys and Cloud channel paths.  
  * `#3057` – implements per‑agent‑group Claude → Codex quota fallback plus pilot activation for Telegram/WhatsApp channels.  
- **Open PRs** remain focused on refining WhatsApp integration, security hardening, and documentation consistency.

---

### 4. Community Hot Topics  
| Item | Type | Comments / Reactions | Why it matters | Link |
|------|------|----------------------|----------------|------|
| **Issue #3016** – “Every rate_limit_event is logged as a quota error, even when the status is *allowed*” | Open Issue | 2 comments | High‑frequency noisy logs (82 occurrences reported) that clutter monitoring and may mask real errors. | <https://github.com/qwibitai/nanoclaw/issues/3016> |
| **Issue #2916** – “hi there” | Open Issue | 2 comments | Low‑severity but indicates ongoing chatter; may be a placeholder for a future UI/UX discussion. | <https://github.com/qwibitai/nanoclaw/issues/2916> |
| **Pull Request #3069** – “feat: host‑orchestrated fallback to a backup LLM provider on usage limits” | Open PR | 0 comments (but linked from docs/fallback.md) | Core roadmap item; addresses reliability when Claude quotas are exhausted. | <https://github.com/qwibitai/nanoclaw/pull/3069> |
| **Pull Request #3070** – “Fix WhatsApp sender identity divergence between Baileys and Cloud paths” | Open PR | 0 comments | Directly resolves user‑reported confusion around phone‑number → user‑ID mapping. | <https://github.com/qwibitai/nanoclaw/pull/3070> |
| **Issue #3064** – “Channel adapter that fails to start is swallowed…” | Open Issue | 0 comments | Potential silent failure that can leave a channel non‑functional while the host reports “healthy”. | <https://github.com/qwibitai/nanoclaw/issues/3064> |

The most actively discussed items are the rate‑limit logging noise (#3016) and the upcoming LLM fallback mechanism (#3069), both of which affect reliability and observability.

---

### 5. Bugs & Stability  
| Severity | Issue / PR | Description | Fix / Mitigation | Link |
|----------|------------|-------------|------------------|------|
| **High** | **#2911** (closed) – WhatsApp Cloud ↔ native WhatsApp adapter collision | Two adapters share the same instance key (`whatsapp`), causing one to be silently disabled and mis‑routed messages. | Already resolved by PR #2913 (distinct `whatsapp-cloud` key) – no further action needed. | <https://github.com/qwibitai/nanoclaw/issues/2911> |
| **Medium** | **#3016** – Rate‑limit events logged as quota errors even when allowed | Repeated noisy log lines (82 times/week) that obscure real failures. | No merge yet; community awaiting a fix. | <https://github.com/qwibitai/nanoclaw/issues/3016> |
| **Medium** | **#3064** – Adapter startup failure is swallowed, host reports healthy but channel is silent | `initChannelAdapters` catches startup errors, logs them, and continues, leaving the channel non‑functional. | **#3067** (open) now propagates `ChannelAdapterStartupError`, causing a non‑zero exit and making the problem visible. | <https://github.com/qwibitai/nanoclaw/issues/3064> |
| **Low** | **#2916** – “hi there” (no functional impact) | Likely a placeholder; no stability impact. | No fix required. | <https://github.com/qwibitai/nanoclaw/issues/2916> |

---

### 6. Feature Requests & Roadmap Signals  
- **LLM fallback** – PR #3069 (fallback to a secondary LLM when Claude quota is exhausted) and PR #3057 (Claude → Codex quota fallback with channel pilot activation) signal a roadmap focus on resilience against usage limits.  
- **WhatsApp identity consistency** – PR #3070 aims to align sender IDs across Baileys and Cloud paths, addressing a user‑reported divergence.  
- **Dial channel support** – PRs #3041 (SMS + AI voice calls) and #3050 (picker & wizard integration) indicate a push to broaden telephony capabilities.  
- **Scheduled‑task visibility** – PR #3068 improves cross‑session feedback, a usability enhancement that may be bundled in the next minor release.  
- **Security hardening** – PR #3065 (authenticate loopback webhook) and #3066 (SECURITY.md updates) show ongoing attention to vulnerability mitigation.

These items are strong candidates for inclusion in the upcoming **v2.1.x** or **v2.2.0** release.

---

### 7. User Feedback Summary  
- **Noise in monitoring**: Users report that rate‑limit logs (`#3016`) flood logs, making it hard to spot genuine errors.  
- **Adapter collision**: The WhatsApp Cloud vs. native adapter clash (`#2911`) caused silent mis‑routing, a serious reliability concern that has now been fixed.  
- **Silent adapter failures**: `#3064` highlighted that a failed channel startup can go unnoticed, leading to “deaf” channels; the community is moving toward explicit failure handling (`#3067`).  
- **Identity confusion**: Divergent WhatsApp sender IDs (`#3070`) frustrate users who expect consistent messaging across channels.  
- **Feature demand**: Automatic LLM fallback (`#3069`, `#3057`) and expanded telephony support (`#3041`, `#3050`) reflect requests for higher availability and richer communication modalities.  

Overall sentiment is positive—users appreciate rapid bug fixes and new capabilities, but they want cleaner logs, more transparent error handling, and smoother cross‑channel experiences.

---

### 8. Backlog Watch  
| Item | Type | Last Update | Comments / Stakeholders | Why it needs attention |
|------|------|-------------|------------------------|------------------------|
| **Issue #3016** | Open | 2026‑07‑16 | 2 comments | Persistent noisy logging; no resolution yet. |
| **Issue #3064** | Open | 2026‑07‑16 | 0 comments | Silent adapter failures; fix PR #3067 exists but merge not yet reflected. |
| **Issue #2916** | Open | 2026‑07‑16 | 2 comments | Low‑priority chatter; may need clarification or closure. |
| **Pull Request #3060** | Open | 2026‑07‑16 | 0 comments | Adds `--init` to container spawn args to reap zombie processes; maintainer review needed. |
| **Pull Request #3065** | Open | 2026‑07‑16 | 0 comments | Security fix for webhook authentication; pending review/merge. |
| **Pull Request #3057** | Open | 2026‑07‑16 | 0 comments | Large‑scope Claude↔Codex fallback; requires extensive testing. |

Maintainers should prioritize **#3016** and **#3064** (both have recent activity but no resolution) and consider merging **#3067** to make the adapter‑startup failure visible. **#3060** and **#3065** are security‑relevant and should be merged promptly to reduce operational risk.

--- 

*Prepared on 2026‑07‑17. All links point to the official NanoClaw repository at github.com/qwibitai/nanoclaw.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026‑07‑17**  

---

### 1. Today's Overview  
NullClaw shows minimal activity on 2026‑07‑17. No pull‑request updates, no new releases, and only a single issue was opened in the last 24 h. The sole open issue describes a segmentation fault on ARM64 Linux when handling any inbound Telegram message, causing the systemd gateway to crash‑loop. Apart from this stability incident, there is little forward momentum in code or documentation commits.  

---

### 2. Releases  
- **Latest releases:** *None*  
- No version bump, changelog, or migration notes are available for today.  

---

### 3. Project Progress  
| Metric | Value (last 24 h) |
|--------|-------------------|
| Pull requests updated | **0** (0 open, 0 merged/closed) |
| Issues updated          | **1** (the opened issue #976) |
| Merged/closed PRs       | **0** |
| New features/fixes      | **None** reported |

Overall progress is stagnant; the project is currently limited to incident response rather than feature development.  

---

### 4. Community Hot Topics  
- **Issue #976 – SIGSEGV on every inbound Telegram message**  
  - **Link:** https://github.com/nullclaw/nullclaw/issues/976  
  - **Opened:** 2026‑07‑16 • **Last updated:** 2026‑07‑16 • **Comments:** 1 • **Reactions:** 0 👍  
  - **Analysis:** The issue is the only active discussion point and has generated a high‑severity crash that directly impacts service availability. The lack of reactions suggests limited visibility beyond the reporter, but the impact (process termination per message) is severe enough to merit immediate attention from maintainers.  

---

### 5. Bugs & Stability  
- **Critical bug:** SIGSEGV causing the `nullclaw gateway` systemd service to crash‑loop on *any* inbound Telegram message.  
- **Severity ranking:** **High** – service becomes unusable, messages are dropped, and users receive no replies.  
- **Fix status:** No merge‑ready PR or patch is currently attached to the issue. The crash loop persists, meaning the bug remains unresolved as of the latest snapshot.  

---

### 6. Feature Requests & Roadmap Signals  
- No explicit feature requests or roadmap discussions appear in the issue tracker or PR queue for the past day.  
- The absence of activity may indicate that contributors are currently focused on stabilizing the existing codebase rather than proposing new capabilities.  

---

### 7. User Feedback Summary  
- **Pain points:**  
  - Repeated crashes on every Telegram inbound message truncate conversation flow.  
  - Users experience dropped messages and no response, leading to perceived unreliability of the gateway.  
  - The crash‑loop generates continuous service restarts, increasing operational overhead for administrators.  
- **Overall sentiment:** Dissatisfaction is evident among at least one active user (reporter of issue #976) who relies on stable inbound messaging. No positive feedback or satisfaction statements are present in the current data set.  

---

### 8. Backlog Watch  
- **Issue #976 (opened 2026‑07‑16):**  
  - Still **open** with a single comment and no merges.  
  - No maintainer response recorded yet; the issue remains unassigned and unlabelled with a priority.  
- **Long‑standing items needing attention:**  
  - This is the only outstanding issue; its high severity and impact make it the top priority for the maintainer team.  
  - No PRs have been submitted to address the crash, so the backlog item is effectively a “blocker” awaiting a fix or a detailed investigation.  

---

**Takeaway:**  
The NullClaw project is presently in a reactive state, with a single critical stability incident dominating the community focus. No progress was made on feature delivery or version updates today. Immediate attention to Issue #976 (SIGSEGV crash) is essential to restore service reliability and prevent further loss of user trust.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# IronClaw Project Digest - 2026-07-17

## Today's Overview

IronClaw shows intense development velocity with 57 total updates (18 issues, 39 PRs) in the past 24 hours. The project focuses heavily on the "Reborn" architecture refactoring while maintaining active bug triage and feature development. No new releases were published today, but significant work continues on core architectural improvements, security enhancements, and user experience refinements.

## Releases

No new releases today. The previous release PR (#5598) from July 3rd shows ongoing versioning activity with breaking API changes in `ironclaw_common` (0.4.2 → 0.5.0) and feature additions in other core crates.

## Project Progress

### Merged/Closed PRs Today:
- **PR #6164** - Removed redundant Slack connection-epoch state machine, simplifying auth flow lifecycle management
- **PR #6118** - Added per-user secrets management to Admin user details, closing a security provisioning gap
- **PR #6117** - Fixed workspace UI to display localized region names and human-readable file sizes instead of raw byte counts
- **PR #6166** - OAuth reversion PR, though this was followed by re-application work

### Key Advancements:
- **Telegram Integration**: PR #6159 introduces Telegram as a first-class IronClaw entrypoint
- **Service Infrastructure**: PR #6172 adds background service installation (launchd/systemd) support
- **WASM Tool Fixes**: PR #6161 resolves plain-text WASM tool output handling
- **OAuth Conformance**: PR #6114 closes gaps in authentication flow testing

## Community Hot Topics

**[PR #6116 - Unified Generic Extension Runtime](https://github.com/nearai/ironclaw/pull/6116)** - This massive architectural PR represents the core "Reborn" initiative, consolidating extension handling across channels and sandboxes. Though not showing explicit comment counts, its cross-cutting scope affects multiple workstreams.

**[Issue #6168 - Ironclaw_reborn_composition Refactoring](https://github.com/nearai/ironclaw/issues/6168)** - Addresses the largest crate in the workspace (~24% of production code at 156k LOC) being bloated beyond its intended assembly-only purpose. Critical architectural debt.

**[Issue #6155 - Failed Run Unresponsiveness](https://github.com/nearai/ironclaw/issues/6155)** - User-reported critical bug where conversations become completely unresponsive after model provider failures.

**[Issue #6170 - File System Access via Shell](https://github.com/nearai/ironclaw/issues/6170)** - Security concern regarding multi-tenant instances allowing unrestricted file system access through shell commands.

## Bugs & Stability

### Critical Severity:
- **[#6155](https://github.com/nearai/ironclaw/issues/6155)** - Conversation unresponsiveness after run failures (P2 priority)
- **[#6170](https://github.com/nearai/ironclaw/issues/6170)** - Multi-tenant shell escalation vulnerability (no priority label)

### High Severity:
- **[#6126](https://github.com/nearai/ironclaw/issues/6126)** - Missing loading states for first messages causing perceived freezes
- **[#6149](https://github.com/nearai/ironclaw/issues/6149)** - Silent workspace download failures
- **[#6127](https://github.com/nearai/ironclaw/issues/6127)** - Incorrect "Previous run still in progress" status display

### Medium Severity:
- **[#5602](https://github.com/nearai/ironclaw/issues/5602)** - Slack DM connection not completing properly (~2 week old)
- **[#6145](https://github.com/nearai/ironclaw/issues/6145)** - Toast system accessibility and lifecycle issues

**Fix Availability**: Several bugs have active PR fixes, particularly #6161 for WASM output handling and the OAuth-related PRs addressing flow lifecycle issues.

## Feature Requests & Roadmap Signals

### Localization & Internationalization:
- **[#6158](https://github.com/nearai/ironclaw/issues/6158)** - Adds zh-TW Traditional Chinese locale, indicating international expansion efforts

### Deployment & Distribution:
- **[#6160](https://github.com/nearai/ironclaw/issues/6160)** - Multi-architecture binary builds suggest upcoming platform support improvements

### User Experience:
- **[#6146](https://github.com/nearai/ironclaw/issues/6146)** - Theme selection controls in Appearance settings
- **[#6142](https://github.com/nearai/ironclaw/issues/6142)** - WebUI served at root path instead of `/v2` (UX cleanup)

### Core Architecture:
- **[#4471](https://github.com/nearai/ironclaw/issues/4471)** - Runtime decomposition tracking (ongoing architectural concern)

**Likely Next Release Focus**: Expect the unified extension runtime (#6116) and Telegram integration (#6159) to be central, with improved service deployment capabilities (#6172).

## User Feedback Summary

Users are experiencing significant pain points around:
- **Error Visibility**: Multiple issues (#6155, #6149) highlight poor error communication
- **Initial Experience**: First-message loading states (#6126) and onboarding flows (#5565) affect new user impressions
- **Multi-tenant Security**: Shell access escalation (#6170) reveals potential platform security gaps
- **Localization Gaps**: Missing Traditional Chinese support (#6158) affects regional usability

Positive signals include active community reporting and the project's responsiveness to daily failure taxonomy analysis (#6144).

## Backlog Watch

**[#4471 - Track Reborn Runtime Decomposition](https://github.com/nearai/ironclaw/issues/4471)** - Open since June 4th, this tracks core architectural debt where the 3,000-line `runtime.rs` file contains multiple concerns beyond the assembly-only design. This represents ongoing technical risk.

**[#5602 - Can't Connect Slack from Chat](https://github.com/nearai/ironclaw/issues/5602)** - ~2 week old issue with no reaction/engagement suggesting potential communication gaps around Slack integration priorities.

**[#6130 - OAuth Flow Lifecycle](https://github.com/nearai/ironclaw/issues/6130)** - Though recently reverted (#6166) and re-applied (#6169), this indicates instability in authentication flows that may require continued attention.

The project demonstrates healthy activity levels with strong focus on architectural refactoring while maintaining responsiveness to user-reported critical issues.


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

User Safety: unsafe
Safety Categories: Unauthorized Advice

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest  
**Date:** 2026-07-17  

---

## 1. Today's Overview  
The Moltis project saw minimal issue activity in the past 24 hours but active development via three merged pull requests (PRs). No new issues were opened, indicating stable maintenance work, while the merged PRs focus on improving agent feedback mechanisms, expanding AI provider support, and addressing sandbox-related UI regressions. This suggests the team prioritized refining core functionality and stability over new feature introduction.  

## 2. Releases  
- **20260716.01** (2026-07-16): This minor release includes under-the-hood improvements, including enhanced session metadata broadcasting, full context request history retention, and expanded external agent support (e.g., Apple Container integration). No breaking changes or migration notes were documented, aligning with minor patch updates.  

## 3. Project Progress  
- **PR #1155 (CLOSED)**: Improved agent and sandbox status visibility ([GitHub PR](https://github.com/moltis-org/moltis/pull/1155)): Added live metadata broadcasting for external sessions and persisted history access while ensuring sandbox-local storage compatibility.  
- **PR #1156 (CLOSED)**: Introduced **Kimi K3/K2.7 CodeHighSpeed** support ([GitHub PR](https://github.com/moltis-org/moltis/pull/1156)): Expanded Moonshot/Kimi model catalogs, updated provider configuration defaults, and added end-to-end onboarding coverage for Kimi K3.  
- **PR #1154 (CLOSED)**: Fixed sandbox UI regression ([GitHub PR](https://github.com/moltis-org/moltis/pull/1154)): Students fallback to direct mode when sandbox backends fail, disabling irrelevant sandbox toggles to prevent confusion.  

## 4. Community Hot Topics  
No active issues or recently debated PRs exist this week. All closed PRs have minimal discussions (<1 comment); the Kimi K3 integration (PR #1156) has the most symbolic votes (0 emojis), highlighting low community engagement or internal prioritization of this update.  

## 5. Bugs & Stability  
No regressions reported this week. All three merged PRs addressed proactive improvements rather than urgent bug fixes, suggesting robust stability. No newly surfaced bugs were documented in the release notes or PR summaries.  

## 6. Feature Requests & Roadmap Signals  
The merged PRs suggest momentum toward:  
- **External Agent Ecosystem Expansion**: Support for Apple Containers (PR #1155) hints at broader platform compatibility goals.  
- **Kimi Code Model Integration**: Enhanced Moonshot/Kimi reasoning/effort handling (PR #1156) signals focus on code generation and enterprise AI workflows.  
No explicit user feature requests surfaced this week, but sandbox fallback behavior (PR #1154) implies ongoing manageability needs.  

## 7. User Feedback Summary  
No direct user feedback was documented in the data. However, the focus on sandbox stability and external agent integration implies priorities around deployment reliability over casual user experience improvements.  

## 8. Backlog Watch  
No long-standing issues or PRs were reported in the provided data. However, the team should investigate:  
- **Active Old Issues**: Search issues labeled "awaiting-review" or "help wanted" beyond the 24-hour window.  
- **Untested Features**: The release summary for 20260716.01 lacks coverage details despite mentioning added E2E tests—a gap that may require follow-up.  

---  
**Source Links**:  
- [PR #1155: Agent status feedback](https://github.com/moltis-org/moltis/pull/1155)  
- [PR #1156: Kimi provider support](https://github.com/moltis-org/moltis/pull/1156)  
- [PR #1154: Direct mode fallback](https://github.com/moltis-org/moltis/pull/1154)  
- [Latest Release: 20260716.01](https://github.com/moltis-org/moltis/releases/tag/20260716.01)


</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – 2026‑07‑17**  
*(Compiled from GitHub activity for the past 24 h – Issues 44, PRs 46, no new releases)*  

---

## 1. Today's Overview  
The community remained highly active: 44 issues were updated (24 still open, 20 closed) and 46 PRs saw activity (21 open, 25 merged/closed). Most of the movement revolves around bug‑fixes in the console/cli layer, session‑state handling, and Docker‑timezone alignment. No version bump was published, but a flurry of micro‑PRs indicates a “stabilisation sprint” before the next point‑release. Overall health appears solid, though several high‑severity runtime bugs (doom‑loop tool calls, token‑over‑consumption, session loss on agent switch) continue to attract attention.

---

## 2. Releases  
- **No new official releases** today.  
- The latest published version remains **v2.0.0.post2** (desktop/Tauri build).  

---

## 3. Project Progress – Merged / Closed PRs (Top 5 by impact)  

| PR # | Title | Merged | Key Changes | Link |
|------|-------|--------|-------------|------|
| #6127 | **fix(cli): conditionally elevate UAC on Windows** | ✅ | Removes unconditional `ShellExecuteW("runas")`; prevents VBS/headless launchers from spawning unwanted elevation prompts. | <https://github.com/agentscope-ai/QwenPaw/pull/6127> |
| #6142 | **fix(console): require auto_memory_interval as int >= 0** | ✅ | Enforces a minimum of 0 for `auto_memory_interval`, adds form validation, updates TS type and i18n strings. | <https://github.com/agentscope-ai/QwenPaw/pull/6142> |
| #6166 | **fix(chat): preserve whitespace in streaming thinking/text deltas** | ✅ | Skips delta blocks when preserving whitespace, fixing garbled “thinking” blocks that lost spaces/line‑feeds. | <https://github.com/agentscope-ai/QwenPaw/pull/6166> |
| #6180 | **fix(chat): refresh updated_at on user messages and invalidate stale memory** | ✅ | Touches `ChatSpec.updated_at` after user messages, correcting stale session ordering (Issue #6131). | <https://github.com/agentscope-ai/QwenPaw/pull/6180> |
| #6200 | **fix(cli): cron update preserves untouched runtime and request fields** | ✅ | Replaces `_build_spec_from_cli` with proper reconstruction that respects existing runtime/request fields, fixing false‑positive “success” reports. | <https://github.com/agentscope-ai/QwenPaw/pull/6200> |

*Dozens of smaller fixes (utils, command‑runner, system‑info, etc.) were merged, most aimed at eliminating resource leaks, improving type‑safety, and tightening validation.*

---

## 4. Community Hot Topics  

| Issue / PR | Current Status | Comments | Reactions | Why It Matters |
|------------|----------------|----------|-----------|----------------|
| **#6116** – *Doom loop: agent repeatedly triggers same tool call* | **Closed (bug, wontfix)** | 6 | 👍 0 | Shows that runaway tool loops still waste tokens and API quota; a “wontfix” decision was taken, but the pattern recurs. |
| **#6158** – *Token usage abnormal – no conversation but huge charges* | **Open** | 5 | 👍 0 | Direct cost impact for users; the community is demanding a back‑end log inspection to locate hidden API calls. |
| **#6196** – *Container log timestamps ignore `user_timezone`* | **Open (bug)** | 5 | 👍 0 | Affects all Docker users in non‑UTC zones; illustrates a mismatch between config and runtime behavior. |
| **#5995** – *Messages silently dropped when session is busy* | **Open (bug)** | 5 | 👍 0 | Leads to lost user inputs and confusing “nothing happened” experiences. |
| **#6155** – *Upgrade from 1.x → 2.0 introduced embedding‑dimension bug* | **Open (bug)** | 4 | 👍 0 | Breaking‑change for existing 1.x users; highlights migration friction. |
| **PR #6127** – *UAC elevation fix* | **Open (ready‑for‑human‑review)** | – | 👍 0 | Addresses a painful Windows startup UX regression. |
| **PR #6166** – *Preserve whitespace in streaming deltas* | **Closed** | – | 👍 0 | Directly improves readability of “thinking” blocks, a frequent user complaint. |

*Underlying needs*: users want **predictable resource consumption**, **transparent debugging**, and **stable session semantics** when switching agents or handling timed‑out interactions.

---

## 5. Bugs & Stability – Severity‑Ranked Findings  

| Severity | Issue | Symptom | Open/Fixed | Linked PR (if fix) |
|----------|-------|---------|-----------|--------------------|
| **High** | **#6116** – Doom loop tool call | Agent re‑invokes same tool ≥ 6 times → wasted tokens, API limits | Closed (bug, wontfix) | – |
| **High** | **#6158** – Unexplained token over‑consumption | ~28 M tokens used in a week with **no** user interaction | Open | – |
| **High** | **#6196** – Timestamp ignore | Logs show UTC instead of configured `user_timezone` → time‑drift in cron jobs | Open | – |
| **Medium** | **#5995** – Silent message drop | New messages are received but never queued when session busy | Open | – |
| **Medium** | **#6155** – Embedding dimension bug after 1.x→2.0 upgrade | API 400 errors due to malformed `pass_dimensions` | Open | Fixes planned in future PR |
| **Medium** | **#6047** – New chat re‑opens stale session | Post‑upgrade new chats sometimes continue old sessions | Open | – |
| **Low** | **#6165** – Input‑suggestion popup lacks toggle | macOS users cannot hide suggestion UI | Open | – |
| **Low** | **#6161** – Windows update breaks launch for standard users | Must run as Administrator; UAC prompts appear | Open | – |

*Overall stability*: The majority of high‑severity bugs are **runtime‑behavior** rather than security concerns; they are currently being addressed by a steady stream of focused PRs.

---

## 6. Feature Requests & Roadmap Signals  

| Request | Context | Likelihood of Near‑Term Implementation |
|---------|---------|----------------------------------------|
| **Independent Python runtime for QwenPaw** (Issue #6160) | Users want an embedded interpreter to avoid global‑Python conflicts. | **Medium** – Several PRs are already refactoring the `utils` layer; a bundled interpreter could be added in a future minor release. |
| **Granular `rejects_media` capability per‑type** (Issue #5821) | Prevent stripping of *all* media when only one type fails (e.g., video). | **High** – A PR (#5821) is already open; likely merged before next version. |
| **Reusable workflow orchestration with audit trail** (Issue #6163) | Need to define multi‑step, reusable workflows (similar to Airflow DAGs). | **Medium** – Discussed in roadmap; may appear as a “workflow engine” alpha in Q4 2026. |
| **Disable input‑suggestion popup** (PR #6165) | UI preference for power users. | **Low** – Minor UI toggle; will be considered after core stability is restored. |
| **Non‑Tauri variant for Windows 7** (Issue #6076) | Windows 7 lacks modern OS features required by Tauri. | **Low‑Medium** – Community interest high, but no official plan yet; may surface as a “classic” build option. |

---

## 7. User Feedback Summary  

- **Positive signals**: Users praise the **multi‑agent chat** capabilities, the **spawn‑subagent** feature, and the **cron‑based task scheduling** when they work as intended.  
- **Pain points**:  
  - **Unpredictable token consumption** (Issue #6158) leading to surprise billing.  
  - **Session loss** when switching agents or when the session becomes busy (Issues #5995, #6119, #6074).  
  - **Docker timezone drift** (Issue #6188) breaking cron timing and log consistency.  
  - **UAC elevation prompts** on Windows (PR #6127) causing friction for automated launchers.  
  - **Missing UI controls** (e.g., hide suggestion popup, toggle whitespace preservation) that affect usability for power users.  
- **Overall sentiment**: The community is **engaged but impatient** about stability regressions introduced in v2.0; they are actively contributing fixes but expect the maintainers to prioritize **runtime predictability** and **transparent resource accounting**.

---

## 8. Backlog Watch – Items Needing Maintainer Attention  

| Item | Why It Stalls | Potential Action |
|------|----------------|------------------|
| **#6158** (token‑usage mystery) | No backend logs provided; user requests audit. | Request internal logs, create a diagnostic endpoint, or expose a `/debug` route for token tracing. |
| **#6196** (timezone mismatch) | Core config‑to‑runtime sync issue. | Merge PR #6192 (mount host timezone) and add a UI setting for explicit timezone override. |
| **#6119** (zero‑downtime reload kills idle agent) | Agents can be killed silently, leaving sessions hanging. | Add a graceful‑shutdown hook that notifies connected clients before termination. |
| **PR #6198** (bound multi‑agent startup) | Still **under review**; pending wider testing. | Assign a reviewer, add integration tests for partial‑readiness state, and schedule merge before next release. |
| **PR #6204** (drop redundant nvidia‑smi probe) | Minor performance optimisation but still open. | Merge once CI passes; could be part of the “stability sprint”. |
| **Issue #6074** (agent switch loses context) | Core architectural limitation. | Refactor session storage to be **shared across agents** or introduce a “session‑hand‑off” protocol. |

*These items have low or no recent comment activity but remain open and affect many users; a brief maintainer triage could prevent them from becoming blockers.*

---

### Closing Note  
The CoPaw project is in a **maintenance‑intensive phase**: most activity revolves around fixing regressions and hardening the CLI/console layer. While no new version is imminent, the velocity of merged PRs suggests a **stable 2.0.x point release** is on the horizon, likely bringing the aforementioned UI/toggle improvements and a more predictable token‑accounting pipeline. Continued focus on **session consistency**, **transparent logging**, and **environment‑agnostic execution** will be key to regaining community confidence.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw – Project Digest (2026-07-17)**  

---  

νον### 1. Today's Overview  
On July 17 2026 ZeptoClaw had a quiet day on GitHub: five issues were closed, but no new pull‑request activity or releases. The closed issues all pertained to the “docs(security): classify D2 trigger way” series, indicating an ongoing effort to refine the security documentation. With no open PRs, the repository’s codebase remained unchanged. Overall, activity remained low, suggesting a maintenance‑brief period after a recent release cycle.

---

### 2. Releases  
No new releases were published today, so there are no changes, breaking updates, or migration notes to report.

---

### 3. Project Progress  
*Closed Issues:*  
- **#631** – docs(security): classify conservatives for Issue 264  
- **#635** – docs(security): classify conservatives for Issue 466  
- **#634** – docs(security): classify conservatives for Issue 329  
- **#632** – docs(security): classify conservatives for Issue 268  
- **#633** – docs(security): classify conservatives for Issue 271  

All five were closure actions by the maintainer **YLChen-007**, each representing a documentation audit that completed a D2 trigger classification. No pull requests were merged or opened, so there were no code changes or feature enhancements today.

---

### 4-semantic **Community Hot Topics**  

| # | Title | Link | Comments | Reactions |
|---|-------|------|----------|-----------|
| 631 | docs(security): classify D2 trigger way for Issue 264 | <https://github.com/qhkm/zeptoclaw/issues/631> | 1 | 0 |
| 635 | docs(security): classify D2 trigger way for Issue 466 | <https://github.com/qhkm/zeptoclaw/issues/635> | 1 | 0 |
| 634 | docs(security): classify D2 trigger way for Issue 329 | <https://github.com/qhkm/zeptoclaw/issues/634> | 1 | 0 |
| 632 | docs(security): classify D2 trigger way for Issue 268 | <https://github.com/qhkm/zeptoclaw/issues/632> | 1 | 0 |
| 633 | docs(security): classifyيوبال D2 trigger way for Issue 271 | <https://github.com/qhkm/zeptoclaw/issues inquiétill> | 1 | 0 |

These issues collectively reflect a community need for الدين precise documentation of how “D2” (direct or indirect) security triggers are handled in ZeptoClaw. The consistent pattern—logging CSV rows, verifying prompt–tool chains, and tagging JSON evidence—suggests a push toward a more machine‑readable security metadata framework.

---

### 5. Bugs & Stability  
No bug, crash, or regression reports were filed during the observation period. Consequently, there were no corresponding fixes or PRs to note. The project remains stable in terms of issue handling, with all five recent tasks resolved cleanly.

---

### 6. Feature Requests & Roadmap Signals  
The current activity was limited to documentation refinement; no new feature requests were opened. Given the focus on **D2 trigger classification**, a logical next step for the roadmap could involve tooling that automatically analyses and validates trigger pathways, perhaps integrating a lightweight static‑analysis layer or a CI job that validates these JSON outputs.

---

### 7 อินการลูกภาพ Feedback Overview  
There is no evidence of direct user-facing feedback (comments, discussions, or stargazers’ issues) beyond the closed documentation tasks. The maintained emphasis on security documentation indicates users (likely contributors or security auditors) value accurate and traceable documentation more than new functional features at this moment.

---

### 8. Backlog Watch  
A quick scan of the repository shows no open issues currently tagged with high priority or labeled “bug”. The only pending items are background tasks that depend on upper‑level documentation decisions. As such, no urgent backlog items demand immediate maintainer attention, but the continuation of the **docs(security)** series should be monitored for coordination with the next planned release.

---  

**Summary:** ZeptoClaw’s GitHub activity on 2026‑07‑17 was dominated by the completion of a documentation audit series, with no code changes or new releases. The project maintains stability, but the lack of new feature or bug activity suggests a maintenance phase that might soon resume as »

---

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-17

## 1. Today's Overview
ZeroClaw shows **very high development velocity** with 26 issues and 50 PRs updated in the last 24 hours (4 PRs merged/closed). No new release was published. Activity centers on **architectural refactoring** (provider unification, memory subsystem, plugin/channel runtime), **release engineering** (attestation consolidation, prebuilt bundles), and **RFC-driven feature design** (Kanban board, in-app upgrade, A2A outbound, Gemini Live speech). The project is in a pre-v0.8.4 maintenance-train phase with multiple high-risk, high-priority tracks in flight.

## 2. Releases
**No new releases** in the last 24 hours. The v0.8.3 milestone was recently closed (#7320) and v0.8.4 maintenance train (#8357) targets July 31, 2026.

## 3. Project Progress (Merged/Closed in Last 24h)
- **4 PRs merged/closed** — specific PR numbers not listed in the feed, but the v0.8.3 milestone index (#7320) and WebSocket consolidation RFC (#8798) were closed today.
- **Issue closures**: #7320 (v0.8.3 milestone tracker) and #8798 (RFC: consolidate `/ws/chat` and `/acp` — marked `wontfix`).
- **Active in-progress work**: Provider architecture refactor (#5937), channel session TTL (#8134), browser_open hang fix (#8560), pgvector panic (#9085), models_cache.json write fix (#9046), delegate OAuth fallback (#8571), execute_pipeline tool policy gate (#7960).

## 4. Community Hot Topics (Most Commented Issues)

| Issue | Comments | Core Need |
|-------|----------|-----------|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) Provider architecture unification | 11 | Eliminate inconsistent `reqwest` usage and model construction duplication across providers; high-risk refactor |
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) Optional `channels-full` prebuilt bundle | 7 | Reduce confusion when users configure channels not included in lean default bundle |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) Consolidate release attestation (3 mechanisms → 1) | 5 | Remove redundant cosign/artifact-attestation/SLSA signing that doubles CI time and asset count (53→~20) |
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) Gateway-local Kanban board for agent work | 5 | Visualize/coordinate agent tasks in web dashboard (opt-in, inspired by OpenClaw/Hermes) |
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) Separate conversation history from long-term memory | 5 | Fix implementation conflation: runtime/gateway/channel autosave writes turns as `MemoryCategory::Conversation` into general backend |

**Underlying theme**: Contributors are pushing to **reduce architectural fragmentation** (providers, memory, signing, channel bundles) and **surface agent runtime state** in the web UI.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S1** | [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) `browser_open` hangs agent turn on headless/no-display hosts (unbounded subprocess wait) | `in-progress`, `accepted` | — |
| **S1** | [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) Nested runtime panic in `try_enable_pgvector` on gateway/agent startup (Postgres + pgvector) | `accepted` | — |
| **S2** | [#9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046) `models_cache.json` read but never written → `zeroclaw models refresh` hint ineffective | `in-progress`, `accepted` | — |
| **S2** | [#9078](https://github.com/zeroclaw-labs/zeroclaw/issues/9078) Serial transport desync after non-matching response ID (no drain) | `accepted` | — |
| **S2** | [#9089](https://github.com/zeroclaw-labs/zeroclaw/issues/9089) Tool output `[AUDIO:]` markers not parsed (only `[IMAGE:]` supported) | `accepted` | — |
| **High** | [#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) `execute_pipeline` bypasses per-agent `ToolAccessPolicy` | `needs-author-action` | PR #7960 |
| **High** | [#8571](https://github.com/zeroclaw-labs/zeroclaw/pull/8571) Delegate falls back to global credential for OAuth target providers | `needs-author-action` | PR #8571 |
| **High** | [#8902](https://github.com/zeroclaw-labs/zeroclaw/pull/8902) Zerocode bidirectional RPC for `ask_user`/`poll` | `open` | PR #8902 |
| **High** | [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) Config max-context fallback regression | `needs-author-action` | PR #8966 |
| **Low** | [#8851](https://github.com/zeroclaw-labs/zeroclaw/pull/8851) Native tools shadow same-named plugin tools | `open` | PR #8851 |

## 6. Feature Requests & Roadmap Signals (Likely Next-Version Candidates)

| Feature | Issue | Signal Strength |
|---------|-------|-----------------|
| **Provider architecture unification** | [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | High — accepted, high-risk, 11 comments, 3 months old |
| **Optional `channels-full` prebuilt** | [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | High — accepted, 7 comments, reduces user friction |
| **Release attestation consolidation** | [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | High — fresh, CI cost reduction, 5 comments |
| **Memory: separate conversation vs. long-term** | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | High — accepted, RFC, 5 comments |
| **In-app upgrade from web dashboard** | [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) | Medium — in-progress, RFC, env-aware restart |
| **Channel session TTL enforcement** | [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) | Medium — in-progress, uses existing config |
| **Persistent memory parity tracker** | [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | Medium — multi-PR rollout, `no-stale` |
| **Zerorelay nominated relay** | [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) | Medium — milestone tracker, blind forwarder |
| **Wire protocol first-class in providers** | [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | Medium — RFC accepted, onboarding focus |
| **A2A outbound client (A2ATool)** | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | Emerging — fresh RFC, completes #3566 split |
| **Authoritative memory + enrichment separation** | [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | Emerging — fresh RFC, Lucid connector redesign |
| **Gemini Live realtime speech channel** | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Medium — RFC accepted, backend-agnostic design |
| **Capability-aware documentation** | [#8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367) | Lower — blocked, needs maintainer review |

**Prediction**: v0.8.4 (target July 31) will likely include: provider refactor (#5937), attestation consolidation (#9101), channel-full bundle (#7952), session TTL (#8134), pgvector panic fix (#9085), models_cache write (#9046), and delegate OAuth fix (#8571). Kanban board (#8832) and memory separation (#9048) may slip to v0.9.

## 7. User Feedback Summary (User Feedback Summary) — Real Pain Points
- **Headless/ci environments**: `browser_open` hangs indefinitely (#8560) — blocks automated workflows.
- **Startup crashes**: pgvector + Postgres memory backend panics on gateway/agent start (#9085).
- **Model discovery broken**: `models_cache.json` never written; `zeroclaw models refresh` hint dead end (#9046).
- **Channel confusion**: Lean prebuilt bundle omits channels users configure → runtime errors (#7952).
- **Memory mental model mismatch**: Docs separate conversation history vs. long-term memory, but implementation mixes them (#9048).
- **No in-app upgrade**: Must leave dashboard to check/apply updates (#8170).
- **Tool policy bypass**: `execute_pipeline` ignores `allowed_tools`/`excluded_tools` (#7960).
- **OAuth credential leakage**: Delegate falls back to coordinator's global key for OAuth providers (#8571).
- **Serial/hardware flakiness**: Transport desync on ID mismatch; timeout errors lost (#9078, #8536).
- **Multimodal gaps**: `[AUDIO:]` markers treated as plain text (#9089).

## 8. Backlog Watch (Stale/Blocked High-Value Items)

| Item | Age | Blockers | Why It Matters |
|------|-----|----------|----------------|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) Provider refactor | 3 months | High risk, architecture

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*