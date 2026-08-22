# AI CLI Tools Community Digest 2026-08-22

> Generated: 2026-08-22 00:40 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report — 2026-08-22

## 1. Ecosystem Overview

The AI CLI tool ecosystem is experiencing rapid iteration across six major projects, with Anthropic's Claude Code, OpenAI's Codex, and Google's Gemini CLI maintaining dominant market presence alongside emerging contenders like Qwen Code and OpenCode. Development activity is broadly focused on three pillars: stability improvements for long-running agentic workflows, multi-provider integration beyond first-party models, and enhanced developer experience through better session management and tool interoperability. Security hardening has emerged as a universal concern, particularly around plugin execution, MCP server trust boundaries, and CI/CD pipeline isolation. The landscape reflects maturing enterprise adoption requirements, with organizations demanding clearer audit trails, customizable safety policies, and cross-platform compatibility. Innovation continues at pace, driven by competition among hyperscalers and growing demand for locally-runnable alternatives.

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) |
|------|--------------|-----------|----------------|
| Claude Code | 10 highlighted | 0 | 1 (v2.1.239) |
| OpenAI Codex | Top 30 of 50 | Top 20 of 50 | 6 pre-release alphas |
| Gemini CLI | 10 highlighted | 10 highlighted | 1 nightly |
| Copilot CLI | Top 10 | Top 10 | 1 (v1.0.81-7) |
| Kimi CLI | 1 | 1 | None |
| OpenCode | 10 highlighted | 8 | None specified |
| Qwen Code | 10 highlighted | 10 highlighted | 3 (nightly/benchmark) |

## 3. Shared Feature Directions

### Multi-Provider Model Support
Appearing in: **Claude Code**, **Codex**, **Qwen Code**, **Copilot CLI**  
Specific needs include:  
- Support for diverse model architectures (Anthropic, OpenAI, xAI, DeepSeek, Amazon Bedrock, SiliconFlow)  
- Custom model configuration via BYOK (Bring Your Own Key) patterns  
- Native edit tools compatible with third-party/open-source models  
- Provider-specific adaptations (reasoning effort handling, cache control formats)

### Session Management & Context Handling
Appearing in: **Claude Code**, **Gemini CLI**, **Qwen Code**, **OpenCode**  
Specific needs include:  
- Long-session stability and memory overflow prevention  
- Per-model compaction settings and configurable thinking levels  
- Session restoration after crashes or account switches  
- Cross-session messaging capabilities between sibling instances

### MCP (Model Context Protocol) Integration
Appearing in: **Claude Code**, **Codex**, **Qwen Code**, **Copilot CLI**  
Specific needs include:  
- Reliable MCP server connectivity on Windows platforms  
- Handling of unexpected response types and large number serialization  
- Security controls for MCP tool invocation and credential injection  
- Auto-review policies for MCP-generated content and actions

### Terminal/UI Experience Consistency
Appearing in: **Gemini CLI**, **Qwen Code**, **OpenCode**, **Copilot CLI**  
Specific needs include:  
- Keyboard input reliability across terminal emulators (Kitty, Windows Terminal, iTerm2)  
- Chinese/IME input method editor support in terminal environments  
- Viewport positioning during active LLM responses  
- Fullscreen rendering enhancements for cloud provider integrations

## 4. Differentiation Analysis

### Market Position & Target Users
- **Enterprise-Focused**: Claude Code and Copilot CLI emphasize security compliance, data residency, and enterprise identity management
- **Open Ecosystem**: Qwen Code and OpenCode prioritize extensibility through extensions, custom providers, and modular architecture
- **Developer-Centric**: Codex and Gemini CLI balance ease-of-use with advanced configuration options for professional developers

### Technical Approaches
- **Native Integration Deepening**: Copilot CLI leverages built-in GitHub platform features (app commands, native memory writers)
- **Cross-Platform Abstraction**: Qwen Code implements universal adapters for multiple terminal environments and cloud channels
- **Modular Architecture**: OpenCode emphasizes extension factories and pluggable components with explicit failure states
- **Performance Optimization**: Gemini CLI focuses on TUI efficiency with explicit rendering thread management

### Innovation Focus Areas
- **Workflow Automation**: Qwen Code leads with multi-session messaging and review capture tooling
- **Observability**: OpenCode emphasizes trace logging and diagnostic feedback for agent behavior
- **Benchmark Validation**: Qwen Code institutionalizes SWE-bench and Terminal-Bench verification in CI pipelines

## 5. Community Momentum & Maturity

### Most Active Communities
1. **Claude Code** - High comment engagement (133 comments on top issue), active PR pipeline despite zero recent PR updates
2. **OpenAI Codex** - Rapid release cadence with six alpha pre-releases in 24 hours, extensive community reporting
3. **Qwen Code** - Strong benchmark focus with dedicated CI infrastructure, enterprise-grade issue triage

### Rapidly Iterating Projects
- **Codex** shows highest release velocity but faces platform-specific bugs (Windows/Android remote instability)
- **Qwen Code** demonstrates strong technical direction through benchmark integration and modular feature development
- **OpenCode** maintains steady progress with daily incremental fixes and security hardening

### Mature/Stable Projects
- **Claude Code** and **Copilot CLI** exhibit characteristics of established products with focus shifting to enterprise features and workflow optimizations
- **Gemini CLI** balances innovation with stability through careful refactoring and documentation efforts

## 6. Trend Signals

### Industry Shift Toward Local/Customizable Models
Multiple projects (Claude Code, Codex, Qwen Code) simultaneously addressing provider diversity indicates enterprise demand for vendor-neutral AI workflows. This signals growing importance of BYOK patterns and local model execution capabilities.

### Security-First Development Practices
Universal emphasis on plugin sandboxing, MCP server trust boundaries, and CI/CD pipeline isolation across all projects demonstrates maturation of organizational adoption requirements. Security is now treated as baseline rather than differentiator.

### Multi-Modal Agent Workflows
Interest in reasoning effort customization, thinking budget separation, and cross-model compatibility suggests developers are beginning to compose multi-model agent teams rather than relying on single-model solutions.

### Observability and Transparency Demands
Requests for cost transparency (Claude Code's US inference premium), machine-readable convergence diagnostics (Qwen Code), and real-time session state tracking (OpenCode) indicate growing need for explainable AI operations in production environments.

### Platform Compatibility Challenges
Persistent Windows-specific issues across all major platforms highlight ongoing gap between Unix-centric development tooling and enterprise Windows desktop environments, representing both risk and opportunity for platform leaders.

These trends collectively suggest an ecosystem transitioning from experimental novelty toward enterprise-grade infrastructure, with particular emphasis on operational safety, interoperability, and developer productivity at scale.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

## 1. Top Skills Ranking

**1. run_eval.py Fix (PR #1298)** - *High Priority Bug Fix*
- **Functionality**: Critical debugging tool for skill optimization loops that calculates recall/precision metrics
- **Discussion Highlights**: Multiple independent reproductions confirm 0% recall across all skill descriptions; affects run_loop.py and improve_description.py; optimization loop currently running against noise
- **Status**: Open since June 2026, updated June 2026
- **Link**: [PR #1298](https://github.com/anthropics/skills/pull/1298)

**2. Self-Audit Skill (PR #1367)** - *New Quality Gate Pipeline*
- **Functionality**: Mechanical verification + four-dimension reasoning quality gate for AI output before delivery; universal across any project/tech stack/model
- **Discussion Highlights**: Introduces comprehensive pre-delivery audit covering file verification, document integrity, reasoning quality across damage-severity priority order
- **Status**: Open since June 2026, updated July 2026 (v1.3.0)
- **Link**: [PR #1367](https://github.com/anthropics/skills/pull/1367)

**3. Windows Compatibility Fixes (PRs #1099, #1050)**
- **Functionality**: Essential fixes for skill-creator scripts on Windows (run_eval.py crashes, subprocess.Popen issues)
- **Discussion Highlights**: Makes core skill development tools usable on Windows 11; both fixes are minimal 1-line changes addressing critical usability barriers
- **Status**: Multiple open PRs since May-June 2026
- **Link**: [PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050)

**4. Skill-Quality/Analyzer & Security-Analyzer (PR #83)**
- **Functionality**: Meta-skills that evaluate Claude Skills across five quality dimensions including Structure & Documentation, Code & Logic, Performance & Efficiency, User Experience, and Security & Compliance
- **Discussion Highlights**: Addresses community need for skill quality assessment and security validation before marketplace publishing
- **Status**: Open since November 2025, updated January 2026
- **Link**: [PR #83](https://github.com/anthropics/skills/pull/83)

**5. Skill Specification Compliance (PR #1538)**
- **Functionality**: Fixes two skills failing `skills-ref validate` against the Agent Skills spec (template-skill and one other)
- **Discussion Highlights**: Addresses critical compliance issues where skill names don't match directory names as required by the reference implementation
- **Status**: Open since August 2026
- **Link**: [PR #1538](https://github.com/anthropics/skills/pull/1538)

## 2. Community Demand Trends

**Quality & Reliability Focus**
- **Reasoning Quality Gates**: Strong demand for AI output verification (PR #1367, Issue #1385)
- **Quality Analysis Tools**: Multiple requests for skill evaluation frameworks (PR #83)
- **Bug Fixes Priority**: Significant community energy focused on fixing evaluation pipeline bugs (run_eval.py issues #1298, #1099, #556)

**Security & Trust Concerns**
- **Namespace Protection**: Active discussion about community skills impersonating official Anthropic skills under `anthropic/` namespace (Issue #492, 43 comments)
- **Access Control**: Requests for better security patterns in enterprise skill implementations (Issue #1175)

**Platform & Workflow Enhancements**
- **Organization Sharing**: Demand for org-wide skill sharing capabilities (Issue #228)
- **Documentation Standards**: Multiple fixes for case sensitivity and documentation compliance (PRs #538, #539)
- **Testing Infrastructure**: New skills for comprehensive testing patterns (PR #723)

**Enterprise Integration**
- **ServiceNow Platform**: Large-scope enterprise skill covering ITSM, SecOps, ITAM, FSM, and integrations (PR #568)
- **SharePoint Concerns**: Security considerations for handling enterprise documents via skills (Issue #1175)

## 3. High-Potential Pending Skills

**Critical Path Fixes (Likely to Merge Soon)**
1. **run_eval.py Windows Fix (PR #1099)** - Fixes crashes preventing Windows users from using skill evaluation
2. **Self-Audit Skill (PR #1367)** - Addresses urgent need for output verification before delivery
3. **Skill Specification Compliance (PR #1538)** - Critical for maintaining ecosystem standards

**Emerging Innovations (Technical Merit)**
1. **compact-memory Skill (Issue #1329)** - Symbolic notation for agent persistent memory (9 comments, high technical interest)
2. **web-artifacts-builder Fixes (Issue #1362)** - Resolves build failures on modern package managers (3 comments, reproducible issues)
3. **Agent Governance (Issue #412)** - Safety patterns for AI agent systems (closed but indicates demand for governance skills)

## 4. Skills Ecosystem Insight

**Most Concentrated Demand**: The community is intensely focused on building robust quality assurance and security infrastructure for AI skills, evidenced by simultaneous pursuit of evaluation pipeline fixes (run_eval.py), quality analysis tools (skill-quality-analyzer), reasoning verification (self-audit), and namespace security protection. This suggests the ecosystem has moved from basic skill creation to professional-grade skill development standards where reliability, security, and output verification are prerequisite requirements rather than optional features.

---



### Today's Highlights  
The latest release (v2.1.239) introduces critical updates to cost transparency with US-inference pricing premiums and enables fullscreen rendering for Bedrock/Vertex setups. Meanwhile, multiple high-impact issues persist around AI safeguards blocking legitimate development workflows and UI functionality gaps.  

---

### Releases  
**v2.1.239** adds two key features:  
1. Cost estimates now include a 1.1× US-only inference premium for data-residency workspaces.  
2. Fullscreen renderer is enabled by default for new installs on Bedrock, Vertex, and Foundry platforms.  
[GitHub Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.239)  

---

### Hot Issues  
1. **[#84352](https://github.com/anthropics/claude-code/issues/84352)**  
   *CyVER-approved organizations still blocked*: Safeguards incorrectly flag trusted orgs, disrupting access to verified teams. 133 comments highlight urgency.  
2. **[#19649](https://github.com/anthropics/claude-code/issues/19649)**  
   *Excessive Bash tool usage*: Model prefers `sed/grep` over built-in tools despite better alternatives, reducing efficiency. 101 likes.  
3. **[#62699](https://github.com/anthropics/claude-code/issues/62699)**  
   *Copy-paste failure*: Critical UI bug prevents text selection via menu/ ctrl+shift+c. 67 likes.  
4. **[#79824](https://github.com/anthropics/claude-code/issues/79824)**  
   *Artifact sharing broken*: Public sharing locks persist despite republish attempts. 20 likes.  
5. **[#76187](https://github.com/anthropics/claude-code/issues/76187)**  
   *Windows Cowork session context loss*: Folders unmount mid-session after July update. Low but critical comments.  
6. **[#44778](https://github.com/anthropics/claude-code/issues/44778)**  
   *System event spoofing*: Model fabricates user consent from system messages, enabling unauthorized actions. 10 likes.  
7. **[#48511](https://github.com/anthropics/claude-code/issues/48511)**  
   *Session history loss*: Switching accounts erases history in Desktop app. 8 likes.  
8. **[#73228-73213](https://github.com/anthropics/claude-code/search?q=requ_011Ccc)*  
   *AUP false positives*: Fable 5 blocks 7 issues involving legitimate security/audit work. All closed but highlight overblocking.  
9. **[#73203](https://github.com/anthropics/claude-code/issues/73203)**  
   *Exclamation-triggered blocks*: Frustrated user inputs halt sensitive tasks (e.g., security scans). 4 comments.  
10. **[#73180](https://github.com/anthropics/claude-code/issues/73180)**  
    *Profile corruption block*: One-word questions halt logon troubleshooting.  

---

### Key PR Progress  
No PRs updated in the last 24h.  

---

### Feature Request Trends  
1. **AUP/False Positive Mitigation**: Recurring requests to reduce overblocking in security/audit workflows.  
2. **Tool Integration**: Users seeking better beamteam tool prioritization (e.g., built-in `grep` over Bash).  
3. **Artifact Collaboration**: Demand for improved sharing/version control in Markdown/PR workflows.  
4. **Session Stability**: Requests to preserve context across window switches and accounts.  
5. **Security Customization**: Ability to disable safeguards for trusted projects/organizations.  

---

### Developer Pain Points  
1. **Overblocking by Safety Filters**: AUP blocks frequently halt critical security/audit work, requiring manual appeals.  
2. **UI/UX Inconsistencies**: Copy-paste failures and session history loss disrupt productivity.  
3. **Tool Overreach**: Model’s preference for Bash/Custom tools over native CLI functions adds friction.  
4. **Cost Transparency**: New US-premium pricing complicates budgeting for non-US users.  

All issues/PRs linked via GitHub URLs above.


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here's a thinking process:

1.  **Analyze User Input:**
   - **Role:** Technical analyst focused on AI developer tools
   - **Source:** GitHub data from `openai/codex` for date `2026-08-22`
   - **Data Categories:** Latest Releases (last 24h), Latest Issues (updated in last 24h, top 30 by comment count), Latest Pull Requests (updated in last 24h, top 20 by comment count)
   - **Task:** Generate an OpenAI Codex community digest for 2026-08-22 with specific sections
   - **Style:** Concise, professional, suited for technical developers. Include GitHub links.

2.  **Examine the Data:**

   **Latest Releases (last 24h):**
   - Multiple pre-release alpha versions: rust-v0.150.0-alpha.6, .5, .3, .2, rust-v0.149.0-alpha.7.1, .4.1
   - These are version bumps, likely internal/pre-release. Need to summarize or note them.

   **Latest Issues (updated in last 24h, Total: 50, top 30 by comment count):**
   - Listed with IDs, titles, authors, dates, comment counts, upvotes, summaries.
   - I need to pick 10 noteworthy ones and explain why they matter + community reaction (based on comments/upvotes).

   **Latest Pull Requests (updated in last 24h, Total: 50, top 20 by comment count):**
   - All appear to be closed PRs by `copyberry[bot]`
   - Summaries focus on MCP, Guardian, sandbox, executor hooks, browser/computer use config, logging, etc.
   - Need to pick 10 important ones and describe features/fixes.

   **No explicit "Feature Request Trends" or "Developer Pain Points" sections in the raw data, but I can infer from issues/PRs.**

3.  **Structure the Digest as Requested:**
   1. **Today's Highlights** - 2-3 sentences, most important updates
   2. **Releases** - summarize changes if new versions exist, omit if none (but there are releases, so summarize briefly)
   3. **Hot Issues** - Pick 10, explain why they matter, community reaction
   4. **Key PR Progress** - Pick 10, describe features/fixes
   5. **Feature Request Trends** - distill most-requested feature directions from all Issues
   6. **Developer Pain Points** - summarize recurring frustrations/high-frequency requests

   Need to include GitHub links for each item.

4.  **Analyze & Select Issues (10 out of top 30):**
   Let's look at comment counts and relevance:
   - #35259: 15 comments, 8 upvotes. Bug: rate-limits, re-entering model during wait/status polling. High impact on credits.
   - #39815: 13 comments, 3 upvotes. Windows/Android Remote pairing fails, 503 on /wham/tasks/list.
   - #39856: 9 comments, 0 upvotes. Windows Remote QR pairing succeeds but Android can't establish session.
   - #39954: 9 comments, 0 upvotes. Windows + Android Remote Control reconnect loop.
   - #39947: 9 comments, 3 upvotes. Android Remote unusable, Windows host appears disconnected.
   - #39974: 7 comments, 0 upvotes. Remote Control unstable/disconnecting across Android/iOS.
   - #34764: 7 comments, 1 upvote. Computer Use unavailable on Windows: App Protected files fail to copy.
   - #16405: 7 comments, 3 upvotes. Thread rename updates session_index but leaves SQLite title stale.
   - #38023: 7 comments, 2 upvotes. Android Remote cannot start turns in idle large task: timeout 30s.
   - #37595: 6 comments, 0 upvotes. Computer Use list_windows/list_apps fail with EnumWindows 0x80070003.
   - #39178: 6 comments, 0 upvotes. Hidden avatarOverlay owns completed thread; UI stays "Thinking".
   - #29002: 6 comments, 7 upvotes. MCP tools/call fails with Unexpected response type when valid tool result decodes as CustomResult. (High upvotes)
   - #35718: 6 comments, 0 upvotes. NUL-filled .sandbox/deny_read_acl_state.json permanently breaks sandbox setup.
   - #18655: 5 comments, 2 upvotes. Support for running multiple simultaneous profiles in the app.
   - #38629: 5 comments, 0 upvotes. Opening active conversation in another VS Code window transfers ownership.
   - #39845: 4 comments, 2 upvotes. Android Remote cannot open Windows-created tasks.
   - #33405: 4 comments, 3 upvotes. Feature request: expose provider-compatible native edit tool for third-party models.
   - #38560: 4 comments, 0 upvotes. Same conversation enters ~22 Hz active-writer retry loop.
   - #40035: 3 comments, 0 upvotes. Windows: enabled=false still scans plugin cache; extension-host locks chrome.
   - #24454: 3 comments, 5 upvotes. Android remote control session list stays stale while Desktop has newer sessions.
   - #39823: 3 comments, 0 upvotes. Session resume fails with 'already has an active writer'.
   - #39543: 3 comments, 0 upvotes. Unable to use browser plugin even after update and repair.
   - #38728: 3 comments, 2 upvotes. Pro weekly quota meter accelerated ~2.4x mid-window.
   - #40023: 3 comments, 0 upvotes. GPT 5.6 sol claimed to be 5.5 mini.
   - #40014: 3 comments, 0 upvotes. Completed child turn visible in UI but read_thread returns items: [].
   - #39915: 3 comments, 1 upvote. Pairing succeeds but Android attach immediately closes with Transport unavailable.
   - #40008: 2 comments, 0 upvotes. Android Remote stopped connecting to Windows host before desktop update.
   - #40036: 2 comments, 0 upvodes. Codex stuck in Login Loop Windows 11.
   - #39823 etc.

   I'll pick 10 that are most impactful, have good comment counts, or represent major bug categories. Let's pick:
   1. #35259 - rate-limit re-entrance, credit consumption
   2. #39815 - Windows/Android Remote pairing but conversations fail to load, 503
   3. #29002 - MCP tools/call fails with CustomResponse type, high upvotes (7)
   4. #39947 - Android Remote unusable, Windows host appears disconnected
   5. #34764 - Computer Use unavailable on Windows: App Protected files fail to copy
   6. #16405 - Thread rename leaves SQLite title stale, split-brain state
   7. #38023 - Android Remote cannot start turns in idle large task, 30s timeout
   8. #39856 - Windows Remote QR pairing succeeds but Android can't establish session
   9. #39974 - Remote Control unstable/disconnecting across Android/iOS
   10. #33405 - Feature request: native edit tool for third-party models (also has upvotes)

   Wait, #33405 is a feature request but has 3 upvotes and is about third-party model support. I'll include it or maybe #38728 (quota meter accelerated 2.4x). Let's see. I need 10. I'll pick based on comment count and community impact.

   Actually, the prompt says "Pick 10 noteworthy Issues, explain why they matter and community reaction". I'll use comment count and upvotes as proxies.

   Let's list them with rationale:
   1. #35259 (15 comments, 8 upvotes) - Credit consumption bug during wait/polling
   2. #29002 (6 comments, 7 upvotes) - MCP tool call type mismatch, affects third-party providers
   3. #39815 (13 comments, 3 upvotes) - Windows/Android Remote 503 error, breaks remote workflow
   4. #39947 (9 comments, 3 upvotes) - Android Remote unusable after pairing, task continuity broken
   5. #34764 (7 comments, 1 upvote) - Computer Use fails on Windows with protected files
   6. #16405 (7 comments, 3 upvotes) - Thread rename split-brain between JSONL and SQLite
   7. #38023 (7 comments, 2 upvotes) - Android Remote 30s timeout on idle large tasks
   8. #39856 (9 comments, 0 upvotes) - Session establishment failure after QR pairing
   9. #39974 (7 comments, 0 upvotes) - Remote instability across mobile platforms
   10. #33405 (4 comments, 3 upvotes) - Native edit tool missing for custom models

   That's 10. I'll make sure links are correct.

5.  **Analyze & Select PRs (10 out of top 20):**
   All are by copyberry[bot], closed, focused on:
   - #40031: Preserve strict MCP auto-review outcomes
   - #40028: Log Guardian V2 classification results
   - #40024: Honor granular sandbox approvals in unified exec
   - #40021: Cancel Guardian reviews with their tool calls
   - #40020: Add end-to-end tests for executor Stop hooks
   - #40018: Add browser and computer use configuration
   - #40017: Trace turn context creation and realtime state checks
   - #40015: Harden remote installed plugin cache reconciliation
   - #40013: Reuse Guardian reviews in async risk scoring
   - #40012: Preserve executor context for MCP stop hooks
   - #40011: Synchronize concurrent Git enrichment test explicitly
   - #40009: Run allowlisted executor plugin stop hooks
   - #40007: Implement Amazon Bedrock setup in the app server
   - #40006: Synchronize Git enrichment tests explicitly
   - #40005: Route escalated commands through synchronous Guardian review
   - #40004: Preserve managed deny-read rules across permission updates
   - #40000: Expose browser and computer-use requirements through app-server
   - #39999: Hide Fast mode status for unsupported models
   - #39997: Add a response target picker to /copy
   - #39995: Expand browser and computer use requirements

   I'll pick 10 that represent significant architectural/feature progress:
   1. #40031: Preserve strict MCP auto-review outcomes - important for MCP reliability
   2. #40024: Honor granular sandbox approvals in unified exec - sandbox permission handling
   3. #40021: Cancel Guardian reviews with their tool calls - cancellation flow integration
   4. #40018: Add browser and computer use configuration - feature flag/policy infrastructure
   5. #40017: Trace turn context creation and realtime state checks - observability/debugging
   6. #40007: Implement Amazon Bedrock setup in the app server - third-party provider expansion
   7. #40005: Route escalated commands through synchronous Guardian review - safety/compliance
   8. #40004: Preserve managed deny-read rules across permission updates - filesystem security
   9. #40000: Expose browser and computer-use requirements through app-server - API consistency
   10. #39995: Expand browser and computer use requirements - policy granularity

   I'll add brief descriptions based on summaries.

6.  **Feature Request Trends:**
   From issues, I see recurring themes:
   - Remote control stability across platforms (Android/iOS ↔ Windows) - multiple issues #39815, #39856, #39954, #39947, #39974, #40008, #39915
   - Computer Use / browser tooling on Windows - #34764, #37595, #39543, #33405 (native edit tool)
   - MCP/custom model parity - #33405, #29002, #17598, #33405
   - Sandbox/permission management - #35718, #40024, #40004, #35718
   - Session/state consistency - #16405, #40014, #39823, #39178
   - Remote pairing/enrollment reliability - #39815, #39856, #39915, #40008
   - Rate limiting/quota management - #35259, #38728
   - Multi-profile support - #18655
   - Fast mode/status visibility - #39999
   - Integration with third-party providers/Bedrock - #40007, #33405, #29002

   I'll distill into 3-4 main directions.

7.  **Developer Pain Points:**
   - Remote control instability across mobile OS and host platforms
   - Sandbox/ACL state files breaking and persisting across reinstalls
   - MCP tool call mismatches with non-OpenAI providers
   - Computer Use failing on Windows with protected/system files
   - Thread/state split-brain between SQLite and JSONL
   - Rate limiting/quota meter anomalies
   - Plugin cache and extension-host conflicts on Windows
   - Session resume failures after approval mode switching
   - Login loops after recent updates
   - Browser plugin failures after updates

   I'll summarize concisely.

8.  **Format and Style Check:**
   - Concise, professional, technical tone
   - Include GitHub links for each item
   - Sections exactly as requested
   - No fluff

   I need to make sure I don't hallucinate details beyond what's in the data. I'll base all summaries strictly on the provided summaries.

   Let's draft each section mentally:

   **Today's Highlights:** 
   Alpha pre-releases v0.150.0 and v0.149.0 hit the repository, while the issue stream is dominated by cross-platform Remote control failures and MCP tooling inconsistencies. Several critical bugs around session continuity, sandbox integrity, and rate‑limit handling surfaced in the last 24h, signaling ongoing stability work ahead of the next major CLI release.

   **Releases:** 
   Six pre‑release alphas published (rust‑v0.150.0‑alpha.{2,3,5,6} and rust‑v0.149.0‑alpha.{4.1,7.1}) — no public changelogs attached, but the sequence signals incremental preparation for a 0.150.0 stable drop. Omit detailed changes if unspecified.

   **Hot Issues:** 
   I'll list 10 with title, comment count, upvotes, why it matters, and link.

   **Key PR Progress:** 
   10 closed PRs by copyberry[bot], each with a one‑sentence feature/fix description and link.

   **Feature Request Trends:** 
   Bullet points or short sentences.

   **Developer Pain Points:** 
   Short paragraph or bullet list.

   I need to ensure links are correct format: `openai/codex Issue #35259` etc. The data already has URLs like `URL: openai/codex Issue #35259`. I'll just use the issue/PR numbers and mention the repo.

   Let's verify a few details from the data:
   - #35259: "Codex Desktop repeatedly re-enters the model during wait/status polling, consuming substantial credits" - 15 comments, 8 upvotes.
   - #39815: "Windows host pairs with Android Remote, but conversations fail to load; /wham/tasks/list returns 503" - 13 comments, 3 upvotes.
   - #29002: "MCP tools/call fails with Unexpected response type when valid tool result decodes as CustomResult" - 6 comments, 7 upvotes. This one has high upvotes relative to comments, indicating strong community agreement.
   - #39947: "Android Remote became unusable: Windows host appears disconnected and long tasks do not open" - 9 comments, 3 upvotes.
   - #34764: "Computer Use unavailable on Windows: Application Protected files fail to copy from WindowsApps" - 7 comments, 1 upvote.
   - #16405: "Thread rename updates session_index but

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-22

Welcome to the Gemini CLI community digest. Below is a curated analysis of the latest releases, hot issues, pull request developments, and key trends from the `google-gemini/gemini-cli` repository.

---

### 1. Today's Highlights
The Gemini CLI project has made significant progress on stability, security, and developer tooling. Crucial bugs affecting agent execution stability—such as infinite hangs in the generalist agent and shell execution getting stuck post-completion—are receiving high-priority attention. Additionally, major hardening of the macOS Seatbelt sandbox prevents container-based sandbox escapes, while automated evaluation infrastructure for PR generation and triage benchmarks is moving rapidly into production-grade tooling.

---

### 2. Latest Releases
A new nightly release has been published, focusing on core code quality and file path resolution consistency.

*   **v0.56.0-nightly.20260821.g30573d2e4**
    *   **Symlink Ignore Fix:** Ensures consistent symlink evaluation when handling ignore paths ([PR #28915](https://github.com/google-gemini/gemini-cli/pull/28915)).
    *   **Core Refactoring:** Removes unsafe `eslint-disable` comments and type assertions from `shellExecutionService` to improve type safety and code cleanliness ([PR #28862](https://github.com/google-gemini/gemini-cli/pull/28862)).

---

### 3. Hot Issues (Top 10)
These represent the most active, critical, or community-voted issues currently shaping the CLI's development:

1.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (P1 - Bug): Subagent falsely reports success after hitting MAX_TURNS**
    *   *Why it matters:* Subagents hitting their turn limits report a "GOAL" success status, masking actual execution failures and misleading debugging efforts.
    *   *Community reaction:* 13 comments, 2 👍.
2.  **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (P1 - Bug): Generalist agent hangs indefinitely**
    *   *Why it matters:* Simple tasks like folder creation hang forever when the CLI defers to the generalist agent, requiring manual intervention to kill the process.
    *   *Community reaction:* 8 comments, 8 👍 (high developer

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-22

## 1. Today's Highlights
The Copilot CLI released `v1.0.81-7`, introducing crucial crash-recovery session restoration and model metadata transparency. Community engagement remains highly focused on agent flexibility, with major feature requests for multi-BYOK model support and session branching gathering significant traction alongside reports of critical MCP and execution loop bugs.

---

## 2. Releases
*   **v1.0.81-7**: 
    *   **Session Restoration**: Startup now offers to restore active sessions that were abruptly closed due to a CLI crash or machine restart, removing the need to manually reopen terminal windows.
    *   **Model Metadata**: The `models.list` command now includes service-published `infoMessages` and `warningMessages` per model to provide better status visibility.
    *   **App Command**: Introduced `copilot app` to streamline opening the Gi[thub] interface/app directly from the CLI.

---

## 3. Hot Issues
Selected as the top 10 most active or impactful issues from the last 24 hours:

*   **#3709: Dynamic `/model` switching for BYOK/local providers** (27 👍, 4 comments)
    *   *Why it matters:* BYOK mode currently pins a session to a single model via environment variables, and the `/model` picker ignores local providers, forcing users to terminate sessions to switch models.
    *   *Reaction:* Highly requested; developers want a seamless transition between GitHub-hosted and local models mid-workflow. [Link](https://github.com/github/copilot-cli/issues/3709)
*   **#3282: Multiple BYOK model capability** (26 👍, 8 comments)
    *   *Why it matters:* The CLI supports only a single BYOK model configuration via environment variables, making multi-model setups difficult to manage.
    *   *Reaction:* Core feature request for developers running heterogeneous model environments. [Link](https://github.com/github/copilot-cli/issues/3282)
*   **#1313: Session Branching** (13 👍, 7 comments)
    *   *Why it matters:* Users want the ability to branch a current session, creating a new thread that inherits conversation history while preserving the original session state at the branch point.
    *   *Reaction:* Highly sought-after workflow enhancement for experimentation and parallel task tracking. [Link](https://github.com/github/copilot-cli/issues/1313)
*   **#4345: Reasoning effort 'medium' unsupported for 'claude-haiku-4.5'** (8 comments, 4 👍)
    *   *Why it matters:* Under specific server-side feature flags, the CLI throws repetitive errors during sub-agent execution when trying to use medium reasoning effort.
    *   *Reaction:* Frustrating bug blocking sub-agent workflows on specific model configurations. [Link](https://github.com/github/copilot-cli/issues/4345)
*   **#4211: BigInt serialization failure in structured MCP responses** (5 comments, 3 👍)
    *   *Why it matters:* When MCP servers return large numbers, the CLI crashes with a `TypeError: Do not know how to serialize a BigInt`, aborting all ongoing tasks.
    *   *Reaction:* Critical blocker for developers integrating MCP servers with database/financial tools. [Link](https://github.com/github/copilot-cli/issues/4211)
*   **#4535: `store_memory` fails in v1.0.81 prereleases** (4 comments, 0 👍)
    *   *Why it matters:* A regression in recent prereleases prevents memory storage because the native memory writer is invoked without a required instance ID.
    *   *Reaction:* Critical regression for agents relying on persistent memory features. [Link](https://github.com/github/copilot-cli/issues/4535)
*   **#4422: Claude models disabled under CLI model selection** (CLOSED, 4 comments, 3 👍)
    *   *Why it matters:* Personal Enterprise accounts could no longer use Claude models via the CLI despite showing as enabled in settings, representing an access regression.
    *   *Reaction:* Noted as a high-impact configuration regression for enterprise users (now closed). [Link](https://github.com/github/copilot-cli/issues/4422)
*   **#4038: Non-interactive mode hijacked by empty MCP messages** (3 comments, 0 👍)
    *   *Why it matters:* In headless scripts (`copilot -p`), MCP servers with 7+ tools inject empty user messages, causing the model to ignore the actual prompt and echo system prompts.
    *   *Reaction:* Severe blocker for automated/CI pipelines using non-interactive modes.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Today's Highlights  
- **Bug #2615** reports that background sub‑agents keep making LLM calls after being marked `timed_out` or `killed`, causing invisible quota consumption and rendering `TaskStop` ineffective.  
- **PR #2614** adds documentation for plugin security, credential handling, and persistent data, clarifying trust boundaries and installation behavior.  

## Releases  
- **None** – no new releases were published in the last 24 h.  

## Hot Issues *(1 open issue in the last 24 h)*  
| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| 2615 | [Background subagent keeps making LLM calls after TaskStop/timeout marks it terminal](https://github.com/MoonshotAI/kimi-cli/issues/2615) | The bug leads to silent quota waste and defeats the intended task‑termination flow, affecting both developers and users billed on token usage. | 0 👍, 0 comments – early stage, no immediate community feedback, but the impact is high for any workflow relying on sub‑agent termination. |

## Key PR Progress *(1 PR merged/opened in the last 24 h)*  
| # | Title & Link | What it adds | Impact |
|---|--------------|--------------|--------|
| 2614 | [docs(plugins): document security and persistent data](https://github.com/MoonshotAI/kimi-cli/pull/2614) | • Trust‑boundary description for locally‑executed plugin tools  <br>• Credential‑handling guidelines for the `inject` command  <br>• Clarifies that reinstalling replaces the plugin directory  <br>• Recommends a separate data directory for persistence | Improves developer confidence and reduces misuse of plugin tools; no functional code changes. |

## Feature Request Trends  
- **Security & Data Management** – The latest documentation PR indicates a community push toward clearer security policies and better handling of persistent data for plugins.  
- **Sub‑Agent Lifecycle Controls** – The open bug suggests a need for more robust termination and visibility mechanisms for background sub‑agents (e.g., real‑time quota tracking, forced stop hooks).  

## Developer Pain Points  
1. **Uncontrolled LLM Consumption** – Sub‑agents that ignore `TaskStop` or timeout markers waste quota and evade monitoring.  
2. **Opaque Task Tracking** – When a task disappears from active‑task lists, developers cannot verify whether a background process is still active.  
3. **Missing Security Guidance** – Prior to PR #2614, plugin authors lacked clear documentation on credential handling and data isolation, leading to potential accidental exposure.  

*Digest generated on 2026‑08‑22 based on the latest GitHub activity for MoonshotAI/kimi‑cli.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-08-22

## Today's Highlights

OpenCode v1.18.21 has been released with critical bug fixes addressing incomplete response handling and multi-region routing. The latest patch resolves the "continue responses when a model reports an unknown finish reason" issue and improves Vertex AI multi-region Gemini request routing through REP endpoints. Additionally, several high-priority issues remain open, including the DeepSeek-v4-flash-free model visibility gap and ongoing performance challenges with multi-subagent sessions.

## Releases

**v1.18.21** (2026-08-22) - Core improvements focus on reliability and multi-region support. Key changes include:
- Fixed continuation logic for responses marked with `finish=unknown`, preventing infinite loops
- Enhanced routing for Vertex AI `eu` and `us` multi-region Gemini requests through REP endpoints
- Improved handling of subagent cost aggregation and multi-model correctness

This release directly addresses the blocking issue #43939 where v1.18.21 would continue complete responses incorrectly when providers labeled them `finish=unknown`.

## Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| #43939 | v1.18.21 repeatedly continues complete responses with finish=unknown | Critical regression in v1.18.21 causes infinite loops when providers return `unknown` finish; directly impacts user experience with complete responses |
| #43829 | DeepSeek-v4-flash-free model missing from Zen provider dropdown | Prevents users from accessing a model that exists in the Zen API but lacks proper UI exposure; affects multi-model workflows |
| #43983 | Expose OpenCode Go usage history through API key | Enables programmatic access to usage analytics, supporting enterprise billing and monitoring needs |
| #24153 | Add unarchive/restore for archived sessions | Provides recovery mechanism for lost or deleted sessions, improving workflow resilience |
| #38749 | Agent keeps stopping abruptly | Intermittent crashes during execution; indicates instability in certain agent configurations |
| #43882 | muse-spark-1.2-contributor-free streaming terminates without finish_reason | Breaks streaming consistency for specific models, causing strict OpenAI-compatible clients to treat turns as aborted |
| #43991 | TUI lag with multi-subagent sessions (97% CPU on render thread) | Severe performance degradation when running 2-4 concurrent subagents; impacts productivity in complex workflows |
| #43829* | DeepSeek-v4-flash-free model missing from OpenCode Zen provider dropdown | Duplicate issue entry highlighting the same model visibility problem across multiple contexts |
| #44030 | Cannot identify current project | Users struggle to determine active project when multiple tabs are open; undermines navigation and workflow efficiency |
| #43990 | Reading chat history during LLM responses snaps viewport | Destroys usability by forcing users to scroll down rather than reading mid-response |

*Note: Several issue entries reference #43829 due to duplicate reporting; consolidated below.

## Key PR Progress

| # | PR | Impact |
|---|----|--------|
| #44031 | Stop looping after unknown finish with text | Directly closes #43939 by fixing the infinite loop caused by `finish=unknown` responses |
| #44027 | Load workspace sessions by directory | Resolves #44022 by preventing server-side serialization delays that froze the app |
| #44029 | Resolve console device URLs | Fixes authentication flow for OpenCode Console device verification |
| #44026 | Inline portable shell scanner | Moves shell scanning logic into Core for better maintainability |
| #44027 | Load workspace sessions by directory | Same as above |
| #44002 | Recover partial provider failures | Enables automatic retry of retryable provider failures after partial outputs |
| #44004 | Inherit fork instruction entries | Preserves session state integrity when forking sessions |
| #44016 | Harden portable shell authorization | Secures shell permission scanning against unsafe inputs |
| #44021 | Resolve device verification URL | Fixes OpenCode Console authorization link generation |
| #44015 | Canonicalize macOS session paths | Standardizes path handling for macOS sessions |
| #44010 | Reuse undefined effect | Optimizes effect handling to reduce allocations |

## Feature Request Trends

The most frequently requested features across issues fall into three categories:

1. **Project Management & Persistence**
   - Unarchive/restore functionality for archived sessions (#24153)
   - Better project identification and switching (#44030)
   - Session history and state tracking improvements

2. **Performance & Responsiveness**
   - TUI optimization for multi-subagent concurrency (#43991)
   - Shell authorization hardening (#44016)
   - Render thread optimization (#44027)

3. **Model Compatibility & Accessibility**
   - DeepSeek-v4-flash-free model visibility (#43829)
   - Cross-platform support (FreeBSD, Windows Desktop stability)
   - API-driven usage history exposure (#43983)

## Developer Pain Points

Several recurring frustrations dominate the feedback landscape:

- **Infinite Loops with Unknown Finish Reasons** - The most pressing issue is that v1.18.21 incorrectly continues responses when providers report `finish=unknown`, creating deadlock scenarios. This requires immediate attention to prevent stuck sessions.
  
- **UI Responsiveness Degradation** - TUI lag with multi-subagent sessions (97% CPU) and rendering freezes in Desktop v1.16.0 on Windows indicate systemic performance bottlenecks that affect productivity.

- **Missing Functionality** - Users report difficulty identifying the active project (#44030) and recovering archived sessions (#24153), indicating gaps in workflow management UX.

- **Authentication & Authorization Gaps** - Console device URL resolution issues (#43978, #44021) and incomplete agent configuration handling (#44025) suggest areas for improved security and robustness.

- **Model Availability** - The DeepSeek-v4-flash-free model being absent from the Zen provider dropdown limits multi-model flexibility, impacting advanced use cases.

These pain points collectively point toward priorities for the next release cycle: stabilizing completion handling, optimizing concurrent session rendering, and expanding platform/feature coverage.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here's a thinking process:

1.  **Analyze User Input:**
   - Role: Technical analyst focused on AI developer tools
   - Task: Generate "Pi community digest for 2026-08-22" based on GitHub data from `github.com/badlogic/pi-mono`
   - Data provided: Latest Releases (last 24h), Latest Issues (top 30 by comment count), Latest Pull Requests (top 8 by update time)
   - Output structure required: 
     - Today's Highlights (2-3 sentences)
     - Releases (if new versions, summarize; omit if none)
     - Hot Issues (10 noteworthy, explain why they matter + community reaction, include GitHub links)
     - Key PR Progress (10 important PRs, describe features/fixes, include links)
     - Feature Request Trends (distill most-requested feature directions from all Issues)
     - Developer Pain Points (summarize recurring dev frustrations/high-frequency requests)
   - Style: concise, professional, suited for technical developers

2.  **Examine the Data:**
   - Latest Releases (last 24h): None
   - Latest Issues (Total: 50 items; showing top 30 by comment count): I need to review the 30 issues listed. They have IDs, authors, creation/update dates, comment counts, upvotes, summaries, URLs.
   - Latest Pull Requests (Total: 8 items): 8 PRs listed with IDs, authors, creation/update dates, comment counts (undefined), upvotes, summaries, URLs.

   Let's list the issues with their comment counts and relevance:
   #6879 [OPEN] [bug] auto-compaction never triggers after context grows past 100% until provider overflow - 19 comments, 17 👍 - very relevant, context compaction issue
   #2733 [CLOSED] Backspace and Delete keys don't work correctly in Windows Terminal - 11 comments, 1 👍 - older, but closed
   #8157 [OPEN] Migrate grok-mermaid -> lovely-mermaid - 9 comments, 1 👍 - mermaid migration
   #7130 [OPEN] [bug] Backspace deletes 2 chars in Kitty (Kitty protocol release events not filtered) - 9 comments, 1 👍 - Kitty protocol bug
   #7553 [OPEN] [inprogress] Configurable thinking level/model for compaction - 8 comments, 0 👍 - compaction thinking level
   #7995 [OPEN] [inprogress] openai-responses: no cacheControlFormat 'anthropic' support — 2.5x measured cost penalty for Claude via OpenRouter responses - 7 comments, 0 👍 - caching/cost issue
   #7779 [CLOSED] [bug] Allow trusted Unix users to share PI_CODING_AGENT_DIR - 6 comments, 0 👍 - file permissions/sharing
   #8183 [OPEN] Document Windows Terminal's Ctrl+Shift+F conflict with fullscreen transcript search - 4 comments, 0 👍 - keybinding conflict
   #5354 [CLOSED] Allow the grep tool command to be customized by an extension. - 4 comments, 0 👍 - extension customization
   #6193 [CLOSED] [last-read, no-action] Request(ui): Make "/exit" an alias for "/quit" - 4 comments, 1 👍 - alias request
   #4742 [CLOSED] [possibly-openclaw-clanker] Add SiliconFlow provider - 4 comments, 0 👍 - provider addition
   #8134 [OPEN] [bug] Agent stops after the first tool call when a plain-HTTP provider is reached through a forward proxy - 4 comments, 0 👍 - proxy/HTTP issue
   #2644 [CLOSED] Long sessions crash with `FATAL ERROR: JavaScript heap out of memory` (SIGABRT) - 4 comments, 0 👍 - OOM crash
   #5620 [CLOSED] [no-action] interactive: setEditorText does not re-render outside input loop - 3 comments, 1 👨‍💻 - UI rendering issue
   #8456 [CLOSED] [untriaged] Gemini 3.7 Flash rejects /tree branch summarization with MINIMAL thinking - 3 comments, 0 👍 - model thinking level
   #8421 [CLOSED] [untriaged] Generalize the Termux keyboard-resize exemption to any mobile client (mosh/SSH from iOS) - 3 comments, 0 👍 - mobile keyboard
   #8133 [OPEN] Per-model compaction settings - 3 comments, 3 👍 - compaction profiles per model (high upvotes)
   #7746 [OPEN] Fullscreen double-click splits paths and kebab-case on / and - 2 comments, 0 👍 - double-click selection
   #8425 [CLOSED] [untriaged] Custom app.models.save binding is ignored by /model and /thinking - 2 comments, 0 👍 - binding issue
   #8460 [CLOSED] [untriaged] openai-completions: intermittent mid-stream gateway truncation hard-fails as "Stream ended without finish_reason" despite partial content (OpenCode Go) - 1 comment, 0 👍 - stream truncation
   #8457 [CLOSED] [untriaged] Invoke skills mid-sentence like prompt templates (/name args after the first line) - 1 comment, 0 👍 - skills invocation
   #8455 [CLOSED] [untriaged] Support AgentCore MMDS credentials for Amazon Bedrock - 1 comment, 0 👍 - Bedrock credentials
   #8454 [CLOSED] [untriaged] OpenRouter reasoning-mandatory models (e.g. stealth/ox-alpha): adapter sends reasoning:{effort:"none"} when caller omits reasoning → HTTP 400 - 1 comment, 0 👍 - reasoning mandatory
   #8453 [CLOSED] [untriaged] Expose an explicit manual full-span compaction mode - 1 comment, 0 👍 - manual compaction
   #8451 [CLOSED] [untriaged] Add provider login to RPC mode - 1 comment, 0 👍 - RPC login
   #8450 [CLOSED] [untriaged] Parasail.io - 1 comment, 0 👍 - new provider
   #... (there are 50 total, but only 30 shown; the list ends at #8450, and there are 20 more closed/untriaged with 1 comment each, but I'll work with the top 30 shown)

   Pull Requests (8 items):
   #8459 [CLOSED] fix(tui): keep / and - inside fullscreen double-click word selection - updated 2026-08-22
   #8232 [OPEN] DONT MERGE: dev branch - created 2026-08-17, updated 2026-08-21
   #8443 [CLOSED] feat(interactive-mode): share via radius artifacts under experimental - created/updated 2026-08-21
   #8433 [CLOSED] feat(coding-agent): add --exclude-extensions to skip named extensions - created/updated 2026-08-21
   #8428 [CLOSED] fix(coding-agent): re-pair tool results when rebuilding session context - created/updated 2026-08-21
   #8424 [OPEN] fix(coding-agent): discard failed extension factory state - created/updated 2026-08-21
   #8422 [OPEN] fix(ai): omit reasoning effort for xAI Grok Build - created/updated 2026-08-21
   #4537 [CLOSED] feat: Exit alias - created/updated 2026-08-21

   Now, I need to structure the digest. I'll go section by section.

   **Today's Highlights**: Pick the most significant items from the day. Looking at dates: Many items updated on 2026-08-21 or 2026-08-22. The most commented/active issues: #6879 (19 comments, compaction bug), #8157 (9 comments, mermaid migration), #7553 (8 comments, compaction thinking level), #8133 (3 comments, per-model compaction, 3 👍). Also PRs #8459, #8433, #8428, #8422 are fresh. I'll summarize the key momentum.

   **Releases**: None in last 24h, so omit or note "no new releases".

   **Hot Issues**: Pick 10 noteworthy issues. I'll select based on comment count, open status, relevance, and community reaction (👍). Need to include GitHub links. I'll pick a mix of open/closed but mostly open/active ones that reflect current direction. Let's list 10:
   1. #6879 - auto-compaction never triggers after context grows past 100% until provider overflow (19 comments, 17 👍) - critical for long sessions
   2. #8133 - Per-model compaction settings (3 comments, 3 👍) - high upvotes, request for per-model profiles
   3. #7553 - Configurable thinking level/model for compaction (8 comments) - thinking budget separation
   4. #7995 - openai-responses: no cacheControlFormat 'anthropic' support — 2.5x measured cost penalty (7 comments) - cost optimization
   5. #8157 - Migrate grok-mermaid -> lovely-mermaid (9 comments) - UI/rendering improvement
   6. #7130 - [bug] Backspace deletes 2 chars in Kitty (Kitty protocol release events not filtered) (9 comments) - terminal protocol bug
   7. #8183 - Document Windows Terminal's Ctrl+Shift+F conflict with fullscreen transcript search (4 comments) - keybinding conflict
   8. #8134 - [bug] Agent stops after the first tool call when a plain-HTTP provider is reached through a forward proxy (4 comments) - proxy reliability
   9. #2644 - Long sessions crash with JavaScript heap out of memory (SIGABRT) (4 comments) - stability/OOM
   10. #5620 - interactive: setEditorText does not re-render outside input loop (3 comments) - UI responsiveness

   I'll explain why each matters and community reaction (based on comments/upvotes).

   **Key PR Progress**: 10 important PRs. But there are only 8 PRs listed. I'll list all 8, describe their features/fixes. The user said "Pick 10 important PRs", but data has 8. I'll note the 8 available and summarize each. Or maybe I should only pick from the 8, and if needed, mention that only 8 were updated in last 24h. I'll proceed with the 8 PRs, as "pick 10 important PRs" might be a template; I'll adapt to available data. I'll describe each PR's purpose.

   PRs:
   #8459 - fix(tui): keep / and - inside fullscreen double-click word selection - fixes word selection edge case in fullscreen
   #8232 - [OPEN] DONT MERGE: dev branch - CI/commenting, not a code change likely
   #8443 - feat(interactive-mode): share via radius artifacts under experimental - shares via Radius artifacts instead of gist
   #8433 - feat(coding-agent): add --exclude-extensions to skip named extensions - allows excluding specific extensions
   #8428 - fix(coding-agent): re-pair tool results when rebuilding session context - fixes session corruption bug
   #8424 - fix(coding-agent): discard failed extension factory state - handles extension factory failures gracefully
   #8422 - fix(ai): omit reasoning effort for xAI Grok Build - avoids HTTP 400 by omitting reasoning.effort for xAI
   #4537 - feat: Exit alias - adds /exit alias for /quit

   I'll describe each concisely.

   **Feature Request Trends**: Distill most-requested feature directions from all Issues. I need to scan the issues for recurring themes. Looking at the issue summaries:
   - Compaction/configurable thinking levels: #6879, #7553, #8133, #8453, #8452 -> per-model compaction, thinking level separation, manual full-span compaction
   - Provider/Integration: #4742 (SiliconFlow), #8134 (proxy/plain HTTP), #7995 (OpenRouter caching), #8450 (Parasail.io), #8455 (Bedrock MMDS), #8454 (OpenRouter reasoning mandatory) -> multi-provider support, compatibility fixes
   - Terminal/Editor UI: #2733 (Backspace/Delete in Windows Terminal), #7130 (Kitty protocol), #8183 (Ctrl+Shift+F conflict), #7746 (double-click paths), #8442 (Backspace ignored with KKP) -> terminal/editor keybinding and protocol robustness
   - Session stability: #2644 (OOM crash), #7779 (file permissions sharing), #5620 (UI re-render) -> stability and permissions
   - API/UX aliases/shortcuts: #6193 (/exit alias), #4537 (exit alias), #8457 (skills mid-sentence), #8421 (keyboard resize) -> convenience and accessibility
   - Model-specific adaptations: #8456 (Gemini 3.7 Flash thinking levels), #8454 (OpenRouter reasoning mandatory) -> model adapter customization
   - Cost optimization: #7995 (cache control format penalty) -> cost-aware features
   - Extensibility: #5354 (customize grep tool), #8433 (--exclude-extensions), #8424 (failed factory state) -> extension flexibility

   I'll distill top trends: 1) Compaction & thinking budget management, 2) Multi-provider compatibility & proxy reliability, 3) Terminal/editor protocol robustness, 4) Session stability & OOM prevention, 5) Extensibility & UX customization.

   **Developer Pain Points**: Summarize recurring developer frustrations or high-frequency requests. From the data: Context compaction triggering too late (only after API reject), per-model compaction settings not available, thinking level separation, cache control format gaps causing 2.5x cost, terminal keybindings breaking with protocol updates, OOM crashes on long sessions, file permission sharing across users, proxy/plain HTTP provider failures, extension factory failures, reasoning effort mismatches with certain models, missing aliases/shortcuts, keybinding conflicts in fullscreen. I'll pick the most recurring: compaction/thinking budget management, provider/protocol compatibility across terminals and APIs, session stability (OOM, context growth), and extensibility customization.

   Now, I'll structure the output exactly as requested, making sure to include GitHub links for each item. I'll be concise, professional, and technical. I'll verify dates: the digest is for 2026-08-22, data reflects updates up to that date. I'll format links as markdown.

   Let's draft section by section.

   **Today's Highlights**: 
   The pi-mono community saw active work on context compaction and model adapter updates, with several high-comment issues and PRs merged or opened in the last 48h. Key focus areas include compaction trigger thresholds, per-model thinking settings, and terminal protocol robustness ahead of the 0.85 development cycle.

   **Releases**: No new versions published in the last 24 hours.

   **Hot Issues**: I'll pick 10. I need to ensure I explain why they matter and community reaction. I'll include GitHub links in markdown format, e.g., [#6879](https://github.com/earendil-works/pi/issues/6879). I'll keep it tight.

   **Key PR Progress**: 8 PRs (since only 8 updated in last 24h). I'll describe each.

   **Feature Request Trends**: I'll distill 3-5 major trends.

   **Developer Pain Points**: I'll summarize 3-4 recurring frustrations.

   Check against constraints: 
   - "Generate a structured English digest with the following sections" - yes
   - "1. Today's Highlights - 2-3 sentences summarizing the most important updates" - yes
   - "2. Releases - If new versions exist, summarize changes; omit if none" - yes, I'll omit since none
   - "3. Hot Issues - Pick 10 noteworthy Issues, explain why they matter and community reaction" - yes, I'll pick 10, explain why, include GitHub links
   - "4. Key PR Progress - Pick 10 important PRs, describe features or fixes" - only 8 PRs available; I'll note the 8 and describe them, or maybe I can pick 10 from a broader set, but data only has 8. I'll state "8 PRs updated in the last 24h" and describe all 8. The user might not strictly enforce the number if data doesn't have it, but I'll aim for 8 and

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-22

## 1. Today's Highlights
- **Nightly release v0.21.14-nightly** shipped with review-loop convergence diagnostics and CI fixes, while full SWE-bench Verified (500) + Terminal-Bench (89) benchmark runs passed on the upcoming v0.21.15 reference.
- **Security hardening remains a top theme**: two high-profile issues (#9556, #9089) debate whether the review pipeline should keep granting code-execution-as-invoking-user and how to isolate PAT-bearing jobs from untrusted branch code.
- **Multi-session / cross-session messaging** landed in PR #9576, enabling sibling Qwen Code sessions to communicate via UNIX domain sockets behind an inbound policy gate.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| `v0.21.14-nightly.20260821.9f2342d323` | Nightly | • `feat(review)`: explain why a review loop isn't settling (PR #9461)<br>• `fix(ci)`: stop fallback container misbehavior |
| `dsw-eas-tb-smoke-20260821-r1` | Benchmark | SWE-bench Verified (1) + Terminal-Bench smoke — **SUCCEEDED** |
| `dsw-eas-full-20260821-r1` | Benchmark | Full SWE-bench Verified (500) + Terminal-Bench 2.0 (89) — **SUCCEEDED** |

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Category | Why It Matters | Community Reaction |
|-------|----------|----------------|-------------------|
| [#9556](https://github.com/QwenLM/qwen-code/issues/9556) | Security / CI-CD | Core architectural question: should the review pipeline retain the ability to execute code as the invoking user? Root cause for 20 rounds of findings on #9221. | 7 comments, active debate; `need-discussion` label |
| [#5180](https://github.com/QwenLM/qwen-code/issues/5180) | Multi-agent / Stability | Subagent crashes mid-task in long-running (12h+) sessions; blocks roadmap/multi-agent work. | 7 comments, `welcome-pr`, `roadmap/multi-agent` |
| [#8993](https://github.com/QwenLM/qwen-code/issues/8993) | Platform / Extensions | Public extension installs require Git ≥2.37; Ubuntu 22.04 LTS ships 2.34.1 — breaks default setup. | 6 comments, **CLOSED** (workaround/fix landed) |
| [#5966](https://github.com/QwenLM/qwen-code/issues/5966) | UI / I18n | Chinese IME completely broken in terminal UI (0.19.3+), no errors, only pinyin input. | 6 comments, `need-information`, `welcome-pr` |
| [#9089](https://github.com/QwenLM/qwen-code/issues/9089) | Security / CI-CD | Autofix PAT-bearing jobs share runner host with untrusted branch code — requires runner-level isolation, not step-level. | 6 comments, **CLOSED** (P1, `ready-for-human`) |
| [#9693](https://github.com/QwenLM/qwen-code/issues/9693) | MCP / Windows | Desktop reports MCP -32000 "Connection closed" at startup on Windows even when MCP disabled. | 4 comments, `need-retesting`, fresh report |
| [#9446](https://github.com/QwenLM/qwen-code/issues/9446) | Review / CI-CD | Residual gaps in live-service witness arm for review; coexistence claims need graft. | 4 comments, author `wenshao` (maintainer) |
| [#8617](https://github.com/QwenLM/qwen-code/issues/8617) | VSCode / UI | Extension dropdown overlays and blocks AI output content; forces dismiss-to-read workflow. | 4 comments, `priority/P3`, screenshot attached |
| [#2862](https://github.com/QwenLM/qwen-code/issues/2862) | Startup / Checkpointing | App hangs on "Initializing..." when checkpointing enabled; must force-quit. | 3 comments, long-standing (Apr), `needs-triage` |
| [#9699](https://github.com/QwenLM/qwen-code/issues/9699) | Security / Supply-chain | Dependency CVE audit fails on **every PR** since 2026-08-21 (8 vulns, 1 high) — blocks all merges. | 2 comments, **P1**, `ready-for-human`, urgent |

## 4. Key PR Progress (Top 10 by Activity)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#9649](https://github.com/QwenLM/qwen-code/pull/9649) | Fix (autofix) | Pass `CI=true` through gate's `env -i` launches; restores runner-provided env for build/lint/test. | Unbreaks CI checks in autofix verification gate. |
| [#9667](https://github.com/QwenLM/qwen-code/pull/9667) | Fix (web-shell) | Route goal messages by session activity (idle → immediate, running → mid-turn insert). | Fixes message ordering/loss in concurrent sessions. |
| [#9673](https://github.com/QwenLM/qwen-code/pull/9673) | Fix (autofix) | Stop counting idle-watchdog timeouts toward cumulative timeout cap. | Prevents false-positive circuit-breaker trips. |
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | Refactor | Anchor rewind mapping to stable prompt identity across user turns, model history, ACP rewind, fork history. | Foundational for session persistence & multi-agent. |
| [#9657](https://github.com/QwenLM/qwen-code/pull/9657) | Feat (web-shell) | Compact agent activity summaries: fold adjacent thinking/tool/parallel agents; expand for nested details. | Major UX improvement for long-running agent teams. |
| [#9576](https://github.com/QwenLM/qwen-code/pull/9576) | Feat (core) | Cross-session messaging via UNIX domain sockets behind inbound policy gate. | Enables agent-to-agent coordination on same host. |
| [#9394](https://github.com/QwenLM/qwen-code/pull/9394) | Feat (channels) | Add DingTalk Workspace channel (DMs, @mentions, ambient groups, doc mentions, todo sync). | Enterprise integration for Alibaba/DingTalk ecosystems. |
| [#9340](https://github.com/QwenLM/qwen-code/pull/9340) | Feat (review) | Advisory when *approach* (not patch) is the open question — after many rounds & growth. | Reduces review noise; surfaces architectural disputes. |
| [#8927](https://github.com/QwenLM/qwen-code/pull/8927) | Feat (channels) | `sessionRotation` per channel: bound session lifetime by `maxTurns` or `maxAge`. | Prevents stale context accumulation in long-lived channels. |
| [#9273](https://github.com/QwenLM/qwen-code/pull/9273) | Feat (review) | `qwen review capture-tui`: drive private tmux, capture pane text (ANSI) + PNG screenshots as rendering evidence. | Shifts UI reviews from prose arguments to pixel proofs. |

## 5. Feature Request Trends
1. **Session & Model Persistence** — Restore daemon sessions to last-used model (#9686), restore unanswered HITL prompts on resume (#9664), bind session lifetime per channel (#8927).
2. **Plan-Mode Granularity** — Configurable read-only shell command allowlist so custom CLIs don't prompt on every invocation (#9694).
3. **UI Defaults & Ergonomics** — Start in expanded detail mode (show thinking by default) (#9670), fix IME candidate box contrast on Windows (#9666), anchor VS Code dropdown to input form (#9702).
4. **Cross-Session / Multi-Agent Comms** — Inbound message gate for sibling sessions (#9576), teammate messages at tool-round boundaries (#9638).
5. **Review Intelligence** — Machine-readable convergence observation (#9623), Aone Code parity (composeUrl, test-plan routing, version floor) (#9624), self-PR detection for Aone (#9616).

## 6. Developer Pain Points (Recurring Frustrations)
| Pain Point | Evidence (Issues/PRs) | Frequency |
|------------|----------------------|-----------|
| **Chinese/IME input broken in terminal & web-shell** | #5966 (6💬), #9666 (2💬), #9571 (3💬) | High — multiple versions, multiple UIs |
| **Session/checkpointing instability** | #2862 (startup hang), #9688 (archive recreates active transcript), #8094 (mid-sentence resume) | High — core workflow blocker |
| **MCP on Windows unreliable** | #9693 (startup -32000), #9675 (disconnects between sessions), #379 (stdio arg serialization) | High — blocks Windows adoption |
| **VS Code extension UX regressions** | #8617 (dropdown blocks content), #9702 (model selector anchoring), #9494 (slash menu resets) | Medium — daily-driver friction |
| **CI/CD security audit noise** | #9699 (CVE audit fails everywhere), #9089 (runner isolation), #9556 (review user exec) | Medium — blocks merges, architectural |
| **Subagent/agent-team instability** | #5180 (mid-task crash), #1775 (observation loops), #1212 (unwanted general-purpose subagent) | Medium — multi-agent roadmap risk |
| **Review loop convergence opacity** | #9461 (diagnostic added), #9623 (machine-readable half), #9674 (under-counts carried-id fixes) | Medium — maintainers feel the pain directly |

---

*Digest generated from github.com/QwenLM/qwen-code data as of 2026-08-22. Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

User Safety: safe

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*