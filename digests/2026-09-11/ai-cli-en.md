# AI CLI Tools Community Digest 2026-09-11

> Generated: 2026-09-11 02:06 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report
**Date: 2026-09-11**

---

## 1. Ecosystem Overview

The AI CLI tool landscape in September 2026 is characterized by rapid iteration across at least eight major projects spanning Big Tech (Google, OpenAI, GitHub, Anthropic), leading AI labs (Moonshot, Qwen, DeepSeek), and independent/community-driven efforts (Pi/AnomalyCo). A defining pattern is the shift from simple chat interfaces to sophisticated agent runtimes requiring robust security boundaries, reliable session management, and cross-platform compatibility. Security hardening—particularly around prompt injection, filesystem isolation, and sandboxing—has become a near-universal priority, while the community is simultaneously pushing for better agent control, deterministic behavior, and ergonomic developer experience. The ecosystem reflects a maturing market where the conversation has moved beyond basic functionality toward reliability, safety, and scale.

---

## 2. Activity Comparison

| Tool | Hot Issues Today | Key PRs Updated | Release Status |
|------|:---:|:---:|---|
| **Gemini CLI** (Google) | 10 | 10 | Nightly v0.61.0 |
| **GitHub Copilot CLI** | 10 | 2 | Stable v1.0.84-4 |
| **Pi** (AnomalyCo/BadLogic) | 10 | 10 | No release |
| **Qwen Code** (QwenLM) | 10 | ~7+ | Stable v0.23.3 + desktop v0.3.0 |
| **Kimi Code CLI** (MoonshotAI) | 1 | 0 | None |
| **Claude Code** (Anthropic) | — | — | Digest unavailable |
| **OpenAI Codex** | — | — | Digest unavailable |
| **OpenCode** (AnomalyCo) | — | — | Summary generation failed |
| **DeepSeek TUI** | — | — | Summary generation failed |

**Notes:** Gemini CLI, Pi, and Qwen Code show the highest development velocity with ~10 issues and PRs each. GitHub Copilot CLI has high engagement per issue (e.g., 76👍 on vi/vim mode) but fewer merged PRs in the snapshot window. Kimi Code CLI is in a notably quiet phase, with a single authentication-related issue dominating its digest.

---

## 3. Shared Feature Directions

Several requirements converge across multiple tool communities:

| Direction | Tools Involved | Specific Needs |
|-----------|----------------|----------------|
| **Security Hardening** | Gemini CLI, Pi, Qwen Code | Prompt injection prevention, filesystem sandboxing, workspace boundary validation, input sanitization |
| **Configuration & Settings Management** | Gemini CLI, Copilot CLI, Qwen Code | Settings.json parsing robustness (comments support), cross-agent config overrides, session persistence |
| **Agent Reliability & Control** | Gemini CLI, Pi, Qwen Code | Subagent termination detection, tool timeout defaults, deterministic execution boundaries, destructive behavior prevention |
| **Cross-Platform Compatibility** | Gemini CLI, Pi, Copilot CLI | Windows path handling (NTFS, git args), WSL2 clipboard, Wayland browser support, terminal rendering consistency |
| **Memory & Performance** | Copilot CLI, Pi, Qwen Code | OOM crash fixes, handle leak prevention, efficient parsing (O(n²) → O(n)), daemon memory allocation |
| **Extension/Plugin Ecosystems** | Copilot CLI, Pi | Enable/disable toggles, JSON output for scripting, skill naming flexibility, extension system maturity |
| **Desktop App Evolution** | Qwen Code, Pi | Transitioning to lighter frameworks (Web Shell, Tauri), reducing Electron dependency, preview builds |

---

## 4. Differentiation Analysis

**Gemini CLI (Google):** Uniquely focused on agent behavior refinement—specifically reducing sycophantic responses and improving conversational tone for professional contexts. Its security PRs are the most extensive, covering indirect prompt injection via build files, Windows sandbox git validation, and NTFS path hardening. The tool is deeply integrated with Google's Gemini model ecosystem and emphasizes configurable, sandboxed agent execution.

**GitHub Copilot CLI:** Distinguished by its deep IDE/editor integration (VS Code companion) and enterprise-oriented features like organization-level agent discovery and multi-account support. The community's highest-engagement issues (76👍 for vi/vim mode) reflect a power-user base demanding traditional editor ergonomics. Plugin management (enable/disable, JSON output) is the most mature among all tools.

**Pi (AnomalyCo):** Excels in multi-model support and performance optimization. The community is actively solving fundamental streaming and parsing challenges (O(n²) tool-call re-parsing, Bedrock adapter issues). Its extension system is notably flexible, allowing system prompt appends and diverse skill configurations. Pi positions itself as the lightweight, developer-centric alternative with rich model catalog and extension hooks.

**Qwen Code (QwenLM):** The most product-diverse, shipping CLI, TypeScript SDK, and desktop app simultaneously. Unique focus on DashScope/multi-model endpoint compatibility and a visible evolution away from Electron toward Web Shell/Tauri. Issues around session history migration and VS Code extension continuity suggest a rapidly growing user base creating migration pain points.

**Kimi Code CLI (MoonshotAI):** In its current phase, the project is narrowly focused on authentication reliability, with a single critical issue (HTTP 500 after browser login) dominating all community attention. This suggests either early-stage development or a period of reduced feature scope.

---

## 5. Community Momentum & Maturity

**Most Active Communities (by volume and engagement):**
- **Gemini CLI** and **Pi** are tied for highest raw development activity with 10 issues and 10 PRs each in the snapshot window. Both projects show broad contributor participation and active issue triage.
- **GitHub Copilot CLI** demonstrates the highest per-issue engagement (up to 76👍 on a single feature request), indicating a large, invested user base despite lower PR throughput.
- **Qwen Code** shows balanced momentum across releases, issues, and PRs, with multiple product lines (CLI, SDK, desktop) suggesting organizational backing.

**Rapidly Iterating:** Gemini CLI (nightly releases), Pi (continuous PR flow), and Qwen Code (simultaneous CLI + desktop + SDK updates) are iterating fastest.

**Early Stage / Quiet:** Kimi Code CLI has minimal community activity, and OpenCode and DeepSeek TUI produced no usable digest data, indicating either limited community engagement or reporting gaps.

**Enterprise Signal:** Copilot CLI's organization-level agent discovery issues and enterprise-focused features suggest the most mature enterprise adoption path.

---

## 6. Trend Signals

**1. Security is non-negotiable.** Every tool with detailed data is investing heavily in sandboxing, prompt injection prevention, and filesystem isolation. The trend toward "trust boundaries" (Qwen Code's #8102) and workspace boundary validation (Gemini CLI's #29250) signals that agent security has moved from nice-to-have to foundational architecture.

**2. Agent lifecycle management is the next frontier.** Subagent termination detection, session resumption, checkpoint handling, and model change persistence are all active problem areas. As agents become more autonomous, managing their lifecycle reliably will define product quality.

**3. Cross-platform friction persists.** Windows-specific issues (NTFS paths, git sandboxing, clipboard failures, TUI rendering) appear across virtually every tool, suggesting that cross-platform consistency remains unsolved at the infrastructure level.

**4. Developer ergonomics are gaining priority.** The strongest community support (Copilot CLI's vi/vim mode at 76👍, Gemini CLI's sycophancy fix at 39👍) reflects demand for professional-grade interaction patterns—not just technical capability but conversational quality and editing workflow parity with traditional tools.

**5. Memory management threatens long-session usability.** OOM crashes and handle leaks in Copilot CLI, context line memory in Pi, and daemon memory allocation in Qwen Code all indicate that as agent sessions grow longer and more complex, resource management becomes a critical bottleneck.

**6. Extension ecosystems are maturing but reveal API gaps.** Every tool with a plugin/extension system is encountering limits: notification conflicts (Pi), file locking during updates (Copilot), skill naming restrictions (Pi), and configuration override failures (Gemini CLI). The community is pushing these systems toward production readiness.

**7. Desktop apps are being reimagined.** Qwen Code's shift from Electron to Web Shell/Tauri and Pi's TUI-focused approach suggest the industry is moving away from heavy desktop frameworks toward lighter, more maintainable client architectures.

---

**Reference Value:** Developers evaluating AI CLI tools should consider: (a) security posture if handling sensitive codebases, (b) ecosystem integration needs (IDE, cloud providers), (c) tolerance for platform-specific bugs, and (d) whether the project's maturity matches their operational requirements. Enterprise adopters should prioritize Copilot CLI for integration depth, while developers seeking flexibility and multi-model support should evaluate Pi and Gemini CLI.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-09-11*

---

## 🔥 Top Skills Ranking  

The following Skills generated the most community engagement (by comment count and PR activity):

### 1. [document-typography](https://github.com/anthropics/skills/pull/514) – *OPEN*  
**Functionality:** Ensures high-quality typography in AI-generated documents by fixing orphan lines, widow paragraphs, and numbering alignment issues.  
**Discussion Highlights:** Praised as universally valuable since these issues affect every document output. Author `PGTBoos` noted practical heuristics used to detect and correct layout anomalies automatically.  
**Status:** Open, awaiting review.

---

### 2. [odt-skill](https://github.com/anthropics/skills/pull/486) – *OPEN*  
**Functionality:** Enables reading, creating, filling templates, and converting ODT/ODS/OpenDocument files to HTML.  
**Discussion Highlights:** Seen as critical for open-format document support, especially among LibreOffice users and enterprise workflows relying on ISO standards.  
**Status:** Open, no recent updates.

---

### 3. [skill-quality-analyzer](https://github.com/anthropics/skills/pull/83) – *OPEN*  
**Functionality:** Meta-tool for evaluating other Skills with structured metrics including documentation quality, code correctness, and security posture.  
**Discussion Highlights:** Strong interest from maintainers seeking better tooling for validating incoming contributions. Suggested integrations into CI pipelines.  
**Status:** Open, proposed by community contributor `eovidiu`.

---

### 4. [scnet-hpc-skill](https://github.com/anthropics/skills/pull/1615) – *OPEN*  
**Functionality:** Adds support for interacting with SCNet HPC clusters using SSH + Slurm, including profile-specific configurations.  
**Discussion Highlights:** Valued by researchers and data scientists working in cloud-based compute environments. No major objections raised.  
**Status:** Recently updated, likely under internal review.

---

### 5. [web-artifacts-builder](https://github.com/anthropics/skills/issues/1362) – *Issue Reference*  
**Functionality:** Builds self-contained web artifacts via init/bundle scripts; however currently broken due to pnpm version conflicts.  
**Discussion Highlights:** Highlighted as essential for frontend developers who rely on reproducible builds. Community suggested fixes involving script modernization.  
**Status:** Issue still open; PRs pending resolution.

---

### 6. [frontend-design-skill](https://github.com/anthropics/skills/pull/210) – *OPEN*  
**Functionality:** Revised guide to help Claude produce cleaner, more actionable frontend interfaces.  
**Discussion Highlights:** Focused on reducing ambiguity and increasing usability of generated UI components through clearer directives.  
**Status:** Open.

---

### 7. [buffer-api-agent-skill](https://github.com/anthropics/skills/pull/1627) – *OPEN*  
**Functionality:** Integrates Buffer’s GraphQL scheduling APIs to allow agents to schedule/manage social media posts programmatically.  
**Discussion Highlights:** Gaining traction among automation-focused developers building cross-platform agent workflows.  
**Status:** Open.

---

### 8. [hivemind-skill](https://github.com/anthropics/skills/pull/1628) – *OPEN*  
**Functionality:** Delegates lightweight tasks to headless OpenCode workers while keeping Claude as planner/reviewer.  
**Discussion Highlights:** Novel approach that resonates well with cost-conscious teams looking to offload repetitive actions without sacrificing oversight.  
**Status:** Open.

---

## 📈 Community Demand Trends  

From top Issues, several themes emerge around anticipated new Skill directions:

| Trend | Description |
|-------|-------------|
| **Trust & Safety** | Users want clear boundaries between official and third-party Skills ([Issue #492](https://github.com/anthropics/skills/issues/492)) |
| **Enterprise Collaboration** | Org-wide sharing needs ([Issue #228](https://github.com/anthropics/skills/issues/228)); SharePoint integration concerns ([Issue #1175](https://github.com/anthropics/skills/issues/1175)) |
| **Evaluation Tooling** | Run Eval failures impact optimization loops ([Issue #556](https://github.com/anthropics/skills/issues/556)) |
| **Document Workflow** | Duplicate skills cause confusion ([Issue #189](https://github.com/anthropics/skills/issues/189)); missing or inconsistent formatting controls |
| **Quality Gates** | Interest in pre-flight checks before deployment/output delivery ([Issue #1385](https://github.com/anthropics/skills/issues/1385)) |

---

## 🚀 High-Potential Pending Skills  

These active-comment PRs are strong candidates for merging soon:

| PR | Title | Functionality | Status |
|----|-------|---------------|--------|
| [PR #1742](https://github.com/anthropics/skills/pull/1742) | `fix(mcp-builder): support mcp>=2` | Updates MCP client imports and header config for compatibility with newer versions | Open |
| [PR #1724](https://github.com/anthropics/skills/pull/1724) | `mcp-builder: update eval model` | Switches default model used in MCP evaluation scripts to Claude Sonnet 5 | Open |
| [PR #1367](https://github.com/anthropics/skills/pull/1367) | `add self-audit skill` | Mechanical verification + reasoning audit for outputs before delivery | Open |
| [PR #1607](https://github.com/anthropics/skills/pull/1607) | `mark retired models` | Updates API reference listing deprecated model IDs | Open |
| [PR #1099](https://github.com/anthropics/skills/pull/1099) | `run_eval.py crash fix` | Resolves Windows-specific issues preventing proper trigger detection | Open |

---

## 💡 Skills Ecosystem Insight  

At the Skills level, the community’s most concentrated demand lies in **improving trust, reliability, and interoperability of existing tools**, particularly through enhanced evaluation frameworks, consistent naming conventions, and robust cross-platform functionality.

---

User Safety: safe

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-09-11

## Today's Highlights
The Gemini CLI released version v0.61.0-nightly.20260911.ged2ac40df, addressing several critical bugs including shell command handling issues and JSON parsing problems. The community continues active discussions around agent behavior improvements, with particular focus on reducing sycophantic responses and better handling of configuration settings.

## Releases
**v0.61.0-nightly.20260911.ged2ac40df** (Released: 2026-09-11)
- Full changelog available at: https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260910.ged2ac40df...v0.61.0-nightly.20260911.ged2ac40df

## Hot Issues

1. **#4556 - Make Gemini less of a sycophant** (27 comments, 39👍)
   - **Why it matters**: Users want more professional, equal-toned responses for complex software design/architecting tasks instead of the current overly complimentary language.
   - **Community reaction**: Highest engagement issue with strong community support, indicating widespread frustration with current conversational style.

2. **#25166 - Shell command execution gets stuck with "Waiting input"** (4 comments, 3👍)
   - **Why it matters**: Critical bug where completed shell commands appear to hang indefinitely, blocking workflow.
   - **Community reaction**: Good engagement despite low volume, indicating it's a frequent pain point affecting productivity.

3. **#22323 - Subagent recovery after MAX_TURNS reported as GOAL success** (13 comments, 2👍)
   - **Why it matters**: The codebase_investigator subagent incorrectly reports successful completion even when hitting turn limits, misleading users about analysis results.
   - **Community reaction**: High technical discussion about agent state management and termination detection.

4. **#21841 - Harden ReadManyFilesTool: Concurrency Control** (11 comments, 0👍)
   - **Why it matters**: Security concern where overly broad glob patterns could trigger massive file ingestion, causing performance issues and potential data exposure.
   - **Community reaction**: Technical discussions about implementing proper rate limiting and defensive guards.

5. **#28206 - JSON.parse fails with comments in settings.json** (6 comments, 0👍)
   - **Why it matters**: Settings.json files with comments (common in user configurations) cause CLI crashes due to strict JSON parsing.
   - **Community reaction**: Technical focus on fixing parsing logic to handle comments gracefully.

6. **#26525 - Add deterministic redaction and reduce Auto Memory logging** (5 comments, 0👍)
   - **Why it matters**: Security improvement to prevent sensitive data exposure in Auto Memory processing and logging.
   - **Community reaction**: Important but lower engagement, typical for security-focused issues.

7. **#27043 - Pro limits not honored - 200 vs 1,500 requests/day** (5 comments, 1👍)
   - **Why it matters**: Authentication/authorization bug where users with Pro subscriptions are restricted to lower-tier limits.
   - **Community reaction**: Strong community validation (👍) indicating this is a real business impact issue.

8. **#22672 - Agent should stop/discourage destructive behavior** (3 comments, 1👍)
   - **Why it matters**: Safety concern where models execute potentially destructive git commands without proper safeguards.
   - **Community reaction**: Good engagement reflecting ongoing safety concerns in AI tooling.

9. **#22267 - Browser Agent ignores settings.json overrides** (3 comments, 0👍)
   - **Why it matters**: Configuration bug where browser agent doesn't respect global/project-level settings like maxTurns.
   - **Community reaction**: Technical discussion about configuration merging and agent initialization.

10. **#22745 - Assess AST-aware file reads, search, and mapping** (7 comments, 1👍)
    - **Why it matters**: Feature request to improve code analysis through Abstract Syntax Tree awareness for more precise file handling.
    - **Community reaction**: Forward-looking discussion about improving code investigation capabilities.

## Key PR Progress

1. **#29250 - Fix indirect prompt injection via build file modifications** (size/xl, need-issue)
   - **Progress**: Critical security hardening focusing on workspace boundary validation and untrusted flag handling.
   - **Impact**: Prevents potential workspace compromise through malicious build configurations.

2. **#29283 - Improve filesystem isolation and runtime state** (size/l, 2026-09-10)
   - **Progress**: Enhanced sandbox boundaries for Docker, Podman, runsc, LXC, and macOS Seatbelt environments.
   - **Impact**: Stronger security posture for sandboxed executions.

3. **#29110 - Route read_file content through FileSystemService** (size/m, pr-nudge-sent)
   - **Progress**: Fixes core I/O routing to ensure consistent file system access across different connection modes.
   - **Impact**: Resolves potential security gaps in file content access.

4. **#29184 - Validate git args in Windows sandbox** (size/m, pr-nudge-sent)
   - **Progress**: Security fix preventing silent git diff attacks on Windows systems.
   - **Impact**: Critical Windows-specific security hardening.

5. **#29195 - Degrade non-array history instead of crashing resume** (size/s, pr-nudge-sent)
   - **Progress**: Improves checkpoint file handling to gracefully handle malformed data.
   - **Impact**: Better resilience against corrupted checkpoint files.

6. **#29134 - Protect current session from deletion** (size/m, pr-nudge-sent)
   - **Progress**: Prevents accidental deletion of active sessions with proper ID matching.
   - **Impact**: Enhanced user experience and data safety.

7. **#29190 - Track all activate() Disposables in subscriptions** (size/m, pr-nudge-sent)
   - **Progress**: Fixes comma-operator bug in VSCode IDE companion extension.
   - **Impact**: Prevents command leaks and ensures proper resource cleanup.

8. **#29187 - Use safeLiteralReplace for LLM prompt template placeholders** (size/m, pr-nudge-sent)
   - **Progress**: Security fix for template injection vulnerabilities.
   - **Impact**: Prevents potential prompt injection attacks through replacement strings.

9. **#29288 - Mitigate NTFS 8.3 short name path issues** (size/l, 2026-09-10)
   - **Progress**: Enhanced path handling for Windows filesystems.
   - **Impact**: Prevents path traversal attacks on NTFS systems.

10. **#29181 - Add reliable file-only logger for interceptor validation** (size/l, pr-nudge-sent)
    - **Progress**: Implements new interceptor for enforcing "Top-level Principle" from GEMINI.md.
    - **Impact**: Improves reliability of model interaction governance.

## Feature Request Trends

1. **AST-Aware File Operations**: Multiple requests (#22745, #22746) for Abstract Syntax Tree-based file reading, searching, and codebase mapping to improve code analysis precision.

2. **Configuration & Settings Management**: Recurring theme with settings.json parsing issues (#28206), browser agent configuration overrides (#22267), and OAuth credential handling (#27149).

3. **Enhanced Agent Control**: Requests for better skill/sub-agent usage (#21968), improved destructive behavior prevention (#22672), and more reliable subagent trajectory visibility (#22598).

4. **Security Hardening**: Focus on deterministic redaction (#26525), filesystem isolation (#29283), and input validation across multiple areas.

5. **Sandbox & Environment Improvements**: Enhanced sandbox boundaries, runtime state isolation, and platform-specific security fixes (Windows git arg validation).

## Developer Pain Points

1. **Configuration Issues**: Most common pain point - settings.json parsing failures, browser agent ignoring configuration, OAuth login mapping problems.

2. **Agent Reliability**: Subagent termination detection bugs, inconsistent behavior with skills/sub-agents, and performance issues with large-scale operations.

3. **Security Concerns**: File system access patterns, data redaction, sandbox isolation gaps, and input validation vulnerabilities.

4. **Performance & Reliability**: Shell command hanging, JSON parsing crashes, checkpoint handling issues, and workspace state management.

5. **Cross-Platform Compatibility**: Windows-specific issues (NTFS path handling, git sandbox validation), Wayland browser agent failures, and path handling inconsistencies.

The community shows strong engagement on user experience issues (sycophantic responses) and critical bugs affecting productivity (shell command hanging), while maintainers are actively addressing security concerns and platform compatibility issues.# Gemini CLI Community Digest - 2026-09-11

## Today's Highlights
Gemini CLI released v0.61.0-nightly.20260911.ged2ac40df, addressing critical shell command handling and JSON parsing bugs. Community discussions focus on reducing sycophantic responses and improving agent behavior for software architecture tasks.

## Releases
**v0.61.0-nightly.20260911.ged2ac40df** (Released: 2026-09-11)
- Full changelog: https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260910.ged2ac40df...v0.61.0-nightly.20260911.ged2ac40df

## Hot Issues

1. **#4556 - Make Gemini less of a sycophant** (27 comments, 39👍)
   - Users want more professional, equal-toned responses for complex software design tasks, rather than overly complimentary language. Highest engagement issue indicating widespread frustration with current conversational style.

2. **#25166 - Shell command execution gets stuck** (4 comments, 3👍)
   - Critical bug where completed shell commands appear to hang indefinitely with "Awaiting user input" status. Significant productivity impact confirmed by multiple users.

3. **#22323 - Subagent recovery after MAX_TURNS reported as GOAL success** (13 comments, 2👍)
   - Codebase_investigator subagent incorrectly reports successful completion even when hitting turn limits, misleading users about analysis completeness.

4. **#21841 - Harden ReadManyFilesTool** (11 comments, 0👍)
   - Security concern where overly broad glob patterns could trigger massive file ingestion. Current implementation lacks proper rate limiting and defensive guards.

5. **#28206 - JSON.parse fails with comments in settings.json** (6 comments, 0👍)
   - Settings.json files with comments cause CLI crashes due to strict JSON parsing. Common in user configurations but unsupported.

6. **#27043 - Pro limits not honored (200 vs 1,500 requests/day)** (5 comments, 1👍)
   - Users with Pro subscriptions are restricted to lower-tier daily limits despite correct subscription identification.

7. **#22672 - Agent should stop/discourage destructive behavior** (3 comments, 1👍)
   - Models occasionally execute potentially destructive git commands without proper safeguards. Safety concern for DB operations and branch management.

8. **#22267 - Browser Agent ignores settings.json overrides** (3 comments, 0👍)
   - Browser agent completely ignores configuration overrides provided in global/project-level settings.json files.

9. **#22745 - Assess AST-aware file reads, search, and mapping** (7 comments, 1👍)
   - Feature request for Abstract Syntax Tree-based tools to improve code analysis precision and reduce token noise from misaligned reads.

10. **#24246 - Gemini CLI encounters 400 error with > 128 tools** (3 comments, 0👍)
    - Agent encounters 400 error when more than 400 tools are available. Request for smarter tool scope limiting.

## Key PR Progress

1. **#29250 - Fix indirect prompt injection via build file modifications** (size/xl)
   - Critical security hardening focusing on workspace boundary validation, especially for build configuration files and external command parameters.

2. **#29283 - Improve filesystem isolation and runtime state** (size/l)
   - Enhanced sandbox boundaries for Docker, Podman, runsc, LXC, and macOS Seatbelt environments with read-only configuration access.

3. **#29110 - Route read_file content through FileSystemService** (size/m)
   - Fixes core I/O routing to ensure consistent file system access across connection modes, addressing potential security gaps.

4. **#29184 - Validate git args in Windows sandbox** (size/m)
   - Critical Windows-specific security fix preventing silent `git diff --output=<path>` attacks in non-YOLO mode.

5. **#29195 - Degrade non-array history instead of crashing resume** (size/s)
   - Improves checkpoint file handling to gracefully handle malformed JSON with non-array `history` fields.

6. **#29134 - Protect current session from deletion** (size/m)
   - Prevents accidental deletion of active sessions with proper ID matching and filename suffix validation.

7. **#29190 - Track all activate() Disposables in subscriptions** (size/m)
   - Fixes comma-operator bug in VSCode IDE companion extension to prevent command leaks and ensure resource cleanup.

8. **#29187 - Use safeLiteralReplace for LLM prompt template placeholders** (size/m)
   - Security fix preventing potential prompt injection attacks through replacement string special characters.

9. **#29288 - Mitigate NTFS 8.3 short name path issues** (size/l)
   - Enhanced path handling for Windows filesystems to prevent path traversal and blocklist bypass attempts.

10. **#29181 - Add reliable file-only logger for interceptor validation** (size/l)
    - Implements new interceptor to enforce "Top-level Principle" from global GEMINI.md documentation.

## Feature Request Trends

1. **Configuration Management**: Most frequent pain point - settings.json parsing, browser agent configuration overrides, OAuth credential handling, and session protection.

2. **Security Hardening**: Focus on deterministic redaction, filesystem isolation, input validation, and prompt injection prevention across multiple areas.

3. **Enhanced Agent Control**: Better skill/sub-agent usage, destructive behavior prevention, subagent trajectory visibility, and AST-aware codebase mapping.

4. **Cross-Platform Compatibility**: Windows-specific fixes (NTFS paths, git validation), Wayland browser agent support, and path handling consistency.

## Developer Pain Points

1. **Configuration & Parsing**: Settings.json comment handling, browser agent ignoring overrides, OAuth login mapping issues, session deletion protection.

2. **Agent Reliability**: Subagent termination detection bugs, inconsistent skill usage, performance issues with large operations, and shell command hanging.

3. **Security Concerns**: File system access patterns, data redaction in Auto Memory, sandbox isolation, and input validation vulnerabilities.

4. **Performance Issues**: ReadManyFilesTool potential for massive file ingestion, 400 errors with many tools, and workspace state management.

5. **Cross-Platform**: Windows NT17-specific path issues, Wayland browser failures, and inconsistent path handling across platforms.

Community shows strong engagement on user experience issues (sycophantic responses) and critical productivity bugs (shell command hanging). Maintainers are actively addressing security concerns and configuration reliability.# Gemini CLI Community Digest - 2026-09-11

## Today's Highlights
Gemini CLI released v0.61.0-nightly.20260911.ged2ac40df, addressing critical shell command handling and JSON parsing bugs. Community discussions focus on reducing sycophantic responses for software architecture tasks and improving agent behavior.

## Releases
**v0.61.0-nightly.20260911.ged2ac40df** (Released: 2026-09-11)
- Full changelog: https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260910.ged2ac40df...v0.61.0-nightly.20260911.ged2ac40df

## Hot Issues

1. **#4556 - Make Gemini less of a sycophant** (27 comments, 39👍)
   - **Key Insight**: Users want professional, equal-toned responses for software design/architecting, not overly complimentary language
   - **Community Impact**: Highest engagement issue reflecting widespread frustration with current conversational style

2. **#25166 - Shell command execution gets stuck** (4 comments, 3👍)
   - **Critical Bug**: Completed shell commands hang indefinitely with "Awaiting user input" status
   - **Developer Impact**: Significant productivity blocker affecting workflow continuity

3. **#22323 - Subagent recovery after MAX_TURNS reported as GOAL success** (13 comments, 2👍)
   - **Technical Issue**: Codebase_investigator incorrectly reports success when hitting turn limits
   - **Quality Impact**: Misleads users about analysis completeness and effectiveness

4. **#21841 - Harden ReadManyFilesTool** (11 comments, 0👍)
   - **Security Risk**: Overly broad glob patterns could trigger massive file ingestion
   - **Performance Impact**: Lacks rate limiting and defensive guards against LLM-driven abuse

5. **#28206 - JSON.parse fails with comments in settings.json** (6 comments, 0👍)
   - **Configuration Bug**: Settings.json with comments cause CLI crashes
   - **User Experience**: Common in user configs but unsupported by parser

6. **#27043 - Pro limits not honored (200 vs 1,500 requests/day)** (5 comments, 1👍)
   - **Auth Issue**: Pro subscription users get restricted tier limits despite correct identification
   - **Business Impact**: Validation confirms real user reporting accuracy

7. **#22672 - Agent should stop/disc

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑09‑11**

---

### 1. Today’s Highlights
- The CLI shipped **v1.0.84‑4**, introducing `copilot instruction list` / `copilot lsp list` (replacing the plugin‑list sub‑commands), JSON output flags for several plugin commands, and explicit `enable`/`disable` sub‑commands for plugins.  
- Community discussion remains focused on **keyboard ergonomics** (vi/vim mode, Ctrl+Backspace), **clipboard/reliability issues** on Windows/WSL2/tmux, and **memory‑related crashes** (OOM/compaction loops) that affect long‑running sessions.

---

### 2. Releases
**v1.0.84‑4** (released within the last 24 h)  
- **Added** `copilot instruction list` and `copilot lsp list` – replacements for `copilot plugins list --kind instruction` and `--kind lsp`.  
- **Added** `--json` flag to `copilot plugin list`, `copilot plugin marketplace list`, and `copilot plugin marketplace browse` for machine‑readable output.  
- **Added** `enable` and `disable` sub‑commands under `copilot plugin` to toggle plugins without uninstalling.  
[Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.84-4)

---

### 3. Hot Issues (10 notable)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #13 | **Vi/vim input mode** (12 comments, 👍 76) | Long‑standing request for modal editing; would vastly improve power‑user efficiency. | Strong support; many users comment that the current line‑edit feels “clunky”. |
| #4742 | **Desktop app blocks second Local session** (11 comments, 👍 5) | After auto‑update to 1.1.15, creating a concurrent branch‑type session fails with “active Local workspace”. | Frustration among teams using parallel feature branches; workaround is to kill the first session. |
| #1285 | **Organization‑level Agents not visible** (9 comments, 👍 11) | Users expect agents defined in `{org}/.github-private` to appear in CLI/VS Code, but they do not. | Indicates a gap in the agent discovery path for enterprise admins. |
| #3260 | **Copy/paste broken in tmux over SSH to Windows Server 2025** (7 comments, 👍 1) | Regression after v1.0.47; clipboard fails when the CLI is run inside a tmux session via SSH. | Affects remote dev workflows; users report needing to exit tmux to copy/paste. |
| #3534 | **WSL2 (ARM64) `/copy` fails due to cmd.exe quoting** (6 comments, 👍 5) | `clip.exe` returns error 1 when invoked from the CLI’s Windows‑path wrapper on WSL2 ARM64. | Blocks basic clipboard usage for ARM64 WSL users; workaround involves manual `clip.exe` calls. |
| #2199 | **Add Ctrl+Backspace to delete whole word** (4 comments, 👍 7) | Standard editing shortcut missing; forces users to use multiple Backspaces. | Broad approval; many editors already support it, so parity is expected. |
| #4095 | **Windows plugin update fails with “Access is denied” while VS Code runs** (3 comments, 👍 21) | The Copilot extension holds file watchers on the plugin directory, preventing updates. | High impact for Windows developers who keep VS Code open; forces a restart or manual closure. |
| #4686 | **Node.js OOM crash after ~37 min – 31k leaked libuv handles** (3 comments, 👍 0) | Long‑running sessions exhaust the default ~4 GB heap, causing fatal allocation failures. | Raises concerns about stability for extended coding sessions; users request heap‑size tuning or leak fixes. |
| #4725 | **Frequent JavaScript heap out of memory** (3 comments, 👍 1) | Periodic V8 heap‑compacting logs show near‑OOM conditions, leading to crashes. | Mirrors #4686; indicates a broader memory‑pressure trend. |
| #4764 | **Assisted permissions mode stops working after ~1 hour** (3 comments, 👍 0) | `/permissions assisted` reverts to default behavior, requiring a session restart. | Interrupts workflows that rely on fine‑grained approval; users ask for a persistent mode or timeout configuration. |

*Links are of the form `github/copilot-cli#<issue-number>`.*

---

### 4. Key PR Progress (2 PRs updated in last 24 h)

| # | PR | Description |
|---|----|-------------|
| #4808 | **Pin GitHub Actions to commit SHAs** | Updates workflow files to reference immutable action SHAs instead of floating tags, improving reproducibility and security. |
| #4786 | **Revise notice regarding third‑party services** | Clarifies the wording around data sharing and Terms of Service for optional telemetry/integrations. |

*Links: `github/copilot-cli/pull/4808`, `github/copilot-cli/pull/4786`.*

---

### 5. Feature Request Trends
From the issue list, the most recurrent feature directions are:

1. **Modal keyboard support** – vi/vim input mode, word‑deletion shortcuts (Ctrl+Backspace), and broader Emacs/Vim‑style key bindings.  
2. **Clipboard reliability** – fixing copy/paste on Windows/WSL2, especially inside tmux or SSH sessions, and providing explicit `/copy`/ `/paste` commands that work across platforms.  
3. **Plugin management ergonomics** – JSON output for scripting, enable/disable toggles, and smoother update mechanisms that don’t clash with running editors.  
4. **Multi‑account / context switching** – easy authentication switching for users juggling personal/work GitHub accounts.  
5. **Enterprise agent visibility** – ensuring organization‑level agents appear in the CLI without extra configuration.  

These themes align with the high‑engagement issues (#13, #2199, #4095, #367, #1285).

---

### 6. Developer Pain Points
- **Memory / stability** – Frequent OOM crashes (`JavaScript heap out of memory`) and handle leaks make long sessions unreliable; users repeatedly hit the ~4 GB heap limit.  
- **Platform‑specific glitches** – Clipboard failures on WSL2/ARM64, Windows file‑locking during plugin updates, and tmux/SSH input problems create friction for cross‑platform developers.  
- **Session lifecycle** – Assisted permissions timing out, sessions wedging after queued‑lane messages, and stale lock files preventing session resume interrupt workflow continuity.  
- **Discovery & configuration** – Organization‑level agents and custom agent `target` frontmatter not being respected, plus missing model persistence (`settings.json` overwritten on exit).  
- **Automation reliability** – Scheduled workflows failing on non‑default branches and occasional MCP OAuth callback mismatches hinder CI/CD integration.  

Addressing these pain points would markedly improve the day‑to‑day experience for power users and enterprise adopters alike.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-11

## 1. Today's Highlights

No new releases or pull requests were reported in the last 24 hours. The main development concern is an authentication failure in CLI v0.42.0 where browser-based device login succeeds, but the CLI receives an HTTP 500 response before completing login ([Issue #2638](https://github.com/MoonshotAI/kimi-cli/issues/2638)). The same behavior has also been reproduced through the VS Code extension.

## 2. Releases

No new releases were reported in the last 24 hours.

## 3. Hot Issues

### [Issue #2638: `/login` device auth fails with HTTP 500 after successful browser approval](https://github.com/MoonshotAI/kimi-cli/issues/2638)

- **Status:** Open  
- **Environment:** Kimi CLI v0.42.0, macOS, free plan/Adagio tier  
- **Why it matters:** Users can approve authentication in the browser, but the CLI fails during the final device-auth callback. This prevents access to the service and suggests a backend or auth-state synchronization problem rather than a user-side approval issue.
- **Additional impact:** The failure was also reproduced in the VS Code extension, indicating that the problem may affect multiple client surfaces.
- **Community reaction:** 1 comment, 0 👍 reactions.

## 4. Key PR Progress

No pull requests were updated in the last 24 hours, so there are no PRs to summarize.

## 5. Feature Request Trends

The available issue data shows a clear priority around **authentication reliability**:

- Device-based login should complete successfully after browser approval.
- Authentication behavior should be consistent between the CLI and VS Code extension.
- Auth failures should provide clearer error messages instead of an unexplained HTTP 500.

## 6. Developer Pain Points

- **Login flow breaks after successful browser approval**, creating a confusing and time-consuming onboarding blocker.
- **Cross-client inconsistency risk:** the same issue affects both the standalone CLI and VS Code extension.
- **Opaque failure behavior:** an HTTP 500 after approval makes it difficult for developers to determine whether the problem is account, network, backend, or client-side.
- **Free-plan account impact:** the reported failure occurs for a free-plan user, suggesting the issue may affect broader accessibility rather than only paid tiers.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest - 2026-09-11

## Today's Highlights
The Pi project is actively addressing performance bottlenecks and cross-platform compatibility issues. Notable focus areas include fixing the O(n²) tool-call argument re-parsing that was freezing event loops, resolving Bedrock adapter issues where thinking levels weren't being sent to models, and improving Windows TUI rendering after a recent update. Extensions and session management continue to evolve with enhancements for system prompt appends and model change handling.

## Releases
None

## Hot Issues

**1. #9265 - O(n²) tool-call argument re-parsing freezes event loop** (5 comments)  
[arshad-kamal/pi #9265](https://github.com/earendil-works/pi/issues/9265)  
The streaming handler was re-parsing entire JSON tool-call arguments on every delta, creating quadratic performance costs. Critical for embedded environments hosting many agent sessions in single processes.

**2. #9052 - Fullscreen mode scroll wheel 3x slower than regular** (8 comments, 4👍)  
[yangfeng20/pi #9052](https://github.com/earendil-works/pi/issues/9052)  
Fullscreen mode's fixed input box caused poor scroll performance. Users needed it for persistent input but accepted the performance trade-off.

**3. #9331 - Bedrock: OpenAI reasoning effort never sent** (4 comments)  
[raimondlume/pi #9331](https://github.com/earendil-works/pi/issues/9331)  
Thinking level changes had no effect on OpenAI models through Bedrock adapters, unlike Claude models. A/B testing confirmed inconsistent behavior between gpt-5.6-sol and claude-fable-5.

**4. #9457 - Bedrock-converse 1h cache writes bill at 5m rate** (4 comments, 5👍)  
[jsanter27/pi #9457](https://github.com/earendil-works/pi/issues/9457)  
The bedrock-converse-stream implementation never set `cacheWrite1h` based on `cacheDetails`, causing 1-hour cache writes to be billed at the 5-minute rate. Generated detailed diagnostic tables.

**5. #8682 - Empty-body 400/413 misclassified as CONTEXT_WINDOW_EXCEEDED** (2 comments)  
[theeudaemonia/pi #8682](https://github.com/earendil-works/pi/issues/8682)  
DeepSeek Harness traced this bug to `isContextOverflow` misclassifying empty response bodies as context window exceeded, causing zero retry attempts and immediate session failure.

**6. #9460 - Bash tool has no default timeout** (1 comment)  
[stpu/pi #9460](https://github.com/earendil-works/pi/issues/9460)  
When commands spawn SIGTERM-ignoring descendants, even explicit `timeout N` wrapping fails because the direct child terminates but descendants linger, deadlocking the agent session indefinitely.

**7. #9462 - ctx.ui.notify is racy and API provides no alternative** (1 comment)  
[broadlywhitaker/pi #9462](https://github.com/earendil-works/pi/issues/9462)  
`ctx.ui.notify` uses last-wins semantics, making it unsuitable for multiple extensions wanting to present information simultaneously. Extension API lacks alternatives for non-competitive user notifications.

**8. #9464 - TUI regular mode renders every line doubled** (1 comment)  
[326037785/pi #9464](https://github.com/earendil-works/pi/issues/9464)  
Windows conhost rendering caused every line to appear doubled after the first repaint, affecting multiple terminals. Reproducible with clean settings and no extensions.

**9. #9463 - Restore from select session gets confused** (1 comment)  
[oscarryz/pi #9463](https://github.com/earendil-works/pi/issues/9463)  
Session restoration would incorrectly reference old directory when starting fresh in a new directory without previous sessions, causing confusion in the selection interface.

**10. #9458 - pi update --extensions cannot refresh git extension with abbreviated SHA** (1 comment)  
[gtnotacoder/pi #9458](https://github.com/earendil-works/pi/issues/9458)  
The update command fetches abbreviated commit SHAs but the git server rejects short-SHA fetches, causing failures for extensions pinned to abbreviated commit references.

## Key PR Progress

**1. #9301 - feat(coding-agent): confirm device-code browser and clipboard actions**  
[petrroll/pi #9301](https://github.com/earendil-works/pi/pull/9301)  
Addresses #9282 by automatically opening browser and copying code to clipboard when requested, without forcing these actions upon users, solving annoying re-login issues in corporate environments.

**2. #9461 - fix(ai): defer streamed tool argument parsing until read**  
[petrroll/pi #9461](https://github.com/earendil-works/pi/pull/9461)  
Fixes #9265 by stopping full JSON re-parsing on every delta. Moves parsing to per-access of `.arguments` with caching, eliminating O(n²) performance costs.

**3. #9459 - fix(coding-agent): prefer recorded model changes on resume**  
[petrroll/pi #9459](https://github.com/earendil-works/pi/pull/9459)  
Based on diagnosis from @pwguler, prefers last `model_change` over assistant message's model for rare cases without mode_change events, improving session resumption behavior.

**4. #9441 - fix(tui): prevent cursor marker leaks**  
[muyiyr/pi #9441](https://github.com/earendil-works/pi/pull/9441)  
Treats APC cursor markers as positional metadata instead of persistent styling, preventing `sliceWithWidth()` from replaying them into later selection slices and fixing display corruption.

**5. #9442 - fix(ai): allow prompt cache keys for compatible proxies**  
[dannote/pi #9442](https://github.com/earendil-works/pi/pull/9442)  
Enables `prompt_cache_key` for compatible OpenAI proxies when long retention is supported, addressing the limitation where only direct OpenAI URLs or long retention requests could send cache keys.

**6. #9434 - feat(coding-agent): allow extensions to append to session system prompt**  
[wutongyuonce/pi #9434](https://github.com/earendil-works/pi/pull/9434)  
Closes #9432 by allowing `session_start` handlers to return `systemPromptAppend` contributions, collected in extension/handler order with proper trimming and metadata preservation.

**7. #8612 - fix(coding-agent): clear delivered image-only queue entries**  
[wutongyuonce/pi #8612](https://github.com/earendil-works/pi/pull/8612)  
Fixes #8581 by removing delivered queue entries even when user messages have no text, keeping image-only steering and follow-up pending counts synchronized with the agent queue.

**8. #8743 - fix(coding-agent): ignore stale tool image conversions**  
[wutongyuonce/pi #8743](https://github.com/earendil-works/pi/pull/8743)  
Prevents rendering of outdated Kitty image conversions by tying cache entries to source images and ignoring conversions that complete after image changes.

**9. #9425 - feat(ai): add DeepSeek V4.1 Flash**  
[Julioevm/pi #9425](https://github.com/earendil-works/pi/pull/9425)  
Adds DeepSeek V4.1 Flash to the native DeepSeek catalog, exposing both official API ID (`deepseek-flash`) and models.dev ID (`deepseek-v4.1-flash`) with Flash thinking levels.

**10. #9416 - fix(coding-agent): accept dots and underscores in skill names**  
[kenje4090/pi #9416](https://github.com/earendil-works/pi/pull/9416)  
Extends skill name alphabet beyond Agent Skills standard to accept dots and underscores in both validation copies, enabling shared skill directories from other harnesses.

## Feature Request Trends

**Performance & Scalability**: Multiple issues (#9265, #9276, #9460) highlight developer concerns about tool performance, memory usage, and hanging processes. There's clear demand for default timeouts, memory management, and optimized parsing.

**Cross-Platform Consistency**: Windows-specific issues (#9464, #9361) reveal expectations for consistent behavior across operating systems, particularly in TUI rendering and extension loading.

**Enhanced Configuration**: Per-model settings (#8133), proxy compatibility (#9442), and extension integration points (#9434) indicate demand for more granular control and better integration capabilities.

**Session & State Management**: Issues around session restoration (#9463), model change persistence (#9459), and cache handling (#9457, #9210) suggest ongoing challenges with state management and consistency.

## Developer Pain Points

**Extension Integration Challenges**: Multiple issues (#8810, #9458, #9462) point to difficulties with extension registration, updates, and API limitations, particularly around session management and notification systems.

**Configuration & Debugging**: Issues with unrecognized `--mode` values (#9045) and non-deterministic shell resolution on Windows (#9361) reflect configuration complexity and debugging challenges.

**Performance Bottlenecks**: The O(n²) parsing issue (#9265), OOM problems with context lines (#9276), and indefinite bash tool hangs (#9460) represent significant performance pain points affecting developer productivity.

**Cache & Cost Management**: Problems with cache billing rates (#9457, #9210) and cache miss detection (#8463) indicate complexity in managing AI provider costs and expectations.

**UI Rendering Issues**: TUI cursor marker leaks (#9332, #9441), image overlay problems (#9438), and double-line rendering (#9464) suggest UI consistency challenges across different environments and interaction patterns.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑09‑11**  

---

### 1. Today’s Highlights  
- The stable release **v0.23.3** shipped, accompanied by a nightly build and the TypeScript SDK v0.1.12 (bundling CLI 0.23.3).  
- Desktop progress continues with **v0.3.0** and a preview build, while work advances on a lighter, Web‑Shell‑based desktop client.  
- A key DashScope fix (PR #11606) now restricts request‑metadata to Qwen‑family models, resolving 400 errors when using third‑party endpoints.

---

### 2. Releases  
| Version | Type | Notes |
|---------|------|-------|
| **v0.23.3** | Stable | Core release; includes reasoning preset expansions (Kimi/Qwen/DeepSeek). |
| **v0.23.3‑nightly.20260910.c46cb85cf2** | Nightly | Built from same ref as v0.23.3. |
| **SDK TypeScript v0.1.12** | SDK | Bundles CLI 0.23.3 (see also a duplicate note referencing CLI 0.23.2). |
| **desktop‑v0.3.0** | Desktop App | General availability release. |
| **desktop‑v0.3.0‑preview.0** | Desktop App | Prerelease; existing installations stay on 0.2.2 unless manually installed. |

*Links:*  
- v0.23.3: https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3  
- Nightly: https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260910.c46cb85cf2  
- SDK TS v0.1.12: https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.12  
- Desktop v0.3.0: https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.3.0  
- Desktop v0.3.0‑preview.0: https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.3.0-preview.0  

---

### 3. Hot Issues (selected by impact & comment count)  

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) | Deterministic tool‑execution boundaries for a trustworthy agent runtime | Proposes keeping the LLM outside the trust boundary and adding authorization/observability – a foundational security direction. | 18 comments, active discussion. |
| [#8182](https://github.com/QwenLM/qwen-code/issues/8182) | Daemon gives each ACP child 50 % host memory (no division) | Causes OOM when many workspaces run; critical for multi‑tenant daemon usage. | 7 comments. |
| [#8596](https://github.com/QwenLM/qwen-code/issues/8596) | Deprecate Electron desktop app, rename Tauri shell to `desktop` | Signals shift to a lower‑maintenance, safer desktop stack. | 6 comments. |
| [#8092](https://github.com/QwenLM/qwen-code/issues/8092) | Build a lower‑maintenance desktop app around Web Shell | Reuses existing Web Shell UI to reduce duplication; aligns with #8596. | 6 comments. |
| [#11386](https://github.com/QwenLM/qwen-code/issues/11386) | Scale daemon workspaces past 25 – decouple registration from live runtimes (LRU live set) | Addresses hard limit that blocks large‑scale deployments. | 5 comments, includes measurement update. |
| [#11574](https://github.com/QwenLM/qwen-code/issues/11574) | VS Code extension hides prior session history (sourceType filter) | Breaks continuity for users upgrading the extension; need to surface legacy transcripts. | 5 comments. |
| [#11489](https://github.com/QwenLM/qwen-code/issues/11489) | Extension update drops all conversation history (v0.21.x → v0.23.x) | Directly impacts user data migration; high‑priority pain point. | 5 comments. |
| [#11558](https://github.com/QwenLM/qwen-code/issues/11558) | Any opened file in VS Code automatically added to context | Forces unwanted context, cluttering the model’s view; UX regression. | 5 comments. |
| [#11590](https://github.com/QwenLM/qwen-code/issues/11590) | Metadata insertion breaks non‑Qwen models on DashScope endpoint | Causes 400 errors for models like ZHIPU/GLM‑5.3‑Flash; blocks multi‑model workflows. | 3 comments, urgent for integrators. |
| [#11511](https://github.com/QwenLM/qwen-code/issues/11511) | VS Code companion force‑closes superseded session on navigation | Discards in‑flight work when switching tabs; disrupts iterative coding flow. | 3 comments. |

---

### 4. Key PR Progress (selected by significance)  

| PR | Summary | Link |
|----|---------|------|
| **#11606** | `fix(dashscope): send request metadata only for qwen-family models` – stops injecting metadata for third‑party models, fixing #11590. | https://github.com/QwenLM/qwen-code/pull/11606 |
| **#11585** | `fix(core): release an exited web terminal's PTY resources at exit time` – prevents PTY leaks on Windows/WebTerminal. | https://github.com/QwenLM/qwen-code/pull/11585 |
| **#11602** | `fix(core): mark reattached image snapshots as potentially outdated` – changes prefix so old images aren’t treated as current UI state (addresses #11601). | https://github.com/QwenLM/qwen-code/pull/11602 |
| **#11567** | `fix(core): keep Responses reasoning replay data off foreign wires` – adds recognizer for OpenAI Responses replay payload to avoid cross‑provider misinterpretation. | https://github.com/QwenLM/qwen-code/pull/11567 |
| **#11562** | `fix(cli): keep one-shot system reminders out of the user's own message` – hides internal reminders from being echoed back to the user. | https://github.com/QwenLM/qwen-code/pull/11562 |
| **#11001** | `fix(test): wait for interactive PTY sessions to end during cleanup` – makes test harness robust against flaky PTY teardown. | https://github.com/QwenLM/qwen-code/pull/11001 |
| **#10906** | `feat(web-shell): show shell and monitor task output

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*