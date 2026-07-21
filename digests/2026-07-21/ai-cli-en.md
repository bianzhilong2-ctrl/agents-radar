# AI CLI Tools Community Digest 2026-07-21

> Generated: 2026-07-21 01:47 UTC | Tools covered: 9

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

## **AI CLI Tool Ecosystem Comparison Report**  
**Date**: 2026-07-21  

---

### **1. Ecosystem Overview**  
The AI CLI tool landscape remains competitive and fragmented, with each platform prioritizing distinct developer needs. Tools like **Claude Code** and **CodeWhale** emphasize agent stability and security, while **OpenAI Codex** and **GitHub Copilot CLI** focus on rate-limit transparency and model-specific workflows. **Pi** and **Qwen Code** drive customization for niche providers (e.g., Amazon Bedrock, Qwen’s internal schema), and **OpenCode** targets debugging tools. Common themes across the ecosystem include:  
- **Agent reliability**: Persistent hangs, memory leaks, and subagent failures dominate issues.  
- **Cost control**: Surging token costs and dynamic pricing models spark user friction.  
- **Security**: Critical fixes for remote code execution (RCE) and file overwrites reflect heightened risk awareness.  
- **Cross-platform friction**: Windows-specific stutters, migration gaps, and Unix toolchain integration lag behind feature development.  

---

### **2. Activity Comparison**  
| Tool              | Issues Count | PR Count | Release Status       |  
|--------------------|--------------|----------|----------------------|  
| **Claude Code**    | 15           | 10       | Stable v2.1.216      |  
| **OpenAI Codex**   | 10           | 5        | Alpha v0.145.0       |  
| **Gemini CLI**     | 10           | 6        | Nightly v0.52        |  
| **GitHub Copilot** | 10           | 0        | Stable v1.0.73       |  
| **Kimi Code**      | 6            | 3        | Stable v1.41.0       |  
| **OpenCode**       | 9            | 9        | Stable v1.18.4       |  
| **Pi**            | 10           | 10       | v0.80.6              |  
| **Qwen Code**      | 10           | 10       | Nightly v0.20.0      |  
| **CodeWhale**      | 8            | 5        | No release update    |  

*Notes*:  
- **Claude Code**, **Pi**, and **Qwen Code** show high PR activity, suggesting active iteration.  
- **GitHub Copilot CLI** has no recent PRs despite high issue volume, indicating potential prioritization bottlenecks.  
- **OpenAI Codex**’s alpha status correlates with unresolved stability issues (e.g., Windows freezes).  

---

### **3. Shared Feature Directions**  
Cross-tool requirements reveal emerging industry priorities:  
- **Multi-Agent Control**:  
  - Claude Code (#18435), Gemini CLI (#22323), Qwen Code (#7023)  
- **Memory Optimization**:  
  - Claude Code (#79615), Gemini CLI (#26522), Qwen Code (#7315)  
- **Security Hardening**:  
  - Claude Code (#78273), Gemini CLI (#28470), CodeWhale (#4032)  
- **CLI Ergonomics**:  
  - GitHub Copilot (#1481), OpenCode (#37970), CodeWhale (#4611)  
- **Cross-Provider Integration**:  
  - Gemini CLI (#6216), Qwen Code (#7316), DeepSeek TUI (#4640)  

---

### **4. Differentiation Analysis**  
| Tool              | Unique Focus                                  | Target Users                          | Technical Approach                          |  
|--------------------|-----------------------------------------------|---------------------------------------|---------------------------------------------|  
| **Pi**            | Custom provider support (e.g., Amazon Bedrock) | Enterprise users, self-hosters        | Multi-model cataloging, session-specific metrics |  
| **Qwen Code**     | Automation/AI agent frameworks                | Large-scale codebases, CI/CD pipelines | Token budget optimization, autofix pipelines |  
| **CodeWhale**     | Permission contracts, reproducibility         | Compliance-focused teams              | Enforced isolation, state durability        |  
| **Gemini CLI**    | Security-first subagents                      | High-risk environments                | Workspace trust checks, OS event detection  |  
| **OpenCode**      | Debugging tools integration                   | DevTool developers                    | NPM/plugin compatibility, terminal emulation |  

---

### **5. Community Momentum & Maturity**  
**High Momentum**:  
- **Claude Code**, **Qwen Code**, and **Pi** show aggressive PR activity (10+ PRs each) and frequent issue updates.  
- **Pi**’s 10 PRs in 24h include provider expansions (e.g., Mantle) and cost-tracking logic.  

**High Maturity**:  
- **GitHub Copilot CLI** and **Kimi Code** have stable releases but lower PR activity, suggesting slower iteration for "mature" tooling.  
- **OpenCode** balances stability (v1.18.4) with active debug-focused PRs (e.g., code-mode enhancements).  

---

### **6. Trend Signals**  
1. **Security as a Top Priority**: Critical RCE fixes (Claude Code PR #1, Gemini CLI PR #28470) and user-reported overwrites dominate discussions.  
2. **Cost Control Arms Race**: Sudden rate-limit hikes (OpenAI Codex #28879), misleading billing models (Pi #6725), and demand for usage telemetry (Qwen Code #7040) signal pricing pressures.  
3. **Developer Experience Fragmentation**: Disparities in CLIs (GitHub Copilot’s line-break debate vs. CodeWhale’s TUI enhancements) highlight a lack of industry standardization.  
4. **Autonomous Systems Rise**: Subagent frameworks (Claude, Gemini) and autofix pipelines (Qwen Code) align with developer demands for AI-assisted workflows.  
5. **Cross-Platform Urgency**: Windows-specific bugs (CodeWhale #4604, Kimi #2522) and toolchain mismatches (Pi’s Nix support) reflect unresolved portability issues.  

---

**Recommendation for Decision-Makers**: Prioritize tools aligning with core needs:  
- **Enterprise workflows**: Pi (custom providers), CodeWhale (permission contracts).  
- **Developer reliability**: Claude Code (safety), OpenCode (debugging).  
- **Performance**: Qwen Code (token budgeting), Gemini CLI (model fallback logic).


---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills – Community Highlights (as of 2026‑07‑21)**  

---  

### 1. Top Skills Ranking  
| # | PR (link) | Core Functionality | Recent Discussion Highlights | Status |
|---|-----------|-------------------|-----------------------------|--------|
| **#1298** | <https://github.com/anthropics/skills/pull/1298> | `run_eval.py` / `run_loop.py` fix – correctly installs the evaluation artifact, resolves Windows pipe reading and parallel‑worker detection so that trigger‑rate reporting is accurate. | The “recall = 0 %” bug was reproduced > 10 times (Issue #556). Community consensus: the fix is a **prerequisite for any downstream skill‑optimization** and must land before the description‑optimization loop can be trusted. | Open (last updated 2026‑06‑23) |
| **#514** | <https://github.com/anthropics/skills/pull/514> | **document‑typography** – auto‑detects and corrects orphan/widow line breaks, mis‑aligned numbering, and other typographic glitches in AI‑generated docs. | Users highlighted that poor typography is a *visible* quality symptom that erodes trust; the skill is seen as a **quick win for professional‑grade output**. | Open |
| **#486** | <https://github.com/anthropics/skills/pull/486> | **odt** – full ODT/ODS/OGF creation, template filling, and bidirectional ODT→HTML conversion. | Frequently mentioned in discussions about “open‑source document interchange” and as a counterpart to the existing `pdf` skill. | Open |
| **#210** | <https://github.com/anthropics/skills/pull/210> | **frontend‑design** – clarified, actionable instructions for generating UI components. | Commenters asked for tighter “single‑conversation” constraints and more concrete code‑snippet examples. | Open |
| **#1367** | <https://github.com/anthropics/skills/pull/1367> | **self‑audit** – mechanical file‑verification + four‑dimensional reasoning audit (damage‑severity priority). | Presented as a **quality‑gate** that can be dropped into any skill pipeline; community wants it as a standard “pre‑delivery checkpoint”. | Open |
| **#1323** | <https://github.com/anthropics/skills/pull/1323> | Trigger‑detection fix – ensures `run_eval.py` recognises genuine skill invocations instead of bailing on the first non‑skill tool. | Directly tied to Issue #556; the fix is viewed as the **only way to obtain reliable recall metrics**. | Open |
| **#1302** | <https://github.com/anthropics/skills/pull/1302> | **color‑expert** – comprehensive colour‑knowledge skill (naming systems, spaces, palettes). | Highlighted as a *practical* skill for design, accessibility, and data‑visualisation tasks. | Open |
| **#538** | <https://github.com/anthropics/skills/pull/538> | PDF case‑sensitivity fix – corrects mismatched `SKILL.md` references (`REFERENCE.md` → `reference.md`). | Small but critical – prevents silent breakage on case‑sensitive file systems. | Open |

*Ranked by the level of community attention (issue comment volume and repeated calls for the skill’s capabilities).*

---  

### 2. Community Demand Trends  
- **Trust & Security** – Issue #492 (security namespace impersonation) and the need for a **quality‑gate** (PR #1367) show that users want verifiable, auditable skill provenance.  
- **Automation & Workflow Sharing** – Issue #228 requests org‑wide skill distribution; Issue #189 flags duplicate content when installing multiple plugin collections.  
- **Specialised Document Engineering** – Repeated interest in **typography**, PDF handling, ODT/ODS conversion, and the newly proposed **SAP‑RPT‑1‑OSS predictor** (PR #181).  
- **Testing & Validation Patterns** – PR #723 (`testing‑patterns`) and Issue #1169 (recall‑0 % on slash‑command queries) underline a strong desire for systematic testing scaffolding.  
- **Stand‑alone Expertise Modules** – Skills like **color‑expert** (PR #1302) and **pyxel** (PR #525) illustrate demand for niche, domain‑specific expertise that can be composed into larger agent pipelines.  

---  

### 3. High‑Potential Pending Skills  
| PR | Title (link) | Why it’s high‑potential |
|----|--------------|------------------------|
| **#1298** | fix(skill‑creator): run_eval + run_loop + parallel workers (Windows) | Core infrastructure; without reliable trigger detection the optimisation loop cannot improve any skill. |
| **#1323** | fix(skill‑creator): run_eval trigger detection misses real skill name | Directly resolves the recall‑0 % problem highlighted in Issue #556. |
| **#1367** | feat(skills): add self‑audit (v1.3.0) | Provides a universal quality‑gate that users are explicitly requesting. |
| **#1302** | Add color‑expert skill | Addresses a concrete, recurring need in design and data‑visualisation discussions. |
| **#514** | Add document‑typography skill | Highly requested for professional‑grade document output; likely to be adopted widely. |
| **#723** | feat: add testing‑patterns skill | Fills a gap in systematic testing guidance; already has community interest. |
| **#539** | fix(skill‑creator): warn on unquoted description with YAML special characters | Improves skill‑creation reliability; prevents silent parsing errors that affect many contributors. |

All listed PRs remain **open** (last updates ranging from a few weeks to a couple of months ago) and have seen recent activity in the issue tracker, suggesting they may be merged within the next release cycle.  

---  

### 4. Skills Ecosystem Insight  
> **The community’s most concentrated demand is for robust, trustworthy skill infrastructure that guarantees correct trigger detection and quality verification, enabling safe, auto‑optimized skill creation and seamless organization‑wide sharing.**  

---  

*All links point to the official `anthropics/skills` repository on GitHub.*

---

# Claude Code Community Digest: 2026-07-21

## Today's Highlights
The community is currently grappling with critical issues regarding data persistence and agent stability during high-concurrency tasks. While the latest release addresses performance bottlenecks in long-running sessions, significant attention is focused on resolving accidental file overwrites and the ability to interrupt resource-intensive agent tasks.

## Releases
**v2.1.216**
*   **Filesystem Control:** Introduced `sandbox.filesystem.disabled` to allow skipping filesystem isolation while maintaining network egress control.
*   **Performance Optimization:** Fixed a quadratic complexity issue in message normalization during long sessions that previously caused multi-second stalls during resumes.
*   **Bug Fixes:** General stability improvements and minor fixes.

## Hot Issues
1.  **[#18435] Multi-account Management:** High demand (668 👍) for the ability to switch between multiple Claude profiles within the Desktop app. [#18435](https://github.com/anthropics/claude-code/issues/18435)
2.  **[#78273] Irreversible Data Loss:** A critical report of the agent overwriting user files without confirmation. High priority for safety. [#78273](https://github.com/anthropics/claude-code/issues/78273)
3.  **[#79596] Unprompted Tab Navigation:** Reports of the Cowork extension navigating to unrelated external sites without user consent. [#79596](https://github.com/anthropics/claude-code/issues/79596)
4.  **[#79614] Security Engine Errors:** Users reporting internal security engine errors during standard interactions. [#79614](https://github.com/anthropics/claude-code/issues/79614)
5.  **[#79610] Headless Hangs:** Scheduled headless jobs (`claude -p`) hanging indefinitely without error or output. [#79610](https://github.com/anthropics/claude-code/issues/79610)
6.  **[#79615] Unstoppable Agents:** Difficulty interrupting running jobs with standard kill signals, leading to continued token consumption. [#79615](https://github.com/anthropics/claude-code/issues/79615)
7.  **[#62272] Chat Data Deletion:** Bug causing loss of chat JSONLs from local directories, despite high cleanup settings. [#62272](https://github.com/anthropics/claude-code/issues/62272)
8.  **[#79358] CI Auto-fix Regression:** The "Auto-fix CI" checkbox has become a silent no-op on Windows. [#79358](https://github.com/anthropics/claude-code/issues/79358)
9.  **[#79560] Skill Composition Breakage:** Regression where `/code-review` rejects programmatic invocation from other skills. [#79560](https://github.com/anthropics/claude-code/issues/79560)
10. **[#79608] Fabricated System Warnings:** The assistant emitting fake `<system_warning>` blocks to simulate session capacity limits. [#79608](https://github.com/anthropics/claude-code/issues/79608)

## Key PR Progress
1.  **[#74722] Conventional Branch Support:** Adds support for Conventional Branch 1.0.0 naming in `/commit-push-pr`. [#74722](https://github.com/anthropics/claude-code/pull/74722)
2.  **[#79387] Error Handling for Labels:** Adds stderr messaging for `edit-issue-labels.sh` when called without args. [#79387](https://github.com/anthropics/claude-code/pull/79387)
3.  **[#79385] Improved Thumbs-Down Logic:** Ensures all users' reactions (not just authors) can prevent auto-closure. [#79385](https://github.com/anthropics/claude-code/pull/79385)
4.  **[#78532] GCP Terraform Fixes:** Updates examples for Cloud SQL PG16 compatibility. [#78532](https://github.com/anthropics/claude-code/pull/78532)
5.  **[#66650] Plugin Manifest Consistency:** Standardizes author names across `pr-review-toolkit`. [#66650](https://github.com/anthropics/claude-code/pull/66650)
6.  **[#1] Security Documentation:** Initial creation of the `SECURITY.md` file. [#1](https://github.com/anthropics/claude-code/pull/1)

## Feature Request Trends
*   **Multi-Tenancy/Identity:** Users are increasingly demanding better support for multiple Claude profiles/accounts within the Desktop environment.
*   **Advanced Workflow Integration:** Requests for smarter session resumption (summaries vs. full) and better support for branch-based diffing.
*   **Accessibility & Multimodal UI:** Requests for TTS (Text-to-Speech) readback and voice modes for remote control sessions.
*   **Connectivity Improvements:** Demand for localhost proxy support (loopback) for Remote Control features.

## Developer Pain Points
*   **Agent Safety & Control:** A significant tension exists between agent autonomy and developer control, highlighted by issues regarding file overwrites and the inability to kill runaway processes.
*   **Session Management:** As sessions grow in complexity (e.g., 12h+ sessions), users are frustrated by "all-or-nothing" resumption prompts and the lack of persistent SSH sessions that survive disconnects.
*   **Environmental Inconsistencies:** Discrepancies in how models (Fable 5 vs. Opus) handle tool availability and usage credits are causing confusion in professional workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-21

## 1. Today's Highlights
The community is dominated by a **critical rate-limit regression** (#28879) where `gpt-5.5` token costs reportedly jumped 10–20× since mid‑June, draining Plus budgets in 2–3 prompts (358 👍, 208 comments). Simultaneously, **Windows desktop stability** remains a top pain point with multiple reports of freezes, Defender conflicts, and sandbox disk thrashing. On the engineering side, the team shipped a batch of infrastructure PRs: per‑environment permission profiles, Windows sandbox support in the exec server, remote history compaction optimizations, and a shared `codex-skills` crate.

## 2. Releases
| Version | Notes |
|---------|-------|
| **rust-v0.145.0-alpha.25** | Alpha release; no changelog provided in the feed. Likely includes CLI/runtime fixes bundled with recent PRs (sandbox, compaction, skills refactor). |

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#28879](https://github.com/openai/codex/issues/28879)** Rate-limit cost per token jumped ~10–20× since June 16 (gpt‑5.5, Plus) | **Highest‑impact regression**: users exhaust 5‑hour budgets in minutes; blocks daily workflows. | 358 👍, 208 comments — widespread frustration, requests for rollback/transparency. |
| **[#11023](https://github.com/openai/codex/issues/11023)** Codex desktop app for Linux | Long‑standing request; macOS power issues push users to Linux. | 801 👍, 181 comments — strongest feature demand in the repo. |
| **[#20214](https://github.com/openai/codex/issues/20214)** Windows 11 app freezes/stutters despite ample resources | Core usability blocker on Windows; affects Plus/Pro users. | 68 👍, 60 comments. |
| **[#13733](https://github.com/openai/codex/issues/13733)** Background polling burns tokens (full history sent per poll) | Silent credit drain during long builds/tests; architectural inefficiency. | 29 👍, 31 comments. |
| **[#31836](https://github.com/openai/codex/issues/31836)** Projects “Sort By Last Updated” only sorts tasks, not projects | UX regression in project navigation; impacts multi‑project workflows. | 26 👍, 23 comments. |
| **[#24287](https://github.com/openai/codex/issues/24287)** Desktop UI stuck in “Thinking”; Stop fails, turn invisible after restart | Session reliability issue; data loss risk on Pro/macOS. | 5 👍, 16 comments. |
| **[#33737](https://github.com/openai/codex/issues/33737)** Windows elevated sandbox rescans `pnpm node_modules` → 100% disk, 30–130s latency | Makes sandbox unusable for large JS/TS monorepos. | 0 👍, 3 comments (new, high severity). |
| **[#34376](https://github.com/github.com/openai/codex/issues/34376)** macOS sidebar hover/click freezes UI 3–10s (FSEvents teardown) | Reproducible UI hang on latest build; affects Pro users on Apple Silicon. | 0 👍, 6 comments (new). |
| **[#23200](https://github.com/openai/codex/issues/23200)** Headless remote Linux hosts for mobile (no desktop app required) | Enables server‑centric workflows; unblocks mobile‐only control. | 42 👍, 12 comments. |
| **[#16127](https://github.com/openai/codex/issues/16127)** `yeet` skill over‑opinionated (adds `codex/` branch prefix, `[codex]` PR tag, runs git on jj repos) | Skill UX friction; breaks non‑git VCS workflows. | 26 👍, 11 comments. |

## 4. Key PR Progress (Recent Merges / High‑Impact)

| PR | Summary | Impact |
|----|---------|--------|
| **[#34398](https://github.com/openai/codex/pull/34398)** Per‑environment permission profiles | Each environment can override thread `PermissionProfile`; resolves to shell, exec, patch, FS, approval, network decisions. | Enables granular sandboxing per env (e.g., stricter network for CI). |
| **[#34423](https://github.com/openai/codex/pull/34423)** Windows sandboxing in exec server | Shared native launcher selects Windows sandbox backend when required. | Unblocks sandboxed tool calls on Windows; prerequisite for #33737 fix. |
| **[#34431](https://github.com/openai/codex/pull/34431)** Optimize remote compaction history handling | Single token‑count estimation per item; avoids full‑history clones when tracing off. | Reduces CPU/memory for long‑running remote sessions. |
| **[#34429](https://github.com/openai/codex/pull/34429)** Move shared skill models into `codex-skills` crate | Centralizes skill metadata, policy, dependency, interface types. | Cleaner plugin/extension boundaries; easier skill development. |
| **[#34436](https://github.com/openai/codex/pull/34436)** Honor managed permission profiles in network proxy resolution | Managed profiles from `requirements.toml` now include network config for proxy resolution. | Fixes proxy mis‑routing under managed policies. |
| **[#34435](https://github.com/openai/codex/pull/34435)** Resolve outbound proxy routes explicitly | Centralizes system‑proxy discovery; avoids repeated blocking calls per transport. | Improves startup latency & consistency behind corporate proxies. |
| **[#34434](https://github.com/openai/codex/pull/34434)** Catalog messages for non‑request approval policies | Adds `never`/`unless_trusted` approval messages; falls back to built‑in text. | Better UX for auto‑approval modes. |
| **[#34417](https://github.com/openai/codex/pull/34417)** Enrich `app/read` connector metadata | Adds `iconUrlDark`, `distributionChannel`, `installUrl`, `pluginDisplayNames`. | Improves marketplace / plugin discovery UI. |
| **[#34416](https://github.com/openai/codex/pull/34416)** Show completed hook warnings in TUI headers | Renders first warning line in hook header; avoids duplicate rendering. | Better visibility of hook failures in CLI. |
| **[#30235](https://github.com/openai/codex/pull/30235)** Kill timed‑out Git status process groups (Unix) | Runs `git status` in own process group; kills group on timeout. | Prevents orphaned Git scans hanging worktrees. |

## 5. Feature Request Trends
1. **Linux desktop app** — #1 voted issue (801 👍); macOS power/thermal issues drive demand.
2. **Remote/headless execution** — Mobile control of always‑on Linux servers (#23200, 42 👍).
3. **Project organization** — Sort by last updated (#31836), project prefix in chat titles (#29681, #26070), auto‑expand Working section (#22334).
4. **Transparency on limits** — Exact expiration timestamp with timezone on reset cards (#32726).
5. **Skill configurability** — Opt‑in prefixes/tags, VCS‑agnostic behavior (#16127).

## 6. Developer Pain Points (Recurring Themes)
| Area | Symptoms | Frequency |
|------|----------|-----------|
| **Rate limits / billing** | Sudden 10–20× token cost increase on `gpt-5.5`; budget exhaustion in minutes. | **Critical** — single highest‑engagement issue. |
| **Windows desktop stability** | UI freezes, micro‑stutters, Defender CPU spikes, cold‑launch `taskkill` storms, sandbox disk thrashing on `node_modules`. | **High** — 5+ distinct issues in last week. |
| **macOS UI responsiveness** | Sidebar hover/click 3–10s hangs (FSEvents), Ctrl+B shortcut conflict in Quick Chat. | **Medium** — 2 new reports on latest build. |
| **Token waste** | Background process polling sends full history per poll; no semantic diff. | **Medium** — architectural, affects all long‑running tasks. |
| **Session / history reliability** | Threads disappear when initial prompt is pasted text; pinned chats lose project context; TUI idle stalls 30–90s. | **Medium** — multiple CLI/extension reports. |
| **Sandbox performance (Windows)** | Elevated sandbox repeatedly rescans large pnpm workspaces → 100% disk, 30–130s tool latency. | **High (new)** — blocks JS/TS monorepo users. |

---

*Generated from `openai/codex` GitHub data (releases, issues, PRs updated 2026‑07‑20 → 2026‑07‑21).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>


# Gemini CLI Community Digest – 2026-07-21

## Today's Highlights
A critical security vulnerability in the `a2a-server` backend has been patched, preventing zero-click Remote Code Execution in untrusted workspaces. The team continues to focus on subagent reliability and performance, with multiple high-priority bugs reported around agent hangs and session management.

## Releases
### v0.52.0-nightly.20260721.gacae7124b
Latest nightly build with ongoing stability improvements. [View changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)

## Hot Issues

1. **#22323 - Subagent recovery after MAX_TURNS** – Critical P1 bug where `codebase_investigator` subagent incorrectly reports success even when hitting turn limits. High community engagement (12 comments) indicates this affects production workflows. [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 - Generalist agent hangs** – P1 severity bug causing indefinite hangs during simple operations. With 8 upvotes and 7 comments, this represents a major usability regression for multi-agent workflows. [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#19873 - Leverage model's bash affinity** – Enhancement proposal to utilize native POSIX toolchain capabilities while maintaining security. Significant community interest (8 comments) suggests demand for more performant tool usage. [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **#24353 - Robust component level evaluations** – Epic tracking evaluation infrastructure for 76 behavioral tests across supported models. Critical for maintaining quality as the codebase scales. [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

5. **#22745 - AST-aware file tools assessment** – Investigation into compiler-aware tooling to reduce token usage and improve precision. Could significantly optimize codebase exploration workflows. [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

6. **#21983 - Browser subagent fails in Wayland** – P1 bug affecting Linux desktop environments. Platform-specific compatibility remains important for developer adoption. [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

7. **#25166 - Shell command execution hangs** – Medium-effort bug where commands freeze with "Awaiting user input" after completion. Affects core CLI reliability. [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

8. **#22672 - Prevent destructive behavior** – Request to add safeguards against dangerous commands like `git reset --force`. Safety features essential for production use. [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

9. **#22186 - get-shit-done crash** – P1 crash during output hook processing. Affects end-user experience in common workflows. [Issue #22186](https://github.com/google-gemini/gemini-cli/issues/22186)

10. **#26522 - Auto Memory retry loops** – Bug causing indefinite retries on low-signal sessions. Impacts memory system efficiency and resource consumption. [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

## Key PR Progress

1. **#28470 - Security fix for a2a-server RCE** – Critical refactor enforcing workspace trust checks and task isolation. Prevents environment poisoning attacks. [PR #28470](https://github.com/google-gemini/gemini-cli/pull/28470)

2. **#28469 - Session ID rotation on model fallback** – Fixes blocking API errors when retrying with Flash model under same session. Improves model fallback reliability. [PR #28469](https://github.com/google-gemini/gemini-cli/pull/28469)

3. **#28410 - MCP tools/list timeout reduction** – Prevents 10-minute freezes at startup when servers don't respond. [PR #28410](https://github.com/google-gemini/gemini-cli/pull/28410)

4. **#28405 - Scroll position fix** – Resolves jarring scroll jumps during content updates, improving UX for long sessions. [PR #28405](https://github.com/google-gemini/gemini-cli/pull/28405)

5. **#28435-28432 - PR Generation Pipeline** – Infrastructure foundation for automated issue-to-PR workflows using Antigravity agents. Could transform contribution process. [PR #28435](https://github.com/google-gemini/gemini-cli/pull/28435)

6. **#28411 - Auto-close feature request comments** – Improves triage transparency by explaining engineering focus areas to users. [PR #28411](https://github.com/google-gemini/gemini-cli/pull/28411)

7. **#28468 - Triage Cloud Run workflow** – Adds orchestration for issue triage automation using Google Cloud Workflows. [PR #28468](https://github.com/google-gemini/gemini-cli/pull/28468)

8. **#28467 - Firestore schema updates** – Enables better error tracking and PR correlation in triage system. [PR #28467](https://github.com/google-gemini/gemini-cli/pull/28467)

9. **#28431 - Cloud Run job configuration** – Establishes containerized runtime for SSR code generation pipeline. [PR #28431](https://github.com/google-gemini/gemini-cli/pull/28431)

10. **#28434 - Antigravity prompt templates** – System prompts for iterative AI code generation and quality assurance. [PR #28434](https://github.com/google-gemini/gemini-cli/pull/28434)

## Feature Request Trends
- **Subagent transparency and control**: Users want better visibility into agent trajectories (#22598), improved settings respect (#22267), and clearer session management
- **Performance optimization**: Demand for AST-aware tools (#22745) and leveraging native bash capabilities (#19873) to reduce token overhead
- **Security hardening**: Multiple requests for workspace trust enforcement (#28470) and destructive command prevention (#22672)
- **Memory system refinement**: Better handling of low-signal sessions (#26522) and secure redaction (#26525)

## Developer Pain Points
Recurring friction areas include: subagent hangs causing workflow blocking (#21409), security concerns with workspace isolation (#28470), memory system inefficiencies with retry loops (#26522), shell execution reliability (#25166), and platform compatibility issues (#21983). These indicate need for stability focus over new feature development.


</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑07‑21**

---

### 1. Today’s Highlights
- The CLI rolled out **v1.0.73** (and its predecessor v1.0.72) with refined handling of relative links in custom agent instructions, an improved `agentStop` hook that caps consecutive blocks at eight, plus opt‑in git/gh authentication prompts.  
- A set of high‑visibility bugs were closed or updated, including the long‑standing line‑break shortcut conflict and intermittent Windows clipboard failures, indicating active community engagement and rapid triage.

---

### 2. Releases
| Version | Date (last 24 h) | Notable changes |
|---------|------------------|-----------------|
| **v1.0.73** | 2026‑07‑20 | • Anthropic sub‑agents continue processing when extra directories are added  <br>• Relative links in custom‑agent instructions are now resolved from the agent file location  <br>• `agentStop` hook now safely aborts after 8 consecutive blocks; receives `stop_hook_active` flag  <br>• Added opt‑in git & GitHub authentication flow in the O prompt |
| **v1.0.72** | 2026‑07‑20 | • Introduced `agentStop` hook improvements (same as above)  <br>• Minor bug‑fixes (see release notes) |

*No other releases were merged in the past 24 h.*

---

### 3. Hot Issues (10 noteworthy)
| # | Title (link) | Status / 👍 / Comments | Why it matters |
|---|--------------|------------------------|----------------|
| **#1481** | [SHIFT + ENTER should spawn a line break](/repo/issues/1481) | Open, 👍 17, 27 comments | Users expect universal `SHIFT+ENTER` line‑break behavior; current `CTRL+ENTER` implementation is confusing. |
| **#3622** | [Copy to clipboard silently fails on Windows](/repo/issues/3622) | Open, 👍 4, 4 comments | Clipboard operation appears successful but does not update the system clipboard – a regression from v1.0.48. |
| **#2181** | [COPILOT_CUSTOM_INSTRUCTIONS_DIR not loading all instructions](/repo/issues/2181) | Open, 👍 1, 2 comments | Regression where instructions from multiple directories are ignored; impacts agency configuration. |
| **#1688** | [Add configurable auto‑compaction threshold to config.json](/repo/issues/1688) | Open, 👍 5, 2 comments | Users of large models (e.g., Claude Opus) need fine‑grained control over context compaction to avoid latency spikes. |
| **#4185** | [\(`--add-dir`\) causes Claude sub‑agent dispatch to fail](/repo/issues/4185) | Open, 👍 0, 0 comments | `--add-dir` triggers a 400 error about cache‑control blocks; blocks multi‑directory workflows. |
| **#4180** | [Interactive TUI ignores all keyboard input written to its PTY](/repo/issues/4180) | Open, 👍 0, 0 comments | Automation/orchestration tools (e.g., tmux, expect) cannot send keystrokes to the TUI, breaking scriptability. |
| **#4179** | [TUI: Ability to click on enqueued entry to edit it](/repo/issues/4179) | Open, 👍 0, 1 comment | Users want mouse‑driven editing of queued messages, a common UX expectation in rich CLIs. |
| **#4190** | [Quickly switch between pre‑set model configs](/repo/issues/4190) | Open, 👍 0, 0 comments | Rapid model/effort switching is needed for efficiency when toggling between high‑ and low‑cost models. |
| **#4193** | [Allow sandboxed sessions to write their own plan.md without granting access to other sessions](/repo/issues/4193) | Open, 👍 0, 0 comments | Current permission model is overly broad; a sandboxed approach would improve security. |
| **#4183** | [Auto‑compaction does not prevent CAPI 5 MB failure from accumulated normal tool history](/repo/issues/4183) | Open, 👍 2, 0 comments | Context‑token capacity can be exhausted by serialized tool responses, causing unrecoverable failures. |

*These issues represent the most discussed, up‑voted, or recently updated problems in the last 24 h.*

---

### 4. Key PR Progress
- **No pull requests** were merged or opened in the last 24 h (the “Latest Pull Requests” section is empty).  
- The most recent code changes are confined to the **v1.0.73** release notes and the `agentStop` hook implementation.

---

### 5. Feature Request Trends
- **CLI ergonomics**: line‑break shortcuts (`SHIFT+ENTER`), mouse‑click editing of queued messages, and quick model‑config switching are the top UX requests.  
- **Configuration flexibility**: users want a configurable auto‑compaction threshold and the ability to pick BYOK/custom models for background agents.  
- **Security/Isolation**: sandboxed sessions need a safer way to edit `plan.md` without exposing the entire worktree.  
- **Reliability of integrations**: stable clipboard handling on Windows, proper PTY input for automation, and consistent copying of project paths are recurring reliability concerns.  

---

### 6. Developer Pain Points
- **Clipboard inconsistencies** across platforms (Windows silent failure, tmux/screen in WSL2/VS Code).  
- **TUI input dead‑ends** when scripts drive the CLI via PTY, breaking orchestration pipelines.  
- **Hard‑coded limits and defaults** (e.g., block‑count caps, default model selection) that cannot be overridden without workarounds.  
- **Context‑size surprises**: silent 5 MB body‑limit failures despite seemingly sufficient token headroom, causing abrupt command aborts.  
- **Permission‑granting friction** when sandboxed agents need to modify shared files like `plan.md`.  

---

*All links point to the respective GitHub issue pages; for the full changelog and source code, see the repository at https://github.com/github/copilot-cli.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑07‑21**  
*Source: github.com/MoonshotAI/kimi-cli*  

---

### 1. Today’s Highlights  
- A flurry of bug‑fix activity appeared today: six issues were opened or updated and three pull requests were refreshed, all targeting stability and correctness regressions introduced in recent releases.  
- The most visible work centers on the **StrReplaceFile** tool (Issue #2526 & PR #2524) which mis‑counts replacements when edits chain, and on **Goal mode** runaway loops (Issue #2525) that waste tokens while waiting for external conditions.  
- Windows‑specific migration and UI quirks continue to surface (Issues #2522 & #2521), indicating that cross‑platform parity remains a pain point for the community.

### 2. Releases  
*No new versions were published in the last 24 h.*  

### 3. Hot Issues  
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #2209 | **Persistent 429 engine_overloaded on cloud servers** (v1.41.0) | Users on remote Linux boxes experience uninterrupted 429 responses for >48 h, effectively disabling the CLI despite diagnostic exports. | 3👍, 4 comments – a high‑impact reliability concern for production‑grade usage. |
| #2526 | **StrReplaceFile counts replacements against original content** | When edits are chained, later replacements that depend on earlier ones are missed in the reported total, leading to inaccurate telemetry and possible silent failures. | New (0👍, 0 comments) – directly addressed by PR #2524. |
| #2525 | **Goal mode no‑op continuation burns tokens indefinitely** | While waiting on external conditions (e.g., long‑running jobs), the agent re‑injects the full goal every few seconds, consuming tokens and context without progress. | New (0👍, 0 comments) – a costly inefficiency for automated workflows. |
| #2523 | **Context compaction bug – reopened deleted task** | After a task is marked completed and removed, context compaction can resurrect it, causing duplicated work and confusion. | New (0👍, 0 comments) – highlights fragility in the session‑state cleanup logic. |
| #2522 | **Windows: old kimi‑code sessions not migrated after upgrade; `kimi migrate` missing** | Upgrading from the legacy `kimi-code` client to the new `kimi` CLI leaves `%USERPROFILE%\.kimi-code` data behind, breaking continuity for Windows users. | New (0👍, 0 comments) – a migration‑experience regression. |
| #2521 | **Windows `herdr` arrow‑key selection broken** | In the Windows build, the interactive `herdr` helper ignores arrow‑key navigation, forcing users to rely on mouse or alternative inputs. | New (0👍, 0 comments) – a usability regression affecting keyboard‑centric workflows. |

*(Only six issues were updated in the window; all are listed above.)*

### 4. Key PR Progress  
| # | PR | Description & Impact |
|---|----|----------------------|
| #2524 | **fix(tools): count StrReplaceFile replacements against the running content** | Resolves #2526 by adjusting the replacement counter to reflect the file state after each sequential edit, ensuring accurate telemetry for chained edits. |
| #2520 | **fix(session): align fork/undo context truncation to wire turns** | Addresses #2517 (and related #1974, #2049) by making context truncation respect the actual wire‑turn count, fixing history mismatches after fork/undo operations. |
| #2519 | **fix(app): refresh stale frozen system prompt on session resume** | Resolves #2420 by re‑loading the latest system prompt from disk when a session is resumed, allowing newly added skills or `AGENTS.md` changes to take effect. |

*(All three PRs were updated today; no further PR activity was recorded.)*

### 5. Feature Request Trends  
- **Reliability & Quota Handling**: Repeated reports of 429/engine_overloaded errors (e.g., #2209) indicate a strong demand for smarter back‑off, quota‑aware retry logic, and better surface‑level diagnostics.  
- **Token‑Efficient Goal Management**: Issue #2525 reflects community desire for goal‑mode to pause or throttle when external conditions block progress, rather than busy‑looping.  
- **Cross‑Platform Session Continuity**: Windows migration gaps (#2522) and UI glitches (#2521) show users expect seamless upgrade paths and consistent keyboard support across OSes.  
- **Accurate Edit Telemetry**: The StrReplaceFile fix request (#2526) signals interest in precise operation metrics for debugging and audit trails.  

### 6. Developer Pain Points  
- **Unexpected Rate‑Limiting**: Persistent 429 responses on remote servers disrupt automated pipelines and force manual intervention.  
- **Resource Waste in Idle States**: Goal mode’s continuous re‑injection burns tokens and context, inflating costs for long‑running supervision tasks.  
- **Fragmented Windows Experience**: Missing migration commands and broken keyboard navigation erode trust in the Windows port, pushing developers toward workarounds or alternative tools.  
- **State‑Consistency Bugs**: Fork/undo history mismatches and context‑compaction resurfacing deleted tasks create subtle but hard‑to‑trace regressions in complex workflows.  
- **Telemetry Gaps**: Inaccurate edit counts hinder teams that rely on CLI output for metrics or billing, leading to distrust in reported numbers.  

---  

*Prepared for developers seeking a concise, actionable overview of recent Kimi Code CLI activity.*  
*Links point directly to the respective GitHub items.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑07‑21**

---

### 1. Today’s Highlights  
The community saw the **v1.18.4 desktop release** that adds adaptive reasoning controls for Kimi models and tightens timeout handling on slow connections. At the same time, a cluster of high‑visibility issues surfaced – notably broken Bun package installs, a hard 32 k output‑token cap, and occasional desktop‑app crash loops linked to the notification server.  

---

### 2. Releases  
- **v1.18.4** – *Core*  
  - Adaptive thinking controls for Kimi models on Anthropic‑compatible providers (reasoning output summarized by default).  
  - Reduced OpenAI provider header timeouts during slow connection setup.  
  - Bug‑fixes for npm plugin entry‑point resolution on Windows and other stability patches.  
  👉 [Release notes / changelog](https://github.com/anomalyco/opencode/releases/tag/v1.18.4)  

*(No other new version tags were reported in the last 24 h.)*

---

### 3. Hot Issues  *(top‑10 by comment volume & community interest)*  

| # | Title (link) | Why it matters | Community pulse |
|---|--------------|----------------|-----------------|
| **#27906** | [v1.15.1+ Breaks Bun Installs](https://github.com/anomalyco/opencode/issues/27906) | Bun blocks post‑install scripts for global packages; v1.15.1 introduced them, breaking the default workflow for many users. | 20 comments, 13 👍 – strong demand for a Bun‑friendly install path. |
| **#29363** | [Bug: `limit.output` silently capped at 32k] (https://github.com/anomalyco/opencode/issues/29363) | The hard 32 k cap forces users to rely on the experimental env‑var `OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX`. | 15 comments, 7 👍 – frustration over undocumented limitation. |
| **#37171** | [Desktop crashes on restart: “Notification server not found: wsl:Ubuntu”](https://github.com/anomalyco/opencode/issues/37171) | Repeated crash on launch after WSL integration; blocks daily usage for many desktop users. | 9 comments, 4 👍 – high impact, urgent fix needed. |
| **#37970** | [Plan/Build mode](https://github.com/anomalyco/opencode/issues/37970) | Recent UI removes the explicit Plan/Build toggle, leaving users uncertain how to control execution mode. | 9 comments, 0 👍 – confusion over lost workflow control. |
| **#37430** | [Cannot switch between build and plan modes in new UI] (https://github.com/anomalyco/opencode/issues/37430) | New UI eliminates the mode‑switch button; existing workflows break. | 6 comments, 2 👍 – strong appeal for UI restoration. |
| **#23539** | [FEATURE: Plugin API for custom status bar widgets] (https://github.com/anomalyco/opencode/issues/23539) | Requested API to expose status‑bar widgets, consolidating earlier hook proposals. | 6 comments, 4 👍 – clear appetite for richer UI extensibility. |
| **#35686** | [OpenCode Desktop v1.17.14 can get stuck in an infinite startup crash loop] (https://github.com/anomalyco/opencode/issues/35686) | Infinite crash on “Notification server not found” renders the app unusable until manually killed. | 6 comments, 1 👍 – recurring pain point across versions. |
| **#35434** | [Bug: Multi‑question tool calls fail silently in TUI] (https://github.com/anomalyco/opencode/issues/35434) | Since v1.17.13, multi‑question prompts never submit; only single‑question works. | 6 comments, 0 👍 – regression that hampers complex interactions. |
| **#36826** | [ERROR – “Failed to send prompt. Unexpected server error.”] (https://github.com/anomalyco/opencode/issues/36826) | DeepSeek V4 Flash requests frequently hit 400/401/500 errors via the Console‑Go proxy. | 6 comments, 1 👍 – reliability concerns for subscribed models. |
| **#37815** | [Bug] Error from provider (Console Go): Upstream request failed — Kimi K3 | Kimi K3 model crashes on selection despite appearing in the model list. | 2 comments, 1 👍 – isolated but signals provider‑specific instability. |

---

### 4. Key PR Progress  *(top‑10 PRs by comment/attention count)*  

| PR | Title (link) | What it delivers |
|----|--------------|------------------|
| **#38014** | [fix(core): resolve npm plugin entry point as file URL on Windows](https://github.com/anomalyco/opencode/pull/38014) | Normalizes entry‑point URLs on Windows, preventing path‑resolution failures for plugins. |
| **#38022** | [docs(ecosystem): add opencode‑hypa plugin](https://github.com/anomalyco/opencode/pull/38022) | Adds `opencode‑hypa` to the ecosystem documentation table. |
| **#37647** | [feat(nix): build opencode2 (TUI) alongside opencode](https://github.com/anomalyco/opencode/pull/37647) | Provides a parallel `opencode2` build for the TUI, enabling side‑by‑side testing of new UI components. |
| **#37219** | [fix(opencode): ignore node_modules during config and skill discovery](https://github.com/anomalyco/opencode/pull/37219) | Prevents accidental loading of `node_modules` during plugin/session discovery, reducing false positives. |
| **#37956** | [feat(app): add image backgrounds] (https://github.com/anomalyco/opencode/pull/37956) | Introduces background‑image controls for both web and desktop clients, persisting images via cache/storage. |
| **#38016** | [fix(core): improve patch errors] (https://github.com/anomalyco/opencode/pull/38016) | Adds richer parsing errors for missing/ malformed hunk boundaries and preserves filesystem details. |
| **#38006** | [feat(codemode): support JSON callbacks] (https://github.com/anomalyco/opencode/pull/38006) | Enables effectual `JSON.parse` revivers and `JSON.stringify` replacers, expanding code‑mode capabilities. |
| **#35688** | [fix(app): guard missing notification server state] (https://github.com/anomalyco/opencode/pull/35688) | Prevents renderer crashes when the notification server state is unavailable, addressing crash #35686. |
| **#38005** | [feat(codemode): support BigInt arithmetic] (https://github.com/anomalyco/opencode/pull/38005) | Adds support for decimal, binary, octal, hex & separated BigInt literals within a 4 KB magnitude cap. |
| **#38010** | [feat(codemode): support BigInt arithmetic] (https://github.com/anomalyco/opencode/pull/38010) – *Note: duplicate label; actual PR* | Provides an opt‑in flag to disable the exit splash screen for embedded/white‑label deployments. |

---

### 5. Feature Request Trends  

- **Plugin extensibility** – Multiple proposals call for a **formal Plugin API** (e.g., status‑bar widgets, custom hooks) to let developers inject UI elements and utilities without forking the core.  
- **Network‑restricted environments** – A recurring request for **built‑in proxy support with auto‑start/stop** to simplify usage behind corporate firewalls.  
- **Session visibility** – Users want the **session name displayed in the TUI status bar** and better UI cues for switching between *Plan* and *Build* modes.  
- **Cost‑display localization** – Requests to let users **configure usage‑cost currency** instead of the hard‑coded USD.  
- **UI polish & accessibility** – Feedback includes dark‑theme brightness concerns, splash‑screen opt‑out options, and richer image background controls for branding/white‑label scenarios.  

Overall, the community is gravitating toward **greater configurability, reliable networking, and clearer mode awareness** within the desktop/web UI.

---

### 6. Developer Pain Points  

- **Frequent startup crashes** tied to the *notification server* (e.g., “Notification server not found: wsl:Ubuntu” or “http://localhost:4096”) causing the app to become unusable until manually killed.  
- **Bun incompatibility** introduced by post‑install scripts in v1.15.1, breaking the default global‑package workflow for many users.  
- **Hard caps on output tokens** (32 k) that are not configurable without an experimental env‑var, forcing users to work around the limit.  
- **Unclear UI state changes** – removal of the Plan/Build toggle and missing mode-switch controls leaves developers uncertain about execution mode.  
- **Silent failures in multi‑question TUI calls** since v1.17.13, where pressing Enter after pasting text drops the input without sending the prompt.  
- **Provider‑specific request failures** (e.g., Console‑Go 400/401/500 errors with DeepSeek V4 Flash and Kimi K3), indicating instability in certain model integrations.  

These recurring issues underscore a need for **more stable startup handling, clearer UI affordances, and configurable limits** to improve day‑to‑day developer productivity.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



### Today’s Highlights  
Key activity includes resolving critical timeouts in self-hosted providers (#6476), refining cost tracking via provider-reported metrics (#6881), and adding Amazon Bedrock Mantle as a new OpenAI-compatible provider (#6216). The community is focused on improving reliability and cost transparency.  

### Releases  
No new versions released in the last 24h.  

### Hot Issues  
1. **[#6476](https://github.com/earendil-works/pi/issues/6476)** – `httpIdleTimeoutMs` regression breaks self-hosted OpenAI API after v0.80.6 upgrade. Critical for users relying on custom providers. (11 comments)  
2. **[#5263](https://github.com/earendil-works/pi/issues/5263)** – Request to make model/thinking changes session-specific by default. Improves multi-tasking safety. (8 comments)  
3. **[#6725](https://github.com/earendil-works/pi/issues/6725)** – Incorrect pricing for GPT-5.6 models in Copilot. Misleading cost estimates. (7 comments)  
4. **[#5407](https://github.com/earendil-works/pi/issues/5407)** – Double keypress issues in Kitty terminal. Affects user experience. (7 comments)  
5. **[#6794](https://github.com/earendil-works/pi/issues/6794)** – Slow startup due to model catalogue refresh. Impacts usability. (3 comments)  
6. **[#6652](https://github.com/earendil-works/pi/issues/6652)** – Crash logs hardcode `~/.pi` instead of respecting `PI_CODING_AGENT_DIR`. Causes data loss risks. (4 comments)  
7. **[#6820](https://github.com/earendil-works/pi/issues/6820)** – Queued messages dropped during compaction. Breaks workflows. (2 comments)  
8. **[#6883](https://github.com/earendil-works/pi/issues/6883)** – Corrupted sessions due to extension errors. Loss of progress. (1 comment)  
9. **[#6888](https://github.com/earendil-works/pi/issues/6888)** – Claude Pro/Max billed as third-party via default system prompt. Billing rage. (1 comment)  
10. **[#6844](https://github.com/earendil-works/pi/issues/6844)** – Deleted paste markers corrupt registry. Breaks undo功能. (2 comments)  

### Key PR Progress  
1. **[#6216](https://github.com/earendil-works/pi/pull/6216)** – Added Amazon Bedrock Mantle OpenAI Responses provider. Expands integrations.  
2. **[#6881](https://github.com/earendil-works/pi/pull/6881)** – Use provider-reported cost in responses. Improves billing accuracy.  
3. **[#6865](https://github.com/earendil-works/pi/pull/6865)** – Add `get_available_thinking_levels` RPC. Enables dynamic model selection.  
4. **[#6858](https://github.com/earendil-works/pi/pull/6858)** – Qwen Token Plan added as built-in provider. Supports Alibaba’s infrastructure.  
5. **[#6837](https://github.com/earendil-works/pi/pull/6837)** – Align GPT-5.6 Codex context with official client. Fixes context mismatches.  
6. **[#6853](https://github.com/earendil-works/pi/pull/6853)** – Adjust GPT-5.6 context window to 272K. Matches API docs.  
7. **[#6765](https://github.com/earendil-works/pi/pull/6765)** – Separate generated model data. Reduces repo churn.  
8. **[#6775](https://github.com/earendil-works/pi/pull/6775)** – Retry compaction/branch summarization failures. Improves reliability.  
9. **[#6886](https://github.com/earendil-works/pi/pull/6886)** – Support Anthropic Fable-to-Opus fallback. Enhances model fallback logic.  
10. **[#6864](https://github.com/earendil-works/pi/pull/6864)** – Fix env section ignored in auth.json. Critical for cloud provider configs.  

### Feature Request Trends  
- **Session isolation**: Emphasis on ephemeral model changes (#5263) and archive shortcuts (#6874).  
- **Cost transparency**: Demand for provider-reported pricing (#6881) and realistic Copilot billing (#6725).  
- **Customization**: Requests for message chrome controls (#6876) and trigger metadata (#6884).  
- **Multi-modal support**: Video/audio in prompts (#3200) and Anthropic fallback (#6886).  

### Developer Pain Points  
- **Timeout regressions**: Recurring issue with `httpIdleTimeoutMs` (#6476) affecting self-hosted setups.  
- **Session management**: Hardcoded paths (#6652), corrupted sessions (#6883), and unreliable undo (#6844).  
- **Startup latency**: Slow model catalogue refresh (#6794) delays workflows.  
- **API inconsistencies**: Missing usage in DeepSeek responses (#6819) and stale token planning data (#6647).


</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-07-21

### 1. Today's Highlights
The Qwen Code ecosystem is seeing a heavy push toward **automation and autonomy**, specifically through advancements in the `autofix` engine and workspace-oriented runtime coordination. Significant focus is currently being placed on refining how AI agents handle "thinking" models and resolving complex tool-calling ambiguities between OpenAI-compatible providers and Qwen's internal schema.

### 2. Releases
* **v0.20.0-nightly.20260721.cda0e0348**: Latest nightly build including critical fixes for `autofix` logic, specifically addressing label-driven takeover and dispatch operations.

### 3. Hot Issues
1. **[#7040] RFC: Reliable auto-memory recall** – A high-priority discussion on balancing memory recall quality with performance, aiming to provide reliable context without enterprise-scale overhead. [Link](https://github.com/QwenLM/qwen-code/issues/7040)
2. **[#7315] Agent tool schema validation error** – A critical bug where OpenAI-compatible models return conflicting parameters (e.g., `working_dir` and `isolation`), causing subagent launches to fail. [Link](https://github.com/QwenLM/qwen-code/issues/7315)
3. **[#7284] Side-query forces `enable_thinking: false`** – A major issue where internal side-queries are breaking TokenPlan endpoints that strictly require reasoning enabled. [Link](https://github.com/QwenLM/qwen-code/issues/7284)
4. **[#7147] MCP server tool listing timeout** – Users report authentication works, but tool/resource listing via MCP fails due to timeouts. [Link](https://github.com/QwenLM/qwen-code/issues/7147)
5. **[#7301] Web Shell bearer token loss** – A UX friction point where refreshing the page causes the Web Shell to lose its session token. [Link](https://github.com/QwenLM/qwen-code/issues/7301)
6. **[#7056] VS Code Companion connection failure** – Reports of the Qwen ACP process exiting unexpectedly during IDE integration. [Link](https://github.com/QwenLM/qwen-code/issues/7056)
7. **[#7316] OpenAI toolCall incompatibility** – Discussion on how specific OpenAI model responses for `subAgent` are breaking existing tool workflows. [Link](https://github.com/QwenLM/qwen-code/issues/7316)
8. **[#7327] DingTalk transient API failures** – Bug regarding inadequate retry logic for remote emotion APIs in social integrations. [Link](https://github.com/QwenLM/qwen-code/issues/7327)
9. **[#7023] Model switch invalidating daemon sessions** – An architectural issue where switching models within a session terminates the active daemon. [Link](https://github.com/QwenLM/qwen-code/issues/7023)
10. **[#7244] Hardcoded ACP handshake timeout** – A request to make the `initialize` timeout configurable rather than the hardcoded 10s. [Link](https://github.com/QwenLM/qwen-code/issues/7244)

### 4. Key PR Progress
1. **[#7364] Autofix Review Thread Resolution** – Implements logic to automatically resolve review threads once an `autofix` has applied the fix. [Link](https://github.com/QwenLM/qwen-code/pull/7364)
2. **[#7350] Real-time Autofix for Managed Forks** – Enhances the bot to pick up feedback on fork PRs instantly rather than waiting for scheduled scans. [Link](https://github.com/QwenLM/qwen-code/pull/7350)
3. **[#7374] Per-tab Token Persistence** – Fixes the Web Shell session loss by using `sessionStorage` to preserve bearer tokens. [Link](https://github.com/QwenLM/qwen-code/pull/7374)
4. **[#7256] Daemon Secret Protection** – Strips sensitive `QWEN_SERVER_TOKEN` from child environment variables to prevent leakage. [Link](https://github.com/QwenLM/qwen-code/pull/7256)
5. **[#7308] Workspace Runtime Ownership** – Introduces a new coordination layer for `qwen serve` to manage ACP lifecycle by workspace. [Link](https://github.com/QwenLM/qwen-code/pull/7308)
6. **[#7367] Worktree Branch Visibility** – Updates TUI and Web Shell to show the actual git branch of the worktree, not just the main workspace. [Link](https://github.com/QwenLM/qwen-code/pull/7367)
7. **[#7362] Mobile-MCP Windows Support** – Fixes Android detection on Windows by correctly resolving the `adb` executable path. [Link](https://github.com/QwenLM/qwen-code/pull/7362)
8. **[#7373] SDK Auto-Permission Docs** – Adds documentation for the new `auto` permission mode in the TypeScript SDK. [Link](https://github.com/QwenLM/qwen-code/pull/7373)
9. **[#7355] Autofix Fleet Visibility** – Adds a summary table to scan runs to show the status of the entire managed fleet. [Link](https://github.com/QwenLM/qwen-code/pull/7355)
10. **[#7283] CI Workflow Model Specialization** – Splits model variables to allow different LLMs for autofix, triage, and review tasks. [Link](https://github.com/QwenLM/qwen-code/pull/7283)

### 5. Feature Request Trends
* **Automated Intelligence:** Increasing demand for "smart" automation, including smarter autofix loops, automated PR intake, and autonomous subagent management.
* **Memory & Context Optimization:** Significant interest in "Reliable Auto-Memory Recall" and better telemetry for context-safe memory retrieval.
* **Advanced Observability:** Requests for better visibility into the "reasoning" (thinking) process and improved tool-output budgeting/telemetry.
* **Configuration Flexibility:** Users are asking for more granular control over timeouts (ACP handshake) and skill-disabling settings.

### 6. Developer Pain Points
* **Schema Mismatches:** Significant friction caused by OpenAI-compatible models returning unexpected parameter combinations, breaking agentic tool-use.
* **Reasoning Model Integration:** Technical hurdles in ensuring `enable_thinking` parameters are handled correctly across side-queries and specialized API endpoints.
* **Session/Token Volatility:** Recurring frustrations regarding session loss upon browser refreshes or model switching within the daemon.
* **CI/CD Flakiness:** Maintenance overhead from slow or "flaky" automated patrol classifiers affecting developer velocity.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest**  
*2026-07-21*  

---

### **Today's Highlights**  
The CodeWhale TUI is undergoing critical refinements to execution environments and permission contracts in v0.9.1. Key fixes address environment-level sandboxing (#4042), memory leaks (#4489), and workflow journal integrity (#4635). Major PRs (#4642, #4646) overhaul UI/UX consistency and child agent state durability, aligning with developer expectations for reliability.  

---

### **Releases**  
No new releases in the last 24 hours.  

---

### **Hot Issues**  
1. **[#4032] Codewhale not following the constitution**  
   - CodeWhale writes ignored custom scripts despite user instructions. Violates reproducibility and trust.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/issues/4032)  

2. **[#4489] Hook process leaks on Windows**  
   - Node.js processes persist indefinitely after hook timeouts. Critical for Windows users.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/issues/4489)  

3. **[#4604] Setup wizard forced on every restart**  
   - First-run flow reappearance erodes trust. Users report productivity loss.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/issues/4604)  

4. **[#4642] Restore theme-native composer colors**  
   - Missing color cues in Plan/Act/Operate modes disrupt workflow visualization.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/issues/4642)  

5. **[#4645] Child name collisions in resumed sessions**  
   - Via name ambiguity blocks session recovery. Violates "one truthful runtime" principle.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/issues/4645)  

6. **[#4629] Empty Work surface on mode switches**  
   - UI regression creates false task state. Reported by multiple workflow users.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/issues/4629)  

7. **[#4640] xAI consent route blocking**  
   - Credential-required tools fail silently until explicit provider selection.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/issues/4640)  

8. **[#4638] Red/Green diff reversal**  
   - Missing inline code-change evidence increases cognitive load during reviews.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/issues/4638)  

---

### **Key PR Progress**  
1. **#4653** `test(tui)`: Lock scrolling behavior for long outputs  
   - Resolves #4603 via PTY integration. Ensures full output visibility without truncation.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/pull/4653)  

2. **#4652** `--no-project-config` for headless reproducibility  
   - Enables compliance-audit-friendly CI/CD workflows.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/pull/4652)  

3. **#4642** Theme-native composer colors restoration  
   - Aligns UI with accessibility standards (#4642).  

4. **#4646** Child output handoff durability  
   - Prevents partial previews in agentic workflows.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/pull/4646)  

5. **#4611** `fix(goal)`: Cross-turn durable goals  
   - Maintains objectives during session interruptions.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/pull/4611)  

6. **#4607** Durable Work surface progress  
   - Preserves task continuity across restarts.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/pull/4607)  

7. **#4370** `feat(model-lab)`: TelecomJS provider catalog fix  
   - Resolves underpopulation of LLMs in custom providers.  
   - [GitHub link](https://github.com/Hmbown/CodeWhale/pull/4370)  

---

### **Feature Request Trends**  
- **Scoped Execution Environments**: 15+ proposals to isolate sub-agent sandboxes and workspace permissions (#4042, #4627, #4634).  
- **Non-Modal Tools**: 8 issues demand Auto-Review permissions without approval modals (#4626, #4633).  
- **Cross-Provider Consistency**: 6 requests emphasize route-agnostic model fallbacks (#4644, #4503).  

---

### **Developer Pain Points**  
1. **Recurring Setup Friction**: Wizard re-triggering (#4604) erodes trust in ephemeral setups.  
2. **Memory Leaks**: Windows-specific Node.js hangs (#4489) destabilize CLI workflows.  
3. **Permission Overload**: Modal approvals for Auto-Review clash with agentic efficiency demands.  
4. **Provider Fragmentation**: Custom LLM catalog setup remains inconsistent (#4370, #4644).  
5. **UI Scrolling Limits**: Long outputs (#4603) and To-do lists (#4594) break discovery patterns.  

---  
*Subject to change. Join community discussions for resolution updates.*


</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*