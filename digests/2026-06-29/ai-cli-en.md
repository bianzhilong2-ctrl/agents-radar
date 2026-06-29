# AI CLI Tools Community Digest 2026-06-29

> Generated: 2026-06-29 02:36 UTC | Tools covered: 9

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

**AI‑CLI Tools – Cross‑Tool Comparison (Community Digest 2026‑06‑29)**  

| Tool (repo) | Issues opened/active today* | PRs opened/merged today* | Release in last 24 h |
|-------------|----------------------------|--------------------------|----------------------|
| **Claude‑Code** (anthropics/claude-code) | 10 hot tickets (‑‑ ≈ 200 comments total) – major pain points: auth loops, token‑burn, plugin stability | 10 PRs (mix of bug‑fixes & plugin work) – no new tag | **No new version tag** (latest stable v2.1.195) |
| **OpenAI Codex** (openai/codex) | 10 hot tickets (rate‑limit surge, SQLite log runaway, model‑lite incompatibility) | 2 merged PRs (major log‑size reduction) | **No new release** (latest stable 0.142.0) |
| **Gemini CLI** (google‑gemini/gemini-cli) | 10 hot tickets (agent hangs, sub‑agent recovery, security‑redaction, session‑recovery) | 10 PRs (mostly session‑recovery, trust‑dialog & cleanup fixes) | **Nightly v0.51.0‑nightly.20260629** (no stable release) |
| **GitHub Copilot CLI** (github/copilot-cli) | 5 active tickets (proxy‑auth, session UI, tagging, plan status, Ubuntu disappearance) | 1 trivial PR closed | **No new release** (v1.0.36) |
| **Kimi Code CLI** (MoonshotAI/kimi-cli) | 2 tickets (file‑read loop, VS Code memory bloat) | 0 PRs | **No new release** |
| **OpenCode** (anomalyco/opencode) | 10 hot tickets (copy/paste broken, Gemma‑4 tool loops, usage tracking, Termux, CPU spikes) | 10 PRs (usage tracking, model fixes, compaction, forking, Android support) | **No new release** |
| **Pi** (badlogic/pi-mono) | 10 tickets (Codex TUI freeze, streaming UI, token burn, provider bugs) | 10 PRs (auth fixes, compaction, provider parity, UI polish) | **No new release** |
| **DeepSeek TUI** (Hmbown/DeepSeek‑TUI) | 10 tickets (editor freeze, mode confusion, modal bleed‑through, cache regression) | 10 PRs (approval‑gate, Sakana Fugu provider, modal fix, migration notices) | **No new release** |

\*Counts reflect issues or PRs that received activity (comments, state changes, merges) in the last 24 h, not total open backlog.

---

### 1. Ecosystem Overview  
The AI‑CLI ecosystem is rapidly maturing but remains **fragmented** across independent vendors. Most projects are in a “continuous‑integration” mode: daily issue churn, frequent small PRs, and **no official stable releases** in the last day. Plugin/extension frameworks (Claude‑Code, Gemini, OpenCode) and session‑management ergonomics dominate community discussion, while token‑efficiency and reliability of sub‑agent execution are recurring pain points.

---

### 2. Shared Feature Directions  

| Common demand | Tools that raise it | Typical phrasing |
|---------------|----------------------|------------------|
| **Persistent authentication / session resume** | Claude‑Code #1757, Copilot #2978, OpenCode #9281 (usage tracking includes login), Gemini #27914 | “Avoid daily re‑login; keep the CLI alive across reboots.” |
| **Plugin / marketplace ecosystem** | Claude‑Code (handover, protect‑mcp), OpenCode (skill autoload, marketplace), Gemini (extension gallery), DeepSeek (provider plug‑ins) | “Standardised plugin install, versioning, and runtime gating.” |
| **Better token / cost visibility** | Claude‑Code (usage command, token‑burn bugs), OpenAI Codex (rate‑limit cost surge), OpenCode (usage tracking, auto‑compaction), Gemini (Auto‑Memory redaction) | “Real‑time quota display and safe‑guarded auto‑compaction.” |
| **Sub‑agent / tool‑call reliability** | Claude‑Code (recursion token burn), Gemini (generalist hangs, sub‑agent turn limits), OpenAI Codex (model‑lite call failures), OpenCode (Gemma‑4 loops) | “Graceful fallback when a tool call cannot be parsed or recurses.” |
| **Cross‑platform stability (ARM/WSL/macOS/Windows)** | Claude‑Code ARM64 bug, Gemini macOS shortcut regression, Kimi VS Code memory, OpenCode Termux, Pi Ubuntu 24.04 bug | “Consistent behaviour on emerging ARM laptops and WSL2.” |
| **Session / skill persistence & discoverability** | Claude‑Code “save chat as skill”, OpenCode TUI autocomplete, Copilot session tags, Gemini session‑recovery, DeepSeek migration notices | “One‑click export of finished agents and searchable session lists.” |
| **Security & auditability** | Claude‑Code protect‑mcp, Gemini redaction, DeepSeek approval gating, Copilot enterprise proxy support | “Signed receipts, hook disclosure, and policy enforcement.” |

---

### 3. Differentiation Analysis  

| Dimension | Claude‑Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | DeepSeek TUI |
|-----------|-------------|--------------|------------|--------------------|-----------|----------|----|--------------|
| **Target audience** | Power‑users / enterprise teams needing extensible toolchain | Broad developer base (desktop + cloud) | Google‑internal & external developers focused on autonomous agents | GitHub‑centric orgs, CI pipelines | Moonshot AI users, Chinese market | Open‑source “any‑LLM” community | Multi‑provider TUI power‑users | Rust‑centric terminal users |
| **Technical approach** | Plugin‑first, sub‑agent fork model, mouse‑control env vars | Centralised SDK, SQLite logs, token‑budget enforcement | Session‑file JSONL, “trust‑dialog” hooks, auto‑memory redaction | Headless session API, repo‑backed sessions, minimal UI | Anthropic‑compatible endpoint wrapper | V2 API endpoint, manual compaction, forking, Android/Termux support | Provider abstraction layer, modular providers, UI‑rich TUI | Modal UI + “approval‑gated” shell, provider plug‑ins |
| **Feature focus** | Extensibility, security gates, mouse ergonomics | Cost tracking, log‑size reduction, model compatibility | Session durability, trust UI, GCP project validation | Enterprise proxy support, session tagging, plan status UI | Memory usage, custom endpoint stability | Usage visibility, cross‑platform (Termux), skill management | Provider parity, streaming UI resilience | Localization, UI polish, safety approval flows |
| **Maturity signals** | Large issue backlog, many regressions → early‑stage stability | Few PRs, but high‑impact bugs (rate‑limit) → production‑grade but fragile | Nightly releases, rapid bug‑fix PRs → actively iterating | Very low PR volume, limited road‑map → niche, low‑velocity | Minimal activity, only two issues → nascent | Balanced issue/PR activity, roadmap (usage, Android) → growing | Steady PR flow, many provider‑specific fixes → actively maintained | Intensive UI bug‑fix PRs, feature PRs (provider, localization) → rapidly polishing |

---

### 4. Community Momentum & Maturity  

* **Most active** – **Claude‑Code**, **Gemini CLI**, **OpenCode**, **Pi**, and **DeepSeek TUI** each saw ≈ 10‑12 issue/PR events in the past day, indicating a **high‑velocity** community.  
* **Rapid iterators** – Gemini CLI (nightly build) and DeepSeek TUI (multiple UI‑fix PRs) are pushing frequent incremental releases, showing a **short release cycle** culture.  
* **Stable but quiet** – OpenAI Codex and GitHub Copilot CLI have relatively few daily changes; they are **production‑level** tools with a **lower churn** but also slower response to emergent bugs.  
* **Emerging** – Kimi Code and the Pi‑mono project have the **lowest activity** (≤ 2 issues, no PRs), suggesting either a **small user base** or a **maintenance‑only** mode.  

Overall, the tools with **active plugin ecosystems** (Claude‑Code, OpenCode, Gemini) attract the most community participation, while those focused on a **single provider** (OpenAI Codex, Copilot) exhibit **steady but less noisy** traffic.

---

### 5. Trend Signals for Developers  

| Signal | Evidence | Implication |
|--------|----------|-------------|
| **Plugin‑centric extensibility is becoming a de‑facto standard** | Multiple repos added handover/protect‑mcp plugins, marketplaces, and provider‑plug‑in hooks. | Developers should anticipate a modular CLI architecture; invest in reusable skill/agent packages. |
| **Token‑burn & cost transparency are top‑priority** | Re‑occurring bugs that silently consume hundreds of thousands of tokens (Claude‑Code recursion, OpenCode auto‑compaction loops, Codex rate‑limit surge). | Tooling that surfaces real‑time token usage and caps recursion will be a competitive advantage. |
| **Session continuity & resumability are expected** | Re‑authentication complaints, session‑resume confusion, and demand for “save chat as skill”. | CLIs need persistent auth stores and a clear “session‑state” API (export/import, versioned checkpoints). |
| **Cross‑platform parity, especially ARM/WSL, is a decisive factor** | ARM64 coworker failures, macOS shortcut regressions, VS Code memory on Apple Silicon, Termux support requests. | Projects that ship consistent binaries and test on ARM/WSL will capture the growing laptop‑edge market. |
| **Security/audit hooks are moving from “nice‑to‑have” to required** | protect‑mcp signed‑receipt plugin, Gemini trust‑dialog disclosure, DeepSeek approval gating. | Enterprises will favour CLIs with verifiable policy enforcement and audit trails. |
| **Usability of sub‑agents & autonomous tool‑selection remains immature** | Generalist hangs, sub‑agent turn‑limit misreports, auto‑approval of destructive actions. | Future CLIs will need smarter orchestration layers (rule‑based tool selection, safe‑mode toggles). |
| **Localization & developer experience tooling are emerging** | DeepSeek Hotbar wizard localization, Gemini UI refinement, Copilot UI feature requests. | Multi‑language UI support will open CLIs to non‑English developer populations and improve adoption. |

---

### 6. Bottom Line for Decision‑Makers  

- **If you need a highly extensible, plugin‑first CLI** with active community support, **Claude‑Code**, **Gemini CLI**, or **OpenCode** are the strongest candidates—though be prepared to handle current stability regressions.  
- **For a production‑grade, low‑noise experience tied to a single provider** (OpenAI or GitHub), **OpenAI Codex** and **GitHub Copilot CLI** remain the most stable, but they currently lack the rich plugin ecosystem and cost‑visibility features seen elsewhere.  
- **Teams targeting ARM/WSL or mobile environments** should watch **OpenCode** (Termux support) and **Gemini CLI** (cross‑platform fixes) for the most aggressive platform parity work.  
- **Security‑conscious enterprises** will find the emerging “signed‑receipt” and “trust‑dialog” plugins in Claude‑Code and Gemini CLI compelling, but must evaluate the maturity of those components.  

Investing in a tool whose roadmap already includes **persistent auth, token‑budget controls, and a healthy plugin marketplace** will likely yield the best long‑term productivity return as the AI‑CLI ecosystem converges on those capabilities.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

User Safety: safe

---

**Claude‑Code Community Digest – 2026‑06‑29**  

---

### 1. Today's Highlights
- The issue tracker is dominated by stability regressions (auth loop, model‑tool‑parsing failures, and token‑burning sub‑agent bugs) that have accumulated **>200 comments** across the top three open tickets.  
- A flurry of **plugin‑related PRs** landed today, including a new *handover* plugin and a *protect‑mcp* security gate, signalling the project’s shift toward extensibility and safer tool use.  
- Community sentiment is increasingly frustrated by **frequent re‑authentication** and **token‑inefficiency**, while also demanding better mouse‑control and session‑resume ergonomics.

---

### 2. Releases
*No new version tag was published in the last 24 h.* The workspace remains on the latest stable build (v2.1.195) with only patch‑level PR merges.

---

### 3. Hot Issues  *(top 10 by comment volume & impact)*  

| # | Issue (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#1757** | **[BUG] Claude code requires users to constantly login** | Forces daily web re‑auth, breaking workflow continuity. | 73 comments, 63 👍 – users demand persistent sessions. |
| **#63875** | **Recurring error: “The model's tool call could not be parsed (retry also failed)”** | Interrupts tasks mid‑run; leads to lost work. | 72 comments, 110 👍 – highest‑voted bug. |
| **#50674** | **Cowork fails on ARM64 (Snapdragon X)** | Blocks use on emerging Windows‑ARM hardware. | 32 comments, no 👍 – early adopters hit hardware limitation. |
| **#68619** | **[CRITICAL] Subagent spawning & recursion bugs** | Triggers infinite token consumption; bypasses `CLAUDE_CODE_FORK_SUBAGENT=0`. | 26 comments, 8 👍 – described as “catastrophic token burn”. |
| **#32503** | **[BUG] /usage command fails with rate_limit_error** | UI shows “Rate limited” even when limits are far from exhausted. | 9 comments, 13 👍 – impedes usage monitoring. |
| **#39429** | **[BUG] macOS shortcuts (Cmd+H, Cmd+M) not working when panel focused** | Breaks native OS shortcuts, hurting productivity. | 7 comments, 6 👍 – a usability regression. |
| **#69542** | **[BUG] Chrome tab‑group duplication per session** | Creates a new tab group for every conversation, cluttering the browser. | 3 comments, 0 👍 – niche but disruptive for power users. |
| **#72121** | **[ENH] Save a finished chat as a skill or agent in one click** | Requested workflow shortcut for reusable agents. | 4 comments, 0 👍 – early interest in skill persistence. |
| **#60848** | **Ambiguous ‘Don’t ask me again’ option in session resume prompt** | Confusing UI leads to accidental data loss. | 4 comments, 8 👍 – calls for clearer wording. |
| **#72166** | **[BUG] claude‑api skill injects ~184k‑token reference breaking the session** | Consumes entire context window, causing unrecoverable failures. | 2 comments, 0 👍 – high‑impact for API‑skill users. |

*All links point to the GitHub issue page (e.g., https://github.com/anthropics/claude-code/issues/1757).*

---

### 4. Key PR Progress  *(top 10 PRs – all currently open/closed in the last day)*  

| PR # | Title (link) | Summary |
|------|--------------|---------|
| **#62315** | **Fix hookify event filtering in pre/post hooks** | Corrects event‑filter logic; restores reliable hook execution. |
| **#41447** | **feat: open source claude code ✨** | Consolidates multiple feature closures (plugins, marketplace, etc.). |
| **#72037** | **Add handover plugin: export session context for LLM‑to‑LLM handoffs** | New `/handover` plugin writes current session to markdown for reuse. |
| **#72014** | **Add protect‑mcp plugin: fail‑closed Cedar policy gate + signed receipts** | Gates tool calls and creates verifiable receipts for auditability. |
| **#72000** | **docs: update plugin install instructions to recommended installers** | Improves discoverability of official plugin installers. |
| **#72035** | **[FEATURE] Debug command to view the full chronological content of the context window** | Provides a CLI command to dump the exact context window for debugging. |
| **#72162** | **[BUG] M`/plugin marketplace update` + `/reload-plugins` does not pick up pushed plugin changes** | Fixes plugin‑update detection race condition. |
| **#72173** | **[BUG] CLAUDE_CODE_DISABLE_MOUSE_CLICKS=1 no longer preserves text selection in VS Code terminal** | Restores text‑selection behavior when mouse‑clicks are disabled. |
| **#72178** | **[INVALID] [BUG] Cards declined** | (Closed as duplicate/invalid; no actionable code.) |
| **#72172** | **[BUG] Unintended cybersecurity content filtering in conversation summary skill** | Fixes false‑positive filtering that was blocking legitimate summaries. |

*All PRs are linked to their GitHub pages (e.g., https://github.com/anthropics/claude-code/pull/72037).*

---

### 5. Feature Request Trends
- **Plugin ecosystem expansion** – multiple requests for a robust marketplace, a “handover” export capability, and signed‑receipt mechanisms indicate strong interest in modular, reusable tooling.  
- **Session & state persistence** – users want seamless resume, persistent authentication, and the ability to save completed chats as reusable agents or skills.  
- **Mouse & terminal ergonomics** – demand for granular mouse‑control toggles (`CLAUDE_CODE_DISABLE_MOUSE_CLICKS`) and preservation of text selection in integrated terminals.  
- **Cost & token visibility** – repeated calls for clearer usage warnings, accurate `/usage` reporting, and auto‑compaction improvements to avoid token burn.

---

### 6. Developer Pain Points
- **Frequent re‑authentication** – users must log in daily, disrupting long‑running workflows.  
- **Unpredictable token consumption** – sub‑agent recursion and auto‑compaction cause hidden token spikes, leading to unexpected cost overruns.  
- **Parsing and execution failures** – intermittent “tool call could not be parsed” errors abort tasks without graceful recovery.  
- **Environment‑specific bugs** – ARM64 coworker failures, macOS shortcut conflicts, and Windows‑WSL PID detection issues highlight a lack of cross‑platform stability.  
- **Plugin/update lag** – changes to plugins are not always reflected instantly, causing confusion when testing new marketplace items.

---  

*All observations are drawn from the GitHub issue and PR activity of the **claude-code** repository as of 2026‑06‑29.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑06‑29**

---

### 1. Today's Highlights
* **Rate‑limit explosion for GPT‑5.5 (Plus)** – Issue [#28879](https://github.com/openai/codex/issues/28879) reports a 10‑20× jump in token‑cost accounting since June 16, draining 5‑hour budgets in just 2‑3 prompts. Community outcry (337 👍, 194 comments) pushes the team to audit quota‑reporting logic.  
* **SQLite log runaway fixed** – PRs [#29432](https://github.com/openai/codex/pull/29432) and [#29457](https://github.com/openai/codex/pull/29457) (Codex 0.142.0) cut feedback‑log write volume by ~85 %, solving Issue [#28224](https://github.com/openai/codex/issues/28224) (404 👍, 99 comments).  
* **GPT‑5.5 Lite incompatibility** – Codex Desktop on macOS crashes with “This model is not supported” when using `X-OpenAI-Internal-Codex-Responses-Lite` (Issues [#30224](https://github.com/openai/codex/issues/30224) and [#30406](https://github.com/openai/codex/issues/30406)). Users note GPT‑5.4 works, prompting a quick investigation into model‑metadata mapping.

---

### 2. Releases
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues (Top 10 by engagement)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **28879** | [Rate‑limit cost per token jumped ~10‑20×](https://github.com/openai/codex/issues/28879) | Users losing budgeted compute instantly; impacts billing trust. | 337 👍, 194 comments |
| **28224** | [SQLite feedback logs write ~640 TB/year](https://github.com/openai/codex/issues/28224) | Risks SSD endurance on dev machines; huge storage overhead. | 404 👍, 99 comments |
| **30224** | [Model not supported with `X-OpenAI-Internal-Codex-Responses-Lite`](https://github.com/openai/codex/issues/30224) | Breaks GPT‑5.5 Lite workflow on Windows/macOS; incompatibilities. | 19 👍, 53 comments |
| **25719** | [macOS syspolicyd/trustd CPU/memory runaway](https://github.com/openai/codex/issues/25719) | Causes sustained high CPU on macOS, draining battery and performance. | 55 👍, 35 comments |
| **30002** | [Server‑side quota over‑reports after 5 h reset](https://github.com/openai/codex/issues/30002) | Pro limits appear burned in ~41 min vs. historic 5 h windows; billing alarm. | 6 👍, 28 comments |
| **29532** | [macOS persistent SQLite TRACE churn after v0.142.0](https://github.com/openai/codex/issues/29532) | Logs still accumulate despite partial fix; impacts log rotation. | 7 👍, 24 comments |
| **14094** *(CLOSED)* | [Prompt stuck on “Thinking” on Windows](https://github.com/openai/codex/issues/14094) | UX blocker preventing any response; forced restarts. | 6 👍, 21 comments |
| **20214** | [Codex App freezes/stutters on Windows 11](https://github.com/openai/codex/issues/20214) | Poor performance on high‑end hardware; users blame UI thread. | 38 👍, 20 comments |
| **17320** | [Excessive SQLite WAL writes ignore `RUST_LOG`](https://github.com/openai/codex/issues/17320) | Even with logging disabled, TRACE logs keep spinning. | 36 👍, 16 comments |
| **21839** | [Existing sessions suddenly require approvals](https://github.com/openai/codex/issues/21839) | Disrupts automated or “always

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLICommunity Digest – 2026‑06‑29**

---

### 1. Today’s Highlights  
The nightly build **v0.51.0‑nightly.20260629.gae0a3aa7b** was released with a full version bump and accompanying release notes.  Community focus remains on stability and usability: high‑impact bugs (generalist agent hangs, sub‑agent recovery) and a wave of PRs that fix session‑management, trust‑dialog disclosure, and GCP project‑ID validation.

---

### 2. Releases  
- **v0.51.0‑nightly.20260629.gae0a3aa7b** – Automated version bump for the nightly channel.  
  *Full changelog*: https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260628.gae0a3aa7b...v0.51.0-nightly.20260629.gae0a3aa7b  

*No other new versioned releases were published in the last 24 h.*

---

### 3. Hot Issues  *(top 10 by comment count & impact)*  

| # | Issue (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| 1 | **[#21409 – Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** | Agent becomes unresponsive when deferring to the generalist, stalling even simple folder‑creation commands. | 7 comments, **8 👍** – users report waiting > 1 hour; a workaround (disabling sub‑agent deferral) is in demand. |
| 2 | **[#22323 – Sub‑agent recovery after MAX_TURNS reported as GOAL](https://github.com/google-gemini/gemini-cli/issues/22323)** | `codebase_investigator` incorrectly reports success while hitting the turn limit, hiding the real interruption. | 8 comments, **2 👍** – flagged as a critical bug affecting reliability of sub‑agent pipelines. |
| 3 | **[#24353 – Component‑level evaluations (EPIC)](https://github.com/google-gemini/gemini-cli/issues/24353)** | Introduces a suite of 76 behavioral eval tests; tracks performance of the new “behavioral evals” feature. | 7 comments – seen as a major step toward systematic benchmarking. |
| 4 | **[#22745 – AST‑aware file reads, search, mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** | Proposes AST‑aware tools to reduce token noise and improve precision of code‑base introspection. | 7 comments, **1 👍** – strong interest from developers seeking more efficient code‑base interaction. |
| 5 | **[#21968 – Gemini under‑uses skills & sub‑agents](https://github.com/google-gemini/gemini-cli/issues/21968)** | Users observe that custom skills (e.g., Gradle, Git) are rarely invoked automatically. | 6 comments – requests smarter autonomous skill usage. |
| 6 | **[#26525 – Deterministic redaction & reduced Auto‑Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** | Auto‑Memory streams raw transcripts to the background extractor before redaction, risking secret leakage. | 5 comments – security‑focused concern. |
| 7 | **[#26522 – Stop Auto‑Memory from retrying low‑signal sessions](https://github.com/google-gemini/gemini-cli/issues/26522)** | Sessions flagged as low‑signal remain unprocessed, inflating the inbox and wasting resources. | 5 comments – calls for smarter session gating. |
| 8 | **[#27838 – Extension not listed in gallery](https://github.com/google-gemini/gemini-cli/issues/27838)** | A compliant PandaDoc extension is invisible in the public extensions catalog. | 4 comments – frustrates extension authors and users. |
| 9 | **[#25166 – Shell command execution stuck “Waiting input”](https://github.com/google-gemini/gemini-cli/issues/25166)** | After a command finishes, the CLI appears to wait for user input indefinitely. | 4 comments, **3 👍** – reproducible and blocks workflow. |
|10| **[#21432 – Improve Agent “Self‑Awareness” (CLI flags, hotkeys, self‑execution)](https://github.com/google-gemini/gemini-cli/issues/21432)** | Aims to let the CLI reliably describe its own mechanics, hotkeys, and flags. | 2 comments – seen as a usability milestone. |

---

### 4. Key PR Progress  *(top 10 by impact & recency)*  

| # | PR (link) | Summary |
|---|-----------|---------|
| 1 | **[#28198 – chore/release: bump version to 0.51.0‑nightly.20260629.gae0a3aa7b](https://github.com/google-gemini/gemini-cli/pull/28198)** | Automated version bump for the nightly release. |
| 2 | **[#27915 – fix(core): trust dialog discloses hook shape](https://github.com/google-gemini/gemini-cli/pull/27915)** | UI now shows the actual command that a `SessionStart` hook will run, closing #27901. |
| 3 | **[#27914 – fix(cli): don’t resume unsaved sessions](https://github.com/google-gemini/gemini-cli/pull/27914)** | Prevents offering to resume a session that was never persisted, improving UX. |
| 4 | **[#27916 – validate GCP project ID format](https://github.com/google-gemini/gemini-cli/pull/27916)** | Stops invalid project IDs from being stored in memory, avoiding 403/CONSUMER_INVALID errors. |
| 5 | **[#27905 – keep recreated session files loadable after deletion](https://github.com/google-gemini/gemini-cli/pull/27905)** | Guarantees that a newly created session file can be read even if the old file was removed. |
| 6 | **[#27904 – load JSONL sessions when projectHash is missing](https://github.com/google-gemini/gemini-cli/pull/27904)** | Extends legacy‑record parsing to handle sessions lacking a project hash. |
| 7 | **[#27912 – recover sessions with corrupt or missing metadata](https://github.com/google-gemini/gemini-cli/pull/27912)** | Adds robust handling for malformed JSONL session files. |
| 8 | **[#27906 – skip background session cleanup when listing sessions](https://github.com/google-gemini/gemini-cli/pull/27906)** | Eliminates race conditions where cleanup deletes files while `list-sessions` scans the directory. |
| 9 | **[#27907 – make useLogger follow active session ID after /clear](https://github.com/google-gemini/gemini-cli/pull/27907)** | Ensures logger context updates when a new session ID is generated. |
|10| **[#27903 – disclose hooks declared in canonical nested shape](https://github.com/google-gemini/gemini-cli/pull/27903)** | Makes the folder‑trust dialog correctly enumerate hook commands. |

---

### 5. Feature Request Trends  

- **Visibility & Control of Sub‑Agents** – Multiple issues (#22598, #22093, #21432) request easier ways to view, share, and audit sub‑agent trajectories and to enforce permission boundaries.  
- **AST‑Aware Tooling** – #22745 and related discussions emphasize the need for precise code‑base introspection (method‑bound reads, navigation) to reduce token waste and improve efficiency.  
- **Reliability of Session Management** – A cluster of PR‑driven fixes (#279xx series) shows strong community demand for robust session handling, especially around cleanup, listing, and recovery after external deletions.  
- **Security & Privacy** – Issues #26525 and #26522 highlight concerns about secret leakage and indefinite retry of low‑signal sessions, pointing to a trend toward tighter data handling and smarter inbox gating.

---

### 6. Developer Pain Points  

- **Agent Hangs & Deferral Bugs** – Generalist agent stalls (#21409) and sub‑agent recovery mis‑reporting (#22323) cause unpredictable delays.  
- **Insufficient Skill/Sub‑Agent Autonomy** – Users repeatedly need to manually enable skills (#21968) because the system does not auto‑select appropriate tools.  
- **Session & Memory Management** – Auto‑Memory’s redaction timing (#26525) and low‑signal session retry logic (#26522) lead to noisy logs and wasted compute.  
- **Tool‑Limit Enforcement** – The 400‑tool hard limit (#24246) forces agents to be overly conservative, limiting flexibility.  
- **CLI Usability** – Missing self‑awareness (flags, hotkeys) and imprecise error messages hinder onboarding and troubleshooting.  

---

*All links point to the official Gemini‑CLI repository (github.com/google-gemini/gemini-cli). Stay tuned for the next nightly release and ongoing community work!*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI – Community Digest (2026‑06‑29)**  

---

### 1. Today's Highlights  
The community is actively discussing stability on corporate proxies, a suite of usability‑focused feature requests for repository‑backed sessions, and early‑stage ideas for session tagging and visual plan status. No new version was released in the last 24 h, but several open issues have seen recent updates, indicating ongoing user pain around headless operation and session management.

---

### 2. Releases  
- **No new releases** were published in the past day. The latest published version remains **v1.0.36** of the Copilot CLI.

---

### 3. Hot Issues *(5 noteworthy issues, all updated in the last 24 h)*  

| Issue | Why it matters | Community reaction |
|-------|----------------|--------------------|
| **[#2978](https://github.com/github/copilot-cli/issues/2978)** – *enterprise / networking*: `session.create` fails with “fetch failed” behind a corporate proxy (v1.0.36). | Critical connectivity problem for enterprise users who rely on headless mode; the bug surfaces despite correct proxy env‑vars and a working `undici` 7.22. | Few reactions (‑ 👍 0), but the issue is open and linked to a specific SDK version, signalling a need for a proxy‑aware fix. |
| **[#3971](https://github.com/github/copilot-cli/issues/3971)** – *feature request*: Full file‑tree browser for repository‑backed sessions. | Users want the same visual navigation they get with folder‑backed sessions for repo‑backed worktrees, indicating a gap in session UX. | No votes yet; the request is framed as a “triage” item, suggesting early interest. |
| **[#3970](https://github.com/github/copilot-cli/issues/3970)** – *feature request*: User‑defined tags on sessions (searchable & filterable). | Tagging would help users organize a growing set of sessions, a recurring pain point highlighted by multiple contributors. | Still at zero engagement, but the idea aligns with other organization‑focused requests. |
| **[#3969](https://github.com/github/copilot-cli/issues/3969)** – *feature request*: Plan status indicators (badge/symbol) on session list items. | Visual status badges would let developers gauge plan health at a glance, reducing context‑switching when juggling many sessions. | No community response yet; the request is similarly tagged “triage.” |
| **[#3967](https://github.com/github/copilot-cli/issues/3967)** – *bug*: Copilot disappears after use in multiple terminals on Ubuntu 24.04, reports “not installed.” | Instability that causes the tool to vanish after a single successful run severely impacts reliability, especially on newer distros. | No reaction recorded; the issue is flagged as a major usability blocker. |

*Only five open issues appear in the 24‑hour window, but each touches a high‑impact area.*

---

### 4. Key Pull Request Progress *(1 PR merged/closed in the last 24 h)*  

| PR | Summary | Link |
|----|----------|------|
| **[#3968 – CLOSED]** Rename `changelog.md` to `changelog.md` | A trivial rename operation; no functional change. | [PR #3968](https://github.com/github/copilot-cli/pull/3968) |

*No non‑trivial PRs were merged recently; development focus remains on issue resolution and feature brainstorming.*

---

### 5. Feature Request Trends  

- **Enhanced Session Navigation**: Users repeatedly ask for richer visual explorations of repository‑backed sessions (full file‑tree browsers) and status indicators for plans.  
- **Organization & Discovery**: Tagging systems and searchable filters are emerging as the most‑cited need to manage a growing portfolio of sessions.  
- **Visual Feedback**: Status badges/symbols for plans are repeatedly requested to give instant situational awareness without opening each session.  
- **Enterprise Connectivity**: While not a “feature” per se, robust headless proxy support is being highlighted as a prerequisite for broader corporate adoption.  

Overall, the community is gravitating toward making Copilot CLI sessions more discoverable, controllable, and reliable within complex workflows.

---

### 6. Developer Pain Points  

- **Unstable headless operation behind corporate proxies** – `session.create` failures erode confidence for enterprise users.  
- **Inconsistent session persistence** – Reports of Copilot disappearing after a successful run (Issue #3967) suggest state‑management bugs.  
- **Limited session organization** – With multiple active sessions, users lack lightweight mechanisms (tags, filters, status badges) to sort and locate the right session quickly.  
- **Uneven visual parity** – Repository‑backed sessions present a sparse “Changes” view, whereas folder‑backed sessions enjoy a full file‑tree, leading to a perceived UX imbalance.  

Addressing these pain points would significantly improve adoption in both individual and corporate environments.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑06‑29**

---

## 1️⃣ Today's Highlights  
Only two active bug reports surfaced today. Issue #640 details a repeated file‑reading loop when using a custom Anthropic endpoint, while Issue #1592 flags significant memory pressure in the VS Code extension. No new releases or pull‑request activity occurred.

---

## 2 Releases  
*No new releases were published in the last 24 hours.*

---

## 3️⃣ Hot Issues  
| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **640** | *Kimi CLI stuck in reading one file again and again and stuck in a loop* | The loop problems compromise CLI usability, causing wasted CPU cycles and unstable scripts. | 15 comments, 1 up–vote. Maintainers were asked to investigate file‑handle logic for custom config usage. |
| **1592** | *kimi code vscode 插件很耗内存 || kimi code vscode plug‑in consumes a lot of memory* | High memory consumption drags VS Code performance and can crash the editor on prolonged tasks. | Single comment, no up‑votes yet; developer reported on macOS ARM. |

*There are no other primary issues recorded within the last 24 hours.*

- [#640](https://github.com/MoonshotAI/kimi-cli/issues/640) – 15 comments, 1 👍  
- [#1592](https://github.com/MoonshotAI/kimi-cli/issues/1592) – 1 comment, 0 👍  

---

## 4️⃣ Key PR Progress  
*No pull‑request activity was detected in the past day.*

---

## 5️⃣ Feature Request Trends  
The current issue set focuses largely on stability and resource usage rather than new functionality. The absence of feature‑request issues indicates that the community is presently prioritizing reliability improvements over adding new commands or integrations.

---

## 6️⃣ Developer Pain Points  
| Pain Point | Details | Impact |
|------------|---------|--------|
| **Infinite read loop** | Using a custom `anthropic` endpoint in `config.toml` causes the CLI to repeatedly read a single file. | Slows down batch workflows, leads to CPU waste. |
| **Memory bloat in VS Code** | The Kimi Code extension consumes an excessive amount of RAM during long‑running tasks on macOS ARM. | Causes editor slowdown, potential crashes. |
| **Custom‑endpoint fragility** | The current bug suggests that non‑default models or endpoints introduce edge‑case bugs. | Limits adoption of newer / custom models. |

Addressing these pain points will directly improve day‑to‑day productivity for developers leveraging Kimi Code in both CLI and VS Code environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑06‑29**

---

### 1. Today's Highlights
- The copy‑and‑paste regression in the CLI (Issue #13984) remains the most‑discussed problem, gathering 50 comments and strong community frustration.  
- Unified usage tracking (Issue #9281 / PR #9545) continues to gain traction, with 26 👍 and ongoing work to expose OAuth‑provider consumption.  
- Compatibility concerns with the newly released Gemma‑4 models (Issue #21034) have surfaced, highlighting tool‑loop failures despite recent tokenizer fixes.  

---

### 2. Releases  
*No new versions were published in the last 24 hours.*

---

### 3. Hot Issues  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#13984](https://github.com/anomalyco/opencode/issues/13984) | **Copy/paste broken in CLI** – clipboard reports success but paste yields nothing. | Core usability blocker for daily CLI workflow. | 50 comments, 23 👍 – highest‑engagement item. |
| [#21034](https://github.com/anomalyco/opencode/issues/21034) | **Gemma‑4‑26b/31b interaction issues** – tool loops/failures even with latest tokenizer fixes. | Affects adopters of the newest Gemma models; threatens model‑agnostic promise. | 20 comments, 20 👍. |
| [#9281](https://github.com/anomalyco/opencode/issues/9281) | **Unified usage tracking** – request for built‑in view of plan/rate‑limit consumption after OAuth login. | Addresses billing transparency; heavily requested by teams on paid plans. | 10 comments, 26 👍. |
| [#961](https://github.com/anomalyco/opencode/issues/961) | **Termux support** – enable OpenCode on Android ARM64 environments. | Expands reach to mobile/embedded developers; aligns with growing Termux usage. | 12 comments, 21 👍. |
| [#5565](https://github.com/anomalyco/opencode/issues/5565) | **Intermittent weird agent output** – gibberish responses suggesting possible prompt/model contamination. | Reliability concern; unpredictable output breaks trust in the agent. | 12 comments, 0 👍. |
| [#22129](https://github.com/anomalyco/opencode/issues/22129) | **Skills missing from TUI autocomplete** – appear in web app but not CLI. | Hinders discoverability of project‑specific skills for terminal users. | 11 comments, 12 👍. |
| [#30680](https://github.com/anomalyco/opencode/issues/30680) | **Auto‑compaction loop** – OpenCode repeatedly compacts and stops responding in empty workspaces. | Performance/stability bug that consumes tokens and locks the session. | 9 comments, 0 👍. |
| [#34228](https://github.com/anomalyco/opencode/issues/34228) | **Inconsistent project skills exposure** – available skills vary between sessions. | Undermines deterministic skill‑based agent behavior. | 8 comments, 0 👍. |
| [#33399](https://github.com/anomalyco/opencode/issues/33399) | **CPU spikes to 99‑100 %** – CLI becomes unresponsive, fans spin up. | Resource‑usage regression affecting developer productivity. | 7 comments, 0 👍. |
| [#5409](https://github.com/anomalyco/opencode/issues/5409) | **SessionStart hook** – lifecycle hook analogous to Claude Code for session initialization. | Enables custom setup (env, secrets, telemetry) at session start. | 6 comments, 17 👍. |

---

### 4. Key PR Progress  

| # | PR | Summary |
|---|----|---------|
| [#9545](https://github.com/anomalyco/opencode/pull/9545) | **Unified usage tracking** – implements OAuth‑aware usage view, closes #9281. |
| [#34371](https://github.com/anomalyco/opencode/pull/34371) | **V2 generate.text endpoint** – location‑scoped text generation service using catalog & LLM client. |
| [#34368](https://github.com/anomalyco/opencode/pull/34368) | **Defer large MCP tool catalogs** – moves MCP tool assembly to session‑level bridge for better scalability. |
| [#34369](https://github.com/anomalyco/opencode/pull/34369) | **Detected MIME type for --file attachments** – fixes hard‑coded `text/plain` for images/binaries. |
| [#34353](https://github.com/anomalyco/opencode/pull/34353) | **Skip fff in Node runtime** – forces ripgrep‑based search to avoid initializing `fff` under Node. |
| [#34361](https://github.com/anomalyco/opencode/pull/34361) | **Remove per‑prompt system option** – cleans up V2 Prompt schemas and stops projecting system onto user messages. |
| [#34360](https://github.com/anomalyco/opencode/pull/34360) | **Use `xhigh` instead of `max` for GLM‑5.2** – corrects variant mapping for OpenAI‑compatible GLM‑5.2 models. |
| [#34336](https://github.com/anomalyco/opencode/pull/34336) | **V2 manual compaction** – exposes manual compaction via existing compact endpoint, shares logic with auto‑compaction. |
| [#34343](https://github.com/anomalyco/opencode/pull/34343) | **V2 session forking** – adds `SessionV2.fork()` to clone history‑style endpoint for child sessions with fresh IDs. |
| [#33010](https://github.com/anomalyco/opencode/pull/33010) | **Android/Termux support** – adds platform mapping, postinstall scripts, and wrapper for Termux (Android arm64). |

---

### 5. Feature Request Trends  
- **Usage & billing visibility** – unified usage tracking (#9281) and related OAuth‑token consumption views remain top‑voted.  
- **Cross‑platform expansion** – Termux/Android support (#961, #33010) and broader mobile/embedded tooling requests.  
- **Integrated browsing/preview** – multiple issues (#26772, #30755) ask for an in‑app browser or click‑to‑edit panel (similar to Codex).  
- **Session lifecycle hooks** – demand for `SessionStart` (and similar) hooks to run custom initialization/cleanup.  
- **Model‑specific compatibility** – Gemma‑4, NVIDIA NIM/DeepSeek‑v4, and other emerging LLMs need reliable tool‑call handling.  
- **UI/UX refinements** – skills discoverability in TUI autocomplete, better clipboard handling, and stable windowing on desktop.

---

### 6. Developer Pain Points  
- **CLI interaction bugs** – copy/paste failures, unresponsive TUI during high‑CPU spikes, and missing autocomplete features.  
- **Model reliability** – frequent token‑loop/compaction loops, erratic agent output, and model‑specific tool‑call hangs (Gemma‑4, NIM DeepSeek‑v4).  
- **Resource consumption** – uncontrolled auto‑compaction and CPU spikes that make the agent unusable.  
- **Subscription & billing opacity** – paid Go activations not reflected, lack of real‑time usage metrics.  
- **Platform fragmentation** – missing or broken support for Termux, WSL, and certain Node runtimes.  
- **Skill & context management** – inconsistent skill exposure between sessions and between TUI/web UIs.  

*All links point to the `anomalyco/opencode` repository.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

### Pi Community Digest - 2026-06-29

---

**1. Today's Highlights**  
No new releases were published in the last 24 hours. However, the community is actively addressing critical AI tooling issues such as unreliable OpenAI Codex connections and streaming UI bugs. Notably, 12 Pull Requests were opened today, focusing on integration improvements and model support for providers like Friendli.ai.

---

**2. Releases**  
✅ **No new releases** observed in the past 24 hours. Stability patches and model compatibility fixes are being processed through PRs (#6146, #6141).

---

**3. Hot Issues**  
1. **[#4945]** *openai-codex/TUI freezes* – Intermittent unresponsiveness in OpenAI Codex integration requires manual recovery, affecting daily workflows (👍30 [liushuaiiu](https://github.com/earendil-works/pi/issues/4945)).  
2. **[#5825]** *MD stream scroll-lock* – `clear on shrink` forces mandatory scroll-to-bottom in markdown streams (👍0 [xl0](https://github.com/earendil-works/pi/issues/5825)).  
3. **[#6103]** *AI responses mislabel empty tools* – Extensions returning empty results show placeholder images instead (👍2 [highlyunavailable](https://github.com/earendil-works/pi/issues/6103)).  
4. **[#6083]** *GLM coding plan session burn* – Rapid LLM token exhaustion with z.ai GLM models during multi-step tool workflows (👍9 [skhoroshavin](https://github.com/earendil-works/pi/issues/6083)).  
5. **[#6128]** *Gemma4 tool call rendering* – DiffusionGemma thinking blocks rendered as raw output despite successful integration (👍3 [black-snow](https://github.com/earendil-works/pi/issues/6128)).  
6. **[#6151]** *Image URL routing* – Need to support direct image URLs instead of base64 conversions (👍1 [dongnaebi](https://github.com/earendil-works/pi/issues/6151)).  
7. **[#6139]** *Groq API reasoning conflict* – `reasoning_content` field causes 400 errors for non-compatible providers (👍2 [navneetkumaryadav207001](https://github.com/earendil-works/pi/issues/6139)).  
8. **[#6107]** *Interrupting reloads* – `/reload` command ignored during agent stream, delaying context recovery (👑2 [auspic7](https://github.com/earendil-works/pi/issues/6107)).  
9. **[#6149]** *Edit tool miscompletions* – GitHub Copilot providers submit invalid `edit` tool calls (👔1 [mrenoldi](https://github.com/earendil-works/pi/issues/6150)).  
10. **[#6146]** *Model provider parity* – Patch merged to restore MiniMax Qwen3.5 support (#6146) [jsynowiec](https://github.com/earendil-works/pi/pull/6146)).

---

**4. Key PR Progress**  
1. **#6148** Fixes Anthropic API bearer token auth handling to address header mismatches (#6148 [mitsuhiko](https://github.com/earendil-works/pi/pull/6148))  
2. **#6074** Resolves prompt compaction edge cases in coding agent flows ([yzhg1983](https://github.com/earendil-works/pi/pull/6074))  
3. **#6143** (Withdrawn) Attempted skill exposure implementation ([EYYCHEEV](https://github.com/earendil-works/pi/pull/6143))  
4. **#6130** Frail exception handling in code renderer silenced developer errors ([ngkz](https://github.com/earendil-works/pi/pull/6130))  
5. **#6141** Context Matrix response parsing normalization ([heonyun](https://github.com/earendil-works/pi/pull/6141))  
6. **#6131** Fixed flickering TUI during simultaneous tool calls ([china-nyx](https://github.com/earendil-works/pi/pull/6131))  
7. **#6144** Tab-space normalization in edit tool ([cunzai97](https://github.com/earendil-works/pi/pull/6144))  
8. **#6142** DeepSeek reasoning defaults to high effort ([heonyun](https://github.com/earendil-works/pi/pull/6142))  
9. **#6115** TUI padding configuration proposal ([mitsuhiko](https://github.com/earendil-works/pi/pull/6115))  
10. **#6141** Context canvas normalization ([heonyun](https://github.com/earendil-works/pi/pull/6141))

---

**5. Feature Request Trends**  
- **Provider Expansion**: Consistent requests for built-in support for Friendli.ai, Charm Hyper, and APG Blazer models ([#6091](https://github.com/earendil-works/pi/issues/6091), [#6042](https://github.com/earendil-works/pi/issues/6042)).  
- **Streaming Arcs**: Developers demand scroll persistence controls and debug proxies ([#5825](https://github.com/earendil-works/pi/issues/5825)).  
- **Model Compatibility**: Multiple calls for explicit version version support for OpenCode Go/Tempest integrations ([#4110](https://github.com/earendil-works/pi/issues/4110)).  
- **Custom Tooling**: Multiple proposals for payload transform hooks to extend API behavior ([#6089](https://github.com/earendil-works/pi/issues/6089)).  
- **Session Management**: Clear requests to expose runtime/memory metrics for model providers ([#6138](https://github.com/earendil-works/pi/issues/6138)).

---

**6. Developer Pain Points**  
- **Inconsistent Tooling**: UI state corruption during streaming ([#6131](https://github.com/earendil-works/pi/issues/6131)), block rendering mismatches ([#6128](https://github.com/earendil-works/pi/issues/6128)), and provider-specific prompt formatting bugs.  
- **Integration Lag**: 60s RpcClient timeout ([#6088](https://github.com/earendil-works/pi/issues/6088)) and Azure model naming conflicts ([#6114](https://github.com/earendil-works/pi/issues/6114)).  
- **Workflow Disruption**: Session model chain failures due to legacy model specs ([#6132](https://github.com/earendil-works/pi/issues/6132)), and legacy OS tool path rigidity ([#6135](https://github.com/earendil-works/pi/issues/6135)).  
- **Documentation Gaps**: Missing guidance for custom tool payload transforms despite [#6089](https://github.com/earendil-works/pi/issues/6089) popularity.  

--- 

This digest aggregates critical community feedback and development activity from the last 24 hours. For deeper analysis, view full issue discussions or PR debate threads via linked URLs.


</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUICommunity Digest – 2026‑06‑29**

---

### 1. Today’s Highlights  
The past 24 hours saw a flurry of critical bug‑fixes and usability improvements: the editor freeze that forced a full process kill has been resolved, the long‑standing “plan ↔ agent” mode confusion was finally corrected, and the modal renderer was hardened to stop content bleed‑through. In parallel, the first‑class **Sakana Fugu** provider was added, and work began on a fully localized Hotbar setup wizard for 0.8.67, signalling a strong push toward global accessibility and a more reliable TUI experience.

---

### 2. Releases  
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues  *(10 noteworthy items)*  

| # | Issue (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#3657** | <https://github.com/Hmbown/DeepSeek-TUI/issues/3657> | Editor freezes and crashes after entering “draft” mode; the whole process must be killed to recover. | High‑impact – users reported total loss of productivity; 5 comments, 0 👍. |
| **#3568** | <https://github.com/Hmbown/DeepSeek-TUI/issues/3568> | “Plan” and “Agent” modes are mixed up; AI fails to detect the switch, leading to inconsistent behaviour. | Critical UI/UX bug; 7 comments, 2 👍. |
| **#3730** | <https://github.com/Hmbown/DeepSeek-TUI/issues/3730> | Read‑only commands (e.g., `codewhale --version`) are incorrectly flagged as **DESTRUCTIVE** in Auto mode, forcing an unnecessary approval prompt. | UX inconsistency; 2 comments, 0 👍. |
| **#3732** | <https://github.com/Hmbown/DeepSeek-TUI/issues/3732> | Modal UI/UX broken across all modals: content bleed‑through and truncated action rows. | Affects every user interaction; 1 comment, 0 👍. |
| **#3738** | <https://github.com/Hmbown/DeepSeek-TUI/issues/3738> | Prompt‑cache hit‑rate regression is driving up DeepSeek costs; the `<turn_meta>` block may be breaking cacheable prefixes. | Performance & cost concern; 1 comment, 0 👍. |
| **#3728** | <https://github.com/Hmbown/DeepSeek-TUI/issues/3728> | TUI freezes under many concurrent sub‑agents due to RwLock contention starving the render loop. | High‑frequency performance regression; 0 comments, 0 👍. |
| **#3735** | <https://github.com/Hmbown/DeepSeek-TUI/issues/3735> | YOLO mode silently auto‑approves publish‑like actions (`cargo publish`, `git push --tags`), defeating the durable‑review safety floor. | Safety‑critical; 0 comments, 0 👍. |
| **#3726** | <https://github.com/Hmbown/DeepSeek-TUI/issues/3726> | No visible notice when legacy `.deepseek/` state is migrated to `.codewhale/`; users are left in the dark. | Poor UX; 0 comments, 0 👍. |
| **#3727** | <https://github.com/Hmbown/DeepSeek-TUI/issues/3727> | `codewhale doctor` lacks detection of orphaned legacy `.deepseek/` directories, making diagnosis difficult. | Diagnostic gap; 0 comments, 0 👍. |
| **#3757** | <https://github.com/Hmbown/DeepSeek-TUI/issues/3757> | Startup latency is noticeably slow; profiling and optimisation are required for a snappy launch. | Performance pain point; 0 comments, 0 👍. |

---

### 4. Key PR Progress  *(10 important pull requests)*  

| # | PR (link) | Summary of change | Community impact |
|---|-----------|-------------------|------------------|
| **#3756** | <https://github.com/Hmbown/DeepSeek-TUI/pull/3756> | Makes the interactive Agent shell **approval‑gated** by default, while still respecting `allow_shell=false`. | Improves security without breaking workflow; 0 comments. |
| **#3755** | <https://github.com/Hmbown/DeepSeek-TUI/pull/3755> | Adds WSL2/Ubuntu troubleshooting notes for missing `pkg-config`/`libdbus-1-dev` during `cargo install`. | Clears a common build blocker; 0 comments. |
| **#3754** | <https://github.com/Hmbown/DeepSeek-TUI/pull/3754> | Surfaces a structured one‑time notice when legacy `.deepseek/<state>` is migrated, telling users where their data now lives. | Enhances upgrade UX; 0 comments. |
| **#3753** | <https://github.com/Hmbown/DeepSeek-TUI/pull/3753> | Extends `codewhale doctor` to report legacy‑state diagnostics (JSON output). | Gives users a built‑in way to locate orphaned data. |
| **#3752** | <https://github.com/Hmbown/DeepSeek-TUI/pull/3752> | Restores visibility of legacy sessions by copying missing entries from `~/.deepseek/sessions` to `~/.codewhale/sessions`. | Directly fixes the “sessions appear lost” issue. |
| **#3750** | <https://github.com/Hmbown/DeepSeek-TUI/pull/3750> | Paints an opaque backdrop from `ViewStack` before any modal renders, eliminating content bleed‑through. | Improves modal reliability across the UI. |
| **#3748** | <https://github.com/Hmbown/DeepSeek-TUI/pull/3748> | Adds **Sakana Fugu** as a built‑in provider, matching the existing Moonshot/Minimax pattern. | Expands provider ecosystem; 0 comments. |
| **#3749** | <https://github.com/Hmbown/DeepSeek-TUI/pull/3749> | Implements the Sakana Fugu route (aliases, keys, defaults) harvested from #3748. | Completes provider integration. |
| **#3747** | <https://github.com/Hmbown/DeepSeek-TUI/pull/3747> | Labels readonly shell approvals calmly; uses strict read‑only classifier and marks version/help calls as read‑only. | Improves UX clarity for shell commands. |
| **#3746** | <https://github.com/Hmbown/DeepSeek-TUI/pull/3746> | Skips approval for read‑only auto‑shell shortcuts (`!`) and adds a regression test. | Streamlines workflow for harmless shell shortcuts. |

---

### 5. Feature Request Trends  

- **Localization & UI polish** – Multiple open issues (#3759, #3093, #2970) request full Korean, Spanish, Brazilian Portuguese, and other language support for the Hotbar wizard,

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*