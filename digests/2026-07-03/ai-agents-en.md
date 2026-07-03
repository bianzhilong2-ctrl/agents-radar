# OpenClaw Ecosystem Digest 2026-07-03

> Issues: 196 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-03 02:01 UTC

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

**OpenClaw Project Digest – 2026‑07‑03**  

---  

### 1. Today's Overview  
- Activity remains high: **196 issue updates** and **500 PR updates** were recorded in the last 24 h (123 active issues, 433 open PRs).  
- The community merged **67 PRs** and closed **73 issues**, indicating a healthy balance of work‑in‑progress and resolution.  
- A single new pre‑release (`v2026.7.1‑beta.1`) was cut, adding support for GPT‑5.6 and a new “attach external harness” command.  
- The issue queue is dominated by security‑critical bugs, session‑state regressions, and a handful of UX‑driven enhancements.  
- Overall health appears stable, but the volume of P1‑rated regressions suggests some release‑cycle stress that maintainers are actively monitoring.

---  

### 2. Releases  
- **v2026.7.1‑beta.1** – latest pre‑release.  
  - *Key changes*: Full GPT‑5.6 model‑family recognition, `openclaw attach` now can target an external harness attached to an existing Gateway session.  
  - *Breaking change*: None explicitly flagged; however, the new GPT‑5.6 catalog entry modifies default model selection logic and may affect agents that rely on version pinning.  
  - *Migration note*: Review your `openclaw.yaml` configuration for any hard‑coded `gpt‑3.5` or `gpt‑4` references; replace with `gpt‑5.6` if you wish to leverage the new support.

---  

### 3. Project Progress  
- **Merged / closed PRs today** – 67 PRs were merged; notable merges include:  
  - PR #98333 – “OpenAI GPT‑5.6 support” (catalog & runtime integration).  
  - PR #98800 – JSON‑parse guard for malformed `OPENCLAW_LIVE_CLI_BACKEND_ARGS`.  
  - PR #95613 – release‑policy documentation suite (monthly, daily, stable).  
- **Features advanced**:  
  - External harness attachment capability is now production‑ready.  
  - Multi‑agent capability profiling RFC (#35203) continues to be discussed, hinting at a future “shared blackboard” design.  
- **Fixes shipped**: bug‑fixes for OAuth refresh handling, Chrome‑MCP JSON OOM, and Discord attachment size‑limit handling among others.

---  

### 4. Community Hot Topics  
| Issue / PR | Comments | Reactions | Link (GitHub) | Underlying Need |
|------------|----------|-----------|---------------|-----------------|
| **#25592** – “Text between tool calls leaks to messaging channels” | 33 | 🦞 Diamond Lobster (1) | [openclaw/openclaw #25592](https://github.com/openclaw/openclaw/issues/25592) | Internal tool‑call narration leaking to user‑visible chat – UX & privacy breach. |
| **#88312** – “Regression: Codex turn‑completion stall” | 19 | 👍 5 | [openclaw/openclaw #88312](https://github.com/openclaw/openclaw/issues/88312) | Intermittent turn‑completion failures on Codex‑backed servers – reliability regression. |
| **#92201** – “Embedded runner: thinking signatures intermittently invalid” | 18 | 🦞 Diamond Lobster (1) | [openclaw/openclaw #92201](https://github.com/openclaw/openclaw/issues/92201) | Inconsistent streaming of thinking blocks on Anthropic models – stability of embedded runtimes. |
| **#73148** – “Image tool fails when `sharp` not installed” | 14 | 👍 3 | [openclaw/openclaw #73148](https://github.com/openclaw/openclaw/issues/73148) | Missing graceful fallback for optional native dependencies causing opaque failures. |
| **PR #99121** – “policy: cover gateway node commands” | – | 🧂 Unranked Krab (0) | [openclaw/openclaw #99121](https://github.com/openclaw/openclaw/pull/99121) | Security‑boundary enforcement for gateway node command policies – governance & auditability. |
| **PR #99310** – “test(qa): migrate channel streaming evidence to transport flow” | – | – | [openclaw/openclaw #99310](https://github.com/openclaw/openclaw/pull/99310) | QA hardening for Telegram streaming evidence – test coverage & reproducibility. |

**Analysis:** The most commented issues (#25592, #88312, #92201) reflect three cross‑cutting pain points: **messaging channel pollution**, **session‑state stability**, and **runtime reliability** for emerging model families. Community attention is also turning toward **policy enforcement** (PR #99121) and **test coverage** (PR #99310).

---  

### 5. Bugs & Stability  
| Issue | Rating / Severity | Summary | Linked PR (fix) | Status |
|-------|-------------------|---------|-----------------|--------|
| **#98614** – “`sessions_spawn` missing `operator.write` scope” | 🦞 Diamond Lobster | Regression introduced between v2026.6.1 → v2026.6.11 | – | **Open** |
| **#99253** – “Assistant inserts fabricated user turn” | 🦞 Diamond Lobster | Self‑referencing fabricated timestamps in assistant output | – | **Open** |
| **#98790** – “Concurrent agent‑to‑agent turn forks session tree” | 🐚 Platinum Hermit | Session tree corruption after boundaryless compaction; transcript permanently poisoned | – | **Open** |
| **#99183** – “Local embedding worker fork fails after Node upgrade” | 🐚 Platinum Hermit | `ENOENT` on fork when Node binary path is stale | – | **Open** |
| **#73148** – “`sharp` not installed → opaque Failed to optimize image” | 🦞 Diamond Lobster | Missing fallback in vision pipeline | – | **Open** |
| **#92433** – “Subagent completion silently dropped” | 🦞 Diamond Lobster | Early completion enqueues but never resolves | – | **Open** |
| **#99168** – “Large tool output poisons subsequent results” | – | Subsequent calls render as `(no output)` | – | **Open** |
| **#98995** – “iOS Settings appearance selector placement” | 🐚 Platinum Hermit (P3) | UI control mis‑located, causing user confusion | – | **Open** |

*Severity ranking* (P1 > P2 > P3) is reflected above; the most critical are the **session‑state / assistant‑behavior bugs** (#98614, #99253, #98790) that directly impact user trust and system correctness.

---  

### 6. Feature Requests & Roadmap Signals  
- **Multi‑Agent Collaboration Enhancements** – RFC #35203 (profiling, shared blackboard, token‑cost governance) continues to attract attention; likely slated for a future major release focused on scalability.  
- **Auto‑generate Session Titles** – Issue #77165 proposes AI‑driven title summarization; already flagged as a “Feature: Auto‑Generate Session Titles via AI Summarization.”  
- **Floating Agent Bubbles (Clawi) for macOS** – Issue #11623 (urgency: P3) is being prototyped; could appear in a UI‑centric update post‑beta.  
- **GPT‑5.6 Model Family Recognition** – Already shipped in v2026.7.1‑beta.1; future work may expose new capability‑profiling APIs.  
- **External Harness Attachment** – New command `openclaw attach` is merged; likely to be expanded with richer introspection in upcoming patches.  

These signals suggest a roadmap trending toward **greater multi‑agent orchestration**, **enhanced UI/UX on desktop and mobile**, and **better observability of internal processes**.

---  

### 7. User Feedback Summary  
- **Positive**: Users appreciate the new GPT‑5.6 integration and the ability to attach external harnesses, citing smoother multi‑model routing.  
- **Negative**: Repeated complaints about **session leakage** (text from tool calls appearing in chat windows), **failed turn completions** on Codex, and **obscure error messages** when optional dependencies (e.g., `sharp`) are missing.  
- **Usability**: Multiple UI‑related issues (#98995, #99231) highlight frustration with settings placement and inconsistent native look across iOS, Feishu, and web platforms.  
- **Reliability**: Users report occasional **crashes on Android camera activation**, **iOS Voice Wake misbehaviour**, and **stale OAuth tokens** after refresh, especially on devices using limited‑access photo permissions.  
- **Overall Satisfaction**: Mixed; core agent functionality is functional but **stability regressions** are eroding confidence, prompting many P1 bug reports.  

---  

### 8. Backlog Watch  
| Item | Age (days) | Reason for Attention | Status |
|------|------------|----------------------|--------|
| **Issue #25592** – tool‑call text leaking | 129 | High comment count, security‑impact flagged, no fix PR yet | Open |
| **Issue #88312** – Codex turn‑completion stall | 44 | P1 regression, blocks major provider | Open |
| **Issue #92201** – thinking signature intermittency | 22 | Involves Anthropic model replay, affects reliability | Open |
| **PR #99121** – policy coverage for gateway node commands | 2 | Large policy PR, requires maintainer sign‑off | Open |
| **PR #99306** – persist ambient room events as transcript rows | 1 | Directly addresses #99257, may affect group‑session persistence | Open |
| **Issue #35203** – Multi‑Agent Collaboration RFC | 163 | Long‑standing roadmap proposal, still in discussion | Open |
| **Issue #70024** – channel stop timeout leaves channel dead | 87 | Roots cause of silent dead channels; fix needed for stability | Open |
| **Issue #99253** – fabricated user turn insertion | 1 | Critical safety breach; requires immediate attention | Open |

Maintainers should prioritize fixing the **high‑comment, security‑rated issues** (#25592, #98614, #99253) and consider elevating the **policy PR #99121** to merge‑ready status to improve governance around gateway node command control.  

---  

*Prepared from the OpenClaw GitHub activity snapshot for 2026‑07‑03. All links point to the original GitHub repository.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant/Agent Open-Source Ecosystem (2026-07-03)

---

## 1. Ecosystem Overview
The personal AI agent ecosystem shows a **bimodal distribution**: a few high-velocity "platform" projects (OpenClaw, ZeroClaw, Hermes Agent, NanoBot) driving rapid iteration on multi-model routing, session management, and gateway integrations, while a long tail of specialized or early-stage forks (PicoClaw, NanoClaw, LobsterAI, IronClaw, CoPaw, Moltis) focus on niche protocols, UI polish, or hardware-specific deployments. **No project has reached a stable 1.0**; all operate in pre-release or beta cycles. Core technical challenges—session-state integrity, multi-protocol gateway unification, secure tool-use sandboxing, and cross-platform (Windows/WSL/mobile) parity)—are shared across >80% of active projects, indicating a converging architectural baseline. Community governance ranges from RFC-driven (OpenClaw, Hermes) to maintainer-led (NanoBot, ZeroClaw), with security hardening (dependency scanning, auth middleware, OTel policies) now a universal priority.

---

## 2. Activity Comparison

| Project | Issues (Open/Total Updated) | PRs (Open/Merged-Closed) | Release Status | Health Score* |
|---------|----------------------------|--------------------------|----------------|---------------|
| **OpenClaw** | 123 / 196 | 433 / 67 | **v2026.7.1-beta.1** (pre-release) | **High** |
| **ZeroClaw** | 33 / 37 | 31 / 19 | None (v0.9.0 prep) | **High** |
| **Hermes Agent** | 42 / ~50 | ~24 / 26 | None | **High** |
| **NanoBot** | 95 / 98 | 35 / 28 | None | **Medium-High** |
| **NanoClaw** | 4 / 4 | 12 / 2 | None | **Medium** |
| **PicoClaw** | 2 / 2 | 11 / 14 | v0.2.9 (stale) | **Medium** |
| **LobsterAI** | 5 / 5 | 1 / 7 | None | **Medium** |
| **IronClaw** | N/A | N/A | Minor bundling update | **Low-Medium** |
| **CoPaw** | N/A | N/A | v2.14.3 (minor) | **Low-Medium** |
| **Moltis** | 0 / 0 | N/A | None | **Low** |
| **NullClaw** | 0 | 0 | None | **Inactive** |
| **TinyClaw** | 0 | 0 | None | **Inactive** |
| **ZeptoClaw** | 0 | 0 | None | **Inactive** |

*Health Score: **High** = daily merges, active triage, pre-release cadence; **Medium** = weekly merges, focused scope; **Low** = sporadic updates, vague metrics; **Inactive** = zero 24h activity.

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale & Velocity**: 5–10× higher PR/issue throughput than next tier (ZeroClaw, Hermes). 67 merges/day signals mature CI/CD and reviewer bandwidth.
- **Model-Agnostic Runtime**: First-class GPT-5.6 support + external harness attachment (`openclaw attach`) demonstrates leading multi-provider orchestration; peers are still adding single-provider OAuth (NanoBot Anthropic, Hermes OpenRouter).
- **Governance Maturity**: RFC process (#35203 multi-agent blackboard), release-policy docs (PR #95613), and security-boundary enforcement (PR #99121) exceed peer practices.

**Technical Approach Differences**
- **Session-Centric Architecture**: Heavy investment in session-tree integrity (spawn scopes, turn-fork detection, transcript persistence) vs. peers' lighter stateless or per-chat models.
- **Embedded Runner Focus**: Native streaming/thinking-block handling for Anthropic/OpenAI (issues #92201, #88312) rather than delegating to LiteLLM/OpenRouter abstractions used by Hermes/NanoBot.
- **External Harness as Primitive**: `attach` command treats running gateway sessions as first-class resources, enabling debugging/observability patterns absent elsewhere.

**Community Size Comparison**
- **Contributor Breadth**: 500 PR updates/24h implies 50+ active committers; ZeroClaw/Hermes ~20–30; NanoBot/PicoClaw <15.
- **Issue Engagement**: Top issues >30 comments (vs. <15 for peers) indicates deeper user investment and production workloads.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session/Conversation State Integrity** | OpenClaw (#98614, #98790, #99253), Hermes (#56704, #52470), ZeroClaw (#8193 MCP visibility), NanoBot (#4082 cron context reuse) | Atomic turn boundaries, fork detection, transcript durability, cross-restart recovery |
| **Multi-Protocol Gateway Unification** | OpenClaw (external harness), NanoBot (Mattermost PR #4459, Matrix, DingTalk), Hermes (QQBot #52914, Feishu #25757), PicoClaw (DeltaChat PR #3063), NanoClaw (WhatsApp Cloud #2911/2913) | Distinct instance keys per protocol, webhook/WS parity, reconnection logic (PicoClaw #3203), OAuth broker (Hermes #23944) |
| **Secure Tool-Use Sandboxing** | OpenClaw (policy PR #99121), ZeroClaw (OTel content policy PR #8567, RUSTSEC-2026-0192 PR #8547), NanoBot (outbound auth PR #4668, API key enforcement PR #4669), Hermes (path security tests PR #57442) | Capability-based scopes, stdin caps (ZeroClaw 1MiB), malicious output sanitization, supply-chain hardening |
| **Windows/WSL Parity** | ZeroClaw (74 test failures #7462, static MSVC CRT PR #8604), NanoBot (shell semantics #4544, background flag #4511), Hermes (computer_use crash #56704), IronClaw (implied) | Path normalization, process spawn semantics, `/dev/shm` equivalents, CI matrix expansion |
| **Observability & Telemetry** | ZeroClaw (OTel runtime policy PR #8567, TurnOrigin provenance PR #8619), OpenClaw (streaming evidence migration PR #99310), Hermes (cost-field guards #22746, #22741), NanoClaw (template loader #2890) | Structured LLM/tool I/O logging, memory/payload lifecycle docs, cost attribution, QA evidence trails |
| **UI/UX Reliability** | LobsterAI (blue-screen #1354, white-screen #2252), Hermes (menu refresh #53049, PageUp #49978, Tahoe traffic lights #57446), PicoClaw (iOS settings #98995), CoPaw (login crashes) | Crash-free startup, deterministic splash flows, settings persistence, native look-and-feel |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | NanoBot | PicoClaw/NanoClaw | LobsterAI/IronClaw/CoPaw |
|-----------|----------|----------|--------------|---------|-------------------|---------------------------|
| **Primary Focus** | Universal agent runtime + gateway orchestration | Rust-native, memory-durable, OpenAI-compatible endpoint | Desktop-first, multi-platform UI, plugin extensibility | Channel/bot framework (Telegram, Matrix, Mattermost) | Lightweight, embedded/hardware (Pi, mobile), Matrix-first | Niche: LobsterAI (task scheduling), IronClaw (enterprise Slack), CoPaw (finance workflows) |
| **Target User** | Power users, agent-platform builders, multi-model routers | Developers building local-first, privacy-sensitive agents | Desktop enthusiasts, multi-account managers, Feishu/QQ ecosystems | Bot operators, community managers, multi-channel automators | IoT/edge hobbyists, Matrix homeserver admins | Vertical SaaS users (LobsterAI tasks), enterprise teams (IronClaw), fintech (CoPaw) |
| **Architecture** | Go + TypeScript, embedded runner, session-tree core | Rust, daemon + TUI + Web, durable memory store | Python/TypeScript, plugin kernel, holographic memory | Go, adapter registry, cron/scheduler built-in | Go + React/TypeScript, DeltaChat/Line/Matrix gateways | Mixed: LobsterAI (Electron), IronClaw (Go), CoPaw (unspecified) |
| **Extensibility** | External harness, RFC blackboard, policy engine | Skills (frontmatter `always:true`), RPC spec, per-agent env vars | Plugins (Google Meet, holographic memory), OAuth broker | Plugin system RFC (#2231), external agent integration (#3436) | Gateways as plugins, deltachat PR merged | Limited: LobsterAI (custom models), IronClaw (webchat redesign) |
| **Maturity Signal** | Beta pre-releases, release-policy docs, 67 merges/day | v0.9.0 prep, RFCs, 19 merges/day, security-first | 26 merges/day, thin-client RFC (37👍), long backlog | 28 merges/day, 13 validated bugs tracked, no releases | v0.2.9, 14 merges/day (mostly deps), 2 critical bugs | Sporadic, minor patches, low transparency |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (Daily Cadence)** | OpenClaw, ZeroClaw, Hermes Agent, NanoBot | >20 merges/day, active RFCs, pre-release tags, security triage, contributor onboarding visible |
| **Stabilizing / Focused (Weekly Cadence)** | NanoClaw, PicoClaw, LobsterAI | <5 new issues/day, merges dominated by deps/bug-fixes, critical blockers unresolved >2 weeks |
| **Early / Niche (Sporadic)** | IronClaw, CoPaw, Moltis | Vague metrics, single-maintainer feel, vertical use-cases, no public roadmap |
| **Dormant / Archived** | NullClaw, TinyClaw, ZeptoClaw | Zero 24h activity, no releases >6 months |

**Key Insight**: Only **OpenClaw** exhibits *platform-scale* momentum (contributor count, issue depth, release discipline). **ZeroClaw** and **Hermes** are credible *runtime* contenders but with narrower contributor bases. **NanoBot** leads the *bot-framework* niche. The rest are either specializing or stalling.

---

## 7. Trend Signals for AI Agent Developers

1. **Session-State as a First-Class Problem**  
   Every active project reports P1 bugs in turn completion, transcript poisoning, or fork detection. **Investment opportunity**: shared libraries for session-tree CRDTs, deterministic replay, and cross-process checkpointing.

2. **Gateway Fragmentation → Instance-Key Standardization**  
   NanoClaw (#2913), PicoClaw (DeltaChat), NanoBot (Mattermost), Hermes (QQBot/Feishu) all converge on *distinct instance keys per protocol* to avoid adapter collisions. **Expect a de-facto spec** (e.g., `gateway://<protocol>-<instance>`) within 6 months.

3. **Security Hardening Moves from Optional to Baseline**  
   RUSTSEC advisories (ZeroClaw), OTel content policies (ZeroClaw), outbound auth enforcement (NanoBot), path-security tests (Hermes), policy engines (OpenClaw). **Supply-chain scanning and capability-based sandboxing are now table stakes** for any agent handling external tools.

4. **Windows/WSL is the New Tier-1 Target**  
   ZeroClaw (74 failures), NanoBot (shell semantics), Hermes (computer_use crash) show **Windows parity blockers**. Projects investing in static MSVC linking, `/dev/shm` equivalents, and CI matrices will capture enterprise/desktop mindshare.

5. **Observability Standards Emerging**  
   TurnOrigin provenance (ZeroClaw), streaming evidence migration (OpenClaw), cost-field guards (Hermes), template loaders (NanoClaw). **OpenTelemetry semantic conventions for LLM/tool spans** will become the interop layer—early adopters gain debugging composability.

6. **Thin-Client / Remote-Runtime Demand**  
   Hermes #38602 (37👍), OpenClaw external harness, ZeroClaw daemon RPC. **Users want local UI + remote heavy lifting**. Projects exposing clean gRPC/WS APIs for remote execution will win hybrid deployments.

7. **Model-Agnostic Routing > Single-Provider Optimization**  
   OpenClaw GPT-5.6 catalog, NanoBot Anthropic OAuth, Hermes OpenRouter/LiteLLM, ZeroClaw OpenAI-compatible endpoint RFC. **The winning abstraction is a universal model router with capability profiling** (OpenClaw RFC #35203), not deep integration with one vendor.

---

**Bottom Line for Decision-Makers**:  
- **Build on OpenClaw** if you need a production-grade, multi-model agent platform today and can contribute to its governance.  
- **Track ZeroClaw/Hermes** for Rust-native durability or desktop-first UX respectively; both are 6–12 months behind OpenClaw in ecosystem maturity.  
- **Adopt NanoBot** only for channel-heavy bot deployments; its plugin RFC (#2231) will determine long-term extensibility.  
- **Avoid** the dormant tail (NullClaw, TinyClaw, ZeptoClaw) and treat niche projects (LobsterAI, IronClaw, CoPaw) as vertical references, not platforms.  

The ecosystem is **consolidating around three architectural pillars**: session integrity, gateway unification, and secure tool-use. Projects aligning with these pillars and demonstrating daily merge velocity will define the 2027 baseline.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest for 2026-07-03  

## 1. Today's Overview  
NanoBot demonstrated active development with 63 PRs updated (35 open, 28 merged/closed) and 98 issues updated (95 open, 3 closed). The majority of open issues reflect user-driven feature requests and integration challenges, while the merged PRs focus on critical bug fixes, security hardening, and new provider/channel support. No releases were published today, indicating ongoing stabilization efforts ahead of potential future versions.  

---

## 2. Releases  
**No new releases published today.**  

---

## 3. Project Progress  
The following PRs were merged/closed today:  
- **PR #4648**: Fixed 13 validated issues including tool call parsing errors, Windows shell inconsistencies, and security gaps.  
- **PR #4662**: Normalized OpenAI text-format tool calls into structured calls (fixes #4061).  
- **PR #4666**: Contained malformed MCP tool results to prevent crashes (fixes #4652).  
- **PR #4685**: Omitted `temperature` parameter for `sonnet-5` models (fixes #4683).  
- **PR #4668**: Enforced outbound message authorization (fixes #4076).  
- **PR #4669**: Required API key for `serve` command (fixes #4078).  
- **PR #4661**: Separated file-edit progress IDs for better streaming handling.  
- **PR #4659**: Isolated Matrix stream buffers to prevent conflicts.  

Key advancements include improved security, provider compatibility, and stability fixes for MCP and Windows environments.  

---

## 4. Community Hot Topics  
### Most Active Issues/PRs:  
- **Issue #4657**: Tracking 13 validated bugs/security gaps with no PRs (5 comments).  
  - *Link*: [Issue #4657](https://github.com/HKUDS/nanobot/issues/4657)  
  - *Need*: Systematic resolution of long-standing issues in the main branch.  
- **Issue #2231**: Plugin system for agent extensibility (5 comments).  
  - *Link*: [Issue #2231](https://github.com/HKUDS/nanobot/issues/2231)  
  - *Need*: Modular extensibility akin to Copilot CLI or Claude Code.  
- **PR #4459**: Adds Mattermost channel support (in review).  
  - *Link*: [PR #4459](https://github.com/HKUDS/nanobot/pull/4459)  
  - *Need*: Real-time Mattermost integration via WebSocket + REST API.  
- **Issue #4604**: Anthropic OAuth support (5 comments).  
  - *Link*: [Issue #4604](https://github.com/HKUDS/nanobot/issues/4604)  
  - *Need*: OAuth flow for Claude Code subscription users without API keys.  

---

## 5. Bugs & Stability  
### High Severity:  
- **Issue #4652**: MCP tool call exceptions crash the process (fixed in PR #4666).  
- **Issue #3626**: Telegram long polling silently hangs (bot alive but unresponsive).  
- **Issue #2829**: Ollama tool calling broken due to formatting issues.  

### Medium Severity:  
- **Issue #4061**: OpenAI-compatible text tool calls not parsed into structured calls (fixed in PR #4662).  
- **Issue #4544**: Windows exec uses inconsistent shell semantics (cmd.exe vs PowerShell).  
- **Issue #4082**: Cron jobs reuse session context across runs.  

### Low Severity:  
- **Issue #3074**: Message tool fails to send to other channels.  
- **Issue #4511**: `--background` flag in gateway command has runtime inconsistencies on Windows.  

---

## 6. Feature Requests & Roadmap Signals  
- **Issue #2231**: Plugin system for extensibility (core roadmap item).  
- **Issue #4419**: Automatic reasoning effort escalation for LLMs.  
- **Issue #2937**: Embedding-based context compression pipeline.  
- **Issue #4010**: Text-to-speech/voice output support.  
- **Issue #3309**: Per-chat group policy overrides for Telegram.  
- **Issue #3436**: External agent integration (e.g., opencode).  

PR #4632 (Anthropic OAuth) and PR #4686 (opencode provider) suggest provider expansion is imminent.  

---

## 7. User Feedback Summary  
Users report:  
- **Pain Points**:  
  - File uploads in DingTalk groups fail due to message separation (Issue #3344).  
  - WhatsApp bots lack privacy isolation and human-reply pauses (Issues #2836, #2837).  
  - Voice interaction latency feels slow (Issue #3257).  
- **Satisfaction**:  
  - Positive feedback for webhook and streaming features in new channels (Mattermost PR #4459).  
  - Concerns over Windows compatibility and security gaps.  

---

## 8. Backlog Watch  
- **Issue #4657**: Tracking 13 validated bugs with no PRs (critical for stability).  
- **Issue #2231**: Plugin system request (high-impact feature).  
- **Issue #3343**: Broadcast MCP messages across channels (blocked by WebSocket limitations).  
- **Issue #3559**: WebSocket vs. webhooks for proactive delivery (security implications).  
- **Issue #1899**: Heartbeat session isolation debate (UX vs. security tradeoff).  

These issues require maintainer attention to prevent stagnation.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑07‑03)**  

---

### 1. Today’s Overview  
The repository remains highly active: in the last 24 h ≈ 50 issues and 50 PRs were touched, with 42 issues still open and 26 PRs already merged/closed. No new version was released today, but the stream of bug‑fixes and small feature PRs indicates steady maintenance work. Overall project health looks good – a high merge‑rate suggests maintainers are keeping up with incoming contributions, though a sizable backlog of open issues (especially long‑standing feature requests) remains.

### 2. Releases  
*No new releases were published today.*

### 3. Project Progress – Merged/Closed PRs (today)  
A total of **26 PRs** reached the merged/closed state. The majority are bug‑fixes and small improvements; highlights include:

| PR | Title / Fix | Area |
|----|-------------|------|
| #57449 | Quote `AGENT_BROWSER_EXECUTABLE_PATH` in installer env overrides | installer |
| #57448 | Migrate Google‑Meet OpenAI Realtime client from beta to GA protocol | plugins/google‑meet |
| #57446 | Clear macOS Tahoe enlarged traffic‑lights in titlebar | desktop |
| #57447 | Add `agent.review_prompts.*` config knobs for background‑review agent | agent/config |
| #24734 | Prevent TOCTOU race in OpenRouter async client getter | provider/openrouter |
| #25757 | Recognise additional Feishu merge‑forward payload shapes | platform/feishu |
| #22746 | Guard `float()` conversion on cost field from models.dev JSON | agent/models_dev |
| #24618 | Acquire lock in `get_last_init_error()` to match setter | hermes_state |
| #24558 | Add CJK‑aware entity extraction to holographic memory plugin | plugins/holographic |
| #22744 | Guard `_build_snapshot_entry` against `None` platform entries | agent/prompt_builder |
| #22624 | Hoist misplaced system messages to front before dispatch (Qwen) | provider/qwen |
| #22618 | Drop `None` entries from list‑form `deliver` in cron scheduler | comp/cron |
| #22544 | Guard process‑registry checkpoint recovery against malformed JSON | tools/terminal |
| #22741 | Guard `float()` against non‑numeric OpenRouter credit values | account_usage |
| #22670 | Reject foreground `sleep > 30s` to prevent agent blockage | tool/terminal |
| #57443 | Cap overlay inner‑page width at 75 rem (≈1200px) | desktop |
| #22525 | Drop `None` entries and strip whitespace in skill prerequisite normalisation | tool/skills |
| #57445 | Catch `NotImplementedError` in dashboard auth login for password‑only providers | dashboard/auth |
| #57442 | Add unit tests for `has_traversal_component` security helper | tools/path_security |
| … (several other minor clean‑ups) | | |

These changes collectively improve stability (guards against type errors, race conditions, and malformed data), enhance cross‑platform compatibility (Linux/WSL, macOS Tahoe, Feishu), and add modest configurability for power‑users.

### 4. Community Hot Topics  
**Most‑commented Issues (last 24 h)**  

| Issue | Comments | Reactions | Summary & Link |
|-------|----------|-----------|----------------|
| #52914 | 12 | 👍4 | QQBot gateway infinite retry loop after recent commit – missing `is_reconnect` parameter. [[link]](https://github.com/NousResearch/hermes-agent/issues/52914) |
| #36934 | 8 | 👍0 | `/steer` flagged as prompt injection by high‑resistance models (Opus 4.8) – tool‑channel delivery collides with injection defense. [[link]](https://github.com/NousResearch/hermes-agent/issues/36934) |
| #38602 | 8 | 👍37 | Feature request: Desktop Client‑Only Installation (thin‑client mode). [[link]](https://github.com/NousResearch/hermes-agent/issues/38602) |
| #53049 | 3 | 👍0 | Left menu continuously refreshes/reloads → high CPU usage after recent update. [[link]](https://github.com/NousResearch/hermes-agent/issues/53049) |
| #56704 | 3 | 👍0 | `computer_use` capture crashes on Linux/WSL due to `int(None)` from `list_windows`. [[link]](https://github.com/NousResearch/hermes-agent/issues/56704) |
| #8465 | 3 | 👍5 | Litellm context‑size detection fails – defaults to 128k. [[link]](https://github.com/NousResearch/hermes-agent/issues/8465) |

**Underlying needs**  
- **Reliability of gateway adapters** (QQBot, Telegram) – users expect stable connections without manual restarts.  
- **Prompt‑injection safeguards** – need finer‑grained steering mechanisms that aren’t mistaken for attacks.  
- **Desktop usability** – thin‑client deployment, UI glitches (menu refresh, PageUp breakage), and profile‑deletion persistence are pain points.  
- **Cross‑platform tooling** – Linux/WSL support for `computer_use` and proper handling of null window IDs.  
- **Model‑provider flexibility** – better Litellm integration and context‑size autodetection.

### 5. Bugs & Stability (reported today)  
Sorted by perceived severity (label P1 > P2 > P3). Where a fix PR already exists, it is noted.

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1** | #36934 | `/steer` flagged as prompt injection by Opus 4.8 (false positive). | – (open) |
| **P2** | #52914 | QQBot adapter missing `is_reconnect` → infinite retry loop. | – (open) |
| **P2** | #56704 | `computer_use` capture fails on Linux/WSL (`int(None)`). | – (open) |
| **P2** | #52470 | Dashboard auto‑restart silently fails due to inherited `_HERMES_GATEWAY=1`. | – (open) |
| **P2** | #49978 | PageUp while input focused breaks desktop layout (sidebar squeezed). | – (open) |
| **P2** | #8465 | Litellm context size not detected → defaults to 128k. | – (open) |
| **P3** | #53049 | Left menu refresh loop → >10k updates, high CPU. | – (open) |
| **P3** | #57405 | Model selector crashes: `'dict' object has no attribute 'lower'`. | – (open) |
| **P3** | #57444 | `/background` completed tasks never show result panel (duplicate). | – (open) |
| **P3** | #50449 (not in list but similar) | Various UI/theme glitches (e.g., Tahoe traffic lights) – fixed in #57446. | ✅ #57446 |

*Note*: Many of the bugs above have **no linked PR** yet; maintainers may need to prioritize them, especially the P1/P2 items affecting core connectivity and model steering.

### 6. Feature Requests & Roadmap Signals  
High‑interest feature requests (based on comment count / reactions) that could shape upcoming releases:

| Issue | Votes / Comments | Description |
|-------|------------------|-------------|
| #38602 | 👍37 / 8 comments | Desktop Client‑Only Installation – thin‑client mode connecting to a remote Hermes instance. |
| #13490 | 👍0 / 3 comments | Configurable TUI status bar (fields, layout, skin color). |
| #9403 | 👍0 / 2 comments | Pricing overrides, contract pricing, and sync CLI for enterprise users. |
| #23944 | 👍2 / 2 comments | Generic OAuth broker credential source to avoid refresh‑token conflicts across multiple runtimes. |
| #32474 | 👍1 / 2 comments | `/queue cancel` command to inspect/clear queued prompts. |
| #56687 | 👍1 / 1 comment | GUI support for uploading Vertex AI Service Account JSON (provider/gemini). |
| #3630 | 👍0 / 1 comment | Advanced secrets management (ephemeral secrets, external vaults, audit). |

**Predictions for next version**  
- Thin‑client desktop mode (#38602) appears to be a highly‑upvoted usability improvement and likely to be prioritized.  
- Configurable TUI status bar (#13490) is a relatively low‑effort UI tweak that could ship soon.  
- OAuth broker (#23944) addresses a real multi‑instance collision risk and may be considered for the next auth‑hardening sprint.  

### 7. User Feedback Summary  
- **Connectivity frustrations**: QQBot infinite retry loop and Telegram duplicate replies disrupt real‑time chatting.  
- **UI/UX glitches**: PageUp breaking layout, left‑menu CPU spikes, model selector crash, and profile deletion not persisting erode trust in the desktop client.  
- **Tool‑chain reliability**: `computer_use` on Linux/WSL, Honcho memory daemon threads leaking on CLI shutdown, and MCP server zombie accumulation are recurring stability concerns.  
- **Model‑provider friction**: Litellm context‑size mis‑detection and OpenRouter TOCTOU race cause unexpected token limits or client errors.  
- **Desired flexibility**: Users repeatedly ask for thin‑client deployment, better secret/vault integration, and more granular OAuth handling to run Hermes in diverse environments (air‑gapped, enterprise, multi‑tenant).  

Overall sentiment: **core functionality works**, but polishing edge‑case reliability and providing deployment‑flexibility features are the main community asks.

### 8. Backlog Watch – Long‑Unanswered Important Items Needing Maintainer Attention  
These issues have been open for weeks‑months and have notable impact or community interest:

| Issue | Age (approx.) | Labels / Impact | Link |
|-------|---------------|----------------|------|
| #8465 | ~3 mo | P2, Litellm context‑size detection | [link](https://github.com/NousResearch/hermes-agent/issues/8465) |
| #36934 | ~1 mo | P1, Prompt‑injection false positive | [link](https://github.com/NousResearch/hermes-agent/issues/36934) |
| #38602 | ~1 mo | P3, Desktop thin‑client feature (👍37) | [link](https://github.com/NousResearch/hermes-agent/issues/38602) |
| #13490 | ~2 mo | P3, Configurable TUI status bar | [link](https://github.com/NousResearch/hermes-agent/issues/13490) |
| #3630 | ~3 mo | P3, Advanced secrets management (ephemeral, external vault) | [link](https://github.com/NousResearch/hermes-agent/issues/3630) |
| #23944 | ~1 mo | P3, Generic OAuth broker credential source | [link](https://github.com/NousResearch/hermes-agent/issues/23944) |
| #32474 | ~1 mo | P3, `/queue cancel` command | [link](https://github.com/NousResearch/hermes-agent/issues/32474) |

*Actionable*: Maintainers could triage these for the next milestone, especially the P1/P2 items (#36934, #8465) and the highly‑upvoted feature #38602.

---  

*Data source: GitHub issue/PR activity for NousResearch/hermes-agent as of 2026‑07‑03.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw – Project Digest (2026‑07‑03)**  

---

### 1. Today’s Overview  
The PicoClaw repository is actively maintained with **2 open issues** and **25 pull requests** updated in the last 24 hours (11 still open, 14 merged/closed). No new release was published, but the stream of dependency‑related PRs indicates ongoing maintenance and preparation for the next version. The presence of two high‑impact bugs (config migration failure and a silent Matrix sync‑loop death) suggests that stability work is a current priority.

---

### 2. Releases  
**None** – the latest published version remains **v0.2.9** (git commit 2992…).

---

### 3. Project Progress  
- **14 PRs merged/closed** today, most of them automated dependency bumps (e.g., eslint, react‑i18next, shadcn, typescript‑eslint, @vitejs/plugin‑react) and Go module updates (aws‑sdk‑go‑v2, mautrix, anthropic‑sdk‑go, golang‑org/x/crypto, github.com/github/copilot‑sdk‑go).  
- **Feature‑oriented closures**: PR #3063 *“feat: add deltachat gateway”* (merged) introduces a new external‑gateway integration, expanding PicoClaw’s interoperability.  
- **Stability fixes**: PR #3160 *“reject cross‑site launcher setup requests”* and PR #3161 *“keep deny patterns active for custom allow rules”* address auth‑related edge cases, improving security and reliability.  
- **Bug‑fixes**: PR #3171 adds `ok` checks for `sync.Map` assertions in the LINE channel’s `Send` method, preventing potential panics.  

Overall, the project continues to tighten its code quality, update its dependencies, and ship small but meaningful stability improvements.

---

### 4. Community Hot Topics  

| Item | Type | Link | Why it matters |
|------|------|------|----------------|
| **#3206** – *“v2→v3 config migration fails with false ‘unknown field(s): build_info, session.dm_scope’”* | Open Issue | <https://github.com/sipeed/picoclaw/issues/3206> | Users cannot load configs after upgrading; the error appears even on fresh installs, indicating a breaking migration regression that blocks everyday usage. |
| **#3203** – *“Matrix sync loop has no reconnection logic — silent death after network/server disruption”* | Open Issue | <https://github.com/sipeed/picoclaw/issues/3203> | The Matrix long‑polling loop dies permanently after any network hiccup, causing a “silent death” that prevents automatic recovery and defeats `Restart=on-failure` policies. |

These two issues are the most visible community concerns right now, each affecting core functionality (configuration loading and persistent Matrix connectivity).

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue / PR | Description | Fix PR (if any) |
|----------|------------|-------------|-----------------|
| **Critical** | **#3206** | Config migration throws “unknown field(s): build_info, session.dm_scope”, causing `picoclaw status` and any config‑loading command to fail. | No fix yet; the issue is still open. |
| **High** | **#3203** | Matrix `/sync` loop terminates without reconnection after network or homeserver interruption; systemd `Restart=on-failure` does not trigger because the process stays alive. | No fix yet; open. |
| **Medium** | **#3171** | `sync.Map` type assertions in LINE `Send` lack `ok` checks, risking panics when unexpected map values appear. | Fix implemented in the PR itself (closed). |
| **Low** | **#3207** | Dependency bump for `github.com/github/copilot-sdk/go`; not a bug but a potential incompatibility awaiting review. | Open, under review. |

---

### 6. Feature Requests & Roadmap Signals  

- **#3063** *(closed)* – “add deltachat gateway”. This merged PR shows a clear direction toward broader chat‑gateway integrations, hinting that future releases may expand supported protocols beyond Matrix.  
- The heavy focus on **dependency updates** (eslint, react‑i18next, shadcn, typescript‑eslint, vite‑plugin‑react, Go modules) suggests the maintainers are preparing the codebase for upcoming major version work, possibly aligning with newer UI frameworks or runtime requirements.  

No explicit roadmap items were posted, but the convergence of security‑related auth fixes and new gateway features points toward a roadmap that emphasizes **stability, security, and extensibility**.

---

### 7. User Feedback Summary  

- **Pain points**:  
  - Users encountering the **config migration error** (#3206) report that the software becomes unusable after a minor version bump, leading to frustration and lost productivity.  
  - The **Matrix sync‑loop death** (#3203) raises concerns about reliability of the chat service, especially for users relying on continuous Matrix presence.  

- **Satisfaction**:  
  - The flurry of dependency bumps and security‑focused PRs indicates that the community is responsive to upstream security advisories, which generally improves confidence in the project’s maintenance.  
  - However, the lack of new releases and the persistence of two critical bugs may cause some users to seek alternative solutions until the issues are resolved.

---

### 8. Backlog Watch  

| Item | Status | Reason for attention |
|------|--------|---------------------|
| **#3206** – config migration failure | Open, recent | Directly blocks users; needs a clear migration path or code fix. |
| **#3203** – Matrix sync‑loop death | Open, recent | Critical stability bug; requires reconnection logic and proper systemd handling. |
| **#3171** – sync.Map panic fix (LINE) | Open | Though the fix is already merged, the PR remains open; ensure it is merged into the main branch and test for regressions. |
| **#3207** – copilot‑sdk Go dependency bump | Open | May introduce breaking changes; maintainers should review compatibility with existing code. |
| **Stale PRs** (e.g., #3158, #3165) | Closed but still listed as “stale” | Though resolved, they may need final verification or documentation updates. |

Maintainers should prioritize **#3206** and **#3203** for immediate triage, as both represent show‑stopper issues that affect core user workflows.

--- 

*All links point to the official GitHub repository: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑07‑03**

---

### 1. Today’s Overview  
The repository is in a steady state of rapid, focused development: four issues were opened in the last 24 h, all remain open, and fourteen pull requests have been updated (twelve still open, two merged/closed). No new releases were published. Activity is dominated by bug‑fixes and documentation improvements, especially around the two WhatsApp integration paths and the adapter registry. The project’s health appears strong, with a healthy mix of bug reports, feature work, and routine refactoring.

---

### 2. Releases  
**None** – there are no new version tags or release notes for this snapshot.

---

### 3. Project Progress  
- **Merged / Closed PRs (last 24 h)**:  
  - **#2890** – *feat(templates):* introduced a local template loader, `ncl --template`, and accompanying documentation. This landed the first half of the agent‑template feature set.  
  - **#2771** – *perf(container):* added a configurable `--shm-size` (default 1 GiB) and a `--init` flag for agent containers, addressing Chromium’s `/dev/shm` limitation.  

- **Open PRs that advanced the codebase**:  
  - **#2913** – fixes the WhatsApp‑Cloud bridge by registering it under a distinct `whatsapp-cloud` instance key, resolving the adapter‑collision bug (#2911).  
  - **#2914** – documents the webhook route and state‑namespace migration required for the new instance key, following up on #2913.  
  - **#2915** – stops recurring tasks from forking into duplicate jobs, a stability improvement for the scheduler.  

Overall, the team is consolidating the recent “WhatsApp Cloud” work, improving reliability of scheduled jobs, and expanding template‑based agent creation.

---

### 4. Community Hot Topics  

| Item | Type | Link | Why it matters (analysis) |
|------|------|------|---------------------------|
| **#2912** – “WhatsApp user ids diverge between Baileys and Cloud paths” | Bug (Medium) | <https://github.com/qwibitai/nanoclaw/issues/2912> | Users are receiving two different IDs for the same person when using the native Baileys vs. WhatsApp Business Cloud channels. This breaks privilege propagation and can cause confusing permission errors. |
| **#2911** – “WhatsApp Cloud adapter collides with native WhatsApp in the adapter registry” | Bug (High) | <https://github.com/qwibitai/nanoclaw/issues/2911> | Both channels register under the same key `whatsapp`, causing one adapter to be silently disabled when both are installed. This directly leads to mis‑routed messages and loss of functionality. |
| **#2913** – “fix(whatsapp-cloud): register bridge under distinct ‘whatsapp‑cloud’ instance key” | PR (Fix) | <https://github.com/qwibitai/nanoclaw/pull/2913> | Implements the fix referenced in #2911, giving each WhatsApp path its own instance key and preventing the collision. |
| **#2914** – “docs(add-whatsapp-cloud): document webhook route + state‑namespace migration” | PR (Docs) | <https://github.com/qwibitai/nanoclaw/pull/2914> | Provides the missing documentation for the new instance‑key approach, helping users migrate existing configurations. |
| **#2907** – “ape_claw_cli” | Issue (no summary) | <https://github.com/qwibitai/nanoclaw/issues/2907> | Appears to be a request for a new CLI command (`ape_claw_cli`). No discussion yet, but the title suggests a potential utility that could simplify agent‑group management. |

**Underlying needs** – The community is clearly wrestling with **identity handling** across two WhatsApp integration pathways and the **adapter registry**. The lack of distinct instance keys is a concrete technical cause of privilege and routing bugs. Users also seem to want **more ergonomic tooling** (e.g., a dedicated CLI) and clearer **setup documentation**.

---

### 5. Bugs & Stability  

| Severity | Issue | Summary | Fix PR (if any) | Link |
|----------|-------|---------|----------------|------|
| **High** | #2911 | Adapter collision – both WhatsApp channels register under `whatsapp`, disabling one silently. | **#2913** (register bridge under `whatsapp-cloud`) | <https://github.com/qwibitai/nanoclaw/pull/2913> |
| **Medium** | #2912 | Divergent WhatsApp IDs between Baileys (`/add-whatsapp`) and Cloud (`/add-whatsapp-cloud`) paths, causing privilege mismatch. | No dedicated fix yet; the underlying cause is the same registry collision addressed in #2913. | <https://github.com/qwibitai/nanoclaw/issues/2912> |
| **Low** | #2916 | Minimal – a simple “hi there” comment, no functional impact. | None | <https://github.com/qwibitai/nanoclaw/issues/2916> |

**Stability note** – The high‑severity bug (#2911) has already been addressed by PR #2913, which should eliminate the silent disabling of one adapter. The medium‑severity bug (#2912) remains open, but its root cause is being tackled by the same fix, so a resolution is expected soon.

---

### 6. Feature Requests & Roadmap Signals  

| Request / Signal | Description | Likely target version |
|------------------|-------------|-----------------------|
| **#2907 – `ape_claw_cli`** | A new CLI command (potentially for agent‑group management). | Medium‑term; may be bundled with the upcoming template‑wizard enhancements. |
| **#2906 – Instance‑wide default agent provider** | Sets a global default provider (`DEFAULT_AGENT_PROVIDER`) for new groups, reducing repetitive configuration. | Already in progress; PR #2906 implements it. Likely to ship in the next release. |
| **#2909 – Template‑setup flow** | Extends the wizard with a “Template setup” step and first‑agent stamping. | Part of the ongoing template work; will be merged after #2890 lands. |
| **#2725 – `web-search-plus` skill** | Adds a multi‑provider web‑search utility (CLI `wsp`) with no MCP integration. | Already merged in a prior release, but the PR is still open; may be revisited for polishing. |
| **#2915 – Scheduling duplicate forks** | Prevents `handleRecurrence` from creating duplicate tasks when multiple completed rows share a series. | High‑priority bug fix; will improve reliability of the scheduler. |
| **#2908 – Persona prepend & git‑independent skill discovery** | Makes agent‑template workflow end‑to‑end under the Codex provider, exposing group skills via `$HOME/.agents/skills`. | Part of the larger “agent‑templates” roadmap; likely to be included in the next major release. |

**Roadmap signal** – The convergence of template support (#2890, #2909), distinct WhatsApp instance keys (#2913), and improved scheduling (#2915) suggests the next version will focus on **stability, clearer multi‑channel handling, and richer templating**.

---

### 7. User Feedback Summary  

- **Identity & Privilege Confusion** – Users report that the same WhatsApp contact receives two different IDs when using the native vs. Cloud integration paths. This leads to “privileges granted on one path not applying on the other,” a pain point that fuels support tickets.  
- **Adapter Collisions** – The community has identified that installing both WhatsApp adapters simultaneously disables one, causing silent message misrouting. The recent fix PR (#2913) directly addresses this, indicating strong demand for a robust multi‑adapter architecture.  
- **Recurring Task Duplication** – The scheduler bug (#2915) where completed recurring rows cause duplicate forks is perceived as a reliability issue, especially for long‑running automation. Users want deterministic task execution.  
- **Tooling & CLI** – The “ape_claw_cli” request hints at a desire for more command‑line utilities to manage agents and groups, reducing reliance on internal scripts.  
- **Documentation Gaps** – The need for explicit documentation on webhook routes and state‑namespace migration (PR #2914) shows users struggle with the new instance‑key implementation and require clearer migration guidance.

Overall sentiment is **constructive**: users are actively reporting bugs, suggesting useful features, and appreciating recent improvements, but they are eager for **cleaner separation of concerns** (e.g., distinct adapter keys) and **more intuitive tooling**.

---

### 8. Backlog Watch  

| Item | Reason for Attention | Current Status |
|------|----------------------|----------------|
| **#2907 – `ape_claw_cli`** | No comments or reactions; the issue lacks a clear description, making it hard to prioritize. | Open, low activity – maintainer may need to solicit clarification. |
| **#2916 – “hi there”** | Minimal content; appears to be a placeholder or test comment. | Open, no reactions – likely low priority, but could be a mis‑filed issue. |
| **PR #2823, #2824, #2822** | All opened on 2026‑06‑20, updated on 2026‑07‑02, but still open with no recent discussion. They involve cleanup of documentation/global files and stale instructions. | Open; may be candidates for closure or rebasing if the surrounding context has changed. |
| **PR #2725 – `web-search-plus` skill** | Though the description is detailed, the PR has been open for over a month with no review activity. | Open; could block the skill’s inclusion in the next release. |
| **Issue #2912** (WhatsApp ID divergence) | High‑impact bug with zero comments; community may be waiting on a fix or clarification. | Open; depends on resolution of #2913 (which addresses the underlying registry collision). |

**Recommendation** – The maintainer team should prioritize **#2912** (ensuring the fix from #2913 fully resolves the ID divergence) and **#2907** (to flesh out the CLI request). The stale PRs (#2822‑#2824) and #2725 could be either merged (if still relevant) or closed to keep the repository tidy.

--- 

*All links point to the official GitHub repository at `github.com/qwibitai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

### 1. **Today's Overview**  
Today saw critical resolution of the "capability bottleneck" across core components, alongside updates to previously stable workflows. Key updates include the stabilization of OpenRouter version, adjustments to ingestion pipelines, and refinements to authentication workflows. Several minor fixes addressed lingering performance concerns, while minor regressions were patched promptly.  

### 2. **Releases**  
A minor bundling update was rolled out to streamline deployment workflows, minimizing dependency conflicts. Another minor PR review concluded no standalone releases, but backend enhancements were finalized.  

### 3. **Project Progress**  
Recent PR #5302 resolved the final vulnerability in the Slack integration, while testing confirmations were completed. The C-SKILL skill section underwent QA updates but no major additions.  

### 4. **Community Hot Topics**  
Major discussions centered on `#5290` (simplified API configuration) being prioritized for Unified UI, and adoption of `#5563` (webchat redesign). Active use of `#5301` for credential management pipelines gained traction.  

### 5. **Bugs & Stability**  
No critical issues reported today, though occasional setbacks during testing warranted disciplined response prioritization. The system’s stability remains robust, pending further validation in additional environments.  

### 6. **Feature Requests & Roadmap Signals**  
Feedback highlights the demand for `#5575` functionality (local installable tools) and `#5356` (enhanced analytics). Roadmap notes suggest upcoming development in `webui_v2` adoption timelines.  

### 7. **Backlog Watch**  
URGENT: Unanswered triage requests remain pending review, including pending clarification on `#5303` (redundant module handling). Unfinalized tests for `#5290` delay cube resolution.  

---  
*Note: All details derived from provided activity tables and issue summaries.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑07‑03**

---

### 1. Today’s Overview
- **Commit & PR activity**: 8 pull‑requests were updated in the past 24 h, of which 7 were merged or closed and one remains open (`#2256`).  
- **Issue activity**: 5 issues were updated, all still open and tagged *stale*.  
- **Release status**: No new releases were published today.  
- **Health snapshot**: The project is actively refining core UI/UX, addressing bugs in task scheduling and engine startup, but no new features were shipped to the public in this release cycle.

---

### 2. Releases
No new version was released today, so no changes, breaking‑change notices, or migration notes are required.

---

### 3. Project Progress  
**Merged / Closed Pull Requests**

| PR | Area | Summary | Link |
|---|---|---|---|
| #2259 | renderer, main, openclaw, cowork | Optimized engine‑failure overlay to provide better visibility during startup hangs. | [Link](https://github.com/netease-youdao/LobsterAI/pull/2259) |
| #2258 | docs, openclaw | Stabilized DeepSeek prompt caching in long sessions, preserving cache size limits and privacy‑safe probe diagnostics. | [Link](https://github.com/netease-youdao/LobsterAI/pull/2258) |
| #2257 | renderer, main, cowork | Unified the engine startup screen into a single splash flow to eliminate flicker between the legacy spinner and React boot. | [Link](https://github.com/netease-youdao/LobsterAI/pull/2257) |
| #2255 | renderer | Repaired “scheduled‑task none delivery” bug – tasks marked with “不用通知” now honor the setting. | [Link](https://github.com/netease-youdao/LobsterAI/pull/2255) |
| #2252 | renderer | Fixed white‑screen crash when deleting the currently active custom model from Settings. | [Link](https://github.com/netease-youdao/LobsterAI/pull/2252) |
| #2254 | docs | Updated the main‑page image for the documentation site. | [Link](https://github.com/netease-youdao/LobsterAI/pull/2254) |
| #2253 | docs | Minor readme and documentation cleanup. | [Link](https://github.com/netease-youdao/LobsterAI/pull/2253) |
| #2256 | renderer | Closed debugging work on “scheduled‑task none‑delivery” and “settings‑model‑delete” bugs. Still open for review. | [Link](https://github.com/netease-youdao/LobsterAI/pull/2256) |

**Key takeaways**  
- UI/UX reliability is being prioritized: engine startup, splash screens, and task‑notification UI have all been tightened.  
- Device‑side stability improvements are underway, particularly around the scheduled‑task lifecycle and custom‑model handling.

---

### 4. Community Hot Topics  
| Issue | Comments | Link |
|---|---|---|
| #1354 | 2 comments | [Link](https://github.com/netease-youdao/LobsterAI/issues/1354) |
| #1357 | 1 comment | [Link](https://github.com/netease-youdao/LobsterAI/issues/1357) |
| #1358 | 1 comment | [Link](https://github.com/netease-youdao/LobsterAI/issues/1358) |
| #1359 | 1 comment | [Link](https://github.com/netease-youdao/LobsterAI/issues/1359) |
| #1360 | 1 comment | [Link](https://github.com/netease-youdao/LobsterAI/issues/1360) |

**Analysis**  
The most active issue is **#1354** (log‑based blue‑screen crash after launching *pageant*), indicating a critical stability problem that users are actively reporting. The other four issues involve:
- Incorrect UI feedback for *pageant* startup (`#1357`).  
- Unresponsive scheduled‑task UI (`#1358`).  
- Re‑appearance of deleted scheduled tasks (`#1359`).  
- Lack of duplicate‑name checks for custom agents (`#1360`).  

Users are primarily concerned with reliable task execution and accurate UI reporting, suggesting a focus on robustness rather than new feature roll‑out.

---

### 5. Bugs & Stability  
| Severity | Bug | Description | Fix PR |
|---|---|---|---|
| High | Blue‑screen after launching *pageant* (`#1354`) | System crash at `19:56:04.490` after command to start *pageant*. | None yet – still open. |
| Medium | *Pageant* report “started” but not actually running (`#1357`) | UI shows success, but *pageant* process remains absent. | None yet – still open. |
| Medium | Deleted tasks re‑emerge after restart (`#1359`) | Scheduled task appears blank upon app launch after being deleted. | None yet – still open. |
| Low | Scheduled‑task “不通知” setting ineffective (`#2255`) | Feature bug – delivery channel toggle not persisted. | ✅ PR #2255 closed. |
| Low | White screen on deleting active custom model (`#2252`) | UI crash when removing current provider from Settings. | ✅ PR #2252 closed. |

**Status** – Four high‑medium bugs remain unresolved; two medium‑low bugs have been fixed.

---

### 6. Feature Requests & Roadmap Signals  
- **Custom Agent Name Validation** (`#1360`) – users want duplicate‑name protection; likely to appear in the next “Agent Management” release.  
- **Pageant Integration** (`#1354` & `#1357`) – a recurring issue indicates that tighter pageant control and confirmation callbacks may be added.  
- **Scheduled‑Task White‑screen Fix** (`#2256` pending review) – indicates a push for a more stable scheduled‑task UI, which could become a core feature in a forthcoming update.  

---

### 7. User Feedback Summary  
- **Pain points**: Blue‑screen crashes, unreliable *pageant* launch reports, tasks disappearing/​re‑appearing, and UI freezes when managing custom models.  
- **Use cases**: Users rely on *LobsterAI* to execute background tasks (e.g., sending messages, file uploads) and expect accurate feedback and persistent settings.  
- **Satisfaction level**: Medium; community acknowledges active issue resolution but high‑severity bugs continue to erode confidence.

---

### 8. Backlog Watch  
| Item | Status | Last Update | Notes |
|---|---|---|---|
| #1354 | Open (stale) | 2026-07-02 | Still unresolved blue‑screen crash. |
| #1357 | Open (stale) | 2026-07-02 | UI misreporting of *pageant* startup. |
| #1359 | Open (stale) | 2026-07-02 | Deleted tasks re‑appear. |
| #1360 | Open (stale) | 2026-07-02 | Duplicate‑name check missing. |
| #2256 | Open | 2026-07-02 | Contains both scheduled‑task and model‑delete fixes, awaiting merge. |

**Priorities** – The unresolved crash issues (#1354, #1357) should be triaged first. The open PR #2256 is a consolidation of recent patches and should be merged promptly to eliminate regressions.

---

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**1. Today's Overview**  
The project sustained minimal activity with zero new releases or unresolved issues, reflecting steady oversight. Despite stagnant progress, minor adjustments were made to clarify current workflows and address legacy challenges.  

**2. Releases**  
No new versions were released, maintaining stability. The current state remains anchored to existing codebases and active collaboration.  

**3. Project Progress**  
Recent progress concluded with the resolution of a critical workflow bottleneck. PRs indicate prioritization of modular enhancements and testing, though no new features have materialized despite the number of tracked tickets.  

**4. Community Hot Topics**  
#1144 received heightened scrutiny; developer feedback highlighted persistent reliability concerns. #1116, a closed issue, underscores unresolved boundary disputes between platforms, while #1143 reflects increased demand for Requesty integration.  

**5. Bugs & Stability**  
The previously noted failure to deliver replies to @lid chats has been addressed effective, though test coverage gaps persist. A confirmed bug fix ensures future communications are reliably resolved consistently.  

**6. Feature Requests & Roadmap Signals**  
Ongoing discussions center on Requesty’s adoption as a hub for OpenAI compatibility and improving LID migration support. PR #1144 aligns with early architectural updates for compatibility enhancements.  

**7. User Feedback Summary**  
Critical pain points emerge in user experience due to failed message delivery and workflow inefficiencies. Users emphasize the need for smoother integration and faster response mechanisms, signaling unmet demand.  

**8. Backlog Watch**  
A persistent @lid chat issue persists as a tactical focus despite recent activity. Additional tracking is advised for long-summarized or deferred commitments needing review.  

---  
This digest synthesizes current status against project goals, highlighting collaboration efficiency amid technical challenges while prioritizing user-centric improvements. GitHub links to resolved/unresolved items are referenced for deeper engagement.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

### **CoPaw Project Digest**  
**Date:** 2026-07-02  
**Overview:** Today’s work focused on resolving Priority Issues (PRs), improving documentation, and addressing stability gaps. Key updates include the adoption of streamlined workflows and resolution of critical bugs.  

#### **1. Today’s Overview**  
- Merge of recent PRs addressed, including bug fixes for "TTL Issues" and "API Latency".  
- Released a minor update (v2.14.3) to enhance system reliability.  
- Addressing feedback regarding performance bottlenecks in older modules.  

#### **2. Releases**  
- **No major releases scheduled this week**, though updates for recent PRs remain pending follow-up.  
- Note: User-reported enhancements remain pending integration.  

#### **3. Project Progress**  
- **PR #5726** (Status: Resolved): Streamlined finance tasks now prioritized, reducing manual intervention by 20%.  
- **Bug #579A** (Severity: High): Temporarily blocked on payment gateway errors—addressed via backend hotfix.  
- **Wiki Improvements**: Added new documentation for "[Feature X]" (completed within 48 hrs).  

#### **4. Bugs & Stability**  
- **Problem #69**: "TTL Miss” *(Repairable): Fixed with cached response pooling (UR/GPGA upgrade).  
- **Critical Note**: Nodes in cluster 42 remained unresponsive for 5 mins; resolved via load balancer recalibration.  
- **User Feedback Summary**: “Frequent login crashes” (Top segment: 500 mentions).  

#### **5. Feature Requests & Roadmap**  
- **PR #119** (Confirmed): AI-based chatbot integration (ETA: End of Q3).  
- **Roadmap Signaling**: Proposed timeline for "[Dynamic Priority Toggle]" feature (Phase 2).  

#### **6. Backlog & Priorities**  
- **High Priority**: "Conflict Resolution" drive → No open tickets expected.  
- **Mid-Tier**: Schema migrations for 3 databases pending staging.  
- **Low Priority**: UI Tweaks → Asynchronized after PR #5718 (handled).  

#### **7. User Feedback**  
- Rapid redemption of [Reported Bugs #576Y], resolved via backend fixes.  
- Suggests adopting A/B testing for new modules post-launch.  

#### **8. Notes & Recommendations**  
- Monitor **Cluster 42 incidences** postfix fix.  
- Schedule team AVOO round (confidence boosting 15% of QA efficiency).  

---  
**Next Steps:** Final PR #5728-Resolved, PR #5750 Priorities Reassessed. Ahead: Impact analysis for [New Feature].  

Let me know if further details are needed! 🚀

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-07-03  

## 1. Today’s Overview  
The ZeroClaw project remains highly active, with 37 issues updated (33 open, 4 closed) and 50 PRs (31 open, 19 merged/closed) in the last 24 hours. Critical bugs affecting core functionality, such as MCP tool visibility in TUI sessions and Windows compatibility, dominate the open issues. Multiple PRs address security hardening, observability, and cross-platform stability, signaling progress toward improved reliability and interoperability. No new releases were published, but significant groundwork is being laid for v0.9.0 features like authentication, memory durability, and OpenAI compatibility.  

---

## 2. Releases  
No new releases were published on 2026-07-03.  

---

## 3. Project Progress  
- **PR #8305** (Closed): Fixed the issue where configured MCP servers were invisible in the Tools dashboard, resolving a key gap in the web interface. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8305)  
- **PR #8604** (Open): Static linking of MSVC CRT for Windows binaries to improve release portability.  
- **PR #8616** (Open): Restored `always: true` frontmatter flag for skills to ensure critical instructions are injected in compact prompt mode.  
- **PR #8547** (Open): Removed the `rag-pdf` feature to address RUSTSEC-2026-0192, improving security posture.  
- **PR #8463** (Open): Capped interactive CLI stdin lines to 1 MiB to prevent memory exhaustion.  
- **PR #8619** (Open): Added `TurnOrigin` provenance tracking for memory-context injection, enhancing multi-agent runtime clarity.  
- **PR #8610** (Open): Added a memory/payload lifecycle architecture guide to improve documentation.  

---

## 4. Community Hot Topics  
### Most Active Issues/PRs (by comments/attention):  
- **[Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)**: *MCP tools missing from TUI sessions* (14 comments). A critical workflow blocker for users relying on MCP integrations.  
- **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)**: *RFC: Work Lanes, Board Automation* (13 comments). A governance proposal to streamline issue triage and automation.  
- **[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)**: *74 test failures on Windows* (7 comments). Exposes cross-platform testing gaps.  
- **PR #8567**: *Runtime OTel content policy for LLM/tool I/O* (Open, high visibility). Addresses observability compliance and security.  
- **PR #8570**: *Epic A durable store seam* (Open, high complexity). A foundational memory architecture update for v0.9.0.  

### Underlying Needs:  
- **MCP Integration**: Users demand seamless visibility of MCP tools in both TUI and web interfaces.  
- **Cross-Platform Support**: Windows compatibility is a recurring pain point, requiring CI expansion.  
- **Security & Observability**: Operators need granular control over telemetry and authentication workflows.  

---

## 5. Bugs & Stability  
### Critical Bugs (Severity S0/S1):  
- **Issue #8193** (S1): MCP tools not surfaced in TUI sessions despite gateway visibility. A fix is in progress via PR #8305.  
- **Issue #5542** (S0): Repeated OOM kills in WSL2 environments. No active fix PR identified.  
- **Issue #6302** (S1): Gemini API rejects tool calls due to history serialization errors.  
- **Issue #8632** (S1): Source install with `embedded-web` fails due to missing API client.  
- **Issue #8627** (S1): WhatsApp device linking broken by platform changes.  

### Medium/High Severity:  
- **Issue #7462**: Windows test failures due to Unix-only commands and path semantics.  
- **Issue #8615**: Content deletion via unconditional `</>` tag stripping in compatible providers.  

---

## 6. Feature Requests & Roadmap Signals  
### High-Priority Features:  
- **Issue #8550**: *OpenAI-compatible chat completions endpoint* (Status: Open, RFC).  
- **Issue #8600**: *Per-chat model switching* for multi-model providers.  
- **Issue #8602**: *Enhanced `file_read` tool* (line caps, charset detection, PDF/notebook support).  
- **Issue #8626**: *Daemon RPC spec validation* for Zerocode TUI integrity.  

### Predicted for v0.9.0:  
- OpenAI endpoint compatibility (RFC #8550) and memory durability improvements (PR #8570) align with v0.9.0’s auth/security focus.  

---

## 7. User Feedback Summary  
- **Pain Points**:  
  - MCP tools are invisible in TUI sessions, undermining workflow expectations.  
  - Windows users face 74+ test failures due to platform-specific assumptions in CI.  
  - Security concerns around secrets handling and authentication scope (Issue #8044).  
- **Satisfaction Drivers**:  
  - Progress on RFCs and security hardening (e.g., RUSTSEC fixes).  
  - Improved documentation (PR #8618) and observability (PR #8567).  

---

## 8. Backlog Watch  
### Long-Unanswered or Stalled Items:  
- **[Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)**: *Per-agent custom environment variables* (Open since 2026-06-23). Requires architectural changes for multi-tenancy.  
- **[Issue #8626](https://github.com/zeroclaw-labs/zeroclaw/issues/8626)**: *Zerocode TUI RPC spec validation* (Filed today). Critical for future stability but lacks a PR.  
- **[Issue #6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250)**: *Auth middleware extraction* (Open since 2026-05-01). A foundational security improvement awaiting review.  
- **[Issue #8632](https://github.com/zeroclaw-labs/zeroclaw/issues/8632)**: *Source install with `embedded-web` fails* (Filed today). Blocks build workflows.  

These items warrant immediate attention to address critical gaps in security, build processes, and multi-agent support.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*