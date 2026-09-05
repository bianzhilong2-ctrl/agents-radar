# AI CLI Tools Community Digest 2026-09-05

> Generated: 2026-09-05 02:04 UTC | Tools covered: 9

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

**Cross‑Tool Comparison Report (AI CLI Ecosystem – 2026‑09‑05)**  

---

### 1. Ecosystem Overview  
The AI CLI landscape is maturing rapidly: most projects are shipping nightly or patch releases while simultaneously battling platform‑specific stability regressions (notably Windows desktop lock‑ups and macOS CPU spikes). A common thread is the push toward **greater extensibility** (plugin hooks, configurable system prompts, model‑discovery commands) and **hardened security/sandboxing** to satisfy enterprise adopters. At the same time, teams are investing in **observability and session management**—better telemetry, deterministic memory compaction, and reliable sub‑agent hand‑off—reflecting a shift from experimental prototypes to production‑grade tooling.

---

### 2. Activity Comparison  

| Tool | Hot Issues ≈* | Open PRs ≈† | Release Today? |
|------|--------------|------------|----------------|
| **Claude Code** | 10 | 2 | Yes (v2.1.261) |
| **OpenAI Codex** | 0 (no public tracker) | 0 | No |
| **Gemini CLI** | 9 | 10 | Yes (v0.60.0‑nightly) |
| **GitHub Copilot CLI** | 10 | 1 | Yes (v1.0.84‑1/0, v1.0.83‑5/‑) |
| **Kimi Code CLI** | 6 | 1 | No |
| **OpenCode** | 10 | 10 | Yes (v1.18.28 & v1.18.29) |
| **Pi** | 10 | 12 | Yes (v0.85.0) |
| **Qwen Code** | 10 | 10 | No |
| **DeepSeek TUI** | 10 | 10 | No |

\* Hot‑issue count taken from each digest’s “Hot Issues” section (representative of active community‑reported problems).  
† Open PR count taken from the “Key PR Progress” list (only PRs explicitly mentioned as open/merged today).  

---

### 3. Shared Feature Directions  

| Direction | Tools Expressing Need | Concrete Requests |
|-----------|----------------------|-------------------|
| **Plugin / Hook extensibility** | Claude Code, Gemini CLI, OpenCode, Pi, Qwen Code | Function‑hook system (Claude #91870), extension consent & env‑var sanitization (Gemini #28863), provider‑agnostic hook API (Pi #9175‑#9173), pluggable middleware for thinking output (Qwen #10872) |
| **CLI model discovery / listing** | Claude Code, Gemini CLI, Copilot CLI, OpenCode | Stand‑alone `claude model list` (Claude), explicit model pinning without silent rewrite (Gemini #29217), per‑agent `effort` flag (Copilot #2904), OAuth `client_credentials` for programmatic model access (OpenCode #47423) |
| **Output / token‑size configurability** | Claude Code, Gemini CLI, Qwen Code, DeepSeek TUI | `bashOutputMaxChars` / `taskOutputMaxChars` (Claude), custom reasoning‑only retry budgets (DeepSeek #5867), declarative reasoning capability registration (Qwen #10999) |
| **Sandbox & security hardening** | Gemini CLI, Copilot CLI, Pi, OpenCode | Workspace path‑boundary checks & symlink resolution (Gemini #29170), macOS/Linux network‑isolated sandbox (Copilot v1.0.83‑5), pi‑server dependency declaration (Pi #9170), provider OAuth client‑credentials flow (OpenCode #47423) |
| **Session persistence & sub‑agent reliability** | Claude Code, Gemini CLI, OpenCode, Qwen Code | Fix orphaned Windows process lock (Claude #42776), sub‑agent recovery after MAX_TURNS (Gemini #22323), session‑ID header for tracking (OpenCode #47423), background Agent View sessions (Qwen #10943/#10949) |
| **UI/UX ergonomics & accessibility** | Claude Code, Copilot CLI, Pi, Qwen Code | Disable sound effects (Claude #91237), system‑prompt customization (Copilot #2627), Alt‑accelerated fullscreen scroll (Pi #9166), IME‑friendly input on macOS+tmux (Qwen #8177) |
| **Performance / resource stability** | Claude Code, Gemini CLI, OpenCode, Pi, Qwen Code | Windows auto‑update lock‑ups (Claude #42776), shell command “Waiting input” hangs (Gemini #25166), high CPU usage & unbounded DB growth (OpenCode #30086/#33356), macOS long‑session CPU/memory leak (Pi #7730), CI import‑cost bottleneck (Qwen #10908) |
| **Telemetry & observability** | Gemini CLI, OpenCode, DeepSeek TUI | `x-opencode-session` header for OpenCode integration (DeepSeek #5868), OTLP exporter config & SDK‑scoped headers (OpenCode #47393), deterministic secret redaction before memory ingestion (Gemini #26525) |

---

### 4. Differentiation Analysis  

| Tool | Primary Focus / Target Users | Technical Distinction |
|------|-----------------------------|-----------------------|
| **Claude Code** | Enterprise developers needing reliable desktop AI pair‑programming; heavy emphasis on Windows/macOS stability and organization‑policy transparency. | Rich `/status` diagnostics, extensible plugin hooks, granular output‑size knobs. |
| **OpenAI Codex** (no public tracker) | Implied internal/OpenAI‑only usage; safety‑only note suggests limited community exposure. | Not applicable for community‑driven feature analysis. |
| **Gemini CLI** | Power users & extension authors who value sandbox safety, deterministic tooling, and deep MCP integration. | Filesystem‑boundary hardening, env‑var sanitization for extensions, model‑selection pinning fixes. |
| **GitHub Copilot CLI** | Developers tightly coupled to GitHub ecosystem; focus on sandbox policies, session‑resume UX, and per‑agent reasoning control. | Live Windows task‑bar hover cards, configurable system prompt, per‑agent `effort` flag. |
| **Kimi Code CLI** | Users of Moonshot’s Kimi models who need reliable MCP connectivity and basic editing UX. | Strong focus on MCP timeout handling, skill‑management commands, paste/key‑binding fixes on Windows Terminal. |
| **OpenCode** | Enterprise‑scale adopters needing robust OAuth, telemetry, and large‑session handling. | Provider‑agnostic OAuth `client_credentials`, transcript‑recall indexing, parallel plugin loading, OTLP telemetry. |
| **Pi** | Hackers & hobbyists experimenting with multiple AI providers; emphasis on provider agnosticism and cross‑platform UI. | First‑class Meta & OrcaRouter providers, clipboard‑image paste on macOS, DurableObject SQLite session backend. |
| **Qwen Code** | Chinese‑language developers and teams needing extensible TUI, background agents, and export‑friendly transcripts. | Migration to OpenTUI, background Agent View (`qwen --bg`), pluggable middleware for thinking output, session‑ID header templating. |
| **DeepSeek TUI** | Researchers & power users running local LLMs (Ollama, etc.) who want skill‑learning, allocator flexibility, and clean session transcripts. | Automatic skill extraction from dialog, configurable allocator (`rusty_alloc`), `todo_write` deduplication, session‑header propagation to OpenCode. |

---

### 5. Community Momentum & Maturity  

- **Highest activity (issues + PRs + frequent releases):** Gemini CLI, OpenCode, Pi, Qwen Code, Claude Code. These projects show rapid iteration (nightly releases, >10 open PRs) and vigorous community discussion (↑👍 counts, detailed comment threads).  
- **Moderate activity:** GitHub Copilot CLI (steady releases, moderate issue volume) and DeepSeek TUI (steady PR flow but fewer releases).  
- **Lower activity:** Kimi Code CLI (fewer hot issues and PRs, no recent release) and OpenAI Codex (no public tracker).  

Maturity correlates with the presence of **enterprise‑grade features** (OAuth client_credentials, telemetry, sandbox hardening) – most evident in OpenCode, Gemini CLI, and Claude Code. Projects still centered on core UX (Kimi Code, DeepSeek TUI) are evolving but lack the same scale of institutional‑focused work.

---

### 6. Trend Signals (What the Community Is Telling Us)  

1. **Extensibility as a First‑Class Concern** – Hook‑based plugin systems, configurable system prompts, and per‑agent reasoning flags are repeatedly requested across five tools. Expect a shift toward **manifest‑driven extension manifests** (similar to VS Code’s `package.json contributes`).  
2. **Transparent Model & Policy Governance** – Users want explicit model listing, the ability to pin specific versions without silent rewrites, and clear diagnostics when organization policies block access. This will drive **standardized model‑discovery CLI verbs** and **policy‑audit logs**.  
3. **Sandbox Hardening & Supply‑Chain Safety** – Extension consent prompts, workspace‑boundary checks, and isolated settings directories reflect a growing demand for **zero‑trust execution environments** in AI‑assisted coding.  
4. **Session & Memory Determ

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

User Safety: safe

---

# Claude Code Community Digest — 2026-09-05

## Today's Highlights
Claude Code v2.1.261 introduces enhanced output limits and clearer organizational policy diagnostics in `/status` and `claude doctor`. Windows desktop stability remains the dominant concern, with multiple high-comment issues around auto-update process locks and session resumption failures. Community interest is surging around extensibility, with new proposals for plugin function hooks and CLI-accessible model listing.

## Releases
*   **v2.1.261** ([Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.261)):  
    *   Added an "Organization policy" line to `/status` and `claude doctor` explaining why an organization’s policy could not be loaded (e.g., proxy endpoint filtering).
    *   Introduced `bashOutputMaxChars` and `taskOutputMaxChars` settings to allow raising command and background task output size limits.

## Hot Issues
1.  **#42776 — [Bug] Windows Desktop Fails to Relaunch Due to Orphaned Process File Lock** ([Link](https://github.com/anthropics/claude-code/issues/42776))  
    *   Long-running issue causing relaunch failures on Windows post-update; 159 comments, 75 👍 indicate significant platform instability.
2.  **#91870 — [Enhancement] Function Hooks – Make Plugins 10x More Powerful** ([Link](https://github.com/anthropics/claude-code/issues/91870))  
    *   Proposes a side-effect-safe, composable hook system inspired by Express/Koa for deep plugin integration; strong developer enthusiasm (99 comments, 62 👍).
3.  **#91650 — [Bug] Bypass Permissions Prompts on Absolute CD Targets with Deny Rules (Windows Git Bash)** ([Link](https://github.com/anthropics/claude-code/issues/91650))  
    *   Regression affecting permission auto-bypass mode when `Read()` deny rules exist; 56 👍 signal friction for automation workflows.
4.  **#91683 — [Bug] Bypass Permissions Prompts on `cd DIR && grep …` with Deny Rules (Regression)** ([Link](https://github.com/anthropics/claude-code/issues/91683))  
    *   Companion regression report to #91650, confirming cross-platform impact across Windows/macOS; underscores fragile permission model behavior.
5.  **#81658 — [Bug] Cross-Platform Sync Failure Causing Chat/Session Loss** ([Link](https://github.com/anthropics/claude-code/issues/81658))  
    *   Suspected server-side incident disrupting session continuity between Desktop/Web/Android clients; low upvote count but persistent concern.
6.  **#89680 — [Bug] Stealth Update Leaves Orphaned Processes Holding Old AppX Container** ([Link](https://github.com/anthropics/claude-code/issues/89680))  
    *   Describes silent auto-update failures locking new versions out until reboot; reinforces #42776 pattern of Windows update unreliability.
7.  **#91488 — [Bug] Fable 5.1 Unreachable Despite Plan Allocation** ([Link](https://github.com/anthropics/claude-code/issues/91488))  
    *   Reports misattribution of plan-included model access, blocking usage credits flow; highlights auth and billing UX confusion.
8.  **#92016 — [Bug] Desktop Auto-Denies CLI sendMessage Tool Breaking Subagent Resumption** ([Link](https://github.com/anthropics/claude-code/issues/92016))  
    *   macOS regression preventing cross-session messaging via native CLI tools; signals gaps in hybrid desktop-agent coordination.
9.  **#90109 — [Bug] Desktop App Self-SIGKILLs Workers Without Endpoint Security Present** ([Link](https://github.com/anthropics/claude-code/issues/90109))  
    *   Misleading diagnostics attributing internal resource cleanup to endpoint protection; undermines trust in local runtime health checks.
10. **#91237 — [Feature Request] Disable Sound Effects in Desktop App** ([Link](https://github.com/anthropics/claude-code/issues/91237))  
    *   Minor UX polish request closed as invalid; reflects broader underreporting of accessibility preferences in UI settings.

## Key PR Progress
1.  **#87079 — Fix Security Guidance: Match Zero-Depth Paths in Glob Patterns** ([Link](https://github.com/anthropics/claude-code/pull/87079))  
    *   Addresses incorrect glob matching logic where `**` silently excluded top-level files from security policies; critical correctness fix for rule enforcement accuracy.
2.  **#61691 — Add Diagnostic Script for GitHub Connector Showing 'Connected' But No Tools** ([Link](https://github.com/anthropics/claude-code/pull/61691))  
    *   Introduces PowerShell-based diagnostic utility for recurring GitHub MCP connector tool visibility bug; improves troubleshooting for affected users.
3.  *(No other active PRs detected within scope)*

## Feature Request Trends
*   **Plugin Extensibility**: Demand rising for richer plugin systems—particularly function hooks enabling safe modifications through parameterized state tracking.
*   **CLI Model Discovery**: Pushback against requirement of interactive `/model` usage motivates standalone `claude model list` command for scripting.
*   **Custom Output Limits**: Growing need for granular control over bash/task output truncation sizes to support verbose execution contexts.
*   **Auto-Memory Configurability**: Requests to customize MEMORY.md compaction thresholds reflect evolving large-project memory management expectations.
*   **Accessibility Settings**: Low-effort UI customizations (sound toggles, fullscreen math rendering) gaining niche traction among power users.

## Developer Pain Points
*   **Windows Desktop Instability**: Persistent auto-update conflicts, orphaned processes, and service restarts disrupting active sessions dominate bug discussions.
*   **Permission Model Fragility**: Recent regressions in bypassPermissions mode expose inconsistent handling of deny rules and compound shell commands.
*   **Subagent Messaging Gaps**: Inconsistent tool registration in scheduled or remote-controlled sessions breaks agent chaining capabilities.
*   **Session Continuity Risks**: Sync failures and unpruned stale pairings degrade reliability of multi-device collaboration features.
*   **Opaque Policy Enforcement**: Lack of transparency in organization-level restrictions hampers self-service troubleshooting for enterprise developers.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-05

---

## 1. Today's Highlights

The `gemini-cli` project shipped the nightly **v0.60.0-nightly.20260905.g85aca163f**, featuring security-focused fixes around extension consent prompts and workspace path boundary enforcement. Several high-impact PRs landed or progressed in parallel, including sandbox filesystem hardening, shell execution re-entrancy guards, and a fix that prevents explicit `gemini-2.5-flash` model selections from being silently rewritten. Meanwhile, a cluster of subagent and browser-agent bugs continues to draw community attention heading into the weekend.

---

## 2. Releases

### v0.60.0-nightly.20260905.g85aca163f

**Changes:**
- **fix(extensions)**: Prompt for user consent on environment changes and sanitize runtime-altering environment variables injected into MCP server processes. Addresses unauthorized env-var injection during extension updates.
- **fix(core)**: Enhanced workspace path boundary checks and symlink resolution across command safety heuristics and file discovery services on POSIX and Windows systems.

🔗 [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260905.g85aca163f)

---

## 3. Hot Issues

| # | Title | Priority | Comments | Why It Matters |
|---|-------|----------|----------|----------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reports GOAL success, hiding interruption | P1 | 13 | The `codecode_investigator` subagent falsely reports success when hitting turn limits, masking real failures and corrupting evaluation data. Top community concern this cycle. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with "Waiting input" after command completes | P1 | 4 (3 👍) | Repeated hangs after simple CLI commands — the shell is already done but Gemini CLI waits forever. High frustration for daily users. |
| [#28037](https://github.com/google-gemini/gemini-cli/issues/28037) | `google_web_search` loops indefinitely when no relevant results found | P2 | 8 | An infinite retry loop with no stopping condition wastes tokens and API quota. Reported with Korean-language queries. |
| [#27894](https://github.com/google-gemini/gemini-cli/issues/27894) | Extension system failure on Sandbox EACCES | P2 | 7 | Extension loading breaks entirely when `.env` files are unreadable due to sandbox permissions, even when `advanced.ignoreLocalEnv` is set. |
| [#23195](https://github.com/google-gemini/gemini-cli/issues/23195) | `isFunctionCall` and `isFunctionResponse` return true for empty `parts` arrays | P2 | 7 | Classic JS `Array.every([])` pitfall causes misclassification of model messages with empty parts, leading to incorrect tool-call routing. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, and mapping | P2 | 7 | An EPIC tracking whether AST-aware tools could reduce token noise and improve precision of `codebase_investigator` and similar tools. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | P2 | 5 | Auto Memory sends raw transcript content to extraction models before redacting secrets — a security concern. Multiple related issues filed by @SandyTao520. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | P2 | 6 | Anecdotal but widely shared: custom skills and sub-agents are only invoked on explicit instruction, not autonomously during related tasks. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`) | P2 | 3 | The Browser Agent bypasses global/project-level configuration overrides, making fine-grained control impossible. |
| [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | Surface or quarantine invalid Auto Memory inbox patches | P2 | 3 | Invalid patches (malformed, escaping allowed root) silently skip but still pollute inbox summaries — affects memory quality. |

---

## 4. Key PR Progress

| # | Title | Status | Significance |
|---|-------|--------|--------------|
| [#29218](https://github.com/google-gemini/gemini-cli/pull/29218) | Bump version to 0.60.0-nightly.20260905 | Open | Automated version bump for today's nightly release. |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | Extensions: consent prompts + env var sanitization | CLOSED ✅ | Merged into tonight's release. Fixes unauthorized environment variable injection into MCP servers during extension updates. |
| [#29170](https://github.com/google-gemini/gemini-cli/pull/29170) | Enhance workspace path boundary checks and symlink resolution | CLOSED ✅ | Added `isPathEscapingWorkspace` checks for POSIX and Windows across command safety, file discovery, and directory listing. |
| [#29215](https://github.com/google-gemini/gemini-cli/pull/29215) | Enforce envelope metadata provenance for untrusted tool outputs | Open | Updates core system prompt to derive author identity and status exclusively from verified envelope properties — critical for MCP security. |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | Harden filesystem boundaries and isolate runtime state | Open | Replaces host directory mounts with sanitized read-only config files in sandbox containers; resolves symlinks during path checks. |
| [#29216](https://github.com/google-gemini/gemini-cli/pull/29216) | Isolate settings directory in sandbox containers | Open | Prevents `~/.gemini` host credentials (OAuth tokens, auth data) from leaking into Docker/Podman sandbox environments. |
| [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) | Don't rewrite explicit `gemini-2.5-flash` model selection | Open | Fixes `isFlashModel()` using overly broad `.endsWith('flash')` that silently overrode explicit `--model gemini-2.5-flash` pins. |
| [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | Route `read_file` content through `FileSystemService` | Open | Aligns `read_file` with `write_file`/`replace` by routing I/O through the injected `FileSystemService`, enabling proper filesystem abstraction over ACP. |
| [#29114](https://github.com/google-gemini/gemini-cli/pull/29114) | Prevent duplicate `handleExit` on spawn failure | Open | Adds re-entrancy guard in `shellExecutionService` — Node.js fires both `error` and `close` events, causing double cleanup. |
| [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | Mitigate NTFS 8.3 short name (SFN) path traversal | Open | Handles Windows short names (`git~1`, `node_m~1`) in path normalization and the `AllowedPathChecker` safety engine to block path traversal attacks. |

---

## 5. Feature Request Trends

From the issue tracker, three dominant feature directions are emerging:

1. **AST-Aware Tooling**: Multiple issues (#22745, #22746) request AST-aware file reads, search, and codebase mapping to reduce token noise and improve precision of investigative agents. Tools like *tilth* and *glyph* are mentioned as potential starting points.

2. **Subagent Transparency & Control**: Requests for subagent trajectories to be visible via `/chat share` (#22598), better utilization of skills and sub-agents (#21968), and browser agent session takeover/lock recovery (#22232) indicate a community wanting more visibility into and control over agent delegation.

3. **Sandbox & Security Hardening**: A cluster of PRs and issues (#29214, #29216, #28863, #26525, #27894) points to strong demand for hardened sandbox boundaries, deterministic secret redaction, and permission isolation — especially for containerized and enterprise use cases.

---

## 6. Developer Pain Points

Recurring frustrations identified across the issue tracker:

- **Shell Execution Instability**: Issue #25166 (4 comments, 3 👍) and #25828 highlight that shell commands hang after completion or cause session exits — particularly on non-standard hardware (Raspberry Pi Zero) and persistent sessions.

- **Browser Agent Fragility**: Three separate issues (#22232, #21983, #22267) detail browser subagent failures on Wayland, lock recovery gaps, and ignored configuration overrides — making the browser agent unreliable for production workflows.

- **Extension System Robustness**: The extension system fails silently or catastrophically when encountering unreadable `.env` files (#27894) or unauthorized environment variables (#28863), undermining trust in the extension ecosystem.

- **Auto Memory Quality**: A trio of issues (#26525, #26523, #26522, #26516) from @SandyTao520 reveals systemic problems with Auto Memory: low-signal sessions retried indefinitely, invalid patches skipped silently, and insufficient secret redaction before model context ingestion.

- **Model Configuration Surprises**: Issue #29217 and earlier reports show that model auto-upgrade logic (`isFlashModel()`) can silently override explicit user model selections — a trust-breaking behavior for developers pinning specific models.

---

*Generated from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) data as of 2026-09-05.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI – Daily Digest (2026‑09‑05)**  

---

### 1. Today’s Highlights  
- **v1.0.84‑1** ships **GPT‑6 Astra** support and adds a new “disable‑sandbox‑for‑rest‑of‑session” toggle, giving users tighter control over managed sandboxes.  
- **v1.0.83‑5** hardened macOS/Linux sandboxing (commands can no longer reach local services) and introduced **live hover status cards** for Copilot sessions on the Windows 11 task‑bar.  
- Community activity spiked around **custom‑agent reasoning**, **system‑prompt configuration**, and a **MCP compatibility bug** that still blocks stdio servers.  

---

### 2. Releases (last 24 h)  
| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.84‑1** | 2026‑09‑04 | Added support for **GPT‑6 Astra**; managed sandbox sessions can be disabled for the rest of the session via an approved bypass prompt. |
| **v1.0.84‑0** | 2026‑09‑04 | Same‑day release with the sandbox‑disable UX (mirrors v1.0.84‑1’s feature set). |
| **v1.0.83‑5** | 2026‑09‑04 | *Improved* sandbox isolation on macOS/Linux (no network access, blocks self‑started servers on 127.0.0.1).  <br> Added **Windows 11 task‑bar live hover cards** for running sessions. |
| **v1.0.83** | 2026‑09‑04 | Introduced **CIMD support** for MCP OAuth sign‑in and let custom agents list several models in a `model` front‑matter array. |
| **v1.0.82** | – | Noted for **BYOK prompt‑caching regression** (see hot issue #4720). |

*All releases are available on the [GitHub/copilot-cli releases page](https://github.com/github/copilot-cli/releases).*  

---

### 3. Hot Issues (10 noteworthy)  

| # | Title & Area | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#2904** | **[area:agents, area:models] Custom Agent YAML Frontmatter Should Support Reasoning Effort** | Agents can pin a model but cannot set `effort` per‑agent; users are forced to pass `--effort` globally, limiting fine‑grained control. | **23 👍 / 8 comments** – high upvotes, active discussion. |
| **#2627** | **[area:context-memory, area:configuration] Feature Request: Configurable system prompt – allow users to slim down fixed token overhead** | System‑prompt bloat (~20 k tokens) is a major cost/ latency hit; a configurable prompt would let users trim or replace the default. | **19 👍 / 4 comments** – strong demand. |
| **#232** | **[area:configuration] Add System Prompt parameter for Copilot‑CLI** | No way to inject repository‑wide instructions without a `.copilot` file; a `--system-prompt` flag would give global, CLI‑level control. | **10 👍 / 5 comments** – popular feature request. |
| **#4525** | **[area:mcp] 1.0.81‑1 sends legacy `initialize` after successful modern `server/discover`, causing -32022** | Breaks compatibility with Python MCP SDK 2.0.0 dual‑era runners; users see `-32022` errors after upgrading. | **3 👍 / 6 comments** – bug with enough traction. |
| **#4710** | **[area:sessions, area:tools] Runaway copilot‑file‑search thread consumes CPU and unbounded disk while session is idle** | An internal search thread never exits, pinning a CPU core and flooding `~/.copilot/logs` with diagnostics; directly impacts performance on long‑running sessions. | **0 👍 / 1 comment** – critical performance bug. |
| **#4537** | **[area:permissions] ACP mode auto‑approves tool calls again — session/request_permission not sent since 1.0.81‑1 (regression of #845)** | In `--acp` mode, shell commands now execute without prompting the user, removing a key consent checkpoint and breaking existing workflows. | **2 👍 / 1 comment** – security‑related regression. |
| **#4722** | **[area:terminal-rendering] Leading underscores (e.g., _test) vanish in Copilot Chat bubbles and output due to Markdown parsing of unclosed emphasis** | Underscores at line‑starts are stripped from user messages and AI output, breaking code snippets and variable names; random but frustrating. | **0 👍 / 1 comment** – bug with user‑visible impact. |
| **#4720** | **[triage] Bug: Copilot CLI 1.0.82 BYOK silently disables prompt caching (~5× cost)** | BYOK sessions send chat requests without `promptCacheTTL` headers; every turn re‑sends the full context, exploding token costs. | **0 👍 / 1 comment** – high‑impact cost regression. |
| **#4645** | **[area:sessions, area:models] `session.resume` silently ignores the `model` parameter; the persisted session model wins** | When you try to resume a session with a different model, the CLI silently falls back to the persisted model, leaving users with stale behavior and no warning. | **0 👍 / 0 comments** – low visibility but critical for model‑switch workflows. |
| **#4328** | **[area:input-keyboard, area:platform-windows] Ctrl+H (delete previous character) is misinterpreted as Ctrl+Backspace (delete word) under WSL2 due to WT_SESSION leaking from Windows Terminal** | A documented shortcut breaks under WSL2, causing unexpected word deletion and frustrating power‑users. | **0 👍 / 7 comments** – highest comment count among input bugs. |

*All issue links: https://github.com/github/copilot-cli/issues/<number>.*  

---

### 4. Key PR Progress (last 24 h)  
- **#3771** – *Initial project setup* (limenpchuolto112‑creator) – bootstrap of the repository structure; no functional changes yet.  
*No other pull‑request activity was captured in the feed for today.*  

---

### 5. Feature‑Request Trends (derived from open issues)  

| Trend | Representative Issues | Community signal |
|-------|----------------------|------------------|
| **System‑prompt customization** | #232, #2627 | Combined >30 upvotes, multiple authors |
| **Per‑agent reasoning control** | #2904 | 23 upvotes, high comment density |
| **Configurable compaction / token budgeting** | #1688, #4724 | 5 upvotes + dedicated triage for idle‑gap compaction |
| **Input‑enhancements** | #2644 (Shift+arrow selection), #4328 (Ctrl+H fix), #3194 (mouse‑scroll fix) | 2‑7 comments each, reflecting recurring UI ergonomics requests |
| **Security / consent** | #4322 (Trusted Access), #4537 (ACP regression) | 2‑3 upvotes, focus on safety checkpoints |
| **Performance / resource management** | #4710 (file‑search thread), #4699 (heap OOM on resume), #4725 (JS heap crash) | Low upvotes but high impact; triage‑tagged for urgency |

Overall, the community is pushing for **greater configurability** (system prompts, reasoning, compaction) and **stabilization** of resource handling and input behavior.  

---

### 6. Developer Pain Points (recurring frustrations)  

1. **Memory / CPU spikes** – Heap OOM on long `--resume` sessions, runaway `copilot‑file‑search` threads, and frequent JavaScript heap crashes.  
2. **Sandbox & security regressions** – Recent sandbox hardening broke MCP compatibility (#4525) and ACP mode no longer prompts for permissions (#4537).  
3. **Input quirks** – Ctrl+H misinterpretation in WSL2, mouse‑scroll hijacking in Android Studio terminals, missing Shift+arrow text selection, and underscore stripping in chat output.  
4. **Prompt‑caching cost leakage** – BYOK mode silently disables caching, inflating token usage (~5×).  
5. **Session management quirks** – `session.resume` ignores explicit `model` parameter, and the Changes tab in the desktop app fails to refresh after PR merges.  
6. **Plugin / TUI reliability** – Disabled skills in `/plugins` TUI are indistinguishable and not persisted (#4471); extension reloads can dispose session hooks (#4590).  

These pain points are repeatedly mentioned in triage and open issues, indicating **high‑impact, low‑visibility bugs** that should be prioritized for the next stabilization release.  

---  

*Digest compiled from the GitHub/copilot‑cli issue tracker and release feed (2026‑09‑05).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Today’s Highlights**  
The Kimi CLI team closed several high‑impact bugs (MCP timeout, sub‑agent persistence, and key‑binding paste) while a new PR fixes an inaccurate replacement‑count bug in `StrReplaceFile`. No new releases were published.

**Releases** – *None*  

**Hot Issues**  

| # | Title & Link | Why It Matters | Community Reaction |
|---|--------------|----------------|--------------------|
| #1316 | **[CLOSED] MCP timeout causes kimi‑cli to be unavailable** – <https://github.com/MoonshotAI/kimi-cli/issues/1316> | A timeout on any MCP connection crashes the whole CLI, breaking workflow continuity. | Reported by Caius1L; no 👍 but the issue is critical for stability. |
| #2634 | **[OPEN] Paste/key‑binding failure in Windows Terminal (PowerShell)** – <https://github.com/MoonshotAI/kimi-cli/issues/2634> | Users cannot use `Ctrl+V` to paste in the terminal, hindering productivity on Windows. | Freshly opened (2026‑09‑04); no reactions yet, but high‑visibility for Windows users. |
| #1320 | **[CLOSED] Smart arrow‑key navigation for multiline input** – <https://github.com/MoonshotAI/kimi-cli/issues/1320> | Arrow keys currently ignore cursor position in multiline text, forcing users to navigate history instead of editing. | Closed after discussion; improves UX for multiline editing. |
| #1319 | **[CLOSED] Better local skills operation management** – <https://github.com/MoonshotAI/kimi-cli/issues/1319> | Lack of unified commands (`skills list`, `skills rm`, version view) makes managing custom skills cumbersome. | Closed; community expressed need for clearer skill lifecycle commands. |
| #1315 | **[CLOSED] Subagents keep running after hitting ESC** – <https://github.com/MoonshotAI/kimi-cli/issues/1315> | Sub‑tasks continue executing even after user abort, risking stray processes and resource waste. | Closed; highlights a reliability concern for long‑running tasks. |
| #1313 | **[CLOSED] Add Hooks System for Notifications and Lifecycle Events** – <https://github.com/MoonshotAI/kimi-cli/issues/1313> | Absence of a hook mechanism forces users to poll or manually detect agent status; a hooks API would enable proactive notifications. | Received 3 👍, indicating strong community interest. |
| #2524 (PR) | **[OPEN] fix(tools): count StrReplaceFile replacements against the running content** – <https://github.com/MoonshotAI/kimi-cli/pull/2524> | The current implementation counts replacements against the original file, leading to incorrect reports when edits are chained. | Addresses a silent data‑integrity bug; no 👍 yet but directly impacts tooling reliability. |

**Key PR Progress**  

- **PR #2524 – “fix(tools): count StrReplaceFile replacements against the running content”** (<https://github.com/MoonshotAI/kimi-cli/pull/2524>)  
  - **What it does:** Aligns the reported replacement count with the actual in‑memory content, fixing a bug where chained edits were ignored.  
  - **Why it matters:** Guarantees accurate audit logs and prevents misleading statistics when `StrReplaceFile` is used in pipelines.  
  - **Status:** Open; awaiting review and merge.

**Feature Request Trends**  

- **Enhanced navigation & editing UX** – Smart arrow‑key handling for multiline input (Issue #1320) and better paste/key‑binding support (Issue #2634).  
- **Unified skill management** – Requests for `skills list`, `skills rm`, version inspection, and consistent storage locations (Issue #1319).  
- **Lifecycle & notification hooks** – A generic hooks system to emit events (e.g., agent attention needed, task start/end) for better observability (Issue #1313).  
- **Robust MCP connectivity** – Implicit handling of MCP timeouts to prevent CLI crashes (Issue #1316).  

**Developer Pain Points**  

- **MCP timeout crashes** – Any stalled MCP connection brings down the entire CLI, forcing manual restarts.  
- **Inconsistent key‑binding behavior** – Paste (`Ctrl+V`) and other shortcuts fail in Windows Terminal/PowerShell, reducing workflow efficiency.  
- **Sub‑agent lifecycle leakage** – Sub‑tasks persist after `ESC`, consuming resources and causing ambiguous state.  
- **Opaque skill handling** – No built‑in commands to list, inspect, or delete user‑created skills; storage paths are scattered.  
- **Missing hooks/notification API** – Lack of event hooks makes it hard to react to long‑running agent states or external signals.  
- **Inaccurate replacement counting** – `StrReplaceFile` reports counts based on the original file, leading to misleading audit data.  

*All links point to the original GitHub records for further reference.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-05

---

## 1. Today's Highlights

OpenCode pushed two patch releases (v1.18.28 and v1.18.29) addressing a critical GPT-6 Astra model filtering bug in the OpenAI Codex OAuth flow, while a wave of community-contributed core fixes landed targeting markdown rendering, command argument handling, and glob matching. Meanwhile, performance and stability concerns dominate community discourse — high CPU usage, unbounded database growth, and auto-compaction loops remain the most pressing open issues.

---

## 2. Releases

### v1.18.29 (latest)
- **Core Bugfixes:** Fixed Codex OAuth model filtering to recognize integer GPT versions like `gpt-6` and `gpt-6-astra`, resolving a regression where OpenAI subscription users couldn't see certain models.
- **Docs:** Fixed bold rendering in Chinese documentation (`docs(zh)`).
- **Contributors:** @Peter267

### v1.18.28
- **Core Improvement:** Session ID now sent as GitHub Copilot interaction header for improved request tracking.
- **Desktop Bugfixes:** Fixed device authentication using the desktop client ID; increased "open in app" icon size for better visibility.

---

## 3. Hot Issues

1. **[#30086](https://github.com/anomalyco/opencode/issues/30086) — High CPU usage in newer versions** (50 comments, 26 👍)
   The most-discussed issue. Users report dramatic CPU spikes making multi-session usage impossible. Suspected to be tied to recent changes around this time period. Community is actively investigating root cause.

2. **[#33356](https://github.com/anomalyco/opencode/issues/33356) — Unbounded `event` table growth in SQLite** (27 comments, 9 👍)
   Long-running instances hit 13GB+ on `opencode.db` due to `message.updated.1` snapshots accumulating with no retention or compaction. A serious operational concern for production users.

3. **[#30680](https://github.com/anomalyco/opencode/issues/30680) — Auto-compaction loop consuming tokens endlessly** (17 comments)
   OpenCode enters an infinite auto-compaction loop even in empty folders, eventually halting all response generation. A critical reliability bug affecting new users immediately.

4. **[#47363](https://github.com/anomalyco/opencode/issues/47363) — GPT-6 Astra missing from Codex OAuth model picker** (3 comments, 20 👍)
   `gpt-6-astra` appears in the official Codex client but is absent from OpenCode's filtered model list. Directly addressed by PR #47404 and release v1.18.29.

5. **[#46881](https://github.com/anomalyco/opencode/issues/46881) — Standalone signed-empty reasoning turns replayed** (4 comments)
   V2 replays completed assistant turns containing only empty reasoning plus provider metadata, wasting context and potentially distorting conversation flow.

6. **[#47350](https://github.com/anomalyco/opencode/issues/47350) — Shell tool hangs on background processes** (3 comments)
   Shell tool treats EOF on stdout/stderr as completion rather than waiting for child process exit, causing indefinite hangs when commands spawn background processes.

7. **[#47368](https://github.com/anomalyco/opencode/issues/47368) — Remote MCP regression in v1.18.28** (3 comments)
   Previously working remote MCP servers (KitWright/Unity on `127.0.0.1:9155`) broke after updating from v1.18.27 to v1.18.28. A notable regression in the latest release.

8. **[#46595](https://github.com/anomalyco/opencode/issues/46595) — Bedrock output limit never sent** (3 comments, 1 👍)
   V2 fails to send `inferenceConfig.maxTokens` to Bedrock Converse even when configured (`limit.output: 128000`), causing long reasoning turns to truncate at 4096 tokens.

9. **[#39822](https://github.com/anomalyco/opencode/issues/39822) — Go subscription pricing mismatch** (4 comments)
   Users report that the $12/5-hour allowance is consumed disproportionately — only $0.35 of API usage burning 11% of quota. Billing accuracy concerns.

10. **[#47405](https://github.com/anomalyco/opencode/issues/47405) — v2 filters out gpt-6-astra from OpenAI OAuth** (2 comments)
    Confirms the v2 (beta) pipeline also suffers from the GPT-6 Astra filtering issue, extending the scope beyond v1.

---

## 4. Key PR Progress

1. **[#47404](https://github.com/anomalyco/opencode/pull/47404) — Fix Codex GPT version comparison** (CLOSED)
   Ports GPT version filter fixes from `dev`. Corrects regex from `/^gpt-(\d+\.\d+)/` to support integer versions like `gpt-6-astra` and fixes `parseFloat` misranking (`gpt-5.10` → 5.1 < 5.4). **Directly resolves issues #47363 and #47405.**

2. **[#47423](https://github.com/anomalyco/opencode/pull/47423) — Support provider OAuth client credentials** (NEW)
   Adds opt-in OAuth `client_credentials` auth for configured providers with Basic/POST authentication. Tokens cached in memory only, renewed on expiry, with single retry on `401`/`invalid_token`. No browser or refresh token flow.

3. **[#47392](https://github.com/anomalyco/opencode/pull/47392) — LSP idle TTL and LRU eviction** (CLOSED)
   Adds idle timeout and LRU eviction policy for LSP clients, preventing unbounded client growth and automatic cleanup.

4. **[#47391](https://github.com/anomalyco/opencode/pull/47391) — Parallel internal plugin loading** (CLOSED)
   Refactors plugin loading to run in parallel via `Effect.forEach` with unbounded concurrency — zero functional change, pure performance improvement.

5. **[#46850](https://github.com/anomalyco/opencode/pull/46850) — Transcript recall index for semantic session history** (NEW)
   Implements a local transcript embedding index enabling semantic cross-session search. Addresses issue #41354. Major feature for power users managing many sessions.

6. **[#47424](https://github.com/anomalyco/opencode/pull/47424) — Increase vertical tabs minimum width** (NEW)
   Raises sidebar minimum width from 130px to 140px to prevent wrapping of the "New session" label.

7. **[#47414](https://github.com/anomalyco/opencode/pull/47414) — Preserve legacy markdown agent variants** (NEW)
   Fixes bug where `model: example/chat` with `variant: high` dropped the variant. Restores legacy `temperature` behavior.

8. **[#47412](https://github.com/anomalyco/opencode/pull/47412) — Preserve literal command arguments** (NEW)
   Fixes template `$ARGUMENTS` handling so that `$&` passes `&` literally instead of collapsing into the variable name.

9. **[#47417](https://github.com/anomalyco/opencode/pull/47417) — Fix project path key normalization** (NEW)
   Resolves issue #40963 — projects on different drives (e.g., `C:\foo` vs `D:\foo`) with the same folder name are now correctly treated as distinct projects.

10. **[#47418](https://github.com/anomalyco/opencode/pull/47418) — Preserve vertical navigation label widths** (CLOSED)
    Fixes invisible keyboard shortcuts reserving space in the Home/New session rows; only text shrinks, icons remain fixed at 16px.

---

## 5. Feature Request Trends

Based on the current issues and PRs, the following feature directions dominate community interest:

- **Provider Authentication Flexibility** — OAuth `client_credentials` support (PR #47423) reflects demand for machine-to-machine auth flows without browser redirects.
- **Semantic Session Search** — Transcript recall indexing (PR #46850) signals strong user need for cross-session knowledge retrieval.
- **Managed/Enterprise Configuration** — OTLP managed settings (#47351) and enterprise typecheck fixes (#47390) show growing enterprise adoption requiring more governance features.
- **New Provider Integrations** — Augure AI (#47312) and ongoing Zen/Gateway model additions indicate users want broader model catalog coverage.
- **Observability & Telemetry** — OTLP exporter configuration and SDK client-scoped headers (#47393) point to production monitoring needs.

---

## 6. Developer Pain Points

- **Performance & Stability:** The most upvoted issue (#30086, 26 likes) is uncontrolled CPU usage in recent versions — likely the top community frustration. Combined with the auto-compaction loop (#30680), core stability is a major concern.
- **Database Bloat:** Unbounded SQLite growth to 13GB+ (#33356) creates real operational overhead for long-lived instances with no automatic cleanup mechanism.
- **Model Filtering Gaps:** The GPT-6 Astra filtering bug affected multiple users simultaneously (#47363, #47405, #30086) and took until v1.18.29 to fix — version-based model parsing is clearly a recurring weak point.
- **Plugin Ecosystem Reliability:** Plugin installation timeouts on npm (#44684), dependency graph staleness (#47388), and plugin loading performance (#47391) indicate the plugin system needs robustness improvements.
- **Desktop UI Regression:** The v1.18.28 update broke MCP connections (#47368) and multiple UI issues persist (file tree hidden on new session #47406, desktop crashes on paste #47425).
- **Provider-Specific Bugs:** Bedrock output limits (#46595), gateway errors for muse-spark and grok-4.6 (#47349), and OpenCode Go billing discrepancies (#39822) suggest provider adapter layers need more rigorous testing.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-05

## Today's Highlights

The Pi ecosystem is experiencing heightened activity around provider integrations and packaging quality. A critical missing dependency issue in v0.85.0 has spawned multiple reports and two dedicated fix PRs (#9170, #9172), while the community is actively expanding AI provider options with new contributions for Meta Muse and OrcaRouter. On the user-experience front, scroll performance in fullscreen mode and clipboard handling on macOS are seeing near-term fixes.

---

## Releases

### v0.85.0
- **Persistent Claude thinking effort**: Supported Anthropic transports now preserve per-turn effort settings and recover safely from signed-thinking mismatches. This ensures consistent model behavior across turns in long-running sessions.
  - [Model Configuration Docs](https://github.com/earendil-works/pi/blob/v0.85.0/packages/coding-agent/docs/models.md#model-configuration)

> ⚠️ **Known Issue**: v0.85.0 ships a broken `dist/cli.js` that statically imports `@earendil-works/pi-server` without declaring it as a dependency. Fresh installs fail with `ERR_MODULE_NOT_FOUND`. Two PRs (#9170, #9172) address this.

---

## Hot Issues

| # | Title | Why It Matters | Reaction |
|---|-------|----------------|----------|
| [#5363](https://github.com/earendil-works/pi/issues/5363) | Add amazon-bedrock-mantle provider for OpenAI-compatible models | Bedrock Mantle uses a distinct OpenAI-compatible endpoint incompatible with the existing Converse-based provider. Community demand (15 👍) shows strong interest in AWS Mantle access. | 18 comments, `inprogress` |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | High CPU usage on Mac OS with long session | Session length appears to drive runaway CPU (50–110%) and high memory (600–800MB), suggesting a memory leak or inefficient context management. Affects productivity on macOS. | 15 comments |
| [#5593](https://github.com/earendil-works/pi/issues/5593) | Tab-completing slash command inserts trailing space, preventing argument autocomplete trigger | UX bug breaks the expected autocomplete flow after tab-completing commands like `/sb-list`. Forces manual cursor repositioning. | 7 comments |
| [#8896](https://github.com/earendil-works/pi/issues/8896) | /export HTML silently drops `display:false` custom messages | Session exports used for debugging or resuming lose messages marked `display:false`, which users expect to persist in history. Silent data loss is dangerous. | 6 comments |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | Fullscreen mode's wheel scrolling is 3x slower than regular mode | Users migrating to fullscreen for fixed input lose scroll responsiveness. A PR (#9166) already addresses this with Alt-modified acceleration. | 5 👍, PR #9166 pending |
| [#8760](https://github.com/earendil-works/pi/issues/8760) | OpenRouter `:free` models fail with 400 — Pi sends `max_tokens` above provider limit | Free-tier models are inaccessible due to hard-coded `maxOutputTokens` exceeding provider caps. Blocks cost-sensitive users. | 5 comments |
| [#8720](https://github.com/earendil-works/pi/issues/8720) | Whitespace-only tool result permanently bricks session (HTTP 400) | Windows tools returning `"\r\n"` cause malformed requests that corrupt session history permanently. High-severity bug. | 4 comments |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | `PI_OFFLINE` silently disables all provider model discovery | Offline mode over-restricts functionality; undocumented behavior contradicts documented scope and surprises users expecting partial offline capability. | 4 comments |
| [#9073](https://github.com/earendil-works/pi/issues/9073) | JsonlSessionRepo rejects cwd-scoped IDs when directory encodings collide | Path encoding collisions (e.g., `tenant-a/project` vs `tenant/a-project`) can cause ID collisions, breaking session persistence for multi-tenant setups. | 2 comments |
| [#5137](https://github.com/earendil-works/pi/issues/5137) | Feature: header-only collapsed tool output mode | Closed as `no-action`, but 5 comments indicate ongoing demand for compact tool card defaults with `Ctrl+O` expansion. | Closed, community interest remains |

---

## Key PR Progress

| # | Title | Impact |
|---|-------|--------|
| [#9172](https://github.com/earendil-works/pi/pull/9172) | fix(coding-agent): prevent broken package root publication | Adds publishing safeguards to prevent future missing dependency issues like the v0.85.0 incident. |
| [#9170](https://github.com/earendil-works/pi/pull/9170) | fix(coding-agent): declare pi-server runtime dependency | Resolves the immediate v0.85.0 breakage by adding `@earendil-works/pi-server` to `dependencies`. |
| [#9166](https://github.com/earendil-works/pi/pull/9166) | feat(tui): accelerate Alt-modified wheel scrolling | Closes #9052 — holding Alt now scrolls 5x faster, restoring fullscreen usability. |
| [#9096](https://github.com/earendil-works/pi/pull/9096) | feat(ai,coding-agent): add Meta provider with Muse subscription OAuth | Adds first-class Meta support with daily token re-minting; resolves #7543. |
| [#9135](https://github.com/earendil-works/pi/pull/9135) | feat(ai): add OrcaRouter as first-class provider with live catalog model discovery | Brings OrcaRouter's adaptive routing and failover into Pi's provider ecosystem. |
| [#9138](https://github.com/earendil-works/pi/pull/9138) | feat(coding-agent): use Cmd+V for clipboard image paste on macOS | Aligns Pi with macOS conventions; fixes platform-contrary `Ctrl+V`-only behavior. |
| [#9149](https://github.com/earendil-works/pi/pull/9149) | fix(coding-agent): selector save keybindings | Binds `/model` and `/thinking` to `app.models.save`/`app.thinking.save` instead of hardcoded shortcuts. |
| [#9117](https://github.com/earendil-works/pi/pull/9117) | feat(coding-agent): deliver prompt and tool changes as system message deltas | Reduces prompt rewriting overhead by streaming system changes as deltas rather than full rewrites. |
| [#9116](https://github.com/earendil-works/pi/pull/9116) | feat(ai): add mid-conversation system messages | Enables extensions to inject system messages mid-session, supporting dynamic context updates. |
| [#9131](https://github.com/earendil-works/pi/pull/9131) | feat: Durable Object SQLite session backend | Adds Cloudflare Workers-compatible SQLite storage via `DurableSqliteSessionRepo`. |
| [#9163](https://github.com/earendil-works/pi/pull/9163) | feat(tui): Simplify clipboard handling | Moves clipboard logic in-tree to unblock NixOS builds; reduces external dependency overhead. |
| [#9157](https://github.com/earendil-works/pi/pull/9157) | fix(coding-agent): render session tree search cursor | Adds cursor rendering to session tree search input, improving keyboard navigation. |

---

## Feature Request Trends

Analysis of open and recently closed issues reveals several dominant themes:

1. **Provider Expansion**: Strong demand for additional AI providers (Amazon Bedrock Mantle, Meta Muse, OrcaRouter already in progress), reflecting users' desire for provider flexibility and competitive pricing.

2. **Session Persistence & Export**: Multiple reports of silent data loss during export (#8896) and session ID collisions (#9073), indicating that session storage robustness needs attention.

3. **Platform-Specific UX**: macOS-specific issues (CPU usage #7730, clipboard shortcuts #9138) and fullscreen scroll performance (#9052) highlight platform parity gaps.

4. **Extension & API Extensibility**: Several feature requests (#9175, #9174, #9173) call for deeper extension hooks—particularly around tool execution interception and native message queue access.

5. **Offline & Network Resilience**: The undocumented scope of `PI_OFFLINE` (#8684) signals confusion about Pi's network behavior that warrants clearer documentation.

6. **Tool Call Robustness**: Whitespace-only tool outputs (#8720), missing timeouts (#8857), and keybinding hardening (#8797) indicate that tool execution reliability remains a priority.

---

## Developer Pain Points

- **Packaging Defects**: The v0.85.0 missing dependency saga (#9132, #9134, #9135, #9140, #9158, #9173) consumed significant community and maintainer attention, indicating a need for automated packaging checks in CI.

- **Model Catalog Discovery Failures**: `PI_OFFLINE` inadvertently blocking all model discovery (#8684) surprises developers who expect partial offline capability.

- **Scroll Performance in Fullscreen**: A 3x scroll slowdown in fullscreen mode (#9052) actively discourages adoption of a key productivity feature.

- **Long Session Degradation**: High CPU and memory growth on macOS (#7730) suggests context or event listener management issues that worsen with session length.

- **Hardcoded Keybindings**: Multiple selectors ignoring user-defined bindings (#8797) force developers to work around rather than configure Pi to their preferences.

- **Provider Compatibility Edge Cases**: OpenRouter `:free` model limits (#8760) and whitespace tool outputs (#8720) represent brittle assumptions about provider behavior that surface in real workflows.

---

*Digest generated from GitHub data for [earendil-works/pi](https://github.com/earendil-works/pi) — 2026-09-05*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-09-05

---

## 1. Today's Highlights

The repository is in a period of intense architectural transition and performance hardening. The most significant development is the ongoing migration of the TUI rendering layer from `ink 7 + React 19` to **OpenTUI** (#8662, 30 comments), which has already spawned follow-up bugs like slash-command output not reaching the screen (#10905). Parallel to this, CI pipeline efficiency is under scrutiny (#10908) as module import costs dominate test execution time. On the security front, a critical credential leak in the DingTalk channel (#10936) was triaged and closed, while multiple E2E CI failures (#11027, #11002, #11043, #11010) suggest instability in the test suite across different renderers and platforms.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### 🔴 #8662 — Migrate TUI rendering layer from ink to OpenTUI
**Priority:** P3 | **Category:** UI / Interactive / Rendering  
The most-discussed issue (30 comments). qwen-code's current TUI depends on a heavily patched `ink 7` (~1037 lines of custom patches) and a custom Virtual Viewport mode, causing flicker and structural problems. The proposed migration to OpenTUI is a foundational architectural shift. Community interest is high, with contributors tracking downstream bugs like #10905 against this epic.  
[Link](https://github.com/QwenLM/qwen-code/issues/8662)

### 🔴 #10908 — CI test time is bound by module import cost, not scheduling
**Priority:** P2 | **Category:** Performance / CI-CD  
Release runs show `collect` phases consuming more time than actual test execution (e.g., 2223s collect vs 1372s tests for the `cli` workspace). The issue identifies workspace-level import optimization as the bottleneck, not test scheduling. This directly impacts developer iteration speed and release velocity.  
[Link](https://github.com/QwenLM/qwen-code/issues/10908)

### 🔴 #10932 — Voice dictation cannot use Token Plan ASR
**Priority:** P2 | **Category:** CLI / Model-Switching  
Model Studio's Token Plan serves speech recognition under the new model ID `qwen-audio-3.0-asr-flash`, but the voice pipeline hardcodes old IDs, blocking all Token Plan ASR models. Mic capture works; only the model-ID allowlist gate is broken. Affects voice transcription workflows for users on Token Plan.  
[Link](https://github.com/QwenLM/qwen-code/issues/10932)

### 🔴 #10872 — Pluggable middleware for language-aware rewriting of thinking output
**Priority:** P2 | **Category:** Core / Extensions  
Request for a public, pluggable middleware API that transforms user-visible thinking/reasoning output before emission. The primary use case is translating thinking blocks into the user's target language (see also #3787), but the middleware pattern would benefit the broader ecosystem.  
[Link](https://github.com/QwenLM/qwen-code/issues/10872)

### 🔴 #8177 — Cursor misplacement / input garbled with IME on macOS + tmux
**Priority:** P2 | **Category:** UI / macOS  
Chinese input via IME in a macOS + tmux local session causes cursor displacement, duplicated/corrupted cursor rendering, and mixed pinyin fragments in committed text. The IME candidate window overlapping terminal rendering exacerbates the issue. Affects non-English input on macOS.  
[Link](https://github.com/QwenLM/qwen-code/issues/8177)

### 🔴 #11045 — Cerebras (OpenAI-compatible): every multi-turn request fails with 400
**Priority:** P1 | **Category:** Core / Content Generation  
When using a Cerebras-hosted model via the OpenAI-compatible provider, the first turn succeeds but every subsequent turn fails with `400 status code (no body)`. The `reasoning_content` field is rejected on input. A blocking issue for users on Cerebras with multi-turn sessions.  
[Link](https://github.com/QwenLM/qwen-code/issues/11045)

### 🔴 #11031 — Fix(export): stop embedding the Web Shell runtime in every HTML file
**Priority:** P1 | **Category:** UI / Build System / Web Shell  
The `/export html` architecture embeds the complete browser dependency graph (React + Web Shell runtime) into every exported file, producing ~19.5 MB documents even for empty sessions. A serious bloat issue for exported transcripts.  
[Link](https://github.com/QwenLM/qwen-code/issues/11031)

### 🔴 #10797 — Non-thinking scaffolding tags echoed into user-visible output
**Priority:** P2 | **Category:** Core / Content Generation  
Beyond known thinking-tag leaks, production sessions show tool-result-style XML blocks and system-reminder content reaching user-visible output. No current sanitizer covers these shapes. Directly impacts output cleanliness and user trust.  
[Link](https://github.com/QwenLM/qwen-code/issues/10797)

### 🔴 #11019 — AUTO mode: user approvals never reach the classifier; approval mode reverts to AUTO
**Priority:** P2 | **Category:** Security / Session Management  
In an API-driven host harness, a user answered `ask_user_question` affirmatively three times, but each subsequent tool call was blocked anyway. Additionally, approval mode reverts to AUTO on session rebuild. A safety and UX regression for programmatic harness integrations.  
[Link](https://github.com/QwenLM/qwen-code/issues/11019)

### 🔴 #10995 — customHeaders: support `${session_id}` template for per-conversation request headers
**Priority:** P3 | **Category:** Configuration / Data Privacy  
Request to allow a `${session_id}` template variable in `generationConfig.customHeaders`, resolved at request time to the active conversation's session ID. Enables per-conversation request tracing and header-based routing at inference gateways.  
[Link](https://github.com/QwenLM/qwen-code/issues/10995)

---

## 4. Key PR Progress

### 🟢 #11038 — fix(export): stop inlining the interactive Web Shell runtime in exported HTML
**Author:** yiliang114  
Addresses the ~19.5 MB export bloat (#11031) by changing `document-main.tsx` to import from the correct package entry rather than the `WebShellTranscript` facade that pulls in the full React runtime.  
[Link](https://github.com/QwenLM/qwen-code/pull/11038)

### 🟢 #10999 — feat(core): configure model reasoning capabilities
**Author:** callmeYe  
Adds declarative reasoning capability to provider model definitions and carries it through the model registry into ACP, session restoration, workspace previews, TUI effort controls, and the final OpenAI-compatible request. Native `deepseek-v4-pro` entry included.  
[Link](https://github.com/QwenLM/qwen-code/pull/10999)

### 🟢 #10915 — ci: give every workspace the shared-pool test timeout, not just five
**Author:** yiliang114  
Raises the vitest timeout ceiling on the shared ECS pool for 15 workspaces still running on the 5000 ms default, and extends the parity sweep to prevent new workspaces from quietly regressing.  
[Link](https://github.com/QwenLM/qwen-code/pull/10915)

### 🟢 #9812 — refactor: retire @qwen-code/webui
**Author:** yiliang114  
Physically deletes the legacy `packages/webui` workspace now that the VS Code/Web Shell cutover and hardened transcript-document exporter have landed. Removes its build, release, visual-test, lint, workspace, and lockfile integrations.  
[Link](https://github.com/QwenLM/qwen-code/pull/9812)

### 🟢 #10943 / #10949 — feat(cli): background Agent View sessions
**Author:** yiliang114  
Stacked PRs adding `qwen --bg "<prompt>"` to start a background Agent View session that outlives its shell, plus `qwen sessions peek`, `answer`, and `stop` subcommands to inspect and control running background sessions.  
[Link](https://github.com/QwenLM/qwen-code/pull/10943) | [Link](https://github.com/QwenLM/qwen-code/pull/10949)

### 🟢 #11015 — docs(channels): Add named sessions Part 4B design
**Author:** doudouOUC  
Proposes the design for owner-scoped named Channel sessions with `/clear`, `/new`, and `/reset` for worktree-isolated tasks, plus lands four residual Part 4A defect fixes.  
[Link](https://github.com/QwenLM/qwen-code/pull/11015)

### 🟢 #10347 — fix(core): auto-retry transient network errors (EOF) where Ctrl+Y is unavailable
**Author:** qwen-code-dev-bot  
Classifies wrapped low-level network failures (e.g., `400 network error ... EOF`) as retryable transport errors so the existing bounded auto-retry applies, instead of failing fast.  
[Link](https://github.com/QwenLM/qwen-code/pull/10347)

### 🟢 #10938 — feat(web-shell): make Session Workflow dependencies navigable and quiet its chrome
**Author:** yiliang114  
Closes navigation, shape, and documentation gaps in the Session Workflow surface. The plan DAG now leads with the step, not its status, and inspector chrome is simplified.  
[Link](https://github.com/QwenLM/qwen-code/pull/10938)

### 🟢 #10043 — perf(cli): reduce virtualized history scroll latency
**Author:** DragonnZhang  
Makes Virtualized History scroll scheduling leading-edge and deadline-aware: the first wheel/drag update applies immediately, later updates within 16 ms are coalesced, and over-budget renders no longer block subsequent updates.  
[Link](https://github.com/QwenLM/qwen-code/pull/10043)

### 🟢 #8927 — feat(channels): bound session lifetime with sessionRotation
**Author:** qwen-code-dev-bot  
Adds a per-channel `sessionRotation` option with `maxTurns` and `maxDuration` bounds. When the bound is exceeded, the next message on that route starts a fresh session instead of reusing the old one.  
[Link](https://github.com/QwenLM/qwen-code/pull/8927)

---

## 5. Feature Request Trends

The most-requested feature directions cluster around four themes:

1. **TUI Rendering Modernization** — Migration from `ink` to OpenTUI (#8662) is the dominant thread, with downstream needs for slash-command output parity (#10905), IME input correctness (#8177), and VP content alignment (#9305).

2. **Background & Autonomous Sessions** — Multiple requests for background session management (#10943, #10949, #11024), named channel sessions (#11015), and session lifecycle controls (`/clear`, `/new`, `/reset`). The direction is toward persistent, observable, and controllable agent sessions.

3. **Pluggable Extensibility APIs** — Requests for middleware hooks (#10872), per-process config directories (#10984), `${session_id}` header templates (#10995), and custom reasoning capability declarations (#10999) all point to a desire for a more open, programmable extension model.

4. **Export & Web Shell UX** — Quick Chat floating surfaces (#11017), navigable Session Workflow DAGs (#10938), fixed Cmd+A behavior in table dialogs (#10702), and slimmer HTML exports (#11038, #11031) reflect a push to make Web Shell a first-class product surface, not just a demo.

---

## 6. Developer Pain Points

- **CI/CD Bottlenecks**: Module import costs dominate test execution time (#10908), and multiple E2E CI failures across renderers (#11027, #11002, #11043, #11010) suggest flaky tests and slow feedback loops. The shared ECS pool timeout ceilings are being raised across workspaces (#10915, #1085

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest – 2026-09-05

---

## **Today's Highlights**

No releases published in the last 24 hours. However, there is notable progress on critical fixes (e.g., Ollama token budget handling), dependency upgrades, and TUI enhancements. The project continues active maintenance with a strong focus on stability, configurability, and performance improvements across both core and plugin components.

---

## **Releases**

**No new releases in the past 24 hours.**

---

## **Hot Issues**

1. **[#5820](https://github.com/Hmbown/Codewhale/issues/5820)** – *Ollama provider: input budget collapses to 1024 tokens on 32K local models*  
   Input token budgeting fails for large-context local models due to excessive default output reservation clamping. Affects users running high-throughput or long-context inference locally.

2. **[#5860](https://github.com/Hmbown/Codewhale/issues/5860)** – *Enable continuous self-learning from dialog (automatic skill evolution)*  
   Proposes automatic extraction of recurring problem-solving patterns into reusable skills. High interest among contributors aiming to enhance agent autonomy and adaptability.

3. **[#5872](https://github.com/Hmbown/Codewhale/issues/5872)** – *Add `rusty_alloc` as an opt-in allocator alternative to `mimalloc`*  
   Requests reducing build-time dependencies by replacing C-based allocators with pure Rust alternatives like `rusty_alloc`. Could simplify cross-compilation workflows.

4. **[#5871](https://github.com/Hmbown/Codewhale/issues/5871)** – *To-do list history clutters transcript without clearing context*  
   Repeated `todo_write` calls create persistent clutter in chat transcripts. Fix underway via PR [#5873](https://github.com/Hmbown/Codewhale/pull/5873).

5. **[#5866](https://github.com/Hmbown/Codewhale/issues/5866)** – *Key Ophthalmology CPT & ICD-10 Updates for 2026*  
   Off-topic but auto-generated issue suggesting medical coding updates. Likely irrelevant unless domain-specific extensions are introduced.

6. **[#5843](https://github.com/Hmbown/Codewhale/issues/5843)** *(Not listed)* – Placeholder for future relevance.

7. **[#5867](https://github.com/Hmbown/Codewhale/issues/5867)** *(Related to PR#5867)* – Configurability around reasoning-only retries needed. See PR below.

8. **[#5868](https://github.com/Hmbown/Codewhale/pull/5868)** *(Enhancement request related)* – Send `x-opencode-session` headers for better OpenCode integration tracking.

9. **[#5869](https://github.com/Hmbown/Codewhale/pull/5869)** *(Issue context missing)* – Job snapshot origin preservation requested to avoid misattribution of output.

10. **[#5870](https://github.com/Hmbown/Codewhale/pull/5870)** *(Related to #3999)* – Atomic commit splitting requires ordering logic based on dependencies. Enhancement under development.

---

## **Key PR Progress**

1. **[#5873](https://github.com/Hmbown/Codewhale/pull/5873)** – *Fix: Replace stale todo transcript snapshots*  
   Keeps only the latest `todo_write` snapshot visible while preserving conversation state. Resolves [Issue #5871](https://github.com/Hmbown/Codewhale/issues/5871).

2. **[#5883](https://github.com/Hmbown/Codewhale/pull/5883)** – *Derive local output budget from route window*  
   Dynamically calculates output limits using model context windows instead of fixed reservations. Addresses [Issue #5820](https://github.com/Hmbown/Codewhale/issues/5820) partially.

3. **[#5869](https://github.com/Hmbown/Codewhale/pull/5869)** – *Preserve task origin in shell job snapshots*  
   Ensures accurate attribution of background jobs to their corresponding tool cards, reducing confusion during parallel execution.

4. **[#5868](https://github.com/Hmbown/Codewhale/pull/5868)** – *Send `x-opencode-session` header for OpenCode providers*  
   Enhances compatibility and telemetry attribution with OpenCode services via stable session identifiers.

5. **[#5867](https://github.com/Hmbown/Codewhale/pull/5867)** – *Configurable `[reasoning_only]` retry settings*  
   Makes previously hardcoded retry behavior customizable through config, offering finer control over model responses.

6. **[#5870](https://github.com/Hmbown/Codewhale/pull/5870)** – *Order unrelated changes by dependency in atomic commits*  
   Refactors how tool-generated changes are sequenced for clarity and correctness in version-controlled environments.

7. **[#5882](https://github.com/Hmbown/Codewhale/pull/5882)** *(Closed)* – *Restore CI baselines and lifecycle checks*  
   Re-enables reliable contributor testing infrastructure post-regressions. Critical for ongoing collaboration.

8. **[#5875](https://github.com/Hmbown/Codewhale/pull/5875)** – *Bump `base64` from v0.22.1 to v0.23.1*  
   Minor dependency upgrade ensuring continued security and compatibility.

9. **[#5881](https://github.com/Hmbown/Codewhale/pull/5881)** – *Bump `tower-http` from v0.7.0 to v0.7.1*  
   Latest minor release improves middleware reliability and HTTP layer robustness.

10. **[#5877](https://github.com/Hmbown/Codewhale/pull/5877)** – *Bump `rmcp` from v2.2.0 to v3.2.0*  
   Major update to Model Context Protocol SDK may introduce breaking schema changes requiring validation.

---

## **Feature Request Trends**

- **Improved Local Provider Compatibility**: Users seek better alignment between internal token budgets and external provider capabilities (e.g., Ollama 32K models).
- **Automatic Skill Learning**: Strong demand for evolving skill sets dynamically from past interactions rather than relying solely on static definitions.
- **Allocator Flexibility**: Desire to reduce platform-specific build complications by adopting Rust-native alternatives to C-linked libraries.
- **Enhanced Session Tracking & Telemetry Integration**: Increased interest in proper attribution mechanisms when interfacing with third-party platforms like OpenCode.
- **Configurable Retry Logic**: Need for runtime configurability in retry behaviors, especially concerning reasoning-focused workflows.

---

## **Developer Pain Points**

- **Build Complexity Around Native Dependencies**: Use of `mimalloc` imposes unnecessary barriers on contributors targeting non-standard or embedded targets.
- **Transcript Clutter From Tooling Output**: Lack of fine-grained control over what appears in conversation views leads to usability degradation.
- **Misalignment Between Assumed vs Actual Token Budgets**: Default assumptions about output sizes conflict with real-world usage scenarios involving local providers.
- **Lack of Clear Lifecycle Management in Plugins**: Inconsistent trust token usage and lifecycle hooks complicate plugin authoring and testing.
- **Poor Attribution in Background Tasks**: Difficulty correlating asynchronous outcomes back to initiating commands hampers debugging efforts.

--- 

Let me know if you'd like this exported as Markdown, JSON, or formatted for Slack/Discord!

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*