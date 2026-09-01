# AI CLI Tools Community Digest 2026-09-01

> Generated: 2026-09-01 02:41 UTC | Tools covered: 9

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

**1. Ecosystem Overview**  
The AI‑CLI landscape in 2026 is dominated by tools that expose large language models through terminal‑oriented, agent‑centric interfaces. Most projects are Rust‑ or Go‑based, provide extensible plug‑in architectures (MCP, custom providers), and are actively evolving to improve security, reliability, and cross‑platform usability. The community is converging on richer session management, standardized configuration files, and tighter integration with modern authentication protocols (e.g., PKCE, OAuth).

---

**2. Activity Comparison**

| Tool | Issues (reported/updated) | PRs (updated) | Release Status |
|------|---------------------------|---------------|----------------|
| **Claude Code** | 10 (hot issues) | 4 | v2.1.252 (stable bug‑fix) |
| **OpenAI Codex** | 10 (hot issues) | 10 | v0.152.0 (stable) + alpha pre‑releases |
| **Gemini CLI** | 10 (hot issues) | 10 | Nightly v0.59.0‑nightly.20260901 (no stable release) |
| **GitHub Copilot CLI** | 10 (hot issues) | 0 | v1.0.83‑0 (stable) |
| **OpenCode** | 10 (hot issues) | 0 | No release in last 24 h |
| **Pi** | 10 (hot issues) | 10 | No new release (nightly only) |
| **Qwen Code** | 10 (hot issues) | 10 | v0.22.3‑nightly.20260831 (nightly) |
| **DeepSeek TUI** | 10 (hot issues) | 10 | No new release (latest stable) |

*Counts are taken from the “Hot Issues” and “Key PR Progress” sections of each digest.*

---

**3. Shared Feature Directions**  

| Shared Need | Tools Demonstrating It |
|-------------|------------------------|
| **Session & workflow automation** – programmatic rename, batch diff review, persistent session snapshots | Claude Code, Qwen Code, Pi, Gemini CLI |
| **Cross‑agent / provider standardization** – unified config files (e.g., AGENTS.md), consistent skill metadata, shared provider catalogs | Claude Code, OpenAI Codex, Pi, DeepSeek TUI |
| **MCP / extension ecosystem expansion** – file‑attachment support, richer tool integrations, deferred canonical reloads | Claude Code, OpenAI Codex, Gemini CLI, Pi, DeepSeek TUI |
| **UI/UX polish** – window‑title session names, disable always‑on‑top, terminal multiplexer detection, terminal‑multiplexer‑aware prompts | Claude Code, GitHub Copilot CLI, DeepSeek TUI, Pi |
| **Security & environment hardening** – sanitising env vars, PKCE‑based auth, TLS‑inspecting proxy support | Gemini CLI, GitHub Copilot CLI, DeepSeek TUI, Pi |
| **Reliability / crash mitigation** – GPU‑process stability, session‑fork race conditions, compaction throttling, token‑budget accounting | Claude Code, OpenAI Codex, Pi, Gemini CLI, DeepSeek TUI |

These cross‑tool trends indicate a collective push toward **interoperability, robustness, and developer‑centric tooling**.

---

**4. Differentiation Analysis**  

- **Feature Focus** – *Claude Code* and *Qwen Code* prioritize **code‑centric agent orchestration** (session rename, batch diff, cross‑tool config). *OpenAI Codex* leans toward **chat‑driven coding** with Vim mode and rate‑limit awareness. *Gemini CLI* emphasizes **security and sub‑agent reliability** (env sanitisation, async DNS, Wayland support). *GitHub Copilot CLI* centers on **enterprise proxy and OAuth handling** plus terminal multiplexer support. *Pi* and *DeepSeek TUI* concentrate on **terminal UI stability, concurrency safety, and provider‑catalog modularity**. *OpenCode* focuses on **editor integration and rich media rendering**.  

- **Target Users** – Claude Code, Qwen Code, and Pi aim at **developer‑tool builders** who embed LLMs into CI/CD or internal tooling. OpenAI Codex and GitHub Copilot CLI target **broader developer audiences** using the models directly in daily coding workflows. Gemini CLI and DeepSeek TUI appeal to **systems engineers and power users** needing fine‑grained control over security, concurrency, and UI consistency. OpenCode serves **UI/UX‑focused developers** who need tight VS Code integration and media rendering.  

- **Technical Approach** – Most projects are **Rust‑based** (Pi, DeepSeek TUI, Qwen Code) for performance and safety. *Claude Code* and *OpenAI Codex* use **Go/Rust hybrids** with heavy reliance on **MCP** and **JSON‑based configuration**. *GitHub Copilot CLI* is **TypeScript/Node** oriented, reflecting its integration with GitHub’s web services. *Gemini CLI* mixes **Rust core** with **Go‑style async** patterns, while *OpenAI Codex* is **Rust** with a **Vim‑mode UI layer**. The diversity of languages mirrors the differing priorities: security‑first (Pi, DeepSeek) vs. rapid feature iteration (Claude, Qwen).

---

**5. Community Momentum & Maturity**  

- **High‑velocity projects**: **Pi**, **Qwen Code**, **Gemini CLI**, **OpenAI Codex**, and **DeepSeek TUI** each show **10 recent PRs** and **10 hot issues**, indicating active, ongoing development and rapid iteration.  
- **Moderate activity**: **Claude Code** maintains a steady stream (4 PRs, 10 issues) with a recent stable patch, suggesting a mature but less aggressive release cadence.  
- **Lower activity**: **GitHub Copilot CLI** and **OpenCode** have **no PR updates** in the last 24 h despite 10 issue discussions, implying slower evolution or heavier reliance on stable releases.  

Overall, the ecosystem is **mature** (most tools have stable releases) yet **dynamic**, with several projects pushing forward quickly through frequent PR merges and issue resolution.

---

**6. Trend Signals**  

1. **Security‑first hardening** – Stripping sensitive env vars, enforcing PKCE/OAuth flows, and sandboxing extensions are recurring themes, reflecting the industry’s shift toward zero‑trust CLI tools.  
2. **Sub‑agent and session reliability** – Issues around race conditions, compaction throttling, and session forking dominate the agenda, pointing to a maturing need for deterministic, observable agent lifecycles.  
3. **Standardized configuration** – The demand for a universal agent config (e.g., AGENTS.md) and consistent skill metadata signals a move toward **interoperable tool ecosystems** that reduce vendor lock‑in.  
4. **Cross‑platform UI consistency** – Uniform handling of terminal multiplexers, window titles, and always‑on‑top behavior across Windows, macOS, and Linux highlights a growing expectation for **seamless multi‑environment experiences**.  
5. **Token‑budget awareness** – Automatic context budgeting, compaction throttling, and usage‑normalisation requests illustrate that **cost‑efficiency** is becoming a first‑class concern for CLI AI tools.  

These signals collectively indicate that the next wave of AI‑CLI evolution will be defined by **robustness, security, and seamless multi‑modal interaction**, with community‑driven standards shaping the future direction.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills – Community Highlights (as of 2026‑09‑01)**  

---

### 1. Top Skills Ranking  
| Rank | PR (Title) | Functionality | Key Discussion Points | Status | GitHub |
|------|------------|---------------|-----------------------|--------|--------|
| 1 | **#1298 – fix(skill‑creator): run_eval.py always reports 0 % recall** | Makes `run_eval.py` correctly install the evaluation artifact as a real skill and fixes Windows stream‑reading, trigger detection and parallel‑worker bugs. | • Critical bug that skews the entire optimization loop (precision 100 % / recall 0 %).  <br>• Linked to Issue #556 (run_eval.py never triggers skills).  <br>• High‑visibility – many reproductions, community‑wide impact. | **Open** (updated 2026‑06‑23) | <https://github.com/anthropics/skills/pull/1298> |
| 2 | **#1602 – fix: resolve evaluation serialization, benchmark metrics, encoding, and script stability** | Addresses serialization of MCP results, metric calculation bugs, and cross‑platform stability across the evaluation harness. | • Prevents fabricated “tool‑error” responses that currently give 0 % scores.  <br>• Improves reliability of benchmark reports. | **Open** (updated 2026‑08‑24) | <https://github.com/anthropics/skills/pull/1602> |
| 3 | **#1367 – feat(skills): add self‑audit — mechanical verification + four‑dimension reasoning quality gate (v1.3.0)** | Introduces a universal audit step: first verify output files, then run a four‑dimensional reasoning audit (structure, documentation, examples, robustness). | • Provides a “damage‑severity” gate that catches hidden defects.  <br>• Aligns with Issue #1385 (reasoning quality gate pipeline). | **Open** (updated 2026‑07‑02) | <https://github.com/anthropics/skills/pull/1367> |
| 4 | **#1099 – skill‑creator: fix run_eval.py crash on Windows when reading from subprocess pipe** | Resolves a Windows‑only crash (`WinError 10038`) that prevented any skill from being triggered, causing 0 % recall. | • Directly tied to Issue #556; the crash made the evaluation loop unusable on Windows. | **Open** (updated 2026‑05‑24) | <https://github.com/anthropics/skills/pull/1099> |
| 5 | **#1050 – skill‑creator: fix Windows subprocess + encoding bugs** | One‑line fixes for `subprocess.Popen` (CLI is `claude.cmd`) and UTF‑8 encoding issues on Windows 11. | • Removes the “subprocess failed” warnings that blocked skill execution. | **Open** (updated 2026‑05‑24) | <https://github.com/anthropics/skills/pull/1050> |
| 6 | **#568 – feat: add ServiceNow platform skill** | A comprehensive ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, vulnerability response, security incident response, etc. | • First “platform‑specific” skill beyond generic scripting.  <br>• Addresses community request for enterprise‑grade platform support. | **Open** (updated 2026‑08‑12) | <https://github.com/anthropics/skills/pull/568> |
| 7 | **#525 – feat: add pyxel skill for retro game development** | Provides an MCP‑based skill for the Pyxel retro‑game engine (write → run‑and‑capture → inspect → iterate). | • Niche but growing interest in 8‑bit/retro game creation. | **Open** (updated 2026‑07‑15) | <https://github.com/anthropics/skills/pull/525> |
| 8 | **#1628 – Add Hivemind: Zero‑Cost Multi‑Agent Orchestration Skill** | Enables Claude Code to delegate mechanical work to headless Opencoders (free models) while staying the planner/reviewer. | • Positions Claude Code as a “orchestrator” rather than a compute‑heavy agent.  <br>• Addresses the scarcity of expensive model context. | **Open** (updated 2026‑08‑24) | <https://github.com/anthropics/skills/pull/1628> |

*The ranking reflects the breadth of community impact (bugs that break the evaluation loop, reliability of metrics, new quality‑gate capabilities, and high‑value platform/agent‑orchestration skills).*

---

### 2. Community Demand Trends  
- **Trust & Security Boundaries** – Issues #492 (security: community skills under the `anthropic/` namespace) and #228 (org‑wide skill sharing) show a strong appetite for safe, permission‑controlled skill distribution.  
- **Robust Evaluation & Quality Assurance** – Persistent problems with `run_eval.py` (Issues #556, #1099, #1050) and the need for automated quality gates (Issue #1385, PR #1367) indicate demand for reliable, automated checks that prevent “0 % recall” and ensure skill correctness.  
- **Platform‑Specific & Enterprise Skills** – Growing interest in specialized skills for ServiceNow, HPC (scnet‑hpc), PDF/ODT/DOCX document handling, and retro game development (pyxel) reflects a desire for industry‑tailored assistants.  
- **Multi‑Agent Orchestration & Cost‑Efficiency** – Proposals such as Hivemind (Issue #1628) and self‑audit pipelines (PR #1367) reveal a trend toward off‑loading work to cheaper, headless agents and adding safety layers before delivery.  
- **Contribution & Documentation Clarity** – Issues #202 (skill‑creator best practice), #189 (duplicate skill installation), #12 (whitespace/formatting) and #509 (CONTRIBUTING.md) underline a need for clearer contribution guidelines and cleaner skill files.  

**Overall trend:** The community is most eager for **trustworthy, high‑quality skill evaluation and governance mechanisms** that can be applied across all skill categories.

---

### 3. High‑Potential Pending Skills (active‑comment PRs likely to merge soon)  

| PR | Why it’s high‑potential | Status |
|----|------------------------|--------|
| **#1628 – Hivemind: Zero‑Cost Multi‑Agent Orchestration** | Introduces a novel delegation model that directly answers the community’s desire for cost‑efficient multi‑agent workflows. | Open |
| **#1367 – Self‑Audit (mechanical + 4‑dim reasoning gate)** | Provides a universal quality‑gate that aligns with the “reasoning quality gate pipeline” discussed in Issue #1385; likely to be merged as a core capability. | Open |
| **#1099 – Windows subprocess crash fix** | Critical Windows compatibility issue that blocks many users; the fix is simple and high‑impact, making it a priority for inclusion. | Open |
| **#1050 – Windows subprocess & encoding bugs** | Complements #1099; resolves additional Windows‑specific failures that still impede skill execution. | Open |
| **#1602 – Evaluation serialization & metric stability** | Addresses hidden bugs that cause fabricated tool errors and 0 % benchmark scores; essential for reliable skill assessment. | Open |
| **#568 – ServiceNow platform skill** | Broad enterprise demand for a first‑class ServiceNow assistant; the PR is well‑scoped and likely to be merged to fill a gap in the skill catalog. | Open |
| **#525 – Pyxel retro‑game skill** | Niche but enthusiastic community interest; the skill adds a concrete use‑case for Python‑based game development. | Open |

*These PRs have recent activity, clear community relevance, and no major blockers reported, suggesting they may be merged in the near term.*

---

### 4. Skills Ecosystem Insight  
**The community’s most concentrated demand is for reliable, automated evaluation and quality‑gate mechanisms that guarantee skill correctness and trustworthiness across the entire Claude Code skill ecosystem.**

---

**Claude Code Community Digest – 2026‑09‑01**

---

### 1. Today's Highlights
- The latest patch **v2.1.252** landed, fixing Bash‑command swap errors on macOS, restoring “always allow” persistence, and preventing Remote Control sessions from stalling.  
- Community discussion remains heated around standardizing agent configuration via **AGENTS.md** (Issue #6235, 389 comments, 5k + 👍) and a spate of Windows‑specific stability bugs (GPU crash, always‑on‑top window, Bash backslash loss).  
- Open feature requests continue to cluster on session‑management improvements, cross‑agent metadata standards, and richer MCP integrations.

---

### 2. Releases
**v2.1.252** – *Bug‑fix release*  
- Fixed Bash commands failing with “task output swap refused (tasks dir moved or linked)” on some Macs.  
- Fixed “always allow” not saving when a project lacks a `.claude/settings.local.json` file.  
- Fixed Remote Control sessions hosted by Claude Desktop or VS Code stalling for minutes.  
[Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.252)

---

### 3. Hot Issues (10 picks)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | **Feature Request: Support AGENTS.md** | Calls for a universal agent‑configuration file to improve interoperability with Codex, Amp, Cursor, etc. | 389 comments, 5 094 👍 – strongest signal of demand for cross‑tool standards. |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows Desktop app GPU‑process crash** | Fatal crash in Electron/Chrome GPU process leaves the MSIX package unlaunchable until repair. | 88 comments, 15 👍 – blocks daily use on Windows 11 with RTX 2080. |
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | **Always‑on‑top window (Windows 11)** | No setting to disable the topmost behavior, interfering with workflow. | 51 comments, 117 👍 – high‑visibility UI annoyance. |
| [#69044](https://github.com/anthropics/claude-code/issues/69044) | **Recurring errors (user feedback, German)** | Long‑term diary of failure patterns; indicates systemic reliability gaps. | 31 comments, 0 👍 – valuable qualitative signal despite low engagement. |
| [#31888](https://github.com/anthropics/claude-code/issues/31888) | **Batch diff review mode** | Request to show all changes together before approval (like Cursor’s native agent). | 18 comments, 50 👍 – reflects desire for safer, bulk code‑review workflows. |
| [#29355](https://github.com/anthropics/claude-code/issues/29355) | **Programmatic session rename** | Enables automation (e.g., renaming from ticket IDs) beyond manual `/rename`. | 15 comments, 92 👍 – strong interest in session‑management tooling. |
| [#81658](https://github.com/anthropics/claude-code/issues/81658) | **Cross‑platform sync failure (Cowork chats disappear)** | Suspected server‑side incident causing loss of conversations across Desktop/Web/Android. | 14 comments, 4 👍 – raises concerns about data durability. |
| [#28575](https://github.com/anthropics/claude-code/issues/28575) | **Gmail MCP Connector: file‑attachment support** | Missing ability to attach files when drafting/sending via Gmail MCP. | 11 comments, 33 👍 – highlights demand for richer MCP tool coverage. |
| [#88490](https://github.com/anthropics/claude-code/issues/88490) | **Cowork OTLP telemetry missing identity attributes** | Sessions export telemetry without user/account/org IDs, breaking observability. | 7 comments, 19 👍 – impacts enterprise monitoring and compliance. |
| [#87500](https://github.com/anthropics/claude-code/issues/87500) | **Persistent API Connection‑dropped error (Windows)** | Repeated `ECONNRESET` renders the client unusable for extended periods. | 7 comments, 0 👍 – underscores networking reliability pain points. |

---

### 4. Key PR Progress (4 updated in last 24 h)

| PR | Summary |
|----|---------|
| [#75541](https://github.com/anthropics/claude-code/pull/75541) | `fix(sweep): paginate issue events and honor unlabeled when closing expired issues` – improves the automated issue‑cleanup script to avoid prematurely closing unlabeled issues. |
| [#75537](https://github.com/anthropics/claude-code/pull/75537) | `fix(hook-development): recognize all five hook handler types` – updates hook‑development docs/validator to cover the full set of handler types Claude Code supports. |
| [#75529](https://github.com/anthropics/claude-code/pull/75529) | `docs(code-review plugin): clarify relationship to bundled /code-review skill` – disambiguates the external plugin from the built‑in skill and namespaces its command. |
| [#89404](https://github.com/anthropics/claude-code/pull/89404) | `validate-agent.sh: don't abort at the first warning (set -e + ((x++))) and stop false‑flagging valid agents` – makes the agent‑validation script more tolerant of warnings, reducing false positives for plugin authors. |

*No additional PRs were updated in the last 24 h; the above represent all recent PR activity.*

---

### 5. Feature Request Trends
From the enhancement‑tagged issues, the community’s top‑requested directions are:

1. **Session & workflow automation** – programmatic rename, rename‑session tool, showing active session in OS title, batch diff review.  
2. **Cross‑agent standardization** – adoption of AGENTS.md as a universal configuration file.  
3. **MCP ecosystem expansion** – file‑attachment support in Gmail, broader third‑party tool integrations.  
4. **UX polish** – window‑title session name, disabling always‑on‑top, restoring chat scroll position, fixing auto‑scroll on message send.  
5. **Observability & reliability** – proper identity attributes in Cowork OTLP telemetry, stable API connections, deterministic sandbox behavior.

These trends signal a push toward making Claude Code more **scriptable, interoperable, and transparent** in team environments.

---

### 6. Developer Pain Points
Recurring frustrations visible in the issue tracker:

- **Platform‑specific stability** – Windows GPU crashes, always‑on‑top window, Bash backslash stripping, and macOS sandbox/permission errors (EPERM in `~/Documents`, read‑only `~/.claude` bind‑mounts).  
- **Data & sync reliability** – intermittent Cowork telemetry loss, cross‑platform conversation disappearance, session list emptiness on VS Code with mapped/network drives.  
- **Toolchain brittleness** – Bash tool mishandling environment variables with newlines, scheduled‑task sessions wedging mid‑tool‑call, API connection drops requiring client restarts.  
- **Observability gaps** – missing identity attributes in exported telemetry hinder debugging and compliance monitoring.  
- **Workflow friction** – lack of bulk diff review, manual‑only session renaming, no built‑in way to persist UI preferences (e.g., always‑allow, window‑topmost).

Addressing these areas—particularly cross‑platform robustness, reliable sync, and richer automation hooks—will likely yield the highest impact for the Claude Code developer base.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-01

## Today's Highlights

The 0.152.0 release lands with notable Vim-mode enhancements (`/`, `?` search, `n`/`N` repeat navigation) and actionable rate-limit banners, but it coincides with a major Windows desktop regression: a wave of reports shows `code-mode host exited during handshake` breaking `gpt-5.6-sol/terra/luna` tool execution across multiple Desktop builds. Several long-standing frustrations also surface — particularly stale MCP OAuth refresh-token handling (#17265, 60 👍) and a Windows-only update flow that leaks PSModulePath between pwsh and powershell.exe (#27117).

## Releases

**rust-v0.152.0** ([release](https://github.com/openai/codex/releases/tag/rust-v0.152.0))
- Vim mode gains `/` and `?` searches within drafts with highlighted matches and `n`/`N` repeat navigation (#41586)
- Rate-limit banners now expose inline actions: check usage, manage credits, reset limits, and manage plans (#41742)
- Terminal UI and `codex exec` shell improvements (PR truncated in source)

**rust-v0.152.0-alpha.7.2** ([release](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.7.2)) — Pre-release iteration toward 0.152.0.

**rust-v0.152.0-alpha.7** ([release](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.7)) — Earlier pre-release of the 0.152.0 line.

## Hot Issues

1. **#41049 — code-mode host exited during handshake; gpt-5.6 broken (44 comments)** — Highest-volume Windows desktop regression, blocking all tool calls for ChatGPT Pro 20x users. Multiple related issues likely represent the same root cause. [link](https://github.com/openai/codex/issues/41049)
2. **#17265 — MCP OAuth refresh tokens never auto-refreshed (35 comments, 60 👍)** — A persistent bug from April; routed MCP servers persist `refresh_token` but Codex never uses it, so every call fails after token expiry. High community weight. [link](https://github.com/openai/codex/issues/17265)
3. **#27117 — Windows standalone update leaks pwsh PSModulePath into powershell.exe (26 comments, 18 👍)** — Concrete environment-leakage bug affecting `Get-FileHash` and other PowerShell tooling during the standalone updater flow. [link](https://github.com/openai/codex/issues/27117)
4. **#41290 — Windows/WSL project create/delete broken after switching Agent Environment (20 comments)** — New regression in 26.825.31414; toggle WSL on, and basic project operations fail. [link](https://github.com/openai/codex/issues/41290)
5. **#32759 — gpt-5.6 Sol cannot run shell commands on macOS 26.5.2 (19 comments)** — Companion to #41049 but macOS-side; confirms the handshake failure is cross-platform. [link](https://github.com/openai/codex/issues/32759)
6. **#40798 — Windows Desktop 26.820.7780.0: GPT-5.6 Sol Ultra tool calls fail while GPT-5.5 works (14 comments)** — Clean A/B comparison pointing squarely at the 5.6 tool-mode stack. [link](https://github.com/openai/codex/issues/40798)
7. **#41513 — Windows pets become click-through and undraggable (13 comments)** — Pet window on top loses interaction; affects both built-in (Codey) and custom pets. [link](https://github.com/openai/codex/issues/41513)
8. **#39678 — Remote (Android → macOS): "No project" chat hits trust error (13 comments, 10 👍)** — Cross-device session fails before the user even picks a project. [link](https://github.com/openai/codex/issues/39678)
9. **#38417 — Linux/WSL2: `codex-code-mode-host` 0.147.0 SIGTRAP on every shell exec (10 comments)** — Hard crash downgraded in 0.146.1; strong bisect data. [link](https://github.com/openai/codex/issues/38417)
10. **#40858 — Native subagent ignores explicit `model_provider` override (8 comments, 4 👍)** — Configuration semantics bug: `model` override works, `model_provider` doesn't. [link](https://github.com/openai/codex/issues/40858)

## Key PR Progress

1. **#41953 — Enforce marketplace source policy for curated plugins** — Extends marketplace source restrictions to curated plugins backed by the OpenAI plugins repo. [link](https://github.com/openai/codex/pull/41953)
2. **#41950 — Improve tracing for nested tool calls and exec processes** — Preserves execution context across code-mode callbacks so async child spans trace correctly. [link](https://github.com/openai/codex/pull/41950)
3. **#41949 — Add `plugin/reconcile` JSON-RPC app-server API** — Synchronizes installed remote plugin bundles and reports MCP/Apps/hooks/skills refresh hints. [link](https://github.com/openai/codex/pull/41949)
4. **#41944 — Emit `codex.turn.cost_microusd` telemetry for ChatGPT sessions** — Surfaces per-turn cost estimates when nonnegative and visible to the workspace. [link](https://github.com/openai/codex/pull/41944)
5. **#41941 — Add Vim undo to the TUI composer** — Bounded, draft-level undo that restores attachments, mentions, and deferred paste payloads. [link](https://github.com/openai/codex/pull/41941)
6. **#41938 — Clarify resume guidance in exit summaries** — Prints the exact `codex resume <thread-id>` and explains picker selection when a thread is named. [link](https://github.com/openai/codex/pull/41938)
7. **#41936 — Attach failed Guardian reviews to diagnostic reports** — Captures reviewed action, decision, status, model, and reviewer history for bug reports. [link](https://github.com/openai/codex/pull/41936)
8. **#41933 — Report configured sandbox policy consistently** — Labels sandbox diagnostics from configured writable roots rather than filesystem-aware runtime roots. [link](https://github.com/openai/codex/pull/41933)
9. **#41931 — Increase Guardian message transcript limits (10K→20K tokens, per-msg 2K→5K)** — Allows Guardian to reason over longer threads. [link](https://github.com/openai/codex/pull/41931)
10. **#41924 — Record realtime conversation history in Core** — Moves segmentation, session boundaries, and backing-agent promotion into Core so every host records consistently. [link](https://github.com/openai/codex/pull/41924)

## Feature Request Trends

- **Skill metadata parity with other agents** — `disable-model-invocation` in `SKILL.md` is becoming standard (Claude Code, Cursor, Pi); Codex still relies on `agents/openai.yaml`. (#29989, 37 👍)
- **GitHub connector robustness** — Public GraphQL API breakage (`fullDatabaseId`) demonstrates need for a connector compatibility layer. (#41433, 6 👍)
- **Spreadsheet / workspace plugin parity in CLI** — Plugins enabled in Desktop aren't loaded in CLI. (#34270)
- **Cross-platform pet UX** — Floating pets need predictable hit-testing and z-order behavior. (#41513)
- **Subagent configuration clarity** — Explicit, consistent overrides for `model` AND `model_provider` in native subagents. (#40858)

## Developer Pain Points

- **Windows desktop is the dominant pain surface this week.** A single root-cause symptom — `code-mode host exited during handshake` — appears in 8+ issues (#41049, #32759, #40798, #40913, #40943, #41059, #41088, #41241, #41253, #41255, #41381, #41507, #40899), blocking gpt-5.6-sol/terra/luna from running shell tools.
- **Stale MCP/Notion OAuth tokens silently break integrations.** Codex persists `refresh_token` but neither refreshes it nor prompts re-auth (#17265, #13956), leaving the user with a configured but unusable MCP.
- **Shell exec latency regression on Windows** — median jump from ~1.7s (0.146.0) to ~18.4s (0.151.0-alpha) measured across 10 months of rollouts. (#41942)
- **WSL/Windows agent-environment reliability** — Project creation/removal and `AbsolutePathBuf` deserialization failures after toggling Agent Environment. (#41290, #41463)
- **PowerShell environment leakage** — Standalone updater spawns `powershell.exe` from `pwsh` and inherits PowerShell 7's `PSModulePath`, breaking `Get-FileHash`. (#27117)
- **Session/persistence integrity on Windows Desktop** — Resuming long threads restores old messages or stalls paginated history due to reused rollout ordinals. (#35431, #41657)
- **Silent app closes and broken sidechat** — Recurring Windows crash-on-completion patterns. (#23814, #41845)
- **Pets broken on Windows** — Click-through floating windows make the feature effectively unusable. (#41513)
- **Cross-device trust flow** — Remote (Android→macOS) "No project" sessions fail trust checks before any work begins. (#39678)
- **Linux/WSL2 hard crashes** — `codex-code-mode-host` 0.147.0 SIGTRAPs on every shell exec; clean bisect to one offset. (#38417)

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-01

## 1. Today's Highlights
The nightly **v0.59.0-nightly.20260901** ships a batch of security hardening and reliability fixes—most notably stripping execution-affecting `GIT_*` environment variables, guarding output truncation against negative budgets, and preventing background Git operations from hijacking stdin. Meanwhile, the issue backlog shows sustained focus on **subagent reliability** (MAX_TURNS recovery, generalist-agent hangs, skill adoption) and **Auto Memory quality** (redaction timing, low-signal session retries, invalid patch handling).

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.59.0-nightly.20260901.g0bd1d4397](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260901.g0bd1d4397) | Nightly | Automated version bump; includes merged fixes for env-var sanitization, truncation guards, DEBUG normalization, and docs corrections (see PRs below). |

## 3. Hot Issues (Top 10 by Community Signal)
| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports **GOAL success after hitting MAX_TURNS** | Masks real failures; breaks trust in delegation | 13 comments, 2 👍 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** on simple tasks | Blocks core workflow; workaround = disable subagents | 8 comments, 8 👍 — P1, high pain |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity** via zero-dep sandboxing | Strategic: align tooling with Gemini 3’s native POSIX strengths | 8 comments, 1 👍 — P2, large effort |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads/search/mapping** assessment | Could cut turns & token noise significantly | 7 comments, 1 👍 — P2, epic tracking |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Model **rarely uses custom skills/sub-agents autonomously** | Undermines extensibility investment | 6 comments — P2, needs retest |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory redaction happens post-context** | Secrets already in model context before redaction | 5 comments — P2, security |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command **stuck at “Waiting input” after completion** | Frequent false hangs on trivial commands | 4 comments, 3 👍 — P1, medium effort |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent lacks session takeover/lock recovery** | Persistent profile locks kill automation | 4 comments — P3, feature |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux/Wayland users blocked | 4 comments, 1 👍 — P1, needs info |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | **Symlinked agent files not recognized** | Breaks dotfile/shared-config workflows | 4 comments — P3, needs info |

## 4. Key PR Progress (Top 10 by Impact)
| # | PR | Area | Summary |
|---|----|------|---------|
| [#29008](https://github.com/google-gemini/gemini-cli/pull/29008) | Security | **Strip `GIT_*` env vars** in `getSafeGitEnv` — prevents `.env`-injected Git config from hijacking operations. |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | Extensions | **Consent prompt for env changes**; sanitize runtime-altering vars in MCP server spawns. |
| [#28866](https://github.com/google-gemini/gemini-cli/pull/28866) | Core | **Ignore `.gemini` folder by default** in file search/watch — avoids chokidar noise in home dir. |
| [#29022](https://github.com/google-gemini/gemini-cli/pull/29022) | Tool | **Retain `ask_user` questions in text history** (opt-in via `ui.keepAskUserQuestionsInHistory`). |
| [#29017](https://github.com/google-gemini/gemini-cli/pull/29017) | Extensions | **Dedupe symlinked/junctioned skill dirs** — fixes Windows junction & POSIX symlink duplicates. |
| [#29009](https://github.com/google-gemini/gemini-cli/pull/29009) | Docs | **Correct env-var redaction setting keys** to match actual schema/code. |
| [#29004](https://github.com/google-gemini/gemini-cli/pull/29004) / [#28995](https://github.com/google-gemini/gemini-cli/pull/28995) | Core | **Guard `formatTruncatedToolOutput` against non-positive `maxChars`** — prevents output inflation/duplication. |
| [#29005](https://github.com/google-gemini/gemini-cli/pull/29005) | Sandbox | **Normalize `DEBUG` env var truthiness** — prevents `"false"`/`"0"` from enabling debug ports/inspect. |
| [#29120](https://github.com/google-gemini/gemini-cli/pull/29120) | Core | **Async DNS validation & Undici connector** for web fetch — safer outbound routing. |
| [#29148](https://github.com/google-gemini/gemini-cli/pull/29148) | CLI | **Prevent background Git ops from hijacking stdin** — fixes credential/passphrase prompts in extension updates. |

## 5. Feature Request Trends
1. **Subagent maturity** — Autonomous skill/subagent adoption (#21968), trajectory visibility (#22598), MAX_TURNS honesty (#22323), and settings propagation (#22267).
2. **AST-aware tooling** — Precision reads, symbol navigation, and codebase mapping to reduce token spend (#19873, #22745, #22746).
3. **Persistent, file-based task tracking** — Replace in-context `WriteToDo` with CRUD task files (#18836, #21000).
4. **Browser agent hardening** — Wayland support (#21983), session takeover (#22232), config respect (#22267).
5. **Auto Memory quality** — Deterministic pre-context redaction (#26525), invalid patch quarantine (#26523), low-signal backoff (#26522).
6. **Security-by-default** — Env sanitation (#29008, #28863), config ACL checks (#29115), NTFS short-name mitigation (#29116).

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent hangs**: Generalist agent stalls (#21409), shell “awaiting input” false positives (#25166), browser Wayland crashes (#21983).
- **Subagent opacity**: No trajectory in `/chat share` (#22598), bug reports omit subagent context (#21763), skills ignored unless explicitly invoked (#21968).
- **Config friction**: Symlinked agents not loaded (#20079), browser agent ignores `settings.json` (#22267), docs drift from actual flags (#29013, #29011).
- **Token/context bloat**: Large file reads firehose context; “Tactful Extraction” still unimplemented (#19561).
- **Platform gaps**: NTFS short-name bypasses (#29116), system config permission checks missing (#29115), DEBUG env misinterpretation (#29005).

---

*Generated from `google-gemini/gemini-cli` GitHub data (issues updated 2026-09-01, PRs updated 2026-09-01).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-09-01

---

## 1. Today's Highlights
The Copilot CLI ecosystem is addressing critical stability and compatibility issues following recent version updates. Version v1.0.83-0 introduces essential HTTPS proxy improvements and enhanced terminal multiplexer support, while multiple critical bugs are being actively tracked around MCP initialization, OAuth proxy support, and session management reliability.

## 2. Releases

### v1.0.83-0 (Latest)
- **Added**: Automatic HTTPS proxy mTLS client certificate support for model and web requests
- **Enhanced**: Detection of the herdr terminal multiplexer (previously confused with tmux), fixing Kitty keyboard protocol, color scheme following, terminal progress, `/copy` functionality, and notifications in herdr panes

---

## 3. Hot Issues (Top 10)

1. **[#4525] MCP initialization failure** - Critical bug where v1.0.81-1 sends legacy `initialize` after successful modern `server/discover`, causing -32022 error with Python MCP SDK 2.0.0. Community notes show 3 comments with no upvotes, indicating developer urgency.

2. **[#4671] OAuth proxy regression** - v1.0.81 breaks OAuth authentication behind TLS-inspecting HTTP proxies, a critical enterprise feature that worked in v1.0.80. Has 1 upvote, highlighting the impact on corporate environments.

3. **[#4672] /model command regression** - BYOK model configuration via environment variables breaks the `/model` command starting v1.0.81-82, affecting Azure AI Foundry users who host multiple models.

4. **[#4663] Unbounded compaction retries** - Failed model compaction requests are retried unchanged on every turn, causing monotonic context growth and billing without user-visible errors. Identified as a significant performance and cost issue.

5. **[#4674] Session restoration regression** - Resuming sessions no longer restores custom agent configurations (MCP servers and tool allow-lists), silently reverting sessions to default settings. Cross-referenced with issue #917.

6. **[#4664] Memory exhaustion on session resume** - JavaScript heap out of memory crashes when loading large/long-standing sessions, preventing continuation of work. Critical stability issue for power users.

7. **[#4668] Silent session duplication** - Interrupted `create_session` tool calls still create sessions ~1.6 hours later, causing duplicated agent work despite agent-side failure handling.

8. **[#4678] ACP startup blocking** - In ACP mode, `session/new` blocks for 192 seconds due to unbounded MCP server connection retries, creating poor user experience with unresponsive servers.

9. **[#4666] GitHub hostname display inconsistency** - Footer shows different account formats across different GitHub instances (GHE vs GitHub.com), creating confusion for users on custom domains.

10. **[#4665] Context duplication in agents** - `sessionStart` additionalContext is duplicated on every turn and passed to subagents, causing unnecessary token consumption and unexpected behavior.

---

## 4. Key PR Progress
**None reported** in the last 24 hours.

---

## 5. Feature Request Trends

### Context Management
- **Always visible context window status** - Multiple requests for persistent context usage indicators to help users monitor token consumption before performance degradation
- **Improved session restoration** - Comprehensive restoration of custom agent configurations when resuming sessions

### Network & Proxy Support  
- **HTTPS proxy mTLS support** - Growing demand for enterprise network compatibility with modern proxy infrastructures
- **TLS-inspecting proxy OAuth support** - Critical need for corporate environments using man-in-the-middle security proxies

### Developer Experience
- **Better error visibility** - Requests for clearer feedback when compaction fails, rather than silent retries
- **Enhanced terminal multiplexer detection** - Support for herdr and other terminal environments beyond tmux
- **Improved session startup responsiveness** - Bounded timeout mechanisms for MCP server connections

### Output & Debugging
- **Access to complete shell task output** - Need for `large_output_file_path` exposure to read full shell task results beyond small rolling windows
- **GitHub hostname consistency** - Unified display format across different GitHub Enterprise and cloud instances

---

## 6. Developer Pain Points

### Critical Stability Issues
1. **Memory Management** - Heap exhaustion when loading large sessions creates hard crashes
2. **Unbounded Retries** - Failed compaction requests loop endlessly, driving up costs and consuming tokens
3. **Silent Session Creation** - Interrupted operations still complete asynchronously, causing confusion and duplication

### Enterprise Integration
1. **Proxy Compatibility** - OAuth authentication breaks behind TLS-inspecting proxies, a common corporate setup
2. **BYOK Configuration** - Model selection commands fail when using environment-based model configuration
3. **Network Discovery** - OAuth metadata discovery fails for MCP servers with path components in authorization URLs

### Session Management
1. **State Restoration** - Custom agent configurations aren't restored when resuming sessions
2. **Context Visibility** - Users lack clear indicators of context window usage until it's too late
3. **Startup Performance** - Session creation can be delayed 192 seconds by unresponsive MCP servers

### Output & Visibility
1. **Limited Shell Output** - Recent output windows provide only partial visibility into long-running tasks
2. **Inconsistent Account Display** - Different formats for the same logical account across different GitHub instances
3. **Hidden Failures** - No user-visible indication when critical operations like compaction fail

These pain points represent significant friction for enterprise users and power users who rely on the Copilot CLI for complex workflows and integrations.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑09‑01**  

---

### 1. Today’s Highlights  
- The community is rallying around richer editor integrations (VS Code diff preview) and richer media support (inline SVG/HTML rendering) as top‑voted feature requests.  
- Stability work continues: a new experimental desktop browser pane, fixes for Windows‑specific hangs, and a patch to preserve global‑project sessions in the Web UI were all merged or opened today.  

---

### 2. Releases  
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#8003](https://github.com/anomalyco/opencode/issues/8003) | **VS Code Integration for Reviewing OpenCode Code Changes (Diff Preview)** | Provides a much‑needed GUI diff view for large file changes, easing code review workflows. | 17 comments, **81 👍** – strong demand for tighter IDE integration. |
| [#25076](https://github.com/anomalyco/opencode/issues/25076) | **render SVG/HTML artifacts inline in chat** | Enables visual preview of generated diagrams/web snippets without leaving the chat, boosting productivity for UI‑centric tasks. | 3 comments, **5 👍** – recurring request for richer output rendering. |
| [#34675](https://github.com/anomalyco/opencode/issues/34675) | **Folders list is not appearing up in the web client** | Breaks project navigation in the Web UI, forcing users to rely on the CLI for folder selection. | 4 comments, **4 👍** – highlights a regression affecting web‑only users. |
| [#32418](https://github.com/anomalyco/opencode/issues/32418) | **Qwen3.7 Plus frequently gets stuck in retry attempts and responds very slowly** | Affects a popular model choice; slow responses degrade the interactive coding experience. | 6 comments, **4 👍** – users report noticeable latency spikes. |
| [#14175](https://github.com/anomalyco/opencode/issues/14175) | **Allow bypassing google-auth-library for google-vertex-anthropic via bearer token** | Simplifies authentication for Vertex Anthropic in environments where Google ADC is unavailable or undesirable. | 9 comments, **3 👍** – valuable for enterprise/cloud‑native setups. |
| [#13318](https://github.com/anomalyco/opencode/issues/13318) | **Keep getting rate limited on Zen** | Rate limits on the Zen provider hinder sustained usage, especially for power users on paid plans. | 11 comments, **2 👍** – pain point for heavy‑usage scenarios. |
| [#33632](https://github.com/anomalyco/opencode/issues/33632) | **Bug Report: Crash when including a file with @filename** | The `@filename` include mechanism crashes under certain directory sizes, breaking context‑building workflows. | 6 comments, **1 👍** – blocks a core feature for large codebases. |
| [#35035](https://github.com/anomalyco/opencode/issues/35035) | **OpenCode Go hangs forever after "build" on Windows (v1.17.13)** | Stalls the agent after a build step, requiring a forced restart and losing session state. | 4 comments, **0 👍** – Windows‑specific reliability issue. |
| [#34198](https://github.com/anomalyco/opencode/issues/34198) | **TUI rendering corruption on paste - regression since v1.16.2 (Window)** | Pasting text or images corrupts the terminal UI, making the interface unusable until restart. | 4 comments, **0 👍** – regressions in the TUI affect daily interaction. |
| [#34903](https://github.com/anomalyco/opencode/issues/34903) | **Bug Report: DeepSeek V4 Flash and Pro via opencode-go broken** | A widely used model provider returns 503 errors, cutting off access to a high‑performance model. | 3 comments, **2 👍** – urgent provider‑side degradation. |

---

### 4. Key PR Progress  

| # | PR | Summary & Impact |
|---|----|------------------|
| [#44838](https://github.com/anomalyco/opencode/pull/44838) | **feat(browser): add experimental desktop browser** | Introduces a side‑panel browser within the desktop app, letting agents inspect web pages without leaving the IDE. |
| [#46523](https://github.com/anomalyco/opencode/pull/46523) | **fix(desktop): stabilize bundled dev and process exit** | Addresses a lazy‑loading bug that could cause the desktop client to crash on exit; improves overall stability. |
| [#46487](https://github.com/anomalyco/opencode/pull/46487) | **feat(core): register tool namespaces** | Adds namespace registration for tools, enabling better organization and avoiding name collisions in plugin ecosystems. |
| [#46520](https://github.com/anomalyco/opencode/pull/46520) | **fix(app): show global-project sessions in web Home** | Resolves #46444 by ensuring sessions created outside git repos appear in the Web UI home page. |
| [#46513](https://github.com/anomalyco/opencode/pull/46513) | **feat(session-ui): preview images in read tool results** | Makes image outputs from the `read` tool expandable inline, improving visual feedback for multimodal workflows. |
| [#46512](https://github.com/anomalyco/opencode/pull/46512) | **feat(core): add firecrawl developer search provider** | Adds a second Firecrawl provider scoped to developer‑focused content (GitHub issues, PRs, docs). |
| [#41016](https://github.com/anomalyco/opencode/pull/41016) | **fix(provider): forward agent temperature for config-defined custom models** | Ensures temperature settings are respected for custom models defined in `opencode.json`, fixing silent drops. |
| [#42746](https://github.com/anomalyco/opencode/pull/42746) | **fix(provider): don't crash Provider.list when Cloudflare token missing** | Prevents a crash when Cloudflare AI Gateway vars are set without an API token, enhancing robustness. |
| [#46501](https://github.com/anomalyco/opencode/pull/46501) | **fix(opencode): request summaries in Bedrock GPT-5 variants** | Adds reasoning‑summary fields to Bedrock GPT‑5 calls, aligning with newer model capabilities. |
| [#46084](https://github.com/anomalyco/opencode/pull/46084) | **fix(ai): reconcile final response calls by call id** | Fixes mismatched function‑call handling for certain OpenAI‑compatible providers, reducing argument‑loss errors. |

---

### 5. Feature Request Trends  
- **IDE Integration** – VS Code diff preview and broader editor hooks (e.g., folder picker, web‑client improvements) top the vote count.  
- **Rich Media Output** – Requests to render SVG/HTML, images, and other artifacts directly in chat continue to surface.  
- **Authentication Flexibility** – Bypassing Google ADC, supporting Azure AD/OAuth, and simplifying token‑based auth for custom providers are recurring themes.  
- **Error‑Handling & Diagnostics** – Calls for readable error messages when custom tool plugins fail, and better logging for rate‑limit or provider failures.  
- **Model‑Specific Controls** – Forwarding agent‑level parameters (temperature, reasoning summaries) to custom and provider‑defined models.  

---

### 6. Developer Pain Points  
- **Rate Limiting & Provider Stability** – Frequent hits on Zen and DeepSeek providers cause throttling and 503 errors, disrupting long sessions.  
- **Windows‑Specific Reliability** – UI hangs after build steps, TUI corruption on paste, and startup‑screen JSON glitches hinder Windows adoption.  
- **Context Management Crashes** – The `@filename` include mechanism fails under certain directory sizes, breaking a core workflow.  
- **Web‑UX Gaps** – Missing folder lists in the Web UI and duplicate session creation impair the web‑based experience.  
- **Performance on Large Files** – Slow `read` operations on multi‑megabyte files and renderer freezes when diffing large documents affect productivity.  

---  

*Generated for developers tracking OpenCode’s evolution. All links point to the respective GitHub items.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-09-01

## Today's Highlights
The Pi community is actively addressing a critical class of post-run lifecycle bugs, with a new PR settling active turns before in-memory forks to prevent data races. Meanwhile, the extension ecosystem is expanding rapidly, with new providers like CoralBricks and Melious being added, alongside improvements to how extensions interact with the host runtime, such as deferred canonical reloads and better handling of queued agent messages.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues
1.  **TUI Row Corruption During Streaming (#8584)** — A high-impact rendering bug where assistant text gets scattered one word per line after long tool outputs. With 25 comments and 9 👍, it’s the most discussed issue, pointing to a deep TUI streaming vulnerability.
    *   [earendil-works/pi Issue #8584](https://github.com/earendil-works/pi/issues/8584)
2.  **AgentSession Settlement/Continuation Bugs (#5886)** — A meta-issue tracking recurring failures where post-run logic attempts to continue from a corrupted transcript. This is a foundational problem affecting agent reliability across sessions.
    *   [earendil-works/pi Issue #5886](https://github.com/earendil-works/pi/issues/5886)
3.  **Plain-HTTP Provider Hangs via Forward Proxy (#8134)** — Sessions against OpenAI-compatible providers over plain HTTP hang after the first tool call when a forward proxy is configured. This breaks specific but common network setups.
    *   [earendil-works/pi Issue #8134](https://github.com/earendil-works/pi/issues/8134)
4.  **Context Budget Ignores maxTokens Output Reservation (#8061)** — Requests are rejected at ~78% context usage because the system fails to account for output token reservations, and the automatic compact-and-retry recovery also fails. This is a serious correctness issue for long conversations.
    *   [earendil-works/pi Issue #8061](https://github.com/earendil-works/pi/issues/8061)
5.  **Auto-Compaction Never Checked Mid-Loop (#8884)** — `compaction.reserveTokens` is silently ineffective during long, uninterrupted autonomous tool-calling sessions because the threshold check is only invoked at the start and end of a run, not during the loop.
    *   [earendil-works/pi Issue #8884](https://github.com/earendil-works/pi/issues/8884)
6.  **`PI_OFFLINE` Silently Disables Model Discovery (#8684)** — The `PI_OFFLINE` flag, documented to only disable startup housekeeping, also disables all provider model-catalog network discovery, leading to unexpected behavior for users expecting offline mode.
    *   [earendil-works/pi Issue #8684](https://github.com/earendil-works/pi/issues/8684)
7.  **Parallel Startup "No API Key" Delay (#8928)** — Parallel pi instances can report "No API key found" for ~48 seconds when `auth.json` contains an expired OAuth credential for another provider, causing significant startup friction in multi-process environments.
    *   [earendil-works/pi Issue #8928](https://github.com/earendil-works/pi/issues/8928)
8.  **Credential Store Read Lock Contention (#8927)** — The `readCredential` path takes an exclusive lock for an immutable snapshot read, causing "Lock file is already being held" errors in concurrent sessions with a tight ~200ms sync-path budget.
    *   [earendil-works/pi Issue #8927](https://github.com/earendil-works/pi/issues/8927)
9.  **Bedrock Usage Normalization Failures (#8752)** — Pi fails to normalize `usage.input` across Bedrock model families, leading to false cache-miss notices and doubled input cost calculations for some models.
    *   [earendil-works/pi Issue #8752](https://github.com/earendil-works/pi/issues/8752)
10. **Branch Summarization Hardcoded Token Cap (#8845)** — `/tree` branch navigation with "Summarize" fails deterministically on large branches because `generateBranchSummary` hardcodes `maxTokens: 2048`, regardless of the actual branch size.
    *   [earendil-works/pi Issue #8845](https://github.com/earendil-works/pi/issues/8845)

## Key PR Progress
1.  **Settle Active Turn Before In-Memory Fork (#8929)** — Fixes a critical race condition in in-memory `/fork` by ensuring `teardownCurrent` is called before reusing a `SessionManager`, preventing in-flight tool turns from corrupting branched sessions.
    *   [earendil-works/pi PR #8929](https://github.com/earendil-works/pi/pull/8929)
2.  **Preserve Compaction Queued Prompts (#8908)** — Addresses a race condition where queued steering messages are incorrectly cleared but still sent after compaction, by publishing streaming continuation intent and waiting for pending preflights.
    *   [earendil-works/pi PR #8908](https://github.com/earendil-works/pi/pull/8908)
3.  **Route Mid-Loop Compaction Through Full Threshold Check (#8902)** — Ensures the compaction threshold check runs correctly during the main agent loop, not just at the start and end, fixing the issue where `reserveTokens` was ignored during long sessions.
    *   [earendil-works/pi PR #8902](https://github.com/earendil-works/pi/pull/8902)
4.  **Expose Queued Agent Message State (#8930)** — Adds `ctx.hasQueuedAgentMessages()` for extensions that need to observe custom `steer` and `followUp` messages queued directly on the Agent, distinct from the session/UI text queue.
    *   [earendil-works/pi PR #8930](https://github.com/earendil-works/pi/pull/8930)
5.  **Add CoralBricks Provider (#8925)** — Introduces CoralBricks as a built-in inference provider for open models (GLM 5.3, Kimi K3, GPT-OSS 120B) with 1M context, following the existing groq/cerebras pattern.
    *   [earendil-works/pi PR #8925](https://github.com/earendil-works/pi/pull/8925)
6.  **Add Melious Provider (#8903)** — Adds Melious as a built-in provider serving open-weight models on European infrastructure (GDPR/TTDSG compliant) via an OpenAI-compatible API.
    *   [earendil-works/pi PR #8903](https://github.com/earendil-works/pi/pull/8903)
7.  **Add Thinking-Level Overrides for Fireworks GLM 5.3 (#8931)** — Adds necessary thinking-level overrides for the newly available `glm-5p3` and `glm-5p3-flash` models on Fireworks, which are thinking-only models.
    *   [earendil-works/pi PR #8931](https://github.com/earendil-works/pi/pull/8931)
8.  **Tolerate Non-Session Entries Before Session Header (#8879)** — Fixes session discovery to tolerate metadata entries (like titles) prepended to session files, which previously caused valid sessions to be rejected.
    *   [earendil-works/pi PR #8879](https://github.com/earendil-works/pi/pull/8879)
9.  **Skip .disabled Entries in Extension Discovery (#8907)** — Fixes an inconsistency where renaming a directory to `.disabled` still loaded the extension, while renaming a file correctly stopped it.
    *   [earendil-works/pi PR #8907](https://github.com/earendil-works/pi/pull/8907)
10. **Remove Coding-Agent Config Reads from pi-tui (#8699)** — Decouples the TUI from coding-agent configuration by dropping redundant `logDirectory` fallbacks, relying instead on the agent's own config resolution.
    *   [earendil-works/pi PR #8699](https://github.com/earendil-works/pi/pull/8699)

## Feature Request Trends
*   **Extension Lifecycle Control:** Multiple requests for more control over the extension lifecycle, specifically the ability to request a deferred canonical reload (#6552) and to observe queued agent messages (#8930).
*   **Provider & Model Expansion:** A strong trend toward adding more inference providers (CoralBricks, Melious, Tencent Token Plan) and ensuring model catalogs are accurate and up-to-date (DeepSeek V4 pricing, Fireworks GLM 5.3).
*   **Enhanced Model Metadata:** Requests for richer model metadata in the selector, such as optional descriptions (#8922) and better handling of model-specific features like thinking levels (#8931).
*   **Input Modality Expansion:** A growing interest in expanding beyond text and image inputs, with a specific request for first-class video input support (#8886).
*   **UI/UX Refinements:** Numerous smaller requests for UI improvements, including word-wrapping extension statuses in the footer (#8909), fixing unreadable select dialogs in dark themes (#8934), and adding model descriptions to the selector (#8922).

## Developer Pain Points
*   **Concurrency & Race Conditions:** Developers are frequently hitting race conditions around session forking, compaction, and credential locking, leading to data corruption and unpredictable behavior in multi-session environments.
*   **Configuration & Environment Surprises:** Undocumented behavior changes, like `PI_OFFLINE` disabling model discovery (#8684) or parallel startup delays from expired credentials (#8928), cause significant debugging time.
*   **TUI Rendering & Lifecycle Bugs:** Issues like row corruption during streaming (#8584) and crashes from undefined `renderResult` (#8933) highlight fragility in the TUI's rendering and extension integration points.
*   **Catalog & Pricing Staleness:** Keeping model catalogs and pricing up-to-date is a recurring pain, with specific issues around DeepSeek's peak/off-peak pricing (#8491, #8915) and Bedrock's usage normalization (#8752) requiring manual intervention.
*   **Documentation & Link Accuracy:** Even basic documentation maintenance is a pain point, with broken links to heading anchors (#8921) and missing sections like Docker Sandboxes (#8788) requiring community contributions to fix.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑09‑01**  

---

### 1. Today’s Highlights  
- A nightly **v0.22.3‑nightly** build (2026‑08‑31) was published, bringing bug‑fixes and refinements to the web‑shell and review pipelines.  
- Community activity remains high: 50+ issues were updated in the last 24 h and dozens of PRs are under review, indicating strong ongoing development momentum.  

---

### 2. Releases  
- **v0.22.3‑nightly.20260831.3a0c4c6108** – Nightly release that incorporates the latest web‑shell UI hints, review‑engine improvements, and assorted stability patches (see release notes in `.github/release.yml`).  

---

### 3. Hot Issues (10 noteworthy)  

| # | Issue (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| 1 | **[#8432](https://github.com/QwenLM/qwen-code/issues/8432)** – Auth token sync bug for Bailian Personal Token Plan models. | Model list out‑of‑sync causes image/video generation failures for China‑Beijing users. | 7 comments, 1 👍 – active discussion, flagged as **P2 priority**. |
| 2 | **[#9281](https://github.com/QwenLM/qwen-code/issues/9281)** – `task_list` treats blank optional filters as active, returning “No tasks found”. | Breaks task orchestration when filters are unintentionally empty. | 5 comments, 0 👍 – reported as a core bug. |
| 3 | **[#9688](https://github.com/QwenLM/qwen-code/issues/9688)** – Archiving a live session can create duplicate active/archived transcripts. | Leads to inconsistent state and potential data loss. | 3 comments, 0 👍 – high‑impact session‑management bug. |
| 4 | **[#9773](https://github.com/QwenLM/qwen-code/issues/9773)** – Live‑session load may exceed the 30 s restore drain timeout. | Risks session loss during long‑running tool operations. | 3 comments, 0 👍 – follow‑up to #9704/#9705. |
| 5 | **[#9511](https://github.com/QwenLM/qwen-code/issues/9511)** – Expose `send` type on `UserPromptSubmit` payloads. | Enables richer hook handling for both user‑originated and tool‑driven prompts. | 3 comments, 0 👍 – feature request with clear use‑case. |
| 6 | **[#10641](https://github.com/QwenLM/qwen-code/issues/10641)** – Mechanism to auto‑clean the `.qwen` folder. | `.qwen` directory accumulates files, wasting disk space. | 2 comments, 0 👍 – recurring maintenance pain point. |
| 7 | **[#10638](https://github.com/QwenLM/qwen-code/issues/10638)** – Expose ready‑session artifact snapshots in Web‑Shell. | Embedding hosts need reliable, atomic snapshots after restoration. | 2 comments, 0 👍 – practical UI/UX improvement. |
| 8 | **[#10380](https://github.com/QwenLM/qwen-code/issues/10380)** – Auto‑compaction fails when gateway returns HTTP 413. | Long‑running sessions become permanently unusable behind reverse proxies. | 3 comments, 0 👍 – critical for cloud‑hosted deployments. |
| 9 | **[#8897](https://github.com/QwenLM/qwen-code/issues/8897)** – `--approval-mode` and `--auth-type` missing from `qwen --help`. | CLI usability issue; flags are validated but not documented. | 6 comments, 0 👍 – low‑effort fix, high visibility. |
|10| **[#10234](https://github.com/QwenLM/qwen-code/issues/10234)** – Allow language sync before a session exists. | Hosts wishing to set language on a welcome page cannot do so without a session. | 2 comments, 0 👍 – usability enhancement for multi‑language hosts. |

---

### 4. Key PR Progress (10 important)  

| # | PR (link) | Summary of change |
|---|-----------|-------------------|
| 1 | **[#10653](https://github.com/QwenLM/qwen-code/pull/10653)** | Publish the **Mem0 Extension** package as an external‑context feature, enabling richer memory‑driven capabilities. |
| 2 | **[#10606](https://github.com/QwenLM/qwen-code/pull/10606)** | Declutter the Web‑Shell workspace sidebar and add loopback open actions for local deployments. |
| 3 | **[#10076](https://github.com/QwenLM/qwen-code/pull/10076)** | Add HTML export for chat transcripts (`mr2a` format) – useful for documentation and archival. |
| 4 | **[#10627](https://github.com/QwenLM/qwen-code/pull/10627)** | Make the environment panel state durable; restores UI context (attachments, artifacts, subagents) reliably. |
| 5 | **[#10489](https://github.com/QwenLM/qwen-code/pull/10489)** | Persist WebShell model and reasoning preferences across daemon sessions via `model.reasoningEffort`. |
| 6 | **[#10183](https://github.com/QwenLM/qwen-code/pull/10183)** | Introduce structured on‑demand recall: a two‑level ref/title tree and query‑focused metadata for memory. |
| 7 | **[#10527](https://github.com/QwenLM/qwen-code/pull/10527)** | Stabilize the heartbeat test that was causing spurious CI failures; eliminates a race condition in the status‑heartbeat loop. |
| 8 | **[#10390](https://github.com/QwenLM/qwen-code/pull/10390)** | Unblock the “Update Project” action when the working tree is dirty; provides clear resolution paths. |
| 9 | **[#10263](https://github.com/QwenLM/qwen-code/pull/10263)** | Reload project runtime state after a `/cd` directory change, ensuring transactional refresh of settings, watches, and tools. |
|10| **[#10226](https://github.com/QwenLM/qwen-code/pull/10226)** | Add optional worktree support to the shell, allowing flexible workspace handling without full session recreation. |

---

### 5. Feature Request Trends  

- **Session & State Management** – Multiple requests focus on reliable session snapshots (`#10638`), auto‑cleanup of the `.qwen` directory (`#10641`), and language synchronization before session creation (`#10234`).  
- **Web‑Shell UI/UX** – Improvements to the sidebar (`#10606`, `#10627`), persistent environment state (`#10627`), and ready‑session artifact exposure (`#10638`) dominate the feature wishlist.  
- **Review & CI Stability** – Several PRs target CI flakiness (`#10527`) and more granular review audit shapes (`#10221`, `#10136`), indicating a strong push for more deterministic and auditable review pipelines.  
- **Tooling & Integration** – Requests for richer tool payloads (`#9511`), better CLI help (`#8897`), and optional worktree support (`#10226`) reflect a trend toward more flexible, developer‑friendly command‑line experiences.  

---

### 6. Developer Pain Points  

- **Authentication & Token Sync** – Persistent mismatches between the built‑in model list and Bailian Personal Token Plan models (`#8432`) cause generation failures.  
- **Task List Filter Handling** – Blank optional filters being treated as active (`#9281`) leads to “No tasks found” errors, breaking workflow orchestration.  
- **Session Archiving Conflicts** – Archiving a live session can recreate the active transcript, creating concurrent active/archived states (`#9688`).  
- **Restore‑Load Timeouts** – Live‑session loading may exceed the 30 s drain timeout (`#9773`), risking premature session termination.  
- **`.qwen` Directory Bloat** – Accumulated files in the `.qwen` folder (`#10641`) require manual cleanup, consuming developer time.  
- **CLI Documentation Gaps** – Missing help entries for `--approval-mode` and `--auth-type` (`#8897`) hinder discoverability and correct usage.  

*All links point to the official Qwen Code repository on GitHub.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest**  
**Date:** 2026-09-01

---

### 1. Today's Highlights
The project is aggressively converging on a stable, unified TUI experience, highlighted by a major authentication overhaul that natively integrates ChatGPT PKCE sign-in without requiring the external Codex CLI. Simultaneously, significant architectural work is underway to decouple provider catalogs from hardcoded binaries and enforce compile-time parity across the core protocol layers. The team is also actively resolving UI inconsistencies and tightening session resumption logic to ensure the Tideline shell operates as a single coherent application.

---

### 2. Releases
**No new releases** were published in the last 24 hours.

---

### 3. Hot Issues

1.  **[#5778](https://github.com/Hmbown/DeepSeek-TUI/issues/5778) [OPEN]** *Native ChatGPT/Codex subscription sign-in without the Codex CLI installed*  
    **Why it matters:** Removes a massive dependency hurdle for users. The current reliance on `~/.codex/auth.json` alienates harnesses like opencode. The community is actively seeking a browser-native PKCE flow.
2.  **[#5316](https://github.com/Hmbown/DeepSeek-TUI/issues/5316) [OPEN]** *EPIC-005: CodeWhale TUI Crate Decomposition*  
    **Why it matters:** This is the umbrella tracking issue for a major modularization effort. It signals a long-term commitment to maintainability and crate-level isolation, though it represents a massive structural shift for the codebase.
3.  **[#5755](https://github.com/Hmbown/DeepSeek-TUI/issues/5755) [CLOSED]** *Unify provider route authority across picker, readiness, runtime, API, and CLI*  
    **Why it matters:** The TUI previously suffered from "split reality," where the picker could select providers that the runtime or CLI would reject. Unifying this authority is critical for eliminating runtime errors and user confusion.
4.  **[#5772](https://github.com/Hmbown/DeepSeek-TUI/issues/5772) [CLOSED]** *Make provider selection explicit; stop implicit external CLI credential reuse*  
    **Why it matters:** A vital security and UX fix. The picker was probing disabled credential locations and silently adopting credentials without explicit consent, risking HOME/temp path leaks.
5.  **[#5605](https://github.com/Hmbown/DeepSeek-TUI/issues/5605) [OPEN]** *Flaky test: remote_control separate_predispatch_crashes_on_one_run_get_distinct_recovery_turn_ids*  
    **Why it matters:** This flakiness blocks the team's ability to run full test suites in parallel, directly impacting CI velocity and the reliability of remote control recovery logic.
6.  **[#5713](https://github.com/Hmbown/DeepSeek-TUI/issues/5713) [CLOSED]** *fix(custom): support wire = "responses" | "anthropic" for kind="openai-compatible"*  
    **Why it matters:** Unlocks compatibility with the newer Responses API and Anthropic Messages protocols, which are increasingly required for modern AI model routing.
7.  **[#5768](https://github.com/Hmbown/DeepSeek-TUI/issues/5768) [CLOSED]** *Compose and verify the Tideline shell as one coherent running TUI*  
    **Why it matters:** Addresses the integration gap where isolated UI slices (startup, composer, route rail) did not guarantee a functional whole. Ensures the binary actually composes the redesigned shell correctly.
8.  **[#5771](https://github.com/Hmbown/DeepSeek-TUI/issues/5771) [CLOSED]** *Give the active-session composer the shared [↑] send geometry*  
    **Why it matters:** A UI consistency fix. The active session composer was missing the standard rounded shell and send affordance, creating a disjointed user experience compared to the startup screen.
9.  **[#5775](https://github.com/Hmbown/DeepSeek-TUI/issues/5775) [CLOSED]** *Make Pod the canonical public roster command and vocabulary*  
    **Why it matters:** Standardizes the confusing terminology ("fleet," "pod," "roster," "sub-agents") to reduce the learning curve for new users and align documentation/CLI help.
10. **[#5767](https://github.com/Hmbown/DeepSeek-TUI/issues/5767) [CLOSED]** *Fix public website auth links that resolve to localized 404s*  
    **Why it matters:** Broken auth flows on the website due to locale prefixing (`/en/signin`). This was actively blocking new user onboarding.

---

### 4. Key PR Progress

1.  **[#5784](https://github.com/Hmbown/DeepSeek-TUI/pull/5784)** *feat(tui): native ChatGPT PKCE sign-in for openai-codex*  
    Implements the browser-based PKCE flow requested in #5778, storing refreshable tokens in Codewhale-owned storage and eliminating the Codex CLI dependency.
2.  **[#5751](https://github.com/Hmbown/DeepSeek-TUI/pull/5751)** *feat(protocol): Op/EventMsg parity + compile-enforced guard*  
    Enforces strict parity between the Rust core and TS surfaces at compile time, preventing silent drift in the protocol layer.
3.  **[#5783](https://github.com/Hmbown/DeepSeek-TUI/pull/5783)** *feat(config): catalog authority

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*