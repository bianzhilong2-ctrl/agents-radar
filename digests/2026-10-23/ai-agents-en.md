# OpenClaw Ecosystem Digest 2026-10-23

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-10-23 02:35 UTC

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

⚠️ Summary generation failed.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Ecosystem (2026-10-23)

---

## 1. Ecosystem Overview

The open-source AI agent ecosystem shows a **bifurcated maturity pattern**: a cluster of high-velocity projects (NanoBot, CoPaw/QwenPaw, ZeroClaw, Hermes Agent, LobsterAI) actively hardening production-grade reliability—security, channel stability, plugin isolation, and observability—while a second tier (IronClaw, Moltis, NanoClaw, NullClaw) operates in maintenance or pre-release stabilization modes. **No project cut a major feature release today**; the dominant theme is **patch-level stabilization** (security patches, dependency hygiene, CI reliability, UX polish). Community demand consistently centers on **observability (token/cost tracking, subagent control)**, **multi-channel reliability**, and **provider-agnostic configuration**—signaling a shift from "agent works" to "agent operates reliably in production."

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score* |
|---------|--------------|-----------|-------------------|----------------|---------------|
| **NanoBot** (HKUDS) | 9 resolved, 2 high-sev open | 55 updated | 37 | No release (RC stabilization) | 🟢 **High** |
| **CoPaw/QwenPaw** | 18 updated, 12 bugs (2 critical) | 27 updated | 6 | **v2.2.2.post1** (security patch) | 🟢 **High** |
| **ZeroClaw** | 48 updated (36 open, 12 closed) | 50 updated | 8 | No release (v0.8.7/v0.9.0 prep) | 🟢 **High** |
| **Hermes Agent** | 50 updated (48 open, 2 closed) | 50 updated | 18 | No release (v0.21.5+dev) | 🟡 **Medium-High** |
| **LobsterAI** | 0 new, 0 open | 7 updated | 7 | No release (stabilization sprint) | 🟢 **High** |
| **NanoClaw** | 3 closed | 18 updated | 18 | **v2026.10.1-rc.2** (beta) | 🟡 **Medium** |
| **IronClaw** | 2 touched | 6 updated | 1 (dep bump) | No release (maintenance) | 🟡 **Medium** |
| **Moltis** | 0 new | 5 updated | 2 | No release | 🟡 **Medium** |
| **NullClaw** | 1 open | 1 open | 0 | No release | 🔴 **Low** |
| **PicoClaw** | — | — | — | — | ⚪ **Unknown** |
| **TinyClaw** | 0 | 0 | 0 | No release | 🔴 **Dormant** |
| **ZeptoClaw** | 0 | 0 | 0 | No release | 🔴 **Dormant** |
| **OpenClaw** | — | — | — | — | ⚪ **Data unavailable** |

*Health Score: 🟢 High = active merges + releases + community engagement; 🟡 Medium = steady maintenance but limited releases/engagement; 🔴 Low/Dormant = minimal/no activity.

---

## 3. OpenClaw's Position

**Status**: Core reference implementation (per ecosystem metadata), but **no digest data available** for 2026-10-23.

**Inferred Advantages vs. Peers**:
- **Architectural reference**: Other projects (LobsterAI, NanoClaw) explicitly reference OpenClaw types, IPC schemas, and media lifecycle contracts (e.g., LobsterAI's `schemaVersion=3` media telemetry aligns with OpenClaw contracts).
- **Ecosystem gravity**: NanoClaw's OneCLI gateway, LobsterAI's DSH integration, and CoPaw's plugin ledger all imply OpenClaw-defined interfaces for credential isolation, model metadata, and plugin lifecycles.

**Technical Approach Differences**:
- **Peer projects extend OpenClaw primitives**: LobsterAI adds DSH reasoning-effort mapping; NanoClaw adds credential gateway; CoPaw adds plugin hot-reload ledger. OpenClaw likely provides the **core agent loop, session model, and tool IPC** that others specialize.

**Community Size Comparison**:
- **Largest active communities**: NanoBot (55 PRs/24h), ZeroClaw (50 PRs/24h), CoPaw (45 activities/24h), Hermes (100 items/24h).
- **OpenClaw's community signal**: Indirect—measured by downstream dependency volume. Direct contribution velocity unknown due to data gap.

**Risk**: Without visible OpenClaw activity, **ecosystem coordination risk rises**—downstream projects (LobsterAI, NanoClaw) may fork contracts if upstream stalls.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Signaling Need | Specific Evidence |
|-------------|------------------------|-------------------|
| **Token/cost observability** | NanoBot, CoPaw, ZeroClaw | NanoBot #2020/#1193 (7 comments); CoPaw gateway timeout config (#8372); ZeroClaw runtime receipts |
| **Subagent/process control plane** | NanoBot, CoPaw, Hermes | NanoBot #1006 (list/kill subagents); CoPaw channel extraction PR #8187 isolates channels as subprocesses; Hermes browser-tool restructuring |
| **Multi-channel reliability** | CoPaw, ZeroClaw, NanoClaw | CoPaw: 7/12 bugs channel-related (Feishu, QQ, DingTalk, Telegram); ZeroClaw: channel plugin safety; NanoClaw: Resend channel null thread ID |
| **Provider-agnostic config / gateway** | NanoBot, NanoClaw, LobsterAI, Moltis | NanoBot #6407 (DeepSeek config gap); NanoClaw OneCLI credential gateway; LobsterAI DSH metadata sync; Moltis DeepSeek/Z.AI provider fixes |
| **Plugin/extension isolation & hot-reload** | CoPaw, ZeroClaw, Hermes | CoPaw #7565 (two-layer teardown ledger); ZeroClaw WASM plugin sender deny records; Hermes browser automation → plugin |
| **CI/CD & supply-chain hardening** | NanoBot, CoPaw, ZeroClaw, IronClaw, NanoClaw | NanoBot #6402 (SHA-isolated tests); CoPaw Node.js CVE patches + emSign CA; ZeroClaw arm64 Docker memory bounds; IronClaw dompurify oscillation; NanoClaw Bun 1.4.4 for cert revocation |
| **Session/workspace security isolation** | NanoBot, NanoClaw, CoPaw | NanoBot #5278 (session storage in workspace); NanoClaw admin API loopback restrict; CoPaw CORS env timing bug |
| **Internationalization (i18n)** | Hermes, Moltis, CoPaw | Hermes Korean locale complete; Moltis #1315 (security/onboarding/model-select); CoPaw OAuth callback localization |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture Differentiator |
|---------|---------------|-------------|----------------------------------------|
| **NanoBot** | WebUI polish, agent execution correctness, CLI/SDK/API parity | Developers building custom agents; power users | **Turn-based execution model** with compaction budgets, idle-scan isolation, direct-turn protection |
| **CoPaw/QwenPaw** | Multi-channel gateway, plugin ecosystem, team-scale Hub | Enterprises/teams deploying agents on Feishu/DingTalk/Telegram/QQ | **Channel-as-plugin subprocess architecture** (#8187); **Hub multi-tenancy** with global Skill/MCP; **Plugin hot-reload ledger** |
| **ZeroClaw** | Runtime safety, WASM plugin sandbox, CI/release automation | Platform builders needing verified supply chain | **Receipt-bound runtime tests**; **Cranelift/WASM plugin isolation**; **Arm64 Docker memory-bounded CI** |
| **Hermes Agent** | Desktop-native, browser automation, localization | End-users wanting local-first desktop assistant | **Camofox browser plugin**; **hermes-dreaming** (negation/corroboration reasoning); **Full desktop locale coverage** |
| **LobsterAI** | Media generation UX, DSH integration, renderer stability | Creative/professional users doing video/image gen | **Media confirmation IPC + 30-min retention + schemaVersion=3 telemetry**; **DSH reasoning-effort metadata bridge** |
| **NanoClaw** | Credential isolation, container hardening, runtime flexibility | Self-hosters running agent containers at scale | **OneCLI gateway** (model key only to agents); **Loopback-restricted admin API**; **Node:24-trixie-slim base** |
| **IronClaw** | Benchmark-driven model quality, frontend stability | Researchers evaluating agent models | **OfficeQA failure taxonomy**; **Dependabot-governed frontend deps** (vite/storybook/dompurify) |
| **Moltis** | Provider reasoning fidelity, chat consistency, i18n | Multi-lingual users needing reliable provider reasoning | **DeepSeek thinking toggle enforcement**; **Stale reply anchor deduplication**; **Locale-bundle completeness** |
| **NullClaw** | 32-bit ARM compatibility, LLM param flexibility | Edge/embedded deployments on ARMv7/Android | **Portable atomics for gateway timestamps**; **`temperature: null` for provider compatibility** |
| **PicoClaw** | (Unknown — safety flag only) | Likely embedded/microcontroller | — |
| **TinyClaw / ZeptoClaw** | (Dormant) | — | — |

---

## 6. Community Momentum & Maturity

### **Tier 1: Rapidly Iterating (High Velocity + Production Hardening)**
- **NanoBot**: 55 PRs/24h, 37 merged. Release candidate stabilization. Strong WebUI + execution focus.
- **CoPaw/QwenPaw**: 45 activities, **patch release shipped**, 3 first-time contributors today. Security-first, channel isolation architecture landing.
- **ZeroClaw**: 98 items (issues+PRs), 8 merged. v0.8.7/v0.9.0 prep. Deep investment in WASM sandbox + CI governance.
- **LobsterAI**: 7 PRs merged, 0 bugs open. **Stabilization sprint complete**—media confirmation, browser tools, auth, DSH all fixed.

### **Tier 2: Steady Maintenance (Consistent but Narrower Scope)**
- **Hermes Agent**: 100 items but 36% merge rate. Browser-tool restructuring + localization. Desktop-focused.
- **NanoClaw**: 18 PRs merged, RC released. Security/container hardening. Beta channel active.
- **IronClaw**: Pure Dependabot hygiene. Dompurify conflict signals governance gap. ARM64 Docker stalled.
- **Moltis**: 5 PRs, 2 merged. Provider reasoning + i18n. Quiet but focused.

### **Tier 3: Low Velocity / Stalled**
- **NullClaw**: 2 items, 0 merged. Niche 32-bit ARM + param compatibility.
- **TinyClaw / ZeptoClaw**: Zero activity.
- **PicoClaw**: No data.
- **OpenClaw**: Data unavailable — **critical gap for ecosystem reference**.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Production hardening > new features** | 0 major releases; 100% of releases today are security patches (CoPaw, NanoClaw RC) | **Invest in reliability primitives**: observability, isolation, rollback, CI governance before expanding capabilities. |
| **Channel/gateway architecture = new plugin model** | CoPaw channel extraction (#8187), ZeroClaw WASM plugins, NanoClaw OneCLI gateway, Hermes browser plugin | **Design for subprocess isolation** from day one. Monolithic agent loops fail under multi-channel load. |
| **Credential & session isolation is non-negotiable** | NanoClaw loopback restrict, NanoBot session storage concern, CoPaw CORS/env timing, ZeroClaw plugin sender deny | **Gateway pattern** (credentials never in agent workspace) becoming standard. Build or adopt one. |
| **Observability is the #1 community ask** | NanoBot token/cost (3 issues), CoPaw gateway timeout config, ZeroClaw receipt-bound tests | **Instrument everything**: token usage, tool latency, turn budgets, plugin health. Ship `/metrics` or equivalent. |
| **Provider reasoning fidelity requires contract enforcement** | Moltis DeepSeek thinking tests, LobsterAI DSH reasoning-effort sync, NanoBot DeepSeek config gap | **Define provider capability schemas** (thinking, tools, reasoning-effort) and validate at registration—not runtime. |
| **ARM64/32-bit support is a deployment blocker** | IronClaw #3168 (closed but unresolved), NullClaw #1077 (32-bit atomic fix), ZeroClaw arm64 CI memory bounds | **CI must cover arm64 + armv7**. Container base images and WASM runtimes are the leverage points. |
| **i18n is table stakes for global adoption** | Hermes (Korean done), Moltis (security/onboarding), CoPaw (OAuth locales) | **Extract all UI strings to locale bundles early**. Retrofitting is costly. |
| **Dependabot alone is insufficient for security governance** | IronClaw dompurify 3.4.16→3.4.17 oscillation, CoPaw emSign CA remediation across installers | **Adopt lockfile auditing + SBOM + automated CVE triage**. Single-source version truth (`.nvmrc`, `pnpm-lock.yaml`) required. |

---

## Summary for Decision-Makers

- **If building a new agent platform**: Start with **channel/plugin isolation**, **credential gateway**, and **turn-budget observability**—the three patterns converging across Tier 1 projects.
- **If extending an existing agent**: Prioritize **provider capability contracts** (reasoning, tools, thinking) and **session security**—the two highest-leverage integration points.
- **If evaluating dependencies**: **CoPaw/QwenPaw** and **ZeroClaw** show the strongest production-hard

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-10-23

---

## 1. Today's Overview

NanoBot shows **high maintenance velocity** with 55 PRs updated in 24 hours (37 merged/closed) and 9 issues resolved. The project is actively refining WebUI polish, agent execution stability, and CI/CD reliability. No new releases were cut, but the volume of merged fixes suggests a release candidate stabilization phase. Two open issues (#6285, #6407) indicate active user-facing bugs in web search and provider configuration.

---

## 2. Releases

**No new releases** published in the last 24 hours. The merged PRs (particularly #6404, #6405, #6393) address critical agent execution bugs that would typically ship in a patch release.

---

## 3. Project Progress — Merged/Closed PRs (Key Items)

| PR | Type | Summary | Link |
|----|------|---------|------|
| #6404 | Bug fix (P2) | Fixed budget oversizing on large `read_file` results after compaction, preventing turn abortion | [#6404](https://github.com/HKUDS/nanobot/pull/6404) |
| #6405 | Bug fix (P2) | Idle scans no longer interfere with in-flight direct turns (API/SDK/CLI) | [#6405](https://github.com/HKUDS/nanobot/pull/6405) |
| #6393 | Bug fix (P2) | Restored waiting messages no longer auto-execute on load (NAN-275) | [#6393](https://github.com/HKUDS/nanobot/pull/6393) |
| #6402 | CI/CD fix (P2) | Test Suite runs now isolated by revision SHA to prevent re-run cancellations | [#6402](https://github.com/HKUDS/nanobot/pull/6402) |
| #6403 | Perf (P2) | WebUI segmented indicator animates without layout thrashing | [#6403](https://github.com/HKUDS/nanobot/pull/6403) |
| #6399 | Feature removal | Removed broken Figma remote MCP preset from catalog | [#6399](https://github.com/HKUDS/nanobot/pull/6399) |
| #6398 | Bug fix (P2) | Skill references preserve `$` prefix in WebUI transcript | [#6398](https://github.com/HKUDS/nanobot/pull/6398) |
| #6397 | Bug fix (P2) | Update checks deferred until user opens Settings → About | [#6397](https://github.com/HKUDS/nanobot/pull/6397) |
| #6396 | UX fix (P2) | Clarified OAuth callback instructions across locales | [#6396](https://github.com/HKUDS/nanobot/pull/6396) |
| #6321 | Feature (P2) | WebUI: local file & video attachment support | [#6321](https://github.com/HKUDS/nanobot/pull/6321) |

**Theme**: WebUI polish (icons, animations, OAuth, attachments), agent execution correctness (idle scans, compaction budgets, auto-execution), and CI reliability.

---

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#2020](https://github.com/HKUDS/nanobot/issues/2020) | Issue (Closed) | 5 | **Token/cost logging** for custom gateways & paid APIs — users lack visibility into usage metadata |
| [#1006](https://github.com/HKUDS/nanobot/issues/1006) | Issue (Closed, stale) | 4 | **Subagent control plane** — list/kill commands for runaway/errant subagents |
| [#6285](https://github.com/HKUDS/nanobot/issues/6285) | Issue (Open) | 3 | **DuckDuckGo web_search retry/backoff** — consecutive searches fail with "No results found" |
| [#5278](https://github.com/HKUDS/nanobot/issues/5278) | Issue (Closed) | 2 | **Session storage security** — sessions moved into workspace, exposing history to agent tools |

**Analysis**: Strong demand for **observability** (token/cost tracking, subagent control) and **reliability** (search retries, session isolation). The closed status on #2020 and #1193 (duplicate) suggests token tracking may have been addressed in recent PRs not yet released.

---

## 5. Bugs & Stability — Today's Reports

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#6285](https://github.com/HKUDS/nanobot/issues/6285) DuckDuckGo web_search: no retry/backoff → consecutive searches fail | Open | None yet |
| **High** | [#6407](https://github.com/HKUDS/nanobot/issues/6407) DeepSeek web_search tool configuration undocumented | Open | None |
| **Medium** | [#6370](https://github.com/HKUDS/nanobot/issues/6370) WebUI "Context compacted" divider lacks reason (idle vs pressure) | Closed | Likely addressed in #6401 (idle polling → invalidations) |
| **Medium** | [#5879](https://github.com/HKUDS/nanobot/issues/5879) Large `read_file` aborts turn post-compaction | Fixed | [#6404](https://github.com/HKUDS/nanobot/pull/6404) merged |
| **Medium** | Idle scans kill long direct turns (API/SDK/CLI) | Fixed | [#6405](https://github.com/HKUDS/nanobot/pull/6405) merged |
| **Low** | [#5772](https://github.com/HKUDS/nanobot/issues/5772) iOS PWA viewport washed out | Closed | Fixed in merged PRs |

**Note**: Two high-severity search bugs remain open without fix PRs — priority for next sprint.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Token/cost usage logging** | #2020, #1193, #2149 | High — multiple issues, closed but likely implemented in merged PRs |
| **Subagent control plane (list/kill)** | #1006 | Medium — MVP scoped, stale label suggests deprioritized |
| **DeepSeek web_search integration** | #6407 | Medium — new provider docs exist, config gap only |
| **WebUI: edit & resend messages in-session** | [#6323](https://github.com/HKUDS/nanobot/pull/6323) | High — PR open, P2, active development |
| **WebUI: compact composer toolbar** | [#6256](https://github.com/HKUDS/nanobot/pull/6256) | High — PR open, P2, UX polish |
| **Matrix "listen" policy (observe + mention reply)** | [#6289](https://github.com/HKUDS/nanobot/pull/6289) | Medium — PR open, P2, niche channel feature |
| **Provider-neutral structured decision client** | [#5825](https://github.com/HKUDS/nanobot/pull/5825) | Medium — PR open, P2, architectural, has conflicts |

**Prediction**: Next release will ship WebUI UX improvements (edit/resend, compact toolbar, attachment support), agent execution fixes, and possibly token logging if merged PRs include it.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **No token/cost visibility** | #2020, #1193, #2149 (3 issues, 7 comments) | 😟 Frustrated — "no visibility into token usage or costs" |
| **Search reliability** | #6285 (3 comments) | 😟 Frustrated — "back-to-back searches fail" |
| **Session security** | #5278 | 😟 Concerned — "session history should not live inside agent workspace" |
| **Subagent operability** | #1006 | 😐 Operational gap — "no first-class control plane" |
| **WebUI compaction opacity** | #6370 | 😐 Confused — "never says why" compaction ran |
| **iOS PWA rendering** | #5772 | 😐 Annoyed — "washed out" viewport |
| **OAuth callback confusion** | #6396 (fixed) | 😐 Misled by placeholder URL |

**Overall**: Users want **production-grade observability** (costs, subagent control) and **reliable tooling** (search, compaction clarity). WebUI polish is appreciated but secondary to core reliability.

---

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#6285](https://github.com/HKUDS/nanobot/issues/6285) DuckDuckGo retry/backoff | 6 days | Open, no PR | Core tool broken for multi-search workflows |
| [#6407](https://github.com/HKUDS/nanobot/issues/6407) DeepSeek web_search config | 0 days | Open, no PR | New provider integration gap |
| [#5653](https://github.com/HKUDS/nanobot/pull/5653) Exec denyPatterns in Full Access | 49 days | Open, conflict | Security: deny patterns bypassed in Full Access mode |
| [#5825](https://github.com/HKUDS/nanobot/pull/5825) Structured decision client | 33 days | Open, conflict | Architectural refactor, blocks provider abstraction |
| [#6043](https://github.com/HKUDS/nanobot/pull/6043) Preserve edits during settings save | 19 days | Open, conflict | UX: data loss risk during concurrent edits |
| [#1006](https://github.com/HKUDS/nanobot/issues/1006) Subagent control plane | 243 days | Closed (stale) | Operational need unmet; may need re-opening |

**Action Items**:
1. **Assign #6285** — high-impact search bug, easy fix (add retry/backoff)
2. **Triage #6407** — document DeepSeek config or add preset
3. **Resolve conflicts on #5653, #5825, #6043** — security, architecture, UX respectively
4. **Re-evaluate #1006** — if subagent usage grows, control plane becomes critical

---

*Generated from GitHub data as of 2026-10-23. All links point to HKUDS/nanobot repository.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-10-23

### 1. Today's Overview
Hermes Agent experienced a highly active development cycle on 2026-10-23, with **50 issues and 50 PRs updated in the last 24 hours**. Of the issues, 48 remain open/active and 2 were closed, indicating sustained triage velocity. **18 PRs were merged/closed** and 32 remain open, yielding a ~36% merge rate. No new releases were published; the project remains on its current main branch (v0.21.5+6653.g620ceb8). Activity is evenly distributed across bug fixes, feature implementations, platform stability, and cross-toolchain workflow improvements, reflecting a maintainer-engaged state but also a substantial backlog of pending items.

**Link:** [GitHub Activity Log](https://github.com/nousresearch/hermes-agent/commits/main)

---

### 2. Releases
No new releases were tagged during this period. The latest referenced version in issue comments is `hermes-agent v0.21.5+6653.g620ceb8` (Windows update issue #143331). Users should expect the next release once the 18 merged PRs are packaged and verified, likely including browser-tool restructuring, localization completions, and compression/modeling heuristics updates.

**Link:** [Releases Page](https://github.com/nousresearch/hermes-agent/releases)

---

### 3. Project Progress (Merged/Closed PRs Today)
Eighteen PRs were merged or closed, advancing several subsystems:
- **Browser automation restructuring** (#143146): `agent-browser` and built-in `browser_*` tools retired; automation now runs on `browser_exec` only, with Camofox moving to a plugin.
- **Korean localization** (#120011): Complete `ko` desktop locale added, aligning with existing `SUPPORTED_LANGUAGES` and `LOCALE_ENDONYMS`.
- **hermes-dreaming bump** (#142450): Updated from 2.9.8 to 3.3.0, incorporating negations in RU/EN/ZH, corroboration improvements, and an optional cloud judge.
- **Plugin catalog & Magi fixes** (#143352): Cover banner restored for the Magi community plugin listing.
- **Desktop model row labeling** (#143357): Gateway provider names now correctly displayed on model rows via `modelBaseId()`.
- **OpenRouter image model curation** (#

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑10‑23**

---

### 1. Today's Overview
The repository logged a busy day: **3 issues were closed** (all bugs) and **18 pull‑requests (PRs) were merged or closed**, driving the stable branch toward the upcoming 2026.10.1 release. One new release candidate, **v2026.10.1‑rc.2**, entered the beta channel while stable remains on 2026.10.0. Although active bug‑fixes are being shipped, the open‑PR queue (32 items) continues to grow, indicating a healthy but back‑logged workflow.

---

### 2. Releases
**v2026.10.1‑rc.2** – Second release candidate for 2026.10.1.  
- **Channel behavior** – Users on the `beta` channel receive this RC; `stable` stays on 2026.10.0 until the final GA is cut.  
- **OneCLI upgrade** – Pins OneCLI to **1.45**. New agent groups now receive only their model key; other credentials are moved to the gateway, tightening token isolation.  
- **Migration notes** – No breaking changes for existing stable users; beta users should verify that agent containers are rebuilt after the upgrade to pick up the new OneCLI version.

---

### 3. Project Progress
**Merged / Closed PRs (today)**
| PR | Title | Effect |
|---|---|---|
| #2434 | `fix(setup/onecli)`: restrict admin API and Postgres to loopback after OneCLI install | Prevents agent containers from sniffing every install’s access tokens over the Docker bridge. |
| #4193 | `chore(container)`: bump Bun to 1.4.4 for the eMudhra root removal | Drops a revoked root‑certificate intermediate, hardening HTTPS fetches in the agent image. |

*Note*: An additional **16 closed PRs** were merged (details not shown in the current snippet), contributing to the overall bug‑fix and hardening cadence.

**Open PRs (awaiting review/merge)**
- #4199 – Publish OneCLI admin API and Postgres on `127.0.0.1` for Linux.
- #4192 – Stop a hung channel send from silently silencing a session.
- #4196 – Delete the Dial key on upgrade only when the conversion would widen exposure.
- … *(and 28 more)* – covering Slack setup, Docker‑group handling, channel‑ID resolution without `jq`, etc.

---

### 4. Community Hot Topics
**Most discussed issue** – **#4142** ([nanocoai/nanoclaw/issue/4142](https://github.com/nanocoai/nanoclaw/issues/4142)):  
- *1 comment* – “Resend channel can’t send: null thread id falls back to a platform id the adapter rejects.”  
- Impact: Email‑sending agents fail, breaking the Resend channel on all platforms (macOS & Linux). The bug was closed today, but the fix is still pending in a pending PR (likely #4192 or a related delivery fix).

**PR activity** – Most open PRs have **0 comments** (e.g., #4199, #4192). The lack of discussion suggests the community is waiting for maintainer triage rather than active debate.

---

### 5. Bugs & Stability
| Issue | Status | Severity | Summary |
|---|---|---|---|
| **#4175** ([link](https://github.com/nanocoai/nanoclaw/issues/4175)) | **CLOSED** | **High** | Claude agents can’t read PDFs – missing `poppler-utils` (`pdftoppm`) in the agent container. |
| **#4142** ([link](https://github.com/nanocoai/nanoclaw/issues/4142)) | **CLOSED** | Medium | Resend channel receives mail but cannot send; `null` thread ID falls back to an adapter‑rejected platform ID. |
| **#3206** ([link](https://github.com/nanocoai/nanoclaw/issues/3206)) | **CLOSED** | Medium | Inbound attachments are silently dropped on channels whose message IDs contain `/` or `\` (e.g., Google Chat). |

**Fix Landscape**  
- #4192 (delivery hardening) addresses a related “hung send” problem that could have impacted the Resend channel.  
- No dedicated PRs yet for the PDF‑reading or attachment‑dropping bugs; they are likely still in the “needs‑fix” stage.

---

### 6. Feature Requests & Roadmap Signals
- **New provider skill** – #3976 introduces `/add‑copilot` (GitHub Copilot SDK provider). This signals a push to expand runtime support while keeping device‑login tokens in the credential gateway.  
- **Container base upgrade** – #3996 pins the agent image to `node:24‑trixie‑slim`, improving system‑layer consistency and security.  
- **Automation & maintainability** – #3978 adds Dependabot for Actions, pnpm, Bun, Docker, and skill pins, removing the inert Renovate config. This indicates a move toward continuous dependency management.  
- **Platform hardening** – #4199 and #4203 warn when a remote OneCLI gateway would route agents to their own machine, improving network‑security hygiene.

These items point to a roadmap focused on **credential isolation, runtime flexibility, and operational reliability**.

---

### 7. User Feedback Summary
- **Resend channel** – Users on macOS/Linux report email send failures; the root cause (null thread ID) has been documented and closed.  
- **Attachments** – Google Chat users lose inbound file attachments because message IDs contain path separators; the bug is closed but still needs a fix.  
- **PDF handling** – Claude agents lack the `pdftoppm` utility, preventing page‑specific queries on PDFs; a container‑level package addition is required.  
- **Setup friction** – Recent PRs (#4200, #4201, #4202, #4205, #4204) highlight recurring pain points: sudo password prompts, Docker‑group timing, missing `jq` on Ubuntu/WSL, and overly long display names. These issues are being addressed incrementally.

Overall, user sentiment is mixed: **core functionality (email, files, PDFs) is unstable**, while **installation experience is improving**.

---

### 8. Backlog Watch
**High‑priority open PRs (maintainer attention needed)**  
- **#4199** – Publish OneCLI admin API & Postgres on `127.0.0.1` (Linux hardening).  
- **#4192** – Stop a stuck send from silencing a session (delivery stability).  
- **#3976** – Add GitHub Copilot SDK provider (new feature, upstream‑ready).  
- **#3996** – Base agent image on `node:24‑trixie‑slim` (container consistency).  
- **#3978** – Enable Dependabot for multiple manifest types (dependency hygiene).  

These items collectively cover **security hardening, delivery reliability, new runtime support, container stability, and automation**—all critical for the upcoming 2026.10.1 release. Monitoring their progress will be essential for maintaining release velocity and user confidence.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**Today's Overview**  
On 2026-10-23, the NullClaw project recorded 1 issue and 1 pull request updated within the last 24 hours, with neither being merged or closed. Issue #1078 proposes allowing the `temperature` parameter to be set to `null` for LLM API compatibility, while PR #1077 targets a 32-bit compilation fix for gateway timestamp atomics. With zero merged PRs, no new releases, and no closed issues, activity remains minimal and predominantly open/unmerged. The project appears to be in a low-velocity patch window, with maintainers addressing niche but platform-specific concerns rather than shipping user-facing changes. https://github.com/nullclaw/nullclaw/issues/1078 | https://github.com/nullclaw/nullclaw/pull/1077

**Releases**  
No new releases were published on 2026-10-23. The project has no listed releases in the observed window, and the latest release data remains empty. No breaking changes or migration notes apply for this period.

**Project Progress**  
No pull requests were merged or closed on 2026-10-23. The sole updated PR, #1077, remains open and targets a 32-bit compilation fix for gateway timestamp atomics (`std.atomic.Value(i64)` → portable alternative), which currently blocks nightly CI for `linux-arm32-gnu`, `linux-arm32-musl`, and `android-armv7` builds. No features or bugfixes were promoted to the main branch today.

**Community Hot Topics**  
The two most active items as of 2026-10-23 are Issue #1078 and PR #1077, each with zero community comments and zero likes/reactions. Issue #1078, opened by l2dy, reflects a compatibility need to pass `temperature: null` to LLM providers that don't support the parameter, a common pain point across multiple API providers returning `invalid_request_body` errors. PR #1077, opened by glaziermag on 2026-10-22, addresses a build-break on 32-arm targets caused by using `std.atomic.Value(i64)` for gateway timestamps, blocking nightly CI for several ARM variants. Despite being the only topical items, neither has attracted discussion, suggesting either niche relevance or a quiet phase in project adoption. https://github.com/nullclaw/nullclaw/issues/1078 | https://github.com/nullclaw/nullclaw/pull/1077

**Bugs & Stability**  
No critical runtime bugs or crashes were reported on 2026-10-23. The only stability-adjacent item is PR #1077, which fixes a compilation failure on 32-bit ARM nightly builds caused by non-portable 64-bit atomics. If merged, it would restore CI stability for `linux-arm32-gnu`, `linux-arm32-musl`, and `android-armv7` targets. Issue #1078 is an enhancement to prevent API errors from unsupported `temperature` parameters, which indirectly improves stability for users of specific LLM providers. No fix PRs are currently merged for either item, as both remain open.

**Feature Requests & Roadmap Signals**  
The primary roadmap signal from today's data is Issue #1078's request to allow `temperature` to be set to `null`, which aligns with user demands for greater LLM provider agnosticism. Given the project's current pace and the niche nature of the ask, this may be incorporated in a minor patch if maintainers deem it low-effort. PR #1077's 32-bit atomic fix is a prerequisite for broader platform support but is unrelated to core AI features. No other feature requests are visible in the 24-hour window, and with zero releases, the roadmap appears stalled or heavily focused on CI/builder infrastructure rather than user-facing AI capabilities.

**User Feedback Summary**  
User feedback, as captured through the latest issue, highlights two distinct pain points. First, developers using NullClaw with LLM providers that reject unsupported model parameters (e.g., `temperature` not supported for certain models) need a way to nil-out the parameter entirely, avoiding `invalid_request_body` errors. Second, the 32-bit ARM build failures documented in PR #1077 prevent users on older or low-resource ARM hardware (e.g., android-armv7, linux-arm32) from compiling or running nightly builds, reflecting a dissatisfaction with cross-platform compatibility. Both issues suggest a user base that values provider flexibility and broad architecture support, but the lack of merged changes or community discussion indicates either these are edge-case concerns or the project's visibility/user base is currently limited.

**Backlog Watch**  
Based on the provided 24-hour snapshot, no long-unanswered (multi-day) issues or PRs are evident. However, two open items demand maintainer attention: #1078 and #1077, both opened within the last two days and currently unmerged/unresolved. If the project maintains this pace, maintainer triage will be key to preventing stalled development and ensuring that niche compatibility and cross-platform build fixes receive timely resolution. https://github.com/nullclaw/nullclaw/issues/1078 | https://github.com/nullclaw/nullclaw/pull/1077

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-10-23

---

## 1. Today's Overview

IronClaw is a moderately active AI agent project receiving regular dependency maintenance updates, primarily automated via Dependabot. Over the past 24 hours, 6 pull requests and 2 issues were touched, but none represent new feature work or breaking changes — all activity is concentrated in dependency bumps across frontend (`vite`, `storybook`, `dompurify`) and Python test tooling (`certifi`). The officeqa benchmark failure taxonomy (#8153) was opened as an analysis-only issue, suggesting the team may be shifting focus toward root-cause documentation of model-quality failures. No new releases were published today. Overall project health appears stable; the continuous stream of dependency patches indicates good tooling hygiene, though the pair of conflicting `dompurify` PRs signals a need for better dependency-lock governance.

---

## 2. Releases

**No new releases recorded today.**

---

## 3. Project Progress

| PR | Status | Change | Area |
|---|---|---|---|
| #8149 | **Closed** | `dompurify` 3.4.12 → 3.4.16 | Frontend deps |
| #8154 | Open | `vite` 8.1.3 → 8.1.6 | Frontend deps |
| #8155 | Open | `dompurify` 3.4.12 → 3.4.17 | Frontend deps |
| #8156 | Open | `@storybook/addon-vitest` 10.5.7 → 10.6.2 | Frontend deps |
| #8157 | Open | `certifi` 2026.7.22 → 2026.10.19 | Test e2e |
| #8158 | Open | `storybook` 10.5.7 → 10.6.2 | Frontend deps |

**Merged/closed PR today:** PR #8149 (dompurify bump to 3.4.16) was merged and superseded by a newer dompurify update (#8155) bumping to 3.4.17. This likely reflects a rollback after a potential regression or compatibility concern with the direct-to-latest change. **Key observation:** The dompurify conflict between #8149 (→3.4.16) and #8155 (→3.4.17) in the same component area indicates the maintainers are still converging on a final version, potentially due to upstream API changes or security fixes not fully validated yet. No substantive feature code advanced today.

---

## 4. Community Hot Topics

### Issue #8153 — Daily ironclaw failure taxonomy (Open)
- **URL:** https://github.com/nearai/ironclaw/issues/8153
- **Summary:** Analyzes officeqa benchmark results from 2026-10-22, finding 64 non-pass tasks that are overwhelmingly genuine model-quality errors — specifically DeepSeek-V4-Flash mis-navigation patterns.
- **Underlying need:** This signals an active effort to document failure modes systematically rather than treat every non-pass task as a defect. Useful for tracking model drift and prioritizing targeted fine-tuning efforts. Low community engagement so far (0 comments, 0 👍), but represents a valuable diagnostic investment.

### Issue #3168 — ARM64/aarch64 Docker build support (Closed)
- **URL:** https://github.com/nearai/ironclaw/issues/3168
- **Status:** Closed on 2026-10-22
- **Summary:** IronClaw only publishes linux/amd64 Docker images, preventing ARM64 users from running official images. Contributor noted that Cranelift (the WASM JIT compiler) already supports aarch64; only armv7 (32-bit) limitation remains tracked in #1339.
- **Underlying need:** Growing Linux ARM server adoption makes this increasingly relevant. Closed suggests either resolution or sunset-with-note, but given no release since May, this may have been deprioritized without a formal decision.

---

## 5. Bugs & Stability

No newly reported critical bugs, crashes, or regressions appear in today's data. The dependency bump cycle does carry some risk vectors:

| Risk | Source | Severity |
|---|---|---|
| `dompurify` version oscillation (3.4.16 → 3.4.17) | PRs #8149 (merged) / #8155 (open) | **Medium** — may indicate regression not yet caught; potential XSS sanitization behavior change |
| `vite` upgrade path incomplete | PR #8154 (open) | **Low** — vite 8.x API changes could break frontend config if not all imports migrated |
| `certifi` version jump (July → October 2026) | PR #8157 (open) | **Low** — high-frequency bump may introduce date-sensitive test environment differences |

**Fix PRs present:** None for confirmed bugs, but the dompurify back-and-forth suggests the team is actively trialing fixes.

---

## 6. Feature Requests & Roadmap Signals

No explicit user-requested features surfaced in today's data. However, several signals point toward upcoming priorities:

- **ARM64 Docker support** (Issue #3168) remains unaddressed despite being tracked for ~5 months; with no new release recently, it may be reconsidered for the next milestone.
- **Dompurify version instability** (#8149/#8155) could reflect a broader principle: better dependency version governance than sequential Dependabot runs. Maintainers may adopt automated lockfile auditing or pinning strategies.
- **Officeqa failure taxonomy** (#8153) hints at a potential **model robustness evaluation** capability as a near-term roadmap item — systematic failure categorization rather than ad-hoc bug reporting.

---

## 7. User Feedback Summary

Based on available data:

- **Pain point implicit in #8153:** Users rely on IronClaw benchmarks as quality gates; the officeqa 64/64 failure rate for DeepSeek-V4-Flash may be a churn signal. Users care about *why* tasks fail — the taxonomy issue shows demand for transparent failure explanations.
- **Platform access pain point in #3168:** ARM64 deployment remains blocked; enterprise/cloud environments increasingly deploy on ARM, making this a recurring blocker for cloud-native deployments.
- **Frontend performance feedback is absent** — no user complaints about UI latency or breakage despite multiple vite/storybook patches, suggesting the frontend stack is stable from a user perspective.
- **Overall satisfaction trend:** Improving dependency health signals proactive maintenance, but the dompurify oscillation may frustrate users who expect clean automated updates without backtracking.

---

## 8. Backlog Watch

| Issue/PR | Title | Open? | Criticality | Action Needed |
|---|---|---|---|---|
| #3168 | Add arm64/aarch64 platform support for Docker builds | **Closed** (May–Oct 2026) | High — actively blocks ARM deployments | Review closed state; decide whether to reopen with implementation or close permanently |
| #1339 | armv7 (32-bit) ARM limitation | Referenced in #3168 | Medium — minor edge case | Link tracking for v1339 resolution |
| #8153 | Daily ironclaw failure taxonomy | **Open** | Low — analytical, not blocking | If adopted, becomes recurring weekly practice; consider automation once format stabilized |
| #8149/#8155 | dompurify dependency conflict | #8155 open; #8149 merged | Medium — cascading risk if security-relevant patch released | Resolve quickly: choose 3.4.17 or revert to 3.4.16 with rationale |
| #8154 | vite 8.1.3 → 8.1.6 | Open | Low — pre-release major in progress | Monitor changelog for breaking changes before merging |

---

**Bottom line:** IronClaw is in a maintenance-heavy phase with strong Dependabot hygiene, but the dompurify conflict and stalled ARM issue suggest the team should focus governance improvements ahead of substantial feature development. No releases today; project stability is healthy but the dompurify back-and-forth warrants a quick maintainer attention ping.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-10-23

## 1. Today's Overview

LobsterAI showed **high internal development velocity** on 2026-10-22 with **7 pull requests merged or closed** and **0 new issues** filed. All activity centered on renderer fixes, media confirmation recovery, authentication state handling, browser tool reliability, and DSH integration — indicating a stabilization sprint rather than feature expansion. No releases were cut, and community engagement (comments, reactions) remained at zero across all items. The single remaining open PR (#2739) is a stale external contribution adding keyless Parallel web search, awaiting maintainer review since September.

## 2. Releases

**No new releases** published in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (2026-10-22)

| PR | Area | Type | Summary |
|----|------|------|---------|
| [#2926](https://github.com/netease-youdao/LobsterAI/pull/2926) | renderer | chore | Updated feedback mechanism (details not specified in summary). |
| [#2925](https://github.com/netease-youdao/LobsterAI/pull/2925) | renderer | fix | Replaced bundled expert fallback avatar with a pastel-blue character; added expert avatars to featured scenario entry cards in Explore view. |
| [#2924](https://github.com/netease-youdao/LobsterAI/pull/2924) | renderer, docs, main, openclaw, cowork | fix | **Major media confirmation overhaul**: fixed video cost confirmation consuming wait time before display, timeout leaving users stuck; added 2-min countdown on first visibility + window focus; preserved description/params on timeout with refresh & re-confirm; added 30-min in-process retention with revision/sequence deduplication; introduced confirmation-state IPC; separated confirmation vs. generation timeouts in OpenClaw; upgraded media lifecycle telemetry to schemaVersion=3. |
| [#2923](https://github.com/netease-youdao/LobsterAI/pull/2923) | renderer | fix | Fixed sidebar hiding "My Account" and model selector showing login prompt during session restoration; distinguished session restoration from genuine unauthenticated state. |
| [#2585](https://github.com/netease-youdao/LobsterAI/pull/2585) | main | feat | **DSH integration**: synced LobsterAI `thinking` metadata (`supportsThinking`, `thinkingLevelMap`, `thinkingConfig`) → DSH `reasoningEfforts` (model-level) and `config.reasoningEffort` (global), enabling "thinking strength" control in DSH Web UI for LobsterAI models. (PR open since Aug 31, merged today.) |
| [#2922](https://github.com/netease-youdao/LobsterAI/pull/2922) | docs, main, openclaw | fix | Improved browser recovery on Windows (process-check timeouts, PID reuse protection), fixed image-load hangs blocking navigation, enforced global proxy for `web_fetch`; refined tool-end events to distinguish HTTP, browser-connection, parameter, reference, and policy errors — preventing misclassification of external content as auth/quota/gateway failures. Related to #2866. |

**Net impact**: 6 PRs merged, spanning UI polish, critical media confirmation UX, auth-state clarity, DSH feature parity, and browser-tool robustness.

## 4. Community Hot Topics

**No issues or PRs with comments or reactions** in the last 24h. All 7 PRs show `Comments: undefined` and `👍: 0`. The only open PR with history is:

- **[#2739](https://github.com/netease-youdao/LobsterAI/pull/2739)** — *Add optional keyless Parallel web search* (open since 2026-09-21, updated 2026-10-22). External contributor `georgeatparallel` proposes adding Parallel as a bundled web-search engine usable without API key (anonymous, rate-limited "Fast" tier). **Signal**: Community interest in zero-config search alternatives; maintainer bandwidth appears to be the blocker.

## 5. Bugs & Stability — Today's Fixes (Ranked by Severity)

| Severity | PR | Bug Description | Fix Status |
|----------|----|-----------------|------------|
| **High** | [#2924](https://github.com/netease-youdao/LobsterAI/pull/2924) | Video cost confirmation consumed wait time before UI display; timeout left users unable to proceed, no recovery on page reload/session switch. | **Fixed** — countdown starts on visibility+focus; timeout preserves state with refresh/re-confirm; 30-min retention with deduplication; IPC + telemetry upgrade. |
| **High** | [#2922](https://github.com/netease-youdao/LobsterAI/pull/2922) | Browser tool persistently unavailable after transient Windows process-check timeout; image loads blocked navigation; `web_fetch` ignored global proxy; error misclassification (external content → auth/quota/gateway). | **Fixed** — transport re-validation, PID reuse protection, proxy enforcement, granular error taxonomy. |
| **Medium** | [#2923](https://github.com/netease-youdao/LobsterAI/pull/2923) | Session restoration hid "My Account" and showed login prompt; transient verification failure caused cached signed-in user to see model-config prompt incorrectly. | **Fixed** — account entry stays visible; restoration vs. unauthenticated states distinguished. |
| **Low** | [#2925](https://github.com/netease-youdao/LobsterAI/pull/2925) | Fallback expert avatar outdated; featured scenario cards lacked expert avatars. | **Fixed** — new pastel-blue avatar; avatars added to Explore entry rows. |
| **Low** | [#2926](https://github.com/netease-youdao/LobsterAI/pull/2926) | Feedback mechanism unspecified update. | **Fixed** — chore merge. |

**No new bugs reported today** (0 issues opened).

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Keyless Parallel web search** | [#2739](https://github.com/netease-youdao/LobsterAI/pull/2739) (external PR, stale) | **Medium** — code complete, just needs review/merge; adds zero-config search alternative. |
| **DSH reasoning-effort / thinking strength UI** | [#2585](https://github.com/netease-youdao/LobsterAI/pull/2585) (merged today) | **Delivered** — metadata sync done; DSH Web UI control now functional for LobsterAI models. |
| **Media confirmation UX overhaul** | [#2924](https://github.com/netease-youdao/LobsterAI/pull/2924) (merged today) | **Delivered** — major reliability + telemetry upgrade; schemaVersion=3 enables future analytics. |
| **Browser tool hardening** | [#2922](https://github.com/netease-youdao/LobsterAI/pull/2922) (merged today) | **Delivered** — Windows stability, proxy compliance, error taxonomy. |

**Prediction**: Next version will likely bundle the merged fixes (media confirmation, browser tools, auth state, DSH thinking metadata) plus the avatar refresh. The Parallel search PR is the only pending feature candidate.

## 7. User Feedback Summary

**No direct user feedback** (issues, comments, reactions) captured in the last 24h. Inferred pain points from merged fixes:

- **Media generation users** experienced stuck confirmations, lost progress on timeout, no recovery after reload/session switch — now resolved.
- **Windows browser-tool users** faced persistent unavailability after transient glitches, navigation hangs on images, proxy bypass — now resolved.
- **Session restoration** caused confusing auth UI (hidden account, false login prompts) — now resolved.
- **DSH power users** lacked "thinking strength" control for LobsterAI models — now enabled via metadata sync.
- **Explore/Expert UI** had stale fallback avatar and missing avatars on featured cards — polished.

## 8. Backlog Watch — Stale Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **[#2739](https://github.com/netease-youdao/LobsterAI/pull/2739)** Add optional keyless Parallel web search | 32 days (opened 2026-09-21) | **Open, stale** | External contribution, feature-complete, zero-config search alternative. Only open PR. Maintainer review needed. |
| **[#2585](https://github.com/netease-youdao/LobsterAI/pull/2585)** DSH reasoning-effort metadata sync | 53 days (opened 2026-08-31) | **Merged today** | Was stale; now delivered. Good example of long-running PR finally landing. |

**No stale issues** (0 issues total). The backlog is effectively empty except for the single open PR.

---

**Overall Health**: 🟢 **Healthy** — High merge throughput, zero open bugs, critical fixes delivered, telemetry upgraded. Only risk is **review latency on external contributions** (1 PR waiting 32 days). Recommend maintainers triage #2739 this week to sustain community goodwill.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑10‑23**

---

### 1. Today’s Overview  
Moltis shows a focused development pulse: no new issues were opened or closed in the last 24 hours, while five pull requests were updated (three remain open, two have been merged/closed). The project is therefore in an *active PR‑driven* state with no reported bugs or user‑reported incidents today. Overall health appears stable, with ongoing work on provider integrations, chat handling, and internationalisation.

---

### 2. Releases  
*No new releases were published.*  

---

### 3. Project Progress  
- **Merged/Closed PRs**  
  - **#1314** – *fix(providers): refresh retired MiniMax models and verify live tool use* (closed 2026‑10‑22) – updates reasoning propagation, replaces deprecated MiniMax M2 API with the documented `MiniMax‑M3.1‑Flash` endpoint.  
  - **#1313** – *fix(tls): update certificate verifier and roots for CA distrust* (closed 2026‑10‑22) – resolves a race condition in browser‑profile locking and strengthens TLS trust for container cleanup scenarios.  

- **Open PRs** (all updated today)  
  - **#1317** – *fix(providers): correct DeepSeek thinking tests and refresh Z.AI models* – aligns DeepSeek provider registration with production standards, ensuring the thinking toggle and replay policy are correctly sent.  
  - **#1316** – *fix(chat): prevent stale reply targets from duplicating replies* – addresses a bug where silent completions or aborted turns left “stale” anchors that could cause duplicate messages.  
  - **#1315** – *fix(i18n): localize security, onboarding, sessions, and model selection* – moves hard‑coded English UI strings to the existing locale bundles (en, fr, zh, zh‑TW) and syncs model‑selector text on language switches.  

These merges and updates show a strong focus on reliability (TLS, provider reasoning), chat consistency, and internationalisation.

---

### 4. Community Hot Topics  
| PR | Author | Status | Key Concerns | Link |
|----|--------|--------|--------------|------|
| **#1317** | penso | OPEN | DeepSeek thinking test correctness & Z.AI model refresh | <https://github.com/moltis-org/moltis/pull/1317> |
| **#1316** | PeterDaveHello | OPEN | Duplicate reply handling in chat streams | <https://github.com/moltis-org/moltis/pull/1316> |
| **#1315** | PeterDaveHello | OPEN | Incomplete i18n coverage for security & onboarding UI | <https://github.com/moltis-org/moltis/pull/1315> |

All three open PRs have zero reactions/comments, indicating they are either recent or awaiting reviewer attention. The most active discussion is likely around **#1317**, because it touches a core provider (DeepSeek) and may affect model behavior for many users.

---

### 5. Bugs & Stability  
- **No new bug reports** were submitted in the past 24 hours (issues count = 0).  
- The two **closed PRs** (#1314, #1313) address stability concerns (reasoning propagation and TLS race conditions). Since they are already merged, the current codebase is expected to be more robust in those areas.

---

### 6. Feature Requests & Roadmap Signals  
- No explicit feature‑request issues are listed.  
- The **i18n PR (#1315)** suggests a roadmap emphasis on broader language support, which could be a precursor to a more extensive UI localisation effort in a future release.

---

### 7. User Feedback Summary  
- **Pain Points**:  
  - Stale chat anchors causing duplicate replies (addressed by #1316).  
  - Hard‑coded English UI strings for security and onboarding steps (targeted by #1315).  
- **Satisfaction**: No direct user complaints are visible; the recent merges indicate that maintainers are responsive to reported issues.

---

### 8. Backlog Watch  
| Item | Reason for Attention | Link |
|------|----------------------|------|
| **#1317** (Open) | Core provider logic; may impact DeepSeek and Z.AI model reliability. No reactions yet, so reviewer interest is unclear. | <https://github.com/moltis-org/moltis/pull/1317> |
| **#1316** (Open) | Chat duplication bug; could affect user experience in high‑traffic channels. Still awaiting review. | <https://github.com/moltis-org/moltis/pull/1316> |
| **#1315** (Open) | i18n gaps; may limit adoption in non‑English markets. Requires locale bundle updates. | <https://github.com/moltis-org/moltis/pull/1315> |

Maintainers should prioritize review of these PRs, especially #1317, to keep the provider ecosystem consistent and to prevent regressions in thinking‑mode behavior.  

---  

*Prepared on 2026‑10‑23. All links point to the official Moltis GitHub repository.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-10-23

## 1. Today's Overview
The project shows **high velocity** with 45 total activities (18 issues + 27 PRs) in the last 24 hours and a fresh patch release (v2.2.2.post1). Activity is heavily weighted toward **security hardening, stability fixes, and infrastructure improvements** rather than new features. Six PRs were merged/closed today, including a critical security fix for emSign CA trust and a Node.js upgrade. The issue backlog reveals recurring pain points in **multi-channel message routing, Docker/Hub deployment, and configuration persistence** — areas where architectural debt is surfacing as the platform scales.

## 2. Releases

### v2.2.2.post1 (Patch Release — Published 2026-10-22)
**Changes:**
- **Security**: Remediated emSign CA trust across dependencies, installers, and builds ([#8370](https://github.com/agentscope-ai/QwenPaw/pull/8370))
- **Version bump** to v2.2.2.post1 ([#8369](https://github.com/agentscope-ai/QwenPaw/pull/8369))
- **Security Notice** issued urging all users to upgrade ([#8385](https://github.com/agentscope-ai/QwenPaw/issues/8385))

**Migration Notes:** No breaking changes. Pure security patch. Users on v2.2.2 should upgrade immediately via their installation method (Desktop, PyPI, Docker). A release verification issue ([#8386](https://github.com/agentscope-ai/QwenPaw/issues/8386)) tracks installation validation across platforms.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Description | Impact |
|----|------|-------------|--------|
| [#8371](https://github.com/agentscope-ai/QwenPaw/pull/8371) | Security/Deps | **Node.js 22.23.4 upgrade** — fixes CVE-2026-111497 & CVE-2026-105481; enforces `.nvmrc` as single source of truth for CI/Docker | Critical security hygiene; prevents supply-chain risk |
| [#8370](https://github.com/agentscope-ai/QwenPaw/pull/8370) | Security | **emSign CA trust remediation** across dependencies, installers, builds | Addresses root-CA distrust affecting TLS validation in downstream environments |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | Architecture | **Plugin clean unload & rollback-safe hot reload** (XXXL) — two-layer teardown ledger (`PluginInstance`) | Major DX improvement: plugin updates no longer rebuild all workspaces; failed updates auto-rollback |
| [#8379](https://github.com/agentscope-ai/QwenPaw/pull/8379) | Test Fix | **Fix pytest collection collision** (`test_backup` module name conflict) | Unblocks local dev gate (`pytest` now passes on clean checkout) |
| [#8383](https://github.com/agentscope-ai/QwenPaw/pull/8383) | Test Fix | **Platform-neutral sips preflight tests** (macOS-only binary) | Fixes CI failures on `windows-latest` |
| [#8381](https://github.com/agentscope-ai/QwenPaw/pull/8381) | Test Fix | **Platform-stable advisor/TUI test assertions** | Fixes 3 `windows-latest` unit test failures |

**Net Progress:** Security posture hardened; plugin system made production-ready; CI stability restored across platforms.

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | Feature | 7 | **Plugin-facing theme extension point** — semantic token override layer so plugins can hook into Console theming beyond single `colorPrimary` |
| [#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351) | Bug | 3 | **Composer draft keyed per-agent, not per-conversation** — unsent text leaks across sessions (PR [#8362](https://github.com/agentscope-ai/QwenPaw/pull/8362) fixes) |
| [#8359](https://github.com/agentscope-ai/QwenPaw/issues/8359) | Bug | 2 | **Hub-in-container Docker runtime failure** — readiness probe hardcodes `127.0.0.1` (PR [#8384](https://github.com/agentscope-ai/QwenPaw/pull/8384) fixes) |
| [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339) | Enhancement | 2 | **Disable auto-scroll during streaming** — scroll-lock setting for Desktop Console |
| [#8275](https://github.com/agentscope-ai/QwenPaw/issues/8275) | Enhancement | 2 (👍1) | **Global Skill/MCP sharing in Hub** — admin-managed, auto-synced to all users; retains personal overrides |

**Pattern:** Top discussions cluster around **extensibility (plugins/themes)**, **multi-tenancy (Hub global resources)**, and **session isolation bugs** — signals of a platform maturing from single-user tool to team infrastructure.

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 **Critical** | [#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350) | **Feishu channel blocks event loop** with sync HTTP calls — entire service hangs on network failure, SIGTERM ignored | — |
| 🔴 **Critical** | [#8388](https://github.com/agentscope-ai/QwenPaw/issues/8388) | **QQ channel broken post-upgrade** — `ModuleNotFoundError: _qwenpaw_remote_backend` cascades to all tool calls | — |
| 🟠 **High** | [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343) | **DingTalk final reply silently dropped** when `sessionWebhook` expires — no OpenAPI fallback (errcode=300001) | [#8341](https://github.com/agentscope-ai/QwenPaw/pull/8341) splits long replies but doesn't address fallback |
| 🟠 **High** | [#8335](https://github.com/agentscope-ai/QwenPaw/issues/8335) | **48 MB request bodies wedge sessions permanently** — media in chat history exceeds API limits, unrecoverable | — |
| 🟡 **Medium** | [#8359](https://github.com/agentscope-ai/QwenPaw/issues/8359) | **Hub-in-container Docker readiness fails** — hardcoded `127.0.0.1` probe | [#8384](https://github.com/agentscope-ai/QwenPaw/pull/8384) |
| 🟡 **Medium** | [#8374](https://github.com/agentscope-ai/QwenPaw/issues/8374) | **`QWENPAW_CORS_ORIGINS` ignored** — read at import time before env injection | [#8389](https://github.com/agentscope-ai/QwenPaw/pull/8389) |
| 🟡 **Medium** | [#8329](https://github.com/agentscope-ai/QwenPaw/issues/8329) | **Telegram drops quoted context** — `reply_to_message` never read, agent loses context | — |
| 🟡 **Medium** | [#8342](https://github.com/agentscope-ai/QwenPaw/issues/8342) | **Quoted replies lose control-command routing** in 7 channels — `/stop` etc. misclassified | — |
| 🟢 **Low** | [#8368](https://github.com/agentscope-ai/QwenPaw/issues/8368) | **Delete current session → 404** | [#8375](https://github.com/agentscope-ai/QwenPaw/pull/8375) |
| 🟢 **Low** | [#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351) | **Composer draft leaks across conversations** | [#8362](https://github.com/agentscope-ai/QwenPaw/pull/8362) |
| 🟢 **Low** | [#8378](https://github.com/agentscope-ai/QwenPaw/issues/8378) | **Model call regression** — old `agent.json` `active_model` format unsupported | — |
| 🟢 **Low** | [#8377](https://github.com/agentscope-ai/QwenPaw/issues/8377) | **pytest collection abort** — duplicate `test_backup` modules | [#8379](https://github.com/agentscope-ai/QwenPaw/pull/8379) |

**Cluster Insight:** 7/12 bugs are **channel-adapter related** (Feishu, QQ, DingTalk, Telegram, 7-channel routing). The channel extraction PR ([#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)) — moving channels to isolated subprocess plugins — directly addresses this fault domain.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|----------------------------|-----------|
| **Global Skill/MCP management in Hub** | [#8275](https://github.com/agentscope-ai/QwenPaw/issues/8275) | 🟢 High | Admin demand for team-scale ops; aligns with Hub multi-user architecture |
| **Plugin theme extension (semantic tokens)** | [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | 🟡 Medium | Deepens plugin ecosystem; Console theming (#7741) already landed |
| **Scroll-lock during streaming** | [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339) | 🟡 Medium | Long-standing UX ask; low implementation risk |
| **Configurable gateway timeout (600s default)** | [#8372](https://github.com/agentscope-ai/QwenPaw/issues/8372) | 🟢 High | PR [#8387](https://github.com/agentscope-ai/QwenPaw/pull/8387) already open — trivial config addition |
| **Shared daemon for Desktop (independent windows)** | [#8373](https://github.com/agentscope-ai/QwenPaw/pull/8373) | 🟢 High | XXXL PR under review; solves multi-window runtime conflicts |
| **Python Code Mode (experimental)** | [#8224](https://github.com/agentscope-ai/QwenPaw/pull/8224) | 🟡 Medium | Major feature; still experimental, may stay behind flag |
| **PawApp SDK redesign** | [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | 🟡 Medium | Foundational for app ecosystem; XXXL scope suggests multi-release rollout |

**Prediction:** v2.3.0 will likely ship **global Hub resources, configurable gateway timeout, shared Desktop daemon, and plugin hot-reload** — all have active PRs. Python Code Mode and PawApp SDK may remain experimental.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Channel reliability in production** | Feishu hang (#8350), QQ breakage (#8388), DingTalk silent drops (#8343), Telegram context loss (#8329) | Teams using QwenPaw as multi-channel gateway hit silent failures; no observability when webhooks expire |
| **Session isolation broken** | Draft leakage (#8351), delete-session 404 (#8368), 48MB wedge (#8335) | Conversation state management unreliable for long-running agents |
| **Hub deployment friction** | Containerized Hub can't reach Docker runtime (#8359), CORS config ignored (#8374) | Self-hosted Hub ops require workarounds; env config not dynamic |
| **Upgrade fragility** | QQ broken post-upgrade (#8388), model config regression (#8378) | Users fear `pip install -U`; migration paths unclear |
| **Missing team-scale features** | Global Skill/MCP request (#8275, 👍1) | Admins manually replicate config per user — not sustainable for orgs |

**Positive Signals:** Active first-time contributors (PRs [#8362](https://github.com/agentscope-ai/QwenPaw/pull/8362), [#8376](https://github.com/agentscope-ai/QwenPaw/pull/8376), [#8379](https://github.com/agentscope-ai/QwenPaw/pull/8379)); test coverage investment (PR [#8380](https://github.com/agentscope-ai/QwenPaw/pull/8380) adds 106 frontend test files).

---

## 8. Backlog Watch — Stalled Items Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) | 11 days | **Open, XXXL** | **Channel extraction to isolated plugins** — architectural fix for 7 channel bugs; blocked on review bandwidth |
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | 34 days | **Open, XXXL** | **PawApp SDK redesign** — foundation for app ecosystem; massive scope needs phased review |
| [#8224](https://github.com/agentscope-ai/QwenPaw/pull/8224) | 10 days | **Open, XXXL** | **Python Code Mode** — experimental but high-value; needs design sign-off |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | 49 days | **Closed today** | ✅ **Plugin hot-reload landed** — major milestone |
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | 22 days | **Open, 7 comments** | **Plugin theme API** — highest community engagement; no PR yet |
| [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339) | 57 days | **Open, 2 comments** | **Scroll-lock** — oldest active UX request; trivial to implement |

**Recommendation:** Prioritize review of [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) (channel isolation) — it unblocks the largest bug cluster. Assign a maintainer to [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) for plugin theme API design.

---

## Health Indicators

| Metric | Signal |
|--------|--------|
| **Release cadence** | Patch within 8 days of v2.2.2 — responsive security posture |
| **PR merge rate** | 6/27 merged today (22%) — healthy throughput for XL/XXXL PRs |
| **First-time contributors** | 3 today — growing contributor base |
| **Test investment** | 106 new frontend test files — quality culture strengthening |
| **Bug:Feature ratio** | ~12 bugs vs 3 feature asks today — stability focus appropriate |
| **Critical path coverage** | Channel extraction PR addresses 7/12 bugs — good architectural alignment |

**Overall:** Project is in a **consolidation phase** — hardening security, fixing multi-channel reliability, and laying plugin/daemon foundations for team-scale use. Velocity is high; technical debt is being actively paid down.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-10-23

## 1. Today's Overview
ZeroClaw shows high daily velocity with **48 issues updated** (36 open/active, 12 closed) and **50 PRs updated** (42 open, 8 merged/closed). There were **no new releases** today. Activity is concentrated around **v0.8.7 stabilization** and **v0.9.0 groundwork**, with a strong emphasis on security hardening, channel reliability, plugin safety, and CI/release pipeline fixes. The project remains actively maintained, though several high-risk items remain open or blocked awaiting review.

## 2. Releases
**No new releases** were published on 2026-10-23. Recent release context includes v0.8.6 and ongoing v0.8.7 / v0.9.0 preparation work visible in issue and PR labels.

## 3. Project Progress
### Merged / Closed PRs Today
| PR | Title | Labels / Release |
|---|---|---|
| [#11863](https://github.com/zeroclaw-labs/zeroclaw/pull/11863) | test(runtime): make receipt-bound late_tool_search tests opt-in | ci, runtime, release:v0.8.7 |
| [#11848](https://github.com/zeroclaw-labs/zeroclaw/pull/11848) | fix(plugins): name the sender in plugin_channel_sender_denied records | runtime:wasm, release:v0.8.7 |
| [#11841](https://github.com/zeroclaw-labs/zeroclaw/pull/11841) | docs(changelog): match v0.8.6 In brief wording on OIDC | docs, release:v0.8.7 |
| [#11941](https://github.com/zeroclaw-labs/zeroclaw/pull/11941) | ci(plugins): raise cranelift runtime leg timeout to 30 minutes | ci, risk:low |
| [#11833](https://github.com/zeroclaw-labs/zeroclaw/pull/11833) | ci(docker): bound arm64 build memory | ci, docker, release:v0.8.7 |
| [#11967](https://github.com/zeroclaw-labs/zeroclaw/pull/11967) | fix(ci): run crates.io pre

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*