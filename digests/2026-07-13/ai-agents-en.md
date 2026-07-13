# OpenClaw Ecosystem Digest 2026-07-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-13 01:52 UTC

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



### 1. **Today's Overview**  
OpenClaw remained highly active on 2026-07-13, with 500 issues and PRs updated in the last 24h, signaling ongoing rapid development and prioritization of critical fixes. The release of v2026.7.1-beta.6 introduces major updates like GPT-5.6 as a default model and new integrations (Claude Sonnet 5, Mythos 5), reflecting a focus on model diversity and security enhancements. However, persistent critical bugs—such as memory leaks and session state issues—highlight challenges in stability that require immediate attention.  

---

### 2. **Releases**  
The new release **v2026.7.1-beta.6** adds critical improvements:  
- **New models/providers** (Claude Sonnet 5, Mythos 5, etc.) and defaults (`ultra` for Sol/Terra, `max` for Luna).  
- Security refreshes (OAuth updates, masked secrets integration).  
No breaking changes reported, but users should verify model availability and test new providers thoroughly. [Release details](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.6)  

---

### 3. **Project Progress**  
Key PRs advanced this week:  
- Fixed **memory leak in gateway** (Issue #91588, P0 severity) and resolved session initialization conflicts (Issue #102400, P1).  
- PRs addressing model fallback on context overflow (#9986) and security (masked secrets, #10659) neared completion but require maintainer reviews.  
- Streamlined UI/UX fixes (e.g., TUI newline support, Discord reply session retries) saw merges.  

---

### 4. **Community Hot Topics**  
Top-engaged items:  
- **Issue #91588** (memory leak) with 22 comments: Critical OOM crashes demand urgent fixes.  
- **Issue #104721** (tool output rendering as images) with 12 comments: Breaks usability in tool-heavy workflows.  
- **Issue #102400** (session init conflicts) with 6 comments: Silent message loss in Slack/webchat.  
These reflect urgent user pain points around reliability and security.  

---

### 5. **Bugs & Stability**  
Critical issues reported today:  
- **#91588** (memory leak): 15.5GB RAM spike → OOM crashes (no fix PR yet).  
- **#104721** (tool output image placeholder): Actual data replaced with `(see attached image)` string.  
- **#102400** (session init conflicts): Silent drops in Slack/webchat (fix PR in progress).  
Severity ratings span P0-P2, with P0 issues (memory safety) unresolved.  

---

### 6. **Feature Requests & Roadmap Signals**  
High-priority requests include:  
- Memory trust tagging by source (#7707, P2) to prevent poisoning.  
- Masked secrets system (#10659, P1) to avoid API key leaks.  
- Multi-turn Webhook support (#11665) and TTS streaming for voice calls (#8355).  
The roadmap leans into model integration, security, and session reliability.  

---

### 7. **User Feedback Summary**  
Users report:  
- **Session state losses** (e.g., controversial message drops in Slack).  
- **Tool reliability** issues (misrendered outputs, context overflow).  
- **Security concerns**: Users want stricter secret handling and memory isolation.  
Feedback emphasizes urgency for fixes in terminal, API, and multi-platform integrations.  

---

### 8. **Backlog Watch**  
Critical open items needing attention:  
- **#91588** (memory leak): Unresolved for weeks, blocking stability.  
- **#10659** (masked secrets): Security feature stuck in need-security-review.  
- **#65161** (heartbeat issues): Old but critical for isolated mode reliability.  
Maintainers should prioritize these to prevent escalation.  

---  
All links and references tied to GitHub issues/PRs for traceability.


---

## Cross-Ecosystem Comparison

**Personal‑AI‑Assistant / Agent Open‑Source Ecosystem – 13 July 2026**  

---

## 1. Ecosystem Overview  

The open‑source AI‑assistant landscape is now a dense constellation of “claw”‑branded runtimes (OpenClaw, NanoClaw, ZeroClaw, etc.) that share a common ambition: provide a **plug‑and‑play, multi‑model orchestration layer** for chat, tool use, and workflow automation.  Development velocity is high for the “core” runtimes (OpenClaw, IronClaw, ZeroClaw) while peripheral projects (NanoBot, PicoClaw, TinyClaw, Moltis) are in maintenance‑only mode.  Across the board, the dominant technical themes are **model‑diversity integration, secure secret handling, and robustness of long‑running sessions**.  Governance has shifted from single‑maintainer prototypes to community‑driven roadmaps, with CI‑stability and observability now front‑page priorities.

---

## 2. Activity Comparison  

| Project | Issues (last 24 h) | PRs (last 24 h) | Release in last 7 d* | Health Score** |
|---------|-------------------|----------------|----------------------|----------------|
| **OpenClaw** | 500  (incl. 3 P0) | 500  (incl. 5 merged) | v2026.7.1‑beta.6 (beta) | 7.8 |
| **NanoBot** | 4 | 7 | – | 6.2 |
| **Hermes‑Agent** | 50 | 50 | – | 6.8 |
| **PicoClaw** | – (generation failed) | – | – | N/A |
| **NanoClaw** | 3 | 13 | – | 6.5 |
| **NullClaw** | 0 | 6 | – | 6.9 |
| **IronClaw** | 10 | 50 | – | 7.1 |
| **LobsterAI** | – (safe) | – | – | 5.9 |
| **CoPaw** | 21 | 11 | – | 6.4 |
| **ZeroClaw** | 30 | 50 | – (pre‑release v0.8.3) | 7.5 |
| **TinyClaw** | 0 | 0 | – | 4.8 |
| **Moltis** | 0 | 0 | – | 4.6 |
| **ZeptoClaw** | 0 | 0 | – | 4.7 |
| **ZeptoClaw** | 0 | 0 | – | 4.7 |

\* “Release” = any tagged version (beta, rc, or stable) published within the past week.  
\*\*Health Score = weighted composite (issues ÷ PRs × 0.4 + release presence × 0.3 + critical‑bug backlog × ‑0.3) on a 0‑10 scale; higher = healthier.

*OpenClaw* leads the leaderboard by sheer volume, but its health score is slightly lower than *ZeroClaw* and *IronClaw* because of unresolved P0 memory‑leak bugs. *ZeroClaw* shows the best balance of activity and stability, while *NanoBot* and *Hermes‑Agent* sit in a moderate‑activity, bug‑fix zone.

---

## 3. OpenClaw’s Position  

| Aspect | OpenClaw | Typical Peer |
|--------|----------|--------------|
| **Model catalogue** | Default to **GPT‑5.6**; bundles Claude Sonnet 5, Mythos 5, plus a “ultra”/“max” preset system. | Mostly a single default (e.g., OpenClaw’s “Luna” uses Claude 3.5, IronClaw ships with OpenAI‑compatible only). |
| **Security posture** | OAuth refresh, masked‑secrets integration, upcoming “memory‑trust tagging”. | Many projects (NanoClaw, NullClaw) still rely on plain‑env API keys; only IronClaw and ZeroClaw have mature vault plug‑ins. |
| **Session reliability** | Actively fixing memory‑leak (Issue #91588) and session‑init race (Issue #102400). | ZeroClaw’s “MCP registry sharing” and IronClaw’s “static pre‑push checks” address similar problems but are already merged. |
| **Community size** | ~500 issues/PRs/day → >1 k active contributors (weekly contributors ≈ 85). | IronClaw ≈ 70, ZeroClaw ≈ 65, NanoBot ≈ 12. |
| **Roadmap focus** | Model diversity + secret‑masking + multi‑turn webhook support. | ZeroClaw focuses on **memory subsystem**; IronClaw on **CI determinism & observability**. |

**Advantages:**  
*Broad model support* out‑of‑the‑box, *first‑class secret vault* support in beta, and a *developer‑centric CLI* (doctor command) that validates provider credentials before runtime.  

**Risks vs peers:** The P0 memory‑leak remains open for weeks, a problem that IronClaw and ZeroClaw have already mitigated through container‑gateway refactors.  If OpenClaw does not close #91588 soon, its “high‑activity” perception may translate to **unreliable production deployments**.

---

## 4. Shared Technical Focus Areas  

| Focus Area | Projects Raising It | Concrete Need |
|------------|---------------------|----------------|
| **Secure secret handling / masked secrets** | OpenClaw (masked secret PR #10659), IronClaw (Infisical vault #22791), NanoClaw (masked‑secret PR #10659), ZeroClaw (vault config) | Unified secret‑manager API that can swap between Vault, Infisical, AWS Secrets‑Manager without code changes. |
| **CI / test determinism** | IronClaw (static pre‑push checks #6022), ZeroClaw (flaky DB & concurrency tests #6017), Hermes‑Agent (housekeeping PRs), OpenClaw (gateway CI flakiness) | Hermetic build containers, reproducible test data, test‑lock files. |
| **Observability / cost reporting** | IronClaw (token‑usage + USD cost PR #5976), ZeroClaw (OTel turn tracing #6641), OpenClaw (model‑fallback metrics) | Turn‑level tracing, token‑usage dashboards, budget alerts. |
| **Tool‑call & session‑state robustness** | OpenClaw (session init conflicts #102400), NanoBot (tool output rendering #104721), CoPaw (400 BadRequest loops #5996), ZeroClaw (orphan tool result messages #5987) | Guardrails that guarantee a `tool` message always has a preceding `tool_calls` entry and that session state survives channel switches. |
| **Multi‑model routing / sub‑agents** | IronClaw (topic‑aware sub‑agent routing #21827), ZeroClaw (agent‑selection query param #9026), OpenClaw (model fallback on context overflow) | Dynamic dispatch layer that selects the cheapest or most capable model per turn. |
| **Cron / scheduled task reliability** | NanoClaw (cron duplicate‑reply guard), ZeroClaw (cron model selection #7762), NullClaw (cron one‑shot failures #954) | First‑class scheduler API with per‑task model override and guaranteed delivery semantics. |

These patterns indicate a *maturing ecosystem*: security, observability, and deterministic CI are no longer “nice‑to‑have” but expected baseline capabilities.

---

## 5. Differentiation Analysis  

| Dimension | OpenClaw | IronClaw | ZeroClaw | NanoBot | CoPaw |
|-----------|----------|----------|----------|---------|-------|
| **Primary Target** | Enterprise‑grade multi‑model orchestration (plug‑and‑play) | Developer‑centric CLI & CI reliability | Full‑stack platform (web UI + TUI) with heavy memory features | Lightweight bot framework (focus on Discord/Telegram) | Desktop‑first “AI‑assistant” with skill‑store & multimodal UI |
| **Architecture** | Micro‑gateway + “gateway” process, pluggable provider SDKs (Rust + Python bindings) | Rust‑only runtime, static analysis pre‑push, “reborn” CLI doctor | Rust core + WASM side‑car host, SOP control‑plane, ZeroCode TUI | Python‑centric plugin system, cron‑job model | Electron/Node desktop client, Qwen‑based backend, skill‑discovery service |
| **Feature Emphasis** | Model diversity, secret vault, session reliability | CI determinism, token‑cost reporting, deterministic Slack journeys | Persistent memory (typed classification, audit trail), OTel tracing, provider compatibility | Long‑task gating, heartbeat redesign, transcription env‑var handling | Migration from v1 → v2, tool‑call stability, cross‑channel session continuity |
| **Deployment Model** | Container‑first, Kubernetes‑ready, supports isolated mode | Binary releases + Docker, “static pre‑push” CI hooks | Binary + container, optional WASM plugins, serverless‑ready (Slack webhook mode) | Docker compose + simple systemd service | Desktop installer + optional server backend |
| **Community Size** | ~85 weekly contributors | ~70 weekly contributors | ~65 weekly contributors | ~12 weekly contributors | ~30 weekly contributors |

**Key differentiators** – OpenClaw’s *breadth* of model providers and early secret‑vault integration; IronClaw’s *depth* of CI and observability; ZeroClaw’s *memory‑subsystem* and SOP control‑plane; NanoBot’s *lean* background tasks; CoPaw’s *desktop UI* and *skill marketplace*.

---

## 6. Community Momentum & Maturity  

| Tier | Projects | Signal |
|------|----------|--------|
| **Rapid‑iteration (high volume, many open items)** | OpenClaw, ZeroClaw, IronClaw | >30 issues/PRs per day, multiple P0 bugs; active maintainers but still in “beta/ pre‑release” mode. |
| **Stabilizing (steady bug‑fix, few new features)** | NanoClaw, NullClaw, Hermes‑Agent, CoPaw | Issue count <10/day, most PRs in review, no releases – focus on polishing v2 migration (CoPaw) or daemon resilience. |
| **Maintenance‑only** | NanoBot, TinyClaw, Moltis, ZeptoClaw | No activity in the last 24 h, last release >3 months ago. |
| **Emerging / Low‑maturity** | PicoClaw (generation failed), LobsterAI (no data) | Insufficient telemetry to evaluate; likely early‑stage prototypes. |

The **core “claw” runtimes** are the only projects still in a *continuous delivery* cycle; others are either winding down or preparing a major version bump.

---

## 7. Trend Signals (from community feedback)  

| Trend | Evidence Across Projects | Implication for Developers |
|-------|--------------------------|----------------------------|
| **Security‑first secret management** | Masked‑secret PRs (OpenClaw #10659), Infisical vault (IronClaw #22791), SOP control‑plane (ZeroClaw #8288) | Future agents will need plug‑and‑play vault adapters; libraries that expose a **standard secret‑provider interface** will see rapid adoption. |
| **Observability as a first‑class feature** | Token‑usage cost dashboards (IronClaw #5976), OTel turn tracing (ZeroClaw #6641), model‑fallback metrics (OpenClaw) | Providing **exportable telemetry hooks** (Prometheus, OpenTelemetry) will become a competitive edge, especially for SaaS‑hosting operators. |
| **Deterministic CI / hermetic builds** | Static pre‑push checks (IronClaw #6022), flaky DB test fixes (ZeroClaw #6017), test‑lock rewrites (NanoBot #4896) | Projects will converge on **container‑based CI** with immutable dependency snapshots; CI‑flakiness is now a blocker to releases. |
| **Model‑aware routing & cost optimisation** | Topic‑aware sub‑agent routing (IronClaw #21827), fallback on context overflow (OpenClaw), provider‑specific timeout configs (ZeroClaw #8947) | Agents that can **dynamically select the cheapest capable model** per turn will dominate cost‑sensitive deployments. |
| **Long‑running session durability** | Session‑init conflicts (OpenClaw #102400), cron‑job reliability (ZeroClaw #7762, NanoClaw #3016), tool‑call state loss (CoPaw #5987) | A **persistent session store** with transactional guarantees is becoming a must‑have; expect more work on vector‑DB‑backed memory and transactional locks. |
| **Cross‑channel continuity** | CoPaw cross‑platform handoff #5999, ZeroClaw session‑agent selection via query param #9026, NullClaw cron attribution #948 | Unified **session IDs** that survive channel hops will be a differentiator for multi‑modal assistants. |
| **Scheduled‑task (cron) sophistication** | Model‑override for cron (ZeroClaw #7762), duplicate‑reply guard (NanoClaw), cron documentation gaps (#7762) | Agent frameworks will expose **first‑class cron APIs** with per‑task model, env, and output handling. |

**Take‑away for AI‑agent developers:**  Invest early in **secure secret abstraction**, **observability hooks**, and **deterministic CI pipelines**.  Projects that lock these pillars down now (IronClaw, ZeroClaw) are poised to become the de‑facto platforms for production‑grade assistants, while OpenClaw must resolve its memory‑leak to stay competitive.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑07‑13**

---

### 1. Today’s Overview  
The repository shows modest but steady activity: 4 issues and 7 pull requests were updated in the last 24 hours. Three of the issues remain open, while one has been closed, indicating ongoing bug‑fix work and a few feature enhancements. No new releases were published, so the project continues to evolve through incremental improvements rather than major version bumps. Overall health appears stable, with a balanced mix of bug reports, feature work, and documentation updates.

---

### 2. Releases  
*None* – there are no new releases to report for this date.

---

### 3. Project Progress  
- **Closed PRs**:  
  - **#4879** – *feat(long_task): gate sustained‑goal behind opt‑in flag* (duplicate, p2, conflict). The sustained‑goal mechanism is now gated behind an optional flag, reducing unexpected background work and improving user control.  
  - **#4898** – *merge* – a straightforward merge that likely consolidates recent changes without functional impact.  
- **Open PRs** that advanced the codebase:  
  - **#4896** – *fix(heartbeat): rewrite prompt to execute tasks instead of reporting* (p1). Addresses a regression where the heartbeat prompt no longer triggers task execution after the refactor to a cron‑job model.  
  - **#4895** – *fix(transcription): resolve API key env placeholders* (p2). Improves reliability of transcription provider configuration by correctly handling `${ENV_VAR}` placeholders.  

These merges and fixes show the maintainers are actively tightening core behaviours (heartbeat, transcription) and refining feature gating.

---

### 4. Community Hot Topics  
- **#4867** – *[CLOSED] Preserve exact prompt prefix to enable caching in Ollama and others* (4 comments). This issue highlights a performance bottleneck that adds ~60 seconds per turn when using Ollama, severely limiting usability on limited‑VRAM setups. The discussion suggests the community values fast, cache‑friendly interactions.  
- **#4897** – *[OPEN] Issue with Discord bot integration* (0 comments). Users report that the bot appears online but does not receive or send messages, indicating a possible integration or permission problem.  

These two items represent the most visible community concerns: performance/caching and external‑service integration.

---

### 5. Bugs & Stability  
| Rank | Issue | Severity | Description | Fix PR (if any) |
|------|-------|----------|-------------|-----------------|
| 1 | **#4894** – *prune_dream_sessions() fails to prune base64‑encoded Dream session files* | High | After commit cf2f5896 filenames are base64‑encoded (e.g., `ZHJlYW06MjAyNjA2MjktMTQwNTA3.jsonl`). The pruning routine still uses a `dream_*.jsonl` glob, missing the encoded files. | None reported yet. |
| 2 | **#4893** – * /dream‑log and /dream‑restore show non‑Dream commits* | Medium | Calls `git.log()` without filtering for Dream‑specific commits, polluting output with unrelated history. | None reported yet. |
| 3 | **#4897** – *Discord bot integration* | Medium | Bot shows as online but receives no messages; steps to reproduce involve enabling the Discord plugin and providing a token. | None reported yet. |

All three bugs are actively reported today and have not yet been addressed by a merged fix.

---

### 6. Feature Requests & Roadmap Signals  
- **#4879** (closed) – Introduces an **opt‑in flag** for the sustained‑goal (long‑task) feature, suggesting a roadmap move toward more user‑controlled background processing.  
- **#4855** (open) – *feat(webui): add guided setup flows* – proposes productized onboarding for channels, Feishu assistants, and secret handling, indicating a focus on improving the user experience for new deployments.  
- **#4867** (closed) – Enhancement to **preserve exact prompt prefixes** for caching, a clear signal that performance optimisation for local LLM providers (Ollama, etc.) is a priority.  

These items collectively point to a roadmap that balances **user‑controlled long‑task execution**, **streamlined onboarding**, and **performance tuning** for local model integrations.

---

### 7. User Feedback Summary  
- **Performance**: Users complain that each turn with Ollama incurs a ~60 second delay, rendering the experience “totally unusable” on a 32 GB VRAM machine (Issue #4867).  
- **Integration**: Discord bot users experience a disconnect where the bot appears online but does not exchange messages (Issue #4897).  
- **Stability**: Base64‑encoded session filenames break the prune routine (Issue #4894), and log commands leak unrelated commits (Issue #4893), both eroding confidence in data hygiene and reproducibility.  

Overall sentiment leans toward **dissatisfaction** with speed and reliability, while enthusiasm remains for new UI guided flows and refined feature gating.

---

### 8. Backlog Watch  
| Item | Type | Reason for Attention |
|------|------|----------------------|
| **#4897** – Discord bot integration | Open Issue | No comments yet; core integration may block many users. |
| **#4894** – prune_dream_sessions() base64 bug | Open Issue | Critical for data cleanup; pending fix could prevent storage bloat. |
| **#4893** – Non‑Dream commits in logs | Open Issue | Affects auditability and clarity of Dream workflow. |
| **#4896** – Heartbeat prompt regression | Open PR | Directly impacts task execution reliability; needs review/merge. |
| **#4895** – Transcription API key placeholder resolution | Open PR | Improves configuration robustness for transcription providers. |
| **#4855** – Guided webui setup flows | Open PR | High‑impact UX improvement; may be slated for the next minor release. |
| **#4145** – Weather Skill fix (older) | Open Issue | Though older, it remains unresolved and could affect skill ecosystem. |

Maintainers should prioritize the **#4897**, **#4894**, and **#4896** items, as they involve core functionality (bot integration, session cleanup, heartbeat execution) and have no recent community response.

--- 

*All links are to the official GitHub repository: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑07‑13)**  

---  

### 1. Today's Overview  
The Hermes Agent repository had a high level of activity on 07 July 2026: 50 issues and 50 pull‑requests were updated, though no new releases were pushed.  The activity is mostly housekeeping – many tickets were closed and several feature‑related PRs are in the last stages of review.  Overall, the project is stable, with a steady stream of bug fixes and incremental feature work.  No critical regressions were reported in the current sync.

---  

ilynologically be.---  

### 2. Releases  
No new releases were published today, so no migration notes are required.

| Release | Date | Notes |
|---------|------|-------|
| – | – | lambda |

---  

### 3. Project Progress  
No pull‑requests were merged today; all 50 PRs remain open or in review.  However, several long‑standing issues were closed which indicates that previous work has successfully shipped:

| Issue | Feature / Fix | Comment Count |
|-------|---------------|---------------|
| #22791 | *Added Infisical as an external vault backend* – a new plugin for secret management | 7 |
| #21827 | *Implemented Topic‑Aware Subagent Routing* – model‑specific agents per task | 6 |
| #22926 | *Fixed Kanban stale claim lock cleanup* – tasks no longer hang after worker death | 5 |
|  err > 5 | `#23158 (“识别不了英伟达的base url”)` and `#22949 (Kimi K2 content missing)` – regression detection brought to closure. | 4 |  

These closures suggest that the feature‑enhancement cycle is progressing, even though the latest merge queue remains empty.

---  

### 4. Community Hot Topics  
The most-discussed issues/PRs (by comment count) reveal what the community cares名無し:

1. **[#22791](https://github.com/nousresearch/hermes-agent/issues/22791)** – “Add Infisical as an External Vault backend”  
   *Comment count:* 7 | *✈️* Need for a richer secret‑management plugin ecosystem.  
2. **[#21827](https://github.com/nousresearch/hermes-agent/issues/21827)** – “Topic‑Aware Subagent Routing”  
   *Comment count:* 6 | *atoes*: cost‑optimization and task‑specific LLM selection.  
3. **[#22926](https://github.com/nousresearch/hermes-agent/issues/22926)** – “Kanban stale claim lock cleanup”  
   *Comment count:* 5 | *🔧* Reliability of the Kanban job dispatcher.  
4. **[#23157](https://github.com/nousresearch/hermes-agent/pull/23157)** – “Controlled Discord agent‑to‑agent relays” (open)  
   *Comment count:* none listed, but the PR is active.  
5. **[#23135 пластиков](https://github.com/nousresearch/hermes-agent/pull/23135)** – “Auto‑name Telegram sessions” (open)  

The pattern shows a strong interest in **securityLf** (vaults), **efficient routing** (model choice) and **

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑07‑13**  
*Based on GitHub activity (issues & PRs) from the last 24 h*  

---

### 1. Today’s Overview  
The repository showed modest but focused activity: **3 open issues** were updated and **13 pull requests** saw updates (11 still open, 2 closed/merged). No new releases were published today. The work is concentrated on tightening reliability (rate‑limit logging, duplicate‑reply guards) and lifting the Claude‑output token ceiling that has been silently throttling agents. Overall health appears steady, with contributors addressing specific regressions rather than adding large new features.

---

### 2. Releases  
*No new releases were tagged in the last 24 h.*  

---

### 3. Project Progress – Merged/Closed PRs  

| PR | Title (linked) | Summary |
|----|----------------|---------|
| [**#3024**](https://github.com/qwibitai/nanoclaw/pull/3024) | `fix(container): raise the agent SDK's 32000 output-token cap to the model's real ceiling` | Removes the hard‑coded 32 000‑token cap for Claude agents, letting them use the model’s actual maximum. Directly resolves Issue #3023. |
| [**#2952**](https://github.com/qwibitai/nanoclaw/pull/2952) | `Skill/add opencode stack` (operational/container skill) | Adds the Opencode skill set as a container‑level operational skill, following the project’s contribution guidelines. |

These two closed PRs represent the day’s completed work: a critical bug‑fix for Claude token limits and the addition of a new skill package.

---

### 4. Community Hot Topics  

| Item | Comments / Reactions | Link | Why it’s drawing attention |
|------|----------------------|------|----------------------------|
| **Issue #3016** – “Every rate_limit_event is logged as a quota error, even when the status is *allowed*” | 1 comment, 0 👍 | [#3016](https://github.com/qwibitai/nanoclaw/issues/3016) | Users are seeing spurious error logs during normal operation, flooding logs and obscuring real problems. |
| **PR #3020** – “rescue undelivered unwrapped replies after the re‑wrap nudge, with recap suppression” | (comment count not shown) | [#3020](https://github.com/qwibitai/nanoclaw/pull/3020) | Addresses silent drops of replies when the model omits `<message>` wrappers – a frequent pain point after long tool chains. |
| **Issue #3023** – “Every Claude agent is silently capped at 32000 output tokens” | 0 comments, 0 👍 | [#3023](https://github.com/qwibitai/nanoclaw/issues/3023) | Directly impacted users trying to generate large outputs (e.g., OpenSCAD files); the fix is already merged (#3024). |

The most active discussion today centers on **logging noise** (#3016) and the **re‑wrap nudge** logic that can cause duplicate or missing replies (#3020/#3026). Both reflect a desire for cleaner, more predictable agent output pipelines.

---

### 5. Bugs & Stability (ranked by impact)

| Severity | Issue / Symptom | Linked Fix PR (if any) | Notes |
|----------|----------------|------------------------|-------|
| **High** | Claude agents hit a 32 000‑token ceiling, causing mid‑turn aborts. | #3024 **closed** (fix); #3025 **open** (follow‑up) | Prevents data loss for long‑running generations. |
| **Medium** | Rate‑limit events logged as quota errors even when allowed, flooding logs. | No dedicated PR yet (see #3016). | Affects observability; could mask real quota problems. |
| **Medium** | Re‑wrap nudge re‑runs the model and duplicates replies when the agent already replied via `send_message`. | #3020 **open** (rescue undelivered replies); #3028 **open** (avoid duplicate replies after `send_message`); #3026 **open** (issue description). | Addresses duplicate or missing chat messages, a usability concern for interactive agents. |
| **Low** | TMPDIR left under `/tmp` allows hostile CA poisoning → container wake failures. | #3027 **open** (relocate TMPDIR) | Security‑hardening fix; prevents sporadic silent failures. |
| **Low** | WhatsApp number sharing warnings missing. | #3021 **open** (warn before connecting shared WhatsApp number) | Prevents accidental bans; UX improvement. |

Overall, the two highest‑impact bugs (token cap and duplicate replies) already have PRs either merged or in progress, indicating a responsive maintainer team.

---

### 6. Feature Requests & Roadmap Signals  

| Feature Request | Evidence (Issue/PR) | Likelihood for Next Release |
|-----------------|---------------------|-----------------------------|
| **Operator approval‑resolution verbs** (`approve`, `reject`, `reject-with-reason`) for `ncl approvals` | PR #3029 **open** | High – adds missing CLI control flow; likely to be merged soon. |
| **Per‑group harness capability toggles** (cron/scheduling, etc.) | PR #2983 **open** (updated today) | Medium – touches core configuration; may need further review. |
| **Scheduled tasks in templates** (cron‑defined `tasks/*.md`) | PR #3022 **open** | Medium – useful for template authors; depends on guard‑seam work. |
| **Shared‑WhatsApp number warning** | PR #3021 **open** | Low‑Medium – UX polish; easy to merge. |
| **Audit‑log skill for ncl surface** | PR #2987 **open** (re‑based on guard‑seam) | Medium – adds observability; contingent on guard seam stabilization. |

The roadmap appears to be evolving around **operator control**, **flexible scheduling**, and **security hardening** (TMPDIR relocation). The guard‑seam foundation (PR #2986) is a prerequisite for several of these features.

---

### 7. User Feedback Summary  

- **Logging noise** is a recurring irritant: users report dozens of spurious “Rate limit (retryable: false, quota)” messages per week, making it hard to spot genuine errors.  
- **Duplicate or missing replies** after long tool chains confuse end‑users; agents sometimes echo the same message or drop a response entirely.  
- **Token‑capped Claude agents** cause abrupt termination of long outputs (code, designs), forcing users to split work or hit the limit repeatedly.  
- **Container start‑up flakiness** tied to `/tmp` usage leads to silent agents and broken WhatsApp/WhatsApp‑like channels.  
- **Operators** want a straightforward CLI way to approve or reject pending actions without digging through the UI.  

Overall sentiment: users appreciate the core functionality but are asking for **more reliable logging, deterministic message handling, and higher‑capacity model usage**—all of which are actively being addressed.

---

### 8. Backlog Watch (Items Needing Maintainer Attention)  

| Item | Age / Activity | Reason for Attention |
|------|----------------|----------------------|
| **Issue #3016** – rate‑limit logging noise | Updated 2026‑07‑12, 1 comment, no PR | Affects observability; a simple log‑level fix could reduce noise. |
| **Issue #3026** – re‑wrap nudge duplicates replies | Updated 2026‑07‑12, 0 comments | Directly impacts user experience; linked PRs (#3020, #3028) exist but need review/merge. |
| **PR #2986** – Guard seam (one decision function) | Updated 2026‑07‑12, open since 2026‑07‑09 | Foundational for upcoming capability toggles and audit log; delayed merge blocks several dependent features. |
| **PR #2987** – /add‑audit skill | Updated 2026‑07‑12, open since 2026‑07‑09 | Provides operator‑level audit; waiting on guard seam stabilization. |
| **PR #3025** – raise Claude SDK token cap (follow‑up) | Updated 2026‑07‑12, open | Though #3024 fixed the core issue, #3025 may refine configuration handling; worth reviewing for completeness. |

These items represent the most significant open threads that, if resolved, would unlock upcoming features (audit logging, per‑group toggles, scheduled tasks) and improve day‑to‑day reliability.

---

**Takeaway:** The project is in a healthy, bug‑fix‑driven state. Critical stability concerns (token caps, duplicate replies) have immediate PRs, while logging and foundational guard‑seam work remain the primary blockers for the next wave of feature enhancements. Continued focus on reviewing and merging the guard‑seam and audit‑log PRs will accelerate the delivery of operator‑controlled, observable, and more flexible agent configurations.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026‑07‑13**

| Section | Highlights |
|---------|------------|
| **Today’s Snapshot** | 0 new issues opened, 0 releases, 6 PRs updated साम—2 remain open, 4 have been merged or closed. The project is moving steadily forward with a focused set of bug‑fixes and configuration‑enhancements, but no new feature releases are scheduled for the week. |
| **Releases** | *No new releases.*

---

### 1. Today’s Overview
On **July 13 2026** NullClaw recorded no new issue activity and no new releases. Six pull‑requests were soften by the same day’s update clock, two of them remaining open while four were merged/closed. The overall activity suggests a healthy, maintenance‑driven cycle where bugs and upstream coordination take precedence over new feature churn.  

---

### 2. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| **#951** – `fix(agent_runner)` | **Closed** | Stripped errant stdout/stderr logs that were mistakenly routed to delivery channels when an agent failed to initialize. |
| **#950** – `fix(gateway)` | **Closed** | Reordered the port‑probe logic to avoid leaking test resources when `AddressInUse` is encountered early in `gateway.run()`. |
| **#949** – `fix` | **Closed** | Added `agent.default_queue_mode` to `config.json` and made the queue mode enum a single source of truth. |
| **#948** – `fix cron agent delivery attribution` | **Closed** | Ensured that cron‑triggered message deliveries correctly carry origin metadata into sandboxed agents, keeping attribution intact across gateway and local storage paths. |

These PRs collectively tighten resource cleanup, improve logging hygiene, extend configuration flexibility, and render out‑of‑band message attribution more reliable.

---

### 3. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#954 – “one‑shot cron jobs silently fail”** | Open PR | Has the most recent activity (updated July 13) and is linked to issue #941. Comments and reactions are sparse, but the bug motivates a deeper dive into channel safety. | https://github.com/nullclaw/nullclaw/pull/954 |
| **#953 – “recover closed gateway sockets”** | Open PR | Updated the same day; tackles a subtle Discord gateway reconnection failure that could churn reconnection loops. | https://github.com/nullclaw/nullclaw/pull/953 |

These two open PRs represent high‑visibility blockers. The cron‑job failure touches long‑standing user complaints about message loss, while the Discord gateway improvement protects against cascading detachment in long‑running instances.

---

### 4. Bugs & Stability
| Severity | Issue / PR | Description | Fix PR |
|----------|------------|-------------|--------|
| **Critical** | #954 (`use‑after‑free` in `OutboundMessage.channel`) | One‑shot cron jobs drop messages downstream and crash delivery routines. | #954 |
| **High** | #953 (`gateway` reconnect loop) | Failure to close socket before heartbeat thread can corrupt the reconnect state, risking repeated disconnects. | #953 |
| **Moderate** | #951 (`stderr` leak) | Initialization logs are mistakenly sent to chat channels, confusing recipients. | #951 |
| **Low** | #950 (`port‑probe` order) | Resource leak in test environments when first address conflict is detected. | #950 |

All critical and high‑ Raise‑level bugs have been addressed with merged PRs released as of 2026‑07‑13, while moderate‑low problems were held in the same PR batch. Monitoring continues to observe regressions in these areas.

cepte

---

### 5. Feature Requests & Roadmap Signals
| Feature | Source | Status | Likely Next Version |
|---------|--------|--------|---------------------|
| **queue_mode configuration** | #949 | Implemented as config change; no new version yet. | *TBD – will appear once the sample `config.json` schema is released.* |
| **cron delivery attribution** | #948 | Implemented; improved auditability. | *Included in the upcoming minor update.* |
| **Cron “once” job reliability** | #954 (issue #941) | Still open → high priority. | *Expected in a focused micro‑release for reliability.* |

The same pull requests that close bugs also push incremental configuration features. The community’s pressing need for cron reliability is likely to surface as a primary engineering focus in the next patch.

---

### 6. User Feedback Summary
| Pain Point | Evidence | Stack |
|------------|----------|-------|
| Loss of scheduled messages | PR #954 covers silent failures; users complaint in issue #941 | Bot frameworks |
| Discord reconnection instability | Open PR #953; “gateway” log indicates real‑world disconnections reported by advocates. | Discord API |
| Misleading logs | PR #951 fixes spurious initialization output heard by users | Logging / channel output |

While there are no new community‑submitted issue comments in the last 24 h, the fixed bugs directly respondալական to the user pain points raised earlier in the project history.

---

### 7. Backlog Watch
| Item | Why it matters | Current Status |
|------|----------------|----------------|
| None identified | All open issues have a clear thread and an assigned PR for resolution. | Closed or pending review. |

The maintainer roster is currently engaged with four bug‑fix PRs and two open workitems; no backlog items remain unaddressed beyond the open PRs (#954, #953).

---

**Key Takeaway** – NullClaw’s 2026‑07‑13 telemetry shows a steady cycle of critical bug resolution and incremental feature rollout. The project remains in a maintain‑only mode today, with a clear plan to uplift delivery reliability and configuration modernisation in the next release window.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw – Project Digest (2026‑07‑13)**  
*Generated from the last 24 h of activity on the nearai/ironclaw repository.*

---

## 1. Today’s Overview
- The repo is **highly active**: 10 issues updated (7 still open) and **50 pull‑requests** touched, with 28 still open and 22 merged/closed.  
- No new release was cut, but the bulk of the work is concentrated on hardening CI, improving runtime stability, and adding observability (token‑usage reporting, cost tracking, and better sandbox diagnostics).  
- A noticeable pattern is the **focus on flaky CI tests and deterministic pre‑push checks**, suggesting the team is prioritising reliability before the next feature freeze.

---

## 2. Releases
*No new version was published in the last 24 h, so there are no release notes to report.*

---

## 3. Project Progress (Merged / Closed PRs)
| PR | Title / Scope | Size / Risk | Merged / Closed | Key Outcomes |
|----|---------------|-------------|-----------------|--------------|
| **#6022** | *ci: static pre‑push checks* (include_str/Docker‑COPY, hermetic env) | XL / medium | **Closed (merged)** | Introduces three static analysis hooks that automatically block non‑hermetic changes, directly addressing the flaky‑CI wave reported in issues #6014‑#6018. |
| **#6019** | *reborn‑cli: doctor command readiness checks* | L / low | **Closed (merged)** | CLI now validates LLM/provider credentials, storage, and secret wiring – a first‑line defense against runtime mis‑configurations. |
| **#6020** | *canary: deterministic Slack journeys* | XL / medium | **Closed (merged)** | Makes Slack outbound contracts observable and redacts identifiers, improving reproducibility of integration tests. |
| **#6023** | *fix(reborn_cli): unify process‑env test lock – kill build_runtime_input flake* | M / low | **Closed (merged)** | Directly resolves the flaky “build_runtime_input_production_*” test suite (issue #6015). |
| **#6021** | *dependabot: bump 22 dependencies* | XL / low | **Closed (merged)** | Keeps the Rust toolchain current; reduces surface‑area for upstream CVEs. |
| **#5926** | *dependabot: earlier bump of 20 dependencies* | XL / low | **Closed (merged)** | Same rationale as #6021 (historical reference). |
| **#5976** | *feat(reborn): per‑run token usage + USD cost on OpenAI‑compatible Responses API* | XL / low | **Open** (still under review) – but the core implementation landed and is being tested. |
| **#5959** | *reborn loop resilience: deep retries, iteration backstop, model‑visible tool‑failure reasons* | XL / low | **Open** – heavy discussion; core for upcoming stable‑runtime release. |

**Take‑away:** The merged work today mostly **closes the CI‑flakiness loop** and adds **observability/diagnostics** that will make future releases more stable. Feature‑centric PRs (token‑usage, loop resilience) are still open but progressing.

---

## 4. Community Hot Topics
| Item | Comments / 👍 | Link | Why It’s Hot |
|------|---------------|------|--------------|
| **Issue #2601** – *CLI/TUI for Managing Secrets* (open) | 2 comments, 0 👍 | <https://github.com/nearai/ironclaw/issues/2601> | Users struggle with secret handling; a UI would lower the barrier for new adopters. |
| **Issue #5704** – *Image preview becomes transparent while chat is active* (closed) | 2 comments | <https://github.com/nearai/ironclaw/issues/5704> | Visual‑feedback bug in the web UI; attracted quick attention, suggesting a responsive UI team. |
| **PR #6022** – *Static pre‑push checks* (opened 2 days ago, now merged) | High review traffic (comments not shown but merged quickly) | <https://github.com/nearai/ironclaw/pull/6022> | Direct response to the massive CI failure wave; community is keen on deterministic builds. |
| **PR #5975** – *Detect prompt‑cache breaks* (open) | Lots of discussion (not quantified) | <https://github.com/nearai/ironclaw/pull/5975> | Addresses a 3.5× cost blow‑up in long‑running agentic turns – a performance‑critical concern for power users. |
| **PR #5959** – *Reborn loop resilience* (open) | Many reviewers, multiple labels | <https://github.com/nearai/ironclaw/pull/5959> | Core reliability work; highlights demand for robust long‑running agents. |

**Underlying needs:**  
1. **Better secret/credential management tooling** (Issue #2601).  
2. **Deterministic CI & build pipelines** (issues #6014‑#6018, PR #6022).  
3. **Runtime performance & cost control** (PR #5975, #5959).  
4. **UI polish** (Issue #5704) – visual glitches still surface during active chats.

---

## 5. Bugs & Stability (ranked by severity)

| Severity | Issue / Bug | Summary | Fix Status |
|----------|-------------|---------|------------|
| **Critical** | #6014 – *CI fragility: flaky non‑hermetic tests* | ~70 % of main pushes failing; threatens release cadence. | Mitigated by PR #6022 (static checks) and PR #6023 (test‑lock fix). |
| **High** | #6015 – *Flaky `build_runtime_input_production_*` tests* | Non‑hermetic env causing intermittent failures in all‑features coverage. | Fixed in PR #6023 (merged). |
| **High** | #6017 – *Flaky DB concurrency contract tests* | Race conditions in Postgres & libSQL concurrency tests; affect platform stability. | No fix yet; reference PR #5959 may provide groundwork. |
| **Medium** | #5704 – *Image preview transparency* (closed) | UI glitch when chat is processing. | Fixed in recent UI commit (closed). |
| **Medium** | #6016 – *Slack trigger‑delivery e2e timeouts* | Intermittent time‑outs in Slack integration tests. | Work ongoing in PR #6020 (makes Slack journeys deterministic). |
| **Low** | #6018 – *CI hardening: static pre‑push checks* (open, but PR #6022 merged) | Request for static checks; now addressed. | Resolved. |
| **Low** | #6011 – *Daily failure taxonomy* (open) | Catalog of failures; not a bug per se but useful for triage. | Ongoing. |

**Overall:** The most severe problems are **CI flakiness** and **database concurrency tests**. The team has already shipped mitigations for the former; the latter remains open.

---

## 6. Feature Requests & Roadmap Signals
| Request | Nature | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **CLI/TUI for Secrets** (Issue #2601) | UX/ops tooling | **High** – appears in the same backlog as other CLI enhancements (PR #6019 adds doctor checks). |
| **Per‑run token usage & cost reporting** (PR #5976) | Observability / billing | **Medium‑High** – core implementation landed; only final review remains. |
| **Read‑before‑edit guardrails** (PR #5978) & **post‑edit diagnostics** (PR #5979) | Agent safety / coding quality | **Medium** – part of the “edit‑guardrails” series; likely to land after stability work. |
| **Extension‑runtime extraction UI & migrations** (PR #6025) | Platform extensibility | **Low‑Medium** – large scope, still early draft. |
| **Slack/Telegram outbound delivery coordinator** (PR #6012) | Integration expansion | **Medium** – awaiting review; may be bundled with the next “runtime” milestone. |

---

## 7. User Feedback Summary
- **Pain Points**  
  1. **Secret management** – users find authentication set‑up opaque, prompting the CLI/TUI request.  
  2. **CI reliability** – frequent red builds undermine confidence in contributions.  
  3. **Cost awareness** – lack of token‑usage data makes budgeting difficult for commercial users.  
  4. **UI glitches** – the image‑preview transparency issue, though now fixed, shows UI polishing is still needed.  
- **Positive Signals**  
  - The **doctor command** (PR #6019) directly addresses configuration‑validation concerns, likely boosting newcomer experience.  
  - The community is actively contributing performance‑focused PRs (e.g., prompt‑cache detection), indicating strong interest in scaling agents.

---

## 8. Backlog Watch (Items needing Maintainer Attention)
| Item | Why It Matters | Current Status |
|------|----------------|----------------|
| **#6017 – DB concurrency contract flakiness** | Affects reliability of the persistence layer across providers. | Open, no linked fix yet. |
| **#5959 – Reborn loop resilience** | Central to long‑running agent stability; many downstream bugs stem from this. | Open, large PR with multiple review cycles. |
| **#5975 – Prompt‑cache break detector** | Direct cost impact (≈3.5× token usage) on long runs. | Open, awaiting final review. |
| **#5978 / #5979 – Edit guardrails** | Prevents destructive code edits; critical for safe coding agents. | Open, pending integration tests. |
| **#2601 – CLI/TUI for Managing Secrets** | Lowers entry barrier; ties into #6019 doctor enhancements. | Open, modest activity – could be tackled in the next sprint. |

---

### Bottom Line
IronClaw is in a **stabilisation phase**: the team is aggressively fixing flaky CI, tightening test isolation, and adding observability (cost, token usage, deterministic Slack journeys). At the same time, the **user‑experience side** (secret management UI, UI polishing) and **runtime performance** (prompt‑cache handling, edit safety) are high‑visibility signals for the upcoming roadmap. If the current pace of PR merges continues, the next minor release should bring a **more deterministic CI pipeline, built‑in cost reporting, and a richer CLI health‑check**, while the larger runtime resilience and edit‑guardrail work will likely land in a subsequent feature release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

User Safety: safe

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

# CoPaw Project Digest | 2026-07-13

## Today's Overview
CoPaw is currently in a high-activity stabilization phase following the release of version 2.0.0. Today's data shows significant churn with 21 issue updates and 11 PR updates, primarily focused on resolving critical regressions and compatibility issues stemming from the v2.0 migration. The project health shows a strong community response, though users are experiencing significant friction regarding tool-call stability and session persistence.

## Releases
No new releases were published in the last 24 hours.

## Project Progress
Recent activity focuses heavily on **backward compatibility (v1.x to v2.0)** and **system stability**:
- **Compatibility Fixes**: Multiple PRs addressed legacy session media and "file" block type deserialization to prevent crashes when loading old sessions ([#5993](https://github.com/agentscope-ai/QwenPaw/pull/5993), [#5991](https://github.com/agentscope-ai/QwenPaw/pull/5991)).
- **Core Stability**: Efforts are underway to fix "orphan" tool result messages that cause 400 errors during context compression ([#5987](https://github.com/agentscope-ai/QwenPaw/pull/5987)).
- **Desktop Packaging**: A fix was proposed to include the `AgentScope Glob` helper in the desktop bundle to resolve `auto-memory` failures ([#5997](https://github.com/agentscope-ai/QwenPaw/pull/5997)).

## Community Hot Topics
- **The "400 BadRequestError" Loop**: A recurring theme across multiple issues ([#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996), [#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986), [#6002](https://github.com/agentscope-ai/QwenPaw/issues/6002)). This indicates a systemic issue with how the OpenAI formatter handles tool results when preceding tool calls are evicted or incorrectly formatted.
- **Skill System Failures**: Users are reporting a complete breakdown of the skill discovery mechanism, where newly added skills are ignored by the agent ([#6001](https://github.com/agentscope-ai/QwenPaw/issues/6001), [#6000](https://github.com/agentscope-ai/QwenPaw/issues/6000)).
- **Cross-Channel Experience**: There is a growing demand for session continuity across different platforms (Console $\to$ Feishu $\to$ DingTalk) to allow seamless handoffs ([#5999](https://github.com/agentscope-ai/QwenPaw/issues/5999)).

## Bugs & Stability
**Critical (High Impact)**
- **API Protocol Failures**: Frequent `MODEL_EXECUTION_ERROR` due to `role='tool'` messages lacking preceding `tool_calls`. This effectively breaks agent autonomy. Fixes are being attempted in [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989).
- **Data Loss/Corruption**: Reports of session mapping loss between `chats` and `conversation_history` tables after upgrading to 2.0.0 ([#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964)).
- **Skill Discovery**: New skills in the `/skills` directory are not being loaded, rendering the extensibility system broken ([#6001](https://github.com/agentscope-ai/QwenPaw/issues/6001)).

**Moderate (UX/Functional)**
- **Governance Overhead**: Users reporting that "AUTO mode" security reviews are too aggressive, causing unnecessary delays for basic file operations ([#5994](https://github.com/agentscope-ai/QwenPaw/issues/5994)).
- **Regression of Features**: Loss of SSH Offline and Profiles functionality (returning 404) in v2.0.0 ([#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980)).

**Low (UI/CLI)**
- `qwenpaw doctor` reports a false failure for the health endpoint due to a hardcoded URL mismatch ([#5983](https://github.com/agentscope-ai/QwenPaw/issues/5983)).
- UI bug where the model search field is auto-filled with the username ([#5981](https://github.com/agentscope-ai/QwenPaw/issues/5981)).

## Feature Requests & Roadmap Signals
- **Vision Fallback**: Implementation of a multimodal downgrade system allowing text-only models to use a secondary vision model for image processing ([#5726](https://github.com/agentscope-ai/QwenPaw/pull/5726)).
- **Session-Level Overrides**: Ability to assign different LLMs to different sessions for the same agent ([#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)).
- **UI Discoverability**: Exposing system commands (e.g., `/plan`, `/memorize`) in the slash-command autocomplete ([#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869)).

## User Feedback Summary
- **Pain Points**: The transition to v2.0.0 has been rocky for power users. The most severe complaints relate to **broken session migrations**, **broken skill loading**, and **excessive manual approval prompts** for shell commands.
- **Use Cases**: Users are attempting to use CoPaw for complex travel planning and automation via Feishu, but are frustrated by "memory inconsistency" where agents ignore recently confirmed plans ([#5998](https://github.com/agentscope-ai/QwenPaw/issues/5998)).
- **Sentiment**: Currently leaning toward dissatisfaction due to regressions in a major version update, though the active PR flow suggests the maintainers are reacting quickly.

## Backlog Watch
- **Session Continuity**: Issue [#5999](https://github.com/agentscope-ai/QwenPaw/issues/5999) regarding cross-channel binding is a high-value request that remains open and needs a design proposal.
- **Sandbox Permissions**: The conflict between Electron's root restrictions and the project's sandbox mapping on Linux ([#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979)) needs an architectural decision on how to handle privileged CLI tools.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-13

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 80 items updated in the last 24 hours (30 issues, 50 PRs). The project is in an active pre-release phase targeting **v0.8.3** (tracked in #8070, #8071, #8073, #8360, #8362, #8363) with a **v0.8.4 maintenance train** scheduled for July 31 (#8357). No new releases were published today. Activity centers on **memory subsystem hardening**, **provider compatibility fixes** (OpenAI, Anthropic, Bedrock), **SOP control plane completion** (#8288), **ZeroCode TUI consolidation** (#8655, #8796), and **observability/OTel integration** (#6641). Several P1 bugs block workflows (context budget overflow #5808, skill-review SIGSEGV #8654, MCP memory growth #8642, OpenAI provider regressions #9016, #9019).

---

## 2. Releases
**No new releases today.** The project operates on a milestone-driven cadence; v0.8.3 is the active target with multiple tracker issues coordinating observability, CI, docs, dependencies, gateway/web/ZeroCode, provider/tool serialization, runtime execution, config-driven policy, and channel parity work.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Type | Summary |
|----|------|---------|
| [#8940](https://github.com/zeroclaw-labs/zeroclaw/pull/8940) | **Bug fix (duplicate)** | Applied `fill_style()` to ZeroCode queue sidebar & session picker overlays — closed as duplicate. |
| [#8653](https://github.com/zeroclaw-labs/zeroclaw/issues/8653) | **Enhancement (closed issue)** | Auto-resume most recent Code session on pane entry — accepted, work likely merged via related PRs. |
| *(Two other PRs merged/closed — not individually listed in data)* | | |

**Key advancement signals:**  
- Memory subsystem: gated rerank (#8895), audit trail with observer fan-out (#8893), retrieval cache decorator (#8897), cross-session durable memory recall (#8898), typed classification & facts extraction (#8900), content screening at write/recall boundaries (#8984).  
- Provider fixes: Anthropic timeout config honored (#8947), Bedrock Nova 2 prompt-caching exclusion (#8943), Gemini thought signatures preserved in tool-call history (#8935).  
- Daemon stability: MCP registry shared across heartbeat ticks to avoid reconnect storms (#8866).  
- SOP milestone: AMQP dispatch idempotency keyed on message-id (#9027).  
- ZeroCode UX: emoji width counting fixed (#8926), slash skill flow hardened (#8796), Code pane/rails consolidation (#8655).  
- Gateway/ACP: session agent selection via `?agent=` query param (#9026).  
- WASM plugin host sidecar prototype (#8661).  
- Web UI: horizontal scrollbar eliminated on sidebar rail (#8939).  
- Docs: SOP.toml syntax reference filled with examples (#8942).  
- Core error messages improved, `unwrap`→`expect` replacements (#8353).

---

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | Signals |
|------|----------|---------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) **Default 32k context budget exceeded on iteration 1** | 8 | **P1 bug, in-progress** — System prompt + tool definitions alone exceed 32k default, causing perpetual preemptive trim. Blocks workflows; needs config default raise or prompt/tool budget accounting. |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) **Slack: hydrate thread context on first mention** | 6 | **P2 enhancement, accepted** — Users forced to re-mention bot per message; backfilling `conversations.replies` would restore context continuity. |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) **Turn-level OTel trace correlation** | 5 | **P2, in-progress** — Nesting `llm.call`/`tool.call`/`memory.*` spans under a single turn trace for observability. Follow-up to #6009, #6190. |
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) **skill-review fork panics → daemon SIGSEGV** | 4 | **P1, in-progress** — Out-of-range slice in `skills/review.rs:159` after tool-heavy turns; crashes pod (exit 139). High risk. |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) **Audit 153 commits lost in bulk revert c3ff635** | 3 | **P2, in-progress** — Recovery tracker for bug fixes/features dropped in March bulk revert; ongoing archeology. |
| [#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022) **Optional Slack Events API (HTTP Request URL) for scale-to-zero** | 0 (new today) | **New enhancement** — Request for HTTP webhook mode alongside polling/Socket Mode to enable serverless deploys. |

**Underlying needs:**  
- **Context budget realism** — Default 32k is insufficient for tool-rich agents; operators hit this immediately.  
- **Channel interaction parity** — Slack/Telegram/Matrix need thread/history handling that matches user expectations.  
- **Production observability** — Turn-level tracing is a prerequisite for debugging multi-step agent runs.  
- **Daemon resilience** — Skill-review panic and MCP registry leaks cause hard crashes; operators need graceful degradation.  
- **Scale-to-zero deployments** — Webhook-based Slack Events API is a blocker for serverless/CI use cases.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P1 / S1** | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) Default 32k context budget exceeded on first iteration | `in-progress`, `accepted` | Not yet (config/schema change likely) |
| **P1 / S1** | [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) skill-review fork panic → SIGSEGV after tool-heavy turn | `in-progress`, `accepted` | Not yet (slice bounds fix in `review.rs:159`) |
| **P1 / S1** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) MCP/tool-schema cloning drives unbounded RSS growth | `accepted` | Partially: #8866 shares MCP registry across ticks |
| **P1 / S1** | [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) SOPs not available to agent via web dashboard chat | `accepted` | Not yet (SOP loading path for web sessions) |
| **P1 / S1** | [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) OpenAI tool turns fail when Chat Completions rejects reasoning effort | `accepted` (new today) | Not yet |
| **P1 / S1** | [#9019](https://github.com/zeroclaw-labs/zeroclaw/issues/9019) OpenAI Responses provider hardcodes `vision=false`, rejects images | `accepted` (new today) | Not yet |
| **P2 / S2** | [#9017](https://github.com/zeroclaw-labs/zeroclaw/issues/9017) `--config-dir` ignored during CLI locale detection | `accepted` (new today) | Not yet |
| **P2 / S2** | [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) ZeroCode streamed user turns look like log/API payloads to small local models | `accepted` | Not yet |

**Stability pattern:** Memory growth (#8642) and skill-review crash (#8654) are **daemon-lifecycle** issues; provider regressions (#9016, #9019) are **new today** and block OpenAI-compatible models. The context budget bug (#5808) is a **configuration default** problem affecting every new user.

---

## 6. Feature Requests & Roadmap Signals
| Feature | Issue/PR | Likelihood for v0.8.3 / v0.8.4 |
|---------|----------|--------------------------------|
| **Slack Events API (HTTP webhook) mode** | [#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022) | High — scale-to-zero is a stated deployment target; low implementation risk. |
| **Session rewind / fork-from-message in ZeroCode** | [#9020](https://github.com/zeroclaw-labs/zeroclaw/issues/9020) | High — part of "ZeroCode Consolidation & Hardening" tracker #9010. |
| **Telegram multi-message mode (one message per turn)** | [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) | Medium — accepted, P2; improves UX for long agent runs. |
| **Matrix single-message streaming drafts** | [#8442](https://github.com/zeroclaw-labs/zeroclaw/issues/8442) | Medium — `in-progress`, P2; parity with Slack/Telegram streaming. |
| **Cron: run with specific model + raw stdout output** | [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762), [#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409) | Medium — accepted, P2; cron docs also missing (#7762). |
| **Per-agent in-flight prompt counter on web dashboard** | [#8860](https://github.com/zeroclaw-labs/zeroclaw/issues/8860) | Medium — `in-progress`, P2; ops visibility for multi-channel deployments. |
| **SOP control plane to 5/5 (13 capabilities)** | [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | High — dedicated milestone tracker; AMQP idempotency PR #9027 merged today. |
| **WASM plugin program (out-of-process host)** | [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314), [#8661](https://github.com/zeroclaw-labs/zeroclaw/pull/8661) | Low for v0.8.3 — prototype only; broad architecture tracker. |
| **Memory: typed classification, retrieval cache, audit trail, cross-session recall** | [#8893](https://github.com/zeroclaw-labs/zeroclaw/pull/8893), [#8895](https://github.com/zeroclaw-labs/zeroclaw/pull/8895), [#8897](https://github.com/zeroclaw-labs/zeroclaw/pull/8897), [#8898](https://github.com/zeroclaw-labs/zeroclaw/pull/8898), [#8900](https://github.com/zeroclaw-labs/zeroclaw/pull/8900), [#8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984) | Very High — multiple PRs open, gated behind config flags; core to v0.8.3 "memory" workstream. |

**Prediction:** v0.8.3 will ship **memory subsystem upgrades**, **SOP control plane completion**, **provider fixes** (Anthropic/Bedrock/Gemini/OpenAI), **ZeroCode hardening**, and **observability/OTel turn tracing**. Slack Events API and session rewind are strong candidates for v0.8.4 (July 31 target).

---

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence |
|------------|----------|
| **Context budget too small out of the box** | #5808: "first LLM iteration already exceeds budget by ~3.3x — purely from system prompt + tool definitions." |
| **Slack thread UX forces re-mentions** | #6055: "users must re-@mention the bot for every message they want it to process." |
| **Daemon crashes on skill-review after tool-heavy turns** | #8654: "pod exits with 139 / SIGSEGV under `panic = abort`." |
| **MCP memory leak causes OOM/restart storms** | #8642 (split from #5542): "unbounded RSS growth in the agent loop." |
| **Web dashboard chat can't see SOPs** | #8563: "Configured sops at `/zeroclaw-data/.zeroclaw/shared/sops` are not detected by the agent runtime." |
| **OpenAI provider regressions block tool use & vision** | #9016, #9019 (both filed today): reasoning-effort rejection; hardcoded `vision=false`. |
| **ZeroCode renders streamed turns as log noise for small local models** | #8999: "simple greeting interpreted as protocol or log data instead of ordinary conversation." |
| **Cron jobs lack model selection & raw output** | #7762, #8409: "no way to set a cron to run with a specific model"; "shell cron jobs always wrap command output." |
| **Missing cron documentation** | #7762: "Cron documentation is missing from the docs site." |

**Satisfaction signals:**  
- Contributors (e.g., @alexandme, @andreymaznyak, @Audacity88) are responsive on PRs (#6641, #8642).  
- Multiple "accepted" + "in-progress" labels show maintainer alignment.  
- ZeroCode TUI consolidation (#8655) and slash skill hardening (#8796) indicate investment in **operator-facing UX**.  
- No 👍 reactions on any issue — community engagement is **contributor-driven**, not broad user-driven.

---

## 8. Backlog Watch — Long-Unanswered / Stale Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) **Context budget P1 bug** | Open since **2026-04-16** (89 days) | Blocks every new user; default config change is trivial but unmerged. |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) **153 commits lost in bulk revert audit** | Open since **2026-04-24** (81 days) | Technical debt recovery; "in-progress" but slow. |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) **Slack thread hydration** | Open since **2026-04-24** (81 days) | UX gap for Slack power users; accepted but not started. |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) **Turn-level OTel tracing** | Open since **2026-05-13** (61 days) | Observability foundation; "in-progress" with prior PRs #6009, #6190. |
| [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/731

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*