# AI CLI Tools Community Digest 2026-08-24

> Generated: 2026-08-24 00:42 UTC | Tools covered: 9

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

# DeepSeek TUI Community Digest – 2026‑08‑24  

---  

## 1. Today’s Highlights  
- **v0.9.11** released, transitioning legacy `deepseek-tui` to Codewhale – a Shannon Labs product with the `codewhale` command and npm package. Legacy npm package remains deprecated with no further releases.  
- Multiple high-impact architectural refactorings are underway, centering on provider-neutral runtime design and consolidated command structures.  
- Significant focus on workflow reliability, including bounded `responseSchema` handling and granular approval receipt tracking for sub‑agents.  

---  

## 2. Releases  
| Version | Type | Summary | Link |
|---------|------|---------|------|
| **v0.9.11** | Production | Codewhale is now a public product (Shannon Labs) with `codewhale` command; legacy `deepseek-tui` npm package deprecated and frozen. | [Release notes](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.9.11) |

---  

## 3. Hot Issues (selected by comment count & impact)  

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#3368** | *Security hardening/code-scanning fixes for v0.9.3* | Critical security improvements to meet production readiness. | 29 comments, 👎0 – high community engagement on security posture. |
| **#4326** | *Performance: Explain and bound RSS after cancelling a 32‑worker storm* | Addresses runaway memory consumption, a core reliability blocker for heavy workflows. | 6 comments, 👎0 – pressing performance concern. |
| **#3957** | *v0.9.3 Refactor: Split shared modal infrastructure and owned views* | Major architectural cleanup to improve modularity and maintainability. | 4 comments, 👎0 – important structural change. |
| **#3306** | *v0.9.3 Refactor: Converge runtime ownership, delete duplication, ship one executable* | Consolidation of runtime layers to reduce complexity and improve reliability. | 4 comments, 👎0 – strategic redesign. |
| **#5583** | *Workflow `responseSchema` failures need bounded repair and raw‑output receipts* | Fixes critical workflow reproducibility issues for v0.9.12. | 3 comments, 👎0 – high impact on workflow fidelity. |
| **#5582** | *Workflow owner snapshots collapse Degraded into Completed* | Snapshot integrity bug affecting workflow state tracking. | 3 comments, 👎0 – important state‑management bug. |
| **#5547** | *CI: Linux workspace tests do not run for non‑mirrored PR branches* | Exposes gaps in cross‑platform CI coverage. | 3 comments, 👎0 – prevents comprehensive testing. |
| **#5290** | *Fix(web): Restore clickable controls on non‑English routes* | Localization/ux regression affecting global user base. | 3 comments, 👎0 – usability fix. |
| **#4394** | *Compaction: Publish and enforce a structured survival contract* | Introduces reliability guarantees for long‑running compaction processes. | 3 comments, 👎0 – enterprise‑grade reliability enhancement. |
| **#3145** | *v0.9.3: Add visual inspection artifacts for browser and UI tasks* | Expands tool capabilities for visual verification and debugging. | 3 comments, 👎0 – significant feature for UI automation. |

---  

## 4. Key PR Progress (selected by relevance & impact)  

| # | Title | Summary |
|---|-------|---------|
| **#5591** | Fix: Goal continuation cadence fix – part a | Stabilizes goal‑continuation logic for long‑running tasks. |
| **#5576** | v0.9.12 integration: Must‑fix + UX fixes (work‑in‑progress) | Consolidates critical bug fixes and usability improvements for the upcoming v0.9.12 release. |
| **#5590** | CI: Run Linux workspace tests on pull requests | Enables comprehensive cross‑platform testing coverage. |
| **#5584** | Fix(sub‑agents): Persist child approval receipts | Ensures sub‑agent approval decisions survive restarts and session transitions. |
| **#5574** | Add Build Remote Agent phone pairing (gbr/1) | Introduces new mobile integration for remote session control. |
| **#5565** | Docs(release): Add unpublished‑tag re‑cut recovery + external publish gates | Improves release management and rollback capabilities. |
| **#5563** | Fix(onboarding): Show all providers on first run, not local‑only | Enhances user onboarding by exposing provider choices early. |
| **#5561** | Fix(engine): Auto‑retry a reasoning‑only clean‑stop instead of failing | Improves resilience of reasoning‑only model interactions. |
| **#5560** | Feat(web): Add Register and Sign‑in header links to the app | Streamlines authentication UI navigation. |
| **#5559** | Fix(release): Close pre‑tag v0.9.11 truthfulness and tool‑output gaps | Finalizes release artifacts and resolves tool‑output inconsistencies. |

---  

## 5. Feature Request Trends  

- **Provider‑neutral runtime architecture**: Multiple refactor PRs aim to de‑hardcode model providers and tool registries, enabling flexible multi‑provider workflows.  
- **Mobile/remote integration**: Growing demand for Build Remote Agent phone pairing via the `gbr/1` protocol for iOS/Android session control.  
- **Visual inspection & debugging**: Feature push to add visual inspection artifacts for browser and UI tasks, supporting richer debugging capabilities.  
- **Compaction reliability**: Emphasis on structured survival contracts for compaction processes to guarantee long‑run stability.  
- **Enhanced onboarding**: Requests to surface all providers (not just local) during first‑run setup to reduce configuration friction.  

---  

## 6. Developer Pain Points  

- **Legacy deprecation**: Users transitioning from v0.8.x to v0.9.x face disruption due to the legacy `deepseek`/`d...` commands being retired in favor of `codewhale`.  
- **Runaway resource consumption**: Performance issues with 32‑worker storms causing unbounded RSS spikes require better cancellation and bounding.  
- **CI test gaps**: Non‑mirrored PR branches lack Linux workspace test execution, limiting cross‑platform confidence.  
- **Localization UX**: Web UI controls on non‑English routes are not clickable, affecting international usability.  
- **Workflow snapshot fidelity**: Degraded workflows incorrectly collapsing into “Completed” state erode debugging clarity.  
- **Approval receipt persistence**: Sub‑agent approval decisions not persisting across session boundaries cause inconsistent behavior.  

---  

# Cross‑Tool Comparison Report  

## 1. Ecosystem Overview  
The AI developer tools ecosystem in 2026 exhibits rapid specialization: CLI‑centric tools (Claude Code, OpenAI Codex, Gemini CLI) focus on tightly integrated reasoning and workflow automation; specialized platforms (Kimi Code, DeepSeek TUI, Copilot CLI) target niche domains with strong provider neutrality or platform integration; system‑level utilities (Pi) emphasize modular composability and rich TUI interactions. Community momentum is split between security hardening, performance optimization, and multi‑provider orchestration, with a clear trend toward breaking legacy barriers (e.g., deprecated npm packages, sandboxed localhost access) to enable richer automation.  

## 2. Activity Comparison  

| Tool | Issues (last 24h) | PRs (last 24h) | Releases (last 24h) |
|------|-------------------|----------------|--------------------|
| **Claude Code** | 10 hot issues (model output bugs, Windows crashes, sandbox localhost block) | 1 significant PR (MessageDisplay docs) | v2.1.241 – bug fixes |
| **OpenAI Codex** | 10 hot issues (GPT‑5.6‑sol crashes, recurring scheduled tasks, resource waste) | 10 key PRs (metadata preservation across forks, image handling, etc.) | rust‑v0.149.1 & alpha pre‑release |
| **Gemini CLI** | 10 hot issues (agent hangs, sub‑agent turn‑limit reporting, memory system noise) | 10 key PRs (dependency bumps, symlink/workspace fixes, OAuth cleanup) | v0.56.0‑nightly (auto build) |
| **Copilot CLI** | 10 hot issues (Windows permission errors, memory store failures, cloud session hangs) | 1 minor PR (README rename) | v1.0.81‑8 (xhigh reasoning for Grok 4.6) |
| **Kimi Code** | 10 hot issues (web‑shell fix, monorepo context provider, Vertex AI auth, etc.) | 10 key PRs (CI reviewer assignment, residue probe stability, verification pipeline) | v0.22.0‑nightly (web‑shell cwd fix) |
| **OpenCode** | 10 hot issues (Ollama tool failures, MCP structuredContent loss, Big Pickle network errors) | 10 key PRs (session reliability, database locking, TUI keybinds, workspace recovery) | No releases |
| **Pi** | 10 hot issues (mouse events on rows, llama.cpp model picker, package indexing, session replay integrity) | 10 key PRs (coding‑agent finish reason exposure, llama.cpp model visibility, PowerShell tool) | No releases (stable 0.84.2) |
| **DeepSeek TUI** | 10 hot issues (security hardening, RSS performance, modal refactor, responseSchema failures, etc.) | 10 key PRs (goal continuation fix, sub‑agent approval persistence, mobile pairing, release doc recovery) | v0.9.11 (Codewhale transition, legacy deprecate) |

## 3. Shared Feature Directions  

| Feature Need | Tools Involved | Specific Needs |
|--------------|----------------|----------------|
| **Provider/neutral runtime** | Gemini CLI, Kimi Code, DeepSeek TUI, Pi | De‑hardcode model providers; unified tool registries; support for multiple backends. |
| **Sub‑agent approval & state persistence** | OpenAI Codex, Gemini CLI, DeepSeek TUI, OpenCode | Durable approval receipts across restarts; cross‑session approval tracking; snapshot integrity. |
| **Security hardening & scanning** | Claude Code, DeepSeek TUI, Pi | Code scanning fixes; security refactoring; runtime hardening. |
| **Mobile/remote integration** | DeepSeek TUI, Pi, Copilot CLI | Phone pairing via `gbr/1`; remote device control; cross‑platform synchronization. |
| **Performance & resource bounding** | OpenAI Codex, Gemini CLI, DeepSeek TUI | RSS bounding for worker storms; bounded compaction; graceful cancellation. |
| **Metadata preservation** | OpenAI Codex, Kimi Code | Content annotations across forks; developer instruction retention; image handling fidelity. |
| **TUI/UX improvements** | Pi, Gemini CLI, DeepSeek TUI | Richer mouse interaction; visual inspection artifacts; per‑tool output expansion. |

## 4. Differentiation Analysis  

| Dimension | Specialized Platforms (Kimi/DeepSeek) | General‑Purpose CLIs (Claude/OpenAI) | System Utility (Pi) |
|-----------|--------------------------------------|-------------------------------------|---------------------|
| **Target Users** | Enterprise monorepo engineers; multilingual developers; cost‑sensitive users | General developers needing AI‑assisted coding; workflow automation | Power users desiring modular, composable CLI experiences |
| **Technical Approach** | Provider‑neutral architecture; deep integration with existing Git/CI ecosystems; emphasis on external context providers | Built‑in sandboxing; model‑specific optimizations; tight integration with cloud services | Component‑based TUI; runtime ownership consolidation; external tool federation |
| **Feature Focus** | Monorepo context sharing; legacy migration paths; visual inspection; provider diversity | Reasoning effort controls; scheduled task management; resource usage throttling; plugin ecosystems |
| **Platform Coverage** | Cross‑platform (Windows/macOS/Linux) with strong localization support | Primarily cross‑platform with platform‑specific bugs (Windows GPU crashes, sandbox errors) | Cross‑platform TUI with Wayland/Windows focus |
| **Community Maturity** | Mid‑stage with rapid feature churn; strong external integration focus | High‑velocity releases; mature feature sets but plagued by reliability bugs | Stable core (0.84.2) but feature backlog; community driven UI/UX enhancements |

## 5. Community Momentum & Maturity  

- **Maturity Leaders:** **OpenAI Codex** shows the most consistent PR output (10 key PRs) with strong focus on metadata preservation and developer tooling; **Kimi Code** demonstrates high release cadence with strategic CI and verification improvements.  
- **Rapid Iterators:** **Claude Code** and **Gemini CLI** publish frequent releases (bug fixes, nightly builds) but also have high issue volumes, indicating fast development with stability challenges.  
- **Stable Foundations:** **Pi** remains at a stable version (0.84.2) with fewer releases but substantial architectural refactoring PRs, indicating a focus on core stability before feature expansion.  
- **Enterprise Focus:** **DeepSeek TUI** and **Kimi Code** prioritize enterprise concerns (security hardening, monorepo context, provider neutrality) with fewer but high‑impact releases.  
- **Plugin Ecosystem:** **OpenCode** and **Copilot CLI** show lower PR activity but significant plugin/agent integration focus, suggesting community-driven feature extensions rather than core releases.  

## 6. Trend Signals  

- **Sandboxing Evolution:** Universal push to unblock localhost and native integrations (Claude sandbox block, DeepSeek web‑shell cwd fix). Indicates a maturation from isolated AI to integrated development workflows.  
- **Performance & Cost Control:** Bounded resource usage (RSS, compaction, scheduled tasks) is a top concern across OpenAI Codex, Gemini CLI, and DeepSeek TUI, reflecting cost‑conscious enterprise adoption.  
- **Provider Neutrality:** Convergence on de‑hardcoding model providers and supporting multiple backends signals a shift from vendor‑locked solutions to flexible, multi‑cloud strategies.  
- **Mobile/Remote Integration:** The emergence of phone pairing protocols (`gbr/1`) across DeepSeek TUI and Pi suggests a new frontier for AI tools beyond desktop-centric workflows.  
- **Security Hardening:** Increased focus on code scanning, runtime security, and permission handling (e.g., `permissions.allow` gaps) indicates a maturing security posture in response to enterprise demands.  
- **Legacy Migration Pain:** Deprecation of older package names/commands (DeepSeek legacy npm, Claude Windows installers) is a recurring friction point, requiring robust migration paths and clear communication.  
- **Metadata & Context Fidelity:** Preservation of annotations, developer instructions, and content kinds across forks/compaction reflects the growing need for provenance and auditability in automated workflows.  

**Cross‑tool Outlook:** Expect accelerated convergence around provider‑neutral runtimes, tighter platform integrations (including mobile), and stricter resource/compaction controls. Tools that successfully navigate legacy migrations while delivering robust security and performance will capture the enterprise market. Developers should prioritize tools with active metadata preservation, sub‑agent state durability, and clear roadmaps for sandbox/real‑system connectivity.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# **Claude Code Skills Community Highlights Report**  
*Data as of 2026-08-24*  

---

## **1. Top Skills Ranking**  
### **1. Hivemind: Zero-Cost Multi-Agent Orchestration**  
- **Functionality**: Delegates mechanical tasks (e.g., code execution, data fetching) to headless workers via the `opencode` MCP server, freeing Claude Code to act as the central planner and merger.  
- **Discussion Highlights**: Highlighted as a resource-efficient solution for scaling workflows. Users emphasized its potential to reduce costs while maintaining high-quality output.  
- **Status**: 🔴 Open (PR #1628)  
- **Link**: [anthropics/skills PR #1628](https://github.com/anthropics/skills/pull/1628)  

### **2. scnet-hpc: High-Performance Computing Skill for SCNet Clusters**  
- **Functionality**: Manages SLURM workflows, SSH connections, and cluster profiles on SCNet HPC clusters.  
- **Discussion Highlights**: Targeted at researchers and engineers needing programmatic control of compute clusters. Community praised its utility for bioinformatics and physics.  
- **Status**: 🔴 Open (PR #1615)  
- **Link**: [anthropics/skills PR #1615](https://github.com/anthropics/skills/pull/1615)  

### **3. self-audit: Mechanical Verification + Reasoning Quality Gate**  
- **Functionality**: Audits outputs using mechanical file verification followed by four-dimension reasoning checks. Universal across projects and models.  
- **Discussion Highlights**: Called a "universal safety net" for deployments. Users requested integration with CI/CD pipelines.  
- **Status**: 🔴 Open (PR #1367)  
- **Link**: [anthropics/skills PR #1367](https://github.com/anthropics/skills/pull/1367)  

### **4. ServiceNow Platform Skill**  
- **Functionality**: Comprehensive assistant for ServiceNow ITSM, ITOM, ITAM, FSM, HRSD, SPM, and security incident workflows.  
- **Discussion Highlights**: Viewed as a game-changer for enterprise IT teams. Highlighted as one of the most comprehensive domain-specific skills.  
- **Status**: 🔴 Open (PR #568)  
- **Link**: [anthropics/skills PR #568](https://github.com/anthropics/skills/pull/568)  

### **5. docx Fix: Prevent Tracked Change `w:id` Collisions**  
- **Functionality**: Resolves document corruption caused by overlapping IDs in tracked changes and bookmarks in DOCX files.  
- **Discussion Highlights**: Critical fix for document editing workflows. Users reported frequent issues before this PR.  
- **Status**: 🔴 Open (PR #541)  
- **Link**: [anthropics/skills PR #541](https://github.com/anthropics/skills/pull/541)  

### **6. copy Memory: Symbolic Notation for Compact Agent State**  
- **Functionality**: Introduces a compact, symbolic format for agent memory to reduce context drift and improve efficiency.  
- **Discussion Highlights**: Proposed as a solution for long-term agent state management. Users proposed integrating with self-audit’s quality gates.  
- **Status**: ✄ Draft (Issue #1329)  
- **Link**: [anthropics/skills Issue #1329](https://github.com/anthropics/skills/issues/1329)  

### **7. testing-patterns: Comprehensive Testing Philosophy & Patterns**  
- **Functionality**: Covers testing philosophy (Testing Trophy model), unit testing, React testing, and test coverage best practices.  
- **Discussion Highlights**: Positioned as essential for robust agent reliability. Adopted as a reference by several organizations.  
- **Status**: 🔴 Open (PR #723)  
- **Link**: [anthropics/skills PR #723](https://github.com/anthropics/skills/pull/723)  

---

## **2. Community Demand Trends**  
- **Workflow Automation**: High demand for Skills to automate code generation, testing, and deployment (e.g., `servicenow`, `testing-patterns`).  
- **Documentation Quality**: Multiple issues (e.g., #189, #202) called for better documentation to prevent skill duplication and usability gaps.  
- **Security & Trust**: Issue #492 (community skills impersonation) sparked calls for stricter Skill signing and verification standards.  
- **Cross-Platform Interoperability**: Skills like `Hivemind` and `servicenow` highlight demand for Skills to integrate with enterprise tools and cloud platforms.  

---

## **3. High-Potential Pending Skills**  
### **1. self-audit (PR #1367)**  
- **Progress**: Implemented core mechanical verification. Awaiting peer review for reasoning gate integration.  

### **2. copy Memory (Issue #1329)**  
- **Progress**: Draft proposal in progress. Community requested prioritization for multi-agent systems.  

### **3. scnet-hpc (PR #1615)**  
- **Progress**: Alpha implementation ready for testing. SCNet team has expressed interest in collaboration.  

### **4. Hivemind (PR #1628)**  
- **Progress**: Knative worker integration incomplete. Finalizing async task queuing logic.  

---

## **4. Skills Ecosystem Insight**  
**Most Concentrated Demand**: Enterprise-grade automation (e.g., IT management, HPC workflows) and foundational quality tools (e.g., self-audit, testing patterns) take precedence, with urgent emphasis on solving impersonation risks in community contributions.  

--- 

**Last Updated**: 2026-08-24 | **Generated by**: Claude Code Analysis Suite


---

# Claude Code Community Digest - 2026-08-24  

## 1. Today's Highlights  
The latest release (v2.1.241) focuses on bug fixes and reliability improvements. Key issues dominating discussions include persistent Windows desktop crashes, model output quality degradation (especially for Claude 4.7+, 5.0, and Fable), and sandbox/localhost connectivity restrictions for developers.  

## 2. Releases  
**v2.1.241**  
- Bug fixes and reliability improvements.  
- GitHub Link: [anthropics/claude-code Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.241)  

## 3. Hot Issues  
1. **#77136** [Claude Model Output Quality Degradation](https://github.com/anthropics/claude-code/issues/77136)  
   - **Why it matters**: Frequent complaints about Claude 4.7+, 5.0, and Fable producing repetitive, incoherent prose even with explicit instructions. High impact on developer productivity.  
   - **Community reaction**: 351 upvotes, 93 comments (most active issue).  

2. **#81698** [Windows Desktop GPU Crash](https://github.com/anthropics/claude-code/issues/81698)  
   - **Why it matters**: GPU process crashes (exit code 101457950) kill the entire app on Windows, affecting users with NVIDIA RTX 5080 GPUs.  
   - **Community reaction**: 54 comments, low upvotes (5), but critical for stability.  

3. **#85199** [Windows Desktop Repeated Crashes](https://github.com/anthropics/claude-code/issues/85199)  
   - **Why it matters**: Requires manual "Repair" via Advanced Options post-crash, disrupting workflows.  
   - **Community reaction**: 34 comments, 4 upvotes.  

4. **#7134** [File Encoding Corruption on Windows](https://github.com/anthropics/claude-code/issues/7134)  
   - **Why it matters**: Corrupts files encoded in Windows-1252 (legacy encoding), risking data loss for enterprise users.  
   - **Community reaction**: 27 comments, 23 upvotes.  

5. **#28018** [Sandbox Blocks Localhost Connections](https://github.com/anthropics/claude-code/issues/28018)  
   - **Why it matters**: Breaks local Docker testing workflows, a core use case for developers.  
   - **Community reaction**: 8 comments, 75 upvotes (second-highest).  

6. **#77704** [MCP Connector Tool Loss](https://github.com/anthropics/claude-code/issues/77704)  
   - **Why it matters**: Custom remote MCP connectors lose tools or hit a 256-tool cap, severely limiting integrations.  
   - **Community reaction**: 4 comments, no upvotes, but a critical regression since mid-July.  

7. **#88323** [Windows MSIX Package Corruption](https://github.com/anthropics/claude-code/issues/88323)  
   - **Why it matters**: Code Integrity blocks on `vk_swiftshader.dll` cause MSIX package corruption ("Modified" state).  
   - **Community reaction**: 6 comments, 0 upvotes, specific to sideloaded installs.  

8. **#85924** [Mobile Composer Text Discard](https://github.com/anthropics/claude-code/issues/85924)  
   - **Why it matters**: Queued text in Android app is silently discarded, frustrating mobile users.  
   - **Community reaction**: 6 comments, 4 upvotes.  

9. **#69884** [Windows .local Path Bun Executable Overwrite](https://github.com/anthropics/claude-code/issues/69884)  
   - **Why it matters**: Installs Bun v1.4.0 instead of Claude Code at `.local/bin/claude.exe`, breaking CLI workflows.  
   - **Community reaction**: 4 comments, resolved (closed as invalid).  

10. **#88439** [Claude Japanese Language Issues](https://github.com/anthropics/claude-code/issues/88439)  
    - **Why it matters**: Model outputs broken Japanese, affecting multilingual use cases.  
    - **Community reaction**: 1 comment, 4 upvotes.  

## 4. Key PR Progress  
**#83374** [Document MessageDisplay Streaming Semantics](https://github.com/anthropics/claude-code/pull/83374)  
- **What it does**: Adds documentation for the `MessageDisplay` hook event in the plugin development guide.  
- **Impact**: Improves clarity for developers building custom plugins/skills.  

*Note: Only one significant PR was updated recently; developer tooling documentation gaps remain a minor but notable concern.*  

## 5. Feature Request Trends  
1. **Sandbox Enhancements**: Allow outbound connections to `localhost` for local testing (#28018).  
2. **UI/UX Improvements**: Better handling of terminal focus clicks in `AskUserQuestion` (#76616), and richer markdown/image support in terminals (#87438).  
3. **Model Customization**: Fixes for language-specific issues (e.g., Japanese) and consistent prose generation.  
4. **MCP Connector Stability**: Address tool loss, API caps, and session-specific bugs.  
5. **Cross-Session Tools**: Fix `SendMessage` failures across platforms and sessions (e.g., Linux, Windows, macOS).  

## 6. Developer Pain Points  
- **Windows Desktop Instability**: Repeated crashes, GPU failures, and MSIX package corruption plague Windows users.  
- **Model Behavior**: Output inconsistencies and language-specific issues reduce usability for developers relying on precise instructions.  
- **Sandbox Limitations**: Blocking `localhost` breaks integration tests, forcing workarounds.  
- **MCP Infrastructure**: Connector tool loss, caps, and session synchronization failures disrupt integrations.  
- **Legacy File Encoding**: Risks workflow disruptions for users with non-UTF8 files.  

---  
Generated from GitHub data: [anthropics/claude-code](https://github.com/anthropics/claude-code)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑08‑24**

---

### 1. Today’s Highlights
- **New Rust release** – `codex/rust-v0.149.1` (v0.149.1) and an alpha pre‑release `rust-v0.149.0‑alpha.4.3` have been pushed, delivering version‑bump fixes and performance improvements.
- **Critical workflow bug** – Issue [#38350](https://github.com/openai/codex/issues/38350) reports that recurring scheduled tasks in ChatGPT Web are silently disabling after each run, affecting dozens of users.
- **Resource waste** – Issue [#37445](https://github.com/openai/codex/issues/37445) quantifies a surprising 6 % weekly‑limit consumption just by opening the ChatGPT desktop app, prompting a fix to throttle background activity.
- **Metadata‑preservation drive** – A wave of closed PRs (see §4) now preserves content‑kind annotations across sub‑agent forks, image handling, compaction, and model‑switch roll‑backs, dramatically improving context fidelity.

---

### 2. Releases
| Release | Version | Summary |
|---|---|---|
| **rust‑v0.149.1** | 0.149.1 | Minor stability and performance patches; see full changelog [compare](https://github.com/openai/codex/compare/rust-v0.149.0...rust-v0.149.1). |
| **rust‑v0.149.0‑alpha.4.3** | 0.149.0‑alpha.4.3 | Alpha pre‑release with early‑access fixes and experimental features. |

---

### 3. Hot Issues (top 10 by community engagement)

| # | Title | Comments | 👍 | Why it matters | Community reaction |
|---|---|---|---|---|---|
| **39392** | Codex App with **gpt‑5.6‑sol** aborts on `prompt_cache_retention` | 39 | 37 | Users on the latest GPT‑5.6‑sol model see crashes; breaks core workflow. | Strong upvotes, heavy discussion on error handling. |
| **38350** | Recurring scheduled tasks disable themselves after successful runs | 35 | 0 | Breaks automation pipelines in ChatGPT Web; tasks stop without user action. | High comment volume, no upvotes yet – users seeking a fix. |
| **25928** | VS Code/Cursor extension: submitted prompts disappear before queue | 28 | 18 | Core productivity loss on Windows; prompts vanish silently. | Popular pain point, many workarounds attempted. |
| **37445** | Desktop app silently consumes **Codex weekly limit** (6 % per background run) | 13 | 10 | Wastes quota; users unaware of background usage. | Clear empirical data spurred rate‑limit re‑evaluation. |
| **39903** | Add option to disable “Ran N commands” collapsing & always show executed commands | 12 | 27 | CLI users want full command history visibility; collapsing hides useful info. | Strong feature request, many upvotes. |
| **33192** | Windows 10 DWM Composition handles leak after tool‑call tasks | 12 | 10 | Accumulates handles, degrades UI performance on Windows. | Highlighted performance regression, active debugging. |
| **38290** | `CreateProcess: Rejected("Failed to create unified exec process…")` on Windows sandbox | 10 | 0 | Blocks sandbox‑based tool launches for many Windows users. | No upvotes yet; critical for Windows sandbox users. |
| **30348** | Bug: Unable to create new conversations in Codex Desktop (thread/start timeout) | 9 | 1 | Prevents starting fresh sessions; stalls onboarding. | Low uptake; users report workaround via CLI. |
| **32519** | ChatGPT–Codex shared project context & bidirectional task handoff | 8 | 0 | Desires tighter integration between mobile ChatGPT and desktop Codex. | Early‑stage feature request, no consensus yet. |
| **34619** | Restore GPT‑5.6 Sol’s 372 K Codex context window (or opt‑in setting) | 6 | 23 | Large‑context users lose the previous 372 K limit, affecting long‑form code. | High upvotes, clear demand for context‑size controls. |

*All issue links are on GitHub: `https://github.com/openai/codex/issues/<num>`.*

---

### 4. Key PR Progress (top 10 by impact)

| # | PR Title | Feature / Fix | Brief Summary |
|---|---|---|---|
| **40297** | Preserve developer instruction annotations in sub‑agent forks | **Sub‑agent context** | Introduces a dedicated `generic.developer_instructions` fragment to keep developer instructions intact when spawning child agents. |
| **40196** | Annotate user input & contextual fragments with content kinds | **Metadata** | Classifies user text/audio/images as `user.text`, `user.image`, etc., and preserves fragment `ContentItemKind` through request conversion. |
| **40281** | Preserve content kinds during image preparation | **Image handling** | Guarantees that positional `content_item_kinds` stay aligned when images are replaced with error text or unsupported media. |
| **40280** | Budget retained images during remote compaction | **Budgeting** | Adds `compaction_image_budget` flag to charge retained images against the history budget, preventing hidden context blow‑up. |
| **40277** | Preserve annotations when omitting unsupported media | **Error resilience** | Renders unsupported images/audio as `images.unsupported` / `audio.unsupported` fragments, keeping surrounding annotation metadata coherent. |
| **40275** | Classify additional generated context fragments | **Typing** | Tags compaction summaries, Guardian‑approved actions, and sub‑agent notifications with specific content‑kind tags (`compaction.summary`, `guardian.action`, etc.). |
| **40271** | Preserve content annotations when rolling back model switches | **Consistency** | Filters rolled‑back model‑switch instructions through annotated content so surviving developer fragments retain their metadata. |
| **40266** | Preserve content annotations when filtering forked agent history | **History fidelity** | Rewrites developer‑message content as annotated content to keep `content_item_kinds` aligned when parent history is prepared for a spawned agent. |
| **40264** | Preserve content metadata when truncating messages | **Integrity** | Converts message content and its classifications to retain passthrough metadata after truncation, avoiding out‑of‑sync annotations. |
| **40257** | Support `cua_repl` as a Node REPL‑backed MCP server | **MCP expansion** | Extends Guardian review evidence collection and computer‑use policy to recognize `cua_repl` alongside `node_repl`. |

*All PR links: `https://github.com/openai/codex/pull/<num>`.*

---

### 5. Feature Request Trends
- **Context‑size restoration** – Users repeatedly ask to bring back GPT‑5.6 Sol’s 372 K window or add an opt‑in toggle for large contexts.
- ** richer metadata & annotations** – A recurring theme across many issues and the latest PRs is the need to preserve content classifications and developer instructions through all transformations (forking, compaction, media handling, model switches).
- **Sub‑agent reliability & handoff** – Requests for more stable sub‑agent management (prevent premature termination), shared project context, and bidirectional task handoff between mobile ChatGPT and desktop Codex.
- **UI/UX controls** – Users want granular controls over CLI output collapsing, scheduled‑task behavior, and hot‑key handling (e.g., Option‑Space stuck on “Waiting for worktree setup…”).
- **Windows sandbox & performance fixes** – Frequent reports of DWM handle leaks, sandbox creation errors, and PowerShell‑related access‑denied issues indicate a need for more robust Windows support.
- **Rate‑limit transparency & usage tracking** – Multiple issues describe unexpected background consumption and disappearing banked resets, highlighting demand for clearer quota visibility.
- **Extension stability** – Prompt disappearance, replay/fork rendering glitches, and Chrome‑sidebar read

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑08‑24**  

---  

### 1. Today’s Highlights  
- A new nightly build **v0.56.0-nightly.20260823.g5411f113c** was published, continuing the rapid‑iteration cadence of the CLI.  
- The issue tracker shows a cluster of high‑activity bugs around agent reliability (sub‑agent turn‑limit reporting, generalist‑agent hangs, shell‑command “Waiting input” stalls) and memory‑system quality, while dependency‑bump PRs dominate the PR queue.  

---  

### 2. Releases  
| Version | Type | What’s New (summary) | Link |
|---------|------|----------------------|------|
| v0.56.0-nightly.20260823.g5411f113c | Nightly | Automatic build from main; no detailed changelog provided beyond the version bump. | [Release notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260823.g5411f113c) |

---  

### 3. Hot Issues (selected by comment count & impact)  

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after **MAX_TURNS** reported as GOAL success, hiding interruption | Misleading success status prevents users from detecting when a sub‑agent hit its turn limit, breaking debugging workflows. | 13 comments, 👍2 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** – simple operations (folder creation) stall indefinitely | Core usability blocker; forces users to disable sub‑agent delegation, reducing the CLI’s automation value. | 8 comments, 👍8 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via **Zero‑Dependency OS Sandboxing & Post‑Execution Intent Routing** | Aims to unlock the model’s native shell‑tool fluency while preserving safety – a high‑impact performance/enhancement direction. | 8 comments, 👍1 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of **AST‑aware file reads, search, and mapping** | Could drastically cut token usage and turn counts by giving the agent precise syntactic awareness. | 7 comments, 👍1 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use **skills and sub‑agents enough** | Indicates a gap between available extensibility and the model’s autonomous tool selection, limiting custom workflows. | 6 comments, 👍0 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop **Auto Memory** from retrying low‑signal sessions indefinitely | Prevents wasteful background work and noisy logs when the extraction agent deems a session unpromising. | 5 comments, 👍0 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce **Auto Memory logging** | Addresses privacy concerns and log‑spam from the memory subsystem. | 4 comments, 👍0 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with **“Waiting input”** after completion | Another execution‑tracking bug that leaves the CLI in a false‑waiting state, requiring manual interruption. | 4 comments, 👍3 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Enhance **browser_agent** resilience: Automatic session takeover & lock recovery | Improves reliability of the browser sub‑agent in persistent‑profile scenarios, a common CI/local‑dev use case. | 4 comments, 👍0 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in **Wayland** | Platform‑specific blocker for Linux users running Wayland compositors. | 4 comments, 👍1 |

---  

### 4. Key PR Progress (selected by relevance & impact)  

| # | Title & Link | Change / Fix | Why it matters |
|---|--------------|--------------|----------------|
| [#28987](https://github.com/google-gemini/gemini-cli/pull/28987) | chore(deps): bump **js-yaml** 4.1.1 → 5.3.0 | Security & feature updates for YAML parsing. | Keeps dependency surface current. |
| [#28986](https://github.com/google-gemini/gemini-cli/pull/28986) | chore(deps): bump **puppeteer-core** 24.0.0 → 25.7.0 | New Chromium base, improved CDP support. | Directly impacts browser_agent stability. |
| [#28993](https://github.com/google-gemini/gemini-cli/pull/28993) | chore(deps‑dev): bump **chrome-devtools-mcp** 0.19.0 → 1.7.0 | DevTools protocol improvements for debugging. | Enhances dev‑tool integration. |
| [#28992](https://github.com/google-gemini/gemini-cli/pull/28992) | chore(deps): bump **@google-cloud/logging** 11.2.1 → 12.0.1 | Logging API updates, bug fixes. | Improves observability of CLI runs. |
| [#28991](https://github.com/google-gemini/gemini-cli/pull/28991) | chore(deps): bump **@google-cloud/storage** 7.19.0 → 8.0.0 | Storage client major version (new features, breaking changes). | Enables newer GCS capabilities for artifact handling. |
| [#28985](https://github.com/google-gemini/gemini-cli/pull/28985) | chore(deps): bump **google-auth-library** 10.9.0 → 11.0.2 | Auth refresh token handling, security patches. | Critical for Google‑API authentication flows. |
| [#28990](https://github.com/google-gemini/gemini-cli/pull/28990) | chore(deps): bump **open** 10.1.2 → 11.0.1 | Fixes WSL path handling, adds URL support. | Improves cross‑platform URL opening used by the CLI. |
| [#28989](https://github.com/google-gemini/gemini-cli/pull/28989) | chore(deps‑dev): bump **globals** 16.0.0 → 17.11.0 | Updated lint globals for newer JS features. | Helps maintain code quality in dev dependencies. |
| [#28988](https://github.com/google-gemini/gemini-cli/pull/28988) | chore(deps): bump **@google/genai** 1.30.0 → 2.17.1 | Latest Gemini model client, new tooling support. | Directly upgrades the underlying model interface. |
| [#28983](https://github.com/google-gemini/gemini-cli/pull/28983) | fix(core): detect mixed line endings instead of flagging CRLF on a single match | More robust line‑ending detection for mixed‑format files. | Prevents false‑positive CRLF warnings in repos with mixed LF/CRLF. |
| [#28975](https://github.com/google-gemini/gemini-cli/pull/28975) | fix(core): keep glob results for symlinked workspace roots | Fixes glob returning “No files found” when the workspace root is accessed via a symlink (common on macOS /tmp). | Resolves a frequent workspace‑resolution issue. |
| [#28981](https://github.com/google-gemini/gemini-cli/pull/28981) | fix(cli): stop session retention deleting unrelated sessions on shortId collision | Prevents accidental bulk‑deletion of session files. | Addresses a serious data‑loss bug. |
| [#28980](https://github.com/google-gemini/gemini-cli/pull/28980) | fix(core): clear OAuth callback timeout when the callback server closes | Ensures OAuth timers are cleaned up on success or failure. | Avoids lingering timers that could block subsequent flows. |
| [#28069](https://github.com/google-gemini/gemini-cli/pull/28069) | fix(core): strip trailing periods from error URLs | Cleans up malformed URLs in error messages. | Improves readability of error output. |

---  

### 5. Feature Request Trends ( distilled from open Issues )  

- **AST‑aware tooling** – Multiple epics (#22745, #22746) asking for precise syntax‑tree based reads/search to reduce token churn and improve navigation.  
- **Sub‑agent & skill utilization** – Requests for the model to autonomously pick skills/sub‑agents (#21968) and to surface sub‑agent trajectories for inspection (#22598).  
- **Memory system quality** – Calls for smarter Auto Memory handling: stop retrying low‑signal sessions (#26522), deterministic redaction (#26525), quarantine invalid patches (#26523), and overall quality improvements (#26516).  
- **Browser agent resilience** – Automatic session takeover, lock recovery (#22232) and Wayland compatibility (#21983).  
- **Task tracking persistence** – Replace in‑context WriteToDo with file‑based CRUD storage (#18836) to avoid context rot.  
- **Agent self‑awareness** – Ability to explain its own CLI flags, hotkeys, and self‑execution (#21432).  
- **Tactful extraction & sandboxing** – Zero‑dependency OS sandboxing to harness the model’s native bash fluency safely (#19873, #19561).  

---  

### 6. Developer Pain Points (recurring frustrations)  

- **Agent hangs / stalls** – Generalist agent indefinite waits (#21409) and shell‑command “Waiting input” false states (#25166) disrupt workflows.  
- **Misreported termination** – Sub‑agents reporting GOAL success after hitting MAX_TURNS (#22323) hides real failures.  
- **Memory subsystem noise** – Auto Memory repeatedly retrying low‑signal sessions and logging excessive data (#26522, #26525).  
- **Symlink & workspace resolution** – Agents not recognizing symlinked agent files (#20079) and glob failures on symlinked roots (#28975).  
- **Tool‑limit errors** – 400 responses when >128 tools are presented (#24246), indicating a need for smarter tool scoping.  
- **Browser agent fragility** – Failures under Wayland (#21983) and ignored settings.json overrides (#22267).  
- **Dependency churn** – Frequent major version bumps (e.g., @google-cloud/storage 8.0.0) require vigilance to avoid breaking changes.  

---  

*Prepared for the Gemini CLI developer community – stay tuned for next week’s updates.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

1. **Today's Highlights**  
The latest Copilot CLI release, v1.0.81-8, introduces xhigh reasoning effort support for Grok 4.6 and improves plugin/agent live updates via local directory sourcing. Several persistent issues (e.g., session memory failures, Windows permission errors, and cloud session instability) highlight critical pain points in enterprise workflows and cross-platform compatibility. Feature requests emphasize AI control granularity (e.g., inline plan annotations, model configuration flexibility), while PR activity remains low with only a README rename detected.  

2. **Releases**  
- **v1.0.81-8**:  
  - **Added**: xhigh reasoning effort support for Grok 4.6.  
  - **Improved**: Live-syncing plugins/agents from local directories (no `/plugin update` required), enhanced skill/agent discovery.  

[Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.81-8)  

3. **Hot Issues**  
- **[#2306](https://github.com/github/copilot-cli/issues/2306)**: Enterprise users face intermittent "not authorized" errors affecting 2–3 weekly sessions. 3 👍 reactions highlight friction in enterprise policy enforcement.  
- **[#4535](https://github.com/github/copilot-cli/issues/4535)**: `store_memory` fails in v1.0.81 prereleases due to missing instance ID. 5 comments signal urgency in session memory functionality.  
- **[#4572](https://github.com/github/copilot-cli/issues/4572)**: Background compaction drops parallel tool results, causing HTTP 400s during long-context tasks. Directly impacts reliability for complex workflows.  
- **[#4570](https://github.com/github/copilot-cli/issues/4570)**: Windows plugin install/update fails with "Access denied" when VS Code is running. Blocks developers in hybrid IDE environments.  
- **[#4566](https://github.com/github/copilot-cli/issues/4566)**: Agents acknowledge work but fail to execute tools. 1 👍 emphasizes wasted user effort in agent workflows.  
- **[#4414](https://github.com/github/copilot-cli/issues/4414)** (Closed): BYOK providers returned 403 errors before reaching external endpoints, breaking custom infra integrations.  
- **[#4560](https://github.com/github/copilot-cli/issues/4560)**: "Model auto" always disables reasoning efforts, limiting user control over AI behavior.  
- **[#4561](https://github.com/github/copilot-cli/issues/4561)**: Session cancellations incorrectly marked as "end_turn" instead of "cancelled," breaking ACP protocols.  
- **[#4567](https://github.com/github/copilot-cli/issues/4567)**: Users demand explicit trust for HTTP OTLP endpoints to enable local telemetry collectors without compromising security.  
- **[#4568](https://github.com/github/copilot-cli/issues/4568)**: `--cloud` owner picker hangs or times out, with subsequent retries hitting rate limits.  

4. **Key PR Progress**  
- **[#4573](https://github.com/github/copilot-cli/pull/4573)**: Rename `README.md` to `README.mdmain` (likely a typo; minimal impact but reflects ongoing repo maintenance.  

5. **Feature Request Trends**  
- **Control & Transparency**: Inline plan annotations for feedback loops, explicit reasonins effort configuration, and improved session/memory management.  
- **Cross-Platform Stability**: Windows-specific fixes (e.g., plugin permissions, VS Code integration).  
- **Enterprise/Customization Needs**: BYOK provider support, OTLP exporter flexibility, and cloud session reliability.  
- **Agent & Tool Enhancements**: Fixes for agent tool execution and ACP protocol compliance.  

6. **Developer Pain Points**  
- **Enterprise Policy Barriers**: Authentication errors (#2306) disrupt workflow consistency.  
- **Session Memory Failures**: Critical bug (#4535) breaks personalization features.  
- **OS-Specific Issues**: Windows VS Code conflict (#4570) creates toolchain friction.  
- **Agent Execution Flaws**: Broken tool/toolchain execution (#4566) reduces productivity.  
- **BYOK Failures**: Closed issue (#4414) underlines challenges in custom AI provider integrations.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

---

# Kimi Code CLI Community Digest - 2026-08-24  

## 1. Today's Highlights  
A new PR introduces **Build Remote Agent** phone pairing (via the `gbr/1` protocol) for enhanced device interoperability. Meanwhile, the standout issue remains **persistent memory functionality** (#1283), with minimal community engagement despite significant feature requests. No official releases were published in the last 24 hours.  

---

## 2. Releases  
No new releases reported in the last 24 hours.  

---

## 3. Hot Issues  
### #1283 [OPEN] Feature Request: Memory System  
**Author**: CatKang | Created: 2026-02-27 | Updated: 2026-08-23 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
Proposes a **memory system** for persistent context storage (both automatic and user-defined). Despite 27 comments and 2+ months of discussion, it lacks community validation (0 👍). High-priority for long-term usability but stalled.  

### #2604 [OPEN] Allowance Reduction Bug  
**Author**: tobiu | Created: 2026-08-15 | Updated: 2026-08-23 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2604)  
User reports a **4× reduction in token allowances** (via self-tracked API calls) for Vivace-tier memberships since mid-July. The issue raises concerns about unannounced changes to metering or billing logic. No community reactions yet.  

### #2484 [CLOSED] (No Details)  
**Author**: lin200083 | Created: 2026-07-04 | Updated: 2026-08-23 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2484)  
Issue title contains only an empty value (".") and no comments/likes. Likely a placeholder or accidental submission.  

---

## 4. Key PR Progress  
### #2616 [OPEN] Add Build Remote Agent phone pairing  
**Author**: LinespottingPrivate | Created: 2026-08-23 | Updated: 2026-08-23 | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2616)  
Adds support for **phone-to-session pairing** via the GBR protocol (`gbr/1`), enabling iOS/Android apps to spectate/inject actions into local sessions. Phone acts as a "veto" but not coordinator.  

### #2614 [OPEN] docs(plugins): Document Security and Persistent Data  
**Author**: QIANLING-0831 | Created: 2026-08-20 | Updated: 2026-08-23 | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2614)  
Clarifies plugin security requirements and data persistence rules for `plugin.json` and `~/.kimi/plugins/`. Addresses documentation gaps, not code changes.  

*Note*: Only two PRs detected. No additional PR activity reported in the last 24 hours.  

---

## 5. Feature Request Trends  
- **Persistent Memory Systems**: The dominant request, seeking long-term context storage for workflows.  
- **Multi-Device Interaction**: Emergent interest in Remote Agent protocols for phone/desktop integration.  
- **Plugin Security/Clarity**: Users desire better documentation for third-party extensibility.  

---

## 6. Developer Pain Points  
- **Unexplained Quota Reduction**: Users like *tobiu* report significant token allowance drops with no official explanation ([#2604](https://github.com/MoonshotAI/kimi-cli/issues/2604)).  
- **Lack of Feature Prioritization**: The Memory System request (#1283) has 6+ months of discussion but remains unaddressed, highlighting unclear roadmap communication.  

--- 

*Data note: Community engagement (likes/comments) is uniformly low across tracked items, suggesting low awareness or satisfaction.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-08-24

## Today's Highlights
The core team focused heavily on session reliability and workspace management, with 7 merged PRs addressing stream errors, database locking, and cross-instance tool validation. Key fixes include auto-retry for empty stop responses and proper handling of workspace-backed locations in the TUI.

## Releases
No releases in the last 24 hours.

## Hot Issues
1. **[#1034](https://github.com/anomalyco/opencode/issues/1034)** Local Ollama tool calling failing - 31 comments, 16 👍. Critical for offline/local model users.
2. **[#44528](https://github.com/anomalyco/opencode/issues/44528)** MCP tool's structuredContent being dropped - 4 comments, 1 👍. Affects advanced MCP integrations.
3. **[#44300](https://github.com/anomalyco/opencode/issues/44300)** Zen API endpoints failing with tools - 4 comments, 1 👍. Impacts free tier usage.
4. **[#44473](https://github.com/anomalyco/opencode/issues/44473)** Big Pickle network errors frequent - 2 comments. Affects reliability of key model.
5. **[#31563](https://github.com/anomalyco/opencode/issues/31563)** Bun segfault on macOS shutdown - 2 comments. Platform-specific crash issue.
6. **[#44530](https://github.com/anomalyco/opencode/issues/44530)** Interrupted state after update - 2 comments. Post-update stability concern.
7. **[#44556](https://github.com/anomalyco/opencode/issues/44556)** Session hangs with question tool - 2 comments, 0 👍. CLI-specific workflow bug.
8. **[#44447](https://github.com/anomalyco/opencode/issues/44447)** Big Pickle frustrating to use - 2 comments. Recurring reliability issue.
9. **[#44513](https://github.com/anomalyco/opencode/issues/44513)** Helldivers 2 GameGuard segfaults - 2 comments. Windows-specific compatibility.
10. **[#44101](https://github.com/anomalyco/opencode/issues/44101)** Duplicate repos show wrong path - 3 comments. Desktop project identity issue.

## Key PR Progress
1. **[#44559](https://github.com/anomalyco/opencode/pull/44559)** Fix: Apply deny rules to resumed sessions. Resolves #44556 by ensuring non-interactive modes properly restrict question/plan tools.
2. **[#44558](https://github.com/anomalyco/opencode/pull/44558)** Fix: Serialize database init across processes. Prevents "database is locked" errors in concurrent `opencode run` instances.
3. **[#44532](https://github.com/anomalyco/opencode/pull/44532)** Added finishReason logging and boot-time crash recovery. Improves observability for stream termination reasons.
4. **[#44565](https://github.com/anomalyco/opencode/pull/44565)** Fix: Package conditional transpilers for `@opencode-ai/codemode`. Restores package loading with workerd resolver.
5. **[#44545](https://github.com/anomalyco/opencode/pull/44545)** TUI: Discoverable queue controls with terminal-safe keybinds. Adds ctrl+enter fallbacks for VS Code terminal compatibility.
6. **[#44566](https://github.com/anomalyco/opencode/pull/44566)** TUI: Show effective default model when session has null model. Fixes misleading "No provider selected" display.
7. **[#44567](https://github.com/anomalyco/opencode/pull/44567)** Core: Accept null as omitted for optional tool inputs. Improves JSON Schema/Effect schema compatibility.
8. **[#44536](https://github.com/anomalyco/opencode/pull/44536)** Session: Auto-retry empty stop responses. Addresses providers returning clean stops with 0 tokens.
9. **[#44544](https://github.com/anomalyco/opencode/pull/44544)** AI: Preserve display on enabled thinking. Fixes Anthropic SDK config handling.
10. **[#44535](https://github.com/anomalyco/opencode/pull/44535)** Plugin: Preserve cross-instance tool schema validation. Resolves Effect instance compatibility issues.

## Feature Request Trends
- **Tool and session control**: Requests for configurable default thinking block visibility (#28322) and TODO management tools for V2 (#42421)
- **Project/workspace management**: Options to remove projects (#37280) and fix duplicate repo identity issues (#44101)
- **UI/UX improvements**: Configurable TUI defaults and better session restoration
- **Error handling**: More robust recovery from network errors and stream interruptions

## Developer Pain Points
- **Remote model instability**: Big Pickle and other models experiencing frequent mid-task interruptions requiring manual continuation
- **Workspace/location handling**: Multiple issues with workspace-backed locations not resolving paths correctly
- **Concurrency issues**: Database locking with parallel `opencode run` processes
- **Terminal compatibility**: VS Code and other terminal environments lacking proper keybind support
- **MCP integration**: Loss of structuredContent breaking advanced MCP tool workflows

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑08‑24**

---

### 1. Today’s Highlights  
- The Pi repo is in a steady state with no new releases; the focus is on bug‑fixes, documentation polish, and community‑driven feature requests.  
- Ten high‑impact issues and ten significant PRs were merged or closed in the last 24 h, signalling strong momentum around UI/UX, model discoverability, and tooling reliability.

---

### 2. Releases  
*None* – the latest published version remains 0.84.2.

---

### 3. Hot Issues  *(10 noteworthy items)*  

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#7683** | *“Let components receive mouse events on their own rows”* (closed) | Enables fine‑grained UI interaction; allows a component to decide whether mouse clicks belong to its own layout box. | Highly requested (11 comments, 👍 0) – seen as a step toward richer TUI experiences. <https://github.com/badlogic/pi-mono/issues/7683> |
| **#8167** | *“Cannot pick a model with built‑in llama.cpp support”* (closed) | Users can load/unload llama.cpp models via `/llama` but they never appear in the model picker, breaking workflow. | Frustrating gap; 10 comments, 👍 0 – many ask for model‑list sync with llama‑server. <https://github.com/badlogic/pi-mono/issues/8167> |
| **#7885** | *“npm search not indexing newly published pi‑packages”* (closed) | New packages (e.g., `pi-affix-prompt`) are invisible on the pi.dev gallery because the gallery mirrors npm search. | Hinders discovery; 7 comments, 👍 0 – community urges better package indexing. <https://github.com/badlogic/pi-mono/issues/7885> |
| **#5932** | *“Expose ctx.navigateTree() to agents”* (open) | `navigateTree()` exists on `ExtensionCommandContext` but not on normal `ExtensionContext`; agents need it for custom goal handling. | Constructive discussion (7 comments, 👍 2) – a clear API gap. <https://github.com/badlogic/pi-mono/issues/5932> |
| **#8183** | *“Document Windows Terminal’s Ctrl+Shift+F conflict with fullscreen transcript search”* (closed) | Conflicting key‑bindings cause accidental activation of Windows Terminal’s Find when users intend to search Pi transcripts. | Practical usability issue; 6 comments, 👍 0 – documentation fix appreciated. <https://github.com/badlogic/pi-mono/issues/8183> |
| **#8452** | *“Improve default compaction prompt for continuation‑state fidelity”* (closed) | Current compaction prompts preserve prose over fidelity; agents need better merging of repeated summaries. | Valued improvement; 5 comments, 👍 0 – many cite loss of context in long sessions. <https://github.com/badlogic/pi-mono/issues/8452> |
| **#8344** | *“Per‑tool output expansion in the fullscreen TUI”* (closed) | Users want independent mouse‑driven expand/collapse of individual tool output blocks rather than a global toggle. | UI/UX request; 5 comments, 👍 0 – enhances interactivity. <https://github.com/badlogic/pi-mono/issues/8344> |
| **#7724** | *“Cold restore replays an overflow assistant removed by live recovery”* (open) | After a context overflow, restored sessions re‑inject truncated assistant messages, corrupting history. | Critical session‑integrity bug; 4 comments, 👍 0 – needs robust replay handling. <https://github.com/badlogic/pi-mono/issues/7724> |
| **#8469** | *“Add deepseek‑v4‑flash‑vision‑exp to DeepSeek model catalog”* (closed) | DeepSeek’s new vision model (`deepseek‑v4‑flash‑vision‑exp`) is missing from the catalog, limiting its use. | Straightforward addition; 4 comments, 👍 0 – community eager for broader model support. <https://github.com/badlogic/pi-mono/issues/8469> |
| **#8539** | *“Show llama.cpp unloaded models in the /model list”* (closed) | Unloaded llama.cpp models are invisible in the UI, forcing manual `/llama` loads. | Frequently requested (1 comment, 👍 0) – aligns with PR #8535. <https://github.com/badlogic/pi-mono/issues/8539> |

---

### 4. Key PR Progress  *(10 important PRs)*  

| # | Title | Summary of change | Link |
|---|-------|-------------------|------|
| **#8487** | *fix(coding‑agent): expose finish reason compatibility override* | Makes the `finish_reason` compatibility flag part of the public type definitions. | <https://github.com/badlogic/pi-mono/pull/8487> |
| **#8482** | *docs(coding‑agent): point custom footer docs at ctx.getContextUsage()* | Corrects documentation to reference the proper context‑usage API. | <https://github.com/badlogic/pi-mono/pull/8482> |
| **#8535** | *feat(coding‑agent): For llama.cpp, also show unloaded models in `/model`* | Extends the model list to include models that are lazily loaded on demand. | <https://github.com/badlogic/pi-mono/pull/8535> |
| **#8538** | *Add Build Remote Agent phone pairing (gbr/1)* | Introduces a new pairing device (Build Remote Agent) for the desktop agent. | <https://github.com/badlogic/pi-mono/pull/8538> |
| **#8536** | *fix(ai): normalize tool‑result history for strict OpenAI‑compatible providers* | Normalises tool‑result payloads so strict providers (e.g., Kimi) no longer reject malformed histories. | <https://github.com/badlogic/pi-mono/pull/8536> |
| **#8479** | *fix: expose unloaded llama.cpp presets* | Allows presets from `llama-server --models-preset` to be selectable without manual loading. | <https://github.com/badlogic/pi-mono/pull/8479> |
| **#8032** | *feat(tui): let components receive mouse events on their own rows* | Implements the optional `Component.onMouse(event)` hook referenced in Issue #7683. | <https://github.com/badlogic/pi-mono/pull/8032> |
| **#8532** | *fix(coding‑agent): cap grep and find child output so one line cannot kill the parent* | Adds line‑length caps to readline streams to prevent `RangeError` from overly long strings. | <https://github.com/badlogic/pi-mono/pull/8532> |
| **#8524** | *fix(coding‑agent): retain working status until settled* | Keeps the “Working…” indicator alive until `agent_settled` callbacks finish, preserving retry continuity. | <https://github.com/badlogic/pi-mono/pull/8524> |
| **#8512** | *feat(coding‑agent): add optional PowerShell tool* | Introduces a PowerShell execution tool to improve Windows‑native scripting support. | <https://github.com/badlogic/pi-mono/pull/8512> |

---

### 5. Feature Request Trends  

- ** richer TUI interaction:** Multiple requests ask for components to receive mouse events on their own rows (#7683, #8032) and for per‑tool output blocks to be independently expandable (#8344).  
- ** model discoverability & completeness:** Users repeatedly request that the model picker reflect **all** available models, including unloaded llama.cpp models (#8539, #8535) and newly released DeepSeek vision models (#8469).  
- ** API ergonomics:** There is a clear desire to expose additional context methods (`ctx.navigateTree`) and to make tool invocation more flexible (mid‑sentence skill calls, #8457).  
- ** documentation & onboarding:** Small but frequent requests focus on clarifying key‑binding conflicts (#8183) and exposing usage metadata (#8482).  
- ** reliability & error handling:** Issues concerning session replay integrity (#7724), provider timeouts (#8531), and raw control‑character handling in edit arguments (#8513) show a trend toward more robust, predictable runtime behavior.

---

### 6. Developer Pain Points  

- **Key‑binding collisions:** Windows Terminal’s `Ctrl+Shift+F` conflicts with Pi’s fullscreen transcript search, causing accidental activation.  
- **Incomplete model listings:** Both llama.cpp unloaded models and newly added DeepSeek vision models are missing from the UI model catalog, forcing manual loads.  
- **Package discovery:** npm search does not index newly published `pi-` packages, hiding them from the pi.dev gallery.  
- **Raw control characters in edits:** Stringified edit arguments containing unescaped newlines/tabs cause `JSON.parse` failures and silent failures (#8513, #3370).  
- **Trailing spaces in output:** Copy‑pasting agent output preserves trailing spaces, which breaks downstream tools (e.g., vim).  
- **Session & state management:** Cold‑restore replay re‑introduces truncated assistant messages; session manager can leave stale leaf nodes after aborts.  
- **Tool output caps:** `grep`/`find` child processes can exceed V8’s string length limits, causing crashes.  

These pain points are actively discussed across issues and PRs, indicating a strong community drive toward more polished, reliable, and developer‑friendly tooling.  

--- 

*All links point to the official GitHub repository: https://github.com/badlogic/pi-mono.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Today's Highlights**  
The nightly build v0.22.0‑nightly.20260823.1007bcacfc was published with a web‑shell fix that now passes the workspace cwd when opening a session from the overview panel. Several high‑impact PRs landed, including a CI reviewer‑assignment workflow, a fix that pins the verified Git identity for residue probes, and improvements to the `/review` verification pipeline.

---

### Releases  
- **v0.22.0‑nightly.20260823.1007bcacfc** – adds a fix in `web-shell` so that the session workspace cwd is correctly passed when launching from the overview panel (see PR #9730). No version bump; intended for testing the latest code‑base changes.

---

### Hot Issues  *(10 noteworthy items)*  

| # | Issue (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| 1 | **[#7585](https://github.com/QwenLM/qwen-code/issues/7585)** – *Direct External Context Provider Profile* (feature‑request) | Proposes a private monorepo integration with on‑demand and Auto‑Recall profiles, enabling a single CLI process to fetch repository‑shared context bound to an admin‑controlled profile. | High interest; many comments (13) and a clear need for tighter monorepo support. |
| 2 | **[#5975](https://github.com/QwenLM/qwen-code/issues/5975)** – *API stream activity timeout* (bug) | After upgrading to v0.19.3 users repeatedly see “No stream activity” errors, causing silent hangs. | Reported as a blocking bug; 11 comments, 1 👍, indicating urgency. |
| 3 | **[#8625](https://github.com/QwenLM/qwen-code/issues/8625)** – *Chinese input pinyin rendering in Windows terminal* (UI) | Chinese characters show pinyin that is hard to read, hurting usability for Chinese‑speaking developers. | 8 comments, no up‑votes yet; a clear UI polish request. |
| 4 | **[#9089](https://github.com/QwenLM/qwen-code/issues/9089)** – *PAT‑bearing job isolation* (security) | Current GitHub Actions runners share a host with untrusted branch code, creating a persistent‑pool attack surface. | 7 comments, high‑priority P1; security‑focused discussion. |
| 5 | **[#9219](https://github.com/QwenLM/qwen-code/issues/9219)** – *Presubmit overlap detection limited to exact lines* (bug) | Multi‑line and semantic duplicate comments are missed, leading to false‑negative conflict reports. | 5 comments, indicates a need for richer diff matching. |
| 6 | **[#9827](https://github.com/QwenLM/qwen-code/issues/9827)** – *permissions.allow does not restrict tool schemas* (security/permissions) | API calls still contain the full built‑in tool set even when `permissions.allow` is used, undermining the allowlist. | 4 comments, highlights a gap between UI and backend enforcement. |
| 7 | **[#9016](https://github.com/QwenLM/qwen-code/issues/9016)** – *Vertex AI cannot use ADC* (auth) | Vertex AI requires an API key; using ADC correctly still yields 401 errors. | 4 comments, points to a mis‑configuration in the auth flow. |
| 8 | **[#8586](https://github.com/QwenLM/qwen-code/issues/8586)** – *Track activeWork & background Agent recovery* (feature) | Adds a deep‑health fact (`activeWork`) to enable recovery of background agents that outlive their foreground prompt. | 4 comments, aligns with roadmap for autonomous agents. |
| 9 | **[#8769](https://github.com/QwenLM/qwen-code/issues/8769)** – *Rebuild /review orchestration on workflow engine* (enhancement) | Moves Step 3‑5 of `/review` from model‑driven execution to a deterministic workflow engine, improving reliability. | 4 comments, reflects a strategic shift toward workflow‑based automation. |
|10| **[#9789](https://github.com/QwenLM/qwen-code/issues/9789)** – *Explicit do‑not‑refute list for verifiers* (enhancement) | Clarifies when “too speculative” should be rejected, complementing existing confidence flags. | 2 comments, requested for clearer verification criteria. |

---

### Key PR Progress  *(10 important PRs)*  

| # | PR (link) | Summary |
|---|-----------|---------|
| 1 | **[#9813](https://github.com/QwenLM/qwen-code/pull/9813)** – *feat(ci): request an area reviewer on PRs by changed‑file paths* | Introduces a workflow that auto‑assigns an area owner based on the diff’s file paths, tightening review coverage. |
| 2 | **[#9742](https://github.com/QwenLM/qwen-code/pull/9742)** – *fix(review): pin the verified git identity across the residue probe* | Rebases the residue‑probe logic onto the current `main` and ensures the verified Git identity is stable for all subsequent checks. |
| 3 | **[#9441](https://github.com/QwenLM/qwen-code/pull/9441)** – *fix(core): show edit/exec diffs when a PreToolUse hook returns ask* | When a hook asks for user confirmation, the tool call is bounced back to `awaiting_approval` with a clear diff, improving interactive safety. |
| 4 | **[#9771](https://github.com/QwenLM/qwen-code/pull/9771)** – *feat(autofix): keep the round status comment live during long rounds* | Starts a heartbeat loop so PR status updates stay current while long autofix rounds run, preventing “dead” appearance. |
| 5 | **[#9793](https://github.com/QwenLM/qwen-code/pull/9793)** – *fix(core): surface nested sub‑agent approvals under background parents* | Makes nested `TOOL_WAITING_APPROVAL` events visible to the enclosing agent, preventing hangs in multi‑agent flows. |
| 6 | **[#9741](https://github.com/QwenLM/qwen-code/pull/9741)** – *fix(review): screen content filters before the probe tree’s restore* | Ensures content filters are applied before the scratch‑tree is restored, fixing edge‑case checkout failures. |
| 7 | **[#9805](https://github.com/QwenLM/qwen-code/pull/9805)** – *feat(review): promote language‑pitfall and wrapper/proxy checks out of Agent 1a* | Splits language‑pitfall and wrapper/proxy checks into dedicated high‑effort steps, improving review thoroughness. |
| 8 | **[#9769](https://github.com/QwenLM/qwen-code/pull/9769)** – *feat(web-shell): unblock git update on dirty working tree* | The “Update Project” action now offers resolution options when the workspace is dirty, instead of failing outright. |
| 9 | **[#9740](https://github.com/QwenLM/qwen-code/pull/9740)** – *feat(review): make Step 4 verification execution‑grade* | Adds execution‑grade evidence forms to `/review` Step 4, enabling verifiers to produce concrete rendering proof. |
|10| **[#9739](https://github.com/QwenLM/qwen-code/pull/9739)** – *feat(core): bind PRs created via `gh pr create` in the session shell* | Extends session‑PR binding to cover PRs created by the agent’s CLI, closing the last source‑of‑truth gap. |

---

### Feature Request Trends  

- **Monorepo & External Context Integration** – A recurring request (e.g., #7585) for a private, admin‑bound external context provider that supports on‑demand and Auto‑Recall profiles.  
- **Unified Local Control** – Multiple issues (#9075, #9739) ask for consolidating CLI and Tauri‑based Local Control into a single daemon‑owned implementation.  
- **Drag‑Drop File Support** – Users want to drag files from the explorer or tabs directly into the chat (#9743), improving workflow fluidity.  
- **Source‑of‑Truth Configuration** – Centralizing the approval‑mode value domain (#9145) to avoid drift across language files.  
- **Robust Slash‑Command Registration** – Intermittent native slash‑command availability (#9821) points to async race conditions in the Skill‑tool surface.  
- **Permission‑Aware Tool Schema** – Ensuring the API request respects the `permissions.allow` allowlist (#9827) is a frequent security‑related concern.  
- **Deep Daemon Health & Agent Recovery** – Adding an explicit `activeWork` fact for background‑agent health (#8586) reflects a push toward autonomous, long‑running agents.  
- **Deterministic Review Orchestration** – Moving `/review` Steps 3‑5 to a workflow engine (#8769) aims for reproducible fan‑out and convergence.  

These trends indicate a strong focus on **integration reliability, security isolation, UI polish, and deterministic automation** across the Qwen Code ecosystem.

---

### Developer Pain Points  

- **UI Rendering Instability** – The ink + React patched TUI (issues #8662, #9743) suffers from flicker and OOM in dev builds, hindering a smooth developer experience.  
- **Permission/Allowlist Mismatch** – `permissions.allow` UI changes do not restrict the underlying API payload, leading to unexpected tool exposure (#9827).  
- **Session Continuity Bugs** – Transport‑continuation recovery leaves transcripts mid‑sentence (#8094), session catalog refreshes repeatedly (#9562), and title‑echo normalization inconsistencies (#9772) disrupt workflow continuity.  
- **Cross‑Platform Test Flakiness** – Windows and macOS CI lanes fail repeatedly (#9728), requiring platform‑specific patches and delaying releases.  
- **Inconsistent Slash‑Command Availability** – Native slash commands sometimes disappear from the Skill‑tool surface, causing “not found” errors (#9821).  
- **VS Code Settings Schema Rejection** – Documented `prompt` hooks are rejected by the VS Code companion schema (#8752), creating a mismatch between documentation and runtime behavior.  
- **Verification Clarity** – Verifiers lack an explicit “do‑not‑refute” list, making it hard to enforce low‑confidence or speculative decisions (#9789).  

Addressing these pain points would markedly improve developer productivity, system reliability, and overall adoption of Qwen Code.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here's a thinking process:

1.  **Understand User Request:**
   - Role: Technical analyst focused on AI developer tools
   - Task: Generate DeepSeek TUI community digest for 2026-08-24
   - Data source: github.com/Hmbown/DeepSeek-TUI (CodeWhale repo)
   - Output structure: 6 sections with specific content requirements
   - Style: concise, professional, technical developer-focused
   - Must include GitHub links for each item

2.  **Analyze the Data:**
   - I need to carefully go through the provided GitHub data
   - Latest Releases (last 24h): v0.9.11 with notes about codewhale, deprecated deepseek-tui, etc.
   - Latest Issues (updated in last 24h): 50 total, showing top 30 by comment count. I need to pick 10 noteworthy ones.
   - Latest Pull Requests (updated in last 24h): 21 total, showing top 20 by comment count. I need to pick 10 important ones.
   - I need to distill feature requests, developer pain points, etc.

   Let me parse the data carefully.

   **Latest Releases (last 24h):**
   - v0.9.11: description mentions Codewhale is public product from Shannon Labs, codewhale command, npm package, release-asset names remain lowercase technical identifiers. Legacy npm package `deepseek-tui` is deprecated and receives no further releases. Users coming from v0.8.x legacy `deepseek` / `d...` (truncated)

   **Latest Issues (updated in last 24h): Total: 50 items; showing top 30 by comment count:**
   I'll list them with their key points:
   #3368 [OPEN] [security, reliability] v0.9.3: Land and verify security hardening/code-scanning fixes - Hmbown, Created: 2026-06-21, Updated: 2026-08-23, Comments: 29, Likes: 0
   #4326 [OPEN] [bug, tui, subagents, performance] Perf: explain and bound RSS after cancelling a 32-worker storm - Hmbown, Created: 2026-07-09, Updated: 2026-08-23, Comments: 6, Likes: 0
   #3957 [OPEN] [enhancement, cleanup, tui, ux, reliability] v0.9.3 Refactor: split shared modal infrastructure and owned views - Hmbown, Created: 2026-07-02, Updated: 2026-08-23, Comments: 4, Likes: 0
   #3306 [OPEN] [enhancement, rust, cleanup, reliability, performance] v0.9.3 Refactor: converge runtime ownership, delete duplication, and ship one executable - Hmbown, Created: 2026-06-18, Updated: 2026-08-23, Comments: 4, Likes: 0
   #5583 [OPEN] [v0.9.12] Workflow responseSchema failures need bounded repair and raw-output receipts - jbovard2016, Created: 2026-08-23, Updated: 2026-08-24, Comments: 3, Likes: 0
   #5582 [OPEN] [v0.9.12] Workflow owner snapshots collapse Degraded into Completed - jbovard2016, Created: 2026-08-23, Updated: 2026-08-23, Comments: 3, Likes: 0
   #5547 [OPEN] [reliability] CI: Linux workspace tests do not run for non-mirrored PR branches (ubuntu job is a placeholder) - Hmbown, Created: 2026-08-23, Updated: 2026-08-23, Comments: 3, Likes: 0
   #5290 [OPEN] [bug, localization, ux] fix(web): restore clickable controls on non-English routes - Hmbown, Created: 2026-08-08, Updated: 2026-08-23, Comments: 3, Likes: 0
   #4394 [OPEN] [bug, documentation, enhancement, context, compaction, reliability] Compaction: publish and enforce a structured survival contract - Hmbown, Created: 2026-07-16, Updated: 2026-26-08-23, Comments: 3, Likes: 0
   #3145 [OPEN] [enhancement, tui, ux, tools, reliability] v0.9.3: Add visual inspection artifacts for browser and UI tasks - Hmbown, Created: 2026-06-12, Updated: 2026-08-23, Comments: 3, Likes: 0
   #5585 [OPEN] [bug] Test setup_confirm_toast_names_secret_store_and_global_scope dies by stack overflow - Hmbown, Created: 2026-08-23, Updated: 2026-08-23, Comments: 2, Likes: 0
   #5573 [OPEN] v0.9.12: milestone tracker — start here (pick order) - Hmbown, Created: 2026-08-23, Updated: 2026-08-23, Comments: 2, Likes: 0
   #3954 [OPEN] [enhancement, cleanup, tui, ux, reliability] v0.9.3 Refactor: split setup wizard constitution, runtime, provider, and persistence steps - Hmbown, Created: 2026-07-02, Updated: 2026-08-23, Comments: 2, Likes: 0
   #5587 [OPEN] Dead-code sweep phases 2-4: 75 test-only markers, ~242 stale allows, blanket-allow conversions - Hmbown, Created: 2026-08-23, Updated: 2026-08-23, Comments: 1, Likes: 0
   #5566 [CLOSED] [v0.9.12] R1: bound runaway spend — finite max_steps + cumulative wall-clock defaults - Hmbown, Created: 2026-08-23, Updated: 2026-08-23, Comments: 1, Likes: 0
   #5263 [OPEN] [enhancement, rust, model-lab, subagents] v0.9.5: prompt assembly + role tiers in `crates/core` - Hmbown, Created: 2026-08-07, Updated: 2026-08-23, Comments: 1, Likes: 0
   #5103 [OPEN] [bug, migration, workflow-runtime, agent-ready, agent-in-progress, tui, subagents, reliability] Rename DeepSeekClient / deepseek_client legacy internals to provider-neutral types - Hmbown, Created: 2026-08-03, Updated: 2026-08-23, Comments: 1, Likes: 0
   #5094 [OPEN] [documentation, enhancement, model-lab, agent-ready, tui, responses-api] Let named custom providers select a typed Responses dialect - Hmbown, Created: 2026-08-02, Updated: 2026-08-23, Comments: 1, Likes: 0
   #5093 [OPEN] [enhancement, agent-ready, tui, responses-api, reliability] Extract Responses dialect policy behind a language-neutral conformance harness - Hmbown, Created: 2026-08-02, Updated: 2026-08-23, Comments: 1, Likes: 0
   #5092 [OPEN] [enhancement, model-lab, agent-ready, tui, responses-api, reliability] Make Responses API behavior provider-profiled instead of provider-hard-coded - Hmbown, Created: 2026-08-02, Updated: 2026-08-23, Comments: 1, Likes: 0
   #4173 [OPEN] [enhancement, rust, cleanup, tui, tools, reliability] Architecture: de-hardcode model provider and tool registries - Hmbown, Created: 2026-07-07, Updated: 2026-08-23, Comments: 1, Likes: 0
   #4167 [OPEN] [enhancement, rust, cleanup, tui, reliability] v0.9.3 architecture D-3: merge JobManager and TaskManager - Hmbown, Created: 2026-07-07, Updated: 2026-08-23, Comments: 1, Likes: 0
   #4069 [OPEN] [documentation, enhancement, context] feat: indexing privacy controls (.codewhaleignore) - Hmbown, Created: 2026-07-07, Updated: 2026-08-23, Comments: 1, Likes: 0
   #3981 [OPEN] [documentation, enhancement, tui, tools] v0.9.3 Tools: add a debugger protocol surface for breakpoints, stack, and variables - Hmbown, Created: 2026-07-03, Updated: 2026-08-23, Comments: 1, Likes: 0
   #3980 [OPEN] [documentation, enhancement, rust, tools] v0.9.3 Tools: add structural code search and AST-backed edit previews - Hmbown, Created: 2026-07-03, Updated: 2026-08-23, Comments: 1, Likes: 0
   #3977 [OPEN] [documentation, enhancement, tools] v0.9.3 Tools: read notebooks and archive entries as first-class inputs - Hmbown, Created: 2026-07-03, Updated: 2026-08-23, Comments: 1, Likes: 0
   #3975 [OPEN] [enhancement, tui, tools] v0.9.3 Tools: expose LSP navigation, references, rename, and code actions - Hmbown, Created: 2026-07-03, Updated: 2026-08-23, Comments: 1, Likes: 0
   #3358 [OPEN] [bug, enhancement, tui, tools, reliability] v0.9.3: Ship a Playwright-backed browser automation tool - Hmbown, Created: 2026-06-21, Updated: 2026-08-23, Comments: 1, Likes: 0
   #5589 [OPEN] [v0.9.12] Fleet config view: Enter loops back to the same screen, model switching is buried and unclear - Hmbown, Created: 2026-08-23, Updated: 2026-08-23, Comments: 0, Likes: 0
   #5588 [OPEN] Provider neutrality: 18 DeepSeek-exclusive gates that should be provider-neutral - Hmbown, Created: 2026-08-23, Updated: 2026-08-23, Comments: 0, Likes: 0

   **Latest Pull Requests (updated in last 24h): Total: 21 items; showing top 20 by comment count:**
   #5591 [OPEN] Fix:goal continuation cadence fix - part a - M-Maciej, Created: 2026-08-24, Updated: 2026-08-24, Comments: undefined, Likes: 0
   #5576 [OPEN] 0.9.12 integration: must-fix + UX fixes (work-in-progress) - Hmbown, Created: 2026-08-23, Updated: 2026-08-24, Comments: undefined, Likes: 0
   #5590 [CLOSED] ci: run Linux workspace tests on pull requests - wuisabel-gif, Created: 2026-08-23, Updated: 2026-08-24, Comments: undefined, Likes: 0
   #5584 [OPEN] fix(subagents): persist child approval receipts - cyq1017, Created: 2026-08-23, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5574 [OPEN] Add Build Remote Agent phone pairing (gbr/1) - LinespottingPrivate, Created: 2026-08-23, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5525 [CLOSED] refactor(tui): adopt command shapes in utility group (FEAT-018) - aboimpinto, Created: 2026-08-20, Updated: 2026-26-08-23, Comments: undefined, Likes: 0
   #5524 [CLOSED] feat(tui): add multi-file read_lints operation - wuisabel-gif, Created: 2026-08-20, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5544 [CLOSED] feat(web): move docs/subagents and docs/mcp onto the dictionary spine (#5337) - Lstarsky0, Created: 2026-08-22, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5565 [OPEN] docs(release): add unpublished-tag re-cut recovery + external publish gates - Hmbown, Created: 2026-08-23, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5563 [CLOSED] fix(onboarding): show all providers on first run, not local-only - Hmbown, Created: 2026-08-23, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5520 [CLOSED] ... (not fully shown, but listed in series)
   #5561 [CLOSED] fix(engine): auto-retry a reasoning-only clean-stop instead of failing - Hmbown, Created: 2026-08-23, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5560 [CLOSED] feat(web): add Register and Sign in header links to the app - Hmbown, Created: 2026-08-23, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5545 [CLOSED] fix(pricing): bill whole Beijing weekends off-peak for DeepSeek V4 - xyzs996, Created: 2026-08-22, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5559 [CLOSED] fix(release): close pre-tag v0.9.11 truthfulness and tool-output gaps - Hmbown, Created: 2026-08-23, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5535 [OPEN] Supervised operation stack: lifecycle outbox, /relaunch, per-session control socket, and the goal-continuation quiet-period fix - M-Maciej, Created: 2026-08-21, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5406 [CLOSED] feat(tui): prefab provider templates and test-connection (#5350) - Hmbown, Created: 2026-08-15, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5530 [CLOSED] fix(cli): route legacy completions through public binary - wuisabel-gif, Created: 2026-08-21, Updated: 2026-08-23, Comments: undefined, Likes: 0
   #5538

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*