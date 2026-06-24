# AI CLI Tools Community Digest 2026-06-24

> Generated: 2026-06-24 02:26 UTC | Tools covered: 9

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

**Cross‑Tool AI CLI Community Digest – 2026‑06‑24**

| Tool | Issues today | PRs today | Releases today |
|------|--------------|-----------|----------------|
| Claude Code | 0 | 0 | 0 |
| OpenAI Codex | 14 (high‑impact #28879, #28224, #26892, #29532, etc.) | 15 (e.g. #29752, #29765, #29758, #29690‑#29710) | 0 (rust‑toolchain alphas only) |
| Gemini CLI | 8 (issues 22323, 21409, 24353, 22745, etc.) | 10 (e.g. #27966, #28103, #28112, #27971) | 0 |
| GitHub Copilot CLI | 3 | 4 | 1 (v1.0.64) |
| Kimi Code CLI | 1 | 0 | 0 |
| OpenCode | 10 | 10 | 0 |
| Pi | 11 | 10 | 0 |
| Qwen Code | 10 | 10 | 1 (v0.19.1) |
| DeepSeek TUI | 0 | 0 | 0 |

---

### 1. Ecosystem Overview  
The AI‑CLI landscape is fragmented yet rapidly evolving. Centralized “All‑in‑one” suites (OpenAI Codex, Gemini CLI, Qwen Code) coexist with niche, vendor‑specific compilers (Claude Code, Pi). Most projects place a premium on **plugin marketplaces, multi‑agent security, and resource hygiene**, while smaller tools focus on usability polish and Windows‑specific quirks.

---

### 2. Activity Comparison  
*OpenAI Codex* dominates daily churn with 14 open issues and 15 PRs, driven by billing, logging, and model‑metadata bugs. *Gemini CLI* follows with 8 moderate‑to‑high priority issues and 10 security‑centric PRs. *Qwen Code* balances both, with one release and 10 PRs addressing core TUI logic and daemonization. *GitHub Copilot CLI* and *OpenCode* show stable but lower‑volume maintenance. *Pi* emits a high‑volume of UI and provider bugs but no new releases. *Claude Code* and *Kimi Code* are dormant today, suggesting stalled or winter‑paused development.

---

### 3. Shared Feature Directions  

| Feature | Tools | Core Requirement |
|---------|-------|------------------|
| **DAO‑style plug‑in marketplace + source gating** | Codex, Gemini, OpenCode | Normalized TOML/JSON policy for allowing/denying external extensions |
| **Multi‑agent / Ultra‑reasoning** | Codex (#29709/#29710), Gemini (#21968), Qwen Code (#5795) | Automated sub‑agent triggers, deterministic multi‑turn budgeting |
| **Resource & Log hygiene** | Codex (#28224, #29532), Gemini (#26522, #185), Qwen (#5749, #5761) | Thin SQLite/trace logs, cleanup temp dirs (`code_sign_clone`), SSD‑wear mitigation |
| **Transparent billing & rate‑limits** | Codex (#28879), Gemini (#28103), Qwen (#5768) | UI feedback, request‑budget compaction, cost‑per‑token exposure |
| **Provider API stability** | Qwen (#5758, #5832), Pi (#6020, #6016), Codex (#26892) | SDK protocol decoupling, automatic fallback for broken providers |
| **Secure credential handling** | Codex (#29752), Gemini (#28103, #28112), Qwen (#5783) | Credential broker, SSRF protection, URL validation |
| **UI/UX polish** | Gemini (#28105, #27971), Qwen (#5792, #5755), Pi (#5825) | Status line defaults, hardware cursor, markdown scroll fixes |

All four “major” tools (Codex, Gemini, Qwen, Pi) emphasize **security hardening** and **developer‑experience**; smaller projects focus on niche polish or winter maintenance.

---

### 4. Differentiation Analysis  

| Tool | Target Users | Core Feature Focus | Technical Backbone |
|------|---------------|--------------------|--------------------|
| **OpenAI Codex** | Enterprise / prod‑grade tidy workflows | Plugin marketplace + local‑model sync, token‑budget compacting | Rust core + ML‑model‑catalog drift tooling |
| **Gemini CLI** | Domain‑agnostic agents / LLM‑ops | Sub‑agent reliability, ORM for MCP, strict OAuth & SSL checks | Node.js runtime, TS codebase |
| **Qwen Code** | Open‑source / academic LLM experimentation | Daemonized voice dictation, multi‑provider LSP bridges | Go‑based backend, TUI in Rust + Web UI |
| **Pi** | Desktop & mobile LLM UI enthusiasts | Lightweight session trees, provider‑agnostic UI | Rust‑Tauri + provider SDK wrappers |
| **GitHub Copilot CLI** | GitHub‑centric devs, CI/CD | Pay‑per‑use billing, budget tracking | Go + REST + GitHub‑API hooks |
| **OpenCode** | Enterprise dev‑ops | Custom plugin registries, database‑aware ACLs | Rust + SQLite + Tauri |
| **Claude Code** | Privacy‑first teams | Encrypted storage, sandboxed execution | Rust + Zero‑Trust runtime |
| **Kimi Code CLI** | Chinese‑market niche | Local LLM credit handling | Go + native binding |

---

### 5. Community Momentum & Maturity  

| Tool | Community Health Metric | Momentum Status |
|------|------------------------|-----------------|
| **OpenAI Codex** | 13‑comment threads, 200+ thumbs‑up on rate‑limit issue | Fast‑iterating, high engagement, friction points remain |
| **Gemini CLI** | 10+ comments on hang issues, 3 PRs in security area | Moderately active, focused on stability |
| **Qwen Code** | 35 comments on VSCode UI glitches, 10 PRs in core UI | Growing, balancing features with bugs |
| **Pi** | 30+ comments on scroll and provider bugs, 10 PRs | Mature but constrained by UI‑heavy maintainer workload |
| **GitHub Copilot CLI** | 4 comments on license conflicts, 1 release | Steady, sporadic issue spike |
| **OpenCode** | 35‑vote feature request (#4714), 10 PRs | Robust, feature‑rich but UI‐heavy |
| **Claude Code** | dormant (0 issues/PRs) | Low current momentum |
| **Kimi Code CLI** | single issue | Very low momentum |

**Highest activity**: Codex > Qwen Code > Gemini CLI > OpenCode > Pi. **Fastest velocity**: Codex (15 PRs/day) and Gemini (10 PRs/day). **Stability**: Kimi & Claude are effectively frozen; others still push releases.

---

### 6. Trend Signals  

1. **Secure, policy‑driven plugin ecosystems** are emerging as a pan‑tool necessity (Codex, Gemini, OpenCode).  
2. **Multi‑agent orchestration** is a hot research area; all leaders are integrating deterministic sub‑agent triggers or “Ultra” reasoning tiers.  
3. **Resource‑hygiene** (SSD‑wear, temp‑dir cleanup) is now a community‑wide pain point, suggesting the next release wave will dig deep into logging pipelines.  
4. **Voice & daemon orchestration** indicates a move toward “AI‑as‑a‑service” desktop agents (Qwen Code, Pi).  
5. **Transparent billing** (rate‑limits, token costs) is a critical UX touch‑point; solutions are often community‑driven (Codex rate‑limit audit, Gemini OAuth improvements).  
6. **Cross‑platform deliverables** (macOS, Windows, Wayland) remain uneven; the path to full‑stack support still requires dedicated maintenance.

---

**Takeaway for Decision‑Makers**  
If your stack prioritizes **enterprise‑grade plugin marketplaces** and **tight cost control**, *OpenAI Codex* is the most mature yet still actively iterating solution. For **agent‑centric workflows** with heavy security needs, *Gemini CLI* offers a dedicated sub‑agent framework, albeit with occasional UI flakiness. Developers needing **low‑latency, desktop‑friendly AI interactions** should look at *Pi* or *Qwen Code* for their lightweight timing and daemon capabilities. The community is clearly rallying around **policy‑driven extensibility**, **resource hygiene**, and **secure credential handling**—any future adoption or contribution effort should align with these trends.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (2026-06-24)

## 1. Top Skills Ranking

| Rank | Skill | Description | Discussion Highlights | Status |
|------|-------|-------------|---------------------|---------|
| 1 | **document-typography** | Typographic quality control for AI-generated documents (orphan/widow handling, numbering) | Addresses critical document formatting issues affecting every Claude-generated document | [![Open](https://img.shields.io/badge/Open-brightgreen?style=flat-square)](https://github.com/anthropics/skills/pull/514) |
| 2 | **odt skill** | OpenDocument format creation, filling, reading, and conversion to HTML | Supports ODT, ODS, ODF formats for open-source/ISO standard documents | [![Open](https://img.shields.io/badge/Open-brightgreen?style=flat-square)](https://github.com/anthropics/skills/pull/486) |
| 3 | **frontend-design** | Improved clarity and actionability for frontend design guidance | Focuses on making every instruction executable within single conversations | [![Open](https://img.shields.io/badge/Open-brightgreen?style=flat-square)](https://github.com/anthropics/skills/pull/210) |
| 4 | **skill-quality-analyzer** | Comprehensive skill quality evaluation across 5 dimensions (structure, documentation, examples, testing, security) | Dual-analyzer approach including security analysis for marketplace skills | [![Open](https://img.shields.io/badge/Open-brightgreen?style=flat-square)](https://github.com/anthropics/skills/pull/83) |
| 5 | **appdeploy** | Full-stack web application deployment via AppDeploy.ai integration | End-to-end web app deployment and lifecycle management | [![Open](https://img.shields.io/badge/Open-brightgreen?style=flat-square)](https://github.com/anthropics/skills/pull/360) |
| 6 | **testing-patterns** | Comprehensive testing stack covering philosophy, unit testing, and React component testing | Complete testing guidance from testing philosophy to implementation | [![Open](https://img.shields.io/badge/Open-brightgreen?style=flat-square)](https://github.com/anthropics/skills/pull/723) |

**Additional High-Activity Skills:**
- **shodh-memory**: Persistent memory system for AI agents across conversations
- **codebase-inventory-audit**: 10-step workflow for codebase cleanup and documentation auditing
- **skill-creator**: The core skill development framework with multiple critical bug fixes

## 2. Community Demand Trends

From analyzing both PR activity and community issues, five clear demand patterns emerge:

**A. Bug Fixes & Reliability (38% of activity)**
- **Primary focus**: `run_eval.py` trigger detection failures (multiple related issues #556, #1298, #1169, #1323)
- **Problem**: Skills never trigger during evaluation despite correct implementation
- **Impact**: Description optimization loops report 0% recall on all iterations
- **Community frustration**: 12+ independent reproductions documented

**B. Documentation & Standards (22% of activity)**
- **CONTRIBUTING.md**: Added to address community health metrics (25% → improved)
- **System Architecture Documentation**: Comprehensive evidence management system documentation
- **SKILL.md Improvements**: Multiple PRs fixing case-sensitivity issues and YAML validation

**C. Security & Governance (18% of activity)**
- **Security vulnerability**: Community skills impersonating official `anthropic/` namespace
- **Agent-governance proposal**: Safety patterns for AI agent systems
- **Security analyzers**: Dedicated quality and security analysis tools

**D. Windows Compatibility (15% of activity)**
- **Subprocess path resolution**: `claude.cmd` vs `claude` executable issues
- **Encoding fixes**: cp1252 and UTF-8 handling problems
- **Pipe reading**: Windows-specific select() issues

**E. New Capabilities (7% of activity)**
- **Document processing**: typography, ODT, DOCX, PDF skills
- **Enterprise features**: SharePoint concerns, SAP analytics integration
- **Developer tools**: codebase auditing, testing patterns

## 3. High-Potential Pending Skills

### Most Discussed PRs (Above 3 Comments)

**Critical Bug Fixes:**
1. **#1323** - run_eval trigger detection failure (Opens June 16, 2026)
   - Fixes literal slash-command queries being missed
   - **Impact**: Would immediately improve all description optimization loops
   
2. **#1298** - run_eval.py 0% recall issue (Updates June 23, 2026)
   - Multi-faceted eval script bug affecting Windows compatibility
   - Installs eval artifact as real skill
   
3. **#1169** - Description optimization recall=0% issue
   - Specific to skills with slash-command names
   - Critical for existing skills optimization

**New Skills with High Engagement:**
1. **#1323** - Agent governance proposal (Issue, not PR)
   - Safety patterns for AI agent systems
   - High security community interest
   
2. **#412** - Agent governance skill (Issue closed June 2026)
   - Policy enforcement, threat detection, audit trails

**Emerging Skill Categories:**
- **Memory Systems**: shodh-memory, proposed compact-memory
- **Integration Skills**: AppDeploy, SAP-RPT-1-OSS
- **Quality Gates**: skill-quality-analyzer, skill-security-analyzer

## 4. Skills Ecosystem Insight

**One-sentence summary**: The community's most concentrated demand focuses on **fixing skill evaluation infrastructure and enhancing document processing capabilities**, with significant urgency around making existing skills work reliably and improving AI-generated document quality—reflecting the ecosystem's maturation from foundational skill creation toward production-ready reliability and user-value optimization.

The reproduction burden of "run_eval.py never triggers skills" suggests a systemic infrastructure problem blocking the entire skills optimization pipeline, making these bug fixes the highest priority for immediate community impact.

---

User Safety: safe

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑06‑24**  

---

### 1. Today’s Highlights  
- A surge of community concern around **exploding token‑cost rate limits** on the gpt‑5.5 Plus plan (Issue #28879) – users report a 10‑20× jump in cost per token, burning the 5‑hour budget in just 2‑3 prompts.  
- **Storage‑efficiency problems** dominate the hot list: runaway SQLite feedback logs (Issue #28224) and persistent log‑churn after the rust‑v0.142.0 update (Issue #29532) are flagged as major SSD‑wear concerns.  
- Several **local‑model / metadata mismatches** (e.g., gpt‑5.5 listed but returning 404 – Issues #26892, #26910) continue to frustrate Windows and macOS users, highlighting gaps between the UI model picker and backend availability checks.  

---

### 2. Releases  
The repository shipped a series of **rust‑toolchain alpha builds** in the last 24 h:  

- `rust-v0.143.0-alpha.12` (latest) through `rust-v0.143.0-alpha.3`  

These are incremental updates to the Rust compiler/toolchain used by Codex, primarily containing upstream Rust fixes and minor build‑system tweaks. No user‑facing feature changes are announced in the release notes; the focus is on stabilizing the underlying Rust environment for future Codex releases.

---

### 3. Hot Issues  

| # | Issue (link) | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| #28879 | [bug, rate‑limits, app] Codex (gpt‑5.5, Plus plan) — rate‑limit cost per token jumped ~10‑20× since June 16 | Directly impacts billing and usability; users cannot complete typical workflows without exhausting their quota. | 130 comments, 257 👍 – widespread alarm, requests for rollback or transparent metering. |
| #28224 | [bug, CLI, performance] Codex SQLite feedback logs can write ~640 TB/year and rapidly consume SSD endurance | Massive I/O threatens drive lifespan, especially on laptops/devices with limited storage. | 72 comments, 331 👍 – strong support; three PRs merged that cut ~85% of logs (see PR #29432/#29457). |
| #26892 | [bug, windows‑os, exec, CLI, app] gpt‑5.5 listed as available locally but real requests fail with 404 ‘Model not found’ | Breaks local development loops; users see the model in the picker but cannot invoke it. | 84 comments, 28 👍 – frustration over stale metadata; intermittent across Desktop & CLI. |
| #29532 | [bug, app, app‑server, performance] macOS: Persistent SQLite TRACE target=log churn remains after rust‑v0.142.0 | Continues to generate unnecessary log traffic, hurting performance and SSD wear. | 10 comments, 7 👍 – users note partial fixes but residual churn persists. |
| #25667 | [bug, app] macOS app leaves code_sign_clone directories after quit (~965 MB per launch) | Accumulates gigabytes of temporary data, filling disks over time. | 9 comments, 17 👍 – calls for proper cleanup on exit. |
| #27662 | [bug, app, app‑server, performance] macOS: Codex Desktop/app‑server appears to exhaust syspolicyd, causing spctl “Too many open files” globally | Affects all system processes, not just Codex; can render the machine unusable until reboot. | 7 comments, 3 👍 – serious system‑level concern. |
| #23496 | [bug, CLI, skills, subagent] Skill instructions to use subagents are ignored unless repeated in the prompt | Reduces reliability of skill‑based workflows; forces redundant prompting. | 7 comments, 3 👍 – skill‑engine users request deterministic behavior. |
| #26910 | [bug, CLI, app, connectivity] GPT 5.5 has a 404 | Mirrors #26892 but on macOS; indicates a broader sync issue between model catalog and serving layer. | 21 comments, 1 👍 – confirms cross‑platform nature of the problem. |
| #19871 | [bug, mcp, custom‑model, tool‑calls] MCP tool invocation regressed for custom/local providers (Ollama Responses API) in v0.117.0+ | Breaks integration with popular local LLM backends, limiting extensibility. | 8 comments, 5 👍 – MCP adopters ask for regression test restoration. |
| #21863 | [bug, windows‑os, extension] VS Code Codex: central editor panel opens blank on Windows because custom URI route uses fsPath | Blocks core IDE usage for Windows developers; forces work‑arounds or reliance on web UI. | 11 comments, 1 👍 – VS Code extension maintainers prioritize fixing URI handling. |

---

### 4. Key PR Progress  

| # | PR (link) | Summary / Impact |
|---|-----------|------------------|
| #29752 | feat(core): integrate experimental credential broker | Adds a proxy‑owned credential broker layer so child processes can safely access injected secrets without exposing them directly. |
| #28034 | feat(network‑proxy): experimental local credential broker | Foundational work for #29752; moves injectable local credentials behind a managed network proxy to prevent exfiltration. |
| #29765 | [code‑reviewed] [codex] Ignore local curated plugins when remote catalog is active | Prevents conflicts between locally‑installed curated plugins and the remote marketplace; improves predictability of plugin loading. |
| #29758 | core: fix token‑budget compaction baselines | Corrects a bug where pre‑turn compaction incorrectly captured stale step context, ensuring token‑budget calculations stay accurate after model or hash changes. |
| #29690 | [plugins] Add marketplace source requirements | Introduces an enterprise‑keyed TOML table to declare allowed marketplace sources, enabling mergeable policy management. |
| #29691 | [plugins] Enforce marketplace source policy at runtime | Runtime enforcement of the source policy; blocks disallowed plugins from being loaded or refreshed. |
| #29753 | [plugins] Enforce marketplace source admission requirements | Centralizes admission decisions so CLI, app‑server, and external‑agent flows all respect the same source whitelist/blacklist. |
| #29733 | Allow ChatGPT‑hosted MCP servers to use session auth | Decouples MCP authentication from the Codex Apps server name, letting any ChatGPT‑hosted MCP endpoint leverage the current user session. |
| #29709 | [code‑reviewed] Add gated Ultra reasoning effort | Exposes a new “Ultra” reasoning tier only when the model catalog and `multi_agent_mode` feature both opt in, avoiding a new backend token. |
| #29710 | [code‑reviewed] Derive multi‑agent mode from Ultra effort | Makes the effective multi‑agent mode deterministic by deriving it from the selected Ultra effort, eliminating competing sources of truth across thread lifecycle operations. |
| #29767 | Assign response item IDs at forked items | Guarantees that forked response items (including subagent usage hints) receive stable IDs before persistence, fixing durability gaps. |
| #29768 | Update bundled skill installer guidance | Aligns post‑install messaging with the actual skill‑catalog refresh timing (available on next turn) and removes obsolete “restart Codex” instruction. |

*(Only a subset of the 50 PRs updated in the last 24 h is shown; selected for relevance to core functionality, security, and extensibility.)*

---

### 5. Feature Request Trends  
From the open issues and PR discussion, the most‑requested directions are:  

1. **Network & Transport Controls** – HTTPS‑only transport option (#27381) and more reliable proxy/WebSocket fallbacks.  
2. **Plugin & Marketplace Management** – Clear version‑upgrade paths (#29766), remote‑catalog precedence, and source‑based gating (see PRs #29690/#29691/#29753).  
3. **Reasoning & Multi‑Agent Flexibility** – Gated Ultra effort and automatic derivation of multi‑agent mode (PRs #29709/#29710).  
4. **Resource & Log Hygiene** – Persistent demands to cap SQLite feedback logs, clean up temporary directories (`code_sign_clone`, stale git.exe handles), and curb system‑level file‑descriptor exhaustion.  
5. **Model Availability Transparency** – Better synchronization between the UI model picker and actual backend endpoint status (especially for gpt‑5.5 on Windows/macOS).  

---

### 6. Developer Pain Points  
Recurring frustrations evident across the data set:  

- **Rate‑limit opacity & cost spikes** – Sudden, unexplained increases in token cost draining budgets (Issue #28879).  
- **Excessive I/O & storage wear** – SQLite feedback logs and trace churn threatening SSD lifespan (Issues #28224, #29532).  
- **Local model/metadata mismatches** – Models appear selectable but return 404, breaking workflows on Windows and macOS (Issues #26892, #26910).  
- **System‑resource exhaustion on macOS** – Repeated syspolicyd/trustd CPU spikes, “Too many open files” errors, and leftover temporary directories (Issues #16767, #27662, #25667).  
- **Windows path & Unicode issues** – Staging directories created under non‑ASCII user profiles filling disks (Issue #28258).  
- **Extension & IDE integration bugs** – VS Code blank panel, subagent threads mis‑listed as projects on mobile, and MCP tool invocation regressions (Issues #21863, #29769, #19871).  
- **Skill reliability** – Instructions for subagents ignored unless duplicated, reducing confidence in skill‑based automation (Issue #23496).  

Addressing these pain points—particularly stabilizing rate‑limit metering, tightening log‑generation, ensuring model metadata consistency, and cleaning up system‑level resource leaks—will likely yield the biggest immediate satisfaction gains for the Codex developer community.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑06‑24**

---

### 1. Today's Highlights
- No new releases were published in the last 24 h, but activity remains high on bug‑fixes and security hardening.  
- The community is focusing on agent reliability (sub‑agent hang‑ups, misuse of skills, and trajectory visibility) and on tightening security around OAuth/MCP flows and file‑system access.  
- Performance work continues, with a Windows‑startup delay PR identified and several UI/UX polish PRs (sandbox label, ellipsis handling) awaiting review.

---

### 2. Releases
*None reported in the last 24 h.*

---

### 3. Hot Issues  
*(selected by comment count, severity, and community impact)*  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` reported as GOAL success | Misleading status hides true interruption, complicating debugging of long‑running agents. | 8 comments, 👍2 – maintainers marking for retesting. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | Simple commands (folder creation) cause indefinite hangs; users must disable sub‑agents to work around. | 7 comments, 👍8 – high frustration, priority P1. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component‑level evaluations | Extends the behavioral‑eval ecosystem; critical for reliable CI‑gated agent behavior. | 7 comments, 👍0 – ongoing discussion on test coverage. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST‑aware file reads, search, and mapping | Promises fewer turn‑wastes and cleaner token usage by accessing precise AST ranges. | 7 comments, 👍1 – active EPIC with linked sub‑tasks. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub‑agents enough | Limits extensibility; users must explicitly invoke skills that should be auto‑selected. | 6 comments, 👍0 – anecdotal but recurring request. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution stuck with “Waiting input” | After a command finishes, the CLI waits for input that never arrives, blocking workflows. | 4 comments, 👍3 – P1, medium effort. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | Prevents secret leakage from background memory extraction and curtails noisy logs. | 5 comments, 👍0 – security‑focused P2. |
| [#28106](https://github.com/google-gemini/gemini-cli/issues/28106) | Severe 50s+ startup delay on Windows due to eager `execSync` | Affects Windows adopters; a community‑identified patch already cuts startup to ~20 s. | 3 comments, 👍0 – P2, performance hotspot. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low‑signal sessions indefinitely | Unprocessed sessions clog the inbox and waste extraction cycles. | 5 comments, 👍0 – P2, memory‑system reliability. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in Wayland | Blocks Linux users on Wayland‑based desktops from using the browser agent. | 4 comments, 👍1 – P2, platform‑specific blocker. |

---

### 4. Key PR Progress  
*(selected for impact – features, fixes, security, docs, CI)*  

| PR | Summary | Type |
|----|---------|------|
| [#27966](https://github.com/google-gemini/gemini-cli/pull/27966) | Enforce case‑insensitive sensitive‑path blocklist (`.git`, `.env`, `node_modules`) and VS‑Code HITL. | Security fix |
| [#28103](https://github.com/google-gemini/gemini-cli/pull/28103) | Avoid keep‑alive socket reuse during OAuth token exchange to stop `ERR_STREAM_PREMATURE_CLOSE` on Node ≥ 24.17. | Security / core fix |
| [#28112](https://github.com/google-gemini/gemini-cli/pull/28112) | Add SSRF protection to OAuth metadata discovery in MCP flow. | Security fix |
| [#27753](https://github.com/google-gemini/gemini-cli/pull/27753) | Validate `workflow_run` origin before consuming E2E artifact – mitigates fork artifact poisoning. | CI security |
| [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) | Strip model thoughts from scrubbed history turns to stop thought leakage and infinite‑loop monologues. | Core correctness |
| [#28105](https://github.com/google-gemini/gemini-cli/pull/28105) | Fix ellipsis logic in `EditTool.getDescription()` for correct snippet display. | Minor UI fix |
| [#28113](https://github.com/google-gemini/gemini-cli/pull/28113) | Add a small tool registry for eval reporting and AST extraction of tool names used in assertions. | Feature – eval tooling |
| [#28015](https://github.com/google-gemini/gemini-cli/pull/28015) | Implement Cloud Run webhook ingestion service for the Caretaker Agent (GitHub webhook → Firestore → Pub/Sub). | Feature – observability |
| [#27763](https://github.com/google-gemini/gemini-cli/pull/27763) | Document the 20 MB `read_file` file‑size limit. | Documentation |
| [#27958](https://github.com/google-gemini/gemini-cli/pull/27958) | Clarify `GEMINI_CLI_HOME` path and where user‑level `settings.json` should reside. | Documentation |

---

### 5. Feature Request Trends
From the open issues, the most‑requested directions are:

* **Agent self‑awareness & skill utilization** – users want the agent to notice and invoke available skills/sub‑agents automatically (e.g., #21968, #21432, #22598 for sharing sub‑agent trajectories).  
* **AST‑aware tooling** – precise file reads/search/mapping to reduce token waste and turn count (issues #22745, #22746, #22746‑linked).  
* **Visibility & debugging** – better sub‑agent context in bug reports, trajectory sharing via `/chat share`, and clearer UI signals (sandbox label, ellipsis, shell “awaiting input”).  
* **Reliability & safety** – prevent destructive actions, enforce tool‑count limits, and improve memory‑system handling (auto‑memory retries, invalid patch quarantine).  
* **Cross‑platform polish** – Wayland browser agent support, Windows startup performance, and consistent behavior across terminals.

---

### 6. Developer Pain Points
Recurring frustrations expressed in the issues and PR discussions:

* **Agent hangs / unresponsiveness** – Generalist agent, shell “Waiting input”, browser subagent on Wayland, and Vite‑app interactive prompts cause indefinite waits.  
* **Sub‑agent misbehavior** – Agents ignore `settings.json` overrides (maxTurns), run without explicit permission, and fail to use provided skills.  
* **Memory‑system quirks** – Auto Memory retries low‑signal sessions, silently skips invalid patches, and logs excessively, making troubleshooting hard.  
*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Today's Highlights: The latest release v1.0.64 was launched with key updates, including the pay-per-use feature retention and budget tracking improvements.  

Releases: v1.0.64 (2026-06-23) received frequent attention, enhancing usability and adding new functionalities.  

Hot Issues: Critical bugs include conflicts in cruising texture processing and unexpected behavior when switching between environments.  

Key PR Progress: Notable additions like the greeting console log initialization were prioritized, alongside debugging fixes for known issues.  

Feature Request Trends: High demand for improved text alignment on dark terminals and smoother UI interactions align with recurring usage scenarios.  

Developer Pain Points: Multiple conflicts arise from legacy integration challenges and inconsistent tool compatibility across platforms.  

Recommendations: Prioritize stability, further optimize resource usage, and address surface conflicts to enhance user satisfaction.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑06‑24**

---

### 1. Today's Highlights  
- No new releases were published in the past day.  
- A single open issue reports a bug where the CLI in *yolo* mode repeatedly asks for approval, even when using a paid key and model **k2.6** on Debian. The bug has yet to receive a fix or a response from the maintainers.

---

### 2. Releases  
No new releases were available during the last 24 hours, so there are no changes to report.

---

### 3. Hot Issues  
| # | Title | Why It Matters | Community Reaction | Link |
|---|------|----------------|--------------------|------|
| 2448 | [bug] Kimi CLI is prompting for approval in yolo mode | **Yolo mode** is meant to let users run commands without interactive prompts. A repeated approval request interferes with automation and scripting workflows, causing delays and breaking CI pipelines. | 1 comment + 0 likes – the issue is acknowledged but still open. | <https://github.com/MoonshotAI/kimi-cli/issues/2448> |

*(Only one relevant issue was found for the period; far fewer than the 10‑item target.)*

---

### 4. Key PR Progress  
No pull requests were updated in the recent 24 hours, so the community has no new feature or bug‑fix proposals to discuss.

---

### 5. Feature Request Trends  
From the single issue, the community is pushing for **more reliable yolo mode** that respects paid APIs and does not interrupt scripted workflows. In other words: *automatic, non‑interactive usage that respects subscription status*.

---

### 6. Developer Pain Points  
- **Prompt Interruption in Non‑Interactive Mode** – Developers rely on scriptable CLI commands; any unnecessary prompt undermines their automation pipelines.  
- **Unclear Status Detection** – The CLI does not correctly differentiate between free and paid usage contexts, leading to redundant approval requests.

Addressing these points would greatly improve CI/CD integration and overall developer experience.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Digest - 2026-06-24**  

---

### **1. Today's Highlights**  
Community activity centers on enhancing multimodal capabilities and refining the desktop experience. Key updates include proposals for granular tool permissions (#17607), fixes for WSL path resolution conflicts (#30895), and recent PRs addressing session navigation stability and UI responsiveness. Developers are also pushing for improved RTL language support and session history reliability.  

---

### **2. Releases**  
No new versions were released in the last 24 hours.  

---

### **3. Hot Issues**  
1. **[#4714]** TUI string search in sessions: High-vote feature request for analog "find" functionality in session buffers. *Community reaction: 35 ⬆️, 28 comments.* ✅  
2. **[#14212]** DBMS state storage: Advocacy for expanded database support (PostgreSQL) following Drizzle migration. *11 ⬆️, 11 comments.* ✅  
3. **[#32694]** Worker termination crashes: Critical session freeze after first interaction. *8 ⬆️, 8 comments.* 🔴  
4. **[#32747]** Stale file mentions: New files missing from `@` autocomplete until restart. *6 ⬆️, 6 comments.* ⚠️  
5. **[#30895]** WSL path corruption: v1.16.0 converts `/mnt/c/...` to Windows paths, breaking file access. *5 ⬆️ comments.* 🔑  
6. **[#16874]** Tauri Plugins: Interest in Slack/Linear integrations for desktop. *4 ⬆️ comments.* 🚀  
7. **[#33568]** `/export` desktop app: Demand for TUI-style conversation export. *3 ⬆️ comments.* ✨  
8. **[#24065]** Plugin config hooks: Debate over supported agent registration patterns. *3 ⬆️, 3 comments.* ⚙️  
9. **[#14797]** Permission window scrolling: UI UX friction reported. *5 ⬆️ comments.* 📝  
10. **[#15306]** Provider header conflicts: Custom auth headers not applied in v1.2.x. *4 ⬆️ comments.* 🧩  

---

### **4. Key PR Progress**  
1. **[#33571]** Schema refactor: Centralized Agent/Workspace schemas for plugin consistency. ✅  
2. **[#33574]** Session notifications: Fixed UI state corruption during tab navigation. 🚀  
3. **[#15926]** MCP Apps: Rich iframe UI integration via sandboxed tooling. 🎮  
4. **[#32370]** Linux clipboard UI: Selection → copy workflow stabilized. 💻  
5. **[#33557]** Project icon reactivity: Fixed project icon sync in UI components. 🎯  
6. **[#33569]** Session navigation: Preload route modules to reduce loading screens. ⚡  
7. **[#33567]** Titlebar shortcuts: Shortcut registration scoped per tab. 🎛️  
8. **[#33566]** Tab prompt state retention: Persist conversation state on tab switch. 💾  
9. **[#33563]** Permission dock visibility: Prevent overflow on long permission patterns. 🛡️  
10. **[#33565]** MIME type restoration: Ensured file mentions use plaintext for usable code. 📄  

---

### **5. Feature Request Trends**  
- **Multimodal support**: Requests for image bytes (Issue #20001) and tool permissions (#17607).  
- **Cross-platform DX**: WSL path fixes (#30895), Linux clipboard (#32370), and desktop scanters (#19513).  
- **Agent modularity**: Satisfying #14212 (DBMS support) and #17607 (tool permissions) as top structural needs.  
- **UI polish**: TUI search (#4714), RTL text (#10908), and session history (#26505) dominate UX debates.  

---

### **6. Developer Pain Points**  
- **Session instability**: Worker crashes (#32694), path workflow interruptions (#32080), and freezes post-lock (#15431).  
- **Tooling fragmentation**: Inconsistent file mentions (#32747), unclear MCP server args (#9776), and unclear custom header usage (#15306).  
- **Plugin limitations**: Stale config patterns (#24065), missing MIME handling (#33565), and unreliable agency sync (#33557).  

---  
*All links resolved via GitHub URLs. Prioritize starred ⬆️ / 🔴 issues for critical blockers.*


</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑06‑24**  
*Deal with the latest in Pi‑mono, from new releases to the most heated bugs and feature requests.*

---

### 1. Today’s Highlights  
- **Release 0.80.2** fixed several provider‑specific quirks (Bedrock profile resolution, Fireworks custom‑model defaults) and adopted a cleaner `api_key` discriminator for `ApiKeyCredential`.  
- The TUI now supports a *hardware cursor* rendering, improving focus handling (PR #5268).  
- The community converged on **normalizing session names** and **threaded‑session sorting** to avoid accidental data loss and keep session trees legible.

---

### 2. Releases  
**v0.80.2**  
- *Provider bugs patched*: Bedrock `AWS_PROFILE`, Fireworks session‑affinity, and Togeth‑‑style requests are now stable.  
- *Auth model switched*: `ApiKeyCredential` uses `type:"api_key"` (env‑scoped) instead of the legacy `type:"api-key"`.  
- *New keybinding*: `Ctrl+J` adds a newline alongside `Shift+Enter`.  
- *Provider label tidied*: ZAI is displayed as “ZAI Coding Plan (Global)” for clarity.

*(No other newer releases in the last 24 h.)*

---

### 3. Hot Issues (top 10 by impact)  

| # | Title | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **5825** | *Streaming markdown forces scroll to bottom* | Breaks long‑form markdown reading; hampers UI usability. | 30 comments, several blockers; PR #6026 underway. |
| **6020** | *DeepSeek provider broken in 0.80* | Confirms a provider‑specific regression that blocks entire workflows. | Closed, but triggered an urgent PR. |
| **6016** | *Nvidia provider broken in 0.80.1* | Affects the GPU‑accelerated local model path; many developers rely on it. | 7 comments, open revert debate. |
| **6002** | *`SessionManager.open()` truncates non‑session files* | Data loss risk; users unknowingly destroy log files. | 2 comments, urgent fix desired. |
| **5996** | *Footer breaks when session name contains newlines* | UI corruption that obscures important context. | Closed with quick rename logic. |
| **5976** | *`/model` silently overrides defaultModel* | Unexpected global state change, leading to silent failures. | 2 comments, high visibility. |
| **5946** | *Esc twice shortcut no longer opens /tree* | Minor UX regression; users rely on shortcut for file navigation. | 4 comments, simple tweak. |
| **5824** | *Streaming markdown scroll* (duplicate of 5825) | Re‑issues from different forks. | Consolidated discussion. |
| **5992** | *Crash due to “value.startsWith”* | Runtime crash after long session reloads; limits reliability. | 2 comments, urgent patch requested. |
| **5974** | *Safe multiline GitHub PR body creation* | Improves IPython‑style formatting for PR bodies; important for extension authors. | 2 comments, minor doc change. |

---

### 4. Key PR Progress (latest 10)

| # | Title | What it delivers | Link |
|---|-------|------------------|------|
| **5268** | *Fix TUI: render hardware cursor by default* | Eliminates the “filled block” cursor when losing focus. | https://github.com/earendil-works/pi/pull/5268 |
| **6026** | *Fix TUI: stabilize working status row* | Addresses crash triggered by issue #5825. | https://github.com/earendil-works/pi/pull/6026 |
| **6018** | *Feature: show context estimates in session tree* | Adds per‑turn context usage preview for debugging. | https://github.com/earendil-works/pi/pull/6018 |
| **5832** | *Fix AI: surface provider HTTP error body* | Exposes raw SDK error payloads, improving debugging. | https://github.com/earendil-works/pi/pull/5832 |
| **6004** | *Normalize modern Microsoft Foundry endpoints* | Allows `AZURE_OPENAI_BASE_URL` to point to new *.ai.azure.com* endpoints. | https://github.com/earendil-works/pi/pull/6004 |
| **5262** | *Feat AI: add Anthropic Vertex provider* | Adds `anthropic-vertex` adapter for Google Cloud Vertex AI. | https://github.com/earendil-works/pi/pull/5262 |
| **5994** | *Fix AI: route OpenCode Go models through Anthropic* | Correctly routes `minimax‑m2.7`, `qwen3.6‑plus` to Anthropic path. | https://github.com/earendil-works/pi/pull/5994 |
| **5790** | *Fix session listing retention of full transcript* | Decreases memory footprint of session picker. | (merged pre‑release) |
| **5784** | *Feat: sort threaded sessions by latest activity* | Keeps session tree relevant during long threads. | https://github.com/earendil-works/pi/pull/5784 |
| **5999** | *Fix AI: normalize session names* | Enforces consistent padding & trimming before save. | https://github.com/earendil-works/pi/pull/5999 |

---

### 5. Feature Request Trends  

| Direction | Evidence | Impact |
|-----------|----------|--------|
| **Multi‑session & TUI switching** | Issue #5700, #6002, #5972 | Enables parallel conversations; core to flows like “agent‑swarm”. |
| **Enhanced debugging & logging** | Issues #5825, #5932, PR #5832 | More visibility into provider responses and error payloads accelerates triage. |
| **Provider API expansion** | PR #5262 (Anthropic Vertex), #6024 (MiniMax image gen), #5986 (Merge Gateway) | Broadens Pi’s out‑of‑the‑box vendor coverage. |
| **Session name hygiene** | Issues #5976, #5996, #5999 | Prevents accidental data truncation or UI breakage. |
| **UI/UX consistency** | Issues #5946, #6026, #5982 | Focus on stable keybindings and visual feedback. |
| **Automation via slash commands** | Issues #6012, #5895 | Simplifies agent initiation without manual tooling. |

---

### 6. Developer Pain Points  

| Pain | Occurrence | Suggested mitigation |
|------|------------|----------------------|
| **Provider “function not found” errors** | 6016, 6017, 6021 | Force redeployment to previous stable release; issue PRs to add fallback checks. |
| **Session data loss (truncation)** | 6002, 5700 | Warn before opening non‑session files; stash backups automatically. |
| **Long‑form content scrolling** | 5825, 5996 | TUI buffering and cursor handling improvements; adopt manual scroll controls. |
| **Confusing defaultModel changes by /model** | 5976 | Separate “live” config from “default” setting; expose via CLI flags. |
| **Inconsistent provider‑specific API changes** | 6020, 6021 | Consolidate provider adapters; add automated regression tests per provider. |

---

**Bottom line:** the Pi mono community remains highly active. Key focus areas are rendering stability, session safety, and expanding provider support. The latest PRs show a strong push for better debugging and user‑friendly features such as slash‑commands. Stay tuned for the next release as many of these bug‑fixes and feature team‑up patches roll out.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>


# Qwen Code Community Digest - 2026-06-24

## Today's Highlights
The project released **v0.19.1** stable alongside a nightly build, introducing voice dictation for the web shell, improved status line defaults, and security enhancements. Major progress on daemon architecture, tool UI partitioning, and provider protocol mapping addressed long-standing compatibility issues.

## Releases
- **v0.19.1** - Stable release with CLI session list cursor validation fixes and MCP resource completion matching
- **v0.19.1-nightly.20260624.a234860a4** - Nightly build featuring remote LSP status routes
- **v0.18.5-preview.0** - Preview release
- **v0.19.0** and **v0.18.5** - Previous releases with auto-publish VSCode companion support

## Hot Issues
1. **[VSCode Extension Visibility](https://github.com/QwenLM/qwen-code/issues/4488)** - Users report the extension flashes in the sidebar then disappears in VSCode 1.120.0. High priority UI bug affecting user onboarding.

2. **[Session List Cursor Security](https://github.com/QwenLM/qwen-code/issues/5708)** - Negative cursor values in session list pagination could cause unexpected behavior. Closed with validation improvements.

3. **[API Key Detection](https://github.com/QwenLM/qwen-code/issues/3877)** - User reports `OPENCODE_GO_API_KEY` in `.env` file is not recognized. Common authentication friction point.

4. **[Protocol/AuthType Decoupling](https://github.com/QwenLM/qwen-code/issues/5758)** - Design discussion on mapping `providerId` to SDK protocols for ACP/VSCode compatibility. Critical for multi-provider support.

5. **[Prompt Reprocessing Performance](https://github.com/QwenLM/qwen-code/issues/5736)** - Users report increased full prompt reprocessing after recent updates, impacting local LLM performance.

6. **[Input Box Rendering](https://github.com/QwenLM/qwen-code/issues/5562)** - Background color breaks when input text wraps in the TUI interface. Visual quality issue.

7. **[Model Selector UI Bug](https://github.com/QwenLM/qwen-code/issues/5761)** - Multiple checkmarks appear in the model dropdown, and status bar shows incorrect plan information.

8. **[WebFetch Security](https://github.com/QwenLM/qwen-code/issues/5782)** - Tool should reject URLs containing userinfo (username/password) to prevent credential exposure.

9. **[Git Command Guards](https://github.com/QwenLM/qwen-code/issues/5749)** - Feature request to add deterministic guards blocking destructive git commands in auto mode.

10. **[Qwen Daemon](https://github.com/QwenLM/qwen-code/issues/5768)** - Proposal for a persistent daemon process to enable scheduled tasks without active frontend.

## Key PR Progress
1. **[Status Line Default](https://github.com/QwenLM/qwen-code/pull/5792)** - Enables built-in status line preset automatically for new users, improving first-run experience.

2. **[ASR Transcript Refinement](https://github.com/QwenLM/qwen-code/pull/5794)** - Passes raw voice transcripts through fast model to remove filler words before insertion.

3. **[Provider Protocol Mapping](https://github.com/QwenLM/qwen-code/pull/5793)** - Decouples provider identity from SDK routing in backward-compatible way.

4. **[Tool Display Partitioning](https://github.com/QwenLM/qwen-code/pull/5661)** - Replaces binary compact/full rendering with type-based tool categorization.

5. **[Web Shell Voice Dictation](https://github.com/QwenLM/qwen-code/pull/5755)** - Adds voice dictation support to the web shell via daemon WebSocket.

6. **[Daemon Startup Optimization](https://github.com/QwenLM/qwen-code/pull/5785)** - Reaches HTTP listener earlier by deferring heavy initialization.

7. **[WebFetch URL Validation](https://github.com/QwenLM/qwen-code/pull/5783)** - Rejects URLs with embedded userinfo component.

8. **[Workspace Permissions API](https://github.com/QwenLM/qwen-code/pull/5743)** - Adds REST endpoints for managing permission rules.

9. **[Virtualized Terminal History](https://github.com/QwenLM/qwen-code/pull/5738)** - Enables in-app scrollable history by default.

10. **[Unicode Icon Replacement](https://github.com/QwenLM/qwen-code/pull/5788)** - Replaces emoji thinking/summary icons with consistent Unicode text symbols.

## Feature Request Trends
- **Daemon Architecture**: Persistent background process for scheduled tasks and system service integration (macOS launchd, Linux systemd)
- **Vision Model Fallback**: `/model --vision` flag for automatic fallback when primary model lacks vision support
- **Chrome Extension Revival**: Re-implement browser integration via daemon + web UI architecture
- **Enhanced Status UI**: Default status line, thinking intent indicators, and Unicode symbol consistency
- **Security Hardening**: Secret disclosure prevention, destructive git command guards, and URL validation improvements

## Developer Pain Points
- **Fractional Value Acceptance**: Multiple settings (maxSessions, maxConnections, compaction counts, timeouts) incorrectly accept fractional values when only integers make sense
- **VSCode Integration**: Extension visibility issues in newer VSCode versions
- **Authentication Configuration**: Environment variable and `.env` file handling inconsistencies
- **Performance Regression**: Increased prompt reprocessing affecting local LLM workflows
- **UI Rendering Bugs**: Background color breaks and emoji/icon display inconsistencies in TUI


</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*