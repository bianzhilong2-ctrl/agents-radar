# AI CLI Tools Community Digest 2026-09-21

> Generated: 2026-09-21 02:25 UTC | Tools covered: 9

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

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-21 | Source: anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

Since recent PR comment counts are unavailable in the dataset, ranking is based on update frequency, linked issues, and cross-references indicating sustained community engagement.

| Rank | Skill | Author | Updated | Status | Summary |
|------|-------|--------|---------|--------|---------|
| 1 | **skill-creator** (trigger detection & eval fixes) | MartinCajiao / ChiFungHillmanChan | 2026-09-16 | 🟢 Open | Addresses systemic `precision=100%, recall=0%` bug in trigger evaluation ([#1298](https://github.com/anthropics/skills/pull/1298), [#1769](https://github.com/anthropics/skills/pull/1769)) |
| 2 | **mcp-builder** (streamable_http_client fix + model update) | Kuldeeep18 / ExpertVagabond | 2026-09-19 | 🟢 Open | Fixes MCP≥2 import renaming and updates evaluation default to `claude-sonnet-5` ([#1742](https://github.com/anthropics/skills/pull/1742), [#1724](https://github.com/anthropics/skills/pull/1724)) |
| 3 | **office** (docx/pptx/xlsx fixes) | Lubrsy706 / TINGyu123644 / 00200200 | 2026-09-19 | 🟢 Open | Multiple critical fixes: bookmark ID collisions, missing document.xml.rels, UTF-8 redlining, tracked changes ([#541](https://github.com/anthropics/skills/pull/541), [#1790](https://github.com/anthropics/skills/pull/1790), [#1765](https://github.com/anthropics/skills/pull/1765)) |
| 4 | **AWT (AI Watch Tester)** | ksgisang | 2026-09-19 | 🟢 Open | Zero-code E2E testing skill with vision + browser control ([#822](https://github.com/anthropics/skills/pull/822)) |
| 5 | **blast-radius** | kishormorol | 2026-09-18 | 🟢 Open | Pre-bulk destructive operation safety checklist — archives users, revokes access, deletes rows ([#1776](https://github.com/anthropics/skills/pull/1776)) |
| 6 | **md2video-audio** | 70v-Yoyo | 2026-09-15 | 🟢 Open | Compiles Markdown → professional MP4 videos with human-like voiceovers via Marp ([#1703](https://github.com/anthropics/skills/pull/1703)) |
| 7 | **pyxel** | kitao | 2026-09-16 | 🟢 Open | Retro game development in Python — deterministic headless runs, frame inspection ([#525](https://github.com/anthropics/skills/pull/525)) |
| 8 | **proofcore-contract-auditor** | ProofCore-Protocol | 2026-09-16 | 🟢 Open | Automated Solidity/Rust smart contract static analysis anchored to TON Blockchain ([#1771](https://github.com/anthropics/skills/pull/1771)) |

---

## 2. Community Demand Trends (From Issues)

Based on the top issues by comment volume and engagement:

**🔒 Security & Trust (Highest Concern)**
- Issue [#492](https://github.com/anthropics/skills/issues/492) — 43 comments: Community skills impersonating official Anthropic skills under `anthropic/` namespace; trust boundary abuse is the community's #1 concern.

**🤝 Collaboration & Sharing**
- Issue [#228](https://github.com/anthropics/skills/issues/228) — 16 comments / 8 👍: Demand for org-wide skill sharing (currently requires manual .skill file distribution).
- Issue [#189](https://github.com/anthropics/skills/issues/189) — 6 comments / 9 👍: Duplicate skills across `document-skills` and `example-skills` plugins.

**🔧 Skill-Creator Infrastructure**
- Issue [#556](https://github.com/anthropics/skills/issues/556) — 12 comments / 7 👍: `claude -p` never triggers skills (0% trigger rate); core eval infrastructure broken.
- Issue [#202](https://github.com/anthropics/skills/issues/202) — 8 comments / 1 👍: skill-creator should be operational, not educational documentation.

**🧠 Reasoning & Quality Gates**
- Issue [#1385](https://github.com/anthropics/skills/issues/1385) — 4 comments / 1 👍: Proposal for reasoning quality pipeline (calibration → adversarial review → delivery verification).

**🔗 Platform & Compatibility**
- Issue [#29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock support.
- Issue [#1362](https://github.com/anthropics/skills/issues/1362) — pnpm ≥10.1 compatibility for web-artifacts-builder.

**📋 Emerging Skill Directions Anticipated:**
| Trend | Evidence |
|-------|----------|
| **Smart Contract Auditing** | proofcore-contract-auditor PR + Web3 developer demand |
| **E2E Testing Automation** | AWT skill + AI Watch Tester integration |
| **Video/Multimedia from Markdown** | md2video-audio skill |
| **Safety & Governance** | agent-governance proposal (#412), blast-radius checklist |
| **Memory & State Management** | compact-memory proposal (#1329) |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

These recently updated PRs represent skills likely to land soon based on active maintenance:

| Skill | PR | Author | Last Updated | Domain |
|-------|----|--------|--------------|--------|
| **blast-radius** | [#1776](https://github.com/anthropics/skills/pull/1776) | kishormorol | 2026-09-18 | Safety / Ops |
| **proofcore-contract-auditor** | [#1771](https://github.com/anthropics/skills/pull/1771) | ProofCore-Protocol | 2026-09-16 | Web3 / Security |
| **md2video-audio** | [#1703](https://github.com/anthropics/skills/pull/1703) | 70v-Yoyo | 2026-09-15 | Multimedia |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | lql341 | 2026-08-24 | HPC / DevOps |
| **AWT (AI Watch Tester)** | [#822](https://github.com/anthropics/skills/pull/822) | ksgisang | 2026-09-19 | Testing |
| **office UTF-8 redlining** | [#1765](https://github.com/anthropics/skills/pull/1765) | 00200200 | 2026-09-14 | Office / Localization |

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is for **reliable skill infrastructure** (trigger detection, evaluation harnesses, and security boundaries) coupled with **domain-specific automation skills** (testing, smart contracts, document processing, and multimedia generation) — revealing that the ecosystem has matured from "build skills" to "make skills work correctly and safely at scale."

---

*Report generated from anthropics/skills repository data. All PR and Issue links point to the official GitHub repository.*

---

# Claude Code Community Digest — 2026-09-21

### 1. Today's Highlights
The community is currently grappling with a significant model behavior regression, as a highly upvoted issue highlights that recent Claude models are increasingly exhibiting repetitive rhetorical tics and struggling to produce coherent prose. Concurrently, the `diff` mod is undergoing substantial refinements to improve pane management and read-only command handling. Developers are also heavily pushing for better headless authentication standards and stricter locale-aware spelling defaults.

### 2. Releases
No new versions were published in the last 24 hours.

### 3. Hot Issues
1. **[Issue #77136](https://github.com/anthropics/claude-code/issues/77136)** – *Repetitive rhetorical tics in Claude 4.7/4.8/5.0* (124 comments, 436 👍)  
   **Why it matters:** Users report that recent models struggle with coherent prose and default to repetitive phrasing despite explicit style instructions. **Community reaction:** Massive engagement indicates deep frustration with declining text generation quality in recent updates.
2. **[Issue #76694](https://github.com/anthropics/claude-code/issues/76694)** – *Cowork: lost "Choose a folder" context menu* (30 comments, 26 👍)  
   **Why it matters:** Following the Chat/Cowork merge, the UI regression removed folder selection, forcing a Chat-style upload-only menu. **Community reaction:** Active frustration over the degraded desktop/Cowork workflow.
3. **[Issue #22992](https://github.com/anthropics/claude-code/issues/22992)** – *Support device-code auth (RFC 8628) for headless environments* (19 comments, 36 👍)  
   **Why it matters:** Pro/Max users in headless or proxy environments lack a secure CLI authentication flow. **Community reaction:** Strong demand for enterprise/headless usability, reflected in high upvotes relative to comment volume.
4. **[Issue #60955](https://github.com/anthropics/claude-code/issues/60955)** – *Undocumented "Classify session states" and privacy impacts* (2 comments, 22 👍)  
   **Why it matters:** A feature toggling session classification exists but lacks documentation, raising concerns about undocumented data processing and costs. **Community reaction:** High upvotes signal significant privacy and transparency concerns.
5. **[Issue #95200](https://github.com/anthropics/claude-code/issues/95200)** – *Auto mode regression since 2.1.270* (3 comments, 0 👍)  
   **Why it matters:** A core update caused the auto-mode classifier to block routine owner tasks 12x more often, requiring 55+ clicks for minor config changes. **Community reaction:** Power users report severe productivity loss; indicates a critical regression in permission heuristics.
6. **[Issue #95436](https://github.com/anthropics/claude-code/issues/95436)** – *Agent asserts unverified causes as fact and persists to memory* (1 comment, 0 👍)  
   **Why it matters:** The agent hallucinated hypotheses as verified conclusions during a complex iOS release task and wrote them into persistent memory. **Community reaction:** Deep concern over memory corruption and cascading agent errors.
7. **[Issue #90603](https://github.com/anthropics/claude-code/issues/90603)** – *Inconsistent British English spellings in US codebases* (2 comments, 0 👍)  
   **Why it matters:** Claude unpromptedly emits en-GB spellings ("colour", "parameterise") in code on en-US projects. **Community reaction:** Consistent with locale-spelling feature requests; users expect US defaults for US locales.
8. **[Issue #92215](https://github.com/anthropics/claude-code/issues/92215)** – *Claude Design first-party MCP always 403s* (6 comments, 4 👍)  
   **Why it matters:** The MCP transport never attaches the design-scoped token, and the `claude mcp login` OAuth flow is dead. **Community reaction:** Frustration over broken first-party integrations and dead-end error messages.
9. **[Issue #95326](https://github.com/anthropics/claude-code/issues/95326)** – *Chrome extension blocks reddit.com tools

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest — 2026-09-21**

**1. Today's Highlights**
The project has shipped a new nightly build (v0.62.0), while community attention pivots heavily toward critical agent stability and memory management bugs. High-priority issues regarding runaway "thinking loops" and misleading subagent termination statuses are dominating the discussion. Concurrently, the maintainers are addressing core reliability fixes, including scheduler disposal, TOML policy validation, and OAuth persistence, alongside a massive Dependabot update of 77 npm packages.

**2. Releases**
*   **[v0.62.0-nightly.20260921.gcfbcaa8df](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260920.gcfbcaa8df...v0.62.0-nightly.20260921.gcfbcaa8df)**
    *   *Summary:* Latest nightly release. Changelog details are aggregated from recent merged PRs, including fixes for core scheduler disposal, TOML policy rule validation, and OAuth credential persistence.

**3. Hot Issues**
*   **[#26116](https://github.com/google-gemini/gemini-cli/issues/26116): Gemini stuck in thinking loop for hours** (14 comments, 5 👍) — *Critical regression.* Users report the CLI entering infinite thinking loops that take hours to complete tasks previously finished in minutes, sometimes looping even after task completion.
*   **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323): Subagent recovery after MAX_TURNS reported as GOAL success** (13 comments, 2 👍) — *Misleading status.* The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` despite hitting its maximum turn limit without performing any analysis, hiding the actual interruption from the user.
*   **[#22633](https://github.com/google-gemini/gemini-cli/issues/22633): Gemini stops while "thinking" and requires "continue"** (5 comments, 4 👍) — *Workflow friction.* The agent frequently halts mid-think, forcing users to manually type "continue" to prompt the next step.
*   **[#28361](https

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI Community Digest — 2026-09-21

### Today's Highlights

No new Kimi Code CLI release was published in the last 24 hours. Community activity focused on reliability fixes: Windows encoding/startup issues, HTTP header sanitization, MCP compatibility, Web UI input behavior, and OpenCode Go session handling. Two open issues stand out as potentially high-impact: a large-prompt client crash before network access and intermittent OAuth timeouts during subagent launches.

---

### Hot Issues

| Issue | Why it matters | Community reaction |
|---|---|---|
| [#2655 Client crashes on large prompts: stack overflow in path regex](https://github.com/MoonshotAI/kimi-cli/issues/2655) | Open bug affecting very large prompts, reportedly crashing before any network request. This is significant because it blocks large-context workflows at the client layer. | Newly opened; 0 comments so far, but high severity. |
| [#2650 Intermittent subagent launch failure: OAuth token fetch to `auth.kimi.ai` times out](https://github.com/MoonshotAI/kimi-cli/issues/2650) | Subagents can fail even when the main session is authenticated. Retries eventually succeed, suggesting transient auth-endpoint handling rather than user auth failure. | Open; 1 comment. |
| [#773 Windows crash when entering any content: `'ascii' codec can't encode characters`](https://github.com

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-09-21

### Today's Highlights

The OpenCode community remained active with no new releases but a flurry of issue resolutions and PR activity. Key themes included TUI UX refinements, model/streaming reliability improvements, and fixes for cross-platform tooling bugs. Notably, PRs addressed OAuth authentication gaps and startup performance optimizations.

---

### Releases

No new releases in the past 24 hours.

---

### Hot Issues

1. **[#27018](https://github.com/anomalyco/opencode/issues/27018)** – Local server disconnections in Desktop v1.14.48  
   *Closed* with 13 comments. Regression causing disconnections post-send. Community confirmed instability vs. prior versions.

2. **[#9955](https://github.com/anomalyco/opencode/issues/9955)** – Excessive TUI padding and layout bloat  
   *Closed* with 10 comments and 21 👍. Long-standing UX complaint about vertical space inefficiency; resolution likely involved layout compression.

3. **[#22260](https://github.com/anomalyco/opencode/issues/22260)** – Read tool lacks audio/video attachment support  
   *Closed* with 8 comments and 8 👍. Users requested parity with image/PDF handling for media files. Implementation may follow.

4. **[#49938](https://github.com/anomalyco/opencode/issues/49938)** – Missing `default2` workspace after web redesign  
   *Open* with 2 comments and 5 👍. User lost access to secondary workspace post-redesign; potential regression in workspace visibility logic.

5. **[#38386](https://github.com/anomalyco/opencode/issues/38386)** – Pre-push hook crashes low-RAM machines  
   *Closed* with 2 comments. Turbo typecheck runs without concurrency limits, exhausting memory on laptops. Fix likely caps parallelism.

6. **[#38376](https://github.com/anomalyco/opencode/issues/38376)** – VS Code extension fails on Windows with ENOENT  
   *Closed* with 2 comments and 1 👍. `opencode` binary spawn fails in `dist/extension.js`. Likely path resolution fix.

7. **[#38328](https://github.com/anomalyco/opencode/issues/38328)** – Laguna S 2.1 Free model rate-limited on first use  
   *Closed* with 2 comments and 3 👍. Zen backend misconfigured rate limits blocked immediate usage. Resolved server-side or client retry tuning.

8. **[#38351](https://github.com/anomalyco/opencode/issues/38351)** – Permission globs fail silently in agents  
   *Closed* with 2 comments. Docs suggest relative paths, but runtime uses absolute—leading to non-matching rules. Fix aligns path resolution.

9. **[#38303](https://github.com/anomalyco/opencode/issues/38303)** – `/sessions` returns empty despite DB entries  
   *Closed* with 2 comments. Workspace ID is NULL and table empty—root cause under review. Likely schema/session linkage fix.

10. **[#38076](https://github.com/anomalyco/opencode/issues/38076)** – Fresh chat sends 42k input tokens before prompt  
    *Closed* with 3 comments. Excessive context preamble sent even for clean sessions. Optimizes initial payload size.

---

### Key PR Progress

1. **[#50231](https://github.com/anomalyco/opencode/pull/50231)** – Upgrade Effect to rc.115 (*Open*)  
   Aligns with latest stable RC, addressing breaking changes in socket lifecycle, schema parsing, CLI constructors, and more.

2. **[#50264](https://github.com/anomalyco/opencode/pull/50264)** – Bump TogetherAI SDK to v2.0.68 (*Closed*)  
   Fixes zero-token/$0-cost logging for Together models. Ensures `stream_options.include_usage` is passed for accurate metrics.

3. **[#49882](https://github.com/anomalyco/opencode/pull/49882)** – Open agent-ref files as rich artifact tabs (*Open*)  
   Renders non-text files (e.g., CSVs, reports) in dedicated tabs instead of stripping links or crashing renderers.

4. **[#50265](https://github.com/anomalyco/opencode/pull/50265)** – Show empty review state when no VCS (*Open*)  
   Prevents infinite “Loading changes…” spinner in VCS-less projects. Adds fallback UI state.

5. **[#50197](https://github.com/anomalyco/opencode/pull/50197)** – Locate code-mode failures in submitted source (*Closed*)  
   Diagnostics now map directly to original source lines, not wrapped TS offsets. Improves debugging clarity.

6. **[#50262](https://github.com/anomalyco/opencode/pull/50262)** – Surface recent dirs in `/move` picker (*Open*)  
   Adds bounded “Recent” section based on session update timestamps. Enhances discoverability during session moves.

7. **[#50256](https://github.com/anomalyco/opencode/pull/50256)** – Hide redundant server controls with single server (*Open*)  
   Removes confusing default/server removal options when only one backend is configured.

8. **[#50254](https://github.com/anomalyco/opencode/pull/50254)** – Explicit OAuth handshake for unauthenticated 200s (*Open*)  
   Fixes silent connection success for Gmail MCP where handshake returns 200 instead of 401. Forces proper OAuth flow.

9. **[#50253](https://github.com/anomalyco/opencode/pull/50253)** – Lazy-load commands for `--version` (*Open*)  
   Skips full startup graph load for quick version checks. Reduces CLI lag on slow or busy systems.

10. **[#50251](https://github.com/anomalyco/opencode/pull/50251)** – Surface turns ending with no model output (*Open*)  
   Detects silent stream completions with zero output tokens and surfaces them clearly. Avoids idle/hang perception.

---

### Feature Request Trends

- **Improved TUI Layout**: Consolidation of header/footer and reduction of vertical padding.
- **Enhanced Read Tool Media Handling**: Support for attaching audio/video as model-native inputs.
- **Session Portability**: Cross-device conversation sync via skill-based backup/restore.
- **VS Code Integration**: Stability and native file interaction enhancements.
- **Tab Management UX**: Prevent accidental closure of conversation tabs.
- **Language Localization**: Expand localized documentation coverage (e.g., Ukrainian).

---

### Developer Pain Points

- **Startup Performance**: Commands like `--version` trigger heavy initialization.
- **Memory Exhaustion**: Unbounded Turbo/typecheck concurrency degrades performance on constrained hardware.
- **Silent Failures**: Silent permission glob mismatches, missing workspaces, empty session lists reduce trust.
- **Cross-Platform Bugs**: Windows-specific issues (ENOENT spawns, RMUX hangs) persist despite fixes.
- **OAuth Misbehavior**: Non-standard handshake responses cause silent failures without explicit handling.

--- 

*End of Digest — Last updated: 2026-09-21*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-21

## 1. Today's Highlights
- **v0.86.1 released** with Meta Muse provider support (`/login meta` or `META_API_KEY`), adding OAuth access to Meta's Spark models.
- **Windows usability** remains the hottest topic (#7547, 67 comments), with the team actively discussing how to prioritize native support vs. WSL/docs.
- **TUI performance regressions** surfaced in multiple issues: full re-renders on large sessions (#9807), grapheme segmentation bottlenecks during streaming (#6665), and broken fullscreen image rendering on Windows (#9169).

---

## 2. Releases
### v0.86.1 — 2026-09-20
- **New Feature**: Meta Muse provider — sign in with `/login meta` or configure `META_API_KEY` to access Muse Spark models.  
  [Release notes](https://github.com/earendil-works/pi/releases/tag/v0.86.1) · [Provider docs](https://github.com/earendil-works/pi/blob/v0.86.1/packages/coding-agent/docs/providers.md#meta-muse-subscription)

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows strategy**: how to support Pi on Windows (native, WSL, containers) | 67 comments — largest active thread; core team seeking focus areas for bugs/docs/out-of-box experience | 👍 2; maintainers asking for user workflows to prioritize |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | **TUI pins a core while streaming**: uncached `Intl.Segmenter` + per-chunk Markdown rebuild | 13 comments, 👍 6; root cause identified in render hot path; affects all long streaming sessions | High engagement; fix likely in next patch |
| [#9815](https://github.com/earendil-works/pi/issues/9815) | **Mistral API ignores `Retry-After` header** → 429 errors | Provider-retry logic doesn't honor standard header; blocks Mistral users | 5 comments; clear fix path in `provider-retry.ts` |
| [#9508](https://github.com/earendil-works/pi/issues/9508) | **pi-ai sends OpenAI-specific fields to compatible providers** → 400/422 errors | Breaks OpenAI-compatible providers (e.g., local models, proxies) that reject unknown fields | 5 comments; affects extension/provider ecosystem |
| [#9062](https://github.com/earendil-works/pi/issues/9062) | **Quadratic tool-call argument parsing** with fragmented deltas | O(N²) accumulation in `processResponsesStream`; degrades with many tool calls | 5 comments; performance critical for agent loops |
| [#9169](https://github.com/earendil-works/pi/issues/9169) | **Images broken in fullscreen TUI on Windows** (WezTerm) | Regression from #4883; only fullscreen mode affected | 5 comments, 👍 1; Windows-specific rendering bug |
| [#9794](https://github.com/earendil-works/pi/issues/9794) | **Import error in 0.86.0**: missing chunk `openai-responses-TFDINO6W.js` | Blocking upgrade for Windows users; likely bundling/packaging issue | 4 comments; high severity for affected users |
| [#9688](https://github.com/earendil-works/pi/issues/9688) | **Clipboard copy regression** (OSC 52 only in SSH) | Fix for #9618 broke container/non-SSH clipboard; 👍 2 | 4 comments; revert or conditional logic needed |
| [#9497](https://github.com/earendil-works/pi/issues/9497) | **CJK IME input lag on Windows**; `showHardwareCursor` workaround | IME candidate window missing, 15s delay before input works; blocks Asian-language users | 3 comments; `showHardwareCursor` mitigates |
| [#9807](https://github.com/earendil-works/pi/issues/9807) | **Full re-render causes lag at 800+ messages** (1.7MB JSON) | Unlike OpenCode's cell-level diffing, Pi re-renders entire scrollback | 2 comments; architectural TUI perf issue |

---

## 4. Key PR Progress (Merged in Last 24h)

| PR | Type | Summary |
|----|------|---------|
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **feat** | **Meta provider with Muse OAuth** — implements daily token re-minting from identity token; streaming currently "fake" (burst output). Ships in v0.86.1. |
| [#9116](https://github.com/earendil-works/pi/pull/9116) | **feat** | **Mid-conversation system messages** — allows prompt/tool changes as system deltas instead of full rewrite; foundation for #9117. |
| [#9117](https://github.com/earendil-works/pi/pull/9117) | **feat** | **Coding agent: deliver prompt/tool changes as system message deltas** — stacked on #9116; avoids rewriting top-level system prompt on each change. |
| [#9804](https://github.com/earendil-works/pi/pull/9804) | **fix** | **Exclude Cerebras from `supportsStrictMode`** — strict/non-strict tool mix caused 400 errors; unblocks Cerebras users with extensions. |
| [#9800](https://github.com/earendil-works/pi/pull/9800) | **fix** | **Bash output temp file WriteStream errors** — handles write stream failures when output exceeds truncation threshold. |
| [#9799](https://github.com/earendil-works/pi/pull/9799) | **fix** | **Terminate agentLoop streams on unrecoverable failure** — adds rejection handler for setup-time errors (auth/network before first event). |
| [#8743](https://github.com/earendil-works/pi/pull/8743) | **fix** | **Ignore stale Kitty image conversions** — ties cache entries to source image; prevents rendering stale/partial conversions during tool execution. |

---

## 5. Feature Request Trends
1. **Windows-first experience** — native terminal support, IME fixes, clipboard, installer (Homebrew #9802), docs.
2. **TUI incremental rendering** — cell-level diffing, virtualized scrollback, hardware cursor option (#9748).
3. **Provider compatibility layer** — normalize OpenAI-compatible quirks (strict mode, retry headers, field filtering), regional OAuth (Kimi #9818).
4. **Settings granularity** — image resize limits (#9631), skills glob syntax fixes (#9806, #9808), bash timeout units (#9785).
5. **Extension API hardening** — bound streaming methods (#9821), npm resolution via `package.json` exports (#9817), auth check visibility (#9448).
6. **Session tooling** — efficient session listing (head/tail JSON parsing #9820), correlation for RPC steer (#9803).

---

## 6. Developer Pain Points (Recurring)
- **Windows is a second-class platform**: IME broken, clipboard broken in containers, fullscreen images broken, import errors on upgrade, no Homebrew in README.
- **TUI doesn't scale**: full re-render on every keystroke/scroll at >800 messages; grapheme segmentation burns a core during streaming.
- **Provider fragmentation**: each OpenAI-compatible API has unique quirks (strict tools, retry headers, extra fields, context overflow codes) that Pi must paper over.
- **Extension system gaps**: unbound methods lose `this`, npm resolution fails for modern packages, auth check misses extension providers.
- **Configuration footguns**: skills filter `-` prefix is exact-match only (globs silently ignored), `!` undocumented; bash timeout expects seconds but code treats as ms.
- **Upgrade fragility**: v0.86.0 introduced missing chunks, clipboard regression, NInfer breakage, RPC steer correlation loss.

---

*Generated from github.com/badlogic/pi-mono — 46 issues & 7 PRs updated in last 24h.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-09-21

## 1. Today's Highlights

Qwen Code v0.24.2 has been released alongside nightly builds, introducing improved audio capture capabilities and refined context management. The release focuses on restoring remote workspace functionality and fixing long-context performance issues that have impacted users with large-context models. Key highlights include enhanced Live Voice microphone capture via AudioWorklet and corrected behavior around context usage telemetry.

## 2. Releases

- **v0.24.2** – Official release featuring restored remote workspace flows and improved audio capture. Nightly builds continue to iterate on stability. [v0.24.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.2) | [v0.24.2-nightly.20260920.eceaede18e](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.2-nightly.20260920.eceaede18e)

## 3. Hot Issues

| # | Title | Impact | Status |
|---|-------|--------|--------|
| #12028 | Non-conversation context token governance | Large-context models suffer from hidden overhead from system prompts, tool schemas, and skill listings | Open |
| #12287 | Workflow retry-from-history hardening | Complex retry logic requires separate review to avoid regression | Open |
| #12029 | Context-window budget scaling broken | Budget calculations invert on large windows, causing unexpected tool preload behavior | Open |
| #12048 | Context-usage telemetry drops with non-function tools | Telemetry disappears when non-function tools are present, obscuring usage metrics | Open |
| #11815 | splitCompoundCommandSegments bug | Operators inside trailing `#` comments cause incorrect command splitting | Open |
| #12224 | `/cd` command fails post-v0.24.0 | Directory change commands fail with "response in progress" errors | Open |
| #12030 | Extension context files always loaded | Active extensions' context files concatenate into system prompts without gating | Open |
| #12303 | Cross-session gate unresolved | Host-level session management lacks final decisions on settlement and naming | Open |
| #12332 | Web-shell publish verifier rejects wildcards | Artifact validation fails on valid npm subpath patterns like `./*` | Open |
| #12351 | Publish artifact verifier false positive | Silent assertion breaks on npm warnings, hiding potential publishing issues | Open |

## 4. Key PR Progress

| # | Title | Area | Significance |
|---|-------|------|--------------|
| #12347 | Write resumed run's checkpoint before registration | Workflow persistence | Ensures checkpoints are written before run completion, preventing lost state on failures |
| #12362 | Restore mobile history navigation | Web Shell UX | Reintroduces ↑/↓ buttons and immediate history navigation for mobile editors |
| #12328 | Support host settings item allowlists | Web Shell extensibility | Optional allowlists let hosts hide specific settings from embedded environments |
| #12311 | Structured shell execution results | CLI/Web Shell output | Organizes command/output/execution details with timing and state metadata |
| #12356 | Trajectory panel for run timing | Web Shell analytics | Right-panel visualization of session durations, TTFT, and token counts |
| #12340 | Optimize one-shot headless execution | Performance | Defaults shell commands to pipe-based `child_process` backend for faster startup |
| #12330 | Browser privacy disclosure docs | Compliance | Adds browser data handling notices aligned with permissions and storage policies |
| #12347 | Checkpoint write-before-register | Reliability | Prevents lost checkpoints when workflows fail mid-run |
| #12362 | Mobile history navigation | UX improvement | Restores intuitive navigation for mobile-composed edits |
| #12328 | Host settings allowlists | Flexibility | Gives hosts fine-grained control over which settings appear in the UI |

## 5. Feature Request Trends

The most frequent themes in open issues point toward **long-context efficiency**, **cross-session consistency**, and **enhanced Web Shell capabilities**:

- **Context Management** – Multiple issues (#12028, #12054, #12091) highlight that non-conversation context (built-in tools, skill listings) dominates token budgets on large models. Efforts to bound these resources and improve transparency are critical.
- **Session & Workflow Reliability** – Bugs around session deletion corrupting transcripts (#12091), directory change failures (#12224), and checkpoint loss (#12347) indicate ongoing work to stabilize multi-step interactions.
- **Web Shell Extensibility** – Repeated requests for host settings allowlists (#12328), better publish verification (#12332, #12351), and mobile history navigation (#12362) suggest users want more granular control over the environment.
- **Performance Optimization** – One-shot headless execution (#12340) and trajectory panels (#12356) aim to reduce latency and provide richer debugging insights.

## 6. Developer Pain Points

1. **Context Overhead** – System prompts, tool schemas, and skill listings consume disproportionate tokens on large-context models, affecting cost and quality.
2. **Directory Navigation** – The `/cd` command fails after v0.24.0, breaking common workflows for file-based operations.
3. **Telemetry Inconsistency** – Context usage metrics disappear when non-function tools are present, making monitoring unreliable.
4. **Session Integrity** – Deleting sessions improperly recreates files with broken references, leading to degraded experiences.
5. **Publish Verification** – The web-shell publish verifier rejects valid npm exports and silently ignores warnings, risking incomplete deployments.
6. **CI Stability** – Recent main-branch CI failures due to unused test definitions require attention to keep the pipeline healthy.
7. **Security Exposure** – Inline secrets in tool arguments are logged verbatim in chat recordings and telemetry, posing data leakage risks.
8. **Mobile Editing Experience** – Missing history navigation on mobile platforms reduces productivity compared to desktop.

These trends reflect a focus on making Qwen Code more efficient, reliable, and secure—particularly for enterprise and production workloads involving large-context models and complex multi-step workflows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*