# AI CLI Tools Community Digest 2026-08-29

> Generated: 2026-08-29 04:50 UTC | Tools covered: 9

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

## 2026-08-29

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a phase of rapid stabilization and feature hardening. Today's digest reveals two distinct tiers: **Claude Code, OpenAI Codex, and Gemini CLI** are shipping meaningful releases with new hooks, model integrations, and security controls, while **Kimi Code CLI and DeepSeek TUI** show minimal recent activity. The most mature ecosystems—Claude Code and Pi—demonstrate sophisticated developer communities with highly engaged issue discussions (164+ comments on critical bugs), suggesting these tools are deeply embedded in production workflows. Windows platform stability emerges as the single most pervasive pain point across all tools that support it, indicating systemic gaps in cross-platform testing or divergent platform abstractions.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Issues Updated (24h) | PRs Updated (24h) | Community Engagement (Top Issue) |
|------|----------------|----------------------|-------------------|----------------------------------|
| **Claude Code** | v2.1.251 | High (Top 10 selected) | 1 | 164 comments, 25 👍 (#84352) |
| **OpenAI Codex** | 5 Alpha Builds | 50 total | 46 total | 44 comments, 65 👍 (#39903) |
| **Gemini CLI** | Nightly v0.59.0 | 10 Issues | 10 PRs | Priority P1 trending |
| **Copilot CLI** | v1.0.82-1 | 10 Issues | 1 | FileWatch loop (13 GB log) |
| **Kimi Code CLI** | None | 3 Issues | 1 PR | Security bug fix (Closed) |
| **OpenCode** | v1.18.25 | 10 Issues | 10 PRs | 119 comments, 52 👍 (#29079) |
| **Pi** | v0.84.4 | 47 total | 18 total | 24 comments, 20 👍 (#6879) |
| **Qwen Code** | v0.22.3 + Nightly | 10 Issues | 10 PRs | Web-shell stability fixes |
| **DeepSeek TUI** | None | 10 Issues | 10 PRs | Epic coordination (18 comments) |

---

## 3. Shared Feature Directions

The following requirements appear consistently across multiple tool communities:

**A. Enhanced Observability & Debugging**
- **Claude Code**: Live streaming of sub-agent tool calls to Remote Con; usage visibility requests
- **OpenAI Codex**: Request duration reporting for code mode host; command collapsing toggle for audit trails
- **Pi**: TUI row corruption fixes; streaming text rendering improvements
- **Qwen Code**: Review coverage ledger and session issue bindings
- *Pattern*: Developers demand granular visibility into agent behavior, token usage, and execution history.

**B. Plugin & Extension Ecosystem Maturity**
- **Claude Code**: PreModelSwitch/PostModelSwitch hooks for model switches
- **DeepSeek TUI**: Plugin discoverability parity with Claude Code (#5579)
- **Pi**: Extension provider registration timing fixes; artifact verification repair gates
- **Copilot CLI**: Agent Plugins 1.0 with custom agent discovery failures (#4655)
- *Pattern*: Every major tool is investing in extension APIs, suggesting a future where CLI tools are platforms rather than singular utilities.

**C. Multi-Agent & Session Management**
- **Claude Code**: Session staleness estimation; child session grouping
- **Qwen Code**: Named sessions with 8 persistent tasks per channel; session rotation bounds
- **DeepSeek TUI**: Daytona cloud-agent dispatch; scoped thread store per session
- **OpenCode**: Bound consumed job history (100 jobs, 16 MiB output)
- *Pattern*: Moving beyond single-session interactions toward coordinated multi-agent workflows with resource governance.

**D. Cross-Platform Reliability (Windows Focus)**
- **Claude Code**: Orphaned processes, Dispatch tab missing, MSIX failures
- **OpenAI Codex**: Tool host exits during handshake, DWM handle accumulation, headless desktop issues
- **Copilot CLI**: Session resume hangs, parallel subagent UI freezing, sandboxing gaps
- **Pi**: TUI crashes on narrow terminals (80-88 cols), Windows console flashes
- *Pattern*: Windows platform receives the most bug reports and regression complaints across all tools.

**E. Security Hardening**
- **Claude Code**: Cyber-safeguard false positive regression (#84352)
- **Gemini CLI**: Fail-closed workspace trust, NTFS 8.3 path traversal, OAuth IdP mix-up prevention
- **Kimi Code CLI**: MCP tool call file access control bypass (Critical, Closed)
- **Qwen Code**: Hook execution trust boundary closure
- *Pattern*: As tools gain filesystem and network access, security boundary violations are receiving high-priority fixes.

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|--------------|-------------|-------------------|
| **Claude Code** | Hook extensibility, session observability | Professional developers, enterprise teams | Sophisticated event hooks (PreModelSwitch, PostModelSwitch), Remote Con streaming |
| **OpenAI Codex** | Model catalog integration, PTY/TTY subprocess handling | Developers preferring OpenAI ecosystem | Rust-based alpha releases; elicitation forms; multi-agent instruction sourcing from model catalog |
| **Gemini CLI** | Security-first, restricted mode enforcement | Security-conscious enterprises | Nightly cadence; RFC 9207 issuer identification; ECC bundle integration |
| **Copilot CLI** | Windows stability, enterprise auth | GitHub Enterprise users | Focus on regressions from v1.0.81 upgrade; data residency auth |
| **Kimi Code CLI** | Security patches, billing transparency | Cost-sensitive developers | Minimal feature growth; asyncssh security upgrades; cache_read billing investigation |
| **OpenCode** | Model performance, resource management | Multi-model power users | Job history bounding; response tool call identity isolation; Ollama compatibility |
| **Pi** | TUI refinement, compaction reliability | Interactive terminal users | Terminal capability overrides; adaptive truncate; compaction model caps |
| **Qwen Code** | Web-shell stability, CI/CD optimization | Alibaba ecosystem developers | Named sessions; review process maturity; pnpm adoption |
| **DeepSeek TUI** | Plugin UX parity, cloud offload | Plugin-extensible workflow users | Daytona integration; proactive plugin suggestions; headless PR review |

---

## 5. Community Momentum & Maturity

**Highest Momentum:**
1. **Claude Code** — Active development with significant PRs (security glob fix), active issue discussions (164 comments), and clear roadmap signals from hook events and model catalog integration.
2. **Pi** — High community engagement (47 issues, 18 PRs), diverse feature requests, and rapid iteration on TUI stability.

**Stable Releases with Focused Fixes:**
- **OpenAI Codex** — Multiple alpha builds indicate active development, but all PRs closed by automation suggests a centralized release pipeline.
- **Qwen Code** — Dual release strategy (stable + nightly) with balanced issue/PR activity.
- **Gemini CLI** — Nightly-only with strong security focus; community appears smaller but technically sophisticated.

**Lower Activity / Maintenance Mode:**
- **Kimi Code CLI** — Only 3 issues, 1 PR; primarily security-focused maintenance.
- **DeepSeek TUI** — No releases in 24h; activity centered on epic coordination rather than feature shipping.

**Mature Communities with High Technical Debt:**
- **OpenCode** — High comment counts on issues (119 on latency), suggesting deep user engagement but also significant unresolved technical challenges.
- **Copilot CLI** — Recent regression (v1.0.81) causing sustained community pain with authentication and stability issues.

---

## 6. Trend Signals

**For Technical Decision-Makers:**

1. **Windows is the Weakest Platform** — Every tool with Windows support reports platform-specific regressions. If your team is Windows-first, expect to encounter bugs not present on macOS/Linux. This represents a testing infrastructure gap that is unlikely to be resolved short-term.

2. **Security is Becoming Table Stakes** — Three tools (Gemini CLI, Kimi Code CLI, Qwen Code) shipped significant security fixes this cycle. MCP tool call sandboxing and workspace trust enforcement indicate that the attack surface of AI CLIs is being actively probed and hardened.

3. **The Extension API Race** — Claude Code's hook events, Pi's extension provider registration, DeepSeek TUI's plugin suggestions, and Copilot CLI's Agent Plugins 1.0 all signal that the next competitive differentiator is ecosystem extensibility, not core model capability.

4. **Multi-Agent Coordination is Emerging** — Session grouping, child session management (Claude Code), cloud-agent dispatch (DeepSeek TUI), and named sessions with persistent tasks (Qwen Code) indicate the industry is moving toward coordinated agent workflows rather than single-purpose CLI interactions.

5. **Billing and Cost Visibility Gaps** — Kimi Code CLI's cache_read billing anomaly and multiple requests for usage APIs across tools highlight that developers need better cost forecasting tools integrated into their development loops.

6. **TUI Stability Remains Fragile** — Pi's narrow-terminal crashes, OpenCode's diff renderer freezes, and Claude Code's Dispatch tab regressions show that terminal UI development is still immature compared to web/desktop applications.

**Reference Value for Developers:**
- Evaluate tools based on Windows stability if cross-platform is required.
- Extension APIs are maturing fastest in Claude Code and DeepSeek TUI.
- For enterprise use cases, Gemini CLI's security-first approach may offer the most conservative posture.
- Cost-conscious teams should monitor Kimi Code CLI's billing investigation and demand similar transparency from all providers.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here's a thinking process:

1.  **Analyze User Input:**
   - User wants a "Claude Code Skills community highlights report" based on data from `anthropics/skills` repo as of 2026-08-29
   - Data includes Popular Pull Requests (top 20 shown) and Community Issues (top 15 shown)
   - Need to generate 4 specific sections:
     1. Top Skills Ranking (5-8 most-discussed PRs by comments/attention)
     2. Community Demand Trends (from Issues, distill most-anticipated new Skill directions)
     3. High-Potential Pending Skills (active-comment PRs not yet merged)
     4. Skills Ecosystem Insight (one-sentence summary of community's most concentrated demand)
   - Style: concise, professional, include GitHub links
   - I need to use the provided data to construct this report

2.  **Examine the Data:**
   - Popular PRs (top 20 shown, 50 total). Each has: #, Title, Author, Created, Updated, Comments, Likes, URL, Summary
   - Community Issues (top 15 shown, 50 total). Each has: #, Title, Author, Created, Updated, Comments, Likes, URL, Summary
   - Comments field is listed as "undefined" for all PRs, but for Issues it has numbers. Wait, looking carefully: PRs have "Comments: undefined" but Issues have actual comment counts (e.g., "Comments: 43", "Comments: 16", etc.). This is odd but I'll work with what's given.
   - For PRs, the "👍" column has 0 for all shown. But issues have 👍 counts.
   - I need to rank PRs by "comments/attention". Since all PRs show "Comments: undefined", I might need to infer attention from other signals, or perhaps the "Comments" field being undefined means I should look at other PRs or use the ones that have activity. Wait, the prompt says "sorted by comments, 50 total, showing top 20". But the data shows "Comments: undefined" for all PRs. This might be a data formatting issue in the prompt. I'll have to work with what's there. Maybe I should treat the PRs as having implicit activity based on recency, author, or summary significance. Alternatively, I could note that comments aren't displayed but use other metrics like recency, author, or the fact they're in the "top 20" sorted by comments (implying they have some comment activity, just not shown in the snapshot). I'll proceed by selecting PRs that seem most significant based on content, recency, and the fact they're in the top 20.

   Let's list the PRs with their details:
   #1298: fix(skill-creator): run_eval.py always reports 0% recall ... MartinCajiao | 2026-06-10 | 2026-06-23 | Comments: undefined | 👍: 0
   #514: Add document-typography skill ... PGTBoos | 2026-03-04 | 2026-03-13 | Comments: undefined | 👍: 0
   #1615: Add scnet-hpc skill ... lql341 | 2026-08-20 | 2026-08-24 | Comments: undefined | 👍: 0
   #538: fix(pdf): correct case-sensitive file references ... Lubrsy706 | 2026-03-06 | 2026-04-29 | Comments: undefined | 👍: 0
   #486: Add ODT skill ... GitHubNewbie0 | 2026-03-01 | 2026-04-14 | Comments: undefined | 👍: 0
   #210: Improve frontend-design skill clarity ... justinwetch | 2026-01-05 | 2026-03-07 | Comments: undefined | 👍: 0
   #83: Add skill-quality-analyzer and skill-security-analyzer ... eovidiu | 2025-11-06 | 2026-01-07 | Comments: undefined | 👍: 0
   #541: fix(docx): prevent tracked change w:id collision ... Lubrsy706 | 2026-03-06 | 2026-04-16 | Comments: undefined | 👍: 0
   #539: fix(skill-creator): warn on unquoted description ... Lubrsy706 | 2026-03-06 | 2026-04-16 | Comments: undefined | 👍: 0
   #1628: Add Hivemind: Zero-Cost Multi-Agent Orchestration ... Hanishchow | 2026-08-21 | 2026-08-24 | Comments: undefined | 👍: 0
   #1607: Update claude-api skill: mark four retired model IDs ... adi-IL | 2026-08-18 | 2026-08-26 | Comments: undefined | 👍: 0
   #1602: fix: resolve evaluation serialization, benchmark metrics ... AbhiPra24 | 2026-08-17 | 2026-08-24 | Comments: undefined | 👍: 0
   #1595: docs: add UIZZE to partner skills ... samuelbushi | 2026-08-17 | 2026-08-27 | Comments: undefined | 👍: 0
   #1367: feat(skills): add self-audit ... YuhaoLin2005 | 2026-06-28 | 2026-07-02 | Comments: undefined | 👍: 0
   #1099: skill-creator: fix run_eval.py crash on Windows ... joshuawowk | 2026-05-07 | 2026-05-24 | Comments: undefined | 👍: 0
   #1050: skill-creator: fix Windows subprocess + encoding bugs ... gstreet-ops | 2026-04-27 | 2026-05-24 | Comments: undefined | 👍: 0
   #723: feat: add testing-patterns skill ... 4444J99 | 2026-03-22 | 2026-04-21 | Comments: undefined | 👍: 0
   #568: feat: add ServiceNow platform skill ... Vanka07 | 2026-03-08 | 2026-08-12 | Comments: undefined | 👍: 0
   #525: Add pyxel skill for retro game development ... kitao | 2026-03-05 | 2026-07-15 | Comments: undefined | 👍: 0
   #509: docs: add CONTRIBUTING.md ... narenkatakam | 2026-03-03 | 2026-03-19 | Comments: undefined | 👍: 0

   Issues (top 15 shown, 50 total):
   #492 [OPEN] Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse ... aliksir | 2026-03-02 | Updated: 2026-07-20 | Comments: 43 | 👍: 2
   #228 [OPEN] Enable org-wide skill sharing in Claude.ai ... jh-broad-reach | 2026-01-13 | Updated: 2026-07-25 | Comments: 16 | 👍: 8
   #556 [OPEN] run_eval.py: claude -p never triggers skills/commands (0% trigger rate across all queries) ... dthau120391 | 2026-03-07 | Updated: 2026-06-10 | Comments: 12 | 👍: 7
   #62 [OPEN] All my skills have disappeared an now i get errors ... nicksonnenberg | 2025-10-24 | Updated: 2025-10-27 | Comments: 10 | 👍: 2
   #1329 [OPEN] Proposing a second skill: compact-memory (symbolic notation for compact agent state) ... WGlynn | 2026-06-17 | Updated: 2026-07-04 | Comments: 9 | 👍: 0
   #202 [CLOSED] skill-creator should be updated to best practice ... oaustegard | 2026-01-02 | Updated: 2026-04-19 | Comments: 8 | 👍: 1
   #412 [CLOSED] Skill proposal: agent-governance ... imran-siddique | 2026-02-18 | Updated: 2026-06-13 | Comments: 6 | 👍: 0
   #189 [OPEN] document-skills and example-skills plugins install identical content ... chuggies510 | 2025-12-30 | Updated: 2026-05-06 | Comments: 6 | 👍: 9
   #1487 [OPEN] claude-api skill eagerly injects ~156k tokens ... DaKev | 2026-07-27 | Updated: 2026-07-28 | Comments: 4 | 👍: 0
   #1390 [OPEN] mcp-builder: evaluation.py scores 0/N against any real MCP server ... ejprice | 2026-07-04 | Updated: 2026-08-25 | Comments: 4 | 👍: 0
   #1385 [OPEN] [Proposal] Reasoning Quality Gate Pipeline ... YuhaoLin2005 | 2026-07-03 | Updated: 2026-08-01 | Comments: 4 | 👍: 1
   #1175 [CLOSED] Concerns regarding Security and Context Window when handling SharePoint Online ... m-cho-bunsekiya | 2026-05-21 | Updated: 2026-06-16 | Comments: 4 | 👍: 0
   #29 [OPEN] Usage with bedrock ... mrkhalil6 | 2025-10-18 | Updated: 2025-10-26 | Comments: 4 | 👍: 0
   #16 [OPEN] Expose Skills as MCPs ... lucis | 2025-10-17 | Updated: 2025-10-21 | Comments: 4 | 👍: 0
   #12 [OPEN] Add guidance to avoid whitespace reformatting in docx/ooxml skill ... thejud | 2025-10-16 | Updated: 2026-08-05 | Comments: 4 | 👍: 1

   Now, I need to generate the report sections.

   Section 1: Top Skills Ranking - List 5-8 most-discussed Skills (PRs) by comments/attention. Since PR comments are "undefined", I'll have to infer from the fact they're in the top 20 sorted by comments, or use other signals. Perhaps I can reference the Issues that relate to PRs, or just pick the most notable ones based on content and recency. I'll select 7 PRs that seem most significant, and I'll note their status (open, etc.). I'll also link to them.

   Let's pick:
   - #1298: fix(skill-creator): run_eval.py always reports 0% recall - critical bug fix, open
   - #1615: Add scnet-hpc skill - very recent (Aug 20-24, 2026)
   - #1628: Add Hivemind: Zero-Cost Multi-Agent Orchestration - recent, Aug 21-24
   - #1607: Update claude-api skill: mark four retired model IDs - recent, Aug 18-26
   - #1602: fix: resolve evaluation serialization, benchmark metrics - recent, Aug 17-24
   - #1367: feat(skills): add self-audit - June-July, adds quality gate
   - #514: Add document-typography skill - March, but still active, addresses doc quality
   I'll pick 7 that cover diverse topics and are notable.

   Section 2: Community Demand Trends - From Issues, distill most-anticipated new Skill directions. Looking at Issues:
   - #492: Security/namespace trust boundary abuse - high concern (43 comments)
   - #228: Org-wide skill sharing - high demand (16 comments, 8 likes)
   - #556: run_eval.py trigger rate 0% - critical functionality issue (12 comments, 7 likes)
   - #1329: compact-memory skill - proposed (9 comments)
   - #189: duplicate skills from document-skills and example-skills (6 comments, 9 likes)
   - #1487: claude-api skill token bloat (4 comments)
   - #1390: mcp-builder evaluation issues (4 comments)
   Trends: org-wide sharing, skill quality/reliability (eval/triggers), security/namespace, compact memory, avoiding duplicates, token efficiency. New skill directions: org sharing platforms, meta-skills (quality/security analyzers), memory/compat skills, cross-platform (Bedrock/MCPs).

   Section 3: High-Potential Pending Skills - Active-comment PRs not yet merged. From PRs, all are "OPEN" status (none show merged). But I need to identify which are "active-comment". Since PR comments are undefined, I'll look at Issues that reference PRs or are related. Alternatively, I can pick PRs that are recent and have significant scope, indicating they're pending. I'll list PRs that are open and not yet merged, focusing on those with broad impact: #1298, #1615, #1628, #1607, #1602, #1367, #514. I'll note them as pending.

   Section 4: Skills Ecosystem Insight - One sentence: what's the community's most concentrated demand. Based on issues: reliability and trust of skill evaluation/triggering, org-wide sharing, and security/namespace boundaries. Probably: "Community prioritizes reliable skill evaluation & orchestration, org-wide sharing, and trust boundaries over new feature proliferation."

   Now, I need to format it professionally, include GitHub links, be concise.

   Let's structure each section:

   1. **Top Skills Ranking**: Table or list of 7 PRs with title, author, status, summary snippet, link.
   2. **Community Demand Trends**: Bullet points of 5-6 trends with issue links.
   3. **High-Potential Pending Skills**: List of 5-6 open PRs with brief description and link.
   4. **Skills Ecosystem Insight**: One sentence.

   I need to ensure I'm not making up data beyond what's given. I'll stick to the provided PRs and Issues, and infer trends reasonably.

   Let double-check PR selection for "most-discussed by comments/attention". Since all PRs have "Comments: undefined", I might note that comment counts aren't displayed in this snapshot, but selection is based on recency, scope, and community positioning in the top-20. I'll just pick the most notable ones.

   Actually, looking at the prompt: "Analyze the community's most-watched Skills activity (data as of 2026-08-29)." and "Top Skills Ranking - List the 5-8 most-discussed Skills (PRs) by comments/attention". Since comments are undefined, maybe I should use the Issue comments that reference or relate to PRs? Or perhaps the "sorted by comments" in the repo context means the PRs are sorted by comments in the full list of 50, but the top 20 shown have undefined due to data truncation. I'll assume they have comment activity that placed them in top 20, and I'll select based on other heuristics. I'll just pick 7 and state they're the top by community engagement (recency, impact).

   Let's refine the 7 PRs:
   1. #1298 - Critical eval/recall bug fix (open, June 2026)
   2. #1615 - scnet-HPC skill (open, Aug 2026, very recent)
   3. #1628 - Hivemind multi-agent orchestration (open, Aug 2026)
   4. #1607 - claude-api model retirement update (open, Aug 2026)
   5. #1602

---

**Claude Code Community Digest – 2026‑08‑29**  

---

### 1. Today's Highlights  
- **Release v2.1.251** shipped new hook events (`PreModelSwitch`/`PostModelSwitch`) and live‑streaming of foreground sub‑agent tool calls to Remote Con, giving developers finer‑grained control over model switches and better observability.  
- The community is still actively discussing a high‑impact cyber‑safeguard false‑positive bug (**#84352**, 164 comments) that blocks verified Claude.ai organizations, while Windows‑specific stability issues (orphaned processes after stealth updates, launch failures, missing Dispatch tab) continue to generate strong engagement.  

---

### 2. Releases  
**v2.1.251** (released within the last 24 h)  
- Added **PreModelSwitch** and **PostModelSwitch** hook events (block, confirm, or annotate a model switch).  
- Enhanced **SessionStart** resume hooks to receive session staleness and an estimated re‑cache cost.  
- Introduced **live streaming** of a foreground sub‑agent’s tool calls and results to Remote Con for real‑time visibility.  

*Link:* [v2.1.251 tag](https://github.com/anthropics/claude-code/releases/tag/v2.1.251)  

---

### 3. Hot Issues (10 noteworthy)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [**#84352**](https://github.com/anthropics/claude-code/issues/84352) | Cyber‑safeguard blocks re‑appear for a CVP‑approved Claude.ai organization (verification portal shows “Under review”). | Blocks authorized work for verified teams; highlights a regression in the safeguard pipeline. | 164 comments, 👍 25 – high visibility and frustration. |
| [**#53247**](https://github.com/anthropics/claude-code/issues/53247) | Claude Desktop fails to launch on Windows after a crash; orphaned Silo/Job Object requires logoff/reboot. | Prevents developers from resuming work; points to a resource‑leak in the Windows app model. | 30 comments, 👍 19 – frequent workaround discussions. |
| [**#61682**](https://github.com/anthropics/claude-code/issues/61682) | GitHub connector shows “Connected” but exposes no tools in Cowork (Windows 11). | Breaks a core integration; forces users to fallback to manual CLI workflows. | 27 comments, 👍 24 – strong demand for a fix. |
| [**#34835**](https://github.com/anthropics/claude-code/issues/34835) *(CLOSED)* | Feature: queue up messages by asking the user for further info on user input. | Enables more interactive, multi‑step workflows within the TUI. | 20 comments, 👍 27 – indicates interest in richer CLI interaction. |
| [**#77071**](https://github.com/anthropics/claude-code/issues/77071) | Dispatch tab missing from Claude Desktop sidebar (Windows 11, Pro plan). | Removes a key navigation hub for managing sessions; impacts power users. | 18 comments, 👍 2 – recurring UI regression reports. |
| [**#11627**](https://github.com/anthropics/claude-code/issues/11627) *(CLOSED)* | .NET 9 or 10 SDK support in Claude Code for web runtime environment. | Enables .NET developers to use Claude Code without downgrading SDKs. | 15 comments, 👍 75 – high endorsement despite being closed. |
| [**#74170**](https://github.com/anthropics/claude-code/issues/74170) | MSIX installation failure: `AddPackage` failed with HRESULT 0x80073CF9. | Blocks clean installs/updates on Windows; affects enterprise rollout. | 10 comments, 👍 1 – installation pain point. |
| [**#78229**](https://github.com/anthropics/claude-code/issues/78229) | Sessions spawned by scheduled tasks missing from Recents and unpinnable; Routines sidebar intermittent. | Disrupts automated workflows that rely on scheduled Claude Code jobs. | 9 comments, 👍 0 – niche but impactful for CI/CD users. |
| [**#88405**](https://github.com/anthropics/claude-code/issues/88405) | Symlinked files in `.claude/rules/` are not auto‑loaded (contradicts docs). | Undermines the promised ability to share rule sets via symlinks; causes configuration drift. | 7 comments, 👍 4 – documentation‑vs‑implementation mismatch. |
| [**#89680**](https://github.com/anthropics/claude-code/issues/89680) | Stealth auto‑update leaves orphaned processes holding the old AppX container; new version unlaunchable until reboot. | Mirrors #53247 but appears after silent updates; leads to “0x80070020” errors. | 5 comments, 👍 0 – update‑related reliability concern. |

---

### 4. Key PR Progress  
Only one PR was updated in the last 24 h:

- **[#87079](https://github.com/anthropics/claude-code/pull/87079)** – *fix(security‑guidance): make ** glob patterns match zero‑depth paths*  
  Adjusts the internal glob matcher so that `**` truly matches any depth (including zero), ensuring top‑level files are not silently excluded from `security‑patterns.json`. This resolves a silent security‑policy bypass.  

*No other PRs were updated in the window.*  

---

### 5. Feature Request Trends  
From all open/closed enhancement‑label issues, the most‑requested directions are:

1. **Usage visibility & control** – requests for persistent usage indicators, usage bars, and programmatic access to subscription plan data (`/usage` output) (#80261, #83092, #80732).  
2. **.NET SDK support** – continued desire for official .NET 9/10 SDK compatibility in the web runtime (#11627).  
3. **Interactive TUI improvements** – message queuing/prompting for additional input (#34835) and better handling of terminal resize/ANSI rendering (#80123, #68465).  
4. **Session & workflow management** – auto‑assigning child sessions to parent groups, persistent sidebar groups, and easier resumability (#82788, #34835).  
5. **Remote/Background observability** – live streaming of sub‑agent calls (already delivered in v2.1.251) and fixing background‑session fd storms (#79920).  

These trends show a clear focus on **operational insight**, **cross‑language ergonomics**, and **more predictable session/TUI behavior**.

---

### 6. Developer Pain Points  
Recurring frustrations evident across the issue set:

- **Windows stability** – launch failures after crashes (#53247), orphaned processes from stealth updates (#89680, #53247), missing Dispatch tab (#77071), proxy mis‑configuration for backgrounded sessions (#78444), and MSIX install hiccups (#74170).  
- **Cyber‑safeguard false positives** – repeated safeguard blocks affecting verified organizations and legitimate workflows (#84352, #90501, #90499, #88927).  
- **Configuration & extensibility** – symlink rule loading not honored (#88405), limited hookability around model switches (addressed in v2.1.251), and missing programmatic usage APIs.  
- **Background session reliability** – file‑descriptor storms leading to kernel panics (#79920), permission‑denied hangs after laptop sleep (#67840), and proxy loss on reconnection (#78444).  
- **TUI/UX glitches** – stale terminal width after resize on Windows (#80123), raw ANSI/framing issues in agent view (#68465), and occasional UI elements disappearing (Dispatch tab, Routines sidebar).  

Addressing these areas—particularly Windows process lifecycle, safeguard precision, and background‑session robustness—would likely yield the biggest satisfaction gains for the Claude Code developer base.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here's a thinking process:

1.  **Analyze User Input:**
   - **Role:** Technical analyst focused on AI developer tools
   - **Task:** Generate OpenAI Codex community digest for 2026-08-29
   - **Data Source:** GitHub data for `openai/codex`
   - **Data Sections Provided:**
     - Latest Releases (last 24h)
     - Latest Issues (updated in last 24h, Total: 50 items, top 30 by comment count)
     - Latest Pull Requests (updated in last 24h, Total: 46 items, top 20 by comment count)
   - **Output Format Requirements:**
     1. Today's Highlights - 2-3 sentences summarizing most important updates
     2. Releases - summarize changes if new versions exist, omit if none
     3. Hot Issues - Pick 10 noteworthy Issues, explain why they matter and community reaction, include GitHub links
     4. Key PR Progress - Pick 10 important PRs, describe features or fixes, include links
     5. Feature Request Trends - Distill most-requested feature directions from all Issues
     6. Developer Pain Points - Summarize recurring developer frustrations or high-frequency requests
   - **Style:** Concise and professional, suited for technical developers. Include GitHub links for each item.

2.  **Examine the Data:**

   **Releases (last 24h):**
   - rust-v0.151.0-alpha.12, alpha.11, alpha.10, alpha.9, alpha.7.1
   - These are all pre-release alpha versions of rust 0.151.0. No stable release, just alphas. I'll note the alpha progression but note they're pre-release.

   **Issues (top 30 by comment count, updated last 24h):**
   Let me list the top ones with comments and likes:
   #39903: 44 comments, 65 likes. Bug/enhancement/TUI/CLI/config: add option to disable "Ran N commands" collapsing and always show executed commands. Created Aug 21, updated Aug 29.
   #41049: 36 comments, 1 like. Bug/Windows/tool-calls/app: code-mode host exited during handshake; 5.6 model not working properly. Created Aug 27, updated Aug 29.
   #35050: 29 comments, 40 likes. Bug/model-behavior/tool-calls/app: GPT-5.6 often serializes independent Code Mode calls; explicit batching reduced weighted usage by 27-45%. Created Jul 24, updated Aug 29.
   #25271: 26 comments, 8 likes. Bug/Windows/app/computer-use/browser: Computer Use cannot determine Chrome URL on Windows, even on chrome://newtab/. Created May 30, updated Aug 29.
   #37104: 23 comments, 9 likes. Closed/Windows/WSL/app: Integrated terminal silently fails before PTY/WSL startup; bottom and side panel cannot open. Created Aug 5, updated Aug 29.
   #34227: 20 comments, 1 like. Bug/Windows/app/pets: Windows pet overlay hit region desynchronizes from visible mascot over time. Created Jul 19, updated Aug 29.
   #33192: 15 comments, 10 likes. Bug/Windows/10/DWM composition handles accumulate after Codex tasks with tool calls. Created Jul 14, updated Aug 29.
   #41059: 15 comments, 0 likes. Bug/Windows/app: Desktop remains headless after external Codex CLI workaround. Created Aug 27, updated Aug 29.
   #40611: 12 comments, 0 likes. Bug/auth/app: After enrolling into Advanced Account Security, codex app stuck in login-logout loop. Created Aug 25, updated Aug 29.
   #40002: 11 comments, 8 likes. Bug/Windows/remote/Android Remote fails to verify trusted Windows projects due to case-sensitive path lookup. Created Aug 21, updated Aug 29.
   #40878: 9 comments, 1 like. Bug/Windows/Blank client area on 26.820.7780.0; --disable-direct-composition restores rendering. Created Aug 26, updated Aug 29.
   #40118: 9 comments, 0 likes. Bug/extension/browser: ChatGPT Chrome sidebar is read-only and falsely reports outdated native host. Created Aug 22, updated Aug 29.
   #40228: 9 comments, 0 likes. Bug/Windows/Chrome native host out of date; plugin uninstall and feedback upload fail. Created Aug 23, updated Aug 29.
   #40048: 9 comments, 0 likes. Bug/Windows/computer-use/browser control fails: about:blank, JS kernel timeout, URL detection failure. Created Aug 22, updated Aug 29.
   #34309: 8 comments, 2 likes. Bug/Windows/pets: Pets cannot be dragged in Codex 26.715.4045, including default pet. Created Jul 20, updated Aug 29.
   #41241: 7 comments, 0 likes. Bug/Windows/tool-calls/app: Windows Codex local tool host exits during handshake after update. Created Aug 28, updated Aug 29.
   #41289: 6 comments, 0 likes. Closed/App starts background processes but does not show a GUI window. Created Aug 28, updated Aug 29.
   #23954: 6 comments, 6 likes. Bug/CLI/connectivity/app-server: Managed app-server daemon repeatedly resets remote-control WebSocket; direct app-server stays stable. Created May 21, updated Aug 29.
   #8240: 5 comments, 6 likes. Closed/Ollama support assumes localhost, ignoring config.toml. Created Dec 18, 2025, updated Aug 29.
   #9923: 5 comments, 13 likes. Open/Enhancement/CLI: Codex SSH Executor. Created Jan 26, updated Aug 29.
   #36596: 4 comments, 1 like. Bug/model-behavior/app: Codex repeatedly terminates active autonomous work despite explicit instructions to continue. Created Aug 2, updated Aug 29.
   #40852: 4 comments, 4 likes. Bug/tool-calls/app/macOS Desktop: code-mode tasks omit send_message_to_thread while read tools remain. Created Aug 26, updated Aug 29.
   #7099: 4 comments, 5 likes. Bug/sandbox/macOS: macOS sandbox blocks hw.optional.neon sysctl, causing Qt arm64 builds to fail. Created Nov 21, 2025, updated Aug 29.
   #41237: 3 comments, 0 likes. Bug/Windows/sandbox: Sandboxed profile-directory reads return EPERM, blocking local esbuild after Desktop update. Created Aug 28, updated Aug 29.
   #41450: 3 comments, 0 likes. Bug/[Code Mode] Reproducible token amplification: one AGENTS.md rule cut cumulative input by 81.6%. Created Aug 29, updated Aug 29. (Latest, today)
   #41111: 3 comments, 0 likes. Bug/ChatGPT Web: Switching between alternate responses makes the answer disappear. Created Aug 27, updated Aug 29.
   #41327: 3 comments, 0 likes. Bug/app/computer-use: Computer Use helper SIGTRAPs on every click after get_app_state succeeds. Created Aug 28, updated Aug 29.
   #41356: 3 comments, 0 likes. Bug/app/computer-use: Computer Use helper crashes on every click on macOS 27. Created Aug 28, updated Aug 29.
   #38402: 3 comments, 0 likes. Bug/Windows/MCP/CLI/connectivity: Codex CLI 0.147.0 fails behind TUN proxy on Windows with os error 10061, MCP failure, and HTTPS fallback failure. Created Aug 13, updated Aug 29.
   #41281: 3 comments, 0 likes. Bug/Windows/app/skills/computer-use: Windows desktop: official Computer Use plugin missing from plugin directory. Created Aug 28, updated Aug 29.
   #41453? Not in list. I'll work with what's given.

   **PRs (top 20 by comment count, updated last 24h):**
   All seem to have "undefined" comments but were created/updated Aug 28-29. They are all closed PRs by copyberry[bot]. Summaries are provided. I'll pick 10 that seem most significant or diverse.

   Let's list them with summaries:
   #41467: Refresh the TUI model picker from the app server
   #41464: Preserve permissions when updating session metadata
   #41461: Source async user message descriptions from the model catalog
   #41457: Source proactive multi-agent instructions from the model catalog
   #41456: Support app targets in executor plugin hooks
   #41454: Block goals after repeated execution host failures
   #41452: Report code mode host request durations
   #41449: Rename the read-only Seatbelt platform defaults policy
   #41448: Clarify question handling in Default collaboration mode
   #41447: Support openai/elicitation form requests
   #41436: Respond to terminal queries from TTY subprocesses
   #41435: Allow bundled browser cleanup hooks on subagent stop
   #41432: Run executor hooks for interrupted turns
   #41429: Retain the last selected step context for each turn
   #41427: Filter media from function call output notifications
   #41424: Preserve context baselines across nested agent forks
   #41422: Add shared Guardian transcript collection
   #41421: Support per-tool MCP output limits
   #41416: Add app-server notification media filtering
   #41413: Optimize history item lookups

   All are closed, mostly by copyberry[bot]. I'll pick 10 that cover model catalog, permissions, goals blocking, code mode durations, Seatbelt policy, question handling, elicitation, TTY queries, browser cleanup, executor hooks for interrupts, step context retention, media filtering, context baselines, Guardian transcript, MCP output limits, app-server media filtering, history lookups. I'll select a balanced set.

   **Feature Request Trends:** Need to distill from all issues. Looking at issues: SSH executor, model picker, permissions, multi-agent instructions, app targets in executor, goal blocking, code mode durations, question handling, elicitation form, TTY queries, browser cleanup, context baselines, Guardian transcript, MCP output limits, history lookups, disabling command collapsing, model serialization, Chrome URL detection, terminal failures, pet dragging, headless desktop, account security loop, case-sensitive path lookup, blank client area, read-only sidebar, Chrome native host out of date, browser control failures, pet drag, local tool host exits, app no GUI, WebSocket resets, Ollama config, SSH remote execution, autonomous work termination, send_message_to_thread, macOS Neon sandbox, sandbox profile reads, token amplification, alternate response switching, SIGTRAP on clicks, crashes on macOS 27, TUN proxy failure, Computer Use missing, token amplification again. Popular requests: SSH executor, model catalog access, permissions persistence, goal blocking, code mode metrics, elicitation forms, TTY/TTY queries, browser/computer use stability, pet features, sandbox adjustments, account auth stability, proxy/connectivity.

   **Developer Pain Points:** Recurring themes: Windows stability (tool host exits, headless desktop, DWM handles, pet overlay, case-sensitive paths, blank client area, Chrome native host out of date), macOS sandbox/neon sysctl, code-mode handshake failures, model serialization/batching, autonomous work termination, command collapsing, authentication loops, proxy/connectivity (TUN proxy, WebSocket resets), computer use/browser control failures, plugin availability, permission management, session metadata, token amplification from AGENTS.md.

3.  **Synthesize and Structure the Digest:**

   I'll follow the exact format requested.

   **Today's Highlights:** 
   - Five alpha builds of rust 0.151.0 released, signaling active pre-release development but no stable release yet.
   - A surge of critical Windows and code-mode handshake failures reported in the last 24h, including the 5.6 model handshake exit and recurring tool host crashes, suggesting a fragile rollout of recent updates.
   - PR merger wave of 20+ closed proposals focused on model catalog access, permission persistence, and executor hook refinements, indicating a push toward stable, policy-driven agent behavior.

   **Releases:** 
   Five alpha iterations of rust 0.151.0 (alpha.7.1 through alpha.12) were pushed in the last 24h. These are pre-release builds with no user-facing changelogs visible in the release tags; they represent incremental toolchain preparation for the next Codex CLI stable point. No stable release this cycle.

   **Hot Issues (10):** I'll pick the top by comment count + recency + impact.
   1. #39903: Request to disable "Ran N commands" collapsing in TUI/CLI. 44 comments, 65 likes. Community wants full command visibility for debugging/audit.
   2. #41049: code-mode host exited during handshake; 5.6 model not working properly. 36 comments, 1 like. Critical for Pro users; model handshake failure blocks Code Mode entirely.
   3. #35050: GPT-5.6 serializes independent Code Mode calls; explicit batching reduces usage 27-45%. 29 comments, 40 likes. Highlights model behavior inefficiency; community workarounds around batching.
   4. #25271: Computer Use cannot determine Chrome URL on Windows, even on chrome://newtab/. 26 comments, 8 likes. Long-standing Windows browser automation gap.
   5. #37104: [Closed] Integrated terminal silently fails before PTY/WSL startup; panels can't open. 23 comments, 9 likes. Windows/WSL session reliability issue.
   6. #33192: DWM Composition handle accumulation after Codex tool calls on Windows 10. 15 comments, 10 likes. Resource leak affecting system performance.
   7. #40611: After enrolling into Advanced Account Security, codex app stuck in login-logout loop. 12 comments, 0 likes. Auth-blocking for Pro+ users.
   8. #40002: Android Remote fails to verify trusted Windows projects due to case-sensitive path lookup. 11 comments, 8 likes. Remote workflow disruption on Windows.
   9. #41450: [Code Mode] Reproducible token amplification: one AGENTS.md rule cut cumulative input by 81.6%. 3 comments, 0 likes. Latest; quantifies AGENTS.md bloat impact; immediate mitigation noted.
   10. #9923: Codex SSH Executor feature request. 5 comments, 13 likes. Highest like-to-comment ratio among requests; sandboxed remote execution desire.

   I'll include GitHub links as specified.

   **Key PR Progress (10):** Pick 10 from the 20 that are most meaningful.
   1. #41467: Refresh TUI model picker from app server - ensures model list reflects current account access.
   2. #41464: Preserve permissions when updating session metadata - defer sandbox policy projection until working-dir change.
   3. #41457: Source proactive multi-agent instructions from model catalog - adds `proactive` mode message for Ultra reasoning.
   4. #41454: Block goals after repeated execution host failures - marks goal blocked after 3 qualifying failures, resets on success.
   5. #41452: Report code mode host request durations - measures host operation wall time excluding client delays.
   6. #41448: Clarify question handling in Default collaboration mode - allows `request_user_input` for optional questions improving quality.
   7. #41447: Support `openai/elicitation` form requests - advertises object-valued `form` capability, handles `openai/elicitation/create`.
   8. #41436: Respond to terminal queries from TTY subprocesses - intercepts device-status, window-size, cursor-position queries from PTY output.
   9. #41435: Allow bundled browser cleanup hooks on subagent stop - enables browser/computer-use plugins to invoke `node_repl.turn_ended` cleanup.
   10. #41427: Filter media from function call output notifications - strips inline image/audio from app-server notifications, preserves text.

   I'll add brief descriptions and links.

   **Feature Request Trends:** 
   - Remote execution sandboxing: Strong demand for `codex --ssh` executor (Issue #9923) and app-server remote-control stability (#23954).
   - Model catalog & transparency: Multiple PRs (#41467, #41461, #41457) focus on exposing model metadata, descriptions, and proactive instructions, indicating desire for better discoverability and control.
   - Executor

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Today's Highlights**  
The nightly build **v0.59.0‑nightly.20260829.g0bd1d4397** adds a critical security fix that enforces fail‑closed workspace trust and filters `mcpServers` in restricted mode.  Community attention is also focused on several high‑impact bugs, notably sub‑agent recovery after hit‑the‑max‑turns and the generalist agent hanging on deferrals.  

**Releases**  
- **v0.59.0‑nightly.20260829.g0bd1d4397** – fixes workspace trust enforcement and restricts `mcpServers` when running in untrusted or restricted environments.  (https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260829.g0bd1d4397)

**Hot Issues** *(10 noteworthy open issues)*  
1. **#22323** – Sub‑agent reports “GOAL” success even though it exceeded `MAX_TURNS`; 13 comments, priority p1.  https://github.com/google-gemini/gemini-cli/issues/22323  
2. **#21409** – Generalist agent hangs indefinitely after deferrals; 8 👍, priority p1.  https://github.com/google-gemini/gemini-cli/issues/21409  
3. **#28004** – Duplicate tool‑result submissions for completed shell calls; priority p2, reproducible bug.  https://github.com/google-gemini/gemini-cli/issues/28004  
4. **#22745** – Investigation of AST‑aware file reads/search/mapping for more precise code navigation; priority p2, enhancement request.  https://github.com/google-gemini/gemini-cli/issues/22745  
5. **#21968** – Gemini rarely uses custom skills/sub‑agents unless explicitly instructed; priority p2, user‑reported limitation.  https://github.com/google-gemini/gemini-cli/issues/21968  
6. **#26522** – Auto‑Memory retries low‑signal sessions indefinitely, leaving them unprocessed.  https://github.com/google-gemini/gemini-cli/issues/26522  
7. **#26525** – Add deterministic secret redaction and reduce noisy Auto‑Memory logs; priority p2.  https://github.com/google-gemini/gemini-cli/issues/26525  
8. **#25166** – Shell commands finish but the CLI stays “Awaiting user input”, causing hangs; 3 👍, priority p1.  https://github.com/google-gemini/gemini-cli/issues/25166  
9. **#22232** – Browser agent needs automatic session takeover and lock‑recovery to improve resilience; priority p3.  https://github.com/google-gemini/gemini-cli/issues/22232  
10. **#29122** – `gemini hooks migrate` copies Claude’s timeout value without unit conversion, shrinking the timeout by 1000×; priority p2, recent report.  https://github.com/google-gemini/gemini-cli/issues/29122  

**Key PR Progress** *(10 important pull requests)*  
1. **#29121** – Automated version bump for the nightly release (0.59.0‑nightly).  https://github.com/google-gemini/gemini-cli/pull/29121  
2. **#28955** – Updates dependencies, adds MCP configuration, and integrates ECC bundles (size xl, priority p1).  https://github.com/google-gemini/gemini-cli/pull/28955  
3. **#28971** – Keeps truncated MCP tool names unique to avoid API name collisions.  https://github.com/google-gemini/gemini-cli/pull/28971  
4. **#29120** – Improves destination validation and routing in web‑fetch utilities (Undici transport, async DNS).  https://github.com/google-gemini/gemini-cli/pull/29120  
5. **#29115** – Prevents insecure system‑wide configuration loading on Windows and POSIX, mitigating privilege‑escalation risks.  https://github.com/google-gemini/gemini-cli/pull/29115  
6. **#29117** – Enforces RFC 9207 issuer identification to stop OAuth IdP mix‑up attacks in MCP auth.  https://github.com/google-gemini/gemini-cli/pull/29117  
7. **#29099** – Enforces fail‑closed workspace trust and filters `mcpServers` in restricted mode (the fix merged into the nightly release).  https://github.com/google-gemini/gemini-cli/pull/29099  
8. **#29116** – Mitigates NTFS 8.3 short‑name path traversal and blocklist bypasses.  https://github.com/google-gemini/gemini-cli/pull/29116  
9. **#29118** – Strips trailing `.git` suffix only when it truly ends the repository name, preserving internal `.git` strings.  https://github.com/google-gemini/gemini-cli/pull/29118  
10. **#29106** – Flushes the final Server‑Sent Events message on EOF without a trailing blank line, preserving usage metadata.  https://github.com/google-gemini/gemini-cli/pull/29106  

**Feature Request Trends**  
- **Greater sub‑agent and skill utilization** – Users want the core agent to automatically invoke skills (e.g., git, gradle) and to expose sub‑agent trajectories via `/chat share`.  
- **Reliability of agent behavior** – Recurring complaints about the generalist agent hanging, turn‑limit mismatches, and browser‑agent setting overrides demand more robust state handling and better respect for `settings.json` overrides.  
- **AST‑aware tooling** – Multiple issues request AST‑based file reads, search, and mapping (e.g., issues #22745, #22746) to reduce turn waste and improve precision.  
- **Security & trust** – Fixes around workspace trust, restricted mode, insecure config loading, and NTFS short‑name handling show a strong focus on tightening security boundaries.  
- **Memory & logging hygiene** – Issues #26522, #26525, and #26523 highlight needs for smarter Auto‑Memory handling, deterministic secret redaction, and better inbox filtering.  

**Developer Pain Points**  
- **Agent hangs & turn‑limit bugs** – Generalist agent freezes after deferrals; sub‑agents incorrectly report success after hitting `MAX_TURNS`.  
- **Duplicate tool results** – Repeated SSE messages for completed shell calls clutter output and break determinism.  
- **Workspace trust & restricted mode** – Current implementations allow unintended process execution; security‑focused PRs aim to close these gaps.  
- **File editing & terminal UX** – Editing commands often get stuck, and terminal resize causes flicker; users request more reliable file manipulation and smoother UI updates.  
- **Tool limits & quota** – Hitting the 400‑tool cap triggers 400 errors; users request smarter scoping of enabled tools.  
- **Memory management** – Auto‑Memory’s low‑signal session retention and lack of deterministic redaction cause noisy logs and wasted resources.  
- **Configuration safety** – Insecure loading of system‑wide configs on Windows/POSIX can lead to privilege escalation; a recent PR addresses this.  

*All links point to the official GitHub repository (github.com/google-gemini/gemini-cli).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-08-29

## 1. Today's Highlights
GitHub Copilot CLI v1.0.82-1 was released with minor stability fixes. The community is actively addressing critical stability regressions across platforms, particularly around session resumption, parallel agent execution, and authentication failures on enterprise environments. Windows users are experiencing persistent problems with session recovery and subagent coordination, while GitHub Enterprise deployments face OAuth and data residency challenges.

## 2. Releases
- **v1.0.82-1** (2026-08-28): Minor fix release addressing stability regressions from the v1.0.81 upgrade cycle.

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| #4612 | Runaway FileWatch host-event loop freezes TUI and grows debug log to 13 GB | Critical stability issue causing terminal UI freezes during long-running sessions. |
| #4165 | `copilot --resume` hangs at Resuming session on cold start in Windows | Prevents seamless session restoration on Windows, blocking productivity. |
| #4533 | Terminal UI stops consuming events when parallel subagents spawn | Breaks real-time interaction during multi-agent workflows; affects performance. |
| #4527 | `copilot -p` fails with 401 on GHEC data residency since 1.0.81-1 | Regression causing authentication failures for organizations with data residency requirements. |
| #4652 | Sandboxing is enabled but not supported on Windows 25H2 | Limits experimental capabilities for Windows users, reducing feature parity. |
| #4648 | Input field background renders black with near-invisible text | Accessibility issue that makes typing difficult and reduces readability. |
| #4655 | Agent Plugins 1.0: custom agents under com.github.copilot/agents are not discovered | Blocks extensibility for developers building custom agent integrations. |
| #4654 | List models uses incorrect URL for GitHub Enterprise | Causes 401 unauthorized errors for enterprise accounts attempting to list models. |
| #4480 | Atlassian MCP OAuth fails with "Incompatible authorization server" on 1.0.79+ | Breaking change affecting MCP server connectivity for Atlassian users. |
| #4647 | v1.0.81 broke compatibility with chroma-mcp | Introduces a regression that may require migration for existing MCP-based workflows. |

## 4. Key PR Progress
- **#4497** (Closed 2026-08-29): Handled fork PR associations in the invalid-label writer. The PR resolves cases where pull request associations are missing during invalid label writes, ensuring proper workflow tracking and preventing broken CI/CD pipelines.

> *Note: Recent PR activity has been limited to this stabilization PR. Most development effort remains focused on resolving the critical issues listed above.*

## 5. Feature Request Trends
- **Local Auto-Memory & Context Persistence**: Multiple issues (#2930, #4651, #4654) highlight demand for robust local memory retention and accurate model context reporting for MCP tools.
- **Agent Ecosystem Expansion**: Custom agent support (#4655) and enhanced MCP integration (#4480, #4647) indicate strong interest in extending Copilot beyond core functionality.
- **Platform-Specific Optimization**: Windows-focused fixes (#4165, #4653, #4648) underscore a priority on cross-platform reliability, especially for session handling and keyboard input.
- **Enterprise Compatibility**: Authentication and data residency improvements (#4527, #4650, #4654) reflect ongoing efforts to support GitHub Enterprise Cloud configurations.

## 6. Developer Pain Points
- **Session Stability**: Frequent crashes or hangs during session resumption (#4165, #4645) disrupt long-running workflows and erode trust in the CLI.
- **Cross-Platform Reliability**: Windows-specific bugs (subagent UI freezing, shell completion issues, character encoding) create friction for developers on that platform.
- **Authentication Complexity**: Multi-region and enterprise auth scenarios (GHEC data residency, enterprise login) frequently result in 401 errors that break basic functionality.
- **Accessibility & Usability**: Low-contrast rendering (#4648) and input field visibility issues reduce accessibility and make daily usage uncomfortable.
- **Tool Integration Overhead**: MCP server compatibility (#4480, #4647) and model selection (#4654) require complex configuration, increasing cognitive load for developers.

---  
*Generated for the GitHub Copilot CLI community digest.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-08-29

## 1. Today's Highlights
A critical security vulnerability has been addressed regarding MCP tool call file access controls, preventing unauthorized reading of sensitive files like `.env` and SSH keys. Simultaneously, an active investigation is underway into abnormal quota consumption affecting users due to unexpected billing on `cache_read` operations. Additionally, the asyncssh dependency was upgraded to 2.23.1 to remediate known security flaws.

## 2. Releases
No new versions were published in the last 24 hours.

## 3. Hot Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| #2625 | Security: MCP tool calls bypass built-in secret-file guards | **Closed** | Allows MCP servers to read sensitive files (`.env`, SSH keys, credentials) without restriction, creating a serious security risk. The fix ensures these paths remain protected under both standard and auto-approve modes. <https://github.com/MoonshotAI/kimi-cli/issues/2625> |
| #2626 | Abnormal quota consumption: cache_read billed with zero cache_creation | **Open** | Users report significant quota loss (~40%) within minutes of usage on 2026-08-28, indicating a billing bug where `cache_read` is charged even when no cache entry is created. This impacts paying subscribers' budgets. <https://github.com/MoonshotAI/kimi-cli/issues/2626> |
| #2624 | Docs: openai_legacy hosted /v1 example (incorrect) | **Open** | The documentation incorrectly suggests using `openai_responses` instead of `openai_legacy` for Chat Completions hosts. Correcting this will prevent confusion and ensure proper provider configuration. <https://github.com/MoonshotAI/kimi-cli/issues/2624> |

*Note: Only three issues were reported in the last 24 hours.*

## 4. Key PR Progress

| # | PR | Summary | Impact |
|---|-----|---------|--------|
| #2622 | deps: bump asyncssh to 2.23.1 in pykaos | Upgrades `asyncssh` from 2.21.1 to 2.23.1 to resolve two security vulnerabilities (GHSA-2wxc-x7rj-hg8f, GHSA-qr67-gv47-xwwh). | Addresses known CVEs in the asyncssh library, improving overall system security. <https://github.com/MoonshotAI/kimi-cli/pr/2622> |

## 5. Feature Request Trends

Based on the current issue landscape, the most prominent request trends are:

- **Security Hardening** – Strong focus on restricting MCP tool call access to sensitive files and closing related vulnerabilities.
- **Billing Transparency & Optimization** – Users are concerned about unexpected charges tied to caching behavior (`cache_read` being billed without cache creation).
- **Documentation Accuracy** – Clarification needed for provider-specific configurations (e.g., `openai_legacy` vs. `openai_responses`).

## 6. Developer Pain Points

- **Security Gaps** – Developers worry that MCP integrations could inadvertently expose secrets through unprotected file reads.
- **Unexpected Billing Behavior** – The quota consumption anomaly creates uncertainty around cost management and API usage tracking.
- **Outdated Documentation** – Misleading examples (like using `openai_responses` for legacy providers) lead to misconfigurations.
- **Dependency Management** – While the recent asyncssh upgrade helps, ongoing security patches highlight the importance of keeping dependencies current.

*All items referenced are from the MoonshotAI/kimi-cli repository as of 2026-08-29.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-08-29

## Today's Highlights

OpenCode v1.18.25 fixed Azure authentication to work with Azure CLI sign-in without requiring Bun. The community is actively addressing critical performance and stability issues, including GPT model latency problems, TUI resource leaks, and desktop application crashes. Several infrastructure improvements are underway, including Linux clipboard integration and job history bounding.

## Releases

**v1.18.25** introduced one bugfix:
- Fixed Azure authentication so Azure CLI sign-in works without requiring Bun.

## Hot Issues

1. [#29079](https://github.com/anomalyco/opencode/issues/29079) - **GPT Models takes too long to respond** - High-impact issue with 119 comments and 52 👍. Users report inconsistent response times with GPT models, sometimes taking minutes for simple commands. Awaiting investigation into latency patterns.

2. [#42700](https://github.com/anomalyco/opencode/issues/42700) - **TUI leaks ~21MB .so per launch** - Critical resource leak affecting Linux users. The temp filesystem fills up after multiple launches, causing TUI startup failures. No 👎 reactions, indicating urgency.

3. [#29397](https://github.com/anomalyco/opencode/issues/29397) - **Unexplained slowness on all models** - Users report all models taking minutes or timing out, with Escape key interruption unreliable. 7 👍 reactions show community is experiencing similar issues.

4. [#23461](https://github.com/anomalyco/opencode/issues/23461) - **Upgrade fails with 403** - Proxy/VPN users hit GitHub API rate limits (60 requests/hour/IP). The tool doesn't respect GITHUB_TOKEN environment variable, causing upgrade failures for enterprise users.

5. [#46088](https://github.com/anomalyco/opencode/issues/46088) - **ECONNRESET with independently deployed models** - New sessions work initially but fail with connection reset errors after reading files. Context size configuration (200K tokens) suggests infrastructure-level networking issues.

6. [#15680](https://github.com/anomalyco/opencode/issues/15680) - **Expose worktree lifecycle events to plugins** - Feature request with 4 comments. Plugin developers lack visibility into repository operations, limiting automation capabilities.

7. [#34507](https://github.com/anomalyco/opencode/issues/34507) - **Cannot open Settings in Desktop v1.17.11 on Mac** - Simple UI regression where CMD+, does nothing. Affects macOS users' ability to configure the application.

8. [#34443](https://github.com/anomalyco/opencode/issues/34443) - **Skill file changes not picked up without restart** - In-memory caching prevents dynamic skill updates. Users must restart the entire application to see skill changes.

9. [#34437](https://github.com/anomalyco/opencode/issues/34437) - **Renderer freezes on large file diffs** - Synchronous diff parsing blocks the UI thread on Windows, making the application unresponsive for seconds. Performance-critical for Windows users.

10. [#34426](https://github.com/anomalyco/opencode/issues/34426) - **GUI broken in some menus** - Menu navigation regression in Desktop v1.17.11 where critical items like "Toggle Sidebar" become disabled or inaccessible.

## Key PR Progress

1. [#46090](https://github.com/anomalyco/opencode/pull/46090) - **Fix Windows panel top outlines** - CSS adjustment ensures panel outlines aren't clipped on Windows, improving visual consistency.

2. [#6370](https://github.com/anomalyco/opencode/pull/6370) - **Enable primary clipboard copy for Wayland/X11** - Adds `clipboard.linux.enablePrimaryCopy` config option to support Linux middle-click paste functionality.

3. [#46085](https://github.com/anomalyco/opencode/pull/46085) - **Bound Windows post-exit pipe draining** - Fixes shell commands like `bunx agent-browser` that leave descendants holding stdout/stderr open, preventing proper shell completion.

4. [#46086](https://github.com/anomalyco/opencode/pull/46086) - **Deploy beta web app with SST** - Infrastructure PR enabling `beta.opencode.ai` deployment through existing workflows.

5. [#46087](https://github.com/anomalyco/opencode/pull/46087) - **Bound consumed job history** - Limits process-global Job registry to 100 jobs and 16 MiB of output, preventing memory accumulation from terminal history.

6. [#46084](https://github.com/anomalyco/opencode/pull/46084) - **Isolate response tool call identities** - Refactoring to ensure Open Responses function calls have stable external `call_id` without alias collisions.

7. [#44938](https://github.com/anomalyco/opencode/pull/44938) - **Paste primary selection on middle click** - Restores traditional terminal behavior for Linux X11/Wayland PRIMARY selection pasting.

8. [#46076](https://github.com/anomalyco/opencode/pull/46076) - **Reject Object.assign cycles** - Security/correctness fix preventing circular reference bugs that could cause interpreter state corruption.

9. [#46082](https://github.com/anomalyco/opencode/pull/46082) - **Name only supported operations** - OpenAPI conversion optimization that validates transport semantics before name registration.

10. [#36068](https://github.com/anomalyco/opencode/pull/36068) - **Accept Ollama reasoning field in OpenAI Chat deltas** - Compatibility fix for Ollama's different reasoning field naming convention.

## Feature Request Trends

1. **Enhanced agent lifecycle control** - Multiple requests for per-agent configuration options and explicit MCP server management at project level.
2. **Improved plugin capabilities** - Community wants plugins to observe worktree operations and have better session integration.
3. **Better configuration discovery** - Requests for adding MCP servers to projects without manually creating `opencode.json`.
4. **Session/workflow persistence** - Data loss concerns during updates highlight need for better migration and backup strategies.
5. **Cross-platform consistency** - Linux clipboard behavior, Windows visual elements, and macOS menu functionality all need standardization.

## Developer Pain Points

1. **Model performance inconsistency** - GPT models showing highly variable response times, making reliability unpredictable.
2. **Resource leaks and accumulation** - TUI leaking .so files and job history growing unbounded; memory management issues.
3. **Upgrade and authentication friction** - 403 errors during upgrades and Azure authentication requiring specific toolchains.
4. **Desktop application regressions** - UI freezes, broken menus, and settings access failures in version 1.17.11.
5. **Linux integration gaps** - Missing middle-click paste and primary selection support for traditional terminal workflows.
6. **Debugging visibility** - Difficulty inspecting incomplete tasks, session details, and tool failures in the interfaces.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here's a thinking process:

1.  **Understand User Request**:
   - User wants a "Pi community digest" for date 2026-08-29
   - Based on GitHub data from `github.com/badlogic/pi-mono`
   - I need to generate a structured English digest with specific sections
   - Style: concise, professional, for technical developers
   - Include GitHub links for each item

2.  **Analyze Data Source**:
   - The data is from `github.com/badlogic/pi-mono`
   - I need to parse the provided sections: Latest Releases (last 24h), Latest Issues (updated in last 24h), Latest Pull Requests (updated in last 24h)
   - The date in the request is 2026-08-29, and the data includes items up to that date (some created/updated on 2026-08-29)

3.  **Scan/Extract Relevant Data**:

   **Latest Releases (last 24h)**:
   - v0.84.4: New features
     - Terminal capability overrides
     - Extension UI prompt events

   **Latest Issues (updated in last 24h)**: Total 47 items; showing top 30 by comment count. I need to pick 10 noteworthy ones.
   Let list them with details:
   - #6879 [CLOSED] auto-compaction never triggers after context grows past 100%... (24 comments, 20 👍) - critical bug
   - #8584 [OPEN] TUI row corruption during streaming: assistant text rendered one word per line (22 comments, 9 👍) - UI bug
   - #2870 [CLOSED] Follow XDG Base Directory (20 comments, 52 👍) - standards compliance
   - #7130 [CLOSED] Backspace deletes 2 chars in Kitty (12 comments, 1 👍) - protocol issue
   - #8166 [CLOSED] custom message injected mid-tool-batch breaks tool_calls→tool adjacency (11 comments, 0 👍) - API error
   - #7128 [OPEN] [bug, no-action] New default PI_* guideline in system prompt over-encourages unnecessary bash calls (11 comments, 13 👍) - prompt bias
   - #7553 [OPEN] [inprogress, to-discuss] Configurable thinking level/model for compaction (9 comments, 0 👍) - compaction config
   - #7153 [CLOSED] /scoped-models appears to do nothing for ~5 minutes (8 comments, 4 👍) - UI stall
   - #8620 [OPEN] 0.84.3 bundled CLI: every global extension fails with "Cannot find module..." (6 comments, 0 👍) - extension loading bug
   - #8478 [CLOSED] /model selector lists all catalog models; should default to user-configured models (3 comments, 0 👍) - model filtering
   - #7147 [CLOSED] Emit extension events around UI dialogs (3 comments, 1 👍) - extension events
   - #8809 [CLOSED] [untriaged] Windows image fallback displays backslashes in shortened home paths (2 comments, 0 👍) - Windows path bug
   - #8806 [CLOSED] [untriaged] TUI crashes on narrow terminals (80-88 cols) - long skill lines exceed width (2 comments, 0 👍) - crash bug
   - #8387 [CLOSED] [bug] mistral-conversations: broken tool calls from zai-glm-5-2 (2 comments, 0 👍) - model parsing
   - #8349 [OPEN] ExtensionContext cannot detect queued custom continuations (2 comments, 0 👍) - extension API
   - #8771 [CLOSED] [untriaged] Apple Terminal.app crashes while running Pi TUI on macOS 26.5.2 (2 comments, 0 👍) - macOS crash
   - #8774 [CLOSED] [untriaged] Compaction fails on OpenAI Responses models: tool_choice sent without tools (400) (2 comments, 0 👍) - API compatibility
   - #8810 [CLOSED] [bug, untriaged] Extension-registered providers: fresh sessions intermittently ignore defaultProvider/defaultModel (1 comment, 0 👍) - provider config
   - #8808 [CLOSED] [untriaged] Prompt image attachments bypass the resize pipeline; oversized pasted image + >20 images in context bricks the session on Anthropic (1 comment, 0 👍) - image handling
   - #8807 [CLOSED] [untriaged] Improve fuzzy matching for @ file autocomplete (1 comment, 0 👍) - autocomplete UX
   - #8804 [CLOSED] [untriaged] Bedrock Provider: Tool validation error when inputSchema.json.type is not "object" (1 comment, 0 👍) - Bedrock tool schema
   - #8802 [CLOSED] [untriaged] Add a `permissions` block to settings.json (1 comment, 0 👍) - permissions feature request
   - #8798 [CLOSED] [untriaged] /reload drops editor prompt history when an extension registers a custom editor (1 comment, 0 👍) - reload bug
   - #8797 [CLOSED] [untriaged] Rebinding app.models.save does not affect /model or the thinking selector (1 comment, 0 👍) - keybinding hardcoding
   - #8796 [CLOSED] [untriaged] Proposal: gate success tokens on project-owned artifact verification (1 comment, 0 👍) - success token gating
   - #8794 [CLOSED] [untriaged] Footer: allow extension status entries to share the stats line when width permits (1 comment, 0 👍) - footer layout
   - #8793 [CLOSED] [untriaged] Configurable autocomplete popup position (above the input) and optional fixed height (1 comment, 0 👍) - autocomplete config
   - #8792 [CLOSED] [untriaged] Respect managed pnpm minimumReleaseAge in update --all (1 comment, 0 👍) - pnpm update
   - #8791 [CLOSED] [untriaged] Expose the model runtime to extensions (1 comment, 3 👍) - model runtime exposure
   - #8789 [CLOSED] [bug, untriaged] Windows: console window flashes from child_process spawns missing windowsHide: true (1 comment, 0 👍) - Windows console
   - #8788? Not listed, but we have up to #8810 etc.
   - Also #8805, #8800, #8799, #8801 are PRs but might appear in issues section? No, they're in PR section.

   **Latest Pull Requests (updated in last 24h)**: Total 18 items. I need to pick 10 important ones.
   Let list them:
   - #8812 [CLOSED] fix(coding-agent): flush extension provider registrations before initial model resolution
   - #8811 [CLOSED] feat: add startup composer
   - #8805 [CLOSED] fix(tui): adaptive truncate instead of crash on narrow terminals
   - #8800 [OPEN] feat(tui): search improvements
   - #8799 [OPEN] feat(tui): prettier Working... spinner
   - #8801 [OPEN] feat(tui): alt mode scrollbar but prettier
   - #8232 [OPEN] DONT MERGE: dev branch
   - #8678 [OPEN] feat(ai): amazon bedrock mantle
   - #8795 [CLOSED] feat(coding-agent): add artifact verification repair gate
   - #8775 [CLOSED] docs(coding-agent): remove issue-specific regression test placement rule
   - #8790 [OPEN] feat(coding-agent): extensions changelog
   - #4133 [CLOSED] fix(ai): fall back from codex websocket to sse
   - #8787 [CLOSED] fix(ai): limit codex sse fallback to oversized websocket frames
   - #8786 [CLOSED] fix(tui): match skill commands by bare name in slash autocomplete
   - #8784 [CLOSED] fix(ai): per-model max_tokens cap for MiniMax-M3 via OpenRouter/GMICloud
   - #8782 [CLOSED] fix(coding-agent): compact before post-tool model requests
   - #6848 [CLOSED] fix: add retry logic to compaction summarization for transient stream failures

   Now, I need to select 10 "important" PRs. I'll pick based on relevance, recency, and impact. The ones from last 24h are #8812, #8811, #8805, #8800, #8799, #8801. Others are recent too. I'll pick a mix.

   **Feature Request Trends**: I need to distill most-requested feature directions from all Issues. Looking at the issues, common themes:
   - Terminal/TUI stability on narrow windows
   - Extension API improvements (provider registration, events, custom editors)
   - Compaction and context management
   - Model selection and configuration
   - Image handling and resize pipeline
   - Autocomplete and fuzzy matching
   - Permissions and safety settings
   - Cross-platform compatibility (Windows, macOS)
   - Provider-specific integrations (Bedrock, Anthropic, OpenAI Responses)

   **Developer Pain Points**: Recurring frustrations:
   - TUI crashes on narrow terminals (80-88 cols)
   - Extension loading failures after updates
   - Compaction triggering incorrectly or failing on certain models
   - Provider default model/config not respected
   - Image handling blowing up context
   - Keybindings and settings not being respected
   - Cross-platform (Windows, macOS) console/terminal issues

4.  **Structure the Digest**:
   I'll create the sections as requested:
   1. Today's Highlights (2-3 sentences)
   2. Releases (summarize v0.84.4 changes, or note none if but there is a release)
   3. Hot Issues (10 noteworthy, with why they matter and community reaction)
   4. Key PR Progress (10 important PRs, describe features/fixes)
   5. Feature Request Trends (distill directions)
   6. Developer Pain Points (summarize recurring frustrations)

   I need to include GitHub links for each item. I'll format links as [text](URL) or just provide the URL pattern. The data already has URLs like `earendil-works/pi Issue #6879`. I'll use those.

   Let carefully select 10 issues and 10 PRs.

   **Hot Issues Selection (10)**:
   I'll pick a mix of high comment count, open/closed status, and variety of topics.
   1. #6879 [CLOSED] - auto-compaction bug (24 comments, 20 👍) - critical
   2. #8584 [OPEN] - TUI row corruption streaming (22 comments, 9 👍) - UI glitch
   3. #8620 [OPEN] - extension module resolution failure (6 comments, 0 👍) - blocking extensions
   4. #8806 [CLOSED] - TUI crash on narrow terminals (2 comments, 0 👍) - startup crash
   5. #8774 [CLOSED] - compaction fails on OpenAI Responses (2 comments, 0 👍) - API compat
   6. #8810 [CLOSED] - provider default model ignore (1 comment, 0 👍) - config issue
   7. #8808 [CLOSED] - image attachments bypass resize (1 comment, 0 👍) - context bricking
   8. #8349 [OPEN] - ExtensionContext cannot detect queued continuations (2 comments, 0 👍) - extension API
   9. #7128 [OPEN] - PI_* guideline over-encourages bash calls (11 comments, 13 👍) - prompt bias
   10. #8584 is already in, maybe #8478 /model selector issue (3 comments, 0 👍) - model filtering

   Actually, let pick exactly 10 with good representation. I'll list them with brief why they matter and community reaction (comment count, likes).

   **Key PR Progress (10)**:
   I'll pick 10 from the PR list, focusing on merged/recent ones that show direction.
   1. #8812 - fix extension provider registrations before model resolution
   2. #8811 - feat: add startup composer
   3. #8805 - fix(tui): adaptive truncate instead of crash on narrow terminals
   4. #8800 - feat(tui): search improvements
   5. #8799 - feat(tui): prettier Working... spinner
   6. #8801 - feat(tui): alt mode scrollbar but prettier
   7. #8678 - feat(ai): amazon bedrock mantle
   8. #8795 - feat(coding-agent): add artifact verification repair gate
   9. #8787 - fix(ai): limit codex sse fallback to oversized websocket frames
   10. #8786 - fix(tui): match skill commands by bare name in slash autocomplete

   I'll skip #8232 "DONT MERGE: dev branch" as it's a meta comment.

   **Feature Request Trends**: Distill from all issues. I'll observe patterns:
   - TUI stability across terminal sizes (narrow terminals, row corruption, startup crashes)
   - Extension API maturity (provider registration, custom editors, events, changelogs)
   - Context and compaction management (thresholds, thinking levels, model caps)
   - Model selection and configuration defaults (user-configured vs catalog, defaultProvider respect)
   - Cross-platform compatibility (Windows console, macOS Terminal crashes)
   - Image and media handling (resize pipeline, base64 overflow)
   - Autocomplete and fuzzy matching improvements
   - Permissions and safety profiles

   **Developer Pain Points**: Summarize recurring frustrations:
   - TUI crashes on terminals ≤ 88 cols (skill lines, startup box)
   - Extension loading failures after 0.84.x updates (module resolution, provider registration timing)
   - Compaction triggering incorrectly or failing on OpenAI Responses/Bedrock models
   - Default provider/model not respected in fresh sessions when extensions register providers
   - Image attachments bypassing resize, blowing context limits (especially >20 images on Anthropic)
   - Keybindings and settings ignored (rebinding app.models.save, /model selector defaults)
   - Cross-platform terminal handling (Windows console flashes, macOS Terminal crashes)
   - Fuzzy matching and autocomplete limitations in monorepos

   Now, I'll format everything professionally, concisely, with GitHub links. I need to ensure the date is 2026-08-29, and I'm generating the digest for that date. The data reflects activity up to that date.

   Let draft each section.

   **Today's Highlights**: 
   Pi 0.84.4 drops with terminal capability overrides and extension UI prompt events, while a critical auto-compaction bug (#6879) resurfaced after context overflows past 100%, and TUI instability on narrow terminals persists, prompting three PRs targeting adaptive rendering and startup composition.

   Actually, make it more concise and professional.

   Let structure each section properly.

   I need to include GitHub links for each item in Hot Issues and Key PR Progress. I'll use the format: **#issue-number** - title [link]. Since the data provides URLs like `earendil-works/pi Issue #6879`, I can construct links as `https://github.com/earendil-works/pi/issues/6879` or just use the provided pattern. I'll use the standard GitHub issue URL format.

   Let start writing.

   Check: The data source says `github.com/badlogic/pi-mono`, but the URLs are `earendil-works/pi`. That's fine; I'll use the issue/PR numbers with links to `https://github.com/earendil-works/pi/issues/...` which is consistent with the data.

   Now, let write the digest.

   I'll be careful with counts and ensure accuracy to the provided data.

   Let's go section by section.

   1. **Today's Highlights**: 2-3 sentences.
   2. **Releases**: v0.84.4 changes. Note: "If new versions exist, summarize changes; omit if none". There is v0.84.4 released in last 24h, so I'll summarize.
   3. **Hot Issues**: 10 items. I'll list with brief explanation and community reaction (comment count, likes). Include link.
   4. **Key PR Progress**: 10 items. Describe features/fixes. Include link.
   5. **Feature Request Trends**: Paragraph or bullet list dist

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-08-29

## 1. Today's Highlights

The Qwen Code project released version 0.22.3 alongside a nightly build, focusing on web-shell stability, authentication sync with Alibaba services, and security improvements in hook execution. A wave of follow-up fixes from PR #9811 addressed critical web-shell issues including infinite re-render loops, session-switch overlays, and pinned session visibility. The community continues to actively engage with 50+ open issues, particularly around VS Code integration, daemon reliability, and CI/CD pipeline optimizations.

## 2. Releases

### v0.22.3
**Key Changes:**
- **Named Sessions in Channels**: Added owner-scoped named sessions supporting up to eight persistent tasks per chat
- **Daemon Extension Installs**: Now accepts absolute local paths while rejecting relative paths for security
- **CUA Driver Update**: Includes cua-driver-rs v0.20.2 with platform-specific binaries (macOS codesigned/notarized, Linux/Windows unsigned)

**Security Focus**: This release addressed trust-boundary vulnerabilities in the hook system and improved path resolution for extension installations.

### v0.22.3-nightly.20260829
Contains incremental improvements and bug fixes following the main 0.22.3 release.

## 3. Hot Issues

1. **[Startup banner rendering glitch (#8124)](https://github.com/QwenLM/qwen-code/issues/8124)** - Intermittent UI issue where the ASCII art logo loses top lines on first paint, affecting ~11 comments from the community. Priority P2 bug impacting initial user experience.

2. **[Bailian Personal Token Plan model sync (#8432)](https://github.com/QwenLM/qwen-code/issues/8432)** - Critical authentication issue causing image/video generation failures due to outdated model lists in Alibaba ModelStudio integration. Community showing concern with 5 comments and 1 thumbs up.

3. **[Tool disappearance with permissions.allow (#10075)](https://github.com/QwenLM/qwen-code/issues/10075)** - Priority P1 regression in 0.22.1 where tools not covered by allowlist become completely invisible, blocking legitimate workflows for users with custom permission configurations.

4. **[Web-shell infinite re-render loop (#10406)](https://github.com/QwenLM/qwen-code/issues/10406)** - Critical UI issue causing browser lockup when daemon is unreachable, with embedded host passing inline error callbacks creating React render cycles. Urgent fix needed for web-shell stability.

5. **[Session edit turn index mismatch (#10385)](https://github.com/QwenLM/qwen-code/issues/10385)** - Priority P1 bug where message edits pass window-local indices to session-global rewind snapshots, potentially corrupting conversation history in web-shell environments.

6. **[VSCode IDE companion path resolution (#10372)](https://github.com/QwenLM/qwen-code/issues/10372)** - VS Code extension bug where closeDiff skips workspace-relative path resolution, affecting integrated development workflows for VS Code users.

7. **[Auto-compaction HTTP 413 handling (#10380)](https://github.com/QwenLM/qwen-code/issues/10380)** - Token management issue where OpenAI-compatible gateways returning HTTP 413 permanently stall long-running sessions, requiring manual intervention.

8. **[Pinned sessions group membership (#10391)](https://github.com/QwenLM/qwen-code/issues/10391)** - UI bug where pinned sessions disappear from their assigned group sections, showing "· 0" counts while sessions appear ungrouped, confusing workspace organization.

9. **[Local llama-server grammar parsing crash (#10435)](https://github.com/QwenLM/qwen-code/issues/10435)** - Inference failure when using local llama-server with grammar constraints, producing mysterious 400 errors that don't affect other harnesses, indicating provider-specific compatibility issues.

10. **[Submodule git operation restrictions (#10448)](https://github.com/QwenLM/qwen-code/issues/10448)** - Developer workflow issue where blanket `.git` folder checks prevent git operations in submodule directories, blocking legitimate version control workflows in large monorepos.

## 4. Key PR Progress

1. **[Fix audit shape for re-review rounds (#10136)](https://github.com/QwenLM/qwen-code/pull/10136)** - Refactors multi-round /review to use streamlined fix-audit pattern when targeting critical-only posture, reducing unnecessary compute overhead.

2. **[Bound session lifetime with sessionRotation (#8927)](https://github.com/QwenLM/qwen-code/pull/8927)** - Adds channel-level session rotation capabilities allowing routes to refresh sessions based on turn limits or time bounds, improving resource management.

3. **[Close hook execution trust boundaries (#10427)](https://github.com/QwenLM/qwen-code/pull/10427)** - Security hardening PR addressing four trust-boundary holes in hook execution system where repository config meets code execution or network egress.

4. **[Keep pinned sessions in sidebar groups (#10416)](https://github.com/QwenLM/qwen-code/pull/10416)** - Fixes web-shell sidebar regression where pinned sessions were dropped from group sections, restoring proper workspace organization visualization.

5. **[Seal review coverage as classified ledger (#9768)](https://github.com/QwenLM/qwen-code/pull/9768)** - Transforms /review coverage into identity-carrying ledger explaining gap reasons and separating coverage reporting from posting decisions.

6. **[Derive session issue bindings from PR closures (#10425)](https://github.com/QwenLM/qwen-code/pull/10425)** - Enhances session-to-GitHub-PR binding to automatically track issues closed by bound PRs, improving traceability.

7. **[Extend vitest RPC timeout exemption (#10443)](https://github.com/QwenLM/qwen-code/pull/10443)** - Broadens Windows/macOS CI test exemptions for vitest RPC timeouts, pinning with witness tests to prevent future regressions.

8. **[Skip automatic reviews for base-only refreshes (#10116)](https://github.com/QwenLM/qwen-code/pull/10116)** - Adds deterministic gate to skip review rounds when PR pushes only refresh base branch, eliminating wasteful compute cycles.

9. **[Fix quoted code in review footer strips (#10458)](https://github.com/QwenLM/qwen-code/pull/10458)** - Resolves attribution footer duplication issue where both draft and canonical footers posted simultaneously due to failed stripping logic.

10. **[Demote balanced inline thinking blocks (#9607)](https://github.com/QwenLM/qwen-code/pull/9607)** - Implements graceful handling of legitimate inline thinking phases from hybrid-thinking models instead of failing entire conversation turns.

## 5. Feature Request Trends

**Workspace Management**: Multiple requests for enhanced web-shell workspace handling including sidebar overviews, native directory picker detection for headless environments, and managed HTML artifact sharing through cloud providers.

**Session Organization**: Strong community interest in better session grouping, pinning behavior, and lifetime management features, with explicit scope targeting for memory tasks (project vs user level).

**CI/CD Optimization**: Performance-focused requests dominate with pnpm adoption, fast bootstrap paths for new worktrees, and ECS runner pool routing for Linux CI jobs.

**Review Process Maturity**: Advanced review workflow features requested including sealed coverage ledgers, deterministic round skipping, and fix-audit posture prediction models.

## 6. Developer Pain Points

**Tool Configuration Complexity**: Users struggle with `permissions.allow` configurations causing tools to silently disappear (#10075), and CLI help documentation gaps for `--approval-mode` and `--auth-type` flags (#8897).

**Web-Shell Stability**: Frequent crashes and infinite loops when daemon unreachable (#10406), persistent session-switch overlays (#10405), and turn index synchronization issues (#10385) create frustrating development experiences.

**Authentication Sync Issues**: Alibaba ModelStudio integration problems with outdated model lists (#8432) and local llama-server grammar parsing failures (#10435) indicate fragmented provider support.

**Testing Infrastructure Gaps**: AppContainer test coverage holes (#10430), unhandled vitest RPC timeouts on Windows/macOS CI (#10443), and subsumption check failures at API size limits (#10322) point to maturing test infrastructure needs.

**Git Workflow Restrictions**: Overly aggressive `.git` folder checks block submodule workflows (#10448), while symlink handling limitations in extension archives affect older Git versions (#9724).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# CodeWhale TUI Community Digest — 2026-08-29

## Today's Highlights

The project is deep in stabilization for the upcoming v0.9.12 release, with significant momentum across plugin UX improvements, web infrastructure fixes, and foundational runtime work. Key themes include enhanced plugin discoverability matching Claude Code's capabilities, cloud-agent dispatch via Daytona, and expanded provider-native web search coverage for major LLM providers.

## Releases

No new releases in the past 24 hours. The team is focused on the v0.9.12 milestone tracker (#5573) with 15+ open tasks requiring resolution before shipping.

## Hot Issues

1. **[#5316](https://github.com/Hmbown/CodeWhale/issues/5316) — EPIC-005: CodeWhale TUI Crate Decomposition**  
   Umbrella epic tracking structural refactoring of the TUI crate. 18 comments show active coordination among core contributors.

2. **[#5573](https://github.com/Hmbown/CodeWhale/issues/5573) — v0.9.12 Milestone Tracker**  
   Central hub for all must-fix items targeting the next minor release. Recently updated with 15 comments guiding pick-order prioritization.

3. **[#5579](https://github.com/Hmbown/CodeWhale/issues/5579) — Plugin UX Parity with Claude Code**  
   Closed after implementing proactive plugin suggestions, reload discoverability, and hot-reloading. Addresses key user demand for better plugin ergonomics.

4. **[#4402](https://github.com/Hmbown/CodeWhale/issues/4402) — v0.9.2 Attention UX Improvements**  
   Seeks focus-aware notifications, improved terminal title states, and return recaps. Highlights ongoing attention-system refinements.

5. **[#5668](https://github.com/Hmbown/CodeWhale/issues/5668) — Add /copy Command for Last Model Output**  
   Small but critical usability enhancement requested to avoid manual terminal text selection. Gaining traction with early votes.

6. **[#5681](https://github.com/Hmbown/CodeWhale/issues/5681) — Extend Provider-Native Web Search**  
   Proposes adding web search support for DeepSeek, Qwen, Kimi, Z.AI/BigModel, and MiMo—filling gaps in current provider integrations.

7. **[#5241](https://github.com/Hmbown/CodeWhale/issues/5241) — Restore Session Cost When Live Pricing Unavailable**  
   Resolved via PR #5402; ensures accurate cost reporting even during temporary pricing API outages.

8. **[#5410](https://github.com/Hmbown/CodeWhale/issues/5410) — Bwrap Sandbox Container Essentials**  
   Fixed through PR #5456, addressing filesystem permission errors and enabling configurable extra roots for sandboxed execution.

9. **[#5630](https://github.com/Hmbown/CodeWhale/issues/5630) — Scope Thread Store Per Session**  
   Resolved via PR #5634; prevents cross-process interference by isolating runtime thread storage per session.

10. **[General Documentation Needs]**  
    Ongoing calls for clearer onboarding guides and API references continue appearing in various epics and feature discussions.

## Key PR Progress

1. **[#5663](https://github.com/Hmbown/CodeWhale/pull/5663) — Suggest Plugins from Prompt**  
   Enhances plugin discovery by suggesting relevant plugins contextually based on prompt content—not just via slash commands.

2. **[#5703](https://github.com/Hmbown/CodeWhale/pull/5703) — Match Operate to CWC OperateRecord**  
   Aligns internal operate logic with the latest CWC OperateRecord schema, improving operational consistency.

3. **[#5701](https://github.com/Hmbown/CodeWhale/pull/5701) — Daytona Cloud-Agent Dispatch**  
   Introduces first-class offload mechanism using Daytona cloud agents, streamlining distributed compute scenarios.

4. **[#5647](https://github.com/Hmbown/CodeWhale/pull/5647) — Rescue Pricing and Legal Routes**  
   Restores broken pricing/legal pages with transparent messaging about open-source vs. hosted offerings.

5. **[#5704](https://github.com/Hmbown/CodeWhale/pull/5704) — Unified Login Path with Session/Keyring Storage**  
   Consolidates authentication flow, properly persisting sessions and securely managing Daytona tokens.

6. **[#5706](https://github.com/Hmbown/CodeWhale/pull/5706) — Headless PR Review with GitHub Posting**  
   Enables autonomous code reviews with optional automated comment posting to GitHub PRs.

7. **[#5686](https://github.com/Hmbown/CodeWhale/pull/5686) — Moonshot/Kimi Native Web Search**  
   Implements provider-native search for Moonshot/Kimi models, including bounded execution controls and citation recovery.

8. **[#5700](https://github.com/Hmbown/CodeWhale/pull/5700) — Local GT Pipeline for Website/Docs**  
   Integrates General Translation pipeline into existing i18n infrastructure for localized docs and site content.

9. **[#5699](https://github.com/Hmbown/CodeWhale/pull/5699) — First-Class Shell Jobs on Work Strip**  
   Promotes background shells to full work-strip citizenship with dedicated job cancellation support.

10. **[#5702](https://github.com/Hmbown/CodeWhale/pull/5702) — Wire RouteResolver for Runtime Options**  
   Lays groundwork for more flexible routing strategies by replacing rigid provider arg parsing with dynamic route resolution.

## Feature Request Trends

- **Plugin Discoverability & Ergonomics**: Strong interest in making plugin usage seamless like Claude Code, including auto-suggestions and easier reloads.
- **Provider Integration Expansion**: Growing appetite for native web search across multiple LLM vendors beyond OpenAI/Anthropic/xAI.
- **Improved Terminal Feedback Systems**: Demand for smarter notification systems tied to terminal focus and structured output summaries.
- **Cloud Offload Capabilities**: Interest in offloading heavy workloads to cloud agents (e.g., Daytona) without leaving the TUI environment.
- **Enhanced Command UX**: Simpler ways to interact with outputs (like copying last response) rank highly in recent requests.

## Developer Pain Points

- **Manual Workaround Fatigue**: Lack of direct `/copy`, `/plugin suggest`, or contextual triggers forces tedious manual workflows.
- **Inconsistent Provider Support**: Fragmented web search integration leads to confusion when switching between providers.
- **Authentication Complexity**: Confusing logout flows and missing TUI login commands create friction for developers switching environments.
- **Release Stability Concerns**: Frequent dependency bumps (Rust crates, JS packages) raise questions about long-term maintenance overhead.
- **Documentation Gaps**: Limited beginner-friendly documentation hinders adoption despite rich functionality being added.

---

*For real-time updates, follow the [CodeWhale GitHub repository](https://github.com/Hmbown/CodeWhale).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*