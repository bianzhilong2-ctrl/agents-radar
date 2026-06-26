# AI CLI Tools Community Digest 2026-06-26

> Generated: 2026-06-26 02:30 UTC | Tools covered: 9

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


# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-06-26)

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem in mid-2026 is characterized by rapid innovation, particularly around **agent orchestration**, **MCP (Multi-Capability Provider) integration**, and **cross-platform stability**. Most tools are actively iterating on **session management**, **security & permissions**, and **model flexibility**, reflecting a maturing developer audience demanding reliability and control. The diversity in architectural choices—ranging from native Rust runtimes to Node.js-based TUIs—suggests a competitive landscape where differentiation increasingly hinges on **UX polish**, **platform compatibility**, and **fine-grained operational controls**.

---

## 2. Activity Comparison

| Tool             | Issues Count (Hot) | PRs Merged/Open (Last 24h) | Release Status        | Notes |
|------------------|--------------------|-----------------------------|---------------------|-------|
| **Claude Code**    | 10                 | 1 (closed)                  | **v2.1.193 released** | Strong focus on auto-mode routing and mobile UX. |
| **OpenAI Codex**   | 10                 | ~10                       | **v0.142.2 released**, alphas ongoing | High urgency on rate-limiting and quota transparency. |
| **Gemini CLI**     | 10                 | ~10                       | **v0.51.0-nightly & v0.50.0-preview.1 released** | Emphasis on sub-agent behavior and AST-aware tooling. |
| **GitHub Copilot CLI** | 10             | 1                           | **v1.0.66-0 released** | Focused on MCP CLI controls and model catalog visibility. |
| **Kimi Code CLI**  | 2                  | 0                           | **No releases**         | Minimal activity; focus on Windows stability. |
| **OpenCode**       | 8                  | ~8                          | **v1.17.11 released** | Session snapshots and MCP resilience in focus. |
| **Qwen Code**      | 10                 | ~10                         | **No releases**         | Active on PR-level; working on memory leak fixes and multi-model support. |
| **DeepSeek TUI**   | 10                 | ~10                         | **v0.8.65 released**    | Rebranding under CodeWhale; hotbar and telemetry under development. |

> ⚠️ *Issue and PR counts based on provided digests; may not represent total open issues/PRs.*

---

## 3. Shared Feature Directions

Several requirements appear consistently across tool ecosystems:

| Requirement                                | Tools Mentioning                         | Notes |
|--------------------------------------------|------------------------------------------|-------|
| **Session Management & History**           | Claude, OpenCode, DeepSeek               | Snapshots, reverts, and trajectory visibility requested. |
| **MCP Integration & Stability**            | Claude, OpenAI, Gemini, Copilot, OpenCode, Qwen, DeepSeek | Tool discovery, OAuth refresh, and timeout optimizations. |
| **Security & Permissions**                 | Claude, Gemini, Qwen, DeepSeek          | Vault modes, approval workflows, and policy controls. |
| **Cross-Platform Compatibility**           | OpenAI, Gemini, Kimi, Qwen, DeepSeek    | Windows, macOS, and Linux-specific bugs dominate. |
| **Model Flexibility & Credit Transparency**  | Claude, OpenAI, OpenCode, DeepSeek       | Model switching UI, token awareness, and budget controls. |
| **UI/UX Robustness**                       | Gemini, Copilot, OpenCode, DeepSeek       | TUI rendering, hotbar safety, and navigation ergonomics. |

These overlaps suggest a convergence on core developer needs: **reliable multi-model workflows**, **transparent resource consumption**, and **robust terminal-based interaction**.

---

## 4. Differentiation Analysis

| Tool             | Primary Focus                              | Unique Features / Technical Approach                          |
|------------------|--------------------------------------------|-------------------------------------------------------------|
| **Claude Code**    | Auto-mode intelligence, mobile UX           | `autoMode.classifyAllShell`, mobile multi-account support.    |
| **OpenAI Codex**   | Rate-limit resilience, OAuth/MCP stability     | Background token burn complaints, SQLite log bloat fixes.     |
| **Gemini CLI**     | Sub-agent introspection, AST-aware tooling    | Tool registry, subagent recovery bugs, trust prompts.        |
| **GitHub Copilot CLI** | Model discovery, IDE integration        | MCP CLI toggle, OpenTelemetry exports, rider/auth issues.     |
| **Kimi Code CLI**  | Stability (Windows)                        | Limited activity; focused on crash fixes.                     |
| **OpenCode**       | Session snapshots, Bun runtime              | Snapshot/revert controls, Windows segfault (Bun).             |
| **Qwen Code**      | Multi-model/provider flexibility              | PowerShell memory leak, Chrome extension via daemon.          |
| **DeepSeek TUI**   | Native UX, rebranding, hotbar              | Mouse leak fixes, fleet loadout selection, Rust-native goals.  |

While most tools target general-purpose coding workflows, **differentiators emerge in architecture (e.g., Bun vs. Node.js), platform support priorities (Windows-first vs. macOS-first), and UX paradigms (hotbar vs. agent introspection)**.

---

## 5. Community Momentum & Maturity

- **High Activity / Rapid Iteration**: **OpenAI Codex**, **Gemini CLI**, **DeepSeek TUI**, and **Qwen Code** show intense issue discussion and frequent PR activity, indicating **evolving user bases** and active maintenance.
- **Mature Release Cadence**: **Claude Code**, **OpenAI Codex**, **Gemini CLI**, **Copilot CLI**, and **DeepSeek TUI** maintain **regular releases**, suggesting **stable development cycles**.
- **Lower Activity / Emerging**: **Kimi Code CLI** and **OpenCode** show fewer visible contributions, though OpenCode’s PR volume suggests internal momentum. Kimi appears to be stabilizing after initial launches.

Community sentiment skews toward **trust, transparency, and control**, especially in **agent behavior** and **cost management**.

---

## 6. Trend Signals

- **Shift Toward Multi-Agent, MCP-Based Architectures**: All tools except Kimi are expanding MCP capabilities, signaling a trend toward **modular, composable agent workflows**.
- **Demand for Operational Transparency**: Issues around **quota burn**, **session state loss**, and **tool invocation logs** dominate discussions—users want **observability into AI resource usage**.
- **Platform-Specific Pain Points Persist**: Despite cross-platform goals, **Windows and macOS bugs** remain common, suggesting **ongoing portability challenges**.
- **Push for Native Performance**: **DeepSeek TUI** and **Qwen Code** explore **Rust-native clients** and daemon-direct interactions to reduce memory/CPU overhead.
- **UX Convergence on TUI Standards**: Features like **hotbars**, **approval previews**, and **session timelines** hint at a **new TUI UX standard** emerging for AI CLIs.

> ✅ **Takeaway for Developers**: Prioritize **session resilience**, **MCP extensibility**, and **granular usage telemetry** in tooling evaluations. Native performance and cross-platform rigor are increasingly deciding factors.


---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills – Community Highlights (as of 2026‑06‑26)**  

---

## 1. Top Skills Ranking  
| Rank | PR # | Skill (short name) | Core Functionality | Discussion Highlights | Status |
|------|------|--------------------|--------------------|-----------------------|--------|
| **1** | **#1298** | *skill‑creator* – run‑eval fix | Repairs the evaluation loop that powers the description‑optimisation process (recall = 0 % bug, Windows stream handling, parallel‑worker bugs). | ‑ Over 10 + independent reproductions of the “0 % recall” bug; strong calls for a working evaluation pipeline because many teams rely on the optimiser for production‑grade skill tuning. ‑ Suggestions to ship the eval artifact as a first‑class skill and to add CI validation. | **Open** (active; last update 2026‑06‑23) |
| **2** | **#556 (Issue)** – run_eval trigger failure | (Not a PR but the underlying problem that drives a cluster of PRs) | `run_eval.py` never sees a skill trigger, causing 0 % recall for every query. | ‑ 12‑comment thread, 7 👍; consensus that the bug blocks the entire optimisation workflow, prompting multiple fix PRs (#1298, #1099, #1050, #1323). | **Open** (bug still open) |
| **3** | **#1050** | *skill‑creator* – Windows subprocess & encoding fixes | Adjusts `skill‑creator` scripts for Windows: uses `claude.cmd`, forces UTF‑8 encoding, corrects pipe handling. | ‑ Community reports immediate CI breakage on Windows; reviewers stress cross‑platform parity. ‑ Proposes adding a Windows‑specific test matrix. | **Open** (last update 2026‑05‑24) |
| **4** | **#362** | *skill‑creator* – UTF‑8 safe length validation | Replaces character‑based length checks with byte‑aware logic to stop Rust panics on multi‑byte characters. | ‑ Technical deep dive on Rust‑side validation; cited as “must‑have” for non‑ASCII skill descriptions. | **Open** (last update 2026‑06‑10) |
| **5** | **#539** | *skill‑creator* – YAML‑special‑char warning | Pre‑parse validation that flags unquoted `description`/`compatibility` fields containing YAML meta‑characters (`: # { } [ ]`). | ‑ Developers note frequent silent parsing failures; PR received quick positive feedback. | **Open** (last update 2026‑04‑16) |
| **6** | **#486** | *odt* – OpenDocument creation & conversion | Enables Claude to generate, fill, and convert ODT/ODS files (LibreOffice‑compatible) and render them to HTML. | ‑ Broad interest from enterprises that forbid DOCX; discussion on MIME‑type handling and template‑driven generation. | **Open** (last update 2026‑04‑14) |
| **7** | **#723** | *testing‑patterns* – Full‑stack testing guide | Supplies a meta‑skill that teaches Claude testing philosophies, unit‑test AAA pattern, React Testing Library, CI integration, and test‑data generation. | ‑ High‑value for teams automating test‑code generation; suggestions to expose stub templates for Jest/PyTest. | **Open** (last update 2026‑04‑21) |
| **8** | **#360** | *appdeploy* – Deploy full‑stack webapps | Wraps the AppDeploy service, allowing Claude to spin up, version, and monitor public URLs for web applications. | ‑ Companies ask for “one‑click production deploy” from chat; request for additional cloud‑provider hooks (AWS, Azure). | **Open** (last update 2026‑05‑04) |

*Note:* All top‑ranked items are **open** PRs or issues; none have been merged yet, reflecting a community that is actively iterating on core tooling (skill‑creator) before proliferating new domain‑specific skills.

---

## 2. Community Demand Trends (from Issues)

| Trend | Representative Issues | What the community wants |
|-------|-----------------------|--------------------------|
| **Reliability & Cross‑Platform tooling** | #556 (run_eval never triggers), #1061 (Windows compatibility), #1050, #1298, #1323 | A robust, OS‑agnostic `skill‑creator` pipeline that reliably evaluates and optimises skill descriptions. |
| **Security & Trust boundaries** | #492 (skills published under `anthropic/` namespace) | Mechanisms to guarantee provenance and prevent malicious impersonation of official Anthropic skills. |
| **Enterprise collaboration** | #228 (org‑wide skill sharing) | Built‑in library or sharing workflow inside Claude.ai so teams can publish, version, and consume internal skills without manual file exchange. |
| **Documentation & Onboarding** | #95 (system docs), #509 (CONTRIBUTING), #189 (duplicate skill bundles) | Better centralized docs, contribution guides, and deduplication of skill bundles to reduce friction for newcomers. |
| **Domain‑specific automation** | #181 (SAP‑RPT‑1‑OSS predictor), #154 (shodh‑memory), #147 (codebase‑inventory‑audit) | New skills that embed enterprise data platforms, persistent memory, and code‑base health checks—i.e., workflow automation for analytics, governance, and code maintenance. |

**Overall trend:** The community is first solidifying the *foundational* skill‑creation and evaluation infrastructure, then pushing toward *secure, shareable, enterprise‑grade* automation skills.

---

## 3. High‑Potential Pending Skills (active PRs with notable comment activity)

| PR # | Skill | Why it matters | Current activity |
|------|-------|----------------|------------------|
| **#486** | *odt* | Opens Claude to the open‑source office ecosystem (LibreOffice, ODF compliance). | 8 + comments, last touched 2026‑04‑14. |
| **#723** | *testing‑patterns* | Directly supports AI‑assisted test generation, a high‑demand use case for dev teams. | 7 + comments, last touched 2026‑04‑21. |
| **#360** | *appdeploy* | Enables end‑to‑end web‑app delivery from chat, a “full‑stack” automation hook. | 6 + comments, last touched 2026‑05‑04. |
| **#147** | *codebase‑inventory‑audit* | Provides a systematic health‑check for large repos, aligns with “code‑base audit” demand. | 5 + comments, last touched 2026‑02‑04. |
| **#154** | *shodh‑memory* | Persistent context for agents, a building block for long‑running autonomous workflows. | 5 + comments, last touched 2026‑03‑03. |

These PRs have already gathered community feedback, examples, and use‑case discussions, suggesting they are likely to be merged within the next sprint.

---

## 4. Skills Ecosystem Insight  

**The community’s most concentrated demand is a stable, cross‑platform skill‑creation and evaluation pipeline that guarantees trustworthy, easily shareable skills before scaling to domain‑specific automation.**  

---  

*All links point to the official Anthropic Skills GitHub repository (e.g., `https://github.com/anthropics/skills/pull/1298`).*

---

**Today's Highlights**  
The Claude Code team released v2.1.193 (latest version) with critical updates including expanded shell command routing via `autoMode.classifyAllShell` and detailed auto-mode denial visibility. Major community demand persists for mobile multi-account support (Issue #36151) and vault security improvements, while model performance regressions in Opus 4.8 spark urgent concern.  

**Releases**  
- **v2.1.193**: Added `autoMode.classifyAllShell` to route all Bash/PowerShell commands through the auto-mode classifier. Enhanced denial transparency via transcript/reason tracking. (Details: [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.193))  

**Hot Issues**  
1. **[#36151] Multi-account switching in Claude Mobile** (110 comments): Users plead for secure mobile multi-account support without shared emails. *Trend*: Top feature request. [Issue Link](https://github.com/anthropics/claude-code/issues/36151)  
2. **[#71481] Silent model upgrade caused $506 in charges** (1 comment): MacOS users report financial harm from unnoticed Opus 4.7 migration. [Issue Link](https://github.com/anthropics/claude-code/issues/71481)  
3. **[#61869] Opus 4.8 model credit issues** (61 comments): Linux users face credit exhaustion with 1M context window. [Issue Link](https://github.com/anthropics/claude-code/issues/61869)  
4. **[#68780] Opus 4.8 reasoning degradation** (12 comments): Urgent report of performance collapse; EU customer considers legal action. [Issue Link](https://github.com/anthropics/claude-code/issues/68780)  
5. **[#9516] User Interrupt Hook proposal** (23 comments): Design hook for interrupting async execution. [Issue Link](https://github.com/anthropics/claude-code/issues/9516)  
6. **[#54179] GUI SSH session auth conflicts** (3 comments): Multiple sessions on same remote host cause hangs. [Issue Link](https://github.com/anthropics/claude-code/issues/54179)  
7. **[#71490] Windows OAuth missing design scopes** (1 comment): DesignSync tool fails due to missing permissions. [Issue Link](https://github.com/anthropics/claude-code/issues/71490)  
8. **[#70219] tmux disables transcript persistence** (2 comments): Local workflow users lose session history. [Issue Link](https://github.com/anthropics/claude-code/issues/70219)  
9. **[#71491] Linux CLI UI bugs** (1 comment): Scrollbar and copy/paste failures in SSH sessions. [Issue Link](https://github.com/anthropics/claude-code/issues/71491)  
10. **[#30832] Git command CD forced approval** (14 comments): Security prompts for whitelisted commands hinder Git workflows. [Issue Link](https://github.com/anthropics/claude-code/issues/30832)  

**Key PR Progress**  
- **[#63686] Longer stale/autoclose timeouts** (closed): Extended inactive issue lifetimes from 14 to 90 days. [PR Link](https://github.com/anthropics/claude-code/pull/63686)  

**Feature Request Trends**  
- **Mobile-first improvements**: Multi-accounting, design sync integration.  
- **Safety and trust**: Vault mode, explicit trust dialogs, API monitoring.  
- **Model flexibility**: Model switching UI, credit transparency.  

**Developer Pain Points**  
- Unintended model upgrades disrupt budgets (Issue #71481).  
- Auto-mode denials lack context, creating workflow friction (v2.1.193 fix aims to address).  
- Version-specific bugs plague Opus 4.8 (session hangs, token errors, reasoning flaws).  
- Cross-session/SSH authentication race conditions hinder remote workflows.  

Links to all issues and the release are included above. Community sentiment emphasizes security, cost control, and mobile UI/UX parity with desktop/Cowork.


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>


# OpenAI Codex Community Digest - 2026-06-26

## Today's Highlights

Codex v0.142.2 introduces significant improvements including MCP tool search by default and macOS proxy support, while the community grapples with widespread rate-limiting and quota issues affecting Pro users. Concurrent development focuses on MCP runtime optimization and Windows sandbox stability.

## Releases

**rust-v0.142.2** (v0.142.2)
- MCP tools now use tool search by default when supported, improving discovery while maintaining backward compatibility
- macOS authentication clients can honor system proxy, PAC, and WPAD settings when `respect_system_proxy` is enabled
- [Release details](https://github.com/openai/codex/releases/tag/rust-v0.142.2)

**Alpha releases**: v0.143.0-alpha.25, alpha.22, alpha.21, alpha.16  
**codex-zsh-v0.1.0**: Initial release of Zsh integration  
[View all releases](https://github.com/openai/codex/releases)

## Hot Issues

1. **[#28879](://github.com/openai/codex/issues/28879)** - Rate-limit costs jumped 10-20x since June 16, draining 5h Pro budgets in 2-3 prompts  
   *Community reaction: 303 👍, 152 comments - users report dramatic quota consumption increases*

2. **[#28224](https://github.com/openai/codex/issues/28224)** - SQLite feedback logs can write ~640TB/year, rapidly consuming SSD endurance  
   *Update: 3 merged PRs reduce logs by 85% (released in 0.142.0)*

3. **[#25749](https://github.com/openai/codex/issues/25749)** - Cannot verify inaccessible legacy phone number with no recovery path  
   *Auth flow blocks users with Google OAuth but legacy phone requirements*

4. **[#5957](https://github.com/openai/codex/issues/5957)** - Auto-compaction causes GPT-5-Codex to lose task context and forget edits  
   *Enterprise users report mid-task memory failures*

5. **[#13733](https://github.com/openai/codex/issues/13733)** - Background process polling wastes tokens with full history round-trips  
   *Token burn proportional to history size × poll count*

6. **[#4867](https://github.com/openai/codex/issues/4867)** - Request to allow PRs with binary files  
   *Users blocked when binary files are accidentally created during 40-minute tasks*

7. **[#28978](https://github.com/openai/codex/issues/28978)** - Desktop app 26.616: new conversations fail with "missing field \inputSchema"  
   *App update broke functionality that CLI works correctly*

8. **[#30002](https://github.com/openai/codex/issues/30002)** - Server-side quota accounting over-reports consumption  
   *5h limit burned in ~41 minutes vs. previous 5-hour usage*

9. **[#29955](https://github.com/openai/codex/issues/29955)** - Quota drained instantly: 100 credits gone after 1 message  
   *Immediate consumption post-reset reported by multiple users*

10. **[#17265](https://github.com/openai/codex/issues/17265)** - OAuth-backed MCP tokens don't auto-refresh despite stored refresh tokens  
    *MCP tool calls fail with auth errors after token expiration*

## Key PR Progress

1. **[#30157](https://github.com/openai/codex/pull/30157)** - Test selected capabilities across availability and resume  
   *Validates World State, executor skills, and resume functionality end-to-end*

2. **[#30148](https://github.com/openai/codex/pull/30148)** - Reuse MCP runtimes when selected availability changes nothing  
   *Optimizes MCP runtime management when environments contribute no new servers*

3. **[#30087](https://github.com/openai/codex/pull/30087)** - Forward MCP resource updates to app-server  
   *Exposes typed `mcpServer/resource/updated` notifications*

4. **[#30156](https://github.com/openai/codex/pull/30156)** - Fall back when remote filesystem walk is unavailable  
   *Maintains compatibility with older exec-servers lacking `fs/walk` RPC*

5. **[#30000](https://github.com/openai/codex/pull/30000)** - Prototype Codex Apps as virtual HTTP MCP servers  
   *Serves authenticated loopback MCP endpoints per connector*

6. **[#28582](https://github.com/openai/codex/pull/28582)** - Route preview traffic to plugin service  
   *Feature-flagged plugin service preview routing*

7. **[#29516](https://github.com/openai/codex/pull/29516)** - Persist Cloudflare affinity cookies for MCP HTTP  
   *Improves session persistence for hosted plugin services*

8. **[#30154](https://github.com/openai/codex/pull/30154)** - Preserve status for evicted V2 agents  
   *Maintains agent status after LRU eviction*

9. **[#29909](https://github.com/openai/codex/pull/29909)** - Allow CCA image generation and web search extensions  
   *Enables standalone extensions for authorized providers*

10. **[#30147](https://github.com/openai/codex/pull/30147)** - Use managed defaults for TUI threads  
    *Consumes server-managed model settings for new thread initialization*

## Feature Request Trends

- **Binary file handling**: Users request PR creation support for binary files ([#4867](https://github.com/openai/codex/issues/4867))
- **Accessibility**: Screen-reader-friendly TUI mode for VoiceOver users ([#20489](https://github.com/openai/codex/issues/20489))
- **MCP OAuth management**: Automatic token refresh and better credential handling
- **Windows sandbox improvements**: GPU access and COM+ registry fixes
- **Configurable image output**: Customizable generated image directories ([#30149](https://github.com/openai/codex/pull/30149))

## Developer Pain Points

- **Rate limiting/quota issues**: Widespread reports of accelerated consumption ([#28879](https://github.com/openai/codex/issues/28879), [#30002](https://github.com/openai/codex/issues/30002))
- **Windows sandbox problems**: COM+ errors, GPU blocking, and memory pressure ([#29782](https://github.com/openai/codex/issues/29782), [#19676](https://github.com/openai/codex/issues/19676))
- **Authentication barriers**: Legacy phone verification blocking access ([#25749](https://github.com/openai/codex/issues/25749))
- **Context management**: Compaction losing task state and file edit history ([#5957](https://github.com/openai/codex/issues/5957))
- **MCP reliability**: Token refresh failures and tool discovery blocking ([#17265](https://github.com/openai/codex/issues/17265), [#28640](https://github.com/openai/codex/issues/28640))


</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑06‑26**

---

### 1. Today’s Highlights  
- The **v0.51.0‑nightly** build (20260626) lands with CI‑stability fixes that prevent malformed npm releases and improve job‑crash reporting.  
- **v0.50.0‑preview.1** adds deterministic redaction, tighter CI checks for workspace binary shadowing, and a new tool‑registry feature.  
- A high‑priority bug (#22323) shows sub‑agent recovery incorrectly reporting “GOAL” success despite hitting the maximum turn limit, prompting urgent attention from maintainers.

---

### 2. Releases  

| Version | Date | Summary of Changes |
|---------|------|--------------------|
| **v0.51.0‑nightly.20260626.gb14416447** | 2026‑06‑26 | *CI fix*: prevents bad NPM releases and propagates job crashes (PR #28147). |
| **v0.50.0‑preview.1** | 2026‑06‑25 | *Release‑verification*: ignores npm ci scripts, stops workspace binary shadowing in release checks (PR #28116, #28132).<br>*Feat*: tool‑registry di‑implementation (PR #28150). |
| **v0.49.0** | 2026‑06‑09 | *Chore*: bumps nightly version to 0.48.0‑nightly.20260609.g3a13b8eeb (PR #27779).<br>*CI*: enables dependabot cooldown for npm packages (PR #27743). |

*No other releases were published in the last 24 h.*

---

### 3. Hot Issues (10 noteworthy)

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#22323** | *Subagent recovery after MAX_TURNS reported as GOAL success* | Sub‑agents incorrectly claim success despite hitting turn limits, leading to silent failures in investigations. | 8 comments, 2 👍 – maintainers flagged as **p1** and need retesting. <https://github.com/google-gemini/gemini-cli/issues/22323> |
| **#24353** | *Robust component‑level evaluations* | Introduces a new EPIC for systematic behavioral evals (76 tests) – core to quality assurance. | 7 comments, 0 👍 – tracked as a major milestone. <https://github.com/google-gemini/gemini-cli/issues/24353> |
| **#21409** | *Generalist agent hangs* | Agent becomes unresponsive when deferring to the generalist, sometimes for hours. | 7 comments, 8 👍 – widely reported as a critical usability bug. <https://github.com/google-gemini/gemini-cli/issues/21409> |
| **#21968** | *Gemini under‑utilises skills & sub‑agents* | Users note that built‑in skills are rarely invoked automatically, requiring manual prompts. | 6 comments, 0 👍 – highlights a design gap. <https://github.com/google-gemini/gemini-cli/issues/21968> |
| **#26525** | *Deterministic redaction & Auto‑Memory logging* | Auto‑Memory streams transcripts before redaction, risking secret leakage. | 5 comments, 0 👍 – security‑focused concern. <https://github.com/google-gemini/gemini-cli/issues/26525> |
| **#26522** | *Auto‑Memory retries low‑signal sessions indefinitely* | Sessions flagged as low‑signal never progress, inflating the inbox. | 5 comments, 0 👍 – impacts efficiency. <https://github.com/google-gemini/gemini-cli/issues/26522> |
| **#25166** | *Shell command execution stuck “Waiting input”* | After a command finishes, the CLI still shows “awaiting input,” freezing the UI. | 4 comments, 3 👍 – high‑frequency user‑reported hang. <https://github.com/google-gemini/gemini-cli/issues/25166> |
| **#28139** | *Patch shell command dependencies for public security advisories* | Direct deps (`shell-quote`, `simple-git`) are covered by CVEs; upgrade needed. | 2 comments, 0 👍 – security advisory. <https://github.com/google-gemini/gemini-cli/issues/28139> |
| **#22598** | *Subagent trajectory visibility via `/chat share`* | Trajectories are recorded but not easily shareable, limiting debugging. | 2 comments, 1 👍 – feature request for better introspection. <https://github.com/google-gemini/gemini-cli/issues/22598> |
| **#22093** | *(Sub)agents running without permission since v0.33.0* | Sub‑agents activated by default despite disabled agent mode, breaking expected sandboxing. | 2 comments, 0 👍 – regression in permission model. <https://github.com/google-gemini/gemini-cli/issues/22093> |

---

### 4. Key PR Progress (10 important PRs)

| # | Title | Description |
|---|-------|-------------|
| **#28158** | *chore/release: bump version to 0.51.0‑nightly.20260626.gb14416447* | Automated nightly version bump for the latest release. <https://github.com/google-gemini/gemini-cli/pull/28158> |
| **#27848** | *feat(cli): add ‘models’ command* | New `gemini models` command lists available Gemini models, context windows, and tiers (text & JSON). <https://github.com/google-gemini/gemini-cli/pull/27848> |
| **#27850** | *fix(core): sniff MCP image MIME types* | Corrects MIME‑type mismatches for WebP/PNG/JPEG/GIF payloads, preventing model‑side misinterpretation. <https://github.com/google-gemini/gemini-cli/pull/27850> |
| **#27845** | *fix(cli): prompt for folder trust before auth* | Early folder‑trust prompt avoids slow startups when workspace trust is unknown. <https://github.com/google-gemini/gemini-cli/pull/27845> |
| **#27224** | *docs: add shared responsibility model section* | Clarifies that Gemini CLI is intended for single‑user environments; best‑practice guidelines added. <https://github.com/google-gemini/gemini-cli/pull/27224> |
| **#28015** | *feat(caretaker): implement Cloud Run webhook ingestion* | Cloud Run service verifies GitHub webhook signatures, stores issues in Firestore, and forwards metadata to Pub/Sub. <https://github.com/google-gemini/gemini-cli/pull/28015> |
| **#28013** | *fix(prompts): use function replacer in applySubstitutions* | Prevents `$`-pattern corruption when substituting skill/sub‑agent descriptions. <https://github.com/google-gemini/gemini-cli/pull/28013> |
| **#28103** | *fix(core): avoid keep‑alive socket reuse during OAuth token exchange* | Resolves “Premature close” errors on OAuth code‑exchange after the June 2026 security patch. <https://github.com/google-gemini/gemini-cli/pull/28103> |
| **#27461** | *fix(core): suppress PTY resize EBADF errors* | Stops crashes when resizing a PTY that is exiting, addressing UI‑resize frequency spikes. <https://github.com/google-gemini/gemini-cli/pull/27461> |
| **#28153** | *fix(core): ignore stale update_topic calls after session reset* | Prevents orphaned `update_topic` calls that could corrupt shared `topicState` after `/clear`. <https://github.com/google-gemini/gemini-cli/pull/28153> |

---

### 5. Feature Request Trends  

- **Sub‑agent introspection** – Multiple issues (#22598, #22093, #21409) request better visibility, sharing, and permission controls for sub‑agents.  
- **AST‑aware tooling** – #22745, #22746, #22267, #22232 emphasize the need for AST‑aware file reads, searches, and resilient browser agents.  
- **Trust & start‑up flow** – #27844, #27845, #27846 highlight the desire for early folder‑trust prompts and smoother startup sequences.  
- **Security & deterministic behavior** – #26525, #26522, #28139 focus on secret redaction, memory‑session handling, and dependency security updates.  
- **Performance & stability** – #21924, #21763, #25166, #21432 surface recurring pain points around terminal resize flicker, sub‑agent context loss, and command‑hanging.

Overall, the community is pushing for **more transparent sub‑agent behavior**, **enhanced code‑understanding tools (AST‑aware)**, **tighter security/redaction**, and **faster, dead‑lock‑free startups**.

---

### 6. Developer Pain Points  

- **Agent hangs & unresponsiveness** – Generalist and browser agents frequently freeze (issues #21409, #21968, #21763, #25166).  
- **Insufficient sub‑agent control** – Sub‑agents are activated without explicit permission, breaking sandbox expectations (issue #22093).  
- **CLI startup latency** – Slow initialization occurs before folder‑trust prompts appear, making the CLI feel stuck (issues #27844, #27846).  
- **Inconsistent version/dependency handling** – Nightly releases and CI scripts sometimes produce malformed npm packages, causing deployment failures (issues #28147, #27743).  
- **Limited observability** – Lack of easy ways to view or share sub‑agent trajectories hampers debugging and evaluation (issue #22598).  

Addressing these recurring frustrations—through clearer permission models, smarter start‑up flows, and richer diagnostics—will improve the overall developer experience.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI – Community Digest (2026‑06‑26)**  
*Source: https://github.com/github/copilot‑cli*  

---

### 1. Today’s Highlights  
- **New release v1.0.66‑0** adds in‑stream CLI controls for MCP servers, an experimental *response‑budget* toggle, OpenTelemetry export via managed settings, and a fix that restores OAuth‑based remote MCP sessions after token refreshes.  
- The community is focused on **model‑catalog visibility** (issues #700, #3596), **MCP‑related tooling** (issues #2956, #3564, #3934), and **cli‑navigation ergonomics** (issues #3692, #3919).  

---

### 2. Releases  
**v1.0.66‑0** (24 h ago)  
- `copilot --enable-mcp <server>` / `--disable-mcp <server>` commands to toggle MCP servers from CLI.  
- Added `/settings response-budget` flag to limit the number of tokens per reply (experimental).  
- Managed settings now support `openTelemetryExport: true`, sending telemetry to the configured backend.  
- OAuth‑backed remote MCP sessions now auto‑recover after mid‑session token expiration.  

---

### 3. Hot Issues  
| # | Title | Why it matters | Community response |
|---|-------|----------------|---------------------|
| **700** | List all supported models | Enables scripts & CI to discover available LLMs + multipliers. | 14 comments, 4 thumbs‑up |
| **3596** | *Not authenticated* when resuming session | Critical for session continuity – blocks `/model` command. | 7 comments, 11 thumbs‑up |
| **2643** | Silent command rewriting in `preToolUse` | Breaks seamless tool‑chain work; interface friction. | 12 comments, 2 thumbs‑up |
| **3680** | Resumed session blocks model picker | Same root cause as #3596 – concurrency issue with authentication. | 1 comment |
| **3636** | Voice mode cannot be enabled | Voice features are front‑page news; limits accessibility. | 3 comments, 5 thumbs‑up |
| **3876** | Mouse tracking disabled on exit | Terminal usability glitch on Windows/macOS. | 2 comments |
| **3692** | Escape cancels current task *and* queued prompt | Alters expected UX flow; confusion in multi‑stage conversations. | 2 comments |
| **3934** | “MCP server blocked by policy” | Security‑policy integration issue affects enterprise use. | 0 comments |
| **3794** | Azure DevOps work items missing from “Up next” | Critical for teams relying on non‑GitHub repos. | 0 comments |
| **312** | (illustrative) Frequent “CLI observed gap” reports | Underscores need for better agent‑state reporting. | 0 comments |

*[Link to each issue]*

---

### 4. Key PR Progress  
Only one PR was opened in the last 24 h:

| # | Title | Description |
|---|-------|-------------|
| **3928** | Add `.gitignore` and settings configuration | Simplifies project setup and bundling for CI environments. |

---

### 5. Feature Request Trends  
1. **Model discovery & catalog listing** – Users want `copilot --list-models` to surface multipliers and availability.  
2. **MCP UI/CLI integration** – Enable/disable MCPs via `/mcp show`, async read‑only commands, and policy visibility.  
3. **Theming & accessibility** – Fine‑grained theming, respecting VS‑Code terminal themes.  
4. **Session state visibility** – Timestamps, unique identifiers, and “Where is my session?” (issues #3931, #3930).  
5. **Voice & audio** – Jump‑start voice mode and downstream model catalogs.  

---

### 6. Developer Pain Points  
- **Authentication instability** when resuming sessions or accessing model lists (issues #3596, #3680).  
- **Inconsistent UI behavior** (Escape key, mouse tracking, prompt‑queuing).  
- **MCP management friction**: missing disable in `/mcp show`, policy blocks, and lack of async support (issues #2956, #3564, #3934, #3829).  
- **Missing thematic consistency** across terminals and night‑mode support (issue #3935).  
- **Insufficient visibility** into session history, timestamps, and usage quotas (issues #3930, #3932).  

These threads dominate the current discussion and are likely to influence the next milestone of Copilot CLI development.  

---

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑06‑26**

---

### 1. Today’s Highlights  
- No new releases were published in the last 24 h.  
- Two active bug reports surfaced: one concerning the MCP tool‑server on Windows, and another about UI stuttering and full‑conversation re‑rendering on Linux.  

---

### 2. Releases  
No new releases were pushed to **MoonshotAI/kimi‑cli** on 2026‑06‑26.

---

### 3. Hot Issues  

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| **2475** | MCP tools crash on Windows 10/11 | A user with 212 MCP tools reports a crash; if unresolved it could affect the majority of Windows developers using the CLI. | 0 comments; issue is open. |
| **2474** | Interface keeps shaking and re‑renders the whole conversation on Linux | UI instability hampers productivity; this can cause data loss or time‑wasting loops for developers relying on the CLI. | 0 comments; issue is open. |

- **Links**  
  - #2475: <https://github.com/MoonshotAI/kimi-cli/issues/2475>  
  - #2474: <https://github.com/MoonshotAI/kimi-cli/issues/2474>  

---

### 4. Key PR Progress  
_No pull requests were merged in the last 24 h. The current PR backlog is empty, so no new features or fixes were introduced today._

---

### 5. Feature Request Trends  
From the sparse issue set:

| Trend | Representative Issue | Insight |
|-------|----------------------|---------|
| **Stability of MCP server** | #2475 | Multiple tools in an MCP cluster can trigger crashes; community feels the need for better error handling and diagnostics. |
| **Responsive UI** | #2474 | The shaking and auto‑re‑rendering indicates a perception that the CLI terminal UI is flaky. A smoother rendering engine is implied. |

No explicit new feature proposals were submitted in the past 24 h.

---

### 6. Developer Pain Points  
1. **Concurrency/Tool Management** – Managing large MCP tool sets (200+ tools) on Windows can lead to unhandled exceptions.  
2. **UI Stability** – Frame‑rate drops or abrupt re‑renders on Linux make the conversational interface unreliable.  
3. **Lack of Diagnostic Information** – Both issues lack stack traces or logs, making troubleshooting difficult.  

These themes indicate a community urgency for more robust multi‑tool handling and a more resilient terminal interface.  

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest - 2026-06-26**  

**1. Today's Highlights**  
OpenCode v1.17.11 introduces session snapshot/revert controls, allowing users to roll back file changes and conversation history within sessions. A critical regression in Bun 1.3.14 caused segmentation faults on Windows, now confirmed to be fixed in v1.17.9. Meanwhile, developers continue pushing urgent fixes for startup performance, MCP timeouts, and terminal rendering stability.  

**2. Releases**  
- **v1.17.11**: Adds session snapshot history and revert controls via `sessions.revert(<timestamp>)`, enabling precise state reversion including file diffs.  
- **Bugfixes**: Fixed browser OAuth flow reliability when opening sign-in URLs manually.  

**3. Hot Issues**  
- **[#33742](https://github.com/anomalyco/opencode/issues/33742)**: Bun 1.3.14 segfault on Windows post-upgrade; downgrading to v1.17.9 resolves stability issues. *42↑votes, 0 days ago*  
- **[#20695](https://github.com/anomalyco/opencode/issues/20695)**: Community-collaborated memory profiling thread requiring heap snapshots to diagnose leaks. *103↑votes, 103 comments*  
- **[#33938](https://github.com/anomalyco/opencode/issues/33938)**: Upgrade to v1.17.11 breaks session load on non-Git projects; `ConfigInvalidError` errors occur in sidebar. *3↑votes, 0 days ago*  
- **[#33952](https://github.com/anomalyco/opencode/issues/33952)**: Git changes module introduces 3+ minute API call delays; blocks all model requests. *2↑votes, closed*  
- **[#16610](https://github.com/anomalyco/opencode/issues/16610)**: Opencode crashes when accessing `.git` repos with `inotify.max_user_instances < 16`. *14 comments*  
- **[#33822](https://github.com/anomalyco/opencode/pull/33822)**: Bun canary integration to replace Node.js runtime for macOS/Linux. *Beta path for refined reliability*  
- **[#15676](https://github.com/anomalyco/opencode/issues/15676)**: Unexpected desktop app crash; reproducer via session screenshot. *1↑vote, 0 days ago*  
- **[#32821](https://github.com/anomalyco/opencode/issues/32821)**: GLM-5.2 rejects `messages.content` as array in OpenCode Go; expects string primitive. *8 votes*  
- **[#9218](https://github.com/anomalyco/opencode/issues/9218)**: Task outputs auto-interrupt mid-stream across models; unresolved since 2026-06-25. *5 votes*  

**4. Key PR Progress**  
- **[#33993](https://github.com/anomalyco/opencode/pull/33993)**: Retired legacy V2 session event emission; core runtime now exclusively drives session event models.  
- **[#32525](https://github.com/anomalyco/opencode/pull/32525)**: Restored legacy session header controls in settings; addresses session navigation state loss.  
- **[#30352](https://github.com/anomalyco/opencode/pull/30352)**: Fixed v2 layout agent picker visibility parity for build/plan planners.  
- **[#33988](https://github.com/anomalyco/opencode/pull/33988)**: New MCP service abstraction for connection resilience and per-server timeouts.  
- **[#33966](https://github.com/anomalyco/opencode/issues/33966)**: Proposed OAuth callback host config to resolve AirGap deployment conflicts.  
- **[#33880](https://github.com/anomalyco/opencode/pull/33880)**: dndkit-powered tab drag system for V2 UI layout.  
- **[#33820](https://github.com/anomalyco/opencode/pull/33820)**: Replace session ?component with centralized modal preference system.  
- **[#33977](https://github.com/anomalyco/opencode/pull/33977)**: Multi-tier MCP timeout strategy (startup/request) improves connection stability.  

**5. Feature Request Trends**  
- **Session Management**: Repeated calls for session instability/diff visualizations, reverts, and snapshot analytics ([#27248], [#30457]).  
- **Performance**: Multiple demands for startup speed optimization ([#22227], [#33903]) and memory profiling tools ([#20695]).  
- **MCP Integrations**: Rising requests for embedded MCP connectors ([#33988], [#33341]) and automated model detection ([#23327]).  
- **UI Improvements**: Demand for enhanced session header indicator states ([#32525]) and terminal rendering fixes ([#28656]).  

**6. Developer Pain Points**  
- **Backward Compatibility**: Windows users face terminal rendering regressions ([#27006], [#33938]) and Bun segfaults.  
- **State Loss**: Session navigation data resets occur after layout changes ([#30360]) and `inotify` limits ([#16610]).  
- **API Limits**: RPA teams encounter rate limiting without clear thresholds ([#15585]), demanding usage analytics.  
- **Plugin Interoperability**: Inconsistent behavior across Chrome DevTools and third-party integrations ([#33632], [#30360]).  

**Next Steps**: Prioritize v1.18 roadmap around multi-GPU sessions and native MCP Docker support to address API-related operational complexity. Monitor [#33742](https://github.com/anomalyco/opencode/issues/33742) for urgency on Windows runtime stability.


</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



**1.Today's Highlights**  
The PI community focused on improving reliability for OpenAI/Codex integrations, resolving TUI interface issues, and refining session management capabilities. Key discussions centered around RPC tooling enhancements and extending Pi's session persistence features.  

**2. Releases**  
No new versions were released in the last 24 hours.  

**3. Hot Issues**  
- **[#4945](https://github.com/earendil-works/pi/issues/4945)**: OpenAI Codex connection reliability issues (71 comments). Users report stuck TUI states during streaming.  
- **[#5825](https://github.com/earendil-works/pi/issues/5825)**: Markdown streaming forces unwanted auto-scroll (31 comments).  
- **[#6087](https://github.com/earendil-works/pi/pr/6087)**: Fixed hardcoded RPC timeout in coding-agent (preventing long sessions from hanging).  
- **[#6078](https://github.com/earendil-works/pi/pr/6078)**: Open PR to add `get_entries`/`get_tree` RPC commands for session analysis.  
- **[#5886](https://github.com/earendil-works/pi/issues/5886)**: Bugs in agent session settlement/continuation lifecycle logic.  
- **[#6066](https://github.com/earendil-works/pi/issues/6066)**: Input history loss after extension-triggered editor changes.  
- **[#5619](https://github.com/earendil-works/pi/issues/5619)**: Overlapping global/local `.pi` config storage causing conflicts.  
- **[#6002](https://github.com/earendil-works/pi/issues/6002)**: Silent truncation of non-session files when opening sessions.  
- **[#6058](https://github.com/earendil-works/pi/issues/6058)**: TUI crash on lines exceeding terminal width.  
- **[#6089](https://github.com/earendil-works/pi/issues/6089)**: Request for provider-specific payload transforms in extensions.  

**4. Key PR Progress**  
- **[#6087](https://github.com/earendil-works/pi/pr/6087)**: Removed hardcoded RPC wait timeout in coding-agent.  
- **[#6084](https://github.com/earendil-works/pi/pr/6084)**: Fixed custom widget order preservation in TUI.  
- **[#6081](https://github.com/earendil-works/pi/pr/6081)**: Added `#RRGGBBAA` alpha support for theme colors.  
- **[#6078](https://github.com/earendil-works/pi/pr/6078)**: Implemented `get_entries`/`get_tree` RPCs (session-level data access).  
- **[#6074](https://github.com/earendil-works/pi/pr/6074)**: Prevented premature prompt compaction in coding-agent.  
- **[#6067](https://github.com/earendil-works/pi/pr/6067)**: Added scope-discipline rule to system prompt.  
- **[#6064](https://github.com/earendil-works/pi/pr/6064)**: Experimental Pi orchestrator daemon for lifecycle management.  
- **[#6063](https://github.com/earendil-works/pi/pr/6063)**: Improved extension stats tracking.  
- **[#5832](https://github.com/earendil-works/pi/pr/5832)**: Surface HTTP error bodies from providers (instead of opaque SDK errors).  

**5. Feature Request Trends**  
- Enhanced session management (e.g., durable HITL tool interrupts, named sessions).  
- Improved tool call reliability and logging for long-running sessions.  
- UI/UX fixes for TUI rendering and tab completion.  
- Extensibility for custom payload formats and provider integrations.  
- Feature to persist reasoning token counts in usage reports.  

**6. Developer Pain Points**  
- Session/file corruption issues (e.g., silent truncation, input history loss).  
- RPC timeouts and unstable agent lifecycle management.  
- Inconsistent error reporting from external providers.  
- Extension compatibility problems after PI updates.  
- Terminal-specific rendering bugs (e.g., overflowing lines in TUI).  

All links point to the [PI Mono GitHub repository](https://github.com/earendil-works/pi).


</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>


# Qwen Code Community Digest - 2026-06-26

## Today's Highlights

No new releases were published in the last 24 hours. The community remains focused on critical bug fixes and feature development, with particular attention on a severe **PowerShell memory leak** ([#5873](https://github.com/QwenLM/qwen-code/issues/5873)) causing OOM conditions on Windows, and ongoing work to **revive the Chrome extension** via daemon-direct architecture ([#5777](https://github.com/QwenLM/qwen-code/pull/5777)).

## Releases

None

## Hot Issues

1. **[#5873] 难绷逆天BUG：用一次工具开一个powershell 并且不再关闭 直到OOM** - **P1 CRITICAL**: Windows PowerShell processes spawn but never close, leading to out-of-memory crashes. High community urgency with 5 comments. [Link](https://github.com/QwenLM/qwen-code/issues/5873)

2. **[#2040] Supports project-level Insight** - Closed enhancement request for per-project insight functionality (vs. machine-level). 28 comments indicate strong community interest. [Link](https://github.com/QwenLM/qwen-code/issues/2040)

3. **[#239] API Error: Streaming setup timeout after 64s** - Persistent timeout issues affecting multiple users (16 comments, 8 upvotes). Workaround involves config adjustments. [Link](https://github.com/QwenLM/qwen-code/issues/239)

4. **[#535] Tool calls with edits/write fail when using Qwen3 30b** - Tool parameter type mismatches causing edit/write failures. 12 comments with workaround PR merged. [Link](https://github.com/QwenLM/qwen-code/issues/535)

5. **[#4493] rider无法登录qwen code** - Authentication flow broken in JetBrains IDEs, specifically Rider. 11 comments reporting login redirect loops. [Link](https://github.com/QwenLM/qwen-code/issues/4493)

6. **[#1897] LLM 错误地在中文路径中添加空格导致工具调用失败** - Critical path handling bug where Chinese characters get spurious spaces, breaking file operations. 6 comments. [Link](https://github.com/QwenLM/qwen-code/issues/1897)

7. **[#1924] Useless compression and buggy contextWindowSize** - Context compression failing on local models. 6 comments discussing effectiveness. [Link](https://github.com/QwenLM/qwen-code/issues/1924)

8. **[#3511] JetbriansAI集成** - JetBrains IDE integration questions, specifically around OAuth requirements vs. API key support. 5 comments. [Link](https://github.com/QwenLM/qwen-code/issues/3511)

9. **[#5656] Move tool-use summaries from conversation history to the loading indicator** - UI/UX enhancement request with 5 comments. [Link](https://github.com/QwenLM/qwen-code/issues/5656)

10. **[#2724] Qwen Code agent in IntelliJ IDEA 2026.1 not working with local ollama** - Local model integration broken in latest IntelliJ. 4 comments, 3 upvotes. [Link](https://github.com/QwenLM/qwen-code/issues/2724)

## Key PR Progress

1. **[#5777] feat(browser-ext): revive Chrome extension via daemon-direct architecture** - Major architectural shift moving Chrome extension to thin client of local `qwen serve` daemon. [Link](https://github.com/QwenLM/qwen-code/pull/5777)

2. **[#5869] feat(web-shell): stream-highlight code blocks and fix fence-language aliases** - Real-time syntax highlighting during streaming with visual stability improvements. [Link](https://github.com/QwenLM/qwen-code/pull/5869)

3. **[#5879] feat(web-shell): browse MCP server resources in the /mcp dialog** - Web shell MCP browser parity with terminal UI, showing resource counts and expandable listings. [Link](https://github.com/QwenLM/qwen-code/pull/5879)

4. **[#5829] fix(desktop): reject unsafe source slugs before deletion** - Security hardening preventing path traversal attacks during source deletion. [Link](https://github.com/QwenLM/qwen-code/pull/5829)

5. **[#5878] fix(release): skip dist/node_modules when building standalone archives** - Build system fix preventing packaging failures with unexpected assets. [Link](https://github.com/QwenLM/qwen-code/pull/5878)

6. **[#5847] feat(serve): add runtime context injection for per-turn system-reminders** - New runtime context store for session-scoped dynamic context injection. [Link](https://github.com/QwenLM/qwen-code/pull/5847)

7. **[#5856] feat(desktop): voice dictation in the desktop app** - Voice input support matching CLI/Web Shell capabilities with waveform recording UI. [Link](https://github.com/QwenLM/qwen-code/pull/5856)

8. **[#5849] feat(cli): support @extension mention in input autocomplete** - Codex-style extension mentions with autocomplete dropdown showing descriptions. [Link](https://github.com/QwenLM/qwen-code/pull/5849)

9. **[#5828] feat(core): add bundled extension creator skill** - New skill guiding agents through extension scaffolding, customization, and testing. [Link](https://github.com/QwenLM/qwen-code/pull/5828)

10. **[#5809] refactor(cli): Split serve server routes** - Modularization of daemon routes into focused internal modules for better maintainability. [Link](https://github.com/QwenLM/qwen-code/pull/5809)

## Feature Request Trends

Based on community feedback, the most-requested features include:

- **Multi-Agent Collaboration**: Team-based agent execution with coordination ([#1815](https://github.com/QwenLM/qwen-code/issues/1815))
- **Undo Functionality**: Essential recovery mechanism for CLI agent tools ([#2342](https://github.com/QwenLM/qwen-code/issues/2342))
- **Global AGENTS.md Support**: Cross-tool instruction deduplication ([#4534](https://github.com/QwenLM/qwen-code/issues/4534))
- **API Resilience**: Exponential backoff and model fallback retry mechanisms ([#3004](https://github.com/QwenLM/qwen-code/issues/3004))
- **GitHub PR Review Bot**: Automated code review integration ([#742](https://github.com/QwenLM/qwen-code/issues/742))

## Developer Pain Points

**Authentication & IDE Integration**
- Rider and IntelliJ 2026.1 login flows broken with local Ollama models ([#2724](https://github.com/QwenLM/qwen-code/issues/2724), [#4493](https://github.com/QwenLM/qwen-code/issues/4493))
- OAuth requirements blocking API key-only configurations ([#3511](https://github.com/QwenLM/qwen-code/issues/3511))

**Tool Execution & Stability**
- PowerShell memory leaks on Windows ([#5873](https://github.com/QwenLM/qwen-code/issues/5873))
- Tool parameter type mismatches with Qwen3 models ([#535](https://github.com/QwenLM/qwen-code/issues/535))
- Chinese path handling with spurious spaces ([#1897](https://github.com/QwenLM/qwen-code/issues/1897))

**Configuration & Performance**
- Streaming timeouts requiring manual config adjustments ([#239](https://github.com/QwenLM/qwen-code/issues/239))
- Daemon cold start latency optimization needs ([#4748](https://github.com/QwenLM/qwen-code/issues/4748))


</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑06‑26**  

---

### 1. Today’s Highlights
- The project shipped **v0.8.65** under the new **CodeWhale** brand, announcing the deprecation of the legacy `deepseek-tui` npm package and pointing users to the migration guide (`docs/REBRAND.md`).  
- A flurry of activity focused on stabilising the approval workflow, tightening hot‑bar safety, and improving telemetry visibility—several PRs landed to surface mode policy, show proposed file changes, and warn on unknown exec‑tool surfaces.  
- Community discussion remains centred on multi‑model/provider flexibility, native‑runtime aspirations, and persistent UI/UX pain points such as Windows environment‑variable inheritance and macOS mouse‑report leaks.

---

### 2. Releases
- **v0.8.65** – *CodeWhale* release (see [release notes](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.65)).  
  - Introduces the canonical project name **CodeWhale**; the old npm package `deepseek-tui` is deprecated and will receive no further updates.  
  - Users on the v0.8.x line should follow the migration instructions in `docs/REBRAND.md` to switch to the new `codewhale` command/npm package.  

*No other version tags appeared in the last 24 h.*

---

### 3. Hot Issues (10)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#3063](https://github.com/Hmbown/CodeWhale/issues/3063) | TUI mouse‑report leak, runtime safety, release‑tracker (v0.8.59) | Blocks a stable release; macOS‑specific input leak affects reliability. | 11 comments – maintainers prioritising fix before v0.8.59 cut. |
| [#3205](https://github.com/Hmbown/CodeWhale/issues/3205) | Fleet model classes, loadout auto, semantic route roles (v0.8.65) | Core to the upcoming “Fleet loadout auto” feature; enables transparent compute‑loadout selection for agents. | 10 comments – active design discussion on API shape. |
| [#2300](https://github.com/Hmbown/CodeWhale/issues/2300) | Multi‑model compatibility, provider docs, automatic Fleet loadout selection (v0.8.65) | Addresses user confusion between `provider = vllm` vs `provider = openai` and seeks clearer docs. | 7 comments – demand for better provider‑specific guidance. |
| [#3568](https://github.com/Hmbown/CodeWhale/issues/3568) | Plan and agent mode mixed up (plan ↔ agent) | Recurring UX bug where the agent ignores mode switches, causing unintended file edits. | 5 comments, 👍1 – users reporting regression after recent updates. |
| [#3466](https://github.com/Hmbown/CodeWhale/issues/3466) | Approval modal cancellation & review‑required semantics (v0.8.66) | After 0.8.64, every destructive action forces a confirmation, disrupting workflow. | 5 comments – users asking for restore of original “no‑confirm” behaviour. |
| [#1679](https://github.com/Hmbown/CodeWhale/issues/1679) | SSE multi‑agent timeout & UI scramble on Windows 11 | 45‑second SSE timeout plus UI corruption breaks parallel agent runs on Windows. | 4 comments – cross‑platform reliability concern. |
| [#2666](https://github.com/Hmbown/CodeWhale/issues/2666) | Telemetry: visible token/context usage during long tasks | Agents lack insight into token budget, context pressure, elapsed time – hinders debugging. | 3 comments – strong interest in exposing resource metrics. |
| [#2061](https://github.com/Hmbown/CodeWhale/issues/2061) | Hotbar: MMO‑style quick‑action bar (umbrella) | Requests a persistent 8‑slot command surface for one‑keystroke access to frequent actions. | 3 comments – ongoing design work tracked via #3389. |
| [#3541](https://github.com/Hmbown/CodeWhale/issues/3541) | Feature Request: Rust‑based native desktop client | Seeks lower latency, reduced memory footprint, and better non‑coding UX via a native client. | 3 comments – reflects desire for performance‑focused alternative. |
| [#3546](https://github.com/Hmbown/CodeWhale/issues/3546) | Extend ACP support to expose provider/model selection | ACP integration currently hides provider/model choice, limiting orchestration tools like Paseo. | 3 comments – blockers for deeper ACP‑based workflows. |

---

### 4. Key PR Progress (10)

| # | PR | Summary |
|---|----|---------|
| [#3622](https://github.com/Hmbown/CodeWhale/pull/3622) | **fix(tui): harden approval change previews** – bounds the `apply_patch` changes‑array preview, adds omitted‑line counts, localises sublabels for zh‑Hans, and adds regression coverage. |
| [#3626](https://github.com/Hmbown/CodeWhale/pull/3626) | **test(tui): cover stale single‑agent status reconciliation** – adds regression for the agent‑status path when a stale sub‑agent is inspected, ensuring it appears terminal/cancelled. |
| [#3624](https://github.com/Hmbown/CodeWhale/pull/3624) | **Codex/lsp php custom servers** – adds PHP (intelephense) to the built‑in LSP registry and introduces a `[lsp.custom]` section for arbitrary language‑server registration by file extension. |
| [#3625](https://github.com/Hmbown/CodeWhale/pull/3625) | **fix(tui): warn on unknown exec tool surface** – warns when `CODEWHALE_TOOL_SURFACE` is set to an unrecognised value, preserving known no‑op values (`full`, `native-tools`, empty). |
| [#3623](https://github.com/Hmbown/CodeWhale/pull/3623) | **fix(tui): surface mode policy in turn metadata** – injects active mode and canonical mode‑policy delta into each user turn’s `<turn_meta>` block, addressing the plan/agent mix‑up (#3568). |
| [#3627](https://github.com/Hmbown/CodeWhale/pull/3627) | **feat(exec): report visible final answer size** – adds `visible_final_answer_chars` to `codewhale exec --output-format stream-json` metadata, complementing token‑level metrics. |
| [#3617](https://github.com/Hmbown/CodeWhale/pull/3617) | **test(tui): add token cache report fixtures** – closes #3390 by adding cache‑history and cache‑stats fixtures derived from reported low‑hit and aggregate‑hit scenarios. |
| [#3621](https://github.com/Hmbown/CodeWhale/pull/3621) | **Fix provider links docs fallback** – updates the `/links` fallback URL to the current CodeWhale docs page, adds Qianfan‑specific link, and adds regression coverage. |
| [#3620](https://github.com/Hmbown/CodeWhale/pull/3620) | **fix(tui): reconcile stale subagents before status** – runs stale sub‑agent cleanup before parent state capture and before model‑facing `agent` status/peek, preventing stale workers from appearing as running. |
| [#3619](https://github.com/Hmbown/CodeWhale/pull/3619) | **fix(tui): show proposed file changes in approvals** – closes #1846 by displaying bounded previews of `write_file`, `edit_file`, and `apply_patch` inside expanded approval cards, with fallback to truncated params for compact cards. |

---

### 5. Feature Request Trends
- **Multi‑model/provider transparency** – clearer documentation and UI for distinguishing providers (vLLM, OpenAI, Qianfan, etc.) and exposing model/context‑size configuration ([#2300], [#3545]).  
- **Automatic Fleet loadout selection** – a “loadout auto” mode that resolves the full compute slot (model, thinking level, tool surface) without manual strings ([#3205], [#2300]).  
- **Native/Rust‑based runtime** – repeated calls for a lower‑latency desktop client to replace the Node/TUI stack ([#3541]).  
- **Hotbar enhancements** – persistent quick‑action bar, configurable bindings, safety gates, and recommendation engine ([#2061], [#3389]–[#3400]).  
- **ACP integration improvements** – exposing provider/model selection through the ACP stdio adapter for orchestration tools ([#3546]).  
- **Telemetry & diagnostics** – surfacing token/context usage, resource pressure, and session‑failure classification to give agents and operators visibility ([#2666], [#3616], [#3610]).  

---

### 6. Developer Pain Points
- **Approval workflow friction** – recent versions force a confirmation for every destructive action, breaking the “YOLO”/auto‑approve expectation ([#3466], [#3606], [#3613], [#3618]).  
- **Platform‑specific stability issues** – macOS mouse‑report leaks ([#3063]), Windows 11 SSE timeout/UI scramble ([#1679]), and Windows environment‑variable inheritance gaps ([#3572]).  
- **Opacity of agent/resource usage** – agents run long tasks without insight into token budget, context window pressure, elapsed time, or child‑agent status ([#2666]).  
- **Hotbar safety & discoverability** – users want a useful hot‑bar out‑of‑the‑box but need safe defaults, comment‑preserving persistence, and clear separation of approved vs. deferred sources ([#3390]–[#3400]).  
- **Documentation gaps** – provider‑specific details, migration steps from the legacy npm package, and clear explanation of config schema (hotbar, ACP, provider context size) are frequently requested ([#2300], [#3545], [#3582]).  
- **Mode confusion** – plan/agent/YOLO state sometimes gets mixed, leading to unintended behavior ([#3568], addressed in part by #3623).  

---  

*All links point to the `Hmbown/CodeWhale` repository (the current home of the DeepSeek‑TUI/CodeWhale project).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*