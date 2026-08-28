# AI CLI Tools Community Digest 2026-08-28

> Generated: 2026-08-28 08:01 UTC | Tools covered: 9

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
**Date**: 2026-08-28  

---

## 1. **Ecosystem Overview**

The AI CLI tools ecosystem in late August 2026 reflects a mature yet rapidly evolving landscape, characterized by continuous iteration, growing pains in platform support, and increasing demand for security and interoperability. Most tools have reached version 1.x or higher, with multiple daily releases and active community engagement. Cross-tool themes include TUI performance, MCP integration, session management, and model provider compatibility. However, disparities persist in Windows/macOS support, model behavior consistency, and infrastructure-level stability.

---

## 2. **Activity Comparison**

| Tool               | Open Issues | Closed Issues | Open PRs | Merged PRs | Latest Release Date | Recent Release Notes |
|--------------------|-------------|---------------|----------|------------|---------------------|----------------------|
| **Claude Code**    | 12          | 8             | 1        | 1          | 2026-08-28          | Bug fixes; `--restricted` mode added |
| **OpenAI Codex**   | 20          | 5             | 0        | 10         | 2026-08-27          | Alpha Rust builds pushed |
| **GitHub Copilot CLI** | 15      | 1             | 0        | 0          | 2026-08-27          | v1.0.81 released with plugins dashboard |
| **Kimi CLI**       | 4           | 2             | 3        | 2          | 2026-08-28          | Security patches, bug fixes |
| **OpenCode**       | 7           | 0             | 0        | 0          | N/A                 | No recent updates |
| **Pi**             | 8           | 2             | 0        | 10         | No new release      | Focus on TUI correctness |
| **Qwen Code**      | 15          | 6             | 5        | 8          | 2026-08-28          | OpenTUI migration ongoing |
| **DeepSeek TUI**   | 10          | 1             | 10       | 8          | No new release      | Performance optimizations in progress |

---

## 3. **Shared Feature Directions**

Several feature requests and pain points appear across multiple tools, often converging around core usability and infrastructure concerns:

### ✅ **Session Resumability & Continuity**
- **Affected Tools:** Claude Code (#86014), OpenAI Codex (#39823), DeepSeek TUI (#5249), Qwen Code (#10356)
- **Need:** Reliable session state transfer and recovery across restarts, crashes, and tool switches
- **Impact:** Critical for long-running agent tasks and production workflows

### ✅ **TUI Performance & Rendering Correctness**
- **Affected Tools:** Pi (#8584), DeepSeek TUI (#5249), Qwen Code (#8662)
- **Need:** Reduce token overhead, eliminate one-word-per-line rendering issues, and optimize startup latency
- **Impact:** Directly affects developer productivity in terminal environments

### ✅ **MCP Integration Improvements**
- **Affected Tools:** Copilot CLI (#4647), Pi (#8610), DeepSeek TUI (#5579), Qwen Code (#3718)
- **Need:** Better plugin discovery, bootstrapping visibility, error recovery UX, and compatibility
- **Impact:** Enables modular tooling and extensible plugin ecosystems

### ✅ **Provider Neutrality & Cross-Compatibility**
- **Affected Tools:** DeepSeek TUI (#5588), Pi (#8771), Copilot CLI (#4646), Qwen Code (#10227)
- **Need:** Remove vendor lock-in assumptions in tool schemas, streaming formats, and auth flows
- **Impact:** Facilitates multi-model switching and local/self-hosted deployment

### ✅ **Security and Restricted Modes**
- **Affected Tools:** Claude Code (#42776), Copilot CLI (implicit need), general trend toward sandboxing
- **Need:** Safer execution contexts, privilege separation, safe collaboration settings
- **Impact:** Increasingly important for enterprise use and compliance

---

## 4. **Differentiation Analysis**

| Dimension          | High-Feature Tools                  | Focused/Niche Tools                     |
|--------------------|-------------------------------------|-----------------------------------------|
| **Target Users**   | Teams, developers, integrators     | Individual developers, hobbyists        |
| **Key Strength**   | Rich integrations, rich UI, cloud-native | Lightweight, personal productivity     |
| **Technical Approach** | Full-stack apps with TUI + daemon + IDE hooks | Terminal-first, minimal abstraction      |
| **Examples**       | GitHub Copilot CLI, Qwen Code       | DeepSeek TUI, OpenCode                  |
| **Extensibility**  | Formal plugin systems, MCP support  | Emergent plugin models, manual config   |
| **Model Support**  | Broad provider matrix               | Often tied to specific vendor backends  |

---

## 5. **Community Momentum & Maturity**

### 🚀 **Rapidly Iterating Tools**
- **Claude Code**: Extremely high issue volume, intense user feedback loop, frequent patch releases (daily cadence). Maturity hindered slightly by regressions.
- **Qwen Code**: Heavy architectural refactoring underway (OpenTUI migration, core type decoupling). Fast-moving but mid-transition.
- **DeepSeek TUI**: Strong focus on performance tuning and modularity; many parallel PRs targeting foundational debt.

### ⏳ **Steady-State Mature Tools**
- **GitHub Copilot CLI**: Stable version 1.x, strong ecosystem ties. Some notable regressions post-feature release.
- **Pi**: Low-frequency releases but consistent PR merges focusing on polish and ergonomics.
- **OpenAI Codex**: Active alpha channels (Rust), but desktop app suffers from platform-specific instability.

### 🧭 **Early or Stabilizing Tools**
- **Kimi CLI**: Fewer issues overall, good security posture, but fewer visible enhancements beyond critical fixes.
- **OpenCode**: Apparent lack of recent activity raises maturity questions.

---

## 6. **Trend Signals for Developers**

### 🔍 **Industry Trends**
1. **TUI Optimization Is a Competitive Advantage**  
   Expect continued investment in reducing render overhead, improving accessibility, and enabling fast boot times for CLI-first AI agents.

2. **Security-Conscious Execution Will Be Mandatory**  
   Tools offering restricted modes or granular permission controls will gain traction in regulated environments and shared machines.

3. **MCP as Universal Plugin Layer Matures**  
   Tools that abstract plugin discovery, lifecycle logging, and recovery UX will reduce friction for extension authors.

4. **Multi-Provider Flexibility Is a Must-Have**  
   Vendor-neutral designs, especially around streaming protocols and tool schemas, are becoming de facto standards.

5. **Developer Experience Over Novelty Wins in the Long Run**  
   Bugs like session loss, silent timeouts, and keyboard mismatches consistently dominate over flashy features in community sentiment.

---

### 🧰 **Implications for Adoption Decisions**
| Priority              | Recommended Tools                        |
|-----------------------|------------------------------------------|
| Enterprise Safety     | Claude Code (restricted mode), Qwen Code (migration ready) |
| Rapid Experimentation | DeepSeek TUI, Pi                         |
| Team Integration      | GitHub Copilot CLI                       |
| Multi-Model Control   | OpenAI Codex (alpha Rust), Qwen Code     |
| Local/Self-Hosted     | DeepSeek TUI, Pi                         |

---

**Conclusion**:  
While the AI CLI ecosystem is highly active and feature-rich, signs of coordination gaps and platform fragility persist. For developers choosing among these tools, prioritize those with robust session management, clear security boundaries, and transparent MCP/plugin workflows. Those seeking bleeding-edge features should weigh carefully against stabilization risks.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data Source:** github.com/anthropics/skills | **As of:** 2026-08-28

---

## 1. Top Skills Ranking

The following Skills (PRs) have generated the most community discussion and engagement:

| # | PR | Title | Author | Status | Key Functionality |
|---|-----|-------|--------|--------|-------------------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | fix(skill-creator): run_eval.py always reports 0% recall | MartinCajiao | OPEN | Critical bug fix addressing evaluation pipeline where skill description optimization was broken due to 0% trigger rate; also fixes Windows stream reading and parallel workers |
| 2 | [#1628](https://github.com/anthropics/skills/pull/1628) | Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill | Hanishchow | OPEN | Enables Claude Code to delegate mechanical work to headless opencode workers running free models while maintaining single planner/reviewer/merger architecture |
| 3 | [#1615](https://github.com/anthropics/skills/pull/1615) | Add scnet-hpc skill | lql341 | OPEN | Profile-based SSH and Slurm workflow management for SCNet HPC clusters including job generation, module handling, and accelerator guidance |
| 4 | [#1367](https://github.com/anthropics/skills/pull/1367) | feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate | YuhaoLin2005 | OPEN | Pre-delivery audit skill combining mechanical file verification with damage-severity-prioritized reasoning review; works with any project or tech stack |
| 5 | [#723](https://github.com/anthropics/skills/pull/723) | feat: add testing-patterns skill | 4444J99 | OPEN | Comprehensive testing stack coverage including Testing Trophy philosophy, unit testing (AAA pattern), React component testing with Testing Library, and E2E patterns |
| 6 | [#568](https://github.com/anthropics/skills/pull/568) | feat: add ServiceNow platform skill | Vanka07 | OPEN | Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, and IntegrationHub |
| 7 | [#514](https://github.com/anthropics/skills/pull/514) | Add document-typography skill | PGTBoos | OPEN | Typographic quality control preventing orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents |

**Notable Observation:** All top-ranked PRs remain **OPEN**, indicating active review cycles rather than rapid merges. The community shows high engagement on evaluation tooling (run_eval.py fixes appear in multiple PRs) and domain-specific skills.

---

## 2. Community Demand Trends

Analysis of Issues reveals five dominant demand vectors:

| Trend | Issue(s) | Demand Signal |
|-------|----------|---------------|
| **Trust & Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments) | Community skills impersonating official `anthropic/` namespace; demands clear trust boundary demarcation |
| **Enterprise Collaboration** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments) | Org-wide skill sharing via direct links or shared library—no manual download/upload workflow |
| **Evaluation & Quality Assurance** | [#556](https://github.com/anthropics/skills/issues/556), [#1390](https://github.com/anthropics/skills/issues/1390) | Consistent reports that evaluation scripts fail silently; demand for reliable skill quality metrics |
| **Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) | Proposal for agent-governance skill covering policy enforcement, threat detection, and audit trails |
| **MCP Integration** | [#16](https://github.com/anthropics/skills/issues/16) | Expose Skills as MCPs for standardized API signaling across AI software ecosystems |

**Emerging Pattern:** The community is maturing beyond "skill creation" toward "skill governance"—quality gates, security boundaries, and organizational deployment workflows are now primary concerns.

---

## 3. High-Potential Pending Skills

These PRs have active development momentum and are candidates for near-term merge:

| PR | Skill | Highlights | Readiness |
|----|-------|------------|-----------|
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | Multi-agent orchestration via headless workers; cost optimization focus | Strong value proposition; recent (Aug 21) |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Two-phase quality gate (mechanical + reasoning); universal applicability | Well-structured; includes damage-severity prioritization |
| [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow** | Covers 8+ ServiceNow modules (ITSM, ITOM, ITAM, FSM, HRSD, CSM, SPM, SecOps) | Comprehensive scope; 5-month review period suggests thorough vetting |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Full testing stack from philosophy to E2E; Testing Trophy model | Addresses documented gap in testing guidance |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | HPC cluster operations with SSH/Slurm integration | Recent submission; specialized domain coverage |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | Retro game development via Pyxel MCP server | Niche but well-scoped; targets Python game devs |

**Caveat:** Multiple critical infrastructure PRs ([#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) address the same root issue (run_eval.py Windows failures)—consolidation or conflict resolution may be needed before individual merges.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust evaluation tooling and quality assurance primitives that ensure Skills perform reliably across platforms—skills development has outpaced the infrastructure needed to validate them.**

---

*Report generated from GitHub repository activity metrics. All URLs reference github.com/anthropics/skills.*

---

# Claude Code Community Digest — 2026-08-28

---

## 1. Today's Highlights

- **Two releases in 24h**: v2.1.250 (bug fixes) and v2.1.248 introducing a major security feature — `--restricted` mode that strips command-execution tools, confines file operations to the working directory, and ignores user/project settings.
- **Model quality regression dominates discussion**: Issue #77136 (395 👍) reports Claude 4.7–5.0/Fable increasingly defaulting to repetitive rhetorical tics and struggling with coherent prose despite explicit style instructions.
- **Windows Desktop stability crisis**: Orphaned process file locks prevent relaunch (#42776, 141 comments, 70 👍) and isolation-worktree resume failures (#85234) point to systemic platform issues.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v2.1.250** | Bug fixes and reliability improvements. |
| **v2.1.248** | **New `--restricted` flag** (`CLAUDE_CODE_RESTRICTED=1`): removes built-in tools that run commands/code and `WebFetch` (unless explicitly allowed via `--tools`), keeps file tools inside working directory, refuses `bypassPermissions`, ignores user/project/local settings files. |

---

## 3. Hot Issues (Top 10 by Impact & Community Reaction)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#77136](https://github.com/anthropics/claude-code/issues/77136) | **Model regression: repetitive tics & incoherent prose** (Claude 4.7–5.0, Fable) | Affects all users; explicit style instructions ignored; measurable quality drop. | **395 👍, 110 comments** — highest engagement; developers report unusable output for writing tasks. |
| [#42776](https://github.com/anthropics/claude-code/issues/42776) | **Windows Desktop fails to relaunch** (orphaned process file lock) | Blocks Windows users entirely; requires manual process cleanup. | **70 👍, 141 comments** — persistent since April; workarounds fragile. |
| [#83510](https://github.com/anthropics/claude-code/issues/83510) | **Measurable Gen 5 regression**: worse nonsense detection, 2× verbosity, undisclosed fallback (Fable 5 → Opus 4.8) | Quantitative evidence of quality decline; silent model fallback erodes trust. | **18 👍, 12 comments** — detailed benchmarks provided; demands transparency. |
| [#90002](https://github.com/anthropics/claude-code/issues/90002) | **Code tab writes UI metadata into transcript JSONL** → unrecoverable API 400 | Corrupts conversation history; recurs after sanitization; breaks session continuity. | **11 comments, new (Aug 27)** — critical data integrity bug. |
| [#86014](https://github.com/anthropics/claude-code/issues/86014) | **Cross-session `send_message` reports success but never delivers** (Windows) | Breaks agent orchestration; false success masks silent failure. | **4 👍, 17 comments** — core multi-agent workflow blocked. |
| [#32362](https://github.com/anthropics/claude-code/issues/32362) | **Zed IDE integration support** | Zed adoption growing; no official extension; `/ide` shows "No available IDEs". | **52 👍, 19 comments** — top feature request for IDE support. |
| [#84625](https://github.com/anthropics/claude-code/issues/84625) | **Background Bash tasks killed silently** (no OOM, no user action, no error) | Long-running CI/monitoring tasks die without trace; only `setsid`-detached survive. | **4 comments** — reliability blocker for automation. |
| [#73338](https://github.com/anthropics/claude-code/issues/73338) | **Desktop: files outside working directory no longer open inline** (regression) | Breaks workflow for config/memory files; "Show in Finder" fallback is cumbersome. | **6 👍, 4 comments** — cross-platform regression. |
| [#81874](https://github.com/anthropics/claude-code/issues/81874) | **Cowork VM service tears down on idle; slow cold-boot; DACL blocks mitigation** | Windows Desktop becomes unresponsive after idle; recovery takes minutes. | **4 comments** — architectural issue in Hyper-V VM management. |
| [#84125](https://github.com/anthropics/claude-code/issues/84125) | **LSP tool pruned from all subagents in interactive sessions** | Subagents lose code navigation; parent retains LSP — inconsistent tool availability. | **4 👍, 2 comments** — breaks agent delegation for code tasks. |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#69226](https://github.com/anthropics/claude-code/pull/69226) | Closed | **frontend-design skill v1.1.0** — improvements to the skill; bumps plugin version for auto-update. |

> Only 1 PR updated in the last 24h. The repository shows low external PR velocity; most changes appear internal.

---

## 5. Feature Request Trends

| Trend | Evidence | Priority Signal |
|-------|----------|-----------------|
| **IDE expansion beyond VS Code/JetBrains** | #32362 (Zed, 52 👍); #77523 (VS Code session content search) | High — developers use diverse editors; Zed rising. |
| **Session/link portability** | #90290 ("Copy link to session" → `claude://` deep link) | Medium — workflow continuity across devices/apps. |
| **Skill system maturity** | #90071 (model should use installed skills vs. ad-hoc scripts); #69226 (skill updates) | Medium — skills exist but model doesn't leverage them reliably. |
| **Restricted/secure modes** | v2.1.248 `--restricted` flag shipped; #90059 (`disallowedTools` schema trimming) | High — security/compliance demand driving tooling. |
| **Cross-session/message reliability** | #86014, #85888 (approval UI missing for background recipients) | High — multi-agent workflows are fragile. |

---

## 6. Developer Pain Points

| Pain Point | Frequency / Severity | Representative Issues |
|------------|----------------------|------------------------|
| **Windows Desktop instability** | Critical — multiple high-engagement issues | #42776 (relaunch lock), #51847 (file in use post-update), #85234 (worktree resume), #81874 (VM teardown), #89628 (slash autocomplete regression) |
| **Model output quality decline** | Critical — highest 👍 count | #77136 (rhetorical tics), #83510 (verbosity, silent fallback), #89690 (opusplan picker bug) |
| **Silent failures / missing observability** | High — background tasks, cross-session messages, hooks | #84625 (Bash killed silently), #86014 (send_message lies), #83801 (hook matcher never evaluated), #90292 (hook validation broken) |
| **Transcript / data corruption** | High — breaks session recovery | #90002 (UI metadata in JSONL → API 400), #85856 (backslash mangling in Git Bash) |
| **Subagent tool inconsistency** | Medium — LSP missing, tool sets differ from parent | #84125 (LSP pruned), #80093 (daemon unreachable) |
| **macOS/Linux tooling gaps** | Medium — `timeout` missing (#90291), terminal title regression (#88542) | Platform parity not achieved. |

---

*Generated from GitHub data (anthropics/claude-code) for 2026-08-28. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest - 2026-08-28

## Today's Highlights
OpenAI Codex is actively shipping Rust alpha releases while addressing critical authentication and Windows stability issues. The community is grappling with macOS auth loops affecting production builds and a pattern of Windows desktop app headlessness that persists across multiple versions.

## Releases
**New Rust Alpha Versions (codex-rs):** Three alpha releases pushed to the repository:
- `rust-v0.151.0-alpha.8` - Latest alpha release
- `rust-v0.151.0-alpha.7` 
- `rust-v0.151.0-alpha.6`

These incremental updates suggest active Rust backend development for the Codex platform.

## Hot Issues

1. **[Bug][Auth][App] macOS Auth Loop** (#39162, 66 comments) - macOS users report ChatGPT auth invalidation when opening existing conversations, affecting version 26.814.41407 and newer. Users note rollback to 26.810.52044 resolves the issue, indicating a regression in recent desktop builds.
   *[GitHub Link](https://github.com/openai/codex/issues/39162)*

2. **[Bug][CLI][Tool-calls] Shell Command Execution Failures** (#32759, 16 comments) - GPT-5.6 Sol model reports "code-mode host exited during handshake" errors preventing shell command execution. This critical workflow disruption affects macOS users specifically.
   *[GitHub Link](https://github.com/openai/codex/issues/32759)*

3. **[Bug][Windows][App] Desktop Headless After CLI Workaround** (#41059, 14 comments) - Windows Codex Desktop becomes unresponsive after using external CLI workaround, indicating potential conflicts between bundled and standalone CLI environments.
   *[GitHub Link](https://github.com/openai/codex/issues/41059)*

4. **[Bug][Windows][App] Usage Limit Consumption** (#40880, 5 comments) - Windows users report Codex 5-hour usage limits being consumed significantly faster since reintroduction, suggesting enforcement inconsistencies.
   *[GitHub Link](https://github.com/openai/codex/issues/40880)*

5. **[Bug][Windows][App] Config.toml MCP Paths Stale** (#26011, 11 comments) - Auto-updates on Windows leave old bin directory paths in config.toml, causing node_repl MCP server startup failures with OS error 3.
   *[GitHub Link](https://github.com/openai/codex/issues/26011)*

6. **[Bug][Windows][App] GUI Rendering Issues** (#40878, 5 comments) - Windows desktop app shows blank client area, with --disable-direct-composition flag restoring proper rendering - indicating DirectX/compositing conflicts.
   *[GitHub Link](https://github.com/openai/codex/issues/40878)*

7. **[Bug][CLI][TUI] Session Resume Failures** (#39823, 8 comments) - Codex CLI/TUI sessions fail to resume with "already has an active writer" errors after approval-mode use or session switching, breaking session continuity.
   *[GitHub Link](https://github.com/openai/codex/issues/39823)*

8. **[Bug][Windows][App] Paginated Thread History Stalls** (#41079, 6 comments) - Windows Codex Desktop exhibits local history-projection stalls showing older snapshots despite complete transcript data in canonical storage.
   *[GitHub Link](https://github.com/openai/codex/issues/41079)*

9. **[Bug][Windows][App] Lovable MCP OAuth Discovery** (#41288, 2 comments) - Codex Desktop/CLI cannot authenticate to Lovable's Streamable HTTP MCP server due to missing protected resource field in OAuth discovery.
   *[GitHub Link](https://github.com/openai/codex/issues/41288)*

10. **[Bug][Windows][App] Computer Use Plugin Missing** (#41281, 2 comments) - Windows desktop app lacks the official OpenAI Computer Use plugin in plugin directory, preventing computer interaction capabilities.
    *[GitHub Link](https://github.com/openai/codex/issues/41281)*

## Key PR Progress

1. **[PR #41292] Closed** - Forward history note images to the model: Convert history backend images into input_image function-call outputs while keeping image data out of logged output.
   *[GitHub Link](https://github.com/openai/codex/pull/41292)*

2. **[PR #41285] Closed** - Drive keymap conflict checks from the action registry: Build per-context conflict checks from shared runtime action registry instead of maintaining separate action lists.
   *[GitHub Link](https://github.com/openai/codex/pull/41285)*

3. **[PR #41260] Closed** - Let the history backend enforce tool output budgets: Return encrypted history results respecting output budgets before encryption, eliminating client-side double-limiting.
   *[GitHub Link](https://github.com/openai/codex/pull/41260)*

4. **[PR #41250] Closed** - Include thread source in realtime connection metadata: Add thread_source to x-codex-turn-metadata when starting realtime WebSocket connections for consistent voice call identification.
   *[GitHub Link](https://github.com/openai/codex/pull/41250)*

5. **[PR #41243] Closed** - Add configurable gating for the sleep tool: Introduce stable sleep_tool feature with model_driven and always_on modes, supporting structured features.sleep_tool configuration.
   *[GitHub Link](https://github.com/openai/codex/pull/41243)*

6. **[PR #41239] Closed** - Surface model provider authentication recovery progress: Emit turn-scoped authentication recovery started/completed events when model providers refresh expired credentials.
   *[GitHub Link](https://github.com/openai/codex/pull/41239)*

7. **[PR #41235] Closed** - Sanitize history notes backend errors: Return consistent "Unable to perform operation:" messages for various failure types while excluding underlying error details from user-facing messages.
   *[GitHub Link](https://github.com/openai/codex/pull/41235)*

8. **[PR #41232] Closed** - Expose the PowerShell version in environment context: Add powershell_shell_version feature flag and include shell version in environment_context when enabled.
   *[GitHub Link](https://github.com/openai/codex/pull/41232)*

9. **[PR #41231] Closed** - Instrument the loaded plugin cache: Count cache requests by hit/load outcomes, record wait/loading times, and remove unused force-reload path from plugin loading.
   *[GitHub Link](https://github.com/openai/codex/pull/41231)*

10. **[PR #41227] Closed** - Use compatible PowerShell for elevated Windows sandbox commands: Select compatible PowerShell executables for Store PowerShell scenarios inaccessible to dedicated elevated sandbox accounts.
    *[GitHub Link](https://github.com/openai/codex/pull/41227)*

## Feature Request Trends

**Tool Catalog Transparency:** Multiple requests for surfacing offered tools and skills catalog in `--json` event streams and app-server streams, indicating demand for better tooling visibility.

**Context Management:** Feature requests around Guardian review session improvements, transcript boundary preservation, and context rollover demonstrate focus on long-running session management.

**Cross-Platform Reliability:** Significant volume of Windows-specific issues suggests need for more robust Windows support across GUI rendering, sandbox setup, and MCP server integration.

**Authentication & OAuth Improvements:** Multiple auth-related bugs (macOS loops, Lovable OAuth failures) highlight the need for more robust OAuth discovery and recovery mechanisms.

**Session Persistence:** Recurring session resume and state management issues indicate demand for more reliable session handling across CLI, TUI, and desktop app interfaces.

## Developer Pain Points

**Authentication Instability:** macOS users report auth loops and sign-in redirects that persist across multiple desktop app versions, with rollbacks being the only workaround.

**Windows-Specific Bugs:** A disproportionate number of Windows issues including headless app states, GUI rendering failures, sandbox setup problems, and configuration path issues.

**Tool Execution Failures:** Shell command execution and MCP server startup problems (node_repl, Lovable OAuth) are recurring technical blockers affecting core functionality.

**Session Continuity:** CLI/TUI session resumption failures and context projection stalls are breaking workflows and requiring manual interventions.

**Configuration Management:** Stale config.toml paths after auto-updates and inconsistent behavior between bundled CLI and desktop app suggest configuration synchronization challenges.

**Performance & Limits:** Users report usage limits being consumed faster than expected and rate limiting inconsistencies affecting productivity.

**Plugin Management:** Missing official plugins (Computer Use) and plugin directory issues indicate packaging and distribution problems.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-28

### 1. Today's Highlights
The Copilot CLI released v1.0.81 yesterday, introducing a unified plugins dashboard and OpenTelemetry support for hooks, but the update is already causing significant regressions. The community is actively reporting `store_memory` failures, broken MCP server compatibility (notably chroma-mcp), and severe TUI freezing caused by runaway event loops. Meanwhile, the v1.0.82-0 prerelease has rolled out to address some of these instabilities.

### 2. Releases
*   **v1.0.81** (2026-08-27): Shipped the plugins dashboard (accessible via `/plugin`, `/mcp`, or `/skills`), added MCP 2026-07-28 protocol support across CLI, SDK, IDE, and in-memory clients, and enabled hooks to receive the current OpenTelemetry context.
*   **v1.0.82-0** (Prerelease): General fixes and changes; specific patch notes were not provided in the release data.

### 3. Hot Issues
*   [#4535](https://github.com/github/copilot-cli/issues/4535) — `store_memory` fails in v1.0.81 prereleases due to a missing instance ID. **Why it matters:** A critical regression breaking core memory functionality; 7 comments.
*   [#4612](https://github.com/github/copilot-cli/issues/4612) — Runaway FileWatch host-event loop freezes TUI and bloats debug logs to 13 GB. **Why it matters:** Severe stability bug rendering the CLI unusable during long sessions; 6 comments, 1 👍.
*   [#3760](https://github.com/github/copilot-cli/issues/3760) — `ctrl+enter` adds a line break instead of enqueuing the prompt. **Why it matters:** High community frustration (12 👍) regarding conflicting Windows keyboard shortcuts.
*   [#4647](https://github.com/github/copilot-cli/issues/4647) — v1.0.81 broke compatibility with chroma-mcp. **Why it matters:** Major regression breaking popular vector database integrations; 1 comment.
*   [#4602](https://github.com/github/copilot-cli/issues/4602) — `store_memory` fails for entire sessions and MCP servers are stripped due to `managedSettings` failing closed. **Why it matters:** Uncovers a shared root cause with #4535 with broader, session-wide impact; 1 comment.
*   [#4639](https://github.com/github/copilot-cli/issues/4639) — Event-storage exhaustion drives long-running sessions into a GC/compaction loop and Node OOM. **Why it matters:** Critical memory leak causing crashes in persistent workflows; 1 comment.
*   [#4629](https://github.com/github/copilot-cli/issues/4629) — Plugin hooks are not loaded when a session is resumed via `--resume`. **Why it matters:** Disrupts plugin-based automation and workflow extensions; 1 comment.
*   [#4646](https://github.com/github/copilot-cli/issues/4646) — Compaction fails with "Tool choice must be auto" on custom models. **Why it matters:** Blocks context management for users utilizing custom OpenRouter models; 0 comments.
*   [#4638](https://github.com/github/copilot-cli/issues/4638) — Model context is overstated by deriving it from prompt/output token limits. **Why it matters:** Misleading diagnostics introduced in v1.0.81; 0 comments.
*   [#4642](https://github.com/github/copilot-cli/issues/4642) — `--name` should create or resume a session. **Why it matters:** High-request automation feature to simplify session management; 0 comments.

### 4. Key PR Progress
No open Pull Requests were updated in the last 24 hours.

### 5. Feature Request Trends
*   **MCP & Plugin Extensibility:** Developers are requesting support for local executables as MCP server package types (#4634) and improved handling of server-managed plugin marketplaces (#4556). 
*   **Session Lifecycle & Persistence:** There is a strong demand for smarter session resumption (e.g., `--name` acting as create-or-resume #4642), persisting model parameters across resumes (#4645), and making AI reviews (rubber duck) auditable post-session (#4621).
*   **Configuration & Developer Experience:** Requests include publishing an official JSON Schema for `settings.json` (#4641) and adding persistent auto-allow permissions to reduce session friction (#3877).

### 6. Developer Pain Points
*   **MCP Integration Fragility:** Ongoing issues plague MCP users, including Windows `npx` spawn failures (#3576), the CLI ignoring explicit commands and rewriting Python MCP servers to `pipx` (#1385), shell argument templating corrupting nested variables (#4239), and startup reconciliation stripping `--additional-mcp-config` servers (#4636).
*   **Performance & Stability:** Long-running sessions are highly susceptible to event-loop freezes (#4612), memory exhaustion, and Node.js out-of-memory crashes (#4639), alongside persistent macOS malloc warnings (#4614).
*   **Input & UI Conflicts:** Keyboard shortcuts remain inconsistent on Windows, with `ctrl+enter` inserting newlines instead of enqueuing (#3760). Additionally, mid-session UI rendering bugs, such as the input field background turning black (#4648), degrade the terminal experience.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

---

**Today's Highlights**  
- Critical Plan mode bug in v0.38.0 (Issue #2623) causes infinite loops during agent execution.  
- Security patches for asyncssh (PR #2622) address known vulnerabilities.  
- API usability friction persists with empty `content` fields in tool responses (Issue #2621).  

---

**Releases**  
No new releases in the last 24 hours.  

---

**Hot Issues**  
1. **#2623** [OPEN] Plan mode infinite loop in kimi-code 0.38.0  
   - Agent stuck in `Bash echo` / `ReadFile` cycles instead of writing plans.  
   - Affects core workflow reliability; developer reports critical impact.  
   - [GitHub Link](https://github.com/MoonshotAI/kimi-cli/issues/2623)  

2. **#2621** [OPEN] Kimi API returns empty `content` in tool calls  
   - User friction in re-submitting API payloads; workaround required for validity.  
   - Highlighted via `kimi-cli` compatibility update.  
   - [GitHub Link](https://github.com/MoonshotAI/kimi-cli/issues/2621)  

3. **#1211** [CLOSED] Notion MCP credentials not persisted  
   - Session-only storage for Notion integrations breaks multi-session workflows.  
   - Reported on macOS; 3 comments, unresolved persistence concerns.  
   - [GitHub Link](https://github.com/MoonshotAI/kimi-cli/issues/1211)  

4. **#1272** [CLOSED] JetBrains plugin fails to recognize uploaded files  
   - ACP integration requires absolute paths for file processing (vs. auto-recognition).  
   - Impacts UX for IDE users relying on contextual file handling.  
   - [GitHub Link](https://github.com/MoonshotAI/kimi-cli/issues/1272)  

5. **#2624** [OPEN] Documentation for OpenAI legacy `/v1` compatibility  
   - Confusion around `type: openai_legacy` vs. other configurations.  
   - Zero comments but addresses onboarding simplicity.  
   - [GitHub Link](https://github.com/MoonshotAI/kimi-cli/issues/2624)  

6. **#2595** Fixed in PR #2595 (merged)  
   - Prevents invalid UTF-8 file edits via `StrReplaceFile` error handling.  
   - Prevents silent corruption of binary/non-UTF-8 files.  

7. **#2176** Merged (PR #2176)  
   - `UserPromptSubmit` hook now extracts text from `ContentPart` lists.  
   - Resolves regex matching failures for structured inputs.  

8. **#2622** Critical security bump (`asyncssh`)  
   - Addresses OSV-identified vulnerabilities (GHSA-2wxc-x7rj-hg8f).  
   - Zero open issues but underpins secure remote connections.  

9. **#1279** [CLOSED] Feature request for git-ai integration  
   - Proposed native AI code attribution via `git blame` (vendor-agnostic standard).  
   - Zero comments but seeks alignment with industry norms.  

10. **#2621** Direct API UX friction (duplicate coverage due to relevance).  

---

**Key PR Progress**  
1. **#2622** [OPEN] `asyncssh` 2.23.1 security update  
   - Resolves high-severity CVEs; essential for dependencies.  
   - [GitHub Link](https://github.com/MoonshotAI/kimi-cli/pull/2622)  

2. **#2176** [OPEN] Fix for `UserPromptSubmit` ContentPart handling  
   - Prevents regex matching failures in hooks.  
   - [GitHub Link](https://github.com/MoonshotAI/kimi-cli/pull/2176)  

3. **#2595** [OPEN] `StrReplaceFile` UTF-8 validation  
   - Blocks silent corruption of non-UTF-8 files.  
   - [GitHub Link](https://github.com/MoonshotAI/kimi-cli/pull/2595)  

---

**Feature Request Trends**  
1. **Git-AI Integration**  
   - Native support for tracking AI-generated code (Issue #1279).  
2. **JetBrains Plugin Improvements**  
   - File recognition improvements (Issue #1272).  
3. **Persistent Auth States**  
   - Session storage for third-party integrations (Issue #1211).  
4. **IDE Workflow Optimization**  
   - Pathless file handling in ACP integrations (Issue #1272).  

---

**Developer Pain Points**  
1. **Plan Mode Reliability**  
   - Infinite loops in Core Agent execution (Issue #2623).  
2. **API Edge Cases**  
   - Empty `content` fields in tool responses break integrations (Issue #2621).  
3. **IDE Plugin Limitations**  
   - Files require full paths in JetBrains plugin (Issue #1272).  
4. **Session Management**  
   - Notion MCP credentials lost after session closure (Issue #1211).  

--- 

Kimi CLI Community Digest • August 28, 2026 • Generated from [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-28

## 1. Today's Highlights

The community is heavily focused on **TUI rendering correctness** in v0.84.3, with multiple related issues around word-per-line wrapping, soft/hard line break handling, and terminal-specific behavior (WSL2, Kitty, Apple Terminal). A parallel cluster of bugs hit **provider integrations** — `https-proxy-agent` regression, Bedrock usage normalization, OpenRouter `:free` model limits, and DeepSeek-family cross-model replay. Several long-standing ergonomics requests (global `AGENTS.md`, configurable compaction thinking, disable copy-on-select) landed as closed PRs/Issues, indicating real momentum on UX polish.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

1. **#8584 — TUI row corruption during streaming: assistant text one word per line** — [earendil-works/pi#8584](https://github.com/earendil-works/pi/issues/8584) (14 comments, 👍6) — The most-discussed thread of the day. Reproduces after long tool output (e.g., wide `sed` output), suggesting a width-detection race during streaming. High community pain.

2. **#6922 — Default model cannot be a llama.cpp model** — [earendil-works/pi#6922](https://github.com/earendil-works/pi/issues/6922) (12 comments, 👍14) — Highest-upvoted issue. Startup fails with "No models available" when `defaultProvider=llama.cpp`, blocking local-first workflows. Closed, likely fixed.

3. **#7553 — Configurable thinking level/model for compaction** — [earendil-works/pi#7553](https://github.com/earendil-works/pi/issues/7553) (9 comments, in progress) — Reasoning-heavy users can't decouple summarization thinking budget from turn budget; relevant for cost control on long sessions.

4. **#5002 — Support global `~/.agents/AGENTS.md` instructions** — [earendil-works/pi#5002](https://github.com/earendil-works/pi/issues/5002) (5 comments, 👍1, closed) — Workspace-level `AGENTS.md` shipped; global equivalent just landed.

5. **#8673 — TUI soft line breaks render as hard breaks** — [earendil-works/pi#8673](https://github.com/earendil-works/pi/issues/8673) (4 comments, 👍2, closed) — Thinking blocks written one clause per line become unreadable; `marked` soft-break handling root cause.

6. **#8610 — `HttpsProxyAgent is not a constructor` on google-vertex with proxy (v0.84.3 regression)** — [earendil-works/pi#8610](https://github.com/earendil-works/pi/issues/8610) (4 comments, closed) — Caused by code-splitting bundling change; fix shipped via PR #8723.

7. **#8728 — DeepSeek-compatible endpoints need `reasoning_content` auto-enabled** — [earendil-works/pi#8728](https://github.com/earendil-works/pi/issues/8728) (3 comments, closed) — Cross-provider session replay fails with 400; `detectCompat` gap.

8. **#8675 — TUI one-word-per-line in WSL2/Windows Terminal** — [earendil-works/pi#8675](https://github.com/earendil-works/pi/issues/8675) (3 comments, 👍4, closed) — Same symptom as #8621 but reliably reproducible; Windows users especially affected.

9. **#6907 — Add Installation section to README** — [earendil-works/pi#6907](https://github.com/earendil-works/pi/issues/6907) (3 comments, open) — Onboarding friction signal; small but persistent.

10. **#8771 — Apple Terminal.app crash on macOS 26.5.2** — [earendil-works/pi#8771](https://github.com/earendil-works/pi/issues/8771) (1 comment) — New platform-compatibility report worth tracking; pairs with earlier Kitty key-release issue #8624.

## 4. Key PR Progress

1. **#6848 — Retry logic for compaction summarization (transient stream failures)** — [PR #6848](https://github.com/earendil-works/pi/pull/6848) — Bounded exponential backoff in `completeSummarization()`; addresses #6647. Reliability win for long sessions.

2. **#8766 — Make write/edit output easier to scan** — [PR #8766](https://github.com/earendil-works/pi/pull/8766) — Compact, file-focused presentation for `Write`/`Edit` (line numbers, diff hints). UX-focused, open.

3. **#8674 — Render markdown soft line breaks as spaces** — [PR #8674](https://github.com/earendil-works/pi/pull/8674) — Fixes #8673 by mapping `marked` soft breaks to spaces; restores paragraph flow in thinking blocks.

4. **#8764 — Honor `settings.shellPath` for `!`-prefixed config/header commands** — [PR #8764](https://github.com/earendil-works/pi/pull/8764) — Fixes #8763 (Windows WSL bash shim bug). Cross-platform config correctness.

5. **#8723 — Expose `https-proxy-agent` named export** — [PR #8723](https://github.com/earendil-works/pi/pull/8723) — Closes #8610 via `build-coding-agent-bundle` plugin; proxy users unblocked.

6. **#8731 — Allow disable copy on fullscreen; Ctrl+X copies selection** — [PR #8731](https://github.com/earendil-works/pi/pull/8731) — Addresses #7720; introduces `copyOnSelect` setting. Long-requested ergonomics.

7. **#8737 — Match subdomains and root domains in `NO_PROXY`** — [PR #8737](https://github.com/earendil-works/pi/pull/8737) — Wildcard + bare-domain + IPv6 handling consistent across proxy layer.

8. **#8732 — Preserve `reasoning_content` on cross-model replay into DeepSeek-family endpoints** — [PR #8732](https://github.com/earendil-works/pi/pull/8732) — Closes #8728; reasoning survives provider switches.

9. **#7602 — Configurable summarization models** — [PR #7602](https://github.com/earendil-works/pi/pull/7602) — Closes #7553; per-task thinking level for compaction + branch summaries.

10. **#8734 — Top-level `instructions` for OpenAI Responses-compatible providers** — [PR #8734](https://github.com/earendil-works/pi/pull/8734) — New `systemPromptFormat` compatibility option; avoids prompt duplication in `input`. Closes #8388.

## 5. Feature Request Trends

- **TUI ergonomics & rendering fidelity**: soft/hard break handling (#8673), disable copy-on-select (#7720), overlay selection exclusion (#8744), fullscreen TUI `openUrl` for extensions (#8761), opt-in settings for scrollback preservation.
- **Configuration flexibility**: global `AGENTS.md` (#5002), JSONC support for `settings.json` (#8765), per-task compaction thinking/model (#7553), customizable summarization models (#7602).
- **Cross-provider compatibility**: OpenAI Responses `instructions` top-level (#8734), DeepSeek `reasoning_content` replay (#8728), Bedrock `usage.input` normalization (#8752), OpenRouter `:free` `max_tokens` cap (#8760), Cortecs provider (#8199).
- **Quality-of-life for long sessions**: export before any assistant turn (#8758), slash-command-only session export, faster `--resume` via streaming session info (#8762).
- **Documentation & localization**: README installation section (#6907), Chinese README (#8772).

## 6. Developer Pain Points

- **v0.84.3 TUI regressions on Windows/WSL2** — multiple reports of one-word-per-line wrapping, indicating width-detection is fragile under specific terminal emulators (#8584, #8675, #8771). Highest-volume complaint cluster today.
- **Proxy + provider integration fragility** — `https-proxy-agent` regression (#8610), `NO_PROXY` wildcard parsing (#8736), Windows `!`-prefixed command resolution (#8763) collectively show the proxy/provider layer needs hardening.
- **Cross-provider session replay is brittle** — `reasoning_content` stripping (#8728), `usage.input` semantics differing across model families on Bedrock (#8752), and OpenRouter `:free` `max_tokens` mismatches (#8760) all surface when users switch providers mid-session.
- **Thinking-block readability** — both markdown soft-break rendering (#8673) and TUI streaming width (#8584) make reasoning traces hard to follow, which is ironic given reasoning models are a flagship use case.
- **Local / self-hosted provider onboarding** — llama.cpp default-model failure (#6922) and lack of installation docs (#6907) point to friction for non-cloud users.
- **Performance under sustained streaming** — 100% CPU peg while streaming OpenRouter thinking (#8711) and full-session JSONL parse on `--resume` (#8762) hurt long-session UX.
- **Supply-chain / impersonation risk** — `picodesandbox` package report (#8770) signals active namespace squatting against official packages.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-28

## Today's Highlights

The 0.22.2 nightly release continues the OpenTUI migration with the live-session and input batch landing, while a parallel effort introduces `qwen-live`, a standalone voice daemon package. Stream reliability remains a central concern: a self-reported PR adds auto-retry for wrapped network EOF errors, and a watchdog fix for the Anthropic generator closes a parity gap with the OpenAI wire. CI stability on `main` is being actively addressed via temp-file routing and serialized helper tests.

---

## Releases

### v0.22.2-nightly.20260828.7357136dd1
- **fix(web-shell):** restore saved session diffs ([#10093](https://github.com/QwenLM/qwen-code/pull/10093))
- **fix(channels):** preserve DingTalk rich-text multi-… (truncated in source)

Notable companion work in flight against the same line: OpenTUI live-session/input layer ([#10368](https://github.com/QwenLM/qwen-code/pull/10368)), TUI render overhead reduction ([#9970](https://github.com/QwenLM/qwen-code/pull/9970)), and Anthropic stream watchdogs ([#9945](https://github.com/QwenLM/qwen-code/pull/9945)).

---

## Hot Issues

1. **[#5975 — API Error: No stream activity for 120000ms after 19 chunks](https://github.com/QwenLM/qwen-code/issues/5975)** — 13 comments. P2 bug affecting `v0.19.3` users; stream silently times out after a "Thought for 2s" stage. Long-running, high-traffic — still open since June despite repeated reports.

2. **[#8662 — Migrate TUI rendering layer from ink to OpenTUI (tracking)](https://github.com/QwenLM/qwen-code/issues/8662)** — 11 comments. Roadmap-tracking issue for the ink → OpenTUI migration. Cites ~1037 lines of `ink` patches and structural flicker/layout problems as the motivation.

3. **[#4063 — core + cli architecture review, 14 structural issues](https://github.com/QwenLM/qwen-code/issues/4063)** — 11 comments. Flags that the core type system is "kidnapped" by `@google/genai` (136 direct imports). A P0 architectural concern for maintainability.

4. **[#9005 — Anthropic wire missing stream-safety protections](https://github.com/QwenLM/qwen-code/issues/9005)** — 7 comments. P1 bug showing OpenAI stream guards don't apply to Anthropic. Pinned for review; directly motivates PR #9945.

5. **[#10227 — Custom model provider cannot converse (Moonshot JSON schema)](https://github.com/QwenLM/qwen-code/issues/10227)** — 7 comments. P2 bug where `tools.function.parameters` is rejected as invalid Moonshot-flavored JSON schema; blocks custom-provider users.

6. **[#8083 — Make derived Config context ownership explicit](https://github.com/QwenLM/qwen-code/issues/8083)** — 7 comments. P1 design issue about `Object.create(base)` ad-hoc overrides for subagents / scoped memory / approval modes. Recently closed.

7. **[#10065 — LM Studio 0.4.21: "failed to parse grammar" with no MCP and empty tools.core](https://github.com/QwenLM/qwen-code/issues/10065)** — 6 comments. P2 bug blocking local-model workflows on Windows; indicates tool-schema surface still assumes certain providers.

8. **[#10356 — Main CI failed: E2E Tests on 148273956b5c](https://github.com/QwenLM/qwen-code/issues/10356)** — 4 comments. Latest in a string of E2E red builds; the project has been actively diagnosing temp-dir and serial-execution root causes.

9. **[#10061 — Unify stdio/HTTP ACP paths; upgrade ACP SDK to 1.x](https://github.com/QwenLM/qwen-code/issues/10061)** — 3 comments. Design-first proposal to collapse two ACP delivery paths and modernize the SDK pin (currently `0.14.1`).

10. **[#3718 — MCP add/remove bug (no headers, can't remove)](https://github.com/QwenLM/qwen-code/issues/3718)** — 3 comments. Old but persistent P2/P3 bug in `qwen mcp add`/`remove`; still open after months, indicating long-tail UX debt.

---

## Key PR Progress

1. **[#10368 — feat(cli): OpenTUI migration live-session and input batch](https://github.com/QwenLM/qwen-code/pull/10368)** — Third batch of the OpenTUI migration: streaming markdown heal, progressive MCP displays, and the live-session stream fold.

2. **[#10146 — feat(cli): OpenTUI migration foundation batch](https://github.com/QwenLM/qwen-code/pull/10146)** — Foundation modules: theme, a11y (plain-text + screen-reader), clipboard, key mapping, mouse hit-testing. Predecessor to #10368.

3. **[#10347 — feat(core): auto-retry transient network errors (EOF)](https://github.com/QwenLM/qwen-code/pull/10347)** — Reclassifies wrapped 4xx network failures (e.g., `400 network error ... EOF`) as retryable transport errors, so bounded auto-retry applies even when Ctrl+Y isn't reachable.

4. **[#9945 — fix(core): guard Anthropic streams with idle and lifetime watchdogs](https://github.com/QwenLM/qwen-code/pull/9945)** — Applies OpenAI-side stream watchdogs to the Anthropic generator; silent or low-content-thrashing streams now abort with retryable `ETIMEDOUT`. Closes the gap from #9005.

5. **[#10367 — feat(qwen-live): standalone voice daemon package — M1 + M2](https://github.com/QwenLM/qwen-code/pull/10367)** — Incubating `packages/qwen-live` delivering minimal loop (M1) and rich interaction (M2), part of the Live split roadmap (#10118). `cli` is untouched.

6. **[#9110 — fix(core): clean up project snapshots for temporary working directories](https://github.com/QwenLM/qwen-code/pull/9110)** — Removes orphan `projects/` entries when a session's working directory disappears (graceful shutdown + handoff path).

7. **[#9970 — perf(cli): reduce TUI render overhead](https://github.com/QwenLM/qwen-code/pull/9970)** — Incremental terminal output in virtual-viewport mode and a memoized history-rendering body slice. Legacy render path unchanged.

8. **[#10357 — fix(dingtalk): recover status cards after network failures](https://github.com/QwenLM/qwen-code/pull/10357)** — Bounded exponential backoff for transient Card OpenAPI failures, retains the latest full running snapshot, and adds a self-recovering heartbeat for the running instance.

9. **[#10183 — feat(memory): structured on-demand recall](https://github.com/QwenLM/qwen-code/pull/10183)** — Evolves managed auto-memory from a flat prompt injection to a push/pull protocol: two-level ref/title tree, query-focused metadata subtree, and a dedicated recall tool.

10. **[#10268 — fix(daemon): cancel timed-out session initialization](https://github.com/QwenLM/qwen-code/pull/10268)** — Makes the daemon's session-init budget authoritative end-to-end via an absolute deadline propagated through configuration, Gemini startup, and `SessionStart` hooks.

---

## Feature Request Trends

- **Localization:** [#8551](https://github.com/QwenLM/qwen-code/issues/8551) (Korean) closed via [#8552](https://github.com/QwenLM/qwen-code/pull/8552) — a low-cost recurring pattern as the docs site broadens.
- **DingTalk / channel UX:** Multiple asks for richer lifecycle visibility — [#10366](https://github.com/QwenLM/qwen-code/issues/10366) (dynamic lifecycle tags), [#10354](https://github.com/QwenLM/qwen-code/issues/10354) (status-card recovery), [#10267](https://github.com/QwenLM/qwen-code/issues/10267) (invisible DMs) — show channels are becoming a first-class surface.
- **Hook event coverage:** [#10348](https://github.com/QwenLM/qwen-code/issues/10348) asks for hook events on agent-issued questions, so background tasks can push notifications in yolo mode.
- **ACP / daemon unification:** [#10061](https://github.com/QwenLM/qwen-code/issues/10061) and [#4542](https://github.com/QwenLM/qwen-code/issues/4542) want transport-agnostic ACP and a `DaemonWorkspaceService` that consolidates file/auth/agents/memory — the same architectural pull as in the core refactor.
- **Voice / live mode:** [#10367](https://github.com/QwenLM/qwen-code/pull/10367) is the M1+M2 implementation; #10118 is the umbrella.
- **Memory model upgrades:** [#10183](https://github.com/QwenLM/qwen-code/pull/10183) signals a shift from passive prompt injection toward structured tool-driven recall.

---

## Developer Pain Points

- **Stream timeouts are the #1 reliability complaint.** [#5975](https://github.com/QwenLM/qwen-code/issues/5975) has 13 comments and is still open; [#9005](https://github.com/QwenLM/qwen-code/issues/9005) and the active [#9945](https://github.com/QwenLM/qwen-code/pull/9945) / [#10347](https://github.com/QwenLM/qwen-code/pull/10347) work confirm this is a systematic wire-level problem, not a one-off.
- **Provider-specific tool-schema breakage.** [#10227](https://github.com/QwenLM/qwen-code/issues/10227) (Moonshot), [#10065](https://github.com/QwenLM/qwen-code/issues/10065) (LM Studio), and [#3772](https://github.com/QwenLM/qwen-code/issues/3772) (DeepSeek `reasoning_content` 400) all show that custom/local providers still hit schema- and protocol-mismatch errors that gate adoption.
- **Architectural debt in `core`/`cli`.** [#4063](https://github.com/QwenLM/qwen-code/issues/4063) catalogs 14 issues (P0 type-system coupling to `@google/genai`, fused slash-command contract, etc.); [#8083](https://github.com/QwenLM/qwen-code/issues/8083), [#9150](https://github.com/QwenLM/qwen-code/issues/9150) are concrete follow-ups.
- **TUI limitations under ink.** [#8662](https://github.com/QwenLM/qwen-code/issues/8662) — a 1037-line patch set is the visible symptom; the migration is now landing in staged batches.
- **CI flakiness on `main`.** A cluster of E2E red issues ([#10356](https://github.com/QwenLM/qwen-code/issues/10356), [#10370](https://github.com/QwenLM/qwen-code/issues/10370), [#10375](https://github.com/QwenLM/qwen-code/issues/10375), plus closed [#10284](https://github.com/QwenLM/qwen-code/issues/10284), [#10289](https://github.com/QwenLM/qwen-code/issues/10289), [#10311](https://github.com/QwenLM/qwen-code/issues/10311), [#10313](https://github.com/QwenLM/qwen-code/issues/10313), [#10316](https://github.com/QwenLM/qwen-code/issues/10316)) has been mitigated by [#10376](https://github.com/QwenLM/qwen-code/pull/10376) (route E2E temp off `/tmp`), [#10371](https://github.com/QwenLM/qwen-code/pull/10371) (serialize helper tests), and [#10214](https://github.com/QwenLM/qwen-code/pull/10214) (recover protected `.qwen` leftovers).
- **Long-tail UX bugs.** MCP add/remove ([#3718](https://github.com/QwenLM/qwen-code/issues/3718)) and Web Shell MCP Apps inline UI silently failing ([#10369](https://github.com/QwenLM/qwen-code/issues/10369)) point to a need for stronger fallback surfaces and debugging visibility.

---

*Generated from GitHub data for `QwenLM/qwen-code` covering the 24h window ending 2026-08-28. Items linked above are the top of the activity stream; full listings (50 issues, 20 PRs) are available via the issue/PR search filters.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-08-28

## Today's Highlights
The project is currently focused on the v0.9.12 release cycle, with a heavy emphasis on **TUI performance optimization** (reducing token accounting overhead and startup latency) and **MCP (Model Context Protocol) UX improvements**. There is also a strategic push toward "provider neutrality," stripping DeepSeek-specific gates to allow broader LLM compatibility.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
*   **#5316: CodeWhale TUI Crate Decomposition** – An umbrella EPIC to break down the monolith TUI crate to improve maintainability. [Link](https://github.com/Hmbown/CodeWhale/issues/5316)
*   **#5620: Transient Context Pressure Warnings** – A medium-severity bug where the agent fails to react to context limits, leading to silent degradation. [Link](https://github.com/Hmbown/CodeWhale/issues/5620)
*   **#5588: Provider Neutrality Audit** – Moving away from DeepSeek-exclusive logic gates to support a wider range of providers. [Link](https://github.com/Hmbown/CodeWhale/issues/5588)
*   **#5579: Plugin UX Parity with Claude Code** – Request for proactive plugin recommendations and better hot-reloading. [Link](https://github.com/Hmbown/CodeWhale/issues/5579)
*   **#5668: `/copy` Command for Model Output** – Request for a direct command to copy the last response to avoid manual terminal selection. [Link](https://github.com/Hmbown/CodeWhale/issues/5668)
*   **#5249: v0.9.5 Build-time Lane** – Addressing the "monolith tax" where massive crate sizes are slowing down every edit/compile cycle. [Link](https://github.com/Hmbown/CodeWhale/issues/5249)
*   **#5625: Non-blocking "Pending User Input" Peek** – Proposal for a tool that lets agents see if a user is typing mid-turn. [Link](https://github.com/Hmbown/CodeWhale/issues/5625)
*   **#5618: Replace Git CLI with Gix (Gitoxide)** – Effort to remove process spawn overhead and lock contention by using a native Rust git library. [Link](https://github.com/Hmbown/CodeWhale/issues/5618)
*   **#4402: Attention UX Improvements** – Focus-aware notifications and better title state to signal when an agent requires user action. [Link](https://github.com/Hmbown/CodeWhale/issues/4402)
*   **#5681: Extend Provider-Native Web Search** – Bringing native search capabilities to DeepSeek, Qwen, and other first-party routes. [Link](https://github.com/Hmbown/CodeWhale/issues/5681)

## Key PR Progress
*   **#5677: Rescue MCP/Plugin Session Boot** – Surfaces plugin and MCP server boot states in the UI to prevent the "frozen" feel during startup. [Link](https://github.com/Hmbown/CodeWhale/pull/5677)
*   **#5665: Single-pass Token Accounting** – Significant performance win by reducing the number of transcript walks per turn. [Link](https://github.com/Hmbown/CodeWhale/pull/5665)
*   **#5664: Trim Startup & Command Latency** – Optimizes diagnostic dispatch and removes unnecessary Tokio runtime overhead. [Link](https://github.com/Hmbown/CodeWhale/pull/5664)
*   **#5667: v0.9.12 Release Train Consolidation** – Merges performance folds and updates compatibility for hosted backends (Groq, Cerebras, etc.). [Link](https://github.com/Hmbown/CodeWhale/pull/5667)
*   **#5679: Contiguous Tool Result Batches** – Ensures assistant tool-calls and results remain grouped and valid. [Link](https://github.com/Hmbown/CodeWhale/pull/5679)
*   **#5658: MCP/Plugin Boot Visibility** – Updates the UI to show exactly which MCP servers are connecting. [Link](https://github.com/Hmbown/CodeWhale/pull/5658)
*   **#5655: Clickable MCP Recovery** – Transforms MCP error recovery from a command-line hurdle into a first-class UI action. [Link](https://github.com/Hmbown/CodeWhale/pull/5655)
*   **#5666: Gate Test-only Helpers** – Cleans up dead code by moving test fixtures to `#[cfg(test)]`. [Link](https://github.com/Hmbown/CodeWhale/pull/5666)
*   **#5682: Native Search Constraints** – Enforces domain constraints before falling back to general search backends. [Link](https://github.com/Hmbown/CodeWhale/pull/5682)
*   **#5669: Nixpkgs Update** – Fixes 403 errors during build and adds automatic monthly updates. [Link](https://github.com/Hmbown/CodeWhale/pull/5669)

## Feature Request Trends
*   **Agent-Human Collaboration:** Moving toward "non-blocking" interactions, such as peeking at user input and better notification systems for when the agent is waiting.
*   **Ecosystem Interop:** Strong desire for easier migration from other tools (e.g., `/import-claude`) and parity with industry-standard AI CLI UX.
*   **Provider Agnosticism:** A clear architectural shift toward treating DeepSeek as one of many providers rather than the primary gate.

## Developer Pain Points
*   **Build Times:** The "monolith tax" is a major frustration; the 600k+ line TUI crate is causing slow iteration loops for contributors.
*   **Git Lock Contention:** Internal `git` CLI probes are causing `.git/index.lock` conflicts, disrupting the developer's own git workflow.
*   **Context Transparency:** Users and developers are struggling with "silent" context degradation and a lack of visibility into the token cost of MCP servers.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*