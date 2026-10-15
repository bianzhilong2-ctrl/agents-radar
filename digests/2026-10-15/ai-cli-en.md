# AI CLI Tools Community Digest 2026-10-15

> Generated: 2026-10-15 02:24 UTC | Tools covered: 9

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

User Safety: safe

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills – Community Highlights (as of 2026‑10‑15)**  

---

### 1. Top Skills Ranking  
| Rank | PR (link) | Skill / Feature | Core Functionality | Recent Discussion Highlights | Current Status |
|------|-----------|----------------|-------------------|------------------------------|----------------|
| **1** | <https://github.com/anthropics/skills/pull/1742> | **mcp‑builder fix** – support MCP ≥ 2 `streamable_http_client` import and custom headers | Updates the MCP builder to use the renamed `streamable_http_client` module (MCP ≥ 2) and enables custom HTTP headers via the new `create_mcp_http_client` / `http_client` APIs. | Community noted that the rename broke existing connections; the PR adds a migration shim and documents the new header configuration. | **OPEN** |
| **2** | <https://github.com/anthropics/skills/pull/1298> | **skill‑creator trigger‑eval isolation** | Refactors the eval viewer to run trigger evaluations in isolated subprocesses, fixes `select()`‑on‑Windows pipe issues, and adds robust handling of runtime failures. | Discussion emphasized the need for reliable trigger detection on Windows and the risk of false‑negative scores when unrelated tools interfere. | **OPEN** |
| **3** | <https://github.com/anthropics/skills/pull/1771> | **proofcore‑contract‑auditor** (new skill) | An Agent Skill that performs static analysis of Solidity & Rust smart contracts and publishes cryptographic audit proofs to the TON blockchain via ProofCore’s zero‑storage Merkle protocol. | Positive reception from Web3 developers; requests for additional language support (Vyper, Move) were raised. | **OPEN** |
| **4** | <https://github.com/anthropics/skills/pull/1734> | **Detect orphaned docx comments** | Adds logic to scan DOCX files for comment threads that have no associated paragraph, flagging them as “orphaned” for cleanup. | Users asked for a bulk‑report view and an automatic “remove orphan comments” command. | **OPEN** |
| **5** | <https://github.com/anthropics/skills/pull/1703> | **md2video‑audio** (new skill) | Converts Markdown documents into MP4 videos with realistic human‑like voiceovers, using Marp for slide generation and a TTS engine. | High interest from training‑material creators; questions about licensing of the underlying TTS model. | **OPEN** |
| **6** | <https://github.com/anthropics/skills/pull/1245> | **notion‑spec‑to‑implementation** & **quantitative‑resume‑auditor** (dual skill) | *Notion‑spec‑to‑implementation*: turns product/tech specs into concrete Notion tasks with acceptance criteria. <br>*Quantitative‑resume‑auditor*: evaluates resumes against quantitative benchmarks (e.g., impact metrics). | Strong demand for better spec‑to‑code pipelines; the resume‑auditor sparked debate on metric definitions. | **OPEN** |
| **7** | <https://github.com/anthropics/skills/pull/1961> | **skill‑creator eval‑viewer hardening** | Secures the local eval viewer (`generate_review.py` + `viewer.html`) against script breakout, DNS‑rebinding, cross‑site POST, and HTML‑escaping issues. | Security‑focused comments highlighted the need for sandboxing untrusted model output and using CSP headers. | **OPEN** |
| **8** | <https://github.com/anthropics/skills/pull/1792> | **docx timeout handling** | Makes the DOCX script return an explicit error when LibreOffice (`soffice`) times out and validates that the final DOCX contains no revision marks before reporting success. | Users reported silent “success” even when the conversion never completed; the fix was welcomed for clearer error reporting. | **OPEN** |

*The ranking follows the order of PRs sorted by community comment activity (top‑20 PRs). All listed PRs are still **OPEN** (as of the snapshot date).*

---

### 2. Community Demand Trends (derived from Issues)  

| Trend | Evidence (Issue examples) | Implication for Future Skills |
|-------|---------------------------|------------------------------|
| **Secure, sandboxed skill execution** | #492 (trust‑boundary abuse), #1961 (eval‑viewer XSS), #1394 (escapeHtml not attribute‑safe) | Skills must isolate untrusted code, enforce strict CSP, and avoid `shell=True` in subprocesses. |
| **Reliable trigger & evaluation pipelines** | #556 (run_eval.py never triggers skills), #1383 (benchmark layout bugs, Windows failures), #1352 (parallel workers cause false‑negative trigger rates) | Need robust, cross‑platform evaluation harnesses, better process isolation, and deterministic benchmarking. |
| **Organization‑wide skill sharing** | #228 (request to share skills within an org) | A built‑in skill library or shareable links would reduce manual upload steps and encourage reuse. |
| **Automation of documentation & quality control** | #189 (duplicate skills from `document-skills` & `example-skills`), #514 (typography quality), #83 (skill‑quality‑analyzer & skill‑security‑analyzer) | Tools that audit, standardise, or generate documentation (e.g., ODT, PDF, typographic checks) are highly requested. |
| **Advanced testing & validation** | #822 (AI Watch Tester/AWT skill), #1385 (Reasoning Quality Gate Pipeline) | AI‑driven end‑to‑end testing and multi‑gate quality pipelines are seen as next‑level quality assurance. |
| **Specialised domain adapters** | #1742 (MCP ≥ 2 support), #1703 (MD→Video/Audio), #1245 (Notion spec → tasks) | Community seeks skills that bridge Claude Code with other platforms (MCP, Web3, Notion, media creation). |

**Overall demand:** *the community is most concentrated on improving the security, reliability, and usability of skill execution and evaluation pipelines, especially around trigger mechanisms, error handling, and cross‑platform compatibility.*

---

### 3. High‑Potential Pending Skills (active‑comment PRs not yet merged)  

| PR | Link | Brief Description | Why It’s High‑Potential |
|----|------|-------------------|------------------------|
| **#1961** | <https://github.com/anthropics/skills/pull/1961> | Hardens the `skill‑creator` eval viewer against script breakout, DNS‑rebinding, cross‑site POST, and improper HTML escaping. | Addresses a critical security gap; likely to be merged quickly given the recent activity (Oct 3‑11). |
| **#2004** | <https://github.com/anthropics/skills/pull/2004> | Replaces `subprocess.Popen(..., shell=True)` with safer argument passing in `webapp-testing` scripts, mitigating command‑injection risk. | Directly tackles a known CWE‑78 vulnerability; community interest in secure scripting is high. |
| **#1997** | <https://github.com/anthropics/skills/pull/1997> | Fixes parsing of YAML front‑matter scalars (quote stripping, line‑continuation handling) so that description/metadata commands receive accurate values. | Improves data integrity for skill metadata; the bug is subtle but affects many downstream tools. |
| **#1742** | <https://github.com/anthropics/skills/pull/1742> | Enables MCP ≥ 2 `streamable_http_client` import and custom header configuration, fixing breakage from the MCP 2 rename. | Core infrastructure change; many downstream skills depend on reliable MCP handling. |
| **#1298** | <https://github.com/anthropics/skills/pull/1298> | Isolates trigger evaluations and adds Windows‑specific pipe handling, reducing false‑negative trigger rates. | Directly resolves the “run_eval.py never triggers skills” issue reported in #556, making it a priority. |

*These PRs are still **OPEN**, have recent comments, and address pressing technical or security concerns, suggesting they may be merged in the near term.*

---

### 4. Skills Ecosystem Insight  

> **The community’s most concentrated demand is for more secure, reliable, and cross‑platform skill execution—particularly around trigger evaluation, error handling, and sandboxing—so that new domain‑specific skills (e.g., Web3, Notion, media creation) can be built on a stable foundation.**  

---  

*All GitHub URLs are functional as of 2026‑10‑15.*

---

# Claude Code Community Digest — 2026-10-15

---

## 1. Today's Highlights

Two patch releases (v2.1.299 → v2.1.300) landed in the last 24 hours, introducing **idle conversation compaction** (auto-compacts 200K+ token sessions after ~54 min of inactivity), a **`CLAUDE_CODE_DISABLE_FILE_MENTIONS`** env var to pass file paths instead of contents to the model, and **OpenTelemetry cache-token split** (5 min / 1 hr lifetimes). Meanwhile, the desktop app's 2.37337.1 update triggered a wave of UI regressions: the Routines sidebar section disappeared on macOS/Windows, Remote Control sessions drop on auto-update relaunch, and a permission-prompt default flipped to "Always allow."

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v2.1.300** | • `virtualText` support in prompt decorations (rendered text that never enters draft/submitted prompt)<br>• OpenTelemetry `api_request` event now emits `cache_creation_5m_tokens` & `cache_creation_1h_tokens` for granular cache-write tracking |
| **v2.1.299** | • `CLAUDE_CODE_DISABLE_FILE_MENTIONS=1` — sends `@` file paths to model instead of file contents (reduces token spend)<br>• **Idle compaction**: conversations >200K tokens left idle ~54 min are auto-compacted before next interaction |

[View releases on GitHub](https://github.com/anthropics/claude-code/releases)

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#28304](https://github.com/anthropics/claude-code/issues/28304) | **Claude Desktop 1.1.4173 crashes on startup (no window, process lingers)** | Blocks all Desktop users on affected build; 43 comments, 31 👍 | 🔥 **Critical** — widespread startup failure |
| [#102158](https://github.com/anthropics/claude-code/issues/102158) | **Routines sidebar section hidden, no toggle — scheduled task results inaccessible** | Regression in 2.37337.1; breaks scheduled-task workflow | 4 comments, 5 👍 — macOS/Desktop |
| [#100106](https://github.com/anthropics/claude-code/issues/100106) | **Auto-update relaunch drops all Remote Control sessions; no auto-reconnect** | Remote sessions go offline overnight; manual recovery required | 4 comments — macOS/Desktop |
| [#102236](https://github.com/anthropics/claude-code/issues/102236) | **Background classification agents consume ~10% of 5h token quota/minute** | Runaway token burn in autonomous agent loops; cost surprise | 3 comments — cost/agents |
| [#94032](https://github.com/anthropics/claude-code/issues/94032) | **`summarizedThinking` flag forces `--thinking-display summarized` on all models, no opt-out** | Full thinking chains inaccessible; flag overrides user preference | 3 comments — macOS/iOS/Desktop |
| [#102134](https://github.com/anthropics/claude-code/issues/102134) | **`session.compact` mod hook no longer fires in 2.1.299 (manual & auto compaction)** | Breaks plugin/compaction integrations; regression from idle-compaction feature | 3 comments — hooks/plugins |
| [#102136](https://github.com/anthropics/claude-code/issues/102136) | **Permission prompt defaults to "Always allow" instead of "Allow once" — dangerous UX regression** | Security risk: users inadvertently grant broad filesystem/network access | 2 comments, 2 👍 — permissions/Desktop |
| [#95688](https://github.com/anthropics/claude-code/issues/95688) | **Gmail connector can't attach local files without base64 round-trip** | Forces reading file → base64 → tool call; no path/handle pass-through | 2 comments, 3 👍 — Windows/MCP/Desktop |
| [#100568](https://github.com/anthropics/claude-code/issues/100568) | **Sandboxed Bash opens every `sandbox.credentials.files` path (4× each) on every command** | Floods audit logs, 170+ credential files → massive `open()` syscall storm | 1 comment — macOS/security/sandbox |
| [#102245](https://github.com/anthropics/claude-code/issues/102245) | **Windows: idle Code session pins one thread at 100% CPU for hours** | Silent battery/thermal drain; no user-visible activity | 0 comments — Windows/Desktop/perf |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#86870](https://github.com/anthropics/claude-code/pull/86870) | **Closed** | Security-review hook: added session-context checks (CVS status, educational labs) before triggering CVP status changes; prevents false positives during authorized security research |
| [#85834](https://github.com/anthropics/claude-code/pull/85834) | **Closed** | DevContainer fix for `hookify` plugin install — enables HackerOne Bug Bounty Program access in codespaces |

> Only 2 PRs updated in the last 24h; both are security/infrastructure fixes merged weeks ago.

---

## 5. Feature Request Trends (from all 50 issues)

| Theme | Representative Issues | Frequency |
|-------|----------------------|-----------|
| **Desktop UI/UX polish** | Restore Routines sidebar (#102158, #102247), hide Environment panel in split view (#102233), show last-activity in ⌘K Recents (#102246), Run-history side panel for Scheduled Tasks (#100563) | 6+ issues |
| **Remote Control reliability** | Push notifications while terminal focused (#93997), auto-reconnect after app update (#100106), configurable cross-session send pause (#100233) | 3 issues |
| **Token/cost observability & control** | Suppress "task tools unused" reminder (#64192), background agent token burn (#102236), "Reset for free" auto-apply on downgrade (#98664) | 3 issues |
| **Sandbox/credentials ergonomics** | Credential-file open storm (#100568), NFS inode >2^63 support (#102217), seeded plugins auto-load without `/reload-plugins` (#102240) | 3 issues |
| **Keybinding/configurability** | Flip Enter/Shift+Enter send behavior (#101352), worktree default OFF for task chips (#102221) | 2 issues |
| **Connector/file-handling gaps** | Gmail connector local-file attach without base64 (#95688) | 1 issue |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Desktop regressions per update** — Routines sidebar vanishing, Remote Control sessions dying on auto-update, new unhideable panels consuming split-view width. Users feel "every update breaks my workflow."
2. **Permission UX regression** — Defaulting to "Always allow" is seen as a security anti-pattern; no granular "Allow once" / "Allow for session" memory.
3. **Token surprises** — Background agents silently consuming quota, "Reset for free" applying unexpectedly on plan downgrade, no suppression knob for repetitive system reminders.
4. **Sandbox friction** — Credential-file `open()` storm on every Bash call; NFS inode limitations blocking research workloads; plugins requiring manual reload per session.
5. **Mobile/Remote gaps** — Android input focus loss with physical keyboard, no push notifications while terminal focused, no auto-reconnect after host restart.
6. **Thinking-display opacity** — Feature flag forces summarized thinking with no user override; full chains inaccessible even when needed for debugging.

---

*Digest generated from `anthropics/claude-code` GitHub data (releases, issues, PRs updated 2026-10-14 → 2026-10-15).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑10‑15**

---

### 1. Today's Highlights
- The team merged a critical fix for context‑bloat in `read-many-files` (PR #29457) that stopped binary assets from being incorrectly treated as explicitly requested.  
- Work continues on sandbox reliability: PR #29671 aims to persist authentication and session state across container sandbox invocations, addressing repeated auth prompts reported in #29461.  
- Several high‑impact bugs remain open, notably the Generalist Agent hanging indefinitely (#21409) and sub‑agents incorrectly reporting GOAL success after hitting MAX_TURNS (#22323), both drawing noticeable community engagement.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues  
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success (p1, bug) | Misleading termination reason hides real failures, complicating debugging of long‑running agents. | 13 comments, 👍 2 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs forever (p1, bug) | Blocks basic workflows (e.g., folder creation) unless sub‑agent use is disabled. | 8 comments, 👍 8 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via zero‑dependency OS sandboxing (p2, enhancement) | Would let Gemini use native bash tools more safely, improving code‑exploration efficiency. | 9 comments, 👍 1 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST‑aware file reads, search, and mapping (p2, feature) | Precise AST tooling could cut token usage and reduce noisy context during codebase investigations. | 7 comments, 👍 1 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub‑agents enough (p2, bug) | Model falls back to generic reasoning instead of invoking provided domain skills, reducing effectiveness. | 7 comments, 👍 0 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides (e.g., maxTurns) (p2, bug) | Configuration drift prevents users from enforcing limits, leading to unexpected resource consumption. | 4 comments, 👍 0 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in Wayland (p1, bug, agent/browser) | Breaks browser‑based automation on Linux desktops using Wayland, a growing deployment target. | 4 comments, 👍 1 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | Symlink in `~/.gemini/agents/` not recognized as agent (p2, bug) | Limits flexibility for managing shared agent definitions via dotfiles or version‑controlled links. | 4 comments, 👍 0 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should stop/discourage destructive behavior (p2, customer‑issue) | Reduces risk of accidental data‑loss commands like `git reset --force` or unsafe DB mutations. | 3 comments, 👍 1 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | `get-shit-done` output hook causes crash (p1, bug) | Intermittent crashes during final summary output disrupt user trust and require manual recovery. | 3 comments, 👍 0 |

### 4. Key PR Progress  
| # | PR | Summary |
|---|----|---------|
| [#29457](https://github.com/google-gemini/gemini-cli/pull/29457) | **fix(core): replace fuzzy requestedExplicitly logic with glob matching in read‑many‑files** – Resolves a context‑bloat bug where binary files were mistakenly flagged as explicitly requested, saving tokens and preventing unnecessary model load. |
| [#29578](https://github.com/google-gemini/gemini-cli/pull/29578) | **fix(mcp): request offline access for Google endpoints and preserve clientSecret on refresh** – Ensures remote MCP servers using Google OAuth can obtain and reuse refresh tokens, eliminating silent auth failures. |
| [#29671](https://github.com/google-gemini/gemini-cli/pull/29671) | **fix(cli): persist sandbox authentication and sessions** – Stores auth, folder‑trust, and sandbox state across container runs, removing repeated login prompts and trust‑loss loops. |
| [#29670](https://github.com/google-gemini/gemini-cli/pull/29670) | **fix(core): make mid‑stream retry backoff abort‑aware** – Cancels retry loops when a request is aborted (ESC), preventing wasted CPU and spurious RETRY telemetry. |
| [#29668](https://github.com/google-gemini/gemini-cli/pull/29668) | **fix(core): preserve functionResponse parts and functionCall metadata when stripping prefixes** – Keeps multimodal payloads and streaming metadata intact during tool‑call ID cleanup, avoiding data loss. |
| [#29757](https://github.com/google-gemini/gemini-cli/pull/29757) | **fix(cli): verify active binary update to prevent PATH shadowing false success** – Confirms the updated binary is actually executing, preventing stale version runs when PATH shadows the new binary. |
| [#29750](https://github.com/google-gemini/gemini-cli/pull/29750) | **fix(cli): resolve settings placeholders after loading .env files** – Loads `.env` before expanding placeholders, so variables defined there (e.g., Authorization tokens) are correctly substituted. |
| [#29748](https://github.com/google-gemini/gemini-cli/pull/29748) | **docs(sandbox): document that IDE integration is unavailable inside container sandboxes** – Clarifies limitation to avoid confusion when using Docker/Podman sandboxes with host‑side IDEs. |
| [#29744](https://github.com/google-gemini/gemini-cli/pull/29744) | **fix(core): let /ide enable reconnect after the IDE server restarts** – Restores IDE connection after a VS Code reload or extension update without requiring a CLI restart. |
| [#29753](https://github.com/google-gemini/gemini-cli/pull/29753) | **fix(core): format and quote Windows diff command arguments in openDiff** – Guarantees safe argument passing to external diff editors on Windows, preventing injection or parsing errors. |

### 5. Feature Request Trends
- **AST‑aware tooling** – Multiple issues (#22745, #22746, #22747) call for integrating AST‑based readers/searchers to reduce token overhead and improve precision.  
- **Enhanced sub‑agent autonomy** – Requests for the model to proactively use custom skills and sub‑agents (#21968), share trajectories via `/chat share` (#22598), and improve self‑awareness of its own capabilities (#21432).  
- **Sandbox & session durability** – Persistent authentication, session takeover, and lock‑recovery for browser agents (#29671, #22232, #21983).  
- **Safety & guardrails** – Discouraging destructive commands (#22672) and providing clearer limits (maxTurns) that are honored across agents (#22267).  
- **Observability & debugging** – Better bug‑report context including sub‑agent state (#21763), stable terminal rendering on resize (#21924), and synchronized output to avoid flicker in multiplexers (#29725).  

### 6. Developer Pain Points
- **Agent hangs / unresponsiveness** – Generalist Agent freezing mid‑task (#21409) forces users to disable sub‑agents or restart the CLI.  
- **Misleading status reporting** – Sub‑agents reporting GOAL success despite hitting turn limits (#22323) obscures real failures.  
- **Browser‑agent fragility** – Failures under Wayland (#21983), ignored settings overrides (#22267), and lack of session recovery (#22232) impede reliable UI automation.  
- **Configuration ergonomics** – Symlinks not recognized as agents (#20079) and placeholder resolution order (#29750) create friction for dotfile‑based workflows.  
- **Safety concerns** – Tendency to issue potentially destructive commands (force pushes, DB writes) without sufficient warning (#22672).  
- **Output‑hook crashes** – Intermittent crashes during final summary rendering (#22186) disrupt trust and require manual intervention.  

*All links point to the respective items in the google‑gemini/gemini-cli repository.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑10‑15**  
*Repository: github.com/github/copilot-cli*  

---

### 1. Today’s Highlights  
- The CLI shipped three patch releases in the last 24 h (v1.0.99‑0, v1.0.98, v1.0.98‑2) that added a full‑screen sharing menu, finer‑grained sandbox controls, and improved reliability of command‑hook completion.  
- Community activity remains high: 30 issues were updated today, with several hot topics around cross‑app session sync, permission‑request noise, and a newly reported CPU‑spin bug (issue #5148).  
- No pull‑request updates were recorded in the period, indicating the team is focusing on triaging issues and stabilizing the recent releases.  

---

### 2. Releases (last 24 h)  

| Version | Date | Notable Changes |
|---------|------|-----------------|
| **v1.0.99‑0** | 2026‑10‑15 | • **Added** – Open `/share` without arguments to launch a full‑screen action menu for sharing the current session.<br>• **Improved** – `/sandbox` can keep sandboxing enabled for the current session only (no global toggle).<br>• Trusted repository plugins now install/update automatically before each chat run.<br>• Minor UI polish (referred to as “Rena”). |
| **v1.0.98** | 2026‑10‑14 | • Added support for **Gemini 4 Argon**.<br>• Command hooks now complete reliably even when child‑exit signals are lost under Node.<br>• MCP status and `/mcp` commands stay synced after split‑view session switches.<br>• Session resume respects abandoned pending‑permission work. |
| **v1.0.98‑2** | 2026‑10‑14 (improved) | • **Improved** – Expand `/ask` answers with **Ctrl+E**, copy the entire answer with **Ctrl+Y**, and reopen the last usable completed answer via `/ask` or `/btw`.<br>• **Fixed** – Same child‑exit‑signal reliability fix as in v1.0.98. |

*Links:*  
- v1.0.99‑0: https://github.com/github/copilot-cli/releases/tag/v1.0.99-0  
- v1.0.98:   https://github.com/github/copilot-cli/releases/tag/v1.0.98  
- v1.0.98‑2: https://github.com/github/copilot-cli/releases/tag/v1.0.98-2  

---

### 3. Hot Issues (10 picked)  

| # | Issue | Why it matters / Community reaction |
|---|-------|--------------------------------------|
| **#3808** | Enhance prompt caching for Claude Sonnet | Reduces latency & token cost for long prompts; 8 👍 shows strong interest in model‑level optimizations. |
| **#4082** | Cross‑app session sync (CLI ↔ Desktop App) | Users want a unified workflow; 14 👍 indicates high demand for seamless session continuity. |
| **#4950** | BYOK custom providers forced to temperature = 0 → reasoning‑model degeneration | Blocks use of newer reasoning models; 0 👍 but critical for developers using local LLMs. |
| **#5105** | macOS sandbox blocks Gradle daemon despite allowed networking | Breaks Java builds inside the sandbox; 0 👍 but a blocker for JVM‑based workflows. |
| **#5148** | Idle CLI sessions pin a CPU core at 100 % (notify‑rs debouncer loop) | Newly reported performance bug; 0 👍 yet urgent for multi‑session users on Apple Silicon. |
| **#5147** | `/restart` fails when launched with `--new-session-id` | Prevents clean session reset; 0 👍 but impacts scripting and automation. |
| **#5146** | Local operations generate dozens of permission requests | Causes UX noise; 0 👍 yet a frequent complaint in interactive mode. |
| **#5144** | Allow subagents to inherit main agent’s permissions | Reduces repetitive permission prompts; 0 👍 but addresses the core pain of #5146. |
| **#5141** | Default agent selection via `/agent` without interactive list | Improves keyboard‑only workflow; 0 👍 but a requested ergonomics tweak. |
| **#5110** | Right‑click copy fails for Copilot output text (Linux/MobaX) | Basic clipboard functionality broken; 3 👍 shows immediate usability impact. |

*All issue links are of the form:* `https://github.com/github/copilot-cli/issues/<NUMBER>`  

---

### 4. Key PR Progress  

*No pull‑request updates were recorded in the last 24 h.*  
The repository shows **0** PRs modified today, suggesting the team is currently focused on issue triage and stabilizing the recent patch releases rather than merging new feature work.

---

### 5. Feature Request Trends  

From the open issues, the most‑recurring feature directions are:

1. **Session & State Management**  
   - Cross‑app session sync (CLI ↔ Desktop) – #4082  
   - Persistent session names & better UI for session list – #5132, #5135  
   - Automatic session compaction / idle timeout aligned to model prompt‑cache TTL – #4724  

2. **Permission & Sandbox UX**  
   - Reduce permission‑request noise for local operations – #5146, #5144  
   - Sandbox path grants honoured by JVM processes – #5105, #4516  
   - Subagent permission inheritance – #5144  

3. **Model & Provider Flexibility**  
   - Prompt caching for Claude/Gemini – #3808  
   - BYOK provider sampling configuration (avoid forced temperature = 0) – #4950  
   - Support for newer models (Gemini 4 Argon already added)  

4. **Keyboard & Interaction Ergonomics**  
   - Expand/copy/thoughts shortcuts (Ctrl+E/Y) – already delivered in v1.0.98‑2  
   - Default agent selection without interactive picker – #5141  
   - Prevent Copilot from stealing focus while user types – #5131  

5. **Observability & Diagnostics**  
   - Timestamps in conversation view – #2535 (closed, but still referenced)  
   - Improved feedback flow labeling – #4848  
   - Exportable diagnostic bundles for troubleshooting  

---

### 6. Developer Pain Points  

- **Permission Overload** – Frequent, repetitive prompts for filesystem or network access (especially with Gradle, Maven, or custom subagents) interrupt workflow and are cited in multiple issues (#5105, #5146, #5144).  
- **Sandbox Limitations** – macOS sandbox blocks legitimate local tooling (Gradle daemon, JVM processes) even when networking is allowed, forcing developers to disable sandbox or work around it.  
- **CPU Spinning Bug** – Idle sessions consuming a full core (notify‑rs debouncer loop) degrade laptop battery and system performance (#5148).  
- **Session Lifecycle Confusion** – `/exit` requiring multiple attempts after session switches and missing session names create disorientation (#5135, #5132).  
- **Model‑Specific API Issues** – Claude and Gemini models returning HTTP 400 due to malformed JSON bodies (#5139) and missing usage accounting when calls are killed mid‑stream (#5138).  
- **BYOK Sampling Constraints** – Forced temperature = 0 and top_p = 0.95 prevent effective use of reasoning models served via custom endpoints (#4950).  

Addressing these pain points—particularly sandbox permission propagation, CPU‑usage fixes, and more flexible model sampling—would significantly improve the daily experience for Copilot CLI power users.  

---  

*Generated for the GitHub Copilot CLI community on 2026‑10‑15.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-10-15

## 1. Today's Highlights

This week saw critical stability issues around security and API reliability. **Issue #50627** revealed that enabling broad shell permissions on custom agents breaks the free tier with "can only be used from within OpenCode," causing all requests to fail. Concurrently, **PR #55590** improved webfetch URL visibility during async operations, while **PR #54735** addressed virtual model metadata inheritance for better routing. Performance concerns persist with **Issue #55579** (DeepSeek-v4.1-flash throughput degradation) and **PR #51133** implementing mandatory plugin activation before each runner step to prevent stale contexts. The team also promoted **#55589** from development to production, and continued addressing platform quirks like the Chinese locale support (**#40270**) and inconsistent desktop project opening behavior (**#42554**).

## 2. Releases

No new major releases were published in the last 24 hours. The latest stable version remains **OpenCode 2.0.28**.

## 3. Hot Issues

| # | Title | Impact | Why It Matters |
|---|-------|--------|----------------|
| #50627 | Shell permissions break free tier | 🔴 Critical | Denying `shell` on custom agents causes all free-tier requests to fail, blocking core functionality for thousands of users. |
| #42090 | deepseek-v4-pro API 400 errors | 🔴 Critical | The Responses API returns malformed JSON, breaking downstream integrations and forcing fallback workflows. |
| #40171 | Go service SSE streaming incomplete | 🟠 High | Missing `response.output_item.added` and `content_part.added` events breaks Codex-style clients expecting proper streaming semantics. |
| #42502 | Single API key rate-limit failover | 🟠 High | Without automatic failover, agents stop mid-task when keys hit 429/500, causing costly interruptions on long tasks. |
| #55271 | Agent not found after plugin reload | 🟠 High | Config reloads corrupt the agent catalog, leaving sessions stranded with "Agent not found" errors. |
| #54172 | Agent not found during plugin reload | 🟠 High | Similar to #55271, plugin file changes trigger reloads that lose agent state, breaking multi-agent workflows. |
| #55581 | Tool catalog shrinks after restart | 🟡 Medium | Long-running sessions lose all tools post-restart, forcing manual reconfiguration and degrading productivity. |
| #55580 | Usage API returns 500 errors | 🔴 Critical | The overview page becomes unusable as all metric endpoints fail, preventing monitoring and billing visibility. |
| #55579 | DeepSeek-v4.1-flash throughput drop | 🟡 Medium | Throughput halved from ~254 tok/s to ~119 tok/s, impacting latency-sensitive coding tasks. |
| #55575 | Compaction rejects free-tier requests | 🟡 Medium | Free-tier users cannot use compaction, limiting efficient editing workflows compared to paid tiers. |

## 4. Key PR Progress

| # | PR | Status | Focus |
|---|----|--------|-------|
| #55590 | Show webfetch URL while fetching | ✅ Closed | Improves UX by displaying URLs during async webfetch operations. |
| #54735 | Inherit Vercel AI Gateway virtual model metadata | ✅ Open | Closes #54732; ensures VMCs receive correct model-level metadata. |
| #55592 | Omit compaction replay context from sanitized exports | ✅ Open | Fixes #55585 by removing stale compaction context from exported snapshots. |
| #51133 | Wait for plugin activation before each runner step | ✅ Open | Ensures fresh plugin states before executing each task step. |
| #51025 | Show model tokens cost in subagent picker | ✅ Open | Enhances transparency by displaying token consumption for subagent selections. |
| #55589 | Promote dev → production | ✅ Completed | Moved main branch to production; included multiple fixes including #55586–#55587. |
| #55505 | Unified side padding for all dialogs | ✅ Open | Standardizes dialog spacing across the TUI, improving visual consistency. |
| #55582 | Replace dialog inset flag with cell count | ✅ Open | Finalizes the dialog normalization stack migration. |
| #55531 | Format dialog files with Prettier | ✅ Open | Aligns dialog source code style across the codebase. |
| #55523 | Move remaining dialogs to DialogLayout | ✅ Open | Consolidates UI components into a shared layout structure. |
| #55519 | Add shared dialog layout with consistent rhythm | ✅ Open | Establishes a reusable dialog component architecture. |

## 5. Feature Request Trends

Three dominant themes emerged from the issue landscape:

1. **MCP Ecosystem Management** – Multiple requests focus on robust MCP server control (add/remove with persistence) and keyless custom OpenAI-compatible providers (#38993, #42587).
2. **Performance & Cost Transparency** – Developers increasingly demand clearer cost tracking (subagent token costs, compaction) and reduced latency (DeepSeek throughput, SSE streaming).
3. **Platform Stability & Localization** – Chinese locale support (#40270), desktop app reliability (project opening, RPM updates), and cross-platform consistency remain top priorities.

## 6. Developer Pain Points

- **Security & Permission Bugs** – The #50627 shell-permission regression directly impacts free-tier users and requires immediate remediation.
- **API Reliability** – The Usage API outage (#55580) and tool-catalog shrinkage after restarts (#55581) disrupt monitoring and workflow continuity.
- **Performance Degradation** – Throughput drops in DeepSeek variants (#55579) and broken streaming events (#40171) affect developer experience.
- **Configuration Complexity** – Plugin reloads and MCP management lack clear persistence mechanisms, leading to session corruption.
- **Missing Observability** – Lack of detailed cost breakdowns (token usage, compaction) and real-time metrics limits debugging and optimization efforts.

*For full details, see the linked issues and pull requests above.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - October 15, 2026

## Today's Highlights
The Qwen Code community continues addressing critical infrastructure challenges with multiple high-impact issues around managed agent architecture, OpenAI-compatible provider integrations, and web shell usability. The most active discussions center on defining staged Managed Agent delivery (#12380, 60 comments) and resolving vLLM backend compatibility issues affecting every API request in OpenAI-compatible providers.

## Releases
None reported in the last 24 hours

## Hot Issues

**1. Managed Agent Dual-Path Architecture** (#12380, 60 comments)
*Author: doudouOUC | [Link](https://github.com/QwenLM/qwen-code/issues/12380)*
Defining a staged Managed Agent architecture that separates model inference from tool-environment provisioning while providing Sessions with durable ownership, Workspace bindings, and recoverable tool executions. This architectural decision appears crucial for future roadmap items around multi-agent and platform distribution.

**2. OpenAI-Compatible Provider 400 Errors** (#14112, 4 comments)
*Author: 0xABADBABE-ops | [Link](https://github.com/QwenLM/qwen-code/issues/14112)*
Every API call fails with vLLM-based providers (TheHive AI) due to missing "parameters" field and unsupported "tool_choice: required". This affects multiple models including deepseek-v4.1-flash and glm-5.3-flash, creating a widespread integration blocker for custom providers.

**3. Bodyless Provider Errors Undiagnosable** (#14115, 6 comments)
*Author: 0xABADBABE-ops | [Link](https://github.com/QwenLM/qwen-code/issues/14115)*
When strict OpenAI-compatible backends reject requests with 400 errors (no response body), the CLI only shows "[API Error: 400 status code (no body)]" without request ID. The fix (PR #14133) aims to surface provider request IDs for traceability.

**4. Context Immutability for Self-Hosted Models** (#14215, 6 comments)
*Author: markouustalu | [Link](https://github.com/QwenLM/qwen-code/issues/14215)*
Request-tail memory catalog forces full prompt reprocessing on every step with hybrid models on llama.cpp/Ollama. Since v0.25.1, auto-memory catalog appends to every main-chat request but isn't preserved in history, causing performance degradation on self-hosted machines.

**5. Web Shell Add Workspace Dialog Unusable** (#14184, 4 comments)
*Author: pomelo-nwu | [Link](https://github.com/QwenLM/qwen-code/issues/14184)*
On phone viewports, the Add Workspace dialog collapses the folder browser to a one-line box, pushing Cancel/Add buttons below the fold. This mobile usability issue affects the primary workspace selection workflow in the Web Shell.

**6. Session Command Timeout Duplicates Messages** (#14063, 5 comments)
*Author: wenshao | [Link](https://github.com/QwenLM/qwen-code/issues/14063)*
Commands with replies that never arrive get answer from `sessionCommandEvidenceText`, and repeating the send duplicates the message. This session management issue affects hosted session command behavior.

**7. Tool Call Bridge Refusals Unlabeled** (#14216, 3 comments)
*Author: R-omk | [Link](https://github.com/QwenLM/qwen-code/issues/14216)*
In managed agent sessions, `tool_call` bridge refusals for envelope-level validation are unlabeled, causing the model to interpret them as target-schema errors and give up. This affects subagent launches through deferred agent tools.

**8. CI Classify PR Bottleneck** (#14219, 3 comments)
*Author: yiliang114 | [Link](https://github.com/QwenLM/qwen-code/issues/14219)*
The post-merge `classify_pr` job on GitHub-hosted `ubuntu-latest` takes 49-64 minutes in queue for 4 seconds of work, gating every product job in the workflow. This CI infrastructure bottleneck significantly delays PR merge feedback.

**9. Record Artifact Tool Misguidance** (#14198, 5 comments)
*Author: zjgzx1988 | [Link](https://github.com/QwenLM/qwen-code/issues/14198)*
The `record_artifact` tool description tells models to use the Artifact tool even when it's not registered. This static guidance should be moved to the Artifact tool's own description so models only see it when applicable.

**10. Custom Commands Template Reinterpretation** (#13387, 4 comments)
*Author: banned2054 | [Link](https://github.com/QwenLM/qwen-code/issues/13387)*
When custom commands combine `@{file}` with `{{args}}` or `!{...}`, referenced file content gets re-interpreted as command template syntax instead of remaining static content. This breaks literal template markers inside referenced files.

## Key PR Progress

**1. fix(core): Keep Artifact Guidance Out of record_artifact Description** (#14206)
*Author: zjgzx1988 | [Link](https://github.com/QwenLM/qwen-code/pull/14206)*
Removes misleading guidance about using the Artifact tool from `record_artifact` description, moving it to the Artifact tool's own description. Also corrects a code comment inconsistency.

**2. feat(web-shell): Upload Files by Dropping into File Tree** (#14145)
*Author: ytahdn | [Link](https://github.com/QwenLM/qwen-code/pull/14145)*
Adds drag-and-drop file upload functionality in the Web Shell's Files tree. Dropping onto folders uploads into that folder, files use parent folder, and sidebar whitespace uses workspace root, with a progress bar indicator.

**3. fix(web-shell): Bound Pending Edit Diffs to Nearby Context** (#13771)
*Author: jayfeng7 | [Link](https://github.com/QwenLM/qwen-code/pull/13771)*
Improves edit previews by showing changes with up to three surrounding lines and file-relative hunk coordinates. Common file ends are trimmed before comparison, with explicit reporting for oversized previews.

**4. fix(qqbot)!: Restore Per-Group Session Isolation** (#13882)
*Author: Eric-GoodBoy-Tech | [Link](https://github.com/QwenLM/qwen-code/pull/13882)*
Migrated from issue #13250, restoring per-group session isolation under thread scope with identical code and head SHA. This addresses a GitHub-side artifact issue that left invisible `CHANGES_REQUESTED`.

**5. fix(ci): Repair Daily Failure Reporting** (#14238)
*Author: yiliang114 | [Link](https://github.com/QwenLM/qwen-code/pull/14238)*
Fixes daily CI failure reporting and contract guards after #14205. Scheduled Desktop failures are identified by workflow canonical names rather than rendered run titles.

**6. ci: Run Java and Desktop Checks Daily** (#14205)
*Author: yiliang114 | [Link](https://github.com/QwenLM/qwen-code/pull/14205)*
Moves complete Java check suite and Desktop Shell builds out of PR execution to daily runs at 19:47 UTC (03:47 Asia/Shanghai) and 16:00 UTC respectively, retaining daily packaging dry runs.

**7. feat(managed-agent): Publish Experimental Reference Distribution** (#14176)
*Author: yiliang114 | [Link](https://github.com/QwenLM/qwen-code/pull/14176)*
Adds an experimental Hosted Managed Agent reference distribution for operators to build and verify independently from the npm CLI release. Contains Java control plane, recovery utilities, Runtime Broker, and deployment scripts.

**8. fix(managed-agent): Bound Retry Loops with Terminal States** (#13219)
*Author: wenshao | [Link](https://github.com/QwenLM/qwen-code/pull/13219)*
Gives asynchronous retry loops a budget and terminal state across the managed-agent stack. Fixes a permanently wedged projection by healing past provably permanent sequence gaps instead of throwing.

**9. fix(cli): Preserve Markdown in Height-Bounded Tool Results** (#13957)
*Author: shenyankm | [Link](https://github.com/QwenLM/qwen-code/pull/13957)*
Restores Markdown formatting in completed CLI tool results while maintaining terminal-height limits, truncation cues, and expansion. Height accounting follows word wrapping, list markers, code gutters, and table layouts.

**10. fix(cli): Close Post-Merge Takeover Findings** (#13188)
*Author: wenshao | [Link](https://github.com/QwenLM/qwen-code/pull/13188)*
Addresses three Critical findings from post-merge review on #13083 about Hosted Turn takeover and G1 failover, each pinned by unit witnesses, plus findings from follow-up review threads.

## Feature Request Trends

**1. Managed Agent Infrastructure Improvements**
Multiple issues (#12380, #14168, #14122) focus on durable command delivery, staged architecture, and recovery mechanisms. The community is heavily invested in making managed agents production-ready with features like Workspace mount management and error recovery.

**2. Self-Hosted Performance Optimization**
Context immutability (#14215), request-tail memory catalog improvements (#14203), and hybrid model support suggest growing demand for self-hosted deployments, particularly for organizations with limited prompt-processing speed.

**3. Cross-Platform Tool Integration**
Several issues (#14182, #14112, #14115) address OpenAI-compatible provider integration, indicating a push for better multi-backend support, especially for vLLM-based deployments.

**4. Web Shell Mobile Experience**
Mobile viewport issues (#14184) and cross-project todos aggregation (#14236, #14226) show focus on improving the Web Shell's accessibility and feature completeness across devices.

## Developer Pain Points

**1. CI/CD Pipeline Bottlenecks**
The `classify_pr` job (issue #14219) exemplifies a systemic problem where a 4-second job takes 49-64+ minutes in queue, creating significant delays for the entire workflow. This reflects broader concerns about GitHub Actions efficiency.

**2. Provider Integration Complexity**
Multiple issues (#14112, #14115, #14182) around OpenAI-compatible providers suggest developers struggle with:
- vLLM backend compatibility
- Error message clarity when requests fail
- Parameter handling differences across providers

**3. Tool Registration and Guidance Management**
The `record_artifact` guidance issue (#14198) appears in multiple forms (issues #14198, #14206) indicating developers are frustrated with static documentation that appears even when tools aren't registered.

**4. Session and State Management**
Issues around session timeouts (#14063), context immutability (#14215), and memory catalog management (#14203) suggest developers face challenges with state persistence and efficient memory usage in long-running sessions.

**5. Error Reporting and Diagnostics**
Bodyless provider errors (#14115) and unlabeled tool call refusals (#14216) highlight concerns about debugging when things go wrong, with developers unable to trace requests or understand why model actions fail.

**6. Performance on Self-Hosted Infrastructure**
The context immutability and memory catalog issues (#14215, #14203) indicate significant performance degradation for self-hosted deployments, particularly with llama.cpp and Ollama backends, affecting user experience.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek‑TUI Community Digest – 2026‑10‑15**

---

### 1. Today's Highlights
- **v0.10.2 planning** is underway (issue #6094) with thirteen contributor PRs already merged, indicating a focused effort to deliver the next patch release.  
- **Android/Termux users** are suddenly blocked from any confined file operation (issue #6980) after v0.10.1, raising a SELinux‑related EACCES problem that stalls core tooling on the platform.  
- **Context‑compression failures** appear in newer sessions (issue #6981), exposing a regression in the chat‑API handling that stops the assistant from creating space for new turns.  

These three items dominate the community’s immediate attention, touching deployment, platform compatibility, and core runtime stability.

---

### 2. Releases
**No new releases** were published in the last 24 h (the “Latest Releases” feed is empty).

---

### 3. Hot Issues  *(6 items – all currently open)*  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **#6094** | **[v0.10.2, tracking] Start here: what the next patch release covers, and how to help** | Central coordination point for the upcoming v0.10.2. Provides a single reference for contributors, reviewers, and testers. | 7 comments, 1 👍 – active discussion on merge strategy and PR hygiene. |
| **#6980** | **[needs‑triage] Android (Termux): every confined file operation fails with EACCES** | Breaks all engine features that use `WorkspaceFile::open_confined` on Android/Termux (journals, worktrees, etc.). A show‑stopper for the mobile‑first user base. | 2 comments, 0 👍 – early triage, awaiting detailed reproduction steps. |
| **#6978** | **[bug] Turn snapshots fail with “git commit‑tree failed: fatal: <sha> is not a valid object” (Windows 0.10.0)** | Corrupts long‑running sessions on Windows 11, causing data loss of up to ~100 MB of chat history. A regression from the rollback to 0.10.0. | 1 comment, 0 👍 – urgent fix requested; the reporter holds critical session data. |
| **#6934** | **[bug, tools] 0.10.2: file_search default‑active change must move the public tool‑surface rows in the same slice** | UI contract mismatch in `web/`; `npm test` fails, indicating a broken public API surface for discovery. | 1 comment, 0 👍 – narrow but critical for the web UI. |
| **#6976** | **[bug, needs‑triage] `cargo install codewhale‑cli --locked --force` cannot upgrade past 0.10.0** | Users stuck on an older version despite using `--force`, suggesting a registry or locking issue that blocks adoption of newer features. | 1 comment, 0 👍 – quick triage needed. |
| **#6981** | **[bug, needs‑triage] Context compression failed** | The chat‑API response missing `choices` aborts the “make room” step, leaving sessions unable to accept new turns. Directly impacts real‑time interaction. | 0 comments, 0 👍 – fresh report, likely a breaking regression. |

*All issues are linked on GitHub: `codewhale-hq/Codewhale#6094`, … `#6981`.*

---

### 4. Key PR Progress  *(10 of the 13 recent PRs)*  

| # | PR | Status | Core contribution / fix |
|---|-----|--------|--------------------------|
| **#6973** | `refactor(commands): adopt portable config shapes for the complete config group (FEAT‑028)` | **OPEN** | Strips concrete `App`/TUI dependencies from the `config` Slash Command Group, replacing them with **Shapes** connections – a large, behavior‑preserving refactor that opens the door to more modular command definitions. |
| **#6979** | `test(tui): six terminal tests no longer follow the developer's terminal` | **OPEN** | Shields CI‑run terminal tests from environment‑specific caps (`TMUX`, `STY`, `TILIX_ID`, `TERMINATOR_UUID`). Fixes flaky redraw‑rate tests in Ghostty, Tilix, Terminator and screen/tmux contexts. |
| **#6393** | `feat: source navigation echoes and guarded fork‑prefix inheritance` | **OPEN** | Preserves index‑free source‑navigation echoes and bounded tool‑output work while adapting to the current Engine and authority model. Retains original contributor commits for history integrity. |
| **#6968** | `0.10.2 candidate: endpoint‑scoped catalog, tiered pricing and release verification` | **OPEN** | Prepares the v0.10.2 release envelope: endpoint‑scoped catalog, tiered pricing, and automated verification scripts. Currently at **thirteen contributor PRs merged as their own PRs**. |
| **#6965** | `0.10.2 slices: fail‑closed tier pricing (#6396), build‑lock bypass fix, then Windows owner recovery (#6915)` | **OPEN** | Carries the founder’s v0.10.2 decisions in three focused commits: secure tier pricing, a build‑lock bypass guard, and Windows owner‑recovery logic. The third slice is work‑in‑progress, already pushed to survive the handoff. |
| **#6873** | `chore(deps): security bumps 2026‑10‑06` | **OPEN** | Nightly security sweep: bumps `source‑map‑js` from 1.2.1 → 1.2.2, fixing GHSA‑68fv‑2mgg‑jv7q (event‑loop DoS). |
| **#6917** | `chore(deps): security bumps 2026‑10‑08` | **OPEN** | Bumps `next` in `web/` from 16.3.6 → 16.3.8, clearing the high‑severity advisory that blocked the `npm‑audit (web)` job. |
| **#6959** | `feat(api): read and write a workspace's project trust over the Runtime API` | **CLOSED** | Adds runtime‑API endpoints for inspecting and setting workspace trust verdicts, enabling non‑TUI clients (e.g., VS Code extensions) to query and record trust decisions. |
| **#6958** | `test(sessions): the picker search check no longer depends on the temp directory's name` | **CLOSED** | Removes the flaky dependency on `TempDir` naming in `session_control_acceptance` tests, stabilising CI on macOS. |
| **#6956** | `test(subagent): a git failure during worktree removal is not a test failure` | **CLOSED** | Refactors sub‑agent tests to tolerate expected git errors during worktree cleanup, eliminating false positives on Ubuntu runners. |

*All PR links are `codewhale-hq/Codewhale#6973`, … `#6956`.*

---

### 5. Feature‑Request Trends  
1. **Endpoint‑scoped catalogs & tiered pricing** – Multiple slices ( #6968, #6965 ) indicate a push toward per‑endpoint billing models and stricter “fail‑closed” defaults.  
2. **Portable config shapes** – The refactor in #6973 shows community desire for a configuration layer that is not tightly coupled to the TUI, enabling cross‑client (e.g., VS Code extension) parity.  
3. **Source‑navigation echoes & guarded fork‑prefix inheritance** – Ongoing work (#6393) suggests demand for richer, index‑free navigation cues and safer prefix inheritance for sub‑worktrees.  
4. **Runtime API trust management** – #6959 demonstrates a concrete need for programmatic workspace trust control beyond the terminal UI.  
5. **Improved mobile / Android support** – The Android SELinux issue (#6980) highlights a latent demand for full‑platform parity, especially for Termux users.  

Overall, the community is gravitating toward **modularity (shapes, endpoint scopes), security hardening (tier pricing, fail‑closed defaults), and cross‑client consistency (trust API, config portability).**

---

### 6. Developer Pain Points  
- **Android/Termux file permissions** – SELinux denies confined file opens, breaking journal, worktree, and tool operations. This is a blocking issue for mobile users and requires a SELinux policy tweak or path‑based workaround.  
- **Windows installation regression** – `cargo install codewhale‑cli --locked --force` stalls at v0.10.0, preventing users from accessing newer features and security fixes. Likely a crate publishing/lock problem that needs immediate investigation.  
- **Context‑compression crash** – Missing `choices` in the chat‑API response aborts session turnover, causing users to lose dialogue continuity. A critical runtime bug that needs a quick patch.  
- **Snapshot/git corruption on Windows** – The “git commit‑tree failed” error corrupts long‑running session snapshots, leading to data loss on Windows 11. A pressing stability issue for power users.  
- **Flaky CI tests** – Six terminal tests still depend on developer terminal environments (tmux, screen, Tilix, Terminator). While fixed in #6979, the remediation underscores the need for environment‑agnostic test harnesses.  

These recurring themes point to **platform‑specific edge cases, runtime API reliability, and CI/test robustness** as the top priorities for the next release cycle.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*