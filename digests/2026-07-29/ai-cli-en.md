# AI CLI Tools Community Digest 2026-07-29

> Generated: 2026-07-29 01:45 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

**Cross‑Tool Comparison Report – AI‑CLI Ecosystem (as of 2026‑07‑29)**  

---

### 1. Ecosystem Overview  
The AI‑CLI space now comprises a dozen actively maintained, open‑source command‑line assistants that expose large‑language‑model capabilities through scripts, web‑shells, or native desktop clients. Tools are converging on three core pillars: **session & state management**, **plugin/extension ecosystems**, and **cross‑platform reliability** (Windows, macOS, Linux, and WSL). Most projects release on a near‑daily cadence, but the maturity of their underlying protocols (MCP, MCP‑style plugin manifests, token‑budget tracking, etc.) varies widely, creating a fragmented but rapidly evolving developer experience.

---

### 2. Activity Comparison  

| Tool (repo) | Issues discussed today* | PRs merged/opened today† | Release today‡ | Notes |
|-------------|------------------------|--------------------------|----------------|-------|
| **Claude Code** (anthropics/claude‑code) | ~10 hot issues (most‑highlighted) | 3 key PRs merged (PDF support, doc‑link fix, plugin‑marketplace example) | No | Focus on stability (session limits, auth loops) and incremental CLI‑DX improvements. |
| **OpenAI Codex** (openai/codex) | 10 hot issues (incl. Linux desktop, RTL, multi‑agent spawn) | 10 key PRs merged (protocol types, plugin timestamps, remote‑exec handling) | Yes – rust 0.146.0 released | Heavy emphasis on UI/UX across platforms and first‑class plugin marketplace. |
| **Gemini CLI** (google-gemini/gemini‑cli) | 10 hot issues (sub‑agent recovery, memory retries, SSRF fix) | 10 key PRs merged (SSRF fix, token refresh, resource‑leak cleanup) | Yes – v0.53.0 stable + nightly/preview builds | Strong focus on agent reliability and sandbox/credential security. |
| **GitHub Copilot CLI** (github/copilot‑cli) | 10 hot issues (Windows resume hang, BYOK, billing errors) | 1 PR merged (security review) | No | Emphasises enterprise‑scale credential handling and auto‑update friction. |
| **Kimi Code CLI** (MoonshotAI/kimi‑cli) | 5 hot issues (session‑delete command, Windows plugin crash, OAuth login) | 5 key PRs merged (MCP log routing, model‑name transparency) | No | Targets lightweight session control and plugin‑stability on Windows/macOS. |
| **Qwen Code** (QwenLM/qwen‑code) | 10 hot issues (main‑CI failures, context‑window token errors) | 9 key PRs merged (web‑shell panels, bug‑fixes for asyncGenerator) | Yes – v0.21.1 nightly released | Prioritises test‑stability and rich media handling in web‑shell. |
| **Pi (badlogic/pi‑mono)** | 10 hot issues (WSL path handling, Rust rewrite proposal) | 10 key PRs merged (six‑el image rendering, ADRs) | No | Community‑driven feature expansion (API/Markdown, provider support). |
| **DeepSeek TUI / CodeWhale** (Hmbown/CodeWhale) | 10 hot issues (sandbox restrictions, LaTeX rendering) | 2 PRs merged (Operate mode exposure, CRLF preservation) | No | Focus on zero‑sandbox mode and scientific‑notation rendering for niche users. |

\* *Hot issues* = number of distinct issues highlighted in today’s “Hot Issues” section (the most‑commented or most‑up‑voted).  
† *PRs* = notable merged/opened PRs explicitly listed in the digest.  
‡ *Release* = any production version, nightly, preview, or stable tag shipped in the last 24 h.

---

### 3. Shared Feature Directions  

| Shared Requirement | Tools Mentioning It | Typical Use‑Case |
|--------------------|---------------------|------------------|
| **Configurable session & visibility controls** | Claude Code (configurable agent views), Gemini CLI (session‑delete request), Kimi Code (session‑delete), Copilot CLI (auto‑update), Qwen Code (session‑aware file handling) | Users need to prune, rename, or share ephemeral sessions without leaving the CLI. |
| **Transparent model / plugin metadata** | OpenAI Codex (plugin installation timestamps), Gemini CLI (MCP server name normalization), Kimi Code (model name transparency), Qwen Code (API‑gateway paths) | Accurate attribution and debugging of which model or plugin actually executed a request. |
| **Robust multi‑agent orchestration** | Codex (sub‑agent visibility), Gemini CLI (sub‑agent recovery, nested context), Copilot CLI (auto‑skill curator), DeepSeek TUI (zero‑sandbox for autonomous agents) | Enables complex workflows where several specialized agents collaborate on a single task. |
| **Reliable cross‑platform execution** | Codex (Linux desktop, RTL support), Gemini CLI (Windows seat‑belt sandbox fallback), Pi (WSL path handling), Qwen Code (Windows UI freezes) | Guarantees the same command semantics and UI behavior on macOS, Linux, Windows, and WSL. |
| **Enhanced telemetry & cost awareness** | Claude Code (usage panel timestamps), Copilot CLI (billing‑entity errors), Kimi Code (usage panel reset timestamps), DeepSeek TUI (cost‑by‑route), Qwen Code (telemetry mapping) | Allows enterprises to audit consumption, enforce quotas, and avoid surprise charges. |

---

### 4. Differentiation Analysis  

| Aspect | Stand‑out Tools | Distinguishing Characteristics |
|--------|----------------|--------------------------------|
| **Target audience** | **Codex** – enterprise & research users needing a full‑featured desktop + marketplace; **Claude Code** – developers who prefer a lightweight CLI front‑end to Anthropic models; **Copilot CLI** – GitHub‑centric power users & CI pipelines; **Pi** – hobbyist / Open‑source community focused on extensibility. |
| **Technical approach** | **Codex** – heavy UI layer (Electron), built‑in plugin marketplace, extensive protocol abstractions; **Gemini CLI** – security‑first networking (SSRF, OAuth), strong focus on sandboxing and resource cleanup; **Kimi Code** – minimalistic plugin model with explicit session‑delete command; **DeepSeek TUI** – niche scientific‑notation & LaTeX rendering for academic users. |
| **Release cadence** | **Codex** – regular major releases (0.146.x) with extensive changelogs; **Gemini** – nightly/preview builds alongside stable; **Copilot** – slower, incremental patches; **Qwen** – nightly‑centric with fast‐track release pipeline. |
| **Community size** | **Codex** and **Claude Code** have the largest comment‑volume (hundreds of up‑votes) indicating broad adoption; **Pi** and **DeepSeek TUI** show strong but niche interest; **Copilot** maintains a steady but smaller user base focused on enterprise. |
| **Maturity of underlying protocols** | **Codex** & **Gemini** expose mature MCP‑style APIs and plugin manifests; **Claude** is still extending its session‑state mechanisms; **Copilot** relies on proprietary credential flows; **Kimi** is early‑stage with nascent MCP integration. |

---

### 5. Community Momentum & Maturity  

| Tool | Community Momentum (activity) | Maturity Indicators |
|------|------------------------------|----------------------|
| **OpenAI Codex** | **High** – 190 👍 on Linux desktop issue, >800 comments on session‑limit bug; 10 PRs merged daily. | Established release pipeline, stable MCP spec, extensive documentation. |
| **Claude Code** | **Medium‑High** – 826 comments on session‑limit issue; steady PR flow but fewer new features. | Core functionality stable, but session‑state bugs still open. |
| **Gemini CLI** | **Medium** – 10 hot issues, ~120 comments across them; focused on security patches. | Rapid iteration on reliability, but still in early adoption phase. |
| **GitHub Copilot CLI** | **Low‑Medium** – fewer comments (max 4 👍) but critical enterprise blockers (Windows resume). | Enterprise‑oriented, slower community growth, heavy reliance on GitHub ecosystem. |
| **Kimi Code CLI** | **Low** – modest issue list, few up‑votes; primary pain around OAuth on Windows. | Early stage, strong corporate backing but limited external contributions. |
| **Pi** | **Medium** – 13 up‑votes on Rust rewrite, active PR for sixel rendering. | Community‑driven roadmap, ambitious architectural changes. |
| **Qwen Code** | **Medium** – 4‑up‑vote E2E test failure, active PRs for UI panels. | Rapid CI‑fixing culture, but still consolidating release process. |
| **DeepSeek TUI / CodeWhale** | **Low** – focused on niche scientific use; limited comment volume. | Specialized, growing slowly around LaTeX and sandbox controls. |

**Overall:** The **most active ecosystems** are **OpenAI Codex** and **Claude Code** (high comment volumes, many open issues, large PR churn). **Gemini CLI** shows strong, focused momentum around security and reliability. Others are smaller but often target specific verticals.

---

### 6. Trend Signals for Developers  

1. **Session & State Transparency** – Across virtually every tool, users demand explicit session identifiers, deletion commands, and visibility into which model or plugin executed a task. Expect tighter MCP‑style token billing and audit trails.  
2. **Cross‑Platform Robustness** – Windows‑specific regressions (UI hangs, path handling, sandbox fallback) are the most frequently cited blockers; tools that solve these will gain enterprise traction.  
3. **Agent Orchestration Maturity** – Multi‑agent communication, sub‑agent model transparency, and safe termination (e.g., `/stop`) are emerging as standard expectations.  
4. **Telemetry & Cost Governance** – Usage panels, token‑budget visibility, and per‑route cost breakdowns are becoming baseline features for commercial‑grade CLIs.  
5. **Plugin Ecosystem Standardization** – Installation timestamps, eligibility flags, and marketplace integrations indicate a move toward a common plugin metadata schema (MCP manifests).  
6. **Security‑First Releases** – SSRF fixes, OAuth token refreshes, and seat‑belt sandbox fallbacks suggest that security hardening is now a primary release driver.  

**Implication:** For teams evaluating an AI‑CLI for production workflows, prioritize tools that already expose **session IDs**, provide **cross‑platform sandbox fallbacks**, and offer **granular telemetry**. Those that are actively standardizing **plugin metadata** and **agent state propagation** will likely evolve into the most sustainable foundations for future multi‑agent compositions.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills – Community Highlights (as of 2026‑07‑29)**  

---

### 1. Top Skills Ranking  
| Rank | PR (GitHub) | Skill Name / Core Functionality | Key Discussion Highlights | Current Status |
|------|-------------|--------------------------------|---------------------------|----------------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **run_eval.py fix** – resolves the chronic “recall = 0 %” bug in `run_eval.py` (and the downstream `run_loop.py` / `improve_description.py` loops). | • 10+ independent reproductions of the 0 % recall issue (Issue #556). <br>• Community emphasized that the optimization loop was “optimizing against noise.” <br>• Fix includes installing the eval artifact as a real skill, Windows stream‑reading fixes, trigger detection, and parallel‑worker support. | **Open** |
| 2 | [#1099](https://github.com/anthropics/skills/pull/1099) | **Windows subprocess crash fix** – addresses the crash when `run_eval.py` reads from a subprocess pipe on Windows (WinError 10038). | • All queries were reported as “not triggered,” yielding precision = 100 % / recall = 0 %. <br>• Root cause identified as Windows‑specific pipe handling; a one‑line change resolves the error. | **Open** |
| 3 | [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows compatibility fixes** – two one‑line patches for `subprocess.Popen` (CLI binary naming) and encoding (cp1252) problems. | • Users reported the optimizer could not evaluate any query on native Windows Python 3.14. <br>• Fixes make the skill‑creator scripts usable on Windows without breaking Unix‑first assumptions. | **Open** |
| 4 | [#1323](https://github.com/anthropics/skills/pull/1323) | **Trigger detection fix** – corrects missed skill‑name detection in `run_single_query`, preventing the description‑optimization loop from reporting recall = 0 % on every query. | • Directly ties to Issue #1169 (recall = 0 % on slash‑command queries). <br>• Community noted that without this fix the loop never progresses beyond the original description. | **Open** |
| 5 | [#1479](https://github.com/anthropics/skills/pull/1479) | **plan‑file‑hygiene skill** – introduces a lifecycle‑aware skill for managing planning artifacts (addresses Issue #1417). | • Community praised the precise framing of the problem (artifact accumulation). <br>• Early feedback calls for a clear “lifecycle” API and integration with existing planning tools. | **Open** |
| 6 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self‑audit skill (v1.3.0)** – mechanical file verification followed by a four‑dimensional reasoning quality gate (structure, documentation, execution, impact). | • Presented as a universal “damage‑severity” audit that can be applied to any project. <br>• Discussions revolve around priority ordering of the four dimensions and extensibility. | **Open** |
| 7 | [#723](https://github.com/anthropics/skills/pull/723) | **testing‑patterns skill** – comprehensive skill covering testing philosophy, unit testing, and React component testing. | • Highly requested by the testing community; includes AAA pattern, test naming conventions, and best‑practice examples. | **Open** |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel skill** – adds a skill for retro‑game development using the Pyxel engine (MCP server for `pyxel-mcp`). | • Niche but growing interest in 8‑bit/retro game creation. <br>• Community asked for sample workflows and template support. | **Open** |

*All listed PRs are currently **OPEN**; none have been merged yet.*

---

### 2. Community Demand Trends (derived from Issues)

- **Reliability & Trigger Accuracy** – Persistent “recall = 0 %” bugs (PR #1298, #1323, #1169) show a strong demand for robust trigger detection and correct evaluation of skill invocations.  
- **Cross‑Platform Compatibility** – Multiple Windows‑related issues (PR #1099, #1050, #1061) indicate a clear need for reliable operation on Windows environments.  
- **Documentation & Knowledge‑Base Skills** – Skills focused on document typography (PR #514), ODT/ODF handling (PR #486), and comprehensive system documentation (PR #95) reflect demand for high‑quality, production‑ready documentation tools.  
- **Testing & Quality Assurance** – The “testing‑patterns” skill (PR #723) and the “self‑audit” skill (PR #1367) highlight a push for built‑in testing and quality‑gate capabilities.  
- **Security & Trust Boundaries** – Issue #492 raises concerns about community skills masquerading as official Anthropic skills, pointing to a need for clearer provenance and trust mechanisms.  
- **Organizational Skill Sharing** – Issue #228 calls for org‑wide sharing, suggesting demand for collaborative skill libraries within enterprises.  
- **Integration with External Platforms** – Issues #29 (Bedrock), #16 (MCP exposure), and #1487 (claude‑api token overflow) show appetite for broader integration (AWS Bedrock, MCP APIs) and for skills that avoid context‑window exhaustion.  

---

### 3. High‑Potential Pending Skills (active‑comment PRs not yet merged)

| PR | Skill | Why It’s High‑Potential |
|----|-------|------------------------|
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan‑file‑hygiene** | Recent activity (July 2026), directly addresses a recurring community pain point (artifact accumulation). Likely to be merged soon. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self‑audit** | Introduces a universal quality‑gate; strong community interest in reliability and auditability. |
| [#1323](https://github.com/anthropics/skills/pull/1323) | **trigger detection fix** | Critical for the description‑optimization loop; recent updates (June 2026) indicate ongoing work. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color‑expert** | New, well‑scoped skill covering color systems; recent updates (July 2026) suggest active maintenance. |
| [#1261](https://github.com/anthropics/skills/pull/1261) | **trigger‑eval command isolation** | Fixes a subtle bug where eval files polluted the live project, affecting parallel evaluations; recent July 2026 update shows continued focus. |

These PRs represent the most actively discussed, recently updated, and potentially merge‑ready contributions.

---

### 4. Skills Ecosystem Insight  

*The community’s most concentrated demand is for reliable, cross‑platform skill execution and verification (especially trigger detection and Windows compatibility) together with new, domain‑specific skills that improve documentation, testing, and lifecycle management.*

---

1. **Today's Highlights**  
Today's top highlights revolve around critical session management bugs and containerization issues. The most urgent concerns include abrupt session limit exhaustion for Max plans (Issue 38335), browser preview crashes caused by Docker integrity blocks on Windows (Issue 80999), and a persistent iOS Simulator panel helper crash linked to Metal shader caching restrictions (Issue 80472). These issues are compounded by ongoing developer requests for configurable agent views and cross-device session continuity improvements.

2. **Releases**  
No new versions were released in the last 24 hours.

3. **Hot Issues**  
- **Session Limit Exhaustion (Issue 38335):** Max plan sessions end prematurely since March 23, affecting CLI users. With 826 comments and 470 upvotes, this high-traffic bug demands attention for billing transparency. [Link](https://github.com/anthropics/claude-code/issues/38335)  
- **Session Loss Post-Logout (Issue 26452):** Sessions vanish after desktop restarts, reported 50 times with 29 upvotes. Urgency tied to data recovery workflows. [Link](https://github.com/anthropics/claude-code/issues/26452)  
- **MCP Session State Loss (Issue 41836):** No session identifiers sent to MCP servers, breaking state preservation. High technical urgency with 25 upvotes. [Link](https://github.com/anthropics/claude-code/issues/41836)  
- **OAuth Redirect Loop (Issue 77966):** Windows authentication loops after "sign in again", with 15 comments and 11 upvotes. [Link](https://github.com/anthropics/claude-code/issues/77966)  
- **Git Server Access on Startup (Issue 21108):** Unintended origin server connections post-launch. Security-sensitive issue with 15 comments. [Link](https://github.com/anthropics/claude-code/issues/21108)  
- **CI Monitoring Widget Lie (Issue 78222):** Falsely claims `gh` isn't installed despite working. 4 upvotes and critical for PR validation. [Link](https://github.com/anthropics/claude-code/issues/78222)  
- **Fabricated User Turns (Issue 81301):** Assistant-generated user turns disrupt conversations. 3 comments and UI flow concerns. [Link](https://github.com/anthropics/claude-code/issues/81301)  
- **Context Window Misreporting (Issue 81693):** Opus 5 reported 200k tokens instead of 1M, crippling context gauge utility. 3 upvotes. [Link](https://github.com/anthropics/claude-code/issues/81693)  
- **Artifact Tool Unresponsiveness (Issue 80418):** Enterprise-wide tool unavailability despite compliance. 1 comment and high severity. [Link](https://github.com/anthropics/claude-code/issues/80418)  
- **Bash Output Blocking (Issue 77972):** Denied calls override allowed IP ranges. 1 comment and permissions edge-case urgency. [Link](https://github.com/anthropics/claude-code/issues/77972)  
- **MCP Redirect URI Problem (Issue 82096):** Hardcoded `localhost` breaks enterprise networking. Critical for security compliance. [Link](https://github.com/anthropics/claude-code/issues/82096)  

4. **Key PR Progress**  
- **PDF Support Fix (PR 82059):** Provides `poppler-utils` provisioning in devcontainers. Fixes silent PDF tool failures. [Link](https://github.com/anthropics/claude-code/pull/82059)  
- **Doc Link Repair (PR 80294):** Archival link fixes for broken npm references. Resolved 1 broken URL. [Link](https://github.com/anthropics/claude-code/pull/80294)  
- **Plugin Marketplace Restriction Example (PR 77709):** JSON config for enforcing official marketplace use. Reduces plugin drift risks. [Link](https://github.com/anthropics/claude-code/pull/77709)  

5. **Feature Request Trends**  
Developers prioritize **configurable agent views** (Issue 74139) and **cross-device session continuity** (Issue 61849), with recurring requests for:  
- Improved session identification in MCP integrations (Issue 41836)  
- Oracles for entitlement enforcement (Issue 81068—the Bedrock model's context limits)  
- Enhanced validation for containerization scenarios  

6. **Developer Pain Points**  
- Ephemeral session lifetimes disrupt CLI workflows (Issue 38335)  
- Opaque session state management in desktop apps (Issue 26452)  
- Framework incompatibilities (VSCode hook rendering failures, Issue 76736)  
- Authentication/credential handling at scale (Issue 79597—usage credit restrictions for Max account headless use)  
- Performance regressions post-compaction (Issue 82144—the 4x skill re-injection cost)  

GitHub links appended above direct developers to triage-ready issues and actionable PRs.


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑07‑29**

---

### 1. Today’s Highlights  
The 0.146.0 release adds session naming (`/new`, `/clear`), thread pinning, and side‑conversation switching, while also exposing Agent Plugin manifests and new marketplace integrations for Amazon Bedrock and Claude.  Community attention is focused on the Linux desktop app (Issue #11023) and a suite of Windows‑related stability bugs that are causing crashes, memory churn, and session loss.

---

### 2. Releases (last 24 h)  

| Package | Version | Key Changes |
|---------|---------|-------------|
| **rust** | **0.146.0** | New session commands (`/new`, `/clear`), thread pinning, side‑conversation switching; support for Agent Plugin manifests, workspace publishing, and Bedrock/Claude plugin marketplaces. |
| **rusty‑v8** | **150.4.0** | Dependency upgrade to the latest V8 runtime (no detailed changelog in this snapshot). |
| **rust** | **0.146.0‑alpha.14** | Pre‑release build continuing work on the 0.146 series. |

*No breaking API changes were noted beyond the new session commands and plugin‑related extensions.*

---

### 3. Hot Issues (10 most‑discussed)

| # | Title | Why it matters | Community signal |
|---|-------|----------------|------------------|
| **#11023** | **Linux desktop app for Codex** | Users need a native Linux client; the current macOS‑only app is “almost unusable” on macOS due to a known power‑consumption issue. | 190 comments, 864 👍 – strong demand. |
| **#19504** | **Add full RTL (Right‑to‑Left) text direction support** | Arabic/Hebrew rendering is broken (alignment, punctuation, reading direction). | 22 comments, 19 👍 – high‑impact i18n request. |
| **#32031** | **[Critical UX regression] Multi‑agent v2 spawn_agent hides model overrides** | The default schema makes sub‑agent model selection invisible and the default call shape fails, breaking workflows for `gpt‑5.6‑sol`/`gpt‑5.6‑terra`. | 8 comments, 16 👍 – critical usability blocker. |
| **#32164** | **Remote Control enrollment never completes on Windows** | Windows users cannot enroll the remote‑control feature, limiting cross‑device workflows. | 8 comments, 4 👍 – Windows‑specific regression. |
| **#21134** | **Desktop becomes unusable on long active threads (memory/renderer churn)** | Persistent memory growth and log spam cause severe slow‑downs, rendering the app ineffective for long‑running sessions. | 13 comments, 0 👍 – performance‑critical. |
| **#30649** | **Invalid `file://` URI for LibreOffice on Windows** | `render_docx.py` builds malformed URIs, breaking DOCX rendering on Windows. | 9 comments, 0 👍 – integration bug. |
| **#35619** | **Rollout JSONL files deleted at app‑server transition (934/942 threads orphaned)** | Data loss after a server restart; many threads lose their rollout context. | 9 comments, 0 👍 – serious data‑integrity issue. |
| **#33561** | **Severe UI lag & 0xc06d007f crashes on Windows 11** | Users experience input lag and crashes, undermining confidence in the Windows desktop client. | 5 comments, 5 👍 – stability problem. |
| **#27207** | **Restore archived chats access from the main UI** | Archived chats are hidden under Settings → Archived chats, a regression that removes easy browsing. | 5 comments, 8 👍 – usability regression. |
| **#32283** | **Subagents panel no longer shows each agent’s model or reasoning effort** | The panel omits key metadata, making it hard to assess agent capabilities. | 2 comments, 7 👍 – clarity/UX concern. |

*All links:* `https://github.com/openai/codex/issues/<issue‑number>`.

---

### 4. Key PR Progress (10 most notable)

| # | PR (status) | Summary & Impact |
|---|-------------|------------------|
| **#35852** *(open)* | **Migrate `codex-protocol` to shared HTTP types** | Replaces direct `reqwest` usage with the shared `codex-http-client`, eliminating duplicate dependencies and improving consistency across the codebase. |
| **#35859** *(closed)* | **Expose plugin installation timestamps** | Adds nullable `installedAt` (Unix timestamp) to `PluginSummary`; enables better auditability and debugging of plugin lifecycles. |
| **#35856** *(closed)* | **Resolve imported connectors by MCP server name** | Normalises server names (case‑insensitive) when matching imported sessions, fixing incorrect session attribution. |
| **#35835** *(closed)* | **Track parent turns for nested Codex requests** | Propagates the initiating turn ID through agent spawns, follow‑up tasks, and reviews, preserving context for complex workflows. |
| **#35831** *(closed)* | **Update `rusty_v8` to 150.4.0** | Upgrades the V8 runtime and its Bazel source, bringing performance, security, and patch‑level improvements. |
| **#35828** *(closed)* | **Enforce centralized SQLite connection creation** | Denies direct `SQLx` pool/connection construction, guaranteeing that all DB access goes through the shared `codex-state` configuration. |
| **#35843** *(closed)* | **Tie remote exec servers to their parent stdin** | Introduces `--exit-on-stdin-close` and env var to gracefully drain sessions when the parent stdin is closed, preventing resource leaks. |
| **#35839** *(closed)* | **Decouple recommended plugins from tool suggestions** | Adds a disabled‑by‑default `recommended_plugins` flag, allowing plugins to be suggested without automatically appearing in tool suggestions. |
| **#35857** *(closed)* | **Add Bazel unit test targets for Rust binaries** | Generates `<binary>-bin-unit-tests` targets for every Rust binary, enabling comprehensive testing of compiled artifacts. |
| **#35850** *(closed)* | **Preserve foreign paths in background terminal listings** | Keeps platform‑specific path conventions intact when listing remote terminal working directories, avoiding false‑negative listings. |

*All links:* `https://github.com/openai/codex/pull/<pull‑number>`.

---

### 5. Feature Request Trends  

- **Cross‑platform desktop support** – Strong demand for a native Linux client (#11023) and broader Windows stability/UX fixes.  
- **Internationalization** – RTL text direction for Arabic/Hebrew (#19504) and general UI localization improvements.  
- **Chat management** – Multiple concurrent chats (#13036) and easy access to archived chats (#27207).  
- **Plugin ecosystem maturity** – Installation timestamps (#35859), eligibility metadata (#35837), marketplace extensions for Bedrock/Claude, and better handling of omitted `modelProviders` (#24648).  
- **Multi‑agent workflow** – Clear model selection for sub‑agents (#32031) and visibility of agent models/reasoning in the subagents panel (#32283).  
- **Performance & stability** – Long‑thread memory/renderer churn (#21134), image‑heavy session crashes (#28531), UI lag & crashes on Windows (#33561), and rollout JSONL loss (#35619).  
- **Remote/device management** – Mobile remote pairing issues (#23078) and Windows remote‑control enrollment failures (#32164).  

These trends point to a community that values **robust cross‑platform support, richer plugin metadata, clearer multi‑agent tooling, and higher‑performance, crash‑free desktop experiences**.

---

### 6. Developer Pain Points  

- **Platform‑specific bugs** – Windows users face invalid URIs, rollout file deletions, remote‑control enrollment failures, and app‑server crashes that terminate the whole client.  
- **Memory & performance degradation** – Long‑running threads cause the Electron renderer and app‑server to consume excessive memory and generate noisy logs, rendering the UI sluggish or unresponsive.  
- **Inconsistent state handling** – Incomplete residual fidelity across capture, model‑visible, and durable states leads to “stale” task‑state hallucinations and unexpected usage resets.  
- **Plugin & marketplace gaps** – Missing installation timestamps, eligibility data, and limited marketplace integrations (Bedrock, Claude) hinder debugging and discovery.  
- **Feature regressions** – Removal of archived‑chat browsing, loss of multiple‑chat view, and broken sub‑agent model selection break established workflows.  
- **Remote device lifecycle** – Inability to re‑pair mobile devices after accidental removal and failure to enroll remote control on Windows interrupt cross‑device productivity.

---

*Prepared for the OpenAI Codex developer community on 2026‑07‑29.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑07‑29**  

---

### 1. Today’s Highlights
- Three new releases landed in the last 24 h: a nightly build (v0.55.0‑nightly.20260729.g3499c84f7), a preview (v0.54.0‑preview.0) and the stable v0.53.0.  
- The most‑commented open issue is **#22323** (sub‑agent incorrectly reports success after hitting MAX_TURNS) with 12 comments, indicating continued community focus on agent reliability.  
- Security and stability work is prominent: a SSRF fix in `web‑fetch.ts` (#28557), MCP OAuth token refresh (#28481), and a seat‑belt profile fallback for macOS sandbox mode (#28551) all landed or are under review.

---

### 2. Releases
| Version | Highlights |
|---------|------------|
| **v0.55.0‑nightly.20260729.g3499c84f7** | Automated version bump; includes the nightly changes from the previous day (see PR #28573). |
| **v0.54.0‑preview.0** | Changelog generation for v0.53.0 and v0.52.0; version bump to 0.54.0‑nightly.20260722.gf743ab5 (PR #28567). |
| **v0.53.0** | • Fix: group cancelled tool responses & coalesce consecutive roles to avoid 400 Bad Request (PR #28407).<br>• Feat: LLM triage orchestrator & container build for caretaker‑triage (PR #28407). |

*Links:* v0.55.0‑nightly – <https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260729.g3499c84f7> • v0.54.0‑preview.0 – <https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-preview.0> • v0.53.0 – <https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0>

---

### 3. Hot Issues (top 10 by comment count)

| Issue | Why it matters | Community reaction |
|-------|----------------|--------------------|
| **#22323** – Subagent recovery after MAX_TURNS reported as GOAL success | Masks real failures; leads to silent data loss when agents hit turn limits. | 12 💬, 2 👍 |
| **#21409** – Generalist agent hangs indefinitely | Blocks workflow; users must cancel after long waits. | 8 💬, 8 👍 (highest engagement) |
| **#24353** – Robust component‑level evaluations | Drives reliability of the growing behavioral‑eval suite (76 tests). | 7 💬 |
| **#22745** – Assess impact of AST‑aware file reads/search/mapping | Could reduce turn count and token noise by enabling precise code navigation. | 7 💬, 1 👍 |
| **#21968** – Gemini does not use skills/sub‑agents enough | Limits extensibility; users must manually trigger agents. | 6 💬 |
| **#26522** – Stop Auto Memory from retrying low‑signal sessions indefinitely | Prevents wasted cycles and noise in the memory system. | 5 💬 |
| **#25166** – Shell command execution stuck on “Waiting input” after completion | Breaks CLI flow; appears as a UI hang despite command finishing. | 4 💬, 3 👍 |
| **#22232** – Enhance browser_agent resilience: automatic session takeover & lock recovery | Improves durability of browser‑based subagents in shared environments. | 4 💬 |
| **#21983** – Browser subagent fails in Wayland | Blocks Linux users running Wayland compositors. | 4 💬, 1 👍 |
| **#21000** – Experiment with native file tools for task tracker | Aims to simplify internal state management and reduce external script churn. | 4 💬 |

*Links:* replace `NUMBER` with the issue number in `https://github.com/google-gemini/gemini-cli/issues/NUMBER`.

---

### 4. Key PR Progress (selected 10)

| PR | Summary |
|----|---------|
| **#28566** – Propagate `InvalidStreamError` details to UI | Gives users actionable hints (e.g., “use `/compress`”) when the core returns an empty stream. |
| **#28557** – Fix SSRF vulnerability in `web-fetch.ts` | Uses async DNS resolution to block hostnames that resolve to private IPs, closing a potential server‑side request‑forgery vector. |
| **#28551** – Fallback to embedded macOS seatbelt profiles | Prevents startup crash in sandbox mode (`-s`) when static `.sb` profiles are missing. |
| **#28526** – Stop leaking `gemini.diff.accept` and `onDidChangeWorkspaceFolders` disposables | Fixes VS Code IDE companion resource leaks that could accumulate over long sessions. |
| **#28481** – Refresh MCP OAuth tokens with stored client ID | Resets token refresh flow for servers using OAuth discovery + dynamic client registration, eliminating repeated re‑auth prompts. |
| **#28434** – feat(pr‑generator‑agent): Antigravity agent runner & prompt templates | Adds the headless AI agent pipeline for SSR code generation, QA, and feedback refinement. |
| **#28432** – feat(pr‑generator‑db): Firestore concurrency dual‑locking & test ingestion | Provides transactional locking, ID resolution, and status enums for the Issue‑to‑PR code‑gen pipeline. |
| **#28563** – Bump postcss from 8.5.14 → 8.5.24 | Dependency update that includes security fixes and new CSS features. |
| **#28562** – Bump tar from 7.5.11 → 7.5.21 | Updates the tar utility used for packaging; addresses CVE‑2026‑XXXX. |
| **#28561** – Bump shell‑quote from 1.8.3 → 1.10.0 | Improves quoting safety for shell command construction. |

*Links:* replace `NUMBER` with the PR number in `https://github.com/google-gemini/gemini-cli/pull/NUMBER`.

---

### 5. Feature Request Trends (derived from Issues)

- **Agent reliability & recovery** – Safer handling of MAX_TURNS, better error propagation, and deterministic termination (issues #22323, #21409, #25166).  
- **Memory & context management** – Improvements to Auto Memory (retries, invalid‑patch handling, redaction) (#26522, #26523, #26525, #26516).  
- **Tool precision** – AST‑aware reads/search/mapping to reduce token noise and turn count (#22745, #22746).  
- **Browser/sub‑agent resilience** – Automatic session takeover, lock recovery, Wayland support, and settings.json overrides (#22232, #21983, #22267).  
- **Extensibility & discoverability** – Making skill/sub‑agent usage more automatic, exposing sub‑agent trajectories via `/chat share`, and improving self‑awareness of the CLI (#21968, #22598, #21432).  
- **Evaluation & testing** – Stabilizing internal evals, component‑level tests, and steering‑test reliability (#24353, #23166, #23313).  

---

### 6. Developer Pain Points (recurring frustrations)

1. **Agent hangs or stalls** – Generalist agent, browser agent, and shell‑command “Waiting input” states force manual interruption (#21409, #22232, #21983, #25166).  
2. **Sub‑agent under‑utilization** – Users must explicitly invoke skills; the CLI does not autonomously select relevant sub‑agents (#21968).  
3. **Memory system noise** – Auto Memory repeatedly retries low‑signal sessions and logs excessively, cluttering the inbox (#26522, #26523, #26525).  
4. **Security & permission gaps** – SSRF risks in web fetch, MCP OAuth token loss, and overly permissive sub‑agent activation (#28557, #28481, #22093).  
5. **Toolchain brittleness** – Frequent need to bump native dependencies (tar, shell‑quote, postcss) and handle missing platform assets (seatbelt profiles) (#28562, #28561, #28551).  
6. **Limited observability** – Missing sub‑agent context in bug reports and difficulty sharing trajectories for review (#21763, #22598).  

Addressing these pain points will directly improve day‑to‑day usability and trust in Gemini CLI for production workflows.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI – Community Digest (2026‑07‑29)**  

---

### 1. Today’s Highlights  
- **New version `v1.0.76‑1`** brings media‑pause voice mode, a footer counter for scheduled prompts, `limits predict`, and timed refreshes.  
- **Windows users** still face UI hangs when resuming or after a prompt – issues #4165 & #4159 remain open.  
- The release cycle continues to drift away from expected update prompts (#4284), prompting discussion on auto‑update UX.

---

### 2. Releases  
- **v1.0.76‑1** (released 2026‑07‑28)  
  - **Voice mode**: pausesizzling media before recording, resumes after.  
  - **Footer counter**: shows active scheduled prompts.  
  - **`/limits predict`**: estimates AI‑credit limits for similar sessions.  
  - **Timed refreshes**: configurable automatic refreshes for agent state.  

*(No other new releases in the last 24 h.)*

---

### 3. Hot Issues  
| # | Title | Why it matters | Community signal |
|---|-----------|----------------|-------------------|
| **4016** | BYOK remains rejected in `--acp` | Breaks custom provider setups that avoid GitHub login; aligns with GDPR‑style policy. | 4 👍, 6 comments |
| **4165** | Windows `--resume` hangs | Paralyses interactive work on Windows; affects many enterprise setups. | 1 👍, 4 comments |
| **4159** | Blank interactive UI on Windows Terminal | Loses entire conversation after a prompt; introduces a painful “flash‑in‑black” bug. | 3 👍, 3 comments |
| **4078** | Scheduled prompts killСпасибо queue | Causes asynchronous prompt pipelines to stall; critical for automation scripts. | 0 👍, 3 comments |
| **4161** | `task_complete` tool lost after reverting to autopilot | Regression from v1.0.4; disrupts tool‑chain workflows. | 4 👍, 3 comments |
| **4005** | “Billing entity isn’t selected” when saving memories | Blocks enterprise memory persistence; hampers long‑term learning. | 2 👍, 2 comments |
| **4202** | `view` tool reports `Path does not exist` in v1.0.73 | Breaks file‑system tools for 5+% of users; diverges from v1.0.71 למשל. | 0 👍, 2 comments |
| **4288** | iTerm2 scroll wheel loses conversation | Affects macOS terminal ergonomics; screen‑back clarity lost. | 0 👍, 1 comment |
| **4273** | Keychain prompts on macOS for GitHub‑ vs Microsoft‑signed binaries | Adds duplicate credential prompts, misleading for cross‑platform teams. | 0 👍, 0 comments |
| **2734** | Auto‑update plugins? | Widely requested to reduce plugin staleness and maintenance friction. | 9 👍, 2 comments |

---

### 4. Key PR Progress  
Only one PR appears in the last 24 h; earlier PRs were merged in prior weeks.

| # | Author | Summary |
|---|--------|---------|
| **4100** | huangyoufeng76-debug | *Security review* – Adds safety checks and mitigations for a recent vulnerability noted in a аҳәынҭқар. departamento.

*(No other PRs have been opened in the last day; existing merged PRs from earlier weeks continue to keep the CLI stable.)*

---

### 5. Feature Request Trends  

1. **Automatic plugin updates** (#2734) – Developer pain from manual `/update`.  
2. **Context tier as a session config** (#4275) – Consistency between interactive CLI and ACP.  
3. **Compatible key handling** (#4274) – Arrow keys should respect buffer flushing.  
4. **Reliable scheduling** (#4078, #4159) – Preserve prompt queues and avoid UI blanks.  
5. **Custom model propagation** (#4287) – Subagents should respect parent session models.  

These themes point to a need for smoother, less mechanical workflows (auto‑updates), better UX consistency (context tiers, key handling), and more robust tooling around scheduling and custom models.

---

### 6. Developer Pain Points  

| Pain | Summary |
|------|---------|
| **Windows UI instability** | `--resume` hangs and blank terminals (issues #4165, #4159) MATERIALLY slow debugging. |
| **Manual plugin upkeep** | Lack of auto‑update leads to stale plugins; high friction (#2734, #4284). |
| **Session resume glitches** | Model name mismatches (#4282) break CLI resuming and tooling integration. |
| **Billing & permission errors** | `Billing entity isn’t selected` (#4005) Maeull—prevents enterprise memory use. |
| **Tool reliability** | `view` path errors (#4202), `glob` pattern failures (#4271) break build scripts. |
| **Credential prompts on macOS** | Duplicate keychain queries (#4273) create an annoying login loop. |
| **Hidden errors in SSH / MCP failures** | Windows MCP spawning failures (#3576) hinder enterprise custom backends. |

---  

**Links**  
- Release: <https://github.com/github/copilot-cli/releases/tag/v1.0.76-1>  
- Issues: <https://github.com/github/copilot-cli/issues> (see individual #IDs above)  
- PR: <https://github.com/github/copilot-cli/pull/4100>  

---  

*For more context or to contribute, dive into the हजार/issue links above.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-29

## Today's Highlights
The development community is currently focused on refining the CLI's plugin architecture and enhancing transparency in usage reporting. While no new releases were published in the last 24 hours, significant progress is being made on MCP (Model Context Protocol) tool normalization and improving the accuracy of system hooks for automated workflows.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
*   **Session Management Improvements (#1783):** Users are requesting a `/delete` command to manage session directories manually. Currently, users must navigate to `~/.kimi/sessions/`, which is cumbersome for large datasets. [Issue #1783](https://github.com/MoonshotAI/kimi-cli/issues/1783)
*   **Plugin Crashes on Windows (#2553):** A critical `TypeError` occurs in version 0.29.0 when two or more plugins are installed, causing the `/plugins` management screen to crash. [Issue #2553](https://github.com/MoonshotAI/kimi-cli/issues/2553)
*   **OAuth Login Failures (#2566):** Free users with active promotional credits are reporting unexpected rejections during OAuth login, a critical friction point for user acquisition. [Issue #2566](https://github.com/MoonshotAI/kimi-cli/issues/2566)
*   **Agent Safety Protocol Violation (#708):** (Closed) A high-severity report regarding an AI agent committing code without explicit user permission, highlighting the need for stricter safety guardrails. [Issue #708](https://github.com/MoonshotAI/kimi-cli/issues/708)
*   **Documentation Gaps for Local Backends (#732):** (Closed) Developers expressed frustration over lack of "idiot-proof" documentation for configuring `llamacpp` as a local backend. [Issue #732](https://github.com/MoonshotAI/kimi-cli/issues/732)

## Key PR Progress
*   **MCP Server Log Routing (#1637):** Fixed issue where MCP server logs were cluttering the TUI by routing them to `loguru` instead. [PR #1637](https://github.com/MoonshotAI/kimi-cli/pull/1637)
*   **Model Name Transparency (#2174):** Fixed hardcoded display names to respect actual backend `display_name` values (e.g., "Kimi-k2.6"). [PR #2174](https://github.com/MoonshotAI/kimi-cli/pull/2174)
*   **Usage Panel Enhancement (#2567):** Introducing absolute reset timestamps in the `/usage` panel to provide more clarity than fuzzy relative durations. [PR #2567](https://github.com/MoonshotAI/kimi-cli/pull/2567)
*   **MCP Tool Normalization (#2539):** Developing stable aliases for MCP tools to ensure compatibility with the Moonshot API. [PR #2539](https://github.com/MoonshotAI/kimi-cli/pull/2539)
*   **Hook Execution Stability (#2565):** Implementing strong references for "fire-and-forget" hook triggers to prevent premature task garbage collection. [PR #2565](https://github.com/MoonshotAI/kimi-cli/pull/2565)
*   **Approval Notification Hooks (#2284):** Implementing notification hooks specifically for approval-needed requests. [PR #2284](https://github.com/MoonshotAI/kimi-cli/pull/2284)
*   **ACP Error Handling (#2507):** Fixing a bug where unhandled questions in ACP server mode were being incorrectly resolved as empty answers. [PR #2507](https://github.com/MoonshotAI/kimi-cli/pull/2507)
*   **ContentPart Text Extraction (#2176):** Fixing issues where user prompt submissions were returning empty strings when using `list[ContentPart]`. [PR #2176](https://github.com/MoonshotAI/kimi-cli/pull/2176)

## Feature Request Trends
*   **Session & Workspace Management:** High demand for CLI-native commands to manage, list, and delete local session data without manual filesystem intervention.
*   **Extensibility & Plugin Stability:** Users are pushing for more robust plugin management interfaces and a more reliable way to handle multiple concurrent extensions.
*   **Local Integration:** Continued interest in seamless integration with local LLM backends (like `llamacpp`) through clearer configuration schemas.

## Developer Pain Points
*   **Configuration Complexity:** Documentation gaps, specifically regarding local backend setup and complex MCP schema definitions, remain a primary source of frustration.
*   **UI/UX Interference:** Log spam from MCP servers and lack of granular control over "fire-and-forget" asynchronous tasks are disrupting the TUI experience.
*   **Edge-Case Stability:** Errors in the plugin management screen and specific OAuth edge cases for promotional users are creating friction in the onboarding/extension experience.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest - 2026-07-29  

## Today’s Highlights  
The Pi project continues to expand its provider support and TUI capabilities, with critical bug fixes for WSL path handling and session management. A roadmap item for rewriting Pi in Rust (#4609) and an active PR for sixel-based image rendering in tmux (#7245) signal long-term architectural and UX improvements.  

## Releases  
No new releases in the last 24 hours.  

---

## Hot Issues  
1. **#4609 [CLOSED] Rewrite pi in Rust** ([link](https://github.com/earendil-works/pi/issues/4609))  
   - *Why it matters*: A foundational proposal to modernize Pi’s codebase for performance and safety.  
   - *Community reaction*: 13 upvotes, 12 comments, reflecting strong interest in Rust migration.  

2. **#7064 [OPEN] WSL absolute Windows paths are mishandled** ([link](https://github.com/earendil-works/pi/issues/7064))  
   - *Why it matters*: Breaks core file operations for WSL users, critical for cross-platform stability.  
   - *Community reaction*: 10 comments, 1 upvote; labeled as a high-priority bug.  

3. **#6747 [OPEN] [inprogress] API for enhancing agent message markdown** ([link](https://github.com/earendil-works/pi/issues/6747))  
   - *Why it matters*: Enables extensions to safely mutate message rendering without affecting LLM input, improving UX flexibility.  
   - *Community reaction*: 11 comments, 2 upvotes; actively in development.  

4. **#6879 [OPEN] Auto-compaction never triggers after context grows past 100%** ([link](https://github.com/earendil-works/pi/issues/6879))  
   - *Why it matters*: Causes context overflow in long-running sessions, risking API errors.  
   - *Community reaction*: 5 comments, 3 upvotes; flagged as a critical edge case.  

5. **#7195 [CLOSED] Extensions don’t load if directory is a symlink** ([link](https://github.com/earendil-works/pi/issues/7195))  
   - *Why it matters*: Breaks workflows for dotfile-managed extensions.  
   - *Community reaction*: 6 comments; resolved but highlights path-handling fragility.  

6. **#7161 [OPEN] anthropic-messages never sends x-client-request-id** ([link](https://github.com/earendil-works/pi/issues/7161))  
   - *Why it matters*: Hinders session affinity for proxy users with multiple accounts.  
   - *Community reaction*: 5 comments; impacts enterprise use cases.  

7. **#7194 [OPEN] Pi does a full re-render every 1s when active tool card scrolls outside viewport** ([link](https://github.com/earendil-works/pi/issues/7194))  
   - *Why it matters*: Causes UI freezes in remote sandboxes; performance-critical for distributed use.  
   - *Community reaction*: 5 comments; tied to remote development workflows.  

8. **#7242 [CLOSED] feat: add Apiário as built-in provider** ([link](https://github.com/earendil-works/pi/issues/7242))  
   - *Why it matters*: Expands regional provider support for Latin American developers.  
   - *Community reaction*: 1 upvote; merged via PR #7240.  

9. **#7187 [OPEN] Silent crash caused by inconsistent error handling** ([link](https://github.com/earendil-works/pi/issues/7187))  
   - *Why it matters*: Breaks sessions for users with third-party packages due to manifest errors.  
   - *Community reaction*: 3 comments; affects stability for advanced users.  

10. **#7113 [OPEN] TUI freezes after entering an API key in /login** ([link](https://github.com/earendil-works/pi/issues/7113))  
    - *Why it matters*: Blocks credential setup when pi.dev is unreachable.  
    - *Community reaction*: 2 comments; highlights dependency on external services.  

---

## Key PR Progress  
1. **#7245 [OPEN] feat(tui): inline images under tmux via sixel** ([link](https://github.com/earendil-works/pi/pull/7245))  
   - Adds sixel support for TUI image rendering in tmux, addressing long-standing capability detection gaps.  

2. **#7247 [CLOSED] docs: add architecture decision records** ([link](https://github.com/earendil-works/pi/pull/7247))  
   - Documents 47 ADRs and 6 TDRs, improving transparency for contributors.  

3. **#7240 [CLOSED] feat(ai): add Apiário as built-in provider** ([link](https://github.com/earendil-works/pi/pull/7240))  
   - Implements support for Brazil-focused AI aggregation API with OpenAI/Anthropic/DeepSeek models.  

4. **#7230 [CLOSED] fix(ai): route Fireworks Kimi K3 through openai-completions** ([link](https://github.com/earendil-works/pi/pull/7230))  
   - Adds Kimi K3 support via Fireworks endpoint, closing #7199.  

5. **#7225 [CLOSED] fix: update undici from 8.5.0 to 8.8.0** ([link](https://github.com/earendil-works/pi/pull/7225))  
   - Fixes HTTP proxy configuration issues on Windows, closing #7049.  

6. **#7218 [CLOSED] fix(coding-agent): preserve resource metadata after extension resource reloads** ([link](https://github.com/earendil-works/pi/pull/7218))  
   - Resolves #6968, ensuring extensions don’t lose scope/source metadata.  

7. **#7236 [CLOSED] feat(tui): pin chat input and support mouse caret** ([link](https://github.com/earendil-works/pi/pull/7236))  
   - Improves TUI responsiveness with pinned inputs and mouse interaction.  

8. **#7243 [OPEN] fix(ai): update TypeBox nullable array validation** ([link](https://github.com/earendil-works/pi/pull/7243))  
   - Updates TypeBox to resolve schema validation for nullable arrays, addressing #7003.  

9. **#7216 [OPEN] fix: formatting of delta content blocks** ([link](https://github.com/earendil-works/pi/pull/7216))  
   - Fixes OpenAI streaming API response formatting for mixed content types.  

10. **#7211 [CLOSED] fix: reset model selector selection to top row when filtering** ([link](https://github.com/earendil-works/pi/pull/7211))  
    - Enhances `/model` UX by resetting selection on filter input.  

---

## Feature Request Trends  
- **Markdown Customization**: Requests for APIs to safely mutate agent message rendering (e.g., #6747).  
- **Provider Expansion**: Demand for new provider integrations (Apiário, Kimi K3, Anthropic Vertex).  
- **Session Management**: Auto-compaction triggers, renaming UX, and long-session stability.  
- **Cross-Platform Fixes**: WSL path handling, symlinked extension directories.  
- **TUI Enhancements**: Inline images, mouse support, and viewport pinning.  

---

## Developer Pain Points  
1. **WSL Path Handling**: Frequent issues with `read`/`write` tools in WSL environments (#7064).  
2. **Extension Loading**: Symlinked directories and failed installs break workflows (#7195, #7189).  
3. **UI Freezes**: TUI unresponsive under specific conditions (e.g., pi.dev downtime, tool card scrolling).  
4. **Compaction Failures**: Long sessions exceed context limits without triggering compaction (#6879).  
5. **Error Propagation**: Silent crashes from schema validation or third-party package errors (#7187).  
6. **Proxy/Provider Limitations**: Missing `x-client-request-id` headers breaking session affinity (#7161).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑07‑29**

---

### 1. Today's Highlights  
- **Nightly 0 champs** – The `v0.21.0‑nightly.20260729` release landed, bringing the weekly “fix/await‑event‑timeout” and a new *defer‑suggestions* strategy for the Autofix engine.  
- **1‑day release cycle continues** – `v0.21.1` is pushed to `main`, improving telemetry alignment and tightening the CI matrix.  
- **Extended channel support** – A new GitLab polling adapter (PR #7862) and a DingTalk outbound‑image enhancement (Issue #7687) are now in active discussion.

---

### 2. Releases  
| Version | Highlights | Link |
|---------|------------|------|
| **v0.21.1** | Add telemetry field mapping (core/7667), align content‑telemetry keys, and minor bug‑fixes to the nightly pipeline. | <https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1> |
| **v0.21.0‑nightly.20260729** | Auto‑fix suggestions are now deferred after five change rounds, reducing spurious edits in a fast‑feedback loop. | <https://ઃgh.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260729> |

---

### 3. Hot Issues  
| # | Title | Why it matters | Community notes |
|---|-------|----------------|-----------------|
| **#7937** | `Main CI failed: E2E Tests — sdk-typescript/tool-control.test.ts …` | A regression hits the main‑branch pass‑rate. The failing test exposes a bug in the async‑generator handling of `canUseTool`. | 4 comments + 1 first‑responder; developers are actively patching the SDK test. |
| **#7940** | `UserPromptSubmit additionalContext pollutes user‑message JSONL` | Mixing system‑generated context with user‑message data leaks into audit logs, complicating debugging and security reviews. | 3 comments; push for a dedicated context‑hook is under discussion. |
| **#7959** | `Qwen 3.5 0.8b repeats in‑self into infinity` | Infinite loop in the model’s self‑query routine throttles the conversation and star drives a demo to stall. | biss; open threads on model‑restriction toggles. |
| **#7960** | `Compression side‑query… exceeds context window` | Exceeding the window on small‑window deployments triggers `COMPRESSION_FAILED_EMPTY_SUMMARY`, stopping chat flows for constrained‑scale setups. | 2 comments, PR #7980 in progress. |
| **#7961** | `Main‑turn output‑token clamp mis‑counts CJK content` | Token‑count inaccuracies can cause context overflow bursts, destabilising remote inference runs. | Community posts with token‑count logs; repo maintainers in framing mitigation. |
| **#7964** | `Window terminal cannot scroll after upgrading to 0.21.1` | UI regression in Windows causes developers to lose context view, impairing debugging in the Web‑Shell. | 2 comments, PR #7840 added a native folder picker hinting similar UI friction. |
| **#7966** | `如何获取会 Иг ...`  (session file listing) | Need for a way to introspect per‑toggles file provenance; useful for audit & rollback. | 2 comments with proposal for new agent command. |
| **#7924** | `Fork background agents resume with stale prompt` | Forked sub‑agents continue with outdated system instructions, breaking session consistency. | 2 comments; a task on agent‑state baselines is opened. |
| **#7936** | `Encoding mojibake in shell command output on Windows` | Cross‑platform encoding issues break non‑ASCII output, affecting localization demos. | 2 comments and a PR to compute CP‑x via `iconv`. |
| **#7950** | `trim trailing newline in tool‑control asyncGenerator assertion` | A trivial newline swap makes a flaky end‑to‑end test fail; developers use PR #7950 to solidify the expectation. | 3 comments; illustratingBest‑practice for deterministic tests. |

---

### 4. Key PR Progress  
| # | Title | What it delivers | Link |
|---|-------|------------------|------ kỹ|
| **#7929** | `feat(web-shell): add contextual task panels` | Turns the right‑hand pane in Web‑Shell into a persistent workspace panel with chat header, sub‑agent list, and task tabs. | <https://github.com/QwenLM/qwen-code/pull/7929> |
| **#7868** | `fix(core): mark folders the item budget never expanded` | Prevents the UI from rendering budget‑truncated directories as empty, improving navigation. | <https://github.com/QwenLM/qwen-code/pull/7868> |
| **#7846** | `feat(skills): add auto‑skill curator` | Detects and cleans up stale auto‑generated Skills after 30 days, keeping project deps tidy. | <https://github.com/QwenLM/qwen-code/pull/7846> |
| **#7970** | `fix(release): skip notes‑start‑tag when previous release diverges` | Avoids leaking breaking changes into release notes when branching history changes. | <https://github.com/QwenLM/qwen-code/pull/7970> |
| **#Maintaining #795 undisclosed?** | `fix(test): trim trailing newline in tool‑control asyncGenerator assertion` | Adds `.trim()` to reduce flaky SDK tests. | <https://github.com/QwenLM/qwen-code/pull/7950> |
| **#7862** | `feat(channels): add GitLab polling channelUIL` | Adds a polling adapter for GitLab < 03 todo/merge‑request events. | <https://github.com/QwenLM/qwen-code/pull/7862> |
| **#7968** | `feat(hooks): add security.allowPrivateNetworkHooks` | Gives project‑admins a way to bypass SSRF restrictions for trusted domains, allowing richer hook setups. | <https://github.com/Qwenكات/qwen-code/pull/7968> |
| **#7911** | `feat(core): bound image reads for reliable zoom` | Provides a deterministic JPEG overview and orientation info for image preview. | <https://github.com/QwenLM/qwen-code/pull/7911> |
| **#7967** | `refactor(core): thread the descriptor instead of forking text‑read helpers` | Reduces file‑descriptor bloat in large‑text reads, improving resource stabilityувавий. | <https://github.com/QwenLM/qwen-code/pull/7967> |
| **#7885** | `ci: cache npm downloads for verify and tmux build steps` | SpeedsCastle CI runs by caching npm packages, boosting workflow throughput. | <https://github.com/QwenLM/qwen-code/pull/7885> |

---

### 5. Feature Request Trends  

| Trend | Representative Issues | What developers are asking for |
|-------|-----------------------|--------------------------------|
| **Rich media in channel adapters** | #7687 (DingTalk outbound image), #7840 (folder picker), #7846 (auto‑skill curator) | Send images directly from agents, simplify workspace integration, and automatic skill lifecycle management. |
| **Robust E2E test rewrite** | #7937, #7939, #7934 | Migrate flaky real‑model tests to deterministic fake‑OpenAI server to isolate logic bugs from model variance. |
| **Session‑aware file handling** | #7966, #7924 | Query which files a session created, and prevent stray file data from polluting session state. |
| **Windows‑specific capabilities** | #7936, #7964 | Fix encoding mojibake and terminal scrolling, improving cross‑platform UX. |
| **Improved analytics/telemetry** | #7667 | Align telemetry fields to support deeper analytics pipelines. |
| **More in‑shell context panels** | #7929 | Deep integration of sub‑agents and task lists into the Web‑Shell UI. |

---

### 6. Developer Pain Points  

| Pain | Evidence | Response |
|------|----------|----------|
| **CI flakiness** | Multiple #7937‑#7942 regressions; 30+ E2E test failures on main. | Community is converging on moving to fake‑OpenAI, Refactoring tests to use deterministic servers, and improving retry policies. |
| **Session privacy leakage** | #7940 & #7924 خواهید show that internal context is being persisted with user data. | Plans to split system‑inject OOP data into separate invisibly‑delivered messages. |
| **Large‑file reads causing throttling** | #7946 shows an error for 256 KiB text reads. | Fix to allow bounded reads or adjust “max window” configuration. |
| **UI regressions on Windows** | #7964 & #7936 highlight scroll & encoding bugs. | PRs are targeting native window omp integration and code‑page handling. |
| **Token accounting inaccuracies** | #7960/#7961 highlight under‑counting >150 k toks. | Introducing a CJK‑aware token estimator under the compression side‑query. |
| **Slow launch / resource leaks** | #7868 & #7967 show UI/FS issues. | Resource‑aware folder rendering and descriptor threading keep the daemon responsive. |

---

*For deeper dives, follow the issue and PR linksIDDEN above. Happy coding!*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

---

### 1. **Today's Highlights**  
CodeWhale v0.9.2 finalized with fixes for VS Code rendering regressions, remote control stability, and Operate mode exposure. A major Chinese translation update improved localization quality, while critical bugs like LaTeX rendering and CRLF file handling were addressed. New feature requests for sandbox controls and cost tracking highlight evolving user workflows.  

---

### 2. **Releases**  
No new releases in the last 24 hours.  

---

### 3. **Hot Issues**  
1. [#4955](https://github.com/Hmbown/CodeWhale/issues/4955) *(Open)*  
   - **Request**: Zero-sandbox mode for local development.  
   - **Impact**: Addresses kernel-level Seatbelt sandbox breaking basic shell commands daily.  

2. [#4959](https://github.com/Hmbown/CodeWhale/issues/4959) *(Open)*  
   - **Request**: `/stop` command to halt autonomous workflows.  
   - **Impact**: Blocks mechanical tool calls in "YOLO mode," improving user control.  

3. [#4957](https://github.com/Hmbown/CodeWhale/issues/4957) *(Open)*  
   - **Bug**: LaTeX math expressions display raw `$...$` instead of rendered notation.  
   - **Impact**: Hinders technical/scientific workflows requiring math rendering.  

4. [#4956](https://github.com/Hmbown/CodeWhale/issues/4956) *(Open)*  
   - **Bug**: Provider network errors in WSL2, blocking API connections.  
   - **Impact**: Critical for users in Linux environments.  

5. [#4941](https://github.com/Hmbown/CodeWhale/issues/4941) *(Open)*  
   - **Bug**: Thinking level reverts to "Auto" on restart, discarding `reasoning_effort` settings.  
   - **Impact**: Frustrates users who prefer manual reasoning control.  

6. [#4939](https://github.com/Hmbown/CodeWhale/issues/4939) *(Open)*  
   - **Enhancement**: Decompose `/cost` by route/token class, derive CNY instead of accumulation.  
   - **Impact**: Improves cost transparency for multi-model workflows.  

7. [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) *(Open)*  
   - **Documentation**: 464 dead-code attributes obscure drift detection.  
   - **Impact**: Hinders code maintenance and compiler warnings.  

8. [#4950](https://github.com/Hmbown/CodeWhale/issues/4950) *(Closed)*  
   - **Bug**: VS Code terminal rendering regressions and upstream 499 errors.  
   - **Impact**: Fixed in PR #4951, critical for IDE users.  

9. [#4947](https://github.com/Hmbown/CodeWhale/issues/4947) *(Open)*  
   - **UX**: Mobile navigation visibility issues.  
   - **Impact**: Affects website accessibility on small screens.  

10. [#4937](https://github.com/Hmbown/CodeWhale/issues/4937) *(Open)*  
    - **Bug**: Stale shell transcript cells display live spinners instead of static status.  
    - **Impact**: Improves terminal session clarity.  

---

### 4. **Key PR Progress**  
1. [#4953](https://github.com/Hmbown/CodeWhale/pull/4953) *(Closed)*  
   - **Fix**: Exposed Operate startup mode and refreshed session capture.  

2. [#4944](https://github.com/Hmbown/CodeWhale/pull/4944) *(Closed)*  
   - **Feature**: Aligned landing page with managed product branding.  

3. [#4942](https://github.com/Hmbown/CodeWhale/pull/4942) *(Closed)*  
   - **Fix**: Preserved CRLF edits in file operations.  

4. [#4948](https://github.com/Hmbown/CodeWhale/pull/4948) *(Closed)*  
   - **I18n Fix**: Used "宪章" for "Constitution" in Simplified Chinese.  

5. [#4931](https://github.com/Hmbown/CodeWhale/pull/4931) *(Open)*  
   - **QA**: Migrated PTY test harness to rio-vt.  

6. [#4947](https://github.com/Hmbown/CodeWhale/pull/4947) *(Open)*  
   - **Web Fix**: Ensured mobile navigation remains visible.  

7. [#4940](https://github.com/Hmbown/CodeWhale/pull/4940) *(Closed)*  
   - **Tooling**: Created executable capture harness for v0.9.2 session recording.  

8. [#4938](https://github.com/Hmbown/CodeWhale/pull/4938) *(Closed)*  
   - **Maintenance**: Landed bounded dead-code slice with a budget ratchet.  

9. [#4935](https://github.com/Hmbown/CodeWhale/pull/4935) *(Closed)*  
   - **UX**: Corrected ambient jellyfish rendering to avoid unintended facial features.  

10. [#4937](https://github.com/Hmbown/CodeWhale/pull/4937) *(Open)*  
    - **Fix**: Finalized stale shell transcript cells with static status.  

---

### 5. **Feature Request Trends**  
- **Sandbox Controls**: Demand for a zero-sandbox mode (e.g., #4955) to bypass restrictive kernel-level sandboxing.  
- **Execution Control**: Stop/halt commands for autonomous workflows (#4959).  
- **Cost Tracking**: Enhanced `/cost` reporting with granular route/token breakdowns (#4939).  
- **Documentation**: Real session recordings for website/README (#4906).  
- **Localization**: Improved Chinese translations and terminology consistency (#4948, #4908).  

---

### 6. **Developer Pain Points**  
1. **Sandbox Restrictions**: Seatbelt sandbox breaking basic shell commands (#4955).  
2. **Cross-Platform Bugs**: CRLF file handling (#4764), VS Code rendering (#4950), and network errors in WSL2 (#4956).  
3. **State Persistence**: Reversion of settings like `reasoning_effort` (#4941) and startup modes (#4952).  
4. **Toolchain Limitations**: Dead-code attributes masking drift (#4785), requiring manual audits.  
5. **Documentation Gaps**: Lack of visual TUI demonstrations for new users (#4906).  

--- 

This digest reflects urgent fixes, localization efforts, and recurring developer frustrations, while highlighting strategic feature requests shaping future development.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*