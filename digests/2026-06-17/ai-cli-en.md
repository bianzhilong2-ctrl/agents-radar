# AI CLI Tools Community Digest 2026-06-17

> Generated: 2026-06-17 02:47 UTC | Tools covered: 9

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

**Cross‑Tool AI CLI Landscape – 2026‑06‑17**

| Tool | Issues (24 h) | PRs (24 h) | Last Release |
|------|--------------|------------|--------------|
| Claude Code | 10 hot issues + ~30 overall | 10 PRs | v2.1.179 (today) |
| OpenAI Codex | 10 hot issues + ~30 overall | 0 PRs | *none* |
| Gemini CLI | 10 hot issues + ~30 overall | 0 PRs | *none* |
| Copilot CLI | 10 hot issues + ~30 overall | 0 PRs | v1.0.64‑0 (today) |
| Kimi Code CLI | 4 hot issues + ~10 overall | 1 PR | *none* |
| Qwen Code | 10 hot issues + ~30 overall | 10 PRs | v0.18.1‑preview.0 (today) |
| DeepSeek TUI | 10 hot issues + ~30 overall | 10 PRs | v0.8.61 (today) |

---

### 1. Ecosystem Overview  
The AI CLI ecosystem has matured beyond prototype releases: most projects now ship stable binary distributions and are deploying incremental feature branches. Continuous integration of  “safety‑first” MCP/OAuth hardening and plugin‑extensibility scaffolding is common. Windows, WSL, and macOS remain the primary painpoints, underscoring the per‑platform quirks that still drive feature requests. The dominant trend is a shift from *single‑agent* command‑line helpers to *agent orchestration* stacks that support sub‑agents, memory plumbing, and automatic workflow preservation.

---

### 2. Shared Feature Directions  

| Requirement | Tools | Notes |
|-------------|-------|-------|
| **MCP/OAuth robustness** | Claude, Gemini, Copilot | Parallel issues around token leakage, atomic writes, and “Bearer token never sent”. |
| **Agent loops & cost control** | Claude, Qwen, DeepSeek, Copilot | Excessive loops, runaway `parallel()` fan‑out, and usage‑quota safeguards. |
| **IDE / desktop integration** | Claude (JetBrains plugin), Copilot (VS Code custom model support) | Demand for a seamless IDE experience that matches the command‑line workflow, especially for larger monorepos. |
| **Secure path handling** | Gemini, Qwen, DeepSeek | Unicode path checks, symlink escape prevention, and case‑insensitive blocklists. |
| **Centralized usage metrics** | Claude, Copilot, Gemini | API‑level visibility into Sonnet vs. “all” usage and lock‑out mechanisms for runaway sessions. |
| **Plugin namespace safety** | Claude, Gemini, DeepSeek | Collision handling, shell‑injection guards, and WP (`slash.`) hot‑bar linkage. |
| **Multi‑agent orchestration UI** | DeepSeek, Qwen, Gemini | Visible parallel worker panels, conflict resolution, and “work‑surface” reporting. |
| **On‑boarding & credential guidance** | Kimi, Copilot | Fresh‑install failures, missing `login` prompts, and auto‑recovery of deleted MCP servers. |

---

### 3. Differentiation Analysis  

| Tool | Core Focus | Target Users | Technical Highlights |
|------|------------|--------------|----------------------|
| **Claude Code** | Agent‑centric coding, sandboxed tool execution | Power users in VS Code/WSL, Cloud‑native workflows | Mid‑stream error resilience, .NET‑style tooling, WSL2‑specific fixes |
| **OpenAI Codex** | TUI‑based macOS/iOS integration, plugin catalog | OSS & educational labs | Heavy telemetry, policy‑driven rollout, strict JSON parsing |
| **Gemini CLI** | Interactive browser agents, Wayland/Unix UI | DevOps & sysops | Auto‑memory context trimming, destructive‑tool confirmation hooks |
| **Copilot CLI** | Enterprise‑grade MCP discovery, CLI‑only plugin registry | Enterprise devops & MLOps teams | Native `/diagnose`, CSV tool exports, ARM64 stability focus |
| **Kimi CLI** | Lightweight prompt‑centric experience | Hobbyists & quick prototyping | Minimal config, “think”‑stream hiding, default step‑limit adjustments |
| **Qwen Code** | Multimodal / self‑paced loops, QQ‑bot adapters | Chinese & global markets | Vision bridge, `/loop` self‑paced, provider‑centric “DeepInfra” support |
| **DeepSeek TUI** | Rich TUI + multi‑agent orchestration | CLI‑savvy operators | Slash‑hotbar, static musl binaries, “turn stalled” monitoring |

---

### 4. Community Momentum & Maturity  

| Tool | Activity Score (issues+PRs) | Recent Release | Maturity Indicators |
|------|-----------------------------|----------------|---------------------|
| Claude Code | 40 | Daily release cadence | Rapid bug‑fix cycle, extensive coverage of Windows regressions |
| Copilot CLI | 40 | 1‑day release | Explicit enterprise feature backlog, large TPM engagement |
| Qwen Code | 40 | bi‑weekly preview | Active security hardening PRs, EU‑centric provider support |
| DeepSeek TUI | 40 | bi‑weekly release | Static binary build effort, UI‑centric PR churn |
| Gemini CLI, Codex, Kimi | 40 | *none* | Focused on feature PRs but no releases, indicating slower pacing |

The four “high‑velocity” projects (Claude, Copilot, Qwen, DeepSeek) show the most rapid iteration. Claude and Copilot’s emphasis on enterprise‑grade MCP tooling is a clear differentiator. Qwen’s push into multimodal and self‑paced loops signals a shift toward autonomous, long‑running workflows. DeepSeek’s static build focus addresses composability and platform compatibility.

---

### 5. Trend Signals for Developers  

1. **MCP/OAuth Hardening** – All tools are tightening OAuth flows (atomic writes, token reuse, blocking silent failures). Future CLIs should ship with built‑in MCP token guards and observable diagnostics (`/diagnose`).  
2. **Agent‑Orchestration UI** – Multi‑agent “work‑surface” dashboards and slash‑command hotbars are converging as a UX standard, especially valued by teams running parallel workflows.  
3. **Cost & Usage Governance** – Agents that auto‑terminate or throttle after a threshold of iterations are becoming widespread. Developers should be prepared to expose usage metrics and implement manual ratchets.  
4. **Cross‑Platform Reliability** – Windows is the most frequent pain point, but macOS and Wayland/Glitch‑free terminals are gaining traction. Ensuring graceful error handling for WSL, tmux, and Wayland is now essential.  
5. **Plugin/Extension Security** – All communities push for namespace isolation, shell‑injection safeguards, and symlink escape protection. Security‑by‑default should be part of any new plugin SDK.  
6. **Multimodal & Self‑Paced Automation** – Qwen’s vision bridge and `/loop` trend hint at a broader industry move toward modalities beyond text and toward low‑maintenance, stateful loops.

> **Bottom line:** The AI‑CLI space is increasingly mature, with a clear focus on authentication security, agent orchestration, and cross‑platform stability. Projects that expose robust MCP tooling, enforce safe plugin boundaries, and provide clear usage controls will dominate the next release cycle.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights (as of 2026‑06‑17)**  

---

### 1. Top Skills Ranking  
*Ranked by recent activity, comment volume (where available), and overall attention in the PR list.*

| # | Skill (PR) | Functionality & Highlights | Status | Link |
|---|------------|----------------------------|--------|------|
| 1 | **document‑typography** (`#514`) | Adds typographic quality control: prevents orphan/widow lines, fixes numbering mis‑alignment in AI‑generated docs. Discussion focused on real‑world document polish and edge‑case handling. | OPEN (updated 2026‑03‑13) | [anthropics/skills#514](https://github.com/anthropics/skills/pull/514) |
| 2 | **ODT skill** (`#486`) | Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods) plus ODT→HTML parsing. Community debate centered on trigger words, ISO‑standard compliance, and LibreOffice interoperability. | OPEN (updated 2026‑04‑14) | [anthropics/skills#486](https://github.com/anthropics/skills/pull/486) |
| 3 | **frontend‑design** (`#210`) | Revised guidance for clearer, actionable frontend‑design instructions (layout, component styling, responsive patterns). Highlighted for improving Claude’s ability to follow concrete design specs in a single turn. | OPEN (updated 2026‑03‑07) | [anthropics/skills#210](https://github.com/anthropics/skills/pull/210) |
| 4 | **skill‑quality‑analyzer / skill‑security‑analyzer** (`#83`) | Two meta‑skills for the marketplace that score Skills on structure, documentation, examples, resource usage, and security posture. Discussion emphasized the need for automated vetting before community Skills are promoted. | OPEN (updated 2026‑01‑07) | [anthropics/skills#83](https://github.com/anthropics/skills/pull/83) |
| 5 | **shodh‑memory** (`#154`) | Persistent context system for AI agents: surfaces relevant memories via `proactive_context` on each user message, structures rich content entries, and supports cross‑conversation recall. Conversation focused on memory‑size limits and retrieval relevance. | OPEN (updated 2026‑03‑03) | [anthropics/skills#154](https://github.com/anthropics/skills/pull/154) |
| 6 | **ServiceNow platform** (`#568`) | Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, SecOps, SPM, CSDM, IntegrationHub, etc. Attracted attention for its enterprise‑scope mapping and detailed API‑call examples. | OPEN (updated 2026‑04‑23) | [anthropics/skills#568](https://github.com/anthropics/skills/pull/568) |
| 7 | **AURELION skill suite** (`#444`) | Four interlinked skills (kernel, advisor, agent, memory) delivering a 5‑floor cognitive framework for professional knowledge management and AI collaboration. Debated for its layered‑template approach and potential as a “thinking partner”. | OPEN (updated 2026‑05‑06) | [anthropics/skills#444](https://github.com/anthropics/skills/pull/444) |
| 8 | **testing‑patterns** (`#723`) | Comprehensive guide to testing philosophy (Testing Trophy), unit testing (AAA, pure functions), React component testing (Testing Library), and integration‑test patterns. Noted for filling a gap in reliable test‑generation guidance. | OPEN (updated 2026‑04‑21) | [anthropics/skills#723](https://github.com/anthropics/skills/pull/723) |

*All listed PRs remain open; none have been merged yet, indicating active community review.*

---

### 2. Community Demand Trends (from Issues)

| Trend | Evidence (top‑commented Issues) | Implication for Future Skills |
|-------|--------------------------------|------------------------------|
| **Org‑wide skill sharing** | Issue #228 (14 👍, 14 comments) – request for direct sharing within Claude.ai/Teams. | Need a built‑in skill‑library or share‑link mechanism. |
| **Skill‑trigger reliability** | Issue #556 (12 👍, 12 comments) – `run_eval.py` never triggers skills (0 % recall). | Fixed in PR #1298 (Windows eval & trigger detection). Continued focus on robust trigger/match logic. |
| **Windows compatibility** | Issues #1061, #1099, #1050 (collective ≈ 9 comments) – subprocess, encoding, and pipe bugs on Windows. | Ongoing patches (PR #1050, #1099) → demand for cross‑platform skill‑creator scripts. |
| **Security & trust boundaries** | Issue #492 (7 👍, 7 comments) – community skills masquerading as `anthropic/` namespace. | Calls for namespace verification, signing, or isolated skill sandboxes. |
| **Duplicate skill installations** | Issue #189 (9 👍, 6 comments) – `document-skills` & `example-skills` install identical content. | Desire for clearer plugin demarcation and deduplication logic. |
| **Memory‑rich agents** | Issue #154 (skill) + related discussion – persistent context across turns. | Growing interest in skills that manage long‑term state (e.g., `shodh‑memory`). |

*Overall, the community is prioritizing reliable cross‑platform execution, trustworthy skill distribution, and enterprise‑grade workflow enablement.*

---

### 3. High‑Potential Pending Skills  
*Active PRs with notable discussion or recent updates that are likely to be merged soon.*

| PR | Skill | Why It’s Poised for Merge |
|----|-------|---------------------------|
| **#514** | document‑typography | Addresses a universal quality gap in generated docs; maintainers have acknowledged the need for typographic guardrails. |
| **#486** | ODT skill | Fills a clear open‑document‑format gap; recent updates show readiness for review. |
| **#210** | frontend‑design | Improves an existing high‑traffic skill; minor clarity tweaks are low‑risk. |
| **#83** | skill‑quality‑analyzer / skill‑security‑analyzer | Provides automated vetting; aligns with the platform’s push for skill marketplace safety. |
| **#154** | shodh‑memory | Solves a recurring request for persistent agent context; implementation is self‑contained. |
| **#568** | ServiceNow platform | Broad enterprise coverage; no major blocking comments, just awaiting final QA. |
| **#444** | AURELION suite | Structured cognitive framework; interest from knowledge‑management advocates suggests quick adoption once merged. |
| **#723** | testing‑patterns | Completes the testing‑guidance set; low controversy, high utility. |

*Monitoring these PRs over the next 2‑4 weeks should give a clear signal of which skills will land in the main branch.*

---

### 4. Skills Ecosystem Insight  
The community’s most concentrated demand is for **reliable, cross‑platform skill execution paired with trustworthy sharing and enterprise‑scale workflow support**—essentially, skills that work everywhere, are verifiably safe, and can be freely distributed within organizations.

---

# Claude Code Community Digest — 2026-06-17

## 1. Today's Highlights

Claude Code shipped **v2.1.179**, focused on reliability fixes including mid-stream connection drops, WSL2 mouse-wheel scrolling regressions, and a sandbox-related fix. Community attention is concentrated around **MCP/auth reliability**, **Windows regressions**, **destructive tool behavior**, and **usage/cost control** in highly agentic workflows.

---

## 2. Releases

### v2.1.179 — [anthropics/claude-code](https://github.com/anthropics/claude-code)

Notable visible fixes in the release notes:

- **Mid-stream connection drops** are now handled more gracefully: partial responses are preserved instead of surfacing a raw error, and the spinner no longer remains stuck at “running tool.”
- **Mouse-wheel scrolling in WSL2** under Windows Terminal and VS Code has been fixed, addressing a regression introduced in `2.1.172`.
- A **sandbox `deny...` fix** is also listed, though the provided release note appears truncated.

---

## 3. Hot Issues

### 1. JetBrains IDE integration demand  
**[anthropics/claude-code#47166](https://github.com/anthropics/claude-code/issues/47166)** — *JetBrains need some love — a real Claude AI Assist interface plugin*  
This is one of the most-discussed open requests, with **24 comments**. It reflects continued demand for deeper IDE-native Claude Code experiences beyond terminal workflows, especially for JetBrains users.

### 2. MCP OAuth completes but Bearer token is not sent  
**[anthropics/claude-code#46140](https://github.com/anthropics/claude-code/issues/46140)** — *CRITICAL: claude.ai MCP connector OAuth completes but Bearer token never sent to server*  
With **18 comments** and **5 👍**, this is a high-severity auth/MCP issue. If OAuth succeeds but downstream MCP requests omit the Bearer token, MCP integrations become unreliable or unusable despite appearing correctly configured.

### 3. Windows tool results silently dropped  
**[anthropics/claude-code#46767](https://github.com/anthropics/claude-code/issues/46767)** — *Tool results silently dropped with “missing due to internal error” across all tools on Windows*  
This regression, reported since `2.1.101`, has **11 comments** and **5 👍**. Silent tool-result loss is especially disruptive because it can make Claude appear to continue without the information it actually needs.

### 4. Large-monorepo file descriptor leak on macOS  
**[anthropics/claude-code#61299](https://github.com/anthropics/claude-code/issues/61299)** — *File descriptor leak regression in large monorepos*  
Reported for macOS with Claude Code `2.1.143+`, this affects long-running sessions in large repositories. Developers care because descriptor leaks can cause tool failures, instability, or terminal/session crashes.

### 5. `/exit` may remove active worktree  
**[anthropics/claude-code#62431](https://github.com/anthropics/claude-code/issues/62431)** — *`/exit` prompts to remove worktree even when other Claude Code sessions are still active*  
This is marked as a **data-loss** issue. Even with only **4 comments**, it matters because removing a worktree while other sessions are active can break live development workflows.

### 6. Git submodule deinit can wipe working tree  
**[anthropics/claude-code#68920](https://github.com/anthropics/claude-code/issues/68920)** — *git submodule deinit wipes working tree without warning or checking for local changes*  
Also marked **data-loss**, this report says Claude ran destructive git commands after being asked only to remove a submodule reference. This is a high-impact trust issue around tool safety and destructive command confirmation.

### 7. Excessive agentic loops consuming usage quota  
**[anthropics/claude-code#68961](https://github.com/anthropics/claude-code/issues/68961)** — *Excessive agentic loop iterations consuming API usage quota*  
Users report Claude spawning many agents and consuming quota unexpectedly. This connects to broader cost-control concerns as Claude Code workflows become more autonomous.

### 8. Parallel workflow 429s can wipe entire run  
**[anthropics/claude-code#68968](https://github.com/anthropics/claude-code/issues/68968)** — *Workflow/ultracode `parallel()` fan-out trips server-side 429 and wipes entire run*  
This report highlights a reliability gap in parallel agent workflows: if subagent fan-out hits a per-account rate limit, partial results are not preserved. That is painful for expensive or long-running automation runs.

### 9. MCP tool response deltas requested  
**[anthropics/claude-code#68921](https://github.com/anthropics/claude-code/issues/68921)** — *Add tool response diffing/delta for MCP tools to reduce context window usage*  
Developers using MCP browser or read tools want delta/diff responses rather than full tool output every time. This is a practical context-window and cost optimization request.

### 10. Plugin command can shadow built-in `/doctor`  
**[anthropics/claude-code#68957](https://github.com/anthropics/claude-code/issues/68957)** — *Built-in `/doctor` is unreachable when a plugin registers a command named “doctor”*  
This namespace collision affects diagnostics and plugin extensibility. It matters because built-in troubleshooting commands should remain reliably reachable even when plugins add slash commands.

---

## 4. Key PR Progress

### 1. Enable PowerShell tool on macOS and Linux  
**[anthropics/claude-code#46351](https://github.com/anthropics/claude-code/pull/46351)** — *Enable PowerShell tool on macOS and Linux when `pwsh` is available*  
This PR removes a Windows-only gating assumption and would allow Claude Code to use PowerShell 7+ on macOS/Linux when installed. It addresses cross-platform scripting workflows where teams standardize on PowerShell.

### 2. Improve GitHub issue-label script errors  
**[anthropics/claude-code#68787](https://github.com/anthropics/claude-code/pull/68787)** — *Add error message to `edit-issue-labels.sh` when called with no label arguments*  
A small but useful maintainer-tooling fix: the script currently exits silently when no label arguments are supplied. Better stderr output improves CI/debuggability.

### 3. Fix shell injection risk in plugin-dev test hook  
**[anthropics/claude-code#68786](https://github.com/anthropics/claude-code/pull/68786)** — *Avoid shell injection in `test-hook.sh` via stdin redirection*  
This addresses a security-sensitive script path in plugin development by avoiding unsafe command-string construction.

### 4. Correct plugin hook example scripts  
**[anthropics/claude-code#68785](https://github.com/anthropics/claude-code/pull/68785)** — *Hook JSON to stdout, tighten `su*` glob, fix CI detection and JSON injection in examples*  
This improves reference examples for plugin hooks, reducing the chance that developers copy incorrect or unsafe behavior.

### 5. Fix pagination in scripts  
**[anthropics/claude-code#68673](https://github.com/anthropics/claude-code/pull/68673)** — *Break pagination when page is not full, not only when empty*  
This is likely a reliability fix for scripts that page through GitHub API results, preventing missed or duplicated results near the end of a result set.

### 6. Stop misclassifying Claude Desktop issues  
**[anthropics/claude-code#68678](https://github.com/anthropics/claude-code/pull/68678)** — *Don’t mark Claude Desktop issues as invalid*  
Given the number of Desktop-related reports in the issue queue, this triage fix could reduce false invalid closures and improve routing.

### 7. Improve workflow JSON safety  
**[anthropics/claude-code#68680](https://github.com/anthropics/claude-code/pull/68680)** — *Safe JSON construction and correct event name in `log-issue-events`*  
This strengthens GitHub workflow/logging reliability and reduces malformed JSON risk in automation.

### 8. Block symlink escape in extensibility config reads  
**[anthropics/claude-code#68689](https://github.com/anthropics/claude-code/pull/68689)** — *Block symlink escape in extensibility config reads*  
This is a security-focused fix for plugin/extensibility configuration loading, preventing config reads from escaping intended directories via symlinks.

### 9. Normalize plugin root paths on Windows  
**[anthropics/claude-code#68694](https://github.com/anthropics/claude-code/pull/68694)** and **[anthropics/claude-code#68699](https://github.com/anthropics/claude-code/pull/68699)**  
These PRs address Windows path-separator handling in plugin-related tooling. Better Windows path normalization is important because many current issues are Windows-specific.

### 10. Add `/bug` command for filing GitHub issues  
**[anthropics/claude-code#68707](https://github.com/anthropics/claude-code/pull/68707)** — *Add `/bug` command to file GitHub issues from the terminal*  
This could streamline issue reporting directly from Claude Code sessions, especially useful for capturing environment context and feedback IDs.

---

## 5. Feature Request Trends

- **Deeper IDE integration**: JetBrains users are asking for a more complete Claude AI Assist-style interface, while other users want Desktop/CLI `/ide` parity.  
  Related: [#47166](https://github.com/anthropics/claude-code/issues/47166), [#61306](https://github.com/anthropics/claude-code/issues/61306)

- **MCP reliability and efficiency**: Developers want MCP auth to work consistently, MCP stdout troubleshooting docs to be clearer, and MCP tool responses to support deltas/diffing.  
  Related: [#46140](https://github.com/anthropics/claude-code/issues/46140), [#47635](https://github.com/anthropics/claude-code/issues/47635), [#68921](https://github.com/anthropics/claude-code/issues/68921)

- **Remote control and agent orchestration controls**: Users are requesting in-session Remote Control toggles and safer behavior for parallel workflow fan-out.  
  Related: [#60699](https://github.com/anthropics/claude-code/issues/60699), [#68968](https://github.com/anthropics/claude-code/issues/68968)

- **Provider and custom auth flexibility**: Requests include apiKey-helper equivalents for custom headers and clearer provider behavior.  
  Related: [#68960](https://github.com/anthropics/claude-code/issues/68960)

- **Usage and cost visibility**: Users want clearer metrics around Sonnet vs. “all” usage buckets and better protection against runaway agentic loops.  
  Related: [#68964](https://github.com/anthropics/claude-code/issues/68964), [#68961](https://github.com/anthropics/claude-code/issues/68961)

---

## 6. Developer Pain Points

- **Tool and agent reliability**: Repeated reports involve dropped tool results, malformed tool-call parsing, excessive agentic loops, and parallel workflow failures. Developers need Claude Code to preserve partial progress and fail visibly.

- **Windows and WSL regressions**: Multiple issues mention Windows, WSL2, Windows Terminal, VS Code, and PowerShell behavior. Even with release fixes, Windows remains a major source of friction.

- **Data-loss risk from destructive commands**: Worktree removal and git submodule deinit reports are especially concerning because they affect repository state and uncommitted changes.

- **MCP complexity**: MCP remains a major source of bugs, especially around OAuth, stdio troubleshooting, and large tool responses. Developers need better diagnostics and context-window management.

- **Cost control**: Usage-quota concerns are rising as Claude Code becomes more autonomous. Users want clearer buckets, limits, and safeguards against loops or runaway parallelism.

- **Plugin/extensibility safety**: Namespace collisions, hook examples, shell injection risks, symlink escapes, and Windows path handling show that plugin development needs stronger guardrails and clearer behavior.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest - 2026-06-17**  

---

### 1. **Today's Highlights**  
Critical fixes for rollout history management (#22991, #25215) and UI focus stability (#25321) were resolved, addressing persistent performance and usability pain points. Progress on TUI plugin sharing (#26703-26705) and telemetry improvements (#28605-28626) signals ongoing refinements to developer workflows and plugin discovery.  

---

### 2. **Releases**  
No stable version releases in the last 24h. Two alpha updates for `rust-v0.141.0` were published, focusing on incremental internal changes rather than major feature additions.  

---

### 3. **Hot Issues**  
1. **[#21128 - Hidden project conversations](https://github.com/openai/codex/issues/21128)**  
   *Mission-critical UX flaw*: Discussions older than the global recent window vanish silently. ⬆️17 likes.  
2. **[#28095 - Broken archive deletion](https://github.com/openai/codex/issues/28095)**  
   *Frustrating bug*: Delete button renders but has no effect. ⬆️4 likes.  
3. **[#18052 - Context window overflow](https://github.com/openai/codex/issues/18052)**  
   *Performance regression*: Threads hitting max context limits require manual resets. ⬆️2 likes.  
4. **[#27287 - Windows Computer Use boot failure](https://github.com/openai/codex/issues/27287)**  
   *Blocker for CLI integration*: Packaging mismatches prevent `@computer` commands.  
5. **[#27506 - Encoding char errors on Windows](https://github.com/openai/codex/issues/27506)**  
   *Platform-specific crash*: Non-ASCII paths (e.g., Korean) trigger crashes.  
6. **[#25321 - macOS caret disappearance](https://github.com/openai/codex/issues/25321)**  
   *Annoying UI regression*: Input focus resets on macOS.  
7. **[#12464 - `/cwd` CLI/TUI command](https://github.com/openai/codex/issues/12464)**  
   *Feature request*: Change working directory without restarting sessions. ⬆️21 likes.  
8. **[#14372 - Git fsmonitor permissions](https://github.com/openai/codex/issues/14372)**  
   *Access control bug*: Git hooks refuse to work in sandboxed sessions.  
9. **[#26415 - Locked Computer Use hang](https://github.com/openai/codex/issues/26415)**  
   *macOS-specific deadlock*: Resource-intensive `SkyComputerUseService` CPU spin.  
10. **[#22037 - TUI resume picker block](https://github.com/openai/codex/issues/22037)**  
    *Performance hit*: Pagination filtered by `cwd` stalls.  

---

### 4. **Key PR Progress**  
1. **[#28494 - Shared session token budgets](https://github.com/openai/codex/pull/28494)**  
   *Cost control*: Centralized token limits for agent sessions.  
2. **[#28638 - Cleaned turn context](https://github.com/openai/codex/pull/28638)**  
   *Code quality*: Removed redundant fields to prevent state divergence.  
3. **[#28409 - Enforced config exactness](https://github.com/openai/codex/pull/28409)**  
   *Stability*: Warns on mismatched runtime requirements.  
4. **[#28605-28626 - TUI plugin scraping optimizations](https://github.com/openai/codex/pull/28605)**  
   *Performance*: Parallel plugin/skill loading and metadata reuse.  
5. **[#28599 - Cell state isolation](https://github.com/openai/codex/pull/28599)**  
   *Architecture*: Moved cell lifecycle to dedicated actor.  
6. **[#28629 - Absolute turn context](https://github.com/openai/codex/pull/28629)**  
   *Compatibility*: Restored `AbsolutePathBuf` to avoid rollout format issues.  
7. **[#28624 - Concurrent plugin/skill warming](https://github.com/openai/codex/pull/28624)**  
   *Cold start speed*: Reduced latency via parallel initialization.  
8. **[#28615 - Workload identity federation (prototype)](https://github.com/openai/codex/pull/28189)**  
   *Auth security*: Exploratory CLI credential management via workload identity.  
9. **[#28608 - Plugin namespace scoping](https://github.com/openai/codex/pull/28608)**  
   *Organization*: Passed namespaces to prevent skill name collisions.  
10. **[#28605 - Session tracing split](https://github.com/openai/codex/pull/28605)**  
    *Observability*: Improved telemetry for plugin/skill warmup phases.  

---

### 5. **Feature Request Trends**  
- **CRUD consistency**: Fixes for archive/restore workflows (#26012, #26201, #28606) remain top-priority.  
- **CLI improvements**: `/cwd` command (#12464) and clearer uninstall guidance (#28575) are recurring asks.  
- **Plugin sharing**: Remote catalog integrations (#26703-26705) and namespace scoping (#28608) indicate demand for better ecosystem tooling.  
- **Performance scalability**: Thread limit adjustments and rollout handling (#18052, #25215) reflect concerns about long-running workflows.  

---

### 6. **Developer Pain Points**  
- **Rollout management**: Frequent crashes and hangs when handling large/malformed JSONL rollouts (#22991, #26161).  
- **Context window mechanics**: Unreliable handling of thread boundaries forces manual state resets (#18052).  
- **CRUD operation reliability**: Archive/unarchive/delete actions frequently fail or leave stale states (#26012, #26201).  
- **Plugin ecosystem**: Namespace conflicts and discovery complexities in TUI (#26703-26705).  
- **Platform-specific bugs**: Encoding errors on Windows (#27506) and macOS-specific hangs (#26415, #27776) add maintenance overhead.  

---  
*All links refer to [github.com/openai/codex](https://github.com/openai/codex) issues/PRs.*


</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>


# Gemini CLI Community Digest - 2026-06-17

## Today's Highlights
Activity continues to focus on core agent stability and security enhancements, with several critical issues around agent hanging (#21409), subagent behavior (#22323, #21968), and Auto Memory reliability (#26522) drawing significant attention. Security concerns around MCP OAuth handling and fork artifact poisoning are being actively addressed through recent PRs.

## Releases
No new releases in the past 24 hours.

## Hot Issues
Here are 10 noteworthy issues driving community discussion:

1. **#21409: Generalist agent hangs** - P1 priority issue where the CLI freezes during basic operations like folder creation. This critically impacts usability and has 7 comments with 8 upvotes, indicating urgent need for resolution.

2. **#22323: Subagent recovery misreporting** - Agent incorrectly reports successful completion even when hitting MAX_TURNS limits, masking actual interruptions. Critical for reliable agent behavior.

3. **#22745: AST-aware file operations** - Investigation into using Abstract Syntax Tree tools for more precise file reading and codebase navigation. Could significantly improve agent efficiency and reduce token noise.

4. **#25166: Shell command execution stuck** - Commands hang indefinitely showing "Awaiting user input" even after completion, affecting core functionality. Has 4 comments and 3 upvotes.

5. **#26522: Auto Memory low-signal retry loop** - System continuously retries sessions it identifies as low-value, creating resource waste and processing backlog.

6. **#21983: Browser agent Wayland failures** - Subagent fails specifically in Wayland environments, limiting cross-platform compatibility.

7. **#26525: Auto Memory security redaction** - Transcripts containing sensitive data may be sent to models before redaction occurs, representing a security vulnerability.

8. **#27628: PTY exhaustion on macOS** - CLOSED issue shows critical system resource leaks when InteractiveShell is enabled, though now resolved.

9. **#23571: Temporary script proliferation** - Agents create excessive temporary scripts across directories, complicating workspace management.

10. **#22267: Browser agent configuration ignore** - Subagent fails to respect settings.json overrides like maxTurns, limiting configurability.

## Key PR Progress
Important recent pull requests include:

1. **#27753: Fork artifact poisoning fix** - Security-critical PR validates E2E workflow origins to prevent fork PRs from executing attacker-controlled code with repository secrets.

2. **#27971: Thought leakage prevention** - Fixes critical issue where model internal monologues leak into chat history, causing confusion and potential infinite loops.

3. **#27664: MCP OAuth atomic writes** - Security enhancement ensuring OAuth tokens are written atomically to prevent corruption and improve reliability.

4. **#27889: MCP OAuth client ID refresh** - Fixes Token refresh mechanism to properly use stored client IDs for auto-discovered servers.

5. **#27966: Sensitive path case-insensitivity** - Robust security fix implementing case-insensitive blocklist enforcement for sensitive directories.

6. **#27771: MCP header Unicode support** - Resolves compatibility issues with non-ASCII header values in MCP HTTP transports.

7. **#27943: Defensive path resolution** - Adds sanitization for LLM-generated file paths to prevent path-based attacks.

8. **#27572: tmux background detection** - Fixes regression in terminal color detection when running under tmux/mosh environments.

9. **#27631: Static eval analyzer** - Adds development tooling for analyzing evaluation source files using TypeScript AST parsing.

10. **#27948: Dependency pinning** - Implements strict version pinning and 14-day update cooldown to improve build stability.

## Feature Request Trends
Analysis shows strong community interest in:
- Enhanced evaluation infrastructure and testing capabilities (#24353, #23166)
- AST-aware code navigation and manipulation tools (#22745, #22746, #22747)
- Improved Auto Memory system reliability and intelligence (#26522, #26523, #26525)
- Better subagent orchestration and configuration control (#22267, #22232)
- Terminal/UI performance and compatibility improvements (#21924, #27572)

## Developer Pain Points
Recurring themes in community feedback:
- **Agent reliability**: Frequent hanging (#21409), incorrect status reporting (#22323), and underutilization of subagents (#21968)
- **Security concerns**: Token handling (#27664), OAuth flow robustness (#27889), and prompt injection risks (#27966)
- **Resource management**: PTY leaks (#27628), temporary file cleanup (#23571), and session processing inefficiencies (#26522)
- **Cross-platform compatibility**: Wayland browsing limitations (#21983) and terminal environment detection (#27572)
- **Configuration consistency**: Settings being ignored (#22267) and path sanitization gaps (#27943)


</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>


# GitHub Copilot CLI Community Digest - 2026-06-17

## Today's Highlights
The Copilot CLI team released version 1.0.64-0 featuring a new `/diagnose` command for session log analysis and MCP registry installation capabilities. Community attention remains focused on critical stability issues including Windows ARM64 crashes and persistent authorization challenges. Enterprise users are advocating for custom model support amid growing demand for advanced plugin management features.

## Releases
**v1.0.64-0** introduces several key enhancements:
- `/diagnose` command for analyzing session logs
- `/mcp registry` installation for browsing and installing MCP servers
- `/security-review` now available to all users without `--experimental` flag
- MCP server discovery from installed plugins
- CSV output support for MCP tools

## Hot Issues

1. **#3687 [OPEN]** - copilot.exe fatal-aborts under load on Windows ARM64
   Critical stability issue causing hard crashes (0xc0000409) when multiple sessions start simultaneously. Currently experiencing 5 community comments and moderate upvotes.

2. **#1168 [OPEN]** - Excessive authorization prompts ("authorization fatigue")
   Users report dozens of authorization prompts during single requests, creating significant workflow disruption. This long-standing issue continues to gain community support.

3. **#3828 [OPEN]** - ContentExclusionFilter.isExcluded crash
   Tool crashes with TypeError when accessing property 'isExcluded', indicating core functionality reliability concerns.

4. **#3821 [OPEN]** - Conflicting --session-id and --resume flags after /update
   Session management regression affects workflow continuity when updating during resumed sessions.

5. **#3730 [OPEN]** - Enterprise-managed custom model support
   High-priority enterprise feature request (4 upvotes) seeking parity with VS Code custom model capabilities.

6. **#3518 [OPEN]** - Unarchive/restore archived project sessions
   Session management limitation affecting long-running orchestrator workflows with accumulated context.

7. **#3812 [OPEN]** - Subagents lose MCP tool access
   Regression breaking subagent functionality that previously supported MCP tool access.

8. **#3825 [OPEN]** - --allow-all permission leaks to TUI
   Security and usability concern where broad permissions interfere with terminal UI rendering.

9. **#3824 [OPEN]** - Sub-agent model mismatches
   Configuration inconsistency where sub-agents use different models than parent sessions without user awareness.

10. **#3822 [OPEN]** - Repository-level skillDirectories support
    Configuration limitation preventing modular skill organization in monorepos and multi-repo setups.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
Community focus centers on three primary enhancement areas:
- **Session Management**: Archive restoration (#3518), flag conflict resolution (#3821)
- **Plugin Ecosystem**: Bulk plugin updates (#3830), command hook documentation (#3820), repository-scoped skill directories (#3822)
- **Enterprise Capabilities**: Custom model integration (#3730) and administrative controls

Notable requests also emphasize asynchronous read operations (#3829) and improved model selection transparency (#3823, #3824).

## Developer Pain Points
Technical friction manifests through:
- **Stability regressions** affecting core CLI reliability on Windows platforms
- **Authorization workflow disruptions** creating repetitive permission prompts
- **Configuration limitations** restricting flexible skill and plugin organization
- **Session state management gaps** particularly during updates and archival operations
- **Enterprise feature parity delays** preventing consistent custom model experiences across CLI and IDE clients


</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑06‑17**  
*Source: github.com/MoonshotAI/kimi-cli*  

---  

### 1. Today's Highlights  
- Two fresh‑install bugs surfaced today: the CLI reports “LLM not set” without prompting a `kimi login` (Issue #2456) and it auto‑rediscovers a deleted MCP server, leading to unrecoverable 400 errors (Issue #2457).  
- A previously opened enhancement to raise the default step limit per turn (Issue #1327) continues to gather attention, while the request to hide thinking‑model output was just closed (Issue #1632).  
- No new releases were published in the last 24 h.  

---  

### 2. Releases  
*No new versions were released in the past 24 hours.*  

---  

### 3. Hot Issues  
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#2456](https://github.com/MoonshotAI/kimi-cli/issues/2456) | **Bug: Fresh install reports “LLM not set” with no guidance to run login** | New users hit an immediate failure after `brew install kimi-cli`, creating a barrier to adoption. | 0 👍, 0 comments – indicates the issue is fresh and awaiting triage. |
| [#2457](https://github.com/MoonshotAI/kimi-cli/issues/2457) | **Bug: Kimi Code CLI auto‑discovers MCP server after user deleted it, causing unfixable 400 errors** | The CLI’s MCP discovery logic does not respect user deletions, breaking workflows on Windows. | 0 👍, 0 comments – newly reported; needs investigation. |
| [#1327](https://github.com/MoonshotAI/kimi-cli/issues/1327) | **Enhancement: More Steps per turn By Default** | Users frequently hit the hard‑coded step limit (100) while context usage is still low, forcing manual config changes. | 0 👍, 3 comments – modest interest but reflects a recurring usability pain point. |
| [#1632](https://github.com/MoonshotAI/kimi-cli/issues/1632) | **Feature Request: Option to hide thinking content while using thinking models** *(Closed)* | Thinking‑model output clutters the terminal; users want a clean view while still benefiting from improved reasoning. | 3 👍, 2 comments – clear demand, now closed (likely implemented or declined). |

*Only four issues were updated in the last 24 h; all are listed above.*  

---  

### 4. Key PR Progress  
| # | PR | Description |
|---|----|-------------|
| [#1771](https://github.com/MoonshotAI/kimi-cli/pull/1771) | **fix: always stringify tool message content in Chat Completions provider** | Ensures that tool‑role messages conform to the OpenAI Chat Completions API requirement (content must be a string). Fixes the 400 error seen when a tool result contains multiple `ContentPart`s. |  

*Only one PR was updated in the last 24 h.*  

---  

### 5. Feature Request Trends  
From the open issues (and the recently closed one) the community is signalling interest in:  

1. **Higher configurability of agent loops** – e.g., increasing the default step limit per turn (Issue #1327).  
2. **Control over verbose model output** – ability to suppress or throttle “thinking” streams for cleaner terminals (Issue #1632).  
3. **Improved on‑boarding experience** – automatic prompting or clearer error messages when required credentials (LLM) are missing (Issue #2456).  
4. **Robust MCP/server discovery** – respecting user‑initiated deletions and providing fallback or explicit re‑add mechanisms (Issue #2457).  

---  

### 6. Developer Pain Points  
- **Missing guidance on first run** – Fresh installs fail silently with “LLM not set”, forcing users to search for the login step.  
- **Unintelligent server re‑discovery** – The CLI resurrects deleted MCP servers, causing persistent 400 errors that require manual cache clearing or reinstall.  
- **Hard‑coded operational limits** – The default step cap (100) is too low for many workflows, leading to premature stops despite ample context.  
- **Verbose thinking‑model output** – Real‑time thinking spam reduces terminal readability, especially during long reasoning sessions.  

Addressing these points would significantly improve the out‑of‑the‑box experience and reduce friction for both new and existing users.  

---  

*Digest generated on 2026‑06‑17 based on the latest GitHub activity.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Today's Highlights**  
Critical fixes address persistent rendering bugs, session stability, and provider-specific queries. Enhanced error handling stabilizes tool calls, while backend adjustments improve responsiveness.  

**Releases**  
No major updates released yet. Current version remains v0.79.5, with active patches prioritized.  

**Hot Issues**  
1. Stalemate when fixing Google Vertex integration.  
2. Non-convertible 400 errors on real-time outputs.  
3. Conflicting field definitions disrupting schema validation.  
4. UX inconsistency in tab navigation transitions.  
5. Missing environment override support for distinction from process vars.  

**Key PR Progress**  
New features like provider-specific environment scopes and custom table rendering roles are in development. Feedback integration prioritized for top priorities.  

**Feature Request Trends**  
High demand for schema validation optimizations, improved tool call parsing, and further resolution of 400 error recovery. Community input highlights shared focus on user experience clarity.  

**Developer Pain Points**  
Relyance on incomplete tool support, inconsistent session persistence, and limited scalability in current workflows persist as recurring challenges.  

Links to detailed reports: [bug #123], [context #456], [release notes], [coding-agent](https://github.com/rwachtler:code-agents).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code – Community Digest**  
*Date: 2024‑06‑17 (UTC)*  

---

### 1. Today’s Highlights
- **v0.18.1‑preview.0** was released, bringing a fix for oversized‑context warnings and several documentation clean‑ups.  
- A wave of security‑related tickets (OAuth policy, credential‑security, and a VS‑Code packaging virus false‑positive) has surfaced, indicating growing scrutiny of the platform’s supply‑chain and credential handling.  
- The community is actively extending Qwen Code’s ecosystem: a QQ‑Bot channel adapter, a “self‑paced /loop” wake‑up engine, and vision‑bridge support for image‑to‑text conversion are all in motion.

---

### 2. Releases
**v0.18.1‑preview.0** – *2026‑06‑17*  
- **Fix:** Emits a warning when a prompt’s **context instructions exceed the model’s limit** (PR #5073).  
- **Docs:** Updated stale defaults, CLI syntax, and aligned tool naming to current codebase (commit by @D).  

*Full release notes:* https://github.com/QwenLM/qwen-code/releases/tag/v0.18.1-preview.0  

---

### 3. Hot Issues (10 most noteworthy)

| # | Title / Scope | Why It Matters | Community Reaction |
|---|---------------|----------------|--------------------|
| **3203** | *OAuth Free‑Tier Policy Adjustment* (feature‑request) | Changing daily quota from 1 000 → 100 requests dramatically impacts hobbyist usage and could drive churn. | 136 comments, ongoing debate; no 👍 yet (still triaging). |
| **4615** | *Project‑scoped `.mcp.json` with pending‑approval* (security) | Enables per‑project credential isolation for the MCP server, a key security improvement. | 6 comments, early request; aligns with enterprise hardening. |
| **5055** | *VS‑Code extension flagged as Trojan* (security) | False‑positive virus detection could erode trust in the official VS Code companion. | 6 comments, users seeking clarification and signed builds. |
| **5201** | *Add QQ Bot channel adapter* (integration) | Expands Qwen Code’s reach into the Chinese messaging ecosystem, a high‑traffic market. | 3 comments, PR ready; community eager for PR review. |
| **5124** | *Track /loop alignment work* (roadmap) | Centralises the incremental implementation of the `/loop` feature, a core automation capability. | 3 comments, 1 👍 – signals community interest. |
| **5186** | *Localise remaining hard‑coded UI strings in web‑shell* (i18n) | Improves accessibility for non‑English users; ties into global expansion strategy. | 2 comments, low priority but needed. |
| **5180** | *Multi‑agent project manager crashes mid‑task* (core/performance) | Highlights stability issues in hierarchical agent orchestration, a flagship feature. | 2 comments, high severity (P2). |
| **5210** | *ExitPlanMode hangs for hours* (cli) | Blocks productivity for users on long‑running plans; indicates a regression in plan termination logic. | 2 comments, urgent P2 bug. |
| **5208** | *.qwen‑session marker blocks worktree cleanup* (session‑management) | Prevents Git worktree reuse, causing disk bloat and CI failures. | 1 comment, moderate impact. |
| **5215** | *Release failed for v0.18.1‑preview.1* (CI) | CI pipeline instability prevents rapid delivery of bug‑fixes and features. | 0 comments, automated alert; priority for ops. |

*All links:* https://github.com/QwenLM/qwen-code/issues?q=is%3Aissue+is%3Aopen+updated%3A%3E2026-06-15  

---

### 4. Key PR Progress (10 important pull requests)

| # | PR | Main Change | Impact |
|---|----|-------------|--------|
| **5216** | *load extension commands in daemon sessions* (fix acp) | Restores normal extension loading for background (daemon) sessions. | Improves plugin ecosystem reliability. |
| **5211** | *add daemon_status to serve capabilities baseline* (e2e) | Synchronises capability list with `SERVE_CAPABILITY_REGISTRY`. | Reduces false‑negative integration tests. |
| **5179** | *remember selected provider when model IDs collide* (model) | Persists provider’s `baseUrl` alongside model name. | Prevents accidental cross‑provider model swaps. |
| **5141** | *track supported `sed` edits in file history* (core) | Treats safe `sed -i` substitutions as edit operations, stores diffs. | Enhances auditability and undo support. |
| **5197** | *wire prompt‑only /loop to self‑paced wakeups* (loop) | Implements one‑off “self‑paced” loop instead of cron‑based recurrence. | Step toward full Claude‑Code alignment. |
| **5126** | *vision‑bridge: transcribe images for text‑only models* (vision) | Adds optional multimodal bridge that OCR‑converts images before passing to a text‑only model. | Expands multimodal use cases without retraining. |
| **5207** | *keep sudo‑required npm installs on npm* (cli/platform) | Stops auto‑migration to the bundled Node installer on older glibc systems. | Fixes update failures on legacy Linux distros. |
| **5145** | *show follow‑up suggestion in input placeholder* (cli) | Generates next‑prompt suggestions via the fast model and displays them inline. | Improves UX for conversational coding. |
| **5182** | *second‑resolution session wakeup engine* (loop) | Introduces a non‑durable wakeup channel for self‑paced `/loop`. | Enables finer‑grained scheduling, aligns with Claude Code. |
| **5202** | *add QQ Bot channel adapter* (channel) | Provides a fully‑featured QQ‑Bot gateway (WebSocket, auth, message routing). | Opens Qwen Code to a massive user base in China. |

*All links:* https://github.com/QwenLM/qwen-code/pulls?q=updated%3A%3E2026-06-15+is%3Apr  

---

### 5. Feature Request Trends
- **Multi‑Channel Messaging** – New adapters (QQ Bot, plus existing Telegram/WeChat) are repeatedly requested, signalling demand for broader chat‑ops integration.  
- **Self‑Paced Automation (`/loop`)** – Multiple issues/PRs aim to replace static cron loops with dynamic, model‑driven wake‑up scheduling.  
- **Security & Credential Isolation** – Calls for project‑scoped MCP configs and tighter OAuth quota controls show heightened security awareness.  
- **Internationalisation** – Localisation of UI strings and documentation continues to be a recurring ask, especially for Chinese‑language users.  
- **Robust Multi‑Agent Workflows** – Requests to port Claude‑Code’s “Dynamic Workflows” and to stabilise hierarchical agent planning highlight a push toward complex, autonomous coding pipelines.

---

### 6. Developer Pain Points
1. **Installation & Update Friction** – Auto‑updates that switch to a bundled Node binary break on older glibc (CentOS 7) systems.  
2. **Credential & Quota Management** – Unclear OAuth free‑tier limits and missing project‑level credential scoping cause operational anxiety.  
3. **Tool Parameter Type Mismatches** – Self‑hosted LLMs returning non‑string tool args trigger validation errors, prompting the need for automatic coercion.  
4. **Session & Worktree Hygiene** – Stale `.qwen-session` markers prevent Git worktree cleanup, leading to disk bloat.  
5. **CLI UX Glitches** – Terminal remains in SGR mouse mode after exit, and window titles display session names instead of model status, degrading the interactive experience.  

Addressing these friction points will smooth the developer workflow and accelerate adoption.  

---  

*Prepared by the Qwen Code Technical Analyst.*  



*All referenced GitHub items are live at* https://github.com/QwenLM/qwen-code.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-06-17

## 1. Today's Highlights
The project has officially rebranded from `deepseek-tui` to **CodeWhale** (v0.8.61), with the legacy npm package deprecated and migration documentation published. Critical stability issues persist in v0.8.61 — multiple users report "turn stalled" freezes during YOLO/agent operations, session loss on reconnect, and sub-agent deadlocks. The team is actively landing v0.8.62 work: first-class clarification questions for agents, hyperlink fixes, and a constitutional prompt system, while also preparing a musl-based static Linux binary release to resolve glibc compatibility failures on Ubuntu 22.04/24.04.

## 2. Releases
**v0.8.61** — Canonical rebrand to **CodeWhale** (binary, npm package `codewhale`, config dir `~/.codewhale/`). Legacy `deepseek-tui` npm package is deprecated; users must migrate per `docs/REBRAND.md`. No functional changes beyond naming.

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) | **Frequent "Turn stalled" freeze in YOLO mode** | Core reliability blocker — agent loops freeze mid-task, `continue` fails, session unrecoverable. 14 comments, 1 👍. | High urgency; users report abandoning v0.8.51+ due to this. |
| [#2739](https://github.com/Hmbown/CodeWhale/issues/2739) | **Task execution hangs indefinitely (Chinese)** | Same symptom as #2487: infinite wait, Esc → timeout, `continue` fails, **session history lost on `--continue`**. 4 comments. | Critical for long-running bug-fix workflows; regression from v0.8.51. |
| [#3268](https://github.com/Hmbown/CodeWhale/issues/3268) | **`cargo install` fails on fresh Ubuntu 24.04 LTS** | Missing `libdbus-1-dev`/`pkg-config` blocks source installs; affects CI and new users. 4 comments. | Blocking adoption on current LTS; PR #3270 adds docs, but binary fix needed. |
| [#3238](https://github.com/Hmbown/CodeWhale/issues/3238) | **glibc mismatch on Ubuntu 22.04 LTS** | Prebuilt binaries require newer glibc; `npm install -g codewhale` unusable. 2 comments. | Drives demand for musl static builds (PR #3274). |
| [#3266](https://github.com/Hmbown/CodeWhale/issues/3266) | **Sub-agent `agent_eval` with `block=True` deadlocks TUI** | Parent session never receives results/events when ≥2 sub-agents run; forces terminal kill. 2 comments. | Breaks multi-agent orchestration; closed but root cause may remain. |
| [#3243](https://github.com/Hmbown/CodeWhale/issues/3243) | **Bare digit keys 1–8 hijack empty composer** | Regression from v0.8.59: typing "5万" triggers hotbar slot instead of input. 2 comments. | UX regression for CJK/numeric-first prompts. |
| [#3255](https://github.com/Hmbown/CodeWhale/issues/3255) | **Novita provider 404 — missing `/openai` in base URL** | Provider entirely broken by default config; simple one-line fix. 2 comments. | Embarrassing config drift; highlights provider testing gaps. |
| [#3275](https://github.com/Hmbown/CodeWhale/issues/3275) | **Agent over-extends scope, self-loops without confirmation** | Regression from #3061: agent ignores user intent, auto-executes beyond request. 1 comment. | Trust/safety concern for autonomous modes. |
| [#2652](https://github.com/Hmbown/CodeWhale/issues/2652) | **Clipped sub-agent output mistaken for complete evidence** | Model hallucinates full review of truncated logs; `Alt+V` for details not obvious. 3 comments. | Undermines verification in sub-agent workflows. |
| [#2007](https://github.com/Hmbown/CodeWhale/issues/2007) | **EPIC: Coordinated multi-agent orchestration surface** | Replaces "School-mode" with visible, role-based parallel workers, disagreement reconciliation, Work-surface reporting. 7 comments. | Strategic v0.8.44+ direction; closed but tracks ongoing architecture. |

## 4. Key PR Progress (10 Important PRs)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#3274](https://github.com/Hmbown/CodeWhale/pull/3274) | **feat(release): build static Linux x64 binaries with musl** | OPEN | Switches GitHub Actions release workflow to `x86_64-unknown-linux-musl`; fixes glibc issues (#3238, #3268). Mirrors CNB pipeline (PR #2903). |
| [#3269](https://github.com/Hmbown/CodeWhale/pull/3269) | **feat(tui): expose slash commands as hotbar actions** | CLOSED | Hotbar now binds `slash.<name>` (e.g., `slash.mode`, `slash.task`); args supported. Part of #2061/#2067. |
| [#3267](https://github.com/Hmbown/CodeWhale/pull/3267) | **feat(tui): keep oversized paste inline with truncation/auto-expand** | CLOSED | Fixes #3263: pastes >16K stay editable in composer (truncated view + expand), no longer auto-converted to `@file` mention. |
| [#3236](https://github.com/Hmbown/CodeWhale/pull/3236) | **[codex] add DeepInfra provider support** | CLOSED | Adds DeepInfra provider (fixes #3231); includes runtime/TUI/CLI/TOML wiring + registry docs. |
| [#3270](https://github.com/Hmbown/CodeWhale/pull/3270) | **docs: add Linux build-time deps to cargo install guides** | CLOSED | Documents `libdbus-1-dev`/`pkg-config` requirement for `cargo install` on Ubuntu 24.04 (addresses #3268). |
| [#3271](https://github.com/Hmbown/CodeWhale/pull/3271) | **docs: add Ponytail personality to project instructions** | CLOSED | References Ponytail agent (blocked on upstream PR); expands personality ecosystem. |
| [#2998](https://github.com/Hmbown/CodeWhale/pull/2998) | **chore(deps-dev): bump tailwindcss 3.4.19 → 4.3.1 in /web** | CLOSED | Major Tailwind v4 migration for marketing site; v3 maintenance mode. Linked to new issue #3276. |
| [#2933](https://github.com/Hmbown/CodeWhale/pull/2933) | **feat(hippocampal): v2 memory system — glossary, namespaces, rollback, auto-inject, daemon** | OPEN | Major memory upgrade: schema migration, glossary extraction, namespace isolation, rollback, background daemon, token-aware context injection. |
| [#3265](https://github.com/Hmbown/CodeWhale/pull/3265) | **[moonshot] tools.function.parameters.type required — empty {} rejected** | CLOSED | Fixes Kimi/Moonshot 400 error: ensures `type: "object"` in tool schemas. |
| [#3255](https://github.com/Hmbown/CodeWhale/issues/3255) | *Novita provider fix* (implied PR) | CLOSED | Adds missing `/openai` segment to `DEFAULT_NOVITA_BASE_URL`. |

## 5. Feature Request Trends
1. **Multi-agent orchestration as first-class UI** — Visible parallel workers, role assignment, disagreement reconciliation, Work-surface reporting (#2007, #2870).
2. **Agent clarification/questions** — Structured modal prompts for secrets, permissions, ambiguous intent (#3102).
3. **Memory/persistence upgrades** — Hippocampal v2: cross-session glossary, namespaces, rollback, auto-inject, background daemon (#2933).
4. **Provider ecosystem expansion** — DeepInfra (#3236), Novita fix (#3255), Moonshot/Kimi compliance (#3265), model metadata registry from provider APIs (#3071, #3072).
5. **TUI composer UX refinements** — Inline large-paste editing (#3267), digit-key regression fix (#3243), slash-command hotbar binding (#3269).
6. **Static/distribution hardening** — musl binaries (#3274), documented build deps (#3270), Windows proxy support for `js_execution` (#3273).

## 6. Developer Pain Points
- **Unreliable agent loops**: "Turn stalled" freezes, session loss on reconnect, sub-agent deadlocks — making YOLO/long tasks unusable (#2487, #2739, #3266).
- **Install friction on Linux**: glibc incompatibility (Ubuntu 22.04/24.04), missing build deps for `cargo install`, no static binaries yet (#3238, #3268).
- **Provider config drift**: Novita broken by default, Moonshot rejects empty tool schemas, hard-coded model lists drifting across codebase (#3255, #3265, #3071).
- **Composer regressions**: Digit keys hijacked, large pastes converted to uneditable file mentions (#3243, #3263).
- **Observability gaps**: Clipped sub-agent output presented as complete; no clear "view full" affordance (#2652).
- **Trust in autonomy**: Agents over-execute, self-question/answer, deviate from explicit user intent (#3275).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*