# AI CLI Tools Community Digest 2026-08-25

> Generated: 2026-08-25 00:42 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Cross-Comparison Report — August 25, 2026

## 1. Ecosystem Overview

The AI CLI tool ecosystem in 2026 reflects a maturing landscape where open-source projects are increasingly prioritizing enterprise-grade concerns such as streaming reliability, session persistence, and multi-provider support. Gemini CLI stands out as the most actively developed with daily releases, while Qwen Code demonstrates steady innovation through structured feature development. OpenCode and Pi show focused maintenance cycles, whereas DeepSeek TUI appears to be in active stabilization ahead of a planned v0.9.12 release. Across all tools, there's a clear shift toward provider-agnostic architectures, enhanced observability, and improved user experience for both novice and expert developers.

## 2. Activity Comparison

| Tool | Issues Count | PR Count | Release Status |
|------|--------------|----------|----------------|
| **Gemini CLI** | 10+ active issues | 10+ merged/queued PRs | v0.57.0-preview.1 released |
| **Qwen Code** | ~10 key issues tracked | 10+ active PRs | v0.22.0-nightly released |
| **OpenCode** | ~10 hot issues | 10+ key PRs | v1.18.22 released |
| **Pi (pi-mono)** | ~10 discussed issues | 10+ notable PRs | v0.84.3 released |
| **DeepSeek TUI** | 10 active issues | 10+ progress PRs | No new release (preparing v0.9.12) |
| **Copilot CLI** | 2 highlighted issues | Minimal PR activity | v1..81-9 released |
| **Codex CLI** | Summary unavailable | Summary unavailable | N/A |

*Note: Claude Code summary generation failed for this date.*

## 3. Shared Feature Directions

Several critical requirements span multiple tools' roadmaps:

**Streaming Reliability & Timeout Handling**
- Qwen Code (#5975), Gemini CLI (#25166), and DeepSeek TUI addressing stream timeout issues
- Pi addressing abort signal handling (PR #8585)

**Session Persistence & Continuity**
- DeepSeek TUI (#2492) and Qwen Code emphasizing cross-session memory
- OpenCode focusing on session rollback/retry optimizations (#28934)

**Multi-Provider Support & Architecture Neutrality**
- Pi addressing DeepSeek-specific logic paths (#5588)
- Qwen Code auditing `@google/genai` coupling (#4063)
- OpenCode resolving OpenAI compatibility issues (v1.18.22)

**Enhanced Observability & Debugging**
- Qwen Code introducing lifecycle outbox and status comments (#9771)
- DeepSeek TUI proposing `/dryrun` command (#1004)
- Gemini CLI adding eval draft generation from session logs (#29019)

**TUI/UX Improvements**
- Qwen Code migrating from Ink to OpenTUI (#8662)
- DeepSeek TUI addressing fleet/subagent UX (#5575)
- OpenCode fixing modified files display regressions (#30877)

## 4. Differentiation Analysis

**Target Users & Approach:**
- **Gemini CLI**: Enterprise-focused with heavy emphasis on stability fixes and security (P1 issues, CSP/security improvements). Targets production deployment with risk mitigation.
- **Qwen Code**: Rapid innovation leader with structured feature development. Strong focus on review/autofix pipelines and CI/CD observability. Appeals to teams requiring execution-grade verification.
- **OpenCode**: Developer productivity centric. Emphasizes performance optimization (LSP diagnostics trimming) and plugin ecosystem maturity. Targets active development workflows.
- **Pi (pi-mono)**: Windows-first developer experience. Introduces platform-native features like PowerShell integration. Appeals to enterprise Windows environments.
- **DeepSeek TUI**: Power-user oriented with advanced debugging and supervision capabilities (`/dryrun`, control sockets). Targets sophisticated users needing fine-grained control.

**Technical Focus:**
- Gemini and OpenCode emphasize bug fixing and system hardening
- Qwen Code balances innovation with infrastructure reliability
- Pi addresses cross-platform compatibility gaps
- DeepSeek TUI invests heavily in observability and automation hooks

## 5. Community Momentum & Maturity

**Most Active Communities:**
1. **Gemini CLI**: Daily releases, extensive issue tracking, multiple security-focused PRs indicate strong corporate backing and high iteration velocity.
2. **Qwen Code**: Structured development with clear roadmap execution (evidenced by systematic PR naming), suggesting mature project management.
3. **OpenCode**: Consistent release cadence with targeted fixes, showing healthy community engagement.

**Rapid Iterators:**
- **Qwen Code** ships nightly builds and maintains aggressive feature delivery schedule
- **DeepSeek TUI** shows intensive stabilization effort ahead of v0.9.12 milestone
- **Pi** delivers regular patch releases with clear version progression

**Maturity Indicators:**
Projects like Qwen Code and OpenCode demonstrate architectural refactoring efforts and test suite improvements, indicating transition from rapid prototyping to long-term maintainability. In contrast, DeepSeek TUI's current focus on stabilization suggests approaching maturity milestone.

## 6. Trend Signals

**Dominant Industry Trends:**

1. **Provider Independence**: Tools are systematically decoupling from single-provider dependencies. Qwen Code's audit of `@google/genai` coupling and Pi's removal of DeepSeek-specific logic reflect industry move toward interchangeable AI backends.

2. **Enterprise-Grade Reliability**: Focus has shifted from basic functionality to operational excellence — streaming timeouts, retry mechanisms, and graceful degradation are now table stakes.

3. **Observability-First Development**: New features like lifecycle outboxes, heartbeat comments, and `/dryrun` previews indicate growing importance of transparency and debuggability for production use cases.

4. **Supervision & Automation Readiness**: Control sockets, relaunch commands, and structured event emission show preparation for integration into larger DevOps pipelines and managed environments.

5. **Cross-Session State Management**: Persistent memory and approval receipt storage suggest recognition that developer workflows span multiple interactions rather than isolated sessions.

These trends signal that AI CLI tools are evolving beyond experimental utilities into mission-critical components of modern development infrastructure, requiring commensurate attention to reliability, security, and integration capabilities.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

## 1. Top Skills Ranking

Based on community attention from the repository's top PRs (as of 2026-08-25):

**1. Document Typography Skill** ([#514](https://github.com/anthropics/skills/pull/514))
- **Functionality**: Typographic quality control tool that prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents
- **Discussion Highlights**: Addresses a fundamental issue affecting "every document Claude generates" - users rarely ask for good typography but the skill automatically fixes common formatting problems
- **Status**: OPEN, merged ([2026-03-13](https://github.com/anthropics/skills/pull/514))

**2. Hivemind Multi-Agent Orchestration** ([#1628](https://github.com/anthropics/skills/pull/1628))
- **Functionality**: Zero-cost multi-agent system enabling Claude Code to delegate mechanical work to headless opencode workers running on free models, while maintaining control over planning, review, and merging
- **Discussion Highlights**: Positions expensive model context as the scarce resource, focusing intelligence allocation rather than computational power
- **Status**: OPEN, merged ([2026-08-24](https://github.com/anthropics/skills/pull/1628))

**3. SCNet HPC Cluster Skill** ([#1615](https://github.com/anthropics/skills/pull/1615))
- **Functionality**: Profile-based SSH and Slurm workflow automation for SCNet HPC clusters, including cluster discovery, partition guidance, module management, and accelerator support
- **Discussion Highlights**: Comprehensive enterprise-grade infrastructure skill addressing the growing demand for cloud/HPC platform integration
- **Status**: OPEN, merged ([2026-08-24](https://github.com/anthropics/skills/pull/1615))

**4. Self-Audit Quality Gate** ([#1367](https://github.com/anthropics/skills/pull/1367))
- **Functionality**: Mechanical verification + four-dimension reasoning quality gate (v1.3.0) that audits AI output before delivery across any project, tech stack, or model
- **Discussion Highlights**: Universal verification skill with prioritized damage-severity approach covering mechanical files first, then reasoning audits
- **Status**: OPEN, merged ([2026-07-02](https://github.com/anthropics/skills/pull/1367))

**5. Skill Quality & Security Analyzers** ([#83](https://github.com/anthropics/skills/pull/83))
- **Functionality**: Two meta-skills for comprehensive quality analysis (Structure & Documentation, 20%; Content Quality, 30%; etc.) and security evaluation across multiple dimensions
- **Discussion Highlights**: Addresses skill reliability and safety concerns through automated assessment frameworks
- **Status**: OPEN, merged ([2026-01-07](https://github.com/anthropics/skills/pull/83))

## 2. Community Demand Trends

From active Issues, the community is prioritizing:

**Workflow Automation & Integration Skills**
- High demand for platform-specific skills (SharePoint, ServiceNow, SAP-RPT-1-OSS)
- Multi-agent coordination systems and memory management capabilities
- Enterprise infrastructure skills (HPC, cloud platforms, document processing)

**Quality Assurance & Governance**
- Skills that audit and verify AI output quality (self-audit, reasoning quality gates)
- Security analysis tools for community skills to prevent trust boundary abuse
- Quality metrics and benchmark frameworks for skill evaluation

**Development Experience Improvements**
- Better Windows compatibility for skill-creator scripts
- Enhanced testing patterns and validation frameworks
- Documentation and contribution process improvements

## 3. High-Potential Pending Skills

**Active-Comment PRs Not Yet Merged:**

**Run Eval.py Fixes** ([#1298](https://github.com/anthropics/skills/pull/1298), [#1602](https://github.com/anthropics/skills/pull/1602))
- Multiple fixes for evaluation script bugs affecting 0% recall reporting
- Windows subprocess and encoding compatibility issues
- Critical for skill optimization loops - high community interest (12+ reproductions reported in #556)

**ODT/OpenDocument Skill** ([#486](https://github.com/anthropics/skills/pull/486))
- OpenDocument text creation, template filling, and HTML conversion
- Strong user demand for open-source document format support
- Cross-platform document manipulation capabilities

**Compact Memory Skill** (Issue [#1329](https://github.com/anthropics/skills/issues/1329))
- Symbolic notation for compact agent state management
- Addresses long-running agent context efficiency
- High-interest follow-up to previous skill contribution inquiries

**Testing Patterns Skill** ([#723](https://github.com/anthropics/skills/pull/723))
- Comprehensive testing stack covering philosophy, unit testing, and React component testing
- Addresses fundamental software quality concerns
- Strong community interest in development best practices

## 4. Skills Ecosystem Insight

The community is increasingly focused on **enterprise-grade reliability and quality assurance**, with a clear shift from basic skill creation toward comprehensive evaluation frameworks, multi-agent orchestration, and automated quality gates - indicating maturation from experimental tools to production-ready platforms.

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - August 25, 2026

## Today's Highlights
The team released v0.57.0-preview.1 with critical patch fixes and continues addressing high-priority agent stability issues. Key focus areas include subagent recovery logic, memory system improvements, and shell execution reliability after multiple user reports of hangs and incorrect success reporting.

## Releases

### v0.57.0-preview.1
**Changes**: Cherry-pick of commit 812f7a2 to patch v0.57.0-preview.0, addressing unspecified issues in the preview release cycle.
- [Full Changelog](https://github.com/google-gemini/gemini-cli)

### v0.56.0-nightly.20260824.g5411f113c
**Changes**: Regular nightly build update with incremental improvements.
- [Compare](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260824.g5411f113c...v0.56.0-nightly.20260823.g5411f113c)

## Hot Issues

1. **#22323** Subagent recovery after MAX_TURNS is reported as GOAL success *(13 comments)*  
   The `codebase_investigator` subagent incorrectly reports "success" when hitting maximum turn limits, hiding actual interruption. High priority due to misleading status reporting.  
   [github.com/google-gemini/gemini-cli/issues/22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409** Generalist agent hangs *(8 comments, 2👍)*  
   Gemini CLI hangs indefinitely when delegating to the generalist agent, affecting simple operations like folder creation. This is a critical P1 blocking issue for users.  
   [github.com/google-gemini/gemini-cli/issues/21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#19873** Zero-Dependency OS Sandboxing & Post-Execution Intent Routing *(8 comments)*  
   Proposes leveraging Gemini 3 models' native bash proficiency with secure sandboxing to maximize tool utilization while maintaining security and UX. Large effort issue.  
   [github.com/google-gemini/gemini-cli/issues/19873](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **#22745** Assess the impact of AST-aware file reads, search, and mapping *(7 comments)*  
   Investigation into AST-aware tools for more precise code analysis, reducing turns and token noise. Could significantly improve codebase investigation efficiency.  
   [github.com/google-gemini/gemini-cli/issues/22745](https://github.com/google-gemini/gemini-cli/issues/22745)

5. **#21968** Gemini does not use skills and sub-agents enough *(6 comments)*  
   Anecdotal evidence that Gemini CLI rarely auto-selects custom skills and sub-agents even for related tasks, requiring explicit instructions. Impacts automation effectiveness.  
   [github.com/google-gemini/gemini-cli/issues/21968](https://github.com/google-gemini/gemini-cli/issues/21968)

6. **#26522** Stop Auto Memory from retrying low-signal sessions indefinitely *(5 comments)*  
   Auto Memory incorrectly keeps low-signal sessions in processing queue, causing indefinite retries. Memory system bug affecting performance and user experience.  
   [github.com/google-gemini/gemini-cli/issues/26522](https://github.com/google-gemini/gemini-cli/issues/26522)

7. **#25166** Shell command execution gets stuck with "Waiting input" after command completes *(4 comments, 3👍)*  
   Gemini CLI shows "Waiting input" prompt even after shell commands have completed, blocking further interaction. Simple commands affected, causing confusion.  
   [github.com/google-gemini/gemini-cli/issues/25166](https://github.com/google-gemini/gemini-cli/issues/25166)

8. **#26525** Add deterministic redaction and reduce Auto Memory logging *(4 comments)*  
   Security concern: Auto Memory logs transcript content before model redaction, potentially exposing sensitive data. Needs deterministic redaction approach.  
   [github.com/google-gemini/gemini-cli/issues/26525](https://github.com/google-gemini/gemini-cli/issues/26525)

9. **#22232** Enhance browser_agent resilience: Automatic session takeover and lock recovery *(4 comments)*  
   Browser Agent uses "fail-fast" strategy for locked profiles, potentially disrupting user workflows. Needs smarter session recovery mechanisms for persistent browser use.  
   [github.com/google-gemini/gemini-cli/issues/22232](https://github.com/google-gemini/gemini-cli/issues/22232)

10. **#21983** browser subagent fails in wayland *(4 comments, 1👍)*  
    Browser subagent encounters failures in Wayland environments, indicating cross-platform compatibility issues that need resolution.  
    [github.com/google-gemini/gemini-cli/issues/21983](https://github.com/google-gemini/gemini-cli/issues/21983)

## Key PR Progress

1. **#29060** Changelog for v0.57.0-preview.1  
   Automated changelog generation for the latest preview release. Includes documentation updates and release notes.  
   [github.com/google-gemini/gemini-cli/pull/29060](https://github.com/google-gemini/gemini-cli/pull/29060)

2. **#28934** History rollback and retry nudge optimizations  
   Optimizes tool call cancellations and retry nudges to prevent context window bloat and improve prefix caching efficiency. Major performance improvement.  
   [github.com/google-gemini/gemini-cli/pull/28934](https://github.com/google-gemini/gemini-cli/pull/28934)

3. **#29022** Retain ask_user question in text history  
   Implements `ui.keepAskUserQuestionsInHistory` setting to preserve question/answer pairs in session history for better context continuity.  
   [github.com/google-gemini/gemini-cli/pull/29022](https://github.com/google-gemini/gemini-cli/pull/29022)

4. **#28961** Fix safety checkers in write policy configuration  
   Corrects safety checker definitions in write policy to properly register `AllowedPathChecker` during configuration loading.  
   [github.com/google-gemini/gemini-cli/pull/28961](https://github.com/google-gemini/gemini-cli/pull/28961)

5. **#28863** Extension consent on environment changes and sanitize runtime-altering environment variables  
   Addresses security issue where extension updates could bypass user consent and inject unauthorized environment variables into MCP server processes.  
   [github.com/google-gemini/gemini-cli/pull/28863](https://github.com/google-gemini/gemini-cli/pull/28863)

6. **#29019** Add reviewable eval drafts from session logs  
   `eval:from-log` feature enables maintainers to convert real Gemini CLI interactions into starting points for behavioral evaluations.  
   [github.com/google-gemini/gemini-cli/pull/29019](https://github.com/google-gemini/gemini-cli/pull/29019)

7. **#29018** Remove misleading security schemes and hardcoded credentials  
   Fixes A2A server security by removing misleading security schemes and insecure hardcoded credentials from agent metadata.  
   [github.com/google-gemini/gemini-cli/pull/29018](https://github.com/google-gemini/gemini-cli/pull/29018)

8. **#28938** Keep GIT_CONFIG_* environment triplets internally consistent  
   Prevents sanitized `GIT_CONFIG_*` environments from becoming unparsable by Git when redaction removes one half of numbered key/value pairs.  
   [github.com/google-gemini/gemini-cli/pull/28938](https://github.com/google-gemini/gemini-cli/pull/28938)

9. **#28914** Inject on-retry nudge into conversation contents to preserve prefix caching  
   Moves recovery nudge message from system instruction to user turn suffix to preserve static prompt prefix caching and improve retry efficiency.  
   [github.com/google-gemini/gemini-cli/pull/28914](https://github.com/google-gemini/gemini-cli/pull/28914)

10. **#28939** Avoid persisting interrupted response placeholder  
    Fixes issue where interrupted tool responses persisted as synthetic model responses, causing models to repeat placeholders after later tool calls.  
    [github.com/google-gemini/gemini-cli/pull/28939](https://github.com/google-gemini/gemini-cli/pull/28939)

## Feature Request Trends

### Security & Safety Improvements
- Deterministic redaction for Auto Memory logging and environment variable handling
- Enhanced extension consent mechanisms for runtime-altering environment variables
- Improved A2A server security configurations

### Agent Intelligence & Efficiency
- Zero-dependency OS sandboxing to leverage model's bash affinity
- AST-aware file reads and codebase mapping for more precise analysis
- Enhanced skill/sub-agent auto-detection and utilization
- Better subagent trajectory visibility via `/chat share`

### Memory & Session Management
- Prevent indefinite retries of low-signal Auto Memory sessions
- Preserve ask_user questions in history for better session continuity
- Improved rollback and retry nudge optimization to reduce context bloat

### Performance & Reliability
- Prefix caching preservation through on-retry nudge injection
- Browser agent resilience with automatic session recovery
- Fix for shell command execution getting stuck with "Waiting input"

## Developer Pain Points

### Core Functional Issues
1. **Agent Instability**: Generalist agent hangs frequently, subagents report incorrect termination states
2. **Shell Execution Problems**: Commands showing "Waiting input" after completion, blocking further interaction
3. **Browser Agent Failures**: Wayland environment issues and lack of session recovery mechanisms

### Memory System Frustrations
1. **Auto Memory Management**: Low-signal sessions retry indefinitely, consuming resources
2. **Security Concerns**: Transcript content exposed before redaction occurs
3. **Session Continuity**: Important user questions lost after interaction

### Development Workflow Challenges
1. **Skill Utilization**: Models rarely auto-select custom skills even for related tasks
2. **Tool Limits**: 400-tool limit causing 400 errors in complex environments
3. **Configuration Complexity**: Symlinks not recognized for agent discovery, settings.json overrides ignored by browser agent

### UI/UX Issues
1. **Error Context**: Bug reports lack subagent context information
2. **Interactive Prompts**: Vite app creation gets stuck at interactive prompts
3. **High Token Usage**: Large file reads cause context bloat despite surgical extraction attempts

The community is actively addressing these issues with a focus on stability, security, and improving the agent's ability to leverage available tools and skills effectively.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑08‑25**

---

### 1. Today's Highlights
- **Release v1.0.81‑9** ships model‑data‑retention warnings in the `/model` picker, giving users clearer insight into which models will be retired.  
- **OAuth & authentication problems** continue to dominate: recent regressions affect Atlassian MCP (now closed) and Entra ID MCP servers, leaving many users unable to connect plugins.  
- **Interactive‑mode usability** is a hot topic, with a high‑voted feature request for a configurable tool whitelist and multiple `/ask` turns to reduce manual approvals.

---

### 2. Releases
- **v1.0.81‑9** – *Improved*: Added model‑data‑retention warnings with links in the **/model** picker.  
  📎 [Release notes / changelog](github.com/github/copilot-cli/releases/tag/v1.0.81-9)

---

### 3. Hot Issues *(10 most discussed / impactful)*

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#1274** | **[CLI constantly getting 400 errors for invalid request body](github.com/github/copilot-cli/issues/1274)** | Blocks code‑review workflows; suggests a validation mismatch between the CLI and the backend. | **27 comments**, **11 👍** |
| **#1973** | **[Feature Request: Tool whitelist for Interactive Mode](github.com/github/copilot-cli/issues/1973)** | Users want granular control over safe read‑only tools without approving everything (`/allow‑all`). | **12 comments**, **27 👍

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-08-25

## Today's Highlights
The v1.18.22 release addresses critical OpenAI compatibility issues and device login problems, while ongoing issues with TUI modified files display and performance problems in Lua LSP projects continue to affect users across multiple versions. The V2 plugin API limitations are preventing proper context injection, and GitHub Actions failures for newer repositories suggest OIDC format changes are breaking existing integrations.

## Releases

**v1.18.22** (anomalyco/opencode#v1.18.22)
- Fixed `textVerbosity` being sent to OpenAI-compatible providers that don't support it
- Resolved OpenCode device login links for servers returning relative verification URLs or using base paths
- Removed outdated Go first-month discount messaging and pricing

## Hot Issues

1. **#4489: Ephemeral one‑off sessions for opencode run** (14 comments, 15 👍)
   - Users want support for temporary sessions in `opencode run` that aren't persisted to local storage
   - High engagement with community willingness to implement the feature
   - github.com/anomalyco/opencode/issues/4489

2. **#30877: TUI sidebar "Modified Files" section completely hidden** (11 comments, 14 👍)
   - Critical UI regression since v1.16.0 where the entire modified files section is missing
   - Affects visibility of uncommitted changes in the TUI interface
   - github.com/anomalyco/opencode/issues/30877

3. **#43619: V2 subagent: required sessionID prevents spawning first child session** (10 comments)
   - Documentation says to omit `sessionID` for new sessions, but tool schema requires it
   - Blocks all coding delegation workflows needing first child agent creation
   - github.com/anomalyco/opencode/issues/43619

4. **#6310: Sessions become unusable due to large LSP diagnostics** (9 comments)
   - Edit/write tools store full LSP diagnostics in metadata
   - Lua LSP returns diagnostics for entire workspace (thousands of files), causing severe performance degradation
   - github.com/anomalyco/opencode/issues/6310

5. **#37815: Error from provider (Console Go): Upstream request failed — Kimi K3** (7 comments, 6 👍)
   - Kimi K3 model appears in selection list but throws upstream request failed error
   - Only affects Kimi K3 model on Console Go provider, other models work fine
   - github.com/anomalyco/opencode/issues/37815

6. **#17797: TUI: Modified files are no longer shown** (6 comments, 1 👍)
   - Users report missing modified files information in TUI sidebar
   - Affects tracking of added/removed lines in file modifications
   - github.com/anomalyco/opencode/issues/17797

7. **#37823: GitHub action fails on repos created after 2026-07-15** (6 comments, 11 👍)
   - OIDC sub format change broke GitHub Actions for newer repositories
   - Error: `undefined is not an object (evaluating 'p.rest')`
   - github.com/anomalyco/opencode/issues/37823

8. **#44379: Provider finish_reason: network_error with Ox Alpha Free** (6 comments, 4 👍)
   - Ox Alpha Free (unlimited) model repeatedly returns network_error
   - Error persists across new chat sessions, only workaround is opening new sessions
   - github.com/anomalyco/opencode/issues/44379

9. **#32852: TUI sidebar "Modified Files" section does not show session diffs** (5 comments, 3 👍)
   - Modified files section remains empty even after opencode modifications
   - Previously worked correctly showing added/removed line counts
   - github.com/anomalyco/opencode/issues/32852

10. **#44577: Deepseek models show invalid API key error** (4 comments)
    - Deepseek API key validation fails for some models while others work
    - Also missing GPT 5.6 Luna, GLM-5.3, Qwen3.8 Max models
    - github.com/anomalyco/opencode/issues/44577

## Key PR Progress

1. **#44796: fix(tui): restore TUI sidebar modified-files diff** (juliolv)
   - Addresses the critical bug where modified files section became hidden
   - Reverts changes that broke Session.diff functionality
   - github.com/anomalyco/opencode/pull/44796

2. **#44757: feat(opencode): enable lsp tool by default** (jinhuang712)
   - Removes experimental guard and always registers `tool.lsp`
   - Makes LSP tool available to all users without feature flag
   - github.com/anomalyco/opencode/pull/44757

3. **#44811: tool: trim persisted LSP diagnostics in edit/write metadata** (Schubox84)
   - Addresses performance issues with large workspace diagnostics
   - Prevents session degradation by trimming LSP diagnostic data
   - github.com/anomalyco/opencode/pull/44811

4. **#44806: fix(core): recover missing assistant responses** (akirarat)
   - Fixes issue where provider finishes with `stop` after no response
   - Improves assistant response recording and recovery
   - github.com/anomalyco/opencode/pull/44806

5. **#44810: fix(opencode): resume queued prompts after interrupt** (rituparna-ui)
   - Fixes queued prompts getting lost during agent interruption
   - Ensures user messages persist and resume properly after busy periods
   - github.com/anomalyco/opencode/pull/44810

6. **#44683: feat(app): queue and steer follow-up prompts** (Hona)
   - Implements queue pullout above composer with queue/steer submit behavior
   - Adds inline editing, drag-to-reorder, and follow-up behavior settings
   - github.com/anomalyco/opencode/pull/44683

7. **#44817: fix(ai): ignore unknown Anthropic stream variants** (rekram1-node)
   - Improves Anthropic provider error handling for unknown stream types
   - Maintains strict message_delta decoding while ignoring unknown variants
   - github.com/anomalyco/opencode/pull/44817

8. **#44818: refactor(core): normalize tool input errors** (rekram1-node)
   - Standardizes Effect, Standard Schema, and JSON Schema validation errors
   - Provides actionable error messages with field paths and retry guidance
   - github.com/anomalyco/opencode/pull/44818

9. **#44822: fix(tui): resolve plugin SDK imports at runtime** (thdxr)
   - Exposes `@opencode-ai/plugin/tui` through OpenTUI runtime module support
   - Enables discovered CLI plugins to use running TUI SDK
   - github.com/anomalyco/opencode/pull/44822

10. **#42683: fix(tui): search all agents for configured color in color() lookup** (ar1vit0r)
    - Fixes TUI agent color lookup to include all agents from sync.data.agent
    - Prevents missing agent colors in edge cases
    - github.com/anomalyco/opencode/pull/42683

## Feature Request Trends

1. **Session Management**: Growing demand for ephemeral/one-off sessions, sessionID schema fixes, and better session switching (v1.16.x broken)
2. **Performance Optimization**: Critical need for LSP diagnostics trimming, especially for large workspaces (Lua/TS projects)
3. **Model Access**: Requests for missing models (GPT 5.6 Luna, GLM-5.3, Qwen3.8 Max) and provider reliability improvements
4. **TUI Improvements**: Consistent requests to restore modified files display and sidebar functionality
5. **Plugin Architecture**: V2 plugin API limitations preventing context injection and tool registry issues
6. **Integration Fixes**: GitHub Actions OIDC format changes affecting newer repositories
7. **AI Provider Stability**: Multiple reports of network errors with Ox Alpha Free and other models

## Developer Pain Points

1. **Performance Degradation**: Large LSP diagnostics causing session slowdown, especially in Lua projects with thousands of files
2. **UI Inconsistencies**: Modified files not showing in TUI sidebar across multiple issues (#17797, #30877, #32852)
3. **Plugin Development Complexity**: V2 API limitations preventing proper context injection and tool registry functionality
4. **Model Provider Reliability**: Inconsistent behavior across providers (Kimi K3, Ox Alpha Free, Deepseek)
5. **Migration Challenges**: V1.16.0+ introduced breaking changes to session diff and modified files display
6. **GitHub Integration**: OIDC format changes breaking GitHub Actions for repos created after July 2026
7. **Session Management**: Issues with sessionID requirements, background job cleanup during shutdown, and queued prompt handling
8. **Error Handling**: Non-descriptive error messages like "Provider finish_reason: network_error" without actionable guidance

The community is actively working to resolve these issues through targeted PRs, with particular focus on performance optimization, UI restoration, and plugin API improvements. High-priority areas include restoring modified files display, trimming LSP diagnostics, and addressing V2 plugin limitations.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑08‑25**  
*Based on activity in the `badlogic/pi-mono` repository (earendil‑works/pi).*

---

### 1. Today's Highlights
- The **v0.84.3** release landed, introducing an optional **PowerShell tool** for Windows and safer staged‑update mechanics.  
- A critical fix for **Gemini 3.x thought‑signature handling** (PR #8590) closed issue #6996, restoring reliable tool‑call flows for Gemini‑based providers.  
- OpenAI stream abort handling was improved (PR #8585), addressing a long‑standing pain point where abort signals were ignored mid‑turn.

---

### 2. Releases
**v0.84.3** (released within the last 24 h)  
- **PowerShell tool** – optional native PowerShell command execution on Windows (see docs: <https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/docs/windows.md#powershell-tool>).  
- **Safer managed updates** – stage, verify, and atomically activate updates to reduce corruption risk during upgrades.  
- No other breaking changes; the release is a patch over v0.84.2.

---

### 3. Hot Issues (top 10 by impact & community discussion)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #7547 | **[Windows] How do you use Pi on Windows?** | Central hub for Windows‑specific confusion (installation, WSL vs native, PowerShell vs CMD). High comment count shows strong demand for clearer docs and smoother out‑of‑box experience. | 44 comments, 👍2 – active discussion on preferred workflows and pain points. |
| #6879 | **Auto‑compaction never triggers until provider overflow** | Compaction only fires after the API rejects a request, risking runaway token usage and costly calls. Affects long‑running agentic sessions. | 22 comments, 👍19 – high up‑vote signal indicating a widely felt reliability gap. |
| #6996 | **Gemini 3.x models fail during tool use (missing thought_signature)** | Breaks tool‑call loops for Gemini via OpenAI‑compatible gateways; blocks adoption of newer Gemini models. | 6 comments (updated today) – fix just merged (PR #8590). |
| #8167 | **Cannot pick a model with built‑in llama.cpp support** | Models from llama‑server/router mode are invisible in the UI despite being usable via `/llama`. Limits flexibility for local LLMs. | 11 comments – workaround via PR #8558/ #8479 shows community pressure. |
| #7444 | **WebSocket retry only handles two error codes** | Other transient `response.failed` errors halt turns, reducing robustness against flaky network or API glitches. | 9 comments – indicates need for broader retry classification. |
| #8586 | **OpenAI streams ignore abort signal mid‑turn** | Abort requests are not honored, leaving users stuck waiting for long completions. Directly impacts UX and resource usage. | 1 comment – fix merged in PR #8585. |
| #8584 | **TUI row corruption during streaming (assistant text one word per line)** | Visual glitch after large tool output degrades readability and can be mistaken for lost output. | 1 comment, 👍1 – recent report; likely tied to buffer width handling. |
| #8582 | **Built‑in PowerShell tool uses Windows PowerShell 5.1 in interactive mode** | Despite `pwsh` being on PATH, interactive mode falls back to legacy PowerShell, confusing users expecting PS7 features. | 2 comments – highlights need for proper detection logic. |
| #8589 | **Expose a renderer hook for extension‑provided compactions** | Extension authors cannot customize how compaction results are presented, limiting UI flexibility. | 1 comment – reflects growing extension ecosystem demand. |
| #8554 | **Seamlessly move current session into a new working directory (git worktree)** | Enables afk/automated workflows that rely on switching contexts without losing session state. | 2 comments – shows interest in better session portability. |

---

### 4. Key PR Progress (selected 10)

| PR | Summary | Impact |
|----|---------|--------|
| #8590 | **fix(ai): round‑trip Gemini thought_signature via openai‑completions** – restores Gemini 3.x tool‑call compatibility. | Directly resolves #6996; enables reliable Gemini‑based agents. |
| #8585 | **fix(ai): abort OpenAI streams immediately when signal fires** – adds abort‑signal check to OpenAI Responses/Completions iterators. | Fixes #8586, improves responsiveness and resource cleanup. |
| #8570 | **fix(ai): preserve Codex thread affinity headers** – adds missing `thread-id` header for stable Codex sessions. | Enhances Codex session continuity; addresses subtle context loss. |
| #8512 | **feat(coding-agent): add optional PowerShell tool** – introduces the new PowerShell tool shipped in v0.84.3. | Meets Windows developer request (#7547); provides native Windows scripting. |
| #8558 | **feat: show llama presets if autoload enabled** – makes llama.cpp presets visible in `/model` when autoload is on. | Addresses #8167/#8479; improves discoverability of local LLMs. |
| #8580 | **feat(coding-agent): drop extra vertical padding on tool rows** – tightens TUI layout, reducing wasted lines per tool call. | Improves readability and reduces scroll noise in transcripts. |
| #8578 | **fix(ai): pin createProvider TApi for xAI Responses provider** – fixes TypeScript build break after xAI provider refactor. | Restores CI stability; unblocks xAI feature work. |
| #8575 | **fix(coding-agent): surface + bound the torn‑append replay loss in session JSONL files** – detects and limits malformed session lines. | Prevents silent loss of replayed events; improves session reliability. |
| #8548 | **docs: add product description and verification material** – adds official product docs and verification artifacts. | Improves discoverability for new users and downstream integrations. |
| #8559 | **feat(coding-agent): attach clipboard images as atomic markers** – renders pasted images as first‑class attachments rather than raw file paths. | Enhances UX for image‑driven workflows; reduces confusion over temporary paths. |

---

### 5. Feature Request Trends (derived from open issues & PRs)

- **Windows‑first experience** – better docs, native tooling (PowerShell, proper `pwsh` detection), and streamlined installation (see #7547, #8582).  
- **Model catalog freshness** – rapid addition of newly released models (DeepSeek vision, Parasail, SiliconFlow, Merge Gateway, Eden AI) and keeping pricing/off‑peak data up‑to‑date (issues #8546, #8491, #4742, #6403, #5986).  
- **Provider extensibility** – more first‑class OpenAI‑compatible gateways (SiliconFlow, Parasail, Eden AI, Merge Gateway) and better handling of custom provider auth.  
- **Context & compaction reliability** – earlier compaction triggers, configurable thresholds, and ability to persist/hook compaction output (issues #6879, #7048, #8589).  
- **Session & workspace portability** – moving sessions between directories/worktrees, exporting/importing agent presets, and sharing sessions via URLs (issues #8554, #8588).  
- **Robust streaming & abort handling** – ensuring abort signals are respected across all provider streams (OpenAI, Anthropic, Codex) and improving retry classification for transient errors (issues #8586, #7444, #8138).  
- **UI/UX polish** – fixing TUI glitches (word‑per‑line corruption, cursor movement on click, shared‑session button feedback) and reducing visual noise (padding, cursor blur).  

---

### 6. Developer Pain Points (recurring frustrations)

1. **Windows fragmentation** – multiple ways to run Pi (WSL, native, PowerShell vs CMD) cause confusion; users request clearer guidance and unified tooling.  
2. **Compaction latency/overshoot** – auto‑compaction waits until the provider errors, leading to wasted tokens and unexpected costs.  
3. **Model discoverability** – newly released models (especially vision or local llama.cpp presets) often missing from the UI until manually added.  
4. **Stream abort ignorance** – OpenAI streams not checking abort signals force users to wait or kill processes manually.  
5. **Session state friction** – moving sessions between workspaces or preserving them across directory changes is cumbersome; no built‑in export/import preset mechanism.  
6. **UI glitches under load** – TUI rendering issues after large tool outputs (word‑per‑line, cursor corruption) reduce confidence in the interface.  
7. **Extension authoring limits** – lack of hooks to customize compaction presentation or defer heavy tool schemas impacts adoption of complex extensions.  

---  

*All links point to the `earendil-works/pi` repository on GitHub.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-25

## 1. Today's Highlights
The v0.22.0 nightly shipped a web-shell fix for session workspace handling, while the issue tracker shows active focus on MCP reliability, streaming robustness, and architectural debt in core/config systems. The `/review` skill and autofix pipeline continue receiving significant investment toward execution-grade verification and CI observability.

## 2. Releases
**v0.22.0-nightly.20260824.3a1f86d805** — Nightly build with a targeted fix: `fix(web-shell): pass session workspace cwd when opening from overview panel` ([#9730](https://github.com/QwenLM/qwen-code/pull/9730)). Also includes prebuilt `cua-driver-rs v0.20.0` binaries (macOS codesigned/notarized, Linux/Windows unsigned, Node.js publish).

## 3. Hot Issues (Top 10 by Engagement)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#5975](https://github.com/QwenLM/qwen-code/issues/5975) **API stream timeout after 19 chunks (120s)** | Core streaming reliability; blocks users on v0.19.3+ with frequent `NO stream activity` errors | 12 comments, 1👍 — high-impact regression |
| [#4063](https://github.com/QwenLM/qwen-code/issues/4063) **Core/CLI architecture review: 12 structural problems** | Foundational tech debt: `@google/genai` type coupling (136 files), config ownership, test seams | 9 comments, 1👍 — tracking issue for systemic cleanup |
| [#8083](https://github.com/QwenLM/qwen-code/issues/8083) **Make derived Config context ownership explicit** | Prototype-delegation config pattern causes subtle bugs in subagents, memory scoping, approval overrides | 6 comments — design-level fix in progress |
| [#9944](https://github.com/QwenLM/qwen-code/issues/9944) **MCP HTTP reconnect reports success but tools unavailable** | New session ID on server restart breaks client-tool mapping; silent failure mode | 4 comments — HTTP transport gap |
| [#9942](https://github.com/QwenLM/qwen-code/issues/9942) **Hide skill commands from top-level slash completion** | UX clutter: installed skills flood `/` menu, hiding built-ins | 4 comments — needs-discussion |
| [#9927](https://github.com/QwenLM/qwen-code/issues/9927) **Artifact `updatedAt` stale; write_file intermediates linger** | Session artifact metadata doesn't reflect content changes; ghost files in transcript | 4 comments — session management bug |
| [#9005](https://github.com/QwenLM/qwen-code/issues/9005) **Anthropic wire missing stream-safety protections** | OpenAI path has safeguards Anthropic path lacks; pinned SDK v0.36.1 (Jan 2025) | 4 comments — security/reliability parity |
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) **Migrate TUI from Ink to OpenTUI (flicker-free, mouse)** | Ink 7 + patched renderer (1037 lines) causes flicker, scroll jank, mouse issues | 4 comments — roadmap/terminal-ux |
| [#9026](https://github.com/QwenLM/qwen-code/issues/9026) **NO_TOOL_RESULT_PROGRESS hard-fails headless runs** | Model ending turn quietly after tool result crashes non-interactive mode | 4 comments, **CLOSED** — fixed in follow-up |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) **Fleet Shepherd Dashboard (bot fleet status)** | Automated fleet health: CI red on #9305, 0 syncs/dispatches/releases/cleanups this tick | 3 comments — infra visibility |

## 4. Key PR Progress (Top 10 by Recent Activity)

| PR | Description | Impact |
|----|-------------|--------|
| [#9829](https://github.com/QwenLM/qwen-code/pull/9829) | `fix(core): make permissions.allow restrict tool schemas sent to model` | Enforces allowlist at registry level — unallowed tools vanish from `/tools` and model |
| [#9922](https://github.com/QwenLM/qwen-code/pull/9922) | `fix(channels): preserve DingTalk rich-text multi-image messages` | Ordered image attachments through ACP/daemon/WebShell hydration |
| [#9771](https://github.com/QwenLM/qwen-code/pull/9771) | `feat(autofix): keep round status comment live during long rounds` | Heartbeat updates prevent "🔄 working" staleness on hours-long reviews |
| [#9954](https://github.com/QwenLM/qwen-code/pull/9954) | `refactor(web-shell): extract shared contexts` | Compact-mode & todo-detail contexts modularized; reduces leaf coupling |
| [#9895](https://github.com/QwenLM/qwen-code/pull/9895) | `feat(daemon): support scoped workspace memory tasks` | Project/user-scoped remember/forget via REST, ACP, TS SDK with capability negotiation |
| [#9350](https://github.com/QwenLM/qwen-code/pull/9350) | `feat(dingtalk): support outbound file delivery` | Native file upload via DingTalk media API from agent responses |
| [#9740](https://github.com/QwenLM/qwen-code/pull/9740) | `feat(review): make Step 4 verification execution-grade` | New `qwen review ab-drive` runs scripts on PR + base trees; paired evidence capture |
| [#9492](https://github.com/QwenLM/qwen-code/pull/9492) | `fix(core): make loop detection result-aware for task_list polls` | Stops false loop positives on stateful read tools (teammates mutate shared board) |
| [#8943](https://github.com/QwenLM/qwen-code/pull/8943) | `feat(review): dispatch Step 3A fan-out from generated workflow script` | Opt-in programmatic fan-out replacing hand-launched orchestration |
| [#9741](https://github.com/QwenLM/qwen-code/pull/9741) | `fix(review): screen content filters before probe tree restore` | Prevents `filter.<name>.smudge` execution on checkout during scratch-tree ops |

## 5. Feature Request Trends
1. **Web Shell / IDE Integration** — Message edit/rewind restoration ([#9911](https://github.com/QwenLM/qwen-code/issues/9911)), context extraction ([#9954](https://github.com/QwenLM/qwen-code/pull/9954)), VS Code schema alignment ([#8965](https://github.com/QwenLM/qwen-code/issues/8965))
2. **MCP Hardening** — HTTP reconnect reliability ([#9944](https://github.com/QwenLM/qwen-code/issues/9944)), tool result collapsing ([#9934](https://github.com/QwenLM/qwen-code/issues/9934)), OSS Mem0 provider ([#9951](https://github.com/QwenLM/qwen-code/issues/9951), [#9964](https://github.com/QwenLM/qwen-code/issues/9964))
3. **Review/Autofix Maturity** — Execution-grade verification ([#9740](https://github.com/QwenLM/qwen-code/pull/9740)), workflow-driven fan-out ([#8943](https://github.com/QwenLM/qwen-code/pull/8943)), deferred suggestion recovery ([#9761](https://github.com/QwenLM/qwen-code/pull/9761)), status comment heartbeats ([#9771](https://github.com/QwenLM/qwen-code/pull/9771))
4. **Memory System** — Scoped workspace tasks ([#9895](https://github.com/QwenLM/qwen-code/pull/9895)), recall/forget cap asymmetry ([#9378](https://github.com/QwenLM/qwen-code/issues/9378)), external-context providers
5. **TUI/Rendering Overhaul** — Ink → OpenTUI migration ([#8662](https://github.com/QwenLM/qwen-code/issues/8662)), VP mode bottom-align ([#9305](https://github.com/QwenLM/qwen-code/pull/9305)), VP height budget fix ([#9966](https://github.com/QwenLM/qwen-code/issues/9966))
6. **Multi-Agent/Team** — Shutdown channel overload ([#9510](https://github.com/QwenLM/qwen-code/issues/9510)), goal continuation freshness ([#9135](https://github.com/QwenLM/qwen-code/issues/9135))
7. **Channel Ecosystem** — DingTalk workspace channel ([#9394](https://github.com/QwenLM/qwen-code/pull/9394)), file delivery ([#9350](https://github.com/QwenLM/qwen-code/pull/9350)), session rotation bounds ([#8927](https://github.com/QwenLM/qwen-code/pull/8927))
8. **Sandbox/CI Reliability** — Image build retry + failure issue filing ([#9916](https://github.com/QwenLM/qwen-code/pull/9916)), actionable missing-image errors ([#9961](https://github.com/QwenLM/qwen-code/issues/9961)), failure issue closure on recovery ([#9960](https://github.com/QwenLM/qwen-code/issues/9960))
9. **Skill System UX** — Slash completion filtering ([#9942](https://github.com/QwenLM/qwen-code/issues/9942)), Computer Use Skill via Node REPL ([#9335](https://github.com/QwenLM/qwen-code/issues/9335), [#9336](https://github.com/QwenLM/qwen-code/issues/9336))
10. **Config/Schema Consistency** — Settings schema vs runtime drift ([#8965](https://github.com/QwenLM/qwen-code/issues/8965)), permissions.allow enforcement ([#9829](https://github.com/QwenLM/qwen-code/pull/9829)), Gemini residue renaming ([#9900](https://github.com/QwenLM/qwen-code/pull/9900))

## 6. Developer Pain Points
- **Streaming fragility**: 120s timeout on Anthropic/OpenAI-compatible endpoints ([#5975](https://github.com/QwenLM/qwen-code/issues/5975)), missing safety guards on Anthropic wire ([#9005](https://github.com/QwenLM/qwen-code/issues/9005)), headless crash on quiet turn ends ([#9026](https://github.com/QwenLM/qwen-code/issues/9026))
- **MCP unreliability**: HTTP reconnect lies about success ([#9944](https://github.com/QwenLM/qwen-code/issues/9944)), tool results never collapse ([#9934](https://github.com/QwenLM/qwen-code/issues/9934))
- **Session/artifact state bugs**: Stale `updatedAt` ([#9927](https://github.com/QwenLM/qwen-code/issues/9927)), debug log bleed across multiplexed sessions ([#9534](https://github.com/QwenLM/qwen-code/issues/9534)), replay dangling-call suppression overbroad ([#9953](https://github.com/QwenLM/qwen-code/issues/9953))
- **TUI rendering defects**: Flicker, scroll jank, mouse issues from patched Ink ([#8662](https://github.com/QwenLM/qwen-code/issues/8662)), VP mode overflow by 1 row ([#9966](https://github.com/QwenLM/qwen-code/issues/9966))
- **CI/CD opacity**: Sandbox image build failures silently block lanes ([#9961](https://github.com/QwenLM/qwen-code/issues/9961)), no auto-closure of failure issues on retry success ([#9960](https://github.com/QwenLM/qwen-code/issues/9960))
- **Permission system gaps**: `permissions.allow` documented as allowlist but not enforced at schema level ([#9829](https://github.com/QwenLM/qwen-code/pull/9829)), Kimi rejects `uniqueItems: true` in built-in tools ([#9865](https://github.com/QwenLM/qwen-code/issues/9865))
- **Architectural coupling**: 136 files import `@google/genai` types directly ([#4063](https://github.com/QwenLM/qwen-code/issues/4063)), config ownership via `Object.create` causes subtle bugs ([#8083](https://github.com/QwenLM/qwen-code/issues/8083))
- **Skill discoverability**: Installed skills flood `/` completion, hiding core commands ([#9942](https://github.com/QwenLM/qwen-code/issues/9942))
- **Test flakiness**: Root user bypasses permission checks in ledger tests ([#9909](https://github.com/QwenLM/qwen-code/issues/9909))
- **Legacy command leakage**: `##[` workflow commands in autofix stdout echoes break CI logs ([#9871](https://github.com/QwenLM/qwen-code/pull/9871))

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-25

## Today's Highlights

The project is in active stabilization for the upcoming **v0.9.12 release**, with a focus on resolving critical bugs, improving test reliability, and advancing structured cleanup initiatives. Key areas of progress include the **supervised operation stack** (control sockets, relaunch, lifecycle outbox), **fleet/subagent management UX**, and foundational **provider-neutral refactoring**. Meanwhile, several long-standing usability gaps—such as cross-session memory, OAuth2.1 support for MCP, and clearer fleet configuration—are being actively addressed.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **[#1004]** `/dryrun` command to preview next chat completion request  
   [Link](https://github.com/Hmbown/CodeWhale/issues/1004)  
   A proposed `/dryrun` command would let users inspect the full payload (system prompt, repo files, tools, mentions, thinking) before sending it — critical for expensive V4 Pro iterations. Community reaction: neutral (0👍), but conceptually strong interest in safer iteration.

2. **[#4959]** Proposed `/stop` command with runtime STOP-word interception  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4959)  
   Users want a way to halt autonomous workflows (`YOLO mode`) where natural language stops like `stop` are ignored. This highlights friction in stopping unintended model behavior mid-turn.

3. **[#1482]** NVIDIA NIM integration broken with 404 error  
   [Link](https://github.com/Hmbown/CodeWhale/issues/1482)  
   Newly configured NVIDIA models return invalid endpoint errors during initial setup. Likely tied to incorrect URL construction logic affecting provider integrations.

4. **[#2492]** No persistent session memory  
   [Link](https://github.com/Hmbown/CodeWhale/issues/2492)  
   Each restart resets context; forced memory writes don’t restore automatically. This undermines trust in continuity features and limits practical use cases.

5. **[#5588]** Provider neutrality audit — 18 DeepSeek-gated logic paths identified  
   [Link](https://github.com/Hmbown/CodeWhale/issues/5588)  
   Core internals still hardcode DeepSeek-specific behaviors despite claims of multi-provider support. Early remediation steps taken; full scope tracked here.

6. **[#5585]** Stack overflow in `setup_confirm_toast_names_secret_store_and_global_scope` test  
   [Link](https://github.com/Hmbown/CodeWhale/issues/5585)  
   A pre-existing test crashes consistently on macOS under default stack settings. Blocks CI stability and needs urgent triage.

7. **[#5601]** Fresh install returns 404 when configuring MiniMax/Xiaomi APIs  
   [Link](https://github.com/Hmbown/CodeWhale/issues/5601)  
   First-time model setup fails due to malformed URLs — possibly part of broader provider routing bugs surfaced by #1482.

8. **[#5596]** Turn-end silently destroys subagents  
   [Link](https://github.com/Hmbown/CodeWhale/issues/5596)  
   Subagents spawned within a turn are discarded at turn-end, discarding valuable background work without warning. High-severity UX issue.

9. **[#5595]** Read-only inspection children blocked from running git commands  
   [Link](https://github.com/Hmbown/CodeWhale/issues/5595)  
   Model reports permission denied for basic shell ops (`git -C ...`) even though role posture says allowed — inconsistent enforcement layers.

10. **[#5575]** Fleet/subagent role posture lacks canonical definition  
    [Link](https://github.com/Hmbown/CodeWhale/issues/5575)  
    Role definitions diverge across five internal modules, risking inconsistent permissions and behavior drift — root cause of prior contradictions.

---

## Key PR Progress

1. **[#5594]** Control socket (final phase) — enables supervised operation via JSON-RPC  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5594)  
   Adds per-session control plane for external orchestration of TUI sessions.

2. **[#5593]** /relaunch command — in-place binary update + restart  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5593)  
   Eliminates manual restarts after updates. Seamless upgrade path for users.

3. **[#5592]** Lifecycle outbox — emits structured events for logging/telemetry  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5592)  
   Optional JSONL output of session lifecycle events for headless automation/monitoring.

4. **[#5606]** Relay integration — unifies managed Chat with native runtime threads  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5606)  
   Brings managed chat flows onto native concurrency model with improved idempotency.

5. **[#5584]** Persist child approval receipts across sessions  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5584)  
   Ensures tool-call approvals aren’t lost between turns or restarts — closes related data loss gap.

6. **[#5604]** Make Fleet roster editing discoverable  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5604)  
   Enhances visibility of model-switching/edit actions in fleet views.

7. **[#5603]** Show tool and MCP schema token costs  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5603)  
   Displays estimated token usage per tool and MCP server in context inspector.

8. **[#5599]** OSC 12 cursor accent support (capability-gated)  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5599)  
   Applies theme accent color to terminal cursor safely under capable terminals.

9. **[#5591]** Goal continuation cadence fix — restores delayed dispatch path  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5591)  
   Fixes missing quiet period in within-turn goal dispatching.

10. **[#5535]** Supervised operation stack meta-PR — ties together control surface improvements  
    [Link](https://github.com/Hmbown/CodeWhale/pull/5535)  
    Integrates lifecycle outbox, /relaunch, control socket, and goal cadence fixes.

---

## Feature Request Trends

| Trend | Description |
|-------|-------------|
| **Improved Observability** | Users desire better introspection into what gets sent to providers (e.g., `/dryrun`) |
| **Robust Session Management** | Persistent memory, subagent survival, and relaunch capabilities are increasingly expected |
| **Provider Agnosticism** | Strong push toward decoupling DeepSeek-specific assumptions in core logic |
| **Supervision & Automation Hooks** | Lifecycle hooks, control sockets, and relaunch mechanisms signal readiness for production use |
| **Enhanced Fleet UX** | Editing discoverability, clearer navigation, and posture consistency are top priorities |

---

## Developer Pain Points

| Category | Summary |
|---------|---------|
| **Flaky Tests** | Certain tests crash or behave unpredictably under load, particularly on macOS |
| **Inconsistent Permissions** | Role posture enforcement varies across modules, leading to unexpected denials |
| **Lossy Subagent Behavior** | Background agents get destroyed unexpectedly, wasting compute and effort |
| **Broken Integrations** | Providers like NVIDIA NIM fail out of the box with opaque errors |
| **Poor Config Discovery** | Editing fleets/models isn’t intuitive; users struggle with first-time setups |
| **Cross-Session State Drift** | Lack of durable memory/state makes real-world adoption challenging |

--- 

Let us know if you'd like deeper dives into any specific feature area or contributor spotlight.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*