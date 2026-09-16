# OpenClaw Ecosystem Digest 2026-09-16

> Issues: 478 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-16 02:25 UTC

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

# OpenClaw Project Digest — 2026-09-16

---

## 1. Today's Overview

OpenClaw is experiencing exceptionally high development velocity today: **478 issues** were updated (304 active, 174 closed) and **500 pull requests** were touched (332 open, 168 merged/closed). Zero new releases were published. The project's maintainer core — particularly user `steipete` — is deeply engaged across dozens of simultaneous PRs spanning gateway, agents, CLI, UI, and infrastructure. The issue-to-PR ratio (~1:1) suggests the community is actively both reporting and contributing fixes. Activity is concentrated around session-state reliability, Gateway stability, and update-path fixes, with a notable cluster of high-severity memory-leak and crash-loop issues driving urgent attention.

---

## 2. Releases

**No new releases published today.** The project is currently operating across `2026.9.4` (stable), `2026.9.3`, and `2026.9.2` lines, with multiple open issues explicitly calling out regressions introduced in the `2026.9.2`–`2026.9.4` window. The absence of a fresh release, combined with numerous "beta release blocker" labels on open Issues, suggests the next minor/patch release is likely imminent and focused on stability.

---

## 3. Project Progress

### Recently Merged/Closed PRs (notable):
| PR | Summary | Status |
|---|---|---|
| [#149574](https://github.com/openclaw/openclaw/pull/149574) | fix(clickclack): await durable discussion identity | ✅ Merged |
| [#149523](https://github.com/openclaw/openclaw/pull/149523) | fix: stabilize transcript shutdown tests under load | ✅ Merged |
| [#149404](https://github.com/openclaw/openclaw/pull/149404) | improve(sessions): speed up searches in cold session stores | ✅ Merged |
| [#149496](https://github.com/openclaw/openclaw/pull/149496) | perf(sessions): reuse validated transcript root policy | 🔄 Open (likely merged) |
| [#149405](https://github.com/openclaw/openclaw/pull/149405) | fix(chat): show saved interrupted replies only once | 🔄 Open |
| [#149505](https://github.com/openclaw/openclaw/pull/149505) | fix(ui): stop closed catalog panes from loading history | 🔄 Open |

### Key Advancements:
- **Session management**: Multiple PRs optimize transcript root policy, cold-store search, saved-prompt reads, and cleanup reporting — indicating a major session-infrastructure refactor underway.
- **Update reliability**: PRs #149598 and #149596 address database write contention and cgroup-v1 admission during `openclaw update`, directly targeting recent update-failure reports.
- **Gateway stability**: Deferred config reload isolation (#146913), CPU profile preservation (#149597), and cron skill-review responsiveness (#149600) all address Gateway robustness.
- **Agent tooling**: `sessions_spawn` agentId schema constraint (#149568), async stdout consumers (#149442), and async scoped session access (#149599) modernize agent primitives.

### Closed Issues (resolution highlights):
- **#80520** — Telegram silent message drops (resolved, 3 👍)
- **#148866** — Gateway restart loop on `gateway.bind=lan` (resolved)
- **#145152** — Stuck-session recovery misreporting (resolved)
- **#123326** — Multi-agent Codex migration crash loop (resolved)
- **#148614** — Runtime verification update failure (resolved)
- **#60602** — Per-Agent Bedrock cost attribution (resolved)

---

## 4. Community Hot Topics

### Top Issues by Engagement (comment count):

| Issue | Comments | Severity | Topic |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 40 | 🦞 Diamond Lobster | Text between tool calls leaks to messaging channels |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 30 | 🦪 Silver Shellfish | Zombie/unreaped child process accumulation |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 25 | 🦪 Silver Shellfish | Gateway RSS grows 350MB→15.5GB, OOM crashes |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 24 | 🦪 Silver Shellfish | Codex PreToolUse hooks spawn CPU-bound processes |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 20 | 🦞 Diamond Lobster | Synchronous persistence blocks Gateway event loop |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 19 | 🐚 Platinum Hermit | Embedded prompt cache breaks across boundaries |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | 17 | 🦞 Diamond Lobster | MCP server init timeout crashes Gateway |
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | 14 | 🦞 Diamond Lobster | Messages dropped during active reply run |

### Top Active PRs by Maintainer Engagement:
- **[#149529](https://github.com/openclaw/openclaw/pull/149529)** (XL, 🦪 Silver Shellfish) — Session history privacy & recall fixes — closes #118437
- **[#149411](https://github.com/openclaw/openclaw/pull/149411)** (XL) — Release tooling QA imports restoration
- **[#149592](https://github.com/openclaw/openclaw/pull/149592)** (S, 🐚 Platinum Hermit) — Cold declaration build speedup
- **[#149587](https://github.com/openclaw/openclaw/pull/149587)** (L) — Source-only sessions free of dependency installs

### Underlying Needs Analysis:
The community's most urgent needs cluster around three themes:
1. **Gateway reliability under load** — Memory leaks, crash loops, and restart cycles dominate the diamond-lobster-rated issues
2. **Message delivery integrity** — Dropped, duplicated, or delayed messages across multiple channels (Telegram, iMessage, Discord)
3. **Update/installation trust** — Multiple npm-update failure reports are eroding confidence in the upgrade path

---

## 5. Bugs & Stability

### Critical (P0/P1, Diamond/Platinum rated):

| Issue | Severity | Bug Type | Summary | Fix PR? |
|---|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 🦪 Silver Shellfish, P1 | Memory leak | RSS 350MB→15.5GB over days, OOM crashes | No |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | P0 | Crash loop | Codex hooks spawn 100%+ CPU processes | No |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | 🦞 Diamond Lobster, P1 | Crash | MCP server init timeout → unhandled rejection | No |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 🦪 Silver Shellfish, P1 | Regression | Reply lost: "no active tool authority snapshot" | No |
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | 🦞 Diamond Lobster, P1 | Regression | Messages dropped during active reply run (2026.9.2) | No |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | P1 | Data loss | SQLite WAL grows to 1.4–2.8GB, blocks startup | No |
| [#148866](https://github.com/openclaw/openclaw/issues/148866) | P0 | Crash loop | `gateway.bind=lan` permanent restart loop | Resolved ✅ |
| [#146637](https://github.com/openclaw/openclaw/issues/146637) | P2 | Bug | npm update fails

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-09-16  
**Scope:** 11 projects analyzed from community digest summaries

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape in September 2026 is characterized by rapid maturation and increasing divergence into distinct niches. Core projects like OpenClaw and ZeroClaw are experiencing high-velocity development with hundreds of daily PRs and issues, focusing on gateway reliability, session management, and inter-agent communication protocols. Mid-tier projects like NanoClaw and NanoBot are shipping polished releases with user-facing features (terminal clients, delivery modes, channel expansion), while smaller projects (Moltis, ZeptoClaw) remain in maintenance or dependency-update phases. A clear trend toward multi-agent orchestration, provider abstraction, and cross-platform channel support is emerging, with A2A (Agent-to-Agent) protocols and durable handoff mechanisms becoming common technical priorities. The ecosystem is simultaneously grappling with stability debt—memory leaks, crash loops, and update failures are the most engaged issues across projects—indicating a community maturing past feature velocity toward operational reliability.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Latest Release | Health Score |
|---------|-------------|-----------|----------------|--------------|
| **OpenClaw** | 478 (304 open, 174 closed) | 500 (332 open, 168 merged) | 2026.9.4 (stable) | ⚠️ High velocity, stability concerns |
| **ZeroClaw** | 50 updated | 50 touched | None | 🟢 Very high activity, architectural |
| **CoPaw** | 25 updated | 50 touched (25 merged) | None | 🟢 Very high, Hub transition |
| **NanoClaw** | 5 touched | 40 touched (21 merged) | None | 🟢 Strong, high merge rate |
| **LobsterAI** | 3 modified | 30 touched (10 open, 20 closed) | v2026.8.1 | 🟡 Moderate, maintenance |
| **NanoBot** | 3 updated | 21 touched (8 open, 13 merged) | v0.3.5 | 🟢 Good, release-focused |
| **Moltis** | 1 updated | 1 touched | None | 🟡 Stable, minimal |
| **ZeptoClaw** | 0 | 18 (all Dependabot, open) | None | 🟡 Maintenance-only |
| **NullClaw** | 0 | 0 | N/A | ⚪ Inactive |
| **IronClaw** | 0 | 0 | N/A | ⚪ Inactive |
| **TinyClaw** | 0 | 0 | N/A | ⚪ Inactive |
| **Hermes** | — | — | — | ⚪ Summary failed |

---

## 3. OpenClaw's Position

OpenClaw serves as the **de facto reference implementation** in this ecosystem, with the highest issue/PR volume and the most engaged maintainer core (notably `steipete`). Its advantages include a mature gateway architecture, extensive session-management infrastructure (transcript root policy, cold-store search optimization), and the largest community contributing both bug reports and fixes. The issue-to-PR ratio (~1:1) indicates a healthy bidirectional contribution loop.

However, its high count of open high-severity issues—memory leaks (RSS 350MB→15.5GB), crash loops (Codex hooks, `gateway.bind=lan`), message drops during active reply runs, and update-path failures—suggests **stability is lagging behind feature velocity**. Compared to peers, OpenClaw's technical approach is more monolithic (gateway-centric) rather than modular (plugin/WASM-based like ZeroClaw), and it lacks the multi-tenant focus seen in CoPaw's Hub transition or the delivery-mode abstraction in NanoClaw. Community size is the largest, but the unresolved bug count (especially P0/P1 Diamond Lobster issues) may erode trust if not addressed in an imminent release.

**Key differentiator:** OpenClaw's session infrastructure is the most mature in the ecosystem, but it is also the most burdened by technical debt.

---

## 4. Shared Technical Focus Areas

Multiple projects are converging on similar technical needs, indicating ecosystem-wide priorities:

| Focus Area | Projects Involved | Specific Needs |
|------------|-------------------|----------------|
| **Session & transcript reliability** | OpenClaw, NanoBot, LobsterAI | Transcript root policy, cold-store search, file-read dedup scoping, transcript replay validation, token truncation fixes |
| **Gateway / agent stability under load** | OpenClaw, ZeroClaw, NanoClaw | Memory leak remediation, crash loop prevention, WASM plugin load verification, Codex WebSocket idle retry, update cutover drain deadlock resolution |
| **Provider abstraction & contracts** | NanoClaw, ZeroClaw, Moltis | Provider tone contracts, auth proxy abstraction (Iron Proxy), endpoint body-parameter customization, runtime config mapping |
| **Inter-agent communication (A2A)** | ZeroClaw, NanoClaw, OpenClaw | A2A outbound client RFC, durable handoff ledger with receipts, multi-agent Codex migration, bounded bot hops |
| **Channel expansion & hardening** | NanoClaw, ZeroClaw, NanoBot | Voice (full-duplex), email (Proton, AgentMail), Mattermost auth, WhatsApp Markdown, XMPP, QQ/Feishu QR fixes, SSRF protection |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Technical Architecture |
|---------|--------------|--------------|----------------------|
| **OpenClaw** | Gateway-centric session infrastructure, broadest channel support | Power users, self-hosted agent runners | Monolithic gateway, SQLite-backed sessions, npm-based updates |
| **ZeroClaw** | WASM plugin system, A2A protocol, desktop integration, security governance | Enterprise / edge deployments requiring extensibility & auditability | Modular WASM plugins, egress governance, A2A wire model, desktop screen interaction |
| **NanoClaw** | Multi-agent orchestration, delivery modes (tools-only vs final-text), provider contracts | Teams running multiple agents across groups | Container-based agent isolation, durable handoff ledger, Slack A2A delivery |
| **NanoBot** | Developer UX (unified terminal/WebUI), Dream consolidation, lightweight scripting | Individual developers wanting a scriptable, lightweight agent | Python-based, native TUI in wheels, provider-agnostic tool system |
| **CoPaw / QwenPaw** | Multi-tenant Hub (v2.2.0), console UI, team collaboration | Organizations deploying agents at scale with team workspaces | Multi-tenant architecture, workbench shell, custom themes, MCP integration |
| **LobsterAI** | OpenClaw compatibility, enterprise memory extraction, ad management | Organizations already in the OpenClaw ecosystem | OpenClaw integration layer, cowork memory extractor, team config templates |
| **Moltis** | OpenAI endpoint customization, build performance | Niche; developers extending to proprietary OpenAI deployments | Rust/Cargo-based, Docker build caching, per-model body parameter config |
| **ZeptoClaw** | Dependency maintenance only | Inactive / maintenance | JavaScript/Rust, Dependabot-managed |

---

## 6. Community Momentum & Maturity

**Rapid iteration tier** (hundreds of daily touches, active maintainer engagement):
- **OpenClaw**: Highest velocity, but significant unresolved stability debt (P0/P1 issues without fix PRs).


---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑09‑16**  

---

### 1. Today's Overview  
The repository showed **moderate activity** in the last 24 h: 3 issues were updated (all open) and 21 pull‑requests were touched (8 still open, 13 merged/closed). A new release **v0.3.5** was shipped, delivering the promised “workbench in the terminal” and unified CLI/WebUI experience. Overall health is good – the team is actively closing bugs and polishing the release, while a handful of longer‑running feature and bug PRs remain awaiting review.

---

### 2. Releases  
**v0.3.5** (released 2026‑09‑16)  
- **Highlights** – Introduces a native terminal client (`nanobot`) alongside the existing `nanobot webui`; both share the same backend so conversations can be continued seamlessly across terminal, browser, and chat apps.  
- **No breaking changes** were noted in the release notes; the version bumps the Python distribution to 0.3.5 and adds a release‑checklist for future shipments.  
- **Migration** – Users upgrading from 0.3.4 can simply reinstall (`pip install -U nanobot`); configuration files remain compatible.

[Release v0.3.5](https://github.com/HKUDS/nanobot/releases/tag/v0.3.5)

---

### 3. Project Progress (Merged/Closed PRs today)  

| PR | Title | Area | What it fixes / adds |
|----|-------|------|----------------------|
| [#5782](https://github.com/HKUDS/nanobot/pull/5782) | fix(dream): enforce configured iteration limit | Dream/agent loops | Restores `agents.defaults.dream.maxIterations` (default 15) so scheduled Dream runs respect the configured limit instead of falling back to the global 200‑tool‑call cap. |
| [#5787](https://github.com/HKUDS/nanobot/pull/5787) | build: bundle native TUI in platform wheels | Packaging | Ship the native terminal UI inside PyPI wheels, removing the need for a first‑run GitHub download or separate Bun install. |
| [#5785](https://github.com/HKUDS/nanobot/pull/5785) | chore(release): prepare v0.3.5 | Release process | Version bump, source‑only fallback, and release‑checklist preparation (no tag/PyPI publish yet). |
| [#5786](https://github.com/HKUDS/nanobot/pull/5786) | refactor(webui): animate segmented control indicator | WebUI UI | Replaces per‑segment selected backgrounds with a moving indicator, adds overshoot transition and reduced‑motion support. |
| [#5783](https://github.com/HKUDS/nanobot/pull/5783) | fix(providers): preserve assistant content with tool calls | Provider logic | Stops stripping assistant `content` from history messages that also contain `tool_calls`; removes unused compatibility setting. |
| [#5775](https://github.com/HKUDS/nanobot/pull/5775) | fix(tools): scope file‑read dedup to model context | File tool deduplication | Ensures `read_file` deduplication only applies when the original read result is still present in the current model request. |
| [#5774](https://github.com/HKUDS/nanobot/pull/5774) | fix(memory): recover archive tool calls before raw fallback | Memory/retry logic | Recovers archive requests that unexpectedly emit tool calls by returning a non‑executing result and retrying once. |
| [#5728](https://github.com/HKUDS/nanobot/pull/5728) | perf: reduce streaming text processing and classic CLI redraws | Performance | Skips control‑tag parsing when text contains none, avoiding repeated Markdown re‑parsing on streamed replies. |
| [#5757](https://github.com/HKUDS/nanobot/pull/5757) | fix(session): search older pages of persisted conversation history | Session search | Fixes `search_sessions` and filtered `read_session` to consider older transcript pages in long WebUI conversations. |
| [#5768](https://github.com/HKUDS/nanobot/pull/5768) | fix(feishu): use /page/cli verification URL for QR onboarding | Feishu channel | Switches to the `/page/cli` verification endpoint, resolving “Link expired” QR login failures. |
| [#5697](https://github.com/HKUDS/nanobot/pull/5697) | fix(qq): protect inbound attachment downloads from SSRF | QQ channel security | Validates attachment URLs, normalizes protocol‑relative URLs, disables redirects, and accepts only HTTP 200 responses. |
| … | (additional closed PRs) | — | Various minor bug‑fixes, test updates, and documentation tweaks. |

*Note: Comment counts were not provided for most PRs; the above list reflects the merged/closed set.*

---

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions | Summary & Underlying Need |
|------|------|----------------------|---------------------------|
| [#5781](https://github.com/HKUDS/nanobot/issues/5781) | Issue (open) | **3 comments** | Dream consolidation loops re‑reading the same files dozens of times because `dream.maxIterations` is deprecated/ignored, causing runs of 25‑111 min. Users need a reliable way to bound Dream iterations to prevent runaway agent loops. |
| [#5784](https://github.com/HKUDS/nanobot/issues/5784) | Issue (open) | 1 comment | QQ channel spams “Compressing context…” / “Context compacted.” as normal chat messages during idle auto‑compaction, creating noise. Users want these notices to be hidden or collapsible. |
| [#5788](https://github.com/HKUDS/nanobot/issues/5788) | Issue (open) | 0 comments | Announcement of the v0.3.5 release – serves as a community touchpoint but no discussion yet. |
| PRs with the highest comment count (none recorded) – all show “undefined” comments, indicating low discussion volume today. |

**Takeaway:** The most engaged conversation revolves around the Dream iteration bug (#5781), indicating that users heavily rely on scheduled consolidation runs and are frustrated by uncontrolled loops. The QQ notification issue (#5784) also signals a desire for cleaner channel output.

---

### 5. Bugs & Stability (reported today)  

| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | [#5781](https://github.com/HKUDS/nanobot/issues/5781) – Dream loops | Dream consolidation ignores `maxIterations`, leading to 25‑111 min runs and excessive tool calls. | Fixed by PR [#5782](https://github.com/HKUDS/nanobot/pull/5782) (merged). |
| **Medium** | [#5784](https://github.com/HKUDS/nanobot/issues/5784) – QX compaction notices | Auto‑compaction sends noisy messages to QQ channel. | Addressed by PR [#5780](https://github.com/HKUDS/nanobot/pull/5780) (open) – makes notices invisible while retaining them for manual `/compact`. |
| **Low** | (none reported today) | – | – |

All high‑impact bugs have corresponding merged fixes; the medium QQ issue awaits reviewer action.

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Associated PR/Issue | Current State | Likelihood for Next Release |
|---------|---------------------|---------------|-----------------------------|
| **Add copy_file / move_file tools** | PR [#5626](https://github.com/HKUDS/nanobot/pull/5626) (open) | Open since 2026‑09‑01, no comments. | Medium – useful filesystem primitive; may be prioritized after stabilization. |
| **Expose stable per‑invocation tool context** | PR [#5750](https://github.com/HKUDS/nanobot/pull/5750) (open) | Open since 2026‑09‑12. | High – improves tool implementation ergonomics; aligns with recent tool‑related fixes. |
| **Add aimlapi.com as OpenAI‑compatible gateway** | PR [#5666](https://github.com/HKUDS/nanobot/pull/5666) (open) | Open since 2026‑09‑04. | Medium – expands provider ecosystem; maintainers may wait for more community demand. |
| **Search/filter in provider pickers (WebUI Settings)** | PR [#5776](https://github.com/HKUDS/nanobot/pull/5776) (open) | Open since 2026‑09‑15. | High – directly improves UX for users with many providers; low risk. |
| **Animate segmented control indicator (WebUI)** | PR [#5786] (merged) | Already merged in v0.3.5. | Delivered. |
| **Bundle native TUI in wheels** | PR [#5787] (merged) | Already merged. | Delivered. |

**Roadmap hint:** The team is focusing on polishing core agent reliability (Dream limits, file‑dedup, session search) and improving platform distribution (wheel bundling). UI enhancements (provider search, animated controls) are landing quickly, suggesting the next minor release will continue UX refinements while stabilizing the agent loop and tool‑execution pathways.

---

### 7. User Feedback Summary  

- **Pain points**  
  - Uncontrolled Dream loops causing long runs and excessive file reads (issue #5781).  
  - noisy auto‑compaction messages in QQ channel (issue #5784).  
  - Desire for basic file manipulation primitives (`copy_file`, `move_file`) to avoid chaining reads/writes (PR #5626).  
  - Need for better discoverability when configuring many provider options (PR #5776).  

- **Positive signals**  
  - Users appreciate the unified terminal/WebUI experience highlighted in the v0.3.5 release announcement.  
  - Recent fixes (file‑read dedup scoping, session search, Feishu QR login) address long‑standing usability hiccups.  
  - Performance improvements in streaming text processing are noted as reducing CPU load on long replies.  

Overall satisfaction appears to be rising with each incremental polish, but core reliability (Dream iteration handling) remains a critical user concern that the team is actively addressing.

---

### 8. Backlog Watch (Long‑unanswered important items)  

| Item | Age (as of 2026‑09‑16) | Type | Why it needs attention |
|------|------------------------|------|------------------------|
| PR [#5666](https://github.com/HKUDS/nanobot/pull/5666) – add aimlapi.com provider | **12 days** | Feature / New provider | Expands model choice; waiting for maintainer review/testing. |
| PR [#5626](https://github.com/HKUDS/nanobot/pull/5626) – copy_file & move_file | **15 days** | Feature / Filesystem tools | Frequently requested; low‑risk addition. |
| PR [#5750](https://github.com/HKUDS/nanobot/pull/5750) – expose tool invocation context | **4 days** | Feature / Tool ergonomics | Improves tool writer experience; aligns with recent tool‑fixes. |
| PR [#5748](https://github.com/HKUDS/nanobot/pull/5748) – persist partial tool progress at batch boundaries | **4 days** | Bug / Reliability | Prevents loss of completed tool work on crashes; important for robustness. |
| Issue [#5784](https://github.com/HKUDS/nanobot/issues/5784) – QQ compaction notices | **1 day** (but still open) | Bug / UX | Easy fix (PR #5780 open) – needs merge to silence noisy channel output. |
| Issue [#5781](https://github.com/HKUDS/nanobot/issues/5781) – Dream loop | **1 day** | Bug / Reliability | Already fixed by PR #5782 (merged); can be closed. |

**Actionable insight:** The oldest open PRs (#5666, #5626) represent low‑risk, high‑value enhancements that have lingered without discussion. A quick triage or a request for additional testing could move them forward. The QQ compaction notice issue has a ready fix (PR #5780) awaiting review — merging it would immediately alleviate a noted annoyance.

--- 

*End of digest.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-16

## 1. Today's Overview
NanoClaw shows **high velocity** with 40 PRs updated and 5 issues touched in the last 24 hours. The merge rate is strong (21 closed/merged PRs), indicating active integration. No new release was cut, but the pipeline is full: features around **agent delivery modes**, **channel expansion** (Voice, Proton Mail, AgentMail, Mattermost), **provider auth refactors** (Iron Proxy, OpenCode), and **observability** (OpenTelemetry) are all in flight. Two open issues (#3338, #3828) highlight reliability gaps in the Codex WebSocket path and the update cutover drain logic — both are infrastructure-critical and unassigned.

## 2. Releases
**No new releases today.** The last published version remains prior to 2026-09-16. With 21 PRs merged today, a release candidate is likely imminent — watch for a `v2.x` tag once the current batch (especially #3813 durable handoff, #3832 perf, #3827/#3826 provider tone) lands on `main`.

## 3. Project Progress — Merged/Closed PRs (21 today)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#3813](https://github.com/qwibitai/nanoclaw/pull/3813) | channels, core, ncl-cli, repo-maint | Durable handoff ledger + mission control; structured Slack A2A delivery, bounded bot hops, receipts | **Major** — new safety/correctness layer for multi-agent handoffs |
| [#3830](https://github.com/qwibitai/nanoclaw/pull/3830) | configuration, core | Webhook tests: kernel-allocated ports to eliminate `EADDRINUSE` flakes | **Stability** — CI reliability |
| [#3829](https://github.com/qwibitai/nanoclaw/pull/3829) | core, sessions | Cross-session echo fan moved off wake path; bounded to hot set | **Perf** — wake latency no longer scales with sibling sessions |
| [#3827](https://github.com/qwibitai/nanoclaw/pull/3827) | agent-runner, providers | Codex: adopt provider tone contract (friendly/personality) | **Architecture** — provider contract normalization |
| [#3826](https://github.com/qwibitai/nanoclaw/pull/3826) | agent-runner, providers | Providers declare default tone + settings mapping in runtime contract | **Architecture** — extensible provider config |
| [#3822](https://github.com/qwibitai/nanoclaw/pull/3822) | repo-maint | Ignore `.worktrees/` in `.gitignore` | **DX** — clean `git status` for worktree users |
| [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) (closed via PR) | setup | systemd misdetection on headless Linux fixed | **Setup** — unblocks SSH/non-login installs |
| [#3354](https://github.com/qwibitai/nanoclaw/issues/3354) (closed via PR) | setup | 0-byte channel files on failed `git-show`; `onecli` PATH ordering | **Setup** — robustness for non-login shells |
| [#3684](https://github.com/qwibitai/nanoclaw/issues/3684) (closed via PR) | update | `update-nanoclaw` snapshot now dereferences symlinks in `data/`/`groups/` | **Data integrity** — prevents silent corruption on rollback |

**Other merged PRs** (titles only): #3724 (retired model id), #3799 (Signal attachments via session inbox), plus 11 additional fixes/refactors across channels, skills, and core.

## 4. Community Hot Topics — Most Active Items
| Item | Type | Comments | Signals |
|------|------|----------|---------|
| [#3813](https://github.com/qwibitai/nanoclaw/pull/3813) | PR | (high) | **Durable handoff & mission control** — core-team design review; affects Slack A2A wiring, receipts, hop limits. Indicates push for production-grade multi-agent orchestration. |
| [#3781](https://github.com/qwibitai/nanoclaw/pull/3781) | PR | (high) | **Tools-only delivery enforcement** — addresses providers that can’t reliably emit final-text envelopes. Critical for privacy-sensitive groups. |
| [#3713](https://github.com/qwibitai/nanoclaw/pull/3713) | PR | (high) | **Per-agent-group delivery mode config** — migration 26 adds `container_configs.delivery_mode`. Foundation for #3781. |
| [#3764](https://github.com/qwibitai/nanoclaw/pull/3764) | PR | (high) | **`/add-voice` full-duplex browser calls** — OpenAI GPT-Live-1 + agent memory/tools. New interaction modality; skill + native adapter. |
| [#3338](https://github.com/qwibitai/nanoclaw/issues/3338) | Issue | 3 | **Codex WebSocket idle retry hidden** — 10-min silent stall. User-visible reliability hole; needs bridge between Codex CLI retry and NanoClaw timeout. |
| [#3828](https://github.com/qwibitai/nanoclaw/issues/3828) | Issue | 0 (new) | **Update cutover drain deadlock** — host stopped before containers it waits on. Blocks zero-downtime updates; architectural fix needed. |

**Underlying needs**: (1) **Reliability at scale** — WebSocket, update drain, handoff durability; (2) **Provider flexibility** — tone contracts, tools-only delivery, auth abstraction; (3) **Channel breadth** — voice, email (Proton, AgentMail), Mattermost hardening.

## 5. Bugs & Stability — Today’s Reports
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#3828](https://github.com/qwibitai/nanoclaw/issues/3828) Update cutover drain can never succeed — host stopped before containers | Open | No |
| **High** | [#3338](https://github.com/qwibitai/nanoclaw/issues/3338) Codex WebSocket idle retry hidden until 10-min turn timeout | Open | No |
| **Medium** | [#3684](https://github.com/qwibitai/nanoclaw/issues/3684) `update-nanoclaw` snapshots symlinks, not content (data/groups symlinked) | **Closed** | Yes (merged) |
| **Medium** | [#3354](https://github.com/qwibitai/nanoclaw/issues/3354) Setup leaves 0-byte channel files; `onecli` PATH race | **Closed** | Yes (merged) |
| **Low** | [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) systemd misdetected on headless Linux | **Closed** | Yes (merged) |

**Note**: The two high-severity bugs (#3828, #3338) are **open with no fix PR yet** — they block reliable updates and Codex interactions respectively. Maintainer triage is needed.

## 6. Feature Requests & Roadmap Signals
| Feature | Evidence | Likelihood (Next Version) |
|---------|----------|---------------------------|
| **Durable agent handoff / mission control** | #3813 merged | ✅ **Certain** — already merged |
| **Per-group delivery mode (tools-only / final-text)** | #3713 (config) + #3781 (enforcement) open | ✅ **High** — both core-team, near merge |
| **Provider tone contract (default + mapping)** | #3826 + #3827 merged | ✅ **Certain** — landed |
| **Voice channel (full-duplex browser)** | #3764 open, skill + adapter | 🟡 **Medium** — depends on GPT-Live-1 stability |
| **Email channels: Proton Mail Bridge / AgentMail** | #3726, #3743 open | 🟡 **Medium** — Proton needs ARM bridge; AgentMail is API-only |
| **Mattermost callback auth hardening** | #3823 + #3831 open | ✅ **High** — security fix + migration docs |
| **OpenTelemetry tracing skill** | #3796 open | 🟡 **Medium** — opt-in, low risk |
| **Keenable MCP tool skill** | #3697 open | 🟢 **Low** — niche, community-contributed |
| **Iron Proxy auth for OpenCode** | #3824 (refactor) + #3825 (feat) open | ✅ **High** — core-team, unblocks provider auth abstraction |

**Prediction**: Next release will ship **durable handoff**, **delivery modes**, **provider tone contract**, **Mattermost auth fix**, and **Iron Proxy auth**. Voice/email channels may follow in a subsequent minor.

## 7. User Feedback Summary
| Pain Point | Source | Context |
|------------|--------|---------|
| **10-minute silent stall on Codex WebSocket idle** | [#3338](https://github.com/qwibitai/nanoclaw/issues/3338) | Codex CLI retries at 5 min, but `codex app-server` doesn’t surface failure → NanoClaw waits full turn timeout. Affects any Telegram/simple request. |
| **Update cutover deadlocks on running agent containers** | [#3828](https://github.com/qwibitai/nanoclaw/issues/3828) | Host stopped first, but host is what stops idle containers → drain polls forever. Blocks automated updates. |
| **Headless/SSH install breaks (systemd, PATH, git-show)** | [#1981](https://github.com/qwibitai/nanoclaw/issues/1981), [#3354](https://github.com/qwibitai/nanoclaw/issues/3354) | Setup assumes interactive login shell; fails on clean boxes over non-login SSH. Now fixed. |
| **Symlinked `data/`/`groups/` corrupts update snapshots** | [#3684](https://github.com/qwibitai/nanoclaw/issues/3684) | `update-nanoclaw` captured symlinks, not content → rollback restores stale links. Fixed. |
| **Mattermost action callbacks unauthenticated** | [#3823](https://github.com/qwibitai/nanoclaw/pull/3823) | External button integrations could receive adapter shared secret. Fix + migration guide in flight. |
| **Webhook port test flakes (`EADDRINUSE`)** | [#3830](https://github.com/qwibitai/nanoclaw/pull/3830) | Random port selection collided; kernel allocation resolves. CI stability win. |

**Satisfaction signals**: Users contribute skills (Voice, Keenable, Proton, AgentMail, Telemetry) and provider integrations (OpenCode/Iron) — indicates **extensibility is working**. The setup/install fixes (#1981, #3354) show responsiveness to onboarding friction.

## 8. Backlog Watch — Stale/Needy Items
| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#3338](https://github.com/qwibitai/nanoclaw/issues/3338) Codex WebSocket idle retry hidden | 29 days (created 2026-08-18) | User-facing reliability; 10-min silent failure | **Triage + fix PR** — bridge Codex CLI retry to NanoClaw timeout |
| [#3828](https://github.com/qwibitai/nanoclaw/issues/3828) Update cutover drain deadlock | 1 day (new) | Blocks zero-downtime updates entirely | **Urgent design review** — invert stop order or make host drain before stop |
| [#3764](https://github.com/qwibitai/nanoclaw/pull/3764) `/add-voice` full-duplex | 5 days | New modality; large skill + adapter | **Core-team review** — test GPT-Live-1 stability, audio pipeline |
| [#3726](https://github.com/qwibitai/nanoclaw/pull/3726) Proton Mail Bridge adapter | 10 days | Email channel gap; ARM binary missing | **Evaluate ARM support** or document limitation |
| [#3743](https://github.com/qwibitai/nanoclaw/pull/3743) AgentMail adapter | 8 days | Managed email inbox via API (no MX) | **Review** — simpler than Proton, good alternative |
| [#3796](https://github.com/qwibitai/nanoclaw/pull/3796) OpenTelemetry tracing skill | 3 days | Observability foundation | **Low risk** — merge if tests pass |
| [#3697](https://github.com/qwibitai/nanoclaw/pull/3697) Keenable MCP tool skill | 15 days | Community contribution; niche | **Maintainer bandwidth** — approve or delegate |

---

**Health Score**: 🟢 **Strong** — high merge throughput, architectural improvements landing, active community contributions. **Risk**: Two high-severity open bugs (#3338, #3828) with no fix PRs; they should be prioritized before next release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest - 2026-09-16

## 1. Today's Overview

LobsterAI shows moderate activity on 2026-09-16 with 30 pull requests updated (10 open, 20 closed/merged) and 3 issues modified in the last 24 hours. While there have been no new releases this period, the codebase has seen significant maintenance efforts focused on stability fixes, UI refinements, and feature enhancements. The most notable progress includes closing several critical bugs related to URL handling, token limits, and ad display, alongside new feature additions like persistent ad-hiding settings and improved skill management.

## 2. Releases

No new releases were published in the 2026-09-16 window. The latest stable version appears to remain at v2026.8.1, with recent changes concentrated in the OpenClaw integration layer and cowork memory extraction modules. Existing releases have been maintained without version bumps, indicating a focus on incremental stabilization over major version increments.

## 3. Project Progress

**Open PRs (10):**
- **#2374** - Adds permanent setting to hide sidebar ad banner (addresses #2342) - [PR #2374](https://github.com/netease-youdao/LobsterAI/pr/2374)
- **#2686** - Fixes workspace dependency packing in runtime build - [PR #2686](https://github.com/netease-youdao/LobsterAI/pr/2686)
- **#2687** - Release/2026.9.15 (maintenance release) - [PR #2687](https://github.com/netease-youdao/LobsterAI/pr/2687)
- **#2685** - Fixes OpenClaw runtime dependency mismatch between patched workspace and @openclaw/ai - [PR #2685](https://github.com/netease-youdao/LobsterAI/pr/2685)
- **#2683** - OpenClaw compatibility repair for runtime consistency - [PR #2683](https://github.com/netease-youdao/LobsterAI/pr/2683)
- **#2684** - Fixes long session token truncation (output limited to 1 token) - [PR #2684](https://github.com/netease-youdao/LobsterAI/pr/2684)
- **#2682** - Validates historical transcript replay fields to prevent crashes - [PR #2682](https://github.com/netease-youdao/LobsterAI/pr/2682)
- **#2679** - Compatibility repair for post-upgrade gateway state - [PR #2679](https://github.com/netease-youdao/LobsterAI/pr/2679)
- **#2681** - Recovers invalid legacy dreaming state at startup - [PR #2681](https://github.com/netease-youdao/LobsterAI/pr/2681)
- **#2680** - Preserves model policy during config sync to prevent unnecessary writes - [PR #2680](https://github.com/netease-youdao/LobsterAI/pr/2680)
- **#1142** - Adds quick "create skill" functionality in skill management page - [PR #1142](https://github.com/netease-youdao/LobsterAI/pr/1142)
- **#1143** - Fixes icon inconsistency when creating agents (sidebar vs. My Agent page) - [PR #1143](https://github.com/netease-youdao/LobsterAI/pr/1143)
- **#1144** - Shows last run time in scheduled tasks and adds running state feedback - [PR #1144](https://github.com/netease-youdao/LobsterAI/pr/1144)
- **#1145** - Implements team configuration template export/import - [PR #1145](https://github.com/netease-youdao/LobsterAI/pr/1145)
- **#1146** - Fixes new agent not retrieving task records after creation - [PR #1146](https://github.com/netease-youdao/LobsterAI/pr/1146)
- **#1181** - Hides OpenClaw main agent sessions from the session list - [PR #1181](https://github.com/netease-youdao/LobsterAI/pr/1181)

**Closed PRs (20):** Multiple fixes spanning OpenClaw runtime compatibility, memory extraction testing, URL generation, and session management.

## 4. Community Hot Topics

The most actively discussed issues are:

- **#1149** ([CLOSED] [stale]) - Adding Vitest unit tests for `coworkMemoryExtractor` (previously uncovered memory extraction logic had zero test coverage) - [Issue #1149](https://github.com/netease-youdao/LobsterAI/issue/1149)
- **#1151** ([CLOSED] [stale]) - Fixed off-by-one error in `buildOpenAIChatCompletionsURL` for Google Gemini v1 base URLs - [Issue #1151](https://github.com/netease-youdao/LobsterAI/issue/1151)
- **#2342** ([OPEN] [stale]) - Persistent sidebar ads despite manual dismissal (still open) - [Issue #2342](https://github.com/netease-youdao/LobsterAI/issue/2342)

Top PRs by activity include #2374 (ad hiding toggle), #2686/#2687 (OpenClaw build fixes), and #2684/#2682 (long session and transcript replay stability).

## 5. Bugs & Stability

| Severity | Issue | Impact | Status |
|----------|-------|--------|--------|
| High | #1151 - Gemini URL path concatenation error | Generated malformed URLs for Google Gemini v1 | **Fixed** (PR #2686) |
| Medium | #2342 - Sidebar ads persist after dismissal | User experience friction | **Open** (no fix yet) |
| Medium | #1149 - Missing test coverage for memory extractor | Risk of regressions in core memory logic | **Addressed** (new test file added) |
| Medium | #2684 - Long session token truncation to 1 token | Empty responses, failure to produce meaningful output | **Fixed** (PR #2684) |
| Low | #2682 - Historical transcript replay field validation | Potential crashes when processing incomplete history blocks | **Fixed** (PR #2682) |

The most critical stability issue remains **#2342** regarding persistent ads, which has been open since July and requires a dedicated fix. Additionally, the token limit regression in long sessions (#2684) was successfully resolved.

## 6. Feature Requests & Roadmap Signals

Several features are gaining traction in recent PRs:

- **Ad Management** (#2374) - Permanent toggle to hide sidebar ads, directly addressing user frustration with #2342
- **Skill Management Enhancement** (#1142) - Quick "create skill" shortcut in the skill management interface
- **Task History Visibility** (#1144) - Displaying last execution timestamps in scheduled tasks and adding running state feedback
- **Configuration Templates** (#1145) - Export/import of team configuration templates for consistent multi-user setups
- **Session List Cleanup** (#1181) - Hiding internal OpenClaw main agent sessions from user-facing lists

These indicate a roadmap toward better user control, improved observability, and more streamlined configuration management.

## 7. User Feedback Summary

Users have expressed clear pain points:

- **Ad Persistence**: The most frequent complaint is that ads continue to appear even after manually clicking the close button. This affects user trust and experience, especially in the sidebar where ads are expected to be hidden.
- **Token Limit Regression**: Long conversations were being truncated to a single token, resulting in empty or non-responsive outputs. This significantly impacts productivity for extended interactions.
- **Task Tracking Gaps**: Newly created agents sometimes fail to retrieve their task records until other agents are switched away, leading to confusion about workload distribution.
- **UI Consistency**: Inconsistencies between the sidebar and "My Agent" pages regarding default icons (🦞 vs. 🤖) suggest opportunities for unified design standards.

Overall sentiment leans positive toward recent stability fixes, though the persistent ad issue remains a blocker for some users.

## 8. Backlog Watch

- **#2342** (Open, stale) - Sidebar ads persist despite dismissal. Requires immediate attention to improve user experience.
- **#1151** (Closed) - Gemini URL path fix completed; monitor for similar issues in future OpenClaw versions.
- **#1149** (Closed) - Vitest test suite added for coworkMemoryExtractor; ensures ongoing test coverage for critical memory logic.
- **#2684** (Closed) - Long session token truncation fixed; verify no regression in normal operation.
- **#1181** (Open) - Main agent session hiding implemented; confirm it doesn't break existing session discovery flows.

**Priority Action:** Address #2342 (persistent ads) as a top priority given its direct impact on user satisfaction and the lack of resolution despite multiple attempts.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-09-16

## 1. Today's Overview
Moltis remained stable with minimal activity today, recording one newly updated issue and one new pull request over the past 24 hours. There were no new releases published, indicating ongoing development without a version bump at this time. The single issue (#205) remains open and actively discussed, while the sole pull request (#1270) is still pending review. Overall project health appears steady, though the lack of merges suggests limited immediate progress toward backlog items.

## 2. Releases
No new releases were published in the period covered. The project continues to operate under its current versioning scheme until the next scheduled release cycle.

## 3. Project Progress
Pull Request #1270 introduced a significant build optimization by caching Cargo artifacts across Docker image builds and automating image construction scripts. This change addresses the previous inefficiency where every image build recompiled the entire dependency tree due to layer invalidation. The PR has not yet been merged, leaving the improvement awaiting code review. Additionally, Issue #205 proposes enhancing custom OpenAI endpoints with support for per-model body parameter configuration—a feature request that has gained visibility through recent discussions.

## 4. Community Hot Topics
- **Issue #205** ([moltis-org/moltis #205](https://github.com/moltis-org/moltis/issue/205)) stands out as the primary community focus. It seeks the ability to set body parameters for custom OpenAI endpoints, enabling more flexible model interactions. The issue has received two comments and remains open, reflecting active interest from the user base regarding API extensibility.
- **Pull Request #1270** ([moltis-org/moltis PR #1270](https://github.com/moltis-org/moltis/pull/1270)) is the only recent contribution, targeting performance improvements in the build pipeline. While not yet merged, it represents a concrete step toward reducing build times and resource consumption during CI/CD processes.

## 5. Bugs & Stability
No critical bugs, crashes, or regressions were reported in the provided data for today. The project maintains stability, with the only notable activity being the enhancement request and performance optimization PR. Since there are no bug reports linked to these items, the system remains stable from a reliability standpoint.

## 6. Feature Requests & Roadmap Signals
- **OpenAI Endpoint Customization** (Issue #205) signals a clear roadmap signal: users want greater control over how payloads are formatted when interacting with custom OpenAI models. This could improve integration flexibility for teams using Moltis in enterprise or specialized applications.
- **Build Cache Optimization** (PR #1270) indicates a technical debt reduction priority. By caching Cargo targets across image layers, future builds will skip unnecessary compilation steps, potentially accelerating deployment cycles. This aligns with broader goals of improving developer experience and CI efficiency.

## 7. User Feedback Summary
Users appear focused on two key areas: API extensibility and build performance. The request for configurable body parameters in OpenAI endpoints suggests that power users require fine-grained control over model inputs, likely to meet compliance or domain-specific formatting requirements. Meanwhile, the emphasis on caching build artifacts reflects a common pain point—slow cold starts and redundant compilation in containerized environments. Both themes indicate strong demand for both usability enhancements and operational efficiency.

## 8. Backlog Watch
- **[moltis-org/moltis #205](https://github.com/moltis-org/moltis/issue/205)** – Unresolved since 2026-09-15. This issue remains high-priority given its direct impact on API flexibility. A timely resolution would benefit developers extending Moltis to proprietary or regulated OpenAI deployments.
- **[moltis-org/moltis #1270](https://github.com/moltis-org/moltis/pull/1270)** – Pending merge. The build caching improvement is valuable but requires review before integration. Monitoring its status will help assess whether this optimization should be prioritized alongside other backlog items.

---

*Generated on 2026-09-16 based on GitHub activity from moltis-org/moltis.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



Based on the GitHub data from the QwenPaw (CoPaw) repository, here is the structured project digest for **2026-09-16**.

---

### 1. Today's Overview
The project is experiencing very high development activity, with **50 pull requests and 25 issues updated in the last 24 hours**. The focus is heavily on the transition to the multi-tenant **QwenPaw Hub (v2.2.0)**, accompanied by significant console UI enhancements (custom themes, workbench shell) and core stability fixes (MCP integration, subagent diagnostics, and PDF handling). While no new releases were published today, the volume of merged/closed PRs (25) indicates a rapid stabilization push alongside major feature rollouts.

---

### 2. Releases
*   **No new releases today.** 
*   The development focus remains on integrating features for the upcoming **v2.2.0** multi-tenant Hub edition and stabilizing the core agent runtime.

---

### 3. Project Progress
The repository shows strong development momentum with several key fixes and features merged

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest – 2026‑09‑16**  

---  

### 1. Today's Overview  
The repository saw a burst of automated dependency maintenance today: **18 open pull‑requests** were created by Dependabot, all bumping various JavaScript, Rust, Docker, and GitHub‑Action dependencies. No issues were updated, no releases were published, and none of the PRs have been merged or closed yet. Activity is therefore **maintenance‑focused** with no new feature work or bug‑fixes landing today.  

### 2. Releases  
*No new releases were tagged today.*  

### 3. Project Progress  
| PR # | Status | Summary |
|------|--------|---------|
| — | — | **0 PRs merged/closed** – all 18 PRs remain open awaiting review. No functional changes, feature additions, or bug fixes have been incorporated into the main branch today. |

### 4. Community Hot Topics  
Because every PR was opened by Dependabot and shows **0 comments/reactions** (the data lists `Comments: undefined` and `👍: 0`), there is currently **no discussion** driving community engagement. The hot topics are therefore the dependency bumps themselves, indicating that the project’s maintainers (or automated tooling) are keeping dependencies up‑to‑date rather than responding to user‑raised issues.  

*Representative links (all similar in nature):*  
- PR #696 – bump @astrojs/starlight: https://github.com/qhkm/zeptoclaw/pull/696  
- PR #695 – bump astro: https://github.com/qhkm/zeptoclaw/pull/695  
- PR #690 – bump clap (Rust): https://github.com/qhkm/zeptoclaw/pull/690  

### 5. Bugs & Stability  
*No bugs, crashes, or regressions were reported today.* Consequently, there are no fix‑oriented PRs to highlight.  

### 6. Feature Requests & Roadmap Signals  
No feature‑request issues or PRs appeared in the last 24 h, so there are **no explicit user‑driven signals** to infer upcoming work. The ongoing dependency upgrades suggest the project is prioritising **stability and compatibility** (e.g., moving to Astro 7, newer Rust toolchains) which may lay the groundwork for future features but do not themselves indicate a roadmap shift.  

### 7. User Feedback Summary  
With zero issues or comments, there is **no direct user feedback** to summarise. The silent state implies either:  
- The user base is currently satisfied and not encountering blockers, **or**  
- Users are not actively engaging via GitHub (perhaps using other channels).  

### 8. Backlog Watch  
All open items are the Dependabot PRs listed above. None have lingered beyond today, so there are **no long‑standing, unanswered important issues or PRs** requiring maintainer attention at this moment. Maintainers should, however, monitor these PRs for potential conflicts (especially the major Astro jump from 6.x to 7.x) and ensure they are reviewed and merged in a timely fashion to avoid dependency drift.  

---  

**Overall Health Assessment:**  
The project is in a **maintenance‑heavy, stable state** with no active development or reported problems today. The high volume of automated dependency updates indicates a healthy reliance on up‑to‑date libraries, but the lack of human‑reviewed PRs suggests a possible bottleneck in the review process or a lull in feature work. Encouraging maintainer or community review of these dependency bumps will help keep the codebase secure and ready for future development.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-09-16

## 1. Today's Overview

ZeroClaw remains actively developed with strong momentum across multiple domains. The repository recorded **50 issues updated** and **50 pull requests** in the last 24 hours, indicating robust community engagement. While there have been no new releases since the last snapshot, the focus remains on architectural improvements, security hardening, and feature expansion—particularly around cross-agent communication, WASM plugin management, and enhanced channel support. The most prominent themes are improving inter-agent collaboration (A2A outbound client), refining runtime capabilities (streaming, token accounting), and strengthening security (dependency updates, image handling).

## 2. Releases

No new releases were published in the period covered. The latest stable version remains unchanged, though ongoing development continues toward upcoming releases that will incorporate recent RFCs and PRs.

## 3. Project Progress

### Merged/Closed PRs (Last 24h)
- **#10583** – Enhanced web upload endpoint to accept any file type, aligning web and RPC APIs for consistent behavior.  
  *Link:* [PR #10583](https://github.com/zeroclaw-labs/zeroclaw/pull/10583)
- **#10525** – Reintroduced opt-in browser enrollment frontdoor (relay-terminated, enrollment-only) with improved trust model.  
  *Link:* [PR #10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525)
- **#9833** – Added `web_research` delegate and scoped raw web_search functionality.  
  *Link:* [PR #9833](https://github.com/zeroclaw-labs/zeroclaw/pull/9833)
- **#10896** – Improved CI pipeline by changing compile-job runners to read labels from `fmt` jobs instead of parsing `fmt` outputs.  
  *Link:* [PR #10896](https://github.com/zeroclaw-labs/zeroclaw/pull/10896)
- **#10874** – Stopped queuing GitHub-hosted jobs behind the `fmt` formatter during runner shortages, reducing wait times.  
  *Link:* [PR #10874](https://github.com/zeroclaw-labs/zeroclaw/pull/10874)
- **#10120** – Refactored Zerocode to remove unreachable TUI code and narrow the compiled target to the actual keymap contract used by `xtask`.  
  *Link:* [PR #10120](https://github.com/zeroclaw-labs/zeroclaw/pull/10120)
- **#9713** – Added token accounting to history-trim events to prevent large turns from consuming full token budgets unexpectedly.  
  *Link:* [PR #9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)
- **#10746** – Implemented load-verification for WASM plugins at install time, failing installation if a component doesn't match the host WIT ABI.  
  *Link:* [PR #10746](https://github.com/zeroclaw-labs/zeroclaw/pull/10746)
- **#10752** – Added `plugin --load-verify` flag and `plugin --list--verify` to confirm installed plugins actually load correctly.  
  *Link:* [PR #10752](https://github.com/zeroclaw-labs/zeroclaw/pull/10752)
- **#10750** – Extended channel plugin egress governance to allow fine-grained authorization controls.  
  *Link:* [PR #10750](https://github.com/zeroclaw-labs/zeroclaw/pull/10750)
- **#9876** – Enhanced Zerocode to project turn state through terminal-native channels (OSC 2 for title, OSC 9.4 for progress).  
  *Link:* [PR #9876](https://github.com/zeroclaw-labs/zeroclaw/pull/9876)
- **#10351** – Introduced optional `runtime_profiles.max_execution_tree_iterations` to enforce aggregate iteration budgets across delegation trees.  
  *Link:* [PR #10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351)
- **#10407** – Added persistent session prompt attachments backed by SQLite (max 4 per session) with tools to manage them.  
  *Link:* [PR #10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)
- **#10480** – Fixed recovery from rejected image requests by retrying with novel images while suppressing previously accepted ones.  
  *Link:* [PR #10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480)
- **#10475** – Added WhatsApp Web channel rendering of outbound Markdown in the platform's native dialect.  
  *Link:* [PR #10475](https://github.com/zeroclaw-labs/zeroclaw/pull/10475)
- **#9567** – Enhanced Email channel to propagate Cc and Bcc recipients on individual messages.  
  *Link:* [PR #9567](https://github.com/zeroclaw-labs/zeroclaw/pull/9567)

### Closed PRs (Recent)
- **#9324** – Completed A2A outbound client RFC (#9106) with four new tools, a shared wire model, and configuration defaults.  
  *Link:* [PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)
- **#9802** – RFC for emergency-stop enforcement (interrupting cancellable in-flight operations and enforcing network kill).  
  *Link:* [PR #9802](https://github.com/zeroclaw-labs/zeroclaw/pull/9802)
- **#9389** – Resolved MQTT security dependency conflict (rumqttc v0.25.1 pinning rustls libraries).  
  *Link:* [PR #9389](https://github.com/zeroclaw-labs/zeroclaw/pull/9389)

## 4. Community Hot Topics

The most active issues by comment volume highlight three primary areas of interest:

| Issue | Type | Comments | Link |
|-------|------|----------|------|
| **#6909** | RFC – Desktop screen interaction | 16 | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) |
| **#9106** | RFC – A2A outbound client | 11 | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) |
| **#9346** | RFC – Unified package/capability catalog | 9 | [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) |
| **#8583** | Tracker – Channel/source cleanup | 6 | [#8583](https://github.com/zeroclaw-labs/zeroclaw/issues/8583) |
| **#10166** | Enhancement – Default stream_mode | 3 | [#10166](https://github.com/zeroclaw-labs/zeroclaw/issues/10166) |

These top issues reflect the community's focus on **desktop accessibility** (screen interaction), **inter-agent communication** (A2A outbound), and **system architecture** (package/capability contracts). The high comment count on #6909 indicates significant discussion around implementing secure desktop screen control, likely driven by enterprise adoption needs.

## 5. Bugs & Stability

Several critical bugs were reported, with several affecting stability and usability:

### High Severity
- **#10885** – Image-aware pre-dispatch budgeting fails to account for image-heavy native tool requests, leading to budget misestimation and potential overflow.  
  *Status:* Open, no fix PR yet.
- **#9882** – Image markers bypass content validation in `run_model_query`, potentially allowing malformed inputs to reach downstream providers.  
  *Status:* Open, no fix PR yet.
- **#10887** – Vision capability gate incorrectly rejects turns containing image markers, causing turn loss.  
  *Status:* Open, no fix PR yet.
- **#10889** – Anthropic provider drops rolling cache breakpoint when the last message ends with an image block, causing cache misses.  
  *Status:* Open, no fix PR yet.
- **#9802** – Emergency-stop enforcement incomplete; cancellation logic may not fully interrupt in-flight operations.  
  *Status:* Open, RFC pending.

### Medium Severity
- **#10736** – Pre-output stream failure skips advertised non-streaming fallback, causing dropped responses in some scenarios.  
  *Status:* Open, no fix PR yet.
- **#10659** – Budget-exceeded Code turn loses visible progress after session restore due to improper state reconstruction.  
  *Status:* Open, no fix PR yet.
- **#10166** – Default `stream_mode` set to `off` causes entire responses to be held until turn completion, degrading interactivity.  
  *Status:* Open, no fix PR yet.

### Lower Severity
- **#10625** – Placeholder `[media attachment]` incorrectly inserted when non-vision models are used with missing media markers.  
  *Status:* Closed (previously blocking).
- **#8983** – Cross-agent memory sharing lacks granularity; granting read access exposes all memory rows.  
  *Status:* Open, no fix PR yet.

## 6. Feature Requests & Roadmap Signals

Several features are actively being implemented and represent clear roadmap priorities:

- **A2A Outbound Client** (#9106) – A comprehensive RFC to enable ZeroClaw agents to proactively call external A2A-compliant agents. This addresses a key gap in inter-agent collaboration and is already accepted.
- **Web Upload Any-File Support** (#10583) – Extending the web upload API to handle arbitrary file types, matching RPC semantics. This improves developer experience for file-based tasks.
- **Browser Enrollment Frontdoor** (#10525) – A new entry point for browser-based authentication enrollment, phased as phase 1.
- **Persistent Session Prompts** (#10407) – Adding SQLite-backed storage for up to four durable prompt attachments per session, enabling richer context retention across turns.
- **Token Accounting** (#9713) – Tracking tokens before/after history trims to prevent budget overruns, supporting better resource planning.
- **Plugin Egress Governance** (#10750) – Fine-grained authorization for channel plugin egress, ensuring compliance with organizational policies.
- **WASM Plugin Load Verification** (#10746) – Install-time verification of WASM components against host WIT ABIs, preventing silent failures at runtime.
- **Native XMPP Channel** (#9814) – Adding support for Jabber/XMPP protocols (Prosody/ejabberd) to broaden messaging options.
- **

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*