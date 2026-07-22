# AI CLI Tools Community Digest 2026-07-22

> Generated: 2026-07-22 01:47 UTC | Tools covered: 9

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
The AI‑CLI space is maturing into a rich ecosystem of specialized tools that blend large‑language‑model assistance with extensible plugin architectures, robust session management, and tighter security boundaries.  Most projects now ship frequent nightly or point‑release updates, expose detailed telemetry, and are actively hardening plugin‑infrastructure, workspace isolation, and user‑experience polish.  The community’s primary pain points revolve around session stability, tool‑call reliability, and the need for a unified, developer‑friendly plugin and permission model.

---

**2. Activity Comparison**  

| Tool (repo) | Issues (open) | PRs (merged/merged‑in) | Release status (22 Jul 2026) |
|-------------|---------------|------------------------|------------------------------|
| **Claude Code** (anthropics/claude‑code) | 10 | 10 | v2.1.217 released 22 Jul 2026 (feature + bug‑fix) |
| **OpenAI Codex** (openai/codex) | 10 | 10 | v0.145.0 released 22 Jul 2026 |
| **Gemini CLI** (google‑gemini/gemini‑cli) | 10 | 8 | v0.52.0‑nightly.20260722.gc776c665b released 22 Jul 2026 (continuous nightly) |
| **GitHub Copilot CLI** (github/copilot‑cli) | 9 | 1 | v1.0.74‑0 released 22 Jul 2026 |
| **Kimi Code CLI** (MoonshotAI/kimi‑cli) | 5 | 1 (merged) | No formal release; only nightly builds |
| **OpenCode** (anomalyco/opencode) | 10 | 10 | No new release in the last 24 h (latest 2026‑07‑22 nightly) |
| **Pi** (badlogic/pi‑mono) | 11 | 10 | v0.81.1 released 22 Jul 2026 (verifiable source archives) |
| **DeepSeek TUI** (Hmbown/DeepSeek‑TUI) | 10 | 10 | v0.9.1 candidate (release‑gate PRs merged, no public tag) |
| **Qwen Code** (QwenLM/qwen‑code) | 0 | 0 | Minimal activity; no issues or PRs reported |

*Counts are taken directly from the community digests for 22 July 2026.*

---

**3. Shared Feature Directions**  

| Shared Need | Tools Reporting It |
|-------------|--------------------|
| **Unified plugin / extension framework** (auto‑discovery, marketplace, hardened import resolution) | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi |
| **Improved session & agent reliability** (stable IDs, crash‑loop prevention, auto‑compaction, background‑agent health) | Claude Code, Gemini CLI, OpenAI Codex, Pi, DeepSeek TUI |
| **Better tool‑call & schema handling** (MCP schema validation, support for legacy models, deterministic tool‑call APIs) | Kimi Code CLI, Gemini CLI, Pi, DeepSeek TUI |
| **Enhanced UI/UX** (smooth chat rendering, copy‑friendly output, keyboard support, scroll/pagination, permission‑contract UI) | Claude Code, Gemini CLI, Kimi Code CLI, DeepSeek TUI, OpenCode |
| **Security & workspace isolation** (workspace‑trust enforcement, variable‑expansion protection, OAuth device‑code flow) | Claude Code, Gemini CLI, Pi, DeepSeek TUI |
| **Deterministic quota / rate‑limit management** (predictable weekly resets, clear billing) | OpenAI Codex, GitHub Copilot CLI, Gemini CLI |

These cross‑tool trends indicate a collective push toward **more modular, observable, and secure** CLI experiences, with a strong emphasis on **plugin ecosystems** and **session/agent robustness**.

---

**4. Differentiation Analysis**

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Pi | DeepSeek TUI |
|-----------|-------------|--------------|------------|--------------------|---------------|----------|----|--------------|
| **Primary Focus** | Plugin & TTS extensibility, code‑review workflows | Sub‑agent orchestration, sandboxed CI execution | Security‑first agent runtime, local LLM integration | GitHub‑centric MCP & plan‑mode workflows | Interactive coding & UI polish | General‑purpose notebook UI with memory‑leak debugging | Local LLM agent with verifiable releases | TUI‑centric workflow engine, permission contracts |
| **Target Users** | Developers building extensions, reviewers, power users of the Claude UI | Engineers using Codex for automated code generation & CI | Developers building autonomous agents, local privacy‑first workflows | GitHub power users, CI/CD pipelines, enterprise automation | Developers who need a smooth, responsive terminal UI | Data‑science / notebook users, enterprise SaaS consumers | General developers seeking secure, reproducible binaries | Engineers building UI‑driven automation with DeepSeek |
| **Technical Approach** | Heavy plugin‑infrastructure refactor, TTS hook, emoji autocomplete | Sub‑agent sandbox, async I/O, robust proxy handling | Workspace‑trust enforcement, async shell tool, SQLite session store | MCP resource/prompt support, plan‑mode model switching, BYOK | UI stability, keyboard event coverage, schema sanitisation | Memory‑leak debugging, auto‑discover model providers, legacy layout | Verifiable source archives, llama.cpp router, SQLite storage | Permission‑contract API, BashTool cwd default, release‑gate pipeline |
| **Maturity Signals** | Frequent point releases, active PR flow, strong community issue count | Stable major release + ongoing PR activity | Nightly builds with rapid bug‑fix cadence | Infrequent PRs, single major release | Very low activity, few open issues | High issue/PR count but no recent release | High activity, recent verifiable release | Ongoing PR activity, candidate release pipeline |

*Claude Code and OpenAI Codex lead in overall release cadence; Gemini CLI shows the fastest nightly iteration; Pi and DeepSeek TUI illustrate a focus on security and UI ergonomics respectively.*

---

**5. Community Momentum & Maturity**

* **High‑activity, rapidly iterating tools** – Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Pi, and DeepSeek TUI each maintain >9 issues and ≥8 PRs, with recent releases or nightly builds. Their communities are actively discussing bugs, filing feature requests, and merging fixes, indicating strong momentum.

* **Moderate activity** – GitHub Copilot CLI and Kimi Code CLI have fewer open issues (9 and 5 respectively) and very limited PR activity, suggesting slower evolution or tighter governance.

* **Low‑visibility projects** – Qwen Code shows virtually no issue or PR activity, implying either a niche user base or that its development is happening off‑platform.

Overall, the ecosystem is **moving toward greater modularity and reliability**, with the most mature projects investing heavily in **plugin ecosystems, session management, and security hardening**.

---

**6. Trend Signals for Developers**

- **Plugin & Extension Standardisation** – Tools are converging on a universal plugin model (hook‑root imports, env‑var‑agnostic resolution, auto‑discovery of compatible models). Expect tighter marketplace integration and reduced “install‑path” friction.

- **Robust Session & Agent Lifecycle** – Persistent session IDs, deterministic auto‑compaction, and background‑agent health checks are becoming baseline expectations to avoid crashes and memory leaks.

- **Enhanced Tool‑Calling Safety** – Schema validation, explicit reasoning‑option APIs, and sandbox‑aware tool execution are being standardized to prevent “tool not found” or “invalid property” errors, especially for newer LLM models.

- **Unified Permission & Access Model** – A single contract governing Ask, Auto‑Review, and Full Access is emerging, aiming to replace overlapping flags and reduce confusion for both users and tool builders.

- **UI/UX Polish** – Smoother chat rendering, copy‑friendly output, keyboard‑first interaction, and scroll‑aware long‑output handling are top‑of‑mind for user experience improvements across the board.

- **Security‑Centric Releases** – Recent merges (e.g., workspace‑trust enforcement in Pi, OAuth device‑code fixes in DeepSeek TUI) show a clear industry shift toward **zero‑click security guarantees** as a differentiator.

These signals suggest that developers should prioritize tools that already invest in **modular plugin architectures, reliable session handling, and strong security boundaries**, while keeping an eye on emerging **UI/UX and tool‑calling APIs** that will shape the next generation of AI‑augmented command‑line workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills – Community Highlights (as of 2026‑07‑22)**  

---

### 1. Top Skills Ranking  
| Rank | Skill (PR) | Core Functionality | Discussion Highlights | Status | GitHub Link |
|------|------------|-------------------|----------------------|--------|-------------|
| 1 | **Skill‑creator (run_eval.py fix)** – PR #1298 | Repairs `run_eval.py` so that the description‑optimization loop correctly detects skill triggers and reports non‑zero recall; also fixes Windows subprocess pipe reading and parallel‑worker handling. | The bug caused a *recall = 0 %* on every iteration, breaking the skill‑learning loop (Issue #556, #1323, #1099). Community stress‑tested the fix with Windows‑specific crash reports. | **OPEN** (updated 2026‑06‑23) | <https://github.com/anthropics/skills/pull/1298> |
| 2 | **Self‑Audit Skill** – PR #1367 | Provides a mechanical‑file verification step followed by a four‑dimensional reasoning audit (damage‑severity priority) before any AI output is delivered. | Positions itself as a universal quality‑gate; early feedback praises the “damage‑severity” ordering but notes the need for clearer integration hooks. | **OPEN** (updated 2026‑07‑02) | <https://github.com/anthropics/skills/pull/1367> |
| 3 | **Color‑Expert Skill** – PR #1302 | Supplies color‑naming systems (ISCC‑NBS, Munsell, XKCD, RAL, etc.) and guidance on when to use OKLCH, OKAB, CAM16, etc. | Frequently cited in design‑focused discussions; users request concrete examples for UI/UX and data‑viz pipelines. | **OPEN** (updated 2026‑07‑21) | <https://github.com/anthropics/skills/pull/1302> |
| 4 | **Testing‑Patterns Skill** – PR #723 | Covers testing philosophy, unit testing (AAA pattern), React component testing (Testing Library) and best‑practice checklists. | Generates strong up‑votes for completeness; some commenters ask for sample test suites. | **OPEN** (updated 2026‑04‑21) | <https://github.com/anthropics/skills/pull/723> |
| 5 | **Pyxel Skill (retro‑game dev)** – PR #525 | Adds an MCP server for the Pyxel retro‑game engine, enabling creation, execution, inspection and iteration of 8‑bit pixel art projects. | Highlighted as a niche but growing need for game‑dev tooling; praised for covering the full workflow. | **OPEN** (updated 2026‑07‑15) | <https://github.com/anthropics/skills/pull/525> |
| 6 | **Document‑Typography Skill** – PR #514 | Detects and corrects common typographic issues (orphan/widow lines, mis‑aligned numbering) in AI‑generated documents. | Community notes that typographic polish is a “must‑have” for professional‑grade outputs; the skill is seen as low‑effort, high‑impact. | **OPEN** (updated 2026‑03‑13) | <https://github.com/anthropics/skills/pull/514> |

*All listed PRs are still open as of the snapshot date; they represent the most‑commented or most‑viewed submissions in the last six months.*

---

### 2. Community Demand Trends  
- **Reliable Skill Evaluation & Trigger Detection** – Persistent *recall = 0 %* bugs (Issues #556, #1323, #1169) drive demand for robust `run_eval.py` and better trigger logic.  
- **Secure Distribution & Trust Boundaries** – Issue #492 highlights the risk of community‑made skills masquerading as official Anthropic skills; users request namespace isolation or signed manifests.  
- **Organization‑Wide Skill Sharing** – Issue #228 calls for a native library or shareable links to avoid manual file transfers.  
- **Documentation & Contribution Hygiene** – Issues #189, #509, #452 expose duplicate skill installations and a lack of contribution guidelines, prompting demand for clearer docs and a unified skill catalog.  
- **Domain‑Specific Tooling** – Repeated requests for skills in typography, ODT/ODS handling, testing frameworks, retro‑game development, color management, and agent governance (Issues #514, #486, #723, #525, #1302, #412).  
- **Platform Compatibility** – Multiple issues (e.g., #29, #1050, #1061) request Windows‑specific fixes, Bedrock support, and MCP exposure, indicating a push for broader runtime compatibility.  
- **Safety & Governance** – Issue #412 and the “Reasoning Quality Gate” proposal (Issue #1385) show strong interest in safety‑pattern skills and multi‑stage quality pipelines.

---

### 3. High‑Potential Pending Skills (active‑comment PRs not yet merged)  
| PR | Skill | Why It May Land Soon | Status |
|----|-------|----------------------|--------|
| **#1302** | **Color‑Expert** | Recent update (2026‑07‑21) and strong community interest in design‑related workflows. | OPEN |
| **#525** | **Pyxel (retro‑game dev)** | Updated just two weeks ago; addresses a niche but growing use‑case for pixel‑art pipelines. | OPEN |
| **#1367** | **Self‑Audit** | Provides a universal quality‑gate; early feedback is positive, and the PR is actively being refined. | OPEN |
| **#1323** | **Trigger‑Detection Fix** | Directly resolves the recall‑0 % bug (Issue #1169); recent comments (June 2026) indicate urgency. | OPEN |
| **#1099** | **Windows Subprocess Crash Fix** | Addresses a critical Windows‑specific crash; community reports multiple Windows users affected. | OPEN |
| **#1050** | **Windows Compatibility (PATHEXT/encoding)** | Complements #1099; together they remove the remaining Windows‑only barriers. | OPEN |
| **#723** | **Testing‑Patterns** | Broad appeal across testing‑focused teams; recent comments request more concrete examples. | OPEN |
| **#514** | **Document‑Typography** | Addresses a widely‑reported typographic pain point; low implementation complexity makes it attractive. | OPEN |

*These PRs have recent activity (within the last 2 months) and are likely to be merged in the near term, expanding the skill catalog with high‑value, user‑requested functionality.*

---

### 4. Skills Ecosystem Insight  
**The community’s most concentrated demand is for a robust, reliable skill‑evaluation and trigger‑detection system that guarantees accurate recall and seamless cross‑platform execution.**

---

**Claude Code Community Digest – 2026‑07‑22**

---

### 1. Today’s Highlights  
- **Release 2. bitte.217** adds emoji‑shortcode autocomplete and useful “write‑failure” warnings, improving UX for both casual chats and code‑review work‑flows.  
- A wave of **high‑impact bugs** erupted around the new Max‑plan experience, the Desktop MSIX updater, and background‑agent behaviour—most notably Issue #79337 and #76357.  
- The PR queue demonstrates a strong focus on **plugin‑infrastructure hardening** (hook‑root imports, UTF‑kitez‑encodings) and a **major new TTS hook** that opens builds to hands‑free hoolery.

---

### 2. Releases  
**v2.1.217** – 22 Jul 2026  
- 🔆 **Emoji shortcode autocomplete** (`:heart:` → ❤️) in the prompt UI (configurable via `emojiCompletionEnabled`).  
- ⚠️ **Write‑failure warnings:** disk‑full or sessionడి‑saving‑off now surface to the user instead of silently failing.  
- Minor regression fixes for sandbox `--cap‑drop` handling reported in #79606.  
- CI & packaging tweaks for Windows MSIX updates.

---

### 3. Hot Issues  
| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **79337** | Fable 5 gated behind usage credits on Max | Max plan users suddenly lose access to the new Fable 5 model; sessions muted to Opus 4.8 without explanation, breaking product‑wide migrations. | 26 comments, 9 up‑votes; many users urgently requesting a policy/feature fix. |
| **79360** | Fable 5 gated when using `claude‑setup‑token` | Auth‑token flows that bypass the UI are blocked, producing a confusing vital‑credit dialog. | 5 comments, 30 up‑votes; developers flag for auth‑library review. |
| **45810** | Marketplace Update button disabled | The plugin storefront can’t be kept current, starving the ecosystem of new632607686037t. | 15 comments, 6 up‑votes; tags #plugins. |
| **54670** | VS Code: copy chat response as Markdown | Developers want a clean copy‑source for article TL;D. | 9 comments, 18 up‑votes; “add to your workflow” traffic. |
| **72215** | TUI fullscreen scroll break | In full‑screen rendering, large outputs become unreadable—effectively a dead‑end to terminal debugging. | 6 comments, 4 up‑votes; #windows. |
| **76357** | Windows MSIX updater failure | Users stuck in “Another program is using this file,” requiring a reboot each сүр. | 6 comments, 4 up‑votes; #desktop‑windows. |
| **70733** | Cowork tab missing after clean install | Missing rootfs.VHDx causes twin‑app “setup‑fail” for collaborative sessions. | 6 comments, .Fixed. |
| **72181** | No way to clear “Recent” folders list | Files pile up forever, cluttering UI and slow‑down on Windows. | 5 comments, 10 up‑votes; #desktop‑windows. |
| **79921** | Session freeze until another session receives input | Desktop & VS Code only, causing a freeze loop for CLI and local agents. | 3 comments, 0 up‑votes; #bug. |
рать | **75037** | Background agent crash‑loop | Background CLI agents attach and crash, losing work. | 3 comments, 0 up‑votes; #macos. |

---

### 4. Key PR Progress  
Indoor showing the community’s engineering momentum:

| # | Title | What it adds / fixes | Link |
|---|-------|----------------------|------|
| **79620** | **TTS read‑aloud hook** | Adds `read_aloud` hook (Piper/Linux, macOS`s `say`, PowerShell on Windows). Markdown‑aware, code‑skip logic. | https://github.com/anthropics/claude-code/pull/79620 |
| **79647** | Hookify: import‑resolution independent of plugin name | Prevents import errors when plugin dir is renamed. | https://github.com/anthropics/claude-code/pull/796 régulièrement |
| **79645** | Hookify: UTF‑8 rule & transcript IO | Cuts encoding crashes on Windows; all rule files now treated as UTF‑8. | https://github.com/anthropics/claude-code/pull/79645 |
| **79644** | Quote `${CLAUDE_PLUGIN_ROOT}` in hook commands | Fixes root‑name spaces on macOS that broke hook execution. | https://github.com/anthropics/claude-code/pull/79644 |
| **79898** | AWS Claude Apps Gateway example assets | Adds ready‑to‑deploy AWS‑bedrock sample; complements GCP example. | https://github.com/anthropics/claude-code/pull/79898 |
| **79889** | Hookify: runnable without CLAUDE_PLUGIN_ROOT | Allows hook package `pip install` without env var; better testing. | https://github.com/anthropics/claude-code/pull/79889 |
| **79873** | Hookify: prompt rules never fire | Fixes#endif → event:prompt bug; ensures pre‑prompt events trigger. | https://github.com/anthropics/claude-code/p Bien |
| **79640** | Disable‑model‑invocation to keep certain commands user‑only | Allows secure tooling (e.g., secret‑look‑up) that only the user may run. | https://github.com/anthropics/claude-code/pull/79640 |
| **79635** | PR‑review‑toolkit: point Contributing to in‑repo agents | Corrects broken docs path; makes onboarding for review agents easy. | https://github.com/anthropics/claude-code/pull/79635 |
| **79636** | Hookify: add “hookify.” prefix to example filenames | Aligns example naming with actual required pattern; eliminates confusion. | https://github.com/anthropics/claude-code/pull/79636 |

---

### 5. Feature Request Trends  
- **Clipboard‑Friendly Markdown** – The VS Code copy‑as‑Markdown and similar requests imply a strong demand for “copy source” actions that export clean, maintainable text.  
- **Emoji & Autocomplete Enhancements** – With new emoji completion in v2.1.217, many users expect richer inline expressions in prompts (e.g. `:sparkles:` → ✨).  
- **Marketplace & Plugin Workflow** – Persistent “Update disabled,” hidden settings, and root‑path quoting suggest a need for a more developer‑friendly plugin install/upgrade UX.  
- **Agent Management UI** – Users want ways to purge *Recent* folders, manage background agents, and see session continuity statuses.  
- **Accessibility Hooks** – The TTS hook shows the ecosystem is moving toward inclusive, hands‑free workflows, likely spurring future audio, screen‑reader, and voice‑command features.

---

### 6. Developer Pain Points  
| Pain Point | Evidence | Likely resolution path |
|------------|----------|------------------------|
| **Hard‑coded plugin root paths** | Issues #79644, #79647, #79889 | Refactor to env‑var‑agnostic import hooks; launch‑time config. |
| contrariwise |  |  |
| **Background agent crash‑loops & fd exhaustion** | #75037, #79920, #79818 | Strengthen agent lifecycle, safeguard launchd limits, add `--bg` throbbers. |
| **Read‑failure & disk‑full silent writes** | v2.1.217 changes, #79606 | Add user warnings, fallback logging to local file, telemetry. |
| **Skill slash‑command resolution** | #75224 | Improve async registration; add auto‑import on session start. |
| **Large‑token session compaction logic** | #79665 | Recalibrate threshold to actual window size (1 M vs 200 k). |
| **Plugin Marketplace UI stalls** | #45810, #76357 | Re‑implement async updates, clean MSIX signing. |
| **Accessibility tooling gaps** | #79620 (TTS hook) | Expand to other assistive hooks (speech‑to‑text, eye‑tracking). |

> **Bottom line:** The Claude Code community is rapidly expanding its plugin and agent ecosystem, yet developer friction around plugin installation paths, background session stability, and UI responsiveness remains the primary feedback loop to the core team.  

---

**GitHub links are embedded in each row.** Happy coding!

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### OpenAI Codex Community Digest – 2026‑07‑22  

---

#### 1. **Today's Highlights**  
The 0.145.0 releases added full‑page thread pagination, seamless multi‑agent resume, and an expanded `/import` command that migrates cursor state, Claude settings, plugin configs, and task history.  
Meanwhile, users are grappling with persistent Windows app performance regressions (taskkill storms, UI freezes) and sandbox‑based subagent failures thatไ spill into CI pipelines.

---

#### 2. **Releases**  
- **rust-v0.145.0** (0.145.0)  
  *Premise*: Experimental paginated thread history with efficient resume, search, and persisted names; sub‑agent and memory support.  
  *Import expansion*: Migrates Cursor, Claude Code settings, MCP servers, plugins, sessions, commands, and projects into the `/import` CLI.  
- **rust‑v0.145.0‑alpha.30** – minor declarative updates; no breaking changes.

---

#### 3. **Hot Issues**  
| # | Title | Why it matters | Community buzz |
|---|-------|----------------|----------------|
| **9508** | Make Weekly Limit Reset Deterministic | Wiring deterministic resets improves planning for enterprise‑scale usage. | 46 comments, 31 👍 – developing a PR for a campaign event‑driven reset. |
| **14919** | `bwrap: Failed RTM_NEWADDR` – sandbox breaks after CLI update | Sub‑agent tasks in CI cannot execute; essential for automated code reviews. | 44 comments, 48 👍 – Hotfix branch in process. |
| **28058** | MultiAgentV2 encrypted payload wipes audit trail | Lost human‑readable audit trail blocks debugging, especially in regulated dev environments. | 26 comments, 99 👍 – “We need guaranteed audit.” |
| **32149** | Windows setup fails before UAC prompt | 40 % of Windows users hit a dead‑end pre‑installation, halting adoption. | 24 comments, 5 👍 – discussion about MSI container fresh install. |
| **26951** | IDE extension stuck on VS Code Remote‑SSH | Remote cloud hosts keep the extension table‑d, breaking productivity. | 16 comments, 1 👍 – vendor‑level patch request pending. |
| **25921** | Crashpad dump growth to >5 GB/day | Unbounded disk usage crashes macOS desktops; burdening user resources. | 15 comments, 5 👍 – urgent reproduction logs shared. |
| **34260** | Windows Desktop unbounded `taskkill.exe`/`conhost.exe` cleanup | WMI exhaustion kills Windows machines after long‑running runs. | 14 comments, 8 👍 – CUDA Z‑trace report from internal SDK. |
| **27597** | Remote‑SSH extension fails to load | Confuses developers who rely on remote platform builds. | 14 comments, 3 👍 – duplicate of #26951. |
| **28078** | Xcode 27 beta sign‑in fails for ChatGPT‑Pro users | Vendor‑specific OTP failure spikes support tickets. | 12 comments, 11 👍 – "Please ship a bug‑fixed extension." |
| **34061** | Insane disk usage from Subagents | Sub‑agents blow up under heavy workloads, eroding productivity. | 6 comments, 1 👍 – R&D staff flagged as priority. |

---

#### 4. **Key PR Progress**  
| # | Title | What it adds/fixes | знаю |
|---|-------|-------------------|------|
| **34641** | Harden managed proxy setup for sandboxed 展 | Guarantees sandbox can use the managed proxy bridge; fixes RTM_NEWADDR failures. | In merge queue. |
| **34636** | Keep the TUI open when starting a turn fails | UI no longer exits on server rejections; improves CLI UX stability. | Squashed into master. |
| **34630** | Add a policy‑aware HTTP client builder | Central HTTP client with plugin‑level proxy, headers, diagnostics. | Adopted in CLI core. |
| **34644** | Verify Git plugin SHA checkouts | Prevents accidental branch collisions when SHA equals branch name. | Released with 0.145.0 alpha. |
| **34645** | Always assign response item IDs | Stabilizes patch histories, eases diff tooling. | Inmaster. |
| **34649** | Propagate resolved proxy policy through piling routing | Routes local dev proxies through auth paths. | Completed. |
| **34650** | Require auth managers to receive routing configuration | Enforces explicit proxy config, mitigating accidental leaks. | Merged. |
| **34625** | Fix Windows TUI navigation key handling | Corrects mis‑interpretation of arrow keys in Windows console. | Hotfix in 0.140+. |
| **34624** | Terminate Windows process trees with job objects | Proper termination of sandboxed child processes on abort. | Live. |
| **34631** | Migrate agent identity to the shared HTTPсят | Removes duplicate credential handling, unifying auth flows. | Backported to 0.145.0. |

---

#### 5. **Feature Request Trends**  
1. **Predictable Rate‑Limit/Quota Policies** – Users want deterministic reset points-library to schedule heavy tasks.  
2. **Robust Remote‑IDE Support** – Remote‑SSH/VSC‑Workspace and Xcode sign‑in reliability at the top of the backlog.  
3. **Background/Detached Sessions** – Long‑running sub‑agents that survive terminal closures or CI timeout.  
4. **Enhanced Import/Export Tools** – Seamless migration of cursors, Claude Code, MCP servers, and project metadata.  
5. **Memory / Disk姆Efficiencies** – Sub‑agent disk usage caps and automatic cleanup, especially on Windows.  
6. **Static Asset and Plugin Sign‑Entrances** – Secure Git SHA validation and plugin store checks.  
7. **User‑Friendly UI/UX** – Bottom‑pin prompt, crash logging, and automatic exception handling.  

---

#### 6. **Developer Pain Points**  
- **Sandbox Failures** – RTM_NEWADDR errors on tekoctl 0.115.0 and newer; impacting CI and remote agents.  
- **Windows Performance Regressions** – Unbounded taskkill loops, UI freezes, and excessive memory usage.  
- **Remote‑IDE Instability** – Remote‑SSH and VS Code extensions fail to load or lose context.  
- **Audit Trail Erasure** – Encrypted multi‑agent payloads wipe readable logs, blocking debugging.  
- **Disk & Memory Leaks** – Crashpad dumps and sub‑agent footprint grow without bounds on macOS and Windows.  
- **Rate‑Limit Uncertainty** – Weekly usage resets lack precision, causing burst‐swing contention.  

Addressing these will dramatically lower friction for both individual developers and enterprise cargo‑train deployments.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑07‑22**

---

### 1. Today's Highlights
- A critical security fix was merged in PR #28470 that enforces workspace trust and task isolation in the A2A server, eliminating a zero‑click RCE vector.  
- The nightly release **v0.52.0-nightly.20260722.gc776c665b** ships this fix along with routine version bumps.  
- Community discussion remains focused on agent reliability (hangs, sub‑agent utilization) and memory‑system quality, with several high‑comment issues seeing renewed activity today.

---

### 2. Releases
| Version | Date | Key Change |
|---------|------|------------|
| **v0.52.0-nightly.20260722.gc776c665b** | 2026‑07‑22 | **fix(a2a-server):** enforce workspace trust and task isolation to prevent RCE ([PR #28470](https://github.com/google-gemini/gemini-cli/pull/284/gemini-cli/pull/28470)). |
| (Version bump only) | 2026‑07‑22 | chore/release: bump version to match the nightly ([PR #28478](https://github.com/google-gemini/gemini-cli/pull/28478)). |

No other releases were published in the last 24 h.

---

### 3. Hot Issues (top‑10 by community impact)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after **MAX_TURNS** incorrectly reports GOAL success, hiding interruptions. | Leads to false confidence in agent completion; blocks reliable automated workflows. | 12 comments, 👍2 – active debugging needed. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** indefinitely on simple tasks (folder creation, etc.). | Stalls interactive sessions; forces users to disable sub‑agents entirely. | 8 comments, 👍8 – high frustration. |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via **Zero‑Dependency OS Sandboxing & Post‑Execution Intent Routing**. | Aims to unlock the model’s native shell‑tool strengths while preserving security. | 8 comments, 👍1 – long‑term enhancement interest. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component‑level evaluations** – expanding behavioral test coverage. | Critical for confidence in agent reliability as features grow. | 7 comments, 👍0 – ongoing infra work. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of **AST‑aware file reads, search, and mapping**. | Could drastically reduce turn count and noise in codebase exploration. | 7 comments, 👍1 – strong interest from power users. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini **does not use skills and sub‑agents enough** without explicit prompting. | Limits extensibility; users must constantly micromanage the agent. | 6 comments, 👍0 – recurring pain point. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Stop Auto Memory from retrying low‑signal sessions indefinitely**. | Prevents wasted resources and noisy memory inbox growth. | 5 comments, 👍0 – memory‑system stability concern. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with **“Waiting input”** after command completes. | Breaks the feedback loop; forces manual interruption. | 4 comments, 👍3 – notable annoyance. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Enhance **browser_agent resilience**: automatic session takeover & lock recovery. | Improves reliability of web‑based automation tasks. | 4 comments, 👍0 – feature‑request momentum. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails in Wayland** environments. | Blocks Linux‑users on modern desktop compositors; limits cross‑platform adoption. | 4 comments, 👍1 – platform‑specific bug. |

---

### 4. Key PR Progress (top‑10 by significance)

| PR | Summary |
|----|---------|
| [#28470](https://github.com/google-gemini/gemini-cli/pull/28470) | **fix(a2a-server):** enforce workspace trust and task isolation → blocks zero‑click RCE and environment poisoning. |
| [#28472](https://github.com/google-gemini/gemini-cli/pull/28472) | **fix(core):** sequentially verify cached credentials and restore `GOOGLE_APPLICATION_CREDENTIALS` fallback – resolves authentication regression causing exit code 41. |
| [#28469](https://github.com/google-gemini/gemini-cli/pull/28469) | **fix(core):** rotate session ID on model fallback to prevent stateful API errors when switching to `gemini-2.5-flash`. |
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | **fix(core):** block `$VAR` and `${VAR}` variable expansion bypass (GHSA‑wpqr‑6v78‑jr5g) – defense‑in‑depth for shell injection. |
| [#28397](https://github.com/google-gemini/gemini-cli/pull/28397) | **fix(core):** replace synchronous I/O in shell tool critical path with async `fs/promises` → reduces UI stutter. |
| [#28394](https://github.com/google-gemini/gemini-cli/pull/28394) | **fix(core):** remove temporary directories on background shell exit → eliminates temp‑file leak. |
| [#28389](https://github.com/google-gemini/gemini-cli/pull/28389) | **fix(core):** add real‑world time budget to prevent infinite‑loop event‑driven agent state transitions. |
| [#28474](https://github.com/google-gemini/gemini-cli/pull/28474) | **feat(core):** add `skill_name` dimension to tool‑call telemetry (addresses #18189). |
| [#28433](https://github.com/google-gemini/gemini-cli/pull/28433) | **feat(pr-generator-orchestrator):** implement iterative bug‑fixing state machine & container worker entrypoint for the SSR pipeline. |
| [#28431](https://github.com/google-gemini/gemini-cli/pull/28431) | **feat(pr-generator-infra):** configure Cloud Run job, Workflows definition, and Dockerfile for the SSR Code Generation Pipeline. |

---

### 5. Feature Request Trends (derived from open Issues)

| Trend | Evidence from Issues | Implied Direction |
|-------|----------------------|-------------------|
| **Better sub‑agent discovery & autonomous use** | #21968, #22323, #21409, #22093 | Improve agent’s intrinsic reasoning to invoke skills/sub‑agents without explicit prompting; fix hang/reporting bugs. |
| **Memory‑system quality & determinism** | #26522, #26525, #26523, #26516 | Stop infinite retries, add deterministic redaction, surface invalid patches, overall memory reliability. |
| **AST‑aware tooling** | #19873, #22745, #22746 | Provide syntax‑tree aware reads/search/mapping to lower turn count and noise. |
| **Browser agent robustness** | #22232, #21983, #22267 | Automatic session takeover, lock recovery, respect `settings.json` overrides, Wayland compatibility. |
| **Evaluation & observability** | #24353, #28305, #28169 | Expand component‑level evals, add tool‑call timelines, coverage reporting. |
| **Security hardening** | #28470, #28403, #26525 | Continue isolating workspaces, block variable‑expansion bypasses, reduce Auto Memory logging of secrets. |
| **Developer ergonomics** | #25166 (shell “Waiting input”), #22465 (interactive Vite prompt), #21924 (terminal resize flicker) | Make shell tool non‑blocking, handle interactive prompts, improve UI performance on resize. |

---

### 6. Developer Pain Points (recurring frustrations)

1. **Agent hangs / unresponsiveness** – Generalist agent stalls on trivial commands (#21409) and shell tools appear to wait for input after completion (#25166).  
2. **Sub‑agent under‑utilization** – Even when relevant skills exist, the model rarely invokes them without explicit instruction (#21968).  
3. **Memory system noise** – Auto Memory repeatedly retries low‑signal sessions, logs excessively, and silently drops invalid patches (#26522, #26525, #26523).  
4. **Tool‑call overhead & duplication** – Frequent creation of temporary scripts in random locations (#23571) and temp‑dir leaks during background execution (#28394).  
5. **Interactive prompt blockers** – Agents get stuck at CLI prompts (e.g., Vite app creation) because they cannot supply required input (#22465).  
6. **Platform‑specific breakage** – Browser subagent fails under Wayland (#21983) and terminal‑resize flicker degrades UI experience (#21924).  
7. **Security‑usability trade‑offs** – Users want powerful shell/bash capabilities but need guarantees that workspace trust and variable expansion are properly enforced (reflected in recent security fixes).  

Addressing these areas—particularly agent reliability, autonomous sub‑agent use, and memory‑system stability—will likely yield the biggest satisfaction gains for the Gemini CLI community.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest - 2026-07-22  

## **Today's Highlights**  
- **v1.0.74-0** introduces the `/model plan` command, enabling dynamic model selection for plan mode workflows.  
- Improved session resumption now correctly matches search results even with whitespace differences.  

---

## **Releases**  
**v1.0.74-0**  
- **Added**: `/model plan` (or `/model --plan`) to select a model dynamically in plan mode.  
- **Improved**: Session title matching now tolerates whitespace variations during resume.  
[Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.74-0)  

---

## **Hot Issues**  
1. **[#2282](https://github.com/github/copilot-cli/issues/2282)** - **MCP Connection Failure**  
   - Windows users report inability to connect to `github-mcp-server` after WinGet install.  11 comments, 1 upvote.  
   - Likely a configuration or dependency issue in Windows environments.  

2. **[#1305](https://github.com/github/copilot-cli/issues/1305)** - **CIMD Support for Remote OAuth MCP Servers**  
   - Community requests support for CIMD (Client-Initiated Dynamic Client) to reduce friction for OAuth-protected MCP servers.  
   - 26 upvotes, 4 comments. Critical for enterprise and remote server integrations.  

3. **[#4188](https://github.com/github/copilot-cli/issues/4188)** - **Plan Mode Regression**  
   - Plan mode now blocks shell commands like `gh`, breaking workflows. Reported as a regression.  
   - 3 comments, 2 upvotes. High priority for developers using plan mode for issue/enhancement tracking.  

4. **[#1518](https://github.com/github/copilot-cli/issues/1518)** - **MCP Resources and Prompts Support**  
   - Users urge full MCP protocol support (resources, prompts) beyond tools-only.  
   - 2 comments, 14 upvotes. Core for advanced MCP server integrations.  

5. **[#4183](https://github.com/github/copilot-cli/issues/4183)** - **CAPI 5MB Limit Failure**  
   - Long sessions hit a 5MB body limit despite token capacity, stalling progress.  
   - 2 comments, 5 upvotes. Affects heavy tool usage in monorepos.  

6. **[#2193](https://github.com/github/copilot-cli/issues/2193)** - **Default Model for Fleet Subagents**  
   - Request for global/project-level configuration of default models for `/fleet` subagents.  
   - 3 comments, 14 upvotes. Streamlines multi-agent workflows.  

7. **[#4012](https://github.com/github/copilot-cli/issues/4012)** - **BYOK Reasoning Effort Bug**  
   - `glm-5.2:cloud` model fails with `--reasoning-effort max` despite valid config.  
   - 2 comments, 16 upvotes. Disrupts BYOK users relying on advanced reasoning.  

8. **[#3976](https://github.com/github/copilot-cli/issues/3976)** - **OOM Kill in Native `tgrep`**  
   - Built-in `tgrep` indexer consumes excessive memory in large monorepos.  
   - 1 comment. Risk for resource-constrained environments.  

9. **[#4206](https://github.com/github/copilot-cli/issues/4206)** - **Environment Footer Stuck on "Loading"**  
   - Session environment status fails to transition after MCP handshake stalls under org policies.  
   - 1 comment, 1 upvote. UX break in enterprise settings.  

10. **[#1803](https://github.com/github/copilot-cli/issues/1803)** - **MCP Resources/Read Primitive**  
    - Long-standing request to support `resources/list` and `resources/read` for MCP servers.  
    - 1 comment, 8 upvotes. Foundational for resource-driven workflows.  

---

## **Key PR Progress**  
1. **[#3163](https://github.com/github/copilot-cli/pull/3163)** - **ViewSonic Monitor**  
   - PR adds a GitHub Action for monitor-related workflows (linked to issues #2591, #3561, #3559).  
   - Status: Open, last updated 2026-07-21.  

---

## **Feature Request Trends**  
1. **MCP Protocol Expansion**: Full support for resources, prompts, and subscriptions (issues #1518, #1803, #3073).  
2. **Agent Management**: Default model configuration for subagents (#2193), retention policies (#2595), and explicit invocation (#4208).  
3. **BYOK Enhancements**: Reasoning effort compatibility (#4012) and wire API stability (#4196).  
4. **Model Configuration**: Quick-switching between presets (#4190) and global defaults.  
5. **Enterprise Integration**: CIMD/OAuth improvements (#1305), billing entity selection (#4005), and policy compliance (#4205).  

---

## **Developer Pain Points**  
1. **Plan Mode Limitations**: Blocking shell commands (#4188) and token compaction issues (#4183).  
2. **Authentication Friction**: OAuth/MCP handshake stalls (#4206, #4203) and expired token re-auth loops.  
3. **Resource Constraints**: Memory overruns in `tgrep` (#3976) and zombie process accumulation (#4163).  
4. **Tooling Gaps**: BigInt serialization errors (#4211), tmux/dark-mode rendering bugs (#4212), and clipboard issues in WSL (#4191).  
5. **API Limitations**: Transient BYOK streaming failures (#4196) and CAPI body size caps.  

---  
*Generated from GitHub data for copilot-cli (2026-07-22).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑07‑22**

---

### 1. Today's Highlights
- Two critical bugs were reported affecting usability: a UI “shaking” re‑render issue (Issue #2474) and a keyboard‑input dead‑zone on Windows (Issue #2529).  
- The MCP integration is currently broken because the Moonshot API rejects client‑side tool schemas (Issue #2531), prompting a validation fix.  
- A long‑standing tool‑calling problem with the k2.5 model surfaced (Issue #2527), causing “Tool not found” errors and infinite loops in Goal mode, while shell‑mode output truncation is also requested (Issue #2528).

---

### 2. Releases
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues  *(5 reported)*

| # | Title & Link | Why It Matters | Community Reaction |
|---|--------------|----------------|--------------------|
| **2474** | [UI shaking & full re‑render bug](https://github.com/MoonshotAI/kimi-cli/issues/2474) | Instability in the chat UI forces users to reload conversations, degrading workflow continuity. | 1 comment, 👍 2 |
| **2531** | [MCP tool schemas rejected by Moonshot API (HTTP 400)](https://github.com/MoonshotAI/kimi-cli/issues/2531) | Breaks MCP integrations; client‑side sanitization is required to match Moonshot’s JSON‑Schema flavor. | 0 comments, 👍 0 |
| **2529** | [Right‑hand keyboard numbers not triggering input box](https://github.com/MoonshotAI/kimi-cli/issues/2529) | Renders keyboard shortcuts unusable on Windows, limiting productivity for power users. | 0 comments, 👍 0 |
| **2528** | [Output too long in shell mode](https://github.com/MoonshotAI/kimi-cli/issues/2528) | Unbounded output floods the terminal, making it hard to extract relevant results. | 0 comments, 👍 0 |
| **2527** | [k2.5 model tool calling broken + Goal‑mode infinite loop](https://github.com/MoonshotAI/kimi-cli/issues/2527) | Major regression for k2.5 users; tool calls are ignored and Goal mode can’t exit, stalling automation pipelines. | 0 comments, 👍 0 |

---

### 4. Key PR Progress *(1 merged in the last 24 h)*

| # | PR Title & Link | Core Fix |
|---|-----------------|----------|
| **2530** | [fix(shell): stop blocking until timeout when a detached child holds the pipes](https://github.com/MoonshotAI/kimi-cli/pull/2530) | Prevents `_run_shell_command` from hanging on commands that spawn detached background processes, resolving deadlock scenarios reported in #2468. |

---

### 5. Feature Request Trends (derived from the issues)

1. **UI Rendering Stability** – Users request a smoother, non‑re‑rendering chat view to avoid “shaking” and unnecessary page refreshes.  
2. **Keyboard Event Coverage** – Full keyboard support, especially on Windows, for number‑pad and function‑key inputs.  
3. **MCP Schema Validation** – Client‑side sanitization and validation before sending tool definitions to avoid HTTP 400 errors.  
4. **Output Pagination/Capping** – Controls to truncate or paginate overly long shell‑mode output for better readability.  
5. **Tool‑Calling Reliability for Older Models** – Robust tool‑calling plumbing for k2.5 (and potentially other legacy models) and safeguards against infinite loops in Goal mode.  

Overall, the community is pushing for **more resilient UI/UX**, **stronger client‑side validation**, and **better handling of edge‑case execution flows**.

---

### 6. Developer Pain Points (recurring themes)

- **UI Instability** – Re‑rendering the entire conversation on minor interactions creates a choppy experience.  
- **Input Layer Gaps** – Certain keyboard events (especially numeric keypad) are not captured, breaking shortcuts.  
- **Tool‑Calling Failures** – Incompatible schema formats cause “Tool not found” errors, particularly with k2.5 and Goal mode.  
- **Shell‑Mode Flooding** – Unlimited output length can overwhelm the terminal and hinder result extraction.  
- **MCP Integration Bugs** – API‑side schema rejection forces developers to implement ad‑hoc sanitization, increasing maintenance overhead.  

Addressing these pain points will improve user satisfaction and lower the barrier for broader adoption of Kimi Code CLI.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026-07-22**  

### Today’s Highlights  
- **Memory Megathread** (#20695) dominates discussions with 119 comments, as developers collaborate to resolve widespread memory leaks.  
- Critical fixes for **clock skew** (#38213) and **subscription billing** (#38208) address sync issues and balance discrepancies affecting Go subscribers.  
- **Auto-discover models** from OpenAI-compatible providers (#6231) remains a top community request, with 182 👍 reactions.  

---

### Releases  
No releases in the last 24 hours.  

---

### Hot Issues  
1. **[Memory Megathread #20695](https://github.com/anomalyco/opencode/issues/20695)**  
   - Central hub for memory issues; requires heap snapshots for debugging. High engagement (119 comments, 90 👍).  
2. **[Auto-discover models #6231](https://github.com/anomalyco/opencode/issues/6231)**  
   - Request to auto-list models from providers like Ollama. 182 👍, 26 comments.  
3. **[Legacy layout option #37012](https://github.com/anomalyco/opencode/issues/37012)**  
   - Users demand retention of the old UI. 27 👍, 26 comments.  
4. **[Windows ARM64 TUI crash #19130](https://github.com/anomalyco/opencode/issues/19130)**  
   - Native ARM64 binaries fail TUI initialization. 8 👍, 12 comments.  
5. **[Subscription balance mismatch #37790](https://github.com/anomalyco/opencode/issues/37790)**  
   - Paid subscriptions show $0 balance. 10 comments, no 👍.  
6. **[Unarchive sessions in Desktop #12393](https://github.com/anomalyco/opencode/issues/12393)**  
   - Closed issue for unarchiving sessions. 31 👍, resolved.  
7. **[Session duplicate messages #20699](https://github.com/anomalyco/opencode/issues/20699)**  
   - Agents send redundant responses. 1 👍, 6 comments.  
8. **[Web layout missing workspaces #37546](https://github.com/anomalyco/opencode/issues/37546)**  
   - New layout removes workspaces/worktrees. 5 👍, 4 comments.  
9. **[iOS PWA safe area overlap #35480](https://github.com/anomalyco/opencode/issues/35480)**  
   - Titlebar overlaps notch on iOS. 0 👍, 2 comments.  
10. **[OpenCode Go balance $0 despite subscription #38208](https://github.com/anomalyco/opencode/issues/38208)**  
    - User reports $0 balance with active subscription. 1 comment, 0 👍.  

---

### Key PR Progress  
1. **[Fix clock-skew loops #38213](https://github.com/anomalyco/opencode/pull/38213)**  
   - Resolves clock skew causing sync errors. 0 comments.  
2. **[MiniMax M3 thinking type fix #35181](https://github.com/anomalyco/opencode/pull/35181)**  
   - Adjusts API parameter to `enabled`/`disabled`. 0 comments.  
3. **[NVIDIA NIM DeepSeek compatibility #37833](https://github.com/anomalyco/opencode/pull/37833)**  
   - Fixes hangs with DeepSeek V4 on NVIDIA NIM. 0 comments.  
4. **Solid crash fix on session switch #37832**  
   - Prevents freezes when switching sessions. 0 comments.  
5. **Copilot API endpoint discovery #38184**  
   - Auto-discovers GitHub Copilot endpoints. 0 comments.  
6. **Add opencode-hypa plugin docs #38022**  
   - Documentation for ecosystem plugin. 0 comments.  
7. **Solidity syntax highlighting #38200**  
   - Adds language support. 0 comments.  
8. **Cache system messages fix #38206**  
   - Ensures all system messages are cached. 0 comments.  
9. **Show running shell commands #38080**  
   - Displays live shell output. 0 comments.  
10. **Auto-scroll config for TUI #33248**  
    - Adds `auto_scroll` flag in config. 0 comments.  

---

### Feature Request Trends  
- **Auto-discover models**: High demand for dynamic model listing from providers like Ollama.  
- **Legacy UI retention**: Users seek to preserve the old layout/workspace features.  
- **Managed SaaS connectors**: Requests for built-in integrations (Slack, Gmail, Notion).  
- **Session naming**: Auto-generate session names from message content.  

---

### Developer Pain Points  
- **Memory leaks**: Persistent issues requiring heap snapshots for diagnosis.  
- **Subscription billing**: Discrepancies between paid status and balance.  
- **Model setup friction**: Manual configuration of OpenAI-compatible providers.  
- **Layout transitions**: Loss of workspaces and no rollback option in new UI.  
- **Platform-specific bugs**: Windows ARM64 TUI crashes and iOS PWA safe area issues.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: 2026-07-22

### 1. Today's Highlights
The ecosystem saw significant progress in developer security and local LLM flexibility with the release of v0.81.1, introducing verifiable source archives. Meanwhile, the community is heavily focused on refining the agentic experience, specifically regarding error handling during large model context shifts and improving the stability of the session management system.

### 2. Releases
**v0.81.1**
* **Verifiable Release Source Archives:** New deterministic, checksummed source archives are now available, providing a secure path for users to rebuild standalone binaries from release sources. [View Release](https://github.com/earendil-works/pi/blob/v0.81.1/README.md)

**v0.81.0**
* **Local llama.cpp Integration:** A major leap for local privacy; users can now connect to a `llama.cpp` router, search/download Hugging Face models, and manage model loading/unloading with live progress. [View Release Notes](https://github.com/earendil-works/pi/blob/v0.81.0/packages/coding-agent/docs/llama-cpp.md)

### 3. Hot Issues
* **#6278 [Claude Model Edit Failures]:** A critical bug where new Claude models fail ~20% of edits due to LLM-invented extra properties in tool calls. High priority for reliability. [Issue #6278](https://github.com/earendil-works/pi/issues/6278)
* **#6915 / #6918 [v0.81.0 Crash Reports]:** Several users report `TypeError` crashes when resuming sessions after the 0.81.0 update. Significant stability concern. [Issue #6915](https://github.com/earendil-works/pi/issues/6915)
* **#6879 [Auto-compaction Delay]:** A frustrating behavior where auto-compaction only triggers after an API error rather than when the context threshold is reached. [Issue #6879](https://github.com/earendil-works/pi/issues/6879)
* **#5653 [Dependency Bloat]:** Developers are discussing the need to move off `Shrinkwrap` to prevent duplicate installations of `pi-ai` in nested dependencies. [Issue #5653](https://github.com/earendil-works/pi/issues/5653)
* **#6747 [Markdown Enhancement API]:** A popular request for an API that allows extensions to mutate the *representation* (e.g., math formulas) of agent messages without altering the raw content. [Issue #6747](https://github.com/earendil-works/pi/issues/6747)
* **#6912 [OpenAI/Anthropic Sleep Bug]:** A major issue where SDK-level retries with long `Retry-After` values freeze the Pi process. [Issue #6912](https://github.com/earendil-works/pi/issues/6912)
* **#6920 [Autocomplete Crash]:** A `TypeError` in the fuzzy matching logic causes crashes when typing `/` in interactive mode. [Issue #6920](https://github.com/earendil-works/pi/issues/6920)
* **#6817 [Windows Path Bug]:** The `find` tool fails to find files on Windows when using glob patterns like `**/*.ts`. [Issue #6817](https://github.com/earendil-works/pi/issues/6817)
* **#6929 [Sockudo Extension]:** A proposal for a new extension type to enable durable remote session monitoring and multi-device UIs. [Issue #6929](https://github.com/earendil-works/pi/issues/6929)
* **#6923 [Environment Variable Security]:** Requests for the ability to hide specific global environment variables from the Pi instance to prevent accidental credential exposure. [Issue #6923](https://github.com/earendil-works/pi/issues/6923)

### 4. Key PR Progress
* **#6916 [AgentHarness Execution Tools]:** Implements `AgentHarnessTool` to allow arbitrary context (environment, session ID) to be passed during tool execution.
* **#6928 [Reasoning Options Integration]:** Updates the model generation process to incorporate reasoning options from `models.dev`.
* **#6927 [OpenRouter OAuth Support]:** Adds native OAuth support for OpenRouter, enabling a seamless browser-based authorization flow.
* **#6881 [Provider Cost Tracking]:** Enhances usage tracking by using real provider-reported costs instead of relying on static catalog rates.
* **#6909 [Stable Session IDs]:** Implements reserved user IDs and stable entry IDs to ensure session consistency across restarts.
* **#6572 [Interactive Image Rendering]:** Adds the ability to render image blocks directly in interactive user messages within the TUI.
* **#6594 [SQLite Session Storage]:** A significant architectural change introducing SQLite for more robust session storage and optimized compaction.
* **#6903 [Editor Launch Performance]:** Refactors the external editor implementation to use subdirectories instead of a crowded `/tmp` directory, improving speed.
* **#6917 [Session Archive Shortcut]:** Adds `Ctrl+A` to the session picker for rapid archiving of old sessions.
* **#6901 [Compaction Retry Logic]:** Ensures that both auto and manual compaction respect the system's retry policies during transient failures.

### 5. Feature Request Trends
* **Extensibility & UI Enhancement:** Strong movement toward allowing extensions to mutate the visual presentation of messages (e.g., Markdown/Math) and adding more robust "harness" tools for agents.
* **Advanced Session Management:** Heavy interest in improved session lifecycle management, including archiving workflows, stable session IDs, and more efficient storage backends (SQLite).
* **Local/Privacy-Centric Workflows:** Growing demand for better management of local models (llama.cpp) and more granular control over which environment variables are exposed to the agent.

### 6. Developer Pain Points
* **Stability During Updates:** The 0.81.0 release has introduced several regression crashes and `TypeError` exceptions that are blocking session resumption.
* **Context Management Friction:** Developers are struggling with "laggy" compaction that only triggers upon API overflow rather than proactive context monitoring.
* **Tool-Call Fragility:** Increasing friction due to LLMs (particularly newer Claude models) generating non-standard tool properties that break strict validation schemas.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑07‑22**  
*GitHub repo: [Hmbown/DeepSeek‑TUI](https://github.com/Hmbown/DeepSeek-TUI)*  

---

### 1. Today's Highlights
- The BashTool now defaults to `context.workspace` when no explicit `cwd` is supplied, fixing sub‑agent work‑tree isolation (#4673).  
- A new Permission‑Contract API was merged, consolidating **Ask**, **Auto‑Review**, and **Full Access** into a single typed decision layer (#4412).  
- The v0.9.1 release pipeline hit a critical milestone: the final “completion board” and release‑gate PRs were merged, clearing the path for the upcoming non‑publishing fan‑in shipment (#4650).

---

### 2. Releases
> **No new official releases** in the last 24 h. The project remains on the **v0.9.1‑candidate** series, with release‑gate PRs actively being merged.

---

### 3. Hot Issues  *(10 most noteworthy)*  

| # | Title (link) | Why it matters | Community signal |
|---|--------------|----------------|------------------|
| 4032 | **[bug, release‑blocker]** *Codewhale not following the constitution* | Shows the top‑ranked reliability regressions that halted merges; 41 comments indicate strong stakeholder concern over script‑generation discipline. | 👍: 0, Comments: 41 |
| 2870 | **[documentation, release‑blocker] EPIC: staged command‑boundary refactor** | Tracks the core refactor that underpins the new command‑registry; 15 comments show developers are watching the migration closely. | 👍: 0, Comments: 15 |
| 4227 | **[documentation, enhancement]** *feat: 🐋 help JayBeest map the CodeWhale tsunami 🌊* | Highlights the urgent need for a standardized dev‑environment setup script; 11 comments underscore the high project velocity. | 👍: 0, Comments: 11 |
| 2766 | **UI refactor needed** | Points to a usability blocker – copy‑ability and pop‑up UX – still unresolved after months. | 👍: 0, Comments: 9 |
| 2889 | **[documentation, enhancement]** *Work Agent rows: real sub‑agent details…* | Restores a critical UI slice for agent visibility; attention remains high (7 comments). | 👍: 0, Comments: 7 |
| 4410 | **[bug, release‑blocker]** *Restore xAI device‑code OAuth login* | Directly breaks authentication flow for the xAI CLI; 7 comments highlight a blocker before release. | 👍: 0, Comments: 7 |
| 2886 | **[documentation, enhancement]** *Enhancement: add Gherkin acceptance E2E coverage for tool lifecycle* | Moves test coverage forward; 6 comments indicate a push for higher quality assurance. | 👍: 0, Comments: 6 |
| 1917 | **[bug, documentation, enhancement]** *Proposal: universal PreToolUse/PostToolUse hook layer* | Addresses systemic Cancel/Pause/Resume handling; 5 comments signal broad architectural interest. | 👍: 0, Comments: 5 |
| 4636 | **[bug, release‑blocker]** *Make Work one truthful queue with clear Agents…* | Core to the new “calm, truthful queue” design; 4 comments show active review. | 👍: 0, Comments: 4 |
| 4650 | **[bug, release‑blocker]** *Completion board, exact final dogfood, and no‑publish release gate* | Final gating step for v0.9.1; 3 comments reflect final integration scrutiny. | 👍: 0, Comments: 3 |

*All links follow the pattern `https://github.com/Hmbown/CodeWhale/<ISSUE>`.*

---

### 4. Key PR Progress  *(10 most impactful merges)*  

| PR | Title (link) | Core change | Why it matters |
|----|--------------|-------------|----------------|
| 4673 | **[fix(shell)] default no‑cwd shell commands to context.workspace** | Resolves sub‑agent cwd regression (see Issue #4674). | Guarantees isolated worktrees execute in the correct directory. |
| 4675 | **[integrate] Integrate CodeWhale v0.9.1 runtime and release surface** | Merges runtime simplification, empty‑Work fix, and final TUI color grammar. | Brings the upcoming official release one step closer to reality. |
| 4652 | **[feat(cli)] add public `--no-project-config`** | Enables reproducible headless execution. | Critical for CI pipelines and automated tooling. |
| 4653 | **[test(tui)] lock long‑output transcript scrolling with a PTY scenario** | Closes the scrolling‑truncation bug reported in Issue #4603. | Improves TUI usability for long logs. |
| 4654 | **[fix(tui)] acknowledge Enter before slow send prep** | Eliminates Enter‑press freeze (~200‑1200 ms) described in Issue #4605. | Smoother interactive flow. |
| 4658 | **[feat(runtime-api)] add provider registry + switch endpoints** | Introduces stable provider/model picker API. | Removes fragile config‑reset workarounds. |
| 4657 | **[fix(streaming)] report progress on idle timeouts** | Adds detailed byte‑count telemetry to timeout errors. | Better diagnostics for streaming stalls. |
| 4656 | **[fix(route)] honor explicit limits for unknown local models** | Replaces generic 4K fallback with concrete limits (fixes Issue #4655). | Accurate output‑budget control for self‑hosted routes. |
| 4566 | **[feat] update tui Cargo.toml for HarmonyOS build** | Adjusts `portable-pty` targeting for non‑Unix builds. | Enables TUI on HarmonyOS again. |
| 4370 | **[enhancement, model‑lab] feat: add TelecomJS provider support** | Registers TelecomJS models in the catalog. | Expands provider diversity for enterprise users. |

*All PRs are linked via `https://github.com/Hmbown/CodeWhale/PR/<NUM>`.*

---

### 5. Feature Request Trends  

1. **Unified Skill Manager** – Multiple issues (#4651, #1917, #2870) request a single `/skills` surface that can install, update, audit, and remove skills across project, global, and compatible roots.  
2. **Improved Permission & Access Model** – Repeated calls for a **single contract** governing Ask, Auto‑Review, and Full Access (Issue #4412) and clearer role definitions (Planner/Worker/Reviewer/Verifier – Issue #3934).  
3. **Robust Provider Configuration & Limits** – Requests to expose provider registry APIs (Issue #4658), honor explicit output limits for unknown models (Issue #4656), and add stable provider/model picker UI (Issue #4658).  
4. **Better Dev‑Environment Bootstrapping** – A workflow‑level “Skill/workflow” that auto‑pulls `main`, rebuilds, and validates the dev setup (Issue #4227).  
5. **Enhanced TUI Ergonomics** – Copy‑friendly output, persistent long‑output transcript, and elimination of Enter‑press lag (Issues #2766, #4603, #4605).  

These directions dominate recent discussions and PR backlogs, indicating the community’s focus on **standardization, reliability, and polish** of the TUI/CI surface.

---

### 6. Developer Pain Points  

- **Workspace Isolation** – BashTool defaulting to `None` caused sub‑agents to run commands in the parent checkout, leading to subtle bugs (Issue #4674).  
- **TUI Unresponsiveness** – Long output truncation and a noticeable pause on Enter‑press freeze degrade the interactive experience (Issues #4603, #4605).  
- **Authentication Breakage** – The `/auth xai-device` OAuth flow fails with a “Failed to parse xAI device‑code response” error, blocking access for some external services (Issue #4410).  
- **Permission Ambiguity** – Multiple overlapping access flags (Ask, Auto‑Review, Full Access) create confusion about which contract governs a call, prompting the push for a unified permission model.  
- **Unclear Tool Lifecycle** – Lack of a universal PreToolUse/PostToolUse hook layer makes cancellations, pauses, and resumes error‑prone across different action types (Issue #1917).  

These recurring frustrations are driving the majority of the current issue backlog and PR prioritization.  

---  

*Prepared by the technical analyst team – concise, developer‑focused summary.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*