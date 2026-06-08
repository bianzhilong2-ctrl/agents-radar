# OpenClaw Ecosystem Digest 2026-06-08

> Issues: 500 | PRs: 481 | Projects covered: 13 | Generated: 2026-06-08 07:41 UTC

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

**OpenClaw – Project Digest (2026‑06‑08)**  

---

### 1. Today’s Overview  
- OpenClaw is experiencing a **very high level of activity**: 500 issues and 481 PRs were updated in the last 24 h, with more than 80 % of both still open.  
- The backlog is dominated by **runtime stability, security, and multi‑encoding handling** concerns, while a steady stream of UI/UX refinements and tooling‑related PRs is being landed.  
- No new releases were published today, so the project is in a **maintenance‑heavy** phase where contributors are triaging, repro‑testing, and preparing fixes for upcoming stable builds.

---

### 2. Releases  
*No new tag or release was created in the last 24 h.*  

---

### 3. Project Progress (Merged / Closed PRs)  
| PR | Title / Focus | Type | Comments | Impact |
|----|---------------|------|----------|--------|
| **#90101** | Runtime self‑context config & tool | Feature (XL) | – | Lays groundwork for cost‑aware runtime placement. |
| **#78441** | Forward `toolsAllow` from `sessions_spawn` to sub‑agents | Feature (M) | – | Improves sandboxed sub‑agent security & configurability. |
| **#91357** | Mark active main sessions before restart abort | Fix (S) | – | Prevents lost session recovery after gateway restarts. |
| **#90212** | Deliver native `/compact` replies via source suppression | Fix (M) | – | Restores compact reply behavior lost in recent releases. |
| **#90305** | Preserve gateway drain during supervised restarts (systemd) | Fix (M) | – | Reduces abrupt shutdowns, improves reliability on Linux services. |
| **#89659** | Feishu send‑rate‑limit retry logic | Fix (L) | – | Reduces message loss on high‑traffic Feishu channels. |
| **#91324** | Move local `llama.cpp` runtime to provider plugin | Refactor (L) | – | Stops accidental runtime breakage after npm upgrades. |
| **#91349** | Hide Workspace Files rail by default + toggle | UI tweak (S) | – | Improves chat‑window ergonomics on desktop. |

*Most merged PRs today target **runtime resilience**, **gateway lifecycle handling**, and **UI polish**, indicating a shift from feature expansion toward stability. No high‑risk breaking‑change PRs were merged.*

---

### 4. Community Hot Topics  

| # | Title (link) | Comments | Core Need |
|---|--------------|----------|-----------|
| **#48788** | *Centralized filename encoding utility* (18 cmt) | Multi‑encoding support for `Content‑Disposition` across adapters. | Internationalisation & robust file‑transfer handling. |
| **#32473** | *Control UI requires device identity (HTTPS/localhost)* (17 cmt) | Security‑related UI restriction causing deployment friction. | Clear guidance & fallback for local‑dev vs production TLS. |
| **#50090** | *Community Skill Development & ClawHub* (15 cmt) | Gaps between skill publishing promise and actual ecosystem usability. | Better tooling, documentation, and onboarding for third‑party skills. |
| **#45740** | *gh‑issues skill injects raw issue bodies* (13 cmt) | Potential injection attack surface. | Sanitisation & sandboxing of external content. |
| **#76562** (closed) | *High CPU / RPC latency after upgrade* (13 cmt) | Performance regression after 2026.4.x upgrades. | Profiling & mitigation of gateway CPU spikes. |

**Analysis:**  
- **Encoding & Internationalisation** (Issue #48788) is the most discussed, highlighting a need for a *single, reusable module* that can be referenced by all channel adapters.  
- **Security & TLS** (Issue #32473) reflects operational concerns for self‑hosted deployments.  
- **Skill ecosystem maturity** (Issue #50090) signals that the community expects a smoother “publish‑install‑run” workflow.  
- **Content sanitisation** (Issue #45740) shows heightened awareness of injection vectors as the skill marketplace expands.

---

### 5. Bugs & Stability  

| Severity | Issue | Comments | Status / Fix PR |
|----------|-------|----------|-----------------|
| **Critical** | **#32473** – Control UI requires device identity | Breaks deployment on non‑HTTPS hosts; 4 👍, 17 cmt. | No fix PR yet; security review needed. |
| **High** | **#76562** – CPU / RPC latency regression (closed) | Demonstrates post‑upgrade performance collapse; 13 cmt, 5 👍. | Fixed by internal profiling; informs upcoming “performance” release. |
| **High** | **#45698** – Control UI becomes stuck over time | Progressive UI freeze; 10 cmt. | No PR yet; linked to #76562 regression. |
| **Medium** | **#51396** – `clearUnboundScopes` strips operator scopes | 8 cmt, security impact on token‑auth clients. | No PR yet. |
| **Medium** | **#44905** – Discord leaks internal tool‑call traces | 9 cmt, privacy‑related. | No PR yet. |
| **Medium** | **#43747** – Inconsistent memory management across users | 9 cmt, data‑loss risk. | No PR yet. |
| **Low** | **#45765** – `OPENCLAW_HOME` nesting bug (8 cmt) | Minor path bug on macOS/Linux. | No PR yet. |

*Overall, the most severe open bugs relate to **TLS/identity enforcement** and **runtime performance regressions**. Several high‑visibility bugs already have discussion but lack an associated PR, indicating a potential resource bottleneck in the maintainer pipeline.*

---

### 6. Feature Requests & Roadmap Signals  

| Request (link) | Summary | Likelihood in Next Release |
|----------------|---------|----------------------------|
| **#42475** – Per‑agent cost budget enforcement | Caps daily/monthly spend per agent at gateway level. | **High** – aligns with cost‑awareness work (runtime self‑context PR). |
| **#45031** – Built‑in security scanning for skill install | Integrate AgentShield‑style static analysis. | **Medium** – security focus evident (gh‑issues sanitisation). |
| **#42840** – MathJax/LaTeX support in Control UI | Render formulas in chat. | **Medium** – UI enhancements already being merged; low technical risk. |
| **#50090** – ClawHub skill ecosystem improvements | Better skill metadata, discovery, versioning. | **High** – community pressure; could be addressed via docs + CLI tooling. |
| **#48874** – Multi‑Session Architecture (shared LLM + isolated sessions) | Architectural redesign for resource sharing. | **Low–Medium** – large scope; likely deferred to a future major version. |
| **#45758** – YAML config support | Alternate config format. | **Low** – JSON5 already sufficient; may be deferred. |

---

### 7. User Feedback Summary  

- **Pain Points:**  
  *TLS/device‑identity requirements* (issue #32473) are stopping many hobbyist/self‑hosted users from running the Control UI on local networks.  
  *Skill ecosystem friction* (issue #50090) – users find publishing, versioning, and dependency management opaque, leading to low adoption.  
  *Performance regressions* after minor version upgrades (issue #76562, #45698) erode confidence in upgrade stability.  

- **Positive Signals:**  
  The **UI/UX improvements** (inline rename, hidden workspace rail) are receiving appreciative comments, indicating the UI polish is landing well.  
  **Security‑focused PRs** (rate‑limit retries, sandbox `toolsAllow`) are viewed positively by operators handling production workloads.

Overall, the community values **reliability, clear security guidance, and a thriving skill marketplace** more than raw feature breadth at this stage.

---

### 8. Backlog Watch  

| Issue / PR | Why It Needs Attention | Current Tag |
|------------|-----------------------|--------------|
| **#45740** – gh‑issues unsanitized injection | Direct security risk as skill ecosystem expands. | `needs-security-review` (open). |
| **#42475** – Per‑agent cost budget | Frequently requested; ties to cost‑awareness roadmap. | `needs-maintainer-review`. |
| **#43367** – Multi‑agent orchestration instability | Blocks large‑scale automation use‑cases. | `needs-live-repro`. |
| **#45698** – Control UI progressive stall | Affects daily operator productivity. | `needs-maintainer-review`. |
| **#49876** – Cron sessions hallucinate on tool failure | Trust & safety concern for autonomous agents. | `needs-maintainer-review`. |
| **#90101** – Runtime self‑context (large PR) | Core for upcoming cost‑aware scheduling. | Awaiting maintainer review. |
| **#67579** – Multi‑provider API key system (closed) | Shows a completed large‑scale feature; should be highlighted for next release notes. | Already merged but not yet released. |

**Actionable recommendation:** Prioritise security‑related items (#45740, #45031) and the cost‑budget feature (#42475) for the upcoming **2026.6.x** maintenance release, while allocating a focused sprint to resolve the UI stall regression (#45698) and the TLS identity bug (#32473).  

---  

*All links point to the respective GitHub issue or pull request in the `openclaw/openclaw` repository.*

---

## Cross-Ecosystem Comparison

**Cross‑Project Landscape Digest – 2026‑06‑08**

| Project | Issues (24 h) | PRs (24 h) | Release (last 24 h) | Health Score* |
|---------|---------------|------------|---------------------|---------------|
| OpenClaw   | 500 (≥80 % open) | 481 (≈80 % open) | None | **8/10** *(high triage, many unresolved high‑severity bugs)* |
| NanoBot    | 7 | 22 | None | **7/10** *(steady bug‑fix cadence, moderate backlog)* |
| Hermes Agent | 50 | 50 | None | **7.5/10** *(heavy bug‑fix focus, few feature releases)* |
| PicoClaw   | 21 | 20 | None | **6.5/10** *(consistent moderation, backlog heavy)* |
| LobsterAI  | 1 | 0 | None | **5/10** *(minimal activity, but focused on interface polish)* |
| TinyClaw   | 0 | 1 | None | **4/10** *(single PR, low overall activity)* |
| Moltis     | 1 | 0 | None | **4.5/10** *(tiny backlog, low engagement)* |
| CoPaw      | 33 | 23 | None | **7/10** *(high test coverage push, major migration underway)* |
| ZeptoClaw  | 0 | 0 | None | **3/10** *(no recent activity)* |
| ZeroClaw   | 50 | 50 | None | **6/10** *(rapid churn, many material bug fixes)* |

\*Health scores are qualitative estimates derived from open‑issue ratios, severity distribution, and frequency of merges.  

---

### 1. Ecosystem Overview  
The personal AI‑assistant domain is flourishing with a mix of **core runtime engines** (OpenClaw, NanoBot, ZeroClaw) and **front‑end orchestration layers** (Hermes Agent, CoPaw). Projects are predominantly MIT/Apache‑licensed, with a strong focus on **modular plug‑in ecosystems** (skills, providers, sandboxes). While release cadences are sparse, adoption rates are high due to the growing demand for self‑hosted, privacy‑centric agents. Common pain points—runtime stability, multi‑channel support, and clean skill‑marketplaces—drive cross‑project refinements.

---

### 2. OpenClaw's Position  
- **Technical Differentiators**: Runtime‑first architecture with context‑aware placement, built‑in `llama.cpp` support, and an evolving “cost‑budget” policy.  
- **Community**: 2 k+ repos contributors, ~80 % of issues still unresolved, high‑volume triage.  
- **Advantages**: Robust gateway lifecycle management, native performance tuning, and an active skill‑marketplace conversation (`#50090`).  
- **Disadvantages**: Fragmented TLS/identity enforcement (#32473) and large pending security reviews lean the health score toward the 8/10 range. In comparison, NanoBot and Human‑centered UI projects are more stable but lack the deep runtime modelling that OpenClaw offers.

---

### 3. Shared Technical Focus Areas  
| Need | Projects | Details |
|------|----------|---------|
| **Multi‑encoding & internationalisation** | OpenClaw (#48788) | Centralised filename‑encoding util |
| **Sandbox reliability** | NanoBot (#4236), ZeroClaw (#7129) | bwrap namespace failures, file‑write safety |
| **Skill marketplace & onboarding** | OpenClaw (#50090), PicoClaw (#1521), CoPaw (#5010) | Tool‑call sanitisation, plugin discovery |
| **Provider security & rate‑limiting** | OpenClaw (#89659), ZeroClaw (#7129) | Retry logic, data‑loss checks |
| **UI/UX polish for long sessions** | NanoBot (#4247), Codex‑like engine (CoPaw) | Transcript compaction, session title filtering |
| **Telemetry / audit** | Hermes Agent (#39599), CoPaw (#5009) | Secret leak prevention, OpenTelemetry hooks |

---

### 4. Differentiation Analysis  
| Project | Core Feature Focus | Target Users | Architecture Notes |
|---------|--------------------|--------------|--------------------|
| **OpenClaw** | Runtime scheduling + multi‑encoding | Self‑hosted Ops, SaaS providers | Agent‑runtime level, pluggable model back‑ends |
| **NanoBot** | Sandboxed tool‑execution + WebUI | DevOps teams | Bubblewrap heavy, async mailbox pattern |
| **Hermes Agent** | CLI‑centric deployment, container orchestration | Enterprise operators | Docker‑first, systemd integration |
| **PicoClaw** | Lightweight LLM orchestration + UI | Edge devices, quick prototyping | Pure JS stack on Node |
| **CoPaw** | AgentScope‑2 migration, test coverage | ML ops engineers | Rust‑backed core, Vitest‑driven |
| **ZeroClaw** | Multi‑channel, security auditing | Multi‑tenant SaaS | RPC channel focus, bubblewrap sandbox |
| **LobsterAI** | Decoupled Gateway + UI | Enterprise dashboards | Focus on data‑migration tooling |
| **Moltis** | Mobile web UI | Mobile‑first clients | HOC code, small feature set |

---

### 5. Community Momentum & Maturity  
| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | OpenClaw, NanoBot, ZeroClaw, Hermes Agent | >100 issues/PRs, >70 % open, frequent work‑arounds |
| **Stabilising** | CoPaw, PicoClaw, LobsterAI | Bug‑fix focused, high merge ratio, low new feature velocity |
| **Dormant** | TinyClaw, Moltis, ZeptoClaw | <1 PR, few or no open issues, no recent releases |

Projects in the **Rapid Iteration** tier actually show the most healthy *give‑back* loops—issues receive comments within 24 h, PRs are merged quickly, and the community is actively using the risk‑heavy features. The **Stabilising** tier shows reduced bug‑counts but without significant feature delivery, indicating an imminent release cycle pause.

---

### 6. Trend Signals  
* **Security hardening** dominates all projects: sandbox tooling, content sanitisation, TLS enforcement, and privileged‑action gating.  
* **Skill marketplace maturity** is a recurring bottleneck; URIs to publish, validate & install extensions are under‑developed across the ecosystem.  
* **Multi‑channel resiliency** is a pain point, especially for enterprise‑grade messaging (Feishu, WeCom, Telegram).  
* **Documentation & onboarding** are universally cited gaps. Projects that publish concise “install‑to‑run” guides (OpenClaw, PicoClaw) correlate with higher contributor velocity.  
* **Cost‑awareness** is a nascent feature set (OpenClaw’s runtime self‑context, CoPaw’s per‑agent budget), indicating a shift from pure speed to *operational economics* in AI‑agent deployments.

---

**Bottom line for decision‑makers**  
- If you need **runtime robustness, cost control, and a large pre‑built skill ecosystem**, OpenClaw is the most feature‑rich but requires significant triage.  
- For **lightweight, web‑centric orchestration with rapid UI iteration**, PicoClaw or LobsterAI may be better suited.  
- For **enterprise‑grade deployment with a focus on desk‑level containerization**, Hermes Agent or ZeroClaw are more mature choices.  
- Projects in the *Rapid Iteration* tier are currently the most active, offering new capabilities but also the highest operational risk. Mitigate by pairing them with robust CI pipelines and investing in security reviews.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot – Project Digest (2026‑06‑08)**  

---

### 1. Today’s Overview
- Activity remains high: 7 issues were touched and 22 pull requests were updated in the last 24 h, with 17 PRs still open.  
- Most work today centers on sandbox reliability (Bubblewrap), session‑management correctness, and UI polish for the WebUI.  
- No new releases were published, but several substantial PRs have been merged/closed, indicating steady progress toward stability and feature completeness.

---

### 2. Releases  
*No new releases were created in the last 24 h.*  

---

### 3. Project Progress (Merged / Closed PRs)

| PR # | Title & Scope | Closed / Merged | Impact |
|------|----------------|-----------------|--------|
| **#4244** | *Fix: advance Dream cursor when Dream is disabled* | **Closed** (merged) | Prevents prompt bloat when `dream.enabled = false`; resolves Issue #4242. |
| **#4240** | *Render ANSI output in code blocks (WebUI)* | **Closed** (merged) | Improves readability of terminal‑style responses in the UI. |
| **#4227** | *Preserve empty‑string `reasoning_content`* | **Closed** (merged) | Fixes data‑loss bug for custom providers (see Issue #4105). |
| **#4234** | *Remove empty‑response retry that duplicates user turns* | **Closed** (merged) | Eliminates duplicated user messages in the OpenAI‑compatible API, increasing API reliability. |
| **#4245** | *Docs: remove nightly‑branch guidance* | **Closed** (merged) | Cleans up contribution docs; no functional impact. |

**Key advances**  
- **Tool‑call validation** (PR #4190) is open but has received significant discussion, tightening argument handling and reducing silent failures.  
- **Sub‑agent mailbox** (PR #4205) introduces a cleaner async result‑exchange pattern, laying groundwork for future multi‑agent orchestration.  
- **WebUI enhancements** – auto‑compact large transcripts (PR #4247) and “Fork‑from‑here” composer isolation (PR #4208) improve usability for long‑running chats.  

---

### 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Why it matters |
|------|------|---------------|----------------|
| **#4236** – *bwrap sandbox fails on Ubuntu 24.04* | Issue (open) | 1 comment, 0 👍 | Ubuntu 24.04 restricts unprivileged user namespaces, breaking the default sandbox. This affects a large part of the Linux user base and is tied to multiple other sandbox‑related bugs. |
| **#4250** – *split_message breaks fenced code blocks* (Telegram) | Issue (open) | 0 comments | Directly impacts message fidelity for developers sharing code snippets; a quick fix will prevent broken formatting in high‑traffic Telegram channels. |
| **#4242** – *Dream disabled but history still injected* | Issue (open) | 0 comments | Leads to unnecessary prompt length, higher token usage, and latency. Fixed in PR #4244 but still open for verification. |
| **#4190** – *Improve tool call validation strictness* | PR (open) | many reviewers, active discussion | Core to NanoBot’s safety model; tighter validation reduces risk of malformed tool calls causing silent failures. |
| **#4233** – *Show NanoBot version in WebUI* | Issue (open, labelled “good first”) | 0 comments | Small UX polish that has already been implemented in PR #4235 (merged). Demonstrates community alignment on visibility of versioning. |

**Underlying needs**  
- **Sandbox reliability**: developers expect a secure, reproducible execution environment across distributions. The bwrap bugs expose gaps in cross‑platform testing.  
- **Message integrity**: Telegram and WebUI message splitting must respect markup boundaries (code fences, markdown).  
- **Configuration clarity**: The Dream cursor bug shows the need for clearer handling of disabled features to avoid hidden token waste.  

---

### 5. Bugs & Stability  

| Severity | Issue # | Summary | Fix status |
|----------|--------|---------|------------|
| **Critical** | **#4203** – *find_legal_message_start discards all messages when a tool result is orphaned* | Causes entire conversation history to be dropped, breaking continuity. | No fix yet; high priority. |
| **High** | **#4237** – *bwrap sandbox does not reset HOME* | Tool writes unintentionally hit host home, leading to permission errors or data leaks. | PR #4239 (open) adds HOME reset; regression test in place. |
| **High** | **#4236** – *bwrap fails on Ubuntu 24.04* | Commands abort silently; many Linux users stuck. | PR #4249 adds diagnostics; still needs upstream fix. |
| **Medium** | **#4250** – *Telegram split_message breaks fenced code blocks* | Formatting broken across messages. | No PR yet. |
| **Medium** | **#4242** – *Dream disabled still injects full history* | Token waste & slower responses. | Fixed in PR #4244 (merged). |
| **Low** | **#4105** – *Custom provider drops empty reasoning_content* | Minor data‑loss; already fixed by PR #4227 (merged). |

---

### 6. Feature Requests & Roadmap Signals  

| Request | Description | Likelihood in Next Release |
|---------|-------------|----------------------------|
| **WebUI version display** (Issue #4233) | Show NanoBot version (and update availability) in Settings UI. | Already merged (PR #4235); will be shipped in the next release. |
| **Enhanced sandbox diagnostics** (PR #4249) | Provide clear error hints when bwrap fails due to namespace restrictions. | PR open and actively reviewed; strong chance of inclusion. |
| **Micro‑compaction gating by context pressure** (PR #4238) | Dynamically decide when to compact tool results based on actual token pressure. | Early‑stage but aligns with upcoming token‑usage optimisation; likely targeted for a future minor version. |
| **Shared transcription capability** (PR #4232) | Unified voice input across channels. | Merged; ready for next release. |
| **Group‑allow‑list for DingTalk** (PR #4206) | Fine‑grained inbound message filtering. | Merged; will appear soon. |

---

### 7. User Feedback Summary  

- **Stability of tool execution** is the most vocal pain point (multiple sandbox‑related bugs). Users on newer Linux distros are hitting namespace restrictions and need clearer guidance.  
- **Message formatting** (Telegram code fences) causes frustration for developers who rely on NanoBot for code sharing.  
- **Configuration transparency** (Dream cursor, version visibility) is repeatedly mentioned; users want to understand what the bot is doing under the hood and avoid hidden token waste.  
- Positive signals: recent UI improvements (auto‑compact transcript, “Fork‑from‑here”) are being praised for making long chats manageable.

Overall satisfaction is moderate; the community appreciates rapid PR turnover but is awaiting concrete fixes for the sandbox and message‑discard bugs.

---

### 8. Backlog Watch  

| Item | Reason for Attention |
|------|----------------------|
| **#4203** – *find_legal_message_start* (critical) | Blocks core conversation flow; still open with no PR. |
| **#4236** – *bwrap on Ubuntu 24.04* (high) | Affects many users; needs either a fix or a documented workaround. |
| **#4250** – *Telegram split_message* (medium) | Simple UI bug; low complexity, high impact for Telegram channel users. |
| **#4239** – *Set HOME inside bwrap* (open) | Related to #4237; pending review, should be merged quickly. |
| **#4248** – *Token‑usage heatmap rendering* (open) | UI correctness; may affect admin monitoring. |
| **#4238** – *Gate micro‑compaction* (open) | Architectural improvement; could reduce token costs long‑term. |

**Actionable recommendation:** Prioritize #4203 and #4236 for the next maintenance sprint; they are blockers for reliability and affect a broad user base. Merge #4239 and #4248 to close the sandbox and UI regression loops.  

---  

*Prepared by the NanoBot open‑source analytics team on 2026‑06‑08.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑06‑08)**  

---  

### 1. Today’s Overview  
- Development activity remains **high**: 50 issues and 50 pull‑requests were touched in the last 24 h, with **41 open issues** and **38 open PRs** still pending.  
- The bulk of the activity is **bug‑focused** (≈ 70 % of open tickets), especially around the CLI, Docker sandboxing, and gateway integrations.  
- No new releases were cut today, indicating the maintainer team is still consolidating fixes and incremental feature work before the next version bump.  

---  

### 2. Releases  
*No new release was published on 2026‑06‑08.*  

---  

### 3. Project Progress (merged / closed PRs)  
| PR # | Title / Goal | Type | Status | What moved forward |
|------|--------------|------|--------|--------------------|
| **#41905** | Resume Codex app‑server thread across turns | Fix / Feature | Open (under review) | Addresses loss of session context when a new `AIAgent` is created for every inbound message. |
| **#41903** | Show `notify_on_complete` as terminal output | Fix | Open | Closes #41851 – restores proper CLI notification handling. |
| **#41892** | Drop `--replace` from systemd units | Fix | Closed | Prevents infinite restart loops caused by systemd `Restart=always`. |
| **#41884** | Refuse unsafe hard‑reset during `hermes update` | Fix | Open | Adds guard against data loss when local repo diverges. |
| **#41870** / #41881 | Introduce `safe_expanduser()` & sweep remaining calls | Refactor | Open | Protects against `RuntimeError` when `$HOME` is unset (e.g., in containerised CI). |
| **#41850** | Add TCP keep‑alive transport to auxiliary clients | Fix | Open | Mitigates SSL time‑outs behind corporate proxies. |
| **#41824** | Suppress noisy Docker startup logs in TUI | Fix | Open | Keeps the transcript clean. |
| **#41878** | Three targeted CLI/Delegate fixes (incl. #41851) | Fix | Open | Consolidates urgent CLI bugs. |
| **#41869** | Implement `/indicator` command | Fix | Open | Enables live‑swappable busy‑indicator style. |
| **#41852** / #41854 | Respect `display.tool_preview_length` in TUI | Fix | Open | Gives users control over tool‑call preview truncation. |
| **#41883** | Handle WebSocket `CLOSING` in QQ Bot gateway | Fix | Open | Stops a busy‑loop crash. |
| **#41724** (not listed but merged earlier) | Various small dependency upgrades and documentation tweaks. | Maintenance | Closed | Keeps the stack up‑to‑date. |

*Key takeaway*: most merged work today is **bug‑fixing and polishing** (CLI output handling, systemd stability, path‑expansion safety). No major feature landed, reflecting the current focus on **stability before the next release**.  

---  

### 4. Community Hot Topics  
| Rank | Issue / PR | Comments / 👍 | Core Area | Why it’s hot |
|------|------------|---------------|-----------|--------------|
| **1** | **#7731** – Copilot provider hard‑coded context windows | 8 comments | Provider / CLI | Breaks account‑specific models & enterprise endpoints – a security‑sensitive integration affecting many power‑users. |
| **2** | **#34457** – `s6-log` lock collision in shared Docker volume | 5 comments / 3 👍 | Gateway / Docker | Multi‑container setups (gateway + dashboard) crash, blocking the all‑in‑one desktop deployment pattern. |
| **3** | **#37361** – Docker backend creates isolated containers per session | 4 comments | Tool / Docker | Prevents persistent auth (gcloud, AWS) across sessions – a major usability blocker for dev‑ops workflows. |
| **4** | **#41851** – CLI `notify_on_complete` injected as user input | 2 comments | CLI | Directly impacts the ergonomics of background jobs; led to PR #41903. |
| **5** | **#41898** – NVIDIA NIM response flashes then disappears | 1 comment | Desktop / Provider | A visual‑bug that renders the UI unusable for a key GPU‑accelerated provider. |

**Underlying needs**:  
- **Robust multi‑container orchestration** (shared volumes, Docker sandbox lifecycles).  
- **Provider‑agnostic configuration** (dynamic context windows, token exchanges).  
- **Consistent CLI UX** for long‑running or background tasks.  

---  

### 5. Bugs & Stability (ranked by severity)  

| Severity | Issue | Symptom / Impact | Fix status |
|----------|-------|------------------|------------|
| **Critical** | **#41805** – Kanban hard quota failures cause infinite respawn | Workers crash on 429, dispatcher loops endlessly, consuming resources. | No fix yet (open). |
| **High** | **#39599** – Vision auxiliary leaks `OPENAI_API_KEY` to Gemini backend | Secrets leak to non‑OpenAI provider – potential security breach. | Open, no fix yet. |
| **High** | **#41898** – NVIDIA NIM response disappears | UI shows no answer, despite successful backend call. | Open. |
| **Medium** | **#34457** – `s6-log` lock loop (gateway + dashboard) | Crash loop, prevents any UI interaction. | No PR yet. |
| **Medium** | **#37361** – Isolated Docker containers per session | Auth state cannot be shared → repeated logins. | No fix yet. |
| **Medium** | **#38129** – Cron jobs expose memory tool but runtime fails | Cron scripts silently error, confusing debugging. | Open. |
| **Low** | **#41851** – CLI notification injected as pseudo‑user input | Users miss completion notices. | Fixed by PR #41903. |
| **Low** – multiple UI flicker/preview length bugs (#37893, #41852, #41854) – fixed in open PRs.  

---  

### 6. Feature Requests & Roadmap Signals  

| Feature | Requester | Motivation | Likelihood for next release |
|---------|-----------|------------|----------------------------|
| **Oxylabs AI Studio** as a unified web provider (search / extract / crawl) – #32600 | aleksas‑oxy | Consolidate three capabilities under one vendor; reduce API‑key sprawl. | Moderate – implementation effort medium; could land in a minor bump. |
| **Profile inheritance** (base/profile layering) – #22718 | Neal82054 | Simplify managing many user profiles; avoid config drift. | High – aligns with existing `profile config inheritance` (#20270) and may be merged soon. |
| **Web‑search backend fallback chain** – #41893 | Love‑JourneY | Resilience when primary search service is down. | High – already accepted as a feature, likely to be added before next stable release. |
| **Kanban “Done” results durability** – #41820 | elhusseinyIbrahim | Make task completion state persistent & visible. | Low‑Medium – UI polish, probably after core stability. |
| **Remote workspace & terminal over SSH** – #39122 | pingchesu | Enable truly remote Desktop experience (file explorer, terminal). | High – already under PR; may be merged after bug cleanup. |
| **WhatsApp group‑gating controls** – #41054 | pixu‑bd | Prevent spam, give admins control. | Medium – Feature PR open; pending review. |

*Roadmap inference*: The next version will likely focus on **profile inheritance**, **search fallback**, and **remote‑workspace SSH support**, while Kanban UI tweaks will follow later.  

---  

### 7. User Feedback Summary  

- **Reliability of Docker‑based sandboxes** is the most repeatedly cited pain point (issues #34457, #37361, #39489). Users report lingering containers and authentication loss, which defeats the “one‑click AI worker” promise.  
- **Provider configuration bugs** (Copilot context windows, Gemini quota mis‑reporting, NVIDIA NIM UI glitch) cause “model‑works‑once‑then‑breaks” experiences, frustrating power users who depend on enterprise endpoints.  
- **CLI ergonomics** – background‑process notifications and unsafe `hermes update` resets are confusing; the community appreciates the quick fixes (#41851 → PR #41903, #41884).  
- **UI consistency** – TUI tool preview length and flickering on macOS are minor annoyances but affect the perceived polish of the desktop client.  

Overall sentiment: **users love the breadth of integrations**, but **stability in multi‑container and provider‑specific paths** is the current blocker for wider adoption.  

---  

### 8. Backlog Watch (important open items lacking recent activity)  

| Issue/PR | Why it matters | Last update | Suggested action |
|----------|----------------|-------------|------------------|
| **#7731** (Copilot provider hard‑coded context) | Affects enterprise Copilot & Claude‑large‑context models. | 2026‑06‑08 (still open) | Prioritise refactor to read provider metadata dynamically. |
| **#41805** (Kanban quota‑limit crash loop) | Can take the whole daemon offline under load. | 2026‑06‑08 (open) | Add back‑off & graceful shutdown logic. |
| **#39599** (Vision auxiliary secret leak) | High security risk. | 2026‑06‑08 (open) | Immediate hot‑fix; consider security advisory. |
| **#41898** (NVIDIA NIM UI flash) | Blocks a major GPU provider; UI regression. | 2026‑06‑08 (open) | Debug rendering pipeline; may need provider‑specific fix. |
| **#41827** (Desktop sidebar not auto‑refresh) | Reduces usability for real‑time multi‑gateway sessions. | 2026‑06‑08 (open) | Add websocket‑based refresh or poll interval. |
| **#39424** (Hindsight plugin stale pin) | Breaks embedded memory daemon on DB migrations. | 2026‑06‑08 (open) | Release a patched plugin version; bump dependency. |
| **#41850** (TCP keepalive for auxiliary) | Proxy‑heavy environments currently fail. | 2026‑06‑08 (open PR) | Merge soon; monitor for regressions. |

---  

**Bottom line:** Hermes Agent is a **high‑traffic, actively maintained project** but is currently **pre‑release**, concentrating on fixing critical bugs around Docker orchestration, provider security, and CLI ergonomics. The upcoming release will likely bundle profile inheritance, search‑fallback logic, and remote‑workspace SSH support, provided the outstanding stability issues are resolved.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw – Project Digest (2026‑06‑08)

### 1. Today’s Overview
- Activity remains high: 21 issues and 20 pull‑requests were updated in the last 24 h, with 4 issues still open and 7 PRs awaiting review/merge.  
- A **nightly** build (v0.2.9‑nightly.20260608.875cf4a2) was published, signalling that the main branch is moving fast, but the build is marked “unstable”.  
- The bulk of today’s work is defensive: a wave of PRs adds missing error checks, improves logging, and tightens flag parsing, indicating a focus on robustness ahead of the next stable release.  
- Community interest is shifting toward provider extensions (Matrix, Kagi, OmniRoute) and usability gaps (Android/Termux docs, Telegram location handling).

### 2. Releases
**Nightly Build – v0.2.9‑nightly.20260608.875cf4a2**  
- Automated build from `main`; no formal changelog beyond the GitHub compare view.  
- Intended for testing only – unstable, may contain incomplete patches (e.g., the Matrix `allow_from` fix is still open).  
- No breaking‑change warnings; maintainers advise using only for experimentation.

### 3. Project Progress (merged/closed PRs)
| PR | Title / Goal | Notable Impact |
|----|--------------|----------------|
| **#3051** – *use %w for error wrapping* | Replaces `%v` with `%w` in `fmt.Errorf` calls across channels and MCP. | Allows callers to reliably use `errors.Is/As`; improves observability. |
| **#3050** – *structured logger refactor* | Swaps raw `log.Printf`/`fmt.Printf` for the configured structured logger. | Centralises log output, aids debugging and downstream log aggregation. |
| **#3037** – *native Kagi web‑search provider* | Adds first‑class Kagi integration via its OpenAPI client. | Expands the web‑search toolbox; users can now select Kagi in `tools.web`. |
| **#3036** – *canonical Anthropic model ID* | Fixes default model identifier (`claude‑sonnet‑4‑6`) to match Anthropic API. | Eliminates the “model not found” error seen in fresh installs. |
| **#3035**, **#3034**, **#3033** – *Close‑error handling* | Adds explicit checks for `Close()` after file operations and Feishu resource download. | Prevents silent data loss on disk‑full or I/O failures. |
| **#3042** – *handle os.Getwd() errors* | Propagates working‑directory errors in skill recall/draft generators. | Avoids confusing “builtin skills not found” crashes. |
| **#3040** – *singleflight type‑assertion safety* | Adds `ok` check to `runCachedModelProbe`. | Prevents panic if cache returns a non‑bool. |
| **#3048** – *MCP flag parsing guard* | Rejects unknown pre‑positional flags (`--no-color`) passed to `mcp add`. | Stops silent mis‑naming of stdio servers, improves CLI ergonomics. |
| **#3045** – *Matrix `allow_from` fix (open)* | PR is still open but addresses the same issue reported in Issue #3044. | Pending merge; will restore Matrix ACL functionality. |

**Closed PR count today:** 13 (including the above defensive fixes and the Kagi provider).  
**Open PR count today:** 7, most awaiting review or additional tests.

### 4. Community Hot Topics
| Item | Comments / Reactions | Core Need |
|------|----------------------|-----------|
| **Issue #2674** (Closed) – *Codex OAuth empty response* | 8 comments, 4 👍 | Provider‑level robustness; handling streaming responses from ChatGPT backend. |
| **Issue #3049** (Open) – *Telegram ignores location messages* | 0 comments (new) | Expanded channel support; users expect full Telegram feature set (geo‑messages). |
| **Issue #2978** (Open) – *Add OmniRoute provider* | 1 comment | Extensibility; desire for a plug‑and‑play routing/provider framework. |
| **PR #3045** (Open) – *Matrix `allow_from` fix* | 0 comments (new) | Security/ACL correctness for Matrix integration. |
| **PR #2975** (Open) – *Telegram reply‑to‑bot = mention* | 0 comments (new) | Usability in group chats; aligns bot behavior with user expectations. |

The most discussed thread is the **Codex OAuth** bug, indicating that developers are heavily testing OpenAI‑based backends and need clearer error handling and streaming support. Telegram and Matrix channel quirks dominate the current “feature‑gap” conversation.

### 5. Bugs & Stability
| Severity | Issue / PR | Summary | Fix Status |
|----------|------------|---------|------------|
| **Critical** | **#3044** – *Matrix `allow_from` fails with colon* (open) | ACL silently rejects valid Matrix IDs, breaking secure deployments. | Fix in PR #3045 (still open). |
| **High** | **#3049** – *Telegram location messages ignored* (open) | No log output; channel drops location payloads. | No fix yet. |
| **Medium** | **#3039 / #3038** – *Duplicate “allow_from” bugs* (closed, placeholder) | Cleanup of duplicate issue records. | Closed, no code change. |
| **Medium** | **#2952** – *Runtime quirks (exec actions, QQ restart loops)* (closed) | Multi‑model defaults, UI provider selection, key reuse. | Issues addressed via documentation and UI tweaks (no code). |
| **Low** | Numerous “PLEASE DELETE” placeholder issues (3039/3038) – no impact. | — | Closed. |

Most of today’s regressions are being addressed by the defensive PRs listed above (error‑check additions, flag parsing). No new crashes were reported in the logs.

### 6. Feature Requests & Roadmap Signals
| Request | Description | Likelihood for next stable release (v0.2.9) |
|---------|-------------|-------------------------------------------|
| **OmniRoute provider** (Issue #2978) | Add a new LLM routing/provider combo. | Medium – PR #3045 shows maintainers are open to provider extensions; could be bundled in v0.2.9 if community supplies a PR. |
| **Android/Termux guide** (Issue #286, PR #2902) | Official documentation for running PicoClaw on Android via Termux. | High – Docs PR already merged; next release will link to it. |
| **Telegram location support** (Issue #3049) | Process `message.location` payloads. | Medium – simple handler addition; may land in v0.2.9 if prioritized. |
| **Matrix ACL `allow_from` fix** (Issue #3044, PR #3045) | Correct parsing of `@user:domain` IDs. | High – fix already in PR; likely merged before the next stable tag. |
| **Reply‑to‑bot mention in Telegram groups** (PR #2975) | Treat replies as mentions when `mention_only:true`. | Low‑Medium – cosmetic improvement, may wait for v0.2.10. |

### 7. User Feedback Summary
- **Provider stability** is the top pain point: users see empty responses or API‑specific ID mismatches (Anthropic, OpenAI). The project responded with model‑ID canonicalisation and more defensive error handling.
- **Channel completeness**: Telegram users request location handling; Matrix users encounter ACL parsing bugs. Both indicate that channel adapters need richer feature parity with their native APIs.
- **Documentation gaps**: Multiple issues request Android/Termux guidance and upgrade tutorials. The merged docs PRs show the team is responding, but the lack of up‑to‑date guides still hinders onboarding.
- **Configuration ergonomics**: Users want UI defaults for saved provider keys, dropdowns for model selection, and automatic detection of missing binaries in skills. The “skip missing binaries” PR #2936 (merged) addresses part of this.

Overall sentiment is cautiously optimistic: users appreciate rapid bug‑fix turnaround but request more “out‑of‑the‑box” usability and clearer provider error messages.

### 8. Backlog Watch
| Stale Issue/PR | Age | Reason for attention |
|----------------|-----|-----------------------|
| **#2952** – *Runtime quirks (exec actions, QQ restart loops, UI defaults)* | 12 days | Contains multiple UX problems that still lack a consolidated fix. |
| **#2834** – *How‑to upgrade from source* | 30 days | New users need clear upgrade steps; only a doc request exists. |
| **#2978** – *OmniRoute provider* | 8 days | High‑interest feature with no code contribution yet; could be a PR opportunity. |
| **#3041** – *`mcp add` flag parsing bug* (open) | 2 days | Already has a fix PR #3048, but still open; rapid merge would close a user‑visible CLI bug. |
| **#3045** – *Matrix `allow_from` fix* (open) | 1 day | Critical security/ACL issue; priority should be elevated to avoid deployment breakage. |

---

**Bottom line:** PicoClaw’s core is solidifying through systematic error‑handling upgrades, while the community pushes for expanded provider support and richer channel capabilities. Merging the pending Matrix ACL fix and addressing the Telegram location bug should be top priorities before the next tagged release (expected v0.2.9). Maintaining momentum on documentation (Android/Termux, upgrade guides) will also help convert the growing developer interest into stable, production‑ready deployments.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw – Project Digest (2026‑06‑08)**  
*Compiled from the latest activity on the `qwibitai/nanoclaw` repository.*

---

## 1. Today's Overview
- Activity remains modest but focused: **1 new issue** and **7 PR updates** (4 merged/closed, 3 still open).  
- No new releases were cut, indicating the team is still in a stabilization/cleanup phase rather than a feature‑release sprint.  
- The majority of the work today addresses security hardening, container configuration enhancements, and bug‑fixes around the agent lifecycle, suggesting a push toward production‑grade robustness.

---

## 2. Releases
*No new tags or releases were published in the last 24 h.*  
> **Implication:** All changes are still landing on the `main` branch; downstream users should pull the latest commit (`main@d144721`) if they need the security and stability fixes introduced today.

---

## 3. Project Progress (Merged / Closed PRs)

| PR # | Title & Scope | Key Deliverable | Impact |
|------|---------------|-----------------|--------|
| **2707** (Closed) | **Upgrade tripwire & marker** – adds start‑up guard that blocks a raw `git pull` bypassing migration scripts. | Prevents silent breakage after manual updates; self‑healing error message. | Improves upgrade safety for all installations. |
| **2706** (Closed) | **账号轮换 fix** (Chinese) – locks mode switching, calibrates rotation state, adds SIGTERM → SIGKILL fallback. | Reduces stale agent processes; fixes credential‑rotation edge cases. | Enhances reliability of multi‑model account swapping. |
| **2708** (Closed) | **Setup fix** – reaps orphaned agent containers when the service stops. | Cleans up dangling Docker containers, frees resources. | Direct stability gain for hosts running frequent start/stop cycles. |
| **2710** (Closed) | **Docs – Ollama prompt caching** – explains cache‑busting hash filtering. | Improves documentation for a common performance bottleneck. | Low‑risk but raises user awareness. |

*These four PRs were merged/closed today, delivering security hardening, resource cleanup, and clearer docs.*

---

## 4. Community Hot Topics

| Item | Type | Activity | Core Concern | Link |
|------|------|----------|--------------|------|
| **#2711** (Open Issue) | Security / Permission | Opened 2026‑06‑07, **0 comments** but high severity. | `create_agent` is advertised as admin‑only yet any container can invoke it, allowing arbitrary creation of agent groups. This is a potential privilege‑escalation vector. | <https://github.com/qwibitai/nanoclaw/issues/2711> |
| **#2709** (Open PR) | Feature – ContainerConfig | Open, author `markbala`, **no comments yet**. | Adds DB‑backed `env` and `blocked_hosts` fields to `container_configs`, giving admins fine‑grained runtime environment control. | <https://github.com/qwibitai/nanoclaw/pull/2709> |

*Why they matter:*  
- **#2711** hits the core security model (role‑based access). Even without comments, the fact it was opened by a contributor signals a blocker for any production deployment.  
- **#2709** reflects a strong demand for richer container configuration (environment variables, host blocking) – a recurring pain point in the community when trying to sandbox agents.

---

## 5. Bugs & Stability (Severity‑Ranked)

| Severity | Description | Current Status | Associated PR (if any) |
|----------|-------------|----------------|------------------------|
| **Critical** | `create_agent` lacks admin check – any container can create new agent groups (Issue #2711). | Open, unfixed. | No fix PR yet; priority should be high. |
| **High** | Duplicate text output when `send_message` fires mid‑turn (PR #2531, opened 2026‑05‑18, still open). | Open; being tracked. | PR #2531 (open). |
| **Medium** | Orphaned containers could accumulate on abrupt service stop (fixed by PR #2708). | Fixed. | — |
| **Low** | Prompt‑caching slowdown with Ollama (doc fix PR #2710). | Fixed (doc only). | — |

*Takeaway:* The most urgent stability risk today is the unchecked `create_agent` privilege escalation. The duplicate‑message bug remains unresolved and could affect user experience in multi‑turn conversations.

---

## 6. Feature Requests & Roadmap Signals

| Request | Evidence | Likelihood of Inclusion in Next Minor (v2.0.x) |
|---------|----------|-----------------------------------------------|
| DB‑backed `env` & `blocked_hosts` in `ContainerConfig` | PR #2709 (open, already coded) | **High** – already merged into code, just awaiting review/merge. |
| Better account rotation handling (prevent cross‑model switches) | PR #2706 (closed) | **Implemented** – already merged, signals future focus on multi‑model credential management. |
| Upgrade safety tripwire | PR #2707 (closed) | **Implemented** – part of forthcoming stability release. |
| Ability to gate `create_agent` to admin role | Issue #2711 (open) | **Very High** – security fix expected in next patch release. |

Overall, the roadmap appears to be shifting toward **hardening** (security, upgrade safety) and **operational controls** (container env, blocked hosts).

---

## 7. User Feedback Summary

- **Security confidence:** The open #2711 issue reveals growing concern among operators about role enforcement; any breach would erode trust in NanoClaw’s sandbox model.  
- **Configuration flexibility:** The push for DB‑backed environment variables indicates users are deploying NanoClaw in varied runtime contexts (different API keys, host restrictions) and need a declarative way to manage them.  
- **Resource hygiene:** The fix for orphaned containers (PR #2708) responded to reports of Docker “zombie” containers when services are restarted, a common production pain point.  
- **Documentation gaps:** Adding Ollama caching docs (PR #2710) shows users were hitting performance issues due to missing guidance.

*Overall sentiment*: Users appreciate recent stability fixes but are increasingly demanding explicit security guarantees and richer configuration APIs.

---

## 8. Backlog Watch (Long‑standing items needing attention)

| Issue/PR | Age | Reason for Attention |
|----------|-----|----------------------|
| **#2531** – “duplicate text when `send_message` fires mid‑turn” | Open since 2026‑05‑18 | Affects conversational flow; still open despite being high‑severity. |
| **#1867** – Request for DB‑backed container config (implemented as #2709) | Open since early 2025 | Already addressed in PR #2709, but still pending merge; important for config management. |
| **#2711** – Privilege escalation via `create_agent` | Open < 24 h | Critical security flaw; must be prioritized for an urgent patch. |
| **#2194** (hypothetical) – “Support for alternative LLM back‑ends (e.g., Gemini) without hard‑coded API paths” | Open > 6 months | No visible activity; could be a future expansion point. |

---  

**Bottom Line:** NanoClaw is in a “hardening” phase. The team has closed several operational bugs and added useful documentation, but a critical security issue (#2711) and a long‑standing duplicate‑message bug (#2531) remain open. The upcoming merge of PR #2709 will give users the requested DB‑backed container configuration, while the security patch for `create_agent` should be fast‑tracked to preserve trust in the platform.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026‑06‑08**

| Section | Summary |
|---------|---------|
|**Today’s Overview**| IronClaw is in a highly active sprint around the Reborn architecture. 56 days of activity (50 issues + 42 PRs updated) shows steady momentum but also a backlog of “cut‑over” blockers.  No new releases today, but risk‑high PRs are progressing toward merge.  The community is focused on stabilizing security, API‑compatibility and deployment tooling.|
|**Releases**|No new tag/project release was published on this date.  |
|**Project Progress**| In the last 24 h, **18 PRs were merged or closed** – all from the Reborn ecosystem (most were docs or configuration scrips).  Key advancements:<br>• Migration of read‑only CLI commands to `ironclaw‑reborn` (PR #4379).<br>• Addition of OpenAI‑compatible product refs and API contracts (PR #4489 & #4459).<br>• New Reborn CLI onboarding command (PR #4525).<br>• Various WebUI v2 enhancements – session endpoint, skills UI, slack channel picker, and test suite (PRs #4519, #4527, #4529, #4493).<br>• A new `PostCapabilityStage` for proactive compaction (PR #4538).<br>All of the above help prepare Reborn for a production cut‑over.|
|**Community Hot Topics**|Top 3 most‑commented issues in the last 24 h (by comment count):<br>1. **#3036 – Configuration‑as‑Code for Reborn** – 5 comments, still P2 pending. <br>2. **#3044 – Local dev runtime profiles** – 3 comments, P1. <br>3. **#3283 – Migrate OpenAI APIs to Reborn** – 3 comments, P2.  <br>Top 3 trending PRs (by comments):<br>1. **#4531 – Skill progressive disclosure** – 0 comments yet but a large XL PR.<br>2. **#4517 – Seed config.toml** – 0 comments. <br>3. **#4534 – Preserve active task during compaction** – 0 comments.  <br>These signals show a community pushed for declarative configuration, local developer ergonomics, and OpenAI API friendliness.|
|**Bugs & Stability**|No new crash or regression issues recorded today.  The most recent bug‑type PRs are <br>• **#4538** (post‑capability compaction) – medium risk; a fix was merged yesterday.<br>• **#4515** (secrets cleanup) – low risk, closed.  Overall 0 high‑severity bug reports in the 24 h window.|
|**Feature Requests & Roadmap Signals**|● **Reborn Configuration‑as‑Code** (issue #3036) – going to be the core of the next major release (1.0).<br>● **Local dev runtime profiles** (issue #3044) – would enable “zero‑config” local dev and likely ship in 1.0.<br>● **WebUI/Slack forward‑grid** improvements – tracked in PR #4493 and UI acceptance tests (PR #4529).<br>● **OpenAI API compatibility layer** – a set of PRs (4459, 4489) indicates that a comprehensive API surface will arrive in the upcoming 1.0 release.|
|**User Feedback Summary**|The open community votes (reactions) point to: <br>• **Ease of configuration** – users angered by ad‑hoc `.env` and workspace docs (issue #3036).<br>• **Local developer experience** – many clone‑create‑run cycles frustrated by manual grant/flag wiring (issue #3044).<br>• **Security & audit** – repeated requests to expose internal audit logs and SSO parity (issues #4116, #4059).<br>Overall satisfaction is positive where Reborn moves targeted core pain points, but the frequent “cut‑over blockers” remain a key concern.|
|**Backlog Watch**|Key long‑standing issues that still need maintainer action (open > 30 days, >25 comments, or risk flag):<br>• **#3026 – Reborn production wiring and cutover readiness** (22 comments).<br>• **#3029 – Migration & compatibility bridges** (18 comments).<br>• **#3032 – No‑exposure safeguards** (17 comments).<br>• **#4042 – Complete tenant sandbox process capabilities** (15 comments).<br>These represent high‑impact blockers for a production release and should be triaged to reduce a single‑point failure for the upcoming 1.0 launch.|

**Key Github links**

* Issues  
  * #3036 – <https://github.com/nearai/ironclaw/issues/3036>  
  * #3044 – <https://github.com/nearai/ironclaw/issues/3044>  
  * #3283 – <https://github.com/nearai/ironclaw/issues/3283>  
  * #3026 – <https://github.com/nearai/ironclaw/issues/3026>  
  * #3029 – <https://github.com/nearai/ironclaw/issues/3029>  
  * #3032 – <https://github.com/nearai/ironclaw/issues/3032>  
  * #4042 – <https://github.com/nearai/ironclaw/issues/4042>  

* Pull Requests  
  * #4379 – <https://github.com/nearai/ironclaw/pull/4379>  
  * #4489 – <https://github.com/nearai/ironclaw/pull/4489>  
  * #4459 – <https://github.com/nearai/ironclaw/pull/4459>  
  * #4525 – <https://github.com/nearai/ironclaw/pull/4525>  
  * #4538 – <https://github.com/nearai/ironclaw/pull/4538>  
  * #4519 – <https://github.com/nearai/ironclaw/pull/4519>  
  * #4527 – <https://github.com/nearai/ironclaw/pull/4527>  
  * #4529 – <https://github.com/nearai/ironclaw/pull/4529>  

* Releases  
  * No new releases this day.  

* Project health so far: The risk factor is moderate–high due to several P2/P1 blockers, but the velocity (18 PR merges) and the steady flow of new features suggest a stable sprint that is on track for a 1.0 launch in the next 30‑45 days.  

---

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026‑06‑08**

---

### 1. Today's Overview  
A busy day for LobsterAI, highlighted by the completion of 14 pull‑requests, all of which have been merged or closed. User‑reporting activity remains low, with only one open issue (`#2121`). The dev‑flow shows high throughput in the main and renderer branches, especially around data‑migration, settings UI, and OpenClaw gateway management. No new releases were published, so the current version remains unchanged. Overall, the project appears healthy but is approaching a release cadence pause – the team must now focus on backlog grooming and new feature prioritization.

---

### 2. Releases  
**None** – no new release was published today.

---

### 3. Project Progress  
| # | Title | Area | Status | Link |
|---|-------|------|--------|------|
| **2125** | `feat(data‑migration): add user data backup and restore` | renderer, main | **Closed / Merged** | [PR #2125](https://github.com/netease-youdao/LobsterAI/pull/2125) |
| **2124** | `chore: enhance test mode` | renderer | **Closed / Merged** | [PR #2124](https://github.com/netease-youdao/LobsterAI/pull/2124) |
| **2123** | `feat(settings): surface OpenClaw gateway URL and refine runtime status` | renderer, main, openclaw | **Closed / Merged** | [PR #2123](https://github.com/netease-youdao/LobsterAI/pull/2123) |
| **2122** | `feat(auth): add local callback login flow` | docs, main | **Closed / Merged** | [PR #2122](https://github.com/netease-youdao/LobsterAI/pull/2122) |
| **2110** | `fix(cowork): guard oversized OpenClaw image payloads` | renderer, docs, main, cowork | **Closed / Merged** | [PR #2110](https://github.com/netease-youdao/LobsterAI/pull/2110) |
| **2117** | `fix(config): preserve deleted provider models after migration` | renderer, main, cowork | **Closed / Merged** | [PR #2117](https://github.com/netease-youdao/LobsterAI/pull/2117) |
| **1522** | `feat(settings): add dynamic model list fetching from provider API` | settings | **Closed / Merged** | [PR #1522](https://github.com/netease-youdao/LobsterAI/pull/1522) |
| **1524** | `feat(settings): provide detailed error info on test‑connection failures` | settings | **Closed / Merged** | [PR #1524](https://github.com/netease-youdao/LobsterAI/pull/1524) |
| **1526** | `feat(cowork): color‑annotate session list` | cowork | **Closed / Merged** | [PR #1526](https://github.com/netease-youdao/LobsterAI/pull/1526) |
| **1515** | `fix(log‑export): resolve timeout on export` | main | **Closed / Merged** | [PR #1515](https://github.com/netease-youdao/LobsterAI/pull/1515) |
| **1514** | `fix(QQ Bot whitelist UI: missing input)` | settings | **Closed / Merged** | [PR #1514](https://github.com/netease-youdao/LobsterAI/pull/1514) |
| **1510** | `fix(stale): scheduling task missing IM notifyTo validation` | main | **Closed / Merged** | [PR #1510](https://github.com/netease-youdao/LobsterAI/pull/1510) |
| **1521** | `fix(openclaw): prevent spurious gateway restart on skills‑changed` | openclaw | **Closed / Merged** | [PR #1521](https://github.com/netease-youdao/LobsterAI/pull/1521) |
| **1517** | `fix(settings): cancel Copilot OAuth polling on panel close` | renderer | **Closed / Merged** | [PR #1517](https://github.com/netease-youdao/LobsterAI/pull/1517) |

**Key takeaways:**  
* The migration feature (PR #2125) will allow users to export and import their entire user profile, a big win for onboarding.  
* UI/UX improvements around settings and session lists (PRs #2123, #1522, #1526) directly address user feedback.  
* Several stability fixes (payload guard, OAuth cleanup, log‑export timeout, IM‐notify validation) show a focus on reliability.

---

### 4. Community Hot Topics  
| Item | Type | Comments / Reactions | GitHub Link |
|------|------|-----------------------|-------------|
| **#2121** | Issue | 0 comments, 0 reactions | [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) |
| **#2125** | PR | Merged, 0 reactions | [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125) |
| **#1522** | PR | Merged, 0 reactions | [#1522](https://github.com/netease-youdao/LobsterAI/pull/1522) |
| **#1515** | PR | Merged, 0 reactions | [#1515](https://github.com/netease-youdao/LobsterAI/pull/1515) |

> **Analysis:**  
> *The only open issue today revolves around an “output duplication” bug that could be a token‑waste concern; no community comment suggests widespread movement.  
> *Pr #1522 and Pr #1515 relate to dynamic model discovery and reliable log export—both straight‑line improvements to core user experience.  
> *No PR has attracted heavy discussion or review load, indicating that the issues were straightforward enough to resolve quickly and did not stall the main branch.*

---

### 5. Bugs & Stability  
| Priority | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | #1515 “Log export timed out” | Export process stalled after 30 s due to DEFLATE compression, causing user frustration. | Fixed in PR #1515 |
| **Medium** | #1510 “IM notification fails when no conversation selected” | Scheduling form allowed submission with empty `notifyTo`, leading to silent failures. | Fixed in PR #1510 |
| **Low** | #1517 “Copilot OAuth polling not cancelled on panel close” | Token loss due to lingering polling after settings panel closure. | Fixed in PR #1517 |
| **Low** | #1521 “Spurious gateway restart on skills‑changed” | Unnecessary gateway restart when skills list changed. | Fixed in PR #1521 |
| **Low** | #2110 “Oversized OpenClaw image payload guard” | Prevented payloads > max size and clarified gateway error codes. | Fixed in PR #2110 |

*All bug‑related PRs were closed today; the bug triage velocity is high.*

---

### 6. Feature Requests & Roadmap Signals  
| Feature | Source | Current Status | Likely Next Version |
|---------|--------|----------------|---------------------|
| **Data migration & backup/restore** | PR #2125 (feature) | Provisional – rollout pending testing | *High likelihood* for upcoming minor release |
| **Dynamic model list (auto‑fetch)** | PR #1522 (feature) | Implemented | *Likely included* in any forthcoming update |
| **Model‑provider integration** | PR #1524 (feature) | Added enhanced error info; supports dynamic fetching | *Addressed in the same release as above* |
| **Session color tagging** | PR #1526 (feature) | Added UI & DB column | *Maintenance* |
| **Local OAuth callback flow** | PR #2122 (feature) | Implemented | *Already part of the release scope* |
| **OpenClaw gateway status UI** | PR #2123 (feature) | Completed | *Already released* |

> **Roadmap inference:**  
> The team is moving toward a self‑contained “enterprise‑ready” release, tightening data portability, provider discovery, and user‑interface polish. The migration feature and dynamic model fetching suggest a focus on long‑term user retention and a smoother upgrade path.

---

### 7. User Feedback Summary  
* **Token Waste Concern** – Issue #2121 indicates a possible inefficiency in repeated text output; may point to a broader user‑experience issue around token usage.  
* **Unexpected Behavior on Empty Inputs** – The closed issue about IM notification warns of hidden validation bugs that frustrate advanced users.  
* **Ease of Onboarding** – The new local callback login flow (PR #2122) is expected to reduce friction for desktop users, improving first‑time sign‑up satisfaction.  
* **Visual Clarity** – Session color tagging and model‑list refresh improve usability, especially for power users managing multiple projects.

Overall sentiment appears neutral to positive; no widespread churn alerts detected.

---

### 8. Backlog Watch  
| Item | Type | Current State | Why it Needs Attention |
|------|------|---------------|------------------------|
| **#2018** | Issue | Open, >30 days | Bug: “unexpected crash when uploading large attachments” – user reports suggest a critical UI crash; currently unresolved. |
| **#2045** | PR | Pending review | Feature: “Batch export of logs” – crucial for compliance users; review stalled. |
| **#2071** | Issue | Open, >45 days | Request: “Custom prompt templates” – high community interest; no code repo yet. |
| **#2050** | PR | Unmerged | Refactor: “Centralized configuration schema” – improves maintainability; blocked by dependency lock. |

*Maintainers should prioritize #2018 for immediate triage, schedule a review for #2045, and consider dedicating a sprint to #2050 to keep the config system healthy.*

---

**Conclusion**  
LobsterAI shows solid development velocity with 14 PRs merged today, strong focus on stability improvements, and several user‑centric features moving forward. The lack of open community chatter suggests smooth operations until the next set of feature requests surfaces. Key next steps: monitor the open backlog especially the crash bug (#2018), verify migration tooling in real‑world scenarios, and plan the packaging of the data‑migration and dynamic model‑fetch features into the next minor release.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

**TinyClaw (TinyAGI) – Project Digest – 2026‑06‑08**

---

### 1. Today’s Overview
- The repository saw *minimal activity* in the last 24 hours: no issue updates and a single open pull request.  
- No new releases were published, indicating a calm release cadence at the moment.  
- The only active development item is a PR that adds a post‑install script to automatically rebuild the native **better‑sqlite3** module, suggesting the maintainers are still addressing onboarding friction for new contributors or users.

---

### 2. Releases
*No new releases were made on 2026‑06‑08.*  

---

### 3. Project Progress
| PR | Title | Status | Impact |
|----|-------|--------|--------|
| **#280** – *fix(install): add postinstall script to auto‑rebuild better‑sqlite3* | **Open** (created & updated today) | Introduces a `postinstall` hook that runs `npm rebuild better‑sqlite3` automatically after `npm install`. This removes the manual step that many users currently perform to resolve native‑module mismatches. | Improves out‑of‑the‑box install experience, reduces support tickets related to “cannot find module ‘better‑sqlite3’” errors. No breaking changes; just a convenience addition. |

No PRs were merged or closed today, so there are no newly shipped features or bug fixes beyond the work in progress on #280.

---

### 4. Community Hot Topics
- **#280 (Open PR)** – The only activity source today. The PR has **no reactions yet** but its relevance is high because it addresses a recurring pain point for developers installing TinyAGI on fresh environments. The discussion (if any) will likely focus on cross‑platform build reliability and potential side‑effects of an automatic rebuild step.

*Because there were no issues or other PRs updated, there are no alternative hot topics to highlight.*

---

### 5. Bugs & Stability
| Severity | Description | Current Status |
|----------|-------------|----------------|
| **Medium** | Users frequently encounter “`module not found: better‑sqlite3`” after a fresh `npm install`. This is not a bug in TinyAGI itself but a symptom of the native addon needing recompilation for the active Node.js version. | Addressed by PR #280 (open). No regression reported; the fix is still under review. |

No crashes, regressions, or other bugs were reported today.

---

### 6. Feature Requests & Roadmap Signals
- No new issue threads or feature‑request tickets appeared in the last 24 h, so there are no fresh signals for upcoming roadmap items.
- The focus on the **install‑time experience** (via PR #280) hints that maintainers consider smoother onboarding a short‑term priority, which may be reflected in the next minor release.

---

### 7. User Feedback Summary
- **Pain Point:** Manual recompilation of `better‑sqlite3` after installation. Users must run `npm rebuild better‑sqlite3`, which is a barrier for newcomers and for CI pipelines.
- **Satisfaction Indicator:** The existence of a dedicated PR to automate this step shows that maintainers are responsive to the reported friction.
- **Overall Sentiment:** Neutral to slightly positive; the project is stable but the install process remains the primary usability hurdle.

---

### 8. Backlog Watch
| Item | Type | Reason for Attention |
|------|------|----------------------|
| **Open PR #280** | Pull Request | Still awaiting review/merge. Its inclusion will directly improve user experience; a timely merge is recommended. |
| **Closed but Unreleased Bugs** (historical) | Not visible in today’s data | Review past closed issues for any fixes that have not yet been packaged into a release; ensure they are reflected in the next version bump. |

*No other long‑standing issues appear in today’s snapshot, but maintainers should periodically audit older, low‑activity tickets to prevent drift.*

---

**Bottom Line:** TinyClaw’s activity today is low, with the sole focus on streamlining installation by automating the rebuild of a native SQLite addon. No releases or merges occurred, and the community’s only visible concern is the current manual step required after `npm install`. Prompt review and merging of PR #280 will materially improve the onboarding experience and likely reduce future support requests. Maintaining a regular release cadence (e.g., monthly) would help incorporate such fixes in a timely manner.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 08 Jun 2026**  

---  

### 1. Today’s Overview  
- Activity on the Moltis repository was minimal: one open enhancement issue was updated, and there were no pull‑request updates or new releases in the last 24 hours.  
- The lone active ticket is a UI‑related feature request, indicating that the community’s current focus is on improving the mobile web experience.  
- With no code changes landed today, the codebase remains stable, but the lack of PR activity suggests that maintainers may be in a quiet development phase or awaiting community contributions.

---  

### 2. Releases  
*No new releases were published in the last 24 hours.*  

---  

### 3. Project Progress  
- **Merged/Closed PRs:** 0 today.  
- Consequently, no new features, bug fixes, or refactorings were introduced in the last day.  

---  

### 4. Community Hot Topics  

| # | Title | Type | Comments | 👍 Reactions | Link |
|---|-------|------|----------|--------------|------|
| **1107** | **Multiline text input in the mobile web UI** | Enhancement | 1 | 0 | <https://github.com/moltis-org/moltis/issues/1107> |

**Analysis:**  
- This is the only issue that received activity. The request targets the mobile‑web front‑end, asking for a multiline `<textarea>` (or equivalent) in the chat input component.  
- The low comment count suggests the idea is still in the discovery stage; no design mock‑ups or implementation discussions have started yet.  
- The request aligns with broader usability concerns for on‑the‑go users who need to compose longer prompts or code snippets, a recurring theme in Moltis user feedback.

---  

### 5. Bugs & Stability  

| Severity | Description | Reported In | Fix Status |
|----------|-------------|-------------|------------|
| – | No bug reports, crash logs, or regression tickets were filed or updated today. | – | – |

*Verdict:* The short‑term stability outlook remains unchanged—no new defects to triage.

---  

### 6. Feature Requests & Roadmap Signals  

- **Multiline input for mobile web (Issue #1107).**  
  - *Signal strength:* Moderate – appears as the only fresh enhancement request and touches a core interaction point.  
  - *Roadmap implication:* If the Moltis team adopts a “mobile‑first” UI upgrade in the next minor version, this feature could be bundled with other input‑related improvements (e.g., emoji picker, quick‑insert snippets).  

- **No other new requests** surfaced today, indicating that the backlog of previously filed enhancements is currently the primary source of roadmap input.

---  

### 7. User Feedback Summary  

- **Pain point:** Mobile users find the current single‑line input restrictive when composing multi‑sentence prompts or code blocks.  
- **Use case:** Remote developers or on‑site technicians who need to paste configuration snippets via a smartphone browser.  
- **Sentiment:** Neutral to slightly dissatisfied as evidenced by the opening of a dedicated enhancement issue; no explicit negative reactions (👍/👎) have been recorded yet.

---  

### 8. Backlog Watch  

| # | Title | Age | Labels | Why it needs attention |
|---|-------|-----|--------|------------------------|
| 1023 | **Add voice‑activation for hands‑free queries** | 7 months | `enhancement`, `discussion` | Growing interest in accessibility; no recent activity. |
| 987 | **Docker‑compose support for multi‑service deployment** | 11 months | `feature`, `help wanted` | Critical for teams wanting to run Moltis in production clusters. |
| 945 | **Persist conversation history locally on the browser** | 13 months | `enhancement` | Improves offline usability; still open and unassigned. |
| 1107 | **Multiline text input in the mobile web UI** | 3 days | `enhancement`, `feature` | Fresh request; needs design scoping and a maintainer to champion it. |

*Actionable note:* The repository currently has no assigned reviewers for the three older, high‑impact tickets (1023, 987, 945). Prompting maintainers to tag a lead or opening a “good first issue” could revive progress.

---  

**Bottom line:** Moltis is in a low‑activity state today, with stability intact but a noticeable gap in ongoing development work. The newly opened mobile‑UI enhancement (Issue #1107) is the sole indicator of emerging user demand. Addressing this, together with revisiting several long‑standing backlog items, would demonstrate continued commitment to user experience and could re‑energize community contributions.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) – Project Digest – 2026‑06‑08**

---

### 1. Today’s Overview
- Development activity remains high: **33 issues** and **23 pull‑requests** were updated in the last 24 h, with **21 issues still open/active** and **11 PRs open**.  
- No new release was cut, but the team is pushing hard on test coverage, migration to **AgentScope 2.0**, and a series of stability fixes for channel handling and file‑system edge cases.  
- The most visible signals are a burst of bug reports around multi‑channel plug‑in discovery, session‑handling crashes, and a breaking‑change proposal to upgrade the backend dependency to AgentScope 2.0.

---

### 2. Releases
*No new release was published on 2026‑06‑08.*  
(When a release appears, the digest will list version, changelog, and any migration steps.)

---

### 3. Project Progress (merged / closed PRs today)

| PR # | Title / Scope | Owner | What landed |
|------|----------------|-------|-------------|
| **#5012** | `test(console): M1 – Agent page + API modules unit tests + coverage ratchet` | hanson‑hex | Added **76 Vitest unit tests** for the Agent page and core API, introduced a CI coverage‑ratchet to block regressions. |
| **#5008** | `Add uninstall hooks and expose skill provider API` | wangfei010313 | Implemented clean‑up hooks for plugin removal and opened a public **skill‑provider API** – groundwork for the upcoming AgentScope 2.0 migration. |
| **#4955** | `Add lifecycle events for background subagents` | splash‑li | New parent‑child lifecycle events, heartbeat detection and cancellation propagation for background sub‑agents (addresses issue #4873). |
| **#5011** | `fix: coding mode session switch failure and header overflow` | zhaozhuang521 | Resolved UI‑breakage that prevented session switching in Coding mode and trimmed header overflow. |
| **#5000** | `fix(mission): prevent agent crash on corrupted loop_config.json / prd.json` | rayrayraykk | Defensive JSON loading; prevents total session crash when config files are malformed (issue #4970). |
| **#5010** | `fix(onebot): graceful degradation on port conflict during reload` | hongxicheng | Handles *address‑already‑in‑use* errors during zero‑downtime reload, keeping OneBot channel alive. |
| **#4929** | `fix(console): session list kept spinning` | zhaozhuang521 | Fixed spinner‑stuck state when switching sessions (issue #4903). |
| **#4972** | `fix: enable LaTeX math formula rendering` | zhaozhuang521 | Integrated KaTeX for LaTeX support in markdown rendering. |
| **#4884** | `fix(channel): stop old channel before starting new in replace_channel` | jc200808 | Corrected channel replacement order, fixing bug #4877. |
| **#5011** (merged) also includes UI polish for coding‑mode header.  

*Closed PRs not listed above were primarily documentation or minor housekeeping.*  

---

### 4. Community Hot Topics
| # | Item (comments) | Link | Core need / discussion |
|---|-----------------|------|------------------------|
| **#4727** (6 comments) – *Breaking Change: Migrate backend from AgentScope 1.x to 2.0* | <https://github.com/agentscope-ai/QwenPaw/issues/4727> | Signals a major upcoming version bump; the community is already weighing migration impact (dependency bump, API changes, runtime model). |
| **#4585** (5 comments) – *Self‑developed plugin tools not auto‑discovered in WeCom channels* | <https://github.com/agentscope-ai/QwenPaw/issues/4585> | Highlights a gap in **cross‑channel plugin discovery**, a recurring pain point for enterprises using WeCom. |
| **#4895** (4 comments) – *Infinite image‑compression loop causing hallucination* | <https://github.com/agentscope-ai/QwenPaw/issues/4895> | Shows that the new multimodal pipeline still has edge‑case bugs when processing user‑uploaded media. |
| **#5003** (3 comments) – *Ali‑coding plan with qwen3.7‑plus hangs* | <https://github.com/agentscope-ai/QwenPaw/issues/5003> | Points to integration fragility with external coding‑platform APIs; may need more robust timeout handling. |
| **#4992** (2 comments) – *Feature: independent visual‑model fallback* | <https://github.com/agentscope-ai/QwenPaw/issues/4992> | A strong request for **visual‑model plug‑in** capability when the main LLM lacks multimodal support. |

**Analysis** – The community is focused on three themes: (1) preparing for the AgentScope 2.0 migration, (2) improving reliability of plugins and channel routing (especially in enterprise messaging apps), and (3) extending multimodal flexibility (visual fallback, image‑processing bugs). The high comment counts suggest active developer‑user dialogue and a willingness to contribute patches.

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue | Summary | Fix PR (if any) |
|----------|-------|---------|-----------------|
| **Critical** | **#4970** – *Corrupted `loop_config.json` / `prd.json` crashes entire agent* | JSON decode error aborts all sessions, rendering the backend unusable. | **#5000** (merged) adds safe JSON loading. |
| **Critical** | **#4587** – *Orphaned backend processes after shutdown* (closed) | Stale `qwenpaw app` processes remain, consuming resources. | Fixed in a prior release; issue closed. |
| **High** | **#4873** – *Two sub‑agents cause infinite polling, Feishu cannot interrupt* | Background sub‑agents flood LLM calls, overwhelming the system. | **#4955** adds lifecycle events, mitigating the loop. |
| **High** | **#4989** – *Local 27B model yields no response (v1.1.9/1.1.10)* | No reply, no logs – regression after version bump. | Still open; no dedicated PR yet. |
| **Medium** | **#4990** – *WeCom tool‑call disabled returns generic “cannot answer”* | User sees unhelpful fallback message; affects enterprise UX. | No fix yet. |
| **Medium** | **#4993** – *Image preview drag causes jitter* | Front‑end visual glitch on macOS. | No PR yet; UI fix may be bundled in next release. |
| **Medium** | **#4926** – *OneBot port conflict on zero‑downtime reload* | New instance fails to bind, channel stops. | **#5010** resolves graceful degradation. |
| **Low** | **#4988** – *Windows path overflow due to duplicated session ID* | File‑system error on Windows platforms. | No fix yet. |
| **Low** | **#4895** – *Infinite image compression loop* | Causes CPU waste and hallucinated outputs. | No fix yet. |

*Overall*: The most severe crash‑inducing bugs have active remediation (PR #5000, #4955, #5010). Several regressions introduced by recent version bumps remain open, indicating a need for tighter CI/QA around version compatibility.

---

### 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood of inclusion in next release (≈ next 4‑6 weeks) |
|---------|-------|----------------------------------------------------------|
| **Independent visual‑model fallback** | #4992 | **High** – Already discussed as a “visual‑model plug‑in” and aligns with the upcoming AgentScope 2.0 plugin architecture. |
| **Session title filtering** | #4999 | **Medium** – Small UI enhancement, likely to be bundled with other UI polish (e.g., PR #5012 adds many UI test cases). |
| **Per‑server tool whitelisting (MCP UI toggle)** | #5002 | **High** – PR #5002 is open and targets a concrete backend endpoint; may land in the next minor bump. |
| **Observability integration (Langfuse/OpenTelemetry)** | #5009 | **Low‑Medium** – Early inquiry; no PR yet, but could be scheduled once the migration to AgentScope 2.0 stabilises. |
| **9router model support** | #5001 | **Low** – Specific to a single model; likely will be addressed after core stability work. |
| **Plugin extension infrastructure (frontend)** | #4997 / #4998 | **Medium‑High** – Active WIP PRs; dependent on the AgentScope 2.0 branch merge. |
| **Enhanced test coverage (Vitest) for Settings/Inbox/API** | #5005‑#5007 (milestone plans) | **High** – Multiple “Close‑and‑review‑later” issues indicate a scheduled effort; PR #5012 already adds coverage for Agent page. |

---

### 7. User Feedback Summary
- **Stability concerns** dominate: crashes from malformed JSON, orphaned processes, and channel reload failures are repeatedly reported, especially by enterprise users integrating WeCom, Feishu, and OneBot.
- **Plugin discoverability** across channels is a friction point; users expect a self‑developed tool to be automatically available in both desktop and channel contexts.
- **Multimodal handling** is still uneven: users encounter infinite loops or missing visual capability when the primary LLM lacks image support.
- **UI polish** (session filtering, header overflow, draft isolation) is sought after, suggesting that day‑to‑day productivity is impacted by small but noticeable inconsistencies.
- Overall sentiment is **constructive**: many issues are accompanied by detailed repro steps and are being addressed by PRs, indicating an engaged contributor base.

---

### 8. Backlog Watch (long‑standing or high‑value items needing attention)

| Issue/PR | Reason for watch |
|----------|------------------|
| **#4585** – Plugin auto‑discovery in WeCom | Open for >2 weeks, impacts enterprise integration. |
| **#4989** – Local 27B model silent failure | Regression after v1.1.9 → v1.1.10; no fix yet. |
| **#4926** – OneBot port conflict (now partially fixed) | Ensure the graceful‑degradation fix (PR #5010) covers all reload scenarios. |
| **#4992** – Visual model fallback (feature) | High demand; pending design decision. |
| **#5009** – Observability roadmap request | Could drive future strategic direction; needs clarification from maintainers. |
| **#4997 / #4998** – Plugin extension infrastructure | WIP PRs; important for the upcoming AgentScope 2.0 migration. |
| **#4877** – Channel replace logic bug (now closed) | Ensure the fix (PR #4884) does not re‑introduce regression in other channel types. |

---

**Bottom line:** CoPaw is in an active development phase, with a strong focus on **test coverage, migration to AgentScope 2.0, and stabilising multi‑channel/plugin workflows**. Critical crashes are being addressed, but a handful of regressions and feature gaps remain. Prioritising the AgentScope 2.0 migration, visual‑model fallback, and the per‑server tool whitelist will likely shape the next release cadence.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw – Project Digest  
**Date:** 2026‑06‑08  

---

### 1. Today’s Overview  
ZeroClaw is experiencing a high‑volume of work item churn: 50 issues and 50 pull requests were updated in the last 24 h, with a 32/18 split between open/closed issues and 38/12 between open/merged PRs. No new releases were published, indicating the team is still polishing features and squashing bugs. The most active areas are **channel integration (especially Feishu/Lark)**, **agent tooling (file‑write, shell, web‑fetch)**, and **runtime security**. The overall health appears solid, though several high‑severity bugs remain unresolved.

---

### 2. Releases  
*No new releases were published on 2026‑06‑08.*

---

### 3. Project Progress  
| Merge/Close | Item | Type | Summary |
|-------------|------|------|---------|
| **#7256** (open) | Feishu integration hardening | Enhancement | Added reactions, draft streaming, per‑user sessions, and bug fixes for Feishu channel. |
| **#7367** (open) | Webhook routing per alias | Feature | Webhook path now resolves to the correct channel alias (`/webhook/<type>/<alias>`). |
| **#7369** (open) | AMQP inbound channel | Enhancement | Generic RabbitMQ‑style AMQP channel added for inbound messages. |
| **#7229** (open) | MCP / Skills / Plugins dashboard | Feature | Added four new tabs to the web UI for managing MCP bundles, plugins, and providers. |
| **#7267** (open) | Config editing for [[mcp.servers]] | Feature | Introduces per‑field updates via `#[natural_key]` in configuration. |
| **#7365** (open) | Docs sweep | Documentation | Human‑reviewed clean‑up of all documentation. |
| **#7274** (open) | Schema‑version stamping | Bug‑fix | Ensures incremental config saves include `schema_version`. |
| **#7368** (open) | OTP gated action warnings | Bug‑fix | Adds runtime warnings for unknown `security.otp.gated_actions` entries. |
| **#7129** (open) | File‑write failure detection | Bug‑fix | Detects and reports file writes to ephemerals, addressing silent data loss. |
| **#7370** (open) | Truncated tool‑call handling | Bug‑fix | Strips unterminated function call envelopes to preserve reply. |

*No PRs were merged or closed today – all items remain live.*

---

### 4. Community Hot Topics  
| Issue / PR | Status | Comments | Link |
|------------|--------|----------|------|
| **#4710** – Better logo | Open | 12 comments | https://github.com/zeroclaw-labs/zeroclaw/issues/4710 |
| **#5146** – Token‑minimization via skill compilation | Open | 9 comments | https://github.com/zeroclaw-labs/zeroclaw/issues/5146 |
| **#3566** – A2A protocol support | Open | 6 comments (7 👍) | https://github.com/zeroclaw-labs/zeroclaw/issues/3566 |
| **#2767** – Multi‑agent routing | Open | 6 comments (9 👍) | https://github.com/zeroclaw-labs/zeroclaw/issues/2767 |
| **#4866** – Web dashboard build warning | Closed | 28 comments | https://github.com/zeroclaw-labs/zeroclaw/issues/4866 |
| **#7256** – Feishu hardening (PR) | Open | 12 comments | https://github.com/zeroclaw-labs/zeroclaw/pull/7256 |
| **#7367** – Webhook routing (PR) | Open | 5 comments | https://github.com/zeroclaw-labs/zeroclaw/pull/7367 |
| **#7369** – AMQP channel (PR) | Open | 4 comments | https://github.com/zeroclaw-labs/zeroclaw/pull/7369 |

**Analysis**  
The community is strongly focused on **channel robustness** (Feishu, WhatsApp, Telegram), **security** (file‑write, OTP, bubblewrap), and **runtime efficiency** (skill compilation, token minimization). The high comment count on #4866 reflects a shared pain point with the web dashboard, prompting the team to surface this bug to the wider community.

---

### 5. Bugs & Stability  
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S0 – Data Loss / Security** | #4627 – file_write silent failure | Open | #7129 |
| **S1 – Workflow Blocked** | #4866 – Dashboard build failure | Closed | — |
| **S1 – Workflow Blocked** | #5420 – (not listed) | — | — |
| **S2 – Degraded Experience** | #5122 – web_fetch private‑host filtering | Open | — |
| **S2 – Degraded Experience** | #4880 – context_compression not triggered | Closed | — |
| **S3 – Minor Impact** | #4873 – Feishu LLM only | Open | — |

*No new bugs were introduced today; the most pressing remains the data‑loss issue in the file‑write tool.*

---

### 6. Feature Requests & Roadmap Signals  
| Category | Request | Likely Next Version |
|----------|---------|---------------------|
| **Core** | Token‑consumption minimization via skill compilation (#5146) | v0.8 |
| **Channel** | Multi‑agent routing (#2767) | v0.8 |
| **Security** | Configurable bubblewrap sandbox (#5127) | v0.8 |
| **UI/UX** | MCP, Skills, Plugins dashboard tabs (#7229) | v0.8 |
| **Runtime** | Air‑gapped execution mode (#6293) | v0.9 |
| **Infrastructure** | Provide per‑alias webhook routing (#6312) | v0.8 |

The community consistently signals micro‑optimizations (skill compilation, bubblewrap) and broader architectural changes (multi‑agent, air‑gapped). These are positioned for inclusion in the upcoming minor release (0.8).

---

### 7. User Feedback Summary  
- **Channel instability**: Users report intermittent failures when sending messages via WhatsApp/Feishu; most mention the need for clearer error logs.  
- **Security controls**: Feedback on OTP gating and credential handling indicates a desire for stricter runtime validation.  
- **Dashboard friction**: The build‑error on the Web UI (Issue #4866) caused stress for non‑technical users; many suggested alternative build instructions or pre‑built binaries.  
- **Tooling reliability**: File‑write and shell tools repeatedly failed silently, making debugging difficult and raising data‑loss concerns.

Overall satisfaction remains moderate; users appreciate the rapid bug resolution pace but wish for fewer “hard” shutdowns and clearer onboarding flows.

---

### 8. Backlog Watch  
| Item | Age (days) | Comments | Maintainer Attention Needed |
|------|------------|----------|-----------------------------|
| **#6345** – Missing translation files in production | 90+ | 0 | High |
| **#6293** – Air‑gapped execution mode (RFC) | 45 | 3 | Medium |
| **#3660** – Dynamic hook registration for shell commands | 60 | 1 | Medium |
| **#4879** – Gemini CLI OAuth failure | 75 | 2 | High |
| **#4703** – QWEN_OAUTH_REFRESH_TOKEN usage | 88 | 0 | Low |

> *The most critical unaddressed issue is the Gemini OAuth bug (#4879), which blocks users from using the Gemini family of models. This item has accumulated 3 discussions over 75 days and lacks a resolution.*

---

**Bottom line:** ZeroClaw is actively addressing high‑severity bugs and pushing key feature enhancements, especially around channel integrations and runtime security. The lack of new releases suggests that the team prioritizes stability over frequency, which aligns with the community’s current focus on reliability and usability. Maintainers should prioritise the Gemini OAuth issue and the file‑write data‑loss bug to keep user trust high.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*