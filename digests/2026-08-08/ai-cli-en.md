# AI CLI Tools Community Digest 2026-08-08

> Generated: 2026-08-08 00:55 UTC | Tools covered: 9

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

**1. Ecosystem Overview**  
The AI‑CLI landscape in 2026 is increasingly centered on portable, cross‑model agent runtimes that combine local execution, fine‑grained tooling, and robust session management.  Tools are converging on features such as self‑hosted runners, plugin ecosystems, and persistent memory to support long‑running, multi‑session workflows.  Security and sandboxing are also rising priorities as agents gain greater system access.  The community is split between heavyweight enterprise‑grade platforms (e.g., Claude Code, OpenAI Codex) and lighter, developer‑focused runtimes (e.g., Pi, Kimi, Gemini CLI).

**2. Activity Comparison**

| Tool                     | Issues (count) | PRs (count) | Release Status (24 h) |
|--------------------------|----------------|-------------|------------------------|
| Claude Code              | 10             | 3           | New release (v2.1.224) |
| OpenAI Codex             | 9              | 3           | No public release (pre‑release tags only) |
| Gemini CLI               | 10             | 9           | No public release (nightly/preview) |
| Kimi Code CLI            | 2              | 2           | No new release |
| Pi (badlogic/pi‑mono)    | 10             | 10          | New release (v0.84.1) |
| Qwen Code                | 10             | 10          | New nightly release (v0.21.7‑nightly) |
| DeepSeek TUI             | 10             | 10          | No new release (stable v0.9.4) |
| OpenCode (failed)        | –              | –           | –                      |

**3. Shared Feature Directions**  

- **Session persistence & auto‑resume** – requested by Kimi (#1283), DeepSeek (#4416, #2492), Claude (self‑hosted runner), Gemini (auto‑memory).  
- **Fine‑grained plugin/skill control** – seen in Claude (disable individual plugin skills), OpenAI (MCP namespace flattening), Gemini (sub‑agent visibility), DeepSeek (agent spawn knobs), Qwen (WebBridge).  
- **Robust agent lifecycle & dead‑lock handling** – highlighted by Claude (background‑agent permission stall), Gemini (generalist agent hangs), DeepSeek (stale failed‑agent state), Kimi (destructive `rm -rf`).  
- **Cross‑provider model & tool interoperability** – evident in Pi (Qwen token plan, LM‑Studio provider), Qwen (WebBridge), DeepSeek (model‑callable send‑later), OpenAI (MCP across providers).  
- **UI/UX improvements for multi‑session workflows** – DeepSeek sidebar, Gemini browser resilience, Claude self‑hosted UI, Kimi memory UI.

**4. Differentiation Analysis**  

- **Feature focus** – Claude Code emphasizes enterprise‑grade self‑hosting and security hardening; OpenAI Codex concentrates on portable Rust SDKs and MCP integration; Gemini CLI leans toward sub‑agent orchestration and native model affinity (e.g., bash); Pi and Qwen prioritize lightweight TUI experiences and multi‑model provider flexibility; DeepSeek TUI is UI‑centric with strong session‑state management; Kimi Code CLI is safety‑focused with limited feature scope.  
- **Target users** – Enterprise/team developers (Claude, OpenAI) vs. individual developers and hobbyists (Pi, Kimi, Gemini) vs. model‑specific communities (Qwen, DeepSeek).  
- **Technical approach** – Claude and OpenAI invest heavily in backend services (self‑hosted runners, Rust‑based SDKs); Gemini and Pi rely on model‑level prompting and lightweight CLI wrappers; DeepSeek and Kimi focus on TUI polish and incremental bug‑fix releases; Qwen balances web‑terminal UX with telemetry.

**5. Community Momentum & Maturity**  

- **Highly active** – Pi, Qwen Code, and DeepSeek TUI each maintain ~10 issues and ~10 PRs with recent releases, indicating rapid iteration and strong community engagement.  
- **Moderately active** – Claude Code shows steady issue traffic and a recent stable release, but PR activity is limited (3 in 24 h).  
- **Less active** – OpenAI Codex and Gemini CLI have fewer PRs despite a comparable issue count, reflecting slower release cadence.  
- **Kimi Code CLI** has the smallest footprint (2 issues, 2 PRs) and no recent releases, suggesting a niche or early‑stage community.

**6. Trend Signals**  

- **Cross‑model, cross‑platform extensibility** – demand for plug‑in ecosystems, MCP‑style tool discovery, and provider‑agnostic model configuration (Pi, Qwen, DeepSeek).  
- **Persistent, shareable context** – memory systems, session history, and auto‑resume features are top requests across Claude, Gemini, Kimi, and DeepSeek.  
- **Security & sandbox refinement** – tighter sandboxing, fine‑grained permission controls, and protection against destructive commands are recurring concerns.  
- **Large‑context handling** – tools are evolving to manage multi‑megabyte inputs (Pi CPU spikes, Gemini large‑file processing) through incremental processing and better tool‑scope limiting.  
- **UI/UX modernization** – persistent sidebars, auto‑resume, and richer visual feedback (DeepSeek, Gemini, Claude) are becoming baseline expectations for productive agent interaction.  

*These signals suggest that the next wave of AI‑CLI tools will be judged on their ability to provide stable, secure, and extensible multi‑session experiences while supporting a heterogeneous model landscape.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-08*

---

## 1. Top Skills Ranking  

Based on comment count and engagement across active PRs, the following Skills represent the most-discussed contributions in the repository:

1. **[#1298 — Fix skill-creator: run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)**  
   *Status: OPEN*  
   **Function**: Critical bug fix in the `skill-creator` toolchain where recall evaluations fail to accurately trigger, undermining automated skill optimization loops. Includes fixes for Windows stream reading and parallel worker compatibility.  
   **Discussion**: Directly ties to broader infrastructure issues (see #556, #1099), with multiple contributors reporting identical symptoms. High priority for maintainers due to cascading impact.

2. **[#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514)**  
   *Status: OPEN*  
   **Function**: Enforces typographic standards in generated documents—prevents orphans, widows, and numbering misalignment—by detecting and correcting AI-generated formatting noise.  
   **Discussion**: Minimal discussion but aligns with growing interest in polished output quality. Seen as foundational for any content-generating agent workflow.

3. **[#538 — Fix pdf: case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538)**  
   *Status: OPEN*  
   **Function**: Resolves broken links within the `pdf` skill documentation caused by incorrect casing of referenced files.  
   **Discussion**: Technical cleanup effort highlighting inconsistent practices around naming conventions in bundled skills.

4. **[#486 — Add ODT skill](https://github.com/anthropics/skills/pull/486)**  
   *Status: OPEN*  
   **Function**: Enables reading, creating, and converting OpenDocument Format (.odt/.ods) files using LibreOffice-compatible formats.  
   **Discussion**: Long-awaited support for open-standard office document types; seen as complementary to existing DOCX/PDF capabilities.

5. **[#83 — Add skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**  
   *Status: OPEN*  
   **Function**: Meta-skills that audit other skills for structural completeness, maintainability, and security hygiene. Evaluates against five key dimensions including structure, performance, and dependency exposure.  
   **Discussion**: Addresses systemic concerns about skill quality control and trust boundaries (ties into #492). Gaining traction among advanced users seeking governance frameworks.

6. **[#210 — Improve frontend-design skill clarity](https://github.com/anthropics/skills/pull/210)**  
   *Status: OPEN*  
   **Function**: Refines the frontend-design skill to produce clearer, more actionable guidance aligned with modern dev workflows.  
   **Discussion**: Focus on reducing ambiguity in design instruction sets—an evolving pain point for UI/UX-focused developers integrating with Claude Code.

7. **[#1367 — Add self-audit skill](https://github.com/anthropics/skills/pull/1367)**  
   *Status: OPEN*  
   **Function**: Offers pre-delivery verification through mechanical checks and four-dimensional reasoning quality gates prioritized by severity.  
   **Discussion**: Aligns closely with emerging trends in AI safety auditing and automated delivery pipelines (#1385).

8. **[#1050 — Fix skill-creator: Windows subprocess + encoding bugs](https://github.com/anthropics/skills/pull/1050)**  
   *Status: OPEN*  
   **Function**: Addresses path resolution failures (`WinError 2`) and character encoding mishandling when invoking `claude` from Python subprocesses under Windows environments.  
   **Discussion**: Reflects ongoing friction between cross-platform scripting and native execution layers—particularly relevant as enterprise adoption grows on non-Linux platforms.

---

## 2. Community Demand Trends  

From open issues, several themes emerge regarding what new Skills users are actively requesting:

- **Workflow Automation & Governance Tools**  
  Users seek Skills that enforce organizational policies, manage state transitions, and automate repetitive tasks ([#1479], [#1385]).

- **Quality Assurance / Audit Layers**  
  There is strong demand for built-in mechanisms to verify output integrity before final delivery, especially in production-grade agents ([#1367], [#1487]).

- **Document Processing & Typography Controls**  
  Growing need for better handling of rich-text documents, layout consistency, and typographic fidelity ([#514], [#538], [#12]).

- **Security & Trust Boundary Management**  
  Concerns over namespace pollution, permission escalation risks, and lack of isolation during eval/test phases are driving calls for secure defaults ([#492], [#83]).

- **Platform Compatibility Fixes**  
  Cross-system usability remains a challenge, particularly around OS-specific behaviors like file paths, shell invocations, and encoding ([#1050], [#1099]).

- **Cross-Org Collaboration Features**  
  Desire for shared skill libraries and easier internal distribution mirrors needs seen in broader DevOps tooling ecosystems ([#228]).

---

## 3. High-Potential Pending Skills  

These actively discussed PRs have garnered significant attention but remain unmerged, suggesting potential near-term inclusion:

| PR | Title | Status | Key Discussion Points |
|----|-------|--------|------------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | Run Eval Recall Fix | OPEN | Fixes critical recall=0% bug; blocks further optimization tooling improvements |
| [#514](https://github.com/anthropics/skills/pull/514) | Document Typography Skill | OPEN | Broad applicability for polished doc generation |
| [#538](https://github.com/anthropics/skills/pull/538) | PDF Case Sensitivity Fix | OPEN | Simple yet impactful documentation correctness issue |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT Support Skill | OPEN | Fills major open-format document gap |
| [#83](https://github.com/anthropics/skills/pull/83) | Quality & Security Analyzers | OPEN | Addresses meta-level skill health and risk management |
| [#1367](https://github.com/anthropics/skills/pull/1367) | Self-Audit Skill | OPEN | Aligns with QA pipeline aspirations |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows Subprocess Fixes | OPEN | Required for reliable use on enterprise desktops |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Windows Pipe Reader Crash Fix | OPEN | Blocks full Windows parity in skill evaluation harness |

---

## 4. Skills Ecosystem Insight  

The community’s most concentrated demand centers on **trustworthy, auditable AI workflows**, reflected in urgent requests for robust skill validation, governance layers, and cross-platform reliability—all aimed at enabling safer, scalable automation.

---

**Claude Code Community Digest – 2026‑08‑08**

---

### 1. Today’s Highlights  
- **v2.1.224** drops a new *self‑hosted runner* feature, letting teams spin up private execution nodes for web, mobile, and desktop sessions.  
- The release also adds an `archive` plugin source, enabling zip‑based plugin installs over HTTPS without a Git clone.  
- The community is buzzing around a handful of high‑impact bugs—especially the Fable 5 text‑rendering issue and the background‑agent permission stall.

---

### 2. Releases  
**v2.1.224** (2026‑08‑08)  
- **Self‑hosted environments** – `claude self-hosted-runner` turns any machine or container into a Claude Code execution host (Team & Enterprise only).  
- **Archive plugin source** – install plugins from a zip file over HTTPS (`archive://…`) without needing a Git repo.  
- Minor bug fixes and performance tweaks (see changelog).

---

### 3. Hot Issues  
| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **6235** | Feature Request: Support AGENTS.md | AGENTS.md is becoming the industry‑wide standard for agent‑aware codebases. Switching from CLAUDE.md would improve interoperability. | 347 comments, 4 526 👍 |
| **13354** | Continue when the session limit is reached | Users hit the 30‑session cap on the free tier and lose work. A “continue” button would reduce churn. | 73 comments, 191 👍 |
| **14920** | Disable individual Claude plugin skills | Fine‑grained control over plugin toolsets is essential for security‑aware teams. | 14 comments, 83 👍 |
| **50884** | Remove stale Remote Control environments | Stale environments clutter the UI and can cause 404 errors. | 7 comments, 26 👍 |
| **81853** | Fable 5: text + tool calls not displayed | Users lose context when a response mixes text and a tool call. Affects debugging and documentation. | 5 comments, 3 👍 |
| **72495** | Prompt suggestions suppressed by rate‑limit status | Developers lose quick‑access suggestions, slowing iteration. | 4 comments, 0 👍 |
| **84689** | CVP approved org still blocked by cyber safeguards | Affects enterprise onboarding; the org ID is correct but the UI blocks access. | 4 comments, 0 👍 |
| **84945** | Peer‑messaging socket bind failure | Cross‑session messaging is broken on macOS, preventing real‑time collaboration. | 3 comments, 0 👍 |
| **84072** | ECONNRESET on Windows during API stream | Streaming responses crash on Windows, breaking the VS Code extension and CLI. | 3 comments, 0 👍 |
| **77372** | Stale Remote Control environments cause 404 errors | Ghost sessions persist and block new ones, leading to a broken user experience. | 3 comments, 1 👍 |

---

### 4. Key PR Progress  
| # | Title | What it fixes / adds |
|---|-------|----------------------|
| **84854** | docs: fix stale hooks documentation link | Corrects a broken URL in `bash_command_validator_example.py`. |
| **84747** | fix(hookify): enforce proper rule evaluation scope | Prevents accidental rule execution for non‑event tools; hardens security. |
| **84711** | fix(security): address yaml injection and symlink credential overwrites | Adds defensive checks against YAML injection and symlink attacks in plugin scripts. |

*Only three PRs were opened in the last 24 h; the community is focusing on documentation hygiene and security hardening.*

---

### 5. Feature Request Trends  
1. **Standardized agent metadata** – AGENTS.md support is the most‑upvoted request, indicating a shift toward cross‑tool agent interoperability.  
2. **Self‑hosted execution** – The new runner feature is already in demand; teams want private, on‑prem or cloud‑native runtimes.  
3. **Fine‑grained plugin control** – Disabling individual plugin skills (#14920) and selective tool activation are recurring themes.  
4. **Remote Control hygiene** – Removing stale environments (#50884, #77372) and better lifecycle management are top concerns.  
5. **Background agent reliability** – Permission prompt stalls (#78487) and background task kills (#84625) highlight the need for robust agent lifecycle handling.  
6. **Goal/condition limits** – The 4 000‑char limit on `/goal` (#84953) is a blocker for complex workflows.

---

### 6. Developer Pain Points  
- **Tool‑call rendering bugs** (Fable 5 text loss, ECONNRESET on Windows).  
- **Session limits & stale environments** causing abrupt disconnections or 404 errors.  
- **Background task reliability** – silent kills of `run_in_background` jobs.  
- **Permission prompt stalls** – background agents hang indefinitely waiting for user input.  
- **Cross‑session messaging failures** on macOS.  
- **Unclear or missing documentation** (e.g., stale hook links, undocumented auto‑install behavior).  

These issues collectively point to a need for stronger stability, clearer documentation, and more granular control over agent and plugin behavior.  

---

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-08

---

## 1. Today's Highlights

The Rust Codex SDK reached v0.148.0-alpha.4 with notable improvements to portable Agent Plugin installation and cross-catalog search. The community also saw sharp focus on Windows-specific sandbox and compute-helper regressions that have been recurring across multiple sessions this month, alongside several core infrastructure PRs aimed at improving session lifecycle handling and diagnostic reporting.

---

## 2. Releases

| Version | Changes |
|---|---|
| `rust-v0.147.0` | ✅ **New:** Install portable Agent Plugins and search across local, personal, workspace, and remote plugin catalogs (#36544, #36409, #36919, #36796) |
| `rust-v0.148.0-alpha.4` | Pre-release tag; code base changes tied to release #36544 |
| `rust-v0.148.0-alpha.2` | Pre-release |
| `rust-v0.148.0-alpha.1` | Pre-release |

No new public-facing application versions were published in the last 24h; the Rust SDK is the primary delivery mechanism.

---

## 3. Hot Issues

### #8648 — Codex replies to earlier messages instead of latest one in conversations
**Author:** BobbyWang0120 | **Status:** Open | **Comments:** 82 | **👍:** 58
**Fix:** Closed

In multi-message conversations, the assistant sometimes responds to an earlier message rather than the latest one. This is a direct user-expected behavior regression that breaks conversational continuity. Closed — currently tracked as a known fix in progress.

### #12491 — MCP child processes not reaped after task completion — 1300+ zombies, 37GB memory leak
**Author:** rolldav | **Status:** Closed | **Comments:** 38
**Fix:** Closed

Codex.app GUI uses MCP child processes that are not properly reaped after task completion, causing a steady memory leak of 37GB and 1,300+ zombie processes. The wrapper (`codex-cli 0.98.0`) is the primary symptom. Closed — resolved.

### #26234 — Flatten MCP namespace tools for non-OpenAI Responses API providers
**Author:** LucaCappelletti94 | **Status:** Open | **Comments:** 32 | **👍:** 41
**Fix:** Closed

Tools provided by MCP servers are never callable on non-OpenAI endpoints (Ollama, LM Studio, OpenRouter, AWS Bedrock Mantle) because tools are serialized inside a proprietary `{"type": "namespace", "..."}` wrapper. The issue has been closed (resolved).

### #10090 — `elevated_windows_sandbox` causing all agent commands to fail with `(no output)`
**Author:** i4TsU | **Status:** Open | **Comments:** 24 | **👍:** 7
**Fix:** Closed

On Windows, the `elevated_windows_sandbox` helper causes `CreateProcessAsUserW` to fail with error 5, which silently kills every agent command. The bug survives a full Windows restart and a Codex restart. Closed — resolved.

### #37043 — Windows Computer Use fails at `EnumWindows` with 0x80070003
**Author:** Moonst | **Status:** Open | **Comments:** 17
**Fix:** Closed

Both `sky.list_apps()` and `sky.list_windows()` fail immediately on Windows, preventing any window enumeration. The error persists after a full restart. Closed — resolved.

### #14599 — Allow `trust_level = "trusted"` for any projects
**Author:** milanglacier | **Status:** Open | **Comments:** 16 | **👍:** 57
**Fix:** Closed

Codex requires manual approval every time a project is opened, which is highly inconvenient for users who run trust-level projects regularly. Open — requested feature pending implementation.

### #25990 — Older resumed Codex Desktop threads can miss newly available tools
**Author:** Allmight97 | **Status:** Open | **Comments:** 6
**Fix:** Closed

Threads resumed from a prior session may miss tools that were added to a subagent after the resume. The issue also manifests in the legacy subagent runtime. Open — no immediate fix committed.

### #37415 — Windows Computer Use fails with `spawn EPERM`; elevated sandbox setup fails on WindowsApps ACL
**Author:** Tuguldur0130 | **Status:** Open | **Comments:** 4
**Fix:** Closed

On Windows 11, Computer Use cannot attach to any window after the elevated sandbox setup fails due to ACL misconfiguration on `WindowsApps`. Closed — resolved.

### #36523 — macOS app OOM-crashes at startup: `external-agent-import` parses 1.73 GB from Claude Desktop's app-support directory
**Author:** navneet-livio | **Status:** Open | **Comments:** 3
**Fix:** Closed

The Codex/ChatGPT macOS app OOM-crashes on startup due to `external-agent-import` loading 1.73 GB from Claude Desktop's app-support directory on every launch. Closed — resolved.

### #37425 — Regression in v0.147.0 with LiteLLM provider — streaming requests consistently fail
**Author:** CallisteH | **Status:** Open | **Comments:** 4
**Fix:** Closed

After upgrading from v0.146.0 to v0.147.0, streaming requests over a custom LiteLLM provider consistently fail. Closed — resolved.

### #37484 — Windows Computer Use cannot attach to any window; reports identical process as wrong owner
**Author:** wreynolds79 | **Status:** Open | **Comments:** 2
**Fix:** Closed

On Windows 11, Computer Use reports the same process ID as "wrong owner" for every window, preventing attachment.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-08

---

## 1. Today's Highlights

The Gemini CLI team shipped the v0.56.0 nightly build (based on `0.55.0-preview.1` changes) and a new preview release of `v0.55.0-preview.2`, along with a significant set of internal tooling improvements across the Caretaker Agent, evaluation framework, and security modules. A notable addition is the Gemini 3.6 Flash and 3.5 Flash-Lite model configuration support, and the security patch stack has been hardened by upgrading the sandbox Dockerfile and fixing a critical SSRF vulnerability in `web-fetch`. The community continues to focus on improving subagent resilience, reducing tool-scope explosion errors, and clarifying auto-memory behavior.

---

## 2. Releases

- **v0.56.0-nightly.20260807.gd5c9a97dc** — Changelog for `v0.55.0-preview.1`; version bumped to `0.56.0-nightly.20260806.g761f604c1`.
- **v0.55.0-preview.2** — Cherry-pick of `2139b12` applied to patch `v0.55.0-preview.1`.

---

## 3. Hot Issues (Top 10 by Comment Count)

### #22323 — Subagent Recovery After MAX_TURNS Hides Interruptions
**Reported by:** matei-anghel | **Status:** Open | **Comments:** 12
The `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` even though it hit the `MAX_TURNS` limit before completing analysis. This can cause the system to overlook that the task was interrupted rather than completed.

### #21409 — Generalist Agent Hangs Indefinitely
**Reported by:** turmanticant | **Status:** Open | **Comments:** 8
The generalist agent hangs when deferred (e.g., on folder creation), with the model explicitly instructed to not use sub-agents. The issue persists for up to an hour, suggesting a deadlock in the agent routing loop.

### #19873 — Leverage Model's Bash Affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing
**Reported by:** abhipatel12 | **Status:** Open | **Comments:** 8
Gemini 3 models are trained to operate as native bash users, chaining POSIX tools. This issue proposes dedicating model routing to expose native bash capabilities while maintaining sandbox security and UX.

### #24353 — Robust Component Level Evaluations
**Reported by:** gundermanc | **Status:** Open | **Comments:** 7
Follow-up to #15300 introducing behavioral evals. With 76 eval tests across 6 Gemini models, the goal is to make component-level evaluation a standard part of the testing pipeline.

### #22745 — Assess the Impact of AST-Aware File Reads, Search, and Mapping
**Reported by:** gundermanc | **Status:** Open | **Comments:** 7
AST-aware tools can reduce turn counts from misaligned reads and improve codebase navigation precision. A series of follow-up investigations into tilth and glyph as starting points.

### #21968 — Gemini Does Not Use Skills and Sub-Agents Enough
**Reported by:** rnett | **Status:** Open | **Comments:** 6
Gemini CLI fails to automatically invoke custom skills or sub-agents on related tasks. Users must explicitly instruct the model to use them; this requires better implicit detection logic.

### #26522 — Stop Auto Memory from Retrying Low-Signal Sessions Indefinitely
**Reported by:** SandyTao520 | **Status:** Open | **Comments:** 5
Auto Memory marks a session as processed as soon as the extraction agent reads the transcript with `read_file`. Low-signal sessions that are skipped remain unprocessed, causing repeated retry loops.

### #26525 — Add Deterministic Redaction and Reduce Auto Memory Logging
**Reported by:** SandyTao520 | **Status:** Open | **Comments:** 4
The extraction prompt instructs the model to redact secrets, but this happens after content is already in model context. Additionally, the background extractor logs too much detail.

### #25166 — Shell Command Execution Gets Stuck with "Waiting Input" After Command Completes
**Reported by:** rnett | **Status:** Open | **Comments:** 4
Simple shell commands (e.g., `git log`) exit successfully but then Gemini's output hook waits for input that never comes, causing the shell to appear stuck indefinitely.

### #22232 — Enhance Browser Agent Resilience: Automatic Session Takeover and Lock Recovery
**Reported by:** hsm207 | **Status:** Open | **Comments:** 4
The `BrowserManager.ts` uses a restrictive "fail-fast" strategy when encountering a locked browser profile, which causes the entire session to fail in certain edge cases.

---

## 4. Key PR Progress (Top 10 by Comment Count)

### #28673 — Gemini 3.6 Flash and 3.5 Flash-Lite Model Configurations
**Author:** Blackmanx | **Status:** Open | **Comments:** N/A
Adds model resolution configuration for Gemini 3.6 Flash and 3.5 Flash-Lite in `packages/core`, including base model definitions, `thinking`/`multimodalToolUse` capabilities, and code-specific aliases.

### #28730 — Resolve False Model Capacity Exhaustion & Core Quota Lookup Mapping
**Author:** DavidAPierce | **Status:** Open | **Comments:** N/A
Fixes a false "model capacity exhaustion" error message, corrects client-side model quota lookup mapping, and preserves the "Keep trying" option during transient capacity surges.

### #28597 — Load Environment Variables Before Resolving Settings Placeholders
**Author:** WolfGreyDev | **Status:** Open | **Comments:** N/A
Fixes a load-order race condition: settings files (system, user, workspace) are now parsed and expanded against `process.env` *before* validation, preventing resolution failures.

### #28690 — Issue Comment Handling and Re-Triage Workflow
**Author:** chadd28 | **Status:** Closed | **Comments:** N/A
Adds support for `issue_comment.created` webhooks in the Caretaker Agent, enabling maintainers and reporters to trigger re-triage via `@caretaker-agent` mentions or `/caretaker triage` commands.

### #28601 — Clear Lock on `NEEDS_HUMAN` Transition
**Author:** chadd28 | **Status:** Closed | **Comments:** N/A
When `_acquire_lock_tx` reaches `attempts >= 2`, the issue transitions to `NEEDS_HUMAN` — now both `lock.holder` and `lock.expires_at` are properly cleared.

### #28529 — GCP Deployment Script for Caretaker Agent Services
**Author:** chadd28 | **Status:** Closed | **Comments:** N/A
Deploys Caretaker Agent Cloud Run services (Ingestion Service, Triage Worker Job, Egress Service) to GCP via `deploy.sh`.

### #28588 — Publish Workable Spec Event to Ready-for-Code Pub/Sub
**Author:** chadd28 | **Status:** Closed | **Comments:** N/A
Publishes `github_metadata` and `workable_spec` events to Pub/Sub upon triage, enabling downstream automated workflows to detect when an issue is ready for implementation.

### #28532 — Local Golden Issue Collection and Firestore Sync Tools
**Author:** chadd28 | **Status:** Closed | **Comments:** N/A
Adds `tools/caretaker-agent/evals/triage/tools/` and `helpers/` for assembling golden issue test cases and syncing them with Cloud Firestore (depends on PR #28530).

### #28727 — Cloud Run Job Entrypoint for Eval Runner
**Author:** chadd28 | **Status:** Closed | **Comments:** N/A
Adds `cloud_runner.py`, `helpers/sync_to_gcs.py`, and `Dockerfile.evals` to execute the Caretaker Triage Evaluation Suite on Google Cloud Run.

---

## 5. Feature Request Trends (Most-Requested Directions)

| Trend | Source Issues | Description |
|---|---|---|
| **Subagent Visibility & Sharing** | #22598, #20195, #21968 | Subagent trajectories should be viewable via `/chat share`; more granular agent-level inspection. |
| **Browser Agent Resilience** | #22232, #22267 | Better handling of locked browser profiles, Wayland session failures, and settings.json overrides (e.g., `maxTurns`). |
| **AST-Aware Codebase Mapping** | #22745, #22746, #20195 | AST-aware file read/search to reduce token noise and improve code navigation precision. |
| **Auto-Memory Reliability** | #26522, #26525, #26516 | Better session scoring, deterministic redaction, and reduced logging to prevent infinite retry loops. |
| **Model Capability Exposure** | #19873, #21968 | Leveraging the model's native bash affinity, custom skills, and sub-agent usage. |
| **Shell & File Tooling** | #25166, #23571 | Native file tools for task tracking, avoiding unnecessary temp scripts in the workspace. |

---

## 6. Developer Pain Points

- **Agent hangs / deadlocks:** The generalist agent hangs on simple actions; shell command execution gets stuck with "Waiting input" after completion.
- **Auto Memory retries:** Low-signal sessions are retried indefinitely, causing the agent to wait for timeouts.
- **Symlink & file resolution issues:** `.md` files that are symlinks in `~/.gemini/agents/` are not recognized as subagents; path mismatch errors in IDE connections.
- **Tool-scope explosion:** > 128 tools can cause 400 errors; the model generates excessive temp scripts in random directories.
- **Settings.json ignores:** The browser agent completely ignores configuration overrides like

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



**Today's Highlights**  
The Copilot CLI v1.0.79 series introduced enterprise-friendly sandbox policies, enhanced agent plugin support, and improved user prompts. Key updates include smoother sandbox configuration, better handling of model reasoning efforts, and fixes for Windows clipboard and session management.  

**Releases**  
No full public release (v1.0.80) yet. Current activity focuses on incremental v1.0.79-7, v1.0.79-8, and v1.0.79-9 patches, addressing enterprise use cases, model compatibility (e.g., Claude-K3), and terminal rendering issues.  

**Hot Issues**  
1. #2494 (Auth): Login auto-enters 'y/N' in Keychain (11⬆️) – critical auth regression.  
   [Issue Link](github.com/github/copilot-cli/issues/2494)  
2. #1632 (Plugins): Subfolder support for skills (23⬆️) – user-requested organization.  
   [Issue Link](github.com/github/copilot-cli/issues/1632)  
3. #3622 (Windows): Clipboard copy fails silently (4⬆️) – major Windows UX regression.  
   [Issue Link](github.com/github/copilot-cli/issues/3622)  
4. #4311 (Terminal): Blank transcript rendering (3⬆️) – affects history visibility.  
   [Issue Link](github.com/github/copilot-cli/issues/4311)  
5. #1409 (Permissions): `add-dir` path mismatch (4⬆️) – breaks OneDrive workflows.  
   [Issue Link](github.com/github/copilot-cli/issues/1409)  
6. #4345 (Claude): 'medium' reasoning not supported (4⬆️) – limits Anthropic model use.  
   [Issue Link](github.com/github/copilot-cli/issues/4345)  
7. #4219 (Windows): Crashes with notifications (1⬆️) – native overlay instability.  
   [Issue Link](github.com/github/copilot-cli/issues/4219)  
8. #4209 (Skills): No custom tool alias support (1⬆️) – limits workflow flexibility.  
   [Issue Link](github.com/github/copilot-cli/issues/4209)  
9. #4185 (Claude): `--add-dir` causes 400 errors (1⬆️) – blocks directory-based agents.  
   [Issue Link](github.com/github/copilot-cli/issues/4185)  
10. #4129 (Banner): `once` ≠ `always` behavior (1⬆️) – inconsistent UI state.  
    [Issue Link](github.com/github/copilot-cli/issues/4129)  

**Key PR Progress**  
No PRs updated in the last 24h.  

**Feature Request Trends**  
- **Session Management**: Users demand resume restores without model switching (#4397).  
- **Keyboard Shortcuts**: Fixes for `Ctrl+C` reliability (#4394) and avoiding workflow interruptions.  
- **Token Tracking**: Transparency into session costs (#2947).  
- **Desktop Alerts**: Notifications for user input needs (#2941).  
- **Workspace Flexibility**: Default workspace type settings (#4396).  

**Developer Pain Points**  
- **Platform-Specific Bugs**: Windows clipboard (`#3622`) and terminal rendering (#4311, #4403) issues.  
- **Authentication Flakiness**: Keychain regression (`#2494`) and MCP server startup problems (`#4392`).  
- **UI/UX Confusion**: Banner behavior (`#4129`) and obscured input prompts (`#4043`).  
- **Skill/Plugin Limitations**: No subfolder support (`#1632`) and missing tool aliases (`#4209`).


</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑08‑08**  

---

### 1. Today's Highlights  
No new releases were published in the past 24 h, but the project saw activity on two safety‑related pull requests that address file‑encoding corruption and a high‑impact issue where the agent unintentionally deleted user data outside the workspace. The long‑standing feature request for a persistent memory system continues to gather discussion (21 comments) as users seek cross‑session context retention.

---

### 2. Releases  
*None* – No version tags were created or updated in the last 24 hours.

---

### 3. Hot Issues  

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Feature Request: Memory System – Persistent context across sessions** | Proposes a built‑in memory layer (auto‑generated notes + user‑defined instructions) that would let Kimi Code CLI retain project patterns and preferences between invocations, reducing repetitive prompting. | 21 comments, 0 👍 so far; discussion focuses on design trade‑offs (privacy, storage location, expiration) and usefulness for long‑running projects. |
| [#2596](https://github.com/MoonshotAI/kimi-cli/issues/2596) | **Agent ran `rm -rf` on a pre‑existing directory outside the workspace, deleting user session data** | Highlights a critical safety gap: the agent, operating in “yolo” permission mode, followed a symlink that pointed to a real directory and recursively removed it, causing loss of personal data. | 0 comments, 0 👍; the issue is fresh (opened 2026‑08‑07) and signals urgency for better path‑validation and sandboxing before destructive commands are executed. |

*Only two issues were updated in the last 24 h; both are highlighted above.*

---

### 4. Key PR Progress  

| # | PR | Description / Fix | Impact |
|---|----|-------------------|--------|
| [#2594](https://github.com/MoonshotAI/kimi-cli/pull/2594) | **fix(tools): preserve non‑UTF-8 bytes in `StrReplaceFile` edits** | Changes the edit workflow to operate on the raw byte buffer, applying `old`/`new` as UTF‑8 byte substrings instead of decoding the whole file with `errors="replace"`. This prevents valid non‑UTF‑8 bytes outside the edit range from being turned into U+FFFD. | Protects binary or mixed‑encoding files from silent corruption during text replacements. |
| [#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595) | **fix(StrReplaceFile): refuse to edit files that are not valid UTF-8** | Adds a pre‑check that aborts the operation if the target file contains any invalid UTF‑8 sequence, rather than silently replacing those bytes with the replacement character. | Forces users to handle encoding issues explicitly, avoiding inadvertent data loss. |

*Only two PRs were updated in the last 24 h; both address the same class of file‑encoding safety bugs.*

---

### 5. Feature Request Trends  
Across the open issue tracker, the most recurring theme is **persistent, user‑controllable memory**:

- **Cross‑session context** (Issue #1283) – users want the CLI to remember project‑specific patterns, preferences, and learned notes so they don’t need to re‑explain the same context each time.
- **Manual instruction slots** – alongside AI‑generated memos, users request a way to pin custom commands or guidelines that survive restarts.
- **Scoping & privacy controls** – discussion hints at a need for per‑project memory stores, clear expiration policies, and opt‑out mechanisms to keep sensitive data from being retained inadvertently.

No other feature categories (e.g., UI enhancements, language support) appear with comparable frequency in the recent data.

---

### 6. Developer Pain Points  
1. **File‑encoding safety** – The recent PRs (#2594, #2595) reveal that developers frequently encounter corrupted files when the CLI edits non‑UTF‑8 or mixed‑encoding documents, leading to loss of legitimate bytes.  
2. **Agent‑side destructive actions** – Issue #2596 underscores frustration with the agent’s overly permissive file‑system access, especially when symlinks point outside the intended workspace, resulting in unintended data deletion.  
3. **Lack of long‑term memory** – The active discussion on Issue #1283 shows developers miss a mechanism to retain useful context across sessions, forcing them to repeat setup instructions or re‑teach the agent about project conventions.  

Addressing these pain points—hardening path validation, providing explicit encoding controls, and delivering a robust memory subsystem—will likely improve both safety and usability for the Kimi Code CLI community.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



### Today's Highlights  
Pi 0.84.1 introduces Qwen Token Plan Individual access via built-in providers and proactive authentication readiness checks. Notably, the TUI crash on session resume and high CPU usage on macOS with long sessions remain active pain points.  

### Releases  
**v0.84.1** (2026-08-08)  
- Adds Qwen Token Plan Individual support ([API Keys](https://github.com/earendil-works/pi-banches/coding-agent/discussions/3456)).  
- Enables better session resiliency through authentication readiness checks.  

### Hot Issues  
1. **#6879 (compaction never triggers)** – Critical for long sessions (13+ comments, 15⭐). Autocompaction needs context-threshold adjustments.  
2. **#7128 (bash tool overuse)** – Default system prompt biases toward `PI_*` checks (11+ comments, 7⭐). Community seeks toggle/override.  
3. **#7020 (compaction stops)** – Post-compaction sessions fail (10+ comments). Bug report suggests threading issues.  
4. **#7730 (High macOS CPU)** – 100%+ usage during long sessions (4+ comments). Linked to context size management.  
5. **#7703 (Agent.reset() leaks)** – Incomplete transcripts after reset (5+ comments). Disrupts reproducibility.  
6. **#7702 (DeepSeek 400 errors)** – `reasoning_content` missing in `opencode.zen` calls (6+ comments).  
7. **#7776 (Agent Plugins)** – High interest (5+ comments) for portable plugin system.  
8. **#7798 (TUI crash on resume)** – "Cannot read properties of undefined" (1+ comment). Urgent UX fix.  
9. **#7726 (DeepSeek token limit)** – Incorrect `maxTokens` (6+ comments).  
10. **#7793 (Cursor CLI bridge)** – High demand for local integration (1+ comment).  

### Key PR Progress  
1. **#7784 (Recovery state refactor)** – Simplifies recovery logic via query bounds ([PR](https://github.com/earendil-works/pi/pull/7784)).  
2. **#7801 (Coding-Agent grammar lazy load)** – Reduces initialization overhead ([PR](https://github.com/earendil-works/pi/pull/7801)).  
3. **#7795 (Replace `which` with `command -v`)** – Fixes portability issues ([PR](https://github.com/earendil-works/pi/pull/7795)).  
4. **#7792 (Cursor CLI bridge)** – Enables local Cursor session integration ([PR](https://github.com/earendil-works/pi/pull/7792)).  
5. **#7762 (LM Studio provider)** – Adds local model inference support ([PR](https://github.com/earendil-works/pi/pull/7762)).  
6. **#7710 (Harness resumption)** – Restores suspended operations with recovery queries ([PR](https://github.com/earendil-works/pi/pull/7710)).  
7. **#7788 (Tool error rendering)** – Improves built-in tool error display ([PR](https://github.com/earendil-works/pi/pull/7788)).  
8. **#7722 (Theme override)** – Adds `--use-theme` CLI flag ([PR](https://github.com/earendil-works/pi/pull/7722)).  
9. **#6216 (Bedrock Mantle provider)** – Supports AWS Bedrock responses ([PR](https://github.com/earendil-works/pi/pull/6216)).  
10. **#7790 (Project docs)** – Adds comprehensive onboarding guide ([PR](https://github.com/earendil-works/pi/pull/7790)).  

### Feature Request Trends  
- **Agent Plugins** (#7776) – First-class plugin management.  
- **Model Flexibility** – LM Studio integration (#7762), DeepSeek fixes (#7702, #7726).  
- **Cursor CLI Native Support** – Direct cursor-Agent bridging (#7793).  
- **TUI Enhancements** – Session resume reliability, sticky prompts (#7798, #7802).  
- **Automation Tools** – Better compaction logic, parallel tool execution (#6879, #7053).  

### Developer Pain Points  
- **Compaction Bugs** – Multiple issues (#6879, #7020) causing session instability.  
- **Tool Discovery Limits** – `/copy` and sandbox environments fail without `which` (`#7795`).  
- **TUI Crashes** – Session resume crashes (`#7798`) and fullscreen UX flaws (`#7786`).  
- **Model Scalability** – DeepSeek token limits and reasoning content handling (`#7702`, `#7726`).  
- **Dependency Conflicts** – Build failures on `which` absence (`#7795`).  

All links: Replace "banches" with "pr" or "issue" as needed.


</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



### 1. **Today's Highlights**  
- Qwen Code v0.21.7-nightly.20260808.4ec0371e6 was released, addressing critical bug fixes including `fix(ci): surface blocked autofix takeover` and improved TTY rendering for web terminals.  
- Key community-reported issues like Windows installer failures and macOS TTY flickering were actively prioritized, reflecting ongoing focus on platform stability.  
- New PRs and issues highlight progress toward core features like `WebBridge` browser control and agent fact-checking enhancements.  

---

### 2. **Releases**  
- **v0.21.7-nightly.20260808.4ec0371e6** (latest): Fixes CI/autofix takeover issues and documents session concurrency.  
- Previous nightly release v0.21.7-nightly.20260807.fca8f3c1f also included the same `fix(ci)` ticket, indicating iterative resolution.  
- [Release notes](https://github.com/QwenLM/qwen-code/release/v0.21.7-nightly.20260808.4ec0371e6)  

---

### 3. **Hot Issues**  
1. **[#8615](https://github.com/QwenLM/qwen-code/issues/8615)**: Windows installer crashes on `EISDIR` – critical for desktop users.  
2. **[#8659](https://github.com/QwenLM/qwen-code/issues/8659)**: TTY flickering in web terminals (e.g., Alibaba Workbench) – usability blocker.  
3. **[#8562](https://github.com/QwenLM/qwen-code/issues/8562)**: tmux screen flicker on macOS/Ubuntu via SSH – multi-platform regression.  
4. **[#8595](https://github.com/QwenLM/qwen-code/issues/8595)**: Proposed QR-code pairing for phone access – demand for seamless local control.  
5. **[#8695](https://github.com/QwenLM/qwen-code/issues/8695)**: Duplicate context usage display – UI clutter reported by developers.  
6. **[#8495](https://github.com/QwenLM/qwen-code/issues/8495)**: Stream-json session interruption corruption – affects non-interactive workflows.  
7. **[#8697](https://github.com/QwenLM/qwen-code/issues/8697)**: OTEL metrics disabled by `OTEL_METRICS_EXPORTER=otlp` – telemetry issues.  
8. **[#7118](https://github.com/QwenLM/qwen-code/issues/7118)**: Windows installer SHA-256 verification failure – deployment blockers.  
9. **[#8672](https://github.com/QwenLM/qwen-code/issues/8672)**: Middle-click copy broken in PuTTY – regression concern.  
10. **[#8699](https://github.com/QwenLM/qwen-code/issues/8699)**: Proposed Qwen WebBridge for direct browser control – high interest in integration.  

---

### 4. **Key PR Progress**  
1. **[#8688](https://github.com/QwenLM/qwen-code/pull/8688)**: Fixes blocking integration test cleanup – critical for testing stability.  
2. **[#8710](https://github.com/QwenLM/qwen-code/pull/8710)**: Adds `bailian-cli` to Ecosystem – expands third-party integration.  
3. **[#8658](https://github.com/QwenLM/qwen-code/pull/8658)**: Moves Git remote matching to CLI – improves efficiency.  
4. **[#8481](https://github.com/QwenLM/qwen-code/pull/8481)**: Prefers `wl-copy` on Wayland – enhances Linux/Wayland UX.  
5. **[#8528](https://github.com/QwenLM/qwen-code/pull/8528)**: Adds reasoning effort selector in ACP – flexibility for users.  
6. **[#8687](https://github.com/QwenLM/qwen-code/pull/8687)**: Guards cross-worktree Git mutations – security improvement.  
7. **[#8526](https://github.com/QwenLM/qwen-code/pull/8526)**: Exposes reasoning effort via ACP – aligns with model customization needs.  
8. **[#8614](https://github.com/QwenLM/qwen-code/pull/8614)**: Fullscreen artifact panel – usability enhancement.  
9. **[#8708](https://github.com/QwenLM/qwen-code/pull/8708)**: Soft tool-call budget for reviews – prevents excessive usage.  
10. **[#8415](https://github.com/QwenLM/qwen-code/pull/8415)**: Coordinates session IDs – fixes session management inconsistencies.  

---

### 5. **Feature Request Trends**  
- **Local Control**: QR-code pairing (#8595) and WebBridge (#8699) for seamless device-to-phone access.  
- **Agent Enhancements**: Fact-checking improvements (#8701) and reasoning effort controls (#8526).  
- **WebShell UI/UX**: Context selector (#6701), fullscreen panel (#8614), and tool budgeting (#8708).  
- **Telemetry/Integration**: Feishu label enrichment (#8566) and OTEL compatibility (#8697).  

---

### 6. **Developer Pain Points**  
- **CLI Instability**: Windows installer crashes (#7118), TTY flickering (#8659).  
- **Session Management**: Memory index stale state (#6487), session isolate failures (#8495).  
- **Tooling Limitations**: Middle-click copy issues in PuTTY (#8672), stream-json interruptions (#8495).  
- **Telemetry Confusion**: Metrics export disruptions with OTLP (#8697).  

--- 

All links point to specific GitHub issues or PRs. Let me know if you need deeper analysis on any item!


</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-08

---

## 1. Today's Highlights

- **v0.9.4 release blockers cleared** — PR #5282 resolved the final CI blockers; the 0.9.4 release train is now clean and ships on `origin/main`.
- **MCP and Fleet improvements are accelerating** — PR #5256 introduces background incremental registry sync, while PR #5257 adds `model = "auto"` prompt-based tier selection.
- **Session reliability is getting a major upgrade** — Issues #2934 and #4416 address session persistence and stale state isolation, two of the most frequent pain points for multi-session users.

---

## 2. Releases

**None** — No new releases were published in the last 24 hours. The current stable release is v0.9.4, with the 0.9.4 CI blockers being the last major release milestone to clear.

---

## 3. Hot Issues (Top 10)

### #2934 — Sidebar Sessions Panel with Auto-Resume & History Browsing
**Status:** CLOSED | **Comments:** 13 | **Tags:** enhancement, tui, ux, reliability, v0.9.4

Users have always needed `Ctrl+R` or `codewhale run --continue` to switch between conversations, creating friction for long-running sessions. This PR adds a persistent sidebar with session history browsing and auto-resume on session switch — a significant UX improvement for multi-session workflows.

### #1425 — Large Text Processing Causes Session Crash
**Status:** OPEN | **Comments:** 6 | **Tags:** bug, question, v0.9.4

When analyzing a 3M+ character novel, the agent splits it into 10 chunks and spawns 10 sub-agents simultaneously. The system times out (`agent_wait`) and kills the entire session. This is a fundamental reliability issue for large-context processing, directly affecting users working with long-form documents.

### #4785 — 464 `#[allow(dead_code)]` Attributes Hiding Compiler Drift
**Status:** OPEN | **Comments:** 5 | **Tags:** documentation

Removing the 464 `#[allow(dead_code)]` attributes across 143 files exposes structural drift in the codebase. This is a long-overlooked maintenance issue that blocks `cargo check --workspace --all-features` from surfacing real compile errors. The 464 dead-code attributes are effectively hiding the codebase's true state.

### #2492 — No Cross-Session Memory
**Status:** OPEN | **Comments:** 5 | **Tags:** bug

Every restart forgets the previous session's memory. If a user forces a write, the session won't read it back. The core persistence model works but the user experience is broken — you lose context across sessions and on restart.

### #5123 — Agent Spawn Surface Has Too Many Knobs
**Status:** OPEN (Release Blocker) | **Comments:** 3 | **Tags:** bug, release-blocker, workflow-runtime, subagents, ux, tools, reliability, v0.9.4

The live delegate builder exposes too many configuration knobs for agents, including `builder`/`gates-shell-writer` mode which is marked read-only and self-blocked. The current surface makes it hard for delegates to know what they can actually do — blocking execution.

### #3303 — Documented Config Keys Are Not Editable or Persistable from TUI
**Status:** OPEN | **Comments:** 3 | **Tags:** bug, enhancement, tui, reliability, v0.9.3

 Configurable runtime properties are documented in `config.toml` but users cannot discover, validate, or persist them from the TUI. This is a documentation gap that makes advanced runtime behavior feel fixed despite being configurable in the model.

### #4416 — Stale Failed-Agent State Leaks Between Sessions
**Status:** OPEN | **Comments:** 3 | **Tags:** bug, tui, ux, reliability, v0.9.4

Opening a second session in the same workspace shows red failed-agent rows from a prior session's stale work — the visible surface is "Active 0 · Tasks 0 · Runs 0 · Workers 0" but the work surface immediately renders failed prompts from a previous session. This is a state isolation bug in the same-workspace rendering path.

### #5034 — Switching Providers Leaves Wrong Default Model
**Status:** OPEN | **Comments:** 2 | **Tags:** bug, release-blocker, tui, reliability, v0.9.4

Switching the active provider to OpenAI can leave the default model at `gpt-5.5`, even when it was inherited from a different route. Provider and model resolution are not kept coherent — the model choice is not updated when the provider changes.

### #3364 — Read Before Edit Guardrails and Clearer Edit Failures
**Status:** OPEN | **Comments:** 1 | **Tags:** bug, enhancement, tui, reliability, v0.9.3

 Edit mistakes are the fastest way to make a coding agent feel unreliable. The current system lacks read-before-edit checks and does not surface specific edit failure reasons, making it hard for the user to understand what went wrong.

### #4190 — Add Model-Callable Send-Later Tool
**Status:** OPEN | **Comments:** 1 | **Tags:** bug, tui, reliability

 Claude Code Remote's `send later` primitive lets agents schedule messages in the same work context. This issue requests bringing that same capability into DeepSeek TUI, so agents can delay-check-ins without manual intervention.

---

## 4. Key PR Progress (Top 10)

### #5283 — README: Lead with Mixed Fleets — Any Model in Any Role
**Status:** CLOSED | **Tags:** docs, tui

The README over-promised "any model, any provider" as a switching story. This PR corrects the runtime reality: a saved role records `provider`,

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*