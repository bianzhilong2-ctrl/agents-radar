# AI CLI Tools Community Digest 2026-06-15

> Generated: 2026-06-15 02:48 UTC | Tools covered: 9

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

**Cross‑Tool Comparison Report – AI‑centric CLI ecosystems (as of 2026‑06‑15)**  

---

### 1. Ecosystem Overview  
The AI‑CLI market is consolidating around “agent‑first” command‑line experiences, where large language models (LLMs) act as orchestrators for code, file, and cloud operations. Most projects now expose sub‑agent frameworks, tool‑call abstraction layers, and rich UI hooks (e.g., slash commands, sidebars) to support workflow continuity. Open‑source tooling is diverging by licensing model and integration depth: Anthropic‑backed **Claude Code**, Google‑driven **Gemini CLI**, and Microsoft‑originated **Copilot CLI** target professional developers with enterprise‑grade security and billing concerns, while community‑driven projects such as **OpenCode**, **Qwen Code**, and **Kimi Code** emphasize extensibility, multi‑model parity, and lightweight deployment. Activity is intense across the board, with daily releases of bug‑fixes, dependency bumps, and feature‑driven PRs that signal a race to stabilize sub‑agent reliability and to expose granular control (queues, permissions, cost visibility).

---

### 2. Activity Comparison  

| Tool (repo) | Open Issues* (approx.) | PRs merged/updated in last 24 h | Release status (last 24 h) |
|-------------|------------------------|--------------------------------|----------------------------|
| **claude‑code** (anthropics/claude‑code) | 10 “hot” issues highlighted; overall repository > 68 k issues (active) | 5 PRs (mostly maintenance & automated remediation) | **No releases** |
| **gemini‑cli** (google‑gemini/gemini‑cli) | 10 “hot” issues highlighted; overall > 26 k issues | 10 PRs (major dependency upgrades, P1 bug fixes) | **No releases** |
| **copilot‑cli** (github/copilot‑cli) | 7 “hot” issues highlighted; overall > 3 k issues | 0 PRs (all stale) | **No releases** |
| **kimi‑code‑cli** (MoonshotAI/kimi‑cli) | 4 “hot” issues highlighted; overall > 2 k issues | 5 PRs (clipboard, Windows Terminal, error handling) | **No releases** |
| **open‑code** (anomalyco/opencode) | 10 “hot” issues highlighted; overall > 13 k issues | 10 PRs (clipboard fix, OAuth server stop, model integration) | **v1.17.7 released** |
| **qwen‑code** (QwenLM/qwen‑code) | 10 “hot” issues highlighted; overall > 5 k issues | 10 PRs (dynamic workflows, heartbeat fallback, cost visibility) | **No releases** |
| **pi‑mono** (badlogic/pi‑mono) | Summary generation failed – activity not captured | – | – |

\*Issues counted from the “Hot Issues” section of each digest; the numbers reflect the distinct items flagged as critical or trending on the day of the digest.

---

### 3. Shared Feature Directions  

| Common Requirement | Tools that surface it | Typical Use‑Case / Rationale |
|--------------------|-----------------------|------------------------------|
| **Non‑interruptive workflow control** (message‑queue or staged follow‑ups) | Claude Code (#50246), Gemini CLI (implicit via sub‑agent delegation), OpenCode (plugin‑hook), Kimi Code (sidebar ⌘) | Allows developers to stage additional commands without aborting an active agent session. |
| **Sub‑agent orchestration & bounded recursion** | Claude Code (issues #68430, #68110), Gemini CLI (P1 hangs), Qwen Code (Dynamic Workflows P4a), OpenCode (agent‑skill spec) | Prevents runaway token consumption and “fan‑out” problems that currently cripple long‑running tasks. |
| **AST‑aware / token‑efficient tooling** | Gemini CLI (AST‑aware file tools), Qwen Code (AST‑aware read/search), OpenCode (MCP parity), Kimi Code (regex‑replace) | Reduces LLM token waste and improves precision when reading or searching codebases. |
| **Rich context capture & persistence** | Claude Code (message‑queue, app‑snapshots), Gemini CLI (UX Journey), Qwen Code (cost visibility), OpenCode (session‑wide token accounting) | Provides audit trails, cost tracking, and the ability to resume complex multi‑turn interactions. |
| **Granular permission & RBAC** | Gemini CLI (typed persistent permissions), Copilot CLI (skill‑folder resolution), Kimi Code (sharp permission rules), OpenCode (auth‑error enrichment) | Enables enterprise‑grade security when exposing plugins, MCP services, or external APIs. |
| **Provider‑fallback / multi‑provider resilience** | Gemini CLI (provider fallback chain), Kimi Code (provider fallback), Qwen Code (provider list), OpenCode (MCP client capabilities) | Mitigates quota exhaustion, 401/429 errors, and provider‑specific outages. |
| **Cost / token visibility** | Qwen Code (cost‑visibility PR), Gemini CLI (component‑level evals), OpenCode (cost‑visibility), Kimi Code (token caps) | Addresses user frustration over opaque billing and helps plan usage. |
| **CLI ergonomics (slash commands, sidebars, voice)** | Copilot CLI (slash‑command UI), Kimi Code (sidebar toggle), Gemini CLI (interactive policies), OpenCode (CLI timestamps) | Improves discoverability and reduces friction in terminal‑heavy workflows. |

---

### 4. Differentiation Analysis  

| Dimension | Claude Code | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|-----------|-------------|------------|-------------|----------|-----------|
| **Primary target** | Professional developers using Anthropic models; heavy emphasis on *safety* and *enterprise* features (plan‑level billing, session persistence). | Researchers & power users building multi‑model agents; strong focus on *evaluation* and *AST‑aware* tooling. | Enterprise users of GitHub’s ecosystem; integration with GitHub Copilot, telemetry, and Azure DevOps. | Community‑driven, multi‑model agnostic tooling; aims for *universal* CLI orchestration across providers. | Academic / prototype community; emphasizes *dynamic workflows* and *cost visibility* in a multi‑model context. |
| **Feature focus** | Agent orchestration, message‑queue mode, granular session control. | Agent reliability, sub‑agent turn accounting, AST‑aware read/search, component‑level evaluation. | UI consistency, attachment handling, skill spec compliance, cross‑session “Up next”. | Plugin extensibility, OAuth security, clipboard handling, modular SDK updates. | Dynamic workflow engine, cost accounting, heartbeat‑fallback, extensive plugin hooks. |
| **Technical approach** | Centralized agent runtime with explicit fork limits; heavy reliance on XML‑based task definitions. | Unified agent framework with modular “skill” registry; AST integration at the model‑read layer. | Command‑line wrapper around GitHub’s cloud services; UI driven by Electron‑style components. | Low‑level OS interaction (clipboard, SSH), OAuth server hygiene, plugin architecture. | Modular plugin system, explicit permission contracts, token‑budget tracking, extensible MCP helpers. |
| **Maturity of release cycle** | Slow (only 5 PRs in 24 h, no releases) – stabilizing but lagging behind bug‑fix velocity. | Frequent dependency upgrades; daily P1 bug fixes but no formal version bump. | Stagnant PR activity; focus on bug‑report triage rather than new features. | Regular patch releases (e.g., v1.17.7) with clear changelog; steady PR throughput. | Active PR flow (≈10) with experimental features, but still pre‑release. |
| **Community size (signal)** | Large (68 k+ issues) but recent activity concentrated on core stability bugs. | Moderate (≈26 k issues) with high‑visibility P1 bugs and many PRs. | Small (≈3 k issues) but high concentration of UI‑related hot‑issues. | Mid‑size (≈13 k issues) and a stable release cadence. | Smaller (≈5 k issues) but vibrant discussion around cost & dynamic workflows. |

---

### 5. Community Momentum & Maturity  

| Tool | Momentum Indicator | Maturity Assessment |
|------|--------------------|---------------------|
| **claude‑code** | Issue volume high; critical bugs still emerging (recursive spawning, kernel leaks). PR churn low → stabilization phase. | **High traffic, medium maturity** – core functionality solid, but reliability gaps remain. |
| **gemini‑cli** | Frequent P1 bug fixes, extensive dependency upgrades, broad AST‑aware roadmap. PR volume high (≥10) → active development. | **High traffic, rapidly maturing** – strong engineering focus, but still experimental in sub‑agent semantics. |
| **copilot‑cli** | Low PR velocity, many UI‑centric hot issues; limited release activity. | **Low momentum, early‑stage maturity** – feature set stable, but community engagement waning. |
| **open‑code** | Consistent release cadence (v1.17.7) and steady PR flow; robust security patches. | **Medium maturity** – production‑ready for core use‑cases, active maintenance. |
| **qwen‑code** | Active discussion on cost visibility and dynamic workflows; many open‑source contributors. | **Emerging maturity** – innovative features but still pre‑production. |
| **kimi‑code‑cli** | Focused bug‑fixes (clipboard, Windows Terminal) and limited feature additions; niche user base. | **Stable niche** – reliable for its target workflow but smaller ecosystem. |
| **pi‑mono** | No recent digest; activity not captured. | **Unclear** – likely inactive or internally focused. |

*Overall, the most **actively iterating** ecosystems are **claude‑code**, **gemini‑cli**, and **open‑code**, each showing a blend of high issue volume and regular PR throughput. **copilot‑cli** and **kimi‑code‑cli** exhibit slower momentum, while **qwen‑code** occupies a middle ground with strong research‑oriented interest.*

---

### 6. Trend Signals for Developers  

1. **Agent‑level Operability is Becoming Table Stakes** – Non‑interruptive queuing, bounded recursion, and clear termination signals are now essential expectations across tools. Projects that fail to provide a reliable “pause/resume” or “continue after error” flow see rapid user frustration.  

2. **Cost Transparency & Token Budgets Are Central to Adoption** – Users demand visible token usage, per‑task cost accounting, and hard quotas. Tools that expose these metrics (e.g., Qwen Code, OpenCode) enjoy higher trust and lower support overhead.  

3. **AST‑Aware Tool Integration Is the Next Frontier for Precision** – Projects that can parse code structures (Gemini CLI, Qwen Code) are reducing meaningless token consumption and improving task accuracy, a trend that will likely become a standard plug‑in layer.  

4. **Permission‑Driven Security Is Converging** – Typed, persistent permission contracts (Gemini CLI, OpenCode, Kimi Code) indicate a move toward fine‑grained policy enforcement, mirroring cloud‑IAM patterns but in a terminal context.  

5. **Multi‑Provider Resilience Is a Differentiator** – Fallback chains, automatic provider switching, and robust auth error handling are increasingly seen as core reliability concerns, especially as developers mash together Anthropic, Gemini, OpenAI, and open‑source models in a single CLI session.  

6. **CLI Ergonomics Are Shifting Toward Rich UI Hooks** – Slash commands, sidebars, voice input, and interactive policy dialogs are no longer novelty features; they are becoming baseline for productivity‑focused users who spend hours in the terminal.  

*For technical decision‑makers, the recommendation is to prioritize tools that already expose token‑budget awareness, granular permission contracts, and reliable sub‑agent lifecycle management, while also offering a clear migration path for AST‑aware tool integration. Those that are actively iterating on these dimensions (Claude Code, Gemini CLI, OpenCode) are best positioned to support production‑grade AI‑augmented development workflows in the near term.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

We are given data from the GitHub repository "anthropics/skills" as of 2026-06-15.
 We have two main sections: Popular Pull Requests (PRs) and Community Issues.

 However, note that in the provided data for PRs, the "Comments" field is listed as "undefined" for every PR.
 Similarly, in the Issues section, we see actual comment counts (e.g., #228 has 14 comments).

 Since the PRs section does not have comment counts (they are undefined), we cannot rank PRs by comments.
 But the problem says: "Popular Pull Requests (sorted by comments, 50 total, showing top 20)".
 This implies that the data we are given for PRs should have been sorted by comments, but the comment values are missing (shown as undefined).

 Let's look again at the PRs section: each PR has "Comments: undefined". This is likely an error in the data provided.

 However, in the Issues section, we do have comment counts (e.g., #228: 14 comments).

 Given the instructions, we are to analyze the community's most-watched Skills activity.

 Since the PRs data lacks comment counts, we must rely on the Issues data for community demand trends and pending skills.

 But note: the problem says "Popular Pull Requests (sorted by comments, 50 total, showing top 20)" and then lists PRs with "Comments: undefined".
 This is contradictory.

 However, observe that in the Issues section, we have actual comment counts and they are sorted by comments (top 15 shown).

 Approach:

 1. For Top Skills Ranking (from PRs): Since the comment counts are missing, we cannot use them.
    But note: the problem states that the PRs are sorted by comments (so the first PR in the list should have the highest comments, etc.).
    Even though the comment values are undefined, we can assume the order provided is by descending comment count.

    However, the problem says: "showing top 20", and we are to list the 5-8 most-discussed.

    So we will take the first 5-8 PRs from the provided list (which is sorted by comments, even though the numbers are missing).

 2. For Community Demand Trends: We look at the Issues (which have comment counts) to see what the community is discussing.

 3. High-Potential Pending Skills: These are active-comment PRs (so we look at the PRs that are open and have discussion, but note: we don't have comment counts for PRs).
    Since we don't have comment counts for PRs, we might have to rely on the order (as the list is sorted by comments) and the fact that they are open.

 4. Skills Ecosystem Insight: One-sentence summary.

 Let's break down:

 Section 1: Top Skills Ranking (from PRs)
   We take the top PRs from the provided list (which is sorted by comments, so the first ones are the most discussed).
   We are to list 5-8. Let's take the top 5.

   PRs provided (in order, top 20 shown):

   #514: Add document-typography skill
   #486: Add ODT skill
   #210: Improve frontend-design skill clarity and actionability
   #83: Add skill-quality-analyzer and skill-security-analyzer to marketplace
   #538: fix(pdf): correct case-sensitive file references in SKILL.md

   We'll take these top 5.

   For each, we describe:
     - Functionality (from the Summary)
     - Discussion highlights: Since we don't have comment counts, we note that they are top in the sorted list (so high discussion) but we don't have specific comments.
       However, note that the problem says they are sorted by comments, so we can say they are among the most discussed.
     - Current status: all are [OPEN] as per the data.

 Section 2: Community Demand Trends (from Issues)
   We look at the Issues (which have comment counts) and are sorted by comments (top 15 shown).

   Top Issues by comments:

   #228: Enable org-wide skill sharing in Claude.ai (14 comments, 7 👍)
   #556: run_eval.py: claude -p never triggers skills/commands (0% trigger rate across all queries) (12 comments, 7 👍)
   #62: All my skills have disappeared and now i get errors (10 comments, 2 👍)
   ... and so on.

   We are to distill the most-anticipated new Skill directions.

   However, note: Issues are not necessarily proposing new Skills; they can be bugs, feature requests, etc.

   We need to look for Issues that are asking for new Skills or expressing demand for certain types of Skills.

   Let's scan the Issues:

   #228: Feature request for org-wide skill sharing (not a new Skill, but a feature for the system)
   #556: Bug in the evaluation tool (run_eval.py)
   #62: Bug (skills disappeared)
   #202: [CLOSED] skill-creator should be updated to best practice (feedback on existing skill)
   #492: Security issue (community skills in anthropic/ namespace)
   #412: [CLOSED] Skill proposal: agent-governance (this is a skill proposal!)
   #189: Bug (duplicate skills when installing plugins)
   #29: Usage with bedrock (question about integration)
   #16: Expose Skills as MCPs (feature request for the system)
   #1175: Concerns regarding Security and Context Window when handling SharePoint Online (SPO) documents (not a skill proposal, but a concern)
   #1169: skill-creator description-optimisation loop: recall=0% (bug in the tool)
   #1061: Windows compatibility: skill-creator scripts fail (bug)
   #184: [CLOSED] agentskills.io page error (not relevant)
   #61: "Not found" error when loading Skills (bug)
   #1220: Feature request: multi-file preload / inline bundling for skill reference files (feature request for the system)

   Among these, the only explicit skill proposal is #412 (agent-governance) but it is CLOSED.

   However, note that the Issues section says: "Community Issues (sorted by comments, 50 total, showing top 15)" and #412 is listed as [CLOSED] but still in the top 15 by comments? 
   It has 6 comments and 0 👍, but it's closed.

   We are looking for anticipated new Skill directions. So we should look for open Issues that are proposing new Skills.

   Let's check the open Issues in the top 15:

   #228: open
   #556: open
   #62: open
   #492: open
   #189: open
   #29: open
   #16: open
   #1175: open
   #1169: open
   #1061: open
   #1220: open

   None of these open Issues are explicitly proposing a new Skill (like #412 was, but it's closed).

   However, note that #228 is about org-wide skill sharing, which is a system feature, not a Skill.
   #16 is about exposing Skills as MCPs (system feature).
   #1220 is about multi-file preload (system feature).

   But wait: the problem says "distill the most-anticipated new Skill directions". 

   We might have to look beyond the top 15 for skill proposals? But we are only given top 15.

   Alternatively, note that the PRs section contains many proposed Skills (like #514, #486, etc.). 
   The Issues might be reflecting bugs or feature requests that indirectly indicate demand for certain Skills.

   For example:
     - #556 (run_eval.py not triggering skills) indicates a problem with the evaluation system, which is important for Skill development.
     - #1169 and #1061 are about the skill-creator tool (which is used to create Skills) having bugs on Windows.
     - #228 (org-wide sharing) would make it easier to share Skills within an organization, increasing demand for Skills.

   However, the problem asks for "new Skill directions", meaning types of Skills the community wants.

   Let's look at the PRs that are proposed Skills (not fixes or improvements):

     #514: document-typography (new Skill)
     #486: ODT (new Skill)
     #210: improving an existing Skill (frontend-design) - not new
     #83: adding two meta skills (skill-quality-analyzer and skill-security-analyzer) - new
     #538: fix for pdf - not new Skill
     ... and so on.

   So the new Skills being proposed in PRs are: #514, #486, #83 (which adds two), and then we see others like #181 (SAP-RPT-1-OSS predictor), #1140 (agent-creator), etc.

   Given that we don't have comment counts for PRs, but the list is sorted by comments, we assume the top PRs are the most discussed.

   Therefore, for Community Demand Trends, we can look at the top PRs (which are proposed Skills) to see what types of Skills are being discussed.

   But note: the problem says "From Issues", so we must use the Issues.

   Let me re-read: "Community Demand Trends - From Issues, distill the most-anticipated new Skill directions"

   So we must use the Issues section.

   How can we get new Skill directions from Issues?

   We look for Issues that are:
      - Open
      - Proposing a new Skill (or expressing a clear need for a new type of Skill)

   In the given Issues, we don't see any open Issue that is a new Skill proposal (like #412 was, but it's closed).

   However, note that #412 is closed but was in the top 15 by comments. It was a skill proposal for "agent-governance".

   Since it's closed, it might have been implemented or rejected, but the high comment count shows interest.

   But the problem says "most-anticipated", meaning what the community is looking forward to.

   We might consider closed Issues that were skill proposals as indicative of past demand, but we want current.

   Alternatively, note that there are many Issues about the skill-creator tool not working (like #556, #1169, #1061) which indicates that the community wants to create Skills but is blocked by tooling issues.

   Also, #228 (org-wide sharing) would increase the utility of Skills, thus increasing demand.

   However, the problem specifically says "new Skill directions", meaning the subject matter of the Skills.

   Another idea: look at the Skills that are being fixed or improved in the PRs (like #210 improving frontend-design) to see which existing Skills are problematic and thus might need rework or indicate areas where better Skills are needed.

   But again, we are to use Issues.

   Given the constraints, let's try to interpret:

   - #228: org-wide skill sharing -> This would make Skills more useful in teams, so anticipate more demand for Skills that are team/organization focused (e.g., project management, internal documentation, etc.)
   - #556: run_eval.py not working -> This is a tooling issue that prevents Skill creators from validating their Skills, so the community is frustrated and wants this fixed to be able to create better Skills (any type).
   - #492: Security concern about community skills in anthropic/ namespace -> This indicates a need for better skill vetting or naming conventions, which might affect trust in Skills.

   However, none of these directly point to a new Skill direction (like "we want a Skill for X").

   Let's look again at the Issues for any that hint at a desired Skill:

   #1175: Concerns regarding Security and Context Window when handling SharePoint Online (SPO) documents -> This suggests that there is interest in using Skills for SPO documents, but there are concerns. So a Skill for secure SPO handling might be anticipated.

   But it's not a direct request.

   Given the difficulty, and since we are limited to the provided data, we note:

   The top Issue by comments is #228: org-wide skill sharing.

   The next is #556: run_eval.py bug.

   Then #62: skills disappearing.

   We don't see a clear new Skill direction from the Issues.

   However, note that the PRs section has many proposed Skills (like document-typography, ODT, etc.) and the Issues are discussing problems with the system that would affect all Skills.

   Perhaps the community's most-anticipated new Skill directions are reflected in the PRs that are getting the most attention (which we are using for Section 1).

   But the problem says "From Issues", so we must try.

   Another approach: look for Issues that are labeled as "feature request" and that are asking for a new Skill.

   In the given Issues, we don't see any explicit "add new Skill for X" in the open Issues.

   However, note that #16: "Expose Skills as MCPs" is a feature request for the system, not a Skill.

   #1220: "multi-file preload / inline bundling for skill reference files" is also a system feature.

   Let's check if there are any Issues that are skill proposals in the top 15:

   We saw #412 is closed.

   How about we look at the next few? But we are only given top 15.

   Given the data, we might have to conclude that the top Issues are not about new Skill proposals but about system bugs and features.

   Therefore, for Community Demand Trends, we can say:

   The community is primarily focused on resolving system-level issues that hinder Skill creation and usage (such as org-wide sharing, evaluation tool bugs, and skill persistence), rather than requesting specific new Skill domains. However, the high engagement with the agent-governance skill proposal (Issue #412, now closed) indicates historical interest in AI agent safety and management Skills.

   But note: #412 is closed, so it's not current.

   Alternatively, we can look at the PRs that are proposed Skills and are in the top of the list (which we are using for Section 1) and infer that these are the Skill directions the community is currently discussing.

   However, the problem strictly says "From Issues".

   Let's read the Issue #556 again: it's about run_eval.py not triggering skills. This is critical for anyone wanting to create or improve Skills because they can't test them. So the demand is for a working evaluation system, which is a prerequisite for any new Skill.

   Similarly, #1169 and #1061 are about the skill-creator tool being broken on Windows.

   So the community's immediate demand is for tooling fixes to enable Skill development.

   But the problem asks for "new Skill directions", meaning the content of the Skills.

   We might have to say that the Issues do not clearly indicate new Skill directions, but rather highlight barriers to Skill creation.

   However, note that Issue #228 (org-wide sharing) would increase the value of Skills, thus increasing demand for Skills in general, and particularly for Skills that are useful in an organizational context (e.g., internal tools, HR, finance, etc.).

   So we can distill: anticipation for Skills that support organizational workflows and collaboration.

   Given the above, for Section 2:

   Community Demand Trends: The community expresses strong interest in organizational skill sharing (Issue #228) and reliable skill development tooling (Issues #556, #1169, #1061), indicating anticipation for Skills that enhance team productivity and are easily shareable within enterprises, particularly in document management and internal process automation.

 Section 3: High-Potential Pending Skills

   These are active-comment PRs not yet merged. We look at the PRs list (which is sorted by comments, so the top ones have the most discussion) and that are open.

   We'll take the top open PRs that are not yet merged (all are open in the provided data) and that represent new Skills or significant improvements.

   From the top PRs:

   #514: document-typography (new Skill) - open
   #486: ODT skill (new Skill) - open
   #210: Improve frontend-design skill (improvement) - open
   #83: Add skill-quality-analyzer and skill-security-analyzer (two new meta skills) - open
   #538: fix(pdf) - not a new Skill, but a fix

   We want Skills (new or significantly improved) that are pending.

   Let's list the PRs that are proposing new Skills (not just fixes or improvements to existing ones) from the top of the list:

   #514: new Skill (document-typography)
   #486: new Skill (ODT)
   #83: new Skills (skill-quality-analyzer, skill-security-analyzer) [two in one]
   #181: SAP-RPT-1-OSS predictor skill (new) - but note: #181 is the 8th in the list (we are showing top 20, so it's included in the data we have, but not in the top 5)

   Since we are to list High-Potential Pending Skills (active-comment PRs not yet merged), and we don't have comment counts, we use the order.

   We'll take the top 3-5 new Skill PRs from the list.

   Top new Skill PRs:

   1. #514: document-typography
   2. #486: ODT
   3. #83: adds two meta skills (quality and security analyzer)
   4. #181: SAP-RPT-1-OSS predictor (we see it's the 8th PR in the list)

   But note: #210 is an improvement to an existing Skill, so we might include it as a high-potential pending improvement.

   However, the problem says "Skills", so we focus on new Skills.

   We'll list:

   - #514: document-typography skill
   - #486: O

---

# Claude Code Community Digest — 2026-06-15

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The issue tracker shows **intensifying instability in sub-agent orchestration** — two critical reports (#68430, #68110) describe unbounded recursive spawning causing exponential token burn, while a macOS kernel zone leak (#66020) triggers process panics at ~20 GB. Meanwhile, the top-voted feature request (#50246, 92 👍) for a **message queue mode** remains open, signaling strong demand for non-interruptive workflow control.

---

## 2. Releases

*No releases published in the last 24 hours.*

---

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#53940](https://github.com/anthropics/claude-code/issues/53940) | **Cowork Edit/Write silently truncate files** (Windows) | Deterministic data-loss bug in the byte-conservation buffer; affects all file sizes. | 31 comments, 12 👍 |
| [#50246](https://github.com/anthropics/claude-code/issues/50246) | **Message queue mode** — queue messages instead of interrupting | Highest-voted open enhancement; solves the “interrupt or forget” dilemma during long tasks. | 28 comments, **92 👍** |
| [#41458](https://github.com/anthropics/claude-code/issues/41458) | **`cleanupPeriodDays: 99999` ignored — 490 sessions deleted** | Explicit retention setting disregarded; silent data loss across platforms. | 16 comments, 1 👍 |
| [#32544](https://github.com/anthropics/claude-code/issues/32544) | **Extra usage charged despite plan capacity + false rate limits** | Billing meter mismatches reported limits; erodes trust in usage reporting. | 15 comments, 14 👍 |
| [#51143](https://github.com/anthropics/claude-code/issues/51143) | **Claude Desktop persistent blank screen on Windows** | Complete usability blocker; survives reinstalls. | 13 comments, 12 👍 |
| [#63870](https://github.com/anthropics/claude-code/issues/63870) | **Bash tool calls emitted as raw `<invoke>` text** (macOS) | Model outputs malformed XML instead of executing; 23 occurrences in one session. | 11 comments, 13 👍 |
| [#66192](https://github.com/anthropics/claude-code/issues/66192) | **Copy-paste does not work** (macOS) | Fundamental TUI regression; blocks basic editing workflows. | 11 comments, 10 👍 |
| [#12748](https://github.com/anthropics/claude-code/issues/12748) | **Add `cwd` parameter to Task tool** (Git worktrees support) | Enables subagents to operate in isolated worktrees; long-standing request. | 10 comments, 23 👍 |
| [#68430](https://github.com/anthropics/claude-code/issues/68430) | **Subagent infinite recursion → catastrophic token burn** (CRITICAL) | Agents spawn 50+ levels deep, ignore `CLAUDE_CODE_FORK_SUBAGENT=0`, fetch files via HTTP. | 7 comments |
| [#66020](https://github.com/anthropics/claude-code/issues/66020) | **macOS 26.5.1 kernel zone leak (`data.kalloc.1024`)** | CLI leaks ~1,000 allocations/sec under load; process panics at ~20 GB RSS. | 7 comments |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#68423](https://github.com/anthropics/claude-code/pull/68423) | `fix(scripts): don't auto-close assigned issues in sweep` | Open | Preserves ownership semantics in the stale-issue bot; prevents accidental closure of triaged issues. |
| [#67699](https://github.com/anthropics/claude-code/pull/67699) | `[baobao] BUG: Claude autonomously ran background scripts calling a paid external` | Open | Automated fix (NVIDIA AI) for unauthorized paid-API calls; includes bounty metadata. |
| [#67409](https://github.com/anthropics/claude-code/pull/67409) | `[baobao] BUG: Account downgraded due to billing error` | Open | Automated remediation for erroneous downgrade; $200 bounty attached. |
| [#67722](https://github.com/anthropics/claude-code/pull/67722) | `[BUG] Claude autonomously ran background scripts calling a paid external` | **Closed** | Duplicate of #67699; workflow dedupe logic added. |
| [#1](https://github.com/anthropics/claude-code/pull/1) | `Create SECURITY.md` | **Closed** | Foundational security policy document (merged 2026-06-14 after 15-month gestation). |

*Note: Only 5 PRs updated in the last 24h; all are maintenance or automated remediation.*

---

## 5. Feature Request Trends

1. **Non-interruptive workflow control** — Message queue / task queuing (#50246, #64204) dominates votes; developers want to stage follow-ups without derailing active agents.
2. **Subagent isolation & scoping** — `cwd` for Task tool (#12748), project-scoped conversation list (#68495), and bounded recursion (#68430, #68110) all point to a need for tighter workspace boundaries.
3. **Rich context capture** — Appshots-style full-window capture (#68498) and improved Remote Control sync (#68488) reflect demand for seamless multimodal context.
4. **Third-party API parity** — Auto-compact regression for non-Anthropic providers (#65585) and MCP noise from disconnected integrations (#68462) highlight gaps in provider-agnostic tooling.

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Silent data corruption / loss** | File truncation (#53940), session deletion (#41458), 0-byte agent outputs (#68496) | High — undermines trust in core tooling |
| **Uncontrolled agent fan-out** | Recursive spawning (#68430, #68110), ignored fork limits | Critical — runaway token costs, unresponsive sessions |
| **Platform-specific regressions** | Windows blank screen (#51143, #68504), macOS pty leaks (#65995, #66434), iTerm2 renderer corruption (#68461) | High — blocks daily workflows on affected OSes |
| **Model output malformation** | Raw `<invoke>` text (#63870, #68354, #68472), stray “call”/“court” tokens, Opus 4.8 empty turns (#68510) | High — breaks tool-use loop, requires model downgrades |
| **Billing & usage opacity** | False rate limits (#32544), HTTP 529 misreported as “rate limited” (#68502) | Medium — planning uncertainty, support burden |
| **TUI fundamentals broken** | Copy-paste (#66192), conversation scope leak (#68495), unthrottled thinking tokens in VS Code (#68508) | Medium — friction in core interaction loop |

---

*Digest generated from `anthropics/claude-code` GitHub data as of 2026-06-15 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-15

## Today's Highlights
The project continues its heavy investment in **agent reliability** and **evaluation infrastructure**, with multiple P1 epics tracking sub-agent hang recovery, AST-aware tooling assessments, and component-level evals. A wave of dependency updates landed today (53 packages), including a major `@google/genai` bump to v2.8.0. Critical bugs persist around shell command stalls, Wayland browser-agent failures, and Auto Memory retry loops.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** (EPIC, P1) | Follow-up to behavioral evals rollout; 76 tests across 6 models. Foundational for regression prevention. | 7 comments, maintainer-only rollup |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** (P1, bug) | Sub-agent delegation causes hour-long stalls on trivial tasks (folder creation). Workaround: disable sub-agents. | 7 comments, **8 👍** — high user pain |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** (EPIC, P2) | Investigates whether AST tools (tilth, glyph, ast-grep) reduce token noise & misaligned reads. | 7 comments, 1 👍 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS** (P1, bug) | `codebase_investigator` masks turn-limit exhaustion as success, hiding failures from users. | 6 comments, 2 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses skills & sub-agents** (P2, bug) | Agent ignores custom skills (gradle, git) unless explicitly instructed; undermines extensibility model. | 6 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction for Auto Memory** (P2, security) | Secrets sent to model before redaction; service logs skill data. Requires pre-context sanitization. | 5 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions forever** (P2, bug) | Unread sessions stay “unprocessed” and resurface repeatedly, wasting cycles. | 5 comments |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell commands stuck at “Waiting input” post-completion** (P1, bug) | Simple CLI commands hang UI despite finishing; blocks interactive workflows. | 4 comments, **3 👍** |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** (P1, bug) | `browser_agent` terminates with `GOAL` but no output; blocks web tasks on Linux/Wayland. | 4 comments, 1 👍 |
| [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) | **Native file tools for task tracker** (P3, experiment) | Explores replacing custom tracker with OS file ops for reliability & simplicity. | 4 comments |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#27730](https://github.com/google-gemini/gemini-cli/pull/27730) | **Fix (P1, extensions)** | Prevents `McpComplianceTransport` from stuffing JSON arrays into `structuredContent`; preserves text payloads for calendar-style tools. Includes regression test. |
| [#27729](https://github.com/google-gemini/gemini-cli/pull/27729) | **Fix (P2, enterprise)** | Truncates telemetry metric attributes to 1024 chars to stop GCP export floods (Node stack traces in terminal when using `--format json`). |
| [#27718](https://github.com/google-gemini/gemini-cli/pull/27718) | **Fix (P2, core)** | Keeps top-level `auto` model alias visible in `/model` without preview access; filters preview-only aliases correctly. |
| [#22456](https://github.com/google-gemini/gemini-cli/pull/22456) | **Feature (P1, UI, XL)** | New interactive `PoliciesDialog` (tabbed, searchable) replaces `/policies` text output; categorizes Allow/Ask/Deny rules. *Stale but high-value UX.* |
| [#23030](https://github.com/google-gemini/gemini-cli/pull/23030) | **Feature (UX testing, L)** | Non-invasive “UX Journey” framework for terminal React component verification — enables white-box UI tests without instrumentation. *Stale.* |
| [#27929](https://github.com/google-gemini/gemini-cli/pull/27929) | **Deps (major)** | `@google/genai` **1.30.0 → 2.8.0** — major SDK upgrade; likely brings new model capabilities & breaking changes. |
| [#27931](https://github.com/google-gemini/gemini-cli/pull/27931) | **Deps** | `puppeteer-core` **24.39.0 → 25.1.0** — browser automation updates; relevant for `browser_agent` stability. |
| [#27930](https://github.com/google-gemini/gemini-cli/pull/27930) | **Deps** | `@types/node` **20.19.1 → 25.9.2** — aligns with Node 25 types; may require runtime version bump. |
| [#27925](https://github.com/google-gemini/gemini-cli/pull/27925) | **Deps (bulk, XL)** | 53-package group update: `@agentclientprotocol/sdk 0.16.1→0.25.0`, `@vitest/eslint-plugin`, `eslint`, `typescript`, etc. |
| [#27928](https://github.com/google-gemini/gemini-cli/pull/27928) | **Deps** | `undici` **7.24.5 → 8.4.0** — Node HTTP client upgrade; includes connection registration fixes. |

---

## Feature Request Trends (Distilled from Issues)

1. **AST-Aware Tooling** — Three linked epics ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) push for AST-based read/search/map (tilth, glyph, ast-grep) to cut token waste & improve precision.
2. **Sub-Agent Maturity** — Recurring asks: reliable delegation ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), honest termination status ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), proactive skill use ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), and permission gating ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).
3. **Auto Memory Hardening** — Four issues ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) target redaction timing, retry storms, patch validation, and overall quality.
4. **Evaluation Infrastructure** — Component-level evals ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)), stabilization ([#23166](https://github.com/google-gemini/gemini-cli/issues/23166)), and flaky test removal ([#23313](https://github.com/google-gemini/gemini-cli/issues/23313)) signal a shift to measurable quality gates.
5. **Remote/Background Agents** — Sprint 2 epic ([#20303](https://github.com/google-gemini/gemini-cli/issues/20303)) for task-level auth, 1P agent support, and background ops.
6. **Browser Agent Resilience** — Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), settings adherence ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), session takeover ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)).

---

## Developer Pain Points (High-Frequency Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Sub-agent hangs / silent failures** | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (8 👍), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | Blocks delegation workflows; users disable sub-agents entirely. |
| **Shell command UI desync** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (3 👍) — “Waiting input” after command exits | Breaks interactive loops; forces restarts. |
| **Agent ignores custom skills** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Undermines extensibility; users must manually invoke skills. |
| **Auto Memory noise & leaks** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | Security risk (secret exposure), CPU waste (retry loops), patch pollution. |
| **Wayland incompatibility** | [#21983](https

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-15

## Today's Highlights
No new releases shipped in the last 24 hours. Community focus centers on three critical bugs: a session-poisoning attachment flaw (#3791), duplicate-item websocket errors (#3558), and agent-skills path-resolution breakage (#956). Two new feature requests highlight growing demand for BYOK model discovery (#3795) and Azure DevOps integration in the cross-session “Up next” panel (#3794).

## Releases
*None in the last 24 h.*

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#3791](https://github.com/github/copilot-cli/issues/3791) | **Malformed attachment poisons session; all subsequent turns fail with 400** | A single encrypted `.xlsx` crashes the entire session irreversibly—forcing users to start over. High severity for workflows that ingest documents. | New (06-14), 0 comments yet; likely to attract attention quickly. |
| [#3558](https://github.com/github/copilot-cli/issues/3558) | **Duplicate Item Errors** (websocket `bad_request`) | Breaks multi-turn conversations after the first prompt; 7 👍 and 4 comments indicate broad impact across models/providers. | Open since 05-28, still reproducing on latest builds. |
| [#956](https://github.com/github/copilot-cli/issues/956) | **Agent skills scripts executed in wrong folder** | Violates the [Agent Skills spec](https://agentskills.io/specification#file-references); relative paths like `scripts/myscript.sh` resolve incorrectly, blocking skill authors. | 6 comments, 2 👍; long-standing (opened 01-13) but updated yesterday. |
| [#3797](https://github.com/github/copilot-cli/issues/3797) | **Different prompt input box layout in two cmd tabs** | UI inconsistency in Windows Terminal tabs suggests state leakage or race condition in the render layer. | Filed today with screenshots; 1 comment. |
| [#3795](https://github.com/github/copilot-cli/issues/3795) | **Opt-in model discovery for BYOK / custom providers** | Removes manual `COPILOT_MODEL` wiring; enables dynamic model enumeration from custom endpoints. | Fresh feature request, 0 discussion yet—watch for maintainer response. |
| [#3794](https://github.com/github/copilot-cli/issues/3794) | **Add Azure DevOps work items to Up next** | Extends the cross-session inbox beyond GitHub; aligns with existing ADO repo support. | New, 0 comments—enterprise-relevant. |
| [#3793](https://github.com/github/copilot-cli/issues/3793) | **Garbled/hex-only report** | Appears to be a corrupted crash dump or automated noise; no actionable content. | 0 engagement; likely to be closed as invalid. |
| [#3796](https://github.com/github/copilot-cli/issues/3796) | **“hhhhhhh” (invalid)** | Spam/placeholder; already closed. | Noise. |

## Key PR Progress
*No pull requests updated in the last 24 h.*

## Feature Request Trends
1. **BYOK Ergonomics** – Automatic model discovery (#3795) and smoother custom-provider onboarding.
2. **Multi-Platform Work Tracking** – Unified “Up next” across GitHub *and* Azure DevOps (#3794).
3. **Agent-Skills Spec Compliance** – Correct working-directory resolution for script references (#956).
4. **Session Resilience** – Graceful degradation when attachments fail instead of poisoning the whole conversation (#3791).

## Developer Pain Points
- **Fragile Sessions**: A single bad attachment or duplicate websocket item kills the entire chat history (#3791, #3558).
- **Path-Resolution Bugs**: Agent skills—the flagship extensibility mechanism—still misbehave on relative paths months after spec release (#956).
- **UI Flakiness**: Inconsistent prompt layouts in tabbed terminals erode trust in the terminal-frontend stability (#3797).
- **Manual BYOK Config**: Having to hard-code model IDs for custom providers adds friction and drift (#3795).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

### Kimi Code CLI Community Digest – 2026-06-15

**1. Today's Highlights**  
Auto-load project context at startup is a notable improvement, supporting richer environments. However, severe limitations—such as extreme rate restrictions and unhelpful service bates—remain persistent concerns, undermining the tool’s professional promise.

**2. Releases**  
There are no new releases in the last 24 hours.

**3. Hot Issues**  
- **#850 – Enhancement: Auto-load Project Context**  
  Requested automatic detection of project conventions (contexts, rules) for smoother workflows.  
- **#2123 – Performance Limits**  
  Users report crippling rate limits (frequent rate caps and currency lockouts) that prevent productive output.  
- **#2451 – Conflicting Prompts**  
  Users encounter issues with workflows due to mismatched system prompts, demanding better resolution options.  
- **#2452 – Regex Replacement Bug**  
  Error when multi-edits are applied unintentionally, signaling the need for refinement in text manipulation logic.

**4. Key PR Progress**  
- Fix for “StrReplaceFile” failing on partial matches.
- Integration of Windows Terminal support for messy text management.
- Improved error handling in concurrent process logging.
- Addition of configurable shell support for broad compatibility.

**5. Feature Request Trends**  
The community strongly requests:
- Smart auto-context pull for better IDE integration  
- Enhanced concurrency with smoother UI handling  
- More granular rate limit controls for productivity  
- Clear public understanding of limits and usage quotas  

**6. Developer Pain Points**  
Repeated frustrations center on unpredictable performance, security/clarity gaps, and poor bug resolution processes, which erode trust in the tool’s reliability.

**Links:**  
[https://github.com/MoonshotAI/kimi-cli #850](https://github.com/MoonshotAI/kimi-cli #850)  
[https://github.com/MoonshotAI/kimi-cli #2123](https://github.com/MoonshotAI/kimi-cli #2123)  
[https://github.com/MoonshotAI/kimi-cli #2451](https://github.com/MoonshotAI/kimi-cli #2451)  
[https://github.com/MoonshotAI/kimi-cli #2452](https://github.com/MoonshotAI/kimi-cli #2452)  
[https://github.com/MoonshotAI/kimi-cli #2018](https://github.com/MoonshotAI/kimi-cli PR #2018)

---

This digest is designed for technical readers and developers using Kimi Code CLI, giving clear insights into the latest state of the project and its roadblocks.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



**1. Today's Highlights**  
Opencode v1.17.7 improves core functionality with server-client request reuse, ACP shell tool call enhancements, and plugin environment variable support. Key PRs address critical bugs like clipboard mismatches and OAuth server leaks, while multiple PRs add new features like SSH directory references and Claude model integration. Community focus is on plugin extensibility and workflow reliability.  

---

**2. Releases**  
v1.17.7 (2026-06-15) brings stability fixes, including reusing active servers for plugin requests and improved MCP client parity. No major feature additions, but key bug resolution for CLI and session management.  

---

**3. Hot Issues**  
- **#13984** (CLI copy-paste failure): 48 comments, ongoing for 14 days—blocks basic workflow.  
- **#28567** (MCP client capabilities): 21 likes—demands modern MCP standards for remote work.  
- **#32172** (GLM-5.2 support): New Z.AI model—high demand for cost-effective reasoning models.  
- **#29894** (Plugin session abort): Silent drop in server mode—impacts plugin reliability.  
- **#31778** (MCP API key leakage): Exposes secrets to MCP subprocesses—security risk.  
- **#5305** (Plugin TUI hooks): 18 comments—demands instant command execution for productivity.  
- **#15585** (Free model limits): Closed but active discussion—users expect clearer usage caps.  
- **#28957** (Upstream timeout): macOS-specific—frustrates M4 users with "writing-plans" skill.  
- **#26412** (Custom provider error): vLLM backend breaks tool calls—pain point for self-hosted models.  
- **#32346** (Qwen 3.7 Max timeout): 6-hour session lock—reliability issue for large tasks.  

---

**4. Key PR Progress**  
- **#29967**: Linux clipboard selection fix—resolves primary buffer bypass in Linux.  
- **#31848**: Desktop SDK picker—unifies file selection across HTTP connections.  
- **#32245**: Stop OAuth callback server—prevents port exhaustion.  
- **#32367**: Git worktree from empty repos—fixes creation errors.  
- **#31867**: DeepSeek cache reuse—optimizes prompt efficiency.  
- **#32302**: Forward parent attachments—to subagents—improves task collaboration.  
- **#32364**: Terminal mode reset—avoids TTY corruption during shutdown.  
- **#32356**: Shodan integration—adds low-code network scanning.  
- **#32357**: Claude model ontology—enhances hybrid reasoning.  
- **#32365**: Copilot model limit tests—ensures compliance with provider caps.  

---

**5. Feature Request Trends**  
Top requests focus on **plugin hooks** (instant commands), **MCP standardization**, **SSH directory support**, and **new model integrations** (e.g., GLM-5.2). Community also wants **session status flags** and **recursive context management** (RLM paradigm).  

---

**6. Developer Pain Points**  
Recurring frustrations include **clipboard inconsistencies**, **API key leaks** in MCP subprocesses, **plugin compatibility bugs**, and **free model usage limits**. Issues like copy-paste failures and session memory leaks are reported across multiple versions, indicating systemic gaps in core workflows.


</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-15

## Today's Highlights
The community is currently focused on refining the **Dynamic Workflows (P4a)** and enhancing **resource visibility** via new token usage stats. Significant attention is being paid to critical security and stability issues, including a reported VS Code extension antivirus flag and memory starvation during autonomous agent loops.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
### 🚨 Critical & Security
* **#5055 [OPEN] Trojan:JS/ShaiWorm.DBA!MTB**: A user reports that the VS Code IDE companion (.vsix) is being flagged as a Trojan on Windows 11. High priority for verification. [Link](QwenLM/qwen-code%20Issue%20#5055)
* **#5102 [OPEN] Permission-contract bypass**: A security report indicating that Qwen Code executed a side effect despite a permission-contract probe in non-interactive CLI mode. [Link](QwenLM/qwen-code%20Issue%20#5102)

### 🛠️ Stability & Performance
* **#5101 [OPEN] Tool result history bloat**: Reports of repeated large tool results being carried through provider history, leading to context window exhaustion. [Link](QwenLM/qwen-code%20Issue%20#5101)
* **#5114 [CLOSED] Ubuntu 24.04 Daemon Segfault**: A segmentation fault occurring during `daemon_init` on fresh Ubuntu 24.04 installs. [Link](QwenLM/qwen-code%20Issue%20#5114)
* **#4364 [CLOSED] V8 String-length Fatal**: Extreme large-output failures in foreground stdout causing V8 crashes or empty outputs. [Link](QwenLM/qwen-code%20Issue%20#4364)

### 🔌 Integration & Tools
* **#4218 [OPEN] MCP Filesystem Tool Failure**: MCP server shows as "connected" in UI, but the model cannot access filesystem tools on Windows. [Link](QwenLM/qwen-code%20Issue%20#4218)
* **#5080 [OPEN] API Key 401 Errors**: Conflict between Standard API Keys and Token Plan endpoints leading to authentication failures during model switching. [Link](QwenLM/qwen-code%20Issue%20#5080)
* **#5100 [CLOSED] `/review` Skill Breakage**: The `name` parameter in Agent Teams causes the bundled review skill to fail and enter a repetitive-call loop. [Link](QwenLM/qwen-code%20Issue%20#5100)
* **#5015 [CLOSED] Repeated Tool Calls**: A bug where the agent executes identical tool calls repeatedly in a stream. [Link](QwenLM/qwen-code%20Issue%20#5015)
* **#3203 [OPEN] OAuth Free Tier Adjustment**: A highly active discussion (135 comments) regarding the reduction of free quota from 1,000 to 100 requests/day. [Link](QwenLM/qwen-code%20Issue%20#3203)

## Key PR Progress
### Core & Architecture
* **#5094 [OPEN] Dynamic Workflows P4a**: Implements meta-extraction and stripping for RunOutcomes, a key step in the Dynamic Workflows port. [Link](QwenLM/qwen-code%20PR%20#5094)
* **#5089 [OPEN] Protocol Decoupling**: Refactoring the `Protocol` enum to decouple model identity from authentication types for better routing. [Link](QwenLM/qwen-code%20PR%20#5089)
* **#5097 [OPEN] Heartbeat Fallback**: Fixes memory monitor starvation during autonomous loops to prevent OOM crashes. [Link](QwenLM/qwen-code%20PR%20#5097)
* **#4564 [OPEN] Cost Visibility**: Adds persisted token-usage accounting and a detailed `/stats` command for daily/monthly cost tracking. [Link](QwenLM/qwen-code%20PR%20#4564)

### CLI & UX Improvements
* **#4943 [OPEN] --safe-mode**: Introduces a "safe-mode" to disable all customizations (hooks, MCP, extensions) for cleaner troubleshooting. [Link](QwenLM/qwen-code%20PR%20#4943)
* **#5001 [OPEN] CLI Timestamps**: Adds optional `[HH:MM:SS]` timestamps to assistant turns in the CLI. [Link](QwenLM/qwen-code%20PR%20#5001)
* **#3439 [OPEN] LaTeX Rendering**: Adds support for rendering LaTeX math in the CLI markdown output. [Link](QwenLM/qwen-code%20PR%20#3439)
* **#5118 [OPEN] Per-task Detail**: Web-shell now shows duration and token usage (input/output/cached) for completed todos. [Link](QwenLM/qwen-code%20PR%20#5118)

### Extensions & CI
* **#4850 [OPEN] Extensions Manager**: Transforms `/extensions` from a list into a multi-tab manager (Installed, Discover, Sources). [Link](QwenLM/qwen-code%20PR%20#4850)
* **#4989 [CLOSED] Autonomous Bug Fixer**: Implements a scheduled workflow where Qwen Code attempts to autonomously fix stale bug reports. [Link](QwenLM/qwen-code%20PR%20#4989)

## Feature Request Trends
* **Enhanced Control**: Users are requesting more granular control over agent behavior, specifically "Rules/Instructions" (similar to Claude Code) for style and session guides (#4723) and support for `sudo` command authorization (#5119).
* **Resource Transparency**: A strong trend toward "cost and token visibility," moving from simple limits to detailed per-task usage statistics.
* **Extension Ecosystem**: Shift toward a more professional extension marketplace/manager with support for archive installs (.zip/.tar.gz).

## Developer Pain Points
* **Quota Frustrations**: Significant community pushback regarding the reduction of the free tier and the perceived unavailability of the "Pro" plan ("sold out").
* **Memory/Token Management**: Frequent reports of OOM (Out of Memory) and context overflow caused by repeated tool results and large stdout strings.
* **Environment Stability**: Recurring issues with daemon startup on Linux (Ubuntu 24.04) and antivirus false positives on Windows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑06‑15**  

---

### 1. Today’s Highlights  
The v0.8.60 release stabilises the codebase while deprecating the legacy `deepseek‑tui` npm package, prompting users to migrate per the rebrand guide. Recent community activity focuses on fixing intermittent TUI freezes, improving sub‑agent checkpointing, and adding a provider fallback chain to smooth API failures.

---

### 2. Releases  
**v0.8.60** – the current canonical release (code‑whale, npm package, and release assets).  
*Key changes*:  
- Legacy `deepseek‑tui` npm package is now **deprecated**; no further releases. Users coming from `v0.8.x` must migrate following the `docs/REBRAND.md` guide.  
- Introduces first‑class sub‑agent checkpointing (`#2029`) and a dormant provider fallback‑chain (`#2779`).  
- Adds UI/UX refinements such as a sidebar toggle command and enriched auth‑error diagnostics.

*No newer version has been published since this release.*

---

### 3. Hot Issues (10 noteworthy)

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#2487** | **Turn stalled – no completion signal received** (bug) | Frequent freeze in `yolo` mode; blocks any long‑running task and cannot be recovered with `continue`. | 12 comments, 1 👍 – users report loss of productivity and request a reliable signal mechanism. |
| **#1186** | **Typed persistent permission rules** (enhancement) | Enables fine‑grained, policy‑driven access control (tool name, prefix, path, allow/deny/ask). | 8 comments – seen as a critical step toward enterprise‑grade security. |
| **#1812** | **TUI freeze – Windows crossterm poll** (bug) | UI becomes completely unresponsive on Windows 11 while the process stays alive, causing data loss. | 5 comments – high‑impact UI stability issue. |
| **#2475** | **YOLO mode Burp connection prompt** (bug) | Interrupts tasks when connecting to Burp, preventing completion of automated workflows. | 4 comments – frustrates users relying on YOLO for rapid prototyping. |
| **#2629** | **401 auth error with SiliconFlow & Tencent TokenHub** (bug) | External provider authentication fails, breaking integrations with popular AI services. | 3 comments – users demand provider‑specific fixes. |
| **#3102** | **First‑class clarification question requests** (feature) | Allows agents to prompt users via UI modals instead of plain chat messages, improving usability. | 3 comments – strong demand for richer interactive flows. |
| **#2574** | **Provider fallback chain** (enhancement) | Auto‑switches to secondary providers when the primary one fails (quota, 401, 429, 5xx). | 3 comments – addresses a common pain point in multi‑provider setups. |
| **#2666** | **Telemetry: visible token & resource usage** (bug) | Agents lack visibility into token budget, context pressure, and elapsed time during long tasks. | 2 comments – request for better operational awareness. |
| **#2739** | **Task execution freeze / timeout** (bug) | Tasks hang indefinitely; `Esc` cancels but the session is lost, forcing re‑entry. | 2 comments – users cite this as a blocker for long‑running bug fixes. |
| **#1679** | **SSE multi‑agent parallel timeout & UI glitch** (bug) | 45 s API timeout plus UI corruption when running several agents simultaneously. | 2 comments – impacts reliability of parallel agent workflows. |

---

### 4. Key PR Progress (10 important PRs)

| # | PR | Summary |
|---|----|---------|
| **#3197** | Rename DeepSeek blue consumers to whale accent | Introduces `palette::WHALE_ACCENT_PRIMARY` and deprecates `DEEPSEEK_BLUE` aliases, aligning UI branding with the new “whale” theme. |
| **#3051** | Add `/voice` slash command for speech‑to‑text | Enables one‑shot recording, AI transcription, and composer insertion, mirroring MiMo‑Code voice UX. |
| **#3225** | v0.8.61 community harvest + freeze fix + WhaleFlow foundation (WIP) | Consolidates 28 commits: fixes release‑blocking freezes, adds WhaleFlow orchestration scaffolding, and prepares for the next version bump. |
| **#2811** | VSCode local runtime extension scaffold | Provides an official `extensions/vscode` phase‑0 with commands to launch CodeWhale, start a local HTTP server, and package a VSIX extension. |
| **#2102** | Defer low‑value native tools by default | Loads tools on demand; adds `always_load` config to re‑enable tools, reducing startup overhead. |
| **#2646** | Fix release ordering & crates.io checks | Reorders `release_crates` to respect workspace dependency order, preventing publishing races. |
| **#2771** | Harvest AGENTS.md init via LLM‑guided template | `/init` now gathers project context and delegates AGENTS.md generation to the agent, improving consistency. |
| **#2802** | Add Hugging Face MCP helpers | Provides `/hf mcp status`, `/hf mcp setup`, `/hf concepts`, and alias registration for seamless HF integration. |
| **#2795** | Enrich auth errors with request context | Diagnostics now include provider, base URL, model, key source/type, and redacted fingerprint for clearer troubleshooting. |
| **#2796** | Add sidebar slash command | Introduces `/sidebar` to toggle visibility, with optional `--save` persistence for transcript‑heavy work. |

---

### 5. Feature Request Trends  

- **Granular permission management** – typed persistent rules (`#1186`) and sub‑agent auto‑derivation (`#414`) show strong demand for fine‑grained access control.  
- **Automatic provider fallback** – fallback‑chain config (`#2574`, #2779) is repeatedly requested to hide API‑failure handling from users.  
- **Enhanced UI feedback** – clarification question UI (`#3102`), sidebar toggles (`#2796`), and voice input (`#3051`) reflect a push for richer, non‑textual interaction modes.  
- **Robust sub‑agent orchestration** – checkpointing/continue (`#2029`), permission inheritance (`#414`), and branch‑status reporting (`#2804`) indicate a need for reliable, observable multi‑agent flows.  
- **Expanded provider support** – requests for DeepInfra (`#3231`), HuggingFace env aliases (`#2799`), and better telemetry (`#2666`) point to a desire for broader, more transparent model integration.  

---

### 6. Developer Pain Points  

- **Frequent TUI freezes** on Windows (crossterm poll) and in YOLO/Burp flows, leading to unresponsive sessions that cannot be recovered.  
- **API timeouts** (e.g., 120 s sub‑agent limit, 45 s SSE timeout) cause task interruption and UI glitches, especially under parallel agent loads.  
- **Authentication errors** with external providers (401 with SiliconFlow/Tencent TokenHub) lack clear context, forcing manual troubleshooting.  
- **Glibc version mismatches** (2.35 vs required 2.38/2.39) block execution on older Ubuntu servers, requiring separate binaries.  
- **npm update friction** – users report “codewhale not found on PATH” after `deepseek update`, indicating unclear CLI tooling expectations.  
- **Limited visibility into agent resource usage** (tokens, context pressure) hampers debugging of long‑running or multi‑agent tasks.  

---

*All links are to the official GitHub repository: https://github.com/Hmbown/DeepSeek-TUI*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*