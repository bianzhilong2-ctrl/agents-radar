# AI CLI Tools Community Digest 2026-08-06

> Generated: 2026-08-06 01:43 UTC | Tools covered: 9

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

### Ecosystem Overview  
The AI CLI tool landscape in 2026 is characterized by rapid innovation and evolving priorities, with tools like **Claude Code** and **OpenAI Codex** leading in model-specific optimizations and enterprise-grade features. Open-source projects such as **Gemini CLI** and **DeepSeek TUI** emphasize multi-provider flexibility and cross-platform resilience, while niche tools like **Kimi Code** and **Qwen Code** focus on specialized workflows (e.g., memory systems, debuggerizd voice support). Despite shared goals of improving developer productivity, the ecosystem is fragmented by technical tradeoffs, platform inconsistencies, and safety challenges, creating opportunities for differentiation through stability, extensibility, and user-centric design.

---

### Activity Comparison  
| Tool               | Issues (Today) | PRs (Merged/Updated) | Release Status               |  
|--------------------|----------------|----------------------|------------------------------|  
| **Claude Code**    | 10             | 5                    | v2.1.223 (stable) + pending  |  
| **OpenAI Codex**   | 10             | 10                   | Multiple alpha/stable (v0.146.1, 0.147.x) |  
| **Gemini CLI**     | 10             | 10                   | Nightly (v0.55.0-nightly)    |  
| **Kimi Code**      | 3              | 3                    | Stable (no new release)      |  
| **DeepSeek TUI**   | 4              | 9                    | v0.9.4 release train active  |  
| **GitHub Copilot CLI** | 10         | 0                    | v1.0.79-5 (recent)           |  
| **Pi**             | 10             | 10                   | No new releases              |  
| **Qwen Code**      | 10             | 10                   | Desktop v0.1.0 + nightlies   |  
| **GitHub Copilot CLI** | 10         | 0                    | v1.0.79-5 (recent)           |  

---

### Shared Feature Directions  
1. **MCP Integration & Ecosystem**  
   - **Codex**, **Copilot CLI**, **DeepSeek TUI**, and **Pi** all face challenges with MCP server discovery, policy enforcement, and initialization errors. Users demand robust cross-registry support (e.g., Azure DevOps, GHEC).  
2. **Undo/Revert Mechanisms**  
   - **Codex’s /undo** (373 👍) and **Copilot CLI’s path validation bugs** reflect widespread demand for atomic rollbacks of non-Git changes.  
3. **Platform-Specific Stability**  
   - **Windows crashes** (Codex, Copilot CLI), **macOS update failures**, and **Linux path issues** dominate pain points across tools.  
4. **Session/Memory Management**  
   - **Project portability** (Claude Code #81946), **permanent context loss** (Codex #23979), and **Kimi’s Memory System** (#1283) highlight the need for cross-machine continuity.  
5. **API Key Management**  
   - DeepSeek TUI and Gemini CLI users struggle with single-global-key models; proposals for provider-specific key storage are recurring.  

---

### Differentiation Analysis  
| Tool               | Focus Areas                                  | Target Users                          | Technical Strengths                   |  
|--------------------|----------------------------------------------|---------------------------------------|---------------------------------------|  
| **Claude Code**    | Multi-agent workflows, security safeguards   | Enterprises with complex codebases    | Marketplace permissions, robustness   |  
| **OpenAI Codex**   | Code review/security, multi-agent scaling    | Enterprise AI devs                    | Security prioritization, MCP hardening |  
| **Gemini CLI**     | Sub-agent reliability, multimodal support    | Polyglot developers (DeepSeek + GLM)  | CrossProvider tooling, AST optimizations |  
| **Kimi Code**      | Debuggerizd UI/UX, voice/AI assist           | Native app developers                 | Memory system dedication, voice tooling |  
| **Qwen Code**      | Web IDE integration, cost control            | Cloud-native developers               | Live voice, budgeting controls        |  
| **DeepSeek TUI**   | Reasoning UI, runtime observability          | Debugging/enterprise tooling          | ACP bridges, detailed telemetry        |  
| **Copilot CLI**    | Worktree efficiency, hooks enforcement       | Git-Heavy workflows                   | Terminal-first, worktree sandboxing   |  

---

### Community Momentum & Maturity  
- **Leading Momentum**: **Claude Code** (3k ⭐, viral wildcard permissions), **Codex** (4k ⭐, rapid releases), and **Qwen Code** (1k ⭐, desktop stability) show strong adoption. **DeepSeek TUI** (20 ⭐, niche ACP focus) is exploding in technical discourse.  
- **Maturity**: **OpenAI Codex** and **Copilot CLI** have enterprise-grade tooling (MCP, rollback migration), while **Gemini CLI** and **Kimi Code** balance open-source experimentation with user-driven features.  
- **Gaps**: Few tools address **CI/CD workflows** (beyond DeepSeek’s runner fixes) or **legacy IDE integration** systematically.  

---

### Trend Signals  
1. **Safety vs. Usability**: Frequent downgrades from **Opus 5.0** (Claude Code) and **migration gaps** (Codex #23979) reveal tension between aggressive security and developer workflow flexibility.  
2. **API Key Centralization**: Growing requests for provider-specific key management (DeepSeek TUI #5250) signal the rise of polyglot inference architectures.  
3. **Memory Obsession**: Persistent context demands (**Kimi**, **Claude Project Portability**) align with industry shifts toward stateful AI assistants.  
4. **MCP Ecosystem Fragmentation**: Platform-specific failures (GHEC, Azure DevOps) expose gaps in vendor-agnostic tooling despite rising FastMCP adoption.  
5. **Remote Workflow Push**: Qwen’s **Live Voice**, Gemini’s **crossProvider tooling**, and Pi’s **JetBrains IDE fixes** reflect hybrid/remote dev trends.  

---  
This comparison underscores opportunities to optimize based on differentiation goals: **Claude Code** for enterprise safeguards, **Codex** for security-centric developers, or **DeepSeek TUI** for observability-heavy workflows. The next major update cycles will likely prioritize these divides.


---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-06 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py 0% recall` | Core infrastructure fix: installs eval artifact as real skill, fixes Windows stream reading, trigger detection, parallel workers | Addresses **#556** (12 comments, 7👍) — the description-optimization loop was optimizing against noise; 10+ independent reproductions | **Open** (active Jun 10–23) |
| 2 | **[#1323](https://github.com/anthropics/skills/pull/1323)** `fix(skill-creator): trigger detection misses skill name` | Fixes `run_eval.py` failing to detect skill triggers, causing recall=0% on every iteration | Directly blocks skill-creator optimization loop; related to **#1169** (3 comments) | **Open** (active Jun 16–25) |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `feat: add self-audit` | Mechanical file verification + 4-dimension reasoning quality gate (v1.3.0); universal across projects/stacks/models | Novel meta-skill: "Step 0 verifies claimed output files exist; Steps 1–4 audit reasoning in damage-severity priority" | **Open** (active Jun 28–Jul 2) |
| 4 | **[#1099](https://github.com/anthropics/skills/pull/1099)** `skill-creator: fix Windows subprocess pipe crash` | `claude -p` on Windows recorded every query as "not triggered" → precision=100% recall=0% | WinError 10038 flood; pairs with **#1050** for full Windows compatibility | **Open** (active May 7–24) |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `feat: add testing-patterns` | Comprehensive testing skill: Testing Trophy, AAA pattern, React Testing Library, contract testing, E2E, flaky test mitigation | Covers full stack philosophy → practice; high utility for code-quality workflows | **Open** (active Mar 22–Apr 21) |
| 6 | **[#83](https://github.com/anthropics/skills/pull/83)** `feat: skill-quality-analyzer + skill-security-analyzer` | Two meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security audit (injection, permissions, secrets, supply chain) | Addresses marketplace quality gap; security analyzer directly relevant to **#492** namespace trust issue | **Open** (active Nov 6–Jan 7) |
| 7 | **[#514](https://github.com/anthropics/skills/pull/514)** `feat: document-typography` | Prevents orphan words, widow headers, numbering misalignment in AI-generated documents | "Affects every document Claude generates"; users rarely ask for good typography explicitly | **Open** (active Mar 4–13) |
| 8 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `feat: plan-file-hygiene` | Lifecycle management for planning artifacts (addresses **#1417**): creation, validation, archival, cleanup | Community-identified gap: "planning artifacts accumulate with no lifecycle" | **Open** (active Jul 25–27) |

> **Note**: PR comment counts show as `undefined` in source data; ranking inferred from issue cross-references, recency, and infrastructure criticality.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Skill-creator infrastructure reliability** | **#556** (12💬, 7👍), **#1169** (3💬), **#1099**, **#1050**, **#1261**, **#1323** — all targeting run_eval/trigger detection/Windows crashes | 🔥🔥🔥 Critical — blocks skill authoring |
| **Security & trust boundaries** | **#492** (43💬, 2👍) — community skills masquerading as `anthropic/` namespace; **#83** security analyzer PR; **#1175** SharePoint auth concerns | 🔥🔥 High — namespace impersonation is active vulnerability |
| **Organizational skill sharing** | **#228** (16💬, 8👍) — "download → Slack → manual upload" workflow; **#189** (6💬, 9👍) — duplicate skills from bundled plugins | 🔥🔥 High — workflow friction for teams |
| **Meta-skills for quality assurance** | **#83** (quality + security analyzers), **#1367** (self-audit), **#1385** (3-gate reasoning pipeline: calibration → adversarial review → verification) | 🔥🔥 Emerging — "skills that audit skills" |
| **Document processing completeness** | **#12** (4💬, 1👍) — docx whitespace corruption; **#538** (PDF case-sensitivity), **#541** (DOCX w:id collision), **#514** (typography), **#486** (ODT) | 🔥 Steady — production document workflows |
| **MCP / Bedrock integration** | **#16** (4💬) — expose skills as MCPs; **#29** (4💬) — AWS Bedrock support | 🔥 Niche — platform extensibility requests |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fix | Fixes **#556** (top technical issue); 10+ reproductions; blocks all description optimization |
| **[#1323](https://github.com/anthropics/skills/pull/1323)** | Trigger detection fix | Companion to #1298; unblocks recall measurement |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows compatibility | Two PRs, same author cluster; `claude.cmd` + encoding fixes; unblocks Windows contributors |
| **[#1261](https://github.com/anthropics/skills/pull/1261)** | Isolate trigger-eval command files | Fixes **#1260** — synthetic skills polluting live project registry during parallel eval |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Novel meta-skill; mechanical + reasoning gates; zero dependencies; universal applicability |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Comprehensive, well-scoped; fills testing methodology gap in marketplace |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` + `skill-security-analyzer` | Directly addresses **#492** trust issue; marketplace quality gate |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Addresses **#1417** (community-named problem); recent activity (Jul 25–27) |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Self-contained domain skill; color science + practical spaces (OKLCH, CAM16, etc.) |
| **[#525](https://github.com/anthropics/skills/pull/525)** | `pyxel` (retro game dev) | MCP-backed; niche but complete workflow (write → run_and_capture → inspect → iterate) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is stabilizing the skill-creator toolchain (trigger detection, evaluation, Windows support) and establishing trust/quality infrastructure (namespace security, meta-analyzers, self-audit) — not new domain skills, but the *foundation* that makes skills reliable, secure, and shareable at scale.**

---

# Claude Code Community Digest: 2026-08-06

### 1. Today's Highlights
The ecosystem is seeing a major shift toward managed marketplace permissions with the introduction of wildcard owner support. However, the community is currently grappling with significant stability issues regarding model downgrades and session management, particularly concerning the transition between Opus 5.0 and 4.8.

### 2. Releases
**v2.1.223**
*   **Marketplace Management:** Introduced owner wildcard entries (`"owner/*"`) for `strictKnownMarketplaces` and `blockedMarketplaces`, allowing developers to permit or block entire GitHub organizations at once.
*   **UX Improvements:** Added safety warnings for workflow agents, forked skills, slash commands, and resumed background actions.

### 3. Hot Issues
1.  **[#82506] Claude Max usage bug:** Users report session limits being consumed without active usage; a high-priority bug with significant community concern [#82506](https://github.com/anthropics/claude-code/issues/82506).
2.  **[#66504] Session URL in commits:** A popular UX enhancement request to make session URLs part of commit messages/PRs an opt-in feature [#66504](https://github.com/anthropics/claude-code/issues/66504).
3.  **[#77136] Model Incoherence (Opus 5.0):** Reports of Opus 5.0 driving "incoherence into the stratosphere" vs. the "toxic" nature of 4.8 [#77136](https://github.com/anthropics/claude-code/issues/77136).
4.  **[#83403] Desktop Crash/Reinstall Loop:** Severe bug where Claude Desktop crashes near the 5-hour limit and requires a full reinstall to reopen [#83403](https://github.com/anthropics/claude-code/issues/83403).
5.  **[#82536] `--continue` Session Mismatch:** A regression where the continue flag cannot locate sessions created via interactive resume (`-p`) [#82536](https://github.com/anthropics/claude-code/issues/82536).
6.  **[#83403] Windows GPU Crash:** Critical report of a GPU process crash (exitCode 101457950) killing the entire application on Windows [#83744](https://github.com/anthropics/claude-code/issues/83744).
7.  **[#74715] Chrome Permission Loop:** Claude-in-Chrome ignores "Always allow" settings, repeatedly prompting for permissions during browser actions [#74715](https://github.com/anthropics/claude-code/issues/74715).
8.  **[#84352] Cyber Safeguard False Positives:** Authorized security researchers reporting automatic downgrades to Opus 4.8 during legitimate penetration testing [#84352](https://github.com/anthropics/claude-code/issues/84352).
9.  **[#84212] Skill Argument Corruption:** A technical bug where `args` substitution in `SKILL.md` silently corrupts shell commands [#84212](https://github.com/anthropics/claude-code/issues/84212).
10. **[#84354] Windows Path Hashing Bug:** "Past Conversations" appearing empty due to case-sensitive project-path hashing on Windows systems [#84354](https://github.com/anthropics/claude-code/issues/84354).

### 4. Key PR Progress
*   **[#41661] 14 Revolutionary Plugins:** Massive expansion of the marketplace including Security, Performance, and Fullstack Automation tools [#41661](https://github.com/anthropics/claude-code/pull/41661).
*   **[#16929] Code Review Flag Fix:** Ensuring `--comment` flag is respected for GitHub posting vs. terminal output [#16929](https://github.com/anthropics/claude-code/pull/16929).
*   **[#84138] Cowork SSL Workaround:** Addressing self-signed certificate errors in the Bun-based runtime for macOS users [#84138](https://github.com/anthropics/claude-code/pull/84138).
*   **[#84004] Frontmatter Parsing Fix:** Limiting YAML parsing to prevent errors when Markdown body contains horizontal rules [#84004](https://github.com/anthropics/claude-code/pull/84004).
*   **[#84003] Script Failure Propagation:** Fix to ensure top-level maintenance script failures are properly reported [#84003](https://github.com/anthropics/claude-code/pull/84003).

### 5. Feature Request Trends
*   **Project Portability:** Strong interest in making session transcripts and memory portable between machines while keeping local scratch files isolated [#81946](https://github.com/anthropics/claude-code/issues/81946).
*   **UI Customization:** Requests for granular control over gestures (e.g., disabling the left-arrow "detach to background" gesture) [#84348](https://github.com/anthropics/claude-code/issues/84348).
*   **Mobile Parity:** Improving the mobile web experience by adding typeahead support for slash commands [#56204](https://github.com/anthropics/claude-code/issues/56204).

### 6. Developer Pain Points
*   **Model Stability & Safeguards:** Developers are increasingly frustrated by "phantom" downgrades from Opus 5.0 to 4.8 triggered by aggressive security safeguards during legitimate testing.
*   **Platform Inconsistency:** Significant friction reported for Windows users regarding path limits (MAX_PATH) and case-sensitive hashing affecting session visibility.
*   **Automated Session Management:** Bugs in session resumption and the automatic termination of macOS desktop apps during skill recording are causing significant workflow interruptions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-06

---

## 1. Today's Highlights

OpenAI Codex shipped **five releases in 24 hours**, including the stable `rust-v0.146.1` with a critical security fix: safer automatic-review defaults for cyber-capable models and explicit permission-change explanations in the terminal. The alpha `0.147.0` train advanced to `.13`, signaling rapid iteration. Meanwhile, the issue tracker shows **50 active items** — topped by a 373-👍 demand for `/undo` — and **43 PRs merged or updated**, many hardening MCP, rollout migration, and multi-agent state tracking.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| `rust-v0.146.1` | Stable | **Security**: Apply safer automatic-review defaults for cyber-capable models; explain permission changes in TUI ([#37057](https://github.com/openai/codex/pull/37057)) |
| `rust-v0.147.0-alpha.13` | Alpha | Incremental alpha release (13th in 0.147 series) |
| `rust-v0.147.0-alpha.12` | Alpha | Incremental alpha release |
| `rust-v0.147.0-alpha.11` | Alpha | Incremental alpha release |
| `rust-v0.147.0-alpha.10` | Alpha | Incremental alpha release |

> **Note**: The 0.146.1 backport addresses Guardian denial handling for cyber-specialty models — a direct response to safety concerns raised in recent issues.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| Issue | Summary | Why It Matters | Community Signal |
|-------|---------|----------------|------------------|
| [#9203](https://github.com/openai/codex/issues/9203) | **Restore `/undo` command** for accidental file deletions/modifications outside git | Highest-voted open issue (373 👍); users lose work when Codex deletes untracked files | 70 comments, 373 👍 — **top community ask** |
| [#12491](https://github.com/openai/codex/issues/12491) | **MCP child processes not reaped** → 1,300+ zombies, 37 GB memory leak in Codex.app GUI | Critical resource leak blocking long-running sessions; affects Pro users on macOS | 32 comments, 5 👍 |
| [#33776](https://github.com/openai/codex/issues/33776) | **Windows: `ChatGPT.exe` spawns hundreds of `taskkill.exe`/`conhost.exe`** → WMI storms, DWM degradation | Makes Windows Desktop unusable; kernel-level process explosion | 30 comments, 27 👍 |
| [#19425](https://github.com/openai/codex/issues/19425) | **Custom stdio MCP tools discovered but not exposed** to Desktop threads | Breaks MCP extensibility in Desktop; regression in 0.124.0-alpha.2 | 29 comments, 5 👍 |
| [#23979](https://github.com/openai/codex/issues/23979) | **Conversation history missing after Desktop update**; data intact in `state_5.sqlite` | Data-loss perception; undermines trust in local-first storage | 26 comments, 5 👍 |
| [#31035](https://github.com/openai/codex/issues/31035) | **Windows: Codex reinstalls SysmonDrv v13.22** → `SysmonDrv.sys` BSODs | Kernel crashes; security driver conflict; WinDbg confirms root cause | 23 comments |
| [#37002](https://github.com/openai/codex/issues/37002) | **Update button fails to install** on macOS 12 | Blocks auto-update flow; fresh installs also affected | 20 comments, 1 👍 |
| [#35352](https://github.com/openai/codex/issues/35352) | **Desktop exits when embedded browser GPU process crashes** (SwiftShader blocked) | **CLOSED** — Windows browser instability fixed via GPU fallback handling | 17 comments, 1 👍 |
| [#32177](https://github.com/openai/codex/issues/32177) | **Text-log attachment triggers "Request blocked"** and poisons subsequent turns | Context contamination; blocks log-driven debugging workflows | 14 comments, 16 👍 |
| [#34684](https://github.com/openai/codex/issues/34684) | **`codex mcp login` fails on macOS** ("No authorization support") — works on Linux | Platform-specific OAuth regression; blocks MCP server auth on macOS | 10 comments, 5 👍 |

---

## 4. Key PR Progress (Top 10 Merged/Updated Today)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#37190](https://github.com/openai/codex/pull/37190) | **Interrupt cyber model turns after one Guardian denial** | Security | Implements circuit-breaker for cyber-specialty models; backs 0.146.1 fix |
| [#37191](https://github.com/openai/codex/pull/37191) | **Preserve legacy semantics during rollout migration** | Data Integrity | Prevents history/context drift when migrating rollbacks, checkpoints, subagent copies |
| [#37189](https://github.com/openai/codex/pull/37189) | **Track multi-agent usage hints in world state** | Multi-Agent | Resumes sessions with correct usage instructions after config changes |
| [#37188](https://github.com/openai/codex/pull/37188) | **Reserve `tool_search` namespace for built-in search tool** | Tooling | Prevents namespace collisions; strict collision handling |
| [#37175](https://github.com/openai/codex/pull/37175) | **Add legacy rollout migration to paginated history** | Data Migration | Dry-run/apply modes, throughput limiting, per-rollout outcomes |
| [#37174](https://github.com/openai/codex/pull/37174) | **Centralize skill invocation helpers in `codex-skills`** | Architecture | Decouples implicit invocation detection; cleaner skill-loading API |
| [#37168](https://github.com/openai/codex/pull/37168) | **Bound remote MCP handshake HTTP requests** | MCP/Networking | Prevents executor starvation from hanging handshakes |
| [#37167](https://github.com/openai/codex/pull/37167) | **Expose session sources to MCP contributors** | MCP | Thread-scoped MCP resolution via `SessionSource` propagation |
| [#37154](https://github.com/openai/codex/pull/37154) | **Use Azure Key Vault for macOS notarization** | Release/Infra | Removes `.p8` secret from runners; notarization via pinned AKV JWTs |
| [#37151](https://github.com/openai/codex/pull/37151) | **Coalesce concurrent Git status scans** | Performance | Deduplicates `git status --porcelain` calls per repo root |

> **Pattern**: Today’s PRs cluster around **migration safety**, **MCP hardening**, **multi-agent state**, and **release infrastructure** — all enablers for the 0.147 alpha train.

---

## 5. Feature Request Trends (From All 50 Issues)

1. **Undo/Revert Capability** — #9203 dominates; users need atomic rollback for non-git changes.
2. **MCP First-Class Integration** — Stdio server exposure (#19425), OAuth login (#34684), tool registration (#32101), process reaping (#12491).
3. **Session Persistence & Portability** — History loss after updates (#23979), rollout migration fidelity (#37191), cross-platform parity.
4. **Approval/Permission Granularity** — Reversion to on-request despite "allow always" (#32862), cyber-model auto-review defaults (#37057).
5. **Windows Stability** — Process explosions (#33776), Sysmon conflicts (#31035), GPU crashes (#35352, #35635), WSL launch bugs (#30048).
6. **Performance & Resource Control** — Memory leaks, zombie processes, Git scan coalescing (#37151), compaction loops (#33493).
7. **Accessibility** — Screen-reader support in Desktop (#34211).

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Evidence | Affected Surface |
|------------|----------|------------------|
| **No safety net for destructive actions** | 373 👍 on `/undo`; users lose untracked files daily | CLI, TUI, Desktop |
| **MCP ecosystem fragility** | 5+ issues: zombies, tool exposure, OAuth, handshake hangs | Desktop, CLI, App Server |
| **Windows Desktop instability** | 7+ issues: BSODs, GPU crashes, process storms, update failures, WSL leaks | Desktop (Windows) |
| **Session history loss on update** | Data exists but UI doesn’t render it; migration gaps | Desktop (all platforms) |
| **Approval system inconsistency** | "Allow always" reverts; cyber models over-block; false positives (#37161) | CLI, Desktop, Sandbox |
| **Update/install broken** | macOS update button fails (#37002); MSIX self-corruption (#35737) | Desktop (macOS, Windows) |
| **Context poisoning from attachments** | Log files trigger permanent "Request blocked" (#32177) | Desktop, App Server |

---

## Quick Links

- **All releases**: [github.com/openai/codex/releases](https://github.com/openai/codex/releases)
- **Issue tracker**: [github.com/openai/codex/issues](https://github.com/openai/codex/issues)
- **Pull requests**: [github.com/openai/codex/pulls](https://github.com/openai/codex/pulls)
- **Top community ask**: [#9203 — `/undo` command](https://github.com/openai/codex/issues/9203)

---

*Digest generated from GitHub data as of 2026-08-06 00:00 UTC. Next digest: 2026-08-07.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑08‑06**  

---

### 1. Today’s Highlights
- The project shipped **v0.55.0‑preview.1** (nightly 20260806.g761f604c1) with a fix that falls back to embedded macOS seat‑belt profiles when they are missing, plus a host of changelog updates.  
- Community activity remains centered on **sub‑agent reliability** and **browser‑agent resilience**, with several high‑comment issues flagging hangs, improper turn reporting, and missing configuration overrides.  

---

### 2. Releases
| Version | Type | Notable Changes |
|---------|------|-----------------|
| **v0.55.0‑preview.1** | Nightly release | • `chore(release): bump version to 0.55.0‑nightly.20260806.g761f604c1`  <br>• Fix: fallback to embedded macOS seat‑belt profiles if missing (PR #28551)  <br>• Added environment‑config parser & command executor for PR‑generator‑core  |
| **v0.55.0‑nightly.20260728.gd29268d36** | Nightly | • General version bump for ongoing nightly builds |
| **v0.54.0** | Stable | • Updated changelog for 0.54.0 (PR #28708)  <br>• Includes earlier nightly fixes such as macOS seat‑belt fallback and core tool‑argument parsing improvements |

*No new stable version was published in the last 24 h; only nightly bumps and changelog updates are present.*

---

### 3. Hot Issues  (Top 10 by comment count)

| # | Title (link) | Why it matters / community reaction |
|---|--------------|--------------------------------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | *Subagent reports “GOAL” despite hitting MAX_TURNS* | 12 comments – the inconsistency between reported status and actual turn exhaustion raises concerns about sub‑agent correctness and debugging visibility. |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** | *Generalist agent hangs on simple folder creation* | 8 comments – developers note the agent can stall for hours; disabling sub‑agents restores responsiveness, highlighting a critical usability blocker. |
| **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** | *Leverage model’s bash affinity via Zero‑Dependency OS Sandboxing* | 8 comments – strong interest in exposing native POSIX tool capabilities without extra security layers; considered a high‑value direction. |
| **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** | *Robust component‑level evaluations* | 7 comments – requests for systematic behavioral evals to assess sub‑agent impact and tool usage quality. |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** | *Impact of AST‑aware file reads, search, and mapping* | 7 comments – community sees AST‑aware parsing as a way to cut token waste and improve precision of codebase investigation. |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** | *Gemini does not use skills and sub‑agents enough* | 6 comments – calls for smarter default activation of custom skills/sub‑agents, especially in complex workflows. |
| **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** | *Stop Auto Memory from retrying low‑signal sessions indefinitely* | 5 comments – concerns about unbounded inbox growth and wasted resources when low‑signal patches are repeatedly queued. |
| **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** | *Add deterministic redaction and reduce Auto Memory logging* | 4 comments – security‑focused fixes for secret leakage in memory pipelines. |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** | *Shell command execution gets stuck with “Waiting input” after command completes* | 4 comments – repeated hangs after command finish degrade workflow speed; a hot‑fix is requested. |
| **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** | *Enhance browser_agent resilience: Automatic session takeover and lock recovery* | 4 comments – demand for a more fault‑tolerant browser agent that can recover from locked profiles without manual intervention. |

---

### 4. Key PR Progress  (Top 10 by impact)

| PR | Status | Summary |
|----|--------|---------|
| **[#28607](https://github.com/google-gemini/gemini-cli/pull/28607)** | Closed | Preserves `functionCall` thoughtSignature when stripping thoughts – fixes a regression that produced “Function call is missing a thought_signature”. |
| **[#28695](https://github.com/google-gemini/gemini-cli/pull/28695)** | Closed | Prevents `sendStream` from aborting on malformed tool arguments; adds defensive parsing of SDK arguments. |
| **[#28660](https://github.com/google-gemini/gemini-cli/pull/28660)** | Open | Keeps `sendStream` alive when tool arguments are malformed; validates JSON objects and rejects primitives/arrays. |
| **[#28689](https://github.com/google-gemini/gemini-cli/pull/28689)** | Closed | Improves error parsing for nested gaxios streaming errors, enabling better quota‑limit reporting. |
| **[#28688](https://github.com/google-gemini/gemini-cli/pull/28688)** | Open | Dynamically resolves Cloud Workstations proxy redirect URI for OAuth flows, fixing auth failures in VMs. |
| **[#28670](https://github.com/google-gemini/gemini-cli/pull/28670)** | Closed | Fixes fallback behavior on model capacity errors; avoids infinite retry loops by falling back to alternative models. |
| **[#28672](https://github.com/google-gemini/gemini-cli/pull/28672)** | Closed | Repairs `/compress` failures and prevents corrupted tool responses after quota limits. |
| **[#28700](https://github.com/google-gemini/gemini-cli/pull/28700)** | Closed | Stops a new user message from fusing into an unanswered tool response, eliminating “model finishes your sentence” bugs. |
| **[#28676](https://github.com/google-gemini/gemini-cli/pull/28676)** | Open | Forwards termination signals to relaunched child processes, enabling graceful shutdowns via `kill -TERM <pid>`. |
| **[#28677](https://github.com/google-gemini/gemini-cli/pull/28677)** | Open | Adds a 3‑second timeout to `IdeClient.getInstance()` process traversal, preventing indefinite “Initializing…” hangs in bare terminals. |

---

### 5. Feature Request Trends
- **Sub‑agent visibility & control** – multiple issues request a UI (`/chat share`) or CLI flags to inspect sub‑agent trajectories, turn counts, and invocation decisions.  
- **Browser‑agent robustness** – developers want automatic lock recovery, proper handling of `settings.json` overrides, and Wayland support.  
- **AST‑aware code mapping** – demand for AST‑based file reads/search to reduce token usage and improve precision when investigating large codebases.  
- **Memory system hygiene** – requests for deterministic secret redaction, better inbox patch validation, and avoidance of endless retries on low‑signal sessions.  
- **Terminal performance** – interest in flicker‑free resize handling, avoiding hangs after command completion, and more efficient background process management.

---

### 6. Developer Pain Points
- **Unpredictable sub‑agent activation** – agents often *do not* use custom skills or sub‑agents unless explicitly instructed, leading to inefficient workflows.  
- **Hanging processes** – simple shell commands, folder creation, or interactive prompts can stall indefinitely, sometimes showing “Waiting input” after the command finishes.  
- **Configuration overrides ignored** – the browser agent silently discards `settings.json` settings such as `maxTurns`, limiting user‑controlled timeouts.  
- **Security & logging concerns** – Auto Memory currently logs raw transcript content before redaction, and it silently drops invalid patches, raising both privacy and debugging headaches.  
- **Error handling gaps** – 400/429 errors appear when >128 tools are registered, and malformed tool arguments can abort streams unless caught defensively.  
- **Symlink recognition** – `~/.gemini/agents/*.md` symlinks are not treated as valid agents, limiting flexible layout of sub‑agents.  

---

*All links point to the official Gemini CLI repository (google-gemini/gemini-cli).*

---

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-06

---

## 1. Today's Highlights

The latest release **v1.0.79-5** introduces concurrent session management and flips prompt pinning off by default to reduce timeline clutter on smaller terminals. Meanwhile, the issue tracker is dominated by a wave of triage bugs filed over the past two days—spanning MCP initialization failures, platform-specific crashes, and model routing regressions—indicating a period of active instability across the 1.0.7x release line. No pull requests were merged in the last 24 hours.

---

## 2. Releases

### v1.0.79-5
**Added**
- Manage multiple concurrent sessions from the Sessions tab and sidebar

**Improved**
- Prompt pinning is now off by default; set `pinnedPrompts` to `true` to enable it.

**Fixed**
- Sandboxed wrapper builds (`make` and friends) now receive the dev tool caches their recipes need, based on the build manifest.

### v1.0.79-4 *(pre-release)*
- Pre-release build; no changelog entry.

### v1.0.79-3
**Improved**
- Use `/worktree new` to start a new session in a new worktree.

### v1.0.79-2
**Improved**
- Pin the current prompt one row higher, in the row the tab bar already reserves, preserving the shape of the copied prompt while costing the timeline one row less.
- Leave the pinned prompt off by default on terminals under 30 rows, where it would crowd the output; set `pinnedPrompts` to override.

---

## 3. Hot Issues

1. **[#1799](https://github.com/github/copilot-cli/issues/1799)** — *How to turn off alt-screen views?* (8 👍, 12 comments) — The newly introduced alt-screen mode is causing rendering issues for many users, and there is no opt-out. High community demand for a toggle.

2. **[#4202](https://github.com/github/copilot-cli/issues/4202)** — *Built-in `view` tool reports "Path does not exist" for existing files since 1.0.73* — A regression that breaks the built-in view tool while the same files work in 1.0.71, pointing to a path-resolution change in the 1.0.72+ toolchain.

3. **[#3013](https://github.com/github/copilot-cli/issues/3013)** — *Hooks don't fire for background (task) agents* — Flagged as a potential security vulnerability: sub-agents bypass hook restrictions that apply to the primary session, undermining policy enforcement.

4. **[#4345](https://github.com/github/copilot-cli/issues/4345)** — *Reasoning effort 'medium' unsupported for `claude-haiku-4.5`* — When both `copilot_cli_opus_medium_effort_default` and `copilot_cli_gpt_5_4_mini_for_explore` flags are active, sub-agent execution repeatedly fails. A model-compatibility gap.

5. **[#4370](https://github.com/github/copilot-cli/issues/4370)** — *MCP initialization fails when `server/discover` returns `-32602`* — Copilot CLI treats FastMCP's unsupported `server/discover` response as a fatal error, breaking MCP connectivity for a growing class of FastMCP-based servers.

6. **[#4026](https://github.com/github/copilot-cli/issues/4026)** — *Copilot CLI crashes repeatedly on Windows (native runtime)* — An unresolved crash since May 2026 spanning at least four versions, reproducible across releases on Windows.

7. **[#3934](https://github.com/github/copilot-cli/issues/3934)** — *MCP server "blocked by policy" on custom registries* — Local MCP configurations that work in VSCode and IntelliJ are silently blocked by Copilot CLI's policy layer, with no clear cause.

8. **[#2147](https://github.com/github/copilot-cli/issues/2147)** — *CAPIError 400: "input item ID does not belong to this connection"* — Intermittent websocket error on model `gpt-5.4 (xhigh)`, causing execution failures mid-session.

9. **[#4378](https://github.com/github/copilot-cli/issues/4378)** — *MCP registry policy fetch fails with 401/403 on GHEC data residency* — On GitHub Enterprise Cloud with data residency, all user-configured MCP servers are silently dropped from cloud agent sessions, leaving only platform defaults.

10. **[#4374](https://github.com/github/copilot-cli/issues/4374)** — *`/mcp search` fails with 400 Bad Request on Azure DevOps remotes* — The interactive MCP registry browser breaks in any repo whose git remote points to Azure DevOps (`dev.azure.com`), affecting enterprise users.

---

## 4. Key PR Progress

No pull requests were updated or merged in the last 24 hours. The repository shows **0 PR items** in this window.

---

## 5. Feature Request Trends

Analysis of open issues reveals several recurring feature directions:

- **MCP ecosystem resilience** — Multiple issues (#3934, #4370, #4371, #4374, #4378) center on MCP server discovery, policy, and initialization failures. Users want robust MCP support across custom registries, FastMCP servers, and OAuth 3LO flows.
- **Model flexibility & routing** — Requests for BYOM provider model discovery and in-session switching (#4376), reasoning effort compatibility (#4345), and correct model delegation (#4377) indicate demand for finer-grained model control.
- **Platform parity & stability** — Persistent Windows crash reports (#4026), Oracle Linux binary execution issues (#4382), and macOS stderr spam (#4375) highlight a need for cross-platform hardening.
- **Session & agent management** — Concurrent session management (#1799, v1.0.79-5), background agent hook enforcement (#3013), and queued message ordering (#4372, #4373) show demand for more sophisticated multi-agent workflows.

---

## 6. Developer Pain Points

- **MCP connectivity is fragile** — Across at least 7 open issues, MCP server initialization, discovery, and policy checks are failing silently or with opaque errors, particularly on enterprise platforms (GHEC, Azure DevOps). This is the single most-reported pain area.
- **Cross-platform instability** — Windows crashes (#4026), macOS stderr spam (#4375), Oracle Linux ENOEXEC (#4382), and terminal rendering issues (#1799, #3172) suggest the native runtime needs broader platform testing.
- **Model routing & compatibility regressions** — The 1.0.7x line has introduced multiple model-specific incompatibilities (reasoning effort, model delegation, web_search hallucination #4093) that erode trust in the toolchain.
- **Security policy enforcement gaps** — Background agents bypassing hooks (#3013) and MCP servers being silently dropped by policy (#3934, #4378) represent real security and usability risks for enterprise deployments.
- **Session message ordering & queuing** — Queued messages getting stuck (#4373) and steering messages arriving out of order (#4372) degrade the interactive experience, especially in multi-step workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑08‑06**

---

### 1. Today's Highlights
- **No new releases** were published in the last 24 h, keeping the current stable version unchanged.  
- A long‑standing **Memory System** feature request (#1283) continues to gather traction with 19 comments, reflecting strong community interest in persistent, cross‑session context handling.  
- Three recent fixes (PRs #2592, #2590, #2589) address critical runtime bugs: image‑returning MCP tools now degrade gracefully, error messages explicitly point to the missing config fix, and voice‑ACP support is documented.

---

### 2. Releases
*None* – no version tags were pushed in the last 24 h.

---

### 3. Hot Issues  *(3 open items updated today)*  

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **1283** | [Feature Request: Memory System – Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Users need the CLI to retain project patterns, learned conventions, and user preferences between runs, enabling more personalized and efficient development workflows. | **19 comments** – active discussion, many votes for “must‑have” status, no 👍 reactions yet. |
| **2591** | [StrReplaceFile corrupts undecodable bytes outside the edited region](https://github.com/MoonshotAI/kimi-cli/issues/2591) | The tool’s UTF‑8 error‑replacement strategy overwrites non‑UTF‑8 bytes far from the edit region, potentially corrupting binary or mixed‑encoding files (e.g., PDFs, images embedded as text). | 0 comments, 0 👍 – newly reported, still seeking fix. |
| **2588** | [Model declared without capabilities: image‑returning MCP tool aborts mid‑task, after side effects, with no hint at the fix](https://github.com/MoonshotAI/kimi-cli/issues/2588) | When a model lacks a `capabilities` declaration, any MCP tool that returns an image triggers an `LLMNotSupported` error **after** the tool has already executed, leaving side‑effects applied and the session in an inconsistent state. | 0 comments, 0 👍 – critical runtime bug that can silently damage work. |

---

### 4. Key PR Progress  *(3 open PRs merged today)*  

| # | PR & Link | Summary of Changes |
|---|-----------|--------------------|
| **2592** | [fix(soul): degrade unsupported tool media instead of aborting mid‑task](https://github.com/MoonshotAI/kimi-cli/pull/2592) | Modifies `_grow_context` to downgrade image‑returning tools to a non‑blocking state rather than raising `LLMNotSupported`. Prevents side‑effects from being applied and then discarded, restoring session integrity. |
| **2590** | [fix(soul): name the config fix in the unsupported‑capability error](https://github.com/MoonshotAI/kimi-cli/pull/2590) | Improves the error message for missing capabilities to explicitly tell users which config field (`capabilities = { "image": true }`) to add, solving the “no hint at the fix” problem highlighted in #2588. |
| **2589** | [docs: mention qwen‑audio‑agent as a voice ACP client](https://github.com/MoonshotAI/kimi-cli/pull/2589) | Adds a brief note in the ACP documentation that **qwen‑audio‑agent** (an open‑source full‑duplex voice runtime) can be used as a hands‑free, voice‑driven ACP client, expanding the ecosystem of supported clients. |

---

### 5. Feature Request Trends
- **Memory System** dominates the roadmap: users consistently request a unified, AI‑managed (and optionally user‑editable) storage layer for project context, learned coding patterns, and personalized instructions. This points to a high‑priority, cross‑session persistence feature that would differentiate Kimi CLI from single‑session tools.

---

### 6. Developer Pain Points
1. **Data corruption** – `StrReplaceFile`’s blanket UTF‑8 error replacement can unintentionally corrupt binary or mixed‑encoding content, a regression that needs a safer, region‑bounded handling approach.  
2. **Silent roll‑backs** – Missing `capabilities` in `config.toml` leads to mid‑task aborts after tools have already executed, leaving side‑effects applied and the user uncertain about the final state.  
3. **Poor error guidance** – Previously, error messages did not indicate *what* config change would resolve the issue, forcing developers to guess or read source code.  
4. **Lack of voice/AI assistance** – While voice interaction is desirable, there is currently no documented or out‑of‑the‑box voice client, prompting community contributions like `qwen‑audio‑agent`.  

These recurring themes suggest the next release cycle should prioritize robust encoding handling, clearer capability validation, and the Memory System implementation.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



### Today's Highlights  
The Pi community is actively addressing key usability and functionality gaps: improved context window management, enhanced support for multimodal prompts (video/audio), and fixes for cross-platform issues like Node 20 compatibility. Notably, contributions to accommodate JetBrains IDEs in pi-serena and expanded context file handling via `AGENTS.override.md` highlight developer-driven priorities.  

---

### Releases  
No new releases in the last 24 hours.  

---

### Hot Issues  
1. **#7547: Windows support questions** (17 comments)  
   - Many developers struggle with running Pi on Windows due to fragmented documentation and setup methods.  
2. **#5064: Context window option** (7 comments)  
   - Demand for adjustable context windows mirrors Copilot CLI’s feature, critical for long-context workflows.  
3. **#7601: Node 20 crash** (3 comments)  
   - A regression in Node 20 breaks caching, blocking adoption of newer Node versions.  
4. **#7691: Anthropic login over SSH** (1 comment)  
   - Redirect issues on headless/SSH workflows hinder CI/CD and remote users.  
5. **#7666: Bash newline truncation** (2 comments)  
   - Multiline commands behave unexpectedly, breaking workflows reliant on nested commands.  
6. **#7693: Model variant sorting** (1 comment)  
   - Disorganized model IDs in selectors confuse users managing context windows.  
7. **#7634: Missing Copilot models** (2 comments)  
   - Authentication issues post-login prevent model discovery for GitHub Copilot users.  
8. **#7673: Line ranges in @file** (3 comments)  
   - Developers need precise code references for workflows involving large files.  
9. **#7689: Codex end_turn handling** (1 comment)  
   - Half-baked turn finalizations disrupt session reliability in codex-based workflows.  
10. **#7663: LGTM comment parser** (0 comments)  
    - Broken approval comment parsing adds friction to PR reviews.  

---

### Key PR Progress  
1. **#6216: Amazon Bedrock provider**  
   - Adds official AWS Bedrock support via OpenAI Responses API, expanding cloud provider compatibility.  
2. **#7692 & #7690: Natural model sorting**  
   - Improves model selector UX by alphabetically ordering IDs with numeric awareness.  
3. **#7659: Qwen Token Plan provider**  
   - Adds granular Qwen models under the Token Plan API, enabling cost-controlled deployments.  
4. **#7671: Tool prompt colocation**  
   - Bundles tool definitions with their system prompts, reducing ambiguity in agent behavior.  
5. **#7679: line ranges in @file**  
   - Implements line-range support for @file references, critical for precise code navigation.  
6. **#7681: AGENTS.override.md**  
   - Prioritizes per-directory context files, streamlining context management.  
7. **#7680: TUI selection keybinds**  
   - Adds page navigation support to selection menus, improving TUI responsiveness.  
8. **#7664: AGENTS.override.md recognition**  
   - Ensures consistent context file precedence across directories.  
9. **#7685: Disable bunfig autoload**  
   - Prevents crashes in Bun-compiled binaries with missing `bunfig.toml`.  
10. **#7656: Event bus leak fix**  
    - Stops extension listener leaks during session reloads, improving stability.  

---

### Feature Request Trends  
- **Multimodal support**: Video/audio in prompts (#3200) and markdown diagram rendering (#7623).  
- **Context management**: Enhanced via AGENTS.override.md and improved model variants.  
- **Uptime/resilience**: Fixes for session hangs, error handling, and crash regressions.  

---

### Developer Pain Points  
1. **Platform fragmentation**: Windows setup complexity (#7547).  
2. **Session reliability**: Issues with Anthropic APIs (#5291, #7691) and model visibility (#7634).  
3. **Tool execution errors**: Bash newline truncation (#7666) and tool prompt ambiguities.  
4. **Model selection**: Poor sorting and missing model visibility hinder workflow efficiency.  
5. **TUI usability**: Non-scrollable diffs and selection menu interactions (#7597, #7680).  

All links follow the format: `github.com/badlogic/pi-mono #issue#` or `github.com/badlogic/pi-mono PR#`.


</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-08-06

## Today's Highlights

The latest nightly release v0.21.6-nightly.20260806.cb3dc107f includes a test fix for glob external-path handling. Critical security vulnerability #8582 was reported regarding shell command substitution auto-approval bypass. Desktop v0.1.0 stable release brings significant improvements but also introduces Windows startup crash issue #8615.

## Releases

### v0.21.6-nightly.20260806.cb3dc107f
- **Core test fix**: Deflighed glob external-path test with dedicated empty directory instead of /tmp ([#8604](https://github.com/QwenLM/qwen-code/pull/8604))

### v0.21.6 (Release v0.21.6)
- **Native Live Voice support**: Added experimental Live Voice functionality to WebShell on macOS with global keyboard shortcut for real-time audio interactions ([#7859](https://github.com/QwenLM/qwen-code/pull/7859))
- **Web Shell improvements**: Conversation turns now remain expanded during active background operations

### desktop-v0.1.0: Qwen Code Desktop v0.1.0
- First stable release of the Qwen Code Desktop application
- Built on modern Tauri framework replacing previous Electron implementation

## Hot Issues

1. **[#8582](https://github.com/QwenLM/qwen-code/issues/8582)** - **Critical Security Vulnerability**: Read-only shell classifier auto-approves command substitution hidden by line continuation or `${var@P}` syntax. Security-critical issue with 4 comments, P1 priority.

2. **[#8615](https://github.com/QwenLM/qwen-code/issues/8615)** - **Windows Desktop Crash**: Bundled runtime crashes on startup with `EISDIR lstat 'C:'` when opening workspace on Windows 11. Reported same day as v0.1.0 release, 2 comments.

3. **[#8136](https://github.com/QwenLM/qwen-code/issues/8136)** - **Provider Warning Sanitizer Bug**: Sanitizes URLs incorrectly, truncating messages and potentially leaking passwords containing `@`. Security concern with 8 comments, P2 priority.

4. **[#8550](https://github.com/QwenLM/qwen-code/issues/8550)** - **MCP List Hangs**: `qwen mcp list` hangs indefinitely on SSE servers that don't send 'endpoint' message. Affects CLI users, 4 comments, P3 priority.

5. **[#8560](https://github.com/QwenLM/qwen-code/issues/8560)** - **Web Shell 401 Unauthorized**: Refreshing session deep links returns 401 error when `qwen serve` uses bearer token authentication. 3 comments, P2 priority.

6. **[#8557](https://github.com/QwenLM/qwen-code/issues/8557)** - **Terminal Window Duplicating Output**: Shrinks terminal window on macOS Warp causes transcript blocks to re-print, creating duplicate output. 4 comments, P3 priority.

7. **#8092** - **Desktop App Strategy**: Formal request to build maintainability-focused desktop app around Web Shell. Feature request with 5 comments, P3 priority.

8. **#8532** - **CI Log Misdirection**: CI logs make mocked disk-full test errors look like actual runner ENOSPC errors. Development workflow issue, 6 comments, P3 priority.

9. **#8538** - **Copy Response Button Broken**: Copy-response button in Qwen Code Desktop 0.0.5 on Windows 10 does nothing. UI regression, 4 comments, P2 priority.

10. **#8586** - **Background Agent Recovery**: Request to track activeWork and build recovery path for background Agents that outlive prompts or stop making progress. 2 comments, P2 priority.

## Key PR Progress

1. **[#8602](https://github.com/QwenLM/qwen-code/pull/8602)** - **Streaming Response Lifetime Cap**: Caps streaming responses to prevent silent hangs in GitHub-triggered `/review` runs. Addresses critical reliability issue.

2. **[#8613](https://github.com/QwenLM/qwen-code/pull/8613)** - **tmux Backed Interactive Terminal Sub-agent**: Enables agents to run interactive CLIs inside tmux sessions with live terminal views. Major enhancement to agent capabilities.

3. **[#8559](https://github.com/QwenLM/qwen-code/pull/8559)** - **Parallel Agent Activity Feedback**: Improves Web Shell feedback during parallel subagent execution with automatic expansion/collapse.

4. **[#8592](https://github.com/QwenLM/qwen-code/issues/8592)** - **Language Switching Not Working**: Desktop language change in Settings has no effect. High-priority UI bug.

5. **[#8605](https://github.com/QwenLM/qwen-code/issues/8605)** - **Slow Batch Mode Request**: Add `/slow` or `/batch` command for lower-cost asynchronous agent runs. Developer experience enhancement.

6. **[#8580](https://github.com/QwenLM/qwen-code/issues/8580)** - **TUI Flicker in tmux < 3.5**: Continuous screen flickering during streaming in older tmux versions. Performance optimization need.

7. **[#8606](https://github.com/QwenLM/qwen-code/issues/8606)** - **VSCode Companion File Path Bug**: Edit/Write file links always resolve to `<workspace-root>/<basename>` for nested files. Integration issue.

8. **[#8614](https://github.com/QwenLM/qwen-code/pull/8614)** - **Fullscreen Artifact Panel**: Adds fullscreen toggle to Web Shell right panel for better artifact viewing.

9. **[#8608](https://github.com/QwenLM/qwen-code/issues/8608)** - **Inline Image Performance**: Avoid repeated work and height jumps for inline images. Rendering optimization.

10. **[#8350](https://github.com/QwenLM/qwen-code/pull/8350)** - **Trusted Private ASR Base URLs**: Adds allowlist for voice provider base URLs to support private-network ASR gateways.

## Feature Request Trends

1. **Unified Desktop Experience**: Move toward single Tauri-based desktop app reusing Web Shell UI [Issue #8092](https://github.com/QwenLM/qwen-code/issues/8092), [Issue #8596](https://github.com/QwenLM/qwen-code/issues/8596)

2. **Enhanced Session Management**: Local Control mode with QR-code pairing for phone access [Issue #8595](https://github.com/QwenLM/qwen-code/issues/8595), background agent recovery tracking [Issue #8586](https://github.com/QwenLM/qwen-code/issues/8586)

3. **Multi-language Documentation Expansion**: Korean language support request [Issue #8551](https://github.com/QwenLM/qwen-code/issues/8551)

4. **Batch/Aynchronous Execution Modes**: `/slow` command for cost-effective long-running operations [Issue #8605](https://github.com/QwenLM/qwen-code/issues/8605)

5. **Enhanced Voice Capabilities**: Private ASR gateway support [PR #8350](https://github.com/QwenLM/qwen-code/pull/8350)

6. **Improved Tool Output Budgeting**: Hardened tool-output budgeting and artifact lifecycle management [Issue #7306](https://github.com/QwenLM/qwen-code/issues/7306)

## Developer Pain Points

1. **Security Vulnerabilities**: Multiple critical security issues (#8582, #8136) require immediate attention

2. **Cross-Platform Instability**: Windows-specific crashes in Desktop v0.1.0 (#8615) and macOS/WSL terminal issues (multiple entries)

3. **Authentication Issues**: Web Shell bearer token problems (#8560) and session management bugs affecting core workflows

4. **Terminal/UI Rendering Problems**: Duplicate output on window resize (#8557), TUI flickering in tmux < 3.5 (#8580), markdown link clicks doing nothing (#8593)

5. **CI/Integration Failures**: MCP list hanging on SSE servers (#8550), CI logs misleadingly showing disk errors (#8532), GitHub Actions review timeouts (#8597)

6. **Incomplete Localization**: Language switching in Desktop Settings not functioning (#8592)

7. **File Operation Bugs**: VSCode companion resolving all file paths to workspace root instead of nested paths (#8606)

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-06

**Source:** `Hmbown/CodeWhale` (GitHub) | **Period:** Last 24 hours

---

## 1. Today's Highlights

The v0.9.4 release train (`#5135`) continues to advance with 77 commits ahead of `main`, consolidating the 18 train commits from the prior source candidate. The most impactful feature merge is **ACP tool execution** (`#5225`), which transforms the `session/prompt` endpoint from a chat-only stream into a fully tool-capable agent — enabling real code editing, shell execution, and git operations through ACP bridges like Zed and the community `acp-deepseek-adapter`. Additionally, the Runtime API surface expanded significantly with five new PRs covering memory inspection, MCP server lifecycle, goal-loop state, verifier receipts, and skill management.

---

## 2. Releases

**No new releases in the last 24h.** The v0.9.4 release train (`#5135`) is in progress and supersedes the prior candidate (`#5044`). The release notes reference `FINISH-0.9.4.md` in `codewhale-ops` for the full commit inventory.

---

## 3. Hot Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| [#4029](https://github.com/Hmbown/CodeWhale/issues/4029) | Planning to create an interface similar to Reasonix? | OPEN (4 comments) | Signals community demand for a structured reasoning/planning UI layer, potentially a major UX shift. |
| [#5005](https://github.com/Hmbown/CodeWhale/issues/5005) | Support filesystem path whitelist/allowlist in sandbox | CLOSED | Resolved a real-world blocker for Xcode developers whose build artifacts live outside the workspace under `~/Library/Developer/Xcode/DerivedData/`. |
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) | Only one API key can be saved | OPEN (1 comment) | Multi-model users (DeepSeek + GLM) must re-enter keys on every switch — a friction point for polyglot API workflows. |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | Unknown model ids silently degrade to 128K legacy context default | OPEN (1 comment) | A silent fallback bug where a 1M-window model is silently compacted to 128K with no warning — can cause subtle context truncation bugs. |

> **Note:** Only 4 issues were updated in the last 24h. All are included above.

---

## 4. Key PR Progress

| PR | Summary |
|----|---------|
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | **feat(acp):** Exposes `file/search/git/patch/shell` tools over `session/prompt`, turning the ACP endpoint from chat-only into a full code-editing agent. |
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | **release:** v0.9.4 release train — 77 commits ahead of `main`, consolidating all August integration work. |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | **feat(runtime-api):** Adds `/v1/memory` endpoints for bounded inspection and lifecycle controls on active memory resources. |
| [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) | **feat(runtime-api):** Enables `POST /v1/apps/mcp/servers` for creating, updating, and removing MCP servers via HTTP — no more manual TOML/JSON editing. |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | **feat(runtime-api):** Exposes goal-loop state (`GET /v1/threads/{id}/goal`) and completion controls for managed clients. |
| [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) | **feat(runtime-api):** Adds `GET receipts` under fleet runs to surface individual task-level verifier failures with evidence — beyond the aggregate counter. |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | **feat(runtime-api):** Full skill lifecycle HTTP endpoints (install, update, uninstall, trust, audit) mirroring TUI capabilities. |
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | **feat(tui/shell):** Surfaces real wait elapsed time in tool content instead of hiding it in metadata — prevents model busy-polling on short waits and misjudging long stalls. |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | **feat(tui/subagent):** Resumes interrupted child agents from checkpoint via `followup`, eliminating the need to re-dispatch long-running tasks. |
| [#5234](https://github.com/Hmbown/CodeWhale/pull/5234) | **fix(tui):** Keeps alternate scroll off while mouse capture is active — fixes the bug where mouse-wheel input toggled composer history instead of scrolling the transcript. |
| [#5095](https://github.com/Hmbown/CodeWhale/pull/5095) | **fix(ohos):** Re-quotes Windows linker arguments containing spaces — resolves OpenHarmony SDK path issues under `D:\DevEco Studio\...`. |
| [#5192](https://github.com/Hmbown/CodeWhale/pull/5192) | **fix(tui):** Pins `ratatui` to `=0.30.0` — resolves a blocking CPR query race condition in `crossterm`'s event-reader lock at startup. |
| [#5236](https://github.com/Hmbown/CodeWhale/pull/5236) | **docs(evidence):** Attaches live Model Studio proof (MP4 + screenshots) demonstrating `qwen3.8-max` reasoning-to-working transition and credential-free artifact validation. |
| [#5229](https://github.com/Hmbown/CodeWhale/pull/5229) | **docs:** Adds Chinese Windows beginner guide (`WINDOWS_BEGINNER.zh-CN.md`) with 4 screenshots covering install, config, model switching, and permissions. |

---

## 5. Feature Request Trends

Based on the current issue and PR landscape, the most-requested feature directions are:

1. **Multi-provider API key management** — Issue #5250 highlights the need to save keys per provider (DeepSeek, GLM, etc.) rather than a single global key. This is a clear gap for users running polyglot inference setups.
2. **Sandbox filesystem access control** — Issue #5005 (now closed) shows demand for path allowlisting in sandboxed builds, particularly for IDE workflows (Xcode, etc.) where build artifacts live outside the project root.
3. **ACP-first agent capabilities** — PR #5225 and the broader Runtime API expansion (#5129–#5133) indicate strong demand for tool-augmented agents accessible via protocol (ACP, HTTP), not just the TUI.
4. **Reasoning/planning UI** — Issue #4029 signals interest in a structured reasoning interface akin to Reasonix, suggesting the community wants deeper visibility into model deliberation.
5. **Runtime observability** — The cluster of Runtime API PRs (memory, goals, verifier receipts, skill lifecycle, MCP config) reflects a trend toward making the agent runtime fully inspectable and controllable via HTTP for managed/embedded deployments.

---

## 6. Developer Pain Points

- **Silent fallback behavior** — Issue #5244 describes a class of bugs where unknown model IDs silently fall back to a 128K context window, causing subtle truncation in models that actually support larger contexts. Developers need explicit warnings or logging when a fallback occurs.
- **Mouse capture / alternate-scroll conflict** — PR #5234 fixes a long-standing TUI interaction bug where mouse-wheel input toggled composer history instead of scrolling the transcript, frustrating users with trackpad-equipped laptops.
- **ratatui version instability** — PR #5192 pins `ratatui` to `0.30.0` after a `0.30.1+` regression introduced a blocking CPR query that races the TUI event loop, causing startup hangs. Version pinning is now a necessary safeguard.
- **Single API key limitation** — Issue #5250 is a persistent friction point for developers who work across multiple AI providers and must constantly swap keys.
- **Sandbox path restrictions** — Issue #5005 (closed) highlighted that the workspace-write sandbox mode blocks access to system-level build directories, a pain point for native/mobile build workflows.
- **Interrupted subagent recovery** — PR #5242 addresses the frustration of long-running subagent tasks (document review, multi-step search) that, when interrupted, had to be fully re-dispatched rather than resumed from checkpoint.

---

*Digest generated from `Hmbown/CodeWhale` GitHub activity for 2026-08-06. All links reference the upstream repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*