# AI CLI Tools Community Digest 2026-08-07

> Generated: 2026-08-07 02:08 UTC | Tools covered: 9

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

User Safety: safe

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights (as of 2026‑08‑07)**  

---

## 1. Top Skills Ranking – Most‑Watched Skills  

| # | Skill (PR) | Core Functionality | Why it’s Gaining Traction | Current Status | GitHub Link |
|---|------------|-------------------|---------------------------|----------------|-------------|
| **1** | **#1367 – `self‑audit`** | Mechanical file verification + four‑dimension reasoning quality gate (damage‑severity priority). Works with any project/tech‑stack/model. | Addresses the community’s growing need for *pre‑delivery safety* and *quality‑gate* automation after the chaos of buggy skill‑creator loops. | **[OPEN]** (awaiting merge) | https://github.com/anthropics/skills/pull/1367 |
| **2** | **#514 – `document‑typography`** | Detects orphan words, widow paragraphs, and numbering mis‑alignments; auto‑corrects typographic quality in AI‑generated documents. | Directly solves a painfully common “looks unprofessional” problem that users notice immediately. | **[OPEN]** | https://github.com/anthropics/skills/pull/514 |
| **3** | **#486 – `odt`** | Create/fill/read OpenDocument files (.odt/.ods), convert ODT → HTML, and support LibreOffice‑style templates. | Opens a gap in the *open‑source document* ecosystem (PDF, DOCX dominate) and offers a free‑software alternative. | **[OPEN]** | https://github.com/anthropics/skills/pull/486 |
| **4** | **#723 – `testing‑patterns`** | End‑to‑end testing philosophy (Testing‑Trophy model), AAA unit‑test patterns, React component testing with Testing Library, and security‑test guidance. | Aligns with the surge of demand for *reliable, well‑tested AI code* and gives developers a ready‑made testing blueprint. | **[OPEN]** | https://github.com/anthropics/skills/pull/723 |
| **5** | **#1302 – `color‑expert`** | Color‑naming systems (ISCC‑NBS, Munsell, XKCD, RAL, CSS…), “when to use what” space cheat‑sheet (OKLCH, OKLAB, CAM16‑HVS, etc.). | Satisfies a long‑standing “what colour should I pick?” use‑case that many creative workflows hit. | **[OPEN]** | https://github.com/anthropics/skills/pull/1302 |
| **6** | **#525 – `pyxel`** | Retro/pixel‑art game engine support (write → run_and_capture → inspect → iterate) for the Pyxel MCP server. | taps into the *retro‑gaming* and rapid prototyping niches that are exploding on social platforms. | **[OPEN]** | https://github.com/anthropics/skills/pull/525 |
| **7** | **#1479 – `plan‑file‑hygiene`** *(addresses #1417)* | Lifecycle management of planning artifacts (prevents accumulation, enforces tidy metadata, auto‑archive). | Responds to the community’s frustration with *plan‑document sprawl* in long‑running projects. | **[OPEN]** | https://github.com/anthropics/skills/pull/1479 |

*All seven are **open PRs** (still in the review/merge pipeline). They together cover a cross‑section of the Skills ecosystem: meta‑quality assurance, document production, testing, creative domains (color, retro‑games), and project hygiene.*

---

## 2. Community Demand Trends – What the Community Is Asking For  

| Trend | Key Signals from the Issues (sorted by comment count) |
|-------|-------------------------------------------------------|
| **🛡️ Security & Trust** | • **#492** (43 comments) – Community skills masquerading as official `anthropic/` skills cause trust‑boundary abuse.<br>• **#228** (16 comments) – Need for org‑wide skill sharing without manual uploads. |
| **🔧 Tooling & Reliability** | • **#556**, **#1169**, **#1323**, **#1099**, **#1050**, **#1261** – Recurring Windows‑specific bugs in `run_eval.py` and `skill‑creator` scripts (0 % recall, trigger‑detection failures).<br>• **#62** – Skills vanishing and errors, indicating a need for stable persistence. |
| **📦 Packaging & Deduplication** | • **#189** (6 comments, 9 👍) – `document‑skills` and `example‑skills` plugins ship identical skills → duplicate context windows. |
| **🧠 Quality & Context Efficiency** | • **#1487** – `claude‑api` skill injects ~156 k tokens, exhausting the context window.<br>• **#12** – Whitespace re‑formatting bugs in the DOCX skill. |
| **🏢 Enterprise Integration** | • **#1175** – Security concerns around SharePoint Online document handling.<br>• **#29** – Requests for Bedrock compatibility. |
| **🤝 Governance & Auditing** | • **#1385** – Proposal for a three‑gate Reasoning Quality Gate Pipeline (pre‑task calibration → adversarial review → delivery verification). |
| **🔌 Extensibility (MCP & Beyond)** | • **#16** – “Expose Skills as MCPs” – desire to turn Skills into generic MCP APIs. |
| **🧪 Testing & Feedback** | • **#412** (closed) – Proposal for an `agent‑governance` skill (safety patterns).<br>• **#1329** – Proposal for a `compact‑memory` skill (symbolic agent state). |

**Takeaway:** The community is converging on three pillars – *security & trust*, *robust, low‑overhead tooling*, and *enterprise‑grade integration*. There is also a clear push for *meta‑skills* (quality analysis, auditing, governance) that can police other Skills.

---

## 3. High‑Potential Pending Skills – Active‑Comment PRs / Proposals Likely to Land Soon  

| Skill (Source) | Brief Description | Community Support / Open Issues | Why It May Arrive Soon |
|----------------|-------------------|--------------------------------|-----------------------|
| **`compact‑memory`** *(Issue #1329)* | Symbolic notation for persistent agent notes/memories to reduce context bloat. | 9 comments, community‑driven (WGlynn) | Directly solves a pain point (context waste) that other PRs already address; low implementation complexity. |
| **`agent‑governance`** *(Issue #412 – closed proposal)* | Safety patterns, policy enforcement, trust scoring, and audit trails for AI‑agent systems. | 6 comments, closed but still referenced in

---

**Claude Code Community Digest – 2026‑08‑07**

---

### 1. Today’s Highlights  
- A cascade of high‑impact bugs was fixed in the last 24 h, notably the session‑limit false‑positive and the streaming‑API ECONNRESET on Windows.  
- Two PRs landed that broaden the marketplace (frontend‑design plugin) and improve script validation robustness.  
- Community activity remains strong, with several long‑standing issues finally getting attention and a handful of feature‑request tickets gaining traction.

---

### 2. Releases  
*No new version releases were published in the past 24 h.*

---

### 3. Hot Issues  *(10 noteworthy issues)*  

| # | Issue (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#6527** <br> [Open – bug, Linux, tools, security] | The `ask` list is ignored when “Bash” is present in the allow‑list, causing unexpected permission denials. | Directly blocks scripts that rely on Bash‑specific tooling; a regression that affects many Linux workflows. | 23 comments, 19 👍 – many users confirming the bug and requesting a fix. |
| **#57371** <br> [Open – Windows, cowork, desktop] | Provide a toggle to disable the bundled **CoworkVMService** background process on Windows. | Users who never use Cowork want a clean CLI experience; the hidden service consumes resources and complicates troubleshooting. | 18 comments, 42 👍 – strong endorsement for a user‑controlled switch. |
| **#76248** <br> [Open – bug, cowork] | Git proxy now blocks pushes in cloud/Cowork sessions, even when a fine‑grained PAT is supplied. | Breaks remote‑development pipelines that previously worked; impacts CI/CD and collaborative coding. | 14 comments, 5 👍 – users report loss of push capability and ask for regression rollback. |
| **#79584** <br> [Open – Windows, TUI] | Assistant text emitted before a tool call (e.g., `AskUserQuestion`) is intermittently invisible. | Hinders user awareness of what the assistant is about to do, reducing trust and usability. | 9 comments, 7 👍 – reproducible across plugin‑driven workflows. |
| **#73638** <br> [Open – core, bug] | Renaming a session while a `server_tool_use` is in flight injects a synthetic user turn, corrupting the transcript permanently. | Leads to permanent 400 errors on subsequent prompts; a serious data‑integrity issue. | 9 comments, 0 👍 – developers concerned about transcript stability. |
| **#76718** <br> [Open – Windows, bash, permissions] | Compound‑command permission prompting fires for every segment even when each segment is individually allow‑listed. | Makes multi‑session orchestration painful; >700 prompts in two days for simple fan‑out workflows. | 7 comments, 0 👍 – high‑frequency annoyance. |
| **#81664** <br> [Open – Windows, crash] | Claude Desktop repeatedly crashes during Browser‑pane screenshot verification and fails to relaunch. | Prevents any interaction that touches the browser pane; app becomes unusable until reinstall. | 7 comments, 2 👍 – users report crashes and package corruption. |
| **#84194** <br> [Open – bug] | `ECONNRESET` on streaming API calls caused by the bundled Bun HTTP client; Node.js/curl work fine. | Streaming failures break long‑running tool invocations; the issue is platform‑specific and persists after reinstall. | 5 comments, 0 👍 – reproducible on Windows with VPN‑independent connections. |
| **#81123** <br> [Open – Windows MSIX] | Inline browser preview crashes the GPU process, leaving the MSIX package in a “Modified/NeedsRemediation” state. | Users cannot preview code in‑app and must reinstall the package to recover. | 3 comments, 0 👍 – severe stability regression. |
| **#26581** <br> [Open – feature] | Request for system‑level notifications (VSCode/terminal) when Claude needs attention or finishes a task. | Improves workflow visibility, especially for multi‑task developers; aligns with Copilot‑style notifications. | 8 comments, 32 👍 – strong community interest. |

---

### 4. Key PR Progress  *(4 important PRs)*  

| # | PR (link) | Summary of changes |
|---|-----------|--------------------|
| **#84600** <br> [Open] | Registers the official **frontend‑design** marketplace plugin and auto‑enables it via `.claude/settings.json` for any repo using Claude Code, simplifying plugin adoption. |
| **#84427** <br> [Open] | Fixes `validate-agent.sh` to continue processing after the first warning/error when `set -e` is active, preventing premature termination. |
| **#84381** <br> [Open] | Extends `validate-hook-schema.sh` to correctly handle wrapped `hooks` objects and optional matchers, improving hook configuration validation. |
| **#84365** <br> [Open] | Allows any user’s thumbs‑down to prevent auto‑closure of a session, matching the dedupe bot’s behavior and giving users finer control over session lifecycle. |

---

### 5. Feature Request Trends  

- **Proactive Session Management** – Users want Claude to *self‑initiate* context compaction (`#33026`) and receive **system notifications** when attention is required (`#26581`).  
- **UI/UX Enhancements** – Requests for a **terminal tab title that reflects agent state** (`#71369`) and a **session time‑range filter** that works without “Group by State” (`#78775`).  
- **Background Service Control** – A clear way to **disable the Cowork background service** on Windows (`#57371`) reflects a desire for leaner CLI experiences.  
- **Permission & Prompt Simplifications** – Reducing noisy permission prompts for compound commands (`#76718`) and fixing the **ask‑list ignore bug** (`#6527`) indicate a push for smoother, less intrusive permission workflows.  

Overall, the community is gravitating toward **greater visibility (notifications, UI cues)**, **more deterministic session handling**, and **cleaner permission mechanisms**.

---

### 6. Developer Pain Points  

- **Permission Prompt Spam** – Compound‑command prompts (`#76718`) and the Bash‑allow‑list bug (`#6527`) cause repetitive, unnecessary user interactions, hindering batch and fan‑out workflows.  
- **Transcript Corruption** – Session rename during active tool calls (`#73638`) injects synthetic turns, breaking the transcript and causing persistent 400 errors.  
- **Unreliable Streaming** – The Bun HTTP client’s `ECONNRESET` (`#84194`) leads to abrupt termination of streaming API calls, affecting long‑running tasks.  
- **Stability on Windows MSIX** – Browser‑pane screenshot crashes (`#81123`, `#81664`) and the associated package corruption impede everyday development on Windows.  
- **Hidden Background Services** – The Cowork background service (`#57371`) runs unnoticed, consuming resources and complicating debugging for users who never use Cowork.  

Addressing these recurring frustrations would markedly improve developer productivity and confidence in the Claude Code platform.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-08-07  

## Today’s Highlights  
OpenAI Codex released version `rust-v0.147.0` with enhancements for portable Agent Plugins and improved conversation navigation. Critical Windows process-spawning bugs and memory leaks in the desktop app dominate issue reports, highlighting stability challenges in cross-platform execution and resource management.  

## Releases  
**rust-v0.147.0** introduces two major features:  
1. **Portable Agent Plugins**: Users can now install plugins from local, personal, workspace, and remote catalogs, enhancing flexibility for custom workflows. [#36544, #36409, #36919, #36796]  
2. **Organized Conversations**: Persistent, manually ordered sections with incremental transcript browsing improve session management for lengthy interactions. [#35722, #36007, #36380, #36948]  

## Hot Issues  
1. **#33776 [Windows Process Spawning]**: ChatGPT.exe spawns hundreds of `taskkill.exe`/`conhost.exe` processes, causing WMI storms and DWM degradation. **Community Reaction**: High engagement (32 comments, 27 likes).  
2. **#28080 [Thread Tool Handler Loss]**: Desktop thread tools lose handlers intermittently (`No handler registered`), impacting reliability. **Community Reaction**: 21 comments, 2 likes.  
3. **#20883 [MCP Process Pooling]**: Request for project-scoped MCP process pools instead of per-session spawning to reduce memory overhead. **Community Reaction**: 17 comments, 4 likes.  
4. **#19694 [Model Picker Bug]**: Desktop model picker filters out valid models from `model_catalog_json`. **Community Reaction**: 14 comments, 35 likes.  
5. **#26820 [Chrome Extension CLI Incompatibility]**: CLI fails to acquire Chrome extension backend despite UI compatibility. **Community Reaction**: 12 comments, 9 likes.  
6. **#21653 [Multi-Line Status Line]**: Enhancement to support multi-line status displays in TUI for long prompts. **Community Reaction**: 12 comments, 58 likes.  
7. **#33967 [Windows Setup Failure]**: ChatGPT Desktop stuck at “Complete Windows setup” screen. **Community Reaction**: 9 comments, no likes.  
8. **#33531 [MCP Memory Leak]**: MCP suites persist after subagent completion, reaching 10.9GB private memory. **Community Reaction**: 5 comments, 1 like.  
9. **#35355 [Compaction Bug]**: Compaction promotes partial command output, corrupting task state. **Community Reaction**: 5 comments, no likes.  
10. **#37192 [OAuth Fallback Failure]**: CLI silently uses hardcoded dummy API key after network changes, causing 401 errors. **Community Reaction**: 4 comments, no likes.  

## Key PR Progress  
1. **#37354** (Closed): Retries `ExecutableFileBusy` errors in app-server tests.  
2. **#37352** (Closed): Adds configurable code-mode exec yield timeout (default 30s).  
3. **#37350** (Closed): Thread ID customization via `ThreadManager::with_thread_id_generator`.  
4. **#37349** (Closed): Mounts minimal `/dev` in Bubblewrap sandboxes to improve security.  
5. **#37348** (Closed): Adds `codex migrate-rollouts` tooling with dry-run and throttling options.  
6. **#37347** (Closed): Tracks context windows per agent for subagent lineage accuracy.  
7. **#37345** (Closed): Sends model routing hints (`x-codex-routing-hint`) to backend for optimization.  
8. **#37344** (Closed): Fixes MCP startup status clearing for subagent resolution.  
9. **#37339** (Closed): Reloads telemetry after account changes to reflect new configurations.  
10. **#37337** (Closed): Recovers MCP servers post-OAuth reauthentication via credential update.  

## Feature Request Trends  
- **Multi-Modal Interaction Support**: Requests for enhanced visualization and inline viewport handling (e.g., #37341).  
- **Cross-Platform Consistency**: Fixes for Chrome extension compatibility between CLI and app UI (#26820).  
- **Resource Optimization**: Project-scoped MCP pooling (#20883) and prompt caching for GPT-5.6 (#35300).  
- **Configuration Flexibility**: Default shell configuration for Windows (#16579) and status-line formatting (#21653).  
- **Deterministic Tool Ordering**: Fixing non-deterministic MCP tool output via sorted storage (#37351).  

## Developer Pain Points  
1. **Windows Process Management**: Aggressive process spawning and zombie leaks (e.g., #33776, #32676, #37247) frustrate resource-constrained environments.  
2. **Subagent Memory Handling**: Repeated MCP memory leaks and checkpoint corruption (#33531, #35355) suggest resource tracking gaps.  
3. **OAuth and CLI Integration**: Silent fallback to dummy keys after reauthentication (#37192) and inconsistent browser extension access (#26820) hinder reliability.  
4. **Tooling and Configuration Gaps**: Model picker limitations (#19694) and missing status-line customization (#21653) delay developer workflows.  
5. **Concurrency and State Management**: Race conditions in thread handlers (#28080) and session state promotion (#37325) indicate deeper architectural challenges.  

---  
All data sourced from [openai/codex GitHub repository](https://github.com/openai/codex).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-07

## Today's Highlights
No new releases were published in the last 24 hours. However, several critical bugs and feature requests have emerged around agent reliability, model errors, and terminal behavior. Notable activity includes fixes for memory leaks, ghost text rendering loops, and improved error messaging for authentication flows.

## Releases
*No new versions released in the last 24 hours.*

## Hot Issues

1. **[Subagent recovery misreports MAX_TURNS as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   Priority 1 bug where subagents incorrectly report success after hitting turn limits. Under active triage with 12 comments.

2. **[Generalist agent hangs indefinitely on simple tasks](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   High-priority issue affecting core usability. Users report hangs up to one hour. Workaround: disable subagents manually.

3. **[Browser subagent fails under Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   Bug impacting Linux desktop users relying on graphical automation. Requires environment-specific debugging.

4. **[Shell commands stuck showing “Awaiting input” post-execution](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   Medium-effort medium-priority problem causing confusing UI states during shell interactions. Needs retesting.

5. **[Images cause UNKNOWN_UPSTREAM_ERROR and freeze chat (Windows)](https://github.com/google-gemini/gemini-cli/issues/28714)**  
   Newly reported regression freezing UI upon image attachment. Affects both native CLI and wrappers like AionUi.

6. **[Model fails to use custom skills/subagents autonomously](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   User reports inconsistent invocation of registered skills unless explicitly told. Relates to broader agent decision-making concerns.

7. **[Auto Memory retries low-signal sessions endlessly](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   Memory subsystem issue causing repeated processing attempts without resolution logic.

8. **[Inconsistent newline escaping breaks output formatting](https://github.com/google-gemini/gemini-cli/issues/22466)**  
   Naïve escaping leads to malformed prompts. Maintainer requested user follow-up for root cause analysis.

9. **[Git operations lack safety guards against destructive actions](https://github.com/google-gemini/gemini-cli/issues/22672)**  
   Customer feedback highlights risks around unchecked destructive commands (`git reset`, `--force`). Feature request pending alignment.

10. **[Vite app generation hangs at interactive prompts](https://github.com/google-gemini/gemini-cli/issues/22465)**  
    Behavioral eval gap identified—needs prompt tuning or new test case development to improve robustness.

## Key PR Progress

1. **[Fix ghost text infinite loop at narrow widths](https://github.com/google-gemini/gemini-cli/pull/28641)** *(Open)*  
   Resolves infinite wrapping loop in input prompt when terminal width < 1 character glyph. Includes regression tests.

2. **[Point ProjectIdRequiredError to live authentication docs](https://github.com/google-gemini/gemini-cli/pull/28640)** *(Open)*  
   Corrects broken documentation link in auth error message to direct users properly via `https://geminicli.com`.

3. **[Guard `formatTruncatedToolOutput` vs non-positive maxChars](https://github.com/google-gemini/gemini-cli/pull/28639)** *(Open)*  
   Prevents malformed truncation behavior from negative/zero character thresholds.

4. **[Improve Vertex AI 401 error clarity](https://github.com/google-gemini/gemini-cli/pull/28679)** *(Open)*  
   Enhances error diagnostics when mismatched credential types used with Vertex provider.

5. **[Forward signal handling to child processes](https://github.com/google-gemini/gemini-cli/pull/28676)** *(Open)*  
   Ensures clean shutdowns propagate correctly in supervised launch scenarios.

6. **[Preserve thoughtSignature in functionCall parts](https://github.com/google-gemini/gemini-cli/pull/28586)** *(Open/Nudge Sent)*  
   Reverts regression stripping internal model metadata leading to 400 errors during batched tool calls.

7. **[Cap grep/search output size + clearer overflow messaging](https://github.com/google-gemini/gemini-cli/pull/19638)** *(Open/Help Wanted)*  
   Addresses context overflow risk from overly broad textual searches.

8. **[Record streaming usage even if interrupted mid-call](https://github.com/google-gemini/gemini-cli/pull/28718)** *(Open)*  
   Logs telemetry accurately on partial API streams to avoid misleading metrics.

9. **[Fix scroll jumping during content updates](https://github.com/google-gemini/gemini-cli/pull/28405)** *(Open/Maintainer Only)*  
   Stabilizes scroll behavior when async updates arrive while reviewing older content.

10. **[VSCode IDE companion memory leak cleanups](https://github.com/google-gemini/gemini-cli/pull/28526)** *(Open/Nudge Sent)*  
   Fixes improperly composed disposables causing event listener retention in extension activation.

## Feature Request Trends

- **Agent autonomy & transparency**: More frequent mentions of wanting better insight into subagent decisions and trajectories via `/chat share`.
- **Terminal resilience**: Requests for smoother resize experience and avoidance of flickering/jumping visuals.
- **Toolchain integration maturity**: Interest in AST-based navigation/search tools to enhance codebase understanding.
- **Non-interactive mode parity**: Demand for richer stats/data feedback outside interactive UI sessions.

## Developer Pain Points

- Frequent unresponsiveness or indefinite hangs when invoking agents or running shell commands.
- Poor visibility into what subagents are doing internally—especially during failures or interruptions.
- Unexpected model/server-side errors such as HTTP 400s or `UNKNOWN_UPSTREAM_ERROR` disrupting workflows.
- Terminal rendering quirks including cursor flickering, misplaced UI elements, and poor resize handling.
- Authentication friction due to unclear guidance and outdated help links.
- Difficulty tracing memory system logic where benign-looking inputs trigger endless retries.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑08‑07**

---

### 1. Today's Highlights
The CLI shipped a patch release **v1.0.79‑6** that silences a spurious internal‑delay warning and fixes a silent session‑history load failure that left transcripts blank. Meanwhile, the community is rallying around two high‑impact topics: a request to scroll through the current conversation history (‑‑‑> #4313) and a persistent Bash‑tool breakage on NixOS (‑‑‑> #3392) that has garnered the most reactions (👍 7) despite modest comment volume.

---

### 2. Releases
| Version | Date | Notable Changes |
|---------|------|-----------------|
| **v1.0.79‑6** | 2026‑08‑06 | • Suppresses a diagnostic warning that was printed on top of the interactive UI after a rare internal delay.<br>• Corrected a silent failure when loading session history; previously the error was discarded, leaving the transcript empty for the rest of the session with no log output. |

No other releases were published in the last 24 h.

---

### 3. Hot Issues (10 picked)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **[#4313](https://github.com/github/copilot-cli/issues/4313)** | *Allow scrolling through the current conversation history* | Users want keyboard/mouse navigation (PageUp/PageDown, wheel) to revisit prior turns without leaving the chat. This improves workflow for long debugging sessions. | 4 comments, 0 👍 |
| **[#3392](https://github.com/github/copilot-cli/issues/3392)** | *Bash tool breaks on NixOS with version ≥1.0.49* | On NixOS the CLI fails to spawn a bash process (`Failed to start bash process`), breaking all agent‑driven commands. Affects a growing segment of developers using Nix‑based CI/CD. | 3 comments, 👍 7 |
| **[#4174](https://github.com/github/copilot-cli/issues/4174)** | *ACP server does not expose token/context usage* | Lack of token/context/metadata in the ACP protocol prevents observability and cost‑tracking for enterprise users integrating Copilot CLI into custom tooling. | 3 comments, 👍 2 |
| **[#4251](https://github.com/github/copilot-cli/issues/4251)** | *Session resume OOMs / grinds CPU for ~70 min* | A regression between 1.0.73 → 1.0.74 causes massive memory spikes when resuming large sessions, rendering the CLI unusable for long‑running projects. | 2 comments, 👍 1 |
| **[#4374](https://github.com/github/copilot-cli/issues/4374)** | *`/mcp search` fails with 400 Bad Request on Azure DevOps remotes* | The MCP registry browser cannot load policy when the repo’s remote points to Azure DevOps, blocking discovery of non‑GitHub MCP servers in many enterprise settings. | 0 comments, 👍 4 |
| **[#4212](https://github.com/github/copilot-cli/issues/4212)** | *Prompt box and highlighted menu items invisible inside tmux* | Dark‑on‑dark rendering makes the CLI unusable within tmux sessions, a common terminal multiplexer for developers. | 2 comments, 0 👍 |
| **[#4211](https://github.com/github/copilot-cli/issues/4211)** | *Copilot CLI couldn't handle BigInt in structured MCP response* | MCP servers returning JavaScript‑style BigInt values trigger a `TypeError` and abort all ongoing tasks, limiting interoperability with modern data‑heavy services. | 2 comments, 0 👍 |
| **[#4380](https://github.com/github/copilot-cli/issues/4380)** | *Rubber Duck reviews sometimes reuse the primary model* | The adversarial review feature loses its value when the reviewer model mirrors the primary model, reducing confidence in generated code. | 2 comments, 0 👍 |
| **[#4392](https://github.com/github/copilot-cli/issues/4392)** | *Post‑authentication MCP client rebuild leaves orphaned stdio servers* | On startup the CLI tears down and rebuilds its MCP client after auth, but the initial stdio MCP processes are not reaped, accumulating zombie processes. | 1 comment, 0 👍 |
| **[#4391](https://github.com/github/copilot-cli/issues/4391)** | *Copying text clears the screen on certain Windows codepages* | On Windows with codepage 936 (GBK) a copy operation unexpectedly clears the terminal, disrupting workflow; works fine on codepage 437. | 1 comment, 0 👍 |

---

### 4. Key PR Progress
No pull requests were updated in the last 24 h. The project’s activity is currently dominated by issue triage and release patches.

---

### 5. Feature Request Trends
From the open issues, the most‑requested directions are:

- **Enhanced navigation / history** – scrollable conversation history (#4313) and persistent session resume without memory blow‑up (#4251).  
- **MCP & agent ecosystem improvements** – reliable MCP registry access across remote types (#4374), exposure of token/context usage in ACP (#4174), and clean‑up of orphaned MCP processes (#4392).  
- **Model flexibility** – per‑session model switching for BYOM providers (#4376) and independent reviewer model selection for Rubber Duck (#4380).  
- **Theming & accessibility** – readable UI inside tmux and other terminal multiplexers (#4212) and fixing Windows codepage‑specific screen clears (#4391).  
- **Robust data handling** – proper serialization of BigInt and other non‑JSON‑native types in MCP responses (#4211).  

---

### 6. Developer Pain Points
Recurring frustrations highlighted by the community:

- **Session stability** – resuming large sessions triggers OOM or excessive CPU usage (#4251) and history load failures that blank the UI (fixed in v1.0.79‑6).  
- **Environment‑specific breakage** – Bash tool failures on NixOS (#3392) and Windows codepage anomalies (#4391) show gaps in cross‑platform tooling.  
- **Observability deficit** – ACP/MCP interactions lack telemetry (token usage, context size) making cost‑control difficult (#4174).  
- **Permission transparency** – Users cannot see *why* a safeguard prompt appears, hindering trust and safe automation (multiple “permission”‑related issues).  
- **Rendering glitches** – Transcript blanks until width/children change (#4311) and invisible prompt boxes in tmux (#4212) degrade the interactive experience.  
- **Process hygiene** – Orphaned stdio MCP servers after authentication rebuilds (#4392) and background tasks that never signal completion (#4385) lead to resource leaks.  

Addressing these areas will directly improve reliability, usability, and enterprise adoption of Copilot CLI.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest - 2026-08-07**  

**1. Today's Highlights**  
The Kimi Code CLI community is actively addressing critical bugs and proposing key enhancements. A significant focus is improving file-handling stability (`StrReplaceFile` UTF-8 corruption fix) and refining developer workflows (Shift+Enter shortcut). A Security Advisory highlights high-severity authorization and dependency vulnerabilities requiring urgent fixes.  

---

**2. Releases**  
No new releases in the past 24h.  

---  

**3. Hot Issues**  
**Top 10 Noteworthy Issues**:  
- **1283** [enhancement] **Memory System**: Prioritizes persistent context across sessions for LLM consistency. Community seeks broader memory management (GitHub: [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)).  
- **2317** [bug] **VSCode Plan Mode Bug**: Disrupts user interaction in chat webview; affects Darwin/arm64 users (GitHub: [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317)).  
- **2591** [bug] **StrReplaceFile UTF-8 Corruption**: Invalidates non-UTC-8 files via U+FFFD replacements; critical for file integrity (GitHub: [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591)).  
- **2595** [PR] **StrReplaceFile Fix**: Refuses edits on non-UTF-8 files; stabilizes core functionality (GitHub: [#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595)).  
- **2474** [bug] **Interface Rendering Issues**: Frequent UI redraws on Linux cause poor user experience (GitHub: [#2474](https://github.com/MoonshotAI/kimi-cli/issues/2474)).  
- **2147** [enhancement] **Lazy MCP Schema Loading**: Reduces token bloat in LLM context for complex toolset setups (GitHub: [#2147](https://github.com/MoonshotAI/kimi-cli/issues/2147)).  
- **2593** [enhancement] **Mode Switcher**: Community demands a VSCode panel for rapid mode (auto/yolo/manual) toggling (GitHub: [#2593](https://github.com/MoonshotAI/kimi-cli/issues/2593)).  
- **821** [security] **Authorization/CVE Gaps**: High-severity IDOR/dependency flaws require immediate attention (GitHub: [#821](https://github.com/MoonshotAI/kimi-cli/issues/821)).  
- **2594** [PR] **Non-UTF-8 Preservation**: Resolves StrReplaceFile token corruption; preserves raw byte integrity (GitHub: [#2594](https://github.com/MoonshotAI/kimi-cli/pull/2594)).  
- **2255** [PR] **Shift+Enter Shortcut**: Enhances CLI usability by adding a common newline binding (GitHub: [#2255](https://github.com/MoonshotAI/kimi-cli/pull/2255)).  

---

**4. Key PR Progress**  
**Critical Fixes & Enhancements**:  
1. **#2595**: Prevents catastrophic data loss by rejecting edits on non-UTF-8 files. Stabilizes a high-risk workflow.  
2. **#2594**: Corrects StrReplaceFile’s tokenization logic to preserve non-UTF-8 bytes. Upstream-ready fix.  
3. **#2255**: Adds Shift+Enter as a workflow-critical shortcut. Merged after extensive use-case testing.  
4. **#2147** (Discussion): Lazy loading of MCP schemas to mitigate token bloat. Community actively debating scalability tradeoffs.  
5. **#821**: Security fixes for authorization gaps and 5 CVEs. PR will address high-risk vulnerabilities once drafted.  

---

**5. Feature Request Trends**  
- **Persistent Memory Systems**: 3 related Issues (1283, implicit in 2594/2595) emphasize cross-session context retention.  
- **Tooling Usability**: Lazy loading (2147) and MCP schema optimizations dominate requests.  
- **CLI Personalization**: Shift+Enter (2255) and mode-switching (2593) highlight demand for keyboard-centric controls.  

---

**6. Developer Pain Points**  
- **Data Integrity Risks**: StrReplaceFile’s UTF-8 handling caused irreversible corruption (high-severity).  
- **MCP Bloat**: Thousands of tokens preallocated per session degrade LLM responsiveness.  
- **UI Instability**: Rendering flickers on Linux disrupt core workflows.  
- **Security Blind Spots**: Missing authorization checks and legacy dependency CVEs pose compliance risks.  

---  
All links direct to GitHub issues/PRs for precise context.


</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

---

### 1. **Today's Highlights**  
The OpenCode Go subscription is facing widespread `401 Request blocked by upstream provider` errors affecting chat/completions, despite valid subscriptions and working free-tier models. A new feature PR proposes session context management akin to Claude’s `/context` endpoint, signaling improvements in workflow continuity.  

---

### 2. **Releases**  
No new releases in the last 24h.  

---

### 3. **Hot Issues**  
1. **[#38257](https://github.com/anomalyco/opencode/issues/38257)**: OpenCode Go users face `401` errors for paid models despite active subscriptions. High comment count (44) indicates urgent community concern.  
2. **[#38218](https://github.com/anomalyco/opencode/issues/38218)**: Similar `401` blockage across all Go subscription models, reported by multiple users.  
3. **[#40234](https://github.com/anomalyco/opencode/issues/40234)**: Billing issues post-subscription (OpenCode version 1.18.11) prevent plan activation.  
4. **[#6152](https://github.com/anomalyco/opencode/issues/6152)**: Feature request for session context handling—highly voted (129👍) for improved context management.  
5. **[#39827](https://github.com/anomalyco/opencode/issues/39827)**: Zen models entirely broken with `401` errors; user recreated account but issue persists.  
6. **[#38081](https://github.com/anomalyco/opencode/issues/38081)**: Feature request for cross-project session picker—critical for multi-repo workflows.  
7. **[#40958](https://github.com/anomalyco/opencode/issues/40958)**: DeepSeek V4 Flash Free context capped at 200K (native 1M), limiting utility for coding tasks.  
8. **[#40759](https://github.com/anomalyco/opencode/issues/40759)**: `/sessions` command breaks chat history on recent updates.  
9. **[#32157](https://github.com/anomalyco/opencode/issues/32157)**: Feature request for prompt delivery queuing/steering mechanics to refine interactive workflows.  
10. **[#40957](https://github.com/anomalyco/opencode/issues/40957)**: OpenCode 1.18.14 fails to launch on Windows 10 with Node.js 26.7.  

---

### 4. **Key PR Progress**  
1. **[#40971](https://github.com/anomalyco/opencode/pull/40971)**: Exposes prompt action commands for TUI plugins (e.g., `form.option.previous`), enhancing usability.  
2. **[#40929](https://github.com/anomalyco/opencode/pull/40929)**: Bounds tool output with lexical paths, improving file management consistency.  
3. **[#40967](https://github.com/anomalyco/opencode/pull/40967)**: Adds workspace environment foundation for better session and context isolation.  
4. **[40952](https://github.com/anomalyco/opencode/pull/40952)**: Refactors tab layout settings to explicit horizontal/vertical options.  
5. **[40913](https://github.com/anomalyco/opencode/pull/40913)**: Scopes model selection to sessions, fixing cross-tab model reset issues.  
6. **[40954](https://github.com/anomalyco/opencode/pull/40954)**: Hot-reloads skill sources without restarting services.  
7. **[40951](https://github.com/anomalyco/opencode/pull/40951)**: Separates session transfer client for robust import/export workflows.  
8. **[40943](https://github.com/anomalyco/opencode/pull/40943)**: Preserves response IDs for better reasoning history tracking.  
9. **[40969](https://github.com/anomalyco/opencode/pull/40969)**: Handles empty tool call IDs in streaming deltas to avoid provider errors.  
10. **[40950](https://github.com/anomalyco/opencode/pull/40950)**: Styles destructive TUI actions for clearer user feedback.  

---

### 5. **Feature Request Trends**  
- **Session Management**: Requests for context tracking (`#6152`), cross-project sessions (`#38081`), and session picker improvements (`#38973`).  
- **Usability Enhancements**: Clickable links (`#1168`), session stats (`#37760`), and tab-based interfaces (`#40952`).  
- **Workflow Refinement**: Prompt queuing/steering (`#32157`) and retention of full truncated tool outputs.  
- **Authentication/Subscription**: Fixes for `401` blockages in paid plans (`#38257`, `#39215`, `#40055`).  

---

### 6. **Developer Pain Points**  
- **401 Blockages**: Recurring `401 Request blocked by upstream provider` errors for paid models, delaying work despite valid subscriptions.  
- **Session Instability**: Last updates broke `/sessions` functionality and post-creation message rendering.  
- **Permission/Access Issues**: Subscribers struggle with billing and model access after authentication.  
- **Cross-Platform Bugs**: UI glitches in Windows terminal and Linux CLI apps (e.g., `#11748`, `#35494`).  

--- 

This digest highlights critical stability issues impacting subscriptions, active community-driven improvements, and recurring developer workflow challenges. For deeper analysis, refer to linked GitHub issues/PRs.


</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Developer Community Digest - August 7, 2026

## Today's Highlights
- **v0.84.0 released** with Fullscreen TUI mode featuring runtime switching, sticky editor/footer, independently scrollable transcript, and draggable scrollbars
- Active Windows usability discussion emerges (#7547) with 22 comments as developers seek guidance on running Pi on Windows platforms
- Critical TUI rendering bug resolved (#7736) that caused uncaught exceptions when lines exceeded terminal width

## Releases
**v0.84.0** - Fullscreen TUI Mode Enhancement
- Introduced fullscreen TUI mode with runtime switching capabilities
- Added sticky editor and footer components for improved workflow
- Implemented independently scrollable transcript with draggable scrollbars
- Enhanced user experience for power users who prefer immersive terminal sessions

## Hot Issues
1. **#7547 [OPEN] Windows Usability Questions** (22 comments)
   - **Why it matters:** Massive Windows developer base struggles with Pi's multiple setup methods
   - **Community reaction:** High engagement indicates clear need for official Windows documentation and simplified installation paths
   - **Link:** [earendil-works/pi #7547](https://github.com/earendil-works/pi/issues/7547)

2. **#6879 [OPEN] Auto-compaction Bug** (12 comments, 15 👍)
   - **Why it matters:** Long-running sessions (>2 hours) cause context windows to grow uncontrollably, forcing API rejections at 373k tokens
   - **Community reaction:** Strong upvote shows widespread impact on productivity workflows
   - **Link:** [earendil-works/pi #6879](https://github.com/earendil-works/pi/issues/6879)

3. **#7128 [OPEN] Overbearing PI_* Guidelines** (10 comments, 5 👍)
   - **Why it matters:** Default system prompt bias causes unnecessary bash command execution, reducing efficiency
   - **Community reaction:** Balanced concern - developers recognize guidelines but want smarter automation
   - **Link:** [earendil-works/pi #7128](https://github.com/earendil-works/pi/issues/7128)

4. **#7720 [OPEN] Copy-on-Select in Fullscreen TUI** (3 comments)
   - **Why it matters:** Accidental clipboard loss when terminal highlighting affects mouse selections
   - **Community reaction:** Request for configurable behavior shows preference for user control over automated features
   - **Link:** [earendil-works/pi #7720](https://github.com/earendil-works/pi/issues/7720)

5. **#7600 [OPEN] X11 Connection Leak** (3 comments)
   - **Why it matters:** 182+ leaked connections over 8 days fill X server's 256-client limit, breaking new X clients
   - **Community reaction:** Critical infrastructure issue affecting long-running Linux desktop sessions
   - **Link:** [earendil-works/pi #7600](https://github.com/earendil-works/pi/issues/7600)

6. **#6733 [CLOSED] Gemini Thought Signature Support** (4 comments, 2 👍)
   - **Why it matters:** Essential for preserving AI reasoning metadata across tool calls
   - **Community reaction:** Pragmatic closure - feature implemented but remains niche request
   - **Link:** [earendil-works/pi #6733](https://github.com/earendil-works/pi/issues/6733)

7. **#7413 [CLOSED] GitHub Copilot GHE.com Compaction** (7 comments, 1 👍)
   - **Why it matters:** Enterprise authentication breaks AI reasoning persistence
   - **Community reaction:** Shows gap in enterprise environment support
   - **Link:** [earendil-works/pi #7413](https://github.com/earendil-works/pi/issues/7413)

8. **#7702 [OPEN] DeepSeek Reasoning Content** (4 comments)
   - **Why it matters:** API compatibility issue prevents multi-turn tool calling with DeepSeek models via OpenCode Zen gateway
   - **Community reaction:** Critical bug affecting specific provider integrations
   - **Link:** [earendil-works/pi #7702](https://github.com/earendil-works/pi/issues/7702)

9. **#7680 [OPEN] Selection Page Keybindings** (no comments yet)
   - **Why it matters:** Improves accessibility for navigating long transcripts and form fields
   - **Community reaction:** Early-stage issue before community awareness
   - **Link:** [earendil-works/pi #7680](https://github.com/earendil-works/pi/issues/7680)

10. **#7321 [OPEN] Multi-line Paste Support** (3 comments, 1 👍)
    - **Why it matters:** Breaks functionality on Termux/Android where bracketed paste isn't supported
    - **Community reaction:** Cross-platform frustration affecting mobile Linux users
    - **Link:** [earendil-works/pi #7321](https://github.com/earendil-works/pi/issues/7321)

## Key PR Progress
1. **#7745 [CLOSED] Gemini Thought Signature Preservation** - Implemented capture and replay of Gemini's `extra_content.google.thought_signature` across OpenAI completions
2. **#7733 [CLOSED] Multi-click Text Selection Fix** - Corrected double-click behavior to avoid including trailing whitespace in fullscreen TUI
3. **#7717 [CLOSED] Reset During Active Runs** - Added protection against transcript corruption when `Agent.reset()` is called mid-execution
4. **#7715 [CLOSED] Blocked Tool Call Termination** - Added `terminate` hint for extensions to signal agent turn ending after blocking tool calls
5. **#7686 [CLOSED] Harness Factory Config** - Introduced configurable factory for experimental coding-agent harness with preserved tool activation
6. **#7681 [CLOSED] AGENTS.override.md Support** - Added per-directory context override capability as highest-priority configuration file
7. **#7680 [OPEN] Selection Page Keybindings** - Handles page up/down navigation in selection components while preserving viewport behavior
8. **#7722 [OPEN] Theme Override Option** - Allows runtime theme selection via `--use-theme` parameter for single or appearance-based themes
9. **#7727 [OPEN] SQLite Query Optimization** - Improved session storage queries with covering indexes and SQL-level filtering
10. **#7710 [OPEN] Harness Recovery** - Implemented session harness restoration following harness v2 recovery plan specifications

## Feature Request Trends
- **Enterprise Authentication Enhancement** - Multiple requests for improved GitHub Enterprise and cloud provider support
- **Cross-Platform Compatibility** - Growing demand for better Windows, Termux, and SSH usage scenarios
- **Performance Optimization** - Focus on large-session handling, streaming efficiency, and X11 resource management
- **User Control Preferences** - Increasing requests for configurable behaviors (copy-on-select, theme overrides)
- **Enterprise Tooling** - Need for provider-specific authentication and model availability verification

## Developer Pain Points
1. **Authentication Complexity** - Windows developers struggle with multiple Pi installation paths and unclear best practices
2. **Performance Bottlenecks** - Long-running sessions cause uncontrollable context growth and API rejections
3. **Cross-Platform Bugs** - Inconsistent behavior across terminals (Termux paste, SSH authentication, X11 connections)
4. **UI/Interaction Frustrations** - Accidental clipboard loss, poor selection behavior, and rendering errors
5. **Enterprise Integration Gaps** - Provider-specific authentication failures and model availability mismatches
6. **Resource Management** - X11 connection leaks affecting long-running desktop sessions
7. **Configuration Complexity** - Overly verbose guidelines causing unnecessary command execution
8. **Testing Infrastructure** - Vitest configuration conflicts and unclear testing workflows for TUI components

The community is actively addressing these pain points with targeted fixes and feature improvements, showing a mature open-source project's response to real-world usage challenges.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-07

## 1. Today's Highlights
The command-boundary refactor (Epic #2870) reached closure after layered PRs culminating in **#5255**, which verifies palette/completion integration. A FreeBSD build fix (**#5254**) unblocks a new platform. Meanwhile, the v0.9.4 release train (**#5135**) is actively merging 77 commits, addressing workflow runtime bugs, TUI scrolling regressions, and build-performance pain points.

---

## 2. Releases
*No new releases in the last 24 hours.*  
The v0.9.4 release train (**#5135**) remains in progress; expect a tag once the integration branch passes CI.

---

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | **EPIC: staged command-boundary refactor** (CLOSED) | Multi-PR effort to cleanly separate user commands from agent tools; foundational for extensibility. | 20 comments, cross-referenced by 5+ PRs; closed today. |
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) | **Only one API key can be saved** (OPEN) | Blockers for multi-provider workflows (DeepSeek + GLM + others); high user friction. | 2 comments, 👍0 but clear recurring request. |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | **Unknown model IDs silently fall back to 128K context** (OPEN) | Silent degradation: 1M-window models compact at 128K without warning — data-loss risk. | Authored by maintainer Hmbown; 2 comments. |
| [#5253](https://github.com/Hmbown/CodeWhale/issues/5253) | **Nested subagents can widen root depth budget** (OPEN) | Safety regression: child `max_depth` can exceed global ceiling, breaking recursion guards. | 1 comment; relates to #3931 fix. |
| [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) | **Anthropic-compatible providers error: `'type' must be in ["enabled","disabled","auto"]`** (CLOSED) | Frequent HTTP 400 for OpenModel/Anthropic-compatible endpoints; intermittent but disruptive. | 6 comments; closed yesterday. |
| [#4828](https://github.com/Hmbown/CodeWhale/issues/4828) | **macOS “underwater” shell breaks `open`/`osascript`/`launchctl` (exit -54)** (CLOSED) | v0.9.0 regression on macOS; forced downgrades to v0.8.67. | 2 comments; closed yesterday. |
| [#5223](https://github.com/Hmbown/CodeWhale/issues/5223) | **Mouse wheel scrolls input history instead of transcript** (CLOSED) | UX regression on long responses; users couldn’t scroll content area. | 1 comment; fixed by **#5234**. |
| [#5246](https://github.com/Hmbown/CodeWhale/issues/5246) | **Fat LTO on every pre-push build slows contributors** (CLOSED) | Shipping profile (`lto=true`, `codegen-units=1`) used for local dev gate — 5-10× slower builds. | Authored by Hmbown; 0 comments but high maintainer impact. |
| [#5245](https://github.com/Hmbown/CodeWhale/issues/5245) | **Git commit forces full rebuild of TUI/CLI** (CLOSED) | Build script watches git HEAD for SHA stamp; any commit triggers 682k-line rebuild. | Authored by Hmbown; 0 comments. |
| [#5046](https://github.com/Hmbown/CodeWhale/issues/5046) | **Fleet named agents bind strictly to roles; only ‘general’ exposes model options** (CLOSED) | Over-restrictive dispatch: generic role + `model_strength: same` cloned operator’s model 5×. | Authored by Hmbown; 0 comments. |

---

## 4. Key PR Progress (Top 10)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5255](https://github.com/Hmbown/CodeWhale/pull/5255) | Layer 5.3: Palette, completion, and discovery filtering | **OPEN** | Final verification of command-boundary refactor: proves palette/slash-completion acceptance criteria. |
| [#5254](https://github.com/Hmbown/CodeWhale/pull/5254) | Build fix for FreeBSD | **OPEN** | Adds `bindgen` feature for `rquickjs-sys`; unblocks FreeBSD `x86_64-unknown-freebsd`. |
| [#5234](https://github.com/Hmbown/CodeWhale/pull/5234) | fix(tui): keep alternate scroll off while mouse capture active | **CLOSED** | Fixes **#5223**: disables xterm alternate-scroll (DECSET 1007) when mouse capture is active. |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | feat(tui/subagent): resume interrupted children from checkpoint | **CLOSED** | Enables `agents/followup` on `interrupted_continuable` children; long tasks no longer require re-dispatch. |
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | feat(tui/shell): surface real wait elapsed time in tool content | **CLOSED** | Moves `duration_ms` from metadata → tool content so model sees actual wait time, reducing busy-polling. |
| [#5238](https://github.com/Hmbown/CodeWhale/pull/5238) | feat(mcp): MCP Registry discovery with Registry-first tool selection | **CLOSED** | Adds `registry_sync` + Registry-first policy; model consults public MCP Registry before `exec_shell`. |
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | release: Codewhale v0.9.4 release train | **CLOSED** | 77 commits integrating 18 train commits; supersedes #5044. |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | feat(acp): expose file/search/git/patch/shell tools over session/prompt | **CLOSED** | ACP server now executes tool calls (not just streams text); unblocks Zed/ACP adapters. |
| [#5077](https://github.com/Hmbown/CodeWhale/pull/5077) | perf(prompt): progressively disclose fresh context | **CLOSED** | Caps ambient skills at 2.4K chars; keeps authority eager, skills lazy via `load_skill`. |
| [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) | feat(runtime-api): bounded MCP server config & lifecycle | **OPEN** | Adds `POST/DELETE /v1/apps/mcp/servers`; removes need to edit TOML directly. |

---

## 5. Feature Request Trends
1. **Multi-provider credential management** — #5250 (separate API keys per provider) is the clearest ask; users routinely switch DeepSeek/GLM/OpenModel.
2. **Model-capability transparency** — #5244 demands explicit fallback warnings; silent 128K degradation is treated as a bug.
3. **Subagent runtime isolation** — #5252 (embeddable `subagent_state_root`) and #5253 (depth-ceiling enforcement) show demand for safer, embeddable delegation.
4. **MCP ecosystem integration** — #5238 (Registry discovery) + #5130 (lifecycle API) signal a push to make MCP servers first-class, discoverable tools.
5. **ACP completeness** — #5225 closes the “chat-only” gap for ACP consumers (Zed, community adapters).
6. **Build/developer experience** — #5246, #5245, #5254: contributors want fast local builds, FreeBSD support, and no redundant recompiles.

---

## 6. Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Single API key slot forces manual rotation** | #5250 (Open), user reports switching DeepSeek↔GLM daily | High |
| **Silent context-window fallback** | #5244 (Open, maintainer-filed); 1M→128K compaction without notice | High |
| **macOS “underwater” shell breaks system commands** | #4828 (Closed); forced downgrades to v0.8.67 | Medium (v0.9.0 regression) |
| **Mouse scroll hijacked by input history** | #5223 (Closed); fixed in #5234 but UX regression slipped to stable | Medium |
| **Fat-LTO + git-HEAD rebuilds kill iteration speed** | #5246, #5245 (both Closed, maintainer-filed); 682k-line crate rebuild on every commit | High (contributor friction) |
| **ACP server lacked tool execution** | #5225 (Closed); blocked Zed/community adapters | Medium |
| **Subagent depth budget bypass** | #5253 (Open); nested `max_depth` widens root ceiling | Medium (safety) |
| **Anthropic-compatible provider errors** | #4978 (Closed); intermittent 400 on `type` param | Medium |

---

*Digest compiled from GitHub data (issues/PRs updated 2026-08-06 → 2026-08-07). Links point to Hmbown/CodeWhale (the DeepSeek TUI upstream).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*