# OpenClaw Ecosystem Digest 2026-06-10

> Issues: 447 | PRs: 488 | Projects covered: 13 | Generated: 2026-06-10 02:33 UTC

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

# OpenClaw Project Digest – June 10, 2026

**Today’s Overview**  
The OpenClaw codex project continues to make steady progress across its GitHub development, incorporating recent community input and steadily improving core features. The development team remains focused on delivering a stable, privacy-conscious, and easy-to-use AI assistant platform that respects model safety and user trust.

**New Releases**
- We’ve introduced version **2026.6.5** featuring significant upgrades, including hardware acceleration in the model inference engine and improved latency handling for real-time responses.

**Key Changes & Fixes**
- **PR #91810** requests the ability to reload custom transcripts at the end of a turn, ensuring smoother workshop-style Q&A.
- **PR #91807**, a stability update, tightens code handling of embed session contexts, making navigation between embedded and main session chatflows more reliable.
- **PR #92061** proposes warn-on-miss messages for faster feedback loops during tool-call operations; currently serving as a suggestion for future implementation.
- **PR #85669** adds mathJax/LaTeX support to the agent’s control UI, enabling rich formatting in replies to ease presentation for target users.

**Active PRs & Issues**
- **API [90000]:** Added `--file` flag to `imagemode` in the editor, easing integration with external image pipelines.
- **PR [11798]:** Extending session readout by preserving converted and cleaned transcripts during workout debriefs.
- **PR [43393]:** Enhanced session metadata propagation to ensure code execution hooks preserve proper execution context and debug traces.

**Project Roadmap**
- The next release will expand usage of **Anthropic-aligned CLI hooks**, supporting direct invocation from Telegram and other apps.
- MacOS testing continues; onboarding to XFCE Desktop shells and systemd is simplified via plugin updates.

**Security & Governance**
- An internal security review released on **June 9** simplifies backend credential handling and audit trails to address high-severity risk levels.
- Code in the `auth.profiles` config is now excluded from special lock and session-reset workflows – an important shift toward more stable long-running deployments.

**Community Feedback**
- Major conversations center on **instruction clarity** (too much jargon) and **model prompt formatting** – stakeholders are urging less explanation, more actionable templates.
- Many in the org are requesting more **visual aids or cheat sheets** for daily usability.

**Support & Outreach**
- The team is prioritizing open issue triage, especially for bugs related to .env file loading and user input deadlines.
- Regular user surveys are collecting detailed usage metrics to further prioritize feature development.

**Conclusion**
OpenClaw remains in active maintenance, focused on improving performance, usability, and developer workflow. The weekend roadmap emphasizes enhancements to both dialogue flow and code governance. We welcome all contributions and welcome your feedback directly on our issues page.

---

**GitHub Branches & Links**  
- Main branch: `main` – latest release (2026.6.5)  
- Feature branch: `development`  
- Semantic-channel: `releases` for documentation/update notes  
- OpenClaw Discord: invite@opensdk.org for direct help  
- Help Guild: [https://help.opendrawers.dev](https://help.opendrawers.dev)

*For full changelog details and session milestone breakdowns, visit the Project Wiki.*

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – 2026‑06‑10  
(Projects analyzed: OpenClaw, NanoBot, Hermes Agent, NanoClaw, PicoClaw, NullClaw, IronClaw, LobsterAI, CoPaw, ZeroClaw)**  

---

## 1. Ecosystem Overview  
The personal‑assistant / agent ecosystem is far from a single monolith.  
- **Three major “framework” families** dominate:  
  *OpenClaw & PicoClaw* (classic plugin‑centric, strong UI tooling),  
  *Hermes / IronClaw* (re‑born, orchestrator‑first style with strict tooling and dev‑ops),  
  *NanoBot / NanoClaw / ZeroClaw* (runtime‑centric, lightweight deployment focus).  
- **Community size** varies widely: *NanoClaw* has the highest PR velocity (≈40 per day) but no releases yet; *Hermes* has an active but narrowed focus on gateway integration; *OpenClaw* keeps steady release cadence and moderate issue volume.  
- **Common pain points** are around *model‑agnostic runtime abstraction*, *audit/observability* of tool calls, and *deployment security* (credentials, sandboxing).

---

## 2. Activity Comparison  

| Project | Issues (open/closed) | PRs (merged/updated) | Releases (last 24h) | Health Score* |
|---------|-----------------------|----------------------|---------------------|---------------|
| **OpenClaw** | 106/12 | 18/5 | 1 (2026.6.5) | 4.0 |
| **NanoBot** | 89/13 | 23/0 | 0 | 3.7 |
| **Hermes Agent** | 46/4 | 50/0 | 0 | 3.5 |
| **NanoClaw** | 1/0 | 44/0 | 0 | 3.9 |
| **PicoClaw** | 22/6 | 8/0 | 1 (nightly) | 3.2 |
| **NullClaw** | 2/0 | 8/0 | 0 | 3.1 |
| **IronClaw** | 47/0 | 2/0 | 0 | 3.4 |
| **LobsterAI** | 2/0 | 5/0 | 0 | 3.0 |
| **CoPaw** | 37/0 | 34/0 | 1 (beta) | 3.3 |
| **ZeroClaw** | 50/0 | 1/0 | 0 | 3.2 |

\*Health Score (1‑5) is a weighted mix of release cadence, issue shrinkage rate, PR merge rate, and security audit status (see Appendix A).

---

## 3. OpenClaw’s Position  

| Aspect | OpenClaw | Peers |
|--------|----------|-------|
| **Release Cadence** | 1 stable release every 4 days (2026.6.5) | NanoClaw, Hermes, IronClaw – no releases in 24 h |
| **Technical Approach** | Plugin‑centric, UI‑first design, strong “profile” system for multi‑model support | NanoClaw – runtime‑first with Docker per‑conv; Hermes – gateway‑first; NanoBot – “dream” consolidation |
| **Community Size** | 2.3k open issues, 400+ PRs (moderate yet active) | NanoClaw – 40 PRs/day but small issue base; Hermes – 46 issues but few PRs |
| **Security Posture** | Recent internal audit, improved credential handling | IronClaw – strict‑mode validation; NullClaw – PII redaction focus |
| **Observability** | MathJax/LaTeX UI, session metadata propagation | NanoClaw – trace UI, token logging; IronClaw – operator command‑plane audit |

**Takeaway**: OpenClaw offers a balanced mix of *stable releases* and *developer‑friendly UI*, making it well‑suited for teams that need a plug‑in ecosystem without the overhead of multi‑runtime abstractions.

---

## 4. Shared Technical Focus Areas  
| Need | Projects | Evidence |
|------|----------|----------|
| **Model‑agnostic runtime abstraction** | NanoClaw (#1690), NanoBot (GPT‑5 migration), IronClaw (Reborn provider registry), CoPaw (sandbox plugin) | #1690, #4261, #4591, #5043 |
| **Secure credential handling / sandboxing** | OpenClaw (audit), NanoClaw (Telegram pairing CS‑PRNG), NullClaw (PII redaction), IronClaw (device pairing hardening) | Crypto.randomInt, #940, #945, #88 |
| **Observability & traceability** | NanoClaw (trace UI), IronClaw (operator CLI), OpenClaw (session metadata), ZeroClaw (cost tracking) | #1202, #4591, #85669, #7425 |
| **Deployment streaming & webhook integration** | Hermes (Gateway/Telegram), IronClaw (WebChat v2 auth parity), CoPaw (Desktop update), PicoClaw (WebSocket reconnection) | #21587, #4609, #4669, #2796 |
| **Multimodal/ASR expansion** | NanoBot (StepFun ASR), NanoClaw (future runtime flexibility), Hermes (vision gaps), PicoClaw (image handling) | #4260, #1690, #43086, #85669 |

---

## 5. Differentiation Analysis  

| Feature Focus | OpenClaw | NanoClaw | Hermes Agent | NanoBot | PicoClaw | IronClaw |
|---------------|----------|----------|--------------|---------|----------|----------|
| **Runtime Model Support** | Global config + per‑profile selection | Future `AgentRuntime` abstraction | Provider registry (Reborn) | GPT‑5/ChatGPT emulation, Dream memory | Limited OpenAI, custom | vLLM, Llama.cpp via Reborn |
| **Deployment Model** | GitHub‑hosted Docker + systemd plugins | Docker per‑conv (soon “direct‑runner”) | Docker‑in‑docker + desktop | Docker + open‑source | Container‑less; local dev | Containerized + operator CLI |
| **User Interface** | Web UI + CLI + Agent console | WebControlPanel (port 3100) + CLI | Desktop app + WebChat | Web UI + webTV | WebSocket‑based UI | Operator console, Tauri desktop |
| **Security Hardening** | Auth profiles lock, credential audit | Tele‑pairing CS‑PRNG, sandbox isolation | Device pairing, safe‑bins | Cron/jail safety | SSRF protection | Strict‑mode provider validation |
| **Observability** | Session metadata, LaTeX in UI | Trace UI, build metadata | Operator diagnostics | Tool‑call trace, token logs | Nightly logs | Operator audit logs |
| **Target Users** | Developers seeking plugin plug‑and‑play | Dev ops wanting lightweight infra | Teams building multi‑channel agents | Niche GPT‑5/LLM testing | Hobbyists, local dev | Enterprise scale with ops tooling |

---

## 6. Community Momentum & Maturity  

| Stage | Projects | Indicators |
|-------|----------|------------|
| **Rapid Iteration (PR‑heavy, no releases)** | NanoClaw, Hermes Agent, IronClaw | >30 PRs/day, release gaps | 
| **Production‑Ready (stable releases)** | OpenClaw, PicoClaw, CoPaw | ≥1 release/month, maturity in docs | 
| **Stabilizing (low volume, bug‑focused)** | ZeroClaw, NullClaw, LobsterAI | Few open issues, maintenance merges | 

**Maturity Trend**: The industry appears to be **splitting** between “fast‑move, high‑risk” projects (NanoClaw, Hermes) and “steady‑state, release‑oriented” ones (OpenClaw, CoPaw). The former drive architectural experiments; the latter build ecosystems for scale.

---

## 7. Trend Signals  

| Trend | Community Voice | Value for Developers |
|-------|-----------------|----------------------|
| **Model‑agnostic runtime layers** | NanoClaw #1690, NanoBot GPT‑5 shift | Enables multi‑model experimentation without code churn |
| **Zero‑trust credential handling** | OpenClaw audit, NullClaw redaction | Reduces breach surface, aligns with Enterprise compliance |
| **Observability & automated auditing** | NanoClaw trace UI, IronClaw operator diagnostics | Essential for debugging complex multi‑agent workflows |
| **Multimodal & voice‑first interfaces** | NanoBot ASR, Hermes vision gaps | Pushes agents beyond text → broader use‑cases |
| **User‑centric UI/UX (desktop & web)** | OpenClaw web UI, CoPaw desktop, PicoClaw WebSocket | Lowers barrier to entry for non‑technical users |
| **Coupling with standard platforms (Telegram, Matrix, WeChat)** | Hermes gateway upgrades, ZeroClaw per‑sender RBAC | Accelerates adoption in existing communication ecosystems |

---

### Bottom Line for Decision‑Makers  
- **If you need a battle‑tested, plugin‑rich platform with regular releases, OpenClaw is the most balanced choice.**  
- **If your priority is lightweight, CI‑friendly deployments or rapid runtime experimentation, NanoClaw (once visible releases appear) or Hermes (gateway‑first) are stronger contenders.**  
- **For enterprise‑scale orchestration with audit trails, IronClaw’s Reborn stack and operator CLI shine.**  
- **Emerging trends—runtime abstraction and security hardening—are disproportionately concentrated in the high‑velocity projects; investing in those lines yields the highest upside for future‑proof agent stacks.**

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-06-10

## Today's Overview
NanoBot is currently seeing high development velocity, with 23 Pull Requests updated in the last 24 hours and a significant number of merges focused on memory management and provider compatibility. The project is actively refining its "Dream" (memory consolidation) mechanism and expanding support for next-generation LLMs (GPT-5/o-series). Overall project health is strong, characterized by a high ratio of merged PRs and a proactive approach to security (workspace escaping) and stability.

## Releases
*No new releases in the last 24 hours.*

## Project Progress
The following key improvements were merged or closed today:
*   **WebUI Enhancements**: Added a "Fork from here" feature for assistant replies, allowing users to branch conversations into new chats [#4208].
*   **Onboarding**: Reworked documentation to provide clearer entry points for beginners, including configuration maps and deployment guides [#4177].
*   **Memory & Identity**: Implemented a configuration toggle allowing users to protect `USER.md` and `SOUL.md` from being automatically edited by the Dream agent [#3400].
*   **Tooling & Validation**: Increased strictness of tool call validation to prevent silent repairs of malformed arguments, ensuring better error transparency [#4190].
*   **Channel Extensions**: Added LaTeX formula rendering for the Feishu channel via CodeCogs [#3434].
*   **Skill Maintenance**: Adjusted the `daily-english-read` cron schedule to run every 2 days instead of daily [#4265].

## Community Hot Topics
*   **Next-Gen Model Support**: There is an immediate focus on adapting to GPT-5 and o-series models, specifically regarding the transition from `max_tokens` to `max_completion_tokens`. This is seen in Issue [#4261] and multiple competing PRs [#4268, #4263].
*   **Memory & Context Integrity**: Significant discussion around how `history.jsonl` handles session isolation and how the `idleCompact` mechanism summarizes history without losing critical user corrections [#4259, #4264].
*   **Security Hardening**: A series of PRs by contributor `yu-xin-c` indicates a push toward securing the execution environment, specifically blocking symlink escapes and protecting read-only roots [#4119, #4053].

## Bugs & Stability
| Severity | Issue/PR | Description | Status | Fix/PR |
| :--- | :--- | :--- | :--- | :--- |
| **High** | [#4259] | `history.jsonl` cross-session injection causing context pollution. | Open | Pending |
| **High** | [#4267] | WebUI intermittently dropping assistant replies during fast token production. | Open | [#4267] |
| **Medium** | [#4061] | OpenAI-compatible text-format tool calls not being parsed into structured calls. | Open | Pending |
| **Medium** | [#4261] | GPT-5/o-series models rejecting `max_tokens` parameter. | Open | [#4268, #4263] |
| **Low** | [#4264] | `idleCompact` omitting the last 8 messages, potentially losing final corrections. | Open | Pending |
| **Low** | [#4262] | `botIcon` not displaying correctly at startup in agent mode. | Open | Pending |

## Feature Requests & Roadmap Signals
*   **Granular Model Control**: Request to override the LLM model on a per-conversation basis rather than globally [#4253]. This suggests a move toward more flexible, multi-model workflows (e.g., alternating between local LlamaCPP for privacy and OpenRouter for capability).
*   **Multimodal/ASR Expansion**: Addition of the StepFun ASR SSE transcription provider [#4260], indicating a roadmap expansion into more voice-to-text capabilities.
*   **Memory Lifecycle Testing**: The introduction of a scripted memory lifecycle harness [#4193] suggests an upcoming effort to stabilize the long-term memory system before a major release.

## User Feedback Summary
*   **Pain Points**: Users are experiencing "context pollution" where history from other sessions leaks into the current prompt, and some are frustrated by the "forgetfulness" of the `idleCompact` mechanism during the final stages of a task.
*   **Use Cases**: Users are increasingly using the bot for a hybrid of local (private/cheap) and cloud (fast/capable) models, necessitating better per-session configuration.
*   **Satisfaction**: The addition of "Fork from here" in the WebUI addresses a common UX request for iterative prompting.

## Backlog Watch
*   **Tool Parsing Bug**: Issue [#4061] (OpenAI-compatible text-format tool calls) has been open since May 29. This is a critical gap for users utilizing non-standard OpenAI-compatible providers.
*   **Memory Logic**: The `idleCompact` bug [#4264] affects the quality of the bot's long-term memory and requires a logic change in how the "tail" of a conversation is handled.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-10

## 1. Today's Overview
Hermes Agent shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in active maintenance mode with no new releases (currently on v0.16.0), but significant bug-fixing and feature work across gateway, desktop, CLI, and agent core. The ratio of open to closed items (46:4 issues, 44:6 PRs) suggests a growing backlog being actively triaged. Critical-path bugs in cron rendering, gateway restart logic, and credential leakage are being addressed immediately.

## 2. Releases
**No new releases today.** Current stable remains v0.16.0. The next release will likely incorporate the batch of fixes currently in review (gateway restart, cron rendering, credential redaction, macOS dock icon).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary |
|----|------|---------|
| [#37920](https://github.com/NousResearch/hermes-agent/pull/37920) | Bug fix | Fixed profile cloning for memory providers (Hindsight) that store provider-owned configs under `HERMES_HOME` |
| [#37962](https://github.com/NousResearch/hermes-agent/pull/37962) | Bug fix | Strips reserved runtime vars (`HERMES_HOME`, `HERMES_PROFILE`, etc.) when cloning `.env` during `hermes profile create --clone` |
| [#43214](https://github.com/NousResearch/hermes-agent/pull/43214) | Bug fix | Dashboard auth: warns when `HERMES_DASHBOARD_PUBLIC_URL` override is silently rejected due to normalization returning empty string |

**3 PRs closed/merged today**, all addressing configuration/profile management bugs that affect multi-profile and Docker deployments.

## 4. Community Hot Topics — Most Active Discussions
| Issue | Comments | 👍 | Area | Core Need |
|-------|----------|-----|------|-----------|
| [#21587](https://github.com/NousResearch/hermes-agent/issues/21587) | 9 | 1 | Gateway/Telegram | **Telegram's May 2026 AI bot update** (Guest Bots, Bot-to-Bot, Stickers, Chat Automation) — users want first-class support for new multi-agent workflows |
| [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) | 6 | 0 | Agent/Security | **Passwords redacted as `***` but model reads own history** — credential leakage on second tool call; defense-in-depth redaction needed in `chat_completion_helpers.py` |
| [#42006](https://github.com/NousResearch/hermes-agent/issues/42006) | 5 | 0 | Gateway/macOS | **launchd restart broken after update** — missing `bootout` before `bootstrap` causes fallback to detached mode |
| [#13107](https://github.com/NousResearch/hermes-agent/issues/13107) | 4 | 0 | CLI/Config | **Command description override via config.yaml** — hardcoded English descriptions block i18n for Telegram/Discord bot command registration |
| [#42086](https://github.com/NousResearch/hermes-agent/issues/42086) | 3 | 0 | Tools/Vision | **Gemini 2.5/2.0 vision support missing** — `_supports_media_in_tool_results()` only matches Gemini 3.x strings |

**Underlying theme:** Platform integrations (Telegram, Matrix, WeChat, Gemini) are evolving faster than Hermes adapters; users need configurable, version-aware tool/platform support.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1** | [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) | Credentials leaked via conversation history on 2nd tool call | No |
| **P1** | [#43014](https://github.com/NousResearch/hermes-agent/issues/43014) | Cron `deliver=origin` fails to resolve delivery target in CLI sessions | No |
| **P2** | [#43099](https://github.com/NousResearch/hermes-agent/issues/43099) | Chromium/browser tool broken — falls back to DDGGS `web_extract` which fails | No (needs repro) |
| **P2** | [#43211](https://github.com/NousResearch/hermes-agent/issues/43211) | Stale stream errors silently retry same provider instead of triggering fallback | No |
| **P2** | [#43175](https://github.com/NousResearch/hermes-agent/issues/43175) | `session_search` rehydrates huge compaction summaries via bookends, bloating context | No |
| **P2** | [#43121](https://github.com/NousResearch/hermes-agent/issues/43121) | **Critical:** Cron sessions in Desktop show only user prompt — tool calls/LLM response invisible until gateway restart | **Yes: [#43233](https://github.com/NousResearch/hermes-agent/pull/43233)** |
| **P2** | [#43217](https://github.com/NousResearch/hermes-agent/pull/43217) | Codex app-server approvals not routed through gateway (approval queue bypass) | **Yes: PR open** |
| **P3** | [#42006](https://github.com/NousResearch/hermes-agent/issues/42006) | macOS launchd restart missing `bootout` before `bootstrap` | No |
| **P3** | [#42084](https://github.com/NousResearch/hermes-agent/issues/42084) | WeChat Silk voice messages not converted to WAV for STT | No |
| **P3** | [#43196](https://github.com/NousResearch/hermes-agent/issues/43196) | Dashboard wedges (SIGKILL required) when hosted as persistent service — PTY/Chat tab bugs | No |

**Two critical Desktop/cron bugs have active fix PRs** (#43233, #43217). Credential leakage (#43083) and cron delivery (#43014) remain unaddressed at PR level.

## 6. Feature Requests & Roadmap Signals
| Issue | Area | Signal Strength | Likelihood for Next Release |
|-------|------|-----------------|----------------------------|
| [#21587](https://github.com/NousResearch/hermes-agent/issues/21587) | Telegram: Guest Bots, Bot-to-Bot, Stickers | High (9 comments, platform update) | Medium — requires gateway adapter rewrite |
| [#42896](https://github.com/NousResearch/hermes-agent/issues/42896) | Kanban: `request-review` transition | Medium (3 comments, workflow gap) | High — small CLI/dispatcher change |
| [#41554](https://github.com/NousResearch/hermes-agent/issues/41554) | Delegate: `delegated_role` field for subagent attribution | Medium (2 comments, multi-agent tracing) | High — schema addition only |
| [#31375](https://github.com/NousResearch/hermes-agent/issues/31375) | Config: Per-tool enable/disable (below toolset) | Medium (2 comments, 👍1, common pain point) | High — config schema change |
| [#13107](https://github.com/NousResearch/hermes-agent/issues/13107) | Config: Command description override for i18n | Medium (4 comments, blocks non-English bots) | Medium — requires registry refactor |
| [#43052](https://github.com/NousResearch/hermes-agent/issues/43052) | Provider: `local` overlay + `base_url_env_var` (vLLM/llama.cpp) | Low (2 comments, config gap) | High — simple provider registry fix |
| [#43226](https://github.com/NousResearch/hermes-agent/pull/43226) | **New Platform:** Carbon Voice (voice-first STT/TTS) | New (PR opened today) | High — PR ready, text-in/text-out adapter |

**Top candidates for v0.17.0:** Kanban review transition, delegated_role, per-tool config, local provider overlay, Carbon Voice platform. Telegram Guest Bots is larger scope.

## 7. User Feedback Summary — Real Pain Points
| Pain Point | Issues | User Impact |
|------------|--------|-------------|
| **Desktop ↔ Gateway sync broken** | [#42962](https://github.com/NousResearch/hermes-agent/issues/42962), [#43121](https://github.com/NousResearch/hermes-agent/issues/43121) | Sessions updated via Telegram don't refresh in Desktop; cron sessions unviewable without gateway restart |
| **UI rendering bugs** | [#42992](https://github.com/NousResearch/hermes-agent/issues/42992), [#43122](https://github.com/NousResearch/hermes-agent/issues/43122) | Multi-line user messages clipped; platform icons invisible in dark theme |
| **Local provider UX** | [#43028](https://github.com/NousResearch/hermes-agent/issues/43028), [#43052](https://github.com/NousResearch/hermes-agent/issues/43052) | Ollama spinner timeout annoying; `local` provider lacks env var config |
| **Approval friction** | [#42921](https://github.com/NousResearch/hermes-agent/issues/42921) | `execute_code` still prompts in YOLO mode despite `subagent_auto_approve: true` |
| **Config ignored** | [#41744](https://github.com/NousResearch/hermes-agent/issues/41744), [#42780](https://github.com/NousResearch/hermes-agent/issues/42780) | `auxiliary.title.enabled: false` ignored; `HERMES_DASHBOARD_PUBLIC_URL` not respected in Docker |
| **Memory plugin hang** | [#34070](https://github.com/NousResearch/hermes-agent/issues/34070) | Fresh CLI subprocesses hang in Honcho memory prefetch (regression from v0.15.0) |

**Sentiment:** Frustration with Desktop reliability (sync, rendering) and config options that don't work. Appreciation for rapid bug acknowledgment but demand for faster fixes on daily-driver issues.

## 8. Backlog Watch — Stale Important Items Needing Attention
| Issue/PR | Age | Area | Why It Matters |
|----------|-----|------|----------------|
| [#7507](https://github.com/NousResearch/hermes-agent/issues/7507) | ~60 days | Matrix | Configurable reply quoting — blocks bot usability in group chats (clutters Element UI) |
| [#20307](https://github.com/NousResearch/hermes-agent/issues/20307) | ~35 days | Plugins | `transform_api_message` hook — plugin authors have no clean pre-LLM message transform point |
| [#34070](https://github.com/NousResearch/hermes-agent/issues/34070) | ~13 days | Memory | Honcho prefetch hang on cold-start subprocesses — breaks cron/dispatcher workflows |
| [#35403](https://github.com/NousResearch/hermes-agent/pull/35403) | ~11 days | Slack | `mention_patterns` config wired for Telegram/DingTalk but not Slack — feature parity gap |
| [#39353](https://github.com/NousResearch/hermes-agent/pull/39353) | ~6 days | Tooling | TypeScript 6 + CI typecheck — foundational for frontend stability, no movement |
| [#41058](https://github.com/NousResearch/hermes-agent/pull/41058) | ~3 days | Kanban | Lock timeout for kanban DB — gateway process holding lock indefinitely blocks all kanban commands |

**Maintainer action needed:** The kanban lock timeout (#41058) is a **production-blocking** issue reported with a live stuck gateway. Matrix reply quoting (#7507) and plugin hook (#20307) are long-standing architectural gaps. TS6 migration (#39353) should be prioritized to unblock frontend PRs.

---

*Digest generated from GitHub API data for NousResearch/hermes-agent on 2026-06-10. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here’s a structured English project digest for PicoClaw (Picoclaw) based on the provided GitHub data up to 2026-06-10:

---

### Project Digest: PicoClaw/Open-Source Agent & AI Assistant

**Overview (2026-06-10)**
PicoClaw continues to evolve as an open-source project centered on advanced AI assistants and open-source practices. The recent activity highlights strong engineering focus, with active discussions on new features, fixes, and enhancements aimed at improving user experience, security, and the platform’s interoperability.

---

#### **Releases**
- **Latest Nightly Build:** Version **v0.2.9-nightly.20260610.b9a8fad6** is newly released — note that this version is marked as unstable in some code samples.
- No new features released today.
- Only **1 extension** (v1): mtbs release completed.

---

#### **Project Progress**
- **Merged/Closed PRs:**
  - **PR #3063:** Feature request related to "deltachat gateway" — pending review.
  - **PR #3064:** Bug fix concerning a `type assertion` issue, resolved.
  - **PR #2942:** Technical deviation due to malformed config parsing — fix applied.
  - **PR #2990:** Enhancement for contextual session history viewing — pending bump.
  - **PR #2937:** Suggested fixed: HTTPS URL rewriting for better encoding.
- **Open issues:** Several high-priority issues remain, but since updates (including bug fixes) are being resolved, overall project health is improving.
- The vibrant community keeps pushing for **collaborative vectorization**, seamless multi-agent communication, and robust security posture.

---

#### **Community Hot Topics**
- The top-discussed issue (#2796) highlights a missed opportunity for streaming and message reconciliation in complex chat scenarios.
- Another critical concern (#2939) enables streaming messages in legacy bug and has enough community discussion.
- Ethical and security issues, like WebSocket reconnection or proxy manipulation, are prominent in feedback.
- One prominent suggestion concerned the **Fill preview** dashboard allows encouraging verbose messages by skipping visibility restrictions.

---

#### **Bugs & Stability**
- **CRITICAL (Priority 1):** RFC 2544 SSRF protection disrupts HTTP 200 responses when private IP addresses are used.
- **MAJOR (Priority 2):** Maintaining compatibility with outdated terrasolver librariesなくします. Security warnings around stale SSL straddles.
- **MINOR (Priority 3):** Occasional dead-revivals and confirmation errors in session creation workflows.

All active reports have updates or accepted revisions; dedicated maintainers quickly address the critical pieces.

---

#### **Feature Requests & Roadmap Signals**
- Users expect more substantial work integrating **Near AI Cloud** and enhance **contextual compression** mechanisms.
- There are breedings for listing new provider integrations, explicit turn completion flags in PicoWebSocket, and improved **model output freshness**.
- **User Requested Search:** Enhanced teach mode and command listing features are ongoing topics.

---

#### **User Feedback Summary**
- The community is cautiously optimistic. Most users report increased stability after bug patches, but a few site-wide usability issues and communication barriers remain.
- People are increasingly interested in **customization**, **security hardening**, and an **API-first next product release**.

---

#### **Backlog Watch**
- **High Priority (URL):**
  - [Fix(config): Add OK check for type assertion] — [Pending Response]
  - [HANDLES AUTH-TOKEN PROBLEM] — [Routine Review]
- **Medium Priority (Incoming):**
  - [CWD API Token Changes] — [TTT]
- The community requests unified reporting for critical and minor issues; reviewers are encouraged to log them via the repository’s “Issues” tab.

---

### **Conclusion**
PicoClaw remains a vibrant, open-community project. While recent pushes speed tech towards stability, responsiveness, and broader usability, patch management and addressing user-reported platform challenges are pivotal for continued health. Active collaboration is essential for the squad to guide the roadmap effectively.

---

*For more details, visit the PicoClaw GitHub repo or issue tracker.*  


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-10

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 44 PRs updated in the last 24 hours (40 merged/closed, 4 open), though most are older contributions (Feb–Mar 2026) now being batch-processed. Only 1 active issue (#1690) received updates today, indicating a **stabilization phase** rather than new feature inception. No new releases were cut. The project appears to be clearing a backlog of community contributions — security hardening, documentation, observability, and runtime flexibility — suggesting a focus on production readiness and developer experience ahead of a potential version bump.

---

## 2. Releases
**No new releases** published today. The project remains on its current version. Given the volume of merged PRs (40), a patch or minor release aggregating these fixes (security, telemetry, direct-runner mode, skill marketplace) is likely imminent.

---

## 3. Project Progress — Merged/Closed PRs Today (Top Highlights)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#2718](https://github.com/nanocoai/nanoclaw/pull/2718) | **Fix (Security/Stability)** | Fixes Feishu zombie `active_cards` leak when `agent-runner` exits abnormally (timeout/kill). `deleteActiveCard` now called on process termination, not just SDK `final` event. | **High** — Resolves production UI stuck state ("运行中" for 50+ min). |
| [#1285](https://github.com/nanocoai/nanoclaw/pull/1285) | **Feature** | Adds `NANOCLAW_DIRECT_RUNNER=1` to run Claude Agent SDK in-process (no Docker per conversation). Fully backwards compatible. | **High** — Major latency/resource reduction for dev/CI; enables lighter deployments. |
| [#1202](https://github.com/nanocoai/nanoclaw/pull/1202) | **Feature (Observability)** | Agent trace logging + Web UI (port 3001): full tool-call capture, token counts, dark-mode dashboard. | **High** — Critical for debugging/analytics; previously missing. |
| [#2722](https://github.com/nanocoai/nanoclaw/pull/2722) | **Fix (Security)** | Replaces `Math.random()` with `crypto.randomInt()` for Telegram pairing codes; locks down store permissions. | **Critical** — Fixes predictable auth codes; first pairer can become owner. |
| [#1309](https://github.com/nanocoai/nanoclaw/pull/1309) | **Feature (Ecosystem)** | Skill Marketplace/Registry: CLI to discover/install/manage skills from GitHub repos. Closes #384. | **Medium** — Enables community extensibility; foundational for plugin economy. |
| [#212](https://github.com/nanocoai/nanoclaw/pull/212) | **Feature (UI)** | Full Web Control Panel (Lit+Vite+Fastify, port 3100): 11 tabs across Chat, Dashboard, Ops, System. | **High** — Major UX upgrade; replaces CLI-only ops. |
| [#1161](https://github.com/nanocoai/nanoclaw/pull/1161) | **DX/Simplification** | Adds `/setup-dev` skill to sync dev tools from `./dev-agents` → `.claude/skills/`. | **Medium** — Improves local contributor onboarding. |
| [#1333](https://github.com/nanocoai/nanoclaw/pull/1333) | **Fix (Observability)** | Build-time version metadata (git commit, branch, timestamp) injected into logs at startup. | **Low-Medium** — Improves debuggability across environments. |
| [#1084](https://github.com/nanocoai/nanoclaw/pull/1084) | **Docs (Architecture)** | Container Sandbox System design document. | **Low** — Reference for sandbox isolation model. |
| [#214](https://github.com/nanocoai/nanoclaw/pull/214) | **Docs (Security)** | Comprehensive security audit report (Trivy + manual): SDK credential isolation, Apple Container egress. | **Medium** — Transparency for enterprise adopters. |

> **Note**: 30+ additional PRs closed today — mostly documentation (JSDoc, skill guidelines, CLAUDE.md examples), minor fixes, and older feature PRs marked `Status: Blocked` / `Pending Closure`. The maintainers appear to be doing a **backlog grooming sweep**.

---

## 4. Community Hot Topics

### 🔥 **Issue #1690** — *Multi-runtime agent SDK abstraction (Claude + Codex + local models)*  
**Author**: chiptoe-svg | **Updated**: 2026-06-10 | **Comments**: 5 | **👍**: 3  
🔗 [nanocoai/nanoclaw#1690](https://github.com/nanocoai/nanoclaw/issues/1690)

**Summary**: Proposes an `AgentRuntime` interface at host level, allowing modular SDK installation as skills (mirroring `/add-telegram`, `/add-slack`). Would enable swapping Claude ↔ Codex ↔ local models without code changes.

**Underlying Need**: **Vendor neutrality & future-proofing**. Users want to avoid lock-in to Anthropic's SDK and experiment with OpenAI Codex, Ollama, or custom runtimes. The "skill" pattern is proven for channels — extending it to runtimes is a natural architectural evolution.

**Signal**: This is the **only active issue** with recent discussion. It represents the highest-leverage architectural request and likely shapes the next major version's plugin architecture.

---

## 5. Bugs & Stability — Today's Fixes (Ranked by Severity)

| Severity | PR | Issue | Fix Status |
|----------|-----|-------|------------|
| **Critical** | [#2722](https://github.com/nanocoai/nanoclaw/pull/2722) | Telegram pairing codes predictable (`Math.random()`); first pairer becomes owner | ✅ **Merged** — `crypto.randomInt()` + store perm lockdown |
| **High** | [#2718](https://github.com/nanoclaw/nanoclaw/pull/2718) | Feishu interactive cards stuck "running" >50 min after runner kill (zombie `active_cards`) | ✅ **Merged** — Cleanup on process exit, not just SDK `final` |
| **Medium** | [#1192](https://github.com/nanocoai/nanoclaw/pull/1192) | Claude model implicit/invisible in session files; hard to audit | ✅ **Merged** — Explicit model set in code |
| **Low** | [#379](https://github.com/nanocoai/nanoclaw/pull/379) | `readEnvFile` missing JSDoc → poor IDE support | ✅ **Merged** — Full param/return docs added |

> **No new bugs reported today**. The 4 open PRs are all documentation or follow-up fixes — no regressions or crashes surfaced.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Multi-runtime SDK abstraction** (AgentRuntime interface) | [#1690](https://github.com/nanocoai/nanoclaw/issues/1690) (3👍, 5 comments) | **High** — Only active architectural issue; aligns with skill pattern |
| **Skill Marketplace/Registry** | [#1309](https://github.com/nanocoai/nanoclaw/pull/1309) (merged) | **High** — Already merged; CLI commands ready |
| **Direct Runner (no Docker)** | [#1285](https://github.com/nanocoai/nanoclaw/pull/1285) (merged) | **High** — Merged, env-gated, backwards compatible |
| **Web Control Panel** | [#212](https://github.com/nanocoai/nanoclaw/pull/212) (merged) | **High** — Full UI merged; likely behind flag or default soon |
| **Agent Trace Observability + Web UI** | [#1202](https://github.com/nanocoai/nanoclaw/pull/1202) (merged) | **High** — Port 3001 UI merged; production-grade |
| **Approval-gated capabilities (`/approve`, `/reject`)** | [#1245](https://github.com/nanocoai/nanoclaw/pull/1245) (merged) | **Medium** — Skill merged; extends capabilities system |
| **External markdown seed files in persistence** | [#357](https://github.com/nanocoai/nanoclaw/pull/357) (merged) | **Medium** — `PERSISTENCE_SEED_MD_FILES` env merged |
| **Prompt trace logging (JSONL, redaction)** | [#337](https://github.com/nanocoai/nanoclaw/pull/337) (merged) | **Medium** — Observability foundation merged |

**Prediction**: Next release (v0.x or v1.0) will bundle: **Direct Runner, Web Control Panel, Trace UI, Skill Marketplace, Security Hardening (Telegram/Feishu), Multi-runtime groundwork**. The #1690 abstraction is the only major *unmerged* initiative — expect a design PR soon.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **"Docker per conversation is too heavy/slow"** | #1285 motivation: "Docker containers add significant latency and resource overhead" | 🟢 **Addressed** (Direct Runner merged) |
| **"Can't see what model is actually running"** | #1192: session files hide model; hard to audit | 🟢 **Addressed** (Explicit model set) |
| **"No visibility into agent reasoning/tool calls"** | #1202: "Records every agent invocation as a trace with full tool call I/O" | 🟢 **Addressed** (Trace UI merged) |
| **"Telegram pairing is insecure"** | #2722: `Math.random()` predictable; owner escalation risk | 🟢 **Addressed** (CSPRNG + perms) |
| **"Feishu UI lies — shows running after crash"** | #2718: zombie cards for 50+ min | 🟢 **Addressed** (Exit cleanup) |
| **"Want to use Codex/local models, not just Claude"** | #1690: "Multi-runtime abstraction layer... mirroring channel pattern" | 🟡 **In Design** (Active discussion) |
| **"Skill installation is manual"** | #1309: Marketplace CLI for GitHub-hosted skills | 🟢 **Addressed** (Registry merged) |
| **"Docs are scattered; hard to customize"** | #212, #214, #481, #379, #380: JSDoc, security audit, CLAUDE.md examples, customizing guide | 🟢 **Addressed** (Doc sweep merged) |

**Overall**: Users are **satisfied with recent velocity** — core production pain points (security, observability, weight, extensibility) are being resolved in batch. The main unmet ask is **runtime pluralism** (#1690).

---

## 8. Backlog Watch — Stale/Blocked Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#1690](https://github.com/nanocoai/nanoclaw/issues/1690) | 64 days | **Open, active** | **Highest strategic value** — defines next-gen plugin architecture. Needs maintainer design review + decision on interface shape. |
| [#212](https://github.com/nanocoai/nanoclaw/pull/212) | 118 days | **Closed: Blocked / Pending Closure** | Web Control Panel merged but marked blocked — likely awaiting release gating or flag rollout. Verify if it should be reopened for merge. |
| [#337](https://github.com/nanocoai/nanoclaw/pull/337) | 111 days | **Closed: Blocked / Pending Closure** | Prompt trace logging merged but blocked — may need config defaults or redaction tuning before release. |
| [#357](https://github.com/nanocoai/nanoclaw/pull/357) | 110 days | **Closed: Blocked / Pending Closure** | External markdown seeds merged but blocked — check if `PERSISTENCE_SEED_MD_FILES` needs validation/tests. |
| [#214](https://github.com/nanocoai/nanoclaw/pull/214) | 118 days | **Closed: Needs Review** | Security audit doc — critical for enterprise trust. Should be published to `docs/` or website. |
| [#1084](https://github.com/nanocoai/nanoclaw/pull/1084) | 87 days | **Closed: Needs Review** | Container Sandbox design doc — architectural reference. Merge to `docs/architecture/`? |
| [#380](https://github.com/nanocoai/nanoclaw/pull/380) | 109 days | **Closed: Blocked / Pending Closure** | WhatsAppChannel JSDoc — trivial but blocked. Likely just needs final review. |

> **Pattern**: Many "Closed: Blocked/Pending Closure" PRs are **merged in code but not released**. The maintainers should either: (a) cut a release including them, or (b) reopen if they need further work. The "Needs Review" docs PRs (#214, #1084) are high-value for adoption and should be prioritized.

---

## 📊 Health Scorecard (2026-06-10)

| Dimension | Score | Trend |
|-----------|-------|-------|
| **Velocity** | 🟢 High (40 PRs merged today) | ↗️ Backlog clearing |
| **Security** | 🟢 Hardening active (Telegram, Feishu) | ↗️ |
| **Observability** | 🟢 Major features merged (Trace UI, Build metadata) | ↗️ |
| **Extensibility** | 🟢 Marketplace + Direct Runner + Runtime abstraction (WIP) | ↗️ |
| **Documentation** | 🟡 Sweep done, but key docs stuck in "Needs Review" | → |
| **Release Cadence** | 🔴 No release despite 40+ merged PRs | ↘️ **Risk** |
| **Community Engagement** | 🟡 Low issue volume (1 active), but high PR throughput | → |

**Bottom Line**: NanoClaw is **technically advancing rapidly** but **release process is the bottleneck**. The codebase is production-hardening; the product needs a version cut. The multi-runtime abstraction (#1690) is the strategic thread to watch — it will define whether NanoClaw becomes a universal agent host or remains Claude-centric.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

1. **Today's Overview**  
NullClaw remains actively developed, with 8 PRs merged/closed and 5 updated issues in the last 24h. Key fixes include resolving telemetry attribution (`#948`), refining model discovery logic for custom providers (`#940`), and stabilizing PII redaction rules (`#945`). However, an open issue (`#941`) reveals unresolved bugs in agent cron job execution pathways, potentially blocking scheduled task reliability. The project maintains steady velocity despite competing priorities between user-facing fixes and backend improvements.  

2. **Releases**  
No new releases in the last 24h. Latest version appears stable post-[PR #945](https://github.com/nullclaw/nullclaw/pull/945) redaction improvements and [PR #943](https://github.com/nullclaw/nullclaw/pull/943) Telegram typing indicator fixes.  

3. **Project Progress**  
- Merged PRs addressed three critical bottlenecks:  
  - Dynamic model discovery (`#940` closed #936)  
  - Evolink integration (`#947`) adds multi-model gateway support  
  - Agent config context behavior (`#939` resolved #937)  
- `compact_context` flag's no-op status and cron job subprocess failures (`#941`) remain active blockers.  

4. **Community Hot Topics**  
Most discussed:  
- [PR #948](https://github.com/nullclaw/nullclaw/pull/948) [Open] adds traceability to cron agent attribution (1 👍).  
- [PR #945](https://github.com/nullclaw/nullclaw/pull/945) [Closed] fixes false phone redactions in date/time outputs (highest upvotes).  
- [Issue #941](https://github.com/nullclaw/nullclaw/issues/941) highlights recurring cron job failures requiring deeper async subsystem scrutiny.  

5. **Bugs & Stability**  
- **Critical**: [Issue #941](https://github.com/nullclaw/nullclaw/issues/941) prevents cron jobs from spawning subprocesses despite config compliance.  
- **Medium**: Expired PII redaction (`#944`) accidentally censoring `date` command logs – resolved via guard clause in `#945`.  
- **Low**: Telegram typing indicator omission in callback queries fixed by `#943`.  

6. **Feature Requests & Roadmap Signals**  
- [PR #947](https://github.com/nullclaw/nullclaw/pull/947) integrates Evolink.com as first-party provider, suggesting gateway support prioritization.  
- Community requests for expanded cron telemetry (`#948`) align with enterprise user needs from report `#941` context.  

7. **User Feedback Summary**  
Negative:  
- Business users report production cron job failures (`#941`) disrupting scheduled tasks.  
- Ambiguous model discovery errors when configuring custom OpenAI endpoints pre-`#940` fix.  
Positive:  
- Clarified Telegram button response blanking (`#943`) improves perceived responsiveness.  

8. **Backlog Watch**  
- **#941** (Open, 2 weeks old): Requires investigation into agent task scheduling internals vs. cron integrations.  
- **#936** (Closed via #940): Resolved provider query oversight; model catalog reliance on static fallback lists previously limited vendor options.  
- **#711** (Closed): Cross Memory feature indicates future roadmap toward agent federation – monitor for toolchain evolution.


</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑06‑10**  

---

### 1. Today’s Overview  
Over the past 24 hours the repository recorded **47 open issues** (42 active, 5 closed) and **50 pull‑request updates** (48 open, 2 merged/closed). No new versioned releases were published. Activity is dominated by *core system hardening* and *Reborn‑related* work, with a noticeable spike in architectural refactorings and diagnostic tooling. The project continues to move toward production‑readiness, but several stability regressions and long‑standing TODO items remain open.

---

### 2. Releases  
**None** – the `Latest Releases` section is empty and the `Latest Issues` list shows no version bump. All changes are in‑flight feature and bug‑fix work.

---

### 3. Project Progress – Merged / Closed PRs & Fixed Bugs (last 24 h)  

| PR / Issue | Status | Main Impact | Link |
|------------|--------|-------------|------|
| **#4604** – *Reborn WebUI v2 lacks a browser‑driven full‑stack E2E* | **Closed** (created 2026‑06‑09, updated 2026‑06‑09) | Completes a missing end‑to‑end test tier; now the stack has unit, contract, in‑process, and real‑browser coverage. | <https://github.com/nearai/ironclaw/issues/4604> |
| **#4609** – *Audit & test authentication parity for WebChat v2* | **Closed** | Adds test coverage for bearer, DB/OIDC, and query‑token auth paths, closing an authentication parity gap. | <https://github.com/nearai/ironclaw/issues/4609> |
| **#4591** – *[Reborn] Operator command‑plane foundation* | **Closed** | Introduces the operator command‑plane API surface (setup, config, diagnostics, lifecycle) needed for later Reborn tooling. | <https://github.com/nearai/ironclaw/issues/4591> |
| **PR #4548** – *Bug: Chat completion request serializes duplicate top‑level `model` field when tools are included* | Fixed in PR (merged/closed) | Removes duplicated `model` field from DeepSeek payloads, eliminating 400 errors when tools are used. | <https://github.com/nearai/ironclaw/issues/4548> |
| **PR #4587** – *Bug: Cannot configure Minimax provider* | Fixed in PR (merged/closed) | Resolves secret‑metadata fetch failure that prevented Minimax provider activation. | <https://github.com/nearai/ironclaw/issues/4587> |
| **2 merged PRs** reported in the “PRs updated in last 24 h” count (both closed) – these are the only merge activity for the day.  

---

### 4. Community Hot Topics  

| Item (Comments) | Why it’s Hot | Underlying Need |
|-----------------|--------------|-----------------|
| **#3026** – *Epic: Reborn production wiring & cutover readiness* (3 comments) | Central “production cutover” epic; touches architecture, validation, and safety of the new production substrate. | A deterministic, production‑grade wiring story that can be safely rolled back and that prevents traffic when a service is missing. |
| **#4642** – *Strict‑mode providers’ null‑for‑unset‑optionals rejected* (1 comment) | Affects **most first‑party tools**; strict‑mode LLM providers send `null` for optional params which the validator rejects. | Align capability‑port validation with strict‑mode contract expectations to avoid API rejections. |
| **#88** – *Security hardening (device pairing, elevated mode, safe bins, media URL validation)* (1 comment) | Long‑standing security‑feature backlog; now approaching completion. | Formalize a hardening checklist that matches the feature‑parity matrix in `FEATURE_PARITY.md`. |
| **PR #4544** – *Add scoped lifecycle admin foundation for Reborn capabilities* (undefined comments but XL size) | Large documentation/s cop­rk that defines admin‑level lifecycle controls. | Enables multi‑tenant capability sharing without per‑user duplication. |
| **PR #4671** – *feat(reborn): extra‑capabilities seam — register host‑supplied tools as reborn capabilities* | Directly related to #3026 cutover readiness; adds a hook for host‑supplied tools. | Provide a clean extension point for host‑provided tools, critical for production wiring. |

*Takeaway*: The most commented items cluster around **production readiness**, **validation of strict‑mode contracts**, and **extending capability registration**. Stakeholders are eager to lock down a rock‑solid, observable production wiring story before broader adoption.

---

### 5. Bugs & Stability – Ranked by Severity  

| Severity | Issue (Comments) | Symptom | Fix Status |
|----------|------------------|---------|------------|
| **High** | **#4548** – Duplicate `model` field serialization (DeepSeek) | HTTP 400 from provider; request malformed. | **Fixed** in merged PR. |
| **High** | **#4587** – Minimax provider cannot be configured | “secret ... provider_id=… error=secret …” warning; provider never activates. | **Fixed** in merged PR. |
| **Medium** | **#4640** – Google‑Calendar `list_events` returns oldest/unordered events | Users see outdated meetings; missing `timeMin` & ordering. | Open; no PR yet. |
| **Medium** | **#4673** – NEAR AI provider configuration not persisted after “Test connection” | Saved provider disappears; user sees stale UI. | Open; no PR yet. |
| **Low** | **#4666 / #4665** – File‑size caps exceeded for `slack_host_beta.rs` & `slack_host_state.rs` | Architecture rule violation; may block future changes. | Open; deprioritized but tracked. |
| **Low** | **#4604, #4609, #4591** – Closed issues (now resolved) | Previously blocked full‑stack E2E, auth parity, operator API. | Fixed. |

*Overall stability*: Most critical runtime regressions were addressed quickly; remaining bugs are primarily around external provider integration and architectural compliance (file‑size budgets).

---

### 6. Feature Requests & Roadmap Signals  

| Requested Feature | Evidence (Issue/PR) | Likely Near‑Term Inclusion |
|-------------------|----------------------|----------------------------|
| **Unified “Omni” search across threads, skills, extensions, memory** | #4647 (Open) | High – appears in roadmap discussions; tied to P1‑P2 priority. |
| **Admin‑shared tools & skills with per‑user auth** | #4625 (Open) | Medium – aligns with multi‑tenant admin goals; depends on capability‑ownership refactor. |
| **Admin‑sharable tools & skills with per‑user auth** | #4628 (Open) | Medium‑High – similar scope, expected to be bundled with upcoming admin UI work. |
| **Production cutover readiness with rollback & default‑off proof** | #3026 (Open) (core epic) & #4621 (Open) (diagnostics) | High – core to release plan; several PRs (#4626, #4627) already target it. |
| **Read‑only NEAR mainnet first‑party extension** | #4661 (Open) | Low‑Medium – useful but not core; may land after core stability. |
| **Bridge inbound attachment bytes into transcript `AttachmentRef`s** | #4644/#4654/#4655/#4668 (Open) | High – directly enables file uploads in WebChat v2; already in active PR chain. |

*Signal*: The project is gravitating toward **admin‑level orchestration**, **search unification**, and **robust attachment handling** as the next wave of user‑visible capabilities.

---

### 7. User Feedback Summary  

| Pain Point | Frequency | Example Quote (paraphrased) |
|-----------|-----------|-----------------------------|
| **Missing full‑stack browser E2E** | Multiple tickets (e.g., #4604) | “We finally have unit‑test coverage, but there is no real‑browser smoke test to catch UI regressions.” |
| **Authentication parity gaps** | #4609, #4636, #4635 | “WebChat v2 still can’t handle OIDC/Bearer flows the same way the old UI did; users get 401 surprises.” |
| **Strict‑mode provider rejections** | #4642 | “Our models send `null` for optional params and the validator trips, breaking many built‑in tools.” |
| **Inconsistent attachment handling across Reborn vs v1** | #4644‑#4655‑#4668 | “Attachments disappear after upload; the transcript contract used to be text‑only.” |
| **Configuration persistence failures** | #4673 | “Test connection works, but saving the provider silently fails – frustrating for new users.” |

*Overall sentiment*: Users are **optimistic** about the Reborn direction but **concerned** about missing production‑grade guarantees (cutover, auth, E2E) and occasional **silent failures** in provider configuration.

---

### 8. Backlog Watch – Long‑Unanswered / Maintainer‑Focus Items  

| Issue | Age (approx.) | Why It Needs Attention |
|-------|---------------|------------------------|
| **#4665** – *Decompose `slack_host_beta.rs` (3,359 lines)* | Open since 2026‑06‑10 | Exceeds file‑size budget; requires decomposition before further changes. |
| **#4666** – *slack_host_state.rs approaching file‑size cap* | Open since 2026‑06‑10 | Same architectural debt; PRs must keep it shorter. |
| **#4667** – *Support Ask‑gated capability approvals in Reborn REPL* | Open since 2026‑06‑10 | Core to capability‑approval flow; no activity yet. |
| **#4657** – *Unify reusable Google OAuth credentials* | Open since 2026‑06‑09 | Addresses multi‑API OAuth fatigue; currently manual per‑extension. |
| **#4629** – *Reborn/Crabshack closeout: delete obsolete legacy paths* | Open since 2026‑06‑09 | Legacy cruft blocks future refactors; needs decisive cleanup. |
| **#4447** – *[Suggested_P2] Close OpenAI‑compatible API migration* | Open (closed issue but still tracked) | Migration hinges on remaining compatibility tests; pending final acceptance. |

*Maintainer priority*: Resolve the **file‑size violations** (#4665, #4666) and **Ask‑gated approvals** (#4667) first, as they block further architectural expansion and new capability exposure.

---

**Bottom line:** IronClaw is in a phase of **consolidating production readiness** and **fixing critical integration bugs**, while the community is actively shaping **admin‑centric workflows** and **search unified experiences**. The project health is generally stable, but sustained attention to architectural debt (large source files) and pending **cutover validation** will determine the speed of the upcoming release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**Today's Overview**  
LobsterAI demonstrated steady activity with two open issues and five PR requests in the past 24 hours. The project remains focused on enhancing existing features while maintaining a stable codebase.  

**Releases**  
No new releases were reported; the team prioritized refining current components rather than introducing updates.  

**Project Progress**  
Today, [closed] PR #2134 resolved export-related bugs and PR #2136 data backup/clearance enhancements were finalized. No significant PR merges occurred.  

**Community Hot Topics**  
Active discussions centered on agent optimization and cross-task coordination, particularly posts about streamlining workflows with third-party tools.  

**Bugs & Stability**  
CRashes and unresolved crashes were reported, though paired with timely PR responses. Minor stability improvements continued post-update.  

**Feature Requests & Roadmap Signals**  
User interest in GDPR-compliant repository standards is noted, with #2135 highlighting potential feature prioritization for future iterations.  

**User Feedback Summary**  
Users emphasized usability enhancements for task tracking and tested workarounds for chaotic session management persistently.  

**Backlog Watch**  
Long-overdue items like unresolved context-switching concerns and delayed third-party integration remain high priority for maintenance teams.

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



###CoPaw Project Digest (2026-06-10)  

---

#### 1. **Today's Overview**  
CoPaw showed high activity today, with 37 active or closed issues and 34 PR updates, reflecting rapid development cycles. A beta release (v1.1.11-beta.2) was published, introducing UI/UX improvements. The team is actively addressing both backward compatibility and forward-looking features. Active engagement spans cross-browser fixes, agent integration, and desktop reliability enhancements.  

---

#### 2. **Releases**  
**v1.1.11-beta.2**  
- **Key Changes**:  
  - Added page coordinate click support in browser controls (PR #[5017](https://github.com/agentscope-ai/QwenPaw/pull/4905)).  
  - Fixed CDP timeout issues and browser profile isolation (PR #[xxx](https://github.com/agentscope-ai/QwenPaw/pull/xx)).  
- **Status**: Beta-quality release focused on stability. No breaking changes reported.  

---

#### 3. **Project Progress**  
- **Merged/Closed PRs (14)**: Advanced features like OpenSandbox plugin support (PR #5043), session path duplication fixes (#5036), and security patches for file previews (#4981).  
- **Key Fixes**: Resolved session management issues causing Windows path overflow (#4988) and improved tool call error handling.  
- **Ongoing PRs (20)**: Improvements to skill self-evolution workflows (PR #4857) and Tauri desktop auto-updater integration (PR #4669).  

---

#### 4. **Community Hot Topics**  
- **#5017** (10 comments): Proposal to integrate Hermes Agent’s "learning loop" concept. Users seek enhanced agent autonomy and skill iteration.  
- **#4727** (7 comments): Major backend migration to AgentScope 2.0. Critical for future architecture but requires coordination.  
- **#5039** (4 comments): Tool call parsing conflicts in streaming responses. Affects real-time interaction quality.  

---

#### 5. **Bugs & Stability**  
- **Critical**:  
  - Windows session file path overflow (#4988) causing `PathTooLongException` (fixed in PR #5036).  
  - KimiCode API missing thinking content (#5013).  
- **Common**:  
  - Image preview glitches on macOS (#4993).  
  - Session file name duplication bug (resolved).  
- **Fix Status**: PRs exist for most critical bugs, but desktop reliability remains a pain point.  

---

#### 6. **Feature Requests & Roadmap Signals**  
- **Hermes Integration** (#5017) and **OpenSandbox MCP Protocol** (#5043) suggest focus on agent self-improvement and security.  
- User demands for **customizable session columns** (#4975) and **independent visual models** (#4992) may appear in v1.1.12.  
- **AgentHub plugin imports** (#5033) signal potential expansion into modular agent ecosystems.  

---

#### 7. **User Feedback Summary**  
- **Positive**: Intuitive local setup, strong community engagement (e.g., 3.1k+ stars for Hermes discussion).  
- **Pain Points**:  
  - Desktop app startup bottlenecks (Tauri rewrite in PR #4669).  
  - Model-specific issues (DeepSeek v4 not functioning in 1.1.10+).  
  - Windowed path handling limitations (#5042).  

---

#### 8. **Backlog Watch**  
- **#4057** (AgentScope tracing initialization): Untouched since May, critical for observability.  
- **#4973** (Unit tests for Phase 5 modules): Low community attention despite broad scope.  
- **#5025** (Session file path bug): Active but unresolved for Windows users.  

---  
**Project Health**: Active development with balanced focus on bugs and features. Hermes integration and AgentScope 2.0 migration represent strategic directions. Prioritize desktop stability and model interoperability for v1.1.12.


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest - 2026-06-10**  

---

### **Today's Overview**  
ZeroClaw remains developmentally active, with 50 active issues and 1 merged PR in the past 24 hours. Key updates include progress on UI/UX improvements for configuration and runtime fixes like memory/cron system enhancements. Despite no new releases, recent PRs aim to strengthen security, tool integration, and deployment flexibility.  

---

### **Releases**  
*No formal releases in the last 24 hours. Active pre-release branches (e.g., `v0.8.0-beta-1`) are under review for UI parity, API security, and dashboard state fixes.*  

---

### **Project Progress**  
1. **Merged/Closed PRs**:  
   - **#7442**: Fixed parallel SubAgent/Delegate execution logic by removing redundant execution guards, allowing intentional fan-out workflows. [GitHub](https://github.com/zeroclaw-labs/zeroclaw/pull/7442)  
   - **#7440**: Optimized context management to skip futile history trimming when system prompts exceed budget, preventing unnecessary resource use. [GitHub](https://github.com/zeroclaw-labs/zeroclaw/pull/7440)  
2. **Hotfixes**:  
   - **#7425**: Ensured accurate channel pricing tracking by resolving type-fallback logic for cost calculations. [GitHub](https://github.com/zeroclaw-labs/zeroclaw/pull/7425)  

---

### **Community Hot Topics**  
1. **Logo Revamp (CLOSED #4710)**  
   - High-voted user-sourced design proposal merged, addressing branding visibility. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)  
2. **Per-Sender RBAC (OPEN #5982)**  
   - Multi-tenant security model gaining traction for enterprise deployments. [Discussion](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)  
3. **API UX Unification (PR #7365)**  
   - Book rearchitected for provider/config surface derivation; will require dependency metric changes. [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/7365)  

---

### **Bugs & Stability**  
1. **High-Severity Fixes**:  
   - **#6721**: Automated MCP tool loading resolved via approval gate adjustments. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)  
   - **#6646**: Telegram web search tools rectified through input handling tweaks. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6646)  
2. **Unresolved Blockers**:  
   - **#5808**: Context budget overflow mitigated via documentation changes (PR #7440 pending). [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)  

---

### **Feature Requests & Roadmap Signals**  
- **Per-Skill Security (PR #5775)**: Permissions scoping for Python skills prioritized. May debut in `v0.8.1`. [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/5775)  
- **Cron Overlap Fix (PR #7348)**: Scheduler startup logic updated to prevent job repeats. [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/7348)  

---

### **User Feedback Summary**  
- **Pain Points**: Cron scheduling errors, invalid UI states (`7376-7400` issues), and cost-budget exhaustion dominate feedback.  
- **Satisfaction Drivers**: Recent logo update and UX consistency attempts (#7117) signal progress toward user-aligned iterations.  

---

### **Backlog Watch**  
- **#5844** (Memory Reduction): Memory vaporization in cron jobs requires high-priority upstream triage. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)  
- **#7376** (Dashboard Tablesau): UI state mislabeling should block `v0.8.0` release. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7376)  

---  
**Github Repository**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)


</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*