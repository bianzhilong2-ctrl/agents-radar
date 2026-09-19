# AI CLI Tools Community Digest 2026-09-19

> Generated: 2026-09-19 02:18 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-19)

## 1. Ecosystem Overview

The AI CLI tool landscape in late 2026 is characterized by intense specialization and converging priorities among major players. **Claude Code**, **Gemini CLI**, and **OpenCode** lead in feature breadth—each offering distinct strengths in multi-agent orchestration, persistent task tracking, and cross-tool standardization. Meanwhile, **Qwen Code** and **DeepSeek TUI** differentiate through infrastructure reliability (CI/CD, cloud facts) and terminal/user-experience excellence respectively. The broader ecosystem shows a clear shift toward modular, plug-in-driven architectures (evident in Claude Code's mods/plugins initiative) and standardized cross-tool protocols such as `AGENTS.md` adoption. While most tools remain active, the pace of iteration varies significantly—Gemini CLI and Qwen Code demonstrate the highest velocity, whereas DeepSeek TUI maintains a stable baseline with incremental enhancements.

## 2. Activity Comparison

| Tool | Hot Issues | Notable PRs | Recent Release |
|------|------------|-------------|----------------|
| **Claude Code** | 10 | `mods/agents-md`, `mods/agents-md` (PR #95409), `mods/agents-md` (instrumentation) | v2.1.277 (2026-09-19) |
| **Gemini CLI** | 10 | `persistent-file-task-tracking`, `ast-aware-tools`, `probe-agent-esbuild-interop`, `mcp-prompt-text` | v0.62.0-nightly.20260919 |
| **GitHub Copilot CLI** | <5 | Limited public PR activity | None (stable) |
| **Kimi Code CLI** | 10 | `hooks/extract-content-part`, `strip-shell-wrapper-extended` | None (stable) |
| **OpenCode** | 10 | `agent-referenced-files-as-artifacts`, `non-utf8-encoding`, `show-first-window`, `v8-code-cache`, `lazy-compile` | None (stable) |
| **Qwen Code** | 10 | `web-terminal-pty-fix`, `hybrid-code-mode`, `permission-granularity`, `goal-runtime-slimming` | v0.24.1-preview.0, v0.24.0-nightly.20260918 |
| **DeepSeek TUI** | 10 | `csdn-star-guide-provider`, `stack-size-doubling`, `fleet-adaptive-anti-stall`, `computer-use-professionalizer` | Baseline 0.9.13 (unchanged) |

**Key Takeaways:** Gemini CLI and Qwen Code tie for highest activity volume (10 issues each, multiple PRs per tool). Claude Code leads in release cadence with a recent major version bump. DeepSeek TUI and Kimi Code show lower release frequency but steady issue triage. GitHub Copilot CLI appears least active in the public digest, consistent with its mature, widely adopted position.

## 3. Shared Feature Directions

Several cross-cutting requirements emerge across the community digests:

| Shared Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **Multi-Agent Collaboration** | Claude Code, Gemini CLI, OpenCode | Standardized `AGENTS.md` adoption (claimed by Claude Code); Agent Team orchestration (Gemini CLI #19430); persistent task tracking across agents (OpenCode #29393) |
| **Persistent State & Task Management** | OpenCode, Qwen Code, DeepSeek TUI | Long-term task tracking (OpenCode #29393), session persistence (Qwen Code #12053), state recovery (DeepSeek TUI #6184) |
| **Security & Moderation Hardening** | Gemini CLI, Qwen Code | False-positive safety flag reduction (Gemini #95500), permission granularity (Qwen #12223), secure MCP registration URLs (Qwen #12165) |
| **Extensibility / Plugin Architecture** | Claude Code | Modular "mods" system (PR #95409) for plugin distribution; OpenCode's `oc://renderer` normalization suggests similar goals |
| **Cross-Platform Compatibility** | All | macOS PTY bundling (Qwen #11872), Windows shell wrapper handling (Kimi #1480), Linux GLIBC compatibility (Qwen #12115) |
| **Terminal / UX Excellence** | DeepSeek TUI, Qwen Code | Enhanced TUI stability (DeepSeek TUI #6184), LSP Unicode support (Qwen #12206), rich artifact handling (Qwen #49882) |

These directions indicate a maturing ecosystem where fundamental challenges—multi-agent coordination, state persistence, and security—are being addressed simultaneously across vendors.

## 4. Differentiation Analysis

| Dimension | Leader | Rationale |
|-----------|--------|-----------|
| **Feature Scope** | **Claude Code** | Most comprehensive: AGENTS.md standardization, mods/plugins, multi-agent teams, extensive issue triage. |
| **Multi-Agent Orchestration** | **Gemini CLI** | Explicit "Parallel Agent Teams" feature (#19430) and AST-aware tooling for agent-driven workflows. |
| **Performance Optimization** | **OpenCode** | Aggressive perf PRs (task tracking, code caching, lazy compilation) with measurable latency reductions. |
| **Reliability & CI** | **Qwen Code** | CI packaging tightening, ACP boundary acceptance, permission system refinements. |
| **Terminal UX / Accessibility** | **DeepSeek TUI** | Stack size doubling, CSDN provider integration, computer-use professionalization, react stability fixes. |
| **Agent File Handling** | **Kimi Code** | Rich artifact tabs for agent-referenced files (screenshots, reports) replacing dead links. |
| **Modular Architecture** | **Claude Code** | First-class mods/plugins system with manifest, hooks, and testing infrastructure. |

Each tool occupies a niche: Claude Code excels at extensibility and multi-agent standards; Gemini CLI leads in collaborative orchestration; OpenCode optimizes speed and agent integration; Qwen Code prioritizes infrastructure reliability; DeepSeek TUI pushes terminal UX boundaries; Kimi Code focuses on UI customization and stability.

## 5. Community Momentum & Maturity

- **Most Active:** **Gemini CLI** and **Qwen Code** (both 10 hot issues, multiple PRs each) demonstrate the highest community engagement and rapid iteration cycles. Their frequent releases and open PR discussions indicate strong developer interest and continuous improvement.
- **Steady Growth:** **Claude Code** and **OpenCode** maintain consistent issue streams and regular PR contributions, showing mature ecosystems with healthy growth trajectories.
- **Stable Baselines:** **DeepSeek TUI** and **Kimi Code** exhibit lower release frequency but sustained issue triage, suggesting they are well-maintained but less volatile. These tools provide reliable foundations rather than bleeding-edge experimentation.
- **Emerging Players:** **GitHub Copilot CLI** appears relatively quiet in the public digest, possibly due to maturity or reduced public discourse, though its underlying product remains widely deployed.

Overall, the ecosystem shows increasing convergence on shared standards (AGENTS.md) and modular designs, while individual tool identities remain distinct based on primary use case.

## 6. Trend Signals

1. **Multi-Agent Collaboration Dominance** – Every tool mentions either agent teams, sub-agent orchestration, or persistent task tracking. This signals industry-wide recognition that multi-agent workflows are essential for complex coding and research tasks.
2. **State Persistence & Task Tracking** – OpenCode, Qwen Code, and DeepSeek TUI all prioritize long-term state management, reflecting the need for seamless cross-session continuity in collaborative environments.
3. **Security Hardening** – False-positive safety flags, permission granularity, and MCP authentication improvements are recurring pain points, indicating regulatory and operational demands for safer, more controlled AI deployments.
4. **Cross-Platform Reliability** – macOS PTY bundling, Windows shell wrappers, and Linux GLIBC compatibility issues highlight the importance of maintaining broad hardware support as AI workloads move beyond idealized lab environments.
5. **Modular & Plugin-Driven Architectures** – Claude Code's mods/plugins initiative and Qwen Code's permission system suggest a shift toward composable, extensible AI tooling rather than monolithic solutions.

These trends collectively point toward an ecosystem evolving from isolated CLI utilities toward integrated, collaborative, and securely governed AI development platforms. Organizations adopting these tools should prioritize multi-agent capabilities and robust state management to future-proof their workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-19 | Source: anthropics/skills*

---

## 1. Top Skills Ranking

The following Skills have generated the most community discussion across both PRs and Issues, ranked by the volume and intensity of engagement:

### 🥇 **skill-creator** — Trigger Evaluation & Quality Fixes
Multiple open PRs and Issues converge on this meta-skill. PRs [#1298](https://github.com/anthropics/skills/pull/1298), [#539](https://github.com/anthropics/skills/pull/539), and [#1769](https://github.com/anthropics/skills/pull/1769) address critical bugs: false-negative trigger evaluations, YAML special-character handling in descriptions, and 0% recall reporting. Issue [#202](https://github.com/anthropics/skills/issues/202) (8 comments) argues the skill itself needs a best-practice overhaul. This is the most actively debated skill in the ecosystem.
- **Status**: Multiple open PRs pending merge; core functionality under active repair.

### 🥈 **mcp-builder** — Evaluation & Compatibility Overhaul
PRs [#1742](https://github.com/anthropics/skills/pull/1742) (mcp>=2 compatibility) and [#1724](https://github.com/anthropics/skills/pull/1724) (model updated to claude-sonnet-5) address critical infrastructure drift. Issue [#1390](https://github.com/anthropics/skills/issues/1390) reveals evaluation.py fabricates errors against real MCP servers, scoring 0/N — a fundamental evaluation integrity problem.
- **Status**: Active maintenance; evaluation pipeline under scrutiny.

### 🥉 **document-skills / office-skills** — DOCX, PDF, ODT, PPTX, XLSX
This family of Skills (PRs [#514](https://github.com/anthropics/skills/pull/514), [#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541), [#486](https://github.com/anthropics/skills/pull/486), [#1765](https://github.com/anthropics/skills/pull/1765)) generates significant discussion around document corruption, case-sensitive file references, tracked change collisions, and UTF-8 redlining diffs. Issue [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) highlights duplicate content between document-skills and example-skills plugins.
- **Status**: Multiple fixes in flight; duplicate-skills concern unresolved.

### 4. **Frontend Design Skill** — Clarity & Actionability Rewrite
PR [#210](https://github.com/anthropics/skills/pull/210) revises the frontend-design skill for better Claude-followability. Community feedback indicates the original was too conceptual and not actionable enough for in-conversation execution.
- **Status**: Open; improvement pass in progress.

### 5. **claude-api Skill** — Context Window Overload Alert
Issue [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) flags that the bundled claude-api skill eagerly injects ~156k tokens in a single tool call, exhausting the context window. This is a critical performance concern for all users.
- **Status**: Open bug report; no fix PR yet visible.

### 6. **blast-radius** — Pre-Destructive Operation Safety Checklist
PR [#1776](https://github.com/anthropics/skills/pull/1776) (created 2026-09-17) introduces a safety-focused skill for classifying the impact radius of bulk or destructive operations before execution. Highly topical given the ecosystem's focus on agent safety.
- **Status**: Open; recently proposed.

### 7. **Hivemind** — Zero-Cost Multi-Agent Orchestration
PR [#1628](https://github.com/anthropics/skills/pull/1628) proposes delegating mechanical work to headless opencode workers on free models while Claude Code acts as planner/reviewer/merger. Addresses context-window scarcity as the key bottleneck.
- **Status**: Open; conceptually novel.

### 8. **ProofCore Contract Auditor** — Web3 Smart Contract Security
PR [#1771](https://github.com/anthropics/skills/pull/1771) (created 2026-09-15) adds a skill for automated static analysis of Solidity/Rust smart contracts with cryptographic audit proofs anchored to the TON Blockchain. Represents niche Web3 tooling demand.
- **Status**: Open; very recent submission.

---

## 2. Community Demand Trends

Distilled from open Issues, the following new Skill directions show the strongest community anticipation:

| Demand Direction | Evidence | Key Issue(s) |
|---|---|---|
| **Security & Trust Boundaries** | 43 comments on Issue #492 — community skills impersonating official Anthropic skills under the `anthropic/` namespace | [#492](https://github.com/anthropics/skills/issues/492) |
| **Organizational Skill Sharing** | 16 comments, 8 👍 — users want org-wide shared skill libraries instead of manual .skill file distribution | [#228](https://github.com/anthropics/skills/issues/228) |
| **Multi-Agent Orchestration** | Multiple proposals (Hivemind PR #1628, Issue #1385 Reasoning Quality Gate Pipeline) | [#1385](https://github.com/anthropics/skills/issues/1385) |
| **Agent Governance & Safety** | Issue #412 (6 comments) proposes policy enforcement, threat detection, and audit trail patterns | [#412](https://github.com/anthropics/skills/issues/412) |
| **Compact / Symbolic Memory** | Issue #1329 (9 comments) proposes a skill for compact symbolic notation of agent state to reduce context bloat | [#1329](https://github.com/anthropics/skills/issues/1329) |
| **MCP Exposure & Interoperability** | Issue #16 (4 comments) requests Skills be exposed as MCPs for standardized API signaling | [#16](https://github.com/anthropics/skills/issues/16) |
| **Platform-Specific Deployment** | Issue #29 (4 comments) requests AWS Bedrock compatibility; Issue #1175 raises SharePoint/SPO document security concerns | [#29](https://github.com/anthropics/skills/issues/29), [#1175](https://github.com/anthropics/skills/issues/1175) |
| **Workflow Automation** | Buffer API skill (PR #1627) and md2video-audio (PR #1703) show demand for content scheduling and media conversion automation | [#1627](https://github.com/anthropics/skills/pull/1627), [#1703](https://github.com/anthropics/skills/pull/1703) |

---

## 3. High-Potential Pending Skills

Active-comment PRs not yet merged that may land soon based on author responsiveness and issue linkage:

| Skill | PR | Created | Key Signal |
|---|---|---|---|
| **md2video-audio** | [#1703](https://github.com/anthropics/skills/pull/1703) | 2026-09-01 | Recent update (09-15); comprehensive SKILL.md defined; addresses media conversion gap |
| **blast-radius** | [#1776](https://github.com/anthropics/skills/pull/1776) | 2026-09-17 | Very recent; safety-oriented; aligns with community trust/security concerns from Issue #492 |
| **Buffer API Agent Skill** | [#1627](https://github.com/anthropics/skills/pull/1627) | 2026-08-21 | Active through 09-05; fills workflow automation niche; broad agent compatibility |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | 2026-08-20 | HPC/Slurm profile-based operations; serves enterprise infrastructure niche |
| **H

---

# Claude Code Community Digest
**2026-09-19** · *Source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)*

---

## Releases

### [v2.1.277](https://github.com/anthropics/claude-code/releases)
- **AGENTS.md support** — In projects without a `CLAUDE.md`, Claude Code now reads `AGENTS.md` instead, configurable under "Project instructions" in `/config`. Not yet available on Bedrock, Vertex AI, or Foundry. This ships the most-upvoted community request in the repo's history (5,169 👍 on #6235).
- **New gateway env var** — `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1` added for Claude apps gateways whose only egress boundary is the proxy.

---

## Hot Issues (10 Noteworthy)

### 1. [#6235 — Support AGENTS.md](https://github.com/anthropics/claude-code/issues/6235) · **CLOSED** · 👍 5,169 · 💬 400
The long-running request to adopt the cross-tool `AGENTS.md` standard (already used by Codex, Amp, and Cursor) has shipped in v2.1.277. The community argued that `CLAUDE.md` was too Claude-specific for multi-agent collaboration — this closes the loop on a year-long standardization effort.

### 2. [#91870 — Mods: make Claude 10x more extensible](https://github.com/anthropics/claude-code/issues/91870) · **OPEN** · 👍 121 · 💬 201
@poteat's proposal to turn Claude Code into a plugin-powered platform ("mods") has drawn intense engagement. Prototype PRs (#95409, #95417) landing in the last 24h suggest maintainers are moving this forward. The `mods/agents-md` PR adds an `instructionFiles` option, mapping directly to the new AGENTS.md support.

### 3. [#18435 — Multi-account switching in Claude Desktop](https://github.com/anthropics/claude-code/issues/18435) · **OPEN** · 👍 814 · 💬 192
The second-most-upvoted open request: native multi-profile support with one-click switching. Users increasingly need separate work/personal accounts, and the 814 upvotes signal this is the top day-one gap for desktop users.

### 4. [#87647 — Over 6k "has repro" issues auto-closed since March 2026](https://github.com/anthropics/claude-code/issues/87647) · **OPEN** · 👍 49 · 💬 7
A process-trust issue: more than 6,000 `has repro`-labeled issues have been auto-closed by bots. Developers are investing significant time in minimal reproductions only to see them auto-closed without human review. This is becoming a community-governance flashpoint.

### 5. [#77651 — Assistant text between tool calls silently lost](https://github.com/anthropics/claude-code/issues/77651) · **OPEN** · 💬 11
Interleaved-thinking text between tool calls is not rendered in the TUI, missing from `Ctrl+O`, and absent from the session `.jsonl`. Silent data loss breaks session continuity and makes debugging harder — concerning for `claude-fable-5` users who rely on thinking blocks.

### 6. [#52004 — Glob/Grep tools missing from palette in 2.1.117](https://github.com/anthropics/claude-code/issues/52004) · **CLOSED** · 👍 8 · 💬 15
A macOS-specific regression where Glob and Grep vanished from the tool palette. Closed as a regression, but it highlights the need for tool-call round-trip coverage in the 2.1.x line.

### 7. [#95455 — `excludedCommands` "every part must match" drops `git -C`](https://github.com/anthropics/claude-code/issues/95455) · **OPEN** · 💬 3
A v2.1.277 sandbox regression on WSL/Linux: the new "every part must match" matcher no longer accepts commands with pre-subcommand flags (`git -C`, `-c`, `--git-dir`). Narrow but disruptive for monorepo and scripted workflows.

### 8. [#94198 — CoworkVMService non-paged pool leak on Windows](https://github.com/anthropics/claude-code/issues/94198) · **OPEN** · 💬 4
A `NtFC/ntfs.sys` pool leak tied to CoworkVMService. User reports it clears on restart but *not* shutdown — pointing to an unsynced lifecycle in the desktop VM layer. Memory-pressure incidents are never fun; 4 comments in 5 days shows moderate community traction.

### 9. [#91708 — OAuth refresh race on Windows credential store](https://github.com/anthropics/claude-code/issues/91708) · **OPEN** · 💬 2
Concurrent sessions on Windows race OAuth refresh against the file-based credential store, causing 400s and forced re-logins. With multi-agent workflows becoming the norm, this will only grow in impact.

### 10. [#95500 — Fable 5 safeguards chain-flag entire sessions](https://github.com/anthropics/claude-code/issues/95500) · **OPEN** · 💬 0
A false-positive safety-flag cascade: children's song lyrics and routine Korean e-commerce instructions were flagged across 6 request IDs with `switchModelsOnFlag: false`. The poster notes the locale-specific nature — a reminder that safety classifiers need non-English evaluation at scale.

---

## Feature Request Trends

1. **AGENTS.md & cross-agent interop** — Now shipped in v2.1.277, but not yet on Bedrock/Vertex/Foundry. Expect follow-up issues requesting equivalent support on those surfaces, mirroring the lifecycle of other delayed parity features.

2. **Mods / plugin extensibility** — The mods movement (#91870) is transitioning from idea to prototype. The codebase layout in PR #95409 (`manifest`, `hooks/` module, `tests/` for `claude plugin test`) shows a reusable mod framework is in the works. Plugins may soon be a first-class distribution unit.

3. **Multi-profile & mobile workflows** — #18435 (Desktop account switching, 814 👍) and #95501 (more context in mobile Code chats) reflect growing demand to run Claude Code across surfaces — personal/professional, desktop/mobile, and different credential silos.

4. **Remote-control session fidelity** — Multiple issues this week (#95478, #94735) report deep-link and session-management failures: `claude://` links not opening the target session, and remote-control interactions archiving active sessions. The community wants remote control to be a first-class, reliable surface.

5. **Top-of-mind: moderation false positives** — #95500 and #95479 (safety-flag false positives) are a new theme. As models like `claude-fable-5` tighten safeguards, users who see legitimate work flagged twice in a day are asking for opt-out controls and clearer error surfaces.

---

*Digest generated from anthropics/claude-code GitHub activity, 2026-09-19. All links point to the canonical issue or PR in the repository.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

 

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-19

## 1. Today's Highlights

The nightly build **v0.62.0-nightly.20260919** was bumped, and a notable fix synchronizes ConPTY process exit lifecycle while hardening PTY output finalization. The community is actively debating multi-agent collaboration (parallel Agent Teams), subagent reliability issues (hangs, misreported success states), and destructive action-bias behavior. Several high-priority PRs target AST-aware tooling, persistent task tracking, and stability fixes for session resumption and proxy resolution.

## 2. Releases

| Version | Link |
|---------|------|
| [v0.62.0-nightly.20260919.gcfbcaa8df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260919.gcfbcaa8df) | Latest nightly |

**Changes:**
- Automated version bump (`gemini-cli-robot`)
- `fix(core)`: synchronize ConPTY process exit lifecycle and harden PTY output finalization

## 3. Hot Issues

1. **[#19430 — Parallel Agent Teams / Multi-Agent Collaboration](https://github.com/google-gemini/gemini-cli/issues/19430)** — 🔥 44 👍, 14 comments. Community wants Claude Code-style Agent Teams in Gemini CLI. High-priority feature request that signals demand for multi-agent orchestration.

2. **[#22323 — Subagent reports GOAL success after MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)** — 13 comments. `codebase_investigator` falsely reports success despite hitting turn limits before analysis. Undermines trust in autonomous subagent workflows.

3. **[#26390 — Action-Bias Overriding User Directives](https://github.com/google-gemini/gemini-cli/issues/26390)** — 9 comments. Reports Gemini CLI ignoring `gemini.md` constraints and initiating destructive `write_file`/`replace` operations autonomously. Serious safety and reliability concern.

4. **[#21409 — Generalist Agent Hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** — 8 comments, 8 👍. Agent deferral to generalist causes indefinite hangs, even on simple folder creation. Workaround: disable subagent deferral.

5. **[#22745 — AST-Aware File Reads, Search & Mapping EPIC](https://github.com/google-gemini/gemini-cli/issues/22745)** — 7 comments. Tracks value of AST-based tools for precise symbol navigation, reducing misaligned reads and token waste. Directly linked to PR #29396.

6. **[#21968 — Skills & Sub-Agents Underutilized](https://github.com/google-gemini/gemini-cli/issues/21968)** — 6 comments. Anecdotal report that custom skills (e.g., `gradle`, `git`) are rarely used unless explicitly invoked, suggesting poor agent-driven discovery.

7. **[#29197 — TOML Command Interpolation Infinite Loop](https://github.com/google-gemini/gemini-cli/issues/29197)** — 5 comments. `!{}` commands requesting permissions loop forever. Fixed by PR #29201.

8. **[#26767 — Data Destruction / Source Code Loss](https://github.com/google-gemini/gemini-cli/issues/26767)** — 5 comments. Severe bug report: agent executed flawed automation scripts resulting in permanent loss of core source code. Critical safety concern.

9. **[#26525 — Deterministic Redaction & Auto Memory Logging](https://github.com/google-gemini/gemini-cli/issues/26525)** — 5 comments. Auto Memory sends transcript content to extraction agents before secret redaction, exposing sensitive data.

10. **[#26522 — Auto Memory Retry Loop](https://github.com/google-gemini/gemini-cli/issues/26522)** — 4 comments. Low-signal sessions are retried indefinitely without being marked processed, wasting resources.

## 4. Key PR Progress

1. **[PR #29393 — Persistent File-Based Task Tracking](https://github.com/google-gemini/gemini-cli/pull/29393)** — Replaces in-context `WriteToDo` with `TrackerService`-backed persistent CRUD, addressing context rot and high token costs from in-conversation task lists.

2. **[PR #29396 — AST-Aware Structural Search Tool](https://github.com/google-gemini/gemini-cli/pull/29396)** — Implements the AST-aware tools from issue #22745 via regex-based AST analysis and `ast_search` tool for precise symbol navigation.

3. **[PR #29400 — Fix Duplicate Tool Responses on Resume](https://github.com/google-gemini/gemini-cli/pull/29400)** — Fixes duplicate `functionResponse` messages when resuming sessions with `-r` by preventing replay of both `toolCalls[].result` and durable `user` messages.

4. **[PR #29402 — Failure-Safe Persistent State Writes](https://github.com/google-gemini/gemini-cli/pull/29402)** — Writes to temp file + `fsync` + atomic rename to prevent truncated `state.json` from silently clearing CLI state.

5. **[PR #29401 — Proxy-Agent Esbuild Interop Normalization](https://github.com/google-gemini/gemini-cli/pull/29401)** — Normalizes CJS/ESM interop for `https-proxy-agent`/`http-proxy-agent` in esbuild bundle to fix constructor resolution issues.

6. **[PR #29201 — Preserve Approved Shell Commands Across Retries](https://github.com/google-gemini/gemini-cli/pull/29201)** — Fixes the TOML `!{}` infinite permission loop from issue #29197.

7. **[PR #29203 — Strip Shell Wrappers with Extra Flags](https://github.com/google-gemini/gemini-cli/pull/29203)** — Extends `stripShellWrapper` to handle `bash -x -c`, `--noprofile -c`, PowerShell `-ExecutionPolicy Bypass`, etc.

8. **[PR #29205 — MCP Prompt Text Without JSON Encoding](https://github.com/google-gemini/gemini-cli/pull/29205)** — Submits MCP prompt response text directly, preserving embedded quotes/newlines (closes #29204).

9. **[PR #29208 — Graceful Handling of Corrupt `agents.json`](https://github.com/google-gemini/gemini-cli/pull/29208)** — Validates shape on load instead of crashing on `null`/scalar/array malformed inputs.

10. **[PR #29368 — ACP Session Load by ID Without Resumable Content](https://github.com/google-gemini/gemini-cli/pull/29368)** — Fixes session/load by ID even when resumable content is absent, addressing #29288.

## 5. Feature Request Trends

| Trend | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Multi-agent collaboration (Agent Teams)** | #19430 | 🔥 High — community analog to Claude Code |
| **AST-aware codebase tools** | #22745, #22746, PR #29396 | 🔥 High — now receiving PR investment |
| **Persistent task tracking** | #18836, PR #29393 | 🔥 High — resolved via PR |
| **Subagent trajectory visibility (`/chat share`)** | #22598 | Medium — eval/review workflow |
| **Self-aware agent (CLI flags, hotkeys)** | #21432 | Medium — agent UX improvement |
| **Security hardening (Auto Memory redaction, policy)** | #26525, #29200, #29202, #29203 | Medium — multiple parallel efforts |

## 6. Developer Pain Points

- **Subagent hangs and false success reports**: #21409 (generalist hangs), #22323 (false GOAL), #21983 (browser agent fails on Wayland) — eroding confidence in autonomous agent delegation.
- **Destructive agent behavior**: #26390 (action-bias overriding user holds), #26767 (source code loss), #22672 (git reset/force usage) — recurring safety theme with high impact.
- **Browser subagent instability**: #22232, #21983, #22267 (ignores `maxTurns` in settings.json) — platform-specific and config-aware bugs piling up.
- **Session state corruption**: #29207 (corrupt `agents.json`), #21335 (`/compress` not persistent), duplicate tool responses on resume — persistent state management is fragile.
- **Interactive prompt deadlocks**: #22465 (Vite app creation), #29197 (TOML command loop) — model gets stuck at interactive prompts with no automated recovery.
- **Memory system quality**: #26522, #26525, #26523, #26516 (4+ issues) — Auto Memory retry loops, pre-redaction data exposure, and invalid patch handling are all active pain points.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Today's Highlights**  
The Kimi CLI repo saw a handful of high‑impact updates in the last 24 h: a macOS paste‑image regression (Issue #2652) was reported, and a critical flow‑skill interruptability bug (Issue #1480) was closed. Community interest also remains strong around UI customisation, as shown by the ongoing discussion on independent font‑size control (Issue #1680).  

**Releases**  
No new Kimi CLI releases were published in the past day.  

**Hot Issues** (10 noteworthy items)  

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #2652 | *macOS 2.0.0 paste image intermittently fails* (regression from 0.43.x) | Breaks a core workflow for Apple‑silicon users; the issue is intermittent, making debugging difficult. | 👍 0 – open, awaiting a fix. <https://github.com/MoonshotAI/kimi-cli/issues/2652> |
| #1480 | *kimi cli’s flow:skill cannot be interrupted in interactive mode* | Prevents users from aborting long‑running tasks, reducing usability in interactive sessions. | 👍 1 – closed, but still a pain point for power users. <https://github.com/MoonshotAI/kimi-cli/issues/1480> |
| #1680 | *Independently adjust font size in VS Code kimi window* | Users want granular UI control; the current whole‑window scaling harms readability when other panels are already customised. | 👍 2 – closed, but the request is still active. <https://github.com/MoonshotAI/kimi-cli/issues/1680> |
| #1234 | *Environment variable based proxy fails with aiohttp defaults in `kimi login`* | Proxy configuration is broken for many deployment scenarios, affecting connectivity. | 👍 2 – closed, indicates a regression in networking logic. <https://github.com/MoonshotAI/kimi-cli/issues/1234> |
| #1107 | *Installation script fails when `uv` is not installed* | The auto‑install script is fragile; users without `uv` cannot reliably set up the CLI. | 👍 0 – closed, highlights need for a more robust installer. <https://github.com/MoonshotAI/kimi-cli/issues/1107> |
| #1301 | *Ghostty light theme ‘yolo’ identifier is hard to distinguish* | Visual clarity issues in terminal themes affect accessibility and user experience. | 👍 1 – closed, points to theme‑specific UI bugs. <https://github.com/MoonshotAI/kimi-cli/issues/1301> |
| #1296 | *Intermittent MCP disconnection errors* | Unreliable MCP connections cause workflow stalls, especially when using external tool providers. | 👍 0 – closed, shows stability concerns in MCP integration. <https://github.com/MoonshotAI/kimi-cli/issues/1296> |
| #1291 | *Invalid Markdown in stdin prompt crashes Kimi* | Malformed input can crash the process, a serious reliability issue for CLI users. | 👍 0 – closed, underscores input validation gaps. <https://github.com/MoonshotAI/kimi-cli/issues/1291> |
| #1339 | *File mention (@) lists internal .git/objects files* | UI clutter makes navigation noisy; users expect clean file listings. | 👍 0 – closed, reflects a UI/UX refinement need. <https://github.com/MoonshotAI/kimi-cli/issues/1339> |
| #1459 | *Kimi cannot self‑configure MCP – too abstract* | Users struggle with the configuration workflow, needing clearer guidance or auto‑setup. | 👍 0 – closed, signals a usability gap in onboarding. <https://github.com/MoonshotAI/kimi-cli/issues/1459> |

**Key PR Progress**  

| # | Title | Summary | Status |
|---|-------|---------|--------|
| #2176 | *fix(hooks): extract text from ContentPart for UserPromptSubmit hook* | Fixes a bug where the `UserPromptSubmit` hook received empty `prompt`/`matcher_value` when `user_input` was a `list[ContentPart]`. Extracts text from `ContentPart` objects to support the default list‑based message format. | 🔓 Open – <https://github.com/MoonshotAI/kimi-cli/pull/2176> |

**Feature Request Trends**  

- **Granular UI customization** – Multiple requests (#1680, #1301, #1302) ask for independent control of font size, theme contrast, and layout overlap, indicating a strong desire for richer VS Code/terminal integration.  
- **Reliability & stability** – Issues #1234, #1107, #2652, #1296, #1291, and #1480 reveal frequent regressions (proxy, install script, paste image, MCP disconnect, markdown handling, flow interruption) that users view as blockers.  
- **Ease of configuration** – #1342 (OSC notifications) and #1459 (self‑configuration of MCP) show that users want smoother onboarding and clearer, automated setup paths.  

**Developer Pain Points**  

- **Networking & proxy handling** – Environment‑variable proxy failures (#1234) and intermittent paste‑image support (#2652) cause silent failures that are hard to diagnose.  
- **Installation robustness** – Scripts that break when optional dependencies (e.g., `uv`) are missing (#1107) frustrate new users and hinder reproducible setups.  
- **Interactive workflow interruptions** – The inability to abort `flow:skill` processes (#1480) and the lack of OSC desktop notifications (#1342) reduce responsiveness in interactive sessions.  
- **UI/UX polish** – Font‑size scaling (#1680), theme contrast (#1301), and overlapping UI panels (#1302) reflect a need for more polished, user‑friendly interfaces.  
- **Configuration clarity** – Users report that MCP configuration is abstract and non‑intuitive (#1459), suggesting a need for guided setup or default‑friendly conventions.  

*All links point to the official GitHub repository (github.com/MoonshotAI/kimi-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-19

## Today's Highlights
No new releases today. The project conducted a significant issue triage, closing 30+ issues (mostly from June–July) while merging a concentrated wave of **10+ performance PRs** targeting startup latency, bundle size, and renderer throughput. A standout new feature PR (#49882) enables opening agent-referenced files (screenshots, reports, generated pages) as rich artifact tabs instead of dead links.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues
*Selected for impact, community engagement, or regression severity.*

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#31041](https://github.com/anomalyco/opencode/issues/31041) **Zen API CORS preflight returns 404** | Blocks **all browser-based clients** from calling `/zen/v1/*` endpoints; POST works but OPTIONS fails. | 12 comments, 11 👍 — highest engagement in batch |
| [#38008](https://github.com/anomalyco/opencode/issues/38008) **Sessions leaking messages across instances** | Messages from one OpenCode instance appear in another — data integrity breach. | 3 comments, 1 👍 |
| [#37315](https://github.com/anomalyco/opencode/issues/37315) **Parallel sub-agent failure aborts all siblings** | One stuck sub-agent kills *all* parallel sub-agents, losing completed work. | 3 comments |
| [#37803](https://github.com/anomalyco/opencode/issues/37803) **TUI goes black while agent works** | Full render stall; only fixed by tab-switch. Process alive, input works. | 4 comments |
| [#49742](https://github.com/anomalyco/opencode/issues/49742) **Message timestamps missing in CLI v2.0.8** | Regression: `Ctrl+P` timestamp toggle gone from v1.18.31. | 2 comments — *still OPEN* |
| [#38024](https://github.com/anomalyco/opencode/issues/38024) **“Streaming response failed” with Nemotron 3 Ultra** | Model consistently errors, stops entire process. | 2 comments, 2 👍 |
| [#37959](https://github.com/anomalyco/opencode/issues/37959) **Parallel Task subagents cancelled mid-flight (Windows)** | Logs only show `Aborted`; breaks multi-agent review workflows. | 2 comments |
| [#37947](https://github.com/anomalyco/opencode/issues/37947) **DeepSeek-v4-pro sends invalid `max_completion_tokens`** | Requests `384k` tokens vs model limit `135k` — provider config bug. | 2 comments |
| [#37922](https://github.com/anomalyco/opencode/issues/37922) **Auth plugins (Copilot) load despite `enabled_providers`** | Respects `disabled_providers` but ignores `enabled_providers`; adds ~660ms DNS latency. | 2 comments |
| [#31246](https://github.com/anomalyco/opencode/issues/31246) **Paste + Enter makes text vanish** | Pasted input disappears on Enter; typing works. Core TUI input regression. | 3 comments |

---

## Key PR Progress
*Performance dominates; several architectural cleanups.*

| PR | Type | Summary |
|----|------|---------|
| [#49882](https://github.com/anomalyco/opencode/pull/49882) | **Feature** (OPEN) | Agent-referenced files now open as **rich artifact tabs** (images, PDFs, HTML) — fixes `file://` stripping, Electron blocking, relative-link nav. |
| [#49881](https://github.com/anomalyco/opencode/pull/49881) | **Feature** (OPEN, needs:compliance) | **Non-UTF8 encoding support** (GBK, Shift-JIS, Big5) for edit/write tools — critical for Windows CJK locales. |
| [#49869](https://github.com/anomalyco/opencode/pull/49869) | **Perf** | Show first window **the moment Electron is ready** — eliminates ~900ms blank-screen by parallelizing bundle eval & window creation. |
| [#49767](https://github.com/anomalyco/opencode/pull/49767) | **Perf** | Enable **V8 code cache** for `oc://renderer/` scheme — saves **191ms** of parse/compile per launch. |
| [#49786](https://github.com/anomalyco/opencode/pull/49786) | **Perf** | **Lazy-load TypeScript compiler** (11 MiB) on first transpile — removes it from every service/CLI/TUI cold start. |
| [#49780](https://github.com/anomalyco/opencode/pull/49780) | **Perf** | Service poll interval **100ms → 25ms** — cuts service-ready latency from ~270ms to ~259ms median. |
| [#49789](https://github.com/anomalyco/opencode/pull/49789) | **Perf** | Defer `node-pty` load until **interactive WSL install starts** — removes native addon from critical Windows startup path. |
| [#49797](https://github.com/anomalyco/opencode/pull/49797) | **Perf** | **Defer orphaned draft blob collection** until after window up — saves ~16ms on 59MB DB. |
| [#49876](https://github.com/anomalyco/opencode/pull/49876) | **Perf** | **Drop `luxon` (68 KB)** — replaced 3 date ops with native `Intl.RelativeTimeFormat` / `Date` math. |
| [#49870](https://github.com/anomalyco/opencode/pull/49870) | **Refactor** (OPEN) | Remove TS stripping from `@opencode/codemode` — parse as JS with Acorn, reject TS-only syntax. |

---

## Feature Request Trends
*Distilled from all 50 issues (open + closed).*

1. **Cross-device session continuity** — Sync entire chat history, settings, and context via GitHub (#38011) or deep links (#38009, #49657, #49875).
2. **Enterprise/network adaptability** — Built-in proxy with auto start/stop for air-g

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑09‑19**

---

### 1. Today’s Highlights
- The team shipped a preview release (v0.24.1‑preview.0) that tightens CI packaging and records the latest ACP boundary acceptance.  
- A macOS‑specific PTY bundling fix (PR #12225) is now in flight to resolve the “PTY not available” web‑terminal blocker, while a CLI regression breaking `/cd` after v0.24.0 (Issue #12224) remains under investigation.  
- Discussion continues around slimming the Goal runtime (Issue #12053) and making session recaps respect the conversation language (Issue #11847), signaling a push for performance and internationalisation improvements.

---

### 2. Releases
| Version | Link | Key Changes |
|---------|------|-------------|
| **v0.24.1‑preview.0** | [Release v0.24.1‑preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.1‑preview.0) | • `docs(serve)`: record merged ACP boundary acceptance (@wenshao, #12024)  <br>• `fix(ci)`: wait for the published export renderer before pack |
| **v0.24.0‑nightly.20260918.537311b8a5** | [Release v0.24.0‑nightly.20260918.537311b8a5](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0-nightly.20260918.537311b8a5) | Same changes as above (docs/serve ACP note + CI wait for export renderer). |

*Note: No functional user‑facing changes were detailed; the updates focus on CI reliability and documentation.*

---

### 3. Hot Issues (10)
| # | Issue | Link | Why It Matters | Community Reaction |
|---|-------|------|----------------|--------------------|
| #11872 | **Web Terminal shows “[Error: PTY not available]”** (macOS) | [#11872](https://github.com/QwenLM/qwen-code/issues/11872) | Blocks the built‑in terminal on macOS due to missing `@lydell/node-pty` bundling and code‑signing constraints. | P1, 10 💬 – high urgency; users report loss of core workflow. |
| #12224 | **/cd command fails after v0.24.0 update** | [#12224](https://github.com/QwenLM/qwen-code/issues/12224) | Regression that prevents basic directory navigation in the CLI. | P1, 5 💬 – immediate impact on daily CLI usage. |
| #12206 | **LSP: non‑ASCII responses silently dropped** | [#12206](https://github.com/QwenLM/qwen-code/issues/12206) | CJK/Unicode LSP results become empty, breaking language‑server features for non‑English codebases. | P1, 4 💬 – blocks international development. |
| #12053 | **Slim the Goal runtime** (judge completion from current turn) | [#12053](https://github.com/QwenLM/qwen-code/issues/12053) | Aims to remove the evidence catalog & checkpoints, reducing overhead for long‑running goal sessions. | P2, 8 💬 – active discussion on performance gains. |
| #11847 | **Session recap always in English** | [#11847](https://github.com/QwenLM/qwen-code/issues/11847) | No localisation of the “away summary”; non‑English users see irrelevant text. | P3, 5 💬 – UX pain point for global audience. |
| #12223 | **Project‑local permission rules should override user‑level** | [#12223](https://github.com/QwenLM/qwen-code/issues/12223) | Requests finer‑grained permission precedence (repo‑level > user‑level). | P3, 4 💬 – security‑policy clarity needed. |
| #12226 | **Filesystem‑scoped permission authority & centrally managed repo rules** | [#12226](https://github.com/QwenLM/qwen-code/issues/12226) | Extends permission model to filesystem scopes and central repo configs. | P3, 3 💬 – emerging ask for enterprise‑grade controls. |
| #12165 | **MCP OAuth drops registrationUrl, breaking Atlassian remote MCP** | [#12165](https://github.com/QwenLM/qwen-code/issues/12165) | Atlassian MCP cannot complete OAuth handshake; blocks external MCP integrations. | P2, 4 💬 – blocks MCP adoption. |
| #12028 | **Tracking non‑conversation context token governance** | [#12028](https://github.com/QwenLM/qwen-code/issues/12028) | Seeks visibility/accounting for system prompt, tools, QWEN.md, etc., which can dwarf conversation tokens on large‑context models. | P2, 5 💬 – cost‑optimization focus. |
| #11783 | **TUI crashes with React max depth after background task** | [#11783](https://github.com/QwenLM/qwen-code/issues/11783) | Uncaught React error (update depth exceeded) when background shell tasks are registered. | P1, 5 💬 – stability concern for interactive UI. |

---

### 4. Key PR Progress (10)
| PR | Link | Summary |
|----|------|---------|
| **#12225** | [fix(desktop): stage node‑pty prebuild](https://github.com/QwenLM/qwen-code/pull/12225) | Bundles `@lydell/node-pty` prebuild into the Desktop runtime to fix macOS PTY error (#11872). |
| **#12191** | [fix(web‑shell): harden published package artifacts](https://github.com/QwenLM/qwen-code/pull/12191) | Ensures `@qwen-code/web-shell` exports resolvable declarations and isolates MCP Apps runtime. |
| **#12008** | [feat(serve): let users stop workspace runtimes](https://github.com/QwenLM/qwen-code/pull/12008) | Adds UI to inspect/stop specific workspace runtimes, freeing ACP capacity when admission is full. |
| **#11854** | [feat: add hybrid code mode](https://github.com/QwenLM/qwen-code/pull/11854) | Introduces `tools.mode` enum (`direct`, `code_mode`, `code_mode_only`) – ordinary tools stay callable while exposing an isolated `exec` JS tool. |
| **#12119** | [fix(cli): make /context categories add up to provider total](https://github.com/QwenLM/qwen-code/pull/12119) | Reworks `/context` breakdown so rows partition the request and match the provider‑reported token total. |
| **#12168** | [fix(node‑repl): terminate injected snapshot commit](https://github.com/QwenLM/qwen-code/pull/12168) | Fixes missing semicolon issue in node‑REPL cells that caused internal SyntaxError. |
| **#12115** | [fix(installer): preflight glibc for standalone Linux archives](https://github.com/QwenLM/qwen-code/pull/12115) | Adds GLIBC version check before unpacking standalone Node.js 22 runtime, preventing silent failures on old distros. |
| **#12156** | [fix(core): bound gitignore matcher retention during large scans](https://github.com/QwenLM/qwen-code/pull/12156) | Avoids keeping duplicate gitignore copies per directory during big file‑discovery scans, improving memory usage. |
| **#12085** | [feat(web‑shell): restore remote workspace add flow](https://github.com/QwenLM/qwen-code/pull/12085) | Re‑adds Codex‑style remote workspace connections (Settings > Connections) with bearer‑token scoping. |
| **#12198** | [fix(cli): require explicit trust for undecided workspaces](https://github.com/QwenLM/qwen-code/pull/12198) | Workspaces without a trust decision start as untrusted; disables project settings/hooks until explicit trust is given. |

---

### 5. Feature Request Trends
- **Permission granularity** – project‑local overrides, filesystem‑scoped rules, centrally managed repo policies (Issues #12223, #12226, #12212‑#12214).  
- **Goal/runtime efficiency** – slimming the Goal runtime, better token accounting for non‑conversation context (Issues #12053, #12028).  
- **Internationalisation & localisation** – session recap in conversation language, LSP Unicode support (Issues #11847, #12206).  
- **MCP & OAuth robustness** – preserving `registrationUrl` for remote MCP servers (Issue #12165).  
- **Extension & workspace management** – loading extensions from a directory, remote workspace add flow (Issues #12147, #12085).  
- **CLI trust & safety** – explicit trust for undecided workspaces, clearer permission precedence (PR #12198, Issue #12223).  

---

### 6. Developer Pain Points (Recurring Frustrations)
- **macOS PTY availability** – missing `@lydell/node-pty` bundling and code‑signing blockers repeatedly surface (Issue #11872, PR #12225).  
- **LSP Unicode handling** – non‑ASCII LSP responses are dropped, breaking language features for CJK and other scripts (Issue #12206).  
- **CI/installer flakiness** – GLIBC mismatches on older Linux, transient macOS E2E shard failures, and web‑shell session‑recovery false positives cause noisy CI (PR #12115, Issues #11995, #11134).  
- **TUI stability** – React update‑depth crashes after background tasks (Issue #11783) and occasional viewport overflows (PR #11658).  
- **CLI regressions** – `/cd` navigation broken after v0.24.0 (Issue #12224) and trust model confusion prompting explicit opt‑in (PR #12198).  
- **Permission/trust opacity** – users struggle to understand why project settings are disabled and desire clearer scoping (Issues #12223, #12226

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑09‑19**

---

### 1. Today's Highlights  
- **New provider & UX fixes:** PR #6353 adds CSDN 星图 as a first‑class provider, while PRs #6352/#6351 clean up the web token mirror and export the real Shoreline palette, fixing visual drift.  
- **CI stability & reliability:** PR #6354 steadies the main branch lint check and curbs a race in the MCP stdio marker read; PR #6347 doubles the TUI stack size to 32 MiB, preventing hangs on the ubuntu test leg.  
- **Developer tooling:** PR #6134 professionalizes “Computer Use” with an official helper, native permission UI, and background health checks.  
- **Infrastructure & facts:** PR #5752 launches signed, versioned, cached cloud‑facts channel (slice 1) and PR #6360 upgrades nixpkgs, keeping the dev environment fresh.  

*No new releases were published in the last 24 h.*

---

### 2. Releases  
**None** – the repository remains at the current 0.9.13 baseline.

---

### 3. Hot Issues (10)  

| # | Issue (status) | Why it matters | Community reaction |
|---|----------------|----------------|-------------------|
| **6011** | `[OPEN] feat(tui): usage & tool diagnostics` | Adds per‑component token accounting, cache hit rates, and tool‑call error patterns – crucial for observability in complex runs. | 9 comments; high interest from users tracking spend and performance. |
| **6015** | `[OPEN] feat(fleet): adaptive anti‑stall + wider read‑only shell grammar` | Prevents stalls and expands safe read‑only shell grammar without per‑user config, directly improving fleet reliability. | 9 comments; strong support from fleet operators. |
| **5587** | `[OPEN] Dead‑code sweep phases 2‑4` | Systematically removes ~242 stale `allow(dead_code)` markers, cleaning up the TUI codebase and reducing compile bloat. | 9 comments; welcomed as a hygiene push. |
| **6184** | `[OPEN] bug: Engine silently freezes mid‑run` | A critical bug where user messages are persisted but never answered; no logs or crash, making debugging impossible. | 6 comments; urgent requests for a fix and clearer error paths. |
| **6142** | `[OPEN] rust: Reconcile the two MCP client stacks` | Merges two divergent MCP implementations (`tui/src/mcp` vs `crates/mcp`) to simplify maintenance and align the engine with the crate. | 5 comments; anticipation of cleaner MCP handling. |
| **6087** | `[CLOSED] feat(tui): declutter round 2 – `/settings`, `/setup providers`, fleet naming` | Strips away UI clutter (71‑row `/settings`, flat 30+ provider list) – a direct UX win for the founder’s “de‑clutter” mandate. | 5 comments; praised for streamlining the UI. |
| **6310** | `[OPEN] serve --acp ignores config.toml sandbox_mode/ask` | ACP sessions get stuck in “Work” posture because the sandbox mode is ignored, blocking safe interaction in IDE contexts. | 4 comments; a blocker for IDE integration. |
| **5915** | `[OPEN] Fleet models: provider → model → shortlist → role` | Introduces a model‑shortlist flow so sub‑agents can be assigned roles from a curated set, addressing the founder’s “shortlist” request. | 4 comments; seen as the next logical fleet evolution. |
| **6050** | `[OPEN] Pluggable agent memory` | Provides a generic backend seam (e.g., `causal‑memory`, `mem0`) for agent memory, moving beyond the current hard‑wired native store. | 4 comments; interest from users wanting third‑party memory integrations. |
| **6158** | `[OPEN] feat(remote): SSH remote workspaces` | Enables developing on Linux servers over SSH, turning SSH from a workaround into a first‑class remote workspace mode. | 2 comments; high‑value ask from users with server‑centric workflows. |

*All links: `https://github.com/Hmbown/DeepSeek-TUI/issues/<num>`*

---

### 4. Key PR Progress (10)  

| # | PR | Core change | Impact |
|---|-----|--------------|--------|
| **6353** | `feat(providers): add CSDN 星图 with Coding Plan billing` | New first‑class provider using the OpenAI‑compatible `ai.csdn.net/api/model/v1` endpoint for the default `glm_for_coding` model. | Expands provider ecosystem and offers a pay‑as‑you‑go Coding Plan option. |
| **6354** | `fix(ci): unred main's Lint and stop the mcp stdio marker read racing` | Restores main‑branch lint health and eliminates a race that intermittently broke MCP tests on heavy runners. | Improves CI reliability and developer feedback loop. |
| **6350** | `refactor(tui): retire DeepSeek fossils from provider‑neutral machinery` | Renames `DeepSeekClient` → `CodewhaleClient` and removes legacy `Config::deepseek_base_url` references, cleaning up the provider‑neutral route resolution. | Aligns naming with the provider‑neutral architecture. |
| **6347** | `fix(tui): double codewhale‑main stack to 32 MiB for debug poll chains` | Increases the TUI main thread stack size, fixing the hang on the ubuntu test leg (`plugin_toml_binary_lifecycle_skill_and_stdio_mcp_acceptance`). | Restores CI test pass rate and prevents mysterious stalls. |
| **6348** | `test(tui): compare test_runner scoped dir against its canonical form` | Canonicalizes the expected temporary directory path on Windows, fixing `run_tests_cwd_scopes_cargo_to_subdir`. | Stabilizes Windows test execution. |
| **6352** | `feat(web): resolve the gpui mirror from generated Shoreline tokens` | Removes the hand‑maintained `--gpui‑*` CSS mirror and now pulls values from generated Shoreline tokens, fixing visual drift (`--gpui-stage-raised`, `--gpui-paper-deep`). | Guarantees UI theme consistency across TUI and web. |
| **6351** | `feat(web): export the Shoreline palettes to the site tokens` | Publishes the full Shoreline palette to the site token pipeline, ending reliance on stale manual mirrors. | Provides a single source of truth for design tokens. |
| **6134** | `Professionalize Computer Use and add its official download page` | Introduces a dedicated helper for native input actions, permission UI, background health checks, and a “Pause/Stop” human interface. | Elevates Computer Use from experimental to production‑ready. |
| **5752** | `feat(cloud‑facts): signed, versioned, cached facts channel (slice 1, flag off)` | Launches a Supabase‑backed facts channel (`/api/facts/v1/<channel>`) with signed, versioned, cached payloads for model catalog deltas, provider defaults, and announcements. | Enables reliable, versioned external data consumption. |
| **6360** | `chore(deps): bump nixpkgs from `9fbb54b` to `ef34387`` | Updates the nixpkgs revision, pulling in newer package versions and security fixes for nix‑based development. | Keeps the nix environment up‑to‑date with upstream. |

*All links: `https://github.com/Hmbown/DeepSeek-TUI/pull/<num>`*

---

### 5. Feature Request Trends  

- **Memory & State Management:** Pluggable agent memory backends (mem0/causal‑memory) and a unified session scratchpad/Agent Mail/workshop store are repeatedly requested to break the current native‑only lock‑in.  
- **Fleet & Sub‑Agent Orchestration:** Shortlist‑driven fleet models, role‑based assignment, and a dedicated sub‑agent view (live list, per‑agent status/tokens) dominate the roadmap, reflecting the founder’s “shortlist” direction.  
- **Remote & SSH Workspaces:** Community pressure to treat SSH as a first‑class remote workspace mode, enabling Linux server development from the desktop client.  
- **Provider Neutrality & Vendor Selection:** Beyond OpenRouter, users

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*