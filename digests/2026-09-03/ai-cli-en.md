# AI CLI Tools Community Digest 2026-09-03

> Generated: 2026-09-03 02:07 UTC | Tools covered: 9

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



# Cross-Tool Comparison Report: AI CLI Tools (2026‑09‑03)

## 1. Ecosystem Overview
The AI CLI tools ecosystem is in a phase of rapid iteration, with several major tools shipping releases and tackling high‑impact bugs. Security hardening, cross‑platform stability, and remote/headless operation dominate the immediate agenda. Communities are converging on plugin ecosystems, transparent usage metering, and modern TUI/UX, while differentiating through enterprise focus (Claude Code), remote‑first workflows (Codex), and provider neutrality (DeepSeek). Overall engagement remains high, with active issue discussions and frequent PR contributions.

## 2. Activity Comparison
| Tool | Issues Count (updated today) | PR Count (updated today) | Release Status |
|------|------------------------------|--------------------------|----------------|
| **Claude Code** | 50 (top 30 shown) | 4 | v2.1.259 released |
| **OpenAI Codex** | 10+ (top 10 listed) | 10 | rust‑v0.153.0 released |
| **Gemini CLI** | 10+ (top 10 listed) | 10 | No new release |
| **Kimi Code CLI** | 3 | 0 | No new release |
| **OpenCode** | N/A | N/A | v1.18.27 released |
| **Qwen Code** | 10+ (top 10 listed) | 10 | live‑host‑v0.2.0 released |
| **DeepSeek TUI (Codewhale)** | 10+ (top 10 listed) | 10 | No tagged release (v0.9.12 milestone) |

*Note: GitHub Copilot CLI and Pi had no data available.*

## 3. Shared Feature Directions
- **Security Hardening** – Gemini (variable expansion bypass, CVE patches), Qwen (shell guard, CVE audit), DeepSeek (path traversal, permission checks), Codex (input handling).
- **Remote/Headless Operation** – Claude Code (SSH session survival), Codex (headless Linux from mobile, Windows/Android remote), DeepSeek (per‑session control socket).
- **Cross‑Platform Stability** – Claude Code (Windows crashes, always‑on‑top), Codex (Windows UI bugs, macOS rendering), Qwen (Windows daemon, macOS font), Gemini (Wayland, Windows sandbox).
- **Plugin/Extension Ecosystems** – Codex (plugin CLI), DeepSeek (computer‑use bundle, marketplace), Gemini (skills/sub‑agents).
- **Usage Transparency** – Codex (quota depletion, metering), Claude Code (billing incident).
- **TUI/UX Modernization** – Codex (Vim mode), Qwen (ink → OpenTUI migration), DeepSeek (multi‑session fleet UI).
- **Configuration Management** – Kimi (XDG Base Directory), Gemini (system‑wide config permissions), DeepSeek (config schema alignment).
- **Provider Neutrality** – DeepSeek (provider gates), OpenCode (local OpenAI‑compatible endpoints).

## 4. Differentiation Analysis
- **Claude Code** targets enterprises with managed MCP servers and granular permission prompts, emphasizing centralized control.
- **Codex** focuses on remote‑first workflows and Vim ergonomics, appealing to mobile and keyboard‑driven developers.
- **Gemini** prioritizes security research and memory management, leveraging Google’s models for complex, long‑running tasks.
- **DeepSeek** differentiates through provider neutrality and IDE tooling parity (LSP, AST, debugger), aiming to be a universal agent.
- **Qwen** invests in TUI rendering migration and content sanitization, addressing reliability for production use.
- **Kimi** and **OpenCode** show narrower activity, with Kimi focusing on operational transparency and OpenCode on provider compatibility.

## 5. Community Momentum & Maturity
Claude Code, Codex, Gemini, Qwen, and DeepSeek exhibit high community momentum, with frequent releases, numerous PRs, and active issue discussions (often >10 comments per issue). Claude Code and Codex lead in user engagement (e.g., 675 👍 on a feature request). Kimi shows minimal activity (3 issues, no PRs). OpenCode’s data is incomplete but indicates a release. Overall, the ecosystem is rapidly iterating, with security and cross‑platform fixes dominating the immediate agenda.

## 6. Trend Signals
- **Security‑by‑Default** – Proactive CVE patching and permission hardening are becoming standard, reflecting a zero‑trust shift in CLI environments.
- **Remote‑First Development** – Growing demand for headless, mobile‑controlled, and supervision‑friendly interfaces enables autonomous operations.
- **Cross‑Platform Parity

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

## 1. Top Skills Ranking

| Rank | Skill | Functionality | Discussion Highlights | Status |
|------|-------|---------------|---------------------|---------|
| 1 | **skill-creator** | Skill development and testing infrastructure | Multiple critical bugs across Windows compatibility, evaluation failures (0% recall), YAML parsing validation | [OPEN #1298](https://github.com/anthropics/skills/pull/1298) |
| 2 | **Hivemind** | Multi-agent orchestration using opencode workers | Zero-cost delegation, scarce context optimization for expensive models | [OPEN #1628](https://github.com/anthropics/skills/pull/1628) |
| 3 | **self-audit** | Mechanical verification + 4-dimension quality gate | Universal audit skill across any tech stack, damage-severity priority | [OPEN #1367](https://github.com/anthropics/skills/pull/1367) |
| 4 | **servicenow** | Comprehensive ServiceNow platform assistant | Covers ITSM, ITOM, SecOps, HRSD, SPM, CSDM, IntegrationHub workflows | [OPEN #568](https://github.com/anthropics/skills/pull/568) |
| 5 | **testing-patterns** | Full testing stack guidance | Testing Trophy model, AAA patterns, React component testing, testing philosophy | [OPEN #723](https://github.com/anthropics/skills/pull/723) |
| 6 | **document-typography** | Typographic quality control | Prevents orphan words, widow paragraphs, numbering misalignment | [OPEN #514](https://github.com/anthropics/skills/pull/514) |
| 7 | **scnet-hpc** | SCNet HPC cluster operations | Profile-based SSH, Slurm workflows, cluster discovery, job generation | [OPEN #1615](https://github.com/anthropics/skills/pull/1615) |
| 8 | **odt** | OpenDocument format manipulation | Create, fill, read, convert .odt/.ods files via LibreOffice integration | [OPEN #486](https://github.com/anthropics/skills/pull/486) |

## 2. Community Demand Trends

From the most-discussed issues (#492 with 43 comments), the community prioritizes:

**Security & Trust:**
- **Namespace abuse protection** - Community skills impersonating official ones creates trust boundary vulnerabilities
- **Secure skill distribution** - Need for verification mechanisms before granting elevated permissions

**Collaboration & Management:**
- **Org-wide skill sharing** - Current manual process (download → Slack/Teams → upload) needs streamlining
- **Duplicate prevention** - Plugins installing identical skills wastes context window capacity

**Quality Assurance:**
- **Skills disappearing issues** - Users report lost skills after file operations
- **Skill creator best practices** - Documentation-heavy skills undermining token efficiency

**Platform Integration:**
- **SharePoint Security** - Concerns about access control logic in SKILL.md files
- **Bedrock compatibility** - Community seeking AWS Bedrock integration paths

## 3. High-Potential Pending Skills

These active PRs show strong community engagement:

1. **compact-memory** (#1329) - Symbolic notation for agent persistent memory (9 comments)
2. **skill-quality-analyzer** (#83) - Meta skill for comprehensive quality evaluation across 5 dimensions  
3. **mcp-builder evaluation fixes** (#1390) - Critical bug where evaluation scores 0/N due to JSON serialization failures
4. **reasoning quality gates** (#1385) - Three-gate pipeline for AI output quality across session lifecycle
5. **pyxel skill** (#525) - Retro game development via Pyxel MCP server

## 4. Skills Ecosystem Insight

The community is converging on **specialized, platform-specific automation skills** (HPC, ServiceNow, SharePoint) while simultaneously demanding **meta-skills** for quality assurance, security, and organizational management—indicating a maturing ecosystem moving beyond pure functionality toward governance and operational excellence.

---

Here's a thinking process:

1.  **Analyze User Request:**
   - Role: Technical analyst focused on AI developer tools
   - Task: Generate "Claude Code community digest for 2026-09-03" based on provided GitHub data
   - Data source: github.com/anthropics/claude-code
   - Required sections:
     1. Today's Highlights (2-3 sentences)
     2. Releases (summarize changes if new versions exist, omit if none)
     3. Hot Issues (10 noteworthy issues, explain why they matter + community reaction, include GitHub links)
     4. Key PR Progress (10 important PRs, describe features/fixes, include links)
     5. Feature Request Trends (distill most-requested feature directions from all issues)
     6. Developer Pain Points (summarize recurring developer frustrations/high-frequency requests)
   - Style: concise and professional, suited for technical developers
   - Include GitHub links for each item

2.  **Analyze the Data:**
   Let's go through the data carefully.

   **Latest Releases (last 24h):**
   - v2.1.259: v2.1.259
     - Added `managedMcpServers` managed setting: organizations can provide HTTP/SSE MCP servers to every user (same entry shape as `.mcp.json`); entries that name a command to run are skipped
     - Added `--permission-prompts none` for unattended headless hosts: anything that would prompt
   This is the only release info. I'll summarize it.

   **Latest Issues (updated in last 24h, Total: 50 items; showing top 30 by comment count):**
   Let's list them with key details:
   1. #36151 [OPEN] [invalid, area:auth] [FEATURE] Multi-account switching in Claude Mobile app without shared email
      - Author: CorneAussems | Created: 2026-03-19 | Updated: 2026-09-03 | Comments: 169 | 👍: 675
   2. #80444 [OPEN] [area:desktop] [Windows] Desktop app 1.24012.1: fatal GPU-process crash (0x060C201E) via in-app Browser tab; crash leaves MSIX package unlaunchable
      - Author: brainxd | Created: 2026-07-23 | Updated: 2026-09-03 | Comments: 104 | 👍: 16
   3. #85891 [OPEN] [invalid] [BUG] Claude Desktop (Windows 11): main window stays always-on-top of other applications, with no setting to disable it
      - Author: kylealty-boop | Created: 2026-08-11 | Updated: 2026-09-03 | Comments: 65 | 👍: 145
   4. #53247 [OPEN] [bug, platform:windows, area:cowork, area:desktop] [BUG] Claude Desktop fails to launch on Windows — orphaned Silo / Job Object after app crash
      - Author: rnpacheco25-sudo | Created: 2026-04-25 | Updated: 2026-09-02 | Comments: 50 | 👍: 22
   5. #76248 [OPEN] [bug, has repro, area:cowork] Cloud/Cowork sessions: git proxy now blocks all pushes — "not in this session's authorized repository set"
      - Author: Loneplanet117 | Created: 2026-07-10 | Updated: 2026-09-03 | Comments: 32 | 👍: 12
   6. #66516 [CLOSED] [invalid] [BUG] Claude Desktop macOS window stays always on top of other apps
      - Author: tekgrlpdx | Created: 2026-06-09 | Updated: 2026-09-03 | Comments: 28 | 👍: 5
   7. #49655 [CLOSED] [bug, platform:windows, area:cowork, area:installation, area:desktop] [BUG] Claude Desktop update fails with 0x80073CF6 when CoworkVMService is running
      - Author: jun-ho-hong | Created: 2026-04-17 | Updated: 2026-09-03 | Comments: 24 | 👍: 10
   8. #49790 [OPEN] [enhancement, area:desktop] Feature request: Claude Desktop SSH remote — session should survive client disconnect
      - Author: pwh9882 | Created: 2026-04-17 | Updated: 2026-09-03 | Comments: 17 | 👍: 41
   9. #81703 [OPEN] [BUG] July 17 mass billing incident: usage credits charged despite plan allowance; $604.71 automatic recharges disputed
      - Author: COOLak | Created: 2026-07-27 | Updated: 2026-09-03 | Comments: 12 | 👍: 0
   10. #87895 [CLOSED] [invalid] [BUG] Claude Desktop window stays always on top on Windows
       - Author: hyh2015 | Created: 2028-08-19 | Updated: 2026-09-03 | Comments: 11 | 👍: 61 (wait, created 2026-08-19, looks like typo in my read, but data says 2026-08-19)
   11. #89680 [OPEN] [bug, has repro, platform:windows, area:desktop] Windows desktop: stealth update leaves orphaned processes holding old AppX container
       - Author: jerds19 | Created: 2026-08-26 | Updated: 2026-09-03 | Comments: 8 | 👍: 0
   12. #89911 [OPEN] [bug, has repro, platform:linux, regression, area:permissions, area:agent-view] Inherited permission mode is silently demoted to permissions.defaultMode
       - Author: corneliusroemer-agent | Created: 2026-08-26 | Updated: 2026-09-02 | Comments: 5 | 👍: 0
   13. #91296 [OPEN] [bug, has repro, platform:macos, area:permissions] defaultMode: bypassPermissions in .claude/settings.local.json silently ignored, missing from Shift+Tab cycle
       - Author: jimmyjayp | Created: 2026-09-01 | Updated: 2026-09-03 | Comments: 4 | 👍: 3
   14. #84698 [OPEN] [bug, area:desktop] [BUG] Desktop: unrequested background `git fetch` to origin on diff/commit refresh — untraceable by design, and no setting disables it
       - Author: stu43005 | Created: 2026-08-07 | Updated: 2026-09-03 | Comments: 4 | 👍: 2
   15. #75116 [CLOSED] [bug, duplicate, platform:linux, area:model] [Bug][cyber] ClAudit false-positive...
       - Author: sworrl | Created: 2026-07-07 | Updated: 2026-09-02 | Comments: 4 | 👍: 0
   16. #63020 [CLOSED] [enhancement, area:ui, area:desktop] [FEATURE] Allow users to customize the background color of the Claude desktop app
       - Author: so-ramunas | Created: 2026-05-28 | Updated: 2026-09-02 | Comments: 4 | 👍: 0
   17. #78737 [OPEN] [bug, has repro, platform:windows, area:tui] [BUG] Main-screen input renderer emits a stray backspace before the first keystroke after ~4s idle
       - Author: DanKaplanSES | Created: 2026-07-18 | Updated: 2026-09-03 | Comments: 3 | 👍: 0
   18. #91528 [OPEN] [bug, area:ui, area:desktop] [BUG] Desktop app: crash/interrupted update corrupts session sidebar — projects reset to "Other"
       - Author: MoeAmMoe | Created: 2026-09-02 | Updated: 2026-09-03 | Comments: 3 | 👍: 0
   19. #90361 [OPEN] [invalid] [BUG] (brief, no summary shown in snippet)
       - Author: kdstover | Created: 2026-08-28 | Updated: 2026-09-03 | Comments: 3 | 👍: 1
   20. #75715 [CLOSED] [Bug][cyber] Safety block halted legitimate security research mid-analysis
       - Author: sworrl | Created: 2026-07-08 | Updated: 2026-09-03 | Comments: 3 | 👍: 0
   21. #75714 [CLOSED] [bug, duplicate, platform:linux, area:model, area:security] [Bug][cyber] ClAudit false-positive...
       - Author: sworrl | Created: 07-08 | Updated: 2026-09-03 | Comments: 3 | 👍: 0
   22. #75713 [CLOSED] [bug, duplicate, platform:linux, area:model, area:security] [Bug][cyber] Blocked legitimate firmware licensing-system reverse-engineering analysis
       - Author: sworrl | Created: 07-08 | Updated: 2026-09-03 | Comments: 3 | 👍: 0
   23. #75556 [CLOSED] [bug, duplicate, platform:linux, area:model, area:security] [Bug][cyber] Safety block halted debugging of native code on personal authorized test device
       - Author: sworrl | Created: 07-08 | Updated: 2026-09-03 | Comments: 3 | 👍: 0
   24. #91371 [OPEN] [bug, platform:windows, area:routines] [BUG] Local scheduled tasks silently hang mid-run and block later scheduled fires
       - Author: lululin221010 | Created: 2026-09-02 | Updated: 2026-09-03 | Comments: 2 | 👍: 0
   25. #73770 [OPEN] [enhancement, area:cost, area:statusline] statusline: expose per-model weekly rate limits to the status line command
       - Author: gnutix | Created: 2026-07-03 | Updated: 2026-09-03 | Comments: 2 | 👍: 7
   26. #76440 [OPEN] [enhancement, area:core, area:integrations] [FEATURE] Method to Cross-link specific Claude Code sessions with claude.ai chat sessions
       - Author: westleyd | Created: 2026-07-10 | Updated: 2026-09-03 | Comments: 2 | 👍: 3
   27. #75311 [CLOSED] [bug, duplicate, platform:linux, area:model, area:security] [Bug][cyber] Safety block halted a routine cloud-IAM tenant security audit mid-report
       - Author: sworrl | Created: 07-07 | Updated: 2026-09-03 | Comments: 2 | 👍: 0
   28. #75309 [CLOSED] [bug, platform:linux, area:model, area:security, api:anthropic] [Bug][cyber] Safety filter blocked routine cloud IAM policy review/configuration request
       - Author: sworrl | Created: 07-07 | Updated: 2026-09-03 | Comments: 2 | 👍: 0
   29. #75306 [CLOSED] [bug, platform:linux, area:model, area:security] [Bug][cyber] Safety block halted defensive-hardening writeup after a frustrated exclamation
       - Author: sworrl | Created: 07-07 | Updated: 2026-09-03 | Comments: 2 | 👍: 0
   30. #91650 [OPEN] [bug, has repro, platform:windows, area:bash, area:permissions] [BUG] Bash cd-compound-read guard prompts on absolute cd targets whenever a Read() deny rule exists
       - Author: railapex | Created: 2026-09-02 | Updated: 2026-09-03 | Comments: 1 | 👍: 3

   Now, **Latest Pull Requests (updated in last 24h, Total: 4 items)**:
   1. #41938 [CLOSED] Add Linux/macOS Bash script for DevContainer startup
      - Author: Broccoliux | Created: 2026-04-01 | Updated: 2026-09-02 | Comments: undefined | 👍: 0
   2. #87079 [OPEN] fix(security-guidance): make ** glob patterns match zero-depth paths
      - Author: anishsamant | Created: 2026-08-16 | Updated: 2026-09-02 | Comments: undefined | 👍: 0
   3. #86537 [OPEN] Fix duplicated word in CHANGELOG.md
      - Author: genesisdayabl-droid | Created: 2026-08-13 | Updated: 2026-09-02 | Comments: undefined | 👍: 0
   4. #61691 [OPEN] [scripts] Add diagnostic script for GitHub connector showing 'Connected' but no tools (#61682)
      - Author: giruuuuj | Created: 2026-05-23 | Updated: 2026-09-02 | Comments: undefined | 👍: 0

   I need to generate the digest. Let's structure it.

   **Section 1: Today's Highlights** - 2-3 sentences summarizing most important updates.
   Key updates: v2.1.259 release with managedMcpServers and --permission-prompts none; major issues around always-on-top desktop window, Windows launch failures, cowork session git proxy blocking pushes, permission demotion, and billing incident correction.

   **Section 2: Releases** - Summarize changes. v2.1.259 changes: managedMcpServers for org MCP server provisioning, --permission-prompts none for headless hosts. I'll summarize.

   **Section 3: Hot Issues** - Pick 10 noteworthy issues. I need to pick the most significant based on comments, community reaction, and relevance. Let's select:
   1. #36151 - Multi-account switching in Claude Mobile (675 likes, 169 comments, high interest)
   2. #80444 - Windows desktop GPU crash, MSIX unlaunchable (104 comments, 16 likes, technical crash issue)
   3. #85891 - Always-on-top window on Windows (145 likes, 65 comments, recurring bug)
   4. #53247 - Windows launch failure orphaned job objects (22 likes, 50 comments, blocking launch)
   5. #76248 - Cowork git proxy blocking pushes (12 likes, 32 comments, workflow disruption)
   6. #49790 - SSH remote session survive disconnect (41 likes, 17 comments, convenience feature)
   7. #89911 - Permission mode demotion in agents-view (0 likes, 5 comments, but important for permissions/security)
   8. #91296 - bypassPermissions silently ignored (3 likes, 4 comments, recent, permissions UX)
   9. #89680 - Stealth update orphaned processes on Windows (0 likes, 8 comments, update

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑09‑03**  

---

### 1. Today’s Highlights
- **rust‑v0.153.0** landed with a much‑requested Vim‑mode enhancement: `u` (undo) and `Ctrl+R` (redo) now preserve full drafts, including pasted content and attachments.  
- The plugin CLI gained the ability to list, install, and remove plugins, making extension management more discoverable.  
- A wave of Windows‑focused fixes landed in today’s PRs (app‑server daemon support, managed updates, OAuth credential store, and input hardening), while the community continues to surface high‑impact bugs around remote control, UI rendering, and quota accounting.

---

### 2. Releases  
| Version | Highlights |
|---------|------------|
| **rust‑v0.153.0** | • Vim mode now supports undo (`u`) and redo (`Ctrl+R`) with full draft preservation (including pasted content & attachments) – see PRs #41941 & #42140.<br>• Plugin CLI can `list`, `install`, and `remove` plugins (partial text in release notes indicates ongoing work). |
| **rust‑v0.153.0‑alpha.6** through **alpha.5** | Incremental alpha builds leading up to 0.153.0; no user‑visible changes beyond the final release. |

*No other version bumps were recorded in the last 24 h.*

---

### 3. Hot Issues (top‑10 by community activity)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **[#23200](https://github.com/openai/codex/issues/23200)** | *Headless remote Linux hosts for Codex mobile* – enables mobile control of always‑on Linux servers without keeping a desktop app online. | Critical for remote‑dev workflows; reduces reliance on a perpetually‑running workstation. | 22 comments, 56 👍 – strong enthusiasm for a true “mobile‑first” remote experience. |
| **[#39954](https://github.com/openai/codex/issues/39954)** | *Windows + Android Remote Control reconnect loop* – after init/thread‑list the client falls into a 409 conflict loop. | Blocks Android‑to‑Windows remote usage; a core scenario for many developers. | 20 comments, 0 👍 – frustration high despite no upvotes (likely due to recentness). |
| **[#41513](https://github.com/openai/codex/issues/41513)** | *Windows floating pets become click‑through and undraggable* – affects built‑in Codey and custom pets. | UI polish issue; pets are a beloved feature that now feels broken. | 19 comments, 6 👍 – moderate impact, mainly cosmetic but noticeable. |
| **[#41220](https://github.com/openai/codex/issues/41220)** | *[Meta] Abnormal quota depletion & usage‑accounting inconsistencies* – users report credits disappearing faster than expected. | Directly affects billing trust; could deter paid‑tier adoption. | 16 comments, 8 👍 – active discussion, calls for transparent metering. |
| **[#13270](https://github.com/openai/codex/issues/13270)** | *Invalid 'input[15].arguments': string too long* – hits the 1 MiB limit on tool‑call arguments. | Limits lengthy prompts/code snippets sent to the model; forces work‑arounds. | 16 comments, 0 👍 – recurring pain point for power users. |
| **[#40782](https://github.com/openai/codex/issues/40782)** | *macOS UI text thinner/blur after update* – regressions in font rendering on Apple Silicon. | Affects readability; especially noticeable in light theme. | 13 comments, 4 👍 – macOS users vocal about visual fidelity. |
| **[#30385](https://github.com/openai/codex/issues/30385)** | *Windows Desktop: recent local project threads missing from sidebar/search* – threads exist on disk but aren’t indexed. | Hinders project navigation; forces users to open threads by ID manually. | 12 comments, 1 👍 – persistent annoyance for heavy multitaskers. |
| **[#25826](https://github.com/openai/codex/issues/25826)** | *Windows maximized window spills onto adjacent monitors* – multi‑monitor layout bug. | Disrupts workflow on multi‑screen setups; causes unintended focus loss. | 12 comments, 15 👍 – one of the most up‑voted Windows UI bugs. |
| **[#40878](https://github.com/openai/codex/issues/40878)** | *Blank client area on Windows 26.820.7780.0; fixed with `--disable-direct-composition`* – regression in DirectComposition handling. | Renders the app unusable unless a launch flag is used. | 11 comments, 1 👍 – blocks casual users until patched. |
| **[#21804](https://github.com/openai/codex/issues/21804)** | *Add TUI option to preserve Vim mode after submitting prompts* – users want to stay in Insert mode for rapid follow‑ups. | Improves ergonomics for Vim‑heavy developers. | 5 comments, 17 👍 – high interest despite low comment count; indicates strong demand. |

---

### 4. Key PR Progress (selected 10)

| PR | Summary |
|----|---------|
| **[#42405](https://github.com/openai/codex/pull/42405)** | *Support the app‑server daemon on Windows* – enables a shared background server across Codex sessions, mirroring Unix daemon support. |
| **[#42392](https://github.com/openai/codex/pull/42392)** | *Support managed daemon updates on Windows* – uses non‑interactive PowerShell installer to keep the daemon current without user prompts. |
| **[#42381](https://github.com/openai/codex/pull/42381)** | *Support managed app‑server lifecycle on Windows* – launches the daemon as a detached process and handles Job‑Object constraints. |
| **[#42408](https://github.com/openai/codex/pull/42408)** | *Harden embedded composer input handling* – treats `! / ?` as literal text, preserves buffered characters during Vim mode changes, paste bursts, and Enter presses. |
| **[#42406](https://github.com/openai/codex/pull/42406)** | *Honor explicit plugin mentions during MCP startup* – ensures user‑requested plugins are waited for, preventing silent skips after the grace period. |
| **[#42395](https://github.com/openai/codex/pull/42395)** | *Expose the Codex version to commands and turn metadata* – sets `CODEX_VERSION` in shell/env and adds `codex_version` to MCP turn metadata for better traceability. |
| **[#42384](https://github.com/openai/codex/pull/42384)** | *Add an RMCP OAuth credential store adapter* – test‑only adapter that maps RMCP refreshes onto Codex’s pinned OAuth backend, facilitating credential sharing. |
| **[#42403](https://github.com/openai/codex/pull/42403)** | *Expose the last accepted environment ready report* – adds `Environment::last_ready_info()` for debugging provisioning state. |
| **[#42401](https://github.com/openai/codex/pull/42401)** | *Discover TUI collaboration modes from the app server* – fetches `collaborationMode/list` at startup/reconnect to populate the UI selector. |
| **[#42399](https://github.com/openai/codex/pull/42399)** | *Preserve restored input after resolved misalignment errors* – tracks the latest turn independently to avoid discarding drafts after a misalignment replay. |

---

### 5. Feature Request Trends
- **Remote‑first workflows** – headless Linux host control from mobile (#23200) and stable Windows/Android remote control (#39954) are top‑voted enhancements.  
- **Vim/TUI ergonomics** – preserving Vim mode after submit (#21804) and improving paste/Enter handling (see PR #42408) reflect a strong desire for a seamless keyboard‑centric experience.  
- **Transparent usage metering** – repeated quota‑depletion reports (#41220, #42127) show demand for clearer billing/usage dashboards and possibly adjustable rate‑limit windows.  
- **Cross‑platform UI polish** – macOS font rendering (#40782) and Windows multi‑monitor/window‑management bugs (#25826, #40878) indicate users expect pixel‑perfect, consistent UI across OSes.  
- **Plugin & extension discoverability** – the new plugin CLI list/install/remove capability addresses a growing request for easier extension management.

---

### 6. Developer Pain Points
| Area | Recurring frustrations |
|------|------------------------|
| **Windows stability** | Random blank client areas, maximized‑window spill, floating‑pet UI glitches, and remote‑control reconnect loops (issues #40878, #25826, #41513, #39954). |
| **macOS rendering** | Post‑update font thinning/blur affecting readability (#40782). |
| **Remote & mobile experience** | Need for headless Linux host control and reliable Android‑to‑Windows remote without desktop app staying online (#23200, #39954). |
| **Usage accounting & limits** | Sudden quota depletion, inconsistent credit tracking, and lack of transparent usage breakdowns (#41220, #42127, #42280). |
| **Tool‑call limits** | Hard 1 MiB argument string cap causing `invalid_request_error` on large prompts or code snippets (#13270). |
| **Vim/TUI persistence** | Vim mode resetting after each submit, forcing users to re‑enter Insert mode repeatedly (#21804). |
| **Plugin management** | Prior to the recent CLI addition, discovering/installing plugins was opaque; users relied on manual configuration. |
| **App‑server daemon parity** | Windows lacked a shared daemon, forcing each Codex session to spin up its own server, increasing resource usage and slowing startup (#42405, #42392, #42381). |

---

*Generated for developers seeking a concise, actionable snapshot of the OpenAI Codex ecosystem on 2026‑09‑03.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-03

## 1. Today's Highlights

The Gemini CLI project shows intense activity around security hardening and platform stability. A critical security fix for variable expansion bypass (#28902) and two dependency CVE upgrades (simple-git, shell-quote) were merged, while the community continues to grapple with memory management and agent reliability issues. Notably, work on AST-aware tooling and new Gemini 3.8 flash model support signals forward-looking improvements.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

### Issue #22323 — Subagent Recovery After MAX_TURNS Reports False Success
**Priority:** P1 | **Comments:** 13 | **Status:** Open

The `codebase_investigator` subagent incorrectly reports `status: "success"` with termination reason `"GOAL"` even when it hits the maximum turn limit before completing analysis. This masks critical failures and can lead to incorrect conclusions. The community has flagged this as a serious reliability concern for automated workflows.

🔗 [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

---

### Issue #27325 — Custom Slash Commands Migration to Antigravity CLI
**Priority:** P3 | **Comments:** 9 | **Status:** Closed

Users are asking whether custom commands stored in the `commands` folder will require migration to the new `skills` format for Antigravity CLI compatibility. With 4 👍 reactions, this reflects significant community concern about backward compatibility and migration effort for power users with extensive command libraries.

🔗 [Issue #27325](https://github.com/google-gemini/gemini-cli/issues/27325)

---

### Issue #22745 — Epic: Assess AST-Aware File Reads, Search, and Mapping
**Priority:** P2 | **Comments:** 7 | **Status:** Open

An ongoing epic to evaluate AST-aware tooling for more precise method-boundary reads, reduced token noise, and improved codebase navigation. This is marked as a workstream-rollup issue, indicating it's a coordinated effort across multiple related improvements. The investigation directly impacts agent efficiency and accuracy.

🔗 [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

---

### Issue #21968 — Gemini Does Not Use Skills and Sub-Agents Enough
**Priority:** P2 | **Comments:** 6 | **Status:** Open

Despite having custom skills and sub-agents configured (e.g., "gradle" and "git" skills), Gemini CLI does not invoke them autonomously during relevant tasks. Users must explicitly instruct the model, defeating the purpose of proactive skill utilization. This is a key DX improvement request.

🔗 [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

---

### Issue #27938 — High Memory Usage Leading to Crash
**Priority:** P2 | **Comments:** 5 | **Status:** Closed (Stale)

Reports of crash-inducing high memory usage (7+ GB) with garbage collection struggles. The issue includes detailed GC logs showing mark-compact operations failing to reclaim memory. Multiple similar issues (#27976) confirm this is a recurring problem affecting user sessions.

🔗 [Issue #27938](https://github.com/google-gemini/gemini-cli/issues/27938)

---

### Issue #29042 — Non-Numeric Background-PID Lines Become NaN
**Priority:** P2 | **Comments:** 5 | **Status:** Open

A parsing bug in shell tool output causes unrecognized sysmond messages in background-PID files to fall through to `Number(line)`, inserting `NaN` entries. This corrupts subsequent processing and can cause unexpected tool behavior. The bug was introduced in recent refactoring of the shell execution pipeline.

🔗 [Issue #29042](https://github.com/google-gemini/gemini-cli/issues/29042)

---

### Issue #26525 — Deterministic Redaction and Auto Memory Logging Reduction
**Priority:** P2 | **Comments:** 5 | **Status:** Open

Auto Memory sends transcript content to the extraction agent before redaction, creating a potential data exposure window. The security team is investigating deterministic redaction strategies and reducing logging of sensitive content in the background extraction pipeline.

🔗 [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

---

### Issue #29045 — read-many-files Substring Matching Corrupts Binary Detection
**Priority:** P1 | **Comments:** 4 | **Status:** Open

The `read-many-files` tool uses substring containment (instead of proper pattern matching) to determine if binary assets were "explicitly requested," causing directory name fragments to incorrectly match binary files and inline unrequested images. This is a data integrity issue affecting multi-repository investigations.

🔗 [Issue #29045](https://github.com/google-gemini/gemini-cli/issues/29045)

---

### Issue #25166 — Shell Commands Stuck with "Waiting Input" After Completion
**Priority:** P1 | **Comments:** 4 | **Status:** Open

Shell commands complete successfully but Gemini CLI hangs on "Awaiting user input," blocking further agent progress. This is a reproducibility issue with simple commands that don't require interaction, severely impacting workflow automation. Multiple users have confirmed the behavior.

🔗 [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

---

### Issue #22232 — Browser Agent Session Takeover and Lock Recovery
**Priority:** P3 | **Comments:** 4 | **Status:** Open

The browser agent employs a "fail-fast" strategy when encountering locked browser profiles, instead of attempting automatic session takeover or lock recovery. Users running persistent sessions frequently encounter orphaned processes that block new sessions.

🔗 [Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232)

---

## 4. Key PR Progress

### PR #28902 — Block $VAR and ${VAR} Variable Expansion Bypass (GHSA-wpqr-6v78-jr5g)
**Priority:** P1 | **Status:** Closed

A critical security fix addressing incomplete checks in `detectBashSubstitution()` and `detectPowerShellSubstitution()`. The bypass allowed malicious variable expansion patterns to circumvent the security gate. Includes defense-in-depth hardening for the automated issue dedup workflow.

🔗 [PR #28902](https://github.com/google-gemini/gemini-cli/pull/28902)

---

### PR #28914 — Inject On-Retry Nudge into Conversation Contents
**Status:** Closed

Fixes prefix caching issues by moving the on-retry nudge message from `config.systemInstruction` to the end of the `contents` array. This ensures the model immediately observes recovery nudges and preserves static prompt prefix caching for improved performance.

🔗 [PR #28914](https://github.com/google-gemini/gemini-cli/pull/28914)

---

### PR #29172 — Add Support for Gemini-3.8-flash as Default Flash Model
**Status:** Open

Registers `gemini-3.5-flash-lite`, `gemini-3.6-flash`, `gemini-3.7-flash`, and `gemini-3.8-flash` as valid selectable models. Promotes `gemini-3.8-flash` to the default flash model, providing users access to the latest flash-tier capabilities.

🔗 [PR #29172](https://github.com/google-gemini/gemini-cli/pull/29172)

---

### PR #29094 — Upgrade simple-git to 3.32.3 (CVE-2026-28292)
**Priority:** P1 | **Status:** Open

Critical dependency upgrade to patch CVE-2026-28292 in `simple-git`. Trivy scanner flagged the vulnerability, prompting immediate remediation to protect users from potential exploits in git operations.

🔗 [PR #29094](https://github.com/google-gemini/gemini-cli/pull/29094)

---

### PR #29095 — Upgrade shell-quote to 1.8.4 (CVE-2026-9277)
**Status:** Open

Critical CVE fix for `shell-quote` dependency, addressing vulnerability identified by Trivy. Ensures safe shell command parsing and prevents potential injection attacks.

🔗 [PR #29095](https://github.com/google-gemini/gemini-cli/pull/29095)

---

### PR #29093 — In-Memory Cache for Ignored Paths
**Priority:** P1 | **Status:** Open

Introduces an in-memory cache keyed by file path, directory flag, and options to avoid repeated pattern matching. Implements subtree pruning in `getIgnoredPaths`—when a directory is ignored, its contents are skipped entirely, drastically reducing filesystem overhead for large repositories.

🔗 [PR #29093](https://github.com/google-gemini/gemini-cli/pull/29093)

---

### PR #29098 — Keep useInputHistoryStore State Updaters Pure
**Priority:** P1 | **Status:** Open

Fixes a React state management bug where `addInput()` scheduled side effects (`recalculateHistory()`) inside a state updater function. Since React state updaters may be double-invoked, this caused inconsistent input history behavior. Refactors to pure updater functions.

🔗 [PR #29098](https://github.com/google-gemini/gemini-cli/pull/29098)

---

### PR #29097 — Strip Only Trailing .git Suffix in GitHub Repo Parsing
**Status:** Open

Fixes `tryParseGithubUrl` which incorrectly stripped the first occurrence of `.git` anywhere in the repo name (e.g., `blog.github.io` became `hub.io`). Now correctly handles repos with `.git` in non-suffix positions, preventing incorrect API URL generation.

🔗 [PR #29097](https://github.com/google-gemini/gemini-cli/pull/29097)

---

### PR #29115 — Enforce Strict Permission Checks on System-Wide Config Paths
**Status:** Open

Implements file ownership and ACL verification for system-wide configuration files on Windows and POSIX platforms before loading settings. Addresses security concerns about untrusted configuration files modifying system behavior.

🔗 [PR #29115](https://github.com/google-gemini/gemini-cli/pull/29115)

---

### PR #29170 — Enhance Workspace Path Boundary Checks and Symlink Resolution
**Status:** Open

Improves workspace boundary enforcement and symlink resolution across command safety heuristics, file discovery services, and directory listing tools. Adds `isPathEscapingWorkspace` checks to prevent directory traversal attacks and ensure safe file operations.

🔗 [PR #29170](https://github.com/google-gemini/gemini-cli/pull/29170)

---

## 5. Feature Request Trends

Based on issue analysis, the community is prioritizing:

| Trend | Description | Representative Issues |
|-------|-------------|----------------------|
| **Agent Autonomy** | Smarter, proactive invocation of skills and sub-agents without explicit instructions | #21968, #22232 |
| **AST-Aware Tooling** | Precise method-boundary reads and codebase mapping using syntax analysis | #22745, #22746 |
| **Memory Management** | Better handling of long-running sessions, Auto Memory quality, and extraction retry logic | #26522, #26523, #26525, #26516 |
| **Cross-Platform Reliability** | Improved Wayland, Windows, and macOS sandbox behavior | #21983, #25166, #29171 |
| **CLI Stability** | Shell command lifecycle, background process handling, and command timeout management | #29042, #25166, #22466 |
| **Security Hardening** | Deterministic redaction, path traversal prevention, and permission verification | #26525, #29115, #29170, #28902 |

---

## 6. Developer Pain Points

1. **Memory Exhaustion**: Repeated reports of 7+ GB memory usage causing crashes, particularly in multi-repository investigation scenarios. Users are requesting better memory profiling and automatic resource cleanup.

2. **Shell Command Hangs**: Commands complete but CLI remains stuck waiting for input, blocking automation. This is the most reproducible critical bug affecting daily usage.

3. **Skill/Sub-Agent Discovery**: Developers expect domain-specific skills (git, gradle) to be invoked contextually but must explicitly prompt for them, reducing CLI effectiveness for specialized workflows.

4. **Dependency Security**: Multiple critical CVEs in transitive dependencies (simple-git, shell-quote, fast-uri) require vigilant patching, creating maintenance burden and security risk for users.

5. **Auto Memory Quality**: The extraction agent sometimes skips sessions or retries indefinitely with low-signal content, wasting API quota and generating noise in memory stores.

6. **Browser Agent Resilience**: Persistent browser sessions fail on lock detection with no recovery mechanism, forcing manual process cleanup.

7. **Config File Permissions**: System-wide configuration files lack ownership verification, posing security risks in multi-user environments.

---

*Data sourced from github.com/google-gemini/gemini-cli — September 3, 2026*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-03

## Today's Highlights
No new releases were published in the last 24 hours, but three issues saw activity, all of which have now been closed. The themes reflect ongoing community pressure for better operational transparency (yolo mode visibility), more graceful interrupt handling, and stricter Unix convention compliance via XDG Base Directory support.

## Releases
No new releases in the last 24 hours.

## Hot Issues

**1. [#1298 — yolo mode: view shell execution and file write contents](https://github.com/MoonshotAI/kimi-cli/issues/1298)** — *CLOSED*
User Wolido requests that, in yolo (auto-approve) mode, the CLI surface the exact shell command being executed and the full contents of file writes, not truncated middle sections. This is a trust-and-safety ask: when commands run unattended, the user needs enough information to spot runaway behavior and abort. Relevant to anyone running unattended autonomous loops.

**2. [#1297 — Escape key cancel of subagents throws unhandled exception](https://github.com/MoonshotAI/kimi-cli/issues/1297)** — *CLOSED* 👍1
User chriswingler (Windows 10, kimi-for-coding 1.16.0) reports an "Unhandled exception" when hitting Esc to cancel a running subagent. The interrupt path is not graceful on Windows, which is a reliability concern for users who rely on Esc as an emergency stop. Worth watching for a regression fix in the next patch release.

**3. [#1294 — Follow XDG Base Directory spec (`~/.config/kimi` vs `~/.kimi`)](https://github.com/MoonshotAI/kimi-cli/issues/1294)** — *CLOSED* 👍1
User sisrfeng asks the CLI to use `~/.config/kimi` per the XDG Base Directory specification, citing the antidot and `$HOME` hygiene arguments. A long-standing request from Linux power users who keep their home directory clean and version-controlled; the closing suggests this may have been addressed in a recent change.

*Note: Only 3 issues were updated in the last 24h; remaining slots are unavailable.*

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
- **Operational transparency in yolo mode** — exposing shell commands and diff payloads when commands auto-execute, so users can audit and intervene.
- **XDG Base Directory compliance** — moving config/state out of `$HOME` into `~/.config/kimi`, in line with standard Linux desktop conventions.
- **Robust cancellation semantics** — graceful handling of Esc/ctrl-c interrupts on subagents across platforms, without unhandled exceptions.

## Developer Pain Points
- **Limited visibility during autonomous execution**: long shell commands are truncated in the middle, leaving developers unable to see exactly what the agent is doing before damage occurs.
- **Unsafe interrupt behavior**: cancellation of long-running subagents crashes with an unhandled exception on at least one platform (Windows), eroding confidence in the abort path.
- **Home-directory pollution**: dropping a `.kimi` config directly into `$HOME` clashes with users who enforce XDG conventions, especially on Linux, and shows up repeatedly as friction in CLI tooling reviews.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest — 2026-09-03**

### 1. Today's Highlights
Today’s update features the release of v1.18.27, which patches critical timeout and Anthropic thinking-block configuration bugs. Concurrently, the community is heavily engaged on a high-impact proposal to auto-discover models from local OpenAI-compatible endpoints, while a wave of reports highlights ongoing compatibility issues with Anthropic's `thinking.block_binding` parameter across multiple providers.

### 2. Releases
**v1.18.27** has been released, addressing several stability and configuration issues:
*   **Timeout Defaults:** Provider header timeouts and streamed chunk

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-09-03

## Today's Highlights
The Qwen Code team made significant progress migrating the TUI rendering layer from ink to OpenTUI, with batch 4 of the OpenTUI migration now completed. Security issues were identified in the `qwen serve` daemon's shell guard that blocks git commands and ignores session approval modes. The team also addressed CVE audit failures blocking releases and made important improvements to content sanitization for thinking blocks and tool calls.

## Releases
**live-host-v0.2.0** - The latest release includes the Qwen Live Host v0.2.0. Release notes are generated using configuration in `.github/release.yml` at commit 867bb94a1f317e6fae04c2f5b78961b42e030311.

## Hot Issues

1. **#8662 - Migrate TUI rendering layer from ink to OpenTUI** (23 comments)
   *Why it matters*: The current ink-based TUI has structural problems including flicker, performance issues, and a heavily patched renderer (~1037 lines of patches). This migration addresses fundamental architectural limitations.
   *Community reaction*: High engagement with 23 comments indicates strong developer interest and discussion around the migration impact.

2. **#10860 - `qwen serve` shell guard ignores session approval mode** (3 comments)
   *Why it matters*: A critical security issue where the built-in shell guard denies read-only Git commands outside session directories without proper configuration, auditing, or operator visibility.
   *Community reaction*: Security-focused discussion with maintainers seeking resolution.

3. **#10859 - Serve shell guard blocks every git command** (3 comments)
   *Why it matters*: Similar security issue where the daemon shell guard blocks all git operations outside session directories without transparency or override capability.
   *Community reaction*: Contributors reporting inability to configure or audit the blocking behavior.

4. **#10818 - Monitor pulse storm DoS interactive session** (3 comments)
   *Why it matters*: A bug where monitor pulse storms can crash interactive sessions, making ESC cancel ineffective and starving user input.
   *Community reaction*: Active debugging with session transcripts showing real-world impact (25MB, 13,806 records).

5. **#10850 - Dependency CVE audit fails repo-wide** (2 comments)
   *Why it matters*: Four vulnerabilities (1 low, 2 moderate, 1 high) in main lockfile are blocking CI release pipeline.
   *Community reaction*: Urgent response needed to unblock releases and improve dependency security.

6. **#10834 - MCP tool images bypass read_file budget** (2 comments)
   *Why it matters*: Images from MCP tools bypass the shared visual budget, entering at full resolution instead of being scaled to the 1568px maximum edge limit.
   *Community reaction*: Quality control issue affecting performance and context management.

7. **#10692 - XML tool calls leak as plain text** (2 comments)
   *Why it matters*: Tool calls in content/text field miss recovery of the `<tool_call>` dialect, potentially exposing sensitive tool invocation data.
   *Community reaction*: Security-critical bug affecting tool call confidentiality.

8. **#10791 - Balanced thinking blocks leak to output** (2 comments)
   *Why it matters*: Properly balanced `<thinking>...</thinking>` blocks in content-only turns are not being sanitized, exposing model reasoning to users.
   *Community reaction*: Content sanitization gap identified in hybrid-thinking models.

9. **#10797 - Non-thinking scaffolding tags leak** (2 comments)
   *Why it matters*: Tool-result-style XML blocks and other internal scaffolding are reaching user-visible output, potentially revealing system internals.
   *Community reaction*: Additional content leakage vector discovered beyond known thinking tag issues.

10. **#10700 - Orphaned tool-call closing tags leak** (2 comments)
    *Why it matters*: When models drop function-calling format, only closing XML tags (e.g., `</parameter>`, `</invoke>`) leak into content without corresponding opening tags.
    *Community reaction*: Edge case in XML parsing leading to content contamination.

## Key PR Progress

1. **#10773 - OpenTUI: Pre-select configured output style in picker**
   *Fix*: OpenTUI `/output-style` picker now pre-selects the user's configured style instead of the running session's style, matching ink dialog behavior.
   *Status*: Active development with undefined comments.

2. **#10842 - Release test retry for flaky stable releases**
   *Fix*: Stable releases now retry workspace tests that fail, with six tests hardened to stop needing retries.
   *Status*: Critical for release quality with ~30,000 tests running.

3. **#10793 - Route daemon permission votes by session**
   *Fix*: Daemon-managed Channels now submit permission decisions through session-scoped vote path when supported.
   *Status*: Includes regression coverage for session-scoped routing.

4. **#10754 - Disable Push when branch is behind upstream**
   *Fix*: Closes gaps where push would fail with upstream configured but branch behind.
   *Status*: Addresses two specific sandboxed verification measurements.

5. **#10136 - Review shape optimization for critical posture**
   *Fix*: Multi-round re-reviews now run narrowed **fix-audit shape** instead of full shape when headed for critical-only posting.
   *Status*: Includes plan-time posture prediction for optimal review strategy.

6. **#10169 - Review fix-delta auditing**
   *Fix*: When `/review --fix` applies findings, it audits what was applied with bounded agent without re-reviewing the tree.
   *Status*: Includes new `qwen review fix-delta --snapshot` for change tracking.

7. **#10361 - Critical feedback classification by leading marker**
   *Fix*: Changes Critical-only feedback classification to inspect first rendered severity marker rather than anywhere in body.
   *Status*: Preserves contract for Comment summaries with body-level Critical findings.

8. **#10347 - Auto-retry transient network errors (EOF)**
   *Fix*: Classifies 4xx errors as retryable transport errors when they're actually wrapped low-level network failures.
   *Status*: Improves resilience when Ctrl+Y unavailable.

9. **#10455 - CLI startup protection for unwritable output-language file**
   *Fix*: Prevents CLI startup crash when advisory output-language rule file cannot be written (read-only directories, root-owned leftovers).
   *Status*: Defensive programming for edge cases in CLI initialization.

10. **#10458 - Review comment footer strip fix**
    *Fix*: Prevents both footers from being posted when strip silently finds nothing to remove in review comments.
    *Status*: Quality assurance for review comment attribution.

## Feature Request Trends

1. **TUI Rendering Migration**: Strong push to migrate from ink to OpenTUI for better performance, reduced patching, and improved maintainability. Batch 4 implementation indicates progress toward complete migration.

2. **Security Hardening**: Multiple requests for configurable, auditable daemon shell guards with proper session approval mode support. Emphasis on operator visibility and override capabilities.

3. **Content Sanitization Improvements**: Recurring issues with thinking blocks, tool calls, and internal scaffolding leaking to user output. Need for more comprehensive sanitization across different content types.

4. **Configuration & Auditing**: Requests for better configuration options, audit trails, and operator visibility into daemon operations and security decisions.

5. **Image Management**: Need for consistent image budgeting across all image sources, particularly MCP tools that currently bypass read_file limitations.

6. **CI/CD Reliability**: Focus on stabilizing CI pipelines, reducing flakiness, and improving test reliability to unblock releases.

## Developer Pain Points

1. **Security & Configuration Frustration**: Multiple reports of daemon shell guards that cannot be configured, audited, or overridden, creating operational blind spots for DevOps teams.

2. **Content Leakage Security Issues**: High-frequency reports of thinking blocks, tool calls, and internal scaffolding tags reaching user-visible output, potentially exposing sensitive model reasoning and system internals.

3. **CI/CD Pipeline Blockers**: CVE audit failures and flaky tests are consistently blocking releases, with dependency management becoming a recurring bottleneck.

4. **TUI Performance & Maintenance**: The current ink-based TUI requires ~1037 lines of patches and suffers from fundamental architectural issues causing flicker and performance problems.

5. **Edge Case Handling**: Various edge cases in content parsing (orphaned tags, balanced thinking blocks, mixed content types) are not properly sanitized, requiring defensive fixes.

6. **Configuration Management**: Difficulty in properly configuring and auditing security features, with operators unable to see or control daemon behavior in production.

7. **Image Processing Inconsistencies**: Different image sources (MCP tools vs read_file) have different budget enforcement, leading to performance issues and resource consumption problems.

8. **Test Reliability**: Multiple CI failures indicate test suite flakiness and reliability issues that impact release velocity and developer productivity.

The community is actively addressing these pain points through targeted fixes and architectural improvements, with particular focus on security hardening, content sanitization, and CI/CD reliability.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-03

*Note: Repository activity now appears under `Hmbown/Codewhale` (the v0.9.12 rebrand from DeepSeek-TUI). Links reflect the current home.*

---

## 1. Today's Highlights

The v0.9.12 integration wave is landing in force: the **mega-PR #5826** consolidates shell, brand, fleet vocabulary, and the new "Operate" goal loop into a single release, while #5832 closes the **provider-neutrality** audit that rewired 18 DeepSeek-specific gates. On the UX front, **PR #5831** ships the per-session control socket (#5533) — the supervised-operation surface requested by external harness users — and **#5861** fixes a subtle brand inconsistency where the sign-in page rendered a different whale than the rest of the product.

---

## 2. Releases

*No tagged releases in the last 24h. The v0.9.12 milestone (#5573) is in active integration; expect a tagged cut once the operator handoff completes.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Comments |
|---|-------|----------------|----------|
| [#5573](https://github.com/Hmbown/Codewhale/issues/5573) | v0.9.12 milestone tracker | The single source of truth for the next release — gates, slice order, and operator handoff all live here. | 23 |
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | EPIC-005: TUI Crate Decomposition (Umbrella) | Long-running structural epic; every sub-EPIC and PR in this lane reports back to it. | 21 |
| [#5588](https://github.com/Hmbown/Codewhale/issues/5588) | Provider neutrality: 18 DeepSeek-exclusive gates | Foundational cleanup — closes in #5832; unblocks any non-DeepSeek provider from working correctly. | 7 |
| [#5586](https://github.com/Hmbown/Codewhale/issues/5586) | Decompose the mega files (lib.rs 18.7k, config.rs 12.3k…) | Maintenance pain point — the 10k+-line files are the user's #1 ask for cleanup. | 6 |
| [#5533](https://github.com/Hmbown/Codewhale/issues/5533) | Per-session control socket for supervised operation | Ships in #5831 — enables multiplexers and CI harnesses to steer sessions without attaching. | 5 |
| [#3957](https://github.com/Hmbown/Codewhale/issues/3957) | Refactor: split shared modal infrastructure | Oldest still-open cleanup; `views/mod.rs` is the leftover catch-all. | 4 |
| [#5268](https://github.com/Hmbown/Codewhale/issues/5268) | Mid-turn control (queue / send-now / Esc-keep-draft) | UX clarity ask — collapses three confusing steering behaviors into one contract. | 3 |
| [#5820](https://github.com/Hmbown/Codewhale/issues/5820) | Ollama: input budget collapses to 1024 tokens on 32K models | Concrete provider bug — default output reservation clamps the usable context. | 2 |
| [#5575](https://github.com/Hmbown/Codewhale/issues/5575) | Fleet/subagent role posture has no single source of truth | Architectural smell surfaced by verifier-contradiction bug #5562. | 2 |
| [#5769](https://github.com/Hmbown/Codewhale/issues/5769) | Network errors sometimes cause the engine to stop | Reliability regression reported on Linux Mint; affects supervision flows. | 2 |

---

## 4. Key PR Progress

| PR | Title | Impact |
|----|-------|--------|
| [#5861](https://github.com/Hmbown/Codewhale/pull/5861) | chore(brand): serve the canonical whale on account-entry pages | Aligns sign-in/sign-up whale with the rest of the product — traced path from `brand/mark.svg`. |
| [#5826](https://github.com/Hmbown/Codewhale/pull/5826) | feat: Codewhale 0.9.12 shell, brand, fleet, and Operate (mega) | The headline integration wave — replaces the old launch surface with a custom card, brand trace, fleet vocabulary, and goal loop. |
| [#5832](https://github.com/Hmbown/Codewhale/pull/5832) | fix(providers): provider neutrality gates (#5588) | Closes the 18-gate audit; enables `/balance` lookup, ghost-text, and dispatcher to work across OpenRouter / SiliconFlow / DeepSeek. |
| [#5831](https://github.com/Hmbown/Codewhale/pull/5831) | feat(tui): per-session control socket (#5533) | Opt-in Unix JSON-RPC at `<sessions-dir>/<id>/control.sock` — `message` / `interrupt` / `relaunch` / `status`. |
| [#5833](https://github.com/Hmbown/Codewhale/pull/5833) | feat(memory): FEAT-019 memory capability, memory facet, and typed outcomes | Adds `CommandCapabilities::MEMORY` + typed outcomes for `/memory` search/remember/get/export/reindex/delete. |
| [#5858](https://github.com/Hmbown/Codewhale/pull/5858) | tui: collapse ocean_treatment into ThemeId::Underwater | Closes the ocean-collapse slice; 11 commits unify deepsea alias + single picker. |
| [#5843](https://github.com/Hmbown/Codewhale/pull/5843) | tui: align typed config and schema with the live value spaces | Custom themes survive; orphaned locale keys dropped; dead-code budget PASS at 425. |
| [#5859](https://github.com/Hmbown/Codewhale/pull/5859) | copy: clearer, shorter, warmer English across errors, pickers, launch | Locale-key stable; 117/117 locale+golden tests pass. |
| [#5840](https://github.com/Hmbown/Codewhale/pull/5840) | runtime: persist tool-call identity so restarts replay valid history (#5823) | Fixes `serve --http` 400s after restart on threads with tool-call history. |
| [#5855](https://github.com/Hmbown/Codewhale/pull/5855) | feat(plugins): computer-use bundle — screenshot, click, type over MCP | First independent plugin on the bundle boundary; 9/9 protocol tests pass; live 1920px macOS screenshot captured. |

---

## 5. Feature Request Trends

Reading across the open issues, five directional asks dominate:

1. **Multi-session / fleet visibility in the TUI.** #5268, #5271, #5479, #5575 cluster around making sub-agents first-class citizens — a glanceable agents rail, peek/answer without full attach, mid-turn queue/steer contract, and a single source of truth for role posture.
2. **Provider neutrality as a first-class principle.** #5588 (closed via #5832), #5820 (Ollama input budget), and the retired `DEEPSEEK_YOLO` alias (#5443 → #5841) show the community pushing hard to keep DeepSeek a *provider*, not the product's identity.
3. **Tooling parity with modern IDE agents.** #3975 (LSP rename/code actions), #3980 (AST-backed search), #3981 (debugger protocol), #3977 (notebooks/archives), #3358 (Playwright browser automation) — CodeWhale is methodically closing the gap with cursor-class tooling.
4. **Human-in-the-loop steering.** #5268 (mid-turn control), #5625 (non-blocking peek tool for pending user input), #5269 (durable plan artifact with line comments), #5533/#5831 (supervised control surface).
5. **Plugin / extension ecosystem.** #5855 (computer-use MCP bundle) and #5842 (plugin + marketplace over `/v1/apps`) are the first two concrete pieces of the gated local plugin system — a clear platform direction.

---

## 6. Developer Pain Points

- **Mega-files are unmaintainable.** `lib.rs` (18.7k), `config.rs` (12.3k), `client.rs` (11.1k), `runtime_threads.rs` (9.3k) — #5586 is the loudest user complaint and is still OPEN.
- **Modal infrastructure sprawl.** `tui/views/mod.rs` and `tui/setup/mod.rs` (3,847 lines) are recurring cleanup targets (#3957, #3954).
- **Duplicated role / policy definitions.** #5575 documents the same role posture interpreted in five places that have drifted more than once — a verifier contradiction already shipped (#5562).
- **Provider correctness bugs.** Ollama input-budget clamp (#5820), tool-call identity not surviving restarts (#5823, fixed in #5840), network errors halting the engine (#5769) — the multi-provider story still has rough edges.
- **Mid-turn UX is unclear.** Enter-while-busy, Ctrl-Enter, and Esc keep-draft are three different behaviors with no crisp visible contract (#5268).
- **Destructive TTL cleanup.** Lane TTL could recursively delete an unverified path (#5824 → #5854) — a scary class of bug that justified the new managed-worktree verification gate.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*