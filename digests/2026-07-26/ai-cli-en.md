# AI CLI Tools Community Digest 2026-07-26

> Generated: 2026-07-26 01:53 UTC | Tools covered: 9

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

## Cross-Tool AI CLI Ecosystem Comparison Report  
*Generated: 2026-07-26*

---

### 1. Ecosystem Overview  

The AI CLI tools ecosystem is undergoing rapid evolution driven by demands for **interoperability**, **session continuity**, and **model reliability**. Major players like Claude Code, OpenAI Codex, and Gemini CLI are grappling with **stability regressions**, while newer entrants such as OpenCode and Kimi CLI focus on **UX polish** and **cross-device control**. Community discussions increasingly center on **standardized agent formats (e.g., `AGENTS.md`)**, **resource efficiency**, and **provider-agnostic configurations**. The landscape reflects a tension between innovation velocity and production-grade stability.

---

### 2. Activity Comparison  

| Tool                | Open Issues | Closed Issues | Open PRs | Merged PRs | Release Status |
|---------------------|-------------|---------------|----------|------------|----------------|
| **Claude Code**     | 10          | 0             | 5        | 5          | No release     |
| **OpenAI Codex**    | 10          | 5             | 14       | 14         | No release     |
| **Gemini CLI**      | 10          | 0             | 10       | 10         | Nightly v0.54  |
| **GitHub Copilot CLI** | 10       | 0             | 2        | 2          | No release     |
| **Kimi CLI**        | 2           | 3             | 5        | 5          | No release     |
| **OpenCode**        | 10          | 0             | 10       | 10         | No release     |
| **Pi**              | 10          | 5             | 10       | 10         | v0.82.1        |
| **Qwen Code**       | 10          | 1             | 10       | 10         | Nightly v0.21  |
| **DeepSeek TUI**    | 0           | 0             | 0        | 0          | No release     |

---

### 3. Shared Feature Directions  

| Requirement                         | Tools Affected                                                                 | Specific Needs |
|-------------------------------------|--------------------------------------------------------------------------------|----------------|
| **Interoperability (`AGENTS.md`)**  | Claude Code (#6235), Gemini CLI (implied via standards push), Pi (#6768)      | Adopt industry-standard agent definition files; deprecate proprietary formats |
| **Session Continuity & State Sync**   | Claude Code (#76844), OpenAI Codex (#29356), Pi (#4877), OpenCode (#37012)   | Persist task IDs, settings, subagent status across resumes/restarts |
| **Resource Efficiency**             | OpenAI Codex (#33776, #30408), OpenCode (#30086), Gemini CLI (#28401)           | Prevent process leaks, CPU spikes, unbounded memory/shell output |
| **Provider & Model Flexibility**    | Pi (#7081, #7105), OpenAI Codex (#30132), OpenCode (#38903)                    | Support custom endpoints, Bedrock, OpenRouter; validate model compatibility pre-switch |
| **Cost & Usage Visibility**         | Qwen Code (#7719), OpenAI Codex (#32195), Gemini CLI (requested in evals)       | Real-time token usage, quota meters, cost previews per model/provider |

---

### 4. Differentiation Analysis  

| Tool              | Feature Focus                          | Target Users                         | Technical Approach |
|-------------------|----------------------------------------|---------------------------------------|--------------------|
| **Claude Code**   | Fable 5 integration, safety controls   | Enterprise dev teams                  | Proprietary `CLAUDE.md`; tight Anthropic ecosystem lock-in |
| **OpenAI Codex**  | Remote development, Windows stability  | Power users, CI/CD integrators        | Rust-based; strong SDK/toolchain focus |
| **Gemini CLI**    | Sub-agent resilience, memory hygiene   | Research, content-heavy workflows     | Google-native; aggressive auto-memory system |
| **GitHub Copilot CLI** | Session management, plugin marketplace | GitHub-native developers              | Tight IDE/Git integration; heavy reliance on CAPI |
| **Kimi CLI**      | Cross-device continuity, stability     | Mobile-first devs, remote workers     | Local-first architecture; session portability |
| **OpenCode**      | Desktop UX, legacy layout retention    | VS Code users, terminal purists       | Electron-based; hybrid TUI/GUI design |
| **Pi**            | Claude ecosystem parity, Bedrock support | Anthropic-aligned workflow users      | Multi-provider abstraction layer |
| **Qwen Code**     | Sub-agent grading, math rendering        | Technical writers, researchers        | Chinese-language optimization; web-shell UI |
| **DeepSeek TUI**  | Minimalist terminal experience         | CLI-first enthusiasts                 | Pure TUI; lightweight footprint |

---

### 5. Community Momentum & Maturity  

- **Most Active Communities**:  
  - **Pi**: High issue volume (10 open), rapid PR velocity, frequent releases (v0.82.1).  
  - **OpenAI Codex**: Strong PR throughput (14 merged), focus on stability fixes.  
  - **OpenCode**: High engagement on layout regression (#37012, 31👍) and performance issues.  

- **Rapid Iteration**:  
  - **Gemini CLI**, **Qwen Code**, and **Pi** show consistent nightly/alpha releases with structured changelogs.  
  - **Claude Code** and **GitHub Copilot CLI** exhibit slower iteration cycles amid critical regressions.

- **Maturity Signals**:  
  - **OpenAI Codex** and **Pi** demonstrate mature CI/CD pipelines and cross-platform testing.  
  - **Kimi CLI** and **DeepSeek TUI** remain smaller but focused on niche UX improvements.

---

### 6. Trend Signals  

- **Standardization Push**: Emergence of `AGENTS.md` reflects industry movement toward **vendor-neutral agent interoperability**, reducing lock-in risks.  
- **Session Portability**: Remote control (#1282, Kimi CLI) and state persistence (#76844, Claude Code) signal growing demand for **device-agnostic workflows**.  
- **Resource Governance**: CPU/memory leaks (#33776, OpenAI Codex; #30086, OpenCode) highlight need for **predictable performance** in long-running agent sessions.  
- **Cost Transparency**: Token usage visibility (#7719, Qwen Code) becomes critical as developers manage **budget constraints** across multiple models/providers.  
- **Model Switching Maturity**: Pre-switch validation (#7065, Pi) and Bedrock support (#7081) indicate maturing **multi-cloud AI strategies** among enterprise users.

---

*Prepared for technical decision-makers evaluating AI CLI tooling adoption, integration, or competitive positioning.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



### **Claude Code Skills Community Highlights Report**  
*Data as of 2026-07-26*  

---

#### **1. Top Skills Ranking**  
**a. `fix(skill-creator): run_eval.py` (PR #1298)**  
- **Functionality**: Improves recall calculation for skill descriptions by fixing evaluation artifacts and Windows compatibility.  
- **Highlights**: Addresses false 0% recall issues, critical for the optimization loop.  
- **Status**: Open (last updated 2026-06-23, 12 comments in linked Issue #556).  
- **Link**: [PR #1298](https://github.com/anthropics/skills/pull/1298)  

**b. `typographic-quality-control` (Document-Skills, PR #514)**  
- **Functionality**: Prevents typographic errors in AI-generated documents (orphan words, widow paragraphs).  
- **Highlights**: High community value for document usability.  
- **Status**: Open (0 comments, last updated 2026-03-13).  
- **Link**: [PR #514](https://github.com/anthropics/skills/pull/514)  

**c. `ODT-Skill` (PR #486)**  
- **Functionality**: Creates/modifies OpenDocument (`.odt`) files for document workflows.  
- **Highlights**: Expands file-format support, requested in multiple project types.  
- **Status**: Open (last updated 2026-04-14).  
- **Link**: [PR #486](https://github.com/anthropics/skills/pull/486)  

**d. `Self-Audit Skill` (PR #1367)**  
- **Functionality**: Mechanical + reasoning-based quality gate for outputs (file checks, multi-dimensional analysis).  
- **Highlights**: Universal applicability, upcoming version 1.3.0.  
- **Status**: Open (recent updates, 0 comments).  
- **Link**: [PR #1367](https://github.com/anthropics/skills/pull/1367)  

**e. `Color-Expert Skill` (PR #1302)**  
- **Functionality**: Comprehensive color knowledge for design, art, and data visualization.  
- **Highlights**: Covers naming systems (Munsell, CSS), color spaces, and gradients.  
- **Status**: Open (recently updated 2026-07-21, high potential).  
- **Link**: [PR #1302](https://github.com/anthropics/skills/pull/1302)  

---

#### **2. Community Demand Trends**  
- **Security and Trust**: High-priority demand to address namespace abuse (Issue #492, 43 comments).  
- **Document Workflows**: Strong interest in typography, ODT/ODF support, and SharePoint integration.  
- **Testing & Quality**: Demand for skills in test generation (testing-patterns skill, PR #723) and automated quality gates.  
- **Scalability**: Requests for org-wide skill sharing and cross-platform compatibility.  

---

#### **3. High-Potential Pending Skills**  
- **`Self-Audit Skill` (PR #1367)**: Addresses critical output validation gaps; likely to merge due to recent activity.  
- **`Color-Expert Skill` (PR #1302)**: Growing interest in design and data visualization; nearing completion.  
- **`Testing-Patterns` (PR #723)**: Comprehensive testing framework requested in forums and Issues.  

---

#### **4. Skills Ecosystem Insight**  
The community’s most concentrated demand at the Skills level is **security and trust integration**, with frequent requests to prevent namespace abuse, enforce permissions, and improve institutional adoption.


---

# Claude Code Community Digest: 2026-07-26

## Today's Highlights
The community is currently focused on high-stakes stability issues involving the new **Fable 5** model and critical session-state bugs during task resumption. While developers push for industry-standard interoperability via `AGENTS.md`, significant friction persists regarding automated safety safeguards and unexpected quota consumption.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
1. **[#6235] Support for `AGENTS.md`** | [Link](https://github.com/anthropics/claude-code/issues/6235)  
   *The most discussed issue (4,451 👍).* Users are demanding support for the emerging `AGENTS.md` standard to allow Claude Code to collaborate seamlessly with other agents like Cursor and Amp.
2. **[#81234] Rapid Quota Depletion** | [Link](https://github.com/anthropics/claude-code/issues/81234)  
   Users report consuming over 50% of weekly Max quotas in just two days, even during idle periods, suggesting potential metering/cache issues.
3. **[#81283] Fable 5 Availability Discrepancy** | [Link](https://github.com/anthropics/claude-code/issues/81283)  
   Significant confusion as Fable 5 is available in the Claude app but remains inaccessible via the CLI and VS Code extension.
4. **[#81285] Fable 5 Logic Errors** | [Link](https://github.com/anthropics/claude-code/issues/81285)  
   Reports of "self-contradictory" error responses where the model rejects trivial arithmetic (e.g., "2+2") with success-type error flags.
5. **[#77966] OAuth Login Loops** | [Link](https://github.com/anthropics/claude-code/issues/77966)  
   A recurring Linux/IntelliJ bug where the OAuth state parameter is dropped during the sign-in redirect.
6. **[#76844] Task ID Persistence Failures** | [Link](https://github.com/anthropics/claude-code/issues/76844)  
   Critical bug where `TaskCreate` IDs are not restored upon session resumption, breaking workflow continuity.
7. **[#80988] Implicit System Prompt Injection** | [Link](https://github.com/anthropics/claude-code/issues/80988)  
   The `heron_brook` prompt section is reportedly overriding user-configured delegation policies in version 2.1.219.
8. **[#81275] Windows Browser Crash** | [Link](https://github.com/anthropics/claude-code/issues/81275)  
   A hard crash occurring on Windows when opening the in-app Browser pane, specifically affecting Intel and NVIDIA hardware.
9. **[#68429] Account Deletion Bug** | [Link](https://github.com/anthropics/claude-code/issues/68429)  
   A high-severity report involving an unauthorized Pro $\rightarrow$ Max upgrade that results in permanent data and account loss.
10. **[#81273] Safety Guard Bypass** | [Link](https://github.com/anthropics/claude-code/issues/81273)  
    A critical security concern where `rm -rf` commands inside backtick substitutions are executing without user prompts.

## Key PR Progress
1. **[#81262] Statsig Event Logging** | [Link](https://github.com/anthropics/claude-code/pull/81262)  
   Implements proper event differentiation between issue creation and closure for analytics.
2. **[#81261] Worktree Path Handling** | [Link](https://github.com/anthropics/claude-code/pull/81261)  
   Improves `/clean_gone` to correctly parse Git worktree paths containing spaces.
3. **[#49596] GitHub API Refactor** | [Link](https://github.com/anthropics/claude-code/pull/49596)  
   Extracts the shared GitHub API client into a dedicated, testable module.
4. **[#15727] Python Import Fix** | [Link](https://github.com/anthropics/claude-code/pull/15727)  
   Corrects Python import paths for hook modules to resolve `No module named 'hookify'` errors.
5. **[#39043] Design Cleanup** | [Link](https://github.com/anthropics/claude-code/pull/39043)  
   Removes outdated "retro-futuristic" recommendations from the Frontend Design Skill.

## Feature Request Trends
* **Interoperability & Standards:** Heavy push toward adopting `AGENTS.md` to move away from proprietary formats like `CLAUDE.md`.
* **Session Continuity:** Requests for better state management, specifically regarding task list persistence and subagent status visibility during resumed sessions.
* **Visual Feedback:** Community requests for "Uploading" indicators and more descriptive status updates for multi-context workflows.
* **Local Context Awareness:** High demand for native timezone support to match system locales for timestamp reporting.

## Developer Pain Points
* **Model Reliability (Fable 5/Opus 4.8):** Frequent "false-positive" safety flags during security research and inconsistent behavior in long-running agentic sessions.
* **State Fragmentation:** The tendency for task IDs and session settings (like `--effort`) to reset or fail to sync during daemon-hosted or resumed sessions.
* **Account & Billing Friction:** Critical failures in the upgrade/refund loop and unexpected quota consumption are causing significant user frustration.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑07‑26**

---

### 1.  Today's Highlights
- **Remote‑development support has been charged into the community:** the highly‑commented issue on #10450 has been closed, and further work is being discussed in #33776.
- **Multiple performance regressions on Windows** (process‑leaks, high‑CPU powershell polling, GPU crashes) have pushed the dev‑team to roll out a set of targeted PRs to tighten process cleanup and sandboxing.  
- **The Rust client libraries received two small alpha releases** (v0.146.0‑alpha.10.1 & v0.146.0‑alpha.10), improving stability for tool‑call integrations.

---

### 2.  Releases  
- **`.cargo` Rust ReleasesMT *(-relevant to CLI developers)*  
  - **`rust-v0.146.0-alpha.10.1`** – Minor bug‑fixes for persone‑scope tool call handling.  
  - **`rust-v0.146.0-alpha.10`** – Backcompat patch for `apply_patch.bat` errors.  
  *(No new Codex Desktop or CLI releases were published today.)*

---

### 3.  Hot Issues  
| # | Title | Why it matters | Community reaction |
|---|-------|---------------|--------------------|
| **10450** | _Remote Development in Codex Desktop App_ (closed) | First feature‑request to bring Codex to remote VS‑Code‑style sessions; 690 👍, 178 comments. | Rapid community backing; guides will be published soon. |
| **1457** | _Python UV fails in Codex_ (closed Candidates 61 comments) | Breaks CI pipelines using `uv`; affects ~30 % of open‑source repos. | Upshot: improved failure‑mode diagnostics in `uv` integration. |
| **33776** | _Windows Desktop spawns hundreds of taskkill/conhost processes_ (open) | Causes WMI storms, degraded GPU, high CPU. 21 👍, 24 comments. түл | Dev team raced to patch process‑cleanup; investigation thread continues. |
| **30132** | _JSON with “oneOf” root causes Azure error_ (closed) | Azure OpenAI endpoint integration failed; lots of handlers using that schema. | Fix added to validator; docs updated for Azure compatibility. |
| **29356** | _Context compaction loses operational continuity_ (open; 20 comments) | Large tasks lose steps during compaction, leading to manual re‑runs. | Community suggests keeping last 5 steps; patch underway. |
| **30408** | _MCP server processes leak forever_ (open; 17 comments) | Thread‑archival leaks >9 GB RSS per thread; critical in long‑running workflows. | PR #35414 raises recursion limits as interim fix, full cleanup in progress. |
| **25453** | _powershell.exe spawns every second for polling_ (open; 16 comments) | 100 % CPU tkinter on Windows; only 4 👍. | Feature request for a optimized polling strategy. |
| **34133** | _vk_swiftshader.dll GPU crash on screenshot_ (open; 14 comments) | In‑app browser screenshot crashes GPU process leading to UI freezes. | Pinned as high‑priority; patch will drop the bundled shader. |
| **35058** crisis_ | _Codex Diff crashes in VS Code on macOS_ (open; 12 comments) | Diff tab shows “Oops”. Disables core productivity workflow. | Extension developers coordinated a crash‑reporting session. |
| **26478** | _spellcheck shows “No Guesses Found”_ (open; 12 comments, 23 👍) | Misspellings are highlighted but no suggestions, obstructing rapidEscape edits. | Proposed to hook Windows native spell‑check directly. |

---

### 4.  Key PR Progress  
| # | Summary | Impact |
|---|---------|--------|
| **35414** | *Raise MCP server recursion limit* – increases Rust recursion depth to 256 for MCP. | Prevents stack overflows in complex agent hierarchies. |
| **35408** | *Ignore generated system skills* – system‑generated skills منافه. | Avoids false positives when the watcher dumps system skill cache. |
| **35375** | *Make keymap action menu responsive* – re‑flows long descriptions. | Improves terminal UI usability on narrow widths. |
| **35365** | *Refresh unified mention results* – restarts file search on popup open. | Eliminates stale mention lists during quick‑repeats. |
| **35364** | *Bind Code Mode headers* – limits domínio of `code_mode_tool_names`. | Keeps HTTP headers bounded, improving compatibility. |
| **35363** | *Include `started_at_ms` in completion events* – timestamps for each item. | Enables better audit logs and replay consistency. |
| **35359** | *Handle exec-server network policy requests* – client‑side allowance flow. | Resolves network‑policy crossed‑fire when sandboxed. |
| **31582** | *Expose thread‑selected skills* – skill list now shows environment‑specific skills. | Helps developers reason about tool availability per thread. |
| **30228** | *Notify clients on thread‑selected skill changes* – invalidate skill cache on change. | Reduces stale skill calls after environment state changes. |
| **29845** | *Plumb window launchers through explicit application paths* – Windows unified exec. | Fixes `apply_patch.bat` mis‑resolution on Windows. |
| **31782** | *Bound stdio JSON‑RPC frame size* – clamp to 64 MiB. | Preventsૈ exploitable runaway frames from exec-servers. |
| **31810** | *Improve pipeline ancestor discovery* – parallelizes catalog discovery. | Cuts remote startup latency by ~30 %. |

*All 14 PRs from the past 24 h are closed or already merged, indicating a healthyPower of maintainer engagement.*

---

### 5.  Feature Request Trends  
| Theme | Representative Issue | Developer Voice |
|-------|----------------------|-----------------|
| **Remote & VPN‑compatible Development** | #10450 | 8 k comment, 690 👍 – Cross‑host coding is a top priority. |
| **Performance & Resource Management** | #33776, #25453, #30408 | 100 % CPU / 9 GB RSS spikes; community demands deterministic cleanup. |
| **Context & Task‑state Integrity** | #29356, #35226, #23257 | 30 % of incidents involve auto‑compaction or image leakage; users request “last‑5‑steps” Conveniences. |
| **Tool‑call & SDK Stability** | #1457, #24973 | Users expect stable UV/​Curl pipe integration and custom‑provider support. |
| **Platform‑specific UX Fixes** | #26478, #30749, #35162 | Windows spellcheck, accessibility, and extension auth repeatedly bug. |
| **Usage‑Limit Visibility** | #32195 | Nearly all Pro users want on‑screen 5‑hr & weekly caps. |

---

### 6.  Developer Pain Points  
| Pain | What it looks like | Frequency |
|------|--------------------|-----------|
| **Uncontrolled process leakage** | `taskkill.exe` & `conhost.exe` proliferation on Win‑10/11. | High (30+ incidents). |
| **Spiking CPU & RAM** | Continuous `powershell.exe` polling; `MCP` thread leaks. | Medium‑High. |
| **Inconsistent context compaction** | Loss of last operations, huge checkpoints. | Medium. |
| **Tool‑call fragmentation** | UV failures, custom‑provider errors, `apply_patch.bat` mis‑resolution. | High. |
| **Desktop‑vs‑CLI sync issues** | GUI spawns mismatched CLI versions; authentication breakpoints. | Medium. |
| **Accessibility & UI તો** | Spellcheck suggestions missing; Jaws accessibility regressions. | Low‑Medium. |
| **Error transparency** | “Oops” crash messages in VS Code, Grid leak mis‑reports. | Medium. |

**Bottom line:** The community is hungry for **robust remote workflows, predictable resource usage, and a seamless cross‑platform experience**. The dev team has made measurable headway on process cleanup and tool‑call stability, but the next sprint needs a firm focus on **Windows performance** and **context‑state recovery** before the next release cycle.  

---

*Happy coding!*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑07‑26**

---

### 1. Today’s Highlights
- A new nightly release **v0.54.0-nightly.20260726.g3818efbbf** was cut, bumping the version and incorporating the changelogs for v0.53.0‑preview.0 and v0.52.0.  
- Community activity remains focused on agent reliability: the top‑commented issues revolve around sub‑agent mis‑reporting of success, general‑agent hangs, and memory‑system quirks.  
- Ongoing PR work includes a critical fix for unbounded shell‑tool output (PR #28401) and improvements to MCP OAuth token handling (PR #28481), signalling a push toward stability and security.

---

### 2. Releases
- **v0.54.0-nightly.20260726.g3818efbbf** (released 2026‑07‑26)  
  - Automated version bump; includes the previously published changelogs for **v0.53.0‑preview.0** and **v0.52.0**.  
  - No functional changes listed in this bump; the release primarily updates the nightly tag.  
  - [Release notes / PR #28536](https://github.com/google-gemini/gemini-cli/pull/28536)

---

### 3. Hot Issues (top‑10 by comment count)

| # | Issue | Comments / 👍 | Why it matters |
|---|-------|---------------|----------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | 12 / 2 | Mis‑leading success status hides when a sub‑agent actually hit the turn limit, complicating debugging of long‑running investigations. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs forever | 8 / 8 | Simple tasks (e.g., folder creation) cause indefinite hangs; a high‑impact usability blocker that forces users to disable sub‑agents. |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via Zero‑Dependency OS Sandboxing & Post‑Execution Intent Routing | 8 / 1 | Feature request to let Gemini use native bash tools securely; would improve agent efficiency and reduce token usage. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component level evaluations | 7 / 0 | Tracks expansion of behavioral evals; crucial for ensuring agent reliability as the toolkit grows. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST‑aware file reads, search, and mapping | 7 / 1 | Investigates AST‑based tooling to cut down on mis‑aligned reads and token noise—direct performance win. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub‑agents enough | 6 / 0 | Highlights a gap between available custom skills/agents and actual model behavior; limits extensibility. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low‑signal sessions indefinitely | 5 / 0 | Memory system gets stuck retrying useless sessions, wasting resources and clouding the inbox. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | 4 / 0 | Security‑focused; current redaction happens after content hits the model, risking secret leakage. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with “Waiting input” after completion | 4 / 3 | Simple CLI commands leave the shell in a waiting state, breaking workflow automation. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Enhance browser_agent resilience: Automatic session takeover and lock recovery | 4 / 0 | Persistent browser profiles cause hard failures; improving resilience would make UI‑testing agents more reliable. |

---

### 4. Key PR Progress (selected 10)

| PR | Summary |
|----|---------|
| [#28401](https://github.com/google-gemini/gemini-cli/pull/28401) | **fix(shell): bound command output sent to the model** – caps the size of shell‑tool output forwarded to the LLM, preventing context‑overflow from commands like `find /` or large `git log`. |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | **fix(core): refresh MCP OAuth tokens with the stored client ID** – resolves token‑refresh failures for servers added via OAuth discovery, eliminating forced re‑auth on each use. |
| [#28535](https://github.com/google-gemini/gemini-cli/pull/28535) | **fix: use resolveRipgrepPath in perf test global setup** – updates performance‑test helpers after the removal of `canUseRipgrep()`, keeping benchmarks green. |
| [#28534](https://github.com/google-gemini/gemini-cli/pull/28534) | **fix(ci): retry staging‑tmp dist‑tag removal after npm publish** – adds robustness to the nightly release pipeline by retrying dist‑tag cleanup. |
| [#28442](https://github.com/google-gemini/gemini-cli/pull/28442) | **Main** – large refactor (size xl) touching core internals; details pending but likely includes architectural cleanup. |
| [#28435](https://github.com/google-gemini/gemini-cli/pull/28435) | **feat(pr-generator-core): add environment config parser, command executor, GitHub REST client** – lays groundwork for the automated PR‑generation pipeline. |
| [#28433](https://github.com/google-gemini/gemini-cli/pull/28433) | **feat(pr-generator-orchestrator): implement iterative bug‑fixing state machine and container worker entrypoint** – orchestrates the AI‑driven fix loop for the SSR pipeline. |
| [#28434](https://github.com/google-gemini/gemini-cli/pull/28434) | **feat(pr-generator-agent): implement Antigravity agent runner and prompt templates** – supplies the LLM prompts that drive code generation, QA, and refinement. |
| [#28432](https://github.com/google-gemini/gemini-cli/pull/28432) | **feat(pr-generator-db): implement Firestore concurrency dual‑locking and test ingestion utilities** – provides transactional locking for the pipeline’s Firestore backend. |
| [#28431](https://github.com/google-gemini/gemini-cli/pull/28431) | **feat(pr-generator-infra): configure Cloud Run job, Workflows definition, and Dockerfile** – provisions the cloud infrastructure needed to run the PR‑generator at scale. |

---

### 5. Feature Request Trends (derived from Issues)

- **AST‑aware tooling** – Multiple issues (#19873, #22745, #22746) ask for Abstract Syntax Tree‑based file reads/search to reduce token waste and improve precision.  
- **Sub‑agent visibility & control** – Requests for better exposure of sub‑agent trajectories (#22598), forced skill/agent usage (#21968), and resilience improvements for browser and generalist agents (#22232, #21409).  
- **Memory & logging reliability** – Calls for deterministic redaction, low‑signal session handling (#26522, #26525), and quarantining invalid Auto Memory patches (#26523).  
- **Sandboxed bash execution** – Desire to let the model safely leverage its native bash affinity without compromising UX or security.  
- **Config propagation** – Ensuring agent‑specific overrides (e.g., `maxTurns`) are respected (#22267) and that symlinked agents are recognized (#20079).  

These trends indicate a community push toward **more efficient, observable, and secure agent behavior**, especially around tool use, memory hygiene, and extensibility.

---

### 6. Developer Pain Points

- **Unpredictable hangs** – Generalist agent and browser sub‑agent frequently stall on simple actions (issues #21409, #21983, #22465), forcing users to disable sub‑agents or manually intervene.  
- **Misreported status** – Sub‑agents incorrectly signal success after hitting turn limits (#22323), obscuring failures and complicating automation.  
- **Memory system noise** – Auto Memory repeatedly retries low‑signal sessions and logs excessively, cluttering the inbox and potentially leaking secrets (#26522, #26525).  
- **Shell output bloating** – Unbounded command output floods the model context, degrading response quality and burning tokens (fixed in PR #28401 but still a frequent complaint).  
- **Tool‑limit errors** – With >128 tools the CLI returns 400 errors (#24246), indicating a need for smarter tool‑selection or dynamic scoping.  
- **Authentication loops** – MCP OAuth refresh failures on Windows caused repeated re‑auth flows (addressed in PR #28481 but historically painful).  
- **Limited skill/agent adoption** – Despite available custom skills, the model rarely invokes them without explicit prompting (#21968), reducing the value of the extensibility model.  

Addressing these pain points—particularly around agent reliability, memory hygiene, and bounded tool usage—will likely yield the biggest gains in developer satisfaction and adoption.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest: 2026-07-26

## Today's Highlights
The Copilot CLI community is currently navigating significant stability challenges following recent updates, specifically regarding session management and memory regressions. Developers are reporting increased resource consumption and unexpected behaviors during session resumption, alongside critical bugs affecting plugin persistence and command reliability.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
1. **[#4251] Regression in Session Resumption (OOM/CPU usage)**: A major regression in version 1.0.74 causes large sessions to consume 3-4x more memory and spike CPU for 70+ minutes. Critical for power users. [Issue #4251](https://github.com/github/copilot-cli/issues/4251)
2. **[#4252] Settings Overwrite Bug**: Exiting an interactive session silently reverts `settings.json` to the session's launch-time model, wiping out user customizations. [Issue #4252](https://github.com/github/copilot-cli/issues/4252)
3. **[#4183] CAPI Payload Failures**: Even with auto-compaction, long tool-heavy sessions are hitting a 5MB CAPI body limit, causing model calls to fail. [Issue #4183](https://github.com/github/copilot-cli/issues/4183)
4. **[#4247] Plugin Marketplace Persistence**: Users report that `marketplace add` succeeds, but the registration is not saved to disk, making plugins unavailable upon restart. [Issue #4247](https://github.com/github/copilot-cli/issues/4247)
5. **[#2205] Terminal Rendering: Mouse Scroll Issues**: A recent version broke mouse scrolling in the terminal, causing it to navigate input history instead of the agent's output. [Issue #2205](https://github.com/github/copilot-cli/issues/2205)
6. **[#4241] Password Masking Failures**: Masking passwords causes agents to enter infinite loops of attempting to read raw bytes to resolve "missing" credentials. [Issue #4241](https://github.com/github/copilot-cli/issues/4241)
7. **[#1464] Skill Scaling & Token Limits**: Installing many skills (~63) causes the system prompt to truncate skills beyond position 32 due to token limits. [Issue #1464](https://github.com/github/copilot-cli/issues/1464)
8. **[#4246] Archive Session Timeouts**: `archive_session` is timing out during worktree teardown, leaving orphaned worktrees and wasted disk space. [Issue #4246](https://github.com/github/copilot-cli/issues/4246)
9. **[#4249] Plan Indicator Leaks**: In non-interactive/headless modes, the plan indicator can leak across different conversations sharing the same repo. [Issue #4249](https://github.com/github/copilot-cli/issues/4249)
10. **[#4253] Unreliable `/ask` Command**: Users report the `/ask` command frequently executes with no output or error message, providing no feedback on status. [Issue #4253](https://github.com/github/copilot-cli/issues/4253)

## Key PR Progress
* **[#4228] Documentation Cleanup**: A withdrawn PR regarding incorrect scoping for documentation changes. [PR #4228](https://github.com/github/copilot-cli/pull/4228)
* **[#23] Design Standards**: Discussion regarding `monad.yml` and mystic standards for technology implementations. [PR #23](https://github.com/github/copilot-cli/pull/23)

## Feature Request Trends
* **IDE Integration Deepening**: Strong interest in bridging the gap between the terminal CLI and IDE-specific features (e.g., highlighting diffs in IDE terminals, supporting `/rename` in VS Code Agent sessions).
* **Advanced Session Management**: Requests for more robust session handling, specifically the ability to rename sessions directly within the UI and better recovery mechanisms for timed-out sessions.
* **Marketplace Expansion**: Significant community interest in the official plugin marketplace and more reliable ways to manage third-party skillsets.

## Developer Pain Points
* **Resource Management**: The shift from 1.0.73 to 1.0.74 has introduced significant performance regressions, specifically concerning memory (OOM) and CPU exhaustion during session resumption.
* **Context & Scaling Limitations**: Developers are hitting hard limits regarding token usage and payload sizes (CAPI 5MB limit) when using heavy tool-calling and high volumes of installed skills.
* **Configuration Fragility**: Issues with `settings.json` being overwritten by session state and plugin registration not persisting are creating a volatile developer environment.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Today's Highlights**  
The community saw a surge in demand for a *Remote Control* capability that would let users pick up a local Kimi Code CLI session from any device, while a critical dead‑loop bug reported on 2026‑07‑25 was addressed in the latest code base. Several bug‑fix PRs were merged, tightening session resume behavior and improving Windows test reliability.

**Releases**  
No new releases were published in the past 24 hours.

**Hot Issues**  
| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #1282 | **Remote Control – Continue local sessions from any device** (enhancement) | Enables seamless workflow continuity when users step away from their desk, preserving full local environment and context. | 16 👍 reactions; 8 comments indicating strong interest and willingness to contribute. <https://github.com/MoonshotAI/kimi-cli/issues/1282> |
| #2557 | **Dead Loop** (bug) | A looping condition in the CLI could hang the process, blocking user progress and degrading reliability. | No 👍 or comments yet; the issue was opened on the same day and is awaiting triage. <https://github.com/MoonshotAI/kimi-cli/issues/2557> |

*Only two issues are currently active; they represent the most salient community concerns.*

**Key PR Progress**  
| # | Title | Summary | Link |
|---|-------|---------|------|
| #2520 | fix(session): align fork/undo context truncation to wire turns | Aligns context truncation logic with wire‑turn handling, resolving history mismatches after forks/undos and fixing related regressions. | <https://github.com/MoonshotAI/kimi-cli/pull/2520> |
| #2519 | fix(app): refresh stale frozen system prompt on session resume | Ensures that resumed sessions load the latest `_system_prompt` record, preventing missing skills and agent edits. | <https://github.com/MoonshotAI/kimi-cli/pull/2519> |
| #2518 | fix(web): persist uploads .sent marker so restarts do not re‑send files | Persists a marker to avoid re‑uploading previously sent images after server restarts, eliminating session pollution. | <https://github.com/MoonshotAI/kimi-cli/pull/2518> |
| #2558 | fix(tests): improve Windows cross‑platform test compatibility | Fixes `Path.write_text()` newline handling on Windows, preventing `\r\n` conversion bugs in the test suite. | <https://github.com/MoonshotAI/kimi-cli/pull/2558> |
| #2520 (closed) | fix(session): align fork/undo context truncation to wire turns | (Duplicate entry – already covered above) | — |

*All merged PRs address stability, session continuity, and cross‑platform test robustness.*

**Feature Request Trends**  
- **Remote Control** – The most‑requested enhancement (#1282) seeks a mechanism to continue a local CLI session from phones, tablets, or browsers, indicating a strong desire for cross‑device workflow continuity.  

**Developer Pain Points**  
- **Session Resume Inconsistencies** – Frozen `_system_prompt` records and missing skill/agent updates when resuming sessions (#2420, #2519) cause incomplete contexts and hinder productivity.  
- **File Re‑upload Pollution** – Restarting a web session re‑sends previously uploaded files (including images) (#2413), cluttering logs and wasting bandwidth.  
- **Cross‑Platform Test Fragility** – Windows‑specific path handling bugs (`\r\n` conversion) break test reliability (#2558).  
- **History Mismatch After Forks/Undos** – Context truncation misalignment leads to divergent histories after fork/undo operations (#2049, #2517).  
- **Stability Issues** – A dead‑loop bug (#2557) can freeze the CLI, disrupting development workflows.  

*Overall, the community is focused on improving session fidelity, reliability, and usability across devices and platforms.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-26

## Today's Highlights
The OpenCode community is actively addressing critical stability regressions in v1.18.5, including desktop freezes on project close, TUI input failures, and a persistent CPU allocation loop in the V2 server. Multiple high-engagement issues signal user frustration with the recent layout overhaul and legacy workflow disruption. Meanwhile, contributor PRs are shipping UX polish (TUI startup progress, keyboard deadlock fixes) and new capabilities like dynamic workflows and a `roll-call` connectivity command.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#30086](https://github.com/anomalyco/opencode/issues/30086) | **High CPU usage in newer versions** | Users report 10→3 concurrent session capacity drop; mouse lag indicates systemic perf regression. | 36 comments, 19 👍 — widespread pain |
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | **Keep legacy layout option** | New layout hides features behind navigation; workspace workflow broken. | 33 comments, 31 👍 — strongest feature demand |
| [#38789](https://github.com/anomalyco/opencode/issues/38789) | **Desktop v1.18.5: `UnsupportedContentType` on project reload** | Blocks project loading after upgrade; SDK-generated client error. | 7 comments, fresh regression |
| [#38801](https://github.com/anomalyco/opencode/issues/38801) | **"exiting loop" message breaks TUI** | Recurring TUI instability across API providers; renders CLI unusable. | 6 comments, long-standing frustration |
| [#31217](https://github.com/anomalyco/opencode/issues/31217) | **TUI prompt input fails on Enter** | Input swallowed, message not submitted; affects all languages, slash commands work. | 6 comments, 1 👍 — core UX break |
| [#36677](https://github.com/anomalyco/opencode/issues/36677) | **V2 server persistent allocation loop** | Idle server consumes 1 CPU core + 1.3 GB RSS; GC pressure suggests memory leak. | 3 comments, perf-critical |
| [#38791](https://github.com/anomalyco/opencode/issues/38791) | **Run loop never exits with non-time-sortable message IDs** | Imported/third-party sessions cause infinite loop until provider 400s. | 3 comments, architectural fragility |
| [#38844](https://github.com/anomalyco/opencode/issues/38844) | **Close button freezes UI** | Clicking project close button locks entire desktop app. | 3 comments, v1.18.5 blocker |
| [#38885](https://github.com/anomalyco/opencode/issues/38885) | **Desktop freezes closing project on Windows 11** | Reproducible after clean reinstall; project switch broken. | 2 comments, Windows-specific severity |
| [#34442](https://github.com/anomalyco/opencode/issues/34442) | **Windows offline installer broken: ripgrep not bundled** | Core tools (`grep`, `glob`, `skill`) fail without internet; `customize-opencode` skill broken. | 2 comments, 3 👍 — offline/air-gap blocker |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#38906](https://github.com/anomalyco/opencode/pull/38906) | Feature | **TUI startup progress bar** — staged loading for terminal, settings, workspace, theme, plugins; addresses frozen-start perception. Closes #36195. |
| [#38802](https://github.com/anomalyco/opencode/pull/38802) | Feature | Duplicate of #38906 (closed); same startup progress implementation. |
| [#38433](https://github.com/anomalyco/opencode/pull/38433) | Feature | **`roll-call` command** — tests model connectivity/latency; useful for CI and multi-provider setups. Closes #13711. |
| [#36550](https://github.com/anomalyco/opencode/pull/36550) | Bug Fix | **TUI keyboard deadlock in question mode** — resolves mutually exclusive `useBindings` causing input freeze. Closes #36382, #30517. |
| [#29789](https://github.com/anomalyco/opencode/pull/29789) | Feature | **Dynamic workflows** — project-local `/workflow <name> arg=value` execution + inspection via `/workflow list`. Closes #29059. |
| [#33734](https://github.com/anomalyco/opencode/pull/33734) | Feature | **TUI session focus events** — publishes `tui.session.select/deselect` on focus change for external tooling. Closes #31051. |
| [#33950](https://github.com/anomalyco/opencode/pull/33950) | Bug Fix | **ACP permission prompt shows real tool context** — title now reflects actual operation, not just tool kind. Closes #33949. |
| [#33943](https://github.com/anomalyco/opencode/pull/33943) | Bug Fix | **Restore timeline scroll position** — persists/restores virtual row + viewport across tab switches/reloads. |
| [#33927](https://github.com/anomalyco/opencode/pull/33927) | Bug Fix | **VCS crash with thousands of untracked files** — prevents OOM/crash on large repos (1200+ untracked). Closes #33928. |
| [#33925](https://github.com/anomalyco/opencode/pull/33925) | Refactor | **Load native provider packages** — migrates config/catalog to flat schema; encodes legacy providers as `aisdk:<pkg>`. |

---

## Feature Request Trends
1. **Legacy layout retention** — Users demand toggle for pre-redesign UI (workspace access, single-window efficiency). #37012 (31 👍) is the clearest signal.
2. **Annual billing + invoicing** — Enterprise adoption blocker; #20252 requests yearly plan with tax-compliant invoices.
3. **Offline/air-gap support** — Windows installer must bundle ripgrep and core tools; #34442 highlights enterprise deployment gap.
4. **TUI polish** — Font sizing (#38884), scroll-to-top (#38876), session name in status bar (#38881) — cumulative UX debt.
5. **Model provider flexibility** — ChatGPT OAuth endpoint hardcoded (#38903); Xiaomi MiMo tool-content rejection (#32613) shows need for provider-agnostic content handling.

---

## Developer Pain Points
- **v1.18.5 regression cluster**: Project-close freeze (#38844, #38885), `UnsupportedContentType` (#38789), API outages (#38874) — all landed together, eroding trust in desktop release cadence.
- **TUI input reliability**: Enter-key swallowing (#31217), "exiting loop" spam (#38801), black-rectangle overlay during tool calls (#38773) — make daily CLI use unpredictable.
- **Performance at scale**: CPU spike (#30086), V2 server allocation loop (#36677), VCS crash on large repos (#33927) — indicate insufficient soak testing.
- **Session portability**: Imported sessions break run-loop (#38791); message ID assumptions leak into core logic.
- **Windows/WSL second-class**: Web UI session list empty (#37096), offline installer broken (#34442), project-close freeze (#38885) — platform gaps persist.

---

*Digest generated from GitHub data (issues/PRs updated 2026-07-25 → 2026-07-26). Links point to live GitHub items.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

We need to generate a structured digest based on the provided data.

We must summarize:

- Today's Highlights: 2-3 sentences summarizing most important updates. Look at releases: v0.82.1 (Claude Opus 5, adaptive thinking). Also issues: top ones? Possibly the bug about session folder collision? Probably highlight release and major issues.

- Releases: summarize v0.82.1 features.

- Hot Issues: pick 10 noteworthy Issues from list (last 24h updated). We need to explain why they matter and community reaction (comments, likes). Provide GitHub links.

- Key PR Progress: pick 10 important PRs, describe features/fixes.

- Feature Request Trends: distill most-requested feature directions from all Issues.

- Developer Pain Points: recurring frustrations.

We need to be concise and professional.

We need to use data provided. Provide links.

Let's parse the data.

Latest Releases:
- v0.82.1: v0.82.1
  ### New Features
- **Claude Opus 5** — Available on Anthropic and Amazon Bedrock with adaptive thinking (including `xhigh`), inference profiles, and prompt caching.
See Providers link.

Also note release includes other? Only that.

Latest Issues (updated in last 24h) with comment counts.

We need top 30 by comment count but we can pick 10 noteworthy.

List of issues includes:

#4877 [CLOSED] bug Session folder collision (21 comments, 2 likes)
#6050 [CLOSED] no-action TUI full redraw clears terminal scrollback during active rendering (15 comments)
#6768 [OPEN] bug Compaction using Copilot Enterprise not possible (13 comments, 11 likes)
#6665 [OPEN] inprogress TUI pins a full core while streaming: uncached Intl.Segmenter + per-chunk Markdown rebuild (7 comments)
#5990 [OPEN] bug, inprogress TUI flickers when confirm/select dialog content taller than terminal height (5 comments, 3 likes)
#7090 [CLOSED] no-action Regenerate 0.82.x shrinkwrap with brace-expansion 5.0.8+ (4 comments)
#7020 [OPEN] bug, inprogress Sometimes Pi doesn't continue after compaction (4 comments, 1 like)
#6948 [CLOSED] Built-in llama.cpp provider: defaultProvider/defaultModel not applied at startup (race condition) (4 comments)
#7064 [OPEN] bug WSL absolute windows paths are mishandled (3 comments)
#7077 [CLOSED] bug, no-action Pi continue to say working when it is done (3 comments)
#7048 [OPEN] last-read Compaction summary can be persisted truncated mid-word when generation hits token cap (3 comments)
#7069 [CLOSED] bug, no-action Upgrade to v0.82.0 causes persistent "Validation failed for tool 'bash'" errors (3 comments)
#7087 [CLOSED] no-action Allow calling refreshModels via RPC (3 comments)
#7078 [CLOSED] no-action support manual paste of localhost callback for openrouter login flow (3 comments)
#7067 [CLOSED] no-action Model switch breaks session: GPT HTML errors, Qwen enable_thinking 400, no pre-switch validation (3 comments)
#7115 [CLOSED] untriaged OpenRouter Inkling is capped at 4K when aggregate output metadata is null (2 comments)
#7079 [CLOSED] no-action Fresh model regen fails typecheck: tests reference delisted codex models (2 comments)
#7076 [CLOSED] no-action Add Claude Opus 5 (2 comments, 1 like)
#7066 [CLOSED] no-action Make truncation limits configurable to save context (2 comments)
#7065 [CLOSED] no-action Model switch does not validate context size or convert thinking blocks, causing silent failures (2 comments)
#7056 [CLOSED] no-action fix(ai,agent,coding-agent): prevent retry on tool validation errors (2 comments)
#7119 [CLOSED] untriaged Path for extension-owned context clear without carrying a fork (1 comment)
#7113 [CLOSED] untriaged TUI freezes after entering an API key in /login when the pi.dev model catalog is unreachable (1 comment)
#7109 [CLOSED] untriaged OpenRouter routing aliases (auto, fusion) report zero cost: provider cost is discarded and priced from the alias (1 comment)
#7108 [CLOSED] untriaged Send session-affinity headers to custom providers (1 comment)
#7107 [CLOSED] untriaged Forward session-affinity headers for custom providers (1 comment)
#7105 [CLOSED] untriaged bug/feature request: --provider openai ignores OPENAI_API_BASE and hardcodes OpenAI endpoints (1 comment)
#7104 [CLOSED] untriaged Forward session-affinity headers for custom providers (1 comment)
#7102 [CLOSED] untriaged xAI grok-4.5 missing long-context cost tiers (≥200k) (1 comment)
#7101 [CLOSED] untriaged Add cost preview column to model selector UI (1 comment)

We need to pick 10 noteworthy Issues. Probably the ones with high comment counts or significant impact.

Let's pick:

#4877 (Session folder collision) – 21 comments, interesting bug.
#6050 (TUI full redraw clears terminal scrollback) – 15 comments.
#6768 (Compaction using Copilot Enterprise not possible) – 13 comments, 11 likes (high interest).
#6665 (TUI pins a full core while streaming) – 7 comments.
#5990 (TUI flickers when dialog taller than terminal) – 5 comments, 3 likes.
#7020 (Sometimes Pi doesn't continue after compaction) – 4 comments.
#6948 (llama.cpp defaultProvider race condition) – 4 comments.
#7064 (WSL absolute windows paths mishandled) – 3 comments but important cross-platform.
#7048 (Compaction summary truncated mid-word) – 3 comments.
#7069 (Upgrade to v0.82.0 causes persistent validation errors) – 3 comments.

Alternatively, maybe #7076 Add Claude Opus 5 (2 comments, 1 like) but less.

We'll include 10.

Now PRs: total 19 items.

We need pick 10 important PRs.

List of PRs (updated in last 24h) with summary.

Let's extract each:

#7118 [CLOSED] Expose extension context clear callback (wolfgangmeyers) – allows extensions to clear context without summary.

#7117 [OPEN] feat(coding-agent): add extension creation eval (christianklotz) – adds eval.

#7031 [OPEN] fix(coding-agent): run coding-agent tests offline by default (tmustier) – turns off tests online by default.

#7116 [CLOSED] fix(tui): truncate over-width lines instead of crashing (ydeng11) – prevents crash when line exceeds terminal width.

#7114 [OPEN] Add manual redirect URL fallback to OpenRouter OAuth login (rgarcia) – adds manual code fallback for SSH/headless.

#7112 [CLOSED] fix(coding-agent): normalize path separators in formatCwdForFooter for cross-platform footer display (IKEASven69) – uses forward slash.

#7111 [CLOSED] feat: support durable external tool results (MishaBear94) – adds durable external-tool-result flow.

#7110 [OPEN] fix(coding-agent): prevent duplicate messages after startup session switch (yzhg1983) – prevents duplicate messages.

#7106 [CLOSED] fix(coding-agent): exclude directories from resource loader (mrexodia) – prevents warning when reading directory.

#7091 [CLOSED] fix(coding-agent): reject overlapping user bash commands (yzhg1983) – prevents overlapping bash commands.

#7103 [OPEN] fix(coding-agent): support concurrent user bash cancellation (yzhg1983) – support cancel.

#7022 [OPEN] WIP it's a PoC fix(coding-agent): guard tree navigation during responses (tmustier) – WIP guard.

#7045 [CLOSED] feat(coding-agent): expose output padding to custom renderers (xl0) – expose padding.

#7072 [CLOSED] fix(coding-agent): cache llama.cpp model catalog (davidbrai) – fixes #6948.

#7081 [CLOSED] feat(ai): support Claude Opus 5 on Bedrock (unexge) – configures Claude Opus 5.

#7085 [CLOSED] feat(coding-agent): add vitest eval harness (christianklotz) – adds vitest eval harness.

#7061 [OPEN] fix(openai-completions): handle array content and missing finish_reason (TomeHirata) – fixes streaming bugs.

#7032 [CLOSED] fix(coding-agent): expose unavailable scoped models (christianklotz) – show unavailable models.

#7094 [CLOSED] feat(agent,coding-agent): (Chinese) – some governance features.

We need to pick 10 important PRs. Probably those that address issues, add features like Claude Opus 5, TUI fix, extension context clear, durable external tool results, etc.

Select:

#7118 – expose extension context clear callback.
#7116 – fix TUI over-width lines crash.
#7114 – manual redirect URL fallback for OpenRouter OAuth (important for headless).
#7112 – normalize path separators for cross-platform footer.
#7111 – durable external tool results.
#7081 – support Claude Opus 5 on Bedrock (release.
#7072 – cache llama.cpp model catalog (fixes race condition).
#7061 – handle array content and missing finish_reason for openai-completions.
#7032 – expose unavailable scoped models.
#7094 – (maybe less important) but could pick #7110 (duplicate messages) or #7031 (offline tests). Let's pick #7110 (prevent duplicate messages after startup session switch) as notable.

Now Feature Request Trends: from issues we see requests for:

- Configurable truncation limits (issue #7066)
- Manual paste of localhost callback for OpenRouter login (#7078)
- Send session-affinity headers to custom providers (#7108, #7107, #7104)
- Cost preview column in model selector UI (#7101)
- Add cost preview column, long-context cost tiers for grok-4.5 (#7102)
- Support for Claude Opus 5 (#7076) (already added)
- Make truncation limits configurable (#7066)
- Model switch validation (#7065)
- Prevent retry on tool validation errors (#7056)
- Extension-owned context clear without fork (#7119)
- etc.

Thus trends: better provider integration (custom headers, OpenRouter manual), cost visibility, configurable limits, improved model switching validation, extension APIs.

Developer Pain Points: recurring frustrations: TUI performance/core usage, flickering, scrollback clearing, session folder collisions, compaction issues (continuation after compaction, truncation), path handling on WSL, model switch validation, validation errors after upgrade, tool validation retries, OpenRouter OAuth headless, etc.

Now craft the digest.

We need to include GitHub links for each item.

We'll format like:

**Today's Highlights**
- The project released v0.82.1, adding Claude Opus 5 support with adaptive thinking, inference profiles, and prompt caching on Anthropic and Bedrock.
- Concurrently, the community highlighted several pressing issues: session folder collisions, TUI performance hogs, and compaction reliability problems, reflecting a focus on stability and usability.

**Releases**
- v0.82.1 (link) – main feature: Claude Opus 5 integration...

**Hot Issues**
- #4877 Session folder collision (link) – 21 comments, 2 👍. Describes how distinct paths can map to same session folder, causing confusion. Community discusses impact and possible fixes.
- #6050 TUI full redraw clears terminal scrollback (link) – 15 comments. Users report loss of scrollback during active rendering, hindering workflow. Discussion centers on root cause in core TUI renderer.
- #6768 Compaction using Copilot Enterprise not possible (link) – 13 comments, 11 👍. Highlights errors when using Copilot Enterprise for context compaction (421 Misdirected Request). Strong interest indicates need for provider‑specific handling.
- #6665 TUI pins a full core while streaming (link) – 7 comments. Points to uncached Intl.Segmenter and per‑chunk Markdown rebuild causing 100% CPU usage during long sessions. A performance hotspot.
- #5990 TUI flickers when dialog exceeds terminal height (link) – 5 comments, 3 👍. Flickering UI when confirm/select dialogs are taller than viewport; resolved only by zooming out. Indicates need for better viewport‑aware dialog rendering.
- #7020 Sometimes Pi doesn't continue after compaction (link) – 4 comments, 1 👍. Users observe that after compaction the agent stalls, suggesting a gap in post‑compaction state recovery.
- #6948 Built‑in llama.cpp provider: defaultProvider/defaultModel not applied at startup (link) – 4 comments. Race condition where model catalog refresh overrides user‑selected defaults, breaking expected startup behavior.
- #7064 WSL absolute Windows paths mishandled (link) – 3 comments. Path handling fails on WSL2, forcing fallback to command‑line tools for file operations. Affects cross‑platform usability.
- #7048 Compaction summary can be persisted truncated mid‑word (link) – 3 comments. Summaries may be cut off when token cap is hit without checking stopReason, risking loss of context.
- #7069 Upgrade to v0.82.0 causes persistent “Validation failed for tool 'bash'” errors (link) – 3 comments. Post‑upgrade validation regression for the bash tool, disrupting command execution.

**Key PR Progress**
- #7118 Expose extension context clear callback (link) – Allows extensions to clear session context without generating a summary, enabling clean hand‑offs.
- #7116 fix(tui): truncate over‑width lines instead of crashing (link) – Prevents session‑killing exceptions when rendered lines exceed terminal width.
- #7114 Add manual redirect URL fallback to OpenRouter OAuth login (link) – Provides a manual_code prompt for SSH/headless environments where the loopback callback is unreachable.
- #7112 fix(coding-agent): normalize path separators in formatCwdForFooter (link) – Ensures consistent ~/project display on Windows instead of ~\project.
- #7111 feat: support durable external tool results (link) – Introduces a defer:true mechanism for tools that need external processing, persisting pending results safely.
- #7081 feat(ai): support Claude Opus 5 on Bedrock (link) – Configures Claude Opus 5 with required adaptive thinking and improves Bedrock error handling.
- #7072 fix(coding-agent): cache llama.cpp model catalog (link) – Resolves the race condition (#6948) by caching the model catalog, ensuring defaultProvider/defaultModel are honored.
- #7061 fix(openai-completions): handle array content and missing finish_reason (link) – Fixes streaming bugs where some providers return typed arrays or omit finish_reason.
- #7032 fix(coding-agent): expose unavailable scoped models (link) – Shows unavailable models in /models, allowing users to see and remove misconfigured entries.
- #7110 fix(coding-agent): prevent duplicate messages after startup session switch (link) – Stops duplicate assistant/user messages when the session switches at startup.

**Feature Request Trends**
- **Cost visibility**: Requests for a cost preview column in the model selector (#7101) and long‑context pricing tiers for models like xAI Grok‑4.5 (#7102).
- **Provider flexibility**: Calls to forward session‑affinity headers to custom providers (#7108, #7107, #7104) and to respect OPENAI_API_BASE for alternative endpoints (#7105).
- **Configurable limits**: Desire to make tool output truncation limits adjustable (#7066) to better manage context with local models.
- **Improved model switching**: Need for pre‑switch validation of context size and thinking‑block conversion (#7065) to avoid silent failures.
- **Extension ergonomics**: Requests for a clear‑context API without forking (#7119) and better OAuth workflows for headless use (#7078, #7114).

**Developer Pain Points**
- **TUI performance & stability**: High CPU usage during streaming (#6665), flickering oversized dialogs (#5990), scrollback loss on redraw (#6050), and crashes from over‑width lines (#7116).
- **Compaction reliability**: Issues with continuation after compaction (#7020), truncated summaries (#7048), and provider‑specific failures (Copilot Enterprise #6768, llama.cpp defaults #6948).
- **Cross‑platform path handling**: WSL Windows path mishandling (#7064) and inconsistent footer separators (#7112).
- **Model switch safety**: Lack of validation when switching models leads to HTML errors or silent

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑07‑26**

---

### 1. Today's Highlights  
- **Version 0.21.0‑nightly released** (9 d19eafa9) brings a series of bug fixes and groundwork for future sub‑agent grading.  
- The PR‑merged **model‑grade selection for spawned sub‑agents** (#7702) is a major step toward fine‑grained performance tuning.  
- The community is already firing on all cylinders: 10+ hot issues and 10+ PRs touching core, UI, sandbox, and extensions.

---

### 2. Releases  
- **v0.21.0‑nightly.20260726.9d19eafa9**  
  - Internal tooling and CLI time‑zone handling fixed.  
  - Minor improvements to the autoplot render pipeline.  
  - No breaking changes; can be used as a drop‑in nightly build.

---

### 3. Hot Issues  

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| **7585** | *Direct External Context Provider Profile* | Allows non‑core extensions to inject repo‑wide context via an admin‑bound service. The ability to pull in arbitrary knowledge without modifying core is a major extensibility win. | 6 comments, 0 thumbs‑up – developers are already sketching prototypes. |
| **7665** | *Error Code 520/522* | Persistent server errors are blocking a majority of the user base when pulling from remote MCP. The issue surfaces a hidden network problem on the CLI. | 5 comments; opening contact with Qwen’s ops team. |
| **7684** | *Mac‑OS status‑line / IME glitch* | Input‑method-aware CLI is breaking in Command mode, making developers unable to type Chinese/Japanese/other IME scripts. Affects ~30% of new users. | 5 comments, no upvotes – community is converging on a temporary workaround (disabling status‑line when IME active). |
| **7697** | *VS‑Code Union MCP mismatch* | Qwen Code fails to connect to Unity MCP while its Claude counterpart works fine. This directly hampers Unity game‑dev workflows. | 4 comments, 0 thumbs‑up – fuzzing the underlying MCP plugin in progress. |
| **7719** | *Missing token‑usage display* | No visual feedback on token quota or usage percentage. Drives frustration when users hit their rate limitsда. | 3 comments, no upvotes – some developers are writing a custom `/token‑stats` tool. |
| **7685** | *Sub-agent model‑grade selection* | Central for fine‑grained performance control; triggered by many open feature‑requests.vw | 4 comments (open); influential in roadmap priorities. |
| **7700** | *Explicit math‑render contract* | Provides a portable, source‑preserving way to author math. Essential for technical docs and research workflows. | 3 comments, no upvotes – feature clearly rising in demand. |
| **7713** | *UI scroll glitch (REPL)* | Character‑by‑character auto‑scroll that breaks developer focus in v0.21.0. | 1 comment, can be traced back to incorrect prompt‑line count. |
| **7732** | *Sandbox runtime auto‑select bug* | Docker on PATH is selected even when unusable, causing CI failures. | 2 comments; mitigation via a new sandbox probe PR. |
| **7734** | *Sandbox runtime probe* | New PR ensures the runtime really works before acceptance; directly addresses the previous issue. | 0 comments; expected to close #7732. |

---

### 4. Key PR Progress  

| # | Summary (CL or Feature) | Link |
|---|--------------------------|------|
| **7702** | Adds a `model` parameter to the `agent` tool, letting AI pick a sub‑agent grade (small/medium/high быть) per settings.json. | https://github.com/QwenLM/qwen-code/pull/7702 |
| **7710** | `@qwen-code /verify` now triggers an on‑demand deep‑verification lane in the triage workflow. | https://github.com/QwenLM/qwen-code/pull/7710 |
| **7731** | Web‑Shell: IntelliJ‑style branch picker + commit dialog + create‑PR flow. Enhances dev‑experience. | https://github.com/QwenLM/qwen-code/pull/7731 |
| **7733** | Re‑defining “medium” effort to a balanced, verified pass. Improves triage quality. | https://github.com/QwenLM/qwen-code/pull/7733 |
| **7734** | Probes sandbox runtime *before* selecting it. Fixes (#7732). | https://github.com/QwenLM/qwen-code/pull/7734 |
| **7725** | Deflake tool‑control E2E tests and adds autofix flake detection to CI. | https://github.com/QwenLM/qwen-code/pull/7725 |
| **7724** | Allows `!` shell commands in new web‑shell tasks without pre‑existing session. | https://github.com/QwenLM/qwen-code/pull/7724 |
| **7728** | Adds workspace‑scoped channel‑management hook to the WebUI. | https://github.com/QwenLM/qwen-code/pull/7728 |
| **7711** | Keeps IME cursor aligned after footer updates. Resolves multi‑line status‑line / IME issue (#7684). | https://github.com/QwenLM/qwen-code/pull/7711 |
| **7714** | Protects `pinned/` memory files against accidental write during Dream fork. | https://github.com/QwenLM/qwen-code/pull/7714 |

---

### 5. Feature Request Trends  
| Theme | Representative Issues | Community Voice |
|-------|----------------------|-----------------|
| **Fine‑grained sub‑agent control** | #7685, #7702 | Growing priority: developers want to let AI pick small vs super models for spawned helpers. |
| **Token & usage visibility** | #7719, #4252 | All devs demand real‑time TPS / TTFT and a token‑quota meter. |
| **External context provisioning** | #7585 | Enables non‑core plugins to act as knowledge providers. |
| **Math & LaTeX rendering** | #7700, #7699 | Technical style authors need source‑preserving math. |
| **Scratch‑pad UI polish** | #7684, #7713 | UI glitches in status‑line, IME, and REPL shift the focus away from coding. |
| **Sandbox & runtime detection** | #7732, #7734 | CI runners consistently pick the wrong runtime; need health checks. |
| **Extension installation & management** | #7568, #7724 | Users face errors when installing skill extensions or shell tasks. |

---

### 6. Developer Pain Points  
- **UI instability** – status‑line, IME, and REPL scrolling glitches (#7684, #7713).  
- **Sandbox mis‑selection** – Docker/Podman auto‑detected a non‑working runtime (#7732).  
- **Rate‑limit and error handling** – 520/522 errors and hard‑coded retry delays (#7665, #7658).  
- **Lack of token metrics** – no real‑time display of token usage or quota (#7719).  
- **Extension install failures** – mismatched IDs and repo failures (#7568).  
- **Session restore bugs** – QQBot & session persistence problems (#7721).  

---

*This digest is meant to keep the Qwen Code community updated on the health of the project, highlight actionable items, and surface the most pressing developer concerns. Happy coding!*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

User Safety: safe

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*